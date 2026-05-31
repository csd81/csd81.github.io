import{j as t,L,r as p}from"./index-BNJfr4Vx.js";import{T as P,R as i}from"./kit-CvJHkrYq.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function C(){const[_,S]=p.useState(9867),[u,w]=p.useState(8855),[s,A]=p.useState(759);function T(e,h){let k=1,b=0,y=0,x=1;const f=[];let d=Math.abs(e),l=Math.abs(h),q=!1;if(d<l){const n=d;d=l,l=n,q=!0}let E=1;for(;l>0;){const n=Math.floor(d/l),M=d%l,Z=k-b*n,K=y-x*n;f.push({i:E,q:n,r:M,xi:b,zeta:x}),k=b,b=Z,y=x,x=K,d=l,l=M,E++}let z=k,v=y;if(q){const n=z;z=v,v=n}return{gcd:d,u:z,v,steps:f}}const o=Math.abs(_),r=Math.abs(u),{gcd:a,u:N,v:B,steps:D}=T(o,r),c=a>0&&s%a===0,g=c?N*(s/a):0,m=c?B*(s/a):0,j=o*g+r*m;return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"5.4 / 5.11 Kiterjesztett Euklideszi — ax + by = c megoldó"}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center",margin:".5rem 0",fontSize:".85rem"},children:[t.jsxs("span",{children:["a = ",t.jsx("input",{type:"number",className:"ila-num",value:_,onChange:e=>S(+e.target.value)})]}),t.jsxs("span",{children:["b = ",t.jsx("input",{type:"number",className:"ila-num",value:u,onChange:e=>w(+e.target.value)})]}),t.jsxs("span",{children:["c = ",t.jsx("input",{type:"number",className:"ila-num",value:s,onChange:e=>A(+e.target.value)})]})]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cayley",style:{fontFamily:"monospace",fontSize:".82rem",width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"i"}),t.jsx("th",{children:"q_i"}),t.jsx("th",{children:"r_i"}),t.jsx("th",{children:"ξ_i"}),t.jsx("th",{children:"ζ_i"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"−1"}),t.jsx("td",{children:"—"}),t.jsx("td",{children:"—"}),t.jsx("td",{children:"1"}),t.jsx("td",{children:"0"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"0"}),t.jsx("td",{children:"—"}),t.jsx("td",{children:"—"}),t.jsx("td",{children:"0"}),t.jsx("td",{children:"1"})]}),D.map((e,h)=>t.jsxs("tr",{style:e.r===0?{background:"rgba(167,139,250,.13)"}:void 0,children:[t.jsx("td",{children:e.i}),t.jsx("td",{children:e.q}),t.jsx("td",{style:{color:e.r===0?"#fbbf24":void 0,fontWeight:e.r===0?700:void 0},children:e.r}),t.jsx("td",{style:{color:"#a78bfa"},children:e.xi}),t.jsx("td",{style:{color:"#a78bfa"},children:e.zeta})]},h))]})]})}),t.jsxs("div",{style:{fontSize:".85rem",margin:".4rem 0"},children:["lnko(",o,", ",r,") = ",t.jsx("strong",{style:{color:"#fbbf24"},children:a}),"  ",c?t.jsxs("span",{style:{color:"#34d399"},children:["✓ ",a," | ",s," — megoldható"]}):t.jsxs("span",{style:{color:"#ef4444"},children:["✗ ",a," ∤ ",s," — nincs egész megoldás"]})]}),c&&t.jsxs("div",{className:"def-box",style:{fontFamily:"monospace",fontSize:".85rem"},children:["Egyik megoldás: x₀ = ",t.jsx("strong",{style:{color:"#a78bfa"},children:g}),",  y₀ = ",t.jsx("strong",{style:{color:"#a78bfa"},children:m}),t.jsx("br",{}),"Ellenőrzés: ",o,"·",g," + ",r,"·",m," = ",t.jsx("strong",{style:{color:"#fbbf24"},children:j}),j===s?" ✓":" ✗",t.jsx("br",{}),t.jsxs("span",{style:{color:"#8892a4",fontSize:".78rem"},children:["Általános megoldás: x = ",g," + ",r/a,"k,  y = ",m," − ",o/a,"k  (k ∈ ℤ)"]})]})]})}const F=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">5. fejezet — Lineáris Diophantoszi egyenletek</span>
  <div class="box-body">
    <strong>Diophantosz</strong> (Kr.u. ~250) görög matematikus foglalkozott egyenletek
    <em>egész</em> gyökeivel. Innen ered az elnevezés: minden olyan egyenletet
    <strong>Diophantoszi-nak</strong> hívunk, amelynek az egész megoldásait keressük.
  </div>
</div>
<div class="def-box">
  <span class="lbl lbl--thm">5.1 Definíció — Lineáris Diophantoszi egyenlet</span>
  <div class="box-body">
    Adottak \(a_1, \dots, a_n, c \in \mathbb{Z}\) számok;
    kerestendők \(x_1, \dots, x_n \in \mathbb{Z}\), amelyekre
    \[a_1 x_1 + a_2 x_2 + \cdots + a_n x_n = c.\]
    Ezt \(n\)-változós <strong>lineáris Diophantoszi egyenletnek</strong> hívjuk.
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">5.2 Tétel — Megoldhatóság</span>
  <div class="box-body">
    Az egyenlet pontosan akkor oldható meg egész számokban, ha
    \[\boxed{\;\operatorname{lnko}(a_1, \dots, a_n) \mid c\;}\]
    <strong>Szükségesség:</strong> Ha \(d = \operatorname{lnko}(a_1, \dots, a_n)\), akkor \(d \mid a_i\) minden \(i\)-re,
    így \(d \mid (a_1 x_1 + \cdots + a_n x_n) = c.\)
    <br/>
    <strong>Elégségesség:</strong> A konstruktív bizonyítás az alábbi algoritmusok <em>létezéséből</em> következik —
    az algoritmus nem csak a megoldás létét garantálja, hanem polinomidőben meg is találja.
  </div>
</div>`,I=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">5.1 § — A kétismeretlenes eset</span>
  <div class="box-body">
    Megoldjuk az \(ax + by = c\) egyenletet, ahol \(a, b, c \in \mathbb{Z}\) adott,
    \(\operatorname{lnko}(a, b) \mid c\), és \(x, y \in \mathbb{Z}\) keresett.
    <br/><br/>
    Elegendő először az <em>egyszerűsített</em> egyenletet megoldani:
    \[a x + b y = \operatorname{lnko}(a, b)\]
    Mert ha ennek van \((u_0, v_0)\) megoldása, akkor \(c\)-re átskálázzuk:
    \[x_0 := u_0 \cdot \frac{c}{\operatorname{lnko}(a, b)}, \qquad y_0 := v_0 \cdot \frac{c}{\operatorname{lnko}(a, b)}.\]
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">5.3 Tétel — Bézout-azonosság</span>
  <div class="box-body">
    Minden \(a, b \in \mathbb{Z}\)-hez léteznek olyan \(u_0, v_0 \in \mathbb{Z}\), hogy
    \[\operatorname{lnko}(a, b) = a \cdot u_0 + b \cdot v_0.\]
    Étienne Bézout (1730–1783) — a formulát konstruktívan adó algoritmus a Kiterjesztett Euklideszi.
  </div>
</div>

<div class="def-box">
  <span class="lbl" style="color:#a78bfa">5.4 Algoritmus — Kiterjesztett Euklideszi (visszaforgatás)</span>
  <div class="box-body">
    Felhasználjuk a 4.3 algoritmus sorait, <strong>alulról felfelé</strong> olvasva:
    \[\begin{aligned}
      a &= b \cdot q_1 + r_1 \\
      &\vdots \\
      r_{m-3} &= r_{m-2} \cdot q_{m-1} + r_{m-1} \\
      r_{m-2} &= r_{m-1} \cdot q_m + r_m \\
      r_{m-1} &= r_m \cdot q_{m+1} + 0
    \end{aligned}\]
    Visszaforgatás:
    \[\begin{aligned}
      \operatorname{lnko}(a, b) = r_m &= r_{m-2} - r_{m-1} \cdot q_m \\
        &= r_{m-2} - (r_{m-3} - r_{m-2} \cdot q_{m-1}) \cdot q_m \\
        &= r_{m-3} \cdot u_{m-2} + r_{m-2} \cdot v_{m-2} \\
        &\vdots \\
        &= a \cdot u_0 + b \cdot v_0.
    \end{aligned}\]
    <div class="thm-box" style="margin-top:.4rem">
      <strong>5.5 Megjegyzés.</strong> Az \(u_i, v_i\) együtthatókat <em>nem kell külön
      kiszámolnunk</em> — menet közben „automatikusan" megkapjuk őket.
    </div>
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">5.10 Tétel — Összes megoldás</span>
  <div class="box-body">
    Ha az \(ax + by = c\) egyenletnek létezik egy \((x_0, y_0)\) megoldása, akkor az <em>összes</em> gyök:
    \[x = x_0 + k \cdot \frac{b}{\operatorname{lnko}(a, b)}, \qquad y = y_0 - k \cdot \frac{a}{\operatorname{lnko}(a, b)}, \qquad k \in \mathbb{Z}.\]
    Másképpen \(\operatorname{lkkt}\)-vel:
    \[x = x_0 + k \cdot \frac{\operatorname{lkkt}(a, b)}{a}, \qquad y = y_0 - k \cdot \frac{\operatorname{lkkt}(a, b)}{b}.\]
  </div>
</div>`,R=String.raw`
<div class="ex-box">
  <span class="lbl lbl--ex">5.6 Példa — \(9867x + 8855y = 759\)</span>
  <div class="box-body">
    <strong>Megoldhatóság ellenőrzés.</strong>
    \(\operatorname{lnko}(9867, 8855) = 253\) a 4.6 Példa alapján,
    és \(253 \mid 759\) (mert \(759/253 = 3\)). ✓
  </div>
</div>

<div class="thm-box">
  <div class="box-body">
    <strong>1. lépés — Euklideszi algoritmus (a 4.6 példa)</strong>
    <table class="cayley" style="font-family:monospace;font-size:.84rem;margin:.4rem 0;width:100%">
      <thead><tr><th style="text-align:left">egyenlet</th><th style="text-align:left">maradék</th></tr></thead>
      <tbody>
        <tr><td>\(\langle 9867 \rangle = \langle 8855 \rangle \cdot 1 + \langle 1012 \rangle\)</td><td>1012</td></tr>
        <tr><td>\(\langle 8855 \rangle = \langle 1012 \rangle \cdot 8 + \langle 759 \rangle\)</td><td>759</td></tr>
        <tr><td>\(\langle 1012 \rangle = \langle 759 \rangle \cdot 1 + \langle 253 \rangle\)</td><td>253</td></tr>
        <tr><td>\(\langle 759 \rangle = \langle 253 \rangle \cdot 3 + \langle 0 \rangle\)</td><td>0 (STOP)</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="thm-box">
  <div class="box-body">
    <strong>2. lépés — Visszaforgatás \(\operatorname{lnko}(9867, 8855) = 253\)-ig</strong>
    \[\begin{aligned}
      253 &= 1 \cdot \langle 1012 \rangle + (-1) \cdot \langle 759 \rangle \\
          &= 1 \cdot \langle 1012 \rangle + (-1) \cdot (\langle 8855 \rangle - 8 \cdot \langle 1012 \rangle) \\
          &= (-1) \cdot \langle 8855 \rangle + 9 \cdot \langle 1012 \rangle \\
          &= (-1) \cdot \langle 8855 \rangle + 9 \cdot (\langle 9867 \rangle - 1 \cdot \langle 8855 \rangle) \\
          &= \boxed{9 \cdot \langle 9867 \rangle - 10 \cdot \langle 8855 \rangle}
    \end{aligned}\]
    Tehát \(u_0 = 9,\ v_0 = -10\) a Bézout-megoldás:
    \[9 \cdot 9867 - 10 \cdot 8855 = 88803 - 88550 = 253. \checkmark\]
  </div>
</div>

<div class="def-box">
  <div class="box-body">
    <strong>3. lépés — Átskálázás \(c = 759\)-re.</strong>
    Mivel \(759 / 253 = 3\):
    \[x_0 = 9 \cdot 3 = \mathbf{27}, \qquad y_0 = -10 \cdot 3 = \mathbf{-30}.\]
    Ellenőrzés: \(9867 \cdot 27 + 8855 \cdot (-30) = 266409 - 265650 = 759\). ✓
  </div>
</div>`,V=String.raw`
<div class="thm-box">
  <span class="lbl lbl--thm">5.10 Tétel — Összes megoldás (folytatás)</span>
  <div class="box-body">
    Visszamenve az 5.6 példára: \(\operatorname{lnko}(9867, 8855) = 253\),
    tehát \(b/d = 8855/253 = 35\), \(a/d = 9867/253 = 39\).
    <br/>Az összes megoldás:
    \[x = 27 + 35 k, \quad y = -30 - 39 k, \quad k \in \mathbb{Z}.\]
  </div>
</div>

<div class="def-box">
  <span class="lbl" style="color:#a78bfa">5.11 Algoritmus — Egyetlen menetes változat (Knuth)</span>
  <div class="box-body">
    Az 5.4 algoritmus baja, hogy mindkét irány során az összes \(q_i\) és \(r_i\) értéket
    tárolni kell. <strong>Knuth [KD] 1.köt. 37.old.</strong> egy elegánsabb megoldást ad:
    a Bézout-együtthatókat <em>menet közben</em> számoljuk.
    <br/><br/>
    Kezdjük: \(\xi_{-1} := 1, \zeta_{-1} := 0;\ \xi_0 := 0, \zeta_0 := 1.\) Majd minden \(r_i\) kiszámításával egyidejűleg:
    \[\xi_i := \xi_{i-2} - \xi_{i-1} \cdot q_i, \qquad \zeta_i := \zeta_{i-2} - \zeta_{i-1} \cdot q_i.\]
    Ekkor \(\xi_m, \zeta_m\) megadja a Bézout-megoldást.
  </div>
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">5.12 Példa — \(9867x + 8855y = 759\) egyetlen menetben</span>
  <div class="box-body">
    <table class="cayley" style="font-family:monospace;font-size:.83rem;width:100%;margin:.4rem 0">
      <thead><tr><th>i</th><th>\(q_i\)</th><th>\(r_i\)</th><th>\(\xi_i\)</th><th>\(\zeta_i\)</th></tr></thead>
      <tbody>
        <tr><td>−1</td><td>—</td><td>—</td><td>1</td><td>0</td></tr>
        <tr><td>0</td><td>—</td><td>—</td><td>0</td><td>1</td></tr>
        <tr><td>1</td><td>1</td><td>1012</td><td>1 − 0·1 = <strong>1</strong></td><td>0 − 1·1 = <strong>−1</strong></td></tr>
        <tr><td>2</td><td>8</td><td>759</td><td>0 − 1·8 = <strong>−8</strong></td><td>1 − (−1)·8 = <strong>9</strong></td></tr>
        <tr><td>3</td><td>1</td><td>253</td><td>1 − (−8)·1 = <strong>9</strong></td><td>−1 − 9·1 = <strong>−10</strong></td></tr>
        <tr><td>4</td><td>3</td><td>0 (STOP)</td><td>—</td><td>—</td></tr>
      </tbody>
    </table>
    Tehát \(\xi_3 = 9, \zeta_3 = -10\) megadja \(9 \cdot 9867 - 10 \cdot 8855 = 253\) — egyezik az 5.6 példa eredményével.
  </div>
</div>

<div class="info-box">
  <span class="lbl">5.9 Megjegyzés — Sebesség</span>
  <div class="box-body">
    Lamé 4.8 tétele alapján az 5.4–5.11 algoritmusok mind <strong>lineárisak</strong>
    — az inputméret függvényében a lehető leggyorsabbak. Az \(u, v\) együtthatók egyenkénti
    kiszámítása csak konstans szorzót ad hozzá.
  </div>
</div>`,H=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">5.2 § — \(a_1 x_1 + \cdots + a_n x_n = c\) egyenletek</span>
  <div class="box-body">
    Az általános esetet \(n\)-re vonatkozó <strong>teljes indukcióval</strong> oldjuk meg:
    az Euklideszi algoritmus többszöri alkalmazásával. Ez egyszersmind az 5.2 Tétel
    <em>elégségességét</em> is bizonyítja.
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">5.13 Megjegyzés — A 3-változós eset algoritmusa</span>
  <div class="box-body">
    Megoldjuk \(ax + by + cz = m\)-et 4 lépésben:
    <table class="cayley" style="font-size:.83rem;margin:.4rem 0;width:100%">
      <thead><tr><th style="text-align:left">Lépés</th><th style="text-align:left">Művelet</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>(0)</strong></td>
          <td>Megoldhatóság: \(\operatorname{lnko}(a, b, c) \mid m\) ?</td>
        </tr>
        <tr>
          <td><strong>(1)</strong></td>
          <td>\(d := \operatorname{lnko}(a, b)\) — Euklidesz. Megkapjuk \(ax_0 + by_0 = d\) Bézout-megoldást.</td>
        </tr>
        <tr>
          <td><strong>(2)</strong></td>
          <td>\(ax + by = td\) általános megoldás:
            \(x = tx_0 + \tfrac{\operatorname{lkkt}(a,b)}{a}k,\ y = ty_0 - \tfrac{\operatorname{lkkt}(a,b)}{b}k\)</td>
        </tr>
        <tr>
          <td><strong>(3)</strong></td>
          <td>\(\delta := \operatorname{lnko}(d, c)\) — Euklidesz ismét</td>
        </tr>
        <tr>
          <td><strong>(4)</strong></td>
          <td>\(dt + cz = m\) megoldása:
            \(t = \tfrac{m}{\delta}t_0 + \tfrac{\operatorname{lkkt}(d,c)}{d}\ell,\ z = \tfrac{m}{\delta}z_0 - \tfrac{\operatorname{lkkt}(d,c)}{c}\ell\)</td>
        </tr>
      </tbody>
    </table>
    Két szabad paraméter: \(k, \ell \in \mathbb{Z}\). Megoldhatósági feltétel: \(\delta \mid m\).
    Általánosabban \(n\)-változós Diophantoszi egyenletnek \(n - 1\) szabad egész paramétere van.
  </div>
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">5.14 Példa — \(12x + 30y + 15z = 18\)</span>
  <div class="box-body">
    <table class="cayley" style="font-size:.83rem;margin:.4rem 0;width:100%">
      <thead><tr><th style="text-align:left">Lépés</th><th style="text-align:left">Számolás</th></tr></thead>
      <tbody>
        <tr><td>(0)</td><td>\(\operatorname{lnko}(12, 30, 15) = 3\), \(3 \mid 18\) ✓ — van megoldás.</td></tr>
        <tr><td>(1)</td><td>\(d = \operatorname{lnko}(12, 30) = 6\) &nbsp;(\(12 \cdot (-2) + 30 \cdot 1 = 6\))</td></tr>
        <tr><td>(2)</td><td>\(12x + 30y = 6t\) általános megoldás: \(x = -2t + 5k,\ y = t - 2k\)</td></tr>
        <tr><td>(3)</td><td>\(\delta = \operatorname{lnko}(6, 15) = 3\)</td></tr>
        <tr><td>(4)</td><td>\(6t + 15z = 18\) általános megoldás: \(t = -12 + 5\ell,\ z = 6 - 2\ell\)</td></tr>
      </tbody>
    </table>
    <strong>Behelyettesítve (2)-be:</strong>
    \[\begin{aligned}
      x &= (-12 + 5\ell)(-2) + 5k = 24 - 10\ell + 5k \\
      y &= (-12 + 5\ell) - 2k = -12 + 5\ell - 2k \\
      z &= 6 - 2\ell
    \end{aligned} \qquad k, \ell \in \mathbb{Z}.\]
    Ellenőrzés \((k = 0, \ell = 0)\): \(x = 24,\ y = -12,\ z = 6\).
    \[12 \cdot 24 + 30 \cdot (-12) + 15 \cdot 6 = 288 - 360 + 90 = 18. \checkmark\]
  </div>
</div>`,O=[{id:"intro",label:"Áttekintés",content:t.jsx(i,{html:F})},{id:"axby",label:"5.1 ax+by=c",content:t.jsx(i,{html:I})},{id:"pelda",label:"5.6 Példa",content:t.jsx(i,{html:R})},{id:"general",label:"Általános megoldás",content:t.jsxs("div",{children:[t.jsx(i,{html:V}),t.jsx(C,{})]})},{id:"three",label:"5.2 n-változós",content:t.jsx(i,{html:H})}];function Q(){return t.jsxs("div",{className:"ila",children:[t.jsx(L,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 5. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Lineáris Diophantoszi egyenletek"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(P,{tabs:O})]})}export{Q as default};
