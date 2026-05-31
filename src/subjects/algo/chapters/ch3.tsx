import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* ════ Tab 3: Factorization solutions reveal widget (3.25) ════ */
const FACTOR_SOLUTIONS: { label: string; num: string; factored: string; note: string }[] = [
  { label: 'a)', num: '440 747', factored: '613 × 719', note: 'két közeli prím' },
  { label: 'b)', num: '2 347 589', factored: '1 483 × 1 583', note: 'két közeli prím' },
  { label: 'c)', num: '97 189 241', factored: '7 151 × 13 591', note: 'két prím' },
  { label: 'd)', num: '17 967 876 255 379', factored: '81 371 × 220 814 249', note: 'két prím' },
  { label: 'e)', num: '444 113 096 135 661 846 937', factored: '3 719 977 867 × 119 385 951 211', note: 'két 10-jegyű prím' },
  { label: 'f)', num: '2⁶⁷ − 1 = 147 573 952 589 676 412 927', factored: '193 707 721 × 761 838 257 287', note: 'Cole, 1903 — történelmi' },
  { label: 'g)', num: '129-jegyű RSA-129', factored: 'RSA-129: feltörve 1994, 600 gép, 8 hónap', note: '9.1 alfej. 10.23. Megoldás' },
];

function FactorSolutions() {
  const [revealed, setRevealed] = useState<boolean[]>(new Array(FACTOR_SOLUTIONS.length).fill(false));
  const toggle = (i: number) => setRevealed((r) => r.map((v, j) => (j === i ? !v : v)));
  return (
    <div className="info-box" style={{ overflowX: 'auto' }}>
      <span className="lbl" style={{ color: '#fbbf24' }}>3.25 Megoldás — Az 1.1 példa felbontásai</span>
      <p style={{ fontSize: '.83rem', margin: '.4rem 0' }}>
        Most felfedjük a bevezető fejezet 7 számának prímfelbontásait. Kattints egy sorra!
      </p>
      <table className="cayley" style={{ width: '100%', fontSize: '.83rem' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', width: '2.5rem' }}>Jel</th>
            <th style={{ textAlign: 'left' }}>Szám</th>
            <th style={{ textAlign: 'right', width: '14rem' }}>Felbontás</th>
          </tr>
        </thead>
        <tbody>
          {FACTOR_SOLUTIONS.map((row, i) => (
            <tr key={i} style={{ cursor: 'pointer', background: revealed[i] ? 'rgba(251,191,36,.07)' : undefined }} onClick={() => toggle(i)}>
              <td style={{ color: '#a78bfa', fontFamily: 'monospace', fontWeight: 700 }}>{row.label}</td>
              <td style={{ fontFamily: 'monospace', fontSize: '.8rem', color: '#c4cdd8' }}>{row.num}</td>
              <td style={{ textAlign: 'right', fontSize: '.78rem' }}>
                {revealed[i] ? (
                  <span style={{ color: '#fbbf24', fontWeight: 700 }}>{row.factored} <span style={{ color: '#64748b', fontWeight: 400 }}>({row.note})</span></span>
                ) : (
                  <span style={{ color: '#64748b', fontStyle: 'italic' }}>kattints ▾</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="thm-box" style={{ marginTop: '.75rem' }}>
        <strong>RSA-129 anekdota.</strong> 1977-ben Martin Gardner a <em>Scientific American</em>-ben
        közölte a 129-jegyű kihívást — Rivest, Shamir, Adleman 100 USD-t ajánlott a feltöréséért,
        és azt jósolták hogy <em>40 kvadrillió év</em> kellene hozzá. 1994-ben Atkins, Graff, Lenstra
        és Leyland az interneten szervezett elosztott számítással 8 hónap alatt megoldotta. Üzenet:
        <em> „The magic words are squeamish ossifrage."</em>
      </div>
    </div>
  );
}

/* ════ Static tab content ════ */

const t1 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">3. fejezet — A számelmélet alapjai</span>
  <p style="font-size:.87rem;margin:.5rem 0">
    A középiskolai számelmélet-ismereteket — <strong>oszthatóság, prímszámok, prímfelbontás,
    lnko, lkkt</strong> — ismertnek tételezzük fel. Most csak felsoroljuk a legfontosabb fogalmakat
    és összefüggéseket, a hangsúlyt inkább az <em>új szemléletre</em> helyezzük.
  </p>
  <div class="thm-box">
    Új jelölések és nézőpontok ebben a fejezetben:
    <ul style="margin:.4rem 0 0;font-size:.86rem;line-height:1.75">
      <li>\(\mathfrak{p}(n)\) — multihalmaz a prímosztókkal (3.9. Def.)</li>
      <li>\(\Delta\) &amp; \(\nabla\) — lnko és lkkt mint absztrakt műveletek (3.33. Def.)</li>
      <li>Boole-algebra-szemlélet a négyzetmentes számok osztóhalmazán</li>
      <li>Hasonlat a kémiai atomok elméletével</li>
    </ul>
  </div>
  <p style="color:#94a3b8;font-style:italic;font-size:.85rem;margin:.5rem 0 0">
    A „szám" alatt itt is mindig <strong>egész</strong> számot értünk. Negatív számok és \(\pm 1\)
    külön kezelést igényelnek a prímdefinícióban.
  </p>
</div>
<div class="info-box">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .6rem">Atomelmélet-hasonlat (3.8 Megj.)</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Kémia</th><th style="text-align:left">Számelmélet</th></tr></thead>
    <tbody>
      <tr><td>atom <span style="color:#64748b;">(gör. „oszthatatlan")</span></td><td>prímszám</td></tr>
      <tr><td>molekula</td><td>\(n \in \mathbb{N},\ n > 1\)</td></tr>
      <tr><td>összegképlet pl. \(H_2O\)</td><td>kanonikus alak: \(12 = 2^2 \cdot 3\)</td></tr>
    </tbody>
  </table>
  <p style="font-size:.87rem;margin:.65rem 0 0">
    A molekulákat atomok építik fel — a természetes számokat prímszámok. Ez a hasonlat
    pedagógiailag rendkívül hasznos, és magyarázza, miért nevezzük a prímeket
    „<em>primitív szám</em>"-oknak (latin <em>primus</em> = első, alapvető).
  </p>
</div>`;

const t2 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">3.1 § — Oszthatóság és prímek</span>
</div>
<div class="info-box">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .6rem">Alapdefiníciók</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Definíció</th></tr></thead>
    <tbody>
      <tr><td style="color:#c4b5fd">\(a \mid b\)</td><td><strong>\(a\) osztója \(b\)-nek</strong>: létezik \(x \in \mathbb{Z}\), hogy \(b = ax\).</td></tr>
      <tr><td style="color:#c4b5fd">\(p\) prím</td><td><strong>irreducibilis</strong>: \(p \neq -1, 0, 1\), és nem írható fel \(p = xy\) alakban ahol \(x, y > 1\). Pozitív prímek halmaza: \(\mathbb{P}\).</td></tr>
      <tr><td style="color:#c4b5fd">összetett</td><td>\(n \in \mathbb{Z}\), \(n \notin \{-1, 0, 1, \pm p\}\) — felbontható nemtriviálisan.</td></tr>
    </tbody>
  </table>
  <div class="thm-box" style="margin-top:.5rem">
    <strong>3.3 Megjegyzés.</strong> \(\pm 1\) és \(0\) <em>külön</em> tárgyalandó — egészen más
    tulajdonságokkal bírnak mint a prímek. A prímek lényege nem a felbonthatatlanság, hanem
    hogy minden egész szám előállítható belőlük (lásd 3.6. Tétel).
    <br/><br/>
    Negatív számok is léteznek — minden \(p \in \mathbb{P}\) esetén \(-p\) is prím!
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#fbbf24">3.5 Tétel — Prímtulajdonság</span>
  <p style="font-size:.87rem;margin:.4rem 0">Ha \(p\) prím és \(p \mid ab\), akkor \(p \mid a\) <strong>vagy</strong> \(p \mid b\).</p>
  <p style="font-size:.87rem;margin:.4rem 0 0">Általánosabban: ha \(p \mid a_1 a_2 \cdots a_n\), akkor valamely \(i\)-re \(p \mid a_i\).</p>
</div>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">3.6 Tétel — A Számelmélet Alaptétele</span>
  <div class="thm-box">
    Minden \(n \in \mathbb{Z}\), \(n \neq 0\) egész szám felbontható prímszámok szorzatára,
    <strong>lényegében egyértelműen</strong> (a tényezők sorrendjében és az előjelekben lehet eltérés).
  </div>
  <p style="font-size:.87rem;margin:.5rem 0">Tehát \(|n| > 1\) esetén:</p>
  \[n = p_1^{\alpha_1} \cdot p_2^{\alpha_2} \cdots p_r^{\alpha_r}\]
  <p style="font-size:.87rem;margin:.4rem 0">
    ahol a \(p_i \in \mathbb{P}\) páronként különböző prímek, \(\alpha_i \geq 1\). Ezt \(n\)
    <strong>törzs-tényezős alakjának</strong> vagy <strong>kanonikus alakjának</strong> hívjuk.
  </p>
</div>
<div class="def-box">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .55rem">3.9 Definíció — \(\mathfrak{p}(n)\) multihalmaz</h5>
  <p style="font-size:.87rem;margin:0 0 .4rem">\(n > 1\) egészre \(\mathfrak{p}(n)\) jelölje a prímosztók multihalmazát (multiplicitással):</p>
  \[\mathfrak{p}(n) := \{\,\underbrace{p_1,\dots,p_1}_{\alpha_1},\ \underbrace{p_2,\dots,p_2}_{\alpha_2},\ \dots,\ \underbrace{p_r,\dots,p_r}_{\alpha_r}\,\}\]
  <p style="font-size:.87rem;margin:.4rem 0">Példa: \(\mathfrak{p}(12) = \{2, 2, 3\}\), \(\mathfrak{p}(60) = \{2, 2, 3, 5\}\), \(\mathfrak{p}(1) := \emptyset\).</p>
  <div class="thm-box" style="margin-top:.4rem">
    <strong>3.10 Állítás.</strong> A multihalmaz-műveletek lefordítják az oszthatóságot:
    \[\mathfrak{p}(nm) = \mathfrak{p}(n) \cup \mathfrak{p}(m), \qquad n \mid m \iff \mathfrak{p}(n) \subseteq \mathfrak{p}(m).\]
    \[\mathfrak{p}\!\left(\tfrac{m}{n}\right) = \mathfrak{p}(m) \setminus \mathfrak{p}(n) \quad \text{(ha } n \mid m\text{)}\]
    Sőt \(\;\operatorname{lnko}(n,m) = \mathfrak{p}(n) \cap \mathfrak{p}(m)\), \(\;\operatorname{lkkt}(n,m) = \mathfrak{p}(n) \cup \mathfrak{p}(m)\).
  </div>
</div>
<div class="info-box" style="margin-top:.6rem">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .55rem">További jelölések</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th></tr></thead>
    <tbody>
      <tr><td style="color:#c4b5fd">\(p^\alpha \| n\)</td><td><strong>\(p^\alpha\) pontosan osztja \(n\)-t</strong>: \(p^\alpha \mid n\) de \(p^{\alpha+1} \nmid n\) &nbsp;(3.11 Def.)</td></tr>
      <tr><td style="color:#c4b5fd">\(n\) négyzetmentes</td><td>minden prímosztó csak egyszer szerepel: minden \(\alpha_i = 1\) &nbsp;(3.12 Def.)</td></tr>
      <tr><td style="color:#c4b5fd">\(d(n)\)</td><td>\(n\) <strong>pozitív osztóinak száma</strong> &nbsp;(3.13 Def.)</td></tr>
    </tbody>
  </table>
  <div class="thm-box" style="margin-top:.5rem">
    <strong>3.14 Állítás (osztószám-képlet).</strong>
    \[d(n) = (\alpha_1 + 1)(\alpha_2 + 1)\cdots(\alpha_r + 1)\]
    Pl. \(d(12) = d(2^2 \cdot 3) = 3 \cdot 2 = 6\) &nbsp;(osztók: \(1, 2, 3, 4, 6, 12\)).
  </div>
</div>`;

const t3 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#fbbf24">3.16 Probléma — A számelmélet három alapfeladata</span>
  <p style="font-size:.87rem;margin:.4rem 0">Legyen az input egy tetszőleges (többszáz- vagy ezerjegyű) \(n \in \mathbb{N}\).</p>
  <table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
    <thead><tr><th style="text-align:left;width:4rem">№</th><th style="text-align:left">Probléma</th><th style="text-align:left">Status (2010)</th></tr></thead>
    <tbody>
      <tr><td style="color:#c4b5fd">(i)</td><td><strong>Prímtesztelés</strong> — Prímszám-e \(n\)?</td><td style="color:#34d399;font-weight:700">megoldva — AKS 2002</td></tr>
      <tr><td style="color:#c4b5fd">(ii)</td><td><strong>Prímfelbontás (faktorizáció)</strong> — bontsuk fel két kisebb tényezőre.</td><td style="color:#ef4444;font-weight:700">nincs gyors algoritmus</td></tr>
      <tr><td style="color:#c4b5fd">(iii)</td><td><strong>Prímgenerálás</strong> — adjunk meg egy \(n\)-nél nagyobb \(p\) prímet.</td><td style="color:#fbbf24;font-weight:700">aránylag gyors heurisztikák</td></tr>
    </tbody>
  </table>
  <div class="thm-box">
    <strong>3.17 Megjegyzés.</strong> A (ii) megoldása automatikusan megoldja az (i)-et is, és segít a
    (iii)-ban. De fordítva nem áll! 2002 óta tudjuk biztosan tesztelni a prímséget anélkül,
    hogy a számot felbontanánk — ez az AKS-algoritmus áttörése.
  </div>
</div>
<div class="info-box" style="margin-top:.65rem">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .6rem">3.19 Algoritmus — Eratosztheneszi szita</h5>
  <p style="font-size:.87rem;margin:0 0 .5rem">
    Adott \(n \in \mathbb{N}\) prímtényezős felbontására: \(n\)-t elosztjuk a \(\sqrt{n}\)-nél kisebb
    páratlan számokkal.
  </p>
  <p style="color:#64748b;font-size:.8rem;margin:0 0 .6rem">
    Eratoszthenész (Kr.e. 276–196), Alexandriai görög matematikus — könyvtár-vezető és sokoldalú
    polihisztor; a Föld kerületét is megmérte 1% pontosságon belül.
  </p>
  <div class="warn-box">
    <strong>3.20 Megjegyzés.</strong> Az Eratosztheneszi szita <strong>exponenciálisan lassú</strong>
    (lásd 2.10 Példa) — \(k\) jegyű input esetén \(\sqrt{n} \approx 10^{k/2}\) lépést igényel.
  </div>
  <h5 style="color:#fbbf24;font-weight:700;margin:.8rem 0 .5rem">3.21 Példa — Mennyi ideig fut 5 GHz-es gépen?</h5>
  <p style="font-size:.87rem;margin:0 0 .4rem">Feltevés: másodpercenként \(5 \cdot 10^9\) osztás. Lépésszám \(\approx \sqrt{n}/2 \approx 10^{k/2}\).</p>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jegyek</th><th style="text-align:left">Lépésszám</th><th style="text-align:right">Futásidő</th></tr></thead>
    <tbody>
      <tr><td style="color:#c4b5fd">k=20</td><td>\(5 \cdot 10^9\)</td><td style="text-align:right;color:#34d399">1 mp</td></tr>
      <tr><td style="color:#c4b5fd">k=30</td><td>\(5 \cdot 10^{14}\)</td><td style="text-align:right;color:#34d399">~ 27 óra 46 perc</td></tr>
      <tr><td style="color:#c4b5fd">k=40</td><td>\(5 \cdot 10^{19}\)</td><td style="text-align:right;color:#fbbf24">~ 317 év</td></tr>
      <tr><td style="color:#c4b5fd">k=50</td><td>\(5 \cdot 10^{24}\)</td><td style="text-align:right;color:#f59e0b">~ 31,7 millió év</td></tr>
      <tr><td style="color:#ef4444">k=100</td><td>\(5 \cdot 10^{49}\)</td><td style="text-align:right;color:#ef4444">~ 3,17 × 10²³ <em>milliárd</em> év</td></tr>
    </tbody>
  </table>
  <div class="thm-box" style="margin-top:.5rem">
    <strong>(b)</strong> Ha csak prímekkel próbálkozunk (tömbből), a Nagy Prímszámtétel szerint
    \(\pi(\sqrt{n}) \sim \sqrt{n} / \ln(\sqrt{n})\) — gyorsulás csak konstans szorzóban; k=50 esetén
    31,7 millió év → 5,5 millió év.
    <br/><br/>
    <strong>(c)</strong> Ha 1000-szer gyorsabb gép → <em>semmi sem változik.</em>
    Exponenciális falba mégha 1 000 000-szor gyorsabb gép is csak pár nagyságrendet csökkent.
  </div>
</div>
<div class="def-box" style="margin-top:.65rem">
  <span class="lbl" style="color:#a78bfa">3.23 Tétel — AKS (Agrawal–Kayal–Saxena, 2002)</span>
  <p style="font-size:.87rem;margin:.4rem 0">
    A (i) <strong>Prímtesztelés</strong> problémára létezik <em>polinomiális</em>
    (gyors) determinisztikus algoritmus. Eredeti komplexitás: \(\tilde{O}(\log^{10.5} n)\);
    később \(\tilde{O}(\log^6 n)\)-re javítva.
  </p>
  <div class="warn-box" style="margin-top:.4rem">
    A faktorizációra (ii) <strong>máig nem ismert</strong> polinomiális algoritmus —
    ez biztosítja az RSA-titkosítás biztonságát! A legjobb klasszikus algoritmus:
    általános számtest-szita (GNFS), \(\exp(O(\sqrt[3]{\log n \cdot \log^2 \log n}))\).
  </div>
</div>`;

const t4 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">3.3 § — lnko és lkkt</span>
  <table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Definíció</th></tr></thead>
    <tbody>
      <tr><td style="color:#c4b5fd">\(\operatorname{lnko}(a,b)\)</td><td><strong>legnagyobb közös osztó</strong>; angolul \(\gcd(a,b)\). Mindig pozitív, \(1 \leq \operatorname{lnko}(a,b) \leq \min(|a|,|b|)\).</td></tr>
      <tr><td style="color:#c4b5fd">\(\operatorname{lkkt}(a,b)\)</td><td><strong>legkisebb közös többszörös</strong>; angolul \(\operatorname{lcm}(a,b)\).</td></tr>
    </tbody>
  </table>
  <p style="color:#94a3b8;font-size:.8rem;margin:.4rem 0 0">
    A széles körben elterjedt \((a,b)\) és \([a,b]\) jelölést könyvünk <em>nem</em> használja
    (más jelentésekkel keveredne).
  </p>
</div>
<div class="def-box" style="margin-top:.6rem">
  <span class="lbl" style="color:#a78bfa">3.30 Tétel — Prímfelbontás-képlet</span>
  <p style="font-size:.87rem;margin:.4rem 0">Ha \(a = \prod p_i^{\alpha_i}\) és \(b = \prod p_i^{\beta_i}\) (közös prímalapokkal), akkor:</p>
  \[\operatorname{lnko}(a,b) = \prod p_i^{\min(\alpha_i, \beta_i)}, \qquad
    \operatorname{lkkt}(a,b) = \prod p_i^{\max(\alpha_i, \beta_i)}.\]
  <div class="thm-box" style="margin-top:.4rem">
    <strong>3.31 Tétel.</strong> \(\mathfrak{p}\)-multihalmazokkal szemléletesen:
    \[\operatorname{lnko}(a_1,\dots,a_t) = \mathfrak{p}(a_1) \cap \cdots \cap \mathfrak{p}(a_t),\]
    \[\operatorname{lkkt}(a_1,\dots,a_t) = \mathfrak{p}(a_1) \cup \cdots \cup \mathfrak{p}(a_t).\]
  </div>
  <div class="warn-box" style="margin-top:.4rem">
    <strong>Vigyázat — 3.32 Megj.</strong> Ezek a képletek <em>csak elméleti</em> jelentőségűek!
    Gyakorlatban a prímfelbontás megkereshetetlen — az lnko-t Euklidesz algoritmusával
    számítjuk ki (4.2. alfejezet) <em>prímfelbontás nélkül</em>. Ez teszi az Euklideszi
    algoritmust pótolhatatlanná a 7. fejezet prímtesztelő algoritmusaiban.
  </div>
</div>
<div class="def-box" style="margin-top:.6rem">
  <span class="lbl" style="color:#a78bfa">3.33 Definíció — \(\Delta\) és \(\nabla\) jelölés</span>
  <p style="font-size:.87rem;margin:.4rem 0">Vezessük be a Boole-algebrákra emlékeztető absztrakt jelölést:</p>
  \[a \,\Delta\, b := \operatorname{lnko}(a,b), \qquad a \,\nabla\, b := \operatorname{lkkt}(a,b).\]

  <h5 style="color:#a78bfa;font-weight:700;margin:.8rem 0 .5rem">Tulajdonságok (3.34–3.36)</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Tulajdonság</th><th style="text-align:left">Képlet</th></tr></thead>
    <tbody>
      <tr><td><strong>kommutativitás</strong></td><td>\(a \Delta b = b \Delta a\), &nbsp; \(a \nabla b = b \nabla a\)</td></tr>
      <tr><td><strong>asszociativitás</strong></td><td>\((a \Delta b) \Delta c = a \Delta (b \Delta c)\)</td></tr>
      <tr><td><strong>disztributivitás</strong></td><td>\((a \Delta b) \nabla c = (a \nabla c) \Delta (b \nabla c)\)</td></tr>
      <tr><td><strong>disztributivitás (másik)</strong></td><td>\((a \nabla b) \Delta c = (a \Delta c) \nabla (b \Delta c)\)</td></tr>
    </tbody>
  </table>

  <div class="thm-box" style="margin-top:.5rem">
    <strong>3.38 Tétel — Boole-algebra-struktúra.</strong> Legyen \(n\) négyzetmentes,
    \(D_n := \{\text{osztói}\}\). Ekkor a hatos
    \[\left(D_n,\ \operatorname{lnko},\ \operatorname{lkkt},\ \tfrac{n}{x},\ n,\ 1\right)\]
    <strong>Boole-algebrát</strong> alkot — pontosan ugyanazokkal a tulajdonságokkal mint
    \((P(H), \cap, \cup, \overline{\cdot}, H, \emptyset)\) a hatványhalmaz-műveletek.
  </div>

  <div class="ex-box" style="margin-top:.5rem">
    <strong>3.39 Példa — De Morgan a számelmélet nyelvén.</strong>
    Az \(\overline{A \cup B} = \overline{A} \cap \overline{B}\) azonosság:
    \[\frac{n}{\operatorname{lkkt}(x,y)} = \operatorname{lnko}\!\left(\frac{n}{x},\ \frac{n}{y}\right)\]
    ahol \(x, y\) az \(n\) négyzetmentes szám osztói.
  </div>
</div>
<div class="def-box" style="margin-top:.6rem">
  <span class="lbl" style="color:#a78bfa">3.40 Definíció — Relatív prím</span>
  <p style="font-size:.87rem;margin:.4rem 0">
    \(a\) és \(b\) <strong>relatív prímek</strong> (coprime), ha \(\operatorname{lnko}(a,b) = 1\),
    vagyis \(\mathfrak{p}(a) \cap \mathfrak{p}(b) = \emptyset\).
  </p>
  <div class="thm-box" style="margin-top:.4rem">
    <strong>3.43 Definíció — Több szám esete.</strong> Több szám relatív prímsége
    <strong>kétféle</strong> módon értelmezhető:
    <ul style="margin:.4rem 0 0;font-size:.86rem;line-height:1.75">
      <li><strong>(i)</strong> relatív prímek: \(\operatorname{lnko}(a_1,\dots,a_t) = 1\)</li>
      <li><strong>(ii)</strong> <em>páronként</em> relatív prímek: \(\operatorname{lnko}(a_i,a_j) = 1\) minden \(i \neq j\)</li>
    </ul>
    <strong>(ii) sokkal erősebb feltétel</strong> mint (i)! Ez kulcsfontosságú a 7. fej. Kínai
    maradéktételében.
  </div>
</div>
<div class="info-box" style="margin-top:.6rem">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .55rem">3.44–3.45 Hasznos azonosságok</h5>
  \[\operatorname{lkkt}(a,b) = \frac{a \cdot b}{\operatorname{lnko}(a,b)} \qquad \text{(rangsoros kompenzáció)}\]
  \[\operatorname{lnko}(ma, mb) = |m| \cdot \operatorname{lnko}(a,b)\]
  \[\operatorname{lnko}\!\left(\frac{a}{d}, \frac{b}{d}\right) = \frac{1}{d} \operatorname{lnko}(a,b) \quad \text{ha } d \mid \operatorname{lnko}(a,b)\]
  <p style="font-size:.87rem;margin:.4rem 0 0">
    Az utolsó következménye: \(\frac{a}{d}\) és \(\frac{b}{d}\) pontosan akkor relatív prímek,
    ha \(d = \operatorname{lnko}(a,b)\).
  </p>
</div>
<div class="def-box" style="margin-top:.6rem">
  <span class="lbl" style="color:#fbbf24">3.47 Tétel — Dirichlet 1849</span>
  <p style="font-size:.87rem;margin:.4rem 0">Tetszőlegesen választott \(u, v \in \mathbb{N}\) természetes számok</p>
  \[\frac{6}{\pi^2} \approx 0{,}60793 \quad \text{(kb. 60,8\%)}\]
  <p style="font-size:.87rem;margin:.4rem 0 0">valószínűséggel relatív prímek. <em>Két véletlen természetes szám tehát majdnem 61% eséllyel coprime.</em></p>
</div>`;

const t5 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">3.4 § — A prímszámok eloszlása</span>
</div>
<div class="info-box">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .6rem">3.48 Tétel (Euklidesz, Kr.e. ~300)</h5>
  <p style="font-size:.87rem;margin:0 0 .5rem">A prímszámok száma <strong>végtelen</strong>.</p>
  <div class="def-box">
    <strong>Bizonyítás.</strong> Ha \(p_1, p_2, \dots, p_k\) az „összes" prím, akkor
    \[N := p_1 p_2 \cdots p_k + 1\]
    egyik \(p_i\)-vel sem osztható — tehát vagy maga prím, vagy minden osztója egy új prím.
    Ellentmondás. <span style="color:#64748b;">\(\square\)</span>
  </div>
</div>
<div class="info-box" style="margin-top:.6rem">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .6rem">3.49 Tétel — Tetszőlegesen nagy prímrések</h5>
  <p style="font-size:.87rem;margin:0 0 .5rem">Bármely \(\ell \in \mathbb{N}^+\) számhoz létezik \(\ell\) db <strong>egymás utáni</strong> összetett szám.</p>
  <div class="def-box">
    <strong>Bizonyítás.</strong> Tetszőleges \(k \geq 2\) esetén a \(k! + 2,\ k! + 3,\ \dots,\ k! + k\) számok
    rendre \(2, 3, \dots, k\)-val oszthatóak — egyik sem prím. Ez \(\ell = k - 1\) db szám, \(k\) tetszőlegesen
    nagy lehet. <span style="color:#64748b;">\(\square\)</span>
  </div>
</div>
<div class="info-box" style="margin-top:.6rem">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .6rem">3.50 Definíció — \(p_n\) és \(\pi(x)\)</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th></tr></thead>
    <tbody>
      <tr><td style="color:#c4b5fd">\(p_n\)</td><td>az \(n\)-edik (pozitív) prímszám. Pl. \(p_1 = 2,\ p_2 = 3,\ p_3 = 5,\dots\)</td></tr>
      <tr><td style="color:#c4b5fd">\(\pi(x)\)</td><td>az \(x\)-nél kisebb (pozitív) prímek <strong>száma</strong>. Pl. \(\pi(10) = 4\) &nbsp;(2, 3, 5, 7).</td></tr>
    </tbody>
  </table>
  <div class="ex-box" style="margin-top:.5rem">
    <strong>Érdekesség.</strong> Az <em>egymilliomodik</em> prím:
    \[p_{1\,000\,000} = 15\,485\,863 \quad \text{(még csak 8-jegyű, és 1-gyel kezdődik)}\]
    \[\pi(15\,485\,863) = 1\,000\,000.\]
    Tehát az első 8-jegyű prímnél már egymillió prím létezik — <em>nagyon sűrűek</em>!
  </div>
</div>
<div class="def-box" style="margin-top:.6rem">
  <span class="lbl" style="color:#a78bfa">3.51 Tétel — Nagy Prímszámtétel</span>
  \[\lim_{n\to\infty} \frac{\pi(n)}{n / \log n} = 1, \quad \text{azaz} \quad \pi(n) \;\sim\; \frac{n}{\log n}\]
  <p style="font-size:.87rem;margin:.5rem 0">Más alakban (logaritmusos integrál):</p>
  \[\pi(n) \;\sim\; \operatorname{li}(n) = \int_2^n \frac{1}{\ln x}\, dx\]
  <p style="font-size:.87rem;margin:.5rem 0">Pontosabb aszimptotikus sor: bármely \(r \in \mathbb{N}\)-re</p>
  \[\pi(n) = \frac{n}{\log n} + \frac{1! \cdot n}{\log^2 n} + \frac{2! \cdot n}{\log^3 n} + \cdots + \frac{r! \cdot n}{\log^{r+1} n} + O\!\left(\frac{n}{\log^{r+2} n}\right).\]
  <div class="thm-box" style="margin-top:.5rem">
    <strong>Történet.</strong> A sejtés <strong>Gauss</strong> (1777–1855) 15 éves korából
    származik (számtáblákon megfigyelte a sűrűséget). Bizonyítani csak 1896-ban sikerült
    <strong>Hadamard</strong> (FR, 1865–1963) és <strong>de la Vallée Poussin</strong> (BE, 1866–1962)
    egymástól függetlenül a Riemann-zeta-függvény elméletével. Elemibb bizonyítás:
    Erdős–Selberg, 1948.
  </div>
</div>
<div class="def-box" style="margin-top:.6rem">
  <span class="lbl" style="color:#a78bfa">3.52 Tétel — Csebisev (Bertrand-posztulátum)</span>
  <p style="font-size:.87rem;margin:.4rem 0">Tetszőleges \(n > 1\) egészre \(n\) és \(2n\) között <strong>mindig van prím</strong>.</p>
  <p style="color:#64748b;font-size:.8rem;margin:.3rem 0 0">
    Pafnutyij Lvovics Csebisev (1821–1894) orosz matematikus. Bertrand 1845-ben sejtette,
    Csebisev 1850-ben bizonyította. Erdős Pál 17 évesen (1932) elemi bizonyítást adott rá.
  </p>
</div>
<div class="info-box" style="margin-top:.6rem">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .55rem">3.53–3.54 További aszimptotikák</h5>
  <p style="font-size:.87rem;margin:0 0 .4rem">Az \(n\)-edik prím:</p>
  \[p_n \;\sim\; n \cdot \log n\]
  <p style="font-size:.87rem;margin:.5rem 0 .4rem">A reciprokok harmonikus-szerű összege:</p>
  \[\sum_{\substack{p \leq x \\ p \in \mathbb{P}}} \frac{1}{p} \;=\; \log(\log x) + o(1)\]
  <p style="color:#94a3b8;font-style:italic;font-size:.85rem;margin:.4rem 0 0">
    Tehát \(\sum 1/p\) <em>divergens</em>, de <em>iszonyúan lassan</em> — log-log nagyságrendben.
    \(x = 10^{1000}\) esetén az összeg még mindig csak kb. 7.
  </p>
</div>`;

const t6 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#fbbf24">3.5.1 — Pitagorasz és FLT</span>
  <h5 style="color:#a78bfa;font-weight:700;margin:.5rem 0 .4rem">3.55 Definíció — Pitagoraszi számhármasok</h5>
  <p style="font-size:.87rem;margin:0 0 .4rem">Az \(x^2 + y^2 = z^2\) egyenlet pozitív egész megoldásai. Pl. \((3,4,5)\), \((5,12,13)\), \((8,15,17)\).</p>
  <div class="thm-box">
    <strong>3.56 Állítás.</strong> Egy parametrikus végtelen család (Babilóniaiak, \(\sim\) Kr.e. 1800):
    \[x = 2m, \qquad y = m^2 - 1, \qquad z = m^2 + 1, \qquad m \in \mathbb{N}.\]
    <em>(Nem minden Pitagoraszi hármast ad meg — pl. \((3,4,5)\) hiányzik.)</em> A teljes
    parametrizáció: \(x = k(p^2 - q^2),\ y = 2kpq,\ z = k(p^2 + q^2)\) ahol \(p > q\),
    \(\operatorname{lnko}(p,q) = 1\), \(p, q\) különböző paritású.
  </div>
</div>
<div class="def-box" style="margin-top:.65rem">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .5rem">3.57 Állítás — Fermat Nagy Sejtése (FLT)</h5>
  <div class="ex-box" style="font-style:italic">
    „Az \(x^n + y^n = z^n\) egyenletnek \(n \geq 3\) esetén <strong>nincsen</strong> pozitív egész gyöke.
    Erre egy csodálatos bizonyítást találtam, de a lap széle túl keskeny ahhoz, hogy azt befogadja."
    <br/><br/>
    — Pierre de Fermat, 1637 (egy <em>Diophantosz-kötet</em> margóján)
  </div>
  <div class="thm-box" style="margin-top:.5rem">
    <strong>358 év várakozás.</strong> A sejtést Andrew Wiles 1993-ban (R. Taylorral közösen)
    bizonyította a moduláris formák és elliptikus görbék elméletével — végleges publikáció:
    <em>Annals of Mathematics</em>, 1995. Máig <em>rejtély, mi volt Fermat „csodálatos"
    bizonyítása</em> — szakértők szerint hibás vagy hiányos lehetett.
  </div>
</div>
<div class="def-box" style="margin-top:.65rem">
  <span class="lbl" style="color:#fbbf24">3.5.2 — Karácsonyi tétel és Bolyai János</span>
  <h5 style="color:#a78bfa;font-weight:700;margin:.5rem 0 .4rem">3.58 Tétel — Fermat karácsonyi tétele</h5>
  <p style="font-size:.87rem;margin:0 0 .4rem">Minden <strong>\(4m + 1\)</strong> alakú prímszám előáll <em>két négyzetszám</em> összegeként.</p>
  <p style="font-size:.87rem;margin:0 0 .5rem">Pl. \(5 = 1^2 + 2^2\), \(13 = 2^2 + 3^2\), \(17 = 1^2 + 4^2\), \(29 = 2^2 + 5^2\), \(37 = 1^2 + 6^2\)…</p>
  <div class="thm-box">
    <strong>Történet.</strong> Fermat 1640 karácsonyán fogalmazta meg a tételt, de bizonyítást
    nem közölt. Euler 1747-ben (7 év küzdelem után) bizonyította be — <strong>55 oldalas</strong>
    dolgozatban.
  </div>
  <div class="ex-box" style="margin-top:.5rem">
    <strong>Bolyai János — kétsoros bizonyítás.</strong> Bolyai Farkas bíztatására fia
    a komplex egészek \(\mathbb{Z}[i] = \{a + bi : a, b \in \mathbb{Z}\}\)
    (Gauss-egészek) gyűrűjében dolgozva <strong>négy</strong> bizonyítást talált — köztük
    egy alig <strong>két soros</strong>. A XX. század matematikusai versenyeztek a
    legrövidebb bizonyításért; <strong>Don Zagier 1990-es egyetlen mondatos</strong> változata
    bekerült az „Erdős Pál féle Nagy Könyvbe". Kiss Elemér szerint azonban inkább
    <em>Bolyai bizonyítása</em> érdemli a helyet.
  </div>
  <p style="color:#94a3b8;font-size:.8rem;margin:.5rem 0 0">
    Részletek: Kiss Elemér [KE1], [KE2]. Bolyai János számelméleti munkásságának feltárása
    a 20. század végén történt — a hagyatékában talált kéziratok elemzése Kiss Elemér,
    Bolyai-kutató matematikus munkája.
  </p>
</div>
<div class="def-box" style="margin-top:.65rem">
  <span class="lbl" style="color:#fbbf24">3.5.3 — Számtani sorozatok prímekből</span>
  <h5 style="color:#a78bfa;font-weight:700;margin:.5rem 0 .4rem">3.59 Tétel — Dirichlet 1837</h5>
  <p style="font-size:.87rem;margin:0 0 .4rem">
    Ha egy számtani sorozat <em>első tagja és különbsége relatív prímek</em>, akkor
    <strong>végtelen sok prím</strong> van benne.
  </p>
  <p style="font-size:.87rem;margin:0 0 .5rem">Pl. \(4k + 1\) vagy \(4k + 3\) alakú prímekből egyaránt végtelen sok van.</p>
  <h5 style="color:#a78bfa;font-weight:700;margin:.7rem 0 .4rem">3.60 Probléma — Tisztán prímekből álló sorozat</h5>
  <p style="font-size:.87rem;margin:0 0 .4rem">Milyen hosszú olyan számtani sorozat van, amelynek <em>minden tagja</em> prímszám?</p>
  <div class="ex-box" style="margin-top:.4rem">
    <strong>2005-ös rekord (22 tagú).</strong>
    \[a_n = 28\,383\,220\,937\,263 + 1\,861\,263\,814\,410 \cdot k, \quad 0 \leq k \leq 21\]
    ahol a különbség
    \[1\,861\,263\,814\,410 = 2 \cdot 3 \cdot 5^2 \cdot 7 \cdot 11 \cdot 13 \cdot 17 \cdot 19 \cdot 23 \cdot 103\]
    — éppen \(23\#/2\) formájú, az első \(k\) prím szorzata közelében.
  </div>
  <h5 style="color:#a78bfa;font-weight:700;margin:.8rem 0 .4rem">3.61 Tétel — Green–Tao, 2004</h5>
  <p style="font-size:.87rem;margin:0 0 .4rem">
    <strong>Létezik tetszőleges véges hosszúságú</strong>, csak prímekből álló számtani sorozat.
  </p>
  <div class="thm-box" style="margin-top:.4rem">
    Ben Green és Terence Tao 2004-es áttörése Szemerédi tétele
    (számtani progresszió pozitív sűrűségű halmazokban) és a Fourier-analízis kombinációjával.
    Tao 2006-ban Fields-érmet kapott részben ezért. Sajnos a bizonyítás <em>nem konstruktív</em> —
    nem ismert algoritmus 23+ tagú sorozat megtalálására!
  </div>
</div>
<div class="def-box" style="margin-top:.65rem">
  <span class="lbl" style="color:#fbbf24">3.5.4 — Ikerprímek</span>
  <h5 style="color:#a78bfa;font-weight:700;margin:.5rem 0 .4rem">3.62 Definíció</h5>
  <p style="font-size:.87rem;margin:0 0 .4rem">
    \(p, q \in \mathbb{P}\) <strong>ikerprímek</strong>, ha \(q = p + 2\).
    Pl. \((3,5)\), \((5,7)\), \((11,13)\), \((17,19)\), \((29,31)\)…
  </p>
  <h5 style="color:#a78bfa;font-weight:700;margin:.7rem 0 .4rem">3.63 Sejtés — Ikerprím-probléma</h5>
  <div class="thm-box">
    Végtelen sok \((p, q)\) ikerprím-pár létezik.
  </div>
  <p style="color:#94a3b8;font-size:.8rem;margin:.4rem 0 .5rem">
    Az ókorban már felmerült; máig nyitott. <strong>Yitang Zhang 2013-as áttörése:</strong>
    végtelen sok \(p, q\) prímpár létezik \(q - p &lt; 70\,000\,000\) réssel. Polymath együttműködéssel
    a határ ma \(\leq 246\). A 2-es rés (igazi ikerprímek) még mindig nyitott!
  </p>
  <h5 style="color:#a78bfa;font-weight:700;margin:.5rem 0 .4rem">Aktuális rekordok (2005)</h5>
  <p style="font-size:.87rem;margin:0 0 .4rem">
    Járai Antal és munkatársai találták (a 2.12 példában is szerepelt):
  </p>
  \[d_{1,2} = 16\,869\,987\,339\,975 \cdot 2^{171960} \pm 1 \quad \text{— 51 779 jegyűek}\]
  <p style="color:#64748b;font-size:.8rem;margin:.4rem 0 0">
    Azóta természetesen tovább nőttek. A legfrissebb rekord a primes.utm.edu rangsorán követhető.
  </p>
</div>`;

const TABS: Tab[] = [
  { id: 'intro', label: 'Áttekintés', content: <RichTex html={t1} /> },
  { id: 'oszt', label: '3.1 Oszthatóság', content: <RichTex html={t2} /> },
  { id: 'algprob', label: '3.2 Alg. problémák', content: <div><RichTex html={t3} /><FactorSolutions /></div> },
  { id: 'lnko', label: '3.3 lnko & lkkt', content: <RichTex html={t4} /> },
  { id: 'eloszlas', label: '3.4 Prímeloszlás', content: <RichTex html={t5} /> },
  { id: 'nevezetes', label: '3.5 Nevezetes', content: <RichTex html={t6} /> },
];

export default function AlgoCh3() {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet — 3. fejezet</p>
      <h1 className="ila__title">A számelmélet alapjai</h1>
      <p className="ila__cite">Szalkai István &amp; Dósa György · Pannon Egyetem · Typotex 2011</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
