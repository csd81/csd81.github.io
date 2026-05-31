import{j as t,L as S,r as k}from"./index-Cd-_-Ba2.js";import{T as _,R as z}from"./kit-CoMAMuWy.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function w(){const[u,d]=k.useState(0),[l,m]=k.useState([]),[o,b]=k.useState(!0),y=5,n=1001,v=()=>{const e=Math.floor(Math.random()*(n-1))+1,i=e*e%n,g=Array.from({length:y},()=>Math.round(Math.random())),f=[2,3,5,7,11],p=f.map(s=>s*s%n);let a;o?a=g.reduce((s,c,h)=>s*(c?f[h]:1)%n,e):a=Math.floor(Math.random()*(n-1))+1;const x=g.reduce((s,c,h)=>s*(c?p[h]:1)%n,i),j=a*a%n===x%n;m(s=>[...s.slice(-9),{w:i,e:g,b:a,check:j}]),d(s=>s+1)},r=l.length>0&&l.every(e=>e.check);return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"Feige–Fiat–Shamir ZKP szimulátor"}),t.jsxs("p",{style:{fontSize:".82rem",margin:".4rem 0"},children:["Kis modulus demo (m=",n,", k=",y," PIN-bit). Prover:  ",t.jsx("button",{className:`op-btn${o?" is-active":""}`,onClick:()=>{b(!0),m([]),d(0)},children:"Tud"})," ",t.jsx("button",{className:`op-btn${o?"":" is-active"}`,onClick:()=>{b(!1),m([]),d(0)},children:"Nem tud (csaló)"})]}),t.jsx("button",{className:"op-btn",onClick:v,style:{marginBottom:".5rem"},children:"Új kör futtatása"}),t.jsx("div",{style:{fontFamily:"monospace",fontSize:".8rem",lineHeight:1.8},children:l.map((e,i)=>t.jsxs("div",{style:{color:e.check?"#c9d1d9":"#f87171"},children:["Kör ",u-l.length+i+1,": w=",e.w,", e=[",e.e.join(","),"], b=",e.b," ",t.jsx("strong",{style:{color:e.check?"#34d399":"#ef4444"},children:e.check?"✓ megfelelt":"✗ lebukott!"})]},i))}),l.length>=5&&t.jsx("div",{className:r&&o?"def-box":"warn-box",style:{marginTop:".5rem",fontWeight:700,fontSize:".88rem"},children:r&&o?`${l.length} kör, mind rendben — valószínűleg ismeri a titkot (${(100*(1-Math.pow(.5,l.length))).toFixed(1)}% biztos)`:r&&!o?`FIGYELEM: a csaló ${l.length} körön is átcsúszott! (${Math.pow(.5,l.length).toFixed(4)} valószínűségű véletlen szerencse)`:"Lebukott a csaló!"})]})}const K=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">11. fejezet — Bizonyítás nulla információval</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    <strong>Zero-Knowledge Proof (ZKP)</strong> — paradoxnak tűnő, de mély eredmény:
    a Válaszadó (V, <em>Prover</em>) be tudja bizonyítani a Kérdezőnek (K, <em>Verifier</em>),
    hogy birtokában van egy titoknak, <strong>anélkül</strong>, hogy a titok bármely részét felfedné.
  </p>
</div>
<div class="thm-box">
  <strong>Goldwasser, Micali, Rackoff 1985 — Három tulajdonság:</strong>
  <ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li><strong>Completeness</strong> — ha V tényleg ismeri a titkot, K elfogadja.</li>
    <li><strong>Soundness</strong> — ha V <em>nem</em> ismeri, K legfeljebb \(\varepsilon\) eséllyel fogadja el.</li>
    <li><strong>Zero-knowledge</strong> — K semmit nem tanul meg a titokról a párbeszéd alatt.</li>
  </ul>
</div>
<ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
  <li><strong>Belépés/azonosítás</strong> jelszó leütése nélkül — szervernek sem mutatjuk meg.</li>
  <li><strong>Blockchain</strong> zk-SNARK / zk-STARK technológia: titkos tranzakciók (Zcash).</li>
  <li><strong>Cryptographic voting</strong> — bizonyítható korrekt szavazatszámlálás.</li>
</ul>`,N=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">11.1 Algoritmus — Feige–Fiat–Shamir (1988)</span>
  <strong>Előkészítés (egyszer, titokban):</strong>
  <ol style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li>V választ nagy összetett \(m = pq\) — \(p, q\) titok.</li>
    <li>V választ titkos PIN-kódot: \((r_1, \dots, r_k) \in \mathbb{Z}_m^*\).</li>
    <li>Nyilvánosságra hozza: \(s_i \equiv r_i^2 \pmod m,\ i = 1, \dots, k.\)</li>
  </ol>
</div>
<div class="info-box">
  <strong>Egy bizonyítási kör:</strong>
  <ol style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li>V választ friss véletlen \(v \in \mathbb{Z}_m^*\), átadja \(w \equiv v^2 \pmod m.\)</li>
    <li>K küld véletlen \((e_1, \dots, e_k) \in \{0,1\}^k\).</li>
    <li>V visszaadja: \(b \equiv v \cdot \prod_{i: e_i=1} r_i \pmod m.\)</li>
    <li>K ellenőrzi: \(b^2 \equiv w \cdot \prod s_i^{e_i} \pmod m.\)</li>
  </ol>
  Ha V tényleg ismeri \((r_i)\)-ket, mindig átmegy. Csaló max. \(\tfrac{1}{2}\) eséllyel találgat.
</div>
<div class="thm-box">
  Ismételd \(t\)-szer: csalási esély \(\varepsilon^t\):
  \[\varepsilon = \tfrac{1}{2},\ t = 200 \;\Longrightarrow\; 2^{-200} &lt; 10^{-60}\]
  \(t=200\) kör a mai gépeken észre sem vehető — <strong>gyakorlatilag 100% biztonság</strong>.
</div>`,F=String.raw`
<div class="thm-box">
  <strong>Tulajdonságok összefoglalása:</strong>
  <table class="cayley" style="font-size:.83rem;margin:.4rem 0;width:100%">
    <thead><tr><th style="text-align:left">Tulajdonság</th><th style="text-align:left">Bizonyítás</th></tr></thead>
    <tbody>
      <tr><td><strong>Completeness</strong></td><td>\(b^2 = v^2 \prod r_i^{2e_i} = w \prod s_i^{e_i}\) azonosság miatt mindig átmegy.</td></tr>
      <tr><td><strong>Soundness</strong></td><td>\(t\) körön át \(2^{-t}\) a csalási esély.</td></tr>
      <tr><td><strong>Zero-knowledge</strong></td><td>Szimulátor program ugyanezt a párbeszédet \(r_i\) ismerete nélkül elő tudja állítani.</td></tr>
    </tbody>
  </table>
</div>
<div class="thm-box">
  <strong>Tétel.</strong> Feige–Fiat–Shamir biztonsága \(\Leftrightarrow\) \(m\) faktorizálása nehéz.
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Technológia</th><th style="text-align:left">Felhasználás</th></tr></thead>
  <tbody>
    <tr><td><strong>zk-SNARK</strong> (Groth 2010)</td><td>Zcash kriptopénz, shielded transactions</td></tr>
    <tr><td><strong>zk-STARK</strong> (Ben-Sasson 2018)</td><td>StarkWare, Ethereum L2 (StarkNet)</td></tr>
    <tr><td><strong>Bulletproofs</strong> (Bünz 2017)</td><td>Monero range proofs</td></tr>
    <tr><td><strong>FIDO2 / WebAuthn</strong></td><td>Jelszó nélküli bejelentkezés</td></tr>
  </tbody>
</table>
<div class="thm-box">
  Az igazi áttörést a <em>nem-interaktív</em> ZKP (Fiat–Shamir heurisztika, 1986) adta —
  egyetlen üzenetben be lehet bizonyítani egy állítást. Erre épül minden mai blockchain-ZKP.
</div>`,P=[{id:"intro",label:"Áttekintés",content:t.jsx(z,{html:K})},{id:"protocol",label:"Feige–Fiat–Shamir",content:t.jsx(z,{html:N})},{id:"sim",label:"ZKP szimulátor",content:t.jsx(w,{})},{id:"security",label:"Biztonság & alkalmazás",content:t.jsx(z,{html:F})}];function R(){return t.jsxs("div",{className:"ila",children:[t.jsx(S,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 11. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Bizonyítás nulla információval"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(_,{tabs:P})]})}export{R as default};
