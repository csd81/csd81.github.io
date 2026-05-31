import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// ─── Graph types ───────────────────────────────────────────────────
interface GNode { x: number; y: number; label: string; }
interface GEdge { a: number; b: number; w?: number; directed?: boolean; }
interface Graph { nodes: GNode[]; edges: GEdge[]; directed?: boolean; }

// ─── Helpers ───────────────────────────────────────────────────────
function circleNodes(n: number, cx: number, cy: number, r: number): GNode[] {
  return Array.from({ length: n }, (_, i) => ({
    x: cx + r * Math.cos(2 * Math.PI * i / n - Math.PI / 2),
    y: cy + r * Math.sin(2 * Math.PI * i / n - Math.PI / 2),
    label: String.fromCharCode(65 + i),
  }));
}

const GRAPH_PRESETS: Record<string, Graph> = {
  cycle4: { nodes: circleNodes(4, 115, 110, 80), edges: [[0,1],[1,2],[2,3],[3,0]].map(([a,b]) => ({a,b})) },
  K4:     { nodes: circleNodes(4, 115, 110, 80), edges: [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]].map(([a,b]) => ({a,b})) },
  path5:  { nodes: [{x:20,y:110,label:'A'},{x:65,y:110,label:'B'},{x:110,y:110,label:'C'},{x:155,y:110,label:'D'},{x:200,y:110,label:'E'}], edges: [[0,1],[1,2],[2,3],[3,4]].map(([a,b]) => ({a,b})) },
  bipartite: { nodes: [{x:40,y:60,label:'A'},{x:40,y:130,label:'B'},{x:40,y:200,label:'C'},{x:160,y:90,label:'D'},{x:160,y:170,label:'E'}], edges: [[0,3],[0,4],[1,3],[1,4],[2,4]].map(([a,b]) => ({a,b})) },
  weighted: { nodes: circleNodes(4, 115, 110, 80), edges: [{a:0,b:1,w:3},{a:1,b:2,w:5},{a:2,b:3,w:2},{a:3,b:0,w:4},{a:0,b:2,w:7}] },
  path4: { nodes: [{x:20,y:110,label:'A'},{x:80,y:110,label:'B'},{x:140,y:110,label:'C'},{x:200,y:110,label:'D'}], edges: [[0,1],[1,2],[2,3]].map(([a,b]) => ({a,b})) },
  K3:    { nodes: circleNodes(3, 115, 110, 75), edges: [[0,1],[1,2],[2,0]].map(([a,b]) => ({a,b})) },
  C4:    { nodes: circleNodes(4, 115, 110, 80), edges: [[0,1],[1,2],[2,3],[3,0]].map(([a,b]) => ({a,b})) },
  directed: { nodes: circleNodes(4, 115, 110, 80), edges: [[0,1],[1,2],[2,3],[3,0],[0,2]].map(([a,b]) => ({a,b,directed:true})), directed: true },
  disconnected: { nodes: [{x:80,y:80,label:'A'},{x:160,y:80,label:'B'},{x:120,y:160,label:'C'},{x:280,y:80,label:'D'},{x:360,y:80,label:'E'},{x:320,y:160,label:'F'}], edges: [[0,1],[1,2],[2,0],[3,4],[4,5],[5,3]].map(([a,b]) => ({a,b})) },
  bridge: { nodes: [{x:80,y:100,label:'A'},{x:160,y:60,label:'B'},{x:160,y:140,label:'C'},{x:260,y:100,label:'D'},{x:340,y:60,label:'E'},{x:340,y:140,label:'F'}], edges: [[0,1],[0,2],[1,2],[2,3],[3,4],[3,5],[4,5]].map(([a,b]) => ({a,b})) },
};

function buildAdjMatrix(G: Graph): number[][] {
  const n = G.nodes.length;
  const A = Array.from({ length: n }, () => new Array(n).fill(0));
  G.edges.forEach(({ a, b, w }) => {
    A[a][b] += (w ?? 1);
    if (!G.directed) A[b][a] += (w ?? 1);
  });
  return A;
}

function buildIncMatrix(G: Graph): number[][] {
  const n = G.nodes.length, m = G.edges.length;
  const B = Array.from({ length: n }, () => new Array(m).fill(0));
  G.edges.forEach(({ a, b, directed }, j) => {
    if (directed || G.directed) { B[a][j] = 1; B[b][j] = -1; }
    else { B[a][j] = 1; B[b][j] = 1; }
  });
  return B;
}

function matMul(A: number[][], B: number[][]): number[][] {
  const n = A.length, m = B[0].length, k = B.length;
  const C = Array.from({ length: n }, () => new Array(m).fill(0));
  for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) for (let l = 0; l < k; l++) C[i][j] += A[i][l] * B[l][j];
  return C;
}
function matPow(A: number[][], k: number): number[][] { let R = A; for (let i = 1; i < k; i++) R = matMul(R, A); return R; }

function countComponents(G: Graph): number {
  const n = G.nodes.length;
  const vis = new Array(n).fill(false); let comps = 0;
  for (let s = 0; s < n; s++) {
    if (vis[s]) continue; comps++;
    const q = [s]; vis[s] = true;
    while (q.length) {
      const v = q.shift()!;
      G.edges.forEach(e => {
        if (e.a === v && !vis[e.b]) { vis[e.b] = true; q.push(e.b); }
        if (!G.directed && e.b === v && !vis[e.a]) { vis[e.a] = true; q.push(e.a); }
      });
    }
  }
  return comps;
}

function det(M: number[][]): number {
  const n = M.length;
  if (n === 1) return M[0][0];
  if (n === 2) return M[0][0] * M[1][1] - M[0][1] * M[1][0];
  let d = 0;
  for (let j = 0; j < n; j++) {
    const minor = M.slice(1).map(row => [...row.slice(0, j), ...row.slice(j + 1)]);
    d += Math.pow(-1, j) * M[0][j] * det(minor);
  }
  return d;
}

function drawSimpleGraph(
  ctx: CanvasRenderingContext2D, W: number, H: number,
  G: Graph,
  opts: { nodeColors?: Record<number, string>; hlEdges?: Set<number>; scaleX?: number; scaleY?: number; offX?: number; offY?: number } = {}
) {
  const { nodeColors = {}, hlEdges = new Set(), scaleX = 1, scaleY = 1, offX = 0, offY = 0 } = opts;
  ctx.clearRect(0, 0, W, H);
  const nx = (x: number) => x * scaleX + offX;
  const ny = (y: number) => y * scaleY + offY;

  G.edges.forEach(({ a, b, w, directed }, i) => {
    const na = G.nodes[a], nb = G.nodes[b];
    ctx.beginPath(); ctx.moveTo(nx(na.x), ny(na.y)); ctx.lineTo(nx(nb.x), ny(nb.y));
    ctx.strokeStyle = hlEdges.has(i) ? '#f97316' : '#334155'; ctx.lineWidth = 1.5; ctx.stroke();
    if (directed || G.directed) {
      const dx = nx(nb.x) - nx(na.x), dy = ny(nb.y) - ny(na.y), len = Math.sqrt(dx * dx + dy * dy) || 1;
      const ux = dx / len, uy = dy / len, r = 14;
      const hx = nx(nb.x) - ux * r, hy = ny(nb.y) - uy * r;
      ctx.beginPath(); ctx.moveTo(hx + ux * 10, hy + uy * 10); ctx.lineTo(hx - uy * 5, hy + ux * 5); ctx.lineTo(hx + uy * 5, hy - ux * 5); ctx.closePath();
      ctx.fillStyle = '#334155'; ctx.fill();
    }
    if (w !== undefined) {
      const mx = (nx(na.x) + nx(nb.x)) / 2, my = (ny(na.y) + ny(nb.y)) / 2;
      ctx.fillStyle = '#94a3b8'; ctx.font = '10px monospace'; ctx.textAlign = 'center';
      ctx.fillText(String(w), mx, my - 6);
    }
  });
  G.nodes.forEach((node, i) => {
    const col = nodeColors[i] ?? '#38bdf8';
    ctx.beginPath(); ctx.arc(nx(node.x), ny(node.y), 13, 0, Math.PI * 2);
    ctx.fillStyle = '#0a0d14'; ctx.fill();
    ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = col; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(node.label, nx(node.x), ny(node.y));
  });
}

function renderMatrixHtml(
  A: number[][],
  rowLabels: string[],
  colLabels: string[],
  isInc = false,
  hlCell?: [number, number] | null,
  onCellClick?: (i: number, j: number) => void
): string {
  let html = '<table class="cayley" style="font-family:monospace;font-size:.8rem;">';
  html += '<tr><th></th>' + colLabels.map(l => `<th>${l}</th>`).join('') + '</tr>';
  A.forEach((row, i) => {
    html += `<tr><th>${rowLabels[i]}</th>`;
    row.forEach((v, j) => {
      const isHL = hlCell && hlCell[0] === i && hlCell[1] === j;
      const isDiag = i === j && !isInc;
      const col = isHL ? '#7dd3fc' : isDiag ? '#34d399' : v === 0 ? '#334155' : v > 0 ? '#38bdf8' : '#f59e0b';
      const bg = isHL ? 'rgba(56,189,248,.15)' : isDiag ? 'rgba(16,185,129,.10)' : 'transparent';
      html += `<td style="color:${col};background:${bg};font-weight:${isHL||isDiag?700:400}">${v === 0 ? '·' : v}</td>`;
    });
    html += '</tr>';
  });
  html += '</table>';
  return html;
}

// ─── TAB 1: Adjacencia ─────────────────────────────────────────────
function AdjTab() {
  const [preset, setPreset] = useState<keyof typeof GRAPH_PRESETS>('cycle4');
  const [hlCell, setHlCell] = useState<[number, number] | null>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);

  const G = GRAPH_PRESETS[preset];
  const A = buildAdjMatrix(G);
  const n = A.length;
  const labels = G.nodes.map(nd => nd.label);
  const degs = A.map(row => row.reduce((a, b) => a + b, 0));
  const sym = A.every((row, i) => row.every((v, j) => v === A[j][i]));

  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    drawSimpleGraph(ctx, cv.width, cv.height, G);
  }, [preset]);

  const matHtml = renderMatrixHtml(A, labels, labels, false, hlCell);
  const cellInfoHtml = hlCell
    ? `A[${labels[hlCell[0]]}][${labels[hlCell[1]]}] = ${A[hlCell[0]][hlCell[1]]} → ${A[hlCell[0]][hlCell[1]] === 0 ? `nincs él ${labels[hlCell[0]]} és ${labels[hlCell[1]]} között` : `${A[hlCell[0]][hlCell[1]]} él fut ${labels[hlCell[0]]} → ${labels[hlCell[1]]}`}`
    : '';

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '1rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Csúcsmátrix (adjacencia-mátrix)</span>
          <RichTex html={String.raw`<div class="box-body">\([A]_{ij} = \) az élek száma \(v_i\) és \(v_j\) között.<br>Egyszerű gráf: \(A \in \{0,1\}^{n\times n}\), szimmetrikus (\(A^T=A\)), nullás főátló.</div>`} />
          <RichTex className="def-box" html={String.raw`Sor összege = fokszám: \(\sum_j [A]_{ij} = \delta(v_i)\). Súlyozott gráf: \([A]_{ij}=w_{ij}\).`} />
          <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.75rem' }}>
            {['cycle4','K4','path5','bipartite','weighted'].map(k => (
              <button key={k} className={`op-btn${preset === k ? ' is-active' : ''}`} onClick={() => { setPreset(k); setHlCell(null); }}>
                {k === 'cycle4' ? 'C₄' : k === 'K4' ? 'K₄' : k === 'path5' ? 'P₅' : k === 'bipartite' ? 'K₂,₃' : 'Súlyozott'}
              </button>
            ))}
          </div>
          <div style={{ fontSize: '.8rem', color: '#94a3b8', marginTop: '.75rem' }}>
            <span className="formula-chip" style={{ fontSize: '.72rem', margin: '.1rem' }}>n={n}</span>
            <span className="formula-chip" style={{ fontSize: '.72rem', margin: '.1rem' }}>élek={G.edges.length}</span>
            <span className="formula-chip" style={{ fontSize: '.72rem', margin: '.1rem' }}>szimmetrikus={sym ? '✓' : '✗'}</span>
            <div style={{ marginTop: '.4rem' }}>Fokszámok: {degs.map((d, i) => `${labels[i]}:${d}`).join(', ')}</div>
          </div>
        </div>
        <div className="info-box">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem' }}>
            <div>
              <canvas ref={cvRef} width={230} height={220} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0d14' }} />
            </div>
            <div style={{ overflowX: 'auto' }}>
              <div style={{ fontSize: '.75rem', color: '#64748b', marginBottom: '.3rem' }}>Adjacencia-mátrix A:</div>
              <RichTex html={matHtml} />
            </div>
          </div>
          <div style={{ fontSize: '.8rem', color: '#94a3b8', marginTop: '.5rem', minHeight: '1.5rem' }}>{cellInfoHtml}</div>
          <div style={{ fontSize: '.72rem', color: '#64748b' }}>Kattints a mátrix egy cellájára a részletekért (React: hover kiemelés csak vizuálisan).</div>
        </div>
      </div>
    </div>
  );
}

// ─── TAB 2: Incidencia ─────────────────────────────────────────────
function IncTab() {
  const [preset, setPreset] = useState<keyof typeof GRAPH_PRESETS>('path4');
  const cvRef = useRef<HTMLCanvasElement>(null);

  const G = GRAPH_PRESETS[preset];
  const B = buildIncMatrix(G);
  const n = G.nodes.length;
  const k = countComponents(G);
  const rank = n - k;
  const rowL = G.nodes.map(nd => nd.label);
  const colL = G.edges.map((_, i) => `e${i + 1}`);
  const matHtml = renderMatrixHtml(B, rowL, colL, true);

  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    drawSimpleGraph(ctx, cv.width, cv.height, G);
  }, [preset]);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '1rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Élmátrix (incidencia-mátrix)</span>
          <RichTex html={String.raw`<div class="box-body">\(B\) mérete: \(|V|\times|E|\).<br>Irányítatlan: \([B]_{ij}=1\) ha \(v_i\) illeszkedik \(e_j\)-re.<br>Irányított: \([B]_{ij}=+1\) ha \(e_j\) \(v_i\)-ből indul, \(-1\) ha oda érkezik.</div>`} />
          <div className="thm-box">Rang: \(r(B) = n - k\), ahol \(k\) a komponensek száma.<br />Hipergráfra is alkalmazható.</div>
          <div className="def-box"><strong>Izolált csúcs:</strong> csupa 0-ás sor.<br /><strong>Hurokél:</strong> egy 1-es az oszlopban.</div>
          <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
            {['path4','cycle4','K4','directed'].map(k2 => (
              <button key={k2} className={`op-btn${preset === k2 ? ' is-active' : ''}`} onClick={() => setPreset(k2)}>
                {k2 === 'path4' ? 'P₄' : k2 === 'cycle4' ? 'C₄' : k2 === 'K4' ? 'K₄' : 'Irányított'}
              </button>
            ))}
          </div>
          <div style={{ fontSize: '.8rem', color: '#94a3b8', marginTop: '.75rem' }}>
            Méret: {n}×{G.edges.length} | rang(B) = n−k = {n}−{k} = <strong style={{ color: '#38bdf8' }}>{rank}</strong>
          </div>
        </div>
        <div className="info-box">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '.75rem' }}>
            <div>
              <canvas ref={cvRef} width={210} height={220} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0d14' }} />
            </div>
            <div style={{ overflowX: 'auto' }}>
              <div style={{ fontSize: '.75rem', color: '#64748b', marginBottom: '.3rem' }}>Incidencia-mátrix B:</div>
              <RichTex html={matHtml} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TAB 3: A^k Utak ───────────────────────────────────────────────
function PowerTab() {
  const [preset, setPreset] = useState<keyof typeof GRAPH_PRESETS>('C4');
  const [k, setK] = useState(2);
  const [pathInfo, setPathInfo] = useState('Kattints egy A^k cellára az értelmezéséhez.');
  const cvRef = useRef<HTMLCanvasElement>(null);

  const G = GRAPH_PRESETS[preset];
  const A = buildAdjMatrix(G);
  const Ak = matPow(A, Math.max(1, k));
  const n = G.nodes.length;
  const labels = G.nodes.map(nd => nd.label);
  const tr = Array.from({ length: n }, (_, i) => Ak[i][i]).reduce((a, b) => a + b, 0);

  const superscript = (n: number) => n.toString().split('').map(d => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+d] ?? d).join('');

  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    drawSimpleGraph(ctx, cv.width, cv.height, G, { scaleX: 1.6, scaleY: 0.85, offX: 40, offY: 10 });
  }, [preset]);

  const AHtml = renderMatrixHtml(A, labels, labels);
  const AkHtml = renderMatrixHtml(Ak, labels, labels);

  const handleAkClick = (i: number, j: number) => {
    const v = Ak[i][j];
    setPathInfo(`A^${k}[${labels[i]}][${labels[j]}] = ${v} — pontosan ${k} hosszú séta ${labels[i]}→${labels[j]} (${v} db)`);
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '1rem' }}>
        <div>
          <div className="thm-box">
            <strong>4.8. Tétel — A^k és utak száma</strong><br />
            <RichTex html={String.raw`Az \(A^k\) mátrix \((i,j)\)-edik eleme megadja a \(v_i \to v_j\) pontosan \(k\) hosszú sétái számát.<br><br>\([A^2]_{ii} = \delta(v_i)\) (fokszám)<br>\(\operatorname{tr}(A^3) = 6 \cdot \triangle\) (háromszögek száma × 6)`} />
          </div>
          <div className="info-box" style={{ marginTop: '.75rem' }}>
            <span className="lbl" style={{ color: '#38bdf8' }}>Gráf választó</span>
            <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
              {['C4','K4','path4','K3'].map(p => (
                <button key={p} className={`op-btn${preset === p ? ' is-active' : ''}`} onClick={() => setPreset(p)}>
                  {p === 'C4' ? 'C₄' : p === 'K4' ? 'K₄' : p === 'path4' ? 'P₄' : 'Háromszög'}
                </button>
              ))}
            </div>
            <div style={{ fontSize: '.82rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
              k hatványfok: <input type="number" className="ila-num" value={k} min={1} max={6} onChange={e => setK(Math.min(6, Math.max(1, +e.target.value)))} />
            </div>
            <div style={{ fontSize: '.82rem', color: '#94a3b8', marginTop: '.5rem' }}>
              <span className="formula-chip" style={{ fontSize: '.72rem' }}>k={k}</span>{' '}
              tr(A{superscript(k)}) = {tr}
              {k === 2 && ` = Σ fokszámok`}
              {k === 3 && ` → háromszögek = ${tr}/6 = ${tr / 6}`}
            </div>
          </div>
        </div>
        <div className="info-box">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', marginBottom: '.75rem' }}>
            <div>
              <div style={{ fontSize: '.75rem', color: '#64748b', marginBottom: '.3rem' }}>Adjacencia A:</div>
              <RichTex html={AHtml} />
            </div>
            <div>
              <div style={{ fontSize: '.75rem', color: '#64748b', marginBottom: '.3rem' }}>A{superscript(k)}:</div>
              <div onClick={e => {
                const td = (e.target as HTMLElement).closest('td');
                if (!td) return;
                const tr2 = td.closest('tr'); if (!tr2) return;
                const rows = [...(tr2.parentElement?.querySelectorAll('tr') ?? [])];
                const i = rows.indexOf(tr2) - 1;
                const cols = [...tr2.querySelectorAll('td')];
                const j = cols.indexOf(td as HTMLTableCellElement);
                if (i >= 0 && j >= 0) handleAkClick(i, j);
              }}>
                <RichTex html={AkHtml} />
              </div>
            </div>
          </div>
          <canvas ref={cvRef} width={480} height={220} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0d14' }} />
          <div style={{ fontSize: '.8rem', color: '#94a3b8', marginTop: '.5rem' }}>{pathInfo}</div>
        </div>
      </div>
    </div>
  );
}

// ─── TAB 4: Laplace & Kirchhoff ────────────────────────────────────
function LaplaceTab() {
  const [preset, setPreset] = useState<keyof typeof GRAPH_PRESETS>('K3');
  const cvRef = useRef<HTMLCanvasElement>(null);

  const G = GRAPH_PRESETS[preset];
  const A = buildAdjMatrix(G);
  const n = A.length;
  const degs = A.map(row => row.reduce((a, b) => a + b, 0));
  const D = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => i === j ? degs[i] : 0));
  const L = A.map((row, i) => row.map((v, j) => D[i][j] - v));
  const labels = G.nodes.map(nd => nd.label);
  const trees = (() => {
    if (n <= 1) return 1;
    const M = L.slice(1).map(row => row.slice(1));
    return Math.round(det(M));
  })();
  const connected = countComponents(G) === 1;

  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    drawSimpleGraph(ctx, cv.width, cv.height, G, { scaleX: 2.2, scaleY: 0.95, offX: 40, offY: 10 });
  }, [preset]);

  const DHtml = renderMatrixHtml(D, labels, labels);
  const AHtml = renderMatrixHtml(A, labels, labels);
  const LHtml = renderMatrixHtml(L, labels, labels);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '1rem' }}>
        <div>
          <div className="def-box">
            <RichTex html={String.raw`\(L = D - A\)<br>ahol \(D\) a fokszám-diagonálmátrix: \([D]_{ii}=\delta(v_i)\).`} />
          </div>
          <div className="thm-box">
            <strong>Kirchhoff-féle fa-mátrix tétel:</strong><br />
            <RichTex html={String.raw`A gráf feszítőfáinak száma = \(L\) bármely \((n-1)\times(n-1)\)-es aldeterminánsának értéke.`} />
          </div>
          <div className="def-box">
            <RichTex html={String.raw`<strong>Spektrális gráfelmélet:</strong> \(L\) sajátértékei \(0=\lambda_1\le\lambda_2\le\cdots\le\lambda_n\).<br>\(\lambda_2 > 0 \Leftrightarrow\) összefüggő gráf.<br>\(\lambda_2\) = Fiedler-érték.`} />
          </div>
          <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
            {['K3','path4','C4','K4'].map(p => (
              <button key={p} className={`op-btn${preset === p ? ' is-active' : ''}`} onClick={() => setPreset(p)}>
                {p === 'K3' ? 'K₃' : p === 'path4' ? 'P₄' : p === 'C4' ? 'C₄' : 'K₄'}
              </button>
            ))}
          </div>
          <div style={{ fontSize: '.82rem', color: '#94a3b8', marginTop: '.75rem' }}>
            Fokszámok: {degs.map((d, i) => `${labels[i]}:${d}`).join(', ')}<br />
            <span style={{ color: connected ? '#10b981' : '#ef4444' }}>λ₂ {">"} 0 → összefüggő: {connected ? '✓' : '✗'}</span>
          </div>
        </div>
        <div className="info-box">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '.5rem', marginBottom: '.75rem' }}>
            <div>
              <div style={{ fontSize: '.72rem', color: '#64748b', marginBottom: '.2rem' }}>D (fok-diag.):</div>
              <RichTex html={DHtml} />
            </div>
            <div>
              <div style={{ fontSize: '.72rem', color: '#64748b', marginBottom: '.2rem' }}>A:</div>
              <RichTex html={AHtml} />
            </div>
            <div>
              <div style={{ fontSize: '.72rem', color: '#64748b', marginBottom: '.2rem' }}>L = D−A:</div>
              <RichTex html={LHtml} />
            </div>
          </div>
          <canvas ref={cvRef} width={480} height={210} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0d14' }} />
          <div style={{ fontSize: '.84rem', marginTop: '.5rem', color: '#7dd3fc' }}>
            Kirchhoff-tétel: feszítőfák száma = <strong>{trees}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TAB 5: Tintacsöpp BFS ─────────────────────────────────────────
const COMP_COLORS = ['#38bdf8', '#10b981', '#f97316', '#a78bfa', '#f43f5e'];

function InkBFSTab() {
  const [preset, setPreset] = useState<keyof typeof GRAPH_PRESETS>('disconnected');
  const [visited, setVisited] = useState<boolean[]>([]);
  const [queue, setQueue] = useState<number[]>([]);
  const [compOf, setCompOf] = useState<number[]>([]);
  const [compColors, setCompColors] = useState<string[]>([]);
  const [status, setStatus] = useState('');
  const [done, setDone] = useState(false);
  const cvRef = useRef<HTMLCanvasElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const G = GRAPH_PRESETS[preset];

  const initState = (g: Graph) => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    const n = g.nodes.length;
    const vis = new Array(n).fill(false);
    const q: number[] = [];
    const comp = new Array(n).fill(-1);
    vis[0] = true; q.push(0); comp[0] = 0;
    setVisited(vis);
    setQueue(q);
    setCompOf(comp);
    setCompColors([COMP_COLORS[0]]);
    setDone(false);
    setStatus('');
  };

  useEffect(() => { initState(GRAPH_PRESETS[preset]); }, [preset]);

  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const sc = (x: number) => x * 0.92 + 20;
    const sy = (y: number) => y * 0.92 + 10;

    G.edges.forEach(({ a, b }) => {
      ctx.beginPath(); ctx.moveTo(sc(G.nodes[a].x), sy(G.nodes[a].y)); ctx.lineTo(sc(G.nodes[b].x), sy(G.nodes[b].y));
      ctx.strokeStyle = '#334155'; ctx.lineWidth = 1.5; ctx.stroke();
    });
    G.nodes.forEach((nd, i) => {
      const ci = compOf[i];
      const col = ci >= 0 ? (compColors[ci] ?? '#334155') : '#334155';
      const inQ = queue.includes(i);
      ctx.beginPath(); ctx.arc(sc(nd.x), sy(nd.y), 14, 0, Math.PI * 2);
      ctx.fillStyle = ci >= 0 ? col + '22' : '#0a0d14'; ctx.fill();
      ctx.strokeStyle = inQ ? '#fbbf24' : col; ctx.lineWidth = inQ ? 3 : 2; ctx.stroke();
      ctx.fillStyle = ci >= 0 ? col : '#334155';
      ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(nd.label, sc(nd.x), sy(nd.y));
    });
  }, [preset, visited, queue, compOf, compColors]);

  const step = () => {
    setVisited(vis => {
      const newVis = [...vis];
      setQueue(q => {
        const newQ = [...q];
        setCompOf(comp => {
          const newComp = [...comp];
          setCompColors(cols => {
            const newCols = [...cols];
            setDone(d => {
              if (d) return d;
              const g = GRAPH_PRESETS[preset];
              const n = g.nodes.length;
              if (newQ.length === 0) {
                const next = newVis.findIndex(v => !v);
                if (next < 0) {
                  setStatus('✓ Kész! Minden komponens megtalálva.');
                  return true;
                }
                const ci = newCols.length;
                newCols.push(COMP_COLORS[ci % COMP_COLORS.length]);
                newQ.push(next); newVis[next] = true; newComp[next] = ci;
              } else {
                const v = newQ.shift()!;
                g.edges.forEach(e => {
                  const nb = e.a === v ? e.b : e.b === v ? e.a : -1;
                  if (nb >= 0 && !newVis[nb]) { newVis[nb] = true; newQ.push(nb); newComp[nb] = newComp[v]; }
                });
              }
              const pending = newVis.filter(Boolean).length;
              setStatus(pending < n ? `Feldolgozatlan: ${n - pending} csúcs | Sor: [${newQ.map(i => g.nodes[i].label).join(',')}]` : '✓ Minden csúcs elérve!');
              return false;
            });
            return newCols;
          });
          return newComp;
        });
        return newQ;
      });
      return newVis;
    });
  };

  const auto = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; return; }
    timerRef.current = setInterval(() => {
      step();
      if (done) { clearInterval(timerRef.current!); timerRef.current = null; }
    }, 600);
  };

  const xVec = G.nodes.map((_, i) => visited[i] ? 1 : 0);

  const compCounts = compColors.length;
  const compChips = Array.from({ length: compCounts }, (_, ci) => {
    const members = G.nodes.filter((_, i) => compOf[i] === ci).map(nd => nd.label);
    return members.length ? (
      <span key={ci} className="formula-chip" style={{ color: COMP_COLORS[ci % COMP_COLORS.length], borderColor: COMP_COLORS[ci % COMP_COLORS.length], fontSize: '.72rem', margin: '.1rem' }}>
        K{ci + 1}: {'{' + members.join(',') + '}'}
      </span>
    ) : null;
  });

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '1rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>4.13. Algoritmus — „Tintacsöppentős" BFS</span>
          <div className="def-box" style={{ fontSize: '.83rem' }}>
            Indulj egy csúcsból. Adj hozzá egy „tintacsöppet" — az szétfolyik az összes szomszédra, majd azok szomszédaira, amíg az egész komponens beszíneződik. Ismételd a következő be nem színezett csúcsból.
          </div>
          <RichTex html={String.raw`<p style="font-size:.82rem;color:#94a3b8">Az adjacencia-mátrix segítségével mátrix-szorzással: ha \(\mathbf{x}\) az aktuálisan elért csúcsok vektora, akkor \(A\mathbf{x}\) megadja az elérhető szomszédokat.</p>`} />
          <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
            {['disconnected','K4','bridge'].map(p => (
              <button key={p} className={`op-btn${preset === p ? ' is-active' : ''}`} onClick={() => setPreset(p)}>
                {p === 'disconnected' ? 'Szétesett' : p === 'K4' ? 'K₄' : 'Két komponens'}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
            <button className="op-btn is-active" onClick={step}>Lépés ▶</button>
            <button className="op-btn" onClick={auto}>Auto ▶▶</button>
            <button className="op-btn" onClick={() => initState(G)}>Újra</button>
          </div>
          <div style={{ fontSize: '.84rem', color: '#94a3b8', marginTop: '.75rem' }}>{status}</div>
        </div>
        <div className="info-box">
          <canvas ref={cvRef} width={480} height={280} style={{ width: '100%', borderRadius: '.5rem', background: '#0a0d14' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', marginTop: '.75rem' }}>
            <div>
              <div style={{ fontSize: '.72rem', color: '#64748b', marginBottom: '.2rem' }}>Elért csúcsok (x vektor):</div>
              <div style={{ fontFamily: 'monospace', fontSize: '.82rem', color: '#7dd3fc' }}>[{xVec.join(', ')}]</div>
            </div>
            <div>
              <div style={{ fontSize: '.72rem', color: '#64748b', marginBottom: '.2rem' }}>Komponensek:</div>
              <div>{compChips}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Theory for Tab 1 ──────────────────────────────────────────────
const t1theory = String.raw`
<h5 style="color:#38bdf8;font-weight:700;margin:0 0 .75rem">Gráf-mátrixok — elmélet</h5>
<div class="def-box"><div class="lbl" style="color:#38bdf8">Adjacencia-mátrix</div><div class="box-body">\([A]_{ij}\) = élek száma \(v_i\) és \(v_j\) között. Irányítatlan esetén \(A = A^T\), nullás főátló (ha nincs hurokél).</div></div>
<div class="def-box"><div class="lbl" style="color:#38bdf8">Incidencia-mátrix</div><div class="box-body">\(B\) mérete \(|V|\times|E|\). Irányítatlan: 0/1 mátrix. Irányított: \(\{-1,0,+1\}\) mátrix. Rang: \(n-k\).</div></div>
<div class="thm-box"><div class="box-body"><strong>Hatványtétel (4.8):</strong> \([A^k]_{ij}\) = pontosan \(k\) hosszú séták száma \(v_i\)-ből \(v_j\)-be.<br>\([A^2]_{ii} = \delta(v_i)\); \(\operatorname{tr}(A^3)=6\triangle\).</div></div>
<div class="thm-box"><div class="box-body"><strong>Kirchhoff-tétel:</strong> Feszítőfák száma = Laplace-mátrix \(L=D-A\) bármely \((n-1)\times(n-1)\)-es kofaktora.</div></div>`;

const TABS: Tab[] = [
  { id: 'adj', label: 'Adjacencia', content: <div><RichTex html={t1theory} /><AdjTab /></div> },
  { id: 'inc', label: 'Incidencia', content: <IncTab /> },
  { id: 'pow', label: 'A^k — Utak', content: <PowerTab /> },
  { id: 'lap', label: 'Laplace & Kirchhoff', content: <LaplaceTab /> },
  { id: 'ink', label: 'Tintacsöpp BFS', content: <InkBFSTab /> },
];

export default function DimatCh12() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika II.4 — fejezet</p>
      <h1 className="ila__title">Gráf-mátrixok</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
