import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, Cols, type Tab } from '../components/kit';

// ── accent color ──────────────────────────────────────────────────────────────
const ACC = '#818cf8';

// ── shared graph draw helpers ─────────────────────────────────────────────────
function drawNode(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, label: string,
  fill = '#1e2040', stroke = ACC,
) {
  ctx.beginPath(); ctx.arc(x, y, 14, 0, Math.PI * 2);
  ctx.fillStyle = fill; ctx.fill();
  ctx.strokeStyle = stroke; ctx.lineWidth = 1.5; ctx.stroke();
  ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 11px monospace';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(label, x, y);
}
function drawEdge(
  ctx: CanvasRenderingContext2D,
  x1: number, y1: number, x2: number, y2: number,
  color = '#4f46e5', width = 1.5,
) {
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
  ctx.strokeStyle = color; ctx.lineWidth = width; ctx.stroke();
}

// ══ TAB 1: Alapfogalmak — interactive handshake canvas ═══════════════════════

const ALAP_NODES = [
  { x: 80, y: 130 }, { x: 200, y: 50 }, { x: 320, y: 50 },
  { x: 440, y: 130 }, { x: 320, y: 210 }, { x: 200, y: 210 },
];
type Edge = [number, number];
const ALAP_INITIAL: Edge[] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 2], [3, 5]];

function AlapCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [edges, setEdges] = useState<Edge[]>(ALAP_INITIAL);
  const [mode, setMode] = useState<'add' | 'remove' | null>(null);
  const [sel, setSel] = useState(-1);
  const [stats, setStats] = useState('');

  const draw = useCallback(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.strokeStyle = '#4f46e5'; ctx.lineWidth = 1.5;
    edges.forEach(([a, b]) => {
      ctx.beginPath();
      ctx.moveTo(ALAP_NODES[a].x, ALAP_NODES[a].y);
      ctx.lineTo(ALAP_NODES[b].x, ALAP_NODES[b].y);
      ctx.stroke();
    });
    const deg = Array(ALAP_NODES.length).fill(0);
    edges.forEach(([a, b]) => { deg[a]++; deg[b]++; });
    ALAP_NODES.forEach((n, i) => {
      ctx.beginPath(); ctx.arc(n.x, n.y, 14, 0, Math.PI * 2);
      ctx.fillStyle = i === sel ? '#6366f1' : '#1e2040'; ctx.fill();
      ctx.strokeStyle = ACC; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(i + 1), n.x, n.y);
      ctx.fillStyle = ACC; ctx.font = '10px monospace';
      ctx.fillText('d=' + deg[i], n.x, n.y + 24);
    });
    const sumD = deg.reduce((s, d) => s + d, 0);
    setStats(`Fokszámok: [${deg.join(', ')}]  |  Σd(v) = ${sumD}  |  2|E| = ${2 * edges.length}  →  ${sumD === 2 * edges.length ? '✓ Kézfogási tétel teljesül' : '✗ Hiba!'}`);
  }, [edges, sel]);

  useEffect(() => { draw(); }, [draw]);

  function hitNode(mx: number, my: number) {
    let hit = -1;
    ALAP_NODES.forEach((n, i) => { if (Math.hypot(n.x - mx, n.y - my) < 18) hit = i; });
    return hit;
  }

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const cv = ref.current; if (!cv) return;
    const r = cv.getBoundingClientRect();
    const mx = (e.clientX - r.left) * (cv.width / r.width);
    const my = (e.clientY - r.top) * (cv.height / r.height);
    const hit = hitNode(mx, my);
    if (hit < 0) return;
    if (mode === 'add') {
      if (sel < 0) { setSel(hit); return; }
      const a = Math.min(sel, hit), b = Math.max(sel, hit);
      if (a !== b && !edges.find(([x, y]) => x === a && y === b))
        setEdges(prev => [...prev, [a, b]]);
      setSel(-1);
    } else if (mode === 'remove') {
      if (sel < 0) { setSel(hit); return; }
      const a = Math.min(sel, hit), b = Math.max(sel, hit);
      setEdges(prev => prev.filter(([x, y]) => !(x === a && y === b)));
      setSel(-1);
    }
  }

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Interaktív — kézfogási tétel ellenőrzés</span>
      <p style={{ fontSize: '.85rem', color: '#8892a4', margin: '.25rem 0 .5rem' }}>Kattints a csúcsokra élek hozzáadásához / eltávolításához. A fokszámok és 2|E| automatikusan frissülnek.</p>
      <canvas ref={ref} width={560} height={260}
        style={{ borderRadius: '.4rem', background: '#0d0e1f', cursor: 'crosshair', maxWidth: '100%', display: 'block' }}
        onClick={handleClick} />
      <div style={{ marginTop: '.5rem', fontSize: '.8rem', color: '#8892a4' }}>{stats}</div>
      <div style={{ marginTop: '.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <button className="op-btn" onClick={() => { setEdges(ALAP_INITIAL); setSel(-1); setMode(null); }}>Visszaállít (K₄)</button>
        <button className={`op-btn${mode === 'add' ? ' is-active' : ''}`} onClick={() => { setMode('add'); setSel(-1); }}>+ Él hozzáad</button>
        <button className={`op-btn${mode === 'remove' ? ' is-active' : ''}`} onClick={() => { setMode('remove'); setSel(-1); }}>− Él töröl</button>
      </div>
    </div>
  );
}

// ══ TAB 2: Havel-Hakimi ═══════════════════════════════════════════════════════

type HHStep = { seq: number[]; action: 'start' | 'step' | 'done'; ok?: boolean; err?: string; reduced?: number };

function hhCompute(input: string): HHStep[] {
  const history: HHStep[] = [];
  let seq = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
  seq.sort((a, b) => b - a);
  history.push({ seq: [...seq], action: 'start' });
  for (let iter = 0; iter < 30; iter++) {
    if (seq.every(x => x === 0)) { history.push({ seq: [...seq], action: 'done', ok: true }); break; }
    const d1 = seq[0];
    seq = seq.slice(1);
    for (let i = 0; i < d1; i++) {
      if (i >= seq.length) { history.push({ seq: [...seq], action: 'done', ok: false, err: 'Nincs elég csúcs' }); return history; }
      seq[i]--;
    }
    if (seq.some(x => x < 0)) { history.push({ seq: [...seq], action: 'done', ok: false, err: 'Negatív fokszám' }); break; }
    seq.sort((a, b) => b - a);
    history.push({ seq: [...seq], action: 'step', reduced: d1 });
  }
  return history;
}

function HHCells({ seq }: { seq: number[] }) {
  return (
    <>
      {seq.map((x, i) => {
        const cls = x < 0 ? 'neg' : x === 0 ? 'zero' : '';
        return (
          <span key={i} style={{
            display: 'inline-block', minWidth: '2rem', textAlign: 'center',
            padding: '.25rem .4rem', borderRadius: '.3rem', fontSize: '.82rem', fontWeight: 700,
            background: x < 0 ? '#3a0000' : x === 0 ? '#1a2f1a' : '#161b22',
            color: x < 0 ? '#ef4444' : x === 0 ? '#34d399' : '#e2e8f0',
            margin: '.1rem',
          }} className={cls}>
            {x}
          </span>
        );
      })}
    </>
  );
}

function HavelHakimi() {
  const [input, setInput] = useState('7,5,4,4,3,2,2,1');
  const [history, setHistory] = useState<HHStep[]>([]);
  const [ptr, setPtr] = useState(0);

  function runAll(val = input) {
    const h = hhCompute(val);
    setHistory(h);
    setPtr(h.length - 1);
  }
  function step() {
    if (!history.length) { const h = hhCompute(input); setHistory(h); setPtr(0); return; }
    if (ptr < history.length - 1) setPtr(p => p + 1);
  }
  function loadEx(ex: number) {
    const v = ex === 16 ? '7,5,4,4,3,2,2,1' : '5,5,4,3,2,1';
    setInput(v);
    const h = hhCompute(v);
    setHistory(h);
    setPtr(h.length - 1);
  }

  const visible = history.slice(0, ptr + 1);
  const last = visible[visible.length - 1];
  const verdict = last?.action === 'done'
    ? last.ok
      ? <span style={{ color: '#34d399' }}>✓ A sorozat GRAFIKUS — megvalósítható egyszerű gráffal</span>
      : <span style={{ color: '#ef4444' }}>✗ A sorozat NEM GRAFIKUS ({last.err || ''})</span>
    : null;

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', marginBottom: '.75rem' }}>
        <div className="ex-box">
          <span className="lbl lbl--ex">16. Példa — grafikus sorozat</span>
          <div style={{ fontSize: '.85rem', marginBottom: '.5rem' }}>\(7,5,4,4,3,2,2,1\) — 8 csúcs</div>
          <button className="op-btn" style={{ borderColor: '#34d399', color: '#34d399' }} onClick={() => loadEx(16)}>Betölt és animál</button>
        </div>
        <div className="ex-box" style={{ borderLeftColor: '#ef4444' }}>
          <span className="lbl" style={{ color: '#ef4444' }}>17. Példa — nem grafikus</span>
          <div style={{ fontSize: '.85rem', marginBottom: '.5rem' }}>\(5,5,4,3,2,1\) — 6 csúcs</div>
          <button className="op-btn" style={{ borderColor: '#ef4444', color: '#ef4444' }} onClick={() => loadEx(17)}>Betölt és animál</button>
        </div>
      </div>
      <div className="info-box">
        <span className="lbl" style={{ color: ACC }}>Interaktív tesztelő</span>
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '.75rem' }}>
          <input
            className="ila-text"
            style={{ maxWidth: 280, background: '#0d0e1f', border: '1px solid #374151', color: '#e2e8f0', borderRadius: '.3rem', padding: '.3rem .6rem', fontSize: '.85rem' }}
            placeholder="pl. 3,3,2,2,1,1"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button className="op-btn is-active" onClick={() => runAll()}>Futtat</button>
          <button className="op-btn" onClick={step}>Lépésenként</button>
          <button className="op-btn" onClick={() => { setHistory([]); setPtr(0); }}>Reset</button>
        </div>
        <div style={{ fontSize: '.83rem' }}>
          {visible.map((h, idx) => (
            <div key={idx} style={{ marginBottom: '.4rem' }}>
              {h.action === 'start' && (
                <><span className="lbl" style={{ color: ACC, display: 'inline', marginRight: '.4rem' }}>Induló sorozat:</span><HHCells seq={h.seq} /></>
              )}
              {h.action === 'step' && (
                <><span style={{ color: '#8892a4', fontSize: '.75rem', marginRight: '.4rem' }}>{idx}. lépés (d₁={h.reduced} → csökkent):</span><HHCells seq={h.seq} /></>
              )}
            </div>
          ))}
        </div>
        {verdict && <div style={{ marginTop: '.5rem', fontWeight: 700, fontSize: '.9rem' }}>{verdict}</div>}
      </div>
    </div>
  );
}

// ══ TAB 3: Mátrix & Séta ══════════════════════════════════════════════════════

const MAT_N = 6;
const MAT_INIT: number[][] = [
  [0, 1, 1, 1, 0, 0],
  [1, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 1],
  [0, 1, 0, 1, 0, 1],
  [0, 0, 1, 1, 1, 0],
];

function MatrixWalk() {
  const [adj, setAdj] = useState<number[][]>(() => MAT_INIT.map(r => [...r]));
  const [walkInput, setWalkInput] = useState('1,3,5,6,4');
  const [walkResult, setWalkResult] = useState('');

  function toggleCell(i: number, j: number) {
    if (i === j) return;
    setAdj(prev => {
      const next = prev.map(r => [...r]);
      next[i][j] = next[i][j] ? 0 : 1;
      next[j][i] = next[i][j];
      return next;
    });
  }

  function walkCheck() {
    const seq = walkInput.split(',').map(s => parseInt(s.trim()) - 1).filter(n => !isNaN(n) && n >= 0 && n < MAT_N);
    if (seq.length < 2) { setWalkResult('<span style="color:#ef4444">Legalább 2 csúcs kell!</span>'); return; }
    let valid = true;
    const issues: string[] = [];
    for (let i = 0; i < seq.length - 1; i++) {
      if (!adj[seq[i]][seq[i + 1]]) { valid = false; issues.push(`Nincs él v${seq[i] + 1}→v${seq[i + 1] + 1} között`); }
    }
    const dups = new Set(seq);
    const closed = seq[0] === seq[seq.length - 1];
    const path = dups.size === seq.length && !closed;
    const cycle = dups.size === seq.length - 1 && closed && seq.length >= 4;
    const chips = seq.map((v, i) => {
      const bad = i > 0 && !adj[seq[i - 1]][v];
      return `<span style="display:inline-block;padding:.2rem .5rem;border-radius:.3rem;font-size:.78rem;font-family:monospace;margin:.1rem;background:#161b22;border:1px solid ${bad ? '#ef4444' : '#21262d'};color:${bad ? '#ef4444' : '#e2e8f0'}">v${v + 1}</span>`;
    }).join('');
    let html = `<div style="display:flex;flex-wrap:wrap;gap:.1rem;margin-bottom:.4rem">${chips}</div>`;
    if (!valid) html += `<span style="color:#ef4444">✗ Nem érvényes séta: ${issues.join(', ')}</span>`;
    else html += `<span style="color:#34d399">✓ Érvényes séta, hossza: ${seq.length - 1}</span><br><span style="color:#c7d2fe">Típus: ${closed ? 'zárt' : 'nyílt'} · ${path ? 'Út (path)' : cycle ? 'Kör (cycle)' : 'Séta (walk, ismétlő csúcs)'}</span>`;
    setWalkResult(html);
  }

  const deg = Array(MAT_N).fill(0).map((_, i) => adj[i].reduce((s, x) => s + x, 0));
  const edgeCount = deg.reduce((s, d) => s + d, 0) / 2;

  return (
    <div>
      <Cols>
        <div>
          <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-1" style="color:#818cf8">20. Definíció — Szomszédsági mátrix</div>
<div class="box-body">Az \(n\times n\)-es \(A=(a_{ij})\) mátrixban \(a_{ij}=\) az \(i\) és \(j\) csúcsok közötti élek száma. Irányítatlan gráfnál \(A\) <em>szimmetrikus</em>, a sorok összege a csúcs fokszáma, az összes elem összege \(2|E|\).</div></div>
<div class="def-box"><div class="lbl mb-1" style="color:#818cf8">23. Definíció — Séta (walk)</div>
<div class="box-body">Séta: \(v_0,e_1,v_1,e_2,v_2,\ldots,e_k,v_k\) ahol \(e_i\) a \(v_{i-1}\) és \(v_i\) csúcsot köti össze. <em>Zárt</em> séta: \(v_0=v_k\). <em>Nyílt</em> séta: \(v_0\ne v_k\). Hossza: \(k\) (élek száma).</div></div>
<div class="def-box"><div class="lbl mb-1" style="color:#818cf8">25. Definíció — Út és kör</div>
<div class="box-body"><strong>Út (path):</strong> Séta, amelyben minden csúcs különböző (\(v_i\ne v_j\) ha \(i\ne j\)). <strong>Kör (cycle):</strong> Zárt séta, amelyben minden csúcs különböző (kivéve \(v_0=v_k\)) és \(k\ge3\).</div></div>`} />
        </div>
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: ACC }}>22. Példa — szomszédsági mátrix</span>
            <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.25rem 0 .5rem' }}>Kattints a mátrix cellájára az él hozzáadásához / eltávolításához.</p>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${MAT_N + 1}, 2rem)`, gap: '.15rem', overflowX: 'auto' }}>
              <div style={{ width: '2rem' }} />
              {Array.from({ length: MAT_N }, (_, j) => (
                <div key={j} style={{ width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.68rem', color: ACC }}>v{j + 1}</div>
              ))}
              {Array.from({ length: MAT_N }, (_, i) => (
                <>
                  <div key={`h${i}`} style={{ width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.68rem', color: ACC }}>v{i + 1}</div>
                  {Array.from({ length: MAT_N }, (_, j) => (
                    <div key={`${i},${j}`}
                      onClick={() => toggleCell(i, j)}
                      style={{
                        width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '.78rem', fontWeight: 600, borderRadius: '.25rem', cursor: i === j ? 'default' : 'pointer',
                        background: adj[i][j] ? '#1a1f4a' : '#161b22',
                        color: adj[i][j] ? ACC : '#4b5563',
                        transition: 'background .2s',
                      }}>
                      {adj[i][j]}
                    </div>
                  ))}
                </>
              ))}
            </div>
            <div style={{ fontSize: '.8rem', marginTop: '.5rem', color: '#8892a4' }}>
              Fokszámok: [{deg.join(', ')}]  |  |E| = {edgeCount}  |  Σd = {2 * edgeCount} = 2|E| ✓
            </div>
          </div>
        </div>
      </Cols>
      <div className="info-box">
        <span className="lbl" style={{ color: ACC }}>Séta / Út / Kör vizsgálat</span>
        <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', marginBottom: '.5rem', flexWrap: 'wrap', fontSize: '.85rem' }}>
          <span style={{ color: '#8892a4' }}>Csúcsok sorozata (pl. 1,2,3,4,2):</span>
          <input
            style={{ maxWidth: 200, background: '#0d0e1f', border: '1px solid #374151', color: '#e2e8f0', borderRadius: '.3rem', padding: '.3rem .5rem', fontSize: '.82rem' }}
            value={walkInput}
            onChange={e => setWalkInput(e.target.value)}
          />
          <button className="op-btn is-active" onClick={walkCheck}>Elemez</button>
        </div>
        {walkResult && <div style={{ fontSize: '.82rem' }} dangerouslySetInnerHTML={{ __html: walkResult }} />}
      </div>
    </div>
  );
}

// ══ TAB 4: Összefüggőség — BFS canvas ════════════════════════════════════════

const BFS_POS = [
  { x: 100, y: 80 }, { x: 200, y: 50 }, { x: 260, y: 140 }, { x: 160, y: 180 },
  { x: 360, y: 80 }, { x: 460, y: 60 }, { x: 500, y: 160 }, { x: 400, y: 200 },
];
const BFS_ADJ = [
  [0, 1, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0],
];
const COMP_COLORS = ['#818cf8', '#f43f5e', '#34d399', '#fbbf24', '#22d3ee'];

interface BFSState {
  color: number[];
  queue: number[];
  curComp: number;
  nextNode: number;
  done: boolean;
}

function makeBFSState(): BFSState {
  return { color: Array(8).fill(-1), queue: [], curComp: -1, nextNode: 0, done: false };
}

function BFSCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [state, setState] = useState<BFSState>(makeBFSState);
  const [status, setStatus] = useState('Nyomj Lépés gombot a BFS indításához.');
  const [comps, setComps] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function bfsDraw(s: BFSState) {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    BFS_ADJ.forEach((row, i) => row.forEach((c, j) => {
      if (c && i < j) {
        ctx.beginPath();
        ctx.moveTo(BFS_POS[i].x, BFS_POS[i].y);
        ctx.lineTo(BFS_POS[j].x, BFS_POS[j].y);
        ctx.strokeStyle = '#2a2f4a'; ctx.lineWidth = 1.5; ctx.stroke();
      }
    }));
    BFS_POS.forEach((p, i) => {
      const col = s.color[i] >= 0 ? COMP_COLORS[s.color[i]] : '#374151';
      ctx.beginPath(); ctx.arc(p.x, p.y, 16, 0, Math.PI * 2);
      ctx.fillStyle = col + '33'; ctx.fill();
      ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('v' + (i + 1), p.x, p.y);
    });
  }

  useEffect(() => { bfsDraw(state); }, [state]);

  function bfsFinish(s: BFSState) {
    const compMap: number[][] = [];
    s.color.forEach((c, v) => { if (!compMap[c]) compMap[c] = []; compMap[c].push(v + 1); });
    const parts = compMap.filter(Boolean);
    const html = 'Komponensek: ' + parts.map((members, i) =>
      `<span style="display:inline-block;padding:.2rem .6rem;border-radius:9999px;font-size:.72rem;font-weight:700;margin:.15rem;background:${COMP_COLORS[i] + '33'};color:${COMP_COLORS[i]};border:1px solid ${COMP_COLORS[i]}">{${members.join(',')}}</span>`
    ).join(' ');
    setComps(html);
    setStatus(`✓ Kész — ${parts.length} komponens találva`);
  }

  function doStep(s: BFSState): BFSState {
    if (s.done) return s;
    const ns = { ...s, color: [...s.color], queue: [...s.queue] };
    if (ns.queue.length === 0) {
      while (ns.nextNode < 8 && ns.color[ns.nextNode] >= 0) ns.nextNode++;
      if (ns.nextNode >= 8) { ns.done = true; return ns; }
      ns.curComp++;
      ns.queue.push(ns.nextNode);
      ns.color[ns.nextNode] = ns.curComp;
      ns.nextNode++;
    } else {
      const v = ns.queue.shift()!;
      BFS_ADJ[v].forEach((c, u) => { if (c && ns.color[u] < 0) { ns.color[u] = ns.curComp; ns.queue.push(u); } });
    }
    if (ns.color.every(c => c >= 0)) ns.done = true;
    return ns;
  }

  function stepClick() {
    setState(prev => {
      const ns = doStep(prev);
      if (ns.done) bfsFinish(ns);
      else setStatus(ns.queue.length > 0 ? `Sor: [${ns.queue.map(v => 'v' + (v + 1)).join(', ')}]` : 'Sor üres');
      return ns;
    });
  }

  function autoClick() {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; return; }
    timerRef.current = setInterval(() => {
      setState(prev => {
        const ns = doStep(prev);
        if (ns.done) { clearInterval(timerRef.current!); timerRef.current = null; bfsFinish(ns); }
        else setStatus(ns.queue.length > 0 ? `Sor: [${ns.queue.map(v => 'v' + (v + 1)).join(', ')}]` : 'Sor üres');
        return ns;
      });
    }, 600);
  }

  function reset() {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    setState(makeBFSState());
    setStatus('Nyomj Lépés gombot a BFS indításához.');
    setComps('');
  }

  return (
    <div>
      <Cols>
        <div>
          <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-1" style="color:#818cf8">28. Definíció — Összefüggő gráf</div>
<div class="box-body">Egy irányítatlan gráf <strong>összefüggő</strong>, ha bármely két csúcsa között létezik séta (és ezért út is). Ha nem összefüggő, <em>széteső</em> gráfnak nevezzük.</div></div>
<div class="def-box"><div class="lbl mb-1" style="color:#818cf8">30. Definíció — Komponens</div>
<div class="box-body">Egy \(G\) gráf <strong>komponense</strong> egy maximális összefüggő részgráf — maximális abban az értelemben, hogy egyetlen csúcsot sem lehet hozzáadni anélkül, hogy megszakítsuk az összefüggőséget.</div></div>`} />
        </div>
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: ACC }}>31. Példa — Tintacsepegtetős algoritmus</span>
            <p style={{ fontSize: '.85rem', margin: '.25rem 0' }}>A tintacsepegtetős (ink-drop / BFS flood-fill) algoritmus: vegyél egy csúcsot, "fess" minden szomszédos csúcsot, majd azok szomszédjait, stb. — amíg el nem akad. Az egy menetben befestett csúcsok egy komponenst alkotnak. Indíts új cseppet a befestetlenek közül, amíg az összes be nem fested.</p>
          </div>
        </div>
      </Cols>
      <div className="info-box">
        <span className="lbl" style={{ color: ACC }}>Interaktív — tintacsepegtetős (BFS) komponenskeresés</span>
        <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.25rem 0 .5rem' }}>Kattints a "Lépés" gombra a BFS animálásához. Minden szín egy különböző komponenst jelöl.</p>
        <canvas ref={ref} width={560} height={280}
          style={{ borderRadius: '.4rem', background: '#0d0e1f', maxWidth: '100%', display: 'block' }} />
        <div style={{ marginTop: '.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
          <button className="op-btn is-active" onClick={stepClick}>Lépés ▶</button>
          <button className="op-btn" onClick={autoClick}>Auto ⏩</button>
          <button className="op-btn" onClick={reset}>Reset</button>
        </div>
        <div style={{ fontSize: '.82rem', color: '#8892a4', marginTop: '.4rem' }}>{status}</div>
        {comps && <div style={{ marginTop: '.4rem', fontSize: '.82rem' }} dangerouslySetInnerHTML={{ __html: comps }} />}
      </div>
      <RichTex className="ex-box" html={String.raw`
<div class="lbl lbl--ex mb-1">31. Példa — mátrix alapján</div>
<div class="box-body">Az előadáson szereplő gráfban 6 csúcs van, a szomszédsági mátrix:
\[A=\begin{pmatrix}0&1&1&0&0&0\\1&0&1&0&0&0\\1&1&0&0&0&0\\0&0&0&0&1&1\\0&0&0&1&0&1\\0&0&0&1&1&0\end{pmatrix}\]
Az algoritmus két komponenst talál: \(\{1,2,3\}\) és \(\{4,5,6\}\).</div>`} />
    </div>
  );
}

// ══ TAB 5: Izomorfizmus ═══════════════════════════════════════════════════════

const IZO_POS_G1 = [
  { x: 80, y: 120 }, { x: 40, y: 60 }, { x: 130, y: 50 }, { x: 170, y: 130 },
  { x: 120, y: 200 }, { x: 40, y: 190 }, { x: 10, y: 130 },
];
const IZO_POS_G2 = [
  { x: 380, y: 120 }, { x: 340, y: 60 }, { x: 430, y: 50 }, { x: 470, y: 130 },
  { x: 420, y: 200 }, { x: 340, y: 190 }, { x: 310, y: 130 },
];
const IZO_EDGES_G1: Edge[] = [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [3, 4], [1, 5], [2, 5], [3, 6], [4, 6], [5, 6]];
const IZO_EDGES_G2: Edge[] = [[0, 1], [0, 2], [0, 3], [0, 4], [1, 5], [1, 6], [2, 3], [2, 5], [3, 6], [4, 5], [4, 6]];

function IzoCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [hl, setHl] = useState<'G1' | 'G2' | null>(null);
  const [seq1, setSeq1] = useState('4,3,3,3,3,3,3');
  const [seq2, setSeq2] = useState('4,3,3,3,3,3,3');
  const [result, setResult] = useState('');
  const [desc, setDesc] = useState('');

  function izoDraw(hlVal: typeof hl) {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d')!; if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = ACC; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('G₁  (2 háromszög a 0-n át)', 100, 20);
    ctx.fillText('G₂  (1 háromszög a 0-n át)', 390, 20);

    const g1HL: Edge[] | null = hlVal === 'G1' ? [[0, 1], [1, 2], [0, 2], [0, 3], [3, 4], [0, 4]] : null;
    const g2HL: Edge[] | null = hlVal === 'G2' ? [[0, 2], [0, 3], [2, 3]] : null;

    function drawGraph(edges: Edge[], pos: { x: number; y: number }[], hlEdges: Edge[] | null) {
      edges.forEach(([a, b]) => {
        const p1 = pos[a], p2 = pos[b];
        const isHL = hlEdges?.some(([x, y]) => (x === a && y === b) || (x === b && y === a));
        ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = isHL ? '#f43f5e' : '#4f46e5';
        ctx.lineWidth = isHL ? 2.5 : 1.5; ctx.stroke();
      });
      pos.forEach((p, i) => {
        const isHub = i === 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, isHub ? 14 : 11, 0, Math.PI * 2);
        ctx.fillStyle = isHub ? '#2a1f6a' : '#1a1f40'; ctx.fill();
        ctx.strokeStyle = isHub ? ACC : '#4f46e5'; ctx.lineWidth = isHub ? 2 : 1.5; ctx.stroke();
        ctx.fillStyle = '#e2e8f0'; ctx.font = `bold ${isHub ? 11 : 10}px monospace`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('v' + (i + 1), p.x, p.y);
      });
    }

    drawGraph(IZO_EDGES_G1, IZO_POS_G1, g1HL);
    drawGraph(IZO_EDGES_G2, IZO_POS_G2, g2HL);
  }

  useEffect(() => { izoDraw(hl); }, [hl]);

  function highlight(g: typeof hl) {
    setHl(g);
    if (g === 'G1') setDesc('G₁: A 0-s csúcson átmenő háromszögek: (v1,v2,v3) és (v1,v4,v5) → 2 háromszög');
    else if (g === 'G2') setDesc('G₂: A 0-s csúcson átmenő háromszög: (v1,v3,v4) → 1 háromszög → nem izomorf!');
    else setDesc('');
  }

  function check() {
    const s1 = seq1.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n)).sort((a, b) => b - a);
    const s2 = seq2.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n)).sort((a, b) => b - a);
    const checks: string[] = [];
    const ok = (cond: boolean, name: string) => { checks.push(`<span style="color:${cond ? '#34d399' : '#ef4444'}">${cond ? '✓' : '✗'} ${name}</span>`); return cond; };
    ok(s1.length === s2.length, '|V₁|=|V₂|: ' + s1.length + ' vs ' + s2.length);
    ok(s1.reduce((s, x) => s + x, 0) === s2.reduce((s, x) => s + x, 0), '|E₁|=|E₂| (fokszámösszeg)');
    const seqEq = JSON.stringify(s1) === JSON.stringify(s2);
    ok(seqEq, 'Fokszámsorozat egyezik');
    const allOk = checks.every(c => c.includes('#34d399'));
    setResult(checks.join('  ') + `<br><span style="color:${allOk ? '#fbbf24' : '#ef4444'};font-weight:700;margin-top:.3rem;display:block">${allOk ? '⚠ Szükséges feltételek teljesülnek — de ez nem elégséges az izomorfizmushoz!' : '✗ Biztosan NEM izomorfak — szükséges feltétel sérül'}</span>`);
  }

  return (
    <div>
      <RichTex className="def-box" html={String.raw`
<div class="lbl mb-1" style="color:#818cf8">32. Definíció — Izomorf gráfok</div>
<div class="box-body">A \(G_1=(V_1,E_1)\) és \(G_2=(V_2,E_2)\) gráfok <strong>izomorfak</strong>, ha léteznek bijekciók \(\varphi:V_1\to V_2\) és \(\psi:E_1\to E_2\) úgy, hogy az illeszkedési viszony megmarad: ha \(e\in E_1\) illeszkedik \(u,v\in V_1\)-re, akkor \(\psi(e)\in E_2\) illeszkedik \(\varphi(u),\varphi(v)\)-re. Jelölés: \(G_1\cong G_2\).</div>`} />
      <RichTex className="thm-box" html={String.raw`
<div class="lbl mb-1" style="color:#4f46e5">34. Állítás — Izomorfizmus invariánsok</div>
<div class="box-body">Ha \(G_1\cong G_2\), akkor szükségszerűen egyezik:
<ul class="mb-0 mt-1">
<li>csúcsszám: \(|V_1|=|V_2|\)</li>
<li>élszám: \(|E_1|=|E_2|\)</li>
<li>fokszámsorozat (rendezetten is)</li>
<li>összefüggőség, komponensszám</li>
<li>körök száma és hosszai</li>
</ul>
<strong>Figyelem:</strong> Ezek szükséges, de <em>nem elégséges</em> feltételek!</div>`} />
      <div className="ex-box">
        <span className="lbl lbl--ex">35. Példa — Nem izomorf gráfok</span>
        <p style={{ fontSize: '.85rem', marginBottom: '.5rem' }}>Mindkét gráfra: |V|=7, |E|=11, fokszámsorozat: 4,3,3,3,3,3,3. Mégis <em>nem izomorfak</em>, mert eltér a 4-es fokú csúcson átmenő 3-körök (háromszögek) száma.</p>
        <canvas ref={ref} width={560} height={240}
          style={{ borderRadius: '.4rem', background: '#0d0e1f', maxWidth: '100%', display: 'block' }} />
        <div style={{ marginTop: '.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
          <button className="op-btn" style={{ borderColor: ACC, color: ACC }} onClick={() => highlight('G1')}>G₁ háromszögek</button>
          <button className="op-btn" style={{ borderColor: '#4f46e5', color: '#c7d2fe' }} onClick={() => highlight('G2')}>G₂ háromszögek</button>
          <button className="op-btn" onClick={() => highlight(null)}>Töröl</button>
        </div>
        {desc && <div style={{ fontSize: '.82rem', color: '#8892a4', marginTop: '.4rem' }}>{desc}</div>}
      </div>
      <div className="info-box">
        <span className="lbl" style={{ color: ACC }}>Invariáns ellenőrző</span>
        <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.25rem 0 .5rem' }}>Add meg két gráf fokszámsorozatát (vesszővel elválasztva). Az ellenőrző szükséges feltételeket vizsgál.</p>
        <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: '.5rem' }}>
          <div>
            <div className="lbl" style={{ color: ACC, marginBottom: '.2rem' }}>G₁</div>
            <input
              style={{ maxWidth: 180, background: '#0d0e1f', border: '1px solid #374151', color: '#e2e8f0', borderRadius: '.3rem', padding: '.3rem .5rem', fontSize: '.82rem' }}
              value={seq1} onChange={e => setSeq1(e.target.value)}
            />
          </div>
          <div>
            <div className="lbl" style={{ color: ACC, marginBottom: '.2rem' }}>G₂</div>
            <input
              style={{ maxWidth: 180, background: '#0d0e1f', border: '1px solid #374151', color: '#e2e8f0', borderRadius: '.3rem', padding: '.3rem .5rem', fontSize: '.82rem' }}
              value={seq2} onChange={e => setSeq2(e.target.value)}
            />
          </div>
          <button className="op-btn is-active" onClick={check}>Ellenőriz</button>
        </div>
        {result && <div style={{ fontSize: '.82rem' }} dangerouslySetInnerHTML={{ __html: result }} />}
      </div>
    </div>
  );
}

// ══ static theory strings ══════════════════════════════════════════════════════

const t1theory = String.raw`
<h5 style="color:#818cf8;font-weight:700;margin:0 0 .75rem">Gráf alapfogalmak és kézfogási tétel</h5>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem">
<div>
<div class="def-box"><div class="lbl mb-1" style="color:#818cf8">1. Definíció — Irányított gráf</div>
<div class="box-body">\(G=(V,E)\), ahol \(V\) a csúcsok (vertices) véges nemüres halmaza, \(E\) az élhalmaz. Irányított gráfnál \(E\subseteq V\times V\), az élek rendezett párok \((a,b)\). \(a\) az él <em>kezdőpontja</em>, \(b\) a <em>végpontja</em>.</div></div>
<div class="def-box mt-2"><div class="lbl mb-1" style="color:#818cf8">5. Definíció — Irányítatlan gráf</div>
<div class="box-body">Irányítatlan gráfban az élek <em>rendezetlen</em> párok \(\{a,b\}\), ahol \(a\ne b\) (vagy \(a=b\), ha hurokél). A gráf szimmetrikus kapcsolatokat ábrázol.</div></div>
</div>
<div>
<div class="def-box"><div class="lbl mb-1" style="color:#818cf8">7. Definíció — Fokszám</div>
<div class="box-body">Az \(a\in V\) csúcs <strong>fokszáma</strong> \(d(a)\): a csúcshoz illeszkedő élek száma. <em>Hurokél</em> kétszer számít (\(d(a)\mathrel{+}=2\)). \(d(a)=0\) esetén <strong>izolált pont</strong> (Def 9).</div></div>
<div class="thm-box mt-2"><div class="lbl mb-1" style="color:#4f46e5">10. Tétel — Kézfogási tétel</div>
<div class="box-body">Minden irányítatlan gráfra:
\[\sum_{v\in V} d(v) = 2|E|\]
<strong>Következmény:</strong> A páratlan fokszámú csúcsok száma mindig páros.</div></div>
</div>
</div>
<div class="def-box mt-2"><div class="lbl mb-1" style="color:#818cf8">12. Definíció — Egyszerű gráf</div>
<div class="box-body">Egy gráf <strong>egyszerű</strong>, ha nincs benne hurokél (\(a=b\) él) és nincsenek <em>párhuzamos élek</em> (ugyanaz a pár többször). Egyszerű gráfban \(d(v)\le |V|-1\) minden \(v\)-re.</div></div>
<div class="ex-box mt-2"><div class="lbl lbl--ex mb-1">Kézfogási tétel — bizonyítás ötlete</div>
<div class="box-body">Minden él pontosan két csúcsot köt össze, ezért az összegzéskor <em>minden élt kétszer számolunk</em> (egyszer mindkét végpontjánál). Tehát \(\sum d(v) = 2|E|\). &#x25a1;</div></div>`;

const t2theory = String.raw`
<h5 style="color:#818cf8;font-weight:700;margin:0 0 .75rem">Havel-Hakimi algoritmus</h5>
<div class="thm-box mb-2"><div class="lbl mb-1" style="color:#4f46e5">14. Tétel — Havel-Hakimi (ekvivalens feltételek)</div>
<div class="box-body">Legyen \((d_1,\ldots,d_n)\) nemnegatív egész sorozat, \(d_1\ge\cdots\ge d_n\). A sorozat <em>grafikus</em> (megvalósítható egyszerű gráffal) \(\Longleftrightarrow\) az alábbi feltételek bármelyike teljesül:
<ol class="mt-1 mb-0">
<li>Létezik olyan egyszerű gráf, amelynek fokszámsorozata pontosan ez.</li>
<li>A sorozat összege páros, és a fokszámok nem haladják meg \(n-1\)-et.</li>
<li>Rekurzív feltétel (Havel-Hakimi lépés): a \((d_2-1,\ldots,d_{d_1+1}-1,d_{d_1+2},\ldots,d_n)\) sorozat (rendezés után) szintén grafikus.</li>
</ol></div></div>
<div class="info-box"><div class="lbl mb-1" style="color:#818cf8">15. Algoritmus — Havel-Hakimi lépések</div>
<div class="box-body">
<strong>1.</strong> Rendezd csökkenőbe a sorozatot.<br>
<strong>2.</strong> Vedd a legnagyobb \(d_1\) elemet, töröld a listából.<br>
<strong>3.</strong> Csökkentsd a következő \(d_1\) elemet egyenként 1-gyel.<br>
<strong>4.</strong> Ha valamelyik negatív lesz → <span style="color:#ef4444">a sorozat NEM grafikus</span>.<br>
<strong>5.</strong> Ha mind nulla lett → <span style="color:#34d399">a sorozat GRAFIKUS</span>.<br>
<strong>6.</strong> Különben rendezz és ismételd az 1. lépéstől.
</div></div>`;

// ══ TABS ══════════════════════════════════════════════════════════════════════

const TABS: Tab[] = [
  {
    id: 'alap', label: 'Alapfogalmak',
    content: <div><RichTex html={t1theory} /><AlapCanvas /></div>,
  },
  {
    id: 'hh', label: 'Havel-Hakimi',
    content: <div><RichTex html={t2theory} /><HavelHakimi /></div>,
  },
  {
    id: 'mat', label: 'Mátrix & Séta',
    content: <MatrixWalk />,
  },
  {
    id: 'osszef', label: 'Összefüggőség',
    content: <BFSCanvas />,
  },
  {
    id: 'izo', label: 'Izomorfizmus',
    content: <IzoCanvas />,
  },
];

export default function Ch14() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika VI — fejezet</p>
      <h1 className="ila__title">Gráfelmélet 1.</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
