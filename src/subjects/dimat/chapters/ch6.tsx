import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* ════ Tab 2: Linear recurrence GF calculator ════ */
function GFLinCalc() {
  const [c1, setC1] = useState(1);
  const [c2, setC2] = useState(1);
  const [a0, setA0] = useState(0);
  const [a1, setA1] = useState(1);
  const [result, setResult] = useState<{ num0: number; num1: number; seq: number[] } | null>(null);

  function calc() {
    const num0 = a0;
    const num1 = a1 - c1 * a0;
    const seq = [a0, a1];
    for (let i = 2; i < 8; i++) seq.push(c1 * seq[i - 1] + c2 * seq[i - 2]);
    setResult({ num0, num1, seq });
  }

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#10b981' }}>Interaktív — F(x) levezetése</span>
      <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.3rem 0' }}>
        aₙ₊₂ = c₁·aₙ₊₁ + c₂·aₙ, adja meg a paramétereket:
      </p>
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem' }}>
        <span>c₁ = <input type="number" className="ila-num" value={c1} onChange={(e) => setC1(+e.target.value)} /></span>
        <span>c₂ = <input type="number" className="ila-num" value={c2} onChange={(e) => setC2(+e.target.value)} /></span>
        <span>a₀ = <input type="number" className="ila-num" value={a0} onChange={(e) => setA0(+e.target.value)} /></span>
        <span>a₁ = <input type="number" className="ila-num" value={a1} onChange={(e) => setA1(+e.target.value)} /></span>
        <button className="op-btn is-active" onClick={calc} style={{ background: '#10b981', color: '#000', border: 'none' }}>Számít</button>
      </div>
      {result && (
        <RichTex
          key={`${c1}${c2}${a0}${a1}`}
          html={String.raw`
<div class="def-box" style="font-size:.82rem;">
  <strong>Generátorfüggvény alakja:</strong><br>
  \(F(x) = \dfrac{${result.num0} + ${result.num1}x}{1 - ${c1}x - ${c2}x^2}\)
</div>
<table class="cayley" style="width:100%;margin-top:.5rem"><thead><tr><th>n</th>${result.seq.map((_, i) => `<th>${i}</th>`).join('')}</tr></thead>
<tbody><tr><td style="color:#64748b;">aₙ</td>${result.seq.map((v) => `<td style="color:#34d399;">${+v.toFixed(4)}</td>`).join('')}</tr></tbody></table>`}
        />
      )}
    </div>
  );
}

/* ════ Tab 3: Catalan calculator ════ */
const CATALAN_KNOWN = [1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862];

function catalan(n: number): bigint {
  if (n < 0) return 0n;
  let num = 1n, den = 1n;
  for (let i = 0; i < n; i++) {
    num *= BigInt(2 * n - i);
    den *= BigInt(i + 1);
  }
  return num / den / BigInt(n + 1);
}

function CatalanCalc() {
  const [n, setN] = useState(5);
  const [result, setResult] = useState<{ val: string; n: number } | null>(null);

  function calc() {
    const val = catalan(n).toString();
    setResult({ val, n });
  }

  const tableHtml = String.raw`<table class="cayley" style="width:100%"><thead><tr><th style="text-align:left">n</th><th style="text-align:left">tₙ</th></tr></thead><tbody>` +
    CATALAN_KNOWN.map((v, i) => `<tr><td>${i}</td><td style="color:#34d399;">${v}</td></tr>`).join('') +
    `</tbody></table>`;

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#10b981' }}>Interaktív — Catalan(n)</span>
        <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center', margin: '.4rem 0', fontSize: '.85rem' }}>
          <span>n = <input type="number" className="ila-num" value={n} min={0} max={30} onChange={(e) => setN(+e.target.value)} /></span>
          <button className="op-btn is-active" onClick={calc} style={{ background: '#10b981', color: '#000', border: 'none' }}>Számít</button>
        </div>
        {result && (
          <RichTex
            key={`cat${result.n}`}
            html={String.raw`<div class="def-box">t<sub>${result.n}</sub> = <strong style="color:#34d399;">${result.val}</strong></div>
<p style="font-size:.82rem;color:#94a3b8;">Értelmezések (mindegyik <strong style="color:#34d399;">${result.val}</strong> darab):</p>
<ul style="font-size:.8rem;color:#94a3b8;padding-left:1.2rem;">
<li>Helyes zárójel-sorozat \(2\cdot${result.n}\) jelből</li>
<li>Bináris fa ${result.n + 1} levéllel</li>
<li>Konvex ${result.n + 2}-szög háromszögesítése</li>
<li>Hegyi utak (nem lépnek az átló alá)</li>
<li>Permutációk 231-mintát elkerülve</li>
</ul>`}
          />
        )}
      </div>
      <RichTex html={tableHtml} />
    </div>
  );
}

/* ════ Tab 4: Coin change ════ */
function CoinChange() {
  const [n, setN] = useState(10);
  const [denomStr, setDenomStr] = useState('1,2,5');
  const [result, setResult] = useState<string | null>(null);

  function calc() {
    const denoms = denomStr.split(',').map((s) => parseInt(s.trim())).filter((x) => x > 0);
    if (!denoms.length) { setResult('<div class="warn-box">Adjon meg érmék értékeit!</div>'); return; }
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (const d of denoms) for (let i = d; i <= n; i++) dp[i] += dp[i - d];
    let html = `<div class="def-box">${n} forint felbontásainak száma [${denoms.join(',')}] érmékkel: <strong style="color:#34d399;">${dp[n]}</strong></div>`;
    if (n <= 20) {
      html += '<table class="cayley" style="width:100%"><thead><tr><th style="text-align:left">összeg</th><th style="text-align:left">módszerek száma</th></tr></thead><tbody>';
      for (let i = 1; i <= n; i++) html += `<tr><td>${i}</td><td style="color:#34d399;">${dp[i]}</td></tr>`;
      html += '</tbody></table>';
    }
    setResult(html);
  }

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#10b981' }}>Interaktív pénzváltó</span>
      <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.3rem 0' }}>Adja meg a célösszeget és az érmék értékét (vesszővel):</p>
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem' }}>
        <span>n = <input type="number" className="ila-num" value={n} min={1} max={50} onChange={(e) => setN(+e.target.value)} /></span>
        <span>Érmék: <input type="text" className="ila-text" value={denomStr} onChange={(e) => setDenomStr(e.target.value)} style={{ width: 120 }} /></span>
        <button className="op-btn is-active" onClick={calc} style={{ background: '#10b981', color: '#000', border: 'none' }}>Számít</button>
      </div>
      {result && <RichTex key={`coin${n}${denomStr}`} html={result} />}
    </div>
  );
}

/* ════ Tab 5: Bell & Stirling ════ */
function factorial(n: number): number {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function stirling2(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  if (n === 0 && k === 0) return 1;
  if (n === 0 || k === 0) return 0;
  let s = 0;
  for (let j = 0; j <= k; j++) {
    const sign = j % 2 === 0 ? 1 : -1;
    let comb = 1;
    for (let i = 0; i < j; i++) comb = (comb * (k - i)) / (i + 1);
    s += sign * Math.round(comb) * Math.pow(k - j, n);
  }
  return Math.round(s / factorial(k));
}

function bellNumbers(maxN: number): string[] {
  // Build Bell numbers using Stirling triangle
  const B: bigint[] = [1n];
  for (let n = 1; n <= maxN; n++) {
    // Use DP-based Stirling2
    const dp: number[][] = [];
    for (let i = 0; i <= n; i++) dp.push(new Array(n + 1).fill(0));
    dp[0][0] = 1;
    for (let i = 1; i <= n; i++)
      for (let j = 1; j <= i; j++)
        dp[i][j] = j * dp[i - 1][j] + dp[i - 1][j - 1];
    let s = 0n;
    for (let k = 1; k <= n; k++) s += BigInt(dp[n][k]);
    B.push(s);
  }
  return B.map((v) => v.toString());
}

function EGFSection() {
  const bellVals = bellNumbers(10);

  const bellTableHtml = `<table class="cayley" style="width:100%"><thead><tr><th style="text-align:left">n</th><th style="text-align:left">Bₙ</th></tr></thead><tbody>` +
    bellVals.map((v, i) => `<tr><td>${i}</td><td style="color:#34d399;">${v}</td></tr>`).join('') +
    `</tbody></table>`;

  const N = 6;
  let stirHtml = `<table class="cayley" style="width:100%"><thead><tr><th>n \\ k</th>`;
  for (let k = 0; k <= N; k++) stirHtml += `<th>${k}</th>`;
  stirHtml += '</tr></thead><tbody>';
  for (let n = 0; n <= N; n++) {
    stirHtml += `<tr><td style="color:#64748b;">${n}</td>`;
    for (let k = 0; k <= N; k++) {
      const v = stirling2(n, k);
      stirHtml += `<td style="color:${v > 0 ? '#34d399' : '#334155'};">${v}</td>`;
    }
    stirHtml += '</tr>';
  }
  stirHtml += '</tbody></table>';

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#10b981' }}>Bell-számok táblázata</span>
        <RichTex html={bellTableHtml} />
      </div>
      <div className="info-box" style={{ overflowX: 'auto' }}>
        <span className="lbl" style={{ color: '#10b981' }}>Stirling-számok (2. faj) — S(n,k), n,k=0..6</span>
        <RichTex html={stirHtml} />
      </div>
    </div>
  );
}

/* ════ Static theory ════ */
const t1 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Generátorfüggvény — alapfogalom</h5>
<div class="def-box"><div class="lbl mb-2">Definíció</div><div class="box-body">Az \((a_n)\) sorozat <strong>ordinális generátorfüggvénye</strong>:
\[F(x) = \sum_{n=0}^{\infty} a_n x^n\]
A sorozat tagja: \([x^n]F(x) = a_n\).</div></div>
<div class="thm-box"><div class="box-body"><strong>Kulcsgondolat:</strong> a hatványsorokon végzett algebrai műveletek pontosan megfelelnek a sorozatokon végzett bizonyos műveleteknek.</div></div>
<div class="ex-box"><div class="box-body">Ha \(a_{n+1} = c\cdot a_n + d\), akkor \(F(x)\) egy lineáris egyenletnek tesz eleget, és megoldható zárt alakban.</div></div>
<div class="info-box" style="overflow-x:auto"><span class="lbl" style="color:#10b981">Nevezetes generátorfüggvények</span>
<table class="cayley" style="width:100%"><thead><tr><th>F(x)</th><th>aₙ koefficiense</th><th>Megjegyzés</th></tr></thead><tbody>
<tr><td>\(\frac{1}{1-x}\)</td><td style="color:#34d399;">1</td><td>konstans sorozat</td></tr>
<tr><td>\(\frac{1}{(1-x)^2}\)</td><td style="color:#34d399;">n+1</td><td>természetes számok</td></tr>
<tr><td>\(\frac{1}{(1-x)^k}\)</td><td style="color:#34d399;">\(\binom{n+k-1}{k-1}\)</td><td>kombinatorikus</td></tr>
<tr><td>\(\frac{x}{1-x-x^2}\)</td><td style="color:#34d399;">Fₙ (Fibonacci)</td><td>rekurzív</td></tr>
<tr><td>\(\frac{1}{1-cx}\)</td><td style="color:#34d399;">cⁿ</td><td>geometriai</td></tr>
<tr><td>\(\frac{x}{(1-x)(1-2x)}\)</td><td style="color:#34d399;">2ⁿ−1</td><td>Hanoi</td></tr>
</tbody></table></div>`;

const t2 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Lineáris rekurziók generátorfüggvénye</h5>
<div class="def-box"><div class="box-body">Legyen \(a_{n+2}=c_1 a_{n+1}+c_2 a_n\), \(a_0,a_1\) adott.</div></div>
<div class="step-row"><div class="step-eq"><strong>1.</strong> Szorozzuk \(x^n\)-nel, összegezzük \(n=0\)-tól \(\infty\)-ig.</div></div>
<div class="step-row"><div class="step-eq"><strong>2.</strong> \(F(x)\)-re lineáris egyenletet kapunk.</div></div>
<div class="step-row"><div class="step-eq"><strong>3.</strong> Megoldjuk \(F(x)\)-re.</div></div>
<div class="step-row"><div class="step-eq"><strong>4.</strong> Parciális törtekre bontjuk.</div></div>
<div class="step-row"><div class="step-eq"><strong>5.</strong> Visszaolvassuk az \(a_n\) tagokat.</div></div>
<div class="thm-box"><div class="box-body"><strong>Fibonacci:</strong>
\(F(x)=\dfrac{x}{1-x-x^2}\). Parciális törtekre bontva:
\(F(x)=\dfrac{1}{\sqrt{5}}\!\left(\dfrac{1}{1-\varphi x}-\dfrac{1}{1-\psi x}\right)\)
→ Binet-képlet: \(a_n=\dfrac{\varphi^n-\psi^n}{\sqrt{5}}\)</div></div>`;

const t3 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Catalan-számok</h5>
<div class="def-box"><div class="box-body">\(t_0=1,\quad t_{n+1}=\sum_{i=0}^{n}t_i\,t_{n-i}\)</div></div>
<div class="thm-box"><div class="box-body">Generátorfüggvény: \(F(x)=xF(x)^2+1\)<br>
Megoldás: \(F(x)=\dfrac{1-\sqrt{1-4x}}{2x}\)<br>
Explicit: \(t_n=\dfrac{1}{n+1}\binom{2n}{n}\)</div></div>
<div class="ex-box"><div class="box-body"><strong>Catalan-számok értelmezései:</strong><br>
• Helyes zárójel-sorozat 2n jelből<br>
• Bináris fa n+1 levéllel<br>
• Konvex (n+2)-szög háromszögesítése<br>
• Hegyi út (nem keresztezi az átlót)<br>
• 1×n-es sakktábla feltöltése dominókkal</div></div>`;

const t4 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Pénzváltás — Coin change</h5>
<div class="def-box"><div class="box-body">Hányféleképpen váltható n forint \(h_1, h_2, \ldots, h_k\) felhasználásával? (sorrend nem számít)</div></div>
<div class="thm-box"><div class="box-body">Generátorfüggvény:
\[F(x)=\prod_{i=1}^{k}\frac{1}{1-x^{h_i}}\]
\([x^n]F(x)\) = a lehetséges módszerek száma.</div></div>
<div class="ex-box"><div class="box-body"><strong>Példa:</strong> 10 forint {'{'}1,2,5{'}'}-tel:
\(F(x)=\dfrac{1}{(1-x)(1-x^2)(1-x^5)}\). Megoldások száma = 10</div></div>`;

const t5 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Exponenciális generátorfüggvény (EGF)</h5>
<div class="def-box"><div class="box-body">
\[F(x) = \sum_{n=0}^{\infty} a_n \frac{x^n}{n!}\]
ahol \(a_n = n!\,[x^n]F(x)\).</div></div>
<div class="thm-box"><div class="box-body"><strong>Bell-számok EGF-je:</strong>
\[B(x)=e^{e^x-1}\]
\(B_n = n!\,[x^n]e^{e^x-1}\)<br>
\(B_n\) = az \(\{1,\ldots,n\}\) halmaz összes partíciójának száma.</div></div>
<div class="def-box"><div class="box-body"><strong>Stirling-számok (2. faj) — S(n,k):</strong><br>
S(n,k) = az \(\{1,\ldots,n\}\) halmaz pontosan k nem üres részhalmazra való felbontásainak száma.<br>
Összefüggés: \(B_n = \sum_{k=0}^{n} S(n,k)\)</div></div>`;

const TABS: Tab[] = [
  { id: 'alap', label: 'Alapfogalom', content: <RichTex html={t1} /> },
  { id: 'lin', label: 'Lineáris rekurziók', content: <div><RichTex html={t2} /><GFLinCalc /></div> },
  { id: 'cat', label: 'Catalan-számok', content: <div><RichTex html={t3} /><CatalanCalc /></div> },
  { id: 'coin', label: 'Pénzváltás', content: <div><RichTex html={t4} /><CoinChange /></div> },
  { id: 'egf', label: 'Exponenciális GF', content: <div><RichTex html={t5} /><EGFSection /></div> },
];

export default function DimatCh6() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika VI — fejezet</p>
      <h1 className="ila__title">Generátorfüggvények</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
