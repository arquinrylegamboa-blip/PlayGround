/* Web Audio synthesizer. All roars, impacts, beams, rain and ambience are
   generated at runtime so the game works fully offline. */

export class AudioEngine {
  constructor(settings) {
    this.settings = settings;
    this.ctx = null;
    this.master = null;
    this.sfx = null;
    this.music = null;
    this.noiseBuffer = null;
    this.ambient = null;
    this.rain = null;
    this.weather = 'clear';
    this.started = false;
    this.lastRoar = 0;
  }

  unlock() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      const comp = this.ctx.createDynamicsCompressor();
      comp.threshold.value = -18;
      comp.knee.value = 18;
      comp.ratio.value = 5;
      comp.attack.value = 0.004;
      comp.release.value = 0.22;
      this.master = this.ctx.createGain();
      this.master.gain.value = this.settings.get('sound') ? 0.75 : 0;
      this.master.connect(comp);
      comp.connect(this.ctx.destination);
      this.sfx = this.ctx.createGain();
      this.sfx.gain.value = 0.85;
      this.sfx.connect(this.master);
      this.music = this.ctx.createGain();
      this.music.gain.value = this.settings.get('music') ? 0.36 : 0;
      this.music.connect(this.master);
      this.noiseBuffer = this.makeNoise(3);
      this.started = true;
      this.startAmbient();
    } catch (e) { console.warn('audio unavailable', e); }
  }

  makeNoise(seconds) {
    const len = Math.floor(this.ctx.sampleRate * seconds);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      d[i] = last * 3.2;
    }
    return buf;
  }

  setSound(on) { if (this.master) this.master.gain.setTargetAtTime(on ? 0.75 : 0, this.ctx.currentTime, 0.05); }
  setMusic(on) { if (this.music) this.music.gain.setTargetAtTime(on ? 0.36 : 0, this.ctx.currentTime, 0.2); }

  tone({ freq = 440, endFreq = null, type = 'sine', dur = 0.3, gain = 0.2, delay = 0, attack = 0.01, release = null, detune = 0, filter = null, q = 1, dest = null, pan = 0 }) {
    if (!this.ctx) return;
    const t0 = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    const p = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(20, freq), t0);
    if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), t0 + dur);
    osc.detune.value = detune;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t0 + attack);
    const rel = release ?? dur * 0.5;
    g.gain.setValueAtTime(Math.max(0.0002, gain), t0 + Math.max(attack, dur - rel));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    let node = osc;
    if (filter) {
      const f = this.ctx.createBiquadFilter();
      f.type = filter.type || 'lowpass';
      f.frequency.setValueAtTime(filter.freq || 1200, t0);
      if (filter.endFreq) f.frequency.exponentialRampToValueAtTime(Math.max(40, filter.endFreq), t0 + dur);
      f.Q.value = q;
      node.connect(f); node = f;
    }
    node.connect(g);
    if (p) { p.pan.value = Math.max(-1, Math.min(1, pan)); g.connect(p); p.connect(dest || this.sfx); }
    else g.connect(dest || this.sfx);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  noise({ dur = 0.3, gain = 0.2, delay = 0, filter = 'lowpass', freq = 800, endFreq = null, q = 0.8, attack = 0.005, pan = 0, dest = null, playbackRate = 1 }) {
    if (!this.ctx || !this.noiseBuffer) return;
    const t0 = this.ctx.currentTime + delay;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.playbackRate.value = playbackRate;
    const f = this.ctx.createBiquadFilter();
    f.type = filter;
    f.frequency.setValueAtTime(freq, t0);
    if (endFreq) f.frequency.exponentialRampToValueAtTime(Math.max(30, endFreq), t0 + dur);
    f.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f); f.connect(g);
    const p = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
    if (p) { p.pan.value = Math.max(-1, Math.min(1, pan)); g.connect(p); p.connect(dest || this.sfx); }
    else g.connect(dest || this.sfx);
    src.start(t0, Math.random() * 1.2);
    src.stop(t0 + dur + 0.05);
  }

  click() {
    this.tone({ freq: 680, endFreq: 420, type: 'triangle', dur: 0.07, gain: 0.07 });
  }
  hover() {
    this.tone({ freq: 1100, endFreq: 900, type: 'sine', dur: 0.04, gain: 0.025 });
  }
  confirm() {
    this.tone({ freq: 160, endFreq: 240, type: 'sawtooth', dur: 0.18, gain: 0.08, filter: { type: 'lowpass', freq: 900 } });
    this.tone({ freq: 320, endFreq: 480, type: 'triangle', dur: 0.3, gain: 0.06, delay: 0.05 });
  }

  roar(def) {
    if (!this.ctx || !this.settings.get('sound')) return;
    const now = performance.now();
    if (now - this.lastRoar < 900) return;
    this.lastRoar = now;
    const f = def.family;
    const pan = (Math.random() - 0.5) * 0.6;
    if (f === 'rodan') {
      this.tone({ freq: 620, endFreq: 240, type: 'sawtooth', dur: 1.1, gain: 0.15, filter: { type: 'bandpass', freq: 1600, endFreq: 500 }, q: 2, pan });
      this.noise({ dur: 1.2, gain: 0.2, filter: 'highpass', freq: 900, endFreq: 300, pan });
      this.tone({ freq: 920, endFreq: 380, type: 'square', dur: 0.7, gain: 0.05, pan });
    } else if (f === 'mothra') {
      this.tone({ freq: 520, endFreq: 880, type: 'sine', dur: 1.4, gain: 0.1, pan });
      this.tone({ freq: 784, endFreq: 1174, type: 'triangle', dur: 1.6, gain: 0.06, delay: 0.1, pan });
      this.tone({ freq: 1046, endFreq: 1568, type: 'sine', dur: 1.2, gain: 0.04, delay: 0.22, pan });
      this.noise({ dur: 1.6, gain: 0.06, filter: 'highpass', freq: 2400, pan });
    } else if (f === 'mecha') {
      this.tone({ freq: 110, endFreq: 70, type: 'square', dur: 0.9, gain: 0.18, filter: { type: 'lowpass', freq: 500 }, pan });
      this.tone({ freq: 880, endFreq: 440, type: 'sawtooth', dur: 0.5, gain: 0.08, pan });
      this.noise({ dur: 0.8, gain: 0.18, filter: 'bandpass', freq: 1400, q: 3, pan });
      this.tone({ freq: 1760, endFreq: 1200, type: 'sine', dur: 0.9, gain: 0.03, pan });
    } else if (f === 'ghidorah') {
      this.tone({ freq: 210, endFreq: 90, type: 'sawtooth', dur: 1.6, gain: 0.18, filter: { type: 'bandpass', freq: 900, endFreq: 320 }, q: 1.5, pan });
      this.tone({ freq: 315, endFreq: 150, type: 'square', dur: 1.4, gain: 0.07, detune: 12, pan });
      this.tone({ freq: 460, endFreq: 220, type: 'sawtooth', dur: 1.2, gain: 0.05, detune: -18, delay: 0.08, pan });
      this.noise({ dur: 1.7, gain: 0.12, filter: 'bandpass', freq: 1200, endFreq: 400, q: 1.4, pan });
    } else if (f === 'kong') {
      this.tone({ freq: 95, endFreq: 58, type: 'sawtooth', dur: 1.5, gain: 0.22, filter: { type: 'lowpass', freq: 700, endFreq: 220 }, q: 2, pan });
      this.tone({ freq: 142, endFreq: 86, type: 'square', dur: 1.1, gain: 0.09, detune: 8, pan });
      this.noise({ dur: 1.5, gain: 0.16, filter: 'bandpass', freq: 520, endFreq: 200, q: 1.2, pan });
      // chest pounds
      for (let i = 0; i < 3; i++) this.tone({ freq: 55, endFreq: 35, type: 'sine', dur: 0.22, gain: 0.2, delay: 0.5 + i * 0.22, pan });
    } else if (f === 'shimo') {
      this.tone({ freq: 62, endFreq: 34, type: 'sawtooth', dur: 2.0, gain: 0.2, filter: { type: 'lowpass', freq: 420, endFreq: 120 }, pan });
      this.noise({ dur: 2.1, gain: 0.16, filter: 'lowpass', freq: 900, endFreq: 180, pan });
      this.tone({ freq: 180, endFreq: 80, type: 'sine', dur: 1.8, gain: 0.06, pan });
    } else if (f === 'scylla') {
      this.tone({ freq: 300, endFreq: 120, type: 'sawtooth', dur: 1.2, gain: 0.12, filter: { type: 'bandpass', freq: 1200, q: 4 }, pan });
      this.noise({ dur: 1.3, gain: 0.18, filter: 'highpass', freq: 1800, endFreq: 600, pan });
      for (let i = 0; i < 5; i++) this.tone({ freq: 420 + i * 90, endFreq: 300 + i * 60, type: 'square', dur: 0.5, gain: 0.025, delay: i * 0.07, pan });
    } else if (f === 'tiamat') {
      this.tone({ freq: 70, endFreq: 42, type: 'sawtooth', dur: 1.8, gain: 0.2, filter: { type: 'lowpass', freq: 600, endFreq: 180 }, q: 1.8, pan });
      this.noise({ dur: 1.8, gain: 0.14, filter: 'bandpass', freq: 700, endFreq: 220, q: 1.2, pan });
      this.tone({ freq: 230, endFreq: 120, type: 'triangle', dur: 1.4, gain: 0.05, pan });
    } else {
      // Godzilla family
      const base = f === 'godzilla' ? 58 : 62;
      this.tone({ freq: base + 18, endFreq: base - 10, type: 'sawtooth', dur: 1.9, gain: 0.22, filter: { type: 'lowpass', freq: 900, endFreq: 180 }, q: 2.4, pan });
      this.tone({ freq: base * 1.5, endFreq: base * 0.9, type: 'square', dur: 1.5, gain: 0.08, detune: 9, pan });
      this.tone({ freq: base * 0.5, endFreq: base * 0.35, type: 'sine', dur: 2.2, gain: 0.12, pan });
      this.noise({ dur: 1.8, gain: 0.14, filter: 'bandpass', freq: 600, endFreq: 160, q: 1.4, pan });
      if (f === 'godzilla' && def.build?.evolved) {
        this.tone({ freq: 240, endFreq: 120, type: 'sawtooth', dur: 1.5, gain: 0.05, delay: 0.15, pan });
      }
    }
  }

  impact(power = 1, pan = 0) {
    const p = Math.max(0.3, Math.min(2, power));
    this.tone({ freq: 120 * p, endFreq: 34, type: 'sine', dur: 0.25 + p * 0.15, gain: 0.18 * p, pan });
    this.noise({ dur: 0.12 + p * 0.08, gain: 0.14 * p, filter: 'lowpass', freq: 1400, endFreq: 240, pan });
    if (p > 0.8) this.noise({ dur: 0.5, gain: 0.08 * p, filter: 'highpass', freq: 2200, endFreq: 600, pan });
  }

  stomp(power = 1) {
    this.tone({ freq: 48, endFreq: 22, type: 'sine', dur: 0.7, gain: 0.32 * power });
    this.tone({ freq: 90, endFreq: 32, type: 'sawtooth', dur: 0.5, gain: 0.1 * power, filter: { type: 'lowpass', freq: 320 } });
    this.noise({ dur: 0.65, gain: 0.2 * power, filter: 'lowpass', freq: 700, endFreq: 100 });
  }

  explosion(power = 1, pan = 0) {
    this.noise({ dur: 1.2, gain: 0.28 * power, filter: 'lowpass', freq: 2400, endFreq: 90, pan });
    this.tone({ freq: 70, endFreq: 24, type: 'sine', dur: 1.1, gain: 0.25 * power, pan });
    this.tone({ freq: 160, endFreq: 50, type: 'sawtooth', dur: 0.7, gain: 0.1 * power, filter: { type: 'lowpass', freq: 600 }, pan });
    for (let i = 0; i < 4; i++) this.noise({ dur: 0.1, gain: 0.08, filter: 'highpass', freq: 1800, delay: 0.1 + Math.random() * 0.6, pan });
  }

  glass(pan = 0) {
    this.noise({ dur: 0.5, gain: 0.09, filter: 'highpass', freq: 3200, endFreq: 1800, pan });
    for (let i = 0; i < 7; i++) this.tone({ freq: 1600 + Math.random() * 2400, endFreq: 900 + Math.random() * 1200, type: 'sine', dur: 0.12 + Math.random() * 0.2, gain: 0.015, delay: Math.random() * 0.25, pan });
  }

  whoosh(pan = 0) {
    this.noise({ dur: 0.35, gain: 0.12, filter: 'bandpass', freq: 600, endFreq: 1800, q: 1.4, pan });
  }

  beamStart(def, duration = 1.4) {
    if (!this.ctx || !this.settings.get('sound')) return () => {};
    const f = def.special;
    const t0 = this.ctx.currentTime;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.14, t0 + 0.08);
    g.gain.setValueAtTime(0.14, t0 + duration - 0.25);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    g.connect(this.sfx);
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    const baseFreq = f.type === 'freezeBeam' ? 280 : f.type === 'tripleBeam' ? 120 : f.type === 'godrays' ? 440 : 90;
    osc.frequency.setValueAtTime(baseFreq, t0);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.8, t0 + 0.15);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.7, t0 + duration);
    const f1 = this.ctx.createBiquadFilter();
    f1.type = 'bandpass';
    f1.frequency.value = f.type === 'freezeBeam' ? 1800 : 700;
    f1.Q.value = 2.5;
    osc.connect(f1); f1.connect(g);
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;
    noise.loop = true;
    const f2 = this.ctx.createBiquadFilter();
    f2.type = 'highpass'; f2.frequency.value = 600;
    const ng = this.ctx.createGain(); ng.gain.value = 0.07;
    noise.connect(f2); f2.connect(ng); ng.connect(g);
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.value = 11; lfoGain.gain.value = 30;
    lfo.connect(lfoGain); lfoGain.connect(osc.frequency);
    osc.start(t0); noise.start(t0); lfo.start(t0);
    osc.stop(t0 + duration + 0.05); noise.stop(t0 + duration + 0.05); lfo.stop(t0 + duration + 0.05);
    return () => { try { g.gain.cancelScheduledValues(this.ctx.currentTime); g.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.05); } catch {} };
  }

  thunder() {
    this.noise({ dur: 2.4, gain: 0.18, filter: 'lowpass', freq: 600, endFreq: 60, attack: 0.02 });
    this.tone({ freq: 52, endFreq: 26, type: 'sine', dur: 1.8, gain: 0.12, delay: 0.15 });
  }

  alert() {
    this.tone({ freq: 220, endFreq: 220, type: 'square', dur: 0.12, gain: 0.06 });
    this.tone({ freq: 330, endFreq: 330, type: 'square', dur: 0.12, gain: 0.05, delay: 0.16 });
  }

  victory() {
    const notes = [130.8, 164.8, 196, 261.6, 329.6];
    notes.forEach((n, i) => {
      this.tone({ freq: n, type: 'triangle', dur: 1.4, gain: 0.06, delay: i * 0.13, attack: 0.02 });
      this.tone({ freq: n * 0.5, type: 'sine', dur: 1.6, gain: 0.05, delay: i * 0.13 });
    });
    this.noise({ dur: 1.8, gain: 0.05, filter: 'highpass', freq: 2000, delay: 0.5 });
  }

  defeat() {
    [110, 98, 82, 55].forEach((n, i) => this.tone({ freq: n, endFreq: n * 0.8, type: 'sawtooth', dur: 1.1, gain: 0.07, delay: i * 0.25, filter: { type: 'lowpass', freq: 400 } }));
  }

  startAmbient() {
    if (!this.ctx || this.ambient) return;
    const t0 = this.ctx.currentTime;
    const g = this.ctx.createGain();
    g.gain.value = 0.0001;
    g.gain.exponentialRampToValueAtTime(0.09, t0 + 3);
    g.connect(this.music);
    const osc1 = this.ctx.createOscillator(); osc1.type = 'sine'; osc1.frequency.value = 41.2;
    const osc2 = this.ctx.createOscillator(); osc2.type = 'triangle'; osc2.frequency.value = 61.7;
    const osc3 = this.ctx.createOscillator(); osc3.type = 'sine'; osc3.frequency.value = 82.4; osc3.detune.value = -7;
    const lfo = this.ctx.createOscillator(); lfo.frequency.value = 0.06;
    const lfoG = this.ctx.createGain(); lfoG.gain.value = 0.035;
    lfo.connect(lfoG); lfoG.connect(g.gain);
    const filter = this.ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 280;
    osc1.connect(filter); osc2.connect(filter); osc3.connect(filter); filter.connect(g);
    osc1.start(t0); osc2.start(t0); osc3.start(t0); lfo.start(t0);
    this.ambient = { g, osc1, osc2, osc3, lfo };
  }

  setWeather(kind) {
    if (this.weather === kind) return;
    this.weather = kind;
    if (!this.ctx) return;
    if (this.rain) {
      try { this.rain.stop(); } catch {}
      this.rain = null;
    }
    if (kind === 'rain' || kind === 'storm') {
      const src = this.ctx.createBufferSource();
      src.buffer = this.noiseBuffer; src.loop = true;
      const f = this.ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 1200;
      const f2 = this.ctx.createBiquadFilter(); f2.type = 'lowpass'; f2.frequency.value = 7000;
      const g = this.ctx.createGain(); g.gain.value = kind === 'storm' ? 0.16 : 0.1;
      src.connect(f); f.connect(f2); f2.connect(g); g.connect(this.music);
      src.start();
      this.rain = { src, g };
    }
  }

  setMaster(on) { this.setSound(on); }
}
