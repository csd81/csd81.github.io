import{j as e,L as g,r as d}from"./index-CAqBiqM_.js";import{T as z,R as s}from"./kit-C3piugpg.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";const r=[{label:"a)",num:String.raw`\(n_a = 440\,747\)`,digits:6,isPrime:!1,status:"613 × 719"},{label:"b)",num:String.raw`\(n_b = 2\,347\,589\)`,digits:7,isPrime:!1,status:"1 483 × 1 583"},{label:"c)",num:String.raw`\(n_c = 97\,189\,241\)`,digits:8,isPrime:!1,status:"7 151 × 13 591"},{label:"d)",num:String.raw`\(n_d = 17\,967\,876\,255\,379\)`,digits:14,isPrime:!1,status:"81 371 × 220 814 249"},{label:"e)",num:String.raw`\(n_e = 444\,113\,096\,135\,661\,846\,937\)`,digits:21,isPrime:!1,status:"3 719 977 867 × 119 385 951 211"},{label:"f)",num:String.raw`\(n_f = 2^{67} - 1 = 147\,573\,952\,589\,676\,412\,927\)`,digits:21,isPrime:!1,status:"193 707 721 × 761 838 257 287 (Cole 1903)"},{label:"g)",num:String.raw`\(n_g\) — 129-jegyű (lásd alább)`,digits:129,isPrime:!1,status:"RSA-129: feltörve 1994, 600 gép, 8 hónap"}];function k(){const[a,o]=d.useState(new Array(r.length).fill(!1)),i=t=>o(l=>l.map((n,m)=>m===t?!n:n));return e.jsxs("div",{children:[e.jsxs("div",{className:"def-box",children:[e.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"1.1. Példa — Faktorizációs kihívás"}),e.jsxs("p",{style:{fontSize:".86rem",margin:".4rem 0"},children:["Faktorizáljuk (bontsuk szorzótényezőkre) az alábbi számokat, vagy győződjünk meg róla, hogy prímszámok. ",e.jsx("strong",{children:"Kattints egy sorra"})," a státusz felfedéséhez."]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"cayley",style:{width:"100%",fontSize:".83rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",width:"2.5rem"}}),e.jsx("th",{style:{textAlign:"left"},children:"Szám"}),e.jsx("th",{style:{textAlign:"center",width:"5rem"},children:"Jegyek"}),e.jsx("th",{style:{textAlign:"right",width:"14rem"},children:"Státusz"})]})}),e.jsx("tbody",{children:r.map((t,l)=>e.jsxs("tr",{style:{cursor:"pointer",background:a[l]?"rgba(167,139,250,.08)":void 0},onClick:()=>i(l),children:[e.jsx("td",{style:{color:"#a78bfa",fontFamily:"monospace",fontWeight:700},children:t.label}),e.jsx("td",{children:e.jsx(s,{html:t.num})}),e.jsx("td",{style:{textAlign:"center",color:"#c4b5fd",fontFamily:"monospace"},children:t.digits}),e.jsx("td",{style:{textAlign:"right",fontSize:".78rem"},children:a[l]?e.jsx("span",{style:{color:t.isPrime?"#34d399":"#fbbf24",fontWeight:700},children:t.isPrime?"prím ✓":t.status}):e.jsx("span",{style:{color:"#64748b",fontStyle:"italic"},children:"kattints ▾"})})]},l))})]})})]}),e.jsxs("div",{className:"info-box",style:{marginTop:".75rem"},children:[e.jsx("span",{className:"lbl",style:{color:"#c4b5fd"},children:"A 129-jegyű n_g"}),e.jsxs("div",{style:{fontFamily:"monospace",fontSize:".82rem",lineHeight:1.7,wordBreak:"break-all",color:"#c4b5fd",background:"#0e1014",border:"1px solid #1e2533",borderRadius:"6px",padding:".7rem .9rem"},children:["11438162 5757888867 6692357799 7614661201",e.jsx("br",{}),"0218296721 2423625625 6184293570 6935245733",e.jsx("br",{}),"8978305971 2356395870 50589890751 4759929002",e.jsx("br",{}),"6879543541"]})]}),e.jsxs("div",{className:"ex-box",style:{marginTop:".75rem"},children:[e.jsx("strong",{children:"Kedves Olvasónk"}),", próbálja meg a fenti számokat faktorizálni:",e.jsx("em",{children:"kézzel"})," (mint a XIX. században), ",e.jsx("em",{children:"egyszerű számológéppel"}),", saját kis programmal, vagy a könyvhöz mellékelt ",e.jsx("code",{children:"Prim1d.exe"})," programmal — de egyelőre ",e.jsx("strong",{children:"ne"}),"használjon internetet! (A megfejtést se nézze meg a 3.25. Megoldásban.)"]}),e.jsxs("div",{className:"thm-box",children:[e.jsx("strong",{children:"Megjegyzés."}),' A „kattints" mező csak azt árulja el, hogy a szám prím-e vagy összetett — a ',e.jsx("em",{children:"tényleges felbontást"})," nem. Az ",e.jsx(s,{html:String.raw`\(n_f = 2^{67}-1\)`,style:{display:"inline"}})," famous Mersenne-szám: Mersenne 1644-ben tévedésből prímnek vélte; Cole 1903-ban a New York-i Matematikai Társaság előadásán szótlanul felírta a táblára a"," ",e.jsx(s,{html:String.raw`\(193\,707\,721 \times 761\,838\,257\,287\)`,style:{display:"inline"}})," szorzást."]})]})}const b=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">A számelmélet algoritmikus szemszögből</span>
  <p style="font-size:1.02rem;font-style:italic;color:#e6edf3;margin:.5rem 0">
    „Minden egész szám (lényegében) egyértelműen bontható fel prímszámok szorzatára"
  </p>
  <p style="font-size:.86rem;">— tanultuk általános iskolában, és fel is bontottunk néhány 3–4-jegyű számot.</p>
</div>
<div class="def-box">
  <strong>A könyv tézise:</strong> az iskolában tanult műveletek nem skálázódnak. Egy
  8–10 jegyű szám már próbára teszi a kézi módszert; a modern titkosírás <strong>500–1000 jegyű</strong>
  prímeket használ. A különbség nem fokozat, hanem <em>nagyságrend</em>: napok vs. évmilliók.
</div>
<div class="info-box">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .65rem">Miért nehéz a nagy számok faktorizációja?</h5>
  <p style="font-size:.87rem;margin:0 0 .6rem">
    A bajok már a 8–10 jegyű számokkal elkezdődnek, pedig modern alkalmazásokban
    többszáz vagy akár ezer jegyű egész- és prímszámokkal kellene számolnunk. A könyv lényegét a
    <strong>3.2. „A számelmélet algoritmikus problémái"</strong> alfejezet fejti ki részletesen:
    a tényleges számítások mennyi időt is igényelnek, hogyan csökkenthetők
    <em>több évmillió (!)</em> helyett pár napra.
  </p>
  <p style="font-size:.87rem;margin:0 0 .4rem">Ez vonatkozik egyrészt</p>
  <ul style="font-size:.87rem;line-height:1.75;margin:.2rem 0 .6rem">
    <li>a számelméletben felmerülő számítási problémák — prímtesztelés, faktorizáció, lnko, lkkt — kiszámításának nehézségeire és azok megoldási módszereire,</li>
    <li>másrészt a számelmélet felhasználásaira a modern számítástechnikában (számítások gyorsítása, titkosírások, kódelmélet).</li>
  </ul>
</div>
<div class="thm-box">
  <strong>Tanulság:</strong> gyors algoritmus nem létezik beható elméleti vizsgálatok nélkül. A 2., 4–7.
  fejezetek azt az elméleti minimumot adják (maradékosztályok, kongruenciák, Euklidesz, CRT, Euler-φ),
  amely nélkül a gyakorlati módszerek nem érthetők.
</div>`,y=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">A titkosírás kettős természete</span>
  <p style="font-size:.87rem;margin:.5rem 0">
    A titkosírások elvégezhetősége azon alapszik, hogy aránylag könnyen
  </p>
  <ul style="font-size:.87rem;line-height:1.75;margin:.4rem 0 .6rem">
    <li><strong>találunk</strong> nagyméretű (500–1000 jegyű) prímszámokat (ld. <strong>8. „Prímkeresés"</strong> fejezet),</li>
    <li><strong>tudunk számolni</strong> velük (ld. <strong>5. „Kongruenciák és maradékosztályok"</strong> fejezet),</li>
  </ul>
  <p style="font-size:.87rem;margin:0">
    míg titkosságát az biztosítja, hogy (jelenlegi ismereteink szerint) <em>ugyanekkora, de
    ismeretlen</em> számokat csak <strong>évezredekig tartó</strong> algoritmusokkal tudnánk
    prímtényezőkre bontani (ld. <strong>7. „Prímtesztelés és számok felbontása"</strong> fejezet).
  </p>
</div>
<div class="def-box">
  <strong>Konvenció.</strong> Egy egész számot akkor nevezünk <em>„ismeretlen"-nek</em>, ha nem ismerjük
  prímtényezős felbontását.
</div>
<div class="info-box">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .65rem">Aszimmetria, amelyre az RSA épül</h5>
  <table class="cayley" style="width:100%;font-size:.83rem;margin:.25rem 0">
    <thead>
      <tr><th style="text-align:left">Művelet</th><th style="text-align:left">Idő (\(n\)-jegyű számra)</th><th style="text-align:left">Fejezet</th></tr>
    </thead>
    <tbody>
      <tr><td style="color:#c4b5fd">Prímgenerálás</td><td>\(O(n^4)\) — másodpercek</td><td>8., 9.</td></tr>
      <tr><td style="color:#c4b5fd">Hatványozás \(\bmod\, m\)</td><td>\(O(n^3)\) — ezredmásodperc</td><td>5., 6.6</td></tr>
      <tr><td style="color:#c4b5fd">Prímtesztelés (Miller–Rabin)</td><td>\(O(n^3)\) — másodperc</td><td>7.4</td></tr>
      <tr><td style="color:#c4b5fd">Faktorizáció (legjobb ismert)</td><td>\(\exp(n^{1/3})\) — <strong>évek vagy évszázadok</strong></td><td>7.</td></tr>
    </tbody>
  </table>
  <p style="font-size:.86rem;margin:.7rem 0 0">
    Könyvünk bevezető jellegű — csak néhány egyszerűbb szemléltető algoritmust mutat,
    és inkább részletesebb művekre hivatkozik. A téma legátfogóbb ismertetése
    ma is <strong>Donald Knuth</strong> [KD] művében (TAOCP vol.&nbsp;2) található.
  </p>
</div>`,c=String.raw`
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">A könyvhöz mellékelt öt program</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    Nem díszes megjelenítés volt a cél, hanem a könyvben leírt algoritmusok
    <strong>lépésenkénti</strong> bemutatása. Az output-szöveg szerkeszthető; egyszerűsége miatt
    az adatok beírása nem „szerkesztősorban" történik — legyünk körültekintőek.
  </p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.65rem;margin-top:.75rem">
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">Prim1d.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0 0">Prímtesztelés és faktorizáció. Próbaosztás, Fermat-teszt, Miller–Rabin, Pollard \(\rho\) — lépésenként.</p>
    </div>
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">EuklDio2D.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0 0">Euklidesz-algoritmus és \(ax+by=c\) Diophantoszi egyenletek megoldása Bézout-együtthatókkal.</p>
    </div>
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">HatvModDD.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0 0">Nagy kitevőjű hatványozás \(\bmod\, m\) — bináris (négyzetreemeléses) gyorshatványozás.</p>
    </div>
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">Kinai3D.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0 0">Kínai Maradéktétel kis modulusokra — szimultán kongruencia-rendszer megoldása.</p>
    </div>
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">Poliosz5.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0 0">Magasabbfokú kongruenciák megoldása mod \(p\) — polinom-faktorizáció véges testen.</p>
    </div>
  </div>
  <div class="warn-box" style="margin-top:1rem">
    ⚠ <strong>A programok kizárólag magáncélra használhatók, bárminemű üzleti alkalmazásuk szigorúan tilos!</strong>
  </div>
  <div class="thm-box" style="margin-top:.5rem">
    Jól használhatók „számológép"-ként kisebb feladatok (pl. RSA) megoldásához és tanulmányozásához.
    A részletes leírás a <strong>11. „Számítógépes megvalósítások"</strong> fejezetben olvasható.
  </div>
</div>
<div class="info-box">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .6rem">Köszönet</h5>
  <p style="font-size:.87rem;line-height:1.75;margin:0 0 .6rem">
    A szerzők köszönetüket fejezik ki kedves tanáraiknak:
    <strong>Szalay Mihálynak</strong>, <strong>Freud Róbertnak</strong> és
    <strong>Csirmaz Lászlónak</strong>; külön köszönet a Lektor (Dr.&nbsp;Hujter Mihály, BME)
    lelkiismeretes munkájának.
  </p>
  <p style="font-size:.87rem;line-height:1.75;margin:0">
    A könyv újszerű jelölésekkel — pl. \(\mathfrak{p}(n)\), \(\Delta\) és \(\nabla\) jelek
    (lásd 3.9. és 3.33. Definíciók), atomelmélet és Boole-algebrák — igyekszik az anyag mélyebb
    megértését elősegíteni. A <em>Függelékben</em> az oszthatóság fogalmát Euklideszi gyűrűkre
    terjesztjük ki — ezek a vizsgálatok többek között a <strong>Fermat-sejtés</strong>
    megoldásában játszottak kulcsszerepet.
  </p>
</div>`,h=String.raw`
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">1.1 § — A könyvben használt jelölések</span>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Számhalmazok</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th></tr></thead>
    <tbody>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathbb{N}\)</td><td>természetes számok halmaza: \(\mathbb{N} := \{0, 1, 2, \dots\}\) &nbsp;<span style="color:#64748b;">(megj.: a 0 is benne van!)</span></td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathbb{Z}\)</td><td>egész számok halmaza</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathbb{P}\)</td><td>prímszámok halmaza</td></tr>
    </tbody>
  </table>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Halmaz-jelölések</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th><th style="text-align:left">Példa</th></tr></thead>
    <tbody>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\#\{\dots\}\) &nbsp; \(|\{\dots\}|\)</td><td>halmaz <strong>számossága</strong></td><td>\(\#\{2,3,5,7\} = 4\)</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathfrak{p}(n)\)</td><td>\(n\) prímosztóinak <strong>multihalmaza</strong> &nbsp;(\(n \in \mathbb{N}\))</td><td>\(\mathfrak{p}(12) = \{2, 2, 3\}\)</td></tr>
    </tbody>
  </table>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Egészrész-függvények</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th></tr></thead>
    <tbody>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\operatorname{int}(x) = [x] = \lfloor x \rfloor\)</td><td><strong>alsó egészrész</strong> — az \(x\)-nél nem nagyobb egész számok közül a legnagyobb. Nemnegatív \(x\)-re: „lefelé csonkítás".</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\lceil x \rceil\)</td><td><strong>felső egészrész</strong> — az \(x\)-nél nem kisebb egész számok közül a legkisebb. Nemnegatív \(x\)-re: „felfelé kerekítés".</td></tr>
    </tbody>
  </table>

  <div class="thm-box" style="margin-top:.6rem">
    <strong>Tulajdonság.</strong> Minden \(x \in \mathbb{R}\) valós számra:
    \[\lfloor x \rfloor,\ \lceil x \rceil \in \mathbb{Z}, \qquad \lfloor x \rfloor \leq x \leq \lceil x \rceil\]
    és egyenlőség csak \(x \in \mathbb{Z}\) egész számoknál van.
  </div>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Sorozat-jelölések</h5>
  <p style="font-size:.87rem;line-height:1.75;margin:0 0 .5rem">
    Tudjuk, hogy egy (véges vagy végtelen) sorozat semmi esetre sem részhalmaz, de
    kényelmesek az \((a_n) \subset \mathbb{N}\), \((a_n) \subset \mathbb{R}\), illetve
    \((m_1, m_2, \dots, m_k) \subset \mathbb{R}\) jelölések.
  </p>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Tizedesvessző</h5>
  <p style="font-size:.87rem;line-height:1.75;margin:0 0 .5rem">
    Sok számítógép-program tizedes <em>pontot</em> használ, mi mégis maradunk a
    tizedes/bináris <strong>vesszőnél</strong>, hiszen Magyarországon a tudományos- és közéletben,
    oktatásban és tankönyvekben (és a Windows-rendszerben is) ez az elterjedt.
  </p>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Algebrai fogalmak</h5>
  <p style="font-size:.87rem;line-height:1.75;margin:0 0 .5rem">
    Néhány absztrakt matematikai fogalmat — Boole-algebrák, gyűrűk, testek — a
    <strong>Függelékben (13. fejezet)</strong> vázlatosan ismertetünk.
  </p>

  <div class="def-box" style="margin-top:.5rem">
    A &nbsp;\(\square\)&nbsp; szimbólum egy-egy gondolat / Definíció / Megjegyzés / Állítás /
    Tétel / Bizonyítás végét jelöli.
  </div>
</div>`,f=[{id:"intro",label:"Áttekintés",content:e.jsx(s,{html:b})},{id:"kihivas",label:"1.1 Kihívás",content:e.jsx(k,{})},{id:"titkosiras",label:"Titkosírás",content:e.jsx(s,{html:y})},{id:"programok",label:"Programok",content:e.jsx(s,{html:c})},{id:"jelolesek",label:"1.1 Jelölések",content:e.jsx(s,{html:h})}];function u(){return e.jsxs("div",{className:"ila",children:[e.jsx(g,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),e.jsx("p",{className:"ila__kicker",children:"Számelmélet — 1. fejezet"}),e.jsx("h1",{className:"ila__title",children:"Bevezetés"}),e.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),e.jsx(z,{tabs:f})]})}export{u as default};
