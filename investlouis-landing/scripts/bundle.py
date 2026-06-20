#!/usr/bin/env python3
import os, re, pathlib

dist = pathlib.Path(__file__).parent.parent / 'dist'
out  = pathlib.Path(__file__).parent.parent / 'bundle.html'

html = (dist / 'index.html').read_text()

css_file = list((dist / 'assets').glob('*.css'))[0]
js_file  = list((dist / 'assets').glob('*.js'))[0]

css = css_file.read_text()
js  = js_file.read_text()

html = re.sub(r'<link rel="stylesheet" crossorigin href="[^"]+">',
              lambda m: f'<style>{css}</style>', html)
html = re.sub(r'<script type="module" crossorigin src="[^"]+"></script>',
              lambda m: f'<script type="module">{js}</script>', html)

out.write_text(html)
print(f"Bundle written to {out} ({len(html):,} bytes)")
