import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// ─── Types ─────────────────────────────────────────────────────────
interface TNode { x: number; y: number; }
type TEdge = [number, number];

const NODE_R = 14;

// ─── Drawing ────────────────────────────────────────────────────────
function drawTree(
  canvas: HTMLCanvasElement,
  nodes: TNode[],
  edges: TEdge[],
  nodeColors: (string | null)[] | null,
  edgeHighlight: (string | null)[] | null,
  labels: (string | number)[]
) {
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
  edges.forEach((e, i) => {
    const a = nodes[e[0]], b = nodes[e[1]];
    ctx.strokeStyle = edgeHighlight?.[i] ?? '#2a3a50';
    ctx.lineWidth = edgeHighlight?.[i] ? 2.5 : 1.5;
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
  });
  nodes.forEach((n, i) => {
    const col = nodeColors?.[i] ?? '#1e4a6f';
    ctx.beginPath(); ctx.arc(n.x, n.y, NODE_R, 0, 2 * Math.PI);
    ctx.fillStyle = col; ctx.fill();
    ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(String(labels[i]), n.x, n.y);
  });
}

function buildAdjList(n: number, edges: TEdge[]): number[][] {
  const adj = Array.from({ length: n }, () => [] as number[]);
  edges.forEach(([a, b]) => { adj[a].push(b); adj[b].push(a); });
  return adj;
}

function isConnected(n: number, edges: TEdge[]): boolean {
  if (n === 0) return true;
  const adj = buildAdjList(n, edges), vis = Array(n).fill(false), q = [0]; vis[0] = true; let cnt = 1;
  while (q.length) { const u = q.shift()!; adj[u].forEach(v => { if (!vis[v]) { vis[v] = true; cnt++; q.push(v); } }); }
  return cnt === n;
}

function hasCycle(n: number, edges: TEdge[]): boolean {
  const adj = buildAdjList(n, edges), vis = Array(n).fill(false);
  function dfs(u: number, par: number): boolean {
    vis[u] = true;
    for (const v of adj[u]) { if (!vis[v]) { if (dfs(v, u)) return true; } else if (v !== par) return true; }
    return false;
  }
  for (let i = 0; i < n; i++) if (!vis[i] && dfs(i, -1)) return true;
  return false;
}

function pruferLayout(n: number): TNode[] {
  const cx = 190, cy = 120, r = 90;
  return Array.from({ length: n }, (_, i) => ({
    x: cx + r * Math.cos(2 * Math.PI * i / n - Math.PI / 2),
    y: cy + r * Math.sin(2 * Math.PI * i / n - Math.PI / 2),
  }));
}

function pruferDecode(seq: number[], n: number): TEdge[] {
  const deg = Array(n + 1).fill(1);
  seq.forEach(v => deg[v]++);
  const edges: TEdge[] = [];
  const remaining = new Set(Array.from({ length: n }, (_, i) => i + 1));
  for (const v of seq) {
    for (let u = 1; u <= n; u++) {
      if (remaining.has(u) && deg[u] === 1) { edges.push([u - 1, v - 1]); deg[u]--; deg[v]--; remaining.delete(u); break; }
    }
  }
  const last = [...remaining];
  if (last.length === 2) edges.push([last[0] - 1, last[1] - 1]);
  return edges;
}

// ─── Tree presets ───────────────────────────────────────────────────
const TREE_PRESETS: Record<string, { nodes: TNode[]; edges: TEdge[] }> = {
  tree7: {
    nodes: [{x:240,y:40},{x:120,y:110},{x:360,y:110},{x:60,y:200},{x:180,y:200},{x:300,y:200},{x:420,y:200}],
    edges: [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]],
  },
  forest: {
    nodes: [{x:80,y:100},{x:160,y:60},{x:160,y:150},{x:280,y:80},{x:360,y:80},{x:320,y:160},{x:430,y:120},{x:430,y:220}],
    edges: [[0,1],[0,2],[3,4],[3,5],[6,7]],
  },
  cycle: {
    nodes: [{x:240,y:50},{x:380,y:160},{x:300,y:280},{x:180,y:280},{x:100,y:160},{x:240,y:170}],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,0],[0,5],[2,5]],
  },
  path: {
    nodes: [{x:50,y:150},{x:110,y:150},{x:170,y:150},{x:230,y:150},{x:290,y:150},{x:350,y:150},{x:410,y:150},{x:460,y:150}],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]],
  },
  star: {
    nodes: [{x:240,y:150},{x:240,y:50},{x:370,y:100},{x:420,y:230},{x:320,y:300},{x:160,y:300},{x:60,y:230},{x:110,y:100}],
    edges: [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7]],
  },
};

// ─── Center presets ─────────────────────────────────────────────────
const CENTER_PRESETS: Record<string, { nodes: TNode[]; edges: TEdge[] }> = {
  path8: {
    nodes: [{x:40,y:150},{x:100,y:150},{x:160,y:150},{x:220,y:150},{x:280,y:150},{x:340,y:150},{x:400,y:150},{x:460,y:150}],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]],
  },
  star7: {
    nodes: [{x:240,y:150},{x:240,y:50},{x:370,y:100},{x:420,y:230},{x:320,y:300},{x:160,y:300},{x:60,y:230}],
    edges: [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6]],
  },
  caterpillar: {
    nodes: [{x:60,y:160},{x:130,y:100},{x:200,y:160},{x:270,y:160},{x:340,y:160},{x:410,y:100},{x:410,y:220},{x:470,y:160},{x:60,y:220},{x:200,y:220}],
    edges: [[0,1],[0,2],[2,3],[3,4],[4,5],[4,6],[4,7],[0,8],[2,9]],
  },
  balanced: {
    nodes: [{x:240,y:40},{x:120,y:110},{x:360,y:110},{x:60,y:200},{x:180,y:200},{x:300,y:200},{x:420,y:200},{x:30,y:280},{x:90,y:280},{x:150,y:280},{x:210,y:280},{x:270,y:280},{x:330,y:280},{x:390,y:280},{x:450,y:280}],
    edges: [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11],[5,12],[6,13],[6,14]],
  },
};

// ─── TAB 1: Fák alapjai ─────────────────────────────────────────────
function TreeBasicsTab() {
  const [preset, setPreset] = useState('tree7');
  const [customEdges, setCustomEdges] = useState('1-2 2-3 3-4 4-5');
  const [customResult, setCustomResult] = useState('');
  const [alkaneN, setAlkaneN] = useState(3);
  const cvRef = useRef<HTMLCanvasElement>(null);
  const alkaneCvRef = useRef<HTMLCanvasElement>(null);

  const treeData = TREE_PRESETS[preset];

  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    const { nodes, edges } = treeData;
    const n = nodes.length;
    const adj = buildAdjList(n, edges);
    const cycle = hasCycle(n, edges);
    const conn = isConnected(n, edges);
    const leaves = nodes.map((_, i) => adj[i].length === 1);
    const colors = nodes.map((_, i) => cycle ? '#7f1d1d' : leaves[i] ? '#166534' : '#1e4a6f');
    drawTree(cv, nodes, edges, colors, null, nodes.map((_, i) => i + 1));
  }, [preset]);

  useEffect(() => {
    const cv = alkaneCvRef.current; if (!cv) return;
    drawAlkane(cv, alkaneN);
  }, [alkaneN]);

  function drawAlkane(cv: HTMLCanvasElement, n: number) {
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
    const cW = Math.min(50, W / (n + 2));
    const startX = W / 2 - (n - 1) * cW / 2;
    const cY = H / 2;
    const hPerC = new Array(n).fill(2); hPerC[0]++; hPerC[n - 1]++;
    for (let i = 0; i < n; i++) {
      const cx = startX + i * cW;
      if (i > 0) { ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(startX + (i - 1) * cW, cY); ctx.lineTo(cx, cY); ctx.stroke(); }
      ctx.beginPath(); ctx.arc(cx, cY, 10, 0, 2 * Math.PI); ctx.fillStyle = '#1e3a5f'; ctx.fill(); ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 9px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('C', cx, cY);
      const dirs = hPerC[i] === 2 ? [[0, -1], [0, 1]] : hPerC[i] === 3 ? [[0, -1], [0, 1], [-1, 0]] : [[0, -1], [0, 1], [-1, 0], [1, 0]];
      dirs.slice(0, hPerC[i]).forEach(([dx, dy]) => {
        const hx = cx + dx * 18, hy = cY + dy * 20;
        ctx.strokeStyle = '#4a5a6a'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(cx, cY); ctx.lineTo(hx, hy); ctx.stroke();
        ctx.beginPath(); ctx.arc(hx, hy, 6, 0, 2 * Math.PI); ctx.fillStyle = '#2a3a4a'; ctx.fill(); ctx.strokeStyle = '#6a7a8a'; ctx.lineWidth = 1; ctx.stroke();
        ctx.fillStyle = '#8ba3bc'; ctx.font = '8px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('H', hx, hy);
      });
    }
  }

  const checkCustom = () => {
    const pairs = customEdges.trim().split(/\s+/).filter(Boolean);
    const nodeSet = new Set<number>(); const edges: TEdge[] = [];
    for (const p of pairs) {
      const m = p.match(/^(\d+)-(\d+)$/);
      if (!m) { setCustomResult(`Hibás formátum: ${p}`); return; }
      const a = parseInt(m[1]) - 1, b = parseInt(m[2]) - 1;
      nodeSet.add(a); nodeSet.add(b); edges.push([a, b]);
    }
    const n = Math.max(...nodeSet) + 1;
    const cycle = hasCycle(n, edges), conn = isConnected(n, edges);
    setCustomResult(`Csúcsok: ${n}, Élek: ${edges.length}, |V|-1: ${n - 1}\nKörmentes: ${!cycle ? 'igen' : 'nem'}, Összefüggő: ${conn ? 'igen' : 'nem'}\n${!cycle && conn ? '✓ Fa!' : '✗ Nem fa.'}`);
  };

  const ALKANE_NAMES = ['—', 'metán', 'etán', 'propán', 'bután', 'pentán', 'hexán', 'heptán', 'oktán'];

  const { nodes, edges } = treeData;
  const n = nodes.length;
  const adj = buildAdjList(n, edges);
  const cycle = hasCycle(n, edges);
  const conn = isConnected(n, edges);
  const isFa = !cycle && conn;
  const isErdo = !cycle && !conn;
  const leafCount = nodes.filter((_, i) => adj[i].length === 1).length;

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Fa vs. Erdő — interaktív vizsgáló</span>
          <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
            {['tree7','forest','cycle','path','star'].map(k => (
              <button key={k} className={`op-btn${preset === k ? ' is-active' : ''}`} onClick={() => setPreset(k)}>
                {k === 'tree7' ? '7-csúcsú fa' : k === 'forest' ? 'Erdő (3 fa)' : k === 'cycle' ? 'Ciklusos' : k === 'path' ? 'P₈' : 'Csillag K₁,₆'}
              </button>
            ))}
          </div>
          <canvas ref={cvRef} width={480} height={300} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0f14' }} />
          <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginTop: '.5rem', fontSize: '.78rem' }}>
            <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#166534', marginRight: 4 }} />Levél (δ=1)</span>
            <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#38bdf8', marginRight: 4 }} />Belső csúcs</span>
            <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#ef4444', marginRight: 4 }} />Kör van!</span>
          </div>
        </div>
        <div>
          <div className="info-box" style={{ fontFamily: 'monospace', fontSize: '.85rem', lineHeight: 1.9 }}>
            <span className="lbl" style={{ color: '#38bdf8' }}>Statisztikák</span>
            <div><span style={{ color: '#38bdf8' }}>Csúcsok |V|:</span> <span style={{ color: '#f97316' }}>{n}</span></div>
            <div><span style={{ color: '#38bdf8' }}>Élek |E|:</span> <span style={{ color: '#f97316' }}>{edges.length}</span></div>
            <div><span style={{ color: '#38bdf8' }}>|V|-1:</span> <span style={{ color: '#f97316' }}>{n - 1}</span></div>
            <div><span style={{ color: '#38bdf8' }}>|E|=|V|-1:</span> <span style={{ color: '#f97316' }}>{edges.length === n - 1 ? '✓ igen' : '✗ nem'}</span></div>
            <div><span style={{ color: '#38bdf8' }}>Összefüggő:</span> <span style={{ color: '#f97316' }}>{conn ? '✓ igen' : '✗ nem'}</span></div>
            <div><span style={{ color: '#38bdf8' }}>Körmentes:</span> <span style={{ color: '#f97316' }}>{!cycle ? '✓ igen' : '✗ nem'}</span></div>
            <div><span style={{ color: '#38bdf8' }}>Levelek:</span> <span style={{ color: '#f97316' }}>{leafCount}</span></div>
            <div style={{ marginTop: '.5rem', fontSize: '1rem', fontWeight: 700, color: isFa ? '#4ade80' : isErdo ? '#38bdf8' : '#ef4444' }}>
              {isFa ? '✓ Fa!' : isErdo ? '✓ Erdő' : cycle ? '✗ Van kör!' : '✗ Nem összefüggő'}
            </div>
          </div>
          <div className="info-box" style={{ marginTop: '.75rem' }}>
            <RichTex html={String.raw`<div style="font-size:.83rem;color:#c8d8e8;line-height:1.75"><b style="color:#38bdf8">Alaptétel:</b> G fa ⟺ az alábbi <em>kettő</em> igaz:<br>(1) G összefüggő &nbsp;(2) G körmentes<br>(3) \(|E| = |V| - 1\)<br><br><b style="color:#38bdf8">Levelek:</b> Körmentes gráfban mindig van ≥2 levél (ha \(|V|\geq 2\)).</div>`} />
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Saját gráf — fa-e?</span>
          <div style={{ fontSize: '.8rem', color: '#8ba3bc', marginBottom: '.5rem' }}>Éleket add meg: "1-2 2-3 3-4" formában.</div>
          <textarea
            className="ila-text"
            style={{ width: '100%', resize: 'none', height: '60px', display: 'block' }}
            value={customEdges}
            onChange={e => setCustomEdges(e.target.value)}
            placeholder="pl. 1-2 2-3 3-4 4-5 2-5"
          />
          <button className="op-btn is-active" style={{ marginTop: '.5rem' }} onClick={checkCustom}>Ellenőrzés</button>
          {customResult && (
            <div style={{ fontSize: '.83rem', marginTop: '.5rem', fontFamily: 'monospace', whiteSpace: 'pre', color: customResult.includes('✓ Fa') ? '#4ade80' : customResult.includes('✗') ? '#ef4444' : '#8ba3bc' }}>
              {customResult}
            </div>
          )}
        </div>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Alkan-formula (CₙH₂ₙ₊₂)</span>
          <RichTex html={String.raw`<div style="font-size:.83rem;color:#c8d8e8;line-height:1.7">Az alkánok szénláncgráfja fa: \(n\) széncsúcs + \(2n{+}2\) hidrogénlevél. Mivel \(|E|=|V|-1\) és összefüggő → fa, tehát <b>nincs gyűrű</b>.</div>`} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', fontSize: '.82rem', color: '#8ba3bc', marginTop: '.5rem' }}>
            <span>n =</span>
            <input type="range" min={1} max={8} value={alkaneN} onChange={e => setAlkaneN(+e.target.value)} style={{ flex: 1, accentColor: '#38bdf8' }} />
            <span>n={alkaneN} ({ALKANE_NAMES[alkaneN] ?? `C${alkaneN}H${2 * alkaneN + 2}`})</span>
          </div>
          <canvas ref={alkaneCvRef} width={380} height={150} style={{ width: '100%', borderRadius: '.4rem', background: '#0a0f14', marginTop: '.5rem' }} />
        </div>
      </div>
    </div>
  );
}

// ─── TAB 2: Prüfer-kód ─────────────────────────────────────────────
function PruferTab() {
  const [pruferN, setPruferN] = useState(6);
  const [pruferTree, setPruferTree] = useState<{ nodes: TNode[]; edges: TEdge[]; labels: number[] } | null>(null);
  const [pruferState, setPruferState] = useState<{ seq: number[]; remaining: number[]; edges: TEdge[]; done: boolean } | null>(null);
  const [codeLog, setCodeLog] = useState<string[]>([]);
  const [decodeInput, setDecodeInput] = useState('4 2 1 3');
  const [decodeLog, setDecodeLog] = useState<string[]>([]);
  const cvRef = useRef<HTMLCanvasElement>(null);
  const decodeCvRef = useRef<HTMLCanvasElement>(null);

  const newTree = (n: number) => {
    const seq = Array.from({ length: n - 2 }, () => Math.floor(Math.random() * n) + 1);
    const edges = pruferDecode(seq, n);
    const tree = { nodes: pruferLayout(n), edges, labels: Array.from({ length: n }, (_, i) => i + 1) };
    setPruferTree(tree);
    setPruferState({ seq: [], remaining: Array.from({ length: n }, (_, i) => i + 1), edges: [...edges], done: false });
    setCodeLog([]);
  };

  useEffect(() => { newTree(pruferN); }, [pruferN]);

  useEffect(() => {
    const cv = cvRef.current; if (!cv || !pruferTree || !pruferState) return;
    const remaining = new Set(pruferState.remaining.map(v => v - 1));
    const colors = pruferTree.nodes.map((_, i) => remaining.has(i) ? '#1e4a6f' : '#4a1a1a');
    drawTree(cv, pruferTree.nodes, pruferState.edges, colors, null, pruferTree.labels);
  }, [pruferTree, pruferState]);

  const step = () => {
    if (!pruferTree || !pruferState || pruferState.done) return;
    const edges = pruferState.edges.map(e => [...e] as TEdge);
    const n = pruferN;
    const deg = Array(n + 1).fill(0);
    edges.forEach(([a, b]) => { deg[a + 1]++; deg[b + 1]++; });
    let minLeaf = -1;
    for (let v = 1; v <= n; v++) if (deg[v] === 1 && pruferState.remaining.includes(v)) { minLeaf = v; break; }
    if (minLeaf === -1) { setPruferState(s => s ? { ...s, done: true } : s); return; }
    let neighbor = -1;
    for (const [a, b] of edges) { if (a + 1 === minLeaf) { neighbor = b + 1; break; } if (b + 1 === minLeaf) { neighbor = a + 1; break; } }
    const newSeq = [...pruferState.seq, neighbor];
    const newRemaining = pruferState.remaining.filter(v => v !== minLeaf);
    const idx = edges.findIndex(([a, b]) => a + 1 === minLeaf || b + 1 === minLeaf);
    if (idx !== -1) edges.splice(idx, 1);
    setCodeLog(l => [...l, `Legkisebb levél: ${minLeaf} → szomszéd: ${neighbor}`]);
    const done2 = newRemaining.length <= 2;
    if (done2) setCodeLog(l => [...l, `Prüfer-kód: [ ${newSeq.join(', ')} ]`]);
    setPruferState({ seq: newSeq, remaining: newRemaining, edges, done: done2 });
  };

  const decode = () => {
    const inp = decodeInput.trim().split(/\s+/).filter(Boolean).map(Number);
    if (inp.some(isNaN) || inp.length < 2) { setDecodeLog(['Érvényes számsorozatot adj meg.']); return; }
    const n = inp.length + 2;
    const deg = Array(n + 1).fill(1); inp.forEach(v => { if (v >= 1 && v <= n) deg[v]++; });
    const edges: TEdge[] = []; const logLines: string[] = [];
    const remaining = new Set(Array.from({ length: n }, (_, i) => i + 1));
    for (const v of inp) {
      for (let u = 1; u <= n; u++) {
        if (remaining.has(u) && deg[u] === 1) { edges.push([u - 1, v - 1]); logLines.push(`Él: ${u}—${v}`); deg[u]--; deg[v]--; remaining.delete(u); break; }
      }
    }
    const last = [...remaining];
    if (last.length === 2) { edges.push([last[0] - 1, last[1] - 1]); logLines.push(`Utolsó él: ${last[0]}—${last[1]}`); }
    logLines.push(`Fa kész! ${n} csúcs, ${edges.length} él`);
    setDecodeLog(logLines);
    const nodes = pruferLayout(n);
    const cv = decodeCvRef.current;
    if (cv) drawTree(cv, nodes, edges, null, null, Array.from({ length: n }, (_, i) => i + 1));
  };

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#38bdf8' }}>Prüfer-kód — kódolás és dekódolás</span>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', fontSize: '.82rem', color: '#8ba3bc', marginBottom: '.75rem' }}>
            <span>Csúcsszám n:</span>
            <input type="range" min={4} max={10} value={pruferN} onChange={e => setPruferN(+e.target.value)} style={{ flex: 1, accentColor: '#38bdf8' }} />
            <span>n = {pruferN}</span>
          </div>
          <canvas ref={cvRef} width={380} height={240} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0f14' }} />
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
            <button className="op-btn is-active" onClick={() => newTree(pruferN)}>Új véletlen fa</button>
            <button className="op-btn" onClick={step}>Kódolás lépés →</button>
            <button className="op-btn" onClick={() => { while (pruferState && !pruferState.done) step(); }}>Teljes kódolás</button>
          </div>
        </div>
        <div>
          <div style={{ fontSize: '.78rem', color: '#8ba3bc', fontWeight: 600, marginBottom: '.3rem' }}>Prüfer-kód ({pruferN}-2={pruferN - 2} szám):</div>
          <div style={{ marginBottom: '.5rem' }}>
            {pruferState?.seq.map((v, i) => (
              <span key={i} style={{ display: 'inline-block', background: 'rgba(74,222,128,.1)', border: '1px solid #4ade80', borderRadius: '.3rem', padding: '.2rem .5rem', margin: '.1rem', fontFamily: 'monospace', color: '#4ade80' }}>{v}</span>
            ))}
            {!pruferState?.seq.length && <span style={{ color: '#64748b' }}>—</span>}
          </div>
          <div style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.5rem', fontSize: '.75rem', fontFamily: 'monospace', color: '#8ba3bc', height: '80px', overflowY: 'auto', marginBottom: '.75rem' }}>
            {codeLog.map((l, i) => <div key={i} style={{ color: l.startsWith('Prüfer') ? '#38bdf8' : '#8ba3bc' }}>{l}</div>)}
          </div>
          <RichTex html={String.raw`<div style="font-size:.78rem;color:#8ba3bc;line-height:1.6"><b style="color:#38bdf8">Algoritmus:</b><br>Ismételten töröljük a legkisebb levelét → jegyezzük a szomszédját → kód hossza \(n-2\).<br><br><b style="color:#38bdf8">Cayley-tétel:</b> \(n\) számozott csúcsú fa pontosan \(n^{n-2}\) féle van.</div>`} />
        </div>
      </div>
      <hr style={{ borderColor: '#1e2a38', margin: '1rem 0' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <div style={{ fontSize: '.78rem', color: '#8ba3bc', fontWeight: 600, marginBottom: '.3rem' }}>Dekódolás — kézi Prüfer-kód:</div>
          <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', marginBottom: '.5rem' }}>
            <input className="ila-text" style={{ width: '160px' }} value={decodeInput} onChange={e => setDecodeInput(e.target.value)} placeholder="pl. 4 2 1 3" />
            <button className="op-btn is-active" onClick={decode}>Dekódolás</button>
          </div>
          <canvas ref={decodeCvRef} width={380} height={220} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0f14' }} />
        </div>
        <div>
          <div style={{ fontSize: '.78rem', color: '#8ba3bc', fontWeight: 600, marginBottom: '.3rem' }}>Dekódolás lépései:</div>
          <div style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.5rem', fontSize: '.75rem', fontFamily: 'monospace', color: '#8ba3bc', height: '200px', overflowY: 'auto' }}>
            {decodeLog.map((l, i) => <div key={i} style={{ color: l.startsWith('Fa') ? '#4ade80' : '#38bdf8' }}>{l}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TAB 3: Fa közepe ──────────────────────────────────────────────
function TreeCenterTab() {
  const [preset, setPreset] = useState('path8');
  const [alive, setAlive] = useState<boolean[]>([]);
  const [iter, setIter] = useState(0);
  const [done, setDone] = useState(false);
  const [center, setCenter] = useState<number[]>([]);
  const [status, setStatus] = useState('Kattints Lépés-re.');
  const [log, setLog] = useState<string[]>([]);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);

  const data = CENTER_PRESETS[preset];

  const resetCenter = (d: typeof data) => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; }
    setAlive(Array(d.nodes.length).fill(true));
    setIter(0); setDone(false); setCenter([]); setLog([]); setStatus('Kattints Lépés-re.');
  };

  useEffect(() => { resetCenter(CENTER_PRESETS[preset]); }, [preset]);

  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    const d = CENTER_PRESETS[preset];
    const colors = d.nodes.map((_, i) => done && center.includes(i) ? '#f97316' : !alive[i] ? '#1a1a1a' : '#1e4a6f');
    const edgeH: (string | null)[] = d.edges.map(([a, b]) => alive[a] && alive[b] ? null : '#1a1a1a');
    drawTree(cv, d.nodes, d.edges, colors, edgeH, d.nodes.map((_, i) => i + 1));
    // draw removed nodes faintly
    const ctx = cv.getContext('2d'); if (!ctx) return;
    d.nodes.forEach((n, i) => {
      if (!alive[i]) {
        ctx.beginPath(); ctx.arc(n.x, n.y, NODE_R, 0, 2 * Math.PI);
        ctx.fillStyle = '#1a1a1a'; ctx.fill(); ctx.strokeStyle = '#2a2a2a'; ctx.lineWidth = 1; ctx.stroke();
        ctx.fillStyle = '#2a2a2a'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(String(i + 1), n.x, n.y);
      }
    });
  }, [preset, alive, done, center]);

  const step = () => {
    if (done) return;
    const d = CENTER_PRESETS[preset];
    const n = d.nodes.length;
    setAlive(al => {
      const newAl = [...al];
      const aliveSet = newAl.map((_, i) => i).filter(i => newAl[i]);
      if (aliveSet.length <= 2) {
        setDone(true); setCenter(aliveSet);
        setLog(l => [...l, `Közép: {${aliveSet.map(i => i + 1).join(', ')}} — ${aliveSet.length === 1 ? 'center' : 'bicenter'}!`]);
        setStatus(aliveSet.length === 1 ? `Egyközéppontos: ${aliveSet[0] + 1}` : `Kétközéppontos: ${aliveSet.map(i => i + 1).join(', ')}`);
        return newAl;
      }
      const adj = buildAdjList(n, d.edges);
      const deg = Array(n).fill(0);
      aliveSet.forEach(u => { adj[u].forEach(v => { if (newAl[v]) deg[u]++; }); });
      const leaves = aliveSet.filter(i => deg[i] === 1);
      if (leaves.length === 0) { setDone(true); return newAl; }
      leaves.forEach(i => newAl[i] = false);
      const newIter = iter + 1;
      setIter(newIter);
      setLog(l => [...l, `${newIter}. lépés: eltávolítva ${leaves.length} levél (${leaves.map(i => i + 1).join(',')})`]);
      return newAl;
    });
  };

  const toggleAuto = () => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; return; }
    autoRef.current = setInterval(() => { step(); if (done) { clearInterval(autoRef.current!); autoRef.current = null; } }, 700);
  };

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Fa közepe — iteratív levél-eltávolítás</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
          {['path8','star7','caterpillar','balanced'].map(k => (
            <button key={k} className={`op-btn${preset === k ? ' is-active' : ''}`} onClick={() => setPreset(k)}>
              {k === 'path8' ? 'Út P₈ (bicenter)' : k === 'star7' ? 'Csillag (center)' : k === 'caterpillar' ? 'Hernyófa' : 'Kiegyensúlyozott'}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1rem' }}>
          <div>
            <canvas ref={cvRef} width={480} height={300} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0f14' }} />
            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginTop: '.5rem', fontSize: '.78rem' }}>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#1e3a5f', marginRight: 4 }} />Eltávolítandó levél</span>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#1e4a6f', marginRight: 4 }} />Aktív csúcsok</span>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#f97316', marginRight: 4 }} />Közép</span>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
              <button className="op-btn" onClick={() => resetCenter(data)}>↺ Újra</button>
              <button className="op-btn is-active" onClick={step}>Levél-réteg eltávolítása →</button>
              <button className="op-btn" onClick={toggleAuto}>▶ Auto</button>
            </div>
            <div style={{ fontSize: '.8rem', color: '#8ba3bc', marginBottom: '.4rem' }}>{status}</div>
            <div style={{ fontSize: '.78rem', color: '#8ba3bc', marginBottom: '.3rem' }}>Iteráció: <strong>{iter}</strong></div>
            <div style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.5rem', fontSize: '.75rem', fontFamily: 'monospace', color: '#8ba3bc', height: '100px', overflowY: 'auto' }}>
              {log.map((l, i) => <div key={i} style={{ color: l.startsWith('Közép') ? '#f97316' : '#38bdf8' }}>{l}</div>)}
            </div>
            <div className="thm-box" style={{ marginTop: '.75rem', fontSize: '.83rem' }}>
              <strong>Tétel:</strong> Ismételten elhagyva a leveleket, minden fából végül 1 vagy 2 csúcs marad — ezek a fa <em>közepe</em>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── BST node ──────────────────────────────────────────────────────
interface BSTNode { val: number; left: BSTNode | null; right: BSTNode | null; x: number; y: number; }
function makeBSTNode(val: number): BSTNode { return { val, left: null, right: null, x: 0, y: 0 }; }
function bstInsertNode(root: BSTNode | null, val: number): BSTNode {
  if (!root) return makeBSTNode(val);
  if (val < root.val) root.left = bstInsertNode(root.left, val);
  else if (val > root.val) root.right = bstInsertNode(root.right, val);
  return root;
}
function bstDeleteNode(root: BSTNode | null, val: number): BSTNode | null {
  if (!root) return null;
  if (val < root.val) { root.left = bstDeleteNode(root.left, val); return root; }
  if (val > root.val) { root.right = bstDeleteNode(root.right, val); return root; }
  if (!root.left) return root.right;
  if (!root.right) return root.left;
  let succ = root.right; while (succ.left) succ = succ.left;
  root.val = succ.val; root.right = bstDeleteNode(root.right, succ.val); return root;
}
function bstLayout(root: BSTNode | null, x: number, y: number, spread: number) {
  if (!root) return;
  root.x = x; root.y = y;
  if (root.left) bstLayout(root.left, x - spread, y + 55, spread / 2);
  if (root.right) bstLayout(root.right, x + spread, y + 55, spread / 2);
}
function bstDraw(ctx: CanvasRenderingContext2D, root: BSTNode | null, highlight: number | null) {
  if (!root) return;
  ctx.strokeStyle = '#2a3a50'; ctx.lineWidth = 1.5;
  if (root.left) { ctx.beginPath(); ctx.moveTo(root.x, root.y); ctx.lineTo(root.left.x, root.left.y); ctx.stroke(); }
  if (root.right) { ctx.beginPath(); ctx.moveTo(root.x, root.y); ctx.lineTo(root.right.x, root.right.y); ctx.stroke(); }
  const col = highlight === root.val ? '#7c2d12' : '#1e3a5f';
  ctx.beginPath(); ctx.arc(root.x, root.y, NODE_R, 0, 2 * Math.PI);
  ctx.fillStyle = col; ctx.fill();
  ctx.strokeStyle = highlight === root.val ? '#f97316' : '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(String(root.val), root.x, root.y);
  bstDraw(ctx, root.left, highlight); bstDraw(ctx, root.right, highlight);
}

// ─── TAB 4: BST ────────────────────────────────────────────────────
function BSTTab() {
  const [bstRoot, setBstRoot] = useState<BSTNode | null>(null);
  const [inputVal, setInputVal] = useState('');
  const [status, setStatus] = useState('Szúrj be értékeket.');
  const [traversal, setTraversal] = useState('');
  const [highlight, setHighlight] = useState<number | null>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);

  const renderBST = (root: BSTNode | null, hl: number | null) => {
    const cv = cvRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, cv.width, cv.height);
    if (!root) return;
    bstLayout(root, cv.width / 2, 30, cv.width / 4);
    bstDraw(ctx, root, hl);
  };

  useEffect(() => { renderBST(bstRoot, highlight); }, [bstRoot, highlight]);

  const loadPreset = (vals: number[]) => {
    let r: BSTNode | null = null;
    vals.forEach(v => { r = bstInsertNode(r, v); });
    setBstRoot(r); setStatus('Betöltve.'); setHighlight(null);
  };

  const insert = () => {
    const v = parseInt(inputVal);
    if (isNaN(v) || v < 1 || v > 999) return;
    setBstRoot(r => bstInsertNode(r, v));
    setStatus(`${v} beszúrva.`); setHighlight(v); setInputVal('');
  };

  const search = () => {
    const v = parseInt(inputVal);
    if (isNaN(v)) return;
    let cur = bstRoot, found = false;
    while (cur) { if (cur.val === v) { found = true; break; } cur = v < cur.val ? cur.left : cur.right; }
    setStatus(found ? `${v} megtalálva!` : `${v} nincs a fában.`); setHighlight(v);
  };

  const del = () => {
    const v = parseInt(inputVal);
    if (isNaN(v)) return;
    setBstRoot(r => bstDeleteNode(r, v));
    setStatus(`${v} törölve.`); setHighlight(null);
  };

  const traverse = (order: string) => {
    const result: number[] = [];
    const inorder = (n: BSTNode | null) => { if (!n) return; inorder(n.left); result.push(n.val); inorder(n.right); };
    const preorder = (n: BSTNode | null) => { if (!n) return; result.push(n.val); preorder(n.left); preorder(n.right); };
    const postorder = (n: BSTNode | null) => { if (!n) return; postorder(n.left); postorder(n.right); result.push(n.val); };
    if (order === 'inorder') inorder(bstRoot);
    else if (order === 'preorder') preorder(bstRoot);
    else postorder(bstRoot);
    setTraversal(result.join(' → '));
  };

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Bináris keresőfa (BST) — beszúrás, keresés, bejárás</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1rem' }}>
          <canvas ref={cvRef} width={480} height={320} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0f14' }} />
          <div>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '.5rem' }}>
              <input type="number" className="ila-num" style={{ width: '80px' }} value={inputVal} onChange={e => setInputVal(e.target.value)} onKeyDown={e => e.key === 'Enter' && insert()} placeholder="érték" min={1} max={99} />
              <button className="op-btn is-active" onClick={insert}>Beszúr</button>
              <button className="op-btn" onClick={search}>Keres</button>
              <button className="op-btn" onClick={del}>Töröl</button>
            </div>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
              <button className="op-btn" onClick={() => loadPreset([5,3,7,2,4,6,8])}>Teljes fa</button>
              <button className="op-btn" onClick={() => loadPreset([10,5,15,3,7,12,20,1,4])}>Nagyobb</button>
              <button className="op-btn" onClick={() => { setBstRoot(null); setStatus('Fa törölve.'); setHighlight(null); }}>Törölj mindent</button>
            </div>
            <div style={{ fontSize: '.8rem', color: '#8ba3bc', marginBottom: '.5rem' }}>{status}</div>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.4rem' }}>
              <button className="op-btn" onClick={() => traverse('inorder')}>Inorder (rendezett)</button>
              <button className="op-btn" onClick={() => traverse('preorder')}>Preorder</button>
              <button className="op-btn" onClick={() => traverse('postorder')}>Postorder</button>
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '.8rem', color: '#4ade80', background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.4rem .6rem', minHeight: '1.8rem' }}>{traversal}</div>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Rendezési algoritmusok korlátja</span>
          <RichTex html={String.raw`<div style="font-size:.83rem;color:#c8d8e8;line-height:1.75">\(n\) elem rendezésekor az összehasonlításos döntési fa magassága:<br>\[h \geq \lceil\log_2(n!)\rceil \approx n\log_2 n\]Tehát <b>minden összehasonlításos rendező</b> \(\mathcal{O}(n\log n)\)-nél nem lehet gyorsabb.<br><br><b style="color:#38bdf8">Inorder bejárás</b> = rendezett lista → a BST implicit rendező!<br>Átlagos keresés: \(\mathcal{O}(\log n)\), legrosszabb: \(\mathcal{O}(n)\).</div>`} />
        </div>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Elfajuló vs. kiegyensúlyozott BST</span>
          <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.5rem' }}>
            <button className="op-btn" onClick={() => loadPreset([1,2,3,4,5,6,7])}>Elfajuló (1,2,3...)</button>
            <button className="op-btn" onClick={() => loadPreset([4,2,6,1,3,5,7])}>Kiegyensúlyozott</button>
          </div>
          <RichTex html={String.raw`<div style="font-size:.83rem;color:#c8d8e8;line-height:1.7">Sorban rendezett elemek beszúrásakor a fa egy lánccá válik: magassága n−1 → lineáris keresés.<br>AVL/Piros-Fekete fák garantálják az \(\mathcal{O}(\log n)\) magasságot.</div>`} />
        </div>
      </div>
    </div>
  );
}

// ─── TAB 5: Cayley & Erdők ─────────────────────────────────────────
function CayleyTab() {
  const [cayleyN, setCayleyN] = useState(4);
  const cvRef = useRef<HTMLCanvasElement>(null);
  const allCvRef = useRef<HTMLCanvasElement>(null);
  const forestCvRef = useRef<HTMLCanvasElement>(null);

  const showRandom = (n: number) => {
    const cv = cvRef.current; if (!cv) return;
    const seq = Array.from({ length: n - 2 }, () => Math.floor(Math.random() * n) + 1);
    const edges = pruferDecode(seq, n);
    const nodes = pruferLayout(n);
    drawTree(cv, nodes, edges, null, null, Array.from({ length: n }, (_, i) => i + 1));
  };

  const drawAll = (cv: HTMLCanvasElement) => {
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, cv.width, cv.height);
    const trees: TEdge[][] = [];
    for (let a = 1; a <= 4; a++) for (let b = 1; b <= 4; b++) trees.push(pruferDecode([a, b], 4));
    const cols = 4, rows = 4, cellW = cv.width / cols, cellH = cv.height / rows;
    trees.forEach((edges, idx) => {
      const col = idx % cols, row = Math.floor(idx / cols);
      const ox = col * cellW, oy = row * cellH;
      const cx2 = ox + cellW / 2, cy2 = oy + cellH / 2, r = 28;
      const nodes = [{x:cx2,y:cy2-r},{x:cx2+r,y:cy2},{x:cx2,y:cy2+r},{x:cx2-r,y:cy2}];
      edges.forEach(([a, b]) => {
        ctx.strokeStyle = '#2a4a6a'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); ctx.stroke();
      });
      nodes.forEach((n, i) => {
        ctx.beginPath(); ctx.arc(n.x, n.y, 8, 0, 2 * Math.PI); ctx.fillStyle = '#1e3a5f'; ctx.fill(); ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1; ctx.stroke();
        ctx.fillStyle = '#fff'; ctx.font = 'bold 8px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(i + 1), n.x, n.y);
      });
      ctx.fillStyle = '#4a5a6a'; ctx.font = '7px monospace'; ctx.textAlign = 'left';
      ctx.fillText(`[${edges.map(e => e.map(x => x + 1).join('-')).join(',')}]`, ox + 2, oy + cellH - 4);
    });
  };

  const drawForest = (cv: HTMLCanvasElement) => {
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, cv.width, cv.height);
    const trees = [
      { nodes: [{x:50,y:60},{x:30,y:120},{x:70,y:120}], edges: [[0,1],[0,2]] as TEdge[] },
      { nodes: [{x:150,y:50},{x:120,y:110},{x:150,y:110},{x:180,y:110},{x:150,y:150}], edges: [[0,1],[0,2],[0,3],[2,4]] as TEdge[] },
      { nodes: [{x:250,y:80},{x:250,y:140}], edges: [[0,1]] as TEdge[] },
    ];
    trees.forEach(t => {
      t.edges.forEach(([a, b]) => {
        ctx.strokeStyle = '#2a4a6a'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(t.nodes[a].x, t.nodes[a].y); ctx.lineTo(t.nodes[b].x, t.nodes[b].y); ctx.stroke();
      });
      t.nodes.forEach(n => {
        ctx.beginPath(); ctx.arc(n.x, n.y, 9, 0, 2 * Math.PI); ctx.fillStyle = '#1e3a5f'; ctx.fill(); ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.2; ctx.stroke();
      });
    });
    ctx.fillStyle = '#38bdf8'; ctx.font = '10px monospace'; ctx.textAlign = 'center';
    ctx.fillText('Erdő: 3 fa komponens, |E|=|V|-3', cv.width / 2, cv.height - 8);
  };

  useEffect(() => { showRandom(cayleyN); }, [cayleyN]);
  useEffect(() => { if (allCvRef.current) drawAll(allCvRef.current); }, []);
  useEffect(() => { if (forestCvRef.current) drawForest(forestCvRef.current); }, []);

  const count = Math.pow(cayleyN, cayleyN - 2);

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Cayley tétele — n^(n-2) számozott fa</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', fontSize: '.82rem', color: '#8ba3bc', marginBottom: '.75rem' }}>
              <span>n =</span>
              <input type="range" min={2} max={7} value={cayleyN} onChange={e => setCayleyN(+e.target.value)} style={{ flex: 1, accentColor: '#38bdf8' }} />
              <span>n = {cayleyN}</span>
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#38bdf8', textAlign: 'center', margin: '.5rem 0' }}>
              {cayleyN}^{cayleyN - 2} = {count}
            </div>
            <div style={{ fontSize: '.83rem', color: '#c8d8e8', marginBottom: '.75rem' }}>
              n={cayleyN} csúcsú számozott fák száma: {cayleyN}^{cayleyN - 2} = {count} db.
            </div>
            <canvas ref={cvRef} width={320} height={220} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0f14' }} />
            <button className="op-btn" style={{ marginTop: '.5rem' }} onClick={() => showRandom(cayleyN)}>Véletlen fa mutatása</button>
          </div>
          <div>
            <div className="info-box" style={{ margin: 0 }}>
              <span className="lbl" style={{ color: '#38bdf8' }}>n=4 összes fája</span>
              <canvas ref={allCvRef} width={420} height={330} style={{ width: '100%', borderRadius: '.4rem', background: '#0a0f14' }} />
              <div style={{ fontSize: '.75rem', color: '#8ba3bc', marginTop: '.4rem' }}>16 különböző számozott fa 4 csúcson (Prüfer-kódok: 00..33)</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Erdők és komponensek</span>
          <RichTex html={String.raw`<div style="font-size:.83rem;color:#c8d8e8;line-height:1.75"><b style="color:#38bdf8">Erdő:</b> körmentes gráf (komponensei fák).<br>\(k\) komponensű erdőre: \(|E| = |V| - k\)<br><br><b style="color:#38bdf8">Feszítőfa:</b> összefüggő G gráf feszítőfája egy G-beli fa, amely G összes csúcsát tartalmazza.<br>Minden összefüggő gráfnak van feszítőfája (BFS/DFS fa).</div>`} />
          <canvas ref={forestCvRef} width={300} height={160} style={{ width: '100%', borderRadius: '.4rem', background: '#0a0f14', marginTop: '.75rem' }} />
        </div>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Összefoglalás</span>
          <div style={{ overflowX: 'auto' }}>
            <table className="cayley" style={{ width: '100%', fontSize: '.82rem' }}>
              <thead><tr><th style={{ textAlign: 'left' }}>Fogalom</th><th style={{ textAlign: 'left' }}>Definíció</th></tr></thead>
              <tbody>
                <tr><td>Fa</td><td>Összefüggő, körmentes gráf</td></tr>
                <tr><td>Erdő</td><td>Körmentes gráf (több fa)</td></tr>
                <tr><td>Levél</td><td>Fokszám = 1 csúcs</td></tr>
                <RichTex html={String.raw`<tr><td>Fák száma</td><td>\(n^{n-2}\) (Cayley, 1889)</td></tr><tr><td>Prüfer-kód</td><td>Bijekció fák ↔ \((n-2)\)-sorozatok</td></tr>`} />
                <tr><td>Közép</td><td>1 vagy 2 csúcs (iteratív levél-törlés)</td></tr>
                <RichTex html={String.raw`<tr><td>BST keresés</td><td>\(\mathcal{O}(\log n)\) átlag, \(\mathcal{O}(n)\) legrosszabb</td></tr><tr><td>Rendezési korlát</td><td>\(\Omega(n\log n)\) összehasonlításos rendezők</td></tr>`} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TABS ──────────────────────────────────────────────────────────
const TABS: Tab[] = [
  { id: 'alapok', label: 'Fák alapjai', content: <TreeBasicsTab /> },
  { id: 'prufer', label: 'Prüfer-kód', content: <PruferTab /> },
  { id: 'kozep',  label: 'Fa közepe', content: <TreeCenterTab /> },
  { id: 'bst',    label: 'Bináris keresőfa', content: <BSTTab /> },
  { id: 'cayley', label: 'Cayley & Erdők', content: <CayleyTab /> },
];

export default function DimatCh14() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika — 14. fejezet</p>
      <h1 className="ila__title">Fák</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
