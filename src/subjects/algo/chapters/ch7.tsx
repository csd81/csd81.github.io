import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// CRT solver for pairwise coprime moduli
function CRTSolver() {
  const [pairs, setPairs] = useState<{ m: number; a: number }[]>([
    { m: 7, a: 5 }, { m: 12, a: 2 }, { m: 25, a: 3 }, { m: 11, a: 0 },
  ]);

  function gcd(a: number, b: number): number { while (b) { const t = b; b = a % b; a = t; } return a; }
  function extgcd(a: number, b: number): { g: number; x: number; y: number } {
    if (b === 0) return { g: a, x: 1, y: 0 };
    const { g, x, y } = extgcd(b, a % b);
    return { g, x: y, y: x - Math.floor(a / b) * y };
  }
  function modinv(a: number, m: number): number {
    const { x } = extgcd(((a % m) + m) % m, m);
    return ((x % m) + m) % m;
  }

  // Check pairwise coprime
  const pairwiseCoprime = pairs.every((p, i) =>
    pairs.every((q, j) => i >= j || gcd(p.m, q.m) === 1)
  );

  let result = 0;
  let M = 1;
  if (pairwiseCoprime && pairs.length > 0) {
    pairs.forEach((p) => { M *= p.m; });
    pairs.forEach((p) => {
      const Mi = M / p.m;
      const yi = modinv(Mi, p.m);
      result = (result + p.a * Mi * yi) % M;
    });
    result = ((result % M) + M) % M;
  }

  const addRow = () => setPairs((ps) => [...ps, { m: 7, a: 1 }]);
  const removeRow = (i: number) => setPairs((ps) => ps.filter((_, j) => j !== i));
  const update = (i: number, field: 'm' | 'a', val: number) =>
    setPairs((ps) => ps.map((p, j) => (j === i ? { ...p, [field]: val } : p)));

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#a78bfa' }}>Interaktív CRT megoldó</span>
      <p style={{ fontSize: '.83rem', margin: '.4rem 0' }}>
        Adj meg szimultán kongruencia-rendszert páronként relatív prím modulusokkal.
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table className="cayley" style={{ width: '100%', fontSize: '.83rem' }}>
          <thead>
            <tr><th>x ≡ a (mod m)</th><th>m</th><th>a</th><th></th></tr>
          </thead>
          <tbody>
            {pairs.map((p, i) => (
              <tr key={i}>
                <td>x ≡ {p.a} (mod {p.m})</td>
                <td><input type="number" min={1} className="ila-num" value={p.m} onChange={(e) => update(i, 'm', +e.target.value)} /></td>
                <td><input type="number" className="ila-num" value={p.a} onChange={(e) => update(i, 'a', +e.target.value)} /></td>
                <td>
                  <button className="op-btn" onClick={() => removeRow(i)} style={{ fontSize: '.75rem', padding: '.1rem .4rem' }}>×</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="op-btn" onClick={addRow} style={{ marginTop: '.4rem', fontSize: '.8rem' }}>+ Sor</button>
      <div className="def-box" style={{ marginTop: '.6rem', fontWeight: 700 }}>
        {pairwiseCoprime
          ? <>M = {M}, &nbsp; x ≡ <span style={{ color: '#fbbf24' }}>{result}</span> (mod {M})
            <div style={{ fontSize: '.78rem', color: '#8892a4', fontWeight: 400, marginTop: '.3rem' }}>
              Ellenőrzés: {pairs.map((p, i) => <span key={i} style={{ marginRight: '.5rem' }}>{result} mod {p.m} = <strong style={{ color: result % p.m === ((p.a % p.m) + p.m) % p.m ? '#34d399' : '#ef4444' }}>{result % p.m}</strong> {result % p.m === ((p.a % p.m) + p.m) % p.m ? '✓' : '✗'}</span>)}
            </div>
          </>
          : <span style={{ color: '#ef4444' }}>⚠ A modulusok nem páronként relatív prímek!</span>}
      </div>
    </div>
  );
}

const t1 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">7. fejezet — Kínai Maradéktétel és nagy számok szorzása</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    A fejezetben ismertetett eredményt <strong>1000 évvel ezelőtt</strong> már ismerték kínai matematikusok —
    Sun Tzu „Aritmetikai értekezése" (kb. Kr.u. 3–5. század). A modern algoritmikus számelméletben ma is
    <em>alapműveletként</em> használjuk.
  </p>
</div>
<div class="def-box">
  <strong>7.1 Probléma — Szimultán kongruenciarendszer.</strong>
  Adott modulusok \(m_1, \dots, m_r\) és maradékok \(a_1, \dots, a_r\):
  \[x \equiv a_i \pmod{m_i}, \quad i = 1, \dots, r.\]
  Sun Tzu eredeti: „Adott egy szám, amely 3-mal osztva 2-t, 5-tel 3-at, 7-tel 2-t ad maradékul."
  Megoldás: \(23 + 105k.\)
</div>
<ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
  <li><strong>Párhuzamos aritmetika</strong> — nagy számok szorzása kis modulusokon (7.3)</li>
  <li><strong>RSA dekódolás gyorsítása</strong> — \(\bmod\, p\) és \(\bmod\, q\) külön, majd CRT (4× gyorsulás)</li>
  <li><strong>Diszkrét Fourier-transzformáció</strong> — Schönhage–Strassen szorzás</li>
</ul>`;

const t2 = String.raw`
<div class="thm-box">
  <strong>7.3 Tétel — Kínai Maradéktétel (CRT).</strong>
  Ha az \(m_i\) modulusok <strong>páronként relatív prímek</strong>, akkor a kongruenciarendszernek
  bármilyen \(a_1, \dots, a_r\) esetén <strong>pontosan egy</strong> \(x\) gyöke van \(\pmod M\) ahol
  \[M = \operatorname{lkkt}(m_1, \dots, m_r) = m_1 m_2 \cdots m_r.\]
  Konstruktív képlet: oldjuk meg minden \(i\)-re \(y_i \cdot \tfrac{M}{m_i} \equiv 1 \pmod{m_i}\), ekkor:
  \[\boxed{\;x \equiv \sum_{i=1}^r a_i \cdot y_i \cdot \frac{M}{m_i} \pmod M\;}\]
</div>`;

const t3 = String.raw`
<div class="ex-box">
  <strong>7.5 Példa — 4-modulusú rendszer</strong>
  \[\begin{cases} x \equiv 5 \pmod 7 \\ x \equiv 2 \pmod{12} \\ x \equiv 3 \pmod{25} \\ x \equiv 0 \pmod{11} \end{cases}\]
  \(M = 7 \cdot 12 \cdot 25 \cdot 11 = 23\,100.\)
  <table class="cayley" style="font-size:.82rem;margin:.4rem 0;width:100%">
    <thead><tr><th>\(i\)</th><th>\(m_i\)</th><th>\(M/m_i\)</th><th>\(y_i\)</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>7</td><td>3300</td><td>5</td></tr>
      <tr><td>2</td><td>12</td><td>1925</td><td>5</td></tr>
      <tr><td>3</td><td>25</td><td>924</td><td>24</td></tr>
      <tr><td>4</td><td>11</td><td>2100</td><td>10</td></tr>
    </tbody>
  </table>
  \[\begin{aligned}
    x &\equiv 5 \cdot 5 \cdot 3300 + 2 \cdot 5 \cdot 1925 + 3 \cdot 24 \cdot 924 + 0 \\
      &= 82500 + 19250 + 66528 \\
      &\equiv \mathbf{6578} \pmod{23100}
  \end{aligned}\]
  Ellenőrzés: \(6578 \bmod 7 = 5\) ✓; \(6578 \bmod 12 = 2\) ✓; \(6578 \bmod 25 = 3\) ✓; \(6578 \bmod 11 = 0\) ✓.
</div>`;

const t4 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">7.2 § — Általános (nem relatív prím) modulusok</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Ha a modulusok nem páronként relatív prímek, a feladat nehezebb — de megoldható
    Diophantoszi egyenletté alakítással.
  </p>
</div>
<div class="thm-box">
  <strong>7.6 Tétel — \(r = 2\) általános eset.</strong>
  \(x \equiv a_1 \pmod{m_1}, \;x \equiv a_2 \pmod{m_2}\)
  pontosan akkor oldható meg, ha
  \[\operatorname{lnko}(m_1, m_2) \mid (a_2 - a_1),\]
  és a megoldás egyértelmű \(\pmod{\operatorname{lkkt}(m_1, m_2)}\).
</div>
<div class="ex-box">
  <strong>7.7 Példa.</strong> \(x \equiv 3 \pmod 6, \;x \equiv 7 \pmod{10}.\)
  \(\operatorname{lnko}(6, 10) = 2\), \(7 - 3 = 4\), \(2 \mid 4\) ✓.
  Diophantoszi: \(6\ell_1 - 10\ell_2 = 4\) ⟹ \(\ell_1 = -1 + 5t.\)
  \[x \equiv \mathbf{27} \pmod{30}\]
</div>`;

const t5 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">7.3 § — Nagy számok párhuzamos szorzása CRT-vel</span>
</div>
<div class="info-box">
  <strong>7.10 Algoritmus — Párhuzamos szorzás:</strong>
  <ol style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li>Rögzítsük páronként rel. prím \(m_1, \dots, m_r\)-eket úgy, hogy \(K^2 &lt; M = \prod m_i.\)</li>
    <li>Előre kiszámoljuk a \(y_i\) és \(y_i \cdot \tfrac{M}{m_i}\) konstansokat.</li>
    <li>Inputra \((X, Z &lt; K)\): \(r\) szálon párhuzamosan \(a_i \equiv x_i z_i \pmod{m_i}\).</li>
    <li>CRT-vel összerakjuk: \(x \equiv \sum a_i y_i \tfrac{M}{m_i} \pmod M = X \cdot Z.\)</li>
  </ol>
</div>
<div class="ex-box">
  <strong>7.12 Példa.</strong>
  Moduluscsalád: \(m_1=253, m_2=200, m_3=261, m_4=247\), \(M = 3\,262\,030\,200.\)
  <br/>Szorzás \(X = 56\,079, Z = 58\,144\):
  kis modulusú \(a_i\)-k szorzata összerakva adja \(X \cdot Z = 3\,260\,657\,376\). ✓
</div>`;

const TABS: Tab[] = [
  { id: 'intro', label: 'Áttekintés', content: <RichTex html={t1} /> },
  { id: 'crt', label: '7.1 CRT klasszikus', content: <RichTex html={t2} /> },
  { id: 'pelda', label: '7.5 Példa', content: <RichTex html={t3} /> },
  { id: 'calc', label: 'Interaktív CRT', content: <CRTSolver /> },
  { id: 'altalanos', label: '7.2 Általános', content: <RichTex html={t4} /> },
  { id: 'szorzas', label: '7.3 Párhuzamos szorzás', content: <RichTex html={t5} /> },
];

export default function AlgoCh7() {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet — 7. fejezet</p>
      <h1 className="ila__title">Kínai Maradéktétel és nagy számok szorzása</h1>
      <p className="ila__cite">Szalkai István &amp; Dósa György · Pannon Egyetem · Typotex 2011</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
