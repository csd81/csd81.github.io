import{j as t,L as c,r as m}from"./index-CAqBiqM_.js";import{T as z,R as l}from"./kit-C3piugpg.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function y(){const[n,g]=m.useState(9867),[o,b]=m.useState(8855),i=[];let a=Math.abs(n),s=Math.abs(o);if(a<s){const e=a;a=s,s=e}let d=0;for(;s>0&&d<40;){const e=Math.floor(a/s),r=a%s;i.push({a,b:s,q:e,r}),a=s,s=r,d++}const k=a;return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"4.3 Interaktív Euklideszi algoritmus"}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center",margin:".5rem 0",fontSize:".85rem"},children:[t.jsxs("span",{children:["a = ",t.jsx("input",{type:"number",className:"ila-num",value:n,onChange:e=>g(+e.target.value)})]}),t.jsxs("span",{children:["b = ",t.jsx("input",{type:"number",className:"ila-num",value:o,onChange:e=>b(+e.target.value)})]})]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cayley",style:{width:"100%",fontFamily:"monospace",fontSize:".82rem"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{textAlign:"left"},children:"Osztandó"}),t.jsx("th",{style:{textAlign:"center"},children:"="}),t.jsx("th",{style:{textAlign:"left"},children:"Osztó · q"}),t.jsx("th",{style:{textAlign:"center"},children:"+"}),t.jsx("th",{style:{textAlign:"left"},children:"maradék"})]})}),t.jsx("tbody",{children:i.map((e,r)=>t.jsxs("tr",{style:e.r===0?{background:"rgba(167,139,250,.13)"}:void 0,children:[t.jsx("td",{children:e.a}),t.jsx("td",{style:{textAlign:"center"},children:"="}),t.jsxs("td",{children:[e.b," · ",e.q]}),t.jsx("td",{style:{textAlign:"center"},children:"+"}),t.jsx("td",{style:{color:e.r===0?"#fbbf24":void 0,fontWeight:e.r===0?700:void 0},children:e.r})]},r))})]})}),t.jsxs("div",{className:"def-box",style:{marginTop:".6rem",fontWeight:700,fontSize:".9rem"},children:["lnko(",Math.abs(n),", ",Math.abs(o),") = ",t.jsx("span",{style:{color:"#fbbf24"},children:k}),"  ",t.jsxs("span",{style:{color:"#8892a4",fontWeight:400,fontSize:".8rem"},children:["(",i.length," lépés)"]})]})]})}const h=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">4. fejezet — Maradékos osztás és Euklidesz algoritmusa</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    A 3.2. alfejezetben láttuk, hogy nagy számok prímtényezőkre bontása <em>gyakorlatilag lehetetlen</em>.
    Mégis, \(\operatorname{lnko}(a, b)\) kiszámítására van egy meglepően egyszerű és gyors algoritmus,
    amelyet már több mint <strong>2300 éve</strong> felfedeztek — és máig a legjobbak közé tartozik.
  </p>
  <div class="def-box" style="margin-top:.5rem">
    <strong>Euklidesz</strong> (Kr.e. ~300, Alexandria). A görög matematika elsősorban
    <em>geometria</em> volt, ezért Euklidesz az algoritmusát <strong>szakaszokra</strong> definiálta —
    tetszőleges pozitív valós számok legnagyobb közös mértékét határozta meg algoritmikusan.
  </div>
</div>
<div class="info-box">
  <strong>Alkalmazások (előretekintés):</strong>
  <ul style="font-size:.85rem;line-height:1.9;margin:.4rem 0">
    <li><strong>Relatív prímek</strong> ellenőrzése és keresése</li>
    <li><strong>Törtek</strong> egyszerűsítése</li>
    <li><strong>Lineáris Diophantoszi egyenletek</strong> (\(ax + by = c\)) — 5. fejezet</li>
    <li><strong>Lineáris kongruenciák</strong> — 6. fejezet</li>
    <li><strong>Kínai maradéktétel</strong> — 7. fejezet</li>
    <li><strong>Multiplikatív inverz</strong> \(\bmod\, m\) — RSA-kulcsgenerálás (10. fejezet)</li>
  </ul>
</div>`,p=String.raw`
<div class="thm-box">
  <span class="lbl lbl--thm">4.1 Tétel — Maradékos osztás</span>
  <div class="box-body">
    Minden \(a \in \mathbb{Z}\) és \(b > 0\) egész számokhoz létezik
    <strong>egyértelműen meghatározott</strong> \(q, r \in \mathbb{Z}\), amelyre
    \[a = b \cdot q + r \quad \text{és} \quad 0 \leq r < b.\]
  </div>
</div>
<div class="def-box">
  <div class="box-body">
    Meglepő módon a későbbiekben <strong>nem a hányados</strong>, hanem a
    <strong>maradék</strong> \(r\) lesz a lényeges. Programnyelvekben:
  </div>
  <pre style="font-family:monospace;font-size:.83rem;background:#0d1117;padding:.5rem .75rem;border-radius:.3rem;margin:.4rem 0;overflow-x:auto"><code>r := a mod b      # Python: a % b
                  # C:      a % b
                  # SQL:    MOD(a, b)</code></pre>
  <div class="box-body" style="color:#94a3b8;font-size:.82rem">
    Negatív \(b\)-re kiterjeszthető: \(0 \leq r < |b|\), de a gyakorlatban felesleges bonyolítás.
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">4.2 Megjegyzés — Általánosítás más gyűrűkre</span>
  <div class="box-body">
    A maradékos osztás <strong>érvényes</strong> az alábbi gyűrűkben is:
  </div>
  <table class="cayley" style="width:100%;font-size:.83rem;margin:.4rem 0">
    <thead><tr><th style="text-align:left">Gyűrű</th><th style="text-align:left">Elemek</th><th style="text-align:left">Példa-művelet</th></tr></thead>
    <tbody>
      <tr><td><strong>\(\mathbb{R}[x]\)</strong></td><td>valós együtthatós polinomok</td><td>polinomosztás</td></tr>
      <tr><td><strong>\(\mathbb{Z}[i]\)</strong> Gauss-egészek</td><td>\(a + bi\), \(a, b \in \mathbb{Z}\)</td><td>komplex egész osztás</td></tr>
      <tr><td><strong>\(\mathbb{Z}[\rho]\)</strong> Euler-egészek</td><td>\(\rho = -\tfrac{1}{2} + \tfrac{\sqrt{3}}{2}i\)</td><td>köbgyök-egységekkel</td></tr>
      <tr><td>\(\mathbb{Z}[\alpha]\)</td><td>\(\alpha \in \mathbb{C}\) másodfokú algebrai szám</td><td>algebrai egész</td></tr>
    </tbody>
  </table>
  <div class="box-body" style="margin-top:.4rem">
    Mivel a 4–7. fejezetek a maradékos osztás <em>egyetlen</em> tulajdonságára épülnek,
    <strong>minden módszer érvényes</strong> \(\mathbb{Z}[i]\), \(\mathbb{Z}[\rho]\), polinomok és
    általánosabb <em>Euklideszi gyűrűk</em> esetében is. Részletek a Függelékben (13. fejezet).
  </div>
  <div class="box-body" style="color:#94a3b8;font-style:italic;font-size:.82rem;margin-top:.3rem">
    A valós számoknál is használjuk a maradékos osztást: a trigonometrikus függvényeknél
    \(b = 2\pi\) a periódus.
  </div>
</div>`,v=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">4.3 Algoritmus — Euklideszi algoritmus</span>
  <div class="box-body">
    Adott \(a, b \in \mathbb{Z}\) esetén ismételten alkalmazzuk a maradékos osztást: ha
    \(|a| \geq |b|\), akkor osszuk \(a\)-t \(b\)-vel, majd \(b\)-t a maradékkal — mindig az
    <em>osztót</em> az új <em>maradékkal</em>.
  </div>
  \[\begin{aligned}
    a &= b \cdot q_1 + r_1, & 0 &< r_1 < |b| \\
    b &= r_1 \cdot q_2 + r_2, & 0 &< r_2 < r_1 \\
    r_1 &= r_2 \cdot q_3 + r_3, & 0 &< r_3 < r_2 \\
    &\vdots \\
    r_{i-2} &= r_{i-1} \cdot q_i + r_i, & 0 &< r_i < r_{i-1} \\
    &\vdots \\
    r_{m-2} &= r_{m-1} \cdot q_m + r_m, & 0 &< r_m < r_{m-1} \\
    r_{m-1} &= r_m \cdot q_{m+1} & \text{(itt }&\, r_{m+1} = 0\text{)}
  \end{aligned}\]
  <div class="thm-box" style="margin:.5rem 0">
    Az algoritmus akkor áll meg, amikor \(r_{m+1} = 0\). Ekkor:
    \[\operatorname{lnko}(a, b) = r_m \qquad \text{— a legutolsó, nem nulla maradék.}\]
  </div>
  <div class="box-body" style="color:#64748b;font-size:.8rem">
    <strong>4.5 Jelölés.</strong> A maradékokat \(\langle r_i \rangle\) szögletes zárójelbe tesszük,
    hogy a hányadosoktól (\(q_i\)-től) megkülönböztessük.
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">4.4 Megjegyzés — Miért fontos prímfelbontás <em>nélkül</em>?</span>
  <div class="box-body">
    Az Euklideszi algoritmus előnye <strong>nem csak a gyorsasága</strong>! Ha a legnagyobb
    közös osztót az argumentumok prímtényezős felbontása nélkül is ki lehet számolni — akkor
    prímtesztelő és -felbontó algoritmusoknál az <em>ismeretlen</em>
    („prím vagy összetett?") számok lnko-ját is meg tudjuk határozni.
    Erre számtalanszor lesz szükségünk a 7–8. fejezetben (Pollard \(\rho\), Lenstra elliptikus
    görbe-faktorizáció, AKS prímteszt). Ez teszi az Euklideszi algoritmust az egész könyv
    <em>egyik központi pillérévé</em>.
  </div>
</div>`,x=String.raw`
<div class="ex-box">
  <span class="lbl lbl--ex">4.6 Példa — \(\operatorname{lnko}(9867, 8855)\)</span>
  <div class="box-body">
    <table class="cayley" style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:.86rem;width:100%;margin:.4rem 0">
      <thead><tr><th style="text-align:left">Osztandó</th><th>=</th><th style="text-align:left">Osztó · hányados</th><th>+</th><th style="text-align:left">maradék</th></tr></thead>
      <tbody>
        <tr><td>\(\langle 9867 \rangle\)</td><td>=</td><td>\(\langle 8855 \rangle \cdot 1\)</td><td>+</td><td>\(\langle 1012 \rangle\)</td></tr>
        <tr><td>\(\langle 8855 \rangle\)</td><td>=</td><td>\(\langle 1012 \rangle \cdot 8\)</td><td>+</td><td>\(\langle 759 \rangle\)</td></tr>
        <tr><td>\(\langle 1012 \rangle\)</td><td>=</td><td>\(\langle 759 \rangle \cdot 1\)</td><td>+</td><td>\(\langle 253 \rangle\)</td></tr>
        <tr><td>\(\langle 759 \rangle\)</td><td>=</td><td>\(\langle 253 \rangle \cdot 3\)</td><td>+</td><td>\(\langle \mathbf{0} \rangle\)</td></tr>
      </tbody>
    </table>
    \[\operatorname{lnko}(9867, 8855) = \mathbf{253}\]
    Csak <strong>4 lépés</strong>! A két szám prímfelbontása: \(9867 = 3 \cdot 11 \cdot 13 \cdot 23\),
    \(8855 = 5 \cdot 7 \cdot 11 \cdot 23\) — közvetlenül megtalálni jóval bonyolultabb.
  </div>
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">4.7 Példa — \(\operatorname{lnko}(5\,170\,549,\ 4\,195\,813)\)</span>
  <div class="box-body">
    7-jegyű inputokra is csak <strong>8 lépés</strong> kell:
    <table class="cayley" style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:.84rem;width:100%;margin:.4rem 0">
      <thead><tr><th style="text-align:left">Osztandó</th><th style="text-align:left">Osztó · q</th><th style="text-align:left">maradék</th></tr></thead>
      <tbody>
        <tr><td>5 170 549</td><td>4 195 813 · 1</td><td>974 736</td></tr>
        <tr><td>4 195 813</td><td>974 736 · 4</td><td>296 869</td></tr>
        <tr><td>974 736</td><td>296 869 · 3</td><td>84 129</td></tr>
        <tr><td>296 869</td><td>84 129 · 3</td><td>44 482</td></tr>
        <tr><td>84 129</td><td>44 482 · 1</td><td>39 647</td></tr>
        <tr><td>44 482</td><td>39 647 · 1</td><td>4 835</td></tr>
        <tr><td>39 647</td><td>4 835 · 8</td><td>967</td></tr>
        <tr><td>4 835</td><td>967 · 5</td><td>\(\mathbf{0}\)</td></tr>
      </tbody>
    </table>
    \[\operatorname{lnko}(5\,170\,549,\ 4\,195\,813) = \mathbf{967}\]
    \(\sqrt{5 \cdot 10^6} \approx 2236\) próbaosztás kellene faktorizációhoz — nagyságrendileg ugyanannyi.
    De Euklidesszel <strong>csak 8 lépés</strong>!
  </div>
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">4.11–4.12 — Több szám lnko-ja</span>
  <div class="box-body">
    Az lnko (és lkkt) több számra <em>iteratívan</em> az Euklideszi algoritmussal:
    \[\operatorname{lnko}(a, b, c) = \operatorname{lnko}\!\bigl(\operatorname{lnko}(a, b),\ c\bigr)\]
    <strong>Példa — \(\operatorname{lnko}(39\,137\,563,\ 15\,836\,693,\ 37\,219\,177)\):</strong>
    <table class="cayley" style="font-size:.83rem;margin:.4rem 0;width:100%">
      <thead><tr><th style="text-align:left">Lépés</th><th style="text-align:left">Eredmény</th></tr></thead>
      <tbody>
        <tr><td>\(\operatorname{lnko}(39\,137\,563,\ 15\,836\,693)\)</td><td>\(= 39\,493\)</td></tr>
        <tr><td>\(\operatorname{lnko}(37\,219\,177,\ 39\,493)\)</td><td>\(= 541\)</td></tr>
        <tr><td><strong>Eredmény</strong></td><td>\(\mathbf{= 541}\)</td></tr>
      </tbody>
    </table>
  </div>
</div>`,f=String.raw`
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">A „jó algoritmus" 5 kritériuma — Euklidesz mind 5-ön átmegy</span>
  <table class="cayley" style="width:100%;font-size:.83rem;margin:.4rem 0">
    <thead><tr><th style="text-align:left">Kérdés</th><th style="text-align:left">Válasz Euklideszre</th></tr></thead>
    <tbody>
      <tr><td><strong>1)</strong> Megáll-e minden inputra?</td><td>✓ Igen — <em>descente infinie</em></td></tr>
      <tr><td><strong>2)</strong> Helyes eredményt ad?</td><td>✓ Igen — 4.10 Tétel</td></tr>
      <tr><td><strong>3)</strong> Mennyi idő alatt?</td><td>✓ Lineáris (Lamé — 4.8 Tétel)</td></tr>
      <tr><td><strong>4)</strong> Milyen bonyolult?</td><td>✓ \(O(\log b)\) — gyakorlatilag azonnal</td></tr>
      <tr><td><strong>5)</strong> Más alkalmazások?</td><td>✓ Lásd 5–10. fejezet</td></tr>
    </tbody>
  </table>
  <div class="def-box" style="margin-top:.5rem">
    <strong>Descente infinie elve.</strong> Az algoritmus természetesen véges sok lépésben véget ér, mert
    \[|b| > r_1 > r_2 > \dots > r_i > r_{i+1} > \dots > 0\]
    és <em>pozitív egészek szigorúan csökkenő sorozata nem lehet végtelen</em>.
    Pierre de Fermat bizonyítási elve (francia: „végtelen leszállás").
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">4.8 Tétel — Lamé (1844)</span>
  <div class="box-body">
    Az Euklideszi algoritmus legfeljebb annyi lépésig tart, mint amennyi \(b\) számjegyeinek
    számának <strong>ötszöröse</strong>:
    \[m \leq 5 \cdot \log_{10} |b|\]
    Gabriel Lamé (1795–1870) francia matematikus. Ez volt a <em>legelső</em> bizonyított felső becslés
    egy algoritmus lépésszámára — a számítástudomány <em>előtti</em> aszimptotikus elemzés!
  </div>
</div>

<div class="def-box">
  <span class="lbl">Bizonyítás-vázlat — A Fibonacci-kapcsolat</span>
  <div class="box-body">
    Az algoritmus akkor tart a legtovább, ha a \(q_i\) együtthatók a <strong>legkisebbek</strong>
    (mindig 1). De \(q_i \equiv 1\) esetén a maradékok éppen a <strong>Fibonacci-sorozatot</strong>
    adják visszafelé:
    \[r_m, r_{m-1}, \dots, r_2, r_1, |b| \;=\; F_1, F_2, F_3, \dots, F_{m+1}\]
    Binet-formula szerint \(F_n = \frac{1}{\sqrt{5}}(\varphi^n - \psi^n)\), ahol \(\varphi = (1+\sqrt{5})/2\):
    \[b \;\geq\; F_{m+1} \;\approx\; \frac{\varphi^{m+1}}{\sqrt{5}} \;\Longrightarrow\; m = O(\log b).\]
    <div class="thm-box" style="margin-top:.4rem">
      <strong>Pontosabb [CLR] 33.2-5.</strong> \(a > b > 0\) esetén a futásidő
      \(1 + \log_\varphi(b)\), ami tovább csökkenthető:
      \[1 + \log_\varphi\!\left(\frac{b}{\operatorname{lnko}(a,b)}\right), \qquad \varphi = \frac{\sqrt{5} + 1}{2}.\]
    </div>
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">4.9 Megjegyzés — Miért „a lehető leggyorsabb"?</span>
  <div class="box-body">
    Lamé tétele szerint az Euklideszi algoritmus <strong>lineáris</strong> az input méretében:
    a futásidő csak <em>egyenes arányban</em> nő a jegyek számával. Ezt az input <em>beolvasása</em>
    is megköveteli — tehát nincs lényegesen gyorsabb algoritmus elvileg sem.
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">4.10 Tétel — Helyességbizonyítás</span>
  <div class="box-body">
    \(r_m = \operatorname{lnko}(a, b)\).
    <br/>
    <strong>Bizonyítás (teljes indukció alulról felfelé):</strong>
    \[r_m = \operatorname{lnko}(r_m, r_{m-1}) = \operatorname{lnko}(r_{m-1}, r_{m-2}) = \cdots = \operatorname{lnko}(a, b). \quad \square\]
    Az <em>induktív lépés</em> kulcsa: ha \(a = bq + r\), akkor \(\operatorname{lnko}(a, b) = \operatorname{lnko}(b, r)\).
  </div>
</div>

<div class="info-box">
  <span class="lbl">Modern változatok</span>
  <ul style="font-size:.85rem;line-height:1.9;margin:.4rem 0">
    <li>
      <strong>Stein (1961) bináris algoritmus</strong> — csak <em>kivonást és felezést</em>
      (bináris-vessző áthelyezést) használ. Hardver szempontból gyorsabb, mert osztás nincs benne.
      Részletek: Knuth [KD] 2. kötet, 4.5.2.
    </li>
    <li>
      <strong>Kibővített Euklideszi (extended)</strong> — egyszerre adja az
      \(\operatorname{lnko}(a,b)\)-t <em>és</em> a Bézout-együtthatókat \(x, y\), amelyekre
      \(ax + by = \operatorname{lnko}(a, b)\). Erre alapszik a multiplikatív inverz \(\bmod\, m\) keresése
      (RSA-kulcsgenerálás). Részletesen: 5. fejezet.
    </li>
  </ul>
</div>`,u=[{id:"intro",label:"Áttekintés",content:t.jsx(l,{html:h})},{id:"mod",label:"4.1 Maradékos osztás",content:t.jsx(l,{html:p})},{id:"eukl",label:"4.2 Euklidesz alg.",content:t.jsx(l,{html:v})},{id:"pelda",label:"4.6–4.12 Példák",content:t.jsxs("div",{children:[t.jsx(l,{html:x}),t.jsx(y,{})]})},{id:"lame",label:"Lamé & elemzés",content:t.jsx(l,{html:f})}];function E(){return t.jsxs("div",{className:"ila",children:[t.jsx(c,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 4. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Maradékos osztás és Euklidesz algoritmusa"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(z,{tabs:u})]})}export{E as default};
