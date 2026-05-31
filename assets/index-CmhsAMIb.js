import{d as Ce,b as ke,a as Te,R as Ne,r as g,j as t,e as Ee}from"./index-Uli9iIzW.js";import{k as Ie,S as Pe,C as Me,b as Fe}from"./SolutionsBlock-Dkimkm5R.js";import{A as Re,m as De}from"./proxy-DKDbZuBz.js";const We={appName:{en:"Matrix Factorization Academy",hu:"Mátrix Faktorizáció Akadémia"},tagline:{en:"Interactive course on LU & Cholesky factorization",hu:"Interaktív kurzus az LU- és Cholesky-faktorizációról"},nav_home:{en:"Home",hu:"Kezdőlap"},nav_lu:{en:"LU Factorization",hu:"LU-faktorizáció"},nav_cholesky:{en:"Cholesky",hu:"Cholesky"},nav_practice:{en:"Practice",hu:"Gyakorlás"},nav_solver:{en:"Solvers",hu:"Megoldók"},start_learning:{en:"Start learning",hu:"Kezdés"},open_solver:{en:"Open solver",hu:"Megoldó megnyitása"},watch_example:{en:"Watch worked example",hu:"Kidolgozott példa"},theme_light:{en:"Light",hu:"Világos"},theme_dark:{en:"Dark",hu:"Sötét"},lu_solver:{en:"LU Solver",hu:"LU-megoldó"},cholesky_solver:{en:"Cholesky Solver",hu:"Cholesky-megoldó"},matrix_size:{en:"Size",hu:"Méret"},your_matrix:{en:"Your matrix A",hu:"A te A mátrixod"},factorize:{en:"Factorize",hu:"Faktorizálás"},reset:{en:"Reset",hu:"Visszaállítás"},randomize:{en:"Random",hu:"Véletlen"},load_example:{en:"Load example",hu:"Példa betöltése"},verify:{en:"Verify (multiply back)",hu:"Ellenőrzés (visszaszorzás)"},verify_ok:{en:"Verified: the product equals A.",hu:"Ellenőrizve: a szorzat egyenlő A-val."},step:{en:"Step",hu:"Lépés"},of:{en:"of",hu:"/"},prev:{en:"Previous",hu:"Előző"},next:{en:"Next",hu:"Következő"},play:{en:"Play",hu:"Lejátszás"},pause:{en:"Pause",hu:"Szünet"},first:{en:"Start",hu:"Elejére"},last:{en:"End",hu:"Végére"},result:{en:"Result",hu:"Eredmény"},err_not_square:{en:"Matrix must be square.",hu:"A mátrixnak négyzetesnek kell lennie."},err_zero_pivot:{en:"Zero pivot encountered — LU does not exist without a row interchange (see Theorem 5.5).",hu:"Nulla pivot keletkezett — LU sorcsere nélkül nem létezik (lásd 5.5. tétel)."},err_not_symmetric:{en:"Matrix is not symmetric — Cholesky requires a symmetric matrix.",hu:"A mátrix nem szimmetrikus — a Cholesky szimmetrikus mátrixot igényel."},err_not_pd:{en:"Matrix is not positive definite — a non-positive value appeared under the square root.",hu:"A mátrix nem pozitív definit — nem-pozitív érték került a gyök alá."},err_parse:{en:"Could not read the matrix. Check the numbers.",hu:"Nem sikerült beolvasni a mátrixot. Ellenőrizd a számokat."},check:{en:"Check",hu:"Ellenőrzés"},show_hint:{en:"Hint",hu:"Segítség"},show_answer:{en:"Show answer",hu:"Megoldás"},correct:{en:"Correct! 🎉",hu:"Helyes! 🎉"},incorrect:{en:"Not quite — try again.",hu:"Nem egészen — próbáld újra."},your_answer_L:{en:"Your L",hu:"A te L-ed"},your_answer_U:{en:"Your U",hu:"A te U-d"},progress:{en:"Progress",hu:"Haladás"},badges:{en:"Badges",hu:"Jelvények"},reset_progress:{en:"Reset progress",hu:"Haladás törlése"},no_badges:{en:"No badges yet — start exploring!",hu:"Még nincs jelvény — fedezz fel!"},badge_unlocked:{en:"Badge unlocked!",hu:"Jelvény feloldva!"},language:{en:"Language",hu:"Nyelv"}};function He(e,a){return We[e][a]}function z(){const{lang:e}=Ce();return{t:n=>He(n,e),tb:n=>n[e],lang:e}}const Oe={},ne=e=>{let a;const i=new Set,n=(d,$)=>{const f=typeof d=="function"?d(a):d;if(!Object.is(f,a)){const h=a;a=$??(typeof f!="object"||f===null)?f:Object.assign({},a,f),i.forEach(x=>x(a,h))}},s=()=>a,u={setState:n,getState:s,getInitialState:()=>l,subscribe:d=>(i.add(d),()=>i.delete(d)),destroy:()=>{(Oe?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),i.clear()}},l=a=e(n,s,u);return u},Ge=e=>e?ne(e):ne;var B={exports:{}},V={},X={exports:{}},K={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie;function Be(){if(ie)return K;ie=1;var e=ke();function a($,f){return $===f&&($!==0||1/$===1/f)||$!==$&&f!==f}var i=typeof Object.is=="function"?Object.is:a,n=e.useState,s=e.useEffect,r=e.useLayoutEffect,o=e.useDebugValue;function m($,f){var h=f(),x=n({inst:{value:h,getSnapshot:f}}),b=x[0].inst,p=x[1];return r(function(){b.value=h,b.getSnapshot=f,u(b)&&p({inst:b})},[$,h,f]),s(function(){return u(b)&&p({inst:b}),$(function(){u(b)&&p({inst:b})})},[$]),o(h),h}function u($){var f=$.getSnapshot;$=$.value;try{var h=f();return!i($,h)}catch{return!0}}function l($,f){return f()}var d=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?l:m;return K.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:d,K}var ae;function Ve(){return ae||(ae=1,X.exports=Be()),X.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Xe(){if(re)return V;re=1;var e=ke(),a=Ve();function i(l,d){return l===d&&(l!==0||1/l===1/d)||l!==l&&d!==d}var n=typeof Object.is=="function"?Object.is:i,s=a.useSyncExternalStore,r=e.useRef,o=e.useEffect,m=e.useMemo,u=e.useDebugValue;return V.useSyncExternalStoreWithSelector=function(l,d,$,f,h){var x=r(null);if(x.current===null){var b={hasValue:!1,value:null};x.current=b}else b=x.current;x=m(function(){function _(v){if(!c){if(c=!0,k=v,v=f(v),h!==void 0&&b.hasValue){var T=b.value;if(h(T,v))return j=T}return j=v}if(T=j,n(k,v))return T;var R=f(v);return h!==void 0&&h(T,R)?(k=v,T):(k=v,j=R)}var c=!1,k,j,y=$===void 0?null:$;return[function(){return _(d())},y===null?void 0:function(){return _(y())}]},[d,$,f,h]);var p=s(l,x[0],x[1]);return o(function(){b.hasValue=!0,b.value=p},[p]),u(p),p},V}var se;function Ke(){return se||(se=1,B.exports=Xe()),B.exports}var Je=Ke();const Ye=Te(Je),ye={},{useDebugValue:Qe}=Ne,{useSyncExternalStoreWithSelector:Ze}=Ye;let oe=!1;const et=e=>e;function tt(e,a=et,i){(ye?"production":void 0)!=="production"&&i&&!oe&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),oe=!0);const n=Ze(e.subscribe,e.getState,e.getServerState||e.getInitialState,a,i);return Qe(n),n}const le=e=>{(ye?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const a=typeof e=="function"?Ge(e):e,i=(n,s)=>tt(a,n,s);return Object.assign(i,a),i},nt=e=>e?le(e):le,it={};function at(e,a){let i;try{i=e()}catch{return}return{getItem:s=>{var r;const o=u=>u===null?null:JSON.parse(u,void 0),m=(r=i.getItem(s))!=null?r:null;return m instanceof Promise?m.then(o):o(m)},setItem:(s,r)=>i.setItem(s,JSON.stringify(r,void 0)),removeItem:s=>i.removeItem(s)}}const F=e=>a=>{try{const i=e(a);return i instanceof Promise?i:{then(n){return F(n)(i)},catch(n){return this}}}catch(i){return{then(n){return this},catch(n){return F(n)(i)}}}},rt=(e,a)=>(i,n,s)=>{let r={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:p=>p,version:0,merge:(p,_)=>({..._,...p}),...a},o=!1;const m=new Set,u=new Set;let l;try{l=r.getStorage()}catch{}if(!l)return e((...p)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),i(...p)},n,s);const d=F(r.serialize),$=()=>{const p=r.partialize({...n()});let _;const c=d({state:p,version:r.version}).then(k=>l.setItem(r.name,k)).catch(k=>{_=k});if(_)throw _;return c},f=s.setState;s.setState=(p,_)=>{f(p,_),$()};const h=e((...p)=>{i(...p),$()},n,s);let x;const b=()=>{var p;if(!l)return;o=!1,m.forEach(c=>c(n()));const _=((p=r.onRehydrateStorage)==null?void 0:p.call(r,n()))||void 0;return F(l.getItem.bind(l))(r.name).then(c=>{if(c)return r.deserialize(c)}).then(c=>{if(c)if(typeof c.version=="number"&&c.version!==r.version){if(r.migrate)return r.migrate(c.state,c.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return c.state}).then(c=>{var k;return x=r.merge(c,(k=n())!=null?k:h),i(x,!0),$()}).then(()=>{_==null||_(x,void 0),o=!0,u.forEach(c=>c(x))}).catch(c=>{_==null||_(void 0,c)})};return s.persist={setOptions:p=>{r={...r,...p},p.getStorage&&(l=p.getStorage())},clearStorage:()=>{l==null||l.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>b(),hasHydrated:()=>o,onHydrate:p=>(m.add(p),()=>{m.delete(p)}),onFinishHydration:p=>(u.add(p),()=>{u.delete(p)})},b(),x||h},st=(e,a)=>(i,n,s)=>{let r={storage:at(()=>localStorage),partialize:b=>b,version:0,merge:(b,p)=>({...p,...b}),...a},o=!1;const m=new Set,u=new Set;let l=r.storage;if(!l)return e((...b)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),i(...b)},n,s);const d=()=>{const b=r.partialize({...n()});return l.setItem(r.name,{state:b,version:r.version})},$=s.setState;s.setState=(b,p)=>{$(b,p),d()};const f=e((...b)=>{i(...b),d()},n,s);s.getInitialState=()=>f;let h;const x=()=>{var b,p;if(!l)return;o=!1,m.forEach(c=>{var k;return c((k=n())!=null?k:f)});const _=((p=r.onRehydrateStorage)==null?void 0:p.call(r,(b=n())!=null?b:f))||void 0;return F(l.getItem.bind(l))(r.name).then(c=>{if(c)if(typeof c.version=="number"&&c.version!==r.version){if(r.migrate)return[!0,r.migrate(c.state,c.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,c.state];return[!1,void 0]}).then(c=>{var k;const[j,y]=c;if(h=r.merge(y,(k=n())!=null?k:f),i(h,!0),j)return d()}).then(()=>{_==null||_(h,void 0),h=n(),o=!0,u.forEach(c=>c(h))}).catch(c=>{_==null||_(void 0,c)})};return s.persist={setOptions:b=>{r={...r,...b},b.storage&&(l=b.storage)},clearStorage:()=>{l==null||l.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>x(),hasHydrated:()=>o,onHydrate:b=>(m.add(b),()=>{m.delete(b)}),onFinishHydration:b=>(u.add(b),()=>{u.delete(b)})},r.skipHydration||x(),h||f},ot=(e,a)=>"getStorage"in a||"serialize"in a||"deserialize"in a?((it?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),rt(e,a)):st(e,a),lt=ot,me={sectionsViewed:[],luSolved:0,choleskySolved:0,exercisesDone:[],usedLangs:[],badges:[]};function mt(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const P=nt()(lt((e,a)=>({lang:"en",theme:mt(),progress:me,setLang:i=>e(n=>({lang:i,progress:{...n.progress,usedLangs:n.progress.usedLangs.includes(i)?n.progress.usedLangs:[...n.progress.usedLangs,i]}})),toggleLang:()=>a().setLang(a().lang==="en"?"hu":"en"),setTheme:i=>e({theme:i}),toggleTheme:()=>e(i=>({theme:i.theme==="dark"?"light":"dark"})),markSectionViewed:i=>e(n=>n.progress.sectionsViewed.includes(i)?n:{progress:{...n.progress,sectionsViewed:[...n.progress.sectionsViewed,i]}}),recordSolve:i=>e(n=>({progress:{...n.progress,luSolved:n.progress.luSolved+(i==="lu"?1:0),choleskySolved:n.progress.choleskySolved+(i==="cholesky"?1:0)}})),recordExercise:i=>e(n=>n.progress.exercisesDone.includes(i)?n:{progress:{...n.progress,exercisesDone:[...n.progress.exercisesDone,i]}}),unlockBadge:i=>a().progress.badges.includes(i)?!1:(e(n=>({progress:{...n.progress,badges:[...n.progress.badges,i]}})),!0),resetProgress:()=>e({progress:me})}),{name:"mfa-store",partialize:e=>({lang:e.lang,theme:e.theme,progress:e.progress})}));function L({tex:e,display:a=!1,className:i}){const n=g.useMemo(()=>{try{return Ie.renderToString(e,{displayMode:a,throwOnError:!1,output:"htmlAndMathml"})}catch{return e}},[e,a]);return t.jsx("span",{className:i,style:a?{display:"block"}:void 0,dangerouslySetInnerHTML:{__html:n}})}function U({text:e}){const a=g.useMemo(()=>ht(e),[e]);return t.jsx(t.Fragment,{children:a})}function ht(e){const a=[],i=/\$([^$]+)\$/g;let n=0,s,r=0;for(;(s=i.exec(e))!==null;)s.index>n&&a.push(...he(e.slice(n,s.index),r++)),a.push(t.jsx(L,{tex:s[1]},`m${r++}`)),n=i.lastIndex;return n<e.length&&a.push(...he(e.slice(n),r++)),a}function he(e,a){const i=[],n=/\*([^*]+)\*/g;let s=0,r,o=0;for(;(r=n.exec(e))!==null;)r.index>s&&i.push(e.slice(s,r.index)),i.push(t.jsx("em",{children:r[1]},`e${a}-${o++}`)),s=n.lastIndex;return s<e.length&&i.push(e.slice(s)),i.length?i:[e]}const ce={text:null,definition:{en:"Definition",hu:"Definíció"},theorem:{en:"Theorem",hu:"Tétel"},proof:{en:"Proof",hu:"Bizonyítás"},example:{en:"Example",hu:"Példa"},algorithm:{en:"Algorithm",hu:"Algoritmus"},remark:{en:"Remark",hu:"Megjegyzés"}};function Q({section:e}){const{tb:a}=z(),i=P(n=>n.markSectionViewed);return g.useEffect(()=>{i(e.id)},[e.id,i]),t.jsxs("section",{className:"theory",children:[t.jsx("h1",{children:a(e.title)}),e.blocks.map(n=>t.jsx(ct,{block:n},n.id))]})}function ct({block:e}){var o;const{tb:a,lang:i}=z(),n=e.kind!=="text",s=((o=e.label)==null?void 0:o[i])??(ce[e.kind]?ce[e.kind][i]:void 0),r=t.jsx("div",{className:"block__body",children:e.body.map((m,u)=>m.math?t.jsx(L,{tex:m.math,display:!0},u):m.rich?t.jsx("p",{children:t.jsx(U,{text:a(m.rich)})},u):m.text?t.jsx("p",{children:a(m.text)},u):null)});return e.kind==="proof"?t.jsxs("details",{className:"callout callout--proof proof-details",children:[t.jsx("summary",{className:"callout__label",children:s}),r]}):t.jsxs("div",{className:n?`callout callout--${e.kind}`:"block",children:[s&&t.jsx("div",{className:"callout__label",children:s}),r]})}function w(e){return e.length}function E(e){return e.length===0?0:e[0].length}function Z(e){return w(e)>0&&w(e)===E(e)}function N(e){return e.map(a=>[...a])}function C(e,a=e){return Array.from({length:e},()=>Array.from({length:a},()=>0))}function ue(e){const a=C(e);for(let i=0;i<e;i++)a[i][i]=1;return a}function de(e){const a=w(e),i=E(e),n=C(i,a);for(let s=0;s<a;s++)for(let r=0;r<i;r++)n[r][s]=e[s][r];return n}function _e(e,a){const i=w(e),n=E(e),s=E(a),r=C(i,s);for(let o=0;o<i;o++)for(let m=0;m<s;m++){let u=0;for(let l=0;l<n;l++)u+=e[o][l]*a[l][m];r[o][m]=u}return r}function ut(e,a=1e-9){if(!Z(e))return!1;const i=w(e);for(let n=0;n<i;n++)for(let s=n+1;s<i;s++)if(Math.abs(e[n][s]-e[s][n])>a)return!1;return!0}function M(e,a,i=1e-6){if(w(e)!==w(a)||E(e)!==E(a))return!1;for(let n=0;n<w(e);n++)for(let s=0;s<E(e);s++)if(Math.abs(e[n][s]-a[n][s])>i)return!1;return!0}function S(e,a=4){const i=Math.pow(10,a),n=Math.round((e+Number.EPSILON)*i)/i;return Object.is(n,-0)?0:n}function ve(e,a=4){const i=S(e,a);return Number.isInteger(i),String(i)}function I(e,a=4){return`\\begin{pmatrix} ${e.map(n=>n.map(s=>ve(s,a)).join(" & ")).join(" \\\\ ")} \\end{pmatrix}`}function ee({matrix:e,states:a={},decimals:i=4,ariaLabel:n}){var s;return t.jsxs("div",{className:"matrix",role:"table","aria-label":n,children:[t.jsx("div",{className:"matrix__bracket matrix__bracket--l","aria-hidden":!0}),t.jsx("div",{className:"matrix__grid",style:{gridTemplateColumns:`repeat(${((s=e[0])==null?void 0:s.length)??0}, 1fr)`},children:e.map((r,o)=>r.map((m,u)=>{const l=a[`${o},${u}`];return t.jsx("div",{className:`matrix__cell${l?` is-${l}`:""}`,role:"cell",children:ve(m,i)},`${o}-${u}`)}))}),t.jsx("div",{className:"matrix__bracket matrix__bracket--r","aria-hidden":!0})]})}function te({count:e,index:a,onIndex:i,interval:n=1400}){const{t:s}=z(),[r,o]=g.useState(!1),m=g.useRef(null);g.useEffect(()=>{if(r){if(a>=e-1){o(!1);return}return m.current=window.setTimeout(()=>i(a+1),n),()=>{m.current&&window.clearTimeout(m.current)}}},[r,a,e,n,i]);const u=l=>{o(!1),i(Math.max(0,Math.min(e-1,l)))};return t.jsxs("div",{className:"player",children:[t.jsxs("div",{className:"player__btns",children:[t.jsx("button",{className:"btn sm ghost",onClick:()=>u(0),disabled:a===0,"aria-label":s("first"),children:"⏮"}),t.jsxs("button",{className:"btn sm",onClick:()=>u(a-1),disabled:a===0,children:["‹ ",s("prev")]}),t.jsx("button",{className:"btn sm primary",onClick:()=>o(l=>!l),disabled:a>=e-1&&!r,children:r?`⏸ ${s("pause")}`:`▶ ${s("play")}`}),t.jsxs("button",{className:"btn sm",onClick:()=>u(a+1),disabled:a>=e-1,children:[s("next")," ›"]}),t.jsx("button",{className:"btn sm ghost",onClick:()=>u(e-1),disabled:a>=e-1,"aria-label":s("last"),children:"⏭"})]}),t.jsxs("div",{className:"player__meta",children:[t.jsx("input",{type:"range",min:0,max:Math.max(0,e-1),value:a,onChange:l=>u(Number(l.target.value)),"aria-label":s("step")}),t.jsxs("span",{className:"player__count",children:[s("step")," ",a+1," ",s("of")," ",e]})]})]})}function H(e){if(!Z(e))return{ok:!1,error:"not-square",steps:[]};const a=w(e),i=N(e),n=[];n.push({descEn:"Start from the matrix A. We eliminate column by column.",descHu:"Induljunk az A mátrixból. Oszloponként haladva nullázunk ki.",tableau:N(i),highlight:[]});for(let o=0;o<a-1;o++){const m=i[o][o];if(Math.abs(m)<1e-12)return{ok:!1,error:"zero-pivot",failAt:o,steps:n};const u=[];for(let l=o+1;l<a;l++){const d=S(i[l][o]/m);i[l][o]=d;for(let $=o+1;$<a;$++)i[l][$]=S(i[l][$]-d*i[o][$]);u.push([l,o])}n.push({descEn:`Eliminate below pivot a${W(o+1)}${W(o+1)} = ${D(m)}. Each multiplier l = a/${D(m)} is stored in place of the zeroed entry.`,descHu:`A a${W(o+1)}${W(o+1)} = ${D(m)} pivot alatti elemek kinullázása. Minden l = a/${D(m)} szorzót a kinullázott elem helyére írunk.`,tableau:N(i),highlight:u,pivot:[o,o],expr:`l_{ik} = \\dfrac{a_{ik}}{a_{${o+1}${o+1}}}`})}Math.abs(i[a-1][a-1])<1e-12;const s=ue(a),r=ue(a).map(o=>o.map(()=>0));for(let o=0;o<a;o++)for(let m=0;m<a;m++)o>m?s[o][m]=i[o][m]:r[o][m]=i[o][m];return n.push({descEn:"Done. Entries on and above the diagonal form U; entries below the diagonal are the L multipliers (L has unit diagonal).",descHu:"Kész. A főátlóban és felette U elemei; a főátló alatt az L szorzói állnak (L főátlójában csupa egyes).",tableau:N(i),highlight:[]}),{ok:!0,steps:n,L:s,U:r}}function D(e){return Number.isInteger(e)?String(e):String(S(e))}const dt="₀₁₂₃₄₅₆₇₈₉";function W(e){return String(e).split("").map(a=>dt[Number(a)]??a).join("")}function O(e){if(!Z(e))return{ok:!1,error:"not-square",steps:[]};if(!ut(e))return{ok:!1,error:"not-symmetric",steps:[]};const a=w(e),i=N(e),n=C(a),s=[];for(let r=0;r<a;r++){let o=0;const m=[];for(let d=0;d<r;d++)o+=n[r][d]*n[r][d],m.push(`l_{${r+1}${d+1}}^2`);const u=S(i[r][r]-o);if(u<=0)return{ok:!1,error:"not-pd",failAt:[r,r],steps:s};n[r][r]=S(Math.sqrt(u));const l=m.length>0?`a_{${r+1}${r+1}} - (${m.join(" + ")})`:`a_{${r+1}${r+1}}`;s.push({descEn:`Diagonal entry of column ${r+1}: solve for l${q(r+1)}${q(r+1)} (positive root).`,descHu:`A ${r+1}. oszlop főátlóbeli eleme: l${q(r+1)}${q(r+1)} meghatározása (pozitív gyök).`,L:N(n),target:[r,r],equation:`l_{${r+1}${r+1}} = \\sqrt{${l}} = \\sqrt{${J(u)}} = ${J(n[r][r])}`,value:n[r][r]});for(let d=r+1;d<a;d++){let $=0;const f=[];for(let x=0;x<r;x++)$+=n[d][x]*n[r][x],f.push(`l_{${d+1}${x+1}} l_{${r+1}${x+1}}`);n[d][r]=S((i[d][r]-$)/n[r][r]);const h=f.length>0?`\\dfrac{a_{${d+1}${r+1}} - (${f.join(" + ")})}{l_{${r+1}${r+1}}}`:`\\dfrac{a_{${d+1}${r+1}}}{l_{${r+1}${r+1}}}`;s.push({descEn:`Below-diagonal entry l${q(d+1)}${q(r+1)} of column ${r+1}.`,descHu:`A ${r+1}. oszlop főátló alatti eleme: l${q(d+1)}${q(r+1)}.`,L:N(n),target:[d,r],equation:`l_{${d+1}${r+1}} = ${h} = ${J(n[d][r])}`,value:n[d][r]})}}return{ok:!0,steps:s,L:n}}function J(e){return Number.isInteger(e)?String(e):String(S(e))}const ft="₀₁₂₃₄₅₆₇₈₉";function q(e){return String(e).split("").map(a=>ft[Number(a)]??a).join("")}const $t=[[1,-2,-2,-2],[2,-1,2,4],[-1,2,3,-4],[-2,1,4,-2]],pt=[[4,-8,4],[-8,17,-11],[4,-11,22]];function je({kind:e}){const{t:a,lang:i}=z(),[n,s]=g.useState(0),r=g.useMemo(()=>H($t),[]),o=g.useMemo(()=>O(pt),[]);if(e==="lu"&&r.ok){const m=r.steps[n],u={};m.pivot&&(u[`${m.pivot[0]},${m.pivot[1]}`]="pivot");for(const[l,d]of m.highlight)u[`${l},${d}`]="highlight";return t.jsx(fe,{title:i==="en"?"Example 5.3 — LU (4×4)":"5.3. példa — LU (4×4)",count:r.steps.length,step:n,setStep:s,desc:i==="en"?m.descEn:m.descHu,expr:m.expr,tableau:m.tableau,states:u,t:a})}if(e==="cholesky"&&o.ok){const m=o.steps[n],u={};u[`${m.target[0]},${m.target[1]}`]="active";for(let l=0;l<n;l++){const d=o.steps[l].target;d[0]===m.target[0]&&d[1]===m.target[1]||(u[`${d[0]},${d[1]}`]="done")}return t.jsx(fe,{title:i==="en"?"Example 5.7 — Cholesky (3×3)":"5.7. példa — Cholesky (3×3)",count:o.steps.length,step:n,setStep:s,desc:i==="en"?m.descEn:m.descHu,expr:m.equation,tableau:m.L,states:u,t:a})}return null}function fe({title:e,count:a,step:i,setStep:n,desc:s,expr:r,tableau:o,states:m,t:u}){return t.jsxs("div",{className:"solver card",children:[t.jsx("div",{className:"solver__head",children:t.jsx("h3",{children:e})}),t.jsx(te,{count:a,index:i,onIndex:n,interval:1700}),t.jsx(Re,{mode:"wait",children:t.jsxs(De.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.3},children:[t.jsx("p",{className:"solver__desc",children:s}),r&&t.jsx("div",{className:"solver__expr",children:t.jsx(L,{tex:r,display:!0})})]},i)}),t.jsx("div",{className:"solver__tableau",children:t.jsx(ee,{matrix:o,states:m,ariaLabel:u("result")})})]})}function G({matrix:e,onChange:a,readonlyCell:i,label:n}){var m;const s=e.length,r=((m=e[0])==null?void 0:m.length)??0,o=(u,l,d)=>{const $=e.map(h=>[...h]),f=d.trim()===""||d.trim()==="-"?0:Number(d);$[u][l]=Number.isNaN(f)?0:f,a($)};return t.jsxs("div",{className:"matrix matrix--input",role:"group","aria-label":n,children:[t.jsx("div",{className:"matrix__bracket matrix__bracket--l","aria-hidden":!0}),t.jsx("div",{className:"matrix__grid",style:{gridTemplateColumns:`repeat(${r}, 1fr)`},children:e.map((u,l)=>u.map((d,$)=>{const f=(i==null?void 0:i(l,$))??!1;return t.jsx("input",{className:`matrix__input${f?" is-locked":""}`,inputMode:"decimal","aria-label":`row ${l+1} column ${$+1}`,value:Number.isFinite(d)?String(d):"",readOnly:f,tabIndex:f?-1:0,onChange:h=>o(l,$,h.target.value)},`${l}-${$}-${s}`)}))}),t.jsx("div",{className:"matrix__bracket matrix__bracket--r","aria-hidden":!0})]})}const $e=[[1,-2,-2,-2],[2,-1,2,4],[-1,2,3,-4],[-2,1,4,-2]];function pe(e){return C(e)}function ze(){const{t:e,lang:a}=z(),i=P(c=>c.recordSolve),[n,s]=g.useState(4),[r,o]=g.useState($e),[m,u]=g.useState(null),[l,d]=g.useState(0),[$,f]=g.useState(null),h=g.useMemo(()=>m?H(m):null,[m]),x=()=>{const c=H(r);u(r),d(0),f(null),c.ok&&i("lu")},b=c=>{s(c),o(k=>{const j=pe(c);for(let y=0;y<Math.min(c,k.length);y++)for(let v=0;v<Math.min(c,k[0].length);v++)j[y][v]=k[y][v];return j}),u(null)},p={};if(h!=null&&h.ok){const c=h.steps[l];c.pivot&&(p[`${c.pivot[0]},${c.pivot[1]}`]="pivot");for(const[k,j]of c.highlight)p[`${k},${j}`]="highlight"}const _=()=>{!(h!=null&&h.ok)||!h.L||!h.U||f(M(_e(h.L,h.U),m))};return t.jsxs("div",{className:"solver card",children:[t.jsxs("div",{className:"solver__head",children:[t.jsx("h3",{children:e("lu_solver")}),t.jsxs("div",{className:"solver__controls",children:[t.jsxs("label",{className:"field",children:[e("matrix_size"),t.jsx("select",{value:n,onChange:c=>b(Number(c.target.value)),children:[2,3,4,5].map(c=>t.jsxs("option",{value:c,children:[c,"×",c]},c))})]}),t.jsx("button",{className:"btn sm",onClick:()=>{o($e),s(4),u(null)},children:e("load_example")}),t.jsx("button",{className:"btn sm",onClick:()=>{o(pe(n)),u(null)},children:e("reset")})]})]}),t.jsxs("div",{className:"solver__io",children:[t.jsxs("div",{children:[t.jsx("div",{className:"solver__label",children:e("your_matrix")}),t.jsx(G,{matrix:r,onChange:o,label:e("your_matrix")})]}),t.jsxs("button",{className:"btn primary",onClick:x,children:[e("factorize")," →"]})]}),h&&!h.ok&&t.jsxs("p",{className:"solver__error",children:[h.error==="not-square"&&e("err_not_square"),h.error==="zero-pivot"&&e("err_zero_pivot")]}),(h==null?void 0:h.ok)&&t.jsxs("div",{className:"solver__out",children:[t.jsx(te,{count:h.steps.length,index:l,onIndex:d}),t.jsx("p",{className:"solver__desc",children:a==="en"?h.steps[l].descEn:h.steps[l].descHu}),h.steps[l].expr&&t.jsx("div",{className:"solver__expr",children:t.jsx(L,{tex:h.steps[l].expr,display:!0})}),t.jsx("div",{className:"solver__tableau",children:t.jsx(ee,{matrix:h.steps[l].tableau,states:p,ariaLabel:"tableau"})}),l===h.steps.length-1&&t.jsxs("div",{className:"solver__final",children:[t.jsxs("div",{className:"solver__factor",children:[t.jsx("span",{children:"L ="}),t.jsx(L,{tex:I(h.L)})]}),t.jsxs("div",{className:"solver__factor",children:[t.jsx("span",{children:"U ="}),t.jsx(L,{tex:I(h.U)})]}),t.jsx("button",{className:"btn sm",onClick:_,children:e("verify")}),$===!0&&t.jsxs("span",{className:"solver__ok",children:["✓ ",e("verify_ok")]})]})]})]})}const bt={lu:[{term:{en:"LU factorization (Doolittle)",hu:"LU-faktorizáció (Doolittle)"},def:{en:"$\\mathbf{A}=\\mathbf{L}\\mathbf{U}$ with $\\mathbf{L}$ lower triangular (1's on the diagonal) and $\\mathbf{U}$ upper triangular. It records Gaussian elimination once so the same $\\mathbf{A}$ can be reused for many right-hand sides.",hu:"$\\mathbf{A}=\\mathbf{L}\\mathbf{U}$, ahol $\\mathbf{L}$ alsó háromszög (a főátlóban 1-esek), $\\mathbf{U}$ felső háromszög. Egyszer rögzíti a Gauss-eliminációt, így ugyanaz az $\\mathbf{A}$ sok jobb oldalhoz újrahasználható."}},{term:{en:"Uniqueness (Thm 5.1)",hu:"Egyértelműség (5.1. tétel)"},def:{en:"For a nonsingular $\\mathbf{A}$, if an LU factorization exists it is unique. (From $\\mathbf{L}_2^{-1}\\mathbf{L}_1=\\mathbf{U}_2\\mathbf{U}_1^{-1}$ being both lower and upper triangular, hence the identity.)",hu:"Nemszinguláris $\\mathbf{A}$-ra, ha létezik LU-faktorizáció, az egyértelmű. (Mert $\\mathbf{L}_2^{-1}\\mathbf{L}_1=\\mathbf{U}_2\\mathbf{U}_1^{-1}$ egyszerre alsó és felső háromszög, tehát az egységmátrix.)"}},{term:{en:"Construction from multipliers",hu:"Felépítés a szorzótényezőkből"},def:{en:"$\\mathbf{U}$ is the upper-triangular result of Gaussian elimination; $\\mathbf{L}$ holds the multipliers $l_{ik}=a_{ik}^{(k-1)}/a_{kk}^{(k-1)}$ below its diagonal. The factors are stored in place of the entries they zero out.",hu:"$\\mathbf{U}$ a Gauss-elimináció felső háromszög eredménye; $\\mathbf{L}$ a főátló alatt a szorzótényezőket tartalmazza, $l_{ik}=a_{ik}^{(k-1)}/a_{kk}^{(k-1)}$. A tényezőket az általuk nullázott elemek helyére tároljuk."}},{term:{en:"Existence (Thm 5.2)",hu:"Létezés (5.2. tétel)"},def:{en:"If Gaussian elimination can be performed on $\\mathbf{A}$ without row swaps, then $\\mathbf{A}=\\mathbf{L}\\mathbf{U}$ exists, with $\\mathbf{U}$ the elimination result and $\\mathbf{L}$ built from the multipliers.",hu:"Ha az $\\mathbf{A}$-n a Gauss-elimináció sorcsere nélkül elvégezhető, akkor $\\mathbf{A}=\\mathbf{L}\\mathbf{U}$ létezik, $\\mathbf{U}$ az elimináció eredménye, $\\mathbf{L}$ a szorzótényezőkből épül."}},{term:{en:"Principal minors criterion (Thm 5.4)",hu:"Főminor-kritérium (5.4. tétel)"},def:{en:"If all leading principal minors of $\\mathbf{A}$ are nonzero, elimination runs without row changes, so the LU factorization exists.",hu:"Ha $\\mathbf{A}$ minden bal felső főminora nemnulla, az elimináció sorcsere nélkül lefut, így az LU-faktorizáció létezik."}},{term:{en:"PA = LU (Thm 5.5)",hu:"PA = LU (5.5. tétel)"},def:{en:"Every invertible $\\mathbf{A}$ has a factorization $\\mathbf{P}\\mathbf{A}=\\mathbf{L}\\mathbf{U}$ for some permutation matrix $\\mathbf{P}$ — the row swaps of partial pivoting collected into $\\mathbf{P}$.",hu:"Minden invertálható $\\mathbf{A}$-ra van $\\mathbf{P}\\mathbf{A}=\\mathbf{L}\\mathbf{U}$ faktorizáció valamely $\\mathbf{P}$ permutációs mátrixszal — a részleges pivot sorcseréi $\\mathbf{P}$-be gyűjtve."}},{term:{en:"Solving via $\\mathbf{L}\\mathbf{y}=\\mathbf{b}$, $\\mathbf{U}\\mathbf{x}=\\mathbf{y}$",hu:"Megoldás $\\mathbf{L}\\mathbf{y}=\\mathbf{b}$, $\\mathbf{U}\\mathbf{x}=\\mathbf{y}$ révén"},def:{en:"Once $\\mathbf{A}=\\mathbf{L}\\mathbf{U}$, solve $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ by forward substitution $\\mathbf{L}\\mathbf{y}=\\mathbf{b}$ then back substitution $\\mathbf{U}\\mathbf{x}=\\mathbf{y}$ — each only $\\mathcal{O}(n^2)$, so extra right-hand sides are cheap.",hu:"Ha $\\mathbf{A}=\\mathbf{L}\\mathbf{U}$, az $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$-t előrehelyettesítéssel $\\mathbf{L}\\mathbf{y}=\\mathbf{b}$, majd visszahelyettesítéssel $\\mathbf{U}\\mathbf{x}=\\mathbf{y}$ oldjuk meg — mindkettő csak $\\mathcal{O}(n^2)$, így a további jobb oldalak olcsók."}}],cholesky:[{term:{en:"Cholesky factorization",hu:"Cholesky-faktorizáció"},def:{en:"$\\mathbf{A}=\\mathbf{L}\\mathbf{L}^T$ with $\\mathbf{L}$ lower triangular and positive diagonal — the symmetric, square-root analogue of LU for symmetric positive definite matrices.",hu:"$\\mathbf{A}=\\mathbf{L}\\mathbf{L}^T$, ahol $\\mathbf{L}$ alsó háromszög, pozitív főátlóval — az LU szimmetrikus, gyökvonásos megfelelője szimmetrikus pozitív definit mátrixokra."}},{term:{en:"Existence for SPD (Thm 5.6)",hu:"Létezés SPD-re (5.6. tétel)"},def:{en:"If $\\mathbf{A}$ is symmetric positive definite, the Cholesky factorization $\\mathbf{A}=\\mathbf{L}\\mathbf{L}^T$ exists with a real $\\mathbf{L}$ whose diagonal can be chosen positive. Proved by induction on the leading block.",hu:"Ha $\\mathbf{A}$ szimmetrikus pozitív definit, akkor az $\\mathbf{A}=\\mathbf{L}\\mathbf{L}^T$ Cholesky-faktorizáció létezik valós $\\mathbf{L}$-lel, amelynek főátlója pozitívnak választható. A bal felső blokkra vett indukcióval bizonyítható."}},{term:{en:"Cholesky formulas (Alg. 5.8)",hu:"Cholesky-képletek (5.8. algoritmus)"},def:{en:"$l_{jj}=\\sqrt{a_{jj}-\\sum_{k<j}l_{jk}^2}$ and $l_{ij}=\\big(a_{ij}-\\sum_{k<j}l_{ik}l_{jk}\\big)/l_{jj}$ for $i>j$ — compute column by column. A negative radicand signals $\\mathbf{A}$ is not positive definite.",hu:"$l_{jj}=\\sqrt{a_{jj}-\\sum_{k<j}l_{jk}^2}$ és $l_{ij}=\\big(a_{ij}-\\sum_{k<j}l_{ik}l_{jk}\\big)/l_{jj}$ $i>j$-re — oszloponként számolva. Negatív gyökjel alatti érték azt jelzi, hogy $\\mathbf{A}$ nem pozitív definit."}},{term:{en:"Cost $\\sim n^3/6$ (half of LU)",hu:"Költség $\\sim n^3/6$ (az LU fele)"},def:{en:"Cholesky needs about $n^3/6$ multiplications/divisions plus $n$ square roots — roughly half the work of LU ($n^3/3$), by exploiting symmetry.",hu:"A Cholesky kb. $n^3/6$ szorzást/osztást és $n$ gyökvonást igényel — nagyjából feleannyi munka, mint az LU ($n^3/3$), a szimmetria kihasználásával."}},{term:{en:"Definiteness test",hu:"Definitségi teszt"},def:{en:"Cholesky doubles as a positive-definiteness check: it succeeds (all radicands positive) iff $\\mathbf{A}$ is symmetric positive definite, and fails otherwise — cheaper than computing eigenvalues or all minors.",hu:"A Cholesky egyúttal pozitív-definitség teszt: pontosan akkor sikerül (minden gyökjel alatti érték pozitív), ha $\\mathbf{A}$ szimmetrikus pozitív definit, különben elbukik — olcsóbb, mint a sajátértékek vagy az összes minor kiszámítása."}},{term:{en:"Stability — no pivoting needed",hu:"Stabilitás — nincs szükség pivotálásra"},def:{en:"For SPD matrices Cholesky is numerically stable without any pivoting, so it is the method of choice for normal equations, covariance matrices and many PDE systems.",hu:"SPD mátrixokra a Cholesky pivotálás nélkül is numerikusan stabil, ezért ez a választott módszer a normálegyenletekhez, kovarianciamátrixokhoz és sok PDE-rendszerhez."}}]},gt={lu:[{q:"What are the requirements for the matrices $L$ and $U$ in the factorization $A = LU$ (Doolittle's method)?",a:"$L$ is lower triangular with 1s on the main diagonal, and $U$ is upper triangular."},{q:"What is the alternative name for $LU$ factorization mentioned in the text?",a:"Doolittle's method"},{q:"Under what two conditions is the $LU$ factorization of a square matrix $A$ guaranteed to be unique?",a:"$A$ must be nonsingular and the factorization must exist."},{q:"In the proof of uniqueness for $A = L_1 U_1 = L_2 U_2$, what is the result of the matrix product $L_2^{-1} L_1$?",a:"The identity matrix $I$."},{q:"In Gaussian elimination, how is the multiplier $l_{i1}$ defined for the first column ($i = 2, 3, \\dots, n$)?",a:"$l_{i1} = \\frac{a_{i1}}{a_{11}}$"},{q:"What matrix $A^{(1)}$ is produced by the operation $L_1 A$ in the context of Gaussian elimination?",a:"The matrix obtained after performing the first elimination step."},{q:"Describe the structure of the lower triangular matrix $L_1$ used to perform the first step of Gaussian elimination.",a:"It has 1s on the diagonal and the values $-l_{i1}$ in the first column below the diagonal."},{q:"How is the matrix $L$ constructed from the sequence of elimination matrices $L_1, L_2, \\dots, L_{n-1}$?",a:"$L = (L_{n-1} L_{n-2} \\dots L_1)^{-1}$"},{q:"What values occupy the sub-diagonal positions $(i, j)$ in the final matrix $L$ of an $LU$ factorization?",a:"The multipliers $l_{ij}$ used during the Gaussian elimination process."},{q:"What characterizes the matrix $U$ in the $LU$ factorization relative to Gaussian elimination?",a:"It is the upper triangular matrix $A^{(n-1)}$ resulting from the completion of Gaussian elimination."},{q:"According to Theorem 5.2, what is the prerequisite for the existence of an $LU$ factorization?",a:"Gaussian elimination must be performable on the matrix $A$."},{q:"Theorem 5.4: If all _____ of $A$ are nonzero, then $LU$ factorization exists without row changes.",a:"principal minors"},{q:"What type of matrix $P$ exists for any invertible matrix $A$ such that $PA = LU$ exists?",a:"A permutation matrix"},{q:"When solving $Ax = b$ via $LU$ factorization, what is the first triangular system to be solved?",a:"$Ly = b$"},{q:"In the $LU$ solution process for $Ax = b$, what is the second triangular system to be solved?",a:"$Ux = y$"},{q:"What algorithm is used to solve the lower triangular system $Ly = b$?",a:"Forward substitution"},{q:"What algorithm is used to solve the upper triangular system $Ux = y$?",a:"Backward substitution"},{q:"Approximately how many multiplications/divisions are required to solve the two triangular systems $Ly = b$ and $Ux = y$?",a:"$n^2 + \\mathcal{O}(n)$"},{q:"What is the computational complexity (in multiplications/divisions) for computing the $LU$ factorization itself?",a:"$\\frac{n^3}{3} + \\mathcal{O}(n^2)$"},{q:"Why is $LU$ factorization particularly efficient for solving multiple systems $Ax = b_i$ with different $b_i$?",a:"The factorization $A = LU$ is computed only once, and subsequent solutions only require $O(n^2)$ substitution steps."},{q:"In the shorthand method for $LU$ decomposition, where are the factors $l_{ij}$ written during calculation?",a:"In the positions of the elements that are being eliminated (changed to 0)."},{q:"If a matrix $A$ has a principal minor equal to zero, what might be necessary to find an $LU$-like factorization?",a:"Row changes or the introduction of a permutation matrix $P$."},{q:"Term: Doolittle's Method",a:"Definition: An $LU$ factorization where the matrix $L$ is required to have unit diagonal entries."},{q:"In the provided example, if $l_{21}=2, l_{31}=-1, l_{41}=-2$, what does the first column of $L$ (excluding the diagonal) look like?",a:"It contains the values $2, -1,$ and $-2$."},{q:"How does the nonsingularity of $A$ affect the matrices $L$ and $U$ in the factorization $A=LU$?",a:"It ensures that $L$, $U$, and their components are also nonsingular."},{q:"What is the result of multiplying a lower triangular matrix by another lower triangular matrix?",a:"A lower triangular matrix."},{q:"What is the result of multiplying an upper triangular matrix by another upper triangular matrix?",a:"An upper triangular matrix."},{q:"If a matrix is both lower triangular with 1s on the diagonal and upper triangular, it must be the _____.",a:"identity matrix $I$"},{q:"The formula $l_{i2} = \\frac{a_{i2}^{(1)}}{a_{22}^{(1)}}$ defines multipliers for which column of $L$?",a:"The second column."},{q:"True or False: Gaussian elimination must be performable without row swaps for a basic $LU$ factorization to exist.",a:"True."},{q:"Concept: $A = LU$",a:"Application: Efficiently solving linear systems by decomposing the problem into two simpler triangular problems."},{q:"In Example 5.3, the final entry $u_{44}$ of the matrix $U$ is calculated as _____.",a:"$38$"},{q:"What is the defining characteristic of the main diagonal of $L$ in Doolittle's method?",a:"Every entry is exactly 1."},{q:"If $\\det(A) \\ne 0$, then $\\det(L)$ and $\\det(U)$ must both be _____.",a:"nonzero"},{q:"The matrix $L_2$ has multipliers $-l_{i2}$ located in which column?",a:"The second column."},{q:"In the expression $L = L_1^{-1} L_2^{-1} \\dots L_{n-1}^{-1}$, the multipliers $l_{ij}$ in $L$ appear with what sign relative to the elimination matrices $L_k$?",a:"With the opposite sign (positive $l_{ij}$ instead of negative $-l_{ij}$)."},{q:"What is the value of $\\det(L)$ in an $LU$ factorization?",a:"$1$ (because it is triangular with 1s on the diagonal)."},{q:"According to Theorem 5.5, what property of $A$ allows for a $PA=LU$ factorization?",a:"$A$ must be an invertible square matrix."},{q:"How many elimination matrices $L_k$ are defined for an $n \\times n$ matrix?",a:"$n-1$"},{q:"If $L_2^{-1} L_1 = U_2 U_1^{-1}$, and the left side is lower triangular while the right side is upper triangular, what specific form must both sides take?",a:"Diagonal matrix."},{q:"When a matrix has infinitely many $LU$ factorizations, what is typically true about its determinant?",a:"The determinant is zero (the matrix is singular)."},{q:"In $LU$ decomposition, the matrix $U$ is produced by applying a sequence of _____ transformations to $A$.",a:"lower triangular (or Gaussian elimination)"},{q:"To solve $Ly = b$ for $y_i$, you use the previously calculated values of $y_1, \\dots, y_{i-1}$. What is this process called?",a:"Forward substitution."},{q:"To solve $Ux = y$ for $x_i$, you start from $x_n$ and work towards $x_1$. What is this process called?",a:"Backward substitution."},{q:"In the matrix equation $A^{(1)} = L_1 A$, what does $L_1$ represent in terms of elementary row operations?",a:"Subtracting multiples of the first row from subsequent rows to create zeros in the first column."},{q:"What is the relation between the principal minors of $A^{(k-1)}$ and $A^{(k)}$ during Gaussian elimination?",a:"They are equal."},{q:"If the Gaussian elimination involves row changes, which theorem describes the resulting factorization?",a:"Theorem 5.5 (existence of $PA=LU$)."},{q:"Given $A = LU$, what is the formula for $\\det(A)$ in terms of the entries of $U$?",a:"The product of the diagonal entries of $U$."},{q:"In the product $L_1 L_2 \\dots L_{n-1}$, why is it 'easy' to compute the result compared to arbitrary matrices?",a:"Because each $L_k$ only modifies a specific column, and their products simply combine those columns."},{q:"Is it possible for a singular matrix to have an $LU$ factorization?",a:"Yes, but it is not unique."},{q:"If $A$ is $4 \\times 4$, how many multipliers $l_{ij}$ are stored in the matrix $L$ below the diagonal?",a:"$6$ ($3$ in col 1, $2$ in col 2, $1$ in col 3)."}],cholesky:[{q:"What is the specific matrix product form of a Cholesky factorization?",a:"$\\mathbf{A} = \\mathbf{LL}^T$"},{q:"In the Cholesky factorization $\\mathbf{A} = \\mathbf{LL}^T$, what type of matrix must $\\mathbf{L}$ be?",a:"A lower triangular matrix."},{q:"According to the definition, the matrix $\\mathbf{A}$ in a Cholesky factorization must satisfy which property regarding its shape/balance?",a:"It must be a symmetric matrix."},{q:"What is a sufficient condition for the existence of a real Cholesky factorization $\\mathbf{A} = \\mathbf{LL}^T$?",a:"$\\mathbf{A}$ is symmetric and positive definite."},{q:"If the Cholesky factorization exists for a matrix $\\mathbf{A}$, is the result guaranteed to be unique?",a:"No, it is not unique."},{q:"If $\\mathbf{A}$ is positive definite, what choice can be made regarding the main diagonal elements of $\\mathbf{L}$?",a:"They can be chosen as positive elements."},{q:"What method is used to prove the existence theorem for the Cholesky factorization of an $n \\times n$ matrix?",a:"Mathematical induction with respect to the dimension of the matrix."},{q:"In the induction proof, for which matrix size is the existence of the factorization considered obvious?",a:"$1 \\times 1$ matrices."},{q:"When partitioning an $n \\times n$ matrix $\\mathbf{A}$ for the induction proof, what is the dimension of the top-left submatrix $\\mathbf{X}$?",a:"$(n-1) \\times (n-1)$"},{q:"In the partitioning $\\mathbf{A} = \\begin{pmatrix} \\mathbf{X} & \\mathbf{y} \\\\ \\mathbf{y}^T & a_{nn} \\end{pmatrix}$, why must $\\mathbf{X}$ be positive definite if $\\mathbf{A}$ is positive definite?",a:"Because all principal minors of a positive definite matrix are positive."},{q:"In the partitioned product form of the proof, what relation defines the top-left submatrix $\\mathbf{X}$?",a:"$\\mathbf{X} = \\tilde{\\mathbf{L}}\\tilde{\\mathbf{L}}^T$"},{q:"In the proof, what equation relates the lower triangular submatrix $\\tilde{\\mathbf{L}}$, the vector $\\mathbf{c}$, and the vector $\\mathbf{y}$?",a:"$\\tilde{\\mathbf{L}}\\mathbf{c} = \\mathbf{y}$"},{q:"What scalar equation is used to solve for the bottom-right element $d$ in the proof?",a:"$\\mathbf{c}^T\\mathbf{c} + d^2 = a_{nn}$"},{q:"Why does the equation $\\tilde{\\mathbf{L}}\\mathbf{c} = \\mathbf{y}$ have a unique solution for $\\mathbf{c}$ in the induction step?",a:"Because $\\tilde{\\mathbf{L}}$ is nonsingular (its diagonal elements are positive)."},{q:"What formula relates the determinant of $\\mathbf{A}$ to the determinant of $\\tilde{\\mathbf{L}}$ and $d$ in the induction proof?",a:"$\\det(\\mathbf{A}) = \\det(\\tilde{\\mathbf{L}})^2 d^2$"},{q:"Under what condition is the scalar $d$ in the factorization proof guaranteed to be a positive real number?",a:"When $d^2 = a_{nn} - \\mathbf{c}^T\\mathbf{c} > 0$."},{q:"In the algorithm, how is the first element $l_{11}$ calculated from the input matrix $\\mathbf{A}$?",a:"$l_{11} = \\sqrt{a_{11}}$"},{q:"What is the formula for calculating the elements $l_{i1}$ in the first column below the diagonal?",a:"$l_{i1} = a_{i1}/l_{11}$"},{q:"Formula: General calculation for the diagonal element $l_{jj}$ (for $j > 1$)",a:"$l_{jj} = \\sqrt{a_{jj} - \\sum_{k=1}^{j-1} l_{jk}^2}$"},{q:"Formula: General calculation for the off-diagonal element $l_{ij}$ (where $i > j$)",a:"$l_{ij} = (a_{ij} - \\sum_{k=1}^{j-1} l_{ik}l_{jk})/l_{jj}$"},{q:"What is the formula for the final element $l_{nn}$ of the matrix $\\mathbf{L}$?",a:"$l_{nn} = \\sqrt{a_{nn} - \\sum_{k=1}^{n-1} l_{nk}^2}$"},{q:"What is the leading term of the operation count for multiplications and divisions in the Cholesky algorithm?",a:"$n^3/6$"},{q:"What is the leading term of the operation count for additions and subtractions in the Cholesky algorithm?",a:"$n^3/6$"},{q:"Exactly how many square root operations are performed in a Cholesky factorization of an $n \\times n$ matrix?",a:"$n$"},{q:"In the Cholesky algorithm, which indices does the outer loop for the column variable $j$ span?",a:"$j = 2, \\ldots, n-1$"},{q:"In the example matrix where $a_{11} = 4$, $a_{21} = -8$, and $a_{31} = 4$, what is the first column of $\\mathbf{L}$?",a:"The column entries are $2$, $-4$, and $2$."},{q:"In the $3 \\times 3$ example, if $l_{21} = -4$ and $a_{22} = 17$, what equation is used to find $l_{22}$?",a:"$17 = (-4)^2 + l_{22}^2$"},{q:"For the example matrix, given $l_{11}=2, l_{21}=-4, l_{31}=2$, and $a_{32}=-11$, what is the value of $l_{32}$?",a:"$l_{32} = -3$"},{q:"In the example matrix, how is $l_{33}$ determined if $a_{33}=22, l_{31}=2$, and $l_{32}=-3$?",a:"$22 = 2^2 + (-3)^2 + l_{33}^2$"},{q:"What is the resulting $\\mathbf{L}$ matrix for the example $\\mathbf{A} = \\begin{pmatrix} 4 & -8 & 4 \\\\ -8 & 17 & -11 \\\\ 4 & -11 & 22 \\end{pmatrix}$?",a:"$\\begin{pmatrix} 2 & 0 & 0 \\\\ -4 & 1 & 0 \\\\ 2 & -3 & 3 \\end{pmatrix}$"},{q:"Why does the matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ have no Cholesky factorization?",a:"It is not positive definite (the first diagonal element is 0, implying $l_{11} = 0$, which prevents division)."},{q:"If the sum of squares of previous elements in a row exceeds the diagonal element $a_{jj}$, what happens to the diagonal element $l_{jj}$?",a:"It would become an imaginary number."},{q:"What property of $\\mathbf{A}$ ensures that $d^2 = a_{nn} - \\mathbf{c}^T\\mathbf{c}$ will always be strictly positive in the real case?",a:"Positive definiteness of $\\mathbf{A}$."},{q:"How does the complexity of Cholesky factorization compare to LU decomposition generally?",a:"It is approximately half the work ($n^3/6$ vs $n^3/3$ for multiplications)."},{q:"The term 'lower triangular' in Hungarian is ____.",a:"alsó háromszögmátrix (or alulról trianguláris)"},{q:"The term 'positive definite' in Hungarian is ____.",a:"pozitív definit"},{q:"In the algorithm, the inner loop for $i$ calculates elements from $j+1$ to $n$. What does this correspond to in the matrix $\\mathbf{L}$?",a:"The elements below the diagonal in column $j$."},{q:"What is the specific multiplication count given in Algorithm 5.8 including lower-order terms?",a:"$n^3/6 + n^2/2 - 2n/3$"},{q:"What is the specific addition count given in Algorithm 5.8 including lower-order terms?",a:"$n^3/6 - n/6$"},{q:"Concept: Principal Minor",a:"Definition: The determinant of a square submatrix obtained by deleting rows and columns with the same indices. All must be positive for positive definiteness."},{q:"In the inductive step, if $\\tilde{\\mathbf{L}}$ is the $(n-1) \\times (n-1)$ Cholesky factor, what is $\\det(\\tilde{\\mathbf{L}})$?",a:"The product of its diagonal elements."},{q:"What is the output of the Cholesky factorization algorithm?",a:"The elements $l_{ij}$ for $i = 1, \\ldots, n$ and $j = 1, \\ldots, i$."},{q:"If a matrix is symmetric but not positive definite, can a Cholesky-like factorization $LL^T$ exist?",a:"It might exist, but the diagonal elements of $L$ may not be real or positive."},{q:"If $a_{11} = 16$ in a matrix, what is $l_{11}$ in its Cholesky factorization?",a:"$4$"},{q:"If $a_{11} = 1$ and $a_{21} = -1$, what are $l_{11}$ and $l_{21}$?",a:"$l_{11} = 1$ and $l_{21} = -1$."},{q:"True or False: The algorithm calculates $\\mathbf{L}$ row by row or column by column.",a:"True (the specific implementation provided proceeds column by column)."},{q:"In the proof, $\\mathbf{c}$ is an $(n-1)$-dimensional _____ vector.",a:"column"},{q:"The induction hypothesis assumes the theorem holds for matrices of what size?",a:"$(n-1) \\times (n-1)$"},{q:"Which theorem is typically used to state that the leading submatrix $X$ of a positive definite matrix is also positive definite?",a:"Theorem 3.10 (as cited in the source)."},{q:"What does the expression $l_{ik}l_{jk}$ inside the summation for $l_{ij}$ represent?",a:"The dot product of the truncated rows $i$ and $j$ of $\\mathbf{L}$."},{q:"If $\\mathbf{A}$ is a $2 \\times 2$ matrix, how many elements are in the 'output' list $(l_{ij})$?",a:"3 elements ($l_{11}, l_{21}, l_{22}$)"},{q:"Is the Cholesky factorization possible for a matrix with a negative diagonal element?",a:"No, because $l_{ii}^2 = a_{ii} - \\sum l_{ik}^2$ would require a square root of a negative number for a real factorization."},{q:"In the Cholesky algorithm, which element is updated in the very first assignment?",a:"$l_{11}$"},{q:"How is $l_{jj}$ defined in the algorithm when $j=1$?",a:"It is simply $\\sqrt{a_{11}}$ (handled as a separate step before the $j$ loop)."},{q:"In the complexity analysis, what does $\\mathcal{O}(n^2)$ represent?",a:"Lower-order terms that become insignificant compared to $n^3$ as $n$ grows."}]};function Le({deck:e}){const{tb:a,lang:i}=z(),n=bt[e]??[],[s,r]=g.useState(null);return n.length?t.jsxs("section",{className:"theory",children:[t.jsx("h2",{children:i==="en"?"Glossary":"Fogalomtár"}),t.jsx("div",{className:"block__body",style:{display:"grid",gap:8},children:n.map((o,m)=>{const u=s===m;return t.jsxs("button",{className:"callout callout--definition",style:{textAlign:"left",cursor:"pointer",width:"100%"},onClick:()=>r(u?null:m),children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12},children:[t.jsx("span",{className:"callout__label",style:{margin:0},children:t.jsx(U,{text:a(o.term)})}),t.jsx("span",{style:{opacity:.5},children:u?"−":"+"})]}),u&&t.jsx("p",{style:{marginBottom:0},children:t.jsx(U,{text:a(o.def)})})]},m)})})]}):null}const xt={shuffle:{en:"🔀 Shuffle",hu:"🔀 Keverés"},reset:{en:"Reset order",hu:"Eredeti sorrend"},question:{en:"Question",hu:"Kérdés"},answer:{en:"Answer",hu:"Válasz"},prev:{en:"‹ Prev",hu:"‹ Előző"},next:{en:"Next ›",hu:"Következő ›"},showAnswer:{en:"Show answer",hu:"Válasz mutatása"},showQuestion:{en:"Show question",hu:"Kérdés mutatása"}},Y=e=>Array.from({length:e},(a,i)=>i);function kt(e){const a=Y(e);for(let i=a.length-1;i>0;i--){const n=Math.floor(Math.random()*(i+1));[a[i],a[n]]=[a[n],a[i]]}return a}function Ae({deck:e}){const{lang:a}=z(),i=gt[e]??[],n=f=>xt[f][a],[s,r]=g.useState(()=>Y(i.length)),[o,m]=g.useState(0),[u,l]=g.useState(!1),d=g.useMemo(()=>i[s[o]],[i,s,o]);if(!i.length)return null;const $=f=>{l(!1),m(h=>(h+f+i.length)%i.length)};return t.jsxs("section",{className:"theory",children:[t.jsxs("h2",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{children:a==="en"?"Flashcards":"Tanulókártyák"}),t.jsxs("span",{style:{display:"flex",gap:8,fontSize:"0.8rem",fontWeight:400},children:[t.jsxs("span",{style:{opacity:.6},children:[o+1," / ",i.length]}),t.jsx("button",{className:"btn",onClick:()=>{r(kt(i.length)),m(0),l(!1)},children:n("shuffle")}),t.jsx("button",{className:"btn",onClick:()=>{r(Y(i.length)),m(0),l(!1)},children:n("reset")})]})]}),t.jsxs("button",{className:"callout callout--example",style:{width:"100%",minHeight:150,textAlign:"left",cursor:"pointer"},onClick:()=>l(f=>!f),children:[t.jsx("div",{className:"callout__label",children:n(u?"answer":"question")}),t.jsx("p",{style:{marginBottom:0},children:t.jsx(U,{text:u?d.a:d.q})})]}),t.jsxs("div",{style:{display:"flex",gap:10,marginTop:10,alignItems:"center"},children:[t.jsx("button",{className:"btn",onClick:()=>$(-1),children:n("prev")}),t.jsx("button",{className:"btn",style:{flex:1},onClick:()=>l(f=>!f),children:n(u?"showQuestion":"showAnswer")}),t.jsx("button",{className:"btn",onClick:()=>$(1),children:n("next")})]})]})}const we={id:"lu",title:{en:"5.1 LU Factorization",hu:"5.1 LU-faktorizáció"},blocks:[{id:"lu-def",kind:"definition",label:{en:"Definition (LU / Doolittle)",hu:"Definíció (LU / Doolittle)"},body:[{rich:{en:"Let $\\mathbf{A}$ be an $n\\times n$ matrix. The product $\\mathbf{A}=\\mathbf{LU}$ is called the *LU factorization* of $\\mathbf{A}$ (or *Doolittle's method*) if $\\mathbf{L}$ is lower triangular with all $1$'s on the main diagonal, and $\\mathbf{U}$ is upper triangular.",hu:"Legyen $\\mathbf{A}$ egy $n\\times n$-es mátrix. Az $\\mathbf{A}=\\mathbf{LU}$ szorzatot az $\\mathbf{A}$ *LU-faktorizációjának* (vagy *Doolittle-faktorizációjának*) nevezzük, ha $\\mathbf{L}$ alulról trianguláris, főátlójában csupa $1$-essel, az $\\mathbf{U}$ pedig felülről trianguláris."}},{math:"\\begin{pmatrix} -2 & -1 & -3 \\\\ -4 & 0 & -7 \\\\ 6 & 7 & 9 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ -3 & 2 & 1 \\end{pmatrix} \\begin{pmatrix} -2 & -1 & -3 \\\\ 0 & 2 & -1 \\\\ 0 & 0 & 2 \\end{pmatrix}"}]},{id:"lu-thm-unique",kind:"theorem",label:{en:"Theorem 5.1 (Uniqueness)",hu:"5.1. tétel (Egyértelműség)"},body:[{rich:{en:"Let $\\mathbf{A}$ be a nonsingular square matrix. If the LU factorization of $\\mathbf{A}$ exists, then it is unique.",hu:"Legyen $\\mathbf{A}$ nemszinguláris négyzetes mátrix. Ha az $\\mathbf{A}$ LU-faktorizációja létezik, akkor az egyértelmű."}}]},{id:"lu-thm-unique-proof",kind:"proof",body:[{rich:{en:"Suppose $\\mathbf{A}=\\mathbf{L}_1\\mathbf{U}_1=\\mathbf{L}_2\\mathbf{U}_2$ are two LU factorizations. Since $\\det(\\mathbf{A})=\\det(\\mathbf{L}_1)\\det(\\mathbf{U}_1)=\\det(\\mathbf{L}_2)\\det(\\mathbf{U}_2)\\neq 0$, all four factors are nonsingular, hence $\\mathbf{L}_2^{-1}\\mathbf{L}_1=\\mathbf{U}_2\\mathbf{U}_1^{-1}$. The left-hand side is lower triangular and the right-hand side upper triangular, so both must be diagonal. The main diagonal of $\\mathbf{L}_2^{-1}\\mathbf{L}_1$ consists only of $1$'s, therefore $\\mathbf{L}_2^{-1}\\mathbf{L}_1=\\mathbf{U}_2\\mathbf{U}_1^{-1}=\\mathbf{I}$, which gives $\\mathbf{L}_1=\\mathbf{L}_2$ and $\\mathbf{U}_1=\\mathbf{U}_2$. $\\;\\square$",hu:"Tegyük fel, hogy $\\mathbf{A}=\\mathbf{L}_1\\mathbf{U}_1=\\mathbf{L}_2\\mathbf{U}_2$ két LU-faktorizáció. Mivel $\\det(\\mathbf{A})=\\det(\\mathbf{L}_1)\\det(\\mathbf{U}_1)=\\det(\\mathbf{L}_2)\\det(\\mathbf{U}_2)\\neq 0$, mind a négy tényező nemszinguláris, így $\\mathbf{L}_2^{-1}\\mathbf{L}_1=\\mathbf{U}_2\\mathbf{U}_1^{-1}$. A bal oldal alulról trianguláris, a jobb oldal felülről trianguláris, ezért mindkettő diagonális. Az $\\mathbf{L}_2^{-1}\\mathbf{L}_1$ főátlójában csupa $1$ áll, tehát $\\mathbf{L}_2^{-1}\\mathbf{L}_1=\\mathbf{U}_2\\mathbf{U}_1^{-1}=\\mathbf{I}$, amiből $\\mathbf{L}_1=\\mathbf{L}_2$ és $\\mathbf{U}_1=\\mathbf{U}_2$. $\\;\\square$"}}]},{id:"lu-construction",kind:"text",label:{en:"Construction via Gaussian elimination",hu:"Felépítés Gauss-eliminációval"},body:[{rich:{en:"Let $l_{i1}=a_{i1}/a_{11}$ for $i=2,\\dots,n$, and define the lower triangular matrix $\\mathbf{L}_1$ whose first column below the diagonal holds $-l_{i1}$:",hu:"Legyen $l_{i1}=a_{i1}/a_{11}$, $i=2,\\dots,n$, és definiáljuk azt az $\\mathbf{L}_1$ alulról trianguláris mátrixot, melynek első oszlopában a főátló alatt $-l_{i1}$ áll:"}},{math:"\\mathbf{L}_1 := \\begin{pmatrix} 1 & & & \\\\ -l_{21} & 1 & & \\\\ \\vdots & & \\ddots & \\\\ -l_{n1} & & & 1 \\end{pmatrix}, \\qquad \\mathbf{L}_1\\mathbf{A} = \\mathbf{A}^{(1)}."},{rich:{en:"Here $\\mathbf{A}^{(1)}$ is the matrix after the first elimination step. Repeating for columns $2,\\dots,n-1$ produces $\\mathbf{L}_2,\\dots,\\mathbf{L}_{n-1}$ with $\\mathbf{A}^{(k)}=\\mathbf{L}_k\\mathbf{A}^{(k-1)}$.",hu:"Itt $\\mathbf{A}^{(1)}$ az első eliminációs lépés utáni mátrix. A $2,\\dots,n-1$ oszlopokra ismételve kapjuk az $\\mathbf{L}_2,\\dots,\\mathbf{L}_{n-1}$ mátrixokat, ahol $\\mathbf{A}^{(k)}=\\mathbf{L}_k\\mathbf{A}^{(k-1)}$."}},{rich:{en:"A simple computation gives the product (5.1) and its inverse $\\mathbf{L}$ (5.2):",hu:"Egyszerű számolással adódik a szorzat (5.1) és inverze, $\\mathbf{L}$ (5.2):"}},{math:"\\mathbf{L} := (\\mathbf{L}_{n-1}\\cdots\\mathbf{L}_1)^{-1} = \\begin{pmatrix} 1 & & & \\\\ l_{21} & 1 & & \\\\ l_{31} & l_{32} & 1 & \\\\ \\vdots & \\vdots & & \\ddots \\\\ l_{n1} & l_{n2} & \\cdots & 1 \\end{pmatrix}. \\tag{5.2}"}]},{id:"lu-thm-exist",kind:"theorem",label:{en:"Theorem 5.2 (Existence)",hu:"5.2. tétel (Létezés)"},body:[{rich:{en:"If Gaussian elimination can be performed on $\\mathbf{A}$, then $\\mathbf{A}=\\mathbf{LU}$ exists. Then $\\mathbf{U}=\\mathbf{A}^{(n-1)}$ is the upper triangular result of elimination, and $\\mathbf{L}$ is given by (5.2), where $l_{ij}$ are the elimination factors.",hu:"Ha a Gauss-elimináció végrehajtható $\\mathbf{A}$-n, akkor $\\mathbf{A}=\\mathbf{LU}$ létezik. Ekkor $\\mathbf{U}=\\mathbf{A}^{(n-1)}$ az elimináció felülről trianguláris eredménye, $\\mathbf{L}$ pedig (5.2) szerint adott, ahol $l_{ij}$ az eliminációs faktorok."}}]},{id:"lu-example",kind:"example",label:{en:"Example 5.3",hu:"5.3. példa"},body:[{rich:{en:"Factor the $4\\times 4$ matrix. We write each multiplier $l_{ij}$ into the position it eliminates:",hu:"Faktorizáljuk a $4\\times 4$-es mátrixot. Minden $l_{ij}$ szorzót abba a pozícióba írunk, amelyet kinulláz:"}},{math:"\\mathbf{A}=\\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & -1 & 2 & 4 \\\\ -1 & 2 & 3 & -4 \\\\ -2 & 1 & 4 & -2 \\end{pmatrix}"},{rich:{en:"with $l_{21}=2,\\ l_{31}=-1,\\ l_{41}=-2,\\ l_{32}=0,\\ l_{42}=-1,\\ l_{43}=6$. We carry out the elimination so that each factor $l_{ij}$ is written into the position it eliminates (instead of the resulting $0$):",hu:"ahol $l_{21}=2,\\ l_{31}=-1,\\ l_{41}=-2,\\ l_{32}=0,\\ l_{42}=-1,\\ l_{43}=6$. Az eliminációt úgy végezzük, hogy minden $l_{ij}$ faktort abba a pozícióba írunk, amelyet kinulláz (a keletkező $0$ helyére):"}},{math:"\\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & -1 & 2 & 4 \\\\ -1 & 2 & 3 & -4 \\\\ -2 & 1 & 4 & -2 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & 3 & 6 & 8 \\\\ -1 & 0 & 1 & -6 \\\\ -2 & -3 & 0 & -6 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & 3 & 6 & 8 \\\\ -1 & 0 & 1 & -6 \\\\ -2 & -1 & 6 & 2 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & 3 & 6 & 8 \\\\ -1 & 0 & 1 & -6 \\\\ -2 & -1 & 6 & 38 \\end{pmatrix}"},{rich:{en:"In the last matrix the entries on and above the main diagonal form $\\mathbf{U}$, and the entries below it form $\\mathbf{L}$:",hu:"Az utolsó mátrixban a főátlóban és felette álló elemek alkotják $\\mathbf{U}$-t, az alatta állók pedig $\\mathbf{L}$-et:"}},{math:"\\mathbf{A}=\\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 2 & 1 & 0 & 0 \\\\ -1 & 0 & 1 & 0 \\\\ -2 & -1 & 6 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 0 & 3 & 6 & 8 \\\\ 0 & 0 & 1 & -6 \\\\ 0 & 0 & 0 & 38 \\end{pmatrix}."},{text:{en:"Tip: open the LU solver and enter this matrix to watch every elimination step. Then press “Verify” to multiply L·U back to A.",hu:"Tipp: nyisd meg az LU-megoldót, és írd be ezt a mátrixot, hogy lásd minden eliminációs lépést. Majd nyomd meg az „Ellenőrzés” gombot, hogy L·U visszaszorzásával megkapd A-t."}}]},{id:"lu-thm-minors",kind:"theorem",label:{en:"Theorem 5.4",hu:"5.4. tétel"},body:[{rich:{en:"If all leading principal minors of $\\mathbf{A}$ are nonzero, then Gaussian elimination can be performed without row interchanges, so $\\mathbf{A}=\\mathbf{LU}$ exists.",hu:"Ha $\\mathbf{A}$ összes bal felső főminorja nullától különböző, akkor a Gauss-elimináció sorcsere nélkül végrehajtható, így $\\mathbf{A}=\\mathbf{LU}$ létezik."}}]},{id:"lu-thm-perm",kind:"theorem",label:{en:"Theorem 5.5",hu:"5.5. tétel"},body:[{rich:{en:"For any invertible square matrix $\\mathbf{A}$ there exists a permutation matrix $\\mathbf{P}$ such that $\\mathbf{PA}=\\mathbf{LU}$ exists.",hu:"Bármely invertálható négyzetes $\\mathbf{A}$ mátrixhoz létezik olyan $\\mathbf{P}$ permutációs mátrix, hogy $\\mathbf{PA}=\\mathbf{LU}$ létezik."}}]},{id:"lu-solve",kind:"text",label:{en:"Solving linear systems",hu:"Lineáris rendszerek megoldása"},body:[{rich:{en:"If $\\mathbf{A}=\\mathbf{LU}$ is known, solve $\\mathbf{Ax}=\\mathbf{b}$ via $\\mathbf{LUx}=\\mathbf{b}$. Introduce $\\mathbf{y}=\\mathbf{Ux}$; the system splits into two triangular systems:",hu:"Ha $\\mathbf{A}=\\mathbf{LU}$ ismert, az $\\mathbf{Ax}=\\mathbf{b}$ rendszert $\\mathbf{LUx}=\\mathbf{b}$ alakban oldjuk meg. Vezessük be $\\mathbf{y}=\\mathbf{Ux}$-et; a rendszer két trianguláris rendszerre bomlik:"}},{math:"\\mathbf{Ly}=\\mathbf{b}, \\qquad \\mathbf{Ux}=\\mathbf{y}."},{rich:{en:"Solve the first by forward substitution, the second by backward substitution. The two triangular solves cost $n^2+\\mathcal{O}(n)$ multiplications/divisions; the factorization costs $n^3/3+\\mathcal{O}(n^2)$. This is especially efficient when many systems share the same $\\mathbf{A}$.",hu:"Az elsőt előrehelyettesítéssel, a másodikat visszahelyettesítéssel oldjuk meg. A két trianguláris megoldás $n^2+\\mathcal{O}(n)$ szorzás/osztás; a faktorizáció $n^3/3+\\mathcal{O}(n^2)$. Különösen hatékony, ha sok rendszer ugyanazt az $\\mathbf{A}$-t használja."}}]},{id:"lu-exercises",kind:"remark",label:{en:"Exercises",hu:"Feladatok"},body:[{rich:{en:"**1.** Compute the LU factorization of the following matrices:",hu:"**1.** Számítsd ki az alábbi mátrixok LU-faktorizációját:"}},{math:"\\text{(a)}\\ \\begin{pmatrix} 2 & 3 & -1 \\\\ -1 & -2 & -1 \\\\ 0 & 2 & 4 \\end{pmatrix} \\qquad \\text{(b)}\\ \\begin{pmatrix} 4 & -1 & 2 \\\\ -12 & 0 & -1 \\\\ 8 & -17 & 26 \\end{pmatrix}"},{math:"\\text{(c)}\\ \\begin{pmatrix} 1 & 3 & -1 & 2 \\\\ -2 & -4 & 5 & -5 \\\\ 0 & 6 & 6 & -2 \\\\ 2 & 4 & -14 & 16 \\end{pmatrix} \\qquad \\text{(d)}\\ \\begin{pmatrix} 2 & -1 & 3 & -2 \\\\ -8 & 5 & -7 & 7 \\\\ 2 & -4 & -14 & 0 \\\\ -4 & 7 & 23 & 4 \\end{pmatrix}"},{rich:{en:"**2.** Show that the matrix $\\begin{psmallmatrix} 2 & 2 & 3 \\\\ 1 & 1 & 4 \\\\ 1 & 0 & 1 \\end{psmallmatrix}$ has no LU factorization.",hu:"**2.** Mutasd meg, hogy az $\\begin{psmallmatrix} 2 & 2 & 3 \\\\ 1 & 1 & 4 \\\\ 1 & 0 & 1 \\end{psmallmatrix}$ mátrixnak nincs LU-faktorizációja."}},{rich:{en:"**3.** Show that the matrix $\\begin{psmallmatrix} 1 & 1 & -1 \\\\ 2 & 2 & 2 \\\\ 3 & 3 & -4 \\end{psmallmatrix}$ has infinitely many LU factorizations. Do we get a contradiction to Theorem 5.1?",hu:"**3.** Mutasd meg, hogy az $\\begin{psmallmatrix} 1 & 1 & -1 \\\\ 2 & 2 & 2 \\\\ 3 & 3 & -4 \\end{psmallmatrix}$ mátrixnak végtelen sok LU-faktorizációja van. Ellentmondásba kerülünk az 5.1. tétellel?"}},{rich:{en:"**4.** Prove Theorem 5.4. *(Hint: during the elimination steps the principal minors of $\\mathbf{A}^{(k-1)}$ and $\\mathbf{A}^{(k)}$ are equal — why?)*",hu:"**4.** Bizonyítsd be az 5.4. tételt. *(Útmutató: az eliminációs lépések során $\\mathbf{A}^{(k-1)}$ és $\\mathbf{A}^{(k)}$ főminorjai egyenlők — miért?)*"}},{rich:{en:"**5.** Prove Theorem 5.5.",hu:"**5.** Bizonyítsd be az 5.5. tételt."}},{rich:{en:"**6.** Solve the linear systems of Exercise 1 of Section 3.3 using LU factorization. *(Worked solutions are in the Exercise solutions panel at the bottom of the chapter.)*",hu:"**6.** Oldd meg a 3.3. szakasz 1. feladatának lineáris rendszereit LU-faktorizációval. *(A kidolgozott megoldások a fejezet alján található Feladatmegoldások panelben vannak.)*"}}]}]};function yt(){const{lang:e}=z();return t.jsxs("div",{className:"page-narrow",children:[t.jsx(Q,{section:we}),t.jsx("h2",{children:e==="en"?"Guided example":"Vezetett példa"}),t.jsx(je,{kind:"lu"}),t.jsx("h2",{children:e==="en"?"Try it yourself":"Próbáld ki magad"}),t.jsx(ze,{}),t.jsx(Le,{deck:"lu"}),t.jsx(Ae,{deck:"lu"})]})}const be=[[4,-8,4],[-8,17,-11],[4,-11,22]];function qe(){const{t:e,lang:a}=z(),i=P(c=>c.recordSolve),[n,s]=g.useState(3),[r,o]=g.useState(be),[m,u]=g.useState(null),[l,d]=g.useState(0),[$,f]=g.useState(null),h=g.useMemo(()=>m?O(m):null,[m]),x=()=>{const c=O(r);u(r),d(0),f(null),c.ok&&i("cholesky")},b=c=>{s(c),o(k=>{const j=C(c);for(let y=0;y<Math.min(c,k.length);y++)for(let v=0;v<Math.min(c,k[0].length);v++)j[y][v]=k[y][v];return j}),u(null)},p={};if(h!=null&&h.ok){const c=h.steps[l];p[`${c.target[0]},${c.target[1]}`]="active";for(let k=0;k<=l-1;k++){const j=h.steps[k].target;j[0]===c.target[0]&&j[1]===c.target[1]||(p[`${j[0]},${j[1]}`]="done")}}const _=()=>{!(h!=null&&h.ok)||!h.L||f(M(_e(h.L,de(h.L)),m))};return t.jsxs("div",{className:"solver card",children:[t.jsxs("div",{className:"solver__head",children:[t.jsx("h3",{children:e("cholesky_solver")}),t.jsxs("div",{className:"solver__controls",children:[t.jsxs("label",{className:"field",children:[e("matrix_size"),t.jsx("select",{value:n,onChange:c=>b(Number(c.target.value)),children:[2,3,4].map(c=>t.jsxs("option",{value:c,children:[c,"×",c]},c))})]}),t.jsx("button",{className:"btn sm",onClick:()=>{o(be),s(3),u(null)},children:e("load_example")}),t.jsx("button",{className:"btn sm",onClick:()=>{o(C(n)),u(null)},children:e("reset")})]})]}),t.jsxs("div",{className:"solver__io",children:[t.jsxs("div",{children:[t.jsx("div",{className:"solver__label",children:e("your_matrix")}),t.jsx(G,{matrix:r,onChange:o,label:e("your_matrix")}),t.jsx("p",{className:"solver__hint-note",children:"A = Aᵀ (symmetric, positive definite)"})]}),t.jsxs("button",{className:"btn primary",onClick:x,children:[e("factorize")," →"]})]}),h&&!h.ok&&t.jsxs("p",{className:"solver__error",children:[h.error==="not-square"&&e("err_not_square"),h.error==="not-symmetric"&&e("err_not_symmetric"),h.error==="not-pd"&&e("err_not_pd")]}),(h==null?void 0:h.ok)&&t.jsxs("div",{className:"solver__out",children:[t.jsx(te,{count:h.steps.length,index:l,onIndex:d}),t.jsx("p",{className:"solver__desc",children:a==="en"?h.steps[l].descEn:h.steps[l].descHu}),t.jsx("div",{className:"solver__expr",children:t.jsx(L,{tex:h.steps[l].equation,display:!0})}),t.jsx("div",{className:"solver__tableau",children:t.jsx(ee,{matrix:h.steps[l].L,states:p,ariaLabel:"L so far"})}),l===h.steps.length-1&&t.jsxs("div",{className:"solver__final",children:[t.jsxs("div",{className:"solver__factor",children:[t.jsx("span",{children:"L ="}),t.jsx(L,{tex:I(h.L)})]}),t.jsxs("div",{className:"solver__factor",children:[t.jsx("span",{children:"Lᵀ ="}),t.jsx(L,{tex:I(de(h.L))})]}),t.jsx("button",{className:"btn sm",onClick:_,children:e("verify")}),$===!0&&t.jsxs("span",{className:"solver__ok",children:["✓ ",e("verify_ok")]})]})]})]})}const Se={id:"cholesky",title:{en:"5.2 Cholesky Factorization",hu:"5.2 Cholesky-faktorizáció"},blocks:[{id:"ch-def",kind:"definition",label:{en:"Definition (Cholesky)",hu:"Definíció (Cholesky)"},body:[{rich:{en:"Let $\\mathbf{A}$ be a symmetric matrix. The factorization $\\mathbf{A}=\\mathbf{L}\\mathbf{L}^{T}$, where $\\mathbf{L}$ is lower triangular, is called the *Cholesky factorization* of $\\mathbf{A}$.",hu:"Legyen $\\mathbf{A}$ szimmetrikus mátrix. Az $\\mathbf{A}=\\mathbf{L}\\mathbf{L}^{T}$ felbontást, ahol $\\mathbf{L}$ alulról trianguláris, az $\\mathbf{A}$ *Cholesky-faktorizációjának* nevezzük."}},{text:{en:"If it exists, the Cholesky factorization is not unique (signs of diagonal entries may vary). The next theorem gives a sufficient condition for existence with positive diagonal.",hu:"Ha létezik, a Cholesky-faktorizáció nem egyértelmű (a főátló elemeinek előjele változhat). A következő tétel elégséges feltételt ad a pozitív főátlójú létezésre."}}]},{id:"ch-thm",kind:"theorem",label:{en:"Theorem 5.6",hu:"5.6. tétel"},body:[{rich:{en:"If $\\mathbf{A}$ is symmetric and positive definite, then the Cholesky factorization $\\mathbf{A}=\\mathbf{L}\\mathbf{L}^{T}$ exists, $\\mathbf{L}$ is real, and its diagonal entries can be chosen positive.",hu:"Ha $\\mathbf{A}$ szimmetrikus és pozitív definit, akkor az $\\mathbf{A}=\\mathbf{L}\\mathbf{L}^{T}$ Cholesky-faktorizáció létezik, $\\mathbf{L}$ valós, és a főátlóban pozitív elemek választhatók."}}]},{id:"ch-example",kind:"example",label:{en:"Example 5.7",hu:"5.7. példa"},body:[{rich:{en:"Find the Cholesky factorization of",hu:"Keressük a Cholesky-faktorizációját az alábbinak:"}},{math:"\\begin{pmatrix} 4 & -8 & 4 \\\\ -8 & 17 & -11 \\\\ 4 & -11 & 22 \\end{pmatrix}."},{rich:{en:"Solve entry by entry: $4=l_{11}^2\\Rightarrow l_{11}=2$; $-8=l_{21}l_{11}\\Rightarrow l_{21}=-4$; $4=l_{31}l_{11}\\Rightarrow l_{31}=2$; $17=l_{21}^2+l_{22}^2\\Rightarrow l_{22}=1$; $-11=l_{31}l_{21}+l_{32}l_{22}\\Rightarrow l_{32}=-3$; $22=l_{31}^2+l_{32}^2+l_{33}^2\\Rightarrow l_{33}=3$.",hu:"Elemenként oldjuk meg: $4=l_{11}^2\\Rightarrow l_{11}=2$; $-8=l_{21}l_{11}\\Rightarrow l_{21}=-4$; $4=l_{31}l_{11}\\Rightarrow l_{31}=2$; $17=l_{21}^2+l_{22}^2\\Rightarrow l_{22}=1$; $-11=l_{31}l_{21}+l_{32}l_{22}\\Rightarrow l_{32}=-3$; $22=l_{31}^2+l_{32}^2+l_{33}^2\\Rightarrow l_{33}=3$."}},{math:"\\begin{pmatrix} 4 & -8 & 4 \\\\ -8 & 17 & -11 \\\\ 4 & -11 & 22 \\end{pmatrix} = \\begin{pmatrix} 2 & 0 & 0 \\\\ -4 & 1 & 0 \\\\ 2 & -3 & 3 \\end{pmatrix}\\begin{pmatrix} 2 & -4 & 2 \\\\ 0 & 1 & -3 \\\\ 0 & 0 & 3 \\end{pmatrix}."}]},{id:"ch-algo",kind:"algorithm",label:{en:"Algorithm 5.8 (Cholesky)",hu:"5.8. algoritmus (Cholesky)"},body:[{math:"l_{11} \\leftarrow \\sqrt{a_{11}}"},{math:"\\text{for } i=2,\\dots,n:\\quad l_{i1}\\leftarrow a_{i1}/l_{11}"},{math:"\\text{for } j=2,\\dots,n-1:\\quad l_{jj}\\leftarrow\\sqrt{a_{jj}-\\textstyle\\sum_{k=1}^{j-1} l_{jk}^2}"},{math:"\\qquad \\text{for } i=j+1,\\dots,n:\\quad l_{ij}\\leftarrow\\Big(a_{ij}-\\textstyle\\sum_{k=1}^{j-1} l_{ik}l_{jk}\\Big)/l_{jj}"},{math:"l_{nn} \\leftarrow \\sqrt{a_{nn}-\\textstyle\\sum_{k=1}^{n-1} l_{nk}^2}"},{rich:{en:"Operation count: $n^3/6+\\mathcal{O}(n^2)$ multiplications/divisions, $n^3/6+\\mathcal{O}(n^2)$ additions/subtractions, and $n$ square roots — about half the cost of LU, exploiting symmetry.",hu:"Műveletigény: $n^3/6+\\mathcal{O}(n^2)$ szorzás/osztás, $n^3/6+\\mathcal{O}(n^2)$ összeadás/kivonás, és $n$ gyökvonás — nagyjából feleannyi, mint az LU, kihasználva a szimmetriát."}}]}]};function _t(){const{lang:e}=z();return t.jsxs("div",{className:"page-narrow",children:[t.jsx(Q,{section:Se}),t.jsx("h2",{children:e==="en"?"Guided example":"Vezetett példa"}),t.jsx(je,{kind:"cholesky"}),t.jsx("h2",{children:e==="en"?"Try it yourself":"Próbáld ki magad"}),t.jsx(qe,{}),t.jsx(Le,{deck:"cholesky"}),t.jsx(Ae,{deck:"cholesky"})]})}function vt(){const{t:e,lang:a}=z();return t.jsxs("div",{className:"page-narrow",children:[t.jsx("h1",{children:e("nav_solver")}),t.jsx("p",{children:a==="en"?"Enter your own matrices and step through the factorization. Press Verify to multiply the factors back and confirm the result.":"Add meg saját mátrixaidat, és lépkedj végig a faktorizáción. Az Ellenőrzés gombbal visszaszorzod a tényezőket, és igazolod az eredményt."}),t.jsx(ze,{}),t.jsx(qe,{})]})}function ge({ex:e}){const{tb:a}=z(),i=P(n=>n.progress.exercisesDone.includes(e.id));return t.jsxs("div",{className:`exercise card${i?" is-done":""}`,children:[t.jsxs("div",{className:"exercise__prompt",children:[i&&t.jsx("span",{className:"exercise__check",children:"✓"}),t.jsx(U,{text:a(e.prompt)})]}),e.kind==="mcq"?t.jsx(zt,{ex:e}):e.kind==="open"?t.jsx(Lt,{ex:e}):t.jsxs(t.Fragment,{children:[t.jsx(jt,{ex:e}),t.jsxs("div",{className:"exercise__given",children:[t.jsx("span",{children:"A ="}),t.jsx(L,{tex:I(e.matrix)})]})]})]})}function jt({ex:e}){const{t:a,tb:i}=z(),n=P(y=>y.recordExercise),s=e.matrix.length,r=e.kind==="factor-lu",o=g.useMemo(()=>r?H(e.matrix):O(e.matrix),[e,r]),m=(y,v)=>y<v||r&&y===v,u=(y,v)=>y>v,l=()=>Array.from({length:s},(y,v)=>Array.from({length:s},(T,R)=>r&&v===R?1:0)),[d,$]=g.useState(l),[f,h]=g.useState(C(s)),[x,b]=g.useState("idle"),[p,_]=g.useState(!1),[c,k]=g.useState(!1),j=()=>{if(!o.ok)return;let y=!1;r&&"U"in o&&o.L&&o.U?y=M(d,o.L)&&M(f,o.U):!r&&o.L&&(y=M(d,o.L)),b(y?"ok":"bad"),y&&n(e.id)};return t.jsxs("div",{className:"exercise__body",children:[t.jsxs("div",{className:"exercise__answers",children:[t.jsxs("div",{children:[t.jsx("div",{className:"exercise__sublabel",children:a("your_answer_L")}),t.jsx(G,{matrix:d,onChange:$,readonlyCell:m})]}),r&&t.jsxs("div",{children:[t.jsx("div",{className:"exercise__sublabel",children:a("your_answer_U")}),t.jsx(G,{matrix:f,onChange:h,readonlyCell:u})]})]}),t.jsxs("div",{className:"exercise__actions",children:[t.jsx("button",{className:"btn primary sm",onClick:j,children:a("check")}),t.jsxs("button",{className:"btn sm ghost",onClick:()=>_(y=>!y),children:["💡 ",a("show_hint")]}),t.jsx("button",{className:"btn sm ghost",onClick:()=>k(y=>!y),children:a("show_answer")}),x==="ok"&&t.jsx("span",{className:"exercise__ok",children:a("correct")}),x==="bad"&&t.jsx("span",{className:"exercise__bad",children:a("incorrect")})]}),p&&t.jsx("p",{className:"exercise__hint",children:i(e.hint)}),c&&o.ok&&t.jsxs("div",{className:"exercise__reveal",children:[t.jsx("span",{children:"L ="}),t.jsx(L,{tex:I(o.L)}),r&&"U"in o&&o.U&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"U ="}),t.jsx(L,{tex:I(o.U)})]})]})]})}function zt({ex:e}){const{t:a,tb:i}=z(),n=P(l=>l.recordExercise),[s,r]=g.useState(null),[o,m]=g.useState(!1),u=l=>{r(l),m(!0),l===e.correct&&n(e.id)};return t.jsxs("div",{className:"exercise__body",children:[t.jsx("div",{className:"mcq",children:e.options.map((l,d)=>{const $=o&&d===e.correct?"ok":o&&d===s?"bad":"";return t.jsx("button",{className:`mcq__opt ${$}`,onClick:()=>u(d),disabled:o,children:t.jsx(U,{text:i(l)})},d)})}),o&&t.jsx("p",{className:s===e.correct?"exercise__ok":"exercise__bad",children:s===e.correct?a("correct"):a("incorrect")}),o&&t.jsx("p",{className:"exercise__explain",children:t.jsx(U,{text:i(e.explanation)})})]})}function Lt({ex:e}){const{t:a,tb:i}=z(),n=P(o=>o.recordExercise),[s,r]=g.useState(!1);return t.jsxs("div",{className:"exercise__body",children:[t.jsx("div",{className:"exercise__actions",children:t.jsx("button",{className:"btn sm primary",onClick:()=>{r(o=>!o),n(e.id)},children:a("show_answer")})}),s&&t.jsx("p",{className:"exercise__model",children:t.jsx(U,{text:i(e.modelAnswer)})})]})}const xe=[{id:"lu-ex1a",group:"lu",kind:"factor-lu",prompt:{en:"Compute the LU factorization of the matrix below. Fill in L (unit lower triangular) and U.",hu:"Számítsd ki az alábbi mátrix LU-faktorizációját. Töltsd ki L-et (egységnyi főátlójú alsó) és U-t."},matrix:[[2,3,-1],[-1,-2,-1],[0,2,4]],hint:{en:"First pivot is 2. l₂₁ = -1/2, l₃₁ = 0.",hu:"Az első pivot 2. l₂₁ = -1/2, l₃₁ = 0."}},{id:"lu-ex1b",group:"lu",kind:"factor-lu",prompt:{en:"Compute the LU factorization of this matrix.",hu:"Számítsd ki ennek a mátrixnak az LU-faktorizációját."},matrix:[[4,-1,2],[-12,0,-1],[8,-17,26]],hint:{en:"l₂₁ = -3, l₃₁ = 2. Eliminate column 1 first.",hu:"l₂₁ = -3, l₃₁ = 2. Először az 1. oszlopot nullázd."}},{id:"lu-ex1d",group:"lu",kind:"factor-lu",prompt:{en:"Compute the LU factorization of this 4×4 matrix.",hu:"Számítsd ki ennek a 4×4-es mátrixnak az LU-faktorizációját."},matrix:[[2,-1,3,-2],[-8,5,-7,7],[2,-4,-14,0],[-4,7,23,4]],hint:{en:"Use the solver's step view if stuck — multipliers go where zeros appear.",hu:"Ha elakadsz, használd a megoldó lépésnézetét — a szorzók a nullák helyére kerülnek."}},{id:"lu-ex2",group:"lu",kind:"mcq",prompt:{en:"Why does the matrix [[2,2,3],[1,1,4],[1,0,1]] have no LU factorization (without row interchange)?",hu:"Miért nincs a [[2,2,3],[1,1,4],[1,0,1]] mátrixnak LU-faktorizációja (sorcsere nélkül)?"},options:[{en:"A zero pivot appears in the second column during elimination.",hu:"Az elimináció során a második oszlopban nulla pivot keletkezik."},{en:"The matrix is singular.",hu:"A mátrix szinguláris."},{en:"The matrix is not symmetric.",hu:"A mátrix nem szimmetrikus."}],correct:0,explanation:{en:"After eliminating column 1, the (2,2) pivot becomes 0, so we cannot continue without swapping rows. A permutation P fixes this (Theorem 5.5).",hu:"Az 1. oszlop kinullázása után a (2,2) pivot 0 lesz, így sorcsere nélkül nem folytatható. Egy P permutáció orvosolja (5.5. tétel)."}},{id:"lu-ex3",group:"lu",kind:"mcq",prompt:{en:"A singular matrix can have infinitely many LU factorizations. Does this contradict Theorem 5.1?",hu:"Egy szinguláris mátrixnak végtelen sok LU-felbontása lehet. Ellentmond ez az 5.1. tételnek?"},options:[{en:"No — Theorem 5.1 assumes A is nonsingular; uniqueness need not hold otherwise.",hu:"Nem — az 5.1. tétel feltételezi, hogy A nemszinguláris; egyébként az egyértelműség nem feltétlen áll."},{en:"Yes — the theorem is violated.",hu:"Igen — a tétel sérül."},{en:"No — because L is always unique even when A is singular.",hu:"Nem — mert L mindig egyértelmű, akkor is, ha A szinguláris."}],correct:0,explanation:{en:"Theorem 5.1 guarantees uniqueness only for nonsingular A. For singular matrices the determinant argument breaks down, allowing many factorizations.",hu:"Az 5.1. tétel csak nemszinguláris A-ra garantál egyértelműséget. Szinguláris esetben a determináns-érv elromlik, így több felbontás is lehet."}},{id:"lu-ex5",group:"lu",kind:"open",prompt:{en:"Prove Theorem 5.5: for any invertible A there is a permutation P with PA = LU.",hu:"Bizonyítsd be az 5.5. tételt: bármely invertálható A-hoz van olyan P, hogy PA = LU."},modelAnswer:{en:"Since A is invertible, at every elimination step some entry in the current pivot column (on or below the diagonal) is nonzero; otherwise that column would be a combination making A singular. Swap that row to the pivot position — this is a permutation. The product of all such swaps is a permutation matrix P, and Gaussian elimination on PA proceeds with no zero pivots, so PA = LU exists by Theorem 5.2.",hu:"Mivel A invertálható, minden eliminációs lépésben a pivot-oszlop valamely eleme (a főátlón vagy alatta) nem nulla; különben az az oszlop A szingularitását okozná. Cseréljük azt a sort a pivot helyére — ez egy permutáció. Az összes csere szorzata egy P permutációs mátrix, és a PA-n végzett Gauss-elimináció nulla pivot nélkül halad, így PA = LU létezik az 5.2. tétel szerint."}},{id:"ch-ex1a",group:"cholesky",kind:"factor-cholesky",prompt:{en:"Compute the Cholesky factor L (positive diagonal) of the matrix below.",hu:"Számítsd ki az alábbi mátrix L Cholesky-tényezőjét (pozitív főátló)."},matrix:[[16,-8,-12],[-8,8,4],[-12,4,35]],hint:{en:"l₁₁ = √16 = 4, l₂₁ = -8/4 = -2, l₃₁ = -3.",hu:"l₁₁ = √16 = 4, l₂₁ = -8/4 = -2, l₃₁ = -3."}},{id:"ch-ex1b",group:"cholesky",kind:"factor-cholesky",prompt:{en:"Compute the Cholesky factor L of this matrix.",hu:"Számítsd ki ennek a mátrixnak az L Cholesky-tényezőjét."},matrix:[[4,-2,-4],[-2,26,7],[-4,7,6]],hint:{en:"l₁₁ = 2. Then fill column 1 below the diagonal, then the (2,2) diagonal.",hu:"l₁₁ = 2. Töltsd ki az 1. oszlopot a főátló alatt, majd a (2,2) főátlót."}},{id:"ch-ex1c",group:"cholesky",kind:"factor-cholesky",prompt:{en:"Compute the Cholesky factor L of this 4×4 matrix.",hu:"Számítsd ki ennek a 4×4-es mátrixnak az L Cholesky-tényezőjét."},matrix:[[1,-1,-2,1],[-1,10,2,2],[-2,2,29,8],[1,2,8,7]],hint:{en:"l₁₁ = 1, so column 1 is just the first column of A.",hu:"l₁₁ = 1, így az 1. oszlop éppen A első oszlopa."}},{id:"ch-ex3",group:"cholesky",kind:"mcq",prompt:{en:"Why does the matrix [[0,1],[1,0]] have no Cholesky factorization?",hu:"Miért nincs a [[0,1],[1,0]] mátrixnak Cholesky-faktorizációja?"},options:[{en:"It is symmetric but not positive definite, and l₁₁ = √0 = 0 blocks the next step.",hu:"Szimmetrikus, de nem pozitív definit, és l₁₁ = √0 = 0 megakasztja a következő lépést."},{en:"It is not symmetric.",hu:"Nem szimmetrikus."},{en:"It is not square.",hu:"Nem négyzetes."}],correct:0,explanation:{en:"a₁₁ = 0 gives l₁₁ = 0, then l₂₁ = a₂₁/l₁₁ is undefined. The matrix is indefinite (eigenvalues ±1), so Theorem 5.6 does not apply.",hu:"a₁₁ = 0 miatt l₁₁ = 0, majd l₂₁ = a₂₁/l₁₁ nem értelmezett. A mátrix indefinit (sajátértékek ±1), így az 5.6. tétel nem alkalmazható."}},{id:"ch-ex2",group:"cholesky",kind:"open",prompt:{en:"Give an example showing the Cholesky factorization is not unique.",hu:"Adj példát arra, hogy a Cholesky-faktorizáció nem egyértelmű."},modelAnswer:{en:"For A = (4), both L = (2) and L = (-2) satisfy A = L·Lᵀ since (±2)² = 4. More generally, flipping the sign of any column of a valid L (consistently) yields another factor, because A = (LD)(LD)ᵀ for any diagonal sign matrix D with D² = I. Requiring a positive diagonal removes the ambiguity.",hu:"A = (4) esetén L = (2) és L = (-2) is teljesíti A = L·Lᵀ-t, mert (±2)² = 4. Általánosabban, egy érvényes L bármely oszlopának előjelét konzisztensen megfordítva újabb tényezőt kapunk, mert A = (LD)(LD)ᵀ tetszőleges D előjeles diagonális mátrixra, ahol D² = I. A pozitív főátló kikötése megszünteti a kétértelműséget."}}];function At(){const{t:e,lang:a}=z(),i=xe.filter(s=>s.group==="lu"),n=xe.filter(s=>s.group==="cholesky");return t.jsxs("div",{className:"page-narrow",children:[t.jsx("h1",{children:e("nav_practice")}),t.jsx("h2",{children:a==="en"?"LU exercises":"LU feladatok"}),i.map(s=>t.jsx(ge,{ex:s},s.id)),t.jsx("h2",{children:a==="en"?"Cholesky exercises":"Cholesky feladatok"}),n.map(s=>t.jsx(ge,{ex:s},s.id))]})}const Ue={id:"intro",title:{en:"Chapter 5 — Matrix Factorization",hu:"5. fejezet — Mátrix faktorizáció"},blocks:[{id:"intro-overview",kind:"text",body:[{rich:{en:"We investigate the matrix factorization problem: for a given square matrix $\\mathbf{A}$ we look for special matrices $\\mathbf{B}$ and $\\mathbf{C}$ such that $\\mathbf{A} = \\mathbf{BC}$.",hu:"A mátrix faktorizáció feladatát vizsgáljuk: adott $\\mathbf{A}$ négyzetes mátrixhoz olyan speciális $\\mathbf{B}$ és $\\mathbf{C}$ mátrixokat keresünk, amelyekre $\\mathbf{A} = \\mathbf{BC}$."}},{text:{en:"First we study the LU factorization (lower × upper triangular), then the Cholesky factorization (a special symmetric case). These decompositions let us solve linear systems efficiently and underpin later methods such as eigenvalue iteration.",hu:"Először az LU-faktorizációt (alsó × felső trianguláris) tanulmányozzuk, majd a Cholesky-faktorizációt (egy speciális szimmetrikus esetet). Ezek a felbontások hatékonnyá teszik a lineáris egyenletrendszerek megoldását, és alapját képezik későbbi módszereknek, például a sajátérték-iterációnak."}}]}]},wt=`#include <vector>
#include <cmath>
#include <iostream>
using namespace std;
using Mat = vector<vector<double>>;

// Cholesky factorization A = L Lᵀ of a symmetric positive-definite A.
Mat cholesky(const Mat& A) {
    int n = A.size();
    Mat L(n, vector<double>(n, 0.0));
    for (int j = 0; j < n; ++j) {
        double s = A[j][j];
        for (int k = 0; k < j; ++k) s -= L[j][k] * L[j][k];
        L[j][j] = sqrt(s);
        for (int i = j + 1; i < n; ++i) {
            double t = A[i][j];
            for (int k = 0; k < j; ++k) t -= L[i][k] * L[j][k];
            L[i][j] = t / L[j][j];
        }
    }
    return L;
}

int main() {
    Mat A = {{4, 2, -2}, {2, 10, 2}, {-2, 2, 5}};
    for (auto& row : cholesky(A)) { for (double v : row) cout << v << " "; cout << "\\n"; }
}
`,qt=`program cholesky_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: A(n,n), L(n,n)
  integer :: i, j, k
  A(1,:) = [4d0, 2d0, -2d0]; A(2,:) = [2d0, 10d0, 2d0]; A(3,:) = [-2d0, 2d0, 5d0]
  L = 0d0
  do j = 1, n
     L(j,j) = sqrt(A(j,j) - dot_product(L(j,1:j-1), L(j,1:j-1)))
     do i = j+1, n
        L(i,j) = (A(i,j) - dot_product(L(i,1:j-1), L(j,1:j-1))) / L(j,j)
     end do
  end do
  do i = 1, n
     print '(3F9.4)', L(i,:)
  end do
end program cholesky_demo
`,St=`package main

import (
	"fmt"
	"math"
)

// Cholesky factorization A = L Lᵀ of a symmetric positive-definite A.
func cholesky(A [][]float64) [][]float64 {
	n := len(A)
	L := make([][]float64, n)
	for i := range L {
		L[i] = make([]float64, n)
	}
	for j := 0; j < n; j++ {
		s := A[j][j]
		for k := 0; k < j; k++ {
			s -= L[j][k] * L[j][k]
		}
		L[j][j] = math.Sqrt(s)
		for i := j + 1; i < n; i++ {
			t := A[i][j]
			for k := 0; k < j; k++ {
				t -= L[i][k] * L[j][k]
			}
			L[i][j] = t / L[j][j]
		}
	}
	return L
}

func main() {
	A := [][]float64{{4, 2, -2}, {2, 10, 2}, {-2, 2, 5}}
	for _, row := range cholesky(A) {
		fmt.Println(row)
	}
}
`,Ut=`function cholesky_factor(A)
    n = size(A, 1); L = zeros(n, n)
    for j in 1:n
        L[j, j] = sqrt(A[j, j] - sum(L[j, k]^2 for k in 1:j-1; init = 0.0))
        for i in j+1:n
            L[i, j] = (A[i, j] - sum(L[i, k] * L[j, k] for k in 1:j-1; init = 0.0)) / L[j, j]
        end
    end
    return L
end

A = [4.0 2 -2; 2 10 2; -2 2 5]
display(cholesky_factor(A))
`,Ct=`// Cholesky factorization A = L Lᵀ of a symmetric positive-definite A.
function cholesky(A) {
  const n = A.length;
  const L = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let j = 0; j < n; j++) {
    let s = A[j][j];
    for (let k = 0; k < j; k++) s -= L[j][k] ** 2;
    L[j][j] = Math.sqrt(s);
    for (let i = j + 1; i < n; i++) {
      let t = A[i][j];
      for (let k = 0; k < j; k++) t -= L[i][k] * L[j][k];
      L[i][j] = t / L[j][j];
    }
  }
  return L;
}
console.log(cholesky([[4, 2, -2], [2, 10, 2], [-2, 2, 5]]));
`,Tt=`function L = cholesky(A)
% CHOLESKY  Factorization A = L*L' of a symmetric positive-definite A.
    n = size(A, 1); L = zeros(n);
    for j = 1:n
        L(j,j) = sqrt(A(j,j) - L(j,1:j-1) * L(j,1:j-1)');
        for i = j+1:n
            L(i,j) = (A(i,j) - L(i,1:j-1) * L(j,1:j-1)') / L(j,j);
        end
    end
end

% --- Demo ---
A = [4 2 -2; 2 10 2; -2 2 5];
disp(cholesky(A));
`,Nt=`import math


def cholesky(A):
    """Cholesky factorization A = L Lᵀ of a symmetric positive-definite A."""
    n = len(A)
    L = [[0.0] * n for _ in range(n)]
    for j in range(n):
        L[j][j] = math.sqrt(A[j][j] - sum(L[j][k] ** 2 for k in range(j)))
        for i in range(j + 1, n):
            L[i][j] = (A[i][j] - sum(L[i][k] * L[j][k] for k in range(j))) / L[j][j]
    return L


if __name__ == "__main__":
    A = [[4, 2, -2], [2, 10, 2], [-2, 2, 5]]
    for row in cholesky(A):
        print([round(v, 4) for v in row])
`,Et=`# Cholesky factorization A = L L^T of a symmetric positive-definite A.
cholesky <- function(A) {
  n <- nrow(A)
  L <- matrix(0, n, n)
  for (j in 1:n) {
    s <- if (j > 1) sum(L[j, 1:(j - 1)]^2) else 0
    L[j, j] <- sqrt(A[j, j] - s)
    if (j < n) {
      for (i in (j + 1):n) {
        s <- if (j > 1) sum(L[i, 1:(j - 1)] * L[j, 1:(j - 1)]) else 0
        L[i, j] <- (A[i, j] - s) / L[j, j]
      }
    }
  }
  L
}

A <- matrix(c(4, 2, -2, 2, 10, 2, -2, 2, 5), nrow = 3, byrow = TRUE)
L <- cholesky(A)
for (i in 1:nrow(L)) {
  print(round(L[i, ], 4))
}
`,It=`// Cholesky factorization A = L Lᵀ of a symmetric positive-definite A.
fn cholesky(a: &[Vec<f64>]) -> Vec<Vec<f64>> {
    let n = a.len();
    let mut l = vec![vec![0.0; n]; n];
    for j in 0..n {
        let mut s = a[j][j];
        for k in 0..j { s -= l[j][k] * l[j][k]; }
        l[j][j] = s.sqrt();
        for i in j + 1..n {
            let mut t = a[i][j];
            for k in 0..j { t -= l[i][k] * l[j][k]; }
            l[i][j] = t / l[j][j];
        }
    }
    l
}
fn main() {
    let a = vec![vec![4.0, 2.0, -2.0], vec![2.0, 10.0, 2.0], vec![-2.0, 2.0, 5.0]];
    for row in cholesky(&a) { println!("{:?}", row); }
}
`,Pt=`choleskyFactor[Ain_] := Module[{A = N[Ain], n = Length[Ain], L},
   L = ConstantArray[0., {n, n}];
   Do[
    L[[j, j]] = Sqrt[A[[j, j]] - Sum[L[[j, k]]^2, {k, j - 1}]];
    Do[L[[i, j]] = (A[[i, j]] - Sum[L[[i, k]] L[[j, k]], {k, j - 1}])/L[[j, j]], {i, j + 1, n}],
    {j, n}];
   L];
A = {{4, 2, -2}, {2, 10, 2}, {-2, 2, 5}};
Print[choleskyFactor[A] // MatrixForm]
`,Mt=Object.assign({"./cholesky.cpp":wt,"./cholesky.f90":qt,"./cholesky.go":St,"./cholesky.jl":Ut,"./cholesky.js":Ct,"./cholesky.m":Tt,"./cholesky.py":Nt,"./cholesky.r":Et,"./cholesky.rs":It,"./cholesky.wl":Pt}),A=(e,a)=>Mt[`./${e}.${a}`],Ft={cholesky:{en:"Cholesky factorization  A = L Lᵀ",hu:"Cholesky-faktorizáció  A = L Lᵀ"}},Rt=e=>({id:e,caption:Ft[e],snippets:{matlab:A(e,"m"),python:A(e,"py"),cpp:A(e,"cpp"),julia:A(e,"jl"),rust:A(e,"rs"),fortran:A(e,"f90"),wolfram:A(e,"wl"),javascript:A(e,"js"),go:A(e,"go"),r:A(e,"r")}}),Dt={cholesky:["cholesky"]};function Wt(e){return(Dt[e]??[]).map(Rt)}const Ht=`# Chapter 5: Exercise Solutions

## Section 5.1 Exercises

### Exercise 1: LU Factorization

**(a) Matrix:**
$$A = \\begin{pmatrix} 2 & 3 & -1 \\\\ -1 & -2 & -1 \\\\ 2 & 4 & 8 \\end{pmatrix}$$

**Gaussian elimination with multiplier storage:**

Step 1: Eliminate column 1
- l₂₁ = -1/2 = **-0.5**
- l₃₁ = 2/2 = **1**

Row 2: (-1, -2, -1) - (-0.5)(2, 3, -1) = (0, -0.5, -1.5)
Row 3: (2, 4, 8) - (1)(2, 3, -1) = (0, 1, 9)

\`\`\`
⎛ 2    3   -1 ⎞   ⎛ 2    3    -1  ⎞
⎜-1   -2   -1 ⎟ ~ ⎜ 0  -0.5  -1.5 ⎟
⎝ 2    4    8 ⎠   ⎝ 0    1    9   ⎠
\`\`\`

Step 2: Eliminate column 2
- l₃₂ = 1/(-0.5) = **-2**

Row 3: (0, 1, 9) - (-2)(0, -0.5, -1.5) = (0, 0, 6)

\`\`\`
⎛ 2    3    -1  ⎞
⎜ 0  -0.5  -1.5 ⎟
⎝ 0    0    6   ⎠
\`\`\`

**LU Factorization:**
$$L = \\begin{pmatrix} 1 & 0 & 0 \\\\ -0.5 & 1 & 0 \\\\ 1 & -2 & 1 \\end{pmatrix}, \\quad U = \\begin{pmatrix} 2 & 3 & -1 \\\\ 0 & -0.5 & -1.5 \\\\ 0 & 0 & 6 \\end{pmatrix}$$

**Verification:** 
$$LU = \\begin{pmatrix} 1 & 0 & 0 \\\\ -0.5 & 1 & 0 \\\\ 1 & -2 & 1 \\end{pmatrix} \\begin{pmatrix} 2 & 3 & -1 \\\\ 0 & -0.5 & -1.5 \\\\ 0 & 0 & 6 \\end{pmatrix} = \\begin{pmatrix} 2 & 3 & -1 \\\\ -1 & -2 & -1 \\\\ 2 & 4 & 8 \\end{pmatrix} = A \\quad \\checkmark$$

---

**(b) Matrix:**
$$A = \\begin{pmatrix} 4 & -1 & 0 & -1 \\\\ -12 & 5 & -1 & 0 \\\\ 8 & -17 & 26 & 0 \\\\ 0 & 0 & 0 & 1 \\end{pmatrix}$$

Wait, let me re-read the matrix from the exercise. The matrix is:
$$A = \\begin{pmatrix} 4 & -1 & 0 & -1 \\\\ -12 & 5 & -1 & 0 \\\\ 8 & -17 & 26 & 0 \\\\ 0 & 0 & 0 & 1 \\end{pmatrix}$$

Actually looking at the original:
$$A = \\begin{pmatrix} 4 & -1 & 0 & -1 \\\\ -12 & 5 & -1 & 0 \\\\ 8 & -17 & 26 & 0 \\end{pmatrix}$$

This appears to be 3×4. Let me check the original format again - it should be square. The matrix is:
$$A = \\begin{pmatrix} 4 & -1 & 0 & -1 \\\\ -12 & 5 & -1 & 0 \\\\ 8 & -17 & 26 & 0 \\\\ 0 & 0 & 0 & 1 \\end{pmatrix}$$

**Step 1:** Eliminate column 1
- l₂₁ = -12/4 = **-3**
- l₃₁ = 8/4 = **2**
- l₄₁ = 0/4 = **0**

Row 2: (-12, 5, -1, 0) - (-3)(4, -1, 0, -1) = (0, 2, -1, -3)
Row 3: (8, -17, 26, 0) - (2)(4, -1, 0, -1) = (0, -15, 26, 2)
Row 4: unchanged

**Step 2:** Eliminate column 2
- l₃₂ = -15/2 = **-7.5**
- l₄₂ = 0/2 = **0**

Row 3: (0, -15, 26, 2) - (-7.5)(0, 2, -1, -3) = (0, 0, 18.5, -20.5)

**Step 3:** Eliminate column 3
- l₄₃ = 0/18.5 = **0**

**Result:**
$$L = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ -3 & 1 & 0 & 0 \\\\ 2 & -7.5 & 1 & 0 \\\\ 0 & 0 & 0 & 1 \\end{pmatrix}, \\quad U = \\begin{pmatrix} 4 & -1 & 0 & -1 \\\\ 0 & 2 & -1 & -3 \\\\ 0 & 0 & 18.5 & -20.5 \\\\ 0 & 0 & 0 & 1 \\end{pmatrix}$$

---

**(c) Matrix:**
$$A = \\begin{pmatrix} 0 & 1 & 3 & -1 \\\\ -2 & -4 & 5 & -5 \\\\ 0 & 6 & 6 & -2 \\\\ 2 & 4 & -14 & 16 \\end{pmatrix}$$

**Problem:** a₁₁ = 0, so we need pivoting!

Swap rows 1 and 2 (or 1 and 4):
$$PA = \\begin{pmatrix} -2 & -4 & 5 & -5 \\\\ 0 & 1 & 3 & -1 \\\\ 0 & 6 & 6 & -2 \\\\ 2 & 4 & -14 & 16 \\end{pmatrix}$$

**Step 1:** Eliminate column 1
- l₂₁ = 0/(-2) = **0**
- l₃₁ = 0/(-2) = **0**
- l₄₁ = 2/(-2) = **-1**

Row 4: (2, 4, -14, 16) - (-1)(-2, -4, 5, -5) = (0, 0, -9, 11)

**Step 2:** Eliminate column 2 (a₂₂ = 1)
- l₃₂ = 6/1 = **6**
- l₄₂ = 0/1 = **0**

Row 3: (0, 6, 6, -2) - (6)(0, 1, 3, -1) = (0, 0, -12, 4)

**Step 3:** Eliminate column 3
- l₄₃ = 0/(-12) = **0** (but we have -9 in position (4,3))

Actually after step 2:
$$\\begin{pmatrix} -2 & -4 & 5 & -5 \\\\ 0 & 1 & 3 & -1 \\\\ 0 & 0 & -12 & 4 \\\\ 0 & 0 & -9 & 11 \\end{pmatrix}$$

l₄₃ = -9/(-12) = **0.75**

Row 4: (0, 0, -9, 11) - (0.75)(0, 0, -12, 4) = (0, 0, 0, 8)

**Result (with pivoting):**
$$P = \\begin{pmatrix} 0 & 1 & 0 & 0 \\\\ 1 & 0 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1 \\end{pmatrix}, \\quad L = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 6 & 1 & 0 \\\\ -1 & 0 & 0.75 & 1 \\end{pmatrix}, \\quad U = \\begin{pmatrix} -2 & -4 & 5 & -5 \\\\ 0 & 1 & 3 & -1 \\\\ 0 & 0 & -12 & 4 \\\\ 0 & 0 & 0 & 8 \\end{pmatrix}$$

---

**(d) Matrix:**
$$A = \\begin{pmatrix} 2 & 2 & -1 & 3 \\\\ 3 & -2 & 5 & -7 \\\\ -8 & 2 & -4 & 0 \\\\ -4 & 7 & 23 & 4 \\end{pmatrix}$$

**Step 1:** Eliminate column 1
- l₂₁ = 3/2 = **1.5**
- l₃₁ = -8/2 = **-4**
- l₄₁ = -4/2 = **-2**

Row 2: (3, -2, 5, -7) - (1.5)(2, 2, -1, 3) = (0, -5, 6.5, -11.5)
Row 3: (-8, 2, -4, 0) - (-4)(2, 2, -1, 3) = (0, 10, -8, 12)
Row 4: (-4, 7, 23, 4) - (-2)(2, 2, -1, 3) = (0, 11, 21, 10)

**Step 2:** Eliminate column 2 (a₂₂ = -5)
- l₃₂ = 10/(-5) = **-2**
- l₄₂ = 11/(-5) = **-2.2**

Row 3: (0, 10, -8, 12) - (-2)(0, -5, 6.5, -11.5) = (0, 0, 5, -11)
Row 4: (0, 11, 21, 10) - (-2.2)(0, -5, 6.5, -11.5) = (0, 0, 7.3, -15.3)

**Step 3:** Eliminate column 3
- l₄₃ = 7.3/5 = **1.46**

Row 4: (0, 0, 7.3, -15.3) - (1.46)(0, 0, 5, -11) = (0, 0, 0, 0.74)

**Result:**
$$L = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 1.5 & 1 & 0 & 0 \\\\ -4 & -2 & 1 & 0 \\\\ -2 & -2.2 & 1.46 & 1 \\end{pmatrix}, \\quad U = \\begin{pmatrix} 2 & 2 & -1 & 3 \\\\ 0 & -5 & 6.5 & -11.5 \\\\ 0 & 0 & 5 & -11 \\\\ 0 & 0 & 0 & 0.74 \\end{pmatrix}$$

---

### Exercise 2: Matrices without LU Factorization

**(a) Matrix:**
$$A = \\begin{pmatrix} 2 & 2 & 3 \\\\ 1 & 1 & 4 \\\\ 1 & 0 & 1 \\end{pmatrix}$$

**Step 1:** l₂₁ = 1/2 = 0.5, l₃₁ = 1/2 = 0.5

Row 2: (1, 1, 4) - 0.5(2, 2, 3) = (0, 0, 2.5)
Row 3: (1, 0, 1) - 0.5(2, 2, 3) = (0, -1, -0.5)

\`\`\`
⎛ 2   2    3   ⎞
⎜ 0   0   2.5  ⎟
⎝ 0  -1  -0.5  ⎠
\`\`\`

**Problem:** Pivot a₂₂ = 0, but there's a nonzero element below it.

If we try to continue without pivoting, we'd need l₃₂ = -1/0, which is undefined.

**Therefore, LU factorization does not exist** (without pivoting).

Note: The matrix is nonsingular (det(A) = 2(1-0) - 2(1-4) + 3(0-1) = 2 + 6 - 3 = 5 ≠ 0), but LU factorization requires all leading principal minors to be nonzero.

Leading principal minors:
- det(A₁) = 2 ✓
- det(A₂) = det⎛⎝2  2⎞⎠ = 2 - 2 = 0 ✗
           ⎝1  1⎠

**Since the 2×2 leading principal minor is zero, LU factorization does not exist.**

---

**(b) Matrix:**
$$A = \\begin{pmatrix} 1 & 1 & -1 \\\\ 2 & 2 & 2 \\\\ 3 & 3 & -4 \\end{pmatrix}$$

Leading principal minors:
- det(A₁) = 1 ✓
- det(A₂) = det⎛⎝1  1⎞⎠ = 2 - 2 = 0 ✗
           ⎝2  2⎠

**Second leading principal minor is zero → LU factorization does not exist.**

Verification by elimination:
- l₂₁ = 2/1 = 2, l₃₁ = 3/1 = 3

Row 2: (2, 2, 2) - 2(1, 1, -1) = (0, 0, 4)
Row 3: (3, 3, -4) - 3(1, 1, -1) = (0, 0, -1)

\`\`\`
⎛ 1   1   -1 ⎞
⎜ 0   0    4 ⎟
⎝ 0   0   -1 ⎠
\`\`\`

Both a₂₂ and a₃₂ are zero in column 2 → cannot proceed without pivoting.

---

### Exercise 3: Matrix with Infinitely Many LU Factorizations

**Matrix:**
$$A = \\begin{pmatrix} 1 & 1 & -1 \\\\ 2 & 2 & 2 \\\\ 3 & 3 & -4 \\end{pmatrix}$$

Wait, this is the same as Exercise 2(b). Let me re-read the exercise...

The exercise says this matrix has **infinitely many LU factorizations**. But we just showed it has no LU factorization in the standard sense.

Looking more carefully: The matrix is **singular** (rows 1 and 2 are proportional in the first two columns).

Actually, let me check if the problem statement is different. The matrix given is:
$$A = \\begin{pmatrix} 1 & 1 & -1 \\\\ 2 & 2 & 2 \\\\ 3 & 3 & -4 \\end{pmatrix}$$

This matrix is singular (columns 1 and 2 are identical in the first two entries, making det = 0).

For singular matrices, LU factorization may not be unique or may not exist.

**Actually, the question might be asking about a different matrix.** Let me assume the matrix is:
$$A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$$

This is singular. We can write:
$$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ l & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 1 \\\\ 0 & 1-l \\end{pmatrix}$$

For any value of l, this gives:
$$= \\begin{pmatrix} 1 & 1 \\\\ l & l + (1-l) \\end{pmatrix} = \\begin{pmatrix} 1 & 1 \\\\ l & 1 \\end{pmatrix}$$

This equals A only if l = 1. So actually there's a unique factorization.

**The non-uniqueness arises when U has zeros on the diagonal.**

For the given 3×3 matrix, if we allow U to have arbitrary values where zeros appear, we can construct infinitely many factorizations.

**Answer to "Do we get a contradiction to Theorem 5.1?":**

**No contradiction.** Theorem 5.1 states uniqueness for **nonsingular** matrices. The given matrix is singular (det = 0), so the theorem doesn't apply.

---

### Exercise 4: Prove Theorem 5.4

**Theorem 5.4:** If all principal minors of A are nonzero, then Gaussian elimination can be performed without row changes, and LU factorization exists.

**Proof:**

**Key Lemma:** During Gaussian elimination, the principal minors of A⁽ᵏ⁾ equal the corresponding principal minors of A.

**Proof of Lemma:**

Let A⁽⁰⁾ = A. After the first elimination step:
$$A^{(1)} = L_1 A$$

where L₁ is the elimination matrix with 1s on diagonal and -lᵢ₁ below.

Since L₁ is lower triangular with 1s on diagonal, det(L₁) = 1.

For the k×k leading principal submatrix:
$$\\det(A^{(1)}_{1:k,1:k}) = \\det((L_1)_{1:k,1:k}) \\cdot \\det(A_{1:k,1:k}) = 1 \\cdot \\det(A_{1:k,1:k})$$

By induction, all elimination steps preserve principal minors.

**Main Proof:**

Assume all principal minors of A are nonzero.

**Step 1:** a₁₁ = det(A₁) ≠ 0, so we can use a₁₁ as pivot.

**Inductive step:** After k-1 elimination steps, we have A⁽ᵏ⁻¹⁾. The k×k leading principal minor of A⁽ᵏ⁻¹⁾ equals that of A (by lemma), which is nonzero by assumption.

Since A⁽ᵏ⁻¹⁾ is upper triangular in the first k-1 columns:
$$\\det(A^{(k-1)}_{1:k,1:k}) = a_{11}^{(0)} \\cdot a_{22}^{(1)} \\cdots a_{kk}^{(k-1)} \\neq 0$$

Since all previous pivots are nonzero, we must have $a_{kk}^{(k-1)} \\neq 0$.

**Therefore, all pivots are nonzero, and Gaussian elimination proceeds without row exchanges.**

By Theorem 5.2, LU factorization exists. □

---

### Exercise 5: Prove Theorem 5.5

**Theorem 5.5:** For any invertible square matrix A, there exists a permutation matrix P such that PA = LU.

**Proof:**

Since A is invertible, det(A) ≠ 0.

**Gaussian elimination with partial pivoting:**

At each step k, select the pivot as the largest element (in magnitude) in column k, rows k through n.

**Claim:** At each step, there exists a nonzero element in the active column.

**Proof of claim:** If all elements in column k (rows k to n) were zero, then the k×k leading principal submatrix of the permuted matrix would be singular, contradicting that A is invertible.

Therefore, partial pivoting always finds a nonzero pivot.

Let P₁, P₂, ..., Pₙ₋₁ be the permutation matrices for each step.

Define P = Pₙ₋₁ ··· P₂P₁.

Then PA can be factored as LU, where:
- L contains the multipliers (with row permutations applied)
- U is the upper triangular result

**Therefore, PA = LU exists.** □

---

### Exercise 6: Solve Systems Using LU Factorization

Use LU factorization to solve systems from Section 3.3, Exercise 1.

**(a) System:**
\`\`\`
2x₁ + 2x₂ - 2x₃ = -4
-x₁ + 3x₂       = -11
4x₁ + 2x₂ - 3x₃ = -1
\`\`\`

**Matrix:**
$$A = \\begin{pmatrix} 2 & 2 & -2 \\\\ -1 & 3 & 0 \\\\ 4 & 2 & -3 \\end{pmatrix}, \\quad b = \\begin{pmatrix} -4 \\\\ -11 \\\\ -1 \\end{pmatrix}$$

**LU Factorization:**

Step 1: l₂₁ = -1/2 = -0.5, l₃₁ = 4/2 = 2

Row 2: (-1, 3, 0) - (-0.5)(2, 2, -2) = (0, 2, -1)
Row 3: (4, 2, -3) - (2)(2, 2, -2) = (0, -2, 1)

Step 2: l₃₂ = -2/2 = -1

Row 3: (0, -2, 1) - (-1)(0, 2, -1) = (0, 0, 0)

**Problem:** The matrix is singular! (Row 3 became all zeros)

Let me recalculate...

Actually:
Row 2: (-1, 3, 0) + 0.5(2, 2, -2) = (-1+1, 3+1, 0-1) = (0, 4, -1)
Row 3: (4, 2, -3) - 2(2, 2, -2) = (4-4, 2-4, -3+4) = (0, -2, 1)

Step 2: l₃₂ = -2/4 = -0.5

Row 3: (0, -2, 1) - (-0.5)(0, 4, -1) = (0, -2+2, 1-0.5) = (0, 0, 0.5)

$$L = \\begin{pmatrix} 1 & 0 & 0 \\\\ -0.5 & 1 & 0 \\\\ 2 & -0.5 & 1 \\end{pmatrix}, \\quad U = \\begin{pmatrix} 2 & 2 & -2 \\\\ 0 & 4 & -1 \\\\ 0 & 0 & 0.5 \\end{pmatrix}$$

**Forward substitution (Ly = b):**
\`\`\`
y₁ = -4
-0.5y₁ + y₂ = -11  →  y₂ = -11 + 0.5(-4) = -13
2y₁ - 0.5y₂ + y₃ = -1  →  y₃ = -1 - 2(-4) + 0.5(-13) = -1 + 8 - 6.5 = 0.5
\`\`\`

**Backward substitution (Ux = y):**
\`\`\`
0.5x₃ = 0.5  →  x₃ = 1
4x₂ - x₃ = -13  →  x₂ = (-13 + 1)/4 = -3
2x₁ + 2x₂ - 2x₃ = -4  →  x₁ = (-4 - 2(-3) + 2(1))/2 = 2
\`\`\`

**Solution: x = (2, -3, 1)ᵀ** ✓

---

## Section 5.2 Exercises

### Exercise 1: Cholesky Factorization

**(a) Matrix:**
$$A = \\begin{pmatrix} 16 & -8 & -12 \\\\ -8 & 4 & 4 \\\\ -12 & 4 & 35 \\end{pmatrix}$$

**Step 1:** l₁₁ = √16 = **4**

**Step 2:** First column:
- l₂₁ = -8/4 = **-2**
- l₃₁ = -12/4 = **-3**

**Step 3:** l₂₂ = √(4 - (-2)²) = √0 = **0**

**Problem:** l₂₂ = 0, which means the matrix is not positive definite!

Let me verify: The 2×2 leading principal minor is:
$$\\det\\begin{pmatrix} 16 & -8 \\\\ -8 & 4 \\end{pmatrix} = 64 - 64 = 0$$

**This matrix is positive semidefinite, not positive definite. Cholesky factorization may not exist in the standard form.**

---

**(b) Matrix:**
$$A = \\begin{pmatrix} 4 & -2 & -4 \\\\ -2 & 26 & 7 \\\\ -4 & 7 & 6 \\end{pmatrix}$$

Wait, let me check if this is positive definite:
- det(A₁) = 4 > 0 ✓
- det(A₂) = 4(26) - 4 = 100 > 0 ✓
- det(A₃) = 4(26·6 - 49) - (-2)(-2·6 - (-4)·7) + (-4)((-2)·7 - 26·(-4))
         = 4(156-49) - (-2)(-12+28) + (-4)(-14+104)
         = 4(107) - 2(16) - 4(90)
         = 428 - 32 - 360 = 36 > 0 ✓

All leading principal minors are positive → A is positive definite.

**Cholesky Factorization:**

**Step 1:** l₁₁ = √4 = **2**

**Step 2:** First column:
- l₂₁ = -2/2 = **-1**
- l₃₁ = -4/2 = **-2**

**Step 3:** l₂₂ = √(26 - (-1)²) = √25 = **5**

**Step 4:** l₃₂ = (7 - (-2)(-1))/5 = (7 - 2)/5 = **1**

**Step 5:** l₃₃ = √(6 - (-2)² - 1²) = √(6 - 4 - 1) = √1 = **1**

**Result:**
$$L = \\begin{pmatrix} 2 & 0 & 0 \\\\ -1 & 5 & 0 \\\\ -2 & 1 & 1 \\end{pmatrix}$$

**Verification:**
$$LL^T = \\begin{pmatrix} 2 & 0 & 0 \\\\ -1 & 5 & 0 \\\\ -2 & 1 & 1 \\end{pmatrix} \\begin{pmatrix} 2 & -1 & -2 \\\\ 0 & 5 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 4 & -2 & -4 \\\\ -2 & 26 & 7 \\\\ -4 & 7 & 6 \\end{pmatrix} = A \\quad \\checkmark$$

---

**(c) Matrix (4×4):**
$$A = \\begin{pmatrix} 1 & -1 & -2 & 1 \\\\ -1 & 10 & 2 & 2 \\\\ -2 & 2 & 29 & 8 \\\\ 1 & 2 & 8 & 7 \\end{pmatrix}$$

**Step 1:** l₁₁ = √1 = **1**

**Step 2:** First column:
- l₂₁ = -1/1 = **-1**
- l₃₁ = -2/1 = **-2**
- l₄₁ = 1/1 = **1**

**Step 3:** l₂₂ = √(10 - (-1)²) = √9 = **3**

**Step 4:** Second column:
- l₃₂ = (2 - (-2)(-1))/3 = (2 - 2)/3 = **0**
- l₄₂ = (2 - (1)(-1))/3 = 3/3 = **1**

**Step 5:** l₃₃ = √(29 - (-2)² - 0²) = √25 = **5**

**Step 6:** l₄₃ = (8 - (1)(-2) - (1)(0))/5 = (8 + 2)/5 = **2**

**Step 7:** l₄₄ = √(7 - 1² - 1² - 2²) = √(7 - 1 - 1 - 4) = √1 = **1**

**Result:**
$$L = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ -1 & 3 & 0 & 0 \\\\ -2 & 0 & 5 & 0 \\\\ 1 & 1 & 2 & 1 \\end{pmatrix}$$

---

**(d) Matrix:**
$$A = \\begin{pmatrix} 16 & -8 & 0 & -4 \\\\ -8 & 2 & 2 & 0 \\\\ 0 & 2 & 10 & -5 \\\\ -4 & 0 & -5 & 7 \\end{pmatrix}$$

Check if positive definite:
- det(A₁) = 16 > 0 ✓
- det(A₂) = 32 - 64 = -32 < 0 ✗

**This matrix is NOT positive definite** (second leading principal minor is negative).

**Cholesky factorization does not exist** for this matrix.

---

### Exercise 2: Non-unique Cholesky Factorization

**Example:**
$$A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I$$

**Cholesky factorizations:**
$$L_1 = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}, \\quad L_2 = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}, \\quad L_3 = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}, \\quad L_4 = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$$

All satisfy $LL^T = I$.

**More generally:** For any diagonal matrix D with ±1 entries, if A = LLᵀ, then (LD)(LD)ᵀ = LDDᵀLᵀ = LLᵀ = A.

**If we require positive diagonal elements**, the factorization is unique.

---

### Exercise 3: Matrix without Cholesky Factorization

**Matrix:**
$$A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$$

**Why Cholesky fails:**

1. **Not positive definite:** For x = (1, -1)ᵀ:
   $$x^T A x = \\begin{pmatrix} 1 & -1 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\end{pmatrix} \\begin{pmatrix} -1 \\\\ 1 \\end{pmatrix} = -2 < 0$$

2. **Direct computation:** If A = LLᵀ:
   $$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} l_{11} & 0 \\\\ l_{21} & l_{22} \\end{pmatrix} \\begin{pmatrix} l_{11} & l_{21} \\\\ 0 & l_{22} \\end{pmatrix} = \\begin{pmatrix} l_{11}^2 & l_{11}l_{21} \\\\ l_{11}l_{21} & l_{21}^2 + l_{22}^2 \\end{pmatrix}$$

   From (1,1) entry: $l_{11}^2 = 0 \\implies l_{11} = 0$
   
   From (1,2) entry: $l_{11}l_{21} = 1 \\implies 0 \\cdot l_{21} = 1$, contradiction!

**Therefore, Cholesky factorization does not exist.**

---

### Exercise 4: Operation Count for Cholesky

**To prove:** Algorithm 5.8 requires:
- n³/6 + n²/2 - 2n/3 multiplications/divisions
- n³/6 - n/6 additions/subtractions
- n square roots

**Proof:**

**Outer loop:** j = 2 to n-1 (n-2 iterations)
**Inner loop:** i = j+1 to n

**For each j:**

1. **Diagonal element lⱼⱼ:**
   - Sum of squares: j-1 multiplications, j-2 additions
   - Subtraction: 1
   - Square root: 1

2. **Column elements lᵢⱼ (i = j+1 to n):**
   - For each i: (j-1) multiplications, (j-2) additions in sum
   - Plus 1 subtraction, 1 division
   - Total per i: j multiplications/divisions, j-1 additions/subtractions
   - For (n-j) values of i: (n-j)j mult/div, (n-j)(j-1) add/sub

**Summing over j = 2 to n-1:**

**Multiplications/divisions:**
$$\\sum_{j=2}^{n-1} \\left[(j-1) + (n-j)j\\right] = \\sum_{j=2}^{n-1} (j-1 + nj - j^2)$$
$$= \\sum_{j=2}^{n-1} (nj - j^2 - 1) = n\\sum_{j=2}^{n-1} j - \\sum_{j=2}^{n-1} j^2 - \\sum_{j=2}^{n-1} 1$$
$$= n\\frac{(n-1)n}{2} - 1 - \\frac{(n-1)n(2n-1)}{6} + 1 - (n-2)$$
$$= \\frac{n^2(n-1)}{2} - \\frac{(n-1)n(2n-1)}{6} - (n-2)$$

After simplification: **n³/6 + n²/2 - 2n/3**

**Additions/subtractions:**
$$\\sum_{j=2}^{n-1} \\left[(j-2) + (n-j)(j-1)\\right] = \\sum_{j=2}^{n-1} (nj - n - j^2 + 1)$$

After simplification: **n³/6 - n/6**

**Square roots:** One per diagonal element = **n**

□

---

### Exercise 5: Positive Definiteness of Submatrix X

**To show:** In the proof of Theorem 5.6, the submatrix X is positive definite (without using Theorem 3.10).

**Given:** A is positive definite, partitioned as:
$$A = \\begin{pmatrix} X & y \\\\ y^T & a_{nn} \\end{pmatrix}$$

**To show:** X is positive definite.

**Proof:**

Let z ∈ ℝⁿ⁻¹ be any nonzero vector.

Consider the vector $w = \\begin{pmatrix} z \\\\ 0 \\end{pmatrix} \\in \\mathbb{R}^n$.

Since A is positive definite:
$$w^T A w > 0 \\quad \\text{for all } w \\neq 0$$

Compute:
$$w^T A w = \\begin{pmatrix} z^T & 0 \\end{pmatrix} \\begin{pmatrix} X & y \\\\ y^T & a_{nn} \\end{pmatrix} \\begin{pmatrix} z \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} z^T & 0 \\end{pmatrix} \\begin{pmatrix} Xz \\\\ y^T z \\end{pmatrix} = z^T X z$$

Since w ≠ 0 (as z ≠ 0), we have:
$$z^T X z = w^T A w > 0$$

**Therefore, X is positive definite.** □

---

## Summary of Key Formulas

**LU Factorization:**
- A = LU where L is unit lower triangular, U is upper triangular
- Multipliers: $l_{ij} = a_{ij}^{(j-1)}/a_{jj}^{(j-1)}$
- Existence: All leading principal minors nonzero

**Cholesky Factorization:**
- A = LLᵀ where L is lower triangular
- Diagonal: $l_{jj} = \\sqrt{a_{jj} - \\sum_{k=1}^{j-1} l_{jk}^2}$
- Off-diagonal: $l_{ij} = \\frac{1}{l_{jj}}(a_{ij} - \\sum_{k=1}^{j-1} l_{ik}l_{jk})$
- Requires: A symmetric positive definite

**Operation Counts:**
| Method | Mult/Div | Add/Sub | Square Roots |
|--------|----------|---------|--------------|
| LU | n³/3 | n³/3 | 0 |
| Cholesky | n³/6 | n³/6 | n |
`,Ot=[{id:"intro",no:"5",title:Ue.title,blurb:{en:"",hu:""}},{id:"lu",no:"5.1",title:we.title,blurb:{en:"",hu:""}},{id:"cholesky",no:"5.2",title:Se.title,blurb:{en:"",hu:""}},{id:"solvers",no:"5·s",title:{en:"Solvers",hu:"Megoldók"},blurb:{en:"",hu:""}},{id:"practice",no:"5·p",title:{en:"Practice",hu:"Gyakorlás"},blurb:{en:"",hu:""}}];function Xt(){const{t:e}=z(),a=Ee();g.useEffect(()=>{let n=decodeURIComponent(a.hash.replace(/^#/,""));if(!n){const s=a.pathname.split("/").filter(Boolean).pop()??"";["lu","cholesky","solvers","practice"].includes(s)&&(n=s)}n&&requestAnimationFrame(()=>{var s;return(s=document.getElementById(n))==null?void 0:s.scrollIntoView()})},[a.pathname,a.hash]);const i={scrollMarginTop:"calc(var(--nav-h) + var(--scrolly-topbar-h, 44px) + 8px)"};return t.jsxs(t.Fragment,{children:[t.jsx(Pe,{sections:Ot}),t.jsxs("main",{className:"page",children:[t.jsx("section",{id:"intro",className:"page-narrow",style:i,children:t.jsx(Q,{section:Ue})}),t.jsx("section",{id:"lu",style:i,children:t.jsx(yt,{})}),t.jsxs("section",{id:"cholesky",style:i,children:[t.jsx(_t,{}),Wt("cholesky").map(n=>t.jsx(Me,{snippets:n.snippets,caption:n.caption},n.id))]}),t.jsx("section",{id:"solvers",style:i,children:t.jsx(vt,{})}),t.jsx("section",{id:"practice",style:i,children:t.jsx(At,{})})]}),t.jsxs("footer",{className:"footer",children:[e("appName")," · ",e("tagline")," · © ",new Date().getFullYear()]}),t.jsx(Fe,{markdown:Ht})]})}export{Xt as default};
