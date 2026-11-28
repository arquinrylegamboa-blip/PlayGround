import * as THREE from 'three';

/* Procedural performance system. Each titan family has a distinct gait, idle
   language and attack vocabulary layered on top of a shared rig. */

const TAU = Math.PI * 2;

function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
function easeIn(t) { return t * t * t; }
function smooth(t) { return t * t * (3 - 2 * t); }
function clamp01(t) { return Math.max(0, Math.min(1, t)); }

function base(rig, obj) {
  return rig.bases.get(obj) || { x: 0, y: 0, z: 0 };
}
function rot(rig, obj, x = 0, y = 0, z = 0) {
  if (!obj) return;
  const b = base(rig, obj);
  obj.rotation.set(b.x + x, b.y + y, b.z + z);
}

function resetRig(rig) {
  const refs = [
    rig.pelvis, rig.torso, rig.neck, rig.head, rig.jaw,
    rig.armL?.root, rig.armL?.upper, rig.armL?.end,
    rig.armR?.root, rig.armR?.upper, rig.armR?.end,
    rig.legL?.root, rig.legL?.upper, rig.legL?.end,
    rig.legR?.root, rig.legR?.upper, rig.legR?.end,
  ];
  for (const r of refs) if (r) rot(rig, r, 0, 0, 0);
  for (const s of rig.tail || []) rot(rig, s, 0, 0, 0);
  for (const s of rig.segments || []) rot(rig, s, 0, 0, 0);
  for (const s of rig.tentacles || []) for (const t of s) rot(rig, t, 0, 0, 0);
  for (const n of rig.necks || []) {
    for (const s of n.chain) rot(rig, s, 0, 0, 0);
    rot(rig, n.head, 0, 0, 0);
    rot(rig, n.jaw, 0, 0, 0);
  }
  for (const w of [rig.wingL, rig.wingR]) if (w) rot(rig, w, 0, 0, 0);
  for (const l of rig.legs || []) {
    rot(rig, l.base, 0, 0, 0);
    rot(rig, l.limb.root, 0, 0, 0);
    rot(rig, l.limb.upper, 0, 0, 0);
  }
  for (const key of Object.keys(rig)) {
    if (/^leg[FLR]/.test(key) && rig[key] && rig[key].root) {
      rot(rig, rig[key].root, 0, 0, 0);
      rot(rig, rig[key].upper, 0, 0, 0);
      rot(rig, rig[key].end, 0, 0, 0);
    }
  }
  if (rig.axe) rot(rig, rig.axe, 0, 0, 0);
  rig.visual.position.set(0, 0, 0);
}

function swayTail(rig, time, amp = 0.05, speed = 1.3, phase = 0) {
  (rig.tail || []).forEach((s, i) => {
    rot(rig, s, 0, Math.sin(time * speed - i * 0.45 + phase) * amp, 0);
  });
}

function flapWings(rig, time, amp = 0.1, speed = 1.2, spread = 0) {
  const f = Math.sin(time * speed) * amp + spread;
  if (rig.wingL) rot(rig, rig.wingL, 0, 0, -f);
  if (rig.wingR) rot(rig, rig.wingR, 0, 0, f);
}

function bipedWalk(rig, state, time, opt = {}) {
  const p = state.walkPhase || 0;
  const amp = opt.amp ?? 0.5;
  const speed = state.speed || 0;
  const running = state.running;
  const bob = Math.abs(Math.sin(p)) * (running ? 0.14 : 0.09);
  rig.visual.position.y = bob;
  const legSwing = Math.sin(p) * amp * (running ? 1.25 : 1);
  rot(rig, rig.legL?.root, legSwing, 0, 0);
  rot(rig, rig.legR?.root, -legSwing, 0, 0);
  rot(rig, rig.legL?.upper, Math.max(0, -Math.sin(p)) * 0.7, 0, 0);
  rot(rig, rig.legR?.upper, Math.max(0, Math.sin(p)) * 0.7, 0, 0);
  rot(rig, rig.legL?.end, -Math.max(0, -Math.sin(p)) * 0.3, 0, 0);
  rot(rig, rig.legR?.end, -Math.max(0, Math.sin(p)) * 0.3, 0, 0);
  const armSwing = Math.sin(p) * (opt.armAmp ?? 0.35);
  rot(rig, rig.armL?.root, -armSwing, 0, opt.armOut ?? 0);
  rot(rig, rig.armR?.root, armSwing, 0, -(opt.armOut ?? 0));
  rot(rig, rig.torso, 0.02 * Math.sin(p * 2), 0, Math.sin(p) * 0.035);
  rot(rig, rig.pelvis, 0, 0, Math.sin(p) * 0.03);
  rot(rig, rig.neck, -0.03 * Math.sin(p * 2), 0, -Math.sin(p) * 0.02);
  rot(rig, rig.head, 0.02 * Math.sin(p * 2 + 1), Math.sin(time * 0.7) * 0.05, 0);
  swayTail(rig, time, 0.07 + speed * 0.0015, 1.5, p * 0.3);
  return bob;
}

function bipedIdle(rig, state, time) {
  const breathe = Math.sin(time * 1.15) * 0.02;
  rig.visual.position.y = breathe;
  rot(rig, rig.torso, breathe * 0.8, Math.sin(time * 0.35) * 0.025, Math.sin(time * 0.5) * 0.02);
  rot(rig, rig.neck, -breathe, Math.sin(time * 0.45) * 0.06, 0);
  rot(rig, rig.head, Math.sin(time * 0.6) * 0.04, Math.sin(time * 0.38) * 0.18, 0);
  rot(rig, rig.armL?.root, Math.sin(time * 0.7) * 0.04, 0, Math.sin(time * 0.5) * 0.03);
  rot(rig, rig.armR?.root, Math.sin(time * 0.66 + 1) * 0.04, 0, -Math.sin(time * 0.5) * 0.03);
  swayTail(rig, time, 0.06, 0.8);
}

function applyPunch(rig, p, family, alternate = false) {
  const w = smooth(clamp01(p / 0.32));
  const strike = smooth(clamp01((p - 0.32) / 0.16));
  const rec = smooth(clamp01((p - 0.55) / 0.45));
  const arm = alternate ? rig.armR : rig.armL;
  const other = alternate ? rig.armL : rig.armR;
  if (arm) {
    rot(rig, arm.root, 0.7 * w - 1.9 * strike + 1.2 * rec, 0, 0.2 * w);
    rot(rig, arm.upper, -0.4 * w + 0.8 * strike - 0.4 * rec, 0, 0);
  }
  if (other) rot(rig, other.root, 0.25 * strike, 0, 0);
  rot(rig, rig.torso, -0.1 * w + 0.3 * strike, alternate ? -0.35 * strike : 0.35 * strike, 0);
  rot(rig, rig.neck, 0.08 * strike, 0, 0);
  if (family === 'kong') {
    rot(rig, rig.torso, -0.15 * w + 0.25 * strike, 0, 0);
    rot(rig, rig.pelvis, 0, alternate ? -0.18 * strike : 0.18 * strike, 0);
  }
}

function applyHeavy(rig, p, family, def) {
  const w = smooth(clamp01(p / 0.4));
  const strike = smooth(clamp01((p - 0.4) / 0.15));
  const rec = smooth(clamp01((p - 0.58) / 0.42));
  if (family === 'godzilla' || family === 'mecha') {
    // tail slam / rocket kick
    if (family === 'godzilla') {
      rot(rig, rig.pelvis, 0, -0.55 * w + 0.9 * strike - 0.35 * rec, 0);
      (rig.tail || []).forEach((s, i) => rot(rig, s, 0.05 * w, -0.2 * w + 0.55 * strike * (1 - i * 0.06), 0));
      rot(rig, rig.torso, 0.1 * w, 0.3 * strike, 0);
    } else {
      rot(rig, rig.legR?.root, -0.2 * w - 1.6 * strike + 0.6 * rec, 0, 0);
      rot(rig, rig.legR?.upper, 0.3 * w + 1.0 * strike, 0, 0);
      rot(rig, rig.torso, 0.3 * w - 0.2 * strike, 0, 0);
    }
  } else if (family === 'kong') {
    rot(rig, rig.armL?.root, 1.0 * w - 2.7 * strike + 1.4 * rec, 0, 0.2);
    rot(rig, rig.armR?.root, 1.0 * w - 2.7 * strike + 1.4 * rec, 0, -0.2);
    rot(rig, rig.torso, -0.35 * w + 0.55 * strike - 0.2 * rec, 0, 0);
    rot(rig, rig.neck, -0.2 * w + 0.3 * strike, 0, 0);
  } else if (family === 'ghidorah') {
    (rig.necks || []).forEach((n, i) => {
      n.chain.forEach((s, j) => rot(rig, s, (i === 1 ? -0.4 : -0.2) * w + 0.6 * strike, 0, (i - 1) * 0.2 * strike));
    });
    rot(rig, rig.torso, -0.2 * w + 0.4 * strike, 0, 0);
    flapWings(rig, 0, 0.25, 0, 0.35 * strike);
  } else if (family === 'rodan' || family === 'mothra') {
    flapWings(rig, 0, 0.6, 0, 0.4 * w - 0.5 * strike);
    rot(rig, rig.torso, -0.2 * w + 0.3 * strike, 0, 0);
    rot(rig, rig.neck, -0.2 * w + 0.5 * strike, 0, 0);
  } else if (family === 'shimo') {
    rot(rig, rig.torso, -0.2 * w + 0.4 * strike, 0, 0);
    rot(rig, rig.neck, -0.25 * w + 0.5 * strike, 0, 0);
    for (const key of ['legFL', 'legFR', 'legBL', 'legBR']) {
      const l = rig[key];
      if (l) rot(rig, l.root, -0.2 * w + 0.3 * strike, 0, 0);
    }
  } else if (family === 'scylla') {
    (rig.tentacles || []).forEach((t, ti) => t.forEach((s, i) => rot(rig, s, 0.2 * w + 0.5 * strike, 0, Math.sin(ti + i) * 0.3 * strike)));
    rot(rig, rig.torso, -0.2 * w + 0.3 * strike, 0, 0);
  } else if (family === 'tiamat') {
    (rig.segments || []).forEach((s, i) => rot(rig, s, -0.2 * w + 0.5 * strike, 0.2 * strike * Math.sin(i), 0));
    rot(rig, rig.neck, 0, 0, 0);
  }
}

function applySpecial(rig, p, def) {
  const type = def.special.type;
  const w = smooth(clamp01(p / 0.35));
  const fire = smooth(clamp01((p - 0.35) / 0.15));
  const rec = smooth(clamp01((p - 0.72) / 0.28));
  const jawOpen = Math.max(w * 0.7, fire * 0.9) * (1 - rec * 0.4);
  rot(rig, rig.jaw, jawOpen * 0.75, 0, 0);
  if (type === 'beam' || type === 'tripleBeam' || type === 'freezeBeam' || type === 'godrays') {
    rot(rig, rig.neck, 0.35 * w - 0.55 * fire + 0.2 * rec, 0, 0);
    rot(rig, rig.head, 0.2 * w - 0.15 * fire, 0, 0);
    rot(rig, rig.torso, -0.12 * w + 0.1 * fire, 0, 0);
    if (type === 'tripleBeam' && rig.necks) {
      rig.necks.forEach((n, i) => {
        n.chain.forEach((s, j) => rot(rig, s, (0.15 + j * 0.03) * w - 0.25 * fire, 0, (i - 1) * 0.16 * fire));
        rot(rig, n.head, 0.1 * w - 0.1 * fire, 0, 0);
        rot(rig, n.jaw, jawOpen * 0.8, 0, 0);
      });
    }
    if (type === 'godrays') {
      flapWings(rig, 0, 0.2, 0, 0.55 * w);
      rot(rig, rig.neck, 0.4 * w - 0.2 * fire, 0, 0);
    }
  } else if (type === 'pulse' || type === 'shockwave' || type === 'acid') {
    rot(rig, rig.armL?.root, 0.4 * w - 1.3 * fire, 0, -0.5 * w);
    rot(rig, rig.armR?.root, 0.4 * w - 1.3 * fire, 0, 0.5 * w);
    rot(rig, rig.torso, -0.3 * w + 0.5 * fire, 0, 0);
    rot(rig, rig.neck, -0.25 * w + 0.45 * fire, 0, 0);
    rig.visual.position.y = Math.max(0, Math.sin(p * Math.PI)) * 0.16;
  } else if (type === 'cleave' || type === 'firestorm') {
    rot(rig, rig.armR?.root, 0.9 * w - 2.5 * fire + 1.0 * rec, 0, 0);
    rot(rig, rig.armL?.root, 0.4 * w - 0.8 * fire, 0, 0);
    rot(rig, rig.torso, -0.35 * w + 0.5 * fire, -0.4 * fire, 0);
    if (type === 'firestorm') {
      flapWings(rig, 0, 0.5, 0, 0.4 * w - 0.6 * fire);
      rot(rig, rig.neck, 0.35 * w - 0.5 * fire, 0, 0);
    }
  }
}

function applyRoar(rig, p, family) {
  const up = smooth(clamp01(p / 0.25));
  const down = smooth(clamp01((p - 0.7) / 0.3));
  const k = up * (1 - down * 0.6);
  rot(rig, rig.jaw, 0.9 * k, 0, 0);
  rot(rig, rig.neck, 0.4 * k, 0, 0);
  rot(rig, rig.head, 0.25 * k, 0, 0);
  rot(rig, rig.torso, 0.12 * k, 0, 0);
  rot(rig, rig.armL?.root, 0.35 * k, 0, -0.5 * k);
  rot(rig, rig.armR?.root, 0.35 * k, 0, 0.5 * k);
  if (family === 'kong') {
    rot(rig, rig.armL?.root, -0.6 * k, 0, -0.5 * k);
    rot(rig, rig.armR?.root, -0.6 * k, 0, 0.5 * k);
    rot(rig, rig.armL?.upper, 1.2 * k, 0, 0);
    rot(rig, rig.armR?.upper, 1.2 * k, 0, 0);
  }
  if (rig.wingL) flapWings(rig, 0, 0.2, 0, 0.5 * k);
  if (family === 'ghidorah') {
    rig.necks?.forEach((n, i) => {
      n.chain.forEach((s, j) => rot(rig, s, 0.2 * k, 0, (i - 1) * 0.15 * k));
      rot(rig, n.jaw, 0.8 * k, 0, 0);
    });
  }
}

function applyBlock(rig) {
  rot(rig, rig.armL?.root, -1.1, 0, -0.35);
  rot(rig, rig.armR?.root, -1.1, 0, 0.35);
  rot(rig, rig.armL?.upper, 1.0, 0, 0);
  rot(rig, rig.armR?.upper, 1.0, 0, 0);
  rot(rig, rig.torso, 0.15, 0, 0);
  rot(rig, rig.neck, 0.18, 0, 0);
}

function applyHit(rig, p, dir = 1) {
  const k = Math.sin(clamp01(p) * Math.PI) * 0.45;
  rot(rig, rig.torso, -0.25 * k, 0.15 * k * dir, 0.2 * k * dir);
  rot(rig, rig.neck, -0.35 * k, 0, 0.1 * k);
  rot(rig, rig.head, -0.2 * k, 0, 0);
  rot(rig, rig.armL?.root, 0.3 * k, 0, -0.2 * k);
  rot(rig, rig.armR?.root, 0.3 * k, 0, 0.2 * k);
}

function ragdollFlail(rig, state, time) {
  const t = time * 1.4;
  const flail = Math.sin(t) * 0.4;
  rot(rig, rig.armL?.root, 0.5 + Math.sin(t * 1.1) * 0.6, 0, -0.5 + flail * 0.4);
  rot(rig, rig.armR?.root, 0.5 + Math.cos(t * 0.9) * 0.6, 0, 0.5 - flail * 0.4);
  rot(rig, rig.armL?.upper, 0.5 + Math.sin(t * 1.3) * 0.5, 0, 0);
  rot(rig, rig.armR?.upper, 0.5 + Math.cos(t * 1.2) * 0.5, 0, 0);
  rot(rig, rig.legL?.root, 0.3 + Math.sin(t * 0.8) * 0.4, 0, -0.1);
  rot(rig, rig.legR?.root, 0.3 + Math.cos(t * 0.85) * 0.4, 0, 0.1);
  rot(rig, rig.neck, -0.15 + Math.sin(t * 0.7) * 0.15, Math.sin(t * 0.5) * 0.2, 0);
  rot(rig, rig.head, Math.sin(t * 0.9) * 0.2, Math.sin(t * 0.6) * 0.2, 0);
  rot(rig, rig.jaw, 0.2 + Math.sin(t * 1.2) * 0.15, 0, 0);
  swayTail(rig, time, 0.12, 1.1);
  if (rig.wingL) flapWings(rig, time, 0.25, 2.0, 0.1);
  if (rig.necks) rig.necks.forEach((n, i) => {
    n.chain.forEach((s, j) => rot(rig, s, Math.sin(t + i + j) * 0.15, Math.sin(t * 0.8 + i) * 0.15, 0));
    rot(rig, n.jaw, 0.3 + Math.sin(t + i) * 0.2, 0, 0);
  });
  if (rig.legs) rig.legs.forEach((l, i) => {
    rot(rig, l.limb.root, 0.3 + Math.sin(t * 0.8 + i) * 0.4, 0, l.side * 0.2);
  });
  if (rig.segments) rig.segments.forEach((s, i) => rot(rig, s, Math.sin(t * 0.7 + i * 0.4) * 0.15, Math.sin(t * 0.5 + i * 0.3) * 0.2, 0));
  if (rig.tentacles) rig.tentacles.forEach((tent, i) => tent.forEach((s, j) => rot(rig, s, Math.sin(t * 1.2 + i + j) * 0.2, 0, Math.sin(t + i + j) * 0.2)));
}

function familyIdle(rig, family, state, time) {
  switch (family) {
    case 'godzilla':
      bipedIdle(rig, state, time);
      swayTail(rig, time, 0.1, 0.9);
      break;
    case 'kong':
      bipedIdle(rig, state, time);
      rot(rig, rig.torso, 0.22, 0, 0);
      rot(rig, rig.armL?.root, 0.15, 0, -0.12);
      rot(rig, rig.armR?.root, 0.15, 0, 0.12);
      rot(rig, rig.neck, -0.12, 0, 0);
      break;
    case 'mecha':
      bipedIdle(rig, state, time);
      rot(rig, rig.torso, 0, Math.sin(time * 0.4) * 0.02, 0);
      rot(rig, rig.head, 0, Math.sin(time * 0.9) * 0.25, 0);
      break;
    case 'ghidorah':
      bipedIdle(rig, state, time);
      flapWings(rig, time, 0.08, 0.8, 0.08);
      rig.necks?.forEach((n, i) => {
        n.chain.forEach((s, j) => rot(rig, s, Math.sin(time * 0.8 + i * 1.3 + j * 0.4) * 0.07, 0, Math.sin(time * 0.6 + i) * 0.06));
        rot(rig, n.head, Math.sin(time * 0.9 + i) * 0.06, Math.sin(time * 0.5 + i * 1.7) * 0.2, 0);
        rot(rig, n.jaw, Math.max(0, Math.sin(time * 0.5 + i)) * 0.06, 0, 0);
      });
      swayTail(rig, time, 0.08, 0.7);
      break;
    case 'rodan':
      bipedIdle(rig, state, time);
      flapWings(rig, time, 0.16, 1.1, 0.12);
      rot(rig, rig.neck, 0.1, Math.sin(time * 0.5) * 0.2, 0);
      break;
    case 'mothra':
      bipedIdle(rig, state, time);
      flapWings(rig, time, 0.22, 1.6, 0.18);
      rig.visual.position.y = Math.sin(time * 1.4) * 0.08;
      rot(rig, rig.neck, 0.1, Math.sin(time * 0.4) * 0.2, 0);
      break;
    case 'shimo': {
      const b = Math.sin(time * 0.8) * 0.02;
      rig.visual.position.y = b;
      rot(rig, rig.torso, b, 0, Math.sin(time * 0.4) * 0.02);
      rot(rig, rig.neck, Math.sin(time * 0.6) * 0.04, Math.sin(time * 0.4) * 0.12, 0);
      swayTail(rig, time, 0.08, 0.7);
      break;
    }
    case 'scylla': {
      const b = Math.sin(time * 1.1) * 0.02;
      rig.visual.position.y = b;
      rot(rig, rig.torso, b, 0, 0);
      rot(rig, rig.neck, Math.sin(time * 0.7) * 0.05, Math.sin(time * 0.5) * 0.12, 0);
      rig.legs?.forEach((l, i) => {
        rot(rig, l.base, 0, 0, Math.sin(time * 0.9 + i) * 0.04);
        rot(rig, l.limb.root, 0, 0, Math.sin(time * 0.8 + i * 0.8) * 0.05);
      });
      rig.tentacles?.forEach((t, ti) => t.forEach((s, i) => rot(rig, s, Math.sin(time * 1.3 + ti + i) * 0.1, 0, Math.sin(time + ti * 0.7 + i) * 0.12)));
      break;
    }
    case 'tiamat': {
      rig.visual.position.y = Math.sin(time * 1.2) * 0.04;
      rig.segments?.forEach((s, i) => rot(rig, s, Math.sin(time * 0.9 + i * 0.45) * 0.05, Math.sin(time * 0.7 + i * 0.35) * 0.09, 0));
      rot(rig, rig.neck, 0, 0, 0);
      rot(rig, rig.head, Math.sin(time * 0.8) * 0.08, Math.sin(time * 0.5) * 0.25, 0);
      break;
    }
    default:
      bipedIdle(rig, state, time);
  }
}

function familyWalk(rig, family, state, time) {
  switch (family) {
    case 'godzilla':
      bipedWalk(rig, state, time, { amp: 0.48, armAmp: 0.3, armOut: 0.06 });
      break;
    case 'kong':
      bipedWalk(rig, state, time, { amp: 0.38, armAmp: 0.6, armOut: 0.15 });
      rot(rig, rig.torso, 0.32 + Math.sin(state.walkPhase * 2) * 0.03, 0, 0);
      rot(rig, rig.neck, -0.22, 0, 0);
      break;
    case 'mecha':
      bipedWalk(rig, state, time, { amp: 0.36, armAmp: 0.22, armOut: 0 });
      rot(rig, rig.torso, 0.04, 0, 0);
      break;
    case 'ghidorah':
      bipedWalk(rig, state, time, { amp: 0.42, armAmp: 0.1, armOut: 0.1 });
      flapWings(rig, time, 0.12, 1.4, 0.15);
      rig.necks?.forEach((n, i) => n.chain.forEach((s, j) => rot(rig, s, 0, 0, Math.sin(state.walkPhase + i + j * 0.4) * 0.05)));
      break;
    case 'rodan':
      bipedWalk(rig, state, time, { amp: 0.55, armAmp: 0.1, armOut: 0.1 });
      flapWings(rig, time, 0.2, 2.2, 0.18);
      break;
    case 'mothra':
      bipedWalk(rig, state, time, { amp: 0.4, armAmp: 0.05, armOut: 0.1 });
      flapWings(rig, time, 0.3, 3.0, 0.22);
      break;
    case 'shimo': {
      const p = state.walkPhase || 0;
      const bob = Math.abs(Math.sin(p)) * 0.09;
      rig.visual.position.y = bob;
      const a = Math.sin(p) * 0.42;
      rot(rig, rig.legFL.root, a, 0, 0);
      rot(rig, rig.legBR.root, a, 0, 0);
      rot(rig, rig.legFR.root, -a, 0, 0);
      rot(rig, rig.legBL.root, -a, 0, 0);
      rot(rig, rig.legFL.upper, Math.max(0, -a) * 0.7, 0, 0);
      rot(rig, rig.legBR.upper, Math.max(0, -a) * 0.7, 0, 0);
      rot(rig, rig.legFR.upper, Math.max(0, a) * 0.7, 0, 0);
      rot(rig, rig.legBL.upper, Math.max(0, a) * 0.7, 0, 0);
      rot(rig, rig.torso, Math.sin(p * 2) * 0.025, 0, Math.sin(p) * 0.02);
      rot(rig, rig.neck, -Math.sin(p * 2) * 0.03, 0, 0);
      swayTail(rig, time, 0.08, 1.5, p);
      break;
    }
    case 'scylla': {
      const p = state.walkPhase || 0;
      rig.visual.position.y = Math.abs(Math.sin(p)) * 0.05;
      rig.legs?.forEach((l, i) => {
        const ph = p + i * 0.8;
        rot(rig, l.base, 0, Math.sin(ph) * 0.1, 0);
        rot(rig, l.limb.root, Math.sin(ph) * 0.18, 0, Math.sin(ph) * 0.12);
        rot(rig, l.limb.upper, Math.max(0, Math.sin(ph)) * 0.3, 0, 0);
      });
      rig.tentacles?.forEach((t, ti) => t.forEach((s, i) => rot(rig, s, Math.sin(p + ti + i) * 0.08, 0, Math.sin(p * 0.7 + ti + i) * 0.08)));
      break;
    }
    case 'tiamat': {
      const p = state.walkPhase || 0;
      rig.visual.position.y = Math.abs(Math.sin(p * 0.5)) * 0.05;
      rig.segments?.forEach((s, i) => rot(rig, s, Math.sin(p + i * 0.4) * 0.05, Math.sin(p + i * 0.6) * 0.08, 0));
      break;
    }
    default:
      bipedWalk(rig, state, time, {});
  }
}

export function animateMonster(rig, state, time, dt) {
  resetRig(rig);
  const family = rig.family;
  const dead = state.dead;
  const rag = state.ragdoll;

  if (dead || rag) {
    ragdollFlail(rig, state, time);
    if (state.hitPulse) applyHit(rig, state.hitPulse, state.hitDir || 1);
    if (rig.mouthGlow) rig.mouthGlow.visible = false;
    return;
  }

  const speed = state.speed || 0;
  const moving = speed > 0.6 && state.grounded !== false;
  if (moving) familyWalk(rig, family, state, time);
  else familyIdle(rig, family, state, time);

  if (state.block) applyBlock(rig);
  if (state.hitPulse > 0) applyHit(rig, state.hitPulse, state.hitDir || 1);

  const atk = state.attack;
  if (atk) {
    const p = clamp01(atk.t / atk.dur);
    switch (atk.kind) {
      case 'light': applyPunch(rig, p, family, atk.alt); break;
      case 'heavy': applyHeavy(rig, p, family, rig.def); break;
      case 'special': applySpecial(rig, p, rig.def); break;
      case 'roar': applyRoar(rig, p, family); break;
      case 'bite':
        rot(rig, rig.neck, -0.35 * Math.sin(p * Math.PI), 0, 0);
        rot(rig, rig.head, -0.25 * Math.sin(p * Math.PI), 0, 0);
        rot(rig, rig.jaw, 0.8 * Math.sin(p * Math.PI), 0, 0);
        break;
      case 'stomp': {
        const lift = p < 0.4 ? easeOut(p / 0.4) : 1 - easeIn((p - 0.4) / 0.6);
        rot(rig, rig.legR?.root, -1.2 * lift, 0, 0);
        rot(rig, rig.legR?.upper, 1.1 * lift, 0, 0);
        rig.visual.position.y = -0.08 * (1 - lift);
        break;
      }
      case 'grab':
        rot(rig, rig.armL?.root, -1.3 * Math.sin(p * Math.PI), 0, -0.2);
        rot(rig, rig.armR?.root, -1.3 * Math.sin(p * Math.PI), 0, 0.2);
        rot(rig, rig.neck, -0.2 * Math.sin(p * Math.PI), 0, 0);
        rot(rig, rig.jaw, 0.5 * Math.sin(p * Math.PI), 0, 0);
        break;
      case 'throw': {
        const k = Math.sin(p * Math.PI);
        rot(rig, rig.armL?.root, -1.8 * k, 0, -0.4 * k);
        rot(rig, rig.armR?.root, -1.8 * k, 0, 0.4 * k);
        rot(rig, rig.torso, -0.4 * k, 0, 0);
        break;
      }
      case 'dodge':
        rig.visual.rotation.z = Math.sin(p * Math.PI) * 0.35;
        rig.visual.position.y = -0.1 * Math.sin(p * Math.PI);
        break;
      case 'axe':
        rot(rig, rig.armR?.root, 0.9 * Math.sin(p * Math.PI), 0, 0);
        rot(rig, rig.armR?.upper, -1.8 * Math.sin(p * Math.PI), 0, 0);
        rot(rig, rig.torso, -0.3 * Math.sin(p * Math.PI), 0, 0);
        break;
      default:
        break;
    }
  }

  // eye / plate glow pulse
  if (rig.glowParts) {
    const glow = rig.def.build?.glow ?? 0.2;
    const pulse = 0.65 + Math.sin(time * 2.2) * 0.15;
    for (const part of rig.glowParts) {
      if (part?.material?.emissiveIntensity !== undefined) part.material.emissiveIntensity = 0.4 + glow * pulse * 2.2;
    }
  }
  if (rig.mouthGlow) rig.mouthGlow.visible = !!(atk && (atk.kind === 'special' || atk.kind === 'roar'));
  if (rig.teamRing) rig.teamRing.rotation.z += dt * 0.25;
}

export function captureRigBases(rig) {
  rig.bases = new Map();
  rig.visual.traverse(o => {
    if (o && o.isObject3D) rig.bases.set(o, { x: o.rotation.x, y: o.rotation.y, z: o.rotation.z });
  });
  return rig;
}

export function setRigTeamColor(rig, color) {
  if (!rig.teamRingMat) return;
  rig.teamRingMat.color.setHex(color);
  rig.teamRingMat.opacity = 0.34;
}
