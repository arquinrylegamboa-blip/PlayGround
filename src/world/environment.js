import * as THREE from 'three';

/* ---------------------------------------------------------------------------
   Sky, sun/moon, clouds, fog, weather and city-light orchestration.
--------------------------------------------------------------------------- */

const PALETTES = {
  night: { top: 0x040814, horizon: 0x101b30, bottom: 0x03050a, sun: 0xa9c4ff, fog: 0x0a1322, ambient: 0x1b2338, hemiSky: 0x243a5c, hemiGround: 0x080a10, sunInt: 0.22, hemiInt: 0.45, exposure: 1.0, night: 1, fogDensity: 0.0009, cloud: 0x1b2436 },
  dawn: { top: 0x23395e, horizon: 0xff8a58, bottom: 0x3b2a2c, sun: 0xffa268, fog: 0x6b5a5c, ambient: 0x443c4c, hemiSky: 0x5a6a88, hemiGround: 0x2a1c18, sunInt: 1.25, hemiInt: 0.7, exposure: 1.06, night: 0.42, fogDensity: 0.00075, cloud: 0x8a6a64 },
  day: { top: 0x2e6cb4, horizon: 0xaecbe0, bottom: 0x66757d, sun: 0xfff2d8, fog: 0x9ba9b6, ambient: 0x5f6974, hemiSky: 0x8fb4d8, hemiGround: 0x44423e, sunInt: 2.15, hemiInt: 0.95, exposure: 1.02, night: 0, fogDensity: 0.0005, cloud: 0xd8e2ea },
  dusk: { top: 0x1c2b4e, horizon: 0xf07a52, bottom: 0x3a2c34, sun: 0xffb083, fog: 0x6f6068, ambient: 0x4c4048, hemiSky: 0x6b7a9a, hemiGround: 0x2c2224, sunInt: 1.35, hemiInt: 0.8, exposure: 1.08, night: 0.55, fogDensity: 0.00075, cloud: 0x8a6a68 },
};

function lerp(a, b, t) { return a + (b - a) * t; }
function lerpColor(a, b, t, out = new THREE.Color()) {
  return out.setHex(a).lerp(new THREE.Color(b), t);
}
function mixHex(a, b, t) {
  const A = new THREE.Color(a), B = new THREE.Color(b);
  A.lerp(B, t);
  return A.getHex();
}

function makeCloudTexture() {
  const size = 256;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const rnd = () => Math.random();
  for (let i = 0; i < 38; i++) {
    const x = 40 + rnd() * (size - 80);
    const y = 70 + rnd() * (size - 140);
    const r = 18 + rnd() * 55;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(255,255,255,0.5)');
    g.addColorStop(0.55, 'rgba(255,255,255,0.18)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const SKY_VERT = `
varying vec3 vDir;
void main() {
  vDir = normalize((modelMatrix * vec4(position, 1.0)).xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
const SKY_FRAG = `
uniform vec3 topColor;
uniform vec3 horizonColor;
uniform vec3 bottomColor;
uniform vec3 sunColor;
uniform vec3 sunDir;
uniform float flash;
varying vec3 vDir;
void main() {
  float h = vDir.y;
  vec3 col;
  if (h > 0.0) col = mix(horizonColor, topColor, pow(clamp(h, 0.0, 1.0), 0.55));
  else col = mix(horizonColor, bottomColor, pow(clamp(-h, 0.0, 1.0), 0.45));
  float d = max(dot(normalize(vDir), normalize(sunDir)), 0.0);
  col += sunColor * pow(d, 180.0) * 1.6;
  col += sunColor * pow(d, 12.0) * 0.12;
  col += vec3(1.0, 0.95, 0.85) * flash;
  gl_FragColor = vec4(col, 1.0);
}`;

export class Environment {
  constructor(scene, settings, effects) {
    this.scene = scene;
    this.settings = settings;
    this.effects = effects;
    this.city = null;
    this.hour = 19.2;
    this.targetHour = 19.2;
    this.weather = 'clear';
    this.targetWeather = 'clear';
    this.timeSpeed = 0;
    this.autoCycle = false;
    this.renderer = null;
    this.current = { ...PALETTES.dusk };
    this.target = { ...PALETTES.dusk };
    this.fogDensity = 0.0012;
    this.targetFog = 0.0012;
    this.flash = 0;
    this.lightningTimer = 4;
    this.lightning = null;
    this.clouds = [];
    this.moonSprite = null;
    this.sunSprite = null;

    // Sky dome
    this.skyMat = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(PALETTES.dusk.top) },
        horizonColor: { value: new THREE.Color(PALETTES.dusk.horizon) },
        bottomColor: { value: new THREE.Color(PALETTES.dusk.bottom) },
        sunColor: { value: new THREE.Color(PALETTES.dusk.sun) },
        sunDir: { value: new THREE.Vector3(0.4, 0.3, -0.8) },
        flash: { value: 0 },
      },
      vertexShader: SKY_VERT,
      fragmentShader: SKY_FRAG,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(3000, 32, 20), this.skyMat);
    this.sky.frustumCulled = false;
    scene.add(this.sky);

    // Lights
    this.hemi = new THREE.HemisphereLight(PALETTES.dusk.hemiSky, PALETTES.dusk.hemiGround, PALETTES.dusk.hemiInt);
    scene.add(this.hemi);
    this.ambient = new THREE.AmbientLight(PALETTES.dusk.ambient, 0.55);
    scene.add(this.ambient);
    this.sun = new THREE.DirectionalLight(PALETTES.dusk.sun, PALETTES.dusk.sunInt);
    this.sun.castShadow = settings.get('shadows');
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.camera.left = -260;
    this.sun.shadow.camera.right = 260;
    this.sun.shadow.camera.top = 260;
    this.sun.shadow.camera.bottom = -260;
    this.sun.shadow.camera.near = 10;
    this.sun.shadow.camera.far = 1200;
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 1.2;
    this.sun.position.set(300, 500, 200);
    this.sun.target.position.set(0, 0, 0);
    scene.add(this.sun, this.sun.target);
    // Soft camera-side fill so titans and facades stay readable in rain/storm.
    this.fill = new THREE.DirectionalLight(0x9fb6d8, 0.38);
    this.fill.position.set(-220, 320, 380);
    this.fill.target.position.set(0, 40, 0);
    scene.add(this.fill, this.fill.target);
    this.lightningLight = new THREE.DirectionalLight(0xddeaff, 0);
    this.lightningLight.position.set(-200, 500, 100);
    scene.add(this.lightningLight);

    // Stars
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i++) {
      const a = Math.random() * Math.PI * 2;
      const y = Math.random() * 0.85 + 0.1;
      const r = Math.sqrt(1 - y * y);
      starPos[i * 3] = Math.cos(a) * r * 2600;
      starPos[i * 3 + 1] = y * 2600;
      starPos[i * 3 + 2] = Math.sin(a) * r * 2600;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    this.stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xcddcff, size: 3.2, transparent: true, opacity: 0, sizeAttenuation: true, depthWrite: false, fog: false }));
    this.stars.frustumCulled = false;
    scene.add(this.stars);

    // Sun / moon sprites
    const glow = this.makeGlowTexture();
    this.sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: 0xffe6b0, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    this.sunSprite.scale.setScalar(260);
    scene.add(this.sunSprite);
    this.moonSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: 0xd8e4ff, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    this.moonSprite.scale.setScalar(150);
    scene.add(this.moonSprite);

    // Clouds
    const cloudTex = makeCloudTexture();
    for (let i = 0; i < 16; i++) {
      const mat = new THREE.SpriteMaterial({ map: cloudTex, color: 0x8a6a64, transparent: true, opacity: 0.34, depthWrite: false, fog: false });
      const s = new THREE.Sprite(mat);
      const a = Math.random() * Math.PI * 2;
      const r = 500 + Math.random() * 1400;
      s.position.set(Math.cos(a) * r, 260 + Math.random() * 260, Math.sin(a) * r);
      const sc = 420 + Math.random() * 620;
      s.scale.set(sc, sc * 0.42, 1);
      s.userData.speed = 2 + Math.random() * 5;
      scene.add(s);
      this.clouds.push(s);
    }

    // Fog
    this.scene.fog = new THREE.FogExp2(PALETTES.dusk.fog, this.fogDensity);

    // Lightning geometry
    this.lightningGroup = new THREE.Group();
    this.lightningGroup.visible = false;
    scene.add(this.lightningGroup);
    this.lightningLife = 0;

    this.applyHour(19.2, true);
    this.setWeather('clear', true);
  }

  makeGlowTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.15, 'rgba(255,255,255,0.95)');
    g.addColorStop(0.4, 'rgba(255,255,255,0.32)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }

  attachCity(city) { this.city = city; this.applyCityState(); }
  attachRenderer(renderer) { this.renderer = renderer; }
  setShadows(on) {
    this.sun.castShadow = on;
    if (this.renderer) {
      this.renderer.shadowMap.enabled = on;
      this.renderer.shadowMap.needsUpdate = true;
    }
  }

  setTimePreset(name) {
    const map = { night: 0.5, sunrise: 6.2, dawn: 6.2, day: 12, noon: 12, sunset: 18.4, dusk: 18.4 };
    if (map[name] !== undefined) this.setHour(map[name]);
  }

  setHour(h) {
    this.targetHour = ((h % 24) + 24) % 24;
    this.hour = this.targetHour;
    this.applyHour(this.targetHour, false);
  }

  samplePalette(hour) {
    const keys = [
      [0, 'night'], [5, 'night'], [6.2, 'dawn'], [8.5, 'day'],
      [16.5, 'day'], [18.4, 'dusk'], [20, 'night'], [24, 'night'],
    ];
    for (let i = 0; i < keys.length - 1; i++) {
      const [h0, n0] = keys[i], [h1, n1] = keys[i + 1];
      if (hour >= h0 && hour <= h1) {
        const t = (hour - h0) / Math.max(0.0001, h1 - h0);
        const A = PALETTES[n0], B = PALETTES[n1];
        return {
          top: mixHex(A.top, B.top, t), horizon: mixHex(A.horizon, B.horizon, t), bottom: mixHex(A.bottom, B.bottom, t),
          sun: mixHex(A.sun, B.sun, t), fog: mixHex(A.fog, B.fog, t), ambient: mixHex(A.ambient, B.ambient, t),
          hemiSky: mixHex(A.hemiSky, B.hemiSky, t), hemiGround: mixHex(A.hemiGround, B.hemiGround, t),
          sunInt: lerp(A.sunInt, B.sunInt, t), hemiInt: lerp(A.hemiInt, B.hemiInt, t),
          exposure: lerp(A.exposure, B.exposure, t), night: lerp(A.night, B.night, t),
          fogDensity: lerp(A.fogDensity, B.fogDensity, t), cloud: mixHex(A.cloud, B.cloud, t),
        };
      }
    }
    return { ...PALETTES.night };
  }

  applyHour(hour, immediate = false) {
    this.hour = hour;
    const p = this.samplePalette(hour);
    this.target = p;
    if (immediate) this.current = { ...p };
    const angle = ((hour - 6) / 12) * Math.PI;
    this.sunDir = new THREE.Vector3(Math.cos(angle) * 0.8, Math.sin(angle), 0.35).normalize();
    this.moonDir = this.sunDir.clone().multiplyScalar(-1);
    this.applyCityState();
  }

  applyCityState() {
    if (!this.city) return;
    const night = this.current.night ?? 0;
    this.city.setNight(night);
    this.city.setFog(this.current.fog, this.fogDensity);
  }

  setWeather(kind, immediate = false) {
    this.weather = kind;
    this.targetWeather = kind;
    if (this.effects) this.effects.rain.setIntensity(kind);
    if (kind === 'clear') this.targetFog = this.current.fogDensity * 0.7;
    if (kind === 'rain') this.targetFog = Math.max(0.0007, this.current.fogDensity * 0.95);
    if (kind === 'storm') this.targetFog = Math.max(0.0011, this.current.fogDensity * 1.25);
    if (kind === 'fog') this.targetFog = Math.max(0.004, this.current.fogDensity * 4.5);
    if (immediate) this.fogDensity = this.targetFog;
    if (this.city) this.city.setWetness(kind === 'rain' || kind === 'storm');
  }

  update(dt, camera) {
    if (this.autoCycle) {
      this.hour = (this.hour + dt * 0.012) % 24;
      this.applyHour(this.hour);
    }
    // Smooth atmosphere interpolation
    const speed = 1 - Math.exp(-dt * 1.2);
    const c = this.current, t = this.target;
    for (const key of ['sunInt', 'hemiInt', 'exposure', 'night', 'fogDensity']) c[key] = lerp(c[key], t[key], speed);
    for (const key of ['top', 'horizon', 'bottom', 'sun', 'fog', 'ambient', 'hemiSky', 'hemiGround', 'cloud']) c[key] = mixHex(c[key], t[key], speed);
    this.fogDensity = lerp(this.fogDensity, this.targetFog, speed);

    // Sky uniforms
    this.skyMat.uniforms.topColor.value.setHex(c.top);
    this.skyMat.uniforms.horizonColor.value.setHex(c.horizon);
    this.skyMat.uniforms.bottomColor.value.setHex(c.bottom);
    this.skyMat.uniforms.sunColor.value.setHex(c.sun);
    this.skyMat.uniforms.sunDir.value.copy(this.sunDir);
    this.skyMat.uniforms.flash.value = this.flash;

    // Lights
    const sunElev = Math.max(0, this.sunDir.y);
    const nightFactor = c.night;
    const weatherDim = this.weather === 'storm' ? 0.58 : this.weather === 'rain' ? 0.78 : this.weather === 'fog' ? 0.68 : 1;
    this.sun.position.copy(this.sunDir).multiplyScalar(600);
    this.sun.intensity = c.sunInt * weatherDim;
    this.sun.color.setHex(c.sun);
    this.hemi.intensity = c.hemiInt * (1.05 + sunElev * 0.25);
    this.hemi.color.setHex(c.hemiSky);
    this.hemi.groundColor.setHex(c.hemiGround);
    this.ambient.color.setHex(c.ambient);
    this.ambient.intensity = 0.5 + nightFactor * 0.4;
    this.fill.intensity = (0.42 + nightFactor * 0.26) * weatherDim;
    this.fill.color.setHex(this.weather === 'storm' ? 0xa9c4e8 : c.hemiSky);
    this.stars.material.opacity = Math.max(0, nightFactor - 0.15) * 0.9;
    this.stars.visible = this.stars.material.opacity > 0.02;
    this.sunSprite.position.copy(this.sunDir).multiplyScalar(2400);
    this.sunSprite.material.color.setHex(c.sun);
    this.sunSprite.material.opacity = Math.max(0, 0.85 - nightFactor * 0.6) * (this.weather === 'clear' ? 1 : 0.3);
    this.moonSprite.position.copy(this.moonDir).multiplyScalar(2400);
    this.moonSprite.material.opacity = Math.max(0, nightFactor * 0.9 - 0.05);
    this.scene.fog.color.setHex(c.fog);
    this.scene.fog.density = this.fogDensity;
    if (this.renderer) this.renderer.toneMappingExposure = c.exposure;
    this.applyCityState();

    // Clouds
    for (const s of this.clouds) {
      s.position.x += s.userData.speed * dt * (this.weather === 'storm' ? 3 : 1);
      if (s.position.x > 1900) s.position.x = -1900;
      s.material.color.setHex(c.cloud);
      s.material.opacity = (this.weather === 'fog' ? 0.2 : this.weather === 'storm' ? 0.55 : 0.32) * (0.6 + nightFactor * 0.4);
    }

    // Storm lightning
    if (this.weather === 'storm') {
      this.lightningTimer -= dt;
      if (this.lightningTimer <= 0) {
        this.triggerLightning(camera);
        this.lightningTimer = 2.2 + Math.random() * 5.5;
      }
    }
    if (this.lightningLife > 0) {
      this.lightningLife -= dt;
      const k = Math.max(0, this.lightningLife / 0.35);
      this.flash = k * 0.35;
      this.lightningLight.intensity = k * 3.5;
      this.lightningGroup.visible = k > 0;
      if (this.lightningLife <= 0) { this.lightningGroup.visible = false; this.flash = 0; }
    } else {
      this.lightningLight.intensity = 0;
      this.flash = 0;
    }
  }

  triggerLightning(camera) {
    const cx = camera ? camera.position.x : 0;
    const cz = camera ? camera.position.z : 0;
    const x = cx + (Math.random() - 0.5) * 500;
    const z = cz + (Math.random() - 0.5) * 500;
    while (this.lightningGroup.children.length) this.lightningGroup.remove(this.lightningGroup.children[0]);
    const pts = [];
    let px = x, py = 500, pz = z;
    for (let i = 0; i < 14; i++) {
      pts.push(new THREE.Vector3(px, py, pz));
      px += (Math.random() - 0.5) * 35;
      py -= 32 + Math.random() * 12;
      pz += (Math.random() - 0.5) * 35;
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xcfe6ff, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.lightningGroup.add(line);
    this.lightningGroup.visible = true;
    this.lightningLife = 0.35;
    this.lightningLight.position.set(x, 400, z);
    if (this.onThunder) this.onThunder();
  }

  dispose() {
    this.scene.remove(this.sky, this.hemi, this.ambient, this.sun, this.sun.target, this.fill, this.fill.target, this.lightningLight, this.stars, this.sunSprite, this.moonSprite, this.lightningGroup);
    for (const c of this.clouds) { this.scene.remove(c); c.material.dispose(); }
    this.sky.geometry.dispose();
    this.skyMat.dispose();
  }
}
