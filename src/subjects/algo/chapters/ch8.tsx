import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// Pollard rho factorization visualizer
function PollardRho() {
  const [n, setN] = useState(4087);
  const [c, setC] = useState(1);

  function gcd(a: number, b: number): number { while (b) { const t = b; b = a % b; a = t; } return a; }

  const steps: { k: number; xk: number; j: number; xj: number; g: number }[] = [];
  let xk = 2;
  let xj = 2;
  let result = 1;
  let limit = 0;
  let hIdx = 0;
  let nextPow = 1;

  while (result === 1 && limit < 30) {
    xk = ((xk * xk + c) % n + n) % n;
    limit++;
    const k = limit;
    if (k === nextPow) { nextPow *= 2; hIdx = k - 1; }
    steps.push({ k, xk, j: hIdx, xj, g: gcd(Math.abs(xk - xj), n) });
    result = gcd(Math.abs(xk - xj), n);
    if (k === hIdx) xj = xk;
  }

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#a78bfa' }}>8.20 Pollard ρ algoritmus vizualizátor</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.5rem 0', fontSize: '.85rem' }}>
        <span>n = <input type="number" min={4} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
        <span>c = <input type="number" className="ila-num" value={c} onChange={(e) => setC(+e.target.value)} /></span>
        <span style={{ color: '#8892a4', fontSize: '.8rem' }}>f(x) = x²+c, x₀=2</span>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="cayley" style={{ fontFamily: 'monospace', fontSize: '.82rem', width: '100%' }}>
          <thead>
            <tr><th>k</th><th>x_k</th><th>j=2^h−1</th><th>lnko(xₖ−xⱼ, n)</th></tr>
          </thead>
          <tbody>
            {steps.map((s, i) => (
              <tr key={i} style={s.g > 1 && s.g < n ? { background: 'rgba(167,139,250,.15)' } : undefined}>
                <td>{s.k}</td>
                <td>{s.xk}</td>
                <td>{s.j}</td>
                <td style={{ color: s.g > 1 && s.g < n ? '#34d399' : s.g === n ? '#ef4444' : undefined, fontWeight: s.g > 1 ? 700 : undefined }}>
                  {s.g}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {result > 1 && result < n
        ? <div className="def-box" style={{ marginTop: '.6rem', fontWeight: 700 }}>
            {n} = <span style={{ color: '#fbbf24' }}>{result}</span> × <span style={{ color: '#fbbf24' }}>{n / result}</span>
            &nbsp;<span style={{ color: '#8892a4', fontWeight: 400, fontSize: '.8rem' }}>({steps.length} iteráció)</span>
          </div>
        : <div className="warn-box" style={{ marginTop: '.6rem' }}>
            {result === n ? 'Triviális osztó — próbálj más c értéket' : 'Futás...'}
          </div>}
    </div>
  );
}

const t1 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8. fejezet — Prímtesztelés és számok felbontása</span>
</div>
<div class="warn-box">
  <strong>Minden prímfelbontó módszer \(O(2^n)\) exponenciálisan lassú</strong> — csak 100–200
  jegyű számokra alkalmazhatók. A konstansok különbsége miatt egyik módszer évmilliárdokig,
  a másik „csak" évmilliókig fut ugyanazon adatra.
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Cél</th><th style="text-align:left">Algoritmus</th><th style="text-align:left">Mikor?</th></tr></thead>
  <tbody>
    <tr><td>Felbontás &lt; 10⁶</td><td>Eratoszthenész</td><td>oktatás, kis számok</td></tr>
    <tr><td>Felbontás közeli prímek</td><td>Fermat</td><td>n=pq, |p−q| kicsi</td></tr>
    <tr><td>Felbontás általánosan</td><td>Pollard ρ</td><td>~10–25 jegyű számokra</td></tr>
    <tr><td>Tesztelés gyorsan</td><td>Miller–Rabin</td><td>RSA-kulcsgenerálás</td></tr>
    <tr><td>Tesztelés determinisztikus</td><td>AKS</td><td>matematikai biztonság</td></tr>
  </tbody>
</table>
<div class="def-box">
  <strong>2002 áttörés — AKS.</strong> Agrawal, Kayal és Saxena algoritmusa polinomiálisan gyors,
  100% biztonságos, determinisztikus prímteszt. A gyors <em>prímfelbontás</em> máig megoldatlan.
</div>`;

const t2 = String.raw`
<div class="thm-box">
  <strong>8.1 — Eratoszthenész.</strong>
  Osszuk el \(n\)-et 2-vel és a \(\sqrt{n}\)-nél kisebb páratlan számokkal. Lépésszám: \(\sqrt{n}/2\).
  <strong>Exponenciális</strong> az input méretében.
</div>
<div class="def-box">
  <strong>8.2 § — Fermat algoritmusa.</strong>
  Ha \(n = ab\) és \(a > b\) közel egymáshoz, akkor \(x = \tfrac{a+b}{2}\), \(y = \tfrac{a-b}{2}\):
  \[n = x^2 - y^2 \;\Longleftrightarrow\; n + y^2 = x^2\]
  \(x \approx \sqrt{n}\)-tól indítva \(x\)-et növeljük; minden lépésben ellenőrizzük \(x^2 - n\) négyzetszám-e.
</div>
<div class="warn-box">
  <strong>Veszély:</strong> ha \(n = pq\) és \(p \approx q\) (közeli prímek), Fermat nagyon gyorsan felbontja.
  <em>Ezért nem szabad ilyen RSA-kulcsot választani!</em>
</div>
<div class="thm-box">
  <strong>8.5 Tétel.</strong> \(n = x^2 - y^2\) pontosan akkor oldható meg, ha \(n \neq 4k + 2\).
</div>`;

const t3 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.3 § — Álprímek és Bolyai János</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Bolyai János megpróbálta bebizonyítani a kis Fermat tétel megfordítását — és több ellenpéldát talált:
    \[2^{340} \equiv 1 \pmod{341}, \quad \text{pedig } 341 = 11 \cdot 31.\]
    Bolyai felfedezései csak <strong>2000 körül</strong> kerültek elő a hagyatékából.
  </p>
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Fogalom</th><th style="text-align:left">Definíció</th></tr></thead>
  <tbody>
    <tr><td><strong>álprím</strong> \(b\) bázisra</td><td>\(n\) páratlan összetett, \(\operatorname{lnko}(b,n)=1\), \(b^{n-1}\equiv1\pmod n\)</td></tr>
    <tr><td><strong>Carmichael-szám</strong></td><td>\(n\) összetett, álprím <em>minden</em> \(b\)-re</td></tr>
  </tbody>
</table>
<div class="thm-box">
  Első Carmichael-számok: \(561, 1105, 1729, 2465, \dots\) &nbsp;Ramanujan-szám (1729) is benne van!
  <br/>Alford–Granville–Pomerance (1994): végtelen sok Carmichael-szám létezik (Erdős ötletével).
</div>
<div class="thm-box">
  <strong>8.15 Tétel — Korselt (1899).</strong> \(n\) páratlan, négyzetmentes összetett szám pontosan akkor Carmichael, ha
  \(p - 1 \mid n - 1\) minden \(p \mid n\) prímosztóra.
  <br/>Pl. \(561 = 3 \cdot 11 \cdot 17\): \(2 \mid 560\) ✓, \(10 \mid 560\) ✓, \(16 \mid 560\) ✓.
</div>`;

const t4 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.4 § — Miller–Rabin teszt</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Ötlet: ha \(n\) prím, akkor \(x^2 \equiv 1 \pmod n\) megoldásai csak \(x \equiv \pm 1\).
    A Carmichael-számokat is kiszűri.
  </p>
</div>
<div class="info-box">
  <strong>8.17 Algoritmus — Miller–Rabin:</strong>
  <ol style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li>Bontsuk fel \(n - 1 = 2^s \cdot t\), ahol \(t\) páratlan.</li>
    <li>Válasszunk véletlen \(b\)-t, \(\operatorname{lnko}(b, n) = 1.\)</li>
    <li>Számoljuk ki \(b^t, b^{2t}, b^{4t}, \dots, b^{2^s t} = b^{n-1} \pmod n.\)</li>
    <li>Amikor <strong>először 1-et</strong> kapunk: az előzőnek \(-1\)-nek kell lennie, különben \(n\) összetett.</li>
  </ol>
</div>
<div class="thm-box">
  <strong>Megbízhatóság.</strong> Egyetlen \(b\)-re tévedés esélye \(&lt; 1/4\). \(k\) próba után: \(\leq 4^{-k}\).
  Pl. \(k = 40\): \(4^{-40} &lt; 10^{-24}\) — <strong>OpenSSL alapértelmezett prímtesztje</strong>.
</div>
<div class="ex-box">
  <strong>8.19 Példa — 91 erős álprím \(b=10\)-re:</strong>
  \(91 = 7 \cdot 13\), \(n-1 = 90 = 2 \cdot 45\), \(s=1\), \(t=45.\)
  \(10^3 = 1001 \equiv -1 \pmod{91}\) ⟹ \(10^{45} \equiv -1 \pmod{91}\).
  Átmegy! De 91 összetett — több bázissal kiszűrhető.
</div>`;

const t6 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.6 § — AKS algoritmus (Agrawal–Kayal–Saxena, 2002)</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Az <em>első</em> ismert <strong>polinomidejű, determinisztikus, feltétel nélküli</strong> prímteszt.
    Komplexitás: \(\tilde{O}(\log^{10.5} n)\) ⟶ \(\tilde{O}(\log^6 n)\).
  </p>
</div>
<div class="thm-box">
  <strong>Alapötlet.</strong> \(n\) prím \(\iff\)
  \[(x - a)^n \equiv x^n - a \pmod n\]
  polinomidentitás (ha \(n\) prím, a binomiális együtthatók \(\binom{n}{k}\) mind \(n\)-nel oszthatók \(k=1,\dots,n-1\)-re).
</div>
<div class="info-box">
  <strong>AKS 4 lépésben:</strong>
  <ol style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li>\(n = m^k\) alakú? (perfect power test)</li>
    <li>\(r\) alkalmas prím keresése \(r \leq \log^6 n\)-ig</li>
    <li>\(\operatorname{lnko}(a, n) = 1\) ellenőrzése \(a \leq r\)-re</li>
    <li>\((x - a)^n \equiv x^n - a \pmod{x^r - 1, n}\) ellenőrzése \(a \leq 2\sqrt{r} \log n\)-ig</li>
  </ol>
  Ha mind átmegy ⟹ \(n\) prím. Bármelyik buktató ⟹ \(n\) összetett.
</div>
<div class="warn-box">
  Bár AKS elméletileg gyönyörű, <strong>gyakorlatban nem versenyez Miller–Rabin-nal</strong> —
  a polinomszámítások konstansai magasak.
  Modern kriptokönyvtárakban: <strong>Miller–Rabin + Baillie–PSW kombináció</strong> az ipari sztenderd.
</div>`;

const TABS: Tab[] = [
  { id: 'intro', label: 'Áttekintés', content: <RichTex html={t1} /> },
  { id: 'eraf', label: '8.1–2 Eratoszthenész & Fermat', content: <RichTex html={t2} /> },
  { id: 'alprim', label: '8.3 Álprímek & Bolyai', content: <RichTex html={t3} /> },
  { id: 'mr', label: '8.4 Miller–Rabin', content: <RichTex html={t4} /> },
  { id: 'pollard', label: '8.5 Pollard ρ', content: <PollardRho /> },
  { id: 'aks', label: '8.6 AKS', content: <RichTex html={t6} /> },
];

export default function AlgoCh8() {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet — 8. fejezet</p>
      <h1 className="ila__title">Prímtesztelés és számok felbontása</h1>
      <p className="ila__cite">Szalkai István &amp; Dósa György · Pannon Egyetem · Typotex 2011</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
