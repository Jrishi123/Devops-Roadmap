#!/usr/bin/env bash
set -euo pipefail
THRESHOLD="${1:-80}"
USAGE="$(df -P / | awk 'NR==2 {gsub(/%/, "", $5); print $5}')"
if [[ ! "$THRESHOLD" =~ ^[0-9]+$ ]] || (( THRESHOLD < 1 || THRESHOLD > 100 )); then echo "ERROR: threshold must be 1–100" >&2; exit 2; fi
if [[ ! "$USAGE" =~ ^[0-9]+$ ]]; then echo "ERROR: unable to read disk usage" >&2; exit 1; fi
echo "Root filesystem usage: ${USAGE}% (threshold: ${THRESHOLD}%)"
if (( USAGE >= THRESHOLD )); then echo "WARNING: disk usage is at or above threshold"; exit 1; else echo "OK: disk usage is below threshold"; fi
