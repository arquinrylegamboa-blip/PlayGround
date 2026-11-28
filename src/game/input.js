import * as THREE from 'three';

const KEY_ACTIONS = {
  KeyJ: 'light', KeyK: 'heavy', KeyF: 'tail', KeyB: 'bite', KeyH: 'stomp',
  KeyE: 'special', KeyG: 'grab', KeyR: 'roar', KeyQ: 'dodge', Space: 'jump',
};

export class Input {
  constructor(renderer, settings) {
    this.renderer = renderer;
    this.settings = settings;
    this.keys = new Set();
    this.actions = [];
    this.dragging = false;
    this.dragMoved = 0;
    this.dragButton = 0;
    this.lastX = 0;
    this.lastY = 0;
    this.yaw = 0;
    this.pitch = 0.24;
    this.distance = 195;
    this.zoomTarget = 195;
    this.joystick = { x: 0, y: 0, active: false, pointerId: null };
    this.touchCamera = { active: false, id: null, x: 0, y: 0 };
    this.enabled = false;
    this.onAction = null;
    this.el = renderer.domElement;
    this.bind();
  }

  bind() {
    window.addEventListener('keydown', e => {
      if (!this.enabled) return;
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      const action = KEY_ACTIONS[e.code];
      if (action) {
        e.preventDefault();
        if (!e.repeat) this.trigger(action);
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') e.preventDefault();
      if (e.code === 'KeyC') e.preventDefault();
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', e => { this.keys.delete(e.code); });
    window.addEventListener('blur', () => { this.keys.clear(); this.joystick.active = false; this.joystick.x = this.joystick.y = 0; });

    this.el.addEventListener('contextmenu', e => e.preventDefault());
    this.el.addEventListener('pointerdown', e => {
      if (!this.enabled) return;
      if (e.pointerType === 'touch') {
        if (e.clientX > window.innerWidth * 0.5) {
          this.touchCamera.active = true; this.touchCamera.id = e.pointerId;
          this.touchCamera.x = e.clientX; this.touchCamera.y = e.clientY;
          this.el.setPointerCapture?.(e.pointerId);
          e.preventDefault();
        }
        return;
      }
      this.dragging = true;
      this.dragButton = e.button;
      this.dragMoved = 0;
      this.lastX = e.clientX; this.lastY = e.clientY;
      this.el.setPointerCapture?.(e.pointerId);
      e.preventDefault();
    });
    this.el.addEventListener('pointermove', e => {
      if (e.pointerType === 'touch' && this.touchCamera.active && e.pointerId === this.touchCamera.id) {
        const dx = e.clientX - this.touchCamera.x;
        const dy = e.clientY - this.touchCamera.y;
        this.touchCamera.x = e.clientX; this.touchCamera.y = e.clientY;
        this.yaw -= dx * 0.006;
        this.pitch = Math.max(-0.25, Math.min(0.95, this.pitch + dy * 0.005));
        return;
      }
      if (!this.dragging) return;
      const dx = e.clientX - this.lastX;
      const dy = e.clientY - this.lastY;
      this.lastX = e.clientX; this.lastY = e.clientY;
      this.dragMoved += Math.abs(dx) + Math.abs(dy);
      this.yaw -= dx * 0.0045;
      this.pitch = Math.max(-0.3, Math.min(1.05, this.pitch + dy * 0.0038));
    });
    const endDrag = e => {
      if (e.pointerType === 'touch') {
        if (e.pointerId === this.touchCamera.id) this.touchCamera.active = false;
        return;
      }
      if (!this.dragging) return;
      const moved = this.dragMoved;
      const button = this.dragButton;
      this.dragging = false;
      if (moved < 6) this.trigger(button === 2 ? 'heavy' : 'light');
    };
    this.el.addEventListener('pointerup', endDrag);
    this.el.addEventListener('pointercancel', e => {
      if (e.pointerType === 'touch') this.touchCamera.active = false;
      else this.dragging = false;
    });
    this.el.addEventListener('wheel', e => {
      if (!this.enabled) return;
      this.zoomTarget = Math.max(90, Math.min(520, this.zoomTarget + e.deltaY * 0.35));
      e.preventDefault();
    }, { passive: false });
  }

  attachJoystick(el, knob) {
    this.joystickEl = el;
    this.joystickKnob = knob;
    const setFromEvent = e => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      let dx = e.clientX - cx, dy = e.clientY - cy;
      const max = r.width * 0.38;
      const len = Math.hypot(dx, dy);
      if (len > max) { dx = dx / len * max; dy = dy / len * max; }
      this.joystick.x = dx / max;
      this.joystick.y = dy / max;
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    el.addEventListener('pointerdown', e => {
      if (!this.enabled) return;
      e.preventDefault(); e.stopPropagation();
      this.joystick.active = true;
      this.joystick.pointerId = e.pointerId;
      el.setPointerCapture?.(e.pointerId);
      setFromEvent(e);
    });
    el.addEventListener('pointermove', e => {
      if (!this.joystick.active || e.pointerId !== this.joystick.pointerId) return;
      e.preventDefault(); e.stopPropagation();
      setFromEvent(e);
    });
    const end = e => {
      if (e.pointerId !== this.joystick.pointerId) return;
      this.joystick.active = false;
      this.joystick.pointerId = null;
      this.joystick.x = this.joystick.y = 0;
      knob.style.transform = 'translate(0px, 0px)';
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
  }

  trigger(action) {
    this.actions.push(action);
    this.onAction?.(action);
  }

  get block() {
    return this.keys.has('KeyC') || this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || this.mobileBlock;
  }
  get run() { return this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || this.mobileRun; }

  getMove(cameraYaw) {
    let x = 0, z = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) z += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) z -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1;
    if (this.joystick.active) {
      x += this.joystick.x;
      z += -this.joystick.y;
    }
    const len = Math.hypot(x, z);
    if (len > 1) { x /= len; z /= len; }
    if (len < 0.05) return { x: 0, z: 0, active: false };
    // camera-relative basis: forward = (-sin yaw, -cos yaw), right = (cos yaw, -sin yaw)
    const fx = -Math.sin(cameraYaw), fz = -Math.cos(cameraYaw);
    const rx = Math.cos(cameraYaw), rz = -Math.sin(cameraYaw);
    return { x: fx * z + rx * x, z: fz * z + rz * x, active: true };
  }

  consumeActions() {
    const a = this.actions;
    this.actions = [];
    return a;
  }

  reset() {
    this.keys.clear();
    this.actions = [];
    this.dragging = false;
    this.joystick.active = false;
    this.joystick.x = this.joystick.y = 0;
    this.mobileBlock = false;
    this.mobileRun = false;
  }
}

export class CameraRig {
  constructor(camera, settings, effects) {
    this.camera = camera;
    this.settings = settings;
    this.effects = effects;
    this.position = new THREE.Vector3(0, 100, 260);
    this.look = new THREE.Vector3(0, 50, 0);
    this.target = new THREE.Vector3();
    this.currentDistance = 240;
    this.currentYaw = 0;
    this.currentPitch = 0.2;
    this.intro = 0;
    this.introDuration = 0;
    this.introFrom = new THREE.Vector3();
    this.introFromLook = new THREE.Vector3();
    this.cinematic = 0;
    this.cinematicFocus = null;
    this.spectate = false;
    this.spectateAngle = 0;
    this.tmp = new THREE.Vector3();
  }

  snapTo(target, input) {
    this.target.copy(target.root.position);
    this.currentYaw = input.yaw;
    this.currentPitch = input.pitch;
    this.currentDistance = input.zoomTarget || input.distance;
    const off = this.offset(this.currentYaw, this.currentPitch, this.currentDistance, target);
    this.position.copy(target.root.position).add(off);
    this.look.copy(target.root.position).add(new THREE.Vector3(0, target.height * 0.55, 0));
    this.camera.position.copy(this.position);
    this.camera.lookAt(this.look);
  }

  offset(yaw, pitch, distance, target) {
    const h = target.height;
    // Pull back on portrait/narrow screens so the whole titan stays framed.
    const aspect = this.camera?.aspect || 1;
    const fit = aspect < 1 ? Math.min(1.32, 1 + (1 - aspect) * 0.55) : 1;
    const d = distance * fit;
    return new THREE.Vector3(
      Math.sin(yaw) * Math.cos(pitch) * d,
      Math.sin(pitch) * d + h * 0.3,
      Math.cos(yaw) * Math.cos(pitch) * d,
    );
  }

  startIntro(duration = 2.2) {
    this.intro = duration;
    this.introDuration = duration;
    this.introFrom.copy(this.camera.position);
    this.introFromLook.copy(this.look);
  }

  update(dt, target, input, monsters = []) {
    const shake = this.effects.getShake(dt);
    this.cinematic = Math.max(0, this.cinematic - dt);
    if (this.intro > 0) {
      this.intro -= dt;
      const t = 1 - Math.max(0, this.intro) / this.introDuration;
      const e = 1 - Math.pow(1 - t, 3);
      const off = this.offset(input.yaw, input.pitch, input.distance, target);
      const desired = target.root.position.clone().add(off);
      const desiredLook = target.root.position.clone().add(new THREE.Vector3(0, target.height * 0.55, 0));
      // cinematic sweep from a high, wide angle
      const from = this.introFrom;
      const lookFrom = this.introFromLook;
      this.camera.position.lerpVectors(from, desired, e);
      this.look.lerpVectors(lookFrom, desiredLook, e);
      this.camera.lookAt(this.look);
      return;
    }
    if (this.spectate) {
      this.spectateAngle += dt * 0.12;
      const center = new THREE.Vector3();
      let count = 0;
      for (const m of monsters) if (!m.dead) { center.add(m.root.position); count++; }
      if (count) center.divideScalar(count);
      else center.set(0, 0, 0);
      const radius = 205;
      this.camera.position.set(center.x + Math.sin(this.spectateAngle) * radius, 126 + Math.sin(this.spectateAngle * 0.7) * 28, center.z + Math.cos(this.spectateAngle) * radius);
      this.look.set(center.x, 62, center.z);
      this.camera.lookAt(this.look);
      return;
    }
    this.target.lerp(target.root.position, 1 - Math.exp(-dt * 8));
    this.currentYaw = input.yaw;
    this.currentPitch = input.pitch;
    this.currentDistance += (input.zoomTarget - this.currentDistance) * (1 - Math.exp(-dt * 6));
    const off = this.offset(this.currentYaw, this.currentPitch, this.currentDistance, target);
    const focus = this.target.clone().add(new THREE.Vector3(0, target.height * 0.55, 0));
    const desired = this.target.clone().add(off);
    // simple building-aware camera: lift if too low / close
    desired.y = Math.max(desired.y, 12);
    // pull the camera in front of any building that would block the titan
    if (this.city) {
      const dir = desired.clone().sub(focus);
      const dist = dir.length();
      if (dist > 1) {
        const hit = this.city.raycastBuilding(focus, dir.clone().normalize(), dist);
        if (hit && hit.distance < dist - 2) {
          desired.copy(focus).addScaledVector(dir.normalize(), Math.max(24, hit.distance - 6));
          desired.y = Math.max(desired.y, focus.y + 3);
        }
      }
    }
    this.position.lerp(desired, 1 - Math.exp(-dt * 6));
    const lookTarget = this.target.clone().add(new THREE.Vector3(0, target.height * (0.5 + Math.sin(this.currentPitch) * 0.12), 0));
    this.look.lerp(lookTarget, 1 - Math.exp(-dt * 9));
    this.camera.position.copy(this.position);
    this.camera.position.x += shake.x * 4;
    this.camera.position.y += shake.y * 4;
    this.camera.lookAt(this.look);
  }

  cinematicPush(focus, strength = 1) {
    this.cinematic = 0.8 * strength;
    this.cinematicFocus = focus;
  }
}
