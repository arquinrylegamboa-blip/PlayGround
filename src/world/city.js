import * as THREE from 'three';

/* ---------------------------------------------------------------------------
   Hong Kong-inspired destructible city. Buildings are stacked structural
   sections: damage cracks glass, exposes rebar, then peels whole sections off
   as rigid debris instead of disappearing.
--------------------------------------------------------------------------- */

const TAU = Math.PI * 2;
const rnd = (() => { let s = 1337; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; })();

function hexToRgb(hex) { return { r: (hex >> 16) & 255, g: (hex >> 8) & 255, b: hex & 255 }; }
function shade(hex, amt) { const c = hexToRgb(hex); return `rgb(${Math.max(0, c.r + amt)},${Math.max(0, c.g + amt)},${Math.max(0, c.b + amt)})`; }

function makeCanvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

function asphaltTexture() {
  const c = makeCanvas(512, 512), ctx = c.getContext('2d');
  ctx.fillStyle = '#2b2d30'; ctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 9000; i++) {
    const g = 30 + Math.random() * 40;
    ctx.fillStyle = `rgba(${g},${g},${g + 2},${0.2 + Math.random() * 0.4})`;
    ctx.fillRect(Math.random() * 512, Math.random() * 512, 1 + Math.random() * 2, 1 + Math.random() * 2);
  }
  for (let i = 0; i < 18; i++) {
    ctx.strokeStyle = 'rgba(12,12,14,0.55)'; ctx.lineWidth = 1 + Math.random() * 2;
    let x = Math.random() * 512, y = Math.random() * 512;
    ctx.beginPath(); ctx.moveTo(x, y);
    for (let k = 0; k < 5; k++) { x += (Math.random() - 0.5) * 50; y += (Math.random() - 0.5) * 50; ctx.lineTo(x, y); }
    ctx.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(18, 18); return t;
}

function concreteTexture() {
  const c = makeCanvas(256, 256), ctx = c.getContext('2d');
  ctx.fillStyle = '#6d6c68'; ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 4000; i++) {
    const g = 70 + Math.random() * 70;
    ctx.fillStyle = `rgba(${g},${g},${g - 3},0.25)`;
    ctx.fillRect(Math.random() * 256, Math.random() * 256, 1, 1);
  }
  ctx.strokeStyle = 'rgba(40,40,38,0.35)'; ctx.lineWidth = 1;
  for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.moveTo(i * 42, 0); ctx.lineTo(i * 42, 256); ctx.stroke(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(5, 5); return t;
}

function windowTextures(seed) {
  const W = 128, H = 256;
  const fac = makeCanvas(W, H), emi = makeCanvas(W, H);
  const fc = fac.getContext('2d'), ec = emi.getContext('2d');
  const r = (() => { let s = seed * 99991; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; })();
  const palette = [
    ['#2b3038', '#3a414c', '#6f7885'],
    ['#4a443c', '#5b5348', '#8b7d68'],
    ['#34302f', '#45403d', '#76675b'],
    ['#26343c', '#33454f', '#6e8790'],
    ['#3c2f35', '#4c3b43', '#8c6c78'],
    ['#30383a', '#3d4749', '#6e807f'],
  ];
  const p = palette[Math.floor(r() * palette.length)];
  fc.fillStyle = p[0]; fc.fillRect(0, 0, W, H);
  ec.fillStyle = '#000'; ec.fillRect(0, 0, W, H);
  const cols = 5 + Math.floor(r() * 4);
  const rows = 12 + Math.floor(r() * 8);
  const mx = 7, my = 5;
  const cw = (W - mx * 2) / cols, ch = (H - my * 2) / rows;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const wx = mx + x * cw + cw * 0.14, wy = my + y * ch + ch * 0.16;
      const ww = cw * 0.72, wh = ch * 0.62;
      const lit = r() > 0.42;
      const dayCol = r() > 0.5 ? p[1] : p[2];
      fc.fillStyle = dayCol;
      fc.fillRect(wx, wy, ww, wh);
      fc.fillStyle = 'rgba(255,255,255,0.06)';
      fc.fillRect(wx + 1, wy + 1, ww * 0.4, wh * 0.3);
      if (lit) {
        const warm = r() > 0.32;
        ec.fillStyle = warm ? `rgba(255,${190 + r() * 40},${110 + r() * 60},${0.55 + r() * 0.4})` : `rgba(${120 + r() * 60},${210 + r() * 40},255,${0.5 + r() * 0.4})`;
        ec.fillRect(wx, wy, ww, wh);
        ec.fillStyle = 'rgba(0,0,0,0.25)';
        ec.fillRect(wx + ww * 0.5, wy, 1, wh);
      }
      if (r() > 0.9) {
        fc.fillStyle = 'rgba(20,20,22,0.7)';
        fc.fillRect(wx - 2, wy + wh + 1, ww + 4, 2);
      }
    }
  }
  // balconies / vertical ribs
  if (r() > 0.5) {
    fc.fillStyle = 'rgba(0,0,0,0.25)';
    for (let i = 0; i < cols; i++) fc.fillRect(mx + i * cw, 0, 1.5, H);
  }
  const map = new THREE.CanvasTexture(fac); map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  const em = new THREE.CanvasTexture(emi); em.colorSpace = THREE.SRGBColorSpace;
  em.wrapS = em.wrapT = THREE.RepeatWrapping;
  return { map, emissive: em, palette: p };
}

function crackTexture() {
  const c = makeCanvas(128, 128), ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 128, 128);
  ctx.strokeStyle = 'rgba(18,16,14,0.92)';
  ctx.lineWidth = 1.4;
  for (let i = 0; i < 7; i++) {
    let x = 64 + (Math.random() - 0.5) * 20, y = 64 + (Math.random() - 0.5) * 20;
    ctx.beginPath(); ctx.moveTo(x, y);
    for (let k = 0; k < 7; k++) {
      x += (Math.random() - 0.5) * 22; y += (Math.random() - 0.5) * 22;
      ctx.lineTo(x, y);
      if (Math.random() > 0.6) { ctx.moveTo(x, y); }
    }
    ctx.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function neonTexture(text, color) {
  const c = makeCanvas(256, 64), ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 256, 64);
  ctx.font = 'bold 40px "Arial Narrow", sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.shadowColor = color; ctx.shadowBlur = 18;
  ctx.fillStyle = color; ctx.fillText(text, 128, 32);
  ctx.shadowBlur = 0;
  ctx.strokeStyle = 'rgba(255,255,255,0.7)'; ctx.lineWidth = 1.5;
  ctx.strokeText(text, 128, 32);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function waterNormal() {
  const c = makeCanvas(256, 256), ctx = c.getContext('2d');
  const img = ctx.createImageData(256, 256);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 120 + Math.random() * 60;
    img.data[i] = v; img.data[i + 1] = v; img.data[i + 2] = 255; img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(24, 24); return t;
}

class Building {
  constructor(city, x, z, opts) {
    this.city = city;
    this.x = x; this.z = z;
    this.width = opts.width; this.depth = opts.depth; this.height = opts.height;
    this.halfW = opts.width / 2; this.halfD = opts.depth / 2;
    this.style = opts.style;
    this.maxHp = opts.hp;
    this.hp = opts.hp;
    this.sectionCount = opts.sections;
    this.sectionHeight = opts.height / opts.sections;
    this.sections = [];
    this.destroyed = false;
    this.burning = 0;
    this.smokeTimer = 0;
    this.group = new THREE.Group();
    this.group.position.set(x, 0, z);
    city.group.add(this.group);
    this.box = new THREE.Box3();
    this.updateBox();
    this.build(opts);
  }

  build(opts) {
    const { width: w, depth: d, height: h, style } = opts;
    const city = this.city;
    const tex = city.windowTextures[Math.floor(Math.random() * city.windowTextures.length)];
    const map = tex.map.clone(); const em = tex.emissive.clone();
    map.needsUpdate = true; em.needsUpdate = true;
    map.repeat.set(Math.max(1, w / 7), Math.max(2, h / 9));
    em.repeat.copy(map.repeat);
    const mat = new THREE.MeshStandardMaterial({
      map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0,
      color: 0xffffff, roughness: style === 'glass' ? 0.26 : 0.72, metalness: style === 'glass' ? 0.42 : 0.08,
      side: THREE.FrontSide,
    });
    this.material = mat;
    city.windowMaterials.push(mat);
    // plinth
    const plinthMat = city.concreteMat;
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(w + 3, 2, d + 3), plinthMat);
    plinth.position.y = 1;
    plinth.castShadow = true; plinth.receiveShadow = true;
    this.group.add(plinth);
    // sections
    const n = this.sectionCount;
    let secW = w, secD = d;
    for (let i = 0; i < n; i++) {
      const sh = this.sectionHeight;
      const y = 2 + i * sh + sh / 2;
      const mesh = new THREE.Mesh(city.boxGeo, mat);
      mesh.position.set(0, y, 0);
      mesh.scale.set(secW, sh, secD);
      mesh.castShadow = true; mesh.receiveShadow = true;
      this.group.add(mesh);
      const maxHp = (this.maxHp / n) * 1.18;
      this.sections.push({ mesh, hp: maxHp, maxHp, y, height: sh, width: secW, depth: secD, destroyed: false, cracks: [] });
      // floor band
      if (i > 0) {
        const band = new THREE.Mesh(new THREE.BoxGeometry(secW + 0.4, 0.5, secD + 0.4), city.darkConcreteMat);
        band.position.y = y - sh / 2;
        band.castShadow = false; band.receiveShadow = true;
        this.group.add(band);
        this.sections[i].band = band;
      }
      secW *= 0.965; secD *= 0.965;
    }
    // roof
    const roofY = 2 + h;
    this.roof = new THREE.Group();
    this.roof.position.y = roofY;
    this.group.add(this.roof);
    const roofMat = city.darkConcreteMat;
    const tank = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.13, w * 0.13, 4, 10), roofMat);
    tank.position.set((Math.random() - 0.5) * w * 0.35, 2, (Math.random() - 0.5) * d * 0.35);
    tank.castShadow = true; this.roof.add(tank);
    const ac = new THREE.Mesh(new THREE.BoxGeometry(3, 2, 3), roofMat);
    ac.position.set((Math.random() - 0.5) * w * 0.5, 1, (Math.random() - 0.5) * d * 0.5);
    ac.castShadow = true; this.roof.add(ac);
    if (Math.random() > 0.35) {
      const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 10 + Math.random() * 18, 5), city.metalMat);
      ant.position.set((Math.random() - 0.5) * w * 0.4, 10, (Math.random() - 0.5) * d * 0.4);
      ant.castShadow = true; this.roof.add(ant);
      const light = new THREE.Mesh(new THREE.SphereGeometry(0.55, 6, 5), city.redGlowMat);
      light.position.copy(ant.position); light.position.y += ant.geometry.parameters.height / 2;
      this.roof.add(light);
    }
    // neon signs
    if (style === 'commercial' || Math.random() > 0.55) {
      const texts = ['九龍', 'HONG KONG', 'MONSTER', 'NIGHT MARKET', 'KAIJU', '九龙城', 'APEX', 'TITAN'];
      const colors = ['#ff3b5c', '#ffb23b', '#3bffe8', '#ff5cf0', '#8dff5c'];
      const t = texts[Math.floor(Math.random() * texts.length)];
      const col = colors[Math.floor(Math.random() * colors.length)];
      const tex = neonTexture(t, col);
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(12, 3), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false, side: THREE.DoubleSide }));
      sign.position.set((Math.random() - 0.5) * w * 0.5, 6 + Math.random() * Math.max(4, h * 0.5), d / 2 + 0.15);
      this.group.add(sign);
      this.neon = sign;
      this.neonBaseOpacity = 0.95;
    }
    // red aircraft warning light
    if (h > 90) {
      const wl = new THREE.Mesh(new THREE.SphereGeometry(0.8, 6, 5), city.redGlowMat);
      wl.position.set(0, 2 + h + 1.5, 0);
      this.group.add(wl);
      this.warningLight = wl;
    }
    this.updateBox();
  }

  updateBox() {
    this.box.min.set(this.x - this.halfW, 0, this.z - this.halfD);
    this.box.max.set(this.x + this.halfW, this.height, this.z + this.halfD);
  }

  addCrack(section) {
    if (!section || section.destroyed || section.cracks.length >= 3) return;
    const mat = new THREE.MeshBasicMaterial({ map: this.city.crackTex, transparent: true, opacity: 0.72, depthWrite: false, color: 0x111111, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1 });
    const geo = new THREE.PlaneGeometry(section.width * (0.5 + Math.random() * 0.4), section.height * (0.45 + Math.random() * 0.4));
    const m = new THREE.Mesh(geo, mat);
    const side = Math.random() > 0.5;
    if (side) {
      m.position.set(section.width / 2 + 0.06, 0, (Math.random() - 0.5) * section.depth * 0.5);
      m.rotation.y = Math.PI / 2;
    } else {
      m.position.set((Math.random() - 0.5) * section.width * 0.5, 0, section.depth / 2 + 0.06);
    }
    m.position.y = 0;
    section.mesh.add(m);
    section.cracks.push(m);
  }

  damage(amount, point, opts = {}) {
    if (this.destroyed || amount <= 0) return 0;
    this.hp -= amount;
    const secs = this.sections.filter(s => !s.destroyed);
    if (!secs.length) { this.collapseFrom(0); return amount; }
    // choose section nearest impact height, else top
    let target = secs[secs.length - 1];
    if (point) {
      const localY = point.y;
      const candidate = secs.find(s => localY >= s.y - s.height / 2 && localY <= s.y + s.height / 2);
      if (candidate) target = candidate;
    }
    target.hp -= amount;
    this.addCrack(target);
    const city = this.city;
    if (Math.random() < 0.8) {
      const p = new THREE.Vector3(
        this.x + (Math.random() - 0.5) * this.width * 0.9,
        target.y + (Math.random() - 0.5) * target.height,
        this.z + this.depth / 2 + 0.5,
      );
      city.effects.glass(p, Math.floor(5 + amount * 0.18));
      if (Math.random() < 0.4) city.audio.glass();
    }
    if (Math.random() < 0.45) {
      city.effects.dust(new THREE.Vector3(this.x + (Math.random() - 0.5) * this.width, target.y, this.z + this.depth / 2), 3, 6, 0x8f877b);
    }
    if (this.hp < this.maxHp * 0.55) this.burning = Math.max(this.burning, 3);
    if (target.hp <= 0 || this.hp <= 0) {
      const idx = this.sections.indexOf(target);
      this.collapseFrom(idx);
    }
    return amount;
  }

  collapseFrom(index) {
    if (this.destroyed) return;
    const city = this.city;
    const secs = this.sections;
    index = Math.max(0, Math.min(index, secs.length - 1));
    let any = false;
    for (let i = index; i < secs.length; i++) {
      const s = secs[i];
      if (s.destroyed) continue;
      any = true;
      s.destroyed = true;
      s.mesh.visible = false;
      if (s.band) s.band.visible = false;
      // spawn chunks
      const count = Math.max(2, Math.floor(3 * city.settings.destructionScale));
      for (let k = 0; k < count; k++) {
        const size = new THREE.Vector3(
          s.width * (0.15 + Math.random() * 0.28),
          Math.max(1.5, s.height * (0.18 + Math.random() * 0.3)),
          s.depth * (0.15 + Math.random() * 0.28),
        );
        const pos = new THREE.Vector3(
          this.x + (Math.random() - 0.5) * s.width * 0.9,
          s.y + (Math.random() - 0.5) * s.height,
          this.z + (Math.random() - 0.5) * s.depth * 0.9,
        );
        city.effects.debris.spawn(pos, size, {
          x: (Math.random() - 0.5) * 28, y: 4 + Math.random() * 18, z: (Math.random() - 0.5) * 28,
        }, { spin: 4, life: 18 + Math.random() * 14 });
      }
      city.effects.dust(new THREE.Vector3(this.x, Math.max(2, s.y - s.height / 2), this.z), s.width * 0.45, 24, 0x9a8f80);
      city.effects.smoke(new THREE.Vector3(this.x, s.y, this.z), 8, 0x554c44);
      // exposed rebar
      for (let k = 0; k < 5; k++) {
        const rebar = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 4 + Math.random() * 5, 4), city.metalMat);
        rebar.position.set(this.x + (Math.random() - 0.5) * s.width, s.y - s.height / 2, this.z + (Math.random() - 0.5) * s.depth);
        rebar.rotation.set((Math.random() - 0.5) * 0.7, 0, (Math.random() - 0.5) * 0.7);
        city.group.add(rebar);
      }
    }
    if (!any) return;
    const remaining = secs.filter(s => !s.destroyed);
    this.height = remaining.length ? Math.max(2, remaining[remaining.length - 1].y + remaining[remaining.length - 1].height / 2) : 0;
    this.updateBox();
    if (this.height < 4) {
      this.destroyed = true;
      this.burning = 8;
      // rubble mound
      for (let k = 0; k < 8; k++) {
        const size = new THREE.Vector3(3 + Math.random() * 8, 1 + Math.random() * 3, 3 + Math.random() * 8);
        city.effects.debris.spawn(new THREE.Vector3(this.x + (Math.random() - 0.5) * this.width, 2, this.z + (Math.random() - 0.5) * this.depth), size, { x: 0, y: 2, z: 0 }, { life: 60, spin: 0.5 });
      }
    }
    city.effects.shakeCamera(0.4, 0.8);
    city.audio.explosion(0.9);
    city.destructionCount++;
    city.onDestruction?.(this);
  }

  update(dt) {
    if (this.burning > 0) {
      this.burning -= dt;
      this.smokeTimer -= dt;
      if (this.smokeTimer <= 0) {
        this.smokeTimer = 0.35 + Math.random() * 0.5;
        const y = 4 + Math.random() * Math.max(4, this.height);
        this.city.effects.fire(new THREE.Vector3(this.x + (Math.random() - 0.5) * this.width, y, this.z + (Math.random() - 0.5) * this.depth), 3, 0xff7a2e, 2.2);
        this.city.effects.smoke(new THREE.Vector3(this.x + (Math.random() - 0.5) * this.width, y + 3, this.z + (Math.random() - 0.5) * this.depth), 4, 0x3a3430);
      }
    }
    if (this.warningLight) {
      const blink = (performance.now() * 0.001 + this.x) % 2 < 0.25;
      this.warningLight.visible = blink;
    }
    if (this.neon) {
      const flick = Math.sin(performance.now() * 0.002 + this.z) > 0.96 ? 0.2 : 1;
      this.neon.material.opacity = (0.4 + this.city.night * 0.6) * flick;
    }
  }
}

class Vehicle {
  constructor(city, opts) {
    this.city = city;
    this.road = opts.road;
    this.axis = opts.axis;
    this.lane = opts.lane;
    this.dir = opts.dir;
    this.speed = opts.speed;
    this.pos = opts.pos;
    this.type = opts.type;
    this.group = new THREE.Group();
    this.wreck = null;
    this.alive = true;
    this.stopped = 0;
    this.crushTimer = 0;
    this.build();
    city.group.add(this.group);
    this.place();
  }

  build() {
    const c = this.city;
    const colors = [0xb43a32, 0x2f5f9e, 0xe8e2d6, 0x22262b, 0xd6a52e, 0x3f7f57, 0x8c3a72];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: 0.35, metalness: 0.55 });
    const dark = c.vehicleDarkMat;
    const len = this.type === 'bus' ? 14 : this.type === 'truck' ? 11 : 7.5;
    const width = this.type === 'bus' ? 3.4 : 3.2;
    const height = this.type === 'bus' ? 4.2 : 2.4;
    const body = new THREE.Mesh(new THREE.BoxGeometry(width, height, len), bodyMat);
    body.position.y = 1.4 + height / 2;
    body.castShadow = true; body.receiveShadow = true;
    this.group.add(body);
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(width * 0.9, height * 0.7, len * 0.4), dark);
    cabin.position.set(0, 1.4 + height + height * 0.28, -len * 0.08);
    cabin.castShadow = true;
    this.group.add(cabin);
    if (this.type === 'bus') {
      cabin.scale.set(1.0, 0.8, 1.7);
    }
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const wheel = new THREE.Mesh(c.vehicleWheelGeo, dark);
        wheel.position.set(sx * width * 0.52, 1.1, sz * len * 0.3);
        wheel.rotation.z = Math.PI / 2;
        wheel.castShadow = true;
        this.group.add(wheel);
      }
    }
    // lights
    const headMat = new THREE.MeshBasicMaterial({ color: 0xfff2c4, toneMapped: false });
    const tailMat = new THREE.MeshBasicMaterial({ color: 0xff2a2a, toneMapped: false });
    for (const sx of [-1, 1]) {
      const h = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.3, 0.1), headMat);
      h.position.set(sx * width * 0.3, 1.8, -len / 2 - 0.05);
      this.group.add(h);
      const t = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.25, 0.1), tailMat);
      t.position.set(sx * width * 0.3, 1.8, len / 2 + 0.05);
      this.group.add(t);
    }
    this.headMat = headMat;
    this.bodyMat = bodyMat;
    this.len = len; this.width = width;
  }

  place() {
    if (this.axis === 'x') {
      this.group.position.set(this.pos, 0, this.road + this.lane);
      this.group.rotation.y = this.dir > 0 ? Math.PI / 2 : -Math.PI / 2;
    } else {
      this.group.position.set(this.road + this.lane, 0, this.pos);
      this.group.rotation.y = this.dir > 0 ? 0 : Math.PI;
    }
  }

  crush(force = 1, dir = null) {
    if (!this.alive) return;
    this.alive = false;
    this.wreck = {
      vx: (dir?.x || (Math.random() - 0.5)) * 22 * force,
      vy: 8 + Math.random() * 16 * force,
      vz: (dir?.z || (Math.random() - 0.5)) * 22 * force,
      ax: (Math.random() - 0.5) * 8, ay: (Math.random() - 0.5) * 8, az: (Math.random() - 0.5) * 8,
      life: 30,
    };
    this.crushTimer = 30;
    this.city.effects.sparks(this.group.position.clone().setY(4), 12, 0xffb347, 20);
    this.city.effects.fire(this.group.position.clone().setY(4), 8, 0xff7a2e, 2);
    this.city.audio.impact(1.2);
    if (Math.random() < 0.4) this.city.audio.explosion(0.6);
  }

  update(dt, monsters) {
    if (!this.alive) {
      if (this.wreck) {
        const w = this.wreck;
        w.vy -= 42 * dt;
        this.group.position.x += w.vx * dt;
        this.group.position.y += w.vy * dt;
        this.group.position.z += w.vz * dt;
        this.group.rotation.x += w.ax * dt;
        this.group.rotation.y += w.ay * dt;
        this.group.rotation.z += w.az * dt;
        if (this.group.position.y < 0.6) {
          this.group.position.y = 0.6;
          w.vy *= -0.25; w.vx *= 0.6; w.vz *= 0.6; w.ax *= 0.6; w.az *= 0.6;
        }
        w.life -= dt;
        if (w.life < 0) { this.group.visible = false; this.wreck = null; }
      }
      return;
    }
    // stop for nearby titans
    let near = false;
    for (const m of monsters) {
      const d = this.group.position.distanceTo(m.root.position);
      if (d < 55) { near = true; break; }
    }
    if (near) this.stopped = Math.min(1, this.stopped + dt * 4);
    else this.stopped = Math.max(0, this.stopped - dt * 1.5);
    if (this.stopped < 0.4) this.pos += this.dir * this.speed * dt * (1 - this.stopped);
    const limit = 260;
    if (this.pos > limit) this.pos = -limit;
    if (this.pos < -limit) this.pos = limit;
    this.place();
    // headlights
    if (this.headMat) this.headMat.color.setHex(this.city.night > 0.4 ? 0xfff2c4 : 0xfff7dd);
  }
}

class Pedestrian {
  constructor(city, x, z) {
    this.city = city;
    this.group = new THREE.Group();
    this.group.position.set(x, 0, z);
    const palette = [0xd9c3a0, 0x8a5a44, 0x4a4f58, 0x2e5b7a, 0x8a2f3a, 0x3f6a4f, 0xd8d2c8];
    const col = palette[Math.floor(Math.random() * palette.length)];
    const mat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.8 });
    this.body = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 1.15, 4, 6), mat);
    this.body.position.y = 1.9; this.body.castShadow = true;
    this.group.add(this.body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.34, 8, 6), new THREE.MeshStandardMaterial({ color: 0xc99a72, roughness: 0.7 }));
    head.position.y = 3.0; head.castShadow = true;
    this.group.add(head);
    this.legL = new THREE.Mesh(new THREE.CapsuleGeometry(0.14, 0.9, 3, 5), new THREE.MeshStandardMaterial({ color: 0x25282e }));
    this.legL.position.set(-0.22, 0.85, 0); this.group.add(this.legL);
    this.legR = this.legL.clone(); this.legR.position.x = 0.22; this.group.add(this.legR);
    this.armL = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.75, 3, 5), mat);
    this.armL.position.set(-0.55, 2.1, 0); this.group.add(this.armL);
    this.armR = this.armL.clone(); this.armR.position.x = 0.55; this.group.add(this.armR);
    this.alive = true;
    this.speed = 2.5 + Math.random() * 2;
    this.dir = Math.random() * TAU;
    this.panic = 0;
    this.walk = Math.random() * TAU;
    this.turn = 0;
    city.group.add(this.group);
  }

  kill() {
    if (!this.alive) return;
    this.alive = false;
    this.panic = 0;
    this.group.rotation.z = Math.PI / 2;
    this.group.position.y = 0.4;
    this.city.effects.dust(this.group.position.clone().setY(1), 1.2, 4, 0x8a7a6a);
  }

  update(dt, monsters) {
    if (!this.alive) return;
    let threat = null, threatDist = 1e9;
    for (const m of monsters) {
      const d = this.group.position.distanceTo(m.root.position);
      if (d < 95 && d < threatDist) { threat = m; threatDist = d; }
    }
    if (threat) {
      this.panic = Math.min(1, this.panic + dt * 2);
      const dx = this.group.position.x - threat.root.position.x;
      const dz = this.group.position.z - threat.root.position.z;
      this.dir = Math.atan2(dx, dz);
      this.speed = 12;
    } else {
      this.panic = Math.max(0, this.panic - dt * 0.5);
      this.speed = 2.5;
      this.turn -= dt;
      if (this.turn <= 0) { this.turn = 2 + Math.random() * 5; this.dir += (Math.random() - 0.5) * 1.2; }
    }
    this.group.position.x += Math.sin(this.dir) * this.speed * dt;
    this.group.position.z += Math.cos(this.dir) * this.speed * dt;
    if (Math.abs(this.group.position.x) > 200) this.dir = Math.PI - this.dir;
    if (Math.abs(this.group.position.z) > 200) this.dir = -this.dir;
    this.group.rotation.y = this.dir;
    this.walk += dt * (this.panic > 0.2 ? 16 : 6);
    const swing = Math.sin(this.walk) * (this.panic > 0.2 ? 0.9 : 0.45);
    this.legL.rotation.x = swing; this.legR.rotation.x = -swing;
    this.armL.rotation.x = -swing * 0.8; this.armR.rotation.x = swing * 0.8;
    if (this.panic > 0.3) { this.armL.rotation.z = 0.8; this.armR.rotation.z = -0.8; }
    this.group.position.y = Math.abs(Math.sin(this.walk)) * 0.08;
  }
}

class StreetProp {
  constructor(city, type, x, z) {
    this.city = city;
    this.type = type;
    this.group = new THREE.Group();
    this.group.position.set(x, 0, z);
    this.alive = true;
    this.vx = 0; this.vz = 0; this.vy = 0;
    this.build();
    city.group.add(this.group);
  }
  build() {
    const c = this.city;
    if (this.type === 'tree') {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 4, 6), c.barkMat);
      trunk.position.y = 2; trunk.castShadow = true; this.group.add(trunk);
      for (let i = 0; i < 4; i++) {
        const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(2.4 + Math.random() * 1.6, 1), c.leafMat);
        leaf.position.set((Math.random() - 0.5) * 3, 5 + Math.random() * 3, (Math.random() - 0.5) * 3);
        leaf.castShadow = true; this.group.add(leaf);
      }
    } else if (this.type === 'streetlight') {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.22, 12, 6), c.metalMat);
      pole.position.y = 6; pole.castShadow = true; this.group.add(pole);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.2, 0.2), c.metalMat);
      arm.position.set(1.5, 12, 0); this.group.add(arm);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 6), c.streetGlowMat);
      bulb.position.set(3.2, 11.8, 0); this.group.add(bulb);
      const cone = new THREE.Mesh(new THREE.ConeGeometry(4.5, 9, 16, 1, true), c.lightConeMat);
      cone.position.set(3.2, 7.5, 0); this.group.add(cone);
      this.cone = cone;
    } else if (this.type === 'barrier') {
      const m = new THREE.Mesh(new THREE.BoxGeometry(4, 1.2, 0.6), c.barrierMat);
      m.position.y = 0.8; m.castShadow = true; this.group.add(m);
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(4.1, 0.2, 0.62), c.yellowMat);
      stripe.position.y = 1.1; this.group.add(stripe);
    } else if (this.type === 'bench') {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(3, 0.25, 1), c.barkMat);
      seat.position.y = 1; this.group.add(seat);
      for (const s of [-1, 1]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1, 0.8), c.metalMat);
        leg.position.set(s * 1.1, 0.5, 0); this.group.add(leg);
      }
    } else if (this.type === 'dumpster') {
      const m = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.4, 2), c.greenMat);
      m.position.y = 1.4; m.castShadow = true; this.group.add(m);
    }
  }
  knock(force, dir) {
    if (!this.alive) return;
    this.alive = false;
    this.vx = (dir?.x || (Math.random() - 0.5)) * force * 12;
    this.vz = (dir?.z || (Math.random() - 0.5)) * force * 12;
    this.vy = 5 + Math.random() * 8;
  }
  update(dt) {
    if (this.alive) {
      if (this.type === 'streetlight' && this.cone) this.cone.material.opacity = this.city.night * 0.12;
      return;
    }
    this.vy -= 30 * dt;
    this.group.position.x += this.vx * dt;
    this.group.position.y += this.vy * dt;
    this.group.position.z += this.vz * dt;
    this.group.rotation.x += this.vx * dt * 0.05;
    this.group.rotation.z += this.vz * dt * 0.05;
    if (this.group.position.y < 0.5) {
      this.group.position.y = 0.5;
      this.vy *= -0.2; this.vx *= 0.7; this.vz *= 0.7;
      if (Math.abs(this.vy) < 0.5) { this.vx = 0; this.vz = 0; this.vy = 0; }
    }
  }
}

export class City {
  constructor(scene, settings, effects, audio) {
    this.scene = scene;
    this.settings = settings;
    this.effects = effects;
    this.audio = audio;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.buildings = [];
    this.vehicles = [];
    this.pedestrians = [];
    this.props = [];
    this.windowMaterials = [];
    this.puddles = [];
    this.streetLights = [];
    this.night = 0.5;
    this.destructionCount = 0;
    this.onDestruction = null;
    this.boxGeo = new THREE.BoxGeometry(1, 1, 1);
    this.vehicleWheelGeo = new THREE.CylinderGeometry(1.1, 1.1, 0.5, 10);
    this.crackTex = crackTexture();
    this.windowTextures = [];
    for (let i = 0; i < 8; i++) this.windowTextures.push(windowTextures(i + 3));
    this.asphaltTex = asphaltTexture();
    this.concreteTex = concreteTexture();
    this.materials();
    this.buildGround();
    this.buildRoads();
    this.buildCity();
    this.buildHarbor();
    this.buildBridge();
    this.buildMountains();
    this.buildPlaza();
    this.spawnTraffic();
    this.spawnCrowd();
    this.spawnProps();
    this.setNight(0.5);
  }

  materials() {
    this.asphaltMat = new THREE.MeshStandardMaterial({ map: this.asphaltTex, color: 0x9a9a9a, roughness: 0.92, metalness: 0.05 });
    this.concreteMat = new THREE.MeshStandardMaterial({ map: this.concreteTex, color: 0xa8a8a4, roughness: 0.9, metalness: 0.02 });
    this.darkConcreteMat = new THREE.MeshStandardMaterial({ map: this.concreteTex, color: 0x5e5d58, roughness: 0.92 });
    this.metalMat = new THREE.MeshStandardMaterial({ color: 0x5a5f66, roughness: 0.35, metalness: 0.85 });
    this.vehicleDarkMat = new THREE.MeshStandardMaterial({ color: 0x17191d, roughness: 0.4, metalness: 0.5 });
    this.barkMat = new THREE.MeshStandardMaterial({ color: 0x4a3426, roughness: 0.95 });
    this.leafMat = new THREE.MeshStandardMaterial({ color: 0x2e4d2a, roughness: 0.9 });
    this.barrierMat = new THREE.MeshStandardMaterial({ color: 0xd05a2a, roughness: 0.7 });
    this.yellowMat = new THREE.MeshStandardMaterial({ color: 0xffc93b, roughness: 0.5 });
    this.greenMat = new THREE.MeshStandardMaterial({ color: 0x2d5a3d, roughness: 0.7, metalness: 0.2 });
    this.redGlowMat = new THREE.MeshBasicMaterial({ color: 0xff2a2a, toneMapped: false });
    this.streetGlowMat = new THREE.MeshBasicMaterial({ color: 0xffd9a0, toneMapped: false });
    this.lightConeMat = new THREE.MeshBasicMaterial({ color: 0xffd9a0, transparent: true, opacity: 0.06, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    this.puddleMat = new THREE.MeshStandardMaterial({ color: 0x14242e, roughness: 0.08, metalness: 0.85, transparent: true, opacity: 0 });
    this.lineMat = new THREE.MeshBasicMaterial({ color: 0xd8d2bd, transparent: true, opacity: 0.55 });
    this.waterMat = new THREE.MeshStandardMaterial({ color: 0x0a2532, roughness: 0.14, metalness: 0.72, bumpMap: waterNormal(), bumpScale: 0.8 });
  }

  buildGround() {
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(1600, 1600), this.asphaltMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    ground.position.y = -0.05;
    this.group.add(ground);
    this.ground = ground;
    // outer terrain
    const outer = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000), new THREE.MeshStandardMaterial({ color: 0x20262a, roughness: 0.95 }));
    outer.rotation.x = -Math.PI / 2;
    outer.position.y = -0.12;
    outer.receiveShadow = true;
    this.group.add(outer);
  }

  buildRoads() {
    const roads = [0, -86, 86, -172, 172];
    const length = 420;
    for (const r of roads) {
      for (const axis of ['x', 'z']) {
        const strip = new THREE.Mesh(new THREE.PlaneGeometry(24, length), this.asphaltMat);
        strip.rotation.x = -Math.PI / 2;
        if (axis === 'x') { strip.position.set(0, 0.02, r); strip.rotation.z = Math.PI / 2; }
        else strip.position.set(r, 0.02, 0);
        strip.receiveShadow = true;
        this.group.add(strip);
        // lane dashes
        for (let i = -length / 2; i < length / 2; i += 13) {
          if (Math.abs(i) < 14) continue;
          const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 4.5), this.lineMat);
          dash.rotation.x = -Math.PI / 2;
          if (axis === 'x') { dash.position.set(i, 0.035, r); dash.rotation.z = Math.PI / 2; }
          else dash.position.set(r, 0.035, i);
          this.group.add(dash);
        }
      }
    }
    // crosswalks at central intersections
    for (const x of [-86, 0, 86]) {
      for (const z of [-86, 0, 86]) {
        for (let i = -5; i <= 5; i++) {
          const stripe = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 7), this.lineMat);
          stripe.rotation.x = -Math.PI / 2;
          stripe.position.set(x + i * 2.1, 0.04, z + 14);
          this.group.add(stripe);
          const stripe2 = stripe.clone();
          stripe2.position.z = z - 14;
          this.group.add(stripe2);
        }
      }
    }
    // curbs around blocks
    const blockCenters = [-129, -43, 43, 129];
    for (const bx of blockCenters) {
      for (const bz of blockCenters) {
        for (const [dx, dz, w, d] of [[0, -33, 68, 1.2], [0, 33, 68, 1.2], [-33, 0, 1.2, 68], [33, 0, 1.2, 68]]) {
          const curb = new THREE.Mesh(new THREE.BoxGeometry(w, 0.55, d), this.concreteMat);
          curb.position.set(bx + dx, 0.22, bz + dz);
          curb.receiveShadow = true;
          this.group.add(curb);
        }
      }
    }
  }

  buildCity() {
    const centers = [-129, -43, 43, 129];
    // Keep a broad north-south battle avenue open through the central blocks so
    // the chase camera always has a clean line of sight to the titans.
    const inArena = (x, z) => Math.abs(x) < 66 && z > -122 && z < 232;
    for (const bx of centers) {
      for (const bz of centers) {
        const central = Math.abs(bx) <= 43 && Math.abs(bz) <= 43;
        if (central) continue;
        // sidewalk slab
        const slab = new THREE.Mesh(new THREE.BoxGeometry(64, 0.35, 64), this.concreteMat);
        slab.position.set(bx, 0.17, bz);
        slab.receiveShadow = true;
        this.group.add(slab);
        const lots = 2 + Math.floor(rnd() * 2);
        const placed = [];
        for (let k = 0; k < lots; k++) {
          let w = 18 + rnd() * 16, d = 18 + rnd() * 16;
          let lx = bx + (rnd() - 0.5) * (58 - w);
          let lz = bz + (rnd() - 0.5) * (58 - d);
          if (inArena(lx, lz)) continue;
          let tries = 0;
          while (placed.some(p => Math.abs(p.x - lx) < (p.w + w) / 2 + 3 && Math.abs(p.z - lz) < (p.d + d) / 2 + 3) && tries++ < 20) {
            lx = bx + (rnd() - 0.5) * (58 - w);
            lz = bz + (rnd() - 0.5) * (58 - d);
          }
          if (inArena(lx, lz)) continue;
          if (placed.some(p => Math.abs(p.x - lx) < (p.w + w) / 2 + 2 && Math.abs(p.z - lz) < (p.d + d) / 2 + 2)) continue;
          placed.push({ x: lx, z: lz, w, d });
          const dist = Math.hypot(lx, lz);
          const heightBase = dist < 130 ? 110 : dist < 200 ? 80 : 55;
          const height = heightBase + rnd() * 120 - 20;
          const sections = 4 + Math.floor(rnd() * 5);
          const hp = 180 + height * 1.8;
          const style = rnd() > 0.55 ? 'glass' : rnd() > 0.4 ? 'commercial' : 'apartment';
          this.buildings.push(new Building(this, lx, lz, { width: w, depth: d, height: Math.max(35, height), sections, hp, style }));
        }
      }
    }
    // outer low-rise ring
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * TAU + rnd() * 0.2;
      const r = 245 + rnd() * 90;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (Math.abs(x) < 220 && Math.abs(z) < 220) continue;
      if (Math.abs(x) < 90 && z > 120) continue; // keep the battle-camera avenue clear
      const w = 20 + rnd() * 25, d = 20 + rnd() * 25;
      const h = 30 + rnd() * 85;
      this.buildings.push(new Building(this, x, z, { width: w, depth: d, height: h, sections: 3 + Math.floor(rnd() * 3), hp: 130 + h * 1.4, style: 'apartment' }));
    }
    // a few mega towers
    for (const [x, z, w, d, h] of [[-155, 155, 30, 30, 230], [155, -155, 28, 28, 210], [-160, -160, 26, 26, 190]]) {
      this.buildings.push(new Building(this, x, z, { width: w, depth: d, height: h, sections: 9, hp: 520, style: 'glass' }));
    }
  }

  buildHarbor() {
    const water = new THREE.Mesh(new THREE.PlaneGeometry(1500, 1800), this.waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.set(980, 0.06, 0);
    water.receiveShadow = true;
    this.group.add(water);
    this.water = water;
    // dock
    const dock = new THREE.Mesh(new THREE.BoxGeometry(100, 1.2, 520), this.concreteMat);
    dock.position.set(270, 0.6, 0);
    dock.receiveShadow = true; this.group.add(dock);
    for (let i = 0; i < 6; i++) {
      const bollard = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.2, 6), this.metalMat);
      bollard.position.set(315, 1.2, -200 + i * 80); this.group.add(bollard);
    }
    // cargo ships
    for (let s = 0; s < 2; s++) {
      const ship = new THREE.Group();
      const hull = new THREE.Mesh(new THREE.BoxGeometry(55, 12, 220), new THREE.MeshStandardMaterial({ color: 0x3a2f2a, roughness: 0.8 }));
      hull.position.y = 4; hull.castShadow = true; ship.add(hull);
      const deck = new THREE.Mesh(new THREE.BoxGeometry(52, 1, 210), new THREE.MeshStandardMaterial({ color: 0x5b5148, roughness: 0.8 }));
      deck.position.y = 10; ship.add(deck);
      const colors = [0xc23a2a, 0x2a6ac2, 0x2aa25a, 0xd8a02a, 0x7a2a8a];
      for (let i = 0; i < 32; i++) {
        const c = new THREE.Mesh(new THREE.BoxGeometry(9, 6, 18), new THREE.MeshStandardMaterial({ color: colors[i % colors.length], roughness: 0.7, metalness: 0.3 }));
        c.position.set((i % 4 - 1.5) * 11, 14, -85 + Math.floor(i / 4) * 20);
        c.castShadow = true; ship.add(c);
      }
      const bridge = new THREE.Mesh(new THREE.BoxGeometry(20, 18, 24), new THREE.MeshStandardMaterial({ color: 0xd8d2c4, roughness: 0.6 }));
      bridge.position.set(0, 19, 90); ship.add(bridge);
      ship.position.set(430 + s * 220, 0, -120 + s * 300);
      ship.rotation.y = Math.PI / 2 + (s ? 0.06 : -0.04);
      this.group.add(ship);
    }
    // cranes
    for (let i = 0; i < 3; i++) {
      const crane = new THREE.Group();
      const legMat = this.metalMat;
      for (const [dx, dz] of [[-6, -6], [6, -6], [-6, 6], [6, 6]]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(1.4, 34, 1.4), legMat);
        leg.position.set(dx, 17, dz); leg.castShadow = true; crane.add(leg);
      }
      const top = new THREE.Mesh(new THREE.BoxGeometry(50, 1.6, 4), legMat);
      top.position.set(10, 34, 0); crane.add(top);
      const cab = new THREE.Mesh(new THREE.BoxGeometry(6, 5, 6), this.yellowMat);
      cab.position.set(0, 32, 0); crane.add(cab);
      crane.position.set(290, 1, -180 + i * 160);
      this.group.add(crane);
    }
  }

  buildBridge() {
    const bridge = new THREE.Group();
    const deckMat = new THREE.MeshStandardMaterial({ color: 0x555a60, roughness: 0.7, metalness: 0.4 });
    const deck = new THREE.Mesh(new THREE.BoxGeometry(650, 3, 18), deckMat);
    deck.position.set(600, 28, -260);
    deck.castShadow = true; deck.receiveShadow = true;
    bridge.add(deck);
    for (const x of [350, 850]) {
      const tower = new THREE.Group();
      for (const s of [-1, 1]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(4, 120, 4), deckMat);
        leg.position.set(0, 60, s * 16); leg.castShadow = true; tower.add(leg);
      }
      const cross = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 38), deckMat);
      cross.position.y = 78; tower.add(cross);
      tower.position.set(x, 0, -260);
      bridge.add(tower);
      // cables
      for (let i = 0; i < 12; i++) {
        const t = i / 11;
        const px = x + (t - 0.5) * 300;
        const py = 78 - Math.abs(t - 0.5) * 52;
        const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x, 112, -260), new THREE.Vector3(px, py, -260)]), new THREE.LineBasicMaterial({ color: 0x9aa3ad, transparent: true, opacity: 0.7 }));
        bridge.add(line);
      }
    }
    // pillars
    for (let i = 0; i < 6; i++) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(8, 28, 8), this.concreteMat);
      p.position.set(320 + i * 100, 14, -260);
      p.castShadow = true; bridge.add(p);
    }
    this.group.add(bridge);
  }

  buildMountains() {
    const mat = new THREE.MeshBasicMaterial({ color: 0x252e35, fog: false });
    for (let i = 0; i < 16; i++) {
      const a = -Math.PI * 0.9 + (i / 15) * Math.PI * 1.1;
      const r = 800 + rnd() * 450;
      const h = 180 + rnd() * 420;
      const geo = new THREE.ConeGeometry(220 + rnd() * 260, h, 5 + Math.floor(rnd() * 3));
      const pos = geo.attributes.position;
      for (let v = 0; v < pos.count; v++) {
        pos.setX(v, pos.getX(v) * (0.75 + rnd() * 0.5));
        pos.setZ(v, pos.getZ(v) * (0.75 + rnd() * 0.5));
      }
      geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, mat);
      m.position.set(Math.cos(a) * r, h / 2 - 20, Math.sin(a) * r);
      m.rotation.y = rnd() * TAU;
      this.group.add(m);
    }
  }

  buildPlaza() {
    const plaza = new THREE.Mesh(new THREE.BoxGeometry(124, 0.3, 124), this.concreteMat);
    plaza.position.set(0, 0.15, 0);
    plaza.receiveShadow = true;
    this.group.add(plaza);
    // broken monument
    const mon = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(8, 10, 3, 8), this.darkConcreteMat);
    base.position.y = 1.5; mon.add(base);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(2, 2.8, 20, 8), this.concreteMat);
    col.position.y = 12; col.rotation.z = 0.12; mon.add(col);
    const top = new THREE.Mesh(new THREE.IcosahedronGeometry(3, 0), this.darkConcreteMat);
    top.position.set(-1.5, 23, 0); mon.add(top);
    mon.position.set(0, 0, -20);
    this.group.add(mon);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * TAU;
      this.props.push(new StreetProp(this, 'tree', Math.cos(a) * 48, Math.sin(a) * 48));
      if (i % 3 === 0) this.props.push(new StreetProp(this, 'bench', Math.cos(a) * 38, Math.sin(a) * 38));
    }
    // puddles
    for (let i = 0; i < 16; i++) {
      const p = new THREE.Mesh(new THREE.CircleGeometry(2 + Math.random() * 6, 12), this.puddleMat);
      p.rotation.x = -Math.PI / 2;
      p.position.set((Math.random() - 0.5) * 380, 0.06, (Math.random() - 0.5) * 380);
      p.scale.y = 0.4 + Math.random() * 0.7;
      this.group.add(p);
      this.puddles.push(p);
    }
  }

  spawnTraffic() {
    const roads = [-172, -86, 0, 86, 172];
    const colors = ['car', 'car', 'car', 'truck', 'bus'];
    for (let i = 0; i < 22; i++) {
      const axis = Math.random() > 0.5 ? 'x' : 'z';
      const road = roads[Math.floor(Math.random() * roads.length)];
      const dir = Math.random() > 0.5 ? 1 : -1;
      const lane = dir > 0 ? -5.5 : 5.5;
      const pos = (Math.random() - 0.5) * 400;
      this.vehicles.push(new Vehicle(this, { axis, road, lane, dir, pos, speed: 14 + Math.random() * 12, type: colors[Math.floor(Math.random() * colors.length)] }));
    }
  }

  spawnCrowd() {
    for (let i = 0; i < 40; i++) {
      let x = (Math.random() - 0.5) * 360;
      let z = (Math.random() - 0.5) * 360;
      if (Math.abs(x) < 20 || Math.abs(z) < 20) x += 30;
      this.pedestrians.push(new Pedestrian(this, x, z));
    }
  }

  spawnProps() {
    const roads = [-172, -86, 0, 86, 172];
    for (const x of roads) {
      for (const z of roads) {
        if (Math.random() > 0.35) this.props.push(new StreetProp(this, 'streetlight', x + 14, z + 14));
        if (Math.random() > 0.7) this.props.push(new StreetProp(this, 'barrier', x - 12, z + 8));
      }
    }
    for (let i = 0; i < 14; i++) {
      this.props.push(new StreetProp(this, 'dumpster', (Math.random() - 0.5) * 300, (Math.random() - 0.5) * 300));
    }
  }

  setNight(night) {
    this.night = night;
    for (const m of this.windowMaterials) m.emissiveIntensity = night * 1.9;
    for (const p of this.puddles) p.material.opacity = this.wet ? 0.65 : 0;
    if (this.water) this.water.material.emissive = new THREE.Color(0x06121a).multiplyScalar(night * 0.3);
    for (const v of this.vehicles) if (v.headMat) v.headMat.color.setHex(night > 0.35 ? 0xfff2c4 : 0xfff7dd);
    for (const s of this.props) if (s.cone) s.cone.material.opacity = night * 0.12;
  }

  setWetness(wet) {
    this.wet = wet;
    this.asphaltMat.roughness = wet ? 0.32 : 0.92;
    this.asphaltMat.metalness = wet ? 0.35 : 0.05;
    this.asphaltMat.color.setHex(wet ? 0x8a8a8a : 0x9a9a9a);
    this.concreteMat.roughness = wet ? 0.55 : 0.9;
    for (const p of this.puddles) p.material.opacity = wet ? 0.62 : 0;
    if (this.water) this.water.material.roughness = wet ? 0.08 : 0.14;
  }

  setFog(color, density) {
    // reserved for per-material fog tinting
  }

  damageAt(point, radius, amount, opts = {}) {
    let hits = 0;
    for (const b of this.buildings) {
      if (b.destroyed) continue;
      const dx = Math.max(b.box.min.x - point.x, 0, point.x - b.box.max.x);
      const dz = Math.max(b.box.min.z - point.z, 0, point.z - b.box.max.z);
      const d = Math.hypot(dx, dz);
      if (d <= radius) {
        const fall = 1 - d / Math.max(1, radius);
        hits += b.damage(amount * (0.45 + fall * 0.75), point, opts);
      }
    }
    for (const v of this.vehicles) {
      if (!v.alive) continue;
      if (v.group.position.distanceTo(point) < radius + 6) {
        v.crush(1, new THREE.Vector3().subVectors(v.group.position, point).normalize());
        hits++;
      }
    }
    for (const p of this.pedestrians) {
      if (!p.alive) continue;
      if (p.group.position.distanceTo(point) < radius + 3) {
        if (Math.random() < 0.4) p.kill(); else p.panic = 1;
        hits++;
      }
    }
    for (const p of this.props) {
      if (!p.alive) continue;
      if (p.group.position.distanceTo(point) < radius + 4) {
        p.knock(1, new THREE.Vector3().subVectors(p.group.position, point).normalize());
        hits++;
      }
    }
    return hits;
  }

  raycastBuilding(origin, dir, maxDist = 300) {
    const ray = new THREE.Ray(origin, dir.clone().normalize());
    let best = null;
    for (const b of this.buildings) {
      if (b.destroyed) continue;
      const hit = ray.intersectBox(b.box, new THREE.Vector3());
      if (hit) {
        const dist = hit.distanceTo(origin);
        if (dist <= maxDist && (!best || dist < best.distance)) best = { distance: dist, point: hit, building: b };
      }
    }
    return best;
  }

  collideCircle(x, z, radius) {
    let pushX = 0, pushZ = 0, hit = null;
    for (const b of this.buildings) {
      if (b.destroyed) continue;
      const minX = b.box.min.x - radius, maxX = b.box.max.x + radius;
      const minZ = b.box.min.z - radius, maxZ = b.box.max.z + radius;
      if (x > minX && x < maxX && z > minZ && z < maxZ) {
        const left = x - minX, right = maxX - x, top = z - minZ, bottom = maxZ - z;
        const m = Math.min(left, right, top, bottom);
        if (m === left) pushX -= left;
        else if (m === right) pushX += right;
        else if (m === top) pushZ -= top;
        else pushZ += bottom;
        hit = b;
      }
    }
    return { pushX, pushZ, hit };
  }

  update(dt, camera, monsters) {
    for (const b of this.buildings) b.update(dt);
    for (const v of this.vehicles) v.update(dt, monsters);
    for (const p of this.pedestrians) p.update(dt, monsters);
    for (const p of this.props) p.update(dt);
    if (this.water) {
      const t = performance.now() * 0.00005;
      this.waterMat.bumpMap.offset.set(t * 0.4, t);
    }
    // keep NPC / traffic simulation bounded
    if (this.pedestrians.length < 24) this.spawnCrowd();
  }

  spawnVehicle(type = 'car', pos = null) {
    const p = pos || new THREE.Vector3((Math.random() - 0.5) * 120, 0, (Math.random() - 0.5) * 120);
    const v = new Vehicle(this, { axis: 'z', road: p.x, lane: 0, dir: 1, pos: p.z, speed: 10, type });
    this.vehicles.push(v);
    return v;
  }

  spawnNPC(pos) {
    const p = pos || new THREE.Vector3((Math.random() - 0.5) * 100, 0, (Math.random() - 0.5) * 100);
    const n = new Pedestrian(this, p.x, p.z);
    this.pedestrians.push(n);
    return n;
  }

  spawnProp(type, pos) {
    const p = new StreetProp(this, type, pos.x, pos.z);
    this.props.push(p);
    return p;
  }

  spawnBuilding(x, z, width = 26, depth = 26, height = 90) {
    const sections = Math.max(3, Math.min(10, Math.round(height / 26)));
    const style = Math.random() > 0.5 ? 'glass' : 'commercial';
    const b = new Building(this, x, z, {
      width, depth, height, sections, hp: 180 + height * 1.8, style,
    });
    this.buildings.push(b);
    this.setNight(this.night);
    this.setWetness(this.wet);
    return b;
  }

  reset() {
    this.dispose();
    this.buildings = [];
    this.vehicles = [];
    this.pedestrians = [];
    this.props = [];
    this.windowMaterials = [];
    this.puddles = [];
    this.destructionCount = 0;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.buildGround();
    this.buildRoads();
    this.buildCity();
    this.buildHarbor();
    this.buildBridge();
    this.buildMountains();
    this.buildPlaza();
    this.spawnTraffic();
    this.spawnCrowd();
    this.spawnProps();
    this.setNight(this.night);
    this.setWetness(this.wet);
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse(o => {
      if (o.geometry && o.geometry !== this.boxGeo && o.geometry !== this.vehicleWheelGeo) o.geometry.dispose?.();
      if (o.material && o.material !== this.asphaltMat && o.material !== this.concreteMat) {
        if (Array.isArray(o.material)) o.material.forEach(m => m.dispose?.());
        else o.material.dispose?.();
      }
    });
  }
}
