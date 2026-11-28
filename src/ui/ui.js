import { MonsterData, getMonster, TEAM_NAMES } from '../monsters/data.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const hex = (n) => '#' + n.toString(16).padStart(6, '0');

function glyph(family, cls = '') {
  const open = `<svg class="titan-svg ${cls}" viewBox="0 0 120 120" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">`;
  const close = '</svg>';
  switch (family) {
    case 'kong':
      return `${open}<path d="M42 34c-6-6-15-4-17 4-2 9 4 15 9 17l-3 16c-2 12 4 22 8 25l-8 14h12l6-10h8l6 10h12l-8-14c4-3 10-13 8-25l-3-16c5-2 11-8 9-17-2-8-11-10-17-4-4 4-8 6-12 6s-8-2-12-6Z" fill="currentColor" fill-opacity=".13"/><path d="M48 44h24M44 52c4 4 10 5 16 5s12-1 16-5"/><circle cx="51" cy="37" r="2.2" fill="currentColor"/><circle cx="69" cy="37" r="2.2" fill="currentColor"/><path d="M30 70c-8 3-14 10-15 20M90 70c8 3 14 10 15 20"/>${close}`;
    case 'ghidorah':
      return `${open}<path d="M60 108c-8-18-6-32 0-44 6 12 8 26 0 44Z" fill="currentColor" fill-opacity=".13"/><path d="M60 66C50 54 38 45 28 34c-7-8-2-18 6-16 8 2 12 10 17 18M60 66c10-12 22-21 32-32 7-8 2-18-6-16-8 2-12 10-17 18M60 70c-4-14-4-26 0-38 4 12 4 24 0 38Z"/><path d="M20 18l-5-7 8 2 2-8 5 8M100 18l5-7-8 2-2-8-5 8"/><path d="M44 48c-4 6-4 10 0 14M76 48c4 6 4 10 0 14"/><path d="M38 84c-8-4-14-10-16-18M82 84c8-4 14-10 16-18"/>${close}`;
    case 'mecha':
      return `${open}<path d="M60 12 38 22v18l8 8v16l-8 6v18l10 10h24l10-10V70l-8-6V48l8-8V22L60 12Z" fill="currentColor" fill-opacity=".13"/><path d="M46 34h28M46 42h28M44 66h32M44 76h32"/><path d="M50 26l10-6 10 6-10 6-10-6Z"/><path d="M36 54 20 70l4 10 12-14M84 54l16 16-4 10-12-14"/><path d="M48 92l-4 16M72 92l4 16"/>${close}`;
    case 'rodan':
      return `${open}<path d="M60 44c-8 0-14 8-14 18 0 10 6 18 14 18s14-8 14-18c0-10-6-18-14-18Z" fill="currentColor" fill-opacity=".13"/><path d="M50 52 12 30l18 30-14 8 26 4M70 52l38-22-18 30 14 8-26 4"/><path d="M60 80l-8 24 8-8 8 8-8-24Z"/><path d="M54 38c2-8 10-8 12 0"/><path d="M52 50h16"/><path d="M56 58c3 2 5 2 8 0"/>${close}`;
    case 'mothra':
      return `${open}<path d="M60 40c-10-18-30-28-44-20-10 6-8 24 2 38 8 12 22 22 34 26M60 40c10-18 30-28 44-20 10 6 8 24-2 38-8 12-22 22-34 26" fill="currentColor" fill-opacity=".13"/><path d="M60 40v56M60 52c-8-6-14-10-22-12M60 52c8-6 14-10 22-12M60 68c-6-4-12-6-18-6M60 68c6-4 12-6 18-6"/><path d="M54 30c-4-8-2-14 4-16M66 30c4-8 2-14-4-16"/><circle cx="60" cy="36" r="4"/>${close}`;
    case 'shimo':
      return `${open}<path d="M20 72c4-18 20-28 40-28s36 10 40 28c2 10-4 20-14 22H34c-10-2-16-12-14-22Z" fill="currentColor" fill-opacity=".13"/><path d="M38 46l-8-18 14 12 8-20 6 18 8-20 6 20 14-12-8 18M28 96v12M44 96v12M76 96v12M92 96v12"/><path d="M26 70c-8-4-12-10-14-18M100 68c8-4 12-10 14-18"/><circle cx="44" cy="58" r="2.2" fill="currentColor"/><circle cx="76" cy="58" r="2.2" fill="currentColor"/><path d="M50 68h20"/>${close}`;
    case 'scylla':
      return `${open}<path d="M60 42c-9 0-16 8-16 18s7 18 16 18 16-8 16-18-7-18-16-18Z" fill="currentColor" fill-opacity=".13"/><path d="M48 48 20 30l12 24-18 6 22 8M72 48l28-18-12 24 18 6-22 8M44 72 16 84l18 10 12-14M76 72l28 12-18 10-12-14M52 76 40 104M68 76l12 28"/><path d="M50 38c-6-10-2-18 4-22M70 38c6-10 2-18-4-22"/><circle cx="55" cy="55" r="2" fill="currentColor"/><circle cx="65" cy="55" r="2" fill="currentColor"/>${close}`;
    case 'tiamat':
      return `${open}<path d="M60 14c14 8 20 22 16 36-4 14-16 22-16 36 0 8 4 14 10 18M60 14c-14 8-20 22-16 36 4 14 16 22 16 36 0 8-4 14-10 18" fill="currentColor" fill-opacity=".13"/><path d="M60 20v70M60 30c-8 4-12 10-12 16M60 30c8 4 12 10 12 16M60 60c-10 4-14 12-14 20M60 60c10 4 14 12 14 20"/><path d="M48 24 36 16l2 14M72 24l12-8-2 14M44 42 30 38l8 12M76 42l14-4-8 12"/><circle cx="60" cy="22" r="4"/>${close}`;
    default:
      return `${open}<path d="M60 20c-12 0-20 10-18 24l4 22c-10 6-16 18-14 32 1 8 6 14 12 16l-4 12h12l6-10h8l6 10h12l-4-12c6-2 11-8 12-16 2-14-4-26-14-32l4-22c2-14-6-24-18-24Z" fill="currentColor" fill-opacity=".13"/><path d="M60 20 48 2l8 16M60 20l12-18-8 16M50 34c-8-10-16-14-24-14l10 14M70 34c8-10 16-14 24-14l-10 14M44 48l16 8 16-8M52 64h16M52 74h16"/><circle cx="52" cy="38" r="2.2" fill="currentColor"/><circle cx="68" cy="38" r="2.2" fill="currentColor"/><path d="M30 96c8 4 20 6 30 6s22-2 30-6"/>${close}`;
  }
}

function statBar(label, value, max = 100) {
  return `<div class="stat-row"><span>${label}</span><div class="stat-track"><i style="width:${clamp(value / max * 100, 3, 100)}%"></i></div><b>${Math.round(value)}</b></div>`;
}

function timeLabel(hour) {
  if (hour < 5) return 'NIGHT';
  if (hour < 8) return 'SUNRISE';
  if (hour < 17) return 'DAY';
  if (hour < 20) return 'SUNSET';
  return 'NIGHT';
}

export class UI {
  constructor({ settings, audio }) {
    this.settings = settings;
    this.audio = audio;
    this.game = null;
    this.selectedId = 'godzilla2019';
    this.opponentId = 'ghidorah';
    this.mode = 'battle';
    this.weather = 'storm';
    this.time = 'sunset';
    this.force = 'duel';
    this.sandboxTeam = 1;
    this.returnToPause = false;
    this.toastCount = 0;
    this.minimapTimer = 0;
    this.lastHud = {};
    this.timers = {};

    this.root = document.getElementById('ui');
    this.root.innerHTML = this.template();
    this.cache();
    this.buildRoster();
    this.buildRivals();
    this.buildSandboxRoster();
    this.bind();
    this.selectMonster(this.selectedId, true);
    this.setMode('battle', true);
    this.applySettingsView();
    this.applyHudVisibility();
  }

  template() {
    return `
    <div id="loading" class="loading">
      <div class="load-emblem">${glyph('godzilla')}</div>
      <div class="load-title">TITAN<span>BOX</span></div>
      <div class="load-bar"><i></i></div>
      <div class="load-copy">CALIBRATING TITAN SIGNATURES</div>
    </div>

    <section id="menu" class="screen menu">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">${glyph('godzilla')}</div>
          <div class="brand-copy"><b>TITAN BOX</b><span>MONSTERVERSE SIMULATION</span></div>
        </div>
        <nav class="topnav">
          <button class="nav-btn" data-scroll="roster-wrap">COLLECTION</button>
          <button class="nav-btn" data-open="settings">SETTINGS</button>
          <button class="nav-btn" data-open="controls">CONTROLS</button>
          <button class="nav-btn" data-open="about">INTEL</button>
        </nav>
      </header>

      <div class="menu-scroll">
        <div class="menu-hero">
          <div class="hero-copy">
            <div class="eyebrow"><span class="live-dot"></span> LIVE TITAN SIMULATION // HONG KONG</div>
            <h1 class="hero-title">TITAN<span>BOX</span></h1>
            <p class="hero-sub">Command the alpha. Break the city. Outlast the storm.</p>

            <div class="mode-grid">
              <button class="mode-card active" data-mode="battle">
                <span class="mode-num">01</span><b>QUICK BATTLE</b><span>1v1 titan duel</span>
              </button>
              <button class="mode-card" data-mode="roam">
                <span class="mode-num">02</span><b>FREE ROAM</b><span>Explore &amp; destroy</span>
              </button>
              <button class="mode-card" data-mode="sandbox">
                <span class="mode-num">03</span><b>SANDBOX</b><span>Spawn anything</span>
              </button>
            </div>

            <div class="launch-row">
              <button id="launch" class="btn btn-primary"><span id="launch-label">DEPLOY</span><kbd>ENTER</kbd></button>
              <button class="btn btn-ghost" data-open="controls">HOW TO PLAY</button>
            </div>

            <div class="hero-stats">
              <div><b>14</b><span>TITANS</span></div>
              <div><b>01</b><span>DESTRUCTIBLE CITY</span></div>
              <div><b>&infin;</b><span>CHAOS</span></div>
            </div>
            <div class="launch-summary" id="launch-summary"></div>
          </div>

          <aside class="dossier" id="dossier">
            <div class="dossier-head"><span>SELECTED TITAN</span><span id="dossier-index">01 / 14</span></div>
            <div class="portrait-wrap">
              <div class="portrait-rings"></div>
              <div class="portrait" id="menu-portrait"></div>
              <div class="portrait-scan"></div>
            </div>
            <div class="dossier-title">
              <div><span id="menu-era">2019</span><h2 id="menu-name">Godzilla 2019</h2></div>
              <span class="family-tag" id="menu-family">GODZILLA</span>
            </div>
            <p class="tagline" id="menu-tagline"></p>
            <div class="stat-list" id="menu-stats"></div>
            <div class="ability-list" id="menu-abilities"></div>
            <div class="rival-block">
              <div class="rival-head"><span>SELECT RIVAL</span><span id="rival-name">KING GHIDORAH</span></div>
              <div class="chips rival-chips" id="opponent-chips"></div>
            </div>
          </aside>
        </div>

        <div class="config-strip">
          <div class="config-block">
            <label>ENEMY FORCE</label>
            <div class="chips" id="force-chips">
              <button class="chip active" data-force="duel">DUEL <em>1v1</em></button>
              <button class="chip" data-force="assault">ASSAULT <em>2v1</em></button>
              <button class="chip" data-force="gauntlet">GAUNTLET <em>3v1</em></button>
              <button class="chip" data-force="war">WAR <em>2v2</em></button>
            </div>
          </div>
          <div class="config-block">
            <label>WEATHER</label>
            <div class="chips" id="weather-chips">
              <button class="chip" data-weather="clear">CLEAR</button>
              <button class="chip" data-weather="rain">RAIN</button>
              <button class="chip active" data-weather="storm">STORM</button>
              <button class="chip" data-weather="fog">FOG</button>
            </div>
          </div>
          <div class="config-block">
            <label>TIME OF DAY</label>
            <div class="chips" id="time-chips">
              <button class="chip" data-time="sunrise">SUNRISE</button>
              <button class="chip" data-time="day">DAY</button>
              <button class="chip active" data-time="sunset">SUNSET</button>
              <button class="chip" data-time="night">NIGHT</button>
            </div>
          </div>
        </div>

        <div class="roster-wrap" id="roster-wrap">
          <div class="section-head"><span>MONSTER COLLECTION</span><span id="roster-count">14 SIGNATURES</span></div>
          <div class="roster" id="roster"></div>
        </div>
      </div>

      <footer class="menu-foot">
        <span>BUILD 1.0 // WEBGL</span>
        <span>DESKTOP + MOBILE</span>
        <span>HEADPHONES RECOMMENDED</span>
      </footer>
    </section>

    <section id="hud" class="hud hidden">
      <div class="hud-top">
        <div class="objective-card">
          <span class="hud-mode" id="hud-mode">QUICK BATTLE</span>
          <b id="hud-objective">SLAY KING GHIDORAH</b>
          <small id="hud-sub">HONG KONG // STORM</small>
        </div>
        <div class="hud-center">
          <div class="clock" id="hud-clock">00:00</div>
          <div class="mini-chips"><span id="hud-weather">STORM</span><span id="hud-time">SUNSET</span></div>
        </div>
        <div class="hud-tools">
          <button class="icon-btn" data-game="pause" aria-label="Pause">II</button>
          <button class="icon-btn" data-open="settings" aria-label="Settings">&#9881;</button>
        </div>
      </div>

      <div class="hud-bottom">
        <div class="player-card" id="player-card">
          <div class="player-id">
            <span class="player-team" id="player-team">ALPHA</span>
            <b id="player-name">GODZILLA</b>
            <span class="player-hp-label" id="player-hp-label">1380</span>
          </div>
          <div class="bar hp"><i id="player-hp"></i><span class="bar-ticks"></span></div>
          <div class="bar stamina"><i id="player-stamina"></i></div>
          <div class="player-sub">
            <span id="player-status">READY</span>
            <span class="special-mini"><i id="special-cooldown"></i><em id="special-name">NUCLEAR PULSE</em></span>
          </div>
        </div>

        <div class="ability-bar" id="ability-bar">
          <button class="ability" data-action="light"><kbd>LMB</kbd><b>STRIKE</b></button>
          <button class="ability" data-action="heavy"><kbd>RMB</kbd><b>HEAVY</b></button>
          <button class="ability special" data-action="special"><kbd>E</kbd><b id="ability-special">SPECIAL</b></button>
          <button class="ability" data-action="grab"><kbd>G</kbd><b>GRAB</b></button>
          <button class="ability" data-action="roar"><kbd>R</kbd><b>ROAR</b></button>
          <button class="ability" data-action="dodge"><kbd>Q</kbd><b>DODGE</b></button>
          <button class="ability" data-action="jump"><kbd>SPC</kbd><b>JUMP</b></button>
          <button class="ability" data-action="block"><kbd>C</kbd><b>BLOCK</b></button>
        </div>

        <div class="minimap-wrap">
          <canvas id="minimap" width="180" height="180"></canvas>
          <span>HONG KONG</span>
          <em id="minimap-count">2 TITANS</em>
        </div>
      </div>

      <div id="sandbox-panel" class="sandbox-panel hidden">
        <div class="sandbox-head"><span>SANDBOX CONTROL</span><button class="mini-x" data-game="toggle-sandbox">&times;</button></div>
        <div class="sandbox-tabs">
          <button class="active" data-sandbox-tab="monsters">MONSTERS</button>
          <button data-sandbox-tab="world">WORLD</button>
        </div>
        <div class="sandbox-body">
          <div class="sandbox-pane" data-sandbox-pane="monsters">
            <div class="sandbox-label">DEPLOY TEAM</div>
            <div class="chips compact" id="sandbox-team">
              <button class="chip" data-sandbox-team="0">ALPHA</button>
              <button class="chip active" data-sandbox-team="1">OMEGA</button>
              <button class="chip" data-sandbox-team="2">GAMMA</button>
            </div>
            <div class="sandbox-label">TITAN</div>
            <div class="sandbox-grid" id="sandbox-roster"></div>
            <div class="sandbox-row">
              <button class="btn btn-small" data-game="toggle-ai">TOGGLE AI</button>
              <span class="sandbox-note" id="sandbox-count">1 ACTIVE</span>
            </div>
          </div>
          <div class="sandbox-pane hidden" data-sandbox-pane="world">
            <div class="sandbox-label">VEHICLES</div>
            <div class="sandbox-grid">
              <button data-spawn-type="car">CAR</button>
              <button data-spawn-type="truck">TRUCK</button>
              <button data-spawn-type="bus">BUS</button>
            </div>
            <div class="sandbox-label">LIFE</div>
            <div class="sandbox-grid">
              <button data-spawn-type="npc">CIVILIAN</button>
              <button data-spawn-type="tree">TREE</button>
              <button data-spawn-type="barrel">BARREL</button>
            </div>
            <div class="sandbox-label">STRUCTURES</div>
            <div class="sandbox-grid">
              <button data-spawn-type="building">BUILDING</button>
              <button data-spawn-type="streetlight">STREETLIGHT</button>
            </div>
            <div class="sandbox-label">ENVIRONMENT</div>
            <div class="chips compact">
              <button class="chip" data-sandbox-weather="clear">CLEAR</button>
              <button class="chip" data-sandbox-weather="storm">STORM</button>
              <button class="chip" data-sandbox-weather="fog">FOG</button>
            </div>
            <div class="sandbox-row">
              <button class="btn btn-small danger" data-game="reset-world">RESET WORLD</button>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-controls" id="mobile-controls">
        <div class="joystick" id="joystick"><div class="joystick-knob" id="joystick-knob"></div></div>
        <div class="mobile-actions">
          <button class="mob-btn attack" data-action="light">STRIKE</button>
          <button class="mob-btn" data-action="heavy">HEAVY</button>
          <button class="mob-btn special" data-action="special">SPECIAL</button>
          <button class="mob-btn" data-action="grab">GRAB</button>
          <button class="mob-btn" data-action="dodge">DODGE</button>
          <button class="mob-btn" data-action="roar">ROAR</button>
          <button class="mob-btn" data-action="jump">JUMP</button>
          <button class="mob-btn block" data-mobile-hold="block">BLOCK</button>
          <button class="mob-btn run" data-mobile-hold="run">RUN</button>
        </div>
      </div>
    </section>

    <div id="overlay" class="overlay hidden">
      <div class="modal pause-modal" id="pause-modal">
        <div class="modal-head"><span>SIMULATION PAUSED</span><button class="mini-x" data-close>&times;</button></div>
        <div class="pause-title">HOLD THE LINE</div>
        <div class="pause-grid">
          <button class="btn btn-primary" data-game="resume">RESUME</button>
          <button class="btn btn-ghost" data-open="settings">SETTINGS</button>
          <button class="btn btn-ghost" data-game="restart">RESTART BATTLE</button>
          <button class="btn btn-ghost" data-game="switch-monster">SWITCH TITAN</button>
          <button class="btn btn-ghost" data-game="spectate">SPECTATE</button>
          <button class="btn btn-ghost danger" data-game="menu">QUIT TO MENU</button>
        </div>
        <div class="pause-hint">ESC RESUME // P PAUSE // F2 SCREENSHOT</div>
      </div>

      <div class="modal settings-modal" id="settings-modal">
        <div class="modal-head"><span>SYSTEM CONFIG</span><button class="mini-x" data-close>&times;</button></div>
        <div class="settings-scroll">
          <div class="setting-row">
            <label>QUALITY PRESET</label>
            <div class="seg" id="quality-seg">
              <button data-quality="low">LOW</button>
              <button data-quality="medium">MEDIUM</button>
              <button data-quality="high">HIGH</button>
              <button data-quality="ultra">ULTRA</button>
            </div>
          </div>
          <div class="setting-row">
            <label>RENDER RESOLUTION <output id="resolution-out">100%</output></label>
            <input type="range" id="resolution" data-setting="resolution" min="50" max="100" step="5" />
          </div>
          <div class="setting-row">
            <label>PARTICLE DENSITY</label>
            <select data-setting="particles">
              <option value="low">LOW</option><option value="medium">MEDIUM</option><option value="high">HIGH</option><option value="ultra">ULTRA</option>
            </select>
          </div>
          <div class="setting-row">
            <label>DESTRUCTION DETAIL</label>
            <select data-setting="destruction">
              <option value="low">LOW</option><option value="medium">MEDIUM</option><option value="high">HIGH</option>
            </select>
          </div>
          <div class="setting-row">
            <label>FRAME RATE CAP</label>
            <select data-setting="fpsLimit">
              <option value="30">30 FPS</option><option value="60">60 FPS</option><option value="120">120 FPS</option><option value="0">UNCAPPED</option>
            </select>
          </div>
          <div class="toggle-grid">
            <label class="switch"><input type="checkbox" data-setting="shadows" /><i></i><span>SHADOWS</span></label>
            <label class="switch"><input type="checkbox" data-setting="bloom" /><i></i><span>GLOW / BLOOM</span></label>
            <label class="switch"><input type="checkbox" data-setting="cameraShake" /><i></i><span>CAMERA SHAKE</span></label>
            <label class="switch"><input type="checkbox" data-setting="sound" /><i></i><span>SOUND FX</span></label>
            <label class="switch"><input type="checkbox" data-setting="music" /><i></i><span>MUSIC / AMBIENCE</span></label>
            <label class="switch"><input type="checkbox" data-setting="hud" /><i></i><span>HUD</span></label>
          </div>
        </div>
        <div class="modal-foot"><span>CHANGES APPLY LIVE</span><button class="btn btn-primary" data-close>DONE</button></div>
      </div>

      <div class="modal controls-modal" id="controls-modal">
        <div class="modal-head"><span>FIELD MANUAL</span><button class="mini-x" data-close>&times;</button></div>
        <div class="controls-grid">
          <div>
            <h3>ON FOOT // DESKTOP</h3>
            <div class="key-row"><kbd>W A S D</kbd><span>MOVE</span></div>
            <div class="key-row"><kbd>SHIFT</kbd><span>RUN</span></div>
            <div class="key-row"><kbd>MOUSE</kbd><span>ORBIT CAMERA</span></div>
            <div class="key-row"><kbd>LMB</kbd><span>LIGHT ATTACK</span></div>
            <div class="key-row"><kbd>RMB</kbd><span>HEAVY ATTACK</span></div>
            <div class="key-row"><kbd>E</kbd><span>SPECIAL BREATH</span></div>
            <div class="key-row"><kbd>G</kbd><span>GRAB / THROW</span></div>
            <div class="key-row"><kbd>R</kbd><span>ROAR</span></div>
            <div class="key-row"><kbd>Q</kbd><span>DODGE</span></div>
            <div class="key-row"><kbd>SPACE</kbd><span>JUMP</span></div>
            <div class="key-row"><kbd>C</kbd><span>BLOCK</span></div>
            <div class="key-row"><kbd>ESC</kbd><span>PAUSE</span></div>
          </div>
          <div>
            <h3>FIELD NOTES</h3>
            <p>Every titan has a unique silhouette, special weapon and family gait. Land light attacks to build combos, then finish with a heavy or a breath weapon.</p>
            <p>Buildings collapse section by section. A collapsing tower can flatten vehicles, civilians and even a distracted titan. Use the city as a weapon.</p>
            <p>Blocking drains stamina. Dodge has invulnerability frames. Grabs pin a rival in place, then throw them through a skyline.</p>
            <h3>TOUCH // MOBILE</h3>
            <div class="key-row"><kbd>LEFT STICK</kbd><span>MOVE</span></div>
            <div class="key-row"><kbd>RIGHT SWIPE</kbd><span>CAMERA</span></div>
            <div class="key-row"><kbd>BUTTONS</kbd><span>ATTACK / SPECIAL</span></div>
          </div>
        </div>
        <div class="modal-foot"><span>ALL TITANS PLAYABLE</span><button class="btn btn-primary" data-close>UNDERSTOOD</button></div>
      </div>

      <div class="modal about-modal" id="about-modal">
        <div class="modal-head"><span>TITAN INTEL</span><button class="mini-x" data-close>&times;</button></div>
        <div class="about-body">
          <div class="about-mark">${glyph('ghidorah')}</div>
          <div>
            <h2>TITAN BOX</h2>
            <p>A playable MonsterVerse sandbox built with procedural titans, a fully destructible Hong Kong, dynamic weather and synthesized audio. No downloads, no assets — every scale, plate and roar is generated in the browser.</p>
            <p>Battle as fourteen titans, free roam the city, or open the sandbox and spawn monsters, vehicles, civilians and buildings. Spectate AI wars, switch bodies mid-fight, and level the skyline.</p>
            <div class="about-meta"><span>THREE.JS</span><span>WEB AUDIO</span><span>PROCEDURAL</span><span>60 FPS TARGET</span></div>
          </div>
        </div>
        <div class="modal-foot"><span>FAN-MADE TRIBUTE // NOT AFFILIATED</span><button class="btn btn-primary" data-close>CLOSE</button></div>
      </div>

      <div class="modal result-modal" id="result-modal">
        <div class="result-kicker" id="result-kicker">VICTORY</div>
        <h2 class="result-title" id="result-title">THE KING STANDS</h2>
        <div class="result-stats" id="result-stats"></div>
        <div class="result-actions">
          <button class="btn btn-primary" data-game="rematch">REMATCH</button>
          <button class="btn btn-ghost" data-game="switch-monster">SWITCH TITAN</button>
          <button class="btn btn-ghost" data-game="menu">MAIN MENU</button>
        </div>
      </div>

      <div class="modal fatal-modal" id="fatal-modal">
        <div class="modal-head"><span>RENDERER FAULT</span></div>
        <div class="about-body">
          <div>
            <h2>SIMULATION HALTED</h2>
            <p id="fatal-message">An unexpected error occurred.</p>
            <p>Try reloading the page. If the issue persists, lower the quality preset in settings.</p>
          </div>
        </div>
        <div class="modal-foot"><button class="btn btn-primary" onclick="location.reload()">RELOAD</button></div>
      </div>
    </div>

    <div id="toasts" class="toasts"></div>

    <div id="versus" class="versus hidden">
      <div class="versus-side" id="versus-player"></div>
      <div class="vs-mark"><span>VS</span></div>
      <div class="versus-side enemy" id="versus-enemy"></div>
    </div>

    <div id="title-splash" class="title-splash hidden"></div>
    <div id="action-flash" class="action-flash"></div>
    <div id="cinematic" class="cinematic-bars"><i></i><i></i></div>
    `;
  }

  cache() {
    const $ = (sel) => this.root.querySelector(sel);
    this.loading = $('#loading');
    this.menu = $('#menu');
    this.hud = $('#hud');
    this.overlay = $('#overlay');
    this.toasts = $('#toasts');
    this.launch = $('#launch');
    this.launchLabel = $('#launch-label');
    this.launchSummary = $('#launch-summary');
    this.dossier = $('#dossier');
    this.menuPortrait = $('#menu-portrait');
    this.menuName = $('#menu-name');
    this.menuEra = $('#menu-era');
    this.menuFamily = $('#menu-family');
    this.menuTagline = $('#menu-tagline');
    this.menuStats = $('#menu-stats');
    this.menuAbilities = $('#menu-abilities');
    this.dossierIndex = $('#dossier-index');
    this.roster = $('#roster');
    this.opponentChips = $('#opponent-chips');
    this.rivalName = $('#rival-name');
    this.playerCard = $('#player-card');
    this.playerName = $('#player-name');
    this.playerTeam = $('#player-team');
    this.playerHp = $('#player-hp');
    this.playerHpLabel = $('#player-hp-label');
    this.playerStamina = $('#player-stamina');
    this.playerStatus = $('#player-status');
    this.specialName = $('#special-name');
    this.specialCooldown = $('#special-cooldown');
    this.abilitySpecial = $('#ability-special');
    this.hudMode = $('#hud-mode');
    this.hudObjective = $('#hud-objective');
    this.hudSub = $('#hud-sub');
    this.hudClock = $('#hud-clock');
    this.hudWeather = $('#hud-weather');
    this.hudTime = $('#hud-time');
    this.minimap = $('#minimap');
    this.minimapCount = $('#minimap-count');
    this.sandboxPanel = $('#sandbox-panel');
    this.sandboxRoster = $('#sandbox-roster');
    this.sandboxCount = $('#sandbox-count');
    this.mobileControls = $('#mobile-controls');
    this.joystick = $('#joystick');
    this.joystickKnob = $('#joystick-knob');
    this.versus = $('#versus');
    this.versusPlayer = $('#versus-player');
    this.versusEnemy = $('#versus-enemy');
    this.titleSplash = $('#title-splash');
    this.actionFlash = $('#action-flash');
    this.cinematicBars = $('#cinematic');
    this.damageFlash = document.getElementById('damage-flash');
    this.resultKicker = $('#result-kicker');
    this.resultTitle = $('#result-title');
    this.resultStats = $('#result-stats');
    this.minimapCtx = this.minimap?.getContext('2d');
  }

  setGame(game) {
    this.game = game;
    game.hud = this;
    if (game.input && this.joystick) game.input.attachJoystick(this.joystick, this.joystickKnob);
    this.refreshSandbox(game);
    if (this.menu && !this.menu.classList.contains('hidden')) this.showMenu();
  }

  buildRoster() {
    this.roster.innerHTML = MonsterData.map((m, i) => `
      <button class="titan-card" data-titan="${m.id}" style="--titan:${hex(m.colors.glow)}">
        <span class="titan-index">${String(i + 1).padStart(2, '0')}</span>
        <span class="titan-glyph">${glyph(m.family)}</span>
        <span class="titan-card-copy"><b>${m.short}</b><small>${m.era} // ${m.family.toUpperCase()}</small></span>
        <span class="titan-power">${m.power}</span>
      </button>
    `).join('');
    this.root.querySelector('#roster-count').textContent = `${MonsterData.length} SIGNATURES`;
  }

  buildRivals() {
    const player = getMonster(this.selectedId);
    this.opponentChips.innerHTML = MonsterData.filter((m) => m.id !== this.selectedId).map((m) => `
      <button class="chip rival ${m.id === this.opponentId ? 'active' : ''}" data-rival="${m.id}" style="--titan:${hex(m.colors.glow)}">${m.short} <em>${m.era}</em></button>
    `).join('');
    const rival = getMonster(this.opponentId);
    this.rivalName.textContent = rival ? rival.name.toUpperCase() : '—';
  }

  buildSandboxRoster() {
    this.sandboxRoster.innerHTML = MonsterData.map((m) => `
      <button class="sandbox-titan" data-spawn-id="${m.id}" style="--titan:${hex(m.colors.glow)}" title="Spawn ${m.name}">
        ${glyph(m.family)}<span>${m.short}</span>
      </button>
    `).join('');
  }

  selectMonster(id, initial = false) {
    const m = getMonster(id);
    if (!m) return;
    this.selectedId = m.id;
    if (this.opponentId === m.id) {
      const other = MonsterData.find((x) => x.id !== m.id);
      this.opponentId = other.id;
    }
    this.menu.style.setProperty('--titan', hex(m.colors.glow));
    this.menu.style.setProperty('--titan-soft', hex(m.colors.accent));
    this.menuPortrait.innerHTML = `${glyph(m.family, 'portrait-svg')}<div class="portrait-glow"></div>`;
    this.menuName.textContent = m.name;
    this.menuEra.textContent = m.era;
    this.menuFamily.textContent = m.family.toUpperCase();
    this.menuTagline.textContent = m.tagline;
    const index = MonsterData.findIndex((x) => x.id === m.id);
    this.dossierIndex.textContent = `${String(index + 1).padStart(2, '0')} / ${MonsterData.length}`;
    this.menuStats.innerHTML = [
      statBar('POWER', m.power),
      statBar('ATTACK', m.attack),
      statBar('DEFENSE', m.defense),
      statBar('SPEED', m.speedStat),
    ].join('');
    this.menuAbilities.innerHTML = `
      <div><span>LIGHT</span><b>${m.abilities.light}</b></div>
      <div><span>HEAVY</span><b>${m.abilities.heavy}</b></div>
      <div class="special"><span>SPECIAL</span><b>${m.abilities.special}</b></div>
      <div><span>HEIGHT</span><b>${m.height} M</b></div>
    `;
    this.root.querySelectorAll('.titan-card').forEach((el) => el.classList.toggle('active', el.dataset.titan === m.id));
    this.buildRivals();
    this.updateLaunchSummary();
    if (!initial) this.audio?.click?.();
  }

  setMode(mode, silent = false) {
    this.mode = mode;
    this.root.querySelectorAll('.mode-card').forEach((el) => el.classList.toggle('active', el.dataset.mode === mode));
    const labels = { battle: 'DEPLOY', roam: 'ENTER CITY', sandbox: 'OPEN SANDBOX' };
    this.launchLabel.textContent = labels[mode] || 'DEPLOY';
    const battleOnly = mode === 'battle';
    this.root.querySelectorAll('#force-chips, #opponent-chips').forEach((el) => {
      el.classList.toggle('disabled', !battleOnly);
    });
    this.root.querySelectorAll('#force-chips .chip, #opponent-chips .chip').forEach((el) => {
      el.disabled = !battleOnly;
    });
    if (!silent) this.audio?.click?.();
    this.updateLaunchSummary();
  }

  setChip(container, selector, attr, value) {
    this.root.querySelectorAll(`${container} ${selector}`).forEach((el) => el.classList.toggle('active', el.dataset[attr] === value));
  }

  updateLaunchSummary() {
    if (!this.launchSummary) return;
    const m = getMonster(this.selectedId);
    const rival = getMonster(this.opponentId);
    if (this.mode === 'battle') {
      const force = { duel: 'DUEL', assault: 'ASSAULT', gauntlet: 'GAUNTLET', war: 'WAR' }[this.force];
      this.launchSummary.textContent = `${m.name.toUpperCase()} // ${force} // ${this.weather.toUpperCase()} // ${this.time.toUpperCase()}`;
      this.launchSummary.dataset.rival = rival?.name || '';
    } else if (this.mode === 'roam') {
      this.launchSummary.textContent = `${m.name.toUpperCase()} // FREE ROAM // ${this.weather.toUpperCase()}`;
    } else {
      this.launchSummary.textContent = `${m.name.toUpperCase()} // SANDBOX // UNLIMITED SPAWNS`;
    }
  }

  launchConfig() {
    const playerId = this.selectedId;
    const m = getMonster(playerId);
    const enemies = [];
    const allies = [];
    if (this.mode === 'battle') {
      enemies.push(this.opponentId);
      const pool = MonsterData.filter((x) => x.id !== playerId && x.id !== this.opponentId);
      const rand = () => pool.splice(Math.floor(Math.random() * pool.length), 1)[0]?.id;
      if (this.force === 'assault' || this.force === 'gauntlet' || this.force === 'war') enemies.push(rand());
      if (this.force === 'gauntlet') enemies.push(rand());
      if (this.force === 'war') allies.push(rand());
      const rival = getMonster(this.opponentId);
      return {
        mode: 'battle',
        playerId,
        enemies: enemies.filter(Boolean),
        allies: allies.filter(Boolean),
        weather: this.weather,
        time: this.time,
        intro: true,
        title: `${m.short} VS ${rival.short}`,
      };
    }
    return {
      mode: this.mode,
      playerId,
      enemies: [],
      allies: [],
      weather: this.weather,
      time: this.time,
      intro: false,
      title: this.mode === 'sandbox' ? 'SANDBOX' : '',
    };
  }

  bind() {
    this.root.addEventListener('click', (e) => {
      const titan = e.target.closest('[data-titan]');
      if (titan) { this.selectMonster(titan.dataset.titan); return; }

      const rival = e.target.closest('[data-rival]');
      if (rival && !rival.disabled) {
        this.opponentId = rival.dataset.rival;
        this.buildRivals();
        this.updateLaunchSummary();
        this.audio?.click?.();
        return;
      }

      const mode = e.target.closest('[data-mode]');
      if (mode) { this.setMode(mode.dataset.mode); return; }

      const weather = e.target.closest('[data-weather]');
      if (weather) {
        this.weather = weather.dataset.weather;
        this.setChip('#weather-chips', '.chip', 'weather', this.weather);
        this.updateLaunchSummary();
        this.audio?.click?.();
        return;
      }

      const time = e.target.closest('[data-time]');
      if (time) {
        this.time = time.dataset.time;
        this.setChip('#time-chips', '.chip', 'time', this.time);
        this.updateLaunchSummary();
        this.audio?.click?.();
        return;
      }

      const force = e.target.closest('[data-force]');
      if (force && !force.disabled) {
        this.force = force.dataset.force;
        this.setChip('#force-chips', '.chip', 'force', this.force);
        this.updateLaunchSummary();
        this.audio?.click?.();
        return;
      }

      const open = e.target.closest('[data-open]');
      if (open) { this.openOverlay(open.dataset.open); this.audio?.click?.(); return; }

      const scroll = e.target.closest('[data-scroll]');
      if (scroll) {
        document.getElementById(scroll.dataset.scroll)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.audio?.click?.();
        return;
      }

      const close = e.target.closest('[data-close]');
      if (close) { this.closeCurrent(); this.audio?.click?.(); return; }

      const quality = e.target.closest('[data-quality]');
      if (quality) {
        this.settings.set('quality', quality.dataset.quality);
        this.applySettingsView();
        this.onSettingsChange?.('quality');
        this.audio?.click?.();
        return;
      }

      const sandboxTab = e.target.closest('[data-sandbox-tab]');
      if (sandboxTab) {
        this.root.querySelectorAll('[data-sandbox-tab]').forEach((el) => el.classList.toggle('active', el === sandboxTab));
        this.root.querySelectorAll('[data-sandbox-pane]').forEach((el) => el.classList.toggle('hidden', el.dataset.sandboxPane !== sandboxTab.dataset.sandboxTab));
        return;
      }

      const team = e.target.closest('[data-sandbox-team]');
      if (team) {
        this.sandboxTeam = Number(team.dataset.sandboxTeam);
        this.setChip('#sandbox-team', '.chip', 'sandboxTeam', team.dataset.sandboxTeam);
        return;
      }

      const spawn = e.target.closest('[data-spawn-id]');
      if (spawn && this.game) {
        this.game.spawnSandboxMonster(spawn.dataset.spawnId, { team: this.sandboxTeam });
        this.audio?.confirm?.();
        return;
      }

      const spawnType = e.target.closest('[data-spawn-type]');
      if (spawnType && this.game) {
        const type = spawnType.dataset.spawnType;
        if (['car', 'truck', 'bus'].includes(type)) this.game.spawnSandboxVehicle(type);
        else if (type === 'npc') this.game.spawnSandboxNPC();
        else if (type === 'building') this.game.spawnSandboxBuilding();
        else this.game.spawnSandboxProp(type);
        this.audio?.click?.();
        return;
      }

      const sandboxWeather = e.target.closest('[data-sandbox-weather]');
      if (sandboxWeather && this.game) {
        this.game.setWeather(sandboxWeather.dataset.sandboxWeather);
        return;
      }

      const gameAction = e.target.closest('[data-game]');
      if (gameAction) { this.handleGameAction(gameAction.dataset.game); return; }

      const action = e.target.closest('[data-action]');
      if (action) {
        if (action.dataset.action === 'block') return;
        if (this.game?.input) this.game.input.trigger(action.dataset.action);
        this.flashAction(action.dataset.action);
        this.audio?.click?.();
      }
    });

    this.launch.addEventListener('click', () => this.doLaunch());

    this.root.querySelectorAll('[data-setting]').forEach((input) => {
      const handler = () => {
        const key = input.dataset.setting;
        let value;
        if (input.type === 'checkbox') value = input.checked;
        else if (key === 'resolution') value = Number(input.value) / 100;
        else if (key === 'fpsLimit') value = Number(input.value);
        else value = input.value;
        this.settings.set(key, value);
        this.applySettingsView();
        this.onSettingsChange?.(key);
      };
      input.addEventListener(input.type === 'range' ? 'input' : 'change', handler);
    });

    this.root.querySelectorAll('[data-mobile-hold]').forEach((btn) => {
      const key = btn.dataset.mobileHold;
      const on = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!this.game?.input) return;
        if (key === 'block') this.game.input.mobileBlock = true;
        if (key === 'run') this.game.input.mobileRun = true;
        btn.classList.add('active');
      };
      const off = (e) => {
        e.preventDefault();
        if (!this.game?.input) return;
        if (key === 'block') this.game.input.mobileBlock = false;
        if (key === 'run') this.game.input.mobileRun = false;
        btn.classList.remove('active');
      };
      btn.addEventListener('pointerdown', on);
      btn.addEventListener('pointerup', off);
      btn.addEventListener('pointercancel', off);
      btn.addEventListener('pointerleave', off);
    });

    window.addEventListener('keydown', (e) => {
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (e.code === 'Enter' && !this.menu.classList.contains('hidden') && this.overlay.classList.contains('hidden')) {
        e.preventDefault();
        this.doLaunch();
        return;
      }
      if (e.code === 'Escape') {
        if (!this.overlay.classList.contains('hidden')) this.closeCurrent();
        else if (this.game?.active && !this.game.resultShown) this.game.pause();
        return;
      }
      if (e.code === 'KeyP' && this.game?.active && !this.game.resultShown) {
        if (this.game.paused) this.game.resume(); else this.game.pause();
      }
    });

    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 760) {
      this.mobileControls.classList.add('visible');
    }
    const mobileQuery = window.matchMedia('(pointer: coarse)');
    const syncMobile = () => this.mobileControls.classList.toggle('visible', mobileQuery.matches || window.innerWidth <= 760);
    mobileQuery.addEventListener?.('change', syncMobile);
    window.addEventListener('resize', syncMobile);
  }

  handleGameAction(action) {
    this.audio?.click?.();
    if (!this.game) return;
    switch (action) {
      case 'pause': this.game.pause(); break;
      case 'resume': this.game.resume(); break;
      case 'restart': this.game.restart(); break;
      case 'switch-monster': this.game.switchPlayer(); this.closeOverlays(); break;
      case 'spectate': this.game.setSpectate(!this.game.spectate); this.closeOverlays(); break;
      case 'menu': this.onQuit?.(); break;
      case 'rematch': this.game.restart(); break;
      case 'toggle-ai': this.game.setAI(!this.game.monsters.some((m) => m.ai && m !== this.game.player)); break;
      case 'reset-world': this.game.resetWorld(); break;
      case 'toggle-sandbox': this.sandboxPanel.classList.toggle('hidden'); break;
      default: break;
    }
  }

  doLaunch() {
    const config = this.launchConfig();
    this.onLaunch?.(config);
  }

  openOverlay(name) {
    this.overlay.classList.remove('hidden');
    this.root.querySelectorAll('.modal').forEach((el) => el.classList.add('hidden'));
    const modal = this.root.querySelector(`#${name}-modal`);
    if (modal) modal.classList.remove('hidden');
    this.returnToPause = !!this.game?.paused && name !== 'pause' && name !== 'result';
  }

  closeCurrent() {
    const visible = [...this.root.querySelectorAll('.modal')].find((el) => !el.classList.contains('hidden'));
    const isSettings = visible?.id === 'settings-modal';
    if (isSettings && this.returnToPause && this.game?.paused) {
      this.openOverlay('pause');
      return;
    }
    this.closeOverlays();
  }

  closeOverlays() {
    this.overlay.classList.add('hidden');
    this.root.querySelectorAll('.modal').forEach((el) => el.classList.add('hidden'));
    this.returnToPause = false;
  }

  openPause() {
    this.openOverlay('pause');
  }

  hideMenu() {
    this.menu.classList.add('hidden');
    this.root.classList.add('in-game');
    this.root.classList.remove('in-menu');
    this.closeOverlays();
  }

  showMenu() {
    this.menu.classList.remove('hidden');
    this.hud.classList.add('hidden');
    this.sandboxPanel.classList.add('hidden');
    this.root.classList.remove('in-game');
    this.root.classList.add('in-menu');
    this.closeOverlays();
  }

  showHUD(game) {
    this.hud.classList.remove('hidden');
    this.sandboxPanel.classList.toggle('hidden', game?.mode !== 'sandbox');
    if (game) {
      const p = game.player;
      if (p) {
        this.playerName.textContent = p.name.toUpperCase();
        this.playerTeam.textContent = TEAM_NAMES[p.team] || 'ALPHA';
        this.specialName.textContent = p.def.special.name.toUpperCase();
        this.abilitySpecial.textContent = p.def.special.name.toUpperCase();
      }
      this.hudMode.textContent = game.mode === 'battle' ? 'QUICK BATTLE' : game.mode === 'sandbox' ? 'SANDBOX' : 'FREE ROAM';
    }
    this.applyHudVisibility();
  }

  hideHUD() {
    this.hud.classList.add('hidden');
    this.sandboxPanel.classList.add('hidden');
  }

  updateHUD(game, dt) {
    const p = game.player;
    if (!p) return;
    const hp = clamp(p.hp / p.maxHp, 0, 1);
    const st = clamp(p.stamina / p.maxStamina, 0, 1);
    this.playerHp.style.transform = `scaleX(${hp})`;
    this.playerStamina.style.transform = `scaleX(${st})`;
    this.playerHpLabel.textContent = `${Math.max(0, Math.ceil(p.hp))} / ${p.maxHp}`;
    this.playerCard.classList.toggle('low', hp < 0.3);
    this.playerCard.classList.toggle('dead', p.dead);

    let status = 'READY';
    if (p.dead) status = 'DOWN';
    else if (p.state.ragdoll) status = 'KNOCKED DOWN';
    else if (p.state.grabbed) status = 'GRABBED';
    else if (p.state.burn > 0) status = 'BURNING';
    else if (p.state.freeze > 0) status = 'FROZEN';
    else if (p.state.shock > 0) status = 'CORRODING';
    else if (p.state.block) status = 'GUARDING';
    else if (p.state.attack) status = p.state.attack.kind.toUpperCase();
    else if (p.state.speed > 1) status = p.state.running ? 'CHARGING' : 'MOVING';
    this.playerStatus.textContent = status;

    const cd = p.cooldowns.special;
    const maxCd = Math.max(0.001, p.def.special.cooldown);
    this.specialCooldown.style.transform = `scaleX(${clamp(1 - cd / maxCd, 0, 1)})`;
    this.specialCooldown.parentElement.classList.toggle('ready', cd <= 0);

    this.hudObjective.textContent = game.objective || '';
    this.hudSub.textContent = game.subObjective || '';
    const elapsed = Math.max(0, game.time - game.stats.startTime);
    const mins = Math.floor(elapsed / 60);
    const secs = Math.floor(elapsed % 60);
    const clock = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (this.lastHud.clock !== clock) { this.hudClock.textContent = clock; this.lastHud.clock = clock; }
    const weather = (game.environment?.weather || 'clear').toUpperCase();
    if (this.lastHud.weather !== weather) { this.hudWeather.textContent = weather; this.lastHud.weather = weather; }
    const tl = timeLabel(game.environment?.hour ?? 19);
    if (this.lastHud.time !== tl) { this.hudTime.textContent = tl; this.lastHud.time = tl; }

    this.minimapTimer -= dt;
    if (this.minimapTimer <= 0) {
      this.minimapTimer = 0.12;
      this.drawMinimap(game);
    }
  }

  drawMinimap(game) {
    const ctx = this.minimapCtx;
    if (!ctx) return;
    const w = this.minimap.width;
    const range = 440;
    const s = w / (range * 2);
    const cx = w / 2;
    const cz = w / 2;
    ctx.clearRect(0, 0, w, w);
    ctx.fillStyle = 'rgba(5,9,13,0.78)';
    ctx.fillRect(0, 0, w, w);
    ctx.strokeStyle = 'rgba(120,170,190,0.16)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo((w / 4) * i, 0); ctx.lineTo((w / 4) * i, w);
      ctx.moveTo(0, (w / 4) * i); ctx.lineTo(w, (w / 4) * i);
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(90,105,112,0.55)';
    for (const b of game.city.buildings) {
      if (b.destroyed) continue;
      const x = cx + b.x * s;
      const z = cz + b.z * s;
      ctx.fillRect(x - b.width * s * 0.5, z - b.depth * s * 0.5, Math.max(1, b.width * s), Math.max(1, b.depth * s));
    }
    for (const m of game.monsters) {
      if (m.dead) continue;
      const x = cx + m.root.position.x * s;
      const z = cz + m.root.position.z * s;
      const isPlayer = m === game.player;
      ctx.beginPath();
      ctx.arc(x, z, isPlayer ? 4.2 : 3, 0, Math.PI * 2);
      ctx.fillStyle = isPlayer ? '#f4dfa2' : (m.team === 0 ? '#4fc3ff' : '#ff4d5e');
      ctx.fill();
      if (isPlayer) {
        ctx.strokeStyle = 'rgba(244,223,162,0.55)';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(x, z, 8 + Math.sin(game.time * 4) * 2, 0, Math.PI * 2); ctx.stroke();
      }
    }
    ctx.strokeStyle = 'rgba(215,180,106,0.7)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(0.5, 0.5, w - 1, w - 1);
    const alive = game.monsters.filter((m) => !m.dead).length;
    this.minimapCount.textContent = `${alive} TITAN${alive === 1 ? '' : 'S'}`;
  }

  toast(text, kind = 'info') {
    if (!text) return;
    const el = document.createElement('div');
    el.className = `toast ${kind}`;
    el.innerHTML = `<span class="toast-mark"></span><b>${text}</b>`;
    this.toasts.appendChild(el);
    while (this.toasts.children.length > 4) this.toasts.firstElementChild.remove();
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => el.remove(), 320);
    }, kind === 'kill' ? 3200 : 2400);
  }

  flashAction(action) {
    const buttons = this.root.querySelectorAll(`[data-action="${action}"]`);
    buttons.forEach((btn) => {
      btn.classList.remove('flash');
      void btn.offsetWidth;
      btn.classList.add('flash');
      setTimeout(() => btn.classList.remove('flash'), 260);
    });
  }

  onAction(action) {
    this.flashAction(action);
  }

  onMonsterSpawn() {
    if (this.game) this.refreshSandbox(this.game);
  }

  onDamage(monster, dmg, blocked) {
    if (!monster?.isPlayer) return;
    this.damageFlash.classList.remove('active', 'blocked');
    void this.damageFlash.offsetWidth;
    this.damageFlash.classList.add('active');
    if (blocked) this.damageFlash.classList.add('blocked');
    clearTimeout(this.timers.damage);
    this.timers.damage = setTimeout(() => this.damageFlash.classList.remove('active', 'blocked'), 180);
  }

  setSpecialName(name) {
    this.specialName.textContent = name.toUpperCase();
  }

  cinematic(monster, strength = 1) {
    this.cinematicBars.classList.add('active');
    clearTimeout(this.timers.cinematic);
    this.timers.cinematic = setTimeout(() => this.cinematicBars.classList.remove('active'), 1000 * strength);
    this.game?.cameraRig?.cinematicPush?.(monster, strength);
  }

  showVersus(player, enemies) {
    if (!player) return;
    const enemy = enemies?.[0];
    this.versusPlayer.innerHTML = `<div class="vs-glyph" style="color:${hex(player.def.colors.glow)}">${glyph(player.def.family)}</div><span>${TEAM_NAMES[player.team] || 'ALPHA'}</span><b>${player.name.toUpperCase()}</b><em>${player.def.era} // ${player.def.family.toUpperCase()}</em>`;
    this.versusEnemy.innerHTML = enemy
      ? `<div class="vs-glyph" style="color:${hex(enemy.def.colors.glow)}">${glyph(enemy.def.family)}</div><span>${TEAM_NAMES[enemy.team] || 'OMEGA'}</span><b>${enemy.name.toUpperCase()}</b><em>${enemy.def.era} // ${enemy.def.family.toUpperCase()}</em>`
      : '<div class="vs-glyph">?</div><span>OMEGA</span><b>UNKNOWN</b><em>SIGNAL LOST</em>';
    this.versus.classList.remove('hidden');
    clearTimeout(this.timers.versus);
    this.timers.versus = setTimeout(() => this.hideVersus(), 3000);
  }

  hideVersus() {
    this.versus.classList.add('hidden');
  }

  showTitle(text) {
    if (!text) return;
    this.titleSplash.textContent = text;
    this.titleSplash.classList.remove('hidden');
    this.titleSplash.classList.remove('show');
    void this.titleSplash.offsetWidth;
    this.titleSplash.classList.add('show');
    clearTimeout(this.timers.title);
    this.timers.title = setTimeout(() => {
      this.titleSplash.classList.remove('show');
      setTimeout(() => this.titleSplash.classList.add('hidden'), 500);
    }, 2600);
  }

  showResult(win, stats) {
    this.resultKicker.textContent = win ? 'VICTORY' : 'DEFEAT';
    this.resultKicker.classList.toggle('lose', !win);
    this.resultTitle.textContent = win ? 'THE KING STANDS' : 'THE CITY FALLS';
    const items = [
      ['TIME', `${stats.time}s`],
      ['DAMAGE', stats.damage],
      ['KILLS', stats.kills],
      ['DESTROYED', stats.destroyed],
    ];
    this.resultStats.innerHTML = items.map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('');
    this.openOverlay('result');
  }

  setWeatherLabel(kind) {
    this.hudWeather.textContent = (kind || 'clear').toUpperCase();
  }

  setTimeLabel(preset) {
    this.hudTime.textContent = (preset || 'sunset').toUpperCase();
  }

  refreshSandbox(game) {
    if (!game) return;
    const alive = game.monsters.filter((m) => !m.dead).length;
    if (this.sandboxCount) this.sandboxCount.textContent = `${alive} ACTIVE`;
  }

  applySettingsView() {
    if (!this.root) return;
    this.root.querySelectorAll('[data-quality]').forEach((el) => el.classList.toggle('active', el.dataset.quality === this.settings.get('quality')));
    this.root.querySelectorAll('[data-setting]').forEach((input) => {
      const key = input.dataset.setting;
      if (key === 'resolution') {
        const pct = Math.round((this.settings.get('resolution') || 1) * 100);
        input.value = pct;
        const out = this.root.querySelector('#resolution-out');
        if (out) out.textContent = `${pct}%`;
        return;
      }
      if (input.type === 'checkbox') input.checked = !!this.settings.get(key);
      else input.value = String(this.settings.get(key));
    });
    this.applyHudVisibility();
  }

  applyHudVisibility() {
    this.root.classList.toggle('hud-off', !this.settings.get('hud'));
  }

  ready() {
    if (this._ready) return;
    this._ready = true;
    this.loading.classList.add('done');
    setTimeout(() => this.loading.classList.add('gone'), 900);
  }

  fatal(message) {
    const modal = this.root.querySelector('#fatal-modal');
    const msg = this.root.querySelector('#fatal-message');
    if (msg) msg.textContent = message;
    if (modal) {
      this.overlay.classList.remove('hidden');
      this.root.querySelectorAll('.modal').forEach((el) => el.classList.add('hidden'));
      modal.classList.remove('hidden');
    }
  }
}
