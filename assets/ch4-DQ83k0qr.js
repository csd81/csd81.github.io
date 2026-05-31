import{j as e,L as k,r as m}from"./index-Cd-_-Ba2.js";import{T as h,R as n}from"./kit-CoMAMuWy.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function z(){const[r,g]=m.useState(9867),[o,b]=m.useState(8855),i=[];let a=Math.abs(r),s=Math.abs(o);if(a<s){const t=a;a=s,s=t}let d=0;for(;s>0&&d<30;){const t=Math.floor(a/s),l=a%s;i.push({a,b:s,q:t,r:l}),a=s,s=l,d++}const c=a;return e.jsxs("div",{className:"info-box",children:[e.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"Interaktív Euklideszi algoritmus"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center",margin:".5rem 0",fontSize:".85rem"},children:[e.jsxs("span",{children:["a = ",e.jsx("input",{type:"number",className:"ila-num",value:r,onChange:t=>g(+t.target.value)})]}),e.jsxs("span",{children:["b = ",e.jsx("input",{type:"number",className:"ila-num",value:o,onChange:t=>b(+t.target.value)})]})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"cayley",style:{width:"100%",fontFamily:"monospace",fontSize:".82rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left"},children:"Osztandó"}),e.jsx("th",{style:{textAlign:"center"},children:"="}),e.jsx("th",{style:{textAlign:"left"},children:"Osztó · q"}),e.jsx("th",{style:{textAlign:"center"},children:"+"}),e.jsx("th",{style:{textAlign:"left"},children:"maradék"})]})}),e.jsx("tbody",{children:i.map((t,l)=>e.jsxs("tr",{style:t.r===0?{background:"rgba(167,139,250,.12)"}:void 0,children:[e.jsx("td",{children:t.a}),e.jsx("td",{style:{textAlign:"center"},children:"="}),e.jsxs("td",{children:[t.b," · ",t.q]}),e.jsx("td",{style:{textAlign:"center"},children:"+"}),e.jsx("td",{style:{color:t.r===0?"#fbbf24":void 0,fontWeight:t.r===0?700:void 0},children:t.r})]},l))})]})}),e.jsxs("div",{className:"def-box",style:{marginTop:".6rem",fontWeight:700,fontSize:".9rem"},children:["lnko(",Math.abs(r),", ",Math.abs(o),") = ",e.jsx("span",{style:{color:"#fbbf24"},children:c}),"  ",e.jsxs("span",{style:{color:"#8892a4",fontWeight:400,fontSize:".8rem"},children:["(",i.length," lépés)"]})]})]})}const y=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">4. fejezet — Maradékos osztás és Euklidesz</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    A 3.2. alfejezetben láttuk, hogy nagy számok prímtényezőkre bontása <em>gyakorlatilag lehetetlen</em>.
    Mégis, \(\operatorname{lnko}(a, b)\) kiszámítására van egy meglepően egyszerű és gyors algoritmus,
    amelyet már több mint <strong>2300 éve</strong> felfedeztek — és máig a legjobbak közé tartozik.
  </p>
</div>
<div class="info-box">
  <strong>Alkalmazások (előretekintés):</strong>
  <ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li><strong>Relatív prímek</strong> ellenőrzése és keresése</li>
    <li><strong>Törtek</strong> egyszerűsítése</li>
    <li><strong>Lineáris Diophantoszi egyenletek</strong> (\(ax + by = c\)) — 5. fejezet</li>
    <li><strong>Kínai maradéktétel</strong> — 7. fejezet</li>
    <li><strong>Multiplikatív inverz</strong> \(\bmod\, m\) — RSA-kulcsgenerálás (10. fejezet)</li>
  </ul>
</div>`,x=String.raw`
<div class="thm-box">
  <strong>4.1 Tétel — Maradékos osztás.</strong>
  Minden \(a \in \mathbb{Z}\) és \(b > 0\) egész számokhoz létezik <strong>egyértelműen meghatározott</strong>
  \(q, r \in \mathbb{Z}\), amelyre
  \[a = b \cdot q + r \quad \text{és} \quad 0 \leq r &lt; b.\]
</div>
<div class="def-box">
  Meglepő módon a későbbiekben <strong>nem a hányados</strong>, hanem a <strong>maradék</strong> \(r\) lesz a lényeges.
  Programnyelvekben: <code>r := a mod b</code> &nbsp;(Python: <code>a % b</code>)
</div>
<div class="thm-box">
  <strong>4.2 Megjegyzés — Általánosítás más gyűrűkre.</strong>
  A maradékos osztás érvényes \(\mathbb{R}[x]\) polinomokban, \(\mathbb{Z}[i]\) Gauss-egészekben,
  \(\mathbb{Z}[\rho]\) Euler-egészekben is — ezért a 4–7. fejezetek minden Euklideszi gyűrűre érvényesek.
</div>`,p=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">4.3 Algoritmus — Euklideszi algoritmus</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Adott \(a, b \in \mathbb{Z}\) esetén ismételten alkalmazzuk a maradékos osztást:
  </p>
  \[\begin{aligned}
    a &= b \cdot q_1 + r_1, & 0 &\lt r_1 &lt |b| \\
    b &= r_1 \cdot q_2 + r_2, & 0 &\lt r_2 &lt r_1 \\
    &\vdots \\
    r_{m-1} &= r_m \cdot q_{m+1} & \text{(itt }&\, r_{m+1} = 0\text{)}
  \end{aligned}\]
  <div class="thm-box">
    Az algoritmus akkor áll meg, amikor \(r_{m+1} = 0\). Ekkor:
    \[\operatorname{lnko}(a, b) = r_m \qquad \text{— a legutolsó, nem nulla maradék.}\]
  </div>
</div>
<div class="thm-box">
  <strong>4.4 Megjegyzés — Miért fontos prímfelbontás <em>nélkül</em>?</strong>
  Az Euklideszi algoritmus az ismeretlen számok (prím vagy összetett?) lnko-ját is képes meghatározni.
  Erre számtalanszor szükségünk lesz a 7–8. fejezetekben (Pollard \(\rho\), AKS).
</div>`,u=String.raw`
<div class="thm-box">
  <strong>4.8 Tétel — Lamé (1844).</strong>
  Az Euklideszi algoritmus legfeljebb annyi lépésig tart, mint amennyi \(b\) jegyeinek számának ötszöröse:
  \[m \leq 5 \cdot \log_{10} |b|\]
  Gabriel Lamé (1795–1870) — ez volt a <em>legelső</em> bizonyított felső becslés egy algoritmus lépésszámára!
</div>
<div class="def-box">
  <strong>Fibonacci-kapcsolat.</strong> A leglassabb eset, ha minden hányados \(q_i = 1\) — ekkor a maradékok
  pontosan a Fibonacci-sorozatot adják. Binet-formula szerint \(b \geq F_{m+1} \approx \varphi^{m+1}/\sqrt{5}\),
  amiből \(m = O(\log b).\)
</div>
<div class="thm-box">
  <strong>4.10 Tétel — Helyesség.</strong>
  \(r_m = \operatorname{lnko}(a, b)\).
  Bizonyítás: \(\operatorname{lnko}(r_{m-1}, r_m) = \operatorname{lnko}(r_{m-2}, r_{m-1}) = \cdots = \operatorname{lnko}(a, b).\) \(\square\)
</div>
<div class="info-box">
  <strong>Modern változatok:</strong>
  <ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li><strong>Stein (1961) bináris algoritmus</strong> — csak kivonást és felezést használ. Hardver szempontból gyorsabb.</li>
    <li><strong>Kibővített Euklideszi</strong> — egyszerre adja lnko-t <em>és</em> a Bézout-együtthatókat \(x, y\)-t,
        ahol \(ax + by = \operatorname{lnko}(a,b)\). Ez az RSA-kulcsgenerálás alapja.</li>
  </ul>
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Kérdés</th><th style="text-align:left">Válasz Euklideszre</th></tr></thead>
  <tbody>
    <tr><td>1) Megáll-e minden inputra?</td><td>✓ Igen — descente infinie</td></tr>
    <tr><td>2) Helyes eredményt ad?</td><td>✓ Igen — 4.10 Tétel</td></tr>
    <tr><td>3) Mennyi idő alatt?</td><td>✓ Lineáris (Lamé — 4.8 Tétel)</td></tr>
    <tr><td>4) Milyen bonyolult?</td><td>✓ \(O(\log b)\) — gyakorlatilag azonnal</td></tr>
    <tr><td>5) Más alkalmazások?</td><td>✓ Lásd 5–10. fejezet</td></tr>
  </tbody>
</table>`,f=[{id:"intro",label:"Áttekintés",content:e.jsx(n,{html:y})},{id:"mod",label:"4.1 Maradékos osztás",content:e.jsx(n,{html:x})},{id:"eukl",label:"4.2 Euklidesz alg.",content:e.jsx(n,{html:p})},{id:"pelda",label:"Interaktív példák",content:e.jsx(z,{})},{id:"lame",label:"Lamé & elemzés",content:e.jsx(n,{html:u})}];function M(){return e.jsxs("div",{className:"ila",children:[e.jsx(k,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),e.jsx("p",{className:"ila__kicker",children:"Számelmélet — 4. fejezet"}),e.jsx("h1",{className:"ila__title",children:"Maradékos osztás és Euklidesz algoritmusa"}),e.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),e.jsx(h,{tabs:f})]})}export{M as default};
