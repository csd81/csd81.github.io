import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* ════ Helper ════ */
function choose(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  k = Math.min(k, n - k);
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}

/* ════ Tab 1: Sperner antilánc-építő ════ */
const N4 = 4;
const ALL_SUBSETS4: number[][] = [];
for (let mask = 0; mask < 1 << N4; mask++) {
  const s: number[] = [];
  for (let i = 0; i < N4; i++) if (mask & (1 << i)) s.push(i + 1);
  ALL_SUBSETS4.push(s);
}

function subsetLabel(s: number[]) { return s.length === 0 ? '∅' : '{' + s.join(',') + '}'; }
function subsetKey(s: number[]) { return s.join(','); }

function SpernerBuilder() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(s: number[]) {
    const key = subsetKey(s);
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  }

  function reset() { setSelected(new Set()); }

  const selArrays = ALL_SUBSETS4.filter((s) => selected.has(subsetKey(s)));
  const conflicts = new Set<string>();
  for (let i = 0; i < selArrays.length; i++) {
    for (let j = 0; j < selArrays.length; j++) {
      if (i === j) continue;
      const a = selArrays[i], b = selArrays[j];
      if (a.every((x) => b.includes(x)) && a.length < b.length) {
        conflicts.add(subsetKey(a)); conflicts.add(subsetKey(b));
      }
    }
  }

  let lubell = 0;
  selArrays.forEach((s) => { lubell += 1 / choose(N4, s.length); });
  const maxAC = choose(N4, Math.floor(N4 / 2));

  const spernerTableHtml = (() => {
    let html = '<table class="cayley" style="width:100%"><thead><tr><th>n</th><th>max antilánc</th><th>= C(n,⌊n/2⌋)</th></tr></thead><tbody>';
    for (let n = 1; n <= 8; n++) {
      const hk = Math.floor(n / 2);
      const val = choose(n, hk);
      html += `<tr><td>${n}</td><td style="color:#34d399;">${val}</td><td style="color:#64748b;">C(${n},${hk})</td></tr>`;
    }
    return html + '</tbody></table>';
  })();

  const bySize: number[][][] = [[], [], [], [], []];
  ALL_SUBSETS4.forEach((s) => bySize[s.length].push(s));

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#10b981' }}>Sperner-tábla: maximális antilánc mérete n=1..8</span>
        <RichTex html={spernerTableHtml} />
      </div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#10b981' }}>Interaktív — n=4 antilánc-építő</span>
        <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.3rem 0' }}>Kattintson a részhalmazokra az antiláncba való felvételhez. Piros = tartalmazási konfliktus.</p>
        <div>
          {bySize.map((row, sz) => row.length === 0 ? null : (
            <div key={sz} style={{ margin: '.3rem 0', display: 'flex', alignItems: 'center', gap: '.3rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '.72rem', color: '#64748b', minWidth: '3.5rem' }}>|A|={sz}:</span>
              {row.map((s) => {
                const key = subsetKey(s);
                const isSel = selected.has(key);
                const isConf = conflicts.has(key);
                const bg = isSel ? (isConf ? 'rgba(239,68,68,.15)' : 'rgba(16,185,129,.2)') : '#0e1014';
                const borderCol = isSel ? (isConf ? '#ef4444' : '#10b981') : '#1e2533';
                const color = isSel ? (isConf ? '#fca5a5' : '#34d399') : '#94a3b8';
                return (
                  <span
                    key={key}
                    onClick={() => toggle(s)}
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 38, padding: '.2rem .45rem', borderRadius: 6, fontSize: '.78rem', fontFamily: 'monospace', cursor: 'pointer', border: `2px solid ${borderCol}`, background: bg, color, transition: 'all .2s', userSelect: 'none' }}
                  >
                    {subsetLabel(s)}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '.5rem', flexWrap: 'wrap', fontSize: '.82rem', color: '#94a3b8' }}>
          <span>Lubell-összeg: <strong style={{ color: lubell > 1.001 ? '#ef4444' : '#34d399' }}>{lubell.toFixed(4)}</strong> ≤ 1 &nbsp;|&nbsp; Antilánc mérete: <strong style={{ color: '#34d399' }}>{selArrays.length}</strong> / max {maxAC}</span>
          {conflicts.size > 0
            ? <span style={{ color: '#ef4444' }}>✗ Tartalmazási konfliktus!</span>
            : selArrays.length > 0 ? <span style={{ color: '#10b981' }}>✓ Érvényes antilánc</span> : null}
        </div>
        <button className="op-btn" onClick={reset} style={{ marginTop: '.5rem', fontSize: '.78rem' }}>Törlés</button>
      </div>
    </div>
  );
}

/* ════ Tab 2: EKR calculator ════ */
function EKRCalc() {
  const [n, setN] = useState(6);
  const [k, setK] = useState(2);
  const [result, setResult] = useState<string | null>(null);

  function calc() {
    const total = choose(n, k);
    const bound = choose(n - 1, k - 1);
    const ok = k <= n / 2;
    if (!ok) {
      setResult('<div class="warn-box">EKR feltétel: k ≤ n/2. Próbáljon kisebb k-t!</div>');
    } else {
      setResult(`<div class="def-box">Összes ${k}-részhalmaz: <strong style="color:#34d399;">C(${n},${k}) = ${total}</strong><br>EKR korlát: <strong style="color:#a78bfa;">C(${n - 1},${k - 1}) = ${bound}</strong><br>"Csillag" (rögzített elem = 1): pontosan ${bound} darab ${k}-részhalmaz tartalmazza az 1-es elemet.</div>`);
    }
  }

  const tableHtml = (() => {
    let html = '<table class="cayley" style="width:100%"><thead><tr><th>n</th><th>k=2</th><th>C(n,2)</th><th>C(n−1,1)</th><th>arány</th></tr></thead><tbody>';
    for (let nn = 5; nn <= 10; nn++) {
      const total = choose(nn, 2);
      const bound = choose(nn - 1, 1);
      const ratio = (bound / total * 100).toFixed(1);
      html += `<tr><td>${nn}</td><td style="color:#34d399;">${bound}</td><td>${total}</td><td style="color:#64748b;">${bound}</td><td style="color:#94a3b8;">${ratio}%</td></tr>`;
    }
    return html + '</tbody></table>';
  })();

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#10b981' }}>Interaktív — EKR korlát</span>
        <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.3rem 0' }}>Adja meg n és k értékét:</p>
        <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem' }}>
          <span>n = <input type="number" className="ila-num" value={n} min={2} max={20} onChange={(e) => setN(+e.target.value)} /></span>
          <span>k = <input type="number" className="ila-num" value={k} min={1} max={10} onChange={(e) => setK(+e.target.value)} /></span>
          <button className="op-btn is-active" onClick={calc} style={{ background: '#10b981', color: '#000', border: 'none' }}>Számít</button>
        </div>
        {result && <RichTex key={`ekr${n}${k}`} html={result} />}
      </div>
      <div className="info-box" style={{ overflowX: 'auto' }}>
        <span className="lbl" style={{ color: '#10b981' }}>EKR korlát táblázata (n=5..10, k=2)</span>
        <RichTex html={tableHtml} />
      </div>
    </div>
  );
}

/* ════ Tab 4: Simplex canvas ════ */
function SimplexCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [desc, setDesc] = useState('');

  function draw() {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.fillStyle = '#0d1117'; ctx.fillRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2;
    ctx.strokeStyle = '#1e2533'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, H); ctx.stroke();
    ctx.fillStyle = '#334155'; ctx.font = '11px monospace';
    ctx.fillText('x', W - 12, cy - 4); ctx.fillText('y', cx + 4, 10);
    const angle = Math.random() * Math.PI * 2;
    const r1 = 60 + Math.random() * 40;
    const r2 = 50 + Math.random() * 40;
    const a2 = angle + 0.8 + Math.random() * 1.5;
    const v1 = [r1 * Math.cos(angle), r1 * Math.sin(angle)];
    const v2 = [r2 * Math.cos(a2), r2 * Math.sin(a2)];
    const v3 = [-(v1[0] + v2[0]), -(v1[1] + v2[1])];
    const vecs = [v1, v2, v3];
    const colors = ['#10b981', '#38bdf8', '#f59e0b'];
    const labels = ['v₁', 'v₂', 'v₃'];
    vecs.forEach((v, i) => {
      const ex = cx + v[0], ey = cy - v[1];
      ctx.strokeStyle = colors[i]; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ex, ey); ctx.stroke();
      const ang = Math.atan2(-(ey - cy), ex - cx);
      ctx.fillStyle = colors[i];
      ctx.beginPath();
      ctx.moveTo(ex, ey);
      ctx.lineTo(ex - 10 * Math.cos(ang - 0.35), ey + 10 * Math.sin(ang - 0.35));
      ctx.lineTo(ex - 10 * Math.cos(ang + 0.35), ey + 10 * Math.sin(ang + 0.35));
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = colors[i]; ctx.font = 'bold 13px sans-serif';
      ctx.fillText(labels[i], ex + 8, ey - 5);
    });
    ctx.strokeStyle = 'rgba(16,185,129,.25)'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(cx + v1[0], cy - v1[1]);
    ctx.lineTo(cx + v2[0], cy - v2[1]);
    ctx.lineTo(cx + v3[0], cy - v3[1]);
    ctx.closePath(); ctx.stroke(); ctx.setLineDash([]);
    const fmt = (x: number) => +x.toFixed(2);
    setDesc(
      `v₁=(${fmt(v1[0])},${fmt(v1[1])}),  v₂=(${fmt(v2[0])},${fmt(v2[1])}),  v₃=(${fmt(v3[0])},${fmt(v3[1])})` +
      `  |  v₁+v₂+v₃ = (${fmt(v1[0] + v2[0] + v3[0])},${fmt(v1[1] + v2[1] + v3[1])}) = (0,0) ✓ — lineárisan összefüggők`
    );
  }

  useEffect(() => { draw(); }, []);

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#10b981' }}>Példa — szimplex ℝ²-ben</span>
      <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.3rem 0' }}>Három vektor ℝ²-ben: ha összegük nulla, szimplex.</p>
      <canvas ref={ref} width={380} height={260} style={{ width: '100%', maxWidth: 380, background: '#0d1117', borderRadius: '.3rem', display: 'block' }} />
      <div style={{ marginTop: '.5rem', fontSize: '.82rem', color: '#94a3b8' }}>{desc}</div>
      <button className="op-btn" onClick={draw} style={{ marginTop: '.5rem' }}>Új példa</button>
    </div>
  );
}

/* ════ Static theory ════ */
const t1 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Sperner tétele (1928)</h5>
<div class="def-box"><div class="lbl mb-2">Antilánc</div><div class="box-body">Egy \(\mathcal{F} \subseteq \mathcal{P}(\{1,\ldots,n\})\) <strong>antiláncnak</strong> nevezzük, ha egyetlen \(A,B \in \mathcal{F}\) sem teljesíti az \(A \subsetneq B\) feltételt.</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Sperner (1928)</div><div class="box-body">
\[\max|\mathcal{F}| = \binom{n}{\lfloor n/2\rfloor}\]
Ez pontosan a \(\lfloor n/2 \rfloor\)-elemű részhalmazok száma.</div></div>
<div class="thm-box"><div class="box-body"><strong>Lubell-egyenlőtlenség:</strong>
\[\sum_{A_i \in \mathcal{F}} \frac{1}{\binom{n}{|A_i|}} \leq 1\]
tetszőleges antiláncra.</div></div>`;

const t2 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Erdős-Ko-Rado tétel (1961)</h5>
<div class="def-box"><div class="box-body">\(\mathcal{F}\) <strong>metsző rendszer</strong>, ha minden \(A,B \in \mathcal{F}\)-re \(A \cap B \neq \emptyset\).</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">EKR tétel</div><div class="box-body">Ha \(|\mathcal{F}|\) egy metsző \(k\)-elem részhalmazrendszer \(\{1,\ldots,n\}\) felett és \(k \leq n/2\), akkor
\[|\mathcal{F}| \leq \binom{n-1}{k-1}\]
Egyenlőség esetén \(\mathcal{F}\) egy <em>csillag</em>: az összes \(k\)-részhalmaz, amely tartalmaz egy rögzített elemet.</div></div>
<div class="ex-box"><div class="box-body"><strong>Katona elegáns bizonyítása:</strong> Tekintsük az \(\{1,\ldots,n\}\) ciklikus permutációit. Minden permutációban legfeljebb \(k\) darab \(\mathcal{F}\)-beli halmaz jelenik meg egymás mellett. Ez adja az egyenlőtlenséget.</div></div>`;

const t3 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Fisher & Ryser — tétel-összefoglaló</h5>
<div class="info-box" style="overflow-x:auto"><table class="cayley" style="width:100%"><thead><tr><th>Tétel</th><th>Feltétel</th><th>Következtetés</th><th>Módszer</th></tr></thead><tbody>
<tr><td style="color:#34d399;">Erdős-DeBruijn</td><td>\(|A_i \cap A_j|=1\) minden \(i \neq j\)-re</td><td>\(m \leq n\)</td><td>Kombinatorikus</td></tr>
<tr><td style="color:#34d399;">Gallai-következmény</td><td>m nem kollineáris pont a síkban</td><td>Legalább m egyenest határoz meg</td><td>Dualizáció</td></tr>
<tr><td style="color:#34d399;">Fisher-egyenlőtlenség</td><td>\(|A_i \cap A_j|=t\) és \(|A_i|=k\) minden \(i \neq j\)-re</td><td>\(m \leq n\)</td><td>Lineáris algebra</td></tr>
<tr><td style="color:#34d399;">Ryser általánosítása</td><td>Két lehetséges metszési méret</td><td>m ≤ n + általánosítás</td><td>Lineáris algebra</td></tr>
</tbody></table></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Erdős-DeBruijn</div><div class="box-body">Ha \(A_1,\ldots,A_m \subseteq \{1,\ldots,n\}\) és \(|A_i \cap A_j|=1\) minden \(i \neq j\)-re (projektív sík tulajdonság), akkor \(m \leq n\).</div></div>
<div class="ex-box"><div class="box-body"><strong>Példa — Fano-sík:</strong> 7 pont, 7 egyenes, minden kettő metszi egymást pontosan 1 pontban. \(m=n=7\). ✓</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Fisher-egyenlőtlenség</div><div class="box-body">Legyen \(A_1,\ldots,A_m \subseteq \{1,\ldots,n\}\) olyan, hogy \(|A_i|=k\) és \(|A_i \cap A_j|=t\) minden \(i \neq j\)-re. Ekkor \(m \leq n\).</div></div>
<div class="def-box"><div class="box-body"><strong>Bizonyítás vázlata (lin. algebra):</strong><br>
Legyen \(M\) az \(m \times n\) incidensmátrix. Ekkor \(M M^T = (k-t)I + tJ\), ahol \(J\) az egyes mátrix. Ez a mátrix reguláris, ha \(k \neq t\), tehát \(\text{rang}(M) = m \leq n\).</div></div>`;

const t4 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Algebrai szimplexek</h5>
<div class="def-box"><div class="lbl mb-2">Algebrai szimplex</div><div class="box-body">Vektorok egy \(S = \{v_1,\ldots,v_k\}\) halmaza <strong>algebrai szimplex</strong>, ha:<br>
• az egész halmaz lineárisan összefüggő,<br>
• minden valódi részhalmaza lineárisan független.</div></div>
<div class="thm-box"><div class="box-body">Kapcsolat kémiához: egy \(S\) szimplex pontosan egy minimális kémiai reakcióegyenletnek felel meg, amelyben az összetevők lineárisan összefüggnek.</div></div>
<div class="thm-box"><div class="box-body">Kapcsolat matroid-elmélethez: a lineáris matroid körjei pontosan az algebrai szimplexek.</div></div>
<div class="ex-box"><div class="box-body"><strong>Szalkai-LaFlamme korlát:</strong><br>
Az \(F^n\) tér k-dimenziós alterén lévő szimplexek száma legfeljebb \(\binom{n}{k+1}\).</div></div>`;

const TABS: Tab[] = [
  { id: 'sperner', label: 'Sperner tétele', content: <div><RichTex html={t1} /><SpernerBuilder /></div> },
  { id: 'ekr', label: 'Erdős-Ko-Rado', content: <div><RichTex html={t2} /><EKRCalc /></div> },
  { id: 'fisher', label: 'Fisher & Ryser', content: <RichTex html={t3} /> },
  { id: 'simplex', label: 'Szimplexek', content: <div><RichTex html={t4} /><SimplexCanvas /></div> },
];

export default function DimatCh7() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika VII — fejezet</p>
      <h1 className="ila__title">Extremális halmazrendszerek</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
