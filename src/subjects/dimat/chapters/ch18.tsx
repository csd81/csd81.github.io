import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* ══════════════════════════════════════════════════════════
   Shared helpers
══════════════════════════════════════════════════════════ */
const PALETTE = ['#ef4444', '#3b82f6', '#22c55e', '#f59e0b', '#a855f7', '#ec4899', '#14b8a6', '#f97316'];
const PALETTE_NAMES = ['piros', 'kék', 'zöld', 'sárga', 'lila', 'rózsaszín', 'türkiz', 'narancs'];

type Pt = { x: number; y: number };
type Graph = { nodes: Pt[]; edges: [number, number][] };

function buildAdj(n: number, edges: [number, number][]): number[][] {
  const adj: number[][] = Array.from({ length: n }, () => []);
  edges.forEach(([u, v]) => { adj[u].push(v); adj[v].push(u); });
  return adj;
}

function greedyColor(order: number[], adj: number[][]): number[] {
  const n = adj.length;
  const col = new Array<number>(n).fill(-1);
  order.forEach(v => {
    const used = new Set(adj[v].map(u => col[u]).filter(c => c >= 0));
    let c = 0; while (used.has(c)) c++;
    col[v] = c;
  });
  return col;
}

function dsaturColor(adj: number[][], n: number): number[] {
  const col = new Array<number>(n).fill(-1);
  const sat = new Array<number>(n).fill(0);
  const deg = adj.map(a => a.length);
  for (let step = 0; step < n; step++) {
    let best = -1;
    for (let v = 0; v < n; v++) {
      if (col[v] < 0 && (best < 0 || sat[v] > sat[best] || (sat[v] === sat[best] && deg[v] > deg[best])))
        best = v;
    }
    const used = new Set(adj[best].map(u => col[u]).filter(c => c >= 0));
    let c = 0; while (used.has(c)) c++;
    col[best] = c;
    adj[best].forEach(u => {
      if (col[u] < 0) {
        const s = new Set(adj[u].map(w => col[w]).filter(x => x >= 0));
        sat[u] = s.size;
      }
    });
  }
  return col;
}

/* ══════════════════════════════════════════════════════════
   TAB 1 — Csúcsszínezés
══════════════════════════════════════════════════════════ */
const COLOR_PRESETS: Record<string, Graph> = {
  c5: {
    nodes: [{ x: 280, y: 80 }, { x: 440, y: 200 }, { x: 380, y: 300 }, { x: 180, y: 300 }, { x: 120, y: 200 }],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]],
  },
  k4: {
    nodes: [{ x: 280, y: 60 }, { x: 460, y: 240 }, { x: 280, y: 310 }, { x: 100, y: 240 }],
    edges: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]],
  },
  petersen: {
    nodes: [
      { x: 280, y: 50 }, { x: 440, y: 170 }, { x: 380, y: 310 }, { x: 180, y: 310 }, { x: 120, y: 170 },
      { x: 280, y: 140 }, { x: 340, y: 200 }, { x: 310, y: 270 }, { x: 250, y: 270 }, { x: 220, y: 200 },
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [5, 6], [6, 7], [7, 8], [8, 9], [9, 5], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9]],
  },
  bipartite: {
    nodes: [{ x: 140, y: 100 }, { x: 280, y: 100 }, { x: 420, y: 100 }, { x: 140, y: 260 }, { x: 280, y: 260 }, { x: 420, y: 260 }],
    edges: [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
  },
  wheel: {
    nodes: [{ x: 280, y: 170 }, { x: 280, y: 50 }, { x: 420, y: 140 }, { x: 380, y: 300 }, { x: 180, y: 300 }, { x: 140, y: 140 }],
    edges: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [2, 3], [3, 4], [4, 5], [5, 1]],
  },
  crown: {
    nodes: [{ x: 180, y: 80 }, { x: 380, y: 80 }, { x: 460, y: 220 }, { x: 380, y: 310 }, { x: 180, y: 310 }, { x: 100, y: 220 }],
    edges: [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
  },
};

function ColoringCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [preset, setPreset] = useState<string>('c5');
  const [colors, setColors] = useState<number[]>([]);
  const [log, setLog] = useState('Válassz algoritmust a futtatáshoz.');
  const [metrics, setMetrics] = useState({ chi: '—', delta: '—', brooks: '—', type: '—' });
  const [legend, setLegend] = useState<number[]>([]);

  const g = COLOR_PRESETS[preset];

  const draw = useCallback((col: number[]) => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const r = Math.max(14, 22 - g.nodes.length * 0.5);
    ctx.clearRect(0, 0, cv.width, cv.height);
    g.edges.forEach(([u, v]) => {
      ctx.beginPath();
      ctx.moveTo(g.nodes[u].x, g.nodes[u].y);
      ctx.lineTo(g.nodes[v].x, g.nodes[v].y);
      ctx.strokeStyle = '#2a3a50'; ctx.lineWidth = 2; ctx.stroke();
    });
    g.nodes.forEach((nd, i) => {
      ctx.beginPath(); ctx.arc(nd.x, nd.y, r, 0, Math.PI * 2);
      ctx.fillStyle = col[i] >= 0 ? PALETTE[col[i]] : '#1e2a38'; ctx.fill();
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(10, r * 0.7)}px sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(i), nd.x, nd.y);
    });
  }, [preset, g]);

  useEffect(() => {
    setColors(new Array(g.nodes.length).fill(-1));
    setMetrics({ chi: '—', delta: '—', brooks: '—', type: '—' });
    setLegend([]);
    setLog('Válassz algoritmust a futtatáshoz.');
  }, [preset]);

  useEffect(() => { draw(colors); }, [colors, draw]);

  function runAlg(alg: 'greedy' | 'welsh' | 'dsatur') {
    const n = g.nodes.length;
    const adj = buildAdj(n, g.edges);
    const deg = adj.map(a => a.length);
    const delta = Math.max(...deg);
    let col: number[], name: string;
    if (alg === 'greedy') { col = greedyColor([...Array(n).keys()], adj); name = 'Mohó'; }
    else if (alg === 'welsh') {
      const order = [...Array(n).keys()].sort((a, b) => deg[b] - deg[a]);
      col = greedyColor(order, adj); name = 'Welsh-Powell';
    } else { col = dsaturColor(adj, n); name = 'DSatur'; }
    const chi = Math.max(...col) + 1;
    const isCycle = g.edges.length === n && deg.every(d => d === 2);
    const isComplete = g.edges.length === n * (n - 1) / 2;
    const brooks = (isCycle && n % 2 !== 0) || isComplete ? delta + 1 : delta;
    const type = isComplete ? 'Kₙ' : isCycle ? (n % 2 ? 'Páratlan C' : 'Páros C') : 'Általános';
    setColors(col);
    setMetrics({ chi: String(chi), delta: String(delta), brooks: String(brooks), type });
    setLegend([...new Set(col)].sort());
    setLog(`${name}: ${chi} szín elegendő. Sorrend: ${col.map((c, i) => i + '→' + PALETTE_NAMES[c]).join(', ')}.`);
  }

  const presets: [string, string][] = [['c5', 'C₅'], ['k4', 'K₄'], ['petersen', 'Petersen'], ['bipartite', 'K₃,₃'], ['wheel', 'Kerék W₅'], ['crown', 'Korona C₆']];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Interaktív gráf – csúcsszínezés</span>
        <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
          {presets.map(([k, lbl]) => (
            <button key={k} className={`op-btn${preset === k ? ' is-active' : ''}`} onClick={() => setPreset(k)}>{lbl}</button>
          ))}
        </div>
        <canvas ref={canvasRef} width={560} height={340} style={{ width: '100%', maxWidth: 560, background: '#0a0f14', borderRadius: '.5rem' }} />
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
          <button className="op-btn" style={{ background: '#38bdf8', color: '#000', borderColor: '#38bdf8' }} onClick={() => runAlg('greedy')}>Mohó</button>
          <button className="op-btn" style={{ background: '#38bdf8', color: '#000', borderColor: '#38bdf8' }} onClick={() => runAlg('welsh')}>Welsh-Powell</button>
          <button className="op-btn" style={{ background: '#38bdf8', color: '#000', borderColor: '#38bdf8' }} onClick={() => runAlg('dsatur')}>DSatur</button>
          <button className="op-btn" style={{ marginLeft: 'auto' }} onClick={() => { setColors(new Array(g.nodes.length).fill(-1)); setMetrics({ chi: '—', delta: '—', brooks: '—', type: '—' }); setLegend([]); setLog('Válassz algoritmust a futtatáshoz.'); }}>Visszaállítás</button>
        </div>
        <div style={{ background: '#060a0f', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.5rem', fontSize: '.78rem', color: '#8ba3bc', height: 80, overflowY: 'auto', fontFamily: 'monospace', marginTop: '.5rem' }}>{log}</div>
      </div>
      <div>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: '#38bdf8' }}>Eredmény</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.4rem', marginBottom: '.5rem' }}>
            {[['χ(G) talált', metrics.chi], ['Δ(G) max fok', metrics.delta], ['Brooks korlát', metrics.brooks], ['Típus', metrics.type]].map(([lbl, val]) => (
              <div key={lbl} style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.4rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#38bdf8' }}>{val}</div>
                <div style={{ fontSize: '.7rem', color: '#8ba3bc' }}>{lbl}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '.3rem', flexWrap: 'wrap' }}>
            {legend.map(c => (
              <span key={c} style={{ fontSize: '.75rem', padding: '.15rem .5rem', borderRadius: '.25rem', background: PALETTE[c], color: '#000', border: `1px solid ${PALETTE[c]}` }}>{PALETTE_NAMES[c]}</span>
            ))}
          </div>
        </div>
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">Fogalmak</span>
<table style="width:100%;border-collapse:collapse;font-size:.82rem">
<thead><tr><th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">Fogalom</th><th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">Definíció</th></tr></thead>
<tbody>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(\chi(G)\)</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Minimális \(k\), amellyel \(G\) jólszínezhető</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Mohó</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Eredeti sorrend, első szabad szín</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Welsh-Powell</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Csökkenő fokszám, majd mohó</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">DSatur</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Max telítettségi fok szerint dinamikus</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Brooks</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(\chi(G) \le \Delta(G)\) (kivéve \(K_n\), páratlan \(C\))</td></tr>
</tbody></table>`} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TAB 2 — Síkgráfok & 5-szín
══════════════════════════════════════════════════════════ */
type MapRegion = { label: string; path: [number, number][] };
type MapData = { regions: MapRegion[]; adj: number[][] };

const MAP_SIMPLE: MapData = {
  regions: [
    { label: 'A', path: [[30, 30], [200, 30], [200, 180], [30, 180]] },
    { label: 'B', path: [[200, 30], [380, 30], [380, 180], [200, 180]] },
    { label: 'C', path: [[380, 30], [530, 30], [530, 180], [380, 180]] },
    { label: 'D', path: [[30, 180], [200, 180], [200, 320], [30, 320]] },
    { label: 'E', path: [[200, 180], [380, 180], [380, 320], [200, 320]] },
    { label: 'F', path: [[380, 180], [530, 180], [530, 320], [380, 320]] },
  ],
  adj: [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]],
};

const MAP_COMPLEX: MapData = {
  regions: [
    { label: 'A', path: [[20, 20], [200, 20], [180, 130], [20, 130]] },
    { label: 'B', path: [[200, 20], [380, 20], [380, 130], [180, 130]] },
    { label: 'C', path: [[380, 20], [540, 20], [540, 130], [380, 130]] },
    { label: 'D', path: [[20, 130], [180, 130], [160, 240], [20, 240]] },
    { label: 'E', path: [[180, 130], [380, 130], [380, 240], [160, 240]] },
    { label: 'F', path: [[380, 130], [540, 130], [540, 240], [380, 240]] },
    { label: 'G', path: [[20, 240], [160, 240], [140, 320], [20, 320]] },
    { label: 'H', path: [[160, 240], [380, 240], [360, 320], [140, 320]] },
    { label: 'I', path: [[380, 240], [540, 240], [540, 320], [360, 320]] },
  ],
  adj: [[1, 3], [0, 2, 4], [1, 5], [0, 4, 6], [1, 3, 5, 7], [2, 4, 8], [3, 7], [4, 6, 8], [5, 7]],
};

function PlanarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mapKey, setMapKey] = useState<'simple' | 'complex'>('simple');
  const [mapColors, setMapColors] = useState<number[]>(new Array(MAP_SIMPLE.regions.length).fill(-1));
  const [log, setLog] = useState('Indítsd el az algoritmust.');
  const [usedColors, setUsedColors] = useState<string>('—');

  const mapData = mapKey === 'simple' ? MAP_SIMPLE : MAP_COMPLEX;

  const draw = useCallback((col: number[]) => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    mapData.regions.forEach((reg, i) => {
      ctx.beginPath();
      reg.path.forEach(([x, y], j) => j ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
      ctx.closePath();
      ctx.fillStyle = col[i] >= 0 ? PALETTE[col[i]] : '#1a2233'; ctx.fill();
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2; ctx.stroke();
      const cx2 = reg.path.reduce((s, p) => s + p[0], 0) / reg.path.length;
      const cy2 = reg.path.reduce((s, p) => s + p[1], 0) / reg.path.length;
      ctx.fillStyle = '#fff'; ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(reg.label, cx2, cy2);
    });
  }, [mapKey, mapData]);

  useEffect(() => {
    const fresh = new Array(mapData.regions.length).fill(-1);
    setMapColors(fresh);
    setUsedColors('—');
    setLog('Indítsd el az algoritmust.');
    draw(fresh);
  }, [mapKey]);

  useEffect(() => { draw(mapColors); }, [mapColors, draw]);

  function colorMap() {
    const n = mapData.regions.length;
    const order = [...Array(n).keys()].sort((a, b) => mapData.adj[b].length - mapData.adj[a].length);
    const col = new Array<number>(n).fill(-1);
    order.forEach(v => {
      const used = new Set(mapData.adj[v].map(u => col[u]).filter(c => c >= 0));
      let c = 0; while (used.has(c)) c++;
      col[v] = c;
    });
    const chi = Math.max(...col) + 1;
    setMapColors(col);
    setUsedColors(String(chi));
    setLog(`5-szín (mohó fokszám szerint): ${chi} szín elegendő. Ötszíntétel teljesül.`);
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Ötszíntétel – démó egy planáris térképen</span>
        <div style={{ display: 'flex', gap: '.35rem', marginBottom: '.6rem' }}>
          <button className={`op-btn${mapKey === 'simple' ? ' is-active' : ''}`} onClick={() => setMapKey('simple')}>Egyszerű térkép</button>
          <button className={`op-btn${mapKey === 'complex' ? ' is-active' : ''}`} onClick={() => setMapKey('complex')}>Összetett térkép</button>
        </div>
        <canvas ref={canvasRef} width={560} height={340} style={{ width: '100%', maxWidth: 560, background: '#0a0f14', borderRadius: '.5rem' }} />
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
          <button className="op-btn" style={{ background: '#38bdf8', color: '#000', borderColor: '#38bdf8' }} onClick={colorMap}>5-szín algoritmus</button>
          <button className="op-btn" onClick={() => { const fresh = new Array(mapData.regions.length).fill(-1); setMapColors(fresh); setUsedColors('—'); setLog('Indítsd el az algoritmust.'); }}>Visszaállítás</button>
        </div>
        <div style={{ background: '#060a0f', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.5rem', fontSize: '.78rem', color: '#8ba3bc', height: 70, overflowY: 'auto', fontFamily: 'monospace', marginTop: '.5rem' }}>{log}</div>
      </div>
      <div>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: '#38bdf8' }}>Tételek</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.4rem', marginBottom: '.5rem' }}>
            <div style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.4rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#38bdf8' }}>{usedColors}</div>
              <div style={{ fontSize: '.7rem', color: '#8ba3bc' }}>Használt szín</div>
            </div>
            <div style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.4rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#38bdf8' }}>{mapData.regions.length}</div>
              <div style={{ fontSize: '.7rem', color: '#8ba3bc' }}>Tartomány</div>
            </div>
          </div>
        </div>
        <RichTex className="info-box" html={String.raw`
<table style="width:100%;border-collapse:collapse;font-size:.82rem">
<thead><tr><th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">Tétel</th><th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">Tartalom</th></tr></thead>
<tbody>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Ötszín (1890)</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Minden síkgráf \(\chi \le 5\)</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Négyszín (1976)</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Minden síkgráf \(\chi \le 4\) (Appel–Haken)</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Lemma</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Minden háromszögelésnek van \(\le 5\)-ödfokú csúcsa</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Tórusz</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(\chi \le 7\) (Heawood, 1890)</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Duális gráf</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Térkép → duális → csúcsszínezés</td></tr>
</tbody></table>
<div class="info-box" style="margin-top:.6rem;background:#0a0f14">
<p style="font-size:.82rem;color:#8ba3bc;margin:0"><strong style="color:#38bdf8">Megjegyzés:</strong> Az ötszíntétel elégséges feltétel. A négyszín tétel bizonyítása géppel ellenőrzött: ~1936 redukálható konfigurációt kellett kezelni.</p>
</div>`} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TAB 3 — Ramsey-elmélet
══════════════════════════════════════════════════════════ */
const RN = 6;

function rPos(i: number): Pt {
  const a = 2 * Math.PI * i / RN - Math.PI / 2;
  return { x: 280 + 130 * Math.cos(a), y: 170 + 130 * Math.sin(a) };
}

function RamseyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rColors, setRColors] = useState<Record<string, number>>({});
  const [log, setLog] = useState('Kattints élekre (piros↔kék) vagy generálj véletlenszerű színezést.');

  function findMono(rc: Record<string, number>): [number, number, number][] {
    const found: [number, number, number][] = [];
    for (let i = 0; i < RN; i++) for (let j = i + 1; j < RN; j++) for (let k = j + 1; k < RN; k++) {
      const cij = rc[`${i},${j}`] ?? 0, cik = rc[`${i},${k}`] ?? 0, cjk = rc[`${j},${k}`] ?? 0;
      if (cij === cik && cik === cjk) found.push([i, j, k]);
    }
    return found;
  }

  const draw = useCallback((rc: Record<string, number>) => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    const mono = findMono(rc);
    for (let i = 0; i < RN; i++) for (let j = i + 1; j < RN; j++) {
      const col = rc[`${i},${j}`] ?? 0;
      const pi = rPos(i), pj = rPos(j);
      const isHot = mono.some(t => t.includes(i) && t.includes(j));
      ctx.beginPath(); ctx.moveTo(pi.x, pi.y); ctx.lineTo(pj.x, pj.y);
      ctx.strokeStyle = col === 0 ? '#ef4444' : '#3b82f6';
      ctx.lineWidth = isHot ? 4 : 2; ctx.globalAlpha = isHot ? 1 : 0.6; ctx.stroke(); ctx.globalAlpha = 1;
    }
    for (let i = 0; i < RN; i++) {
      const p = rPos(i);
      ctx.beginPath(); ctx.arc(p.x, p.y, 16, 0, Math.PI * 2);
      ctx.fillStyle = '#1e2a38'; ctx.fill();
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(i), p.x, p.y);
    }
    mono.forEach(([a, b, c]) => {
      const pa = rPos(a), pb = rPos(b), pc = rPos(c);
      ctx.beginPath(); ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y); ctx.lineTo(pc.x, pc.y); ctx.closePath();
      ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 3; ctx.setLineDash([6, 3]); ctx.stroke(); ctx.setLineDash([]);
    });
  }, []);

  useEffect(() => { draw(rColors); }, [rColors, draw]);

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const cv = canvasRef.current; if (!cv) return;
    const rect = cv.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    let bestDist = 25, bestKey: string | null = null, bestVal = 0;
    for (let i = 0; i < RN; i++) for (let j = i + 1; j < RN; j++) {
      const pi = rPos(i), pj = rPos(j);
      const t = ((mx - pi.x) * (pj.x - pi.x) + (my - pi.y) * (pj.y - pi.y)) / ((pj.x - pi.x) ** 2 + (pj.y - pi.y) ** 2);
      const tc = Math.max(0, Math.min(1, t));
      const cx2 = pi.x + tc * (pj.x - pi.x), cy2 = pi.y + tc * (pj.y - pi.y);
      const d2 = Math.hypot(mx - cx2, my - cy2);
      if (d2 < bestDist) { bestDist = d2; bestKey = `${i},${j}`; bestVal = ((rColors[`${i},${j}`] ?? 0) ^ 1); }
    }
    if (bestKey) {
      const newRc = { ...rColors, [bestKey]: bestVal };
      setRColors(newRc);
      const mono = findMono(newRc);
      setLog(mono.length === 0
        ? 'Nincs homogén háromszög. Folytasd a színezést – R(3,3)=6 garantálja, hogy lesz!'
        : `Homogén háromszög(ek): ${mono.map(t => '{' + t.join(',') + '}').join(', ')} — R(3,3)=6 igazolva!`);
    }
  }

  function random() {
    const rc: Record<string, number> = {};
    for (let i = 0; i < RN; i++) for (let j = i + 1; j < RN; j++) rc[`${i},${j}`] = Math.random() < 0.5 ? 0 : 1;
    setRColors(rc);
    const mono = findMono(rc);
    setLog(mono.length ? `Homogén háromszög(ek): ${mono.map(t => '{' + t.join(',') + '}').join(', ')} — R(3,3)=6 igazolva!` : 'Nincs homogén háromszög.');
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>K₆ élszínezés – R(3,3)=6 demonstráció</span>
        <p style={{ fontSize: '.8rem', color: '#8ba3bc', margin: '.3rem 0 .5rem' }}>Kattints az élekre a piros/kék váltáshoz. A homogén háromszögeket automatikusan jelzi.</p>
        <canvas ref={canvasRef} width={560} height={340} style={{ width: '100%', maxWidth: 560, background: '#0a0f14', borderRadius: '.5rem', cursor: 'pointer' }} onClick={handleClick} />
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
          <button className="op-btn" style={{ background: '#38bdf8', color: '#000', borderColor: '#38bdf8' }} onClick={random}>Véletlenszerű</button>
          <button className="op-btn" style={{ background: '#38bdf8', color: '#000', borderColor: '#38bdf8' }} onClick={() => { setRColors({}); setLog('Kattints élekre.'); }}>Mind piros</button>
          <button className="op-btn" style={{ marginLeft: 'auto' }} onClick={() => { setRColors({}); setLog('Kattints élekre (piros↔kék) vagy generálj véletlenszerű színezést.'); }}>Visszaállítás</button>
        </div>
        <div style={{ background: '#060a0f', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.5rem', fontSize: '.78rem', color: '#8ba3bc', height: 70, overflowY: 'auto', fontFamily: 'monospace', marginTop: '.5rem' }}>{log}</div>
      </div>
      <div>
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">Ramsey-számok táblázata</span>
<table style="border-collapse:collapse;font-size:.8rem">
<thead><tr>
  <th style="border:1px solid #1e2a38;padding:.35rem .6rem;background:#1a2233;color:#38bdf8">\(R(k,l)\)</th>
  <th style="border:1px solid #1e2a38;padding:.35rem .6rem;background:#1a2233;color:#38bdf8">l=3</th>
  <th style="border:1px solid #1e2a38;padding:.35rem .6rem;background:#1a2233;color:#38bdf8">l=4</th>
  <th style="border:1px solid #1e2a38;padding:.35rem .6rem;background:#1a2233;color:#38bdf8">l=5</th>
  <th style="border:1px solid #1e2a38;padding:.35rem .6rem;background:#1a2233;color:#38bdf8">l=6</th>
</tr></thead>
<tbody>
<tr>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#c8d8e8"><strong>k=3</strong></td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#4ade80;font-weight:700">6</td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#4ade80;font-weight:700">9</td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#4ade80;font-weight:700">14</td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#4ade80;font-weight:700">18</td>
</tr>
<tr>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#c8d8e8"><strong>k=4</strong></td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#4ade80;font-weight:700">9</td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#4ade80;font-weight:700">18</td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#fbbf24">25–35</td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#fbbf24">35–41</td>
</tr>
<tr>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#c8d8e8"><strong>k=5</strong></td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#4ade80;font-weight:700">14</td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#fbbf24">25–35</td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#fbbf24">43–48</td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#fbbf24">?</td>
</tr>
<tr>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#c8d8e8"><strong>k=6</strong></td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#4ade80;font-weight:700">18</td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#fbbf24">35–41</td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#fbbf24">?</td>
  <td style="border:1px solid #1e2a38;padding:.35rem .6rem;color:#fbbf24">102–165</td>
</tr>
</tbody></table>
<div style="font-size:.74rem;color:#8ba3bc;margin-top:.4rem">
  <span style="color:#4ade80">■</span> ismert &nbsp; <span style="color:#fbbf24">■</span> csak korlát
</div>
<div class="info-box" style="margin-top:.6rem;background:#0a0f14;font-size:.82rem;color:#c8d8e8">
<strong style="color:#38bdf8">Erdős–Szekeres korlát:</strong><br>
\(R(k,l) \le \binom{k+l-2}{k-1}\)<br><br>
<strong style="color:#38bdf8">Végtelen tétel:</strong><br>
\(K_\omega\) élszínezésénél véges sok színnel mindig létezik végtelen homogén részgráf.
</div>`} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TAB 4 — Brooks-tétel
══════════════════════════════════════════════════════════ */
type BrooksG = { name: string; n: number; edges: [number, number][]; chi: number; delta: number; ex: string };
const BROOKS_GRAPHS: BrooksG[] = [
  { name: 'K₄', n: 4, edges: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]], chi: 4, delta: 3, ex: 'Teljes' },
  { name: 'K₅', n: 5, edges: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]], chi: 5, delta: 4, ex: 'Teljes' },
  { name: 'C₅', n: 5, edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]], chi: 3, delta: 2, ex: 'Páratlan C' },
  { name: 'C₆', n: 6, edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]], chi: 2, delta: 2, ex: 'Páros C' },
  { name: 'Petersen', n: 10, edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [5, 6], [6, 7], [7, 8], [8, 9], [9, 5], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9]], chi: 3, delta: 3, ex: 'Brooks' },
  { name: 'K₃,₃', n: 6, edges: [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]], chi: 2, delta: 3, ex: 'Páros' },
];

function BrooksCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const cols = 3, rows = 2;
    const pw = W / cols, ph = H / rows;
    BROOKS_GRAPHS.forEach((g, gi) => {
      const col = gi % cols, row = Math.floor(gi / cols);
      const ox = col * pw, oy = row * ph;
      const cx = ox + pw / 2, cy = oy + ph / 2 - 10;
      const r = Math.min(pw, ph) * 0.32;
      const pos: Pt[] = Array.from({ length: g.n }, (_, i) => ({
        x: cx + r * Math.cos(2 * Math.PI * i / g.n - Math.PI / 2),
        y: cy + r * Math.sin(2 * Math.PI * i / g.n - Math.PI / 2),
      }));
      if (g.name === 'K₃,₃') {
        for (let i = 0; i < 3; i++) { pos[i] = { x: cx + (i - 1) * 45, y: cy - 50 }; pos[i + 3] = { x: cx + (i - 1) * 45, y: cy + 50 }; }
      }
      const adj = buildAdj(g.n, g.edges);
      const colors = greedyColor([...Array(g.n).keys()].sort((a, b) => adj[b].length - adj[a].length), adj);
      g.edges.forEach(([u, v]) => {
        ctx.beginPath(); ctx.moveTo(pos[u].x, pos[u].y); ctx.lineTo(pos[v].x, pos[v].y);
        ctx.strokeStyle = '#2a3a50'; ctx.lineWidth = 1.5; ctx.stroke();
      });
      pos.forEach((p, i) => {
        ctx.beginPath(); ctx.arc(p.x, p.y, 9, 0, Math.PI * 2);
        ctx.fillStyle = PALETTE[colors[i]]; ctx.fill();
        ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1; ctx.stroke();
      });
      ctx.fillStyle = '#fff'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
      ctx.fillText(g.name, cx, oy + ph - 4);
      ctx.font = '11px sans-serif'; ctx.fillStyle = '#8ba3bc';
      ctx.fillText(`χ=${g.chi} Δ=${g.delta}`, cx, oy + ph - 18);
    });
  }, []);

  const rows = BROOKS_GRAPHS.map(g => ({
    name: g.name, delta: g.delta, chi: g.chi,
    ok: g.chi <= g.delta,
    check: g.chi <= g.delta ? '✓ igen' : '✗ nem',
    ex: g.ex,
  }));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Brooks-tétel – χ(G) ≤ Δ(G) illusztráció</span>
        <canvas ref={canvasRef} width={560} height={380} style={{ width: '100%', maxWidth: 560, background: '#0a0f14', borderRadius: '.5rem' }} />
      </div>
      <div>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: '#38bdf8' }}>Összehasonlító táblázat</span>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
            <thead><tr>{['Gráf', 'Δ(G)', 'χ(G)', 'Egyenlőség'].map(h => <th key={h} style={{ background: '#1a2233', color: '#38bdf8', padding: '.4rem .6rem', textAlign: 'left' }}>{h}</th>)}</tr></thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.name}>
                  <td style={{ padding: '.4rem .6rem', borderTop: '1px solid #1e2a38', color: '#c8d8e8' }}>{r.name}</td>
                  <td style={{ padding: '.4rem .6rem', borderTop: '1px solid #1e2a38', color: '#c8d8e8' }}>{r.delta}</td>
                  <td style={{ padding: '.4rem .6rem', borderTop: '1px solid #1e2a38', color: '#c8d8e8' }}>{r.chi}</td>
                  <td style={{ padding: '.4rem .6rem', borderTop: '1px solid #1e2a38', color: r.ok ? '#4ade80' : '#fbbf24' }}>{r.check} ({r.ex})</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">Brooks-tétel (1941)</span>
<div style="font-size:.85rem;color:#c8d8e8;line-height:1.6">
Ha \(G\) összefüggő gráf és nem teljes gráf, és nem páratlan kör, akkor
\[\chi(G) \le \Delta(G)\]
ahol \(\Delta(G)\) a maximális csúcsfokszám.
</div>
<div style="margin-top:.5rem;font-size:.8rem;color:#8ba3bc">
<strong style="color:#38bdf8">Kivételek:</strong><br>
• \(K_n\): \(\chi = \Delta + 1 = n\)<br>
• Páratlan körök \(C_{2k+1}\): \(\chi = 3, \Delta = 2\)
</div>`} />
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">Egyéb korlátok</span>
<table style="width:100%;border-collapse:collapse;font-size:.82rem">
<thead><tr><th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">Korlát</th><th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">Érték</th></tr></thead>
<tbody>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(\chi(G) \ge \omega(G)\)</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">klikkszám alsó korlát</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(\chi(G) \ge n / \alpha(G)\)</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">független szám</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(\chi(G) \cdot \chi(\bar G) \ge n\)</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">komplementer</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Hadwiger-sejtés</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(\chi(G)\ge m \Rightarrow K_m \preceq G\)</td></tr>
</tbody></table>`} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TAB 5 — Kromatikus polinom
══════════════════════════════════════════════════════════ */
type PolyG = { n: number; edges: [number, number][] };
const POLY_PRESETS: Record<string, PolyG> = {
  p3: { n: 3, edges: [[0, 1], [1, 2]] },
  c4: { n: 4, edges: [[0, 1], [1, 2], [2, 3], [3, 0]] },
  k3: { n: 3, edges: [[0, 1], [0, 2], [1, 2]] },
  tree4: { n: 4, edges: [[0, 1], [0, 2], [0, 3]] },
};

function contractEdge(n: number, edges: [number, number][], e: [number, number]): { n: number; edges: [number, number][] } {
  const [u, v] = e;
  const newEdges: [number, number][] = [];
  edges.forEach(([a, b]) => {
    if ((a === u && b === v) || (a === v && b === u)) return;
    const na = a === v ? u : a, nb = b === v ? u : b;
    if (na === nb) return;
    if (!newEdges.some(([x, y]) => Math.min(x, y) === Math.min(na, nb) && Math.max(x, y) === Math.max(na, nb)))
      newEdges.push([na, nb]);
  });
  return { n: n - 1, edges: newEdges };
}

function chromPoly(n: number, edges: [number, number][]): number[] {
  if (edges.length === 0) {
    const c = new Array(n + 1).fill(0); c[n] = 1; return c;
  }
  const e = edges[0];
  const del = chromPoly(n, edges.slice(1));
  const con = chromPoly(n - 1, contractEdge(n, edges, e).edges);
  const res = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) res[i] = (del[i] || 0) - (con[i] || 0);
  return res;
}

function evalPoly(coeffs: number[], k: number): number {
  return coeffs.reduce((s, a, i) => s + a * Math.pow(k, i), 0);
}

function polyFormat(coeffs: number[], n: number): string {
  const terms: string[] = [];
  for (let i = n; i >= 0; i--) {
    const a = coeffs[i]; if (a === 0) continue;
    let t = '';
    if (i === 0) t = String(a);
    else if (i === 1) t = `${a === 1 ? '' : (a === -1 ? '-' : a)}k`;
    else t = `${a === 1 ? '' : (a === -1 ? '-' : a)}k^{${i}}`;
    terms.push(t);
  }
  if (!terms.length) return '0';
  return terms.join(' + ').replace(/\+ -/g, '- ');
}

function ChromPolyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [presetKey, setPresetKey] = useState<string>('p3');
  const [k, setK] = useState(3);
  const [log, setLog] = useState('');
  const [pk, setPk] = useState<string>('—');
  const [chi, setChi] = useState<string>('—');
  const [formula, setFormula] = useState<string>('—');

  const polyG = POLY_PRESETS[presetKey];

  function polyPos(i: number, n: number, W: number, H: number): Pt {
    const cx = W / 2, cy = H / 2, r = Math.min(cx, cy) * 0.65;
    const a = 2 * Math.PI * i / n - Math.PI / 2;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  }

  const draw = useCallback((colors: number[]) => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const n = polyG.n;
    polyG.edges.forEach(([u, v]) => {
      const pu = polyPos(u, n, W, H), pv = polyPos(v, n, W, H);
      ctx.beginPath(); ctx.moveTo(pu.x, pu.y); ctx.lineTo(pv.x, pv.y);
      ctx.strokeStyle = '#2a3a50'; ctx.lineWidth = 2; ctx.stroke();
    });
    for (let i = 0; i < n; i++) {
      const p = polyPos(i, n, W, H);
      ctx.beginPath(); ctx.arc(p.x, p.y, 18, 0, Math.PI * 2);
      ctx.fillStyle = colors[i] >= 0 ? PALETTE[colors[i]] : '#1e2a38'; ctx.fill();
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(i), p.x, p.y);
    }
  }, [presetKey, polyG]);

  const update = useCallback(() => {
    const coeffs = chromPoly(polyG.n, polyG.edges);
    const pkVal = Math.max(0, Math.round(evalPoly(coeffs, k)));
    let chiVal = 0;
    for (let kk = 1; kk <= polyG.n + 1; kk++) { if (evalPoly(coeffs, kk) > 0) { chiVal = kk; break; } }
    const fmt = polyFormat(coeffs, polyG.n);
    setPk(String(pkVal));
    setChi(String(chiVal));
    setFormula(`\\(P(G,k) = ${fmt}\\)`);
    setLog(`P(G, ${k}) = ${pkVal} jólszínezés létezik ${k} színnel. χ(G) = ${chiVal}.`);
    const adj = buildAdj(polyG.n, polyG.edges);
    const col = greedyColor([...Array(polyG.n).keys()], adj);
    draw(col);
  }, [polyG, k, draw]);

  useEffect(() => { update(); }, [presetKey, k, update]);

  const presets: [string, string][] = [['p3', 'P₃ (út)'], ['c4', 'C₄ (négyszög)'], ['k3', 'K₃ (háromszög)'], ['tree4', 'T₄ (fa)']];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Törlés-összehúzás fa – P(G,k)</span>
        <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
          {presets.map(([key, lbl]) => (
            <button key={key} className={`op-btn${presetKey === key ? ' is-active' : ''}`} onClick={() => setPresetKey(key)}>{lbl}</button>
          ))}
        </div>
        <canvas ref={canvasRef} width={560} height={340} style={{ width: '100%', maxWidth: 560, background: '#0a0f14', borderRadius: '.5rem' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginTop: '.5rem', fontSize: '.85rem', color: '#8ba3bc' }}>
          <label>k =</label>
          <input type="range" min={1} max={8} value={k} style={{ flex: 1, accentColor: '#38bdf8' }} onChange={e => setK(+e.target.value)} />
          <span style={{ color: '#38bdf8', minWidth: '1.5rem', textAlign: 'right', fontWeight: 700 }}>{k}</span>
        </div>
        <div style={{ background: '#060a0f', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.5rem', fontSize: '.78rem', color: '#8ba3bc', height: 70, overflowY: 'auto', fontFamily: 'monospace', marginTop: '.5rem' }}>{log}</div>
      </div>
      <div>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: '#38bdf8' }}>Eredmény</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.4rem', marginBottom: '.5rem' }}>
            <div style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.4rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#38bdf8' }}>{pk}</div>
              <div style={{ fontSize: '.7rem', color: '#8ba3bc' }}>P(G,k) értéke</div>
            </div>
            <div style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.4rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#38bdf8' }}>{chi}</div>
              <div style={{ fontSize: '.7rem', color: '#8ba3bc' }}>χ(G) legkisebb k&gt;0 ahol P&gt;0</div>
            </div>
          </div>
          <RichTex key={formula} html={`<div style="background:#0a0f14;border:1px solid #1e2a38;border-radius:.35rem;padding:.75rem;font-size:1rem;color:#c8d8e8">${formula}</div>`} />
        </div>
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">Alapképletek</span>
<table style="width:100%;border-collapse:collapse;font-size:.82rem">
<thead><tr><th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">Gráf</th><th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">\(P(G,k)\)</th></tr></thead>
<tbody>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(K_1\)</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(k\)</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(K_n\)</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(k(k-1)\cdots(k-n+1)\)</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Fa (\(n\) csúcs)</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(k(k-1)^{n-1}\)</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(C_n\)</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\((k-1)^n + (-1)^n(k-1)\)</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Rekurzió</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">\(P(G,k)=P(G{-}e,k)-P(G/e,k)\)</td></tr>
</tbody></table>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Tulajdonságok</span>
          <ul style={{ fontSize: '.82rem', color: '#c8d8e8', paddingLeft: '1.1rem', margin: 0, lineHeight: 2 }}>
            <li>P(G,k) fokszáma = |V|</li>
            <li>Legmagasabb fokú együttható: 1</li>
            <li>Gyökök: 0, 1, …, χ(G)−1</li>
            <li>P(G,k) = 0 ha k &lt; χ(G)</li>
            <li>Összefüggő komponensek szorzata</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   Root component
══════════════════════════════════════════════════════════ */
const TABS: Tab[] = [
  { id: 'color', label: 'Csúcsszínezés', content: <ColoringCanvas /> },
  { id: 'planar', label: 'Síkgráfok & 5-szín', content: <PlanarCanvas /> },
  { id: 'ramsey', label: 'Ramsey-elmélet', content: <RamseyCanvas /> },
  { id: 'brooks', label: 'Brooks-tétel', content: <BrooksCanvas /> },
  { id: 'poly', label: 'Kromatikus polinom', content: <ChromPolyCanvas /> },
];

export default function DimatCh18() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika — 18. fejezet</p>
      <h1 className="ila__title">Gráfok színezései</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
