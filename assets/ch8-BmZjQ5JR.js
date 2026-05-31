import{j as t,L as K,r as h}from"./index-CAqBiqM_.js";import{T as B,R as A}from"./kit-C3piugpg.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function W(){const[r,q]=h.useState(120),i=Math.min(200,Math.max(20,r)),g=Array(i+1).fill(!0);g[0]=g[1]=!1;for(let e=2;e*e<=i;e++)if(g[e])for(let n=e*e;n<=i;n+=e)g[n]=!1;const z=g.map((e,n)=>e?n:-1).filter(e=>e>0),f=20,M=Math.ceil(i/f),k=28,m=24,c=4,p=f*k+c*2,d=M*m+c*2,x=h.useRef(null);return h.useEffect(()=>{const e=x.current;if(!e)return;const n=e.getContext("2d");if(n){n.clearRect(0,0,p,d);for(let a=2;a<=i;a++){const l=(a-1)%f,s=Math.floor((a-1)/f),o=c+l*k,v=c+s*m;n.fillStyle=g[a]?"#7c3aed":"#1e293b",n.strokeStyle=g[a]?"#a78bfa":"#334155",n.lineWidth=.5,n.beginPath(),n.roundRect(o+1,v+1,k-3,m-3,3),n.fill(),n.stroke(),n.fillStyle=g[a]?"#fff":"#475569",n.font=`${g[a]?600:400} 9px monospace`,n.textAlign="center",n.textBaseline="middle",n.fillText(String(a),o+k/2,v+m/2)}}},[i]),t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"Eratoszthenész szitája — vizualizáció"}),t.jsxs("div",{style:{fontSize:".83rem",margin:".4rem 0"},children:["Határig: ",t.jsx("input",{type:"number",min:20,max:200,className:"ila-num",value:r,onChange:e=>q(+e.target.value)}),"  ",t.jsxs("span",{style:{color:"#8892a4"},children:["Prímek 2–",i,": ",t.jsxs("strong",{style:{color:"#a78bfa"},children:[z.length," db"]}),"  (",z.slice(0,12).join(", "),z.length>12?", …":"",")"]})]}),t.jsx("canvas",{ref:x,width:p,height:d,style:{width:Math.min(p,560),maxWidth:"100%",background:"#0a0c10",borderRadius:".4rem",display:"block"}}),t.jsx("div",{style:{fontSize:".75rem",color:"#64748b",marginTop:".3rem"},children:"Lila = prím  |  Sötét = összetett"})]})}function H(){const[r,q]=h.useState(4087),[i,g]=h.useState(1),[z,f]=h.useState("x2+c");function M(l,s){for(;s;){const o=s;s=l%s,l=o}return l}const k=(l,s,o)=>z==="x2+c"?((l*l+o)%s+s)%s:((l*l+l+o)%s+s)%s,m=[];let c=2,p=2,d=1,x=0,e=0,n=1;for(;d===1&&x<50&&r>1;){c=k(c,r,i),x++;const l=x;l===n&&(n*=2,e=l-1);const s=M(Math.abs(c-p),r);m.push({k:l,xk:c,j:e,xj:p,g:s}),d=s,l===e&&(p=c)}const a=h.useRef(null);return h.useEffect(()=>{const l=a.current;if(!l)return;const s=l.getContext("2d");if(!s)return;const o=l.width,v=l.height;if(s.clearRect(0,0,o,v),m.length===0)return;const u=m.map(b=>b.xk),y=Array.from(new Set(u)).slice(0,20),j=y.length,R=o/2,F=v/2,N=Math.min(o,v)/2-20,_=b=>b/j*2*Math.PI-Math.PI/2,T=y.map((b,S)=>({x:R+N*Math.cos(_(S)),y:F+N*Math.sin(_(S))}));s.strokeStyle="#7c3aed88",s.lineWidth=1.5;for(let b=0;b<Math.min(m.length,j-1);b++){const S=b,w=Math.min(b+1,j-1);s.beginPath(),s.moveTo(T[S].x,T[S].y),s.lineTo(T[w].x,T[w].y),s.stroke()}y.forEach((b,S)=>{const{x:w,y:C}=T[S],E=m.some(P=>P.g>1&&P.g<r&&P.xk===b);s.fillStyle=E?"#f59e0b":"#7c3aed",s.strokeStyle=E?"#fbbf24":"#a78bfa",s.lineWidth=E?2:1,s.beginPath(),s.arc(w,C,E?10:7,0,2*Math.PI),s.fill(),s.stroke(),s.fillStyle="#fff",s.font="7px monospace",s.textAlign="center",s.textBaseline="middle",s.fillText(String(b%1e3),w,C)})},[r,i,z]),t.jsxs("div",{children:[t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"8.20 Pollard ρ algoritmus vizualizátor"}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center",margin:".5rem 0",fontSize:".85rem"},children:[t.jsxs("span",{children:["n = ",t.jsx("input",{type:"number",min:4,className:"ila-num",value:r,onChange:l=>q(+l.target.value)})]}),t.jsxs("span",{children:["c = ",t.jsx("input",{type:"number",className:"ila-num",value:i,onChange:l=>g(+l.target.value)})]}),t.jsxs("span",{children:["f(x) = ",t.jsxs("select",{className:"ila-select",value:z,onChange:l=>f(l.target.value),children:[t.jsx("option",{value:"x2+c",children:"x²+c"}),t.jsx("option",{value:"x2+x+c",children:"x²+x+c"})]})]})]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cayley",style:{fontFamily:"monospace",fontSize:".82rem",width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"k"}),t.jsx("th",{children:"xₖ"}),t.jsx("th",{children:"j=2ʰ−1"}),t.jsx("th",{children:"xⱼ"}),t.jsx("th",{children:"lnko(|xₖ−xⱼ|, n)"})]})}),t.jsx("tbody",{children:m.map((l,s)=>t.jsxs("tr",{style:l.g>1&&l.g<r?{background:"rgba(167,139,250,.15)"}:void 0,children:[t.jsx("td",{children:l.k}),t.jsx("td",{children:l.xk}),t.jsx("td",{children:l.j}),t.jsx("td",{children:l.xj}),t.jsx("td",{style:{color:l.g>1&&l.g<r?"#34d399":l.g===r?"#ef4444":void 0,fontWeight:l.g>1?700:void 0},children:l.g})]},s))})]})}),d>1&&d<r?t.jsxs("div",{className:"def-box",style:{marginTop:".6rem",fontWeight:700},children:[r," = ",t.jsx("span",{style:{color:"#fbbf24"},children:d})," × ",t.jsx("span",{style:{color:"#fbbf24"},children:r/d})," ",t.jsxs("span",{style:{color:"#8892a4",fontWeight:400,fontSize:".8rem"},children:["(",m.length," iteráció)"]})]}):t.jsx("div",{className:"warn-box",style:{marginTop:".6rem"},children:d===r?"Triviális osztó (n) — próbálj más c értéket":d===0?"n=0 érvénytelen":"Futás / nem találta meg a határon belül…"})]}),t.jsxs("div",{className:"info-box",style:{marginTop:".6rem"},children:[t.jsx("span",{className:"lbl",style:{color:"#8892a4"},children:"ρ-görbe (első 20 egyedi érték)"}),t.jsx("canvas",{ref:a,width:340,height:220,style:{width:340,maxWidth:"100%",background:"#0a0c10",borderRadius:".4rem",display:"block",margin:".4rem auto 0"}})]})]})}function I(){const[r,q]=h.useState(561),[i,g]=h.useState(2);function z(e,n,a){if(a===1)return 0;let l=1;for(e%=a;n>0;)n&1&&(l=l*e%a),n>>=1,e=e*e%a;return l}function f(e,n){for(;n;){const a=n;n=e%n,e=a}return e}function M(e,n){if(e<2)return{s:0,t:0,sequence:[],firstOne:-1,verdict:"ÖSSZETETT (bizonyosan)"};if(f(n,e)>1)return{s:0,t:e-1,sequence:[],firstOne:-1,verdict:"ÖSSZETETT (bizonyosan)"};let a=0,l=e-1;for(;l%2===0;)a++,l/=2;const s=[];let o=z(n,l,e);s.push(o);for(let y=0;y<a;y++)o=o*o%e,s.push(o);const v=s.indexOf(1);let u;if(s[0]===1||s.slice(0,a).includes(e-1)?u="erős álprím":(s[a],u="ÖSSZETETT (bizonyosan)"),s[0]===1)u="erős álprím";else{let y=!1;for(let j=0;j<a;j++)if(s[j]===e-1){y=!0;break}u=y?"erős álprím":"ÖSSZETETT (bizonyosan)"}return{s:a,t:l,sequence:s,firstOne:v,verdict:u}}const k=Math.max(3,r),{s:m,t:c,sequence:p,verdict:d}=M(k,i),x=d==="ÖSSZETETT (bizonyosan)"?"#ef4444":d==="erős álprím"?"#fbbf24":"#34d399";return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"8.17 Miller–Rabin teszt — interaktív"}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center",margin:".5rem 0",fontSize:".85rem"},children:[t.jsxs("span",{children:["n = ",t.jsx("input",{type:"number",min:3,className:"ila-num",value:r,onChange:e=>q(+e.target.value)})]}),t.jsxs("span",{children:["b = ",t.jsx("input",{type:"number",min:2,className:"ila-num",value:i,onChange:e=>g(+e.target.value)})]})]}),t.jsxs("div",{style:{fontSize:".82rem",fontFamily:"monospace",color:"#c4b5fd",marginBottom:".3rem"},children:["n−1 = 2",t.jsx("sup",{children:m})," · ",c,"  →  s=",m,", t=",c]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cayley",style:{fontFamily:"monospace",fontSize:".82rem",width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Index"}),t.jsx("th",{children:"Kitevő"}),t.jsx("th",{children:"Érték mod n"})]})}),t.jsx("tbody",{children:p.map((e,n)=>t.jsxs("tr",{style:e===1||e===k-1?{background:"rgba(167,139,250,.12)"}:void 0,children:[t.jsx("td",{children:n===0?"b^t":`b^(2^${n}·t)`}),t.jsx("td",{style:{fontFamily:"monospace"},children:n===0?`${i}^${c}`:`${i}^(${Math.pow(2,n)}·${c})`}),t.jsxs("td",{style:{color:e===1?"#34d399":e===k-1?"#fbbf24":void 0,fontWeight:700},children:[e," ",e===k-1?"(≡ −1)":""]})]},n))})]})}),t.jsxs("div",{className:"def-box",style:{marginTop:".6rem",fontWeight:700,borderLeftColor:x},children:["Ítélet: ",t.jsx("span",{style:{color:x},children:d}),d==="erős álprím"&&t.jsx("span",{style:{color:"#8892a4",fontWeight:400,fontSize:".8rem"},children:"  (ez az egy bázis átment — próbálj több b-t!)"})]})]})}const L=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8. fejezet — Prímtesztelés és számok felbontása</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    A 3.2 alfejezet 3.16 problémájában láttuk, hogy a <strong>prímfelbontás</strong> és a
    <strong>prímtesztelés</strong> messze nem azonos — különösen 2002 (AKS) óta. A klasszikus
    algoritmusok azonban hasonló módszereket használnak.
  </p>
</div>

<div class="warn-box">
  <strong>Minden prímfelbontó módszer \(O(2^n)\) exponenciálisan lassú</strong> — csak 100–200
  jegyű számokra alkalmazhatók. A konstansok különbsége miatt egyik módszer évmilliárdokig,
  a másik „csak" évmilliókig fut ugyanazon adatra.
</div>

<div class="def-box">
  <strong>2002 áttörés — AKS.</strong> Agrawal, Kayal és Saxena algoritmusa polinomiálisan
  gyors, 100% biztonságos, determinisztikus algoritmus a <em>prímtesztelés</em> problémára.
  A gyors <em>prímfelbontás</em> máig megoldatlan.
</div>

<div class="info-box">
  <strong>Algoritmus-választás stratégiája:</strong>
  <table class="cayley" style="width:100%;font-size:.82rem;margin:.4rem 0">
    <thead><tr><th style="text-align:left">Cél</th><th style="text-align:left">Algoritmus</th><th style="text-align:left">Mikor használjuk?</th></tr></thead>
    <tbody>
      <tr><td>Felbontás &lt; 10⁶</td><td>Eratoszthenész</td><td>oktatás, kis számok</td></tr>
      <tr><td>Felbontás közeli prímek</td><td>Fermat</td><td>\(n = pq\), \(|p-q|\) kicsi</td></tr>
      <tr><td>Felbontás általánosan</td><td>Pollard ρ</td><td>~10–25 jegyű számokra</td></tr>
      <tr><td>Felbontás &gt; 50 jegyű</td><td>GNFS (nincs könyvben)</td><td>RSA-feltörés</td></tr>
      <tr><td>Tesztelés gyorsan</td><td>Miller–Rabin</td><td>RSA-kulcsgenerálás</td></tr>
      <tr><td>Tesztelés determinisztikus</td><td>AKS</td><td>matematikai biztonság</td></tr>
    </tbody>
  </table>
</div>`,O=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.1 Algoritmus — Eratoszthenész szitája</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Osszuk el \(n\)-et 2-vel és a \(\sqrt{n}\)-nél kisebb páratlan számokkal. Ha valamelyik osztás
    nem ad maradékot, \(n\) összetett. Egyébként prím.
  </p>
</div>

<div class="warn-box">
  Lépésszám \(\sqrt{n}/2 \approx 10^{k/2}\). <strong>Exponenciális</strong> az input méretében
  (\(k\) jegy). Lásd a 3.21 példa kozmikus időadatait.
</div>

<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.2 § — Fermat algoritmusa</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Pierre Fermat (1601–1665). Ma is hatékony pár-száz-jegyű számokra,
    <strong>különösen ha \(n = pq\) két közeli prím szorzata</strong> —
    <em>ezért nem szabad ilyen RSA-kulcsot választani!</em>
  </p>
</div>

<div class="info-box">
  <strong>Első ötlet — Két közeli osztó</strong><br/>
  Ha \(n = ab\) és \(a > b\) közel egymáshoz, akkor \(x = \tfrac{a+b}{2}\), \(y = \tfrac{a-b}{2}\) esetén:
  \[n = x^2 - y^2 \;\Longleftrightarrow\; n + y^2 = x^2\]
  \(x \approx \sqrt{n}\)-tól indítva \(x\)-et egyesével növeljük; minden lépésben ellenőrizzük,
  hogy \(x^2 - n\) négyzetszám-e.
</div>

<div class="info-box">
  <strong>Második ötlet — Modulus-szita</strong><br/>
  \(y^2\) utolsó két jegye csak \(00, e1, e4, 25, o6, e9\) lehet (\(e\)=páros, \(o\)=páratlan).
  Ezért \(x^2 - n\) utolsó két jegye is csak ezen 6 minta egyike —
  <strong>78% kizárható</strong> négyzetreemelés előtt. Több \(m_i\) modulus szitálással még gyorsabb.
</div>

<div class="thm-box">
  <strong>8.5 Tétel — Mikor van \(n = x^2 - y^2\) megoldás?</strong><br/>
  \(n = x^2 - y^2\) pontosan akkor oldható meg, ha \(\;n \neq 4k + 2\).
  <p style="font-size:.8rem;color:#94a3b8;margin:.3rem 0 0">
    Mivel \((x+y)\) és \((x-y)\) paritása mindig megegyezik, szorzatuk vagy páratlan vagy 4-gyel osztható.
    \(4k+2\) alakú számok kimaradnak — de azok már páros összetettek, könnyen szétbonthatók.
  </p>
</div>

<div class="def-box">
  <strong>8.6 Algoritmus — Legendre–Kraitchik (vázlat)</strong><br/>
  Az \(x^2 - y^2 = n\) helyett keressünk olyan \(x, y\)-t ahol
  \[x^2 - y^2 \equiv 0 \pmod n, \quad x \not\equiv \pm y.\]
  Ekkor \(\operatorname{lnko}(n, x + y)\) vagy \(\operatorname{lnko}(n, x - y)\) valódi osztó.
  <strong>Faktorbázis-trükk:</strong> \(x, y\)-t kis prímek \(B = \{p_1, \dots, p_h\}\) szorzataként
  keressük, lineáris algebrával. Ez vezet az általános számtest-szitához (GNFS).
</div>`,Z=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.3 § — Álprímek és Bolyai János</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Apjának (Bolyai Farkas) bíztatására Bolyai János megpróbálta bebizonyítani a <strong>kis Fermat
    tétel megfordítását</strong>.
  </p>
</div>

<div class="def-box">
  <strong>8.7 Probléma.</strong> Igaz-e, hogy ha \(n\) teljesíti
  \[b^{n-1} \equiv 1 \pmod n \quad \text{minden } 1 &lt; b &lt; n,\; \operatorname{lnko}(b,n) = 1\text{-re,}\]
  akkor \(n\) prímszám?
</div>

<p style="font-size:.86rem;margin:.5rem 0">
  Bolyai János a kéziratai szerint több <em>ellenpéldát</em> talált — pl.
  \[2^{340} \equiv 1 \pmod{341}, \qquad 4^{14} \equiv 1 \pmod{15}\]
  pedig \(341 = 11 \cdot 31\) és \(15 = 3 \cdot 5\). Bolyai felfedezései csak <strong>2000 körül</strong>
  kerültek elő a hagyatékából.
</p>

<div class="info-box">
  <strong>8.11 Definíció — Álprím és Carmichael-szám</strong>
  <table class="cayley" style="width:100%;font-size:.82rem;margin:.4rem 0">
    <thead><tr><th>Fogalom</th><th>Definíció</th></tr></thead>
    <tbody>
      <tr><td><strong>álprím</strong> \(b\) bázisra</td><td>\(n\) páratlan összetett, \(\operatorname{lnko}(b,n) = 1\), \(b^{n-1} \equiv 1 \pmod n\)</td></tr>
      <tr><td><strong>\(b\) árulója \(n\)-nek</strong></td><td>\(\operatorname{lnko}(b,n)=1\), \(b^{n-1} \not\equiv 1 \pmod n\) (bizonyítja, hogy \(n\) összetett)</td></tr>
      <tr><td><strong>Carmichael-szám</strong></td><td>\(n\) összetett, álprím <em>minden</em> \(b\)-re ⟹ <em>nincs árulója</em>!</td></tr>
    </tbody>
  </table>
</div>

<p style="color:#94a3b8;font-size:.82rem;">
  Robert Daniel Carmichael (1879–1967). Első Carmichael-számok: \(561, 1105, 1729, 2465, 2821,
  6601, 8911, 10\,585, \dots\) &nbsp; Ramanujan-szám (\(1729 = 1^3 + 12^3 = 9^3 + 10^3\)) is benne van!
</p>

<div class="thm-box">
  <strong>Erdős Pál ötletével Alford, Granville, Pomerance (1994) bizonyította:</strong>
  végtelen sok Carmichael-szám létezik. Ezért a Fermat/Bolyai-teszt
  <em>nem 100% biztos</em>.
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">8.15 Tétel — Korselt (1899) — Carmichael-számok jellemzése</span>
  <p>\(n\) páratlan, négyzetmentes összetett szám akkor és csak akkor Carmichael, ha</p>
  \[p - 1 \mid n - 1 \quad \text{minden } p \mid n \text{ prímosztóra.}\]
</div>

<div class="ex-box">
  <strong>Miért Carmichael 561?</strong>&nbsp;
  \(561 = 3 \cdot 11 \cdot 17\), \(n - 1 = 560\):
  \[3 - 1 = 2 \mid 560\ ✓ \quad 11 - 1 = 10 \mid 560\ ✓ \quad 17 - 1 = 16 \mid 560\ ✓\]
</div>

<div class="thm-box">
  <strong>8.12 Tétel — Áruló-arány.</strong>
  Ha \(n\) <em>nem</em> Carmichael (legalább egy árulóval), akkor a \(\mathbb{Z}_n^*\) elemeinek
  <strong>legalább a fele</strong> áruló. Következmény: \(k\) véletlen \(b\) próbálkozás után,
  ha mind „sikertelen", \(n\) legfeljebb \(2^{-k}\) eséllyel összetett — kivéve ha Carmichael.
  Miller–Rabin ezt erősíti tovább.
</div>`,D=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.4 § — Miller–Rabin teszt</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Ötlet: <strong>ha \(n\) prím</strong> (lenne), akkor \(x^2 \equiv 1 \pmod n\) egyenlet
    megoldásai csak \(x \equiv \pm 1\) (\(\mathbb{Z}_p\) test, 6.79). Ezzel a Bolyai-teszt
    <em>továbbfinomítható</em>: a Carmichael-számokat is kiszűri.
  </p>
</div>

<div class="info-box">
  <strong>8.17 Algoritmus — Miller–Rabin</strong>
  <ol style="font-size:.85rem;line-height:1.9;margin:.4rem 0">
    <li>Bontsuk fel \(\;n - 1 = 2^s \cdot t\;\) ahol \(t\) páratlan.</li>
    <li>Válasszunk véletlen \(b\)-t, \(\operatorname{lnko}(b, n) = 1\).</li>
    <li>Számoljuk ki \(b^t, b^{2t}, b^{4t}, \dots, b^{2^s t} = b^{n-1} \pmod n\) — minden lépésben négyzetreemelés.</li>
    <li>Amikor <strong>először 1-et</strong> kapunk: az előző elemnek \(-1\)-nek kell lennie,
        különben \(n\) összetett.</li>
  </ol>
</div>

<div class="def-box">
  <strong>8.18 Def — Erős álprím.</strong> \(n\) <em>erős álprím</em> a \(b\) bázisra, ha
  vagy \(b^t \equiv 1\), vagy létezik \(0 \leq r &lt; s\), hogy \(b^{2^r t} \equiv -1 \pmod n\).
</div>

<div class="thm-box">
  <strong>Megbízhatóság.</strong> Egyetlen \(b\)-re tévedés esélye <em>kevesebb mint \(1/4\)</em>
  (nincs „Carmichael-szerű" kivétel). \(k\) független próba után tévedés esélye \(\leq 4^{-k}\).
  Pl. \(k = 40\) teszt \(\Rightarrow\) \(4^{-40} &lt; 10^{-24}\) — gyakorlatilag biztos!
  Ez az <strong>OpenSSL és más kriptokönyvtárak alapértelmezett prímtesztje</strong>.
</div>

<div class="ex-box">
  <strong>8.19 Példa — 91 erős álprím \(b = 10\)-re</strong><br/>
  \(91 = 7 \cdot 13\), \(n - 1 = 90 = 2 \cdot 45\), így \(s = 1\), \(t = 45.\)
  <br/>\(10^3 = 1001 \equiv -1 \pmod{91}\) ⟹ \(\;10^{45} \equiv (-1)^{15} \equiv -1 \pmod{91}.\)
  <br/>Tehát \(b^t \equiv -1\) — \(r = 0\)-ra teljesül, 91 <strong>átmegy a teszten</strong>.
  <em>De 91 valójában összetett!</em> Több bázis vizsgálatával kiszűrhető.
</div>`,$=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.5 § — Pollard ρ-módszere (1975)</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    John Pollard 1975-es cikke. <strong>Valódi osztót</strong> ad — az Eratoszthenészi
    próbaosztásnál lényegesen gyorsabb. Komplexitása heurisztikusan \(O(n^{1/4})\) —
    szubexponenciális.
  </p>
  <p style="color:#64748b;font-size:.8rem;">
    Az elnevezés: ha az \(x_k\) sorozatot ábrázoljuk, a \(\rho\) görög betűhöz hasonlít — egy egyenes
    szakasz vezet egy ciklusba. A „Monte Carlo" elnevezés a véletlenszerű \(f\) polinom-választáshoz utal.
  </p>
</div>

<div class="info-box">
  <strong>8.20 Algoritmus — Alapötlet</strong><br/>
  Legyen \(f(x) = x^2 + c\) (vagy hasonló nemlineáris polinom). Indítsunk \(x_0 = 2\)-t, és számoljuk:
  \[x_k = f(x_{k-1}) \bmod n\]
  Ha valamely \(j &lt; k\)-ra \(\operatorname{lnko}(x_k - x_j, n) = r > 1\), akkor \(r\) valódi osztó!
</div>

<div class="thm-box">
  <strong>Miért működik?</strong> Ha \(r \mid n\), akkor \(f\) ciklikus \(\bmod\, r\) (kis modulus,
  kevés állapot). Születésnap-paradoxonnal \(O(\sqrt r) = O(n^{1/4})\) lépés után már
  ütközünk \(\pmod r\)-ben — anélkül, hogy \(r\)-t ismernénk!
</div>

<div class="info-box">
  <strong>8.24 Algoritmus — Floyd-féle gyorsítás (ciklusdetektálás)</strong><br/>
  Ne nézzük az <em>összes</em> \(j &lt; k\) párt — csak \(j = 2^h - 1\)-et,
  ahol \(2^h \leq k &lt; 2^{h+1}\). Négyzetes gyorsítás.
  <br/><br/>
  <strong>8.31 Algoritmus — „Kétszeres sebesség" (Brent-variáns)</strong><br/>
  Egyszerre két iteráció: lassú és gyors:
  \[x_{k+1} = f(x_k), \qquad x_{2k} = f(f(x_{2k-1}))\]
  Minden lépésben \(\operatorname{lnko}(n, x_{2k} - x_k)\) vizsgálata.
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">8.27 Példa — \(n = 4087\), \(f(x) = x^2 + x + 1\), \(x_0 = 2\)</span>
  <table class="cayley" style="font-family:monospace;font-size:.82rem;width:100%;margin:.4rem 0">
    <thead><tr><th>\(k\)</th><th>\(x_k\)</th><th>\(j = 2^h-1\)</th><th>\(\operatorname{lnko}(x_k - x_j, n)\)</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>7</td><td>0</td><td>1</td></tr>
      <tr><td>2</td><td>57</td><td>1</td><td>1</td></tr>
      <tr><td>3</td><td>3307</td><td>1</td><td>1</td></tr>
      <tr><td>4</td><td>2745</td><td>3</td><td>1</td></tr>
      <tr><td>5</td><td>1343</td><td>3</td><td>1</td></tr>
      <tr><td>6</td><td>2626</td><td>3</td><td>1</td></tr>
      <tr style="background:rgba(167,139,250,.15)"><td><strong>7</strong></td><td>3734</td><td>3</td><td><strong style="color:#34d399">61</strong></td></tr>
    </tbody>
  </table>
  \(4087 = 61 \cdot 67\). Csak <strong>7 iteráció</strong> — az Eratoszthenészi szita
  \(\sqrt{4087} \approx 64\) próbaosztást igényelne.
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">8.32 Példa — Brent kettős léptetés (\(n = 246\,733\))</span>
  <table class="cayley" style="font-family:monospace;font-size:.82rem;width:100%;margin:.4rem 0">
    <thead><tr><th>\(k\)</th><th>\(x_k\)</th><th>\(x_{2k}\)</th><th>\(\operatorname{lnko}(n, x_{2k} - x_k)\)</th></tr></thead>
    <tbody>
      <tr><td>0</td><td>2</td><td>2</td><td>—</td></tr>
      <tr><td>1</td><td>5</td><td>26</td><td>1</td></tr>
      <tr><td>2</td><td>26</td><td>211 597</td><td>1</td></tr>
      <tr><td>3</td><td>677</td><td>126 543</td><td>1</td></tr>
      <tr><td>4</td><td>211 597</td><td>99 653</td><td>1</td></tr>
      <tr><td>5</td><td>133 298</td><td>225 011</td><td>1</td></tr>
      <tr><td>6</td><td>126 543</td><td>28 771</td><td>1</td></tr>
      <tr><td>7</td><td>159 150</td><td>90 806</td><td>1</td></tr>
      <tr><td>8</td><td>99 653</td><td>86 408</td><td>1</td></tr>
      <tr style="background:rgba(167,139,250,.15)"><td><strong>9</strong></td><td>210 626</td><td>222 422</td><td><strong style="color:#34d399">983</strong></td></tr>
    </tbody>
  </table>
  \(246\,733 = 983 \cdot 251\) ✓
</div>

<div class="info-box">
  <strong>8.30 Megjegyzés — Polinom-választás</strong>
  <ul style="font-size:.85rem;line-height:1.8;margin:.3rem 0">
    <li><strong>Jó:</strong> \(f(x) = x^2 + c\) (default), \(x^2 + x + c\) általában</li>
    <li><strong>Tilos:</strong> \(f(x) = ax + b\) (lineáris) — periódusa kicsi, nem talál ütközést</li>
    <li><strong>Tilos:</strong> \(f(x) = x^2\) — tiszta négyzet, korai degenerált ciklus</li>
  </ul>
</div>`,G=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.6 § — AKS algoritmus (Agrawal–Kayal–Saxena, 2002)</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Manindra <strong>Agrawal</strong> és tanítványai <strong>Neeraj Kayal</strong> és
    <strong>Nitin Saxena</strong> 2002-es áttörése: <em>az első</em> ismert
    <strong>polinomidejű, determinisztikus, feltétel nélküli</strong> prímteszt.
  </p>
</div>

<div class="thm-box">
  Az algoritmus megválaszolta az 1970-es évek óta nyitva álló kérdést:
  <em>„van-e a prímtesztelésre P-beli algoritmus?"</em>&nbsp;
  <strong>Igen!</strong>&nbsp; Komplexitás: \(\tilde{O}(\log^{10.5} n)\) az eredeti cikkben,
  később \(\tilde{O}(\log^6 n)\).
</div>

<div class="def-box">
  <strong>Alapötlet — Polinomok használata</strong><br/>
  \(n\) prím \(\iff\) a binomiális tétel alapján:
  \[(x - a)^n \equiv x^n - a \pmod n\]
  ami egy <em>polinomidentitás</em> \(\pmod n\). (Ha \(n\) prím, a binomiális együtthatók
  \(\binom{n}{k}\) mind \(n\)-nel oszthatók kivéve \(k = 0, n\)-re; ha \(n\) összetett,
  valamelyik együttható nem osztható \(n\)-nel.)
</div>

<div class="info-box">
  <strong>Komplexitás-trükk</strong><br/>
  Az identitás közvetlen ellenőrzése \(n + 1\) együttható összehasonlítása — túl lassú.
  <strong>AKS-trükk:</strong> mindkét oldalt egy alkalmas \((x^r - 1)\) polinommal vett
  maradékon vizsgáljuk, ahol \(r \approx \log^6 n\) kicsi prím.
  <br/><br/>
  Ha a két polinom valóban egyenlő, akkor minden polinom-szerinti maradékuk is. Fordítva:
  ha \((x^r - 1)\)-szerinti maradékok megegyeznek <em>néhány száz \(a\)</em>-ra,
  akkor \(n\) <strong>biztosan prím</strong>.
</div>

<div class="thm-box">
  <strong>Az AKS algoritmus 4 fő lépésben:</strong>
  <ol style="font-size:.85rem;line-height:1.9;margin:.3rem 0">
    <li>\(n = m^k\) alakú? (perfect power test)</li>
    <li>\(r\) alkalmas prím keresése \(r \leq \log^6 n\)-ig</li>
    <li>\(\operatorname{lnko}(a, n) = 1\) ellenőrzése \(a \leq r\)-re</li>
    <li>A polinomidentitás \((x - a)^n \equiv x^n - a \pmod{x^r - 1, n}\) ellenőrzése \(a \leq 2\sqrt{r} \log n\)-ig</li>
  </ol>
  Ha mindegyik lépés átmegy ⟹ \(n\) prím. Bármelyik buktató ⟹ \(n\) összetett.
</div>

<div class="warn-box">
  <strong>Gyakorlati helyzet:</strong> Bár AKS elméletileg gyönyörű, <strong>gyakorlatban nem versenyez
  Miller–Rabin-nal</strong> — a polinomszámítások konstansai magasak. Modern változatok
  (Lenstra, Pomerance, Bernstein, Crandall) jelentősen egyszerűsítették.
  <br/>Hivatalos kriptokönyvtárakban: <strong>Miller–Rabin + Baillie–PSW kombináció</strong> az
  ipari sztenderd. AKS főleg <em>elméleti</em> garancia.
</div>

<div class="info-box">
  <strong>Hivatkozások</strong>
  <ul style="font-size:.83rem;line-height:1.8">
    <li>Agrawal, Kayal, Saxena: <em>PRIMES is in P</em>, Annals of Mathematics 160 (2004), 781–793</li>
    <li>MathWorld: AKS Primality Test</li>
    <li>AMS Bulletin (2005): <em>A polynomial time algorithm for primes</em></li>
  </ul>
</div>`,J=[{id:"intro",label:"Áttekintés",content:t.jsx(A,{html:L})},{id:"eraf",label:"8.1–2 Eratoszthenész & Fermat",content:t.jsxs("div",{children:[t.jsx(A,{html:O}),t.jsx(W,{})]})},{id:"alprim",label:"8.3 Álprímek & Bolyai",content:t.jsx(A,{html:Z})},{id:"mr",label:"8.4 Miller–Rabin",content:t.jsxs("div",{children:[t.jsx(A,{html:D}),t.jsx(I,{})]})},{id:"pollard",label:"8.5 Pollard ρ",content:t.jsxs("div",{children:[t.jsx(A,{html:$}),t.jsx(H,{})]})},{id:"aks",label:"8.6 AKS",content:t.jsx(A,{html:G})}];function Y(){return t.jsxs("div",{className:"ila",children:[t.jsx(K,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 8. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Prímtesztelés és számok felbontása"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(B,{tabs:J})]})}export{Y as default};
