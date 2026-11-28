const DEFAULT_SETTINGS = {
  quality: 'high',
  shadows: true,
  bloom: true,
  resolution: 1,
  particles: 'high',
  destruction: 'high',
  detail: 'high',
  cameraShake: true,
  sound: true,
  music: true,
  fpsLimit: 60,
  hud: true,
  motionBlur: false,
};

const QUALITY_PRESETS = {
  low: { shadows: false, bloom: false, resolution: 0.7, particles: 'low', destruction: 'low', detail: 'low', fpsLimit: 30 },
  medium: { shadows: true, bloom: true, resolution: 0.85, particles: 'medium', destruction: 'medium', detail: 'medium', fpsLimit: 60 },
  high: { shadows: true, bloom: true, resolution: 1, particles: 'high', destruction: 'high', detail: 'high', fpsLimit: 60 },
  ultra: { shadows: true, bloom: true, resolution: 1, particles: 'ultra', destruction: 'high', detail: 'ultra', fpsLimit: 0 },
};

export class Settings {
  constructor() {
    this.data = { ...DEFAULT_SETTINGS, ...this.load() };
    this.listeners = new Set();
    this.applyPresetDefaults();
  }
  load() {
    try {
      const raw = localStorage.getItem('mvbox.settings.v1');
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  }
  save() {
    try { localStorage.setItem('mvbox.settings.v1', JSON.stringify(this.data)); } catch { /* ignore */ }
  }
  applyPresetDefaults() {
    if (!this.data._presetApplied && this.data.quality !== 'high') {
      Object.assign(this.data, QUALITY_PRESETS[this.data.quality] || {});
      this.data._presetApplied = true;
    }
  }
  get(key) { return this.data[key]; }
  set(key, value, silent = false) {
    this.data[key] = value;
    if (key === 'quality') {
      Object.assign(this.data, QUALITY_PRESETS[value] || QUALITY_PRESETS.high);
    }
    this.save();
    if (!silent) this.emit(key);
  }
  toggle(key) { this.set(key, !this.data[key]); return this.data[key]; }
  onChange(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
  emit(key) { for (const fn of this.listeners) fn(key, this.data); }
  get pixelRatio() {
    const dpr = Math.min(window.devicePixelRatio || 1, this.data.quality === 'low' ? 1 : 2);
    return dpr * (this.data.resolution || 1);
  }
  get particleCount() {
    return { low: 0.35, medium: 0.65, high: 1, ultra: 1.5 }[this.data.particles] || 1;
  }
  get destructionScale() {
    return { low: 0.35, medium: 0.65, high: 1 }[this.data.destruction] || 1;
  }
}

export { DEFAULT_SETTINGS, QUALITY_PRESETS };
