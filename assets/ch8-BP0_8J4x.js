import{j as t,L as z,r as p}from"./index-Cd-_-Ba2.js";import{T as y,R as r}from"./kit-CoMAMuWy.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function v(){const[s,k]=p.useState(4087),[g,h]=p.useState(1);function c(e,a){for(;a;){const x=a;a=e%a,e=x}return e}const o=[];let l=2,i=2,n=1,d=0,m=0,b=1;for(;n===1&&d<30;){l=((l*l+g)%s+s)%s,d++;const e=d;e===b&&(b*=2,m=e-1),o.push({k:e,xk:l,j:m,xj:i,g:c(Math.abs(l-i),s)}),n=c(Math.abs(l-i),s),e===m&&(i=l)}return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"8.20 Pollard ρ algoritmus vizualizátor"}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center",margin:".5rem 0",fontSize:".85rem"},children:[t.jsxs("span",{children:["n = ",t.jsx("input",{type:"number",min:4,className:"ila-num",value:s,onChange:e=>k(+e.target.value)})]}),t.jsxs("span",{children:["c = ",t.jsx("input",{type:"number",className:"ila-num",value:g,onChange:e=>h(+e.target.value)})]}),t.jsx("span",{style:{color:"#8892a4",fontSize:".8rem"},children:"f(x) = x²+c, x₀=2"})]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cayley",style:{fontFamily:"monospace",fontSize:".82rem",width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"k"}),t.jsx("th",{children:"x_k"}),t.jsx("th",{children:"j=2^h−1"}),t.jsx("th",{children:"lnko(xₖ−xⱼ, n)"})]})}),t.jsx("tbody",{children:o.map((e,a)=>t.jsxs("tr",{style:e.g>1&&e.g<s?{background:"rgba(167,139,250,.15)"}:void 0,children:[t.jsx("td",{children:e.k}),t.jsx("td",{children:e.xk}),t.jsx("td",{children:e.j}),t.jsx("td",{style:{color:e.g>1&&e.g<s?"#34d399":e.g===s?"#ef4444":void 0,fontWeight:e.g>1?700:void 0},children:e.g})]},a))})]})}),n>1&&n<s?t.jsxs("div",{className:"def-box",style:{marginTop:".6rem",fontWeight:700},children:[s," = ",t.jsx("span",{style:{color:"#fbbf24"},children:n})," × ",t.jsx("span",{style:{color:"#fbbf24"},children:s/n})," ",t.jsxs("span",{style:{color:"#8892a4",fontWeight:400,fontSize:".8rem"},children:["(",o.length," iteráció)"]})]}):t.jsx("div",{className:"warn-box",style:{marginTop:".6rem"},children:n===s?"Triviális osztó — próbálj más c értéket":"Futás..."})]})}const f=String.raw`
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
</div>`,j=String.raw`
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
</div>`,u=String.raw`
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
</div>`,S=String.raw`
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
</div>`,q=String.raw`
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
</div>`,w=[{id:"intro",label:"Áttekintés",content:t.jsx(r,{html:f})},{id:"eraf",label:"8.1–2 Eratoszthenész & Fermat",content:t.jsx(r,{html:j})},{id:"alprim",label:"8.3 Álprímek & Bolyai",content:t.jsx(r,{html:u})},{id:"mr",label:"8.4 Miller–Rabin",content:t.jsx(r,{html:S})},{id:"pollard",label:"8.5 Pollard ρ",content:t.jsx(v,{})},{id:"aks",label:"8.6 AKS",content:t.jsx(r,{html:q})}];function F(){return t.jsxs("div",{className:"ila",children:[t.jsx(z,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 8. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Prímtesztelés és számok felbontása"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(y,{tabs:w})]})}export{F as default};
