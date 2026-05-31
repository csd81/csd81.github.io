import{j as t,L as b,r as k}from"./index-Cd-_-Ba2.js";import{T as y,R as m}from"./kit-CoMAMuWy.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function z(){const[c,h]=k.useState(7),a=23,g=s=>{if(s<=1||s%2===0)return{steps:[],isPrime:!1};const r=Math.pow(2,s)-1,i=[4];let l=4;for(let p=0;p<s-2;p++)l=((l*l-2)%r+r)%r,i.length<20&&i.push(l);return{steps:i,isPrime:l===0}},e=Math.min(Math.max(2,c),a),n=Math.pow(2,e)-1,{steps:d,isPrime:o}=g(e);return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"9.3 Lucas–Lehmer prímteszt (M_p = 2^p - 1)"}),t.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",margin:".5rem 0",fontSize:".85rem"},children:[t.jsxs("span",{children:["p = ",t.jsx("input",{type:"number",min:2,max:a,className:"ila-num",value:c,onChange:s=>h(+s.target.value)})]}),t.jsxs("span",{style:{color:"#8892a4"},children:["(p ≤ ",a," böngészőben; teljes implementáció: Python)"]})]}),t.jsxs("div",{style:{fontSize:".83rem",marginBottom:".4rem",color:"#c4b5fd"},children:["M_",e," = 2^",e," − 1 = ",t.jsx("strong",{children:n})]}),t.jsxs("div",{style:{fontSize:".82rem",fontFamily:"monospace",lineHeight:1.8,marginBottom:".4rem"},children:["a₁ = 4  →  ",d.map((s,r)=>t.jsxs("span",{style:{marginRight:".5rem",color:r===d.length-1?s===0?"#34d399":"#f87171":void 0},children:["a",r+2,"=",s]},r)),e-1>d.length&&t.jsxs("span",{style:{color:"#64748b"},children:["…(összesen ",e-1," lépés)"]})]}),t.jsxs("div",{className:`${o?"def-box":"warn-box"}`,style:{fontWeight:700},children:["a_",e-1," ≡ ",o?"0":"nem 0"," (mod M_",e,")  ⟹ ",o?t.jsxs("span",{style:{color:"#34d399"},children:["M_",e," = ",n," PRÍM ✓"]}):t.jsxs("span",{style:{color:"#ef4444"},children:["M_",e," = ",n," ÖSSZETETT ✗"]})]})]})}const f=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">9. fejezet — Prímkeresés</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    Évszázadok óta minden matematikus „prímképletet" keresett. Nagyméretű prímek megtalálása
    <em>speciális alakú</em> számokon teszteléssel hatékonyabb.
  </p>
</div>
<div class="thm-box">
  <strong>Két fő prímcsalád:</strong>
  Mersenne \(M_p = 2^p - 1\) és Fermat \(F_n = 2^{2^n} + 1\).
  Mersenne-prímek a mai prímrekordok: <strong>multimillió jegyű prímeket</strong> találnak velük.
  Fermat-prímek viszont \(n \leq 4\) óta egy sem ismert.
</div>
<ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
  <li><a href="https://www.mersenne.org" style="color:#a78bfa">mersenne.org</a> — GIMPS elosztott Mersenne-keresés</li>
  <li><a href="https://primes.utm.edu" style="color:#a78bfa">primes.utm.edu</a> — Top-5000 ismert prímek</li>
</ul>`,x=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">9.1 Definíció — Mersenne-számok</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Marin <strong>Mersenne</strong> (1588–1648), francia szerzetes-matematikus.
    \[M_p := 2^p - 1, \qquad p \in \mathbb{P}\]
    Mersenne-prím: \(M_p \in \mathbb{P}\) — pl. \(M_2=3, M_3=7, M_5=31, M_7=127.\)
  </p>
</div>
<div class="thm-box">
  <strong>9.2 — Miért csak prím \(p\)?</strong>
  Ha \(k = uv\) összetett, \(2^{uv} - 1 = (2^v-1)(\ldots)\) — tehát \(M_k\) is összetett.
  De prím \(p\) sem elégséges: \(M_{11} = 2047 = 23 \cdot 89\)!
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">\(p\)</th><th style="text-align:left">\(M_p\) jegyek</th><th style="text-align:left">Felfedezés</th></tr></thead>
  <tbody>
    <tr><td>\(2, 3, 5, 7\)</td><td>1–3</td><td>antikum</td></tr>
    <tr><td>\(127\)</td><td>39</td><td>Lucas 1876 — 75 évig rekord!</td></tr>
    <tr><td>\(521-2281\)</td><td>157–687</td><td>Robinson 1952 — első számítógépes</td></tr>
    <tr><td>\(6\,972\,593\) (M38)</td><td>2 098 960</td><td>1999 — első millió-jegyű</td></tr>
    <tr><td>\(43\,112\,609\) (M47)</td><td>12 978 189</td><td>2008 — Smith, UCLA, $100k jutalom</td></tr>
    <tr><td>\(82\,589\,933\) (M51)</td><td>24 862 048</td><td>2018 — GIMPS, jelenlegi rekord</td></tr>
  </tbody>
</table>
<div class="thm-box">
  <strong>9.5 Probléma (nyitott).</strong> Végtelen sok Mersenne-prím létezik-e? Nem tudjuk.
</div>
<div class="def-box">
  <strong>9.6–9.7 — Tökéletes számok.</strong>
  \(n\) tökéletes, ha \(n =\) valódi osztói összege. Pl. \(6=1+2+3.\)
  Euklidesz: ha \(2^m-1\) prím, akkor \(2^{m-1}(2^m-1)\) tökéletes.
  Euler: <em>minden páros tökéletes szám</em> ilyen alakú.
  <strong>Páratlan tökéletes szám létezése — máig megoldatlan!</strong>
</div>`,u=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">9.8 Definíció — Fermat-számok</span>
  \[F_n := 2^{2^n} + 1, \qquad n \in \mathbb{N}\]
  Fermat 1650-ben minden \(F_n\)-t prímnek sejtett. Euler 1732-ben cáfolta: \(F_5 = 641 \times 6\,700\,417.\)
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th>\(n\)</th><th>\(F_n\)</th><th>Prím?</th></tr></thead>
  <tbody>
    <tr><td>0</td><td>3</td><td style="color:#34d399">✓</td></tr>
    <tr><td>1</td><td>5</td><td style="color:#34d399">✓</td></tr>
    <tr><td>2</td><td>17</td><td style="color:#34d399">✓</td></tr>
    <tr><td>3</td><td>257</td><td style="color:#34d399">✓</td></tr>
    <tr><td>4</td><td>65 537</td><td style="color:#34d399">✓ (eddigi legnagyobb ismert Fermat-prím!)</td></tr>
    <tr><td>5</td><td>4 294 967 297</td><td style="color:#ef4444">= 641 × 6 700 417 (Euler 1732)</td></tr>
    <tr><td>6–32</td><td>—</td><td style="color:#ef4444">mind összetett (vizsgált)</td></tr>
  </tbody>
</table>
<div class="thm-box">
  <strong>9.11 Tétel — Gauss (1796) szabályos sokszög-szerkesztés.</strong>
  \(n\)-oldalú szabályos sokszög szerkeszthető körzővel és vonalzóval \(\iff\)
  \(n = 2^s\) vagy \(n = 2^s \cdot q_1 \cdots q_r\), ahol \(q_i\) különböző Fermat-prímek.
  <br/>Gauss 19 évesen (1796) fedezte fel — megszerkesztette a <strong>17-oldalú</strong> szabályos sokszöget
  (2000 évig nyitott probléma). Sírján is ez található.
</div>`,v=[{id:"intro",label:"Áttekintés",content:t.jsx(m,{html:f})},{id:"mersenne",label:"9.1 Mersenne",content:t.jsx(m,{html:x})},{id:"lucas",label:"Lucas–Lehmer teszt",content:t.jsx(z,{})},{id:"fermat",label:"9.2 Fermat-prímek",content:t.jsx(m,{html:u})}];function S(){return t.jsxs("div",{className:"ila",children:[t.jsx(b,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 9. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Prímkeresés"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(y,{tabs:v})]})}export{S as default};
