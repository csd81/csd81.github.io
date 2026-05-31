import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* ══════════════════════════════════════════════════════════
   Shared
══════════════════════════════════════════════════════════ */
type Pt = { x: number; y: number; g: number };

const GROUP_COLORS = ['#38bdf8', '#34d399', '#f97316', '#a78bfa', '#fb7185', '#fbbf24'];

function turanEdgeCount(n: number, r: number): number {
  const q = Math.floor(n / r), s = n % r;
  return Math.floor((r - s) * q * q / 2 + s * (q + 1) * q + s * (s - 1) * (q + 1) * (q + 1) / 2);
}

/* ══════════════════════════════════════════════════════════
   TAB 1 — Turán-tétel / ex(n, K_{r+1})
══════════════════════════════════════════════════════════ */
type TuranGraph = { nodes: Pt[]; edges: [number, number][]; groups: number[][] };

function buildTuran(n: number, r: number, W: number, H: number): TuranGraph {
  const q = Math.floor(n / r), s = n % r;
  const groups: number[][] = [];
  let idx = 0;
  for (let i = 0; i < r; i++) {
    const size = i < s ? q + 1 : q;
    const grp: number[] = [];
    for (let j = 0; j < size; j++) grp.push(idx++);
    groups.push(grp);
  }
  const nodes: Pt[] = new Array(n);
  for (let g = 0; g < r; g++) {
    const grp = groups[g];
    const angle0 = (2 * Math.PI / r) * g - Math.PI / 2;
    const cx = W / 2 + Math.min(W, H) * 0.3 * Math.cos(angle0);
    const cy = H / 2 + Math.min(W, H) * 0.3 * Math.sin(angle0);
    const cnt = grp.length;
    grp.forEach((id, k) => {
      const a = cnt === 1 ? 0 : (2 * Math.PI / cnt) * k;
      const rad = cnt === 1 ? 0 : Math.min(W, H) * 0.09;
      nodes[id] = { x: cx + rad * Math.cos(a), y: cy + rad * Math.sin(a), g };
    });
  }
  const edges: [number, number][] = [];
  for (let g1 = 0; g1 < r; g1++) for (let g2 = g1 + 1; g2 < r; g2++)
    for (const u of groups[g1]) for (const v of groups[g2])
      edges.push([u, v]);
  return { nodes, edges, groups };
}

function TuranCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [n, setN] = useState(10);
  const [r, setR] = useState(3);
  const [sel, setSel] = useState(-1);
  const [extraEdges, setExtraEdges] = useState<[number, number, boolean][]>([]);
  const graphRef = useRef<TuranGraph | null>(null);

  const draw = useCallback((tg: TuranGraph, selection: number, extra: [number, number, boolean][]) => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    tg.edges.forEach(([u, v]) => {
      const hl = selection === u || selection === v;
      ctx.beginPath(); ctx.moveTo(tg.nodes[u].x, tg.nodes[u].y); ctx.lineTo(tg.nodes[v].x, tg.nodes[v].y);
      ctx.strokeStyle = hl ? '#38bdf8' : '#2a3a4a'; ctx.lineWidth = hl ? 2 : 1; ctx.stroke();
    });
    extra.forEach(([u, v, ok]) => {
      ctx.beginPath(); ctx.moveTo(tg.nodes[u].x, tg.nodes[u].y); ctx.lineTo(tg.nodes[v].x, tg.nodes[v].y);
      ctx.strokeStyle = ok ? '#34d399' : '#ef4444'; ctx.lineWidth = 2.5; ctx.setLineDash([5, 3]); ctx.stroke(); ctx.setLineDash([]);
    });
    tg.nodes.forEach((nd, i) => {
      const col = GROUP_COLORS[nd.g % GROUP_COLORS.length];
      ctx.beginPath(); ctx.arc(nd.x, nd.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = selection === i ? '#fff' : col; ctx.fill();
      ctx.strokeStyle = '#0e1014'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#000'; ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(i + 1), nd.x, nd.y);
    });
  }, []);

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const tg = buildTuran(n, r, cv.width, cv.height);
    graphRef.current = tg;
    setExtraEdges([]);
    setSel(-1);
    draw(tg, -1, []);
  }, [n, r, draw]);

  useEffect(() => {
    if (graphRef.current) draw(graphRef.current, sel, extraEdges);
  }, [sel, extraEdges, draw]);

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const cv = canvasRef.current; if (!cv) return;
    const tg = graphRef.current; if (!tg) return;
    const rect = cv.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    let newSel = -1;
    tg.nodes.forEach((nd, i) => { if (Math.hypot(nd.x - mx, nd.y - my) < 12) newSel = i; });
    setSel(newSel);
  }

  function addRandom() {
    const tg = graphRef.current; if (!tg) return;
    const nn = tg.nodes.length;
    if (nn < 2) return;
    const u = Math.floor(Math.random() * nn);
    let v: number; do { v = Math.floor(Math.random() * nn); } while (v === u);
    const ok = tg.nodes[u].g !== tg.nodes[v].g;
    setExtraEdges(prev => [...prev, [u, v, ok]]);
  }

  const ex = turanEdgeCount(n, r);
  const density = (ex / (n * (n - 1) / 2) * 100).toFixed(1) + '%';

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Turán-gráf \(T(n,r)\) — interaktív</span>
        <canvas ref={canvasRef} width={560} height={460} style={{ width: '100%', maxWidth: 560, background: '#0a0f14', borderRadius: '.5rem', cursor: 'pointer' }} onClick={handleClick} />
        <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
          <button className="op-btn" onClick={() => { const cv = canvasRef.current; if (!cv) return; const tg = buildTuran(n, r, cv.width, cv.height); graphRef.current = tg; setExtraEdges([]); setSel(-1); draw(tg, -1, []); }}>Újrarajzol</button>
          <button className="op-btn" onClick={addRandom}>+ Véletlen él</button>
        </div>
      </div>
      <div>
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">Alapfogalmak</span>
<div style="font-size:.82rem;color:#c8d8e8;line-height:1.8">
<b style="color:#38bdf8">ex(n, H)</b> — az összes \(n\)-csúcsú \(H\)-mentes gráf maximális élszáma.<br>
<b style="color:#38bdf8">Turán-tétel (1941):</b> \(ex(n, K_{r+1}) = e(T(n,r))\), ahol \(T(n,r)\) a Turán-gráf.
</div>
<div style="background:#040a10;border:1px solid #0a1f2e;border-radius:.35rem;padding:.55rem .75rem;font-size:.72rem;color:#a8d8f0;margin:.5rem 0">
\[ex(n,K_{r+1})=\left(1-\tfrac{1}{r}\right)\tfrac{n^2}{2}+O(n)\]
</div>`} />
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: '#38bdf8' }}>Paraméterek</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.75rem', color: '#8b949e', marginBottom: '.4rem' }}>
            <span>n =</span>
            <input type="range" min={4} max={20} value={n} style={{ flex: 1, accentColor: '#38bdf8' }} onChange={e => setN(+e.target.value)} />
            <span style={{ color: '#38bdf8', fontWeight: 700, minWidth: 24 }}>{n}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.75rem', color: '#8b949e', marginBottom: '.6rem' }}>
            <span>r =</span>
            <input type="range" min={2} max={6} value={r} style={{ flex: 1, accentColor: '#38bdf8' }} onChange={e => setR(+e.target.value)} />
            <span style={{ color: '#38bdf8', fontWeight: 700, minWidth: 24 }}>{r}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.4rem' }}>
            <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8' }}>{ex}</div>
              <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>ex(n, K_r+1)</div>
            </div>
            <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8' }}>{density}</div>
              <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>él / C(n,2)</div>
            </div>
          </div>
        </div>
        <div className="info-box" style={{ fontSize: '.75rem', color: '#c8d8e8', lineHeight: 1.7 }}>
          Kattints egy csúcsra a szomszédsági osztályát kiemelni. A csoportokat szín jelöli.
          {String.raw` A gráf valóban \(K_{r+1}\)-mentes, de tartalmaz \(K_r\)-t.`}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TAB 2 — T(n,r) szerkezete
══════════════════════════════════════════════════════════ */
type TgPreset = { n: number; r: number };
const TG_PRESETS: TgPreset[] = [
  { n: 6, r: 2 }, { n: 6, r: 3 }, { n: 9, r: 3 }, { n: 12, r: 4 }, { n: 10, r: 5 },
];

function TGraphCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [preset, setPreset] = useState(0);
  const { n, r } = TG_PRESETS[preset];

  const draw = useCallback(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const q = Math.floor(n / r), s = n % r;
    const groups: number[][] = [];
    let idx = 0;
    for (let i = 0; i < r; i++) {
      const size = i < s ? q + 1 : q;
      const grp: number[] = []; for (let j = 0; j < size; j++) grp.push(idx++); groups.push(grp);
    }
    const pos: Pt[] = new Array(n);
    const cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.35;
    for (let g = 0; g < r; g++) {
      const grp = groups[g];
      const ang0 = (2 * Math.PI / r) * g - Math.PI / 2;
      const gx = cx + R * Math.cos(ang0), gy = cy + R * Math.sin(ang0);
      const cnt = grp.length, rr = cnt === 1 ? 0 : Math.min(W, H) * 0.09;
      grp.forEach((id, k) => {
        const a = cnt === 1 ? 0 : (2 * Math.PI / cnt) * k;
        pos[id] = { x: gx + rr * Math.cos(a), y: gy + rr * Math.sin(a), g };
      });
    }
    for (let g1 = 0; g1 < r; g1++) for (let g2 = g1 + 1; g2 < r; g2++)
      for (const u of groups[g1]) for (const v of groups[g2]) {
        ctx.beginPath(); ctx.moveTo(pos[u].x, pos[u].y); ctx.lineTo(pos[v].x, pos[v].y);
        ctx.strokeStyle = '#334155'; ctx.lineWidth = 1; ctx.stroke();
      }
    groups.forEach((grp, g) => {
      if (grp.length < 2) return;
      const xs = grp.map(i => pos[i].x), ys = grp.map(i => pos[i].y);
      const mx2 = (Math.min(...xs) + Math.max(...xs)) / 2, my2 = (Math.min(...ys) + Math.max(...ys)) / 2;
      const rw = (Math.max(...xs) - Math.min(...xs)) / 2 + 18, rh = (Math.max(...ys) - Math.min(...ys)) / 2 + 18;
      ctx.beginPath(); ctx.ellipse(mx2, my2, Math.max(rw, 20), Math.max(rh, 20), 0, 0, Math.PI * 2);
      ctx.strokeStyle = GROUP_COLORS[g % GROUP_COLORS.length] + '55'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = GROUP_COLORS[g % GROUP_COLORS.length] + '11'; ctx.fill();
    });
    pos.forEach((nd, i) => {
      const col = GROUP_COLORS[nd.g % GROUP_COLORS.length];
      ctx.beginPath(); ctx.arc(nd.x, nd.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = col; ctx.fill(); ctx.strokeStyle = '#0e1014'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#000'; ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(i + 1), nd.x, nd.y);
    });
    groups.forEach((grp, g) => {
      const xs = grp.map(i => pos[i].x), ys = grp.map(i => pos[i].y);
      const lx = (Math.min(...xs) + Math.max(...xs)) / 2, ly = Math.min(...ys) - 22;
      ctx.fillStyle = GROUP_COLORS[g % GROUP_COLORS.length]; ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center'; ctx.fillText(`V${g + 1} (${grp.length})`, lx, ly);
    });
  }, [n, r]);

  useEffect(() => { draw(); }, [draw]);

  let ec = 0;
  const q = Math.floor(n / r), s = n % r;
  const groups2: number[][] = [];
  let idx2 = 0;
  for (let i = 0; i < r; i++) { const size = i < s ? q + 1 : q; const g: number[] = []; for (let j = 0; j < size; j++) g.push(idx2++); groups2.push(g); }
  for (let g1 = 0; g1 < r; g1++) for (let g2 = g1 + 1; g2 < r; g2++) ec += groups2[g1].length * groups2[g2].length;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Turán-gráf T(n,r) szerkezete</span>
        <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
          {TG_PRESETS.map((p, i) => (
            <button key={i} className={`op-btn${preset === i ? ' is-active' : ''}`} onClick={() => setPreset(i)}>T({p.n},{p.r})</button>
          ))}
        </div>
        <canvas ref={canvasRef} width={560} height={420} style={{ width: '100%', maxWidth: 560, background: '#0a0f14', borderRadius: '.5rem' }} />
      </div>
      <div>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: '#38bdf8' }}>Metrikák</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.4rem' }}>
            {[['n', String(n)], ['r', String(r)], ['élek', String(ec)], ['ω(G)', String(r)]].map(([lbl, val]) => (
              <div key={lbl} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8' }}>{val}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">Turán-gráf definíciója</span>
<div style="font-size:.82rem;color:#c8d8e8;line-height:1.8">
\(T(n,r)\): az \(n\) csúcsot \(r\) részbe osztjuk. Ha \(n=qr+s\) (\(0\le s&lt;r\)), akkor \(s\) rész \(q+1\) csúcsos, \(r-s\) rész \(q\) csúcsos. Minden érintkezik, amelyek különböző részben vannak.
</div>
<div style="background:#040a10;border:1px solid #0a1f2e;border-radius:.35rem;padding:.55rem .75rem;font-size:.72rem;color:#a8d8f0;margin:.5rem 0">
\[e(T(n,r))=\left(1-\tfrac{1}{r}\right)\tfrac{n^2}{2}-\tfrac{s(r-s)}{2r}\]
</div>
<div style="font-size:.75rem;color:#c8d8e8;line-height:1.7">
Az egyes részeket különböző szín jelöli. A gráf valóban \(K_{r+1}\)-mentes, de tartalmaz \(K_r\)-t.
</div>`} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TAB 3 — Kővári-Sós-Turán (KST)
══════════════════════════════════════════════════════════ */
type KstGraph = { nodes: { x: number; y: number; side: number }[]; edges: [number, number][] };

function kstBound(n: number, s: number, t: number): number {
  return Math.floor(0.5 * Math.pow(t - 1, 1 / s) * Math.pow(n, 2 - 1 / s) + (s - 1) / 2 * n);
}

function buildKstRandom(n: number, s: number, t: number, W: number, H: number): KstGraph {
  const half = Math.floor(n / 2);
  const nodes = Array.from({ length: n }, (_, i) => {
    const side = i < half ? 0 : 1;
    const cnt = side === 0 ? half : n - half;
    const pos2 = side === 0 ? i : i - half;
    return { x: side === 0 ? W * 0.25 : W * 0.75, y: H * 0.1 + (H * 0.8 / (cnt - 1 || 1)) * pos2, side };
  });
  const edges: [number, number][] = [];
  const maxEdges = kstBound(n, s, t) + Math.floor(Math.random() * 10) - 5;
  for (let a = 0; edges.length < maxEdges; a++) {
    if (a > maxEdges * 3) break;
    const u = Math.floor(Math.random() * half);
    const v = half + Math.floor(Math.random() * (n - half));
    if (!edges.find(e => e[0] === u && e[1] === v)) edges.push([u, v]);
  }
  return { nodes, edges };
}

function subsets<T>(arr: T[], k: number): T[][] {
  if (k === 0) return [[]];
  if (arr.length < k) return [];
  const [h, ...t] = arr;
  return [...subsets(t, k - 1).map(s => [h, ...s]), ...subsets(t, k)];
}

function KstCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [s, setS] = useState(2);
  const [t, setT] = useState(2);
  const [n, setN] = useState(14);
  const [graph, setGraph] = useState<KstGraph | null>(null);
  const [highlighted, setHighlighted] = useState<number[]>([]);
  const [found, setFound] = useState<string>('—');

  const draw = useCallback((g: KstGraph | null, hl: number[]) => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    if (!g) return;
    ctx.beginPath(); ctx.moveTo(W / 2, H * 0.05); ctx.lineTo(W / 2, H * 0.95);
    ctx.strokeStyle = '#21262d'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = '#8b949e'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('A oldal', W * 0.25, H * 0.05); ctx.fillText('B oldal', W * 0.75, H * 0.05);
    g.edges.forEach(([u, v]) => {
      const hlEdge = hl.includes(u) && hl.includes(v);
      ctx.beginPath(); ctx.moveTo(g.nodes[u].x, g.nodes[u].y); ctx.lineTo(g.nodes[v].x, g.nodes[v].y);
      ctx.strokeStyle = hlEdge ? '#fbbf24' : '#2a3a4a'; ctx.lineWidth = hlEdge ? 2.5 : 1; ctx.stroke();
    });
    g.nodes.forEach((nd, i) => {
      ctx.beginPath(); ctx.arc(nd.x, nd.y, 9, 0, Math.PI * 2);
      ctx.fillStyle = hl.includes(i) ? '#fbbf24' : (nd.side === 0 ? '#38bdf8' : '#34d399');
      ctx.fill(); ctx.strokeStyle = '#0e1014'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#000'; ctx.font = 'bold 8px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(i + 1), nd.x, nd.y);
    });
  }, []);

  const gen = useCallback(() => {
    const cv = canvasRef.current; if (!cv) return;
    const newG = buildKstRandom(n, s, t, cv.width, cv.height);
    setGraph(newG);
    setHighlighted([]);
    setFound('—');
    draw(newG, []);
  }, [n, s, t, draw]);

  useEffect(() => { gen(); }, [s, t, n]);

  function highlight() {
    if (!graph) return;
    const half = graph.nodes.filter(nd => nd.side === 0).length;
    const left = graph.nodes.map((nd, i) => nd.side === 0 ? i : -1).filter(i => i >= 0);
    const right = graph.nodes.map((nd, i) => nd.side === 1 ? i : -1).filter(i => i >= 0);
    let hl: number[] = [];
    outer: for (const ls of subsets(left, Math.min(s, left.length))) {
      for (const rs of subsets(right, Math.min(t, right.length))) {
        const all = ls.every(u => rs.every(v => graph.edges.find(e => e[0] === u && e[1] === v)));
        if (all) { hl = [...ls, ...rs]; break outer; }
      }
    }
    setHighlighted(hl);
    setFound(hl.length ? 'Igen' : 'Nem');
    draw(graph, hl);
  }

  const bound = kstBound(n, s, t);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>{'K_{s,t}'} keresés — KST szimulator</span>
        <canvas ref={canvasRef} width={560} height={400} style={{ width: '100%', maxWidth: 560, background: '#0a0f14', borderRadius: '.5rem' }} />
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
          <button className="op-btn" style={{ background: '#38bdf8', color: '#000', borderColor: '#38bdf8' }} onClick={gen}>Új véletlen gráf</button>
          <button className="op-btn" onClick={highlight}>Kiemel</button>
        </div>
      </div>
      <div>
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">KST-tétel (1954)</span>
<div style="font-size:.82rem;color:#c8d8e8;line-height:1.8">
Ha egy \(n\)-csúcsú bipartit gráfban nincs \(K_{s,t}\) (\(s\le t\)), akkor az élek száma legfeljebb
\[\tfrac{1}{2}(t-1)^{1/s}n^{2-1/s}+\tfrac{s-1}{2}n.\]
Különösen: \(ex(n,K_{2,2})\le\tfrac{1}{2}(1+\sqrt{4n-3})\cdot n/2\approx n^{3/2}/2\).
</div>
<div style="background:#040a10;border:1px solid #0a1f2e;border-radius:.35rem;padding:.55rem .75rem;font-size:.72rem;color:#a8d8f0;margin:.5rem 0">
\[ex(n,K_{s,t})\le \tfrac{1}{2}(t-1)^{1/s}n^{2-1/s}+O(n)\]
</div>`} />
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: '#38bdf8' }}>Paraméterek</span>
          {[['s', s, setS, 2, 4], ['t', t, setT, 2, 4], ['n', n, setN, 8, 24]].map(([lbl, val, set, min, max]) => (
            <div key={String(lbl)} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.68rem', color: '#8b949e', marginBottom: '.4rem' }}>
              <span>{String(lbl)} =</span>
              <input type="range" min={Number(min)} max={Number(max)} value={Number(val)} style={{ flex: 1, accentColor: '#38bdf8' }}
                onChange={e => (set as (v: number) => void)(+e.target.value)} />
              <span style={{ color: '#38bdf8', fontWeight: 700, minWidth: 24, textAlign: 'right' }}>{String(val)}</span>
            </div>
          ))}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.4rem', marginTop: '.4rem' }}>
            <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8' }}>{bound}</div>
              <div style={{ fontSize: '.58rem', color: '#8b949e' }}>KST korlát</div>
            </div>
            <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8' }}>{found}</div>
              <div style={{ fontSize: '.58rem', color: '#8b949e' }}>K_s,t-k száma</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TAB 4 — Összehasonlítás táblázat
══════════════════════════════════════════════════════════ */
function TableTab() {
  const ns = [5, 6, 7, 8, 9, 10, 12, 15, 20];
  const ks = [3, 4, 5, 6];
  return (
    <div>
      <div className="info-box" style={{ marginBottom: '.75rem' }}>
        <span className="lbl" style={{ color: '#38bdf8' }}>ex(n, K_k) értékek</span>
        <div style={{ fontSize: '.75rem', color: '#c8d8e8', lineHeight: 1.7, marginBottom: '.5rem' }}>
          A Turán-szám pontos értéke T(n,k−1) élszáma. Az alábbi táblázat kis n értékekre mutatja az ex(n,K_k) és a relatív sűrűséget.
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.72rem' }}>
            <thead>
              <tr>
                <th style={{ background: '#0a1f2e', color: '#38bdf8', padding: '.3rem .5rem', border: '1px solid #21262d', textAlign: 'center' }}>n \ K_k</th>
                {ks.map(k => <th key={k} style={{ background: '#0a1f2e', color: '#38bdf8', padding: '.3rem .5rem', border: '1px solid #21262d', textAlign: 'center' }}>K_{k} (r={k - 1})</th>)}
              </tr>
            </thead>
            <tbody>
              {ns.map(n => (
                <tr key={n}>
                  <td style={{ padding: '.28rem .5rem', border: '1px solid #21262d', textAlign: 'center', color: '#c9d1d9', fontWeight: 700 }}>{n}</td>
                  {ks.map(k => {
                    const ex = turanEdgeCount(n, k - 1);
                    const tot = n * (n - 1) / 2;
                    const pct = (ex / tot * 100).toFixed(0);
                    const g = Math.floor(parseInt(pct) / 100 * 120);
                    return (
                      <td key={k} style={{ padding: '.28rem .5rem', border: '1px solid #21262d', textAlign: 'center', color: `hsl(${g},70%,65%)` }}>
                        {ex} <span style={{ color: '#6b7280', fontSize: '.58rem' }}>({pct}%)</span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">Asszimptotikus sűrűség</span>
<div style="font-size:.82rem;color:#c8d8e8;line-height:1.8">
\[\lim_{n\to\infty}\dfrac{ex(n,K_{r+1})}{\binom{n}{2}}=1-\dfrac{1}{r}\]
K₃-mentes: 50% &nbsp;|&nbsp; K₄-mentes: 67% &nbsp;|&nbsp; K₅-mentes: 75%
</div>`} />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TAB 5 — Bizonyítás (Zykov)
══════════════════════════════════════════════════════════ */
type ProofStep = { msg: string; nodes: number[]; edges: [number, number][] };
const PROOF_STEPS: Record<string, ProofStep> = {
  step0: { msg: 'Kiindulás: egy K₃-mentes gráf, n=8, nem optimális.', nodes: [0, 1, 2, 3, 4, 5, 6, 7], edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0], [0, 4]] },
  step1: { msg: 'Zykov-szimmetrizáció: minden él nélküli pár esetén a kisebb fokút helyettesítjük a nagyobbéval.', nodes: [0, 1, 2, 3, 4, 5, 6, 7], edges: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [1, 5], [1, 6], [2, 7], [3, 7]] },
  step2: { msg: 'A szimmetrizált gráf teljes kétpártit gráf: K_{4,4}.', nodes: [0, 1, 2, 3, 4, 5, 6, 7], edges: [[0, 4], [0, 5], [0, 6], [0, 7], [1, 4], [1, 5], [1, 6], [1, 7], [2, 4], [2, 5], [2, 6], [2, 7], [3, 4], [3, 5], [3, 6], [3, 7]] },
  step3: { msg: 'T(8,2) = K_{4,4}: optimum K₃-mentes esetén. Élek: 16 = ex(8,K₃).', nodes: [0, 1, 2, 3, 4, 5, 6, 7], edges: [[0, 4], [0, 5], [0, 6], [0, 7], [1, 4], [1, 5], [1, 6], [1, 7], [2, 4], [2, 5], [2, 6], [2, 7], [3, 4], [3, 5], [3, 6], [3, 7]] },
};

function ProofCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stepKey, setStepKey] = useState<string>('step0');

  const draw = useCallback((key: string) => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const step = PROOF_STEPS[key];
    const pos = step.nodes.map((_, i) => {
      const side = i < 4 ? 0 : 1;
      return { x: side === 0 ? W * 0.3 : W * 0.7, y: H * 0.15 + (H * 0.7 / 3) * (side === 0 ? i : i - 4), side };
    });
    step.edges.forEach(([u, v]) => {
      ctx.beginPath(); ctx.moveTo(pos[u].x, pos[u].y); ctx.lineTo(pos[v].x, pos[v].y);
      ctx.strokeStyle = key === 'step2' || key === 'step3' ? '#38bdf8' : '#2a3a4a'; ctx.lineWidth = 1.5; ctx.stroke();
    });
    pos.forEach((nd, i) => {
      ctx.beginPath(); ctx.arc(nd.x, nd.y, 11, 0, Math.PI * 2);
      ctx.fillStyle = nd.side === 0 ? '#38bdf8' : '#34d399'; ctx.fill();
      ctx.strokeStyle = '#0e1014'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#000'; ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(i + 1), nd.x, nd.y);
    });
    ctx.fillStyle = '#8b949e'; ctx.font = '12px monospace'; ctx.textAlign = 'center';
    ctx.fillText(`|E| = ${step.edges.length}`, W / 2, H - 20);
  }, []);

  useEffect(() => { draw(stepKey); }, [stepKey, draw]);

  const steps: [string, string][] = [['step0', 'Kezdeti gráf'], ['step1', 'Szimmetrizálás'], ['step2', 'Teljes r-pártit'], ['step3', 'T(n,r)']];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Interaktív eljárás</span>
        <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
          {steps.map(([k, lbl]) => (
            <button key={k} className={`op-btn${stepKey === k ? ' is-active' : ''}`} onClick={() => setStepKey(k)}>{lbl}</button>
          ))}
        </div>
        <canvas ref={canvasRef} width={560} height={400} style={{ width: '100%', maxWidth: 560, background: '#0a0f14', borderRadius: '.5rem' }} />
        <div className="info-box" style={{ marginTop: '.5rem', fontSize: '.75rem', color: '#c8d8e8' }}>{PROOF_STEPS[stepKey].msg}</div>
      </div>
      <div>
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">Turán-tétel bizonyítása (Zykov-módszer)</span>
<div style="font-size:.79rem;color:#c8d8e8;line-height:1.8">
<b style="color:#38bdf8">Lépés 1 — Zykov-szimmetrizáció:</b> Ha \(u,v\) nem szomszédos, cseréljük a kisebb fokú csúcsot a nagyobb másolatára. Ez nem csökkenti az élszámot és nem hoz létre \(K_{r+1}\)-t.<br><br>
<b style="color:#38bdf8">Lépés 2 — Teljes r-pártit gráf:</b> A szimmetrizált gráf teljes többpártit gráf. Maximálni akarjuk az élek számát \(K_{r+1}\) nélkül, tehát legfeljebb \(r\) rész van.<br><br>
<b style="color:#38bdf8">Lépés 3 — Egyenlő részméret:</b> Ha két rész mérete különbözik (\(a&lt;b\)), mozgassunk át egy csúcsot: \(a(b-1)+(b-1)(n-a-b+1)&gt;ab+(b-1)(n-a-b)\) ha \(a&lt;b\). Az egyenlő részek maximálják az élszámot.<br><br>
<b style="color:#38bdf8">Következmény:</b> Az optimum \(T(n,r)\), amelynek élszáma \(\left(1-\tfrac1r\right)\tfrac{n^2}{2}-O(n)\).
</div>`} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   Root component
══════════════════════════════════════════════════════════ */
const TABS: Tab[] = [
  { id: 'turan', label: 'Turán', content: <TuranCanvas /> },
  { id: 'tgraph', label: 'T(n,r)', content: <TGraphCanvas /> },
  { id: 'kst', label: 'KST', content: <KstCanvas /> },
  { id: 'table', label: 'Táblázat', content: <TableTab /> },
  { id: 'proof', label: 'Bizonyítás', content: <ProofCanvas /> },
];

export default function DimatCh20() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika — 20. fejezet</p>
      <h1 className="ila__title">Extremális gráfok</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
