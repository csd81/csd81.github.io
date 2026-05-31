import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cols, Tabs, RichTex, type Tab } from '../components/kit';

const PAL = ['#a78bfa', '#34d399', '#f97316', '#22d3ee', '#f472b6', '#fbbf24'];

/* ── Tab 1: bijection / injection visual ── */
type BijMode = 'bij' | 'inj' | 'inf';
const BIJ_MODES: Record<BijMode, { A: string[]; B: string[]; arrows: [number, number][]; label: string }> = {
  bij: { A: ['a₁', 'a₂', 'a₃', 'a₄'], B: ['b₁', 'b₂', 'b₃', 'b₄'], arrows: [[0, 0], [1, 1], [2, 2], [3, 3]], label: '|A|=|B|=4 · bijekció' },
  inj: { A: ['a₁', 'a₂', 'a₃'], B: ['b₁', 'b₂', 'b₃', 'b₄', 'b₅'], arrows: [[0, 0], [1, 2], [2, 4]], label: '|A|=3 ≤ |B|=5 · injekció' },
  inf: { A: ['1', '2', '3', '4'], B: ['1', '2', '3', '4', '⋯', '⋯'], arrows: [[0, 0], [1, 1], [2, 2], [3, 3]], label: '|A|=4 ≤ |ℕ| · véges≤végtelen' },
};

function BijVisual() {
  const [mode, setMode] = useState<BijMode>('bij');
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const d = BIJ_MODES[mode];
    const nA = d.A.length, nB = d.B.length;
    const lx = 90, rx = W - 90, padY = 30;
    const nodeY = (n: number, total: number) => padY + (H - 2 * padY) / (total + 1) * (n + 1);
    const drawOval = (cx: number, label: string, col: string) => {
      ctx.strokeStyle = col; ctx.lineWidth = 1.2; ctx.globalAlpha = 0.5;
      ctx.beginPath(); ctx.ellipse(cx, H / 2, 35, H / 2 - 15, 0, 0, 2 * Math.PI); ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.fillStyle = col; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(label, cx, 12);
    };
    drawOval(lx, 'A', '#a78bfa');
    drawOval(rx, 'B', '#22d3ee');
    d.A.forEach((lbl, i) => {
      const y = nodeY(i, nA);
      ctx.beginPath(); ctx.arc(lx, y, 10, 0, 2 * Math.PI);
      ctx.fillStyle = '#a78bfa33'; ctx.fill();
      ctx.strokeStyle = '#a78bfa'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 9px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(lbl, lx, y);
    });
    d.B.forEach((lbl, i) => {
      const y = nodeY(i, nB);
      ctx.beginPath(); ctx.arc(rx, y, 10, 0, 2 * Math.PI);
      ctx.fillStyle = '#22d3ee33'; ctx.fill();
      ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 9px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(lbl, rx, y);
    });
    d.arrows.forEach(([ai, bi], i) => {
      const y1 = nodeY(ai, nA), y2 = nodeY(bi, nB);
      const col = PAL[i % PAL.length];
      ctx.strokeStyle = col; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(lx + 11, y1); ctx.lineTo(rx - 11, y2); ctx.stroke();
      const dx = rx - 11 - (lx + 11), dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy) || 1;
      const ux = dx / len, uy = dy / len, ah = 7;
      ctx.fillStyle = col;
      ctx.beginPath(); ctx.moveTo(rx - 11, y2);
      ctx.lineTo(rx - 11 - ah * (ux - 0.4 * uy), y2 - ah * (uy + 0.4 * ux));
      ctx.lineTo(rx - 11 - ah * (ux + 0.4 * uy), y2 - ah * (uy - 0.4 * ux));
      ctx.closePath(); ctx.fill();
    });
  }, [mode]);
  return (
    <div className="info-box">
      <span className="lbl">Interaktív — bijekció és injekció</span>
      <p style={{ fontSize: '.77rem', color: '#8892a4', margin: '.4rem 0 .5rem' }}>Két halmaz számossága és kapcsolatuk vizualizációja:</p>
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
        <button className={`op-btn${mode === 'bij' ? ' is-active' : ''}`} onClick={() => setMode('bij')}>Bijekció |A|=|B|</button>
        <button className={`op-btn${mode === 'inj' ? ' is-active' : ''}`} onClick={() => setMode('inj')}>Injekció |A|≤|B|</button>
        <button className={`op-btn${mode === 'inf' ? ' is-active' : ''}`} onClick={() => setMode('inf')}>Véges ≤ végtelen</button>
      </div>
      <canvas ref={ref} width={340} height={220} style={{ borderRadius: 8, background: '#0d0e14', display: 'block', margin: '0 auto', maxWidth: '100%' }} />
      <div style={{ marginTop: '.6rem', fontSize: '.8rem', color: '#c4cdd8', textAlign: 'center' }}>{BIJ_MODES[mode].label}</div>
    </div>
  );
}

/* ── Tab 2: linear bijection [a,b]→[c,d] ── */
function LinBij() {
  const [a, setA] = useState(0), [b, setB] = useState(3), [c, setC] = useState(-2), [d2, setD2] = useState(5);
  const ref = useRef<HTMLCanvasElement>(null);
  const fref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    if (b <= a || d2 <= c) {
      ctx.fillStyle = '#ef4444'; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('a < b és c < d szükséges', W / 2, H / 2);
      if (fref.current) fref.current.innerHTML = '';
      return;
    }
    const pad = 30;
    const xScale = (W - 2 * pad) / (b - a + 2), yScale = (H - 2 * pad) / (d2 - c + 2);
    const toX = (x: number) => (x - a + 1) * xScale + pad;
    const toY = (y: number) => H - pad - (y - c + 1) * yScale;
    ctx.strokeStyle = '#2a3040'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(pad, pad); ctx.lineTo(pad, H - pad); ctx.lineTo(W - pad, H - pad); ctx.stroke();
    ctx.strokeStyle = '#a78bfa'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(toX(a), toY(c)); ctx.lineTo(toX(b), toY(d2)); ctx.stroke();
    ctx.fillStyle = '#8892a4'; ctx.font = '10px monospace'; ctx.textAlign = 'center';
    ctx.fillText('a=' + a, toX(a), H - pad + 12);
    ctx.fillText('b=' + b, toX(b), H - pad + 12);
    ctx.textAlign = 'right';
    ctx.fillText('c=' + c, pad - 4, toY(c));
    ctx.fillText('d=' + d2, pad - 4, toY(d2));
  }, [a, b, c, d2]);
  const slope = b > a ? ((d2 - c) / (b - a)).toFixed(2) : '—';
  const formula = b > a && d2 > c
    ? String.raw`\(f(x)=\frac{${d2 - c}}{${b - a}}(x-${a})+${c}\) &nbsp;&nbsp; meredekség: ${slope}`
    : '';
  return (
    <div className="info-box">
      <span className="lbl">Interaktív — lineáris bijekció [a,b]→[c,d]</span>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem', fontSize: '.77rem', color: '#8892a4', margin: '.5rem 0' }}>
        <div>
          <RichTex html={String.raw`\([a,b]\):`} />
          <div style={{ display: 'flex', gap: '.3rem', alignItems: 'center', marginTop: '.25rem' }}>
            <span>a=</span><input type="range" min={-5} max={4} value={a} style={{ width: 70 }} onChange={(e) => setA(+e.target.value)} />
            <span>{a}</span>
            <span>&nbsp;b=</span><input type="range" min={-4} max={5} value={b} style={{ width: 70 }} onChange={(e) => setB(+e.target.value)} />
            <span>{b}</span>
          </div>
        </div>
        <div>
          <RichTex html={String.raw`\([c,d]\):`} />
          <div style={{ display: 'flex', gap: '.3rem', alignItems: 'center', marginTop: '.25rem' }}>
            <span>c=</span><input type="range" min={-5} max={4} value={c} style={{ width: 70 }} onChange={(e) => setC(+e.target.value)} />
            <span>{c}</span>
            <span>&nbsp;d=</span><input type="range" min={-4} max={5} value={d2} style={{ width: 70 }} onChange={(e) => setD2(+e.target.value)} />
            <span>{d2}</span>
          </div>
        </div>
      </div>
      <canvas ref={ref} width={340} height={200} style={{ borderRadius: 8, background: '#0d0e14', display: 'block', maxWidth: '100%' }} />
      <RichTex className="lin-formula" html={formula} key={formula} />
    </div>
  );
}

/* ── Tab 3: Cantor diagonal ── */
const N_CANT = 7;
function CantorDiag() {
  const [digits, setDigits] = useState<number[][]>([]);
  const regen = () =>
    setDigits(Array.from({ length: N_CANT }, () => Array.from({ length: N_CANT }, () => Math.floor(Math.random() * 10))));
  useEffect(() => { regen(); }, []);
  const yn = digits.map((row, i) => (row[i] === 8 ? 7 : 8));
  const explain = digits.length
    ? String.raw`Az átlós elemek: ${digits.map((r, i) => r[i]).join(', ')}.<br>\(y_n\): ha \(x_{nn}=8\), akkor \(y_n=7\), különben \(y_n=8\).<br>Így \(y=${yn.join('')}\ldots\) és \(y\ne x_n\) minden \(n\)-re ⟹ \(x_1,x_2,\ldots\) nem tartalmaz minden valós számot.`
    : '';
  return (
    <div className="info-box">
      <span className="lbl">Interaktív — Cantor-átló vizualizáció</span>
      <p style={{ fontSize: '.77rem', color: '#8892a4', margin: '.4rem 0 .5rem' }}>
        Az táblázat \(x_n = 0.x_{'{'}n1{'}'}x_{'{'}n2{'}'}\ldots\) számokat mutat. Az átlós elemek (lilával)
        megadják az y számot (zölddel), amely nem szerepel az összes sorban.
      </p>
      <button className="op-btn" style={{ marginBottom: '.6rem' }} onClick={regen}>Új véletlen mátrix ↺</button>
      <div style={{ display: 'inline-grid', gap: 2, marginBottom: '.6rem', gridTemplateColumns: `3rem repeat(${N_CANT}, 2rem)` }}>
        <div />
        {Array.from({ length: N_CANT }, (_, j) => (
          <div key={'h' + j} className="diag-cell" style={{ color: '#8892a4', fontSize: '.65rem' }}>.d{j + 1}</div>
        ))}
        {digits.map((row, i) => [
          <div key={'r' + i} className="diag-cell" style={{ color: '#a78bfa', fontSize: '.68rem' }}>x{i + 1}=0.</div>,
          ...row.map((v, j) => (
            <div key={i + '-' + j} className={`diag-cell${i === j ? ' hi' : ''}`}>{v}</div>
          )),
        ])}
      </div>
      <div style={{ fontSize: '.82rem', color: '#34d399', marginBottom: '.4rem', fontFamily: 'monospace' }}>
        y = 0.{yn.join('')}...
      </div>
      <RichTex html={explain} key={explain} className="cantor-explain" />
    </div>
  );
}

/* ── Tab 4: ℕ×ℕ diagonal traversal ── */
function DiagTable() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const K = 6, pad = 30, cell = (Math.min(W, H) - 2 * pad) / K;
    const order: [number, number][] = [];
    for (let s = 0; s < 2 * K - 1; s++) for (let i = 0; i <= s; i++) {
      const j = s - i; if (i < K && j < K) order.push([i, j]);
    }
    const orderMap: Record<string, number> = {};
    order.forEach(([i, j], idx) => { orderMap[`${i},${j}`] = idx + 1; });
    const colors = ['#a78bfa', '#c4b5fd', '#7c3aed', '#34d399', '#22d3ee', '#f97316', '#fbbf24', '#f472b6', '#60a5fa', '#e879f9'];
    for (let i = 0; i < K; i++) for (let j = 0; j < K; j++) {
      const x = pad + j * cell, y = pad + i * cell;
      const idx = orderMap[`${i},${j}`] || 0;
      const col = colors[(i + j) % colors.length];
      ctx.fillStyle = col + '22'; ctx.fillRect(x, y, cell - 2, cell - 2);
      ctx.strokeStyle = col + '66'; ctx.lineWidth = 1; ctx.strokeRect(x, y, cell - 2, cell - 2);
      ctx.fillStyle = col; ctx.font = 'bold ' + (cell > 40 ? 10 : 8) + 'px monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(idx), x + cell / 2 - 1, y + cell / 2 - 1);
    }
    ctx.fillStyle = '#8892a4'; ctx.font = '9px monospace'; ctx.textAlign = 'center';
    for (let j = 0; j < K; j++) ctx.fillText(String(j + 1), pad + j * cell + cell / 2 - 1, pad - 10);
    ctx.textAlign = 'right';
    for (let i = 0; i < K; i++) ctx.fillText(String(i + 1), pad - 6, pad + i * cell + cell / 2 - 1);
    ctx.fillStyle = '#6b7280'; ctx.font = '9px sans-serif';
    ctx.textAlign = 'left'; ctx.fillText('A', pad + K * cell / 2 - 8, 10);
    ctx.textAlign = 'right'; ctx.fillText('B', pad - 20, pad + K * cell / 2);
  }, []);
  return (
    <div className="info-box">
      <span className="lbl">Interaktív — ℕ×ℕ átlós bejárás</span>
      <p style={{ fontSize: '.77rem', color: '#8892a4', margin: '.4rem 0 .5rem' }}>
        Az \(A\times B\) (ahol \(A=B=\mathbb{'{'}N{'}'}\)) átlók mentén felsorolható. A szín az átló sorrendjét mutatja:
      </p>
      <canvas ref={ref} width={340} height={280} style={{ borderRadius: 8, background: '#0d0e14', display: 'block', maxWidth: '100%' }} />
      <RichTex
        className="box-body"
        html={String.raw`<div style="margin-top:.4rem;font-size:.76rem;color:#8892a4">\(\mathbb{N}\times\mathbb{N}\) első \(k\times k\)-ja. Az átlók mentén: \((1,1),(1,2),(2,1),(1,3),(2,2),(3,1),\ldots\)</div>`}
      />
    </div>
  );
}

/* ── Tab 5: power set visual ── */
function PowerSet() {
  const [n, setN] = useState(3);
  const ref = useRef<HTMLCanvasElement>(null);
  const pa = 1 << n;
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const els = Array.from({ length: n }, (_, i) => i + 1);
    const cols = Math.min(pa, 8);
    const rows = Math.ceil(pa / cols);
    const bw = (W - 20) / cols, bh = (H - 40) / rows;
    const subsets: number[][] = [];
    for (let mask = 0; mask < pa; mask++) {
      const sub: number[] = [];
      for (let i = 0; i < n; i++) if (mask & (1 << i)) sub.push(i + 1);
      subsets.push(sub);
    }
    subsets.forEach((sub, idx) => {
      const col = idx % cols, row = Math.floor(idx / cols);
      const x = 10 + col * bw, y = 30 + row * bh;
      const col2 = PAL[sub.length % PAL.length];
      ctx.fillStyle = col2 + '22'; ctx.strokeStyle = col2 + '88'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(x + 2, y + 2, bw - 6, bh - 6, 4); ctx.fill(); ctx.stroke();
      const lbl = sub.length === 0 ? '∅' : '{' + sub.join(',') + '}';
      ctx.fillStyle = col2; ctx.font = `bold ${bw > 50 ? 9 : 7}px monospace`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(lbl, x + bw / 2, y + bh / 2);
    });
    ctx.fillStyle = '#8892a4'; ctx.font = '10px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText(`A = {${els.join(',')}}  →  |A| = ${n}  →  |𝒫(A)| = 2ⁿ = ${pa}`, 10, 14);
  }, [n, pa]);
  return (
    <div className="info-box">
      <span className="lbl">Interaktív — 𝒫(A) vs A</span>
      <p style={{ fontSize: '.77rem', color: '#8892a4', margin: '.4rem 0 .5rem' }}>Válaszd ki A méretét és lásd a hatványhalmazt:</p>
      <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', marginBottom: '.75rem', fontSize: '.8rem', color: '#c4cdd8' }}>
        <span>|A| =</span>
        <input type="range" min={1} max={4} value={n} onChange={(e) => setN(+e.target.value)} />
        <span style={{ color: '#e2e8f0' }}>{n}</span>
        <span style={{ color: '#8892a4' }}>→ |𝒫(A)| =</span>
        <span style={{ color: '#a78bfa', fontWeight: 700 }}>{pa}</span>
      </div>
      <canvas ref={ref} width={340} height={260} style={{ borderRadius: 8, background: '#0d0e14', display: 'block', maxWidth: '100%' }} />
    </div>
  );
}

/* ── Tab 6: cardinality hierarchy ── */
function Hierarchy() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const nodes = [
      { lbl: '|ℕ₀|', sub: 'ℵ₀', col: '#a78bfa', x: 38 },
      { lbl: '|𝒫(ℕ₀)|', sub: '= |ℝ| = 𝔠', col: '#22d3ee', x: 140 },
      { lbl: '|𝒫(ℝ)|', sub: '', col: '#34d399', x: 242 },
      { lbl: '|𝒫(𝒫(ℝ))|', sub: '', col: '#f97316', x: 330 },
    ];
    const nodeW = 68, nodeH = 44, cy = H / 2;
    ctx.textBaseline = 'middle';
    nodes.forEach((n, i) => {
      if (i < nodes.length - 1) {
        const x1 = n.x + nodeW / 2 + 4, x2 = nodes[i + 1].x - nodeW / 2 - 4;
        ctx.strokeStyle = '#4b5563'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(x1, cy); ctx.lineTo(x2, cy); ctx.stroke();
        ctx.fillStyle = '#4b5563';
        ctx.beginPath(); ctx.moveTo(x2, cy); ctx.lineTo(x2 - 8, cy - 5); ctx.lineTo(x2 - 8, cy + 5); ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#6b7280'; ctx.font = 'bold 13px monospace'; ctx.textAlign = 'center';
        ctx.fillText('<', (x1 + x2) / 2, cy - 14);
      }
    });
    const last = nodes[nodes.length - 1];
    ctx.fillStyle = '#4b5563'; ctx.font = 'bold 14px monospace'; ctx.textAlign = 'left';
    ctx.fillText(' < …', last.x + nodeW / 2 + 2, cy);
    nodes.forEach((n) => {
      const x = n.x - nodeW / 2, y = cy - nodeH / 2;
      ctx.fillStyle = n.col + '1a'; ctx.strokeStyle = n.col + '99'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.roundRect(x, y, nodeW, nodeH, 6); ctx.fill(); ctx.stroke();
      ctx.fillStyle = n.col; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(n.lbl, n.x, n.sub ? cy - 8 : cy);
      if (n.sub) {
        ctx.fillStyle = '#8892a4'; ctx.font = '8px monospace';
        ctx.fillText(n.sub, n.x, cy + 10);
      }
    });
    ctx.fillStyle = '#6b7280'; ctx.font = '9px sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
    ctx.fillText('Cantor-tétel: |A| < |𝒫(A)| minden A-ra', 10, H - 14);
  }, []);
  return (
    <div className="info-box">
      <span className="lbl">Végtelen számosságok hierarchiája</span>
      <RichTex
        className="box-body"
        html={String.raw`<div style="font-size:.82rem;color:#c4cdd8;line-height:1.85;margin:.5rem 0 .75rem">A Cantor-tételt ismételten alkalmazva végtelen sok különböző végtelen számosságot kapunk: \[|\mathbb{N}_0| \;{\color{#f97316}<}\; |\mathcal{P}(\mathbb{N}_0)| \;{\color{#f97316}<}\; |\mathcal{P}(\mathcal{P}(\mathbb{N}_0))| \;{\color{#f97316}<}\; \cdots\] ahol \(|\mathcal{P}(\mathbb{N}_0)|=|\mathbb{R}|\) a kontinuum számosság.</div>`}
      />
      <canvas ref={ref} width={340} height={160} style={{ borderRadius: 8, background: '#0d0e14', display: 'block', maxWidth: '100%' }} />
    </div>
  );
}

/* ── Static theory ── */
const t1a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — Véges és végtelen halmaz</div><div class="box-body">Az \(A\) halmaz <strong style="color:#a78bfa">véges</strong>, ha valamely \(n\in\mathbb{N}_0\)-ra létezik \(\{1,\ldots,n\}\to A\) bijekció. Ekkor \(|A|=n\).<br><br>Ha \(A\) nem véges, akkor <strong style="color:#a78bfa">végtelen</strong>.</div></div>
<div class="def-box"><div class="lbl mb-2">Definíció — Számosság azonossága és rendje</div><div class="box-body">\(|A|=|B|\): létezik \(A\to B\) bijekció.<br>\(|A|\le|B|\): létezik \(A\to B\) injekció.<br>\(|A|<|B|\): \(|A|\le|B|\) és \(|A|\ne|B|\).</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Számosság ekvivalenciareláció</div><div class="box-body">A \(|A|=|B|\) reláció tetszőleges halmazrendszeren ekvivalenciareláció:<ul style="margin:.4rem 0 0 1.1rem;padding:0;line-height:2"><li><strong>Reflexív:</strong> \(\mathrm{id}_A:A\to A\) bijekció</li><li><strong>Szimmetrikus:</strong> \(\varphi:A\to B\) bijekció → \(\varphi^{-1}:B\to A\) bijekció</li><li><strong>Tranzitív:</strong> \(\psi\circ\varphi:A\to C\) bijekció</li></ul></div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Cantor–Schröder–Bernstein</div><div class="box-body"><ol style="margin:0 0 0 1.1rem;padding:0;line-height:2.1"><li>\(|A|\le|A|\)</li><li>Ha \(|A|\le|B|\) és \(|B|\le|A|\), akkor \(|A|=|B|\)</li><li>Ha \(|A|\le|B|\) és \(|B|\le|C|\), akkor \(|A|\le|C|\)</li></ol><div style="font-size:.76rem;color:#8892a4;margin-top:.4rem">A 2. pont a halmazelmélet egyik legfontosabb eredménye — két injekció „összevonásából" bijekciót kapunk.</div></div></div>`;
const t1b = String.raw`
<div class="ex-box"><div class="lbl lbl--ex mb-2">Példák — számosságok</div><div class="box-body" style="line-height:2">\(|\{a,b,c\}| = |\{1,2,3\}| = 3\)<br>\(|\mathbb{N}| \le |\mathbb{R}|\) — \(\varphi(n)=n\) injektív<br>\(A\subseteq B \Rightarrow |A|\le|B|\) — \(a\mapsto a\) injektív<br>\(|(a,b)| = |\mathbb{R}|\) — \(\tan\) bijekció \((-\tfrac\pi2,\tfrac\pi2)\to\mathbb{R}\)</div></div>`;

const t2a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — Kontinuum számosság</div><div class="box-body">A valós számok halmazának számosságát <strong style="color:#a78bfa">kontinuum számosságnak</strong> hívjuk. Jelölése: \(|\mathbb{R}|\) vagy \(\mathfrak{c}\).</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Minden intervallum kontinuum számosságú</div><div class="box-body">Az összes \((a,b)\), \([a,b]\), \((a,b]\), \([a,b)\), \((-\infty,a)\), \((-\infty,a]\), \((a,\infty)\), \([a,\infty)\), \((-\infty,\infty)\) alakú intervallum kontinuum számosságú.<br><br><strong>Bizonyítás (zártra):</strong> \[(a,b)\subseteq[a,b]\subseteq\mathbb{R}\] \[\Rightarrow |\mathbb{R}|=|(a,b)|\le|[a,b]|\le|\mathbb{R}|\] A Cantor–Schröder–Bernstein-tételből: \(|[a,b]|=|\mathbb{R}|\).</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Bijekció \([a,b]\to[c,d]\)</div><div class="box-body">\[f:[a,b]\to[c,d], \quad f(x)=\frac{d-c}{b-a}(x-a)+c\] Ez lineáris bijekció — megmutatja, hogy bármely két zárt intervallum azonos számosságú.<br><br><strong>Tan bijekció:</strong> A \(\tan\) (megszorítva \((-\tfrac\pi2,\tfrac\pi2)\)-re) bijekció a nyílt intervallum és \(\mathbb{R}\) között. \[|(a,b)|=\left|\!\left(-\tfrac\pi2,\tfrac\pi2\right)\right|=|\mathbb{R}|\]</div></div>`;
const t2b = String.raw`
<div class="info-box"><div class="lbl mb-2">Számossági lánc</div><div style="display:flex;gap:.4rem;align-items:center;flex-wrap:wrap;font-size:.82rem;color:#c4cdd8"><span style="background:#1a0f2e;color:#a78bfa;padding:.2rem .5rem;border-radius:4px;font-family:monospace">1</span><span style="color:#6b7280">&lt;</span><span style="background:#1a0f2e;color:#a78bfa;padding:.2rem .5rem;border-radius:4px;font-family:monospace">2</span><span style="color:#6b7280">&lt; ··· &lt;</span><span style="background:#1a0f2e;color:#a78bfa;padding:.2rem .5rem;border-radius:4px;font-family:monospace">n</span><span style="color:#6b7280">&lt; ··· &lt;</span><span style="background:#0a2a2e;color:#22d3ee;padding:.2rem .5rem;border-radius:4px;font-family:monospace">|ℕ₀|</span><span style="color:#6b7280">&lt;</span><span style="background:#1a1a0a;color:#fbbf24;padding:.2rem .5rem;border-radius:4px;font-family:monospace">|ℝ|</span></div><div style="font-size:.75rem;color:#6b7280;margin-top:.4rem">A kontinuum-hipotézis (Cantor): nincs \(|\mathbb{N}_0|<|A|<|\mathbb{R}|\) számosság — ez a ZFC axiómáktól <em>független</em> állítás (Gödel, Cohen).</div></div>`;

const t3a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — Megszámlálhatóan végtelen</div><div class="box-body">A \(\mathbb{N}_0\) halmaz számosságát <strong style="color:#a78bfa">megszámlálhatóan végtelen számosságnak</strong> nevezzük. Egy \(A\) halmaz megszámlálhatóan végtelen, ha \(|A|=|\mathbb{N}_0|\), azaz létezik \(\mathbb{N}_0\to A\) bijekció — az elemei felsorolhatók egy végtelen sorozatban.</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Megszámlálható halmazok</div><div class="box-body" style="line-height:2">\(|\mathbb{N}|=|\mathbb{N}_0|\) — \(\varphi(n)=n+1\)<br>\(|\mathbb{Z}|=|\mathbb{N}_0|\) — felsorolás: \(0,1,-1,2,-2,3,-3,\ldots\)<br>\(|\mathbb{Q}|=|\mathbb{N}_0|\) — racionális táblázat spirális átlója</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — |ℕ₀| ≠ |ℝ| (Cantor-átló)</div><div class="box-body"><strong>Bizonyítás</strong> (indirekt): tegyük fel, hogy \(x_1,x_2,x_3,\ldots\) tartalmazza az összes \((0,1)\)-beli valós számot. Írjuk fel tizedes törtként: \[x_n = 0.x_{n1}x_{n2}x_{n3}\ldots\] Definiáljuk: \[y_n = \begin{cases}7 & \text{ha }x_{nn}=8\\ 8 & \text{ha }x_{nn}\ne8\end{cases}, \quad y = 0.y_1y_2y_3\ldots\] Ekkor \(0<y<1\), de \(y\ne x_n\) minden \(n\)-re (az \(n\)-edik tizedes jegy különbözik). Ellentmondás. \(\square\)</div></div>`;

const t4a = String.raw`
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Megszámlálható halmazok zárt műveletek alatt</div><div class="box-body">Ha \(A\) és \(B\) megszámlálhatóan végtelen, akkor:<ol style="margin:.4rem 0 0 1.1rem;padding:0;line-height:2.2"><li>\(A\cup B\) megszámlálhatóan végtelen<br><em style="color:#6b7280;font-size:.76rem">Biz: fésűs egyesítés \(a_1,b_1,a_2,b_2,\ldots\)</em></li><li>\(A\times B\) megszámlálhatóan végtelen<br><em style="color:#6b7280;font-size:.76rem">Biz: végtelen táblázat átlók mentén</em></li><li>\(A\cup F\) megszámlálhatóan végtelen, ha \(F\) véges</li><li>\(\bigcup_{n=1}^\infty A_n\) megszámlálhatóan végtelen, ha minden \(A_n\) az<br><em style="color:#6b7280;font-size:.76rem">Biz: kettős táblázat átlók mentén</em></li></ol></div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">|ℚ| megszámlálható</div><div class="box-body">A \(\mathbb{Q}\) halmaz megszámlálhatóan végtelen, mert a \(\frac{p}{q}\) racionálisok (minden \(p\in\mathbb{Z}, q\in\mathbb{N}\)) elrendezhetők egy kétdimenziós táblázatban, amely spirális mozgással bejárható. \[0,\;\tfrac11,\;-\tfrac11,\;\tfrac12,\;-\tfrac12,\;\tfrac21,\;\tfrac13,\ldots\] (Az ismétléseket kihagyva minden racionális pontosan egyszer szerepel.)</div></div>`;

const t5a = String.raw`
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel (Cantor) — |A| &lt; |𝒫(A)|</div><div class="box-body">Tetszőleges \(A\) halmaz esetén \(|A|<|\mathcal{P}(A)|\).<br><br><strong>Bizonyítás:</strong><br>1. \(a\mapsto\{a\}\) injektív, tehát \(|A|\le|\mathcal{P}(A)|\).<br><br>2. Nincs \(A\to\mathcal{P}(A)\) szürjekció: tegyük fel, hogy \(\psi:A\to\mathcal{P}(A)\) szürjektív. Legyen \[X = \{a\in A: a\notin\psi(a)\}.\] Ekkor \(X\subseteq A\), tehát \(\exists x\in A\): \(\psi(x)=X\). De: \[x\in X \Leftrightarrow x\notin\psi(x)=X\] — ellentmondás. Tehát \(|A|\ne|\mathcal{P}(A)|\). \(\square\)</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — |ℝ| = |𝒫(ℕ₀)|</div><div class="box-body"><div class="pf-step"><div class="pf-eq">\(|\mathcal{P}(\mathbb{N}_0)|\le|\mathbb{R}|\)</div><div class="pf-why">\(A\subseteq\mathbb{N}_0 \mapsto 0.x_0x_1x_2\ldots\) ahol \(x_i=1\) ha \(i\in A\), \(0\) egyébként — injektív</div></div><div class="pf-step"><div class="pf-eq">\(|\mathbb{R}|\le|\mathcal{P}(\mathbb{N}_0)|\)</div><div class="pf-why">\(x\in(0,1) \mapsto\) kettes számrendszerbeli végtelen törtjének \(1\)-es helyei — injektív</div></div><div class="pf-step"><div class="pf-eq">\(|\mathbb{R}|=|\mathcal{P}(\mathbb{N}_0)|\)</div><div class="pf-why" style="color:#34d399">Cantor–Schröder–Bernstein-tételből</div></div></div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Végtelen számossági hierarchia</div><div class="box-body">\[|\mathbb{N}_0|<|\mathcal{P}(\mathbb{N}_0)|=|\mathbb{R}|<|\mathcal{P}(\mathbb{R})|<|\mathcal{P}(\mathcal{P}(\mathbb{R}))|<\cdots\] Minden számosságnál van nagyobb — végtelen sok különböző végtelen számosság van.</div></div>`;

const t6a = String.raw`
<div class="def-box"><div class="lbl mb-2">Számlálás = bijekció</div><div class="box-body">Mit jelent, hogy egy halmaznak <em>4 eleme van</em>? Mindegyik elemhez egy egyedi számot rendelünk: \[1\mapsto a_1,\quad 2\mapsto a_2,\quad 3\mapsto a_3,\quad 4\mapsto a_4\] Ez pontosan egy <strong style="color:#a78bfa">bijekció \(\{1,2,3,4\}\to A\)</strong>:<ul style="margin:.5rem 0 0 1.1rem;padding:0;line-height:2"><li>Különböző elemek különböző számot kapnak (injektív)</li><li>Minden elem kap számot (szürjektív)</li></ul>Az általános definíció csak ezt formalizálja: \(|A|=n\) ↔ létezik bijekció \(\{1,\ldots,n\}\to A\).</div></div>
<div class="def-box"><div class="lbl mb-2">Felsorolás = bijekció ℕ₀ → A</div><div class="box-body">Az \(a_0,a_1,a_2,\ldots\) felsorolás formálisan egy <strong style="color:#a78bfa">leképezés \(\mathbb{N}_0\to A\)</strong>: \[n \mapsto a_n\]<ul style="margin:.5rem 0 0 1.1rem;padding:0;line-height:2.1"><li><strong>Injektív</strong> ↔ minden elem legfeljebb egyszer szerepel</li><li><strong>Szürjektív</strong> ↔ minden elem szerepel valahol</li><li><strong>Bijektív</strong> ↔ pontosan egyszer szerepel minden elem = A megszámlálhatóan végtelen</li></ul></div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Metafora: „páros tánc" (|A| ≤ |B|)</div><div class="box-body">Képzeljük el, hogy az \(A\) halmaz elemei fiúk, a \(B\) halmaz elemei lányok egy táncteremben.<ul style="margin:.5rem 0 0 1.1rem;padding:0;line-height:2"><li>\(|A|=|B|\): minden fiúhoz pontosan egy lány párolható (bijekció)</li><li>\(|A|\le|B|\): minden fiú talál táncpartnert, de maradhatnak „táncra váró" lányok</li><li>\(|A|<|B|\): injekció van, de bijekció nincs — a B halmaz „nagyobb"</li></ul></div></div>`;
const t6b = String.raw`
<div class="thm-box"><div class="lbl lbl--thm mb-2">Miért pontosan |ℕ₀| &lt; |ℝ|?</div><div class="box-body">Ez két különálló tétel együttes következménye:<div class="mt-2"><div class="pf-step"><div class="pf-eq" style="min-width:170px">1. Cantor-tétel</div><div class="pf-why">\(|A|<|\mathcal{P}(A)|\) minden \(A\)-ra, tehát \(|\mathbb{N}_0|<|\mathcal{P}(\mathbb{N}_0)|\)</div></div><div class="pf-step"><div class="pf-eq" style="min-width:170px">2. |ℝ| = |𝒫(ℕ₀)|</div><div class="pf-why">(CSB-tétellel: kétirányú injekció → bijekció)</div></div><div class="pf-step"><div class="pf-eq" style="min-width:170px">3. Tranzitivitás</div><div class="pf-why">\(|\mathbb{N}_0|<|\mathcal{P}(\mathbb{N}_0)|=|\mathbb{R}|\) → \(|\mathbb{N}_0|<|\mathbb{R}|\) \(\square\)</div></div></div></div></div>
<div class="ex-box mt-3"><div class="lbl lbl--ex mb-2">A kontinuum-hipotézis</div><div class="box-body">Cantor felvetette: van-e \(A\) halmaz amelyre \(|\mathbb{N}_0|<|A|<|\mathbb{R}|\)?<br><br>A válasz: <strong style="color:#f97316">a kérdés eldönthetetlen</strong> a Zermelo–Fraenkel axiómák alapján:<ul style="margin:.4rem 0 0 1.1rem;padding:0;line-height:2"><li>Gödel (1940): a kontinuum-hipotézis <em>nem cáfolható</em> ZFC-ben</li><li>Cohen (1963): a kontinuum-hipotézis <em>nem bizonyítható</em> ZFC-ben</li></ul><span style="font-size:.76rem;color:#8892a4">Ez a matematika egyik legmélyebb eredménye: a ZFC axiómarendszer „túl gyenge" e kérdés eldöntéséhez.</span></div></div>`;

const TABS: Tab[] = [
  { id: 'sz', label: 'Számosság', content: <Cols><RichTex html={t1a} /><div><BijVisual /><div style={{ height: '.75rem' }} /><RichTex html={t1b} /></div></Cols> },
  { id: 'ko', label: 'Kontinuum', content: <Cols><RichTex html={t2a} /><div><LinBij /><div style={{ height: '.75rem' }} /><RichTex html={t2b} /></div></Cols> },
  { id: 'mv', label: 'Megszámlálható', content: <Cols variant="7-5"><RichTex html={t3a} /><CantorDiag /></Cols> },
  { id: 'za', label: 'Zárt műveletek', content: <Cols><RichTex html={t4a} /><DiagTable /></Cols> },
  { id: 'ca', label: 'Cantor-tétel', content: <Cols><RichTex html={t5a} /><PowerSet /></Cols> },
  { id: 'ex', label: 'Előadás+', content: <Cols><RichTex html={t6a} /><div><RichTex html={t6b} /><div style={{ height: '.75rem' }} /><Hierarchy /></div></Cols> },
];

export default function Ch5() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">ILA — 5. fejezet</p>
      <h1 className="ila__title">Halmazok számossága</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2025</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
