import * as THREE from 'three';
import { captureRigBases } from './animation.js';

/* ---------------------------------------------------------------------------
   Procedural titan construction. Every monster is built from shared sculpting
   helpers but has a distinct skeleton, silhouette, palette and surface style.
--------------------------------------------------------------------------- */

const TAU = Math.PI * 2;
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

/* ------------------------------- textures -------------------------------- */

function hexToRgb(hex) {
  return { r: (hex >> 16) & 255, g: (hex >> 8) & 255, b: hex & 255 };
}
function rgbStr(r, g, b, a = 1) {
  return `rgba(${Math.max(0, Math.min(255, r | 0))},${Math.max(0, Math.min(255, g | 0))},${Math.max(0, Math.min(255, b | 0))},${a})`;
}
function shade(hex, amt) {
  const c = hexToRgb(hex);
  return rgbStr(c.r + amt, c.g + amt, c.b + amt);
}
function mixHex(a, b, t) {
  const A = hexToRgb(a), B = hexToRgb(b);
  return ((Math.round(A.r + (B.r - A.r) * t) << 16) | (Math.round(A.g + (B.g - A.g) * t) << 8) | Math.round(A.b + (B.b - A.b) * t));
}
function seeded(seed) {
  let s = 0;
  for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
function makeCanvas(size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  return c;
}
function noise(ctx, size, amount, rnd) {
  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (rnd() - 0.5) * amount;
    d[i] = Math.max(0, Math.min(255, d[i] + n));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n));
    d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n));
  }
  ctx.putImageData(img, 0, 0);
}

const surfaceCache = new Map();
function surfaceTextures(style, primary, secondary, accent) {
  const key = `${style}-${primary}-${secondary}-${accent}`;
  if (surfaceCache.has(key)) return surfaceCache.get(key);
  const S = 256;
  const c = makeCanvas(S), b = makeCanvas(S);
  const ctx = c.getContext('2d'), bx = b.getContext('2d');
  const rnd = seeded(key);
  const base = hexToRgb(primary), dark = hexToRgb(secondary), hi = hexToRgb(accent);
  ctx.fillStyle = shade(primary, 0);
  ctx.fillRect(0, 0, S, S);
  const grad = ctx.createLinearGradient(0, 0, S, S);
  grad.addColorStop(0, shade(primary, 14));
  grad.addColorStop(0.55, shade(primary, -6));
  grad.addColorStop(1, shade(secondary, 6));
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, S, S);

  bx.fillStyle = '#808080';
  bx.fillRect(0, 0, S, S);

  if (style === 'fur') {
    for (let i = 0; i < 3400; i++) {
      const x = rnd() * S, y = rnd() * S, len = 4 + rnd() * 13;
      const ang = -1.3 + rnd() * 2.6;
      ctx.strokeStyle = rnd() > 0.45 ? shade(primary, 18 + rnd() * 22) : shade(secondary, 4 + rnd() * 12);
      ctx.lineWidth = 0.7 + rnd() * 1.2;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(x + Math.cos(ang) * len * 0.5, y + Math.sin(ang) * len * 0.5, x + Math.cos(ang) * len, y + Math.sin(ang) * len);
      ctx.stroke();
      bx.strokeStyle = rnd() > 0.5 ? '#b8b8b8' : '#5a5a5a';
      bx.lineWidth = 1;
      bx.beginPath();
      bx.moveTo(x, y);
      bx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
      bx.stroke();
    }
    for (let i = 0; i < 55; i++) {
      ctx.fillStyle = shade(primary, -18 - rnd() * 16);
      ctx.globalAlpha = 0.35;
      ctx.beginPath();
      ctx.ellipse(rnd() * S, rnd() * S, 5 + rnd() * 12, 3 + rnd() * 8, rnd() * TAU, 0, TAU);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  } else if (style === 'metal') {
    for (let i = 0; i < 8; i++) {
      ctx.strokeStyle = shade(secondary, 0);
      ctx.lineWidth = 2 + rnd() * 2;
      const y = (i / 8) * S + rnd() * 8;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(S, y); ctx.stroke();
      bx.strokeStyle = '#4a4a4a'; bx.lineWidth = 2; bx.beginPath(); bx.moveTo(0, y); bx.lineTo(S, y); bx.stroke();
    }
    for (let i = 0; i < 6; i++) {
      const x = (i / 6) * S + rnd() * 10;
      ctx.strokeStyle = shade(secondary, 4);
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, S); ctx.stroke();
    }
    for (let i = 0; i < 70; i++) {
      const x = rnd() * S, y = rnd() * S;
      ctx.fillStyle = shade(hi, 0);
      ctx.beginPath(); ctx.arc(x, y, 1.2 + rnd() * 1.4, 0, TAU); ctx.fill();
    }
    for (let i = 0; i < 36; i++) {
      ctx.strokeStyle = shade(hi, 10 + rnd() * 20);
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = 0.8;
      const x = rnd() * S, y = rnd() * S;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 8 + rnd() * 30, y + (rnd() - 0.5) * 8); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    for (let i = 0; i < 24; i++) {
      bx.fillStyle = rnd() > 0.5 ? '#e0e0e0' : '#3a3a3a';
      bx.beginPath(); bx.arc(rnd() * S, rnd() * S, 1 + rnd() * 2, 0, TAU); bx.fill();
    }
  } else if (style === 'ice') {
    for (let i = 0; i < 90; i++) {
      const x = rnd() * S, y = rnd() * S, r = 4 + rnd() * 22;
      ctx.fillStyle = rnd() > 0.5 ? shade(accent, 10) : shade(primary, -14);
      ctx.globalAlpha = 0.25 + rnd() * 0.35;
      ctx.beginPath();
      for (let k = 0; k < 5; k++) {
        const a = (k / 5) * TAU + rnd() * 0.5;
        ctx.lineTo(x + Math.cos(a) * r * (0.5 + rnd() * 0.5), y + Math.sin(a) * r * (0.5 + rnd() * 0.5));
      }
      ctx.closePath(); ctx.fill();
    }
    ctx.globalAlpha = 1;
    for (let i = 0; i < 26; i++) {
      ctx.strokeStyle = shade(accent, 25);
      ctx.globalAlpha = 0.6;
      ctx.lineWidth = 0.8 + rnd();
      const x = rnd() * S, y = rnd() * S;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (rnd() - 0.5) * 60, y + (rnd() - 0.5) * 60); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    for (let i = 0; i < 40; i++) {
      bx.fillStyle = rnd() > 0.5 ? '#d0d0d0' : '#555';
      bx.beginPath(); bx.arc(rnd() * S, rnd() * S, 1 + rnd() * 5, 0, TAU); bx.fill();
    }
  } else {
    // scales / gold
    const scaleSize = style === 'gold' ? 12 : 14;
    let row = 0;
    for (let y = -8; y < S + 12; y += scaleSize * 0.68) {
      for (let x = (row % 2 ? -scaleSize / 2 : 0); x < S + scaleSize; x += scaleSize) {
        const r = scaleSize * (0.48 + rnd() * 0.12);
        ctx.beginPath();
        ctx.ellipse(x + (rnd() - 0.5) * 2, y + (rnd() - 0.5) * 2, r, r * 0.66, 0, 0, TAU);
        ctx.fillStyle = rnd() > 0.5 ? shade(primary, 5 + rnd() * 14) : shade(primary, -12 - rnd() * 10);
        ctx.fill();
        ctx.strokeStyle = shade(dark, 6);
        ctx.lineWidth = 0.9;
        ctx.stroke();
        if (rnd() > 0.82) {
          ctx.fillStyle = shade(hi, 10);
          ctx.globalAlpha = 0.55;
          ctx.beginPath(); ctx.ellipse(x - r * 0.15, y - r * 0.2, r * 0.4, r * 0.22, 0, 0, TAU); ctx.fill();
          ctx.globalAlpha = 1;
        }
      }
      row++;
    }
    if (style === 'gold') {
      for (let i = 0; i < 50; i++) {
        ctx.fillStyle = shade(accent, 30 + rnd() * 40);
        ctx.globalAlpha = 0.5;
        ctx.beginPath(); ctx.arc(rnd() * S, rnd() * S, 0.8 + rnd() * 2, 0, TAU); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    for (let i = 0; i < 22; i++) {
      ctx.strokeStyle = shade(secondary, 0);
      ctx.globalAlpha = 0.5;
      ctx.lineWidth = 0.8;
      const x = rnd() * S, y = rnd() * S;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 10 + rnd() * 35, y + (rnd() - 0.5) * 16); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    for (let i = 0; i < 40; i++) {
      bx.fillStyle = rnd() > 0.5 ? '#c8c8c8' : '#505050';
      bx.beginPath(); bx.arc(rnd() * S, rnd() * S, 1 + rnd() * 4, 0, TAU); bx.fill();
    }
  }
  noise(ctx, S, style === 'metal' ? 12 : 22, rnd);
  noise(bx, S, 45, rnd);
  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(style === 'fur' ? 2 : 1.4, style === 'fur' ? 2 : 1.4);
  map.anisotropy = 4;
  const bump = new THREE.CanvasTexture(b);
  bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.copy(map.repeat);
  const out = { map, bump };
  surfaceCache.set(key, out);
  return out;
}

const wingCache = new Map();
function wingTexture(kind, c1, c2, accent) {
  const key = `${kind}-${c1}-${c2}-${accent}`;
  if (wingCache.has(key)) return wingCache.get(key);
  const S = 512;
  const c = makeCanvas(S), ctx = c.getContext('2d');
  const rnd = seeded(key);
  const grad = ctx.createLinearGradient(0, 0, S, S);
  grad.addColorStop(0, shade(c2, 0));
  grad.addColorStop(0.5, shade(c1, 0));
  grad.addColorStop(1, shade(c2, 12));
  ctx.fillStyle = grad; ctx.fillRect(0, 0, S, S);
  if (kind === 'moth') {
    ctx.fillStyle = shade(accent, 20); ctx.globalAlpha = 0.18;
    for (let i = 0; i < 14; i++) {
      ctx.beginPath(); ctx.ellipse(rnd() * S, rnd() * S, 18 + rnd() * 55, 10 + rnd() * 30, rnd() * TAU, 0, TAU); ctx.fill();
    }
    ctx.globalAlpha = 1;
    // eyespots
    for (const [x, y, r] of [[140, 250, 56], [370, 250, 56], [110, 120, 30], [400, 120, 30]]) {
      ctx.fillStyle = shade(c2, 8); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
      ctx.strokeStyle = shade(accent, 35); ctx.lineWidth = 5; ctx.stroke();
      ctx.fillStyle = shade(accent, 20); ctx.globalAlpha = 0.8;
      ctx.beginPath(); ctx.arc(x, y, r * 0.55, 0, TAU); ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = shade(c2, -10); ctx.beginPath(); ctx.arc(x, y, r * 0.24, 0, TAU); ctx.fill();
    }
    ctx.strokeStyle = shade(c2, -18); ctx.lineWidth = 2.5; ctx.globalAlpha = 0.7;
    for (let i = 0; i < 26; i++) {
      const x = rnd() * S, y = rnd() * S;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + 30, y + 20, x + 60, y + (rnd() - 0.5) * 40); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  } else {
    // bat / pterosaur membrane veins
    ctx.strokeStyle = shade(c2, -22); ctx.globalAlpha = 0.85;
    for (let i = 0; i < 7; i++) {
      const sx = S * (0.04 + i * 0.14), sy = 20 + rnd() * 30;
      ctx.lineWidth = 3.5;
      ctx.beginPath(); ctx.moveTo(sx, sy); ctx.quadraticCurveTo(sx + 60, 220, sx + 20, S - 10); ctx.stroke();
      ctx.lineWidth = 1.2;
      for (let k = 0; k < 4; k++) {
        const t = 0.2 + k * 0.18;
        ctx.beginPath();
        ctx.moveTo(sx + t * 55, sy + t * 300);
        ctx.lineTo(sx + t * 55 + 50 + rnd() * 40, sy + t * 300 + 30 + rnd() * 40);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    for (let i = 0; i < 26; i++) {
      ctx.strokeStyle = shade(accent, -30);
      ctx.globalAlpha = 0.18;
      ctx.lineWidth = 1;
      const x = rnd() * S, y = rnd() * S;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 30 + rnd() * 60, y + (rnd() - 0.5) * 20); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  noise(ctx, S, 18, rnd);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  wingCache.set(key, tex);
  return tex;
}

/* ------------------------------- materials ------------------------------- */

function surfaceMat(style, primary, secondary, accent, opts = {}) {
  const { map, bump } = surfaceTextures(style, primary, secondary, accent);
  return new THREE.MeshStandardMaterial({
    map, bumpMap: bump, bumpScale: opts.bumpScale ?? 0.07,
    color: opts.color ?? 0xffffff,
    roughness: opts.roughness ?? (style === 'metal' ? 0.34 : style === 'ice' ? 0.42 : 0.72),
    metalness: opts.metalness ?? (style === 'metal' ? 0.86 : style === 'ice' ? 0.12 : 0.04),
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 0,
    side: opts.side ?? THREE.FrontSide,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
    flatShading: !!opts.flatShading,
  });
}

function createMaterials(def) {
  const { primary, secondary, accent, eye, glow } = def.colors;
  const style = def.style;
  const B = def.build || {};
  const skin = surfaceMat(style, primary, secondary, accent);
  const dark = surfaceMat(style, mixHex(primary, secondary, 0.55), secondary, accent, { roughness: style === 'metal' ? 0.3 : 0.78 });
  const belly = surfaceMat(style, mixHex(primary, accent, 0.42), secondary, accent, { roughness: 0.7 });
  const glowStrength = B.glow ?? 0.2;
  const plate = surfaceMat(style === 'metal' ? 'metal' : style === 'ice' ? 'ice' : 'scales', accent, secondary, primary, {
    roughness: 0.5, metalness: style === 'metal' ? 0.8 : 0.1,
    emissive: glow, emissiveIntensity: glowStrength * 0.55,
  });
  const plateHot = new THREE.MeshStandardMaterial({
    color: glow, emissive: glow, emissiveIntensity: 0.6 + glowStrength * 2.2,
    roughness: 0.32, metalness: 0.2, toneMapped: false,
  });
  const eyeMat = new THREE.MeshStandardMaterial({ color: eye, emissive: eye, emissiveIntensity: 3.2, roughness: 0.15, toneMapped: false });
  const claw = surfaceMat('scales', 0xcbbfa8, 0x5e574b, 0xe8ddc8, { roughness: 0.45, bumpScale: 0.03 });
  const teeth = new THREE.MeshStandardMaterial({ color: 0xe8e0c9, roughness: 0.4, metalness: 0.05 });
  const mouth = new THREE.MeshStandardMaterial({ color: 0x2a0d0d, roughness: 0.7, emissive: 0x2a0000, emissiveIntensity: 0.2 });
  const scar = new THREE.MeshStandardMaterial({ color: 0x171512, roughness: 0.9 });
  const metal = surfaceMat('metal', accent, secondary, 0xd8e0ea, { roughness: 0.3, metalness: 0.92 });
  const metalDark = surfaceMat('metal', secondary, primary, accent, { roughness: 0.38, metalness: 0.88 });
  const membrane = new THREE.MeshStandardMaterial({
    map: wingTexture(def.family === 'mothra' ? 'moth' : def.family === 'ghidorah' ? 'gold' : 'bat', primary, secondary, accent),
    color: 0xffffff, side: THREE.DoubleSide, transparent: true, opacity: 0.96,
    roughness: 0.62, metalness: 0.02,
    emissive: glow, emissiveIntensity: glowStrength * 0.18,
  });
  const membraneGlow = new THREE.MeshBasicMaterial({ color: glow, transparent: true, opacity: 0.55, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false });
  const beam = new THREE.MeshBasicMaterial({ color: glow, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
  return { skin, dark, belly, plate, plateHot, eye: eyeMat, claw, teeth, mouth, scar, metal, metalDark, membrane, membraneGlow, beam, glow, glowStrength };
}

/* ------------------------------- geometry -------------------------------- */

const geoCache = new Map();
function G(key, make) {
  if (!geoCache.has(key)) geoCache.set(key, make());
  return geoCache.get(key);
}
const sphere = (r, w = 14, h = 10) => G(`s${r}-${w}-${h}`, () => new THREE.SphereGeometry(r, w, h));
const box = (w, h, d) => G(`b${w}-${h}-${d}`, () => new THREE.BoxGeometry(w, h, d));
const cyl = (rt, rb, h, s = 10) => G(`c${rt}-${rb}-${h}-${s}`, () => new THREE.CylinderGeometry(rt, rb, h, s, 1));
const cone = (r, h, s = 8) => G(`k${r}-${h}-${s}`, () => new THREE.ConeGeometry(r, h, s));
const capsule = (r, l, s = 10) => G(`p${r}-${l}-${s}`, () => new THREE.CapsuleGeometry(r, l, 4, s));

function add(parent, geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}
function grp(parent, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.set(rx, ry, rz);
  parent.add(g);
  return g;
}
function ellipsoid(parent, mat, x, y, z, sx, sy, sz, w = 14, h = 10) {
  return add(parent, sphere(1, w, h), mat, x, y, z, 0, 0, 0, sx, sy, sz);
}
function cylinderBetween(parent, mat, a, b, r1, r2, radial = 8) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const m = add(parent, cyl(r2, r1, len, radial), mat, (a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  return m;
}
function limb(parent, opts) {
  const { x, y, z, upper, lower, r1 = 0.32, r2 = 0.24, r3 = 0.18, mat, endMat, rot = [0, 0, 0] } = opts;
  const root = grp(parent, x, y, z, rot[0], rot[1], rot[2]);
  add(root, cyl(r2, r1, upper, 10), mat, 0, -upper / 2, 0);
  add(root, sphere(r1 * 0.95, 10, 8), mat, 0, 0, 0);
  const lowerG = grp(root, 0, -upper, 0);
  add(lowerG, cyl(r3, r2, lower, 9), mat, 0, -lower / 2, 0);
  add(lowerG, sphere(r2, 10, 8), mat, 0, 0, 0);
  const end = grp(lowerG, 0, -lower, 0);
  if (endMat) add(end, sphere(r3 * 1.05, 10, 8), endMat, 0, 0, 0);
  return { root, upper: lowerG, end, upperLen: upper, lowerLen: lower };
}

function addClaws(parent, mat, count = 3, spread = 0.16, len = 0.38, y = -0.12, z = -0.16) {
  for (let i = 0; i < count; i++) {
    const a = (i / (count - 1 || 1) - 0.5) * spread * 2;
    add(parent, cone(0.07, len, 5), mat, a, y, z, -Math.PI / 2.5, 0, 0);
  }
}
function addTeeth(parent, mat, count, y, z, spread, size = 0.09, lower = false) {
  for (let i = 0; i < count; i++) {
    const x = (i / (count - 1) - 0.5) * spread;
    add(parent, cone(size, size * 2.4, 4), mat, x, y, z, lower ? Math.PI : 0, 0, 0);
  }
}

function makeHead(parent, opts) {
  const {
    mat, dark, eyeMat, teeth, mouth, claw, x = 0, y = 0, z = 0, scale = 1,
    snout = 1, jaw = 0.34, horns = 0, crest = false, beak = false, mech = false, glowMat,
  } = opts;
  const head = grp(parent, x, y, z);
  const skull = ellipsoid(head, mat, 0, 0, 0, 0.72 * scale, 0.6 * scale, 0.9 * scale, 16, 12);
  // brow / crest
  if (crest) {
    add(head, cone(0.32 * scale, 0.85 * scale, 5), dark, 0, 0.5 * scale, 0.35 * scale, -0.25, 0, 0, 1, 1, 0.35);
    add(head, cone(0.18 * scale, 0.55 * scale, 5), mat, 0, 0.55 * scale, 0.05, -0.1, 0, 0, 1, 1, 0.4);
  }
  if (horns) {
    for (const s of [-1, 1]) {
      add(head, cone(0.11 * scale, 0.75 * scale, 5), claw, s * 0.42 * scale, 0.35 * scale, 0.28 * scale, 0.7, 0, s * 0.35);
    }
  }
  // snout
  if (beak) {
    const beakG = grp(head, 0, -0.02 * scale, -0.75 * scale);
    add(beakG, cone(0.28 * scale, 1.25 * scale, 6), claw, 0, 0, -0.35 * scale, -Math.PI / 2, 0, 0);
    add(beakG, cone(0.18 * scale, 0.75 * scale, 5), dark, 0, -0.12 * scale, -0.28 * scale, -Math.PI / 2, 0, 0);
  } else {
    ellipsoid(head, mat, 0, -0.08 * scale, -0.55 * scale, 0.55 * scale * snout, 0.36 * scale, 0.72 * scale * snout, 14, 10);
    add(head, box(0.42 * scale, 0.12 * scale, 0.55 * scale), dark, 0, 0.2 * scale, -0.52 * scale);
    // nostrils
    for (const s of [-1, 1]) add(head, sphere(0.055 * scale, 6, 5), mouth, s * 0.18 * scale, 0.02 * scale, -1.14 * scale * snout);
  }
  // eyes
  const eyeX = mech ? 0.3 : 0.34;
  for (const s of [-1, 1]) {
    add(head, sphere(0.115 * scale, 8, 6), eyeMat, s * eyeX * scale, 0.2 * scale, -0.6 * scale);
    add(head, sphere(0.06 * scale, 6, 5), mouth, s * eyeX * scale, 0.2 * scale, -0.7 * scale);
    if (mech) add(head, box(0.4 * scale, 0.08 * scale, 0.3 * scale), glowMat || eyeMat, s * 0.16 * scale, 0.2 * scale, -0.62 * scale);
  }
  // jaw
  const jawG = grp(head, 0, -0.34 * scale, -0.25 * scale);
  ellipsoid(jawG, dark, 0, -0.02 * scale, -0.42 * scale, 0.48 * scale, 0.16 * scale, 0.72 * scale, 12, 8);
  add(jawG, box(0.42 * scale, 0.09 * scale, 0.6 * scale), mouth, 0, 0.06 * scale, -0.55 * scale);
  if (!beak) {
    addTeeth(jawG, teeth, 5, 0.08 * scale, -0.86 * scale, 0.5 * scale, 0.055 * scale, true);
    addTeeth(head, teeth, 5, -0.18 * scale, -0.88 * scale, 0.5 * scale, 0.055 * scale, false);
  }
  return { head, jaw: jawG, skull };
}

function makeTail(parent, opts) {
  const {
    count = 8, length = 0.9, r = 0.55, taper = 0.87, mat, plateMat, plateScale = 1,
    x = 0, y = 0, z = 0, droop = -0.08, spikes = true, side = 0,
  } = opts;
  const segs = [];
  let node = grp(parent, x, y, z);
  for (let i = 0; i < count; i++) {
    const rr = r * Math.pow(taper, i);
    const seg = grp(node);
    seg.rotation.x = droop;
    if (side) seg.rotation.y = side;
    const m = add(seg, cyl(rr * taper, rr, length, 9), mat, 0, 0, length / 2, Math.PI / 2, 0, 0);
    m.scale.z = 0.92;
    if (spikes && plateMat) {
      add(seg, cone(rr * 0.42 * plateScale, rr * 1.1 * plateScale, 4), plateMat, 0, rr * 0.8, length * 0.5, 0.12, 0, 0, 1, 1, 0.42);
    }
    segs.push(seg);
    node = grp(seg, 0, 0, length);
  }
  // tail tip
  add(node, cone(r * 0.12, length * 0.9, 6), mat, 0, 0, length * 0.4, Math.PI / 2, 0, 0);
  return { segs, tip: node };
}

function makeWing(parent, opts) {
  const {
    side = 1, span = 6, mat, boneMat, glowMat, x = 0, y = 0, z = 0,
    baseRot = [0, 0, 0], scallop = true, fingers = 4,
  } = opts;
  const wing = grp(parent, x, y, z, baseRot[0], baseRot[1], baseRot[2]);
  wing.scale.x = side;
  const s = new THREE.Shape();
  s.moveTo(0, 0.4);
  s.lineTo(span * 0.32, 1.5);
  s.lineTo(span * 0.7, 1.25);
  s.lineTo(span, 0.25);
  if (scallop) {
    s.lineTo(span * 0.9, -0.8);
    s.lineTo(span * 0.72, -0.25);
    s.lineTo(span * 0.6, -1.9);
    s.lineTo(span * 0.42, -0.55);
    s.lineTo(span * 0.28, -2.1);
    s.lineTo(span * 0.14, -0.65);
    s.lineTo(0, -1.3);
  } else {
    s.lineTo(span * 0.85, -1.2);
    s.lineTo(span * 0.55, -0.5);
    s.lineTo(span * 0.35, -1.7);
    s.lineTo(0, -1.3);
  }
  s.closePath();
  const geo = new THREE.ShapeGeometry(s, 12);
  const membrane = new THREE.Mesh(geo, mat);
  membrane.castShadow = true;
  membrane.receiveShadow = true;
  wing.add(membrane);
  // glowing edge strip
  if (glowMat) {
    const edge = new THREE.Mesh(new THREE.EdgesGeometry(geo), glowMat);
    edge.position.z = 0.02;
    wing.add(edge);
  }
  // finger bones
  const tips = [[span * 0.7, 1.25], [span, 0.25], [span * 0.6, -1.9], [span * 0.28, -2.1]];
  for (let i = 0; i < Math.min(fingers, tips.length); i++) {
    const [tx, ty] = tips[i];
    cylinderBetween(wing, boneMat, V(0, 0.1, 0), V(tx, ty, 0), 0.09, 0.035, 6);
  }
  cylinderBetween(wing, boneMat, V(0, 0.1, 0), V(span * 0.32, 1.5, 0), 0.14, 0.08, 6);
  return wing;
}

/* ------------------------------- builders -------------------------------- */

function buildGodzilla(def) {
  const B = def.build || {};
  const bulk = B.bulk || 1;
  const mats = createMaterials(def);
  const root = new THREE.Group();
  const rig = { family: 'godzilla', def, mats, root, baseHeight: 9.8 };
  const hipY = 4.05;
  const pelvis = grp(root, 0, hipY, 0);
  rig.pelvis = pelvis;
  ellipsoid(pelvis, mats.skin, 0, 0, 0, 1.22 * bulk, 0.9, 1.05, 18, 12);
  ellipsoid(pelvis, mats.belly, 0, -0.1, -0.55, 0.75 * bulk, 0.55, 0.55, 12, 8);

  const torso = grp(pelvis, 0, 0.62, 0);
  rig.torso = torso;
  ellipsoid(torso, mats.skin, 0, 1.0, 0, 1.35 * bulk, 1.55, 1.02, 18, 14);
  ellipsoid(torso, mats.belly, 0, 0.9, -0.62, 0.86 * bulk, 1.05, 0.5, 14, 10);
  ellipsoid(torso, mats.skin, 0, 1.9, -0.18, 1.52 * bulk, 0.9, 1.05, 16, 10);
  // shoulder muscles
  ellipsoid(torso, mats.dark, -1.25 * bulk, 2.0, 0, 0.52, 0.5, 0.5, 10, 8);
  ellipsoid(torso, mats.dark, 1.25 * bulk, 2.0, 0, 0.52, 0.5, 0.5, 10, 8);
  if (B.scars) {
    add(torso, box(0.03, 0.5, 0.9), mats.scar, -0.45, 1.15, -1.0, 0.2, 0, -0.25);
    add(torso, box(0.03, 0.35, 0.55), mats.scar, 0.35, 1.7, -1.02, 0.1, 0, 0.2);
  }

  // neck + head
  const neck = grp(torso, 0, 2.45, -0.35);
  rig.neck = neck;
  add(neck, cyl(0.55, 0.75, 1.25, 10), mats.skin, 0, 0.45, -0.12, -0.38, 0, 0);
  const headG = makeHead(neck, {
    mat: mats.skin, dark: mats.dark, eyeMat: mats.eye, teeth: mats.teeth, mouth: mats.mouth, claw: mats.claw,
    x: 0, y: 1.18, z: -0.5, scale: 1.12, snout: B.head === 'evolved' ? 1.05 : 1.18, crest: B.head === 'evolved', horns: 0, glowMat: mats.plateHot,
  });
  rig.head = headG.head;
  rig.jaw = headG.jaw;
  // brow plates
  add(headG.head, box(0.4, 0.14, 0.55), mats.plate, -0.38, 0.36, -0.55, 0.1, 0, -0.18);
  add(headG.head, box(0.4, 0.14, 0.55), mats.plate, 0.38, 0.36, -0.55, 0.1, 0, 0.18);
  add(headG.head, cone(0.13, 0.5, 5), mats.plate, 0, 0.42, 0.35, -0.3, 0, 0);

  // arms
  const armL = limb(torso, { x: -1.3 * bulk, y: 1.9, z: -0.05, upper: 1.45, lower: 1.3, r1: 0.42, r2: 0.32, r3: 0.23, mat: mats.skin, endMat: mats.dark, rot: [0.2, 0, -0.18] });
  const armR = limb(torso, { x: 1.3 * bulk, y: 1.9, z: -0.05, upper: 1.45, lower: 1.3, r1: 0.42, r2: 0.32, r3: 0.23, mat: mats.skin, endMat: mats.dark, rot: [0.2, 0, 0.18] });
  addClaws(armL.end, mats.claw, 3, 0.13, 0.42, -0.14, -0.2);
  addClaws(armR.end, mats.claw, 3, 0.13, 0.42, -0.14, -0.2);
  rig.armL = armL; rig.armR = armR;

  // legs
  const legL = limb(pelvis, { x: -0.68 * bulk, y: -0.15, z: 0, upper: 2.05, lower: 1.75, r1: 0.62, r2: 0.46, r3: 0.36, mat: mats.skin, endMat: mats.dark, rot: [0.02, 0, -0.03] });
  const legR = limb(pelvis, { x: 0.68 * bulk, y: -0.15, z: 0, upper: 2.05, lower: 1.75, r1: 0.62, r2: 0.46, r3: 0.36, mat: mats.skin, endMat: mats.dark, rot: [0.02, 0, 0.03] });
  for (const leg of [legL, legR]) {
    add(leg.end, box(0.7, 0.3, 1.15), mats.dark, 0, -0.16, -0.28);
    addClaws(leg.end, mats.claw, 3, 0.2, 0.42, -0.22, -0.72);
  }
  rig.legL = legL; rig.legR = legR;

  // tail
  const tail = makeTail(pelvis, {
    count: 9, length: 0.82, r: 0.66 * bulk, taper: 0.9, mat: mats.skin, plateMat: mats.plate,
    plateScale: B.plateScale || 1, x: 0, y: -0.12, z: 0.95, droop: -0.11,
  });
  rig.tail = tail.segs;
  rig.tailTip = tail.tip;

  // dorsal plates
  const plateScale = B.plateScale || 1;
  const platePositions = [
    [0, 2.6, 0.9, 0.55], [0, 2.1, 0.98, 0.85], [0, 1.55, 1.02, 1.0], [0, 0.95, 1.02, 0.9],
    [0, 0.35, 0.98, 0.72], [0, -0.3, 0.92, 0.55],
  ];
  for (const [x, y, z, s] of platePositions) {
    const plate = add(torso, cone(0.32 * s * plateScale, 1.5 * s * plateScale, 4), mats.plate, x, y, z, -0.28, 0, 0, 1, 1, 0.34);
    if (B.evolved) {
      add(plate, box(0.07, 1.1 * s, 0.5), mats.plateHot, 0, 0.2, 0.12, 0, 0, 0);
    }
  }
  // neck / skull plates
  add(neck, cone(0.22 * plateScale, 0.9 * plateScale, 4), mats.plate, 0, 0.7, 0.4, -0.4, 0, 0, 1, 1, 0.3);
  add(neck, cone(0.17 * plateScale, 0.65 * plateScale, 4), mats.plate, 0, 0.25, 0.5, -0.4, 0, 0, 1, 1, 0.3);

  // atomic glow in chest / mouth
  rig.chestGlow = add(torso, sphere(0.42, 10, 8), mats.plateHot, 0, 1.15, -0.94, 0, 0, 0, 1, 1.4, 0.3);
  rig.mouthGlow = add(headG.jaw, sphere(0.16, 8, 6), mats.plateHot, 0, 0.06, -0.72, 0, 0, 0, 1, 0.6, 1.2);
  rig.mouthGlow.visible = false;
  rig.glowParts = [rig.chestGlow, rig.mouthGlow];
  rig.plateMats = [mats.plate, mats.plateHot];
  return { group: root, rig, baseHeight: 9.8 };
}

function addFurClumps(parent, mats, count, area, rnd, scale = 1) {
  for (let i = 0; i < count; i++) {
    const a = rnd() * TAU;
    const r = Math.sqrt(rnd());
    const x = Math.cos(a) * r * area[0];
    const y = area[1] + (rnd() - 0.5) * area[3];
    const z = Math.sin(a) * r * area[2];
    const len = (0.12 + rnd() * 0.26) * scale;
    add(parent, cone(0.055 * scale, len, 4), rnd() > 0.5 ? mats.dark : mats.skin, x, y, z, rnd() * 0.5 - 0.25, rnd() * TAU, rnd() * 0.5 - 0.25);
  }
}

function buildKong(def) {
  const B = def.build || {};
  const mats = createMaterials(def);
  const root = new THREE.Group();
  const rig = { family: 'kong', def, mats, root, baseHeight: 9.1 };
  const rnd = seeded(def.id);
  const hipY = 3.55;
  const pelvis = grp(root, 0, hipY, 0);
  rig.pelvis = pelvis;
  ellipsoid(pelvis, mats.skin, 0, 0, 0, 1.0, 0.75, 0.9, 16, 12);
  const torso = grp(pelvis, 0, 0.55, 0);
  rig.torso = torso;
  ellipsoid(torso, mats.skin, 0, 1.0, 0, 1.42, 1.5, 1.05, 18, 14);
  ellipsoid(torso, mats.belly, 0, 0.9, -0.6, 0.85, 1.0, 0.45, 12, 8);
  ellipsoid(torso, mats.dark, -1.3, 1.8, 0, 0.55, 0.6, 0.6, 10, 8);
  ellipsoid(torso, mats.dark, 1.3, 1.8, 0, 0.55, 0.6, 0.6, 10, 8);
  addFurClumps(torso, mats, 90, [1.25, 1.1, 0.8, 1.7], rnd, 1.25);
  addFurClumps(pelvis, mats, 35, [0.9, 0, 0.7, 0.8], rnd, 1.1);
  if (B.scars) {
    for (let i = 0; i < 3; i++) add(torso, box(0.025, 0.35 + rnd() * 0.4, 0.55), mats.scar, -0.5 + i * 0.4, 1.0 + rnd() * 0.6, -1.02, 0.2, 0, -0.3 + rnd() * 0.6);
  }

  const neck = grp(torso, 0, 2.15, -0.3);
  rig.neck = neck;
  add(neck, cyl(0.55, 0.72, 0.85, 10), mats.skin, 0, 0.2, 0, -0.2, 0, 0);
  const headG = makeHead(neck, {
    mat: mats.skin, dark: mats.dark, eyeMat: mats.eye, teeth: mats.teeth, mouth: mats.mouth, claw: mats.claw,
    x: 0, y: 0.85, z: -0.32, scale: 1.35, snout: 0.95, crest: false, horns: 0,
  });
  rig.head = headG.head; rig.jaw = headG.jaw;
  // brow, ears, beard
  add(headG.head, box(0.95, 0.2, 0.55), mats.dark, 0, 0.35, -0.5, 0.1, 0, 0);
  for (const s of [-1, 1]) {
    ellipsoid(headG.head, mats.dark, s * 0.75, 0.15, 0.05, 0.18, 0.3, 0.14, 8, 6);
    add(headG.head, sphere(0.11, 8, 6), mats.eye, s * 0.36, 0.18, -0.62);
  }
  add(headG.head, box(0.5, 0.25, 0.35), mats.mouth, 0, -0.1, -0.95);
  addFurClumps(headG.head, mats, 26, [0.6, -0.25, 0.4, 0.5], rnd, 0.9);
  const beard = grp(headG.head, 0, -0.3, -0.3);
  add(beard, cone(0.3, 0.8 + (B.beard || 0) * 0.9, 6), mats.dark, 0, -0.3, -0.3, Math.PI, 0, 0, 1, 1, 0.7);
  addFurClumps(beard, mats, 20, [0.35, 0, 0.3, 0.6], rnd, 0.9);

  const armL = limb(torso, { x: -1.32, y: 1.75, z: 0, upper: 2.3, lower: 2.05, r1: 0.58, r2: 0.42, r3: 0.3, mat: mats.skin, endMat: mats.dark, rot: [0.1, 0, -0.12] });
  const armR = limb(torso, { x: 1.32, y: 1.75, z: 0, upper: 2.3, lower: 2.05, r1: 0.58, r2: 0.42, r3: 0.3, mat: mats.skin, endMat: mats.dark, rot: [0.1, 0, 0.12] });
  for (const arm of [armL, armR]) {
    ellipsoid(arm.root, mats.skin, 0, -0.75, 0, 0.6, 0.9, 0.55, 10, 8);
    addFurClumps(arm.root, mats, 22, [0.5, -0.8, 0.4, 1.2], rnd, 1.0);
    addFurClumps(arm.upper, mats, 14, [0.38, -0.7, 0.3, 1.0], rnd, 0.9);
    add(arm.end, sphere(0.34, 10, 8), mats.dark, 0, -0.05, 0);
    for (let f = 0; f < 4; f++) add(arm.end, cyl(0.09, 0.11, 0.5, 6), mats.skin, (f - 1.5) * 0.16, -0.3, -0.12, 0.2, 0, 0);
  }
  addClaws(armL.end, mats.claw, 4, 0.14, 0.35, -0.55, -0.2);
  addClaws(armR.end, mats.claw, 4, 0.14, 0.35, -0.55, -0.2);
  rig.armL = armL; rig.armR = armR;

  const legL = limb(pelvis, { x: -0.6, y: -0.1, z: 0, upper: 1.8, lower: 1.6, r1: 0.62, r2: 0.48, r3: 0.38, mat: mats.skin, endMat: mats.dark, rot: [0, 0, -0.06] });
  const legR = limb(pelvis, { x: 0.6, y: -0.1, z: 0, upper: 1.8, lower: 1.6, r1: 0.62, r2: 0.48, r3: 0.38, mat: mats.skin, endMat: mats.dark, rot: [0, 0, 0.06] });
  for (const leg of [legL, legR]) {
    add(leg.end, box(0.75, 0.3, 1.1), mats.dark, 0, -0.15, -0.3);
    addClaws(leg.end, mats.claw, 4, 0.2, 0.3, -0.18, -0.7);
  }
  rig.legL = legL; rig.legR = legR;
  const tail = makeTail(pelvis, { count: 4, length: 0.5, r: 0.3, taper: 0.8, mat: mats.skin, x: 0, y: 0.1, z: 0.8, droop: -0.25, spikes: false });
  rig.tail = tail.segs;

  // axe
  if (B.axe) {
    const axe = grp(armR.end, 0, -0.25, -0.05);
    add(axe, cyl(0.1, 0.13, 3.0, 8), mats.metalDark, 0, -0.6, 0);
    const bladeShape = new THREE.Shape();
    bladeShape.moveTo(0, 0);
    bladeShape.lineTo(0.95, 0.35);
    bladeShape.lineTo(1.15, 0.85);
    bladeShape.lineTo(0.95, 1.35);
    bladeShape.lineTo(0, 1.05);
    bladeShape.closePath();
    const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, { depth: 0.16, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.03, bevelSegments: 1 });
    const blade = new THREE.Mesh(bladeGeo, mats.metal);
    blade.position.set(0.12, 0.35, -0.08);
    blade.rotation.y = Math.PI / 2;
    blade.castShadow = true;
    axe.add(blade);
    add(axe, box(0.18, 1.1, 0.3), mats.plateHot, 0.55, 1.0, 0);
    if (B.armor) {
      add(armR.upper, cyl(0.5, 0.55, 0.65, 8), mats.metal, 0, -0.45, 0);
      add(armL.upper, cyl(0.5, 0.55, 0.65, 8), mats.metal, 0, -0.45, 0);
      add(torso, box(1.4, 0.25, 0.4), mats.metalDark, 0, 1.7, -1.0);
    }
    rig.axe = axe;
  }
  rig.headTop = 9.0;
  return { group: root, rig, baseHeight: 9.1 };
}

function buildMecha(def) {
  const mats = createMaterials(def);
  const root = new THREE.Group();
  const rig = { family: 'mecha', def, mats, root, baseHeight: 9.6 };
  const hipY = 4.0;
  const pelvis = grp(root, 0, hipY, 0);
  rig.pelvis = pelvis;
  add(pelvis, box(1.7, 0.8, 1.2), mats.metalDark, 0, 0, 0);
  add(pelvis, box(1.9, 0.16, 1.35), mats.plateHot, 0, 0.25, -0.1);
  const torso = grp(pelvis, 0, 0.55, 0);
  rig.torso = torso;
  add(torso, box(2.4, 2.5, 1.4), mats.metal, 0, 1.1, 0);
  add(torso, box(2.1, 0.18, 1.5), mats.metalDark, 0, 2.2, 0);
  add(torso, box(0.18, 1.4, 0.1), mats.plateHot, 0, 1.2, -0.73);
  add(torso, sphere(0.34, 10, 8), mats.plateHot, 0, 1.55, -0.78);
  add(torso, box(1.3, 0.55, 0.6), mats.metalDark, 0, 0.55, -0.8);
  add(torso, box(0.9, 0.12, 0.2), mats.plateHot, 0, 0.55, -1.12);
  // shoulder pods
  for (const s of [-1, 1]) {
    add(torso, box(0.7, 0.8, 0.9), mats.metalDark, s * 1.5, 2.0, 0);
    add(torso, cyl(0.16, 0.2, 0.7, 8), mats.metal, s * 1.55, 2.45, 0.1, 0, 0, s * 0.2);
    add(torso, cone(0.12, 0.4, 6), mats.plateHot, s * 1.55, 2.9, 0.1);
  }
  const neck = grp(torso, 0, 2.4, -0.15);
  rig.neck = neck;
  add(neck, cyl(0.32, 0.4, 0.6, 8), mats.metalDark, 0, 0.25, 0);
  const headG = makeHead(neck, {
    mat: mats.metal, dark: mats.metalDark, eyeMat: mats.eye, teeth: mats.teeth, mouth: mats.mouth, claw: mats.metal,
    x: 0, y: 0.85, z: -0.25, scale: 1.0, snout: 1.1, mech: true, glowMat: mats.plateHot,
  });
  rig.head = headG.head; rig.jaw = headG.jaw;
  add(headG.head, box(0.95, 0.12, 0.55), mats.plateHot, 0, 0.22, -0.6);
  add(headG.head, box(0.2, 0.5, 0.2), mats.metal, 0, 0.5, 0.3);
  add(headG.head, cone(0.1, 0.45, 5), mats.plateHot, 0, 0.8, 0.3);

  const armL = limb(torso, { x: -1.35, y: 1.8, z: 0, upper: 1.6, lower: 1.45, r1: 0.4, r2: 0.32, r3: 0.26, mat: mats.metal, endMat: mats.metalDark, rot: [0.1, 0, -0.14] });
  const armR = limb(torso, { x: 1.35, y: 1.8, z: 0, upper: 1.6, lower: 1.45, r1: 0.4, r2: 0.32, r3: 0.26, mat: mats.metal, endMat: mats.metalDark, rot: [0.1, 0, 0.14] });
  for (const [arm, s] of [[armL, -1], [armR, 1]]) {
    add(arm.upper, box(0.5, 0.5, 0.6), mats.metalDark, 0, -0.55, 0);
    add(arm.upper, box(0.15, 0.5, 0.1), mats.plateHot, s * 0.28, -0.55, -0.2);
    add(arm.end, box(0.5, 0.4, 0.55), mats.metalDark, 0, -0.1, -0.05);
    addClaws(arm.end, mats.metal, 3, 0.14, 0.35, -0.3, -0.3);
  }
  rig.armL = armL; rig.armR = armR;
  const legL = limb(pelvis, { x: -0.75, y: -0.2, z: 0, upper: 2.0, lower: 1.8, r1: 0.45, r2: 0.36, r3: 0.3, mat: mats.metal, endMat: mats.metalDark, rot: [0.03, 0, -0.03] });
  const legR = limb(pelvis, { x: 0.75, y: -0.2, z: 0, upper: 2.0, lower: 1.8, r1: 0.45, r2: 0.36, r3: 0.3, mat: mats.metal, endMat: mats.metalDark, rot: [0.03, 0, 0.03] });
  for (const [leg, s] of [[legL, -1], [legR, 1]]) {
    add(leg.upper, box(0.65, 0.7, 0.65), mats.metalDark, 0, -0.65, 0);
    add(leg.upper, box(0.16, 0.55, 0.1), mats.plateHot, s * 0.34, -0.65, -0.15);
    add(leg.end, box(0.8, 0.35, 1.25), mats.metalDark, 0, -0.2, -0.3);
    add(leg.end, box(0.5, 0.1, 0.3), mats.plateHot, 0, -0.4, -0.75);
  }
  rig.legL = legL; rig.legR = legR;
  const tail = makeTail(pelvis, { count: 8, length: 0.78, r: 0.42, taper: 0.88, mat: mats.metal, plateMat: mats.plateHot, plateScale: 0.6, x: 0, y: 0, z: 0.9, droop: -0.08 });
  rig.tail = tail.segs;
  // back fins
  for (let i = 0; i < 5; i++) add(torso, box(0.12, 0.9 - i * 0.1, 0.6), mats.metalDark, 0, 2.2 - i * 0.42, 0.75 + i * 0.03, -0.3, 0, 0);
  rig.chestGlow = torso.children.find(c => c.material === mats.plateHot);
  rig.glowParts = [rig.chestGlow];
  return { group: root, rig, baseHeight: 9.6 };
}

function buildGhidorah(def) {
  const mats = createMaterials(def);
  const root = new THREE.Group();
  const rig = { family: 'ghidorah', def, mats, root, baseHeight: 12.4 };
  const hipY = 3.7;
  const pelvis = grp(root, 0, hipY, 0);
  rig.pelvis = pelvis;
  ellipsoid(pelvis, mats.skin, 0, 0, 0, 1.15, 0.8, 1.0, 16, 12);
  const torso = grp(pelvis, 0, 0.55, 0);
  rig.torso = torso;
  ellipsoid(torso, mats.skin, 0, 1.0, 0, 1.35, 1.4, 1.0, 18, 14);
  ellipsoid(torso, mats.belly, 0, 0.9, -0.55, 0.8, 0.95, 0.45, 12, 8);
  addFurClumps(torso, mats, 20, [1.1, 0.9, 0.7, 1.2], seeded(def.id), 0.8);
  // wings
  const wingL = makeWing(torso, { side: -1, span: 7.4, mat: mats.membrane, boneMat: mats.plate, glowMat: mats.membraneGlow, x: -0.9, y: 1.9, z: 0.25, baseRot: [-1.15, 0.25, -0.15] });
  const wingR = makeWing(torso, { side: 1, span: 7.4, mat: mats.membrane, boneMat: mats.plate, glowMat: mats.membraneGlow, x: 0.9, y: 1.9, z: 0.25, baseRot: [-1.15, -0.25, 0.15] });
  rig.wingL = wingL; rig.wingR = wingR;
  // legs
  const legL = limb(pelvis, { x: -0.65, y: -0.15, z: 0, upper: 1.9, lower: 1.6, r1: 0.5, r2: 0.38, r3: 0.28, mat: mats.skin, endMat: mats.dark, rot: [0.05, 0, -0.06] });
  const legR = limb(pelvis, { x: 0.65, y: -0.15, z: 0, upper: 1.9, lower: 1.6, r1: 0.5, r2: 0.38, r3: 0.28, mat: mats.skin, endMat: mats.dark, rot: [0.05, 0, 0.06] });
  for (const leg of [legL, legR]) {
    add(leg.end, box(0.7, 0.3, 1.0), mats.dark, 0, -0.15, -0.3);
    addClaws(leg.end, mats.claw, 3, 0.18, 0.35, -0.18, -0.68);
  }
  rig.legL = legL; rig.legR = legR;

  // three necks
  const neckConfigs = [
    { x: -0.62, y: 1.8, z: -0.35, out: -0.75, len: 0.92, curve: 0.22, scale: 0.94 },
    { x: 0, y: 2.1, z: -0.55, out: 0, len: 1.0, curve: 0.05, scale: 1.05 },
    { x: 0.62, y: 1.8, z: -0.35, out: 0.75, len: 0.92, curve: -0.22, scale: 0.94 },
  ];
  rig.necks = [];
  for (const nc of neckConfigs) {
    let node = grp(torso, nc.x, nc.y, nc.z);
    const chain = [];
    for (let i = 0; i < 4; i++) {
      const seg = grp(node);
      seg.rotation.x = -0.28 + i * 0.06;
      seg.rotation.z = nc.out * 0.22 * (i === 0 ? 1 : 0.5);
      add(seg, cyl(0.26 - i * 0.025, 0.34 - i * 0.02, nc.len, 8), mats.skin, 0, nc.len / 2, 0);
      // frill spikes
      for (const s of [-1, 1]) add(seg, cone(0.08, 0.3, 4), mats.plate, s * 0.24, nc.len * 0.5, 0.06, 0.2, 0, s * 1.0);
      chain.push(seg);
      node = grp(seg, 0, nc.len, 0);
    }
    const headG = makeHead(node, {
      mat: mats.skin, dark: mats.dark, eyeMat: mats.eye, teeth: mats.teeth, mouth: mats.mouth, claw: mats.claw,
      x: 0, y: 0.25, z: -0.35, scale: 0.95 * nc.scale, snout: 1.05, horns: 2, crest: true,
    });
    rig.necks.push({ chain, head: headG.head, jaw: headG.jaw, scale: nc.scale });
  }
  rig.head = rig.necks[1].head; rig.jaw = rig.necks[1].jaw;

  // two tails
  const tailA = makeTail(pelvis, { count: 7, length: 0.7, r: 0.45, taper: 0.88, mat: mats.skin, plateMat: mats.plate, plateScale: 0.7, x: -0.35, y: 0, z: 0.85, droop: -0.2, side: -0.08 });
  const tailB = makeTail(pelvis, { count: 7, length: 0.7, r: 0.45, taper: 0.88, mat: mats.skin, plateMat: mats.plate, plateScale: 0.7, x: 0.35, y: 0, z: 0.85, droop: -0.2, side: 0.08 });
  rig.tail = [...tailA.segs, ...tailB.segs];
  rig.tailA = tailA.segs; rig.tailB = tailB.segs;
  rig.chestGlow = add(torso, sphere(0.3, 8, 6), mats.plateHot, 0, 1.3, -0.85);
  rig.glowParts = [rig.chestGlow];
  rig.heads = rig.necks.map(n => n.head);
  return { group: root, rig, baseHeight: 12.4 };
}

function buildRodan(def) {
  const mats = createMaterials(def);
  const root = new THREE.Group();
  const rig = { family: 'rodan', def, mats, root, baseHeight: 8.2 };
  const hipY = 3.0;
  const pelvis = grp(root, 0, hipY, 0);
  rig.pelvis = pelvis;
  ellipsoid(pelvis, mats.skin, 0, 0, 0, 0.8, 0.7, 1.0, 14, 10);
  const torso = grp(pelvis, 0, 0.45, 0);
  rig.torso = torso;
  ellipsoid(torso, mats.skin, 0, 0.65, -0.2, 0.85, 1.0, 1.15, 16, 12);
  ellipsoid(torso, mats.belly, 0, 0.6, -0.7, 0.55, 0.6, 0.4, 10, 8);
  // wings
  const wingL = makeWing(torso, { side: -1, span: 7.8, mat: mats.membrane, boneMat: mats.dark, glowMat: mats.membraneGlow, x: -0.65, y: 1.25, z: 0, baseRot: [-1.0, 0.25, -0.2] });
  const wingR = makeWing(torso, { side: 1, span: 7.8, mat: mats.membrane, boneMat: mats.dark, glowMat: mats.membraneGlow, x: 0.65, y: 1.25, z: 0, baseRot: [-1.0, -0.25, 0.2] });
  rig.wingL = wingL; rig.wingR = wingR;
  const neck = grp(torso, 0, 1.55, -0.55);
  rig.neck = neck;
  add(neck, cyl(0.3, 0.42, 0.9, 8), mats.skin, 0, 0.25, -0.2, -0.6, 0, 0);
  const headG = makeHead(neck, {
    mat: mats.skin, dark: mats.dark, eyeMat: mats.eye, teeth: mats.teeth, mouth: mats.mouth, claw: mats.claw,
    x: 0, y: 0.7, z: -0.65, scale: 0.95, snout: 0.8, crest: true, beak: true,
  });
  rig.head = headG.head; rig.jaw = headG.jaw;
  add(headG.head, cone(0.16, 0.9, 5), mats.plate, 0, 0.55, 0.2, -0.4, 0, 0, 1, 1, 0.35);
  // legs
  const legL = limb(pelvis, { x: -0.45, y: -0.1, z: 0, upper: 1.55, lower: 1.25, r1: 0.3, r2: 0.22, r3: 0.15, mat: mats.skin, endMat: mats.dark, rot: [0.1, 0, -0.1] });
  const legR = limb(pelvis, { x: 0.45, y: -0.1, z: 0, upper: 1.55, lower: 1.25, r1: 0.3, r2: 0.22, r3: 0.15, mat: mats.skin, endMat: mats.dark, rot: [0.1, 0, 0.1] });
  for (const leg of [legL, legR]) {
    add(leg.end, box(0.45, 0.18, 0.85), mats.dark, 0, -0.1, -0.3);
    addClaws(leg.end, mats.claw, 3, 0.12, 0.32, -0.12, -0.62);
  }
  rig.legL = legL; rig.legR = legR;
  const tail = makeTail(pelvis, { count: 5, length: 0.55, r: 0.22, taper: 0.82, mat: mats.skin, x: 0, y: 0, z: 0.75, droop: -0.15, spikes: false });
  rig.tail = tail.segs;
  rig.chestGlow = add(torso, sphere(0.3, 8, 6), mats.plateHot, 0, 0.55, -0.9, 0, 0, 0, 1, 1.4, 0.4);
  rig.glowParts = [rig.chestGlow];
  return { group: root, rig, baseHeight: 8.2 };
}

function buildMothra(def) {
  const mats = createMaterials(def);
  const root = new THREE.Group();
  const rig = { family: 'mothra', def, mats, root, baseHeight: 7.6 };
  const hipY = 3.1;
  const pelvis = grp(root, 0, hipY, 0);
  rig.pelvis = pelvis;
  ellipsoid(pelvis, mats.skin, 0, 0, 0, 0.6, 0.8, 0.8, 12, 10);
  const torso = grp(pelvis, 0, 0.5, 0);
  rig.torso = torso;
  ellipsoid(torso, mats.skin, 0, 0.55, 0, 0.7, 0.85, 0.75, 14, 10);
  ellipsoid(torso, mats.belly, 0, 0.45, -0.35, 0.5, 0.6, 0.4, 10, 8);
  addFurClumps(torso, mats, 45, [0.6, 0.5, 0.55, 0.9], seeded(def.id), 0.8);
  const wingL = makeWing(torso, { side: -1, span: 7.6, mat: mats.membrane, boneMat: mats.plate, glowMat: mats.membraneGlow, x: -0.5, y: 1.0, z: 0.1, baseRot: [-0.65, 0.35, -0.15], scallop: false, fingers: 3 });
  const wingR = makeWing(torso, { side: 1, span: 7.6, mat: mats.membrane, boneMat: mats.plate, glowMat: mats.membraneGlow, x: 0.5, y: 1.0, z: 0.1, baseRot: [-0.65, -0.35, 0.15], scallop: false, fingers: 3 });
  rig.wingL = wingL; rig.wingR = wingR;
  const neck = grp(torso, 0, 1.35, -0.2);
  rig.neck = neck;
  add(neck, cyl(0.3, 0.35, 0.45, 8), mats.skin, 0, 0.2, 0);
  const headG = makeHead(neck, {
    mat: mats.skin, dark: mats.dark, eyeMat: mats.eye, teeth: mats.teeth, mouth: mats.mouth, claw: mats.claw,
    x: 0, y: 0.55, z: -0.2, scale: 0.75, snout: 0.7, crest: true,
  });
  rig.head = headG.head; rig.jaw = headG.jaw;
  for (const s of [-1, 1]) {
    const ant = grp(headG.head, s * 0.3, 0.45, 0.1);
    add(ant, cyl(0.035, 0.05, 1.1, 5), mats.dark, 0, 0.55, 0, 0.25, 0, s * 0.45);
    add(ant, sphere(0.07, 6, 5), mats.plateHot, 0, 1.1, 0.05);
  }
  // legs
  for (let i = 0; i < 3; i++) {
    for (const s of [-1, 1]) {
      const l = limb(pelvis, { x: s * 0.35, y: -0.1 - i * 0.1, z: -0.25 + i * 0.3, upper: 0.9, lower: 0.8, r1: 0.1, r2: 0.08, r3: 0.05, mat: mats.dark, endMat: mats.dark, rot: [0.2, s * 0.3, s * (0.7 + i * 0.1)] });
      rig[`leg${s < 0 ? 'L' : 'R'}${i}`] = l;
    }
  }
  rig.legL = rig.legL0; rig.legR = rig.legR0;
  const tail = makeTail(pelvis, { count: 4, length: 0.45, r: 0.2, taper: 0.8, mat: mats.skin, x: 0, y: 0, z: 0.6, droop: -0.2, spikes: false });
  rig.tail = tail.segs;
  rig.chestGlow = add(torso, sphere(0.22, 8, 6), mats.plateHot, 0, 0.5, -0.45);
  rig.glowParts = [rig.chestGlow];
  return { group: root, rig, baseHeight: 7.6 };
}

function buildShimo(def) {
  const mats = createMaterials(def);
  const root = new THREE.Group();
  const rig = { family: 'shimo', def, mats, root, baseHeight: 7.4 };
  const bodyY = 3.35;
  const pelvis = grp(root, 0, bodyY, 0.8);
  rig.pelvis = pelvis;
  ellipsoid(pelvis, mats.skin, 0, 0, 0, 1.6, 1.35, 2.0, 16, 12);
  ellipsoid(pelvis, mats.belly, 0, -0.5, -0.3, 1.2, 0.6, 1.4, 12, 8);
  const torso = grp(pelvis, 0, 0.15, -1.5);
  rig.torso = torso;
  ellipsoid(torso, mats.skin, 0, 0.1, -1.0, 1.55, 1.45, 2.1, 18, 12);
  ellipsoid(torso, mats.belly, 0, -0.45, -1.0, 1.15, 0.7, 1.5, 12, 8);
  const neck = grp(torso, 0, 0.9, -2.5);
  rig.neck = neck;
  add(neck, cyl(0.7, 0.95, 1.5, 10), mats.skin, 0, 0.55, -0.35, -0.75, 0, 0);
  const headG = makeHead(neck, {
    mat: mats.skin, dark: mats.dark, eyeMat: mats.eye, teeth: mats.teeth, mouth: mats.mouth, claw: mats.claw,
    x: 0, y: 1.25, z: -1.05, scale: 1.05, snout: 1.25, crest: true, horns: 2,
  });
  rig.head = headG.head; rig.jaw = headG.jaw;
  add(headG.head, cone(0.2, 1.2, 5), mats.plate, 0, 0.5, 0.4, -0.5, 0, 0, 1, 1, 0.35);
  add(headG.head, cone(0.14, 0.8, 5), mats.plate, -0.4, 0.45, 0.2, -0.3, 0, -0.5);
  add(headG.head, cone(0.14, 0.8, 5), mats.plate, 0.4, 0.45, 0.2, -0.3, 0, 0.5);
  // four legs
  const positions = [[-1.15, -2.1, 'FL'], [1.15, -2.1, 'FR'], [-1.15, 1.7, 'BL'], [1.15, 1.7, 'BR']];
  for (const [x, z, tag] of positions) {
    const front = tag[0] === 'F';
    const l = limb(pelvis, {
      x, y: -0.4, z, upper: front ? 1.55 : 1.65, lower: front ? 1.35 : 1.4,
      r1: 0.42, r2: 0.32, r3: 0.24, mat: mats.skin, endMat: mats.dark, rot: [0, 0, 0],
    });
    add(l.end, box(0.7, 0.3, 1.0), mats.dark, 0, -0.12, -0.25);
    addClaws(l.end, mats.claw, 3, 0.18, 0.35, -0.2, -0.7);
    rig[`leg${tag}`] = l;
  }
  rig.legL = rig.legFL; rig.legR = rig.legFR;
  // tail
  const tail = makeTail(pelvis, { count: 9, length: 0.72, r: 0.55, taper: 0.9, mat: mats.skin, plateMat: mats.plate, plateScale: 1.0, x: 0, y: 0, z: 1.9, droop: -0.05 });
  rig.tail = tail.segs;
  // ice crystals
  const rnd = seeded(def.id);
  for (let i = 0; i < 16; i++) {
    const z = -3.2 + rnd() * 4.2;
    const x = (rnd() - 0.5) * 2.2;
    const h = 0.5 + rnd() * 1.6;
    add(torso, cone(0.16 + rnd() * 0.2, h, 5), mats.plate, x, 1.25, z, (rnd() - 0.5) * 0.4, rnd() * TAU, (rnd() - 0.5) * 0.4);
  }
  for (const s of [-1, 1]) {
    add(pelvis, cone(0.3, 1.4, 5), mats.plate, s * 1.2, 1.0, 0.3, -0.2, 0, s * 0.35);
  }
  rig.chestGlow = add(torso, sphere(0.4, 8, 6), mats.plateHot, 0, 0.4, -2.7, 0, 0, 0, 1, 1.3, 0.4);
  rig.glowParts = [rig.chestGlow];
  return { group: root, rig, baseHeight: 7.4 };
}

function buildScylla(def) {
  const mats = createMaterials(def);
  const root = new THREE.Group();
  const rig = { family: 'scylla', def, mats, root, baseHeight: 7.8 };
  const bodyY = 4.2;
  const pelvis = grp(root, 0, bodyY, 0);
  rig.pelvis = pelvis;
  ellipsoid(pelvis, mats.skin, 0, 0, 0, 1.4, 1.0, 1.6, 16, 12);
  ellipsoid(pelvis, mats.belly, 0, -0.35, -0.5, 1.0, 0.55, 1.0, 12, 8);
  const torso = grp(pelvis, 0, 0.4, -0.6);
  rig.torso = torso;
  ellipsoid(torso, mats.skin, 0, 0.2, -0.6, 1.15, 1.0, 1.4, 14, 10);
  addFurClumps(torso, mats, 15, [0.9, 0.2, 1.0, 0.9], seeded(def.id), 0.7);
  // head
  const neck = grp(torso, 0, 0.8, -1.3);
  rig.neck = neck;
  add(neck, cyl(0.35, 0.5, 0.8, 8), mats.skin, 0, 0.2, -0.35, -0.7, 0, 0);
  const headG = makeHead(neck, {
    mat: mats.skin, dark: mats.dark, eyeMat: mats.eye, teeth: mats.teeth, mouth: mats.mouth, claw: mats.claw,
    x: 0, y: 0.65, z: -0.85, scale: 0.9, snout: 1.0, horns: 2,
  });
  rig.head = headG.head; rig.jaw = headG.jaw;
  // glowing eyes cluster
  for (let i = 0; i < 4; i++) add(headG.head, sphere(0.07, 6, 5), mats.eye, -0.2 + (i % 2) * 0.4, 0.1 + Math.floor(i / 2) * 0.18, -0.72);
  // 8 legs
  const legRefs = [];
  for (let i = 0; i < 4; i++) {
    for (const s of [-1, 1]) {
      const base = grp(pelvis, s * 1.0, -0.1, -0.6 + i * 0.45);
      base.rotation.y = s * (0.25 + i * 0.18);
      const a = limb(base, { x: 0, y: 0, z: 0, upper: 2.3, lower: 2.1, r1: 0.22, r2: 0.15, r3: 0.08, mat: mats.skin, endMat: mats.dark, rot: [0.2, 0, s * (0.75 + i * 0.06)] });
      a.root.rotation.z = s * (0.7 + i * 0.07);
      a.upper.rotation.x = -0.25;
      add(a.end, cone(0.1, 0.7, 5), mats.claw, 0, -0.25, 0, Math.PI, 0, 0);
      legRefs.push({ base, limb: a, side: s, index: i });
    }
  }
  rig.legs = legRefs;
  // tentacles
  rig.tentacles = [];
  for (let i = 0; i < 6; i++) {
    const t = makeTail(torso, {
      count: 5, length: 0.5, r: 0.16, taper: 0.8, mat: mats.skin, x: (i - 2.5) * 0.24, y: 0.0, z: -1.35,
      droop: 0.35 + i * 0.02, spikes: false, side: (i - 2.5) * 0.15,
    });
    rig.tentacles.push(t.segs);
  }
  // glowing sacs
  for (let i = 0; i < 5; i++) add(pelvis, sphere(0.16, 6, 5), mats.plateHot, (i - 2) * 0.4, 0.55, 0.4, 0, 0, 0, 1, 1.3, 1);
  rig.chestGlow = add(torso, sphere(0.3, 8, 6), mats.plateHot, 0, 0.3, -1.2);
  rig.glowParts = [rig.chestGlow];
  return { group: root, rig, baseHeight: 7.8 };
}

function buildTiamat(def) {
  const mats = createMaterials(def);
  const root = new THREE.Group();
  const rig = { family: 'tiamat', def, mats, root, baseHeight: 9.4 };
  const base = grp(root, 0, 0.45, 1.8);
  rig.pelvis = base;
  // serpent chain
  const segs = [];
  let node = base;
  for (let i = 0; i < 11; i++) {
    const seg = grp(node);
    seg.rotation.x = i === 0 ? -0.15 : (i < 4 ? 0.22 : -0.16);
    seg.rotation.z = Math.sin(i * 0.7) * 0.07;
    const r = 0.62 * Math.pow(0.9, i);
    add(seg, cyl(r * 0.9, r, 0.86, 10), mats.skin, 0, 0.43, 0);
    // fins
    for (const s of [-1, 1]) {
      add(seg, cone(r * 0.55, r * 1.5, 4), mats.plate, s * r * 0.7, 0.45, 0, 0, 0, s * (0.9 + 0.1 * Math.sin(i)));
    }
    add(seg, cone(r * 0.35, r * 1.4, 4), mats.plate, 0, 0.42, -r * 0.5, -0.2, 0, 0, 1, 1, 0.4);
    segs.push(seg);
    node = grp(seg, 0, 0.86, 0);
  }
  rig.segments = segs;
  rig.tail = segs;
  // head
  const headG = makeHead(node, {
    mat: mats.skin, dark: mats.dark, eyeMat: mats.eye, teeth: mats.teeth, mouth: mats.mouth, claw: mats.claw,
    x: 0, y: 0.2, z: -0.35, scale: 1.15, snout: 1.2, horns: 2, crest: true,
  });
  rig.head = headG.head; rig.jaw = headG.jaw;
  // crest fins
  add(headG.head, cone(0.3, 1.2, 5), mats.plate, 0, 0.6, 0.35, -0.5, 0, 0, 1, 1, 0.3);
  for (const s of [-1, 1]) add(headG.head, cone(0.15, 0.8, 5), mats.plate, s * 0.45, 0.45, 0.25, -0.3, 0, s * 0.7);
  // small fore fins
  for (const s of [-1, 1]) {
    const fin = grp(segs[3], s * 0.55, 0.3, 0);
    add(fin, cone(0.35, 1.6, 4), mats.membrane, 0, -0.5, 0, 0, 0, s * 1.1, 1, 1, 0.2);
  }
  rig.chestGlow = add(segs[2], sphere(0.28, 8, 6), mats.plateHot, 0, 0.4, -0.5);
  rig.glowParts = [rig.chestGlow];
  return { group: root, rig, baseHeight: 9.4 };
}

const BUILDERS = {
  godzilla: buildGodzilla,
  kong: buildKong,
  mecha: buildMecha,
  ghidorah: buildGhidorah,
  rodan: buildRodan,
  mothra: buildMothra,
  shimo: buildShimo,
  scylla: buildScylla,
  tiamat: buildTiamat,
};

export function createMonsterModel(def) {
  const builder = BUILDERS[def.family] || buildGodzilla;
  const built = builder(def);
  const group = new THREE.Group();
  const visual = built.group;
  const scale = def.height / built.baseHeight;
  visual.scale.setScalar(scale);
  group.add(visual);
  const rig = built.rig;
  rig.scale = scale;
  rig.visual = visual;
  rig.outer = group;
  rig.height = def.height;
  captureRigBases(rig);
  // team ring
  const ringGeo = new THREE.RingGeometry(def.height * 0.55, def.height * 0.62, 40);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x4fc3ff, transparent: true, opacity: 0.32, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.15;
  group.add(ring);
  rig.teamRing = ring;
  rig.teamRingMat = ringMat;
  group.userData.monsterId = def.id;
  group.userData.rig = rig;
  return { group, rig, scale };
}

export function getMonsterHeadWorld(rig, out = new THREE.Vector3()) {
  if (rig.head) rig.head.getWorldPosition(out);
  else rig.root.getWorldPosition(out);
  return out;
}
