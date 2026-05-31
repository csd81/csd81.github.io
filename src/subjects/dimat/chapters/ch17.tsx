import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

type GNode = { x: number; y: number };
type GEdge = [number, number];

const NR = 14;

// ─── segment intersection ─────────────────────────────────────────
function segIntersect(p1: GNode, p2: GNode, p3: GNode, p4: GNode): boolean {
  function cross(o: GNode, a: GNode, b: GNode) { return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x); }
  const d1 = cross(p3, p4, p1), d2 = cross(p3, p4, p2);
  const d3 = cross(p1, p2, p3), d4 = cross(p1, p2, p4);
  return ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0));
}
function countCrossings(nodes: GNode[], edges: GEdge[]): number {
  let cnt = 0;
  for (let i = 0; i < edges.length; i++) for (let j = i + 1; j < edges.length; j++) {
    const [a, b] = edges[i], [c, d] = edges[j];
    if (a === c || a === d || b === c || b === d) continue;
    if (segIntersect(nodes[a], nodes[b], nodes[c], nodes[d])) cnt++;
  }
  return cnt;
}

// ─── draw graph ───────────────────────────────────────────────────
function drawPlanar(ctx: CanvasRenderingContext2D, W: number, H: number, nodes: GNode[], edges: GEdge[]) {
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
  const crossSet = new Set<number>();
  for (let i = 0; i < edges.length; i++) for (let j = i + 1; j < edges.length; j++) {
    const [a, b] = edges[i], [c, d] = edges[j];
    if (a === c || a === d || b === c || b === d) continue;
    if (segIntersect(nodes[a], nodes[b], nodes[c], nodes[d])) { crossSet.add(i); crossSet.add(j); }
  }
  edges.forEach(([a, b], i) => {
    ctx.strokeStyle = crossSet.has(i) ? '#ef4444' : '#2a5a8a';
    ctx.lineWidth = crossSet.has(i) ? 2.5 : 1.5;
    ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); ctx.stroke();
  });
  nodes.forEach((n, i) => {
    ctx.beginPath(); ctx.arc(n.x, n.y, NR, 0, 2 * Math.PI);
    ctx.fillStyle = '#1e3a5f'; ctx.fill(); ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(String(i + 1), n.x, n.y);
  });
}

function drawSimpleGraph(canvas: HTMLCanvasElement, nodes: GNode[], edges: GEdge[], highlight?: number[]) {
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
  edges.forEach(([a, b]) => { ctx.strokeStyle = '#2a5a8a'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); ctx.stroke(); });
  nodes.forEach((n, i) => {
    const isHL = highlight?.includes(i);
    ctx.beginPath(); ctx.arc(n.x, n.y, NR, 0, 2 * Math.PI);
    ctx.fillStyle = isHL ? '#7c2d12' : '#1e3a5f'; ctx.fill();
    ctx.strokeStyle = isHL ? '#f97316' : '#38bdf8'; ctx.lineWidth = isHL ? 2.5 : 1.5; ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(String(i + 1), n.x, n.y);
  });
}

// ─── PLANAR PRESETS ───────────────────────────────────────────────
const PLANAR_PRESETS: Record<string, { nodes: GNode[]; edges: GEdge[] }> = {
  k4: { nodes: [{ x: 270, y: 80 }, { x: 100, y: 280 }, { x: 270, y: 280 }, { x: 440, y: 280 }], edges: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]] },
  k5: { nodes: [{ x: 270, y: 50 }, { x: 430, y: 180 }, { x: 370, y: 330 }, { x: 170, y: 330 }, { x: 110, y: 180 }], edges: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]] },
  k33: { nodes: [{ x: 120, y: 80 }, { x: 270, y: 80 }, { x: 420, y: 80 }, { x: 120, y: 280 }, { x: 270, y: 280 }, { x: 420, y: 280 }], edges: [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]] },
  petersen: { nodes: [{ x: 270, y: 40 }, { x: 440, y: 160 }, { x: 380, y: 330 }, { x: 160, y: 330 }, { x: 100, y: 160 }, { x: 270, y: 130 }, { x: 360, y: 195 }, { x: 325, y: 290 }, { x: 215, y: 290 }, { x: 180, y: 195 }], edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [5, 7], [6, 8], [7, 9], [8, 5], [9, 6], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9]] },
  dodecahedron: {
    nodes: [{ x: 270, y: 30 }, { x: 420, y: 110 }, { x: 460, y: 260 }, { x: 360, y: 340 }, { x: 180, y: 340 }, { x: 80, y: 260 }, { x: 120, y: 110 }, { x: 270, y: 100 }, { x: 380, y: 165 }, { x: 400, y: 270 }, { x: 310, y: 310 }, { x: 230, y: 310 }, { x: 140, y: 270 }, { x: 160, y: 165 }, { x: 270, y: 165 }, { x: 310, y: 225 }, { x: 310, y: 265 }, { x: 230, y: 265 }, { x: 230, y: 225 }, { x: 270, y: 200 }],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], [0, 7], [1, 8], [2, 9], [3, 10], [4, 11], [5, 12], [6, 13], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 7], [7, 19], [8, 15], [9, 16], [10, 17], [11, 18], [12, 14], [13, 14], [14, 18], [14, 15], [15, 16], [16, 17], [17, 18], [18, 19], [19, 15]],
  },
};

// ─── EULER PRESETS ────────────────────────────────────────────────
const EULER_PRESETS: Record<string, { nodes: GNode[]; edges: GEdge[]; faces: number; desc: string }> = {
  cube: { nodes: [{ x: 130, y: 80 }, { x: 230, y: 80 }, { x: 230, y: 180 }, { x: 130, y: 180 }, { x: 90, y: 50 }, { x: 190, y: 50 }, { x: 190, y: 150 }, { x: 90, y: 150 }], edges: [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], faces: 6, desc: 'Kocka: l=6, c=8, e=12' },
  tetra: { nodes: [{ x: 200, y: 40 }, { x: 80, y: 240 }, { x: 320, y: 240 }, { x: 200, y: 180 }], edges: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]], faces: 4, desc: 'Tetraéder: l=4, c=4, e=6' },
  k4: { nodes: [{ x: 200, y: 50 }, { x: 80, y: 250 }, { x: 320, y: 250 }, { x: 200, y: 180 }], edges: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]], faces: 4, desc: 'K₄: l=4, c=4, e=6' },
  wheel5: { nodes: [{ x: 200, y: 150 }, { x: 200, y: 50 }, { x: 330, y: 115 }, { x: 285, y: 270 }, { x: 115, y: 270 }, { x: 70, y: 115 }], edges: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [2, 3], [3, 4], [4, 5], [5, 1]], faces: 6, desc: 'W₅: l=6, c=6, e=10' },
};

// ─── KUR PRESETS ──────────────────────────────────────────────────
const KUR_PRESETS: Record<string, { nodes: GNode[]; edges: GEdge[]; desc: string; highlight: number[] }> = {
  k5_subdiv: {
    nodes: [{ x: 260, y: 40 }, { x: 440, y: 160 }, { x: 380, y: 320 }, { x: 140, y: 320 }, { x: 80, y: 160 }, { x: 350, y: 100 }, { x: 410, y: 240 }, { x: 260, y: 320 }, { x: 110, y: 240 }, { x: 170, y: 100 }],
    edges: [[0, 5], [5, 1], [1, 6], [6, 2], [2, 7], [7, 3], [3, 8], [8, 4], [4, 9], [9, 0], [0, 2], [1, 3], [2, 4], [3, 0], [4, 1]],
    desc: 'K₅ felosztása: a belső csúcsok (6–10) a K₅ éleit osztják fel. Redukálva → K₅.',
    highlight: [5, 6, 7, 8, 9],
  },
  k33_subdiv: {
    nodes: [{ x: 100, y: 60 }, { x: 260, y: 60 }, { x: 420, y: 60 }, { x: 100, y: 280 }, { x: 260, y: 280 }, { x: 420, y: 280 }, { x: 180, y: 150 }, { x: 340, y: 150 }, { x: 260, y: 170 }],
    edges: [[0, 3], [0, 7], [0, 5], [1, 6], [1, 3], [1, 5], [2, 4], [2, 6], [2, 3], [7, 5], [6, 4], [8, 4]],
    desc: 'K₃,₃ felosztása: belső csúcsok (7,8,9) osztják az éleket. Redukálva → K₃,₃.',
    highlight: [6, 7, 8],
  },
  petersen_subdiv: {
    nodes: [{ x: 260, y: 40 }, { x: 430, y: 160 }, { x: 370, y: 330 }, { x: 150, y: 330 }, { x: 90, y: 160 }, { x: 260, y: 130 }, { x: 355, y: 195 }, { x: 320, y: 285 }, { x: 200, y: 285 }, { x: 165, y: 195 }],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [5, 7], [6, 8], [7, 9], [8, 5], [9, 6], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9]],
    desc: 'Petersen-gráf: tartalmaz K₃,₃-felosztást → nem síkgráf. (Kiemelve a 3 "ház" és 3 "kút" csúcsok.)',
    highlight: [0, 2, 6, 1, 3, 7],
  },
};

// ─── FULLERENE DATA ───────────────────────────────────────────────
const phi = (1 + Math.sqrt(5)) / 2;
const C20_NODES: GNode[] = (() => {
  const raw: [number, number, number][] = [[1,1,1],[1,1,-1],[1,-1,1],[1,-1,-1],[-1,1,1],[-1,1,-1],[-1,-1,1],[-1,-1,-1],[0,1/phi,phi],[0,1/phi,-phi],[0,-1/phi,phi],[0,-1/phi,-phi],[1/phi,phi,0],[1/phi,-phi,0],[-1/phi,phi,0],[-1/phi,-phi,0],[phi,0,1/phi],[phi,0,-1/phi],[-phi,0,1/phi],[-phi,0,-1/phi]];
  return raw.map(([x, y, z]) => ({ x: 190 + 100 * (x + z * 0.5), y: 150 - 100 * (y + z * 0.3) }));
})();
const C20_EDGES: GEdge[] = [[0,8],[0,12],[0,16],[1,9],[1,12],[1,17],[2,10],[2,13],[2,16],[3,11],[3,13],[3,17],[4,8],[4,14],[4,18],[5,9],[5,14],[5,19],[6,10],[6,15],[6,18],[7,11],[7,15],[7,19],[8,10],[9,11],[12,14],[13,15],[16,17],[18,19]];

const FULL_DATA: Record<string, { label: string; c: number; e: number; l: number; n5: number; n6: number; nodes: GNode[]; edges: GEdge[] }> = {
  c20: { label: 'C₂₀ — Dodekaéder', c: 20, e: 30, l: 12, n5: 12, n6: 0, nodes: C20_NODES, edges: C20_EDGES },
  c60: {
    label: 'C₆₀ — Focilabda (Buckminsterfullerén)', c: 60, e: 90, l: 32, n5: 12, n6: 20,
    nodes: Array.from({ length: 60 }, (_, t) => {
      const a = 2 * Math.PI * t / 12, b = Math.PI * (t % 5) / 5;
      const r = t < 12 ? 0.3 : t < 30 ? 0.7 : 1.0;
      return { x: 190 + 120 * r * Math.cos(a + b * 0.4), y: 150 + 120 * r * 0.6 * Math.sin(a + b * 0.4) };
    }),
    edges: Array.from({ length: 90 }, (_, i): GEdge => [i % 60, (i + 1) % 60]),
  },
  c28: {
    label: 'C₂₈', c: 28, e: 42, l: 16, n5: 12, n6: 4,
    nodes: Array.from({ length: 28 }, (_, i) => ({ x: 190 + 110 * Math.cos(2 * Math.PI * i / 28), y: 150 + 110 * 0.55 * Math.sin(2 * Math.PI * i / 28) })),
    edges: Array.from({ length: 28 }, (_, i): GEdge[] => [[i, (i + 1) % 28], [i, (i + 14) % 28]]).flat(),
  },
};

// ═══ TAB 1: Síkbarajzolhatóság ═══════════════════════════════════
function PlanarTab() {
  const [preset, setPreset] = useState<'k4' | 'k5' | 'k33' | 'petersen' | 'dodecahedron'>('k4');
  const [nodes, setNodes] = useState<GNode[]>(PLANAR_PRESETS['k4'].nodes.map(n => ({ ...n })));
  const [edges, setEdges] = useState<GEdge[]>(PLANAR_PRESETS['k4'].edges);
  const [dragging, setDragging] = useState<number | null>(null);
  const ref = useRef<HTMLCanvasElement>(null);

  function load(p: typeof preset) {
    setPreset(p);
    setNodes(PLANAR_PRESETS[p].nodes.map(n => ({ ...n })));
    setEdges(PLANAR_PRESETS[p].edges);
  }

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    drawPlanar(ctx, cv.width, cv.height, nodes, edges);
  }, [nodes, edges]);

  function onMouseDown(e: React.MouseEvent) {
    const cv = ref.current; if (!cv) return;
    const r = cv.getBoundingClientRect();
    const mx = e.clientX - r.left, my = e.clientY - r.top;
    const idx = nodes.findIndex(n => Math.hypot(n.x - mx, n.y - my) < NR + 4);
    if (idx !== -1) setDragging(idx);
  }
  function onMouseMove(e: React.MouseEvent) {
    if (dragging === null) return;
    const cv = ref.current; if (!cv) return;
    const r = cv.getBoundingClientRect();
    setNodes(ns => ns.map((n, i) => i === dragging ? { x: e.clientX - r.left, y: e.clientY - r.top } : n));
  }
  function onMouseUp() { setDragging(null); }

  function autoLayout() {
    const n = nodes.length; const W = 540, H = 360;
    const cx = W / 2, cy = H / 2, r = Math.min(W, H) * 0.38;
    let ns = nodes.map((_, i) => ({ x: cx + r * Math.cos(2 * Math.PI * i / n - Math.PI / 2), y: cy + r * Math.sin(2 * Math.PI * i / n - Math.PI / 2) }));
    for (let iter = 0; iter < 300; iter++) {
      const forces = ns.map(() => ({ x: 0, y: 0 }));
      const K = 80, rep = 3000;
      edges.forEach(([a, b]) => {
        const dx = ns[b].x - ns[a].x, dy = ns[b].y - ns[a].y;
        const d = Math.max(Math.hypot(dx, dy), 1), f = (d - K) / d * 0.3;
        forces[a].x += dx * f; forces[a].y += dy * f;
        forces[b].x -= dx * f; forces[b].y -= dy * f;
      });
      for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
        const dx = ns[j].x - ns[i].x, dy = ns[j].y - ns[i].y;
        const d2 = Math.max(dx * dx + dy * dy, 1), f = rep / d2;
        forces[i].x -= dx * f; forces[i].y -= dy * f;
        forces[j].x += dx * f; forces[j].y += dy * f;
      }
      ns = ns.map((nd, i) => ({ x: Math.max(30, Math.min(W - 30, nd.x + forces[i].x * 0.1)), y: Math.max(30, Math.min(H - 30, nd.y + forces[i].y * 0.1)) }));
    }
    setNodes(ns);
  }
  function circleLayout() {
    const n = nodes.length, cx = 270, cy = 180, r = 150;
    setNodes(Array.from({ length: n }, (_, i) => ({ x: cx + r * Math.cos(2 * Math.PI * i / n - Math.PI / 2), y: cy + r * Math.sin(2 * Math.PI * i / n - Math.PI / 2) })));
  }

  const cross = countCrossings(nodes, edges);
  const presetBtn = (p: string): React.CSSProperties => ({
    padding: '.3rem .7rem', borderRadius: 5, fontSize: '.78rem', cursor: 'pointer',
    background: preset === p ? '#38bdf8' : '#1a2233', color: preset === p ? '#000' : '#8ba3bc',
    border: `1px solid ${preset === p ? '#38bdf8' : '#2a3a50'}`, fontWeight: preset === p ? 600 : 400,
  });
  const outBtn: React.CSSProperties = { padding: '.25rem .65rem', fontSize: '.78rem', borderRadius: 5, cursor: 'pointer', background: 'transparent', color: '#38bdf8', border: '1px solid #38bdf8', marginTop: '.3rem' };
  const verdictStyle: React.CSSProperties = {
    fontSize: '1rem', fontWeight: 700, textAlign: 'center', padding: '.5rem', borderRadius: 8, marginTop: '.5rem',
    background: cross === 0 ? '#0a1f10' : '#1f0a0a', color: cross === 0 ? '#4ade80' : '#ef4444',
    border: `1px solid ${cross === 0 ? '#4ade80' : '#ef4444'}`,
  };

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Csúcsmozgató — terítsd ki a gráfot metszetmentesen!</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
          {(['k4', 'k5', 'k33', 'petersen', 'dodecahedron'] as const).map(p => (
            <button key={p} style={presetBtn(p)} onClick={() => load(p)}>
              {p === 'k4' ? 'K₄' : p === 'k5' ? 'K₅ (NEM)' : p === 'k33' ? 'K₃,₃ (NEM)' : p === 'petersen' ? 'Petersen' : 'Dodekaéder'}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <canvas ref={ref} width={540} height={360}
            style={{ borderRadius: '.5rem', display: 'block', cursor: dragging !== null ? 'grabbing' : 'grab', maxWidth: '100%' }}
            onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} />
          <div style={{ flex: 1, minWidth: 180 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.4rem', marginBottom: '.5rem' }}>
              {[['Metszetek', cross], ['Élek', edges.length], ['Csúcsok', nodes.length], ['3c−6', 3 * nodes.length - 6]].map(([l, v]) => (
                <div key={String(l)} style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: 8, padding: '.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#38bdf8' }}>{v}</div>
                  <div style={{ fontSize: '.7rem', color: '#8ba3bc' }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={verdictStyle}>{cross === 0 ? '✓ Metszetmentes — síkgráf (ebben az elrendezésben)' : `✗ ${cross} metszés — próbálj újra elrendezni!`}</div>
            <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
              <button style={outBtn} onClick={autoLayout}>Auto-elrendezés</button>
              <button style={outBtn} onClick={circleLayout}>Kör-elrendezés</button>
            </div>
            <RichTex html={String.raw`<div style="font-size:.8rem;color:#8ba3bc;margin-top:.7rem;line-height:1.7">
Húzd a csúcsokat az elrendezés változtatásához. Piros él = metszés van.<br><br>
<b style="color:#38bdf8">Def.:</b> G síkgráf, ha lerajzolható metszések nélkül.</div>`} />
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem', marginTop: '.75rem' }}>
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">Ismert síkgráfok</span>
<table class="cayley" style="width:100%;font-size:.82rem;margin-top:.4rem"><thead><tr><th>Gráf</th><th>Síkgráf?</th><th>Megjegyzés</th></tr></thead><tbody>
<tr><td>\(K_4\)</td><td style="color:#4ade80">✓ igen</td><td>Tetraéder</td></tr>
<tr><td>\(K_5\)</td><td style="color:#ef4444">✗ nem</td><td>\(3\cdot5-6=9 &lt; 10\) él</td></tr>
<tr><td>\(K_{3,3}\)</td><td style="color:#ef4444">✗ nem</td><td>\(2\cdot6-4=8 &lt; 9\) (páros)</td></tr>
<tr><td>Petersen-gráf</td><td style="color:#ef4444">✗ nem</td><td>Tartalmaz \(K_{3,3}\) felosztást</td></tr>
<tr><td>Minden fa</td><td style="color:#4ade80">✓ igen</td><td>\(|E|=|V|-1 \le 3|V|-6\)</td></tr>
<tr><td>Dodekaéder</td><td style="color:#4ade80">✓ igen</td><td>20 csúcs, 30 él</td></tr>
</tbody></table>`} />
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">Jordan-tétel és planaritás</span>
<div style="font-size:.83rem;color:#c8d8e8;line-height:1.8;margin-top:.4rem">
<b style="color:#38bdf8">Jordan-tétel:</b> Minden egyszerű zárt görbe a sík két tartományra osztja — belső és külső.<br><br>
Ez teszi lehetővé a "lap" fogalom precíz definiálását síkgráfokban.<br><br>
<b style="color:#38bdf8">Gömb ↔ sík:</b> Sztereografikus projekcióval sík ↔ gömb, ezért a sík és a gömb planáris gráfjai megegyeznek.</div>`} />
      </div>
    </div>
  );
}

// ═══ TAB 2: Euler-képlet ════════════════════════════════════════
function EulerTab() {
  const [preset, setPreset] = useState<'cube' | 'tetra' | 'k4' | 'wheel5' | 'custom'>('cube');
  const [customNodes, setCustomNodes] = useState<GNode[]>([]);
  const [customEdges, setCustomEdges] = useState<GEdge[]>([]);
  const [edgeStart, setEdgeStart] = useState<number | null>(null);
  const [surfC, setSurfC] = useState(8), [surfE, setSurfE] = useState(12), [surfL, setSurfL] = useState(6);
  const ref = useRef<HTMLCanvasElement>(null);

  const isCustom = preset === 'custom';
  const data = isCustom ? { nodes: customNodes, edges: customEdges, faces: Math.max(1, customEdges.length - customNodes.length + 2), desc: '' } : EULER_PRESETS[preset];
  const c = data.nodes.length, e = data.edges.length, l = data.faces ?? (isCustom ? data.faces : 0);
  const sum = l + c - e;

  function renderEuler() {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
    if (!data.nodes.length) {
      ctx.fillStyle = '#8ba3bc'; ctx.font = '13px monospace'; ctx.textAlign = 'center';
      ctx.fillText('Kattints csúcsok hozzáadásához, majd csúcsokon kattintva éleket', W / 2, H / 2 - 10);
      ctx.fillText('húzz köztük.', W / 2, H / 2 + 10);
      return;
    }
    data.edges.forEach(([a, b]) => { ctx.strokeStyle = '#2a5a8a'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(data.nodes[a].x, data.nodes[a].y); ctx.lineTo(data.nodes[b].x, data.nodes[b].y); ctx.stroke(); });
    data.nodes.forEach((n, i) => {
      ctx.beginPath(); ctx.arc(n.x, n.y, NR, 0, 2 * Math.PI);
      ctx.fillStyle = '#1e3a5f'; ctx.fill(); ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(i + 1), n.x, n.y);
    });
  }
  useEffect(() => { renderEuler(); }, [preset, customNodes, customEdges]); // eslint-disable-line react-hooks/exhaustive-deps

  function onCanvasClick(e: React.MouseEvent) {
    if (!isCustom) return;
    const cv = ref.current; if (!cv) return;
    const r = cv.getBoundingClientRect();
    const mx = e.clientX - r.left, my = e.clientY - r.top;
    const hit = customNodes.findIndex(n => Math.hypot(n.x - mx, n.y - my) < NR + 4);
    if (hit === -1) {
      if (edgeStart !== null) { setEdgeStart(null); return; }
      setCustomNodes(ns => [...ns, { x: mx, y: my }]);
    } else {
      if (edgeStart === null) { setEdgeStart(hit); }
      else {
        if (edgeStart !== hit && !customEdges.some(([a, b]) => (a === edgeStart && b === hit) || (a === hit && b === edgeStart))) {
          setCustomEdges(es => [...es, [edgeStart, hit]]);
        }
        setEdgeStart(null);
      }
    }
  }

  const presetBtn = (p: string): React.CSSProperties => ({
    padding: '.3rem .7rem', borderRadius: 5, fontSize: '.78rem', cursor: 'pointer',
    background: preset === p ? '#38bdf8' : '#1a2233', color: preset === p ? '#000' : '#8ba3bc',
    border: `1px solid ${preset === p ? '#38bdf8' : '#2a3a50'}`, fontWeight: preset === p ? 600 : 400,
  });
  const surfSig = surfL + surfC - surfE;
  const surfNames: Record<number, string> = { 2: 'Sík/Gömb', 0: 'Tórusz', 1: 'Projektív sík', '-2': 'Kettős tórusz' };

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Euler poliédertétele — l + c − e = 2</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
          {(['cube', 'tetra', 'k4', 'wheel5', 'custom'] as const).map(p => (
            <button key={p} style={presetBtn(p)} onClick={() => { setPreset(p); if (p === 'custom') { setCustomNodes([]); setCustomEdges([]); } }}>
              {p === 'cube' ? 'Kocka' : p === 'tetra' ? 'Tetraéder' : p === 'k4' ? 'K₄' : p === 'wheel5' ? 'Kerék W₅' : 'Egyedi rajz'}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <canvas ref={ref} width={400} height={300}
              style={{ borderRadius: '.5rem', display: 'block', cursor: isCustom ? 'crosshair' : 'default', maxWidth: '100%' }}
              onClick={isCustom ? onCanvasClick : undefined} />
            {isCustom && <div style={{ fontSize: '.75rem', color: '#8ba3bc', marginTop: '.3rem' }}>Egyedi módban: kattints csúcshoz (üres: új; csúcson: él indul)</div>}
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ background: '#0a0f14', border: '1px solid #38bdf8', borderRadius: 8, padding: '.8rem 1.2rem', textAlign: 'center', fontSize: '1.3rem', fontWeight: 700, color: sum === 2 ? '#4ade80' : '#f97316', marginBottom: '.75rem' }}>
              l + c − e = {l} + {c} − {e} = {sum}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '.4rem', marginBottom: '.5rem' }}>
              {[['Lapok (l)', l], ['Csúcsok (c)', c], ['Élek (e)', e]].map(([label, val]) => (
                <div key={String(label)} style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: 8, padding: '.6rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#38bdf8' }}>{val}</div>
                  <div style={{ fontSize: '.7rem', color: '#8ba3bc' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: '.83rem', color: '#c8d8e8', lineHeight: 1.75 }}>
              {c > 0 && <div>e={e} ≤ 3c−6={3*c-6}: <span style={{ color: e <= 3 * c - 6 ? '#4ade80' : '#ef4444' }}>{e <= 3 * c - 6 ? '✓' : '✗ (nem síkgráf!)'}</span></div>}
            </div>
            <RichTex html={String.raw`<div style="font-size:.83rem;color:#c8d8e8;line-height:1.75;margin-top:.4rem">
<b style="color:#38bdf8">Következmények (egyszerű síkgráf):</b><br>
\(e \le 3c - 6\)<br>
\(e \le 2c - 4\) (ha páros, azaz nincs háromszög)</div>`} />
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem', marginTop: '.75rem' }}>
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">Euler II. tétele — Fullerén-kényszer</span>
<div style="font-size:.83rem;color:#c8d8e8;line-height:1.8;margin-top:.4rem">
3-reguláris síkgráfban, ahol minden él egy kör része:
\[\sum_{i \ge 3}(6-i)\cdot n_i = 12\]
ahol \(n_i\) az \(i\)-szögű lapok száma.<br><br>
Ha csak 5- és 6-szögek vannak (\(n_5, n_6\)):
\[(6-5)\cdot n_5 + (6-6)\cdot n_6 = 12\]
\[\boxed{n_5 = 12}\]
Mindig pontosan 12 ötszög van!</div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Euler-karakterisztika kalkulátor</span>
          <div style={{ marginTop: '.5rem' }}>
            {[['Csúcsok c', surfC, setSurfC, 4, 20], ['Élek e', surfE, setSurfE, 3, 40], ['Lapok l', surfL, setSurfL, 1, 20]].map(([label, val, setter, min, max]) => (
              <div key={String(label)} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', fontSize: '.82rem', color: '#8ba3bc', marginBottom: '.4rem' }}>
                <label style={{ width: 80 }}>{String(label)}:</label>
                <input type="range" min={Number(min)} max={Number(max)} value={Number(val)}
                  onChange={e => (setter as (v: number) => void)(+e.target.value)}
                  style={{ flex: 1, accentColor: '#38bdf8' }} />
                <span>{String(val)}</span>
              </div>
            ))}
            <div style={{ background: '#0a0f14', border: '1px solid #38bdf8', borderRadius: 8, padding: '.6rem 1rem', textAlign: 'center', fontSize: '1.1rem', fontWeight: 700, color: surfSig === 2 ? '#4ade80' : surfSig === 0 ? '#f97316' : '#a78bfa', marginBottom: '.4rem' }}>
              l+c−e = {surfL}+{surfC}−{surfE} = {surfSig}
            </div>
            <div style={{ fontSize: '.83rem', color: '#c8d8e8', lineHeight: 1.7 }}>
              Euler-karakterisztika: <b style={{ color: '#38bdf8' }}>σ = {surfSig}</b><br />
              Felület: <b style={{ color: '#f97316' }}>{surfNames[surfSig] ?? 'Általános felület'}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══ TAB 3: Kuratowski ══════════════════════════════════════════
function drawK5Canvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
  const cx = W / 2, cy = H / 2, r = Math.min(W, H) * 0.38;
  const nodes = Array.from({ length: 5 }, (_, i) => ({ x: cx + r * Math.cos(2 * Math.PI * i / 5 - Math.PI / 2), y: cy + r * Math.sin(2 * Math.PI * i / 5 - Math.PI / 2) }));
  for (let i = 0; i < 5; i++) for (let j = i + 1; j < 5; j++) { ctx.strokeStyle = '#2a5a8a'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke(); }
  nodes.forEach((n, i) => { ctx.beginPath(); ctx.arc(n.x, n.y, 12, 0, 2 * Math.PI); ctx.fillStyle = '#1e3a5f'; ctx.fill(); ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2; ctx.stroke(); ctx.fillStyle = '#fff'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(i + 1), n.x, n.y); });
}
function drawK33Canvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
  const topY = 60, botY = 160, xs = [80, 140, 200];
  const top = xs.map(x => ({ x: x + 20, y: topY })), bot = xs.map(x => ({ x: x + 20, y: botY }));
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { ctx.strokeStyle = '#2a5a8a'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(top[i].x, top[i].y); ctx.lineTo(bot[j].x, bot[j].y); ctx.stroke(); }
  const labels = ['A', 'B', 'C', 'X', 'Y', 'Z'];
  [...top, ...bot].forEach((n, i) => { ctx.beginPath(); ctx.arc(n.x, n.y, 12, 0, 2 * Math.PI); ctx.fillStyle = i < 3 ? '#1e3a5f' : '#1f2a0a'; ctx.fill(); ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2; ctx.stroke(); ctx.fillStyle = '#fff'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(labels[i], n.x, n.y); });
  ctx.fillStyle = '#38bdf8'; ctx.font = '10px monospace'; ctx.textAlign = 'center';
  ctx.fillText('Házak (A,B,C)', 140, 30); ctx.fillText('Kutak (X,Y,Z)', 140, 200);
}

function KuratowskiTab() {
  const [preset, setPreset] = useState<'k5_subdiv' | 'k33_subdiv' | 'petersen_subdiv'>('k5_subdiv');
  const refK5 = useRef<HTMLCanvasElement>(null), refK33 = useRef<HTMLCanvasElement>(null);
  const refMain = useRef<HTMLCanvasElement>(null);

  const kd = KUR_PRESETS[preset];

  useEffect(() => {
    if (refK5.current) drawK5Canvas(refK5.current);
    if (refK33.current) drawK33Canvas(refK33.current);
  }, []);
  useEffect(() => {
    if (refMain.current) drawSimpleGraph(refMain.current, kd.nodes, kd.edges, kd.highlight);
  }, [preset]);

  const presetBtn = (p: string): React.CSSProperties => ({
    padding: '.3rem .7rem', borderRadius: 5, fontSize: '.78rem', cursor: 'pointer',
    background: preset === p ? '#38bdf8' : '#1a2233', color: preset === p ? '#000' : '#8ba3bc',
    border: `1px solid ${preset === p ? '#38bdf8' : '#2a3a50'}`, fontWeight: preset === p ? 600 : 400,
  });

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Kuratowski tétele — K₅ és K₃,₃ mint akadályok</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '.5rem' }}>
          <div>
            <div style={{ fontSize: '.78rem', color: '#38bdf8', fontWeight: 600, marginBottom: '.3rem' }}>K₅ — teljes gráf 5 csúcson</div>
            <canvas ref={refK5} width={280} height={200} style={{ borderRadius: '.5rem', display: 'block', width: '100%' }} />
            <div style={{ fontSize: '.75rem', color: '#8ba3bc', marginTop: '.3rem' }}>10 él, 5 csúcs: 3·5−6=9 &lt; 10 → NEM síkgráf</div>
          </div>
          <div>
            <div style={{ fontSize: '.78rem', color: '#38bdf8', fontWeight: 600, marginBottom: '.3rem' }}>K₃,₃ — három ház, három kút</div>
            <canvas ref={refK33} width={280} height={200} style={{ borderRadius: '.5rem', display: 'block', width: '100%' }} />
            <div style={{ fontSize: '.75rem', color: '#8ba3bc', marginTop: '.3rem' }}>9 él, 6 csúcs: 2·6−4=8 &lt; 9 (páros) → NEM síkgráf</div>
          </div>
        </div>
        <RichTex html={String.raw`<div style="font-size:.88rem;color:#c8d8e8;line-height:1.8;margin-top:1rem;padding:.8rem;background:#0a0f14;border-radius:8px;border:1px solid #1e2a38">
<b style="color:#38bdf8">Kuratowski tétele (1930):</b><br>
G pontosan akkor síkba teríthető, ha <em>nem tartalmaz</em> \(K_5\)-tel vagy \(K_{3,3}\)-mal <b>homeomorf</b> részgráfot.<br>
Ekvivalensen (Wagner, 1937): G pontosan akkor planáris, ha sem \(K_5\), sem \(K_{3,3}\) nem <b>minorja</b>.</div>`} />
      </div>
      <div className="info-box" style={{ marginTop: '.75rem' }}>
        <span className="lbl" style={{ color: '#38bdf8' }}>Felosztás (subdivision) és minor — interaktív</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
          {(['k5_subdiv', 'k33_subdiv', 'petersen_subdiv'] as const).map(p => (
            <button key={p} style={presetBtn(p)} onClick={() => setPreset(p)}>
              {p === 'k5_subdiv' ? 'K₅ felosztása' : p === 'k33_subdiv' ? 'K₃,₃ felosztása' : 'Petersen → K₃,₃'}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <canvas ref={refMain} width={520} height={280} style={{ borderRadius: '.5rem', display: 'block', maxWidth: '100%' }} />
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontSize: '.83rem', color: '#c8d8e8', lineHeight: 1.75 }}>{kd.desc}</div>
            <RichTex html={String.raw`<div style="font-size:.83rem;color:#c8d8e8;line-height:1.75;margin-top:.7rem">
<b style="color:#38bdf8">Redukció:</b> 2-fokú csúcs törlése + szomszédok összekötése.<br>
<b style="color:#38bdf8">Minor:</b> él-összehúzás, csúcs/él törlés.</div>`} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══ TAB 4: Felületek ════════════════════════════════════════════
function drawSphereCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  const W = canvas.width, H = canvas.height, cx = W / 2, cy = H / 2, r = 70;
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
  const grad = ctx.createRadialGradient(cx - 20, cy - 20, 10, cx, cy, r);
  grad.addColorStop(0, '#1e5a8a'); grad.addColorStop(1, '#0a1a2a');
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, 2 * Math.PI); ctx.fillStyle = grad; ctx.fill();
  ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
  ctx.strokeStyle = 'rgba(56,189,248,0.3)'; ctx.lineWidth = 1;
  for (let lat = -60; lat <= 60; lat += 30) { const yr = cy + r * Math.sin(lat * Math.PI / 180); const xr = r * Math.cos(lat * Math.PI / 180); ctx.beginPath(); ctx.ellipse(cx, yr, xr, xr * 0.3, 0, 0, 2 * Math.PI); ctx.stroke(); }
  ctx.fillStyle = '#38bdf8'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.fillText('σ = 2', cx, H - 10);
}
function drawTorusCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  const W = canvas.width, H = canvas.height, cx = W / 2, cy = H / 2, R = 60, r = 25;
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
  for (let t = 0; t < 24; t++) { const ang = 2 * Math.PI * t / 24; ctx.beginPath(); ctx.ellipse(cx, cy, R + r * Math.cos(ang), r * 0.4, 0, 0, 2 * Math.PI); ctx.strokeStyle = `rgba(249,115,22,${0.15 + 0.15 * Math.abs(Math.cos(ang))})`; ctx.lineWidth = 1; ctx.stroke(); }
  ctx.beginPath(); ctx.ellipse(cx, cy, R + r, r * 0.4, 0, 0, 2 * Math.PI); ctx.strokeStyle = '#f97316'; ctx.lineWidth = 2; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(cx, cy, R - r, r * 0.4, 0, 0, 2 * Math.PI); ctx.strokeStyle = '#f97316'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#f97316'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.fillText('σ = 0', cx, H - 10);
}
function drawMobiusCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  const W = canvas.width, H = canvas.height, cx = W / 2, cy = H / 2, r = 60, steps = 80;
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = '#a78bfa'; ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i <= steps; i++) { const t = 2 * Math.PI * i / steps; const x = cx + (r + 20 * Math.cos(t / 2)) * Math.cos(t); const y = cy + (r + 20 * Math.cos(t / 2)) * Math.sin(t) * 0.4 + 20 * Math.sin(t / 2); i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
  ctx.stroke();
  ctx.beginPath();
  for (let i = 0; i <= steps; i++) { const t = 2 * Math.PI * i / steps; const x = cx + (r - 20 * Math.cos(t / 2)) * Math.cos(t); const y = cy + (r - 20 * Math.cos(t / 2)) * Math.sin(t) * 0.4 - 20 * Math.sin(t / 2); i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
  ctx.stroke();
  ctx.fillStyle = '#a78bfa'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.fillText('σ = 1', cx, H - 10);
}
function drawK7Torus(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  const W = canvas.width, H = canvas.height, cx = W / 2, cy = H / 2, r = 85;
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
  const colors = ['#1e6aaf', '#166534', '#7c2d12', '#4a1d96', '#5e4000', '#1a4a3a', '#5a1a4a'];
  const nodes = Array.from({ length: 7 }, (_, i) => ({ x: cx + r * Math.cos(2 * Math.PI * i / 7 - Math.PI / 2), y: cy + r * Math.sin(2 * Math.PI * i / 7 - Math.PI / 2) }));
  for (let i = 0; i < 7; i++) for (let j = i + 1; j < 7; j++) { ctx.strokeStyle = 'rgba(56,189,248,0.25)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke(); }
  nodes.forEach((n, i) => { ctx.beginPath(); ctx.arc(n.x, n.y, 12, 0, 2 * Math.PI); ctx.fillStyle = colors[i]; ctx.fill(); ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke(); ctx.fillStyle = '#fff'; ctx.font = 'bold 10px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(i + 1), n.x, n.y); });
  ctx.fillStyle = '#8ba3bc'; ctx.font = '10px monospace'; ctx.textAlign = 'center'; ctx.fillText('K₇: 7 csúcs, 21 él (tóruszra síkgráf!)', cx, H - 6);
}

function SurfacesTab() {
  const refSphere = useRef<HTMLCanvasElement>(null);
  const refTorus = useRef<HTMLCanvasElement>(null);
  const refMobius = useRef<HTMLCanvasElement>(null);
  const refK7 = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (refSphere.current) drawSphereCanvas(refSphere.current);
    if (refTorus.current) drawTorusCanvas(refTorus.current);
    if (refMobius.current) drawMobiusCanvas(refMobius.current);
    if (refK7.current) drawK7Torus(refK7.current);
  }, []);

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Euler-karakterisztika különböző felületeken</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem', marginTop: '.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <canvas ref={refSphere} width={220} height={180} style={{ borderRadius: '.5rem', display: 'block', width: '100%' }} />
            <b style={{ color: '#38bdf8' }}>Gömb / Sík</b><br />
            <span style={{ fontSize: '.8rem', color: '#8ba3bc' }}>σ = 2, l+c-e=2 · K₇ NEM rajzolható</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <canvas ref={refTorus} width={220} height={180} style={{ borderRadius: '.5rem', display: 'block', width: '100%' }} />
            <b style={{ color: '#f97316' }}>Tórusz</b><br />
            <span style={{ fontSize: '.8rem', color: '#8ba3bc' }}>σ = 0, l+c-e=0 · K₇ rajzolható!</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <canvas ref={refMobius} width={220} height={180} style={{ borderRadius: '.5rem', display: 'block', width: '100%' }} />
            <b style={{ color: '#a78bfa' }}>Möbius-szalag</b><br />
            <span style={{ fontSize: '.8rem', color: '#8ba3bc' }}>Nem orientálható · σ = 1</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem', marginTop: '.75rem' }}>
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#38bdf8">Felületek összehasonlítása</span>
<table class="cayley" style="width:100%;font-size:.82rem;margin-top:.4rem"><thead><tr><th>Felület</th><th>\(\sigma\)</th><th>Max. teljes gráf</th><th>Orientálható?</th></tr></thead><tbody>
<tr><td>Sík/Gömb</td><td>2</td><td>\(K_4\)</td><td>igen</td></tr>
<tr><td>Tórusz</td><td>0</td><td>\(K_7\)</td><td>igen</td></tr>
<tr><td>Kettős tórusz</td><td>−2</td><td>\(K_8\)</td><td>igen</td></tr>
<tr><td>Projektív sík</td><td>1</td><td>\(K_6\)</td><td>nem</td></tr>
<tr><td>Klein-palack</td><td>0</td><td>\(K_6\)</td><td>nem</td></tr>
</tbody></table>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>K₇ a tóruszra rajzolva</span>
          <canvas ref={refK7} width={300} height={200} style={{ borderRadius: '.5rem', display: 'block', marginTop: '.5rem', width: '100%' }} />
          <div style={{ fontSize: '.75rem', color: '#8ba3bc', marginTop: '.4rem' }}>K₇: 7 csúcs, 21 él, σ=0 esetén l=21−7+0=14 ✓</div>
        </div>
      </div>
    </div>
  );
}

// ═══ TAB 5: Fullerének ══════════════════════════════════════════
function FullerenesTab() {
  const [preset, setPreset] = useState<'c20' | 'c60' | 'c28'>('c20');
  const [eu2, setEu2] = useState({ n3: 0, n4: 0, n5: 12, n6: 20, n7: 0 });
  const [eu2Result, setEu2Result] = useState('');
  const refFull = useRef<HTMLCanvasElement>(null);
  const refDual = useRef<HTMLCanvasElement>(null);

  const fd = FULL_DATA[preset];

  function renderFull() {
    const cv = refFull.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
    fd.edges.forEach(([a, b]) => {
      if (a >= fd.nodes.length || b >= fd.nodes.length) return;
      ctx.strokeStyle = '#2a5a8a'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(fd.nodes[a].x, fd.nodes[a].y); ctx.lineTo(fd.nodes[b].x, fd.nodes[b].y); ctx.stroke();
    });
    fd.nodes.forEach(n => { ctx.beginPath(); ctx.arc(n.x, n.y, 5, 0, 2 * Math.PI); ctx.fillStyle = '#38bdf8'; ctx.fill(); });
  }
  function renderDual() {
    const cv = refDual.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);
    const sq = [{ x: 70, y: 60 }, { x: 150, y: 60 }, { x: 150, y: 140 }, { x: 70, y: 140 }];
    const sqe: GEdge[] = [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2]];
    ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5;
    sqe.forEach(([a, b]) => { ctx.beginPath(); ctx.moveTo(sq[a].x, sq[a].y); ctx.lineTo(sq[b].x, sq[b].y); ctx.stroke(); });
    sq.forEach(n => { ctx.beginPath(); ctx.arc(n.x, n.y, 8, 0, 2 * Math.PI); ctx.fillStyle = '#1e3a5f'; ctx.fill(); ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.2; ctx.stroke(); });
    const dual = [{ x: 95, y: 90 }, { x: 145, y: 90 }, { x: 170, y: 100 }];
    const duale: GEdge[] = [[0, 1], [0, 2]];
    ctx.strokeStyle = '#f97316'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]);
    duale.forEach(([a, b]) => { ctx.beginPath(); ctx.moveTo(dual[a].x, dual[a].y); ctx.lineTo(dual[b].x, dual[b].y); ctx.stroke(); });
    ctx.setLineDash([]);
    dual.forEach(n => { ctx.beginPath(); ctx.arc(n.x, n.y, 8, 0, 2 * Math.PI); ctx.fillStyle = '#5e2d00'; ctx.fill(); ctx.strokeStyle = '#f97316'; ctx.lineWidth = 1.5; ctx.stroke(); });
    ctx.fillStyle = '#38bdf8'; ctx.font = '9px monospace'; ctx.fillText('G', 40, 100);
    ctx.fillStyle = '#f97316'; ctx.fillText('G*', 200, 80);
  }

  useEffect(() => { renderFull(); }, [preset]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { renderDual(); }, []);

  function checkEuler2() {
    const ns = [eu2.n3, eu2.n4, eu2.n5, eu2.n6, eu2.n7];
    const coefs = [3, 2, 1, 0, -1];
    const sum = ns.reduce((s, n, i) => s + coefs[i] * n, 0);
    setEu2Result(`∑(6−i)·nᵢ = 3·${ns[0]} + 2·${ns[1]} + 1·${ns[2]} + 0·${ns[3]} + (−1)·${ns[4]} = ${sum} ${sum === 12 ? '✓ Euler II. teljesül!' : '✗ Nem teljesül Euler II. tétele'}`);
  }

  const presetBtn = (p: string): React.CSSProperties => ({
    padding: '.3rem .7rem', borderRadius: 5, fontSize: '.78rem', cursor: 'pointer',
    background: preset === p ? '#38bdf8' : '#1a2233', color: preset === p ? '#000' : '#8ba3bc',
    border: `1px solid ${preset === p ? '#38bdf8' : '#2a3a50'}`, fontWeight: preset === p ? 600 : 400,
  });
  const numInput = (key: keyof typeof eu2) => (
    <input type="number" min={0} value={eu2[key]}
      onChange={e => setEu2(v => ({ ...v, [key]: +e.target.value }))}
      style={{ background: '#0a0f14', color: '#fff', border: '1px solid #1e2a38', borderRadius: 4, padding: '.2rem .4rem', width: 60, fontSize: '.82rem' }} />
  );

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Fullerének — ∑(6−i)nᵢ = 12</span>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
          {(['c20', 'c60', 'c28'] as const).map(p => (
            <button key={p} style={presetBtn(p)} onClick={() => setPreset(p)}>
              {p === 'c20' ? 'C₂₀ (dodekaéder)' : p === 'c60' ? 'C₆₀ (focilabda)' : 'C₂₈'}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <canvas ref={refFull} width={380} height={300} style={{ borderRadius: '.5rem', display: 'block', maxWidth: '100%' }} />
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontSize: '.85rem', color: '#c8d8e8', lineHeight: 1.85 }}>
              <b style={{ color: '#38bdf8' }}>{fd.label}</b><br />
              Csúcsok (c): <b>{fd.c}</b><br />
              Élek (e): <b>{fd.e}</b><br />
              Lapok (l): <b>{fd.l}</b><br />
              Ötszögek (n₅): <b style={{ color: '#f97316' }}>{fd.n5}</b> — mindig 12!<br />
              Hatszögek (n₆): <b>{fd.n6}</b>
            </div>
            <div style={{ background: '#0a0f14', border: '1px solid #38bdf8', borderRadius: 8, padding: '.6rem 1rem', textAlign: 'center', fontSize: '1.1rem', fontWeight: 700, color: fd.l + fd.c - fd.e === 2 ? '#4ade80' : '#ef4444', marginTop: '.5rem' }}>
              l+c−e = {fd.l}+{fd.c}−{fd.e} = {fd.l + fd.c - fd.e}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem', marginTop: '.75rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Euler II. ellenőrző</span>
          <div style={{ fontSize: '.8rem', color: '#8ba3bc', marginBottom: '.5rem', marginTop: '.4rem' }}>Add meg a lapok számát típusonként:</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', alignItems: 'center', marginBottom: '.5rem' }}>
            {(['n3', 'n4', 'n5', 'n6', 'n7'] as const).map((k, i) => <span key={k} style={{ fontSize: '.8rem', color: '#8ba3bc' }}>{i + 3}-szögek: {numInput(k)}</span>)}
          </div>
          <button onClick={checkEuler2}
            style={{ padding: '.25rem .65rem', fontSize: '.78rem', borderRadius: 5, cursor: 'pointer', background: '#38bdf8', color: '#000', border: 'none', fontWeight: 600 }}>
            Ellenőrzés
          </button>
          {eu2Result && <div style={{ fontSize: '.83rem', marginTop: '.5rem', color: '#c8d8e8' }}>{eu2Result}</div>}
        </div>
        <div className="info-box">
          <span className="lbl" style={{ color: '#38bdf8' }}>Duális gráf</span>
          <RichTex html={String.raw`<div style="font-size:.83rem;color:#c8d8e8;line-height:1.8;margin-top:.4rem">
Síkgráf \(G\) <b>duálisa</b> \(G^*\): minden laphoz egy csúcs, két csúcs összekötve ha a lapok szomszédosak.<br><br>
<b style="color:#38bdf8">Tulajdonságok:</b><br>
&bull; \((G^*)^* = G\) (összefüggő esetben)<br>
&bull; A kocka duálisa az oktaéder, a dodekaéderé az ikozaéder<br>
&bull; Euler: \(l^*+c^*-e^* = 2\) ✓</div>`} />
          <canvas ref={refDual} width={260} height={160} style={{ borderRadius: '.5rem', display: 'block', marginTop: '.7rem' }} />
        </div>
      </div>
    </div>
  );
}

// ═══ Main ═════════════════════════════════════════════════════════
const TABS: Tab[] = [
  { id: 'planar', label: 'Síkbarajzolhatóság', content: <PlanarTab /> },
  { id: 'euler', label: 'Euler-képlet', content: <EulerTab /> },
  { id: 'kuratowski', label: 'Kuratowski tétele', content: <KuratowskiTab /> },
  { id: 'surfaces', label: 'Felületek', content: <SurfacesTab /> },
  { id: 'fuller', label: 'Fullerének', content: <FullerenesTab /> },
];

export default function DimatCh17() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika — 17. fejezet</p>
      <h1 className="ila__title">Síkgráfok</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
