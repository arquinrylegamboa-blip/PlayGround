import * as THREE from 'three';
import { createMonsterModel } from '../monsters/models.js';
import { animateMonster, setRigTeamColor } from '../monsters/animation.js';
import { TEAM_COLORS } from '../monsters/data.js';

const TAU = Math.PI * 2;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const damp = (v, target, lambda, dt) => v + (target - v) * (1 - Math.exp(-lambda * dt));

function attackStats(def) {
  const a = def.attack / 100;
  const h = def.height;
  return {
    light: { dur: 0.52, hit: 0.28, range: h * 0.44, arc: 0.95, damage: 9 + a * 11, force: 6 + a * 7, stamina: 4, cd: 0.04 },
    heavy: { dur: 0.94, hit: 0.5, range: h * 0.56, arc: 0.8, damage: 18 + a * 19, force: 14 + a * 12, stamina: 12, cd: 0.35 },
    tail: { dur: 0.82, hit: 0.4, range: h * 0.72, arc: 1.85, damage: 14 + a * 13, force: 12 + a * 9, stamina: 10, cd: 0.25 },
    bite: { dur: 0.62, hit: 0.3, range: h * 0.36, arc: 0.62, damage: 12 + a * 15, force: 8 + a * 7, stamina: 5, cd: 0.08 },
    stomp: { dur: 0.82, hit: 0.56, range: h * 0.46, arc: TAU, damage: 14 + a * 13, force: 16 + a * 11, stamina: 10, cd: 0.4, aoe: true },
    grab: { dur: 1.5, hit: 0.34, range: h * 0.34, arc: 0.7, damage: 6, force: 10, stamina: 14, cd: 3 },
    roar: { dur: 1.5, hit: 0.18, range: 0, arc: TAU, damage: 0, force: 0, stamina: 4, cd: 4.5 },
    axe: { dur: 1.0, hit: 0.52, range: h * 0.55, arc: 0.8, damage: 22 + a * 20, force: 18 + a * 12, stamina: 14, cd: 0.6 },
  };
}

class MonsterAI {
  constructor(monster) {
    this.m = monster;
    this.think = 0;
    this.target = null;
    this.blockTimer = 0;
    this.strafe = Math.random() > 0.5 ? 1 : -1;
    this.strafeTimer = 0;
    this.rampage = false;
    this.attackCooldown = 0;
    this.specialWish = 0;
  }

  update(dt) {
    const m = this.m;
    if (m.dead || m.state.grabbed) return;
    this.think -= dt;
    this.attackCooldown -= dt;
    this.blockTimer -= dt;
    this.strafeTimer -= dt;
    if (this.strafeTimer <= 0) { this.strafeTimer = 1.5 + Math.random() * 2.5; this.strafe *= -1; }
    if (this.think > 0) return;
    this.think = 0.18 + Math.random() * 0.18;

    const enemies = m.game.monsters.filter(o => o !== m && !o.dead && o.team !== m.team);
    let target = null, best = 1e9;
    for (const e of enemies) {
      const d = m.root.position.distanceTo(e.root.position);
      if (d < best) { best = d; target = e; }
    }
    if (!target && m.game.mode === 'battle' && m.game.player && m.game.player.team !== m.team && !m.game.player.dead) {
      target = m.game.player; best = m.root.position.distanceTo(target.root.position);
    }
    this.target = target;
    m.target = target;
    const intent = m.intent;
    intent.moveX = 0; intent.moveZ = 0; intent.run = false; intent.block = false;
    intent.attack = null; intent.special = false; intent.dodge = false; intent.jump = false; intent.grab = false; intent.roar = false;

    if (m.state.ragdoll) return;

    if (!target) {
      // rampage: hunt the nearest standing building
      const buildings = m.game.city.buildings.filter(b => !b.destroyed);
      if (!buildings.length) return;
      let b = null, bd = 1e9;
      for (const cand of buildings) {
        const d = Math.hypot(cand.x - m.root.position.x, cand.z - m.root.position.z);
        if (d < bd) { bd = d; b = cand; }
      }
      if (!b) return;
      const dx = b.x - m.root.position.x, dz = b.z - m.root.position.z;
      const dist = Math.hypot(dx, dz);
      if (dist > Math.max(b.width, b.depth) * 0.7 + m.radius + 8) {
        intent.moveX = dx / (dist || 1); intent.moveZ = dz / (dist || 1); intent.run = dist > 90;
      } else {
        intent.aimYaw = Math.atan2(-dx, -dz);
        if (this.attackCooldown <= 0) {
          intent.attack = Math.random() > 0.55 ? 'heavy' : 'light';
          this.attackCooldown = 0.9 + Math.random() * 0.8;
        }
      }
      return;
    }

    const dx = target.root.position.x - m.root.position.x;
    const dz = target.root.position.z - m.root.position.z;
    const dist = Math.hypot(dx, dz);
    const range = m.attackDefs.light.range + m.radius * 0.5;
    const heavyRange = m.attackDefs.heavy.range + m.radius * 0.4;
    intent.aimYaw = Math.atan2(-dx, -dz);
    intent.faceTarget = target;

    // react to incoming attacks
    if (target.state.attack && dist < range * 1.7) {
      const kind = target.state.attack.kind;
      if (kind === 'heavy' && Math.random() < 0.3) intent.dodge = true;
      else if (Math.random() < 0.26) { intent.block = true; this.blockTimer = 0.5; }
    }
    if (this.blockTimer > 0) intent.block = true;

    if (m.hp < m.maxHp * 0.28 && Math.random() < 0.15) intent.roar = true;

    const special = m.def.special;
    const specialRange = special.type === 'beam' || special.type === 'tripleBeam' || special.type === 'freezeBeam' || special.type === 'godrays' ? special.range * 0.7 : special.range;
    if (m.cooldowns.special <= 0 && m.stamina > 28 && dist < specialRange && Math.random() < 0.5) {
      intent.special = true;
    }

    if (dist > range * 1.05) {
      let mx = dx / (dist || 1), mz = dz / (dist || 1);
      // slight strafe / flank
      if (dist < range * 2.6 && Math.random() < 0.35) {
        mx += -dz / (dist || 1) * 0.35 * this.strafe;
        mz += dx / (dist || 1) * 0.35 * this.strafe;
      }
      const len = Math.hypot(mx, mz) || 1;
      intent.moveX = mx / len; intent.moveZ = mz / len;
      intent.run = dist > range * 2.4;
      // if stuck against a building, swing at it
      if (m.blockedTimer > 0.45 && this.attackCooldown <= 0) {
        intent.attack = 'heavy';
        this.attackCooldown = 1.1;
      }
      if (dist < heavyRange && this.attackCooldown <= 0 && Math.random() < 0.35) {
        intent.attack = 'heavy';
        this.attackCooldown = 1.2 + Math.random() * 0.6;
      }
    } else {
      if (this.attackCooldown <= 0 && !m.state.attack && !m.state.ragdoll) {
        const r = Math.random();
        if (r < 0.55) intent.attack = 'light';
        else if (r < 0.78) intent.attack = 'heavy';
        else if (r < 0.88) intent.attack = 'bite';
        else if (r < 0.95) intent.attack = 'tail';
        else intent.grab = true;
        this.attackCooldown = 0.7 + Math.random() * 0.9;
      }
      // keep a little distance while attacking
      if (dist < range * 0.45 && Math.random() < 0.4) {
        intent.moveX = -dx / (dist || 1) * 0.4;
        intent.moveZ = -dz / (dist || 1) * 0.4;
      }
    }
    if (target.state.ragdoll && dist < heavyRange && this.attackCooldown <= 0) {
      intent.attack = 'heavy';
      this.attackCooldown = 1.4;
    }
    if (target.state.attack?.kind === 'special' && Math.random() < 0.2) intent.dodge = true;
    if (m.hp < m.maxHp * 0.35 && Math.random() < 0.25) intent.dodge = true;
  }
}

export class Monster {
  constructor(game, def, opts = {}) {
    this.game = game;
    this.def = def;
    this.team = opts.team ?? 0;
    this.isPlayer = !!opts.player;
    this.name = def.name;
    this.height = def.height;
    this.radius = def.height * 0.135;
    this.maxHp = def.health;
    this.hp = this.maxHp;
    this.maxStamina = def.stamina;
    this.stamina = this.maxStamina;
    this.mass = def.mass;
    this.attackDefs = attackStats(def);
    this.cooldowns = { special: 0, grab: 0, dodge: 0, roar: 0, jump: 0 };
    this.state = {
      speed: 0, running: false, walkPhase: Math.random() * TAU, grounded: true,
      attack: null, block: false, hitPulse: 0, hitDir: 1, ragdoll: false, dead: false,
      grabbed: false, dodge: 0, jumpY: 0, jumpVel: 0, burn: 0, freeze: 0, shock: 0,
      specialTick: 0, recovery: 0, flying: false,
    };
    this.intent = { moveX: 0, moveZ: 0, run: false, block: false, attack: null, special: false, dodge: false, jump: false, grab: false, roar: false, aimYaw: null, faceTarget: null };
    this.velocity = new THREE.Vector3();
    this.yaw = opts.yaw ?? 0;
    this.target = null;
    this.balance = 100;
    this.maxBalance = 100;
    this.ragdollTime = 0;
    this.ragdollTotal = 0;
    this.fallPitch = 0;
    this.fallRoll = 0;
    this.grabTarget = null;
    this.grabbedBy = null;
    this.dead = false;
    this.activeBeams = [];
    this.beamStop = null;
    this.invuln = 0;
    this.blockedTimer = 0;
    this.stepTimer = 0;
    this.deathTimer = 0;
    this.statusTimer = 0;
    this.combo = 0;
    this.queued = null;
    this.spawnPoint = new THREE.Vector3(opts.x ?? 0, 0, opts.z ?? 0);
    this.root = new THREE.Group();
    const { group, rig } = createMonsterModel(def);
    this.rig = rig;
    this.model = group;
    this.root.add(group);
    this.root.position.copy(this.spawnPoint);
    this.root.rotation.y = this.yaw;
    game.scene.add(this.root);
    setRigTeamColor(rig, TEAM_COLORS[this.team] ?? 0xffffff);
    rig.teamRingMat.opacity = this.isPlayer ? 0.45 : 0.28;
    this.visual = rig.visual;
    this.baseY = 0;
    this.createHealthBar();
    this.ai = opts.ai === false ? null : new MonsterAI(this);
    this.state.hitFlash = 0;
    this.audioStepTimer = 0;
    this.lastDamageTime = 0;
    this.game.hud?.onMonsterSpawn?.(this);
  }

  createHealthBar() {
    const w = this.height * 0.6;
    const h = this.height * 0.028;
    const g = new THREE.Group();
    const bg = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: 0x090b0d, transparent: true, opacity: 0.82, depthTest: false, depthWrite: false }));
    bg.renderOrder = 20;
    g.add(bg);
    const fill = new THREE.Mesh(new THREE.PlaneGeometry(w, h * 0.72), new THREE.MeshBasicMaterial({ color: TEAM_COLORS[this.team] ?? 0x4fc3ff, depthTest: false, depthWrite: false, toneMapped: false }));
    fill.position.z = 0.01;
    fill.renderOrder = 21;
    g.add(fill);
    g.position.y = this.height * 1.12;
    this.game.scene.add(g);
    this.healthBar = g;
    this.healthFill = fill;
    this.healthWidth = w;
  }

  setPlayer(on) {
    this.isPlayer = on;
    this.rig.teamRingMat.opacity = on ? 0.45 : 0.28;
    if (on) { this.ai = null; this.intent.attack = null; }
    else if (!this.ai) this.ai = new MonsterAI(this);
    this.healthBar.visible = !on;
  }

  setAI(on) {
    if (on) {
      if (!this.ai) this.ai = new MonsterAI(this);
    } else {
      this.ai = null;
      this.intent.moveX = 0;
      this.intent.moveZ = 0;
      this.intent.attack = null;
      this.intent.special = false;
    }
  }

  get forward() { return new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)); }
  get forwardFlat() { return new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)); }
  get right() { return new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw)); }

  headWorld(out = new THREE.Vector3()) {
    if (this.rig.head) this.rig.head.getWorldPosition(out);
    else out.copy(this.root.position).add(new THREE.Vector3(0, this.height * 0.8, 0));
    return out;
  }

  canAct() { return !this.dead && !this.state.ragdoll && !this.state.grabbed; }

  update(dt) {
    this.invuln = Math.max(0, this.invuln - dt);
    this.blockedTimer = Math.max(0, this.blockedTimer - dt);
    this.state.hitPulse = Math.max(0, this.state.hitPulse - dt * 4);
    this.state.hitFlash = Math.max(0, this.state.hitFlash - dt * 7);
    for (const k of Object.keys(this.cooldowns)) this.cooldowns[k] = Math.max(0, this.cooldowns[k] - dt);
    this.stamina = Math.min(this.maxStamina, this.stamina + dt * (this.state.block ? 2 : 14));
    if (this.state.block) this.stamina = Math.max(0, this.stamina - dt * 9);
    this.balance = Math.min(this.maxBalance, this.balance + dt * (this.state.ragdoll ? 0 : 9));
    this.statusUpdate(dt);

    if (this.state.grabbed) {
      this.followGrab(dt);
      this.updateVisual(dt);
      return;
    }
    if (this.dead) {
      this.updateRagdoll(dt, true);
      this.updateVisual(dt);
      return;
    }
    if (this.state.ragdoll) {
      this.updateRagdoll(dt, false);
      this.updateVisual(dt);
      return;
    }
    if (this.ai) this.ai.update(dt);

    // player / AI intent
    const intent = this.intent;
    this.state.block = !!intent.block && this.stamina > 0;
    if (this.state.block) {
      this.state.attack = null;
    }
    if (this.state.dodge > 0) {
      this.state.dodge -= dt;
      this.root.position.addScaledVector(this.velocity, dt);
      this.resolveCollisions(dt, true);
      this.updateVisual(dt);
      return;
    }
    if (intent.dodge && this.cooldowns.dodge <= 0 && this.stamina > 12 && this.canAct()) {
      this.startDodge(intent);
    }
    if (intent.jump && this.cooldowns.jump <= 0 && this.canAct()) {
      this.startJump();
    }
    if (intent.attack && this.canAct() && !this.state.attack) {
      this.startAttack(intent.attack, intent.aimYaw);
      this.intent.attack = null;
    }
    if (intent.special && this.canAct() && !this.state.attack && this.cooldowns.special <= 0 && this.stamina > 24) {
      this.startSpecial(intent.aimYaw);
      this.intent.special = false;
    }
    if (intent.grab && this.canAct() && !this.state.attack && this.cooldowns.grab <= 0 && this.stamina > 12) {
      this.startAttack('grab', intent.aimYaw);
      this.intent.grab = false;
    }
    if (intent.roar && this.canAct() && !this.state.attack && this.cooldowns.roar <= 0) {
      this.startAttack('roar', intent.aimYaw);
      this.intent.roar = false;
    }

    if (this.state.attack) {
      this.updateAttack(dt);
    } else {
      this.updateMovement(dt, intent);
    }

    // jump physics
    if (this.state.jumpVel !== 0 || this.state.jumpY > 0) {
      this.state.jumpVel -= 42 * dt;
      this.state.jumpY += this.state.jumpVel * dt;
      if (this.state.jumpY <= 0) {
        this.state.jumpY = 0;
        if (this.state.jumpVel < -4) this.land();
        this.state.jumpVel = 0;
      }
    }
    this.root.position.y = this.state.jumpY;
    this.updateVisual(dt);
  }

  updateMovement(dt, intent) {
    let mx = intent.moveX || 0, mz = intent.moveZ || 0;
    const len = Math.hypot(mx, mz);
    let targetSpeed = 0;
    if (len > 0.05 && !this.state.block) {
      mx /= len; mz /= len;
      targetSpeed = (intent.run ? this.def.runSpeed : this.def.speed) * (this.state.freeze > 0 ? 0.55 : 1);
      if (this.state.block) targetSpeed *= 0.25;
      const desiredYaw = Math.atan2(-mx, -mz);
      this.yaw = damp(this.yaw, desiredYaw, 8, dt);
    } else if (intent.faceTarget && !this.state.attack) {
      const dx = intent.faceTarget.root.position.x - this.root.position.x;
      const dz = intent.faceTarget.root.position.z - this.root.position.z;
      this.yaw = damp(this.yaw, Math.atan2(-dx, -dz), 5, dt);
    }
    if (this.state.block) targetSpeed = 0;
    const accel = targetSpeed > 0 ? 22 : 30;
    const vx = Math.sin(this.yaw) * -targetSpeed;
    const vz = Math.cos(this.yaw) * -targetSpeed;
    this.velocity.x = damp(this.velocity.x, vx, accel / 8, dt);
    this.velocity.z = damp(this.velocity.z, vz, accel / 8, dt);
    if (len < 0.05 && !this.state.attack) {
      this.velocity.x = damp(this.velocity.x, 0, 4, dt);
      this.velocity.z = damp(this.velocity.z, 0, 4, dt);
    }
    this.root.position.x += this.velocity.x * dt;
    this.root.position.z += this.velocity.z * dt;
    this.state.speed = Math.hypot(this.velocity.x, this.velocity.z);
    this.state.running = intent.run && this.state.speed > this.def.speed * 0.7;
    if (this.state.speed > 0.3) this.state.walkPhase += dt * (this.state.running ? 2.1 : 1.15) * (0.7 + this.state.speed / 60);
    this.resolveCollisions(dt, false);
    this.root.rotation.y = this.yaw;
    // footstep FX
    this.stepTimer -= dt * (0.4 + this.state.speed / 30);
    if (this.stepTimer <= 0 && this.state.speed > 1) {
      this.stepTimer = this.state.running ? 0.28 : 0.5;
      this.footstep();
    }
    // clamp world
    this.root.position.x = clamp(this.root.position.x, -420, 420);
    this.root.position.z = clamp(this.root.position.z, -420, 420);
  }

  footstep() {
    const f = this.forward;
    const p = this.root.position.clone().add(new THREE.Vector3(f.z * this.radius * 0.5, 0.5, -f.x * this.radius * 0.5));
    this.game.effects.dust(p, this.radius * 0.4, 4, 0xa89a86);
    if (this.isPlayer || this.game.camera.position.distanceTo(p) < 220) {
      this.audioStepTimer -= 1;
      if (this.audioStepTimer <= 0) {
        this.game.audio.stomp(0.55);
        this.audioStepTimer = 2;
        this.game.effects.shakeCamera(0.08, 0.2);
      }
    }
  }

  resolveCollisions(dt, dodging) {
    const hit = this.game.city.collideCircle(this.root.position.x, this.root.position.z, this.radius);
    if (hit.pushX || hit.pushZ) {
      this.root.position.x += hit.pushX;
      this.root.position.z += hit.pushZ;
      this.blockedTimer = 0.5;
      const speed = Math.hypot(this.velocity.x, this.velocity.z);
      if (speed > 8 && hit.hit) {
        const dmg = (speed * this.mass) / 250000 * (dodging ? 0.4 : 1);
        hit.hit.damage(dmg, this.root.position.clone().setY(this.height * 0.5), { source: this });
        this.velocity.multiplyScalar(0.55);
        this.game.effects.dust(this.root.position.clone().setY(this.height * 0.3), this.radius, 8, 0x9a8f80);
        this.game.audio.impact(0.6);
      }
    }
  }

  startAttack(kind, aimYaw = null) {
    if (!this.canAct()) return;
    if (kind === 'grab' && this.grabTarget) {
      this.throwGrabbed();
      return;
    }
    const stats = this.attackDefs[kind] || this.attackDefs.light;
    if (this.stamina < stats.stamina) {
      if (this.isPlayer) this.game.hud?.toast('NOT ENOUGH STAMINA', 'warn');
      return;
    }
    if (kind === 'grab' && this.cooldowns.grab > 0) return;
    if (aimYaw !== null && aimYaw !== undefined) this.yaw = aimYaw;
    this.stamina -= stats.stamina;
    this.state.attack = {
      kind, t: 0, dur: stats.dur, hit: stats.hit, hitDone: false,
      alt: this.combo % 2 === 1, stats, aimYaw,
    };
    this.combo++;
    if (kind === 'roar') {
      this.cooldowns.roar = stats.cd;
      this.game.audio.roar(this.def);
      this.game.roarWave?.(this);
    }
    if (kind === 'grab') this.cooldowns.grab = stats.cd;
    if (this.isPlayer) this.game.hud?.onAction(kind);
  }

  startSpecial(aimYaw = null) {
    if (!this.canAct() || this.cooldowns.special > 0) return;
    const sp = this.def.special;
    if (aimYaw !== null && aimYaw !== undefined) this.yaw = aimYaw;
    this.stamina -= 24;
    this.cooldowns.special = sp.cooldown;
    this.state.attack = {
      kind: 'special', t: 0, dur: sp.type === 'beam' || sp.type === 'tripleBeam' || sp.type === 'freezeBeam' || sp.type === 'godrays' ? 1.8 : 1.15,
      hit: 0.42, hitDone: false, special: sp, stats: { damage: sp.damage, range: sp.range, force: 20 }, aimYaw,
    };
    this.game.audio.roar(this.def);
    this.game.hud?.onAction('special');
    if (this.isPlayer) this.game.hud?.setSpecialName(sp.name);
  }

  startDodge(intent) {
    this.stamina -= 12;
    this.cooldowns.dodge = 1.4;
    this.invuln = 0.45;
    this.state.dodge = 0.38;
    this.state.attack = null;
    const f = this.forward;
    let dx = intent.moveX || 0, dz = intent.moveZ || 0;
    if (Math.hypot(dx, dz) < 0.1) { dx = -f.x; dz = -f.z; }
    const l = Math.hypot(dx, dz) || 1;
    this.velocity.set(dx / l * this.def.runSpeed * 1.8, 0, dz / l * this.def.runSpeed * 1.8);
    this.game.effects.dust(this.root.position.clone(), this.radius * 0.7, 12, 0xa89a86);
    this.game.audio.whoosh();
  }

  startJump() {
    this.stamina -= 8;
    this.cooldowns.jump = 1.8;
    this.state.jumpVel = this.def.family === 'rodan' || this.def.family === 'mothra' ? 34 : 20;
    this.state.jumpY = 0.1;
    this.game.effects.dust(this.root.position.clone(), this.radius, 10, 0xa89a86);
  }

  land() {
    const r = this.radius * 2.4;
    this.game.effects.dust(this.root.position.clone(), r, 26, 0xa89a86);
    this.game.effects.shakeCamera(0.5, 0.5);
    this.game.audio.stomp(1.2);
    this.game.aoe(this, this.root.position, r, 8 + this.def.attack * 0.08, 12, 'impact', { shake: true });
  }

  updateAttack(dt) {
    const a = this.state.attack;
    a.t += dt;
    const p = a.t / a.dur;
    // slight forward lean / movement during attacks
    if (a.kind !== 'special' && a.kind !== 'roar') {
      const lunge = Math.sin(clamp(p, 0, 1) * Math.PI) * (a.kind === 'heavy' ? 5 : 3);
      const f = this.forward;
      this.root.position.x += f.x * lunge * dt;
      this.root.position.z += f.z * lunge * dt;
      this.resolveCollisions(dt, false);
    }
    if (!a.hitDone && a.t >= a.hit) {
      a.hitDone = true;
      this.executeHit(a);
    }
    if (a.kind === 'special' && a.special) this.updateSpecial(dt, a);
    if (a.t >= a.dur) {
      this.state.attack = null;
      this.state.speed = 0;
      if (this.activeBeams.length) this.endBeams();
    }
    this.state.speed = 0;
    this.root.rotation.y = this.yaw;
    this.state.walkPhase += dt * 0.4;
  }

  executeHit(a) {
    const stats = a.stats;
    if (a.kind === 'roar') {
      this.game.roarWave?.(this);
      this.game.effects.shockwave(this.root.position, this.height * 0.6, this.def.colors.glow);
      return;
    }
    if (a.kind === 'grab') {
      const target = this.game.findGrabTarget(this);
      if (target) {
        this.grabTarget = target;
        target.grabbedBy = this;
        target.state.grabbed = true;
        target.state.attack = null;
        target.state.ragdoll = false;
        target.velocity.set(0, 0, 0);
        this.game.audio.impact(1.1);
        this.game.hud?.toast(`${target.name} GRABBED`, 'info');
      }
      return;
    }
    if (a.kind === 'special') {
      this.fireSpecial(a);
      return;
    }
    // melee / stomp
    const dmg = stats.damage * (1 + (this.state.burn > 0 ? 0.08 : 0));
    const result = this.game.melee(this, a.kind, stats);
    if (a.kind === 'stomp') {
      this.game.effects.shockwave(this.root.position, this.height * 0.7, this.def.colors.glow);
      this.game.effects.dust(this.root.position.clone(), this.height * 0.4, 32, 0xa89a86);
      this.game.effects.shakeCamera(0.55, 0.5);
      this.game.audio.stomp(1.1);
    }
    if (result.hit) {
      this.game.effects.shakeCamera(this.isPlayer ? 0.24 : 0.12, 0.28);
    }
  }

  fireSpecial(a) {
    const sp = a.special;
    const head = this.headWorld(new THREE.Vector3());
    const aimMonster = this.findBeamAim(sp.range);
    const aimPoint = aimMonster
      ? aimMonster.root.position.clone().setY(aimMonster.root.position.y + aimMonster.height * 0.55)
      : null;
    const aimFrom = (origin) => (aimPoint ? aimPoint.clone().sub(origin).normalize() : this.forward);
    const dir = aimFrom(head);
    a.beamAim = aimMonster;
    if (sp.type === 'beam' || sp.type === 'freezeBeam') {
      const beam = this.game.spawnBeam(this, head, dir, sp, 1.25, this.isPlayer ? 2.6 : 2.2);
      this.activeBeams.push(beam);
      this.beamStop = this.game.audio.beamStart(this.def, 1.4);
      this.game.effects.explosion(head, 0.35, sp.color);
      this.game.hud?.cinematic(this, 1.0);
    } else if (sp.type === 'tripleBeam') {
      const origins = [];
      if (this.rig.necks) for (const n of this.rig.necks) {
        const p = new THREE.Vector3(); n.head.getWorldPosition(p); origins.push(p);
      } else origins.push(head);
      for (const o of origins) {
        this.activeBeams.push(this.game.spawnBeam(this, o, aimFrom(o), sp, 1.15, 1.6, 0.4));
      }
      this.beamStop = this.game.audio.beamStart(this.def, 1.4);
      this.game.hud?.cinematic(this, 1.0);
    } else if (sp.type === 'godrays') {
      const origins = [head.clone().add(new THREE.Vector3(-this.height * 0.18, 0, 0)), head, head.clone().add(new THREE.Vector3(this.height * 0.18, 0, 0))];
      for (const o of origins) this.activeBeams.push(this.game.spawnBeam(this, o, aimFrom(o), sp, 1.0, 1.1, 0.35));
      this.beamStop = this.game.audio.beamStart(this.def, 1.2);
      this.game.hud?.cinematic(this, 1.0);
    } else if (sp.type === 'pulse' || sp.type === 'shockwave' || sp.type === 'cleave' || sp.type === 'firestorm' || sp.type === 'acid') {
      const center = this.root.position.clone().addScaledVector(dir, this.height * 0.28);
      const radius = sp.range;
      this.game.aoe(this, center, radius, sp.damage, 26, sp.type, { building: true, color: sp.color });
      this.game.effects.shockwave(this.root.position, radius, sp.color);
      if (sp.type === 'firestorm') this.game.effects.fire(center, 60, sp.color, 5);
      if (sp.type === 'acid') this.game.effects.acid(center, 50, sp.color);
      if (sp.type === 'cleave') this.game.effects.sparks(center, 40, sp.color, 30);
      this.game.effects.explosion(center, sp.type === 'pulse' ? 1.3 : 0.8, sp.color);
      this.game.audio.explosion(1.2);
      this.game.effects.shakeCamera(0.9, 0.8);
    }
  }

  findBeamAim(range) {
    let best = null, bd = range;
    for (const m of this.game.monsters) {
      if (m === this || m.dead || m.team === this.team) continue;
      const d = m.root.position.distanceTo(this.root.position);
      if (d < bd) { bd = d; best = m; }
    }
    return best;
  }

  updateSpecial(dt, a) {
    const sp = a.special;
    if (!this.activeBeams.length) return;
    a.tick = (a.tick || 0) - dt;
    // update beam ends each frame
    const head = this.headWorld(new THREE.Vector3());
    for (const beam of this.activeBeams) {
      if (beam.dead) continue;
      const origin = beam.start || head;
      let dir = this.forward;
      if (a.beamAim && !a.beamAim.dead) {
        const aim = a.beamAim.root.position.clone().setY(a.beamAim.root.position.y + a.beamAim.height * 0.55);
        dir = aim.sub(origin).normalize();
      }
      const res = this.game.beamTarget(this, origin, dir, sp.range);
      beam.target = res;
      beam.effect.end.copy(res.point);
      beam.effect.start.copy(origin);
      beam.effect.updateStart = (v) => { v.copy(origin); };
      if (a.tick <= 0) {
        a.tick = 0.12;
        this.game.beamDamage(this, res, sp, beam);
      }
    }
  }

  endBeams() {
    for (const b of this.activeBeams) {
      if (b.effect) b.effect.life = Math.min(b.effect.life, 0.08);
      b.dead = true;
    }
    this.activeBeams = [];
    try { this.beamStop?.(); } catch {}
    this.beamStop = null;
  }

  followGrab(dt) {
    const attacker = this.grabbedBy;
    if (!attacker || attacker.dead) { this.releaseGrab(); return; }
    const f = attacker.forward;
    const targetPos = attacker.root.position.clone().addScaledVector(f, attacker.radius + this.radius * 0.8);
    targetPos.y = Math.max(0, attacker.state.jumpY + this.height * 0.08);
    this.root.position.lerp(targetPos, 1 - Math.exp(-dt * 12));
    this.yaw = attacker.yaw + Math.PI;
    this.root.rotation.y = this.yaw;
    this.state.speed = 0;
    this.velocity.set(0, 0, 0);
    this.balance = 0;
    if (attacker.state.attack?.kind !== 'grab') this.releaseGrab();
  }

  releaseGrab() {
    this.grabbedBy = null;
    this.state.grabbed = false;
    this.balance = 30;
    this.invuln = 0.3;
  }

  throwGrabbed() {
    const t = this.grabTarget;
    if (!t) return;
    const f = this.forward;
    t.releaseGrab();
    t.velocity.copy(f).multiplyScalar(42).add(new THREE.Vector3(0, 12, 0));
    t.knockdown(f, 24);
    this.grabTarget = null;
    this.game.effects.shockwave(this.root.position, this.height * 0.5, this.def.colors.glow);
    this.game.audio.impact(1.6);
    this.game.effects.shakeCamera(0.7, 0.6);
  }

  takeDamage(amount, attacker, hitPoint, force = 10, type = 'impact') {
    if (this.dead || this.invuln > 0) return 0;
    if (this.state.grabbed) amount *= 0.7;
    let dmg = amount;
    let blocked = false;
    if (this.state.block && attacker) {
      const toAtt = attacker.root.position.clone().sub(this.root.position).setY(0).normalize();
      if (toAtt.dot(this.forward) > -0.1) {
        dmg *= 0.28;
        blocked = true;
        this.stamina = Math.max(0, this.stamina - amount * 0.7);
        this.game.effects.sparks(hitPoint || this.root.position.clone().setY(this.height * 0.55), 10, 0x9fd8ff, 12);
        this.game.audio.impact(0.5);
        if (this.stamina <= 0) { this.state.block = false; this.stagger(attacker); }
      }
    }
    this.hp -= dmg;
    this.state.hitPulse = 1;
    this.state.hitFlash = 1;
    this.state.hitDir = Math.random() > 0.5 ? 1 : -1;
    this.balance -= force * (blocked ? 0.25 : 1.2);
    const p = hitPoint || this.root.position.clone().setY(this.height * 0.55);
    this.game.effects.sparks(p, Math.round(6 + dmg * 0.3), type === 'freeze' ? 0x9feaff : type === 'acid' ? 0xc6ff4d : 0xffc46b, 12 + force);
    if (dmg > 12) this.game.effects.blood(p, Math.round(4 + dmg * 0.12));
    this.game.audio.impact(clamp(dmg / 18, 0.4, 1.6));
    if (this.isPlayer) this.game.effects.shakeCamera(clamp(dmg / 30, 0.12, 0.5), 0.35);
    if (attacker) {
      const dir = this.root.position.clone().sub(attacker.root.position).setY(0).normalize();
      if (!blocked) this.velocity.addScaledVector(dir, force * (1.4 - this.mass / 250000));
      if (type === 'burn') this.state.burn = Math.max(this.state.burn, 4);
      if (type === 'freeze') this.state.freeze = Math.max(this.state.freeze, 4);
      if (type === 'acid') this.state.shock = Math.max(this.state.shock, 4);
    }
    if (!blocked && this.balance <= 0 && !this.state.ragdoll) {
      const dir = attacker ? this.root.position.clone().sub(attacker.root.position).setY(0).normalize() : this.forward.clone().negate();
      this.knockdown(dir, force + 8);
    }
    this.lastDamageTime = 0;
    if (this.hp <= 0) this.die(attacker);
    this.game.hud?.onDamage?.(this, dmg, blocked);
    return dmg;
  }

  stagger(attacker) {
    if (attacker) {
      const dir = this.root.position.clone().sub(attacker.root.position).setY(0).normalize();
      this.velocity.addScaledVector(dir, 8);
    }
    this.state.hitPulse = 1;
  }

  knockdown(dir, force) {
    if (this.dead) return;
    this.state.ragdoll = true;
    this.state.attack = null;
    this.state.block = false;
    this.state.dodge = 0;
    this.ragdollTime = 2.3 + Math.random() * 0.8;
    this.ragdollTotal = this.ragdollTime;
    this.balance = 0;
    const d = dir.clone().setY(0).normalize();
    this.velocity.addScaledVector(d, Math.min(30, force * 1.1));
    const f = this.forward;
    const side = d.dot(this.right);
    const front = d.dot(f);
    this.fallPitch = clamp(-front * 1.35, -1.35, 1.35);
    this.fallRoll = clamp(side * 1.3, -1.3, 1.3);
    if (Math.abs(this.fallPitch) < 0.2 && Math.abs(this.fallRoll) < 0.2) this.fallPitch = 1.2;
    this.game.effects.dust(this.root.position.clone(), this.height * 0.3, 20, 0xa89a86);
    this.game.effects.shakeCamera(0.45, 0.5);
    this.game.audio.impact(1.4);
    this.game.hud?.toast(`${this.name} DOWN`, 'warn');
  }

  updateRagdoll(dt, dead) {
    this.state.ragdoll = true;
    const t = dead ? 0 : this.ragdollTime;
    // slide
    this.velocity.x = damp(this.velocity.x, 0, 2.2, dt);
    this.velocity.z = damp(this.velocity.z, 0, 2.2, dt);
    this.root.position.x += this.velocity.x * dt;
    this.root.position.z += this.velocity.z * dt;
    const speed = Math.hypot(this.velocity.x, this.velocity.z);
    const hit = this.game.city.collideCircle(this.root.position.x, this.root.position.z, this.radius * 0.85);
    if (hit.pushX || hit.pushZ) {
      this.root.position.x += hit.pushX;
      this.root.position.z += hit.pushZ;
      if (hit.hit && speed > 5) {
        hit.hit.damage(speed * 3, this.root.position.clone().setY(this.height * 0.25), { source: this });
        this.game.effects.dust(this.root.position.clone(), this.radius, 12, 0x9a8f80);
        this.game.audio.impact(1);
      }
      this.velocity.multiplyScalar(0.4);
    }
    this.root.position.x = clamp(this.root.position.x, -420, 420);
    this.root.position.z = clamp(this.root.position.z, -420, 420);
    if (speed > 4 && Math.random() < 0.15) {
      this.game.effects.dust(this.root.position.clone(), this.radius * 0.8, 3, 0xa89a86);
    }
    if (!dead) {
      this.ragdollTime -= dt;
      if (this.ragdollTime > 0.55) {
        const p = clamp(1 - this.ragdollTime / 0.4, 0, 1);
        const e = 1 - Math.pow(1 - p, 3);
        this.visual.rotation.x = this.fallPitch * e;
        this.visual.rotation.z = this.fallRoll * e;
      } else {
        const k = clamp(this.ragdollTime / 0.55, 0, 1);
        this.visual.rotation.x = this.fallPitch * k;
        this.visual.rotation.z = this.fallRoll * k;
        if (this.ragdollTime <= 0) {
          this.state.ragdoll = false;
          this.state.recovery = 0.4;
          this.balance = 55;
          this.invuln = 0.55;
          this.visual.rotation.set(0, 0, 0);
          this.velocity.set(0, 0, 0);
          this.game.hud?.toast(`${this.name} RECOVERS`, 'info');
        }
      }
    } else {
      this.deathTimer += dt;
      const e = 1 - Math.pow(1 - clamp(this.deathTimer / 0.8, 0, 1), 3);
      this.visual.rotation.x = this.fallPitch * e;
      this.visual.rotation.z = this.fallRoll * e;
      this.healthBar.visible = false;
    }
    this.root.rotation.y = this.yaw;
  }

  die(attacker) {
    if (this.dead) return;
    this.dead = true;
    this.state.dead = true;
    this.state.ragdoll = true;
    this.state.attack = null;
    this.state.block = false;
    this.hp = 0;
    this.deathTimer = 0;
    this.healthBar.visible = false;
    this.rig.teamRingMat.opacity = 0.05;
    this.endBeams();
    if (this.grabbedBy) { this.grabbedBy.grabTarget = null; this.grabbedBy = null; this.state.grabbed = false; }
    if (this.grabTarget) { this.grabTarget.releaseGrab(); this.grabTarget = null; }
    const dir = attacker
      ? this.root.position.clone().sub(attacker.root.position).setY(0).normalize()
      : this.forward.clone().negate();
    const side = dir.dot(this.right);
    const front = dir.dot(this.forward);
    this.fallPitch = clamp(-front * 1.35, -1.35, 1.35);
    this.fallRoll = clamp(side * 1.3, -1.3, 1.3);
    if (Math.abs(this.fallPitch) < 0.2 && Math.abs(this.fallRoll) < 0.2) this.fallPitch = 1.2;
    this.velocity.addScaledVector(dir, 20);
    this.game.effects.explosion(this.root.position.clone().setY(this.height * 0.4), 1.1, this.def.colors.glow);
    this.game.audio.explosion(1.2);
    this.game.onMonsterDeath?.(this, attacker);
    this.game.hud?.toast(`${this.name} DEFEATED`, 'kill');
  }

  statusUpdate(dt) {
    if (this.state.burn > 0) {
      this.state.burn -= dt;
      this.hp -= dt * 5;
      if (Math.random() < dt * 8) this.game.effects.fire(this.root.position.clone().setY(this.height * (0.3 + Math.random() * 0.5)), 2, 0xff6a2e, 1.6);
      if (this.hp <= 0) this.die(null);
    }
    if (this.state.freeze > 0) {
      this.state.freeze -= dt;
      if (Math.random() < dt * 4) this.game.effects.ice(this.root.position.clone().setY(this.height * 0.4), 2);
    }
    if (this.state.shock > 0) {
      this.state.shock -= dt;
      this.hp -= dt * 3;
      if (Math.random() < dt * 5) this.game.effects.sparks(this.root.position.clone().setY(this.height * 0.5), 2, 0xc6ff4d, 10);
      if (this.hp <= 0) this.die(null);
    }
  }

  updateVisual(dt) {
    // materials hit/status tint
    const skin = this.rig.mats?.skin;
    if (skin) {
      const flash = this.state.hitFlash;
      if (this.state.freeze > 0) { skin.emissive.setHex(0x2a6c8f); skin.emissiveIntensity = 0.5; }
      else if (this.state.burn > 0) { skin.emissive.setHex(0x6a1e08); skin.emissiveIntensity = 0.6; }
      else if (flash > 0) { skin.emissive.setHex(0x5e1a12); skin.emissiveIntensity = flash * 0.45; }
      else { skin.emissiveIntensity = 0; }
    }
    animateMonster(this.rig, this.state, this.game.time, dt);
    // ragdoll / death visual transform (after animation so it wins)
    if (this.state.ragdoll || this.state.dead) {
      if (this.state.dead) {
        const e = 1 - Math.pow(1 - clamp(this.deathTimer / 0.8, 0, 1), 3);
        this.visual.rotation.x = this.fallPitch * e;
        this.visual.rotation.z = this.fallRoll * e;
      } else {
        const t = this.ragdollTime;
        if (t > 0.55) {
          const p = clamp(1 - t / 0.4, 0, 1);
          const e = 1 - Math.pow(1 - p, 3);
          this.visual.rotation.x = this.fallPitch * e;
          this.visual.rotation.z = this.fallRoll * e;
        } else {
          const k = clamp(t / 0.55, 0, 1);
          this.visual.rotation.x = this.fallPitch * k;
          this.visual.rotation.z = this.fallRoll * k;
        }
      }
      this.visual.position.y = 0;
    } else {
      this.visual.rotation.x = 0;
      this.visual.rotation.z = 0;
    }
    // health bar
    const cam = this.game.camera;
    if (this.healthBar) {
      this.healthBar.position.copy(this.root.position);
      this.healthBar.position.y += this.height * (this.state.ragdoll ? 0.55 : 1.12);
      this.healthBar.quaternion.copy(cam.quaternion);
      const dist = cam.position.distanceTo(this.root.position);
      const menuOpen = this.game.ui?.menu && !this.game.ui.menu.classList.contains('hidden');
      this.healthBar.visible = !this.isPlayer && !this.dead && !menuOpen && dist < 700;
      if (this.healthBar.visible) {
        const ratio = clamp(this.hp / this.maxHp, 0, 1);
        this.healthFill.scale.x = Math.max(0.001, ratio);
        this.healthFill.position.x = -(this.healthWidth / 2) * (1 - ratio);
        this.healthFill.material.color.setHex(ratio > 0.5 ? (TEAM_COLORS[this.team] ?? 0x4fc3ff) : ratio > 0.22 ? 0xffb347 : 0xff3b4d);
      }
    }
    // team ring pulse for player
    if (this.rig.teamRing) {
      this.rig.teamRingMat.opacity = this.isPlayer ? 0.3 + Math.sin(this.game.time * 3) * 0.08 : 0.22;
    }
  }

  dispose() {
    this.endBeams();
    this.game.scene.remove(this.root);
    this.game.scene.remove(this.healthBar);
    this.root.traverse(o => {
      if (o.geometry) o.geometry.dispose?.();
      if (o.material) {
        if (Array.isArray(o.material)) o.material.forEach(m => m.dispose?.());
        else o.material.dispose?.();
      }
    });
    this.healthBar.traverse(o => {
      if (o.geometry) o.geometry.dispose?.();
      if (o.material) o.material.dispose?.();
    });
  }
}
