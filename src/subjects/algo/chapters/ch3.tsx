import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

const t1 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">3. fejezet — A számelmélet alapjai</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    A középiskolai számelmélet-ismereteket — <strong>oszthatóság, prímszámok, prímfelbontás,
    lnko, lkkt</strong> — ismertnek tételezzük fel. Új jelölések és nézőpontok ebben a fejezetben:
  </p>
  <ul style="font-size:.86rem;line-height:1.8;margin:.4rem 0">
    <li>\(\mathfrak{p}(n)\) — multihalmaz a prímosztókkal (3.9 Def.)</li>
    <li>\(\Delta\) &amp; \(\nabla\) — lnko és lkkt mint absztrakt műveletek (3.33 Def.)</li>
    <li>Boole-algebra-szemlélet a négyzetmentes számok osztóhalmazán</li>
    <li>Hasonlat a kémiai atomok elméletével</li>
  </ul>
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.6rem 0">
  <thead><tr><th style="text-align:left">Kémia</th><th style="text-align:left">Számelmélet</th></tr></thead>
  <tbody>
    <tr><td>atom (gör. „oszthatatlan")</td><td>prímszám</td></tr>
    <tr><td>molekula</td><td>\(n \in \mathbb{N},\ n > 1\)</td></tr>
    <tr><td>összegképlet pl. \(H_2O\)</td><td>kanonikus alak: \(12 = 2^2 \cdot 3\)</td></tr>
  </tbody>
</table>`;

const t2 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">3.1 § — Oszthatóság és prímek</span>
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Definíció</th></tr></thead>
  <tbody>
    <tr><td style="color:#c4b5fd">\(a \mid b\)</td><td><strong>a osztója b-nek</strong>: létezik \(x \in \mathbb{Z}\), hogy \(b = ax\).</td></tr>
    <tr><td style="color:#c4b5fd">\(p\) prím</td><td><strong>irreducibilis</strong>: \(p \neq -1, 0, 1\), nem írható \(p = xy\) alakban ahol \(x,y>1\).</td></tr>
    <tr><td style="color:#c4b5fd">összetett</td><td>\(n \in \mathbb{Z}\), \(n \notin \{-1, 0, 1, \pm p\}\) — felbontható nemtriviálisan.</td></tr>
  </tbody>
</table>
<div class="thm-box">
  <strong>3.5 Tétel — Prímtulajdonság.</strong> Ha \(p\) prím és \(p \mid ab\), akkor \(p \mid a\) <strong>vagy</strong> \(p \mid b\).
</div>
<div class="thm-box">
  <strong>3.6 Tétel — A Számelmélet Alaptétele.</strong>
  Minden \(n \in \mathbb{Z}\), \(n \neq 0\) egész szám felbontható prímszámok szorzatára,
  <strong>lényegében egyértelműen</strong> (a tényezők sorrendjében eltérés megengedett):
  \[n = p_1^{\alpha_1} \cdot p_2^{\alpha_2} \cdots p_r^{\alpha_r}\]
</div>
<div class="def-box">
  <strong>3.9 Definíció — \(\mathfrak{p}(n)\) multihalmaz.</strong>
  \(\mathfrak{p}(n)\) jelölje a prímosztók multihalmazát (multiplicitással):
  pl. \(\mathfrak{p}(12) = \{2, 2, 3\}\), \(\mathfrak{p}(60) = \{2, 2, 3, 5\}\), \(\mathfrak{p}(1) := \emptyset\).
</div>
<div class="thm-box">
  <strong>3.10 Állítás.</strong>
  \[\mathfrak{p}(nm) = \mathfrak{p}(n) \cup \mathfrak{p}(m), \qquad n \mid m \iff \mathfrak{p}(n) \subseteq \mathfrak{p}(m)\]
  \[\operatorname{lnko}(n,m) = \mathfrak{p}(n) \cap \mathfrak{p}(m), \qquad \operatorname{lkkt}(n,m) = \mathfrak{p}(n) \cup \mathfrak{p}(m)\]
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th></tr></thead>
  <tbody>
    <tr><td style="color:#c4b5fd">\(p^\alpha \| n\)</td><td><strong>\(p^\alpha\) pontosan osztja \(n\)-t</strong>: \(p^\alpha \mid n\) de \(p^{\alpha+1} \nmid n\)</td></tr>
    <tr><td style="color:#c4b5fd">\(n\) négyzetmentes</td><td>minden \(\alpha_i = 1\)</td></tr>
    <tr><td style="color:#c4b5fd">\(d(n)\)</td><td>\(n\) <strong>pozitív osztóinak száma</strong>: \(d(n) = (\alpha_1+1)(\alpha_2+1)\cdots(\alpha_r+1)\)</td></tr>
  </tbody>
</table>`;

const t3 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">3.16 Probléma — A számelmélet három alapfeladata</span>
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">№</th><th style="text-align:left">Probléma</th><th style="text-align:left">Status (2010)</th></tr></thead>
  <tbody>
    <tr><td style="color:#c4b5fd">(i)</td><td><strong>Prímtesztelés</strong> — Prímszám-e \(n\)?</td><td style="color:#34d399;font-weight:700">megoldva — AKS 2002</td></tr>
    <tr><td style="color:#c4b5fd">(ii)</td><td><strong>Prímfelbontás (faktorizáció)</strong></td><td style="color:#ef4444;font-weight:700">nincs gyors algoritmus</td></tr>
    <tr><td style="color:#c4b5fd">(iii)</td><td><strong>Prímgenerálás</strong></td><td style="color:#fbbf24;font-weight:700">aránylag gyors heurisztikák</td></tr>
  </tbody>
</table>
<div class="thm-box">
  <strong>3.23 Tétel — AKS (Agrawal–Kayal–Saxena, 2002).</strong>
  A (i) prímtesztelés problémára létezik <em>polinomiális</em> determinisztikus algoritmus.
  Eredeti: \(\tilde{O}(\log^{10.5} n)\); majd \(\tilde{O}(\log^6 n)\).
</div>
<div class="warn-box">
  A faktorizációra (ii) <strong>máig nem ismert</strong> polinomiális algoritmus —
  ez biztosítja az RSA-titkosítás biztonságát!
</div>
<div class="thm-box">
  <strong>3.21 Példa — Eratosztheneszi szita futásideje (5 GHz-es gépen)</strong>
  <br/>Lépésszám \(\approx \sqrt{n}/2 \approx 10^{k/2}\) osztás:
  <table class="cayley" style="font-size:.83rem;margin:.4rem 0;width:100%">
    <thead><tr><th style="text-align:left">Jegyek</th><th style="text-align:left">Futásidő</th></tr></thead>
    <tbody>
      <tr><td>k=20</td><td style="color:#34d399">1 mp</td></tr>
      <tr><td>k=30</td><td style="color:#34d399">~ 27 óra 46 perc</td></tr>
      <tr><td>k=40</td><td style="color:#fbbf24">~ 317 év</td></tr>
      <tr><td>k=50</td><td style="color:#f59e0b">~ 31,7 millió év</td></tr>
      <tr><td style="color:#ef4444">k=100</td><td style="color:#ef4444">~ 3,17 × 10²³ <em>milliárd</em> év</td></tr>
    </tbody>
  </table>
</div>
<div class="thm-box">
  <strong>3.25 Megoldás — 1.1 példa felbontásai</strong>
  <table class="cayley" style="font-size:.82rem;margin:.4rem 0;width:100%">
    <tbody>
      <tr><td style="color:#a78bfa">a)</td><td>\(440\,747 = 613 \times 719\)</td></tr>
      <tr><td style="color:#a78bfa">b)</td><td>\(2\,347\,589 = 1\,483 \times 1\,583\)</td></tr>
      <tr><td style="color:#a78bfa">c)</td><td>\(97\,189\,241 = 7\,151 \times 13\,591\)</td></tr>
      <tr><td style="color:#a78bfa">d)</td><td>\(17\,967\,876\,255\,379 = 81\,371 \times 220\,814\,249\)</td></tr>
      <tr><td style="color:#a78bfa">f)</td><td>\(2^{67} - 1 = 193\,707\,721 \times 761\,838\,257\,287\) — Cole, 1903</td></tr>
      <tr><td style="color:#a78bfa">g)</td><td>129-jegyű RSA-129 — feltörés: 1994, 600 gép, 8 hónap. Üzenet: <em>„THE MAGIC WORDS ARE SQUEAMISH OSSIFRAGE"</em></td></tr>
    </tbody>
  </table>
</div>`;

const t4 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">3.3 § — lnko és lkkt</span>
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Definíció</th></tr></thead>
  <tbody>
    <tr><td style="color:#c4b5fd">\(\operatorname{lnko}(a,b)\)</td><td><strong>legnagyobb közös osztó</strong>; angolul \(\gcd(a,b)\).</td></tr>
    <tr><td style="color:#c4b5fd">\(\operatorname{lkkt}(a,b)\)</td><td><strong>legkisebb közös többszörös</strong>; angolul \(\operatorname{lcm}(a,b)\).</td></tr>
  </tbody>
</table>
<div class="thm-box">
  <strong>3.30 Tétel — Prímfelbontás-képlet.</strong>
  Ha \(a = \prod p_i^{\alpha_i}\) és \(b = \prod p_i^{\beta_i}\), akkor:
  \[\operatorname{lnko}(a,b) = \prod p_i^{\min(\alpha_i, \beta_i)}, \qquad \operatorname{lkkt}(a,b) = \prod p_i^{\max(\alpha_i, \beta_i)}\]
</div>
<div class="warn-box">
  <strong>Vigyázat — 3.32 Megj.</strong> Ezek a képletek <em>csak elméleti</em> jelentőségűek!
  Gyakorlatban az lnko-t Euklidesz algoritmusával számítjuk ki <em>prímfelbontás nélkül</em>.
</div>
<div class="def-box">
  <strong>3.33 Definíció — \(\Delta\) és \(\nabla\) jelölés.</strong>
  \[a \,\Delta\, b := \operatorname{lnko}(a,b), \qquad a \,\nabla\, b := \operatorname{lkkt}(a,b)\]
</div>
<div class="thm-box">
  <strong>3.38 Tétel — Boole-algebra-struktúra.</strong>
  Legyen \(n\) négyzetmentes, \(D_n :=\) osztóinak halmaza. Ekkor
  \((D_n, \operatorname{lnko}, \operatorname{lkkt}, \tfrac{n}{x}, n, 1)\) <strong>Boole-algebrát</strong> alkot.
</div>
<div class="def-box">
  <strong>3.40 — Relatív prím.</strong> \(a\) és \(b\) <strong>relatív prímek</strong>, ha \(\operatorname{lnko}(a,b) = 1\).
  <br/>
  <strong>3.47 Tétel (Dirichlet 1849).</strong> Két véletlen természetes szám \(\frac{6}{\pi^2} \approx 60{,}8\%\) eséllyel relatív prím.
</div>`;

const t5 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">3.4 § — A prímszámok eloszlása</span>
</div>
<div class="thm-box">
  <strong>3.48 Tétel (Euklidesz, Kr.e. ~300).</strong> A prímszámok száma <strong>végtelen</strong>.
  <br/><em>Bizonyítás.</em> Ha \(p_1,\dots,p_k\) az „összes" prím, akkor \(N := p_1 p_2 \cdots p_k + 1\)
  egyik \(p_i\)-vel sem osztható. Ellentmondás. \(\square\)
</div>
<div class="thm-box">
  <strong>3.51 Tétel — Nagy Prímszámtétel.</strong>
  \[\pi(n) \;\sim\; \frac{n}{\log n}\]
  ahol \(\pi(x)\) az \(x\)-nél kisebb pozitív prímek száma.
  <br/>A sejtés Gauss (1777–1855) 15 éves korából, bizonyítás: Hadamard és de la Vallée Poussin (1896).
</div>
<div class="thm-box">
  <strong>3.52 Tétel — Csebisev (Bertrand-posztulátum).</strong> Tetszőleges \(n > 1\) egészre \(n\) és \(2n\) között <strong>mindig van prím</strong>.
</div>
<div class="def-box">
  <strong>3.53–3.54 Aszimptotikák.</strong>
  Az \(n\)-edik prím: \(p_n \sim n \cdot \log n.\)
  A reciprokok összege: \(\sum_{p \leq x} \tfrac{1}{p} = \log(\log x) + o(1).\)
</div>`;

const t6 = String.raw`
<div class="thm-box">
  <strong>3.5.1 — Pitagorasz és FLT.</strong>
  <br/>Az \(x^2 + y^2 = z^2\) egyenlet pozitív egész megoldásai pl.: \((3,4,5)\), \((5,12,13)\), \((8,15,17)\).
  Teljes parametrizáció: \(x = k(p^2-q^2), y = 2kpq, z = k(p^2+q^2)\) ahol \(p>q\), \(\operatorname{lnko}(p,q)=1\).
</div>
<div class="def-box" style="font-style:italic">
  „Az \(x^n + y^n = z^n\) egyenletnek \(n \geq 3\) esetén <strong>nincsen</strong> pozitív egész gyöke.
  Erre egy csodálatos bizonyítást találtam, de a lap széle túl keskeny ahhoz, hogy azt befogadja."
  <br/>— Pierre de Fermat, 1637 &nbsp;(bizonyítva: Andrew Wiles, 1995)
</div>
<div class="thm-box">
  <strong>3.58 Tétel — Fermat karácsonyi tétele.</strong>
  Minden \(4m+1\) alakú prímszám előáll <em>két négyzetszám összegeként</em>.
  Pl. \(5=1^2+2^2\), \(13=2^2+3^2\), \(17=1^2+4^2\).
  <br/><em>Bolyai János</em> kétsoros bizonyítása a Gauss-egészek gyűrűjében. (Kiss Elemér feltárása, 2000 körül.)
</div>
<div class="thm-box">
  <strong>3.59 Tétel — Dirichlet 1837.</strong>
  Ha egy számtani sorozat első tagja és különbsége relatív prímek, akkor <strong>végtelen sok prím</strong> van benne.
</div>
<div class="thm-box">
  <strong>3.61 Tétel — Green–Tao, 2004.</strong>
  Létezik tetszőleges véges hosszúságú, csak prímekből álló számtani sorozat.
  Tao 2006-ban Fields-érmet kapott részben ezért.
</div>
<div class="def-box">
  <strong>3.62 — Ikerprímek:</strong> \(p, q \in \mathbb{P}\) ikerprímek, ha \(q = p + 2\).
  <br/><strong>3.63 Sejtés (nyitott):</strong> végtelen sok ikerprím-pár létezik.
  <br/>Yitang Zhang 2013: végtelen sok pár \(q-p &lt; 70\,000\,000\) réssel. Ma: határ \(\leq 246\).
</div>`;

const TABS: Tab[] = [
  { id: 'intro', label: 'Áttekintés', content: <RichTex html={t1} /> },
  { id: 'oszt', label: '3.1 Oszthatóság', content: <RichTex html={t2} /> },
  { id: 'algprob', label: '3.2 Alg. problémák', content: <RichTex html={t3} /> },
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
