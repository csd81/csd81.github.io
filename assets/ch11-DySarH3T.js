import{j as t,L as T,r as v}from"./index-BNJfr4Vx.js";import{T as B,R as f}from"./kit-CvJHkrYq.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function C(n){let h=n;return()=>(h=h*1664525+1013904223&2147483647,h)}const a=143n,y=[2n,3n,5n,7n],z=y.map(n=>n*n%a);function N(){const[n,h]=v.useState([]),[p,u]=v.useState(!1),[_,x]=v.useState(42),r=y.length;function S(){const e=C(_+n.length*37);if(p){const o=Array.from({length:r},()=>e()%2),d=Array.from({length:r},()=>e()%2),c=BigInt(e()%140+2),i=BigInt(e()%140+2),m=i*i%a;let g=c,l=m;for(let s=0;s<r;s++)d[s]===1&&(l=l*z[s]%a);if(l=l%a,o.every((s,M)=>s===d[M])){g=c;for(let s=0;s<r;s++)o[s]===1&&(g=g*y[s]%a)}const F=g*g%a;let b=m;for(let s=0;s<r;s++)d[s]===1&&(b=b*z[s]%a);b=b%a,h(s=>[...s,{v:i,w:m,e:d,b:g,check:F===b,cheated:!0}])}else{const o=BigInt(e()%140+2),d=o*o%a,c=Array.from({length:r},()=>e()%2);let i=o;for(let l=0;l<r;l++)c[l]===1&&(i=i*y[l]%a);let m=d;for(let l=0;l<r;l++)c[l]===1&&(m=m*z[l]%a);m=m%a;const g=i*i%a;h(l=>[...l,{v:o,w:d,e:c,b:i,check:g===m,cheated:!1}])}x(o=>o+1)}function w(){h([]),x(42)}const j=n.filter(e=>e.check).length,k=n.length,K=k>0&&n.filter(e=>e.cheated&&e.check).length/n.filter(e=>e.cheated).length||0;return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#34d399"},children:"Feige–Fiat–Shamir — Kör-szimulátor"}),t.jsxs("div",{style:{fontSize:".8rem",color:"#8892a4",margin:".3rem 0 .5rem"},children:["Paraméterek: m = ",a.toString()," = 11·13, k = ",r," titkos szám",t.jsx("br",{}),"Titkok (r): (",y.map(e=>e.toString()).join(", "),")  |  Nyilvános négyzetek (s): (",z.map(e=>e.toString()).join(", "),")"]}),t.jsxs("div",{style:{display:"flex",gap:".5rem",flexWrap:"wrap",marginBottom:".5rem",alignItems:"center"},children:[t.jsx("button",{className:"ex-btn is-active",onClick:S,children:"Kör futtatása"}),t.jsx("button",{className:"ex-btn",onClick:w,children:"Alaphelyzetbe"}),t.jsxs("label",{style:{fontSize:".85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:".3rem"},children:[t.jsx("input",{type:"checkbox",checked:p,onChange:e=>u(e.target.checked)}),"Csaló mód (r ismerete nélkül)"]})]}),n.length>0&&t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cayley",style:{fontSize:".76rem",fontFamily:"monospace",minWidth:500},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{children:"v"}),t.jsx("th",{children:"w=v²"}),t.jsx("th",{children:"kihívás e"}),t.jsx("th",{children:"válasz b"}),t.jsx("th",{children:"b²"}),t.jsx("th",{children:"w·∏sᵢᵉⁱ"}),t.jsx("th",{children:"eredmény"})]})}),t.jsx("tbody",{children:n.map((e,o)=>{let d=e.w;for(let i=0;i<r;i++)e.e[i]===1&&(d=d*z[i]%a);const c=e.b*e.b%a;return t.jsxs("tr",{style:e.cheated?{background:"rgba(248,113,113,.06)"}:void 0,children:[t.jsx("td",{style:{color:"#8892a4"},children:o+1}),t.jsx("td",{children:e.v.toString()}),t.jsx("td",{children:e.w.toString()}),t.jsxs("td",{children:["(",e.e.join(","),")"]}),t.jsx("td",{style:{color:"#60a5fa"},children:e.b.toString()}),t.jsx("td",{children:c.toString()}),t.jsx("td",{children:d.toString()}),t.jsxs("td",{style:{color:e.check?"#34d399":"#f87171",fontWeight:700},children:[e.check?"✓ ÁTMENT":"✗ BUKOTT",e.cheated?" 🎲":""]})]},o)})})]})}),k>0&&t.jsxs("div",{style:{fontFamily:"monospace",fontSize:".82rem",marginTop:".5rem",lineHeight:1.9},children:[t.jsxs("div",{children:["Összes kör: ",k,"  |  Átment: ",t.jsx("strong",{style:{color:"#34d399"},children:j}),"  |  Elbukott: ",t.jsx("strong",{style:{color:"#f87171"},children:k-j})]}),n.some(e=>e.cheated)&&t.jsxs("div",{children:["Csaló körök sikerességi arány: ",t.jsxs("strong",{style:{color:"#fbbf24"},children:[(K*100).toFixed(1),"%"]})," (várható: ~",(100/Math.pow(2,r)).toFixed(1),"%)"]}),t.jsxs("div",{children:["Becsült csalási esély ",k," kör után: ",t.jsxs("strong",{style:{color:"#a78bfa"},children:[(Math.pow(.5,k)*100).toFixed(6),"%"]})]})]})]})}const A=String.raw`
<h5 style="color:#34d399;font-weight:700;margin:0 0 .75rem">11. fejezet — Bizonyítás nulla információval</h5>
<div class="def-box">
  <span class="lbl" style="color:#34d399">Zero-Knowledge Proof (ZKP)</span>
  <div class="box-body">
    Paradoxnak tűnő, de mély eredmény: a Válaszadó (V, <em>Prover</em>) be tudja bizonyítani
    a Kérdezőnek (K, <em>Verifier</em>), hogy birtokában van egy titoknak, <strong>anélkül</strong>,
    hogy a titok bármely részét is felfedné — még a beszélgetés végén sem.
    <br><br>
    <strong>Goldwasser, Micali, Rackoff 1985:</strong> a ZKP fogalmának első formális definíciója
    (CRYPTO konferencia). Három tulajdonság:
    <ul style="margin:.4rem 0 0;">
      <li><strong>Completeness</strong> — ha V tényleg ismeri a titkot, K elfogadja.</li>
      <li><strong>Soundness</strong> — ha V <em>nem</em> ismeri, \(\varepsilon\) esélynél nagyobb arányban K nem fogadja el.</li>
      <li><strong>Zero-knowledge</strong> — K <em>semmit</em> nem tanul meg a titokról a párbeszéd alatt.</li>
    </ul>
    Az alábbi algoritmus a Csirmaz László (BME, Matematikai Intézet) által ismertetett változat (1992).
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#34d399">Miért fontos?</span>
  <div class="box-body">
    <ul style="line-height:2;margin:.3rem 0">
      <li><strong>Belépés/azonosítás</strong> jelszó leütése nélkül — szervernek sem mutatjuk meg.</li>
      <li><strong>Banki tranzakciók</strong> hitelkártya-szám megosztása nélkül.</li>
      <li><strong>Blockchain</strong> zk-SNARK / zk-STARK technológia: titkos tranzakciók (Zcash, Tornado Cash).</li>
      <li><strong>Cryptographic voting</strong> — bizonyítható korrekt szavazatszámlálás, de a szavazat marad titok.</li>
    </ul>
  </div>
</div>`,I=String.raw`
<h5 style="color:#34d399;font-weight:700;margin:0 0 .75rem">11.1 Algoritmus — Feige–Fiat–Shamir (1988)</h5>
<div class="def-box">
  <span class="lbl" style="color:#34d399">Előkészítés (egyszer, titokban)</span>
  <div class="box-body">
    <ol style="line-height:2">
      <li>V választ egy nagy összetett \(m\)-et — pl. \(m = pq\) két prím szorzata, \(p, q\) titok.</li>
      <li>V választ titkos PIN-kódot: \((r_1, r_2, \dots, r_k) \in \mathbb{Z}_m^*\), ahol \(k\) legalább pár tucat.</li>
      <li>Nyilvánosságra hozza a négyzeteket:
        \[s_i \equiv r_i^2 \pmod m, \quad i = 1, \dots, k.\]
      </li>
    </ol>
    V <em>nem</em> a PIN-kódot, hanem annak <em>négyzeteit</em> (\(s_i\)) hozza nyilvánosságra.
    Az inverz művelet — <strong>kvadratikus gyökvonás \(\pmod m\)</strong> — nagy \(m\)-re
    gyors algoritmus nélkül (\(\Leftrightarrow\) \(m\) faktorizálása).
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#34d399">Egy bizonyítási kör (round)</span>
  <div class="box-body">
    <strong>0) V választ egy új \(v\)-t.</strong> Minden körben friss véletlen \(v \in \mathbb{Z}_m^*\), és átadja K-nak a négyzetét:
    \[w \equiv v^2 \pmod m\]
    <br>
    <strong>1) K kihívást küld.</strong>
    K véletlen kérdést küld \((e_1, e_2, \dots, e_k) \in \{0, 1\}^k\), kb. fele 0, fele 1.
    <br><br>
    <strong>2) V válaszol.</strong>
    V titokban kiszámolja és átadja:
    \[b \equiv v \cdot \prod_{i=1}^k r_i^{e_i} \pmod m\]
    Csak azokkal az \(r_i\)-kkal szoroz, ahol \(e_i = 1\). <em>\(v\) „elfedi" a többit.</em>
    <br><br>
    <strong>3) K ellenőrzése.</strong>
    K megnézi:
    \[b^2 \;\stackrel{?}{\equiv}\; w \cdot \prod_{i=1}^k s_i^{e_i} \pmod m\]
    (Igaz, mert \(b^2 = v^2 \prod r_i^{2 e_i} = w \prod s_i^{e_i}\).)
  </div>
</div>
<div class="thm-box">
  <div class="box-body">
    Ha V tényleg ismeri \((r_1, \dots, r_k)\)-t, mindig átmegy. <strong>Ha nem,</strong> egy
    kör csak \(\varepsilon &lt; 1\) valószínűséggel sikerül. (Mivel \(\mathbb{Z}_m^*\)-ban minden
    négyzetszámnak <em>pontosan két</em> négyzetgyöke van, csaló max. \(1/2\)-eséllyel találgathat.)
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#34d399">Megerősítés — ismételd t-szer</span>
  <div class="box-body">
    Ha K nagyon biztos akar lenni, a köröket \(t\)-szer megismételi <strong>új \(v\)-vel</strong>
    minden alkalommal. Csalási esély: \(\varepsilon^t\), ami
    \[\varepsilon = \tfrac{1}{2}, \;t = 200 \;\Longrightarrow\; 2^{-200} &lt; 10^{-60}.\]
    \(t = 200\) kör a mai gépeken észre sem vehető, mégis \(10^{60}\)-szor ritkább eset,
    mint a Földön élő emberek számának (\(\sim 10^{10}\)) százszorosa. Gyakorlatilag 100% biztonság.
  </div>
</div>`,P=String.raw`
<h5 style="color:#34d399;font-weight:700;margin:0 0 .75rem">Biztonság és alkalmazások</h5>
<div class="def-box">
  <span class="lbl" style="color:#34d399">Miért nem szimulálható?</span>
  <div class="box-body">
    Kérdés: a teljes párbeszédet (\(s_i, w, e_i, b\)) <em>bárki hallhatja</em>. Miért nem tudja egy
    harmadik fél (vagy K maga) később V-ként szerepelni?
    <br><br>
    Mert új körben K új \((e_i)\) kihívást fog küldeni — a megfelelő \(b'\) kiszámításához
    szükség van az \((r_i)\) titokra. <strong>Egy adott \((e_i)\)-re passzoló \(b\)</strong>
    kiszámolható (mert a beszélgetés alatt \(v\) már megválasztva), de <em>új</em> \((e_i)\)-re nem.
    <br><br>
    Formálisan: ha valaki tud új körben átmenni, akkor a \(\mathbb{Z}_m^*\)-ban kvadratikus
    gyököt tud vonni — ami ekvivalens \(m\) faktorizációjával. Tehát:
  </div>
</div>
<div class="thm-box">
  <div class="box-body">
    <strong>Tétel.</strong> Feige–Fiat–Shamir biztonsága \(\Leftrightarrow\) \(m\) faktorizálása nehéz.
    Ha valaki polinomidőben tudna faktorizálni, mind az RSA, mind ez a ZKP megdől.
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#34d399">Tulajdonságok ellenőrzése</span>
  <table class="cayley" style="width:100%;margin-top:.4rem">
    <thead><tr><th>Tulajdonság</th><th>Bizonyítás</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Completeness</strong></td>
        <td>\(b^2 = v^2 \prod r_i^{2 e_i} = w \prod s_i^{e_i}\) azonosság miatt mindig átmegy.</td>
      </tr>
      <tr>
        <td><strong>Soundness</strong></td>
        <td>\(t\) körön át \(2^{-t}\) a csalási esély (kvadratikus gyökvonás nehéz).</td>
      </tr>
      <tr>
        <td><strong>Zero-knowledge</strong></td>
        <td>K csak a véletlen kihívásokra látja a válaszokat. Mivel \((s_i)\) <em>nyilvános</em>
            és \((r_i)\) négyzetgyöke nem számolható ki, K maga sem többet — szimulátor program
            is képes ugyanezt a beszélgetést <em>\(r_i\) ismerete nélkül</em> előállítani.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="info-box">
  <span class="lbl" style="color:#34d399">Modern alkalmazások</span>
  <table class="cayley" style="width:100%;margin-top:.4rem">
    <thead><tr><th>Technológia</th><th>Felhasználás</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>zk-SNARK</strong> (Groth 2010, Pinocchio 2013)</td>
        <td>Zcash kriptopénz, „shielded transactions"</td>
      </tr>
      <tr>
        <td><strong>zk-STARK</strong> (Ben-Sasson 2018)</td>
        <td>StarkWare, Ethereum L2 (StarkNet)</td>
      </tr>
      <tr>
        <td><strong>Bulletproofs</strong> (Bünz 2017)</td>
        <td>Monero range proofs (tranzakciós összegek elrejtése)</td>
      </tr>
      <tr>
        <td><strong>FIDO2 / WebAuthn</strong></td>
        <td>Jelszó nélküli bejelentkezés modern webhelyeken</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="thm-box">
  <div class="box-body">
    Az igazi áttörést a <em>nem-interaktív</em> ZKP (Fiat–Shamir heurisztika, 1986) adta —
    egyetlen üzenetben be lehet bizonyítani egy állítást. Erre épül minden mai blockchain-ZKP.
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#34d399">Hivatkozások</span>
  <div class="box-body" style="font-size:.82rem;line-height:1.9">
    <ul>
      <li>Csirmaz László: <a href="http://www.math-inst.hu/~csirmaz/kript/mattan.html" style="color:#34d399">math-inst.hu/~csirmaz/kript/mattan.html</a></li>
      <li>Goldwasser–Micali–Rackoff: <em>The knowledge complexity of interactive proof systems</em>, SIAM J. Comput. 18 (1989), 186–208</li>
      <li>Feige–Fiat–Shamir: <em>Zero-knowledge proofs of identity</em>, J. Cryptology 1 (1988), 77–94</li>
    </ul>
  </div>
</div>`,R=[{id:"intro",label:"Áttekintés",content:t.jsx(f,{html:A})},{id:"protocol",label:"Feige–Fiat–Shamir protokoll",content:t.jsxs("div",{children:[t.jsx(f,{html:I}),t.jsx(N,{})]})},{id:"security",label:"Biztonság & alkalmazás",content:t.jsx(f,{html:P})}];function H(){return t.jsxs("div",{className:"ila",children:[t.jsx(T,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 11. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Bizonyítás nulla információval"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(B,{tabs:R})]})}export{H as default};
