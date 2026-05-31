import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* ════════════════════════════════════════════════
   Graph presets (for matroid examples)
════════════════════════════════════════════════ */
const ACC = '#38bdf8';

const GRAPHS: Record<string, { n: number; edges: [number, number][]; labels: string[] }> = {
  k4:   { n: 4,  edges: [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]], labels: ['1','2','3','4'] },
  c4:   { n: 4,  edges: [[0,1],[1,2],[2,3],[3,0]], labels: ['1','2','3','4'] },
  path: { n: 4,  edges: [[0,1],[1,2],[2,3]], labels: ['1','2','3','4'] },
  c5:   { n: 6,  edges: [[0,1],[1,2],[2,3],[3,4],[4,0],[0,2]], labels: ['1','2','3','4','5','6'] },
  pet:  { n: 10, edges: [[0,1],[1,2],[2,3],[3,4],[4,0],[0,5],[1,6],[2,7],[3,8],[4,9],[5,7],[7,9],[9,6],[6,8],[8,5]], labels: ['0','1','2','3','4','5','6','7','8','9'] },
  c4e:  { n: 4,  edges: [[0,1],[1,2],[2,3],[3,0],[0,2]], labels: ['1','2','3','4'] },
  tree: { n: 5,  edges: [[0,1],[0,2],[1,3],[1,4]], labels: ['r','a','b','c','d'] },
};

/* ── Union-Find ── */
function makeUF(n: number): number[] { return Array.from({ length: n }, (_, i) => i); }
function find(parent: number[], x: number): number {
  if (parent[x] !== x) parent[x] = find(parent, parent[x]);
  return parent[x];
}
function union(parent: number[], x: number, y: number): boolean {
  const px = find(parent, x), py = find(parent, y);
  if (px === py) return false;
  parent[px] = py; return true;
}

function hasCycle(n: number, selectedEdges: number[], allEdges: [number, number][]): boolean {
  const parent = makeUF(n);
  for (const ei of selectedEdges) {
    const [u, v] = allEdges[ei];
    if (!union(parent, u, v)) return true;
  }
  return false;
}

function maxSpanningForest(n: number, edges: [number, number][]): number[] {
  const parent = makeUF(n);
  const sel: number[] = [];
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    if (union(parent, u, v)) sel.push(i);
  }
  return sel;
}

function rankOfSubset(n: number, selectedEdges: number[], allEdges: [number, number][]): number {
  return maxSpanningForest(n, selectedEdges.map(i => allEdges[i])).length;
}

function allCircuits(n: number, edges: [number, number][]): number[][] {
  const circuits: number[][] = [];
  const m = edges.length;
  if (m > 18) return []; // guard against exponential blowup
  for (let mask = 1; mask < (1 << m); mask++) {
    const sel: number[] = [];
    for (let i = 0; i < m; i++) if ((mask >> i) & 1) sel.push(i);
    if (!hasCycle(n, sel, edges)) continue;
    const isMin = sel.every(ei => {
      const sub = sel.filter(x => x !== ei);
      return !hasCycle(n, sub, edges);
    });
    if (isMin) circuits.push(sel);
  }
  return circuits;
}

function allBases(n: number, edges: [number, number][]): number[][] {
  const r = maxSpanningForest(n, edges).length;
  const m = edges.length;
  if (m > 18) return [];
  const bases: number[][] = [];
  for (let mask = 0; mask < (1 << m); mask++) {
    const sel: number[] = [];
    for (let i = 0; i < m; i++) if ((mask >> i) & 1) sel.push(i);
    if (sel.length === r && !hasCycle(n, sel, edges)) bases.push(sel);
  }
  return bases;
}

function binom(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1);
  return Math.round(r);
}

/* ── Draw graph on canvas ── */
function circlePos(n: number, W: number, H: number, R: number): { x: number; y: number }[] {
  return Array.from({ length: n }, (_, i) => ({
    x: W / 2 + R * Math.cos((2 * Math.PI / n) * i - Math.PI / 2),
    y: H / 2 + R * Math.sin((2 * Math.PI / n) * i - Math.PI / 2),
  }));
}

function drawGraphCanvas(
  ctx: CanvasRenderingContext2D, W: number, H: number,
  g: typeof GRAPHS[string],
  pos: { x: number; y: number }[],
  selEdges: number[] | null,
  edgeColors: Record<number, string> | null,
) {
  ctx.clearRect(0, 0, W, H);
  g.edges.forEach(([u, v], i) => {
    const isSel = selEdges?.includes(i);
    const col = edgeColors?.[i] ?? (isSel ? ACC : '#2a3a4a');
    const lw = isSel ? 2.5 : 1.2;
    ctx.beginPath(); ctx.moveTo(pos[u].x, pos[u].y); ctx.lineTo(pos[v].x, pos[v].y);
    ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.stroke();
    const mx = (pos[u].x + pos[v].x) / 2, my = (pos[u].y + pos[v].y) / 2;
    ctx.fillStyle = '#0d1117'; ctx.fillRect(mx - 9, my - 8, 18, 16);
    ctx.fillStyle = isSel ? ACC : '#6b7280'; ctx.font = 'bold 9px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('e' + (i + 1), mx, my);
  });
  pos.forEach((p, i) => {
    ctx.beginPath(); ctx.arc(p.x, p.y, 13, 0, Math.PI * 2);
    ctx.fillStyle = ACC; ctx.fill(); ctx.strokeStyle = '#0e1014'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#000'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(g.labels?.[i] ?? String(i + 1), p.x, p.y);
  });
}

/* ════════════════════════════════════════════════
   Tab 1: Axiómák
════════════════════════════════════════════════ */
function AxiomTab() {
  const [gKey, setGKey] = useState<keyof typeof GRAPHS>('k4');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const g = GRAPHS[gKey];
  const m = g.edges.length;

  // Build F = all acyclic subsets
  const F: number[][] = [];
  if (m <= 18) {
    for (let mask = 0; mask < (1 << m); mask++) {
      const sel: number[] = [];
      for (let i = 0; i < m; i++) if ((mask >> i) & 1) sel.push(i);
      if (!hasCycle(g.n, sel, g.edges)) F.push(sel);
    }
  }

  const i1 = F.some(x => x.length === 0);
  const i2 = F.every(x => x.every((_, j) => {
    const sub = x.filter((_, k) => k !== j);
    return F.some(y => y.length === sub.length && sub.every(e => y.includes(e)));
  }));
  let i3 = true;
  outer:
  for (const X of F) {
    for (const Y of F) {
      if (X.length >= Y.length) continue;
      const YminX = Y.filter(e => !X.includes(e));
      const canAug = YminX.some(e => {
        const Xs = X.concat([e]);
        return F.some(y => y.length === Xs.length && Xs.every(ei => y.includes(ei)));
      });
      if (!canAug) { i3 = false; break outer; }
    }
  }

  const samples = F.slice(0, 20);

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    const pos = circlePos(g.n, W, H, Math.min(W, H) * 0.36);
    drawGraphCanvas(ctx, W, H, g, pos, null, null);
    ctx.fillStyle = '#8b949e'; ctx.font = '11px monospace'; ctx.textAlign = 'center';
    ctx.fillText(`|F| = ${F.length}  (összes független részhalmaz száma)`, W / 2, H - 18);
  }, [gKey, g, F]);

  const axHtml = [
    { ok: i1, label: '(I1) ∅ ∈ F' },
    { ok: i2, label: '(I2) Leszálló tulajdonság' },
    { ok: i3, label: '(I3) Kiegészítési tulajdonság' },
  ].map(({ ok, label }) =>
    `<div style="display:flex;align-items:center;gap:.5rem;padding:.25rem 0;font-size:.69rem">
      <span style="color:${ok ? '#34d399' : '#ef4444'};font-weight:700;font-size:.8rem">${ok ? '✓' : '✗'}</span>
      <span>${label}</span>
    </div>`
  ).join('');

  const indepHtml = samples.map(s => {
    const label = s.length === 0 ? '∅' : '{' + s.map(i => 'e' + (i + 1)).join(',') + '}';
    return `<span style="display:inline-block;padding:.1rem .4rem;border-radius:.25rem;font-size:.66rem;font-weight:700;margin:.1rem;background:#0a1f2e;color:${ACC}">${label}</span>`;
  }).join('') + (F.length > 20 ? `<span style="color:#8b949e;font-size:.65rem"> … (+${F.length - 20} db)</span>` : '');

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-2">15.1 Definíció — Függetlenségi axiómák</div><div class="box-body">
\(\mathcal{M}=(S,\mathcal{F})\) <strong>matroid</strong>, ha:<br>
<strong>(I1)</strong> \(\emptyset\in\mathcal{F}\)<br>
<strong>(I2)</strong> Ha \(Y\in\mathcal{F}\) és \(X\subseteq Y\), akkor \(X\in\mathcal{F}\) (leszálló)<br>
<strong>(I3)</strong> Ha \(X,Y\in\mathcal{F}\) és \(|X|&lt;|Y|\), akkor \(\exists s\in Y\setminus X: X\cup\{s\}\in\mathcal{F}\) (kiegészítési tulajdonság)
</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Gráf</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {(['k4','c4','path'] as const).map(k => (
              <button key={k} className={`op-btn${gKey === k ? ' is-active' : ''}`} onClick={() => setGKey(k)}>
                {{ k4: 'K₄', c4: 'C₄', path: 'Út P₄' }[k]}
              </button>
            ))}
          </div>
          <span className="lbl" style={{ color: ACC }}>Axiómák ellenőrzése</span>
          <RichTex key={gKey + 'ax'} html={axHtml} />
          <span className="lbl" style={{ color: ACC }}>Független részhalmazok (F-elemek)</span>
          <div style={{ maxHeight: 140, overflowY: 'auto', padding: '.2rem 0' }}>
            <RichTex key={gKey + 'ind'} html={indepHtml} />
          </div>
        </div>
      </div>
      <div>
        <canvas ref={canvasRef} style={{ width: '100%', height: 340, background: '#0d1117', borderRadius: '.5rem', display: 'block' }} />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Tab 2: Grafikus matroid (click edges)
════════════════════════════════════════════════ */
function GraphicTab() {
  const [gKey, setGKey] = useState<keyof typeof GRAPHS>('k4');
  const [sel, setSel] = useState<number[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const posRef = useRef<{ x: number; y: number }[] | null>(null);
  const g = GRAPHS[gKey];

  const indep = !hasCycle(g.n, sel, g.edges);
  const rank = indep ? sel.length : rankOfSubset(g.n, sel, g.edges);
  let circuitCount = 0;
  if (!indep) {
    const parent = makeUF(g.n);
    sel.forEach(ei => { const [u, v] = g.edges[ei]; if (!union(parent, u, v)) circuitCount++; });
  }

  function loadGraph(key: keyof typeof GRAPHS) {
    setGKey(key); setSel([]); posRef.current = null;
  }

  function maxForest() {
    setSel(maxSpanningForest(g.n, g.edges));
  }

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    if (!posRef.current) posRef.current = circlePos(g.n, W, H, Math.min(W, H) * 0.38);
    const pos = posRef.current;
    const edgeColors: Record<number, string> = {};
    sel.forEach(i => { edgeColors[i] = indep ? '#34d399' : '#ef4444'; });
    drawGraphCanvas(ctx, W, H, g, pos, sel, edgeColors);
    const status = sel.length === 0 ? 'Üres halmaz (∅ ∈ F ✓)' : indep ? `Független (erdő), r(X)=${sel.length}` : 'Nem független — kört tartalmaz';
    ctx.fillStyle = indep ? '#34d399' : '#ef4444'; ctx.font = 'bold 12px monospace'; ctx.textAlign = 'center';
    ctx.fillText(status, W / 2, H - 20);
  }, [gKey, g, sel, indep]);

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const cv = canvasRef.current; if (!cv || !posRef.current) return;
    const rect = cv.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (cv.width / rect.width);
    const my = (e.clientY - rect.top) * (cv.height / rect.height);
    const pos = posRef.current;
    g.edges.forEach(([u, v], i) => {
      const emx = (pos[u].x + pos[v].x) / 2, emy = (pos[u].y + pos[v].y) / 2;
      if (Math.hypot(mx - emx, my - emy) < 18) {
        setSel(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
      }
    });
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-2">15.5(ii) Grafikus matroid</div><div class="box-body">
\(G=(V,E)\) gráf. \(S:=E\), \(\mathcal{F}\):= körmentes élhalmazok (erdők). Ez matroid: <strong>grafikus (graphic) matroid</strong>.
</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Gráf</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {(['k4','c5','pet'] as const).map(k => (
              <button key={k} className={`op-btn${gKey === k ? ' is-active' : ''}`} onClick={() => loadGraph(k)}>
                {{ k4: 'K₄', c5: 'C₅+e', pet: 'Petersen' }[k]}
              </button>
            ))}
          </div>
          <div className="def-box" style={{ fontSize: '.68rem' }}>
            Kattints élekre a kiválasztáshoz. Zöld = független (erdő), Piros = tartalmaz kört.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', margin: '.4rem 0' }}>
            {[
              { v: sel.length, l: 'kiválasztott élek' },
              { v: indep ? 'Igen ✓' : 'Nem ✗', l: 'Független?' },
              { v: rank, l: 'r(X)' },
              { v: circuitCount, l: 'Körök' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: ACC }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '.5rem' }}>
            <button className="op-btn" onClick={() => setSel([])}>Töröl</button>
            <button className="op-btn" style={{ borderColor: '#34d399', color: '#34d399' }} onClick={maxForest}>Max erdő</button>
          </div>
        </div>
      </div>
      <div>
        <canvas ref={canvasRef} onClick={handleClick} style={{ width: '100%', height: 340, background: '#0d1117', borderRadius: '.5rem', display: 'block', cursor: 'crosshair' }} />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Tab 3: Uniform matroid
════════════════════════════════════════════════ */
function UniformTab() {
  const [m, setM] = useState(5);
  const [k, setK] = useState(2);
  const kClamped = Math.min(k, m);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fcount = Array.from({ length: kClamped + 1 }, (_, i) => binom(m, i)).reduce((a, b) => a + b, 0);
  const basesCount = binom(m, kClamped);
  const circuitsCount = binom(m, kClamped + 1);

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const elemR = 16, elemSpacing = Math.min(44, W / (m + 1));
    const startX = W / 2 - elemSpacing * (m - 1) / 2;
    const ey = H * 0.12;
    for (let i = 0; i < m; i++) {
      ctx.beginPath(); ctx.arc(startX + i * elemSpacing, ey, elemR, 0, Math.PI * 2);
      ctx.fillStyle = ACC; ctx.fill(); ctx.strokeStyle = '#0e1014'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#000'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(i + 1), startX + i * elemSpacing, ey);
    }
    ctx.fillStyle = '#8b949e'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(`S = {1, 2, …, ${m}}`, W / 2, ey + 30);
    const maxSize = Math.min(kClamped + 1, m);
    let yOff = H * 0.22;
    for (let sz = 0; sz <= maxSize; sz++) {
      const subsets: number[][] = [];
      function gen(start: number, cur: number[]) {
        if (cur.length === sz) { subsets.push([...cur]); return; }
        if (start > m - 1) return;
        gen(start + 1, [...cur, start]); gen(start + 1, cur);
      }
      gen(0, []);
      if (subsets.length > 16) break;
      const cols = Math.min(subsets.length, 8);
      const boxW = Math.min(60, (W - 40) / cols);
      subsets.forEach((sub, si) => {
        const bx = W / 2 + (si % cols - cols / 2) * boxW + boxW / 2, by = yOff + Math.floor(si / cols) * 26;
        const isCircuit = sz === kClamped + 1;
        const isBase = sz === kClamped;
        const col = isCircuit ? '#f97316' : isBase ? '#34d399' : sz > 0 ? ACC + '33' : '#21262d';
        const textCol = isCircuit ? '#f97316' : isBase ? '#34d399' : '#8b949e';
        ctx.fillStyle = col; ctx.beginPath(); ctx.roundRect(bx - boxW * 0.46, by - 10, boxW * 0.92, 20, 4); ctx.fill();
        const label = sub.length === 0 ? '∅' : '{' + sub.map(i => i + 1).join(',') + '}';
        ctx.fillStyle = textCol; ctx.font = 'bold 9px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(label, bx, by);
      });
      yOff += Math.ceil(subsets.length / 8) * 28 + 4;
    }
    ctx.fillStyle = '#34d399'; ctx.font = '10px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('■ bázis (|X|=k)', 20, H - 40);
    ctx.fillStyle = '#f97316'; ctx.fillText('■ kör (|X|=k+1)', 20, H - 24);
  }, [m, k, kClamped]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-2">15.5(iii) Uniform matroid \(U_{m,k}\)</div><div class="box-body">
\(S=\{1,\ldots,m\}\), \(\mathcal{F}=\{X\subseteq S:|X|\le k\}\).<br>
Körei: minden \((k+1)\)-elemű részhalmaz.<br>
Bázisai: minden \(k\)-elemű részhalmaz, szám: \(\binom{m}{k}\).
</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Paraméterek</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.68rem', color: '#8b949e', marginBottom: '.4rem' }}>
            <span>m =</span>
            <input type="range" min={2} max={8} value={m} onChange={e => setM(+e.target.value)} style={{ flex: 1, accentColor: ACC }} />
            <span style={{ minWidth: 24, textAlign: 'right', color: ACC, fontWeight: 700 }}>{m}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.68rem', color: '#8b949e', marginBottom: '.4rem' }}>
            <span>k =</span>
            <input type="range" min={0} max={m} value={kClamped} onChange={e => setK(+e.target.value)} style={{ flex: 1, accentColor: ACC }} />
            <span style={{ minWidth: 24, textAlign: 'right', color: ACC, fontWeight: 700 }}>{kClamped}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', margin: '.4rem 0' }}>
            {[
              { v: fcount, l: '|F| (indep. h.sz.)' },
              { v: basesCount, l: 'bázisok száma' },
              { v: circuitsCount, l: 'körök száma' },
              { v: kClamped, l: 'r(M)' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: ACC }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="def-box" style={{ fontSize: '.68rem' }}>
            A canvas kördiagram jelöli: zöld = bázis, narancs = kör (minimális összefüggő), szürke = kisebb független halmaz.
          </div>
        </div>
      </div>
      <div>
        <canvas ref={canvasRef} style={{ width: '100%', height: 340, background: '#0d1117', borderRadius: '.5rem', display: 'block' }} />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Tab 4: Rangfüggvény
════════════════════════════════════════════════ */
function RankTab() {
  const [gKey, setGKey] = useState<keyof typeof GRAPHS>('k4');
  const [sel, setSel] = useState<number[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const posRef = useRef<{ x: number; y: number }[] | null>(null);
  const g = GRAPHS[gKey];

  const rx = rankOfSubset(g.n, sel, g.edges);
  const rm = maxSpanningForest(g.n, g.edges).length;

  function loadGraph(key: keyof typeof GRAPHS) { setGKey(key); setSel([]); posRef.current = null; }

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    if (!posRef.current) posRef.current = circlePos(g.n, W, H, Math.min(W, H) * 0.38);
    const pos = posRef.current;
    const edgeColors: Record<number, string> = {};
    const parent = makeUF(g.n);
    sel.forEach(ei => {
      const [u, v] = g.edges[ei];
      if (union(parent, u, v)) edgeColors[ei] = '#34d399';
      else edgeColors[ei] = '#ef444466';
    });
    drawGraphCanvas(ctx, W, H, g, pos, sel, edgeColors);
    ctx.fillStyle = ACC; ctx.font = 'bold 12px monospace'; ctx.textAlign = 'center';
    ctx.fillText(`r(X) = ${rx}  (max erdő mérete X-ben = ${rx})`, W / 2, H - 20);
  }, [gKey, g, sel, rx]);

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const cv = canvasRef.current; if (!cv || !posRef.current) return;
    const rect = cv.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (cv.width / rect.width);
    const my = (e.clientY - rect.top) * (cv.height / rect.height);
    const pos = posRef.current;
    g.edges.forEach(([u, v], i) => {
      const emx = (pos[u].x + pos[v].x) / 2, emy = (pos[u].y + pos[v].y) / 2;
      if (Math.hypot(mx - emx, my - emy) < 18) {
        setSel(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
      }
    });
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-2">15.7 Rangfüggvény axiómái</div><div class="box-body">
\(r:\mathcal{P}(S)\to\mathbb{N}\) rangfüggvény, ha:<br>
<strong>(r1)</strong> \(r(\emptyset)=0\)<br>
<strong>(r2)</strong> \(r(Y)\le r(X)\) ha \(Y\subseteq X\) (monoton)<br>
<strong>(r3)</strong> \(r(X)\le|X|\) (szubkardinális)<br>
<strong>(r4)</strong> \(r(X\cup Y)+r(X\cap Y)\le r(X)+r(Y)\) (szubmoduláris)
</div></div>
<div class="thm-box"><div class="box-body">\[r(C)=|C|-1\quad\text{minden } C \text{ körre}\]</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Grafikus matroid rangja</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {(['k4','c5'] as const).map(k => (
              <button key={k} className={`op-btn${gKey === k ? ' is-active' : ''}`} onClick={() => loadGraph(k)}>
                {{ k4: 'K₄', c5: 'C₅+e' }[k]}
              </button>
            ))}
          </div>
          <div className="def-box" style={{ fontSize: '.68rem' }}>
            Kattints élekre X halmaz kijelöléséhez. A canvas mutatja r(X) = max erdő mérete X-ben.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', margin: '.4rem 0' }}>
            {[
              { v: sel.length, l: '|X|' },
              { v: rx, l: 'r(X)' },
              { v: rm, l: 'r(M)' },
              { v: rx <= sel.length ? '✓' : '✗', l: 'szubkard.' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: ACC }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <canvas ref={canvasRef} onClick={handleClick} style={{ width: '100%', height: 340, background: '#0d1117', borderRadius: '.5rem', display: 'block', cursor: 'crosshair' }} />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Tab 5: Körök & Bázisok
════════════════════════════════════════════════ */
function CircuitTab() {
  const [gKey, setGKey] = useState<keyof typeof GRAPHS>('k4');
  const [highlight, setHighlight] = useState<number[] | null>(null);
  const [mode, setMode] = useState<'basis' | 'circuit' | ''>('');
  const [note, setNote] = useState('—');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const posRef = useRef<{ x: number; y: number }[] | null>(null);
  const g = GRAPHS[gKey];
  const bases = allBases(g.n, g.edges);
  const circuits = g.edges.length <= 12 ? allCircuits(g.n, g.edges) : [];
  const rm = maxSpanningForest(g.n, g.edges).length;

  function loadGraph(key: keyof typeof GRAPHS) {
    setGKey(key); setHighlight(null); setMode(''); posRef.current = null;
    const g2 = GRAPHS[key];
    const r = maxSpanningForest(g2.n, g2.edges).length;
    setNote(`Rang r(M)=${r}. Minden bázis ${r}-elemű.`);
  }

  useEffect(() => {
    setNote(`Rang r(M)=${rm}. Minden bázis ${rm}-elemű.`);
  }, [gKey, rm]);

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    if (!posRef.current) posRef.current = circlePos(g.n, W, H, Math.min(W, H) * 0.38);
    const pos = posRef.current;
    const edgeColors: Record<number, string> = {};
    if (highlight) highlight.forEach(i => { edgeColors[i] = mode === 'basis' ? '#34d399' : '#ef4444'; });
    drawGraphCanvas(ctx, W, H, g, pos, highlight, edgeColors);
    if (highlight) {
      ctx.fillStyle = mode === 'basis' ? '#34d399' : '#ef4444'; ctx.font = 'bold 12px monospace'; ctx.textAlign = 'center';
      ctx.fillText(mode === 'basis' ? 'Bázis (zöld)' : 'Kör (piros)', W / 2, H - 20);
    }
  }, [gKey, g, highlight, mode]);

  function showBasis() {
    if (!bases.length) return;
    const idx = Math.floor(Math.random() * bases.length);
    setHighlight(bases[idx]); setMode('basis');
    setNote(`Bázis: {${bases[idx].map(i => 'e' + (i + 1)).join(',')}}`);
  }

  function showCircuit() {
    if (!circuits.length) return;
    const idx = Math.floor(Math.random() * circuits.length);
    setHighlight(circuits[idx]); setMode('circuit');
    setNote(`Kör: {${circuits[idx].map(i => 'e' + (i + 1)).join(',')}}  (r(C)=${circuits[idx].length - 1})`);
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-2">15.8 Körök és bázisok</div><div class="box-body">
<strong>Bázis:</strong> maximális független részhalmaz.<br>
<strong>Kör:</strong> minimális összefüggő részhalmaz (nem független, de minden valódi részhalmaza az).<br>
<strong>15.10:</strong> Minden bázis azonos méretű; kicserélési tulajdonság.
</div></div>
<div class="thm-box"><div class="box-body">\[r(\mathcal{M}) = |B|\quad\text{minden } B \text{ bázisra}\]</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Preset</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {(['k4','c4e','tree'] as const).map(k => (
              <button key={k} className={`op-btn${gKey === k ? ' is-active' : ''}`} onClick={() => loadGraph(k)}>
                {{ k4: 'K₄', c4e: 'C₄+e', tree: 'Fa' }[k]}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', margin: '.4rem 0' }}>
            {[
              { v: bases.length, l: 'bázisok száma' },
              { v: circuits.length + (g.edges.length > 12 ? '+' : ''), l: 'körök száma' },
              { v: rm, l: 'r(M)' },
              { v: g.edges.length, l: '|E| (|S|)' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: ACC }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.4rem' }}>
            <button className="op-btn" onClick={showBasis}>Bázis megjelenít</button>
            <button className="op-btn" onClick={showCircuit}>Kör megjelenít</button>
          </div>
          <div className="def-box" style={{ fontSize: '.68rem' }}>{note}</div>
        </div>
      </div>
      <div>
        <canvas ref={canvasRef} style={{ width: '100%', height: 340, background: '#0d1117', borderRadius: '.5rem', display: 'block' }} />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Tabs
════════════════════════════════════════════════ */
const TABS: Tab[] = [
  { id: 'axiom',   label: 'Axiómák',   content: <AxiomTab /> },
  { id: 'graph',   label: 'Grafikus',  content: <GraphicTab /> },
  { id: 'unif',    label: 'Uniform',   content: <UniformTab /> },
  { id: 'rank',    label: 'Rang',      content: <RankTab /> },
  { id: 'circuit', label: 'Körök',     content: <CircuitTab /> },
];

export default function DimatCh23() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika II.15 — fejezet</p>
      <h1 className="ila__title">Matroidok</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
