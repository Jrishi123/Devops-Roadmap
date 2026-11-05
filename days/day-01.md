# Day 01 — Linux Fundamentals & Environment Setup

**Week 1: DevOps Foundations**  
**Estimated time:** 3–4 hours  
**Focus:** Linux architecture, filesystem, shell, users, permissions, processes and services.

## Learning objectives
- Explain kernel, shell, processes and distributions
- Navigate the Linux filesystem and inspect system health
- Manage users, groups and file permissions
- Inspect processes, services and logs

## Suggested schedule
| Activity | Time |
|---|---:|
| Concepts and notes | 45–60 min |
| Guided lab | 90–120 min |
| Assignment and evidence | 30–45 min |
| Review | 15 min |

## Practical lab
1. Set up Ubuntu 24.04 using Multipass on macOS (or a Linux VM)
2. Explore /etc, /var, /home, /tmp, /usr and /opt
3. Create a devops-lab directory with scripts, logs and config folders
4. Install Nginx; inspect it with systemctl, curl and journalctl
5. Create and run system-info.sh and disk-monitor.sh

## Assignment and deliverables
- scripts/system-info.sh
- scripts/disk-monitor.sh
- logs/application.log
- README notes with VM setup and command output

## Checkpoint
Explain chmod 755 vs 600; identify /etc; show Nginx status; explain df vs du.

## Submission template
```text
Day: 1
Status: Not started / In progress / Completed
Time spent:
Commands or steps completed:
Evidence / Git commit:
What worked:
What failed:
What I learned:
Checkpoint answer:
```

## Definition of done
- [ ] Learning objectives reviewed
- [ ] Lab completed
- [ ] Assignment files committed
- [ ] Evidence captured (logs, test output or screenshots)
- [ ] Checkpoint answered
- [ ] Notes added to the repository

## Day 1 command reference

```bash
uname -a
hostname
whoami
id
uptime
date
pwd
ls -la
df -h
du -sh .
find . -type f
grep -n "ERROR" logs/application.log
ps aux
top
```

### Filesystem and permissions lab
```bash
mkdir -p ~/devops-lab/{scripts,logs,config}
cd ~/devops-lab
touch logs/application.log config/app.conf
printf "Application started\\nERROR: Database connection failed\\n" >> logs/application.log
grep "ERROR" logs/application.log
chmod 600 config/app.conf
ls -l config/
```

### Nginx service lab (Ubuntu VM)
```bash
sudo apt update
sudo apt install -y nginx
sudo systemctl status nginx
curl -I http://localhost
sudo journalctl -u nginx -n 30
sudo systemctl restart nginx
sudo systemctl is-active nginx
```
macOS uses Darwin, not the Linux kernel, and does not use systemd by default. Run `systemctl` exercises inside the Ubuntu VM.

### `scripts/system-info.sh`
```bash
#!/usr/bin/env bash
set -euo pipefail
echo "=== SYSTEM HEALTH REPORT ==="
echo "Hostname: $(hostname)"
echo "OS: $(uname -s)"
echo "Kernel: $(uname -r)"
echo "User: $(whoami)"
echo "Uptime: $(uptime)"
if command -v nproc >/dev/null 2>&1; then
  echo "CPU cores: $(nproc)"
elif command -v sysctl >/dev/null 2>&1; then
  echo "CPU cores: $(sysctl -n hw.ncpu)"
fi
if command -v free >/dev/null 2>&1; then
  free -h
elif command -v vm_stat >/dev/null 2>&1; then
  vm_stat
fi
df -h /
```

### `scripts/disk-monitor.sh`
```bash
#!/usr/bin/env bash
set -euo pipefail
THRESHOLD="${1:-80}"
USAGE="$(df -P / | awk 'NR==2 {gsub(/%/, "", $5); print $5}')"
if [[ ! "$THRESHOLD" =~ ^[0-9]+$ ]] || (( THRESHOLD < 1 || THRESHOLD > 100 )); then
  echo "ERROR: threshold must be an integer from 1 to 100" >&2
  exit 2
fi
if [[ ! "$USAGE" =~ ^[0-9]+$ ]]; then
  echo "ERROR: unable to read disk usage" >&2
  exit 1
fi
echo "Root filesystem usage: ${USAGE}% (threshold: ${THRESHOLD}%)"
if (( USAGE >= THRESHOLD )); then
  echo "WARNING: disk usage is at or above threshold"
  exit 1
else
  echo "OK: disk usage is below threshold"
fi
```
Run `chmod +x scripts/*.sh`, then run both scripts.
