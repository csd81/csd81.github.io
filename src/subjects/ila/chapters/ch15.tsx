import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, Cols, type Tab } from '../components/kit';

// ── accent color ──────────────────────────────────────────────────────────────
const ACC = '#c084fc';

// ── shared graph draw helpers ─────────────────────────────────────────────────
function isConnected(n: number, edges: [number, number][]): boolean {
  if (n === 0) return true;
  const adj: number[][] = Array.from({ length: n }, () => []);
  edges.forEach(([a, b]) => { adj[a].push(b); adj[b].push(a); });
  const vis = new Array(n).fill(false);
  const q = [0]; vis[0] = true; let cnt = 1;
  while (q.length) { const v = q.shift()!; for (const u of adj[v]) if (!vis[u]) { vis[u] = true; cnt++; q.push(u); } }
  return cnt === n;
}
function hasCycle(n: number, edges: [number, number][]): boolean {
  const adj: { to: number; ei: number }[][] = Array.from({ length: n }, () => []);
  edges.forEach(([a, b], i) => { adj[a].push({ to: b, ei: i }); adj[b].push({ to: a, ei: i }); });
  const vis = new Array(n).fill(false);
  function dfs(v: number, pe: number): boolean {
    vis[v] = true;
    for (const { to, ei } of adj[v]) {
      if (ei === pe) continue;
      if (vis[to]) return true;
      if (dfs(to, ei)) return true;
    }
    return false;
  }
  for (let i = 0; i < n; i++) if (!vis[i] && dfs(i, -1)) return true;
  return false;
}
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
  color = '#4a3060', width = 1.5,
) {
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
  ctx.strokeStyle = color; ctx.lineWidth = width; ctx.stroke();
}

// ══ TAB 1: Fák — interactive tree checker ════════════════════════════════════

const FA_POS = [
  { x: 110, y: 120 }, { x: 220, y: 55 }, { x: 330, y: 55 },
  { x: 440, y: 120 }, { x: 330, y: 185 }, { x: 220, y: 185 },
];
const FA_INIT: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]];

type PropBadge = { ok: boolean; text: string };
function PropChip({ ok, text }: PropBadge) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '.3rem',
      padding: '.2rem .55rem', borderRadius: '.3rem', fontSize: '.73rem', fontWeight: 600, margin: '.1rem',
      background: ok ? '#041f10' : '#1a0000',
      border: `1px solid ${ok ? '#34d399' : '#ef4444'}`,
      color: ok ? '#34d399' : '#ef4444',
    }}>
      {ok ? '✓' : '✗'} {text}
    </span>
  );
}

function FaCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [edges, setEdges] = useState<[number, number][]>(FA_INIT);
  const [sel, setSel] = useState(-1);
  const [props, setProps] = useState<PropBadge[]>([]);
  const [isTree, setIsTree] = useState(false);

  function faDraw(edgeList: [number, number][], selIdx: number) {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    const n = FA_POS.length;
    const conn = isConnected(n, edgeList);
    const cyclic = hasCycle(n, edgeList);
    const tree = conn && !cyclic;
    edgeList.forEach(([a, b]) => drawEdge(ctx, FA_POS[a].x, FA_POS[a].y, FA_POS[b].x, FA_POS[b].y, tree ? '#7c3aed' : '#ef4444', 2));
    FA_POS.forEach((p, i) => drawNode(ctx, p.x, p.y, String(i + 1), i === selIdx ? '#4a1d96' : '#1a1040', i === selIdx ? '#e9d5ff' : ACC));
    setProps([
      { ok: conn, text: 'Összefüggő' },
      { ok: !cyclic, text: 'Körmentes' },
      { ok: edgeList.length === n - 1, text: `|E|=${edgeList.length} = n−1=${n - 1}` },
    ]);
    setIsTree(tree);
  }

  useEffect(() => { faDraw(edges, sel); }, [edges, sel]);

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const cv = ref.current; if (!cv) return;
    const r = cv.getBoundingClientRect();
    const mx = (e.clientX - r.left) * (cv.width / r.width);
    const my = (e.clientY - r.top) * (cv.height / r.height);
    let hit = -1;
    FA_POS.forEach((p, i) => { if (Math.hypot(p.x - mx, p.y - my) < 18) hit = i; });
    if (hit < 0) { setSel(-1); return; }
    if (sel < 0) { setSel(hit); return; }
    if (sel === hit) { setSel(-1); return; }
    const a = Math.min(sel, hit), b = Math.max(sel, hit);
    const idx = edges.findIndex(([x, y]) => x === a && y === b);
    if (idx >= 0) setEdges(prev => prev.filter((_, i) => i !== idx));
    else setEdges(prev => [...prev, [a, b]]);
    setSel(-1);
  }

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Interaktív fa-ellenőrző — kattints két csúcsra az él hozzáadásához/eltávolításához</span>
      <canvas ref={ref} width={540} height={240}
        style={{ borderRadius: '.4rem', background: '#0d0e1f', cursor: 'crosshair', maxWidth: '100%', display: 'block' }}
        onClick={handleClick} />
      <div style={{ marginTop: '.5rem' }}>
        {props.map((p, i) => <PropChip key={i} {...p} />)}
        {props.length > 0 && (
          <strong style={{ color: isTree ? ACC : '#ef4444', marginLeft: '.5rem' }}>
            {isTree ? '✓ Fa!' : '✗ Nem fa'}
          </strong>
        )}
      </div>
      <div style={{ marginTop: '.5rem', display: 'flex', gap: '.5rem' }}>
        <button className="op-btn" style={{ borderColor: ACC, color: ACC }} onClick={() => { setEdges(FA_INIT); setSel(-1); }}>Visszaállít (fa)</button>
        <button className="op-btn" onClick={() => { setEdges([]); setSel(-1); }}>Élek törlése</button>
      </div>
    </div>
  );
}

// ══ TAB 2: Euler — Königsberg + interactive checker ══════════════════════════

const KB_POS = [
  { x: 65, y: 90, l: 'A' }, { x: 235, y: 90, l: 'B' },
  { x: 150, y: 45, l: 'C' }, { x: 150, y: 135, l: 'D' },
];
const KB_EDGES = [
  { a: 0, b: 2, mul: 2 }, { a: 1, b: 2, mul: 2 },
  { a: 0, b: 3, mul: 1 }, { a: 1, b: 3, mul: 1 }, { a: 2, b: 3, mul: 1 },
];

function KoenigsbergCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [degInfo, setDegInfo] = useState('');

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    KB_EDGES.forEach(({ a, b, mul }) => {
      const p1 = KB_POS[a], p2 = KB_POS[b];
      const dx = p2.x - p1.x, dy = p2.y - p1.y, len = Math.hypot(dx, dy);
      const px = -dy / len, py = dx / len;
      const offsets = mul === 2 ? [-6, 6] : [0];
      offsets.forEach(off => {
        ctx.beginPath();
        ctx.moveTo(p1.x + px * off, p1.y + py * off);
        ctx.lineTo(p2.x + px * off, p2.y + py * off);
        ctx.strokeStyle = '#f97316'; ctx.lineWidth = 2; ctx.stroke();
      });
    });
    const deg = [0, 0, 0, 0];
    KB_EDGES.forEach(({ a, b, mul }) => { deg[a] += mul; deg[b] += mul; });
    KB_POS.forEach((p, i) => {
      drawNode(ctx, p.x, p.y, p.l, '#1a0a00', '#f97316');
      ctx.fillStyle = '#f97316'; ctx.font = '10px monospace'; ctx.textAlign = 'center';
      ctx.fillText('d=' + deg[i], p.x, p.y + 28);
    });
    setDegInfo('Fokszámok: ' + KB_POS.map((p, i) =>
      `<span style="color:${deg[i] % 2 ? '#ef4444' : '#34d399'};font-weight:700">${p.l}: d=${deg[i]}</span>`
    ).join(' &nbsp; '));
  }, []);

  return (
    <div className="ex-box">
      <span className="lbl lbl--ex">11. Példa — Königsbergi hidak (1736)</span>
      <p style={{ fontSize: '.85rem', marginBottom: '.5rem' }}>A feladat: bejárható-e mind a 7 híd pontosan egyszer, visszatérve a kiindulópontba? A gráf 4 csúcsa a folyópart-szakaszokat/szigeteket, 7 éle a hidakat jelöli.</p>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <canvas ref={ref} width={300} height={180}
          style={{ borderRadius: '.4rem', background: '#0d0e1f', maxWidth: '100%' }} />
        <div>
          {degInfo && <div style={{ fontSize: '.85rem' }} dangerouslySetInnerHTML={{ __html: degInfo }} />}
          <div style={{ marginTop: '.5rem', fontSize: '.82rem', color: '#ef4444', fontWeight: 600 }}>
            Mind a 4 csúcs fokszáma páratlan → nincs zárt Euler-vonal → a feladatnak nincs megoldása.
          </div>
        </div>
      </div>
    </div>
  );
}

// EU_POS: pentagon
const EU_POS = (() => {
  const r = 80, cx = 180, cy = 100;
  return Array.from({ length: 5 }, (_, i) => ({
    x: cx + r * Math.cos(i * 2 * Math.PI / 5 - Math.PI / 2),
    y: cy + r * Math.sin(i * 2 * Math.PI / 5 - Math.PI / 2),
  }));
})();
const EU_INIT: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 2], [1, 3]];

function EulerCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [edges, setEdges] = useState<[number, number][]>(EU_INIT);
  const [sel, setSel] = useState(-1);
  const [degInfo, setDegInfo] = useState('');
  const [verdict, setVerdict] = useState('');

  function euDeg() {
    const d = new Array(EU_POS.length).fill(0);
    edges.forEach(([a, b]) => { d[a]++; d[b]++; });
    return d;
  }

  function euDraw() {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    const d = euDeg();
    edges.forEach(([a, b]) => drawEdge(ctx, EU_POS[a].x, EU_POS[a].y, EU_POS[b].x, EU_POS[b].y, '#7c3aed', 2));
    EU_POS.forEach((p, i) => drawNode(ctx, p.x, p.y, 'v' + (i + 1), i === sel ? '#3b1f70' : '#1a1040', d[i] % 2 ? '#ef4444' : '#34d399'));
    const oddIdx = d.map((v, i) => v % 2 ? i : -1).filter(i => i >= 0);
    const conn = isConnected(EU_POS.length, edges);
    let verd = '', color = '';
    if (!conn) { verd = '✗ Nem összefüggő → nincs Euler-vonal'; color = '#ef4444'; }
    else if (oddIdx.length === 0) { verd = '✓ Euler-gráf: zárt Euler-vonal létezik'; color = '#34d399'; }
    else if (oddIdx.length === 2) { verd = `✓ Nyílt Euler-vonal létezik (végpontok: v${oddIdx[0] + 1}, v${oddIdx[1] + 1})`; color = '#fbbf24'; }
    else { verd = `✗ ${oddIdx.length} páratlan fokszámú pont → nincs Euler-vonal`; color = '#ef4444'; }
    setDegInfo('Fokszámok: ' + d.map((v, i) => `<span style="color:${v % 2 ? '#ef4444' : '#34d399'};font-weight:700">v${i + 1}:${v}</span>`).join(' '));
    setVerdict(`<span style="color:${color}">${verd}</span>`);
  }

  useEffect(() => { euDraw(); }, [edges, sel]);

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const cv = ref.current; if (!cv) return;
    const r = cv.getBoundingClientRect();
    const mx = (e.clientX - r.left) * (cv.width / r.width);
    const my = (e.clientY - r.top) * (cv.height / r.height);
    let hit = -1;
    EU_POS.forEach((p, i) => { if (Math.hypot(p.x - mx, p.y - my) < 18) hit = i; });
    if (hit < 0) { setSel(-1); return; }
    if (sel < 0) { setSel(hit); return; }
    if (sel === hit) { setSel(-1); return; }
    const a = Math.min(sel, hit), b = Math.max(sel, hit);
    const idx = edges.findIndex(([x, y]) => x === a && y === b);
    if (idx >= 0) setEdges(prev => prev.filter((_, i) => i !== idx));
    else setEdges(prev => [...prev, [a, b]]);
    setSel(-1);
  }

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Interaktív Euler-ellenőrző</span>
      <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.25rem 0 .5rem' }}>Kattints két csúcsra él hozzáadásához/eltávolításához. Az ellenőrző megmutatja, létezik-e Euler-vonal.</p>
      <canvas ref={ref} width={360} height={200}
        style={{ borderRadius: '.4rem', background: '#0d0e1f', cursor: 'crosshair', maxWidth: '100%', display: 'block' }} onClick={handleClick} />
      {degInfo && <div style={{ fontSize: '.82rem', marginTop: '.4rem' }} dangerouslySetInnerHTML={{ __html: degInfo }} />}
      {verdict && <div style={{ fontSize: '.82rem', fontWeight: 700, marginTop: '.25rem' }} dangerouslySetInnerHTML={{ __html: verdict }} />}
      <div style={{ marginTop: '.5rem', display: 'flex', gap: '.5rem' }}>
        <button className="op-btn" style={{ borderColor: ACC, color: ACC }} onClick={() => { setEdges(EU_INIT); setSel(-1); }}>Reset (Euler-gráf)</button>
        <button className="op-btn" onClick={() => { setEdges([]); setSel(-1); }}>Töröl</button>
      </div>
    </div>
  );
}

// ══ TAB 3: Fleury-algoritmus ══════════════════════════════════════════════════

const FL_POS = [
  { x: 120, y: 155, l: 'a' }, { x: 55, y: 85, l: 'b' }, { x: 55, y: 225, l: 'c' },
  { x: 185, y: 60, l: 'd' }, { x: 280, y: 155, l: 'f' }, { x: 390, y: 85, l: 'g' }, { x: 390, y: 225, l: 'e' },
];
const FL_EDGES = [
  { a: 0, b: 1, lbl: 'e₁' }, { a: 1, b: 2, lbl: 'e₂' }, { a: 0, b: 2, lbl: 'e₃' },
  { a: 0, b: 3, lbl: 'e₄' }, { a: 3, b: 4, lbl: 'e₅' }, { a: 0, b: 4, lbl: 'e₆' },
  { a: 4, b: 5, lbl: 'e₇' }, { a: 4, b: 6, lbl: 'e₈' }, { a: 5, b: 6, lbl: 'e₉' },
];
const FL_STEPS = [
  { ei: 3, from: 0, to: 3, desc: 'e₄: a → d', note: 'Bármelyik a-ból induló él választható.' },
  { ei: 4, from: 3, to: 4, desc: 'e₅: d → f', note: 'Egyetlen bejáratlan él d-ből.' },
  { ei: 6, from: 4, to: 5, desc: 'e₇: f → g', note: '⚠ e₆ vágóél lenne — elkerüljük! e₇ vagy e₈ választható.' },
  { ei: 8, from: 5, to: 6, desc: 'e₉: g → e', note: 'Egyetlen bejáratlan él g-ből.' },
  { ei: 7, from: 6, to: 4, desc: 'e₈: e → f', note: 'Egyetlen bejáratlan él e-ből.' },
  { ei: 5, from: 4, to: 0, desc: 'e₆: f → a', note: 'Egyetlen bejáratlan él f-ből.' },
  { ei: 0, from: 0, to: 1, desc: 'e₁: a → b', note: '' },
  { ei: 1, from: 1, to: 2, desc: 'e₂: b → c', note: 'Egyetlen bejáratlan él b-ből.' },
  { ei: 2, from: 2, to: 0, desc: 'e₃: c → a', note: 'Zárt Euler-vonal kész! ✓' },
];

function FleuryCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [step, setStep] = useState(-1);
  const [used, setUsed] = useState<Set<number>>(new Set());
  const [cur, setCur] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [desc, setDesc] = useState('Kezdőpont: a. Nyomj "Következő lépés"-t.');
  const [path, setPath] = useState('W₀ = a (kiindulópont)');

  function flDraw(stepVal: number, usedSet: Set<number>, curNode: number) {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    FL_EDGES.forEach(({ a, b, lbl }, i) => {
      const p1 = FL_POS[a], p2 = FL_POS[b];
      let color = '#2a2f4a', width = 1.5;
      if (usedSet.has(i)) { color = '#7c3aed55'; width = 1; }
      else if (stepVal >= 0 && FL_STEPS[stepVal]?.ei === i) { color = ACC; width = 3; }
      ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = color; ctx.lineWidth = width; ctx.stroke();
      const mx = (p1.x + p2.x) / 2 + 8, my = (p1.y + p2.y) / 2 - 6;
      ctx.fillStyle = usedSet.has(i) ? '#4b3070' : '#6b7280'; ctx.font = '10px monospace';
      ctx.textAlign = 'center'; ctx.fillText(lbl, mx, my);
    });
    FL_POS.forEach((p, i) => {
      const isCur = i === curNode && stepVal >= 0;
      drawNode(ctx, p.x, p.y, p.l, isCur ? '#4a1d96' : '#1a1040', isCur ? '#e9d5ff' : ACC);
    });
    const pathEdges = FL_STEPS.slice(0, Math.max(0, stepVal + 1)).map(s => FL_EDGES[s.ei].lbl);
    setPath(stepVal < 0 ? 'W₀ = a (kiindulópont)' : 'W' + FL_STEPS.slice(0, stepVal + 1).length + ' = ' + pathEdges.join(', '));
    if (stepVal < 0) setDesc('Kezdőpont: a. Nyomj "Következő lépés"-t.');
    else {
      const s = FL_STEPS[stepVal];
      setDesc(`${stepVal + 1}. lépés: ${s.desc}${s.note ? ` — ${s.note}` : ''}`);
    }
  }

  useEffect(() => { flDraw(step, used, cur); }, [step, used, cur]);

  function flNext() {
    if (step >= FL_STEPS.length - 1) return;
    const ns = step + 1;
    const nu = new Set(used); nu.add(FL_STEPS[ns].ei);
    setStep(ns);
    setUsed(nu);
    setCur(FL_STEPS[ns].to);
  }

  function flReset() {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    setStep(-1); setUsed(new Set()); setCur(0);
  }

  function flAuto() {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; return; }
    timerRef.current = setInterval(() => {
      setStep(prev => {
        if (prev >= FL_STEPS.length - 1) { clearInterval(timerRef.current!); timerRef.current = null; return prev; }
        const ns = prev + 1;
        setUsed(u => { const nu = new Set(u); nu.add(FL_STEPS[ns].ei); return nu; });
        setCur(FL_STEPS[ns].to);
        return ns;
      });
    }, 900);
  }

  return (
    <div>
      <Cols variant="7-5">
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: ACC }}>15. Példa — animáció (9 lépés)</span>
            <canvas ref={ref} width={450} height={260}
              style={{ borderRadius: '.4rem', background: '#0d0e1f', maxWidth: '100%', display: 'block' }} />
            <div style={{ fontSize: '.85rem', color: '#c4b5fd', minHeight: '2em', marginTop: '.5rem' }}>{desc}</div>
            <div style={{ fontSize: '.8rem', color: '#8892a4', fontFamily: 'monospace', marginTop: '.25rem' }}>{path}</div>
            <div style={{ marginTop: '.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
              <button className="op-btn is-active" onClick={flNext}>Következő lépés ▶</button>
              <button className="op-btn" style={{ borderColor: ACC, color: ACC }} onClick={flAuto}>Auto ⏩</button>
              <button className="op-btn" onClick={flReset}>Reset</button>
            </div>
          </div>
        </div>
        <div>
          <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-1" style="color:#c084fc">12. Definíció — Vágóél</div>
<div class="box-body">A \(G\) gráf egy \(e\) élét <strong>vágóélnek</strong> nevezzük, ha \(e\) elhagyásával valamely összefüggő komponens két komponensre esik szét.</div></div>
<div class="info-box mt-2"><div class="lbl mb-1" style="color:#c084fc">14. Algoritmus — Fleury</div>
<div class="box-body">
<strong>1.</strong> Válassz tetszőleges \(v_0\) kezdőpontot.<br>
<strong>2.</strong> Az aktuális \(v_i\) pontból válassz élt, amelyre:<br>
&emsp;(a) még nincs bejárva, és<br>
&emsp;(b) <em>csak akkor vágóél</em>, ha nincs más lehetőség.<br>
<strong>3.</strong> Ismételd, amíg van bejáratlan él.
</div></div>
<div class="thm-box mt-2"><div class="lbl mb-1" style="color:#7c3aed">16. Tétel</div>
<div class="box-body">Ha \(G\) Euler-gráf és \(v_0\) nem izolált, akkor a Fleury-algoritmus zárt Euler-vonalat ad.</div></div>`} />
        </div>
      </Cols>
      <div className="info-box">
        <span className="lbl" style={{ color: ACC }}>Lépések</span>
        <div style={{ fontSize: '.82rem' }}>
          {FL_STEPS.map((s, i) => {
            const cls = i === step ? 'active' : i < step ? 'done' : '';
            return (
              <div key={i} style={{
                background: cls === 'active' ? '#130a1f' : '#161b22',
                border: `1px solid ${cls === 'active' ? ACC : cls === 'done' ? '#34d39955' : '#21262d'}`,
                borderRadius: '.35rem', padding: '.5rem .8rem', margin: '.25rem 0',
                fontSize: '.8rem', opacity: cls === 'done' ? 0.7 : 1,
                transition: 'border-color .2s, background .2s',
              }}>
                <span style={{ color: ACC, fontWeight: 700 }}>{i + 1}.</span> {s.desc}
                {s.note && <span style={{ color: '#6b7280', fontSize: '.7rem' }}> ({s.note})</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ══ TAB 4: Hamilton-kör ════════════════════════════════════════════════════════

function DiracChecker() {
  const [n, setN] = useState(6);
  const [k, setK] = useState(3);

  const half = n / 2;
  const ok = k >= half;
  const maxDeg = n - 1;
  const feasible = k <= maxDeg;

  return (
    <div>
      <Cols>
        <div>
          <RichTex html={String.raw`
<div class="def-box"><div class="lbl mb-1" style="color:#c084fc">17. Definíció</div>
<div class="box-body">Egy \(G\) gráf körét <strong>Hamilton-körnek</strong> nevezzük, ha minden csúcsot pontosan egyszer tartalmaz. Olyan utat, amely minden csúcsot tartalmaz, <strong>Hamilton-útnak</strong> hívunk.</div></div>
<div class="thm-box mt-2"><div class="lbl mb-1" style="color:#7c3aed">19. Tétel — Szükséges feltétel</div>
<div class="box-body">Ha \(G=(V,E)\)-ben létezik Hamilton-kör, akkor tetszőleges \(S\subseteq V\) (\(|S|=m\)) esetén a \(G-S\) gráf komponenseinek száma legfeljebb \(m\).
<div style="font-size:.78rem;color:#8892a4;margin-top:.4rem">Bizonyítás: az \(m\) kivett csúcs a Hamilton-kört legfeljebb \(m\) részre bontja.</div></div></div>
<div class="ex-box mt-2"><div class="lbl lbl--ex mb-1">20. Példa — nincs Hamilton-kör</div>
<div class="box-body">Ha \(S=\{a\}\) (egyetlen csúcs), és elhagyásakor 2 komponens keletkezik, akkor a 19. Tétel alapján nincs Hamilton-kör (\(1 &lt; 2\) feltétel sérül).</div></div>`} />
        </div>
        <div>
          <RichTex html={String.raw`
<div class="thm-box"><div class="lbl mb-1" style="color:#7c3aed">21. Tétel — Dirac (elegendő feltétel)</div>
<div class="box-body">Legyen \(G\) egyszerű \(n\)-csúcsú gráf, \(n\ge3\). Ha minden csúcs fokszáma legalább \(\lceil n/2\rceil\), akkor \(G\)-ben létezik Hamilton-kör.<br><br>
<em>Figyelem:</em> Ez <strong>elegendő, de nem szükséges</strong> feltétel — vannak gráfok, amelyek nem teljesítik Dirac feltételét, mégis van bennük Hamilton-kör.</div></div>`} />
          <div className="info-box" style={{ marginTop: '.75rem' }}>
            <span className="lbl" style={{ color: ACC }}>Dirac-feltétel ellenőrző</span>
            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', alignItems: 'flex-end', margin: '.5rem 0' }}>
              <div>
                <div style={{ fontSize: '.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: '#8892a4', marginBottom: '.2rem' }}>Csúcsok száma (n)</div>
                <input type="number" min={3} max={20} className="ila-num" value={n} onChange={e => setN(+e.target.value)} />
              </div>
              <div>
                <div style={{ fontSize: '.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: '#8892a4', marginBottom: '.2rem' }}>Min. fokszám (k)</div>
                <input type="number" min={1} max={20} className="ila-num" value={k} onChange={e => setK(+e.target.value)} />
              </div>
            </div>
            <div style={{ fontSize: '.82rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '.3rem',
                padding: '.2rem .55rem', borderRadius: '.3rem', fontSize: '.73rem', fontWeight: 600, margin: '.1rem',
                background: ok ? '#041f10' : '#1a0000',
                border: `1px solid ${ok ? '#34d399' : '#ef4444'}`,
                color: ok ? '#34d399' : '#ef4444',
              }}>
                {ok ? '✓' : '✗'} d(v)={k} {ok ? '≥' : '<'} n/2={half}
              </span>
              {!feasible && (
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '.3rem',
                  padding: '.2rem .55rem', borderRadius: '.3rem', fontSize: '.73rem', fontWeight: 600, margin: '.1rem',
                  background: '#1a0000', border: '1px solid #ef4444', color: '#ef4444',
                }}>✗ k={k} {'>'} n−1={maxDeg} (egyszerű gráfban nem lehetséges)</span>
              )}
              <div style={{ marginTop: '.4rem', fontWeight: 600, color: ok && feasible ? '#34d399' : '#9ca3af' }}>
                {!feasible
                  ? 'Egyszerű gráfban a fokszám legfeljebb n−1 lehet.'
                  : ok
                    ? `Dirac-feltétel teljesül: ${n}-csúcsú gráfban, ha minden csúcs fokszáma ≥ ${Math.ceil(half)}, garantált a Hamilton-kör.`
                    : 'Dirac-feltétel NEM teljesül. Ez nem jelenti, hogy nincs Hamilton-kör — csak a tétel nem alkalmazható.'}
              </div>
            </div>
          </div>
        </div>
      </Cols>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', marginTop: '.5rem' }}>
        <div className="ex-box">
          <span className="lbl lbl--ex">22. Példa — Dirac teljesül</span>
          <RichTex html={String.raw`<div class="box-body">\(n=6\), minden pont fokszáma \(\ge3=n/2\). Dirac-tétel garantálja a Hamilton-kör létezését.</div>`} />
        </div>
        <div className="ex-box">
          <span className="lbl lbl--ex">23. Példa — Dirac nem teljesül, de van HC</span>
          <RichTex html={String.raw`<div class="box-body">\(n=8\), vannak \(d=3 &lt; n/2=4\) fokszámú csúcsok. A Dirac-feltétel nem teljesül, de a gráfban <em>mégis</em> létezik Hamilton-kör. Dirac elegendő, de nem szükséges.</div>`} />
        </div>
      </div>
      <div className="warn-box" style={{ marginTop: '.75rem' }}>
        <span className="lbl" style={{ color: '#fbbf24' }}>Megjegyzés — NP-nehézség</span>
        <p style={{ fontSize: '.85rem', margin: '.25rem 0 0' }}>Hamilton-kör keresésére <strong>nincs ismert hatékony (polinom idejű) algoritmus</strong>, és Hamilton-kör létezésére nincs ismert szükséges és elégséges feltétel. Ez alapvetően különbözik az Euler-vonal esetétől, ahol a Fleury-algoritmus hatékony, és az Euler-tétel pontos karakterizációt ad.</p>
      </div>
    </div>
  );
}

// ══ TAB 5: Összefoglaló ════════════════════════════════════════════════════════

const summaryHtml = String.raw`
<h5 style="color:#c084fc;font-weight:700;margin:0 0 .75rem">Összefoglaló</h5>
<div style="overflow-x:auto">
<table style="width:100%;font-size:.78rem;border-collapse:collapse">
<thead>
<tr>
<th style="background:#0c0714;color:#c084fc;padding:.45rem .65rem;border:1px solid #21262d;text-align:left;width:18%">Fogalom</th>
<th style="background:#0c0714;color:#c084fc;padding:.45rem .65rem;border:1px solid #21262d;text-align:left">Fák</th>
<th style="background:#0c0714;color:#c084fc;padding:.45rem .65rem;border:1px solid #21262d;text-align:left">Euler-vonal</th>
<th style="background:#0c0714;color:#c084fc;padding:.45rem .65rem;border:1px solid #21262d;text-align:left">Hamilton-kör</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#c084fc;font-weight:700">Definíció</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">Összefüggő, körmentes, hurokélmentes gráf</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">Minden élt pontosan egyszer bejáró séta</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">Minden csúcsot pontosan egyszer tartalmazó kör</td>
</tr>
<tr style="background:#0d0714">
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#c084fc;font-weight:700">Szükséges és elégséges feltétel</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">Összefüggő + \(n-1\) él; vagy körmentes + \(n-1\) él (5. Tétel)</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">Összefüggő + minden fokszám páros (zárt); pontosan 2 páratlan (nyílt)</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0"><span style="color:#ef4444">Nem ismert</span> szükséges és elégséges feltétel</td>
</tr>
<tr>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#c084fc;font-weight:700">Szükséges feltétel</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">Van fokszám-1 pont (levél)</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">Összefüggőség + fokszám-paritás</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">\(S\) elhagyásával legfeljebb \(|S|\) komponens (19. Tétel)</td>
</tr>
<tr style="background:#0d0714">
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#c084fc;font-weight:700">Elegendő feltétel</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">—</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">Euler-tétel (szükséges és elégséges)</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">Dirac: \(d(v)\ge n/2\) minden \(v\)-re (21. Tétel)</td>
</tr>
<tr>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#c084fc;font-weight:700">Algoritmus</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">BFS/DFS fa-bejárás; levélleválasztásos bizonyítás</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">Fleury-algoritmus (vágóélkerülés)</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0"><span style="color:#ef4444">Nincs ismert hatékony algoritmus</span> (NP-nehéz)</td>
</tr>
<tr style="background:#0d0714">
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#c084fc;font-weight:700">Példa</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">\(n\) csúcsú fa: \(n-1\) él, minden él vágóél</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">Königsbergi hidak (4 páratlan fokszám → nem Euler-gráf)</td>
<td style="padding:.4rem .65rem;border:1px solid #21262d;color:#e2e8f0">\(K_n\) teljes gráf: mindig van HC (\(d=n-1\ge n/2\))</td>
</tr>
</tbody>
</table>
</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.75rem;margin-top:1rem">
<div class="def-box" style="text-align:center;padding:1rem">
<div class="lbl mb-1" style="color:#c084fc">Kulcsszámok — Fák</div>
<div style="font-size:1.8rem;font-weight:900;color:#c084fc">\(n-1\)</div>
<div style="font-size:.8rem;color:#8892a4;margin-top:.25rem">élek száma \(n\)-csúcsú fában</div>
<div style="font-size:.8rem;margin-top:.5rem">\(\sum d(v) = 2(n-1)\) — kézfogási tételből</div>
</div>
<div class="thm-box" style="text-align:center;padding:1rem">
<div class="lbl mb-1" style="color:#7c3aed">Kulcsszámok — Euler</div>
<div style="font-size:1.8rem;font-weight:900;color:#a78bfa">0 vagy 2</div>
<div style="font-size:.8rem;color:#8892a4;margin-top:.25rem">páratlan fokszámú csúcs száma</div>
<div style="font-size:.8rem;margin-top:.5rem">0 → zárt Euler-vonal &nbsp;|&nbsp; 2 → nyílt Euler-vonal</div>
</div>
<div class="thm-box" style="text-align:center;padding:1rem">
<div class="lbl mb-1" style="color:#7c3aed">Kulcsszámok — Hamilton</div>
<div style="font-size:1.8rem;font-weight:900;color:#a78bfa">\(\lceil n/2\rceil\)</div>
<div style="font-size:.8rem;color:#8892a4;margin-top:.25rem">Dirac-küszöb (min. fokszám)</div>
<div style="font-size:.8rem;margin-top:.5rem">Ha \(d(v)\ge\lceil n/2\rceil\) → HC garantált</div>
</div>
</div>`;

// ══ Euler theory strings ═══════════════════════════════════════════════════════

const t1theory = String.raw`
<h5 style="color:#c084fc;font-weight:700;margin:0 0 .75rem">Fák</h5>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem">
<div>
<div class="def-box"><div class="lbl mb-1" style="color:#c084fc">1. Definíció — Fa</div>
<div class="box-body">Egy \(G\) gráfot <strong>fának</strong> hívunk, ha <em>összefüggő</em>, <em>körmentes</em> és <em>hurokélmentes</em>. (A hurokél maga is egy kör, így a hurokélmentesség elhagyható.)</div></div>
<div class="thm-box mt-2"><div class="lbl mb-1" style="color:#7c3aed">5. Tétel — Fa és élszám</div>
<div class="box-body">Az alábbi állítások ekvivalensek hurokélmentes, \(n\) pontú \(G\)-re:
<ol class="mb-0 mt-1">
<li>\(G\) fa</li>
<li>\(G\) összefüggő és \(n-1\) éle van</li>
<li>\(G\) körmentes és \(n-1\) éle van</li>
</ol></div></div>
<div class="def-box mt-2"><div class="lbl mb-1" style="color:#c084fc">6. Állítás — Levélpont</div>
<div class="box-body">Az 5. Tétel bármely feltétele esetén létezik <strong>fokszám-1 pont</strong> (levél) a gráfban. Bizonyítás: tekintsük a leghosszabb utat; végpontja csak az útba eső pontokba köthetne élt, de akkor kör keletkezne — tehát fokszáma 1.</div></div>
</div>
<div>
<div class="thm-box"><div class="lbl mb-1" style="color:#7c3aed">4. Tétel — Ekvivalens feltételek</div>
<div class="box-body">Az alábbi állítások ekvivalensek hurokélmentes \(G\)-re:
<ol class="mb-0 mt-1">
<li>\(G\) fa (összefüggő + körmentes)</li>
<li>Tetszőleges két pont között <em>pontosan egy út</em> vezet</li>
<li>\(G\) összefüggő, de tetszőleges élét elhagyva <em>két komponensre</em> esik szét</li>
<li>\(G\) körmentes, de tetszőleges új él hozzáadásakor <em>kör keletkezik</em></li>
</ol></div></div>
</div>
</div>`;

const t2theory = String.raw`
<h5 style="color:#c084fc;font-weight:700;margin:0 0 .75rem">Euler-vonal és Euler-tétel</h5>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem">
<div>
<div class="def-box"><div class="lbl mb-1" style="color:#c084fc">7. Definíció — Vonal (trail)</div>
<div class="box-body">Séta, amelynek élei <em>páronként különbözők</em>. Zárt vonal: kezdő- és végpont azonos; nyílt vonal: különbözők.</div></div>
<div class="def-box mt-2"><div class="lbl mb-1" style="color:#c084fc">8. Definíció — Euler-vonal</div>
<div class="box-body">Vonal, amely a gráf <em>összes</em> élét tartalmazza. Ha zárt: <strong>zárt Euler-vonal</strong>. Egy \(G\) gráf <strong>Euler-gráf</strong>, ha létezik benne zárt Euler-vonal.</div></div>
</div>
<div>
<div class="thm-box"><div class="lbl mb-1" style="color:#7c3aed">9. Tétel — Euler-tétel</div>
<div class="box-body">Legyen \(G\) izolált pontot nem tartalmazó gráf. Ekkor \(G\) Euler-gráf \(\iff\) \(G\) összefüggő és minden csúcsának fokszáma <strong>páros</strong>.</div></div>
<div class="thm-box mt-2"><div class="lbl mb-1" style="color:#7c3aed">10. Következmény — Nyílt Euler-vonal</div>
<div class="box-body">\(G\)-ben létezik nyílt Euler-vonal \(\iff\) \(G\) összefüggő és <strong>pontosan két</strong> csúcsának fokszáma páratlan (ezek az Euler-vonal végpontjai).</div></div>
</div>
</div>`;

// ══ TABS ══════════════════════════════════════════════════════════════════════

const TABS: Tab[] = [
  {
    id: 'fa', label: 'Fák',
    content: <div><RichTex html={t1theory} /><FaCanvas /></div>,
  },
  {
    id: 'euler', label: 'Euler-tétel',
    content: <div><RichTex html={t2theory} /><KoenigsbergCanvas /><EulerCanvas /></div>,
  },
  {
    id: 'fleury', label: 'Fleury',
    content: <FleuryCanvas />,
  },
  {
    id: 'hamilton', label: 'Hamilton-kör',
    content: <DiracChecker />,
  },
  {
    id: 'osszefo', label: 'Összefoglaló',
    content: <RichTex html={summaryHtml} />,
  },
];

export default function Ch15() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika VII — fejezet</p>
      <h1 className="ila__title">Gráfelmélet 2.</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
