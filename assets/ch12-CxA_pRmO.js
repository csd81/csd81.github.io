import{j as t,L as l}from"./index-Cd-_-Ba2.js";import{T as a,R as e}from"./kit-CoMAMuWy.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";const s=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">12. fejezet — Számítógépes megvalósítások</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    A XXI. században a számítógépeken és az interneten <strong>rengeteg segédeszköz</strong> áll
    rendelkezésünkre. A fejezet pragmatikus áttekintést ad arról, <em>mit, mivel, milyen sebességgel</em>
    tudunk megcsinálni.
  </p>
</div>
<div class="info-box">
  <strong>Elméleti olvasnivalók:</strong>
  <ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li><strong>[MGy]</strong> Maróti György jegyzetek, Pannon Egyetem</li>
    <li><strong>[JA]</strong> Járai Antal — rekord-prím-keresés</li>
    <li><strong>[TV]</strong> Tivolt Viktor TDK 2005 — párhuzamos faktorizáció</li>
    <li><a href="https://www.wolframalpha.com" style="color:#a78bfa">wolframalpha.com</a></li>
  </ul>
</div>`,r=String.raw`
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">A könyvhöz mellékelt öt program</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Magyar nyelvű, oktatási célú, <strong>lépésenkénti</strong> bemutatás.
    <em>Csak magáncélra.</em>
  </p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.6rem;margin-top:.6rem">
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">Prim1d.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0">Prímtesztelés és faktorizáció. Próbaosztás, Fermat-teszt, Miller–Rabin, Pollard \(\rho\) — lépésenként.</p>
    </div>
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">EuklDio2D.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0">Euklideszi algoritmus + kibővített. Lineáris Diophantoszi egyenlet Bézout-együtthatókkal.</p>
    </div>
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">HatvModDD.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0">Nagy kitevőjű hatványozás \(\bmod\, m\). Binárás négyzetreemelés. Korlát: \(m &lt; 2^{30}.\)</p>
    </div>
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">Kinai3D.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0">CRT megoldó — 2–6 kongruenciás rendszer, páronkénti rel.prím előfeltétellel.</p>
    </div>
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">Poliosz5.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0">Polinomok kongruencia-osztása \(\bmod\, p\). Magasabbfokú kongruenciák gyökeinek keresése.</p>
    </div>
  </div>
  <div class="warn-box" style="margin-top:.75rem">
    ⚠ A programok kizárólag magáncélra használhatók, bárminemű üzleti alkalmazásuk szigorúan tilos!
  </div>
</div>`,o=String.raw`
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">Profi matematikai programok</span>
  <table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
    <thead><tr><th style="text-align:left">Program</th><th style="text-align:left">Készítő</th><th style="text-align:left">Megjegyzés</th></tr></thead>
    <tbody>
      <tr><td><strong>Maple</strong></td><td>Maplesoft</td><td>\(20\)-jegyű faktorizáció &lt; 10 mp, <code>ifactor()</code></td></tr>
      <tr><td><strong>Mathematica</strong></td><td>Wolfram Research</td><td><code>FactorInteger[]</code></td></tr>
      <tr><td><strong>SageMath</strong></td><td>nyílt forrású</td><td>ingyenes; PARI/GP, Pollard \(\rho\), ECM, GNFS</td></tr>
      <tr><td><strong>PARI/GP</strong></td><td>Henri Cohen</td><td>gyors számelméleti C-könyvtár</td></tr>
    </tbody>
  </table>
  <div class="thm-box">
    <strong>Megfigyelés (Szalkai):</strong> a profi programok módszereikről „vajmi keveset árulnak el" —
    fekete-doboz használat. Tanulási célokra a könyv saját programjai jobbak.
  </div>
</div>
<div class="info-box" style="margin-top:.5rem">
  <span class="lbl" style="color:#a78bfa">Online eszközök</span>
  <ul style="font-size:.85rem;line-height:1.9;margin:.4rem 0">
    <li><a href="https://www.wolframalpha.com" style="color:#a78bfa">wolframalpha.com</a> — 129-jegyű számokat is felbont</li>
    <li><a href="https://primes.utm.edu/lists/small/millions/" style="color:#a78bfa">primes.utm.edu</a> — első néhány millió prím listája</li>
    <li><a href="https://www.mersenne.org" style="color:#a78bfa">mersenne.org</a> (GIMPS) — Mersenne-prím elosztott keresés</li>
  </ul>
</div>`,i=String.raw`
<div class="ex-box">
  <strong>Szalkai István házifeladat (Pannon Egyetem, ~2005):</strong>
  8–20 jegyű számok faktorizációja 3 hónap alatt, bármilyen segédeszközzel.
  <table class="cayley" style="font-size:.83rem;margin:.4rem 0;width:100%">
    <thead><tr><th style="text-align:left">Eszköz</th><th style="text-align:left">Input méret</th><th style="text-align:left">Idő</th></tr></thead>
    <tbody>
      <tr><td>Saját C/Pascal program</td><td>8 jegy</td><td>\(\sim\) 1 perc</td></tr>
      <tr><td>Maple V <code>ifactor()</code></td><td>20 jegy</td><td>&lt; 10 másodperc</td></tr>
      <tr><td>WolframAlpha (online)</td><td>129 jegyű RSA-129</td><td>perceken belül (2005+)</td></tr>
    </tbody>
  </table>
</div>
<div class="thm-box">
  Megdöbbentő történeti ív: 1977-ben az RSA-129 feltörése „40 quadrillió év" jóslat volt;
  1994-ben 600 önkéntes 8 hónap alatt feltörte; 2005-re egy webform néhány perc alatt elvégzi.
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Méret</th><th style="text-align:left">Idő (modern GPU)</th><th style="text-align:left">Módszer</th></tr></thead>
  <tbody>
    <tr><td>&lt; 60 jegy</td><td style="color:#34d399">perc</td><td>Pollard ρ, ECM</td></tr>
    <tr><td>60–100 jegy</td><td style="color:#fbbf24">óra-nap</td><td>kvadratikus szita (QS)</td></tr>
    <tr><td>100–200 jegy</td><td style="color:#f59e0b">hét-hónap</td><td>GNFS, párhuzamos cluster</td></tr>
    <tr><td>&gt; 250 jegy</td><td style="color:#ef4444">&gt; év</td><td>jelenlegi határ</td></tr>
    <tr><td>RSA-2048 (617 jegy)</td><td style="color:#ef4444">\(\sim\) 100+ év</td><td>iparági szabvány — kvantumig biztonságos</td></tr>
  </tbody>
</table>`,n=[{id:"intro",label:"Áttekintés",content:t.jsx(e,{html:s})},{id:"bundled",label:"A 5 mellékelt program",content:t.jsx(e,{html:r})},{id:"tools",label:"Külső eszközök",content:t.jsx(e,{html:o})},{id:"perf",label:"Teljesítmény-mérések",content:t.jsx(e,{html:i})}];function y(){return t.jsxs("div",{className:"ila",children:[t.jsx(l,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 12. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Számítógépes megvalósítások"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(a,{tabs:n})]})}export{y as default};
