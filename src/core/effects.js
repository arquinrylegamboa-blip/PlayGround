import * as THREE from 'three';

/* ---------------------------------------------------------------------------
   FX: pooled GPU points, rigid debris, cinematic beams, shockwaves, rain.
--------------------------------------------------------------------------- */

function canvasTexture(draw, size = 64) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  draw(ctx, size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const softCircle = canvasTexture((ctx, s) => {
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.8)');
  g.addColorStop(0.7, 'rgba(255,255,255,0.22)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, s, s);
});
const streakTexture = canvasTexture((ctx, s) => {
  const g = ctx.createLinearGradient(0, 0, 0, s);
  g.addColorStop(0, 'rgba(255,255,255,0)');
  g.addColorStop(0.5, 'rgba(255,255,255,1)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(s * 0.35, 0, s * 0.3, s);
});
const glowTexture = canvasTexture((ctx, s) => {
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.2, 'rgba(255,255,255,0.9)');
  g.addColorStop(0.5, 'rgba(255,255,255,0.3)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, s, s);
});

const PARTICLE_VERT = `
attribute float aSize;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = color;
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * (340.0 / max(1.0, -mv.z));
  gl_Position = projectionMatrix * mv;
}`;
const PARTICLE_FRAG = `
uniform sampler2D map;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec4 t = texture2D(map, gl_PointCoord);
  if (t.a < 0.02) discard;
  gl_FragColor = vec4(vColor, t.a * vAlpha);
}`;

class ParticleLayer {
  constructor(scene, max, additive, texture) {
    this.max = max;
    this.items = [];
    this.positions = new Float32Array(max * 3);
    this.colors = new Float32Array(max * 3);
    this.sizes = new Float32Array(max);
    this.alphas = new Float32Array(max);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.sizes, 1));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1));
    geo.setDrawRange(0, 0);
    const mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: texture } },
      vertexShader: PARTICLE_VERT,
      fragmentShader: PARTICLE_FRAG,
      transparent: true,
      depthWrite: false,
      vertexColors: true,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 4 : 2;
    scene.add(this.points);
    this.geo = geo;
  }

  emit(p) {
    if (this.items.length >= this.max) this.items.shift();
    this.items.push(p);
  }

  update(dt) {
    const items = this.items;
    let write = 0;
    for (let i = 0; i < items.length; i++) {
      const p = items[i];
      p.life -= dt;
      if (p.life <= 0) continue;
      p.vy -= (p.gravity || 0) * dt;
      const drag = Math.max(0, 1 - (p.drag || 0) * dt);
      p.vx *= drag; p.vz *= drag;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      if (p.y < 0.4 && p.vy < 0) {
        p.y = 0.4;
        p.vy *= -0.18;
        p.vx *= 0.7; p.vz *= 0.7;
      }
      const t = p.life / p.maxLife;
      const alpha = p.fade === 'in' ? Math.min(1, (1 - t) * 4) * t : t * (p.alpha ?? 1);
      const size = p.size * (p.grow ? (1 + (1 - t) * p.grow) : 1);
      const idx = write++;
      this.positions[idx * 3] = p.x;
      this.positions[idx * 3 + 1] = p.y;
      this.positions[idx * 3 + 2] = p.z;
      this.colors[idx * 3] = p.r;
      this.colors[idx * 3 + 1] = p.g;
      this.colors[idx * 3 + 2] = p.b;
      this.sizes[idx] = size;
      this.alphas[idx] = Math.max(0, Math.min(1, alpha));
      // keep alive items compacted
      if (write - 1 !== i) items[write - 1] = p;
    }
    items.length = write;
    this.geo.setDrawRange(0, write);
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
    this.geo.attributes.aSize.needsUpdate = true;
    this.geo.attributes.aAlpha.needsUpdate = true;
  }

  clear() { this.items.length = 0; this.geo.setDrawRange(0, 0); }
}

function hexToRgb(hex) {
  return { r: ((hex >> 16) & 255) / 255, g: ((hex >> 8) & 255) / 255, b: (hex & 255) / 255 };
}

export class Effects {
  constructor(scene, settings) {
    this.scene = scene;
    this.settings = settings;
    const scale = settings.particleCount;
    this.max = Math.floor(2200 * scale);
    this.additive = new ParticleLayer(scene, Math.floor(1200 * scale), true, softCircle);
    this.normal = new ParticleLayer(scene, Math.floor(1600 * scale), false, softCircle);
    this.debris = new DebrisPool(scene, Math.floor(150 * scale));
    this.beams = [];
    this.shockwaves = [];
    this.flashes = [];
    this.shake = { amount: 0, time: 0, duration: 0 };
    this.lightPool = [];
    this.rain = new Rain(scene, settings);
    this.enabled = true;
    this.tmp = new THREE.Vector3();
  }

  setQuality() {
    // Quality changes apply to future bursts; pools remain stable for simplicity.
    this.rain.setQuality(this.settings.get('particles'));
  }

  shakeCamera(amount, duration = 0.35) {
    if (!this.settings.get('cameraShake')) return;
    this.shake.amount = Math.max(this.shake.amount, amount);
    this.shake.time = Math.max(this.shake.time, duration);
    this.shake.duration = Math.max(this.shake.duration, duration);
  }

  getShake(dt) {
    const s = this.shake;
    if (s.time <= 0) { s.amount = 0; return { x: 0, y: 0 }; }
    s.time -= dt;
    const k = s.amount * Math.max(0, s.time / Math.max(0.001, s.duration));
    return { x: (Math.random() - 0.5) * k, y: (Math.random() - 0.5) * k };
  }

  emit(kind, pos, opts = {}) {
    const q = this.settings.particleCount;
    const n = Math.max(1, Math.round((opts.count ?? 10) * q));
    const color = opts.color ?? 0xffaa55;
    const c = hexToRgb(color);
    const speed = opts.speed ?? 8;
    const spread = opts.spread ?? 0.6;
    const size = opts.size ?? 2.2;
    const life = opts.life ?? 1;
    const gravity = opts.gravity ?? 0;
    const drag = opts.drag ?? 0.4;
    const grow = opts.grow ?? 0;
    const layer = opts.additive ? this.additive : this.normal;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const b = Math.acos(2 * Math.random() - 1);
      const sp = speed * (0.35 + Math.random() * 0.8);
      const dx = Math.sin(b) * Math.cos(a), dy = Math.cos(b), dz = Math.sin(b) * Math.sin(a);
      layer.emit({
        x: pos.x + dx * spread, y: Math.max(0.4, pos.y + dy * spread * 0.6), z: pos.z + dz * spread,
        vx: dx * sp + (opts.vx || 0), vy: dy * sp * (opts.up ?? 1) + (opts.vy || 0), vz: dz * sp + (opts.vz || 0),
        life: life * (0.6 + Math.random() * 0.8), maxLife: life,
        size: size * (0.6 + Math.random() * 0.9), r: c.r, g: c.g, b: c.b,
        gravity, drag, grow, alpha: opts.alpha ?? 0.9, fade: opts.fade,
      });
    }
  }

  dust(pos, radius = 4, count = 30, color = 0xa89a86) {
    this.emit('dust', pos, { count, color, speed: radius * 0.8, spread: radius * 0.5, size: radius * 0.9, life: 2.6, gravity: -1.8, drag: 0.7, grow: 1.8, alpha: 0.42, up: 0.4 });
    this.emit('dust', pos, { count: Math.round(count * 0.4), color: 0x6a6258, speed: radius * 0.4, spread: radius * 0.8, size: radius * 1.2, life: 3.6, gravity: -0.8, drag: 0.5, grow: 2.4, alpha: 0.25, up: 0.2 });
  }

  sparks(pos, count = 14, color = 0xffc46b, speed = 18) {
    this.emit('sparks', pos, { count, color, speed, spread: 0.4, size: 1.5, life: 0.55, gravity: 32, drag: 0.5, additive: true, alpha: 1 });
  }

  glass(pos, count = 24) {
    this.emit('glass', pos, { count, color: 0xbfe8ff, speed: 14, spread: 1.2, size: 1.2, life: 1.2, gravity: 26, drag: 0.15, additive: true, alpha: 0.8 });
  }

  fire(pos, count = 22, color = 0xff7a2e, size = 2.8) {
    this.emit('fire', pos, { count, color, speed: 12, spread: 1.2, size, life: 0.8, gravity: -7, drag: 1.2, additive: true, grow: 0.8, alpha: 0.9 });
    this.emit('smoke', pos, { count: Math.round(count * 0.5), color: 0x332f2c, speed: 6, spread: 1.6, size: size * 1.6, life: 2.2, gravity: -3, drag: 0.8, grow: 2, alpha: 0.35 });
  }

  smoke(pos, count = 18, color = 0x4b4744) {
    this.emit('smoke', pos, { count, color, speed: 5, spread: 1.4, size: 3.2, life: 2.8, gravity: -2.5, drag: 0.8, grow: 2.2, alpha: 0.3 });
  }

  ice(pos, count = 24, color = 0xbfefff) {
    this.emit('ice', pos, { count, color, speed: 14, spread: 0.9, size: 1.8, life: 1.3, gravity: 12, drag: 0.4, additive: true, alpha: 0.9 });
    this.emit('mist', pos, { count: Math.round(count * 0.5), color: 0xdff8ff, speed: 5, spread: 1.5, size: 3, life: 2.2, gravity: -1, drag: 1, grow: 2, alpha: 0.22 });
  }

  acid(pos, count = 20, color = 0xc6ff4d) {
    this.emit('acid', pos, { count, color, speed: 10, spread: 1.1, size: 2, life: 1.4, gravity: 18, drag: 0.4, additive: true, alpha: 0.9 });
    this.emit('mist', pos, { count: 10, color: 0x8fff55, speed: 4, spread: 1.4, size: 2.4, life: 2, gravity: -1, drag: 1, grow: 1.5, alpha: 0.2 });
  }

  blood(pos, count = 10) {
    this.emit('dust', pos, { count, color: 0x5a1f1f, speed: 8, spread: 0.5, size: 1.4, life: 0.9, gravity: 22, drag: 0.2, alpha: 0.55 });
  }

  explosion(pos, power = 1, color = 0xff8a3d) {
    this.fire(pos, Math.round(35 * power), color, 3.2 * power);
    this.sparks(pos, Math.round(30 * power), 0xffd27a, 26 * power);
    this.dust(pos, 8 * power, 30 * power, 0x8a7a68);
    const flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture, color, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
    flash.position.copy(pos);
    flash.scale.setScalar(8 * power);
    this.scene.add(flash);
    const light = new THREE.PointLight(color, 220 * power, 120 * power, 2);
    light.position.copy(pos);
    this.scene.add(light);
    this.flashes.push({ sprite: flash, light, life: 0.5, maxLife: 0.5, power });
    this.shakeCamera(0.7 * power, 0.6);
  }

  shockwave(pos, radius, color = 0xffc46b) {
    const geo = new THREE.RingGeometry(0.82, 1, 64, 1);
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.75, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false });
    const ring = new THREE.Mesh(geo, mat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(pos.x, 1.2, pos.z);
    ring.scale.setScalar(1);
    this.scene.add(ring);
    const ring2 = new THREE.Mesh(geo, mat.clone());
    ring2.material.opacity = 0.3;
    ring2.rotation.x = -Math.PI / 2;
    ring2.position.set(pos.x, 0.7, pos.z);
    this.scene.add(ring2);
    this.shockwaves.push({ ring, ring2, life: 1.2, maxLife: 1.2, radius, color });
    this.dust(pos, radius * 0.28, Math.round(40 * this.settings.particleCount), 0xb4a48c);
  }

  beam(opts) {
    const group = new THREE.Group();
    const coreMat = new THREE.MeshBasicMaterial({ color: opts.color, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false });
    const outerMat = new THREE.MeshBasicMaterial({ color: opts.secondary ?? opts.color, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const core = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 10, 1, true), coreMat);
    const outer = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 12, 1, true), outerMat);
    group.add(core, outer);
    const impact = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture, color: opts.color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
    impact.scale.setScalar(10);
    const light = new THREE.PointLight(opts.color, 300, 140, 2);
    group.add(impact, light);
    this.scene.add(group);
    const b = {
      group, core, outer, impact, light, coreMat, outerMat,
      start: opts.start.clone(), end: opts.end.clone(),
      width: opts.width ?? 2.2, life: opts.duration ?? 1.2, maxLife: opts.duration ?? 1.2,
      color: opts.color, secondary: opts.secondary, sparkTimer: 0, damageTick: 0,
      updateStart: opts.updateStart || null,
    };
    this.beams.push(b);
    return b;
  }

  updateBeam(b, dt, camera) {
    if (b.updateStart) b.updateStart(b.start);
    const dir = this.tmp.subVectors(b.end, b.start);
    const len = Math.max(0.1, dir.length());
    dir.normalize();
    const mid = new THREE.Vector3().addVectors(b.start, b.end).multiplyScalar(0.5);
    b.group.position.copy(mid);
    b.group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    const pulse = 1 + Math.sin(performance.now() * 0.04) * 0.18;
    b.core.scale.set(b.width * 0.55 * pulse, len, b.width * 0.55 * pulse);
    b.outer.scale.set(b.width * 1.5 * pulse, len, b.width * 1.5 * pulse);
    b.impact.position.copy(b.end).sub(mid);
    b.impact.scale.setScalar((b.width * 4 + Math.sin(performance.now() * 0.05) * 2) * pulse);
    b.light.position.copy(b.impact.position);
    b.light.intensity = 200 + Math.random() * 120;
    const t = b.life / b.maxLife;
    b.coreMat.opacity = Math.min(1, t * 3) * 0.95;
    b.outerMat.opacity = Math.min(0.4, t * 2) * 0.35;
    b.impact.material.opacity = Math.min(1, t * 4) * 0.9;
    b.life -= dt;
    b.sparkTimer -= dt;
    if (b.sparkTimer <= 0 && b.life > 0) {
      b.sparkTimer = 0.06;
      this.sparks(b.end, 3, b.color, 16);
    }
    if (b.life <= 0) {
      this.scene.remove(b.group);
      b.core.geometry.dispose(); b.outer.geometry.dispose();
      b.coreMat.dispose(); b.outerMat.dispose();
      b.impact.material.dispose();
      return false;
    }
    return true;
  }

  update(dt, camera) {
    this.additive.update(dt);
    this.normal.update(dt);
    this.debris.update(dt);
    for (let i = this.beams.length - 1; i >= 0; i--) {
      if (!this.updateBeam(this.beams[i], dt, camera)) this.beams.splice(i, 1);
    }
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const s = this.shockwaves[i];
      s.life -= dt;
      const t = 1 - s.life / s.maxLife;
      const sc = 1 + t * s.radius;
      s.ring.scale.setScalar(sc);
      s.ring2.scale.setScalar(sc * 0.92);
      s.ring.material.opacity = (1 - t) * 0.7;
      s.ring2.material.opacity = (1 - t) * 0.25;
      if (s.life <= 0) {
        this.scene.remove(s.ring, s.ring2);
        s.ring.geometry.dispose(); s.ring.material.dispose();
        s.ring2.material.dispose();
        this.shockwaves.splice(i, 1);
      }
    }
    for (let i = this.flashes.length - 1; i >= 0; i--) {
      const f = this.flashes[i];
      f.life -= dt;
      const t = f.life / f.maxLife;
      f.sprite.scale.setScalar(8 * f.power * (1 + (1 - t) * 1.8));
      f.sprite.material.opacity = t * 0.95;
      f.light.intensity = 220 * f.power * t;
      if (f.life <= 0) {
        this.scene.remove(f.sprite, f.light);
        f.sprite.material.dispose();
        this.flashes.splice(i, 1);
      }
    }
    this.rain.update(dt, camera);
  }

  clear() {
    this.additive.clear();
    this.normal.clear();
    this.debris.clear();
    for (const b of this.beams) {
      this.scene.remove(b.group);
      b.core.geometry.dispose(); b.outer.geometry.dispose();
      b.coreMat.dispose(); b.outerMat.dispose();
      b.impact.material.dispose();
    }
    this.beams.length = 0;
    for (const s of this.shockwaves) {
      this.scene.remove(s.ring, s.ring2);
      s.ring.geometry.dispose(); s.ring.material.dispose(); s.ring2.material.dispose();
    }
    this.shockwaves.length = 0;
    for (const f of this.flashes) {
      this.scene.remove(f.sprite, f.light);
      f.sprite.material.dispose();
    }
    this.flashes.length = 0;
    this.rain.clear();
  }
}

class DebrisPool {
  constructor(scene, max) {
    this.scene = scene;
    this.max = max;
    this.items = [];
    this.geo = new THREE.BoxGeometry(1, 1, 1);
    this.materials = [
      new THREE.MeshStandardMaterial({ color: 0x8a857d, roughness: 0.9 }),
      new THREE.MeshStandardMaterial({ color: 0x6a6660, roughness: 0.95 }),
      new THREE.MeshStandardMaterial({ color: 0x4d4a46, roughness: 0.9 }),
      new THREE.MeshStandardMaterial({ color: 0xa69c8c, roughness: 0.92 }),
      new THREE.MeshStandardMaterial({ color: 0x3a3a3e, roughness: 0.7, metalness: 0.3 }),
      new THREE.MeshStandardMaterial({ color: 0x7c5b40, roughness: 0.9 }),
    ];
    this.meshes = [];
    for (let i = 0; i < max; i++) {
      const m = new THREE.Mesh(this.geo, this.materials[i % this.materials.length]);
      m.visible = false;
      m.castShadow = true;
      m.receiveShadow = true;
      scene.add(m);
      this.meshes.push(m);
    }
    this.cursor = 0;
  }

  spawn(pos, size, velocity, opts = {}) {
    const mesh = this.meshes[this.cursor];
    this.cursor = (this.cursor + 1) % this.max;
    const item = {
      mesh, size, life: opts.life ?? 20,
      vx: velocity?.x || 0, vy: velocity?.y || 0, vz: velocity?.z || 0,
      ax: (Math.random() - 0.5) * (opts.spin ?? 5), ay: (Math.random() - 0.5) * (opts.spin ?? 5), az: (Math.random() - 0.5) * (opts.spin ?? 5),
      settled: false, active: true, bounces: 0,
    };
    mesh.material = opts.material || this.materials[Math.floor(Math.random() * this.materials.length)];
    mesh.scale.set(size.x, size.y, size.z);
    mesh.position.copy(pos);
    mesh.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
    mesh.visible = true;
    this.items.push(item);
    if (this.items.length > this.max) {
      const old = this.items.shift();
      old.mesh.visible = false;
      old.active = false;
    }
    return item;
  }

  update(dt) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const d = this.items[i];
      if (!d.active) { this.items.splice(i, 1); continue; }
      d.life -= dt;
      if (!d.settled) {
        d.vy -= 48 * dt;
        d.mesh.position.x += d.vx * dt;
        d.mesh.position.y += d.vy * dt;
        d.mesh.position.z += d.vz * dt;
        d.mesh.rotation.x += d.ax * dt;
        d.mesh.rotation.y += d.ay * dt;
        d.mesh.rotation.z += d.az * dt;
        const minY = Math.max(d.size.x, d.size.y, d.size.z) * 0.3;
        if (d.mesh.position.y < minY) {
          d.mesh.position.y = minY;
          d.vy *= -0.28;
          d.vx *= 0.68; d.vz *= 0.68;
          d.ax *= 0.7; d.ay *= 0.7; d.az *= 0.7;
          d.bounces++;
          if (Math.abs(d.vy) < 2 || d.bounces > 4) {
            d.vy = 0; d.vx *= 0.4; d.vz *= 0.4; d.ax *= 0.2; d.ay *= 0.2; d.az *= 0.2;
            d.settled = true;
          }
        }
        if (Math.abs(d.vx) + Math.abs(d.vz) < 0.2) d.settled = true;
      }
      if (d.life <= 0) {
        d.mesh.visible = false;
        d.active = false;
        this.items.splice(i, 1);
      }
    }
  }

  clear() {
    for (const d of this.items) d.mesh.visible = false;
    this.items.length = 0;
  }
}

export class Rain {
  constructor(scene, settings) {
    this.scene = scene;
    this.settings = settings;
    this.max = 1600;
    this.count = 0;
    this.positions = new Float32Array(this.max * 6);
    this.velocities = new Float32Array(this.max);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    const mat = new THREE.LineBasicMaterial({ color: 0xa9c8e8, transparent: true, opacity: 0.32, depthWrite: false });
    this.lines = new THREE.LineSegments(geo, mat);
    this.lines.frustumCulled = false;
    this.lines.visible = false;
    scene.add(this.lines);
    this.geo = geo;
    this.intensity = 0;
    this.wind = 0;
    this.setQuality(settings.get('particles'));
  }

  setQuality(q) {
    this.max = q === 'low' ? 450 : q === 'medium' ? 900 : q === 'ultra' ? 2400 : 1500;
    // Rebuild if arrays are too small
    if (this.positions.length < this.max * 6) {
      this.positions = new Float32Array(this.max * 6);
      this.velocities = new Float32Array(this.max);
      this.geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    }
    for (let i = 0; i < this.max; i++) {
      if (!this.velocities[i]) this.velocities[i] = 80 + Math.random() * 90;
    }
    this.count = this.max;
    this.geo.setDrawRange(0, 0);
  }

  setIntensity(kind) {
    this.intensity = kind === 'storm' ? 1 : kind === 'rain' ? 0.62 : 0;
    this.lines.visible = this.intensity > 0;
    this.lines.material.opacity = kind === 'storm' ? 0.42 : 0.3;
    this.wind = kind === 'storm' ? 22 : 8;
  }

  update(dt, camera) {
    if (!this.intensity) return;
    const n = Math.floor(this.max * this.intensity);
    const area = 420;
    const cx = camera ? camera.position.x : 0;
    const cz = camera ? camera.position.z : 0;
    for (let i = 0; i < n; i++) {
      const i6 = i * 6;
      let x = this.positions[i6], y = this.positions[i6 + 1], z = this.positions[i6 + 2];
      if (y < 0 || y > 260 || Math.abs(x - cx) > area || Math.abs(z - cz) > area) {
        x = cx + (Math.random() - 0.5) * area * 2;
        z = cz + (Math.random() - 0.5) * area * 2;
        y = 120 + Math.random() * 140;
      }
      const v = this.velocities[i];
      y -= v * dt;
      x += this.wind * dt;
      this.positions[i6] = x;
      this.positions[i6 + 1] = y;
      this.positions[i6 + 2] = z;
      this.positions[i6 + 3] = x - this.wind * 0.04;
      this.positions[i6 + 4] = y + 3.5;
      this.positions[i6 + 5] = z;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.setDrawRange(0, n * 2);
  }

  clear() {
    this.lines.visible = false;
    this.geo.setDrawRange(0, 0);
  }
}
