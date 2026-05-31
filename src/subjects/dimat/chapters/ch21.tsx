import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* ════════════════════════════════════════════════
   Graph & eigenvalue utilities
════════════════════════════════════════════════ */
const ACC = '#38bdf8';

const GRAPH_PRESETS: Record<string, { n: number; edges: [number, number][]; label: string }> = {
  k4:   { n: 4,  edges: [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]], label: 'K₄' },
  c4:   { n: 4,  edges: [[0,1],[1,2],[2,3],[3,0]], label: 'C₄' },
  c5:   { n: 5,  edges: [[0,1],[1,2],[2,3],[3,4],[4,0]], label: 'C₅' },
  c6:   { n: 6,  edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]], label: 'C₆' },
  path4:{ n: 4,  edges: [[0,1],[1,2],[2,3]], label: 'P₄' },
  k33:  { n: 6,  edges: [[0,3],[0,4],[0,5],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]], label: 'K₃,₃' },
  star5:{ n: 5,  edges: [[0,1],[0,2],[0,3],[0,4]], label: 'K₁,₄' },
  pet:  { n: 10, edges: [[0,1],[1,2],[2,3],[3,4],[4,0],[0,5],[1,6],[2,7],[3,8],[4,9],[5,7],[7,9],[9,6],[6,8],[8,5]], label: 'Petersen' },
  cube: { n: 8,  edges: [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]], label: 'Q₃' },
};

function buildAdj(g: typeof GRAPH_PRESETS[string]): number[][] {
  const A: number[][] = Array.from({ length: g.n }, () => new Array(g.n).fill(0));
  g.edges.forEach(([u, v]) => { A[u][v] = 1; A[v][u] = 1; });
  return A;
}

/** Jacobi eigenvalue method for small symmetric matrices. Returns eigenvalues sorted descending. */
function eigenvalues(A: number[][], n: number): number[] {
  let M = A.map(r => [...r]);
  for (let iter = 0; iter < 100; iter++) {
    let p = -1, q = -1, mx = 0;
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
      if (Math.abs(M[i][j]) > mx) { mx = Math.abs(M[i][j]); p = i; q = j; }
    }
    if (mx < 1e-10) break;
    const theta = (M[q][q] - M[p][p]) / (2 * M[p][q]);
    const t = Math.sign(theta) / (Math.abs(theta) + Math.sqrt(1 + theta * theta));
    const c = 1 / Math.sqrt(1 + t * t), s = t * c;
    const newM = M.map(r => [...r]);
    for (let i = 0; i < n; i++) {
      newM[i][p] = c * M[i][p] - s * M[i][q];
      newM[i][q] = s * M[i][p] + c * M[i][q];
    }
    for (let i = 0; i < n; i++) {
      newM[p][i] = c * M[p][i] - s * M[q][i];
      newM[q][i] = s * M[p][i] + c * M[q][i];
    }
    newM[p][p] = c * c * M[p][p] - 2 * s * c * M[p][q] + s * s * M[q][q];
    newM[q][q] = s * s * M[p][p] + 2 * s * c * M[p][q] + c * c * M[q][q];
    newM[p][q] = 0; newM[q][p] = 0;
    M = newM;
  }
  return M.map((r, i) => r[i]).sort((a, b) => b - a);
}

function fmt(x: number): string { return (Math.round(x * 1000) / 1000).toString(); }

function charPolyText(eigs: number[]): string {
  let c: number[] = [1];
  eigs.forEach(e => {
    const nc = new Array(c.length + 1).fill(0);
    for (let i = 0; i < c.length; i++) { nc[i] += c[i]; nc[i + 1] -= e * c[i]; }
    c = nc;
  });
  let poly = String.raw`p_G(\lambda)=`;
  c.forEach((coef, i) => {
    const pw = c.length - 1 - i;
    const r = Math.round(coef * 10) / 10;
    if (Math.abs(r) < 0.01) return;
    const sign = (r > 0 && i > 0) ? '+' : '';
    const term = pw === 0 ? String(r) : pw === 1 ? `${r === 1 ? '' : r}\\lambda` : `${r === 1 ? '' : r}\\lambda^{${pw}}`;
    poly += `${sign}${term}`;
  });
  return String.raw`\[` + poly + String.raw`\]`;
}

const EIG_COLS = ['#38bdf8','#34d399','#f97316','#a78bfa','#fb7185','#fbbf24','#e879f9'];

function eigChipsHtml(eigs: number[]): string {
  return eigs.map((e, i) => {
    const col = EIG_COLS[i % EIG_COLS.length];
    return `<span style="display:inline-block;padding:.1rem .4rem;border-radius:.25rem;font-size:.68rem;font-weight:700;margin:.1rem;background:${col}22;color:${col};border:1px solid ${col}55">${fmt(e)}</span>`;
  }).join('');
}

function circlePos(n: number, W: number, H: number, R: number): { x: number; y: number }[] {
  return Array.from({ length: n }, (_, i) => ({
    x: W / 2 + R * Math.cos((2 * Math.PI / n) * i - Math.PI / 2),
    y: H / 2 + R * Math.sin((2 * Math.PI / n) * i - Math.PI / 2),
  }));
}

function bipartitePos(g: typeof GRAPH_PRESETS[string], W: number, H: number): { x: number; y: number }[] {
  const pos: { x: number; y: number }[] = new Array(g.n);
  const color: number[] = new Array(g.n).fill(-1);
  const adj: number[][] = Array.from({ length: g.n }, () => []);
  g.edges.forEach(([u, v]) => { adj[u].push(v); adj[v].push(u); });
  function bfs(start: number) {
    color[start] = 0; const q = [start];
    while (q.length) {
      const u = q.shift()!;
      for (const v of adj[u]) { if (color[v] === -1) { color[v] = 1 - color[u]; q.push(v); } }
    }
  }
  for (let i = 0; i < g.n; i++) if (color[i] === -1) bfs(i);
  const left = color.map((c, i) => c === 0 ? i : -1).filter(i => i >= 0);
  const right = color.map((c, i) => c === 1 ? i : -1).filter(i => i >= 0);
  left.forEach((id, k) => { pos[id] = { x: W * 0.28, y: H * 0.1 + (H * 0.8 / ((left.length - 1) || 1)) * k }; });
  right.forEach((id, k) => { pos[id] = { x: W * 0.72, y: H * 0.1 + (H * 0.8 / ((right.length - 1) || 1)) * k }; });
  return pos;
}

function isBipartite(g: typeof GRAPH_PRESETS[string]): { bip: boolean; color: number[] } {
  const color: number[] = new Array(g.n).fill(-1);
  const adj: number[][] = Array.from({ length: g.n }, () => []);
  g.edges.forEach(([u, v]) => { adj[u].push(v); adj[v].push(u); });
  for (let s = 0; s < g.n; s++) {
    if (color[s] !== -1) continue;
    color[s] = 0; const q = [s];
    while (q.length) {
      const u = q.shift()!;
      for (const v of adj[u]) {
        if (color[v] === -1) { color[v] = 1 - color[u]; q.push(v); }
        else if (color[v] === color[u]) return { bip: false, color };
      }
    }
  }
  return { bip: true, color };
}

function complement(g: typeof GRAPH_PRESETS[string]): typeof GRAPH_PRESETS[string] {
  const edges: [number, number][] = [];
  for (let i = 0; i < g.n; i++) for (let j = i + 1; j < g.n; j++) {
    if (!g.edges.find(([u, v]) => (u === i && v === j) || (u === j && v === i))) edges.push([i, j]);
  }
  return { n: g.n, edges, label: `Ḡ (${g.label})` };
}

/* ════════════════════════════════════════════════
   Canvas draw helpers
════════════════════════════════════════════════ */
function drawGraph(
  ctx: CanvasRenderingContext2D, W: number, H: number,
  g: typeof GRAPH_PRESETS[string],
  pos: { x: number; y: number }[],
  nodeColors: (string | null)[] | null,
  highlightEdges: [number, number][] | null,
) {
  ctx.clearRect(0, 0, W, H);
  g.edges.forEach(([u, v]) => {
    const hl = highlightEdges?.some(([a, b]) => (a === u && b === v) || (a === v && b === u));
    ctx.beginPath(); ctx.moveTo(pos[u].x, pos[u].y); ctx.lineTo(pos[v].x, pos[v].y);
    ctx.strokeStyle = hl ? '#fbbf24' : '#2a3a4a'; ctx.lineWidth = hl ? 2.5 : 1; ctx.stroke();
  });
  pos.forEach((p, i) => {
    const col = (nodeColors && nodeColors[i]) || ACC;
    ctx.beginPath(); ctx.arc(p.x, p.y, 11, 0, Math.PI * 2);
    ctx.fillStyle = col; ctx.fill(); ctx.strokeStyle = '#0e1014'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#000'; ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(String(i + 1), p.x, p.y);
  });
}

/* ════════════════════════════════════════════════
   Tab 1: Szomszédsági mátrix
════════════════════════════════════════════════ */
function AdjTab() {
  const [gKey, setGKey] = useState<keyof typeof GRAPH_PRESETS>('k4');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const g = GRAPH_PRESETS[gKey];
  const A = buildAdj(g);
  const eigs = eigenvalues(A, g.n);
  const trace1 = eigs.reduce((s, x) => s + x, 0);
  const trace2 = eigs.reduce((s, x) => s + x * x, 0);

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    const pos = circlePos(g.n, W, H, Math.min(W, H) * 0.35);
    drawGraph(ctx, W, H, g, pos, null, null);
  }, [gKey, g]);

  const matHtml = (() => {
    let h = `<div style="display:grid;grid-template-columns:repeat(${g.n},28px);gap:2px;margin:.4rem 0">`;
    for (let i = 0; i < g.n; i++) for (let j = 0; j < g.n; j++) {
      const v = A[i][j];
      const bg = v ? '#0a1f2e' : '#111827';
      const col = v ? ACC : '#4b5563';
      h += `<div style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;border-radius:3px;background:${bg};color:${col}">${v}</div>`;
    }
    return h + '</div>';
  })();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Gráf kiválasztása</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {(['k4','c5','pet','path4','k33','star5'] as const).map(k => (
              <button key={k} className={`op-btn${gKey === k ? ' is-active' : ''}`} onClick={() => setGKey(k)}>
                {GRAPH_PRESETS[k].label}
              </button>
            ))}
          </div>
          <span className="lbl" style={{ color: ACC }}>Szomszédsági mátrix A</span>
          <div style={{ overflowX: 'auto' }}><RichTex key={gKey + 'mat'} html={matHtml} /></div>
          <span className="lbl" style={{ color: ACC, marginTop: '.5rem' }}>Karakterisztikus polinom</span>
          <RichTex key={gKey + 'poly'} html={String.raw`<div class="formula-chip">${charPolyText(eigs)}</div>`} />
          <span className="lbl" style={{ color: ACC }}>Spektrum σ(G)</span>
          <RichTex key={gKey + 'eigs'} html={eigChipsHtml(eigs)} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', marginTop: '.4rem' }}>
            {[
              { v: fmt(eigs[0]), l: 'λ₁ (max)' },
              { v: fmt(eigs[g.n - 1]), l: 'λₙ (min)' },
              { v: fmt(trace1), l: 'Σλᵢ = 0' },
              { v: `${fmt(trace2)} / ${2 * g.edges.length}`, l: 'Σλᵢ² = 2|E|' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: ACC, fontVariantNumeric: 'tabular-nums', wordBreak: 'break-all' }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
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
   Tab 2: Spektrum vizualizáció
════════════════════════════════════════════════ */
function SpecTab() {
  const [gKey, setGKey] = useState<keyof typeof GRAPH_PRESETS>('k4');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const g = GRAPH_PRESETS[gKey];
  const A = buildAdj(g);
  const eigs = eigenvalues(A, g.n);
  const sym = eigs.every(l => eigs.some(l2 => Math.abs(l + l2) < 0.01));

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    ctx.clearRect(0, 0, W, H);
    // graph in upper portion
    const pos = circlePos(g.n, W, H * 0.5, Math.min(W, H * 0.5) * 0.38);
    pos.forEach(p => { p.y += H * 0.05; });
    drawGraph(ctx, W, H, g, pos, null, null);
    // number line in lower portion
    const margin = 60, lineY = H * 0.78;
    if (!eigs.length) return;
    const mn = Math.min(...eigs) - 1, mx2 = Math.max(...eigs) + 1;
    const toX = (v: number) => margin + (v - mn) / (mx2 - mn) * (W - 2 * margin);
    ctx.beginPath(); ctx.moveTo(margin, lineY); ctx.lineTo(W - margin, lineY);
    ctx.strokeStyle = '#334155'; ctx.lineWidth = 2; ctx.stroke();
    const zx = toX(0);
    ctx.beginPath(); ctx.moveTo(zx, lineY - 12); ctx.lineTo(zx, lineY + 12);
    ctx.strokeStyle = '#8b949e'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = '#8b949e'; ctx.font = '10px monospace'; ctx.textAlign = 'center'; ctx.fillText('0', zx, lineY + 22);
    eigs.forEach((e, i) => {
      const ex = toX(e);
      const col = EIG_COLS[i % EIG_COLS.length];
      ctx.beginPath(); ctx.arc(ex, lineY, 8, 0, Math.PI * 2);
      ctx.fillStyle = col; ctx.fill(); ctx.strokeStyle = '#0e1014'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = col; ctx.font = 'bold 9px monospace'; ctx.textAlign = 'center';
      ctx.fillText(fmt(e), ex, lineY - (i % 2 === 0 ? 20 : 34));
    });
    ctx.fillStyle = '#8b949e'; ctx.font = '11px monospace'; ctx.textAlign = 'center';
    ctx.fillText(`Σλᵢ = ${fmt(eigs.reduce((s, x) => s + x, 0))}   Σλᵢ² = ${fmt(eigs.reduce((s, x) => s + x * x, 0))}`, W / 2, H - 18);
  }, [gKey, g, eigs]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Gráf</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {(['k4','c6','pet','cube','k33'] as const).map(k => (
              <button key={k} className={`op-btn${gKey === k ? ' is-active' : ''}`} onClick={() => setGKey(k)}>
                {GRAPH_PRESETS[k].label}
              </button>
            ))}
          </div>
          <div className="def-box" style={{ fontSize: '.68rem' }}>
            A Canvas a sajátértékeket a számegyenesen mutatja. Az összes sajátérték összege 0 (nyom = 0), négyzetösszege = 2|E|.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', margin: '.4rem 0' }}>
            {[
              { v: g.n, l: 'n' },
              { v: g.edges.length, l: '|E|' },
              { v: fmt(eigs[0]), l: 'λ₁' },
              { v: fmt(eigs[g.n - 1]), l: 'λₙ' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: ACC }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="def-box" style={{ fontSize: '.68rem' }}>
            {g.label}: {sym ? 'Szimmetrikus spektrum (kétpólusú)' : 'Nem szimmetrikus spektrum'}.
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
   Tab 3: Reguláris gráfok
════════════════════════════════════════════════ */
function RegTab() {
  const [gKey, setGKey] = useState<keyof typeof GRAPH_PRESETS>('k4');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const g = GRAPH_PRESETS[gKey];
  const A = buildAdj(g);
  const eigs = eigenvalues(A, g.n);
  const k = A[0].reduce((s, x) => s + x, 0);
  const sym = eigs.every(l => eigs.some(l2 => Math.abs(l + l2) < 0.01));
  const ok = Math.abs(eigs[0] - k) < 0.01;

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const A2 = buildAdj(g);
    const pos = circlePos(g.n, W, H, Math.min(W, H) * 0.38);
    const nodeColors = pos.map((_, i) => {
      const deg = A2[i].reduce((s, x) => s + x, 0);
      return deg === k ? ACC : '#fb7185';
    });
    drawGraph(ctx, W, H, g, pos, nodeColors, null);
    ctx.fillStyle = ACC; ctx.font = 'bold 13px monospace'; ctx.textAlign = 'center';
    ctx.fillText(`${k}-reguláris | λ₁ = ${k}`, W / 2, H - 20);
  }, [gKey, g, k]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-2">13.4. Tétel (reguláris gráf spektruma)</div><div class="box-body">
Ha \(G\) <strong>\(k\)-reguláris</strong>, akkor:<br>
&bull; \(\lambda_1 = k\) (maximális sajátérték)<br>
&bull; \(\mathbf{1}=(1,\ldots,1)^T\) sajátvektor \(\lambda_1=k\)-hoz<br>
&bull; \(\sum_i \lambda_i = 0\) (nyom=0)<br>
&bull; \(-k \le \lambda_i \le k\) minden \(i\)-re<br>
&bull; Ha \(G\) összefüggő: \(\lambda_1=k\) egyszerű sajátérték.
</div></div>
<div class="thm-box"><div class="box-body">\[\lambda_1=k,\quad |\lambda_i|\le k,\quad \sum_i\lambda_i=0\]</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Példák</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {([['k4','K₄ (3-reg)'],['c6','C₆ (2-reg)'],['pet','Petersen (3-reg)'],['cube','Q₃ (3-reg)'],['k33','K₃,₃ (3-reg)']] as const).map(([kk, lbl]) => (
              <button key={kk} className={`op-btn${gKey === kk ? ' is-active' : ''}`} onClick={() => setGKey(kk)}>{lbl}</button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', margin: '.3rem 0' }}>
            {[
              { v: k, l: 'k-reguláris' },
              { v: fmt(eigs[0]), l: 'λ₁' },
              { v: fmt(eigs[g.n - 1]), l: 'λₙ' },
              { v: sym ? 'Igen' : 'Nem', l: 'Szimm?' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: ACC }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="def-box" style={{ fontSize: '.68rem' }}>
            {ok ? `λ₁ = ${fmt(eigs[0])} = k = ${k}. A tétel teljesül.` : `Figyelem: λ₁ ≠ k — nem reguláris gráf?`}
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
   Tab 4: Kétpólusú — Lovász–Pelikán
════════════════════════════════════════════════ */
function BipTab() {
  const [gKey, setGKey] = useState<keyof typeof GRAPH_PRESETS>('k33');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const g = GRAPH_PRESETS[gKey];
  const A = buildAdj(g);
  const eigs = eigenvalues(A, g.n);
  const sym = eigs.every(l => eigs.some(l2 => Math.abs(l + l2) < 0.01));
  const { bip, color } = isBipartite(g);

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    ctx.clearRect(0, 0, W, H);
    let pos: { x: number; y: number }[];
    if (bip) {
      pos = bipartitePos(g, W, H);
      ctx.beginPath(); ctx.moveTo(W / 2, H * 0.05); ctx.lineTo(W / 2, H * 0.95);
      ctx.strokeStyle = '#21262d'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]); ctx.stroke(); ctx.setLineDash([]);
    } else {
      pos = circlePos(g.n, W, H, Math.min(W, H) * 0.38);
    }
    const nodeColors = color.map(c => c === 0 ? ACC : '#34d399');
    drawGraph(ctx, W, H, g, pos, nodeColors, null);
    ctx.fillStyle = bip ? '#34d399' : '#fb7185'; ctx.font = 'bold 13px monospace'; ctx.textAlign = 'center';
    ctx.fillText(bip ? 'Kétpólusú gráf — szimmetrikus spektrum' : 'Nem kétpólusú — aszimmetrikus spektrum', W / 2, H - 20);
  }, [gKey, g, bip, color]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-2">13.8–13.9. Tétel (Lovász–Pelikán)</div><div class="box-body">
\(G\) kétpólusú \(\Longleftrightarrow\) \(\sigma(G)\) szimmetrikus 0-ra, azaz:<br>
\(\lambda \in \sigma(G) \Rightarrow -\lambda \in \sigma(G)\) (azonos multiplicitással).
</div></div>
<div class="thm-box"><div class="box-body">\[G\text{ kétpólusú}\iff p_G(\lambda)=\lambda^n p_G(-1/\lambda)\cdot(-1)^n\]</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Példák</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {([['k33','K₃,₃ (bip)'],['c6','C₆ (bip)'],['c4','C₄ (bip)'],['k4','K₄ (nem bip)'],['c5','C₅ (nem bip)']] as const).map(([kk, lbl]) => (
              <button key={kk} className={`op-btn${gKey === kk ? ' is-active' : ''}`} onClick={() => setGKey(kk)}>{lbl}</button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', margin: '.3rem 0' }}>
            {[
              { v: sym ? 'Igen' : 'Nem', l: 'Szimm?' },
              { v: bip ? 'Igen' : 'Nem', l: 'Kétpólusú?' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: ACC }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
            ))}
          </div>
          <RichTex key={gKey + 'bipeigs'} html={eigChipsHtml(eigs)} />
          <div className="def-box" style={{ fontSize: '.68rem', marginTop: '.4rem' }}>
            {bip === sym
              ? `Lovász–Pelikán teljesül: ${bip ? 'kétpólusú ↔ szimm. spektrum' : 'nem kétpólusú ↔ aszimm. spektrum'}.`
              : 'Ellentmondás — ellenőrizd az adatot!'}
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
   Tab 5: Komplementer spektrum
════════════════════════════════════════════════ */
function CompTab() {
  const [gKey, setGKey] = useState<keyof typeof GRAPH_PRESETS>('k4');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const g = GRAPH_PRESETS[gKey];
  const cg = complement(g);
  const A = buildAdj(g);
  const Ac = buildAdj(cg);
  const eigs = eigenvalues(A, g.n);
  const eigsc = eigenvalues(Ac, cg.n);
  const kk = A[0].reduce((s, x) => s + x, 0);
  const ck = Ac[0].reduce((s, x) => s + x, 0);
  const checkOk = eigs.slice(1).every((_, i) => Math.abs(eigsc[i + 1] - (-1 - eigs[i + 1])) < 0.05);

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.offsetWidth || cv.width; cv.width = W; cv.height = cv.offsetHeight || 340;
    const H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const posG = circlePos(g.n, W * 0.28, H / 2, Math.min(W * 0.22, H * 0.38));
    posG.forEach(p => { p.x += W * 0.04; });
    const posCG = circlePos(cg.n, W * 0.28, H / 2, Math.min(W * 0.22, H * 0.38));
    posCG.forEach(p => { p.x += W * 0.52; });
    ctx.beginPath(); ctx.moveTo(W / 2, H * 0.05); ctx.lineTo(W / 2, H * 0.95);
    ctx.strokeStyle = '#21262d'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]); ctx.stroke(); ctx.setLineDash([]);
    g.edges.forEach(([u, v]) => {
      ctx.beginPath(); ctx.moveTo(posG[u].x, posG[u].y); ctx.lineTo(posG[v].x, posG[v].y);
      ctx.strokeStyle = ACC; ctx.lineWidth = 1.5; ctx.stroke();
    });
    posG.forEach((p, i) => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 9, 0, Math.PI * 2);
      ctx.fillStyle = ACC; ctx.fill(); ctx.strokeStyle = '#0e1014'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#000'; ctx.font = 'bold 8px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(i + 1), p.x, p.y);
    });
    cg.edges.forEach(([u, v]) => {
      ctx.beginPath(); ctx.moveTo(posCG[u].x, posCG[u].y); ctx.lineTo(posCG[v].x, posCG[v].y);
      ctx.strokeStyle = '#f97316'; ctx.lineWidth = 1.5; ctx.stroke();
    });
    posCG.forEach((p, i) => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 9, 0, Math.PI * 2);
      ctx.fillStyle = '#f97316'; ctx.fill(); ctx.strokeStyle = '#0e1014'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#000'; ctx.font = 'bold 8px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(i + 1), p.x, p.y);
    });
    ctx.fillStyle = ACC; ctx.font = 'bold 13px monospace'; ctx.textAlign = 'center';
    ctx.fillText(g.label, W * 0.25, H * 0.06);
    ctx.fillStyle = '#f97316';
    ctx.fillText(cg.label, W * 0.75, H * 0.06);
  }, [gKey, g, cg]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-2">13.5. Tétel (komplementer spektrum)</div><div class="box-body">
Ha \(\lambda\) sajátértéke \(G\)-nek \(\mathbf{v}\) sajátvektorral, és \(\mathbf{v}\perp\mathbf{1}\), akkor \(-1-\lambda\) sajátértéke \(\bar{G}\)-nek ugyanazzal a sajátvektorral.<br>
A \(\mathbf{1}\) sajátvektor esetén: ha \(\lambda_1(G)=k\) (k-reguláris), akkor \(\bar G\) \((n-1-k)\)-reguláris.
</div></div>
<div class="thm-box"><div class="box-body">\[\lambda_i(\bar G)=\begin{cases}n-1-k & i=1\\ -1-\lambda_i(G) & i\ge2\end{cases}\]</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Példák</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {(['k4','c5','c6','pet'] as const).map(kk2 => (
              <button key={kk2} className={`op-btn${gKey === kk2 ? ' is-active' : ''}`} onClick={() => setGKey(kk2)}>
                {GRAPH_PRESETS[kk2].label} / kompl.
              </button>
            ))}
          </div>
          <div className="def-box" style={{ fontSize: '.68rem' }}>
            <strong>G spektruma:</strong> {eigs.map(fmt).join(', ')}<br />
            <strong>Ḡ spektruma:</strong> {eigsc.map(fmt).join(', ')}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.3rem', margin: '.3rem 0' }}>
            {[
              { v: g.n, l: 'n' },
              { v: kk, l: 'k (G reg.)' },
              { v: ck, l: 'n-1-k (Ḡ)' },
              { v: checkOk ? '✓' : '✗', l: 'Tétel OK?' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.4rem .6rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: ACC }}>{v}</div>
                <div style={{ fontSize: '.58rem', color: '#8b949e', marginTop: '.1rem' }}>{l}</div>
              </div>
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
   Static theory
════════════════════════════════════════════════ */
const t1theory = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Gráfok spektruma — alapfogalmak</h5>
<div class="def-box"><div class="lbl mb-2">Szomszédsági mátrix</div><div class="box-body">
\(G=(V,E)\), \(|V|=n\). Az \(A\in\{0,1\}^{n\times n}\) szomszédsági mátrix: \(A_{ij}=1\) ha \(ij\in E\), egyébként 0. Irányítatlan gráfra \(A=A^T\) szimmetrikus.
</div></div>
<div class="def-box"><div class="lbl mb-2">Spektrum</div><div class="box-body">
\(\sigma(G):=\{\lambda_1\ge\lambda_2\ge\cdots\ge\lambda_n\}\) az \(A\) sajátértékei (valósak, mert \(A\) szimmetrikus). A karakterisztikus polinom \(p_G(\lambda)=\det(\lambda I-A)\).
</div></div>
<div class="thm-box"><div class="box-body">
<strong>Nyom-tételek:</strong> \(\sum_i\lambda_i=\mathrm{tr}(A)=0\) (nincs hurokél); \(\sum_i\lambda_i^2=\mathrm{tr}(A^2)=2|E|\).
</div></div>`;

const TABS: Tab[] = [
  { id: 'adj',  label: 'Mátrix',      content: <div><RichTex html={t1theory} /><AdjTab /></div> },
  { id: 'spec', label: 'Spektrum',     content: <SpecTab /> },
  { id: 'reg',  label: 'Reguláris',   content: <RegTab /> },
  { id: 'bip',  label: 'Kétpólusú',  content: <BipTab /> },
  { id: 'comp', label: 'Komplement',  content: <CompTab /> },
];

export default function DimatCh21() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika II.13 — fejezet</p>
      <h1 className="ila__title">Gráfok spektruma</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
