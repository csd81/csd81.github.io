import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* ════════════════════════════════════════════════
   Network definitions
════════════════════════════════════════════════ */
const ACC = '#38bdf8';

interface NetEdge { u: number; v: number; c: number; f: number; }
interface NetState {
  nodes: string[];
  edges: NetEdge[];
  src: number;
  snk: number;
  n: number;
  na?: number;
  nb?: number;
}

const NET_DEFS: Record<string, { nodes: string[]; edges: [string, string, number][]; src: number; snk: number }> = {
  simple: {
    nodes: ['s','A','B','t'],
    edges: [['s','A',4],['s','B',2],['A','B',1],['A','t',3],['B','t',3]],
    src: 0, snk: 3,
  },
  book: {
    nodes: ['a','C','B'],
    edges: [['a','C',4],['a','B',2],['C','B',2]],
    src: 0, snk: 2,
  },
  diamond: {
    nodes: ['s','A','B','C','t'],
    edges: [['s','A',10],['s','C',10],['A','B',4],['C','B',6],['A','t',8],['B','t',10],['C','t',2]],
    src: 0, snk: 4,
  },
  grid: {
    nodes: ['s','A','B','C','D','t'],
    edges: [['s','A',5],['s','C',5],['A','B',3],['A','D',4],['C','B',3],['C','D',4],['B','t',6],['D','t',6]],
    src: 0, snk: 5,
  },
};

function makeNet(key: string): NetState {
  const def = NET_DEFS[key];
  return {
    nodes: def.nodes.slice(),
    edges: def.edges.map(([u, v, c]) => ({ u: def.nodes.indexOf(u), v: def.nodes.indexOf(v), c, f: 0 })),
    src: def.src, snk: def.snk, n: def.nodes.length,
  };
}

function netLayout(net: NetState, W: number, H: number): { x: number; y: number }[] {
  const pos: ({ x: number; y: number } | undefined)[] = new Array(net.n);
  const visited = new Set([net.src]);
  const layers: number[][] = [[net.src]];
  let cur = [net.src];
  while (cur.length) {
    const nxt: number[] = [];
    cur.forEach(u => {
      net.edges.filter(e => e.u === u && !visited.has(e.v)).forEach(e => { visited.add(e.v); nxt.push(e.v); });
    });
    if (nxt.length) layers.push(nxt);
    cur = nxt;
  }
  if (!layers.flat().includes(net.snk)) layers.push([net.snk]);
  const L = layers.length;
  layers.forEach((layer, li) => {
    const cnt = layer.length;
    layer.forEach((id, k) => {
      pos[id] = { x: W * 0.1 + (W * 0.8 / ((L - 1) || 1)) * li, y: H * 0.15 + (H * 0.7 / ((cnt - 1) || 1)) * k };
    });
  });
  for (let i = 0; i < net.n; i++) if (!pos[i]) pos[i] = { x: W / 2, y: H / 2 };
  return pos as { x: number; y: number }[];
}

function drawArrow(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, col: string, lw: number) {
  const dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy) || 1;
  const r = 18;
  const ex = x2 - dx / len * r, ey = y2 - dy / len * r;
  const sx = x1 + dx / len * r, sy = y1 + dy / len * r;
  ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey);
  ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.stroke();
  const ang = Math.atan2(ey - sy, ex - sx), as = 8;
  ctx.beginPath(); ctx.moveTo(ex, ey);
  ctx.lineTo(ex - as * Math.cos(ang - 0.5), ey - as * Math.sin(ang - 0.5));
  ctx.lineTo(ex - as * Math.cos(ang + 0.5), ey - as * Math.sin(ang + 0.5));
  ctx.closePath(); ctx.fillStyle = col; ctx.fill();
}

function isOnPath(path: number[], u: number, v: number): boolean {
  for (let i = 0; i < path.length - 1; i++) if (path[i] === u && path[i + 1] === v) return true;
  return false;
}

function drawNet(
  ctx: CanvasRenderingContext2D, W: number, H: number,
  net: NetState, pos: { x: number; y: number }[],
  augPath: number[] | null,
  cutSet: Set<number> | null,
  cutEdges: number[] | null,
) {
  ctx.clearRect(0, 0, W, H);
  net.edges.forEach((e, ei) => {
    const ps = pos[e.u], pt = pos[e.v];
    const isCut = cutEdges?.includes(ei);
    const isAug = augPath && isOnPath(augPath, e.u, e.v);
    const sat = e.c > 0 ? e.f / e.c : 0;
    const col = isCut ? '#ef4444' : isAug ? '#fbbf24' : sat > 0.99 ? '#f97316' : sat > 0 ? ACC : '#2a3a4a';
    drawArrow(ctx, ps.x, ps.y, pt.x, pt.y, col, isCut ? 3 : isAug ? 2.5 : 1.5);
    const mx = (ps.x + pt.x) / 2, my = (ps.y + pt.y) / 2;
    ctx.fillStyle = '#0d1117'; ctx.fillRect(mx - 18, my - 9, 36, 18);
    ctx.fillStyle = col; ctx.font = 'bold 10px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(`${e.f}/${e.c}`, mx, my);
  });
  net.nodes.forEach((label, i) => {
    const p = pos[i];
    const isS = i === net.src, isSk = i === net.snk;
    const inCut1 = cutSet?.has(i);
    const col = isS ? '#34d399' : isSk ? '#f97316' : inCut1 ? '#fbbf24' : ACC;
    ctx.beginPath(); ctx.arc(p.x, p.y, 16, 0, Math.PI * 2);
    ctx.fillStyle = col; ctx.fill(); ctx.strokeStyle = '#0e1014'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#000'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(label, p.x, p.y);
    if (isS)  { ctx.fillStyle = '#34d399'; ctx.font = 'bold 9px sans-serif'; ctx.fillText('forrás', p.x, p.y + 26); }
    if (isSk) { ctx.fillStyle = '#f97316'; ctx.font = 'bold 9px sans-serif'; ctx.fillText('nyelő',  p.x, p.y + 26); }
  });
}

/* ─── BFS augmenting path ─── */
interface ParentInfo { node: number; edge: number; fwd: boolean; }
function bfsAugPath(net: NetState): { to: number; from: number; edge: number; fwd: boolean }[] | null {
  const parent: (ParentInfo | number)[] = new Array(net.n).fill(-1);
  const visited = new Set([net.src]);
  const queue = [net.src];
  while (queue.length) {
    const u = queue.shift()!;
    if (u === net.snk) break;
    net.edges.forEach((e, i) => {
      if (e.u === u && !visited.has(e.v) && e.f < e.c) {
        visited.add(e.v); parent[e.v] = { node: u, edge: i, fwd: true }; queue.push(e.v);
      }
    });
    net.edges.forEach((e, i) => {
      if (e.v === u && !visited.has(e.u) && e.f > 0) {
        visited.add(e.u); parent[e.u] = { node: u, edge: i, fwd: false }; queue.push(e.u);
      }
    });
  }
  if (parent[net.snk] === -1) return null;
  const path: { to: number; from: number; edge: number; fwd: boolean }[] = [];
  let cur = net.snk;
  while (cur !== net.src) {
    const p = parent[cur] as ParentInfo;
    path.unshift({ to: cur, from: p.node, edge: p.edge, fwd: p.fwd });
    cur = p.node;
  }
  return path;
}

function augment(net: NetState, path: { to: number; from: number; edge: number; fwd: boolean }[]): number {
  const eps = Math.min(...path.map(s => s.fwd ? (net.edges[s.edge].c - net.edges[s.edge].f) : net.edges[s.edge].f));
  path.forEach(s => { if (s.fwd) net.edges[s.edge].f += eps; else net.edges[s.edge].f -= eps; });
  return eps;
}

function flowValue(net: NetState): number {
  let v = 0;
  net.edges.forEach(e => { if (e.u === net.src) v += e.f; if (e.v === net.src) v -= e.f; });
  return v;
}

function pathNodes(path: { to: number }[], src: number): number[] {
  return [src, ...path.map(s => s.to)];
}

/* ════════════════════════════════════════════════
   Tab 1: Folyam definíció
════════════════════════════════════════════════ */
function FlowTab() {
  const [netKey, setNetKey] = useState('simple');
  const [net, setNet] = useState<NetState>(() => makeNet('simple'));
  const [pos, setPos] = useState<{ x: number; y: number }[] | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function loadNet(key: string) {
    setNetKey(key);
    setNet(makeNet(key));
    setPos(null);
  }

  function kirchhoffOk(n: NetState): boolean {
    for (let v = 0; v < n.n; v++) {
      if (v === n.src || v === n.snk) continue;
      let inflow = 0, outflow = 0;
      n.edges.forEach(e => { if (e.v === v) inflow += e.f; if (e.u === v) outflow += e.f; });
      if (Math.abs(inflow - outflow) > 0.01) return false;
    }
    return true;
  }

  const fval = (() => {
    let v = 0;
    net.edges.filter(e => e.u === net.src).forEach(e => { v += e.f; });
    net.edges.filter(e => e.v === net.src).forEach(e => { v -= e.f; });
    return v;
  })();

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    const p = pos ?? netLayout(net, W, H);
    if (!pos) setPos(p);
    drawNet(ctx, W, H, net, p, null, null, null);
  }, [net, pos]);

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const cv = canvasRef.current; if (!cv || !pos) return;
    const rect = cv.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (cv.width / rect.width);
    const my = (e.clientY - rect.top) * (cv.height / rect.height);
    setNet(prev => {
      const next = { ...prev, edges: prev.edges.map(ed => ({ ...ed })) };
      next.edges.forEach(ed => {
        const ps = pos[ed.u], pt = pos[ed.v];
        const emx = (ps.x + pt.x) / 2, emy = (ps.y + pt.y) / 2;
        if (Math.hypot(mx - emx, my - emy) < 16) {
          ed.f = Math.min(ed.c, (ed.f + 1) % (ed.c + 1));
        }
      });
      return next;
    });
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-2">Hálózat (network)</div><div class="box-body">
<strong>G=(V,E,c)</strong>: irányított gráf, kapacitásfüggvény \(c:E\to\mathbb{R}_+\).<br>
<strong>a ∈ V</strong>: forrás (source) &nbsp;|&nbsp; <strong>b ∈ V</strong>: nyelő (sink).<br>
<strong>Folyam:</strong> \(f:E\to\mathbb{R}_+\cup\{0\}\), ahol \(f(e)\le c(e)\) és Kirchhoff I. törvénye teljesül minden belső csúcson.
</div></div>
<div class="thm-box"><div class="box-body">\[F(f):=f^+(a)-f^-(a)=f^-(b)-f^+(b)\]</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Preset hálózat</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {(['simple','book','diamond','grid'] as const).map(k => (
              <button key={k} className={`op-btn${netKey === k ? ' is-active' : ''}`} onClick={() => loadNet(k)}>
                {{ simple: 'Egyszerű', book: 'Tankönyv', diamond: 'Gyémánt', grid: 'Rács' }[k]}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', margin: '.3rem 0' }}>
            {[
              { v: net.n, l: 'csúcsok' },
              { v: net.edges.length, l: 'élek' },
              { v: fval, l: 'F(f) folyamérték' },
              { v: kirchhoffOk(net) ? '✓' : '✗', l: 'Kirchhoff' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: ACC }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="def-box" style={{ fontSize: '.68rem' }}>
            Kattints egy élre a folyamértéke módosításához (0…kapacitás). Az élfeliratok: <span style={{ color: ACC }}>f/c</span> alakban.
          </div>
        </div>
      </div>
      <div>
        <canvas ref={canvasRef} onClick={handleClick} style={{ width: '100%', height: 340, background: '#0d1117', borderRadius: '.5rem', display: 'block', cursor: 'pointer' }} />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Tab 2: Javítható utak
════════════════════════════════════════════════ */
function AugTab() {
  const [netKey, setNetKey] = useState('simple');
  const [net, setNet] = useState<NetState>(() => makeNet('simple'));
  const [pos, setPos] = useState<{ x: number; y: number }[] | null>(null);
  const [augPath, setAugPath] = useState<number[] | null>(null);
  const [iter, setIter] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function loadNet(key: string) {
    setNetKey(key); setNet(makeNet(key)); setPos(null); setAugPath(null); setIter(0); setLog([]);
  }

  function step() {
    const path = bfsAugPath(net);
    if (!path) {
      setLog(prev => [`✓ Nincs javítható út. Max-flow = ${flowValue(net)}`, ...prev]);
      setAugPath(null);
      return;
    }
    const eps = augment(net, path);
    const newIter = iter + 1;
    const nodes = pathNodes(path, net.src).map(i => net.nodes[i]).join('→');
    setIter(newIter);
    setAugPath(pathNodes(path, net.src));
    setLog(prev => [`#${newIter} ${nodes} (+${eps})`, ...prev]);
    setNet({ ...net, edges: net.edges.map(e => ({ ...e })) });
  }

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    const p = pos ?? netLayout(net, W, H);
    if (!pos) setPos(p);
    drawNet(ctx, W, H, net, p, augPath, null, null);
  }, [net, pos, augPath]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-2">14.9 Javítható út (correcting path)</div><div class="box-body">
Egy <strong>javítható út</strong> \(x_0=a,x_1,\ldots,x_k=b\) útban minden élen:<br>
&bull; előre mutató él: \(f&lt;c\) (van szabad kapacitás)<br>
&bull; visszafelé mutató él: \(f&gt;0\) (van visszafelé folyó anyag)
</div></div>
<div class="thm-box"><div class="box-body">\[\varepsilon := \min_i \varepsilon_i,\quad f\mapsto f+\varepsilon\]</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Preset</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {(['simple','book','diamond'] as const).map(k => (
              <button key={k} className={`op-btn${netKey === k ? ' is-active' : ''}`} onClick={() => loadNet(k)}>
                {{ simple: 'Egyszerű', book: 'Tankönyv', diamond: 'Gyémánt' }[k]}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.4rem' }}>
            <button className="op-btn" onClick={step}>Lépés →</button>
            <button className="op-btn" onClick={() => loadNet(netKey)}>Reset</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', margin: '.3rem 0' }}>
            {[
              { v: flowValue(net), l: 'F(f)' },
              { v: iter, l: 'iteráció' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: ACC }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '.65rem', color: '#8b949e', marginTop: '.5rem', lineHeight: 1.7, maxHeight: 140, overflowY: 'auto' }}>
            {log.map((line, i) => (
              <div key={i} style={{ padding: '.1rem 0', borderBottom: '1px solid #21262d11', color: line.startsWith('✓') ? '#f97316' : '#34d399' }}>{line}</div>
            ))}
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
   Tab 3: Max-flow (Ford-Fulkerson)
════════════════════════════════════════════════ */
function MaxFlowTab() {
  const [netKey, setNetKey] = useState('simple');
  const [net, setNet] = useState<NetState>(() => makeNet('simple'));
  const [pos, setPos] = useState<{ x: number; y: number }[] | null>(null);
  const [maxVal, setMaxVal] = useState(0);
  const [iters, setIters] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function loadNet(key: string) {
    setNetKey(key); setNet(makeNet(key)); setPos(null); setMaxVal(0); setIters(0); setLog([]);
  }

  function run() {
    const fresh = makeNet(netKey);
    const lines: string[] = [];
    let iter = 0;
    while (true) {
      const path = bfsAugPath(fresh);
      if (!path) break;
      const eps = augment(fresh, path);
      iter++;
      lines.push(`#${iter} ${pathNodes(path, fresh.src).map(i => fresh.nodes[i]).join('→')} (+${eps})`);
    }
    const fv = flowValue(fresh);
    lines.push(`Max F(f) = ${fv}`);
    setMaxVal(fv); setIters(iter); setLog(lines);
    setNet(fresh);
    setPos(null);
  }

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    const p = pos ?? netLayout(net, W, H);
    if (!pos) setPos(p);
    drawNet(ctx, W, H, net, p, null, null, null);
  }, [net, pos]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-2">14.8 Ford-Fulkerson tétel</div><div class="box-body">
\(\max\{F(f): f\text{ megengedett}\} = \min\{C(V_1,V_2): (V_1,V_2)\text{ vágás}\}\)
</div></div>
<div class="thm-box"><div class="box-body">\[\text{max-flow} = \text{min-cut}\]</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Preset</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {(['simple','book','diamond','grid'] as const).map(k => (
              <button key={k} className={`op-btn${netKey === k ? ' is-active' : ''}`} onClick={() => loadNet(k)}>
                {{ simple: 'Egyszerű', book: 'Tankönyv', diamond: 'Gyémánt', grid: 'Rács' }[k]}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.4rem' }}>
            <button className="op-btn" style={{ borderColor: '#34d399', color: '#34d399' }} onClick={run}>▶ Futtatás</button>
            <button className="op-btn" onClick={() => loadNet(netKey)}>Reset</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', margin: '.3rem 0' }}>
            {[
              { v: maxVal, l: 'max F(f)' },
              { v: iters, l: 'lépések' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: ACC }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '.65rem', lineHeight: 1.7, maxHeight: 140, overflowY: 'auto', color: '#8b949e', marginTop: '.5rem' }}>
            {log.map((line, i) => (
              <div key={i} style={{ color: line.startsWith('Max') ? '#f97316' : '#34d399', padding: '.1rem 0', borderBottom: '1px solid #21262d11' }}>{line}</div>
            ))}
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
   Tab 4: Min-cut
════════════════════════════════════════════════ */
function MinCutTab() {
  const [netKey, setNetKey] = useState('simple');
  const [net, setNet] = useState<NetState>(() => makeNet('simple'));
  const [pos, setPos] = useState<{ x: number; y: number }[] | null>(null);
  const [cutSet, setCutSet] = useState<Set<number> | null>(null);
  const [cutEdges, setCutEdges] = useState<number[] | null>(null);
  const [flowVal, setFlowVal] = useState(0);
  const [cutCap, setCutCap] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function loadNet(key: string) {
    setNetKey(key); setNet(makeNet(key)); setPos(null); setCutSet(null); setCutEdges(null); setFlowVal(0); setCutCap(0);
  }

  function run() {
    const fresh = makeNet(netKey);
    while (true) { const p = bfsAugPath(fresh); if (!p) break; augment(fresh, p); }
    const fv = flowValue(fresh);
    const V1 = new Set<number>();
    const queue = [fresh.src]; V1.add(fresh.src);
    while (queue.length) {
      const u = queue.shift()!;
      fresh.edges.forEach(e => {
        if (e.u === u && !V1.has(e.v) && e.f < e.c) { V1.add(e.v); queue.push(e.v); }
        if (e.v === u && !V1.has(e.u) && e.f > 0) { V1.add(e.u); queue.push(e.u); }
      });
    }
    const ce: number[] = [];
    let cap = 0;
    fresh.edges.forEach((e, i) => { if (V1.has(e.u) && !V1.has(e.v)) { ce.push(i); cap += e.c; } });
    setNet(fresh); setPos(null); setCutSet(V1); setCutEdges(ce); setFlowVal(fv); setCutCap(cap);
  }

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    const p = pos ?? netLayout(net, W, H);
    if (!pos) setPos(p);
    drawNet(ctx, W, H, net, p, null, cutSet, cutEdges);
    if (cutSet && pos) {
      const v1xs = Array.from(cutSet).map(i => pos[i].x);
      const v2xs: number[] = [];
      for (let i = 0; i < net.n; i++) if (!cutSet.has(i)) v2xs.push(pos[i].x);
      if (v1xs.length && v2xs.length) {
        const x = (Math.max(...v1xs) + Math.min(...v2xs)) / 2;
        ctx.beginPath(); ctx.moveTo(x, H * 0.05); ctx.lineTo(x, H * 0.95);
        ctx.strokeStyle = '#ef444466'; ctx.lineWidth = 2; ctx.setLineDash([6, 4]); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = '#ef4444'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('min-cut', x, H * 0.04);
      }
    }
  }, [net, pos, cutSet, cutEdges]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-2">14.7 Vágás (cut)</div><div class="box-body">
\((V_1,V_2)\) vágás: \(a\in V_1,\;b\in V_2\).<br>
Kapacitása: \(C(V_1,V_2)=\sum_{(x,y)\in E,\;x\in V_1,\;y\in V_2}c(x,y)\).<br>
A min-cut élek teli folyammal rendelkeznek.
</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Preset</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {(['simple','book','diamond'] as const).map(k => (
              <button key={k} className={`op-btn${netKey === k ? ' is-active' : ''}`} onClick={() => loadNet(k)}>
                {{ simple: 'Egyszerű', book: 'Tankönyv', diamond: 'Gyémánt' }[k]}
              </button>
            ))}
          </div>
          <button className="op-btn" style={{ borderColor: '#34d399', color: '#34d399', marginBottom: '.4rem' }} onClick={run}>▶ Max-flow + Min-cut</button>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', margin: '.3rem 0' }}>
            {[
              { v: flowVal, l: 'max F(f)' },
              { v: cutCap, l: 'min C(V₁,V₂)' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: ACC }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="def-box" style={{ fontSize: '.68rem' }}>Narancs: V₁ (forrás oldal), Kék: V₂ (nyelő oldal). Piros élek: min-cut élek.</div>
        </div>
      </div>
      <div>
        <canvas ref={canvasRef} style={{ width: '100%', height: 340, background: '#0d1117', borderRadius: '.5rem', display: 'block' }} />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Tab 5: Párosítás folyamra
════════════════════════════════════════════════ */
const BIP2_DEFS: Record<string, { A: string[]; B: string[]; ABedges: [number, number][] }> = {
  '3x3': { A: ['a1','a2','a3'], B: ['b1','b2','b3'], ABedges: [[0,0],[0,1],[1,1],[1,2],[2,2]] },
  '4x4': { A: ['a1','a2','a3','a4'], B: ['b1','b2','b3','b4'], ABedges: [[0,0],[0,2],[1,0],[1,1],[2,1],[2,3],[3,2],[3,3]] },
  hall: { A: ['a1','a2','a3'], B: ['b1','b2'], ABedges: [[0,0],[0,1],[1,0],[1,1],[2,0],[2,1]] },
};

function makeMatchNet(key: string): NetState & { na: number; nb: number } {
  const bp = BIP2_DEFS[key];
  const na = bp.A.length, nb = bp.B.length;
  const nodes = ['s', ...bp.A, ...bp.B, 't'];
  const edges: NetEdge[] = [];
  bp.A.forEach((_, i) => edges.push({ u: 0, v: 1 + i, c: 1, f: 0 }));
  bp.ABedges.forEach(([ai, bi]) => edges.push({ u: 1 + ai, v: 1 + na + bi, c: 1, f: 0 }));
  bp.B.forEach((_, i) => edges.push({ u: 1 + na + i, v: 1 + na + nb, c: 1, f: 0 }));
  return { nodes, edges, src: 0, snk: 1 + na + nb, n: nodes.length, na, nb };
}

function MatchTab() {
  const [netKey, setNetKey] = useState('3x3');
  const [net, setNet] = useState<NetState & { na: number; nb: number }>(() => makeMatchNet('3x3'));
  const [matchVal, setMatchVal] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function loadNet(key: string) {
    setNetKey(key); setNet(makeMatchNet(key)); setMatchVal(0);
  }

  function run() {
    const fresh = makeMatchNet(netKey);
    while (true) { const p = bfsAugPath(fresh); if (!p) break; augment(fresh, p); }
    const fv = flowValue(fresh);
    setMatchVal(fv); setNet(fresh);
  }

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const na = net.na ?? 3, nb = net.nb ?? 3;
    const pos: { x: number; y: number }[] = new Array(net.n);
    pos[0] = { x: W * 0.08, y: H / 2 };
    pos[net.snk] = { x: W * 0.92, y: H / 2 };
    for (let i = 0; i < na; i++) pos[1 + i] = { x: W * 0.32, y: H * 0.1 + (H * 0.8 / ((na - 1) || 1)) * i };
    for (let i = 0; i < nb; i++) pos[1 + na + i] = { x: W * 0.68, y: H * 0.1 + (H * 0.8 / ((nb - 1) || 1)) * i };
    net.edges.forEach(e => {
      const ps = pos[e.u], pt = pos[e.v];
      const isAB = e.u >= 1 && e.u <= na && e.v >= 1 + na && e.v < net.snk;
      const col = isAB && e.f > 0 ? '#fbbf24' : e.f > 0 ? ACC : '#2a3a4a';
      drawArrow(ctx, ps.x, ps.y, pt.x, pt.y, col, isAB && e.f > 0 ? 2.5 : 1.2);
    });
    net.nodes.forEach((label, i) => {
      const p = pos[i];
      const col = i === 0 ? '#34d399' : i === net.snk ? '#f97316' : i <= na ? ACC : '#a78bfa';
      ctx.beginPath(); ctx.arc(p.x, p.y, 14, 0, Math.PI * 2);
      ctx.fillStyle = col; ctx.fill(); ctx.strokeStyle = '#0e1014'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#000'; ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(label, p.x, p.y);
    });
  }, [net]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-2">Párosítás folyamra visszavezetése</div><div class="box-body">
Páros gráf \(G=(A\cup B, E)\) → hálózat: szuperforrás \(s\)-ből \(A\)-ba (kapacitás 1), minden \(A\to B\) élnek kapacitás 1, \(B\)-ből szupernyelő \(t\)-be kapacitás 1. Max folyam = max párosítás mérete.
</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Preset</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {(['3x3','4x4','hall'] as const).map(k => (
              <button key={k} className={`op-btn${netKey === k ? ' is-active' : ''}`} onClick={() => loadNet(k)}>
                {{ '3x3': '3+3 csúcs', '4x4': '4+4 csúcs', hall: 'Hall-példa' }[k]}
              </button>
            ))}
          </div>
          <button className="op-btn" style={{ borderColor: '#34d399', color: '#34d399', marginBottom: '.4rem' }} onClick={run}>▶ Max párosítás</button>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', margin: '.3rem 0' }}>
            {[
              { v: matchVal, l: '|párosítás|' },
              { v: matchVal, l: 'max folyam' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: ACC }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="def-box" style={{ fontSize: '.68rem' }}>Sárga élek: párosítás (flow=1 a középső éleken).</div>
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
  { id: 'flow',    label: 'Folyam',      content: <FlowTab /> },
  { id: 'aug',     label: 'Javítható',   content: <AugTab /> },
  { id: 'maxflow', label: 'Max-flow',    content: <MaxFlowTab /> },
  { id: 'mincut',  label: 'Min-cut',     content: <MinCutTab /> },
  { id: 'bip',     label: 'Párosítás',   content: <MatchTab /> },
];

export default function DimatCh22() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika II.14 — fejezet</p>
      <h1 className="ila__title">Hálózati folyamok</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
