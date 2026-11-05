#!/usr/bin/env python3
from collections import Counter
from pathlib import Path
import argparse, re, sys
LEVELS = ("DEBUG", "INFO", "WARN", "WARNING", "ERROR", "CRITICAL")
def main() -> int:
    parser = argparse.ArgumentParser(description="Count common log levels.")
    parser.add_argument("logfile", type=Path)
    args = parser.parse_args()
    if not args.logfile.is_file():
        print(f"ERROR: file not found: {args.logfile}", file=sys.stderr); return 2
    counts = Counter()
    try:
        for line in args.logfile.read_text(encoding="utf-8", errors="replace").splitlines():
            match = re.search(r"\\b(DEBUG|INFO|WARN|WARNING|ERROR|CRITICAL)\\b", line.upper())
            if match: counts[match.group(1)] += 1
    except OSError as exc:
        print(f"ERROR: cannot read file: {exc}", file=sys.stderr); return 1
    for level in LEVELS: print(f"{level:8} {counts[level]}")
    return 0
if __name__ == "__main__": raise SystemExit(main())
