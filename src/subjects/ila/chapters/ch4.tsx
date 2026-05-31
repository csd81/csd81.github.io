import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cols, Tabs, RichTex, type Tab } from '../components/kit';

const PALETTE = ['#a78bfa', '#34d399', '#f97316', '#22d3ee', '#f472b6', '#fbbf24', '#60a5fa', '#e879f9'];

function ahd(ctx: CanvasRenderingContext2D, fx: number, fy: number, tx: number, ty: number, color: string) {
  const dx = tx - fx, dy = ty - fy, len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ux = dx / len, uy = dy / len, ah = 7;
  ctx.beginPath(); ctx.moveTo(tx, ty);
  ctx.lineTo(tx - ah * (ux - 0.4 * uy), ty - ah * (uy + 0.4 * ux));
  ctx.lineTo(tx - ah * (ux + 0.4 * uy), ty - ah * (uy - 0.4 * ux));
  ctx.closePath(); ctx.fillStyle = color; ctx.fill();
}
function circle(n: number, W: number, H: number, R: number) {
  const cx = W / 2, cy = H / 2, pts: { x: number; y: number; i: number }[] = [];
  for (let i = 1; i <= n; i++) {
    const a = (2 * Math.PI * (i - 1) / n) - Math.PI / 2;
    pts.push({ x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), i });
  }
  return pts;
}
/** Directed relation graph from an adjacency matrix (1-indexed). edgeCol(i,j) returns null to skip. */
function drawGraph(
  ctx: CanvasRenderingContext2D, W: number, H: number, n: number, R: number,
  edgeCol: (i: number, j: number) => string | null,
  nodeBorder: (i: number) => string, nodeFill: (i: number) => string,
) {
  ctx.clearRect(0, 0, W, H);
  const pts = circle(n, W, H, R);
  for (let i = 1; i <= n; i++) for (let j = 1; j <= n; j++) {
    const col = edgeCol(i, j); if (!col) continue;
    const f = pts[i - 1], t = pts[j - 1];
    ctx.strokeStyle = col; ctx.lineWidth = 1.5; ctx.globalAlpha = 0.8; ctx.beginPath();
    if (i === j) ctx.arc(f.x, f.y - 18, 9, 0, 2 * Math.PI);
    else {
      const mx = (f.x + t.x) / 2, my = (f.y + t.y) / 2, dx = t.x - f.x, dy = t.y - f.y;
      const cpx = mx - dy * 0.2, cpy = my + dx * 0.2;
      ctx.moveTo(f.x, f.y); ctx.quadraticCurveTo(cpx, cpy, t.x, t.y);
      ahd(ctx, cpx + (t.x - cpx) * 0.85, cpy + (t.y - cpy) * 0.85, t.x, t.y, col);
    }
    ctx.stroke(); ctx.globalAlpha = 1;
  }
  pts.forEach((p) => {
    ctx.beginPath(); ctx.arc(p.x, p.y, 11, 0, 2 * Math.PI);
    ctx.fillStyle = nodeFill(p.i); ctx.fill();
    ctx.strokeStyle = nodeBorder(p.i); ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(String(p.i), p.x, p.y);
  });
}

const emptyMat = (n: number) => Array.from({ length: n + 1 }, () => Array(n + 1).fill(0) as number[]);

/* ── Tab 2: relation matrix on {1,2,3,4} ── */
const PRESETS4: Record<string, number[][]> = {
  eq: [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]],
  le: [[1, 1, 1, 1], [0, 1, 1, 1], [0, 0, 1, 1], [0, 0, 0, 1]],
  div: [[1, 1, 1, 1], [0, 1, 0, 1], [0, 0, 1, 0], [0, 0, 0, 1]],
  par: [[1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1]],
  empty: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
};
const toMat = (g: number[][], n: number) => { const m = emptyMat(n); for (let i = 1; i <= n; i++) for (let j = 1; j <= n; j++) m[i][j] = g[i - 1][j - 1]; return m; };

function RelMatrix() {
  const ref = useRef<HTMLCanvasElement>(null);
  const N = 4;
  const [preset, setPreset] = useState('eq');
  const [rel, setRel] = useState<number[][]>(() => toMat(PRESETS4.eq, N));
  const load = (k: string) => { setPreset(k); setRel(toMat(PRESETS4[k], N)); };
  const toggle = (r: number, c: number) => { setPreset(''); setRel((p) => { const m = p.map((row) => [...row]); m[r][c] ^= 1; return m; }); };
  const refl = useMemo(() => { for (let i = 1; i <= N; i++) if (!rel[i][i]) return false; return true; }, [rel]);
  const sym = useMemo(() => { for (let i = 1; i <= N; i++) for (let j = 1; j <= N; j++) if (rel[i][j] && !rel[j][i]) return false; return true; }, [rel]);
  const antis = useMemo(() => { for (let i = 1; i <= N; i++) for (let j = 1; j <= N; j++) if (i !== j && rel[i][j] && rel[j][i]) return false; return true; }, [rel]);
  const trans = useMemo(() => { for (let i = 1; i <= N; i++) for (let j = 1; j <= N; j++) if (rel[i][j]) for (let k = 1; k <= N; k++) if (rel[j][k] && !rel[i][k]) return false; return true; }, [rel]);
  const dich = useMemo(() => { for (let i = 1; i <= N; i++) for (let j = 1; j <= N; j++) if (!rel[i][j] && !rel[j][i]) return false; return true; }, [rel]);
  const checks = [['Reflexív', refl], ['Szimmetrikus', sym], ['Antiszimmetrikus', antis], ['Tranzitív', trans], ['Dichotom', dich]] as [string, boolean][];
  const pairs: string[] = [];
  for (let i = 1; i <= N; i++) for (let j = 1; j <= N; j++) if (rel[i][j]) pairs.push(`(${i},${j})`);
  const types: string[] = [];
  if (refl && sym && trans) types.push('Ekvivalenciareláció');
  if (refl && antis && trans) types.push('Részbenrendezés');
  if (refl && antis && trans && dich) types.push('Rendezés');
  useEffect(() => {
    const ctx = ref.current?.getContext('2d');
    if (ctx) drawGraph(ctx, 340, 200, N, 70, (i, j) => (rel[i][j] ? '#a78bfa' : null), () => '#a78bfa', () => '#1a1b25');
  }, [rel]);
  return (
    <div className="info-box">
      <span className="lbl">Interaktív — relációs mátrix ({'{'}1,2,3,4{'}'})</span>
      <div style={{ fontSize: '0.77rem', color: '#8892a4', margin: '0.2rem 0 0.5rem' }}>Kattints egy cellára (sor = kezdőpont, oszlop = végpont).</div>
      <div className="op-row">
        {[['eq', 'Egyenlőség'], ['le', 'Kisebb-egyenlő (≤)'], ['div', 'Oszthatóság (∣)'], ['par', 'Azonos paritás'], ['empty', 'Üres']].map(([k, label]) => (
          <button key={k} className={`op-btn${preset === k ? ' is-active' : ''}`} onClick={() => load(k)}>{label}</button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3rem repeat(4, 2rem)', gridTemplateRows: '1.3rem repeat(4, 2rem)', gap: 3 }}>
          <div />
          {[1, 2, 3, 4].map((c) => <div key={c} style={{ fontSize: '0.7rem', color: '#a78bfa', textAlign: 'center', alignSelf: 'center' }}>{c}</div>)}
          {[1, 2, 3, 4].map((r) => (
            <>
              <div key={`h${r}`} style={{ fontSize: '0.7rem', color: '#a78bfa', textAlign: 'center', alignSelf: 'center' }}>{r}</div>
              {[1, 2, 3, 4].map((c) => (
                <div
                  key={`${r}${c}`}
                  onClick={() => toggle(r, c)}
                  style={{ width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px ${r === c ? 'dashed' : 'solid'} rgba(167,139,250,.2)`, borderRadius: 3, cursor: 'pointer', fontSize: '0.75rem', fontFamily: 'monospace', userSelect: 'none', background: rel[r][c] ? 'rgba(167,139,250,.25)' : 'transparent', color: rel[r][c] ? '#c4b5fd' : 'inherit' }}
                >{rel[r][c] ? '●' : ''}</div>
              ))}
            </>
          ))}
        </div>
        <div style={{ flex: 1, minWidth: 180 }}>
          <span className="lbl">Tulajdonságok:</span>
          <div>
            {checks.map(([label, ok]) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.3rem 0.7rem', borderRadius: 999, fontSize: '0.72rem', fontWeight: 600, border: '1px solid', margin: '0.15rem', background: ok ? 'rgba(52,211,153,.12)' : 'rgba(239,68,68,.10)', borderColor: ok ? 'rgba(52,211,153,.4)' : 'rgba(239,68,68,.3)', color: ok ? '#34d399' : '#ef4444' }}>{ok ? '✓' : '✗'} {label}</span>
            ))}
          </div>
          <div className="lbl" style={{ marginTop: '0.6rem' }}>Reláció:</div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#c4cdd8', lineHeight: 1.7 }}>
            ρ = {'{'} {pairs.join(', ') || '∅'} {'}'}
            {types.length > 0 && <><br /><span style={{ fontSize: '0.7rem', color: '#8892a4' }}>Típus: </span>{types.join(', ')}</>}
          </div>
        </div>
      </div>
      <canvas ref={ref} width={340} height={200} style={{ background: '#0d0e14', marginTop: '0.75rem' }} />
    </div>
  );
}

/* ── Tab 3: transitive closure on {1..5} ── */
const TZ_PRESETS: Record<string, number[][]> = {
  lecture: [[0, 1, 0, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 1, 0, 0, 0]],
  chain: [[0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0]],
  empty: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
};
function mul(A: number[][], B: number[][], n: number) {
  const C = emptyMat(n);
  for (let i = 1; i <= n; i++) for (let k = 1; k <= n; k++) if (A[i][k]) for (let j = 1; j <= n; j++) if (B[k][j]) C[i][j] = 1;
  return C;
}
const relPairs = (R: number[][], n: number) => { const p: string[] = []; for (let i = 1; i <= n; i++) for (let j = 1; j <= n; j++) if (R[i][j]) p.push(`(${i},${j})`); return p; };
function TransClosure() {
  const ref = useRef<HTMLCanvasElement>(null);
  const N = 5;
  const [preset, setPreset] = useState('lecture');
  const [rel, setRel] = useState<number[][]>(() => toMat(TZ_PRESETS.lecture, N));
  const load = (k: string) => { setPreset(k); setRel(toMat(TZ_PRESETS[k], N)); };
  const toggle = (r: number, c: number) => { setPreset(''); setRel((p) => { const m = p.map((row) => [...row]); m[r][c] ^= 1; return m; }); };
  const { r2, r3, rhat } = useMemo(() => {
    const a = rel, b = mul(a, rel, N), c = mul(b, rel, N), d = mul(c, rel, N);
    const h = emptyMat(N);
    [a, b, c, d].forEach((R) => { for (let i = 1; i <= N; i++) for (let j = 1; j <= N; j++) if (R[i][j]) h[i][j] = 1; });
    return { r2: b, r3: c, rhat: h };
  }, [rel]);
  useEffect(() => {
    const ctx = ref.current?.getContext('2d');
    if (ctx) drawGraph(ctx, 340, 200, N, 72, (i, j) => (rel[i][j] ? '#a78bfa' : rhat[i][j] ? '#fbbf24' : null), () => '#a78bfa', () => '#1a1b25');
  }, [rel, rhat]);
  return (
    <div className="info-box">
      <span className="lbl">Interaktív — tranzitív lezárt ({'{'}1..5{'}'})</span>
      <div className="op-row">
        {[['lecture', 'Előadás példa'], ['chain', 'Lánc 1→2→3→4→5'], ['empty', 'Üres']].map(([k, label]) => (
          <button key={k} className={`op-btn${preset === k ? ' is-active' : ''}`} onClick={() => load(k)}>{label}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3rem repeat(5, 1.8rem)', gridTemplateRows: '1.3rem repeat(5, 1.8rem)', gap: 2, marginBottom: '0.6rem' }}>
        <div />
        {[1, 2, 3, 4, 5].map((c) => <div key={c} style={{ fontSize: '0.65rem', color: '#a78bfa', textAlign: 'center', alignSelf: 'center' }}>{c}</div>)}
        {[1, 2, 3, 4, 5].map((r) => (
          <>
            <div key={`h${r}`} style={{ fontSize: '0.65rem', color: '#a78bfa', textAlign: 'center', alignSelf: 'center' }}>{r}</div>
            {[1, 2, 3, 4, 5].map((c) => (
              <div key={`${r}${c}`} onClick={() => toggle(r, c)} style={{ width: '1.8rem', height: '1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px ${r === c ? 'dashed' : 'solid'} rgba(167,139,250,.2)`, borderRadius: 3, cursor: 'pointer', fontSize: '0.7rem', fontFamily: 'monospace', userSelect: 'none', background: rel[r][c] ? 'rgba(167,139,250,.25)' : 'transparent', color: rel[r][c] ? '#c4b5fd' : 'inherit' }}>{rel[r][c] ? '●' : ''}</div>
            ))}
          </>
        ))}
      </div>
      <div style={{ fontSize: '0.8rem', lineHeight: 1.8 }}>
        <div><span style={{ color: '#a78bfa' }}>ρ =</span> <span style={{ color: '#c4cdd8' }}>{`{ ${relPairs(rel, N).join(', ') || '∅'} }`}</span></div>
        <div><span style={{ color: '#34d399' }}>ρ² =</span> <span style={{ color: '#c4cdd8' }}>{`{ ${relPairs(r2, N).join(', ') || '∅'} }`}</span></div>
        <div><span style={{ color: '#f97316' }}>ρ³ =</span> <span style={{ color: '#c4cdd8' }}>{`{ ${relPairs(r3, N).join(', ') || '∅'} }`}</span></div>
        <div style={{ marginTop: '0.3rem' }}><span style={{ color: '#fbbf24', fontWeight: 700 }}>ρ̂ =</span> <span style={{ color: '#e2e8f0' }}>{`{ ${relPairs(rhat, N).join(', ') || '∅'} }`}</span></div>
      </div>
      <canvas ref={ref} width={340} height={200} style={{ background: '#0d0e14', marginTop: '0.6rem' }} />
    </div>
  );
}

/* ── Tab 4: Hasse diagram ── */
const HASSE: Record<string, { nodes: string[]; covers: [number, number][]; info: string; positions: Record<number, [number, number]> }> = {
  custom: { nodes: ['1', '2', '3', '4', '5', '6'], covers: [[5, 3], [5, 4], [3, 1], [3, 2], [6, 5]], info: 'A={1,2,3,4,5,6}. Legkisebb: 6. Maximális: 1, 2, 4. Nincs legnagyobb.', positions: { 1: [0.25, 0.12], 2: [0.5, 0.12], 3: [0.35, 0.38], 4: [0.72, 0.38], 5: [0.5, 0.62], 6: [0.5, 0.88] } },
  div6: { nodes: ['1', '2', '3', '4', '5', '6'], covers: [[1, 2], [1, 3], [1, 5], [2, 4], [2, 6], [3, 6]], info: '(A,∣) oszthatóság {1..6}-on. Legkisebb: 1. Maximális: 4, 5, 6.', positions: { 1: [0.5, 0.88], 2: [0.28, 0.62], 3: [0.55, 0.62], 4: [0.18, 0.38], 5: [0.75, 0.62], 6: [0.55, 0.38] } },
  power: { nodes: ['∅', '{a}', '{b}', '{c}', '{a,b}', '{a,c}', '{b,c}', '{a,b,c}'], covers: [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 4], [2, 6], [3, 5], [3, 6], [4, 7], [5, 7], [6, 7]], info: '(𝒫({a,b,c}),⊆). Legkisebb: ∅. Legnagyobb: {a,b,c}.', positions: { 0: [0.5, 0.92], 1: [0.18, 0.68], 2: [0.5, 0.68], 3: [0.82, 0.68], 4: [0.18, 0.44], 5: [0.5, 0.44], 6: [0.82, 0.44], 7: [0.5, 0.18] } },
};
function Hasse() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [key, setKey] = useState('custom');
  const d = HASSE[key];
  useEffect(() => {
    const cv = ref.current; if (!cv) return; const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height; ctx.clearRect(0, 0, W, H);
    const pos = d.nodes.map((_, i) => { const p = d.positions[i] || [0.5, 0.5]; return { x: p[0] * W, y: p[1] * H, label: d.nodes[i] }; });
    d.covers.forEach(([a, b]) => { const f = pos[a], t = pos[b]; ctx.strokeStyle = '#a78bfa'; ctx.lineWidth = 1.5; ctx.globalAlpha = 0.7; ctx.beginPath(); ctx.moveTo(f.x, f.y); ctx.lineTo(t.x, t.y); ctx.stroke(); ctx.globalAlpha = 1; });
    pos.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 14, 0, 2 * Math.PI); ctx.fillStyle = '#1a1b25'; ctx.fill(); ctx.strokeStyle = '#a78bfa'; ctx.lineWidth = 1.5; ctx.stroke(); ctx.fillStyle = '#e2e8f0'; ctx.font = `bold ${p.label.length > 3 ? 8 : 10}px monospace`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(p.label, p.x, p.y); });
  }, [key, d]);
  return (
    <div className="info-box">
      <span className="lbl">Interaktív — Hasse-diagram</span>
      <div className="op-row">
        {[['custom', 'Előadás példa (6 elem)'], ['div6', 'Oszthatóság {1..6}'], ['power', '𝒫({a,b,c})']].map(([k, label]) => (
          <button key={k} className={`op-btn${key === k ? ' is-active' : ''}`} onClick={() => setKey(k)}>{label}</button>
        ))}
      </div>
      <canvas ref={ref} width={340} height={280} style={{ background: '#0d0e14' }} />
      <div style={{ fontSize: '0.76rem', color: '#8892a4', marginTop: '0.6rem' }}>{d.info}</div>
    </div>
  );
}

/* ── Tab 5: equivalence classes on {1..9} ── */
const EQUIV: Record<string, (i: number, j: number) => boolean> = {
  mod3: (i, j) => ((i - j) % 3 + 3) % 3 === 0,
  parity: (i, j) => i % 2 === j % 2,
  eq: (i, j) => i === j,
  all: () => true,
};
function EquivClasses() {
  const ref = useRef<HTMLCanvasElement>(null);
  const N = 9;
  const [key, setKey] = useState('mod3');
  const { classes, rel } = useMemo(() => {
    const fn = EQUIV[key];
    const r = Array.from({ length: N + 1 }, (_, i) => Array.from({ length: N + 1 }, (_, j) => (fn(i, j) ? 1 : 0)));
    const visited = new Array(N + 1).fill(false); const cls: number[][] = [];
    for (let i = 1; i <= N; i++) if (!visited[i]) { const c: number[] = []; for (let j = 1; j <= N; j++) if (r[i][j]) { c.push(j); visited[j] = true; } cls.push(c); }
    return { classes: cls, rel: r };
  }, [key]);
  const nodeCol = new Array(N + 1).fill('#4a5568');
  classes.forEach((c, ci) => c.forEach((v) => (nodeCol[v] = PALETTE[ci % PALETTE.length])));
  useEffect(() => {
    const cv = ref.current; if (!cv) return; const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height; ctx.clearRect(0, 0, W, H);
    const pts = circle(N, W, H, 75);
    for (let i = 1; i <= N; i++) for (let j = i + 1; j <= N; j++) if (rel[i][j]) { const f = pts[i - 1], t = pts[j - 1]; ctx.strokeStyle = nodeCol[i]; ctx.lineWidth = 1.2; ctx.globalAlpha = 0.45; ctx.beginPath(); ctx.moveTo(f.x, f.y); ctx.lineTo(t.x, t.y); ctx.stroke(); ctx.globalAlpha = 1; }
    pts.forEach((p) => { const col = nodeCol[p.i]; ctx.beginPath(); ctx.arc(p.x, p.y, 12, 0, 2 * Math.PI); ctx.fillStyle = col + '44'; ctx.fill(); ctx.strokeStyle = col; ctx.lineWidth = 1.8; ctx.stroke(); ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(p.i), p.x, p.y); });
  }, [key, rel, nodeCol]);
  return (
    <div className="info-box">
      <span className="lbl">Interaktív — ekvivalenciaosztályok ({'{'}1..9{'}'})</span>
      <div className="op-row">
        {[['mod3', 'Modulo 3'], ['parity', 'Paritás'], ['eq', 'Egyenlőség'], ['all', 'Egy osztály']].map(([k, label]) => (
          <button key={k} className={`op-btn${key === k ? ' is-active' : ''}`} onClick={() => setKey(k)}>{label}</button>
        ))}
      </div>
      <div style={{ minHeight: 50 }}>
        {classes.map((c, i) => {
          const col = PALETTE[i % PALETTE.length];
          return <span key={i} style={{ display: 'inline-block', margin: '0.2rem', padding: '0.2rem 0.6rem', borderRadius: 999, background: col + '22', border: `1px solid ${col}44`, color: col, fontSize: '0.78rem', fontFamily: 'monospace' }}>[{c[0]}] = {'{'}{c.join(',')}{'}'}</span>;
        })}
        <div style={{ fontSize: '0.76rem', color: '#6b7280', marginTop: '0.3rem' }}>{classes.length} osztály</div>
      </div>
      <canvas ref={ref} width={340} height={200} style={{ background: '#0d0e14', marginTop: '0.6rem' }} />
    </div>
  );
}

/* ── Tab 6: property graph demo ── */
const EX_PROPS: Record<string, { label: string; desc: string; edges: [number, number][]; hl: (i: number, j: number) => boolean; col: string; note: string }> = {
  ref: { label: 'Reflexív reláció', desc: 'Minden csúcson hurokél van: ∀a: (a,a)∈ρ. Pl. egyenlőség (=), ≤, oszthatóság ℕ-n.', edges: [[1, 1], [2, 2], [3, 3], [4, 4], [1, 2], [2, 3]], hl: (i, j) => i === j, col: '#a78bfa', note: 'A kék élek = hurokélek (reflexivitás).' },
  sym: { label: 'Szimmetrikus reláció', desc: 'Ha (a,b)∈ρ, akkor (b,a)∈ρ is. Pl. párhuzamosság (∥), "testvér", egyenlőség.', edges: [[1, 2], [2, 1], [2, 3], [3, 2], [3, 4], [4, 3]], hl: () => false, col: '#34d399', note: 'Minden él párban jelenik meg (oda-vissza nyilak).' },
  anti: { label: 'Antiszimmetrikus reláció', desc: 'Különböző elemek között legfeljebb egyirányú él lehet. Pl. ≤, oszthatóság ℕ-n.', edges: [[1, 1], [2, 2], [3, 3], [4, 4], [1, 2], [1, 3], [2, 4], [3, 4]], hl: () => false, col: '#f97316', note: 'Hurokélek megengedettek. Nincs A→B és B→A egyszerre különböző csúcsoknál.' },
  trans: { label: 'Tranzitív reláció', desc: 'Ha (a,b)∈ρ és (b,c)∈ρ, akkor (a,c)∈ρ. A 2-hosszú sétákhoz mindig van "shortcut" él.', edges: [[1, 2], [2, 3], [1, 3], [2, 4], [1, 4]], hl: (i, j) => (i === 1 && j === 3) || (i === 2 && j === 4) || (i === 1 && j === 4), col: '#22d3ee', note: 'Citromsárga = shortcut élek (a tranzitivitás megköveteli).' },
  poset: { label: 'Részbenrendezés (reflexív + antiszimm. + tranzitív)', desc: 'Pl. (ℕ,∣) oszthatóság. Gráfjában: hurokélek, egyirányú élek, és minden sétához van shortcut.', edges: [[1, 1], [2, 2], [3, 3], [4, 4], [1, 2], [1, 3], [2, 4], [3, 4], [1, 4]], hl: (i, j) => i === 1 && j === 4, col: '#fbbf24', note: 'Aciklikus (nincs 2+ hosszú kör), hurokélek + tranzitív élek.' },
};
function PropertyGraph() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [key, setKey] = useState('ref');
  const p = EX_PROPS[key];
  useEffect(() => {
    const cv = ref.current; if (!cv) return; const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height; ctx.clearRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2 - 10, R = 85; const pts: { x: number; y: number; i: number }[] = [];
    for (let i = 1; i <= 4; i++) { const a = (2 * Math.PI * (i - 1) / 4) - Math.PI / 2; pts.push({ x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), i }); }
    p.edges.forEach(([si, di]) => {
      const isHL = p.hl(si, di), c = isHL ? '#fbbf24' : p.col, f = pts[si - 1], t = pts[di - 1];
      ctx.globalAlpha = isHL ? 0.95 : 0.75; ctx.strokeStyle = c; ctx.lineWidth = isHL ? 2.2 : 1.8; ctx.beginPath();
      if (si === di) ctx.arc(f.x, f.y - 22, 11, 0, 2 * Math.PI);
      else { const mx = (f.x + t.x) / 2, my = (f.y + t.y) / 2, dx = t.x - f.x, dy = t.y - f.y, cpx = mx - dy * 0.22, cpy = my + dx * 0.22; ctx.moveTo(f.x, f.y); ctx.quadraticCurveTo(cpx, cpy, t.x, t.y); ahd(ctx, cpx + (t.x - cpx) * 0.85, cpy + (t.y - cpy) * 0.85, t.x, t.y, c); }
      ctx.stroke(); ctx.globalAlpha = 1;
    });
    pts.forEach((pt) => { ctx.beginPath(); ctx.arc(pt.x, pt.y, 13, 0, 2 * Math.PI); ctx.fillStyle = '#1a1b25'; ctx.fill(); ctx.strokeStyle = p.col; ctx.lineWidth = 1.8; ctx.stroke(); ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 12px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(pt.i), pt.x, pt.y); });
    ctx.fillStyle = '#6b7280'; ctx.font = '10px sans-serif'; ctx.textAlign = 'left'; ctx.fillText(p.note, 8, H - 8);
  }, [key, p]);
  return (
    <div className="info-box">
      <span className="lbl">Interaktív — tulajdonságok a gráfon ({'{'}1,2,3,4{'}'})</span>
      <div className="op-row">
        {[['ref', 'Reflexív'], ['sym', 'Szimmetrikus'], ['anti', 'Antiszimm.'], ['trans', 'Tranzitív'], ['poset', 'Részbenrendezés']].map(([k, label]) => (
          <button key={k} className={`op-btn${key === k ? ' is-active' : ''}`} onClick={() => setKey(k)}>{label}</button>
        ))}
      </div>
      <canvas ref={ref} width={360} height={260} style={{ background: '#0d0e14' }} />
      <div style={{ fontSize: '0.78rem', color: '#c4cdd8', marginTop: '0.6rem' }}>{p.desc}</div>
    </div>
  );
}

/* ── static content ── */
const t1a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — Reláció</div><div class="box-body">Az \(A\)-n definiált <strong style="color:#a78bfa">reláció</strong> az \(A \times A\) Descartes-szorzat egy részhalmaza. Ha \(\rho \subseteq A \times A\) és \((a,b)\in\rho\), ezt \(a\,\rho\,b\) jelöléssel is írjuk.</div></div>
<div class="def-box"><div class="lbl mb-2">Irányított gráf \(G=(A,\rho)\)</div><div class="box-body">Pontok = \(A\) elemei; élek = \(\rho\) párjai. \((a,a)\) él = <strong style="color:#a78bfa">hurokél</strong>.<br><strong>Séta:</strong> élek sorozata; <span style="color:#f97316">nyitott</span> ha kezdő ≠ vég, <span style="color:#22d3ee">zárt</span> ha kezdő = vég. <strong>Út:</strong> séta különböző közbülső pontokkal. <strong>Kör:</strong> zárt út.</div></div>`;
const t1b = String.raw`
<div class="info-box"><div class="lbl mb-2">11 példa relációra</div><div class="box-body" style="font-size:.78rem">\(A=\mathbb{R}\), \(X\)=egyenesek, \(Y\)=lakók:<br>\(\rho_1: a=b\) · \(\rho_2: a\le b\) · \(\rho_3: a<b\) · \(\rho_4: |a-b|\le 1\) · \(\rho_5: m\mid n\ (\mathbb{Z})\) · \(\rho_6: m\mid n\ (\mathbb{N})\) · \(\rho_7: e\perp f\) · \(\rho_8: e\parallel f\) · \(\rho_9:\) testvérek · \(\rho_{10}:\) gyermeke · \(\rho_{11}:\) azonos településen laknak.</div></div>`;
const t2a = String.raw`
<div class="def-box"><div class="lbl mb-2">5 alapvető tulajdonság</div><div class="box-body"><ul style="margin:.2rem 0 0 1rem;padding:0;line-height:2"><li><strong style="color:#a78bfa">Reflexív:</strong> \(\forall a:(a,a)\in\rho\)</li><li><strong style="color:#34d399">Szimmetrikus:</strong> \((a,b)\in\rho \Rightarrow (b,a)\in\rho\)</li><li><strong style="color:#f97316">Antiszimmetrikus:</strong> \((a,b),(b,a)\in\rho \Rightarrow a=b\)</li><li><strong style="color:#22d3ee">Tranzitív:</strong> \((a,b),(b,c)\in\rho \Rightarrow (a,c)\in\rho\)</li><li><strong style="color:#f472b6">Dichotom:</strong> \(\forall a,b:(a,b)\in\rho\) vagy \((b,a)\in\rho\)</li></ul></div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Gráfos jellemzés</div><div class="box-body"><ul style="margin:.2rem 0 0 1rem;padding:0;line-height:2.1"><li>reflexív ↔ minden pontban hurokél</li><li>szimmetrikus ↔ minden élhez fordított él</li><li>antiszimmetrikus ↔ különböző pontok közt legfeljebb egy irány</li><li>tranzitív ↔ 2-hosszú sétához közvetlen él</li><li>dichotom ↔ bármely két pont közt legalább egy irány</li></ul></div></div>`;
const t3a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — \(\rho^n\) és tranzitív lezárás</div><div class="box-body">\((a,b)\in\rho^n\) ↔ van \(n\) hosszú séta \(a\)-ból \(b\)-be. \[\hat\rho = \bigcup_{n=1}^{\infty}\rho^n\]</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — tranzitív lezárt</div><div class="box-body"><ol style="margin:.2rem 0 0 1.1rem;padding:0;line-height:2.1"><li>\((a,b)\in\hat\rho\) ↔ van séta \(a\to b\)</li><li>\(\hat\rho\) tranzitív</li><li>a legszűkebb \(\rho\)-t tartalmazó tranzitív reláció</li></ol></div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Példa</div><div class="box-body">\(\rho = \{(1,2),(2,4),(4,3),(5,2)\}\). \(\rho^2 = \{(1,4),(2,3),(5,4)\}\), \(\rho^3 = \{(1,3),(5,3)\}\), \(\rho^4 = \emptyset\). \(\hat\rho = \rho\cup\rho^2\cup\rho^3\).</div></div>`;
const t4a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — Részbenrendezés</div><div class="box-body"><strong style="color:#a78bfa">Részbenrendezés</strong>: reflexív + antiszimmetrikus + tranzitív. Jelölés \(a\preceq b\). Példák: \((\mathbb{R},\le)\), \((\mathbb{N},\mid)\), \((\mathcal{P}(A),\subseteq)\).</div></div>
<div class="def-box"><div class="lbl mb-2">Fedés, Hasse-diagram, Max/Min</div><div class="box-body"><strong>b fedi a-t</strong>: \(a\prec b\), nincs \(c\): \(a\prec c\prec b\). A <strong style="color:#a78bfa">Hasse-diagram</strong> a fedési élek rajza. <span style="color:#f97316">maximális/minimális</span>: nincs nála nagyobb/kisebb. <span style="color:#22d3ee">legnagyobb/legkisebb</span>: minden elemnél nagyobb/kisebb.</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tételek</div><div class="box-body"><ol style="margin:0 0 0 1.1rem;padding:0;line-height:2.1"><li>legfeljebb egy legnagyobb és egy legkisebb elem</li><li>véges poset-ben van maximális és minimális elem</li><li>minden véges részbenrendezés kiterjeszthető rendezéssé</li></ol> <strong style="color:#a78bfa">Rendezés</strong>: dichotom részbenrendezés.</div></div>`;
const t5a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — Ekvivalenciareláció</div><div class="box-body"><strong style="color:#a78bfa">Ekvivalenciareláció</strong>: reflexív + szimmetrikus + tranzitív. Példák: \(=\), \(\parallel\), modulo 3, leképezés magja \(\varphi(a_1)=\varphi(a_2)\).</div></div>
<div class="def-box"><div class="lbl mb-2">Ekvivalenciaosztály, partíció</div><div class="box-body">\([a] = \{b : a \sim b\}\). <strong>Tétel:</strong> \(a\in[a]\), és \([a_1]=[a_2]\) vagy \([a_1]\cap[a_2]=\emptyset\). Az osztályok az alaphalmaz egy <strong style="color:#a78bfa">partícióját</strong> alkotják.</div></div>`;
const t6a = String.raw`
<div class="def-box"><div class="lbl mb-2">Tulajdonságok gráf-képe</div><div class="box-body"><strong style="color:#a78bfa">Reflexív</strong>: hurokél minden csúcson. <strong style="color:#34d399">Szimmetrikus</strong>: kétirányú nyilak. <strong style="color:#f97316">Antiszimm.</strong>: legfeljebb egyirányú él különböző csúcsok közt. <strong style="color:#22d3ee">Tranzitív</strong>: 2-hosszú sétához shortcut él.</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tranzitivitás és hurokélek</div><div class="box-body">Ha \(\rho\) tranzitív és \((a,b),(b,a)\in\rho\), akkor \((a,a)\in\rho\). Antiszimmetria mellett ez csak \(a=b\)-re lehet — ezért a részbenrendezés gráfjában nincsenek 2-hosszú körök, csak hurokélek.</div></div>`;

const TABS: Tab[] = [
  { id: 're', label: 'Relációk', content: <Cols><RichTex html={t1a} /><RichTex html={t1b} /></Cols> },
  { id: 'tu', label: 'Tulajdonságok', content: <Cols variant="7-5"><RichTex html={t2a} /><RelMatrix /></Cols> },
  { id: 'tz', label: 'Tranzitív lezárás', content: <Cols variant="7-5"><RichTex html={t3a} /><TransClosure /></Cols> },
  { id: 'rn', label: 'Rendezések', content: <Cols variant="7-5"><RichTex html={t4a} /><Hasse /></Cols> },
  { id: 'ek', label: 'Ekvivalenciák', content: <Cols variant="7-5"><RichTex html={t5a} /><EquivClasses /></Cols> },
  { id: 'ex', label: 'Előadás+', content: <Cols variant="7-5"><RichTex html={t6a} /><PropertyGraph /></Cols> },
];

export default function Ch4() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">ILA — 4. fejezet</p>
      <h1 className="ila__title">Relációk</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2025</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
