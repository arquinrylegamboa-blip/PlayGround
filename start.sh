#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="${PROJECT_DIR:-$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd -P)}"
cd "$PROJECT_DIR"
PORT="${PORT:-3000}"
META_DIR="${OPENCODE_WEB_DIR:-${RUNNER_TEMP:-/home/runner/work/_temp}/omgithub-web}"
DIST_DIR="$PROJECT_DIR/dist"

run_timed() {
  local label="$1"
  shift
  echo "[timing] start: $label"
  /usr/bin/time -p "$@"
  echo "[timing] end: $label"
}

run_timed "install dependencies" npm install --no-audit --no-fund

needs_build=false
if [[ ! -f "$DIST_DIR/index.html" ]]; then
  needs_build=true
elif [[ -n "$(find "$PROJECT_DIR/src" "$PROJECT_DIR/index.html" "$PROJECT_DIR/vite.config.js" "$PROJECT_DIR/package.json" -newer "$DIST_DIR/index.html" -print -quit 2>/dev/null)" ]]; then
  needs_build=true
fi
if [[ "$needs_build" == true ]]; then
  run_timed "production build" npm run build
else
  echo "[timing] skip: production build is up to date"
fi

run_timed "create metadata directory" mkdir -p "$META_DIR"
run_timed "write deployment metadata" bash -c 'printf '\''{"project":"%s","directory":"%s"}\n'\'' "$1" "$2" > "$3/deployment-output.json"' _ "$PROJECT_DIR" "$DIST_DIR" "$META_DIR"

echo "[timing] start: preview server"
exec /usr/bin/time -p "$PROJECT_DIR/node_modules/.bin/vite" preview --host 0.0.0.0 --port "$PORT" --strictPort
