#!/bin/bash
# Inline CSS and JS into a single self-contained HTML file
set -e

DIST="$(dirname "$0")/../dist"
OUT="$(dirname "$0")/../bundle.html"

HTML=$(cat "$DIST/index.html")
CSS=$(cat "$DIST"/assets/*.css)
JS=$(cat "$DIST"/assets/*.js)

# Inline CSS
HTML="${HTML/<link rel=\"stylesheet\" crossorigin href=\"/assets/*.css\">/}"
HTML=$(echo "$HTML" | sed 's|<link rel="stylesheet" crossorigin href="/assets/[^"]*">|<style>'"$CSS"'</style>|')

# Inline JS
HTML=$(echo "$HTML" | sed 's|<script type="module" crossorigin src="/assets/[^"]*"></script>|<script type="module">'"$JS"'</script>|')

echo "$HTML" > "$OUT"
echo "Bundle written to $OUT ($(wc -c < "$OUT" | tr -d ' ') bytes)"
