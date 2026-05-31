import{r as u,j as e,f as Q}from"./index-fAGVnjOa.js";import{k as Y}from"./katex-Dc8nsIP1.js";import{M as W}from"./MarkdownView-AGnULaTC.js";import{C as Z,Q as J,S as ee}from"./Quiz-o-E7qUVi.js";import{a as ne,h as te,c as ie,n as ae,b as oe,l as le}from"./hermite.hu-BOdAixwp.js";import"./normalizeMath-hDG6FnZX.js";import"./index-_istd-ei.js";import"./CodeBlock-DwUIu0Kz.js";const j={en:{appTitle:"InterPlay",tagline:"Play with interpolation — Chapter 6",nav:{playground:"Playground",lagrange:"6.1 Lagrange",newton:"6.3 Newton",hermite:"6.4 Hermite",spline:"6.5 Spline"},methods:{lagrange:"Lagrange",newton:"Newton (divided diff.)",hermite:"Hermite",spline:"Natural cubic spline"},ui:{addPoint:"+ point",removePoint:"− point",reset:"Reset",dragHint:"Drag the dots to move the data points and watch the curve react.",showCos:"Show cos x",compareAll:"Compare all methods",derivatives:"Derivatives (Hermite)",challenge:"🎯 Challenge",challengeHint:"Move your points so the curve matches the dashed target!",nailedIt:"Nailed it! 🎉",points:"Data points",value:"y",deriv:"y′",light:"Light",dark:"Dark",table:"Divided-difference table",coefficients:"Newton coefficients",polynomialAt:"Evaluate at x ="},lessons:{lagrange:{title:"6.1 Lagrange Interpolation",intro:"Given pairwise different mesh points x₀,…,xₙ and values y₀,…,yₙ, we look for the unique polynomial of degree ≤ n through all points.",theoremTitle:"Theorem 6.1",theorem:"L_n(x) = \\sum_{k=0}^{n} y_k \\, l_k(x), \\qquad l_k(x)=\\prod_{i\\neq k}\\frac{x-x_i}{x_k-x_i}",body:"Each basis polynomial l_k equals 1 at x_k and 0 at the other nodes, so L_n hits every data point. Uniqueness follows from the Fundamental Theorem of Algebra.",tryIt:"Drag points below. With many equidistant nodes, watch the edges oscillate (Runge phenomenon)."},newton:{title:"6.3 Newton's Divided Difference Form",intro:"The same polynomial, written so that adding a new point only appends one term. Coefficients are divided differences.",theoremTitle:"Formula 6.6",theorem:"L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)",body:"Build the triangular table: each entry is the difference of the two to its left, divided by the spread of mesh points. The top row gives the coefficients.",tryIt:"Edit the points and watch the divided-difference table and coefficients update live."},hermite:{title:"6.4 Hermite Interpolation",intro:"Now we match function values AND derivatives at each node, giving a polynomial of degree ≤ 2n+1.",theoremTitle:"Theorem 6.18",theorem:"H_{2n+1}(x)=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots",body:"Each node is listed twice in the divided-difference table; the first divided difference of a repeated node is the given derivative value y′.",tryIt:"Set both y and y′ for each point; the tangent slope of the curve at each node matches y′."},spline:{title:"6.5 Spline Interpolation",intro:"Instead of one high-degree polynomial, join cubic pieces that stay C² — smooth and oscillation-free.",theoremTitle:"Theorem 6.22",theorem:"S_i(x)=a_i+b_i(x-x_i)+c_i(x-x_i)^2+d_i(x-x_i)^3,\\quad S''(x_0)=S''(x_n)=0",body:"The continuity conditions reduce to a tridiagonal, diagonally dominant linear system for the cᵢ — so the natural cubic spline always exists and is unique.",tryIt:"Compare the spline with the Lagrange curve on the same points — the spline never blows up at the edges."}}},hu:{appTitle:"InterPlay",tagline:"Játssz az interpolációval — 6. fejezet",nav:{playground:"Játszótér",lagrange:"6.1 Lagrange",newton:"6.3 Newton",hermite:"6.4 Hermite",spline:"6.5 Spline"},methods:{lagrange:"Lagrange",newton:"Newton (osztott diff.)",hermite:"Hermite",spline:"Természetes köbös spline"},ui:{addPoint:"+ pont",removePoint:"− pont",reset:"Alaphelyzet",dragHint:"Húzd a pontokat, és figyeld, hogyan reagál a görbe.",showCos:"cos x mutatása",compareAll:"Összes módszer összevetése",derivatives:"Deriváltak (Hermite)",challenge:"🎯 Kihívás",challengeHint:"Mozgasd a pontjaidat, hogy a görbe illeszkedjen a szaggatott célgörbére!",nailedIt:"Megvan! 🎉",points:"Alappontok",value:"y",deriv:"y′",light:"Világos",dark:"Sötét",table:"Osztott differenciák táblázata",coefficients:"Newton-együtthatók",polynomialAt:"Kiértékelés itt: x ="},lessons:{lagrange:{title:"6.1 Lagrange-interpoláció",intro:"Adott páronként különböző x₀,…,xₙ alappontok és y₀,…,yₙ értékek esetén keressük az egyértelmű, legfeljebb n-edfokú polinomot, amely átmegy minden ponton.",theoremTitle:"6.1. tétel",theorem:"L_n(x) = \\sum_{k=0}^{n} y_k \\, l_k(x), \\qquad l_k(x)=\\prod_{i\\neq k}\\frac{x-x_i}{x_k-x_i}",body:"Minden l_k alappolinom x_k-ban 1, a többi alappontban 0, így L_n minden adatponton átmegy. Az egyértelműség az algebra alaptételéből következik.",tryIt:"Húzd a pontokat. Sok ekvidisztáns alappontnál figyeld a szélek oszcillációját (Runge-jelenség)."},newton:{title:"6.3 A Lagrange-polinom Newton-féle alakja",intro:"Ugyanaz a polinom úgy felírva, hogy új pont hozzávétele csak egy taggal bővít. Az együtthatók osztott differenciák.",theoremTitle:"(6.6) képlet",theorem:"L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)",body:"Építsd fel a háromszög-táblázatot: minden elem a tőle balra lévő kettő különbsége, osztva a megfelelő alappontok különbségével. A felső sor adja az együtthatókat.",tryIt:"Módosítsd a pontokat, és nézd, ahogy a táblázat és az együtthatók élőben frissülnek."},hermite:{title:"6.4 Hermite-interpoláció",intro:"Most a függvényértékeket ÉS a deriváltakat is illesztjük minden alappontban, így legfeljebb 2n+1-edfokú polinomot kapunk.",theoremTitle:"6.18. tétel",theorem:"H_{2n+1}(x)=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots",body:"Minden alappont kétszer szerepel a táblázatban; az ismételt alappont elsőrendű osztott differenciája a megadott y′ derivált.",tryIt:"Állítsd be minden ponthoz az y és y′ értéket; a görbe érintőjének meredeksége az alappontban épp y′."},spline:{title:"6.5 Spline-interpoláció",intro:"Egyetlen magasfokú polinom helyett köbös darabokat illesztünk össze C²-folytonosan — sima és oszcillációmentes.",theoremTitle:"6.22. tétel",theorem:"S_i(x)=a_i+b_i(x-x_i)+c_i(x-x_i)^2+d_i(x-x_i)^3,\\quad S''(x_0)=S''(x_n)=0",body:"A folytonossági feltételek tridiagonális, diagonálisan domináns lineáris rendszerre vezetnek a cᵢ-kre — így a természetes köbös spline mindig létezik és egyértelmű.",tryIt:"Vesd össze a spline-t a Lagrange-görbével ugyanazon pontokon — a spline a széleken sosem szökik el."}}}};function se({children:t,block:a=!1}){const l=u.useRef(null);return u.useEffect(()=>{l.current&&Y.render(t,l.current,{throwOnError:!1,displayMode:a})},[t,a]),e.jsx("span",{ref:l,className:a?"tex-block":"tex-inline"})}const g=36;function U({points:t,curves:a,domain:l,range:i,onDrag:r,width:o=640,height:s=420}){const _=u.useRef(null),n=u.useRef(null),[h,m]=l,[c,k]=i,x=u.useCallback($=>g+($-h)/(m-h)*(o-2*g),[h,m,o]),p=u.useCallback($=>s-g-($-c)/(k-c)*(s-2*g),[c,k,s]),b=u.useCallback($=>h+($-g)/(o-2*g)*(m-h),[h,m,o]),A=u.useCallback($=>c+(s-g-$)/(s-2*g)*(k-c),[c,k,s]),L=$=>{let v="",d=!1;for(let f=0;f<=240;f++){const z=h+(m-h)*f/240,S=$(z);if(!Number.isFinite(S)||S<c-50*(k-c)||S>k+50*(k-c)){d=!1;continue}const T=x(z),N=p(S);v+=`${d?"L":"M"}${T.toFixed(1)} ${N.toFixed(1)} `,d=!0}return v},M=$=>{const y=_.current.getBoundingClientRect(),v=($.clientX-y.left)/y.width*o,d=($.clientY-y.top)/y.height*s;return{px:v,py:d}},D=$=>{if(n.current===null||!r)return;const{px:y,py:v}=M($);let d=b(y),f=A(v);d=Math.max(h,Math.min(m,d)),f=Math.max(c,Math.min(k,f)),r(n.current,Math.round(d*100)/100,Math.round(f*100)/100)},H=[];for(let $=Math.ceil(h);$<=m;$++)H.push($);const I=[];for(let $=Math.ceil(c);$<=k;$++)I.push($);return e.jsxs("svg",{ref:_,className:"plot",viewBox:`0 0 ${o} ${s}`,onPointerMove:D,onPointerUp:()=>n.current=null,onPointerLeave:()=>n.current=null,role:"img",children:[H.map($=>e.jsx("line",{className:"grid",x1:x($),y1:g,x2:x($),y2:s-g},`gx${$}`)),I.map($=>e.jsx("line",{className:"grid",x1:g,y1:p($),x2:o-g,y2:p($)},`gy${$}`)),c<=0&&k>=0&&e.jsx("line",{className:"axis",x1:g,y1:p(0),x2:o-g,y2:p(0)}),h<=0&&m>=0&&e.jsx("line",{className:"axis",x1:x(0),y1:g,x2:x(0),y2:s-g}),H.map($=>e.jsx("text",{className:"tick",x:x($),y:p(0)+14,textAnchor:"middle",children:$},`tx${$}`)),a.map(($,y)=>e.jsx("path",{className:"curve",d:L($.fn),stroke:$.color,strokeDasharray:$.dashed?"7 6":void 0,fill:"none"},y)),t.map(($,y)=>e.jsxs("g",{children:[e.jsx("circle",{className:r?"pt draggable":"pt",cx:x($.x),cy:p($.y),r:8,onPointerDown:v=>{r&&(v.target.setPointerCapture(v.pointerId),n.current=y)}}),e.jsx("text",{className:"ptlabel",x:x($.x)+11,y:p($.y)-9,children:y})]},y)),a.filter($=>$.label).length>0&&e.jsx("g",{className:"legend",transform:`translate(${o-g-150}, ${g})`,children:a.filter($=>$.label).map(($,y)=>e.jsxs("g",{transform:`translate(0, ${y*18})`,children:[e.jsx("line",{x1:0,y1:0,x2:22,y2:0,stroke:$.color,strokeWidth:3,strokeDasharray:$.dashed?"5 4":void 0}),e.jsx("text",{className:"legendlabel",x:28,y:4,children:$.label})]},y))})]})}const R=1e-12;function re(t,a,l){let i=1,r=1;for(let o=0;o<t.length;o++)o!==a&&(i*=l-t[o],r*=t[a]-t[o]);return r===0?NaN:i/r}function $e(t,a){const l=t.map(r=>r.x);let i=0;for(let r=0;r<t.length;r++)i+=t[r].y*re(l,r,a);return i}function X(t,a){const l=t.length,i=Array.from({length:l},()=>[]);for(let r=0;r<l;r++)i[r][0]=a[r];for(let r=1;r<l;r++)for(let o=0;o<l-r;o++){const s=t[o+r]-t[o];i[o][r]=Math.abs(s)<R?NaN:(i[o+1][r-1]-i[o][r-1])/s}return i}function _e(t,a){return X(t,a)[0]}function he(t,a,l){let i=a[a.length-1];for(let r=a.length-2;r>=0;r--)i=i*(l-t[r])+a[r];return i}function de(t,a,l){const i=t.length,r=2*i,o=new Array(r),s=Array.from({length:r},()=>new Array(r).fill(NaN));for(let n=0;n<i;n++)o[2*n]=t[n],o[2*n+1]=t[n],s[2*n][0]=a[n],s[2*n+1][0]=a[n];for(let n=0;n<r-1;n++)o[n+1]===o[n]?s[n][1]=l[Math.floor(n/2)]:s[n][1]=(s[n+1][0]-s[n][0])/(o[n+1]-o[n]);for(let n=2;n<r;n++)for(let h=0;h<r-n;h++){const m=o[h+n]-o[h];s[h][n]=Math.abs(m)<R?NaN:(s[h+1][n-1]-s[h][n-1])/m}const _=s[0];return{z:o,table:s,coeffs:_}}function xe(t,a){const{z:l,coeffs:i}=t;let r=i[i.length-1];for(let o=i.length-2;o>=0;o--)r=r*(a-l[o])+i[o];return r}function fe(t,a){const l=t.length-1;if(l<1)return[];const i=new Array(l);for(let n=0;n<l;n++)i[n]=t[n+1]-t[n];const r=Array.from({length:l+1},()=>new Array(l+1).fill(0)),o=new Array(l+1).fill(0);r[0][0]=1,r[l][l]=1;for(let n=1;n<l;n++)r[n][n-1]=i[n-1],r[n][n]=2*(i[n-1]+i[n]),r[n][n+1]=i[n],o[n]=3/i[n]*(a[n+1]-a[n])-3/i[n-1]*(a[n]-a[n-1]);const s=ce(r,o),_=[];for(let n=0;n<l;n++){const h=a[n],m=(a[n+1]-a[n])/i[n]-i[n]*(2*s[n]+s[n+1])/3,c=(s[n+1]-s[n])/(3*i[n]);_.push({x:t[n],a:h,b:m,c:s[n],d:c})}return _}function ce(t,a){const l=t.length,i=t.map(s=>s.slice()),r=a.slice();for(let s=1;s<l;s++){if(Math.abs(i[s][s-1])<R)continue;const _=i[s][s-1]/i[s-1][s-1];for(let n=0;n<l;n++)i[s][n]-=_*i[s-1][n];r[s]-=_*r[s-1]}const o=new Array(l).fill(0);for(let s=l-1;s>=0;s--){let _=r[s];for(let n=s+1;n<l;n++)_-=i[s][n]*o[n];o[s]=i[s][s]===0?0:_/i[s][s]}return o}function me(t,a,l){if(t.length===0)return NaN;let i=0;for(let s=0;s<t.length;s++)l>=t[s].x&&(i=s);const r=t[i],o=l-r.x;return r.a+r.b*o+r.c*o*o+r.d*o*o*o}function ue(t,a,l){const i=a.map(o=>o.x),r=a.map(o=>o.y);switch(t){case"lagrange":return o=>$e(a,o);case"newton":{const o=_e(i,r);return s=>he(i,o,s)}case"hermite":{const o=l??r.map(()=>0),s=de(i,r,o);return _=>xe(s,_)}case"spline":{const o=fe(i,r);return s=>me(o,i,s)}default:return()=>NaN}}const pe=X,F=ue,O=t=>Number.isFinite(t)?(Math.round(t*1e3)/1e3).toString():"—";function ge({xs:t,ys:a}){const l=pe(t,a),i=t.length;return e.jsx("div",{className:"difftable-wrap",children:e.jsx("table",{className:"difftable",children:e.jsx("tbody",{children:t.map((r,o)=>e.jsxs("tr",{children:[e.jsx("td",{className:"xi",children:O(r)}),Array.from({length:i}).map((s,_)=>{const n=_<=i-1-o&&l[o][_]!==void 0,h=o===0;return e.jsx("td",{className:n?h?"cell coeff":"cell":"cell empty",children:n?O(l[o][_]):""},_)})]},o))})})})}const B={lagrange:"#ff5d8f",newton:"#f5a623",hermite:"#9b5de5",spline:"#00bbf9"};function ke(t){const a=t.map(h=>h.x),l=t.map(h=>h.y),i=Math.min(...a),r=Math.max(...a),o=Math.min(...l),s=Math.max(...l),_=Math.max(1,(r-i)*.25),n=Math.max(1,(s-o)*.35);return{domain:[Math.floor(i-_),Math.ceil(r+_)],range:[Math.floor(o-n),Math.ceil(s+n)]}}function ye({str:t,initialPoints:a,initialDerivs:l,primary:i,allowCompare:r=!1,showTable:o=!1,enableDerivatives:s=!1}){const[_,n]=u.useState(a),[h,m]=u.useState(l??a.map(()=>0)),[c,k]=u.useState({lagrange:i==="lagrange",newton:i==="newton",hermite:i==="hermite",spline:i==="spline"}),[x,p]=u.useState(0),b=u.useMemo(()=>{const d=_.map((f,z)=>z).sort((f,z)=>_[f].x-_[z].x);return{pts:d.map(f=>_[f]),dys:d.map(f=>h[f]??0)}},[_,h]),{domain:A,range:L}=u.useMemo(()=>ke(_),[_]),M=u.useMemo(()=>{const d=[];return Object.keys(c).forEach(f=>{if(!c[f]||(f==="spline"||f==="newton")&&b.pts.length<2)return;const z=F(f,b.pts,b.dys);d.push({fn:z,color:B[f],label:t.methods[f]})}),d},[c,b,t]),D=(d,f,z)=>n(S=>S.map((T,N)=>N===d?{x:f,y:z}:T)),H=()=>{const d=Math.max(..._.map(f=>f.x));n(f=>[...f,{x:Math.round((d+1)*10)/10,y:0}]),m(f=>[...f,0])},I=()=>{_.length<=2||(n(d=>d.slice(0,-1)),m(d=>d.slice(0,-1)))},$=()=>{n(a),m(l??a.map(()=>0))},v=u.useMemo(()=>F(i,b.pts,b.dys),[i,b])(x);return e.jsxs("div",{className:"playground",children:[e.jsxs("div",{className:"plotcol",children:[e.jsx(U,{points:_,curves:M,domain:A,range:L,onDrag:D}),e.jsx("p",{className:"hint",children:t.ui.dragHint})]}),e.jsxs("div",{className:"controls",children:[e.jsxs("div",{className:"btnrow",children:[e.jsx("button",{onClick:H,children:t.ui.addPoint}),e.jsx("button",{onClick:I,disabled:_.length<=2,children:t.ui.removePoint}),e.jsx("button",{onClick:$,children:t.ui.reset})]}),r&&e.jsx("div",{className:"methodtoggles",children:Object.keys(c).map(d=>e.jsxs("label",{className:`chip ${c[d]?"on":""}`,children:[e.jsx("input",{type:"checkbox",checked:c[d],onChange:()=>k(f=>({...f,[d]:!f[d]}))}),e.jsx("span",{className:"swatch",style:{background:B[d]}}),t.methods[d]]},d))}),e.jsxs("div",{className:"pointeditor",children:[e.jsx("div",{className:"pe-head",children:t.ui.points}),e.jsxs("table",{className:"pe-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"x"}),e.jsx("th",{children:t.ui.value}),s&&e.jsx("th",{children:t.ui.deriv})]})}),e.jsx("tbody",{children:_.map((d,f)=>e.jsxs("tr",{children:[e.jsx("td",{className:"idx",children:f}),e.jsx("td",{children:e.jsx("input",{type:"number",step:"0.1",value:d.x,onChange:z=>D(f,parseFloat(z.target.value)||0,d.y)})}),e.jsx("td",{children:e.jsx("input",{type:"number",step:"0.1",value:d.y,onChange:z=>D(f,d.x,parseFloat(z.target.value)||0)})}),s&&e.jsx("td",{children:e.jsx("input",{type:"number",step:"0.1",value:h[f]??0,onChange:z=>m(S=>S.map((T,N)=>N===f?parseFloat(z.target.value)||0:T))})})]},f))})]})]}),e.jsxs("div",{className:"evalbox",children:[e.jsxs("label",{children:[t.ui.polynomialAt," ",e.jsx("input",{type:"number",step:"0.1",value:x,onChange:d=>p(parseFloat(d.target.value)||0)})]}),e.jsxs("span",{className:"evalresult",children:["= ",Number.isFinite(v)?(Math.round(v*1e3)/1e3).toString():"—"]})]})]}),o&&e.jsxs("div",{className:"tablecol",children:[e.jsx("h4",{children:t.ui.table}),e.jsx(ge,{xs:b.pts.map(d=>d.x),ys:b.pts.map(d=>d.y)})]})]})}const be={lagrange:[{term:{en:"Lagrange interpolation problem (6.1)",hu:"Lagrange-interpolációs feladat (6.1)"},def:{en:"Given pairwise distinct nodes $x_0,\\dots,x_n$ and values $y_i$, find a polynomial $L_n$ of degree $\\le n$ with $L_n(x_i)=y_i$ for all $i$. It has a unique solution.",hu:"Adott páronként különböző $x_0,\\dots,x_n$ alappontok és $y_i$ értékek esetén keressünk egy legfeljebb $n$-edfokú $L_n$ polinomot, amelyre $L_n(x_i)=y_i$ minden $i$-re. Egyetlen megoldása van."}},{term:{en:"Lagrange basis polynomials $l_k$ (6.2)",hu:"Lagrange-alappolinomok $l_k$ (6.2)"},def:{en:"$l_k(x)=\\prod_{i\\ne k}\\dfrac{x-x_i}{x_k-x_i}$ — degree $n$, with $l_k(x_i)=\\delta_{ki}$ (1 at $x_k$, 0 at the other nodes). They also satisfy $\\sum_k l_k(x)=1$.",hu:"$l_k(x)=\\prod_{i\\ne k}\\dfrac{x-x_i}{x_k-x_i}$ — $n$-edfokú, $l_k(x_i)=\\delta_{ki}$ (1 az $x_k$-ban, 0 a többi alappontban). Teljesül $\\sum_k l_k(x)=1$ is."}},{term:{en:"Lagrange polynomial $L_n$ (Thm 6.1)",hu:"Lagrange-polinom $L_n$ (6.1. tétel)"},def:{en:"$L_n(x)=\\sum_{k=0}^n y_k\\,l_k(x)$ solves the interpolation problem. Uniqueness follows from the Fundamental Theorem of Algebra: a degree-$\\le n$ polynomial with $n+1$ roots is identically zero.",hu:"$L_n(x)=\\sum_{k=0}^n y_k\\,l_k(x)$ megoldja az interpolációs feladatot. Az egyértelműség az algebra alaptételéből következik: egy legfeljebb $n$-edfokú, $n+1$ gyökű polinom azonosan nulla."}},{term:{en:"Interpolation vs extrapolation",hu:"Interpoláció vs extrapoláció"},def:{en:"Using $L_n(x)$ to approximate $f(x)=y$ between the nodes is **interpolation**; outside the node interval it is **extrapolation**, which is typically far less accurate (Example 6.3).",hu:"Az $L_n(x)$ használata $f(x)=y$ közelítésére az alappontok között **interpoláció**; az alappont-intervallumon kívül **extrapoláció**, amely jellemzően sokkal pontatlanabb (6.3. példa)."}},{term:{en:"Generalized Rolle's theorem (Thm 6.4)",hu:"Általánosított Rolle-tétel (6.4. tétel)"},def:{en:"If $f\\in C^n[a,b]$ vanishes at $n+1$ distinct points, then $f^{(n)}(\\xi)=0$ for some $\\xi$. The key tool for the interpolation error formula.",hu:"Ha $f\\in C^n[a,b]$ eltűnik $n+1$ különböző pontban, akkor $f^{(n)}(\\xi)=0$ valamely $\\xi$-re. Az interpolációs hibaformula fő eszköze."}},{term:{en:"Interpolation error formula (Thm 6.5)",hu:"Interpolációs hibaformula (6.5. tétel)"},def:{en:"For $f\\in C^{n+1}$, $f(x)-L_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^n(x-x_i)$ for some $\\xi$ between the nodes and $x$ — the node-product factor explains where the error is largest.",hu:"$f\\in C^{n+1}$ esetén $f(x)-L_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^n(x-x_i)$ valamely $\\xi$-re az alappontok és $x$ között — az alappont-szorzat tényező mutatja, hol legnagyobb a hiba."}},{term:{en:"Equidistant error bound (Thm 6.6)",hu:"Egyenközű hibakorlát (6.6. tétel)"},def:{en:"For equidistant nodes on $[a,b]$, $|f(x)-L_n(x)|\\le\\dfrac{M_{n+1}}{4(n+1)}\\big(\\tfrac{b-a}{n}\\big)^{n+1}$ with $M_{n+1}=\\max|f^{(n+1)}|$.",hu:"$[a,b]$-n egyenközű alappontokra $|f(x)-L_n(x)|\\le\\dfrac{M_{n+1}}{4(n+1)}\\big(\\tfrac{b-a}{n}\\big)^{n+1}$, ahol $M_{n+1}=\\max|f^{(n+1)}|$."}},{term:{en:"Runge phenomenon",hu:"Runge-jelenség"},def:{en:"With many equidistant nodes, high-degree interpolation can oscillate wildly near the interval ends (the $M_{n+1}$ factor grows). Remedies: Chebyshev nodes or piecewise (spline) interpolation.",hu:"Sok egyenközű alapponttal a magas fokú interpoláció erősen oszcillálhat az intervallum szélein (az $M_{n+1}$ tényező nő). Megoldás: Csebisev-alappontok vagy szakaszonkénti (spline) interpoláció."}},{term:{en:"Bivariate Lagrange interpolation (6.5)",hu:"Kétváltozós Lagrange-interpoláció (6.5)"},def:{en:"On a rectangular grid, $L_{n,m}(x,y)=\\sum_{i,j}z_{ij}\\,l_i(x)\\tilde l_j(y)$ — a tensor product of 1-D Lagrange bases that matches $z_{ij}=f(x_i,y_j)$ at every grid point.",hu:"Téglalap rácson $L_{n,m}(x,y)=\\sum_{i,j}z_{ij}\\,l_i(x)\\tilde l_j(y)$ — az 1-D Lagrange-bázisok tenzorszorzata, amely minden rácspontban illeszkedik $z_{ij}=f(x_i,y_j)$-re."}}],newton:[{term:{en:"Divided difference",hu:"Osztott differencia"},def:{en:"Defined recursively: $f[x_0]=f(x_0)$, $f[x_0,x_1]=\\dfrac{f(x_1)-f(x_0)}{x_1-x_0}$, and in general $f[x_0,\\dots,x_n]=\\dfrac{f[x_1,\\dots,x_n]-f[x_0,\\dots,x_{n-1}]}{x_n-x_0}$.",hu:"Rekurzívan definiált: $f[x_0]=f(x_0)$, $f[x_0,x_1]=\\dfrac{f(x_1)-f(x_0)}{x_1-x_0}$, általában $f[x_0,\\dots,x_n]=\\dfrac{f[x_1,\\dots,x_n]-f[x_0,\\dots,x_{n-1}]}{x_n-x_0}$."}},{term:{en:"Explicit formula (Thm 6.10)",hu:"Explicit képlet (6.10. tétel)"},def:{en:"$f[x_0,\\dots,x_n]=\\sum_{k=0}^n\\dfrac{f(x_k)}{\\prod_{i\\ne k}(x_k-x_i)}$ — a symmetric closed form (proved by induction).",hu:"$f[x_0,\\dots,x_n]=\\sum_{k=0}^n\\dfrac{f(x_k)}{\\prod_{i\\ne k}(x_k-x_i)}$ — szimmetrikus zárt alak (indukcióval bizonyítva)."}},{term:{en:"Symmetry / order-independence (Cor 6.11)",hu:"Szimmetria / sorrendfüggetlenség (6.11)"},def:{en:"A divided difference does not depend on the order of its nodes — any permutation of $x_0,\\dots,x_n$ gives the same value. (And it depends continuously on the nodes, Cor 6.12.)",hu:"Az osztott differencia nem függ az alappontok sorrendjétől — az $x_0,\\dots,x_n$ bármely permutációja ugyanazt adja. (És folytonosan függ az alappontoktól, 6.12.)"}},{term:{en:"Newton's divided-difference form (6.6)",hu:"Newton-féle osztott differencia alak (6.6)"},def:{en:"$L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)$ — the *same* unique interpolating polynomial as Lagrange, just in a different basis.",hu:"$L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)$ — *ugyanaz* az egyértelmű interpolációs polinom, mint a Lagrange, csak más bázisban."}},{term:{en:"Divided-difference table",hu:"Osztott differencia tábla"},def:{en:"A triangular table: each entry is the difference of the two to its left divided by the spread of the relevant nodes. The top diagonal $f[x_0],f[x_0,x_1],\\dots$ gives the Newton coefficients.",hu:"Háromszög tábla: minden elem a tőle balra lévő kettő különbsége, osztva az érintett alappontok távolságával. A felső átló $f[x_0],f[x_0,x_1],\\dots$ adja a Newton-együtthatókat."}},{term:{en:"Incremental updates",hu:"Növekményes frissítés"},def:{en:"Adding a new data point only appends one term (one new divided difference) — unlike Lagrange, where every basis polynomial changes. Ideal when nodes arrive one at a time.",hu:"Új adatpont hozzáadása csak egy tagot fűz hozzá (egy új osztott differenciát) — szemben a Lagrange-zsal, ahol minden alappolinom megváltozik. Ideális, ha az alappontok egyenként érkeznek."}},{term:{en:"Confluent divided difference",hu:"Egybeeső osztott differencia"},def:{en:"As $x_1\\to x_0$, $f[x_0,x_1]\\to f'(x_0)$, so one defines $f[x_0,x_0]:=f'(x_0)$. Repeated nodes encode derivative data — the basis of Hermite interpolation.",hu:"Ha $x_1\\to x_0$, akkor $f[x_0,x_1]\\to f'(x_0)$, így $f[x_0,x_0]:=f'(x_0)$. Az ismételt alappontok deriváltadatot kódolnak — a Hermite-interpoláció alapja."}}],hermite:[{term:{en:"Hermite interpolation problem",hu:"Hermite-interpolációs feladat"},def:{en:"Match both values and first derivatives at the nodes: $g(x_i)=f(x_i)$ and $g'(x_i)=f'(x_i)$ for $i=0,\\dots,n$ — $2(n+1)$ conditions, so a unique polynomial of degree $\\le 2n+1$.",hu:"Az alappontokban az értékeket és az első deriváltakat is illesztjük: $g(x_i)=f(x_i)$ és $g'(x_i)=f'(x_i)$, $i=0,\\dots,n$ — $2(n+1)$ feltétel, így egyetlen, legfeljebb $2n+1$-edfokú polinom."}},{term:{en:"Hermite polynomial $H_{2n+1}$ (Thm 6.18)",hu:"Hermite-polinom $H_{2n+1}$ (6.18. tétel)"},def:{en:"The unique degree-$\\le(2n+1)$ solution. Geometrically its graph passes through each $(x_i,y_i)$ with prescribed tangent slope $y_i'$. Uniqueness: a nonzero difference would have $2n+2$ roots (each $x_i$ doubled).",hu:"Az egyetlen, legfeljebb $(2n+1)$-edfokú megoldás. Geometriailag a grafikonja minden $(x_i,y_i)$-n átmegy az előírt $y_i'$ érintő-meredekséggel. Egyértelműség: egy nemnulla különbségnek $2n+2$ gyöke lenne (minden $x_i$ kétszeres)."}},{term:{en:"Repeated-node divided differences",hu:"Ismételt alappontú osztott differenciák"},def:{en:"Hermite reuses Newton's form with each node listed twice: $H_{2n+1}=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots$, where $f[x_i,x_i]=f'(x_i)$.",hu:"A Hermite a Newton-alakot használja minden alappontot kétszer felsorolva: $H_{2n+1}=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots$, ahol $f[x_i,x_i]=f'(x_i)$."}},{term:{en:"Hermite divided-difference table",hu:"Hermite osztott differencia tábla"},def:{en:"Build the divided-difference table with each $x_i$ duplicated; the first-column repeats hold $f(x_i)$ and the first divided difference of a repeated pair is the given derivative $f'(x_i)$. The top diagonal gives the Hermite coefficients.",hu:"Építsd fel az osztott differencia táblát minden $x_i$-t megkettőzve; az első oszlop ismétlései $f(x_i)$-t tartják, és egy ismételt pár első osztott differenciája az adott $f'(x_i)$ derivált. A felső átló adja a Hermite-együtthatókat."}},{term:{en:"Hermite error formula (Thm 6.19)",hu:"Hermite hibaformula (6.19. tétel)"},def:{en:"For $f\\in C^{2n+2}$, $f(x)-H_{2n+1}(x)=\\dfrac{f^{(2n+2)}(\\xi)}{(2n+2)!}\\prod_{i=0}^n(x-x_i)^2$ — the node factors are *squared*, reflecting the double matching.",hu:"$f\\in C^{2n+2}$ esetén $f(x)-H_{2n+1}(x)=\\dfrac{f^{(2n+2)}(\\xi)}{(2n+2)!}\\prod_{i=0}^n(x-x_i)^2$ — az alappont-tényezők *négyzeten* vannak, a kettős illesztést tükrözve."}},{term:{en:"Limit of Lagrange interpolation",hu:"A Lagrange-interpoláció határeseteként"},def:{en:"$H_{2n+1}$ is the limit of the Lagrange polynomial on $2n+2$ nodes as each extra node $\\tilde x_i\\to x_i$ — the confluent (coalescing-node) case of ordinary interpolation.",hu:"$H_{2n+1}$ a $2n+2$ alappontú Lagrange-polinom határértéke, amikor minden extra $\\tilde x_i\\to x_i$ — a hagyományos interpoláció egybeeső alappontú (konfluens) esete."}}],spline:[{term:{en:"Spline function (degree $k$)",hu:"Spline-függvény ($k$-adfokú)"},def:{en:"A function $S\\in C^{k-1}[a,b]$ that is a polynomial of degree $\\le k$ on each subinterval $[x_i,x_{i+1}]$. Degrees 1, 2, 3 give linear, quadratic and cubic splines.",hu:"Olyan $S\\in C^{k-1}[a,b]$ függvény, amely minden $[x_i,x_{i+1}]$ részintervallumon legfeljebb $k$-adfokú polinom. Az 1, 2, 3 fok a lineáris, kvadratikus és köbös spline-t adja."}},{term:{en:"Cubic spline — why",hu:"Köbös spline — miért"},def:{en:"Cubic splines are $C^2$ (twice continuously differentiable): smooth enough for practice and free of the Runge oscillations of high-degree single-polynomial interpolation.",hu:"A köbös spline $C^2$ (kétszer folytonosan differenciálható): a gyakorlatban elég sima, és mentes a magas fokú egypolinomos interpoláció Runge-oszcillációitól."}},{term:{en:"Continuity conditions (6.10–6.13)",hu:"Folytonossági feltételek (6.10–6.13)"},def:{en:"Each piece matches the data ($S_i(x_i)=y_i$, $S_i(x_{i+1})=y_{i+1}$) and joins its neighbour smoothly: equal first and second derivatives at every interior node ($S_i'=S_{i+1}'$, $S_i''=S_{i+1}''$).",hu:"Minden szakasz illeszkedik az adatra ($S_i(x_i)=y_i$, $S_i(x_{i+1})=y_{i+1}$), és simán csatlakozik a szomszédjához: minden belső pontban egyenlő első és második derivált ($S_i'=S_{i+1}'$, $S_i''=S_{i+1}''$)."}},{term:{en:"Natural spline (6.14)",hu:"Természetes spline (6.14)"},def:{en:"Closes the system with zero curvature at the ends: $S''(x_0)=S''(x_n)=0$. The natural cubic spline interpolation problem has a unique solution (Thm 6.22).",hu:"A rendszert nulla görbülettel zárja a végeken: $S''(x_0)=S''(x_n)=0$. A természetes köbös spline interpolációs feladatnak egyetlen megoldása van (6.22. tétel)."}},{term:{en:"Clamped spline (6.23)",hu:"Rögzített (clamped) spline (6.23)"},def:{en:"Instead of zero end-curvature, prescribe the end slopes $S'(x_0)=y_0'$, $S'(x_n)=y_n'$. Usually more accurate than natural when the true end derivatives are known.",hu:"A nulla véggörbület helyett a végmeredekségeket írjuk elő: $S'(x_0)=y_0'$, $S'(x_n)=y_n'$. Általában pontosabb a természetesnél, ha a valódi végderiváltak ismertek."}},{term:{en:"Tridiagonal system for $c_i$ (6.22)",hu:"Tridiagonális rendszer a $c_i$-kre (6.22)"},def:{en:"Eliminating $b_i,d_i$ leaves a tridiagonal, diagonally dominant system for the second-derivative coefficients $c_i$, solvable in $\\mathcal{O}(n)$ by the Thomas algorithm; then $d_i=(c_{i+1}-c_i)/(3\\Delta x_i)$ and $b_i$ follow.",hu:"A $b_i,d_i$ kiküszöbölése egy tridiagonális, diagonálisan domináns rendszert hagy a második derivált $c_i$ együtthatókra, amely a Thomas-algoritmussal $\\mathcal{O}(n)$-ben megoldható; majd $d_i=(c_{i+1}-c_i)/(3\\Delta x_i)$ és $b_i$ adódik."}}]},ze={lagrange:[{q:{en:"In the context of interpolation, what are the given pairwise different points $x_0, x_1, \\ldots, x_n$ called?",hu:"Az interpoláció keretében hogyan nevezzük az adott páronként különböző $x_0, x_1, \\ldots, x_n$ pontokat?"},a:{en:"Mesh points (or node points).",hu:"Hálópontok (vagy csomópontok)."}},{q:{en:"The problem of finding a polynomial $L_n$ of degree at most $n$ such that $L_n(x_i) = y_i$ for $i = 0, \\ldots, n$ is known as _____.",hu:"A legfeljebb $n$ fokú $L_n$ polinom megtalálásának problémája úgy, hogy $L_n(x_i) = y_i$ $i = 0, \\ldots, n$ esetén _____."},a:{en:"Lagrange interpolation",hu:"Lagrange interpoláció"}},{q:{en:"What is the maximum degree of a Lagrange interpolating polynomial that fits $n+1$ data points?",hu:"Mekkora a $n+1$ adatpontokra illeszkedő Lagrange interpoláló polinom maximális foka?"},a:{en:"$n$",hu:"$n$"}},{q:{en:"How many distinct solutions exist for a Lagrange interpolation problem with $n+1$ points and a polynomial of degree at most $n$?",hu:"Hány különböző megoldás létezik egy Lagrange-interpolációs feladatra $n+1$ pontokkal és legfeljebb $n$ fokszámú polinomokkal?"},a:{en:"Exactly one (the solution is unique).",hu:"Pontosan egy (a megoldás egyedi)."}},{q:{en:"What is the specific name given to the polynomials $l_0, \\ldots, l_n$ used to construct the Lagrange polynomial?",hu:"Mi a konkrét név a $l_0, \\ldots, l_n$ polinomoknak, amelyeket a Lagrange-polinom megalkotásához használnak?"},a:{en:"Lagrange basis polynomials of degree $n$.",hu:"$n$ fokú Lagrange-alapú polinomok."}},{q:{en:"What is the value of the Lagrange basis polynomial $l_k(x_i)$ when $k \\ne i$?",hu:"Mekkora a $l_k(x_i)$ Lagrange-bázispolinom értéke, amikor $k \\ne i$?"},a:{en:"0",hu:"0"}},{q:{en:"What is the value of the Lagrange basis polynomial $l_k(x_i)$ when $k = i$?",hu:"Mekkora a $l_k(x_i)$ Lagrange-bázispolinom értéke, amikor $k = i$?"},a:{en:"1",hu:"1"}},{q:{en:"Using basis polynomials $l_k(x)$, what is the formula for the Lagrange interpolating polynomial $L_n(x)$?",hu:"A $l_k(x)$ bázispolinomokat használva mi a képlete a $L_n(x)$ Lagrange interpolációs polinomnak?"},a:{en:"$L_n(x) = \\sum_{k=0}^{n} y_k l_k(x)$",hu:"$L_n(x) = \\sum_{k=0}^{n} y_k l_k(x)$"}},{q:{en:"In the uniqueness proof for Lagrange interpolation, if $P(x)$ is the difference of two $n$-th degree interpolating polynomials, how many roots must $P(x)$ have?",hu:"A Lagrange-interpoláció egyediségének igazolásában, ha a $P(x)$ két $n$-edik fokú interpolációs polinom különbsége, akkor hány gyökének kell $P(x)$-nek lennie?"},a:{en:"$n + 1$ roots.",hu:"$n + 1$ gyökerei."}},{q:{en:"Which mathematical theorem is invoked to prove that the difference polynomial $P(x)$ in Lagrange interpolation must be identically zero?",hu:"Melyik matematikai tételt hívjuk meg annak bizonyítására, hogy a $P(x)$ különbségpolinomnak a Lagrange-interpolációban azonos nullának kell lennie?"},a:{en:"The Fundamental Theorem of Algebra.",hu:"Az algebra alaptétele."}},{q:{en:"What is the term for approximating a function value $f(x)$ using an interpolating polynomial when $x$ is outside the interval determined by the mesh points?",hu:"Mi a kifejezés a $f(x)$ függvényérték közelítésére interpoláló polinom segítségével, ha a $x$ kívül esik a hálópontok által meghatározott intervallumon?"},a:{en:"Extrapolation",hu:"Extrapoláció"}},{q:{en:"What is the term for approximating a function value $f(x)$ using an interpolating polynomial when $x$ is located between two mesh points?",hu:"Mi a kifejezés a $f(x)$ függvényérték közelítésére interpoláló polinom segítségével, ha a $x$ két hálópont között helyezkedik el?"},a:{en:"Interpolation",hu:"Interpoláció"}},{q:{en:"Concept: Rolle's Theorem",hu:"Koncepció: Rolle-tétel"},a:{en:"Definition: If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a) = f(b)$, there exists $\\xi \\in (a,b)$ such that $f'(\\xi) = 0$.",hu:"Definíció: Ha a $f$ folyamatos a $[a,b]$, differenciálható a $(a,b)$ és a $f(a) = f(b)$, akkor létezik $\\xi \\in (a,b)$, így a $f'(\\xi) = 0$."}},{q:{en:"According to the Generalized Rolle's Theorem, if $f \\in C^n(a,b)$ has $n+1$ roots, what can be said about the $n$-th derivative $f^{(n)}$?",hu:"Az általánosított Rolle-tétel szerint, ha a $f \\in C^n(a,b)$-nek $n+1$ gyökerei vannak, mit mondhatunk a $n$-edik $f^{(n)}$ deriváltról?"},a:{en:"There exists at least one point $\\xi$ in the interval spanned by the roots where $f^{(n)}(\\xi) = 0$.",hu:"Létezik legalább egy $\\xi$ pont abban az intervallumban, amelyet a $f^{(n)}(\\xi) = 0$ gyök feszül."}},{q:{en:"Let $f \\in C^{n+1}(a,b)$. What is the error term formula for $f(x) - L_n(x)$?",hu:"Legyen $f \\in C^{n+1}(a,b)$. Mi a $f(x) - L_n(x)$ hibakifejezési képlete?"},a:{en:"$\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n)$",hu:"$\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)(x - x_1) \\cdots (x - x_n)$"}},{q:{en:"In the Lagrange interpolation error formula, what does the value $\\xi$ depend on?",hu:"A Lagrange-interpolációs hibaképletben mitől függ a $\\xi$ érték?"},a:{en:"The value of $x$ (and the mesh points $x_i$).",hu:"A $x$ (és a $x_i$ hálópontok) értéke."}},{q:{en:"What does the notation $\\langle x, x_0, x_1, \\ldots, x_n \\rangle$ represent in the context of the error term $\\xi$?",hu:"Mit jelent a $\\langle x, x_0, x_1, \\ldots, x_n \\rangle$ jelölés a $\\xi$ hibatag kontextusában?"},a:{en:"The smallest interval containing $x$ and all mesh points $x_0, \\ldots, x_n$.",hu:"A legkisebb intervallum, amely tartalmazza a $x$-t és az összes $x_0, \\ldots, x_n$ hálópontot."}},{q:{en:"When the mesh points are equidistant, the formula for $x_i$ is $x_i = x_0 + i \\cdot$ _____.",hu:"Ha a hálópontok egyenlő távolságra vannak, a $x_i$ képlete $x_i = x_0 + i \\cdot$ _____."},a:{en:"$h$ (where $h$ is the step size).",hu:"$h$ (ahol a $h$ a lépés mérete)."}},{q:{en:"What does $M_{n+1}$ represent in the truncation error bound formula?",hu:"Mit jelent a $M_{n+1}$ a csonkítási hiba kötött képletében?"},a:{en:"$M_{n+1} = \\max\\{|f^{(n+1)}(t)| : t \\in [x_0, x_n]\\}$",hu:"$M_{n+1} = \\max\\{|f^{(n+1)}(t)|: t \\in [x_0, x_n]\\}$"}},{q:{en:"For equidistant points on $[a,b]$, what is the upper bound for the error $|f(x) - L_n(x)|$ in terms of $M_{n+1}$ and the interval length?",hu:"A $[a,b]$ egyenlő távolságú pontjainál mekkora a $|f(x) - L_n(x)|$ hiba felső korlátja a $M_{n+1}$ és az intervallum hosszában?"},a:{en:"$\\frac{M_{n+1}}{4(n+1)} (\\frac{b-a}{n})^{n+1}$",hu:"$\\frac{M_{n+1}}{4(n+1)} (\\frac{b-a}{n})^{n+1}$"}},{q:{en:"If $x$ is in the interval $(x_k, x_{k+1})$ and the points are equidistant with step $h$, what is the maximum value of $|(x - x_k)(x - x_{k+1})|$?",hu:"Ha a $x$ a $(x_k, x_{k+1})$ intervallumban van, és a pontok egyenlő távolságra vannak a $h$ lépéstől, akkor mi a $|(x - x_k)(x - x_{k+1})|$ maximális értéke?"},a:{en:"$\\frac{h^2}{4}$",hu:"$\\frac{h^2}{4}$"}},{q:{en:"Why do Lagrange polynomials typically fail to approximate $\\cos x$ well outside the interval defined by the mesh points?",hu:"Miért nem sikerül a Lagrange-polinomok általában jóval a hálópontok által meghatározott intervallumon kívül közelíteni a $\\cos x$-t?"},a:{en:"The cosine function is bounded, whereas polynomials of degree $n \\ge 1$ are unbounded as $|x| \\to \\infty$.",hu:"A koszinuszfüggvény korlátos, míg a $n \\ge 1$ fokú polinomok korlátlanok, mint $|x| \\to \\infty$."}},{q:{en:"In bivariate Lagrange interpolation on a rectangular domain, the interpolating function $L_{n,m}(x, y)$ is a _____ summation.",hu:"A kétváltozós Lagrange-interpolációban egy téglalap alakú tartományon a $L_{n,m}(x, y)$ interpolációs függvény egy _____ összegzés."},a:{en:"double",hu:"kettős"}},{q:{en:"Bivariate Lagrange Formula: $L_{n,m}(x, y) = \\sum_{i=0}^{n} \\sum_{j=0}^{m} z_{ij} \\cdot$ _____.",hu:"Kétváltozós Lagrange képlet: $L_{n,m}(x, y) = \\sum_{i=0}^{n} \\sum_{j=0}^{m} z_{ij} \\cdot$ _____."},a:{en:"$l_i(x) \\tilde{l}_j(y)$",hu:"$l_i(x) \\tilde{l}_j(y)$"}},{q:{en:"In bivariate Lagrange interpolation $L_{n,m}(x, y)$, if $y$ is fixed, the function becomes a polynomial in $x$ of degree at most _____.",hu:"A $L_{n,m}(x, y)$ kétváltozós Lagrange-interpolációban, ha a $y$ fix, akkor a függvény legfeljebb _____ fokos polinommá válik $x$-ben."},a:{en:"$n$",hu:"$n$"}},{q:{en:"In bivariate Lagrange interpolation $L_{n,m}(x, y)$, if $x$ is fixed, the function becomes a polynomial in $y$ of degree at most _____.",hu:"A $L_{n,m}(x, y)$ kétváltozós Lagrange-interpolációban, ha a $x$ fix, akkor a függvény legfeljebb _____ fokos polinommá válik $y$-ben."},a:{en:"$m$",hu:"$m$"}},{q:{en:"According to Theorem 6.8, what is the derivative of the function $x \\mapsto f^{(n+1)}(\\xi(x))$ with respect to $x$?",hu:"A 6.8. Tétel szerint mi a $x \\mapsto f^{(n+1)}(\\xi(x))$ függvény deriváltja a $x$ függvényhez képest?"},a:{en:"$\\frac{1}{n+2} f^{(n+2)}(\\eta(x))$",hu:"$\\frac{1}{n+2} f^{(n+2)}(\\eta(x))$"}},{q:{en:"Formula: Lagrange Basis Polynomial $l_k(x)$",hu:"Képlet: Lagrange-alapú polinom $l_k(x)$"},a:{en:"$l_k(x) = \\prod_{i=0, i \\ne k}^n \\frac{x - x_i}{x_k - x_i}$",hu:"$l_k(x) = \\prod_{i=0, i \\ne k}^n \\frac{x - x_i}{x_k - x_i}$"}},{q:{en:"If we use 3 mesh points to interpolate $\\cos x$ on $[-\\pi, \\pi]$, what is the degree of the resulting Lagrange polynomial $L_2(x)$?",hu:"Ha 3 hálópontot használunk a $\\cos x$ interpolálására $[-\\pi, \\pi]$-re, mekkora a kapott $L_2(x)$ Lagrange-polinom mértéke?"},a:{en:"2 (Quadratic).",hu:"2 (Kvadratikus)."}},{q:{en:"If we use 5 mesh points to interpolate $\\cos x$ on $[-\\pi, \\pi]$, what is the degree of the resulting Lagrange polynomial $L_4(x)$?",hu:"Ha 5 hálópontot használunk a $\\cos x$ interpolálására $[-\\pi, \\pi]$-re, mekkora a kapott $L_4(x)$ Lagrange-polinom mértéke?"},a:{en:"4 (Quartic).",hu:"4 (Quartic)."}},{q:{en:"What is the error bound for $L_2(x)$ interpolating $\\cos x$ on $[-\\pi, \\pi]$ using mesh points $-\\pi, 0, \\pi$?",hu:"Mekkora a hibahatár a $L_2(x)$ $\\cos x$ interpolálásakor a $[-\\pi, \\pi]$-n a $-\\pi, 0, \\pi$ hálópontok használatával?"},a:{en:"$\\approx 2.5839$ (Upper estimate).",hu:"$\\approx 2.5839$ (Felső becslés)."}},{q:{en:"What happens to the error bound of a Lagrange polynomial as the number of data points $n$ increases, provided $M_{n+1}$ is appropriately bounded?",hu:"Mi történik egy Lagrange-polinom hibahatárával, ha a $n$ adatpontok száma nő, feltéve, hogy a $M_{n+1}$ megfelelően korlátos?"},a:{en:"The error bound typically decreases (tends toward zero).",hu:"A hibahatár jellemzően csökken (nulla felé hajlik)."}},{q:{en:"The points $z_{ij}$ in bivariate interpolation correspond to $f(x_i, y_j)$. What is the condition $L_{n,m}(x_i, y_j)$ must satisfy?",hu:"A kétváltozós interpolációban a $z_{ij}$ pontok megfelelnek a $f(x_i, y_j)$ pontnak. Milyen feltételnek kell megfelelnie a $L_{n,m}(x_i, y_j)$-nek?"},a:{en:"$L_{n,m}(x_i, y_j) = z_{ij}$",hu:"$L_{n,m}(x_i, y_j) = z_{ij}$"}},{q:{en:"If an interpolation problem uses points $x_0 = 0, x_1 = 1, x_2 = 2$, what is the denominator of the basis polynomial $l_1(x)$?",hu:"Ha egy interpolációs feladat $x_0 = 0, x_1 = 1, x_2 = 2$ pontokat használ, mi a nevezője a $l_1(x)$ bázispolinomnak?"},a:{en:"$(1-0)(1-2) = -1$",hu:"$(1-0)(1-2) = -1$"}},{q:{en:"If $L_3(x)$ interpolates four points and we know the fourth derivative of the original function $f$ is zero, what is the interpolation error?",hu:"Ha a $L_3(x)$ négy pontot interpolál, és tudjuk, hogy az eredeti $f$ függvény negyedik deriváltja nulla, mi az interpolációs hiba?"},a:{en:"Zero (the interpolation is exact).",hu:"Nulla (az interpoláció pontos)."}},{q:{en:"In the expression $l_k(x) = \\frac{\\omega(x)}{(x-x_k)\\omega'(x_k)}$, what is $\\omega(x)$?",hu:"A $l_k(x) = \\frac{\\omega(x)}{(x-x_k)\\omega'(x_k)}$ kifejezésben mi a $\\omega(x)$?"},a:{en:"The nodal polynomial $\\prod_{i=0}^n (x - x_i)$.",hu:"A $\\prod_{i=0}^n (x - x_i)$ csomóponti polinom."}},{q:{en:"Does the order of the mesh points ($x_0 < x_1 < \\dots < x_n$) affect the existence of the Lagrange polynomial?",hu:"Befolyásolja-e a hálópontok sorrendje ($x_0 < x_1 < \\dots < x_n$) a Lagrange-polinom létezését?"},a:{en:"No, as long as the points are pairwise distinct.",hu:"Nem, amíg a pontok páronként elkülönülnek."}},{q:{en:"How does the degree of a bivariate Lagrange polynomial $L_{2,1}(x, y)$ compare in each variable?",hu:"Hogyan viszonyul a $L_{2,1}(x, y)$ kétváltozós Lagrange-polinom mértéke az egyes változókban?"},a:{en:"It is degree 2 in $x$ and degree 1 in $y$.",hu:"Ez a $x$ 2. fokozata és a $y$ 1. fokozata."}},{q:{en:"What is the term for the set of $l_i(x)$ because any polynomial of degree $n$ can be written as their linear combination?",hu:"Mi a kifejezés a $l_i(x)$ halmazra, mivel bármely $n$ fokú polinom felírható lineáris kombinációjaként?"},a:{en:"Basis (specifically the Lagrange Basis).",hu:"Basis (konkrétan a Lagrange Basis)."}},{q:{en:"What is the sum of all Lagrange basis polynomials $\\sum_{i=0}^n l_i(x)$ for any $x$?",hu:"Mennyi az összes $\\sum_{i=0}^n l_i(x)$ Lagrange-bázispolinom összege bármely $x$ esetén?"},a:{en:"1",hu:"1"}},{q:{en:"In the construction of $l_k(x)$, why is the term $(x - x_k)$ omitted from the numerator?",hu:"A $l_k(x)$ felépítésénél miért maradt ki a $(x - x_k)$ kifejezés a számlálóból?"},a:{en:"To ensure the polynomial has degree $n$ rather than $n+1$ and to avoid a zero value at $x = x_k$.",hu:"Annak biztosítása érdekében, hogy a polinom $n$ foka legyen $n+1$ helyett, és elkerüljük a nulla értéket a $x = x_k$-nél."}},{q:{en:"In the construction of $l_k(x)$, why is the term $(x_k - x_k)$ omitted from the denominator?",hu:"A $l_k(x)$ felépítésénél miért hagyták ki a nevezőből a $(x_k - x_k)$ kifejezést?"},a:{en:"To avoid division by zero.",hu:"A nullával való osztás elkerülése érdekében."}},{q:{en:"If $f \\in C^2[a,b]$ and $f(x_0)=f(x_1)=f(x_2)=0$, how many zeros does $f''$ have according to Rolle's theorem?",hu:"Ha $f \\in C^2[a,b]$ és $f(x_0)=f(x_1)=f(x_2)=0$, hány nulla van $f''$-nek Rolle tétele szerint?"},a:{en:"At least one.",hu:"Legalább egy."}},{q:{en:"When constructing $L_3(x)$ for points $(-1, -2), (1, 0), (2, -2), (3, 2)$, what is the contribution of the point $(1, 0)$ to the summation?",hu:"Amikor a $L_3(x)$ $(-1, -2), (1, 0), (2, -2), (3, 2)$ pontokhoz összeállítjuk, hogyan járul hozzá a $(1, 0)$ pont az összegzéshez?"},a:{en:"0 (because $y_k = 0$).",hu:"0 (mert $y_k = 0$)."}},{q:{en:"What is the limit of the error $|f(x) - L_n(x)|$ at any mesh point $x_i$?",hu:"Mi a $|f(x) - L_n(x)|$ hiba határa bármely $x_i$ hálópontban?"},a:{en:"0",hu:"0"}},{q:{en:"In bivariate interpolation, how many data points are required for an $L_{n,m}$ polynomial?",hu:"Kétváltozós interpolációban hány adatpont szükséges egy $L_{n,m}$ polinomhoz?"},a:{en:"$(n+1)(m+1)$ points.",hu:"$(n+1)(m+1)$ pontok."}},{q:{en:"The error estimate $|f(x) - L_n(x)| \\le \\frac{M_{n+1}}{4(n+1)}h^{n+1}$ assumes that mesh points are _____.",hu:"A $|f(x) - L_n(x)| \\le \\frac{M_{n+1}}{4(n+1)}h^{n+1}$ hibabecslés feltételezi, hogy a hálópontok _____."},a:{en:"equidistant",hu:"egyenlő távolságra"}},{q:{en:"How does the step size $h$ relate to the interval $[a,b]$ and number of points $n+1$ in an equidistant mesh?",hu:"Hogyan viszonyul a $h$ lépésméret a $[a,b]$ intervallumhoz és a $n+1$ pontok számához egy egyenlő távolságra lévő hálóban?"},a:{en:"$h = \\frac{b-a}{n}$",hu:"$h = \\frac{b-a}{n}$"}},{q:{en:"What is the requirement for $f$ to apply the Lagrange error formula with an $n$-th degree polynomial?",hu:"Mi szükséges ahhoz, hogy $f$ alkalmazza a Lagrange-hibaképletet $n$-edik fokú polinommal?"},a:{en:"$f$ must be $n+1$ times continuously differentiable ($f \\in C^{n+1}$).",hu:"A $f$ $n+1$-szeresnek folyamatosan differenciálhatónak kell lennie ($f \\in C^{n+1}$)."}},{q:{en:"In the proof of the error theorem, the auxiliary function $g(t)$ is designed to have how many roots?",hu:"A hibatétel bizonyítása során a $g(t)$ segédfüggvényt úgy terveztük, hogy hány gyökével rendelkezzen?"},a:{en:"$n + 2$ roots (the $n+1$ mesh points plus the point $x$).",hu:"$n + 2$ gyökerek (a $n+1$ hálópontok plusz a $x$ pont)."}},{q:{en:"What is the $(n+1)$-th derivative of any polynomial $L_n$ of degree $n$?",hu:"Mi a $(n+1)$-edik deriváltja bármely $n$ fokú $L_n$ polinomnak?"},a:{en:"0",hu:"0"}},{q:{en:"If $L_3(x) = x^3 - 3x^2 + 2$, what is the value of $L_3(1)$?",hu:"Ha $L_3(x) = x^3 - 3x^2 + 2$, mennyi a $L_3(1)$ értéke?"},a:{en:"0",hu:"0"}},{q:{en:"What is the name of the constant $h$ in equidistant interpolation?",hu:"Mi a neve a $h$ konstansnak egyenlő távolságú interpolációban?"},a:{en:"Step size (or spacing).",hu:"Lépésméret (vagy távolság)."}},{q:{en:"For a function $f(x)$, if we increase the number of points $n$ but $M_{n+1}$ grows very rapidly, does the interpolation error necessarily decrease?",hu:"Egy $f(x)$ függvénynél, ha növeljük a $n$ pontok számát, de a $M_{n+1}$ nagyon gyorsan növekszik, akkor szükségszerűen csökken az interpolációs hiba?"},a:{en:"No (this can lead to Runge's phenomenon, though not explicitly named in the text).",hu:"Nem (ez vezethet Runge jelenségéhez, bár a szövegben nincs kifejezetten megnevezve)."}},{q:{en:"What is the degree of the bivariate basis polynomial product $l_i(x)\\tilde{l}_j(y)$ with respect to $x$?",hu:"Mekkora a $l_i(x)\\tilde{l}_j(y)$ kétváltozós alappolinomszorzat foka $x$-hez viszonyítva?"},a:{en:"$n$",hu:"$n$"}},{q:{en:"What is the degree of the bivariate basis polynomial product $l_i(x)\\tilde{l}_j(y)$ with respect to $y$?",hu:"Mekkora a $l_i(x)\\tilde{l}_j(y)$ kétváltozós alappolinomszorzat foka $y$-hez viszonyítva?"},a:{en:"$m$",hu:"$m$"}},{q:{en:"Term: Lagrange-féle alappolinom",hu:"Fogalom: Lagrange-féle alappolinom"},a:{en:"Definition: Hungarian term for Lagrange basis polynomial.",hu:"Definíció: magyar kifejezés a Lagrange-alapú polinomra."}},{q:{en:"Term: Ekvidisztáns osztópontok",hu:"Fogalom: Ekvidisztáns osztópontok"},a:{en:"Definition: Hungarian term for equidistant mesh points.",hu:"Definíció: Magyar kifejezés egyenlő távolságra lévő hálópontokra."}},{q:{en:"In Example 6.9, the resulting polynomial is $-\\frac{1}{2}x^2y + \\frac{5}{2}x^2 + \\dots$. What is its degree in $y$?",hu:"A 6.9. példában a kapott polinom $-\\frac{1}{2}x^2y + \\frac{5}{2}x^2 + \\dots$. Milyen végzettsége van $y$-ben?"},a:{en:"1 (First order).",hu:"1 (Első rendelés)."}},{q:{en:"The error bound for equidistant interpolation contains the term $n!$ in its derivation. Where does this $n!$ originate?",hu:"Az egyenlő távolságú interpolációhoz kötött hiba a $n!$ kifejezést tartalmazza a származékában. Honnan származik ez a $n!$?"},a:{en:"From the product of distances between equidistant points, e.g., $(k+1)!(n-k)! \\le n!$.",hu:"Az egyenlő távolságra lévő pontok közötti távolságok szorzatából, pl. $(k+1)!(n-k)! \\le n!$."}}],newton:[{q:{en:"Given a function $f$, what is the definition of the zeroth divided difference $f[x_0]$?",hu:"Adott egy $f$ függvény, mi a $f[x_0]$ nulladik osztott különbség definíciója?"},a:{en:"$f[x_0] := f(x_0)$",hu:"$f[x_0]:= f(x_0)$"}},{q:{en:"What is the formula for the first divided difference $f[x_0, x_1]$ relative to mesh points $x_0$ and $x_1$?",hu:"Mi a képlete a $f[x_0, x_1]$ első osztott különbségnek a $x_0$ és $x_1$ hálópontokhoz viszonyítva?"},a:{en:"$f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$",hu:"$f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$"}},{q:{en:"How is the $n$-th divided difference $f[x_0, x_1, \\ldots, x_n]$ defined recursively?",hu:"Hogyan definiálható rekurzívan a $n$-edik osztott különbség $f[x_0, x_1, \\ldots, x_n]$?"},a:{en:"$f[x_0, x_1, \\ldots, x_n] := \\frac{f[x_1, x_2, \\ldots, x_n] - f[x_0, x_1, \\ldots, x_{n-1}]}{x_n - x_0}$",hu:"$f[x_0, x_1, \\ldots, x_n]:= \\frac{f[x_1, x_2, \\ldots, x_n] - f[x_0, x_1, \\ldots, x_{n-1}]}{x_n - x_0}$"}},{q:{en:"In the recursive definition of $f[x_0, x_1, \\ldots, x_n]$, which mesh point is omitted in the first term of the numerator?",hu:"A $f[x_0, x_1, \\ldots, x_n]$ rekurzív definíciójában melyik hálópontot hagyjuk ki a számláló első tagjából?"},a:{en:"$x_0$",hu:"$x_0$"}},{q:{en:"In the recursive definition of $f[x_0, x_1, \\ldots, x_n]$, which mesh point is omitted in the second term of the numerator?",hu:"A $f[x_0, x_1, \\ldots, x_n]$ rekurzív definíciójában melyik hálópontot hagyjuk ki a számláló második tagjából?"},a:{en:"$x_n$",hu:"$x_n$"}},{q:{en:"What is the denominator in the recursive definition of an $n$-th order divided difference?",hu:"Mi a nevező a $n$-edrendű osztott különbség rekurzív definíciójában?"},a:{en:"$x_n - x_0$",hu:"$x_n - x_0$"}},{q:{en:"What condition must mesh points $x_i$ satisfy for the standard divided difference definition to be valid?",hu:"Milyen feltételnek kell megfelelnie a $x_i$ hálópontoknak ahhoz, hogy a szabványos osztott különbség definíció érvényes legyen?"},a:{en:"They must be pairwise different.",hu:"Páronként eltérőnek kell lenniük."}},{q:{en:"Does the definition of divided differences require that mesh points be ordered increasingly?",hu:"Az osztott különbségek meghatározása megköveteli-e a hálópontok növekvő sorrendjét?"},a:{en:"No, mesh points do not have to be ordered increasingly.",hu:"Nem, nem kell egyre gyakrabban rendelni a hálópontokat."}},{q:{en:"According to Theorem 6.10, what is the explicit summation formula for $f[x_0, x_1, \\ldots, x_n]$?",hu:"A 6.10. Tétel szerint mi a $f[x_0, x_1, \\ldots, x_n]$ explicit összegzési képlete?"},a:{en:"$\\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)}$",hu:"$\\sum_{i=0}^{n} \\frac{f(x_i)}{(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)}$"}},{q:{en:"In the explicit formula for $f[x_0, x_1, \\ldots, x_n]$, what is the value of the denominator's 'empty product' when $n = 0$?",hu:"A $f[x_0, x_1, \\ldots, x_n]$ kifejezett képletében mekkora a nevező „üres termékének” az értéke, amikor $n = 0$?"},a:{en:"1",hu:"1"}},{q:{en:"What proof technique is used to demonstrate the validity of the explicit formula for divided differences?",hu:"Milyen bizonyítási technikát alkalmaznak az osztott különbségekre vonatkozó explicit képlet érvényességének bemutatására?"},a:{en:"Mathematical induction with respect to $n$.",hu:"Matematikai indukció a $n$-hez képest."}},{q:{en:"How does changing the order of mesh points affect the value of a divided difference?",hu:"Hogyan befolyásolja a hálópontok sorrendjének megváltoztatása az osztott különbség értékét?"},a:{en:"The value remains unchanged; divided differences are independent of the order of mesh points.",hu:"Az érték változatlan marad; az osztott különbségek függetlenek a hálópontok sorrendjétől."}},{q:{en:"Under what condition on function $f$ do divided differences depend continuously on the mesh points?",hu:"A $f$ függvényen milyen feltételek mellett függenek folyamatosan a megosztott különbségek a hálópontoktól?"},a:{en:"$f$ must be continuous.",hu:"A $f$-nek folyamatosnak kell lennie."}},{q:{en:"What is the limit of the first divided difference $f[x_0, x_1]$ as $x_1$ approaches $x_0$?",hu:"Mi a határa az első megosztott $f[x_0, x_1]$ különbségnek, amikor a $x_1$ megközelíti a $x_0$-t?"},a:{en:"$f'(x_0)$",hu:"$f'(x_0)$"}},{q:{en:"How is the first divided difference relative to equal mesh points, $f[x_0, x_0]$, defined?",hu:"Hogyan definiálható a $f[x_0, x_0]$ egyenlő hálópontokhoz viszonyított első osztott különbség?"},a:{en:"$f[x_0, x_0] := f'(x_0)$",hu:"$f[x_0, x_0]:= f'(x_0)$"}},{q:{en:"Why is the definition $f[x_0, x_0] = f'(x_0)$ used for differentiable functions?",hu:"Miért használják a $f[x_0, x_0] = f'(x_0)$ definíciót differenciálható függvényekhez?"},a:{en:"To extend the function $x_1 \\mapsto f[x_0, x_1]$ continuously to the case where $x_1 = x_0$.",hu:"A $x_1 \\mapsto f[x_0, x_1]$ funkció folyamatos kiterjesztése arra az esetre, ahol a $x_1 = x_0$."}},{q:{en:"What is the value of $f[x_0, x_1, x_2, x_3]$ for $f(x) = x^2$ and mesh points $x_i = i$?",hu:"Mennyi a $f[x_0, x_1, x_2, x_3]$ értéke a $f(x) = x^2$ és a $x_i = i$ hálópontokhoz?"},a:{en:"0",hu:"0"}},{q:{en:"For $f(x) = \\sin x$ and $x_0 = 0$, what is the value of the divided difference $f[x_0, x_0]$?",hu:"$f(x) = \\sin x$ és $x_0 = 0$ esetén mekkora a $f[x_0, x_0]$ osztott különbség értéke?"},a:{en:"1 (since $\\sin'(0) = \\cos(0) = 1$)",hu:"1 ($\\sin'(0) = \\cos(0) = 1$ óta)"}},{q:{en:"If $f \\in C^1[a,b]$, what does the mean value property state regarding $f[x_0, x_1]$?",hu:"Ha $f \\in C^1[a,b]$, mit jelent az átlagos érték tulajdonság a $f[x_0, x_1]$ esetében?"},a:{en:"There exists $\\xi$ in the interval between $x_0$ and $x_1$ such that $f[x_0, x_1] = f'(\\xi)$.",hu:"A $x_0$ és a $x_1$ közötti intervallumban létezik $\\xi$, így a $f[x_0, x_1] = f'(\\xi)$."}},{q:{en:"In the Newton form polynomial $P(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + \\ldots$, what is the coefficient $a_0$?",hu:"Mekkora a $a_0$ együttható a $P(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + \\ldots$ Newton-polinomban?"},a:{en:"$a_0 = P[x_0]$",hu:"$a_0 = P[x_0]$"}},{q:{en:"In the Newton form polynomial, what is the coefficient $a_1$ representing?",hu:"Mit jelent a Newton-alakú polinomban a $a_1$ együttható?"},a:{en:"$a_1 = P[x_0, x_1]$",hu:"$a_1 = P[x_0, x_1]$"}},{q:{en:"In the Newton form polynomial, what is the coefficient $a_k$ representing?",hu:"Mit jelent a Newton-alakú polinomban a $a_k$ együttható?"},a:{en:"$a_k = P[x_0, x_1, \\ldots, x_k]$",hu:"$a_k = P[x_0, x_1, \\ldots, x_k]$"}},{q:{en:"From a numerical standpoint, is the recursive definition or the explicit summation formula more practical for computation?",hu:"Numerikus szempontból a rekurzív definíció vagy az explicit összegzési képlet praktikusabb a számításhoz?"},a:{en:"The recursive definition is more practical.",hu:"A rekurzív definíció praktikusabb."}},{q:{en:"Why is the explicit formula for divided differences theoretically important if it is numerically impractical?",hu:"Miért fontos elméletileg az osztott különbségek kifejezett képlete, ha számszerűen nem praktikus?"},a:{en:"It proves that the value is independent of point order and depends continuously on the points.",hu:"Azt bizonyítja, hogy az érték független a pontsorrendtől és folyamatosan függ a pontoktól."}},{q:{en:"The first divided difference $f[x_0, x_1]$ can be interpreted as the _____ quotient of $f$ at those points.",hu:"Az első osztott különbség $f[x_0, x_1]$ a $f$ _____ hányadosaként értelmezhető ezeken a pontokon."},a:{en:"difference",hu:"különbség"}},{q:{en:"What is the result of a first-order divided difference if $f(x)$ is a constant function?",hu:"Mi az eredménye egy elsőrendű osztott különbségnek, ha a $f(x)$ konstans függvény?"},a:{en:"0",hu:"0"}},{q:{en:"Term: Mesh points",hu:"Fogalom: Hálópontok"},a:{en:"Definition: The specific points $x_0, x_1, \\ldots, x_n$ in the domain of $f$ used to compute divided differences.",hu:"Definíció: A $f$ tartományában lévő $x_0, x_1, \\ldots, x_n$ specifikus pontok az osztott különbségek kiszámítására szolgálnak."}},{q:{en:"How many lower-order divided differences are subtracted in the numerator of the recursive step for an $n$-th order divided difference?",hu:"Hány alacsonyabb rendű osztott különbséget vonunk le a rekurzív lépés számlálójából egy $n$-edik rendű osztott különbséghez?"},a:{en:"Two ($f[x_1, \\ldots, x_n]$ and $f[x_0, \\ldots, x_{n-1}]$)",hu:"Kettő ($f[x_1, \\ldots, x_n]$ és $f[x_0, \\ldots, x_{n-1}]$)"}},{q:{en:"In the context of divided differences, what does the notation $f[x_0, x_1, \\ldots, x_n]$ represent?",hu:"A megosztott különbségek összefüggésében mit jelent a $f[x_0, x_1, \\ldots, x_n]$ jelölés?"},a:{en:"The $n$-th order divided difference of function $f$ at the points $x_0, \\ldots, x_n$.",hu:"A $n$-edik sorrendű $f$ függvény különbsége a $x_0, \\ldots, x_n$ pontokban osztott."}},{q:{en:"If $f$ is a linear function, what is the value of the second divided difference $f[x_0, x_1, x_2]$?",hu:"Ha a $f$ egy lineáris függvény, mekkora a $f[x_0, x_1, x_2]$ második osztott különbség értéke?"},a:{en:"0",hu:"0"}},{q:{en:"In the induction proof for Theorem 6.10, the step from $n$ to $n+1$ involves substituting the _____ into the recursive definition.",hu:"A 6.10. Tétel indukciós bizonyításában a $n$-től a $n+1$-ig tartó lépés magában foglalja a _____ behelyettesítését a rekurzív definícióba."},a:{en:"inductive hypothesis",hu:"induktív hipotézis"}},{q:{en:"What is the relationship between $f[x_0, x_1]$ and $f[x_1, x_0]$?",hu:"Mi a kapcsolat a $f[x_0, x_1]$ és a $f[x_1, x_0]$ között?"},a:{en:"They are equal ($f[x_0, x_1] = f[x_1, x_0]$).",hu:"Egyenlőek ($f[x_0, x_1] = f[x_1, x_0]$)."}},{q:{en:"How many mesh points are involved in a third-order divided difference calculation?",hu:"Hány hálópont vesz részt egy harmadrendű osztott különbség számításban?"},a:{en:"Four ($x_0, x_1, x_2, x_3$)",hu:"Négy ($x_0, x_1, x_2, x_3$)"}},{q:{en:"For a differentiable function, $f[x_0, x_1]$ is a continuous function of $x_1$ except possibly at _____.",hu:"A differenciálható funkcióhoz a $f[x_0, x_1]$ a $x_1$ folyamatos függvénye, kivéve esetleg _____."},a:{en:"$x_1 = x_0$",hu:"$x_1 = x_0$"}},{q:{en:"What is the first divided difference of $f(x) = x$ for any distinct $x_0, x_1$?",hu:"Mi a $f(x) = x$ első megosztott különbsége bármely különálló $x_0, x_1$ között?"},a:{en:"1",hu:"1"}},{q:{en:"In the formula $f[x_0, x_1, \\ldots, x_n] = \\sum_{i=0}^{n} \\frac{f(x_i)}{D_i}$, what is $D_i$?",hu:"A $f[x_0, x_1, \\ldots, x_n] = \\sum_{i=0}^{n} \\frac{f(x_i)}{D_i}$ képletben mi a $D_i$?"},a:{en:"$(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)$",hu:"$(x_i - x_0) \\cdots (x_i - x_{i-1})(x_i - x_{i+1}) \\cdots (x_i - x_n)$"}},{q:{en:"True or False: The recursive definition of divided differences is preferred in numerics because it uses fewer calculations than the explicit formula.",hu:"Igaz vagy hamis: Az osztott különbségek rekurzív definícióját részesítik előnyben a numerákban, mert kevesebb számítást használ, mint az explicit képlet."},a:{en:"True",hu:"Igaz"}},{q:{en:"What is the denominator of the term involving $f(x_0)$ in the explicit summation formula for $f[x_0, x_1, x_2]$?",hu:"Mi a nevezője a $f(x_0)$ kifejezést magában foglaló kifejezésnek a $f[x_0, x_1, x_2]$ explicit összegzési képletében?"},a:{en:"$(x_0 - x_1)(x_0 - x_2)$",hu:"$(x_0 - x_1)(x_0 - x_2)$"}},{q:{en:"The formula $f[x_0, x_1] = f'(\\xi)$ is essentially a restatement of which calculus theorem?",hu:"A $f[x_0, x_1] = f'(\\xi)$ képlet lényegében melyik számítási tétel újrafogalmazása?"},a:{en:"The Mean Value Theorem",hu:"Az átlagérték tétel"}},{q:{en:"In the expression $a_3(x - x_0)(x - x_1)(x - x_2)$ from Exercise 3, what is $a_3$?",hu:"A 3. gyakorlat $a_3(x - x_0)(x - x_1)(x - x_2)$ kifejezésében mi az a $a_3$?"},a:{en:"$P[x_0, x_1, x_2, x_3]$",hu:"$P[x_0, x_1, x_2, x_3]$"}},{q:{en:"If mesh points are shifted by a constant, does the value of the divided difference of a polynomial change?",hu:"Ha a hálópontokat egy konstans eltolja, megváltozik-e egy polinom osztott különbségének értéke?"},a:{en:"No, because it depends on the differences between points (and function values).",hu:"Nem, mert ez a pontok (és a függvényértékek) közötti különbségektől függ."}},{q:{en:"What is the value of the first divided difference $f[x_0, x_1]$ if $f(x_1) = f(x_0)$?",hu:"Mennyi az első osztott különbség $f[x_0, x_1]$ értéke, ha $f(x_1) = f(x_0)$?"},a:{en:"0",hu:"0"}},{q:{en:"The notation $f[x_1, x_2, \\ldots, x_n]$ omits the point $x_0$ and represents a divided difference of order _____.",hu:"A $f[x_1, x_2, \\ldots, x_n]$ jelölés elhagyja a $x_0$ pontot, és _____ sorrendű osztott különbséget jelent."},a:{en:"$n-1$",hu:"$n-1$"}},{q:{en:"In the explicit formula, the denominator for a specific $f(x_i)$ is a product of how many linear factors $(x_i - x_j)$?",hu:"Az explicit képletben egy adott $f(x_i)$ nevezője hány lineáris tényező szorzata $(x_i - x_j)$?"},a:{en:"$n$",hu:"$n$"}},{q:{en:"The continuity of divided differences with respect to mesh points (Corollary 6.12) is a direct consequence of the _____ formula.",hu:"A hálópontokra vonatkozó osztott különbségek folytonossága (6.12. következtetés) a _____ képlet egyenes következménye."},a:{en:"explicit (summation)",hu:"explicit (összegzés)"}},{q:{en:"In Exercise 1b, $x_i = 0.2i$. What is the value of $x_2$?",hu:"Az 1b gyakorlatban $x_i = 0.2i$. Mennyi a $x_2$ értéke?"},a:{en:"0.4",hu:"0.4"}},{q:{en:"If $x_0 = 1$ and $x_1 = 3$, and $f(x) = x^3$, what is $f[1, 3]$?",hu:"Ha $x_0 = 1$ és $x_1 = 3$ és $f(x) = x^3$, mi az a $f[1, 3]$?"},a:{en:"$\\frac{3^3 - 1^3}{3 - 1} = \\frac{27 - 1}{2} = 13$",hu:"$\\frac{3^3 - 1^3}{3 - 1} = \\frac{27 - 1}{2} = 13$"}},{q:{en:"How does the complexity of the explicit summation formula for $f[x_0, \\ldots, x_n]$ grow relative to $n$?",hu:"Hogyan nő a $f[x_0, \\ldots, x_n]$ explicit összegzési képletének összetettsége a $n$-hez képest?"},a:{en:"It requires computing a product of $n$ terms for each of the $n+1$ summands.",hu:"A $n$ kifejezések szorzatának kiszámítását igényli minden egyes $n+1$ összegzőhöz."}},{q:{en:"Does Corollary 6.11 imply that $f[x_0, x_1, x_2] = f[x_2, x_0, x_1]$?",hu:"A 6.11 következtetés azt jelenti, hogy a $f[x_0, x_1, x_2] = f[x_2, x_0, x_1]$?"},a:{en:"Yes, because the order of mesh points does not matter.",hu:"Igen, mert a hálópontok sorrendje nem számít."}},{q:{en:"In the proof of Theorem 6.10, what algebraic step is performed on the sum $\\sum_{i=1}^n$?",hu:"A 6.10. Tétel bizonyítása során milyen algebrai lépést hajtunk végre a $\\sum_{i=1}^n$ összegen?"},a:{en:"Factoring out terms to combine the two summations using a common denominator $(\\frac{1}{x_i - x_{n+1}} - \\frac{1}{x_i - x_0})$.",hu:"A kifejezések faktorálása a két összegzés kombinálásához a $(\\frac{1}{x_i - x_{n+1}} - \\frac{1}{x_i - x_0})$ közös nevező használatával."}},{q:{en:"What is the main disadvantage of the standard Lagrange interpolation formula when adding a new mesh point?",hu:"Mi a fő hátránya a szabványos Lagrange interpolációs képletnek új hálópont hozzáadásakor?"},a:{en:"The entire formula must be recomputed from scratch.",hu:"A teljes képletet a semmiből kell újraszámolni."}},{q:{en:"How is the Newton form of the Lagrange polynomial superior to the standard form regarding new data points?",hu:"Mennyiben jobb a Lagrange-polinom Newton-formája a szabványos alaknál az új adatpontok tekintetében?"},a:{en:"It allows adding a new mesh point by simply appending a correction term to the existing formula.",hu:"Lehetővé teszi új hálópont hozzáadását egy korrekciós tag hozzáfűzésével a meglévő képlethez."}},{q:{en:"In the Newton form derivation, $L_0(x)$ is defined as which constant function?",hu:"A Newton-forma levezetésében a $L_0(x)$ melyik állandó függvényként van definiálva?"},a:{en:"$f(x_0)$",hu:"$f(x_0)$"}},{q:{en:"In the derivation of the Newton form, what is the maximum possible degree of the polynomial difference $L_i(x) - L_{i-1}(x)$?",hu:"A Newton-forma levezetésében mekkora lehet a $L_i(x) - L_{i-1}(x)$ polinomkülönbség maximális mértéke?"},a:{en:"$i$",hu:"$i$"}},{q:{en:"Which set of points serves as roots for the polynomial difference $L_i(x) - L_{i-1}(x)$?",hu:"Melyik ponthalmaz szolgál a $L_i(x) - L_{i-1}(x)$ polinomiális különbség gyökjéül?"},a:{en:"$x_0, x_1, \\dots, x_{i-1}$",hu:"$x_0, x_1, \\dots, x_{i-1}$"}},{q:{en:"According to the Fundamental Theorem of Algebra, $L_i(x) - L_{i-1}(x)$ can be factored into $a_i$ multiplied by which product?",hu:"Az algebra alaptétele szerint a $L_i(x) - L_{i-1}(x)$ beszámítható a $a_i$ szorzatba, melyik szorzattal?"},a:{en:"$\\prod_{j=0}^{i-1} (x - x_j)$",hu:"$\\prod_{j=0}^{i-1} (x - x_j)$"}},{q:{en:"What mathematical term is used for the coefficients $a_i$ in the Newton form of the interpolating polynomial?",hu:"Milyen matematikai kifejezést használunk a $a_i$ együtthatókra az interpoláló polinom Newton alakjában?"},a:{en:"Divided differences",hu:"Megosztott különbségek"}},{q:{en:"Write the general Newton form of the $n$-th degree Lagrange interpolating polynomial $L_n(x)$.",hu:"Írja fel a $n$-edik fokú Lagrange interpoláló polinom általános Newton alakját, a $L_n(x)$!"},a:{en:"$L_n(x) = f[x_0] + \\sum_{i=1}^n f[x_0, \\dots, x_i] \\prod_{j=0}^{i-1} (x - x_j)$",hu:"$L_n(x) = f[x_0] + \\sum_{i=1}^n f[x_0, \\dots, x_i] \\prod_{j=0}^{i-1} (x - x_j)$"}},{q:{en:"What is the correction term added to $L_n(x)$ to obtain $L_{n+1}(x)$ in the Newton form?",hu:"Milyen korrekciós tagot adunk hozzá a $L_n(x)$-hez, hogy megkapjuk a $L_{n+1}(x)$-t Newton formában?"},a:{en:"$f[x_0, x_1, \\dots, x_{n+1}](x - x_0)(x - x_1) \\dots (x - x_n)$",hu:"$f[x_0, x_1, \\dots, x_{n+1}](x - x_0)(x - x_1) \\dots (x - x_n)$"}},{q:{en:"Which efficient numerical method is used to evaluate the Newton form of the interpolating polynomial?",hu:"Melyik hatékony numerikus módszerrel értékeljük ki az interpoláló polinom Newton alakját?"},a:{en:"Horner's method",hu:"Horner módszere"}},{q:{en:"If the $n$-th order divided difference $f[x_0, x_1, \\dots, x_n]$ is non-zero, what is the degree of the Newton polynomial?",hu:"Ha a $n$-edik rendű osztott különbség $f[x_0, x_1, \\dots, x_n]$ nem nulla, mekkora a Newton-polinom foka?"},a:{en:"$n$",hu:"$n$"}},{q:{en:"In a divided difference table used for manual calculation, what do the first and second columns represent?",hu:"A kézi számításhoz használt osztott különbség táblázatban mit jelent az első és a második oszlop?"},a:{en:"The mesh points $x_i$ and the function values $f(x_i)$.",hu:"A $x_i$ hálópontok és a $f(x_i)$ függvényértékek."}},{q:{en:"Where are the coefficients for the Newton polynomial located in a standard triangular divided difference table?",hu:"Hol vannak a Newton-polinom együtthatói egy szabványos háromszög osztott különbségtáblázatban?"},a:{en:"Along the top diagonal of the table.",hu:"Az asztal felső átlója mentén."}},{q:{en:"What is the recursive formula for the $k$-th order divided difference $f[x_0, \\dots, x_k]$?",hu:"Mi a rekurzív képlete a $k$-edik sorrendű osztott különbségnek $f[x_0, \\dots, x_k]$?"},a:{en:"$f[x_0, \\dots, x_k] = \\frac{f[x_1, \\dots, x_k] - f[x_0, \\dots, x_{k-1}]}{x_k - x_0}$",hu:"$f[x_0, \\dots, x_k] = \\frac{f[x_1, \\dots, x_k] - f[x_0, \\dots, x_{k-1}]}{x_k - x_0}$"}},{q:{en:"Formula: First-order divided difference $f[x_0, x_1]$?",hu:"Képlet: Elsőrendű osztott különbség $f[x_0, x_1]$?"},a:{en:"$f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$",hu:"$f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$"}},{q:{en:"In the error theorem for the Newton form, what is the expression for the truncation error $f(x) - L_n(x)$?",hu:"A Newton alak hibatételében mi a $f(x) - L_n(x)$ csonkítási hiba kifejezése?"},a:{en:"$f[x_0, x_1, \\dots, x_n, x] \\prod_{i=0}^n (x - x_i)$",hu:"$f[x_0, x_1, \\dots, x_n, x] \\prod_{i=0}^n (x - x_i)$"}},{q:{en:"What is the relationship between the $n$-th order divided difference $f[x_0, \\dots, x_n]$ and the $n$-th derivative of $f$?",hu:"Mi a kapcsolat a $n$-edik sorrendű osztott különbség $f[x_0, \\dots, x_n]$ és a $f$ $n$-edik deriváltja között?"},a:{en:"$f[x_0, \\dots, x_n] = \\frac{f^{(n)}(\\xi)}{n!}$ for some $\\xi \\in \\langle x_0, \\dots, x_n \\rangle$.",hu:"$f[x_0, \\dots, x_n] = \\frac{f^{(n)}(\\xi)}{n!}$ néhány $\\xi \\in \\langle x_0, \\dots, x_n \\rangle$-hez."}},{q:{en:"If $P$ is a polynomial of degree $n$, what is the value of the divided difference $P[x_0, \\dots, x_m]$ for any $m > n$?",hu:"Ha a $P$ egy $n$ fokú polinom, mekkora a $P[x_0, \\dots, x_m]$ osztott különbség értéke bármely $m > n$ esetén?"},a:{en:"$0$",hu:"$0$"}},{q:{en:"For a polynomial $f(x) = c_0 + c_1 x + \\dots + c_n x^n$, which divided difference equals the leading coefficient $c_n$?",hu:"$f(x) = c_0 + c_1 x + \\dots + c_n x^n$ polinom esetén melyik osztott különbség egyenlő a $c_n$ vezető együtthatóval?"},a:{en:"$f[x_0, x_1, \\dots, x_n]$",hu:"$f[x_0, x_1, \\dots, x_n]$"}},{q:{en:"What happens to the divided difference $f[x_0, x_1, \\dots, x_n]$ as all mesh points $x_i$ approach a single point $x_0$?",hu:"Mi történik a $f[x_0, x_1, \\dots, x_n]$ osztott különbséggel, amikor az összes $x_i$ hálópont egy $x_0$ ponthoz közelít?"},a:{en:"It converges to $\\frac{f^{(n)}(x_0)}{n!}$.",hu:"$\\frac{f^{(n)}(x_0)}{n!}$-hez konvergál."}},{q:{en:"How is the second-order confluent divided difference $f[x_0, x_0, x_1]$ defined?",hu:"Hogyan definiálható a $f[x_0, x_0, x_1]$ másodrendű konfluens osztott különbség?"},a:{en:"$f[x_0, x_0, x_1] = \\frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$",hu:"$f[x_0, x_0, x_1] = \\frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$"}},{q:{en:"What is the value of the confluent divided difference $f[x_0, x_0, x_0]$ in terms of derivatives?",hu:"Mekkora a $f[x_0, x_0, x_0]$ konfluens osztott különbség értéke a származékokban?"},a:{en:"$\\frac{f''(x_0)}{2}$",hu:"$\\frac{f''(x_0)}{2}$"}},{q:{en:"Using the data points $(-1, -2), (1, 0), (2, -2), (3, 2)$, what is the first-order divided difference $f[-1, 1]$?",hu:"A $(-1, -2), (1, 0), (2, -2), (3, 2)$ adatpontokat használva mekkora a $f[-1, 1]$ elsőrendű osztott különbség?"},a:{en:"$1$",hu:"$1$"}},{q:{en:"Given mesh points $(-1, 1, 2, 3)$ and function values $(-2, 0, -2, 2)$, what is the value of the Newton polynomial $L_3(0)$?",hu:"Adott $(-1, 1, 2, 3)$ hálópontok és $(-2, 0, -2, 2)$ függvényértékek, mekkora a $L_3(0)$ Newton-polinom értéke?"},a:{en:"$2$",hu:"$2$"}},{q:{en:"Given data $(-1, -3), (1, 1), (2, 3), (3, 29)$, find the third-order divided difference $f[-1, 1, 2, 3]$.",hu:"A $(-1, -3), (1, 1), (2, 3), (3, 29)$ adatok alapján keresse meg a harmadrendű osztott különbséget $f[-1, 1, 2, 3]$."},a:{en:"$3$",hu:"$3$"}},{q:{en:"In Example 6.15, what is the Newton form of $L_3(x)$ for the data points starting at $(-1, -3)$ and ending at $(3, 29)$?",hu:"A 6.15. példában mi a $L_3(x)$ Newton alakja a $(-1, -3)$-től kezdődő és a $(3, 29)$-re végződő adatpontokhoz?"},a:{en:"$L_3(x) = -3 + 2(x + 1) + 0(x + 1)(x - 1) + 3(x + 1)(x - 1)(x - 2)$",hu:"$L_3(x) = -3 + 2(x + 1) + 0(x + 1)(x - 1) + 3(x + 1)(x - 1)(x - 2)$"}},{q:{en:"How many arithmetic operations are generally required to evaluate a Newton polynomial using Horner's method compared to the standard Lagrange form?",hu:"Általában hány aritmetikai műveletre van szükség egy Newton-polinom Horner-módszerrel történő kiértékeléséhez a standard Lagrange-formához képest?"},a:{en:"Significantly fewer, as it avoids repeated products and summations.",hu:"Lényegesen kevesebb, mivel elkerüli az ismételt szorzatokat és összegzéseket."}},{q:{en:"What property of divided differences ensures that $f[x_0, x_1] = f[x_1, x_0]$?",hu:"A megosztott különbségek milyen tulajdonsága biztosítja, hogy a $f[x_0, x_1] = f[x_1, x_0]$?"},a:{en:"Symmetry (divided differences are independent of the order of the points).",hu:"Szimmetria (az elosztott különbségek függetlenek a pontok sorrendjétől)."}},{q:{en:"In the process of proving the truncation error theorem, why is $x$ added to the set of mesh points?",hu:"A csonkolási hiba tételének bizonyítása során miért kerül $x$ a hálópontok halmazába?"},a:{en:"To construct a higher-degree interpolating polynomial $L_{n+1}(t)$ that equals $f(x)$ at $t=x$.",hu:"Magasabb fokú interpolációs $L_{n+1}(t)$ polinom létrehozása, amely megegyezik a $f(x)$ $t=x$-vel."}},{q:{en:"What is the primary utility of the divided difference form of the truncation error in theoretical analysis?",hu:"Mi a csonkolási hiba osztott differenciaformájának elsődleges haszna az elméleti elemzésben?"},a:{en:"It provides a direct link between divided differences and derivatives through the Mean Value Theorem.",hu:"Közvetlen kapcsolatot biztosít a megosztott különbségek és a deriváltok között az átlagérték tételen keresztül."}},{q:{en:"In Algorithm 6.13, why are only specific divided differences stored by the end of the execution?",hu:"A 6.13-as algoritmusban miért csak meghatározott osztott különbségek tárolódnak a végrehajtás végére?"},a:{en:"To save memory by only keeping the coefficients necessary for the Newton polynomial.",hu:"Memória megtakarítása azáltal, hogy csak a Newton-polinomhoz szükséges együtthatókat tartjuk meg."}},{q:{en:"What is the zeroth-order divided difference $f[x_i]$ equivalent to?",hu:"Minek felel meg a $f[x_i]$ nulladrendű osztott különbség?"},a:{en:"$f(x_i)$",hu:"$f(x_i)$"}},{q:{en:"How is the denominator determined for a $k$-th order divided difference in a manual table?",hu:"Hogyan határozható meg a nevező egy $k$-edik sorrendű osztott különbséghez egy kézi táblázatban?"},a:{en:"It is the difference between the last mesh point and the first mesh point involved in that specific difference ($x_k - x_0$).",hu:"Ez az utolsó hálópont és az adott különbségben érintett első hálópont közötti különbség ($x_k - x_0$)."}},{q:{en:"If $L_3(x) = x^3 - 3x^2 + 2$, what is the coefficient $f[x_0, x_1, x_2, x_3]$ for any four distinct points?",hu:"Ha $L_3(x) = x^3 - 3x^2 + 2$, akkor mekkora a $f[x_0, x_1, x_2, x_3]$ együttható négy különálló pontra?"},a:{en:"$1$",hu:"$1$"}},{q:{en:"Under what condition is the divided difference $f[x_0, x_1, \\dots, x_n, x]$ practically calculable for error estimation?",hu:"Milyen feltétel mellett gyakorlatilag kiszámítható a $f[x_0, x_1, \\dots, x_n, x]$ osztott különbség a hibabecsléshez?"},a:{en:"Only when the exact function value $f(x)$ is already known.",hu:"Csak akkor, ha a $f(x)$ pontos funkcióérték már ismert."}},{q:{en:"What does the expression $\\prod_{k=0}^{i-1} (x - x_k)$ represent in the Newton form?",hu:"Mit jelent a $\\prod_{k=0}^{i-1} (x - x_k)$ kifejezés Newton alakban?"},a:{en:"The basis polynomials of the Newton form.",hu:"A Newton-forma bázispolinomjai."}},{q:{en:"In the context of divided differences, what does the notation $\\langle x_0, x_1, \\dots, x_n \\rangle$ represent?",hu:"A megosztott különbségek összefüggésében mit jelent a $\\langle x_0, x_1, \\dots, x_n \\rangle$ jelölés?"},a:{en:"The smallest interval containing all the points $x_0, x_1, \\dots, x_n$.",hu:"Az összes $x_0, x_1, \\dots, x_n$ pontot tartalmazó legkisebb intervallum."}},{q:{en:"How does Horner's method organize the computation of $L_n(x)$ in Newton form?",hu:"Hogyan szervezi meg Horner módszere a $L_n(x)$ számítását Newton alakban?"},a:{en:"It nests the linear factors to minimize the number of multiplications.",hu:"A szorzások számának minimalizálása érdekében beágyazza a lineáris tényezőket."}},{q:{en:"Exercise 8: Show that the limit of $f[x_0, x_1, x_2]$ as $(x_1, x_2) \\to (x_0, x_0)$ is equal to _____.",hu:"8. gyakorlat: Mutassuk meg, hogy a $f[x_0, x_1, x_2]$ határértéke $(x_1, x_2) \\to (x_0, x_0)$-ként egyenlő _____."},a:{en:"$f[x_0, x_0, x_0]$ (or $\\frac{f''(x_0)}{2}$)",hu:"$f[x_0, x_0, x_0]$ (vagy $\\frac{f''(x_0)}{2}$)"}},{q:{en:"What is the role of the Fundamental Theorem of Algebra in deriving the Newton form?",hu:"Mi a szerepe az algebrai alaptételnek a Newton-forma levezetésében?"},a:{en:"It justifies the product form of the difference $L_i(x) - L_{i-1}(x)$ based on its known roots.",hu:"Ismert gyökerei alapján igazolja a $L_i(x) - L_{i-1}(x)$ különbség termékformáját."}},{q:{en:"When computing a divided difference table by hand, what shape does the resulting data structure take?",hu:"Ha egy osztott különbségi táblázatot kézzel számítunk ki, milyen alakot ölt az eredményül kapott adatstruktúra?"},a:{en:"A triangular table.",hu:"Háromszög alakú asztal."}},{q:{en:"Is the Newton form a different polynomial than the Lagrange form for the same set of data points?",hu:"A Newton-forma eltérő polinom, mint a Lagrange-forma ugyanazon adatponthalmazhoz?"},a:{en:"No, it is the same unique interpolating polynomial expressed in a different algebraic form.",hu:"Nem, ez ugyanaz az egyedi interpoláló polinom, amely más algebrai formában van kifejezve."}},{q:{en:"In Example 6.15, what was the first-order divided difference $f[2, 3]$ for the data $(2, 3)$ and $(3, 29)$?",hu:"A 6.15. példában mekkora volt a $f[2, 3]$ elsőrendű osztott különbség a $(2, 3)$ és $(3, 29)$ adatok esetében?"},a:{en:"$26$",hu:"$26$"}},{q:{en:"In Example 6.15, what was the second-order divided difference $f[1, 2, 3]$ derived from $f[1, 2]=2$ and $f[2, 3]=26$?",hu:"A 6.15. példában mekkora volt a $f[1, 2]=2$ és $f[2, 3]=26$ értékekből származó $f[1, 2, 3]$ másodrendű osztott különbség?"},a:{en:"$12$",hu:"$12$"}},{q:{en:"What is the relationship between $f[x_1, x_0, x_0]$ and $f[x_0, x_0, x_1]$?",hu:"Mi a kapcsolat a $f[x_1, x_0, x_0]$ és a $f[x_0, x_0, x_1]$ között?"},a:{en:"They are equal ($f[x_1, x_0, x_0] = f[x_0, x_0, x_1]$).",hu:"Egyenlőek ($f[x_1, x_0, x_0] = f[x_0, x_0, x_1]$)."}},{q:{en:"If a polynomial $P(x)$ has degree $n$, what can be said about its $(n+1)$-th derivative in the context of divided differences?",hu:"Ha egy $P(x)$ polinomnak $n$ foka van, mit mondhatunk a $(n+1)$-edik deriváltjáról az osztott különbségek összefüggésében?"},a:{en:"It is zero, which corresponds to the $(n+1)$-th divided difference being zero.",hu:"Ez nulla, ami megfelel annak, hogy a $(n+1)$-edik osztott különbség nulla."}},{q:{en:"In the manual calculation $f[x_0, x_1, x_2] = \\frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0}$, which mesh points are used in the divisor?",hu:"A $f[x_0, x_1, x_2] = \\frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0}$ kézi számításnál mely hálópontokat használjuk az osztóban?"},a:{en:"$x_2$ and $x_0$",hu:"$x_2$ és $x_0$"}},{q:{en:"What is the value of $L_n(x_j)$ for $j \\in \\{0, 1, \\dots, n\\}$?",hu:"Mennyi a $L_n(x_j)$ értéke $j \\in \\{0, 1, \\dots, n\\}$ esetén?"},a:{en:"$f(x_j)$",hu:"$f(x_j)$"}},{q:{en:"Why is the Newton form preferred in computer programming for interpolation tasks?",hu:"Miért részesítik előnyben a Newton-formát a számítógépes programozásban interpolációs feladatokhoz?"},a:{en:"Due to its recursive nature and computational efficiency through Horner's method.",hu:"Rekurzív jellegének és számítási hatékonyságának köszönhetően a Horner-módszeren keresztül."}},{q:{en:"The formula $f[x_0, \\dots, x_n] = \\sum_{k=0}^n \\frac{f(x_k)}{\\prod_{j \\ne k} (x_k - x_j)}$ provides which type of definition for divided differences?",hu:"A $f[x_0, \\dots, x_n] = \\sum_{k=0}^n \\frac{f(x_k)}{\\prod_{j \\ne k} (x_k - x_j)}$ képlet milyen típusú meghatározást ad a megosztott különbségekre?"},a:{en:"The explicit (non-recursive) sum-based definition.",hu:"Az explicit (nem rekurzív) összegalapú definíció."}},{q:{en:"According to the video transcript, what happens to the terms in the expansion $L_0 + (L_1 - L_0) + (L_2 - L_1) + \\dots$?",hu:"A videó átirata szerint mi történik a $L_0 + (L_1 - L_0) + (L_2 - L_1) + \\dots$ bővítmény kifejezéseivel?"},a:{en:"They telescope, simplifying to $L_n$.",hu:"Teleszkóposak, leegyszerűsítve $L_n$-re."}},{q:{en:"In the video Example, how is the value '1' calculated for the first difference column between points $(-1, -2)$ and $(1, 0)$?",hu:"A Példa videóban hogyan számítják ki az „1” értéket a $(-1, -2)$ és $(1, 0)$ pontok közötti első különbség oszlophoz?"},a:{en:"$\\frac{0 - (-2)}{1 - (-1)} = \\frac{2}{2} = 1$",hu:"$\\frac{0 - (-2)}{1 - (-1)} = \\frac{2}{2} = 1$"}}],hermite:[{q:{en:"What secondary values are interpolated in the Hermite interpolation problem alongside the function values $y_i = f(x_i)$?",hu:"Milyen másodlagos értékeket interpolálunk a Hermite interpolációs feladatban a $y_i = f(x_i)$ függvényértékek mellé?"},a:{en:"The derivative values $y_i' = f'(x_i)$.",hu:"A derivált értékek $y_i' = f'(x_i)$."}},{q:{en:"If there are $n + 1$ distinct mesh points, what is the maximum degree of the unique Hermite interpolating polynomial $H_{2n+1}$?",hu:"Ha vannak $n + 1$ különálló hálópontok, mekkora a $H_{2n+1}$ egyedi Hermite interpoláló polinom maximális foka?"},a:{en:"The maximum degree is $2n + 1$.",hu:"A maximális fokozat $2n + 1$."}},{q:{en:"How many total equations are specified by the interpolation conditions for $n + 1$ nodes in a standard Hermite problem?",hu:"Hány teljes egyenletet határoznak meg a $n + 1$ csomópontok interpolációs feltételei egy szabványos Hermite-feladatban?"},a:{en:"There are $2(n + 1)$ equations.",hu:"Vannak $2(n + 1)$ egyenletek."}},{q:{en:"Geometrically, what does $g'(x_i) = y_i'$ ensure about the graph of the Hermite polynomial at node $x_i$?",hu:"Geometriailag mit biztosít a $g'(x_i) = y_i'$ a Hermite-polinom gráfjában a $x_i$ csomópontban?"},a:{en:"It ensures the tangent line at $x_i$ has a slope equal to $y_i'$.",hu:"Biztosítja, hogy a $x_i$ érintővonal lejtése megegyezik a $y_i'$-vel."}},{q:{en:"In the uniqueness proof for Hermite interpolation, what is the multiplicity of each root $x_i$ for the difference polynomial $P = H_{2n+1} - \\tilde{H}_{2n+1}$?",hu:"A Hermite interpoláció egyediségének igazolásában mekkora az egyes $x_i$ gyökök multiplicitása a $P = H_{2n+1} - \\tilde{H}_{2n+1}$ különbségpolinomhoz?"},a:{en:"Each node $x_i$ is a double root of $P$.",hu:"Mindegyik $x_i$ csomópont a $P$ kettős gyökér."}},{q:{en:"Why must the difference polynomial $P$ be identically zero if it has $2n + 2$ roots and a degree of at most $2n + 1$?",hu:"Miért kell a $P$ különbségpolinomnak egyformán nullának lennie, ha $2n + 2$ gyökerei vannak, és foka legfeljebb $2n + 1$?"},a:{en:"A non-zero polynomial cannot have more roots than its degree according to the Fundamental Theorem of Algebra.",hu:"Az algebra alaptétele szerint egy nem nulla polinomnak nem lehet több gyöke, mint a foka."}},{q:{en:"What is the recursive definition of the divided difference $f[x_0, x_0, x_1]$?",hu:"Mi a rekurzív definíciója a $f[x_0, x_0, x_1]$ osztott különbségnek?"},a:{en:"$\\frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$.",hu:"$\\frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$."}},{q:{en:"What value is substituted for the divided difference $f[x_i, x_i]$ in the construction of the Hermite polynomial?",hu:"Milyen értékkel helyettesítjük a $f[x_i, x_i]$ osztott különbséget a Hermite-polinom felépítésében?"},a:{en:"The derivative value $f'(x_i)$.",hu:"A derivált érték $f'(x_i)$."}},{q:{en:"What is the first term of the Hermite interpolating polynomial $H_{2n+1}(x)$ in divided difference form?",hu:"Mi a $H_{2n+1}(x)$ Hermite interpoláló polinom első tagja osztott differencia alakban?"},a:{en:"$f[x_0]$.",hu:"$f[x_0]$."}},{q:{en:"What is the coefficient of the second term, $(x - x_0)$, in the Hermite interpolating polynomial?",hu:"Mennyi a második tag, a $(x - x_0)$ együtthatója a Hermite interpoláló polinomban?"},a:{en:"$f[x_0, x_0]$.",hu:"$f[x_0, x_0]$."}},{q:{en:"What is the coefficient of the third term, $(x - x_0)^2$, in the Hermite interpolating polynomial?",hu:"Mennyi a harmadik tag, a $(x - x_0)^2$ együtthatója a Hermite interpoláló polinomban?"},a:{en:"$f[x_0, x_0, x_1]$.",hu:"$f[x_0, x_0, x_1]$."}},{q:{en:"In the Hermite polynomial expansion, what is the basis function associated with the coefficient $f[x_0, x_0, x_1, x_1]$?",hu:"A Hermite polinomkiterjesztésben mi a $f[x_0, x_0, x_1, x_1]$ együtthatóhoz társított bázisfüggvény?"},a:{en:"$(x - x_0)^2(x - x_1)$.",hu:"$(x - x_0)^2(x - x_1)$."}},{q:{en:"State the truncation error formula $f(x) - H_{2n+1}(x)$ using a higher-order divided difference.",hu:"Adja meg a $f(x) - H_{2n+1}(x)$ csonkítási hiba képletét egy magasabb rendű osztott különbség használatával."},a:{en:"$f[x_0, x_0, \\dots, x_n, x_n, x](x - x_0)^2 \\dots (x - x_n)^2$.",hu:"$f[x_0, x_0, \\dots, x_n, x_n, x](x - x_0)^2 \\dots (x - x_n)^2$."}},{q:{en:"According to Theorem 6.19, what is the error term for Hermite interpolation if $f \\in C^{2n+2}$?",hu:"A 6.19. tétel szerint mi a Hermite-interpoláció hibatagja, ha $f \\in C^{2n+2}$?"},a:{en:"$\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}(x - x_0)^2 \\dots (x - x_n)^2$.",hu:"$\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}(x - x_0)^2 \\dots (x - x_n)^2$."}},{q:{en:"In the derivative-based error formula for $H_{2n+1}(x)$, what interval must the value $\\xi$ belong to?",hu:"A $H_{2n+1}(x)$ derivált alapú hibaképletében melyik intervallumhoz kell tartoznia a $\\xi$ értéknek?"},a:{en:"$\\xi \\in \\langle x_0, x_1, \\dots, x_n, x \\rangle$.",hu:"$\\xi \\in \\langle x_0, x_1, \\dots, x_n, x \\rangle$."}},{q:{en:"Which theorem is used to prove the existence of $\\xi$ in the Hermite interpolation error bound?",hu:"Melyik tétellel igazoljuk a $\\xi$ létezését a Hermite interpolációs hiba korlátban?"},a:{en:"The generalized Rolle's Theorem.",hu:"Az általánosított Rolle-tétel."}},{q:{en:"What mathematical property of divided differences allows the Hermite polynomial to be viewed as a limit of Lagrange polynomials?",hu:"Az osztott különbségek milyen matematikai tulajdonsága teszi lehetővé, hogy a Hermite-polinomot a Lagrange-polinomok határértékeként tekintsük?"},a:{en:"The continuity of the divided difference function.",hu:"Az osztott különbség függvény folytonossága."}},{q:{en:"According to Corollary 6.20, the divided difference $f[x_0, x_0, \\dots, x_n, x_n, x]$ is equal to which derivative expression?",hu:"A 6.20 következtetés szerint a $f[x_0, x_0, \\dots, x_n, x_n, x]$ osztott különbség melyik derivált kifejezéssel egyenlő?"},a:{en:"$\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}$.",hu:"$\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}$."}},{q:{en:"When setting up the divided difference table for Hermite interpolation, how many times must each node $x_i$ be listed in the first column?",hu:"A Hermite interpoláció osztott különbségi táblázatának beállításakor hányszor kell az egyes $x_i$ csomópontokat az első oszlopban felsorolni?"},a:{en:"Each node must be listed twice.",hu:"Minden csomópontot kétszer kell felsorolni."}},{q:{en:"In the Hermite divided difference table, what represents the first-order divided difference for two identical nodes $x_i$?",hu:"A Hermite osztott különbség táblázatban mi jelenti az elsőrendű osztott különbséget két azonos $x_i$ csomópontra?"},a:{en:"The given derivative $f'(x_i)$.",hu:"A megadott derivált $f'(x_i)$."}},{q:{en:"In the Hermite divided difference table, what represents the first-order divided difference for two distinct nodes $x_i$ and $x_{i+1}$?",hu:"A Hermite osztott különbség táblázatban mi jelenti az elsőrendű osztott különbséget két különálló csomópontnál, $x_i$ és $x_{i+1}$?"},a:{en:"$\\frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i}$.",hu:"$\\frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i}$."}},{q:{en:"Which values in the completed divided difference table serve as the coefficients for the Hermite polynomial?",hu:"A kitöltött osztott különbség táblázat mely értékei szolgálnak együtthatóként a Hermite polinomhoz?"},a:{en:"The values along the top diagonal of the table.",hu:"Az értékek a táblázat felső átlója mentén."}},{q:{en:"The function $g(z)$ used in the proof of Theorem 6.19 is designed such that $x_0, \\dots, x_n$ are _____ roots.",hu:"A 6.19. tétel bizonyítása során használt $g(z)$ függvényt úgy tervezték, hogy a $x_0, \\dots, x_n$ _____ gyök."},a:{en:"Double roots.",hu:"Kettős gyökerek."}},{q:{en:"In Example 6.21, what was the value of the leading coefficient $f[x_0, x_0, x_1, x_1, x_2, x_2]$?",hu:"A 6.21. példában mekkora volt a $f[x_0, x_0, x_1, x_1, x_2, x_2]$ vezető együttható értéke?"},a:{en:"Zero.",hu:"Nulla."}},{q:{en:"If a Hermite polynomial $H_5$ corresponds to 3 mesh points, what is its expected maximum degree?",hu:"Ha egy $H_5$ Hermite polinom 3 hálópontnak felel meg, mennyi a várható maximális foka?"},a:{en:"Degree 5.",hu:"5. fokozat."}},{q:{en:"In the Hermite polynomial formula, the factor $(x - x_i)$ is squared once the point $x_i$ has appeared _____ times in the divided difference sequence.",hu:"A Hermite-polinom képletében a $(x - x_i)$ tényező négyzetre kerül, ha a $x_i$ pont _____-szor szerepel az osztott különbségsorozatban."},a:{en:"Two times.",hu:"Kétszer."}},{q:{en:"Does interchanging the order of nodes $x_i$ change the resulting Hermite interpolating polynomial?",hu:"A $x_i$ csomópontok sorrendjének felcserélése megváltoztatja-e az eredményül kapott Hermite interpolációs polinomot?"},a:{en:"No, the interpolating polynomial remains the same due to its uniqueness.",hu:"Nem, az interpoláló polinom egyedisége miatt ugyanaz marad."}},{q:{en:"The general Hermite problem can interpolate the first $k_i$ derivatives at node $x_i$; how many conditions does this contribute for that specific node?",hu:"Az általános Hermite probléma interpolálhatja az első $k_i$ származékokat a $x_i$ csomóponton; ez hány feltételhez járul hozzá az adott csomóponthoz?"},a:{en:"$k_i + 1$ conditions.",hu:"$k_i + 1$ feltételek."}},{q:{en:"If given $H(x_0)=f(x_0)$, $H'(x_0)=f'(x_0)$, $H''(x_0)=f''(x_0)$, and $H(x_1)=f(x_1)$, what is the minimal degree of the interpolating polynomial?",hu:"Ha adott $H(x_0)=f(x_0)$, $H'(x_0)=f'(x_0)$, $H''(x_0)=f''(x_0)$ és $H(x_1)=f(x_1)$, mekkora az interpoláló polinom minimális foka?"},a:{en:"The minimal degree is 3.",hu:"A minimális fokozat a 3."}},{q:{en:"What is the coefficient of $(x - x_0)^3$ in a polynomial interpolating $f(x_0)$, $f'(x_0)$, $f''(x_0)$, and $f(x_1)$?",hu:"Mekkora a $(x - x_0)^3$ együtthatója a $f(x_0)$, $f'(x_0)$, $f''(x_0)$ és $f(x_1)$ polinom interpolációjában?"},a:{en:"$f[x_0, x_0, x_0, x_1]$.",hu:"$f[x_0, x_0, x_0, x_1]$."}},{q:{en:"Concept: $H_{2n+1}(x)$",hu:"Koncepció: $H_{2n+1}(x)$"},a:{en:"Definition: The unique polynomial of degree at most $2n+1$ that interpolates a function and its first derivatives at $n+1$ points.",hu:"Definíció: A legfeljebb $2n+1$ fokozatú egyedi polinom, amely egy függvényt és annak első deriváltjait interpolálja a $n+1$ pontokban."}},{q:{en:"What does the term $\\langle x_0, x_1, \\dots, x_n, x \\rangle$ denote in mathematical error analysis notation?",hu:"Mit jelöl a $\\langle x_0, x_1, \\dots, x_n, x \\rangle$ kifejezés a matematikai hibaelemzés jelölésében?"},a:{en:"The smallest interval containing the points $x_0, x_1, \\dots, x_n$ and $x$.",hu:"A $x_0, x_1, \\dots, x_n$ és $x$ pontokat tartalmazó legkisebb intervallum."}},{q:{en:"Term: Generalized Rolle's Theorem",hu:"Fogalom: Általános Rolle-tétel"},a:{en:"Definition: A theorem stating that if a function has $n$ roots in an interval, its $(n-1)$-th derivative has at least one root in that interval.",hu:"Definíció: Egy tétel, amely kimondja, hogy ha egy függvénynek $n$ gyöke van egy intervallumban, akkor a $(n-1)$-edik deriváltjának legalább egy gyöke van ebben az intervallumban."}},{q:{en:"In the Newton form of the Hermite polynomial, what is the term following $f[x_0, x_0, x_1](x - x_0)^2$?",hu:"A Hermite polinom Newton alakjában mi a $f[x_0, x_0, x_1](x - x_0)^2$ után következő kifejezés?"},a:{en:"$f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1)$.",hu:"$f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1)$."}},{q:{en:"Cloze: The divided difference $f[x_0, x_0]$ is equivalent to the _____ of the function $f$ at $x_0$.",hu:"Bezárás: A $f[x_0, x_0]$ osztott különbség megegyezik a $f$ függvény _____ értékével a $x_0$-nél."},a:{en:"First derivative ($f'$).",hu:"Első származék ($f'$)."}},{q:{en:"To calculate $f[x_0, x_0, x_0]$, one would need the value of the _____ derivative at $x_0$.",hu:"A $f[x_0, x_0, x_0]$ kiszámításához a _____ derivált értékére van szükség a $x_0$ pontban."},a:{en:"Second derivative ($f''$).",hu:"Második származék ($f''$)."}},{q:{en:"In the divided difference table, the column index of the framed coefficients is equal to the _____ of the divided difference.",hu:"Az osztott különbség táblázatban a keretezett együtthatók oszlopindexe megegyezik az osztott különbség _____ értékével."},a:{en:"Order.",hu:"Rendelés."}},{q:{en:"Why is the degree of the error term in Hermite interpolation $2n + 2$ rather than $n + 1$?",hu:"Miért a hibatag mértéke a Hermite interpolációban $2n + 2$ helyett $n + 1$?"},a:{en:"Because the interpolation conditions provide two pieces of information at each of the $n+1$ nodes.",hu:"Mivel az interpolációs feltételek a $n+1$ csomópontok mindegyikén két-két információt szolgáltatnak."}},{q:{en:"Process: How is the divided difference $f[x_0, x_1, x_1]$ computed?",hu:"Folyamat: Hogyan számítják ki a $f[x_0, x_1, x_1]$ osztott különbséget?"},a:{en:"By taking the difference between $f[x_1, x_1]$ and $f[x_0, x_1]$ and dividing by $x_1 - x_0$.",hu:"A $f[x_1, x_1]$ és a $f[x_0, x_1]$ közötti különbséget figyelembe véve, és elosztva $x_1 - x_0$-vel."}},{q:{en:"What is the total number of terms in the summation formula for $H_{2n+1}(x)$?",hu:"Mennyi a kifejezések száma a $H_{2n+1}(x)$ összegzési képletében?"},a:{en:"$2n + 2$ terms.",hu:"$2n + 2$ feltételek."}},{q:{en:"True or False: The Hermite interpolating polynomial is always of degree exactly $2n + 1$.",hu:"Igaz vagy hamis: A Hermite interpoláló polinom mindig pontosan $2n + 1$ fokú."},a:{en:"False, it is of degree at most $2n + 1$.",hu:"Hamis, ez legfeljebb $2n + 1$ fokozatú."}},{q:{en:"The error bound for Hermite interpolation is generally _____ than the error bound for Lagrange interpolation using the same number of points.",hu:"A Hermite-interpoláció korlátja általában _____, mint az azonos számú pontot használó Lagrange-interpoláció korlátja."},a:{en:"Smaller.",hu:"Kisebb."}},{q:{en:"Which specific divided difference value is required to calculate the truncation error at a point $x$?",hu:"Melyik konkrét osztott különbség értékre van szükség a csonkítási hiba kiszámításához egy $x$ pontban?"},a:{en:"$f[x_0, x_0, \\dots, x_n, x_n, x]$.",hu:"$f[x_0, x_0, \\dots, x_n, x_n, x]$."}},{q:{en:"If $f(x)$ is a polynomial of degree $2n+1$, what is the resulting truncation error $f(x) - H_{2n+1}(x)$?",hu:"Ha a $f(x)$ egy $2n+1$ fokú polinom, akkor mekkora a $f(x) - H_{2n+1}(x)$ csonkítási hiba?"},a:{en:"The error is zero.",hu:"A hiba nulla."}},{q:{en:"In a divided difference table for Hermite interpolation with points $x_0$ and $x_1$, how many rows will the table have?",hu:"A $x_0$ és $x_1$ pontokkal rendelkező Hermite interpoláció osztott különbségtáblázatában hány soros lesz a táblázat?"},a:{en:"4 rows.",hu:"4 sor."}},{q:{en:"In the sequence of basis polynomials for $H_{2n+1}$, which factor is added to the term following $(x-x_0)^2(x-x_1)^2$?",hu:"A $H_{2n+1}$ bázispolinomjainak sorozatában melyik tényezőt adjuk a $(x-x_0)^2(x-x_1)^2$ utáni kifejezéshez?"},a:{en:"$(x-x_2)$.",hu:"$(x-x_2)$."}},{q:{en:"What is the coefficient of $(x-x_0)^2(x-x_1)^2$ in the Hermite polynomial?",hu:"Mekkora a $(x-x_0)^2(x-x_1)^2$ együtthatója a Hermite-polinomban?"},a:{en:"$f[x_0, x_0, x_1, x_1, x_2]$.",hu:"$f[x_0, x_0, x_1, x_1, x_2]$."}},{q:{en:"The divided difference $f[x_0, x_0, x_1]$ is often called a _____ order divided difference.",hu:"A $f[x_0, x_0, x_1]$ osztott különbséget gyakran _____ sorrendben osztott különbségnek nevezik."},a:{en:"Second.",hu:"Második."}},{q:{en:"In the limit as nodes $x_i'$ approach $x_i$, the $L_{2n+1}$ error formula term $(x-x_i)(x-x_i')$ becomes _____.",hu:"A határértékben, amikor a $x_i'$ csomópontok megközelítik a $x_i$-t, a $L_{2n+1}$ hibaképlet $(x-x_i)(x-x_i')$ kifejezése _____ lesz."},a:{en:"$(x-x_i)^2$.",hu:"$(x-x_i)^2$."}},{q:{en:"If $f(x) = x^3$, and we use Hermite interpolation at $x_0 = 0$ and $x_1 = 1$, what is the degree of $H_3(x)$?",hu:"Ha $f(x) = x^3$, és Hermite interpolációt használunk a $x_0 = 0$ és $x_1 = 1$ értékeknél, mekkora a $H_3(x)$ foka?"},a:{en:"Degree 3.",hu:"3. fokozat."}},{q:{en:"How does the Hermite divided difference table accommodate a node with a given second derivative?",hu:"Hogyan illeszkedik a Hermite osztott differenciatábla egy adott második deriválttal rendelkező csomóponthoz?"},a:{en:"The node and its function value are listed three times, and the second derivative is used to calculate the second-order divided difference.",hu:"A csomópont és a függvényértéke háromszor szerepel, és a második derivált a másodrendű osztott különbség kiszámításához."}},{q:{en:"The Fundamental Theorem of Algebra proves that a polynomial of degree $m$ can have at most _____ distinct roots unless it is the zero polynomial.",hu:"Az algebra alaptétele bizonyítja, hogy egy $m$ fokú polinomnak legfeljebb _____ különböző gyöke lehet, hacsak nem nulla polinom."},a:{en:"$m$ roots.",hu:"$m$ gyökerei."}},{q:{en:"What is the value of the first-order divided difference $f[x_1, x_1]$ if $f'(x) = 2x + 1$ and $x_1 = 3$?",hu:"Mennyi a $f[x_1, x_1]$ elsőrendű osztott különbség értéke, ha $f'(x) = 2x + 1$ és $x_1 = 3$?"},a:{en:"7.",hu:"7."}},{q:{en:"In the Hermite expansion, the term $f[x_0, x_0, \\dots, x_k](x - x_0)^2 \\dots (x - x_{k-1})^2$ is zero if $f$ is a polynomial of degree less than _____.",hu:"A Hermite-kiterjesztésben a $f[x_0, x_0, \\dots, x_k](x - x_0)^2 \\dots (x - x_{k-1})^2$ kifejezés nulla, ha a $f$ egy _____-nál kisebb fokú polinom."},a:{en:"$2k$.",hu:"$2k$."}},{q:{en:"If we have nodes $x_0, x_1, x_2$, what is the final term of the Hermite polynomial $H_5(x)$?",hu:"Ha vannak $x_0, x_1, x_2$ csomópontjaink, mi a $H_5(x)$ Hermite-polinom végső tagja?"},a:{en:"$f[x_0, x_0, x_1, x_1, x_2, x_2](x-x_0)^2(x-x_1)^2(x-x_2)$.",hu:"$f[x_0, x_0, x_1, x_1, x_2, x_2](x-x_0)^2(x-x_1)^2(x-x_2)$."}},{q:{en:"Cloze: In the construction of $H_{2n+1}$, we list mesh points twice to simulate nodes having a multiplicity of _____.",hu:"Bezárás: A $H_{2n+1}$ felépítésében kétszer soroljuk fel a hálópontokat, hogy szimuláljuk a _____ sokaságú csomópontokat."},a:{en:"Two.",hu:"Két."}},{q:{en:"What is the relationship between the divided difference $f[x_0, x_1, \\dots, x_k]$ and the order of nodes?",hu:"Mi a kapcsolat a $f[x_0, x_1, \\dots, x_k]$ osztott különbség és a csomópontok sorrendje között?"},a:{en:"Divided differences are symmetric, meaning the value is independent of the order of the nodes.",hu:"Az osztott különbségek szimmetrikusak, vagyis az érték független a csomópontok sorrendjétől."}},{q:{en:"When calculating the error of Hermite interpolation, if $f(x)$ is a polynomial of degree $2n+2$, the error term $\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}$ becomes a _____.",hu:"A Hermite-interpoláció hibájának kiszámításakor, ha $f(x)$ egy $2n+2$ fokú polinom, a $\\frac{f^{(2n+2)}(\\xi)}{(2n+2)!}$ hibatag _____ lesz."},a:{en:"Constant.",hu:"Állandó."}},{q:{en:"In Example 6.21, the Hermite polynomial $H_5(x)$ ended with the term $2(x+1)^2(x-1)^2$. What does the coefficient 2 represent?",hu:"A 6.21. példában a $H_5(x)$ Hermite-polinom a $2(x+1)^2(x-1)^2$ kifejezéssel végződött. Mit jelent a 2-es együttható?"},a:{en:"The divided difference $f[-1, -1, 1, 1, 2]$.",hu:"A megosztott különbség $f[-1, -1, 1, 1, 2]$."}},{q:{en:"If a function $f$ is only $C^1$, can we validly apply the derivative-based error formula for Hermite interpolation?",hu:"Ha egy $f$ függvény csak $C^1$, akkor érvényesen alkalmazhatjuk a derivált alapú hibaképletet a Hermite interpolációhoz?"},a:{en:"No, the formula requires $f$ to be at least $C^{2n+2}$.",hu:"Nem, a képlet megköveteli, hogy a $f$ legalább $C^{2n+2}$ legyen."}}],spline:[{q:{en:"What is the definition of a spline function of degree $k$ on an interval $[a, b]$ with mesh $\\{x_i\\}$?",hu:"Mi a definíciója a $k$ fokos spline függvénynek a $[a, b]$ intervallumon $\\{x_i\\}$ hálóval?"},a:{en:"A continuous function $S$ that is a polynomial of degree at most $k$ on each sub-interval and $S \\in C^{k-1}[a, b]$.",hu:"Egy $S$ folytonos függvény, amely legfeljebb $k$ fokszámú polinom az egyes részintervallumokon és $S \\in C^{k-1}[a, b]$."}},{q:{en:"What is the common name for a spline function of degree $k = 1$?",hu:"Mi a $k = 1$ fokú spline függvény általános neve?"},a:{en:"Linear spline function.",hu:"Lineáris spline függvény."}},{q:{en:"A spline function of degree $k = 2$ is referred to as a _____ spline function.",hu:"A $k = 2$ fokú spline függvényt _____ spline függvénynek nevezzük."},a:{en:"quadratic",hu:"négyzetes"}},{q:{en:"A spline function of degree $k = 3$ is referred to as a _____ spline function.",hu:"A $k = 3$ fokú spline függvényt _____ spline függvénynek nevezzük."},a:{en:"cubic",hu:"kocka alakú"}},{q:{en:"How many parameters define a cubic spline $S$ consisting of $n$ polynomial segments?",hu:"Hány paraméter határoz meg egy $n$ polinom szegmensekből álló $S$ köbös spline-t?"},a:{en:"$4n$ parameters.",hu:"$4n$ paraméterek."}},{q:{en:"In cubic spline interpolation, how many conditions are provided by the interpolation requirements and the continuity of the first and second derivatives?",hu:"A köbös spline interpolációnál hány feltételt biztosítanak az interpolációs követelmények és az első és második derivált folytonossága?"},a:{en:"$4n - 2$ conditions.",hu:"$4n - 2$ feltételek."}},{q:{en:"What additional boundary conditions define a 'natural' cubic spline?",hu:"Milyen további peremfeltételek határozzák meg a „természetes” köbös spline-t?"},a:{en:"$S_0''(x_0) = 0$ and $S_{n-1}''(x_n) = 0$.",hu:"$S_0''(x_0) = 0$ és $S_{n-1}''(x_n) = 0$."}},{q:{en:"What additional boundary conditions define a 'clamped' (or complete) cubic spline?",hu:"Milyen további peremfeltételek határozzák meg a „befogott” (vagy teljes) köbös spline-t?"},a:{en:"$S'(x_0) = y_0'$ and $S'(x_n) = y_n'$.",hu:"$S'(x_0) = y_0'$ és $S'(x_n) = y_n'$."}},{q:{en:"In the cubic polynomial form $S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$, what does $a_i$ represent?",hu:"A $S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$ köbös polinom alakban mit jelent a $a_i$?"},a:{en:"The function value at the point $x_i$, such that $a_i = y_i$.",hu:"A függvény értéke a $x_i$ pontban úgy, hogy a $a_i = y_i$."}},{q:{en:"What is the relationship between the coefficient $c_i$ and the second derivative $S_i''(x_i)$ in a cubic spline segment?",hu:"Mi a kapcsolat a $c_i$ együttható és a $S_i''(x_i)$ második derivált között egy köbös spline szegmensben?"},a:{en:"$c_i = \\frac{S_i''(x_i)}{2}$.",hu:"$c_i = \\frac{S_i''(x_i)}{2}$."}},{q:{en:"What is the definition of the notation $\\Delta x_i$ used in spline interpolation formulas?",hu:"Mi a definíciója a spline interpolációs képletekben használt $\\Delta x_i$ jelölésnek?"},a:{en:"$\\Delta x_i = x_{i+1} - x_i$.",hu:"$\\Delta x_i = x_{i+1} - x_i$."}},{q:{en:"What is the definition of the notation $\\Delta y_i$ used in spline interpolation formulas?",hu:"Mi a definíciója a spline interpolációs képletekben használt $\\Delta y_i$ jelölésnek?"},a:{en:"$\\Delta y_i = y_{i+1} - y_i$.",hu:"$\\Delta y_i = y_{i+1} - y_i$."}},{q:{en:"Formula: How is the coefficient $d_i$ expressed in terms of $c_i$ and $c_{i+1}$?",hu:"Képlet: Hogyan fejeződik ki a $d_i$ együttható $c_i$ és $c_{i+1}$ kifejezésekben?"},a:{en:"$d_i = \\frac{c_{i+1} - c_i}{3\\Delta x_i}$.",hu:"$d_i = \\frac{c_{i+1} - c_i}{3\\Delta x_i}$."}},{q:{en:"How is the coefficient $b_i$ expressed using $\\Delta y_i$, $\\Delta x_i$, $c_i$, and $c_{i+1}$?",hu:"Hogyan fejeződik ki a $b_i$ együttható a $\\Delta y_i$, $\\Delta x_i$, $c_i$ és $c_{i+1}$ használatával?"},a:{en:"$b_i = \\frac{\\Delta y_i}{\\Delta x_i} - \\frac{2c_i + c_{i+1}}{3}\\Delta x_i$.",hu:"$b_i = \\frac{\\Delta y_i}{\\Delta x_i} - \\frac{2c_i + c_{i+1}}{3}\\Delta x_i$."}},{q:{en:"What type of matrix characterizes the system $Ax = b$ used to solve for the cubic spline coefficients $c_i$?",hu:"Milyen típusú mátrix jellemzi a $Ax = b$ rendszert, amellyel a $c_i$ köbös spline-együtthatókat megoldották?"},a:{en:"A tridiagonal matrix.",hu:"Háromszögű mátrix."}},{q:{en:"Why is the system $Ax = b$ for natural cubic splines guaranteed to have a unique solution?",hu:"Miért garantáltan egyedi megoldás a természetes köbös hornyokhoz készült $Ax = b$ rendszer?"},a:{en:"Because the matrix $A$ is diagonally dominant.",hu:"Mivel a $A$ mátrix átlósan domináns."}},{q:{en:"In the system $Ax = b$ for a natural spline, what are the values of the first and last elements of the solution vector $x = (c_0, c_1, \\ldots, c_n)^T$?",hu:"A $Ax = b$ rendszerben természetes spline esetén mekkora a $x = (c_0, c_1, \\ldots, c_n)^T$ megoldásvektor első és utolsó elemének értéke?"},a:{en:"$c_0 = 0$ and $c_n = 0$.",hu:"$c_0 = 0$ és $c_n = 0$."}},{q:{en:"Which boundary condition for cubic splines involves specifying the slope of the tangent line at the endpoints?",hu:"A köbös spline-ok melyik peremfeltétele tartalmazza az érintővonal meredekségének megadását a végpontokban?"},a:{en:"Clamped spline (or complete spline) conditions.",hu:"Rögzített spline (vagy teljes spline) feltételek."}},{q:{en:"What is the primary visual disadvantage of linear spline interpolation compared to cubic spline interpolation?",hu:"Mi a lineáris spline interpoláció elsődleges vizuális hátránya a köbös spline interpolációhoz képest?"},a:{en:"Linear splines are not smooth (not differentiable at the mesh points).",hu:"A lineáris szálak nem simaak (a hálópontokban nem különböztethetők meg)."}},{q:{en:"Theorem 6.24: For a natural cubic spline $S$ and any other $C^2$ interpolating function $f$, what inequality holds regarding their second derivatives?",hu:"6.24. Tétel: A $S$ természetes köbös spline és bármely más $C^2$ $f$ interpolációs függvény esetén milyen egyenlőtlenség érvényes a második deriváltjaira?"},a:{en:"$\\int_a^b (S''(x))^2 \\, dx \\leq \\int_a^b (f''(x))^2 \\, dx$.",hu:"$\\int_a^b (S''(x))^2 \\, dx \\leq \\int_a^b (f''(x))^2 \\, dx$."}},{q:{en:"What does the minimal property of natural cubic splines (the integral of the squared second derivative) signify physically?",hu:"Mit jelent fizikailag a természetes köbös spline minimális tulajdonsága (a négyzetes második derivált integrálja)?"},a:{en:"It represents the 'smoothest' interpolation among all possible $C^2$ interpolating functions.",hu:"Ez jelenti a „legsimább” interpolációt az összes lehetséges $C^2$ interpolációs függvény közül."}},{q:{en:"In the error bounds for clamped cubic splines, what does $M_4$ represent?",hu:"Mit jelent a $M_4$ a befogott köbös spline hibahatáraiban?"},a:{en:"$M_4 = \\max\\{|f^{(4)}(x)| : x \\in [a, b]\\}$.",hu:"$M_4 = \\max\\{|f^{(4)}(x)|: x \\in [a, b]\\}$."}},{q:{en:"In the error bounds for cubic splines, what does $h$ represent?",hu:"Mit jelent a $h$ a köbös spline hibahatáraiban?"},a:{en:"The maximum length of the sub-intervals ($h = \\max \\Delta x_i$).",hu:"A részintervallumok maximális hossza ($h = \\max \\Delta x_i$)."}},{q:{en:"The error bound for $|f(x) - S(x)|$ in clamped cubic spline interpolation is proportional to what power of the step size $h$?",hu:"A zárt köbös spline interpolációban a $|f(x) - S(x)|$-hez kötött hiba arányos a $h$ lépésnagyság mekkora hatványával?"},a:{en:"$h^4$.",hu:"$h^4$."}},{q:{en:"The error bound for $|f'(x) - S'(x)|$ in clamped cubic spline interpolation is proportional to what power of the step size $h$?",hu:"A zárt köbös spline interpolációban a $|f'(x) - S'(x)|$-hez kötött hiba arányos a $h$ lépésnagyság mekkora hatványával?"},a:{en:"$h^3$.",hu:"$h^3$."}},{q:{en:"The error bound for $|f''(x) - S''(x)|$ in clamped cubic spline interpolation is proportional to what power of the step size $h$?",hu:"A zárt köbös spline interpolációban a $|f''(x) - S''(x)|$-hez kötött hiba arányos a $h$ lépésnagyság mekkora hatványával?"},a:{en:"$h^2$.",hu:"$h^2$."}},{q:{en:"True or False: Natural cubic spline interpolation is better at avoiding oscillations near the ends of an interval compared to high-degree Lagrange interpolation.",hu:"Igaz vagy hamis: A természetes köbös spline interpoláció jobban elkerüli az intervallum végeihez közeli oszcillációkat, mint a nagyfokú Lagrange-interpoláció."},a:{en:"True.",hu:"Igaz."}},{q:{en:"Which numerical algorithm is recommended for efficiently solving the tridiagonal system $Ax = b$ in spline calculations?",hu:"Melyik numerikus algoritmus javasolt a $Ax = b$ háromszögrendszer hatékony megoldásához spline számításokban?"},a:{en:"Gaussian elimination for tridiagonal systems (Algorithm 3.37).",hu:"Gauss-elimináció tridiagonális rendszerek esetén (3.37-es algoritmus)."}},{q:{en:"What is the condition for $c_0$ in the linear system for a clamped spline with given $y_0'$?",hu:"Mi a feltétele a $c_0$-nek a lineáris rendszerben egy befogott spline esetén adott $y_0'$-vel?"},a:{en:"$2c_0 \\Delta x_0 + c_1 \\Delta x_0 = 3\\frac{\\Delta y_0}{\\Delta x_0} - 3y_0'$.",hu:"$2c_0 \\Delta x_0 + c_1 \\Delta x_0 = 3\\frac{\\Delta y_0}{\\Delta x_0} - 3y_0'$."}},{q:{en:"What is the condition for $c_n$ in the linear system for a clamped spline with given $y_n'$?",hu:"Mi a feltétele a $c_n$-nek a lineáris rendszerben egy befogott spline esetén adott $y_n'$-vel?"},a:{en:"$c_{n-1}\\Delta x_{n-1} + 2c_n \\Delta x_{n-1} = 3y_n' - 3\\frac{\\Delta y_{n-1}}{\\Delta x_{n-1}}$.",hu:"$c_{n-1}\\Delta x_{n-1} + 2c_n \\Delta x_{n-1} = 3y_n' - 3\\frac{\\Delta y_{n-1}}{\\Delta x_{n-1}}$."}},{q:{en:"Process: To prove $\\int_a^b S''(x)g''(x) \\, dx = 0$, what calculus technique is applied after splitting the integral over sub-intervals?",hu:"Folyamat: A $\\int_a^b S''(x)g''(x) \\, dx = 0$ bizonyítására milyen számítási technikát alkalmazunk az integrál részintervallumokra való felosztása után?"},a:{en:"Integration by parts.",hu:"Integráció alkatrészek szerint."}},{q:{en:"If $S$ is a cubic spline, what is the nature of its third derivative $S'''$ on any sub-interval $[x_i, x_{i+1}]$?",hu:"Ha a $S$ egy köbös spline, milyen a harmadik deriváltja, a $S'''$ bármely $[x_i, x_{i+1}]$ részintervallumon?"},a:{en:"It is a constant function.",hu:"Ez egy állandó funkció."}},{q:{en:"In the proof of the minimal property, why does $\\int_{x_{i-1}}^{x_i} g'(x) \\, dx$ equal zero?",hu:"A minimális tulajdonság igazolásában miért egyenlő a $\\int_{x_{i-1}}^{x_i} g'(x) \\, dx$ nullával?"},a:{en:"Because $g(x_i) = f(x_i) - S(x_i) = 0$ for all $i$ (both functions interpolate the same data).",hu:"Mivel a $g(x_i) = f(x_i) - S(x_i) = 0$ az összes $i$-hez (mindkét funkció ugyanazokat az adatokat interpolálja)."}},{q:{en:"What is the continuity class of a $k$-th degree spline function on the interval $(a, b)$?",hu:"Mi a $k$-edik fokú spline függvény folytonossági osztálya a $(a, b)$ intervallumon?"},a:{en:"$C^{k-1}(a, b)$.",hu:"$C^{k-1}(a, b)$."}},{q:{en:"How many conditions are required to uniquely determine a cubic spline with $n$ sub-intervals?",hu:"Hány feltétel szükséges egy köbös spline egyedi meghatározásához $n$ részintervallumokkal?"},a:{en:"$4n$ conditions.",hu:"$4n$ feltételek."}},{q:{en:"Concept: Piecewise linear interpolation",hu:"Koncepció: Darabosan lineáris interpoláció"},a:{en:"Definition: Connecting data points $(x_i, y_i)$ with straight line segments; geometrically equivalent to a linear spline.",hu:"Definíció: $(x_i, y_i)$ adatpontok összekötése egyenes szakaszokkal; geometriailag egyenértékű egy lineáris spline-nal."}},{q:{en:"In the context of spline error bounds, what does $k$ represent in the formula $|f''(x) - S''(x)| \\leq (\\frac{1}{12} + \\frac{h}{3k})M_4 h^2$?",hu:"A spline hibahatárokkal összefüggésben mit jelent a $k$ a $|f''(x) - S''(x)| \\leq (\\frac{1}{12} + \\frac{h}{3k})M_4 h^2$ képletben?"},a:{en:"The minimum length of the sub-intervals ($k = \\min \\Delta x_i$).",hu:"A részintervallumok minimális hossza ($k = \\min \\Delta x_i$)."}},{q:{en:"What term is used for $S'(x_n)$ and $S''(x_n)$ in equations where $x_n$ is the right endpoint?",hu:"Milyen kifejezést használnak a $S'(x_n)$ és $S''(x_n)$ kifejezésekre olyan egyenletekben, ahol a $x_n$ a megfelelő végpont?"},a:{en:"Left-sided derivatives.",hu:"Baloldali származékok."}},{q:{en:"Which equation relates $c_i, c_{i+1}, c_{i+2}$ for $i = 0, \\ldots, n-2$ in a general cubic spline?",hu:"Melyik egyenlet kapcsolja össze a $c_i, c_{i+1}, c_{i+2}$ $i = 0, \\ldots, n-2$-t egy általános köbös spline-ban?"},a:{en:"$c_i \\Delta x_i + 2c_{i+1}(\\Delta x_i + \\Delta x_{i+1}) + c_{i+2}\\Delta x_{i+1} = 3\\frac{\\Delta y_{i+1}}{\\Delta x_{i+1}} - 3\\frac{\\Delta y_i}{\\Delta x_i}$.",hu:"$c_i \\Delta x_i + 2c_{i+1}(\\Delta x_i + \\Delta x_{i+1}) + c_{i+2}\\Delta x_{i+1} = 3\\frac{\\Delta y_{i+1}}{\\Delta x_{i+1}} - 3\\frac{\\Delta y_i}{\\Delta x_i}$."}},{q:{en:"What property of cubic splines makes them 'smooth enough' for most practical applications?",hu:"A köbös hornyok milyen tulajdonsága teszi „elég simává” a legtöbb gyakorlati alkalmazáshoz?"},a:{en:"They are twice continuously differentiable ($C^2$).",hu:"Kétszer folyamatosan differenciálhatóak ($C^2$)."}}]},q={glossary:{en:"Glossary",hu:"Fogalomtár"},flashcards:{en:"Flashcards",hu:"Tanulókártyák"},shuffle:{en:"🔀 Shuffle",hu:"🔀 Keverés"},reset:{en:"Reset order",hu:"Eredeti sorrend"},question:{en:"Question",hu:"Kérdés"},answer:{en:"Answer",hu:"Válasz"},prev:{en:"‹ Prev",hu:"‹ Előző"},next:{en:"Next ›",hu:"Következő ›"},showAnswer:{en:"Show answer",hu:"Válasz mutatása"},showQuestion:{en:"Show question",hu:"Kérdés mutatása"}};function ve({deck:t}){const{lang:a}=Q(),l=be[t]??[],[i,r]=u.useState(null);if(!l.length)return null;const o=a;return e.jsxs("section",{className:"deck",children:[e.jsx("h3",{children:q.glossary[o]}),e.jsx("div",{className:"deck-list",children:l.map((s,_)=>{const n=i===_;return e.jsxs("button",{className:"theorem-card deck-item",style:{textAlign:"left",cursor:"pointer",width:"100%"},onClick:()=>r(n?null:_),children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12},children:[e.jsx("span",{style:{fontWeight:700},children:e.jsx(W,{markdown:s.term[o]})}),e.jsx("span",{style:{opacity:.5},children:n?"−":"+"})]}),n&&e.jsx(W,{markdown:s.def[o]})]},_)})})]})}const P=t=>Array.from({length:t},(a,l)=>l);function je(t){const a=P(t);for(let l=a.length-1;l>0;l--){const i=Math.floor(Math.random()*(l+1));[a[l],a[i]]=[a[i],a[l]]}return a}function we({deck:t}){const{lang:a}=Q(),l=ze[t]??[],i=a,[r,o]=u.useState(()=>P(l.length)),[s,_]=u.useState(0),[n,h]=u.useState(!1),m=u.useMemo(()=>l[r[s]],[l,r,s]),c=x=>typeof x=="string"?x:x[i];if(!l.length)return null;const k=x=>{h(!1),_(p=>(p+x+l.length)%l.length)};return e.jsxs("section",{className:"deck",children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8},children:[e.jsx("h3",{style:{margin:0},children:q.flashcards[i]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsxs("span",{style:{opacity:.6,fontSize:"0.85rem"},children:[s+1," / ",l.length]}),e.jsx("button",{className:"btn",onClick:()=>{o(je(l.length)),_(0),h(!1)},children:q.shuffle[i]}),e.jsx("button",{className:"btn",onClick:()=>{o(P(l.length)),_(0),h(!1)},children:q.reset[i]})]})]}),e.jsxs("button",{className:"theorem-card",style:{width:"100%",minHeight:150,textAlign:"left",cursor:"pointer",marginTop:10},onClick:()=>h(x=>!x),children:[e.jsx("div",{className:"theorem-tag",children:n?q.answer[i]:q.question[i]}),e.jsx(W,{markdown:c(n?m.a:m.q)})]}),e.jsxs("div",{style:{display:"flex",gap:10,marginTop:10,alignItems:"center"},children:[e.jsx("button",{className:"btn",onClick:()=>k(-1),children:q.prev[i]}),e.jsx("button",{className:"btn",style:{flex:1},onClick:()=>h(x=>!x),children:n?q.showQuestion[i]:q.showAnswer[i]}),e.jsx("button",{className:"btn",onClick:()=>k(1),children:q.next[i]})]})]})}const qe=`## 6.5. Spline Interpolation

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
`,Ae=`## 6.5. Spline interpoláció

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
`,Se={lagrange:{en:le,hu:oe},newton:{en:ae,hu:ie},hermite:{en:te,hu:ne},spline:{en:qe,hu:Ae}};function Le(t,a){var l;return((l=Se[t])==null?void 0:l[a])??""}const Me=`#include <vector>
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
`,De=`program hermite_demo
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
`,He=`package main

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
`,Te=`function hermite_coeffs(x, y, dy)
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
`,Ne=`// Hermite interpolation via divided differences with doubled nodes.
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
`,Ee=`# Hermite interpolation via divided differences with doubled nodes.
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
`,Ve=`// Hermite interpolation via divided differences with doubled nodes.
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
`,We=`hermiteCoeffs[x_, y_, dy_] := Module[{n = Length[x], m, z, Q, i, j},
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
`,Be=`function a = lagrange_coeffs(x, y)
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
`,Ge=`import numpy as np


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
`,Ke=`# Polynomial coefficients a (low->high) of the degree n-1 interpolant
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
`,ln=`// Evaluate the Newton form by nested (Horner-like) multiplication.
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
`,sn=`newtonEval[x_, a_, t_] := Module[{p = Last[a], k},
   Do[p = p (t - x[[k]]) + a[[k]], {k, Length[a] - 1, 1, -1}]; p];
Print[newtonEval[{-1, 1, 2, 3}, {-3, 2, 0, 3}, 0]]   (* 5 *)
`,rn=`#include <vector>
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
`,$n=`program divided_differences_demo
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
`,_n=`package main

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
`,hn=`function divided_differences(x, y)
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
`,dn=`// Newton divided-difference coefficients a_i = f[x_0, ..., x_i].
function dividedDifferences(x, y) {
  const n = x.length;
  const a = [...y];
  for (let j = 1; j < n; j++)
    for (let i = n - 1; i >= j; i--) a[i] = (a[i] - a[i - 1]) / (x[i] - x[i - j]);
  return a;
}
console.log(dividedDifferences([-1, 1, 2, 3], [-3, 1, 3, 29])); // [-3, 2, 0, 3]
`,xn=`function a = divided_differences(x, y)
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
`,fn=`import numpy as np


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
`,cn=`# Newton divided differences and Horner evaluation of the Newton form.
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
`,un=`dividedDifferences[x_, y_] := Module[{a = N[y], n = Length[x], i, j},
   Do[a[[i]] = (a[[i]] - a[[i - 1]])/(x[[i]] - x[[i - j + 1]]),
    {j, 2, n}, {i, n, j, -1}];
   a];
Print[dividedDifferences[{-1, 1, 2, 3}, {-3, 1, 3, 29}]]
`,pn=`#include <vector>
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
`,kn=`package main

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
`,yn=`function natural_cubic_spline(x, y)
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
`,bn=`// Natural cubic spline: per-interval coefficients (a, b, c, d).
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
`,zn=`function [a, b, c, d] = natural_cubic_spline(x, y)
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
`,vn=`import numpy as np


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
`,jn=`# Natural cubic spline. Returns per-interval (a, b, c, d) with
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
`,wn=`// Natural cubic spline: per-interval coefficients (a, b, c, d).
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
`,qn=`naturalCubicSpline[x_, y_] := Module[{n = Length[x], h, A, rhs, c, a, b, d},
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
`,An=Object.assign({"./hermite.cpp":Me,"./hermite.f90":De,"./hermite.go":He,"./hermite.jl":Te,"./hermite.js":Ne,"./hermite.m":Ie,"./hermite.py":Ce,"./hermite.r":Ee,"./hermite.rs":Ve,"./hermite.wl":We,"./lagrange.cpp":Qe,"./lagrange.f90":Fe,"./lagrange.go":Pe,"./lagrange.jl":Re,"./lagrange.js":Oe,"./lagrange.m":Be,"./lagrange.py":Ge,"./lagrange.r":Ke,"./lagrange.rs":Ue,"./lagrange.wl":Xe,"./newton-eval.cpp":Ye,"./newton-eval.f90":Ze,"./newton-eval.go":Je,"./newton-eval.jl":en,"./newton-eval.js":nn,"./newton-eval.m":tn,"./newton-eval.py":an,"./newton-eval.r":on,"./newton-eval.rs":ln,"./newton-eval.wl":sn,"./newton.cpp":rn,"./newton.f90":$n,"./newton.go":_n,"./newton.jl":hn,"./newton.js":dn,"./newton.m":xn,"./newton.py":fn,"./newton.r":cn,"./newton.rs":mn,"./newton.wl":un,"./spline.cpp":pn,"./spline.f90":gn,"./spline.go":kn,"./spline.jl":yn,"./spline.js":bn,"./spline.m":zn,"./spline.py":vn,"./spline.r":jn,"./spline.rs":wn,"./spline.wl":qn}),w=(t,a)=>An[`./${t}.${a}`],Sn={lagrange:{en:"Lagrange interpolation (Vandermonde system)",hu:"Lagrange-interpoláció (Vandermonde-rendszer)"},newton:{en:"Newton's divided differences (coefficients)",hu:"Newton-féle osztott differenciák (együtthatók)"},"newton-eval":{en:"Newton polynomial evaluation (nested form)",hu:"Newton-polinom kiértékelése (beágyazott alak)"},hermite:{en:"Hermite interpolation",hu:"Hermite-interpoláció"},spline:{en:"Natural cubic spline",hu:"Természetes köbös spline"}},Ln=t=>({id:t,caption:Sn[t],snippets:{matlab:w(t,"m"),python:w(t,"py"),cpp:w(t,"cpp"),julia:w(t,"jl"),rust:w(t,"rs"),fortran:w(t,"f90"),wolfram:w(t,"wl"),javascript:w(t,"js"),go:w(t,"go"),r:w(t,"r")}}),Mn={lagrange:["lagrange"],newton:["newton","newton-eval"],hermite:["hermite"],spline:["spline"]};function Dn(t){return(Mn[t]??[]).map(Ln)}const Hn={lagrange:[{id:"q-lagrange-1",prompt:{en:"In two-variable Lagrange interpolation, the polynomial L_{n,m}(x,y) is:",hu:"A kétváltozós Lagrange-interpolációban az L_{n,m}(x,y) polinom:"},options:[{en:"∑_i ∑_j z_ij l_i(x) l̃_j(y)",hu:"∑_i ∑_j z_ij l_i(x) l̃_j(y)"},{en:"the product L_n(x) L_m(y)",hu:"az L_n(x) L_m(y) szorzat"},{en:"a sum of polynomials in x only",hu:"csak x-ben vett polinomok összege"},{en:"a single monomial xⁿ yᵐ",hu:"egyetlen xⁿ yᵐ monom"}],answer:0,explanation:{en:"It is the double sum of node values times the tensor product of 1-D basis polynomials.",hu:"Ez a csomóponti értékek kettős összege az 1D-s bázispolinomok tenzorszorzatával."}},{id:"q-lagrange-2",prompt:{en:"The Lagrange interpolating polynomial L_n(x) can be written as:",hu:"Az L_n(x) Lagrange-interpolációs polinom felírható:"},options:[{en:"L_n(x) = ∑_k y_k l_k(x)",hu:"L_n(x) = ∑_k y_k l_k(x)"},{en:"L_n(x) = y₀ + y₁x + … + y_n xⁿ",hu:"L_n(x) = y₀ + y₁x + … + y_n xⁿ"},{en:"L_n(x) = ∏_k y_k l_k(x)",hu:"L_n(x) = ∏_k y_k l_k(x)"},{en:"L_n(x) = ∫_a^b y(t) l_k(t) dt",hu:"L_n(x) = ∫_a^b y(t) l_k(t) dt"}],answer:0,explanation:{en:"It is the sum of node values weighted by the Lagrange basis polynomials.",hu:"A csomóponti értékek összege a Lagrange-bázispolinomokkal súlyozva."}},{id:"q-lagrange-3",prompt:{en:"For equidistant nodes with spacing h and x ∈ (x_k, x_{k+1}), the product ∏|x − x_i| satisfies:",hu:"h lépésközű ekvidisztáns csomópontoknál és x ∈ (x_k, x_{k+1}) esetén a ∏|x − x_i| szorzatra teljesül:"},options:[{en:"≤ (hⁿ⁺¹/4) · n!",hu:"≤ (hⁿ⁺¹/4) · n!"},{en:"≤ (hⁿ⁺¹/2) · n!",hu:"≤ (hⁿ⁺¹/2) · n!"},{en:"≤ (hⁿ⁺¹/8) · n!",hu:"≤ (hⁿ⁺¹/8) · n!"},{en:"≤ hⁿ⁺¹",hu:"≤ hⁿ⁺¹"}],answer:0,explanation:{en:"The standard equidistant bound is hⁿ⁺¹·n!/4.",hu:"A szokásos ekvidisztáns korlát hⁿ⁺¹·n!/4."}},{id:"q-lagrange-4",prompt:{en:"The Lagrange basis polynomial l_k(x) satisfies:",hu:"Az l_k(x) Lagrange-bázispolinomra teljesül:"},options:[{en:"l_k(x_k) = 1 and l_k(x_i) = 0 for all i ≠ k",hu:"l_k(x_k) = 1 és l_k(x_i) = 0 minden i ≠ k-ra"},{en:"l_k(x_i) = 1 for all i",hu:"l_k(x_i) = 1 minden i-re"},{en:"l_k(x) = xᵏ",hu:"l_k(x) = xᵏ"},{en:"l_k(x_i) = 0 for all i",hu:"l_k(x_i) = 0 minden i-re"}],answer:0,explanation:{en:"The basis polynomials are cardinal: l_k(x_i) = δ_{ki}.",hu:"A bázispolinomok kardinálisak: l_k(x_i) = δ_{ki}."}},{id:"q-lagrange-5",prompt:{en:"The remainder term in the degree-n Lagrange interpolation error formula is:",hu:"Az n-edfokú Lagrange-interpoláció hibaképletében a maradéktag:"},options:[{en:"[f⁽ⁿ⁾(ξ)/n!] ∏(x − x_i)",hu:"[f⁽ⁿ⁾(ξ)/n!] ∏(x − x_i)"},{en:"[f⁽ⁿ⁺¹⁾(ξ)/(n+1)!] ∏(x − x_i)",hu:"[f⁽ⁿ⁺¹⁾(ξ)/(n+1)!] ∏(x − x_i)"},{en:"f''(ξ)(x − x₀)",hu:"f''(ξ)(x − x₀)"},{en:"f'(ξ) ∏(x − x_i)",hu:"f'(ξ) ∏(x − x_i)"}],answer:1,explanation:{en:"The error uses the (n+1)-th derivative divided by (n+1)!.",hu:"A hiba az (n+1)-edik deriváltat használja (n+1)!-sal osztva."}}],newton:[{id:"q-newton-1",prompt:{en:"Which is the explicit formula for f[x₀,…,x_n]?",hu:"Melyik az f[x₀,…,x_n] explicit képlete?"},options:[{en:"f⁽ⁿ⁾(x₀)/n!",hu:"f⁽ⁿ⁾(x₀)/n!"},{en:"∑_i f(x_i) / ∏_{j≠i}(x_i − x_j)",hu:"∑_i f(x_i) / ∏_{j≠i}(x_i − x_j)"},{en:"∑_i f(x_i)(x_i − x₀)",hu:"∑_i f(x_i)(x_i − x₀)"},{en:"∏_i f(x_i)",hu:"∏_i f(x_i)"}],answer:1,explanation:{en:"The divided difference equals ∑_i f(x_i) / ∏_{j≠i}(x_i − x_j).",hu:"Az osztott differencia egyenlő ∑_i f(x_i) / ∏_{j≠i}(x_i − x_j)-vel."}},{id:"q-newton-2",prompt:{en:"The recursive definition of the n-th divided difference is:",hu:"Az n-edik osztott differencia rekurzív definíciója:"},options:[{en:"f[x₀,…,x_n] = ∑_k f[x_k]",hu:"f[x₀,…,x_n] = ∑_k f[x_k]"},{en:"f[x₀,…,x_n] = f[x₁,…,x_n] − f[x₀,…,x_{n−1}]",hu:"f[x₀,…,x_n] = f[x₁,…,x_n] − f[x₀,…,x_{n−1}]"},{en:"f[x₀,…,x_n] = (f[x₁,…,x_n] − f[x₀,…,x_{n−1}]) / (x_n − x₀)",hu:"f[x₀,…,x_n] = (f[x₁,…,x_n] − f[x₀,…,x_{n−1}]) / (x_n − x₀)"},{en:"f[x₀,…,x_n] = (x_n − x₀) f[x₁,…,x_{n−1}]",hu:"f[x₀,…,x_n] = (x_n − x₀) f[x₁,…,x_{n−1}]"}],answer:2,explanation:{en:"Each higher divided difference is the difference of two lower ones over (x_n − x₀).",hu:"Minden magasabb osztott differencia két alacsonyabb különbsége (x_n − x₀)-val osztva."}},{id:"q-newton-3",prompt:{en:"Which statement best applies to computing divided differences?",hu:"Melyik állítás illik legjobban az osztott differenciák kiszámítására?"},options:[{en:"In practice the recursive definition is preferred",hu:"A gyakorlatban a rekurzív definíciót részesítjük előnyben"},{en:"We compute them using Taylor's approximation",hu:"Taylor-közelítéssel számoljuk őket"},{en:"The explicit formula needs fewer operations",hu:"Az explicit képlet kevesebb műveletet igényel"},{en:"We prefer the explicit formula",hu:"Az explicit képletet részesítjük előnyben"}],answer:0,explanation:{en:"The recursive table is more efficient and numerically convenient than the explicit sum.",hu:"A rekurzív tábla hatékonyabb és numerikusan kényelmesebb az explicit összegnél."}},{id:"q-newton-4",prompt:{en:"The first divided difference of f at nodes x₀, x₁ is:",hu:"Az f első osztott differenciája az x₀, x₁ csomópontokban:"},options:[{en:"(f(x₁) − f(x₀)) / (x₁ − x₀)",hu:"(f(x₁) − f(x₀)) / (x₁ − x₀)"},{en:"(f(x₀) − f(x₁)) / (x₁ − x₀)",hu:"(f(x₀) − f(x₁)) / (x₁ − x₀)"},{en:"f(x₁) − f(x₀)",hu:"f(x₁) − f(x₀)"},{en:"(f'(x₁) − f'(x₀)) / (x₁ − x₀)",hu:"(f'(x₁) − f'(x₀)) / (x₁ − x₀)"}],answer:0,explanation:{en:"f[x₀,x₁] = (f(x₁) − f(x₀)) / (x₁ − x₀).",hu:"f[x₀,x₁] = (f(x₁) − f(x₀)) / (x₁ − x₀)."}},{id:"q-newton-5",prompt:{en:"The zeroth divided difference of f at a node x₀ is defined as:",hu:"Az f nulladik osztott differenciája egy x₀ csomópontban a definíció szerint:"},options:[{en:"0",hu:"0"},{en:"f'(x₀)",hu:"f'(x₀)"},{en:"x₀",hu:"x₀"},{en:"f(x₀)",hu:"f(x₀)"}],answer:3,explanation:{en:"f[x₀] = f(x₀).",hu:"f[x₀] = f(x₀)."}},{id:"q-newton-6",prompt:{en:"The Newton interpolating polynomial of degree n is:",hu:"Az n-edfokú Newton-interpolációs polinom:"},options:[{en:"L_n(x) = ∑_k y_k xᵏ",hu:"L_n(x) = ∑_k y_k xᵏ"},{en:"L_n(x) = ∏_k (x − x_k)",hu:"L_n(x) = ∏_k (x − x_k)"},{en:"L_n(x) = f[x₀]xⁿ + … + f[x_n]",hu:"L_n(x) = f[x₀]xⁿ + … + f[x_n]"},{en:"L_n(x) = ∑_k f[x₀,…,x_k](x − x₀)…(x − x_{k−1})",hu:"L_n(x) = ∑_k f[x₀,…,x_k](x − x₀)…(x − x_{k−1})"}],answer:3,explanation:{en:"Newton form sums divided-difference coefficients times the nested node products.",hu:"A Newton-alak az osztott differencia együtthatókat összegzi a beágyazott csomóponti szorzatokkal."}},{id:"q-newton-7",prompt:{en:"After adding a new data point (x_{n+1}, y_{n+1}), the updated polynomial is:",hu:"Egy új (x_{n+1}, y_{n+1}) adatpont hozzáadása után a frissített polinom:"},options:[{en:"L_{n+1}(x) = f[x₀,…,x_n](x − x_{n+1})",hu:"L_{n+1}(x) = f[x₀,…,x_n](x − x_{n+1})"},{en:"No change: L_{n+1}(x) = L_n(x)",hu:"Nincs változás: L_{n+1}(x) = L_n(x)"},{en:"L_{n+1}(x) = L_n(x) + f[x₀,…,x_{n+1}](x − x₀)…(x − x_n)",hu:"L_{n+1}(x) = L_n(x) + f[x₀,…,x_{n+1}](x − x₀)…(x − x_n)"},{en:"L_{n+1}(x) = L_n(x) + f[x_{n+1}]",hu:"L_{n+1}(x) = L_n(x) + f[x_{n+1}]"}],answer:2,explanation:{en:"Newton form only appends one new term, leaving previous coefficients intact.",hu:"A Newton-alak csak egy új tagot fűz hozzá, a korábbi együtthatókat érintetlenül hagyva."}},{id:"q-newton-8",prompt:{en:"The factor (x − x₀)(x − x₁)…(x − x_{k−1}) in the Newton polynomial has degree:",hu:"A Newton-polinom (x − x₀)(x − x₁)…(x − x_{k−1}) tényezőjének foka:"},options:[{en:"n − k",hu:"n − k"},{en:"k",hu:"k"},{en:"n",hu:"n"},{en:"k − 1",hu:"k − 1"}],answer:1,explanation:{en:"There are k linear factors, so the degree is k.",hu:"k darab lineáris tényező van, így a fok k."}},{id:"q-newton-9",prompt:{en:"Building the divided-difference table for n+1 points has arithmetic complexity:",hu:"Az osztott differencia tábla felépítése n+1 pontra milyen aritmetikai komplexitású:"},options:[{en:"O(n)",hu:"O(n)"},{en:"O(2ⁿ)",hu:"O(2ⁿ)"},{en:"O(n²)",hu:"O(n²)"},{en:"O(n³)",hu:"O(n³)"}],answer:2,explanation:{en:"The triangular table requires O(n²) operations.",hu:"A háromszögtábla O(n²) műveletet igényel."}},{id:"q-newton-10",prompt:{en:"The main computational advantage of the Newton form over the Lagrange form is that it:",hu:"A Newton-alak fő számítási előnye a Lagrange-alakkal szemben, hogy:"},options:[{en:"allows easy addition of new mesh points without recomputing all coefficients",hu:"lehetővé teszi új csomópontok könnyű hozzáadását az összes együttható újraszámítása nélkül"},{en:"avoids any division operations",hu:"elkerül minden osztási műveletet"},{en:"minimizes rounding errors",hu:"minimalizálja a kerekítési hibákat"},{en:"produces lower-degree polynomials",hu:"alacsonyabb fokú polinomokat állít elő"}],answer:0,explanation:{en:"New points add a single term, reusing all earlier coefficients.",hu:"Új pontok egyetlen tagot adnak hozzá, újrahasználva az összes korábbi együtthatót."}}],hermite:[{id:"q-hermite-1",prompt:{en:"Hermite interpolation is especially appropriate when:",hu:"A Hermite-interpoláció különösen akkor megfelelő, ha:"},options:[{en:"the nodes are equally spaced",hu:"a csomópontok egyenletesen helyezkednek el"},{en:"only function values are known",hu:"csak függvényértékek ismertek"},{en:"second derivatives are known everywhere",hu:"a második deriváltak mindenhol ismertek"},{en:"derivative values at the nodes are also known",hu:"a csomópontokban a deriváltértékek is ismertek"}],answer:3,explanation:{en:"Hermite matches both function and derivative values at the nodes.",hu:"A Hermite a csomópontokban a függvény- és a deriváltértékeket is illeszti."}},{id:"q-hermite-2",prompt:{en:"When building the Hermite divided-difference table, each node x_i is:",hu:"A Hermite osztott differencia tábla felépítésekor minden x_i csomópontot:"},options:[{en:"listed three times",hu:"háromszor írunk fel"},{en:"omitted in even columns",hu:"kihagyunk a páros oszlopokban"},{en:"listed once",hu:"egyszer írunk fel"},{en:"listed twice in consecutive rows",hu:"kétszer írunk fel egymást követő sorokban"}],answer:3,explanation:{en:"Each node is duplicated so the derivative condition enters the table.",hu:"Minden csomópontot megkettőzünk, hogy a deriváltfeltétel bekerüljön a táblába."}},{id:"q-hermite-3",prompt:{en:"For n+1 nodes, the Hermite problem specifies how many interpolation conditions?",hu:"n+1 csomópontra a Hermite-feladat hány interpolációs feltételt ad meg?"},options:[{en:"2n",hu:"2n"},{en:"n + 1",hu:"n + 1"},{en:"n²",hu:"n²"},{en:"2(n + 1)",hu:"2(n + 1)"}],answer:3,explanation:{en:"A value and a derivative at each of n+1 nodes give 2(n+1) conditions.",hu:"n+1 csomópont mindegyikében egy érték és egy derivált 2(n+1) feltételt ad."}},{id:"q-hermite-4",prompt:{en:"The degree of the Hermite polynomial for n+1 mesh points is at most:",hu:"A Hermite-polinom foka n+1 csomópontra legfeljebb:"},options:[{en:"n + 1",hu:"n + 1"},{en:"2n",hu:"2n"},{en:"2n + 1",hu:"2n + 1"},{en:"n",hu:"n"}],answer:2,explanation:{en:"2(n+1) conditions determine a polynomial of degree at most 2n+1.",hu:"A 2(n+1) feltétel legfeljebb 2n+1 fokú polinomot határoz meg."}},{id:"q-hermite-5",prompt:{en:"The extended divided difference f[x₀, x₀] is defined to be:",hu:"A kiterjesztett f[x₀, x₀] osztott differencia definíció szerint:"},options:[{en:"f'(x₀)",hu:"f'(x₀)"},{en:"f(x₀)",hu:"f(x₀)"},{en:"0",hu:"0"},{en:"f''(x₀)",hu:"f''(x₀)"}],answer:0,explanation:{en:"As x₁ → x₀ the first divided difference tends to f′(x₀).",hu:"Ahogy x₁ → x₀, az első osztott differencia f′(x₀)-hoz tart."}}],spline:[{id:"q-spline-1",prompt:{en:"A cubic spline with S''(x₀) = 0 and S''(x_n) = 0 is called a:",hu:"Az S''(x₀) = 0 és S''(x_n) = 0 feltételű köbös spline neve:"},options:[{en:"natural spline",hu:"természetes spline"},{en:"clamped spline",hu:"rögzített (clamped) spline"},{en:"quadratic spline",hu:"kvadratikus spline"},{en:"not-a-knot spline",hu:"not-a-knot spline"}],answer:0,explanation:{en:"Zero second derivatives at the endpoints define the natural cubic spline.",hu:"A végpontokban nulla második deriváltak definiálják a természetes köbös spline-t."}},{id:"q-spline-2",prompt:{en:"A spline function S of degree k on [a,b] is a function that:",hu:"Egy k-adfokú S spline-függvény [a,b]-n olyan függvény, amely:"},options:[{en:"is piecewise polynomial of degree ≤ k and belongs to Cᵏ⁻¹[a,b]",hu:"szakaszonként legfeljebb k-adfokú polinom, és Cᵏ⁻¹[a,b]-beli"},{en:"satisfies S⁽ᵏ⁾(x) = 0 everywhere",hu:"mindenhol teljesíti S⁽ᵏ⁾(x) = 0-t"},{en:"has continuous first derivative only",hu:"csak folytonos első deriválttal rendelkezik"},{en:"is a polynomial of degree k on the whole interval",hu:"a teljes intervallumon k-adfokú polinom"}],answer:0,explanation:{en:"A degree-k spline is piecewise polynomial and globally Cᵏ⁻¹.",hu:"Egy k-adfokú spline szakaszonként polinom és globálisan Cᵏ⁻¹."}},{id:"q-spline-3",prompt:{en:"Compared with high-degree global polynomial interpolation, cubic splines are preferred because they:",hu:"A magas fokú globális polinominterpolációhoz képest a köbös spline-okat azért részesítjük előnyben, mert:"},options:[{en:"use fewer sub-intervals",hu:"kevesebb részintervallumot használnak"},{en:"minimize oscillation while achieving smoothness",hu:"minimalizálják az oszcillációt, miközben simaságot érnek el"},{en:"require no continuity across nodes",hu:"nem igényelnek folytonosságot a csomópontokon"},{en:"never oscillate",hu:"sosem oszcillálnak"}],answer:1,explanation:{en:"Cubic splines avoid Runge-type oscillation while staying smooth (C²).",hu:"A köbös spline-ok elkerülik a Runge-féle oszcillációt, miközben simák (C²) maradnak."}},{id:"q-spline-4",prompt:{en:"The relation b_i = Δy_i/Δx_i − (2c_i + c_{i+1})/3 · Δx_i expresses:",hu:"A b_i = Δy_i/Δx_i − (2c_i + c_{i+1})/3 · Δx_i összefüggés kifejezi:"},options:[{en:"the natural boundary condition",hu:"a természetes peremfeltételt"},{en:"the slope of the piece S_i at x_i",hu:"az S_i szakasz meredekségét x_i-ben"},{en:"continuity of S'' at x_i",hu:"S'' folytonosságát x_i-ben"},{en:"the difference equation for c_i",hu:"a c_i-re vonatkozó differenciaegyenletet"}],answer:1,explanation:{en:"This formula gives the linear coefficient (slope at x_i) of the spline piece.",hu:"Ez a képlet a spline-szakasz lineáris együtthatóját (x_i-beli meredekségét) adja."}},{id:"q-spline-5",prompt:{en:"The unknown second-derivative parameters c_i = S''(x_i)/2 are found by solving a linear system whose matrix is:",hu:"Az ismeretlen c_i = S''(x_i)/2 második derivált paramétereket egy olyan lineáris rendszer megoldásával kapjuk, melynek mátrixa:"},options:[{en:"diagonal",hu:"diagonális"},{en:"upper-triangular",hu:"felső háromszög"},{en:"tridiagonal",hu:"tridiagonális"},{en:"dense and symmetric",hu:"teli és szimmetrikus"}],answer:2,explanation:{en:"Continuity conditions yield a tridiagonal system for the c_i.",hu:"A folytonossági feltételek tridiagonális rendszert adnak a c_i-kre."}}]};function G(t){return Hn[t]??[]}function C({str:t,method:a,points:l,derivatives:i,allowCompare:r,showTable:o,enableDerivatives:s}){const{lang:_}=Q(),n=t.lessons[a],h=Le(a,_),m=Dn(a);return e.jsxs("article",{className:"lesson",children:[e.jsxs("header",{children:[e.jsx("h2",{children:n.title}),e.jsx("p",{className:"intro",children:n.intro})]}),e.jsxs("section",{className:"theorem-card",children:[e.jsx("div",{className:"theorem-tag",children:n.theoremTitle}),e.jsx(se,{block:!0,children:n.theorem}),e.jsx("p",{children:n.body})]}),h&&e.jsxs("details",{className:"lesson__theory",open:!0,children:[e.jsx("summary",{children:_==="hu"?"Elmélet":"Theory"}),e.jsx(W,{markdown:h})]}),m.map(c=>e.jsx(Z,{snippets:c.snippets,caption:c.caption},c.id)),G(a).length>0&&e.jsx(J,{questions:G(a)}),e.jsxs("p",{className:"tryit",children:["👉 ",n.tryIt]}),e.jsx(ye,{str:t,initialPoints:l,initialDerivs:i,primary:a,allowCompare:r,showTable:o,enableDerivatives:s}),e.jsx(ve,{deck:a}),e.jsx(we,{deck:a})]})}const E={lagrange:"#ff5d8f",newton:"#f5a623",hermite:"#9b5de5",spline:"#00bbf9"},K=t=>Math.cos(t),V=[-Math.PI-.5,Math.PI+.5],Tn=[-2.5,2.5];function Nn(){const t=Array.from({length:40}),a=["#ff5d8f","#f5a623","#9b5de5","#00bbf9","#3ddc97"];return e.jsx("div",{className:"confetti","aria-hidden":!0,children:t.map((l,i)=>e.jsx("span",{style:{left:`${Math.random()*100}%`,background:a[i%a.length],animationDelay:`${Math.random()*.6}s`,transform:`rotate(${Math.random()*360}deg)`}},i))})}function In({str:t}){const[a,l]=u.useState([{x:-3,y:-.5},{x:-1.2,y:.5},{x:.5,y:.7},{x:2,y:-.2},{x:3,y:-.8}]),[i,r]=u.useState("spline"),[o,s]=u.useState(!0),_=u.useMemo(()=>[...a].sort((x,p)=>x.x-p.x),[a]),n=u.useMemo(()=>F(i,_),[i,_]),h=u.useMemo(()=>{let x=0;for(let p=0;p<=80;p++){const b=V[0]+(V[1]-V[0])*p/80,A=Math.abs(n(b)-K(b));Number.isFinite(A)&&(x=Math.max(x,A))}return x},[n]),m=h<.18,c=[{fn:n,color:E[i],label:t.methods[i]}];o&&c.push({fn:K,color:"#8aa0b5",label:"cos x",dashed:!0});const k=(x,p,b)=>l(A=>A.map((L,M)=>M===x?{x:p,y:b}:L));return e.jsxs("div",{className:"challenge",children:[e.jsxs("div",{className:"challenge-head",children:[e.jsx("h2",{children:t.nav.playground}),e.jsx("p",{className:"intro",children:t.tagline})]}),e.jsxs("div",{className:"challenge-bar",children:[e.jsx("div",{className:"methodpills",children:Object.keys(E).map(x=>e.jsx("button",{className:`pill ${i===x?"on":""}`,style:i===x?{background:E[x],borderColor:E[x]}:{},onClick:()=>r(x),children:t.methods[x]},x))}),e.jsxs("label",{className:"chip",children:[e.jsx("input",{type:"checkbox",checked:o,onChange:()=>s(x=>!x)}),t.ui.showCos]})]}),e.jsxs("div",{className:"challenge-plotwrap",children:[e.jsx(U,{points:a,curves:c,domain:V,range:Tn,onDrag:k,width:720,height:440}),m&&e.jsx(Nn,{})]}),e.jsx("div",{className:`challenge-status ${m?"win":""}`,children:m?e.jsx("strong",{children:t.ui.nailedIt}):e.jsxs("span",{children:["🎯 ",t.ui.challengeHint," ",e.jsxs("em",{children:["(max Δ = ",h.toFixed(2),")"]})]})})]})}const Cn=[{id:"play",no:"6·play",title:{en:j.en.nav.playground,hu:j.hu.nav.playground},blurb:{en:"",hu:""}},{id:"lagrange",no:"6.1",title:{en:j.en.nav.lagrange,hu:j.hu.nav.lagrange},blurb:{en:"",hu:""}},{id:"newton",no:"6.2",title:{en:j.en.nav.newton,hu:j.hu.nav.newton},blurb:{en:"",hu:""}},{id:"hermite",no:"6.4",title:{en:j.en.nav.hermite,hu:j.hu.nav.hermite},blurb:{en:"",hu:""}},{id:"spline",no:"6.5",title:{en:j.en.nav.spline,hu:j.hu.nav.spline},blurb:{en:"",hu:""}}];function Bn(){const{lang:t}=Q(),a=j[t],l={scrollMarginTop:"calc(var(--nav-h) + var(--scrolly-topbar-h, 44px) + 8px)"};return e.jsxs("div",{className:"app ch-interpolation",children:[e.jsx(ee,{sections:Cn}),e.jsx("header",{className:"topbar",children:e.jsxs("div",{className:"brand",children:[e.jsx("span",{className:"logo",children:"📈"}),e.jsxs("div",{children:[e.jsx("div",{className:"brand-title",children:a.appTitle}),e.jsx("div",{className:"brand-sub",children:a.tagline})]})]})}),e.jsxs("main",{className:"content",children:[e.jsx("section",{id:"play",style:l,children:e.jsx(In,{str:a})}),e.jsx("section",{id:"lagrange",style:l,children:e.jsx(C,{str:a,method:"lagrange",points:[{x:-1,y:-3},{x:1,y:1},{x:2,y:3},{x:3,y:29}],allowCompare:!0})}),e.jsx("section",{id:"newton",style:l,children:e.jsx(C,{str:a,method:"newton",points:[{x:-1,y:-2},{x:1,y:0},{x:2,y:-2},{x:3,y:2}],showTable:!0,allowCompare:!0})}),e.jsx("section",{id:"hermite",style:l,children:e.jsx(C,{str:a,method:"hermite",points:[{x:-1,y:2},{x:1,y:4},{x:2,y:11}],derivatives:[3,-5,30],enableDerivatives:!0})}),e.jsx("section",{id:"spline",style:l,children:e.jsx(C,{str:a,method:"spline",points:[{x:0,y:.5},{x:1,y:.1},{x:1.5,y:2.5},{x:2,y:-1},{x:3,y:-.5},{x:4,y:0}],allowCompare:!0})})]}),e.jsx("footer",{className:"foot",children:"InterPlay · Numerical Analysis · Interpolation"})]})}export{Bn as default};
