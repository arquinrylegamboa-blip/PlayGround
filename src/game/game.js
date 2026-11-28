import * as THREE from 'three';
import { Effects } from '../core/effects.js';
import { Environment } from '../world/environment.js';
import { City } from '../world/city.js';
import { Monster } from './monster.js';
import { Input, CameraRig } from './input.js';
import { getMonster, TEAM_NAMES } from '../monsters/data.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const damp = (v, t, l, dt) => v + (t - v) * (1 - Math.exp(-l * dt));

const QUICK_BATTLE = {
  mode: 'battle',
  playerId: 'godzilla2019',
  enemies: ['ghidorah'],
  allies: [],
  weather: 'rain',
  time: 'sunset',
  intro: true,
  title: 'GODZILLA VS KING GHIDORAH',
};

export class Game {
  constructor({ renderer, settings, audio, ui, onExit }) {
    this.renderer = renderer;
    this.settings = settings;
    this.audio = audio;
    this.ui = ui;
    this.onExit = onExit;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(56, window.innerWidth / window.innerHeight, 1, 4500);
    this.camera.position.set(220, 180, 380);
    this.time = 0;
    this.active = false;
    this.paused = false;
    this.mode = 'battle';
    this.config = null;
    this.monsters = [];
    this.player = null;
    this.introTimer = 0;
    this.resultPending = 0;
    this.resultShown = false;
    this.stats = { damageDealt: 0, damageTaken: 0, kills: 0, startTime: 0 };
    this.spectate = false;
    this.hasStarted = false;
    this.objective = '';
    this.subObjective = '';
    this.tmp = new THREE.Vector3();

    this.effects = new Effects(this.scene, settings);
    this.environment = new Environment(this.scene, settings, this.effects);
    this.environment.attachRenderer(renderer);
    this.environment.onThunder = () => this.audio.thunder();
    // Camera-side key light keeps the player titan readable against dark weather.
    this.heroLight = new THREE.DirectionalLight(0xd6e4ff, 0.95);
    this.heroLight.position.set(0, 240, 360);
    this.heroLight.target.position.set(0, 60, 0);
    this.scene.add(this.heroLight, this.heroLight.target);
    this.heroOffset = new THREE.Vector3();
    this.city = new City(this.scene, settings, this.effects, audio);
    this.environment.attachCity(this.city);
    this.city.onDestruction = () => {
      if (this.ui) this.ui.toast('STRUCTURE COLLAPSED', 'info');
    };

    this.input = new Input(renderer, settings);
    this.cameraRig = new CameraRig(this.camera, settings, this.effects);
    this.cameraRig.city = this.city;
    this.input.enabled = false;
    this.input.onAction = (action) => this.ui?.flashAction?.(action);
    this.bindUi();
    this.setWeather('rain', true);
    this.environment.setTimePreset('sunset');
    this.city.setWetness(true);
  }

  bindUi() {
    // The UI calls back into the game for live sandbox/HUD actions.
    if (this.ui) {
      this.ui.game = this;
      this.ui.onGameAction = (action, payload) => this.handleUiAction(action, payload);
    }
  }

  handleUiAction(action, payload) {
    switch (action) {
      case 'pause': this.pause(); break;
      case 'resume': this.resume(); break;
      case 'restart': this.restart(); break;
      case 'menu': this.exitToMenu(); break;
      case 'switch-monster': this.switchPlayer(); break;
      case 'weather': this.cycleWeather(); break;
      case 'time': this.cycleTime(); break;
      case 'set-weather': this.setWeather(payload); break;
      case 'set-time': this.setTime(payload); break;
      case 'spawn-monster': this.spawnSandboxMonster(payload); break;
      case 'spawn-vehicle': this.spawnSandboxVehicle(payload); break;
      case 'spawn-npc': this.spawnSandboxNPC(); break;
      case 'spawn-prop': this.spawnSandboxProp(payload); break;
      case 'spawn-building': this.spawnSandboxBuilding(); break;
      case 'toggle-ai': this.setAI(payload); break;
      case 'possess': this.switchPlayer(payload); break;
      case 'reset-world': this.resetWorld(); break;
      case 'spectate': this.setSpectate(payload); break;
      case 'rematch': this.restart(); break;
      case 'sandbox': this.start({ ...this.config, mode: 'sandbox', title: 'SANDBOX' }); break;
      default: break;
    }
  }

  start(config = QUICK_BATTLE) {
    this.config = JSON.parse(JSON.stringify(config));
    this.mode = config.mode || 'battle';
    this.spectate = !!config.spectate;
    this.resultPending = 0;
    this.resultShown = false;
    this.stats = { damageDealt: 0, damageTaken: 0, kills: 0, startTime: this.time };
    this.ui?.hideMenu();
    this.ui?.closeOverlays();
    this.clearMonsters();
    this.effects.clear();
    this.city.reset();
    this.city.setWetness(config.weather === 'rain' || config.weather === 'storm');
    this.setWeather(config.weather || 'clear', true);
    this.setTime(config.time || 'sunset');
    this.paused = false;
    this.input.reset();
    this.input.enabled = true;
    this.input.yaw = 0;
    this.input.pitch = 0.3;
    this.input.zoomTarget = this.mode === 'battle' ? 185 : 205;
    this.introTimer = config.intro ? 2.4 : 0;

    const spawn = [];
    if (this.spectate) {
      spawn.push({ id: config.playerId || 'godzilla2019', team: 0, ai: true, x: 0, z: 80, yaw: 0 });
      let i = 0;
      for (const id of config.allies || []) {
        spawn.push({ id, team: 0, ai: true, x: -80 + i * 80, z: 110, yaw: 0 });
        i++;
      }
      i = 0;
      for (const id of config.enemies || []) {
        spawn.push({ id, team: 1, ai: true, x: Math.sin(Math.PI + i * 0.4) * -70, z: -90, yaw: Math.PI });
        i++;
      }
    } else {
      spawn.push({ id: config.playerId || 'godzilla2019', team: 0, ai: false, x: 0, z: 90, yaw: 0 });
      let i = 0;
      for (const id of config.allies || []) {
        spawn.push({ id, team: 0, ai: true, x: -90 + i * 90, z: 130, yaw: 0 });
        i++;
      }
      i = 0;
      for (const id of config.enemies || []) {
        const angle = Math.PI + (i - ((config.enemies || []).length - 1) / 2) * 0.35;
        spawn.push({ id, team: 1, ai: true, x: Math.sin(angle) * -70, z: -90, yaw: Math.PI });
        i++;
      }
    }
    // battle spawn positions
    if (this.mode === 'battle') {
      for (const s of spawn) {
        if (s.team === 0 && !s.ai) { s.x = 0; s.z = 48; s.yaw = 0; }
        if (s.team === 1) { s.x = (Math.random() - 0.5) * 36; s.z = -74 - Math.random() * 16; s.yaw = Math.PI; }
      }
    }
    for (const s of spawn) {
      const m = this.addMonster(s.id, { team: s.team, x: s.x, z: s.z, yaw: s.yaw, ai: s.ai });
      if (s.ai === false) this.player = m;
    }
    if (this.spectate) this.player = null;
    if (!this.player && !this.spectate) this.player = this.monsters[0] || null;
    if (this.player) this.player.setPlayer(true);
    if (this.spectate) this.cameraRig.spectate = true;
    else this.cameraRig.spectate = false;

    // camera
    const target = this.player || this.monsters[0];
    if (target) {
      if (this.mode === 'battle' && config.intro) {
        this.camera.position.set(215, 165, 315);
        this.cameraRig.look.set(0, 55, 10);
        this.camera.lookAt(this.cameraRig.look);
        this.cameraRig.startIntro(2.4);
        this.ui?.showVersus?.(this.player, this.monsters.filter(m => m.team !== (this.player?.team ?? 0)));
      } else {
        this.cameraRig.snapTo(target, this.input);
      }
    }
    this.introTimer = this.cameraRig.intro;

    this.active = true;
    this.hasStarted = true;
    this.ui?.showHUD(this);
    this.ui?.closeOverlays();
    this.updateObjective();
    this.ui?.toast(this.mode === 'battle' ? 'BATTLE START' : this.mode === 'sandbox' ? 'SANDBOX ONLINE' : 'FREE ROAM', 'info');
    this.audio.setWeather(this.mode === 'battle' ? (config.weather || 'rain') : (config.weather || 'clear'));
    if (this.mode === 'battle' && config.title) this.ui?.showTitle?.(config.title);
    // spawn roar
    setTimeout(() => {
      if (this.active && this.player && !this.player.dead) this.audio.roar(this.player.def);
    }, 1200);
  }

  addMonster(id, opts) {
    const def = getMonster(id);
    const m = new Monster(this, def, opts);
    this.monsters.push(m);
    return m;
  }

  clearMonsters() {
    for (const m of this.monsters) m.dispose();
    this.monsters = [];
    this.player = null;
  }

  update(dt) {
    if (!this.active || this.paused) return;
    dt = Math.min(dt, 0.05);
    this.time += dt;
    this.environment.update(dt, this.camera);
    this.city.update(dt, this.camera, this.monsters);

    // player intent
    const p = this.player;
    if (p && !p.dead && !this.spectate) {
      const move = this.input.getMove(this.input.yaw);
      p.intent.moveX = move.x;
      p.intent.moveZ = move.z;
      p.intent.run = this.input.run && !this.input.block;
      p.intent.block = this.input.block;
      p.intent.attack = null;
      p.intent.special = false;
      p.intent.dodge = false;
      p.intent.jump = false;
      p.intent.grab = false;
      p.intent.roar = false;
      p.intent.aimYaw = this.input.yaw;
      // soft lock nearest hostile in front for satisfying melee
      let best = null, bestD = 1e9;
      const camF = new THREE.Vector3(-Math.sin(this.input.yaw), 0, -Math.cos(this.input.yaw));
      for (const m of this.monsters) {
        if (m === p || m.dead || m.team === p.team) continue;
        const to = m.root.position.clone().sub(p.root.position).setY(0);
        const d = to.length();
        if (d < p.height * 2.2 && d < bestD) {
          to.normalize();
          if (to.dot(camF) > 0.1) { best = m; bestD = d; }
        }
      }
      const actions = this.input.consumeActions();
      for (const a of actions) {
        if (a === 'light' || a === 'heavy' || a === 'tail' || a === 'bite' || a === 'stomp') {
          if (best) p.intent.aimYaw = Math.atan2(-(best.root.position.x - p.root.position.x), -(best.root.position.z - p.root.position.z));
          p.intent.attack = a;
        } else if (a === 'special') { p.intent.special = true; if (best) p.intent.aimYaw = Math.atan2(-(best.root.position.x - p.root.position.x), -(best.root.position.z - p.root.position.z)); }
        else if (a === 'grab') p.intent.grab = true;
        else if (a === 'roar') p.intent.roar = true;
        else if (a === 'dodge') p.intent.dodge = true;
        else if (a === 'jump') p.intent.jump = true;
      }
      if (p.state.grabbed && this.input.keys.has('KeyG')) p.throwGrabbed?.();
    } else if (p) {
      p.intent.moveX = p.intent.moveZ = 0;
      p.intent.attack = null;
      p.intent.special = false;
      this.input.consumeActions();
    }

    for (const m of this.monsters) m.update(dt);
    this.effects.update(dt, this.camera);
    const target = this.player && !this.player.dead ? this.player : (this.monsters.find(m => !m.dead) || null);
    if (target) {
      if (this.spectate) this.cameraRig.spectate = true;
      this.cameraRig.update(dt, target, this.input, this.monsters);
      // Keep the hero light anchored to the camera so the controlled titan reads
      // clearly even in storm/night lighting.
      this.heroLight.position.copy(this.camera.position).add(this.heroOffset.set(0, 60, 0));
      this.heroLight.target.position.set(target.root.position.x, target.root.position.y + target.height * 0.55, target.root.position.z);
      this.heroLight.target.updateMatrixWorld();
    }
    // cinematic fov; widen on portrait screens so titans stay framed
    const aspect = this.camera.aspect || 1;
    const wantFov = this.cameraRig.cinematic > 0 ? 46 : aspect < 0.8 ? 66 : aspect < 1.1 ? 60 : 56;
    this.camera.fov = damp(this.camera.fov, wantFov, 3, dt);
    this.camera.updateProjectionMatrix();

    if (this.introTimer > 0) {
      this.introTimer -= dt;
      if (this.introTimer <= 0) this.ui?.hideVersus?.();
    }
    this.checkEnd(dt);
    this.updateObjective();
    this.ui?.updateHUD?.(this, dt);
  }

  updateObjective() {
    if (this.mode === 'battle') {
      const enemies = this.monsters.filter(m => m.team !== (this.player?.team ?? 0) && !m.dead);
      const names = enemies.map(m => m.name.toUpperCase()).join(' + ');
      this.objective = enemies.length ? `SLAY ${names}` : 'HOSTILES ELIMINATED';
      this.subObjective = `HONG KONG // ${this.environment.weather.toUpperCase()} // ${this.environment.hour.toFixed(1).padStart(4, '0')}:00`;
    } else if (this.mode === 'sandbox') {
      this.objective = 'SANDBOX';
      this.subObjective = 'SPAWN, POSSESS, DESTROY';
    } else {
      this.objective = 'FREE ROAM';
      this.subObjective = `${this.city.destructionCount} STRUCTURES DESTROYED`;
    }
  }

  checkEnd(dt) {
    if (this.mode !== 'battle' || this.resultShown || this.spectate) return;
    if (!this.player) return;
    const enemies = this.monsters.filter(m => m.team !== this.player.team);
    const allies = this.monsters.filter(m => m.team === this.player.team);
    const enemiesAlive = enemies.some(m => !m.dead);
    const alliesAlive = allies.some(m => !m.dead);
    if (!enemiesAlive && enemies.length) {
      this.resultPending += dt;
      if (this.resultPending > 1.5) this.showResult(true);
    } else if (!alliesAlive) {
      this.resultPending += dt;
      if (this.resultPending > 1.5) this.showResult(false);
    }
  }

  showResult(win) {
    if (this.resultShown) return;
    this.resultShown = true;
    this.paused = true;
    if (win) { this.audio.victory(); this.cameraRig.cinematic = 2; }
    else this.audio.defeat();
    const stats = {
      time: Math.max(1, Math.round(this.time - this.stats.startTime)),
      destroyed: this.city.destructionCount,
      damage: Math.round(this.stats.damageDealt),
      kills: this.stats.kills,
    };
    this.ui?.showResult?.(win, stats);
  }

  onMonsterDeath(monster, attacker) {
    if (attacker === this.player) this.stats.kills++;
    if (monster === this.player) {
      this.stats.damageTaken = Math.round(monster.maxHp);
    }
    if (this.mode === 'battle' && !this.spectate) {
      this.resultPending = 0;
    }
  }

  melee(attacker, kind, stats) {
    const f = attacker.forward;
    const origin = attacker.root.position.clone().addScaledVector(f, attacker.radius * 0.5);
    const centerY = attacker.root.position.y + attacker.height * 0.52;
    const range = stats.range + attacker.radius * 0.45;
    let hits = 0;
    for (const m of this.monsters) {
      if (m === attacker || m.dead) continue;
      if (m.team === attacker.team && this.mode !== 'sandbox') continue;
      const to = m.root.position.clone().sub(attacker.root.position).setY(0);
      const d = to.length();
      if (d > range + m.radius) continue;
      to.normalize();
      const dot = to.dot(f);
      if (dot < Math.cos(Math.min(Math.PI, stats.arc) / 2)) continue;
      const point = m.root.position.clone().setY(centerY + (Math.random() - 0.5) * m.height * 0.2);
      const dmg = stats.damage * (1 - Math.max(0, d - attacker.radius) / (range * 2.2));
      const dealt = m.takeDamage(dmg, attacker, point, stats.force, 'impact');
      if (attacker === this.player) this.stats.damageDealt += dealt;
      this.effects.sparks(point, 10, 0xffd28a, 18);
      this.effects.blood(point, 4);
      hits++;
    }
    // city destruction in front
    const hitPoint = attacker.root.position.clone().addScaledVector(f, stats.range * 0.55).setY(Math.max(2, centerY * 0.7));
    const cityRadius = Math.max(attacker.radius, stats.range * 0.65);
    const before = this.city.destructionCount;
    this.city.damageAt(hitPoint, cityRadius, stats.damage * 0.9, { source: attacker });
    if (this.city.destructionCount > before) this.effects.shakeCamera(0.35, 0.5);
    this.effects.dust(hitPoint, attacker.radius * 0.5, 6, 0x9a8f80);
    return { hit: hits, point: hitPoint };
  }

  aoe(attacker, center, radius, damage, force, type = 'impact', opts = {}) {
    let hits = 0;
    for (const m of this.monsters) {
      if (m === attacker || m.dead) continue;
      if (m.team === attacker.team) continue;
      const d = m.root.position.distanceTo(center);
      if (d > radius + m.radius) continue;
      const fall = 1 - d / (radius + m.radius);
      const dir = m.root.position.clone().sub(center).setY(0).normalize();
      const status = type === 'firestorm' ? 'burn' : type === 'acid' ? 'acid' : type === 'freezeBeam' ? 'freeze' : 'impact';
      const dealt = m.takeDamage(damage * (0.45 + fall * 0.75), attacker, center.clone(), force * (0.5 + fall), status);
      if (attacker === this.player) this.stats.damageDealt += dealt;
      hits++;
    }
    if (opts.building !== false) {
      this.city.damageAt(center, radius, damage * 0.8, { source: attacker });
    }
    if (opts.color) this.effects.shockwave(center, radius, opts.color);
    this.effects.shakeCamera(0.3 + radius / 100, 0.5);
    return hits;
  }

  roarWave(monster) {
    const center = monster.root.position;
    this.effects.shockwave(center, monster.height * 0.9, monster.def.colors.glow);
    this.effects.dust(center.clone(), monster.radius * 1.2, 24, 0x9a8f80);
    this.effects.shakeCamera(0.3, 0.7);
    this.cameraRig.cinematic = Math.max(this.cameraRig.cinematic, 0.5);
    for (const m of this.monsters) {
      if (m === monster || m.dead) continue;
      const d = m.root.position.distanceTo(center);
      if (d < monster.height * 2.6) {
        if (m.team === monster.team) {
          m.stamina = Math.min(m.maxStamina, m.stamina + 18);
        } else {
          m.balance -= 12;
          const dir = m.root.position.clone().sub(center).setY(0).normalize();
          m.velocity.addScaledVector(dir, 5);
          if (m.balance <= 0) m.knockdown(dir, 6);
        }
      }
    }
    for (const ped of this.city.pedestrians) {
      if (ped.group.position.distanceTo(center) < 220) ped.panic = 1;
    }
  }

  findGrabTarget(monster) {
    const f = monster.forward;
    let best = null, bd = 1e9;
    for (const m of this.monsters) {
      if (m === monster || m.dead) continue;
      if (m.team === monster.team) continue;
      const to = m.root.position.clone().sub(monster.root.position).setY(0);
      const d = to.length();
      if (d > monster.radius + m.radius + monster.height * 0.22) continue;
      to.normalize();
      if (to.dot(f) < 0.15) continue;
      if (d < bd) { bd = d; best = m; }
    }
    return best;
  }

  beamTarget(monster, origin, dir, range) {
    const ray = new THREE.Ray(origin, dir.clone().normalize());
    let best = { point: origin.clone().addScaledVector(dir, range), distance: range, monster: null, building: null };
    for (const m of this.monsters) {
      if (m === monster || m.dead) continue;
      if (m.team === monster.team) continue;
      const center = m.root.position.clone().add(new THREE.Vector3(0, m.height * 0.55, 0));
      const sphere = new THREE.Sphere(center, m.height * 0.32);
      const hit = ray.intersectSphere(sphere, new THREE.Vector3());
      if (hit) {
        const d = hit.distanceTo(origin);
        if (d < best.distance) best = { point: hit, distance: d, monster: m, building: null };
      }
    }
    const b = this.city.raycastBuilding(origin, dir, Math.min(range, best.distance));
    if (b) best = { point: b.point, distance: b.distance, monster: null, building: b.building };
    if (dir.y < -0.02) {
      const t = -origin.y / dir.y;
      if (t > 0 && t < best.distance) {
        best = { point: origin.clone().addScaledVector(dir, t).setY(0.6), distance: t, monster: null, building: null };
      }
    }
    return best;
  }

  spawnBeam(monster, origin, dir, sp, width, duration, offset = 0) {
    const start = origin.clone();
    if (offset) start.add(new THREE.Vector3((Math.random() - 0.5) * offset, (Math.random() - 0.5) * offset, (Math.random() - 0.5) * offset));
    const res = this.beamTarget(monster, start, dir, sp.range);
    const effect = this.effects.beam({ start, end: res.point, color: sp.color, secondary: sp.secondary, width, duration });
    return { start, effect, target: res, dead: false };
  }

  beamDamage(monster, res, sp, beam) {
    const dmg = sp.damage * 0.28;
    const type = sp.type === 'freezeBeam' ? 'freeze' : 'impact';
    if (res.monster) {
      const dir = res.monster.root.position.clone().sub(monster.root.position).setY(0).normalize();
      const dealt = res.monster.takeDamage(dmg, monster, res.point, 6, type);
      if (monster === this.player) this.stats.damageDealt += dealt;
      this.effects.sparks(res.point, 6, sp.color, 12);
    } else if (res.building) {
      res.building.damage(dmg * 1.5, res.point, { source: monster });
      this.effects.glass(res.point, 5);
      this.effects.dust(res.point, 3, 4, 0x9a8f80);
    } else {
      this.city.damageAt(res.point, 9, dmg * 0.8, { source: monster });
      this.effects.dust(res.point, 5, 4, 0x9a8f80);
    }
    if (sp.type === 'freezeBeam') this.effects.ice(res.point, 5);
    if (monster === this.player) this.effects.shakeCamera(0.1, 0.2);
  }

  cycleWeather() {
    const order = ['clear', 'rain', 'storm', 'fog'];
    const i = order.indexOf(this.environment.weather);
    this.setWeather(order[(i + 1) % order.length]);
  }

  setWeather(kind, silent = false) {
    this.environment.setWeather(kind, true);
    this.audio.setWeather(kind);
    this.city.setWetness(kind === 'rain' || kind === 'storm');
    this.ui?.setWeatherLabel?.(kind);
    if (!silent) this.ui?.toast(`WEATHER // ${kind.toUpperCase()}`, 'info');
  }

  cycleTime() {
    const order = ['sunrise', 'day', 'sunset', 'night'];
    const names = ['sunrise', 'day', 'sunset', 'night'];
    const cur = this.environment.hour;
    let idx = cur < 8 ? 0 : cur < 16.5 ? 1 : cur < 20 ? 2 : 3;
    this.setTime(order[(idx + 1) % order.length]);
  }

  setTime(preset) {
    this.environment.setTimePreset(preset);
    this.ui?.setTimeLabel?.(preset);
    this.ui?.toast(`TIME // ${preset.toUpperCase()}`, 'info');
  }

  pause() {
    if (!this.active || this.resultShown) return;
    this.paused = true;
    this.ui?.openPause?.();
  }

  resume() {
    this.paused = false;
    this.ui?.closeOverlays();
  }

  restart() {
    const cfg = JSON.parse(JSON.stringify(this.config || QUICK_BATTLE));
    this.resultShown = false;
    this.start(cfg);
  }

  exitToMenu() {
    this.active = false;
    this.paused = false;
    this.input.enabled = false;
    this.input.reset();
    this.ui?.hideHUD?.();
    this.ui?.closeOverlays();
    this.ui?.showMenu?.();
    this.clearMonsters();
    this.effects.clear();
    this.onExit?.();
  }

  switchPlayer(index = null) {
    const alive = this.monsters.filter(m => !m.dead);
    if (!alive.length) return;
    let next;
    if (typeof index === 'number' && this.monsters[index] && !this.monsters[index].dead) next = this.monsters[index];
    else {
      const cur = this.player ? alive.indexOf(this.player) : -1;
      next = alive[(cur + 1) % alive.length];
    }
    if (next === this.player) return;
    if (this.player) this.player.setPlayer(false);
    this.player = next;
    next.setPlayer(true);
    this.cameraRig.snapTo(next, this.input);
    this.ui?.toast(`NOW CONTROLLING ${next.name.toUpperCase()}`, 'info');
    this.updateObjective();
  }

  setSpectate(on) {
    this.spectate = !!on;
    this.cameraRig.spectate = this.spectate;
    if (this.player) { this.player.setPlayer(false); this.player.ai = this.player.ai || null; }
    if (!this.spectate && this.player) this.player.setPlayer(true);
    this.ui?.toast(this.spectate ? 'SPECTATOR MODE' : 'CONTROL RESTORED', 'info');
  }

  setAI(on) {
    for (const m of this.monsters) {
      if (m === this.player) continue;
      m.setAI(on);
    }
    this.ui?.toast(`AI ${on ? 'ENABLED' : 'DISABLED'}`, 'info');
  }

  spawnSandboxMonster(id, opts = {}) {
    if (!id) return;
    const p = this.spawnPoint(130);
    const team = opts.team ?? 1;
    const m = this.addMonster(id, { team, x: p.x, z: p.z, yaw: Math.atan2(-(this.player?.root.position.x - p.x || 0), -(this.player?.root.position.z - p.z || -1)), ai: opts.ai !== false });
    this.effects.dust(m.root.position.clone(), m.radius, 20, 0xa89a86);
    this.ui?.toast(`${m.name.toUpperCase()} SPAWNED`, 'info');
    if (this.ui?.refreshSandbox) this.ui.refreshSandbox(this);
    return m;
  }

  spawnSandboxVehicle(type = 'car') {
    const p = this.spawnPoint(80);
    const v = this.city.spawnVehicle(type, p);
    this.ui?.toast('VEHICLE DEPLOYED', 'info');
    return v;
  }

  spawnSandboxNPC() {
    const p = this.spawnPoint(70);
    const n = this.city.spawnNPC(p);
    this.ui?.toast('CIVILIAN DEPLOYED', 'info');
    return n;
  }

  spawnSandboxProp(type = 'tree') {
    const p = this.spawnPoint(90);
    const n = this.city.spawnProp(type, p);
    this.ui?.toast('PROP DEPLOYED', 'info');
    return n;
  }

  spawnSandboxBuilding() {
    const p = this.spawnPoint(150);
    const b = this.city.spawnBuilding(p.x, p.z, 24 + Math.random() * 18, 24 + Math.random() * 18, 60 + Math.random() * 120);
    this.ui?.toast('STRUCTURE DEPLOYED', 'info');
    return b;
  }

  spawnPoint(dist = 100) {
    const base = this.player ? this.player.root.position : this.camera.position;
    const f = new THREE.Vector3(-Math.sin(this.input.yaw), 0, -Math.cos(this.input.yaw));
    const p = base.clone().addScaledVector(f, dist);
    p.y = 0;
    p.x = clamp(p.x, -380, 380);
    p.z = clamp(p.z, -380, 380);
    const hit = this.city.collideCircle(p.x, p.z, 20);
    p.x += hit.pushX; p.z += hit.pushZ;
    return p;
  }

  resetWorld() {
    this.city.reset();
    this.effects.clear();
    this.ui?.toast('WORLD RESET', 'info');
  }

  setWeatherLabel() {}
}
