import{j as t,L as d,r as m}from"./index-CAqBiqM_.js";import{T as c,R as e}from"./kit-C3piugpg.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";const i=[{label:"a",expr:String.raw`\(a = 2^7 \cdot 3^{43} \cdot 11^{93} \cdot 39^{45} \cdot 101^2\)`,log10:"≈ 195,0794",digits:"196"},{label:"b₁₂",expr:String.raw`\(b_{1,2} = 697\,053\,813 \cdot 2^{16352} \pm 1\)`,log10:"≈ 4931,286",digits:"4 932",note:"ikerprímek, [JA]"},{label:"c₁₂",expr:String.raw`\(c_{1,2} = 242\,206\,083 \cdot 2^{38880} \pm 1\)`,log10:"≈ 11 712,430",digits:"11 713",note:"ikerprímek, [JA]"},{label:"d₁₂",expr:String.raw`\(d_{1,2} = 16\,869\,987\,339\,975 \cdot 2^{171960} \pm 1\)`,log10:"≈ 51 778,345",digits:"51 779",note:"2005-ös rekord, Járai Antal et al."},{label:"M",expr:String.raw`\(M_{43\,112\,609} = 2^{43\,112\,609} - 1\)`,log10:"≈ 12 978 188,5",digits:"12 978 189",note:"12 millió jegy!"},{label:"Mö",expr:String.raw`\(M_\circ = 2^p - 1\), \(p = 2\,375\,063\,906\,985 \cdot 2^{19380}\)`,log10:"log₁₀(log₁₀(Mö)) ≈ 6,54×10⁵⁸⁴⁵",digits:"≈ 10⁵⁸⁴⁵",note:"összetett Mersenne, [JA]"}];function y(){const[n,o]=m.useState(new Array(i.length).fill(!1)),a=s=>o(l=>l.map((r,g)=>g===s?!r:r));return t.jsxs("div",{children:[t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"2.12 Példa — Hány jegyűek ezek a számok?"}),t.jsxs("p",{style:{fontSize:".83rem",margin:".4rem 0"},children:["Számoljuk ki, hány decimális számjegyből állnak (jegyszám = ",t.jsx(e,{html:String.raw`\(\lfloor \log_{10}(n) \rfloor + 1\)`,style:{display:"inline"}}),"). Kattints egy sorra a megoldás felfedéséhez."]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cayley",style:{width:"100%",fontSize:".82rem"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{textAlign:"left",width:"3.5rem"},children:"Jel"}),t.jsx("th",{style:{textAlign:"left"},children:"Kifejezés"}),t.jsx("th",{style:{textAlign:"right",width:"10rem"},children:"Jegyek"})]})}),t.jsx("tbody",{children:i.map((s,l)=>t.jsxs("tr",{style:{cursor:"pointer",background:n[l]?"rgba(167,139,250,.08)":void 0},onClick:()=>a(l),children:[t.jsx("td",{style:{color:"#a78bfa",fontFamily:"monospace",fontWeight:700},children:s.label}),t.jsxs("td",{children:[t.jsx(e,{html:s.expr}),s.note&&t.jsxs("span",{style:{color:"#64748b",fontSize:".76rem",marginLeft:".4rem"},children:["(",s.note,")"]})]}),t.jsx("td",{style:{textAlign:"right",fontSize:".78rem"},children:n[l]?t.jsx("span",{style:{color:"#fbbf24",fontWeight:700},children:s.digits}):t.jsx("span",{style:{color:"#64748b",fontStyle:"italic"},children:"kattints ▾"})})]},l))})]})})]}),t.jsxs("div",{className:"info-box",style:{marginTop:".6rem"},children:[t.jsx("span",{className:"lbl",style:{color:"#c4b5fd"},children:"2.13 Megoldás — A jegyszámok"}),t.jsxs("table",{className:"cayley",style:{width:"100%",fontSize:".83rem"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{textAlign:"left"},children:"Szám"}),t.jsx("th",{style:{textAlign:"left"},children:"log₁₀ közelítés"}),t.jsx("th",{style:{textAlign:"left"},children:"Jegyek"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#c4b5fd"},children:"a"}),t.jsx("td",{children:"≈ 195,0794"}),t.jsx("td",{children:t.jsx("strong",{style:{color:"#c4b5fd"},children:"196"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#c4b5fd"},children:"b₁₂"}),t.jsx("td",{children:"≈ 4931,286"}),t.jsx("td",{children:t.jsx("strong",{style:{color:"#c4b5fd"},children:"4 932"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#c4b5fd"},children:"c₁₂"}),t.jsx("td",{children:"≈ 11 712,430"}),t.jsx("td",{children:t.jsx("strong",{style:{color:"#c4b5fd"},children:"11 713"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#c4b5fd"},children:"d₁₂"}),t.jsx("td",{children:"≈ 51 778,345"}),t.jsx("td",{children:t.jsx("strong",{style:{color:"#c4b5fd"},children:"51 779"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#c4b5fd"},children:"M₄₃₁₁₂₆₀₉"}),t.jsx("td",{children:"≈ 12 978 188,5"}),t.jsxs("td",{children:[t.jsx("strong",{style:{color:"#fbbf24"},children:"12 978 189"})," ",t.jsx("span",{style:{color:"#64748b",fontSize:".78rem"},children:"(12 millió jegy!)"})]})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#c4b5fd"},children:"Mö"}),t.jsx("td",{children:t.jsx(e,{html:String.raw`\(\log_{10}\log_{10}(M_\circ) \approx 6{,}54 \times 10^{5845}\)`})}),t.jsx("td",{children:t.jsx("strong",{style:{color:"#ef4444"},children:"≈ 10⁵⁸⁴⁵"})})]})]})]})]}),t.jsxs("div",{className:"warn-box",style:{marginTop:".6rem"},children:[t.jsx("strong",{children:"M꜀ — a kozmikus polcprobléma."})," M꜀ kiszámításához ",t.jsx(e,{html:String.raw`\(\log_{10}(M_\circ)\)`,style:{display:"inline"}}),"-t kellene kiírnunk — a Windows számológép sem birkózik meg vele, ezért"," ",t.jsx(e,{html:String.raw`\(\log_{10}(\log_{10}(M_\circ))\)`,style:{display:"inline"}}),"-t számoljuk:"," ",t.jsx(e,{html:String.raw`\(\approx 6{,}54 \times 10^{5845}\)`,style:{display:"inline"}}),". M꜀-nek tehát kb. ",t.jsx(e,{html:String.raw`\(10^{5845}\)`,style:{display:"inline"}})," számjegye van — csak ahhoz kell ",t.jsx("strong",{children:"5845 számjegy"}),', hogy leírjuk: „M꜀-nek ennyi számjegye van"! 4 pt biblia-papíron a számjegyek szorosan egymáshoz téve'," ",t.jsx(e,{html:String.raw`\(\approx 8{,}2 \times 10^{5816}\)`,style:{display:"inline"}})," ",t.jsx("em",{children:"fényévnyi polcra"})," férnének el. Szerencsére ebben a könyvben ekkora számokkal nem foglalkozunk."]})]})}const b=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">2.1 § — Mit nevezünk algoritmusnak?</span>
  <p style="font-size:.87rem;margin:.5rem 0">
    Az algoritmus fogalmát precízen is lehet definiálni (lásd [SzI2]), nekünk azonban elég a következő
    intuitív magyarázat:
  </p>
  <div class="thm-box">
    „A probléma megadása után a számítógép <strong>véges idő</strong> után megáll, és
    <strong>helyes</strong> (pontos) eredményt ad", és természetesen
    „ugyanazon inputtal megismételt minden futás ugyanazt az eredményt adja" —
    az ilyen algoritmusokat <strong>determinisztikus</strong> algoritmusoknak hívják.
  </div>
  <p style="font-size:.87rem;margin:.5rem 0">Háromféle algoritmust különböztetünk meg:</p>
  <ul style="font-size:.87rem;line-height:1.75;margin:.4rem 0 0">
    <li><strong>Determinisztikus</strong> — minden futás után megáll, helyes eredményt ad, ismételhető.</li>
    <li><strong>Valószínűségi</strong> — minden futás után megáll, de néha csak „99% eséllyel az eredmény \(X\)" típusú választ kapunk; a válasz valószínűsége becsülhető.</li>
    <li><strong>Nemdeterminisztikus</strong> — ugyanarra az inputra nem mindig áll meg, nem mindig ad helyes választ. <em>Könyvünkben nem foglalkozunk velük.</em></li>
  </ul>
</div>
<div class="info-box">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .6rem">A „véges idő" pontosabban</h5>
  <p style="font-size:.87rem;line-height:1.75;margin:0 0 .6rem">
    A „véges idő" elég tág fogalom: \(10^{100}\) lépés is véges
    (1000 GHz = \(10^{12}\) lépés/másodperc sebességgel ez „csak" \(3\times 10^{80}\) év…),
    márpedig a titkosírásoknál látni fogunk olyan problémákat, amelyekre <strong>ennél is gyorsabb</strong>
    algoritmust 2010-ben még senki sem ismert.
  </p>
  <div class="thm-box">
    <strong>Bonyolultság.</strong> Az algoritmusok futásának gyorsaságát, időigényét az algoritmus
    (pontosabban az általa megoldott probléma) <strong>bonyolultságának</strong> nevezzük.
  </div>
  <p style="font-size:.87rem;line-height:1.75;margin:.5rem 0 0">
    Pontos számításra nincs szükségünk — ha hónapokig fut, pár óra már nem érdekes. A program egyéb
    műveleteket is végez (I/O), és különböző sebességű gépeken különböző mértékben gyorsul. Ezért
    csak az idő <strong>nagyságrendjére</strong>, <em>aszimptotikus viselkedésére</em>
    (\(n \to \infty\)) vagyunk kíváncsiak.
  </p>
</div>`,k=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">2.1 Definíció — Aszimptotikus jelölések</span>
  <p style="font-size:.87rem;margin:.5rem 0">
    Legyenek \(f, g: \mathbb{N} \to \mathbb{R}^+\) tetszőleges pozitív értékű függvények.
    A [CLR] jelölésrendszerét használjuk; a \(c_1, c_2\) konstansok elnyelik a kerekítési hibákat
    és a gépek sebességkülönbségeit.
  </p>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Név</th><th style="text-align:left">Feltétel (\(n > n_0\))</th><th style="text-align:left">Határérték</th></tr></thead>
    <tbody>
      <tr><td style="color:#c4b5fd">\(f = O(g)\)</td><td><strong>nagy ordó</strong> g</td><td>\(\exists\, c_2 > 0:\ f(n) &lt; c_2 \cdot g(n)\)</td><td>\(\limsup f/g &lt; \infty\)</td></tr>
      <tr><td style="color:#c4b5fd">\(f = \Theta(g)\)</td><td><strong>tétha</strong> g</td><td>\(\exists\, c_1, c_2 > 0:\ c_1 g(n) &lt; f(n) &lt; c_2 g(n)\)</td><td>\(0 &lt; \liminf,\limsup &lt; \infty\)</td></tr>
      <tr><td style="color:#c4b5fd">\(f = \Omega(g)\)</td><td><strong>omega</strong> g</td><td>\(\exists\, c_1 > 0:\ c_1 g(n) &lt; f(n)\)</td><td>\(\liminf f/g > 0\)</td></tr>
      <tr><td style="color:#c4b5fd">\(f = o(g)\)</td><td><strong>kis ordó</strong> g</td><td>\(\forall\, c_2 > 0:\ f(n) &lt; c_2 g(n)\)</td><td>\(\lim_{n\to\infty} f(n)/g(n) = 0\)</td></tr>
      <tr><td style="color:#c4b5fd">\(f = \omega(g)\)</td><td><strong>kis omega</strong> g</td><td>\(\forall\, c_1 > 0:\ c_1 g(n) \leq f(n)\)</td><td>\(\lim_{n\to\infty} f(n)/g(n) = \infty\)</td></tr>
    </tbody>
  </table>
  <div class="thm-box" style="margin-top:.6rem">
    Lényegében az \(O\) és \(\Theta\) jelölések a <em>„körülbelül"</em> szó matematikai szinonimái.
    A jelöléseknek csak akkor van értelme, ha \(f\) bonyolult és \(g\) egyszerű.
  </div>
</div>
<div class="def-box">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .6rem">2.3 Megjegyzés — A logaritmus alapja lényegtelen</h5>
  <p style="font-size:.87rem;margin:0 0 .5rem">Bármely \(a, b \in \mathbb{R}^+\) esetén:</p>
  \[\log_b(x) = c \cdot \log_a(x), \qquad c = \frac{1}{\log_a(b)} \text{ — rögzített konstans.}\]
  <p style="font-size:.87rem;margin:.4rem 0 0">
    Az \(O\) és \(\Theta\) szempontjából tehát a logaritmus alapja <strong>lényegtelen</strong> —
    a konstans szorzót a \(c_1, c_2\) elnyelik.
  </p>
</div>`,f=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">2.2 Definíció — Növekedési osztályok</span>
  <p style="font-size:.87rem;margin:.4rem 0">
    \(f = \Theta(g)\) vagy \(f = O(g)\) esetén az \(f, g\) függvényeket az alábbi elnevezésekkel illetjük (növekvő sorrendben):
  </p>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">\(g(n)\)</th><th style="text-align:left">Név</th><th style="text-align:right">\(n=100\) értéke</th></tr></thead>
    <tbody>
      <tr><td style="color:#c4b5fd">\(c\)</td><td><strong>konstans</strong> (inputtól független)</td><td style="text-align:right">\(1\)</td></tr>
      <tr><td style="color:#c4b5fd">\(\log_a(n)\)</td><td><strong>logaritmikus</strong> (alap \(&gt;1\))</td><td style="text-align:right">\(\approx 6{,}6\)</td></tr>
      <tr><td style="color:#c4b5fd">\(n\)</td><td><strong>lineáris</strong> (elsőfokú)</td><td style="text-align:right">\(100\)</td></tr>
      <tr><td style="color:#c4b5fd">\(n \log_a(n)\)</td><td><strong>szemilineáris</strong></td><td style="text-align:right">\(\approx 664\)</td></tr>
      <tr><td style="color:#c4b5fd">\(n^2\)</td><td><strong>négyzetes</strong> (kvadratikus)</td><td style="text-align:right">\(10{,}000\)</td></tr>
      <tr><td style="color:#c4b5fd">\(n^k\) &nbsp;(\(k&gt;1\))</td><td><strong>polinomiális</strong></td><td style="text-align:right">\(10^{2k}\)</td></tr>
      <tr><td style="color:#c4b5fd">\(a^n\) &nbsp;(\(a&gt;1\))</td><td><strong>exponenciális</strong></td><td style="text-align:right">\(2^{100} \approx 1{,}3 \times 10^{30}\)</td></tr>
      <tr><td style="color:#c4b5fd">\(n^n\)</td><td><strong>hiperexponenciális</strong></td><td style="text-align:right">\(10^{200}\)</td></tr>
    </tbody>
  </table>
  <div class="ex-box" style="margin-top:.6rem">
    <strong>Vizuális intuíció.</strong> A hiperexponenciális görbék <strong>\(n &lt; 7\)</strong> értékek
    után <em>már a papírra sem férnek el</em>, még logaritmikus függőleges összenyomás után sem.
    Lineáris és parabola lefelé görbülnek, az exponenciális kiegyenesedik.
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">2.4 Tétel — A növekedési hierarchia</span>
  <p style="font-size:.87rem;margin:.4rem 0">\(a, b, k \in \mathbb{R}^+\), \(1 &lt; b\) esetén:</p>
  \[\log_a(n) \;\prec\; n^k \;\prec\; b^n \;\prec\; n^n\]
  \[\lim_{n\to\infty} \frac{\log_a n}{n^k} = 0, \quad
    \lim_{n\to\infty} \frac{n^k}{b^n} = 0, \quad
    \lim_{n\to\infty} \frac{b^n}{n^n} = 0.\]

  <h5 style="color:#a78bfa;font-weight:700;margin:.8rem 0 .4rem">2.5 Definíció — \(\prec\) és \(\sim\)</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th></tr></thead>
    <tbody>
      <tr><td style="color:#c4b5fd">\(f \prec g\)</td><td>\(g\) <em>végtelenszer</em> nagyobb mint \(f\): &nbsp;\(\lim_{n\to\infty} g(n)/f(n) = \infty\)</td></tr>
      <tr><td style="color:#c4b5fd">\(f \sim g\)</td><td>\(f\) és \(g\) <strong>aszimptotikusan egyenlő</strong>: &nbsp;\(\lim_{n\to\infty} f(n)/g(n) = 1\)</td></tr>
    </tbody>
  </table>
  <p style="color:#94a3b8;font-size:.8rem;margin-top:.4rem;">
    <em>Vigyázat:</em> a \(\sim\) jelölést ne tévesszük össze a gyűrűknél használt „asszociált elemek" jelöléssel
    (lásd Függelék).
  </p>
</div>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">2.6 Tétel — Stirling-formula</span>
  <p style="font-size:.87rem;margin:.4rem 0">Elég nagy \(n \in \mathbb{N}\) esetén:</p>
  \[n! \;\sim\; \left(\frac{n}{e}\right)^n \cdot \sqrt{2\pi n}\]
  <p style="font-size:.87rem;margin:.4rem 0">kicsit pontosabban:</p>
  \[\left(\frac{n}{e}\right)^n \sqrt{2\pi n}\, e^{\frac{1}{12n} - \frac{1}{360 n^3}}
    \;\leq\; n! \;\leq\;
    \left(\frac{n}{e}\right)^n \sqrt{2\pi n}\, e^{\frac{1}{12n}}.\]
  <p style="font-size:.87rem;margin:.4rem 0">Más alakja:</p>
  \[\log(n!) \;\sim\; n \log n - n.\]
  <div class="thm-box" style="margin-top:.5rem">
    James Stirling (1692–1770) skót matematikus. A formula a faktoriális gyors aszimptotikája —
    a kombinatorika és valószínűségszámítás kulcseszköze.
  </div>
</div>
<div class="info-box" style="margin-top:.6rem">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .55rem">Tanulság — Mit tekintünk „gyors"-nak?</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Osztály</th><th style="text-align:left">Ítélet</th></tr></thead>
    <tbody>
      <tr><td style="color:#c4b5fd">\(O(n)\), \(O(n \log n)\)</td><td style="color:#34d399;font-weight:700">jó</td></tr>
      <tr><td style="color:#c4b5fd">\(O(n^2)\)</td><td style="color:#34d399;font-weight:700">még jónak tartjuk</td></tr>
      <tr><td style="color:#c4b5fd">\(O(n^k)\) polinomiális</td><td style="color:#fbbf24;font-weight:700">elfogadható, „gyors"</td></tr>
      <tr><td style="color:#c4b5fd">\(O(2^n)\) exponenciális</td><td style="color:#ef4444;font-weight:700">kibírhatatlanul lassú</td></tr>
      <tr><td style="color:#c4b5fd">\(O(n^n)\) hiperexponenciális</td><td style="color:#94a3b8;font-style:italic">…-nak tartjuk</td></tr>
    </tbody>
  </table>
  <p style="font-size:.87rem;margin:.65rem 0 0">
    Elméletileg például a \(54\,312 \cdot n^2\) négyzetes idejű algoritmust <strong>jobbnak</strong> tartjuk
    a \(10^{-3} \cdot 2^n\) exponenciális idejűnél, noha <em>kis</em> \(n\) értékekre az utóbbi a gyorsabb.
    Nagy \(n\)-re viszont már nem.
  </p>
</div>
<div class="def-box" style="margin-top:.6rem">
  <span class="lbl" style="color:#fbbf24">2.7 Tétel (Cejtin) — Alsó becslés létezése</span>
  <p style="font-size:.87rem;margin:.4rem 0">
    Tetszőleges \(f: \mathbb{N} \to \mathbb{N}\) <em>rekurzív</em> (képlettel kiszámítható) függvényhez
    létezik olyan probléma, amelyet megoldó <strong>minden</strong> algoritmus \(n\) adat esetén legalább
    \(\Omega(f(n))\) ideig fut.
  </p>
  <p style="color:#94a3b8;font-size:.82rem;font-style:italic;margin:.3rem 0 0">
    Bizonyítás-ötlet: ha a végeredmény kijelzéséhez is legalább ennyi karaktert kell leírnunk…
  </p>
</div>
<div class="def-box" style="margin-top:.6rem">
  <span class="lbl" style="color:#fbbf24">2.8 Definíció (naiv) — NP-teljes</span>
  <div class="thm-box">
    Egy problémát <strong>NP-teljesnek</strong> (Nondeterministic Polynomial Complete) nevezünk, ha:
    <br/><br/>
    <em>„Ha erre a problémára lenne gyors algoritmus, akkor a világ <strong>összes</strong>
    problémájára is lenne (azonnal!) gyors algoritmus."</em>
  </div>
  <p style="font-size:.87rem;margin:.5rem 0 0">
    Bármilyen hihetetlen: már a múlt század 70-es éveiben közismert „hétköznapi" problémák
    tucatjairól bizonyították be, hogy NP-teljes. A faktorizáció <em>nem</em> bizonyítottan NP-teljes,
    de senki sem ismer rá polinomidejű algoritmust — erre épül az RSA biztonsága.
  </p>
</div>`,h=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">2.2.1 — Az input mérete</span>
  <div class="thm-box">
    <strong>2.9 Megjegyzés.</strong> Amennyiben az input egy \(n \in \mathbb{N}\) természetes szám, akkor
    az input mérete = az \(n\) <strong>számjegyeinek</strong> száma, <em>nem \(n\) értéke maga!</em>
  </div>
  <p style="font-size:.87rem;margin:.5rem 0">Az input méretét \(\operatorname{in}(n)\)-nel jelöljük (\(n > 0\)):</p>
  \[\operatorname{in}(n) := \lfloor \log(n) \rfloor + 1\]
  <p style="font-size:.87rem;margin:.4rem 0">A számrendszer alapja lényegtelen — csak konstans szorzóban tér el.</p>
</div>
<div class="info-box">
  <h5 style="color:#fbbf24;font-weight:700;margin:0 0 .6rem">2.10 Példa — Miért exponenciális a próbaosztás?</h5>
  <p style="font-size:.87rem;margin:0 0 .5rem">
    Ha egy \(k=100\) jegyű \(n\) számot adunk a gépnek, mi csak <strong>100 karaktert</strong> (\(k\) jegy)
    írtunk be — de \(n\) <em>értéke</em> \(\approx 10^{100}\).
  </p>
  <p style="font-size:.87rem;margin:0 0 .5rem">
    Ha a páratlan számokkal próbáljuk faktorizálni \(\sqrt{n}\)-ig, a végrehajtott \(O(\sqrt n)\) lépés
    <em>az input mérete függvényében</em>:
  </p>
  \[O(\sqrt{n}) = O\!\left(\sqrt{10^k}\right) = O(10^{k/2}) \quad \text{— exponenciális!}\]
  <div class="warn-box">
    Az iskolában „polinomiálisnak" tűnő próbaosztás valójában <strong>exponenciális</strong>
    az input mérete (a jegyek száma) szerint. Itt válik el a számelmélet az analízistől.
  </div>
</div>
<div class="def-box">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .55rem">2.11 Definíció — \(\langle n \rangle\) bináris jegyszám</h5>
  <p style="font-size:.87rem;margin:0 0 .4rem">Legyen \(n \in \mathbb{N}\). Ekkor:</p>
  \[\langle n \rangle := \lfloor \log_2(n) \rfloor + 1\]
  <p style="font-size:.87rem;margin:.4rem 0 0">
    az \(n\) szám bináris számjegyeinek (bitek) száma. A \(k_b\) és \(k_d\) jelölést a bináris ill. decimális
    jegyek számára használjuk; ekkor \(n\) értéke \(\approx 2^{k_b} = 10^{k_d}\) —
    <em>exponenciálisan nagy</em> az input méretéhez képest.
  </p>
</div>`,p=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">2.2.2 § — Az alapműveletek bonyolultsága</span>
  <p style="font-size:.87rem;margin:.4rem 0">
    A modern titkosírásokban többszázjegyű számokkal kell <em>exponenciálisan sok</em> (!) műveletet
    végeznünk — érdemes elgondolkodni az alapműveletek gyorsabb elvégzésén. Legyen
    \(k = \operatorname{in}(n) = \lfloor \log_2 n \rfloor + 1\) az input méret.
  </p>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Művelet</th><th style="text-align:left">Iskolai (papír-ceruza)</th><th style="text-align:left">Legjobb ismert</th></tr></thead>
    <tbody>
      <tr><td style="color:#c4b5fd">\(m + n\), \(\;m - n\)</td><td>\(O(k)\) — <strong>lineáris</strong></td><td>\(O(k)\) (gyorsabb elvileg sem létezik)</td></tr>
      <tr><td style="color:#c4b5fd">\(m \cdot n\)</td><td>\(O(k^2)\) — <strong>négyzetes</strong></td><td>\(O(k \log k \log\log k)\) (Schönhage–Strassen, FFT)</td></tr>
      <tr><td style="color:#c4b5fd">\(m \div n\)</td><td>\(O(k^2)\)</td><td>\(O(k \log k \log\log k)\)</td></tr>
      <tr><td style="color:#c4b5fd">\(u^k\)</td><td>\(O(k \cdot \text{súly})\) &nbsp;ismételt négyzetreemelés</td><td>kimenet \(\sim n\) bit, így \(\Omega(n)\) a kiírás</td></tr>
      <tr><td style="color:#c4b5fd">\(u^k \bmod m\)</td><td colspan="2">\(O(k \cdot (\log m)^2)\) — <strong>szemilineáris</strong> (lásd 6.6.)</td></tr>
      <tr><td style="color:#c4b5fd">\(n!\)</td><td>\(O(n^2 \log^2 n)\)</td><td>nincs lényegesen jobb ismert algoritmus</td></tr>
      <tr><td style="color:#c4b5fd">\(\lfloor\sqrt{n}\rfloor\)</td><td>félhosszú dividir (Newton-iteráció)</td><td>\(O(k^2)\) praktikus</td></tr>
      <tr><td style="color:#c4b5fd">bináris → decimális</td><td>\(O(k^2)\) [KN]</td><td>\(O(k \log k \log\log k)\)</td></tr>
    </tbody>
  </table>
</div>
<div class="def-box" style="margin-top:.6rem">
  <span class="lbl" style="color:#fbbf24">Karacuba 1962 — az első szubkvadratikus szorzás</span>
  <p style="font-size:.87rem;margin:.4rem 0">
    Anatolij <strong>Karacuba</strong> szovjet matematikus 1962-ben felfedezte, hogy két \(k\)-jegyű
    szám szorzásához \(k^2\) helyett elegendő:
  </p>
  \[27 \cdot k^{\log_2 3} \approx 27 \cdot k^{1{,}585}\]
  <p style="font-size:.87rem;margin:.4rem 0">
    lépés. <strong>Lényege:</strong> két szám \(A = a_1 \cdot 10^{k/2} + a_0\) és \(B = b_1 \cdot 10^{k/2} + b_0\)
    szorzata három (nem négy) kisebb szorzásra redukálódik:
  </p>
  <ol style="font-size:.87rem;line-height:1.75;margin:.4rem 0 .6rem">
    <li>\(P_1 = a_1 b_1\)</li>
    <li>\(P_2 = a_0 b_0\)</li>
    <li>\(P_3 = (a_1 + a_0)(b_1 + b_0) - P_1 - P_2 = a_1 b_0 + a_0 b_1\)</li>
  </ol>
  \[AB = P_1 \cdot 10^k + P_3 \cdot 10^{k/2} + P_2\]
  <div class="thm-box" style="margin-top:.5rem">
    Az algoritmus lényegében „2 hatványaival szoroz" — a bináris-vessző tologatásának felel meg.
    Az ötletet messzemenően általánosította <strong>Schönhage és Strassen</strong> svájci matematikusok
    a véges Fourier-transzformáltak segítségével: \(O(k \log k \log\log k)\) — a mai napig majdnem
    a legjobb ismert.
  </div>
</div>
<div class="def-box" style="margin-top:.6rem">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .55rem">Newton-iteráció reciprokra</h5>
  <p style="font-size:.87rem;margin:0 0 .5rem">
    \(1/u\) kiszámításához az \(f(x) = u - \frac{1}{x}\) függvény zérushelyét keressük iterációval.
    Legyen \(x_0 := 1\) és \(n \in \mathbb{N}\) esetén:
  </p>
  \[x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} = x_n - \frac{u - 1/x_n}{1/x_n^2} = 2 x_n - u \cdot x_n^2.\]
  <p style="font-size:.87rem;margin:.4rem 0 0">
    Az iteráció kvadratikusan konvergál: \(\ell\) jegyre \(O(\ell \log \ell \log\log \ell)\) művelet elég.
  </p>
</div>
<div class="info-box" style="margin-top:.6rem">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .55rem">Olvasásra ajánljuk</h5>
  <p style="font-size:.87rem;line-height:1.75;margin:0">
    Az algoritmusok elméletéről rövid bevezető: [SzI2] utolsó 40 oldala. Olvasmányos mély bevezető:
    <strong>Lovász László és Gács Péter — [LG]</strong>. Részletes további irodalom: [CLR], [IA], [LL2],
    [RF], [RISz], és a műfaj klasszikusa <strong>Donald Knuth — TAOCP</strong> [KD], 2. kötet,
    4.3.3. és 4.4. alfejezet.
  </p>
</div>`,z=[{id:"intro",label:"Áttekintés",content:t.jsx(e,{html:b})},{id:"bigo",label:"O, Θ, Ω, o, ω",content:t.jsx(e,{html:k})},{id:"scale",label:"Növekedési skála",content:t.jsx(e,{html:f})},{id:"meret",label:"2.2.1 Input mérete",content:t.jsxs("div",{children:[t.jsx(e,{html:h}),t.jsx(y,{})]})},{id:"muvelet",label:"2.2.2 Műveletek",content:t.jsx(e,{html:p})}];function _(){return t.jsxs("div",{className:"ila",children:[t.jsx(d,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 2. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Algoritmusok sebessége"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(c,{tabs:z})]})}export{_ as default};
