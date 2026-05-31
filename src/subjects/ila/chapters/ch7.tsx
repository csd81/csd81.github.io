import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cols, Tabs, RichTex, type Tab } from '../components/kit';

const fmt = (v: number, d = 3) => +v.toFixed(d);
function fmtC(r: number, i: number) {
  const is = fmt(i), rs = fmt(r);
  if (i === 0) return `${rs}`;
  if (r === 0) return `${is}i`;
  return `${rs} ${i >= 0 ? '+' : '-'} ${Math.abs(is)}i`;
}
function drawAxes(ctx: CanvasRenderingContext2D, cx: number, cy: number, W: number, H: number, scale: number, labels: boolean) {
  ctx.strokeStyle = '#30363d'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, H); ctx.stroke();
  ctx.fillStyle = '#484f58'; ctx.font = '10px monospace'; ctx.textAlign = 'center';
  if (labels) {
    ctx.fillText('Re', W - 14, cy - 6); ctx.fillText('Im', cx + 14, 10);
    for (let t = -6; t <= 6; t++) {
      if (t === 0) continue;
      const tx = cx + t * scale, ty = cy - t * scale;
      ctx.beginPath(); ctx.moveTo(tx, cy - 3); ctx.lineTo(tx, cy + 3); ctx.strokeStyle = '#30363d'; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx - 3, ty); ctx.lineTo(cx + 3, ty); ctx.stroke();
      if (t > -5 && t < 5) { ctx.fillText(String(t), tx, cy + 12); ctx.fillText(String(t), cx - 16, ty + 4); }
    }
  }
}

/* ════ Tab 1: complex calculator ════ */
function ComplexCalc() {
  const [z1r, setZ1r] = useState(-2), [z1i, setZ1i] = useState(5);
  const [z2r, setZ2r] = useState(4), [z2i, setZ2i] = useState(3);
  const ref = useRef<HTMLCanvasElement>(null);
  const addR = z1r + z2r, addI = z1i + z2i;
  const subR = z1r - z2r, subI = z1i - z2i;
  const mulR = z1r * z2r - z1i * z2i, mulI = z1r * z2i + z2r * z1i;
  const denom = z2r * z2r + z2i * z2i;
  const divR = (z1r * z2r + z1i * z2i) / denom, divI = (z2r * z1i - z1r * z2i) / denom;
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext('2d'); if (!ctx) return;
    const W = cvs.width, H = cvs.height, cx = W / 2, cy = H / 2, sc = 28;
    ctx.clearRect(0, 0, W, H);
    drawAxes(ctx, cx, cy, W, H, sc, true);
    const vec = (r: number, g: number, b: number, x: number, y: number, lbl: string) => {
      const ex = cx + x * sc, ey = cy - y * sc;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ex, ey);
      ctx.strokeStyle = `rgb(${r},${g},${b})`; ctx.lineWidth = 2.5; ctx.stroke();
      ctx.beginPath(); ctx.arc(ex, ey, 4, 0, Math.PI * 2); ctx.fillStyle = `rgb(${r},${g},${b})`; ctx.fill();
      ctx.font = 'bold 11px monospace'; ctx.textAlign = 'left'; ctx.fillText(lbl, ex + 6, ey - 4);
    };
    vec(34, 211, 238, z1r, z1i, 'z₁');
    vec(249, 115, 22, z2r, z2i, 'z₂');
    vec(74, 222, 128, addR, addI, 'z₁+z₂');
  }, [z1r, z1i, z2r, z2i, addR, addI]);
  const inp = (val: number, set: (n: number) => void) => (
    <input type="number" className="ila-num" value={val} onChange={(e) => set(+e.target.value)} />
  );
  return (
    <div className="info-box">
      <span className="lbl">Interaktív komplex kalkulátor</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.5rem 0' }}>
        <div style={{ fontSize: '.85rem' }}>z₁: {inp(z1r, setZ1r)} + {inp(z1i, setZ1i)}i</div>
        <div style={{ fontSize: '.85rem' }}>z₂: {inp(z2r, setZ2r)} + {inp(z2i, setZ2i)}i</div>
      </div>
      <RichTex
        key={`${z1r},${z1i},${z2r},${z2i}`}
        html={String.raw`<div style="font-size:.85rem;line-height:1.9"><div><span style="color:#22d3ee">z₁ + z₂ =</span> \(${fmtC(addR, addI)}\)</div><div><span style="color:#22d3ee">z₁ − z₂ =</span> \(${fmtC(subR, subI)}\)</div><div><span style="color:#22d3ee">z₁ · z₂ =</span> \(${fmtC(mulR, mulI)}\)</div><div><span style="color:#22d3ee">z₁ / z₂ =</span> \(${fmtC(divR, divI)}\)</div></div>`}
      />
      <canvas ref={ref} width={400} height={260} style={{ background: '#0d1117', border: '1px solid #21262d', marginTop: '.5rem', maxWidth: '100%' }} />
    </div>
  );
}

/* ════ Tab 2: conjugate (draggable) ════ */
function ConjCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [pt, setPt] = useState({ x: 2, y: 3 });
  const drag = useRef(false);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext('2d'); if (!ctx) return;
    const W = cvs.width, H = cvs.height, cx = W / 2, cy = H / 2, sc = 30;
    ctx.clearRect(0, 0, W, H);
    drawAxes(ctx, cx, cy, W, H, sc, true);
    const { x, y } = pt;
    const ex = cx + x * sc, ey = cy - y * sc, ex2 = cx + x * sc, ey2 = cy + y * sc;
    const dot = (px: number, py: number, clr: string, lbl: string) => {
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.strokeStyle = clr; ctx.lineWidth = 2; ctx.stroke();
      ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2); ctx.fillStyle = clr; ctx.fill();
      ctx.font = 'bold 12px monospace'; ctx.textAlign = 'left'; ctx.fillText(lbl, px + 7, py - 4);
    };
    ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(ex, ey); ctx.lineTo(ex2, ey2);
    ctx.strokeStyle = '#484f58'; ctx.lineWidth = 1; ctx.stroke(); ctx.setLineDash([]);
    dot(ex, ey, '#22d3ee', `z=${fmt(x)}+${fmt(y)}i`);
    dot(ex2, ey2, '#f97316', `z̄=${fmt(x)}−${fmt(y)}i`);
  }, [pt]);
  const move = (e: React.MouseEvent) => {
    const cvs = ref.current; if (!cvs) return;
    const r = cvs.getBoundingClientRect(), sc = 30, cx = cvs.width / 2, cy = cvs.height / 2;
    const scaleX = cvs.width / r.width, scaleY = cvs.height / r.height;
    setPt({ x: ((e.clientX - r.left) * scaleX - cx) / sc, y: -((e.clientY - r.top) * scaleY - cy) / sc });
  };
  const absz = Math.sqrt(pt.x * pt.x + pt.y * pt.y);
  return (
    <div className="info-box">
      <span className="lbl">Húzd a pontot a komplex síkon</span>
      <canvas
        ref={ref} width={440} height={300}
        style={{ background: '#0d1117', border: '1px solid #21262d', cursor: 'crosshair', maxWidth: '100%' }}
        onMouseDown={(e) => { drag.current = true; move(e); }}
        onMouseMove={(e) => { if (drag.current) move(e); }}
        onMouseUp={() => { drag.current = false; }}
        onMouseLeave={() => { drag.current = false; }}
      />
      <RichTex
        key={`${pt.x},${pt.y}`}
        className="box-body"
        html={String.raw`<div style="margin-top:.4rem">z = \(${fmt(pt.x)} + ${fmt(pt.y)}i\) | z̄ = \(${fmt(pt.x)} - ${fmt(pt.y)}i\) | |z| = \(${fmt(absz)}\) | z·z̄ = \(${fmt(absz * absz)}\)</div>`}
      />
    </div>
  );
}

/* ════ Tab 3: polar converter ════ */
function PolarConverter() {
  const [x, setX] = useState(-1), [y, setY] = useState(1);
  const ref = useRef<HTMLCanvasElement>(null);
  const r = Math.sqrt(x * x + y * y), phi = Math.atan2(y, x);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext('2d'); if (!ctx) return;
    const W = cvs.width, H = cvs.height, cx = W / 2, cy = H / 2;
    const sc = Math.min((W * 0.4) / Math.max(1, Math.abs(x), Math.abs(y)), 40);
    ctx.clearRect(0, 0, W, H);
    drawAxes(ctx, cx, cy, W, H, sc, true);
    ctx.beginPath(); ctx.arc(cx, cy, r * sc, 0, Math.PI * 2); ctx.strokeStyle = '#22d3ee22'; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, 28, 0, -phi, phi < 0); ctx.strokeStyle = '#f97316'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = '#f97316'; ctx.font = '11px monospace';
    const mid = phi / 2;
    ctx.fillText('φ', cx + 36 * Math.cos(-mid) - 5, cy + 36 * Math.sin(-mid) + 4);
    const ex = cx + x * sc, ey = cy - y * sc;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ex, ey); ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.beginPath(); ctx.arc(ex, ey, 5, 0, Math.PI * 2); ctx.fillStyle = '#22d3ee'; ctx.fill();
    ctx.font = 'bold 12px monospace'; ctx.fillText('z', ex + 7, ey - 4);
    ctx.fillStyle = '#67e8f9'; ctx.font = '11px monospace'; ctx.fillText(`r=${fmt(r)}`, cx + x * sc / 2 - 10, cy - y * sc / 2 - 8);
  }, [x, y, r, phi]);
  const phiStr = phi.toFixed(4), degStr = (phi * 180 / Math.PI).toFixed(1);
  return (
    <div className="info-box">
      <span className="lbl">Konverter — normál ↔ trigonometrikus alak</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.5rem 0', fontSize: '.85rem', alignItems: 'center' }}>
        <span>x = <input type="number" step={0.5} className="ila-num" value={x} onChange={(e) => setX(+e.target.value)} /></span>
        <span>y = <input type="number" step={0.5} className="ila-num" value={y} onChange={(e) => setY(+e.target.value)} /></span>
      </div>
      <RichTex
        key={`${x},${y}`}
        className="box-body"
        html={String.raw`<div style="margin-bottom:.5rem">\(z = ${fmt(x)} + ${fmt(y)}i\) → \(r = ${fmt(r)},\;\varphi = ${phiStr}\text{ rad} = ${degStr}°\)<br>Trig. alak: \(z = ${fmt(r)}(\cos(${phiStr}) + i\sin(${phiStr}))\)</div>`}
      />
      <canvas ref={ref} width={400} height={300} style={{ background: '#0d1117', border: '1px solid #21262d', maxWidth: '100%' }} />
    </div>
  );
}

/* ════ Tab 4: n-th roots ════ */
const ROOT_COLORS = ['#22d3ee', '#67e8f9', '#a5f3fc', '#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd', '#e0f2fe'];
function RootsViz() {
  const [x, setX] = useState(-8), [y, setY] = useState(0), [n, setN] = useState(3);
  const ref = useRef<HTMLCanvasElement>(null);
  const [list, setList] = useState<{ col: string; html: string }[]>([]);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext('2d'); if (!ctx) return;
    const r = Math.sqrt(x * x + y * y), phi = Math.atan2(y, x), rn = Math.pow(r, 1 / n);
    const W = cvs.width, H = cvs.height, cx = W / 2, cy = H / 2;
    const sc = Math.min(cx * 0.8 / Math.max(rn, 0.5), 60);
    ctx.clearRect(0, 0, W, H);
    drawAxes(ctx, cx, cy, W, H, sc, true);
    ctx.beginPath(); ctx.arc(cx, cy, rn * sc, 0, Math.PI * 2); ctx.strokeStyle = '#22d3ee33'; ctx.lineWidth = 1; ctx.stroke();
    const ozx = cx + x * sc, ozy = cy - y * sc;
    ctx.beginPath(); ctx.arc(ozx, ozy, 5, 0, Math.PI * 2); ctx.fillStyle = '#f97316'; ctx.fill();
    ctx.fillStyle = '#f97316'; ctx.font = '11px monospace'; ctx.fillText('z', ozx + 7, ozy - 4);
    const rows: { col: string; html: string }[] = [];
    for (let k = 0; k < n; k++) {
      const ang = (phi + 2 * Math.PI * k) / n;
      const wx = rn * Math.cos(ang), wy = rn * Math.sin(ang);
      const px = cx + wx * sc, py = cy - wy * sc, col = ROOT_COLORS[k % ROOT_COLORS.length];
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.strokeStyle = col + '66'; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill();
      ctx.font = 'bold 11px monospace'; ctx.fillText(`w${k}`, px + 6, py - 4);
      const angDeg = (ang * 180 / Math.PI).toFixed(1);
      rows.push({ col, html: `w${k} = ${fmt(rn)}(cos ${angDeg}° + i·sin ${angDeg}°) = ${fmt(wx)} + ${fmt(wy)}i` });
    }
    setList(rows);
  }, [x, y, n]);
  return (
    <div className="info-box">
      <span className="lbl">Interaktív gyökvizualizáló</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.5rem 0', fontSize: '.85rem' }}>
        <span>z: x=<input type="number" className="ila-num" value={x} onChange={(e) => setX(+e.target.value)} /> y=<input type="number" className="ila-num" value={y} onChange={(e) => setY(+e.target.value)} /></span>
        <span>n = <input type="range" min={2} max={8} value={n} onChange={(e) => setN(+e.target.value)} style={{ width: 100 }} /> {n}</span>
      </div>
      <canvas ref={ref} width={440} height={340} style={{ background: '#0d1117', border: '1px solid #21262d', maxWidth: '100%' }} />
      <div className="box-body" style={{ maxHeight: 120, overflowY: 'auto', marginTop: '.5rem' }}>
        {list.map((it, i) => <div key={i} style={{ color: it.col, margin: '.1rem 0' }}>{it.html}</div>)}
      </div>
    </div>
  );
}

/* ════ Tab 5: unity roots ════ */
const UNITY_COLORS = ['#22d3ee', '#67e8f9', '#a5f3fc', '#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd', '#e0f2fe',
  '#f472b6', '#fb923c', '#facc15', '#4ade80', '#818cf8', '#c084fc', '#e879f9', '#f9a8d4'];
function UnityRoots() {
  const [n, setN] = useState(6);
  const ref = useRef<HTMLCanvasElement>(null);
  const [rows, setRows] = useState<{ col: string; k: number; deg: string; re: number; im: number }[]>([]);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext('2d'); if (!ctx) return;
    const W = cvs.width, H = cvs.height, cx = W / 2, cy = H / 2, sc = 130;
    ctx.clearRect(0, 0, W, H);
    drawAxes(ctx, cx, cy, W, H, sc, true);
    ctx.beginPath(); ctx.arc(cx, cy, sc, 0, Math.PI * 2); ctx.strokeStyle = '#22d3ee44'; ctx.lineWidth = 1.5; ctx.stroke();
    const data: { col: string; k: number; deg: string; re: number; im: number }[] = [];
    for (let k = 0; k < n; k++) {
      const ang = 2 * Math.PI * k / n;
      const ex = cx + sc * Math.cos(ang), ey = cy - sc * Math.sin(ang), col = UNITY_COLORS[k % UNITY_COLORS.length];
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ex, ey); ctx.strokeStyle = col + '55'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.beginPath(); ctx.arc(ex, ey, 6, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill();
      ctx.strokeStyle = '#0d1117'; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = col; ctx.font = 'bold 10px monospace'; ctx.textAlign = 'center';
      ctx.fillText('ε' + k, ex + (ex > cx ? 16 : -16), ey + (ey < cy ? -10 : 14));
      data.push({ col, k, deg: (ang * 180 / Math.PI).toFixed(0), re: fmt(Math.cos(ang)), im: fmt(Math.sin(ang)) });
    }
    setRows(data);
  }, [n]);
  return (
    <div className="info-box">
      <span className="lbl">n-edik egységgyökök vizualizálója</span>
      <div style={{ margin: '.5rem 0', fontSize: '.85rem' }}>
        n = <input type="range" min={1} max={16} value={n} onChange={(e) => setN(+e.target.value)} style={{ width: 130 }} /> {n}
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <canvas ref={ref} width={340} height={340} style={{ background: '#0d1117', border: '1px solid #21262d', maxWidth: '100%' }} />
        <div style={{ flex: 1, minWidth: 180, maxHeight: 340, overflowY: 'auto' }}>
          <table className="truth-tbl" style={{ width: '100%', fontSize: '.78rem' }}>
            <thead><tr><th>k</th><th>φ</th><th>Re</th><th>Im</th></tr></thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.k}><td style={{ color: r.col }}>ε{r.k}</td><td>{r.deg}°</td><td>{r.re}</td><td>{r.im}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ════ Static theory ════ */
const t1a = String.raw`
<h5 style="color:#22d3ee;font-weight:700;margin:0 0 .75rem">Komplex számok bevezetése és alapműveletek</h5>
<div class="def-box"><div class="box-body">Az \(a + bi\) alakú kifejezéseket <strong>komplex számoknak</strong> nevezzük, ahol \(a, b \in \mathbb{R}\) és \(i^2 = -1\).<br>\(\mathbb{C} := \{a + bi : a, b \in \mathbb{R}\}\)<br>Ha \(z = x + yi\): \(\operatorname{Re} z = x\), \(\operatorname{Im} z = y\).</div></div>
<div class="info-box"><strong style="color:#22d3ee">Összeadás / Kivonás:</strong> \(z_1 \pm z_2 = (x_1 \pm x_2) + (y_1 \pm y_2)i\)</div>
<div class="info-box"><strong style="color:#22d3ee">Szorzás:</strong> \(z_1 z_2 = (x_1 x_2 - y_1 y_2) + (x_1 y_2 + x_2 y_1)i\)</div>
<div class="info-box"><strong style="color:#22d3ee">Osztás:</strong> \(\dfrac{z_1}{z_2} = \dfrac{x_1 x_2 + y_1 y_2}{x_2^2 + y_2^2} + \dfrac{x_2 y_1 - x_1 y_2}{x_2^2 + y_2^2}\,i\)</div>`;

const t2a = String.raw`
<h5 style="color:#22d3ee;font-weight:700;margin:0 0 .75rem">Komplex konjugált és abszolút érték</h5>
<div class="def-box"><div class="box-body"><strong>Konjugált:</strong> \(\bar{z} = x - yi\) — geometriailag tükrözés a valós tengelyre.</div></div>
<div class="def-box"><div class="box-body"><strong>Abszolút érték:</strong> \(|z| = \sqrt{x^2 + y^2}\) — az origótól mért távolság.</div></div>
<div class="thm-box"><div class="box-body"><strong>Tulajdonságok:</strong> \(\bar{\bar{z}} = z;\; \overline{z_1 z_2} = \bar{z}_1 \bar{z}_2;\; z + \bar{z} = 2\operatorname{Re}z;\; z\bar{z} = |z|^2\)<br>\(|z_1 z_2| = |z_1||z_2|;\; \bigl||z_1| - |z_2|\bigr| \le |z_1 + z_2| \le |z_1| + |z_2|\) (háromszög-egyenlőtlenség)</div></div>`;

const t3a = String.raw`
<h5 style="color:#22d3ee;font-weight:700;margin:0 0 .75rem">Trigonometrikus alak &amp; De Moivre</h5>
<div class="def-box"><div class="box-body">\(z = x + yi \ne 0\) trigonometrikus alakja: \[z = r(\cos\varphi + i\sin\varphi),\quad r = |z|,\quad \varphi = \arg z\] ahol \(x = r\cos\varphi\), \(y = r\sin\varphi\).</div></div>
<div class="thm-box"><div class="box-body"><strong>Szorzás/osztás:</strong> \(z_1 z_2 = r_1 r_2(\cos(\varphi+\psi) + i\sin(\varphi+\psi))\), \(\dfrac{z_1}{z_2} = \dfrac{r_1}{r_2}(\cos(\varphi-\psi) + i\sin(\varphi-\psi))\).</div></div>
<div class="thm-box"><div class="box-body"><strong>De Moivre-formula:</strong> \(z^n = r^n(\cos(n\varphi) + i\sin(n\varphi))\) minden \(n \in \mathbb{Z}\)-re.</div></div>
<div class="ex-box"><div class="box-body"><strong>Példa:</strong> \((-1+i)^{50}\): \(-1+i = \sqrt{2}(\cos\tfrac{3\pi}{4}+i\sin\tfrac{3\pi}{4})\), így \((-1+i)^{50} = 2^{25}(\cos\tfrac{3\pi}{2}+i\sin\tfrac{3\pi}{2}) = -2^{25}i\).</div></div>`;

const t4a = String.raw`
<h5 style="color:#22d3ee;font-weight:700;margin:0 0 .75rem">Komplex n-edik gyökök</h5>
<div class="thm-box"><div class="box-body">\(z = r(\cos\varphi + i\sin\varphi)\), \(n \in \mathbb{N}\). Az összes n-edik gyök: \[\sqrt[n]{z} = \sqrt[n]{r}\left(\cos\frac{\varphi+2k\pi}{n} + i\sin\frac{\varphi+2k\pi}{n}\right),\; k = 0,1,\ldots,n-1.\] A gyökök szabályos n-szöget alkotnak, sugaruk \(\sqrt[n]{r}\).</div></div>
<div class="info-box">Ha \(w_0\) az első gyök: az összes gyök \(w_0,\; w_0\varepsilon_1,\;\ldots,\; w_0\varepsilon_1^{n-1}\), ahol \(\varepsilon_1 = e^{2\pi i/n}\).</div>`;

const t5a = String.raw`
<h5 style="color:#22d3ee;font-weight:700;margin:0 0 .75rem">Egységgyökök &amp; Euler-formula</h5>
<div class="def-box"><div class="box-body">Az 1 n-edik gyökeit <strong>n-edik egységgyököknek</strong> nevezzük: \[\varepsilon_k = \cos\frac{2k\pi}{n} + i\sin\frac{2k\pi}{n},\; k=0,\ldots,n-1.\]</div></div>
<div class="thm-box"><div class="box-body">Az egységgyökök összege: \(\displaystyle\sum_{k=0}^{n-1}\varepsilon_k = \frac{1-\varepsilon_1^n}{1-\varepsilon_1} = 0\).</div></div>
<div class="def-box"><div class="box-body"><strong>Euler-formula:</strong> \(e^{i\varphi} = \cos\varphi + i\sin\varphi\), exponenciális alak \(z = re^{i\varphi}\). Következmény: \(\cos\varphi = \dfrac{e^{i\varphi}+e^{-i\varphi}}{2}\), \(\sin\varphi = \dfrac{e^{i\varphi}-e^{-i\varphi}}{2i}\).</div></div>
<div class="ex-box"><div class="box-body"><strong>cos 5x, sin 5x (De Moivre):</strong> \(\cos 5x = \cos^5 x - 10\cos^3 x\sin^2 x + 5\cos x\sin^4 x\); \(\sin 5x = 5\cos^4 x\sin x - 10\cos^2 x\sin^3 x + \sin^5 x\).</div></div>`;

const t6a = String.raw`
<h5 style="color:#22d3ee;font-weight:700;margin:0 0 .75rem">Előadás+ — Kiegészítések</h5>
<div style="color:#67e8f9;font-weight:700;font-size:.85rem;margin-bottom:.3rem">1. Történeti háttér</div>
<div class="def-box"><div class="box-body">A valós számok körén \(x^2 = -1\)-nek <strong>nincs megoldása</strong>. Merész lépés: legyen \(i\) az a szimbólum, amelyre \(i^2=-1\). Sokáig „képzetes számoknak" hívták; a <strong>Gauss-sík</strong> tette konkréttá: \(a + bi\) = pont az \((a,b)\) síkban.</div></div>
<div style="color:#67e8f9;font-weight:700;font-size:.85rem;margin:.7rem 0 .3rem">2. ℂ mint rendezett párok</div>
<div class="thm-box"><div class="box-body">\(\mathbb{C} := \mathbb{R}^2\), \((a,b) + (c,d) = (a+c, b+d)\), \((a,b) \cdot (c,d) = (ac - bd, ad + bc)\). \(\mathbf{i} := (0,1)\), \(\mathbf{i}^2 = (-1,0) = -1\). Valós: \(a \leftrightarrow (a,0)\), így \(\mathbb{R} \subset \mathbb{C}\).</div></div>
<div style="color:#67e8f9;font-weight:700;font-size:.85rem;margin:.7rem 0 .3rem">3. Az i hatványainak 4-es ciklusa</div>
<div class="info-box"><div class="box-body">\(i^1=i,\; i^2=-1,\; i^3=-i,\; i^4=1,\; i^5=i,\ldots\) — \(i^n = i^{n \bmod 4}\). Pl. \(i^{37} = (i^4)^9 \cdot i = i\).</div></div>
<div style="color:#67e8f9;font-weight:700;font-size:.85rem;margin:.7rem 0 .3rem">4. ℂ mezőtulajdonságai</div>
<div class="thm-box"><div class="box-body">Az összeadás és szorzás kommutatív, asszociatív, a szorzás disztributív — \((\mathbb{C}, +, \cdot)\) test. Minden \(z \ne 0\)-nak van inverze: \(z^{-1} = \bar{z}/|z|^2\).</div></div>`;
const t6b = String.raw`
<div style="color:#67e8f9;font-weight:700;font-size:.85rem;margin-bottom:.3rem">5. Osztás — a konjugált szerepe</div>
<div class="def-box"><div class="box-body">\[\frac{z_1}{z_2} = \frac{z_1 \cdot \bar{z}_2}{z_2 \cdot \bar{z}_2} = \frac{z_1 \cdot \bar{z}_2}{|z_2|^2}\] A nevező \(|z_2|^2\) valós szám.</div></div>
<div class="ex-box"><div class="box-body"><strong>Példa:</strong> \(\dfrac{-2+5i}{4+3i} = \dfrac{(-2+5i)(4-3i)}{25} = \dfrac{7+26i}{25} = \dfrac{7}{25} + \dfrac{26}{25}i\).</div></div>
<div style="color:#67e8f9;font-weight:700;font-size:.85rem;margin:.7rem 0 .3rem">6. Argumentum — először rajzolj!</div>
<div class="info-box"><div class="box-body">① Ábrázold \((x,y)\)-t — melyik negyed? ② \(r = \sqrt{x^2+y^2}\). ③ Speciális szögnél (30°,45°,60°) olvasd le. ④ Általában \(\varphi = \arctan(y/x)\), de figyelj a negyedre!</div></div>
<div class="ex-box"><div class="box-body"><strong>-1+i</strong>: 2. negyed, \(r=\sqrt{2}\), \(\varphi = \tfrac{3\pi}{4}\). Trig.: \(-1+i = \sqrt{2}(\cos\tfrac{3\pi}{4} + i\sin\tfrac{3\pi}{4})\).</div></div>
<div style="color:#67e8f9;font-weight:700;font-size:.85rem;margin:.7rem 0 .3rem">7. Összetett trig. alak</div>
<div class="thm-box"><div class="box-body">Szorzás: modulusokat megszorozzuk, szögeket összeadjuk. Osztás: modulusokat elosztjuk, szögeket kivonjuk. \(z^n = r^n(\cos n\varphi + i\sin n\varphi)\). \(\bar{z} = r(\cos(-\varphi) + i\sin(-\varphi))\).</div></div>`;

const TABS: Tab[] = [
  { id: 'in', label: 'Bevezetés & műveletek', content: <Cols variant="7-5"><RichTex html={t1a} /><ComplexCalc /></Cols> },
  { id: 'co', label: 'Konjugált & |z|', content: <Cols variant="7-5"><RichTex html={t2a} /><ConjCanvas /></Cols> },
  { id: 'po', label: 'Trigonometrikus alak', content: <Cols variant="7-5"><RichTex html={t3a} /><PolarConverter /></Cols> },
  { id: 'ro', label: 'Komplex gyökök', content: <Cols variant="7-5"><RichTex html={t4a} /><RootsViz /></Cols> },
  { id: 'eu', label: 'Egységgyökök & Euler', content: <Cols variant="7-5"><RichTex html={t5a} /><UnityRoots /></Cols> },
  { id: 'ex', label: 'Előadás+', content: <Cols><RichTex html={t6a} /><RichTex html={t6b} /></Cols> },
];

export default function Ch7() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">ILA — 7. fejezet</p>
      <h1 className="ila__title">Komplex számok</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2025</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
