import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// ─── Types ─────────────────────────────────────────────────────────
interface GNode { x: number; y: number; l: string; }
interface GEdge { u: number; v: number; w: number; d?: boolean; }
interface Graph { nodes: GNode[]; edges: GEdge[]; }

const INF: number = 1e9;

// ─── Graph presets ─────────────────────────────────────────────────
const PRESETS: Record<string, Graph> = {
  dijk_small: {
    nodes: [{x:80,y:160,l:'A'},{x:200,y:60,l:'B'},{x:200,y:260,l:'C'},{x:340,y:60,l:'D'},{x:340,y:260,l:'E'},{x:440,y:160,l:'F'}],
    edges: [{u:0,v:1,w:4},{u:0,v:2,w:2},{u:1,v:2,w:1},{u:1,v:3,w:5},{u:2,v:4,w:8},{u:3,v:4,w:2},{u:3,v:5,w:6},{u:4,v:5,w:3}]
  },
  dijk_medium: {
    nodes: [{x:60,y:150,l:'A'},{x:160,y:60,l:'B'},{x:160,y:250,l:'C'},{x:260,y:150,l:'D'},{x:360,y:60,l:'E'},{x:360,y:250,l:'F'},{x:460,y:150,l:'G'},{x:260,y:300,l:'H'}],
    edges: [{u:0,v:1,w:2},{u:0,v:2,w:6},{u:1,v:3,w:5},{u:2,v:3,w:8},{u:1,v:4,w:10},{u:3,v:4,w:15},{u:3,v:5,w:3},{u:4,v:6,w:4},{u:5,v:6,w:7},{u:2,v:7,w:2},{u:7,v:5,w:4}]
  },
  dijk_grid: {
    nodes: [{x:80,y:80,l:'0'},{x:200,y:80,l:'1'},{x:320,y:80,l:'2'},{x:440,y:80,l:'3'},{x:80,y:180,l:'4'},{x:200,y:180,l:'5'},{x:320,y:180,l:'6'},{x:440,y:180,l:'7'},{x:80,y:280,l:'8'},{x:200,y:280,l:'9'},{x:320,y:280,l:'A'},{x:440,y:280,l:'B'}],
    edges: [{u:0,v:1,w:3},{u:1,v:2,w:1},{u:2,v:3,w:4},{u:4,v:5,w:2},{u:5,v:6,w:5},{u:6,v:7,w:2},{u:8,v:9,w:3},{u:9,v:10,w:1},{u:10,v:11,w:6},{u:0,v:4,w:2},{u:1,v:5,w:3},{u:2,v:6,w:1},{u:3,v:7,w:4},{u:4,v:8,w:5},{u:5,v:9,w:2},{u:6,v:10,w:3},{u:7,v:11,w:1}]
  },
  dijk_dense: {
    nodes: [{x:120,y:80,l:'A'},{x:280,y:60,l:'B'},{x:400,y:120,l:'C'},{x:400,y:240,l:'D'},{x:280,y:280,l:'E'},{x:120,y:240,l:'F'}],
    edges: [{u:0,v:1,w:7},{u:0,v:2,w:9},{u:0,v:5,w:14},{u:1,v:2,w:10},{u:1,v:3,w:15},{u:2,v:3,w:11},{u:2,v:5,w:2},{u:3,v:4,w:6},{u:4,v:5,w:9}]
  },
  bfs_grid4: {
    nodes: [{x:80,y:80,l:'0'},{x:180,y:80,l:'1'},{x:280,y:80,l:'2'},{x:380,y:80,l:'3'},{x:80,y:180,l:'4'},{x:180,y:180,l:'5'},{x:280,y:180,l:'6'},{x:380,y:180,l:'7'},{x:80,y:280,l:'8'},{x:180,y:280,l:'9'},{x:280,y:280,l:'A'},{x:380,y:280,l:'B'}],
    edges: [{u:0,v:1,w:1},{u:1,v:2,w:1},{u:2,v:3,w:1},{u:4,v:5,w:1},{u:5,v:6,w:1},{u:6,v:7,w:1},{u:8,v:9,w:1},{u:9,v:10,w:1},{u:10,v:11,w:1},{u:0,v:4,w:1},{u:1,v:5,w:1},{u:2,v:6,w:1},{u:3,v:7,w:1},{u:4,v:8,w:1},{u:5,v:9,w:1},{u:6,v:10,w:1},{u:7,v:11,w:1}]
  },
  bfs_cycle: {
    nodes: [{x:240,y:60,l:'0'},{x:380,y:140,l:'1'},{x:340,y:290,l:'2'},{x:140,y:290,l:'3'},{x:100,y:140,l:'4'},{x:240,y:190,l:'5'}],
    edges: [{u:0,v:1,w:1},{u:1,v:2,w:1},{u:2,v:3,w:1},{u:3,v:4,w:1},{u:4,v:0,w:1},{u:0,v:5,w:1},{u:1,v:5,w:1},{u:2,v:5,w:1},{u:3,v:5,w:1},{u:4,v:5,w:1}]
  },
  bfs_tree: {
    nodes: [{x:240,y:40,l:'0'},{x:120,y:120,l:'1'},{x:360,y:120,l:'2'},{x:60,y:210,l:'3'},{x:180,y:210,l:'4'},{x:300,y:210,l:'5'},{x:420,y:210,l:'6'}],
    edges: [{u:0,v:1,w:1},{u:0,v:2,w:1},{u:1,v:3,w:1},{u:1,v:4,w:1},{u:2,v:5,w:1},{u:2,v:6,w:1}]
  },
  bfs_bipartite: {
    nodes: [{x:80,y:100,l:'A'},{x:80,y:180,l:'B'},{x:80,y:260,l:'C'},{x:300,y:80,l:'X'},{x:300,y:170,l:'Y'},{x:300,y:260,l:'Z'}],
    edges: [{u:0,v:3,w:1},{u:0,v:4,w:1},{u:1,v:3,w:1},{u:1,v:5,w:1},{u:2,v:4,w:1},{u:2,v:5,w:1}]
  },
  bf_neg: {
    nodes: [{x:80,y:160,l:'A'},{x:200,y:70,l:'B'},{x:200,y:250,l:'C'},{x:360,y:70,l:'D'},{x:360,y:250,l:'E'},{x:460,y:160,l:'F'}],
    edges: [{u:0,v:1,w:6,d:true},{u:0,v:2,w:7,d:true},{u:1,v:3,w:5,d:true},{u:2,v:1,w:-4,d:true},{u:2,v:4,w:9,d:true},{u:3,v:5,w:3,d:true},{u:4,v:3,w:-2,d:true},{u:4,v:5,w:4,d:true}]
  },
  bf_negcycle: {
    nodes: [{x:100,y:160,l:'A'},{x:250,y:70,l:'B'},{x:400,y:160,l:'C'},{x:250,y:250,l:'D'}],
    edges: [{u:0,v:1,w:1,d:true},{u:1,v:2,w:-3,d:true},{u:2,v:3,w:2,d:true},{u:3,v:1,w:1,d:true},{u:0,v:3,w:4,d:true}]
  },
  bf_dag: {
    nodes: [{x:60,y:160,l:'A'},{x:180,y:80,l:'B'},{x:180,y:240,l:'C'},{x:320,y:80,l:'D'},{x:320,y:240,l:'E'},{x:440,y:160,l:'F'}],
    edges: [{u:0,v:1,w:5,d:true},{u:0,v:2,w:3,d:true},{u:1,v:3,w:6,d:true},{u:1,v:4,w:-1,d:true},{u:2,v:4,w:4,d:true},{u:3,v:5,w:2,d:true},{u:4,v:5,w:7,d:true}]
  },
  fw_small: {
    nodes: [{x:200,y:60,l:'A'},{x:320,y:150,l:'B'},{x:260,y:260,l:'C'},{x:100,y:260,l:'D'},{x:60,y:150,l:'E'}],
    edges: [{u:0,v:1,w:3},{u:0,v:4,w:8},{u:1,v:2,w:2},{u:2,v:4,w:5},{u:3,v:0,w:4,d:true},{u:4,v:3,w:1,d:true},{u:1,v:3,w:7}]
  },
  fw_neg: {
    nodes: [{x:180,y:60,l:'A'},{x:320,y:60,l:'B'},{x:380,y:200,l:'C'},{x:240,y:270,l:'D'},{x:80,y:200,l:'E'}],
    edges: [{u:0,v:1,w:3,d:true},{u:1,v:2,w:-2,d:true},{u:2,v:3,w:2,d:true},{u:3,v:4,w:-1,d:true},{u:4,v:0,w:4,d:true},{u:0,v:2,w:8,d:true},{u:1,v:4,w:7,d:true}]
  },
  fw_directed: {
    nodes: [{x:160,y:80,l:'A'},{x:340,y:80,l:'B'},{x:420,y:210,l:'C'},{x:240,y:280,l:'D'},{x:80,y:210,l:'E'}],
    edges: [{u:0,v:1,w:5,d:true},{u:0,v:4,w:10,d:true},{u:1,v:2,w:3,d:true},{u:2,v:3,w:1,d:true},{u:3,v:0,w:7,d:true},{u:4,v:3,w:2,d:true},{u:1,v:4,w:6,d:true}]
  },
  race_mixed: {
    nodes: [{x:80,y:160,l:'A'},{x:200,y:60,l:'B'},{x:200,y:260,l:'C'},{x:340,y:60,l:'D'},{x:340,y:260,l:'E'},{x:460,y:160,l:'F'}],
    edges: [{u:0,v:1,w:4},{u:0,v:2,w:2},{u:1,v:2,w:1},{u:1,v:3,w:5},{u:2,v:4,w:8},{u:3,v:4,w:2},{u:3,v:5,w:6},{u:4,v:5,w:3}]
  },
  race_sparse: {
    nodes: [{x:80,y:160,l:'A'},{x:200,y:80,l:'B'},{x:320,y:160,l:'C'},{x:460,y:100,l:'D'},{x:460,y:240,l:'E'},{x:200,y:240,l:'F'}],
    edges: [{u:0,v:1,w:3},{u:1,v:2,w:2},{u:2,v:3,w:5},{u:2,v:4,w:7},{u:3,v:5,w:4},{u:4,v:5,w:1},{u:0,v:5,w:9}]
  },
  race_dense8: {
    nodes: [{x:240,y:50,l:'A'},{x:380,y:120,l:'B'},{x:430,y:220,l:'C'},{x:350,y:310,l:'D'},{x:200,y:330,l:'E'},{x:80,y:260,l:'F'},{x:60,y:150,l:'G'},{x:140,y:60,l:'H'}],
    edges: [{u:0,v:1,w:4},{u:0,v:2,w:11},{u:0,v:7,w:8},{u:1,v:2,w:8},{u:1,v:3,w:9},{u:2,v:4,w:5},{u:2,v:5,w:12},{u:3,v:4,w:10},{u:3,v:5,w:14},{u:4,v:5,w:4},{u:4,v:6,w:7},{u:5,v:6,w:9},{u:6,v:7,w:2},{u:7,v:1,w:2}]
  },
};

// ─── Drawing utility ───────────────────────────────────────────────
function drawGraph(
  canvas: HTMLCanvasElement,
  nodes: GNode[], edges: GEdge[],
  colors: (string | null)[] | null,
  edgeColors: (string | null)[] | null,
  directed: boolean,
  showWeights: boolean
) {
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  const W = canvas.width, H = canvas.height, R = 16;
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
  edges.forEach((e, i) => {
    const n1 = nodes[e.u], n2 = nodes[e.v];
    const col = edgeColors?.[i] ?? '#2a3a50';
    ctx.strokeStyle = col; ctx.lineWidth = edgeColors?.[i] ? 2.5 : 1.5;
    ctx.beginPath(); ctx.moveTo(n1.x, n1.y); ctx.lineTo(n2.x, n2.y); ctx.stroke();
    if (directed || e.d) {
      const ang = Math.atan2(n2.y - n1.y, n2.x - n1.x);
      const ax = n2.x - R * 1.1 * Math.cos(ang), ay = n2.y - R * 1.1 * Math.sin(ang);
      ctx.fillStyle = col;
      ctx.beginPath(); ctx.moveTo(ax, ay);
      ctx.lineTo(ax - 10 * Math.cos(ang - 0.4), ay - 10 * Math.sin(ang - 0.4));
      ctx.lineTo(ax - 10 * Math.cos(ang + 0.4), ay - 10 * Math.sin(ang + 0.4));
      ctx.closePath(); ctx.fill();
    }
    if (showWeights && e.w !== undefined) {
      const mx = (n1.x + n2.x) / 2, my = (n1.y + n2.y) / 2;
      ctx.fillStyle = '#f97316'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center';
      ctx.fillText(e.w < INF ? String(e.w) : '∞', mx + 3, my - 4);
    }
  });
  nodes.forEach((n, i) => {
    const col = colors?.[i] ?? '#1e3a5f';
    ctx.beginPath(); ctx.arc(n.x, n.y, R, 0, 2 * Math.PI);
    ctx.fillStyle = col; ctx.fill();
    ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.font = 'bold 12px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(n.l, n.x, n.y);
  });
}

function buildAdj(nodes: GNode[], edges: GEdge[], directed: boolean): { v: number; w: number; i: number }[][] {
  const adj = nodes.map(() => [] as { v: number; w: number; i: number }[]);
  edges.forEach((e, i) => {
    adj[e.u].push({ v: e.v, w: e.w, i });
    if (!directed && !e.d) adj[e.v].push({ v: e.u, w: e.w, i });
  });
  return adj;
}

// ─── TAB 1: Dijkstra ───────────────────────────────────────────────
function DijkstraTab() {
  const [presetKey, setPresetKey] = useState('dijk_small');
  const [src, setSrc] = useState(0);
  const [dst, setDst] = useState(5);
  const [dist, setDist] = useState<number[]>([]);
  const [prev, setPrev] = useState<number[]>([]);
  const [settled, setSettled] = useState<boolean[]>([]);
  const [current, setCurrent] = useState(-1);
  const [done, setDone] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [status, setStatus] = useState('Kattints Lépés-re az indításhoz.');
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const G = PRESETS[presetKey];
  const n = G.nodes.length;

  const resetState = (g: Graph, s: number, d: number) => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; }
    const newDist = Array(g.nodes.length).fill(INF);
    newDist[s] = 0;
    setDist(newDist); setPrev(Array(g.nodes.length).fill(-1));
    setSettled(Array(g.nodes.length).fill(false)); setCurrent(-1);
    setDone(false); setLog([]); setStatus('Kattints Lépés-re az indításhoz.');
    setDst(d < g.nodes.length ? d : g.nodes.length - 1);
  };

  useEffect(() => {
    const g = PRESETS[presetKey];
    const newSrc = 0, newDst = g.nodes.length - 1;
    setSrc(newSrc); setDst(newDst);
    resetState(g, newSrc, newDst);
  }, [presetKey]);

  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    const g = PRESETS[presetKey];
    const colors = g.nodes.map((_, i) => {
      if (i === dst && !done) return '#ef4444';
      if (settled[i]) return '#166534';
      if (i === current) return '#0ea5e9';
      return '#1e3a5f';
    });
    const edgeColors: (string | null)[] = g.edges.map(() => null);
    if (done && dist[dst] < INF) {
      let cur = dst; const pathNodes = new Set([cur]);
      while (prev[cur] !== -1) { const p = prev[cur]; pathNodes.add(p); cur = p; }
      g.edges.forEach((e, i) => { if (pathNodes.has(e.u) && pathNodes.has(e.v)) edgeColors[i] = '#4ade80'; });
    }
    drawGraph(cv, g.nodes, g.edges, colors, edgeColors, false, true);
  }, [presetKey, dist, settled, current, done, dst, prev]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  const addLog = (msg: string) => setLog(l => [...l, msg]);

  const step = () => {
    if (done) return;
    const g = PRESETS[presetKey];
    setDist(d => {
      setPrev(pv => {
        setSettled(s => {
          const newDist = [...d], newPrev = [...pv], newSettled = [...s];
          const adj = buildAdj(g.nodes, g.edges, false);
          let u = -1, best = INF;
          newDist.forEach((dd, i) => { if (!newSettled[i] && dd < best) { best = dd; u = i; } });
          if (u === -1) { setDone(true); return newSettled; }
          newSettled[u] = true; setCurrent(u);
          const ul = g.nodes[u].l;
          addLog(`Véglegesítve: ${ul} (l=${best})`);
          adj[u].forEach(({ v, w }) => {
            if (!newSettled[v] && newDist[u] + w < newDist[v]) {
              newDist[v] = newDist[u] + w; newPrev[v] = u;
              addLog(`  Frissítve: ${g.nodes[v].l} → l=${newDist[v]}`);
            }
          });
          if (newSettled.every(Boolean)) {
            setDone(true);
            const dv = newDist[dst];
            setStatus(dv < INF ? `Kész! ${g.nodes[src].l}→${g.nodes[dst].l} = ${dv}` : 'Kész! Cél nem elérhető.');
          }
          setPrev(newPrev);
          return newSettled;
        });
        return pv;
      });
      return d;
    });
  };

  const toggleAuto = () => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; return; }
    autoRef.current = setInterval(() => { step(); if (done) { clearInterval(autoRef.current!); autoRef.current = null; } }, 700);
  };

  const finish = () => { for (let i = 0; i < n + 2; i++) step(); };

  const presetNames: Record<string, string> = { dijk_small: 'Kis gráf (6)', dijk_medium: 'Közép (8)', dijk_grid: 'Rácsszerű', dijk_dense: 'Sűrű' };

  return (
    <div>
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
        {Object.keys(presetNames).map(k => (
          <button key={k} className={`op-btn${presetKey === k ? ' is-active' : ''}`} onClick={() => setPresetKey(k)}>{presetNames[k]}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1rem' }}>
        <div>
          <canvas ref={cvRef} width={480} height={320} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0f14' }} />
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem', fontSize: '.78rem', color: '#8ba3bc' }}>
            <span style={{ background: '#1e3a5f', borderRadius: '.3rem', padding: '.15rem .5rem' }}>Ideiglenes</span>
            <span style={{ background: '#0ea5e9', borderRadius: '.3rem', padding: '.15rem .5rem', color: '#000' }}>Aktuális</span>
            <span style={{ background: '#166534', borderRadius: '.3rem', padding: '.15rem .5rem' }}>Végleges</span>
            <span style={{ background: '#ef4444', borderRadius: '.3rem', padding: '.15rem .5rem' }}>Cél</span>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.5rem', alignItems: 'center', fontSize: '.82rem', color: '#8ba3bc' }}>
            <span>Forrás:
              <select className="ila-select" value={src} onChange={e => { const s = +e.target.value; setSrc(s); resetState(PRESETS[presetKey], s, dst); }} style={{ marginLeft: '.3rem', width: '60px' }}>
                {G.nodes.map((nd, i) => <option key={i} value={i}>{nd.l}</option>)}
              </select>
            </span>
            <span>Cél:
              <select className="ila-select" value={dst} onChange={e => setDst(+e.target.value)} style={{ marginLeft: '.3rem', width: '60px' }}>
                {G.nodes.map((nd, i) => <option key={i} value={i}>{nd.l}</option>)}
              </select>
            </span>
          </div>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
            <button className="op-btn" onClick={() => resetState(PRESETS[presetKey], src, dst)}>↺ Újra</button>
            <button className="op-btn is-active" onClick={step}>Lépés →</button>
            <button className="op-btn" onClick={toggleAuto}>▶ Auto</button>
            <button className="op-btn" onClick={finish}>⏩ Kész</button>
          </div>
          <div style={{ fontSize: '.8rem', color: '#8ba3bc', marginBottom: '.5rem' }}>{status}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.25rem', marginBottom: '.5rem' }}>
            {G.nodes.map((nd, i) => (
              <div key={i} className={`formula-chip`} style={{ fontSize: '.72rem', borderColor: settled[i] ? '#4ade80' : i === current ? '#38bdf8' : '#334155', color: settled[i] ? '#4ade80' : '#c9d1d9' }}>
                <b>{nd.l}</b>: {dist[i] >= INF ? '∞' : dist[i]}{settled[i] ? ' ✓' : ''}
              </div>
            ))}
          </div>
          <div ref={logRef} style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.5rem', fontSize: '.75rem', fontFamily: 'monospace', color: '#8ba3bc', height: '100px', overflowY: 'auto' }}>
            {log.map((l, i) => <div key={i} style={{ color: l.startsWith('Véglegesítve') ? '#38bdf8' : '#8ba3bc' }}>{l}</div>)}
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Az algoritmus lépései</span>
          <RichTex html={String.raw`<div style="font-size:.83rem;color:#c8d8e8;line-height:1.7"><b style="color:#38bdf8">Adminisztráció:</b> minden \(x\) csúcshoz: \(l(x)\) — eddig ismert legkisebb távolság, \(P(x)\) — megelőző csúcs, \(T(x)\) — ideiglenes/végleges.<br><br><b style="color:#38bdf8">Ciklus:</b><br>1. Válaszd a legkisebb \(l(y)\)-jű ideiglenes csúcsot → \(T(y):=\text{végleges}\)<br>2. Minden \(x\) szomszédra: ha \(l(y)+w(y,x) < l(x)\), frissítsd<br>3. Ismételd, amíg van véges ideiglenes csúcs.<br>Futásidő: \(\mathcal{O}(n^2)\), kupaccal: \(\mathcal{O}((n+m)\log n)\).</div>`} />
        </div>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Távolságtáblázat</span>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ borderCollapse: 'collapse', fontSize: '.8rem', width: '100%' }}>
              <thead><tr><th style={{ textAlign: 'left', padding: '.3rem .5rem', color: '#38bdf8' }}>Csúcs</th><th style={{ textAlign: 'left', padding: '.3rem .5rem', color: '#38bdf8' }}>l(x)</th><th style={{ textAlign: 'left', padding: '.3rem .5rem', color: '#38bdf8' }}>Állapot</th></tr></thead>
              <tbody>
                {G.nodes.map((nd, i) => (
                  <tr key={i}>
                    <td style={{ padding: '.25rem .5rem', borderTop: '1px solid #1e2a38' }}>{nd.l}</td>
                    <td style={{ padding: '.25rem .5rem', borderTop: '1px solid #1e2a38', color: i === src ? '#38bdf8' : settled[i] ? '#4ade80' : '#c8d8e8' }}>{dist[i] >= INF ? '∞' : dist[i]}</td>
                    <td style={{ padding: '.25rem .5rem', borderTop: '1px solid #1e2a38', color: '#8ba3bc', fontSize: '.75rem' }}>{settled[i] ? 'végleges' : 'ideiglenes'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TAB 2: BFS ────────────────────────────────────────────────────
function BFSTab() {
  const [presetKey, setPresetKey] = useState('bfs_grid4');
  const [src, setSrc] = useState(0);
  const [dst, setDst] = useState(11);
  const [bfsDist, setBfsDist] = useState<number[]>([]);
  const [bfsPrev, setBfsPrev] = useState<number[]>([]);
  const [visited, setVisited] = useState<boolean[]>([]);
  const [inQueue, setInQueue] = useState<boolean[]>([]);
  const [queue, setQueue] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [status, setStatus] = useState('Kattints Lépés-re.');
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const G = PRESETS[presetKey];

  const resetBFS = (g: Graph, s: number, d: number) => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; }
    const n = g.nodes.length;
    const nd = Array(n).fill(-1); nd[s] = 0;
    const nv = Array(n).fill(false); nv[s] = true;
    const ni = Array(n).fill(false); ni[s] = true;
    setBfsDist(nd); setBfsPrev(Array(n).fill(-1));
    setVisited(nv); setInQueue(ni); setQueue([s]);
    setDone(false); setLog([]); setStatus('Kattints Lépés-re.');
    setDst(d < n ? d : n - 1);
  };

  useEffect(() => {
    const g = PRESETS[presetKey];
    setSrc(0); setDst(g.nodes.length - 1);
    resetBFS(g, 0, g.nodes.length - 1);
  }, [presetKey]);

  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    const g = PRESETS[presetKey];
    const colors = g.nodes.map((_, i) => {
      if (i === dst && !done) return '#ef4444';
      if (visited[i]) return '#166534';
      if (inQueue[i]) return '#c2410c';
      return '#1e3a5f';
    });
    const edgeColors: (string | null)[] = g.edges.map(() => null);
    if (done && bfsDist[dst] >= 0) {
      let cur = dst; const pn = new Set([cur]);
      while (bfsPrev[cur] !== -1) { const p = bfsPrev[cur]; pn.add(p); cur = p; }
      g.edges.forEach((e, i) => { if (pn.has(e.u) && pn.has(e.v)) edgeColors[i] = '#4ade80'; });
    }
    drawGraph(cv, g.nodes, g.edges, colors, edgeColors, false, false);
  }, [presetKey, visited, inQueue, done, bfsDist, bfsPrev, dst]);

  useEffect(() => { if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight; }, [log]);

  const step = () => {
    if (done) return;
    const g = PRESETS[presetKey];
    setQueue(q => {
      if (!q.length) { setDone(true); return q; }
      const newQ = [...q];
      const u = newQ.shift()!;
      setBfsDist(d => {
        const nd = [...d];
        setBfsPrev(pv => {
          const np = [...pv];
          setVisited(vis => {
            const nv = [...vis];
            setInQueue(iq => {
              const ni = [...iq]; ni[u] = false;
              const adj = buildAdj(g.nodes, g.edges, false);
              const ul = g.nodes[u].l;
              setLog(l => [...l, `Meglátogatva: ${ul} (d=${nd[u]})`]);
              adj[u].forEach(({ v }) => {
                if (!nv[v]) { nv[v] = true; nd[v] = nd[u] + 1; np[v] = u; newQ.push(v); ni[v] = true; setLog(l => [...l, `  Sorhoz: ${g.nodes[v].l} (d=${nd[v]})`]); }
              });
              if (u === dst) {
                setDone(true);
                const dv = nd[dst];
                setStatus(dv >= 0 ? `Kész! ${g.nodes[src].l}→${g.nodes[dst].l} = ${dv} él` : `${g.nodes[dst].l} nem elérhető`);
              }
              return ni;
            });
            return nv;
          });
          return np;
        });
        return nd;
      });
      return newQ;
    });
  };

  const toggleAuto = () => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; return; }
    autoRef.current = setInterval(() => { step(); if (done) { clearInterval(autoRef.current!); autoRef.current = null; } }, 600);
  };

  const presetNames: Record<string, string> = { bfs_grid4: '4×4 rács', bfs_cycle: 'Körös', bfs_tree: 'Fa', bfs_bipartite: 'Kétoldalú' };

  return (
    <div>
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
        {Object.keys(presetNames).map(k => (
          <button key={k} className={`op-btn${presetKey === k ? ' is-active' : ''}`} onClick={() => setPresetKey(k)}>{presetNames[k]}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1rem' }}>
        <div>
          <canvas ref={cvRef} width={480} height={320} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0f14' }} />
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem', fontSize: '.78rem', color: '#8ba3bc' }}>
            <span style={{ background: '#1e3a5f', borderRadius: '.3rem', padding: '.15rem .5rem' }}>Fel nem tárt</span>
            <span style={{ background: '#c2410c', borderRadius: '.3rem', padding: '.15rem .5rem' }}>Sor</span>
            <span style={{ background: '#166534', borderRadius: '.3rem', padding: '.15rem .5rem' }}>Meglátogatott</span>
            <span style={{ background: '#ef4444', borderRadius: '.3rem', padding: '.15rem .5rem' }}>Cél</span>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.5rem', alignItems: 'center', fontSize: '.82rem', color: '#8ba3bc' }}>
            <span>Forrás: <select className="ila-select" value={src} onChange={e => { const s = +e.target.value; setSrc(s); resetBFS(PRESETS[presetKey], s, dst); }} style={{ marginLeft: '.3rem', width: '60px' }}>{G.nodes.map((nd, i) => <option key={i} value={i}>{nd.l}</option>)}</select></span>
            <span>Cél: <select className="ila-select" value={dst} onChange={e => setDst(+e.target.value)} style={{ marginLeft: '.3rem', width: '60px' }}>{G.nodes.map((nd, i) => <option key={i} value={i}>{nd.l}</option>)}</select></span>
          </div>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
            <button className="op-btn" onClick={() => resetBFS(PRESETS[presetKey], src, dst)}>↺ Újra</button>
            <button className="op-btn is-active" onClick={step}>Lépés →</button>
            <button className="op-btn" onClick={toggleAuto}>▶ Auto</button>
          </div>
          <div style={{ fontSize: '.8rem', color: '#8ba3bc', marginBottom: '.4rem' }}>{status}</div>
          <div style={{ fontSize: '.78rem', color: '#8ba3bc', fontWeight: 600, marginBottom: '.3rem' }}>Sor (queue):</div>
          <div style={{ fontFamily: 'monospace', fontSize: '.8rem', color: '#f97316', background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.4rem .6rem', minHeight: '2rem', marginBottom: '.4rem' }}>[ {queue.map(i => G.nodes[i]?.l ?? i).join(', ')} ]</div>
          <div style={{ fontSize: '.78rem', color: '#8ba3bc', fontWeight: 600, marginBottom: '.3rem' }}>Távolságok:</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.25rem', marginBottom: '.5rem' }}>
            {G.nodes.map((nd, i) => (
              <div key={i} className="formula-chip" style={{ fontSize: '.72rem', borderColor: bfsDist[i] >= 0 ? '#4ade80' : '#334155', color: bfsDist[i] >= 0 ? '#4ade80' : '#8ba3bc' }}>
                <b>{nd.l}</b>: {bfsDist[i] >= 0 ? bfsDist[i] : '?'}
              </div>
            ))}
          </div>
          <div ref={logRef} style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.5rem', fontSize: '.75rem', fontFamily: 'monospace', color: '#8ba3bc', height: '100px', overflowY: 'auto' }}>
            {log.map((l, i) => <div key={i} style={{ color: l.startsWith('Meglátogatva') ? '#38bdf8' : '#8ba3bc' }}>{l}</div>)}
          </div>
        </div>
      </div>
      <div className="info-box" style={{ marginTop: '1rem' }}>
        <span className="lbl" style={{ color: '#38bdf8' }}>BFS vs Dijkstra — mikor melyiket?</span>
        <div style={{ overflowX: 'auto' }}>
          <table className="cayley" style={{ width: '100%' }}>
            <thead><tr><th style={{ textAlign: 'left' }}>Tulajdonság</th><th style={{ textAlign: 'left' }}>BFS</th><th style={{ textAlign: 'left' }}>Dijkstra</th></tr></thead>
            <tbody>
              <tr><td>Gráf típusa</td><td>Súlyozatlan</td><td>Nemnegatív súlyú</td></tr>
              <tr><td>Adatszerkezet</td><td>FIFO sor</td><td>Prioritássor</td></tr>
              <RichTex html={String.raw`<tr><td>Futásidő</td><td>\(\mathcal{O}(n+m)\)</td><td>\(\mathcal{O}((n+m)\log n)\)</td></tr>`} />
              <tr><td>Negatív élek</td><td>Nem kezeli</td><td>Nem kezeli</td></tr>
              <tr><td>Eredmény</td><td>Min. élszámú út</td><td>Min. súlyú út</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── TAB 3: Bellman-Ford ───────────────────────────────────────────
function BellmanFordTab() {
  const [presetKey, setPresetKey] = useState('bf_neg');
  const [src, setSrc] = useState(0);
  const [bfDist, setBfDist] = useState<number[]>([]);
  const [bfPrev, setBfPrev] = useState<number[]>([]);
  const [updated, setUpdated] = useState<boolean[]>([]);
  const [iter, setIter] = useState(0);
  const [done, setDone] = useState(false);
  const [negCycle, setNegCycle] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [status, setStatus] = useState('Kattints Lépés-re.');
  const [history, setHistory] = useState<number[][]>([]);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const G = PRESETS[presetKey];

  const resetBF = (g: Graph, s: number) => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; }
    const nd = Array(g.nodes.length).fill(INF); nd[s] = 0;
    setBfDist(nd); setBfPrev(Array(g.nodes.length).fill(-1));
    setUpdated(Array(g.nodes.length).fill(false)); setIter(0);
    setDone(false); setNegCycle(false); setLog([]); setStatus('Kattints Lépés-re.');
    setHistory([[...nd]]);
  };

  useEffect(() => { setSrc(0); resetBF(PRESETS[presetKey], 0); }, [presetKey]);

  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    const g = PRESETS[presetKey];
    const colors = g.nodes.map((_, i) => negCycle ? '#7f1d1d' : updated[i] ? '#166534' : '#1e3a5f');
    drawGraph(cv, g.nodes, g.edges, colors, null, true, true);
  }, [presetKey, updated, negCycle]);

  useEffect(() => {
    const cv = chartRef.current; if (!cv) return;
    const g = PRESETS[presetKey];
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
    if (history.length < 2) return;
    const nn = g.nodes.length, iters = history.length;
    const cellW = W / nn, cellH = (H - 20) / iters;
    history.forEach((row, ri) => {
      row.forEach((v, ci) => {
        const alpha = v >= INF ? 0.1 : Math.max(0.1, 1 - v / 50);
        ctx.fillStyle = `rgba(56,189,248,${alpha})`; ctx.fillRect(ci * cellW + 1, 20 + ri * cellH + 1, cellW - 2, cellH - 2);
        ctx.fillStyle = '#fff'; ctx.font = '9px monospace'; ctx.textAlign = 'center';
        ctx.fillText(v >= INF ? '∞' : String(v), ci * cellW + cellW / 2, 20 + ri * cellH + cellH / 2 + 3);
      });
    });
    ctx.fillStyle = '#38bdf8'; ctx.font = 'bold 9px monospace'; ctx.textAlign = 'center';
    g.nodes.forEach((nd, i) => ctx.fillText(nd.l, i * cellW + cellW / 2, 12));
  }, [history, presetKey]);

  useEffect(() => { if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight; }, [log]);

  const step = () => {
    if (done) return;
    const g = PRESETS[presetKey];
    const n = g.nodes.length;
    if (iter >= n - 1) { setDone(true); setStatus(negCycle ? '⚠ Negatív kör van!' : 'Kész!'); return; }
    setBfDist(d => {
      const nd = [...d];
      setBfPrev(pv => {
        const np = [...pv];
        const newUpd = Array(n).fill(false);
        let anyUpdate = false;
        const newLog: string[] = [];
        g.edges.forEach(e => {
          if (nd[e.u] < INF && nd[e.u] + e.w < nd[e.v]) {
            nd[e.v] = nd[e.u] + e.w; np[e.v] = e.u; newUpd[e.v] = true; anyUpdate = true;
            newLog.push(`  Relaxált: ${g.nodes[e.u].l}→${g.nodes[e.v].l} → l=${nd[e.v]}`);
          }
        });
        const newIter = iter + 1;
        setIter(newIter);
        setLog(l => [...l, `Iteráció ${newIter}: ${anyUpdate ? 'frissítés' : 'nincs változás'}`, ...newLog]);
        setUpdated(newUpd);
        setHistory(h => [...h, [...nd]]);
        if (!anyUpdate) { setDone(true); setLog(l => [...l, 'Korai befejezés — konvergált.']); setStatus('Kész!'); }
        if (newIter === n - 1) {
          let negFound = false;
          g.edges.forEach(e => { if (nd[e.u] < INF && nd[e.u] + e.w < nd[e.v]) negFound = true; });
          if (negFound) { setNegCycle(true); setLog(l => [...l, '⚠ Negatív kör detektálva!']); setStatus('⚠ Negatív kör van!'); }
          setDone(true);
        }
        if (!anyUpdate || newIter === n - 1) {} else setStatus(`Iteráció ${newIter}/${n - 1}`);
        return np;
      });
      return nd;
    });
  };

  const toggleAuto = () => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; return; }
    autoRef.current = setInterval(() => { step(); if (done) { clearInterval(autoRef.current!); autoRef.current = null; } }, 800);
  };

  const presetNames: Record<string, string> = { bf_neg: 'Negatív él', bf_negcycle: 'Negatív kör', bf_dag: 'DAG' };

  return (
    <div>
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
        {Object.keys(presetNames).map(k => (
          <button key={k} className={`op-btn${presetKey === k ? ' is-active' : ''}`} onClick={() => setPresetKey(k)}>{presetNames[k]}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1rem' }}>
        <div>
          <canvas ref={cvRef} width={480} height={300} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0f14' }} />
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem', fontSize: '.78rem', color: '#8ba3bc' }}>
            <span style={{ background: '#1e3a5f', borderRadius: '.3rem', padding: '.15rem .5rem' }}>Nem relaxált</span>
            <span style={{ background: '#166534', borderRadius: '.3rem', padding: '.15rem .5rem' }}>Frissítve</span>
            <span style={{ background: '#ef4444', borderRadius: '.3rem', padding: '.15rem .5rem' }}>Negatív kör</span>
          </div>
        </div>
        <div>
          <div style={{ marginBottom: '.5rem', display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.82rem', color: '#8ba3bc' }}>
            Forrás: <select className="ila-select" value={src} onChange={e => { const s = +e.target.value; setSrc(s); resetBF(PRESETS[presetKey], s); }} style={{ width: '60px' }}>{G.nodes.map((nd, i) => <option key={i} value={i}>{nd.l}</option>)}</select>
          </div>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
            <button className="op-btn" onClick={() => resetBF(PRESETS[presetKey], src)}>↺ Újra</button>
            <button className="op-btn is-active" onClick={step}>Lépés →</button>
            <button className="op-btn" onClick={toggleAuto}>▶ Auto</button>
          </div>
          <div style={{ fontSize: '.8rem', color: negCycle ? '#ef4444' : '#8ba3bc', marginBottom: '.4rem' }}>{status}</div>
          <div style={{ fontSize: '.78rem', color: '#8ba3bc', marginBottom: '.3rem' }}>Iteráció: <strong>{iter}</strong> / {G.nodes.length - 1}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.25rem', marginBottom: '.5rem' }}>
            {G.nodes.map((nd, i) => (
              <div key={i} className="formula-chip" style={{ fontSize: '.72rem', borderColor: bfDist[i] < INF ? '#4ade80' : '#334155', color: bfDist[i] < INF ? '#4ade80' : '#8ba3bc' }}>
                <b>{nd.l}</b>: {bfDist[i] >= INF ? '∞' : bfDist[i]}
              </div>
            ))}
          </div>
          <div ref={logRef} style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.5rem', fontSize: '.75rem', fontFamily: 'monospace', color: '#8ba3bc', height: '100px', overflowY: 'auto' }}>
            {log.map((l, i) => <div key={i} style={{ color: l.startsWith('Iteráció') || l.startsWith('⚠') ? '#38bdf8' : '#8ba3bc' }}>{l}</div>)}
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Az algoritmus</span>
          <RichTex html={String.raw`<div style="font-size:.83rem;color:#c8d8e8;line-height:1.7"><b style="color:#38bdf8">Relaxáció:</b> minden \((u,v,w)\) élre:<br>ha \(l[u]+w < l[v]\): \(l[v] := l[u]+w,\; P[v]:=u\)<br><br><b style="color:#38bdf8">Ismétlés:</b> \(n-1\)-szer az összes élre<br><b style="color:#38bdf8">Negkör-detekció:</b> \(n\). körben is frissíthető → negatív kör<br>Futásidő: \(\mathcal{O}(n \cdot m)\)</div>`} />
        </div>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>l[v] értékek evolúciója</span>
          <canvas ref={chartRef} width={300} height={160} style={{ width: '100%', borderRadius: '.4rem', background: '#0a0f14' }} />
          <div style={{ fontSize: '.75rem', color: '#8ba3bc', marginTop: '.4rem' }}>Minden sor egy iteráció; oszlop egy csúcs l-értéke.</div>
        </div>
      </div>
    </div>
  );
}

// ─── TAB 4: Floyd-Warshall ─────────────────────────────────────────
function FloydWarshallTab() {
  const [presetKey, setPresetKey] = useState('fw_small');
  const [fwD, setFwD] = useState<number[][]>([]);
  const [fwNext, setFwNext] = useState<number[][]>([]);
  const [fwK, setFwK] = useState(0);
  const [fwUpdated, setFwUpdated] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [status, setStatus] = useState('k = 0 (kezdeti távolságmátrix)');
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);

  const G = PRESETS[presetKey];

  const buildMatrix = (g: Graph) => {
    const n = g.nodes.length;
    const D = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => i === j ? 0 : INF));
    const NEXT = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => j));
    g.edges.forEach(e => {
      if (D[e.u][e.v] > e.w) { D[e.u][e.v] = e.w; NEXT[e.u][e.v] = e.v; }
      if (!e.d && D[e.v][e.u] > e.w) { D[e.v][e.u] = e.w; NEXT[e.v][e.u] = e.u; }
    });
    return { D, NEXT };
  };

  const resetFW = (g: Graph) => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; }
    const { D, NEXT } = buildMatrix(g);
    setFwD(D); setFwNext(NEXT); setFwK(0); setFwUpdated([]);
    setDone(false); setStatus('k = 0 (kezdeti távolságmátrix)');
  };

  useEffect(() => { resetFW(PRESETS[presetKey]); }, [presetKey]);

  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    const g = PRESETS[presetKey];
    drawGraph(cv, g.nodes, g.edges, null, null, g.edges.some(e => e.d), true);
  }, [presetKey]);

  const step = () => {
    if (done) return;
    const g = PRESETS[presetKey];
    const n = g.nodes.length;
    if (fwK >= n) { setDone(true); setStatus('Kész! Teljes távolságmátrix.'); return; }
    const k = fwK;
    const newD = fwD.map(r => [...r]);
    const newNext = fwNext.map(r => [...r]);
    const upd: string[] = [];
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      if (newD[i][k] + newD[k][j] < newD[i][j]) {
        newD[i][j] = newD[i][k] + newD[k][j]; newNext[i][j] = newNext[i][k];
        upd.push(`${i},${j}`);
      }
    }
    setFwD(newD); setFwNext(newNext); setFwUpdated(upd); setFwK(k + 1);
    setStatus(`k=${k + 1} — ${g.nodes[k].l} csúcson keresztüli relaxáció`);
    if (k + 1 >= n) { setDone(true); setStatus('Kész! Teljes távolságmátrix.'); }
  };

  const toggleAuto = () => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; return; }
    autoRef.current = setInterval(() => { step(); if (done) { clearInterval(autoRef.current!); autoRef.current = null; } }, 800);
  };

  const labels = G.nodes.map(nd => nd.l);
  const matrixHtml = (M: number[][], updated: string[], isNext = false) => {
    let h = '<table class="cayley" style="font-size:.78rem;font-family:monospace"><thead><tr><th></th>';
    h += labels.map(l => `<th>${l}</th>`).join('') + '</tr></thead><tbody>';
    h += labels.map((rl, i) => `<tr><th>${rl}</th>${M[i].map((v, j) => {
      const cls = i === j ? 'diag' : updated.includes(`${i},${j}`) ? 'updated' : v >= INF ? 'inf' : '';
      const col = cls === 'updated' ? '#4ade80' : cls === 'diag' ? '#38bdf8' : cls === 'inf' ? '#3a4a5a' : '#c8d8e8';
      return `<td style="color:${col};background:${cls === 'updated' ? 'rgba(74,222,128,.08)' : 'transparent'}">${isNext ? (i === j ? '-' : labels[v] ?? v) : (v >= INF ? '∞' : v)}</td>`;
    }).join('')}</tr>`).join('');
    return h + '</tbody></table>';
  };

  const presetNames: Record<string, string> = { fw_small: 'Kis gráf (5)', fw_neg: 'Negatív élek', fw_directed: 'Irányított' };

  return (
    <div>
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
        {Object.keys(presetNames).map(k => (
          <button key={k} className={`op-btn${presetKey === k ? ' is-active' : ''}`} onClick={() => setPresetKey(k)}>{presetNames[k]}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <canvas ref={cvRef} width={360} height={260} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0f14' }} />
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
            <button className="op-btn" onClick={() => resetFW(PRESETS[presetKey])}>↺ Újra</button>
            <button className="op-btn is-active" onClick={step}>Lépés k++</button>
            <button className="op-btn" onClick={toggleAuto}>▶ Auto</button>
          </div>
          <div style={{ fontSize: '.8rem', color: '#8ba3bc', marginTop: '.4rem' }}>{status}</div>
          <div className="info-box" style={{ marginTop: '.75rem' }}>
            <span className="lbl" style={{ color: '#38bdf8' }}>Az algoritmus</span>
            <RichTex html={String.raw`<div style="font-size:.82rem;color:#c8d8e8;line-height:1.65">Inicializáció: \(D[i][j] = w(i,j)\) ha él, \(0\) ha \(i=j\), \(+\infty\) egyébként.<br><pre style="background:#0a0f14;padding:.5rem;border-radius:5px;font-size:.76rem;color:#38bdf8;margin:.4rem 0">for k in 1..n:
  for i in 1..n:
    for j in 1..n:
      if D[i][k]+D[k][j] &lt; D[i][j]:
        D[i][j] = D[i][k]+D[k][j]</pre>Futásidő: \(\mathcal{O}(n^3)\)</div>`} />
          </div>
        </div>
        <div>
          <div className="info-box">
            <div style={{ fontSize: '.78rem', color: '#8ba3bc', marginBottom: '.3rem' }}>
              D<sup>({fwK})</sup> mátrix — k={fwK}
            </div>
            <div style={{ overflowX: 'auto' }}>
              <RichTex key={`D${fwK}`} html={fwD.length ? matrixHtml(fwD, fwUpdated) : ''} />
            </div>
            <div style={{ fontSize: '.75rem', color: '#8ba3bc', marginTop: '.4rem' }}>Zöld = frissített. \(D[i][j] = \min(D[i][j], D[i][k]+D[k][j])\)</div>
          </div>
          <div className="info-box" style={{ marginTop: '.75rem' }}>
            <span className="lbl" style={{ color: '#38bdf8' }}>Következő-csúcs (NEXT) mátrix</span>
            <div style={{ overflowX: 'auto' }}>
              <RichTex key={`N${fwK}`} html={fwNext.length ? matrixHtml(fwNext, [], true) : ''} />
            </div>
            <div style={{ fontSize: '.75rem', color: '#8ba3bc', marginTop: '.4rem' }}>Út rekonstrukciója: kövessd a NEXT[i][j] mutatókat a célig.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TAB 5: Összehasonlítás ────────────────────────────────────────
function CompareTab() {
  const [presetKey, setPresetKey] = useState('race_mixed');
  const [src, setSrc] = useState(0);
  const [dst, setDst] = useState(5);
  const [results, setResults] = useState<string | null>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);

  const G = PRESETS[presetKey];

  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    drawGraph(cv, G.nodes, G.edges, null, null, false, true);
  }, [presetKey]);

  const runRace = () => {
    const { nodes, edges } = G;
    const n = nodes.length;
    const adj = buildAdj(nodes, edges, false);

    // Dijkstra full
    const dijkDist = Array(n).fill(INF); dijkDist[src] = 0;
    const dijkPrev = Array(n).fill(-1);
    const dijkSettled = Array(n).fill(false);
    for (let _ = 0; _ < n; _++) {
      let u = -1, best = INF;
      dijkDist.forEach((d, i) => { if (!dijkSettled[i] && d < best) { best = d; u = i; } });
      if (u === -1) break; dijkSettled[u] = true;
      adj[u].forEach(({ v, w }) => { if (dijkDist[u] + w < dijkDist[v]) { dijkDist[v] = dijkDist[u] + w; dijkPrev[v] = u; } });
    }

    // BFS full
    const bfsDist = Array(n).fill(-1); bfsDist[src] = 0;
    const bfsPrev = Array(n).fill(-1);
    const bfsVis = Array(n).fill(false); bfsVis[src] = true;
    const bfsQ = [src];
    const bfsAdj = buildAdj(nodes, edges, false);
    while (bfsQ.length) { const u = bfsQ.shift()!; bfsAdj[u].forEach(({ v }) => { if (!bfsVis[v]) { bfsVis[v] = true; bfsDist[v] = bfsDist[u] + 1; bfsPrev[v] = u; bfsQ.push(v); } }); }

    // Bellman-Ford full
    const bfD = Array(n).fill(INF); bfD[src] = 0;
    for (let i = 0; i < n - 1; i++) edges.forEach(e => { if (bfD[e.u] < INF && bfD[e.u] + e.w < bfD[e.v]) bfD[e.v] = bfD[e.u] + e.w; });

    // Floyd-Warshall
    const fwMat = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => i === j ? 0 : INF));
    edges.forEach(e => { if (fwMat[e.u][e.v] > e.w) fwMat[e.u][e.v] = e.w; if (!e.d && fwMat[e.v][e.u] > e.w) fwMat[e.v][e.u] = e.w; });
    for (let k = 0; k < n; k++) for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (fwMat[i][k] + fwMat[k][j] < fwMat[i][j]) fwMat[i][j] = fwMat[i][k] + fwMat[k][j];

    const fmt = (v: number) => v >= INF || v < 0 ? '∞' : String(v);
    const srcL = nodes[src].l, dstL = nodes[dst].l;
    setResults(`${srcL} → ${dstL}:\nBFS: ${fmt(bfsDist[dst])} él\nDijkstra: ${fmt(dijkDist[dst])}\nBellman-Ford: ${fmt(bfD[dst])}\nFloyd-Warshall: ${fmt(fwMat[src][dst])}`);

    // draw path
    const colors = nodes.map((_, i) => i === src ? '#0ea5e9' : i === dst ? '#ef4444' : '#1e3a5f');
    const edgeColors: (string | null)[] = edges.map(() => null);
    if (dijkDist[dst] < INF) {
      let cur = dst; const pn = new Set([cur]);
      while (dijkPrev[cur] !== -1) { const p = dijkPrev[cur]; pn.add(p); cur = p; }
      edges.forEach((e, i) => { if (pn.has(e.u) && pn.has(e.v)) edgeColors[i] = '#4ade80'; });
    }
    const cv = cvRef.current; if (cv) drawGraph(cv, nodes, edges, colors, edgeColors, false, true);
  };

  const presetNames: Record<string, string> = { race_mixed: 'Vegyes súlyok', race_sparse: 'Ritka', race_dense8: 'Sűrű (8)' };

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Algoritmus-verseny — ugyanaz a gráf, négy megközelítés</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
          {Object.keys(presetNames).map(k => (
            <button key={k} className={`op-btn${presetKey === k ? ' is-active' : ''}`} onClick={() => setPresetKey(k)}>{presetNames[k]}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1rem' }}>
          <canvas ref={cvRef} width={540} height={300} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0f14' }} />
          <div>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.5rem', alignItems: 'center', fontSize: '.82rem', color: '#8ba3bc' }}>
              <span>Forrás: <select className="ila-select" value={src} onChange={e => setSrc(+e.target.value)} style={{ width: '60px' }}>{G.nodes.map((nd, i) => <option key={i} value={i}>{nd.l}</option>)}</select></span>
              <span>Cél: <select className="ila-select" value={dst} onChange={e => setDst(+e.target.value)} style={{ width: '60px' }}>{G.nodes.map((nd, i) => <option key={i} value={i}>{nd.l}</option>)}</select></span>
            </div>
            <button className="op-btn is-active" style={{ width: '100%', marginBottom: '.5rem' }} onClick={runRace}>▶ Futtatás</button>
            {results && (
              <div style={{ fontSize: '.82rem', fontFamily: 'monospace', color: '#8ba3bc', whiteSpace: 'pre', lineHeight: 1.8 }}>
                {results.split('\n').map((line, i) => {
                  const col = line.startsWith('BFS') ? '#38bdf8' : line.startsWith('Dijkstra') ? '#4ade80' : line.startsWith('Bellman') ? '#f97316' : line.startsWith('Floyd') ? '#a78bfa' : '#c8d8e8';
                  return <div key={i} style={{ color: col }}>{line}</div>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="info-box" style={{ marginTop: '1rem' }}>
        <span className="lbl" style={{ color: '#38bdf8' }}>Összehasonlítási táblázat</span>
        <div style={{ overflowX: 'auto' }}>
          <table className="cayley" style={{ width: '100%', fontSize: '.82rem' }}>
            <thead><tr><th style={{ textAlign: 'left' }}>Algoritmus</th><th style={{ textAlign: 'left' }}>Gráf</th><th>Neg. él</th><th>Neg. kör</th><th>Forrás</th><th style={{ textAlign: 'left' }}>Futásidő</th></tr></thead>
            <tbody>
              <RichTex html={String.raw`
<tr><td style="color:#38bdf8;font-weight:600">BFS</td><td>Súlyozatlan</td><td>—</td><td>—</td><td>Egy</td><td>\(\mathcal{O}(n+m)\)</td></tr>
<tr><td style="color:#4ade80;font-weight:600">Dijkstra</td><td>Nemnegatív</td><td>✗</td><td>✗</td><td>Egy</td><td>\(\mathcal{O}((n+m)\log n)\)</td></tr>
<tr><td style="color:#f97316;font-weight:600">Bellman-Ford</td><td>Irányított</td><td>✓</td><td>Detektálja</td><td>Egy</td><td>\(\mathcal{O}(n \cdot m)\)</td></tr>
<tr><td style="color:#a78bfa;font-weight:600">Floyd-Warshall</td><td>Általános</td><td>✓</td><td>Detektálja</td><td>Összes pár</td><td>\(\mathcal{O}(n^3)\)</td></tr>`} />
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Mikor melyiket?</span>
          <div style={{ fontSize: '.83rem', color: '#c8d8e8', lineHeight: 1.8 }}>
            <span style={{ color: '#38bdf8' }}>BFS</span> — labirintus, szociális hálók (hop-távolság)<br />
            <span style={{ color: '#4ade80' }}>Dijkstra</span> — GPS, hálózati routing (OSPF), játékok<br />
            <span style={{ color: '#f97316' }}>Bellman-Ford</span> — pénzügyi arbitrázs, BGP routing<br />
            <span style={{ color: '#a78bfa' }}>Floyd-Warshall</span> — kis gráf, minden pár, tranzitív lezárt
          </div>
        </div>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Speciális esetek</span>
          <RichTex html={String.raw`<div style="font-size:.83rem;color:#c8d8e8;line-height:1.8"><b style="color:#38bdf8">DAG (körmentes irányított):</b> topológiai sorrend + egy relaxáció → \(\mathcal{O}(n+m)\)<br><b style="color:#38bdf8">Irányítatlan fa:</b> BFS/DFS egyszer → \(\mathcal{O}(n)\)<br><b style="color:#38bdf8">Euklidészi gráf:</b> A* heurisztikával Dijkstra gyorsítható</div>`} />
        </div>
      </div>
    </div>
  );
}

// ─── TABS ──────────────────────────────────────────────────────────
const TABS: Tab[] = [
  { id: 'dijk', label: 'Dijkstra', content: <DijkstraTab /> },
  { id: 'bfs',  label: 'BFS legrövidebb út', content: <BFSTab /> },
  { id: 'bell', label: 'Bellman-Ford', content: <BellmanFordTab /> },
  { id: 'floyd', label: 'Floyd-Warshall', content: <FloydWarshallTab /> },
  { id: 'cmp', label: 'Összehasonlítás', content: <CompareTab /> },
];

export default function DimatCh13() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika — 13. fejezet</p>
      <h1 className="ila__title">Útkeresési algoritmusok</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
