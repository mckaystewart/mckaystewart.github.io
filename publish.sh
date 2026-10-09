#!/usr/bin/env bash
# Publish a new post to https://mckaystewart.github.io
#
# Usage:
#   ./publish.sh "Post Title" path/to/body.md [path/to/images_dir] [description] [cover_image_filename]
#
# - body.md: Markdown body (no front matter, no H1 title; the layout prints the title).
#   Reference images as  ](images/<file>)  and they are rewritten to /assets/images/<date>/<file>.
# - images_dir: optional folder whose files are copied to assets/images/<date>/
# - description: optional one-line summary/hook (used on the home page, SEO, social cards)
# - cover_image_filename: optional file in images_dir used as the post's social/thumbnail image
#
# Env: POST_DATE=YYYY-MM-DD to override today's date (America/Los_Angeles). DRY_RUN=1 to skip push.
set -euo pipefail
cd "$(dirname "$0")"

TITLE="${1:?title required}"; BODY="${2:?body.md required}"
IMGDIR="${3:-}"; DESC="${4:-}"; COVER="${5:-}"
DATE="${POST_DATE:-$(TZ=America/Los_Angeles date +%F)}"
TIME="$(TZ=America/Los_Angeles date +%H:%M:%S)"; OFFSET="$(TZ=America/Los_Angeles date +%z)"
SLUG="$(echo "$TITLE" | iconv -t ascii//TRANSLIT 2>/dev/null | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g')"
POST="_posts/${DATE}-${SLUG}.md"
[ -e "$POST" ] && { echo "Refusing to overwrite existing $POST" >&2; exit 1; }

git pull --rebase --quiet

if [ -n "$IMGDIR" ]; then
  mkdir -p "assets/images/${DATE}"
  cp -n "$IMGDIR"/* "assets/images/${DATE}/"
fi

python3 - "$TITLE" "$DESC" "$DATE $TIME $OFFSET" "$COVER" "$DATE" "$BODY" "$POST" <<'PY'
import json, sys, os
title, desc, dt, cover, date, body_path, out = sys.argv[1:]
body = open(body_path).read().replace('](images/', f'](/assets/images/{date}/')
fm = ['---', 'layout: post', f'title: {json.dumps(title)}', f'date: {dt}']
if desc:  fm.append(f'description: {json.dumps(desc)}')
if os.environ.get('TAGLINE'): fm.append(f"tagline: {json.dumps(os.environ['TAGLINE'])}")
if cover: fm.append(f'image: /assets/images/{date}/{cover}')
fm += ['---', '']
open(out, 'w').write('\n'.join(fm) + '\n' + body.lstrip('\n'))
PY

echo "Wrote $POST"
URL="https://mckaystewart.github.io/${DATE//-//}/${SLUG}/"
[ "${DRY_RUN:-0}" = 1 ] && { echo "DRY_RUN: not pushing. Would be $URL"; exit 0; }

git add -A
git commit -qm "Post: $TITLE"
git push -q origin main
echo "Pushed. Waiting for GitHub Pages build..."
for i in $(seq 1 40); do
  sleep 15
  S=$(gh api repos/mckaystewart/mckaystewart.github.io/pages/builds/latest --jq '.status' 2>/dev/null || echo unknown)
  [ "$S" = built ] && break
  [ "$S" = errored ] && { echo "Pages build errored"; exit 1; }
done
code=$(curl -s -o /dev/null -w '%{http_code}' "$URL")
echo "Live check: $code $URL"
if [ "$code" = 200 ]; then
  /workspace/blog/indexnow.sh "$URL" "https://mckaystewart.github.io/" "https://mckaystewart.github.io/sitemap.xml" || echo "IndexNow ping failed (non-fatal)"
fi
