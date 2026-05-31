import{j as t,L as d,r as g}from"./index-HlE1l3Wn.js";import{T as c,R as l}from"./kit-CB9mzCA_.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";const r=[{label:"a)",num:String.raw`\(n_a = 440\,747\)`,digits:6,isPrime:!1,status:"613 × 719"},{label:"b)",num:String.raw`\(n_b = 2\,347\,589\)`,digits:7,isPrime:!1,status:"1 483 × 1 583"},{label:"c)",num:String.raw`\(n_c = 97\,189\,241\)`,digits:8,isPrime:!1,status:"7 151 × 13 591"},{label:"d)",num:String.raw`\(n_d = 17\,967\,876\,255\,379\)`,digits:14,isPrime:!1,status:"81 371 × 220 814 249"},{label:"e)",num:String.raw`\(n_e = 444\,113\,096\,135\,661\,846\,937\)`,digits:21,isPrime:!1,status:"3 719 977 867 × 119 385 951 211"},{label:"f)",num:String.raw`\(n_f = 2^{67} - 1 = 147\,573\,952\,589\,676\,412\,927\)`,digits:21,isPrime:!1,status:"193 707 721 × 761 838 257 287 (Cole 1903)"},{label:"g)",num:String.raw`\(n_g\) — 129-jegyű`,digits:129,isPrime:!1,status:"RSA-129: p·q (feltörve 1994)"}];function y(){const[a,o]=g.useState(new Array(r.length).fill(!1)),i=e=>o(s=>s.map((n,m)=>m===e?!n:n));return t.jsxs("div",{className:"info-box",style:{overflowX:"auto"},children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"1.1. Példa — Faktorizációs kihívás"}),t.jsx("p",{style:{fontSize:".85rem",margin:".4rem 0"},children:"Kattints egy sorra a prím/összetett státusz felfedéséhez. (A tényleges felbontást csak a 3.25 megoldás adja.)"}),t.jsxs("table",{className:"cayley",style:{width:"100%",fontSize:".83rem"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{textAlign:"left",width:"2.5rem"}}),t.jsx("th",{style:{textAlign:"left"},children:"Szám"}),t.jsx("th",{style:{textAlign:"center",width:"5rem"},children:"Jegyek"}),t.jsx("th",{style:{textAlign:"right",width:"12rem"},children:"Státusz"})]})}),t.jsx("tbody",{children:r.map((e,s)=>t.jsxs("tr",{style:{cursor:"pointer",background:a[s]?"rgba(167,139,250,.08)":void 0},onClick:()=>i(s),children:[t.jsx("td",{style:{color:"#a78bfa",fontFamily:"monospace",fontWeight:700},children:e.label}),t.jsx("td",{children:t.jsx(l,{html:e.num})}),t.jsx("td",{style:{textAlign:"center",color:"#c4b5fd",fontFamily:"monospace"},children:e.digits}),t.jsx("td",{style:{textAlign:"right",fontSize:".78rem"},children:a[s]?t.jsx("span",{style:{color:e.isPrime?"#34d399":"#fbbf24",fontWeight:700},children:e.isPrime?"prím ✓":e.status}):t.jsx("span",{style:{color:"#64748b",fontStyle:"italic"},children:"kattints ▾"})})]},s))})]}),t.jsxs("div",{className:"def-box",style:{marginTop:".75rem",fontSize:".82rem"},children:[t.jsx("strong",{children:"A 129-jegyű n_g:"}),t.jsxs("div",{style:{fontFamily:"monospace",fontSize:".78rem",lineHeight:1.7,marginTop:".3rem",wordBreak:"break-all",color:"#c4b5fd"},children:["11438162 5757888867 6692357799 7614661201 0218296721",t.jsx("br",{}),"2423625625 6184293570 6935245733 8978305971 2356395870",t.jsx("br",{}),"50589890751 4759929002 6879543541"]})]})]})}const f=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">A számelmélet algoritmikus szemszögből</span>
  <p style="font-size:1rem;font-style:italic;color:#e6edf3;margin:.5rem 0">
    „Minden egész szám (lényegében) egyértelműen bontható fel prímszámok szorzatára"
  </p>
  <p style="font-size:.86rem;">— tanultuk általános iskolában, és fel is bontottunk néhány 3–4-jegyű számot.</p>
</div>
<div class="thm-box">
  <strong>A könyv tézise:</strong> az iskolában tanult műveletek nem skálázódnak. Egy 8–10 jegyű szám
  már próbára teszi a kézi módszert; a modern titkosírás <strong>500–1000 jegyű</strong> prímeket használ.
  A különbség nem fokozat, hanem <em>nagyságrend</em>: napok vs. évmilliók.
</div>
<div class="thm-box">
  <strong>Tanulság:</strong> gyors algoritmus nem létezik beható elméleti vizsgálatok nélkül. A 2., 4–7.
  fejezetek azt az elméleti minimumot adják (maradékosztályok, kongruenciák, Euklidesz, CRT, Euler-φ),
  amely nélkül a gyakorlati módszerek nem érthetők.
</div>`,b=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">A titkosírás kettős természete</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    A titkosírások elvégezhetősége azon alapszik, hogy aránylag könnyen
    <strong>találunk</strong> nagyméretű (500–1000 jegyű) prímszámokat (ld. <strong>8. „Prímkeresés"</strong>),
    és aránylag könnyedén <strong>tudunk számolni</strong> velük (ld. <strong>5. „Kongruenciák"</strong>),
    míg titkosságát az biztosítja, hogy (jelenlegi ismereteink szerint) <em>ugyanekkora, de ismeretlen</em>
    számokat csak <strong>évezredekig tartó</strong> algoritmusokkal tudnánk prímtényezőkre bontani.
  </p>
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.75rem 0">
  <thead>
    <tr><th style="text-align:left">Művelet</th><th style="text-align:left">Idő (n-jegyű számra)</th><th style="text-align:left">Fejezet</th></tr>
  </thead>
  <tbody>
    <tr><td>Prímgenerálás</td><td>\(O(n^4)\) — másodpercek</td><td>8., 9.</td></tr>
    <tr><td>Hatványozás \(\bmod\, m\)</td><td>\(O(n^3)\) — ezredmásodperc</td><td>5., 6.6</td></tr>
    <tr><td>Prímtesztelés (Miller–Rabin)</td><td>\(O(n^3)\) — másodperc</td><td>7.4</td></tr>
    <tr><td>Faktorizáció (legjobb ismert)</td><td>\(\exp(n^{1/3})\) — <strong>évek vagy évszázadok</strong></td><td>7.</td></tr>
  </tbody>
</table>`,h=String.raw`
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">A könyvhöz mellékelt öt program</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Nem díszes megjelenítés volt a cél, hanem a könyvben leírt algoritmusok <strong>lépésenkénti</strong>
    bemutatása.
  </p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.6rem;margin-top:.6rem">
    <div class="def-box"><strong style="color:#a78bfa;font-family:monospace">Prim1d.exe</strong><p style="font-size:.78rem;margin:.3rem 0">Prímtesztelés és faktorizáció. Próbaosztás, Fermat-teszt, Miller–Rabin, Pollard \(\rho\) — lépésenként.</p></div>
    <div class="def-box"><strong style="color:#a78bfa;font-family:monospace">EuklDio2D.exe</strong><p style="font-size:.78rem;margin:.3rem 0">Euklidesz-algoritmus és \(ax+by=c\) Diophantoszi egyenletek megoldása Bézout-együtthatókkal.</p></div>
    <div class="def-box"><strong style="color:#a78bfa;font-family:monospace">HatvModDD.exe</strong><p style="font-size:.78rem;margin:.3rem 0">Nagy kitevőjű hatványozás \(\bmod\, m\) — bináris gyorshatványozás.</p></div>
    <div class="def-box"><strong style="color:#a78bfa;font-family:monospace">Kinai3D.exe</strong><p style="font-size:.78rem;margin:.3rem 0">Kínai Maradéktétel kis modulusokra — szimultán kongruencia-rendszer megoldása.</p></div>
    <div class="def-box"><strong style="color:#a78bfa;font-family:monospace">Poliosz5.exe</strong><p style="font-size:.78rem;margin:.3rem 0">Magasabbfokú kongruenciák megoldása mod \(p\) — polinom-faktorizáció véges testen.</p></div>
  </div>
  <div class="warn-box" style="margin-top:.75rem">
    ⚠ A programok kizárólag magáncélra használhatók, bárminemű üzleti alkalmazásuk szigorúan tilos!
  </div>
</div>`,k=String.raw`
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">1.1 § — A könyvben használt jelölések</span>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Számhalmazok</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th></tr></thead>
    <tbody>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathbb{N}\)</td><td>természetes számok: \(\mathbb{N} := \{0, 1, 2, \dots\}\) (0 is benne van!)</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathbb{Z}\)</td><td>egész számok halmaza</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathbb{P}\)</td><td>prímszámok halmaza</td></tr>
    </tbody>
  </table>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Halmaz-jelölések</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th><th style="text-align:left">Példa</th></tr></thead>
    <tbody>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\#\{\dots\}\) vagy \(|\{\dots\}|\)</td><td>halmaz <strong>számossága</strong></td><td>\(\#\{2,3,5,7\} = 4\)</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathfrak{p}(n)\)</td><td>\(n\) prímosztóinak <strong>multihalmaza</strong></td><td>\(\mathfrak{p}(12) = \{2, 2, 3\}\)</td></tr>
    </tbody>
  </table>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Egészrész-függvények</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th></tr></thead>
    <tbody>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\operatorname{int}(x) = \lfloor x \rfloor\)</td><td><strong>alsó egészrész</strong> — nemnegatív \(x\)-re: lefelé csonkítás</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\lceil x \rceil\)</td><td><strong>felső egészrész</strong> — nemnegatív \(x\)-re: felfelé kerekítés</td></tr>
    </tbody>
  </table>

  <div class="thm-box" style="margin-top:.6rem">
    <strong>Tulajdonság.</strong> Minden \(x \in \mathbb{R}\) valós számra:
    \[\lfloor x \rfloor,\ \lceil x \rceil \in \mathbb{Z}, \qquad \lfloor x \rfloor \leq x \leq \lceil x \rceil\]
    és egyenlőség csak \(x \in \mathbb{Z}\) egész számoknál van.
  </div>

  <div class="def-box" style="margin-top:.6rem">
    A \(\square\) szimbólum egy-egy gondolat / Definíció / Megjegyzés / Állítás / Tétel / Bizonyítás végét jelöli.
  </div>
</div>`,z=[{id:"intro",label:"Áttekintés",content:t.jsx(l,{html:f})},{id:"kihivas",label:"1.1 Kihívás",content:t.jsx(y,{})},{id:"titkosiras",label:"Titkosírás",content:t.jsx(l,{html:b})},{id:"programok",label:"Programok",content:t.jsx(l,{html:h})},{id:"jelolesek",label:"1.1 Jelölések",content:t.jsx(l,{html:k})}];function j(){return t.jsxs("div",{className:"ila",children:[t.jsx(d,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 1. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Bevezetés"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(c,{tabs:z})]})}export{j as default};
