import{j as e,L as v,r as _}from"./index-Cd-_-Ba2.js";import{T as y,R as d}from"./kit-CoMAMuWy.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function b(){const[l,m]=_.useState([{m:7,a:5},{m:12,a:2},{m:25,a:3},{m:11,a:0}]);function h(t,s){for(;s;){const o=s;s=t%s,t=o}return t}function c(t,s){if(s===0)return{g:t,x:1,y:0};const{g:o,x:n,y:i}=c(s,t%s);return{g:o,x:i,y:n-Math.floor(t/s)*i}}function k(t,s){const{x:o}=c((t%s+s)%s,s);return(o%s+s)%s}const u=l.every((t,s)=>l.every((o,n)=>s>=n||h(t.m,o.m)===1));let a=0,r=1;u&&l.length>0&&(l.forEach(t=>{r*=t.m}),l.forEach(t=>{const s=r/t.m,o=k(s,t.m);a=(a+t.a*s*o)%r}),a=(a%r+r)%r);const x=()=>m(t=>[...t,{m:7,a:1}]),z=t=>m(s=>s.filter((o,n)=>n!==t)),g=(t,s,o)=>m(n=>n.map((i,p)=>p===t?{...i,[s]:o}:i));return e.jsxs("div",{className:"info-box",children:[e.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"Interaktív CRT megoldó"}),e.jsx("p",{style:{fontSize:".83rem",margin:".4rem 0"},children:"Adj meg szimultán kongruencia-rendszert páronként relatív prím modulusokkal."}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"cayley",style:{width:"100%",fontSize:".83rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"x ≡ a (mod m)"}),e.jsx("th",{children:"m"}),e.jsx("th",{children:"a"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:l.map((t,s)=>e.jsxs("tr",{children:[e.jsxs("td",{children:["x ≡ ",t.a," (mod ",t.m,")"]}),e.jsx("td",{children:e.jsx("input",{type:"number",min:1,className:"ila-num",value:t.m,onChange:o=>g(s,"m",+o.target.value)})}),e.jsx("td",{children:e.jsx("input",{type:"number",className:"ila-num",value:t.a,onChange:o=>g(s,"a",+o.target.value)})}),e.jsx("td",{children:e.jsx("button",{className:"op-btn",onClick:()=>z(s),style:{fontSize:".75rem",padding:".1rem .4rem"},children:"×"})})]},s))})]})}),e.jsx("button",{className:"op-btn",onClick:x,style:{marginTop:".4rem",fontSize:".8rem"},children:"+ Sor"}),e.jsx("div",{className:"def-box",style:{marginTop:".6rem",fontWeight:700},children:u?e.jsxs(e.Fragment,{children:["M = ",r,",   x ≡ ",e.jsx("span",{style:{color:"#fbbf24"},children:a})," (mod ",r,")",e.jsxs("div",{style:{fontSize:".78rem",color:"#8892a4",fontWeight:400,marginTop:".3rem"},children:["Ellenőrzés: ",l.map((t,s)=>e.jsxs("span",{style:{marginRight:".5rem"},children:[a," mod ",t.m," = ",e.jsx("strong",{style:{color:a%t.m===(t.a%t.m+t.m)%t.m?"#34d399":"#ef4444"},children:a%t.m})," ",a%t.m===(t.a%t.m+t.m)%t.m?"✓":"✗"]},s))]})]}):e.jsx("span",{style:{color:"#ef4444"},children:"⚠ A modulusok nem páronként relatív prímek!"})})]})}const f=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">7. fejezet — Kínai Maradéktétel és nagy számok szorzása</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    A fejezetben ismertetett eredményt <strong>1000 évvel ezelőtt</strong> már ismerték kínai matematikusok —
    Sun Tzu „Aritmetikai értekezése" (kb. Kr.u. 3–5. század). A modern algoritmikus számelméletben ma is
    <em>alapműveletként</em> használjuk.
  </p>
</div>
<div class="def-box">
  <strong>7.1 Probléma — Szimultán kongruenciarendszer.</strong>
  Adott modulusok \(m_1, \dots, m_r\) és maradékok \(a_1, \dots, a_r\):
  \[x \equiv a_i \pmod{m_i}, \quad i = 1, \dots, r.\]
  Sun Tzu eredeti: „Adott egy szám, amely 3-mal osztva 2-t, 5-tel 3-at, 7-tel 2-t ad maradékul."
  Megoldás: \(23 + 105k.\)
</div>
<ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
  <li><strong>Párhuzamos aritmetika</strong> — nagy számok szorzása kis modulusokon (7.3)</li>
  <li><strong>RSA dekódolás gyorsítása</strong> — \(\bmod\, p\) és \(\bmod\, q\) külön, majd CRT (4× gyorsulás)</li>
  <li><strong>Diszkrét Fourier-transzformáció</strong> — Schönhage–Strassen szorzás</li>
</ul>`,j=String.raw`
<div class="thm-box">
  <strong>7.3 Tétel — Kínai Maradéktétel (CRT).</strong>
  Ha az \(m_i\) modulusok <strong>páronként relatív prímek</strong>, akkor a kongruenciarendszernek
  bármilyen \(a_1, \dots, a_r\) esetén <strong>pontosan egy</strong> \(x\) gyöke van \(\pmod M\) ahol
  \[M = \operatorname{lkkt}(m_1, \dots, m_r) = m_1 m_2 \cdots m_r.\]
  Konstruktív képlet: oldjuk meg minden \(i\)-re \(y_i \cdot \tfrac{M}{m_i} \equiv 1 \pmod{m_i}\), ekkor:
  \[\boxed{\;x \equiv \sum_{i=1}^r a_i \cdot y_i \cdot \frac{M}{m_i} \pmod M\;}\]
</div>`,S=String.raw`
<div class="ex-box">
  <strong>7.5 Példa — 4-modulusú rendszer</strong>
  \[\begin{cases} x \equiv 5 \pmod 7 \\ x \equiv 2 \pmod{12} \\ x \equiv 3 \pmod{25} \\ x \equiv 0 \pmod{11} \end{cases}\]
  \(M = 7 \cdot 12 \cdot 25 \cdot 11 = 23\,100.\)
  <table class="cayley" style="font-size:.82rem;margin:.4rem 0;width:100%">
    <thead><tr><th>\(i\)</th><th>\(m_i\)</th><th>\(M/m_i\)</th><th>\(y_i\)</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>7</td><td>3300</td><td>5</td></tr>
      <tr><td>2</td><td>12</td><td>1925</td><td>5</td></tr>
      <tr><td>3</td><td>25</td><td>924</td><td>24</td></tr>
      <tr><td>4</td><td>11</td><td>2100</td><td>10</td></tr>
    </tbody>
  </table>
  \[\begin{aligned}
    x &\equiv 5 \cdot 5 \cdot 3300 + 2 \cdot 5 \cdot 1925 + 3 \cdot 24 \cdot 924 + 0 \\
      &= 82500 + 19250 + 66528 \\
      &\equiv \mathbf{6578} \pmod{23100}
  \end{aligned}\]
  Ellenőrzés: \(6578 \bmod 7 = 5\) ✓; \(6578 \bmod 12 = 2\) ✓; \(6578 \bmod 25 = 3\) ✓; \(6578 \bmod 11 = 0\) ✓.
</div>`,M=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">7.2 § — Általános (nem relatív prím) modulusok</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Ha a modulusok nem páronként relatív prímek, a feladat nehezebb — de megoldható
    Diophantoszi egyenletté alakítással.
  </p>
</div>
<div class="thm-box">
  <strong>7.6 Tétel — \(r = 2\) általános eset.</strong>
  \(x \equiv a_1 \pmod{m_1}, \;x \equiv a_2 \pmod{m_2}\)
  pontosan akkor oldható meg, ha
  \[\operatorname{lnko}(m_1, m_2) \mid (a_2 - a_1),\]
  és a megoldás egyértelmű \(\pmod{\operatorname{lkkt}(m_1, m_2)}\).
</div>
<div class="ex-box">
  <strong>7.7 Példa.</strong> \(x \equiv 3 \pmod 6, \;x \equiv 7 \pmod{10}.\)
  \(\operatorname{lnko}(6, 10) = 2\), \(7 - 3 = 4\), \(2 \mid 4\) ✓.
  Diophantoszi: \(6\ell_1 - 10\ell_2 = 4\) ⟹ \(\ell_1 = -1 + 5t.\)
  \[x \equiv \mathbf{27} \pmod{30}\]
</div>`,T=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">7.3 § — Nagy számok párhuzamos szorzása CRT-vel</span>
</div>
<div class="info-box">
  <strong>7.10 Algoritmus — Párhuzamos szorzás:</strong>
  <ol style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li>Rögzítsük páronként rel. prím \(m_1, \dots, m_r\)-eket úgy, hogy \(K^2 &lt; M = \prod m_i.\)</li>
    <li>Előre kiszámoljuk a \(y_i\) és \(y_i \cdot \tfrac{M}{m_i}\) konstansokat.</li>
    <li>Inputra \((X, Z &lt; K)\): \(r\) szálon párhuzamosan \(a_i \equiv x_i z_i \pmod{m_i}\).</li>
    <li>CRT-vel összerakjuk: \(x \equiv \sum a_i y_i \tfrac{M}{m_i} \pmod M = X \cdot Z.\)</li>
  </ol>
</div>
<div class="ex-box">
  <strong>7.12 Példa.</strong>
  Moduluscsalád: \(m_1=253, m_2=200, m_3=261, m_4=247\), \(M = 3\,262\,030\,200.\)
  <br/>Szorzás \(X = 56\,079, Z = 58\,144\):
  kis modulusú \(a_i\)-k szorzata összerakva adja \(X \cdot Z = 3\,260\,657\,376\). ✓
</div>`,q=[{id:"intro",label:"Áttekintés",content:e.jsx(d,{html:f})},{id:"crt",label:"7.1 CRT klasszikus",content:e.jsx(d,{html:j})},{id:"pelda",label:"7.5 Példa",content:e.jsx(d,{html:S})},{id:"calc",label:"Interaktív CRT",content:e.jsx(b,{})},{id:"altalanos",label:"7.2 Általános",content:e.jsx(d,{html:M})},{id:"szorzas",label:"7.3 Párhuzamos szorzás",content:e.jsx(d,{html:T})}];function A(){return e.jsxs("div",{className:"ila",children:[e.jsx(v,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),e.jsx("p",{className:"ila__kicker",children:"Számelmélet — 7. fejezet"}),e.jsx("h1",{className:"ila__title",children:"Kínai Maradéktétel és nagy számok szorzása"}),e.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),e.jsx(y,{tabs:q})]})}export{A as default};
