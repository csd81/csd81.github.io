import{j as t,L as B,r as z}from"./index-BNJfr4Vx.js";import{T as q,R as y}from"./kit-CvJHkrYq.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function u(l,n,r){if(r===1n)return 0n;let m=1n;for(l=l%r;n>0n;)n%2n===1n&&(m=m*l%r),n=n/2n,l=l*l%r;return m}function S(l,n){if(n===0n)return[l,1n,0n];const[r,m,c]=S(n,l%n);return[r,c,m-l/n*c]}const _=[3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293];function w(){const[l,n]=z.useState(269),[r,m]=z.useState(241),[c,i]=z.useState(53201),[v,e]=z.useState(48055),k=BigInt(l),h=BigInt(r),b=k*h,d=(k-1n)*(h-1n),s=BigInt(c),[g]=S(s,d),o=g===1n&&s>1n&&s<d;let p=0n;if(o){const[,a]=S(s,d);p=(a%d+d)%d}const f=BigInt(Math.max(0,v)),x=f<b,j=o&&x?u(f,s,b):0n,A=o&&j>0n?u(j,p,b):0n;return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"Interaktív RSA demo"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:".6rem",margin:".6rem 0"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:".78rem",color:"#8892a4",marginBottom:".25rem"},children:"p (prím)"}),t.jsx("select",{className:"ila-select",value:l,onChange:a=>n(+a.target.value),children:_.map(a=>t.jsx("option",{value:a,children:a},a))})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:".78rem",color:"#8892a4",marginBottom:".25rem"},children:"q (prím)"}),t.jsx("select",{className:"ila-select",value:r,onChange:a=>m(+a.target.value),children:_.map(a=>t.jsx("option",{value:a,children:a},a))})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:".78rem",color:"#8892a4",marginBottom:".25rem"},children:"e (nyilvános kulcs, lnko(e,φ)=1)"}),t.jsx("input",{type:"number",className:"ila-num",value:c,onChange:a=>i(+a.target.value),style:{width:120}}),!o&&c>1&&t.jsx("span",{style:{color:"#f87171",fontSize:".72rem",marginLeft:".3rem"},children:"lnko(e,φ)≠1!"})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{fontSize:".78rem",color:"#8892a4",marginBottom:".25rem"},children:["üzenet m (","<"," n)"]}),t.jsx("input",{type:"number",className:"ila-num",value:v,onChange:a=>e(+a.target.value),style:{width:120}}),!x&&t.jsx("span",{style:{color:"#f87171",fontSize:".72rem",marginLeft:".3rem"},children:"m ≥ n!"})]})]}),t.jsxs("div",{style:{fontFamily:"monospace",fontSize:".82rem",lineHeight:2.1,color:"#c9d1d9"},children:[t.jsxs("div",{children:["n = p·q = ",t.jsx("strong",{style:{color:"#a78bfa"},children:b.toString()})]}),t.jsxs("div",{children:["φ(n) = (p−1)(q−1) = ",t.jsx("strong",{style:{color:"#a78bfa"},children:d.toString()})]}),t.jsxs("div",{children:["f (titkos kulcs) = ",t.jsx("strong",{style:{color:"#fbbf24"},children:o?p.toString():"—"})]}),t.jsxs("div",{children:["e·f mod φ(n) = ",t.jsx("strong",{style:{color:o?"#34d399":"#f87171"},children:o?(s*p%d).toString():"—"}),o?" ✓":""]}),t.jsxs("div",{children:["kód K = m^e mod n = ",t.jsx("strong",{style:{color:"#60a5fa"},children:o&&x?j.toString():"—"})]}),t.jsxs("div",{children:["dekód K^f mod n = ",t.jsx("strong",{style:{color:o&&A===f?"#34d399":"#f87171"},children:o?A.toString():"—"}),o&&A===f?" ✓":""]})]})]})}function M(){const[l,n]=z.useState("HELLO"),r=64829n,m=53201n,c=28721n,i=l.toUpperCase().replace(/[^A-Z]/g,"").slice(0,10),v=[];for(let e=0;e<i.length;e+=2){const k=i.charCodeAt(e)-64,h=e+1<i.length?i.charCodeAt(e+1)-64:0,b=i.slice(e,e+2),d=BigInt(k*100+h),s=u(d,m,r),g=u(s,c,r);v.push({raw:b,num:d,enc:s,dec:g})}return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#fbbf24"},children:"HELLO-kódoló (n=64829, e=53201, f=28721)"}),t.jsxs("div",{style:{margin:".5rem 0",fontSize:".85rem"},children:["Szó: ",t.jsx("input",{className:"ila-num",value:l,onChange:e=>n(e.target.value),style:{width:140,textTransform:"uppercase"}}),t.jsx("span",{style:{color:"#8892a4",fontSize:".75rem",marginLeft:".5rem"},children:"Max 10 betű, A–Z"})]}),v.length>0&&t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cayley",style:{fontSize:".82rem",fontFamily:"monospace",minWidth:460},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{textAlign:"left"},children:"blokk"}),t.jsx("th",{style:{textAlign:"left"},children:"szám"}),t.jsx("th",{style:{textAlign:"left"},children:"kód (m^e mod n)"}),t.jsx("th",{style:{textAlign:"left"},children:"vissza"})]})}),t.jsx("tbody",{children:v.map((e,k)=>t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#c9d1d9"},children:e.raw}),t.jsx("td",{style:{color:"#a78bfa"},children:e.num.toString().padStart(4,"0")}),t.jsx("td",{style:{color:"#60a5fa",fontWeight:700},children:e.enc.toString()}),t.jsxs("td",{style:{color:e.dec===e.num?"#34d399":"#f87171"},children:[e.dec.toString().padStart(4,"0")," ",e.dec===e.num?"✓":"✗"]})]},k))})]})})]})}function R(){const l=[2,3,7,15,31],n=61,r=17,m=18,c=l.map(s=>r*s%n),[i,v]=z.useState([1,0,1,1,0]),e=i.reduce((s,g,o)=>s+g*c[o],0),k=e*m%n;let h=k;const b=[0,0,0,0,0];for(let s=l.length-1;s>=0;s--)h>=l[s]&&(b[s]=1,h-=l[s]);const d=b.every((s,g)=>s===i[g]);return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#fbbf24"},children:"10.30 Példa — Hátizsák-demo"}),t.jsxs("div",{style:{fontSize:".82rem",color:"#8892a4",marginBottom:".4rem"},children:["v = (2,3,7,15,31) szupernövekvő  |  m = 61, a = 17, b = 18 (titok)",t.jsx("br",{}),"w ≡ 17·v (mod 61) = (",c.join(", "),") — nyilvános kulcs"]}),t.jsxs("div",{style:{margin:".5rem 0",fontSize:".85rem",display:"flex",flexWrap:"wrap",gap:".5rem",alignItems:"center"},children:[t.jsx("span",{style:{color:"#8892a4"},children:"Üzenet ε:"}),i.map((s,g)=>t.jsxs("label",{style:{cursor:"pointer",display:"flex",alignItems:"center",gap:".2rem"},children:[t.jsx("input",{type:"checkbox",checked:s===1,onChange:o=>{const p=[...i];p[g]=o.target.checked?1:0,v(p)}}),"ε",g]},g)),t.jsxs("span",{style:{color:"#c9d1d9",fontFamily:"monospace"},children:["= (",i.join(", "),")"]})]}),t.jsxs("div",{style:{fontFamily:"monospace",fontSize:".82rem",lineHeight:2,color:"#c9d1d9"},children:[t.jsxs("div",{children:["F = Σ εᵢ·wᵢ = ",t.jsx("strong",{style:{color:"#a78bfa"},children:e})]}),t.jsxs("div",{children:["H ≡ b·F ≡ ",m,"·",e," ≡ ",t.jsx("strong",{style:{color:"#fbbf24"},children:k})," (mod ",n,")"]}),t.jsxs("div",{children:["Mohó dekódolás: (",b.join(", "),") ",d?t.jsx("span",{style:{color:"#34d399"},children:"= eredeti ✓"}):t.jsx("span",{style:{color:"#f87171"},children:"≠ eredeti ✗"})]})]})]})}const E=String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">10. fejezet — Titkosírás nyilvános kulccsal</h5>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">Nyilvános kulcsú titkosírás (public key cryptography)</span>
  <div class="box-body">
    Olyan titkosírás, amelynek menete (kódolás és kulcsa) <strong>bárki számára nyilvános</strong>,
    mégis a levelet csak a címzett tudja elolvasni (dekódolni) — <em>még maga a levél írója sem!</em>
    <br><br>
    Whitfield Diffie és Martin Hellman 1976-ban javasolta az ötletet, és Ron Rivest,
    Adi Shamir és Leonard Adleman 1977-ben adta az első működő algoritmust — az
    <strong>RSA</strong>-t. (A brit hírszerzés GCHQ Ellis–Cocks–Williamson titkos
    rendszere 1973-ban már ugyanezt megalkotta — de csak 1997-ben hozták nyilvánosságra.)
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">Az aszimmetrikus titkosírás négy haszna</span>
  <table class="cayley" style="width:100%;margin-top:.4rem">
    <thead><tr>
      <th style="text-align:left">Tulajdonság</th>
      <th style="text-align:left">Magyarázat</th>
    </tr></thead>
    <tbody>
      <tr>
        <td><strong>Feltörhetetlenség</strong></td>
        <td>A titkos kulcs nélkül a kódolt üzenet csak prímfelbontással olvasható el (kvázi: \(2^{1000}\) év).</td>
      </tr>
      <tr>
        <td><strong>Előzetes megállapodás nélkül</strong></td>
        <td>\(B\) írhat \(A\)-nak anélkül, hogy korábban találkoztak volna.</td>
      </tr>
      <tr>
        <td><strong>Skálázás \(O(t)\) helyett \(O(t^2)\)</strong></td>
        <td>\(t\) résztvevő esetén nem \(\binom{t}{2}\) titok, csak \(t\) nyilvános kulcs.</td>
      </tr>
      <tr>
        <td><strong>Aláírás-hitelesítés</strong></td>
        <td>Bizonyítható, hogy <em>kitől</em> jött az üzenet — és bírósági szinten is.</td>
      </tr>
    </tbody>
  </table>
</div>`,L=String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">10.1 Algoritmus — RSA (Rivest–Shamir–Adleman, 1977)</h5>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">Előkészítés (mindenki külön, titokban)</span>
  <div class="box-body">
    <ol style="line-height:2;margin:.4rem 0">
      <li>Válasszunk két nagy prímet: \(p, q\) (~500–1000 jegy). <em>Kerüljük</em> a közeli prímeket
          (Fermat-faktorizáció) és azokat, ahol \(p-1\) vagy \(q-1\) kis prímosztókkal bír (Pollard \(p-1\)).</li>
      <li>Számoljuk ki \(n := pq\) — ezt nyilvánosságra hozzuk („modulus").</li>
      <li>Számoljuk ki \(\varphi(n) = (p-1)(q-1)\) — ezt <strong>titokban tartjuk</strong>.</li>
      <li>Válasszunk \(e\) számot, amely relatív prím \(\varphi(n)\)-hez (próbálkozás: \(e = \varphi(n)/2 + j\)).
          \(e\) a <strong>nyilvános kulcs</strong>.</li>
      <li>Számoljuk ki \(f\) titkos megoldókulcsot a \(\;ef \equiv 1 \pmod{\varphi(n)}\;\) Diophantoszi
          egyenletből (Euklideszi alg.). \(p, q, \varphi(n)\) adatokat <em>elégetjük</em>!</li>
    </ol>
    <strong>Nyilvános:</strong> \(n, e\) &nbsp; (és a személy neve/elérhetősége).<br>
    <strong>Titkos:</strong> \(f\) &nbsp; (a \(p, q, \varphi(n)\) már nincs meg).
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">A protokoll — B ír A-nak</span>
  <div class="box-body">
    \(B\) az üzenetet \(k &lt; n_A\) darabokra bontja. Minden \(k\) kódja \(A\) nyilvános \((n_A, e_A)\) kulcsával:
    \[K := C_A(k) \equiv k^{e_A} \pmod{n_A}.\]
    \(A\) a saját \(f_A\) titkos kulcsával dekódol:
    \[D_A(K) \equiv K^{f_A} \pmod{n_A}.\]
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">Miért működik? — (10.4) levezetés</span>
  <div class="box-body">
    \[K^{f_A} \equiv (k^{e_A})^{f_A} = k^{e_A f_A} = k^{sy+1} = (k^s)^y \cdot k \equiv 1^y \cdot k \equiv k \pmod{n_A}\]
    az Euler-tétel (\(k^{\varphi(n)} \equiv 1\), ha \(\operatorname{lnko}(k,n)=1\)) alapján.
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">10.4 Állítás</span>
  <div class="box-body">
    \(C_A\) és \(D_A : \mathbb{Z}_{n_A}^* \to \mathbb{Z}_{n_A}^*\) egymás inverz <em>bijektív</em> függvényei:
    \(C_A(D_A(x)) = D_A(C_A(x)) = x\). Tehát a kódolás \(\leftrightarrow\) dekódolás szimmetrikus
    művelet, csak a kulcs van „más kéznél".
  </div>
</div>`,H=String.raw`
<h5 style="color:#fbbf24;font-weight:700;margin:0 0 .75rem">10.13 Példa — Teljes RSA-számolás reális prímekkel</h5>
<div class="ex-box">
  <span class="lbl lbl--ex">Adott: p = 269, q = 241, e = 53 201</span>
  <div class="box-body">
    <strong>(a) φ(n) kiszámítása</strong>
    \[n = pq = 269 \cdot 241 = 64\,829\]
    \[s = \varphi(n) = (p-1)(q-1) = 268 \cdot 240 = 64\,320\]
    <br>
    <strong>(b) f titkos kulcs — Bézout</strong><br>
    Megoldjuk \(ef - sy = 1\), vagyis \(53\,201 f - 64\,320 y = 1\) Euklideszi-algoritmussal:
    \[f = \mathbf{28\,721}\]
    Ellenőrzés: \(53\,201 \cdot 28\,721 = 1\,528\,005\,121 = 23\,756 \cdot 64\,320 + 1\). ✓
    <br><br>
    <strong>(c) Üzenet kódolása x = 48 055</strong>
    \[y \equiv x^e \equiv 48\,055^{53\,201} \equiv \mathbf{61\,606} \pmod{64\,829}\]
    <br>
    <strong>(d) Dekódolás visszaellenőrzéssel</strong>
    \[x \equiv y^f \equiv 61\,606^{28\,721} \equiv \mathbf{48\,055} \pmod{64\,829} \checkmark\]
  </div>
</div>
<div class="ex-box">
  <span class="lbl lbl--ex">(e) „HELLO" kódolása</span>
  <div class="box-body">
    26-betűs ABC: H=08, E=05, L=12, L=12, O=15. Két-két betű egy blokkban:
    \[\texttt{HELLO} = 0008 \;\; 0512 \;\; 1215\]
    <table class="cayley" style="font-family:monospace;font-size:.85rem;margin-top:.4rem">
      <thead><tr><th>blokk</th><th>\(k^e \bmod n\)</th><th>kód</th></tr></thead>
      <tbody>
        <tr><td>0008</td><td>\(8^{53201} \bmod 64829\)</td><td><strong>13 745</strong></td></tr>
        <tr><td>0512</td><td>\(512^{53201} \bmod 64829\)</td><td><strong>57 388</strong></td></tr>
        <tr><td>1215</td><td>\(1215^{53201} \bmod 64829\)</td><td><strong>18 638</strong></td></tr>
      </tbody>
    </table>
    <br>
    <strong>(f) Visszafejtés — 36 376, 28 210, 53 334</strong>
    <table class="cayley" style="font-family:monospace;font-size:.85rem;margin-top:.4rem">
      <thead><tr><th>kód</th><th>\(y^f \bmod n\)</th><th>blokk</th><th>betűk</th></tr></thead>
      <tbody>
        <tr><td>36 376</td><td>\(36376^{28721} \bmod 64829\)</td><td>0016</td><td><strong>P</strong></td></tr>
        <tr><td>28 210</td><td>\(28210^{28721} \bmod 64829\)</td><td>0918</td><td><strong>IR</strong></td></tr>
        <tr><td>53 334</td><td>\(53334^{28721} \bmod 64829\)</td><td>1519</td><td><strong>OS</strong></td></tr>
      </tbody>
    </table>
    Dekódolt üzenet: <strong>P I R O S</strong> (00, 16, 09, 18, 15, 19 → P-I-R-O-S).
  </div>
</div>`,C=String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">10.9 Megj. — Aláírás-hitelesítés (signing)</h5>
<div class="def-box">
  <div class="box-body">
    \(B\) szeretné igazolni, hogy egy üzenetet <strong>valóban ő írt</strong> \(A\)-nak —
    nem egy harmadik fél „\(E\)" hamisította. Ehhez \(B\) a <em>saját titkos \(f_B\)</em> kulcsával
    is „rákódol" egy véletlen \(\ell\) jelsorozatra.
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">Hitelesítési protokoll — 7 lépésben</span>
  <div class="box-body">
    <ol style="line-height:2">
      <li>\(B\) választ egy véletlen \(\ell\) jelsorozatot (név + dátum + véletlen karakterek).</li>
      <li>\(B\) kódolja \(\ell\)-et \(A\) nyilvános kulcsával: \(\;L \equiv \ell^{e_A} \pmod{n_A}\).</li>
      <li>\(B\) a saját titkos \(f_B\)-vel „aláírja" \(\ell\)-et: \(\;\lambda \equiv \ell^{f_B} \pmod{n_B}\).</li>
      <li>\(B\) még egyszer \(A\)-nak kódolja \(\lambda\)-t: \(\;\Lambda \equiv \lambda^{e_A} \pmod{n_A}\).</li>
      <li>\(B\) <strong>\(L\)-et és \(\Lambda\)-t küldi</strong> \(A\)-nak.</li>
      <li>\(A\) dekódolja: \(\;\ell_1 = D_A(L),\;\lambda = D_A(\Lambda),\;\ell_2 = C_B(\lambda) \equiv \lambda^{e_B} \pmod{n_B}\).</li>
      <li>Hitelesnek tekinti, ha \(\boxed{\;\ell_1 = \ell_2\;}\).</li>
    </ol>
    <strong>Miért hiteles?</strong> \(\lambda\)-t csak \(B\) tudja előállítani \(\ell\)-ből, mert
    \(\lambda = \ell^{f_B} \pmod{n_B}\) — a titkos \(f_B\) ismerete nélkül senki sem tudja kiszámolni.
    Ha \(\ell_1 = \ell_2\), akkor \(\lambda\) valóban \(\ell\)-ből származik \(B\) kulcsával.
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">10.10 Megj. — Megrendelés-bizonyítás (non-repudiation)</span>
  <div class="box-body">
    \(A\)-nak bíróság előtt kell igazolnia, hogy az \(\ell\) üzenetet <strong>valóban \(B\) írta</strong>.
    Erre \(A\) átadja a bírónak \(\Lambda\)-t és \(\lambda\)-t (de <em>nem</em> \(D_A\)-t vagy \(D_B\)-t).
    <table class="cayley" style="width:100%;margin-top:.4rem">
      <thead><tr><th>Ellenőrzés</th><th>Mit bizonyít?</th></tr></thead>
      <tbody>
        <tr><td>\(\Lambda = C_A(\lambda)\)?</td><td>Az üzenetet valóban \(A\) kapta meg.</td></tr>
        <tr><td>\(\ell = C_B(\lambda)\)?</td><td>\(\lambda\) valóban \(\ell\) aláírása \(B\)-től.</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="thm-box">
  <div class="box-body">
    <strong>10.11 Összegzés.</strong> A 10.6–10.10 előnyök <em>bármely olyan</em> nyilvános kulcsú
    titkosírásra érvényesek, amelyre a 10.4 Állítás teljesül (\(C \circ D = D \circ C = \mathrm{id}\)).
    Tehát az aláírás-hitelesítés és non-repudiation <em>az RSA-tól független</em> — bármelyik
    invertálható kódolási rendszerre alkalmazható.
    <br><br>
    <strong>Mai gyakorlat.</strong> Az RSA-aláírás ma is a digitális szerződések és tanúsítványok
    (X.509, TLS) alapja. A modern változat <em>elliptikus görbe</em> alapú (ECDSA, Ed25519) — sokkal
    kisebb kulccsal, de ugyanazzal a matematikai elvvel.
  </div>
</div>`,N=String.raw`
<h5 style="color:#fbbf24;font-weight:700;margin:0 0 .75rem">10.17 Példa — RSA-129 kihívás (1977, Scientific American)</h5>
<div class="ex-box">
  <span class="lbl lbl--ex">A kihívás</span>
  <div class="box-body">
    Martin Gardner az 1977. augusztusi <em>Scientific American</em> rovatban tette közzé.
    Rivest–Shamir–Adleman 100 USD jutalmat ajánlott a feltörőnek.
    <br><br>
    <strong>A nyilvános kulcs:</strong> \(e = 9007\) és a 129-jegyű
    <div style="font-family:monospace;background:#0a0c10;border-radius:.3rem;padding:.6rem .8rem;margin:.5rem 0;
                color:#fbbf24;font-size:.8rem;word-break:break-all;line-height:1.7">
      n = 11438162 5757888867 6692357799 7614661201 0218296721<br>
      &nbsp;&nbsp;&nbsp; 2423625625 6184293570 6935245733 8978305971 2356395870<br>
      &nbsp;&nbsp;&nbsp; 50589890751 4759929002 6879543541
    </div>
    <strong>A kódolt K üzenet:</strong>
    <div style="font-family:monospace;background:#0a0c10;border-radius:.3rem;padding:.6rem .8rem;margin:.5rem 0;
                color:#60a5fa;font-size:.8rem;word-break:break-all;line-height:1.7">
      K = 96869613 754622 06147714092 2254355882 90575999112<br>
      &nbsp;&nbsp;&nbsp; 4574319874 6951209308 16298225145 70835693147<br>
      &nbsp;&nbsp;&nbsp; 66228839898 6280133919 9055182994 5157815154
    </div>
    <em style="color:#8892a4">Eredeti becslés (RSA-szerzők, 1977): 40 quadrillió év!</em>
  </div>
</div>
<div class="ex-box">
  <span class="lbl lbl--ex">10.23 Megoldás — 1994 április</span>
  <div class="box-body">
    <strong>Atkins, Graff, Lenstra és Leyland</strong> elosztott számítást szervezett:
    <strong>600+ önkéntes</strong> a világhálón futtatott faktorizációs programot, amikor
    számítógépük tétlen volt. <strong>8 hónap</strong> tartott — az adatok egy
    \(569\,466 \times 524\,338\)-as mátrixot adtak, ami Gauss-eliminációval
    \(188\,614 \times 188\,160\)-ra csökkent. Végső faktorizáció: 16K MasPar P-1
    párhuzamos szuperszámítógépen <strong>45 óra</strong>.
    <br><br>
    <strong>A felbontás \(n = p \cdot q\):</strong>
    <div style="font-family:monospace;background:#0a0c10;border-radius:.3rem;padding:.6rem .8rem;margin:.5rem 0;
                color:#34d399;font-size:.8rem;word-break:break-all;line-height:1.7">
      p = 3490 5295108476 5094914784 9619903898 1334177646<br>
      &nbsp;&nbsp;&nbsp; 3849338784 3990820577<br><br>
      q = 32769 1329932667 0954996198 8190834461 4131776429<br>
      &nbsp;&nbsp;&nbsp; 6799294253 9798288533
    </div>
    <strong>Az üzenet:</strong>
    <div style="font-family:monospace;background:#0a0c10;border-radius:.3rem;padding:.7rem;margin:.5rem 0;
                color:#fbbf24;font-size:1.1rem;text-align:center;font-weight:700">
      „THE MAGIC WORDS ARE SQUEAMISH OSSIFRAGE"
    </div>
    <em style="color:#8892a4;font-size:.8rem">
      „A varázsszó: a kényesgyomrú halászsas." — Squeamish ossifrage = halászsas (Pandion haliaetus).
    </em>
  </div>
</div>
<div class="warn-box">
  <strong>Tanulság.</strong> 1977-ben 129-jegyű RSA „feltörhetetlen" volt. 1994-re már nem.
  Ma <strong>2048-bites RSA</strong> a minimum, <strong>3072–4096 bit</strong> ajánlott. A
  kvantumszámítógép (Shor 1994 algoritmusa) eljövetelével az egész RSA elavult lesz —
  ezért a <em>poszt-kvantum kriptográfia</em> (NIST 2024-es szabványok) a következő nagy ugrás.
</div>`,D=String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">10.2 § — Merkle–Hellman hátizsák-titkosírás (1978)</h5>
<div class="def-box">
  <div class="box-body">
    Az RSA után <em>második</em> nyilvános kulcsú titkosírás. Az 1980-as évek elején
    Adi Shamir <strong>feltörte</strong> — történelmi érdekesség, gyakorlatban nem használjuk.
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">10.24 Probléma — Általános hátizsák (NP-teljes)</span>
  <div class="box-body">
    Adottak \(m_1, \dots, m_k\) és \(M\). Keresendő:
    \[M = \sum_{i=1}^k \varepsilon_i \cdot m_i, \quad \varepsilon_i \in \{0, 1\}.\]
    Hátizsák-analógia: \(M\) teherbírású zsákba mely tárgyakat tegyük be?
    Általánosan <strong>NP-teljes</strong> — gyors algoritmus nem ismert.
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">10.25 Def. — Szupernövekvő sorozat</span>
  <div class="box-body">
    \((m_1, \dots, m_k)\) szupernövekvő, ha minden \(i\)-re:
    \[m_i > \sum_{j=1}^{i-1} m_j.\]
    <strong>10.27 Tétel — Szupernövekvő hátizsák \(O(k)\) idő alatt.</strong>
    Mohó algoritmus: csökkenő \(m_k, m_{k-1}, \dots, m_1\) sorrendben próbáljuk beletenni —
    ha belefér, kötelező betenni (a többi együttesen sem érné el \(m_i\)-t).
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">10.29 — Merkle–Hellman titkosírás (vázlat)</span>
  <div class="box-body">
    <ol style="line-height:2">
      <li>Válasszunk titkos \(\vec v = (v_0, \dots, v_{k-1})\) szupernövekvő sorozatot és \(m = v_k\) prím modulust.</li>
      <li>Keressünk \(a\)-t \(\operatorname{lnko}(a, m) = 1\)-gyel, és számoljuk \(b \equiv a^{-1} \pmod m\).</li>
      <li>Az <strong>elrejtett</strong> sorozat: \(w_i \equiv a \cdot v_i \pmod m\) — ez már nem szupernövekvő!</li>
      <li><strong>Nyilvános kulcs:</strong> \(\vec w\). <strong>Titkos:</strong> \(b, m\).</li>
    </ol>
    <strong>Kódolás:</strong> \(F = \sum \varepsilon_i \cdot w_i\) (üzenet bitenkénti).<br>
    <strong>Dekódolás:</strong> \(H \equiv b \cdot F \equiv \sum \varepsilon_i \cdot v_i \pmod m\) — szupernövekvő hátizsák, lineáris időben!
  </div>
</div>
<div class="warn-box">
  <strong>10.32 Megj. — Shamir feltörése (1982).</strong>
  Shamir polinomidőben feltörte az egyszeres Merkle–Hellman rendszert!
  Megmutatta: bár \(\vec w\) nem szupernövekvő, a struktúra (szupernövekvő sorozatból
  adódó) kihasználható. Brickell 1985-ben az iterált változatot is feltörte.
  A hátizsák-titkosírás <strong>ma nem használjuk biztonsági céllal.</strong>
</div>`,I=[{id:"intro",label:"Áttekintés",content:t.jsx(y,{html:E})},{id:"rsa",label:"10.1 RSA algoritmus",content:t.jsxs("div",{children:[t.jsx(y,{html:L}),t.jsx(w,{})]})},{id:"pelda",label:"RSA példa + HELLO",content:t.jsxs("div",{children:[t.jsx(y,{html:H}),t.jsx(M,{})]})},{id:"aliras",label:"Aláírás-hitelesítés",content:t.jsx(y,{html:C})},{id:"rsa129",label:"RSA-129 feltörés",content:t.jsx(y,{html:N})},{id:"hatizsak",label:"10.2 Hátizsák",content:t.jsxs("div",{children:[t.jsx(y,{html:D}),t.jsx(R,{})]})}];function F(){return t.jsxs("div",{className:"ila",children:[t.jsx(B,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 10. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Titkosírás nyilvános kulccsal"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(q,{tabs:I})]})}export{F as default};
