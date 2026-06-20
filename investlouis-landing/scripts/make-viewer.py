#!/usr/bin/env python3
"""Generates a self-contained viewer.html with bundle.html embedded as srcdoc."""
import pathlib, html

root    = pathlib.Path(__file__).parent.parent
bundle  = (root / 'bundle.html').read_text()
out     = root / 'viewer.html'

# Escape for srcdoc attribute (needs HTML-attribute-safe content)
srcdoc = bundle.replace('&', '&amp;').replace('"', '&quot;')

viewer = f'''<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>InvestLouis · Visionneuse</title>
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}

  body {{
    background: #080C12;
    font-family: 'Montserrat', system-ui, sans-serif;
    color: #94A3B8;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }}

  .toolbar {{
    flex-shrink: 0;
    height: 52px;
    background: rgba(5,8,13,0.97);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    gap: 12px;
    z-index: 10;
  }}
  .toolbar-left {{ display: flex; align-items: center; gap: 10px; }}
  .logo {{ font-weight: 900; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; color: #fff; }}
  .logo span {{ color: #3B82F6; }}
  .sep {{ width: 1px; height: 18px; background: rgba(255,255,255,0.08); }}
  .label {{ font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: #334155; font-weight: 700; }}

  .devices {{ display: flex; align-items: center; gap: 3px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 3px; }}
  .device-btn {{
    display: flex; align-items: center; justify-content: center; gap: 5px;
    height: 28px; padding: 0 10px; border-radius: 6px; border: none;
    background: transparent; color: #475569; font-family: inherit;
    font-size: 10px; font-weight: 700; letter-spacing: 0.5px;
    cursor: pointer; transition: all 0.2s; white-space: nowrap;
  }}
  .device-btn:hover {{ color: #94A3B8; }}
  .device-btn.active {{ background: #1D4ED8; color: #fff; box-shadow: 0 2px 8px rgba(29,78,216,0.35); }}

  .zoom-group {{ display: flex; align-items: center; gap: 6px; }}
  .zoom-btn {{
    width: 26px; height: 26px; border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.03); color: #94A3B8; font-size: 15px;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: all 0.2s;
  }}
  .zoom-btn:hover {{ background: rgba(255,255,255,0.07); color: #fff; }}
  #zoom-val {{ font-size: 11px; font-weight: 700; color: #64748B; min-width: 36px; text-align: center; }}

  .toolbar-right {{ display: flex; align-items: center; gap: 8px; }}
  .dim-badge {{ font-size: 10px; font-weight: 700; color: #334155; min-width: 90px; text-align: right; }}

  .canvas {{
    flex: 1; overflow: auto; display: flex;
    align-items: flex-start; justify-content: center; padding: 24px;
    background: radial-gradient(ellipse 60% 40% at 50% 0%, rgba(29,78,216,0.04) 0%, transparent 70%), #080C12;
  }}
  .canvas::before {{
    content: ''; position: fixed; inset: 52px 0 0 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px);
    background-size: 28px 28px; pointer-events: none; z-index: 0;
  }}

  .frame-outer {{
    position: relative; z-index: 1;
    transform-origin: top center;
    transition: transform 0.4s cubic-bezier(0.32,0.72,0,1);
  }}
  .frame-shadow {{
    border-radius: 12px; overflow: hidden;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.75), 0 8px 24px rgba(29,78,216,0.12);
    transition: border-radius 0.4s;
  }}
  .phone-bar {{
    display: none; height: 28px; background: #0B1120;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    align-items: center; justify-content: center;
  }}
  .phone-bar .notch {{ width: 80px; height: 10px; background: #1a2540; border-radius: 10px; }}

  iframe {{
    display: block; border: none;
    transition: width 0.4s cubic-bezier(0.32,0.72,0,1), height 0.4s cubic-bezier(0.32,0.72,0,1);
  }}

  /* Section nav */
  .sections {{
    position: fixed; right: 16px; top: 50%; transform: translateY(-50%);
    display: flex; flex-direction: column; gap: 7px; z-index: 20;
  }}
  .sec-dot {{
    width: 6px; height: 6px; border-radius: 50%;
    background: rgba(255,255,255,0.12); cursor: pointer;
    transition: all 0.2s; position: relative;
  }}
  .sec-dot:hover {{ background: #3B82F6; transform: scale(1.5); }}
  .sec-dot .tip {{
    position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
    background: #0B1120; border: 1px solid rgba(255,255,255,0.08);
    color: #94A3B8; font-size: 10px; font-weight: 700; letter-spacing: 0.5px;
    text-transform: uppercase; padding: 3px 8px; border-radius: 4px;
    white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 0.15s;
  }}
  .sec-dot:hover .tip {{ opacity: 1; }}
</style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap" rel="stylesheet">
</head>
<body>

<div class="toolbar">
  <div class="toolbar-left">
    <div class="logo">INVEST<span>LOUIS</span></div>
    <div class="sep"></div>
    <div class="label">Visionneuse</div>
    <div class="sep"></div>

    <div class="devices">
      <button class="device-btn active" onclick="setDevice('desktop')" id="btn-desktop">
        <svg width="13" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        Desktop
      </button>
      <button class="device-btn" onclick="setDevice('tablet')" id="btn-tablet">
        <svg width="10" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="17" r="1"/></svg>
        Tablette
      </button>
      <button class="device-btn" onclick="setDevice('mobile')" id="btn-mobile">
        <svg width="9" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="18" r="1"/></svg>
        Mobile
      </button>
    </div>

    <div class="sep"></div>
    <div class="zoom-group">
      <button class="zoom-btn" onclick="changeZoom(-10)">−</button>
      <span id="zoom-val">100%</span>
      <button class="zoom-btn" onclick="changeZoom(+10)">+</button>
    </div>
  </div>

  <div class="toolbar-right">
    <span class="dim-badge" id="dim-badge">1280 × auto</span>
  </div>
</div>

<div class="canvas">
  <div class="frame-outer" id="frame-outer">
    <div class="frame-shadow" id="frame-shadow">
      <div class="phone-bar" id="phone-bar"><div class="notch"></div></div>
      <iframe id="preview" srcdoc="{srcdoc}" title="InvestLouis — La Clé de la Rentabilité"></iframe>
    </div>
  </div>
</div>

<div class="sections">
  <div class="sec-dot" onclick="jump(0)"><div class="tip">Hero</div></div>
  <div class="sec-dot" onclick="jump(920)"><div class="tip">Ticker</div></div>
  <div class="sec-dot" onclick="jump(1350)"><div class="tip">Problème</div></div>
  <div class="sec-dot" onclick="jump(2300)"><div class="tip">Bénéfices</div></div>
  <div class="sec-dot" onclick="jump(3200)"><div class="tip">À propos</div></div>
  <div class="sec-dot" onclick="jump(4100)"><div class="tip">Témoignages</div></div>
  <div class="sec-dot" onclick="jump(4900)"><div class="tip">Urgence</div></div>
  <div class="sec-dot" onclick="jump(5400)"><div class="tip">CTA Final</div></div>
  <div class="sec-dot" onclick="jump(6100)"><div class="tip">Footer</div></div>
</div>

<script>
  const iframe  = document.getElementById('preview')
  const shadow  = document.getElementById('frame-shadow')
  const outer   = document.getElementById('frame-outer')
  const phonebar= document.getElementById('phone-bar')
  const badge   = document.getElementById('dim-badge')

  const DEVICES = {{
    desktop: {{ w: 1280, h: null, bar: false, radius: '12px' }},
    tablet:  {{ w: 768,  h: 1024, bar: false, radius: '12px' }},
    mobile:  {{ w: 390,  h: 844,  bar: true,  radius: '40px' }},
  }}

  let zoom = 100
  let device = 'desktop'

  function applyDevice(key) {{
    const d = DEVICES[key]
    iframe.style.width  = d.w + 'px'
    iframe.style.height = d.h ? d.h + 'px' : '6000px'
    phonebar.style.display = d.bar ? 'flex' : 'none'
    shadow.style.borderRadius = d.radius
    iframe.style.borderRadius = d.bar ? '0 0 ' + d.radius + ' ' + d.radius : '0'
    outer.style.transform = 'scale(' + (zoom/100) + ')'
    badge.textContent = d.h ? d.w + ' × ' + d.h : d.w + ' × auto'
  }}

  function setDevice(key) {{
    device = key
    document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'))
    document.getElementById('btn-' + key).classList.add('active')
    applyDevice(key)
  }}

  function changeZoom(delta) {{
    zoom = Math.min(150, Math.max(40, zoom + delta))
    document.getElementById('zoom-val').textContent = zoom + '%'
    applyDevice(device)
  }}

  function jump(y) {{
    try {{ iframe.contentWindow.scrollTo({{ top: y, behavior: 'smooth' }}) }} catch(e) {{}}
  }}

  applyDevice('desktop')

  document.addEventListener('keydown', e => {{
    if (e.key === '1') setDevice('desktop')
    if (e.key === '2') setDevice('tablet')
    if (e.key === '3') setDevice('mobile')
    if (e.key === '+' || e.key === '=') changeZoom(10)
    if (e.key === '-') changeZoom(-10)
  }})
</script>
</body>
</html>'''

out.write_text(viewer)
print(f"viewer.html generated ({len(viewer):,} bytes)")
