import{r as p,j as e,d as V}from"./index-BvP7AAxj.js";import{k as X,a as Y,S as J}from"./CodeTabs-CoffhEU9.js";import{M as W}from"./MarkdownView-iI7yxvra.js";import"./normalizeMath-D81vLFYX.js";import"./index-D6a75xKs.js";const w={en:{appTitle:"InterPlay",tagline:"Play with interpolation — Chapter 6",nav:{playground:"Playground",lagrange:"6.1 Lagrange",newton:"6.3 Newton",hermite:"6.4 Hermite",spline:"6.5 Spline"},methods:{lagrange:"Lagrange",newton:"Newton (divided diff.)",hermite:"Hermite",spline:"Natural cubic spline"},ui:{addPoint:"+ point",removePoint:"− point",reset:"Reset",dragHint:"Drag the dots to move the data points and watch the curve react.",showCos:"Show cos x",compareAll:"Compare all methods",derivatives:"Derivatives (Hermite)",challenge:"🎯 Challenge",challengeHint:"Move your points so the curve matches the dashed target!",nailedIt:"Nailed it! 🎉",points:"Data points",value:"y",deriv:"y′",light:"Light",dark:"Dark",table:"Divided-difference table",coefficients:"Newton coefficients",polynomialAt:"Evaluate at x ="},lessons:{lagrange:{title:"6.1 Lagrange Interpolation",intro:"Given pairwise different mesh points x₀,…,xₙ and values y₀,…,yₙ, we look for the unique polynomial of degree ≤ n through all points.",theoremTitle:"Theorem 6.1",theorem:"L_n(x) = \\sum_{k=0}^{n} y_k \\, l_k(x), \\qquad l_k(x)=\\prod_{i\\neq k}\\frac{x-x_i}{x_k-x_i}",body:"Each basis polynomial l_k equals 1 at x_k and 0 at the other nodes, so L_n hits every data point. Uniqueness follows from the Fundamental Theorem of Algebra.",tryIt:"Drag points below. With many equidistant nodes, watch the edges oscillate (Runge phenomenon)."},newton:{title:"6.3 Newton's Divided Difference Form",intro:"The same polynomial, written so that adding a new point only appends one term. Coefficients are divided differences.",theoremTitle:"Formula 6.6",theorem:"L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)",body:"Build the triangular table: each entry is the difference of the two to its left, divided by the spread of mesh points. The top row gives the coefficients.",tryIt:"Edit the points and watch the divided-difference table and coefficients update live."},hermite:{title:"6.4 Hermite Interpolation",intro:"Now we match function values AND derivatives at each node, giving a polynomial of degree ≤ 2n+1.",theoremTitle:"Theorem 6.18",theorem:"H_{2n+1}(x)=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots",body:"Each node is listed twice in the divided-difference table; the first divided difference of a repeated node is the given derivative value y′.",tryIt:"Set both y and y′ for each point; the tangent slope of the curve at each node matches y′."},spline:{title:"6.5 Spline Interpolation",intro:"Instead of one high-degree polynomial, join cubic pieces that stay C² — smooth and oscillation-free.",theoremTitle:"Theorem 6.22",theorem:"S_i(x)=a_i+b_i(x-x_i)+c_i(x-x_i)^2+d_i(x-x_i)^3,\\quad S''(x_0)=S''(x_n)=0",body:"The continuity conditions reduce to a tridiagonal, diagonally dominant linear system for the cᵢ — so the natural cubic spline always exists and is unique.",tryIt:"Compare the spline with the Lagrange curve on the same points — the spline never blows up at the edges."}}},hu:{appTitle:"InterPlay",tagline:"Játssz az interpolációval — 6. fejezet",nav:{playground:"Játszótér",lagrange:"6.1 Lagrange",newton:"6.3 Newton",hermite:"6.4 Hermite",spline:"6.5 Spline"},methods:{lagrange:"Lagrange",newton:"Newton (osztott diff.)",hermite:"Hermite",spline:"Természetes köbös spline"},ui:{addPoint:"+ pont",removePoint:"− pont",reset:"Alaphelyzet",dragHint:"Húzd a pontokat, és figyeld, hogyan reagál a görbe.",showCos:"cos x mutatása",compareAll:"Összes módszer összevetése",derivatives:"Deriváltak (Hermite)",challenge:"🎯 Kihívás",challengeHint:"Mozgasd a pontjaidat, hogy a görbe illeszkedjen a szaggatott célgörbére!",nailedIt:"Megvan! 🎉",points:"Alappontok",value:"y",deriv:"y′",light:"Világos",dark:"Sötét",table:"Osztott differenciák táblázata",coefficients:"Newton-együtthatók",polynomialAt:"Kiértékelés itt: x ="},lessons:{lagrange:{title:"6.1 Lagrange-interpoláció",intro:"Adott páronként különböző x₀,…,xₙ alappontok és y₀,…,yₙ értékek esetén keressük az egyértelmű, legfeljebb n-edfokú polinomot, amely átmegy minden ponton.",theoremTitle:"6.1. tétel",theorem:"L_n(x) = \\sum_{k=0}^{n} y_k \\, l_k(x), \\qquad l_k(x)=\\prod_{i\\neq k}\\frac{x-x_i}{x_k-x_i}",body:"Minden l_k alappolinom x_k-ban 1, a többi alappontban 0, így L_n minden adatponton átmegy. Az egyértelműség az algebra alaptételéből következik.",tryIt:"Húzd a pontokat. Sok ekvidisztáns alappontnál figyeld a szélek oszcillációját (Runge-jelenség)."},newton:{title:"6.3 A Lagrange-polinom Newton-féle alakja",intro:"Ugyanaz a polinom úgy felírva, hogy új pont hozzávétele csak egy taggal bővít. Az együtthatók osztott differenciák.",theoremTitle:"(6.6) képlet",theorem:"L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)",body:"Építsd fel a háromszög-táblázatot: minden elem a tőle balra lévő kettő különbsége, osztva a megfelelő alappontok különbségével. A felső sor adja az együtthatókat.",tryIt:"Módosítsd a pontokat, és nézd, ahogy a táblázat és az együtthatók élőben frissülnek."},hermite:{title:"6.4 Hermite-interpoláció",intro:"Most a függvényértékeket ÉS a deriváltakat is illesztjük minden alappontban, így legfeljebb 2n+1-edfokú polinomot kapunk.",theoremTitle:"6.18. tétel",theorem:"H_{2n+1}(x)=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots",body:"Minden alappont kétszer szerepel a táblázatban; az ismételt alappont elsőrendű osztott differenciája a megadott y′ derivált.",tryIt:"Állítsd be minden ponthoz az y és y′ értéket; a görbe érintőjének meredeksége az alappontban épp y′."},spline:{title:"6.5 Spline-interpoláció",intro:"Egyetlen magasfokú polinom helyett köbös darabokat illesztünk össze C²-folytonosan — sima és oszcillációmentes.",theoremTitle:"6.22. tétel",theorem:"S_i(x)=a_i+b_i(x-x_i)+c_i(x-x_i)^2+d_i(x-x_i)^3,\\quad S''(x_0)=S''(x_n)=0",body:"A folytonossági feltételek tridiagonális, diagonálisan domináns lineáris rendszerre vezetnek a cᵢ-kre — így a természetes köbös spline mindig létezik és egyértelmű.",tryIt:"Vesd össze a spline-t a Lagrange-görbével ugyanazon pontokon — a spline a széleken sosem szökik el."}}}};function Z({children:t,block:a=!1}){const s=p.useRef(null);return p.useEffect(()=>{s.current&&X.render(t,s.current,{throwOnError:!1,displayMode:a})},[t,a]),e.jsx("span",{ref:s,className:a?"tex-block":"tex-inline"})}const y=36;function G({points:t,curves:a,domain:s,range:i,onDrag:r,width:o=640,height:l=420}){const _=p.useRef(null),n=p.useRef(null),[$,m]=s,[h,g]=i,c=p.useCallback(x=>y+(x-$)/(m-$)*(o-2*y),[$,m,o]),u=p.useCallback(x=>l-y-(x-h)/(g-h)*(l-2*y),[h,g,l]),b=p.useCallback(x=>$+(x-y)/(o-2*y)*(m-$),[$,m,o]),L=p.useCallback(x=>h+(l-y-x)/(l-2*y)*(g-h),[h,g,l]),T=x=>{let z="",d=!1;for(let f=0;f<=240;f++){const v=$+(m-$)*f/240,S=x(v);if(!Number.isFinite(S)||S<h-50*(g-h)||S>g+50*(g-h)){d=!1;continue}const N=c(v),M=u(S);z+=`${d?"L":"M"}${N.toFixed(1)} ${M.toFixed(1)} `,d=!0}return z},A=x=>{const k=_.current.getBoundingClientRect(),z=(x.clientX-k.left)/k.width*o,d=(x.clientY-k.top)/k.height*l;return{px:z,py:d}},H=x=>{if(n.current===null||!r)return;const{px:k,py:z}=A(x);let d=b(k),f=L(z);d=Math.max($,Math.min(m,d)),f=Math.max(h,Math.min(g,f)),r(n.current,Math.round(d*100)/100,Math.round(f*100)/100)},D=[];for(let x=Math.ceil($);x<=m;x++)D.push(x);const I=[];for(let x=Math.ceil(h);x<=g;x++)I.push(x);return e.jsxs("svg",{ref:_,className:"plot",viewBox:`0 0 ${o} ${l}`,onPointerMove:H,onPointerUp:()=>n.current=null,onPointerLeave:()=>n.current=null,role:"img",children:[D.map(x=>e.jsx("line",{className:"grid",x1:c(x),y1:y,x2:c(x),y2:l-y},`gx${x}`)),I.map(x=>e.jsx("line",{className:"grid",x1:y,y1:u(x),x2:o-y,y2:u(x)},`gy${x}`)),h<=0&&g>=0&&e.jsx("line",{className:"axis",x1:y,y1:u(0),x2:o-y,y2:u(0)}),$<=0&&m>=0&&e.jsx("line",{className:"axis",x1:c(0),y1:y,x2:c(0),y2:l-y}),D.map(x=>e.jsx("text",{className:"tick",x:c(x),y:u(0)+14,textAnchor:"middle",children:x},`tx${x}`)),a.map((x,k)=>e.jsx("path",{className:"curve",d:T(x.fn),stroke:x.color,strokeDasharray:x.dashed?"7 6":void 0,fill:"none"},k)),t.map((x,k)=>e.jsxs("g",{children:[e.jsx("circle",{className:r?"pt draggable":"pt",cx:c(x.x),cy:u(x.y),r:8,onPointerDown:z=>{r&&(z.target.setPointerCapture(z.pointerId),n.current=k)}}),e.jsx("text",{className:"ptlabel",x:c(x.x)+11,y:u(x.y)-9,children:k})]},k)),a.filter(x=>x.label).length>0&&e.jsx("g",{className:"legend",transform:`translate(${o-y-150}, ${y})`,children:a.filter(x=>x.label).map((x,k)=>e.jsxs("g",{transform:`translate(0, ${k*18})`,children:[e.jsx("line",{x1:0,y1:0,x2:22,y2:0,stroke:x.color,strokeWidth:3,strokeDasharray:x.dashed?"5 4":void 0}),e.jsx("text",{className:"legendlabel",x:28,y:4,children:x.label})]},k))})]})}const R=1e-12;function ee(t,a,s){let i=1,r=1;for(let o=0;o<t.length;o++)o!==a&&(i*=s-t[o],r*=t[a]-t[o]);return r===0?NaN:i/r}function ne(t,a){const s=t.map(r=>r.x);let i=0;for(let r=0;r<t.length;r++)i+=t[r].y*ee(s,r,a);return i}function K(t,a){const s=t.length,i=Array.from({length:s},()=>[]);for(let r=0;r<s;r++)i[r][0]=a[r];for(let r=1;r<s;r++)for(let o=0;o<s-r;o++){const l=t[o+r]-t[o];i[o][r]=Math.abs(l)<R?NaN:(i[o+1][r-1]-i[o][r-1])/l}return i}function te(t,a){return K(t,a)[0]}function ie(t,a,s){let i=a[a.length-1];for(let r=a.length-2;r>=0;r--)i=i*(s-t[r])+a[r];return i}function ae(t,a,s){const i=t.length,r=2*i,o=new Array(r),l=Array.from({length:r},()=>new Array(r).fill(NaN));for(let n=0;n<i;n++)o[2*n]=t[n],o[2*n+1]=t[n],l[2*n][0]=a[n],l[2*n+1][0]=a[n];for(let n=0;n<r-1;n++)o[n+1]===o[n]?l[n][1]=s[Math.floor(n/2)]:l[n][1]=(l[n+1][0]-l[n][0])/(o[n+1]-o[n]);for(let n=2;n<r;n++)for(let $=0;$<r-n;$++){const m=o[$+n]-o[$];l[$][n]=Math.abs(m)<R?NaN:(l[$+1][n-1]-l[$][n-1])/m}const _=l[0];return{z:o,table:l,coeffs:_}}function oe(t,a){const{z:s,coeffs:i}=t;let r=i[i.length-1];for(let o=i.length-2;o>=0;o--)r=r*(a-s[o])+i[o];return r}function se(t,a){const s=t.length-1;if(s<1)return[];const i=new Array(s);for(let n=0;n<s;n++)i[n]=t[n+1]-t[n];const r=Array.from({length:s+1},()=>new Array(s+1).fill(0)),o=new Array(s+1).fill(0);r[0][0]=1,r[s][s]=1;for(let n=1;n<s;n++)r[n][n-1]=i[n-1],r[n][n]=2*(i[n-1]+i[n]),r[n][n+1]=i[n],o[n]=3/i[n]*(a[n+1]-a[n])-3/i[n-1]*(a[n]-a[n-1]);const l=le(r,o),_=[];for(let n=0;n<s;n++){const $=a[n],m=(a[n+1]-a[n])/i[n]-i[n]*(2*l[n]+l[n+1])/3,h=(l[n+1]-l[n])/(3*i[n]);_.push({x:t[n],a:$,b:m,c:l[n],d:h})}return _}function le(t,a){const s=t.length,i=t.map(l=>l.slice()),r=a.slice();for(let l=1;l<s;l++){if(Math.abs(i[l][l-1])<R)continue;const _=i[l][l-1]/i[l-1][l-1];for(let n=0;n<s;n++)i[l][n]-=_*i[l-1][n];r[l]-=_*r[l-1]}const o=new Array(s).fill(0);for(let l=s-1;l>=0;l--){let _=r[l];for(let n=l+1;n<s;n++)_-=i[l][n]*o[n];o[l]=i[l][l]===0?0:_/i[l][l]}return o}function re(t,a,s){if(t.length===0)return NaN;let i=0;for(let l=0;l<t.length;l++)s>=t[l].x&&(i=l);const r=t[i],o=s-r.x;return r.a+r.b*o+r.c*o*o+r.d*o*o*o}function xe(t,a,s){const i=a.map(o=>o.x),r=a.map(o=>o.y);switch(t){case"lagrange":return o=>ne(a,o);case"newton":{const o=te(i,r);return l=>ie(i,o,l)}case"hermite":{const o=s??r.map(()=>0),l=ae(i,r,o);return _=>oe(l,_)}case"spline":{const o=se(i,r);return l=>re(o,i,l)}default:return()=>NaN}}const _e=K,Q=xe,B=t=>Number.isFinite(t)?(Math.round(t*1e3)/1e3).toString():"—";function $e({xs:t,ys:a}){const s=_e(t,a),i=t.length;return e.jsx("div",{className:"difftable-wrap",children:e.jsx("table",{className:"difftable",children:e.jsx("tbody",{children:t.map((r,o)=>e.jsxs("tr",{children:[e.jsx("td",{className:"xi",children:B(r)}),Array.from({length:i}).map((l,_)=>{const n=_<=i-1-o&&s[o][_]!==void 0,$=o===0;return e.jsx("td",{className:n?$?"cell coeff":"cell":"cell empty",children:n?B(s[o][_]):""},_)})]},o))})})})}const O={lagrange:"#ff5d8f",newton:"#f5a623",hermite:"#9b5de5",spline:"#00bbf9"};function de(t){const a=t.map($=>$.x),s=t.map($=>$.y),i=Math.min(...a),r=Math.max(...a),o=Math.min(...s),l=Math.max(...s),_=Math.max(1,(r-i)*.25),n=Math.max(1,(l-o)*.35);return{domain:[Math.floor(i-_),Math.ceil(r+_)],range:[Math.floor(o-n),Math.ceil(l+n)]}}function fe({str:t,initialPoints:a,initialDerivs:s,primary:i,allowCompare:r=!1,showTable:o=!1,enableDerivatives:l=!1}){const[_,n]=p.useState(a),[$,m]=p.useState(s??a.map(()=>0)),[h,g]=p.useState({lagrange:i==="lagrange",newton:i==="newton",hermite:i==="hermite",spline:i==="spline"}),[c,u]=p.useState(0),b=p.useMemo(()=>{const d=_.map((f,v)=>v).sort((f,v)=>_[f].x-_[v].x);return{pts:d.map(f=>_[f]),dys:d.map(f=>$[f]??0)}},[_,$]),{domain:L,range:T}=p.useMemo(()=>de(_),[_]),A=p.useMemo(()=>{const d=[];return Object.keys(h).forEach(f=>{if(!h[f]||(f==="spline"||f==="newton")&&b.pts.length<2)return;const v=Q(f,b.pts,b.dys);d.push({fn:v,color:O[f],label:t.methods[f]})}),d},[h,b,t]),H=(d,f,v)=>n(S=>S.map((N,M)=>M===d?{x:f,y:v}:N)),D=()=>{const d=Math.max(..._.map(f=>f.x));n(f=>[...f,{x:Math.round((d+1)*10)/10,y:0}]),m(f=>[...f,0])},I=()=>{_.length<=2||(n(d=>d.slice(0,-1)),m(d=>d.slice(0,-1)))},x=()=>{n(a),m(s??a.map(()=>0))},z=p.useMemo(()=>Q(i,b.pts,b.dys),[i,b])(c);return e.jsxs("div",{className:"playground",children:[e.jsxs("div",{className:"plotcol",children:[e.jsx(G,{points:_,curves:A,domain:L,range:T,onDrag:H}),e.jsx("p",{className:"hint",children:t.ui.dragHint})]}),e.jsxs("div",{className:"controls",children:[e.jsxs("div",{className:"btnrow",children:[e.jsx("button",{onClick:D,children:t.ui.addPoint}),e.jsx("button",{onClick:I,disabled:_.length<=2,children:t.ui.removePoint}),e.jsx("button",{onClick:x,children:t.ui.reset})]}),r&&e.jsx("div",{className:"methodtoggles",children:Object.keys(h).map(d=>e.jsxs("label",{className:`chip ${h[d]?"on":""}`,children:[e.jsx("input",{type:"checkbox",checked:h[d],onChange:()=>g(f=>({...f,[d]:!f[d]}))}),e.jsx("span",{className:"swatch",style:{background:O[d]}}),t.methods[d]]},d))}),e.jsxs("div",{className:"pointeditor",children:[e.jsx("div",{className:"pe-head",children:t.ui.points}),e.jsxs("table",{className:"pe-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"x"}),e.jsx("th",{children:t.ui.value}),l&&e.jsx("th",{children:t.ui.deriv})]})}),e.jsx("tbody",{children:_.map((d,f)=>e.jsxs("tr",{children:[e.jsx("td",{className:"idx",children:f}),e.jsx("td",{children:e.jsx("input",{type:"number",step:"0.1",value:d.x,onChange:v=>H(f,parseFloat(v.target.value)||0,d.y)})}),e.jsx("td",{children:e.jsx("input",{type:"number",step:"0.1",value:d.y,onChange:v=>H(f,d.x,parseFloat(v.target.value)||0)})}),l&&e.jsx("td",{children:e.jsx("input",{type:"number",step:"0.1",value:$[f]??0,onChange:v=>m(S=>S.map((N,M)=>M===f?parseFloat(v.target.value)||0:N))})})]},f))})]})]}),e.jsxs("div",{className:"evalbox",children:[e.jsxs("label",{children:[t.ui.polynomialAt," ",e.jsx("input",{type:"number",step:"0.1",value:c,onChange:d=>u(parseFloat(d.target.value)||0)})]}),e.jsxs("span",{className:"evalresult",children:["= ",Number.isFinite(z)?(Math.round(z*1e3)/1e3).toString():"—"]})]})]}),o&&e.jsxs("div",{className:"tablecol",children:[e.jsx("h4",{children:t.ui.table}),e.jsx($e,{xs:b.pts.map(d=>d.x),ys:b.pts.map(d=>d.y)})]})]})}const he={lagrange:[{term:{en:"Lagrange interpolation problem (6.1)",hu:"Lagrange-interpolációs feladat (6.1)"},def:{en:"Given pairwise distinct nodes $x_0,\\dots,x_n$ and values $y_i$, find a polynomial $L_n$ of degree $\\le n$ with $L_n(x_i)=y_i$ for all $i$. It has a unique solution.",hu:"Adott páronként különböző $x_0,\\dots,x_n$ alappontok és $y_i$ értékek esetén keressünk egy legfeljebb $n$-edfokú $L_n$ polinomot, amelyre $L_n(x_i)=y_i$ minden $i$-re. Egyetlen megoldása van."}},{term:{en:"Lagrange basis polynomials $l_k$ (6.2)",hu:"Lagrange-alappolinomok $l_k$ (6.2)"},def:{en:"$l_k(x)=\\prod_{i\\ne k}\\dfrac{x-x_i}{x_k-x_i}$ — degree $n$, with $l_k(x_i)=\\delta_{ki}$ (1 at $x_k$, 0 at the other nodes). They also satisfy $\\sum_k l_k(x)=1$.",hu:"$l_k(x)=\\prod_{i\\ne k}\\dfrac{x-x_i}{x_k-x_i}$ — $n$-edfokú, $l_k(x_i)=\\delta_{ki}$ (1 az $x_k$-ban, 0 a többi alappontban). Teljesül $\\sum_k l_k(x)=1$ is."}},{term:{en:"Lagrange polynomial $L_n$ (Thm 6.1)",hu:"Lagrange-polinom $L_n$ (6.1. tétel)"},def:{en:"$L_n(x)=\\sum_{k=0}^n y_k\\,l_k(x)$ solves the interpolation problem. Uniqueness follows from the Fundamental Theorem of Algebra: a degree-$\\le n$ polynomial with $n+1$ roots is identically zero.",hu:"$L_n(x)=\\sum_{k=0}^n y_k\\,l_k(x)$ megoldja az interpolációs feladatot. Az egyértelműség az algebra alaptételéből következik: egy legfeljebb $n$-edfokú, $n+1$ gyökű polinom azonosan nulla."}},{term:{en:"Interpolation vs extrapolation",hu:"Interpoláció vs extrapoláció"},def:{en:"Using $L_n(x)$ to approximate $f(x)=y$ between the nodes is **interpolation**; outside the node interval it is **extrapolation**, which is typically far less accurate (Example 6.3).",hu:"Az $L_n(x)$ használata $f(x)=y$ közelítésére az alappontok között **interpoláció**; az alappont-intervallumon kívül **extrapoláció**, amely jellemzően sokkal pontatlanabb (6.3. példa)."}},{term:{en:"Generalized Rolle's theorem (Thm 6.4)",hu:"Általánosított Rolle-tétel (6.4. tétel)"},def:{en:"If $f\\in C^n[a,b]$ vanishes at $n+1$ distinct points, then $f^{(n)}(\\xi)=0$ for some $\\xi$. The key tool for the interpolation error formula.",hu:"Ha $f\\in C^n[a,b]$ eltűnik $n+1$ különböző pontban, akkor $f^{(n)}(\\xi)=0$ valamely $\\xi$-re. Az interpolációs hibaformula fő eszköze."}},{term:{en:"Interpolation error formula (Thm 6.5)",hu:"Interpolációs hibaformula (6.5. tétel)"},def:{en:"For $f\\in C^{n+1}$, $f(x)-L_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^n(x-x_i)$ for some $\\xi$ between the nodes and $x$ — the node-product factor explains where the error is largest.",hu:"$f\\in C^{n+1}$ esetén $f(x)-L_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^n(x-x_i)$ valamely $\\xi$-re az alappontok és $x$ között — az alappont-szorzat tényező mutatja, hol legnagyobb a hiba."}},{term:{en:"Equidistant error bound (Thm 6.6)",hu:"Egyenközű hibakorlát (6.6. tétel)"},def:{en:"For equidistant nodes on $[a,b]$, $|f(x)-L_n(x)|\\le\\dfrac{M_{n+1}}{4(n+1)}\\big(\\tfrac{b-a}{n}\\big)^{n+1}$ with $M_{n+1}=\\max|f^{(n+1)}|$.",hu:"$[a,b]$-n egyenközű alappontokra $|f(x)-L_n(x)|\\le\\dfrac{M_{n+1}}{4(n+1)}\\big(\\tfrac{b-a}{n}\\big)^{n+1}$, ahol $M_{n+1}=\\max|f^{(n+1)}|$."}},{term:{en:"Runge phenomenon",hu:"Runge-jelenség"},def:{en:"With many equidistant nodes, high-degree interpolation can oscillate wildly near the interval ends (the $M_{n+1}$ factor grows). Remedies: Chebyshev nodes or piecewise (spline) interpolation.",hu:"Sok egyenközű alapponttal a magas fokú interpoláció erősen oszcillálhat az intervallum szélein (az $M_{n+1}$ tényező nő). Megoldás: Csebisev-alappontok vagy szakaszonkénti (spline) interpoláció."}},{term:{en:"Bivariate Lagrange interpolation (6.5)",hu:"Kétváltozós Lagrange-interpoláció (6.5)"},def:{en:"On a rectangular grid, $L_{n,m}(x,y)=\\sum_{i,j}z_{ij}\\,l_i(x)\\tilde l_j(y)$ — a tensor product of 1-D Lagrange bases that matches $z_{ij}=f(x_i,y_j)$ at every grid point.",hu:"Téglalap rácson $L_{n,m}(x,y)=\\sum_{i,j}z_{ij}\\,l_i(x)\\tilde l_j(y)$ — az 1-D Lagrange-bázisok tenzorszorzata, amely minden rácspontban illeszkedik $z_{ij}=f(x_i,y_j)$-re."}}],newton:[{term:{en:"Divided difference",hu:"Osztott differencia"},def:{en:"Defined recursively: $f[x_0]=f(x_0)$, $f[x_0,x_1]=\\dfrac{f(x_1)-f(x_0)}{x_1-x_0}$, and in general $f[x_0,\\dots,x_n]=\\dfrac{f[x_1,\\dots,x_n]-f[x_0,\\dots,x_{n-1}]}{x_n-x_0}$.",hu:"Rekurzívan definiált: $f[x_0]=f(x_0)$, $f[x_0,x_1]=\\dfrac{f(x_1)-f(x_0)}{x_1-x_0}$, általában $f[x_0,\\dots,x_n]=\\dfrac{f[x_1,\\dots,x_n]-f[x_0,\\dots,x_{n-1}]}{x_n-x_0}$."}},{term:{en:"Explicit formula (Thm 6.10)",hu:"Explicit képlet (6.10. tétel)"},def:{en:"$f[x_0,\\dots,x_n]=\\sum_{k=0}^n\\dfrac{f(x_k)}{\\prod_{i\\ne k}(x_k-x_i)}$ — a symmetric closed form (proved by induction).",hu:"$f[x_0,\\dots,x_n]=\\sum_{k=0}^n\\dfrac{f(x_k)}{\\prod_{i\\ne k}(x_k-x_i)}$ — szimmetrikus zárt alak (indukcióval bizonyítva)."}},{term:{en:"Symmetry / order-independence (Cor 6.11)",hu:"Szimmetria / sorrendfüggetlenség (6.11)"},def:{en:"A divided difference does not depend on the order of its nodes — any permutation of $x_0,\\dots,x_n$ gives the same value. (And it depends continuously on the nodes, Cor 6.12.)",hu:"Az osztott differencia nem függ az alappontok sorrendjétől — az $x_0,\\dots,x_n$ bármely permutációja ugyanazt adja. (És folytonosan függ az alappontoktól, 6.12.)"}},{term:{en:"Newton's divided-difference form (6.6)",hu:"Newton-féle osztott differencia alak (6.6)"},def:{en:"$L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)$ — the *same* unique interpolating polynomial as Lagrange, just in a different basis.",hu:"$L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)$ — *ugyanaz* az egyértelmű interpolációs polinom, mint a Lagrange, csak más bázisban."}},{term:{en:"Divided-difference table",hu:"Osztott differencia tábla"},def:{en:"A triangular table: each entry is the difference of the two to its left divided by the spread of the relevant nodes. The top diagonal $f[x_0],f[x_0,x_1],\\dots$ gives the Newton coefficients.",hu:"Háromszög tábla: minden elem a tőle balra lévő kettő különbsége, osztva az érintett alappontok távolságával. A felső átló $f[x_0],f[x_0,x_1],\\dots$ adja a Newton-együtthatókat."}},{term:{en:"Incremental updates",hu:"Növekményes frissítés"},def:{en:"Adding a new data point only appends one term (one new divided difference) — unlike Lagrange, where every basis polynomial changes. Ideal when nodes arrive one at a time.",hu:"Új adatpont hozzáadása csak egy tagot fűz hozzá (egy új osztott differenciát) — szemben a Lagrange-zsal, ahol minden alappolinom megváltozik. Ideális, ha az alappontok egyenként érkeznek."}},{term:{en:"Confluent divided difference",hu:"Egybeeső osztott differencia"},def:{en:"As $x_1\\to x_0$, $f[x_0,x_1]\\to f'(x_0)$, so one defines $f[x_0,x_0]:=f'(x_0)$. Repeated nodes encode derivative data — the basis of Hermite interpolation.",hu:"Ha $x_1\\to x_0$, akkor $f[x_0,x_1]\\to f'(x_0)$, így $f[x_0,x_0]:=f'(x_0)$. Az ismételt alappontok deriváltadatot kódolnak — a Hermite-interpoláció alapja."}}],hermite:[{term:{en:"Hermite interpolation problem",hu:"Hermite-interpolációs feladat"},def:{en:"Match both values and first derivatives at the nodes: $g(x_i)=f(x_i)$ and $g'(x_i)=f'(x_i)$ for $i=0,\\dots,n$ — $2(n+1)$ conditions, so a unique polynomial of degree $\\le 2n+1$.",hu:"Az alappontokban az értékeket és az első deriváltakat is illesztjük: $g(x_i)=f(x_i)$ és $g'(x_i)=f'(x_i)$, $i=0,\\dots,n$ — $2(n+1)$ feltétel, így egyetlen, legfeljebb $2n+1$-edfokú polinom."}},{term:{en:"Hermite polynomial $H_{2n+1}$ (Thm 6.18)",hu:"Hermite-polinom $H_{2n+1}$ (6.18. tétel)"},def:{en:"The unique degree-$\\le(2n+1)$ solution. Geometrically its graph passes through each $(x_i,y_i)$ with prescribed tangent slope $y_i'$. Uniqueness: a nonzero difference would have $2n+2$ roots (each $x_i$ doubled).",hu:"Az egyetlen, legfeljebb $(2n+1)$-edfokú megoldás. Geometriailag a grafikonja minden $(x_i,y_i)$-n átmegy az előírt $y_i'$ érintő-meredekséggel. Egyértelműség: egy nemnulla különbségnek $2n+2$ gyöke lenne (minden $x_i$ kétszeres)."}},{term:{en:"Repeated-node divided differences",hu:"Ismételt alappontú osztott differenciák"},def:{en:"Hermite reuses Newton's form with each node listed twice: $H_{2n+1}=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots$, where $f[x_i,x_i]=f'(x_i)$.",hu:"A Hermite a Newton-alakot használja minden alappontot kétszer felsorolva: $H_{2n+1}=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots$, ahol $f[x_i,x_i]=f'(x_i)$."}},{term:{en:"Hermite divided-difference table",hu:"Hermite osztott differencia tábla"},def:{en:"Build the divided-difference table with each $x_i$ duplicated; the first-column repeats hold $f(x_i)$ and the first divided difference of a repeated pair is the given derivative $f'(x_i)$. The top diagonal gives the Hermite coefficients.",hu:"Építsd fel az osztott differencia táblát minden $x_i$-t megkettőzve; az első oszlop ismétlései $f(x_i)$-t tartják, és egy ismételt pár első osztott differenciája az adott $f'(x_i)$ derivált. A felső átló adja a Hermite-együtthatókat."}},{term:{en:"Hermite error formula (Thm 6.19)",hu:"Hermite hibaformula (6.19. tétel)"},def:{en:"For $f\\in C^{2n+2}$, $f(x)-H_{2n+1}(x)=\\dfrac{f^{(2n+2)}(\\xi)}{(2n+2)!}\\prod_{i=0}^n(x-x_i)^2$ — the node factors are *squared*, reflecting the double matching.",hu:"$f\\in C^{2n+2}$ esetén $f(x)-H_{2n+1}(x)=\\dfrac{f^{(2n+2)}(\\xi)}{(2n+2)!}\\prod_{i=0}^n(x-x_i)^2$ — az alappont-tényezők *négyzeten* vannak, a kettős illesztést tükrözve."}},{term:{en:"Limit of Lagrange interpolation",hu:"A Lagrange-interpoláció határeseteként"},def:{en:"$H_{2n+1}$ is the limit of the Lagrange polynomial on $2n+2$ nodes as each extra node $\\tilde x_i\\to x_i$ — the confluent (coalescing-node) case of ordinary interpolation.",hu:"$H_{2n+1}$ a $2n+2$ alappontú Lagrange-polinom határértéke, amikor minden extra $\\tilde x_i\\to x_i$ — a hagyományos interpoláció egybeeső alappontú (konfluens) esete."}}],spline:[{term:{en:"Spline function (degree $k$)",hu:"Spline-függvény ($k$-adfokú)"},def:{en:"A function $S\\in C^{k-1}[a,b]$ that is a polynomial of degree $\\le k$ on each subinterval $[x_i,x_{i+1}]$. Degrees 1, 2, 3 give linear, quadratic and cubic splines.",hu:"Olyan $S\\in C^{k-1}[a,b]$ függvény, amely minden $[x_i,x_{i+1}]$ részintervallumon legfeljebb $k$-adfokú polinom. Az 1, 2, 3 fok a lineáris, kvadratikus és köbös spline-t adja."}},{term:{en:"Cubic spline — why",hu:"Köbös spline — miért"},def:{en:"Cubic splines are $C^2$ (twice continuously differentiable): smooth enough for practice and free of the Runge oscillations of high-degree single-polynomial interpolation.",hu:"A köbös spline $C^2$ (kétszer folytonosan differenciálható): a gyakorlatban elég sima, és mentes a magas fokú egypolinomos interpoláció Runge-oszcillációitól."}},{term:{en:"Continuity conditions (6.10–6.13)",hu:"Folytonossági feltételek (6.10–6.13)"},def:{en:"Each piece matches the data ($S_i(x_i)=y_i$, $S_i(x_{i+1})=y_{i+1}$) and joins its neighbour smoothly: equal first and second derivatives at every interior node ($S_i'=S_{i+1}'$, $S_i''=S_{i+1}''$).",hu:"Minden szakasz illeszkedik az adatra ($S_i(x_i)=y_i$, $S_i(x_{i+1})=y_{i+1}$), és simán csatlakozik a szomszédjához: minden belső pontban egyenlő első és második derivált ($S_i'=S_{i+1}'$, $S_i''=S_{i+1}''$)."}},{term:{en:"Natural spline (6.14)",hu:"Természetes spline (6.14)"},def:{en:"Closes the system with zero curvature at the ends: $S''(x_0)=S''(x_n)=0$. The natural cubic spline interpolation problem has a unique solution (Thm 6.22).",hu:"A rendszert nulla görbülettel zárja a végeken: $S''(x_0)=S''(x_n)=0$. A természetes köbös spline interpolációs feladatnak egyetlen megoldása van (6.22. tétel)."}},{term:{en:"Clamped spline (6.23)",hu:"Rögzített (clamped) spline (6.23)"},def:{en:"Instead of zero end-curvature, prescribe the end slopes $S'(x_0)=y_0'$, $S'(x_n)=y_n'$. Usually more accurate than natural when the true end derivatives are known.",hu:"A nulla véggörbület helyett a végmeredekségeket írjuk elő: $S'(x_0)=y_0'$, $S'(x_n)=y_n'$. Általában pontosabb a természetesnél, ha a valódi végderiváltak ismertek."}},{term:{en:"Tridiagonal system for $c_i$ (6.22)",hu:"Tridiagonális rendszer a $c_i$-kre (6.22)"},def:{en:"Eliminating $b_i,d_i$ leaves a tridiagonal, diagonally dominant system for the second-derivative coefficients $c_i$, solvable in $\\mathcal{O}(n)$ by the Thomas algorithm; then $d_i=(c_{i+1}-c_i)/(3\\Delta x_i)$ and $b_i$ follow.",hu:"A $b_i,d_i$ kiküszöbölése egy tridiagonális, diagonálisan domináns rendszert hagy a második derivált $c_i$ együtthatókra, amely a Thomas-algoritmussal $\\mathcal{O}(n)$-ben megoldható; majd $d_i=(c_{i+1}-c_i)/(3\\Delta x_i)$ és $b_i$ adódik."}}]},ce={lagrange:[{q:"In the context of interpolation, what are the given pairwise different points $x_0, x_1, \\ldots, x_n$ called?",a:"Mesh points (or node points)."},{q:"The problem of finding a polynomial $L_n$ of degree at most $n$ such that $L_n(x_i) = y_i$ for $i = 0, \\ldots, n$ is known as _____.",a:"Lagrange interpolation"},{q:"What is the maximum degree of a Lagrange interpolating polynomial that fits $n+1$ data points?",a:"$n$"},{q:"How many distinct solutions exist for a Lagrange interpolation problem with $n+1$ points and a polynomial of degree at most $n$?",a:"Exactly one (the solution is unique)."},{q:"What is the specific name given to the polynomials $l_0, \\ldots, l_n$ used to construct the Lagrange polynomial?",a:"Lagrange basis polynomials of degree $n$."},{q:"What is the value of the Lagrange basis polynomial $l_k(x_i)$ when $k \\ne i$?",a:"0"},{q:"What is the value of the Lagrange basis polynomial $l_k(x_i)$ when $k = i$?",a:"1"},{q:"Using basis polynomials $l_k(x)$, what is the formula for the Lagrange interpolating polynomial $L_n(x)$?",a:"$L_n(x) = \\sum_{k=0}^{n} y_k l_k(x)$"},{q:"In the uniqueness proof for Lagrange interpolation, if $P(x)$ is the difference of two $n$-th degree interpolating polynomials, how many roots must $P(x)$ have?",a:"$n + 1$ roots."},{q:"Which mathematical theorem is invoked to prove that the difference polynomial $P(x)$ in Lagrange interpolation must be identically zero?",a:"The Fundamental Theorem of Algebra."},{q:"What is the term for approximating a function value $f(x)$ using an interpolating polynomial when $x$ is outside the interval determined by the mesh points?",a:"Extrapolation"},{q:"What is the term for approximating a function value $f(x)$ using an interpolating polynomial when $x$ is located between two mesh points?",a:"Interpolation"},{q:"Concept: Rolle's Theorem",a:"Definition: If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a) = f(b)$, there exists $\\xi \\in (a,b)$ such that $f'(\\xi) = 0$."},{q:"According to the Generalized Rolle's Theorem, if $f \\in C^n(a,b)$ has $n+1$ roots, what can be said about the $n$-th derivative $f^{(n)}$?",a:"There exists at least one point $\\xi$ in the interval spanned by the roots where $f^{(n)}(\\xi) = 0$."},{q:"Let $f \\in C^{n+1}(a,b)$. What is the error term formula for $f(x) - L_n(x)$?",a:"$\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n)$"},{q:"In the Lagrange interpolation error formula, what does the value $\\xi$ depend on?",a:"The value of $x$ (and the mesh points $x_i$)."},{q:"What does the notation $\\langle x, x_0, x_1, \\ldots, x_n \\rangle$ represent in the context of the error term $\\xi$?",a:"The smallest interval containing $x$ and all mesh points $x_0, \\ldots, x_n$."},{q:"When the mesh points are equidistant, the formula for $x_i$ is $x_i = x_0 + i \\cdot$ _____.",a:"$h$ (where $h$ is the step size)."},{q:"What does $M_{n+1}$ represent in the truncation error bound formula?",a:"$M_{n+1} = \\max\\{|f^{(n+1)}(t)| : t \\in [x_0, x_n]\\}$"},{q:"For equidistant points on $[a,b]$, what is the upper bound for the error $|f(x) - L_n(x)|$ in terms of $M_{n+1}$ and the interval length?",a:"$\\frac{M_{n+1}}{4(n+1)} (\\frac{b-a}{n})^{n+1}$"},{q:"If $x$ is in the interval $(x_k, x_{k+1})$ and the points are equidistant with step $h$, what is the maximum value of $|(x - x_k)(x - x_{k+1})|$?",a:"$\\frac{h^2}{4}$"},{q:"Why do Lagrange polynomials typically fail to approximate $\\cos x$ well outside the interval defined by the mesh points?",a:"The cosine function is bounded, whereas polynomials of degree $n \\ge 1$ are unbounded as $|x| \\to \\infty$."},{q:"In bivariate Lagrange interpolation on a rectangular domain, the interpolating function $L_{n,m}(x, y)$ is a _____ summation.",a:"double"},{q:"Bivariate Lagrange Formula: $L_{n,m}(x, y) = \\sum_{i=0}^{n} \\sum_{j=0}^{m} z_{ij} \\cdot$ _____.",a:"$l_i(x) \\tilde{l}_j(y)$"},{q:"In bivariate Lagrange interpolation $L_{n,m}(x, y)$, if $y$ is fixed, the function becomes a polynomial in $x$ of degree at most _____.",a:"$n$"},{q:"In bivariate Lagrange interpolation $L_{n,m}(x, y)$, if $x$ is fixed, the function becomes a polynomial in $y$ of degree at most _____.",a:"$m$"},{q:"According to Theorem 6.8, what is the derivative of the function $x \\mapsto f^{(n+1)}(\\xi(x))$ with respect to $x$?",a:"$\\frac{1}{n+2} f^{(n+2)}(\\eta(x))$"},{q:"Formula: Lagrange Basis Polynomial $l_k(x)$",a:"$l_k(x) = \\prod_{i=0, i \\ne k}^n \\frac{x - x_i}{x_k - x_i}$"},{q:"If we use 3 mesh points to interpolate $\\cos x$ on $[-\\pi, \\pi]$, what is the degree of the resulting Lagrange polynomial $L_2(x)$?",a:"2 (Quadratic)."},{q:"If we use 5 mesh points to interpolate $\\cos x$ on $[-\\pi, \\pi]$, what is the degree of the resulting Lagrange polynomial $L_4(x)$?",a:"4 (Quartic)."},{q:"What is the error bound for $L_2(x)$ interpolating $\\cos x$ on $[-\\pi, \\pi]$ using mesh points $-\\pi, 0, \\pi$?",a:"$\\approx 2.5839$ (Upper estimate)."},{q:"What happens to the error bound of a Lagrange polynomial as the number of data points $n$ increases, provided $M_{n+1}$ is appropriately bounded?",a:"The error bound typically decreases (tends toward zero)."},{q:"The points $z_{ij}$ in bivariate interpolation correspond to $f(x_i, y_j)$. What is the condition $L_{n,m}(x_i, y_j)$ must satisfy?",a:"$L_{n,m}(x_i, y_j) = z_{ij}$"},{q:"If an interpolation problem uses points $x_0 = 0, x_1 = 1, x_2 = 2$, what is the denominator of the basis polynomial $l_1(x)$?",a:"$(1-0)(1-2) = -1$"},{q:"If $L_3(x)$ interpolates four points and we know the fourth derivative of the original function $f$ is zero, what is the interpolation error?",a:"Zero (the interpolation is exact)."},{q:"In the expression $l_k(x) = \\frac{\\omega(x)}{(x-x_k)\\omega'(x_k)}$, what is $\\omega(x)$?",a:"The nodal polynomial $\\prod_{i=0}^n (x - x_i)$."},{q:"Does the order of the mesh points ($x_0 < x_1 < \\dots < x_n$) affect the existence of the Lagrange polynomial?",a:"No, as long as the points are pairwise distinct."},{q:"How does the degree of a bivariate Lagrange polynomial $L_{2,1}(x, y)$ compare in each variable?",a:"It is degree 2 in $x$ and degree 1 in $y$."},{q:"What is the term for the set of $l_i(x)$ because any polynomial of degree $n$ can be written as their linear combination?",a:"Basis (specifically the Lagrange Basis)."},{q:"What is the sum of all Lagrange basis polynomials $\\sum_{i=0}^n l_i(x)$ for any $x$?",a:"1"},{q:"In the construction of $l_k(x)$, why is the term $(x - x_k)$ omitted from the numerator?",a:"To ensure the polynomial has degree $n$ rather than $n+1$ and to avoid a zero value at $x = x_k$."},{q:"In the construction of $l_k(x)$, why is the term $(x_k - x_k)$ omitted from the denominator?",a:"To avoid division by zero."},{q:"If $f \\in C^2[a,b]$ and $f(x_0)=f(x_1)=f(x_2)=0$, how many zeros does $f''$ have according to Rolle's theorem?",a:"At least one."},{q:"When constructing $L_3(x)$ for points $(-1, -2), (1, 0), (2, -2), (3, 2)$, what is the contribution of the point $(1, 0)$ to the summation?",a:"0 (because $y_k = 0$)."},{q:"What is the limit of the error $|f(x) - L_n(x)|$ at any mesh point $x_i$?",a:"0"},{q:"In bivariate interpolation, how many data points are required for an $L_{n,m}$ polynomial?",a:"$(n+1)(m+1)$ points."},{q:"The error estimate $|f(x) - L_n(x)| \\le \\frac{M_{n+1}}{4(n+1)}h^{n+1}$ assumes that mesh points are _____.",a:"equidistant"},{q:"How does the step size $h$ relate to the interval $[a,b]$ and number of points $n+1$ in an equidistant mesh?",a:"$h = \\frac{b-a}{n}$"},{q:"What is the requirement for $f$ to apply the Lagrange error formula with an $n$-th degree polynomial?",a:"$f$ must be $n+1$ times continuously differentiable ($f \\in C^{n+1}$)."},{q:"In the proof of the error theorem, the auxiliary function $g(t)$ is designed to have how many roots?",a:"$n + 2$ roots (the $n+1$ mesh points plus the point $x$)."},{q:"What is the $(n+1)$-th derivative of any polynomial $L_n$ of degree $n$?",a:"0"},{q:"If $L_3(x) = x^3 - 3x^2 + 2$, what is the value of $L_3(1)$?",a:"0"},{q:"What is the name of the constant $h$ in equidistant interpolation?",a:"Step size (or spacing)."},{q:"For a function $f(x)$, if we increase the number of points $n$ but $M_{n+1}$ grows very rapidly, does the interpolation error necessarily decrease?",a:"No (this can lead to Runge's phenomenon, though not explicitly named in the text)."},{q:"What is the degree of the bivariate basis polynomial product $l_i(x)\\tilde{l}_j(y)$ with respect to $x$?",a:"$n$"},{q:"What is the degree of the bivariate basis polynomial product $l_i(x)\\tilde{l}_j(y)$ with respect to $y$?",a:"$m$"},{q:"Term: Lagrange-féle alappolinom",a:"Definition: Hungarian term for Lagrange basis polynomial."},{q:"Term: Ekvidisztáns osztópontok",a:"Definition: Hungarian term for equidistant mesh points."},{q:"In Example 6.9, the resulting polynomial is $-\\frac{1}{2}x^2y + \\frac{5}{2}x^2 + \\dots$. What is its degree in $y$?",a:"1 (First order)."},{q:"The error bound for equidistant interpolation contains the term $n!$ in its derivation. Where does this $n!$ originate?",a:"From the product of distances between equidistant points, e.g., $(k+1)!(n-k)! \\le n!$."}],newton:[{q:"Given a function $f$, what is the definition of the zeroth divided difference $f[x_0]$?",a:"$f[x_0] := f(x_0)$"},{q:"What is the formula for the first divided difference $f[x_0, x_1]$ relative to mesh points $x_0$ and $x_1$?",a:"$f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$"},{q:"How is the $n$-th divided difference $f[x_0, x_1, \\ldots, x_n]$ defined recursively?",a:"$f[x_0, x_1, \\ldots, x_n] := \\frac{f[x_1, x_2, \\ldots, x_n] - f[x_0, x_1, \\ldots, x_{n-1}]}{x_n - x_0}$"},{q:"In the recursive definition of $f[x_0, x_1, \\ldots, x_n]$, which mesh point is omitted in the first term of the numerator?",a:"$x_0$"},{q:"In the recursive definition of $f[x_0, x_1, \\ldots, x_n]$, which mesh point is omitted in the second term of the numerator?",a:"$x_n$"},{q:"What is the denominator in the recursive definition of an $n$-th order divided difference?",a:"$x_n - x_0$"},{q:"What condition must mesh points $x_i$ satisfy for the standard divided difference definition to be valid?",a:"They must be pairwise different."},{q:"Does the definition of divided differences require that mesh points be ordered increasingly?",a:"No, mesh points do not have to be ordered increasingly."},{q:"According to Theorem 6.10, what is the explicit summation formula for $f[x_0, x_1, \\ldots, x_n]$?",a:"$\\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)}$"},{q:"In the explicit formula for $f[x_0, x_1, \\ldots, x_n]$, what is the value of the denominator's 'empty product' when $n = 0$?",a:"1"},{q:"What proof technique is used to demonstrate the validity of the explicit formula for divided differences?",a:"Mathematical induction with respect to $n$."},{q:"How does changing the order of mesh points affect the value of a divided difference?",a:"The value remains unchanged; divided differences are independent of the order of mesh points."},{q:"Under what condition on function $f$ do divided differences depend continuously on the mesh points?",a:"$f$ must be continuous."},{q:"What is the limit of the first divided difference $f[x_0, x_1]$ as $x_1$ approaches $x_0$?",a:"$f'(x_0)$"},{q:"How is the first divided difference relative to equal mesh points, $f[x_0, x_0]$, defined?",a:"$f[x_0, x_0] := f'(x_0)$"},{q:"Why is the definition $f[x_0, x_0] = f'(x_0)$ used for differentiable functions?",a:"To extend the function $x_1 \\mapsto f[x_0, x_1]$ continuously to the case where $x_1 = x_0$."},{q:"What is the value of $f[x_0, x_1, x_2, x_3]$ for $f(x) = x^2$ and mesh points $x_i = i$?",a:"0"},{q:"For $f(x) = \\sin x$ and $x_0 = 0$, what is the value of the divided difference $f[x_0, x_0]$?",a:"1 (since $\\sin'(0) = \\cos(0) = 1$)"},{q:"If $f \\in C^1[a,b]$, what does the mean value property state regarding $f[x_0, x_1]$?",a:"There exists $\\xi$ in the interval between $x_0$ and $x_1$ such that $f[x_0, x_1] = f'(\\xi)$."},{q:"In the Newton form polynomial $P(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + \\ldots$, what is the coefficient $a_0$?",a:"$a_0 = P[x_0]$"},{q:"In the Newton form polynomial, what is the coefficient $a_1$ representing?",a:"$a_1 = P[x_0, x_1]$"},{q:"In the Newton form polynomial, what is the coefficient $a_k$ representing?",a:"$a_k = P[x_0, x_1, \\ldots, x_k]$"},{q:"From a numerical standpoint, is the recursive definition or the explicit summation formula more practical for computation?",a:"The recursive definition is more practical."},{q:"Why is the explicit formula for divided differences theoretically important if it is numerically impractical?",a:"It proves that the value is independent of point order and depends continuously on the points."},{q:"The first divided difference $f[x_0, x_1]$ can be interpreted as the _____ quotient of $f$ at those points.",a:"difference"},{q:"What is the result of a first-order divided difference if $f(x)$ is a constant function?",a:"0"},{q:"Term: Mesh points",a:"Definition: The specific points $x_0, x_1, \\ldots, x_n$ in the domain of $f$ used to compute divided differences."},{q:"How many lower-order divided differences are subtracted in the numerator of the recursive step for an $n$-th order divided difference?",a:"Two ($f[x_1, \\ldots, x_n]$ and $f[x_0, \\ldots, x_{n-1}]$)"},{q:"In the context of divided differences, what does the notation $f[x_0, x_1, \\ldots, x_n]$ represent?",a:"The $n$-th order divided difference of function $f$ at the points $x_0, \\ldots, x_n$."},{q:"If $f$ is a linear function, what is the value of the second divided difference $f[x_0, x_1, x_2]$?",a:"0"},{q:"In the induction proof for Theorem 6.10, the step from $n$ to $n+1$ involves substituting the _____ into the recursive definition.",a:"inductive hypothesis"},{q:"What is the relationship between $f[x_0, x_1]$ and $f[x_1, x_0]$?",a:"They are equal ($f[x_0, x_1] = f[x_1, x_0]$)."},{q:"How many mesh points are involved in a third-order divided difference calculation?",a:"Four ($x_0, x_1, x_2, x_3$)"},{q:"For a differentiable function, $f[x_0, x_1]$ is a continuous function of $x_1$ except possibly at _____.",a:"$x_1 = x_0$"},{q:"What is the first divided difference of $f(x) = x$ for any distinct $x_0, x_1$?",a:"1"},{q:"In the formula $f[x_0, x_1, \\ldots, x_n] = \\sum_{i=0}^{n} \\frac{f(x_i)}{D_i}$, what is $D_i$?",a:"$(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)$"},{q:"True or False: The recursive definition of divided differences is preferred in numerics because it uses fewer calculations than the explicit formula.",a:"True"},{q:"What is the denominator of the term involving $f(x_0)$ in the explicit summation formula for $f[x_0, x_1, x_2]$?",a:"$(x_0 - x_1)(x_0 - x_2)$"},{q:"The formula $f[x_0, x_1] = f'(\\xi)$ is essentially a restatement of which calculus theorem?",a:"The Mean Value Theorem"},{q:"In the expression $a_3(x - x_0)(x - x_1)(x - x_2)$ from Exercise 3, what is $a_3$?",a:"$P[x_0, x_1, x_2, x_3]$"},{q:"If mesh points are shifted by a constant, does the value of the divided difference of a polynomial change?",a:"No, because it depends on the differences between points (and function values)."},{q:"What is the value of the first divided difference $f[x_0, x_1]$ if $f(x_1) = f(x_0)$?",a:"0"},{q:"The notation $f[x_1, x_2, \\ldots, x_n]$ omits the point $x_0$ and represents a divided difference of order _____.",a:"$n-1$"},{q:"In the explicit formula, the denominator for a specific $f(x_i)$ is a product of how many linear factors $(x_i - x_j)$?",a:"$n$"},{q:"The continuity of divided differences with respect to mesh points (Corollary 6.12) is a direct consequence of the _____ formula.",a:"explicit (summation)"},{q:"In Exercise 1b, $x_i = 0.2i$. What is the value of $x_2$?",a:"0.4"},{q:"If $x_0 = 1$ and $x_1 = 3$, and $f(x) = x^3$, what is $f[1, 3]$?",a:"$\\frac{3^3 - 1^3}{3 - 1} = \\frac{27 - 1}{2} = 13$"},{q:"How does the complexity of the explicit summation formula for $f[x_0, \\ldots, x_n]$ grow relative to $n$?",a:"It requires computing a product of $n$ terms for each of the $n+1$ summands."},{q:"Does Corollary 6.11 imply that $f[x_0, x_1, x_2] = f[x_2, x_0, x_1]$?",a:"Yes, because the order of mesh points does not matter."},{q:"In the proof of Theorem 6.10, what algebraic step is performed on the sum $\\sum_{i=1}^n$?",a:"Factoring out terms to combine the two summations using a common denominator $(\\frac{1}{x_i - x_{n+1}} - \\frac{1}{x_i - x_0})$."},{q:"What is the main disadvantage of the standard Lagrange interpolation formula when adding a new mesh point?",a:"The entire formula must be recomputed from scratch."},{q:"How is the Newton form of the Lagrange polynomial superior to the standard form regarding new data points?",a:"It allows adding a new mesh point by simply appending a correction term to the existing formula."},{q:"In the Newton form derivation, $L_0(x)$ is defined as which constant function?",a:"$f(x_0)$"},{q:"In the derivation of the Newton form, what is the maximum possible degree of the polynomial difference $L_i(x) - L_{i-1}(x)$?",a:"$i$"},{q:"Which set of points serves as roots for the polynomial difference $L_i(x) - L_{i-1}(x)$?",a:"$x_0, x_1, \\dots, x_{i-1}$"},{q:"According to the Fundamental Theorem of Algebra, $L_i(x) - L_{i-1}(x)$ can be factored into $a_i$ multiplied by which product?",a:"$\\prod_{j=0}^{i-1} (x - x_j)$"},{q:"What mathematical term is used for the coefficients $a_i$ in the Newton form of the interpolating polynomial?",a:"Divided differences"},{q:"Write the general Newton form of the $n$-th degree Lagrange interpolating polynomial $L_n(x)$.",a:"$L_n(x) = f[x_0] + \\sum_{i=1}^n f[x_0, \\dots, x_i] \\prod_{j=0}^{i-1} (x - x_j)$"},{q:"What is the correction term added to $L_n(x)$ to obtain $L_{n+1}(x)$ in the Newton form?",a:"$f[x_0, x_1, \\dots, x_{n+1}](x - x_0)(x - x_1) \\dots (x - x_n)$"},{q:"Which efficient numerical method is used to evaluate the Newton form of the interpolating polynomial?",a:"Horner's method"},{q:"If the $n$-th order divided difference $f[x_0, x_1, \\dots, x_n]$ is non-zero, what is the degree of the Newton polynomial?",a:"$n$"},{q:"In a divided difference table used for manual calculation, what do the first and second columns represent?",a:"The mesh points $x_i$ and the function values $f(x_i)$."},{q:"Where are the coefficients for the Newton polynomial located in a standard triangular divided difference table?",a:"Along the top diagonal of the table."},{q:"What is the recursive formula for the $k$-th order divided difference $f[x_0, \\dots, x_k]$?",a:"$f[x_0, \\dots, x_k] = \\frac{f[x_1, \\dots, x_k] - f[x_0, \\dots, x_{k-1}]}{x_k - x_0}$"},{q:"Formula: First-order divided difference $f[x_0, x_1]$?",a:"$f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$"},{q:"In the error theorem for the Newton form, what is the expression for the truncation error $f(x) - L_n(x)$?",a:"$f[x_0, x_1, \\dots, x_n, x] \\prod_{i=0}^n (x - x_i)$"},{q:"What is the relationship between the $n$-th order divided difference $f[x_0, \\dots, x_n]$ and the $n$-th derivative of $f$?",a:"$f[x_0, \\dots, x_n] = \\frac{f^{(n)}(\\xi)}{n!}$ for some $\\xi \\in \\langle x_0, \\dots, x_n \\rangle$."},{q:"If $P$ is a polynomial of degree $n$, what is the value of the divided difference $P[x_0, \\dots, x_m]$ for any $m > n$?",a:"$0$"},{q:"For a polynomial $f(x) = c_0 + c_1 x + \\dots + c_n x^n$, which divided difference equals the leading coefficient $c_n$?",a:"$f[x_0, x_1, \\dots, x_n]$"},{q:"What happens to the divided difference $f[x_0, x_1, \\dots, x_n]$ as all mesh points $x_i$ approach a single point $x_0$?",a:"It converges to $\\frac{f^{(n)}(x_0)}{n!}$."},{q:"How is the second-order confluent divided difference $f[x_0, x_0, x_1]$ defined?",a:"$f[x_0, x_0, x_1] = \\frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$"},{q:"What is the value of the confluent divided difference $f[x_0, x_0, x_0]$ in terms of derivatives?",a:"$\\frac{f''(x_0)}{2}$"},{q:"Using the data points $(-1, -2), (1, 0), (2, -2), (3, 2)$, what is the first-order divided difference $f[-1, 1]$?",a:"$1$"},{q:"Given mesh points $(-1, 1, 2, 3)$ and function values $(-2, 0, -2, 2)$, what is the value of the Newton polynomial $L_3(0)$?",a:"$2$"},{q:"Given data $(-1, -3), (1, 1), (2, 3), (3, 29)$, find the third-order divided difference $f[-1, 1, 2, 3]$.",a:"$3$"},{q:"In Example 6.15, what is the Newton form of $L_3(x)$ for the data points starting at $(-1, -3)$ and ending at $(3, 29)$?",a:"$L_3(x) = -3 + 2(x + 1) + 0(x + 1)(x - 1) + 3(x + 1)(x - 1)(x - 2)$"},{q:"How many arithmetic operations are generally required to evaluate a Newton polynomial using Horner's method compared to the standard Lagrange form?",a:"Significantly fewer, as it avoids repeated products and summations."},{q:"What property of divided differences ensures that $f[x_0, x_1] = f[x_1, x_0]$?",a:"Symmetry (divided differences are independent of the order of the points)."},{q:"In the process of proving the truncation error theorem, why is $x$ added to the set of mesh points?",a:"To construct a higher-degree interpolating polynomial $L_{n+1}(t)$ that equals $f(x)$ at $t=x$."},{q:"What is the primary utility of the divided difference form of the truncation error in theoretical analysis?",a:"It provides a direct link between divided differences and derivatives through the Mean Value Theorem."},{q:"In Algorithm 6.13, why are only specific divided differences stored by the end of the execution?",a:"To save memory by only keeping the coefficients necessary for the Newton polynomial."},{q:"What is the zeroth-order divided difference $f[x_i]$ equivalent to?",a:"$f(x_i)$"},{q:"How is the denominator determined for a $k$-th order divided difference in a manual table?",a:"It is the difference between the last mesh point and the first mesh point involved in that specific difference ($x_k - x_0$)."},{q:"If $L_3(x) = x^3 - 3x^2 + 2$, what is the coefficient $f[x_0, x_1, x_2, x_3]$ for any four distinct points?",a:"$1$"},{q:"Under what condition is the divided difference $f[x_0, x_1, \\dots, x_n, x]$ practically calculable for error estimation?",a:"Only when the exact function value $f(x)$ is already known."},{q:"What does the expression $\\prod_{k=0}^{i-1} (x - x_k)$ represent in the Newton form?",a:"The basis polynomials of the Newton form."},{q:"In the context of divided differences, what does the notation $\\langle x_0, x_1, \\dots, x_n \\rangle$ represent?",a:"The smallest interval containing all the points $x_0, x_1, \\dots, x_n$."},{q:"How does Horner's method organize the computation of $L_n(x)$ in Newton form?",a:"It nests the linear factors to minimize the number of multiplications."},{q:"Exercise 8: Show that the limit of $f[x_0, x_1, x_2]$ as $(x_1, x_2) \\to (x_0, x_0)$ is equal to _____.",a:"$f[x_0, x_0, x_0]$ (or $\\frac{f''(x_0)}{2}$)"},{q:"What is the role of the Fundamental Theorem of Algebra in deriving the Newton form?",a:"It justifies the product form of the difference $L_i(x) - L_{i-1}(x)$ based on its known roots."},{q:"When computing a divided difference table by hand, what shape does the resulting data structure take?",a:"A triangular table."},{q:"Is the Newton form a different polynomial than the Lagrange form for the same set of data points?",a:"No, it is the same unique interpolating polynomial expressed in a different algebraic form."},{q:"In Example 6.15, what was the first-order divided difference $f[2, 3]$ for the data $(2, 3)$ and $(3, 29)$?",a:"$26$"},{q:"In Example 6.15, what was the second-order divided difference $f[1, 2, 3]$ derived from $f[1, 2]=2$ and $f[2, 3]=26$?",a:"$12$"},{q:"What is the relationship between $f[x_1, x_0, x_0]$ and $f[x_0, x_0, x_1]$?",a:"They are equal ($f[x_1, x_0, x_0] = f[x_0, x_0, x_1]$)."},{q:"If a polynomial $P(x)$ has degree $n$, what can be said about its $(n+1)$-th derivative in the context of divided differences?",a:"It is zero, which corresponds to the $(n+1)$-th divided difference being zero."},{q:"In the manual calculation $f[x_0, x_1, x_2] = \\frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0}$, which mesh points are used in the divisor?",a:"$x_2$ and $x_0$"},{q:"What is the value of $L_n(x_j)$ for $j \\in \\{0, 1, \\dots, n\\}$?",a:"$f(x_j)$"},{q:"Why is the Newton form preferred in computer programming for interpolation tasks?",a:"Due to its recursive nature and computational efficiency through Horner's method."},{q:"The formula $f[x_0, \\dots, x_n] = \\sum_{k=0}^n \\frac{f(x_k)}{\\prod_{j \\ne k} (x_k - x_j)}$ provides which type of definition for divided differences?",a:"The explicit (non-recursive) sum-based definition."},{q:"According to the video transcript, what happens to the terms in the expansion $L_0 + (L_1 - L_0) + (L_2 - L_1) + \\dots$?",a:"They telescope, simplifying to $L_n$."},{q:"In the video Example, how is the value '1' calculated for the first difference column between points $(-1, -2)$ and $(1, 0)$?",a:"$\\frac{0 - (-2)}{1 - (-1)} = \\frac{2}{2} = 1$"}],hermite:[{q:"What secondary values are interpolated in the Hermite interpolation problem alongside the function values $y_i = f(x_i)$?",a:"The derivative values $y_i' = f'(x_i)$."},{q:"If there are $n + 1$ distinct mesh points, what is the maximum degree of the unique Hermite interpolating polynomial $H_{2n+1}$?",a:"The maximum degree is $2n + 1$."},{q:"How many total equations are specified by the interpolation conditions for $n + 1$ nodes in a standard Hermite problem?",a:"There are $2(n + 1)$ equations."},{q:"Geometrically, what does $g'(x_i) = y_i'$ ensure about the graph of the Hermite polynomial at node $x_i$?",a:"It ensures the tangent line at $x_i$ has a slope equal to $y_i'$."},{q:"In the uniqueness proof for Hermite interpolation, what is the multiplicity of each root $x_i$ for the difference polynomial $P = H_{2n+1} - \\tilde{H}_{2n+1}$?",a:"Each node $x_i$ is a double root of $P$."},{q:"Why must the difference polynomial $P$ be identically zero if it has $2n + 2$ roots and a degree of at most $2n + 1$?",a:"A non-zero polynomial cannot have more roots than its degree according to the Fundamental Theorem of Algebra."},{q:"What is the recursive definition of the divided difference $f[x_0, x_0, x_1]$?",a:"$\\frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$."},{q:"What value is substituted for the divided difference $f[x_i, x_i]$ in the construction of the Hermite polynomial?",a:"The derivative value $f'(x_i)$."},{q:"What is the first term of the Hermite interpolating polynomial $H_{2n+1}(x)$ in divided difference form?",a:"$f[x_0]$."},{q:"What is the coefficient of the second term, $(x - x_0)$, in the Hermite interpolating polynomial?",a:"$f[x_0, x_0]$."},{q:"What is the coefficient of the third term, $(x - x_0)^2$, in the Hermite interpolating polynomial?",a:"$f[x_0, x_0, x_1]$."},{q:"In the Hermite polynomial expansion, what is the basis function associated with the coefficient $f[x_0, x_0, x_1, x_1]$?",a:"$(x - x_0)^2(x - x_1)$."},{q:"State the truncation error formula $f(x) - H_{2n+1}(x)$ using a higher-order divided difference.",a:"$f[x_0, x_0, \\dots, x_n, x_n, x](x - x_0)^2 \\dots (x - x_n)^2$."},{q:"According to Theorem 6.19, what is the error term for Hermite interpolation if $f \\in C^{2n+2}$?",a:"$\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}(x - x_0)^2 \\dots (x - x_n)^2$."},{q:"In the derivative-based error formula for $H_{2n+1}(x)$, what interval must the value $\\xi$ belong to?",a:"$\\xi \\in \\langle x_0, x_1, \\dots, x_n, x \\rangle$."},{q:"Which theorem is used to prove the existence of $\\xi$ in the Hermite interpolation error bound?",a:"The generalized Rolle's Theorem."},{q:"What mathematical property of divided differences allows the Hermite polynomial to be viewed as a limit of Lagrange polynomials?",a:"The continuity of the divided difference function."},{q:"According to Corollary 6.20, the divided difference $f[x_0, x_0, \\dots, x_n, x_n, x]$ is equal to which derivative expression?",a:"$\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}$."},{q:"When setting up the divided difference table for Hermite interpolation, how many times must each node $x_i$ be listed in the first column?",a:"Each node must be listed twice."},{q:"In the Hermite divided difference table, what represents the first-order divided difference for two identical nodes $x_i$?",a:"The given derivative $f'(x_i)$."},{q:"In the Hermite divided difference table, what represents the first-order divided difference for two distinct nodes $x_i$ and $x_{i+1}$?",a:"$\\frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i}$."},{q:"Which values in the completed divided difference table serve as the coefficients for the Hermite polynomial?",a:"The values along the top diagonal of the table."},{q:"The function $g(z)$ used in the proof of Theorem 6.19 is designed such that $x_0, \\dots, x_n$ are _____ roots.",a:"Double roots."},{q:"In Example 6.21, what was the value of the leading coefficient $f[x_0, x_0, x_1, x_1, x_2, x_2]$?",a:"Zero."},{q:"If a Hermite polynomial $H_5$ corresponds to 3 mesh points, what is its expected maximum degree?",a:"Degree 5."},{q:"In the Hermite polynomial formula, the factor $(x - x_i)$ is squared once the point $x_i$ has appeared _____ times in the divided difference sequence.",a:"Two times."},{q:"Does interchanging the order of nodes $x_i$ change the resulting Hermite interpolating polynomial?",a:"No, the interpolating polynomial remains the same due to its uniqueness."},{q:"The general Hermite problem can interpolate the first $k_i$ derivatives at node $x_i$; how many conditions does this contribute for that specific node?",a:"$k_i + 1$ conditions."},{q:"If given $H(x_0)=f(x_0)$, $H'(x_0)=f'(x_0)$, $H''(x_0)=f''(x_0)$, and $H(x_1)=f(x_1)$, what is the minimal degree of the interpolating polynomial?",a:"The minimal degree is 3."},{q:"What is the coefficient of $(x - x_0)^3$ in a polynomial interpolating $f(x_0)$, $f'(x_0)$, $f''(x_0)$, and $f(x_1)$?",a:"$f[x_0, x_0, x_0, x_1]$."},{q:"Concept: $H_{2n+1}(x)$",a:"Definition: The unique polynomial of degree at most $2n+1$ that interpolates a function and its first derivatives at $n+1$ points."},{q:"What does the term $\\langle x_0, x_1, \\dots, x_n, x \\rangle$ denote in mathematical error analysis notation?",a:"The smallest interval containing the points $x_0, x_1, \\dots, x_n$ and $x$."},{q:"Term: Generalized Rolle's Theorem",a:"Definition: A theorem stating that if a function has $n$ roots in an interval, its $(n-1)$-th derivative has at least one root in that interval."},{q:"In the Newton form of the Hermite polynomial, what is the term following $f[x_0, x_0, x_1](x - x_0)^2$?",a:"$f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1)$."},{q:"Cloze: The divided difference $f[x_0, x_0]$ is equivalent to the _____ of the function $f$ at $x_0$.",a:"First derivative ($f'$)."},{q:"To calculate $f[x_0, x_0, x_0]$, one would need the value of the _____ derivative at $x_0$.",a:"Second derivative ($f''$)."},{q:"In the divided difference table, the column index of the framed coefficients is equal to the _____ of the divided difference.",a:"Order."},{q:"Why is the degree of the error term in Hermite interpolation $2n + 2$ rather than $n + 1$?",a:"Because the interpolation conditions provide two pieces of information at each of the $n+1$ nodes."},{q:"Process: How is the divided difference $f[x_0, x_1, x_1]$ computed?",a:"By taking the difference between $f[x_1, x_1]$ and $f[x_0, x_1]$ and dividing by $x_1 - x_0$."},{q:"What is the total number of terms in the summation formula for $H_{2n+1}(x)$?",a:"$2n + 2$ terms."},{q:"True or False: The Hermite interpolating polynomial is always of degree exactly $2n + 1$.",a:"False, it is of degree at most $2n + 1$."},{q:"The error bound for Hermite interpolation is generally _____ than the error bound for Lagrange interpolation using the same number of points.",a:"Smaller."},{q:"Which specific divided difference value is required to calculate the truncation error at a point $x$?",a:"$f[x_0, x_0, \\dots, x_n, x_n, x]$."},{q:"If $f(x)$ is a polynomial of degree $2n+1$, what is the resulting truncation error $f(x) - H_{2n+1}(x)$?",a:"The error is zero."},{q:"In a divided difference table for Hermite interpolation with points $x_0$ and $x_1$, how many rows will the table have?",a:"4 rows."},{q:"In the sequence of basis polynomials for $H_{2n+1}$, which factor is added to the term following $(x-x_0)^2(x-x_1)^2$?",a:"$(x-x_2)$."},{q:"What is the coefficient of $(x-x_0)^2(x-x_1)^2$ in the Hermite polynomial?",a:"$f[x_0, x_0, x_1, x_1, x_2]$."},{q:"The divided difference $f[x_0, x_0, x_1]$ is often called a _____ order divided difference.",a:"Second."},{q:"In the limit as nodes $x_i'$ approach $x_i$, the $L_{2n+1}$ error formula term $(x-x_i)(x-x_i')$ becomes _____.",a:"$(x-x_i)^2$."},{q:"If $f(x) = x^3$, and we use Hermite interpolation at $x_0 = 0$ and $x_1 = 1$, what is the degree of $H_3(x)$?",a:"Degree 3."},{q:"How does the Hermite divided difference table accommodate a node with a given second derivative?",a:"The node and its function value are listed three times, and the second derivative is used to calculate the second-order divided difference."},{q:"The Fundamental Theorem of Algebra proves that a polynomial of degree $m$ can have at most _____ distinct roots unless it is the zero polynomial.",a:"$m$ roots."},{q:"What is the value of the first-order divided difference $f[x_1, x_1]$ if $f'(x) = 2x + 1$ and $x_1 = 3$?",a:"7."},{q:"In the Hermite expansion, the term $f[x_0, x_0, \\dots, x_k](x - x_0)^2 \\dots (x - x_{k-1})^2$ is zero if $f$ is a polynomial of degree less than _____.",a:"$2k$."},{q:"If we have nodes $x_0, x_1, x_2$, what is the final term of the Hermite polynomial $H_5(x)$?",a:"$f[x_0, x_0, x_1, x_1, x_2, x_2](x-x_0)^2(x-x_1)^2(x-x_2)$."},{q:"Cloze: In the construction of $H_{2n+1}$, we list mesh points twice to simulate nodes having a multiplicity of _____.",a:"Two."},{q:"What is the relationship between the divided difference $f[x_0, x_1, \\dots, x_k]$ and the order of nodes?",a:"Divided differences are symmetric, meaning the value is independent of the order of the nodes."},{q:"When calculating the error of Hermite interpolation, if $f(x)$ is a polynomial of degree $2n+2$, the error term $\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}$ becomes a _____.",a:"Constant."},{q:"In Example 6.21, the Hermite polynomial $H_5(x)$ ended with the term $2(x+1)^2(x-1)^2$. What does the coefficient 2 represent?",a:"The divided difference $f[-1, -1, 1, 1, 2]$."},{q:"If a function $f$ is only $C^1$, can we validly apply the derivative-based error formula for Hermite interpolation?",a:"No, the formula requires $f$ to be at least $C^{2n+2}$."}],spline:[{q:"What is the definition of a spline function of degree $k$ on an interval $[a, b]$ with mesh $\\{x_i\\}$?",a:"A continuous function $S$ that is a polynomial of degree at most $k$ on each sub-interval and $S \\in C^{k-1}[a, b]$."},{q:"What is the common name for a spline function of degree $k = 1$?",a:"Linear spline function."},{q:"A spline function of degree $k = 2$ is referred to as a _____ spline function.",a:"quadratic"},{q:"A spline function of degree $k = 3$ is referred to as a _____ spline function.",a:"cubic"},{q:"How many parameters define a cubic spline $S$ consisting of $n$ polynomial segments?",a:"$4n$ parameters."},{q:"In cubic spline interpolation, how many conditions are provided by the interpolation requirements and the continuity of the first and second derivatives?",a:"$4n - 2$ conditions."},{q:"What additional boundary conditions define a 'natural' cubic spline?",a:"$S_0''(x_0) = 0$ and $S_{n-1}''(x_n) = 0$."},{q:"What additional boundary conditions define a 'clamped' (or complete) cubic spline?",a:"$S'(x_0) = y_0'$ and $S'(x_n) = y_n'$."},{q:"In the cubic polynomial form $S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$, what does $a_i$ represent?",a:"The function value at the point $x_i$, such that $a_i = y_i$."},{q:"What is the relationship between the coefficient $c_i$ and the second derivative $S_i''(x_i)$ in a cubic spline segment?",a:"$c_i = \\frac{S_i''(x_i)}{2}$."},{q:"What is the definition of the notation $\\Delta x_i$ used in spline interpolation formulas?",a:"$\\Delta x_i = x_{i+1} - x_i$."},{q:"What is the definition of the notation $\\Delta y_i$ used in spline interpolation formulas?",a:"$\\Delta y_i = y_{i+1} - y_i$."},{q:"Formula: How is the coefficient $d_i$ expressed in terms of $c_i$ and $c_{i+1}$?",a:"$d_i = \\frac{c_{i+1} - c_i}{3\\Delta x_i}$."},{q:"How is the coefficient $b_i$ expressed using $\\Delta y_i$, $\\Delta x_i$, $c_i$, and $c_{i+1}$?",a:"$b_i = \\frac{\\Delta y_i}{\\Delta x_i} - \\frac{2c_i + c_{i+1}}{3}\\Delta x_i$."},{q:"What type of matrix characterizes the system $Ax = b$ used to solve for the cubic spline coefficients $c_i$?",a:"A tridiagonal matrix."},{q:"Why is the system $Ax = b$ for natural cubic splines guaranteed to have a unique solution?",a:"Because the matrix $A$ is diagonally dominant."},{q:"In the system $Ax = b$ for a natural spline, what are the values of the first and last elements of the solution vector $x = (c_0, c_1, \\ldots, c_n)^T$?",a:"$c_0 = 0$ and $c_n = 0$."},{q:"Which boundary condition for cubic splines involves specifying the slope of the tangent line at the endpoints?",a:"Clamped spline (or complete spline) conditions."},{q:"What is the primary visual disadvantage of linear spline interpolation compared to cubic spline interpolation?",a:"Linear splines are not smooth (not differentiable at the mesh points)."},{q:"Theorem 6.24: For a natural cubic spline $S$ and any other $C^2$ interpolating function $f$, what inequality holds regarding their second derivatives?",a:"$\\int_a^b (S''(x))^2 \\, dx \\leq \\int_a^b (f''(x))^2 \\, dx$."},{q:"What does the minimal property of natural cubic splines (the integral of the squared second derivative) signify physically?",a:"It represents the 'smoothest' interpolation among all possible $C^2$ interpolating functions."},{q:"In the error bounds for clamped cubic splines, what does $M_4$ represent?",a:"$M_4 = \\max\\{|f^{(4)}(x)| : x \\in [a, b]\\}$."},{q:"In the error bounds for cubic splines, what does $h$ represent?",a:"The maximum length of the sub-intervals ($h = \\max \\Delta x_i$)."},{q:"The error bound for $|f(x) - S(x)|$ in clamped cubic spline interpolation is proportional to what power of the step size $h$?",a:"$h^4$."},{q:"The error bound for $|f'(x) - S'(x)|$ in clamped cubic spline interpolation is proportional to what power of the step size $h$?",a:"$h^3$."},{q:"The error bound for $|f''(x) - S''(x)|$ in clamped cubic spline interpolation is proportional to what power of the step size $h$?",a:"$h^2$."},{q:"True or False: Natural cubic spline interpolation is better at avoiding oscillations near the ends of an interval compared to high-degree Lagrange interpolation.",a:"True."},{q:"Which numerical algorithm is recommended for efficiently solving the tridiagonal system $Ax = b$ in spline calculations?",a:"Gaussian elimination for tridiagonal systems (Algorithm 3.37)."},{q:"What is the condition for $c_0$ in the linear system for a clamped spline with given $y_0'$?",a:"$2c_0 \\Delta x_0 + c_1 \\Delta x_0 = 3\\frac{\\Delta y_0}{\\Delta x_0} - 3y_0'$."},{q:"What is the condition for $c_n$ in the linear system for a clamped spline with given $y_n'$?",a:"$c_{n-1}\\Delta x_{n-1} + 2c_n \\Delta x_{n-1} = 3y_n' - 3\\frac{\\Delta y_{n-1}}{\\Delta x_{n-1}}$."},{q:"Process: To prove $\\int_a^b S''(x)g''(x) \\, dx = 0$, what calculus technique is applied after splitting the integral over sub-intervals?",a:"Integration by parts."},{q:"If $S$ is a cubic spline, what is the nature of its third derivative $S'''$ on any sub-interval $[x_i, x_{i+1}]$?",a:"It is a constant function."},{q:"In the proof of the minimal property, why does $\\int_{x_{i-1}}^{x_i} g'(x) \\, dx$ equal zero?",a:"Because $g(x_i) = f(x_i) - S(x_i) = 0$ for all $i$ (both functions interpolate the same data)."},{q:"What is the continuity class of a $k$-th degree spline function on the interval $(a, b)$?",a:"$C^{k-1}(a, b)$."},{q:"How many conditions are required to uniquely determine a cubic spline with $n$ sub-intervals?",a:"$4n$ conditions."},{q:"Concept: Piecewise linear interpolation",a:"Definition: Connecting data points $(x_i, y_i)$ with straight line segments; geometrically equivalent to a linear spline."},{q:"In the context of spline error bounds, what does $k$ represent in the formula $|f''(x) - S''(x)| \\leq (\\frac{1}{12} + \\frac{h}{3k})M_4 h^2$?",a:"The minimum length of the sub-intervals ($k = \\min \\Delta x_i$)."},{q:"What term is used for $S'(x_n)$ and $S''(x_n)$ in equations where $x_n$ is the right endpoint?",a:"Left-sided derivatives."},{q:"Which equation relates $c_i, c_{i+1}, c_{i+2}$ for $i = 0, \\ldots, n-2$ in a general cubic spline?",a:"$c_i \\Delta x_i + 2c_{i+1}(\\Delta x_i + \\Delta x_{i+1}) + c_{i+2}\\Delta x_{i+1} = 3\\frac{\\Delta y_{i+1}}{\\Delta x_{i+1}} - 3\\frac{\\Delta y_i}{\\Delta x_i}$."},{q:"What property of cubic splines makes them 'smooth enough' for most practical applications?",a:"They are twice continuously differentiable ($C^2$)."}]},j={glossary:{en:"Glossary",hu:"Fogalomtár"},flashcards:{en:"Flashcards",hu:"Tanulókártyák"},shuffle:{en:"🔀 Shuffle",hu:"🔀 Keverés"},reset:{en:"Reset order",hu:"Eredeti sorrend"},question:{en:"Question",hu:"Kérdés"},answer:{en:"Answer",hu:"Válasz"},prev:{en:"‹ Prev",hu:"‹ Előző"},next:{en:"Next ›",hu:"Következő ›"},showAnswer:{en:"Show answer",hu:"Válasz mutatása"},showQuestion:{en:"Show question",hu:"Kérdés mutatása"}};function me({deck:t}){const{lang:a}=V(),s=he[t]??[],[i,r]=p.useState(null);if(!s.length)return null;const o=a;return e.jsxs("section",{className:"deck",children:[e.jsx("h3",{children:j.glossary[o]}),e.jsx("div",{className:"deck-list",children:s.map((l,_)=>{const n=i===_;return e.jsxs("button",{className:"theorem-card deck-item",style:{textAlign:"left",cursor:"pointer",width:"100%"},onClick:()=>r(n?null:_),children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12},children:[e.jsx("span",{style:{fontWeight:700},children:e.jsx(W,{markdown:l.term[o]})}),e.jsx("span",{style:{opacity:.5},children:n?"−":"+"})]}),n&&e.jsx(W,{markdown:l.def[o]})]},_)})})]})}const F=t=>Array.from({length:t},(a,s)=>s);function pe(t){const a=F(t);for(let s=a.length-1;s>0;s--){const i=Math.floor(Math.random()*(s+1));[a[s],a[i]]=[a[i],a[s]]}return a}function ge({deck:t}){const{lang:a}=V(),s=ce[t]??[],i=a,[r,o]=p.useState(()=>F(s.length)),[l,_]=p.useState(0),[n,$]=p.useState(!1),m=p.useMemo(()=>s[r[l]],[s,r,l]);if(!s.length)return null;const h=g=>{$(!1),_(c=>(c+g+s.length)%s.length)};return e.jsxs("section",{className:"deck",children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8},children:[e.jsx("h3",{style:{margin:0},children:j.flashcards[i]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsxs("span",{style:{opacity:.6,fontSize:"0.85rem"},children:[l+1," / ",s.length]}),e.jsx("button",{className:"btn",onClick:()=>{o(pe(s.length)),_(0),$(!1)},children:j.shuffle[i]}),e.jsx("button",{className:"btn",onClick:()=>{o(F(s.length)),_(0),$(!1)},children:j.reset[i]})]})]}),e.jsxs("button",{className:"theorem-card",style:{width:"100%",minHeight:150,textAlign:"left",cursor:"pointer",marginTop:10},onClick:()=>$(g=>!g),children:[e.jsx("div",{className:"theorem-tag",children:n?j.answer[i]:j.question[i]}),e.jsx(W,{markdown:n?m.a:m.q})]}),e.jsxs("div",{style:{display:"flex",gap:10,marginTop:10,alignItems:"center"},children:[e.jsx("button",{className:"btn",onClick:()=>h(-1),children:j.prev[i]}),e.jsx("button",{className:"btn",style:{flex:1},onClick:()=>$(g=>!g),children:n?j.showQuestion[i]:j.showAnswer[i]}),e.jsx("button",{className:"btn",onClick:()=>h(1),children:j.next[i]})]})]})}const ue=`## 6.1. Lagrange Interpolation

Suppose we want to interpolate given data using a polynomial of degree $m$ of the form $g(x) = c_0 + c_1 x + c_2 x^2 + \\cdots + c_m x^m$. This formula contains $m + 1$ number of parameters. In the basic problem of interpolation the conditions define $n + 1$ number of equations. It is natural to expect that the problem has a unique solution if $m = n$. We reformulate the problem: We are looking for a polynomial $L_n$ of degree at most $n$ which satisfies

$$L_n(x_i) = y_i, \\qquad i = 0, 1, \\ldots, n. \\tag{6.1}$$

This problem is called *Lagrange interpolation.* We show that this problem has a unique solution. The solution $L_n$ of this problem is called *Lagrange interpolating polynomial*, or shortly, *Lagrange polynomial.* The proof for the existence is easy: we give its formula explicitly. For $k = 0, 1, \\ldots, n$ we define the polynomial of degree $n$ by

$$l_k(x) := \\frac{(x - x_0)(x - x_1) \\cdots (x - x_{k-1})(x - x_{k+1}) \\cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_n)}. \\tag{6.2}$$

The polynomials $l_0, \\ldots, l_n$ are called *Lagrange basis polynomials of degree $n$.* It follows from the definition that

$$l_k(x_i) = \\begin{cases} 1, & \\text{if } k = i, \\\\ 0, & \\text{if } k \\neq i. \\end{cases}$$

It follows that the polynomial

$$L_n(x) := \\sum_{k=0}^{n} y_k l_k(x)$$

is of degree at most $n$, and it solves the Lagrange interpolation problem (6.1).

Now we show that the Lagrange interpolation problem (6.1) has a unique solution. Suppose $L_n$ and $\\tilde{L}_n$ are polynomials of degree at most $n$, and both are solutions of problem (6.1). We define the function $P(x) := L_n(x) - \\tilde{L}_n(x)$. Then $P$ is a polynomial of degree at most $n$, and $P(x_i) = 0$ for all $i = 0, 1, \\ldots, n$, i.e., $P$ has $n + 1$ different roots. But then the Fundamental theorem of algebra yields that $P$ is identically equal to 0, i.e., $L_n = \\tilde{L}_n$. We have proved the following theorem.

**Theorem 6.1.** *The Lagrange interpolating problem has a unique solution which can be given by*

$$L_n(x) = \\sum_{k=0}^{n} y_k \\frac{(x - x_0)(x - x_1) \\cdots (x - x_{k-1})(x - x_{k+1}) \\cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_n)}. \\tag{6.3}$$

**Example 6.2.** Consider the given data

| $x_i$ | -1 | 1 | 2 | 3 |
|-------|----|----|----|----|
| $y_i$ | -3 | 1 | 3 | 29 |

Find the Lagrange polynomial which interpolates the data above. Since four data points are given, the Lagrange polynomial is of degree at most three. Using formula (6.3) we get

$$\\begin{aligned}
L_3(x) = &-3 \\frac{(x-1)(x-2)(x-3)}{(-1-1)(-1-2)(-1-3)} + \\frac{(x+1)(x-2)(x-3)}{(1+1)(1-2)(1-3)} \\\\
&+ 3 \\frac{(x+1)(x-1)(x-3)}{(2+1)(2-1)(2-3)} + 29 \\frac{(x+1)(x-1)(x-2)}{(3+1)(3-1)(3-2)} \\\\
= &\\ 3x^3 - 6x^2 - x + 5.
\\end{aligned}$$

$\\square$

The values $y_i$ associated to mesh points $x_i$ can be considered, in general, as values of a function $f$ at the mesh points, i.e., $y_i = f(x_i)$. For example, $f$ can be a physical quantity which is measured at finitely many points. Or $f$ can be a solution of a mathematical model which we solve by a numerical method, so the value of $f$ can be computed in finitely many points, and the obtained results are numerical approximations of the solution of the model. Or $f$ can be a function with a known formula, but its computation requires too many arithmetic operations, so we compute it exactly only at a few points. In all these cases we would possibly like to evaluate the function $f$ at a point $x$ which is not a mesh point. It is common to compute an interpolation polynomial $L_n$ associated to the given data, and we use $L_n(x)$ as an approximation of the function value $f(x)$. If $x$ is located outside the interval determined by the mesh points, we speak about *extrapolation*. We use the terminology *interpolation* if $x$ is located between two mesh points.

**Example 6.3.** Consider the function $f(x) = \\cos x$ on the interval $[-\\pi, \\pi]$. Using the mesh points $-\\pi$, $0$ and $\\pi$, and the points $-\\pi$, $-\\pi/2$, $0$, $\\pi/2$ and $\\pi$ we have computed the associated Lagrange interpolating polynomials $L_2$ and $L_4$. The polynomials and the graph of the function $f$ can be seen in Figure 6.1. We can observe that in the case of 5 mesh points we get a better approximation of $f$ than using only 3 mesh points. It is also clear from the figure that outside the interval $[-\\pi, \\pi]$ the Lagrange polynomials are not close to the function $f$. $\\square$

For the proof of Theorem 6.5 below we will need the following result.

**Theorem 6.4 (Generalized Rolle's Theorem).** *Let $f \\in C^n[a,b]$, $a \\leq x_0 < x_1 \\cdots < x_n \\leq b$, and suppose $f(x_0) = f(x_1) = \\cdots = f(x_n) = 0$. Then there exists $\\xi \\in (x_0, x_n)$ such that $f^{(n)}(\\xi) = 0$.*

**Proof.** Using the assumptions $f(x_0) = f(x_1) = 0$, Rolle's Theorem (Theorem 2.3) yields that there exists $\\eta_1 \\in (x_0, x_1)$ such that $f'(\\eta_1) = 0$. Similarly, using Rolle's Theorem for the intervals $[x_1, x_2]$, $\\ldots$, $[x_{n-1}, x_n]$ we get that there exist numbers $\\eta_2 \\in (x_1, x_2)$, $\\ldots$, $\\eta_n \\in (x_{n-1}, x_n)$ such that $f'(\\eta_2) = \\cdots = f'(\\eta_n) = 0$. Consider then the intervals $[\\eta_1, \\eta_2]$, $\\ldots$, $[\\eta_{n-1}, \\eta_n]$. Since at the end points of the intervals we have $f'(\\eta_i) = 0$, Rolle's Theorem implies that there exist numbers $\\theta_2 \\in (\\eta_1, \\eta_2)$, $\\ldots$, $\\theta_n \\in (\\eta_{n-1}, \\eta_n)$ for which $f''(\\theta_2) = \\cdots = f''(\\theta_n) = 0$. Applying again Rolle's Theorem we get that the third derivative of $f$ has zeros at $n - 2$ points, the fourth derivative of $f$ vanishes at $n - 3$ points, etc., $f^{(n)}$ is zero at a point $\\xi$. $\\square$

**Theorem 6.5.** *Let $f \\in C^{n+1}[a,b]$, $x_i \\in [a,b]$ $(i = 0, \\ldots, n)$ be pairwise distinct mesh points and $y_i = f(x_i)$ $(i = 0, \\ldots, n)$. Let $L_n(x)$ be the corresponding Lagrange interpolating polynomial. Then for every $x \\in [a,b]$ there exists $\\xi = \\xi(x) \\in \\langle x, x_0, x_1, \\ldots, x_n \\rangle$ such that*

$$f(x) = L_n(x) + \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n).$$

**Proof.** If $x = x_i$ for some $i$, then the statement is obviously satisfied. Fix a number $x \\in (a, b)$ such that $x \\neq x_i$ for all $i = 0, \\ldots, n$, and consider the function

$$g(t) := f(t) - L_n(t) - \\frac{(t - x_0) \\cdots (t - x_n)}{(x - x_0) \\cdots (x - x_n)}(f(x) - L_n(x)).$$

Clearly, $g \\in C^{n+1}$, and $g(x) = g(x_0) = g(x_1) = \\cdots = g(x_n) = 0$. Then the generalized Rolle's Theorem (Theorem 6.4) yields that there exists a number $\\xi \\in \\langle x, x_0, \\ldots, x_n \\rangle$ such that $g^{(n+1)}(\\xi) = 0$. Since $L_n$ is a polynomial of degree at most $n$, its $(n + 1)$-st order derivative is identically 0, so

$$g^{(n+1)}(t) = f^{(n+1)}(t) - \\frac{(n+1)!}{(x - x_0) \\cdots (x - x_n)}(f(x) - L_n(x)).$$

This gives the statement with $t = \\xi$. $\\square$

Now we consider the case when the mesh points are equidistant, i.e., $x_i = x_0 + ih$. Theorem 6.5 yields that the truncation error of the interpolation can be estimated by

$$|f(x) - L_n(x)| \\leq \\frac{M_{n+1}}{(n+1)!}|(x - x_0) \\cdots (x - x_n)|, \\qquad x \\in [x_0, x_n], \\tag{6.4}$$

where $M_{n+1} = \\max\\{|f^{(n+1)}(t)|:\\ t \\in [x_0, x_n]\\}$. Suppose $x \\in (x_k, x_{k+1})$ for some $0 \\leq k < n$. Then we have

$$|(x - x_k)(x - x_{k+1})| \\leq \\frac{h^2}{4},$$

and so

$$\\begin{aligned}
\\prod_{i=0}^{n} |x - x_i| &\\leq \\frac{h^2}{4} \\prod_{i=0}^{k-1} (x - x_i) \\prod_{i=k+2}^{n} (x_i - x) \\\\
&\\leq \\frac{h^2}{4} \\prod_{i=0}^{k-1} (x_{k+1} - x_i) \\prod_{i=k+2}^{n} (x_i - x_k) \\\\
&= \\frac{h^{n+1}}{4} \\prod_{i=0}^{k-1} (k + 1 - i) \\prod_{i=k+2}^{n} (i - k) \\\\
&= \\frac{h^{n+1}}{4}(k+1)!(n-k)! \\\\
&\\leq \\frac{h^{n+1}}{4} n!
\\end{aligned}$$

(See Exercise 4.) This and (6.4) imply the next result.

**Theorem 6.6.** *Let $f \\in C^{n+1}[a,b]$, $x_i = a + i(b-a)/n$ $(i = 0, \\ldots, n)$ and $y_i = f(x_i)$ $(i = 0, \\ldots, n)$. Let $x \\in [a,b]$. Then*

$$|f(x) - L_n(x)| \\leq \\frac{M_{n+1}}{4(n+1)} \\left( \\frac{b-a}{n} \\right)^{n+1},$$

*where $M_{n+1} := \\max\\{|f^{(n+1)}(x)|:\\ x \\in [a,b]\\}$.*

**Example 6.7.** Consider again Example 6.3. According to the previous theorem it follows for $x \\in [-\\pi, \\pi]$

$$|f(x) - L_2(x)| \\leq \\frac{1}{12}\\pi^3 \\approx 2.5839 \\qquad \\text{and} \\qquad |f(x) - L_4(x)| \\leq \\frac{1}{20}\\left(\\frac{\\pi}{2}\\right)^5 \\approx 0.4782.$$

Certainly, Theorem 6.6 gives an upper estimate of the truncation error. Figure 6.1 shows that the actual error can be significantly smaller. $\\square$

The next result will be used in Chapter 7. We state the theorem without giving its proof.

**Theorem 6.8.** *Suppose $f \\in C^{n+2}[a,b]$, $a = x_0 < \\cdots < x_n = b$, and let*

$$\\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}(x - x_0) \\cdots (x - x_n)$$

*be the truncation error of the Lagrange interpolation of degree $n$. Then the function $x \\mapsto f^{(n+1)}(\\xi(x))$ can be extended continuously for $x = x_i$, and it is differentiable for all $x \\neq x_i$, and*

$$\\frac{d}{dx} f^{(n+1)}(\\xi(x)) = \\frac{1}{n+2} f^{(n+2)}(\\eta(x)),$$

*where $\\eta(x) \\in \\langle x_0, \\ldots, x_n, x \\rangle$, moreover, $\\frac{d}{dx} f^{(n+1)}(\\xi(x))$ can be extended continuously for $x = x_i$ $(i = 0, 1, \\ldots, n)$.*

Next we discuss the problem of interpolation for functions of two variables. We consider only the easiest case, we assume the function $f$ is defined on a rectangular domain. Let $f \\colon [a,b] \\times [c,d] \\to \\mathbb{R}$, and consider the division of the intervals $[a,b]$ and $[c,d]$ by $a = x_0 < x_1 < \\ldots < x_n = b$ and $c = y_0 < y_1 < \\ldots < y_m = d$. Let $z_{ij} = f(x_i, y_j)$, $i = 0, \\ldots, n$, $j = 0, \\ldots, m$. We define the following two-variable polynomial to interpolate the given data:

$$L_{n,m}(x, y) := \\sum_{i=0}^{n} \\sum_{j=0}^{m} z_{ij} l_i(x) \\tilde{l}_j(y), \\tag{6.5}$$

where $l_i$ and $\\tilde{l}_j$ are the Lagrange basis polynomials of degree $n$ and $m$, respectively, corresponding to the mesh points $a = x_0 < x_1 < \\ldots < x_n = b$ and $c = y_0 < y_1 < \\ldots < y_m = d$ defined by (6.2). The function $L_{n,m}$ satisfies $L_{n,m}(x_i, y_j) = z_{ij}$ for all $i, j$. If $x$ is fixed, then $L_{n,m}(x, \\cdot)$ is a polynomial of degree at most $m$. Conversely, if $y$ is fixed, then $L_{n,m}(\\cdot, y)$ is a polynomial of degree at most $n$. The problem above is called *two-dimensional Lagrange interpolation* or *bivariate Lagrange interpolation* or *Lagrange interpolation of two variables.*

**Example 6.9.** Consider the following given function values:

| $(x_i, y_j)$ | $(0,0)$ | $(1,0)$ | $(2,0)$ | $(0,2)$ | $(1,2)$ | $(2,2)$ |
|--------------|---------|---------|---------|---------|---------|---------|
| $z_{ij}$ | 2 | -1 | 1 | 1 | 0 | 2 |

Applying formula (6.5) we get the two-variable polynomial

$$\\begin{aligned}
L_{2,1}(x, y) = &\\ 2 \\frac{(x-1)(x-2)}{(0-1)(0-2)} \\frac{y-2}{0-2} - \\frac{x(x-2)}{1(1-2)} \\frac{y-2}{0-2} + \\frac{x(x-1)}{2(2-1)} \\frac{y-2}{0-2} \\\\
&+ \\frac{(x-1)(x-2)}{(0-1)(0-2)} \\frac{y}{2} + 0 \\frac{x(x-2)}{1(1-2)} \\frac{y}{2} + 2 \\frac{x(x-1)}{2(2-1)} \\frac{y}{2} \\\\
= &-\\frac{1}{2}x^2 y + \\frac{5}{2}x^2 + \\frac{3}{2}xy - \\frac{11}{2}x - \\frac{1}{2}y + 2.
\\end{aligned}$$

This is of second order in $x$, and first order in $y$. The graph of the polynomial can be seen in Figure 6.2. $\\square$

### Exercises

1. Compute and plot the graph of the Lagrange polynomials corresponding to the following data, and find the value of the Lagrange polynomial at $x = 1$:

   (a)

   | $x_i$ | -1 | 0 | 2 | 4 |
   |-------|----|----|----|----|
   | $y_i$ | 3 | -2 | 4 | -2 |

   (b)

   | $x_i$ | 0.1 | 0.4 | 1.3 | 2.5 | 2.8 |
   |-------|-----|-----|-----|-----|-----|
   | $y_i$ | 1.2 | 0.2 | -2.2 | 3.1 | 1.3 |

   (c)

   | $x_i$ | -0.5 | 0.0 | 1.5 | 2.0 | 3.0 | 3.5 |
   |-------|------|-----|-----|-----|-----|-----|
   | $y_i$ | -0.5 | 1.5 | 3.5 | 2.0 | 2.5 | 6.5 |

<details class="reveal-solution"><summary>Show solution</summary>

**(a)** For the data $x_i = (-1,0,2,4)$, $y_i = (3,-2,4,-2)$ the basis polynomials are
$$l_0(x) = -\\frac{x(x-2)(x-4)}{15}, \\quad l_1(x) = \\frac{(x+1)(x-2)(x-4)}{8},$$
$$l_2(x) = -\\frac{(x+1)x(x-4)}{12}, \\quad l_3(x) = \\frac{(x+1)x(x-2)}{40},$$
and $L_3(x) = 3l_0(x) - 2l_1(x) + 4l_2(x) - 2l_3(x)$. At $x = 1$: $l_0(1) = -0.2$, $l_1(1) = 0.75$, $l_2(1) = 0.5$, $l_3(1) = -0.05$, hence
$$L_3(1) = 3(-0.2) - 2(0.75) + 4(0.5) - 2(-0.05) = 0.$$

**(b)** For $x_i = (0.1,0.4,1.3,2.5,2.8)$, evaluating each $l_i(1)$ (e.g. $l_0(1) = \\frac{(0.6)(-0.3)(-1.5)(-0.8)}{(-0.3)(-1.2)(-2.4)(-2.7)} \\approx -0.0926$) and forming $L_4(1) = \\sum_i y_i l_i(1)$ gives the interpolated value at $x = 1$.

**(c)** For $x_i = (-0.5,0,1.5,2,3,3.5)$ the same procedure (compute each $l_i(1)$, then $L_5(1) = \\sum_i y_i l_i(1)$) yields the value at $x = 1$.

</details>

2. Show, without giving the formula of the Lagrange polynomial, that the system (6.1) has a unique solution.

<details class="reveal-solution"><summary>Show solution</summary>

The conditions $L_n(x_i) = y_i$ give $n+1$ linear equations for the coefficients $c_0, \\ldots, c_n$ of $L_n(x) = c_0 + c_1 x + \\cdots + c_n x^n$. The coefficient matrix is the Vandermonde matrix $V$ with rows $(1, x_i, x_i^2, \\ldots, x_i^n)$, whose determinant is
$$\\det(V) = \\prod_{0 \\le i < j \\le n}(x_j - x_i).$$
Since the $x_i$ are pairwise distinct, $\\det(V) \\ne 0$, so $V$ is invertible and the system has a unique solution. $\\square$

</details>

3. Let $l_i(x)$ $(i = 0, 1, \\ldots, n)$ be defined by (6.2). Show that for all $x$
   $$\\sum_{i=0}^{n} l_i(x) = 1.$$

<details class="reveal-solution"><summary>Show solution</summary>

Apply Lagrange interpolation to the constant function $f(x) = 1$. Its interpolant is
$$L_n(x) = \\sum_{i=0}^n f(x_i) l_i(x) = \\sum_{i=0}^n l_i(x).$$
But $f(x) = 1$ is itself a polynomial of degree $0 \\le n$ that interpolates the data, so by uniqueness $L_n(x) = 1$. Hence $\\sum_{i=0}^n l_i(x) = 1$. $\\square$

</details>

4. Prove that $(k+1)!(n-k)! \\leq n!$ for all $k = 0, 1, \\ldots, n - 1$.

<details class="reveal-solution"><summary>Show solution</summary>

We have
$$\\frac{n!}{(k+1)!(n-k)!} = \\binom{n}{k+1}.$$
For $0 \\le k+1 \\le n$ the binomial coefficient is a positive integer, so $\\binom{n}{k+1} \\ge 1$, which gives $(k+1)!(n-k)! \\le n!$. $\\square$

</details>

5. What is the smallest positive integer $n$ for which the function $\\cos x$ can be approximated by the Lagrange polynomial $L_n(x)$ for all $x \\in [-\\pi, \\pi]$ with an error smaller than 0.001, assuming we use equidistant mesh points on the interval $[-\\pi, \\pi]$?

<details class="reveal-solution"><summary>Show solution</summary>

By Theorem 6.6, with $M_{n+1} = 1$ for $\\cos x$,
$$|f(x) - L_n(x)| \\le \\frac{1}{4(n+1)}\\left(\\frac{2\\pi}{n}\\right)^{n+1}.$$
Testing values: for $n = 8$ this is $\\approx 0.0031 > 0.001$, while for $n = 10$ it is $\\approx 0.00014 < 0.001$. So $n = 10$ suffices (with $n = 9$ to be checked numerically).

</details>

6. Give the two-dimensional Lagrange interpolating polynomial $L_{2,2}$ corresponding to the given data:

   | $(x_i, y_j)$ | $(0,0)$ | $(0,1)$ | $(0,2)$ | $(1,0)$ | $(1,1)$ | $(1,2)$ | $(2,0)$ | $(2,1)$ | $(2,2)$ |
   |--------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
   | $z_{ij}$ | 3 | 1 | 0 | 2 | -1 | 0 | 2 | 3 | 1 |

<details class="reveal-solution"><summary>Show solution</summary>

Use degree-2 Lagrange bases in $x$ and $y$:
$$l_0(x) = \\frac{(x-1)(x-2)}{2}, \\quad l_1(x) = -x(x-2), \\quad l_2(x) = \\frac{x(x-1)}{2},$$
and $\\tilde{l}_0(y) = \\frac{(y-1)(y-2)}{2}$, $\\tilde{l}_1(y) = -y(y-2)$, $\\tilde{l}_2(y) = \\frac{y(y-1)}{2}$. Then
$$L_{2,2}(x,y) = \\sum_{i=0}^2 \\sum_{j=0}^2 z_{ij}\\, l_i(x)\\, \\tilde{l}_j(y),$$
which expands using the given $z_{ij}$ values $(3,1,0;\\,2,-1,0;\\,2,3,1)$.

</details>
`,ye=`## 6.1. Lagrange-interpoláció

Tegyük fel most, hogy a bevezetésben leírt interpolációs alapfeladatban $g(x) = c_0 + c_1 x + c_2 x^2 + \\cdots + c_m x^m$ alakú. Ebben a képletben $m + 1$ ismeretlen szerepel, és az interpolációs feltételek $n + 1$ egyenletet határoznak meg. Természetes azt várni, hogy a feladatnak az $m = n$ esetben lesz egyértelmű megoldása. Fogalmazzuk újra a feladatot: Keresünk egy olyan $L_n$ legfeljebb $n$-edfokú polinomot, amelyre

$$L_n(x_i) = y_i, \\qquad i = 0, 1, \\ldots, n. \\tag{6.1}$$

Ez a *Lagrange-féle interpolációs feladat.* Megmutatjuk, hogy ennek a feladatnak mindig létezik egyértelmű megoldása. A feladatot teljesítő $L_n$ polinomot *Lagrange-féle interpolációs polinomnak*, vagy röviden Lagrange-polinomnak nevezzük. Azt, hogy ilyen polinom létezik, könnyű belátni: megadjuk $L_n$ explicit képletét az alappontok és az adott függvényértékek segítségével. Definiáljuk $k = 0, 1, \\ldots, n$-re az

$$l_k(x) \\equiv \\frac{(x - x_0)(x - x_1) \\cdots (x - x_{k-1})(x - x_{k+1}) \\cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_n)} \\tag{6.2}$$

$n$-edfokú polinomokat. Az $l_0, \\ldots, l_n$ polinomokat *Lagrange-féle $n$-edfokú alappolinomoknak* nevezzük. A polinom definíciójából nyilvánvaló, hogy

$$l_k(x_i) = \\begin{cases} 1, & \\text{ha } k = i, \\\\ 0, & \\text{ha } k \\neq i. \\end{cases}$$

Ebből következik, hogy az $L_n(x) \\equiv \\sum_{k=0}^{n} y_k l_k(x)$ függvény egy legfeljebb $n$-edfokú polinom, és megoldása a (6.1) interpolációs problémának.

Most belátjuk, hogy a Lagrange-féle interpolációs feladatnak csak egy megoldása van. Tegyük fel, hogy $L_n$ és $\\tilde{L}_n$ mindketten legfeljebb $n$-edfokú polinomok és teljesítik a (6.1) egyenleteket. Definiáljuk a $P(x) \\equiv L_n(x) - \\tilde{L}_n(x)$ függvényt. Ekkor $P$ is legfeljebb $n$-edfokú polinom, és $P(x_i) = 0$ minden $i = 0, 1, \\ldots, n$-re, azaz $P$-nek $n + 1$ különböző gyöke van. Ekkor viszont az algebra alaptételéből következik, hogy $P$ azonosan 0 polinom, azaz $L_n = \\tilde{L}_n$. Beláttuk tehát a következő állítást:

**6.1. tétel.** *A Lagrange-féle interpolációs feladatnak létezik egyértelmű megoldása, amely az*

$$L_n(x) = \\sum_{k=0}^{n} y_k \\frac{(x - x_0)(x - x_1) \\cdots (x - x_{k-1})(x - x_{k+1}) \\cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_n)} \\tag{6.3}$$

*alakban adható meg.*

**6.2. példa.** Tekintsük az

| $x_i$ | -1 | 1 | 2 | 3 |
|-------|----|----|----|----|
| $y_i$ | -3 | 1 | 3 | 29 |

alappontokat és a hozzá tartozó függvényértékeket. Határozzuk meg az adatokhoz tartozó Lagrange-féle interpolációs polinomot! Mivel négy alappont van, ezért harmadfokú Lagrange-polinomot keresünk. A (6.3) képlet szerint

$$\\begin{aligned}
L_3(x) = &-3 \\frac{(x-1)(x-2)(x-3)}{(-1-1)(-1-2)(-1-3)} + \\frac{(x+1)(x-2)(x-3)}{(1+1)(1-2)(1-3)} \\\\
&+ 3 \\frac{(x+1)(x-1)(x-3)}{(2+1)(2-1)(2-3)} + 29 \\frac{(x+1)(x-1)(x-2)}{(3+1)(3-1)(3-2)} \\\\
= &\\ 3x^3 - 6x^2 - x + 5.
\\end{aligned}$$

$\\square$

Az $x_i$ értékekhez hozzárendelt $y_i$ értékeket általában természetes módon tekinthetjük egy $f$ függvény értékeinek az alappontokban, azaz $y_i = f(x_i)$. Például lehet $f$ egy fizikai mennyiség, amelyet véges sok időpontban mértünk. Vagy lehet $f$ egy matematikai modell megoldása, amelyet csak numerikus módszerekkel tudunk megoldani, és a megoldást, azaz az $f$ függvény értékét csak véges sok pontban tudjuk megkapni, pontosabban a közelítő értékét megkapni. Vagy lehet, hogy $f$ egy olyan függvény, amelynek képlete ill. kiszámítási szabálya ismert, csak „túl sok" számolást igényel $f$-et kiértékelni, így csak néhány pontban számoljuk ki $f$ pontos értékét. Mindhárom esetben igény lehet arra, hogy $f$ értékét kiszámoljuk, pontosabban megbecsüljük a már ismert véges sok függvényérték segítségével egy alapponton kívüli pontban is. Erre egyszerű módszer az, ha interpoláljuk a véges sok megadott pontot, és az interpolációs polinom adott pontbeli értékével (amit könnyű kiszámolni) közelítjük a kívánt függvényértéket. Az interpoláció kifejezést használjuk abban az értelemben, hogy az interpoláló függvényt (polinomot) számítjuk ki, de szokás interpoláción az interpolációs polinom segítségével történő függvényérték közelítést is érteni. Ez utóbbi esetben ha az a pont, amelyben az $f$ függvényt akarjuk becsülni az alappontok által meghatározott intervallumon kívül esik, akkor *extrapolációról* szokás beszélni, interpoláción szigorúan véve azt értjük, amikor a megadott pont az alappontok között helyezkedik el.

**6.3. példa.** Tekintsük az $f(x) = \\cos x$ függvényt a $[-\\pi, \\pi]$ intervallumon. A $-\\pi$, $0$ és $\\pi$ illetve $-\\pi$, $-\\pi/2$, $0$, $\\pi/2$ és $\\pi$ osztópontokat használva meghatároztuk az $L_2$ és $L_4$ másod- ill. negyedfokú Lagrange-féle interpolációs polinomokat. A polinomok és az $f$ függvény grafikonja a 6.1 ábrán látható. Az ábrából megállapíthatjuk, hogy az 5 osztópontot használva $f$ jobb közelítését kapjuk, mint akkor, ha csak 3 pontot használunk. Az is nyilvánvaló ebben az esetben, hogy a $[-\\pi, \\pi]$ intervallumon kívül a polinomok nem jó közelítései az eredeti függvénynek. $\\square$

A 6.5 tétel bizonyításához szükségünk lesz a következő segédtételre.

**6.4. tétel (Általánosított Rolle-tétel).** *Legyen $f \\in C^n(a,b)$, $a \\leq x_0 < x_1 \\cdots < x_n \\leq b$, és tegyük fel, hogy $f(x_0) = f(x_1) = \\cdots = f(x_n) = 0$. Ekkor létezik olyan $\\xi \\in (x_0, x_n)$, hogy $f^{(n)}(\\xi) = 0$.*

**Bizonyítás.** A feltételek szerint $f(x_0) = f(x_1) = 0$, így a Rolle-tétel (2.3 tétel) szerint létezik olyan $\\eta_1 \\in (x_0, x_1)$, hogy $f'(\\eta_1) = 0$. Hasonlóan az $[x_1, x_2]$, $\\ldots$, $[x_{n-1}, x_n]$ intervallumokra alkalmazva a Rolle-tételt kapjuk, hogy léteznek olyan $\\eta_2 \\in (x_1, x_2)$, $\\ldots$, $\\eta_n \\in (x_{n-1}, x_n)$ számok, amelyekre $f'(\\eta_2) = \\cdots = f'(\\eta_n) = 0$. Tekintsük ezután az $[\\eta_1, \\eta_2]$, $\\ldots$, $[\\eta_{n-1}, \\eta_n]$ intervallumokat. Mivel ezek végpontjaiban $f'(\\eta_i) = 0$, ezért a Rolle-tétel szerint léteznek olyan $\\theta_2 \\in (\\eta_1, \\eta_2)$, $\\ldots$, $\\theta_n \\in (\\eta_{n-1}, \\eta_n)$ számok, amelyekre $f''(\\theta_2) = \\cdots = f''(\\theta_n) = 0$. Ismételten alkalmazva a Rolle-tételt, kapjuk, hogy $f$ harmadik deriváltja $n - 2$ pontban, $f$ negyedik deriváltja $n - 3$ pontban stb., $f^{(n)}$ pedig egy pontban egyenlő nullával. $\\square$

**6.5. tétel.** *Legyen $f \\in C^{n+1}(a,b)$, $x_i \\in [a,b]$ $(i = 0, \\ldots, n)$ páronként különböző alappontok és $y_i = f(x_i)$ $(i = 0, \\ldots, n)$. Legyen $L_n(x)$ az adatokhoz tartozó $n$-edfokú Lagrange-polinom. Ekkor bármely $x \\in [a,b]$-hez létezik olyan $\\xi = \\xi(x) \\in \\langle x, x_0, x_1, \\ldots, x_n \\rangle$ szám, hogy*

$$f(x) = L_n(x) + \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n).$$

**Bizonyítás.** Ha $x = x_i$ valamely $i$-re, akkor az állítás nyilvánvalóan teljesül. Rögzítsünk egy $x \\in (a, b)$ számot, amelyre $x \\neq x_i$ minden $i = 0, \\ldots, n$-re, és tekintsük a

$$g(t) \\equiv f(t) - L_n(t) - \\frac{(t - x_0) \\cdots (t - x_n)}{(x - x_0) \\cdots (x - x_n)}(f(x) - L_n(x))$$

függvényt. Nyilvánvalóan $g \\in C^{n+1}$, és $g(x) = g(x_0) = g(x_1) = \\cdots = g(x_n) = 0$. Ekkor alkalmazva az általánosított Rolle-tételt (6.4 tétel), kapjuk, hogy létezik olyan $\\xi \\in \\langle x, x_0, \\ldots, x_n \\rangle$ szám, hogy $g^{(n+1)}(\\xi) = 0$. Mivel $L_n$ $n$-edfokú polinom, ezért $(n + 1)$-edik deriváltja nulla, így

$$g^{(n+1)}(t) = f^{(n+1)}(t) - \\frac{(n+1)!}{(x - x_0) \\cdots (x - x_n)}(f(x) - L_n(x)).$$

Ebből a $t = \\xi$ értéket véve adódik a tétel állítása. $\\square$

Most tekintsük azt a speciális esetet, amikor ekvidisztáns osztópontokat használunk, azaz $x_i = x_0 + ih$. A 6.5 tétel szerint az interpoláció képlethibája az

$$|f(x) - L_n(x)| \\leq \\frac{M_{n+1}}{(n+1)!}|(x - x_0) \\cdots (x - x_n)| \\tag{6.4}$$

kifejezéssel becsülhető $x \\in [x_0, x_n]$-re, ahol $M_{n+1} = \\max\\{|f^{(n+1)}(t)|:\\ t \\in [x_0, x_n]\\}$. Tegyük fel, hogy $x \\in (x_k, x_{k+1})$ valamilyen $0 \\leq k < n$-re. Ekkor könnyen ellenőrizhető, hogy

$$|(x - x_k)(x - x_{k+1})| \\leq \\frac{h^2}{4},$$

és így

$$\\begin{aligned}
\\prod_{i=0}^{n} |x - x_i| &\\leq \\frac{h^2}{4} \\prod_{i=0}^{k-1} (x - x_i) \\prod_{i=k+2}^{n} (x_i - x) \\\\
&\\leq \\frac{h^2}{4} \\prod_{i=0}^{k-1} (x_{k+1} - x_i) \\prod_{i=k+2}^{n} (x_i - x_k) \\\\
&= \\frac{h^{n+1}}{4} \\prod_{i=0}^{k-1} (k + 1 - i) \\prod_{i=k+2}^{n} (i - k) \\\\
&= \\frac{h^{n+1}}{4}(k+1)!(n-k)! \\\\
&\\leq \\frac{h^{n+1}}{4} n!
\\end{aligned}$$

(Lásd a 4. feladatot!) Ebből és a (6.4) egyenlőtlenségből következik:

**6.6. tétel.** *Legyen $f \\in C^{n+1}(a,b)$, $x_i = a + i(b-a)/n$ $(i = 0, \\ldots, n)$ és $y_i = f(x_i)$ $(i = 0, \\ldots, n)$. Legyen $x \\in [a,b]$. Ekkor*

$$|f(x) - L_n(x)| \\leq \\frac{M_{n+1}}{4(n+1)} \\left( \\frac{b-a}{n} \\right)^{n+1},$$

*ahol $M_{n+1} \\equiv \\max\\{|f^{(n+1)}(x)|:\\ x \\in [a,b]\\}$.*

**6.7. példa.** Térjünk vissza a 6.3 példához! Az előző tétel szerint minden $x \\in [-\\pi, \\pi]$-re

$$|f(x) - L_2(x)| \\leq \\frac{1}{12}\\pi^3 \\approx 2.5839, \\qquad \\text{és} \\qquad |f(x) - L_4(x)| \\leq \\frac{1}{20}\\left(\\frac{\\pi}{2}\\right)^5 \\approx 0.4782.$$

Természetesen a 6.6 tétellel csak felső korlátot kapunk a hibára. A 6.1 ábrán látható, hogy a tényleges hiba ennél jelen esetben lényegesen kisebb. $\\square$

A következő eredményre szükségünk lesz a 7. fejezetben. A bizonyítást nem közöljük itt.

**6.8. tétel.** *Tegyük fel, hogy $f \\in C^{n+2}(a,b)$, $a = x_0 < \\cdots < x_n = b$, és legyen*

$$\\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}(x - x_0) \\cdots (x - x_n)$$

*az $n$-edfokú Lagrange-interpoláció maradéktagja. Ekkor az $x \\mapsto f^{(n+1)}(\\xi(x))$ függvény folytonosan kiterjeszthető $x = x_i$-re, differenciálható minden $x \\neq x_i$-re, és*

$$\\frac{d}{dx} f^{(n+1)}(\\xi(x)) = \\frac{1}{n+2} f^{(n+2)}(\\eta(x))$$

*alakú, ahol $\\eta(x) \\in \\langle x_0, \\ldots, x_n, x \\rangle$, továbbá $\\frac{d}{dx} f^{(n+1)}(\\xi(x))$ is folytonosan kiterjeszthető $x = x_i$-re $(i = 0, 1, \\ldots, n)$.*

Most kétváltozós függvények interpolációjával foglalkozunk röviden, annak is csak a legegyszerűbb esetével: feltesszük, hogy $f$ egy téglalapon definiált. Legyen $f \\colon [a,b] \\times [c,d] \\to \\mathbb{R}$, és tekintsük az $[a,b]$ és $[c,d]$ intervallumok $a = x_0 < x_1 < \\ldots < x_n = b$ és $c = y_0 < y_1 < \\ldots < y_m = d$ beosztását. Legyen $z_{ij} = f(x_i, y_j)$, $i = 0, \\ldots, n$, $j = 0, \\ldots, m$. Ezen adatok interpolációjára a következő függvényt használhatjuk:

$$L_{n,m}(x, y) \\equiv \\sum_{i=0}^{n} \\sum_{j=0}^{m} z_{ij} l_i(x) \\tilde{l}_j(y), \\tag{6.5}$$

ahol $l_i$ ill. $\\tilde{l}_j$ az $a = x_0 < x_1 < \\ldots < x_n = b$ ill. $c = y_0 < y_1 < \\ldots < y_m = d$ alappontokhoz tartozó (6.2) képlettel definiált $n$ ill. $m$-edrendű polinomok. Az így definiált $L_{n,m}$ függvény teljesíti az $L_{n,m}(x_i, y_j) = z_{ij}$ összefüggést minden $i, j$-re. Ha $x$-et rögzítjük, akkor $L_{n,m}(x, \\cdot)$ egy legfeljebb $m$-edrendű polinom, és fordítva, ha $y$-t rögzítjük, akkor $L_{n,m}(\\cdot, y)$ egy legfeljebb $n$-edrendű polinom.

**6.9. példa.** Tekintsük a következő függvényértékeket:

| $(x_i, y_j)$ | $(0,0)$ | $(1,0)$ | $(2,0)$ | $(0,2)$ | $(1,2)$ | $(2,2)$ |
|--------------|---------|---------|---------|---------|---------|---------|
| $z_{ij}$ | 2 | -1 | 1 | 1 | 0 | 2 |

Alkalmazva az adatokra a (6.5) formulát kapjuk az

$$\\begin{aligned}
L_{2,1}(x, y) = &\\ 2 \\frac{(x-1)(x-2)}{(0-1)(0-2)} \\frac{y-2}{0-2} - \\frac{x(x-2)}{1(1-2)} \\frac{y-2}{0-2} + \\frac{x(x-1)}{2(2-1)} \\frac{y-2}{0-2} \\\\
&+ \\frac{(x-1)(x-2)}{(0-1)(0-2)} \\frac{y}{2} + 0 \\frac{x(x-2)}{1(1-2)} \\frac{y}{2} + 2 \\frac{x(x-1)}{2(2-1)} \\frac{y}{2} \\\\
= &-\\frac{1}{2}x^2 y + \\frac{5}{2}x^2 + \\frac{3}{2}xy - \\frac{11}{2}x - \\frac{1}{2}y + 2
\\end{aligned}$$

kétváltozós polinomot. Ez $x$-ben másodfokú, $y$-ban pedig elsőfokú polinom. Az interpolációs polinom grafikonja a 6.2 ábrán látható. $\\square$

### Feladatok

1. Számítsa ki és ábrázolja az alábbi adatokhoz tartozó Lagrange-féle interpolációs polinomokat:

   (a)

   | $x_i$ | -1 | 0 | 2 | 4 |
   |-------|----|----|----|----|
   | $y_i$ | 3 | -2 | 4 | -2 |

   (b)

   | $x_i$ | 0.1 | 0.4 | 1.3 | 2.5 | 2.8 |
   |-------|-----|-----|-----|-----|-----|
   | $y_i$ | 1.2 | 0.2 | -2.2 | 3.1 | 1.3 |

   (c)

   | $x_i$ | -0.5 | 0.0 | 1.5 | 2.0 | 3.0 | 3.5 |
   |-------|------|-----|-----|-----|-----|-----|
   | $y_i$ | -0.5 | 1.5 | 3.5 | 2.0 | 2.5 | 6.5 |

<details class="reveal-solution"><summary>Megoldás</summary>

**(a)** For the data $x_i = (-1,0,2,4)$, $y_i = (3,-2,4,-2)$ the basis polynomials are
$$l_0(x) = -\\frac{x(x-2)(x-4)}{15}, \\quad l_1(x) = \\frac{(x+1)(x-2)(x-4)}{8},$$
$$l_2(x) = -\\frac{(x+1)x(x-4)}{12}, \\quad l_3(x) = \\frac{(x+1)x(x-2)}{40},$$
and $L_3(x) = 3l_0(x) - 2l_1(x) + 4l_2(x) - 2l_3(x)$. At $x = 1$: $l_0(1) = -0.2$, $l_1(1) = 0.75$, $l_2(1) = 0.5$, $l_3(1) = -0.05$, hence
$$L_3(1) = 3(-0.2) - 2(0.75) + 4(0.5) - 2(-0.05) = 0.$$

**(b)** For $x_i = (0.1,0.4,1.3,2.5,2.8)$, evaluating each $l_i(1)$ (e.g. $l_0(1) = \\frac{(0.6)(-0.3)(-1.5)(-0.8)}{(-0.3)(-1.2)(-2.4)(-2.7)} \\approx -0.0926$) and forming $L_4(1) = \\sum_i y_i l_i(1)$ gives the interpolated value at $x = 1$.

**(c)** For $x_i = (-0.5,0,1.5,2,3,3.5)$ the same procedure (compute each $l_i(1)$, then $L_5(1) = \\sum_i y_i l_i(1)$) yields the value at $x = 1$.

</details>

2. Lássa be a Lagrange-polinom képletének megadása nélkül, hogy a (6.1) egyenletrendszernek létezik egyértelmű megoldása!

<details class="reveal-solution"><summary>Megoldás</summary>

The conditions $L_n(x_i) = y_i$ give $n+1$ linear equations for the coefficients $c_0, \\ldots, c_n$ of $L_n(x) = c_0 + c_1 x + \\cdots + c_n x^n$. The coefficient matrix is the Vandermonde matrix $V$ with rows $(1, x_i, x_i^2, \\ldots, x_i^n)$, whose determinant is
$$\\det(V) = \\prod_{0 \\le i < j \\le n}(x_j - x_i).$$
Since the $x_i$ are pairwise distinct, $\\det(V) \\ne 0$, so $V$ is invertible and the system has a unique solution. $\\square$

</details>

3. Legyen $l_i(x)$ $(i = 0, 1, \\ldots, n)$ a (6.2) képlettel definiált $n$-edfokú polinom. Mutassa meg, hogy bármely $x$-re
   $$\\sum_{i=0}^{n} l_i(x) = 1.$$

<details class="reveal-solution"><summary>Megoldás</summary>

Apply Lagrange interpolation to the constant function $f(x) = 1$. Its interpolant is
$$L_n(x) = \\sum_{i=0}^n f(x_i) l_i(x) = \\sum_{i=0}^n l_i(x).$$
But $f(x) = 1$ is itself a polynomial of degree $0 \\le n$ that interpolates the data, so by uniqueness $L_n(x) = 1$. Hence $\\sum_{i=0}^n l_i(x) = 1$. $\\square$

</details>

4. Igazolja, hogy $(k+1)!(n-k)! \\leq n!$ minden $k = 0, 1, \\ldots, n - 1$-re!

<details class="reveal-solution"><summary>Megoldás</summary>

We have
$$\\frac{n!}{(k+1)!(n-k)!} = \\binom{n}{k+1}.$$
For $0 \\le k+1 \\le n$ the binomial coefficient is a positive integer, so $\\binom{n}{k+1} \\ge 1$, which gives $(k+1)!(n-k)! \\le n!$. $\\square$

</details>

5. Mi az a legkisebb $n$, amelyre a $\\cos x$ függvényt minden $x \\in [-\\pi, \\pi]$-re 0.001-nél kisebb hibával lehet közelíteni az $L_n(x)$ interpolációs értékkel, ha ekvidisztáns osztópontokat használunk a $[-\\pi, \\pi]$ intervallumon?

<details class="reveal-solution"><summary>Megoldás</summary>

By Theorem 6.6, with $M_{n+1} = 1$ for $\\cos x$,
$$|f(x) - L_n(x)| \\le \\frac{1}{4(n+1)}\\left(\\frac{2\\pi}{n}\\right)^{n+1}.$$
Testing values: for $n = 8$ this is $\\approx 0.0031 > 0.001$, while for $n = 10$ it is $\\approx 0.00014 < 0.001$. So $n = 10$ suffices (with $n = 9$ to be checked numerically).

</details>

6. Számítsa ki és ábrázolja az alábbi adatokhoz tartozó $L_{2,2}$ kétváltozós interpolációs polinomot:

   | $(x_i, y_j)$ | $(0,0)$ | $(0,1)$ | $(0,2)$ | $(1,0)$ | $(1,1)$ | $(1,2)$ | $(2,0)$ | $(2,1)$ | $(2,2)$ |
   |--------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
   | $z_{ij}$ | 3 | 1 | 0 | 2 | -1 | 0 | 2 | 3 | 1 |

<details class="reveal-solution"><summary>Megoldás</summary>

Use degree-2 Lagrange bases in $x$ and $y$:
$$l_0(x) = \\frac{(x-1)(x-2)}{2}, \\quad l_1(x) = -x(x-2), \\quad l_2(x) = \\frac{x(x-1)}{2},$$
and $\\tilde{l}_0(y) = \\frac{(y-1)(y-2)}{2}$, $\\tilde{l}_1(y) = -y(y-2)$, $\\tilde{l}_2(y) = \\frac{y(y-1)}{2}$. Then
$$L_{2,2}(x,y) = \\sum_{i=0}^2 \\sum_{j=0}^2 z_{ij}\\, l_i(x)\\, \\tilde{l}_j(y),$$
which expands using the given $z_{ij}$ values $(3,1,0;\\,2,-1,0;\\,2,3,1)$.

</details>
`,ke=`## 6.2. Divided Differences

Given a function $f \\colon [a,b] \\to \\mathbb{R}$ and pairwise different mesh points $x_i \\in [a,b]$ $(i = 0, \\ldots, n)$. Then the *zeroth divided difference* of the function $f$ at the point $x_0$ is defined by $f[x_0] := f(x_0)$. The *first divided difference* of the function $f$ at the points $x_0, x_1$ is the number

$$f[x_0, x_1] := \\frac{f[x_1] - f[x_0]}{x_1 - x_0},$$

(i.e., $f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$). In general, the *$n$th divided difference* of the function $f$ relative to the points $x_0, x_1, \\ldots, x_n$ is defined by

$$f[x_0, x_1, \\ldots, x_n] := \\frac{f[x_1, x_2, \\ldots, x_n] - f[x_0, x_1, \\ldots, x_{n-1}]}{x_n - x_0}.$$

We note that we have not assumed the mesh points are ordered increasingly.

**Theorem 6.10.** *Let $x_i$ $(i = 0, 1, \\ldots, n)$ be pairwise different mesh points. Then*

$$f[x_0, x_1, \\ldots, x_n] = \\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)}.$$

**Proof.** We prove the statement using mathematical induction with respect to $n$. For $n = 0$ the statement is obvious. (In this case in the denominator we have the "empty product", which, by definition, equals to 1.) Suppose the statement holds for $n$, and consider the $(n+1)$-st divided difference $f[x_0, x_1, \\ldots, x_{n+1}]$. The definition of the divided difference, the inductive hypothesis and some calculations yield

$$\\begin{aligned}
f[x_0, x_1, \\ldots, x_{n+1}] &= \\frac{f[x_1, x_2, \\ldots, x_{n+1}] - f[x_0, x_1, \\ldots, x_n]}{x_{n+1} - x_0} \\\\
&= \\frac{1}{x_{n+1} - x_0} \\Bigg\\{ \\sum_{i=1}^{n+1} \\frac{f(x_i)}{(x_i - x_1) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_{n+1})} \\\\
&\\qquad - \\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)} \\Bigg\\} \\\\
&= \\frac{1}{x_{n+1} - x_0} \\Bigg\\{ \\frac{f(x_{n+1})}{(x_{n+1} - x_1) \\cdots (x_{n+1} - x_n)} - \\frac{f(x_0)}{(x_0 - x_1) \\cdots (x_0 - x_n)} \\\\
&\\qquad + \\sum_{i=1}^{n} \\frac{f(x_i)}{(x_i - x_1) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)} \\\\
&\\qquad \\cdot \\left( \\frac{1}{x_i - x_{n+1}} - \\frac{1}{x_i - x_0} \\right) \\Bigg\\} \\\\
&= \\sum_{i=0}^{n+1} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_{n+1})},
\\end{aligned}$$

which proves the statement. $\\square$

The previous result has some immediate consequences.

**Corollary 6.11.** *The divided differences are independent of the order of the mesh points.*

**Corollary 6.12.** *If the function $f$ is continuous, then the divided differences depend continuously on the mesh points.*

Suppose $f$ is differentiable. Then the function $x_1 \\mapsto f[x_0, x_1]$ is continuous for $x_1 \\neq x_0$. Now compute the limit $\\lim_{x_1 \\to x_0} f[x_0, x_1]$. Using the definition of the first divided difference and the differentiability of the function we get

$$\\lim_{x_1 \\to x_0} f[x_0, x_1] = \\lim_{x_1 \\to x_0} \\frac{f(x_1) - f(x_0)}{x_1 - x_0} = f'(x_0).$$

Therefore, we define the first divided difference relative to equal mesh points by

$$f[x_0, x_0] := f'(x_0).$$

With this definition the function $x_1 \\mapsto f[x_0, x_1]$ is extended continuously for $x_1 = x_0$. Higher order divided differences with equal mesh points will be defined in Exercises 6 and 7 of the next section.

### Exercises

1. Compute the following divided differences:

   (a) $f[x_0, x_1, x_2, x_3]$, where $x_i = i$, $f(x) = x^2$,

   (b) $f[x_0, x_1, x_2]$, where $x_i = 0.2i$, $f(x) = \\sin x$,

   (c) $f[x_0, x_0]$, where $x_0 = 0$, $f(x) = \\sin x$.

<details class="reveal-solution"><summary>Show solution</summary>

**(a) $f[x_0,x_1,x_2,x_3]$ with $x_i = i$, $f(x) = x^2$:** the divided-difference table gives $f[0,1] = 1$, $f[1,2] = 3$, $f[2,3] = 5$; then $f[0,1,2] = 1$, $f[1,2,3] = 1$; and finally $f[0,1,2,3] = 0$. (As expected: the third divided difference of a degree-2 polynomial is $0$.)

**(b) $f[x_0,x_1,x_2]$ with $x_i = 0.2i$, $f = \\sin x$:** $f[0,0.2] = 0.9935$, $f[0.2,0.4] = 0.9535$, so $f[0,0.2,0.4] = (0.9535 - 0.9935)/0.4 \\approx -0.01$.

**(c) $f[x_0,x_0]$ with $x_0 = 0$, $f = \\sin x$:** by definition $f[x_0,x_0] = f'(x_0) = \\cos 0 = 1$.

</details>

2. Let $f \\in C^1[a,b]$, and $x_0, x_1 \\in (a, b)$, $x_0 \\neq x_1$. Show that there exists $\\xi \\in \\langle x_0, x_1 \\rangle$ such that
   $$f[x_0, x_1] = f'(\\xi).$$

<details class="reveal-solution"><summary>Show solution</summary>

By definition $f[x_0,x_1] = \\dfrac{f(x_1) - f(x_0)}{x_1 - x_0}$. By the Mean Value Theorem there exists $\\xi \\in (x_0,x_1)$ with
$$f'(\\xi) = \\frac{f(x_1) - f(x_0)}{x_1 - x_0} = f[x_0, x_1]. \\qquad \\square$$

</details>

3. Let $x_0 < x_1 < x_2 < x_3$ and
   $$P(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + a_3(x - x_0)(x - x_1)(x - x_2).$$
   Show that
   $$a_0 = P[x_0], \\quad a_1 = P[x_0, x_1], \\quad a_2 = P[x_0, x_1, x_2], \\quad \\text{and} \\quad a_3 = P[x_0, x_1, x_2, x_3].$$

<details class="reveal-solution"><summary>Show solution</summary>

Substituting successively: $P(x_0) = a_0$, so $a_0 = P[x_0]$. From $P(x_1) = a_0 + a_1(x_1 - x_0)$,
$$a_1 = \\frac{P(x_1) - P(x_0)}{x_1 - x_0} = P[x_0, x_1].$$
From $P(x_2) = a_0 + a_1(x_2 - x_0) + a_2(x_2 - x_0)(x_2 - x_1)$,
$$a_2 = \\frac{P[x_0,x_2] - P[x_0,x_1]}{x_2 - x_1} = P[x_0,x_1,x_2],$$
and similarly using $P(x_3)$ gives $a_3 = P[x_0,x_1,x_2,x_3]$. $\\square$

</details>

## 6.3. Newton's Divided Difference Formula

The disadvantage of formula (6.3) is that if we add an additional mesh point, then the whole formula (6.3) must be recomputed. In this section we define a new formula for the Lagrange polynomial, and in this form it will be easy to add a new mesh point to the formula.

Suppose function values $y_i = f(x_i)$ are given for $i = 0, 1, \\ldots, n$. First consider the relation

$$L_n(x) = L_0(x) + (L_1(x) - L_0(x)) + (L_2(x) - L_1(x)) + \\cdots + (L_n(x) - L_{n-1}(x)).$$

By definition, $L_0(x) = f(x_0)$. Consider the difference $L_i(x) - L_{i-1}(x)$. It is a polynomial of degree at most $i$, and since $L_i$ and $L_{i-1}$ both satisfy the interpolating equations at $x_0$, $\\ldots$, $x_{i-1}$, we have $L_i(x_j) - L_{i-1}(x_j) = f(x_j) - f(x_j) = 0$ $(j = 0, 1, \\ldots, i - 1)$. But then the Fundamental Theorem of Algebra yields

$$L_i(x) - L_{i-1}(x) = a_i(x - x_0)(x - x_1) \\cdots (x - x_{i-1}),$$

where $a_i \\in \\mathbb{R}$. If we substitute $x = x_i$ into this relation and use for $L_{i-1}(x_i)$ the formula (6.3), we get

$$\\begin{aligned}
f(x_i) - \\sum_{k=0}^{i-1} f(x_k) &\\frac{(x_i - x_0) \\cdots (x_i - x_{k-1})(x_i - x_{k+1}) \\cdots (x_i - x_{i-1})}{(x_k - x_0) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_{i-1})} \\\\
&= a_i(x_i - x_0) \\cdots (x_i - x_{i-1}).
\\end{aligned}$$

So from this we get for $a_i$ that

$$\\begin{aligned}
a_i &= \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})} - \\frac{1}{(x_i - x_0) \\cdots (x_i - x_{i-1})} \\\\
&\\qquad \\cdot \\sum_{k=0}^{i-1} f(x_k) \\frac{(x_i - x_0) \\cdots (x_i - x_{k-1})(x_i - x_{k+1}) \\cdots (x_i - x_{i-1})}{(x_k - x_0) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_{i-1})} \\\\
&= \\sum_{k=0}^{i} \\frac{f(x_k)}{(x_k - x_0) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_i)} \\\\
&= f[x_0, x_1, \\ldots, x_i].
\\end{aligned}$$

Therefore, the Lagrange interpolating polynomial can be written as

$$\\begin{aligned}
L_n(x) = &\\ f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \\cdots \\\\
&+ f[x_0, x_1, \\ldots, x_n](x - x_0)(x - x_1) \\cdots (x - x_{n-1}). \\tag{6.6}
\\end{aligned}$$

We have to emphasize that this is the same polynomial as (6.3), only it is given by a different formula. The polynomial given by (6.6) is called *Newton's divided difference formula* or shortly *Newton polynomial.*

The advantage of formula (6.6) compared to (6.3) can be seen immediately. It is easy to add a new mesh point to the formula, we have the simple correction term:

$$L_{n+1}(x) = L_n(x) + f[x_0, x_1, \\ldots, x_{n+1}](x - x_0) \\cdots (x - x_n).$$

Another advantage is that a polynomial of the form (6.6) can be easily evaluated using the Horner's method. Furthermore, the degree of the polynomial can be determined in this form easily. If, for example, $f[x_0, x_1, \\ldots, x_n] \\neq 0$, then the polynomial is of degree $n$. In Algorithm 6.13 we present the computation of the coefficients of the Newton polynomial, i.e., the values $a_i = f[x_0, \\ldots, x_i]$. In Algorithm 6.14 we formulate a method to evaluate the Newton polynomial using Horner's method.

**Algorithm 6.13. Computation of the coefficients of the Newton polynomial**

\`\`\`
INPUT:   n - number of mesh points − 1
         x_i, (i = 0, 1, ..., n) - mesh points
         y_i, (i = 0, 1, ..., n) - function values
OUTPUT:  a_i, (i = 0, 1, ..., n) - coefficients of the Newton polynomial, where a_i
                                    is the coefficient of the ith-order term

for i = 0, 1, ..., n do
    a_i ← y_i
end do
for j = 1, 2, ..., n do
    for i = n, n − 1, ..., j do
        a_i ← (a_i − a_{i−1})/(x_i − x_{i−j})
    end do
end do
output(a_0, a_1, ..., a_n)
\`\`\`

Note that Algorithm 6.13 was organized so that only those divided differences are stored by the end of the algorithm which are needed for the Newton polynomial.

**Algorithm 6.14. Evaluation of the Newton polynomial**

\`\`\`
INPUT:   n - number of mesh points − 1
         x_i, (i = 0, 1, ..., n) - mesh points
         a_i, (i = 0, 1, ..., n) - coefficients of the Newton polynomial
         x - the value where we evaluate the Newton polynomial
OUTPUT:  y - function value of the Newton polynomial at x

y ← a_n
for i = n − 1, n − 2, ..., 0 do
    y ← y(x − x_i) + a_i
end do
output(y)
\`\`\`

When we do the computation of the divided differences by hand, it is recommended to list the values of the divided differences in a triangular table as it can be seen in Table 6.1. The numbers in the first two columns are the input data, the rest of the numbers must be computed: a number is obtained so that we take the difference of the number to the left and above, and it is divided by the difference of the appropriate mesh points $x_k$. The numbers in frames in the diagonal of the table give the coefficients of the Newton polynomial in (6.6).

*Table 6.1: Computation of the divided differences by hand*

| $x_0$ | $\\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_1$ | $f(x_1)$ | $\\boxed{f[x_0, x_1]}$ | | |
| $x_2$ | $f(x_2)$ | $f[x_1, x_2]$ | $\\boxed{f[x_0, x_1, x_2]}$ | |
| $x_3$ | $f(x_3)$ | $f[x_2, x_3]$ | $f[x_1, x_2, x_3]$ | $\\ddots$ |
| $\\vdots$ | $\\vdots$ | $\\vdots$ | $\\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-2}, x_{n-1}, x_n]$ | $\\cdots$ $\\boxed{f[x_0, x_1, \\ldots, x_n]}$ |

**Example 6.15.** Consider again Example 6.2. We compute $L_3(x)$ in Newton's divided difference form, and we evaluate $L_3(0)$. First we compute the table of divided differences:

$$
\\begin{array}{rrrrr}
-1 & -3 & & & \\\\
1 & 1 & 2 & & \\\\
2 & 3 & 2 & 0 & \\\\
3 & 29 & 26 & 12 & 3
\\end{array}
$$

This yields that

$$L_3(x) = -3 + 2(x + 1) + 3(x + 1)(x - 1)(x - 2),$$

and so $L_3(0) = -3 + 2 \\cdot 1 + 3 \\cdot 1(-1)(-2) = 5$. We can simplify this formula of $L_3$ and we get the same form of the polynomial as in Example 6.2: $L_3(x) = 3x^3 - 6x^2 - x + 5$. $\\square$

Next we study again the truncation error of the interpolation. In Section 6.1 we obtained that it has the form $\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n)$. This is certainly the same for the Newton's divided difference form of the interpolating polynomial, but here we give a different form of the same truncation error.

**Theorem 6.16.** *Let $x_i \\in (a, b)$ $(i = 0, \\ldots, n)$ be pairwise different mesh points and $y_i = f(x_i)$ $(i = 0, \\ldots, n)$. Let $L_n(x)$ be the corresponding $n$th degree Lagrange interpolating polynomial. Then $f(x) = L_n(x) + f[x_0, x_1, \\ldots, x_n, x](x - x_0)(x - x_1) \\cdots (x - x_n)$.*

**Proof.** Fix $x \\in (a, b)$ which is different from each mesh points. (If $x = x_i$ for some $i$, then the statement is clearly true.) Add $x$ to the mesh points together with the function value $f(x)$. Let $L_{n+1}$ be the Lagrange interpolating polynomial corresponding to the extended data set. Then we have

$$L_{n+1}(t) = L_n(t) + f[x_0, x_1, \\ldots, x_n, x](t - x_0) \\cdots (t - x_n).$$

Now substitution $t = x$ proves the statement, since $f(x) = L_{n+1}(x)$. $\\square$

This form of the truncation error has no practical importance, since in order to compute $f[x_0, \\ldots, x_n, x]$ the exact value of $f(x)$ is needed. But its consequence is important. Comparing it to Theorem 6.5 we get the following result.

**Corollary 6.17.** *If $f \\in C^n[a,b]$ and $x_i$ $(i = 0, \\ldots, n)$ are pairwise different mesh points, then there exists $\\xi \\in \\langle x_0, x_1, \\ldots, x_n \\rangle$ such that*

$$f[x_0, x_1, \\ldots, x_n] = \\frac{1}{n!} f^{(n)}(\\xi).$$

### Exercises

1. Repeat Exercise 1 of Section 6.1 using the Newton's divided difference form of the Lagrange interpolating polynomial.

2. Show that if $P$ is a polynomial of degree $n$, then
   $$P(x) = \\sum_{i=0}^{n} P[x_0, \\ldots, x_i] \\prod_{k=0}^{i-1} (x - x_k).$$

3. Let $x_0, \\ldots, x_n$ be pairwise different numbers. Show that if $P$ is a polynomial of degree $n$, then $P[x_0, \\ldots, x_m] = 0$ for all $m > n$.

4. Prove that if $f(x) = c_0 + c_1 x + \\cdots + c_n x^n$, then $c_n = f[x_0, x_1, \\ldots, x_n]$.

5. Prove that

   $$f[x_0, x_1, \\ldots, x_n] = \\frac{
   \\begin{vmatrix}
   1 & x_0 & x_0^2 & \\cdots & x_0^{n-1} & f(x_0) \\\\
   1 & x_1 & x_1^2 & \\cdots & x_1^{n-1} & f(x_1) \\\\
   \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\
   1 & x_n & x_n^2 & \\cdots & x_n^{n-1} & f(x_n)
   \\end{vmatrix}
   }{
   \\begin{vmatrix}
   1 & x_0 & x_0^2 & \\cdots & x_0^{n-1} & x_0^n \\\\
   1 & x_1 & x_1^2 & \\cdots & x_1^{n-1} & x_1^n \\\\
   \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\
   1 & x_n & x_n^2 & \\cdots & x_n^{n-1} & x_n^n
   \\end{vmatrix}
   }.$$

6. Show that
   $$\\lim_{(x_1, x_2, \\ldots, x_n) \\to (x_0, x_0, \\ldots, x_0)} f[x_0, x_1, \\ldots, x_n] = \\frac{f^{(n)}(x_0)}{n!}.$$
   (Hint: Use Corollary 6.17.)

7. Let $f \\in C^2$. Define the following divided differences:
   $$f[x_0, x_0, x_1] := \\lim_{x_2 \\to x_0} f[x_0, x_2, x_1], \\quad f[x_0, x_1, x_0] := \\lim_{x_2 \\to x_0} f[x_0, x_1, x_2],$$
   and
   $$f[x_1, x_0, x_0] := \\lim_{x_2 \\to x_0} f[x_1, x_0, x_2], \\qquad f[x_0, x_0, x_0] = \\frac{f''(x_0)}{2}.$$
   Show that the limits above exist, and the second divided differences satisfy:

   (a) $f[x_0, x_0, x_1] = \\dfrac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$,

   (b) $f[x_1, x_0, x_0] = \\dfrac{f[x_0, x_0] - f[x_1, x_0]}{x_0 - x_1}$,

   (c) $f[x_0, x_0, x_1] = f[x_0, x_1, x_0] = f[x_1, x_0, x_0]$,

   (d) $\\lim_{(x_1, x_2) \\to (x_0, x_0)} f[x_0, x_1, x_2] = f[x_0, x_0, x_0]$,

   (e) There exists $\\xi \\in \\langle x_0, x_1 \\rangle$ such that $f[x_0, x_0, x_1] = f''(\\xi)/2$.

8. Check that Algorithm 6.13 gives back the coefficients of the Newton polynomial.
`,be=`## 6.2. Osztott differenciák

Adott egy $f \\colon [a,b] \\to \\mathbb{R}$ függvény és $x_i \\in [a,b]$ $(i = 0, \\ldots, n)$ páronként különböző alappontok. Ekkor az $f$ függvény $x_0$ pontbeli *nulladrendű osztott differenciáján* az $f[x_0] \\equiv f(x_0)$ számot értjük. Az $f$ függvény $x_0, x_1$ pontokra felírt *elsőrendű osztott differenciáján* az

$$f[x_0, x_1] \\equiv \\frac{f[x_1] - f[x_0]}{x_1 - x_0}$$

számot értjük, (azaz $f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$). Általában pedig, az $f$ függvény $x_0, x_1, \\ldots, x_n$ pontokra felírt *$n$-edrendű osztott differenciáján* az

$$f[x_0, x_1, \\ldots, x_n] \\equiv \\frac{f[x_1, x_2, \\ldots, x_n] - f[x_0, x_1, \\ldots, x_{n-1}]}{x_n - x_0}$$

számot értjük. Megjegyezzük, hogy nem tettük fel, hogy az alappontok növekvő sorrendben rendezettek.

**6.10. tétel.** *Legyenek $x_i$ $(i = 0, 1, \\ldots, n)$ páronként különböző alappontok. Ekkor*

$$f[x_0, x_1, \\ldots, x_n] = \\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)}.$$

**Bizonyítás.** $n$-szerinti teljes indukcióval bizonyítjuk az állítást. $n = 0$-ra az állítás nyilvánvaló. (Ebben az esetben a nevezőben „üres szorzat" áll, ez definíció szerint 1-gyel egyezik meg.) Tegyük fel, hogy $n$-re teljesül az állítás, és tekintsük $f[x_0, x_1, \\ldots, x_{n+1}]$-et. Az osztott differenciák definíciója, az indukciós hipotézis és egy kis számolás alapján:

$$\\begin{aligned}
f[x_0, x_1, \\ldots, x_{n+1}] &= \\frac{f[x_1, x_2, \\ldots, x_{n+1}] - f[x_0, x_1, \\ldots, x_n]}{x_{n+1} - x_0} \\\\
&= \\frac{1}{x_{n+1} - x_0} \\Bigg\\{ \\sum_{i=1}^{n+1} \\frac{f(x_i)}{(x_i - x_1) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_{n+1})} \\\\
&\\qquad - \\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)} \\Bigg\\} \\\\
&= \\frac{1}{x_{n+1} - x_0} \\Bigg\\{ \\frac{f(x_{n+1})}{(x_{n+1} - x_1) \\cdots (x_{n+1} - x_n)} - \\frac{f(x_0)}{(x_0 - x_1) \\cdots (x_0 - x_n)} \\\\
&\\qquad + \\sum_{i=1}^{n} \\frac{f(x_i)}{(x_i - x_1) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)} \\\\
&\\qquad \\cdot \\left( \\frac{1}{x_i - x_{n+1}} - \\frac{1}{x_i - x_0} \\right) \\Bigg\\} \\\\
&= \\sum_{i=0}^{n+1} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_{n+1})},
\\end{aligned}$$

amiből, a teljes indukció elve szerint, következik a tétel állítása. $\\square$

Az előző tétel állításából következnek:

**6.11. következmény.** *Az osztott differenciák az alappontok sorrendjétől függetlenek.*

**6.12. következmény.** *Ha $f$ folytonos, akkor az osztott differencia az alappontoktól folytonosan függ.*

Tegyük fel, hogy $f$ differenciálható függvény. Az utóbbi következmény szerint az $x_1 \\mapsto f[x_0, x_1]$ függvény folytonos ha $x_1 \\neq x_0$. Vizsgáljuk meg, hogy létezik-e a $\\lim_{x_1 \\to x_0} f[x_0, x_1]$ határérték! Az elsőrendű osztott differencia definícióját és $f$ differenciálhatóságát használva

$$\\lim_{x_1 \\to x_0} f[x_0, x_1] = \\lim_{x_1 \\to x_0} \\frac{f(x_1) - f(x_0)}{x_1 - x_0} = f'(x_0).$$

Ezért az elsőrendű osztott differenciákat egyenlő alappontokra a következőképpen definiáljuk:

$$f[x_0, x_0] \\equiv f'(x_0).$$

Ezzel a definícióval az $x_1 \\mapsto f[x_0, x_1]$ függvényt folytonosan terjesztettük ki $x_1 = x_0$-ra. Magasabbrendű osztott differenciák egyenlő alappontokra kiterjesztésével a következő szakasz 6. és 7. feladatai foglalkoznak.

### Feladatok

1. Számítsa ki a következő osztott differenciákat:

   (a) $f[x_0, x_1, x_2, x_3]$, ahol $x_i = i$, $f(x) = x^2$,

   (b) $f[x_0, x_1, x_2]$, ahol $x_i = 0.2i$, $f(x) = \\sin x$,

   (c) $f[x_0, x_0]$, ahol $x_0 = 0$, $f(x) = \\sin x$.

<details class="reveal-solution"><summary>Megoldás</summary>

**(a) $f[x_0,x_1,x_2,x_3]$ with $x_i = i$, $f(x) = x^2$:** the divided-difference table gives $f[0,1] = 1$, $f[1,2] = 3$, $f[2,3] = 5$; then $f[0,1,2] = 1$, $f[1,2,3] = 1$; and finally $f[0,1,2,3] = 0$. (As expected: the third divided difference of a degree-2 polynomial is $0$.)

**(b) $f[x_0,x_1,x_2]$ with $x_i = 0.2i$, $f = \\sin x$:** $f[0,0.2] = 0.9935$, $f[0.2,0.4] = 0.9535$, so $f[0,0.2,0.4] = (0.9535 - 0.9935)/0.4 \\approx -0.01$.

**(c) $f[x_0,x_0]$ with $x_0 = 0$, $f = \\sin x$:** by definition $f[x_0,x_0] = f'(x_0) = \\cos 0 = 1$.

</details>

2. Legyen $f \\in C^1(a,b)$, és $x_0, x_1 \\in (a, b)$, $x_0 \\neq x_1$. Bizonyítsa be, hogy létezik olyan $\\xi \\in \\langle x_0, x_1 \\rangle$, hogy
   $$f[x_0, x_1] = f'(\\xi)!$$

<details class="reveal-solution"><summary>Megoldás</summary>

By definition $f[x_0,x_1] = \\dfrac{f(x_1) - f(x_0)}{x_1 - x_0}$. By the Mean Value Theorem there exists $\\xi \\in (x_0,x_1)$ with
$$f'(\\xi) = \\frac{f(x_1) - f(x_0)}{x_1 - x_0} = f[x_0, x_1]. \\qquad \\square$$

</details>

3. Legyen $x_0 < x_1 < x_2 < x_3$ és
   $$P(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + a_3(x - x_0)(x - x_1)(x - x_2).$$
   Lássa be, hogy
   $$a_0 = P[x_0], \\quad a_1 = P[x_0, x_1], \\quad a_2 = P[x_0, x_1, x_2], \\quad \\text{és} \\quad a_3 = P[x_0, x_1, x_2, x_3]!$$

<details class="reveal-solution"><summary>Megoldás</summary>

Substituting successively: $P(x_0) = a_0$, so $a_0 = P[x_0]$. From $P(x_1) = a_0 + a_1(x_1 - x_0)$,
$$a_1 = \\frac{P(x_1) - P(x_0)}{x_1 - x_0} = P[x_0, x_1].$$
From $P(x_2) = a_0 + a_1(x_2 - x_0) + a_2(x_2 - x_0)(x_2 - x_1)$,
$$a_2 = \\frac{P[x_0,x_2] - P[x_0,x_1]}{x_2 - x_1} = P[x_0,x_1,x_2],$$
and similarly using $P(x_3)$ gives $a_3 = P[x_0,x_1,x_2,x_3]$. $\\square$

</details>

## 6.3. A Lagrange-féle interpolációs polinom Newton-féle alakja

A (6.3) képletnek van egy kellemetlen hátránya: új osztópont felvételekor teljesen újra kell számolni a (6.3) kifejezést. Ezt a hiányosságot kiküszöböli ki a Lagrange-polinom egy másik alakja, az ún. Newton-féle alak. Tegyük fel, hogy $f$ függvényt akarjuk interpolálni, azaz $y_i = f(x_i)$. A Lagrange-féle interpolációs polinom Newton-féle alakjának levezetéséhez induljunk ki az

$$L_n(x) = L_0(x) + (L_1(x) - L_0(x)) + (L_2(x) - L_1(x)) + \\cdots + (L_n(x) - L_{n-1}(x))$$

összefüggésből. Definíció szerint $L_0(x) = f(x_0)$ konstans függvény. Vizsgáljuk most az $L_i(x) - L_{i-1}(x)$ különbséget! $L_i - L_{i-1}$ egy legfeljebb $i$-edfokú polinom, és mivel $L_i$ és $L_{i-1}$ is teljesítik az interpolációs egyenletet $x_0$, $\\ldots$, $x_{i-1}$-ben, ezért $L_i(x_j) - L_{i-1}(x_j) = f(x_j) - f(x_j) = 0$ $(j = 0, 1, \\ldots, i - 1)$. De ekkor az algebra alaptétele szerint $L_i - L_{i-1}$ alakja:

$$L_i(x) - L_{i-1}(x) = a_i(x - x_0)(x - x_1) \\cdots (x - x_{i-1}),$$

ahol $a_i \\in \\mathbb{R}$. Ha ebbe a relációba $x = x_i$-t helyettesítünk és használjuk $L_{i-1}(x_i)$-re a (6.3) képletet, kapjuk, hogy

$$\\begin{aligned}
f(x_i) - \\sum_{k=0}^{i-1} f(x_k) &\\frac{(x_i - x_0) \\cdots (x_i - x_{k-1})(x_i - x_{k+1}) \\cdots (x_i - x_{i-1})}{(x_k - x_0) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_{i-1})} \\\\
&= a_i(x_i - x_0) \\cdots (x_i - x_{i-1}).
\\end{aligned}$$

Ebből $a_i$-t kifejezve

$$\\begin{aligned}
a_i &= \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})} - \\frac{1}{(x_i - x_0) \\cdots (x_i - x_{i-1})} \\\\
&\\qquad \\cdot \\sum_{k=0}^{i-1} f(x_k) \\frac{(x_i - x_0) \\cdots (x_i - x_{k-1})(x_i - x_{k+1}) \\cdots (x_i - x_{i-1})}{(x_k - x_0) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_{i-1})} \\\\
&= \\sum_{k=0}^{i} \\frac{f(x_k)}{(x_k - x_0) \\cdots (x_k - x_{k-1})(x_k - x_{k+1}) \\cdots (x_k - x_i)} \\\\
&= f[x_0, x_1, \\ldots, x_i].
\\end{aligned}$$

Összefoglalva az eddigieket, a Lagrange-féle interpolációs polinomot megadhatjuk az

$$\\begin{aligned}
L_n(x) = &\\ f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \\cdots \\\\
&+ f[x_0, x_1, \\ldots, x_n](x - x_0)(x - x_1) \\cdots (x - x_{n-1}) \\tag{6.6}
\\end{aligned}$$

képlettel is. Hangsúlyozzuk, hogy ez ugyanaz a polinom, mint (6.3), csak egy másik alakban felírva. A (6.6) formulával definiált polinomot nevezzük *Lagrange-féle interpolációs polinom Newton-féle alakjának* vagy röviden *Newton-polinomnak.*

A (6.6) képletből leolvasható ennek a formulának az előnye a (6.3) képlethez viszonyítva. Először is, új osztópont hozzávételével a képlet kényelmesen bővíthető egy új taggal:

$$L_{n+1}(x) = L_n(x) + f[x_0, x_1, \\ldots, x_{n+1}](x - x_0) \\cdots (x - x_n).$$

Fontos előny még az is, hogy a (6.6) alakban felírt polinomot könnyen kiértékelhetjük a Horner-elrendezés segítségével. Ebből az alakból rögtön leolvasható a polinom fokszáma is. Ha pl. $f[x_0, x_1, \\ldots, x_n] \\neq 0$, akkor a polinom $n$-edfokú. A 6.13 algoritmusban megadtuk a Newton-féle interpolációs polinom együtthatóinak, azaz az $a_i = f[x_0, \\ldots, x_i]$ értékek kiszámítását, a 6.14 algoritmusban pedig a Newton-polinom kiértékelését Horner-eljárással.

**6.13. algoritmus. A Newton-polinom együtthatóinak generálása**

\`\`\`
INPUT:   n - az alappontok száma − 1
         x_i, (i = 0, 1, ..., n) - alappontok
         y_i, (i = 0, 1, ..., n) - függvényértékek
OUTPUT:  a_i, (i = 0, 1, ..., n) - a Newton-polinom együtthatói, ahol a_i
                                    az i-edfokú tag együtthatója

for i = 0, 1, ..., n do
    a_i ← y_i
end do
for j = 1, 2, ..., n do
    for i = n, n − 1, ..., j do
        a_i ← (a_i − a_{i−1})/(x_i − x_{i−j})
    end do
end do
output(a_0, a_1, ..., a_n)
\`\`\`

Megjegyezzük, hogy a 6.13 algoritmust úgy szerveztük, hogy a Newton-polinom felírása közben számolt osztott differenciák közül csak az együtthatókhoz szükségeseket őrizzük meg a számolás végéig.

**6.14. algoritmus. A Newton-polinom kiértékelése**

\`\`\`
INPUT:   n - az alappontok száma − 1
         x_i, (i = 0, 1, ..., n) - alappontok
         a_i, (i = 0, 1, ..., n) - a Newton-polinom együtthatói
         x - a pont, ahol kiértékeljük a Newton-polinomot
OUTPUT:  y - a Newton-polinom értéke x-ben

y ← a_n
for i = n − 1, n − 2, ..., 0 do
    y ← y(x − x_i) + a_i
end do
output(y)
\`\`\`

Kézi számoláskor az osztópontokat, a megadott függvényértékeket és a számított osztott differenciákat érdemes a 6.1 táblázatban látható módon egy háromszög alakú táblázatban elrendezni. A táblázat első két oszlopában szereplő számok input adatok, a táblázat többi elemét számoljuk a tőle balra álló és az a fölötti eggyel kisebb rendű osztott differenciák különbségét osztva megfelelő $x_k$ értékek különbségének hányadosaként. A táblázatban a bekeretezett számok fogják adni a (6.6) képletben szereplő együtthatókat.

*6.1. táblázat. Osztott differenciák elrendezése kézi számoláskor*

| $x_0$ | $\\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_1$ | $f(x_1)$ | $\\boxed{f[x_0, x_1]}$ | | |
| $x_2$ | $f(x_2)$ | $f[x_1, x_2]$ | $\\boxed{f[x_0, x_1, x_2]}$ | |
| $x_3$ | $f(x_3)$ | $f[x_2, x_3]$ | $f[x_1, x_2, x_3]$ | $\\ddots$ |
| $\\vdots$ | $\\vdots$ | $\\vdots$ | $\\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-2}, x_{n-1}, x_n]$ | $\\cdots$ $\\boxed{f[x_0, x_1, \\ldots, x_n]}$ |

**6.15. példa.** Tekintsük újra a 6.2 példát. Adjuk meg $L_3(x)$ Newton-féle alakját, majd számítsuk ki $L_3(0)$-t! Képezzük a Newton-polinom felírásához szükséges osztott differenciák táblázatát:

$$
\\begin{array}{rrrrr}
-1 & -3 & & & \\\\
1 & 1 & 2 & & \\\\
2 & 3 & 2 & 0 & \\\\
3 & 29 & 26 & 12 & 3
\\end{array}
$$

Ebből kapjuk, hogy

$$L_3(x) = -3 + 2(x + 1) + 3(x + 1)(x - 1)(x - 2),$$

és így $L_3(0) = -3 + 2 \\cdot 1 + 3 \\cdot 1(-1)(-2) = 5$. Természetesen egyszerűsítve $L_3$ képletét visszakapjuk a 6.2 példában kiszámolt $L_3(x) = 3x^3 - 6x^2 - x + 5$ képletet. $\\square$

Most az interpoláció képlethibájával foglalkozunk újra. A 6.1 szakaszban megállapítottuk, hogy a közelítés hibája az $\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n)$ alakban írható fel. Ez a képlet természetesen érvényes a Newton-alakban felírt interpolációs polinomot használva is, de itt megadjuk a képlethiba egy másik alakját.

**6.16. tétel.** *Legyenek $x_i \\in (a,b)$ $(i = 0, \\ldots, n)$ páronként különböző alappontok és $y_i = f(x_i)$ $(i = 0, \\ldots, n)$. Legyen $L_n(x)$ az adatokhoz tartozó $n$-edfokú Lagrange-polinom. Ekkor*

$$f(x) = L_n(x) + f[x_0, x_1, \\ldots, x_n, x](x - x_0)(x - x_1) \\cdots (x - x_n).$$

**Bizonyítás.** Rögzítsünk egy $x \\in (a, b)$ számot amely nem egyezik meg egyik alapponttal sem. (Ha $x = x_i$ valamely $i$-re, akkor az állítás nyilvánvaló.) Vegyük $x$-et az alappontokhoz és rendeljük hozzá az $f(x)$ függvényértéket. Legyen $L_{n+1}$ a kibővített adatokhoz tartozó Lagrange-polinom. A Newton-polinom definíciója szerint

$$L_{n+1}(t) = L_n(t) + f[x_0, x_1, \\ldots, x_n, x](t - x_0) \\cdots (t - x_n).$$

Ebből $t = x$-et véve következik az állítás, hiszen $f(x) = L_{n+1}(x)$. $\\square$

Az interpoláció képlethibájának a 6.16 tételben közölt alakja elsősorban elméleti jelentőségű, hiszen $f[x_0, \\ldots, x_n, x]$ kiszámításához $f(x)$ ismerete is kell. Fontos viszont a tétel következménye. Ha összehasonlítjuk az előző tétel állítását a 6.5 tétellel, akkor rögtön kapjuk a következő eredményt:

**6.17. következmény.** *Ha $f \\in C^n(a,b)$ és $x_i$ $(i = 0, \\ldots, n)$ páronként különböző alappontok, akkor létezik olyan $\\xi \\in \\langle x_0, x_1, \\ldots, x_n \\rangle$, hogy*

$$f[x_0, x_1, \\ldots, x_n] = \\frac{1}{n!} f^{(n)}(\\xi).$$

### Feladatok

1. Ismételje meg a 6.1 szakasz 1. feladatát a Lagrange-polinom Newton-féle alakját használva!

2. Igazolja, hogy ha $P$ egy $n$-edfokú polinom, akkor
   $$P(x) = \\sum_{i=0}^{n} P[x_0, \\ldots, x_i] \\prod_{k=0}^{i-1} (x - x_k).$$

3. Legyenek $x_0, \\ldots, x_n$ páronként különböző számok. Igazolja, hogy ha $P$ egy $n$-edfokú polinom, akkor $P[x_0, \\ldots, x_m] = 0$ minden $m > n$-re!

4. Mutassa meg, hogy ha $f(x) = c_0 + c_1 x + \\cdots + c_n x^n$, akkor $c_n = f[x_0, x_1, \\ldots, x_n]$!

5. Bizonyítsa be, hogy

   $$f[x_0, x_1, \\ldots, x_n] = \\frac{
   \\begin{vmatrix}
   1 & x_0 & x_0^2 & \\cdots & x_0^{n-1} & f(x_0) \\\\
   1 & x_1 & x_1^2 & \\cdots & x_1^{n-1} & f(x_1) \\\\
   \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\
   1 & x_n & x_n^2 & \\cdots & x_n^{n-1} & f(x_n)
   \\end{vmatrix}
   }{
   \\begin{vmatrix}
   1 & x_0 & x_0^2 & \\cdots & x_0^{n-1} & x_0^n \\\\
   1 & x_1 & x_1^2 & \\cdots & x_1^{n-1} & x_1^n \\\\
   \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\
   1 & x_n & x_n^2 & \\cdots & x_n^{n-1} & x_n^n
   \\end{vmatrix}
   }!$$

6. Mutassa meg, hogy
   $$\\lim_{(x_1, x_2, \\ldots, x_n) \\to (x_0, x_0, \\ldots, x_0)} f[x_0, x_1, \\ldots, x_n] = \\frac{f^{(n)}(x_0)}{n!}!$$
   (Útmutatás: Használja a 6.17 következményt!)

7. Legyen $f \\in C^2$. Definiálja a következő osztott differenciákat:
   $$f[x_0, x_0, x_1] \\equiv \\lim_{x_2 \\to x_0} f[x_0, x_2, x_1], \\quad f[x_0, x_1, x_0] \\equiv \\lim_{x_2 \\to x_0} f[x_0, x_1, x_2],$$
   és
   $$f[x_1, x_0, x_0] \\equiv \\lim_{x_2 \\to x_0} f[x_1, x_0, x_2], \\qquad f[x_0, x_0, x_0] = \\frac{f''(x_0)}{2}!$$
   Mutassa meg, hogy az előbbi határértékek léteznek, és az így definiált másodrendű osztott differenciák megőrzik a páronként különböző alappontokra felírt osztott differenciák szokásos tulajdonságait:

   (a) $f[x_0, x_0, x_1] = \\dfrac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$,

   (b) $f[x_1, x_0, x_0] = \\dfrac{f[x_0, x_0] - f[x_1, x_0]}{x_0 - x_1}$,

   (c) $f[x_0, x_0, x_1] = f[x_0, x_1, x_0] = f[x_1, x_0, x_0]$,

   (d) $\\lim_{(x_1, x_2) \\to (x_0, x_0)} f[x_0, x_1, x_2] = f[x_0, x_0, x_0]$,

   (e) Létezik olyan $\\xi \\in \\langle x_0, x_1 \\rangle$, hogy $f[x_0, x_0, x_1] = f''(\\xi)/2$.

8. Ellenőrizze, hogy a 6.13 algoritmus valóban visszaadja a Newton-polinom együtthatóit!
`,ve=`## 6.4. Hermite Interpolation

In this section we generalize the basic problem of interpolation. Let $f$ be a differentiable function, and given mesh points $x_i$ $(i = 0, \\ldots, n)$. The so-called *Hermite interpolation* asks to find a polynomial $g(x) = c_0 + c_1 x + \\cdots + c_m x^m$ which interpolates not only the function values $y_i = f(x_i)$, but also the derivative values $y_i' := f'(x_i)$. Therefore, we are looking for a polynomial $g$ of degree $m$ which satisfies the interpolation conditions

$$g(x_i) = y_i, \\qquad g'(x_i) = y_i', \\qquad i = 0, 1, \\ldots, n.$$

The geometrical meaning of this problem is that the graph of $g$ goes through the given points $(x_i, y_i)$ in a way that the tangent line of the graph at $x_i$ has a slope equal to the value $y_i'$. In the formula of the polynomial $g$ there are $m + 1$ parameters, and the interpolation conditions specify $2(n + 1)$ conditions. So we expect that the Hermite interpolation problem has a unique solution in the class of polynomials with degree at most $m = 2n + 1$. The next theorem will prove this result. The solution of the Hermite interpolation problem is called *Hermite interpolating polynomial* or shortly *Hermite polynomial*, and it is denoted by $H_{2n+1}$.

In the next theorem we will use higher order divided differences where two consecutive mesh points can be equal: $f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n]$, where $x_0, \\ldots, x_n$ are pairwise different mesh points. Its definition is the usual recursion:

$$f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n] = \\frac{f[x_0, x_1, x_1, \\ldots, x_n, x_n] - f[x_0, x_0, x_1, x_1, \\ldots, x_n]}{x_n - x_0}.$$

The divided difference with lower orders are defined in a similar manner until we get first divided differences with different or equal mesh points. Both are already defined in Section 6.2.

**Theorem 6.18.** *The Hermite interpolation problem has a unique solution in the class of polynomials with degree at most $(2n + 1)$, which is given by*

$$\\begin{aligned}
H_{2n+1}(x) = &\\ f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_1](x - x_0)^2 \\\\
&+ f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1) + f[x_0, x_0, x_1, x_1, x_2](x - x_0)^2(x - x_1)^2 \\\\
&+ f[x_0, x_0, x_1, x_1, x_2, x_2](x - x_0)^2(x - x_1)^2(x - x_2) + \\cdots \\tag{6.7} \\\\
&+ f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n](x - x_0)^2(x - x_1)^2 \\cdots (x - x_{n-1})^2(x - x_n).
\\end{aligned}$$

*Moreover, the truncation error is*

$$f(x) - H_{2n+1}(x) = f[x_0, x_0, \\ldots, x_n, x_n, x](x - x_0)^2 \\cdots (x - x_n)^2. \\tag{6.8}$$

**Proof.** First we discuss the uniqueness of the Hermite polynomial. Suppose $H_{2n+1}$ and $\\tilde{H}_{2n+1}$ are polynomials of degree at most $(2n + 1)$ which both satisfy the equations of the Hermite interpolation problem. Then $P := H_{2n+1} - \\tilde{H}_{2n+1}$ is a polynomial of degree at most $(2n + 1)$ which satisfies $P(x_i) = H_{2n+1}(x_i) - \\tilde{H}_{2n+1}(x_i) = f(x_i) - f(x_i) = 0$ and $P'(x_i) = H'_{2n+1}(x_i) - \\tilde{H}'_{2n+1}(x_i) = f'(x_i) - f'(x_i) = 0$, i.e., $x_i$ is a double root of $P$ for all $i = 0, 1, \\ldots, n$. Hence $P$ has $2(n + 1) = 2n + 2$ number of roots, and hence the Fundamental Theorem of Algebra yields that $P$ is identically equal to 0, since the degree of $P$ is at most $(2n + 1)$. This implies that if the solution of the Hermite interpolation problem exists, it has to be unique.

Now we show that the polynomial $H_{2n+1}$ defined by (6.7) is a solution of the Hermite interpolation problem, and satisfies the error formula (6.8) too. Direct computation gives that $H_{2n+1}(x_0) = f(x_0)$ and $H'_{2n+1}(x_0) = f[x_0, x_0] = f'(x_0)$. Next we show that $H_{2n+1}(x_1) = f(x_1)$ and $H'_{2n+1}(x_1) = f'(x_1)$ hold too. To prove this, select numbers $\\tilde{x}_i$ close to $x_i$ so that the numbers $\\{x_i, \\tilde{x}_i:\\ i = 0, 1, \\ldots, n\\}$ be pairwise different, and let $L_{2n+1}$ be the Lagrange polynomial interpolating the function values of $f$ at these mesh points. Then

$$\\begin{aligned}
L_{2n+1}(x) = &\\ f[x_0] + f[x_0, x_0'](x - x_0) + f[x_0, x_0', x_1](x - x_0)(x - x_0') \\\\
&+ f[x_0, x_0', x_1, x_1'](x - x_0)(x - x_0')(x - x_1) + \\cdots \\\\
&+ f[x_0, x_0', x_1, x_1', \\ldots, x_n, x_n'](x - x_0)(x - x_0') \\cdots (x - x_{n-1}) \\\\
&\\quad \\cdot (x - x_{n-1}')(x - x_n),
\\end{aligned}$$

and

$$f(x) = L_{2n+1}(x) + f[x_0, x_0', \\ldots, x_n, x_n', x](x - x_0)(x - x_0') \\cdots (x - x_n)(x - x_n').$$

The definition of $L_{2n+1}$ and $H_{2n+1}$ and the continuity of the divided difference (see Exercise 3) yield for all $x$ that

$$L_{2n+1}(x) \\to H_{2n+1}(x) \\quad \\text{as } (x_0', x_1', \\ldots, x_n') \\to (x_0, x_1, \\ldots, x_n), \\tag{6.9}$$

and so

$$f(x) = H_{2n+1}(x) + f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n, x](x - x_0)^2(x - x_1)^2 \\cdots (x - x_n)^2.$$

This proves relation (6.8). It follows from the uniqueness of the Lagrange polynomial that if we interchange $x_0$, $x_0'$ and $x_1$, $x_1'$, then the interpolating polynomial remains the same, so

$$\\begin{aligned}
L_{2n+1}(x) = &\\ f[x_1] + f[x_1, x_1'](x - x_1) + f[x_1, x_1', x_0](x - x_1)(x - x_1') \\\\
&+ f[x_1, x_1', x_0, x_0'](x - x_1)(x - x_1')(x - x_0) + \\cdots \\\\
&+ f[x_1, x_1', x_0, x_0', x_2, x_2', \\ldots, x_n, x_n'](x - x_1)(x - x_1')(x - x_0)(x - x_0') \\\\
&\\quad \\cdot (x - x_2)(x - x_2') \\cdots (x - x_{n-1})(x - x_{n-1}')(x - x_n).
\\end{aligned}$$

But then taking the limit $(x_0', x_1', \\ldots, x_n') \\to (x_0, x_1, \\ldots, x_n)$ of both sides, and using relation (6.9), we get

$$\\begin{aligned}
H_{2n+1}(x) = &\\ f[x_1] + f[x_1, x_1](x - x_1) + f[x_1, x_1, x_0](x - x_1)^2 \\\\
&+ f[x_1, x_1, x_0, x_0](x - x_1)^2(x - x_0) + f[x_1, x_1, x_0, x_0, x_2](x - x_1)^2(x - x_0)^2 \\\\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2](x - x_1)^2(x - x_0)^2(x - x_2) + \\cdots \\\\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2, \\ldots, x_n, x_n](x - x_1)^2(x - x_0)^2(x - x_2)^2 \\\\
&\\quad \\cdots (x - x_{n-1})^2(x - x_n).
\\end{aligned}$$

But from this form it is clear that $H_{2n+1}(x_1) = f(x_1)$ and $H'_{2n+1}(x_1) = f'(x_1)$. In a similar manner we can show that $H_{2n+1}(x_i) = f(x_i)$ and $H'_{2n+1}(x_i) = f'(x_i)$ hold for $i = 2, 3, \\ldots, n$. $\\square$

**Theorem 6.19.** *Let $f \\in C^{2n+2}$. Then there exists $\\xi \\in \\langle x_0, x_1, \\ldots, x_n, x \\rangle$ such that*

$$f(x) - H_{2n+1}(x) = \\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}(x - x_0)^2 \\cdots (x - x_n)^2.$$

**Proof.** The proof is similar to that of Theorem 6.5. Let $x$ be a number different from all mesh points, and define the function

$$g(z) := f(z) - H_{2n+1}(z) - \\frac{(z - x_0)^2 \\cdots (z - x_n)^2}{(x - x_0)^2 \\cdots (x - x_n)^2}(f(x) - H_{2n+1}(x)).$$

Clearly, $g \\in C^{2n+2}$, and $x_0, \\ldots, x_n$ are all double roots, and $x$ is a simple root of $g$. Therefore, the generalized Rolle's Theorem (Theorem 6.4) implies that there exists $\\xi \\in \\langle x_0, x_1, \\ldots, x_n, x \\rangle$ such that $g^{(2n+2)}(\\xi) = 0$. This yields the statement of the theorem. $\\square$

Comparing relations (6.8) and Theorem 6.19 we get the next result.

**Corollary 6.20.** *Suppose $f \\in C^{2n+2}$, and $x, x_0, \\ldots, x_n$ are pairwise different numbers. Then there exists $\\xi \\in \\langle x_0, x_1, \\ldots, x_n, x \\rangle$ such that*

$$f[x_0, x_0, \\ldots, x_n, x_n, x] = \\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}.$$

*Table 6.2: Table of divided differences for the Hermite polynomial*

| $x_0$ | $\\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_0$ | $f(x_0)$ | $\\boxed{f[x_0, x_0]}$ | | |
| $x_1$ | $f(x_1)$ | $f[x_0, x_1]$ | $\\boxed{f[x_0, x_0, x_1]}$ | |
| $x_1$ | $f(x_1)$ | $f[x_1, x_1]$ | $f[x_0, x_1, x_1]$ | $\\ddots$ |
| $\\vdots$ | $\\vdots$ | $\\vdots$ | $\\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-1}, x_{n-1}, x_n]$ | $\\cdots$ |
| $x_n$ | $f(x_n)$ | $f[x_n, x_n]$ | $f[x_{n-1}, x_n, x_n]$ | $\\cdots$ $\\boxed{f[x_0, x_0, x_1, x_1 \\ldots, x_n, x_n]}$ |

When we compute the divided differences required in formula (6.8), we list the numbers in a triangular table (see Table 6.2). This is similar to Table 6.1. The difference is that we list all mesh points and the corresponding function values twice, and in the third column the first divided differences corresponding to equal mesh points are the given derivative values. The rest of the numbers in the table are computed in a similar way as in Table 6.1. The framed numbers are used in formula (6.8) as the coefficients.

**Example 6.21.** Consider the following data:

| $x_i$ | -1 | 1 | 2 |
|--------|----|----|----|
| $y_i$ | 2 | 4 | 11 |
| $y_i'$ | 3 | -5 | 30 |

Find the corresponding Hermite interpolating polynomial. We fill out the following table of divided differences:

$$
\\begin{array}{rrrrrrr}
-1 & 2 & & & & & \\\\
-1 & 2 & \\boxed{3} & & & & \\\\
1 & 4 & 1 & -1 & & & \\\\
1 & 4 & \\boxed{-5} & -3 & -1 & & \\\\
2 & 11 & 7 & 12 & 5 & 2 & \\\\
2 & 11 & \\boxed{30} & 23 & 11 & 2 & 0
\\end{array}
$$

In the third column the framed numbers are the input derivative values. Therefore, the Hermite polynomial is

$$H_5(x) = 2 + 3(x + 1) - (x + 1)^2 - (x + 1)^2(x - 1) + 2(x + 1)^2(x - 1)^2 = 2x^4 - x^3 - 6x^2 + 2x + 7,$$

so $H_5$ is a polynomial of degree 4. $\\square$

### Exercises

1. Compute the Hermite interpolating polynomials corresponding to the following data:

   (a)

   | $x_i$ | -2 | -1 | 0 | 1 |
   |--------|----|----|----|----|
   | $y_i$ | 4 | 1 | 14 | -35 |
   | $y_i'$ | -1 | -2 | 43 | -394 |

   (b)

   | $x_i$ | -1 | 0 | 2 | 3 |
   |--------|----|----|----|----|
   | $y_i$ | 1 | 2 | 64 | -19 |
   | $y_i'$ | 3 | -1 | 111 | -301 |

<details class="reveal-solution"><summary>Show solution</summary>

Build a divided-difference table with each mesh point repeated (so $z_{2i} = z_{2i+1} = x_i$), using $f[x_i,x_i] = y_i'$ for the repeated-point entries and ordinary divided differences elsewhere. The Hermite polynomial is then the Newton form
$$H_{2n+1}(x) = f[z_0] + f[z_0,z_1](x - z_0) + f[z_0,z_1,z_2](x - z_0)(x - z_1) + \\cdots.$$

**(a)** With $z = (-2,-2,-1,-1,0,0,1,1)$, $y = (4,1,14,-35)$, $y' = (-1,-2,43,-394)$, fill the table (leading entries $f[z_0]=4$, $f[z_0,z_1]=-1$, $f[z_0,z_1,z_2]=3$, $f[z_0,\\ldots,z_3]=-10$, $\\ldots$) and assemble $H_7(x)$.

**(b)** With $z = (-1,-1,0,0,2,2,3,3)$, $y = (1,2,64,-19)$, $y' = (3,-1,111,-301)$, the same construction gives $H_7(x)$.

</details>

2. Prove that if $P$ is a polynomial of degree at most $(2n + 2)$, $x_i$ $(i = 0, 1, \\ldots, n)$ are pairwise different mesh points, and $H_{2n+1}$ is the Hermite polynomial corresponding to $P$ and the mesh points, then $P(x) = H_{2n+1}(x)$ for all $x$.

<details class="reveal-solution"><summary>Show solution</summary>

Let $Q(x) = P(x) - H_{2n+1}(x)$. Since $H_{2n+1}$ matches $P$ in value and derivative at each $x_i$, we have $Q(x_i) = 0$ and $Q'(x_i) = 0$ for $i = 0, \\ldots, n$, so each $x_i$ is a double root of $Q$. Thus $Q$ has at least $2n+2$ roots counted with multiplicity, while $\\deg Q \\le 2n+2$. A nonzero polynomial of degree $\\le 2n+2$ cannot have $2n+2$ roots and still differ from these forced conditions; the only consistent possibility is $Q \\equiv 0$. Hence $P(x) = H_{2n+1}(x)$. $\\square$

</details>

3. Let $f \\in C^1$. Prove that
   $$\\lim_{(x_0', x_1', \\ldots, x_n') \\to (x_0, x_1, \\ldots, x_n)} f[x_0, x_0', x_1, x_1', \\ldots, x_n, x_n'] = f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n]$$
   and
   $$\\lim_{(x_0', \\ldots, x_{n-1}') \\to (x_0, \\ldots, x_{n-1})} f[x_0, x_0', x_1, x_1', \\ldots, x_{n-1}, x_{n-1}', x_n] = f[x_0, x_0, x_1, x_1, \\ldots, x_{n-1}, x_{n-1}, x_n].$$

<details class="reveal-solution"><summary>Show solution</summary>

By Corollary 6.12 divided differences depend continuously on the mesh points when $f$ is continuous. As each $x_i' \\to x_i$, the divided difference with distinct points therefore approaches the divided difference with the corresponding repeated points, which is exactly the limit on the right-hand side (using the definition of divided differences with repeated points, $f[\\underbrace{x_0,x_0}_{2},\\ldots] = f^{(\\cdot)}(\\xi)/(\\cdot)!$). The limit holds by continuity. $\\square$

</details>

4. Let $i_0, i_1, \\ldots, i_n$ be a rearrangement of the finite sequence $0, 1, \\ldots, n$. Show that
   $$f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n] = f[x_{i_0}, x_{i_0}, x_{i_1}, x_{i_1}, \\ldots, x_{i_n}, x_{i_n}].$$

<details class="reveal-solution"><summary>Show solution</summary>

By Corollary 6.11 divided differences are independent of the order of the mesh points. This invariance extends to repeated points by the continuity argument of the previous exercise. Hence the divided difference is invariant under any permutation of the mesh points. $\\square$

</details>

5. The Hermite interpolation problem can be formulated in a general form: at the $i$th mesh point the first $k_i$ derivatives of a function is given, which we are to interpolate. We can generalize the method of this section. As an illustration we consider the following problem: given two mesh points $x_0$ and $x_1$, and a function $f \\in C^3$. We are looking for a polynomial of minimal degree for which

   $$H(x_0) = f(x_0), \\quad H'(x_0) = f'(x_0), \\quad H''(x_0) = f''(x_0), \\quad \\text{and} \\quad H(x_1) = f(x_1).$$

   (Here $k_0 = 2$ and $k_1 = 0$.) Show that the solution of this problem is the polynomial of degree at most 3

   $$H(x) := f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_0](x - x_0)^2 + f[x_0, x_0, x_0, x_1](x - x_0)^3.$$

<details class="reveal-solution"><summary>Show solution</summary>

There are 4 conditions, so we seek a polynomial of degree $\\le 3$. Use the Newton form with repeated nodes $z_0 = z_1 = z_2 = x_0$, $z_3 = x_1$:
$$H(x) = f[z_0] + f[z_0,z_1](x-z_0) + f[z_0,z_1,z_2](x-z_0)(x-z_1) + f[z_0,z_1,z_2,z_3](x-z_0)(x-z_1)(x-z_2),$$
which becomes the stated formula. One checks: $H(x_0) = f[x_0] = f(x_0)$; $H'(x_0) = f[x_0,x_0] = f'(x_0)$; $H''(x_0) = 2f[x_0,x_0,x_0] = f''(x_0)$; and $H(x_1) = f(x_1)$ by construction of the divided differences. $\\square$

</details>
`,ze=`## 6.4. Hermite-interpoláció

Ebben a szakaszban az interpoláció alapfeladatát módosítjuk. Legyen adott egy $f$ differenciálható függvény, és osztópontoknak egy $x_i$ $(i = 0, \\ldots, n)$ véges sorozata. Az ún. *Hermite-féle interpolációs feladatban* azon kívül, hogy az $y_i = f(x_i)$ függvényértékeket interpoláljuk, az $y_i' \\equiv f'(x_i)$ derivált értékeket is szeretnénk interpolálni. Keresünk tehát egy olyan $g(x) = c_0 + c_1 x + \\cdots + c_m x^m$ polinomot, amelyre

$$g(x_i) = y_i, \\qquad g'(x_i) = y_i', \\qquad i = 0, 1, \\ldots, n$$

teljesül. A feladat geometriai jelentése az, hogy olyan polinomot keresünk, amelynek grafikonja a megadott irányokban megy át az adott $(x_i, y_i)$ pontokon, azaz az érintőjének iránytangense megegyezik az $y_i'$ értékekkel. A $g$ függvény képletében $m + 1$ db paraméter szerepel, az előző feltételek $2(n + 1)$ egyenletet határoznak meg, így azt várjuk, hogy $m = 2n + 1$-edfokú polinomok között találunk egyértelmű megoldását az Hermite-féle interpolációs problémának. A következő tételben szükségünk lesz olyan magasabbrendű speciális osztott differenciákra, ahol az egymás után következő két alappont megegyezhet: $f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n]$, ahol $x_0, x_1, \\ldots, x_n$ páronként különböznek. Ezeket az osztott differenciákat a szokásos rekurzív definícióval értelmezhetjük eggyel alacsonyabb fokú osztott differenciák segítségével:

$$f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n] = \\frac{f[x_0, x_1, x_1, \\ldots, x_n, x_n] - f[x_0, x_0, x_1, x_1, \\ldots, x_n]}{x_n - x_0}.$$

Az alacsonyabb fokú osztott differenciákat is ehhez hasonlóan definiáljuk, és ezt folytathatjuk egészen addig, amíg különböző vagy egyenlő alappontokra felírt elsőrendű osztott differenciákig nem jutunk vissza, amelyeket már definiáltuk a 6.2 szakaszban.

**6.18. tétel.** *Az Hermite-féle interpolációs feladatnak létezik egyértelmű megoldása a legfeljebb $(2n + 1)$-edfokú polinomok körében, amelyet a*

$$\\begin{aligned}
H_{2n+1}(x) = &\\ f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_1](x - x_0)^2 \\\\
&+ f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1) + f[x_0, x_0, x_1, x_1, x_2](x - x_0)^2(x - x_1)^2 \\\\
&+ f[x_0, x_0, x_1, x_1, x_2, x_2](x - x_0)^2(x - x_1)^2(x - x_2) + \\cdots \\tag{6.7} \\\\
&+ f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n](x - x_0)^2(x - x_1)^2 \\cdots (x - x_{n-1})^2(x - x_n)
\\end{aligned}$$

*alakban adhatunk meg. Továbbá a közelítés képlethibája*

$$f(x) - H_{2n+1}(x) = f[x_0, x_0, \\ldots, x_n, x_n, x](x - x_0)^2 \\cdots (x - x_n)^2. \\tag{6.8}$$

**Bizonyítás.** Először vizsgáljuk az Hermite-polinom egyértelműségét. Tegyük fel, hogy $H_{2n+1}$ és $\\tilde{H}_{2n+1}$ legfeljebb $(2n + 1)$-edfokú polinomok, amelyek teljesítik az Hermite-féle interpolációs feltételeket. Ekkor $P \\equiv H_{2n+1} - \\tilde{H}_{2n+1}$ is egy legfeljebb $(2n+1)$-edfokú polinom, amelyre $P(x_i) = H_{2n+1}(x_i) - \\tilde{H}_{2n+1}(x_i) = f(x_i) - f(x_i) = 0$, és $P'(x_i) = H'_{2n+1}(x_i) - \\tilde{H}'_{2n+1}(x_i) = f'(x_i) - f'(x_i) = 0$, azaz $x_i$ kétszeres gyöke $P$-nek minden $i = 0, 1, \\ldots, n$-re. $P$-nek van tehát $2(n + 1) = 2n + 2$ gyöke, amiből következik az algebra alaptétele szerint, hogy $P$ azonosan 0 polinom, hiszen $P$ legfeljebb $(2n + 1)$-edfokú. Ebből következik, hogy az Hermite-féle interpolációs feladatnak legfeljebb egy $(2n + 1)$-edfokú megoldása lehet.

Most belátjuk, hogy a (6.7) képlettel definiált $H_{2n+1}$ polinom megoldása az Hermite-féle interpolációs feladatnak, és teljesíti a (6.8) hibaformulát. Direkt számolással rögtön kapjuk, hogy $H_{2n+1}(x_0) = f(x_0)$ és $H'_{2n+1}(x_0) = f[x_0, x_0] = f'(x_0)$. Következő lépésként belátjuk, hogy $H_{2n+1}(x_1) = f(x_1)$ és $H'_{2n+1}(x_1) = f'(x_1)$ is teljesül. Ehhez válasszunk olyan $x_i$-hez közeli $\\tilde{x}_i$ számokat, hogy $\\{x_i, \\tilde{x}_i:\\ i = 0, 1, \\ldots, n\\}$ páronként különbözőek legyenek, és legyen $L_{2n+1}$ ezekhez az alappontokhoz tartozó, $f$-et interpoláló Lagrange-féle interpolációs polinom. Ekkor

$$\\begin{aligned}
L_{2n+1}(x) = &\\ f[x_0] + f[x_0, x_0'](x - x_0) + f[x_0, x_0', x_1](x - x_0)(x - x_0') \\\\
&+ f[x_0, x_0', x_1, x_1'](x - x_0)(x - x_0')(x - x_1) + \\cdots \\\\
&+ f[x_0, x_0', x_1, x_1', \\ldots, x_n, x_n'](x - x_0)(x - x_0') \\cdots (x - x_{n-1}) \\\\
&\\quad \\cdot (x - x_{n-1}')(x - x_n),
\\end{aligned}$$

és

$$f(x) = L_{2n+1}(x) + f[x_0, x_0', \\ldots, x_n, x_n', x](x - x_0)(x - x_0') \\cdots (x - x_n)(x - x_n').$$

$L_{2n+1}$ és $H_{2n+1}$ definíciójából és az osztott differencia folytonosságából (lásd a 3. feladatot) kapjuk, hogy minden $x$-re

$$L_{2n+1}(x) \\to H_{2n+1}(x) \\quad \\text{ha } (x_0', x_1', \\ldots, x_n') \\to (x_0, x_1, \\ldots, x_n), \\tag{6.9}$$

és így

$$f(x) = H_{2n+1}(x) + f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n, x](x - x_0)^2(x - x_1)^2 \\cdots (x - x_n)^2.$$

Ez igazolja a (6.8) összefüggést. A Lagrange-féle interpolációs polinom egyértelműségéből következik, hogy ha $x_0$, $x_0'$ és $x_1$, $x_1'$ sorrendjét felcseréljük, az interpolációs polinom nem fog változni, azaz

$$\\begin{aligned}
L_{2n+1}(x) = &\\ f[x_1] + f[x_1, x_1'](x - x_1) + f[x_1, x_1', x_0](x - x_1)(x - x_1') \\\\
&+ f[x_1, x_1', x_0, x_0'](x - x_1)(x - x_1')(x - x_0) + \\cdots \\\\
&+ f[x_1, x_1', x_0, x_0', x_2, x_2' \\ldots, x_n, x_n'](x - x_1)(x - x_1')(x - x_0)(x - x_0') \\\\
&\\quad \\cdot (x - x_2)(x - x_2') \\cdots (x - x_{n-1})(x - x_{n-1}')(x - x_n).
\\end{aligned}$$

Ebből viszont kapjuk, mindkét oldal határértékét véve, ha $(x_0', x_1', \\ldots, x_n') \\to (x_0, x_1, \\ldots, x_n)$, és használva a (6.9) összefüggést és a határérték egyértelműségét, hogy

$$\\begin{aligned}
H_{2n+1}(x) = &\\ f[x_1] + f[x_1, x_1](x - x_1) + f[x_1, x_1, x_0](x - x_1)^2 \\\\
&+ f[x_1, x_1, x_0, x_0](x - x_1)^2(x - x_0) + f[x_1, x_1, x_0, x_0, x_2](x - x_1)^2(x - x_0)^2 \\\\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2](x - x_1)^2(x - x_0)^2(x - x_2) + \\cdots \\\\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2, \\ldots, x_n, x_n](x - x_1)^2(x - x_0)^2(x - x_2)^2 \\\\
&\\quad \\cdots (x - x_{n-1})^2(x - x_n)
\\end{aligned}$$

alakban is felírható. Ebből viszont nyilvánvaló, hogy $H_{2n+1}(x_1) = f(x_1)$ és $H'_{2n+1}(x_1) = f'(x_1)$. Ehhez hasonlóan látható be, hogy $H_{2n+1}(x_i) = f(x_i)$ és $H'_{2n+1}(x_i) = f'(x_i)$ teljesül $i = 2, 3, \\ldots, n$-re is. $\\square$

**6.19. tétel.** *Legyen $f \\in C^{2n+2}$. Ekkor létezik olyan $\\xi \\in \\langle x_0, x_1, \\ldots, x_n, x \\rangle$, hogy*

$$f(x) - H_{2n+1}(x) = \\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}(x - x_0)^2 \\ldots (x - x_n)^2.$$

**Bizonyítás.** A bizonyítás hasonló a 6.5 tétel bizonyításához. Legyen $x$ egy osztópontoktól különböző rögzített szám, és definiáljuk a

$$g(z) = f(z) - H_{2n+1}(z) - \\frac{(z - x_0)^2 \\cdots (z - x_n)^2}{(x - x_0)^2 \\cdots (x - x_n)^2}(f(x) - H_{2n+1}(x))$$

függvényt. Nyilván $g \\in C^{2n+2}$, és $x_0, \\ldots, x_n$ kétszeres gyökei, $x$ pedig egyszeres gyöke $g$-nek. Ezért az általánosított Rolle-tétel (6.4 tétel) szerint létezik olyan $\\xi \\in \\langle x_0, x_1, \\ldots, x_n, x \\rangle$, hogy $g^{(2n+2)}(\\xi) = 0$. Ebből pedig következik a tétel állítása. $\\square$

A (6.8) összefüggést és a 6.19 tételt összehasonlítva rögtön kapjuk:

**6.20. következmény.** *Tegyük fel, hogy $f \\in C^{2n+2}$ és $x, x_0, \\ldots, x_n$ páronként különböző számok. Ekkor létezik olyan $\\xi \\in \\langle x_0, x_1, \\ldots, x_n, x \\rangle$, hogy*

$$f[x_0, x_0, \\ldots, x_n, x_n, x] = \\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}.$$

Kézi számoláskor a (6.8) képlethez szükséges osztott differenciákat a 6.2 táblázat segítségével számolhatjuk ki. Megjegyezzük, hogy ez a táblázat nagyon hasonlít a 6.1 táblázathoz. A különbség az, hogy minden alappont és a hozzá tartozó függvényérték kétszer szerepel benne, és a harmadik oszlopban az azonos alappontokra felírt elsőrendű osztott differenciák is előre adottak, a megadott derivált értékkel egyeznek meg. A táblázat többi elemét ugyanúgy számítjuk, mint a 6.1 táblázatban. A bekeretezett számok fogják adni a (6.8) képletben szereplő együtthatókat.

*6.2. táblázat. Osztott differenciák elrendezése kézi számoláskor*

| $x_0$ | $\\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_0$ | $f(x_0)$ | $\\boxed{f[x_0, x_0]}$ | | |
| $x_1$ | $f(x_1)$ | $f[x_0, x_1]$ | $\\boxed{f[x_0, x_0, x_1]}$ | |
| $x_1$ | $f(x_1)$ | $f[x_1, x_1]$ | $f[x_0, x_1, x_1]$ | $\\ddots$ |
| $\\vdots$ | $\\vdots$ | $\\vdots$ | $\\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-1}, x_{n-1}, x_n]$ | $\\cdots$ |
| $x_n$ | $f(x_n)$ | $f[x_n, x_n]$ | $f[x_{n-1}, x_n, x_n]$ | $\\cdots$ $\\boxed{f[x_0, x_0, x_1, x_1 \\ldots, x_n, x_n]}$ |

**6.21. példa.** Tekintsük a következő adatokat:

| $x_i$ | -1 | 1 | 2 |
|--------|----|----|----|
| $y_i$ | 2 | 4 | 11 |
| $y_i'$ | 3 | -5 | 30 |

Keressük meg az adatokat interpoláló Hermite-féle interpolációs polinomot! Készítsük el a következő táblázatot:

$$
\\begin{array}{rrrrrrr}
-1 & 2 & & & & & \\\\
-1 & 2 & \\boxed{3} & & & & \\\\
1 & 4 & 1 & -1 & & & \\\\
1 & 4 & \\boxed{-5} & -3 & -1 & & \\\\
2 & 11 & 7 & 12 & 5 & 2 & \\\\
2 & 11 & \\boxed{30} & 23 & 11 & 2 & 0
\\end{array}
$$

(A harmadik oszlopban bekereteztük az inputként megadott derivált értékeket.) Az Hermite-polinom tehát

$$H_5(x) = 2 + 3(x + 1) - (x + 1)^2 - (x + 1)^2(x - 1) + 2(x + 1)^2(x - 1)^2 = 2x^4 - x^3 - 6x^2 + 2x + 7,$$

azaz $H_5$ jelen esetben egy negyedfokú polinom. $\\square$

### Feladatok

1. Számítsa ki és ábrázolja az alábbi adatokhoz tartozó Hermite-féle interpolációs polinomokat:

   (a)

   | $x_i$ | -2 | -1 | 0 | 1 |
   |--------|----|----|----|----|
   | $y_i$ | 4 | 1 | 14 | -35 |
   | $y_i'$ | -1 | -2 | 43 | -394 |

   (b)

   | $x_i$ | -1 | 0 | 2 | 3 |
   |--------|----|----|----|----|
   | $y_i$ | 1 | 2 | 64 | -19 |
   | $y_i'$ | 3 | -1 | 111 | -301 |

<details class="reveal-solution"><summary>Megoldás</summary>

Build a divided-difference table with each mesh point repeated (so $z_{2i} = z_{2i+1} = x_i$), using $f[x_i,x_i] = y_i'$ for the repeated-point entries and ordinary divided differences elsewhere. The Hermite polynomial is then the Newton form
$$H_{2n+1}(x) = f[z_0] + f[z_0,z_1](x - z_0) + f[z_0,z_1,z_2](x - z_0)(x - z_1) + \\cdots.$$

**(a)** With $z = (-2,-2,-1,-1,0,0,1,1)$, $y = (4,1,14,-35)$, $y' = (-1,-2,43,-394)$, fill the table (leading entries $f[z_0]=4$, $f[z_0,z_1]=-1$, $f[z_0,z_1,z_2]=3$, $f[z_0,\\ldots,z_3]=-10$, $\\ldots$) and assemble $H_7(x)$.

**(b)** With $z = (-1,-1,0,0,2,2,3,3)$, $y = (1,2,64,-19)$, $y' = (3,-1,111,-301)$, the same construction gives $H_7(x)$.

</details>

2. Bizonyítsa be, hogy ha $P$ egy legfeljebb $(2n + 2)$-edfokú polinom, $x_i$ $(i = 0, 1, \\ldots, n)$ páronként különböző alappontok, és $H_{2n+1}$ a $P$-hez és az alappontokhoz tartozó Hermite-polinom, akkor $P(x) = H_{2n+1}(x)$ minden $x$-re!

<details class="reveal-solution"><summary>Megoldás</summary>

Let $Q(x) = P(x) - H_{2n+1}(x)$. Since $H_{2n+1}$ matches $P$ in value and derivative at each $x_i$, we have $Q(x_i) = 0$ and $Q'(x_i) = 0$ for $i = 0, \\ldots, n$, so each $x_i$ is a double root of $Q$. Thus $Q$ has at least $2n+2$ roots counted with multiplicity, while $\\deg Q \\le 2n+2$. The only consistent possibility is $Q \\equiv 0$. Hence $P(x) = H_{2n+1}(x)$. $\\square$

</details>

3. Legyen $f \\in C^1$. Bizonyítsa be, hogy
   $$\\lim_{(x_0', x_1', \\ldots, x_n') \\to (x_0, x_1, \\ldots, x_n)} f[x_0, x_0', x_1, x_1', \\ldots, x_n, x_n'] = f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n]$$
   és
   $$\\lim_{(x_0', \\ldots, x_{n-1}') \\to (x_0, \\ldots, x_{n-1})} f[x_0, x_0', x_1, x_1', \\ldots, x_{n-1}, x_{n-1}', x_n] = f[x_0, x_0, x_1, x_1, \\ldots, x_{n-1}, x_{n-1}, x_n]!$$

<details class="reveal-solution"><summary>Megoldás</summary>

By Corollary 6.12 divided differences depend continuously on the mesh points when $f$ is continuous. As each $x_i' \\to x_i$, the divided difference with distinct points therefore approaches the divided difference with the corresponding repeated points, which is exactly the limit on the right-hand side. The limit holds by continuity. $\\square$

</details>

4. Legyen $i_0, i_1, \\ldots, i_n$ a $0, 1, \\ldots, n$ véges számsorozatnak egy átrendezése. Lássa be, hogy ekkor
   $$f[x_0, x_0, x_1, x_1, \\ldots, x_n, x_n] = f[x_{i_0}, x_{i_0}, x_{i_1}, x_{i_1}, \\ldots, x_{i_n}, x_{i_n}]!$$

<details class="reveal-solution"><summary>Megoldás</summary>

By Corollary 6.11 divided differences are independent of the order of the mesh points. This invariance extends to repeated points by the continuity argument of the previous exercise. Hence the divided difference is invariant under any permutation of the mesh points. $\\square$

</details>

5. Az Hermite-interpolációs feladatot általánosabban is meg lehet fogalmazni: az $i$-edik osztópontban a függvényérték és az első $k_i$ derivált érték adott, amelyeket interpolálni szeretnénk. Erre a feladatra könnyen általánosítható az ebben a szakaszban tárgyalt módszer. Illusztrálásként tekintsünk most egy konkrét, egyszerű feladatot: adott két osztópont, $x_0$ és $x_1$, és egy $f \\in C^3$ függvény. Keresünk egy olyan minimális fokszámú polinomot, amelyre

   $$H(x_0) = f(x_0), \\quad H'(x_0) = f'(x_0), \\quad H''(x_0) = f''(x_0), \\quad \\text{és} \\quad H(x_1) = f(x_1).$$

   (Itt $k_0 = 2$ és $k_1 = 0$.) Lássa be, hogy a feladat megoldása a

   $$H(x) \\equiv f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_0](x - x_0)^2 + f[x_0, x_0, x_0, x_1](x - x_0)^3$$

   legfeljebb harmadfokú polinom!

<details class="reveal-solution"><summary>Megoldás</summary>

There are 4 conditions, so we seek a polynomial of degree $\\le 3$. Use the Newton form with repeated nodes $z_0 = z_1 = z_2 = x_0$, $z_3 = x_1$:
$$H(x) = f[z_0] + f[z_0,z_1](x-z_0) + f[z_0,z_1,z_2](x-z_0)(x-z_1) + f[z_0,z_1,z_2,z_3](x-z_0)(x-z_1)(x-z_2),$$
which becomes the stated formula. One checks: $H(x_0) = f[x_0] = f(x_0)$; $H'(x_0) = f[x_0,x_0] = f'(x_0)$; $H''(x_0) = 2f[x_0,x_0,x_0] = f''(x_0)$; and $H(x_1) = f(x_1)$ by construction of the divided differences. $\\square$

</details>
`,we=`## 6.5. Spline Interpolation

Let $a = x_0 < x_1 < \\ldots < x_n = b$ be a division of the interval $[a,b]$. The continuous function $S \\colon [a,b] \\to \\mathbb{R}$ is a *spline function of degree $k$* corresponding to the mesh $\\{x_0, \\ldots, x_n\\}$ if $S \\in C^{k-1}[a,b]$, and the restriction of $S$ to each interval $[x_i, x_{i+1}]$ is a polynomial of degree at most $k$. The first, second and third order spline functions are called *linear, quadratic* and *cubic spline functions*, respectively.

The simplest method of the interpolation is when linear splines are used to interpolate the given data. Geometrically this means that we connect the given data points $(x_i, y_i)$ by line segments. The error of the linear spline interpolation is discussed in Exercise 2.

The main disadvantage of the linear spline interpolation is that the interpolating function is not smooth, i.e., it is not differentiable. In case of cubic spline interpolation the interpolating function is twice continuously differentiable, which is smooth enough in practice. For the rest of this section we investigate cubic spline interpolation.

Suppose given pairwise different mesh points $a = x_0 < x_1 < \\ldots < x_n = b$ and corresponding function values $y_0, y_1, \\ldots, y_n$. We are looking for a cubic spline function $S$ which interpolates the given data, i.e., it satisfies

$$S(x_i) = y_i, \\qquad i = 0, 1, \\ldots, n.$$

The restriction of $S$ to the interval $[x_i, x_{i+1}]$ is denoted by $S_i$ $(i = 0, 1, \\ldots, n - 1)$. Since $S$ interpolates the points $(x_i, y_i)$, and it is twice continuously differentiable, therefore, the functions $S_i$ satisfy the following relations:

$$\\begin{aligned}
S_i(x_i) &= y_i, & i &= 0, 1, \\ldots, n - 1, \\quad (6.10) \\\\
S_i(x_{i+1}) &= y_{i+1}, & i &= 0, 1, \\ldots, n - 1, \\quad (6.11) \\\\
S_i'(x_{i+1}) &= S_{i+1}'(x_{i+1}), & i &= 0, 1, \\ldots, n - 2, \\quad (6.12) \\\\
S_i''(x_{i+1}) &= S_{i+1}''(x_{i+1}), & i &= 0, 1, \\ldots, n - 2. \\quad (6.13)
\\end{aligned}$$

Since the polynomials $S_i$ are defined by 4 parameters, so $S$ is determined by $4n$ parameters. The number of conditions in (6.10)–(6.13) is only $4n - 2$, therefore, this problem has no unique solution yet. Hence we expect that two additional conditions can be given, and then we hope to have a unique solution. Frequently used conditions are the following

$$S_0''(x_0) = 0 \\qquad \\text{and} \\qquad S_{n-1}''(x_n) = 0. \\tag{6.14}$$

A cubic spline function defined by conditions (6.10)–(6.14) is called *natural spline* function. Next we show that the above problem has a unique natural spline solution. Consider the functions $S_i$ in the form:

$$S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3,$$

where $a_i, b_i, c_i$ and $d_i$ $(i = 0, 1, \\ldots, n - 1)$ are parameters to be determined. Then

$$\\begin{aligned}
S_i'(x) &= b_i + 2c_i(x - x_i) + 3d_i(x - x_i)^2, \\\\
S_i''(x) &= 2c_i + 6d_i(x - x_i).
\\end{aligned}$$

These equations imply

$$a_i = S_i(x_i) = y_i, \\quad b_i = S_i'(x_i) \\quad \\text{and} \\quad c_i = S_i''(x_i)/2, \\quad i = 0, 1, \\ldots, n - 1. \\tag{6.15}$$

With the help of relation (6.15) we define the constants $a_n$, $b_n$ and $c_n$ (which will be used later):

$$a_n := y_n, \\qquad b_n := S'(x_n) \\qquad \\text{and} \\qquad c_n := S''(x_n)/2. \\tag{6.16}$$

(The derivatives in (6.16) denote left sided derivatives.) Substituting $x = x_{i+1}$ into the formula of $S_i$, and using equation (6.11) and relation $a_i = y_i$, we get

$$y_i + b_i(x_{i+1} - x_i) + c_i(x_{i+1} - x_i)^2 + d_i(x_{i+1} - x_i)^3 = y_{i+1}.$$

Introduce the notations $\\Delta x_i := x_{i+1} - x_i$ and $\\Delta y_i := y_{i+1} - y_i$. Then

$$b_i \\Delta x_i + c_i(\\Delta x_i)^2 + d_i(\\Delta x_i)^3 = \\Delta y_i, \\qquad i = 0, 1, \\ldots, n - 1. \\tag{6.17}$$

Condition (6.12) and relation $b_{i+1} = S_{i+1}'(x_{i+1})$ yield

$$b_i + 2c_i \\Delta x_i + 3d_i(\\Delta x_i)^2 = b_{i+1} \\tag{6.18}$$

for $i = 0, 1, \\ldots, n - 2$. Using the definition of $b_n$ we get that (6.18) holds for $i = n - 1$ too. Similarly, from equation (6.13) and the definition of $c_n$ it follows

$$2c_i + 6d_i \\Delta x_i = 2c_{i+1}, \\qquad i = 0, 1, \\ldots, n - 1,$$

hence

$$d_i = \\frac{c_{i+1} - c_i}{3\\Delta x_i}, \\qquad i = 0, 1, \\ldots, n - 1. \\tag{6.19}$$

Substituting it back to equations (6.17) and (6.18) we get

$$\\begin{aligned}
b_i \\Delta x_i + c_i(\\Delta x_i)^2 + \\frac{c_{i+1} - c_i}{3}(\\Delta x_i)^2 &= \\Delta y_i, & i &= 0, 1, \\ldots, n - 1, \\quad (6.20) \\\\
b_i + 2c_i \\Delta x_i + (c_{i+1} - c_i)\\Delta x_i &= b_{i+1}, & i &= 0, 1, \\ldots, n - 1. \\quad (6.21)
\\end{aligned}$$

From the first equation we express

$$b_i = \\frac{\\Delta y_i}{\\Delta x_i} - \\frac{2c_i + c_{i+1}}{3}\\Delta x_i,$$

and substituting it into the second equation for $i = 0, 1, \\ldots, n - 2$ we get

$$c_i \\Delta x_i + 2c_{i+1}(\\Delta x_i + \\Delta x_{i+1}) + c_{i+2}\\Delta x_{i+1} = 3\\frac{\\Delta y_{i+1}}{\\Delta x_{i+1}} - 3\\frac{\\Delta y_i}{\\Delta x_i}, \\quad i = 0, 1, \\ldots, n - 2. \\tag{6.22}$$

Note that in the derivation of equation (6.22) we have not used condition (6.14), so it holds for any cubic spline interpolation.

Equation (6.22) determines a system of $n - 1$ linear equations for $c_i$. We add equations $c_0 = 0$ and $c_n = 0$ following from condition (6.14) into it, so we get a $n + 1$-dimensional linear system of the form $\\mathbf{Ax} = \\mathbf{b}$, where $\\mathbf{x} = (c_0, c_1, \\ldots, c_n)^T$,

$$\\mathbf{A} = \\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & \\cdots & 0 \\\\
\\Delta x_0 & 2(\\Delta x_0 + \\Delta x_1) & \\Delta x_1 & 0 & 0 & \\cdots & 0 \\\\
0 & \\Delta x_1 & 2(\\Delta x_1 + \\Delta x_2) & \\Delta x_2 & 0 & \\cdots & 0 \\\\
& & \\ddots & \\ddots & \\ddots & & \\\\
0 & \\cdots & & & \\Delta x_{n-2} & 2(\\Delta x_{n-2} + \\Delta x_{n-1}) & \\Delta x_{n-1} \\\\
0 & \\cdots & & & 0 & 0 & 1
\\end{pmatrix}$$

is a tridiagonal matrix and

$$\\mathbf{b} = \\begin{pmatrix}
0 \\\\
3\\frac{\\Delta y_1}{\\Delta x_1} - 3\\frac{\\Delta y_0}{\\Delta x_0} \\\\
\\vdots \\\\
3\\frac{\\Delta y_{n-1}}{\\Delta x_{n-1}} - 3\\frac{\\Delta y_{n-2}}{\\Delta x_{n-2}} \\\\
0
\\end{pmatrix}.$$

Since $\\mathbf{A}$ is diagonally dominant, the system $\\mathbf{Ax} = \\mathbf{b}$ has a unique solution. Then with the help of $c_i$, we can compute the coefficients $d_i$ and $b_i$. Therefore, the problem has a unique solution. We note that, in practice, the tridiagonal system $\\mathbf{Ax} = \\mathbf{b}$ can be solved efficiently by the special Gaussian elimination defined in Algorithm 3.37. We have proved the following result.

**Theorem 6.22.** *The problem of natural cubic spline interpolation has a unique solution.*

**Example 6.23.** Find the natural cubic spline interpolation of the following given data:

| $x_i$ | 0.0 | 1.0 | 1.5 | 2.0 | 3.0 | 4.0 |
|-------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.5 | 0.1 | 2.5 | -1.0 | -0.5 | 0.0 |

Using the notations introduced before the linear system of the coefficients $c_i$ is

$$\\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\\\
1 & 3 & 0.5 & 0 & 0 & 0 \\\\
0 & 0.5 & 2 & 0.5 & 0 & 0 \\\\
0 & 0 & 0.5 & 3 & 1 & 0 \\\\
0 & 0 & 0 & 1 & 4 & 1 \\\\
0 & 0 & 0 & 0 & 0 & 1
\\end{pmatrix}
\\begin{pmatrix}
c_0 \\\\ c_1 \\\\ c_2 \\\\ c_3 \\\\ c_4 \\\\ c_5
\\end{pmatrix}
=
\\begin{pmatrix}
0 \\\\ 15.6 \\\\ -35.4 \\\\ 22.5 \\\\ 0 \\\\ 0
\\end{pmatrix}.$$

Solving it and substituting back $c_i$ into (6.19) and (6.20) we get the coefficients $d_i$ and $b_i$. The resulting natural spline function is:

$$\\begin{aligned}
S_0(x) &= 0.5 - 3.4141079x + 3.0141079x^3, \\\\
S_1(x) &= 0.1 + 5.6282158(x - 1) + 9.0423265(x - 1)^2 - 21.3975104(x - 1)^3, \\\\
S_2(x) &= 2.5 - 1.3775934(x - 1.5) - 23.0539419(x - 1.5)^2 + 23.6182573(x - 1.5)^3, \\\\
S_3(x) &= -1.0 - 6.7178423(x - 2) + 12.3734440(x - 2)^2 - 5.1556017(x - 2)^3, \\\\
S_4(x) &= -0.5 + 2.5622407(x - 3) - 3.0933610(x - 3)^2 + 1.0311203(x - 3)^3.
\\end{aligned}$$

The graph of this function can be seen in Figure 6.3. $\\square$

Instead of condition (6.14) we can specify other boundary conditions for $S$. Now we investigate condition

$$S'(x_0) = y_0' \\qquad \\text{and} \\qquad S'(x_n) = y_n', \\tag{6.23}$$

where $y_0'$ and $y_n'$ are given numbers. This means that we know (specify) the slope of the tangent line of $S$ at the end points of the interval. A cubic spline which satisfy conditions (6.23) is called *clamped spline* function. In this case equations (6.22) hold. We need to add two equations in order to get a well-posed linear system. Using relations $b_0 = S'(x_0) = y_0'$, equation (6.20) implies

$$y_0' \\Delta x_0 + c_0(\\Delta x_0)^2 + \\frac{c_1 - c_0}{3}(\\Delta x_0)^2 = \\Delta y_0,$$

hence

$$2c_0 \\Delta x_0 + c_1 \\Delta x_0 = 3\\frac{\\Delta y_0}{\\Delta x_0} - 3y_0'. \\tag{6.24}$$

Expressing $b_{n-1}$ from equation (6.20) and substituting it into (6.21), and using relation $b_n = y_n'$ we get

$$\\frac{\\Delta y_{n-1}}{\\Delta x_{n-1}} - \\frac{2c_{n-1} + c_n}{3}\\Delta x_{n-1} + \\Delta x_{n-1}(c_{n-1} + c_n) = y_n',$$

hence

$$c_{n-1}\\Delta x_{n-1} + 2c_n \\Delta x_{n-1} = 3y_n' - 3\\frac{\\Delta y_{n-1}}{\\Delta x_{n-1}}. \\tag{6.25}$$

If in the system $\\mathbf{Ax} = \\mathbf{b}$ of the natural spline interpolation we replace the first equation with equation (6.24) and the last equation with (6.25), then it is easy to see that the coefficient matrix remains to be diagonally dominant, therefore, the modified system has a unique solution. So the cubic spline interpolation problem together with conditions (6.23) has a unique clamped spline function solution.

The natural cubic spline interpolating functions have the following minimal property, which means that the spline interpolating functions are the smoothest among all possible interpolating functions.

**Theorem 6.24.** *Let $a = x_0 < x_1 < \\ldots < x_n = b$ be mesh points and $y_0, y_1, \\ldots, y_n$ be function values, and let $S$ be the natural cubic spline interpolating function associated to the given data. Then*

$$\\int_a^b (S''(x))^2 \\, dx \\leq \\int_a^b (f''(x))^2 \\, dx \\tag{6.26}$$

*for every $f \\in C^2[a,b]$, which also interpolates the given data, i.e., $f(x_i) = y_i$ for $i = 0, 1, \\ldots, n$.*

**Proof.** Introduce the function $g(x) := f(x) - S(x)$. Then $f''(x) = S''(x) + g''(x)$, and so

$$\\int_a^b (f''(x))^2 \\, dx = \\int_a^b (S''(x))^2 \\, dx + 2\\int_a^b S''(x)g''(x) \\, dx + \\int_a^b (g''(x))^2 \\, dx.$$

Since $\\int_a^b (g''(x))^2 \\, dx \\geq 0$, the statement of the theorem follows if we show

$$\\int_a^b S''(x)g''(x) \\, dx = 0.$$

Dividing the integral into the sum of integral over the intervals of consecutive mesh points, and using integration by parts we get

$$\\begin{aligned}
\\int_a^b S''(x)g''(x) \\, dx &= \\sum_{i=1}^{n} \\int_{x_{i-1}}^{x_i} S''(x)g''(x) \\, dx \\\\
&= \\sum_{i=1}^{n} [S''(x)g'(x)]_{x_{i-1}}^{x_i} - \\sum_{i=1}^{n} \\int_{x_{i-1}}^{x_i} S'''(x)g'(x) \\, dx \\\\
&= S''(b)g'(b) - S''(a)g'(a) - \\sum_{i=1}^{n} \\int_{x_{i-1}}^{x_i} S'''(x)g'(x) \\, dx.
\\end{aligned}$$

Since $S$ is a natural spline function, we have $S''(a) = S''(b) = 0$. Since $S$ is a third order polynomial over the intervals $[x_{i-1}, x_i]$, its third derivative is constant, which can be factored out in front of the integral. But $\\int_{x_{i-1}}^{x_i} g'(x) \\, dx = g(x_i) - g(x_{i-1}) = 0$, since $g(x_i) = 0$ for $i = 0, 1, \\ldots, n$. This completes the proof. $\\square$

The next theorem investigates the error of the clamped cubic spline interpolation. We present the result without proof.

**Theorem 6.25.** *Let $f \\in C^4[a,b]$, $a = x_0 < x_1 < \\ldots < x_n = b$ mesh points, $y_i = f(x_i)$, $i = 0, 1, \\ldots, n$ function values, and $y_0' = f'(a)$ and $y_n' = f'(b)$ derivative values, and let $S$ be the corresponding clamped cubic spline function. Then for $x \\in [a,b]$ it follows*

$$\\begin{aligned}
|f(x) - S(x)| &\\leq \\frac{5}{384}M_4 h^4, \\\\
|f'(x) - S'(x)| &\\leq \\left( \\frac{\\sqrt{3}}{216} + \\frac{1}{24} \\right) M_4 h^3, \\\\
|f''(x) - S''(x)| &\\leq \\left( \\frac{1}{12} + \\frac{h}{3k} \\right) M_4 h^2,
\\end{aligned}$$

*where $M_4 := \\max\\{|f^{(4)}(x)|:\\ x \\in [a,b]\\}$, $h := \\max\\{x_{i+1} - x_i:\\ i = 0, 1, \\ldots, n - 1\\}$, $k := \\min\\{x_{i+1} - x_i:\\ i = 0, 1, \\ldots, n - 1\\}$.*

We note that the error of the natural cubic spline interpolating function can be given similarly.

### Exercises

1. Find the formula of the linear spline function interpolating the data $(x_i, y_i)$, $i = 0, 1, \\ldots, n$ on the interval $[x_i, x_{i+1}]$.

<details class="reveal-solution"><summary>Show solution</summary>

On $[x_i, x_{i+1}]$ the linear spline is the linear Lagrange interpolant:
$$S_i(x) = y_i + \\frac{y_{i+1} - y_i}{x_{i+1} - x_i}(x - x_i),$$
equivalently
$$S_i(x) = \\frac{x_{i+1} - x}{x_{i+1} - x_i}\\,y_i + \\frac{x - x_i}{x_{i+1} - x_i}\\,y_{i+1}. \\qquad \\square$$

</details>

2. Given a continuous function $f \\colon [a,b] \\to \\mathbb{R}$, and let $S_h$ be a linear spline interpolating function of the function $f$ corresponding to equidistant mesh of the interval $[a,b]$ with step size $h$.

   (a) Show that $\\max\\{|f(x) - S_h(x)|:\\ x \\in [a,b]\\} \\to 0$, as $h \\to 0$.

   (b) Let $f \\in C^1[a,b]$. Show that
   $$|f(x) - S_h(x)| \\leq M_1 h, \\qquad x \\in [a,b],$$
   where $M_1 := \\max\\{|f'(x)|:\\ x \\in [a,b]\\}$.

<details class="reveal-solution"><summary>Show solution</summary>

**(a)** $f$ is continuous on $[a,b]$, hence uniformly continuous: for any $\\varepsilon > 0$ there is $\\delta > 0$ with $|x - y| < \\delta \\Rightarrow |f(x) - f(y)| < \\varepsilon$. Choose $h < \\delta$. On each $[x_i, x_{i+1}]$, $S_h$ is linear interpolation, so for $x$ in that interval
$$|f(x) - S_h(x)| \\le \\max\\big(|f(x) - f(x_i)|,\\ |f(x) - f(x_{i+1})|\\big) < \\varepsilon.$$
Hence $\\max|f - S_h| \\to 0$ as $h \\to 0$.

**(b)** For $f \\in C^1$, by the Mean Value Theorem $|f(x) - f(x_i)| \\le M_1|x - x_i| \\le M_1 h$, and similarly for $x_{i+1}$. Since $S_h(x)$ lies between $f(x_i)$ and $f(x_{i+1})$, we get $|f(x) - S_h(x)| \\le M_1 h$, i.e. the error is $O(h)$. $\\square$

</details>

3. Compute and draw the graph of the natural cubic spline function corresponding to the data given in Exercise 1 of Section 6.1.

<details class="reveal-solution"><summary>Show solution</summary>

Set up the tridiagonal system for the second-derivative coefficients $c_i$ with natural boundary conditions $c_0 = c_n = 0$, solve it, then recover $b_i$ and $d_i$ from
$$d_i = \\frac{c_{i+1} - c_i}{3\\Delta x_i}, \\qquad b_i = \\frac{\\Delta y_i}{\\Delta x_i} - \\frac{2c_i + c_{i+1}}{3}\\Delta x_i,$$
which gives the cubic piece $S_i(x) = y_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$ on each subinterval.

</details>

4. Show that for a cubic spline interpolation any of the conditions
   $$S'(x_0) = f'(x_0) \\qquad \\text{or} \\qquad S'(x_n) = f'(x_n)$$
   determines the cubic spline interpolation function uniquely.

<details class="reveal-solution"><summary>Show solution</summary>

With one endpoint-derivative condition, the continuity-of-second-derivative relations together with that single boundary condition form a system of $n+1$ equations for the $n+1$ unknowns $c_0, \\ldots, c_n$. The resulting tridiagonal coefficient matrix is (strictly) diagonally dominant, hence nonsingular, so the system has a unique solution; the remaining coefficients $b_i, d_i$ are then determined. $\\square$

</details>

5. Show that if $S$ is the clamped cubic spline corresponding to given mesh points $a = x_0 < x_1 < \\ldots < x_n = b$, function values $y_0, y_1, \\ldots, y_n$, and derivative values $y_0'$ and $y_n'$, then $S$ satisfies inequality (6.26) for all functions $f \\in C^2[a,b]$ which satisfy $f(x_i) = y_i$ for all $i$, $f'(a) = y_0'$ and $f'(b) = y_n'$.

<details class="reveal-solution"><summary>Show solution</summary>

Follow the proof of Theorem 6.24 with $g(x) = f(x) - S(x)$, which satisfies $g(x_i) = 0$ for all $i$ and now also $g'(a) = g'(b) = 0$ (both $f$ and $S$ match the endpoint derivatives). Integration by parts gives
$$\\int_a^b S''(x)g''(x)\\,dx = \\big[S''(x)g'(x)\\big]_a^b - \\int_a^b S'''(x)g'(x)\\,dx.$$
The boundary term vanishes because $g'(a) = g'(b) = 0$, and the remaining integral vanishes since $S'''$ is piecewise constant and $\\int g' = 0$ on each subinterval. Therefore $\\int_a^b (S'')^2 \\le \\int_a^b (f'')^2$, which is inequality (6.26). $\\square$

</details>
`,qe=`## 6.5. Spline interpoláció

Legyen $a = x_0 < x_1 < \\ldots < x_n = b$ az $[a,b]$ intervallumnak egy felosztása. Az $S \\colon [a,b] \\to \\mathbb{R}$ folytonos függvényt az $\\{x_i\\}$ osztópontokhoz tartozó *$k$-adrendű spline* függvénynek nevezzük, ha $S \\in C^{k-1}(a,b)$, és $S$ megszorítása minden $[x_i, x_{i+1}]$ intervallumra egy $k$-adrendű polinom. Az elsőrendű, másodrendű ill. harmadrendű spline függvényeket *lineáris, kvadratikus, ill. kubikus spline függvényeknek* nevezzük.

A legegyszerűbb, és így a gyakorlatban igen gyakran használt interpolációs módszer lineáris spline-okkal interpolálja a megadott adatokat. Geometriailag ez azt jelenti, hogy a megadott $(x_i, y_i)$ pontokat szakaszokkal kötjük össze. A lineáris spline interpolációval elkövetett hiba becslésével a 2. feladat foglalkozik.

A lineáris spline interpoláció hátránya az, hogy az interpolációs függvény nem sima, azaz nem differenciálható. Ezt a hátrányt kiküszöböli a harmadrendű spline interpoláció. Ekkor az interpolációs függvény kétszer folytonosan differenciálható lesz, ami a gyakorlati alkalmazásoknál többnyire elegendő. A szakasz hátralevő részében a harmadrendű spline interpolációval foglalkozunk.

Adott osztópontoknak egy $a = x_0 < x_1 < \\ldots < x_n = b$, és hozzá tartozó $y_0, y_1, \\ldots, y_n$ függvényértékek véges sorozata. Keresünk egy olyan $S$ harmadrendű spline függvényt, amely interpolálja a megadott adatokat, azaz

$$S(x_i) = y_i, \\qquad i = 0, 1, \\ldots, n.$$

Jelöljük $S_i$-vel az $S$ függvény $[x_i, x_{i+1}]$ intervallumra vett megszorítását $(i = 0, 1, \\ldots, n - 1)$. A feltevés szerint $S$ interpolálja az $(x_i, y_i)$ pontokat és kétszer folytonosan differenciálható, ezért az $S_i$ függvények teljesítik a következő feltételeket:

$$\\begin{aligned}
S_i(x_i) &= y_i, & i &= 0, 1, \\ldots, n - 1, \\quad (6.10) \\\\
S_i(x_{i+1}) &= y_{i+1}, & i &= 0, 1, \\ldots, n - 1, \\quad (6.11) \\\\
S_i'(x_{i+1}) &= S_{i+1}'(x_{i+1}), & i &= 0, 1, \\ldots, n - 2, \\quad (6.12) \\\\
S_i''(x_{i+1}) &= S_{i+1}''(x_{i+1}), & i &= 0, 1, \\ldots, n - 2. \\quad (6.13)
\\end{aligned}$$

Mivel minden egyes $S_i$ függvényt 4 paraméter határoz meg, így összesen $4n$ paraméter definiálja $S$-t. A (6.10)–(6.13) feltételek száma viszont csak $4n - 2$, ezért a feladatnak így nem egyértelmű a megoldása. Ezért várhatóan még két feltételt megadhatunk, és ettől remélhetően egyértelmű megoldást kapunk. Egy gyakran használt feltétel a következő:

$$S_0''(x_0) = 0 \\qquad \\text{és} \\qquad S_{n-1}''(x_n) = 0. \\tag{6.14}$$

A (6.10)–(6.14) feltételekkel definiált kubikus spline függvényt *természetes spline* függvénynek nevezzük. Belátjuk, hogy az interpolációs feladatnak pontosan egy természetes spline függvény megoldása van. Vegyük fel $S_i$-t a következő alakban:

$$S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3,$$

ahol $a_i, b_i, c_i$ és $d_i$ $(i = 0, 1, \\ldots, n - 1)$ meghatározandó paraméterek. Ekkor

$$\\begin{aligned}
S_i'(x) &= b_i + 2c_i(x - x_i) + 3d_i(x - x_i)^2, \\\\
S_i''(x) &= 2c_i + 6d_i(x - x_i).
\\end{aligned}$$

Ezekből az összefüggésekből rögtön következik

$$a_i = S_i(x_i) = y_i, \\quad b_i = S_i'(x_i) \\quad \\text{és} \\quad c_i = S_i''(x_i)/2, \\quad i = 0, 1, \\ldots, n - 1. \\tag{6.15}$$

A (6.15) összefüggések segítségével definiálhatjuk az $a_n$, $b_n$ és $c_n$ konstansokat is (amelyekre később szükségünk lesz):

$$a_n \\equiv y_n, \\qquad b_n \\equiv S'(x_n) \\qquad \\text{és} \\qquad c_n \\equiv S''(x_n)/2. \\tag{6.16}$$

(A (6.16) képletekben a deriváltak bal oldali deriváltakat jelentenek.) $x = x_{i+1}$-t behelyettesítve $S_i$ képletébe és a (6.11) egyenletet, valamint az $a_i = y_i$ összefüggést használva kapjuk

$$y_i + b_i(x_{i+1} - x_i) + c_i(x_{i+1} - x_i)^2 + d_i(x_{i+1} - x_i)^3 = y_{i+1}.$$

Vezessük be a $\\Delta x_i \\equiv x_{i+1} - x_i$ és a $\\Delta y_i \\equiv y_{i+1} - y_i$ jelöléseket. Így

$$b_i \\Delta x_i + c_i(\\Delta x_i)^2 + d_i(\\Delta x_i)^3 = \\Delta y_i, \\qquad i = 0, 1, \\ldots, n - 1. \\tag{6.17}$$

A (6.12) feltételből és a $b_{i+1} = S_{i+1}'(x_{i+1})$ összefüggésből

$$b_i + 2c_i \\Delta x_i + 3d_i(\\Delta x_i)^2 = b_{i+1} \\tag{6.18}$$

minden $i = 0, 1, \\ldots, n - 2$-re. Használva $b_n$ definícióját kapjuk, hogy (6.18) teljesül $i = n - 1$-re is. Hasonlóan, a (6.13) egyenletből és $c_n$ definíciójából következik

$$2c_i + 6d_i \\Delta x_i = 2c_{i+1}, \\qquad i = 0, 1, \\ldots, n - 1,$$

amiből

$$d_i = \\frac{c_{i+1} - c_i}{3\\Delta x_i}, \\qquad i = 0, 1, \\ldots, n - 1. \\tag{6.19}$$

Ezt behelyettesítjük a (6.17) és (6.18) egyenletekbe:

$$\\begin{aligned}
b_i \\Delta x_i + c_i(\\Delta x_i)^2 + \\frac{c_{i+1} - c_i}{3}(\\Delta x_i)^2 &= \\Delta y_i, & i &= 0, 1, \\ldots, n - 1, \\quad (6.20) \\\\
b_i + 2c_i \\Delta x_i + (c_{i+1} - c_i)\\Delta x_i &= b_{i+1}, & i &= 0, 1, \\ldots, n - 1. \\quad (6.21)
\\end{aligned}$$

Az első egyenletből kifejezve $b_i$-t

$$b_i = \\frac{\\Delta y_i}{\\Delta x_i} - \\frac{2c_i + c_{i+1}}{3}\\Delta x_i,$$

és behelyettesítve a másodikba $i = 0, 1, \\ldots, n - 2$-re kis számolással adódik

$$c_i \\Delta x_i + 2c_{i+1}(\\Delta x_i + \\Delta x_{i+1}) + c_{i+2}\\Delta x_{i+1} = 3\\frac{\\Delta y_{i+1}}{\\Delta x_{i+1}} - 3\\frac{\\Delta y_i}{\\Delta x_i}, \\quad i = 0, 1, \\ldots, n - 2. \\tag{6.22}$$

Megjegyezzük, hogy a (6.22) egyenlet levezetéséhez nem használtuk a (6.14) feltételt, így ez tetszőleges harmadrendű spline interpolációra teljesül. A (6.22) egyenlet $n - 1$ db, $c_i$-re nézve lineáris egyenletet ír le. Ehhez hozzávéve a (6.14) feltételből adódó $c_0 = 0$ és $c_n = 0$ egyenleteket $n + 1$ egyenletből álló $\\mathbf{Ax} = \\mathbf{b}$ alakú lineáris egyenletrendszert kapunk, ahol $\\mathbf{x} = (c_0, c_1, \\ldots, c_n)^T$,

$$\\mathbf{A} = \\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & \\cdots & 0 \\\\
\\Delta x_0 & 2(\\Delta x_0 + \\Delta x_1) & \\Delta x_1 & 0 & 0 & \\cdots & 0 \\\\
0 & \\Delta x_1 & 2(\\Delta x_1 + \\Delta x_2) & \\Delta x_2 & 0 & \\cdots & 0 \\\\
& & \\ddots & \\ddots & \\ddots & & \\\\
0 & \\cdots & & & \\Delta x_{n-2} & 2(\\Delta x_{n-2} + \\Delta x_{n-1}) & \\Delta x_{n-1} \\\\
0 & \\cdots & & & 0 & 0 & 1
\\end{pmatrix}$$

tridiagonális mátrix és

$$\\mathbf{b} = \\begin{pmatrix}
0 \\\\
3\\frac{\\Delta y_1}{\\Delta x_1} - 3\\frac{\\Delta y_0}{\\Delta x_0} \\\\
\\vdots \\\\
3\\frac{\\Delta y_{n-1}}{\\Delta x_{n-1}} - 3\\frac{\\Delta y_{n-2}}{\\Delta x_{n-2}} \\\\
0
\\end{pmatrix}.$$

Mivel $\\mathbf{A}$ diagonálisan domináns, az $\\mathbf{Ax} = \\mathbf{b}$ egyenletnek létezik egyértelmű megoldása. A $c_i$-k ismeretében pedig a $d_i$ és $b_i$ együtthatókat is meghatározhatjuk. Ezzel beláttuk, hogy a feladatnak létezik egyértelmű megoldása. Megjegyezzük, hogy a gyakorlatban az $\\mathbf{Ax} = \\mathbf{b}$ egyenletrendszert a tridiagonális lineáris egyenletre vonatkozó Gauss-eliminációval (3.37 algoritmus) oldhatjuk meg hatékonyan. Beláttuk tehát:

**6.22. tétel.** *A harmadrendű spline interpoláció feladatának létezik pontosan egy természetes harmadrendű spline függvény megoldása.*

**6.23. példa.** Illesszünk természetes harmadrendű spline függvényt az

| $x_i$ | 0.0 | 1.0 | 1.5 | 2.0 | 3.0 | 4.0 |
|-------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.5 | 0.1 | 2.5 | -1.0 | -0.5 | 0.0 |

adatokra! Az előző jelölést követve a $c_i$ együtthatókra felírt lineáris egyenletrendszer az adott adatokra a következő lesz:

$$\\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\\\
1 & 3 & 0.5 & 0 & 0 & 0 \\\\
0 & 0.5 & 2 & 0.5 & 0 & 0 \\\\
0 & 0 & 0.5 & 3 & 1 & 0 \\\\
0 & 0 & 0 & 1 & 4 & 1 \\\\
0 & 0 & 0 & 0 & 0 & 1
\\end{pmatrix}
\\begin{pmatrix}
c_0 \\\\ c_1 \\\\ c_2 \\\\ c_3 \\\\ c_4 \\\\ c_5
\\end{pmatrix}
=
\\begin{pmatrix}
0 \\\\ 15.6 \\\\ -35.4 \\\\ 22.5 \\\\ 0 \\\\ 0
\\end{pmatrix}.$$

Ezt megoldva kapjuk a $c_i$ értékeket, amit visszahelyettesítve a (6.19) és (6.20) egyenletekbe kiszámíthatók a $d_i$ és $b_i$ együtthatók értékei. A számolást elvégezve a következő harmadrendű polinomokat kapjuk az egyes intervallumokon:

$$\\begin{aligned}
S_0(x) &= 0.5 - 3.4141079x + 3.0141079x^3, \\\\
S_1(x) &= 0.1 + 5.6282158(x - 1) + 9.04232365(x - 1)^2 - 21.3975104(x - 1)^3, \\\\
S_2(x) &= 2.5 - 1.3775934(x - 1.5) - 23.0539419(x - 1.5)^2 + 23.6182573(x - 1.5)^3, \\\\
S_3(x) &= -1.0 - 6.7178423(x - 2) + 12.3734440(x - 2)^2 - 5.1556017(x - 2)^3, \\\\
S_4(x) &= -0.5 + 2.5622407(x - 3) - 3.0933610(x - 3)^2 + 1.0311203(x - 3)^3.
\\end{aligned}$$

A kapott spline függvény és az adatok grafikonja a 6.3 ábrán látható. $\\square$

A (6.14) feltétel helyett számos más, $S$ végpontjaira vonatkozó feltételt is kiköthetünk. Itt most csak az

$$S'(x_0) = y_0' \\qquad \\text{és} \\qquad S'(x_n) = y_n' \\tag{6.23}$$

feltételt vizsgáljuk, ahol $y_0'$ és $y_n'$ adott számok. Ez azt jelenti, hogy ismerjük az $S$ függvény érintőjét a grafikon végpontjaiban. A (6.23) feltételt teljesítő spline függvényt *teljes spline* függvénynek nevezzük. Ebben az esetben is ugyanúgy kapjuk a (6.22) egyenleteket. Még két egyenletet kell felírni, hogy az egyenletrendszer jól meghatározott legyen. Használva a $b_0 = S'(x_0) = y_0'$ összefüggést, a (6.20) egyenletből következik

$$y_0' \\Delta x_0 + c_0(\\Delta x_0)^2 + \\frac{c_1 - c_0}{3}(\\Delta x_0)^2 = \\Delta y_0,$$

azaz

$$2c_0 \\Delta x_0 + c_1 \\Delta x_0 = 3\\frac{\\Delta y_0}{\\Delta x_0} - 3y_0'. \\tag{6.24}$$

$b_{n-1}$-et kifejezve a (6.20) egyenletből és behelyettesítve a (6.21) egyenletbe, és a $b_n = y_n'$ összefüggést használva kapjuk

$$\\frac{\\Delta y_{n-1}}{\\Delta x_{n-1}} - \\frac{2c_{n-1} + c_n}{3}\\Delta x_{n-1} + \\Delta x_{n-1}(c_{n-1} + c_n) = y_n',$$

ill. átrendezve

$$c_{n-1}\\Delta x_{n-1} + 2c_n \\Delta x_{n-1} = 3y_n' - 3\\frac{\\Delta y_{n-1}}{\\Delta x_{n-1}}. \\tag{6.25}$$

Ha a természetes spline interpolációnál kapott $\\mathbf{Ax} = \\mathbf{b}$ egyenlet első egyenletét kicseréljük a (6.24) egyenletre, és az utolsó egyenletet a (6.25) egyenletre, akkor könnyen látható, hogy az együtthatómátrix továbbra is diagonálisan domináns marad, azaz a módosított egyenletrendszernek is van egyértelmű megoldása. Így a (6.23) feltétellel kiegészített interpolációs problémának van teljes spline függvény megoldása, és a megoldás egyértelmű.

A harmadrendű természetes spline interpolációs függvények a következő minimum tulajdonsággal rendelkeznek, ami bizonyos értelemben azt jelenti, hogy spline függvénnyel lehet a legsimábban interpolálni adott pontokat.

**6.24. tétel.** *Legyen $a = x_0 < x_1 < \\ldots < x_n = b$ és $y_0, y_1, \\ldots, y_n$ osztópontoknak és hozzátartozó függvényértékeknek egy véges sorozata, és legyen $S$ az ezeket interpoláló természetes kubikus spline függvény. Ekkor*

$$\\int_a^b (S''(x))^2 \\, dx \\leq \\int_a^b (f''(x))^2 \\, dx \\tag{6.26}$$

*minden olyan $f \\in C^2(a,b)$-re, amely szintén interpolálja az adatokat, azaz $f(x_i) = y_i$ minden $i = 0, 1, \\ldots, n$-re.*

**Bizonyítás.** Vezessük be a $g(x) \\equiv f(x) - S(x)$ függvényt. Ekkor $f''(x) = S''(x) + g''(x)$, és így

$$\\int_a^b (f''(x))^2 \\, dx = \\int_a^b (S''(x))^2 \\, dx + 2\\int_a^b S''(x)g''(x) \\, dx + \\int_a^b (g''(x))^2 \\, dx.$$

Mivel $\\int_a^b (g''(x))^2 \\, dx \\geq 0$, így a tétel állítása következik ebből az egyenlőségből, ha belátjuk, hogy $\\int_a^b S''(x)g''(x) \\, dx = 0$. Az integrált felbontva és parciálisan integrálva kapjuk

$$\\begin{aligned}
\\int_a^b S''(x)g''(x) \\, dx &= \\sum_{i=1}^{n} \\int_{x_{i-1}}^{x_i} S''(x)g''(x) \\, dx \\\\
&= \\sum_{i=1}^{n} [S''(x)g'(x)]_{x_{i-1}}^{x_i} - \\sum_{i=1}^{n} \\int_{x_{i-1}}^{x_i} S'''(x)g'(x) \\, dx \\\\
&= S''(b)g'(b) - S''(a)g'(a) - \\sum_{i=1}^{n} \\int_{x_{i-1}}^{x_i} S'''(x)g'(x) \\, dx.
\\end{aligned}$$

$S$ természetes spline függvény, így $S''(a) = S''(b) = 0$. Mivel $S$ harmadfokú polinom minden $[x_{i-1}, x_i]$ intervallumon, ezért ott $S'''$ konstans függvény, így az integrál elé kivihető. Viszont $\\int_{x_{i-1}}^{x_i} g'(x) \\, dx = g(x_i) - g(x_{i-1}) = 0$, mivel $g(x_i) = 0$ minden $i = 0, 1, \\ldots, n$-re. Ezzel a tételt beláttuk. $\\square$

A következő tétel a teljes spline interpoláció hibáját vizsgálja. Bizonyítás nélkül közöljük az eredményt.

**6.25. tétel.** *Legyen $f \\in C^4(a,b)$, $a = x_0 < x_1 < \\ldots < x_n = b$ osztópontok, $y_i = f(x_i)$, $i = 0, 1, \\ldots, n$ függvényértékek, valamint $y_0' = f'(a)$ és $y_n' = f'(b)$ derivált értékek, és legyen $S$ az ezekhez tartozó teljes spline függvény. Ekkor $x \\in [a,b]$-re*

$$\\begin{aligned}
|f(x) - S(x)| &\\leq \\frac{5}{384}M_4 h^4, \\\\
|f'(x) - S'(x)| &\\leq \\left( \\frac{\\sqrt{3}}{216} + \\frac{1}{24} \\right) M_4 h^3, \\\\
|f''(x) - S''(x)| &\\leq \\left( \\frac{1}{12} + \\frac{h}{3k} \\right) M_4 h^2,
\\end{aligned}$$

*ahol $M_4 \\equiv \\max\\{|f^{(4)}(x)|:\\ x \\in [a,b]\\}$, $h \\equiv \\max\\{x_{i+1} - x_i:\\ i = 0, 1, \\ldots, n - 1\\}$, $k \\equiv \\min\\{x_{i+1} - x_i:\\ i = 0, 1, \\ldots, n - 1\\}$.*

Megjegyezzük, hogy a természetes spline interpoláció hibája ehhez hasonló módon becsülhető.

### Feladatok

1. Adja meg az $(x_i, y_i)$, $i = 0, 1, \\ldots, n$ adatokat interpoláló lineáris spline függvény képletét az $[x_i, x_{i+1}]$ intervallumon!

<details class="reveal-solution"><summary>Megoldás</summary>

On $[x_i, x_{i+1}]$ the linear spline is the linear Lagrange interpolant:
$$S_i(x) = y_i + \\frac{y_{i+1} - y_i}{x_{i+1} - x_i}(x - x_i),$$
equivalently
$$S_i(x) = \\frac{x_{i+1} - x}{x_{i+1} - x_i}\\,y_i + \\frac{x - x_i}{x_{i+1} - x_i}\\,y_{i+1}. \\qquad \\square$$

</details>

2. Adott egy $f \\colon [a,b] \\to \\mathbb{R}$ folytonos függvény, és legyen $S_h$ az $[a,b]$ intervallum ekvidisztáns, $h$ lépésközű osztópontjaihoz tartozó $f$-et interpoláló lineáris spline függvény.

   (a) Mutassa meg, hogy $\\max\\{|f(x) - S_h(x)|:\\ x \\in [a,b]\\} \\to 0$, ha $h \\to 0$.

   (b) Legyen $f \\in C^1[a,b]$. Mutassa meg, hogy
   $$|f(x) - S_h(x)| \\leq M_1 h, \\qquad x \\in [a,b],$$
   ahol $M_1 \\equiv \\max\\{|f'(x)|:\\ x \\in [a,b]\\}$.

<details class="reveal-solution"><summary>Megoldás</summary>

**(a)** $f$ is continuous on $[a,b]$, hence uniformly continuous: for any $\\varepsilon > 0$ there is $\\delta > 0$ with $|x - y| < \\delta \\Rightarrow |f(x) - f(y)| < \\varepsilon$. Choose $h < \\delta$. On each $[x_i, x_{i+1}]$, $S_h$ is linear interpolation, so for $x$ in that interval
$$|f(x) - S_h(x)| \\le \\max\\big(|f(x) - f(x_i)|,\\ |f(x) - f(x_{i+1})|\\big) < \\varepsilon.$$
Hence $\\max|f - S_h| \\to 0$ as $h \\to 0$.

**(b)** For $f \\in C^1$, by the Mean Value Theorem $|f(x) - f(x_i)| \\le M_1|x - x_i| \\le M_1 h$, and similarly for $x_{i+1}$. Since $S_h(x)$ lies between $f(x_i)$ and $f(x_{i+1})$, we get $|f(x) - S_h(x)| \\le M_1 h$, i.e. the error is $O(h)$. $\\square$

</details>

3. Számítsa ki és ábrázolja a 6.1 szakasz 1. feladatában szereplő adatokhoz tartozó természetes kubikus spline interpolációs függvényeket!

<details class="reveal-solution"><summary>Megoldás</summary>

Set up the tridiagonal system for the second-derivative coefficients $c_i$ with natural boundary conditions $c_0 = c_n = 0$, solve it, then recover $b_i$ and $d_i$ from
$$d_i = \\frac{c_{i+1} - c_i}{3\\Delta x_i}, \\qquad b_i = \\frac{\\Delta y_i}{\\Delta x_i} - \\frac{2c_i + c_{i+1}}{3}\\Delta x_i,$$
which gives the cubic piece $S_i(x) = y_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$ on each subinterval.

</details>

4. Mutassa meg, hogy kvadratikus spline-interpolációnál az
   $$S'(x_0) = f'(x_0) \\qquad \\text{vagy} \\qquad S'(x_n) = f'(x_n)$$
   feltételek egyike teljesülése egyértelműen meghatározza a spline interpolációs függvényt!

<details class="reveal-solution"><summary>Megoldás</summary>

With one endpoint-derivative condition, the continuity-of-second-derivative relations together with that single boundary condition form a system of $n+1$ equations for the $n+1$ unknowns $c_0, \\ldots, c_n$. The resulting tridiagonal coefficient matrix is (strictly) diagonally dominant, hence nonsingular, so the system has a unique solution; the remaining coefficients $b_i, d_i$ are then determined. $\\square$

</details>

5. Mutassa meg, hogy ha $S$ adott $a = x_0 < x_1 < \\ldots < x_n = b$ osztópontokhoz és $y_0, y_1, \\ldots, y_n$ függvényértékekhez, valamint $y_0'$ és $y_n'$ derivált értékekhez tartozó teljes spline függvény, akkor $S$ teljesíti a (6.26) egyenlőtlenséget minden olyan $f \\in C^2(a,b)$ függvényre, amelyre $f(x_i) = y_i$ minden $i$-re, $f'(a) = y_0$ és $f'(b) = y_n'$!

<details class="reveal-solution"><summary>Megoldás</summary>

Follow the proof of Theorem 6.24 with $g(x) = f(x) - S(x)$, which satisfies $g(x_i) = 0$ for all $i$ and now also $g'(a) = g'(b) = 0$ (both $f$ and $S$ match the endpoint derivatives). Integration by parts gives
$$\\int_a^b S''(x)g''(x)\\,dx = \\big[S''(x)g'(x)\\big]_a^b - \\int_a^b S'''(x)g'(x)\\,dx.$$
The boundary term vanishes because $g'(a) = g'(b) = 0$, and the remaining integral vanishes since $S'''$ is piecewise constant and $\\int g' = 0$ on each subinterval. Therefore $\\int_a^b (S'')^2 \\le \\int_a^b (f'')^2$, which is inequality (6.26). $\\square$

</details>
`,je={lagrange:{en:ue,hu:ye},newton:{en:ke,hu:be},hermite:{en:ve,hu:ze},spline:{en:we,hu:qe}};function Le(t,a){var s;return((s=je[t])==null?void 0:s[a])??""}const Se=`#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Hermite interpolation via divided differences with doubled nodes.
// Fills z (nodes) and returns the Newton coefficients (table diagonal).
Vec hermite_coeffs(const Vec& x, const Vec& y, const Vec& dy, Vec& z) {
    int n = x.size(), m = 2 * n;
    z.assign(m, 0.0);
    Mat Q(m, Vec(m, 0.0));
    for (int i = 0; i < n; ++i) {
        z[2 * i] = z[2 * i + 1] = x[i];
        Q[2 * i][0] = Q[2 * i + 1][0] = y[i];
        Q[2 * i + 1][1] = dy[i];
        if (i > 0) Q[2 * i][1] = (Q[2 * i][0] - Q[2 * i - 1][0]) / (z[2 * i] - z[2 * i - 1]);
    }
    for (int j = 2; j < m; ++j)
        for (int i = j; i < m; ++i)
            Q[i][j] = (Q[i][j - 1] - Q[i - 1][j - 1]) / (z[i] - z[i - j]);
    Vec a(m);
    for (int i = 0; i < m; ++i) a[i] = Q[i][i];
    return a;
}

double horner(const Vec& z, const Vec& a, double t) {
    double p = a.back();
    for (int k = (int)a.size() - 2; k >= 0; --k) p = p * (t - z[k]) + a[k];
    return p;
}

int main() {
    Vec x = {0, 1}, y = {1, 0}, dy = {0, 0}, z;
    Vec a = hermite_coeffs(x, y, dy, z);
    cout << "coeffs:";
    for (double v : a) cout << " " << v;
    cout << "\\np(0.5) = " << horner(z, a, 0.5) << "\\n";
}
`,Te=`program hermite_demo
  implicit none
  integer, parameter :: n = 2, m = 2*n
  real(8) :: x(n), y(n), dy(n), z(m), Q(m,m), a(m)
  integer :: i, j
  x = [0d0, 1d0]; y = [1d0, 0d0]; dy = [0d0, 0d0]
  Q = 0d0
  do i = 1, n
     z(2*i-1) = x(i); z(2*i) = x(i)
     Q(2*i-1,1) = y(i); Q(2*i,1) = y(i)
     Q(2*i,2) = dy(i)
     if (i > 1) Q(2*i-1,2) = (Q(2*i-1,1) - Q(2*i-2,1)) / (z(2*i-1) - z(2*i-2))
  end do
  do j = 3, m
     do i = j, m
        Q(i,j) = (Q(i,j-1) - Q(i-1,j-1)) / (z(i) - z(i-j+1))
     end do
  end do
  do i = 1, m
     a(i) = Q(i,i)
  end do
  print '(A, 4F8.3)', 'a = ', a   ! 1 0 -1 2
end program hermite_demo
`,Ae=`package main

import "fmt"

// Hermite interpolation via divided differences with doubled nodes.
func hermiteCoeffs(x, y, dy []float64) []float64 {
	n := len(x)
	m := 2 * n
	z := make([]float64, m)
	Q := make([][]float64, m)
	for i := range Q {
		Q[i] = make([]float64, m)
	}
	for i := 0; i < n; i++ {
		z[2*i], z[2*i+1] = x[i], x[i]
		Q[2*i][0], Q[2*i+1][0] = y[i], y[i]
		Q[2*i+1][1] = dy[i]
		if i > 0 {
			Q[2*i][1] = (Q[2*i][0] - Q[2*i-1][0]) / (z[2*i] - z[2*i-1])
		}
	}
	for j := 2; j < m; j++ {
		for i := j; i < m; i++ {
			Q[i][j] = (Q[i][j-1] - Q[i-1][j-1]) / (z[i] - z[i-j])
		}
	}
	a := make([]float64, m)
	for i := 0; i < m; i++ {
		a[i] = Q[i][i]
	}
	return a
}

func main() {
	fmt.Println(hermiteCoeffs([]float64{0, 1}, []float64{1, 0}, []float64{0, 0})) // [1 0 -1 2]
}
`,He=`function hermite_coeffs(x, y, dy)
    n = length(x); m = 2n; z = zeros(m); Q = zeros(m, m)
    for i in 1:n
        z[2i-1] = x[i]; z[2i] = x[i]
        Q[2i-1, 1] = y[i]; Q[2i, 1] = y[i]
        Q[2i, 2] = dy[i]
        i > 1 && (Q[2i-1, 2] = (Q[2i-1, 1] - Q[2i-2, 1]) / (z[2i-1] - z[2i-2]))
    end
    for j in 3:m, i in j:m
        Q[i, j] = (Q[i, j-1] - Q[i-1, j-1]) / (z[i] - z[i-j+1])
    end
    return z, [Q[i, i] for i in 1:m]
end

z, a = hermite_coeffs([0.0, 1], [1.0, 0], [0.0, 0])
println(a)   # [1, 0, -1, 2]
`,De=`// Hermite interpolation via divided differences with doubled nodes.
function hermiteCoeffs(x, y, dy) {
  const n = x.length, m = 2 * n;
  const z = new Array(m).fill(0);
  const Q = Array.from({ length: m }, () => new Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    z[2 * i] = x[i]; z[2 * i + 1] = x[i];
    Q[2 * i][0] = y[i]; Q[2 * i + 1][0] = y[i];
    Q[2 * i + 1][1] = dy[i];
    if (i > 0) Q[2 * i][1] = (Q[2 * i][0] - Q[2 * i - 1][0]) / (z[2 * i] - z[2 * i - 1]);
  }
  for (let j = 2; j < m; j++)
    for (let i = j; i < m; i++)
      Q[i][j] = (Q[i][j - 1] - Q[i - 1][j - 1]) / (z[i] - z[i - j]);
  return Array.from({ length: m }, (_, i) => Q[i][i]);
}
console.log(hermiteCoeffs([0, 1], [1, 0], [0, 0])); // [1, 0, -1, 2]
`,Ne=`function [z, a] = hermite_coeffs(x, y, dy)
% HERMITE_COEFFS  Hermite interpolation via divided differences with doubled
% nodes; a are the Newton coefficients on the node list z.
    x = x(:); y = y(:); dy = dy(:); n = numel(x); m = 2*n;
    z = zeros(m,1); Q = zeros(m,m);
    for i = 1:n
        z(2*i-1) = x(i); z(2*i) = x(i);
        Q(2*i-1,1) = y(i); Q(2*i,1) = y(i);
        Q(2*i,2) = dy(i);                                  % f'[x_i] at repeated node
        if i > 1
            Q(2*i-1,2) = (Q(2*i-1,1) - Q(2*i-2,1)) / (z(2*i-1) - z(2*i-2));
        end
    end
    for j = 3:m
        for i = j:m
            Q(i,j) = (Q(i,j-1) - Q(i-1,j-1)) / (z(i) - z(i-j+1));
        end
    end
    a = diag(Q);
end

% --- Demo ---
[z, a] = hermite_coeffs([0; 1], [1; 0], [0; 0]);   % p(0)=1, p'(0)=0, p(1)=0, p'(1)=0
p = a(end);
for k = numel(a)-1:-1:1, p = p*(0.5 - z(k)) + a(k); end
fprintf('p(0.5) = %g\\n', p);                        % -> 0.5  (p = 2x^3 - 3x^2 + 1)
`,Me=`import numpy as np


def hermite_coeffs(x, y, dy):
    """Hermite interpolation via divided differences with doubled nodes.
    Returns (z, coeffs): coeffs are the Newton coefficients on nodes z."""
    x, y, dy = map(lambda v: np.asarray(v, float), (x, y, dy))
    n = len(x)
    m = 2 * n
    z = np.zeros(m)
    Q = np.zeros((m, m))
    for i in range(n):
        z[2 * i] = z[2 * i + 1] = x[i]
        Q[2 * i, 0] = Q[2 * i + 1, 0] = y[i]
        Q[2 * i + 1, 1] = dy[i]                       # f'[x_i] at the repeated node
        if i > 0:
            Q[2 * i, 1] = (Q[2 * i, 0] - Q[2 * i - 1, 0]) / (z[2 * i] - z[2 * i - 1])
    for j in range(2, m):
        for i in range(j, m):
            Q[i, j] = (Q[i, j - 1] - Q[i - 1, j - 1]) / (z[i] - z[i - j])
    return z, np.diag(Q).copy()


def hermite_eval(z, a, t):
    p = a[-1]
    for k in range(len(a) - 2, -1, -1):
        p = p * (t - z[k]) + a[k]
    return p


if __name__ == "__main__":
    x = [0, 1]
    y = [1, 0]
    dy = [0, 0]                       # p(0)=1,p'(0)=0,p(1)=0,p'(1)=0 -> 2x^3-3x^2+1
    z, a = hermite_coeffs(x, y, dy)
    print("coeffs:", a)
    print("p(0.5) =", hermite_eval(z, a, 0.5))
`,Ie=`# Hermite interpolation via divided differences with doubled nodes.
# Returns list(z, coeffs): coeffs are the Newton coefficients on nodes z.
hermite_coeffs <- function(x, y, dy) {
  n <- length(x)
  m <- 2 * n
  z <- numeric(m)
  Q <- matrix(0, m, m)
  for (i in 1:n) {
    z[2 * i - 1] <- x[i]
    z[2 * i]     <- x[i]
    Q[2 * i - 1, 1] <- y[i]
    Q[2 * i, 1]     <- y[i]
    Q[2 * i, 2]     <- dy[i]              # f'[x_i] at the repeated node
    if (i > 1) {
      Q[2 * i - 1, 2] <- (Q[2 * i - 1, 1] - Q[2 * i - 2, 1]) /
        (z[2 * i - 1] - z[2 * i - 2])
    }
  }
  for (j in 3:m) {
    for (i in j:m) {
      Q[i, j] <- (Q[i, j - 1] - Q[i - 1, j - 1]) / (z[i] - z[i - j + 1])
    }
  }
  list(z = z, coeffs = diag(Q))
}

hermite_eval <- function(z, a, t) {
  p <- a[length(a)]
  for (k in (length(a) - 1):1) {
    p <- p * (t - z[k]) + a[k]
  }
  p
}

x <- c(0, 1)
y <- c(1, 0)
dy <- c(0, 0)                 # p(0)=1,p'(0)=0,p(1)=0,p'(1)=0 -> 2x^3-3x^2+1
res <- hermite_coeffs(x, y, dy)
cat("coeffs:", res$coeffs, "\\n")
cat("p(0.5) =", hermite_eval(res$z, res$coeffs, 0.5), "\\n")
`,Ce=`// Hermite interpolation via divided differences with doubled nodes.
fn hermite_coeffs(x: &[f64], y: &[f64], dy: &[f64]) -> (Vec<f64>, Vec<f64>) {
    let n = x.len();
    let m = 2 * n;
    let mut z = vec![0.0; m];
    let mut q = vec![vec![0.0; m]; m];
    for i in 0..n {
        z[2 * i] = x[i]; z[2 * i + 1] = x[i];
        q[2 * i][0] = y[i]; q[2 * i + 1][0] = y[i];
        q[2 * i + 1][1] = dy[i];
        if i > 0 { q[2 * i][1] = (q[2 * i][0] - q[2 * i - 1][0]) / (z[2 * i] - z[2 * i - 1]); }
    }
    for j in 2..m {
        for i in j..m {
            q[i][j] = (q[i][j - 1] - q[i - 1][j - 1]) / (z[i] - z[i - j]);
        }
    }
    let a = (0..m).map(|i| q[i][i]).collect();
    (z, a)
}
fn main() {
    let (_z, a) = hermite_coeffs(&[0.0, 1.0], &[1.0, 0.0], &[0.0, 0.0]);
    println!("{:?}", a);   // [1, 0, -1, 2]
}
`,Ee=`hermiteCoeffs[x_, y_, dy_] := Module[{n = Length[x], m, z, Q, i, j},
   m = 2 n; z = ConstantArray[0., m]; Q = ConstantArray[0., {m, m}];
   Do[
    z[[2 i - 1]] = x[[i]]; z[[2 i]] = x[[i]];
    Q[[2 i - 1, 1]] = y[[i]]; Q[[2 i, 1]] = y[[i]];
    Q[[2 i, 2]] = dy[[i]];
    If[i > 1, Q[[2 i - 1, 2]] = (Q[[2 i - 1, 1]] - Q[[2 i - 2, 1]])/(z[[2 i - 1]] - z[[2 i - 2]])],
    {i, n}];
   Do[Q[[i, j]] = (Q[[i, j - 1]] - Q[[i - 1, j - 1]])/(z[[i]] - z[[i - j + 1]]), {j, 3, m}, {i, j, m}];
   Table[Q[[i, i]], {i, m}]];
Print[hermiteCoeffs[{0, 1}, {1, 0}, {0, 0}]]   (* {1, 0, -1, 2} *)
`,Pe=`#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Solve A x = b by Gaussian elimination with partial pivoting.
Vec solve(Mat A, Vec b) {
    int n = b.size();
    for (int k = 0; k < n; ++k) {
        int p = k;
        for (int i = k + 1; i < n; ++i) if (fabs(A[i][k]) > fabs(A[p][k])) p = i;
        swap(A[k], A[p]); swap(b[k], b[p]);
        for (int i = k + 1; i < n; ++i) {
            double f = A[i][k] / A[k][k];
            for (int j = k; j < n; ++j) A[i][j] -= f * A[k][j];
            b[i] -= f * b[k];
        }
    }
    Vec x(n);
    for (int i = n - 1; i >= 0; --i) {
        double s = b[i];
        for (int j = i + 1; j < n; ++j) s -= A[i][j] * x[j];
        x[i] = s / A[i][i];
    }
    return x;
}

// Coefficients (low->high) of the interpolant through (x_i, y_i) via Vandermonde.
Vec lagrange_coeffs(const Vec& x, const Vec& y) {
    int n = x.size();
    Mat V(n, Vec(n, 1.0));
    for (int i = 0; i < n; ++i)
        for (int j = 1; j < n; ++j) V[i][j] = V[i][j - 1] * x[i];   // x_i^j
    return solve(V, y);
}

int main() {
    Vec x = {-1, 1, 2, 3}, y = {-3, 1, 3, 29};
    Vec a = lagrange_coeffs(x, y);
    cout << "coefficients (low->high):";
    for (double v : a) cout << " " << v;
    cout << "\\n";
}
`,We=`program lagrange_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: x(n), y(n), V(n,n), a(n)
  integer :: i, j
  x = [-1d0, 1d0, 2d0, 3d0]; y = [-3d0, 1d0, 3d0, 29d0]
  do i = 1, n
     do j = 1, n
        V(i,j) = x(i)**(j-1)
     end do
  end do
  a = gauss_solve(V, y)
  print '(A, 4F8.3)', 'a = ', a   ! 5 -1 -6 3
contains
  function gauss_solve(Ain, bin) result(xx)
    real(8), intent(in) :: Ain(n,n), bin(n)
    real(8) :: M(n,n), c(n), xx(n), f, tmp(n), tb
    integer :: i, j, k, p
    M = Ain; c = bin
    do k = 1, n
       p = k
       do i = k+1, n
          if (abs(M(i,k)) > abs(M(p,k))) p = i
       end do
       tmp = M(k,:); M(k,:) = M(p,:); M(p,:) = tmp
       tb = c(k); c(k) = c(p); c(p) = tb
       do i = k+1, n
          f = M(i,k)/M(k,k); M(i,k:n) = M(i,k:n) - f*M(k,k:n); c(i) = c(i) - f*c(k)
       end do
    end do
    do i = n, 1, -1
       xx(i) = (c(i) - dot_product(M(i,i+1:n), xx(i+1:n)))/M(i,i)
    end do
  end function gauss_solve
end program lagrange_demo
`,Ve=`package main

import (
	"fmt"
	"math"
)

func solve(A [][]float64, b []float64) []float64 {
	n := len(b)
	m := make([][]float64, n)
	for i := range A {
		m[i] = append([]float64{}, A[i]...)
	}
	r := append([]float64{}, b...)
	for k := 0; k < n; k++ {
		p := k
		for i := k + 1; i < n; i++ {
			if math.Abs(m[i][k]) > math.Abs(m[p][k]) {
				p = i
			}
		}
		m[k], m[p] = m[p], m[k]
		r[k], r[p] = r[p], r[k]
		for i := k + 1; i < n; i++ {
			f := m[i][k] / m[k][k]
			for j := k; j < n; j++ {
				m[i][j] -= f * m[k][j]
			}
			r[i] -= f * r[k]
		}
	}
	x := make([]float64, n)
	for i := n - 1; i >= 0; i-- {
		s := r[i]
		for j := i + 1; j < n; j++ {
			s -= m[i][j] * x[j]
		}
		x[i] = s / m[i][i]
	}
	return x
}

// Lagrange interpolation via the Vandermonde system.
func lagrangeCoeffs(x, y []float64) []float64 {
	n := len(x)
	V := make([][]float64, n)
	for i := range x {
		V[i] = make([]float64, n)
		for j := 0; j < n; j++ {
			V[i][j] = math.Pow(x[i], float64(j))
		}
	}
	return solve(V, y)
}

func main() {
	fmt.Println(lagrangeCoeffs([]float64{-1, 1, 2, 3}, []float64{-3, 1, 3, 29})) // [5 -1 -6 3]
}
`,Qe=`function lagrange_coeffs(x, y)
    n = length(x)
    A = [x[i]^(j - 1) for i in 1:n, j in 1:n]   # Vandermonde matrix
    return A \\ y                                 # least-stable for large n
end

x = [-1.0, 1, 2, 3]; y = [-3.0, 1, 3, 29]
println(lagrange_coeffs(x, y))   # [5, -1, -6, 3]
`,Fe=`// Lagrange interpolation via the Vandermonde system V a = y.
function solve(A, b) {
  const n = b.length;
  const m = A.map((r) => [...r]), r = [...b];
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[p][k])) p = i;
    [m[k], m[p]] = [m[p], m[k]]; [r[k], r[p]] = [r[p], r[k]];
    for (let i = k + 1; i < n; i++) {
      const f = m[i][k] / m[k][k];
      for (let j = k; j < n; j++) m[i][j] -= f * m[k][j];
      r[i] -= f * r[k];
    }
  }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = r[i];
    for (let j = i + 1; j < n; j++) s -= m[i][j] * x[j];
    x[i] = s / m[i][i];
  }
  return x;
}
function lagrangeCoeffs(x, y) {
  const n = x.length;
  const V = x.map((xi) => Array.from({ length: n }, (_, j) => xi ** j));
  return solve(V, y);
}
console.log(lagrangeCoeffs([-1, 1, 2, 3], [-3, 1, 3, 29])); // [5, -1, -6, 3]
`,Re=`function a = lagrange_coeffs(x, y)
% LAGRANGE_COEFFS  Coefficients a (low->high) of the degree n-1 interpolant
% through (x_i, y_i), via the Vandermonde system V a = y.
    x = x(:); y = y(:); n = numel(x);
    V = zeros(n);
    for i = 1:n
        V(i, :) = x(i) .^ (0:n-1);     % V(i,j) = x_i^(j-1)
    end
    a = V \\ y;                          % backslash is stabler than inv(V)*y
end

% --- Demo ---
x = [-1 1 2 3]; y = [-3 1 3 29];
disp(lagrange_coeffs(x, y)');           % -> 5  -1  -6  3
`,Be=`import numpy as np


def lagrange_coeffs(x, y):
    """Polynomial coefficients a (low->high) of the degree n-1 interpolant
    through (x_i, y_i), via the Vandermonde system V a = y."""
    x = np.asarray(x, float)
    y = np.asarray(y, float)
    V = np.vander(x, increasing=True)   # V[i, j] = x_i ** j
    return np.linalg.solve(V, y)


if __name__ == "__main__":
    x = [-1, 1, 2, 3]
    y = [-3, 1, 3, 29]
    print("coefficients (low->high):", lagrange_coeffs(x, y))
`,Oe=`# Polynomial coefficients a (low->high) of the degree n-1 interpolant
# through (x_i, y_i), via the Vandermonde system V a = y.
lagrange_coeffs <- function(x, y) {
  n <- length(x)
  V <- outer(x, 0:(n - 1), \`^\`)   # V[i, j] = x_i^j
  as.vector(solve(V, y))
}

x <- c(-1, 1, 2, 3)
y <- c(-3, 1, 3, 29)
cat("coefficients (low->high):", lagrange_coeffs(x, y), "\\n")
`,Ue=`// Lagrange interpolation via the Vandermonde system V a = y.
fn solve(mut a: Vec<Vec<f64>>, mut b: Vec<f64>) -> Vec<f64> {
    let n = b.len();
    for k in 0..n {
        let mut p = k;
        for i in k + 1..n { if a[i][k].abs() > a[p][k].abs() { p = i; } }
        a.swap(k, p); b.swap(k, p);
        for i in k + 1..n {
            let f = a[i][k] / a[k][k];
            for j in k..n { a[i][j] -= f * a[k][j]; }
            b[i] -= f * b[k];
        }
    }
    let mut x = vec![0.0; n];
    for i in (0..n).rev() {
        let mut s = b[i];
        for j in i + 1..n { s -= a[i][j] * x[j]; }
        x[i] = s / a[i][i];
    }
    x
}
fn lagrange_coeffs(x: &[f64], y: &[f64]) -> Vec<f64> {
    let n = x.len();
    let v: Vec<Vec<f64>> = (0..n).map(|i| (0..n).map(|j| x[i].powi(j as i32)).collect()).collect();
    solve(v, y.to_vec())
}
fn main() {
    let x = [-1.0, 1.0, 2.0, 3.0];
    let y = [-3.0, 1.0, 3.0, 29.0];
    println!("{:?}", lagrange_coeffs(&x, &y));   // [5, -1, -6, 3]
}
`,Ge=`lagrangeCoeffs[x_, y_] := Module[{n = Length[x], V},
   V = Table[x[[i]]^(j - 1), {i, n}, {j, n}];   (* Vandermonde *)
   LinearSolve[V, y]];
Print[lagrangeCoeffs[{-1, 1, 2, 3}, {-3, 1, 3, 29}]]   (* {5, -1, -6, 3} *)
`,Ke=`#include <vector>
#include <iostream>
using namespace std;

// Evaluate the Newton form by nested (Horner-like) multiplication.
double newton_eval(const vector<double>& x, const vector<double>& a, double t) {
    double p = a.back();
    for (int k = (int)a.size() - 2; k >= 0; --k) p = p * (t - x[k]) + a[k];
    return p;
}

int main() {
    cout << newton_eval({-1, 1, 2, 3}, {-3, 2, 0, 3}, 0) << "\\n";   // 5
}
`,Xe=`program newton_eval_demo
  implicit none
  real(8) :: x(4), a(4), t, p
  integer :: k
  x = [-1d0, 1d0, 2d0, 3d0]; a = [-3d0, 2d0, 0d0, 3d0]; t = 0d0
  p = a(4)
  do k = 3, 1, -1
     p = p*(t - x(k)) + a(k)
  end do
  print '(A, F8.3)', 'p = ', p   ! 5
end program newton_eval_demo
`,Ye=`package main

import "fmt"

// Evaluate the Newton form by nested (Horner-like) multiplication.
func newtonEval(x, a []float64, t float64) float64 {
	p := a[len(a)-1]
	for k := len(a) - 2; k >= 0; k-- {
		p = p*(t-x[k]) + a[k]
	}
	return p
}

func main() {
	fmt.Println(newtonEval([]float64{-1, 1, 2, 3}, []float64{-3, 2, 0, 3}, 0)) // 5
}
`,Je=`function newton_eval(x, a, t)
    p = a[end]
    for k in length(a)-1:-1:1
        p = p * (t - x[k]) + a[k]
    end
    return p
end

println(newton_eval([-1, 1, 2, 3], [-3, 2, 0, 3], 0))   # 5
`,Ze=`// Evaluate the Newton form by nested (Horner-like) multiplication.
function newtonEval(x, a, t) {
  let p = a[a.length - 1];
  for (let k = a.length - 2; k >= 0; k--) p = p * (t - x[k]) + a[k];
  return p;
}
console.log(newtonEval([-1, 1, 2, 3], [-3, 2, 0, 3], 0)); // 5
`,en=`function p = newton_eval(x, a, t)
% NEWTON_EVAL  Evaluate the Newton form by nested multiplication.
    p = a(end);
    for k = numel(a)-1:-1:1
        p = p*(t - x(k)) + a(k);
    end
end

% --- Demo ---
disp(newton_eval([-1 1 2 3], [-3 2 0 3], 0));   % 5
`,nn=`def newton_eval(x, a, t):
    """Evaluate the Newton form  a_0 + a_1(t-x_0) + a_2(t-x_0)(t-x_1) + ...
    by nested (Horner-like) multiplication."""
    p = a[-1]
    for k in range(len(a) - 2, -1, -1):
        p = p * (t - x[k]) + a[k]
    return p


if __name__ == "__main__":
    x = [-1, 1, 2, 3]
    a = [-3, 2, 0, 3]          # divided differences of the demo data
    print(newton_eval(x, a, 0))   # 5
`,tn=`# Evaluate the Newton form  a_0 + a_1(t-x_0) + a_2(t-x_0)(t-x_1) + ...
# by nested (Horner-like) multiplication.
newton_eval <- function(x, a, t) {
  p <- a[length(a)]
  for (k in (length(a) - 1):1) {
    p <- p * (t - x[k]) + a[k]
  }
  p
}

x <- c(-1, 1, 2, 3)
a <- c(-3, 2, 0, 3)        # divided differences of the demo data
cat(newton_eval(x, a, 0), "\\n")   # 5
`,an=`// Evaluate the Newton form by nested (Horner-like) multiplication.
fn newton_eval(x: &[f64], a: &[f64], t: f64) -> f64 {
    let mut p = *a.last().unwrap();
    for k in (0..a.len() - 1).rev() {
        p = p * (t - x[k]) + a[k];
    }
    p
}
fn main() {
    println!("{}", newton_eval(&[-1.0, 1.0, 2.0, 3.0], &[-3.0, 2.0, 0.0, 3.0], 0.0));   // 5
}
`,on=`newtonEval[x_, a_, t_] := Module[{p = Last[a], k},
   Do[p = p (t - x[[k]]) + a[[k]], {k, Length[a] - 1, 1, -1}]; p];
Print[newtonEval[{-1, 1, 2, 3}, {-3, 2, 0, 3}, 0]]   (* 5 *)
`,sn=`#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;

// Newton divided-difference coefficients a_i = f[x_0,...,x_i].
Vec divided_differences(const Vec& x, const Vec& y) {
    int n = x.size();
    Vec a = y;
    for (int j = 1; j < n; ++j)
        for (int i = n - 1; i >= j; --i)
            a[i] = (a[i] - a[i - 1]) / (x[i] - x[i - j]);
    return a;
}

double newton_eval(const Vec& x, const Vec& a, double t) {
    double p = a.back();
    for (int k = (int)a.size() - 2; k >= 0; --k) p = p * (t - x[k]) + a[k];
    return p;
}

int main() {
    Vec x = {-1, 1, 2, 3}, y = {-3, 1, 3, 29};
    Vec a = divided_differences(x, y);
    cout << "divided differences:";
    for (double v : a) cout << " " << v;
    cout << "\\np(0) = " << newton_eval(x, a, 0.0) << "\\n";
}
`,ln=`program divided_differences_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: x(n), a(n)
  integer :: i, j
  x = [-1d0, 1d0, 2d0, 3d0]; a = [-3d0, 1d0, 3d0, 29d0]
  do j = 2, n
     do i = n, j, -1
        a(i) = (a(i) - a(i-1)) / (x(i) - x(i-j+1))
     end do
  end do
  print '(A, 4F8.3)', 'a = ', a   ! -3 2 0 3
end program divided_differences_demo
`,rn=`package main

import "fmt"

// Newton divided-difference coefficients a_i = f[x_0, ..., x_i].
func dividedDifferences(x, y []float64) []float64 {
	n := len(x)
	a := append([]float64{}, y...)
	for j := 1; j < n; j++ {
		for i := n - 1; i >= j; i-- {
			a[i] = (a[i] - a[i-1]) / (x[i] - x[i-j])
		}
	}
	return a
}

func main() {
	fmt.Println(dividedDifferences([]float64{-1, 1, 2, 3}, []float64{-3, 1, 3, 29})) // [-3 2 0 3]
}
`,xn=`function divided_differences(x, y)
    a = collect(float.(y)); n = length(x)
    for j in 2:n
        for i in n:-1:j
            a[i] = (a[i] - a[i-1]) / (x[i] - x[i-j+1])
        end
    end
    return a
end

x = [-1.0, 1, 2, 3]; y = [-3.0, 1, 3, 29]
println(divided_differences(x, y))   # [-3, 2, 0, 3]
`,_n=`// Newton divided-difference coefficients a_i = f[x_0, ..., x_i].
function dividedDifferences(x, y) {
  const n = x.length;
  const a = [...y];
  for (let j = 1; j < n; j++)
    for (let i = n - 1; i >= j; i--) a[i] = (a[i] - a[i - 1]) / (x[i] - x[i - j]);
  return a;
}
console.log(dividedDifferences([-1, 1, 2, 3], [-3, 1, 3, 29])); // [-3, 2, 0, 3]
`,$n=`function a = divided_differences(x, y)
% DIVIDED_DIFFERENCES  Newton coefficients a_i = f[x_1,...,x_i].
    x = x(:); a = y(:); n = numel(x);
    for j = 2:n
        for i = n:-1:j
            a(i) = (a(i) - a(i-1)) / (x(i) - x(i-j+1));
        end
    end
end

% --- Demo ---
x = [-1 1 2 3]; y = [-3 1 3 29];
disp(divided_differences(x, y)');       % -> -3  2  0  3
`,dn=`import numpy as np


def divided_differences(x, y):
    """Newton coefficients a_i = f[x_0, ..., x_i] (in place)."""
    x = np.asarray(x, float)
    a = np.asarray(y, float).copy()
    n = len(x)
    for j in range(1, n):
        for i in range(n - 1, j - 1, -1):
            a[i] = (a[i] - a[i - 1]) / (x[i] - x[i - j])
    return a


def newton_eval(x, a, t):
    """Evaluate the Newton form by Horner's scheme."""
    p = a[-1]
    for k in range(len(a) - 2, -1, -1):
        p = p * (t - x[k]) + a[k]
    return p


if __name__ == "__main__":
    x = [-1, 1, 2, 3]
    y = [-3, 1, 3, 29]
    a = divided_differences(x, y)
    print("divided differences:", a)
    print("p(0) =", newton_eval(x, a, 0.0))
`,fn=`# Newton divided differences and Horner evaluation of the Newton form.
divided_differences <- function(x, y) {
  a <- as.numeric(y)
  n <- length(x)
  for (j in 1:(n - 1)) {
    for (i in n:(j + 1)) {
      a[i] <- (a[i] - a[i - 1]) / (x[i] - x[i - j])
    }
  }
  a
}

newton_eval <- function(x, a, t) {
  p <- a[length(a)]
  for (k in (length(a) - 1):1) {
    p <- p * (t - x[k]) + a[k]
  }
  p
}

x <- c(-1, 1, 2, 3)
y <- c(-3, 1, 3, 29)
a <- divided_differences(x, y)
cat("divided differences:", a, "\\n")
cat("p(0) =", newton_eval(x, a, 0.0), "\\n")
`,hn=`// Newton divided-difference coefficients a_i = f[x_0, ..., x_i].
fn divided_differences(x: &[f64], y: &[f64]) -> Vec<f64> {
    let n = x.len();
    let mut a = y.to_vec();
    for j in 1..n {
        for i in (j..n).rev() {
            a[i] = (a[i] - a[i - 1]) / (x[i] - x[i - j]);
        }
    }
    a
}
fn main() {
    let x = [-1.0, 1.0, 2.0, 3.0];
    let y = [-3.0, 1.0, 3.0, 29.0];
    println!("{:?}", divided_differences(&x, &y));   // [-3, 2, 0, 3]
}
`,cn=`dividedDifferences[x_, y_] := Module[{a = N[y], n = Length[x], i, j},
   Do[a[[i]] = (a[[i]] - a[[i - 1]])/(x[[i]] - x[[i - j + 1]]),
    {j, 2, n}, {i, n, j, -1}];
   a];
Print[dividedDifferences[{-1, 1, 2, 3}, {-3, 1, 3, 29}]]
`,mn=`#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;

// Natural cubic spline: per-interval S_i(t)=a+b(t-x_i)+c(t-x_i)^2+d(t-x_i)^3.
void natural_cubic_spline(const Vec& x, const Vec& y, Vec& a, Vec& b, Vec& c, Vec& d) {
    int n = x.size();
    Vec h(n - 1);
    for (int i = 0; i < n - 1; ++i) h[i] = x[i + 1] - x[i];
    // tridiagonal system for c (second-derivative coefficients), natural ends
    Vec lo(n, 0), di(n, 1), up(n, 0), r(n, 0);
    for (int i = 1; i < n - 1; ++i) {
        lo[i] = h[i - 1]; di[i] = 2 * (h[i - 1] + h[i]); up[i] = h[i];
        r[i] = 3 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1]);
    }
    Vec cf(n);                          // Thomas algorithm
    for (int i = 1; i < n; ++i) { double w = lo[i] / di[i - 1]; di[i] -= w * up[i - 1]; r[i] -= w * r[i - 1]; }
    cf[n - 1] = r[n - 1] / di[n - 1];
    for (int i = n - 2; i >= 0; --i) cf[i] = (r[i] - up[i] * cf[i + 1]) / di[i];
    a.assign(n - 1, 0); b.assign(n - 1, 0); c.assign(n - 1, 0); d.assign(n - 1, 0);
    for (int i = 0; i < n - 1; ++i) {
        a[i] = y[i];
        b[i] = (y[i + 1] - y[i]) / h[i] - h[i] * (2 * cf[i] + cf[i + 1]) / 3;
        c[i] = cf[i];
        d[i] = (cf[i + 1] - cf[i]) / (3 * h[i]);
    }
}

int main() {
    Vec x = {0, 1, 2, 3}, y = {0, 1, 0, 1}, a, b, c, d;
    natural_cubic_spline(x, y, a, b, c, d);
    auto pr = [](const char* s, const Vec& v){ cout << s; for (double q : v) cout << " " << q; cout << "\\n"; };
    pr("a =", a); pr("b =", b); pr("c =", c); pr("d =", d);
}
`,pn=`program spline_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: x(n), y(n), h(n-1), A(n,n), rhs(n), c(n), aa(n-1)
  integer :: i
  x = [0d0, 1d0, 2d0, 3d0]; y = [0d0, 1d0, 0d0, 1d0]
  do i = 1, n-1
     h(i) = x(i+1) - x(i)
  end do
  A = 0d0; rhs = 0d0; A(1,1) = 1d0; A(n,n) = 1d0
  do i = 2, n-1
     A(i,i-1) = h(i-1); A(i,i) = 2d0*(h(i-1)+h(i)); A(i,i+1) = h(i)
     rhs(i) = 3d0*((y(i+1)-y(i))/h(i) - (y(i)-y(i-1))/h(i-1))
  end do
  c = gauss_solve(A, rhs)
  aa = y(1:n-1)
  print '(A, 3F8.3)', 'a = ', aa   ! 0 1 0
contains
  function gauss_solve(Ain, bin) result(xx)
    real(8), intent(in) :: Ain(n,n), bin(n)
    real(8) :: M(n,n), cc(n), xx(n), f, tmp(n), tb
    integer :: i, j, k, p
    M = Ain; cc = bin
    do k = 1, n
       p = k
       do i = k+1, n
          if (abs(M(i,k)) > abs(M(p,k))) p = i
       end do
       tmp = M(k,:); M(k,:) = M(p,:); M(p,:) = tmp
       tb = cc(k); cc(k) = cc(p); cc(p) = tb
       do i = k+1, n
          f = M(i,k)/M(k,k); M(i,k:n) = M(i,k:n) - f*M(k,k:n); cc(i) = cc(i) - f*cc(k)
       end do
    end do
    do i = n, 1, -1
       xx(i) = (cc(i) - dot_product(M(i,i+1:n), xx(i+1:n)))/M(i,i)
    end do
  end function gauss_solve
end program spline_demo
`,gn=`package main

import (
	"fmt"
	"math"
)

func solve(A [][]float64, b []float64) []float64 {
	n := len(b)
	m := make([][]float64, n)
	for i := range A {
		m[i] = append([]float64{}, A[i]...)
	}
	r := append([]float64{}, b...)
	for k := 0; k < n; k++ {
		p := k
		for i := k + 1; i < n; i++ {
			if math.Abs(m[i][k]) > math.Abs(m[p][k]) {
				p = i
			}
		}
		m[k], m[p] = m[p], m[k]
		r[k], r[p] = r[p], r[k]
		for i := k + 1; i < n; i++ {
			f := m[i][k] / m[k][k]
			for j := k; j < n; j++ {
				m[i][j] -= f * m[k][j]
			}
			r[i] -= f * r[k]
		}
	}
	x := make([]float64, n)
	for i := n - 1; i >= 0; i-- {
		s := r[i]
		for j := i + 1; j < n; j++ {
			s -= m[i][j] * x[j]
		}
		x[i] = s / m[i][i]
	}
	return x
}

// Natural cubic spline: per-interval coefficients (a, b, c, d).
func naturalCubicSpline(x, y []float64) (a, b, c, d []float64) {
	n := len(x)
	h := make([]float64, n-1)
	for i := 0; i < n-1; i++ {
		h[i] = x[i+1] - x[i]
	}
	A := make([][]float64, n)
	for i := range A {
		A[i] = make([]float64, n)
	}
	rhs := make([]float64, n)
	A[0][0] = 1
	A[n-1][n-1] = 1
	for i := 1; i < n-1; i++ {
		A[i][i-1] = h[i-1]
		A[i][i] = 2 * (h[i-1] + h[i])
		A[i][i+1] = h[i]
		rhs[i] = 3 * ((y[i+1]-y[i])/h[i] - (y[i]-y[i-1])/h[i-1])
	}
	cc := solve(A, rhs)
	for i := 0; i < n-1; i++ {
		a = append(a, y[i])
		b = append(b, (y[i+1]-y[i])/h[i]-h[i]*(2*cc[i]+cc[i+1])/3)
		c = append(c, cc[i])
		d = append(d, (cc[i+1]-cc[i])/(3*h[i]))
	}
	return
}

func main() {
	a, _, _, _ := naturalCubicSpline([]float64{0, 1, 2, 3}, []float64{0, 1, 0, 1})
	fmt.Println("a =", a)
}
`,un=`function natural_cubic_spline(x, y)
    n = length(x); h = diff(x)
    A = zeros(n, n); rhs = zeros(n)
    A[1, 1] = 1; A[n, n] = 1                       # natural ends c_1 = c_n = 0
    for i in 2:n-1
        A[i, i-1] = h[i-1]; A[i, i] = 2*(h[i-1] + h[i]); A[i, i+1] = h[i]
        rhs[i] = 3*((y[i+1] - y[i])/h[i] - (y[i] - y[i-1])/h[i-1])
    end
    c = A \\ rhs
    a = y[1:n-1]
    b = (y[2:n] .- y[1:n-1]) ./ h .- h .* (2 .* c[1:n-1] .+ c[2:n]) ./ 3
    d = (c[2:n] .- c[1:n-1]) ./ (3 .* h)
    return a, b, c[1:n-1], d
end

a, b, c, d = natural_cubic_spline([0.0, 1, 2, 3], [0.0, 1, 0, 1])
println("a = ", a)
`,yn=`// Natural cubic spline: per-interval coefficients (a, b, c, d).
function solve(A, b) {
  const n = b.length;
  const m = A.map((r) => [...r]), r = [...b];
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[p][k])) p = i;
    [m[k], m[p]] = [m[p], m[k]]; [r[k], r[p]] = [r[p], r[k]];
    for (let i = k + 1; i < n; i++) {
      const f = m[i][k] / m[k][k];
      for (let j = k; j < n; j++) m[i][j] -= f * m[k][j];
      r[i] -= f * r[k];
    }
  }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = r[i];
    for (let j = i + 1; j < n; j++) s -= m[i][j] * x[j];
    x[i] = s / m[i][i];
  }
  return x;
}
function naturalCubicSpline(x, y) {
  const n = x.length;
  const h = Array.from({ length: n - 1 }, (_, i) => x[i + 1] - x[i]);
  const A = Array.from({ length: n }, () => new Array(n).fill(0));
  const rhs = new Array(n).fill(0);
  A[0][0] = 1; A[n - 1][n - 1] = 1;
  for (let i = 1; i < n - 1; i++) {
    A[i][i - 1] = h[i - 1]; A[i][i] = 2 * (h[i - 1] + h[i]); A[i][i + 1] = h[i];
    rhs[i] = 3 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1]);
  }
  const c = solve(A, rhs);
  const a = y.slice(0, n - 1);
  const b = a.map((_, i) => (y[i + 1] - y[i]) / h[i] - (h[i] * (2 * c[i] + c[i + 1])) / 3);
  const d = a.map((_, i) => (c[i + 1] - c[i]) / (3 * h[i]));
  return { a, b, c: c.slice(0, n - 1), d };
}
console.log('a =', naturalCubicSpline([0, 1, 2, 3], [0, 1, 0, 1]).a);
`,kn=`function [a, b, c, d] = natural_cubic_spline(x, y)
% NATURAL_CUBIC_SPLINE  Per-interval coefficients with
% S_i(t) = a_i + b_i (t-x_i) + c_i (t-x_i)^2 + d_i (t-x_i)^3.
    x = x(:); y = y(:); n = numel(x);
    h = diff(x);
    A = zeros(n); rhs = zeros(n,1);
    A(1,1) = 1; A(n,n) = 1;                 % natural ends: c_1 = c_n = 0
    for i = 2:n-1
        A(i,i-1) = h(i-1);
        A(i,i)   = 2*(h(i-1) + h(i));
        A(i,i+1) = h(i);
        rhs(i)   = 3*((y(i+1)-y(i))/h(i) - (y(i)-y(i-1))/h(i-1));
    end
    c = A \\ rhs;
    a = y(1:n-1);
    b = (y(2:n) - y(1:n-1))./h - h.*(2*c(1:n-1) + c(2:n))/3;
    d = (c(2:n) - c(1:n-1))./(3*h);
    c = c(1:n-1);
end

% --- Demo ---
[a, b, c, d] = natural_cubic_spline([0; 1; 2; 3], [0; 1; 0; 1]);
disp([a, b, c, d]);                          % rows: [a_i b_i c_i d_i] per interval
`,bn=`import numpy as np


def natural_cubic_spline(x, y):
    """Natural cubic spline. Returns per-interval (a, b, c, d) with
    S_i(t) = a_i + b_i (t - x_i) + c_i (t - x_i)^2 + d_i (t - x_i)^3."""
    x = np.asarray(x, float)
    y = np.asarray(y, float)
    n = len(x)
    h = np.diff(x)
    A = np.zeros((n, n))
    rhs = np.zeros(n)
    A[0, 0] = A[-1, -1] = 1.0                          # natural: c_0 = c_{n-1} = 0
    for i in range(1, n - 1):
        A[i, i - 1] = h[i - 1]
        A[i, i] = 2 * (h[i - 1] + h[i])
        A[i, i + 1] = h[i]
        rhs[i] = 3 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1])
    c = np.linalg.solve(A, rhs)
    a = y[:-1]
    b = (y[1:] - y[:-1]) / h - h * (2 * c[:-1] + c[1:]) / 3
    d = (c[1:] - c[:-1]) / (3 * h)
    return a, b, c[:-1], d


if __name__ == "__main__":
    x = [0, 1, 2, 3]
    y = [0, 1, 0, 1]
    a, b, c, d = natural_cubic_spline(x, y)
    print("a =", a)
    print("b =", b)
    print("c =", c)
    print("d =", d)
`,vn=`# Natural cubic spline. Returns per-interval (a, b, c, d) with
# S_i(t) = a_i + b_i (t - x_i) + c_i (t - x_i)^2 + d_i (t - x_i)^3.
natural_cubic_spline <- function(x, y) {
  n <- length(x)
  h <- diff(x)
  A <- matrix(0, n, n)
  rhs <- numeric(n)
  A[1, 1] <- 1.0                        # natural: c_0 = c_{n-1} = 0
  A[n, n] <- 1.0
  for (i in 2:(n - 1)) {
    A[i, i - 1] <- h[i - 1]
    A[i, i]     <- 2 * (h[i - 1] + h[i])
    A[i, i + 1] <- h[i]
    rhs[i] <- 3 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1])
  }
  c <- solve(A, rhs)
  a <- y[-n]
  b <- (y[-1] - y[-n]) / h - h * (2 * c[-n] + c[-1]) / 3
  d <- (c[-1] - c[-n]) / (3 * h)
  list(a = a, b = b, c = c[-n], d = d)
}

x <- c(0, 1, 2, 3)
y <- c(0, 1, 0, 1)
res <- natural_cubic_spline(x, y)
cat("a =", res$a, "\\n")
cat("b =", res$b, "\\n")
cat("c =", res$c, "\\n")
cat("d =", res$d, "\\n")
`,zn=`// Natural cubic spline: per-interval coefficients (a, b, c, d).
fn solve(mut a: Vec<Vec<f64>>, mut b: Vec<f64>) -> Vec<f64> {
    let n = b.len();
    for k in 0..n {
        let mut p = k;
        for i in k + 1..n { if a[i][k].abs() > a[p][k].abs() { p = i; } }
        a.swap(k, p); b.swap(k, p);
        for i in k + 1..n {
            let f = a[i][k] / a[k][k];
            for j in k..n { a[i][j] -= f * a[k][j]; }
            b[i] -= f * b[k];
        }
    }
    let mut x = vec![0.0; n];
    for i in (0..n).rev() {
        let mut s = b[i];
        for j in i + 1..n { s -= a[i][j] * x[j]; }
        x[i] = s / a[i][i];
    }
    x
}
fn natural_cubic_spline(x: &[f64], y: &[f64]) -> (Vec<f64>, Vec<f64>, Vec<f64>, Vec<f64>) {
    let n = x.len();
    let h: Vec<f64> = (0..n - 1).map(|i| x[i + 1] - x[i]).collect();
    let mut m = vec![vec![0.0; n]; n];
    let mut rhs = vec![0.0; n];
    m[0][0] = 1.0; m[n - 1][n - 1] = 1.0;
    for i in 1..n - 1 {
        m[i][i - 1] = h[i - 1]; m[i][i] = 2.0 * (h[i - 1] + h[i]); m[i][i + 1] = h[i];
        rhs[i] = 3.0 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1]);
    }
    let c = solve(m, rhs);
    let a: Vec<f64> = y[..n - 1].to_vec();
    let b: Vec<f64> = (0..n - 1).map(|i| (y[i + 1] - y[i]) / h[i] - h[i] * (2.0 * c[i] + c[i + 1]) / 3.0).collect();
    let d: Vec<f64> = (0..n - 1).map(|i| (c[i + 1] - c[i]) / (3.0 * h[i])).collect();
    (a, b, c[..n - 1].to_vec(), d)
}
fn main() {
    let (a, _b, _c, _d) = natural_cubic_spline(&[0.0, 1.0, 2.0, 3.0], &[0.0, 1.0, 0.0, 1.0]);
    println!("a = {:?}", a);
}
`,wn=`naturalCubicSpline[x_, y_] := Module[{n = Length[x], h, A, rhs, c, a, b, d},
   h = Differences[x];
   A = ConstantArray[0., {n, n}]; rhs = ConstantArray[0., n];
   A[[1, 1]] = 1; A[[n, n]] = 1;
   Do[A[[i, i - 1]] = h[[i - 1]]; A[[i, i]] = 2 (h[[i - 1]] + h[[i]]); A[[i, i + 1]] = h[[i]];
      rhs[[i]] = 3 ((y[[i + 1]] - y[[i]])/h[[i]] - (y[[i]] - y[[i - 1]])/h[[i - 1]]), {i, 2, n - 1}];
   c = LinearSolve[A, rhs];
   a = y[[1 ;; n - 1]];
   b = (Differences[y])/h - h (2 c[[1 ;; n - 1]] + c[[2 ;; n]])/3;
   d = Differences[c]/(3 h);
   {a, b, c[[1 ;; n - 1]], d}];
Print["a = ", First@naturalCubicSpline[{0, 1, 2, 3}, {0, 1, 0, 1}]]
`,qn=Object.assign({"./hermite.cpp":Se,"./hermite.f90":Te,"./hermite.go":Ae,"./hermite.jl":He,"./hermite.js":De,"./hermite.m":Ne,"./hermite.py":Me,"./hermite.r":Ie,"./hermite.rs":Ce,"./hermite.wl":Ee,"./lagrange.cpp":Pe,"./lagrange.f90":We,"./lagrange.go":Ve,"./lagrange.jl":Qe,"./lagrange.js":Fe,"./lagrange.m":Re,"./lagrange.py":Be,"./lagrange.r":Oe,"./lagrange.rs":Ue,"./lagrange.wl":Ge,"./newton-eval.cpp":Ke,"./newton-eval.f90":Xe,"./newton-eval.go":Ye,"./newton-eval.jl":Je,"./newton-eval.js":Ze,"./newton-eval.m":en,"./newton-eval.py":nn,"./newton-eval.r":tn,"./newton-eval.rs":an,"./newton-eval.wl":on,"./newton.cpp":sn,"./newton.f90":ln,"./newton.go":rn,"./newton.jl":xn,"./newton.js":_n,"./newton.m":$n,"./newton.py":dn,"./newton.r":fn,"./newton.rs":hn,"./newton.wl":cn,"./spline.cpp":mn,"./spline.f90":pn,"./spline.go":gn,"./spline.jl":un,"./spline.js":yn,"./spline.m":kn,"./spline.py":bn,"./spline.r":vn,"./spline.rs":zn,"./spline.wl":wn}),q=(t,a)=>qn[`./${t}.${a}`],jn={lagrange:{en:"Lagrange interpolation (Vandermonde system)",hu:"Lagrange-interpoláció (Vandermonde-rendszer)"},newton:{en:"Newton's divided differences (coefficients)",hu:"Newton-féle osztott differenciák (együtthatók)"},"newton-eval":{en:"Newton polynomial evaluation (nested form)",hu:"Newton-polinom kiértékelése (beágyazott alak)"},hermite:{en:"Hermite interpolation",hu:"Hermite-interpoláció"},spline:{en:"Natural cubic spline",hu:"Természetes köbös spline"}},Ln=t=>({id:t,caption:jn[t],snippets:{matlab:q(t,"m"),python:q(t,"py"),cpp:q(t,"cpp"),julia:q(t,"jl"),rust:q(t,"rs"),fortran:q(t,"f90"),wolfram:q(t,"wl"),javascript:q(t,"js"),go:q(t,"go"),r:q(t,"r")}}),Sn={lagrange:["lagrange"],newton:["newton","newton-eval"],hermite:["hermite"],spline:["spline"]};function Tn(t){return(Sn[t]??[]).map(Ln)}function C({str:t,method:a,points:s,derivatives:i,allowCompare:r,showTable:o,enableDerivatives:l}){const{lang:_}=V(),n=t.lessons[a],$=Le(a,_),m=Tn(a);return e.jsxs("article",{className:"lesson",children:[e.jsxs("header",{children:[e.jsx("h2",{children:n.title}),e.jsx("p",{className:"intro",children:n.intro})]}),e.jsxs("section",{className:"theorem-card",children:[e.jsx("div",{className:"theorem-tag",children:n.theoremTitle}),e.jsx(Z,{block:!0,children:n.theorem}),e.jsx("p",{children:n.body})]}),$&&e.jsxs("details",{className:"lesson__theory",open:!0,children:[e.jsx("summary",{children:_==="hu"?"Elmélet":"Theory"}),e.jsx(W,{markdown:$})]}),m.map(h=>e.jsx(Y,{snippets:h.snippets,caption:h.caption},h.id)),e.jsxs("p",{className:"tryit",children:["👉 ",n.tryIt]}),e.jsx(fe,{str:t,initialPoints:s,initialDerivs:i,primary:a,allowCompare:r,showTable:o,enableDerivatives:l}),e.jsx(me,{deck:a}),e.jsx(ge,{deck:a})]})}const E={lagrange:"#ff5d8f",newton:"#f5a623",hermite:"#9b5de5",spline:"#00bbf9"},U=t=>Math.cos(t),P=[-Math.PI-.5,Math.PI+.5],An=[-2.5,2.5];function Hn(){const t=Array.from({length:40}),a=["#ff5d8f","#f5a623","#9b5de5","#00bbf9","#3ddc97"];return e.jsx("div",{className:"confetti","aria-hidden":!0,children:t.map((s,i)=>e.jsx("span",{style:{left:`${Math.random()*100}%`,background:a[i%a.length],animationDelay:`${Math.random()*.6}s`,transform:`rotate(${Math.random()*360}deg)`}},i))})}function Dn({str:t}){const[a,s]=p.useState([{x:-3,y:-.5},{x:-1.2,y:.5},{x:.5,y:.7},{x:2,y:-.2},{x:3,y:-.8}]),[i,r]=p.useState("spline"),[o,l]=p.useState(!0),_=p.useMemo(()=>[...a].sort((c,u)=>c.x-u.x),[a]),n=p.useMemo(()=>Q(i,_),[i,_]),$=p.useMemo(()=>{let c=0;for(let u=0;u<=80;u++){const b=P[0]+(P[1]-P[0])*u/80,L=Math.abs(n(b)-U(b));Number.isFinite(L)&&(c=Math.max(c,L))}return c},[n]),m=$<.18,h=[{fn:n,color:E[i],label:t.methods[i]}];o&&h.push({fn:U,color:"#8aa0b5",label:"cos x",dashed:!0});const g=(c,u,b)=>s(L=>L.map((T,A)=>A===c?{x:u,y:b}:T));return e.jsxs("div",{className:"challenge",children:[e.jsxs("div",{className:"challenge-head",children:[e.jsx("h2",{children:t.nav.playground}),e.jsx("p",{className:"intro",children:t.tagline})]}),e.jsxs("div",{className:"challenge-bar",children:[e.jsx("div",{className:"methodpills",children:Object.keys(E).map(c=>e.jsx("button",{className:`pill ${i===c?"on":""}`,style:i===c?{background:E[c],borderColor:E[c]}:{},onClick:()=>r(c),children:t.methods[c]},c))}),e.jsxs("label",{className:"chip",children:[e.jsx("input",{type:"checkbox",checked:o,onChange:()=>l(c=>!c)}),t.ui.showCos]})]}),e.jsxs("div",{className:"challenge-plotwrap",children:[e.jsx(G,{points:a,curves:h,domain:P,range:An,onDrag:g,width:720,height:440}),m&&e.jsx(Hn,{})]}),e.jsx("div",{className:`challenge-status ${m?"win":""}`,children:m?e.jsx("strong",{children:t.ui.nailedIt}):e.jsxs("span",{children:["🎯 ",t.ui.challengeHint," ",e.jsxs("em",{children:["(max Δ = ",$.toFixed(2),")"]})]})})]})}const Nn=[{id:"play",no:"6·play",title:{en:w.en.nav.playground,hu:w.hu.nav.playground},blurb:{en:"",hu:""}},{id:"lagrange",no:"6.1",title:{en:w.en.nav.lagrange,hu:w.hu.nav.lagrange},blurb:{en:"",hu:""}},{id:"newton",no:"6.2",title:{en:w.en.nav.newton,hu:w.hu.nav.newton},blurb:{en:"",hu:""}},{id:"hermite",no:"6.4",title:{en:w.en.nav.hermite,hu:w.hu.nav.hermite},blurb:{en:"",hu:""}},{id:"spline",no:"6.5",title:{en:w.en.nav.spline,hu:w.hu.nav.spline},blurb:{en:"",hu:""}}];function Wn(){const{lang:t}=V(),a=w[t],s={scrollMarginTop:"calc(var(--nav-h) + var(--scrolly-topbar-h, 44px) + 8px)"};return e.jsxs("div",{className:"app ch-interpolation",children:[e.jsx(J,{sections:Nn}),e.jsx("header",{className:"topbar",children:e.jsxs("div",{className:"brand",children:[e.jsx("span",{className:"logo",children:"📈"}),e.jsxs("div",{children:[e.jsx("div",{className:"brand-title",children:a.appTitle}),e.jsx("div",{className:"brand-sub",children:a.tagline})]})]})}),e.jsxs("main",{className:"content",children:[e.jsx("section",{id:"play",style:s,children:e.jsx(Dn,{str:a})}),e.jsx("section",{id:"lagrange",style:s,children:e.jsx(C,{str:a,method:"lagrange",points:[{x:-1,y:-3},{x:1,y:1},{x:2,y:3},{x:3,y:29}],allowCompare:!0})}),e.jsx("section",{id:"newton",style:s,children:e.jsx(C,{str:a,method:"newton",points:[{x:-1,y:-2},{x:1,y:0},{x:2,y:-2},{x:3,y:2}],showTable:!0,allowCompare:!0})}),e.jsx("section",{id:"hermite",style:s,children:e.jsx(C,{str:a,method:"hermite",points:[{x:-1,y:2},{x:1,y:4},{x:2,y:11}],derivatives:[3,-5,30],enableDerivatives:!0})}),e.jsx("section",{id:"spline",style:s,children:e.jsx(C,{str:a,method:"spline",points:[{x:0,y:.5},{x:1,y:.1},{x:1.5,y:2.5},{x:2,y:-1},{x:3,y:-.5},{x:4,y:0}],allowCompare:!0})})]}),e.jsx("footer",{className:"foot",children:"InterPlay · Numerical Analysis · Interpolation"})]})}export{Wn as default};
