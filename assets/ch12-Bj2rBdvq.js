import{j as t,L as a}from"./index-CAqBiqM_.js";import{T as l,R as e}from"./kit-C3piugpg.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";const s=String.raw`
<h5 style="color:#60a5fa;font-weight:700;margin:0 0 .75rem">12. fejezet — Számítógépes megvalósítások</h5>
<div class="def-box">
  <span class="lbl" style="color:#60a5fa">Áttekintés</span>
  <div class="box-body">
    A XXI. században a számítógépeken és az interneten <strong>rengeteg segédeszköz</strong>
    áll rendelkezésünkre prímtesztelés és faktorizáció témában — naponta bővülő kínálatban.
    A fejezet pragmatikus áttekintést ad arról, <em>mit, mivel, milyen sebességgel</em>
    tudunk megcsinálni.
    <br><br>
    Ez a fejezet a könyv legrövidebb — az 1.1 fejezet 5 programjának (<code>Prim1d.exe</code>,
    stb.) konkrét leírása a könyv mellékelt CD-jén szerepel; itt az általános ökoszisztéma
    leírása található.
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#60a5fa">Elméleti olvasnivalók</span>
  <div class="box-body">
    <ul style="line-height:2">
      <li><strong>[MGy]</strong> Maróti György jegyzetei a Pannon Egyetemen</li>
      <li><strong>[JA]</strong> Járai Antal — rekord-prím-keresés</li>
      <li><strong>[W]</strong> WolframAlpha — online számelméleti számológép</li>
      <li><strong>[TV]</strong> Tivolt Viktor TDK 2005 — párhuzamos faktorizáció</li>
    </ul>
  </div>
</div>`,o=String.raw`
<h5 style="color:#60a5fa;font-weight:700;margin:0 0 .75rem">A könyvhöz mellékelt öt program</h5>
<div class="def-box">
  <div class="box-body">
    Magyar nyelvű, oktatási célú, <strong>lépésenkénti</strong> bemutatás. Egyszerűek (DOS-szerű
    input), de pontosan ahhoz illenek, amit a könyv tárgyal. <em>Csak magáncélra.</em>
  </div>
</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:.6rem;margin-bottom:.75rem">
  <div class="def-box">
    <span class="lbl" style="color:#60a5fa;font-family:monospace">Prim1d.exe</span>
    <div class="box-body">
      Prímtesztelés és faktorizáció: \(\sqrt{n}\)-ig próbaosztás, Fermat-teszt,
      Miller–Rabin, Pollard \(\rho\). Lépésenkénti kimenet.
    </div>
  </div>
  <div class="def-box">
    <span class="lbl" style="color:#60a5fa;font-family:monospace">EuklDio2D.exe</span>
    <div class="box-body">
      Euklideszi algoritmus + kibővített változat. Lineáris Diophantoszi
      \(ax + by = c\) megoldása Bézout-együtthatókkal.
    </div>
  </div>
  <div class="def-box">
    <span class="lbl" style="color:#60a5fa;font-family:monospace">HatvModDD.exe</span>
    <div class="box-body">
      Nagy kitevőjű hatványozás \(\bmod\, m\). Binárás kitevő felbontás +
      ismételt négyzetreemelés. Korlát: \(m &lt; 2^{30}\).
    </div>
  </div>
  <div class="def-box">
    <span class="lbl" style="color:#60a5fa;font-family:monospace">Kinai3D.exe</span>
    <div class="box-body">
      CRT megoldó — 2–6 kongruenciás rendszer. Páronkénti relatív prím
      előfeltétellel.
    </div>
  </div>
  <div class="def-box">
    <span class="lbl" style="color:#60a5fa;font-family:monospace">Poliosz5.exe</span>
    <div class="box-body">
      Polinomok kongruencia-osztása \(\bmod\, p\). Magasabbfokú kongruenciák
      gyökeinek keresése, Euklideszi algoritmus polinomokra.
    </div>
  </div>
</div>
<div class="warn-box">
  <strong>A programok kizárólag magáncélra használhatók</strong>, bárminemű üzleti
  alkalmazás szigorúan tilos!
</div>
<div class="info-box">
  <span class="lbl" style="color:#60a5fa">Mit nem nyújtanak?</span>
  <div class="box-body">
    <ul style="line-height:1.9">
      <li>Modern szabványos formátum: nincs JSON/REST API, nem könyvtár.</li>
      <li>Nagy számok: \(m &lt; 2^{30}\) korlát; valódi RSA-méretekhez (1024+ bit) nem alkalmasak.</li>
      <li>Párhuzamosság: egyszálú DOS-program.</li>
    </ul>
  </div>
</div>`,r=String.raw`
<h5 style="color:#60a5fa;font-weight:700;margin:0 0 .75rem">Külső eszközök</h5>
<div class="info-box">
  <span class="lbl" style="color:#60a5fa">Profi matematikai programok</span>
  <table class="cayley" style="width:100%;margin-top:.4rem">
    <thead><tr>
      <th style="text-align:left">Program</th>
      <th style="text-align:left">Készítő</th>
      <th style="text-align:left">Megjegyzés</th>
    </tr></thead>
    <tbody>
      <tr>
        <td><strong>Derive</strong></td>
        <td>Texas Instruments (megszűnt 2007)</td>
        <td>Pannon Egy. kedvelt taneszköz; CRT beépített függvény</td>
      </tr>
      <tr>
        <td><strong>Maple</strong></td>
        <td>Maplesoft</td>
        <td>20-jegyű faktorizáció &lt; 10 mp <code>ifactor()</code> paranccsal</td>
      </tr>
      <tr>
        <td><strong>Mathematica</strong></td>
        <td>Wolfram Research</td>
        <td><code>FactorInteger[]</code> — szimbolikus is</td>
      </tr>
      <tr>
        <td><strong>SageMath</strong></td>
        <td>nyílt forrású</td>
        <td>ingyenes alternatíva; PARI/GP, Pollard \(\rho\), ECM, GNFS modulok</td>
      </tr>
      <tr>
        <td><strong>PARI/GP</strong></td>
        <td>Henri Cohen</td>
        <td>parancssoros, gyors számelméleti C-könyvtár</td>
      </tr>
    </tbody>
  </table>
  <p style="color:#8892a4;font-style:italic;font-size:.83rem;margin-top:.5rem">
    <strong>Megfigyelés (Szalkai):</strong> a profi programok módszereikről „vajmi keveset árulnak el"
    — fekete-doboz használat. Tanulási célokra a könyv saját programjai jobbak, ipari
    használatra a profi szoftverek.
  </p>
</div>
<div class="info-box">
  <span class="lbl" style="color:#60a5fa">Online eszközök</span>
  <table class="cayley" style="width:100%;margin-top:.4rem">
    <thead><tr>
      <th style="text-align:left">URL</th>
      <th style="text-align:left">Funkció</th>
    </tr></thead>
    <tbody>
      <tr>
        <td><a href="https://www.wolframalpha.com/input?i=factor" style="color:#60a5fa">wolframalpha.com</a></td>
        <td>129-jegyű számokat is felbont — módszer nem nyilvános</td>
      </tr>
      <tr>
        <td><a href="https://primes.utm.edu/lists/small/millions/" style="color:#60a5fa">primes.utm.edu</a></td>
        <td>Az első néhány millió prím listája CSV-ben</td>
      </tr>
      <tr>
        <td><a href="https://www.mersenne.org" style="color:#60a5fa">mersenne.org</a> (GIMPS)</td>
        <td>Mersenne-prím elosztott keresés; több ezer USD jutalom</td>
      </tr>
      <tr>
        <td><span style="color:#64748b">www.rsasecurity.com (megszűnt)</span></td>
        <td>RSA Factoring Challenges (1991–2007) — RSA-576 stb.</td>
      </tr>
    </tbody>
  </table>
</div>`,n=String.raw`
<h5 style="color:#60a5fa;font-weight:700;margin:0 0 .75rem">Teljesítmény-mérések</h5>
<div class="info-box">
  <span class="lbl" style="color:#fbbf24">Konkrét mérések — egyetemi hallgatói feladat</span>
  <div class="box-body">
    <strong>Szalkai István házifeladat</strong> (Pannon Egyetem, kb. 2005): 8–20 jegyű
    számok faktorizációja 3 hónap alatt, bármilyen segédeszközzel.
    <table class="cayley" style="width:100%;margin-top:.4rem">
      <thead><tr>
        <th style="text-align:left">Eszköz</th>
        <th style="text-align:left">Input méret</th>
        <th style="text-align:left">Idő</th>
      </tr></thead>
      <tbody>
        <tr><td>Saját C/Pascal program</td><td>8 jegy</td><td>\(\sim\) 1 perc</td></tr>
        <tr><td>Maple V <code>ifactor()</code></td><td>20 jegy</td><td>&lt; 10 másodperc</td></tr>
        <tr><td>WolframAlpha (online)</td><td>129 jegyű RSA-129</td><td>perceken belül (2005+)</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="thm-box">
  <div class="box-body">
    Megdöbbentő történeti ív: 1977-ben az RSA-129 feltörése „40 quadrillió év" jóslat volt;
    1994-ben 600 önkéntes 8 hónap alatt feltörte; 2005-re egy webform néhány perc alatt elvégzi.
    A „gyakorlatban biztonságos" határ folyamatosan tolódik felfelé.
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#fbbf24">Tivolt Viktor [TV] — Párhuzamos faktorizáció 2005</span>
  <div class="box-body">
    Pannon Egyetem TDK-dolgozat. 2–16 gépre szétosztott faktorizáció tanulmányozása.
    <ul style="line-height:1.9;margin:.4rem 0">
      <li>2–16 kliensre szétosztva a megoldható feladatok mérete <strong>jelentősen javul</strong>.</li>
      <li>Kétszer annyi kliens viszont <strong>nem feltétlenül kétszeres sebesség</strong> — Amdahl-féle törvény.</li>
      <li>Kommunikációs overhead nagy számoknál is megjelenik; a CRT-trükk (7.3) ott jól skálázódik.</li>
    </ul>
    <div class="thm-box" style="margin-top:.5rem">
      A mai modern alternatívák: GPU-kon CUDA, MPI-cluster, vagy felhő-szolgáltatások (AWS Batch).
      A faktorizáció <em>általában nehezen</em> párhuzamosítható — a GNFS-féle szuper-szita
      algoritmus is csak korlátozottan, mert a mátrixfázis közbeeső szinkronpontokon múlik.
    </div>
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#60a5fa">2025-ös helyzetkép</span>
  <table class="cayley" style="width:100%;margin-top:.4rem">
    <thead><tr>
      <th style="text-align:left">Méret</th>
      <th style="text-align:left">Idő (egy modern GPU)</th>
      <th style="text-align:left">Megjegyzés</th>
    </tr></thead>
    <tbody>
      <tr><td>\(&lt; 60\) jegy</td><td>perc</td><td>Pollard \(\rho\), ECM</td></tr>
      <tr><td>\(60{-}100\) jegy</td><td>óra–nap</td><td>kvadratikus szita (QS)</td></tr>
      <tr><td>\(100{-}200\) jegy</td><td>hét–hónap</td><td>GNFS, párhuzamos cluster</td></tr>
      <tr><td>\(&gt; 250\) jegy</td><td>\(&gt;\) év</td><td>jelenlegi határ; RSA-250 = 829 bit 2020-ban</td></tr>
      <tr><td>RSA-2048 (617 jegy)</td><td>jelenleg \(\sim\) 100+ év</td><td>iparági szabvány — kvantumig biztonságos</td></tr>
    </tbody>
  </table>
</div>`,i=[{id:"intro",label:"Áttekintés",content:t.jsx(e,{html:s})},{id:"bundled",label:"A 5 mellékelt program",content:t.jsx(e,{html:o})},{id:"tools",label:"Külső eszközök",content:t.jsx(e,{html:r})},{id:"perf",label:"Teljesítmény-mérések",content:t.jsx(e,{html:n})}];function y(){return t.jsxs("div",{className:"ila",children:[t.jsx(a,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 12. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Számítógépes megvalósítások"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(l,{tabs:i})]})}export{y as default};
