import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* ════ Helpers ════ */
function choose(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  k = Math.min(k, n - k);
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}

function factorial(n: number): number {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function stirling2(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  if (n === 0 && k === 0) return 1;
  if (n === 0 || k === 0) return 0;
  const dp: number[][] = [];
  for (let i = 0; i <= n; i++) dp.push(new Array(n + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= n; i++)
    for (let j = 1; j <= i; j++)
      dp[i][j] = j * dp[i - 1][j] + dp[i - 1][j - 1];
  return dp[n][k];
}

/* ════ Tab 1: Number partitions with Young diagrams ════ */
function genPartitions(n: number): number[][] {
  const result: number[][] = [];
  function helper(rem: number, maxPart: number, current: number[]) {
    if (rem === 0) { result.push([...current]); return; }
    for (let p = Math.min(rem, maxPart); p >= 1; p--) {
      current.push(p);
      helper(rem - p, p, current);
      current.pop();
    }
  }
  helper(n, n, []);
  return result;
}

function youngDiagramHtml(partition: number[]): string {
  const BOX = '<div style="width:16px;height:16px;border:1px solid #059669;border-radius:2px;background:rgba(16,185,129,.2);display:inline-block;margin:1px;"></div>';
  return '<div style="display:inline-block;vertical-align:top;">' +
    partition.map((row) => '<div>' + BOX.repeat(row) + '</div>').join('') +
    '</div>';
}

function PartitionCalc() {
  const [n, setN] = useState(5);
  const [result, setResult] = useState<string | null>(null);

  function calc() {
    const nn = Math.min(20, Math.max(1, n));
    if (nn < 1 || nn > 20) { setResult('<div style="color:#ef4444;font-size:.82rem;">n legyen 1 és 20 között!</div>'); return; }
    const parts = genPartitions(nn);
    const hrApprox = (1 / (4 * nn * Math.sqrt(3))) * Math.exp(Math.PI * Math.sqrt(2 * nn / 3));
    let html = `<p style="font-size:.82rem;color:#94a3b8;">P(${nn}) = <strong style="color:#34d399;">${parts.length}</strong> &nbsp;|&nbsp; Hardy-Ramanujan: ≈ ${hrApprox.toFixed(2)}</p>`;
    if (nn <= 10) {
      html += '<div style="display:flex;flex-wrap:wrap;gap:.75rem;margin-top:.5rem;">';
      parts.forEach((p) => {
        html += `<div style="text-align:center;">${youngDiagramHtml(p)}<div style="font-size:.72rem;color:#64748b;margin-top:.15rem;font-family:monospace;">${p.join('+') || '0'}</div></div>`;
      });
      html += '</div>';
    } else {
      html += '<div style="font-size:.82rem;color:#64748b;">(n&gt;10: Young-diagramok nem megjelenítve — túl sok)</div>';
      if (nn <= 15) {
        html += '<div style="font-size:.78rem;color:#64748b;margin-top:.3rem;">';
        parts.slice(0, 30).forEach((p) => { html += `<span style="font-family:monospace;margin-right:.5rem;">${p.join('+')}</span>`; });
        if (parts.length > 30) html += `<span style="color:#475569;">…és még ${parts.length - 30} db</span>`;
        html += '</div>';
      }
    }
    setResult(html);
  }

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#10b981' }}>Interaktív — összes felbontás Young-diagrammokkal</span>
      <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center', margin: '.4rem 0', fontSize: '.85rem' }}>
        <span>n = <input type="number" className="ila-num" value={n} min={1} max={20} onChange={(e) => setN(+e.target.value)} /></span>
        <button className="op-btn is-active" onClick={calc} style={{ background: '#10b981', color: '#000', border: 'none' }}>Számít</button>
      </div>
      {result && <div dangerouslySetInnerHTML={{ __html: result }} />}
    </div>
  );
}

/* ════ Tab 2: Stirling triangle ════ */
function StirlingTriangle() {
  const [detail, setDetail] = useState<string | null>(null);
  const N = 8;

  let html = `<table class="cayley" style="width:100%"><thead><tr><th>n\\k</th>`;
  for (let k = 0; k <= N; k++) html += `<th>${k}</th>`;
  html += '</tr></thead><tbody>';
  for (let n = 0; n <= N; n++) {
    html += `<tr><td style="color:#64748b;font-weight:600;">${n}</td>`;
    for (let k = 0; k <= N; k++) {
      const v = stirling2(n, k);
      html += `<td class="stir-cell" data-n="${n}" data-k="${k}" style="text-align:center;padding:.35rem .5rem;font-family:monospace;font-size:.8rem;cursor:pointer;${v > 0 ? 'color:#34d399;' : 'color:#334155;'}">${v}</td>`;
    }
    html += '</tr>';
  }
  html += '</tbody></table>';

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const td = (e.target as HTMLElement).closest('td');
    if (!td) return;
    const nn = parseInt(td.getAttribute('data-n') ?? '-1');
    const kk = parseInt(td.getAttribute('data-k') ?? '-1');
    if (nn < 0 || kk < 0) return;
    const v = stirling2(nn, kk);
    let d = `<strong style="color:#10b981;">S(${nn},${kk}) = ${v}</strong>`;
    if (v > 0 && nn > 0 && kk > 0) {
      const prev1 = stirling2(nn - 1, kk);
      const prev2 = stirling2(nn - 1, kk - 1);
      d += ` &nbsp;=&nbsp; ${kk}·S(${nn - 1},${kk}) + S(${nn - 1},${kk - 1}) = ${kk}·${prev1} + ${prev2}`;
    }
    if (nn <= 4 && kk >= 1 && kk <= nn) {
      d += `<br><span style="font-size:.78rem;color:#64748b;">{'{'}1..${nn}{'}'} felbontása ${kk} részhalmazra — rekurzió alapján</span>`;
    }
    setDetail(d);
  }

  return (
    <div className="info-box" style={{ overflowX: 'auto' }}>
      <span className="lbl" style={{ color: '#10b981' }}>Stirling-háromszög (n,k = 0..8) — kattintson egy cellára a részletekért</span>
      <div onClick={handleClick} dangerouslySetInnerHTML={{ __html: html }} />
      {detail && <div style={{ fontSize: '.82rem', color: '#94a3b8', marginTop: '.5rem' }} dangerouslySetInnerHTML={{ __html: detail }} />}
    </div>
  );
}

/* ════ Tab 3: Bell triangle ════ */
function BellTriangle() {
  const N = 7;
  const tri: number[][] = [[1]];
  for (let n = 1; n <= N; n++) {
    const prev = tri[n - 1];
    const row = [prev[prev.length - 1]];
    for (let k = 1; k <= n; k++) row.push(row[k - 1] + prev[k - 1]);
    tri.push(row);
  }

  const triHtml = tri.map((row, i) =>
    `<div style="display:flex;gap:.3rem;justify-content:center;margin:.2rem 0;">` +
    row.map((v, j) =>
      `<div style="min-width:36px;text-align:center;font-family:monospace;font-size:.82rem;${j === 0 ? 'color:#34d399;font-weight:600;' : 'color:#94a3b8;'}" title="B${i}=${row[0]}">${v}</div>`
    ).join('') + '</div>'
  ).join('');

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#10b981' }}>Bell-háromszög (Aitken-tömb, n=0..7)</span>
      <p style={{ fontSize: '.8rem', color: '#94a3b8', margin: '.3rem 0' }}>Felépítés: 1-gyel kezdünk. Minden sor az előző sor utolsó elemével kezdődik, majd az előző elem + fölötte lévő elem összeadásával folytatódik. Az első elem mindig az új Bₙ.</p>
      <div dangerouslySetInnerHTML={{ __html: triHtml }} />
    </div>
  );
}

/* ════ Tab 4: 11 cases calculator ════ */
function pnk(n: number, k: number): number {
  if (k <= 0 || k > n) return 0;
  function go(rem: number, maxp: number, parts: number): number {
    if (parts === 0) return rem === 0 ? 1 : 0;
    let s = 0;
    for (let p = 1; p <= Math.min(rem, maxp); p++) s += go(rem - p, p, parts - 1);
    return s;
  }
  return go(n, n, k);
}

function pnAtMostK(n: number, k: number): number {
  let s = 0;
  for (let j = 1; j <= k; j++) s += pnk(n, j);
  return s;
}

function CaseCalc() {
  const [balls, setBalls] = useState<'dist' | 'id'>('dist');
  const [boxes, setBoxes] = useState<'dist' | 'id'>('dist');
  const [empty, setEmpty] = useState<'yes' | 'no'>('yes');
  const [n, setN] = useState(4);
  const [k, setK] = useState(2);
  const [result, setResult] = useState<string | null>(null);

  function calc() {
    let formula = '', value = 0, caseNum = 0;
    if (balls === 'dist' && boxes === 'dist' && empty === 'yes') {
      caseNum = 1; formula = `k^n = ${k}^${n}`; value = Math.pow(k, n);
    } else if (balls === 'dist' && boxes === 'dist' && empty === 'no') {
      caseNum = 2; const s = stirling2(n, k); const f = factorial(k);
      formula = `k!·S(n,k) = ${k}!·${s}`; value = f * s;
    } else if (balls === 'dist' && boxes === 'id' && empty === 'yes') {
      caseNum = 3; let s = 0; for (let j = 1; j <= k; j++) s += stirling2(n, j);
      formula = `Σ S(n,j) j=1..k`; value = s;
    } else if (balls === 'dist' && boxes === 'id' && empty === 'no') {
      caseNum = 4; formula = `S(n,k) = S(${n},${k})`; value = stirling2(n, k);
    } else if (balls === 'id' && boxes === 'dist' && empty === 'yes') {
      caseNum = 5; formula = `C(n+k-1,k-1) = C(${n + k - 1},${k - 1})`; value = choose(n + k - 1, k - 1);
    } else if (balls === 'id' && boxes === 'dist' && empty === 'no') {
      caseNum = 6; formula = `C(n-1,k-1) = C(${n - 1},${k - 1})`; value = choose(n - 1, k - 1);
    } else if (balls === 'id' && boxes === 'id' && empty === 'yes') {
      caseNum = 7; formula = `P(n, ≤ k)`; value = pnAtMostK(n, k);
    } else {
      caseNum = 8; formula = `P(n, k) = P(${n}, ${k})`; value = pnk(n, k);
    }
    setResult(`<div class="def-box"><strong>Eset #${caseNum}</strong> — ${balls === 'dist' ? 'különböző' : 'azonos'} golyók, ${boxes === 'dist' ? 'különböző' : 'azonos'} dobozok, üres ${empty === 'yes' ? 'igen' : 'nem'}<br>Képlet: <span style="color:#a78bfa;">${formula}</span><br>Érték (n=${n}, k=${k}): <strong style="color:#34d399;font-size:1.05rem;">${value.toLocaleString('hu')}</strong></div>`);
  }

  function RadioGroup({ group, value, options, onChange }: { group: string; value: string; options: [string, string][]; onChange: (v: string) => void }) {
    return (
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        {options.map(([val, label]) => (
          <button
            key={val}
            className={`op-btn${value === val ? ' is-active' : ''}`}
            onClick={() => onChange(val)}
          >
            {label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#10b981' }}>Interaktív — eset kiválasztása</span>
      <div style={{ marginBottom: '.5rem' }}>
        <p style={{ fontSize: '.8rem', color: '#94a3b8', margin: '.3rem 0' }}>Golyók:</p>
        <RadioGroup group="balls" value={balls} options={[['dist', 'különbözők'], ['id', 'azonosak']]} onChange={(v) => setBalls(v as 'dist' | 'id')} />
      </div>
      <div style={{ marginBottom: '.5rem' }}>
        <p style={{ fontSize: '.8rem', color: '#94a3b8', margin: '.3rem 0' }}>Dobozok:</p>
        <RadioGroup group="boxes" value={boxes} options={[['dist', 'különbözők'], ['id', 'azonosak']]} onChange={(v) => setBoxes(v as 'dist' | 'id')} />
      </div>
      <div style={{ marginBottom: '.75rem' }}>
        <p style={{ fontSize: '.8rem', color: '#94a3b8', margin: '.3rem 0' }}>Üres doboz megengedett?</p>
        <RadioGroup group="empty" value={empty} options={[['yes', 'igen'], ['no', 'nem']]} onChange={(v) => setEmpty(v as 'yes' | 'no')} />
      </div>
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginBottom: '.5rem', fontSize: '.85rem' }}>
        <span>n = <input type="number" className="ila-num" value={n} min={1} max={10} onChange={(e) => setN(+e.target.value)} /></span>
        <span>k = <input type="number" className="ila-num" value={k} min={1} max={8} onChange={(e) => setK(+e.target.value)} /></span>
        <button className="op-btn is-active" onClick={calc} style={{ background: '#10b981', color: '#000', border: 'none' }}>Számít</button>
      </div>
      {result && <RichTex key={`case${balls}${boxes}${empty}${n}${k}`} html={result} />}
    </div>
  );
}

/* ════ Static theory ════ */
const t1 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Számok felbontása (partíciója)</h5>
<div class="def-box"><div class="lbl mb-2">Definíció</div><div class="box-body">\(n\) <strong>felbontása (partíciója)</strong>: \(n\) felírása pozitív egész számok összegeként (a sorrend nem számít).<br>\(P(n)\) = a felbontások száma.</div></div>
<div class="info-box" style="overflow-x:auto"><table class="cayley" style="width:100%"><thead><tr><th>n</th><th>P(n)</th></tr></thead><tbody>
<tr><td>1</td><td style="color:#34d399;">1</td></tr><tr><td>2</td><td style="color:#34d399;">2</td></tr><tr><td>3</td><td style="color:#34d399;">3</td></tr>
<tr><td>4</td><td style="color:#34d399;">5</td></tr><tr><td>5</td><td style="color:#34d399;">7</td></tr><tr><td>6</td><td style="color:#34d399;">11</td></tr>
<tr><td>7</td><td style="color:#34d399;">15</td></tr><tr><td>8</td><td style="color:#34d399;">22</td></tr><tr><td>9</td><td style="color:#34d399;">30</td></tr>
<tr><td>10</td><td style="color:#34d399;">42</td></tr>
</tbody></table></div>
<div class="thm-box"><div class="box-body"><strong>Hardy-Ramanujan közelítés:</strong>
\[P(n) \approx \frac{1}{4n\sqrt{3}}\,e^{\pi\sqrt{2n/3}}\]</div></div>
<div class="def-box"><div class="box-body"><strong>Generátorfüggvény:</strong>
\[\sum_{n=0}^{\infty} P(n)\,x^n = \prod_{i=1}^{\infty}\frac{1}{1-x^i}\]</div></div>`;

const t2 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Stirling-számok (2. faj)</h5>
<div class="def-box"><div class="box-body">\(S(n,k)\) = az \(\{1,\ldots,n\}\) halmaz pontosan \(k\) <em>nem üres</em> részhalmazra való felbontásainak száma.</div></div>
<div class="thm-box"><div class="box-body"><strong>Rekurzió:</strong>
\[S(n,k) = k\cdot S(n-1,k) + S(n-1,k-1)\]
\(S(n,1)=S(n,n)=1,\quad S(n,0)=0\; (n>0)\)</div></div>
<div class="def-box"><div class="box-body"><strong>Explicit (inklúzió-kizárás):</strong>
\[S(n,k)=\frac{1}{k!}\sum_{j=0}^{k}(-1)^j\binom{k}{j}(k-j)^n\]</div></div>`;

const t3 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Bell-számok</h5>
<div class="def-box"><div class="box-body">\(B_n = \sum_{k=0}^{n} S(n,k)\) = az \(\{1,\ldots,n\}\) halmaz összes partíciójának száma.</div></div>
<div class="info-box" style="overflow-x:auto"><table class="cayley" style="width:100%"><thead><tr><th>n</th><th>Bₙ</th></tr></thead><tbody>
<tr><td>0</td><td style="color:#34d399;">1</td></tr><tr><td>1</td><td style="color:#34d399;">1</td></tr><tr><td>2</td><td style="color:#34d399;">2</td></tr>
<tr><td>3</td><td style="color:#34d399;">5</td></tr><tr><td>4</td><td style="color:#34d399;">15</td></tr><tr><td>5</td><td style="color:#34d399;">52</td></tr>
<tr><td>6</td><td style="color:#34d399;">203</td></tr><tr><td>7</td><td style="color:#34d399;">877</td></tr><tr><td>8</td><td style="color:#34d399;">4140</td></tr>
</tbody></table></div>
<div class="thm-box"><div class="box-body"><strong>EGF:</strong>
\[B(x)=e^{e^x-1},\quad B_n=n!\,[x^n]e^{e^x-1}\]</div></div>`;

const t4 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">A szétosztás/partíció 11 standard esete</h5>
<div class="info-box" style="overflow-x:auto"><table class="cayley" style="width:100%"><thead><tr><th>#</th><th>Golyók</th><th>Dobozok</th><th>Üres?</th><th>Képlet (n golyó, k doboz)</th></tr></thead><tbody>
<tr><td>1</td><td>különbözők</td><td>különbözők</td><td>igen</td><td style="color:#34d399;">\(k^n\)</td></tr>
<tr><td>2</td><td>különbözők</td><td>különbözők</td><td>nem</td><td style="color:#34d399;">\(k!\,S(n,k)\)</td></tr>
<tr><td>3</td><td>különbözők</td><td>azonosak</td><td>igen</td><td style="color:#34d399;">\(\sum_{j=1}^{k}S(n,j)\)</td></tr>
<tr><td>4</td><td>különbözők</td><td>azonosak</td><td>nem</td><td style="color:#34d399;">\(S(n,k)\)</td></tr>
<tr><td>5</td><td>azonosak</td><td>különbözők</td><td>igen</td><td style="color:#34d399;">\(\binom{n+k-1}{k-1}\)</td></tr>
<tr><td>6</td><td>azonosak</td><td>különbözők</td><td>nem</td><td style="color:#34d399;">\(\binom{n-1}{k-1}\)</td></tr>
<tr><td>7</td><td>azonosak</td><td>azonosak</td><td>igen</td><td style="color:#34d399;">\(P(n,\leq k)\)</td></tr>
<tr><td>8</td><td>azonosak</td><td>azonosak</td><td>nem</td><td style="color:#34d399;">\(P(n,k)\)</td></tr>
<tr><td>9</td><td>különbözők</td><td>különbözők</td><td>—</td><td style="color:#64748b;">(rendezett) \(n!\) (bijekciók)</td></tr>
<tr><td>10</td><td>azonosak</td><td>különbözők</td><td>—</td><td style="color:#64748b;">(sorrendtől függ, ld. 5–6)</td></tr>
<tr><td>11</td><td>azonosak</td><td>azonosak</td><td>—</td><td style="color:#64748b;">(ld. 7–8, \(P(n)\))</td></tr>
</tbody></table></div>`;

const TABS: Tab[] = [
  { id: 'pn', label: 'Számok felbontása', content: <div><RichTex html={t1} /><PartitionCalc /></div> },
  { id: 'stir', label: 'Stirling-számok', content: <div><RichTex html={t2} /><StirlingTriangle /></div> },
  { id: 'bell', label: 'Bell-számok', content: <div><RichTex html={t3} /><BellTriangle /></div> },
  { id: 'cases', label: '11 eset', content: <div><RichTex html={t4} /><CaseCalc /></div> },
];

export default function DimatCh8() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika VIII — fejezet</p>
      <h1 className="ila__title">Partíciós problémák</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
