#!/bin/sh
# build.sh
# Copies the public site into dist/ for hosting (Cloudflare Pages runs this).
# There is no compile step: this only keeps repo files (CLAUDE.md, ROADMAP.md,
# SOURCES.md, scripts/) off the web. Add any new top-level site file to FILES.
set -e
cd "$(dirname "$0")/.."
FILES="index.html css js assets manifest.webmanifest sw.js _headers"
rm -rf dist
mkdir dist
for f in $FILES; do
  if [ -e "$f" ]; then cp -R "$f" dist/; fi
done
echo "Built dist/:"; ls dist
