import{j as e,L as u,r as f}from"./index-BNJfr4Vx.js";import{T as v,R as y}from"./kit-CvJHkrYq.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function j(){var o;const[c,z]=f.useState(7),h=23,x=r=>{if(r<=1)return{steps:[],isPrime:!1,Mp:0n};const l=(1n<<BigInt(r))-1n,g=[4n];let d=4n;for(let p=0;p<r-2;p++)d=((d*d-2n)%l+l)%l,g.push(d);return{steps:g,isPrime:d===0n,Mp:l}},n=Math.min(Math.max(2,c),h),{steps:i,isPrime:m,Mp:b}=x(n),s=i.slice(0,18),t=[{p:"2, 3, 5, 7",digits:"1–3",discovery:"antikum"},{p:"13",digits:"4",discovery:"1456 (ismeretlen)"},{p:"127",digits:"39",discovery:"Lucas 1876 — 75 évig rekord!"},{p:"521–2281",digits:"157–687",discovery:"Robinson 1952 — első gépi"},{p:"6 972 593",digits:"2 098 960",discovery:"1999 — első millió-jegyű"},{p:"43 112 609",digits:"12 978 189",discovery:"2008 — Smith, UCLA"},{p:"82 589 933",digits:"24 862 048",discovery:"2018 — GIMPS (jelenlegi rekord)"}];return e.jsxs("div",{children:[e.jsxs("div",{className:"info-box",children:[e.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"Lucas–Lehmer prímteszt — interaktív"}),e.jsx(y,{html:String.raw`<p style="font-size:.83rem;margin:.4rem 0">Adott \(p\) prímre az \(M_p = 2^p - 1\) Mersenne-szám prímtesztje. Definiáljuk: \(a_1 := 4,\; a_{n+1} := a_n^2 - 2 \pmod{M_p}\). \(M_p\) prím \(\iff a_{p-1} \equiv 0 \pmod{M_p}\).</p>`}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",margin:".5rem 0",fontSize:".85rem"},children:[e.jsxs("span",{children:["p = ",e.jsx("input",{type:"number",min:2,max:h,className:"ila-num",value:c,onChange:r=>z(+r.target.value)})]}),e.jsxs("span",{style:{color:"#8892a4",fontSize:".78rem"},children:["(p ≤ ",h," böngészőben; GIMPS: C/GPU millió-jegyű)"]})]}),e.jsxs("div",{style:{fontSize:".83rem",color:"#c4b5fd",fontFamily:"monospace",marginBottom:".4rem"},children:["M",e.jsx("sub",{children:n})," = 2",e.jsx("sup",{children:n})," − 1 = ",e.jsx("strong",{children:b.toString()})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"cayley",style:{fontFamily:"monospace",fontSize:".8rem",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"i"}),e.jsx("th",{children:"aᵢ mod M_p"}),e.jsx("th",{children:"aᵢ ≡ 0?"})]})}),e.jsxs("tbody",{children:[s.map((r,l)=>e.jsxs("tr",{style:l===i.length-1?{background:"rgba(167,139,250,.15)"}:void 0,children:[e.jsx("td",{children:l+1}),e.jsx("td",{style:{color:r===0n?"#34d399":void 0},children:r.toString()}),e.jsx("td",{children:r===0n?"✓ IGEN":"—"})]},l)),i.length>18&&e.jsx("tr",{children:e.jsxs("td",{colSpan:3,style:{color:"#64748b",textAlign:"center"},children:["… összesen ",n-1," lépés (csak az első 18 látszik) …"]})})]})]})}),e.jsxs("div",{className:m?"def-box":"warn-box",style:{marginTop:".6rem",fontWeight:700},children:["a",e.jsx("sub",{children:n-1})," ≡ ",m?"0":((o=i[n-2])==null?void 0:o.toString().slice(0,20))+"…"," (mod M",e.jsx("sub",{children:n}),")  ⟹ ",m?e.jsxs("span",{style:{color:"#34d399"},children:["M",e.jsx("sub",{children:n})," = ",b.toString()," PRÍM ✓"]}):e.jsxs("span",{style:{color:"#ef4444"},children:["M",e.jsx("sub",{children:n})," = ",b.toString()," ÖSSZETETT ✗"]})]})]}),e.jsxs("div",{className:"info-box",style:{marginTop:".6rem"},children:[e.jsx("span",{className:"lbl",style:{color:"#8892a4"},children:"Python implementáció"}),e.jsx("pre",{style:{fontSize:".78rem",lineHeight:1.6,margin:".4rem 0",color:"#c9d1d9",overflowX:"auto"},children:`def lucas_lehmer(p):
    Mp = (1 << p) - 1       # 2^p - 1
    s = 4
    for _ in range(p - 2):  # p−1 lépés, az utolsó index p−1
        s = (s * s - 2) % Mp
    return s == 0           # True <=> Mp prím`})]}),e.jsxs("div",{className:"info-box",style:{marginTop:".6rem"},children:[e.jsx("span",{className:"lbl",style:{color:"#8892a4"},children:"Ismert Mersenne-prímek a történelemben"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"cayley",style:{fontSize:".82rem",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"p"}),e.jsx("th",{children:"Mₚ jegyei"}),e.jsx("th",{children:"Felfedezés"})]})}),e.jsx("tbody",{children:t.map((r,l)=>e.jsxs("tr",{children:[e.jsx("td",{style:{fontFamily:"monospace"},children:r.p}),e.jsx("td",{children:r.digits}),e.jsx("td",{style:{fontSize:".78rem"},children:r.discovery})]},l))})]})})]})]})}function M(){const[c,z]=f.useState(17),h=f.useRef(null),x=[3,5,17,257,65537];function n(s){if(s<3)return!1;let t=s;for(;t%2===0;)t/=2;if(t===1)return!0;for(const o of x)if(t%o===0&&(t/=o,t%o===0))return!1;return t===1}const i=n(c),m=Math.max(3,Math.min(100,c));f.useEffect(()=>{const s=h.current;if(!s)return;const t=s.getContext("2d");if(!t)return;const o=s.width,r=s.height;t.clearRect(0,0,o,r);const l=o/2,g=r/2,d=Math.min(o,r)/2-12;t.strokeStyle="#334155",t.lineWidth=1,t.beginPath(),t.arc(l,g,d,0,2*Math.PI),t.stroke();const p=[];for(let a=0;a<m;a++){const k=2*Math.PI*a/m-Math.PI/2;p.push({x:l+d*Math.cos(k),y:g+d*Math.sin(k)})}t.strokeStyle=i?"#7c3aed":"#dc2626",t.lineWidth=1.5,t.beginPath(),p.forEach((a,k)=>k===0?t.moveTo(a.x,a.y):t.lineTo(a.x,a.y)),t.closePath(),t.stroke(),p.forEach(a=>{t.fillStyle=i?"#a78bfa":"#f87171",t.beginPath(),t.arc(a.x,a.y,3,0,2*Math.PI),t.fill()}),t.fillStyle="#fbbf24",t.beginPath(),t.arc(l,g,3,0,2*Math.PI),t.fill()},[m,i]);const b=[3,4,5,6,8,10,12,15,16,17,20,24,30];return e.jsx("div",{children:e.jsxs("div",{className:"info-box",children:[e.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"9.11 Gauss — Szabályos sokszög-szerkeszthetőség"}),e.jsxs("div",{style:{fontSize:".83rem",margin:".4rem 0"},children:["n = ",e.jsx("input",{type:"number",min:3,max:100,className:"ila-num",value:c,onChange:s=>z(+s.target.value)}),"  ",e.jsxs("span",{style:{color:i?"#34d399":"#ef4444",fontWeight:700},children:[m,"-oldalú: ",i?"✓ SZERKESZTHETŐ":"✗ NEM SZERKESZTHETŐ"]})]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:".3rem",margin:".4rem 0"},children:b.map(s=>e.jsxs("button",{className:"ex-btn",style:{background:n(s)?void 0:"#1e293b",borderColor:n(s)?"#7c3aed":"#475569"},onClick:()=>z(s),children:[s,n(s)?" ✓":" ✗"]},s))}),e.jsx("canvas",{ref:h,width:260,height:260,style:{width:260,maxWidth:"100%",background:"#0a0c10",borderRadius:".4rem",display:"block",margin:"0 auto"}}),e.jsx("div",{style:{fontSize:".74rem",color:"#64748b",textAlign:"center",marginTop:".3rem"},children:"Lila = szerkeszthető  |  Piros = nem szerkeszthető"})]})})}const _=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">9. fejezet — Prímkeresés</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    Évszázadok óta minden matematikus „prímképletet" keresett — egy formulát, amellyel
    prímeket generálhatunk. Nagyméretű prímek megtalálása nem véletlenszerű bepötyögetéssel,
    hanem <em>speciális alakú</em> számokon teszteléssel hatékonyabb.
  </p>
</div>

<div class="thm-box">
  <strong>Két fő prímcsalád:</strong> Mersenne \(M_p = 2^p - 1\) és Fermat \(F_n = 2^{2^n} + 1\).
  Mersenne-prímek a mai prímrekordok: <strong>multimillió jegyű prímeket</strong> találnak velük.
  Fermat-prímek viszont \(n \leq 4\) óta egy sem ismert.
</div>

<div class="info-box">
  <strong>Hivatkozások</strong>
  <ul style="font-size:.85rem;line-height:1.9;margin:.4rem 0">
    <li><a href="https://www.mersenne.org" style="color:#a78bfa">mersenne.org</a> — GIMPS elosztott Mersenne-keresés (jutalmazási rendszerrel)</li>
    <li><a href="https://primes.utm.edu" style="color:#a78bfa">primes.utm.edu</a> — Top-5000 ismert prímek</li>
  </ul>
</div>`,S=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">9.1 Definíció — Mersenne-számok</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Marin <strong>Mersenne</strong> (1588–1648), francia szerzetes-matematikus.
  </p>
  <table class="cayley" style="width:100%;font-size:.82rem;margin:.4rem 0">
    <thead><tr><th>Fogalom</th><th>Definíció</th></tr></thead>
    <tbody>
      <tr><td><strong>Mersenne-szám</strong></td><td>\(M_p := 2^p - 1\) &nbsp;(\(p \in \mathbb{P}\) prím — akár \(M_p\) összetett is lehet)</td></tr>
      <tr><td><strong>Mersenne-prím</strong></td><td>\(M_p \in \mathbb{P}\) — pl. \(M_2=3,\, M_3=7,\, M_5=31,\, M_7=127,\dots\)</td></tr>
    </tbody>
  </table>
</div>

<div class="thm-box">
  <strong>9.2 Megjegyzés — Miért csak prím \(p\)?</strong><br/>
  Az \(a^u - b^u = (a-b)(a^{u-1} + \cdots + b^{u-1})\) azonosság miatt \(k = uv\) (\(u \geq 3\)) esetén:
  \[2^{uv} - 1 = (2^v - 1)\bigl((2^v)^{u-1} + \cdots + 1\bigr)\]
  tehát ha \(k\) összetett, \(M_k\) is összetett. Szükséges feltétel: \(p\) prím legyen.
  <br/><br/>
  <em>De nem elégséges!</em> \(M_{11} = 2047 = 23 \cdot 89\) — Mersenne maga is tévedett,
  \(M_{67}\)-et prímnek hitte (Cole 1903 megmutatta: \(193\,707\,721 \times 761\,838\,257\,287\)).
</div>

<div class="info-box">
  <strong>Ismert Mersenne-prímek a történelem során</strong>
  <table class="cayley" style="width:100%;font-size:.82rem;margin:.4rem 0">
    <thead><tr><th>\(p\)</th><th>\(M_p\) jegyei</th><th>Felfedezés</th></tr></thead>
    <tbody>
      <tr><td>\(2, 3, 5, 7\)</td><td>1–3</td><td>antikum</td></tr>
      <tr><td>\(13\)</td><td>4</td><td>1456 (nam. ismeretlen)</td></tr>
      <tr><td>\(127\)</td><td>39</td><td>Lucas 1876 — 75 évig rekord!</td></tr>
      <tr><td>\(521-2281\)</td><td>157–687</td><td>Robinson 1952 — első számítógépes</td></tr>
      <tr><td>\(6\,972\,593\) (M38)</td><td>2 098 960</td><td>1999 — első millió-jegyű</td></tr>
      <tr><td>\(43\,112\,609\) (M47)</td><td>12 978 189</td><td>2008 — Smith, UCLA, $100k jutalom</td></tr>
      <tr><td>\(82\,589\,933\) (M51)</td><td>24 862 048</td><td>2018 — GIMPS, jelenlegi rekord</td></tr>
    </tbody>
  </table>
</div>

<div class="thm-box">
  <strong>9.5 Probléma (nyitott).</strong> Végtelen sok Mersenne-prím létezik-e? Nem tudjuk.
  Az is nyitott, hogy végtelen sok összetett \(M_p\) van-e (sejtjük: igen).
</div>

<div class="def-box">
  <strong>9.6–9.7 — Tökéletes számok</strong><br/>
  \(n\) <strong>tökéletes szám</strong>, ha \(n\) megegyezik <em>valódi</em> osztói
  (\(1 + \cdots + n/2\)) összegével.
  Pl. \(6 = 1+2+3,\; 28 = 1+2+4+7+14,\; 496,\; 8128, \dots\)
  <br/><br/>
  <strong>9.7 Tétel (Euklidesz).</strong> Ha \(2^m - 1\) prím, akkor \(2^{m-1} \cdot (2^m - 1)\) tökéletes szám.
  <br/><br/>
  Euler 2000 évvel később bizonyította a fordítottját: <em>minden páros tökéletes szám</em> ilyen alakú.
  <strong>Páratlan tökéletes szám létezése — máig megoldatlan!</strong>
</div>`,P=String.raw`
<div class="thm-box">
  <span class="lbl lbl--thm">9.3 Tétel — Lucas–Lehmer prímteszt</span>
  <p style="margin:.4rem 0">
    Legyen \(p > 2\) prím, \(M_p = 2^p - 1\). Definiáljuk:
    \[a_1 := 4, \qquad a_{n+1} \equiv a_n^2 - 2 \pmod{M_p}.\]
  </p>
  <div class="def-box" style="margin:.4rem 0">
    \(M_p\) pontosan akkor prím, ha
    \[a_{p-1} \equiv 0 \pmod{M_p}.\]
  </div>
</div>

<p style="font-size:.84rem;color:#94a3b8;margin:.5rem 0;">
  Édouard Lucas (1842–1891) sejtette 1870-ben, Derrick Henry Lehmer (1905–1991) bizonyította
  1930 körül. A bizonyítás egyik elegáns útja a \(\mathbb{Z}[\sqrt{3}]\) gyűrűt használja
  (lásd Bruce: <em>„A Really Trivial Proof of the Lucas–Lehmer Test"</em>, Amer. Math. Monthly 1993).
</p>

<div class="info-box">
  <strong>9.4 Megjegyzés — Miért hatékony?</strong>
  <ul style="font-size:.85rem;line-height:1.9;margin:.4rem 0">
    <li>A teszt <em>egyetlen</em> Mersenne-számra fókuszál — \(p\) prím jegyei szerint <strong>polinomidejű</strong>.</li>
    <li>\(a_n\) mindvégig \(\bmod\, M_p\) marad — mérete \(O(p)\) bit.</li>
    <li>\(p - 1\) négyzetreemelés szükséges \(\bmod\, M_p\). Szorzás \(\bmod\, M_p\) kifejezetten gyors:
        \(M_p = 2^p - 1 \Rightarrow\) a \(\bmod\) csak <em>bit-rotáció</em>!</li>
  </ul>
</div>

<div class="thm-box">
  Ezen tulajdonságok miatt indult útjára a <strong>GIMPS</strong> (Great Internet Mersenne Prime Search,
  1996-tól) — globális elosztott számítás Lucas–Lehmer teszttel. A jutalmazási rendszer eredménye:
  minden új Mersenne-prímet GIMPS talált 1996 óta.
</div>`,T=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">9.8 Definíció — Fermat-számok</span>
  \[F_n := 2^{2^n} + 1, \qquad n \in \mathbb{N}.\]
</div>

<div class="info-box">
  <strong>9.9 Megjegyzés — Miért \(2^n\) a kitevő?</strong><br/>
  Az \(a^{2\ell + 1} + b^{2\ell+1} = (a + b)(\cdots)\) azonosság miatt
  csak \(k = 2^n\) alakú kitevőkre lehet \(2^k + 1\) prím:
  \[2^{2\ell + 1} + 1 = 3 \cdot (\cdots) \text{ — osztható 3-mal.}\]
</div>

<div class="info-box">
  <strong>Ismert Fermat-számok</strong>
  <table class="cayley" style="width:100%;font-size:.82rem;margin:.4rem 0">
    <thead><tr><th>\(n\)</th><th>\(F_n\)</th><th>Prím?</th></tr></thead>
    <tbody>
      <tr><td>0</td><td>3</td><td style="color:#34d399">✓</td></tr>
      <tr><td>1</td><td>5</td><td style="color:#34d399">✓</td></tr>
      <tr><td>2</td><td>17</td><td style="color:#34d399">✓</td></tr>
      <tr><td>3</td><td>257</td><td style="color:#34d399">✓</td></tr>
      <tr><td>4</td><td>65 537</td><td style="color:#34d399">✓ &nbsp;<em>(eddigi legnagyobb ismert Fermat-prím!)</em></td></tr>
      <tr><td>5</td><td>4 294 967 297</td><td style="color:#ef4444">= 641 × 6 700 417 &nbsp;<strong>(Euler 1732)</strong></td></tr>
      <tr><td>6–32</td><td>—</td><td style="color:#ef4444">mind összetett (vizsgált)</td></tr>
    </tbody>
  </table>
</div>

<div class="thm-box">
  Fermat 1650-ben azt sejtette, hogy <em>minden</em> \(F_n\) prím. Euler 82 év múlva (1732)
  cáfolta — \(F_5\)-ben megtalálta a \(641\) osztót. Azóta <strong>egyetlen új Fermat-prímet sem találtak</strong>.
</div>

<div class="def-box">
  <strong>9.10 Probléma (nyitott).</strong> Van-e végtelen sok Fermat-prím? És összetett?
  Mai sejtés: \(n \geq 5\)-re mind összetett — de bizonyítatlan.
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">9.11 Tétel — Gauss (1796) szabályos sokszög-szerkesztés</span>
  <p style="margin:.4rem 0">
    \(n\)-oldalú szabályos sokszög akkor és csak akkor szerkeszthető
    <strong>körzővel és vonalzóval</strong>, ha
    \[n = 2^s \quad \text{vagy} \quad n = 2^s \cdot q_1 \cdots q_r\]
    ahol \(q_i\) <strong>különböző Fermat-prímek</strong>.
  </p>
</div>

<div class="def-box">
  Gauss 19 évesen (1796) fedezte fel — ezzel a felfedezéssel döntötte el, hogy matematikus
  lesz, nem filológus! Megszerkesztette a <strong>17-oldalú</strong> szabályos sokszöget,
  ami 2000 évig nyitott probléma volt. Sírján is ez szerepel.
</div>

<div class="info-box">
  <strong>Szerkeszthető sokszögek \(n \leq 30\)</strong>
  <table class="cayley" style="width:100%;font-size:.82rem;margin:.4rem 0">
    <thead><tr><th>Szerkeszthető ✓</th><th>Nem szerkeszthető ✗</th></tr></thead>
    <tbody>
      <tr>
        <td style="color:#34d399">3, 4, 5, 6, 8, 10, 12, 15, 16, 17, 20, 24, 30</td>
        <td style="color:#f59e0b">7, 9, 11, 13, 14, 18, 19, 21, 22, 23, 25, 26, 27, 28, 29</td>
      </tr>
    </tbody>
  </table>
  <p style="font-size:.78rem;color:#94a3b8;margin:.3rem 0">
    \(n = 257\) (Hermes 1894, 10 év munka) és \(n = 65\,537\) — elvileg szerkeszthetők,
    de senki sem kísérelte meg ténylegesen.
  </p>
</div>

<div class="thm-box">
  <strong>9.12 Állítás — Tizedestört-jellemzés.</strong>
  \(F_n\) akkor és csak akkor prím, ha az \(\tfrac{1}{F_n}\) szakaszos tizedes tört
  periódusának hossza pontosan \(2^{2^n}\).
  <br/>
  Pl. \(\tfrac{1}{17} = 0{,}\overline{0588235294117647}\) — periódus \(16 = 2^4\) ✓.
</div>`,L=[{id:"intro",label:"Áttekintés",content:e.jsx(y,{html:_})},{id:"mersenne",label:"9.1 Mersenne-számok",content:e.jsx(y,{html:S})},{id:"ll-theory",label:"Lucas–Lehmer elmélet",content:e.jsx(y,{html:P})},{id:"ll-runner",label:"Lucas–Lehmer teszt",content:e.jsx(j,{})},{id:"fermat",label:"9.2 Fermat-prímek",content:e.jsxs("div",{children:[e.jsx(y,{html:T}),e.jsx(M,{})]})}];function I(){return e.jsxs("div",{className:"ila",children:[e.jsx(u,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),e.jsx("p",{className:"ila__kicker",children:"Számelmélet — 9. fejezet"}),e.jsx("h1",{className:"ila__title",children:"Prímkeresés"}),e.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),e.jsx(v,{tabs:L})]})}export{I as default};
