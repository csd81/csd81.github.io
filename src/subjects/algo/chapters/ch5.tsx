import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// Extended Euclidean solver
function ExtendedEuclid() {
  const [a, setA] = useState(9867);
  const [b, setB] = useState(8855);
  const [c, setC] = useState(759);

  // Extended Euclidean algorithm
  function extgcd(aa: number, bb: number): { gcd: number; u: number; v: number; steps: { q: number; r: number; xi: number; zeta: number }[] } {
    let xi_prev = 1, xi_curr = 0;
    let zeta_prev = 0, zeta_curr = 1;
    const steps: { q: number; r: number; xi: number; zeta: number }[] = [];
    let a0 = Math.abs(aa), b0 = Math.abs(bb);
    if (a0 < b0) { const tmp = a0; a0 = b0; b0 = tmp; }
    while (b0 > 0) {
      const q = Math.floor(a0 / b0);
      const r = a0 % b0;
      const xi_next = xi_prev - xi_curr * q;
      const zeta_next = zeta_prev - zeta_curr * q;
      steps.push({ q, r, xi: xi_curr, zeta: zeta_curr });
      xi_prev = xi_curr; xi_curr = xi_next;
      zeta_prev = zeta_curr; zeta_curr = zeta_next;
      a0 = b0; b0 = r;
    }
    return { gcd: a0, u: xi_prev, v: zeta_prev, steps };
  }

  const A = Math.abs(a), B = Math.abs(b);
  const { gcd, u, v } = extgcd(A, B);
  const solvable = c % gcd === 0;
  const x0 = solvable ? u * (c / gcd) : 0;
  const y0 = solvable ? v * (c / gcd) : 0;

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#a78bfa' }}>5.4 Kiterjesztett Euklideszi — ax + by = c</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.5rem 0', fontSize: '.85rem' }}>
        <span>a = <input type="number" className="ila-num" value={a} onChange={(e) => setA(+e.target.value)} /></span>
        <span>b = <input type="number" className="ila-num" value={b} onChange={(e) => setB(+e.target.value)} /></span>
        <span>c = <input type="number" className="ila-num" value={c} onChange={(e) => setC(+e.target.value)} /></span>
      </div>
      <div style={{ fontSize: '.85rem', marginBottom: '.4rem' }}>
        lnko({A}, {B}) = <strong style={{ color: '#fbbf24' }}>{gcd}</strong>
        &nbsp;&nbsp;
        {solvable
          ? <span style={{ color: '#34d399' }}>✓ {gcd} | {c} — megoldható</span>
          : <span style={{ color: '#ef4444' }}>✗ {gcd} ∤ {c} — nincs egész megoldás</span>}
      </div>
      {solvable && (
        <div className="def-box" style={{ fontFamily: 'monospace', fontSize: '.85rem' }}>
          Egyik megoldás: x₀ = <strong style={{ color: '#a78bfa' }}>{x0}</strong>,&nbsp;
          y₀ = <strong style={{ color: '#a78bfa' }}>{y0}</strong>
          <br />
          Ellenőrzés: {A}·{x0} + {B}·{y0} = <strong style={{ color: '#fbbf24' }}>{A * x0 + B * y0}</strong>
          {A * x0 + B * y0 === c ? ' ✓' : ' ✗'}
          <br />
          <span style={{ color: '#8892a4', fontSize: '.78rem' }}>
            Általános megoldás: x = {x0} + {B / gcd}k, &nbsp;y = {y0} − {A / gcd}k &nbsp;(k ∈ ℤ)
          </span>
        </div>
      )}
    </div>
  );
}

const t1 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">5. fejezet — Lineáris Diophantoszi egyenletek</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    <strong>Diophantosz</strong> (Kr.u. ~250) görög matematikus foglalkozott egyenletek <em>egész</em> gyökeivel.
    Minden olyan egyenletet <strong>Diophantoszi-nak</strong> hívunk, amelynek az egész megoldásait keressük.
  </p>
  <strong>5.1 Definíció.</strong> Adottak \(a_1, \dots, a_n, c \in \mathbb{Z}\); kerestendők \(x_1, \dots, x_n \in \mathbb{Z}\):
  \[a_1 x_1 + a_2 x_2 + \cdots + a_n x_n = c\]
</div>
<div class="thm-box">
  <strong>5.2 Tétel — Megoldhatóság.</strong>
  Az egyenlet pontosan akkor oldható meg, ha
  \[\boxed{\;\operatorname{lnko}(a_1, \dots, a_n) \mid c\;}\]
</div>`;

const t2 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">5.1 § — A kétismeretlenes eset</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Megoldjuk az \(ax + by = c\) egyenletet, ahol \(\operatorname{lnko}(a, b) \mid c\).
    Elegendő először megoldani:
    \[a x + b y = \operatorname{lnko}(a, b)\]
    Majd ha \((u_0, v_0)\) megoldás: \(x_0 := u_0 \cdot \frac{c}{\operatorname{lnko}(a,b)}\), \(y_0 := v_0 \cdot \frac{c}{\operatorname{lnko}(a,b)}.\)
  </p>
</div>
<div class="thm-box">
  <strong>5.3 Tétel — Bézout-azonosság.</strong>
  Minden \(a, b \in \mathbb{Z}\)-hez léteznek \(u_0, v_0 \in \mathbb{Z}\):
  \[\operatorname{lnko}(a, b) = a \cdot u_0 + b \cdot v_0.\]
</div>
<div class="def-box">
  <strong>5.11 Algoritmus — Egyetlen menetes (Knuth).</strong>
  Kezdjük: \(\xi_{-1}:=1,\ \zeta_{-1}:=0;\ \xi_0:=0,\ \zeta_0:=1.\)
  Majd minden \(r_i\) kiszámításával:
  \[\xi_i := \xi_{i-2} - \xi_{i-1} \cdot q_i, \qquad \zeta_i := \zeta_{i-2} - \zeta_{i-1} \cdot q_i.\]
</div>
<div class="thm-box">
  <strong>5.10 Tétel — Összes megoldás.</strong>
  Ha az \(ax + by = c\) egyenletnek van \((x_0, y_0)\) megoldása, akkor az összes gyök:
  \[x = x_0 + k \cdot \frac{b}{\operatorname{lnko}(a, b)}, \qquad y = y_0 - k \cdot \frac{a}{\operatorname{lnko}(a, b)}, \qquad k \in \mathbb{Z}.\]
</div>`;

const t3 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">5.6 Példa — \(9867x + 8855y = 759\)</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    <strong>Megoldhatóság:</strong> \(\operatorname{lnko}(9867, 8855) = 253\) (4.6 Példa alapján),
    és \(253 \mid 759\) (\(759/253 = 3\)). ✓
  </p>
</div>
<div class="thm-box">
  <strong>1. lépés — Euklideszi algoritmus</strong>
  <table class="cayley" style="font-family:monospace;font-size:.83rem;margin:.4rem 0;width:100%">
    <thead><tr><th style="text-align:left">egyenlet</th><th style="text-align:left">maradék</th></tr></thead>
    <tbody>
      <tr><td>\(\langle 9867 \rangle = \langle 8855 \rangle \cdot 1 + \langle 1012 \rangle\)</td><td>1012</td></tr>
      <tr><td>\(\langle 8855 \rangle = \langle 1012 \rangle \cdot 8 + \langle 759 \rangle\)</td><td>759</td></tr>
      <tr><td>\(\langle 1012 \rangle = \langle 759 \rangle \cdot 1 + \langle 253 \rangle\)</td><td>253</td></tr>
      <tr><td>\(\langle 759 \rangle = \langle 253 \rangle \cdot 3 + \langle 0 \rangle\)</td><td>0 (STOP)</td></tr>
    </tbody>
  </table>
  <strong>2. lépés — Visszaforgatás</strong>
  \[\begin{aligned}
    253 &= 1 \cdot \langle 1012 \rangle + (-1) \cdot \langle 759 \rangle \\
        &= (-1) \cdot \langle 8855 \rangle + 9 \cdot \langle 1012 \rangle \\
        &= \boxed{9 \cdot \langle 9867 \rangle - 10 \cdot \langle 8855 \rangle}
  \end{aligned}\]
  Ellenőrzés: \(9 \cdot 9867 - 10 \cdot 8855 = 88803 - 88550 = 253\). ✓
  <br/>
  <strong>3. lépés — Átskálázás \(c = 759\)-re:</strong>
  \(x_0 = 9 \cdot 3 = \mathbf{27},\ y_0 = -10 \cdot 3 = \mathbf{-30}.\)
  Ellenőrzés: \(9867 \cdot 27 + 8855 \cdot (-30) = 266409 - 265650 = 759.\) ✓
</div>`;

const t4 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">5.2 § — n-változós egyenletek</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Az általános esetet \(n\)-re vonatkozó <strong>teljes indukcióval</strong> oldjuk meg:
    az Euklideszi algoritmus többszöri alkalmazásával.
  </p>
</div>
<div class="thm-box">
  <strong>5.13 — 3-változós eset: \(ax + by + cz = m\)</strong>
  <table class="cayley" style="font-size:.83rem;margin:.4rem 0;width:100%">
    <thead><tr><th style="text-align:left">Lépés</th><th style="text-align:left">Művelet</th></tr></thead>
    <tbody>
      <tr><td>(0)</td><td>Megoldhatóság: \(\operatorname{lnko}(a, b, c) \mid m\)?</td></tr>
      <tr><td>(1)</td><td>\(d := \operatorname{lnko}(a, b)\) — Euklidesz</td></tr>
      <tr><td>(2)</td><td>\(ax + by = td\) általános megoldás</td></tr>
      <tr><td>(3)</td><td>\(\delta := \operatorname{lnko}(d, c)\) — Euklidesz</td></tr>
      <tr><td>(4)</td><td>\(dt + cz = m\) megoldása</td></tr>
    </tbody>
  </table>
</div>
<div class="ex-box">
  <strong>5.14 Példa — \(12x + 30y + 15z = 18\)</strong><br/>
  (0) \(\operatorname{lnko}(12, 30, 15) = 3\), \(3 \mid 18\) ✓
  &nbsp;
  (1) \(d = \operatorname{lnko}(12, 30) = 6\)
  &nbsp;
  (2) \(x = -2t + 5k,\ y = t - 2k\)
  &nbsp;
  (3) \(\delta = \operatorname{lnko}(6, 15) = 3\)
  &nbsp;
  (4) \(t = -12 + 5\ell,\ z = 6 - 2\ell\)
  <br/>
  Behelyettesítve: \(x = 24 + 5k - 10\ell,\ y = -12 - 2k + 5\ell,\ z = 6 - 2\ell\)
  <br/>
  Ellenőrzés \((k=0, \ell=0)\): \(12 \cdot 24 + 30 \cdot (-12) + 15 \cdot 6 = 288 - 360 + 90 = 18\). ✓
</div>`;

const TABS: Tab[] = [
  { id: 'intro', label: 'Áttekintés', content: <RichTex html={t1} /> },
  { id: 'axby', label: '5.1 ax+by=c', content: <RichTex html={t2} /> },
  { id: 'pelda', label: '5.6 Példa', content: <RichTex html={t3} /> },
  { id: 'calc', label: 'Interaktív számológép', content: <ExtendedEuclid /> },
  { id: 'three', label: '5.2 n-változós', content: <RichTex html={t4} /> },
];

export default function AlgoCh5() {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet — 5. fejezet</p>
      <h1 className="ila__title">Lineáris Diophantoszi egyenletek</h1>
      <p className="ila__cite">Szalkai István &amp; Dósa György · Pannon Egyetem · Typotex 2011</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
