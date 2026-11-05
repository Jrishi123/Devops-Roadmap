#!/usr/bin/env bash
set -euo pipefail
echo "=== SYSTEM HEALTH REPORT ==="
echo "Hostname: $(hostname)"
echo "OS: $(uname -s)"
echo "Kernel: $(uname -r)"
echo "User: $(whoami)"
echo "Uptime: $(uptime)"
if command -v nproc >/dev/null 2>&1; then echo "CPU cores: $(nproc)"; elif command -v sysctl >/dev/null 2>&1; then echo "CPU cores: $(sysctl -n hw.ncpu)"; fi
if command -v free >/dev/null 2>&1; then free -h; elif command -v vm_stat >/dev/null 2>&1; then vm_stat; fi
df -h /
