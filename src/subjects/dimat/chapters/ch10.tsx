import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, Cols, type Tab } from '../../ila/components/kit';

// ─── Types ───────────────────────────────────────────────────────────────────
type NodeDef = { x: number; y: number; label?: string; removed?: boolean };
type Edge = [number, number, number?]; // [a, b, weight?]

function edgeKey(a: number, b: number) { return `${Math.min(a, b)},${Math.max(a, b)}`; }

function getDegrees(nodes: NodeDef[], edges: Edge[], removedEdges = new Set<number>()) {
  return nodes.map((_, i) => edges.filter((e, j) => !removedEdges.has(j) && (e[0] === i || e[1] === i)).length);
}

function countComponents(nodes: NodeDef[], edges: Edge[], removedEdges: Set<number>) {
  const active = nodes.map((_, i) => i).filter(i => !nodes[i].removed);
  if (!active.length) return 0;
  const visited = new Set<number>(); let comps = 0;
  active.forEach(start => {
    if (visited.has(start)) return;
    comps++;
    const q = [start]; visited.add(start);
    while (q.length) {
      const v = q.shift()!;
      edges.forEach((e, j) => {
        if (removedEdges.has(j)) return;
        if (e[0] === v && !visited.has(e[1]) && !nodes[e[1]].removed) { visited.add(e[1]); q.push(e[1]); }
        if (e[1] === v && !visited.has(e[0]) && !nodes[e[0]].removed) { visited.add(e[0]); q.push(e[0]); }
      });
    }
  });
  return comps;
}

function isBridgeEdge(nodes: NodeDef[], edges: Edge[], removedEdges: Set<number>, edgeIdx: number) {
  function connected(excluded: number) {
    const active = nodes.map((_, i) => i).filter(i => !nodes[i].removed);
    if (!active.length) return true;
    const start = active[0]; const visited = new Set([start]); const q = [start];
    while (q.length) {
      const v = q.shift()!;
      edges.forEach((e, j) => {
        if (removedEdges.has(j) || j === excluded) return;
        if (e[0] === v && !visited.has(e[1]) && !nodes[e[1]].removed) { visited.add(e[1]); q.push(e[1]); }
        if (e[1] === v && !visited.has(e[0]) && !nodes[e[0]].removed) { visited.add(e[0]); q.push(e[0]); }
      });
    }
    return active.every(i => visited.has(i));
  }
  if (removedEdges.has(edgeIdx)) return false;
  return connected(-1) && !connected(edgeIdx);
}

// ─── Shared graph draw ───────────────────────────────────────────────────────
const TRAIL_COLORS = ['#f97316', '#38bdf8', '#10b981', '#a78bfa', '#f43f5e', '#fbbf24', '#34d399', '#fb923c'];

function drawGraphCtx(
  ctx: CanvasRenderingContext2D,
  nodes: NodeDef[],
  edges: Edge[],
  opts: {
    usedEdges?: Set<number>; currentNode?: number; trail?: number[];
    bridgeEdges?: Set<number>; removedEdges?: Set<number>;
    weights?: boolean; selNode?: number; edgeColors?: Record<number, string>;
  } = {},
) {
  const { usedEdges = new Set(), currentNode = -1, trail = [], bridgeEdges = new Set(), removedEdges = new Set(), weights = false, selNode = -1 } = opts;
  const W = ctx.canvas.width, H = ctx.canvas.height;
  ctx.clearRect(0, 0, W, H);

  edges.forEach((e, i) => {
    if (removedEdges.has(i)) return;
    const [a, b, w] = e;
    const na = nodes[a], nb = nodes[b];
    const parallels = edges.filter((e2, j) => !removedEdges.has(j) && ((e2[0] === a && e2[1] === b) || (e2[0] === b && e2[1] === a)));
    const pidx = parallels.indexOf(e);
    const dx = nb.x - na.x, dy = nb.y - na.y, len = Math.sqrt(dx * dx + dy * dy) || 1;
    const offset = parallels.length > 1 ? (pidx - (parallels.length - 1) / 2) * 16 : 0;
    const nx = -dy / len * offset, ny = dx / len * offset;
    const trailIdx = trail.indexOf(i);
    const used = usedEdges.has(i);
    const isBridge = bridgeEdges.has(i);
    const eColor = used ? '#1e2533' : isBridge ? '#ef4444' : '#475569';
    const eWidth = trailIdx >= 0 ? 3.5 : used ? 1 : 2;

    ctx.beginPath();
    if (parallels.length > 1) {
      ctx.moveTo(na.x + nx, na.y + ny);
      ctx.quadraticCurveTo((na.x + nb.x) / 2 + nx * 1.5, (na.y + nb.y) / 2 + ny * 1.5, nb.x + nx, nb.y + ny);
    } else {
      ctx.moveTo(na.x, na.y); ctx.lineTo(nb.x, nb.y);
    }
    ctx.strokeStyle = trailIdx >= 0 ? TRAIL_COLORS[trailIdx % TRAIL_COLORS.length] : eColor;
    ctx.lineWidth = eWidth;
    ctx.setLineDash(used && trailIdx < 0 ? [3, 3] : []);
    ctx.stroke(); ctx.setLineDash([]);

    if (weights && w !== undefined) {
      const mx2 = (na.x + nb.x) / 2 + nx * 0.7, my2 = (na.y + nb.y) / 2 + ny * 0.7;
      ctx.fillStyle = '#94a3b8'; ctx.font = '10px monospace'; ctx.textAlign = 'center';
      ctx.fillText(String(w), mx2, my2 - 6);
    }
  });

  nodes.forEach((n, i) => {
    if (n.removed) return;
    const deg = edges.filter((e, j) => !removedEdges.has(j) && (e[0] === i || e[1] === i)).length;
    const isOdd = deg % 2 !== 0;
    ctx.beginPath(); ctx.arc(n.x, n.y, 15, 0, Math.PI * 2);
    ctx.fillStyle = '#12161f'; ctx.fill();
    ctx.strokeStyle = i === currentNode || i === selNode ? '#fbbf24' : isOdd ? '#f59e0b' : '#38bdf8';
    ctx.lineWidth = i === currentNode || i === selNode ? 3 : 2; ctx.stroke();
    ctx.fillStyle = i === currentNode ? '#fbbf24' : isOdd ? '#fbbf24' : '#7dd3fc';
    ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(n.label || String(i), n.x, n.y);
  });
}

// ─── TAB 1: Definition examples ─────────────────────────────────────────────
const DEF_GRAPHS: Record<string, { nodes: NodeDef[]; edges: Edge[]; trail: number[]; info: string; startNode: number }> = {
  circuit: {
    nodes: [{ x: 80, y: 140 }, { x: 200, y: 50 }, { x: 320, y: 140 }, { x: 400, y: 80 }, { x: 400, y: 200 }, { x: 200, y: 230 }],
    edges: [[0, 1], [1, 2], [2, 0], [2, 3], [3, 4], [4, 2], [0, 5], [5, 2]],
    trail: [0, 1, 7, 2, 3, 4, 5, 6],
    info: 'Euler-kör: minden csúcs fokszáma páros → létezik. Az út visszatér a kiindulópontba.',
    startNode: 0,
  },
  path: {
    nodes: [{ x: 60, y: 140 }, { x: 160, y: 60 }, { x: 280, y: 60 }, { x: 420, y: 140 }, { x: 280, y: 220 }, { x: 160, y: 220 }],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 1], [2, 4], [1, 3]],
    trail: [0, 1, 5, 4, 6, 2, 3, 7],
    info: 'Euler-út (nem kör): pontosan 2 páratlan fokszámú csúcs van. Az út köztük vezet.',
    startNode: 0,
  },
  none: {
    nodes: [{ x: 100, y: 100 }, { x: 380, y: 100 }, { x: 100, y: 220 }, { x: 380, y: 220 }],
    edges: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]],
    trail: [],
    info: '4 páratlan fokszámú csúcs (mind fok=3) → sem Euler-kör, sem Euler-út nem létezik!',
    startNode: -1,
  },
};

function DefGraphCanvas() {
  const [type, setType] = useState<keyof typeof DEF_GRAPHS>('circuit');
  const ref = useRef<HTMLCanvasElement>(null);
  const G = DEF_GRAPHS[type];

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    drawGraphCtx(ctx, G.nodes, G.edges, { currentNode: G.startNode, trail: G.trail });
  }, [type]);

  const segs = G.trail.map((ei, t) => {
    const e = G.edges[ei];
    return `<span style="background:${TRAIL_COLORS[t % TRAIL_COLORS.length]}22;border:1px solid ${TRAIL_COLORS[t % TRAIL_COLORS.length]}66;color:${TRAIL_COLORS[t % TRAIL_COLORS.length]};display:inline-block;padding:.1rem .4rem;border-radius:4px;font-family:monospace;font-size:.8rem;margin:.1rem">${e[0]}→${e[1]}</span>`
  }).join(' ');

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#38bdf8' }}>Euler-kör és -út szemléltetés</span>
      <div className="op-row">
        <button className={`op-btn${type === 'circuit' ? ' is-active' : ''}`} onClick={() => setType('circuit')}>Euler-kör ✓</button>
        <button className={`op-btn${type === 'path' ? ' is-active' : ''}`} onClick={() => setType('path')}>Euler-út ✓</button>
        <button className={`op-btn${type === 'none' ? ' is-active' : ''}`} onClick={() => setType('none')}>Sem kör, sem út</button>
      </div>
      <canvas ref={ref} width={480} height={280} style={{ width: '100%', maxWidth: 480 }} />
      <div style={{ fontSize: '.82rem', color: '#94a3b8', marginTop: '.4rem' }}>{G.info}</div>
      {G.trail.length > 0
        ? <div style={{ marginTop: '.4rem', lineHeight: 2 }} dangerouslySetInnerHTML={{ __html: 'Bejárás: ' + segs }} />
        : <div style={{ color: '#ef4444', fontSize: '.8rem', marginTop: '.4rem' }}>Nincs Euler-út / -kör ebben a gráfban.</div>}
    </div>
  );
}

// ─── TAB 2: Euler degree checker ─────────────────────────────────────────────
function buildEulerNodes(): NodeDef[] {
  return [{ x: 80, y: 80 }, { x: 240, y: 50 }, { x: 400, y: 80 }, { x: 400, y: 240 }, { x: 240, y: 270 }, { x: 80, y: 240 }, { x: 240, y: 160 }];
}

function EulerChecker() {
  const [nodes, setNodes] = useState(buildEulerNodes);
  const [edges, setEdges] = useState<Edge[]>([[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 6], [1, 6], [6, 4]]);
  const [sel, setSel] = useState<number | null>(null);
  const [degInput, setDegInput] = useState('2,4,2,4,2');
  const ref = useRef<HTMLCanvasElement>(null);

  const degs = getDegrees(nodes, edges);
  const odds = degs.filter(d => d % 2 !== 0).length;

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    drawGraphCtx(ctx, nodes, edges, { selNode: sel ?? -1 });
  }, [nodes, edges, sel]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const hit = nodes.findIndex(n => Math.hypot(n.x - mx, n.y - my) < 18);
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

  const makeAllEven = () => {
    const d = getDegrees(nodes, edges);
    const oddIdxs = d.map((x, i) => i).filter(i => d[i] % 2 !== 0);
    const ne = [...edges];
    for (let i = 0; i < oddIdxs.length - 1; i += 2) {
      if (!ne.find(ed => (ed[0] === oddIdxs[i] && ed[1] === oddIdxs[i + 1]) || (ed[0] === oddIdxs[i + 1] && ed[1] === oddIdxs[i])))
        ne.push([oddIdxs[i], oddIdxs[i + 1]]);
    }
    setEdges(ne); setSel(null);
  };

  const checkDegInput = () => {
    const d = degInput.split(',').map(s => parseInt(s.trim())).filter(x => !isNaN(x));
    const sum = d.reduce((a, b) => a + b, 0);
    const o = d.filter(x => x % 2 !== 0).length;
    const chips = d.map(x => `<span style="display:inline-block;background:${x % 2 !== 0 ? 'rgba(245,158,11,.12)' : 'rgba(16,185,129,.1)'};border:1px solid ${x % 2 !== 0 ? '#f59e0b' : '#10b981'};color:${x % 2 !== 0 ? '#fbbf24' : '#34d399'};border-radius:5px;padding:.12rem .5rem;font-size:.78rem;font-family:monospace;margin:.1rem">${x}</span>`).join('');
    let verdict = '';
    if (sum % 2 !== 0) verdict = '<span style="color:#ef4444">✗ Érvénytelen foksorozat (összeg nem páros)</span>';
    else if (o === 0) verdict = '<span style="color:#10b981;font-weight:600">✓ Euler-kör létezhet (0 páratlan fokú csúcs)</span>';
    else if (o === 2) verdict = '<span style="color:#38bdf8;font-weight:600">✓ Euler-út létezhet (2 páratlan fokú csúcs)</span>';
    else verdict = `<span style="color:#ef4444;font-weight:600">✗ Nincs Euler-út/kör (${o} páratlan fokú csúcs)</span>`;
    return { chips, verdict, sum, edges: sum / 2 };
  };

  const ci = checkDegInput();

  let graphVerdict = '';
  if (odds === 0) graphVerdict = '<span style="color:#10b981">✓ Euler-kör létezik (0 páratlan fokú csúcs)</span>';
  else if (odds === 2) graphVerdict = '<span style="color:#38bdf8">✓ Euler-út létezik (2 páratlan fokú csúcs)</span>';
  else graphVerdict = `<span style="color:#ef4444">✗ Sem Euler-kör, sem -út (${odds} páratlan fokú csúcs)</span>`;

  return (
    <div>
      <div className="info-box" style={{ marginBottom: '.5rem' }}>
        <span className="lbl" style={{ color: '#38bdf8' }}>Fokszám-vizsgáló</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.2rem', marginBottom: '.4rem' }}>
          {degs.map((d, i) => <span key={i} className={`formula-chip`} style={{ borderColor: d % 2 !== 0 ? '#f59e0b' : '#10b981', color: d % 2 !== 0 ? '#fbbf24' : '#34d399' }}>{i}:{d}</span>)}
        </div>
        <div dangerouslySetInnerHTML={{ __html: graphVerdict }} />
      </div>
      <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.25rem 0' }}>Kattints két csúcsra az él ki-/bekapcsolásához.</p>
      <canvas ref={ref} width={480} height={300} style={{ width: '100%', maxWidth: 480, cursor: 'pointer' }} onClick={handleClick} />
      <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
        <button className="op-btn is-active" onClick={() => { setNodes(buildEulerNodes()); setEdges([[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 6], [1, 6], [6, 4]]); setSel(null); }}>Visszaállít</button>
        <button className="op-btn" onClick={makeAllEven}>Páros fokú legyen</button>
      </div>
      <div className="info-box" style={{ marginTop: '.75rem' }}>
        <span className="lbl" style={{ color: '#38bdf8' }}>Interaktív feltétel-ellenőrző</span>
        <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.25rem 0' }}>Adj meg egy foksorozatot (vesszővel elválasztva):</p>
        <input className="ila-text" style={{ width: '100%', marginBottom: '.4rem' }} value={degInput} onChange={e => setDegInput(e.target.value)} />
        <div dangerouslySetInnerHTML={{ __html: ci.chips }} />
        <div style={{ marginTop: '.4rem', color: '#94a3b8', fontSize: '.82rem' }}>∑fokszám = {ci.sum} → élek száma = {ci.edges}</div>
        <div style={{ marginTop: '.25rem' }} dangerouslySetInnerHTML={{ __html: ci.verdict }} />
      </div>
    </div>
  );
}

// ─── TAB 3: Fleury algorithm ─────────────────────────────────────────────────
const FLEURY_GRAPHS: Record<string, { nodes: NodeDef[]; edges: Edge[] }> = {
  K4: { nodes: [{ x: 120, y: 100 }, { x: 360, y: 100 }, { x: 360, y: 240 }, { x: 120, y: 240 }], edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2], [1, 3]] },
  K33: { nodes: [{ x: 80, y: 80 }, { x: 240, y: 80 }, { x: 400, y: 80 }, { x: 80, y: 240 }, { x: 240, y: 240 }, { x: 400, y: 240 }], edges: [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]] },
  house: { nodes: [{ x: 240, y: 40 }, { x: 80, y: 160 }, { x: 400, y: 160 }, { x: 120, y: 280 }, { x: 360, y: 280 }], edges: [[0, 1], [0, 2], [1, 2], [1, 3], [2, 4], [3, 4], [1, 4], [2, 3]] },
  path_graph: { nodes: [{ x: 60, y: 160 }, { x: 160, y: 80 }, { x: 280, y: 80 }, { x: 400, y: 160 }, { x: 400, y: 240 }, { x: 160, y: 240 }], edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [1, 4], [2, 5], [0, 3]] },
};

function FleuryCanvas() {
  const [graphName, setGraphName] = useState('K4');
  const [gNodes, setGNodes] = useState<NodeDef[]>([...FLEURY_GRAPHS.K4.nodes.map(n => ({ ...n }))]);
  const [gEdges, setGEdges] = useState<Edge[]>([...FLEURY_GRAPHS.K4.edges.map(e => [...e] as Edge)]);
  const [removed, setRemoved] = useState(new Set<number>());
  const [trail, setTrail] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const ref = useRef<HTMLCanvasElement>(null);

  const loadGraph = (name: string) => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    const G = FLEURY_GRAPHS[name];
    const nodes = G.nodes.map(n => ({ ...n }));
    const edges = G.edges.map(e => [...e] as Edge);
    setGNodes(nodes); setGEdges(edges); setGraphName(name);
    const degs = getDegrees(nodes, edges);
    const odds = degs.map((d, i) => i).filter(i => degs[i] % 2 !== 0);
    setCurrent(odds.length ? odds[0] : 0);
    setRemoved(new Set()); setTrail([]); setDone(false);
  };

  useEffect(() => { loadGraph('K4'); }, []);

  const bridges = new Set<number>();
  gEdges.forEach((_, i) => { if (!removed.has(i) && isBridgeEdge(gNodes, gEdges, removed, i)) bridges.add(i); });

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    drawGraphCtx(ctx, gNodes, gEdges, { usedEdges: removed, removedEdges: removed, currentNode: current, bridgeEdges: bridges, trail });
  }, [gNodes, gEdges, removed, current, trail, bridges]);

  const step = useCallback(() => {
    const remaining = gEdges.map((_, i) => i).filter(i => !removed.has(i));
    if (!remaining.length) { setDone(true); return; }
    const incident = remaining.filter(i => gEdges[i][0] === current || gEdges[i][1] === current);
    if (!incident.length) { setDone(true); return; }
    const nonBridges = incident.filter(i => !isBridgeEdge(gNodes, gEdges, removed, i));
    const choice = nonBridges.length ? nonBridges[0] : incident[0];
    const e = gEdges[choice];
    const next = e[0] === current ? e[1] : e[0];
    const nr = new Set(removed); nr.add(choice);
    setRemoved(nr); setTrail(t => [...t, choice]); setCurrent(next);
  }, [gNodes, gEdges, removed, current]);

  const autoPlay = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; return; }
    timerRef.current = setInterval(() => {
      const remaining = gEdges.map((_, i) => i).filter(i => !removed.has(i));
      if (!remaining.length) { clearInterval(timerRef.current!); timerRef.current = null; return; }
      step();
    }, 700);
  };

  const remaining = gEdges.filter((_, i) => !removed.has(i)).length;
  const segs = trail.map((ei, t) => {
    const e = gEdges[ei];
    return `<span style="background:${TRAIL_COLORS[t % TRAIL_COLORS.length]}22;border:1px solid ${TRAIL_COLORS[t % TRAIL_COLORS.length]}55;color:${TRAIL_COLORS[t % TRAIL_COLORS.length]};display:inline-block;padding:.1rem .4rem;border-radius:4px;font-family:monospace;font-size:.8rem;margin:.1rem">${e[0]}→${e[1]}</span>`
  }).join(' ');

  return (
    <div>
      <div className="op-row">
        {(['K4', 'K33', 'house', 'path_graph'] as const).map(k => (
          <button key={k} className={`op-btn${graphName === k ? ' is-active' : ''}`} onClick={() => loadGraph(k)}>
            {k === 'K4' ? 'K₄' : k === 'K33' ? 'K₃,₃' : k === 'house' ? 'Ház' : 'Euler-út'}
          </button>
        ))}
      </div>
      <canvas ref={ref} width={480} height={280} style={{ width: '100%', maxWidth: 480 }} />
      {segs && <div style={{ marginTop: '.4rem', lineHeight: 2 }} dangerouslySetInnerHTML={{ __html: 'Bejárás: ' + segs }} />}
      <div style={{ fontSize: '.84rem', marginTop: '.4rem' }}>
        {bridges.size > 0 && <span style={{ color: '#ef4444' }}>⚠ Piros élek = elvágó élek. Csak végszükség esetén!<br /></span>}
        {done ? <span style={{ color: '#10b981', fontWeight: 700 }}>✓ Kész! Euler-bejárás teljesítve.</span> : `Maradék élek: ${remaining}`}
      </div>
      <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
        <button className="op-btn is-active" onClick={step} disabled={done}>Következő lépés ▶</button>
        <button className="op-btn" onClick={autoPlay}>Auto ▶▶</button>
        <button className="op-btn" onClick={() => loadGraph(graphName)}>Újra</button>
      </div>
    </div>
  );
}

// ─── TAB 4: Sandbox ──────────────────────────────────────────────────────────
const SANDBOX_PRESETS: Record<string, { nodes: NodeDef[]; edges: Edge[] }> = {
  K4: { nodes: [{ x: 120, y: 100 }, { x: 360, y: 100 }, { x: 360, y: 260 }, { x: 120, y: 260 }], edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2], [1, 3]] },
  C5: {
    nodes: Array.from({ length: 5 }, (_, i) => ({ x: 240 + 150 * Math.cos(2 * Math.PI * i / 5 - Math.PI / 2), y: 180 + 150 * Math.sin(2 * Math.PI * i / 5 - Math.PI / 2) })),
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]],
  },
  petersen: {
    nodes: [
      ...Array.from({ length: 5 }, (_, i) => ({ x: 240 + 150 * Math.cos(2 * Math.PI * i / 5 - Math.PI / 2), y: 180 + 150 * Math.sin(2 * Math.PI * i / 5 - Math.PI / 2) })),
      ...Array.from({ length: 5 }, (_, i) => ({ x: 240 + 70 * Math.cos(2 * Math.PI * i / 5 - Math.PI / 2), y: 180 + 70 * Math.sin(2 * Math.PI * i / 5 - Math.PI / 2) })),
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9], [5, 7], [7, 9], [9, 6], [6, 8], [8, 5]],
  },
};

type SbMode = 'edge' | 'del' | 'move';

function SandboxCanvas() {
  const [nodes, setNodes] = useState<NodeDef[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [mode, setMode] = useState<SbMode>('edge');
  const [sel, setSel] = useState<number | null>(null);
  const ref = useRef<HTMLCanvasElement>(null);
  const dragRef = useRef<{ node: number; ox: number; oy: number } | null>(null);

  const loadPreset = (name: keyof typeof SANDBOX_PRESETS | 'clear') => {
    if (name === 'clear') { setNodes([]); setEdges([]); setSel(null); return; }
    const G = SANDBOX_PRESETS[name];
    const ns = G.nodes.map((n, i) => ({ ...n, label: String.fromCharCode(65 + i) }));
    setNodes(ns); setEdges(G.edges.map(e => [...e] as Edge)); setSel(null);
  };

  useEffect(() => { loadPreset('K4'); }, []);

  const degs = getDegrees(nodes, edges);
  const odds = degs.filter(d => d % 2 !== 0).length;
  const comps = countComponents(nodes, edges, new Set());

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    drawGraphCtx(ctx, nodes, edges, { selNode: sel ?? -1 });
  }, [nodes, edges, sel]);

  let eulerStatus = '';
  if (nodes.length === 0) eulerStatus = '';
  else if (comps > 1) eulerStatus = '<span style="color:#ef4444">Nem összefüggő gráf</span>';
  else if (odds === 0) eulerStatus = '<span style="color:#10b981;font-weight:700">✓ Euler-kör létezik</span>';
  else if (odds === 2) eulerStatus = '<span style="color:#38bdf8;font-weight:700">✓ Euler-út létezik (a ★ csúcsok között)</span>';
  else eulerStatus = `<span style="color:#ef4444;font-weight:700">✗ ${odds} páratlan csúcs — sem kör, sem út</span>`;

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (dragRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const hit = nodes.findIndex(n => Math.hypot(n.x - mx, n.y - my) < 18);
    if (mode === 'del') {
      if (hit >= 0) {
        setNodes(ns => ns.filter((_, i) => i !== hit));
        setEdges(es => es.filter(ed => ed[0] !== hit && ed[1] !== hit).map(ed => [ed[0] > hit ? ed[0] - 1 : ed[0], ed[1] > hit ? ed[1] - 1 : ed[1]] as Edge));
        setSel(null);
      }
      return;
    }
    if (mode === 'move') return;
    if (hit < 0) {
      const newNode: NodeDef = { x: mx, y: my, label: String.fromCharCode(65 + nodes.length % 26) };
      setNodes(ns => [...ns, newNode]); setSel(null); return;
    }
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
    if (mode !== 'move') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const hit = nodes.findIndex(n => Math.hypot(n.x - mx, n.y - my) < 18);
    if (hit >= 0) dragRef.current = { node: hit, ox: mx - nodes[hit].x, oy: my - nodes[hit].y };
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragRef.current || mode !== 'move') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    setNodes(ns => ns.map((n, i) => i === dragRef.current!.node ? { ...n, x: mx - dragRef.current!.ox, y: my - dragRef.current!.oy } : n));
  };
  const handleMouseUp = () => { dragRef.current = null; };

  const MODES: { k: SbMode; label: string }[] = [{ k: 'edge', label: 'Él hozzáad' }, { k: 'del', label: 'Csúcs töröl' }, { k: 'move', label: 'Húz' }];

  return (
    <div>
      <div className="op-row">
        {MODES.map(({ k, label }) => <button key={k} className={`op-btn${mode === k ? ' is-active' : ''}`} onClick={() => { setMode(k); setSel(null); }}>{label}</button>)}
      </div>
      <canvas ref={ref} width={480} height={360} style={{ width: '100%', maxWidth: 480, cursor: mode === 'move' ? 'grab' : 'crosshair' }}
        onClick={handleClick} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} />
      <div style={{ marginTop: '.5rem', fontSize: '.84rem' }}>
        <span className="formula-chip">|V|={nodes.length}</span>
        <span className="formula-chip">|E|={edges.length}</span>
        <div style={{ marginTop: '.3rem' }} dangerouslySetInnerHTML={{ __html: eulerStatus }} />
        <div style={{ marginTop: '.3rem', display: 'flex', flexWrap: 'wrap', gap: '.2rem' }}>
          {degs.map((d, i) => <span key={i} className="formula-chip" style={{ borderColor: d % 2 !== 0 ? '#f59e0b' : '#334155', color: d % 2 !== 0 ? '#fbbf24' : '#94a3b8' }}>{nodes[i]?.label || i}:{d}</span>)}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '.4rem', marginTop: '.5rem', flexWrap: 'wrap' }}>
        <button className="op-btn" onClick={() => loadPreset('K4')}>K₄</button>
        <button className="op-btn" onClick={() => loadPreset('C5')}>C₅</button>
        <button className="op-btn" onClick={() => loadPreset('petersen')}>Petersen</button>
        <button className="op-btn is-active" onClick={() => loadPreset('clear')}>Töröl</button>
      </div>
    </div>
  );
}

// ─── TAB 5: Chinese Postman ──────────────────────────────────────────────────
const POSTMAN_GRAPHS: Record<string, { nodes: NodeDef[]; edges: Edge[] }> = {
  grid: {
    nodes: [{ x: 80, y: 80 }, { x: 240, y: 80 }, { x: 400, y: 80 }, { x: 80, y: 240 }, { x: 240, y: 240 }, { x: 400, y: 240 }],
    edges: [[0, 1, 3], [1, 2, 4], [3, 4, 2], [4, 5, 5], [0, 3, 3], [1, 4, 4], [2, 5, 2], [1, 3, 6], [2, 4, 5]],
  },
  bridge: {
    nodes: [{ x: 80, y: 160 }, { x: 200, y: 80 }, { x: 200, y: 240 }, { x: 340, y: 160 }, { x: 420, y: 80 }, { x: 420, y: 240 }],
    edges: [[0, 1, 2], [0, 2, 2], [1, 2, 3], [1, 3, 5], [2, 3, 4], [3, 4, 3], [3, 5, 3], [4, 5, 2]],
  },
  custom: {
    nodes: [{ x: 80, y: 160 }, { x: 240, y: 60 }, { x: 400, y: 160 }, { x: 240, y: 260 }],
    edges: [[0, 1, 3], [1, 2, 4], [2, 3, 2], [3, 0, 5], [0, 2, 6], [1, 3, 3]],
  },
};

function bfsWeight(nodes: NodeDef[], edges: Edge[], start: number) {
  const n = nodes.length;
  const dist = new Array(n).fill(Infinity); dist[start] = 0; const q = [start];
  while (q.length) {
    const v = q.shift()!;
    edges.forEach(e => {
      if (e[0] === v && dist[e[1]] > dist[v] + (e[2] || 1)) { dist[e[1]] = dist[v] + (e[2] || 1); q.push(e[1]); }
      if (e[1] === v && dist[e[0]] > dist[v] + (e[2] || 1)) { dist[e[0]] = dist[v] + (e[2] || 1); q.push(e[0]); }
    });
  }
  return dist;
}

function PostmanCanvas() {
  const [graphName, setGraphName] = useState('grid');
  const [G, setG] = useState(POSTMAN_GRAPHS.grid);
  const [result, setResult] = useState('');
  const ref = useRef<HTMLCanvasElement>(null);

  const loadGraph = (name: string) => {
    setGraphName(name); setG(JSON.parse(JSON.stringify(POSTMAN_GRAPHS[name]))); setResult('');
  };

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    drawGraphCtx(ctx, G.nodes, G.edges, { weights: true });
    G.edges.forEach(e => {
      const na = G.nodes[e[0]], nb = G.nodes[e[1]];
      const mx = (na.x + nb.x) / 2, my = (na.y + nb.y) / 2;
      ctx.fillStyle = '#64748b'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(e[2] || ''), mx, my - 8);
    });
  }, [G]);

  const solve = () => {
    const degs = getDegrees(G.nodes, G.edges);
    const odds = degs.map((d, i) => i).filter(i => degs[i] % 2 !== 0);
    const totalW = G.edges.reduce((a, e) => a + (e[2] || 1), 0);
    if (odds.length === 0) {
      setResult(`<span style="color:#10b981;font-weight:600">✓ Euler-kör létezik! Minimális séta súlya = ${totalW} (nincs szükség élismétlésre).</span>`);
      return;
    }
    let minExtra = Infinity; let bestPairs: [number, number][] = [];
    function pairs(arr: number[], current: [number, number][]) {
      if (!arr.length) {
        let cost = 0;
        current.forEach(([u, v]) => { const d = bfsWeight(G.nodes, G.edges, u); cost += d[v] || 99; });
        if (cost < minExtra) { minExtra = cost; bestPairs = [...current]; }
        return;
      }
      const first = arr[0];
      for (let i = 1; i < arr.length; i++) {
        pairs(arr.filter((_, j) => j !== 0 && j !== i), [...current, [first, arr[i]]]);
      }
    }
    if (odds.length <= 6) pairs(odds, []);
    setResult(`<span style="color:#f59e0b;font-weight:600">Páratlan csúcsok: {${odds.join(', ')}}.<br>Minimális ismételt élek súlya: ${minExtra}.<br>Teljes postás-séta súlya: ${totalW + minExtra}.</span>`);
  };

  const degs = getDegrees(G.nodes, G.edges);
  const odds = degs.map((d, i) => i).filter(i => degs[i] % 2 !== 0);
  const totalW = G.edges.reduce((a, e) => a + (e[2] || 1), 0);

  return (
    <div>
      <div className="op-row">
        {[['grid', 'Rács'], ['bridge', 'Két híd'], ['custom', 'Egyedi']].map(([k, label]) => (
          <button key={k} className={`op-btn${graphName === k ? ' is-active' : ''}`} onClick={() => loadGraph(k)}>{label}</button>
        ))}
      </div>
      <canvas ref={ref} width={480} height={300} style={{ width: '100%', maxWidth: 480 }} />
      <div style={{ fontSize: '.84rem', marginTop: '.4rem', color: '#94a3b8' }}>
        Összsúly: {totalW} | Páratlan fokú csúcsok: {odds.join(', ') || '(nincs)'}
      </div>
      {result && <div style={{ marginTop: '.4rem' }} dangerouslySetInnerHTML={{ __html: result }} />}
      <button className="op-btn is-active" style={{ marginTop: '.5rem' }} onClick={solve}>Megoldás megmutatása</button>
    </div>
  );
}

// ─── Static theory ────────────────────────────────────────────────────────────
const t1 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Alapdefiníciók</h5>
<div class="def-box"><div class="box-body"><strong>Séta:</strong> csúcsok és élek felváltva álló sorozata, ahol élismétlés megengedett.</div></div>
<div class="def-box"><div class="box-body"><strong>Euler-út:</strong> olyan séta, amely a gráf <em>minden élét pontosan egyszer</em> tartalmazza. Csúcsismétlés megengedett.</div></div>
<div class="def-box"><div class="box-body"><strong>Euler-kör:</strong> Euler-út, amelynek kezdő- és végpontja azonos (zárt Euler-út).</div></div>
<div class="ex-box"><div class="box-body"><strong>Analógia:</strong> „Rajzold meg az ábrát ceruza felemelése nélkül, minden vonalon csak egyszer áthaladva." Ha visszatérhetsz a kiindulópontba: Euler-kör. Ha nem: Euler-út.</div></div>
<div class="thm-box"><div class="box-body"><strong>Kínai postás (Mei-ko Kwan, 1962):</strong> Ha nem létezik Euler-kör, mennyi az összes élt lefedő legkisebb összsúlyú séta? (Élismétlés megengedett.)</div></div>`;

const t2 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Euler tétele (1736)</h5>
<div class="thm-box"><div class="box-body"><strong>Euler-kör:</strong> Összefüggő gráfban Euler-kör létezik \(\Leftrightarrow\) minden csúcs fokszáma <strong>páros</strong>.</div></div>
<div class="thm-box"><div class="box-body"><strong>Euler-út:</strong> Összefüggő gráfban Euler-út létezik \(\Leftrightarrow\) pontosan <strong>0 vagy 2</strong> páratlan fokszámú csúcs van.<br>Ha 2 páratlan csúcs van, az út köztük vezet.</div></div>
<div class="def-box"><div class="box-body"><strong>Bizonyítás ötlete (körök esetén):</strong> Minden csúcsnál a bejárás során ugyanannyiszor lépünk be, mint ki — ez csak páros fokszámnál lehetséges. Konstruktív bizonyítás: indíts egy kört, fűzz hozzá részköröket.</div></div>`;

const t3 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Fleury-algoritmus szabályai</h5>
<div class="def-box"><div class="box-body"><strong>1.</strong> Kezd bármely csúcsból (ha Euler-út: páratlan fokú csúcsból).</div></div>
<div class="def-box"><div class="box-body"><strong>2.</strong> Minden lépésben válassz egy élt a jelenlegi csúcsból.</div></div>
<div class="thm-box"><div class="box-body"><strong>3.</strong> <strong>Soha ne válassz elvágó élt</strong>, hacsak nincs más lehetőséged. (Elvágó él elhagyása szétbontja a gráfot.)</div></div>
<div class="def-box"><div class="box-body"><strong>4.</strong> Hagyd el a választott élt, és folytasd a következő csúcsból.</div></div>
<div class="ex-box"><div class="box-body"><strong>Elvágó él felismerése:</strong> Egy él elvágó, ha eltávolítása után a gráf elveszti összefüggőségét.</div></div>`;

const t4 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Szabadon szerkeszthető gráf</h5>
<div class="info-box"><div class="box-body">Szerkeszd a gráfot — a program azonnal jelzi, van-e Euler-kör / -út. Kattints a vászonra csúcs hozzáadásához, majd kattints két csúcsra él hozzáadásához.</div></div>`;

const t5 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Kínai postás probléma</h5>
<div class="def-box"><div class="box-body">Adott élsúlyú gráfban járd be az összes élt a <strong>minimális összsúlyú séta</strong> során. Élismétlés megengedett.</div></div>
<div class="thm-box"><div class="box-body"><strong>Megoldás stratégia:</strong><br>
1. Ha Euler-kör létezik (minden fok páros): kész, az összsúly = Σélsúly.<br>
2. Ha páratlan fokú csúcsok vannak: <em>párosítsd</em> őket minimális összsúlyú utakkal, ismételd meg ezeket az éleket → az összsúly nő.</div></div>
<div class="ex-box"><div class="box-body"><strong>Példa:</strong> Egy utcahálózatban a szemétautónak minden utcát be kell járnia. A páratlan fokú csomópontok párosításával megkapjuk a szükséges ismétlések minimumát.</div></div>`;

const TABS: Tab[] = [
  { id: 'def', label: 'Definíciók', content: <Cols variant="7-5"><DefGraphCanvas /><RichTex html={t1} /></Cols> },
  { id: 'euler', label: 'Euler tételei', content: <Cols variant="7-5"><EulerChecker /><RichTex html={t2} /></Cols> },
  { id: 'fleury', label: 'Fleury-algoritmus', content: <Cols variant="7-5"><FleuryCanvas /><RichTex html={t3} /></Cols> },
  { id: 'sandbox', label: 'Rajzolós játék', content: <Cols variant="7-5"><SandboxCanvas /><RichTex html={t4} /></Cols> },
  { id: 'postman', label: 'Kínai postás', content: <Cols variant="7-5"><PostmanCanvas /><RichTex html={t5} /></Cols> },
];

export default function DimatCh10() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika · II.2. fejezet</p>
      <h1 className="ila__title">Euler-utak és -körök</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
