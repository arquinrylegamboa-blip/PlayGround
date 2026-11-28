import * as THREE from 'three';
import '@fontsource/barlow-condensed/400.css';
import '@fontsource/barlow-condensed/500.css';
import '@fontsource/barlow-condensed/600.css';
import '@fontsource/barlow-condensed/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import './styles.css';
import { Settings } from './core/settings.js';
import { AudioEngine } from './core/audio.js';
import { Game } from './game/game.js';
import { MonsterData } from './monsters/data.js';
import { UI } from './ui/ui.js';

const canvas = document.getElementById('game');
const settings = new Settings();
const audio = new AudioEngine(settings);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: settings.get('quality') !== 'low',
  powerPreference: 'high-performance',
  stencil: false,
});
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.shadowMap.enabled = settings.get('shadows');
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.setPixelRatio(settings.pixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight, false);

const ui = new UI({ settings, audio });

let game;
let attract = true;
let attractTime = 0;

function startAttract() {
  const ids = MonsterData.map((m) => m.id);
  // Bias the menu backdrop toward iconic, large silhouettes.
  const heroIds = ['godzilla2019', 'godzilla2021', 'godzillaEvolved', 'kong2021', 'ghidorah', 'mechagodzilla'];
  const playerId = heroIds[Math.floor(Math.random() * heroIds.length)];
  let enemyId = ids[Math.floor(Math.random() * ids.length)];
  while (enemyId === playerId) enemyId = ids[Math.floor(Math.random() * ids.length)];
  const weather = Math.random() > 0.5 ? 'storm' : 'rain';
  attract = true;
  attractTime = 0;
  game.start({
    mode: 'battle',
    playerId,
    enemies: [enemyId],
    allies: [],
    weather,
    time: 'sunset',
    intro: false,
    spectate: true,
    title: '',
  });
  game.paused = false;
  ui.showMenu();
}

game = new Game({
  renderer,
  settings,
  audio,
  ui,
  onExit: () => {
    startAttract();
  },
});
ui.setGame(game);
window.__game = game;
window.__settings = settings;

ui.onLaunch = (config) => {
  audio.unlock();
  audio.confirm();
  attract = false;
  game.start(config);
  ui.hideMenu();
};

ui.onQuit = () => {
  game.exitToMenu();
};

function applySettings(key) {
  renderer.setPixelRatio(settings.pixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.shadowMap.enabled = settings.get('shadows');
  game.environment.setShadows(settings.get('shadows'));
  game.effects.setQuality();
  audio.setSound(settings.get('sound'));
  audio.setMusic(settings.get('music'));
  if (key === 'hud') ui.applyHudVisibility();
  if (key === 'quality') ui.applySettingsView();
  if (key === 'disableControl') game.setSpectate(settings.get('disableControl'));
}

ui.onSettingsChange = (key) => applySettings(key);

window.addEventListener('resize', () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setPixelRatio(settings.pixelRatio);
  renderer.setSize(w, h, false);
  game.camera.aspect = w / h;
  game.camera.updateProjectionMatrix();
});

function unlockAudio() {
  audio.unlock();
}
window.addEventListener('pointerdown', unlockAudio, { once: true });
window.addEventListener('keydown', unlockAudio, { once: true });

window.addEventListener('error', (event) => {
  console.error(event.error || event.message);
  ui.toast('RUNTIME WARNING // SEE CONSOLE', 'warn');
});
window.addEventListener('unhandledrejection', (event) => {
  console.error(event.reason);
  ui.toast('RUNTIME WARNING // SEE CONSOLE', 'warn');
});

startAttract();
ui.ready();

let last = performance.now();
let accumulator = 0;
let firstFrame = true;

function frame(now) {
  requestAnimationFrame(frame);
  const raw = Math.min(0.1, (now - last) / 1000);
  last = now;
  const limit = Number(settings.get('fpsLimit')) || 0;
  if (limit > 0) {
    accumulator += raw;
    if (accumulator < 1 / limit) return;
    const step = Math.min(accumulator, 0.05);
    accumulator = 0;
    tick(step);
  } else {
    tick(Math.min(raw, 0.05));
  }
  if (firstFrame) {
    firstFrame = false;
    ui.ready();
    document.body.classList.add('booted');
  }
}

function tick(dt) {
  if (attract && game.active) {
    attractTime += dt;
    const alive = game.monsters.some((m) => !m.dead);
    if (!alive || attractTime > 75) startAttract();
  }
  game.update(dt);
  renderer.render(game.scene, game.camera);
}

document.addEventListener('visibilitychange', () => {
  last = performance.now();
});

requestAnimationFrame(frame);
