import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, Cols, type Tab } from '../../ila/components/kit';

// ─── shared graph colours ───────────────────────────────────────────────────
const C = {
  node: '#38bdf8', nodeStroke: '#0ea5e9', edge: '#334155',
  nodeSel: '#fbbf24', odd: '#f59e0b', cut: '#ef4444',
};

function drawArrow(
  ctx: CanvasRenderingContext2D,
  x1: number, y1: number, x2: number, y2: number,
  color: string, width: number,
) {
  const dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy);
  if (len < 1) return;
  const ux = dx / len, uy = dy / len, r = 14;
  const hx = x2 - ux * r, hy = y2 - uy * r;
  ctx.beginPath();
  ctx.moveTo(x1 + ux * r, y1 + uy * r);
  ctx.lineTo(hx, hy);
  ctx.strokeStyle = color; ctx.lineWidth = width; ctx.stroke();
  const ax = -uy * 5, ay = ux * 5;
  ctx.beginPath();
  ctx.moveTo(hx + ux * 10, hy + uy * 10);
  ctx.lineTo(hx + ax, hy + ay);
  ctx.lineTo(hx - ax, hy - ay);
  ctx.closePath();
  ctx.fillStyle = color; ctx.fill();
}

// ─── TAB 1: graph type visualiser ───────────────────────────────────────────
type NodeXY = { x: number; y: number };
type GraphDef = { nodes: NodeXY[]; edges: [number, number][]; type: string; info: string };

const DEF_GRAPHS: Record<string, GraphDef> = {
  simple: {
    nodes: [{ x: 100, y: 80 }, { x: 240, y: 50 }, { x: 360, y: 100 }, { x: 380, y: 200 }, { x: 200, y: 220 }, { x: 80, y: 180 }],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [1, 4], [0, 3]],
    type: 'simple',
    info: 'Egyszerű gráf: nincs hurokél, nincs többszörös él. |V|=6, |E|=8.',
  },
  directed: {
    nodes: [{ x: 100, y: 130 }, { x: 240, y: 60 }, { x: 380, y: 130 }, { x: 240, y: 220 }],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2], [1, 3]],
    type: 'directed',
    info: 'Irányított gráf: az élek nyilakkal jelzett iránnyal bírnak. Pl. weblapok között linkhálózat.',
  },
  multi: {
    nodes: [{ x: 120, y: 130 }, { x: 360, y: 130 }, { x: 240, y: 220 }],
    edges: [[0, 1], [0, 1], [1, 2], [2, 0]],
    type: 'multi',
    info: 'Multigráf: két csúcs között több (párhuzamos) él is futhat. Nem egyszerű gráf.',
  },
  loop: {
    nodes: [{ x: 140, y: 120 }, { x: 340, y: 120 }, { x: 240, y: 230 }],
    edges: [[0, 0], [0, 1], [1, 2], [2, 0]],
    type: 'loop',
    info: 'Pszeudigráf: a hurokél ugyanazon csúcsot köti önmagához. A fokszámhoz 2-vel járul hozzá.',
  },
};

function DefCanvas() {
  const [type, setType] = useState<keyof typeof DEF_GRAPHS>('simple');
  const ref = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const G = DEF_GRAPHS[type];
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);

    G.edges.forEach(([a, b]) => {
      const na = G.nodes[a], nb = G.nodes[b];
      if (a === b) {
        ctx.beginPath();
        ctx.arc(na.x + 18, na.y - 18, 18, 0, Math.PI * 2);
        ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2; ctx.stroke();
      } else if (G.type === 'directed') {
        drawArrow(ctx, na.x, na.y, nb.x, nb.y, '#334155', 2);
      } else if (G.type === 'multi') {
        const key = `${Math.min(a, b)},${Math.max(a, b)}`;
        const count = G.edges.filter(([x, y]) => `${Math.min(x, y)},${Math.max(x, y)}` === key);
        const idx = count.findIndex(([x, y]) => x === a && y === b);
        const offset = idx === 0 ? -12 : 12;
        const dx = nb.x - na.x, dy = nb.y - na.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const nx = -dy / len * offset, ny = dx / len * offset;
        ctx.beginPath();
        ctx.moveTo(na.x + nx, na.y + ny);
        ctx.quadraticCurveTo((na.x + nb.x) / 2 + nx * 2, (na.y + nb.y) / 2 + ny * 2, nb.x + nx, nb.y + ny);
        ctx.strokeStyle = count.length > 1 ? '#f97316' : C.edge;
        ctx.lineWidth = 2; ctx.stroke();
      } else {
        ctx.beginPath(); ctx.moveTo(na.x, na.y); ctx.lineTo(nb.x, nb.y);
        ctx.strokeStyle = C.edge; ctx.lineWidth = 2; ctx.stroke();
      }
    });

    G.nodes.forEach((n, i) => {
      ctx.beginPath(); ctx.arc(n.x, n.y, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#12161f'; ctx.fill();
      ctx.strokeStyle = C.nodeStroke; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = C.node; ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String.fromCharCode(65 + i), n.x, n.y);
    });
  }, [type]);

  useEffect(() => { draw(); }, [draw]);

  const types = [
    { k: 'simple', label: 'Egyszerű' },
    { k: 'directed', label: 'Irányított' },
    { k: 'multi', label: 'Többszörös él' },
    { k: 'loop', label: 'Hurokél' },
  ];

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#38bdf8' }}>Gráftípus vizualizáló</span>
      <div className="op-row">
        {types.map(({ k, label }) => (
          <button key={k} className={`op-btn${type === k ? ' is-active' : ''}`} onClick={() => setType(k as keyof typeof DEF_GRAPHS)}>{label}</button>
        ))}
      </div>
      <canvas ref={ref} width={480} height={260} style={{ width: '100%', maxWidth: 480 }} />
      <div style={{ fontSize: '.8rem', color: '#94a3b8', marginTop: '.5rem' }}>{DEF_GRAPHS[type].info}</div>
    </div>
  );
}

// ─── TAB 2: Named graphs ────────────────────────────────────────────────────
function circleNodes(n: number, cx: number, cy: number, r: number) {
  return Array.from({ length: n }, (_, i) => ({
    x: cx + r * Math.cos(2 * Math.PI * i / n - Math.PI / 2),
    y: cy + r * Math.sin(2 * Math.PI * i / n - Math.PI / 2),
  }));
}
function allEdges(n: number): [number, number][] {
  const e: [number, number][] = [];
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) e.push([i, j]);
  return e;
}
function cycleEdges(n: number): [number, number][] { return Array.from({ length: n }, (_, i) => [i, (i + 1) % n]); }
function pathEdges(n: number): [number, number][] { return Array.from({ length: n - 1 }, (_, i) => [i, i + 1]); }
function lineNodes(n: number, W: number, H: number) { return Array.from({ length: n }, (_, i) => ({ x: 40 + i * (W - 80) / (n - 1 || 1), y: H / 2 })); }
function bipartiteNodes(m: number, n: number, W: number, H: number) {
  const ns: { x: number; y: number; side?: number }[] = [];
  for (let i = 0; i < m; i++) ns.push({ x: 40 + i * (W - 80) / (m - 1 || 1), y: H * 0.25, side: 0 });
  for (let i = 0; i < n; i++) ns.push({ x: 40 + i * (W - 80) / (n - 1 || 1), y: H * 0.75, side: 1 });
  return ns;
}
function bipartiteEdges(m: number, n: number): [number, number][] {
  const e: [number, number][] = [];
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) e.push([i, m + j]);
  return e;
}
function starNodes(n: number, cx: number, cy: number, r: number) {
  return [{ x: cx, y: cy }, ...Array.from({ length: n }, (_, i) => ({ x: cx + r * Math.cos(2 * Math.PI * i / n - Math.PI / 2), y: cy + r * Math.sin(2 * Math.PI * i / n - Math.PI / 2) }))];
}
function starEdges(n: number): [number, number][] { return Array.from({ length: n }, (_, i) => [0, i + 1]); }
function petersenNodes(cx: number, cy: number, R: number, r: number) {
  return [
    ...Array.from({ length: 5 }, (_, i) => ({ x: cx + R * Math.cos(2 * Math.PI * i / 5 - Math.PI / 2), y: cy + R * Math.sin(2 * Math.PI * i / 5 - Math.PI / 2) })),
    ...Array.from({ length: 5 }, (_, i) => ({ x: cx + r * Math.cos(2 * Math.PI * i / 5 - Math.PI / 2), y: cy + r * Math.sin(2 * Math.PI * i / 5 - Math.PI / 2) })),
  ];
}
function petersenEdges(): [number, number][] {
  const e: [number, number][] = [];
  for (let i = 0; i < 5; i++) { e.push([i, (i + 1) % 5]); e.push([i, i + 5]); e.push([i + 5, (i + 2) % 5 + 5]); }
  return e;
}
function wheelNodes(n: number, cx: number, cy: number, r: number) { return [{ x: cx, y: cy }, ...circleNodes(n, cx, cy, r)]; }
function wheelEdges(n: number): [number, number][] {
  const e: [number, number][] = [];
  for (let i = 0; i < n; i++) { e.push([0, i + 1]); e.push([i + 1, (i % n) + 1]); }
  return e;
}

type NamedType = 'Kn' | 'Cn' | 'Pn' | 'Kmn' | 'Star' | 'Petersen' | 'Wheel';

function buildNamed(type: NamedType, n: number, m: number) {
  if (type === 'Kn') return { nodes: circleNodes(n, 160, 160, 130), edges: allEdges(n), desc: `Teljes gráf K_${n}: minden csúcspár össze van kötve. |V|=${n}, |E|=${n * (n - 1) / 2}. Fokszám: ${n - 1} (reguláris).` };
  if (type === 'Cn') return { nodes: circleNodes(n, 160, 160, 130), edges: cycleEdges(n), desc: `Kör C_${n}: ${n} csúcs körbe kötve. |V|=${n}, |E|=${n}. Minden csúcs foka 2.` };
  if (type === 'Pn') return { nodes: lineNodes(n, 320, 200), edges: pathEdges(n), desc: `Út P_${n}: ${n} csúcs lánca. |V|=${n}, |E|=${n - 1}. Végpontok foka 1, belső foka 2.` };
  if (type === 'Kmn') return { nodes: bipartiteNodes(m, n, 320, 340), edges: bipartiteEdges(m, n), desc: `Teljes páros gráf K_${m},${n}: két ${m} és ${n} csúcsú osztály, minden lehetséges él közöttük. |E|=${m * n}.` };
  if (type === 'Star') return { nodes: starNodes(n, 160, 160, 130), edges: starEdges(n), desc: `Csillaggráf S_${n}: egy középső csúcs, hozzá csatlakozó ${n} levél. |V|=${n + 1}, |E|=${n}.` };
  if (type === 'Petersen') return { nodes: petersenNodes(160, 165, 120, 55), edges: petersenEdges(), desc: 'Petersen-gráf: 10 csúcs, 15 él, 3-reguláris. Nem Hamilton, nem 3-élszínezhető. Sok extremális tulajdonság ellenpéldája.' };
  // Wheel
  return { nodes: wheelNodes(n, 160, 160, 120), edges: wheelEdges(n), desc: `Szélkerék W_${n}: egy középpont + ${n} csúcsú kör. |V|=${n + 1}, |E|=${2 * n}. Középpont foka ${n}.` };
}

function NamedCanvas() {
  const [type, setType] = useState<NamedType>('Kn');
  const [n, setN] = useState(5);
  const [m, setM] = useState(3);
  const ref = useRef<HTMLCanvasElement>(null);

  const G = buildNamed(type, n, m);
  const needsM = type === 'Kmn';
  const isPetersen = type === 'Petersen';

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const scale = type === 'Pn' || type === 'Kmn' ? 0.95 : 0.85;
    const offX = (W - 320 * scale) / 2 - 10;
    const offY = (H - 320 * scale) / 2;
    const tx = (x: number) => offX + x * scale;
    const ty = (y: number) => offY + y * scale;

    G.edges.forEach(([a, b]) => {
      const na = G.nodes[a], nb = G.nodes[b];
      ctx.beginPath(); ctx.moveTo(tx(na.x), ty(na.y)); ctx.lineTo(tx(nb.x), ty(nb.y));
      ctx.strokeStyle = C.edge; ctx.lineWidth = 1.5; ctx.stroke();
    });
    G.nodes.forEach((node, i) => {
      const side = (node as { side?: number }).side;
      ctx.beginPath(); ctx.arc(tx(node.x), ty(node.y), 12, 0, Math.PI * 2);
      ctx.fillStyle = '#12161f'; ctx.fill();
      ctx.strokeStyle = side === 1 ? '#10b981' : C.nodeStroke; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = side === 1 ? '#10b981' : C.node;
      ctx.font = 'bold 10px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(i), tx(node.x), ty(node.y));
    });
  }, [type, n, m]);

  const NAMED_TYPES: { k: NamedType; label: string }[] = [
    { k: 'Kn', label: 'Teljes Kₙ' }, { k: 'Cn', label: 'Kör Cₙ' }, { k: 'Pn', label: 'Út Pₙ' },
    { k: 'Kmn', label: 'Páros Kₘ,ₙ' }, { k: 'Star', label: 'Csillag Sₙ' },
    { k: 'Petersen', label: 'Petersen' }, { k: 'Wheel', label: 'Szélkerék Wₙ' },
  ];

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#38bdf8' }}>Gráf választó</span>
      <div className="op-row" style={{ flexWrap: 'wrap' }}>
        {NAMED_TYPES.map(({ k, label }) => (
          <button key={k} className={`op-btn${type === k ? ' is-active' : ''}`} onClick={() => setType(k)}>{label}</button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center', marginBottom: '.5rem', fontSize: '.82rem', opacity: isPetersen ? 0.3 : 1 }}>
        <span>n = <input type="number" className="ila-num" min={3} max={10} value={n} onChange={e => setN(+e.target.value)} /></span>
        {needsM && <span>m = <input type="number" className="ila-num" min={1} max={8} value={m} onChange={e => setM(+e.target.value)} /></span>}
      </div>
      <canvas ref={ref} width={480} height={340} style={{ width: '100%', maxWidth: 480 }} />
      <div style={{ marginTop: '.5rem' }}>
        <span className="formula-chip">|V| = {G.nodes.length}</span>
        <span className="formula-chip">|E| = {G.edges.length}</span>
      </div>
      <div style={{ fontSize: '.83rem', color: '#94a3b8', lineHeight: 1.6, marginTop: '.4rem' }}>{G.desc}</div>
    </div>
  );
}

// ─── TAB 3: Degree / handshaking ────────────────────────────────────────────
function buildDegNodes() {
  return [
    { x: 80, y: 80 }, { x: 240, y: 50 }, { x: 400, y: 80 },
    { x: 400, y: 240 }, { x: 240, y: 270 }, { x: 80, y: 240 }, { x: 240, y: 160 },
  ];
}
function buildDegAdj() { return new Set(['0,1', '1,2', '2,3', '3,4', '4,5', '5,0', '0,6', '1,6', '2,6']); }
function eKey(a: number, b: number) { return `${Math.min(a, b)},${Math.max(a, b)}`; }

function DegCanvas() {
  const [nodes, setNodes] = useState(buildDegNodes);
  const [adj, setAdj] = useState(buildDegAdj);
  const [sel, setSel] = useState<number | null>(null);
  const ref = useRef<HTMLCanvasElement>(null);
  const dragRef = useRef<{ node: number; ox: number; oy: number } | null>(null);

  const degrees = nodes.map((_, i) => [...adj].filter(k => k.split(',').map(Number).includes(i)).length);
  const totalDeg = degrees.reduce((a, b) => a + b, 0);
  const edgeCount = adj.size;
  const oddCount = degrees.filter(d => d % 2 !== 0).length;

  const draw = useCallback(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    adj.forEach(k => {
      const [a, b] = k.split(',').map(Number);
      ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y);
      ctx.strokeStyle = C.edge; ctx.lineWidth = 2; ctx.stroke();
    });
    nodes.forEach((n, i) => {
      const odd = degrees[i] % 2 !== 0;
      ctx.beginPath(); ctx.arc(n.x, n.y, 16, 0, Math.PI * 2);
      ctx.fillStyle = '#12161f'; ctx.fill();
      ctx.strokeStyle = i === sel ? C.nodeSel : odd ? C.odd : C.nodeStroke; ctx.lineWidth = 2.5; ctx.stroke();
      ctx.fillStyle = odd ? '#fbbf24' : C.node;
      ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(degrees[i]), n.x, n.y);
    });
  }, [nodes, adj, sel, degrees]);

  useEffect(() => { draw(); }, [draw]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (dragRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const hit = nodes.findIndex(n => Math.hypot(n.x - mx, n.y - my) < 18);
    if (hit < 0) { setSel(null); return; }
    if (sel === null) { setSel(hit); }
    else if (sel === hit) { setSel(null); }
    else {
      const k = eKey(sel, hit);
      const newAdj = new Set(adj);
      if (newAdj.has(k)) newAdj.delete(k); else newAdj.add(k);
      setAdj(newAdj); setSel(null);
    }
  };
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const hit = nodes.findIndex(n => Math.hypot(n.x - mx, n.y - my) < 18);
    if (hit >= 0) dragRef.current = { node: hit, ox: mx - nodes[hit].x, oy: my - nodes[hit].y };
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const newNodes = nodes.map((n, i) => i === dragRef.current!.node ? { x: mx - dragRef.current!.ox, y: my - dragRef.current!.oy } : n);
    setNodes(newNodes);
  };
  const handleMouseUp = () => { dragRef.current = null; };

  const addRandEdge = () => {
    const nn = nodes.length;
    for (let t = 0; t < 20; t++) {
      const a = Math.floor(Math.random() * nn), b = Math.floor(Math.random() * nn);
      if (a !== b && !adj.has(eKey(a, b))) { const na = new Set(adj); na.add(eKey(a, b)); setAdj(na); return; }
    }
  };

  return (
    <div>
      <div className="info-box" style={{ marginBottom: '.5rem' }}>
        <span className="lbl" style={{ color: '#38bdf8' }}>Kézfogási tétel ellenőrzés</span>
        <div style={{ fontSize: '.85rem' }}>
          Fokszámok összege: <strong style={{ color: '#7dd3fc' }}>{totalDeg}</strong> = 2 × <strong style={{ color: '#7dd3fc' }}>{edgeCount}</strong> él{' '}
          <span style={{ color: totalDeg === 2 * edgeCount ? '#10b981' : '#ef4444' }}>{totalDeg === 2 * edgeCount ? '✓' : '✗'}</span>
        </div>
        <div style={{ fontSize: '.85rem', marginTop: '.25rem' }}>
          Páratlan fokú csúcsok: <strong style={{ color: oddCount % 2 === 0 ? '#10b981' : '#ef4444' }}>{oddCount}</strong>{' '}
          ({oddCount % 2 === 0 ? 'páros ✓' : 'páratlan — nem lehetséges!'})
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '.8rem', color: '#7dd3fc', marginTop: '.25rem' }}>
          Foksorozat: [{[...degrees].sort((a, b) => b - a).join(', ')}]
        </div>
      </div>
      <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.25rem 0' }}>Kattints két csúcsra egy él hozzáadásához / eltávolításához. Húzd a csúcsokat!</p>
      <canvas ref={ref} width={480} height={320} style={{ width: '100%', maxWidth: 480, cursor: 'pointer' }}
        onClick={handleClick} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} />
      <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
        <button className="op-btn is-active" onClick={() => { setNodes(buildDegNodes()); setAdj(buildDegAdj()); setSel(null); }}>Visszaállít</button>
        <button className="op-btn" onClick={addRandEdge}>Véletlen él +</button>
      </div>
    </div>
  );
}

// ─── TAB 4: Connectivity + BFS ──────────────────────────────────────────────
function buildConnNodes() {
  return [
    { x: 80, y: 80 }, { x: 240, y: 50 }, { x: 400, y: 80 }, { x: 400, y: 240 },
    { x: 240, y: 270 }, { x: 80, y: 240 }, { x: 240, y: 160 }, { x: 340, y: 160 },
  ];
}
function buildConnAdj() { return new Set(['0,1', '1,2', '2,3', '3,4', '4,5', '5,0', '1,6', '6,3', '6,7', '7,3']); }

function bfsAll(n: number, adj: Set<string>, removed: Set<number>) {
  const active = [...Array(n).keys()].filter(i => !removed.has(i));
  const comps: number[][] = [];
  const visited = new Set<number>();
  active.forEach(start => {
    if (visited.has(start)) return;
    const c: number[] = []; const q = [start]; visited.add(start);
    while (q.length) {
      const v = q.shift()!; c.push(v);
      [...adj].forEach(k => {
        const [a, b] = k.split(',').map(Number);
        if (a === v && !visited.has(b) && !removed.has(b)) { visited.add(b); q.push(b); }
        if (b === v && !visited.has(a) && !removed.has(a)) { visited.add(a); q.push(a); }
      });
    }
    comps.push(c);
  });
  return comps;
}

function bfsDist(start: number, n: number, adj: Set<string>, removed: Set<number>) {
  const dist = new Array(n).fill(-1);
  if (removed.has(start)) return dist;
  dist[start] = 0; const q = [start];
  while (q.length) {
    const v = q.shift()!;
    [...adj].forEach(k => {
      const [a, b] = k.split(',').map(Number);
      if (a === v && dist[b] === -1 && !removed.has(b)) { dist[b] = dist[v] + 1; q.push(b); }
      if (b === v && dist[a] === -1 && !removed.has(a)) { dist[a] = dist[v] + 1; q.push(a); }
    });
  }
  return dist;
}

function ConnCanvas() {
  const [nodes] = useState(buildConnNodes);
  const [adj, setAdj] = useState(buildConnAdj);
  const [removed, setRemoved] = useState(new Set<number>());
  const [mode, setMode] = useState<'edge' | 'node'>('edge');
  const [sel, setSel] = useState<number | null>(null);
  const ref = useRef<HTMLCanvasElement>(null);

  const comps = bfsAll(nodes.length, adj, removed);
  const compOf = new Array(nodes.length).fill(-1);
  comps.forEach((c, ci) => c.forEach(v => (compOf[v] = ci)));
  const compColors = ['#38bdf8', '#10b981', '#f97316', '#a78bfa', '#f43f5e'];

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);

    [...adj].forEach(k => {
      const [a, b] = k.split(',').map(Number);
      if (removed.has(a) || removed.has(b)) return;
      const sameComp = compOf[a] === compOf[b] && compOf[a] >= 0;
      ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y);
      ctx.strokeStyle = sameComp ? (compColors[compOf[a] % compColors.length] + '88') : C.edge;
      ctx.lineWidth = 2; ctx.stroke();
    });

    nodes.forEach((n, i) => {
      if (removed.has(i)) return;
      const ci = compOf[i]; const col = ci >= 0 ? compColors[ci % compColors.length] : C.edge;
      ctx.beginPath(); ctx.arc(n.x, n.y, 16, 0, Math.PI * 2);
      ctx.fillStyle = '#12161f'; ctx.fill();
      ctx.strokeStyle = i === sel ? C.nodeSel : col; ctx.lineWidth = 2.5; ctx.stroke();
      ctx.fillStyle = i === sel ? C.nodeSel : col;
      ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(i), n.x, n.y);
    });
  }, [nodes, adj, removed, sel, compOf, compColors]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const hit = nodes.findIndex((n, i) => !removed.has(i) && Math.hypot(n.x - mx, n.y - my) < 18);
    if (mode === 'node') {
      if (hit >= 0) { const nr = new Set(removed); nr.has(hit) ? nr.delete(hit) : nr.add(hit); setRemoved(nr); }
    } else {
      if (hit < 0) { setSel(null); }
      else if (sel === null) { setSel(hit); }
      else if (sel === hit) { setSel(null); }
      else {
        const k = eKey(sel, hit); const na = new Set(adj);
        na.has(k) ? na.delete(k) : na.add(k); setAdj(na); setSel(null);
      }
    }
  };

  const nActive = nodes.length - removed.size;
  const active = [...Array(nodes.length).keys()].filter(i => !removed.has(i)).slice(0, 6);
  const distTable = active.map(i => ({ i, dists: bfsDist(i, nodes.length, adj, removed) }));

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem', marginBottom: '.5rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Összefüggőség</span>
          <div style={{ fontSize: '.84rem' }}>
            <div>Csúcsok: <strong style={{ color: '#7dd3fc' }}>{nActive}</strong> ({removed.size} eltávolítva)</div>
            <div>Komponensek: <strong style={{ color: comps.length === 1 ? '#10b981' : '#f97316' }}>{comps.length}</strong></div>
            <div>Összefüggő: <strong style={{ color: comps.length <= 1 ? '#10b981' : '#ef4444' }}>{comps.length <= 1 ? 'Igen ✓' : 'Nem ✗'}</strong></div>
          </div>
        </div>
        <div className="info-box" style={{ overflowX: 'auto' }}>
          <span className="lbl" style={{ color: '#38bdf8' }}>Távolságmátrix (BFS)</span>
          <table style={{ borderCollapse: 'collapse', fontSize: '.72rem', fontFamily: 'monospace' }}>
            <thead><tr><td></td>{active.map(j => <td key={j} style={{ padding: '2px 6px', color: '#64748b', textAlign: 'center' }}>{j}</td>)}</tr></thead>
            <tbody>
              {distTable.map(({ i, dists }) => (
                <tr key={i}>
                  <td style={{ padding: '2px 6px', color: '#64748b' }}>{i}</td>
                  {active.map(j => <td key={j} style={{ padding: '2px 6px', color: dists[j] < 0 ? '#334155' : '#7dd3fc', textAlign: 'center' }}>{dists[j] < 0 ? '∞' : dists[j]}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.25rem 0' }}>
        {mode === 'node' ? 'Kattints egy csúcsra az eltávolításához.' : 'Kattints két csúcsra egy él ki-/bekapcsolásához.'}
      </p>
      <canvas ref={ref} width={480} height={320} style={{ width: '100%', maxWidth: 480, cursor: 'pointer' }} onClick={handleClick} />
      <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <button className="op-btn is-active" onClick={() => { setAdj(buildConnAdj()); setRemoved(new Set()); setSel(null); }}>Visszaállít</button>
        <button className={`op-btn${mode === 'node' ? ' is-active' : ''}`} onClick={() => { setMode(m => m === 'edge' ? 'node' : 'edge'); setSel(null); }}>Mód: {mode}</button>
      </div>
    </div>
  );
}

// ─── TAB 5: Königsberg ──────────────────────────────────────────────────────
const KB_NODES = [
  { x: 90, y: 170, label: 'A', color: '#f97316' },
  { x: 240, y: 90, label: 'B', color: '#38bdf8' },
  { x: 240, y: 250, label: 'C', color: '#10b981' },
  { x: 390, y: 170, label: 'D', color: '#a78bfa' },
];
const KB_EDGES = [
  { a: 0, b: 1, name: '1. híd' }, { a: 0, b: 1, name: '2. híd' },
  { a: 0, b: 2, name: '3. híd' }, { a: 0, b: 2, name: '4. híd' },
  { a: 1, b: 3, name: '5. híd' }, { a: 2, b: 3, name: '6. híd' },
  { a: 1, b: 2, name: '7. híd' },
];

function KoenigsbergCanvas() {
  const [used, setUsed] = useState(new Set<number>());
  const [current, setCurrent] = useState<number | null>(null);
  const [trail, setTrail] = useState('');
  const [verdict, setVerdict] = useState('');
  const ref = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);

    const edgeCount: Record<string, number> = {};
    KB_EDGES.forEach(e => { const k = `${Math.min(e.a, e.b)},${Math.max(e.a, e.b)}`; edgeCount[k] = (edgeCount[k] || 0) + 1; });
    const edgeIdx: Record<string, number> = {};
    KB_EDGES.forEach((e, i) => {
      const k = `${Math.min(e.a, e.b)},${Math.max(e.a, e.b)}`;
      edgeIdx[k] = edgeIdx[k] || 0;
      const total = edgeCount[k], idx = edgeIdx[k]; edgeIdx[k]++;
      const na = KB_NODES[e.a], nb = KB_NODES[e.b];
      const dx = nb.x - na.x, dy = nb.y - na.y, len = Math.sqrt(dx * dx + dy * dy);
      const offset = (idx - (total - 1) / 2) * 20;
      const nx = -dy / len * offset, ny = dx / len * offset;
      const isUsed = used.has(i);
      ctx.beginPath();
      ctx.moveTo(na.x + nx, na.y + ny);
      ctx.quadraticCurveTo((na.x + nb.x) / 2 + nx * 1.2, (na.y + nb.y) / 2 + ny * 1.2, nb.x + nx, nb.y + ny);
      ctx.strokeStyle = isUsed ? '#334155' : '#64748b';
      ctx.lineWidth = isUsed ? 1.5 : 3; ctx.setLineDash(isUsed ? [4, 4] : []);
      ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = isUsed ? '#334155' : '#94a3b8'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(e.name, (na.x + nb.x) / 2 + nx * 0.6, (na.y + nb.y) / 2 + ny * 0.6 - 4);
    });

    KB_NODES.forEach((n, i) => {
      const deg = KB_EDGES.filter((e, ei) => !used.has(ei) && (e.a === i || e.b === i)).length;
      ctx.beginPath(); ctx.arc(n.x, n.y, 22, 0, Math.PI * 2);
      ctx.fillStyle = '#12161f'; ctx.fill();
      ctx.strokeStyle = n.color; ctx.lineWidth = 3; ctx.stroke();
      ctx.fillStyle = n.color; ctx.font = 'bold 13px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(n.label, n.x, n.y);
      ctx.fillStyle = '#64748b'; ctx.font = '10px sans-serif';
      ctx.fillText(`fok:${deg}`, n.x, n.y + 30);
    });
  }, [used, current]);

  useEffect(() => { draw(); }, [draw]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const edgeCount2: Record<string, number> = {};
    const edgeIdx2: Record<string, number> = {};
    KB_EDGES.forEach(edge => { const k = `${Math.min(edge.a, edge.b)},${Math.max(edge.a, edge.b)}`; edgeCount2[k] = (edgeCount2[k] || 0) + 1; });
    let hitEdge = -1;
    KB_EDGES.forEach((edge, i) => {
      if (used.has(i)) return;
      const k = `${Math.min(edge.a, edge.b)},${Math.max(edge.a, edge.b)}`;
      edgeIdx2[k] = edgeIdx2[k] || 0;
      const total = edgeCount2[k], idx = edgeIdx2[k]; edgeIdx2[k]++;
      const na = KB_NODES[edge.a], nb = KB_NODES[edge.b];
      const dx = nb.x - na.x, dy = nb.y - na.y, len = Math.sqrt(dx * dx + dy * dy);
      const offset = (idx - (total - 1) / 2) * 20;
      const nx = -dy / len * offset, ny = dx / len * offset;
      const midx = (na.x + nb.x) / 2 + nx * 0.6, midy = (na.y + nb.y) / 2 + ny * 0.6;
      if (Math.hypot(mx - midx, my - midy) < 20) hitEdge = i;
    });
    if (hitEdge < 0) return;
    const edge = KB_EDGES[hitEdge];
    if (current !== null && current !== edge.a && current !== edge.b) {
      setVerdict('<span style="color:#ef4444">Érvénytelen! Nem érintkezel ezzel a híddal.</span>');
      return;
    }
    const newUsed = new Set(used); newUsed.add(hitEdge);
    const newCurrent = current === edge.a ? edge.b : edge.a;
    setUsed(newUsed); setCurrent(newCurrent);
    setTrail([...newUsed].map(i => KB_EDGES[i].name).join(' → '));
    if (newUsed.size === KB_EDGES.length) {
      setVerdict('<span style="color:#10b981">Sikerült! Minden hidat pontosan egyszer jártál be!</span>');
    } else {
      const reachable = KB_EDGES.some((ed, ei) => !newUsed.has(ei) && (ed.a === newCurrent || ed.b === newCurrent));
      if (!reachable) setVerdict('<span style="color:#ef4444">Elakadtál! Nem tudsz tovább menni. (Euler: 4 páratlan csúcs → lehetetlen.)</span>');
      else setVerdict('');
    }
  };

  const reset = () => { setUsed(new Set()); setCurrent(null); setTrail(''); setVerdict(''); };

  const nodeInfo = KB_NODES.map((n, i) => {
    const deg = KB_EDGES.filter(e => e.a === i || e.b === i).length;
    return { label: n.label, color: n.color, deg, odd: deg % 2 !== 0 };
  });

  return (
    <div>
      <div className="info-box" style={{ marginBottom: '.5rem' }}>
        <span className="lbl" style={{ color: '#38bdf8' }}>Fokszámok</span>
        <div>
          {nodeInfo.map(ni => (
            <span key={ni.label} className="formula-chip" style={{ borderColor: ni.odd ? '#f59e0b' : '#334155', color: ni.odd ? '#fbbf24' : '#94a3b8' }}>
              {ni.label}:{ni.deg}{ni.odd ? '★' : ''}
            </span>
          ))}
        </div>
        <div style={{ fontSize: '.79rem', color: '#94a3b8', marginTop: '.3rem' }}>★ = páratlan fokszámú → nincs Euler-körút!</div>
        {trail && <div style={{ fontFamily: 'monospace', fontSize: '.82rem', color: '#7dd3fc', marginTop: '.4rem' }}>{trail}</div>}
        {verdict && <div style={{ fontSize: '.84rem', fontWeight: 600, marginTop: '.3rem' }} dangerouslySetInnerHTML={{ __html: verdict }} />}
      </div>
      <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.25rem 0' }}>Próbálj meg minden hidat pontosan egyszer bejárni! Kattints a hidakra sorban.</p>
      <canvas ref={ref} width={480} height={340} style={{ width: '100%', maxWidth: 480, cursor: 'pointer' }} onClick={handleClick} />
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginTop: '.5rem', fontSize: '.79rem', color: '#94a3b8' }}>
        <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#f97316', marginRight: '.3rem' }} />Szárazföld (A)</span>
        <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#38bdf8', marginRight: '.3rem' }} />Északi sziget (B)</span>
        <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#10b981', marginRight: '.3rem' }} />Déli sziget (C)</span>
        <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#a78bfa', marginRight: '.3rem' }} />Keleti part (D)</span>
      </div>
      <button className="op-btn" style={{ marginTop: '.5rem' }} onClick={reset}>Újrakezdés</button>
    </div>
  );
}

// ─── Static theory ───────────────────────────────────────────────────────────
const t1 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Alapdefiníciók</h5>
<div class="def-box"><div class="box-body"><strong>Gráf:</strong> \(G=(V,E)\), ahol \(V\) a csúcsok és \(E\) az élek halmaza.</div></div>
<div class="def-box"><div class="box-body"><strong>Egyszerű gráf:</strong> nincs hurokél (\(e=\{v,v\}\)) és nincs többszörös él.</div></div>
<div class="def-box"><div class="box-body"><strong>Irányított gráf (digráf):</strong> az élek rendezett \((u,v)\) párok.</div></div>
<div class="def-box"><div class="box-body"><strong>Hipergráf:</strong> egy hiperél \(\ge 2\) csúcsot köthet össze.</div></div>
<div class="ex-box"><div class="box-body"><strong>Farkas-kecske-káposzta:</strong> 4 csúcs (Farkas, Kecske, Káposzta, Révész), az élek jelölik a lehetséges átkeléseket — a gráfelméleti modell azonnal megmutatja a megoldást.</div></div>`;

const t2 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Kézfogási tétel</h5>
<div class="thm-box"><div class="box-body">\[\sum_{v\in V}\delta(v) = 2|E|\]
Következmény: minden gráfban a <strong>páratlan fokszámú csúcsok száma páros</strong>.</div></div>
<div class="def-box"><div class="box-body"><strong>Fokszám \(\delta(v)\):</strong> a \(v\) csúcsra illeszkedő élek száma (hurokél kétszer számít).</div></div>
<div class="ex-box"><div class="box-body">Kémiai alkalmazás: az atom vegyértéke = fokszám. A kézfogási tétel indokolja, miért kell a vegyületek képletének teljesítenie a vegyérték-szabályt.</div></div>`;

const t3 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Összefüggőség és távolság</h5>
<div class="def-box"><div class="box-body"><strong>Összefüggő gráf:</strong> bármely két csúcs között vezet út.</div></div>
<div class="def-box"><div class="box-body"><strong>Komponens:</strong> maximális összefüggő részgráf.</div></div>
<div class="def-box"><div class="box-body"><strong>Távolság \(d(x,y)\):</strong> a legrövidebb út hossza (súlyozatlan gráfban). Teljesíti a metrika-axiómákat.</div></div>
<div class="def-box"><div class="box-body"><strong>Elvágó csúcs/él:</strong> elhagyásával az összefüggő gráf szétesik.</div></div>`;

const t4 = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Königsbergi hidak (1736)</h5>
<div class="def-box"><div class="box-body">Euler kérdése: bejárható-e Königsberg úgy, hogy minden hidat <strong>pontosan egyszer</strong> kereszteljünk át?</div></div>
<div class="thm-box"><div class="box-body"><strong>Euler tétele:</strong> Egy összefüggő gráfban létezik Euler-körút (minden élt pontosan egyszer bejáró zárt séta) akkor és csak akkor, ha minden csúcs fokszáma páros.<br><br>
Königsbergben mind a 4 csomópont <strong>páratlan fokszámú</strong> → nincs Euler-körút!</div></div>`;

const TABS: Tab[] = [
  { id: 'def', label: 'Alapfogalmak', content: <Cols variant="7-5"><DefCanvas /><RichTex html={t1} /></Cols> },
  { id: 'named', label: 'Nevezetes gráfok', content: <NamedCanvas /> },
  { id: 'deg', label: 'Fokszámok', content: <Cols variant="7-5"><DegCanvas /><RichTex html={t2} /></Cols> },
  { id: 'conn', label: 'Összefüggőség', content: <Cols variant="7-5"><ConnCanvas /><RichTex html={t3} /></Cols> },
  { id: 'koenig', label: 'Königsberg', content: <Cols variant="7-5"><KoenigsbergCanvas /><RichTex html={t4} /></Cols> },
];

export default function DimatCh9() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika · II.1. fejezet</p>
      <h1 className="ila__title">Gráf alapfogalmak</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
