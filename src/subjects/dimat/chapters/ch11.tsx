import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, Cols, type Tab } from '../../ila/components/kit';

// ─── Utilities ───────────────────────────────────────────────────────────────
type NodeDef = { x: number; y: number; label?: string };
type Edge = [number, number];

function edgeKey(a: number, b: number) { return `${Math.min(a, b)},${Math.max(a, b)}`; }

function circleNodes(n: number, cx: number, cy: number, r: number, startLabel = 'A'): NodeDef[] {
  return Array.from({ length: n }, (_, i) => ({
    x: cx + r * Math.cos(2 * Math.PI * i / n - Math.PI / 2),
    y: cy + r * Math.sin(2 * Math.PI * i / n - Math.PI / 2),
    label: String.fromCharCode(startLabel.charCodeAt(0) + i),
  }));
}

function getDegrees(nodes: NodeDef[], edges: Edge[]) {
  return nodes.map((_, i) => edges.filter(e => e[0] === i || e[1] === i).length);
}

function areAdjacent(edges: Edge[], a: number, b: number) {
  return edges.some(e => (e[0] === a && e[1] === b) || (e[0] === b && e[1] === a));
}

// ─── Generic draw ────────────────────────────────────────────────────────────
const HAM_COLORS = ['#f97316', '#38bdf8', '#10b981', '#a78bfa', '#f43f5e', '#fbbf24', '#34d399', '#60a5fa'];

function drawGraph(
  ctx: CanvasRenderingContext2D,
  nodes: NodeDef[],
  edges: Edge[],
  opts: { hamPath?: number[]; hamEdges?: Set<string>; selNode?: number; dimEdges?: Set<number> } = {},
) {
  const { hamPath = [], hamEdges = new Set(), selNode = -1, dimEdges = new Set() } = opts;
  const W = ctx.canvas.width, H = ctx.canvas.height;
  ctx.clearRect(0, 0, W, H);

  edges.forEach((e, i) => {
    const [a, b] = e;
    const na = nodes[a], nb = nodes[b];
    const isHam = hamEdges.has(edgeKey(a, b));
    const isDim = dimEdges.has(i);
    ctx.beginPath(); ctx.moveTo(na.x, na.y); ctx.lineTo(nb.x, nb.y);
    ctx.strokeStyle = isHam ? '#f97316' : isDim ? '#1e2533' : '#334155';
    ctx.lineWidth = isHam ? 3 : 1.5;
    ctx.setLineDash(isDim ? [2, 4] : []);
    ctx.stroke(); ctx.setLineDash([]);
  });

  nodes.forEach((n, i) => {
    const hi = hamPath.indexOf(i);
    const isSel = i === selNode;
    const isVisited = hi >= 0;
    ctx.beginPath(); ctx.arc(n.x, n.y, 15, 0, Math.PI * 2);
    ctx.fillStyle = '#12161f'; ctx.fill();
    ctx.strokeStyle = isSel ? '#fbbf24' : isVisited ? HAM_COLORS[hi % HAM_COLORS.length] : '#475569';
    ctx.lineWidth = isSel || isVisited ? 2.5 : 1.5; ctx.stroke();
    ctx.fillStyle = isSel ? '#fbbf24' : isVisited ? HAM_COLORS[hi % HAM_COLORS.length] : '#64748b';
    ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(n.label || String(i), n.x, n.y);
  });
}

// ─── TAB 1: Ham vs Euler def graphs ──────────────────────────────────────────
const PRESET_C6: { nodes: NodeDef[]; edges: Edge[]; hamCycle: number[] } = {
  nodes: circleNodes(6, 240, 135, 110),
  edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]],
  hamCycle: [0, 1, 2, 3, 4, 5],
};
const PRESET_PETERSEN_SMALL: { nodes: NodeDef[]; edges: Edge[]; hamCycle: number[] } = {
  nodes: [...circleNodes(5, 240, 135, 100), ...circleNodes(5, 240, 135, 45)],
  edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9], [5, 7], [7, 9], [9, 6], [6, 8], [8, 5]],
  hamCycle: [],
};
const PRESET_EULER_ONLY: { nodes: NodeDef[]; edges: Edge[]; hamCycle: number[] } = {
  nodes: [{ x: 120, y: 135, label: 'A' }, { x: 240, y: 80, label: 'B' }, { x: 240, y: 190, label: 'C' }, { x: 360, y: 135, label: 'D' }, { x: 300, y: 50, label: 'E' }, { x: 300, y: 220, label: 'F' }],
  edges: [[0, 1], [0, 2], [1, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 5]],
  hamCycle: [],
};

type DefType = 'both' | 'ham_only' | 'euler_only' | 'neither';
const DEF_INFO: Record<DefType, { preset: 'C6' | 'petersen_small' | 'euler_only' | 'neither'; info: string }> = {
  both: { preset: 'C6', info: 'Kör gráf C₆: minden fokszám 2 (páros) → Euler-kör ✓. 6 csúcs körbe → Hamilton-kör ✓.' },
  ham_only: { preset: 'petersen_small', info: 'Petersen-gráf — nincs Euler-kör (fokszámok 3, páratlan), nincs Hamilton-kör sem! (Valódi "csak Hamilton": pl. K₅ — mindkettő van.)' },
  euler_only: { preset: 'euler_only', info: 'Két háromszög közös csúcson: minden fokszám páros → Euler-kör ✓. De a középső csúcs elvágó → Hamilton-kör ✗.' },
  neither: { preset: 'neither', info: 'Petersen-gráf: minden fokszám 3 (páratlan) → nincs Euler-kör. Bebizonyítható, hogy Hamilton-kör sincs.' },
};
const PRESETS = { C6: PRESET_C6, petersen_small: PRESET_PETERSEN_SMALL, euler_only: PRESET_EULER_ONLY, neither: PRESET_PETERSEN_SMALL };

function DefCanvas() {
  const [type, setType] = useState<DefType>('both');
  const ref = useRef<HTMLCanvasElement>(null);
  const { preset, info } = DEF_INFO[type];
  const G = PRESETS[preset];

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const hamEdgeSet = new Set<string>();
    const hc = G.hamCycle;
    for (let i = 0; i < hc.length; i++) hamEdgeSet.add(edgeKey(hc[i], hc[(i + 1) % hc.length]));
    drawGraph(ctx, G.nodes, G.edges, { hamPath: hc, hamEdges: hamEdgeSet });
  }, [type]);

  const BUTTONS: { k: DefType; label: string }[] = [
    { k: 'both', label: 'Mindkettő létezik' }, { k: 'ham_only', label: 'Csak Hamilton' },
    { k: 'euler_only', label: 'Csak Euler' }, { k: 'neither', label: 'Egyik sem' },
  ];

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#38bdf8' }}>Hamilton-kör vs Euler-kör</span>
      <div className="op-row">
        {BUTTONS.map(({ k, label }) => <button key={k} className={`op-btn${type === k ? ' is-active' : ''}`} onClick={() => setType(k)}>{label}</button>)}
      </div>
      <canvas ref={ref} width={480} height={270} style={{ width: '100%', maxWidth: 480 }} />
      <div style={{ fontSize: '.82rem', color: '#94a3b8', marginTop: '.4rem' }}>{info}</div>
    </div>
  );
}

// ─── TAB 2: Dirac/Ore checker ─────────────────────────────────────────────────
function buildThmNodes() { return circleNodes(6, 240, 150, 120); }
function buildThmEdges(): Edge[] { return [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 3], [1, 4], [2, 5]]; }

function DiracOreCanvas() {
  const [nodes, setNodes] = useState(buildThmNodes);
  const [edges, setEdges] = useState(buildThmEdges);
  const [sel, setSel] = useState<number | null>(null);
  const [degInput, setDegInput] = useState('3,3,3,3,3,3');
  const ref = useRef<HTMLCanvasElement>(null);
  const dragRef = useRef<{ node: number; ox: number; oy: number } | null>(null);

  const degs = getDegrees(nodes, edges);
  const n = nodes.length;
  const minDeg = Math.min(...degs);
  const dirac = minDeg >= n / 2;
  let ore = true;
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
    if (!areAdjacent(edges, i, j) && degs[i] + degs[j] < n) ore = false;
  }

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    drawGraph(ctx, nodes, edges, { selNode: sel ?? -1 });
  }, [nodes, edges, sel]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (dragRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const hit = nodes.findIndex(nd => Math.hypot(nd.x - mx, nd.y - my) < 18);
    if (hit < 0) { setSel(null); return; }
    if (sel === null) { setSel(hit); }
    else if (sel === hit) { setSel(null); }
    else {
      const ei = edges.findIndex(ed => (ed[0] === sel && ed[1] === hit) || (ed[0] === hit && ed[1] === sel));
      const ne = [...edges];
      if (ei >= 0) ne.splice(ei, 1); else ne.push([sel, hit]);
      setEdges(ne); setSel(null);
    }
  };
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const hit = nodes.findIndex(nd => Math.hypot(nd.x - mx, nd.y - my) < 18);
    if (hit >= 0) dragRef.current = { node: hit, ox: mx - nodes[hit].x, oy: my - nodes[hit].y };
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setNodes(ns => ns.map((nd, i) => i === dragRef.current!.node ? { ...nd, x: e.clientX - rect.left - dragRef.current!.ox, y: e.clientY - rect.top - dragRef.current!.oy } : nd));
  };
  const handleMouseUp = () => { dragRef.current = null; };

  const makeDirac = () => {
    const threshold = Math.ceil(n / 2); let changed = true; const ne = [...edges];
    while (changed) {
      changed = false;
      const d = getDegrees(nodes, ne);
      for (let i = 0; i < n && !changed; i++) {
        if (d[i] < threshold) {
          for (let j = 0; j < n && !changed; j++) {
            if (i !== j && !ne.find(ed => (ed[0] === i && ed[1] === j) || (ed[0] === j && ed[1] === i))) {
              ne.push([i, j]); changed = true;
            }
          }
        }
      }
    }
    setEdges(ne); setSel(null);
  };

  const checkInput = () => {
    const d = degInput.split(',').map(s => parseInt(s.trim())).filter(x => !isNaN(x));
    if (!d.length) return '';
    const sum = d.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) return `<span style="color:#ef4444">Érvénytelen foksorozat (összeg páratlan)</span>`;
    const mn = Math.min(...d);
    const diracOk = mn >= d.length / 2;
    const minPair = d.slice().sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b, 0);
    const oreOk = minPair >= d.length;
    return `<div>n=${d.length}, min fok=${mn}, korlát=⌈n/2⌉=${Math.ceil(d.length / 2)}</div>
<div>Dirac: <strong style="color:${diracOk ? '#10b981' : '#ef4444'}">${diracOk ? '✓ Hamilton-kör garantált' : '✗ nem garantált'}</strong></div>
<div>Ore (legkisebb 2 fok összege=${minPair}≥n=${d.length}?): <strong style="color:${oreOk ? '#10b981' : '#f59e0b'}">${oreOk ? '✓ Hamilton-kör garantált' : '? Nem dönthető el egyértelműen'}</strong></div>`;
  };

  return (
    <div>
      <div className="info-box" style={{ marginBottom: '.5rem' }}>
        <span className="lbl" style={{ color: '#38bdf8' }}>Interaktív gráf — Dirac/Ore ellenőrzés</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.2rem', marginBottom: '.4rem' }}>
          {degs.map((d, i) => <span key={i} className="formula-chip">{String.fromCharCode(65 + i)}:{d}</span>)}
        </div>
        <div style={{ fontSize: '.83rem' }}>
          Dirac (min fok≥{Math.ceil(n / 2)}): <strong style={{ color: dirac ? '#10b981' : '#ef4444' }}>{dirac ? '✓ teljesül' : '✗ nem teljesül'}</strong>
          &nbsp;&nbsp;
          Ore (∑fok≥n): <strong style={{ color: ore ? '#10b981' : '#ef4444' }}>{ore ? '✓ teljesül' : '✗ nem teljesül'}</strong>
        </div>
      </div>
      <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.25rem 0' }}>Kattints két csúcsra az él ki-/bekapcsolásához. Húzd a csúcsokat!</p>
      <canvas ref={ref} width={480} height={300} style={{ width: '100%', maxWidth: 480, cursor: 'pointer' }}
        onClick={handleClick} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} />
      <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
        <button className="op-btn is-active" onClick={() => { setNodes(buildThmNodes()); setEdges(buildThmEdges()); setSel(null); }}>Visszaállít</button>
        <button className="op-btn" onClick={makeDirac}>Dirac-feltétel teljesítése</button>
      </div>
      <div className="info-box" style={{ marginTop: '.75rem' }}>
        <span className="lbl" style={{ color: '#38bdf8' }}>Feltétel-ellenőrző</span>
        <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.25rem 0' }}>Adj meg fokszámokat (vesszővel):</p>
        <input className="ila-text" style={{ width: '100%', marginBottom: '.4rem' }} value={degInput} onChange={e => setDegInput(e.target.value)} />
        <div dangerouslySetInnerHTML={{ __html: checkInput() }} style={{ fontSize: '.83rem' }} />
      </div>
    </div>
  );
}

// ─── TAB 3: Hamilton sandbox ──────────────────────────────────────────────────
const DODECA_NODES: NodeDef[] = [
  ...circleNodes(5, 240, 180, 140).map((n, i) => ({ ...n, label: String(i) })),
  ...circleNodes(5, 240, 180, 80).map((n, i) => ({ ...n, label: String(i + 5) })),
  ...circleNodes(5, 240, 180, 30).map((n, i) => ({ ...n, label: String(i + 10) })),
];
const DODECA_EDGES: Edge[] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 0],
  [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
  [5, 6], [6, 7], [7, 8], [8, 9], [9, 5],
  [5, 10], [6, 11], [7, 12], [8, 13], [9, 14],
  [10, 11], [11, 12], [12, 13], [13, 14], [14, 10],
];

const SB_PRESETS: Record<string, { nodes: NodeDef[]; edges: Edge[] }> = {
  K5: {
    nodes: circleNodes(5, 240, 180, 140),
    edges: (() => { const e: Edge[] = []; for (let i = 0; i < 5; i++) for (let j = i + 1; j < 5; j++) e.push([i, j]); return e; })(),
  },
  petersen: {
    nodes: [...circleNodes(5, 240, 180, 130), ...circleNodes(5, 240, 180, 55)],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9], [5, 7], [7, 9], [9, 6], [6, 8], [8, 5]],
  },
  dodeca: { nodes: DODECA_NODES, edges: DODECA_EDGES },
  bipartite: {
    nodes: [{ x: 80, y: 80, label: 'A' }, { x: 240, y: 80, label: 'B' }, { x: 400, y: 80, label: 'C' }, { x: 80, y: 250, label: 'D' }, { x: 240, y: 250, label: 'E' }, { x: 400, y: 250, label: 'F' }],
    edges: [[0, 3], [0, 4], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5]],
  },
};

function HamiltonSandbox() {
  const [graphName, setGraphName] = useState('K5');
  const [G, setG] = useState(SB_PRESETS.K5);
  const [path, setPath] = useState<number[]>([]);
  const [solveInfo, setSolveInfo] = useState('');
  const ref = useRef<HTMLCanvasElement>(null);

  const load = (name: string) => {
    const preset = SB_PRESETS[name] || SB_PRESETS.K5;
    const nodes = preset.nodes.map((n, i) => ({ ...n, label: n.label || String.fromCharCode(65 + i) }));
    setG({ nodes, edges: preset.edges.map(e => [...e] as Edge) });
    setGraphName(name); setPath([]); setSolveInfo('');
  };

  useEffect(() => { load('K5'); }, []);

  const hamEdges = new Set<string>();
  for (let i = 0; i < path.length - 1; i++) hamEdges.add(edgeKey(path[i], path[i + 1]));

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    drawGraph(ctx, G.nodes, G.edges, { hamPath: path, hamEdges });
  }, [G, path, hamEdges]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const hit = G.nodes.findIndex(n => Math.hypot(n.x - mx, n.y - my) < 18);
    if (hit < 0) return;
    if (path.length === 0) { setPath([hit]); return; }
    const last = path[path.length - 1];
    if (hit === last) return;
    if (path.includes(hit) && !(hit === path[0] && path.length === G.nodes.length)) return;
    if (!areAdjacent(G.edges, last, hit)) { setSolveInfo('<span style="color:#ef4444">Nincs él a két csúcs között!</span>'); return; }
    setPath(p => [...p, hit]); setSolveInfo('');
  };

  const complete = path.length === G.nodes.length;
  const closed = complete && areAdjacent(G.edges, path[0], path[path.length - 1]);
  let status = '';
  if (closed) status = '<span style="color:#10b981;font-size:1rem">Hamilton-kör! Minden csúcs pontosan egyszer, visszaért!</span>';
  else if (complete) status = '<span style="color:#38bdf8">✓ Hamilton-út! Minden csúcs pontosan egyszer.</span>';
  else if (path.length > 0) status = `<span style="color:#94a3b8">${path.length} / ${G.nodes.length} csúcs érintve</span>`;

  const solve = () => {
    const n = G.nodes.length;
    if (n > 15) { setSolveInfo('Túl nagy gráf a teljes kereséshez.'); return; }
    const adj = G.nodes.map((_, i) => G.edges.filter(e => e[0] === i || e[1] === i).map(e => e[0] === i ? e[1] : e[0]));
    const found: number[][] = [];
    function bt(path2: number[], visited: boolean[]) {
      if (path2.length === n) { if (adj[path2[path2.length - 1]].includes(path2[0])) { found.push([...path2, path2[0]]); } return; }
      if (found.length >= 1) return;
      for (const nb of adj[path2[path2.length - 1]]) {
        if (!visited[nb]) { visited[nb] = true; path2.push(nb); bt(path2, visited); path2.pop(); visited[nb] = false; }
      }
    }
    const vis = new Array(n).fill(false); vis[0] = true;
    bt([0], vis);
    if (found.length) { setPath(found[0].slice(0, -1)); setSolveInfo('<span style="color:#10b981">✓ Hamilton-kör megtalálva!</span>'); return; }
    // Try path
    for (let s = 0; s < n; s++) {
      const vis2 = new Array(n).fill(false); vis2[s] = true; const foundP: number[][] = [];
      function btp(p2: number[], vis3: boolean[]) {
        if (p2.length === n) { foundP.push([...p2]); return; }
        if (foundP.length >= 1) return;
        for (const nb of adj[p2[p2.length - 1]]) { if (!vis3[nb]) { vis3[nb] = true; p2.push(nb); btp(p2, vis3); p2.pop(); vis3[nb] = false; } }
      }
      btp([s], vis2);
      if (foundP.length) { setPath(foundP[0]); setSolveInfo('<span style="color:#38bdf8">✓ Hamilton-út megtalálva (kör nincs)</span>'); return; }
    }
    setSolveInfo('<span style="color:#ef4444">✗ Nincs Hamilton-kör és nincs Hamilton-út sem.</span>');
  };

  return (
    <div>
      <div className="op-row">
        {[['K5', 'K₅'], ['petersen', 'Petersen'], ['dodeca', 'Dodekaéder'], ['bipartite', 'Páros']].map(([k, label]) => (
          <button key={k} className={`op-btn${graphName === k ? ' is-active' : ''}`} onClick={() => load(k)}>{label}</button>
        ))}
      </div>
      {status && <div style={{ fontSize: '.84rem', fontWeight: 600, marginBottom: '.4rem' }} dangerouslySetInnerHTML={{ __html: status }} />}
      {path.length > 0 && <div style={{ fontSize: '.8rem', fontFamily: 'monospace', color: '#7dd3fc', marginBottom: '.4rem' }}>Út: {path.map(i => G.nodes[i].label).join(' → ')}</div>}
      <canvas ref={ref} width={480} height={360} style={{ width: '100%', maxWidth: 480, cursor: 'pointer' }} onClick={handleClick} />
      {solveInfo && <div style={{ fontSize: '.8rem', marginTop: '.4rem' }} dangerouslySetInnerHTML={{ __html: solveInfo }} />}
      <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
        <button className="op-btn is-active" onClick={() => { setPath(p => p.slice(0, -1)); }}>← Vissza</button>
        <button className="op-btn" onClick={() => { setPath([]); setSolveInfo(''); }}>Újra</button>
        <button className="op-btn" onClick={solve}>Megoldás ▶</button>
      </div>
    </div>
  );
}

// ─── TAB 4: Hypercube & Gray codes ───────────────────────────────────────────
function grayCode(n: number): number[] {
  if (n === 0) return [0];
  const prev = grayCode(n - 1);
  return [...prev, ...[...prev].reverse().map(x => x | (1 << (n - 1)))];
}

function HypercubeCanvas() {
  const [n, setN] = useState(3);
  const ref = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const size = 1 << n;

    const positions: { x: number; y: number }[] = [];
    if (n === 1) {
      positions.push({ x: W / 2 - 80, y: H / 2 }, { x: W / 2 + 80, y: H / 2 });
    } else if (n === 2) {
      positions.push({ x: W / 2 - 80, y: H / 2 - 70 }, { x: W / 2 + 80, y: H / 2 - 70 }, { x: W / 2 - 80, y: H / 2 + 70 }, { x: W / 2 + 80, y: H / 2 + 70 });
    } else if (n === 3) {
      const d = 110, s = 65;
      [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0], [1, 0], [1, 1], [0, 1]].forEach(([gx, gy], i) => {
        const off = i < 4 ? 0 : 1;
        positions.push({ x: W / 2 - d / 2 + gx * d + off * s, y: H / 2 - d / 2 + gy * d - off * s });
      });
    } else { // n=4
      const d = 80, s = 40;
      for (let i = 0; i < 16; i++) {
        const b = [...Array(4)].map((_, bit) => (i >> bit) & 1);
        positions.push({ x: W / 2 - d + b[0] * d + b[2] * s - 20, y: H / 2 - d + b[1] * d + b[3] * s - 10 });
      }
    }

    for (let i = 0; i < size; i++) {
      for (let bit = 0; bit < n; bit++) {
        const j = i ^ (1 << bit);
        if (j > i) {
          ctx.beginPath(); ctx.moveTo(positions[i].x, positions[i].y); ctx.lineTo(positions[j].x, positions[j].y);
          ctx.strokeStyle = '#334155'; ctx.lineWidth = 1.5; ctx.stroke();
        }
      }
    }

    const gray = grayCode(n);
    for (let t = 0; t < gray.length; t++) {
      const a = gray[t], b2 = gray[(t + 1) % gray.length];
      ctx.beginPath(); ctx.moveTo(positions[a].x, positions[a].y); ctx.lineTo(positions[b2].x, positions[b2].y);
      ctx.strokeStyle = `hsl(${t * 360 / gray.length},90%,65%)`; ctx.lineWidth = 3; ctx.stroke();
    }

    for (let i = 0; i < size; i++) {
      const order = gray.indexOf(i), p = positions[i];
      ctx.beginPath(); ctx.arc(p.x, p.y, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#0a0d14'; ctx.fill();
      ctx.strokeStyle = `hsl(${order * 360 / size},80%,60%)`; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = `hsl(${order * 360 / size},80%,75%)`;
      ctx.font = '9px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(i.toString(2).padStart(n, '0'), p.x, p.y);
    }
  }, [n]);

  useEffect(() => { draw(); }, [draw]);

  const gray = grayCode(n);
  const size = 1 << n;

  return (
    <div>
      <div className="info-box" style={{ marginBottom: '.5rem' }}>
        <span className="lbl" style={{ color: '#38bdf8' }}>Gray-kód sorozat</span>
        <div style={{ fontSize: '.82rem', color: '#94a3b8', marginBottom: '.4rem' }}>
          n = <input type="number" className="ila-num" min={1} max={4} value={n} onChange={e => setN(Math.max(1, Math.min(4, +e.target.value)))} />
          &nbsp;&nbsp;{size} csúcs · {size * n / 2} él · {n}-reguláris · átmérő={n}
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '.82rem', lineHeight: 2 }}>
          {gray.map((g, t) => {
            const bits = g.toString(2).padStart(n, '0').split('');
            const prev = t > 0 ? gray[t - 1].toString(2).padStart(n, '0') : '';
            return (
              <div key={t}>
                <span style={{ color: '#334155', marginRight: '.3rem' }}>{String(t).padStart(2, '0')}:</span>
                {bits.map((b, bi) => (
                  <span key={bi} style={{ display: 'inline-block', width: '1.2rem', textAlign: 'center', fontWeight: 700, color: prev && prev[bi] !== b ? '#f97316' : '#7dd3fc' }}>{b}</span>
                ))}
                <span style={{ color: '#334155', fontSize: '.7rem', marginLeft: '.3rem' }}>= {g}</span>
              </div>
            );
          })}
        </div>
      </div>
      <canvas ref={ref} width={480} height={360} style={{ width: '100%', maxWidth: 480 }} />
      <div style={{ fontSize: '.8rem', color: '#94a3b8', marginTop: '.4rem' }}>
        Gray-kód: {gray.map(g => g.toString(2).padStart(n, '0')).join(' → ')} → (vissza: {gray[0].toString(2).padStart(n, '0')})
      </div>
    </div>
  );
}

// ─── TAB 5: Knight's Tour ────────────────────────────────────────────────────
const KNIGHT_MOVES = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];

function KnightTour() {
  const [size, setSize] = useState(8);
  const [visited, setVisited] = useState<number[][]>(() => Array.from({ length: 8 }, () => new Array(8).fill(0)));
  const [current, setCurrent] = useState<[number, number] | null>(null);
  const [order, setOrder] = useState<[number, number][]>([]);
  const [status, setStatus] = useState('Kattints egy mezőre a huszár elhelyezéséhez.');

  const reset = useCallback((sz?: number) => {
    const s = sz ?? size;
    setVisited(Array.from({ length: s }, () => new Array(s).fill(0)));
    setCurrent(null); setOrder([]);
    setStatus('Kattints egy mezőre a huszár elhelyezéséhez.');
  }, [size]);

  const valid = (r: number, c: number, s: number) => r >= 0 && r < s && c >= 0 && c < s;
  const canReach = (r: number, c: number) => {
    if (!current) return false;
    return KNIGHT_MOVES.some(([dr, dc]) => current[0] + dr === r && current[1] + dc === c) && visited[r][c] === 0;
  };
  const canKnightMove = (r1: number, c1: number, r2: number, c2: number) => {
    const dr = Math.abs(r1 - r2), dc = Math.abs(c1 - c2);
    return (dr === 1 && dc === 2) || (dr === 2 && dc === 1);
  };

  const handleCellClick = (r: number, c: number) => {
    if (!current) {
      const nv = visited.map(row => [...row]); nv[r][c] = 1;
      setVisited(nv); setCurrent([r, c]); setOrder([[r, c]]);
      setStatus('Huszár elhelyezve. Kattints a következő mezőre.');
    } else {
      if (!canReach(r, c)) { setStatus('Nem elérhető lépés!'); return; }
      const nv = visited.map(row => [...row]); nv[r][c] = order.length + 1;
      const no = [...order, [r, c] as [number, number]];
      setVisited(nv); setCurrent([r, c]); setOrder(no);
      if (no.length === size * size) {
        const [fr, fc] = no[0], [lr, lc] = no[no.length - 1];
        if (canKnightMove(fr, fc, lr, lc)) setStatus('Hamilton-kör! Visszatér a kezdőmezőre.');
        else setStatus('Hamilton-út! Minden mező érintve.');
      } else { setStatus(`${no.length} / ${size * size} mező`); }
    }
  };

  const solve = () => {
    const sz = size;
    const v = Array.from({ length: sz }, () => new Array(sz).fill(0));
    const ord: [number, number][] = [];
    function degree(r: number, c: number) { return KNIGHT_MOVES.filter(([dr, dc]) => valid(r + dr, c + dc, sz) && v[r + dr][c + dc] === 0).length; }
    let r = 0, c = 0; v[r][c] = 1; ord.push([r, c]);
    for (let step = 2; step <= sz * sz; step++) {
      const moves = KNIGHT_MOVES.map(([dr, dc]) => [r + dr, c + dc] as [number, number]).filter(([nr, nc]) => valid(nr, nc, sz) && v[nr][nc] === 0);
      if (!moves.length) break;
      moves.sort((a, b) => degree(a[0], a[1]) - degree(b[0], b[1]));
      [r, c] = moves[0]; v[r][c] = step; ord.push([r, c]);
    }
    setVisited(v); setCurrent([r, c]); setOrder(ord);
    const done = ord.length === sz * sz;
    const [fr, fc] = ord[0], [lr, lc] = ord[ord.length - 1];
    const closes = done && canKnightMove(fr, fc, lr, lc);
    setStatus(done ? (closes ? '✓ Warnsdorff: Hamilton-kör!' : '✓ Warnsdorff: Hamilton-út!') : 'Warnsdorff nem talált teljes megoldást ettől a pozíciótól.');
  };

  const cellSz = Math.min(44, Math.floor(320 / size));

  return (
    <div>
      <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center', marginBottom: '.5rem', flexWrap: 'wrap', fontSize: '.82rem' }}>
        <span>Tábla: <select className="ila-select" value={size} onChange={e => { const s = +e.target.value; setSize(s); reset(s); }}>
          <option value={5}>5×5</option><option value={6}>6×6</option><option value={8}>8×8</option>
        </select></span>
        <button className="op-btn is-active" onClick={solve}>Warnsdorff ▶</button>
        <button className="op-btn" onClick={() => reset()}>Töröl</button>
      </div>
      <div style={{ fontSize: '.84rem', marginBottom: '.4rem', color: status.includes('✓') ? '#10b981' : status.includes('Hamilton') ? '#38bdf8' : '#94a3b8' }}>{status}</div>
      <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.25rem 0' }}>Kattints egy mezőre a huszár elhelyezéséhez / kézi léptetéséhez.</p>
      <div style={{ display: 'inline-block', lineHeight: 0 }}>
        {Array.from({ length: size }, (_, r) => (
          <div key={r} style={{ display: 'flex' }}>
            {Array.from({ length: size }, (_, c) => {
              const step = visited[r][c];
              const isCurrent = current?.[0] === r && current?.[1] === c;
              const isReachable = canReach(r, c);
              const isLight = (r + c) % 2 === 0;
              const bg = isCurrent ? '#fbbf24' : step > 0 ? `hsl(${step * 360 / size ** 2},70%,35%)` : isReachable ? 'rgba(56,189,248,.18)' : isLight ? '#1e2d3e' : '#0e1520';
              const color = isCurrent ? '#000' : step > 0 ? '#fff' : '#64748b';
              const border = isCurrent ? '2px solid #fbbf24' : isReachable ? '1px solid rgba(56,189,248,.4)' : '1px solid #1a2535';
              return (
                <div key={c}
                  style={{ width: cellSz, height: cellSz, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: cellSz * 0.35, fontWeight: 700, borderRadius: 4, cursor: 'pointer', background: bg, color, border, userSelect: 'none', transition: 'background .12s' }}
                  onClick={() => handleCellClick(r, c)}>
                  {step > 0 ? step : isCurrent ? '♞' : ''}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Static theory ────────────────────────────────────────────────────────────
const t1 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Alapfogalmak</h5>
<div class="def-box"><div class="box-body"><strong>Hamilton-út:</strong> a gráf minden csúcsát pontosan egyszer érintő egyszerű út.</div></div>
<div class="def-box"><div class="box-body"><strong>Hamilton-kör:</strong> Hamilton-út, amelynek kezdő- és végpontja azonos (zárt bejárás).</div></div>
<div class="thm-box"><div class="box-body"><strong>NP-teljesség:</strong> A Hamilton-kör keresése NP-teljes — jelenleg csak \(\mathcal{O}(2^n)\) algoritmusok ismertek. Éles különbség az Euler-köröktől (amelyek \(\mathcal{O}(|E|)\) időben megtalálhatók)!</div></div>
<div class="ex-box"><div class="box-body"><strong>Történet:</strong> William Rowan Hamilton, 1857. A dodekaéder csúcsaira mint „városokra" épülő „Icosian Game" — minden várost pontosan egyszer érintve körbe kell járni.</div></div>
<div class="thm-box"><div class="box-body"><strong>Kizáró feltétel (elvágó csúcsok):</strong> Ha \(k\) csúcs elhagyásával a gráf \(>k\) komponensre esik, <strong>nincs Hamilton-kör</strong>.</div></div>`;

const t2 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Elégséges feltételek</h5>
<div class="thm-box"><div class="box-body"><strong>Dirac tétele (1952):</strong> Ha \(|V|\ge 3\) és minden \(v\in V\) csúcsra \(\delta(v)\ge\dfrac{|V|}{2}\), akkor van Hamilton-kör.</div></div>
<div class="thm-box"><div class="box-body"><strong>Ore tétele (1960):</strong> Ha minden nem szomszédos \(u,v\) párra \(\delta(u)+\delta(v)\ge|V|\), akkor van Hamilton-kör.</div></div>
<div class="def-box"><div class="box-body">Dirac ⊆ Ore (Dirac feltétele erősebb). Mindkettő csak elégséges, nem szükséges!</div></div>
<div class="ex-box"><div class="box-body">Egyéb tételek: <strong>Pósa</strong>, <strong>Tutte</strong> (minden 4-összefüggő síkgráfnak van Hamilton-köre), <strong>Erdős–Pósa</strong>.</div></div>`;

const t3 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Hamilton-kereső játéktér</h5>
<div class="info-box"><div class="box-body">Kattints csúcsokra sorban a Hamilton-út/kör próbálásához. A „Megoldás ▶" gomb visszalépéses algoritmussal keres (max 15 csúcs).</div></div>`;

const t4 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">n-dimenziós kockagráf \(H_n\)</h5>
<div class="def-box"><div class="box-body">Csúcsok: az összes \(n\)-bites bináris sorozat (\(2^n\) db).<br>Élek: két csúcs szomszédos \(\Leftrightarrow\) pontosan 1 bitben térnek el.</div></div>
<div class="thm-box"><div class="box-body">\(H_n\) tulajdonságai: \(n\)-reguláris, kétpólusú, átmérő \(=n\), \(n\ge 2\) esetén <strong>van Hamilton-kör</strong>.</div></div>
<div class="def-box"><div class="box-body"><strong>Gray-kód:</strong> a \(2^n\) bináris sorozat olyan sorrendbe rendezése, ahol egymás utáni szomszédok pontosan 1 bitben különböznek. Pontosan a \(H_n\) Hamilton-körjének csúcssorrendje!</div></div>
<div class="ex-box"><div class="box-body"><strong>Alkalmazás:</strong> rotációs kódolók (pl. szervomotor-pozíció). Bitváltásnál csak 1 vezéték változik → nincs téves közbenső érték.</div></div>`;

const t5 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Huszárvándorlás</h5>
<div class="def-box"><div class="box-body">Egy \(n\times n\)-es sakktáblán a huszár minden mezőt pontosan egyszer látogat meg — ez egy Hamilton-út (vagy kör) a huszár lépéseinek gráfjában.</div></div>
<div class="thm-box"><div class="box-body"><strong>Warnsdorff heurisztikája (1823):</strong> Minden lépésnél válaszd azt a mezőt, amelyről a legkevesebb továbblépési lehetőség adódik. Ez \(\mathcal{O}(n^2)\) időben ad megoldást!</div></div>
<div class="ex-box"><div class="box-body">\(5\times5\)-ös tábla: létezik Hamilton-kör.<br>\(4\times4\)-es: csak Hamilton-út lehetséges (páros méretű tábla, páros kétpólusú gráf).</div></div>`;

const TABS: Tab[] = [
  { id: 'def', label: 'Definíciók', content: <Cols variant="7-5"><DefCanvas /><RichTex html={t1} /></Cols> },
  { id: 'theorems', label: 'Dirac & Ore', content: <Cols variant="7-5"><DiracOreCanvas /><RichTex html={t2} /></Cols> },
  { id: 'sandbox', label: 'Hamilton-kereső', content: <Cols variant="7-5"><HamiltonSandbox /><RichTex html={t3} /></Cols> },
  { id: 'hypercube', label: 'Kockagráf & Gray', content: <Cols variant="7-5"><HypercubeCanvas /><RichTex html={t4} /></Cols> },
  { id: 'knight', label: 'Huszárvándorlás', content: <Cols variant="7-5"><KnightTour /><RichTex html={t5} /></Cols> },
];

export default function DimatCh11() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika · II.3. fejezet</p>
      <h1 className="ila__title">Hamilton-utak és -körök</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
