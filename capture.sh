#!/usr/bin/env bash
set -euo pipefail

: "${CAPTURE_URL:?Set CAPTURE_URL}"
: "${CAPTURE_DIR:?Set CAPTURE_DIR}"
: "${RUNTIME_DIR:?Set RUNTIME_DIR}"

cd "$(dirname "$0")"
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
if [[ $status -ne 0 ]]; then
  echo "[capture] capture process failed with exit $status" >&2
  exit "$status"
fi

for image in "$CAPTURE_DIR/final-desktop.png" "$CAPTURE_DIR/final-mobile.png"; do
  if [[ ! -s "$image" ]]; then
    echo "[capture] missing or empty screenshot: $image" >&2
    exit 1
  fi
done

echo "[capture] desktop and mobile screenshots verified"
