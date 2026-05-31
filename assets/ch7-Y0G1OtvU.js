import{j as t,L as v,r as u}from"./index-CAqBiqM_.js";import{T as b,R as c}from"./kit-C3piugpg.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function x(d,s){for(;s;){const n=s;s=d%s,d=n}return d}function z(d,s){if(s===0)return{g:d,x:1,y:0};const{g:n,x:i,y:a}=z(s,d%s);return{g:n,x:a,y:i-Math.floor(d/s)*a}}function _(d,s){const{x:n}=z((d%s+s)%s,s);return(n%s+s)%s}function f(){const[d,s]=u.useState([{m:7,a:5},{m:12,a:2},{m:25,a:3},{m:11,a:0}]),n=d.every((e,o)=>d.every((r,l)=>o>=l||x(e.m,r.m)===1));let i=0,a=1;const g=[];n&&d.length>0&&(d.forEach(e=>{a*=e.m}),d.forEach((e,o)=>{const r=a/e.m,l=_(r,e.m),m=(e.a*r*l%a+a)%a;i=(i+m)%a,g.push({i:o+1,mi:e.m,Mi:r,yi:l,ai:e.a,contrib:m})}),i=(i%a+a)%a);const k=()=>s(e=>[...e,{m:13,a:1}]),p=e=>s(o=>o.filter((r,l)=>l!==e)),h=(e,o,r)=>s(l=>l.map((m,y)=>y===e?{...m,[o]:r}:m));return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"Interaktív CRT megoldó"}),t.jsx("p",{style:{fontSize:".83rem",margin:".4rem 0"},children:"Adj meg szimultán kongruencia-rendszert páronként relatív prím modulusokkal. Az összes lépés ki van számolva!"}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cayley",style:{width:"100%",fontSize:".83rem"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Sor"}),t.jsx("th",{children:"x ≡ a (mod m)"}),t.jsx("th",{children:"m"}),t.jsx("th",{children:"a"}),t.jsx("th",{})]})}),t.jsx("tbody",{children:d.map((e,o)=>t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#8892a4"},children:o+1}),t.jsxs("td",{style:{fontFamily:"monospace"},children:["x ≡ ",e.a," (mod ",e.m,")"]}),t.jsx("td",{children:t.jsx("input",{type:"number",min:1,className:"ila-num",value:e.m,onChange:r=>h(o,"m",+r.target.value)})}),t.jsx("td",{children:t.jsx("input",{type:"number",className:"ila-num",value:e.a,onChange:r=>h(o,"a",+r.target.value)})}),t.jsx("td",{children:t.jsx("button",{className:"op-btn",onClick:()=>p(o),style:{fontSize:".75rem",padding:".1rem .4rem"},children:"×"})})]},o))})]})}),t.jsx("button",{className:"op-btn",onClick:k,style:{marginTop:".4rem",fontSize:".8rem"},children:"+ Sor hozzáadása"}),n&&d.length>0?t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{fontSize:".82rem",color:"#c4b5fd",margin:".6rem 0 .2rem",fontFamily:"monospace"},children:["M = ",d.map(e=>e.m).join(" · ")," = ",t.jsx("strong",{children:a})]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cayley",style:{fontFamily:"monospace",fontSize:".8rem",width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"i"}),t.jsx("th",{children:"mᵢ"}),t.jsx("th",{children:"M/mᵢ"}),t.jsx("th",{children:"yᵢ (inverz)"}),t.jsx("th",{children:"aᵢ"}),t.jsx("th",{children:"aᵢ·yᵢ·M/mᵢ mod M"})]})}),t.jsx("tbody",{children:g.map(e=>t.jsxs("tr",{children:[t.jsx("td",{children:e.i}),t.jsx("td",{children:e.mi}),t.jsx("td",{children:e.Mi}),t.jsx("td",{style:{color:"#fbbf24"},children:e.yi}),t.jsx("td",{children:e.ai}),t.jsx("td",{style:{color:"#a78bfa"},children:e.contrib})]},e.i))})]})}),t.jsxs("div",{className:"def-box",style:{marginTop:".6rem",fontWeight:700},children:["x ≡ ",t.jsx("span",{style:{color:"#fbbf24",fontSize:"1.1em"},children:i})," (mod ",a,")",t.jsxs("div",{style:{fontSize:".78rem",color:"#8892a4",fontWeight:400,marginTop:".3rem"},children:["Ellenőrzés: ",d.map((e,o)=>{const r=i%e.m,l=(e.a%e.m+e.m)%e.m,m=r===l;return t.jsxs("span",{style:{marginRight:".6rem"},children:[i," mod ",e.m," = ",t.jsx("strong",{style:{color:m?"#34d399":"#ef4444"},children:r}),m?" ✓":" ✗"]},o)})]})]})]}):t.jsx("div",{className:"warn-box",style:{marginTop:".6rem"},children:"⚠ A modulusok nem páronként relatív prímek — a klasszikus CRT nem alkalmazható. Használd a 7.2 Általános fület!"})]})}const j=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">7. fejezet — Kínai Maradéktétel és nagy számok szorzása</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    A fejezetben ismertetett eredményt <strong>1000 évvel ezelőtt</strong> már ismerték kínai
    matematikusok — Sun Tzu „<em>Aritmetikai értekezése</em>" (Sūnzǐ Suànjīng, kb. Kr.u. 3–5. század)
    tartalmazza az első ismert változatát. A modern algoritmikus számelméletben ma is
    <em>alapműveletként</em> használjuk.
  </p>
</div>

<div class="def-box">
  <strong>7.1 Probléma — Szimultán kongruenciarendszer.</strong>
  Adott modulusok \(m_1, \dots, m_r\) és maradékok \(a_1, \dots, a_r\) esetén
  van-e olyan \(x\), hogy
  \[x \equiv a_i \pmod{m_i}, \quad i = 1, \dots, r.\]
  Ezt <strong>szimultán kongruenciarendszernek</strong> nevezzük.
</div>

<p style="color:#94a3b8;font-style:italic;font-size:.87rem;">
  Sun Tzu eredeti problémája: „Adott egy szám, amely 3-mal osztva 2-t, 5-tel 3-at, 7-tel 2-t ad
  maradékul. Mi a szám?" Megoldás: \(23 + 105k\).
</p>

<div class="info-box">
  <strong>Modern alkalmazások:</strong>
  <ul style="font-size:.85rem;line-height:1.9;margin:.4rem 0">
    <li><strong>Párhuzamos aritmetika</strong> — nagy számok szorzása kis modulusokon (7.3)</li>
    <li><strong>RSA dekódolás gyorsítása</strong> — \(\bmod\, p\) és \(\bmod\, q\) külön, majd CRT-vel egyesítjük (4× gyorsulás)</li>
    <li><strong>Lagrange-interpoláció</strong> — polinomokkal a CRT polinom-változata</li>
    <li><strong>Hash-szétosztás</strong> — adatbázisok szétdarabolása</li>
    <li><strong>Diszkrét Fourier-transzformáció</strong> — Schönhage–Strassen szorzás</li>
  </ul>
</div>`,M=String.raw`
<div class="thm-box">
  <span class="lbl lbl--thm">7.3 Tétel — Kínai Maradéktétel (CRT)</span>
  <p style="margin:.5rem 0">
    Ha az \(m_i\) modulusok <strong>páronként relatív prímek</strong>, akkor a
    (7.1) kongruenciarendszernek <em>bármilyen</em> \(a_1, \dots, a_r\) esetén
    <strong>pontosan egy</strong> \(x\) gyöke van \(\pmod M\) ahol
    \[M = \operatorname{lkkt}(m_1, \dots, m_r) = m_1 m_2 \cdots m_r.\]
  </p>
</div>

<div class="def-box">
  <strong>Bizonyítás — egyértelműség</strong><br/>
  Ha \(x_1, x_2\) mind kielégíti a rendszert, akkor \(x_1 \equiv x_2 \pmod{m_i}\) mindegyik \(m_i\)-re.
  A 6.14 tétel szerint \(x_1 \equiv x_2 \pmod M\).
</div>

<div class="def-box">
  <strong>Konstruktív megoldás — képlet</strong><br/>
  Először oldjuk meg minden \(i\)-re:
  \[y_i \cdot \frac{M}{m_i} \equiv 1 \pmod{m_i}\]
  (Mindig megoldható, mert \(\tfrac{M}{m_i}\) és \(m_i\) relatív prímek a páronkénti rel.prímség
  miatt.) Ekkor a megoldás:
  \[\boxed{\;x \equiv \sum_{i=1}^r a_i \cdot y_i \cdot \frac{M}{m_i} \pmod M\;}\]
</div>

<div class="thm-box">
  <strong>7.4 Megjegyzés — Hatékonyság.</strong>
  Az algoritmus <strong>polinomiális</strong> — \(\tfrac{M}{m_i}\)-k és \(y_i\)-k kiszámítása
  Euklideszi algoritmussal. Az \(\tfrac{M}{m_i}\) konstansok és \(y_i\) értékek <em>előre</em>
  kiszámíthatók, így ismétlődő szorzásoknál minimális overhead.
</div>

<div class="info-box">
  <strong>Megjegyzés — Gyűrűizomorfizmus.</strong>
  A CRT valójában azt mondja ki, hogy ha \(\gcd(m_i, m_j) = 1\) minden \(i \neq j\)-re, akkor
  \[\mathbb{Z}_M \cong \mathbb{Z}_{m_1} \times \mathbb{Z}_{m_2} \times \cdots \times \mathbb{Z}_{m_r}\]
  mint gyűrű. Vagyis \(\mathbb{Z}_M\) aritmetikája elvégezhető koordinátánként!
</div>`,q=String.raw`
<div class="ex-box">
  <span class="lbl lbl--ex">7.5 Példa — 4-modulusú rendszer</span>
  <p style="margin:.4rem 0">Oldjuk meg:</p>
  \[\begin{cases}
    x \equiv 5 \pmod 7 \\
    x \equiv 2 \pmod{12} \\
    x \equiv 3 \pmod{25} \\
    x \equiv 0 \pmod{11}
  \end{cases}\]
</div>

<div class="def-box">
  <strong>Lépés 1 — Ellenőrzés és M</strong><br/>
  \(7, 12, 25, 11\) páronként relatív prímek (különböző prímfelbontásokból). Így
  \[M = 7 \cdot 12 \cdot 25 \cdot 11 = \mathbf{23\,100}.\]
</div>

<div class="def-box">
  <strong>Lépés 2 — \(M / m_i\) értékek</strong>
  <table class="cayley" style="width:100%;font-size:.82rem;margin:.4rem 0">
    <thead><tr><th>\(i\)</th><th>\(m_i\)</th><th>\(M / m_i\)</th><th>kongruencia</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>7</td><td>3300</td><td>\(y_1 \cdot 3300 \equiv 1 \pmod 7\)</td></tr>
      <tr><td>2</td><td>12</td><td>1925</td><td>\(y_2 \cdot 1925 \equiv 1 \pmod{12}\)</td></tr>
      <tr><td>3</td><td>25</td><td>924</td><td>\(y_3 \cdot 924 \equiv 1 \pmod{25}\)</td></tr>
      <tr><td>4</td><td>11</td><td>2100</td><td>\(y_4 \cdot 2100 \equiv 1 \pmod{11}\)</td></tr>
    </tbody>
  </table>
</div>

<div class="def-box">
  <strong>Lépés 3 — \(y_i\) inverzek (Euklideszi alg.)</strong>
  <table class="cayley" style="width:100%;font-size:.82rem;margin:.4rem 0">
    <thead><tr><th></th><th>érték</th><th>(pozitívan mod \(m_i\))</th></tr></thead>
    <tbody>
      <tr><td>\(y_1\)</td><td>\(-2\)</td><td>\(\equiv 5 \pmod 7\)</td></tr>
      <tr><td>\(y_2\)</td><td>\(5\)</td><td>\(5 \pmod{12}\)</td></tr>
      <tr><td>\(y_3\)</td><td>\(-1\)</td><td>\(\equiv 24 \pmod{25}\)</td></tr>
      <tr><td>\(y_4\)</td><td>\(-1\)</td><td>\(\equiv 10 \pmod{11}\)</td></tr>
    </tbody>
  </table>
</div>

<div class="def-box">
  <strong>Lépés 4 — Összegzés</strong>
  \[\begin{aligned}
    x &\equiv 5 \cdot 5 \cdot 3300 + 2 \cdot 5 \cdot 1925 + 3 \cdot 24 \cdot 924 + 0 \cdot 10 \cdot 2100 \\
      &= 82\,500 + 19\,250 + 66\,528 + 0 \\
      &= 168\,278 \\
      &\equiv \mathbf{6\,578} \pmod{23\,100}
  \end{aligned}\]
</div>

<div class="thm-box">
  <strong>Ellenőrzés:</strong>
  \(6578 \bmod 7 = 5\) ✓;&nbsp;
  \(6578 \bmod 12 = 2\) ✓;&nbsp;
  \(6578 \bmod 25 = 3\) ✓;&nbsp;
  \(6578 \bmod 11 = 0\) ✓.
</div>

<p style="color:#64748b;font-size:.8rem;margin-top:.6rem">
  Klasszikus iskolás változata: <em>„Melyik az a legkisebb természetes szám, amely 2-vel osztva 1-et,
  3-mal 2-t, 4-gyel 3-at és 5-tel 4-et ad maradékul?"</em> — Válasz: \(x = -1 \bmod 60 = 59\).
</p>`,S=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">7.2 § — Általános (nem-relatív-prím) modulusok</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Ha a modulusok nem páronként relatív prímek, a feladat <em>nehezebb</em> — de megoldható.
    <strong>Ötlet:</strong> kettő kongruenciát egyetlenre redukálunk, így \(r\) helyett \(r-1\)
    kongruenciára csökkenthetjük a rendszert.
  </p>
</div>

<div class="thm-box">
  <strong>7.6 Tétel — \(r = 2\) általános eset.</strong>
  \(\;x \equiv a_1 \pmod{m_1}, \;x \equiv a_2 \pmod{m_2}\;\)
  pontosan akkor oldható meg, ha
  \[\operatorname{lnko}(m_1, m_2) \mid (a_2 - a_1),\]
  és a megoldás egyértelmű \(\pmod{\operatorname{lkkt}(m_1, m_2)}\).
  A bizonyítás Diophantoszi egyenletté alakítja: \(\;m_1 \ell_1 - m_2 \ell_2 = a_2 - a_1.\)
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">7.7 Példa — Nem-relatív-prím \(r = 2\) rendszer</span>
  <p>\(\;x \equiv 3 \pmod 6, \;x \equiv 7 \pmod{10}.\)</p>
  <p>\(\operatorname{lnko}(6, 10) = 2\), \(7 - 3 = 4\), \(2 \mid 4\) ✓.</p>
  <p>Diophantoszi: \(\;6 \ell_1 - 10 \ell_2 = 4\) ⟹ \(\ell_1 = -1 + 5t,\ \ell_2 = 1 + 3t.\)</p>
  <p>\(\;x = 6 \cdot (-1) + 30 t + 3 = 27 + 30 t\), vagyis</p>
  \[x \equiv \mathbf{27} \pmod{30}.\]
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">7.9 Példa — \(r = 3\) általános eset</span>
  <p>\(\;x \equiv 5 \pmod 6, \;x \equiv 1 \pmod{10}, \;x \equiv 11 \pmod{15}.\)</p>
  <table class="cayley" style="width:100%;font-size:.82rem;margin:.4rem 0">
    <thead><tr><th>Lépés</th><th>Egyenlet</th><th>Megoldás</th></tr></thead>
    <tbody>
      <tr><td>(1+2)</td><td>\(6\ell_1 - 10\ell_2 = -4\)</td><td>\(\ell_1 = -4 - 5u,\ \ell_2 = -2 - 3u\)</td></tr>
      <tr><td>(redukált+3)</td><td>\(15\ell_3 - 30 t = 30\)</td><td>\(\ell_3 = 2 - 2v,\ t = -v\)</td></tr>
      <tr><td>végső</td><td>\(x = 15 \cdot 2 + 30 s + 11\)</td><td>\(x \equiv \mathbf{11} \pmod{30}\)</td></tr>
    </tbody>
  </table>
</div>

<div class="info-box">
  <strong>Összefoglalás — Mikor melyik?</strong>
  <table class="cayley" style="width:100%;font-size:.82rem;margin:.4rem 0">
    <thead><tr><th>Eset</th><th>Feltétel</th><th>Módszer</th></tr></thead>
    <tbody>
      <tr><td>Klasszikus CRT</td><td>Páronként relatív prím \(m_i\)-k</td><td>Közvetlen képlet (\(\sum a_i y_i M/m_i\))</td></tr>
      <tr><td>Általános \(r=2\)</td><td>\(\operatorname{lnko}(m_1,m_2) \mid a_2-a_1\)</td><td>Diophantoszi egyenlet</td></tr>
      <tr><td>Általános \(r>2\)</td><td>Páronként ellenőrzés</td><td>Rekurzív 2-lépéses redukció</td></tr>
      <tr><td>Megoldhatatlan</td><td>\(\operatorname{lnko} \nmid a_2-a_1\)</td><td>Nincs megoldás</td></tr>
    </tbody>
  </table>
</div>`,T=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">7.3 § — Nagy számok párhuzamos szorzása CRT-vel</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Bár az 1.2 alfejezet ismertette Karacuba és Schönhage–Strassen algoritmusait, a CRT-alapú
    szorzás <strong>nagyon jól párhuzamosítható</strong> — modern GPU-implementációk alapja.
  </p>
</div>

<div class="info-box">
  <strong>7.10 Algoritmus — Párhuzamos szorzás CRT-vel</strong>
  <ol style="font-size:.85rem;line-height:1.9;margin:.4rem 0">
    <li>Rögzítsük páronként rel. prím \(m_1, \dots, m_r\)-eket úgy, hogy \(K^2 &lt; M = \prod m_i\)
        (mert \(X, Z &lt; K \Rightarrow XZ &lt; K^2\)).</li>
    <li><strong>Előre kiszámoljuk</strong> a \(y_i\) és \(y_i \cdot \tfrac{M}{m_i}\) konstansokat.</li>
    <li>Inputra (\(X, Z &lt; K\)): \(r\) szálon párhuzamosan kiszámoljuk
        \(x_i \equiv X,\; z_i \equiv Z \pmod{m_i}\) és \(a_i \equiv x_i z_i \pmod{m_i}\).</li>
    <li>CRT-vel összerakjuk: \(x \equiv \sum a_i y_i \tfrac{M}{m_i} \pmod M = X \cdot Z\).</li>
  </ol>
</div>

<div class="thm-box">
  <strong>7.11 Megjegyzés.</strong> Az \(y_i\)-ket csak <em>egyszer</em> kell kiszámolnunk; minden új
  szorzáspárra csak \(r\) párhuzamos modulszámolás + egyetlen lineáris kombináció kell.
  Optimális \(m_i\)-választás: sem túl kicsi, sem túl nagy (GPU-regiszter szélességéhez igazítva,
  pl. 32-bit vagy 64-bit modulusok).
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">7.12 Példa — Konkrét párhuzamos szorzás</span>
  <p>Moduluscsalád: \(m_1 = 253,\ m_2 = 200,\ m_3 = 261,\ m_4 = 247\), mind páronként rel.prím.</p>
  \[M = 253 \cdot 200 \cdot 261 \cdot 247 = 3\,262\,030\,200\]
</div>

<div class="def-box">
  <strong>Előkészítés — \(y_i\) és \(y_i \cdot M/m_i\)</strong>
  <table class="cayley" style="font-family:monospace;font-size:.8rem;width:100%;margin:.4rem 0">
    <thead><tr><th>\(i\)</th><th>\(m_i\)</th><th>\(M/m_i\)</th><th>\(y_i\)</th><th>\(y_i \cdot M/m_i\)</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>253</td><td>12\,892\,650</td><td>−18</td><td>−232\,081\,200</td></tr>
      <tr><td>2</td><td>200</td><td>16\,310\,151</td><td>−49</td><td>−799\,197\,399</td></tr>
      <tr><td>3</td><td>261</td><td>12\,497\,024</td><td>+17</td><td>+212\,469\,400</td></tr>
      <tr><td>4</td><td>247</td><td>13\,206\,600</td><td>+62</td><td>+818\,809\,200</td></tr>
    </tbody>
  </table>
</div>

<div class="def-box">
  <strong>Szorzás — \(X = 56\,079,\; Z = 58\,144\)</strong>
  <table class="cayley" style="font-family:monospace;font-size:.8rem;width:100%;margin:.4rem 0">
    <thead><tr><th>\(i\)</th><th>\(x_i \equiv X \pmod{m_i}\)</th><th>\(z_i \equiv Z \pmod{m_i}\)</th><th>\(a_i = x_i z_i \bmod m_i\)</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>166</td><td>−46</td><td>−46</td></tr>
      <tr><td>2</td><td>79</td><td>−56</td><td>−24</td></tr>
      <tr><td>3</td><td>−44</td><td>−59</td><td>36</td></tr>
      <tr><td>4</td><td>10</td><td>99</td><td>2</td></tr>
    </tbody>
  </table>
</div>

<div class="def-box">
  <strong>Összegzés</strong>
  \[\begin{aligned}
    X \cdot Z &\equiv \sum y_i \tfrac{M}{m_i} \cdot a_i \\
      &= (-232\,081\,200)(-46) + (-799\,197\,399)(-24) + 212\,469\,400 \cdot 36 + 818\,809\,200 \cdot 2 \\
      &= 39\,142\,989\,576 \\
      &\equiv \mathbf{3\,260\,657\,376} \pmod M
  \end{aligned}\]
</div>

<div class="thm-box">
  Ellenőrzés: \(56\,079 \cdot 58\,144 = 3\,260\,657\,376\) ✓ —
  minden \(x_i, z_i, a_i\) pici (&lt; 261), a CRT rakja össze a 10-jegyű végeredményt.
</div>`,R=[{id:"intro",label:"Áttekintés",content:t.jsx(c,{html:j})},{id:"crt",label:"7.1 CRT klasszikus",content:t.jsx(c,{html:M})},{id:"pelda",label:"7.5 Példa",content:t.jsx(c,{html:q})},{id:"calc",label:"Interaktív CRT",content:t.jsx(f,{})},{id:"altalanos",label:"7.2 Általános mod.",content:t.jsx(c,{html:S})},{id:"szorzas",label:"7.3 Párhuzamos szorzás",content:t.jsx(c,{html:T})}];function N(){return t.jsxs("div",{className:"ila",children:[t.jsx(v,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 7. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Kínai Maradéktétel és nagy számok szorzása"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(b,{tabs:R})]})}export{N as default};
