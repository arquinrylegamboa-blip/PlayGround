#!/usr/bin/env bash
set -euo pipefail

: "${CAPTURE_URL:?Set CAPTURE_URL}"
: "${CAPTURE_DIR:?Set CAPTURE_DIR}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd -P)"
PROJECT_DIR="${PROJECT_DIR:-$SCRIPT_DIR}"
RUNTIME_DIR="${RUNTIME_DIR:-${RUNNER_TEMP:-/home/runner/work/_temp}/omgithub-runtime}"
CAPTURE_DIR="$(realpath -m "$CAPTURE_DIR")"
cd "$PROJECT_DIR"

case "$CAPTURE_DIR/" in
  "$PROJECT_DIR/"*)
    echo "[capture] CAPTURE_DIR must be outside the project source: $CAPTURE_DIR" >&2
    exit 1
    ;;
esac

export CAPTURE_URL CAPTURE_DIR RUNTIME_DIR
export CAPTURE_STRICT="${CAPTURE_STRICT:-1}"

run_timed() {
  local label="$1"
  shift
  echo "[timing] start: $label"
  local status=0
  /usr/bin/time -p "$@" || status=$?
  echo "[timing] end: $label"
  return "$status"
}

run_timed "create capture directory" mkdir -p "$CAPTURE_DIR"

set +e
run_timed "browser navigation and screenshot capture" node "$RUNTIME_DIR/scripts/default-capture.mjs"
status=$?
set -e

if [[ "$status" -eq 75 ]]; then
  echo "[capture] temporary browser or navigation failure" >&2
  exit 75
fi
if [[ "$status" -ne 0 ]]; then
  echo "[capture] capture failed with exit $status" >&2
  exit 1
fi

run_timed "verify screenshots" bash -c '
  for image in "$1/final-desktop.png" "$1/final-mobile.png"; do
    if [[ ! -s "$image" ]]; then
      echo "missing or empty screenshot: $image" >&2
      exit 1
    fi
  done
' _ "$CAPTURE_DIR"

echo "[capture] desktop and mobile screenshots verified"
