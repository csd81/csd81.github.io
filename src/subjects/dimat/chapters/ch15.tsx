import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// ─── shared graph types ───────────────────────────────────────────
interface GNode { x: number; y: number; l: string; }
interface GEdge { u: number; v: number; w: number; }
interface GraphData { nodes: GNode[]; edges: GEdge[]; }

const NODE_R = 15;

// ─── shared drawing util ──────────────────────────────────────────
function drawGraph(
  canvas: HTMLCanvasElement,
  nodes: GNode[],
  edges: GEdge[],
  nodeColors: (string | null)[] | null,
  edgeColors: (string | null)[] | null,
  showWeights = true,
) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
  edges.forEach((e, i) => {
    const a = nodes[e.u], b = nodes[e.v];
    const col = edgeColors?.[i] ?? '#2a3a50';
    ctx.strokeStyle = col;
    ctx.lineWidth = col !== '#2a3a50' ? 2.5 : 1.5;
    ctx.setLineDash([]);
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    if (showWeights && e.w !== undefined) {
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      ctx.fillStyle = '#f97316'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center';
      ctx.fillText(String(e.w), mx, my - 5);
    }
  });
  nodes.forEach((n, i) => {
    const col = nodeColors?.[i] ?? '#1e3a5f';
    ctx.beginPath(); ctx.arc(n.x, n.y, NODE_R, 0, 2 * Math.PI);
    ctx.fillStyle = col; ctx.fill();
    ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(n.l || String(i), n.x, n.y);
  });
}

// ─── Union-Find ───────────────────────────────────────────────────
interface UF { parent: number[]; rank: number[]; }
function makeUF(n: number): UF { return { parent: Array.from({ length: n }, (_, i) => i), rank: Array(n).fill(0) }; }
function find(uf: UF, x: number): number { if (uf.parent[x] !== x) uf.parent[x] = find(uf, uf.parent[x]); return uf.parent[x]; }
function union(uf: UF, a: number, b: number): boolean {
  const ra = find(uf, a), rb = find(uf, b);
  if (ra === rb) return false;
  if (uf.rank[ra] < uf.rank[rb]) uf.parent[ra] = rb;
  else if (uf.rank[ra] > uf.rank[rb]) uf.parent[rb] = ra;
  else { uf.parent[rb] = ra; uf.rank[ra]++; }
  return true;
}
function buildAdj(n: number, edges: GEdge[]) {
  const adj: { v: number; w: number; i: number }[][] = Array.from({ length: n }, () => []);
  edges.forEach((e, i) => { adj[e.u].push({ v: e.v, w: e.w, i }); adj[e.v].push({ v: e.u, w: e.w, i }); });
  return adj;
}

// ─── Kruskal solve ────────────────────────────────────────────────
function kruskalSolve(nodes: GNode[], edges: GEdge[]): { mstEdges: number[]; w: number } {
  const sorted = edges.map((e, i) => ({ ...e, i })).sort((a, b) => a.w - b.w);
  const uf = makeUF(nodes.length);
  const mstEdges: number[] = []; let w = 0;
  for (const e of sorted) { if (union(uf, e.u, e.v)) { mstEdges.push(e.i); w += e.w; } }
  return { mstEdges, w };
}

// ─── Graph presets ────────────────────────────────────────────────
const CLASSIC_PRESET: GraphData = {
  nodes: [{ x: 80, y: 150, l: 'A' }, { x: 200, y: 60, l: 'B' }, { x: 200, y: 250, l: 'C' },
          { x: 340, y: 60, l: 'D' }, { x: 340, y: 250, l: 'E' }, { x: 460, y: 150, l: 'F' }, { x: 240, y: 160, l: 'G' }],
  edges: [{ u: 0, v: 1, w: 7 }, { u: 0, v: 2, w: 5 }, { u: 1, v: 2, w: 9 }, { u: 1, v: 3, w: 7 },
          { u: 2, v: 4, w: 8 }, { u: 3, v: 4, w: 5 }, { u: 3, v: 5, w: 8 }, { u: 4, v: 5, w: 9 },
          { u: 2, v: 6, w: 6 }, { u: 1, v: 6, w: 4 }, { u: 4, v: 6, w: 4 }],
};
const K5_PRESET: GraphData = {
  nodes: [{ x: 240, y: 50, l: 'A' }, { x: 390, y: 155, l: 'B' }, { x: 330, y: 300, l: 'C' },
          { x: 150, y: 300, l: 'D' }, { x: 90, y: 155, l: 'E' }],
  edges: [{ u: 0, v: 1, w: 2 }, { u: 0, v: 2, w: 3 }, { u: 0, v: 3, w: 6 }, { u: 0, v: 4, w: 5 },
          { u: 1, v: 2, w: 4 }, { u: 1, v: 3, w: 7 }, { u: 1, v: 4, w: 8 }, { u: 2, v: 3, w: 3 },
          { u: 2, v: 4, w: 5 }, { u: 3, v: 4, w: 2 }],
};
const GRID4_PRESET: GraphData = {
  nodes: [{ x: 80, y: 80, l: 'A' }, { x: 180, y: 80, l: 'B' }, { x: 280, y: 80, l: 'C' }, { x: 380, y: 80, l: 'D' },
          { x: 80, y: 220, l: 'E' }, { x: 180, y: 220, l: 'F' }, { x: 280, y: 220, l: 'G' }, { x: 380, y: 220, l: 'H' }],
  edges: [{ u: 0, v: 1, w: 3 }, { u: 1, v: 2, w: 1 }, { u: 2, v: 3, w: 4 }, { u: 4, v: 5, w: 2 },
          { u: 5, v: 6, w: 5 }, { u: 6, v: 7, w: 3 }, { u: 0, v: 4, w: 2 }, { u: 1, v: 5, w: 3 },
          { u: 2, v: 6, w: 1 }, { u: 3, v: 7, w: 4 }, { u: 0, v: 5, w: 5 }, { u: 1, v: 6, w: 6 }],
};
const SPARSE_PRESET: GraphData = {
  nodes: [{ x: 80, y: 160, l: 'A' }, { x: 200, y: 70, l: 'B' }, { x: 200, y: 260, l: 'C' },
          { x: 350, y: 70, l: 'D' }, { x: 350, y: 260, l: 'E' }, { x: 460, y: 160, l: 'F' }],
  edges: [{ u: 0, v: 1, w: 6 }, { u: 0, v: 2, w: 1 }, { u: 1, v: 3, w: 5 }, { u: 2, v: 4, w: 4 },
          { u: 3, v: 4, w: 2 }, { u: 3, v: 5, w: 3 }, { u: 4, v: 5, w: 7 }, { u: 1, v: 2, w: 9 }],
};
const SPAN_K4: GraphData = {
  nodes: [{ x: 200, y: 60, l: 'A' }, { x: 360, y: 60, l: 'B' }, { x: 360, y: 240, l: 'C' }, { x: 200, y: 240, l: 'D' }],
  edges: [{ u: 0, v: 1, w: 1 }, { u: 1, v: 2, w: 2 }, { u: 2, v: 3, w: 3 }, { u: 3, v: 0, w: 4 }, { u: 0, v: 2, w: 5 }, { u: 1, v: 3, w: 6 }],
};
const SPAN_WHEEL: GraphData = {
  nodes: [{ x: 240, y: 150, l: 'C' }, { x: 240, y: 50, l: 'A' }, { x: 370, y: 110, l: 'B' },
          { x: 370, y: 210, l: 'D' }, { x: 240, y: 270, l: 'E' }, { x: 110, y: 210, l: 'F' }, { x: 110, y: 110, l: 'G' }],
  edges: [{ u: 0, v: 1, w: 3 }, { u: 0, v: 2, w: 2 }, { u: 0, v: 3, w: 4 }, { u: 0, v: 4, w: 1 }, { u: 0, v: 5, w: 5 }, { u: 0, v: 6, w: 3 },
          { u: 1, v: 2, w: 6 }, { u: 2, v: 3, w: 2 }, { u: 3, v: 4, w: 5 }, { u: 4, v: 5, w: 4 }, { u: 5, v: 6, w: 3 }, { u: 6, v: 1, w: 7 }],
};
const SPAN_GRID: GraphData = {
  nodes: [{ x: 80, y: 80, l: 'A' }, { x: 220, y: 80, l: 'B' }, { x: 360, y: 80, l: 'C' },
          { x: 80, y: 210, l: 'D' }, { x: 220, y: 210, l: 'E' }, { x: 360, y: 210, l: 'F' },
          { x: 80, y: 300, l: 'G' }, { x: 220, y: 300, l: 'H' }, { x: 360, y: 300, l: 'I' }],
  edges: [{ u: 0, v: 1, w: 4 }, { u: 1, v: 2, w: 2 }, { u: 3, v: 4, w: 3 }, { u: 4, v: 5, w: 5 }, { u: 6, v: 7, w: 1 }, { u: 7, v: 8, w: 6 },
          { u: 0, v: 3, w: 2 }, { u: 1, v: 4, w: 7 }, { u: 2, v: 5, w: 3 }, { u: 3, v: 6, w: 4 }, { u: 4, v: 7, w: 2 }, { u: 5, v: 8, w: 5 }],
};

const SPAN_PRESETS: Record<string, GraphData> = { k4: SPAN_K4, wheel: SPAN_WHEEL, grid: SPAN_GRID };
const KRUSKAL_PRESETS: Record<string, GraphData> = { classic: CLASSIC_PRESET, k5: K5_PRESET, grid4: GRID4_PRESET, sparse: SPARSE_PRESET };
const PRIM_PRESETS: Record<string, GraphData> = { classic: CLASSIC_PRESET, k5: K5_PRESET, grid4: GRID4_PRESET };

// ─── TSP cities ───────────────────────────────────────────────────
const TSP_CITIES: Record<string, GNode[]> = {
  cities6: [{ x: 120, y: 80, l: 'A' }, { x: 300, y: 50, l: 'B' }, { x: 430, y: 140, l: 'C' },
             { x: 400, y: 270, l: 'D' }, { x: 200, y: 280, l: 'E' }, { x: 80, y: 200, l: 'F' }],
  cities8: [{ x: 100, y: 80, l: 'A' }, { x: 250, y: 40, l: 'B' }, { x: 400, y: 70, l: 'C' },
             { x: 460, y: 190, l: 'D' }, { x: 420, y: 280, l: 'E' }, { x: 280, y: 310, l: 'F' },
             { x: 120, y: 290, l: 'G' }, { x: 60, y: 180, l: 'H' }],
  cities10: [{ x: 200, y: 50, l: 'A' }, { x: 340, y: 50, l: 'B' }, { x: 440, y: 120, l: 'C' },
              { x: 450, y: 230, l: 'D' }, { x: 380, y: 300, l: 'E' }, { x: 260, y: 310, l: 'F' },
              { x: 130, y: 290, l: 'G' }, { x: 60, y: 200, l: 'H' }, { x: 80, y: 110, l: 'I' }, { x: 230, y: 170, l: 'J' }],
};

function buildTSPEdges(nodes: GNode[]): GEdge[] {
  const edges: GEdge[] = [];
  for (let i = 0; i < nodes.length; i++)
    for (let j = i + 1; j < nodes.length; j++)
      edges.push({ u: i, v: j, w: Math.round(Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)) });
  return edges;
}
function tourCost(tour: number[], nodes: GNode[]): number {
  let w = 0;
  for (let i = 0; i < tour.length; i++)
    w += Math.round(Math.hypot(nodes[tour[i]].x - nodes[tour[(i + 1) % tour.length]].x,
                               nodes[tour[i]].y - nodes[tour[(i + 1) % tour.length]].y));
  return w;
}
function mstTour(nodes: GNode[], mstEdgeIdxs: number[], edges: GEdge[]): number[] {
  const n = nodes.length;
  const adj: number[][] = Array.from({ length: n }, () => []);
  mstEdgeIdxs.forEach(i => { adj[edges[i].u].push(edges[i].v); adj[edges[i].v].push(edges[i].u); });
  const visited = Array(n).fill(false), order: number[] = [];
  function dfs(u: number) { visited[u] = true; order.push(u); adj[u].forEach(v => { if (!visited[v]) dfs(v); }); }
  dfs(0);
  return order;
}
function bruteForceTSP(nodes: GNode[]): { tour: number[]; cost: number } | null {
  if (nodes.length > 10) return null;
  const n = nodes.length;
  let best = Infinity, bestTour: number[] = [];
  const perm = Array.from({ length: n - 1 }, (_, i) => i + 1);
  function permute(arr: number[], l: number) {
    if (l === arr.length - 1) {
      const tour = [0, ...arr]; const c = tourCost(tour, nodes);
      if (c < best) { best = c; bestTour = [...tour]; } return;
    }
    for (let i = l; i < arr.length; i++) {
      [arr[l], arr[i]] = [arr[i], arr[l]]; permute(arr, l + 1); [arr[l], arr[i]] = [arr[i], arr[l]];
    }
  }
  permute(perm, 0);
  return { tour: bestTour, cost: best };
}

// ─── Kirchhoff det ────────────────────────────────────────────────
function det(M: number[][]): number {
  const n = M.length;
  if (n === 0) return 1; if (n === 1) return M[0][0];
  if (n === 2) return M[0][0] * M[1][1] - M[0][1] * M[1][0];
  let d = 0;
  for (let j = 0; j < n; j++) {
    const sub = M.slice(1).map(r => r.filter((_, c) => c !== j));
    d += Math.pow(-1, j) * M[0][j] * det(sub);
  }
  return d;
}

// ═══ TAB 1: Feszítőfák ═══════════════════════════════════════════
function SpanTab() {
  const [preset, setPreset] = useState<'k4' | 'wheel' | 'grid'>('k4');
  const [mode, setMode] = useState<'none' | 'random' | 'mst'>('none');
  const [stats, setStats] = useState('Válassz nézetet fentről.');
  const ref = useRef<HTMLCanvasElement>(null);

  const draw = useCallback((data: GraphData, mst: number[] | null) => {
    const cv = ref.current; if (!cv) return;
    const edgeColors = data.edges.map((_, i) => (mst ? (mst.includes(i) ? '#4ade80' : '#2a3a50') : null));
    drawGraph(cv, data.nodes, data.edges, null, edgeColors, true);
  }, []);

  useEffect(() => {
    const data = SPAN_PRESETS[preset];
    if (mode === 'random') {
      const shuffled = [...data.edges].sort(() => Math.random() - 0.5);
      const uf = makeUF(data.nodes.length); const mst: number[] = [];
      shuffled.forEach(e => { const i = data.edges.indexOf(e); if (union(uf, e.u, e.v)) mst.push(i); });
      const w = mst.reduce((s, i) => s + data.edges[i].w, 0);
      draw(data, mst);
      setStats(`Feszítőfa: ${mst.length} él · Összsúly: ${w} (Nem feltétlenül minimális)`);
    } else if (mode === 'mst') {
      const { mstEdges, w } = kruskalSolve(data.nodes, data.edges);
      draw(data, mstEdges);
      setStats(`MST: ${mstEdges.length} él · Minimum összsúly: ${w}`);
    } else {
      draw(data, null);
      setStats('Válassz nézetet fentről.');
    }
  }, [preset, mode, draw]);

  const btnStyle = (active: boolean): React.CSSProperties => ({
    padding: '.3rem .7rem', borderRadius: 5, fontSize: '.78rem', cursor: 'pointer',
    background: active ? '#38bdf8' : '#1a2233', color: active ? '#000' : '#8ba3bc',
    border: `1px solid ${active ? '#38bdf8' : '#2a3a50'}`, fontWeight: active ? 600 : 400,
  });

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Feszítőfa — mi ez, és miért fontos?</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
          {(['k4', 'wheel', 'grid'] as const).map(p => (
            <button key={p} style={btnStyle(preset === p)} onClick={() => { setPreset(p); setMode('none'); }}>
              {p === 'k4' ? 'K₄ teljes gráf' : p === 'wheel' ? 'Kerék W₅' : 'Rács 3×3'}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <canvas ref={ref} width={480} height={300} style={{ width: '100%', maxWidth: 480, borderRadius: '.5rem', display: 'block' }} />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '.78rem', color: '#8ba3bc', marginTop: '.4rem' }}>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#2a3a50', marginRight: 4 }} />Nem feszítőfa-él</span>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#4ade80', marginRight: 4 }} />Feszítőfa élei</span>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
              <button style={btnStyle(false)} onClick={() => setMode('random')}>Véletlen feszítőfa</button>
              <button style={btnStyle(false)} onClick={() => setMode('mst')}>MST megmutatása</button>
            </div>
            <div style={{ fontSize: '.83rem', color: '#c8d8e8', lineHeight: 1.8 }}>{stats}</div>
            <RichTex html={String.raw`<div style="font-size:.83rem;color:#c8d8e8;line-height:1.75;margin-top:.7rem">
              <b style="color:#38bdf8">Feszítőfa:</b> tartalmazza az összes csúcsot, összefüggő, körmentes.<br>
              \(n\) csúcsú összefüggő gráfnak pontosan \(n-1\) élű feszítőfái vannak.<br>
              <b style="color:#38bdf8">MST:</b> minimális összsúlyú feszítőfa.</div>`} />
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem', marginTop: '.75rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Alkalmazások</span>
          <div style={{ fontSize: '.83rem', color: '#c8d8e8', lineHeight: 1.8, marginTop: '.4rem' }}>
            <b style={{ color: '#38bdf8' }}>Hálózattervezés:</b> villany-, gáz-, internet-hálózat minimális kiépítési költsége<br />
            <b style={{ color: '#38bdf8' }}>Klaszterezés:</b> MST-él törlése → 2 klaszter (single-linkage clustering)<br />
            <b style={{ color: '#38bdf8' }}>TSP közelítés:</b> MST alapú 2-approximáció (következő tab)<br />
            <b style={{ color: '#38bdf8' }}>Képfeldolgozás:</b> minimális feszítőfa szegmentáció
          </div>
        </div>
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">Vágási tulajdonság (Cut property)</span>
<div style="font-size:.83rem;color:#c8d8e8;line-height:1.8;margin-top:.4rem">
Bármely G vágásban (csúcshalmaz kettéosztása \(S\) és \(V\setminus S\)) a <b>legkisebb súlyú keresztező él</b> biztosan benne van valamelyik MST-ben.<br><br>
Ebből következik mind a Kruskal, mind a Prim algoritmus helyessége.</div>`} />
      </div>
    </div>
  );
}

// ═══ TAB 2: Kruskal ══════════════════════════════════════════════
interface KruskalState {
  sorted: (GEdge & { orig: number })[];
  idx: number; uf: UF;
  mst: number[]; rejected: number[];
  current: number; done: boolean;
}

function KruskalTab() {
  const [preset, setPreset] = useState<'classic' | 'k5' | 'grid4' | 'sparse'>('classic');
  const [state, setState] = useState<KruskalState | null>(null);
  const [log, setLog] = useState<{ msg: string; cls: string }[]>([]);
  const [status, setStatus] = useState('Kattints Lépés-re.');
  const [autoActive, setAutoActive] = useState(false);
  const ref = useRef<HTMLCanvasElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const data = KRUSKAL_PRESETS[preset];

  function doReset(d: GraphData) {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; setAutoActive(false); }
    const sorted = [...d.edges].map((e, i) => ({ ...e, orig: i })).sort((a, b) => a.w - b.w);
    const ns: KruskalState = { sorted, idx: 0, uf: makeUF(d.nodes.length), mst: [], rejected: [], current: -1, done: false };
    setState(ns);
    setLog([]);
    setStatus('Kattints Lépés-re.');
    const cv = ref.current; if (cv) drawGraph(cv, d.nodes, d.edges, null, null, true);
  }

  function render(s: KruskalState, d: GraphData) {
    const cv = ref.current; if (!cv) return;
    const ec = d.edges.map((_, i) => {
      if (i === s.current) return '#f97316';
      if (s.mst.includes(i)) return '#4ade80';
      if (s.rejected.includes(i)) return '#ef4444';
      return '#2a3a50';
    });
    drawGraph(cv, d.nodes, d.edges, null, ec, true);
  }

  function doStep(s: KruskalState, d: GraphData): KruskalState | null {
    if (s.done) return null;
    if (s.idx >= s.sorted.length || s.mst.length >= d.nodes.length - 1) {
      const ns = { ...s, done: true };
      const w = s.mst.reduce((acc, i) => acc + d.edges[i].w, 0);
      setLog(l => [...l, { msg: `MST kész! Összsúly = ${w}`, cls: 'hi' }]);
      setStatus(`Kész! MST összsúly = ${w}`);
      return ns;
    }
    const e = s.sorted[s.idx];
    const uf = { parent: [...s.uf.parent], rank: [...s.uf.rank] };
    const accepted = union(uf, e.u, e.v);
    const mst = accepted ? [...s.mst, e.orig] : s.mst;
    const rejected = !accepted ? [...s.rejected, e.orig] : s.rejected;
    if (accepted) setLog(l => [...l, { msg: `✓ Felvéve: ${d.nodes[e.u].l}—${d.nodes[e.v].l} (w=${e.w})`, cls: 'ok' }]);
    else setLog(l => [...l, { msg: `✗ Elvetve (kör): ${d.nodes[e.u].l}—${d.nodes[e.v].l} (w=${e.w})`, cls: 'skip' }]);
    const done = mst.length >= d.nodes.length - 1;
    const ns: KruskalState = { ...s, uf, mst, rejected, current: e.orig, idx: s.idx + 1, done };
    if (done) {
      const w = mst.reduce((acc, i) => acc + d.edges[i].w, 0);
      setLog(l => [...l, { msg: `MST kész! Összsúly = ${w}`, cls: 'hi' }]);
      setStatus(`Kész! MST összsúly = ${w}`);
    }
    return ns;
  }

  useEffect(() => { doReset(data); }, [preset]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (state) render(state, data);
  }, [state]); // eslint-disable-line react-hooks/exhaustive-deps

  function step() {
    setState(s => { if (!s) return s; const ns = doStep(s, data); return ns ?? s; });
  }
  function finish() {
    setState(s => {
      if (!s) return s; let cur = s;
      while (!cur.done) { const ns = doStep(cur, data); if (!ns) break; cur = ns; }
      return cur;
    });
  }
  function toggleAuto() {
    if (autoActive) { if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; } setAutoActive(false); }
    else {
      setAutoActive(true);
      autoRef.current = setInterval(() => {
        setState(s => {
          if (!s || s.done) { if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; } setAutoActive(false); return s; }
          const ns = doStep(s, data); return ns ?? s;
        });
      }, 700);
    }
  }

  const comps: Record<number, string[]> = {};
  if (state) {
    const uf = state.uf;
    data.nodes.forEach((n, i) => { const r = find({ parent: [...uf.parent], rank: [...uf.rank] }, i); (comps[r] = comps[r] || []).push(n.l); });
  }

  const btnStyle = (active: boolean): React.CSSProperties => ({
    padding: '.25rem .65rem', fontSize: '.78rem', borderRadius: 5, cursor: 'pointer',
    background: active ? '#38bdf8' : 'transparent', color: active ? '#000' : '#38bdf8',
    border: '1px solid #38bdf8', fontWeight: active ? 600 : 400,
  });
  const accentBtn: React.CSSProperties = { padding: '.25rem .65rem', fontSize: '.78rem', borderRadius: 5, cursor: 'pointer', background: '#38bdf8', color: '#000', border: 'none', fontWeight: 600 };
  const presetBtn = (p: string): React.CSSProperties => ({
    padding: '.3rem .7rem', borderRadius: 5, fontSize: '.78rem', cursor: 'pointer',
    background: preset === p ? '#38bdf8' : '#1a2233', color: preset === p ? '#000' : '#8ba3bc',
    border: `1px solid ${preset === p ? '#38bdf8' : '#2a3a50'}`, fontWeight: preset === p ? 600 : 400,
  });

  const logRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight; }, [log]);

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Kruskal algoritmusa — élek rendezése, Union-Find</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
          {(['classic', 'k5', 'grid4', 'sparse'] as const).map(p => (
            <button key={p} style={presetBtn(p)} onClick={() => setPreset(p)}>
              {p === 'classic' ? 'Klasszikus (7 csúcs)' : p === 'k5' ? 'K₅ teljes' : p === 'grid4' ? 'Rács 2×4' : 'Ritka'}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <canvas ref={ref} width={480} height={300} style={{ width: '100%', maxWidth: 480, borderRadius: '.5rem', display: 'block' }} />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '.78rem', color: '#8ba3bc', marginTop: '.4rem' }}>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#4ade80', marginRight: 4 }} />MST-él</span>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#ef4444', marginRight: 4 }} />Kör → elvetve</span>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#f97316', marginRight: 4 }} />Aktuális</span>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
              <button style={accentBtn} onClick={() => doReset(data)}>↺ Újra</button>
              <button style={btnStyle(false)} onClick={step}>Lépés →</button>
              <button style={btnStyle(autoActive)} onClick={toggleAuto}>{autoActive ? '⏸ Stop' : '▶ Auto'}</button>
              <button style={btnStyle(false)} onClick={finish}>⏩ Kész</button>
            </div>
            <div style={{ fontSize: '.8rem', color: '#8ba3bc', marginBottom: '.3rem' }}>{status}</div>
            <div style={{ fontSize: '.75rem', color: '#8ba3bc', fontWeight: 600, marginBottom: '.2rem' }}>Élek sorrendben:</div>
            <div style={{ marginBottom: '.5rem', display: 'flex', flexWrap: 'wrap', gap: '.15rem' }}>
              {state?.sorted.map((e, i) => {
                let bg = '#0a1520', border = '#1e2a38', color = '#8ba3bc';
                if (state.mst.includes(e.orig)) { bg = '#0a1f10'; border = '#4ade80'; color = '#4ade80'; }
                else if (state.rejected.includes(e.orig)) { bg = '#1f0a0a'; border = '#ef4444'; color = '#ef4444'; }
                else if (i === state.idx) { bg = '#1f0f0a'; border = '#f97316'; color = '#f97316'; }
                return (
                  <span key={i} style={{ display: 'inline-block', background: bg, border: `1px solid ${border}`, borderRadius: 5, padding: '.2rem .5rem', fontSize: '.75rem', fontFamily: 'monospace', color }}>
                    {data.nodes[e.u].l}—{data.nodes[e.v].l}:{e.w}
                  </span>
                );
              })}
            </div>
            <div ref={logRef} style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: 6, padding: '.7rem', fontSize: '.75rem', fontFamily: 'monospace', color: '#8ba3bc', height: 110, overflowY: 'auto' }}>
              {log.map((l, i) => (
                <div key={i} style={{ marginBottom: 2, color: l.cls === 'hi' ? '#38bdf8' : l.cls === 'ok' ? '#4ade80' : l.cls === 'skip' ? '#f97316' : '#8ba3bc' }}>{l.msg}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem', marginTop: '.75rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Komponensek (Union-Find)</span>
          <div style={{ fontSize: '.8rem', fontFamily: 'monospace', color: '#c8d8e8', lineHeight: 1.7, marginTop: '.4rem' }}>
            {state ? Object.values(comps).map((c, i) => <span key={i}>{`{${c.join(',')}}`}&nbsp;&nbsp;</span>) : '—'}
          </div>
        </div>
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">Az algoritmus</span>
<div style="font-size:.83rem;color:#c8d8e8;line-height:1.75;margin-top:.4rem">
1. Rendezd az összes élt növekvő súly szerint.<br>
2. Vedd sorban az éleket: ha nem keletkezik kör, add az MST-hez.<br>
3. Megáll, ha \(n-1\) élt vettünk fel.<br><br>
<b style="color:#38bdf8">Kördetekció:</b> Union-Find (diszjunkt halmaz) adatszerkezet.<br>
Futásidő: \(\mathcal{O}(m\log m)\) (rendezés dominál).</div>`} />
      </div>
    </div>
  );
}

// ═══ TAB 3: Prim ═════════════════════════════════════════════════
interface PrimState {
  inMST: boolean[];
  key: number[];
  parent: number[];
  mstEdges: number[];
  src: number;
  done: boolean;
}

function PrimTab() {
  const [preset, setPreset] = useState<'classic' | 'k5' | 'grid4'>('classic');
  const [src, setSrc] = useState(0);
  const [state, setState] = useState<PrimState | null>(null);
  const [log, setLog] = useState<{ msg: string; cls: string }[]>([]);
  const [status, setStatus] = useState('Kattints Lépés-re.');
  const [autoActive, setAutoActive] = useState(false);
  const ref = useRef<HTMLCanvasElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const data = PRIM_PRESETS[preset];

  function doReset(d: GraphData, s: number) {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; setAutoActive(false); }
    const n = d.nodes.length;
    const ns: PrimState = { inMST: Array(n).fill(false), key: Array(n).fill(1e9), parent: Array(n).fill(-1), mstEdges: [], src: s, done: false };
    ns.key[s] = 0;
    setState(ns); setLog([]); setStatus('Kattints Lépés-re.');
    const cv = ref.current; if (cv) drawGraph(cv, d.nodes, d.edges, null, null, true);
  }

  function render(s: PrimState, d: GraphData) {
    const cv = ref.current; if (!cv) return;
    const nodeColors = d.nodes.map((_, i) => s.inMST[i] ? '#166534' : '#1e3a5f');
    const edgeColors = d.edges.map((_, i) => s.mstEdges.includes(i) ? '#4ade80' : '#2a3a50');
    drawGraph(cv, d.nodes, d.edges, nodeColors, edgeColors, true);
  }

  function doStep(s: PrimState, d: GraphData): PrimState | null {
    if (s.done) return null;
    const INF = 1e9, n = d.nodes.length;
    let u = -1, best = INF;
    s.key.forEach((k, i) => { if (!s.inMST[i] && k < best) { best = k; u = i; } });
    if (u === -1) { const ns = { ...s, done: true }; return ns; }
    const inMST = [...s.inMST]; inMST[u] = true;
    const mstEdges = [...s.mstEdges];
    if (s.parent[u] !== -1) {
      const ei = d.edges.findIndex(e => (e.u === u && e.v === s.parent[u]) || (e.v === u && e.u === s.parent[u]));
      if (ei !== -1) mstEdges.push(ei);
    }
    setLog(l => [...l, { msg: `Hozzáadva: ${d.nodes[u].l} (key=${best})`, cls: 'hi' }]);
    const key = [...s.key], parent = [...s.parent];
    const adj = buildAdj(n, d.edges);
    adj[u].forEach(({ v, w }) => { if (!inMST[v] && w < key[v]) { key[v] = w; parent[v] = u; setLog(l => [...l, { msg: `  Frissítve: key[${d.nodes[v].l}] = ${w}`, cls: '' }]); } });
    const done = mstEdges.length >= n - 1;
    if (done) {
      const w = mstEdges.reduce((acc, i) => acc + d.edges[i].w, 0);
      setLog(l => [...l, { msg: `MST kész! Összsúly = ${w}`, cls: 'hi' }]);
      setStatus(`Kész! MST összsúly = ${w}`);
    }
    return { ...s, inMST, key, parent, mstEdges, done };
  }

  useEffect(() => { doReset(data, src); }, [preset, src]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { if (state) render(state, data); }, [state]); // eslint-disable-line react-hooks/exhaustive-deps

  function step() { setState(s => { if (!s) return s; return doStep(s, data) ?? s; }); }
  function finish() {
    setState(s => {
      if (!s) return s; let cur = s;
      while (!cur.done) { const ns = doStep(cur, data); if (!ns) break; cur = ns; }
      return cur;
    });
  }
  function toggleAuto() {
    if (autoActive) { if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; } setAutoActive(false); }
    else {
      setAutoActive(true);
      autoRef.current = setInterval(() => {
        setState(s => {
          if (!s || s.done) { if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; } setAutoActive(false); return s; }
          return doStep(s, data) ?? s;
        });
      }, 700);
    }
  }

  const btnStyle = (active: boolean): React.CSSProperties => ({
    padding: '.25rem .65rem', fontSize: '.78rem', borderRadius: 5, cursor: 'pointer',
    background: active ? '#38bdf8' : 'transparent', color: active ? '#000' : '#38bdf8',
    border: '1px solid #38bdf8', fontWeight: active ? 600 : 400,
  });
  const accentBtn: React.CSSProperties = { padding: '.25rem .65rem', fontSize: '.78rem', borderRadius: 5, cursor: 'pointer', background: '#38bdf8', color: '#000', border: 'none', fontWeight: 600 };
  const presetBtn = (p: string): React.CSSProperties => ({
    padding: '.3rem .7rem', borderRadius: 5, fontSize: '.78rem', cursor: 'pointer',
    background: preset === p ? '#38bdf8' : '#1a2233', color: preset === p ? '#000' : '#8ba3bc',
    border: `1px solid ${preset === p ? '#38bdf8' : '#2a3a50'}`, fontWeight: preset === p ? 600 : 400,
  });
  const logRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight; }, [log]);

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Prim algoritmusa — csúcsok hozzáadása</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
          {(['classic', 'k5', 'grid4'] as const).map(p => (
            <button key={p} style={presetBtn(p)} onClick={() => setPreset(p)}>
              {p === 'classic' ? 'Klasszikus (7 csúcs)' : p === 'k5' ? 'K₅ teljes' : 'Rács 2×4'}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '.5rem', fontSize: '.82rem', color: '#8ba3bc' }}>
          <span>Forrás:</span>
          <select value={src} onChange={e => setSrc(+e.target.value)}
            style={{ background: '#0a0f14', color: '#fff', border: '1px solid #1e2a38', borderRadius: 4, padding: '.2rem .5rem' }}>
            {data.nodes.map((n, i) => <option key={i} value={i}>{n.l}</option>)}
          </select>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <canvas ref={ref} width={480} height={300} style={{ width: '100%', maxWidth: 480, borderRadius: '.5rem', display: 'block' }} />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '.78rem', color: '#8ba3bc', marginTop: '.4rem' }}>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#4ade80', marginRight: 4 }} />MST-csúcs</span>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#1e3a5f', marginRight: 4 }} />Még nem érintett</span>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
              <button style={accentBtn} onClick={() => doReset(data, src)}>↺ Újra</button>
              <button style={btnStyle(false)} onClick={step}>Lépés →</button>
              <button style={btnStyle(autoActive)} onClick={toggleAuto}>{autoActive ? '⏸ Stop' : '▶ Auto'}</button>
              <button style={btnStyle(false)} onClick={finish}>⏩ Kész</button>
            </div>
            <div style={{ fontSize: '.8rem', color: '#8ba3bc', marginBottom: '.3rem' }}>{status}</div>
            <div style={{ fontSize: '.75rem', color: '#8ba3bc', fontWeight: 600, marginBottom: '.2rem' }}>key[] — legkisebb él a fához:</div>
            <div style={{ display: 'flex', gap: '.3rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
              {state && data.nodes.map((n, i) => {
                const k = state.key[i];
                const sel = state.inMST[i];
                return (
                  <span key={i} style={{ display: 'inline-block', background: '#0a1520', border: `1px solid ${sel ? '#4ade80' : '#1e2a38'}`, borderRadius: 5, padding: '.2rem .5rem', fontSize: '.75rem', fontFamily: 'monospace', color: sel ? '#4ade80' : '#8ba3bc' }}>
                    <b>{n.l}</b>:{k >= 1e9 ? '∞' : k}
                  </span>
                );
              })}
            </div>
            <div ref={logRef} style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: 6, padding: '.7rem', fontSize: '.75rem', fontFamily: 'monospace', color: '#8ba3bc', height: 110, overflowY: 'auto' }}>
              {log.map((l, i) => (
                <div key={i} style={{ marginBottom: 2, color: l.cls === 'hi' ? '#38bdf8' : '#8ba3bc' }}>{l.msg}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem', marginTop: '.75rem' }}>
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">Kruskal vs Prim</span>
<table class="cayley" style="width:100%;font-size:.82rem;margin-top:.4rem"><thead><tr><th></th><th>Kruskal</th><th>Prim</th></tr></thead><tbody>
<tr><td>Stratégia</td><td>Él-alapú (rendezés)</td><td>Csúcs-alapú (növekvő fa)</td></tr>
<tr><td>Adatszerkezet</td><td>Union-Find</td><td>Prioritássor</td></tr>
<tr><td>Futásidő</td><td>\(\mathcal{O}(m\log m)\)</td><td>\(\mathcal{O}((n+m)\log n)\)</td></tr>
<tr><td>Jobb ha</td><td>Ritka gráf</td><td>Sűrű gráf</td></tr>
</tbody></table>`} />
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">Az algoritmus</span>
<div style="font-size:.83rem;color:#c8d8e8;line-height:1.75;margin-top:.4rem">
1. Indíts egy tetszőleges csúcsból (fa \(= \{s\}\)).<br>
2. A fa és a többi csúcs közötti legkisebb súlyú élt vedd fel.<br>
3. A hozzáadott csúcs szomszédainak frissítsd a \(\text{key}[v]\) értékét.<br>
4. Ismételd, míg minden csúcs a fában van.<br><br>
Segédoszlop: \(\text{key}[v]\) = legkisebb él-súly \(v\)-ből a fához.</div>`} />
      </div>
    </div>
  );
}

// ═══ TAB 4: TSP ══════════════════════════════════════════════════
interface TSPResult { mstEdges: number[]; approxTour: number[]; approxW: number; mstW: number; opt: { tour: number[]; cost: number } | null; }

function TSPTab() {
  const [preset, setPreset] = useState<'cities6' | 'cities8' | 'cities10' | 'random8'>('cities6');
  const [nodes, setNodes] = useState<GNode[]>(TSP_CITIES['cities6']);
  const [result, setResult] = useState<TSPResult | null>(null);
  const [show, setShow] = useState<'all' | 'mst' | 'approx' | 'opt'>('all');
  const [status, setStatus] = useState('Kattints ▶ Futtatás-ra.');
  const ref = useRef<HTMLCanvasElement>(null);

  function loadPreset(p: typeof preset) {
    let ns: GNode[];
    if (p === 'random8') ns = Array.from({ length: 8 }, (_, i) => ({ x: 60 + Math.random() * 380, y: 50 + Math.random() * 230, l: String.fromCharCode(65 + i) }));
    else ns = TSP_CITIES[p];
    setNodes(ns); setPreset(p); setResult(null); setStatus('Kattints ▶ Futtatás-ra.'); setShow('all');
  }

  function drawTSP(ns: GNode[], edges: GEdge[], mstE: number[] | null, approx: number[] | null, opt: number[] | null) {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
    edges.forEach(e => { ctx.strokeStyle = '#1a2a3a'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(ns[e.u].x, ns[e.u].y); ctx.lineTo(ns[e.v].x, ns[e.v].y); ctx.stroke(); });
    if (mstE) { ctx.setLineDash([4, 3]); mstE.forEach(i => { const e = edges[i]; ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(ns[e.u].x, ns[e.u].y); ctx.lineTo(ns[e.v].x, ns[e.v].y); ctx.stroke(); }); ctx.setLineDash([]); }
    if (approx) { ctx.strokeStyle = '#f97316'; ctx.lineWidth = 2.5; ctx.setLineDash([]); ctx.beginPath(); ctx.moveTo(ns[approx[0]].x, ns[approx[0]].y); approx.slice(1).forEach(i => ctx.lineTo(ns[i].x, ns[i].y)); ctx.closePath(); ctx.stroke(); }
    if (opt) { ctx.strokeStyle = '#a78bfa'; ctx.lineWidth = 2; ctx.setLineDash([6, 3]); ctx.beginPath(); ctx.moveTo(ns[opt[0]].x, ns[opt[0]].y); opt.slice(1).forEach(i => ctx.lineTo(ns[i].x, ns[i].y)); ctx.closePath(); ctx.stroke(); ctx.setLineDash([]); }
    ns.forEach((n, i) => { ctx.beginPath(); ctx.arc(n.x, n.y, NODE_R, 0, 2 * Math.PI); ctx.fillStyle = '#1e3a5f'; ctx.fill(); ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke(); ctx.fillStyle = '#fff'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(n.l || String(i), n.x, n.y); });
  }

  useEffect(() => { drawTSP(nodes, buildTSPEdges(nodes), null, null, null); }, [nodes]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!result) return;
    const { mstEdges, approxTour, opt } = result;
    const edges = buildTSPEdges(nodes);
    drawTSP(nodes, edges, show === 'mst' || show === 'all' ? mstEdges : null,
      show === 'approx' || show === 'all' ? approxTour : null,
      show === 'opt' || show === 'all' ? (opt?.tour ?? null) : null);
  }, [show, result]); // eslint-disable-line react-hooks/exhaustive-deps

  function run() {
    const edges = buildTSPEdges(nodes);
    const { mstEdges, w: mstW } = kruskalSolve(nodes, edges);
    const approxTour = mstTour(nodes, mstEdges, edges);
    const approxW = tourCost(approxTour, nodes);
    const opt = nodes.length <= 8 ? bruteForceTSP(nodes) : null;
    const r: TSPResult = { mstEdges, approxTour, approxW, mstW, opt };
    setResult(r); setShow('all');
    setStatus(`Közelítő arány: approx/MST = ${(approxW / mstW).toFixed(2)}`);
  }

  const presetBtn = (p: string): React.CSSProperties => ({
    padding: '.3rem .7rem', borderRadius: 5, fontSize: '.78rem', cursor: 'pointer',
    background: preset === p ? '#38bdf8' : '#1a2233', color: preset === p ? '#000' : '#8ba3bc',
    border: `1px solid ${preset === p ? '#38bdf8' : '#2a3a50'}`, fontWeight: preset === p ? 600 : 400,
  });
  const accentBtn: React.CSSProperties = { padding: '.25rem .65rem', fontSize: '.78rem', borderRadius: 5, cursor: 'pointer', background: '#38bdf8', color: '#000', border: 'none', fontWeight: 600 };
  const outBtn: React.CSSProperties = { padding: '.25rem .65rem', fontSize: '.78rem', borderRadius: 5, cursor: 'pointer', background: 'transparent', color: '#38bdf8', border: '1px solid #38bdf8' };
  const metricCard = (val: string | number, label: string) => (
    <div style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: 8, padding: '.7rem', textAlign: 'center' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#38bdf8' }}>{val}</div>
      <div style={{ fontSize: '.72rem', color: '#8ba3bc' }}>{label}</div>
    </div>
  );

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>TSP 2-közelítés — MST alapú Hamilton-kör</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
          {(['cities6', 'cities8', 'cities10', 'random8'] as const).map(p => (
            <button key={p} style={presetBtn(p)} onClick={() => loadPreset(p)}>
              {p === 'cities6' ? '6 város' : p === 'cities8' ? '8 város' : p === 'cities10' ? '10 város' : 'Véletlen (8)'}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <canvas ref={ref} width={480} height={300} style={{ width: '100%', maxWidth: 480, borderRadius: '.5rem', display: 'block' }} />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '.78rem', color: '#8ba3bc', marginTop: '.4rem' }}>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#4ade80', marginRight: 4 }} />MST</span>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#f97316', marginRight: 4 }} />Közelítő kör</span>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#a78bfa', marginRight: 4 }} />Optimális</span>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
              <button style={accentBtn} onClick={run}>▶ Futtatás</button>
              {result && <><button style={outBtn} onClick={() => setShow('mst')}>MST</button><button style={outBtn} onClick={() => setShow('approx')}>Közelítő</button><button style={outBtn} onClick={() => setShow('opt')}>Optimális</button><button style={outBtn} onClick={() => setShow('all')}>Mind</button></>}
            </div>
            <div style={{ fontSize: '.8rem', color: '#8ba3bc', marginBottom: '.5rem' }}>{status}</div>
            {result && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.4rem' }}>
                {metricCard(result.mstW, 'MST súly')}
                {metricCard(result.approxW, 'Közelítő kör')}
                {metricCard(result.opt ? result.opt.cost : 'n/a', 'Optimális')}
                {metricCard(result.opt ? (result.approxW / result.opt.cost).toFixed(2) + '×' : '—', 'Közelítési arány')}
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem', marginTop: '.75rem' }}>
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">Az algoritmus lépései</span>
<div style="font-size:.83rem;color:#c8d8e8;line-height:1.8;margin-top:.4rem">
<b style="color:#38bdf8">1.</b> Számíts MST-t (Kruskal/Prim)<br>
<b style="color:#38bdf8">2.</b> Járd körbe a fát DFS-sorrendben (preorder bejárás)<br>
<b style="color:#38bdf8">3.</b> Már látott csúcsokat ugord át (rövidítés)<br>
<b style="color:#38bdf8">4.</b> Visszatérés a kiindulópontra → Hamilton-kör<br><br>
<b style="color:#38bdf8">Garantált:</b> \(w(H_{\text{közelítő}}) \leq 2 \cdot w(\text{MST}) \leq 2 \cdot w(H_{\text{optimális}})\)</div>`} />
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">Miért legfeljebb kétszeres?</span>
<div style="font-size:.83rem;color:#c8d8e8;line-height:1.8;margin-top:.4rem">
Az MST körbekerülésekor minden élt kétszer járunk be → súly = \(2w(T)\).<br>
A háromszög-egyenlőtlenség miatt a rövidítések (ugrások) csak csökkentik az utat.<br>
Tehát: \(w(H) \leq 2w(T) \leq 2w(H_0)\).<br><br>
<b style="color:#38bdf8">Christofides (1976):</b> jobb algoritmus, \(w(H)\leq\frac{3}{2}w(H_0)\).</div>`} />
      </div>
    </div>
  );
}

// ═══ TAB 5: Kirchhoff ════════════════════════════════════════════
const COUNT_PRESETS: Record<string, { nodes: { x: number; y: number; l: string }[]; edges: { u: number; v: number }[] }> = {
  k4: { nodes: [{ x: 160, y: 60, l: '1' }, { x: 300, y: 60, l: '2' }, { x: 300, y: 200, l: '3' }, { x: 160, y: 200, l: '4' }], edges: [{ u: 0, v: 1 }, { u: 1, v: 2 }, { u: 2, v: 3 }, { u: 3, v: 0 }, { u: 0, v: 2 }, { u: 1, v: 3 }] },
  k3: { nodes: [{ x: 200, y: 60, l: '1' }, { x: 100, y: 200, l: '2' }, { x: 300, y: 200, l: '3' }], edges: [{ u: 0, v: 1 }, { u: 1, v: 2 }, { u: 2, v: 0 }] },
  cycle5: { nodes: [{ x: 200, y: 50, l: '1' }, { x: 330, y: 140, l: '2' }, { x: 290, y: 260, l: '3' }, { x: 110, y: 260, l: '4' }, { x: 70, y: 140, l: '5' }], edges: [{ u: 0, v: 1 }, { u: 1, v: 2 }, { u: 2, v: 3 }, { u: 3, v: 4 }, { u: 4, v: 0 }] },
};

function KirchhoffTab() {
  const [preset, setPreset] = useState<'k4' | 'k3' | 'cycle5'>('k4');
  const [customEdges, setCustomEdges] = useState('1-2 2-3 3-4 4-1 2-4');
  const [customResult, setCustomResult] = useState('');
  const ref = useRef<HTMLCanvasElement>(null);

  const data = COUNT_PRESETS[preset];

  function computeKirchhoff(nodes: { x: number; y: number; l: string }[], edges: { u: number; v: number }[]) {
    const n = nodes.length;
    const L = Array.from({ length: n }, () => Array(n).fill(0));
    const deg = Array(n).fill(0);
    edges.forEach(e => { L[e.u][e.v]--; L[e.v][e.u]--; deg[e.u]++; deg[e.v]++; });
    for (let i = 0; i < n; i++) L[i][i] = deg[i];
    const M = L.slice(1).map(r => r.slice(1));
    return { L, tau: Math.round(det(M)) };
  }

  function drawCount(nodes: { x: number; y: number; l: string }[], edges: { u: number; v: number }[]) {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
    edges.forEach(e => { ctx.strokeStyle = '#2a3a50'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(nodes[e.u].x, nodes[e.u].y); ctx.lineTo(nodes[e.v].x, nodes[e.v].y); ctx.stroke(); });
    nodes.forEach((n, i) => { ctx.beginPath(); ctx.arc(n.x, n.y, 14, 0, 2 * Math.PI); ctx.fillStyle = '#1e3a5f'; ctx.fill(); ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke(); ctx.fillStyle = '#fff'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(n.l || String(i), n.x, n.y); });
  }

  const { L, tau } = computeKirchhoff(data.nodes, data.edges);
  useEffect(() => { drawCount(data.nodes, data.edges); }, [preset]); // eslint-disable-line react-hooks/exhaustive-deps

  function checkCustom() {
    const pairs = customEdges.trim().split(/\s+/).filter(Boolean);
    const nodeSet = new Set<number>(); const edges: { u: number; v: number }[] = [];
    for (const p of pairs) {
      const m = p.match(/^(\d+)-(\d+)$/);
      if (!m) { setCustomResult(`Hibás formátum: ${p}`); return; }
      const a = parseInt(m[1]) - 1, b = parseInt(m[2]) - 1;
      nodeSet.add(a); nodeSet.add(b); edges.push({ u: a, v: b });
    }
    const n = Math.max(...[...nodeSet]) + 1;
    const L2 = Array.from({ length: n }, () => Array(n).fill(0));
    const deg2 = Array(n).fill(0);
    edges.forEach(e => { L2[e.u][e.v]--; L2[e.v][e.u]--; deg2[e.u]++; deg2[e.v]++; });
    for (let i = 0; i < n; i++) L2[i][i] = deg2[i];
    const M2 = L2.slice(1).map(r => r.slice(1));
    const res = Math.round(det(M2));
    setCustomResult(`τ(G) = det(L₁₁) = ${res} feszítőfa`);
  }

  const presetBtn = (p: string): React.CSSProperties => ({
    padding: '.3rem .7rem', borderRadius: 5, fontSize: '.78rem', cursor: 'pointer',
    background: preset === p ? '#38bdf8' : '#1a2233', color: preset === p ? '#000' : '#8ba3bc',
    border: `1px solid ${preset === p ? '#38bdf8' : '#2a3a50'}`, fontWeight: preset === p ? 600 : 400,
  });
  const accentBtn: React.CSSProperties = { padding: '.25rem .65rem', fontSize: '.78rem', borderRadius: 5, cursor: 'pointer', background: '#38bdf8', color: '#000', border: 'none', fontWeight: 600, marginTop: '.4rem' };

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Kirchhoff Fa-Mátrix Tétele — feszítőfák száma</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
          {(['k4', 'k3', 'cycle5'] as const).map(p => (
            <button key={p} style={presetBtn(p)} onClick={() => setPreset(p)}>
              {p === 'k4' ? 'K₄ (=16)' : p === 'k3' ? 'K₃ (=3)' : 'C₅ (=5)'}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ minWidth: 280 }}>
            <canvas ref={ref} width={280} height={240} style={{ borderRadius: '.5rem', display: 'block' }} />
            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#38bdf8', textAlign: 'center', margin: '.5rem 0' }}>{tau}</div>
            <div style={{ fontSize: '.78rem', color: '#8ba3bc', textAlign: 'center' }}>feszítőfa</div>
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ fontSize: '.78rem', color: '#8ba3bc', fontWeight: 600, marginBottom: '.3rem' }}>Laplace-mátrix L = D − A:</div>
            <div style={{ overflowX: 'auto', marginBottom: '.5rem' }}>
              <table style={{ borderCollapse: 'collapse', fontSize: '.76rem', fontFamily: 'monospace' }}>
                <thead><tr><th style={{ padding: '.2rem .4rem', border: '1px solid #1e2a38', background: '#1a2233', color: '#38bdf8', minWidth: 30 }}></th>{data.nodes.map((nd, j) => <th key={j} style={{ padding: '.2rem .4rem', border: '1px solid #1e2a38', background: '#1a2233', color: '#38bdf8', minWidth: 30 }}>{nd.l}</th>)}</tr></thead>
                <tbody>{L.map((row, i) => <tr key={i}><th style={{ padding: '.2rem .4rem', border: '1px solid #1e2a38', background: '#1a2233', color: '#38bdf8' }}>{data.nodes[i].l}</th>{row.map((v, j) => <td key={j} style={{ padding: '.2rem .4rem', border: '1px solid #1e2a38', textAlign: 'center', color: i === j ? '#38bdf8' : v < 0 ? '#ef4444' : '#c8d8e8' }}>{v}</td>)}</tr>)}</tbody>
              </table>
            </div>
            <div style={{ fontSize: '.78rem', color: '#8ba3bc', fontWeight: 600, marginBottom: '.3rem' }}>Kofaktor (törölt 1. sor és oszlop):</div>
            <div style={{ fontFamily: 'monospace', fontSize: '.85rem', color: '#4ade80', background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: 5, padding: '.5rem', marginBottom: '.5rem' }}>det(L₁₁) = {tau}</div>
            <RichTex html={String.raw`<div style="font-size:.83rem;color:#c8d8e8;line-height:1.75">
<b style="color:#38bdf8">Kirchhoff-tétel (1847):</b><br>
A feszítőfák száma egyenlő a gráf Laplace-mátrixának bármely kofaktorával:
\[\tau(G) = \det(L_{ii})\]
ahol \(L_{ii}\) a \(L\) mátrix \(i\)-edik sorának és oszlopának törlésével kapott almátrix.</div>`} />
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem', marginTop: '.75rem' }}>
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">Ismert eredmények</span>
<table class="cayley" style="width:100%;font-size:.82rem;margin-top:.4rem"><thead><tr><th>Gráf</th><th>Feszítőfák száma \(\tau(G)\)</th></tr></thead><tbody>
<tr><td>\(K_n\) (teljes)</td><td>\(n^{n-2}\) (Cayley)</td></tr>
<tr><td>\(C_n\) (körút)</td><td>\(n\)</td></tr>
<tr><td>\(K_{m,n}\) (teljes kétoldalú)</td><td>\(m^{n-1} \cdot n^{m-1}\)</td></tr>
<tr><td>\(P_n\) (út)</td><td>\(1\)</td></tr>
</tbody></table>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Saját gráf ellenőrzése</span>
          <div style={{ fontSize: '.8rem', color: '#8ba3bc', marginBottom: '.4rem', marginTop: '.4rem' }}>Adj meg éleket (1-alapú): "1-2 2-3 3-4 4-1 2-4"</div>
          <textarea value={customEdges} onChange={e => setCustomEdges(e.target.value)}
            style={{ background: '#0a0f14', color: '#fff', border: '1px solid #1e2a38', borderRadius: 4, fontFamily: 'monospace', resize: 'none', height: 55, width: '100%', padding: '.3rem' }}
            placeholder="pl. 1-2 2-3 3-1" />
          <button style={accentBtn} onClick={checkCustom}>Kirchhoff kiszámít.</button>
          {customResult && <div style={{ fontSize: '.85rem', marginTop: '.5rem', color: '#4ade80', fontFamily: 'monospace' }}>{customResult}</div>}
        </div>
      </div>
    </div>
  );
}

// ═══ Main ═════════════════════════════════════════════════════════
const TABS: Tab[] = [
  { id: 'mst', label: 'Feszítőfák', content: <SpanTab /> },
  { id: 'kruskal', label: 'Kruskal', content: <KruskalTab /> },
  { id: 'prim', label: 'Prim', content: <PrimTab /> },
  { id: 'tsp', label: 'TSP közelítés', content: <TSPTab /> },
  { id: 'count', label: 'Feszítőfák száma', content: <KirchhoffTab /> },
];

export default function DimatCh15() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika — 15. fejezet</p>
      <h1 className="ila__title">Feszítőfák</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
