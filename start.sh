#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"
PROJECT_DIR="$(pwd -P)"
PORT="${PORT:-3000}"
META_DIR="${OPENCODE_WEB_DIR:-/home/runner/work/_temp/omgithub-web}"
DIST_DIR="$PROJECT_DIR/dist"

run_timed() {
  local label="$1"
  shift
  echo "[timing] start: $label"
  /usr/bin/time -p "$@"
  echo "[timing] end: $label"
}

run_timed "npm install" npm install
run_timed "production build" npm run build
run_timed "create metadata directory" mkdir -p "$META_DIR"
run_timed "write deployment metadata" bash -c 'printf '\''{"project":"%s","directory":"%s"}\n'\'' "$1" "$2" > "$3/deployment-output.json"' _ "$PROJECT_DIR" "$DIST_DIR" "$META_DIR"

exec /usr/bin/time -p npx vite preview --host 0.0.0.0 --port "$PORT" --strictPort
