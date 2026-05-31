import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// Fast modular exponentiation calculator
function PowerModCalc() {
  const [u, setU] = useState(6456);
  const [k, setK] = useState(4652);
  const [m, setM] = useState(9786);

  function powmod(base: number, exp: number, mod: number): { result: number; steps: { j: number; uj: number; bit: number }[] } {
    if (mod <= 0) return { result: 0, steps: [] };
    const steps: { j: number; uj: number; bit: number }[] = [];
    let result = 1;
    let b = ((base % mod) + mod) % mod;
    let e = exp;
    let j = 0;
    while (e > 0) {
      const bit = e & 1;
      steps.push({ j, uj: b, bit });
      if (bit) result = (result * b) % mod;
      b = (b * b) % mod;
      e >>= 1;
      j++;
    }
    return { result, steps };
  }

  const { result, steps } = powmod(u, k, m);
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#a78bfa' }}>6.59 Gyorshatványozás: u^k mod m</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.5rem 0', fontSize: '.85rem' }}>
        <span>u = <input type="number" className="ila-num" value={u} onChange={(e) => setU(+e.target.value)} /></span>
        <span>k = <input type="number" className="ila-num" value={k} onChange={(e) => setK(+e.target.value)} /></span>
        <span>m = <input type="number" className="ila-num" value={m} onChange={(e) => setM(+e.target.value)} /></span>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="cayley" style={{ fontFamily: 'monospace', fontSize: '.82rem', width: '100%' }}>
          <thead>
            <tr><th>j</th><th>u_j mod m</th><th>k битje</th></tr>
          </thead>
          <tbody>
            {steps.map((s, i) => (
              <tr key={i} style={s.bit ? { background: 'rgba(167,139,250,.12)' } : undefined}>
                <td>{s.j}</td>
                <td style={{ color: s.bit ? '#a78bfa' : undefined, fontWeight: s.bit ? 700 : undefined }}>{s.uj}</td>
                <td style={{ color: s.bit ? '#fbbf24' : '#64748b', fontWeight: s.bit ? 700 : undefined }}>{s.bit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="def-box" style={{ marginTop: '.6rem', fontWeight: 700, fontSize: '.9rem' }}>
        {u}^{k} ≡ <span style={{ color: '#fbbf24' }}>{result}</span> (mod {m})
        &nbsp;&nbsp;<span style={{ color: '#8892a4', fontWeight: 400, fontSize: '.8rem' }}>({steps.length} lépés, szemben a {k} naiv szorzással)</span>
      </div>
    </div>
  );
}

const t1 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">6. fejezet — Kongruenciák és maradékosztályok</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    A periodikus jelenségeknél nem az ismétlések száma, hanem a <strong>maradék</strong> a lényeges:
    hét napjai, körforgalom, egy szám utolsó néhány jegye, számítógépes túlcsordulás.
  </p>
</div>
<div class="def-box">
  <strong>6.1 Definíció.</strong>
  Tetszőleges \(a, b, m \in \mathbb{Z}\), \(m \neq 0\) esetén:
  \[a \equiv_m b \quad \text{vagy} \quad a \equiv b \pmod{m}\]
  pontosan akkor, ha \(m \mid (a - b)\).
</div>
<div class="thm-box">
  <strong>6.9 Tétel — A kongruencia művelettartó.</strong>
  Ha \(a \equiv_m b\) és \(c \equiv_m d\), akkor
  \[a \pm c \equiv_m b \pm d \qquad \text{és} \qquad a \cdot c \equiv_m b \cdot d.\]
</div>
<div class="thm-box">
  <strong>6.10 — A 11-gyel oszthatóság szabálya.</strong>
  Mivel \(10 \equiv -1 \pmod{11}\), ezért egy tízes számrendszerbeli szám pontosan akkor osztható 11-gyel,
  ha a számjegyeit <em>váltakozó előjellel</em> összeadva a kapott összeg osztható 11-gyel.
</div>`;

const t2 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">6.2 § — \(\mathbb{Z}_n\) maradékhalmaz és struktúra</span>
  \[\mathbb{Z}_n := \{0, 1, 2, \dots, n-1\}\]
  <p style="font-size:.85rem;margin:.4rem 0">
    \((\mathbb{Z}_n, +, \cdot)\) <strong>kommutatív egységelemes gyűrű</strong> minden \(n \geq 1\)-re.
  </p>
</div>
<div class="thm-box">
  <strong>6.24 Állítás.</strong> \(a \in \mathbb{Z}_n\) pontosan akkor nullosztó, ha <em>nem relatív prím</em> \(n\)-hez.
</div>
<div class="thm-box">
  <strong>6.28–6.29 Tételek.</strong>
  Véges, nullosztómentes gyűrű egyben <strong>test</strong>.
  \(\mathbb{Z}_p\) test pontosan akkor, ha \(p \in \mathbb{P}\) prím.
</div>
<div class="def-box">
  <strong>6.31 — Euler-féle \(\varphi\) függvény:</strong>
  \[\varphi(n) := |\mathbb{Z}_n^*| = |\{1 \leq a \leq n : \operatorname{lnko}(a, n) = 1\}|\]
  Pl. \(\varphi(15) = 9.\)
</div>
<div class="thm-box">
  <strong>6.33 Tétel.</strong> \((\mathbb{Z}_n^*, \cdot)\) <strong>kommutatív (Abel-)csoport</strong>.
</div>`;

const t3 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">6.3 § — Lineáris kongruencia</span>
  \[ax \equiv b \pmod m\]
  Ekvivalens az \(ax - my = b\) Diophantoszi egyenlettel.
</div>
<div class="thm-box">
  <strong>6.36 Tétel.</strong> A megoldhatóság feltétele: \(\operatorname{lnko}(a, m) \mid b.\)
  Az összes megoldás \(\pmod m\):
  \[x_i = x_0 + i \cdot \frac{m}{\operatorname{lnko}(a, m)}, \quad i = 0, 1, \dots, L-1\]
  ahol \(L = \operatorname{lnko}(a, m)\).
</div>
<div class="def-box">
  <strong>6.40 Tétel — Multiplikatív inverz.</strong>
  \(a^{-1} \pmod m\) pontosan akkor létezik, ha \(\operatorname{lnko}(a, m) = 1\).
</div>
<div class="ex-box">
  <strong>6.42 Példa — \(18^{-1} \pmod{175}\).</strong>
  Megoldjuk \(18x - 175y = 1\) Bézout-egyenletet Euklideszi algoritmussal.
  Visszaforgatással: \(-1 = 68 \cdot 18 + 7 \cdot (-175)\), így \(x_0 = -68.\)
  \[18^{-1} \equiv -68 \equiv \mathbf{107} \pmod{175}\]
  Ellenőrzés: \(18 \cdot 107 = 1926 = 11 \cdot 175 + 1 \equiv 1 \pmod{175}.\) ✓
</div>`;

const t4 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">6.4 § — Euler-féle \(\varphi(n)\) függvény</span>
  \[\varphi(n) = n \cdot \prod_{i=1}^r \left(1 - \frac{1}{p_i}\right)\]
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th>\(n\)</th><th>\(\varphi(n)\)</th></tr></thead>
  <tbody>
    <tr><td>\(p\) prím</td><td>\(p - 1\)</td></tr>
    <tr><td>\(p \cdot q\) (két különböző prím)</td><td>\((p-1)(q-1)\) — <strong>RSA-kulcsgenerálás alapja</strong></td></tr>
    <tr><td>\(p^t\)</td><td>\(p^{t-1}(p - 1)\)</td></tr>
  </tbody>
</table>
<div class="warn-box">
  <strong>Kulcsmegjegyzés.</strong> A \(\varphi(n)\) értékét általában <em>csak</em> a prímfelbontás
  ismeretében tudjuk gyorsan kiszámolni. Ezért \(\varphi(n)\) titokban marad nyilvános \(n\) esetén —
  ez az RSA-titkosítás biztonságának egyik pillére!
</div>
<div class="thm-box">
  <strong>6.52–6.54 Tételek — Lagrange, Euler, Fermat.</strong>
  <br/>Lagrange: véges csoport \(G\), részcsoport \(H\): \(|H| \mid |G|.\)
  <br/>Euler: Ha \(\operatorname{lnko}(a, m) = 1\), akkor \(a^{\varphi(m)} \equiv 1 \pmod m.\)
  <br/>Kis Fermat: \(p\) prím, \(p \nmid a\) esetén \(a^{p-1} \equiv 1 \pmod p.\)
</div>
<div class="thm-box">
  <strong>6.58 Tétel — Wilson.</strong>
  \(n\) pontosan akkor prím, ha \((n-1)! \equiv -1 \pmod n.\)
  <br/><em>Elméletileg gyönyörű ↔ gyakorlatilag használhatatlan prímteszt.</em>
</div>`;

const t6 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">6.7 § — Primitív gyökök és diszkrét logaritmus</span>
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Fogalom</th><th style="text-align:left">Definíció</th></tr></thead>
  <tbody>
    <tr><td><strong>\(o(a)\) — \(a\) rendje</strong></td><td>legkisebb \(d > 0\), amelyre \(a^d \equiv 1 \pmod m\)</td></tr>
    <tr><td><strong>primitív gyök</strong> \(g\)</td><td>\(o(g) = \varphi(m)\) — \(g\) hatványai kiadják \(\mathbb{Z}_m^*\) összes elemét</td></tr>
  </tbody>
</table>
<div class="thm-box">
  <strong>6.67 Tétel.</strong> \(\mathbb{Z}_m^*\)-ban pontosan akkor van primitív gyök, ha
  \(m = 2\), \(m = 4\), \(m = p^\alpha\), vagy \(m = 2p^\alpha\).
</div>
<div class="def-box">
  <strong>6.70 — Diszkrét logaritmus.</strong>
  Ha \(g\) primitív gyök \(\pmod m\) és \(a = g^k\), akkor
  \[k = \log_g(a) = \operatorname{ind}_g(a) \pmod{\varphi(m)}\]
</div>
<div class="warn-box">
  A diszkrét logaritmus kiszámítása nagy \(p\)-re <strong>nehéz probléma</strong> (DLP) —
  a Diffie–Hellman kulcscsere és ElGamal-aláírás erre épül. Shor 1994-es kvantumalgoritmusa megoldaná.
</div>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa" style="margin-top:.75rem;display:block">6.8 § — Kvadratikus maradékok</span>
  <strong>6.77 Def.</strong> Az \(a \in \mathbb{Z}_m\) szám <strong>négyzetes (kvadratikus) maradék</strong> \(\pmod m\),
  ha \(x^2 \equiv a \pmod m\)-nek van megoldása.
  <br/>
  <strong>6.82 Tétel — Euler-lemma:</strong> \(p \in \mathbb{P}\), \(p \nmid a\) esetén \(a\) négyzetes maradék \(\pmod p\) \(\iff\) \(a^{(p-1)/2} \equiv 1 \pmod p.\)
</div>
<div class="def-box">
  <strong>6.84 — Legendre-szimbólum:</strong>
  \[\left(\frac{a}{p}\right) := \begin{cases} 0 & p \mid a \\ +1 & a \text{ négyzetes maradék} \\ -1 & a \text{ négyzetes nemmaradék} \end{cases}\]
</div>
<div class="thm-box">
  <strong>6.89 Tétel — Kvadratikus reciprocitás (Gauss „aranyfia").</strong>
  Tetszőleges \(m, n\) páratlan prímre:
  \[\left(\frac{n}{m}\right) = \begin{cases} -\left(\frac{m}{n}\right) & \text{ha } n \equiv m \equiv 3 \pmod 4 \\ +\left(\frac{m}{n}\right) & \text{máskor} \end{cases}\]
  Gauss <strong>nyolc</strong> különböző bizonyítást adott rá, „aranyfiamnak" (theorema aureum) nevezte.
</div>`;

const TABS: Tab[] = [
  { id: 'intro', label: 'Áttekintés', content: <RichTex html={t1} /> },
  { id: 'muvelet', label: '6.1 Műveletek', content: <RichTex html={t2} /> },
  { id: 'zn', label: '6.2 ℤₙ gyűrű', content: <RichTex html={t2} /> },
  { id: 'linkong', label: '6.3 Lineáris kongr.', content: <RichTex html={t3} /> },
  { id: 'phi', label: '6.4–5 φ + tételek', content: <RichTex html={t4} /> },
  { id: 'hatv', label: '6.6 Nagy hatványozás', content: <PowerModCalc /> },
  { id: 'kvad', label: '6.7–8 Prim. gyök & kvadr.', content: <RichTex html={t6} /> },
];

export default function AlgoCh6() {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet — 6. fejezet</p>
      <h1 className="ila__title">Kongruenciák és maradékosztályok</h1>
      <p className="ila__cite">Szalkai István &amp; Dósa György · Pannon Egyetem · Typotex 2011</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
