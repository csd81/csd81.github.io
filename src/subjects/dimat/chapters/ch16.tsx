import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// ─── types ────────────────────────────────────────────────────────
interface GNode { x: number; y: number; }
type GEdge = [number, number];

const NODE_R = 14;
const NODE_COLORS = ['#1e6aaf', '#166534', '#7c2d12', '#4a1d96', '#5e4000', '#1a4a3a', '#5a1a4a', '#0a3a5a'];

// ─── draw util ────────────────────────────────────────────────────
function drawGraph(
  canvas: HTMLCanvasElement,
  nodes: GNode[],
  edges: GEdge[],
  nodeColors: (string | null)[] | null,
  edgeColors: (string | null)[] | null,
  labels: (string | number)[] | null,
) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
  edges.forEach(([a, b], i) => {
    const na = nodes[a], nb = nodes[b];
    ctx.strokeStyle = edgeColors?.[i] ?? '#2a3a50';
    ctx.lineWidth = edgeColors?.[i] && edgeColors[i] !== '#2a3a50' ? 2.5 : 1.5;
    ctx.beginPath(); ctx.moveTo(na.x, na.y); ctx.lineTo(nb.x, nb.y); ctx.stroke();
  });
  nodes.forEach((n, i) => {
    const col = nodeColors?.[i] ?? '#1e3a5f';
    ctx.beginPath(); ctx.arc(n.x, n.y, NODE_R, 0, 2 * Math.PI);
    ctx.fillStyle = col; ctx.fill();
    ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(String(labels ? labels[i] : i + 1), n.x, n.y);
  });
}
function buildAdjArr(n: number, edges: GEdge[]) {
  const adj: number[][] = Array.from({ length: n }, () => []);
  edges.forEach(([a, b]) => { adj[a].push(b); adj[b].push(a); });
  return adj;
}
function degSeq(n: number, edges: GEdge[]): number[] {
  const deg = Array(n).fill(0);
  edges.forEach(([a, b]) => { deg[a]++; deg[b]++; });
  return [...deg].sort((a, b) => b - a);
}
function triangleCount(n: number, edges: GEdge[]): number {
  const adj = buildAdjArr(n, edges);
  let cnt = 0;
  for (let u = 0; u < n; u++) for (const v of adj[u]) if (v > u) for (const w of adj[v]) if (w > v && adj[u].includes(w)) cnt++;
  return cnt;
}
function isConnected(n: number, edges: GEdge[]): boolean {
  if (n === 0) return true;
  const adj = buildAdjArr(n, edges), vis = Array(n).fill(false), q = [0]; vis[0] = true; let c = 1;
  while (q.length) { const u = q.shift()!; adj[u].forEach(v => { if (!vis[v]) { vis[v] = true; c++; q.push(v); } }); }
  return c === n;
}

// ─── DEF PRESETS ──────────────────────────────────────────────────
const DEF_PRESETS: Record<string, { g1: { nodes: GNode[]; edges: GEdge[] }; g2: { nodes: GNode[]; edges: GEdge[] }; mapping: number[] | null; iso: boolean }> = {
  iso_path: {
    g1: { nodes: [{ x: 40, y: 120 }, { x: 130, y: 60 }, { x: 220, y: 120 }, { x: 310, y: 60 }], edges: [[0, 1], [1, 2], [2, 3]] },
    g2: { nodes: [{ x: 50, y: 150 }, { x: 150, y: 80 }, { x: 250, y: 150 }, { x: 320, y: 80 }], edges: [[0, 1], [1, 2], [2, 3]] },
    mapping: [0, 1, 2, 3], iso: true,
  },
  iso_cycle: {
    g1: { nodes: [{ x: 180, y: 40 }, { x: 310, y: 130 }, { x: 250, y: 220 }, { x: 110, y: 220 }, { x: 50, y: 130 }], edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]] },
    g2: { nodes: [{ x: 180, y: 220 }, { x: 50, y: 130 }, { x: 110, y: 40 }, { x: 250, y: 40 }, { x: 310, y: 130 }], edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]] },
    mapping: [0, 1, 2, 3, 4], iso: true,
  },
  notiso_same_deg: {
    g1: { nodes: [{ x: 100, y: 80 }, { x: 260, y: 80 }, { x: 260, y: 200 }, { x: 100, y: 200 }, { x: 180, y: 140 }], edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [1, 4]] },
    g2: { nodes: [{ x: 100, y: 80 }, { x: 260, y: 80 }, { x: 260, y: 200 }, { x: 100, y: 200 }, { x: 180, y: 140 }], edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [2, 4]] },
    mapping: null, iso: false,
  },
  iso_petersen: {
    g1: { nodes: [{ x: 180, y: 40 }, { x: 310, y: 130 }, { x: 260, y: 230 }, { x: 100, y: 230 }, { x: 50, y: 130 }, { x: 180, y: 100 }, { x: 240, y: 155 }, { x: 220, y: 205 }, { x: 140, y: 205 }, { x: 120, y: 155 }], edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [5, 7], [6, 8], [7, 9], [8, 5], [9, 6], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9]] },
    g2: { nodes: [{ x: 180, y: 40 }, { x: 310, y: 130 }, { x: 260, y: 230 }, { x: 100, y: 230 }, { x: 50, y: 130 }, { x: 180, y: 100 }, { x: 240, y: 155 }, { x: 220, y: 205 }, { x: 140, y: 205 }, { x: 120, y: 155 }], edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [5, 7], [6, 8], [7, 9], [8, 5], [9, 6], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9]] },
    mapping: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], iso: true,
  },
};

// ─── COND PRESETS ─────────────────────────────────────────────────
const COND_PRESETS: Record<string, { g1: { nodes: GNode[]; edges: GEdge[] }; g2: { nodes: GNode[]; edges: GEdge[] }; iso: boolean }> = {
  same_all: {
    g1: { nodes: [{ x: 80, y: 120 }, { x: 180, y: 50 }, { x: 250, y: 150 }, { x: 150, y: 190 }], edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2]] },
    g2: { nodes: [{ x: 100, y: 60 }, { x: 220, y: 60 }, { x: 220, y: 180 }, { x: 100, y: 180 }], edges: [[0, 1], [1, 2], [2, 3], [3, 0], [1, 3]] },
    iso: true,
  },
  diff_deg: {
    g1: { nodes: [{ x: 80, y: 120 }, { x: 180, y: 50 }, { x: 250, y: 150 }, { x: 150, y: 190 }], edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2]] },
    g2: { nodes: [{ x: 100, y: 60 }, { x: 220, y: 60 }, { x: 220, y: 180 }, { x: 100, y: 180 }], edges: [[0, 1], [1, 2], [2, 3], [3, 0]] },
    iso: false,
  },
  same_deg_notiso: {
    g1: { nodes: [{ x: 80, y: 100 }, { x: 180, y: 60 }, { x: 260, y: 100 }, { x: 220, y: 190 }, { x: 120, y: 190 }], edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 2]] },
    g2: { nodes: [{ x: 80, y: 100 }, { x: 180, y: 60 }, { x: 260, y: 100 }, { x: 220, y: 190 }, { x: 120, y: 190 }], edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [1, 3]] },
    iso: false,
  },
  diff_cycles: {
    g1: { nodes: [{ x: 80, y: 120 }, { x: 180, y: 60 }, { x: 250, y: 150 }, { x: 150, y: 200 }], edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2], [1, 3]] },
    g2: { nodes: [{ x: 100, y: 60 }, { x: 220, y: 60 }, { x: 220, y: 180 }, { x: 100, y: 180 }], edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2]] },
    iso: false,
  },
};

// ─── TREE ISO PRESETS ─────────────────────────────────────────────
const TREE_ISO_PRESETS: Record<string, { t1: { nodes: GNode[]; edges: GEdge[] }; t2: { nodes: GNode[]; edges: GEdge[] }; iso: boolean }> = {
  iso_trees: {
    t1: { nodes: [{ x: 140, y: 40 }, { x: 60, y: 120 }, { x: 220, y: 120 }, { x: 30, y: 200 }, { x: 90, y: 200 }, { x: 200, y: 200 }, { x: 240, y: 200 }], edges: [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]] },
    t2: { nodes: [{ x: 140, y: 40 }, { x: 70, y: 120 }, { x: 210, y: 120 }, { x: 40, y: 200 }, { x: 100, y: 200 }, { x: 185, y: 200 }, { x: 245, y: 200 }], edges: [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]] },
    iso: true,
  },
  notiso_trees: {
    t1: { nodes: [{ x: 140, y: 40 }, { x: 60, y: 120 }, { x: 220, y: 120 }, { x: 30, y: 200 }, { x: 90, y: 200 }, { x: 200, y: 200 }], edges: [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5]] },
    t2: { nodes: [{ x: 140, y: 40 }, { x: 80, y: 120 }, { x: 200, y: 120 }, { x: 50, y: 200 }, { x: 110, y: 200 }, { x: 140, y: 200 }], edges: [[0, 1], [0, 2], [1, 3], [2, 4], [2, 5]] },
    iso: false,
  },
  caterpillar: {
    t1: { nodes: [{ x: 60, y: 140 }, { x: 140, y: 140 }, { x: 220, y: 140 }, { x: 300, y: 140 }, { x: 140, y: 60 }, { x: 220, y: 60 }, { x: 220, y: 220 }], edges: [[0, 1], [1, 2], [2, 3], [1, 4], [2, 5], [2, 6]] },
    t2: { nodes: [{ x: 140, y: 40 }, { x: 60, y: 120 }, { x: 220, y: 120 }, { x: 30, y: 200 }, { x: 90, y: 200 }, { x: 200, y: 200 }, { x: 220, y: 50 }], edges: [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [0, 6]] },
    iso: false,
  },
};

// ─── SEARCH PRESETS ───────────────────────────────────────────────
const SEARCH_PRESETS: Record<string, { g1: { n: number; edges: GEdge[] }; g2: { n: number; edges: GEdge[] } }> = {
  small_iso: { g1: { n: 4, edges: [[0, 1], [1, 2], [2, 3], [0, 3]] }, g2: { n: 4, edges: [[0, 2], [2, 1], [1, 3], [3, 0]] } },
  medium_iso: { g1: { n: 5, edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 2]] }, g2: { n: 5, edges: [[0, 1], [1, 3], [3, 2], [2, 4], [4, 0], [0, 3]] } },
  notiso4: { g1: { n: 4, edges: [[0, 1], [1, 2], [2, 3], [0, 3], [0, 2]] }, g2: { n: 4, edges: [[0, 1], [1, 2], [2, 3], [3, 0]] } },
  k4_iso: { g1: { n: 4, edges: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]] }, g2: { n: 4, edges: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]] } },
};

function circleLayout(n: number, cx: number, cy: number, r: number): GNode[] {
  return Array.from({ length: n }, (_, i) => ({ x: cx + r * Math.cos(2 * Math.PI * i / n - Math.PI / 2), y: cy + r * Math.sin(2 * Math.PI * i / n - Math.PI / 2) }));
}

// ─── AHU canonical code ───────────────────────────────────────────
function treeCanonCode(n: number, edges: GEdge[], root: number): string {
  const adj = buildAdjArr(n, edges);
  const code: string[] = Array(n).fill('');
  function dfs(u: number, par: number) {
    const childCodes: string[] = [];
    adj[u].forEach(v => { if (v !== par) { dfs(v, u); childCodes.push(code[v]); } });
    childCodes.sort();
    code[u] = '(' + childCodes.join('') + ')';
  }
  dfs(root, -1);
  return code[root];
}
function treeFindCenter(n: number, edges: GEdge[]): number[] {
  const adj = buildAdjArr(n, edges);
  const alive = Array(n).fill(true);
  let remaining = n;
  while (remaining > 2) {
    const leaves: number[] = [];
    for (let i = 0; i < n; i++) if (alive[i]) { const d = adj[i].filter(v => alive[v]).length; if (d <= 1) leaves.push(i); }
    leaves.forEach(l => { alive[l] = false; remaining--; });
  }
  return alive.map((_, i) => i).filter(i => alive[i]);
}

// ─── Backtracking ISO generator ───────────────────────────────────
type IsoEvent = { type: 'try'; depth: number; u: number; v: number; mapping: number[] }
              | { type: 'backtrack'; depth: number; u: number; v: number }
              | { type: 'found'; mapping: number[] }
              | { type: 'fail'; reason: string }
              | { type: 'exhausted' };

function* isoSearchGen(g1: { n: number; edges: GEdge[] }, g2: { n: number; edges: GEdge[] }): Generator<IsoEvent> {
  const n = g1.n;
  const A1 = Array.from({ length: n }, () => Array(n).fill(0));
  const A2 = Array.from({ length: n }, () => Array(n).fill(0));
  const deg1 = Array(n).fill(0), deg2 = Array(n).fill(0);
  g1.edges.forEach(([a, b]) => { A1[a][b] = 1; A1[b][a] = 1; deg1[a]++; deg1[b]++; });
  g2.edges.forEach(([a, b]) => { A2[a][b] = 1; A2[b][a] = 1; deg2[a]++; deg2[b]++; });
  if (n !== g2.n || g1.edges.length !== g2.edges.length) { yield { type: 'fail', reason: '|V| vagy |E| eltér' }; return; }
  const mapping = Array(n).fill(-1), used = Array(n).fill(false);
  function isCompatible(u: number, v: number): boolean {
    if (deg1[u] !== deg2[v]) return false;
    for (let k = 0; k < u; k++) { if (mapping[k] !== -1 && A1[u][k] !== A2[v][mapping[k]]) return false; }
    return true;
  }
  function* bt(depth: number): Generator<IsoEvent> {
    if (depth === n) { yield { type: 'found', mapping: [...mapping] }; return; }
    for (let v = 0; v < n; v++) {
      if (!used[v] && isCompatible(depth, v)) {
        mapping[depth] = v; used[v] = true;
        yield { type: 'try', depth, u: depth, v, mapping: [...mapping] };
        yield* bt(depth + 1);
        mapping[depth] = -1; used[v] = false;
        yield { type: 'backtrack', depth, u: depth, v };
      }
    }
  }
  yield* bt(0);
  yield { type: 'exhausted' };
}

// ═══ TAB 1: Definíció ════════════════════════════════════════════
function DefTab() {
  const [preset, setPreset] = useState<'iso_path' | 'iso_cycle' | 'notiso_same_deg' | 'iso_petersen'>('iso_path');
  const ref1 = useRef<HTMLCanvasElement>(null), ref2 = useRef<HTMLCanvasElement>(null);

  const d = DEF_PRESETS[preset];
  useEffect(() => {
    if (!ref1.current || !ref2.current) return;
    const colors1 = d.g1.nodes.map((_, i) => NODE_COLORS[i % NODE_COLORS.length]);
    const colors2 = d.mapping ? d.g1.nodes.map((_, i) => {
      const idx = d.mapping!.indexOf(i);
      return NODE_COLORS[(idx >= 0 ? idx : i) % NODE_COLORS.length];
    }) : d.g2.nodes.map((_, i) => NODE_COLORS[i % NODE_COLORS.length]);
    drawGraph(ref1.current, d.g1.nodes, d.g1.edges, colors1, null, d.g1.nodes.map((_, i) => String.fromCharCode(65 + i)));
    drawGraph(ref2.current, d.g2.nodes, d.g2.edges, colors2, null, d.g2.nodes.map((_, i) => String.fromCharCode(65 + i)));
  }, [preset]);

  const presetBtn = (p: string): React.CSSProperties => ({
    padding: '.3rem .7rem', borderRadius: 5, fontSize: '.78rem', cursor: 'pointer',
    background: preset === p ? '#38bdf8' : '#1a2233', color: preset === p ? '#000' : '#8ba3bc',
    border: `1px solid ${preset === p ? '#38bdf8' : '#2a3a50'}`, fontWeight: preset === p ? 600 : 400,
  });
  const verdictStyle: React.CSSProperties = {
    fontSize: '1.1rem', fontWeight: 700, textAlign: 'center', padding: '.5rem', borderRadius: 8, marginTop: '.5rem',
    background: d.iso ? '#0a1f10' : '#1f0a0a', color: d.iso ? '#4ade80' : '#ef4444',
    border: `1px solid ${d.iso ? '#4ade80' : '#ef4444'}`,
  };

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Gráf-izomorfizmus — vizuális párosítás</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
          {(['iso_path', 'iso_cycle', 'iso_petersen', 'notiso_same_deg'] as const).map(p => (
            <button key={p} style={presetBtn(p)} onClick={() => setPreset(p)}>
              {p === 'iso_path' ? 'Izomorf útak' : p === 'iso_cycle' ? 'Izomorf körök' : p === 'iso_petersen' ? 'Petersen-szerű' : 'Azonos foksorozat, NEM izomorf'}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '.78rem', color: '#38bdf8', fontWeight: 600, marginBottom: '.3rem' }}>G₁ gráf</div>
            <canvas ref={ref1} width={360} height={240} style={{ width: '100%', maxWidth: 360, borderRadius: '.5rem', display: 'block' }} />
          </div>
          <div>
            <div style={{ fontSize: '.78rem', color: '#38bdf8', fontWeight: 600, marginBottom: '.3rem' }}>G₂ gráf</div>
            <canvas ref={ref2} width={360} height={240} style={{ width: '100%', maxWidth: 360, borderRadius: '.5rem', display: 'block' }} />
          </div>
        </div>
        <div style={verdictStyle}>{d.iso ? '✓ G₁ ≅ G₂ — IZOMORFAK' : '✗ G₁ ≇ G₂ — NEM IZOMORFAK'}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem', marginTop: '.75rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Mapping — csúcsleképezés</span>
          <div style={{ fontSize: '.82rem', fontFamily: 'monospace', color: '#c8d8e8', lineHeight: 1.8, marginTop: '.4rem' }}>
            {d.mapping ? d.g1.nodes.map((_, i) => <div key={i}>{String.fromCharCode(65 + i)} → {String.fromCharCode(65 + d.mapping![i])}</div>) : 'Nincs izomorfizmus.'}
          </div>
          <div style={{ fontSize: '.78rem', color: '#8ba3bc', marginTop: '.5rem' }}>A színek mutatják a megfeleltetett csúcsokat.</div>
        </div>
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">Definíció</span>
<div style="font-size:.83rem;color:#c8d8e8;line-height:1.75;margin-top:.4rem">
A \(G_1=(V_1,E_1)\) és \(G_2=(V_2,E_2)\) gráfok <em>izomorfak</em> (\(G_1 \cong G_2\)), ha létezik bijekció \(\varphi: V_1 \to V_2\), amelyre:
\[\{u,v\} \in E_1 \iff \{\varphi(u),\varphi(v)\} \in E_2\]
<br><b style="color:#38bdf8">Kémia:</b> Izomer molekulák azonosítása<br>
<b style="color:#38bdf8">Hálózatok:</b> Struktúrális egyezés vizsgálata<br>
<b style="color:#38bdf8">Bioinf.:</b> Fehérje-struktúra összehasonlítás</div>`} />
      </div>
    </div>
  );
}

// ═══ TAB 2: Szükséges feltételek ═════════════════════════════════
function CondTab() {
  const [preset, setPreset] = useState<'same_all' | 'diff_deg' | 'same_deg_notiso' | 'diff_cycles'>('same_all');
  const ref1 = useRef<HTMLCanvasElement>(null), ref2 = useRef<HTMLCanvasElement>(null);

  const d = COND_PRESETS[preset];
  const n1 = d.g1.nodes.length, n2 = d.g2.nodes.length;
  const e1 = d.g1.edges.length, e2 = d.g2.edges.length;
  const ds1 = degSeq(n1, d.g1.edges), ds2 = degSeq(n2, d.g2.edges);
  const t1 = triangleCount(n1, d.g1.edges), t2 = triangleCount(n2, d.g2.edges);
  const c1 = isConnected(n1, d.g1.edges), c2 = isConnected(n2, d.g2.edges);
  const rows = [
    { label: 'Csúcsszám |V|', v1: n1, v2: n2, ok: n1 === n2 },
    { label: 'Élszám |E|', v1: e1, v2: e2, ok: e1 === e2 },
    { label: 'Foksorozat', v1: ds1.join(','), v2: ds2.join(','), ok: JSON.stringify(ds1) === JSON.stringify(ds2) },
    { label: 'Háromszögek', v1: t1, v2: t2, ok: t1 === t2 },
    { label: 'Összefüggő', v1: c1 ? 'igen' : 'nem', v2: c2 ? 'igen' : 'nem', ok: c1 === c2 },
  ];
  const allOk = rows.every(r => r.ok);

  useEffect(() => {
    if (ref1.current) drawGraph(ref1.current, d.g1.nodes, d.g1.edges, null, null, d.g1.nodes.map((_, i) => i + 1));
    if (ref2.current) drawGraph(ref2.current, d.g2.nodes, d.g2.edges, null, null, d.g2.nodes.map((_, i) => i + 1));
  }, [preset]);

  const verdictStyle: React.CSSProperties = !allOk
    ? { background: '#1f0a0a', color: '#ef4444', border: '1px solid #ef4444', fontSize: '1rem', fontWeight: 700, textAlign: 'center', padding: '.5rem', borderRadius: 8, marginTop: '.6rem' }
    : d.iso
    ? { background: '#0a1f10', color: '#4ade80', border: '1px solid #4ade80', fontSize: '1rem', fontWeight: 700, textAlign: 'center', padding: '.5rem', borderRadius: 8, marginTop: '.6rem' }
    : { background: '#1a0f00', color: '#f97316', border: '1px solid #f97316', fontSize: '1rem', fontWeight: 700, textAlign: 'center', padding: '.5rem', borderRadius: 8, marginTop: '.6rem' };
  const verdictText = !allOk ? '✗ Biztosan NEM izomorfak (feltétel nem teljesül)' : d.iso ? '✓ Minden feltétel teljesül → Valóban izomorfak' : '⚠ Minden feltétel teljesül, de MÉGSEM izomorfak!';

  const presetBtn = (p: string): React.CSSProperties => ({
    padding: '.3rem .7rem', borderRadius: 5, fontSize: '.78rem', cursor: 'pointer',
    background: preset === p ? '#38bdf8' : '#1a2233', color: preset === p ? '#000' : '#8ba3bc',
    border: `1px solid ${preset === p ? '#38bdf8' : '#2a3a50'}`, fontWeight: preset === p ? 600 : 400,
  });

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Szükséges (de nem elégséges) feltételek az izomorfizmushoz</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
          {(['same_all', 'diff_deg', 'same_deg_notiso', 'diff_cycles'] as const).map(p => (
            <button key={p} style={presetBtn(p)} onClick={() => setPreset(p)}>
              {p === 'same_all' ? 'Minden feltétel teljesül' : p === 'diff_deg' ? 'Eltérő foksorozat' : p === 'same_deg_notiso' ? 'Azonos foksor, nem izomorf' : 'Eltérő háromszögszám'}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div><div style={{ fontSize: '.78rem', color: '#38bdf8', fontWeight: 600, marginBottom: '.3rem' }}>G₁</div><canvas ref={ref1} width={260} height={200} style={{ width: '100%', maxWidth: 260, borderRadius: '.5rem', display: 'block' }} /></div>
          <div><div style={{ fontSize: '.78rem', color: '#38bdf8', fontWeight: 600, marginBottom: '.3rem' }}>G₂</div><canvas ref={ref2} width={260} height={200} style={{ width: '100%', maxWidth: 260, borderRadius: '.5rem', display: 'block' }} /></div>
        </div>
        <div style={{ overflowX: 'auto', marginTop: '.75rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
            <thead><tr>{['Feltétel', 'G₁', 'G₂', 'Egyezik?'].map(h => <th key={h} style={{ background: '#1a2233', color: '#38bdf8', padding: '.5rem .7rem', textAlign: 'left', fontWeight: 600 }}>{h}</th>)}</tr></thead>
            <tbody>{rows.map(r => <tr key={r.label}><td style={{ padding: '.45rem .7rem', borderTop: '1px solid #1e2a38', color: '#c8d8e8' }}>{r.label}</td><td style={{ padding: '.45rem .7rem', borderTop: '1px solid #1e2a38', color: '#c8d8e8' }}>{String(r.v1)}</td><td style={{ padding: '.45rem .7rem', borderTop: '1px solid #1e2a38', color: '#c8d8e8' }}>{String(r.v2)}</td><td style={{ padding: '.45rem .7rem', borderTop: '1px solid #1e2a38', color: r.ok ? '#4ade80' : '#ef4444' }}>{r.ok ? '✓' : '✗'}</td></tr>)}</tbody>
          </table>
        </div>
        <div style={verdictStyle}>{verdictText}</div>
      </div>
      <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">A feltételek</span>
<table class="cayley" style="width:100%;font-size:.82rem;margin-top:.4rem"><thead><tr><th>Feltétel</th><th>Ha eltér</th><th>Megjegyzés</th></tr></thead><tbody>
<tr><td>Csúcsszám \(|V|\)</td><td>Biztosan nem izomorf</td><td>Szükséges</td></tr>
<tr><td>Élszám \(|E|\)</td><td>Biztosan nem izomorf</td><td>Szükséges</td></tr>
<tr><td>Foksorozat (rendezett)</td><td>Biztosan nem izomorf</td><td>Szükséges</td></tr>
<tr><td>Háromszögek száma</td><td>Biztosan nem izomorf</td><td>Szükséges</td></tr>
<tr><td>Összefüggőség</td><td>Biztosan nem izomorf</td><td>Szükséges</td></tr>
<tr><td>Összes fenti egyezik</td><td colspan="2"><b style="color:#f97316">Még akkor sem biztos, hogy izomorfak!</b></td></tr>
</tbody></table>`} />
    </div>
  );
}

// ═══ TAB 3: Fák izomorfizmusa ═════════════════════════════════════
function TreeIsoTab() {
  const [preset, setPreset] = useState<'iso_trees' | 'notiso_trees' | 'caterpillar'>('iso_trees');
  const ref1 = useRef<HTMLCanvasElement>(null), ref2 = useRef<HTMLCanvasElement>(null);

  const d = TREE_ISO_PRESETS[preset];
  const n1 = d.t1.nodes.length, n2 = d.t2.nodes.length;
  let code1 = '?', code2 = '?', isIso = false;
  if (n1 === n2 && d.t1.edges.length === d.t2.edges.length) {
    const c1 = treeFindCenter(n1, d.t1.edges);
    const c2 = treeFindCenter(n2, d.t2.edges);
    code1 = treeCanonCode(n1, d.t1.edges, c1[0]);
    code2 = treeCanonCode(n2, d.t2.edges, c2[0]);
    if (c1.length === 2) { const alt = treeCanonCode(n1, d.t1.edges, c1[1]); if (alt < code1) code1 = alt; }
    if (c2.length === 2) { const alt = treeCanonCode(n2, d.t2.edges, c2[1]); if (alt < code2) code2 = alt; }
    isIso = code1 === code2;
  }

  useEffect(() => {
    if (ref1.current) drawGraph(ref1.current, d.t1.nodes, d.t1.edges, d.t1.nodes.map((_, i) => NODE_COLORS[i % NODE_COLORS.length]), null, d.t1.nodes.map((_, i) => i + 1));
    if (ref2.current) drawGraph(ref2.current, d.t2.nodes, d.t2.edges, null, null, d.t2.nodes.map((_, i) => i + 1));
  }, [preset]);

  const presetBtn = (p: string): React.CSSProperties => ({
    padding: '.3rem .7rem', borderRadius: 5, fontSize: '.78rem', cursor: 'pointer',
    background: preset === p ? '#38bdf8' : '#1a2233', color: preset === p ? '#000' : '#8ba3bc',
    border: `1px solid ${preset === p ? '#38bdf8' : '#2a3a50'}`, fontWeight: preset === p ? 600 : 400,
  });
  const verdictStyle: React.CSSProperties = { fontSize: '.9rem', fontWeight: 700, textAlign: 'center', padding: '.4rem', borderRadius: 8, background: isIso ? '#0a1f10' : '#1f0a0a', color: isIso ? '#4ade80' : '#ef4444', border: `1px solid ${isIso ? '#4ade80' : '#ef4444'}` };

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Fák kanonikus alakja — AHU algoritmus (középpont-módszer)</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
          {(['iso_trees', 'notiso_trees', 'caterpillar'] as const).map(p => (
            <button key={p} style={presetBtn(p)} onClick={() => setPreset(p)}>
              {p === 'iso_trees' ? 'Izomorf fák' : p === 'notiso_trees' ? 'Nem izomorf fák' : 'Hernyófa vs. út'}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 120px', gap: '1rem', alignItems: 'center' }}>
          <div><div style={{ fontSize: '.78rem', color: '#38bdf8', fontWeight: 600, marginBottom: '.3rem' }}>T₁ fa</div><canvas ref={ref1} width={280} height={220} style={{ width: '100%', borderRadius: '.5rem', display: 'block' }} /></div>
          <div><div style={{ fontSize: '.78rem', color: '#38bdf8', fontWeight: 600, marginBottom: '.3rem' }}>T₂ fa</div><canvas ref={ref2} width={280} height={220} style={{ width: '100%', borderRadius: '.5rem', display: 'block' }} /></div>
          <div style={verdictStyle}>{isIso ? 'T₁ ≅ T₂' : 'T₁ ≇ T₂'}</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '.75rem' }}>
          <div><div style={{ fontSize: '.78rem', color: '#8ba3bc', fontWeight: 600, marginBottom: '.3rem' }}>T₁ kanonikus kódja:</div><div style={{ display: 'inline-block', background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: 5, padding: '.25rem .6rem', fontSize: '.8rem', fontFamily: 'monospace', color: '#38bdf8' }}>{code1}</div></div>
          <div><div style={{ fontSize: '.78rem', color: '#8ba3bc', fontWeight: 600, marginBottom: '.3rem' }}>T₂ kanonikus kódja:</div><div style={{ display: 'inline-block', background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: 5, padding: '.25rem .6rem', fontSize: '.8rem', fontFamily: 'monospace', color: '#38bdf8' }}>{code2}</div></div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem', marginTop: '.75rem' }}>
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">AHU algoritmus lépései</span>
<div style="font-size:.83rem;color:#c8d8e8;line-height:1.8;margin-top:.4rem">
<b style="color:#38bdf8">1. Gyökér meghatározása:</b> Fa közepéből (center) gyökereztetjük.<br>
<b style="color:#38bdf8">2. Kanonikus kód:</b> Alulról felfelé rendelünk kódot minden csúcsnak a gyerekei kódjai alapján (rendezett sorrend).<br>
<b style="color:#38bdf8">3. Összehasonlítás:</b> Ha a gyökerek kódjai egyenlők → T₁ ≅ T₂.<br><br>
Futásidő: \(\mathcal{O}(n)\)<br>
Fa izomorfizmus <b style="color:#4ade80">polinom</b>-idős!</div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Hány különböző fa létezik n csúcson?</span>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.78rem', marginTop: '.4rem' }}>
            <thead><tr><th style={{ background: '#1a2233', color: '#38bdf8', padding: '.4rem .5rem', textAlign: 'left' }}>n</th><th style={{ background: '#1a2233', color: '#38bdf8', padding: '.4rem .5rem', textAlign: 'left' }}>Nem-izomorf fák</th></tr></thead>
            <tbody>{[[1,1],[2,1],[3,1],[4,2],[5,3],[6,6],[7,11],[8,23],[10,106]].map(([n, c]) => <tr key={n}><td style={{ padding: '.3rem .5rem', borderTop: '1px solid #1e2a38', color: '#c8d8e8' }}>{n}</td><td style={{ padding: '.3rem .5rem', borderTop: '1px solid #1e2a38', color: '#c8d8e8' }}>{c}</td></tr>)}</tbody>
          </table>
          <div style={{ marginTop: '.4rem', fontSize: '.77rem', color: '#8ba3bc' }}>Cayley: n^(n-2) számozott fa, de izomorfizmus-osztályok száma sokkal kisebb.</div>
        </div>
      </div>
    </div>
  );
}

// ═══ TAB 4: Izomorfizmus keresése ════════════════════════════════
function SearchTab() {
  const [preset, setPreset] = useState<'small_iso' | 'medium_iso' | 'notiso4' | 'k4_iso'>('small_iso');
  const [log, setLog] = useState<{ msg: string; cls: string }[]>([]);
  const [status, setStatus] = useState('Kattints ▶ Keresés-re.');
  const [verdict, setVerdict] = useState<{ text: string; iso: boolean | null }>({ text: '—', iso: null });
  const [mapping, setMapping] = useState<number[]>([]);
  const [autoActive, setAutoActive] = useState(false);
  const ref1 = useRef<HTMLCanvasElement>(null), ref2 = useRef<HTMLCanvasElement>(null);
  const genRef = useRef<Generator<IsoEvent> | null>(null);
  const doneRef = useRef(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const p = SEARCH_PRESETS[preset];
  const g1Nodes = circleLayout(p.g1.n, 130, 105, 80);
  const g2Nodes = circleLayout(p.g2.n, 130, 105, 80);

  function renderGraphs(m1: number[], m2: number[]) {
    if (ref1.current) {
      const nc1 = g1Nodes.map((_, i) => m1.includes(i) ? NODE_COLORS[m1.indexOf(i) % NODE_COLORS.length] : '#1e3a5f');
      drawGraph(ref1.current, g1Nodes, p.g1.edges, nc1, null, g1Nodes.map((_, i) => i + 1));
    }
    if (ref2.current) {
      const nc2 = g2Nodes.map((_, i) => m2.includes(i) ? NODE_COLORS[m2.indexOf(i) % NODE_COLORS.length] : '#1e3a5f');
      drawGraph(ref2.current, g2Nodes, p.g2.edges, nc2, null, g2Nodes.map((_, i) => i + 1));
    }
  }

  function doReset() {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; setAutoActive(false); }
    genRef.current = null; doneRef.current = false;
    setLog([]); setStatus('Kattints ▶ Keresés-re.'); setVerdict({ text: '—', iso: null }); setMapping([]);
    renderGraphs([], []);
  }

  useEffect(() => { doReset(); }, [preset]); // eslint-disable-line react-hooks/exhaustive-deps

  function doStep() {
    if (!genRef.current) return;
    if (doneRef.current) return;
    const res = genRef.current.next();
    if (res.done || !res.value) { doneRef.current = true; return; }
    const ev = res.value;
    if (ev.type === 'try') {
      setLog(l => [...l, { msg: `Próba: ${ev.u + 1} → ${ev.v + 1} (mélység ${ev.depth})`, cls: '' }]);
      const m2 = ev.mapping.filter(v => v !== -1);
      renderGraphs(Array.from({ length: m2.length }, (_, i) => i), m2);
      setMapping(ev.mapping);
    } else if (ev.type === 'backtrack') {
      setLog(l => [...l, { msg: `↩ Visszalépés: ${ev.u + 1} → ${ev.v + 1}`, cls: 'fail' }]);
    } else if (ev.type === 'found') {
      doneRef.current = true;
      if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; setAutoActive(false); }
      setLog(l => [...l, { msg: '✓ Izomorfizmus megtalálva!', cls: 'ok' }]);
      setVerdict({ text: '✓ IZOMORFAK — leképezés: ' + ev.mapping.map((v, i) => `${i + 1}→${v + 1}`).join(', '), iso: true });
      renderGraphs(Array.from({ length: ev.mapping.length }, (_, i) => i), ev.mapping);
      setMapping(ev.mapping);
    } else if (ev.type === 'fail' || ev.type === 'exhausted') {
      doneRef.current = true;
      if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; setAutoActive(false); }
      setLog(l => [...l, { msg: '✗ Nincs izomorfizmus.', cls: 'fail' }]);
      setVerdict({ text: '✗ NEM IZOMORFAK', iso: false });
    }
  }

  function startSearch() {
    genRef.current = isoSearchGen(p.g1, p.g2); doneRef.current = false;
    setLog([]); setStatus('Keresés folyamatban...'); setVerdict({ text: '—', iso: null });
  }
  function step() { if (!genRef.current) startSearch(); doStep(); }
  function toggleAuto() {
    if (autoActive) { if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; } setAutoActive(false); }
    else {
      if (!genRef.current) startSearch();
      setAutoActive(true);
      autoRef.current = setInterval(() => {
        if (doneRef.current) { if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; } setAutoActive(false); return; }
        doStep();
      }, 300);
    }
  }

  const logRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight; }, [log]);

  const presetBtn = (pp: string): React.CSSProperties => ({
    padding: '.3rem .7rem', borderRadius: 5, fontSize: '.78rem', cursor: 'pointer',
    background: preset === pp ? '#38bdf8' : '#1a2233', color: preset === pp ? '#000' : '#8ba3bc',
    border: `1px solid ${preset === pp ? '#38bdf8' : '#2a3a50'}`, fontWeight: preset === pp ? 600 : 400,
  });
  const accentBtn: React.CSSProperties = { padding: '.25rem .65rem', fontSize: '.78rem', borderRadius: 5, cursor: 'pointer', background: '#38bdf8', color: '#000', border: 'none', fontWeight: 600 };
  const outBtn: React.CSSProperties = { padding: '.25rem .65rem', fontSize: '.78rem', borderRadius: 5, cursor: 'pointer', background: 'transparent', color: '#38bdf8', border: '1px solid #38bdf8' };
  const verdictStyle: React.CSSProperties = {
    fontSize: '1rem', fontWeight: 700, textAlign: 'center', padding: '.5rem', borderRadius: 8, marginTop: '.5rem',
    background: verdict.iso === null ? 'transparent' : verdict.iso ? '#0a1f10' : '#1f0a0a',
    color: verdict.iso === null ? '#8ba3bc' : verdict.iso ? '#4ade80' : '#ef4444',
    border: `1px solid ${verdict.iso === null ? '#1e2a38' : verdict.iso ? '#4ade80' : '#ef4444'}`,
  };

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Visszalépéses keresés (backtracking) — izomorfizmus megkeresése</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
          {(['small_iso', 'medium_iso', 'notiso4', 'k4_iso'] as const).map(pp => (
            <button key={pp} style={presetBtn(pp)} onClick={() => setPreset(pp)}>
              {pp === 'small_iso' ? 'Kis izomorf (4 csúcs)' : pp === 'medium_iso' ? 'Közepes (5 csúcs)' : pp === 'notiso4' ? 'Nem izomorf (4 csúcs)' : 'K₄ (mindkét)'}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div><div style={{ fontSize: '.78rem', color: '#38bdf8', fontWeight: 600, marginBottom: '.3rem' }}>G₁</div><canvas ref={ref1} width={260} height={210} style={{ width: '100%', borderRadius: '.5rem', display: 'block' }} /></div>
          <div><div style={{ fontSize: '.78rem', color: '#38bdf8', fontWeight: 600, marginBottom: '.3rem' }}>G₂</div><canvas ref={ref2} width={260} height={210} style={{ width: '100%', borderRadius: '.5rem', display: 'block' }} /></div>
        </div>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
          <button style={accentBtn} onClick={() => { startSearch(); }}>▶ Keresés indítása</button>
          <button style={outBtn} onClick={step}>Lépés →</button>
          <button style={{ ...outBtn, background: autoActive ? '#38bdf8' : 'transparent', color: autoActive ? '#000' : '#38bdf8' }} onClick={toggleAuto}>{autoActive ? '⏸ Stop' : '▶ Auto'}</button>
          <button style={outBtn} onClick={doReset}>↺ Újra</button>
        </div>
        <div style={{ fontSize: '.8rem', color: '#8ba3bc', marginTop: '.4rem' }}>{status}</div>
        <div ref={logRef} style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: 6, padding: '.7rem', fontSize: '.75rem', fontFamily: 'monospace', color: '#8ba3bc', maxHeight: 120, overflowY: 'auto', marginTop: '.5rem' }}>
          {log.map((l, i) => <div key={i} style={{ marginBottom: 2, color: l.cls === 'ok' ? '#4ade80' : l.cls === 'fail' ? '#ef4444' : '#8ba3bc' }}>{l.msg}</div>)}
        </div>
        <div style={verdictStyle}>{verdict.text}</div>
      </div>
      <div className="info-box" style={{ marginTop: '.75rem' }}>
        <span className="lbl" style={{ color: '#38bdf8' }}>Részleges leképezés állapota</span>
        <div style={{ fontFamily: 'monospace', fontSize: '.83rem', color: '#c8d8e8', lineHeight: 1.8, marginTop: '.4rem' }}>
          {mapping.length > 0
            ? mapping.map((v, i) => <span key={i} style={{ color: NODE_COLORS[i % NODE_COLORS.length], marginRight: '1rem' }}>{i + 1} → {v === -1 ? '?' : v + 1}</span>)
            : '—'}
        </div>
      </div>
    </div>
  );
}

// ═══ TAB 5: GI-probléma ══════════════════════════════════════════
function GITab() {
  const ref = useRef<HTMLCanvasElement>(null);
  const cosp1 = useRef<HTMLCanvasElement>(null), cosp2 = useRef<HTMLCanvasElement>(null);
  const [showCosp, setShowCosp] = useState(false);

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
    const sets = [
      { cx: 100, cy: 130, rx: 80, ry: 100, color: 'rgba(74,222,128,0.15)', bc: '#4ade80' },
      { cx: 140, cy: 130, rx: 120, ry: 115, color: 'rgba(56,189,248,0.1)', bc: '#38bdf8' },
      { cx: 180, cy: 130, rx: 155, ry: 130, color: 'rgba(167,139,250,0.08)', bc: '#a78bfa' },
    ];
    [...sets].reverse().forEach(s => {
      ctx.beginPath(); ctx.ellipse(s.cx, s.cy, s.rx, s.ry, 0, 0, 2 * Math.PI);
      ctx.fillStyle = s.color; ctx.fill(); ctx.strokeStyle = s.bc; ctx.lineWidth = 1.5; ctx.stroke();
    });
    ctx.fillStyle = '#4ade80'; ctx.font = 'bold 11px monospace'; ctx.fillText('P', 22, 200);
    ctx.fillStyle = '#38bdf8'; ctx.fillText('quasi-P (Babai)', 28, 220);
    ctx.fillStyle = '#a78bfa'; ctx.fillText('NP', 28, 240);
    const items = [
      { label: 'Fa-izomorf.', x: 60, y: 100, color: '#4ade80' },
      { label: 'Planáris GI', x: 55, y: 125, color: '#4ade80' },
      { label: 'GI (általános)', x: 155, y: 85, color: '#38bdf8' },
      { label: 'Szubgráf-izomorf.', x: 250, y: 110, color: '#f97316' },
      { label: 'Ham.-kör', x: 260, y: 135, color: '#f97316' },
    ];
    items.forEach(it => { ctx.fillStyle = it.color; ctx.font = '10px monospace'; ctx.textAlign = 'center'; ctx.fillText(it.label, it.x, it.y); });
    ctx.fillStyle = '#f97316'; ctx.font = '9px monospace'; ctx.textAlign = 'right'; ctx.fillText('NP-teljes →', 338, 110);
  }, []);

  useEffect(() => {
    if (!showCosp) return;
    const gc1n: GNode[] = [{ x: 100, y: 80 }, { x: 40, y: 160 }, { x: 80, y: 160 }, { x: 120, y: 160 }, { x: 160, y: 160 }];
    const gc1e: GEdge[] = [[0, 1], [0, 2], [0, 3], [0, 4]];
    const gc2n: GNode[] = [{ x: 60, y: 60 }, { x: 140, y: 60 }, { x: 140, y: 160 }, { x: 60, y: 160 }, { x: 100, y: 110 }];
    const gc2e: GEdge[] = [[0, 1], [1, 2], [2, 3], [3, 0]];
    if (cosp1.current) drawGraph(cosp1.current, gc1n, gc1e, null, null, ['c', '1', '2', '3', '4']);
    if (cosp2.current) drawGraph(cosp2.current, gc2n, gc2e, null, null, ['1', '2', '3', '4', '?']);
  }, [showCosp]);

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>A GI-probléma komplexitása</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1rem', marginTop: '.5rem' }}>
          <div style={{ fontSize: '.83rem', color: '#c8d8e8', lineHeight: 1.85 }}>
            <b style={{ color: '#ef4444' }}>GI ∈ NP:</b> Ha adott a bijekció, ellenőrzés O(n²) alatt megy.<br /><br />
            <b style={{ color: '#f97316' }}>GI nem ismert P-ben:</b> Nincs polinomidős algoritmus, de NP-teljesnek sem bizonyított.<br /><br />
            <b style={{ color: '#4ade80' }}>GI ∈ quasi-P:</b> Babai (2015) quasi-polinom idős algoritmust adott: n^O(log n).<br /><br />
            <b style={{ color: '#38bdf8' }}>GI speciális esetei P-ben:</b><br />
            &bull; Fák (AHU, O(n))<br />
            &bull; Planáris gráfok (O(n))<br />
            &bull; Korlátozott fa-szélesség<br />
            &bull; Intervallum-gráfok
          </div>
          <canvas ref={ref} width={340} height={260} style={{ borderRadius: '.5rem', display: 'block' }} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem', marginTop: '.75rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Kospektrális gráfok</span>
          <div style={{ fontSize: '.83rem', color: '#c8d8e8', lineHeight: 1.8, marginTop: '.4rem' }}>
            Léteznek nem-izomorf gráfok, amelyek azonos szomszédsági spektrummal rendelkeznek
            (<b>kospektrális párnak</b> nevezzük). A spektrum sem elegendő az izomorfizmus igazolásához!
          </div>
          <button onClick={() => setShowCosp(v => !v)}
            style={{ marginTop: '.5rem', padding: '.25rem .65rem', fontSize: '.78rem', borderRadius: 5, cursor: 'pointer', background: 'transparent', color: '#38bdf8', border: '1px solid #38bdf8' }}>
            {showCosp ? 'Elrejtés' : 'Kospektrális pár mutatása'}
          </button>
          {showCosp && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem', marginTop: '.5rem' }}>
              <canvas ref={cosp1} width={200} height={160} style={{ borderRadius: '.4rem' }} />
              <canvas ref={cosp2} width={200} height={160} style={{ borderRadius: '.4rem' }} />
              <div style={{ gridColumn: '1/-1', fontSize: '.78rem', color: '#8ba3bc' }}>K₁,₄ (bal) és C₄∪K₁ (jobb): azonos spektrum, de nem izomorfak. Foksorozatok: [4,1,1,1,1] vs [2,2,2,2,0].</div>
            </div>
          )}
        </div>
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">Algoritmusok összehasonlítása</span>
<table class="cayley" style="width:100%;font-size:.82rem;margin-top:.4rem"><thead><tr><th>Algoritmus</th><th>Gráftípus</th><th>Idő</th></tr></thead><tbody>
<tr><td>Naiv (brute-force)</td><td>Általános</td><td>\(\mathcal{O}(n!)\)</td></tr>
<tr><td>AHU</td><td>Fák</td><td>\(\mathcal{O}(n)\)</td></tr>
<tr><td>Hopcroft-Tarjan</td><td>Planáris</td><td>\(\mathcal{O}(n)\)</td></tr>
<tr><td>Weisfeiler-Leman</td><td>Általános (közelítő)</td><td>\(\mathcal{O}(n^2)\)</td></tr>
<tr><td>Babai (2015)</td><td>Általános</td><td>\(n^{O(\log n)}\)</td></tr>
</tbody></table>`} />
      </div>
    </div>
  );
}

// ═══ Main ═════════════════════════════════════════════════════════
const TABS: Tab[] = [
  { id: 'def', label: 'Definíció', content: <DefTab /> },
  { id: 'cond', label: 'Szükséges feltételek', content: <CondTab /> },
  { id: 'trees', label: 'Fák izomorfizmusa', content: <TreeIsoTab /> },
  { id: 'search', label: 'Izomorfizmus keresése', content: <SearchTab /> },
  { id: 'gi', label: 'GI-probléma', content: <GITab /> },
];

export default function DimatCh16() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika — 16. fejezet</p>
      <h1 className="ila__title">Gráfok izomorfizmusa</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
