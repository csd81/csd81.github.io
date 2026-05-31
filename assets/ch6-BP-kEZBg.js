import{j as t,L as y,r as b}from"./index-Cd-_-Ba2.js";import{T as u,R as x}from"./kit-CoMAMuWy.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function p(){const[s,o]=b.useState(1),[e,l]=b.useState(1),[r,n]=b.useState(0),[a,c]=b.useState(1),[m,v]=b.useState(null);function d(){const i=r,f=a-s*r,g=[r,a];for(let h=2;h<8;h++)g.push(s*g[h-1]+e*g[h-2]);v({num0:i,num1:f,seq:g})}return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#10b981"},children:"Interaktív — F(x) levezetése"}),t.jsx("p",{style:{fontSize:".82rem",color:"#94a3b8",margin:".3rem 0"},children:"aₙ₊₂ = c₁·aₙ₊₁ + c₂·aₙ, adja meg a paramétereket:"}),t.jsxs("div",{style:{display:"flex",gap:".75rem",flexWrap:"wrap",margin:".4rem 0",fontSize:".85rem"},children:[t.jsxs("span",{children:["c₁ = ",t.jsx("input",{type:"number",className:"ila-num",value:s,onChange:i=>o(+i.target.value)})]}),t.jsxs("span",{children:["c₂ = ",t.jsx("input",{type:"number",className:"ila-num",value:e,onChange:i=>l(+i.target.value)})]}),t.jsxs("span",{children:["a₀ = ",t.jsx("input",{type:"number",className:"ila-num",value:r,onChange:i=>n(+i.target.value)})]}),t.jsxs("span",{children:["a₁ = ",t.jsx("input",{type:"number",className:"ila-num",value:a,onChange:i=>c(+i.target.value)})]}),t.jsx("button",{className:"op-btn is-active",onClick:d,style:{background:"#10b981",color:"#000",border:"none"},children:"Számít"})]}),m&&t.jsx(x,{html:String.raw`
<div class="def-box" style="font-size:.82rem;">
  <strong>Generátorfüggvény alakja:</strong><br>
  \(F(x) = \dfrac{${m.num0} + ${m.num1}x}{1 - ${s}x - ${e}x^2}\)
</div>
<table class="cayley" style="width:100%;margin-top:.5rem"><thead><tr><th>n</th>${m.seq.map((i,f)=>`<th>${f}</th>`).join("")}</tr></thead>
<tbody><tr><td style="color:#64748b;">aₙ</td>${m.seq.map(i=>`<td style="color:#34d399;">${+i.toFixed(4)}</td>`).join("")}</tr></tbody></table>`},`${s}${e}${r}${a}`)]})}const k=[1,1,2,5,14,42,132,429,1430,4862];function z(s){if(s<0)return 0n;let o=1n,e=1n;for(let l=0;l<s;l++)o*=BigInt(2*s-l),e*=BigInt(l+1);return o/e/BigInt(s+1)}function j(){const[s,o]=b.useState(5),[e,l]=b.useState(null);function r(){const a=z(s).toString();l({val:a,n:s})}const n=String.raw`<table class="cayley" style="width:100%"><thead><tr><th style="text-align:left">n</th><th style="text-align:left">tₙ</th></tr></thead><tbody>`+k.map((a,c)=>`<tr><td>${c}</td><td style="color:#34d399;">${a}</td></tr>`).join("")+"</tbody></table>";return t.jsxs("div",{children:[t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#10b981"},children:"Interaktív — Catalan(n)"}),t.jsxs("div",{style:{display:"flex",gap:".75rem",alignItems:"center",margin:".4rem 0",fontSize:".85rem"},children:[t.jsxs("span",{children:["n = ",t.jsx("input",{type:"number",className:"ila-num",value:s,min:0,max:30,onChange:a=>o(+a.target.value)})]}),t.jsx("button",{className:"op-btn is-active",onClick:r,style:{background:"#10b981",color:"#000",border:"none"},children:"Számít"})]}),e&&t.jsx(x,{html:String.raw`<div class="def-box">t<sub>${e.n}</sub> = <strong style="color:#34d399;">${e.val}</strong></div>
<p style="font-size:.82rem;color:#94a3b8;">Értelmezések (mindegyik <strong style="color:#34d399;">${e.val}</strong> darab):</p>
<ul style="font-size:.8rem;color:#94a3b8;padding-left:1.2rem;">
<li>Helyes zárójel-sorozat \(2\cdot${e.n}\) jelből</li>
<li>Bináris fa ${e.n+1} levéllel</li>
<li>Konvex ${e.n+2}-szög háromszögesítése</li>
<li>Hegyi utak (nem lépnek az átló alá)</li>
<li>Permutációk 231-mintát elkerülve</li>
</ul>`},`cat${e.n}`)]}),t.jsx(x,{html:n})]})}function _(){const[s,o]=b.useState(10),[e,l]=b.useState("1,2,5"),[r,n]=b.useState(null);function a(){const c=e.split(",").map(d=>parseInt(d.trim())).filter(d=>d>0);if(!c.length){n('<div class="warn-box">Adjon meg érmék értékeit!</div>');return}const m=new Array(s+1).fill(0);m[0]=1;for(const d of c)for(let i=d;i<=s;i++)m[i]+=m[i-d];let v=`<div class="def-box">${s} forint felbontásainak száma [${c.join(",")}] érmékkel: <strong style="color:#34d399;">${m[s]}</strong></div>`;if(s<=20){v+='<table class="cayley" style="width:100%"><thead><tr><th style="text-align:left">összeg</th><th style="text-align:left">módszerek száma</th></tr></thead><tbody>';for(let d=1;d<=s;d++)v+=`<tr><td>${d}</td><td style="color:#34d399;">${m[d]}</td></tr>`;v+="</tbody></table>"}n(v)}return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#10b981"},children:"Interaktív pénzváltó"}),t.jsx("p",{style:{fontSize:".82rem",color:"#94a3b8",margin:".3rem 0"},children:"Adja meg a célösszeget és az érmék értékét (vesszővel):"}),t.jsxs("div",{style:{display:"flex",gap:".75rem",flexWrap:"wrap",margin:".4rem 0",fontSize:".85rem"},children:[t.jsxs("span",{children:["n = ",t.jsx("input",{type:"number",className:"ila-num",value:s,min:1,max:50,onChange:c=>o(+c.target.value)})]}),t.jsxs("span",{children:["Érmék: ",t.jsx("input",{type:"text",className:"ila-text",value:e,onChange:c=>l(c.target.value),style:{width:120}})]}),t.jsx("button",{className:"op-btn is-active",onClick:a,style:{background:"#10b981",color:"#000",border:"none"},children:"Számít"})]}),r&&t.jsx(x,{html:r},`coin${s}${e}`)]})}function S(s){let o=1;for(let e=2;e<=s;e++)o*=e;return o}function $(s,o){if(o<0||o>s)return 0;if(s===0&&o===0)return 1;if(s===0||o===0)return 0;let e=0;for(let l=0;l<=o;l++){const r=l%2===0?1:-1;let n=1;for(let a=0;a<l;a++)n=n*(o-a)/(a+1);e+=r*Math.round(n)*Math.pow(o-l,s)}return Math.round(e/S(o))}function w(s){const o=[1n];for(let e=1;e<=s;e++){const l=[];for(let n=0;n<=e;n++)l.push(new Array(e+1).fill(0));l[0][0]=1;for(let n=1;n<=e;n++)for(let a=1;a<=n;a++)l[n][a]=a*l[n-1][a]+l[n-1][a-1];let r=0n;for(let n=1;n<=e;n++)r+=BigInt(l[e][n]);o.push(r)}return o.map(e=>e.toString())}function N(){const o='<table class="cayley" style="width:100%"><thead><tr><th style="text-align:left">n</th><th style="text-align:left">Bₙ</th></tr></thead><tbody>'+w(10).map((r,n)=>`<tr><td>${n}</td><td style="color:#34d399;">${r}</td></tr>`).join("")+"</tbody></table>",e=6;let l='<table class="cayley" style="width:100%"><thead><tr><th>n \\ k</th>';for(let r=0;r<=e;r++)l+=`<th>${r}</th>`;l+="</tr></thead><tbody>";for(let r=0;r<=e;r++){l+=`<tr><td style="color:#64748b;">${r}</td>`;for(let n=0;n<=e;n++){const a=$(r,n);l+=`<td style="color:${a>0?"#34d399":"#334155"};">${a}</td>`}l+="</tr>"}return l+="</tbody></table>",t.jsxs("div",{children:[t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#10b981"},children:"Bell-számok táblázata"}),t.jsx(x,{html:o})]}),t.jsxs("div",{className:"info-box",style:{overflowX:"auto"},children:[t.jsx("span",{className:"lbl",style:{color:"#10b981"},children:"Stirling-számok (2. faj) — S(n,k), n,k=0..6"}),t.jsx(x,{html:l})]})]})}const F=String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Generátorfüggvény — alapfogalom</h5>
<div class="def-box"><div class="lbl mb-2">Definíció</div><div class="box-body">Az \((a_n)\) sorozat <strong>ordinális generátorfüggvénye</strong>:
\[F(x) = \sum_{n=0}^{\infty} a_n x^n\]
A sorozat tagja: \([x^n]F(x) = a_n\).</div></div>
<div class="thm-box"><div class="box-body"><strong>Kulcsgondolat:</strong> a hatványsorokon végzett algebrai műveletek pontosan megfelelnek a sorozatokon végzett bizonyos műveleteknek.</div></div>
<div class="ex-box"><div class="box-body">Ha \(a_{n+1} = c\cdot a_n + d\), akkor \(F(x)\) egy lineáris egyenletnek tesz eleget, és megoldható zárt alakban.</div></div>
<div class="info-box" style="overflow-x:auto"><span class="lbl" style="color:#10b981">Nevezetes generátorfüggvények</span>
<table class="cayley" style="width:100%"><thead><tr><th>F(x)</th><th>aₙ koefficiense</th><th>Megjegyzés</th></tr></thead><tbody>
<tr><td>\(\frac{1}{1-x}\)</td><td style="color:#34d399;">1</td><td>konstans sorozat</td></tr>
<tr><td>\(\frac{1}{(1-x)^2}\)</td><td style="color:#34d399;">n+1</td><td>természetes számok</td></tr>
<tr><td>\(\frac{1}{(1-x)^k}\)</td><td style="color:#34d399;">\(\binom{n+k-1}{k-1}\)</td><td>kombinatorikus</td></tr>
<tr><td>\(\frac{x}{1-x-x^2}\)</td><td style="color:#34d399;">Fₙ (Fibonacci)</td><td>rekurzív</td></tr>
<tr><td>\(\frac{1}{1-cx}\)</td><td style="color:#34d399;">cⁿ</td><td>geometriai</td></tr>
<tr><td>\(\frac{x}{(1-x)(1-2x)}\)</td><td style="color:#34d399;">2ⁿ−1</td><td>Hanoi</td></tr>
</tbody></table></div>`,C=String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Lineáris rekurziók generátorfüggvénye</h5>
<div class="def-box"><div class="box-body">Legyen \(a_{n+2}=c_1 a_{n+1}+c_2 a_n\), \(a_0,a_1\) adott.</div></div>
<div class="step-row"><div class="step-eq"><strong>1.</strong> Szorozzuk \(x^n\)-nel, összegezzük \(n=0\)-tól \(\infty\)-ig.</div></div>
<div class="step-row"><div class="step-eq"><strong>2.</strong> \(F(x)\)-re lineáris egyenletet kapunk.</div></div>
<div class="step-row"><div class="step-eq"><strong>3.</strong> Megoldjuk \(F(x)\)-re.</div></div>
<div class="step-row"><div class="step-eq"><strong>4.</strong> Parciális törtekre bontjuk.</div></div>
<div class="step-row"><div class="step-eq"><strong>5.</strong> Visszaolvassuk az \(a_n\) tagokat.</div></div>
<div class="thm-box"><div class="box-body"><strong>Fibonacci:</strong>
\(F(x)=\dfrac{x}{1-x-x^2}\). Parciális törtekre bontva:
\(F(x)=\dfrac{1}{\sqrt{5}}\!\left(\dfrac{1}{1-\varphi x}-\dfrac{1}{1-\psi x}\right)\)
→ Binet-képlet: \(a_n=\dfrac{\varphi^n-\psi^n}{\sqrt{5}}\)</div></div>`,B=String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Catalan-számok</h5>
<div class="def-box"><div class="box-body">\(t_0=1,\quad t_{n+1}=\sum_{i=0}^{n}t_i\,t_{n-i}\)</div></div>
<div class="thm-box"><div class="box-body">Generátorfüggvény: \(F(x)=xF(x)^2+1\)<br>
Megoldás: \(F(x)=\dfrac{1-\sqrt{1-4x}}{2x}\)<br>
Explicit: \(t_n=\dfrac{1}{n+1}\binom{2n}{n}\)</div></div>
<div class="ex-box"><div class="box-body"><strong>Catalan-számok értelmezései:</strong><br>
• Helyes zárójel-sorozat 2n jelből<br>
• Bináris fa n+1 levéllel<br>
• Konvex (n+2)-szög háromszögesítése<br>
• Hegyi út (nem keresztezi az átlót)<br>
• 1×n-es sakktábla feltöltése dominókkal</div></div>`,A=String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Pénzváltás — Coin change</h5>
<div class="def-box"><div class="box-body">Hányféleképpen váltható n forint \(h_1, h_2, \ldots, h_k\) felhasználásával? (sorrend nem számít)</div></div>
<div class="thm-box"><div class="box-body">Generátorfüggvény:
\[F(x)=\prod_{i=1}^{k}\frac{1}{1-x^{h_i}}\]
\([x^n]F(x)\) = a lehetséges módszerek száma.</div></div>
<div class="ex-box"><div class="box-body"><strong>Példa:</strong> 10 forint {'{'}1,2,5{'}'}-tel:
\(F(x)=\dfrac{1}{(1-x)(1-x^2)(1-x^5)}\). Megoldások száma = 10</div></div>`,q=String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Exponenciális generátorfüggvény (EGF)</h5>
<div class="def-box"><div class="box-body">
\[F(x) = \sum_{n=0}^{\infty} a_n \frac{x^n}{n!}\]
ahol \(a_n = n!\,[x^n]F(x)\).</div></div>
<div class="thm-box"><div class="box-body"><strong>Bell-számok EGF-je:</strong>
\[B(x)=e^{e^x-1}\]
\(B_n = n!\,[x^n]e^{e^x-1}\)<br>
\(B_n\) = az \(\{1,\ldots,n\}\) halmaz összes partíciójának száma.</div></div>
<div class="def-box"><div class="box-body"><strong>Stirling-számok (2. faj) — S(n,k):</strong><br>
S(n,k) = az \(\{1,\ldots,n\}\) halmaz pontosan k nem üres részhalmazra való felbontásainak száma.<br>
Összefüggés: \(B_n = \sum_{k=0}^{n} S(n,k)\)</div></div>`,H=[{id:"alap",label:"Alapfogalom",content:t.jsx(x,{html:F})},{id:"lin",label:"Lineáris rekurziók",content:t.jsxs("div",{children:[t.jsx(x,{html:C}),t.jsx(p,{})]})},{id:"cat",label:"Catalan-számok",content:t.jsxs("div",{children:[t.jsx(x,{html:B}),t.jsx(j,{})]})},{id:"coin",label:"Pénzváltás",content:t.jsxs("div",{children:[t.jsx(x,{html:A}),t.jsx(_,{})]})},{id:"egf",label:"Exponenciális GF",content:t.jsxs("div",{children:[t.jsx(x,{html:q}),t.jsx(N,{})]})}];function L(){return t.jsxs("div",{className:"ila",children:[t.jsx(y,{to:"/dimat",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Diszkrét matematika VI — fejezet"}),t.jsx("h1",{className:"ila__title",children:"Generátorfüggvények"}),t.jsx("p",{className:"ila__cite",children:"Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026"}),t.jsx(u,{tabs:H})]})}export{L as default};
