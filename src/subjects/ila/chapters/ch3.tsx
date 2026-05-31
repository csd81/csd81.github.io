import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cols, Tabs, RichTex, type Tab } from '../components/kit';

const PALETTE = ['#a78bfa', '#34d399', '#f97316', '#22d3ee', '#f472b6', '#fbbf24'];

function arrowHead(ctx: CanvasRenderingContext2D, fx: number, fy: number, tx: number, ty: number, color: string) {
  const dx = tx - fx, dy = ty - fy, len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ux = dx / len, uy = dy / len, ah = 8;
  ctx.beginPath(); ctx.moveTo(tx, ty);
  ctx.lineTo(tx - ah * (ux - 0.4 * uy), ty - ah * (uy + 0.4 * ux));
  ctx.lineTo(tx - ah * (ux + 0.4 * uy), ty - ah * (uy - 0.4 * ux));
  ctx.closePath(); ctx.fillStyle = color; ctx.fill();
}

function computeCycles(perm: number[]): number[][] {
  const n = perm.length - 1;
  const visited = new Array(n + 1).fill(false);
  const cycles: number[][] = [];
  for (let i = 1; i <= n; i++) {
    if (!visited[i] && perm[i] !== i) {
      const cyc: number[] = []; let j = i;
      while (!visited[j]) { visited[j] = true; cyc.push(j); j = perm[j]; }
      cycles.push(cyc);
    } else visited[i] = true;
  }
  return cycles;
}
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
const lcm = (a: number, b: number) => (a * b) / gcd(a, b);

/** Circular permutation graph: nodes 1..n on a circle, arcs i→perm[i], coloured by cycle. */
function drawPermGraph(ctx: CanvasRenderingContext2D, perm: number[], W: number, H: number) {
  const n = perm.length - 1;
  ctx.clearRect(0, 0, W, H);
  const cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.36;
  const pts = [] as { x: number; y: number; i: number }[];
  for (let i = 1; i <= n; i++) {
    const a = (2 * Math.PI * (i - 1) / n) - Math.PI / 2;
    pts.push({ x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), i });
  }
  const cycles = computeCycles(perm);
  const nodeColor = new Array(n + 1).fill('#4a5568');
  cycles.forEach((c, ci) => c.forEach((v) => (nodeColor[v] = PALETTE[ci % PALETTE.length])));
  for (let i = 1; i <= n; i++) {
    const f = pts[i - 1], t = pts[perm[i] - 1], col = nodeColor[i];
    ctx.strokeStyle = col; ctx.lineWidth = perm[i] === i ? 1 : 2;
    ctx.globalAlpha = perm[i] === i ? 0.3 : 0.8;
    ctx.beginPath();
    if (perm[i] === i) ctx.arc(f.x, f.y - 14, 7, 0, 2 * Math.PI);
    else {
      const mx = (f.x + t.x) / 2, my = (f.y + t.y) / 2, dx = t.x - f.x, dy = t.y - f.y;
      const cpx = mx - dy * 0.25, cpy = my + dx * 0.25;
      ctx.moveTo(f.x, f.y); ctx.quadraticCurveTo(cpx, cpy, t.x, t.y);
      arrowHead(ctx, cpx + (t.x - cpx) * 0.85, cpy + (t.y - cpy) * 0.85, t.x, t.y, col);
    }
    ctx.stroke(); ctx.globalAlpha = 1;
  }
  pts.forEach((p) => {
    const col = nodeColor[p.i];
    ctx.beginPath(); ctx.arc(p.x, p.y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = col === '#4a5568' ? '#1a1b25' : col + '33'; ctx.fill();
    ctx.strokeStyle = col; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 10px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(String(p.i), p.x, p.y);
  });
}

/* ── Tab 2: cycle demo presets ── */
const CYCLE_DEMOS: Record<string, { perm: number[]; label: string }> = {
  gamma: { perm: [0, 5, 2, 1, 4, 8, 6, 7, 3, 9], label: 'γ = (1 5 8 3)' },
  delta: { perm: [0, 1, 4, 3, 6, 5, 2], label: 'δ = (2 4 6)' },
  id: { perm: [0, 1, 2, 3, 4], label: 'id (S₄)' },
};
function CycleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [key, setKey] = useState('gamma');
  useEffect(() => {
    const ctx = ref.current?.getContext('2d');
    if (ctx) drawPermGraph(ctx, CYCLE_DEMOS[key].perm, 320, 180);
  }, [key]);
  return (
    <div className="info-box">
      <span className="lbl">Vizualizáció — ciklus gráfja</span>
      <canvas ref={ref} width={320} height={180} style={{ margin: '0 auto', background: '#0d0e14' }} />
      <div className="op-row" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
        {Object.entries(CYCLE_DEMOS).map(([k, d]) => (
          <button key={k} className={`op-btn${key === k ? ' is-active' : ''}`} onClick={() => setKey(k)}>{d.label}</button>
        ))}
      </div>
    </div>
  );
}

/* ── Tab 3: interactive decomposer ── */
function PermDecomposer() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [n, setN] = useState(8);
  const [vals, setVals] = useState<number[]>(() => Array.from({ length: 8 }, (_, i) => i + 1));
  useEffect(() => {
    setVals(Array.from({ length: n }, (_, i) => i + 1));
  }, [n]);
  const perm = useMemo(() => [0, ...vals.map((v, i) => (v >= 1 && v <= n ? v : i + 1))], [vals, n]);
  const cycles = useMemo(() => computeCycles(perm), [perm]);
  const order = cycles.length ? cycles.reduce((acc, c) => lcm(acc, c.length), 1) : 1;
  useEffect(() => {
    const ctx = ref.current?.getContext('2d');
    if (ctx) drawPermGraph(ctx, perm, 320, 180);
  }, [perm]);
  return (
    <div className="info-box">
      <span className="lbl">Interaktív — ciklus-felbontás</span>
      <div style={{ fontSize: '0.77rem', color: '#8892a4', margin: '0.2rem 0 0.6rem' }}>
        Add meg n értékét és a permutáció alsó sorát (az i-edik mező értéke = σ(i)):
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
        <span style={{ fontSize: '0.8rem', color: '#c4cdd8' }}>n =</span>
        <select value={n} onChange={(e) => setN(Number(e.target.value))} style={{ background: '#1a1b25', border: '1px solid rgba(167,139,250,.3)', color: '#e2e8f0', borderRadius: 4, padding: '0.2rem 0.4rem', fontSize: '0.8rem' }}>
          {[5, 6, 7, 8, 9].map((x) => <option key={x} value={x}>{x}</option>)}
        </select>
      </div>
      <div style={{ fontSize: '0.77rem', color: '#8892a4' }}>Felső sor (1..n):</div>
      <div style={{ display: 'flex', gap: '0.4rem', margin: '0.2rem 0' }}>
        {Array.from({ length: n }, (_, i) => (
          <span key={i} style={{ minWidth: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0d0e14', border: '1px solid rgba(167,139,250,.15)', color: '#6b7280', fontSize: '0.8rem', borderRadius: 4, fontFamily: 'monospace' }}>{i + 1}</span>
        ))}
      </div>
      <div style={{ fontSize: '0.77rem', color: '#8892a4' }}>Alsó sor (σ(i)):</div>
      <div style={{ display: 'flex', gap: '0.4rem', margin: '0.2rem 0 0.6rem' }}>
        {Array.from({ length: n }, (_, i) => (
          <input
            key={i}
            value={vals[i] ?? ''}
            maxLength={1}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              setVals((prev) => { const next = [...prev]; next[i] = isNaN(v) ? i + 1 : v; return next; });
            }}
            style={{ width: '2rem', height: '2rem', textAlign: 'center', background: '#1a1b25', border: '1px solid rgba(167,139,250,.3)', borderRadius: 4, color: '#e2e8f0', fontSize: '0.9rem', fontFamily: 'monospace' }}
          />
        ))}
      </div>
      <div style={{ fontSize: '0.82rem', color: '#c4cdd8', minHeight: 40 }}>
        {cycles.length === 0 ? (
          <span style={{ color: '#34d399' }}>σ = id (identitás permutáció)</span>
        ) : (
          <>
            <div style={{ marginBottom: '0.4rem' }}>
              <span style={{ color: '#8892a4', fontSize: '0.75rem' }}>Ciklusok: </span>
              {cycles.map((c, i) => {
                const col = PALETTE[i % PALETTE.length];
                return (
                  <span key={i} style={{ display: 'inline-block', padding: '0.15rem 0.5rem', borderRadius: '0.25rem', fontFamily: 'monospace', fontSize: '0.85rem', margin: '0.15rem', background: col + '22', color: col, border: `1px solid ${col}44` }}>
                    ({c.join(' ')})
                  </span>
                );
              })}
            </div>
            <div style={{ fontSize: '0.77rem', color: '#8892a4' }}>
              Rend (ord σ): <span style={{ color: '#e2e8f0', fontWeight: 600 }}>lkkt({cycles.map((c) => c.length).join(', ')}) = {order}</span>
            </div>
          </>
        )}
      </div>
      <canvas ref={ref} width={320} height={180} style={{ marginTop: '0.6rem', background: '#0d0e14' }} />
    </div>
  );
}

/* ── Tab 5: transposition decomposer ── */
const TRANSP_EX: Record<string, { label: string; steps: { eq: string; why: string }[]; parity: string; count: number }> = {
  ex1: { label: String.raw`(3\;1\;5\;2\;4)`, steps: [{ eq: String.raw`(3\;1\;5\;2\;4)`, why: 'egyetlen 5-ciklus' }, { eq: String.raw`= (3\;1)(3\;5)(3\;2)(3\;4)`, why: String.raw`az \((a_1\,a_2)(a_1\,a_3)\cdots\) képlet alapján` }], parity: 'páros', count: 4 },
  ex2: { label: String.raw`(1\;7\;2\;5)(3\;6\;4)(8\;9)`, steps: [{ eq: String.raw`(1\;7\;2\;5)(3\;6\;4)(8\;9)`, why: 'idegen ciklusok szorzata' }, { eq: String.raw`= (1\;7)(1\;2)(1\;5)\cdot(3\;6)(3\;4)\cdot(8\;9)`, why: 'minden ciklust transzpozíciókra bontunk' }], parity: 'páros', count: 6 },
  ex3: { label: String.raw`(1\;4\;6)(2\;3)`, steps: [{ eq: String.raw`(1\;4\;6)(2\;3)`, why: 'két idegen ciklus' }, { eq: String.raw`= (1\;4)(1\;6)\cdot(2\;3)`, why: '3-ciklus → 2 transz., 2-ciklus → 1 transz.' }], parity: 'páratlan', count: 3 },
};
function TranspDecomp() {
  const [key, setKey] = useState('ex1');
  const d = TRANSP_EX[key];
  const parCol = d.parity === 'páros' ? '#34d399' : '#f97316';
  const html =
    `<div style="margin-bottom:.5rem;font-size:.8rem;color:#8892a4">Permutáció: <span style="color:#e2e8f0">\\(${d.label}\\)</span></div>` +
    d.steps.map((s) => `<div class="pf-step"><div class="pf-eq">\\(${s.eq}\\)</div><div class="pf-why">${s.why}</div></div>`).join('') +
    `<div style="margin-top:.5rem;font-size:.78rem">Transzpozíciók száma: <span style="color:#e2e8f0;font-weight:600">${d.count}</span> → σ <span style="color:${parCol};font-weight:600">${d.parity}</span> permutáció.</div>`;
  return (
    <div className="info-box">
      <span className="lbl">Interaktív — transzpozíció-felbontás</span>
      <div className="op-row">
        {[['ex1', '(3 1 5 2 4)'], ['ex2', '(1 7 2 5)(3 6 4)(8 9)'], ['ex3', '(1 4 6)(2 3)']].map(([k, label]) => (
          <button key={k} className={`op-btn${key === k ? ' is-active' : ''}`} onClick={() => setKey(k)}>{label}</button>
        ))}
      </div>
      <RichTex html={html} />
    </div>
  );
}

/* ── Tab 6: composition table + cycle-decomp parity ── */
const SIGMA = [0, 4, 3, 2, 6, 9, 1, 7, 8, 5];
const TAU = [0, 2, 1, 4, 3, 6, 5, 8, 7, 9];
function CompTable() {
  const rows = Array.from({ length: 9 }, (_, k) => {
    const i = k + 1, ti = TAU[i], sti = SIGMA[ti];
    return { i, ti, sti };
  });
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ fontSize: '0.72rem', color: '#c4cdd8', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ color: '#8892a4', borderBottom: '1px solid rgba(167,139,250,.2)' }}>
            <th style={{ padding: '0.25rem 0.5rem' }}>i</th>
            <th style={{ padding: '0.25rem 0.5rem' }}>τ(i)</th>
            <th style={{ padding: '0.25rem 0.5rem' }}>σ(τ(i))</th>
            <th style={{ padding: '0.25rem 0.5rem', color: '#a78bfa' }}>(σ∘τ)(i)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.i} style={{ background: r.i % 2 === 0 ? 'rgba(167,139,250,.04)' : 'transparent' }}>
              <td style={{ padding: '0.18rem 0.5rem', textAlign: 'center', color: '#8892a4' }}>{r.i}</td>
              <td style={{ padding: '0.18rem 0.5rem', textAlign: 'center' }}>{r.ti}</td>
              <td style={{ padding: '0.18rem 0.5rem', textAlign: 'center' }}>{r.sti}</td>
              <td style={{ padding: '0.18rem 0.5rem', textAlign: 'center', color: '#a78bfa', fontWeight: 700 }}>{r.sti}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const CYCLE_DECOMPS: Record<string, { cycle: string; decomp: string; note: string }> = {
  '1': { cycle: String.raw`(1\;7\;2\;5)`, decomp: String.raw`(1\;7)(1\;2)(1\;5)`, note: 'az (a₁ a₂ a₃ a₄) = (a₁ a₂)(a₁ a₃)(a₁ a₄) képlet alapján' },
  '7': { cycle: String.raw`(7\;2\;5\;1)`, decomp: String.raw`(7\;2)(7\;5)(7\;1)`, note: 'ugyanaz a ciklus, 7-el kezdve' },
  '2': { cycle: String.raw`(2\;5\;1\;7)`, decomp: String.raw`(2\;5)(2\;1)(2\;7)`, note: 'ugyanaz a ciklus, 2-vel kezdve' },
};
function CycleParity() {
  const [key, setKey] = useState('1');
  const d = CYCLE_DECOMPS[key];
  const html =
    `<div style="margin-bottom:.35rem;font-size:.78rem;color:#8892a4">${d.note}</div>` +
    `<div class="pf-step"><div class="pf-eq">\\(${d.cycle}\\)</div><div class="pf-why">ugyanaz a 4-ciklus</div></div>` +
    `<div class="pf-step"><div class="pf-eq">\\(= ${d.decomp}\\)</div><div class="pf-why">transzpozíció-felbontás</div></div>` +
    `<div style="font-size:.78rem;margin-top:.4rem">Transzpozíciók száma: <span style="color:#e2e8f0;font-weight:600">3</span> → <span style="color:#f97316;font-weight:700">páratlan</span> permutáció</div>` +
    `<div style="margin-top:.3rem;padding:.3rem .6rem;background:rgba(52,211,153,.06);border-radius:4px;font-size:.73rem;color:#34d399;border-left:2px solid #34d399">Mindhárom felbontásban 3 transzpozíció → paritás invariáns!</div>`;
  return (
    <div className="thm-box">
      <span className="lbl lbl--thm">Transzpozíció-felbontás paritása — invariáns</span>
      <div className="box-body" style={{ marginBottom: '0.4rem' }}>A felbontás <strong style={{ color: '#f97316' }}>nem egyértelmű</strong>, de a transzpozíciók száma <strong style={{ color: '#34d399' }}>paritásban</strong> mindig azonos.</div>
      <div className="op-row">
        {[['1', 'Kezd 1-el'], ['7', 'Kezd 7-el'], ['2', 'Kezd 2-vel']].map(([k, label]) => (
          <button key={k} className={`op-btn${key === k ? ' is-active' : ''}`} onClick={() => setKey(k)}>{label}</button>
        ))}
      </div>
      <RichTex html={html} />
    </div>
  );
}

/* ── static content ── */
const t1a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — Véges halmaz</div><div class="box-body">Az \(A\) halmazt <strong style="color:#a78bfa">végesnek</strong> nevezzük, ha létezik \(n \in \mathbb{N}_0\), amelyre bijekció adható \(\{1,\ldots,n\}\) és \(A\) között. Ilyenkor \(|A| = n\). Ha \(n=0\), akkor \(A=\emptyset\).</div></div>
<div class="def-box"><div class="lbl mb-2">Definíció — Permutáció, \(S_n\)</div><div class="box-body">Legyen \(|A|=n\). Az \(A\) egy <strong style="color:#a78bfa">permutációja</strong> egy \(A \to A\) bijekció. Az \(\{1,\ldots,n\}\) összes permutációjának halmaza \(S_n\) — a <strong style="color:#a78bfa">szimmetrikus csoport</strong>. \(|S_n| = n!\)</div></div>
<div class="def-box"><div class="lbl mb-2">Mátrixos jelölés</div><div class="box-body">Kétsorú mátrix: felül az értelmezési tartomány, alul a képek. \[\sigma = \begin{pmatrix} 1&2&3&4&5&6&7&8&9 \\ 4&3&2&6&9&1&7&8&5 \end{pmatrix}\] Tehát \(\sigma(1)=4,\ldots,\sigma(9)=5\).</div></div>`;
const t1b = String.raw`
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — \(S_n\) tulajdonságai</div><div class="box-body">Legyenek \(\sigma,\tau \in S_n\):<ol style="margin:.5rem 0 0 1rem;padding:0;line-height:2"><li>\(\sigma\tau \in S_n\)</li><li>asszociatív: \((\sigma\tau)\varrho = \sigma(\tau\varrho)\)</li><li>\(\mathrm{id}\,\sigma = \sigma\,\mathrm{id} = \sigma\)</li><li>minden \(\sigma\)-nak van inverze \(\sigma^{-1}\)</li><li>\((\sigma\tau)^{-1} = \tau^{-1}\sigma^{-1}\)</li></ol></div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Példa — nem-kommutativitás</div><div class="box-body">\[\sigma = \begin{pmatrix}1&2&3&4&5&6&7&8&9\\4&3&2&6&9&1&7&8&5\end{pmatrix},\ \tau = \begin{pmatrix}1&2&3&4&5&6&7&8&9\\2&1&4&3&6&5&8&7&9\end{pmatrix}\] \(S_n\) (\(n \ge 3\)) nem kommutatív: \(\sigma\tau \neq \tau\sigma\). Inverz: \[\sigma^{-1} = \begin{pmatrix}1&2&3&4&5&6&7&8&9\\6&3&2&1&9&4&7&8&5\end{pmatrix}\]</div></div>`;
const t2a = String.raw`
<div class="def-box"><div class="lbl mb-2">Gráfos ábrázolás</div><div class="box-body">Minden \(\sigma\) ábrázolható irányított gráfként: csúcsok \(1,\ldots,n\), élek \(i \to \sigma(i)\). A fixpontok hurokélek. \[M_\sigma = \{a : \sigma(a) \neq a\}\] <strong>Tétel:</strong> \(M_\sigma = \emptyset \Leftrightarrow \sigma = \mathrm{id}\).</div></div>
<div class="def-box"><div class="lbl mb-2">Definíció — Ciklus</div><div class="box-body">\(\sigma\) <strong style="color:#a78bfa">ciklus</strong>, ha \(M_\sigma = \{a_1,\ldots,a_k\}\), ahol \(\sigma(a_1)=a_2,\ldots,\sigma(a_k)=a_1\). Jelölés: \((a_1\;a_2\;\ldots\;a_k)\). Ekvivalens jelölések: \((a_1\;\ldots\;a_k) = (a_2\;\ldots\;a_k\;a_1) = \cdots\)</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Példa — 4-ciklus</div><div class="box-body">\(\gamma = (1\;5\;8\;3)\): \(\gamma(1)=5,\gamma(5)=8,\gamma(8)=3,\gamma(3)=1\). \[(1\;5\;8\;3) = (5\;8\;3\;1) = (8\;3\;1\;5) = (3\;1\;5\;8)\]</div></div>`;
const t2b = String.raw`
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Ciklusok szorzata és inverze</div><div class="box-body">\(\gamma = (a_1\;\ldots\;a_k)\) esetén:<ul style="margin:.5rem 0 0 1rem;padding:0;line-height:2"><li>\(\gamma^{-1} = (a_k\;a_{k-1}\;\ldots\;a_1)\)</li><li>két ciklus szorzata általában nem ciklus</li><li>de mindig permutáció</li></ul> \(\gamma^{-1} = (3\;8\;5\;1)\) ha \(\gamma=(1\;5\;8\;3)\).</div></div>`;
const t3a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — Idegen ciklusok</div><div class="box-body">\(\gamma,\delta\) <strong style="color:#a78bfa">idegen</strong> (diszjunkt), ha \(M_\gamma \cap M_\delta = \emptyset\) — nincs közös mozgott elemük.</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Idegen ciklusok szorzata</div><div class="box-body">\[(\gamma\delta)(a) = \begin{cases} \gamma(a) & a \in M_\gamma \\ \delta(a) & a \in M_\delta \\ a & \text{egyébként} \end{cases}\] <strong>Következmény:</strong> idegen ciklusok felcserélhetők: \(\gamma\delta = \delta\gamma\).</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Felbontás idegen ciklusokra</div><div class="box-body">Minden \(\sigma \neq \mathrm{id}\) felírható idegen ciklusok szorzataként, egyértelműen (sorrendtől és reprezentánstól eltekintve).</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Példa — felbontás</div><div class="box-body">\[\sigma = \begin{pmatrix}1&2&3&4&5&6&7&8&9\\4&3&2&6&9&1&7&8&5\end{pmatrix}\] \(1\to4\to6\to1\), \(2\to3\to2\), \(5\to9\to5\), \(7,8\) fix → \[\sigma = (1\;4\;6)(2\;3)(5\;9)\]</div></div>`;
const t4a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — Permutáció hatványai</div><div class="box-body">\[\sigma^0 = \mathrm{id}, \quad \sigma^{n+1} = \sigma^n \cdot \sigma, \quad \sigma^{-n} = (\sigma^{-1})^n\]</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Hatványszabályok</div><div class="box-body"><ul style="margin:.4rem 0 0 1rem;padding:0;line-height:2.2"><li>\((\sigma^k)^m = \sigma^{km}\)</li><li>\(\sigma^{k+m} = \sigma^k\sigma^m\)</li><li>\((\sigma^k)^{-1} = (\sigma^{-1})^k\)</li></ul> <strong>k-ciklus rendje:</strong> \(\gamma^k = \mathrm{id}\), és \(k\) a legkisebb ilyen.</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Idegen ciklusok szorzatának rendje</div><div class="box-body">Ha \(\sigma = \gamma_1\cdots\gamma_r\) idegen ciklusok, \(\gamma_i\) rendje \(k_i\): \[\mathrm{ord}(\sigma) = \mathrm{lkkt}(k_1,\ldots,k_r)\]</div></div>`;
const t4b = String.raw`
<div class="ex-box"><div class="lbl lbl--ex mb-2">Példa — σ¹⁰⁰</div><div class="box-body">\(\sigma = (1\;4\;6)(2\;3)(5\;9)\). \[\sigma^{100} = (1\;4\;6)^{100}(2\;3)^{100}(5\;9)^{100}\]<div class="pf-step"><div class="pf-eq">\(100 = 3\cdot33 + 1\)</div><div class="pf-why">3-ciklus</div></div><div class="pf-step"><div class="pf-eq">\((1\;4\;6)^{100} = (1\;4\;6)\)</div></div><div class="pf-step"><div class="pf-eq">\((2\;3)^{100} = (5\;9)^{100} = \mathrm{id}\)</div></div><div class="pf-step"><div class="pf-eq" style="color:#34d399">\(\sigma^{100} = (1\;4\;6)\)</div></div></div></div>
<div class="info-box"><div class="lbl mb-1">σ rendje</div><div class="box-body">\(\mathrm{ord}(\sigma) = \mathrm{lkkt}(3,2,2) = 6\), tehát \(\sigma^6 = \mathrm{id}\).</div></div>`;
const t5a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — Transzpozíció</div><div class="box-body">A 2 hosszú ciklus <strong style="color:#a78bfa">transzpozíció</strong>: \(\tau=(a\;b)\), \(\tau(a)=b,\tau(b)=a\). \(\tau^{-1}=\tau\), \(\tau^2 = \mathrm{id}\).</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Ciklus = transzpozíciók szorzata</div><div class="box-body">\[(a_1\;a_2\;\ldots\;a_k) = (a_1\;a_2)(a_1\;a_3)\cdots(a_1\;a_k)\] minden \(k\)-ciklus \((k-1)\) transzpozíció szorzata.</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Minden permutáció = transzpozíciók szorzata</div><div class="box-body">Először idegen ciklusokra bontjuk, majd minden ciklust transzpozíciókra.</div></div>`;
const t5b = String.raw`
<div class="ex-box"><div class="lbl lbl--ex mb-2">Példa — nem egyértelmű, de paritás invariáns</div><div class="box-body">\[(3\;1\;5\;2\;4) = (3\;1)(3\;5)(3\;2)(3\;4)\] \[(1\;5\;2\;4\;3) = (1\;5)(1\;2)(1\;4)(1\;3)\] A felbontás <strong style="color:#f97316">nem egyértelmű</strong>, de a transzpozíciók <em>száma paritásában</em> egyértelmű.</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Teljes példa</div><div class="box-body">\[\sigma = \begin{pmatrix}1&2&3&4&5&6&7&8&9\\7&5&6&3&1&4&2&9&8\end{pmatrix} = (1\;7\;2\;5)(3\;6\;4)(8\;9)\] \[= (1\;7)(1\;2)(1\;5)(3\;6)(3\;4)(8\;9)\] 6 transzpozíció → \(\sigma\) <strong style="color:#a78bfa">páros</strong>.</div></div>`;
const t6a = String.raw`
<div class="def-box" style="border-left-color:#f59e0b"><div class="lbl mb-2" style="color:#f59e0b">Ciklus inverze — fordított sorrend</div><div class="box-body">\[(a_1\;\ldots\;a_k)^{-1} = (a_k\;\ldots\;a_1)\] Példa: \(\gamma=(1\;5\;8\;3)\Rightarrow \gamma^{-1}=(3\;8\;5\;1)\). Idegen ciklusoknál: \((\gamma_1\cdots\gamma_r)^{-1} = \gamma_r^{-1}\cdots\gamma_1^{-1}\).</div></div>`;
const t6b = String.raw`
<div class="info-box"><div class="lbl mb-2">Irányított gráf → ciklusok kapcsolata</div><div class="box-body">A gráf összefüggő körei pontosan a ciklus-felbontás ciklusai:<ul style="margin:.5rem 0 0 1rem;padding:0;line-height:2.1"><li>fixpont → hurokél</li><li>k-ciklus → k csúcsú irányított kör</li></ul></div></div>`;

const TABS: Tab[] = [
  { id: 'al', label: 'Alapfogalmak', content: <Cols><RichTex html={t1a} /><RichTex html={t1b} /></Cols> },
  { id: 'cy', label: 'Ciklusok', content: <Cols><RichTex html={t2a} /><div><RichTex html={t2b} /><CycleCanvas /></div></Cols> },
  { id: 'id', label: 'Idegen ciklusok', content: <Cols><RichTex html={t3a} /><PermDecomposer /></Cols> },
  { id: 'ha', label: 'Hatványok', content: <Cols><RichTex html={t4a} /><RichTex html={t4b} /></Cols> },
  { id: 'tr', label: 'Transzpozíciók', content: <Cols><RichTex html={t5a} /><div><RichTex html={t5b} /><TranspDecomp /></div></Cols> },
  {
    id: 'ex',
    label: 'Előadás+',
    content: (
      <Cols>
        <div>
          <div className="info-box">
            <span className="lbl">Szorzás konvenciója — (σ∘τ)(x) = σ(τ(x))</span>
            <CompTable />
            <RichTex html={String.raw`<div class="box-body" style="margin-top:.5rem">Eredmény: \(\sigma\tau = \begin{pmatrix}1&2&3&4&5&6&7&8&9\\3&4&6&2&1&9&8&7&5\end{pmatrix}\) — a τ∘σ más → \(S_9\) nem kommutatív!</div>`} />
          </div>
          <RichTex html={t6a} />
        </div>
        <div>
          <CycleParity />
          <RichTex html={t6b} />
        </div>
      </Cols>
    ),
  },
];

export default function Ch3() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">ILA — 3. fejezet</p>
      <h1 className="ila__title">Permutációk</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2025</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
