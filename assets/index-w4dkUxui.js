import{r as p,j as e,d as Q}from"./index-D797N9su.js";import{k as Y}from"./CodeBlock-7v-YYA2_.js";import{M as E}from"./MarkdownView-BdnOAo3p.js";import{C as Z,Q as J,S as ee}from"./Quiz-3I2O2pRl.js";import{a as ne,h as ie,c as te,n as ae,b as oe,l as se}from"./hermite.hu-BOdAixwp.js";import"./normalizeMath-COD4CUa9.js";import"./index-DFosOjOY.js";const w={en:{appTitle:"InterPlay",tagline:"Play with interpolation — Chapter 6",nav:{playground:"Playground",lagrange:"6.1 Lagrange",newton:"6.3 Newton",hermite:"6.4 Hermite",spline:"6.5 Spline"},methods:{lagrange:"Lagrange",newton:"Newton (divided diff.)",hermite:"Hermite",spline:"Natural cubic spline"},ui:{addPoint:"+ point",removePoint:"− point",reset:"Reset",dragHint:"Drag the dots to move the data points and watch the curve react.",showCos:"Show cos x",compareAll:"Compare all methods",derivatives:"Derivatives (Hermite)",challenge:"🎯 Challenge",challengeHint:"Move your points so the curve matches the dashed target!",nailedIt:"Nailed it! 🎉",points:"Data points",value:"y",deriv:"y′",light:"Light",dark:"Dark",table:"Divided-difference table",coefficients:"Newton coefficients",polynomialAt:"Evaluate at x ="},lessons:{lagrange:{title:"6.1 Lagrange Interpolation",intro:"Given pairwise different mesh points x₀,…,xₙ and values y₀,…,yₙ, we look for the unique polynomial of degree ≤ n through all points.",theoremTitle:"Theorem 6.1",theorem:"L_n(x) = \\sum_{k=0}^{n} y_k \\, l_k(x), \\qquad l_k(x)=\\prod_{i\\neq k}\\frac{x-x_i}{x_k-x_i}",body:"Each basis polynomial l_k equals 1 at x_k and 0 at the other nodes, so L_n hits every data point. Uniqueness follows from the Fundamental Theorem of Algebra.",tryIt:"Drag points below. With many equidistant nodes, watch the edges oscillate (Runge phenomenon)."},newton:{title:"6.3 Newton's Divided Difference Form",intro:"The same polynomial, written so that adding a new point only appends one term. Coefficients are divided differences.",theoremTitle:"Formula 6.6",theorem:"L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)",body:"Build the triangular table: each entry is the difference of the two to its left, divided by the spread of mesh points. The top row gives the coefficients.",tryIt:"Edit the points and watch the divided-difference table and coefficients update live."},hermite:{title:"6.4 Hermite Interpolation",intro:"Now we match function values AND derivatives at each node, giving a polynomial of degree ≤ 2n+1.",theoremTitle:"Theorem 6.18",theorem:"H_{2n+1}(x)=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots",body:"Each node is listed twice in the divided-difference table; the first divided difference of a repeated node is the given derivative value y′.",tryIt:"Set both y and y′ for each point; the tangent slope of the curve at each node matches y′."},spline:{title:"6.5 Spline Interpolation",intro:"Instead of one high-degree polynomial, join cubic pieces that stay C² — smooth and oscillation-free.",theoremTitle:"Theorem 6.22",theorem:"S_i(x)=a_i+b_i(x-x_i)+c_i(x-x_i)^2+d_i(x-x_i)^3,\\quad S''(x_0)=S''(x_n)=0",body:"The continuity conditions reduce to a tridiagonal, diagonally dominant linear system for the cᵢ — so the natural cubic spline always exists and is unique.",tryIt:"Compare the spline with the Lagrange curve on the same points — the spline never blows up at the edges."}}},hu:{appTitle:"InterPlay",tagline:"Játssz az interpolációval — 6. fejezet",nav:{playground:"Játszótér",lagrange:"6.1 Lagrange",newton:"6.3 Newton",hermite:"6.4 Hermite",spline:"6.5 Spline"},methods:{lagrange:"Lagrange",newton:"Newton (osztott diff.)",hermite:"Hermite",spline:"Természetes köbös spline"},ui:{addPoint:"+ pont",removePoint:"− pont",reset:"Alaphelyzet",dragHint:"Húzd a pontokat, és figyeld, hogyan reagál a görbe.",showCos:"cos x mutatása",compareAll:"Összes módszer összevetése",derivatives:"Deriváltak (Hermite)",challenge:"🎯 Kihívás",challengeHint:"Mozgasd a pontjaidat, hogy a görbe illeszkedjen a szaggatott célgörbére!",nailedIt:"Megvan! 🎉",points:"Alappontok",value:"y",deriv:"y′",light:"Világos",dark:"Sötét",table:"Osztott differenciák táblázata",coefficients:"Newton-együtthatók",polynomialAt:"Kiértékelés itt: x ="},lessons:{lagrange:{title:"6.1 Lagrange-interpoláció",intro:"Adott páronként különböző x₀,…,xₙ alappontok és y₀,…,yₙ értékek esetén keressük az egyértelmű, legfeljebb n-edfokú polinomot, amely átmegy minden ponton.",theoremTitle:"6.1. tétel",theorem:"L_n(x) = \\sum_{k=0}^{n} y_k \\, l_k(x), \\qquad l_k(x)=\\prod_{i\\neq k}\\frac{x-x_i}{x_k-x_i}",body:"Minden l_k alappolinom x_k-ban 1, a többi alappontban 0, így L_n minden adatponton átmegy. Az egyértelműség az algebra alaptételéből következik.",tryIt:"Húzd a pontokat. Sok ekvidisztáns alappontnál figyeld a szélek oszcillációját (Runge-jelenség)."},newton:{title:"6.3 A Lagrange-polinom Newton-féle alakja",intro:"Ugyanaz a polinom úgy felírva, hogy új pont hozzávétele csak egy taggal bővít. Az együtthatók osztott differenciák.",theoremTitle:"(6.6) képlet",theorem:"L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)",body:"Építsd fel a háromszög-táblázatot: minden elem a tőle balra lévő kettő különbsége, osztva a megfelelő alappontok különbségével. A felső sor adja az együtthatókat.",tryIt:"Módosítsd a pontokat, és nézd, ahogy a táblázat és az együtthatók élőben frissülnek."},hermite:{title:"6.4 Hermite-interpoláció",intro:"Most a függvényértékeket ÉS a deriváltakat is illesztjük minden alappontban, így legfeljebb 2n+1-edfokú polinomot kapunk.",theoremTitle:"6.18. tétel",theorem:"H_{2n+1}(x)=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots",body:"Minden alappont kétszer szerepel a táblázatban; az ismételt alappont elsőrendű osztott differenciája a megadott y′ derivált.",tryIt:"Állítsd be minden ponthoz az y és y′ értéket; a görbe érintőjének meredeksége az alappontban épp y′."},spline:{title:"6.5 Spline-interpoláció",intro:"Egyetlen magasfokú polinom helyett köbös darabokat illesztünk össze C²-folytonosan — sima és oszcillációmentes.",theoremTitle:"6.22. tétel",theorem:"S_i(x)=a_i+b_i(x-x_i)+c_i(x-x_i)^2+d_i(x-x_i)^3,\\quad S''(x_0)=S''(x_n)=0",body:"A folytonossági feltételek tridiagonális, diagonálisan domináns lineáris rendszerre vezetnek a cᵢ-kre — így a természetes köbös spline mindig létezik és egyértelmű.",tryIt:"Vesd össze a spline-t a Lagrange-görbével ugyanazon pontokon — a spline a széleken sosem szökik el."}}}};function re({children:i,block:a=!1}){const s=p.useRef(null);return p.useEffect(()=>{s.current&&Y.render(i,s.current,{throwOnError:!1,displayMode:a})},[i,a]),e.jsx("span",{ref:s,className:a?"tex-block":"tex-inline"})}const y=36;function K({points:i,curves:a,domain:s,range:t,onDrag:l,width:o=640,height:r=420}){const f=p.useRef(null),n=p.useRef(null),[_,m]=s,[h,u]=t,$=p.useCallback(d=>y+(d-_)/(m-_)*(o-2*y),[_,m,o]),g=p.useCallback(d=>r-y-(d-h)/(u-h)*(r-2*y),[h,u,r]),k=p.useCallback(d=>_+(d-y)/(o-2*y)*(m-_),[_,m,o]),S=p.useCallback(d=>h+(r-y-d)/(r-2*y)*(u-h),[h,u,r]),D=d=>{let z="",x=!1;for(let c=0;c<=240;c++){const v=_+(m-_)*c/240,A=d(v);if(!Number.isFinite(A)||A<h-50*(u-h)||A>u+50*(u-h)){x=!1;continue}const M=$(v),H=g(A);z+=`${x?"L":"M"}${M.toFixed(1)} ${H.toFixed(1)} `,x=!0}return z},T=d=>{const b=f.current.getBoundingClientRect(),z=(d.clientX-b.left)/b.width*o,x=(d.clientY-b.top)/b.height*r;return{px:z,py:x}},L=d=>{if(n.current===null||!l)return;const{px:b,py:z}=T(d);let x=k(b),c=S(z);x=Math.max(_,Math.min(m,x)),c=Math.max(h,Math.min(u,c)),l(n.current,Math.round(x*100)/100,Math.round(c*100)/100)},N=[];for(let d=Math.ceil(_);d<=m;d++)N.push(d);const I=[];for(let d=Math.ceil(h);d<=u;d++)I.push(d);return e.jsxs("svg",{ref:f,className:"plot",viewBox:`0 0 ${o} ${r}`,onPointerMove:L,onPointerUp:()=>n.current=null,onPointerLeave:()=>n.current=null,role:"img",children:[N.map(d=>e.jsx("line",{className:"grid",x1:$(d),y1:y,x2:$(d),y2:r-y},`gx${d}`)),I.map(d=>e.jsx("line",{className:"grid",x1:y,y1:g(d),x2:o-y,y2:g(d)},`gy${d}`)),h<=0&&u>=0&&e.jsx("line",{className:"axis",x1:y,y1:g(0),x2:o-y,y2:g(0)}),_<=0&&m>=0&&e.jsx("line",{className:"axis",x1:$(0),y1:y,x2:$(0),y2:r-y}),N.map(d=>e.jsx("text",{className:"tick",x:$(d),y:g(0)+14,textAnchor:"middle",children:d},`tx${d}`)),a.map((d,b)=>e.jsx("path",{className:"curve",d:D(d.fn),stroke:d.color,strokeDasharray:d.dashed?"7 6":void 0,fill:"none"},b)),i.map((d,b)=>e.jsxs("g",{children:[e.jsx("circle",{className:l?"pt draggable":"pt",cx:$(d.x),cy:g(d.y),r:8,onPointerDown:z=>{l&&(z.target.setPointerCapture(z.pointerId),n.current=b)}}),e.jsx("text",{className:"ptlabel",x:$(d.x)+11,y:g(d.y)-9,children:b})]},b)),a.filter(d=>d.label).length>0&&e.jsx("g",{className:"legend",transform:`translate(${o-y-150}, ${y})`,children:a.filter(d=>d.label).map((d,b)=>e.jsxs("g",{transform:`translate(0, ${b*18})`,children:[e.jsx("line",{x1:0,y1:0,x2:22,y2:0,stroke:d.color,strokeWidth:3,strokeDasharray:d.dashed?"5 4":void 0}),e.jsx("text",{className:"legendlabel",x:28,y:4,children:d.label})]},b))})]})}const R=1e-12;function le(i,a,s){let t=1,l=1;for(let o=0;o<i.length;o++)o!==a&&(t*=s-i[o],l*=i[a]-i[o]);return l===0?NaN:t/l}function de(i,a){const s=i.map(l=>l.x);let t=0;for(let l=0;l<i.length;l++)t+=i[l].y*le(s,l,a);return t}function X(i,a){const s=i.length,t=Array.from({length:s},()=>[]);for(let l=0;l<s;l++)t[l][0]=a[l];for(let l=1;l<s;l++)for(let o=0;o<s-l;o++){const r=i[o+l]-i[o];t[o][l]=Math.abs(r)<R?NaN:(t[o+1][l-1]-t[o][l-1])/r}return t}function fe(i,a){return X(i,a)[0]}function _e(i,a,s){let t=a[a.length-1];for(let l=a.length-2;l>=0;l--)t=t*(s-i[l])+a[l];return t}function xe(i,a,s){const t=i.length,l=2*t,o=new Array(l),r=Array.from({length:l},()=>new Array(l).fill(NaN));for(let n=0;n<t;n++)o[2*n]=i[n],o[2*n+1]=i[n],r[2*n][0]=a[n],r[2*n+1][0]=a[n];for(let n=0;n<l-1;n++)o[n+1]===o[n]?r[n][1]=s[Math.floor(n/2)]:r[n][1]=(r[n+1][0]-r[n][0])/(o[n+1]-o[n]);for(let n=2;n<l;n++)for(let _=0;_<l-n;_++){const m=o[_+n]-o[_];r[_][n]=Math.abs(m)<R?NaN:(r[_+1][n-1]-r[_][n-1])/m}const f=r[0];return{z:o,table:r,coeffs:f}}function ce(i,a){const{z:s,coeffs:t}=i;let l=t[t.length-1];for(let o=t.length-2;o>=0;o--)l=l*(a-s[o])+t[o];return l}function he(i,a){const s=i.length-1;if(s<1)return[];const t=new Array(s);for(let n=0;n<s;n++)t[n]=i[n+1]-i[n];const l=Array.from({length:s+1},()=>new Array(s+1).fill(0)),o=new Array(s+1).fill(0);l[0][0]=1,l[s][s]=1;for(let n=1;n<s;n++)l[n][n-1]=t[n-1],l[n][n]=2*(t[n-1]+t[n]),l[n][n+1]=t[n],o[n]=3/t[n]*(a[n+1]-a[n])-3/t[n-1]*(a[n]-a[n-1]);const r=$e(l,o),f=[];for(let n=0;n<s;n++){const _=a[n],m=(a[n+1]-a[n])/t[n]-t[n]*(2*r[n]+r[n+1])/3,h=(r[n+1]-r[n])/(3*t[n]);f.push({x:i[n],a:_,b:m,c:r[n],d:h})}return f}function $e(i,a){const s=i.length,t=i.map(r=>r.slice()),l=a.slice();for(let r=1;r<s;r++){if(Math.abs(t[r][r-1])<R)continue;const f=t[r][r-1]/t[r-1][r-1];for(let n=0;n<s;n++)t[r][n]-=f*t[r-1][n];l[r]-=f*l[r-1]}const o=new Array(s).fill(0);for(let r=s-1;r>=0;r--){let f=l[r];for(let n=r+1;n<s;n++)f-=t[r][n]*o[n];o[r]=t[r][r]===0?0:f/t[r][r]}return o}function me(i,a,s){if(i.length===0)return NaN;let t=0;for(let r=0;r<i.length;r++)s>=i[r].x&&(t=r);const l=i[t],o=s-l.x;return l.a+l.b*o+l.c*o*o+l.d*o*o*o}function pe(i,a,s){const t=a.map(o=>o.x),l=a.map(o=>o.y);switch(i){case"lagrange":return o=>de(a,o);case"newton":{const o=fe(t,l);return r=>_e(t,o,r)}case"hermite":{const o=s??l.map(()=>0),r=xe(t,l,o);return f=>ce(r,f)}case"spline":{const o=he(t,l);return r=>me(o,t,r)}default:return()=>NaN}}const ue=X,F=pe,O=i=>Number.isFinite(i)?(Math.round(i*1e3)/1e3).toString():"—";function ge({xs:i,ys:a}){const s=ue(i,a),t=i.length;return e.jsx("div",{className:"difftable-wrap",children:e.jsx("table",{className:"difftable",children:e.jsx("tbody",{children:i.map((l,o)=>e.jsxs("tr",{children:[e.jsx("td",{className:"xi",children:O(l)}),Array.from({length:t}).map((r,f)=>{const n=f<=t-1-o&&s[o][f]!==void 0,_=o===0;return e.jsx("td",{className:n?_?"cell coeff":"cell":"cell empty",children:n?O(s[o][f]):""},f)})]},o))})})})}const G={lagrange:"#ff5d8f",newton:"#f5a623",hermite:"#9b5de5",spline:"#00bbf9"};function ye(i){const a=i.map(_=>_.x),s=i.map(_=>_.y),t=Math.min(...a),l=Math.max(...a),o=Math.min(...s),r=Math.max(...s),f=Math.max(1,(l-t)*.25),n=Math.max(1,(r-o)*.35);return{domain:[Math.floor(t-f),Math.ceil(l+f)],range:[Math.floor(o-n),Math.ceil(r+n)]}}function be({str:i,initialPoints:a,initialDerivs:s,primary:t,allowCompare:l=!1,showTable:o=!1,enableDerivatives:r=!1}){const[f,n]=p.useState(a),[_,m]=p.useState(s??a.map(()=>0)),[h,u]=p.useState({lagrange:t==="lagrange",newton:t==="newton",hermite:t==="hermite",spline:t==="spline"}),[$,g]=p.useState(0),k=p.useMemo(()=>{const x=f.map((c,v)=>v).sort((c,v)=>f[c].x-f[v].x);return{pts:x.map(c=>f[c]),dys:x.map(c=>_[c]??0)}},[f,_]),{domain:S,range:D}=p.useMemo(()=>ye(f),[f]),T=p.useMemo(()=>{const x=[];return Object.keys(h).forEach(c=>{if(!h[c]||(c==="spline"||c==="newton")&&k.pts.length<2)return;const v=F(c,k.pts,k.dys);x.push({fn:v,color:G[c],label:i.methods[c]})}),x},[h,k,i]),L=(x,c,v)=>n(A=>A.map((M,H)=>H===x?{x:c,y:v}:M)),N=()=>{const x=Math.max(...f.map(c=>c.x));n(c=>[...c,{x:Math.round((x+1)*10)/10,y:0}]),m(c=>[...c,0])},I=()=>{f.length<=2||(n(x=>x.slice(0,-1)),m(x=>x.slice(0,-1)))},d=()=>{n(a),m(s??a.map(()=>0))},z=p.useMemo(()=>F(t,k.pts,k.dys),[t,k])($);return e.jsxs("div",{className:"playground",children:[e.jsxs("div",{className:"plotcol",children:[e.jsx(K,{points:f,curves:T,domain:S,range:D,onDrag:L}),e.jsx("p",{className:"hint",children:i.ui.dragHint})]}),e.jsxs("div",{className:"controls",children:[e.jsxs("div",{className:"btnrow",children:[e.jsx("button",{onClick:N,children:i.ui.addPoint}),e.jsx("button",{onClick:I,disabled:f.length<=2,children:i.ui.removePoint}),e.jsx("button",{onClick:d,children:i.ui.reset})]}),l&&e.jsx("div",{className:"methodtoggles",children:Object.keys(h).map(x=>e.jsxs("label",{className:`chip ${h[x]?"on":""}`,children:[e.jsx("input",{type:"checkbox",checked:h[x],onChange:()=>u(c=>({...c,[x]:!c[x]}))}),e.jsx("span",{className:"swatch",style:{background:G[x]}}),i.methods[x]]},x))}),e.jsxs("div",{className:"pointeditor",children:[e.jsx("div",{className:"pe-head",children:i.ui.points}),e.jsxs("table",{className:"pe-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"x"}),e.jsx("th",{children:i.ui.value}),r&&e.jsx("th",{children:i.ui.deriv})]})}),e.jsx("tbody",{children:f.map((x,c)=>e.jsxs("tr",{children:[e.jsx("td",{className:"idx",children:c}),e.jsx("td",{children:e.jsx("input",{type:"number",step:"0.1",value:x.x,onChange:v=>L(c,parseFloat(v.target.value)||0,x.y)})}),e.jsx("td",{children:e.jsx("input",{type:"number",step:"0.1",value:x.y,onChange:v=>L(c,x.x,parseFloat(v.target.value)||0)})}),r&&e.jsx("td",{children:e.jsx("input",{type:"number",step:"0.1",value:_[c]??0,onChange:v=>m(A=>A.map((M,H)=>H===c?parseFloat(v.target.value)||0:M))})})]},c))})]})]}),e.jsxs("div",{className:"evalbox",children:[e.jsxs("label",{children:[i.ui.polynomialAt," ",e.jsx("input",{type:"number",step:"0.1",value:$,onChange:x=>g(parseFloat(x.target.value)||0)})]}),e.jsxs("span",{className:"evalresult",children:["= ",Number.isFinite(z)?(Math.round(z*1e3)/1e3).toString():"—"]})]})]}),o&&e.jsxs("div",{className:"tablecol",children:[e.jsx("h4",{children:i.ui.table}),e.jsx(ge,{xs:k.pts.map(x=>x.x),ys:k.pts.map(x=>x.y)})]})]})}const ke={lagrange:[{term:{en:"Lagrange interpolation problem (6.1)",hu:"Lagrange-interpolációs feladat (6.1)"},def:{en:"Given pairwise distinct nodes $x_0,\\dots,x_n$ and values $y_i$, find a polynomial $L_n$ of degree $\\le n$ with $L_n(x_i)=y_i$ for all $i$. It has a unique solution.",hu:"Adott páronként különböző $x_0,\\dots,x_n$ alappontok és $y_i$ értékek esetén keressünk egy legfeljebb $n$-edfokú $L_n$ polinomot, amelyre $L_n(x_i)=y_i$ minden $i$-re. Egyetlen megoldása van."}},{term:{en:"Lagrange basis polynomials $l_k$ (6.2)",hu:"Lagrange-alappolinomok $l_k$ (6.2)"},def:{en:"$l_k(x)=\\prod_{i\\ne k}\\dfrac{x-x_i}{x_k-x_i}$ — degree $n$, with $l_k(x_i)=\\delta_{ki}$ (1 at $x_k$, 0 at the other nodes). They also satisfy $\\sum_k l_k(x)=1$.",hu:"$l_k(x)=\\prod_{i\\ne k}\\dfrac{x-x_i}{x_k-x_i}$ — $n$-edfokú, $l_k(x_i)=\\delta_{ki}$ (1 az $x_k$-ban, 0 a többi alappontban). Teljesül $\\sum_k l_k(x)=1$ is."}},{term:{en:"Lagrange polynomial $L_n$ (Thm 6.1)",hu:"Lagrange-polinom $L_n$ (6.1. tétel)"},def:{en:"$L_n(x)=\\sum_{k=0}^n y_k\\,l_k(x)$ solves the interpolation problem. Uniqueness follows from the Fundamental Theorem of Algebra: a degree-$\\le n$ polynomial with $n+1$ roots is identically zero.",hu:"$L_n(x)=\\sum_{k=0}^n y_k\\,l_k(x)$ megoldja az interpolációs feladatot. Az egyértelműség az algebra alaptételéből következik: egy legfeljebb $n$-edfokú, $n+1$ gyökű polinom azonosan nulla."}},{term:{en:"Interpolation vs extrapolation",hu:"Interpoláció vs extrapoláció"},def:{en:"Using $L_n(x)$ to approximate $f(x)=y$ between the nodes is **interpolation**; outside the node interval it is **extrapolation**, which is typically far less accurate (Example 6.3).",hu:"Az $L_n(x)$ használata $f(x)=y$ közelítésére az alappontok között **interpoláció**; az alappont-intervallumon kívül **extrapoláció**, amely jellemzően sokkal pontatlanabb (6.3. példa)."}},{term:{en:"Generalized Rolle's theorem (Thm 6.4)",hu:"Általánosított Rolle-tétel (6.4. tétel)"},def:{en:"If $f\\in C^n[a,b]$ vanishes at $n+1$ distinct points, then $f^{(n)}(\\xi)=0$ for some $\\xi$. The key tool for the interpolation error formula.",hu:"Ha $f\\in C^n[a,b]$ eltűnik $n+1$ különböző pontban, akkor $f^{(n)}(\\xi)=0$ valamely $\\xi$-re. Az interpolációs hibaformula fő eszköze."}},{term:{en:"Interpolation error formula (Thm 6.5)",hu:"Interpolációs hibaformula (6.5. tétel)"},def:{en:"For $f\\in C^{n+1}$, $f(x)-L_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^n(x-x_i)$ for some $\\xi$ between the nodes and $x$ — the node-product factor explains where the error is largest.",hu:"$f\\in C^{n+1}$ esetén $f(x)-L_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^n(x-x_i)$ valamely $\\xi$-re az alappontok és $x$ között — az alappont-szorzat tényező mutatja, hol legnagyobb a hiba."}},{term:{en:"Equidistant error bound (Thm 6.6)",hu:"Egyenközű hibakorlát (6.6. tétel)"},def:{en:"For equidistant nodes on $[a,b]$, $|f(x)-L_n(x)|\\le\\dfrac{M_{n+1}}{4(n+1)}\\big(\\tfrac{b-a}{n}\\big)^{n+1}$ with $M_{n+1}=\\max|f^{(n+1)}|$.",hu:"$[a,b]$-n egyenközű alappontokra $|f(x)-L_n(x)|\\le\\dfrac{M_{n+1}}{4(n+1)}\\big(\\tfrac{b-a}{n}\\big)^{n+1}$, ahol $M_{n+1}=\\max|f^{(n+1)}|$."}},{term:{en:"Runge phenomenon",hu:"Runge-jelenség"},def:{en:"With many equidistant nodes, high-degree interpolation can oscillate wildly near the interval ends (the $M_{n+1}$ factor grows). Remedies: Chebyshev nodes or piecewise (spline) interpolation.",hu:"Sok egyenközű alapponttal a magas fokú interpoláció erősen oszcillálhat az intervallum szélein (az $M_{n+1}$ tényező nő). Megoldás: Csebisev-alappontok vagy szakaszonkénti (spline) interpoláció."}},{term:{en:"Bivariate Lagrange interpolation (6.5)",hu:"Kétváltozós Lagrange-interpoláció (6.5)"},def:{en:"On a rectangular grid, $L_{n,m}(x,y)=\\sum_{i,j}z_{ij}\\,l_i(x)\\tilde l_j(y)$ — a tensor product of 1-D Lagrange bases that matches $z_{ij}=f(x_i,y_j)$ at every grid point.",hu:"Téglalap rácson $L_{n,m}(x,y)=\\sum_{i,j}z_{ij}\\,l_i(x)\\tilde l_j(y)$ — az 1-D Lagrange-bázisok tenzorszorzata, amely minden rácspontban illeszkedik $z_{ij}=f(x_i,y_j)$-re."}}],newton:[{term:{en:"Divided difference",hu:"Osztott differencia"},def:{en:"Defined recursively: $f[x_0]=f(x_0)$, $f[x_0,x_1]=\\dfrac{f(x_1)-f(x_0)}{x_1-x_0}$, and in general $f[x_0,\\dots,x_n]=\\dfrac{f[x_1,\\dots,x_n]-f[x_0,\\dots,x_{n-1}]}{x_n-x_0}$.",hu:"Rekurzívan definiált: $f[x_0]=f(x_0)$, $f[x_0,x_1]=\\dfrac{f(x_1)-f(x_0)}{x_1-x_0}$, általában $f[x_0,\\dots,x_n]=\\dfrac{f[x_1,\\dots,x_n]-f[x_0,\\dots,x_{n-1}]}{x_n-x_0}$."}},{term:{en:"Explicit formula (Thm 6.10)",hu:"Explicit képlet (6.10. tétel)"},def:{en:"$f[x_0,\\dots,x_n]=\\sum_{k=0}^n\\dfrac{f(x_k)}{\\prod_{i\\ne k}(x_k-x_i)}$ — a symmetric closed form (proved by induction).",hu:"$f[x_0,\\dots,x_n]=\\sum_{k=0}^n\\dfrac{f(x_k)}{\\prod_{i\\ne k}(x_k-x_i)}$ — szimmetrikus zárt alak (indukcióval bizonyítva)."}},{term:{en:"Symmetry / order-independence (Cor 6.11)",hu:"Szimmetria / sorrendfüggetlenség (6.11)"},def:{en:"A divided difference does not depend on the order of its nodes — any permutation of $x_0,\\dots,x_n$ gives the same value. (And it depends continuously on the nodes, Cor 6.12.)",hu:"Az osztott differencia nem függ az alappontok sorrendjétől — az $x_0,\\dots,x_n$ bármely permutációja ugyanazt adja. (És folytonosan függ az alappontoktól, 6.12.)"}},{term:{en:"Newton's divided-difference form (6.6)",hu:"Newton-féle osztott differencia alak (6.6)"},def:{en:"$L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)$ — the *same* unique interpolating polynomial as Lagrange, just in a different basis.",hu:"$L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)$ — *ugyanaz* az egyértelmű interpolációs polinom, mint a Lagrange, csak más bázisban."}},{term:{en:"Divided-difference table",hu:"Osztott differencia tábla"},def:{en:"A triangular table: each entry is the difference of the two to its left divided by the spread of the relevant nodes. The top diagonal $f[x_0],f[x_0,x_1],\\dots$ gives the Newton coefficients.",hu:"Háromszög tábla: minden elem a tőle balra lévő kettő különbsége, osztva az érintett alappontok távolságával. A felső átló $f[x_0],f[x_0,x_1],\\dots$ adja a Newton-együtthatókat."}},{term:{en:"Incremental updates",hu:"Növekményes frissítés"},def:{en:"Adding a new data point only appends one term (one new divided difference) — unlike Lagrange, where every basis polynomial changes. Ideal when nodes arrive one at a time.",hu:"Új adatpont hozzáadása csak egy tagot fűz hozzá (egy új osztott differenciát) — szemben a Lagrange-zsal, ahol minden alappolinom megváltozik. Ideális, ha az alappontok egyenként érkeznek."}},{term:{en:"Confluent divided difference",hu:"Egybeeső osztott differencia"},def:{en:"As $x_1\\to x_0$, $f[x_0,x_1]\\to f'(x_0)$, so one defines $f[x_0,x_0]:=f'(x_0)$. Repeated nodes encode derivative data — the basis of Hermite interpolation.",hu:"Ha $x_1\\to x_0$, akkor $f[x_0,x_1]\\to f'(x_0)$, így $f[x_0,x_0]:=f'(x_0)$. Az ismételt alappontok deriváltadatot kódolnak — a Hermite-interpoláció alapja."}}],hermite:[{term:{en:"Hermite interpolation problem",hu:"Hermite-interpolációs feladat"},def:{en:"Match both values and first derivatives at the nodes: $g(x_i)=f(x_i)$ and $g'(x_i)=f'(x_i)$ for $i=0,\\dots,n$ — $2(n+1)$ conditions, so a unique polynomial of degree $\\le 2n+1$.",hu:"Az alappontokban az értékeket és az első deriváltakat is illesztjük: $g(x_i)=f(x_i)$ és $g'(x_i)=f'(x_i)$, $i=0,\\dots,n$ — $2(n+1)$ feltétel, így egyetlen, legfeljebb $2n+1$-edfokú polinom."}},{term:{en:"Hermite polynomial $H_{2n+1}$ (Thm 6.18)",hu:"Hermite-polinom $H_{2n+1}$ (6.18. tétel)"},def:{en:"The unique degree-$\\le(2n+1)$ solution. Geometrically its graph passes through each $(x_i,y_i)$ with prescribed tangent slope $y_i'$. Uniqueness: a nonzero difference would have $2n+2$ roots (each $x_i$ doubled).",hu:"Az egyetlen, legfeljebb $(2n+1)$-edfokú megoldás. Geometriailag a grafikonja minden $(x_i,y_i)$-n átmegy az előírt $y_i'$ érintő-meredekséggel. Egyértelműség: egy nemnulla különbségnek $2n+2$ gyöke lenne (minden $x_i$ kétszeres)."}},{term:{en:"Repeated-node divided differences",hu:"Ismételt alappontú osztott differenciák"},def:{en:"Hermite reuses Newton's form with each node listed twice: $H_{2n+1}=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots$, where $f[x_i,x_i]=f'(x_i)$.",hu:"A Hermite a Newton-alakot használja minden alappontot kétszer felsorolva: $H_{2n+1}=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots$, ahol $f[x_i,x_i]=f'(x_i)$."}},{term:{en:"Hermite divided-difference table",hu:"Hermite osztott differencia tábla"},def:{en:"Build the divided-difference table with each $x_i$ duplicated; the first-column repeats hold $f(x_i)$ and the first divided difference of a repeated pair is the given derivative $f'(x_i)$. The top diagonal gives the Hermite coefficients.",hu:"Építsd fel az osztott differencia táblát minden $x_i$-t megkettőzve; az első oszlop ismétlései $f(x_i)$-t tartják, és egy ismételt pár első osztott differenciája az adott $f'(x_i)$ derivált. A felső átló adja a Hermite-együtthatókat."}},{term:{en:"Hermite error formula (Thm 6.19)",hu:"Hermite hibaformula (6.19. tétel)"},def:{en:"For $f\\in C^{2n+2}$, $f(x)-H_{2n+1}(x)=\\dfrac{f^{(2n+2)}(\\xi)}{(2n+2)!}\\prod_{i=0}^n(x-x_i)^2$ — the node factors are *squared*, reflecting the double matching.",hu:"$f\\in C^{2n+2}$ esetén $f(x)-H_{2n+1}(x)=\\dfrac{f^{(2n+2)}(\\xi)}{(2n+2)!}\\prod_{i=0}^n(x-x_i)^2$ — az alappont-tényezők *négyzeten* vannak, a kettős illesztést tükrözve."}},{term:{en:"Limit of Lagrange interpolation",hu:"A Lagrange-interpoláció határeseteként"},def:{en:"$H_{2n+1}$ is the limit of the Lagrange polynomial on $2n+2$ nodes as each extra node $\\tilde x_i\\to x_i$ — the confluent (coalescing-node) case of ordinary interpolation.",hu:"$H_{2n+1}$ a $2n+2$ alappontú Lagrange-polinom határértéke, amikor minden extra $\\tilde x_i\\to x_i$ — a hagyományos interpoláció egybeeső alappontú (konfluens) esete."}}],spline:[{term:{en:"Spline function (degree $k$)",hu:"Spline-függvény ($k$-adfokú)"},def:{en:"A function $S\\in C^{k-1}[a,b]$ that is a polynomial of degree $\\le k$ on each subinterval $[x_i,x_{i+1}]$. Degrees 1, 2, 3 give linear, quadratic and cubic splines.",hu:"Olyan $S\\in C^{k-1}[a,b]$ függvény, amely minden $[x_i,x_{i+1}]$ részintervallumon legfeljebb $k$-adfokú polinom. Az 1, 2, 3 fok a lineáris, kvadratikus és köbös spline-t adja."}},{term:{en:"Cubic spline — why",hu:"Köbös spline — miért"},def:{en:"Cubic splines are $C^2$ (twice continuously differentiable): smooth enough for practice and free of the Runge oscillations of high-degree single-polynomial interpolation.",hu:"A köbös spline $C^2$ (kétszer folytonosan differenciálható): a gyakorlatban elég sima, és mentes a magas fokú egypolinomos interpoláció Runge-oszcillációitól."}},{term:{en:"Continuity conditions (6.10–6.13)",hu:"Folytonossági feltételek (6.10–6.13)"},def:{en:"Each piece matches the data ($S_i(x_i)=y_i$, $S_i(x_{i+1})=y_{i+1}$) and joins its neighbour smoothly: equal first and second derivatives at every interior node ($S_i'=S_{i+1}'$, $S_i''=S_{i+1}''$).",hu:"Minden szakasz illeszkedik az adatra ($S_i(x_i)=y_i$, $S_i(x_{i+1})=y_{i+1}$), és simán csatlakozik a szomszédjához: minden belső pontban egyenlő első és második derivált ($S_i'=S_{i+1}'$, $S_i''=S_{i+1}''$)."}},{term:{en:"Natural spline (6.14)",hu:"Természetes spline (6.14)"},def:{en:"Closes the system with zero curvature at the ends: $S''(x_0)=S''(x_n)=0$. The natural cubic spline interpolation problem has a unique solution (Thm 6.22).",hu:"A rendszert nulla görbülettel zárja a végeken: $S''(x_0)=S''(x_n)=0$. A természetes köbös spline interpolációs feladatnak egyetlen megoldása van (6.22. tétel)."}},{term:{en:"Clamped spline (6.23)",hu:"Rögzített (clamped) spline (6.23)"},def:{en:"Instead of zero end-curvature, prescribe the end slopes $S'(x_0)=y_0'$, $S'(x_n)=y_n'$. Usually more accurate than natural when the true end derivatives are known.",hu:"A nulla véggörbület helyett a végmeredekségeket írjuk elő: $S'(x_0)=y_0'$, $S'(x_n)=y_n'$. Általában pontosabb a természetesnél, ha a valódi végderiváltak ismertek."}},{term:{en:"Tridiagonal system for $c_i$ (6.22)",hu:"Tridiagonális rendszer a $c_i$-kre (6.22)"},def:{en:"Eliminating $b_i,d_i$ leaves a tridiagonal, diagonally dominant system for the second-derivative coefficients $c_i$, solvable in $\\mathcal{O}(n)$ by the Thomas algorithm; then $d_i=(c_{i+1}-c_i)/(3\\Delta x_i)$ and $b_i$ follow.",hu:"A $b_i,d_i$ kiküszöbölése egy tridiagonális, diagonálisan domináns rendszert hagy a második derivált $c_i$ együtthatókra, amely a Thomas-algoritmussal $\\mathcal{O}(n)$-ben megoldható; majd $d_i=(c_{i+1}-c_i)/(3\\Delta x_i)$ és $b_i$ adódik."}}]},ve={lagrange:[{q:"In the context of interpolation, what are the given pairwise different points $x_0, x_1, \\ldots, x_n$ called?",a:"Mesh points (or node points)."},{q:"The problem of finding a polynomial $L_n$ of degree at most $n$ such that $L_n(x_i) = y_i$ for $i = 0, \\ldots, n$ is known as _____.",a:"Lagrange interpolation"},{q:"What is the maximum degree of a Lagrange interpolating polynomial that fits $n+1$ data points?",a:"$n$"},{q:"How many distinct solutions exist for a Lagrange interpolation problem with $n+1$ points and a polynomial of degree at most $n$?",a:"Exactly one (the solution is unique)."},{q:"What is the specific name given to the polynomials $l_0, \\ldots, l_n$ used to construct the Lagrange polynomial?",a:"Lagrange basis polynomials of degree $n$."},{q:"What is the value of the Lagrange basis polynomial $l_k(x_i)$ when $k \\ne i$?",a:"0"},{q:"What is the value of the Lagrange basis polynomial $l_k(x_i)$ when $k = i$?",a:"1"},{q:"Using basis polynomials $l_k(x)$, what is the formula for the Lagrange interpolating polynomial $L_n(x)$?",a:"$L_n(x) = \\sum_{k=0}^{n} y_k l_k(x)$"},{q:"In the uniqueness proof for Lagrange interpolation, if $P(x)$ is the difference of two $n$-th degree interpolating polynomials, how many roots must $P(x)$ have?",a:"$n + 1$ roots."},{q:"Which mathematical theorem is invoked to prove that the difference polynomial $P(x)$ in Lagrange interpolation must be identically zero?",a:"The Fundamental Theorem of Algebra."},{q:"What is the term for approximating a function value $f(x)$ using an interpolating polynomial when $x$ is outside the interval determined by the mesh points?",a:"Extrapolation"},{q:"What is the term for approximating a function value $f(x)$ using an interpolating polynomial when $x$ is located between two mesh points?",a:"Interpolation"},{q:"Concept: Rolle's Theorem",a:"Definition: If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a) = f(b)$, there exists $\\xi \\in (a,b)$ such that $f'(\\xi) = 0$."},{q:"According to the Generalized Rolle's Theorem, if $f \\in C^n(a,b)$ has $n+1$ roots, what can be said about the $n$-th derivative $f^{(n)}$?",a:"There exists at least one point $\\xi$ in the interval spanned by the roots where $f^{(n)}(\\xi) = 0$."},{q:"Let $f \\in C^{n+1}(a,b)$. What is the error term formula for $f(x) - L_n(x)$?",a:"$\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n)$"},{q:"In the Lagrange interpolation error formula, what does the value $\\xi$ depend on?",a:"The value of $x$ (and the mesh points $x_i$)."},{q:"What does the notation $\\langle x, x_0, x_1, \\ldots, x_n \\rangle$ represent in the context of the error term $\\xi$?",a:"The smallest interval containing $x$ and all mesh points $x_0, \\ldots, x_n$."},{q:"When the mesh points are equidistant, the formula for $x_i$ is $x_i = x_0 + i \\cdot$ _____.",a:"$h$ (where $h$ is the step size)."},{q:"What does $M_{n+1}$ represent in the truncation error bound formula?",a:"$M_{n+1} = \\max\\{|f^{(n+1)}(t)| : t \\in [x_0, x_n]\\}$"},{q:"For equidistant points on $[a,b]$, what is the upper bound for the error $|f(x) - L_n(x)|$ in terms of $M_{n+1}$ and the interval length?",a:"$\\frac{M_{n+1}}{4(n+1)} (\\frac{b-a}{n})^{n+1}$"},{q:"If $x$ is in the interval $(x_k, x_{k+1})$ and the points are equidistant with step $h$, what is the maximum value of $|(x - x_k)(x - x_{k+1})|$?",a:"$\\frac{h^2}{4}$"},{q:"Why do Lagrange polynomials typically fail to approximate $\\cos x$ well outside the interval defined by the mesh points?",a:"The cosine function is bounded, whereas polynomials of degree $n \\ge 1$ are unbounded as $|x| \\to \\infty$."},{q:"In bivariate Lagrange interpolation on a rectangular domain, the interpolating function $L_{n,m}(x, y)$ is a _____ summation.",a:"double"},{q:"Bivariate Lagrange Formula: $L_{n,m}(x, y) = \\sum_{i=0}^{n} \\sum_{j=0}^{m} z_{ij} \\cdot$ _____.",a:"$l_i(x) \\tilde{l}_j(y)$"},{q:"In bivariate Lagrange interpolation $L_{n,m}(x, y)$, if $y$ is fixed, the function becomes a polynomial in $x$ of degree at most _____.",a:"$n$"},{q:"In bivariate Lagrange interpolation $L_{n,m}(x, y)$, if $x$ is fixed, the function becomes a polynomial in $y$ of degree at most _____.",a:"$m$"},{q:"According to Theorem 6.8, what is the derivative of the function $x \\mapsto f^{(n+1)}(\\xi(x))$ with respect to $x$?",a:"$\\frac{1}{n+2} f^{(n+2)}(\\eta(x))$"},{q:"Formula: Lagrange Basis Polynomial $l_k(x)$",a:"$l_k(x) = \\prod_{i=0, i \\ne k}^n \\frac{x - x_i}{x_k - x_i}$"},{q:"If we use 3 mesh points to interpolate $\\cos x$ on $[-\\pi, \\pi]$, what is the degree of the resulting Lagrange polynomial $L_2(x)$?",a:"2 (Quadratic)."},{q:"If we use 5 mesh points to interpolate $\\cos x$ on $[-\\pi, \\pi]$, what is the degree of the resulting Lagrange polynomial $L_4(x)$?",a:"4 (Quartic)."},{q:"What is the error bound for $L_2(x)$ interpolating $\\cos x$ on $[-\\pi, \\pi]$ using mesh points $-\\pi, 0, \\pi$?",a:"$\\approx 2.5839$ (Upper estimate)."},{q:"What happens to the error bound of a Lagrange polynomial as the number of data points $n$ increases, provided $M_{n+1}$ is appropriately bounded?",a:"The error bound typically decreases (tends toward zero)."},{q:"The points $z_{ij}$ in bivariate interpolation correspond to $f(x_i, y_j)$. What is the condition $L_{n,m}(x_i, y_j)$ must satisfy?",a:"$L_{n,m}(x_i, y_j) = z_{ij}$"},{q:"If an interpolation problem uses points $x_0 = 0, x_1 = 1, x_2 = 2$, what is the denominator of the basis polynomial $l_1(x)$?",a:"$(1-0)(1-2) = -1$"},{q:"If $L_3(x)$ interpolates four points and we know the fourth derivative of the original function $f$ is zero, what is the interpolation error?",a:"Zero (the interpolation is exact)."},{q:"In the expression $l_k(x) = \\frac{\\omega(x)}{(x-x_k)\\omega'(x_k)}$, what is $\\omega(x)$?",a:"The nodal polynomial $\\prod_{i=0}^n (x - x_i)$."},{q:"Does the order of the mesh points ($x_0 < x_1 < \\dots < x_n$) affect the existence of the Lagrange polynomial?",a:"No, as long as the points are pairwise distinct."},{q:"How does the degree of a bivariate Lagrange polynomial $L_{2,1}(x, y)$ compare in each variable?",a:"It is degree 2 in $x$ and degree 1 in $y$."},{q:"What is the term for the set of $l_i(x)$ because any polynomial of degree $n$ can be written as their linear combination?",a:"Basis (specifically the Lagrange Basis)."},{q:"What is the sum of all Lagrange basis polynomials $\\sum_{i=0}^n l_i(x)$ for any $x$?",a:"1"},{q:"In the construction of $l_k(x)$, why is the term $(x - x_k)$ omitted from the numerator?",a:"To ensure the polynomial has degree $n$ rather than $n+1$ and to avoid a zero value at $x = x_k$."},{q:"In the construction of $l_k(x)$, why is the term $(x_k - x_k)$ omitted from the denominator?",a:"To avoid division by zero."},{q:"If $f \\in C^2[a,b]$ and $f(x_0)=f(x_1)=f(x_2)=0$, how many zeros does $f''$ have according to Rolle's theorem?",a:"At least one."},{q:"When constructing $L_3(x)$ for points $(-1, -2), (1, 0), (2, -2), (3, 2)$, what is the contribution of the point $(1, 0)$ to the summation?",a:"0 (because $y_k = 0$)."},{q:"What is the limit of the error $|f(x) - L_n(x)|$ at any mesh point $x_i$?",a:"0"},{q:"In bivariate interpolation, how many data points are required for an $L_{n,m}$ polynomial?",a:"$(n+1)(m+1)$ points."},{q:"The error estimate $|f(x) - L_n(x)| \\le \\frac{M_{n+1}}{4(n+1)}h^{n+1}$ assumes that mesh points are _____.",a:"equidistant"},{q:"How does the step size $h$ relate to the interval $[a,b]$ and number of points $n+1$ in an equidistant mesh?",a:"$h = \\frac{b-a}{n}$"},{q:"What is the requirement for $f$ to apply the Lagrange error formula with an $n$-th degree polynomial?",a:"$f$ must be $n+1$ times continuously differentiable ($f \\in C^{n+1}$)."},{q:"In the proof of the error theorem, the auxiliary function $g(t)$ is designed to have how many roots?",a:"$n + 2$ roots (the $n+1$ mesh points plus the point $x$)."},{q:"What is the $(n+1)$-th derivative of any polynomial $L_n$ of degree $n$?",a:"0"},{q:"If $L_3(x) = x^3 - 3x^2 + 2$, what is the value of $L_3(1)$?",a:"0"},{q:"What is the name of the constant $h$ in equidistant interpolation?",a:"Step size (or spacing)."},{q:"For a function $f(x)$, if we increase the number of points $n$ but $M_{n+1}$ grows very rapidly, does the interpolation error necessarily decrease?",a:"No (this can lead to Runge's phenomenon, though not explicitly named in the text)."},{q:"What is the degree of the bivariate basis polynomial product $l_i(x)\\tilde{l}_j(y)$ with respect to $x$?",a:"$n$"},{q:"What is the degree of the bivariate basis polynomial product $l_i(x)\\tilde{l}_j(y)$ with respect to $y$?",a:"$m$"},{q:"Term: Lagrange-féle alappolinom",a:"Definition: Hungarian term for Lagrange basis polynomial."},{q:"Term: Ekvidisztáns osztópontok",a:"Definition: Hungarian term for equidistant mesh points."},{q:"In Example 6.9, the resulting polynomial is $-\\frac{1}{2}x^2y + \\frac{5}{2}x^2 + \\dots$. What is its degree in $y$?",a:"1 (First order)."},{q:"The error bound for equidistant interpolation contains the term $n!$ in its derivation. Where does this $n!$ originate?",a:"From the product of distances between equidistant points, e.g., $(k+1)!(n-k)! \\le n!$."}],newton:[{q:"Given a function $f$, what is the definition of the zeroth divided difference $f[x_0]$?",a:"$f[x_0] := f(x_0)$"},{q:"What is the formula for the first divided difference $f[x_0, x_1]$ relative to mesh points $x_0$ and $x_1$?",a:"$f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$"},{q:"How is the $n$-th divided difference $f[x_0, x_1, \\ldots, x_n]$ defined recursively?",a:"$f[x_0, x_1, \\ldots, x_n] := \\frac{f[x_1, x_2, \\ldots, x_n] - f[x_0, x_1, \\ldots, x_{n-1}]}{x_n - x_0}$"},{q:"In the recursive definition of $f[x_0, x_1, \\ldots, x_n]$, which mesh point is omitted in the first term of the numerator?",a:"$x_0$"},{q:"In the recursive definition of $f[x_0, x_1, \\ldots, x_n]$, which mesh point is omitted in the second term of the numerator?",a:"$x_n$"},{q:"What is the denominator in the recursive definition of an $n$-th order divided difference?",a:"$x_n - x_0$"},{q:"What condition must mesh points $x_i$ satisfy for the standard divided difference definition to be valid?",a:"They must be pairwise different."},{q:"Does the definition of divided differences require that mesh points be ordered increasingly?",a:"No, mesh points do not have to be ordered increasingly."},{q:"According to Theorem 6.10, what is the explicit summation formula for $f[x_0, x_1, \\ldots, x_n]$?",a:"$\\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)}$"},{q:"In the explicit formula for $f[x_0, x_1, \\ldots, x_n]$, what is the value of the denominator's 'empty product' when $n = 0$?",a:"1"},{q:"What proof technique is used to demonstrate the validity of the explicit formula for divided differences?",a:"Mathematical induction with respect to $n$."},{q:"How does changing the order of mesh points affect the value of a divided difference?",a:"The value remains unchanged; divided differences are independent of the order of mesh points."},{q:"Under what condition on function $f$ do divided differences depend continuously on the mesh points?",a:"$f$ must be continuous."},{q:"What is the limit of the first divided difference $f[x_0, x_1]$ as $x_1$ approaches $x_0$?",a:"$f'(x_0)$"},{q:"How is the first divided difference relative to equal mesh points, $f[x_0, x_0]$, defined?",a:"$f[x_0, x_0] := f'(x_0)$"},{q:"Why is the definition $f[x_0, x_0] = f'(x_0)$ used for differentiable functions?",a:"To extend the function $x_1 \\mapsto f[x_0, x_1]$ continuously to the case where $x_1 = x_0$."},{q:"What is the value of $f[x_0, x_1, x_2, x_3]$ for $f(x) = x^2$ and mesh points $x_i = i$?",a:"0"},{q:"For $f(x) = \\sin x$ and $x_0 = 0$, what is the value of the divided difference $f[x_0, x_0]$?",a:"1 (since $\\sin'(0) = \\cos(0) = 1$)"},{q:"If $f \\in C^1[a,b]$, what does the mean value property state regarding $f[x_0, x_1]$?",a:"There exists $\\xi$ in the interval between $x_0$ and $x_1$ such that $f[x_0, x_1] = f'(\\xi)$."},{q:"In the Newton form polynomial $P(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + \\ldots$, what is the coefficient $a_0$?",a:"$a_0 = P[x_0]$"},{q:"In the Newton form polynomial, what is the coefficient $a_1$ representing?",a:"$a_1 = P[x_0, x_1]$"},{q:"In the Newton form polynomial, what is the coefficient $a_k$ representing?",a:"$a_k = P[x_0, x_1, \\ldots, x_k]$"},{q:"From a numerical standpoint, is the recursive definition or the explicit summation formula more practical for computation?",a:"The recursive definition is more practical."},{q:"Why is the explicit formula for divided differences theoretically important if it is numerically impractical?",a:"It proves that the value is independent of point order and depends continuously on the points."},{q:"The first divided difference $f[x_0, x_1]$ can be interpreted as the _____ quotient of $f$ at those points.",a:"difference"},{q:"What is the result of a first-order divided difference if $f(x)$ is a constant function?",a:"0"},{q:"Term: Mesh points",a:"Definition: The specific points $x_0, x_1, \\ldots, x_n$ in the domain of $f$ used to compute divided differences."},{q:"How many lower-order divided differences are subtracted in the numerator of the recursive step for an $n$-th order divided difference?",a:"Two ($f[x_1, \\ldots, x_n]$ and $f[x_0, \\ldots, x_{n-1}]$)"},{q:"In the context of divided differences, what does the notation $f[x_0, x_1, \\ldots, x_n]$ represent?",a:"The $n$-th order divided difference of function $f$ at the points $x_0, \\ldots, x_n$."},{q:"If $f$ is a linear function, what is the value of the second divided difference $f[x_0, x_1, x_2]$?",a:"0"},{q:"In the induction proof for Theorem 6.10, the step from $n$ to $n+1$ involves substituting the _____ into the recursive definition.",a:"inductive hypothesis"},{q:"What is the relationship between $f[x_0, x_1]$ and $f[x_1, x_0]$?",a:"They are equal ($f[x_0, x_1] = f[x_1, x_0]$)."},{q:"How many mesh points are involved in a third-order divided difference calculation?",a:"Four ($x_0, x_1, x_2, x_3$)"},{q:"For a differentiable function, $f[x_0, x_1]$ is a continuous function of $x_1$ except possibly at _____.",a:"$x_1 = x_0$"},{q:"What is the first divided difference of $f(x) = x$ for any distinct $x_0, x_1$?",a:"1"},{q:"In the formula $f[x_0, x_1, \\ldots, x_n] = \\sum_{i=0}^{n} \\frac{f(x_i)}{D_i}$, what is $D_i$?",a:"$(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)$"},{q:"True or False: The recursive definition of divided differences is preferred in numerics because it uses fewer calculations than the explicit formula.",a:"True"},{q:"What is the denominator of the term involving $f(x_0)$ in the explicit summation formula for $f[x_0, x_1, x_2]$?",a:"$(x_0 - x_1)(x_0 - x_2)$"},{q:"The formula $f[x_0, x_1] = f'(\\xi)$ is essentially a restatement of which calculus theorem?",a:"The Mean Value Theorem"},{q:"In the expression $a_3(x - x_0)(x - x_1)(x - x_2)$ from Exercise 3, what is $a_3$?",a:"$P[x_0, x_1, x_2, x_3]$"},{q:"If mesh points are shifted by a constant, does the value of the divided difference of a polynomial change?",a:"No, because it depends on the differences between points (and function values)."},{q:"What is the value of the first divided difference $f[x_0, x_1]$ if $f(x_1) = f(x_0)$?",a:"0"},{q:"The notation $f[x_1, x_2, \\ldots, x_n]$ omits the point $x_0$ and represents a divided difference of order _____.",a:"$n-1$"},{q:"In the explicit formula, the denominator for a specific $f(x_i)$ is a product of how many linear factors $(x_i - x_j)$?",a:"$n$"},{q:"The continuity of divided differences with respect to mesh points (Corollary 6.12) is a direct consequence of the _____ formula.",a:"explicit (summation)"},{q:"In Exercise 1b, $x_i = 0.2i$. What is the value of $x_2$?",a:"0.4"},{q:"If $x_0 = 1$ and $x_1 = 3$, and $f(x) = x^3$, what is $f[1, 3]$?",a:"$\\frac{3^3 - 1^3}{3 - 1} = \\frac{27 - 1}{2} = 13$"},{q:"How does the complexity of the explicit summation formula for $f[x_0, \\ldots, x_n]$ grow relative to $n$?",a:"It requires computing a product of $n$ terms for each of the $n+1$ summands."},{q:"Does Corollary 6.11 imply that $f[x_0, x_1, x_2] = f[x_2, x_0, x_1]$?",a:"Yes, because the order of mesh points does not matter."},{q:"In the proof of Theorem 6.10, what algebraic step is performed on the sum $\\sum_{i=1}^n$?",a:"Factoring out terms to combine the two summations using a common denominator $(\\frac{1}{x_i - x_{n+1}} - \\frac{1}{x_i - x_0})$."},{q:"What is the main disadvantage of the standard Lagrange interpolation formula when adding a new mesh point?",a:"The entire formula must be recomputed from scratch."},{q:"How is the Newton form of the Lagrange polynomial superior to the standard form regarding new data points?",a:"It allows adding a new mesh point by simply appending a correction term to the existing formula."},{q:"In the Newton form derivation, $L_0(x)$ is defined as which constant function?",a:"$f(x_0)$"},{q:"In the derivation of the Newton form, what is the maximum possible degree of the polynomial difference $L_i(x) - L_{i-1}(x)$?",a:"$i$"},{q:"Which set of points serves as roots for the polynomial difference $L_i(x) - L_{i-1}(x)$?",a:"$x_0, x_1, \\dots, x_{i-1}$"},{q:"According to the Fundamental Theorem of Algebra, $L_i(x) - L_{i-1}(x)$ can be factored into $a_i$ multiplied by which product?",a:"$\\prod_{j=0}^{i-1} (x - x_j)$"},{q:"What mathematical term is used for the coefficients $a_i$ in the Newton form of the interpolating polynomial?",a:"Divided differences"},{q:"Write the general Newton form of the $n$-th degree Lagrange interpolating polynomial $L_n(x)$.",a:"$L_n(x) = f[x_0] + \\sum_{i=1}^n f[x_0, \\dots, x_i] \\prod_{j=0}^{i-1} (x - x_j)$"},{q:"What is the correction term added to $L_n(x)$ to obtain $L_{n+1}(x)$ in the Newton form?",a:"$f[x_0, x_1, \\dots, x_{n+1}](x - x_0)(x - x_1) \\dots (x - x_n)$"},{q:"Which efficient numerical method is used to evaluate the Newton form of the interpolating polynomial?",a:"Horner's method"},{q:"If the $n$-th order divided difference $f[x_0, x_1, \\dots, x_n]$ is non-zero, what is the degree of the Newton polynomial?",a:"$n$"},{q:"In a divided difference table used for manual calculation, what do the first and second columns represent?",a:"The mesh points $x_i$ and the function values $f(x_i)$."},{q:"Where are the coefficients for the Newton polynomial located in a standard triangular divided difference table?",a:"Along the top diagonal of the table."},{q:"What is the recursive formula for the $k$-th order divided difference $f[x_0, \\dots, x_k]$?",a:"$f[x_0, \\dots, x_k] = \\frac{f[x_1, \\dots, x_k] - f[x_0, \\dots, x_{k-1}]}{x_k - x_0}$"},{q:"Formula: First-order divided difference $f[x_0, x_1]$?",a:"$f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$"},{q:"In the error theorem for the Newton form, what is the expression for the truncation error $f(x) - L_n(x)$?",a:"$f[x_0, x_1, \\dots, x_n, x] \\prod_{i=0}^n (x - x_i)$"},{q:"What is the relationship between the $n$-th order divided difference $f[x_0, \\dots, x_n]$ and the $n$-th derivative of $f$?",a:"$f[x_0, \\dots, x_n] = \\frac{f^{(n)}(\\xi)}{n!}$ for some $\\xi \\in \\langle x_0, \\dots, x_n \\rangle$."},{q:"If $P$ is a polynomial of degree $n$, what is the value of the divided difference $P[x_0, \\dots, x_m]$ for any $m > n$?",a:"$0$"},{q:"For a polynomial $f(x) = c_0 + c_1 x + \\dots + c_n x^n$, which divided difference equals the leading coefficient $c_n$?",a:"$f[x_0, x_1, \\dots, x_n]$"},{q:"What happens to the divided difference $f[x_0, x_1, \\dots, x_n]$ as all mesh points $x_i$ approach a single point $x_0$?",a:"It converges to $\\frac{f^{(n)}(x_0)}{n!}$."},{q:"How is the second-order confluent divided difference $f[x_0, x_0, x_1]$ defined?",a:"$f[x_0, x_0, x_1] = \\frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$"},{q:"What is the value of the confluent divided difference $f[x_0, x_0, x_0]$ in terms of derivatives?",a:"$\\frac{f''(x_0)}{2}$"},{q:"Using the data points $(-1, -2), (1, 0), (2, -2), (3, 2)$, what is the first-order divided difference $f[-1, 1]$?",a:"$1$"},{q:"Given mesh points $(-1, 1, 2, 3)$ and function values $(-2, 0, -2, 2)$, what is the value of the Newton polynomial $L_3(0)$?",a:"$2$"},{q:"Given data $(-1, -3), (1, 1), (2, 3), (3, 29)$, find the third-order divided difference $f[-1, 1, 2, 3]$.",a:"$3$"},{q:"In Example 6.15, what is the Newton form of $L_3(x)$ for the data points starting at $(-1, -3)$ and ending at $(3, 29)$?",a:"$L_3(x) = -3 + 2(x + 1) + 0(x + 1)(x - 1) + 3(x + 1)(x - 1)(x - 2)$"},{q:"How many arithmetic operations are generally required to evaluate a Newton polynomial using Horner's method compared to the standard Lagrange form?",a:"Significantly fewer, as it avoids repeated products and summations."},{q:"What property of divided differences ensures that $f[x_0, x_1] = f[x_1, x_0]$?",a:"Symmetry (divided differences are independent of the order of the points)."},{q:"In the process of proving the truncation error theorem, why is $x$ added to the set of mesh points?",a:"To construct a higher-degree interpolating polynomial $L_{n+1}(t)$ that equals $f(x)$ at $t=x$."},{q:"What is the primary utility of the divided difference form of the truncation error in theoretical analysis?",a:"It provides a direct link between divided differences and derivatives through the Mean Value Theorem."},{q:"In Algorithm 6.13, why are only specific divided differences stored by the end of the execution?",a:"To save memory by only keeping the coefficients necessary for the Newton polynomial."},{q:"What is the zeroth-order divided difference $f[x_i]$ equivalent to?",a:"$f(x_i)$"},{q:"How is the denominator determined for a $k$-th order divided difference in a manual table?",a:"It is the difference between the last mesh point and the first mesh point involved in that specific difference ($x_k - x_0$)."},{q:"If $L_3(x) = x^3 - 3x^2 + 2$, what is the coefficient $f[x_0, x_1, x_2, x_3]$ for any four distinct points?",a:"$1$"},{q:"Under what condition is the divided difference $f[x_0, x_1, \\dots, x_n, x]$ practically calculable for error estimation?",a:"Only when the exact function value $f(x)$ is already known."},{q:"What does the expression $\\prod_{k=0}^{i-1} (x - x_k)$ represent in the Newton form?",a:"The basis polynomials of the Newton form."},{q:"In the context of divided differences, what does the notation $\\langle x_0, x_1, \\dots, x_n \\rangle$ represent?",a:"The smallest interval containing all the points $x_0, x_1, \\dots, x_n$."},{q:"How does Horner's method organize the computation of $L_n(x)$ in Newton form?",a:"It nests the linear factors to minimize the number of multiplications."},{q:"Exercise 8: Show that the limit of $f[x_0, x_1, x_2]$ as $(x_1, x_2) \\to (x_0, x_0)$ is equal to _____.",a:"$f[x_0, x_0, x_0]$ (or $\\frac{f''(x_0)}{2}$)"},{q:"What is the role of the Fundamental Theorem of Algebra in deriving the Newton form?",a:"It justifies the product form of the difference $L_i(x) - L_{i-1}(x)$ based on its known roots."},{q:"When computing a divided difference table by hand, what shape does the resulting data structure take?",a:"A triangular table."},{q:"Is the Newton form a different polynomial than the Lagrange form for the same set of data points?",a:"No, it is the same unique interpolating polynomial expressed in a different algebraic form."},{q:"In Example 6.15, what was the first-order divided difference $f[2, 3]$ for the data $(2, 3)$ and $(3, 29)$?",a:"$26$"},{q:"In Example 6.15, what was the second-order divided difference $f[1, 2, 3]$ derived from $f[1, 2]=2$ and $f[2, 3]=26$?",a:"$12$"},{q:"What is the relationship between $f[x_1, x_0, x_0]$ and $f[x_0, x_0, x_1]$?",a:"They are equal ($f[x_1, x_0, x_0] = f[x_0, x_0, x_1]$)."},{q:"If a polynomial $P(x)$ has degree $n$, what can be said about its $(n+1)$-th derivative in the context of divided differences?",a:"It is zero, which corresponds to the $(n+1)$-th divided difference being zero."},{q:"In the manual calculation $f[x_0, x_1, x_2] = \\frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0}$, which mesh points are used in the divisor?",a:"$x_2$ and $x_0$"},{q:"What is the value of $L_n(x_j)$ for $j \\in \\{0, 1, \\dots, n\\}$?",a:"$f(x_j)$"},{q:"Why is the Newton form preferred in computer programming for interpolation tasks?",a:"Due to its recursive nature and computational efficiency through Horner's method."},{q:"The formula $f[x_0, \\dots, x_n] = \\sum_{k=0}^n \\frac{f(x_k)}{\\prod_{j \\ne k} (x_k - x_j)}$ provides which type of definition for divided differences?",a:"The explicit (non-recursive) sum-based definition."},{q:"According to the video transcript, what happens to the terms in the expansion $L_0 + (L_1 - L_0) + (L_2 - L_1) + \\dots$?",a:"They telescope, simplifying to $L_n$."},{q:"In the video Example, how is the value '1' calculated for the first difference column between points $(-1, -2)$ and $(1, 0)$?",a:"$\\frac{0 - (-2)}{1 - (-1)} = \\frac{2}{2} = 1$"}],hermite:[{q:"What secondary values are interpolated in the Hermite interpolation problem alongside the function values $y_i = f(x_i)$?",a:"The derivative values $y_i' = f'(x_i)$."},{q:"If there are $n + 1$ distinct mesh points, what is the maximum degree of the unique Hermite interpolating polynomial $H_{2n+1}$?",a:"The maximum degree is $2n + 1$."},{q:"How many total equations are specified by the interpolation conditions for $n + 1$ nodes in a standard Hermite problem?",a:"There are $2(n + 1)$ equations."},{q:"Geometrically, what does $g'(x_i) = y_i'$ ensure about the graph of the Hermite polynomial at node $x_i$?",a:"It ensures the tangent line at $x_i$ has a slope equal to $y_i'$."},{q:"In the uniqueness proof for Hermite interpolation, what is the multiplicity of each root $x_i$ for the difference polynomial $P = H_{2n+1} - \\tilde{H}_{2n+1}$?",a:"Each node $x_i$ is a double root of $P$."},{q:"Why must the difference polynomial $P$ be identically zero if it has $2n + 2$ roots and a degree of at most $2n + 1$?",a:"A non-zero polynomial cannot have more roots than its degree according to the Fundamental Theorem of Algebra."},{q:"What is the recursive definition of the divided difference $f[x_0, x_0, x_1]$?",a:"$\\frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$."},{q:"What value is substituted for the divided difference $f[x_i, x_i]$ in the construction of the Hermite polynomial?",a:"The derivative value $f'(x_i)$."},{q:"What is the first term of the Hermite interpolating polynomial $H_{2n+1}(x)$ in divided difference form?",a:"$f[x_0]$."},{q:"What is the coefficient of the second term, $(x - x_0)$, in the Hermite interpolating polynomial?",a:"$f[x_0, x_0]$."},{q:"What is the coefficient of the third term, $(x - x_0)^2$, in the Hermite interpolating polynomial?",a:"$f[x_0, x_0, x_1]$."},{q:"In the Hermite polynomial expansion, what is the basis function associated with the coefficient $f[x_0, x_0, x_1, x_1]$?",a:"$(x - x_0)^2(x - x_1)$."},{q:"State the truncation error formula $f(x) - H_{2n+1}(x)$ using a higher-order divided difference.",a:"$f[x_0, x_0, \\dots, x_n, x_n, x](x - x_0)^2 \\dots (x - x_n)^2$."},{q:"According to Theorem 6.19, what is the error term for Hermite interpolation if $f \\in C^{2n+2}$?",a:"$\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}(x - x_0)^2 \\dots (x - x_n)^2$."},{q:"In the derivative-based error formula for $H_{2n+1}(x)$, what interval must the value $\\xi$ belong to?",a:"$\\xi \\in \\langle x_0, x_1, \\dots, x_n, x \\rangle$."},{q:"Which theorem is used to prove the existence of $\\xi$ in the Hermite interpolation error bound?",a:"The generalized Rolle's Theorem."},{q:"What mathematical property of divided differences allows the Hermite polynomial to be viewed as a limit of Lagrange polynomials?",a:"The continuity of the divided difference function."},{q:"According to Corollary 6.20, the divided difference $f[x_0, x_0, \\dots, x_n, x_n, x]$ is equal to which derivative expression?",a:"$\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}$."},{q:"When setting up the divided difference table for Hermite interpolation, how many times must each node $x_i$ be listed in the first column?",a:"Each node must be listed twice."},{q:"In the Hermite divided difference table, what represents the first-order divided difference for two identical nodes $x_i$?",a:"The given derivative $f'(x_i)$."},{q:"In the Hermite divided difference table, what represents the first-order divided difference for two distinct nodes $x_i$ and $x_{i+1}$?",a:"$\\frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i}$."},{q:"Which values in the completed divided difference table serve as the coefficients for the Hermite polynomial?",a:"The values along the top diagonal of the table."},{q:"The function $g(z)$ used in the proof of Theorem 6.19 is designed such that $x_0, \\dots, x_n$ are _____ roots.",a:"Double roots."},{q:"In Example 6.21, what was the value of the leading coefficient $f[x_0, x_0, x_1, x_1, x_2, x_2]$?",a:"Zero."},{q:"If a Hermite polynomial $H_5$ corresponds to 3 mesh points, what is its expected maximum degree?",a:"Degree 5."},{q:"In the Hermite polynomial formula, the factor $(x - x_i)$ is squared once the point $x_i$ has appeared _____ times in the divided difference sequence.",a:"Two times."},{q:"Does interchanging the order of nodes $x_i$ change the resulting Hermite interpolating polynomial?",a:"No, the interpolating polynomial remains the same due to its uniqueness."},{q:"The general Hermite problem can interpolate the first $k_i$ derivatives at node $x_i$; how many conditions does this contribute for that specific node?",a:"$k_i + 1$ conditions."},{q:"If given $H(x_0)=f(x_0)$, $H'(x_0)=f'(x_0)$, $H''(x_0)=f''(x_0)$, and $H(x_1)=f(x_1)$, what is the minimal degree of the interpolating polynomial?",a:"The minimal degree is 3."},{q:"What is the coefficient of $(x - x_0)^3$ in a polynomial interpolating $f(x_0)$, $f'(x_0)$, $f''(x_0)$, and $f(x_1)$?",a:"$f[x_0, x_0, x_0, x_1]$."},{q:"Concept: $H_{2n+1}(x)$",a:"Definition: The unique polynomial of degree at most $2n+1$ that interpolates a function and its first derivatives at $n+1$ points."},{q:"What does the term $\\langle x_0, x_1, \\dots, x_n, x \\rangle$ denote in mathematical error analysis notation?",a:"The smallest interval containing the points $x_0, x_1, \\dots, x_n$ and $x$."},{q:"Term: Generalized Rolle's Theorem",a:"Definition: A theorem stating that if a function has $n$ roots in an interval, its $(n-1)$-th derivative has at least one root in that interval."},{q:"In the Newton form of the Hermite polynomial, what is the term following $f[x_0, x_0, x_1](x - x_0)^2$?",a:"$f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1)$."},{q:"Cloze: The divided difference $f[x_0, x_0]$ is equivalent to the _____ of the function $f$ at $x_0$.",a:"First derivative ($f'$)."},{q:"To calculate $f[x_0, x_0, x_0]$, one would need the value of the _____ derivative at $x_0$.",a:"Second derivative ($f''$)."},{q:"In the divided difference table, the column index of the framed coefficients is equal to the _____ of the divided difference.",a:"Order."},{q:"Why is the degree of the error term in Hermite interpolation $2n + 2$ rather than $n + 1$?",a:"Because the interpolation conditions provide two pieces of information at each of the $n+1$ nodes."},{q:"Process: How is the divided difference $f[x_0, x_1, x_1]$ computed?",a:"By taking the difference between $f[x_1, x_1]$ and $f[x_0, x_1]$ and dividing by $x_1 - x_0$."},{q:"What is the total number of terms in the summation formula for $H_{2n+1}(x)$?",a:"$2n + 2$ terms."},{q:"True or False: The Hermite interpolating polynomial is always of degree exactly $2n + 1$.",a:"False, it is of degree at most $2n + 1$."},{q:"The error bound for Hermite interpolation is generally _____ than the error bound for Lagrange interpolation using the same number of points.",a:"Smaller."},{q:"Which specific divided difference value is required to calculate the truncation error at a point $x$?",a:"$f[x_0, x_0, \\dots, x_n, x_n, x]$."},{q:"If $f(x)$ is a polynomial of degree $2n+1$, what is the resulting truncation error $f(x) - H_{2n+1}(x)$?",a:"The error is zero."},{q:"In a divided difference table for Hermite interpolation with points $x_0$ and $x_1$, how many rows will the table have?",a:"4 rows."},{q:"In the sequence of basis polynomials for $H_{2n+1}$, which factor is added to the term following $(x-x_0)^2(x-x_1)^2$?",a:"$(x-x_2)$."},{q:"What is the coefficient of $(x-x_0)^2(x-x_1)^2$ in the Hermite polynomial?",a:"$f[x_0, x_0, x_1, x_1, x_2]$."},{q:"The divided difference $f[x_0, x_0, x_1]$ is often called a _____ order divided difference.",a:"Second."},{q:"In the limit as nodes $x_i'$ approach $x_i$, the $L_{2n+1}$ error formula term $(x-x_i)(x-x_i')$ becomes _____.",a:"$(x-x_i)^2$."},{q:"If $f(x) = x^3$, and we use Hermite interpolation at $x_0 = 0$ and $x_1 = 1$, what is the degree of $H_3(x)$?",a:"Degree 3."},{q:"How does the Hermite divided difference table accommodate a node with a given second derivative?",a:"The node and its function value are listed three times, and the second derivative is used to calculate the second-order divided difference."},{q:"The Fundamental Theorem of Algebra proves that a polynomial of degree $m$ can have at most _____ distinct roots unless it is the zero polynomial.",a:"$m$ roots."},{q:"What is the value of the first-order divided difference $f[x_1, x_1]$ if $f'(x) = 2x + 1$ and $x_1 = 3$?",a:"7."},{q:"In the Hermite expansion, the term $f[x_0, x_0, \\dots, x_k](x - x_0)^2 \\dots (x - x_{k-1})^2$ is zero if $f$ is a polynomial of degree less than _____.",a:"$2k$."},{q:"If we have nodes $x_0, x_1, x_2$, what is the final term of the Hermite polynomial $H_5(x)$?",a:"$f[x_0, x_0, x_1, x_1, x_2, x_2](x-x_0)^2(x-x_1)^2(x-x_2)$."},{q:"Cloze: In the construction of $H_{2n+1}$, we list mesh points twice to simulate nodes having a multiplicity of _____.",a:"Two."},{q:"What is the relationship between the divided difference $f[x_0, x_1, \\dots, x_k]$ and the order of nodes?",a:"Divided differences are symmetric, meaning the value is independent of the order of the nodes."},{q:"When calculating the error of Hermite interpolation, if $f(x)$ is a polynomial of degree $2n+2$, the error term $\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}$ becomes a _____.",a:"Constant."},{q:"In Example 6.21, the Hermite polynomial $H_5(x)$ ended with the term $2(x+1)^2(x-1)^2$. What does the coefficient 2 represent?",a:"The divided difference $f[-1, -1, 1, 1, 2]$."},{q:"If a function $f$ is only $C^1$, can we validly apply the derivative-based error formula for Hermite interpolation?",a:"No, the formula requires $f$ to be at least $C^{2n+2}$."}],spline:[{q:"What is the definition of a spline function of degree $k$ on an interval $[a, b]$ with mesh $\\{x_i\\}$?",a:"A continuous function $S$ that is a polynomial of degree at most $k$ on each sub-interval and $S \\in C^{k-1}[a, b]$."},{q:"What is the common name for a spline function of degree $k = 1$?",a:"Linear spline function."},{q:"A spline function of degree $k = 2$ is referred to as a _____ spline function.",a:"quadratic"},{q:"A spline function of degree $k = 3$ is referred to as a _____ spline function.",a:"cubic"},{q:"How many parameters define a cubic spline $S$ consisting of $n$ polynomial segments?",a:"$4n$ parameters."},{q:"In cubic spline interpolation, how many conditions are provided by the interpolation requirements and the continuity of the first and second derivatives?",a:"$4n - 2$ conditions."},{q:"What additional boundary conditions define a 'natural' cubic spline?",a:"$S_0''(x_0) = 0$ and $S_{n-1}''(x_n) = 0$."},{q:"What additional boundary conditions define a 'clamped' (or complete) cubic spline?",a:"$S'(x_0) = y_0'$ and $S'(x_n) = y_n'$."},{q:"In the cubic polynomial form $S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$, what does $a_i$ represent?",a:"The function value at the point $x_i$, such that $a_i = y_i$."},{q:"What is the relationship between the coefficient $c_i$ and the second derivative $S_i''(x_i)$ in a cubic spline segment?",a:"$c_i = \\frac{S_i''(x_i)}{2}$."},{q:"What is the definition of the notation $\\Delta x_i$ used in spline interpolation formulas?",a:"$\\Delta x_i = x_{i+1} - x_i$."},{q:"What is the definition of the notation $\\Delta y_i$ used in spline interpolation formulas?",a:"$\\Delta y_i = y_{i+1} - y_i$."},{q:"Formula: How is the coefficient $d_i$ expressed in terms of $c_i$ and $c_{i+1}$?",a:"$d_i = \\frac{c_{i+1} - c_i}{3\\Delta x_i}$."},{q:"How is the coefficient $b_i$ expressed using $\\Delta y_i$, $\\Delta x_i$, $c_i$, and $c_{i+1}$?",a:"$b_i = \\frac{\\Delta y_i}{\\Delta x_i} - \\frac{2c_i + c_{i+1}}{3}\\Delta x_i$."},{q:"What type of matrix characterizes the system $Ax = b$ used to solve for the cubic spline coefficients $c_i$?",a:"A tridiagonal matrix."},{q:"Why is the system $Ax = b$ for natural cubic splines guaranteed to have a unique solution?",a:"Because the matrix $A$ is diagonally dominant."},{q:"In the system $Ax = b$ for a natural spline, what are the values of the first and last elements of the solution vector $x = (c_0, c_1, \\ldots, c_n)^T$?",a:"$c_0 = 0$ and $c_n = 0$."},{q:"Which boundary condition for cubic splines involves specifying the slope of the tangent line at the endpoints?",a:"Clamped spline (or complete spline) conditions."},{q:"What is the primary visual disadvantage of linear spline interpolation compared to cubic spline interpolation?",a:"Linear splines are not smooth (not differentiable at the mesh points)."},{q:"Theorem 6.24: For a natural cubic spline $S$ and any other $C^2$ interpolating function $f$, what inequality holds regarding their second derivatives?",a:"$\\int_a^b (S''(x))^2 \\, dx \\leq \\int_a^b (f''(x))^2 \\, dx$."},{q:"What does the minimal property of natural cubic splines (the integral of the squared second derivative) signify physically?",a:"It represents the 'smoothest' interpolation among all possible $C^2$ interpolating functions."},{q:"In the error bounds for clamped cubic splines, what does $M_4$ represent?",a:"$M_4 = \\max\\{|f^{(4)}(x)| : x \\in [a, b]\\}$."},{q:"In the error bounds for cubic splines, what does $h$ represent?",a:"The maximum length of the sub-intervals ($h = \\max \\Delta x_i$)."},{q:"The error bound for $|f(x) - S(x)|$ in clamped cubic spline interpolation is proportional to what power of the step size $h$?",a:"$h^4$."},{q:"The error bound for $|f'(x) - S'(x)|$ in clamped cubic spline interpolation is proportional to what power of the step size $h$?",a:"$h^3$."},{q:"The error bound for $|f''(x) - S''(x)|$ in clamped cubic spline interpolation is proportional to what power of the step size $h$?",a:"$h^2$."},{q:"True or False: Natural cubic spline interpolation is better at avoiding oscillations near the ends of an interval compared to high-degree Lagrange interpolation.",a:"True."},{q:"Which numerical algorithm is recommended for efficiently solving the tridiagonal system $Ax = b$ in spline calculations?",a:"Gaussian elimination for tridiagonal systems (Algorithm 3.37)."},{q:"What is the condition for $c_0$ in the linear system for a clamped spline with given $y_0'$?",a:"$2c_0 \\Delta x_0 + c_1 \\Delta x_0 = 3\\frac{\\Delta y_0}{\\Delta x_0} - 3y_0'$."},{q:"What is the condition for $c_n$ in the linear system for a clamped spline with given $y_n'$?",a:"$c_{n-1}\\Delta x_{n-1} + 2c_n \\Delta x_{n-1} = 3y_n' - 3\\frac{\\Delta y_{n-1}}{\\Delta x_{n-1}}$."},{q:"Process: To prove $\\int_a^b S''(x)g''(x) \\, dx = 0$, what calculus technique is applied after splitting the integral over sub-intervals?",a:"Integration by parts."},{q:"If $S$ is a cubic spline, what is the nature of its third derivative $S'''$ on any sub-interval $[x_i, x_{i+1}]$?",a:"It is a constant function."},{q:"In the proof of the minimal property, why does $\\int_{x_{i-1}}^{x_i} g'(x) \\, dx$ equal zero?",a:"Because $g(x_i) = f(x_i) - S(x_i) = 0$ for all $i$ (both functions interpolate the same data)."},{q:"What is the continuity class of a $k$-th degree spline function on the interval $(a, b)$?",a:"$C^{k-1}(a, b)$."},{q:"How many conditions are required to uniquely determine a cubic spline with $n$ sub-intervals?",a:"$4n$ conditions."},{q:"Concept: Piecewise linear interpolation",a:"Definition: Connecting data points $(x_i, y_i)$ with straight line segments; geometrically equivalent to a linear spline."},{q:"In the context of spline error bounds, what does $k$ represent in the formula $|f''(x) - S''(x)| \\leq (\\frac{1}{12} + \\frac{h}{3k})M_4 h^2$?",a:"The minimum length of the sub-intervals ($k = \\min \\Delta x_i$)."},{q:"What term is used for $S'(x_n)$ and $S''(x_n)$ in equations where $x_n$ is the right endpoint?",a:"Left-sided derivatives."},{q:"Which equation relates $c_i, c_{i+1}, c_{i+2}$ for $i = 0, \\ldots, n-2$ in a general cubic spline?",a:"$c_i \\Delta x_i + 2c_{i+1}(\\Delta x_i + \\Delta x_{i+1}) + c_{i+2}\\Delta x_{i+1} = 3\\frac{\\Delta y_{i+1}}{\\Delta x_{i+1}} - 3\\frac{\\Delta y_i}{\\Delta x_i}$."},{q:"What property of cubic splines makes them 'smooth enough' for most practical applications?",a:"They are twice continuously differentiable ($C^2$)."}]},j={glossary:{en:"Glossary",hu:"Fogalomtár"},flashcards:{en:"Flashcards",hu:"Tanulókártyák"},shuffle:{en:"🔀 Shuffle",hu:"🔀 Keverés"},reset:{en:"Reset order",hu:"Eredeti sorrend"},question:{en:"Question",hu:"Kérdés"},answer:{en:"Answer",hu:"Válasz"},prev:{en:"‹ Prev",hu:"‹ Előző"},next:{en:"Next ›",hu:"Következő ›"},showAnswer:{en:"Show answer",hu:"Válasz mutatása"},showQuestion:{en:"Show question",hu:"Kérdés mutatása"}};function ze({deck:i}){const{lang:a}=Q(),s=ke[i]??[],[t,l]=p.useState(null);if(!s.length)return null;const o=a;return e.jsxs("section",{className:"deck",children:[e.jsx("h3",{children:j.glossary[o]}),e.jsx("div",{className:"deck-list",children:s.map((r,f)=>{const n=t===f;return e.jsxs("button",{className:"theorem-card deck-item",style:{textAlign:"left",cursor:"pointer",width:"100%"},onClick:()=>l(n?null:f),children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12},children:[e.jsx("span",{style:{fontWeight:700},children:e.jsx(E,{markdown:r.term[o]})}),e.jsx("span",{style:{opacity:.5},children:n?"−":"+"})]}),n&&e.jsx(E,{markdown:r.def[o]})]},f)})})]})}const P=i=>Array.from({length:i},(a,s)=>s);function we(i){const a=P(i);for(let s=a.length-1;s>0;s--){const t=Math.floor(Math.random()*(s+1));[a[s],a[t]]=[a[t],a[s]]}return a}function qe({deck:i}){const{lang:a}=Q(),s=ve[i]??[],t=a,[l,o]=p.useState(()=>P(s.length)),[r,f]=p.useState(0),[n,_]=p.useState(!1),m=p.useMemo(()=>s[l[r]],[s,l,r]);if(!s.length)return null;const h=u=>{_(!1),f($=>($+u+s.length)%s.length)};return e.jsxs("section",{className:"deck",children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8},children:[e.jsx("h3",{style:{margin:0},children:j.flashcards[t]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsxs("span",{style:{opacity:.6,fontSize:"0.85rem"},children:[r+1," / ",s.length]}),e.jsx("button",{className:"btn",onClick:()=>{o(we(s.length)),f(0),_(!1)},children:j.shuffle[t]}),e.jsx("button",{className:"btn",onClick:()=>{o(P(s.length)),f(0),_(!1)},children:j.reset[t]})]})]}),e.jsxs("button",{className:"theorem-card",style:{width:"100%",minHeight:150,textAlign:"left",cursor:"pointer",marginTop:10},onClick:()=>_(u=>!u),children:[e.jsx("div",{className:"theorem-tag",children:n?j.answer[t]:j.question[t]}),e.jsx(E,{markdown:n?m.a:m.q})]}),e.jsxs("div",{style:{display:"flex",gap:10,marginTop:10,alignItems:"center"},children:[e.jsx("button",{className:"btn",onClick:()=>h(-1),children:j.prev[t]}),e.jsx("button",{className:"btn",style:{flex:1},onClick:()=>_(u=>!u),children:n?j.showQuestion[t]:j.showAnswer[t]}),e.jsx("button",{className:"btn",onClick:()=>h(1),children:j.next[t]})]})]})}const je=`## 6.5. Spline Interpolation

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
`,Se=`## 6.5. Spline interpoláció

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
`,Ae={lagrange:{en:se,hu:oe},newton:{en:ae,hu:te},hermite:{en:ie,hu:ne},spline:{en:je,hu:Se}};function De(i,a){var s;return((s=Ae[i])==null?void 0:s[a])??""}const Te=`#include <vector>
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
`,Le=`program hermite_demo
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
`,Ne=`package main

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
`,Me=`function hermite_coeffs(x, y, dy)
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
`,He=`// Hermite interpolation via divided differences with doubled nodes.
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
`,Ie=`function [z, a] = hermite_coeffs(x, y, dy)
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
`,Ce=`import numpy as np


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
`,Ve=`# Hermite interpolation via divided differences with doubled nodes.
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
`,We=`// Hermite interpolation via divided differences with doubled nodes.
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
`,Qe=`#include <vector>
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
`,Fe=`program lagrange_demo
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
`,Pe=`package main

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
`,Re=`function lagrange_coeffs(x, y)
    n = length(x)
    A = [x[i]^(j - 1) for i in 1:n, j in 1:n]   # Vandermonde matrix
    return A \\ y                                 # least-stable for large n
end

x = [-1.0, 1, 2, 3]; y = [-3.0, 1, 3, 29]
println(lagrange_coeffs(x, y))   # [5, -1, -6, 3]
`,Oe=`// Lagrange interpolation via the Vandermonde system V a = y.
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
`,Ge=`function a = lagrange_coeffs(x, y)
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
`,Ue=`# Polynomial coefficients a (low->high) of the degree n-1 interpolant
# through (x_i, y_i), via the Vandermonde system V a = y.
lagrange_coeffs <- function(x, y) {
  n <- length(x)
  V <- outer(x, 0:(n - 1), \`^\`)   # V[i, j] = x_i^j
  as.vector(solve(V, y))
}

x <- c(-1, 1, 2, 3)
y <- c(-3, 1, 3, 29)
cat("coefficients (low->high):", lagrange_coeffs(x, y), "\\n")
`,Ke=`// Lagrange interpolation via the Vandermonde system V a = y.
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
`,Xe=`lagrangeCoeffs[x_, y_] := Module[{n = Length[x], V},
   V = Table[x[[i]]^(j - 1), {i, n}, {j, n}];   (* Vandermonde *)
   LinearSolve[V, y]];
Print[lagrangeCoeffs[{-1, 1, 2, 3}, {-3, 1, 3, 29}]]   (* {5, -1, -6, 3} *)
`,Ye=`#include <vector>
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
`,Ze=`program newton_eval_demo
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
`,Je=`package main

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
`,en=`function newton_eval(x, a, t)
    p = a[end]
    for k in length(a)-1:-1:1
        p = p * (t - x[k]) + a[k]
    end
    return p
end

println(newton_eval([-1, 1, 2, 3], [-3, 2, 0, 3], 0))   # 5
`,nn=`// Evaluate the Newton form by nested (Horner-like) multiplication.
function newtonEval(x, a, t) {
  let p = a[a.length - 1];
  for (let k = a.length - 2; k >= 0; k--) p = p * (t - x[k]) + a[k];
  return p;
}
console.log(newtonEval([-1, 1, 2, 3], [-3, 2, 0, 3], 0)); // 5
`,tn=`function p = newton_eval(x, a, t)
% NEWTON_EVAL  Evaluate the Newton form by nested multiplication.
    p = a(end);
    for k = numel(a)-1:-1:1
        p = p*(t - x(k)) + a(k);
    end
end

% --- Demo ---
disp(newton_eval([-1 1 2 3], [-3 2 0 3], 0));   % 5
`,an=`def newton_eval(x, a, t):
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
`,on=`# Evaluate the Newton form  a_0 + a_1(t-x_0) + a_2(t-x_0)(t-x_1) + ...
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
`,sn=`// Evaluate the Newton form by nested (Horner-like) multiplication.
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
`,rn=`newtonEval[x_, a_, t_] := Module[{p = Last[a], k},
   Do[p = p (t - x[[k]]) + a[[k]], {k, Length[a] - 1, 1, -1}]; p];
Print[newtonEval[{-1, 1, 2, 3}, {-3, 2, 0, 3}, 0]]   (* 5 *)
`,ln=`#include <vector>
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
`,dn=`program divided_differences_demo
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
`,fn=`package main

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
`,_n=`function divided_differences(x, y)
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
`,xn=`// Newton divided-difference coefficients a_i = f[x_0, ..., x_i].
function dividedDifferences(x, y) {
  const n = x.length;
  const a = [...y];
  for (let j = 1; j < n; j++)
    for (let i = n - 1; i >= j; i--) a[i] = (a[i] - a[i - 1]) / (x[i] - x[i - j]);
  return a;
}
console.log(dividedDifferences([-1, 1, 2, 3], [-3, 1, 3, 29])); // [-3, 2, 0, 3]
`,cn=`function a = divided_differences(x, y)
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
`,hn=`import numpy as np


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
`,$n=`# Newton divided differences and Horner evaluation of the Newton form.
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
`,mn=`// Newton divided-difference coefficients a_i = f[x_0, ..., x_i].
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
`,pn=`dividedDifferences[x_, y_] := Module[{a = N[y], n = Length[x], i, j},
   Do[a[[i]] = (a[[i]] - a[[i - 1]])/(x[[i]] - x[[i - j + 1]]),
    {j, 2, n}, {i, n, j, -1}];
   a];
Print[dividedDifferences[{-1, 1, 2, 3}, {-3, 1, 3, 29}]]
`,un=`#include <vector>
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
`,gn=`program spline_demo
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
`,yn=`package main

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
`,bn=`function natural_cubic_spline(x, y)
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
`,kn=`// Natural cubic spline: per-interval coefficients (a, b, c, d).
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
`,vn=`function [a, b, c, d] = natural_cubic_spline(x, y)
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
`,zn=`import numpy as np


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
`,wn=`# Natural cubic spline. Returns per-interval (a, b, c, d) with
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
`,qn=`// Natural cubic spline: per-interval coefficients (a, b, c, d).
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
`,jn=`naturalCubicSpline[x_, y_] := Module[{n = Length[x], h, A, rhs, c, a, b, d},
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
`,Sn=Object.assign({"./hermite.cpp":Te,"./hermite.f90":Le,"./hermite.go":Ne,"./hermite.jl":Me,"./hermite.js":He,"./hermite.m":Ie,"./hermite.py":Ce,"./hermite.r":Ve,"./hermite.rs":We,"./hermite.wl":Ee,"./lagrange.cpp":Qe,"./lagrange.f90":Fe,"./lagrange.go":Pe,"./lagrange.jl":Re,"./lagrange.js":Oe,"./lagrange.m":Ge,"./lagrange.py":Be,"./lagrange.r":Ue,"./lagrange.rs":Ke,"./lagrange.wl":Xe,"./newton-eval.cpp":Ye,"./newton-eval.f90":Ze,"./newton-eval.go":Je,"./newton-eval.jl":en,"./newton-eval.js":nn,"./newton-eval.m":tn,"./newton-eval.py":an,"./newton-eval.r":on,"./newton-eval.rs":sn,"./newton-eval.wl":rn,"./newton.cpp":ln,"./newton.f90":dn,"./newton.go":fn,"./newton.jl":_n,"./newton.js":xn,"./newton.m":cn,"./newton.py":hn,"./newton.r":$n,"./newton.rs":mn,"./newton.wl":pn,"./spline.cpp":un,"./spline.f90":gn,"./spline.go":yn,"./spline.jl":bn,"./spline.js":kn,"./spline.m":vn,"./spline.py":zn,"./spline.r":wn,"./spline.rs":qn,"./spline.wl":jn}),q=(i,a)=>Sn[`./${i}.${a}`],An={lagrange:{en:"Lagrange interpolation (Vandermonde system)",hu:"Lagrange-interpoláció (Vandermonde-rendszer)"},newton:{en:"Newton's divided differences (coefficients)",hu:"Newton-féle osztott differenciák (együtthatók)"},"newton-eval":{en:"Newton polynomial evaluation (nested form)",hu:"Newton-polinom kiértékelése (beágyazott alak)"},hermite:{en:"Hermite interpolation",hu:"Hermite-interpoláció"},spline:{en:"Natural cubic spline",hu:"Természetes köbös spline"}},Dn=i=>({id:i,caption:An[i],snippets:{matlab:q(i,"m"),python:q(i,"py"),cpp:q(i,"cpp"),julia:q(i,"jl"),rust:q(i,"rs"),fortran:q(i,"f90"),wolfram:q(i,"wl"),javascript:q(i,"js"),go:q(i,"go"),r:q(i,"r")}}),Tn={lagrange:["lagrange"],newton:["newton","newton-eval"],hermite:["hermite"],spline:["spline"]};function Ln(i){return(Tn[i]??[]).map(Dn)}const Nn={lagrange:[{id:"q-lagrange-1",prompt:{en:"In two-variable Lagrange interpolation, the polynomial L_{n,m}(x,y) is:",hu:"A kétváltozós Lagrange-interpolációban az L_{n,m}(x,y) polinom:"},options:[{en:"∑_i ∑_j z_ij l_i(x) l̃_j(y)",hu:"∑_i ∑_j z_ij l_i(x) l̃_j(y)"},{en:"the product L_n(x) L_m(y)",hu:"az L_n(x) L_m(y) szorzat"},{en:"a sum of polynomials in x only",hu:"csak x-ben vett polinomok összege"},{en:"a single monomial xⁿ yᵐ",hu:"egyetlen xⁿ yᵐ monom"}],answer:0,explanation:{en:"It is the double sum of node values times the tensor product of 1-D basis polynomials.",hu:"Ez a csomóponti értékek kettős összege az 1D-s bázispolinomok tenzorszorzatával."}},{id:"q-lagrange-2",prompt:{en:"The Lagrange interpolating polynomial L_n(x) can be written as:",hu:"Az L_n(x) Lagrange-interpolációs polinom felírható:"},options:[{en:"L_n(x) = ∑_k y_k l_k(x)",hu:"L_n(x) = ∑_k y_k l_k(x)"},{en:"L_n(x) = y₀ + y₁x + … + y_n xⁿ",hu:"L_n(x) = y₀ + y₁x + … + y_n xⁿ"},{en:"L_n(x) = ∏_k y_k l_k(x)",hu:"L_n(x) = ∏_k y_k l_k(x)"},{en:"L_n(x) = ∫_a^b y(t) l_k(t) dt",hu:"L_n(x) = ∫_a^b y(t) l_k(t) dt"}],answer:0,explanation:{en:"It is the sum of node values weighted by the Lagrange basis polynomials.",hu:"A csomóponti értékek összege a Lagrange-bázispolinomokkal súlyozva."}},{id:"q-lagrange-3",prompt:{en:"For equidistant nodes with spacing h and x ∈ (x_k, x_{k+1}), the product ∏|x − x_i| satisfies:",hu:"h lépésközű ekvidisztáns csomópontoknál és x ∈ (x_k, x_{k+1}) esetén a ∏|x − x_i| szorzatra teljesül:"},options:[{en:"≤ (hⁿ⁺¹/4) · n!",hu:"≤ (hⁿ⁺¹/4) · n!"},{en:"≤ (hⁿ⁺¹/2) · n!",hu:"≤ (hⁿ⁺¹/2) · n!"},{en:"≤ (hⁿ⁺¹/8) · n!",hu:"≤ (hⁿ⁺¹/8) · n!"},{en:"≤ hⁿ⁺¹",hu:"≤ hⁿ⁺¹"}],answer:0,explanation:{en:"The standard equidistant bound is hⁿ⁺¹·n!/4.",hu:"A szokásos ekvidisztáns korlát hⁿ⁺¹·n!/4."}},{id:"q-lagrange-4",prompt:{en:"The Lagrange basis polynomial l_k(x) satisfies:",hu:"Az l_k(x) Lagrange-bázispolinomra teljesül:"},options:[{en:"l_k(x_k) = 1 and l_k(x_i) = 0 for all i ≠ k",hu:"l_k(x_k) = 1 és l_k(x_i) = 0 minden i ≠ k-ra"},{en:"l_k(x_i) = 1 for all i",hu:"l_k(x_i) = 1 minden i-re"},{en:"l_k(x) = xᵏ",hu:"l_k(x) = xᵏ"},{en:"l_k(x_i) = 0 for all i",hu:"l_k(x_i) = 0 minden i-re"}],answer:0,explanation:{en:"The basis polynomials are cardinal: l_k(x_i) = δ_{ki}.",hu:"A bázispolinomok kardinálisak: l_k(x_i) = δ_{ki}."}},{id:"q-lagrange-5",prompt:{en:"The remainder term in the degree-n Lagrange interpolation error formula is:",hu:"Az n-edfokú Lagrange-interpoláció hibaképletében a maradéktag:"},options:[{en:"[f⁽ⁿ⁾(ξ)/n!] ∏(x − x_i)",hu:"[f⁽ⁿ⁾(ξ)/n!] ∏(x − x_i)"},{en:"[f⁽ⁿ⁺¹⁾(ξ)/(n+1)!] ∏(x − x_i)",hu:"[f⁽ⁿ⁺¹⁾(ξ)/(n+1)!] ∏(x − x_i)"},{en:"f''(ξ)(x − x₀)",hu:"f''(ξ)(x − x₀)"},{en:"f'(ξ) ∏(x − x_i)",hu:"f'(ξ) ∏(x − x_i)"}],answer:1,explanation:{en:"The error uses the (n+1)-th derivative divided by (n+1)!.",hu:"A hiba az (n+1)-edik deriváltat használja (n+1)!-sal osztva."}}],newton:[{id:"q-newton-1",prompt:{en:"Which is the explicit formula for f[x₀,…,x_n]?",hu:"Melyik az f[x₀,…,x_n] explicit képlete?"},options:[{en:"f⁽ⁿ⁾(x₀)/n!",hu:"f⁽ⁿ⁾(x₀)/n!"},{en:"∑_i f(x_i) / ∏_{j≠i}(x_i − x_j)",hu:"∑_i f(x_i) / ∏_{j≠i}(x_i − x_j)"},{en:"∑_i f(x_i)(x_i − x₀)",hu:"∑_i f(x_i)(x_i − x₀)"},{en:"∏_i f(x_i)",hu:"∏_i f(x_i)"}],answer:1,explanation:{en:"The divided difference equals ∑_i f(x_i) / ∏_{j≠i}(x_i − x_j).",hu:"Az osztott differencia egyenlő ∑_i f(x_i) / ∏_{j≠i}(x_i − x_j)-vel."}},{id:"q-newton-2",prompt:{en:"The recursive definition of the n-th divided difference is:",hu:"Az n-edik osztott differencia rekurzív definíciója:"},options:[{en:"f[x₀,…,x_n] = ∑_k f[x_k]",hu:"f[x₀,…,x_n] = ∑_k f[x_k]"},{en:"f[x₀,…,x_n] = f[x₁,…,x_n] − f[x₀,…,x_{n−1}]",hu:"f[x₀,…,x_n] = f[x₁,…,x_n] − f[x₀,…,x_{n−1}]"},{en:"f[x₀,…,x_n] = (f[x₁,…,x_n] − f[x₀,…,x_{n−1}]) / (x_n − x₀)",hu:"f[x₀,…,x_n] = (f[x₁,…,x_n] − f[x₀,…,x_{n−1}]) / (x_n − x₀)"},{en:"f[x₀,…,x_n] = (x_n − x₀) f[x₁,…,x_{n−1}]",hu:"f[x₀,…,x_n] = (x_n − x₀) f[x₁,…,x_{n−1}]"}],answer:2,explanation:{en:"Each higher divided difference is the difference of two lower ones over (x_n − x₀).",hu:"Minden magasabb osztott differencia két alacsonyabb különbsége (x_n − x₀)-val osztva."}},{id:"q-newton-3",prompt:{en:"Which statement best applies to computing divided differences?",hu:"Melyik állítás illik legjobban az osztott differenciák kiszámítására?"},options:[{en:"In practice the recursive definition is preferred",hu:"A gyakorlatban a rekurzív definíciót részesítjük előnyben"},{en:"We compute them using Taylor's approximation",hu:"Taylor-közelítéssel számoljuk őket"},{en:"The explicit formula needs fewer operations",hu:"Az explicit képlet kevesebb műveletet igényel"},{en:"We prefer the explicit formula",hu:"Az explicit képletet részesítjük előnyben"}],answer:0,explanation:{en:"The recursive table is more efficient and numerically convenient than the explicit sum.",hu:"A rekurzív tábla hatékonyabb és numerikusan kényelmesebb az explicit összegnél."}},{id:"q-newton-4",prompt:{en:"The first divided difference of f at nodes x₀, x₁ is:",hu:"Az f első osztott differenciája az x₀, x₁ csomópontokban:"},options:[{en:"(f(x₁) − f(x₀)) / (x₁ − x₀)",hu:"(f(x₁) − f(x₀)) / (x₁ − x₀)"},{en:"(f(x₀) − f(x₁)) / (x₁ − x₀)",hu:"(f(x₀) − f(x₁)) / (x₁ − x₀)"},{en:"f(x₁) − f(x₀)",hu:"f(x₁) − f(x₀)"},{en:"(f'(x₁) − f'(x₀)) / (x₁ − x₀)",hu:"(f'(x₁) − f'(x₀)) / (x₁ − x₀)"}],answer:0,explanation:{en:"f[x₀,x₁] = (f(x₁) − f(x₀)) / (x₁ − x₀).",hu:"f[x₀,x₁] = (f(x₁) − f(x₀)) / (x₁ − x₀)."}},{id:"q-newton-5",prompt:{en:"The zeroth divided difference of f at a node x₀ is defined as:",hu:"Az f nulladik osztott differenciája egy x₀ csomópontban a definíció szerint:"},options:[{en:"0",hu:"0"},{en:"f'(x₀)",hu:"f'(x₀)"},{en:"x₀",hu:"x₀"},{en:"f(x₀)",hu:"f(x₀)"}],answer:3,explanation:{en:"f[x₀] = f(x₀).",hu:"f[x₀] = f(x₀)."}},{id:"q-newton-6",prompt:{en:"The Newton interpolating polynomial of degree n is:",hu:"Az n-edfokú Newton-interpolációs polinom:"},options:[{en:"L_n(x) = ∑_k y_k xᵏ",hu:"L_n(x) = ∑_k y_k xᵏ"},{en:"L_n(x) = ∏_k (x − x_k)",hu:"L_n(x) = ∏_k (x − x_k)"},{en:"L_n(x) = f[x₀]xⁿ + … + f[x_n]",hu:"L_n(x) = f[x₀]xⁿ + … + f[x_n]"},{en:"L_n(x) = ∑_k f[x₀,…,x_k](x − x₀)…(x − x_{k−1})",hu:"L_n(x) = ∑_k f[x₀,…,x_k](x − x₀)…(x − x_{k−1})"}],answer:3,explanation:{en:"Newton form sums divided-difference coefficients times the nested node products.",hu:"A Newton-alak az osztott differencia együtthatókat összegzi a beágyazott csomóponti szorzatokkal."}},{id:"q-newton-7",prompt:{en:"After adding a new data point (x_{n+1}, y_{n+1}), the updated polynomial is:",hu:"Egy új (x_{n+1}, y_{n+1}) adatpont hozzáadása után a frissített polinom:"},options:[{en:"L_{n+1}(x) = f[x₀,…,x_n](x − x_{n+1})",hu:"L_{n+1}(x) = f[x₀,…,x_n](x − x_{n+1})"},{en:"No change: L_{n+1}(x) = L_n(x)",hu:"Nincs változás: L_{n+1}(x) = L_n(x)"},{en:"L_{n+1}(x) = L_n(x) + f[x₀,…,x_{n+1}](x − x₀)…(x − x_n)",hu:"L_{n+1}(x) = L_n(x) + f[x₀,…,x_{n+1}](x − x₀)…(x − x_n)"},{en:"L_{n+1}(x) = L_n(x) + f[x_{n+1}]",hu:"L_{n+1}(x) = L_n(x) + f[x_{n+1}]"}],answer:2,explanation:{en:"Newton form only appends one new term, leaving previous coefficients intact.",hu:"A Newton-alak csak egy új tagot fűz hozzá, a korábbi együtthatókat érintetlenül hagyva."}},{id:"q-newton-8",prompt:{en:"The factor (x − x₀)(x − x₁)…(x − x_{k−1}) in the Newton polynomial has degree:",hu:"A Newton-polinom (x − x₀)(x − x₁)…(x − x_{k−1}) tényezőjének foka:"},options:[{en:"n − k",hu:"n − k"},{en:"k",hu:"k"},{en:"n",hu:"n"},{en:"k − 1",hu:"k − 1"}],answer:1,explanation:{en:"There are k linear factors, so the degree is k.",hu:"k darab lineáris tényező van, így a fok k."}},{id:"q-newton-9",prompt:{en:"Building the divided-difference table for n+1 points has arithmetic complexity:",hu:"Az osztott differencia tábla felépítése n+1 pontra milyen aritmetikai komplexitású:"},options:[{en:"O(n)",hu:"O(n)"},{en:"O(2ⁿ)",hu:"O(2ⁿ)"},{en:"O(n²)",hu:"O(n²)"},{en:"O(n³)",hu:"O(n³)"}],answer:2,explanation:{en:"The triangular table requires O(n²) operations.",hu:"A háromszögtábla O(n²) műveletet igényel."}},{id:"q-newton-10",prompt:{en:"The main computational advantage of the Newton form over the Lagrange form is that it:",hu:"A Newton-alak fő számítási előnye a Lagrange-alakkal szemben, hogy:"},options:[{en:"allows easy addition of new mesh points without recomputing all coefficients",hu:"lehetővé teszi új csomópontok könnyű hozzáadását az összes együttható újraszámítása nélkül"},{en:"avoids any division operations",hu:"elkerül minden osztási műveletet"},{en:"minimizes rounding errors",hu:"minimalizálja a kerekítési hibákat"},{en:"produces lower-degree polynomials",hu:"alacsonyabb fokú polinomokat állít elő"}],answer:0,explanation:{en:"New points add a single term, reusing all earlier coefficients.",hu:"Új pontok egyetlen tagot adnak hozzá, újrahasználva az összes korábbi együtthatót."}}],hermite:[{id:"q-hermite-1",prompt:{en:"Hermite interpolation is especially appropriate when:",hu:"A Hermite-interpoláció különösen akkor megfelelő, ha:"},options:[{en:"the nodes are equally spaced",hu:"a csomópontok egyenletesen helyezkednek el"},{en:"only function values are known",hu:"csak függvényértékek ismertek"},{en:"second derivatives are known everywhere",hu:"a második deriváltak mindenhol ismertek"},{en:"derivative values at the nodes are also known",hu:"a csomópontokban a deriváltértékek is ismertek"}],answer:3,explanation:{en:"Hermite matches both function and derivative values at the nodes.",hu:"A Hermite a csomópontokban a függvény- és a deriváltértékeket is illeszti."}},{id:"q-hermite-2",prompt:{en:"When building the Hermite divided-difference table, each node x_i is:",hu:"A Hermite osztott differencia tábla felépítésekor minden x_i csomópontot:"},options:[{en:"listed three times",hu:"háromszor írunk fel"},{en:"omitted in even columns",hu:"kihagyunk a páros oszlopokban"},{en:"listed once",hu:"egyszer írunk fel"},{en:"listed twice in consecutive rows",hu:"kétszer írunk fel egymást követő sorokban"}],answer:3,explanation:{en:"Each node is duplicated so the derivative condition enters the table.",hu:"Minden csomópontot megkettőzünk, hogy a deriváltfeltétel bekerüljön a táblába."}},{id:"q-hermite-3",prompt:{en:"For n+1 nodes, the Hermite problem specifies how many interpolation conditions?",hu:"n+1 csomópontra a Hermite-feladat hány interpolációs feltételt ad meg?"},options:[{en:"2n",hu:"2n"},{en:"n + 1",hu:"n + 1"},{en:"n²",hu:"n²"},{en:"2(n + 1)",hu:"2(n + 1)"}],answer:3,explanation:{en:"A value and a derivative at each of n+1 nodes give 2(n+1) conditions.",hu:"n+1 csomópont mindegyikében egy érték és egy derivált 2(n+1) feltételt ad."}},{id:"q-hermite-4",prompt:{en:"The degree of the Hermite polynomial for n+1 mesh points is at most:",hu:"A Hermite-polinom foka n+1 csomópontra legfeljebb:"},options:[{en:"n + 1",hu:"n + 1"},{en:"2n",hu:"2n"},{en:"2n + 1",hu:"2n + 1"},{en:"n",hu:"n"}],answer:2,explanation:{en:"2(n+1) conditions determine a polynomial of degree at most 2n+1.",hu:"A 2(n+1) feltétel legfeljebb 2n+1 fokú polinomot határoz meg."}},{id:"q-hermite-5",prompt:{en:"The extended divided difference f[x₀, x₀] is defined to be:",hu:"A kiterjesztett f[x₀, x₀] osztott differencia definíció szerint:"},options:[{en:"f'(x₀)",hu:"f'(x₀)"},{en:"f(x₀)",hu:"f(x₀)"},{en:"0",hu:"0"},{en:"f''(x₀)",hu:"f''(x₀)"}],answer:0,explanation:{en:"As x₁ → x₀ the first divided difference tends to f′(x₀).",hu:"Ahogy x₁ → x₀, az első osztott differencia f′(x₀)-hoz tart."}}],spline:[{id:"q-spline-1",prompt:{en:"A cubic spline with S''(x₀) = 0 and S''(x_n) = 0 is called a:",hu:"Az S''(x₀) = 0 és S''(x_n) = 0 feltételű köbös spline neve:"},options:[{en:"natural spline",hu:"természetes spline"},{en:"clamped spline",hu:"rögzített (clamped) spline"},{en:"quadratic spline",hu:"kvadratikus spline"},{en:"not-a-knot spline",hu:"not-a-knot spline"}],answer:0,explanation:{en:"Zero second derivatives at the endpoints define the natural cubic spline.",hu:"A végpontokban nulla második deriváltak definiálják a természetes köbös spline-t."}},{id:"q-spline-2",prompt:{en:"A spline function S of degree k on [a,b] is a function that:",hu:"Egy k-adfokú S spline-függvény [a,b]-n olyan függvény, amely:"},options:[{en:"is piecewise polynomial of degree ≤ k and belongs to Cᵏ⁻¹[a,b]",hu:"szakaszonként legfeljebb k-adfokú polinom, és Cᵏ⁻¹[a,b]-beli"},{en:"satisfies S⁽ᵏ⁾(x) = 0 everywhere",hu:"mindenhol teljesíti S⁽ᵏ⁾(x) = 0-t"},{en:"has continuous first derivative only",hu:"csak folytonos első deriválttal rendelkezik"},{en:"is a polynomial of degree k on the whole interval",hu:"a teljes intervallumon k-adfokú polinom"}],answer:0,explanation:{en:"A degree-k spline is piecewise polynomial and globally Cᵏ⁻¹.",hu:"Egy k-adfokú spline szakaszonként polinom és globálisan Cᵏ⁻¹."}},{id:"q-spline-3",prompt:{en:"Compared with high-degree global polynomial interpolation, cubic splines are preferred because they:",hu:"A magas fokú globális polinominterpolációhoz képest a köbös spline-okat azért részesítjük előnyben, mert:"},options:[{en:"use fewer sub-intervals",hu:"kevesebb részintervallumot használnak"},{en:"minimize oscillation while achieving smoothness",hu:"minimalizálják az oszcillációt, miközben simaságot érnek el"},{en:"require no continuity across nodes",hu:"nem igényelnek folytonosságot a csomópontokon"},{en:"never oscillate",hu:"sosem oszcillálnak"}],answer:1,explanation:{en:"Cubic splines avoid Runge-type oscillation while staying smooth (C²).",hu:"A köbös spline-ok elkerülik a Runge-féle oszcillációt, miközben simák (C²) maradnak."}},{id:"q-spline-4",prompt:{en:"The relation b_i = Δy_i/Δx_i − (2c_i + c_{i+1})/3 · Δx_i expresses:",hu:"A b_i = Δy_i/Δx_i − (2c_i + c_{i+1})/3 · Δx_i összefüggés kifejezi:"},options:[{en:"the natural boundary condition",hu:"a természetes peremfeltételt"},{en:"the slope of the piece S_i at x_i",hu:"az S_i szakasz meredekségét x_i-ben"},{en:"continuity of S'' at x_i",hu:"S'' folytonosságát x_i-ben"},{en:"the difference equation for c_i",hu:"a c_i-re vonatkozó differenciaegyenletet"}],answer:1,explanation:{en:"This formula gives the linear coefficient (slope at x_i) of the spline piece.",hu:"Ez a képlet a spline-szakasz lineáris együtthatóját (x_i-beli meredekségét) adja."}},{id:"q-spline-5",prompt:{en:"The unknown second-derivative parameters c_i = S''(x_i)/2 are found by solving a linear system whose matrix is:",hu:"Az ismeretlen c_i = S''(x_i)/2 második derivált paramétereket egy olyan lineáris rendszer megoldásával kapjuk, melynek mátrixa:"},options:[{en:"diagonal",hu:"diagonális"},{en:"upper-triangular",hu:"felső háromszög"},{en:"tridiagonal",hu:"tridiagonális"},{en:"dense and symmetric",hu:"teli és szimmetrikus"}],answer:2,explanation:{en:"Continuity conditions yield a tridiagonal system for the c_i.",hu:"A folytonossági feltételek tridiagonális rendszert adnak a c_i-kre."}}]};function B(i){return Nn[i]??[]}function C({str:i,method:a,points:s,derivatives:t,allowCompare:l,showTable:o,enableDerivatives:r}){const{lang:f}=Q(),n=i.lessons[a],_=De(a,f),m=Ln(a);return e.jsxs("article",{className:"lesson",children:[e.jsxs("header",{children:[e.jsx("h2",{children:n.title}),e.jsx("p",{className:"intro",children:n.intro})]}),e.jsxs("section",{className:"theorem-card",children:[e.jsx("div",{className:"theorem-tag",children:n.theoremTitle}),e.jsx(re,{block:!0,children:n.theorem}),e.jsx("p",{children:n.body})]}),_&&e.jsxs("details",{className:"lesson__theory",open:!0,children:[e.jsx("summary",{children:f==="hu"?"Elmélet":"Theory"}),e.jsx(E,{markdown:_})]}),m.map(h=>e.jsx(Z,{snippets:h.snippets,caption:h.caption},h.id)),B(a).length>0&&e.jsx(J,{questions:B(a)}),e.jsxs("p",{className:"tryit",children:["👉 ",n.tryIt]}),e.jsx(be,{str:i,initialPoints:s,initialDerivs:t,primary:a,allowCompare:l,showTable:o,enableDerivatives:r}),e.jsx(ze,{deck:a}),e.jsx(qe,{deck:a})]})}const V={lagrange:"#ff5d8f",newton:"#f5a623",hermite:"#9b5de5",spline:"#00bbf9"},U=i=>Math.cos(i),W=[-Math.PI-.5,Math.PI+.5],Mn=[-2.5,2.5];function Hn(){const i=Array.from({length:40}),a=["#ff5d8f","#f5a623","#9b5de5","#00bbf9","#3ddc97"];return e.jsx("div",{className:"confetti","aria-hidden":!0,children:i.map((s,t)=>e.jsx("span",{style:{left:`${Math.random()*100}%`,background:a[t%a.length],animationDelay:`${Math.random()*.6}s`,transform:`rotate(${Math.random()*360}deg)`}},t))})}function In({str:i}){const[a,s]=p.useState([{x:-3,y:-.5},{x:-1.2,y:.5},{x:.5,y:.7},{x:2,y:-.2},{x:3,y:-.8}]),[t,l]=p.useState("spline"),[o,r]=p.useState(!0),f=p.useMemo(()=>[...a].sort(($,g)=>$.x-g.x),[a]),n=p.useMemo(()=>F(t,f),[t,f]),_=p.useMemo(()=>{let $=0;for(let g=0;g<=80;g++){const k=W[0]+(W[1]-W[0])*g/80,S=Math.abs(n(k)-U(k));Number.isFinite(S)&&($=Math.max($,S))}return $},[n]),m=_<.18,h=[{fn:n,color:V[t],label:i.methods[t]}];o&&h.push({fn:U,color:"#8aa0b5",label:"cos x",dashed:!0});const u=($,g,k)=>s(S=>S.map((D,T)=>T===$?{x:g,y:k}:D));return e.jsxs("div",{className:"challenge",children:[e.jsxs("div",{className:"challenge-head",children:[e.jsx("h2",{children:i.nav.playground}),e.jsx("p",{className:"intro",children:i.tagline})]}),e.jsxs("div",{className:"challenge-bar",children:[e.jsx("div",{className:"methodpills",children:Object.keys(V).map($=>e.jsx("button",{className:`pill ${t===$?"on":""}`,style:t===$?{background:V[$],borderColor:V[$]}:{},onClick:()=>l($),children:i.methods[$]},$))}),e.jsxs("label",{className:"chip",children:[e.jsx("input",{type:"checkbox",checked:o,onChange:()=>r($=>!$)}),i.ui.showCos]})]}),e.jsxs("div",{className:"challenge-plotwrap",children:[e.jsx(K,{points:a,curves:h,domain:W,range:Mn,onDrag:u,width:720,height:440}),m&&e.jsx(Hn,{})]}),e.jsx("div",{className:`challenge-status ${m?"win":""}`,children:m?e.jsx("strong",{children:i.ui.nailedIt}):e.jsxs("span",{children:["🎯 ",i.ui.challengeHint," ",e.jsxs("em",{children:["(max Δ = ",_.toFixed(2),")"]})]})})]})}const Cn=[{id:"play",no:"6·play",title:{en:w.en.nav.playground,hu:w.hu.nav.playground},blurb:{en:"",hu:""}},{id:"lagrange",no:"6.1",title:{en:w.en.nav.lagrange,hu:w.hu.nav.lagrange},blurb:{en:"",hu:""}},{id:"newton",no:"6.2",title:{en:w.en.nav.newton,hu:w.hu.nav.newton},blurb:{en:"",hu:""}},{id:"hermite",no:"6.4",title:{en:w.en.nav.hermite,hu:w.hu.nav.hermite},blurb:{en:"",hu:""}},{id:"spline",no:"6.5",title:{en:w.en.nav.spline,hu:w.hu.nav.spline},blurb:{en:"",hu:""}}];function On(){const{lang:i}=Q(),a=w[i],s={scrollMarginTop:"calc(var(--nav-h) + var(--scrolly-topbar-h, 44px) + 8px)"};return e.jsxs("div",{className:"app ch-interpolation",children:[e.jsx(ee,{sections:Cn}),e.jsx("header",{className:"topbar",children:e.jsxs("div",{className:"brand",children:[e.jsx("span",{className:"logo",children:"📈"}),e.jsxs("div",{children:[e.jsx("div",{className:"brand-title",children:a.appTitle}),e.jsx("div",{className:"brand-sub",children:a.tagline})]})]})}),e.jsxs("main",{className:"content",children:[e.jsx("section",{id:"play",style:s,children:e.jsx(In,{str:a})}),e.jsx("section",{id:"lagrange",style:s,children:e.jsx(C,{str:a,method:"lagrange",points:[{x:-1,y:-3},{x:1,y:1},{x:2,y:3},{x:3,y:29}],allowCompare:!0})}),e.jsx("section",{id:"newton",style:s,children:e.jsx(C,{str:a,method:"newton",points:[{x:-1,y:-2},{x:1,y:0},{x:2,y:-2},{x:3,y:2}],showTable:!0,allowCompare:!0})}),e.jsx("section",{id:"hermite",style:s,children:e.jsx(C,{str:a,method:"hermite",points:[{x:-1,y:2},{x:1,y:4},{x:2,y:11}],derivatives:[3,-5,30],enableDerivatives:!0})}),e.jsx("section",{id:"spline",style:s,children:e.jsx(C,{str:a,method:"spline",points:[{x:0,y:.5},{x:1,y:.1},{x:1.5,y:2.5},{x:2,y:-1},{x:3,y:-.5},{x:4,y:0}],allowCompare:!0})})]}),e.jsx("footer",{className:"foot",children:"InterPlay · Numerical Analysis · Interpolation"})]})}export{On as default};
