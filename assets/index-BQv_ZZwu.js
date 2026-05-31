import{r as k,j as h,i as tn,L as Re,h as an,f as rn}from"./index-HlE1l3Wn.js";import{b as sn,c as on,a as ln,g as hn,n as dn,d as fn}from"./7_4-CWMfsFEh.js";import{M as un,r as cn,d as pn,c as mn}from"./index-Bot7eFma.js";import{C as $n,Q as gn,S as xn}from"./Quiz-Bo5ah2Wt.js";import{m as J,A as _n}from"./proxy-Da-OYMO9.js";import{c as bn,a as kn}from"./create-kN4Ne8c-.js";import{m as _e}from"./linear-Dm4wCrSs.js";import{k as yn}from"./katex-Dc8nsIP1.js";import"./CodeBlock-BVb72H6q.js";import"./bitOr.transform-B8WHv2Rv.js";import"./fraction-DqatKmli.js";const vn=(a,e,n,t)=>{var r,o,s,d;const i=[n,{code:e,...t||{}}];if((o=(r=a==null?void 0:a.services)==null?void 0:r.logger)!=null&&o.forward)return a.services.logger.forward(i,"warn","react-i18next::",!0);W(i[0])&&(i[0]=`react-i18next:: ${i[0]}`),(d=(s=a==null?void 0:a.services)==null?void 0:s.logger)!=null&&d.warn?a.services.logger.warn(...i):console!=null&&console.warn&&console.warn(...i)},be={},de=(a,e,n,t)=>{W(n)&&be[n]||(W(n)&&(be[n]=new Date),vn(a,e,n,t))},Ee=(a,e)=>()=>{if(a.isInitialized)e();else{const n=()=>{setTimeout(()=>{a.off("initialized",n)},0),e()};a.on("initialized",n)}},fe=(a,e,n)=>{a.loadNamespaces(e,Ee(a,n))},ke=(a,e,n,t)=>{if(W(n)&&(n=[n]),a.options.preload&&a.options.preload.indexOf(e)>-1)return fe(a,n,t);n.forEach(i=>{a.options.ns.indexOf(i)<0&&a.options.ns.push(i)}),a.loadLanguages(e,Ee(a,t))},zn=(a,e,n={})=>!e.languages||!e.languages.length?(de(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(a,{lng:n.lng,precheck:(t,i)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,a))return!1}}),W=a=>typeof a=="string",wn=a=>typeof a=="object"&&a!==null,jn=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,qn={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Sn=a=>qn[a],Nn=a=>a.replace(jn,Sn);let ue={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Nn};const Cn=(a={})=>{ue={...ue,...a}},Tn=()=>ue;let Fe;const An=a=>{Fe=a},Ln=()=>Fe,On={type:"3rdParty",init(a){Cn(a.options.react),An(a)}},Kn=k.createContext();class Mn{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Pn=(a,e)=>{const n=k.useRef();return k.useEffect(()=>{n.current=a},[a,e]),n.current},Ie=(a,e,n,t)=>a.getFixedT(e,n,t),Rn=(a,e,n,t)=>k.useCallback(Ie(a,e,n,t),[a,e,n,t]),M=(a,e={})=>{var x,j,q,S;const{i18n:n}=e,{i18n:t,defaultNS:i}=k.useContext(Kn)||{},r=n||t||Ln();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new Mn),!r){de(r,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const N=(C,_)=>W(_)?_:wn(_)&&W(_.defaultValue)?_.defaultValue:Array.isArray(C)?C[C.length-1]:C,T=[N,{},!1];return T.t=N,T.i18n={},T.ready=!1,T}(x=r.options.react)!=null&&x.wait&&de(r,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...Tn(),...r.options.react,...e},{useSuspense:s,keyPrefix:d}=o;let l=i||((j=r.options)==null?void 0:j.defaultNS);l=W(l)?[l]:l||["translation"],(S=(q=r.reportNamespaces).addUsedNamespaces)==null||S.call(q,l);const u=(r.isInitialized||r.initializedStoreOnce)&&l.every(N=>zn(N,r,o)),c=Rn(r,e.lng||null,o.nsMode==="fallback"?l:l[0],d),f=()=>c,p=()=>Ie(r,e.lng||null,o.nsMode==="fallback"?l:l[0],d),[g,w]=k.useState(f);let $=l.join();e.lng&&($=`${e.lng}${$}`);const m=Pn($),z=k.useRef(!0);k.useEffect(()=>{const{bindI18n:N,bindI18nStore:T}=o;z.current=!0,!u&&!s&&(e.lng?ke(r,e.lng,l,()=>{z.current&&w(p)}):fe(r,l,()=>{z.current&&w(p)})),u&&m&&m!==$&&z.current&&w(p);const C=()=>{z.current&&w(p)};return N&&(r==null||r.on(N,C)),T&&(r==null||r.store.on(T,C)),()=>{z.current=!1,r&&N&&(N==null||N.split(" ").forEach(_=>r.off(_,C))),T&&r&&T.split(" ").forEach(_=>r.store.off(_,C))}},[r,$]),k.useEffect(()=>{z.current&&u&&w(f)},[r,d,u]);const y=[g,r,u];if(y.t=g,y.i18n=r,y.ready=u,u||!u&&!s)return y;throw new Promise(N=>{e.lng?ke(r,e.lng,l,()=>N()):fe(r,l,()=>N())})},b=a=>typeof a=="string",U=()=>{let a,e;const n=new Promise((t,i)=>{a=t,e=i});return n.resolve=a,n.reject=e,n},ye=a=>a==null?"":""+a,En=(a,e,n)=>{a.forEach(t=>{e[t]&&(n[t]=e[t])})},Fn=/###/g,ve=a=>a&&a.indexOf("###")>-1?a.replace(Fn,"."):a,ze=a=>!a||b(a),B=(a,e,n)=>{const t=b(e)?e.split("."):e;let i=0;for(;i<t.length-1;){if(ze(a))return{};const r=ve(t[i]);!a[r]&&n&&(a[r]=new n),Object.prototype.hasOwnProperty.call(a,r)?a=a[r]:a={},++i}return ze(a)?{}:{obj:a,k:ve(t[i])}},we=(a,e,n)=>{const{obj:t,k:i}=B(a,e,Object);if(t!==void 0||e.length===1){t[i]=n;return}let r=e[e.length-1],o=e.slice(0,e.length-1),s=B(a,o,Object);for(;s.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),s=B(a,o,Object),s&&s.obj&&typeof s.obj[`${s.k}.${r}`]<"u"&&(s.obj=void 0);s.obj[`${s.k}.${r}`]=n},In=(a,e,n,t)=>{const{obj:i,k:r}=B(a,e,Object);i[r]=i[r]||[],i[r].push(n)},te=(a,e)=>{const{obj:n,k:t}=B(a,e);if(n)return n[t]},Dn=(a,e,n)=>{const t=te(a,n);return t!==void 0?t:te(e,n)},De=(a,e,n)=>{for(const t in e)t!=="__proto__"&&t!=="constructor"&&(t in a?b(a[t])||a[t]instanceof String||b(e[t])||e[t]instanceof String?n&&(a[t]=e[t]):De(a[t],e[t],n):a[t]=e[t]);return a},G=a=>a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Wn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Gn=a=>b(a)?a.replace(/[&<>"'\/]/g,e=>Wn[e]):a;class Hn{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const t=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,t),this.regExpQueue.push(e),t}}const Vn=[" ",",","?","!",";"],Un=new Hn(20),Bn=(a,e,n)=>{e=e||"",n=n||"";const t=Vn.filter(o=>e.indexOf(o)<0&&n.indexOf(o)<0);if(t.length===0)return!0;const i=Un.getRegExp(`(${t.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!i.test(a);if(!r){const o=a.indexOf(n);o>0&&!i.test(a.substring(0,o))&&(r=!0)}return r},ce=function(a,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!a)return;if(a[e])return a[e];const t=e.split(n);let i=a;for(let r=0;r<t.length;){if(!i||typeof i!="object")return;let o,s="";for(let d=r;d<t.length;++d)if(d!==r&&(s+=n),s+=t[d],o=i[s],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&d<t.length-1)continue;r+=d-r+1;break}i=o}return i},ae=a=>a&&a.replace("_","-"),Qn={type:"logger",log(a){this.output("log",a)},warn(a){this.output("warn",a)},error(a){this.output("error",a)},output(a,e){console&&console[a]&&console[a].apply(console,e)}};class re{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||Qn,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,t,i){return i&&!this.debug?null:(b(e[0])&&(e[0]=`${t}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new re(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new re(this.logger,e)}}var E=new re;class oe{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(t=>{this.observers[t]||(this.observers[t]=new Map);const i=this.observers[t].get(n)||0;this.observers[t].set(n,i+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[s,d]=o;for(let l=0;l<d;l++)s(...t)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[s,d]=o;for(let l=0;l<d;l++)s.apply(s,[e,...t])})}}class je extends oe{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let s;e.indexOf(".")>-1?s=e.split("."):(s=[e,n],t&&(Array.isArray(t)?s.push(...t):b(t)&&r?s.push(...t.split(r)):s.push(t)));const d=te(this.data,s);return!d&&!n&&!t&&e.indexOf(".")>-1&&(e=s[0],n=s[1],t=s.slice(2).join(".")),d||!o||!b(t)?d:ce(this.data&&this.data[e]&&this.data[e][n],t,r)}addResource(e,n,t,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let s=[e,n];t&&(s=s.concat(o?t.split(o):t)),e.indexOf(".")>-1&&(s=e.split("."),i=n,n=s[1]),this.addNamespaces(n),we(this.data,s,i),r.silent||this.emit("added",e,n,t,i)}addResources(e,n,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in t)(b(t[r])||Array.isArray(t[r]))&&this.addResource(e,n,r,t[r],{silent:!0});i.silent||this.emit("added",e,n,t)}addResourceBundle(e,n,t,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},s=[e,n];e.indexOf(".")>-1&&(s=e.split("."),i=t,t=n,n=s[1]),this.addNamespaces(n);let d=te(this.data,s)||{};o.skipCopy||(t=JSON.parse(JSON.stringify(t))),i?De(d,t,r):d={...d,...t},we(this.data,s,d),o.silent||this.emit("added",e,n,t)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,n)}:this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var We={processors:{},addPostProcessor(a){this.processors[a.name]=a},handle(a,e,n,t,i){return a.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,n,t,i))}),e}};const qe={};class ie extends oe{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),En(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=E.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const t=this.resolve(e,n);return t&&t.res!==void 0}extractFromKey(e,n){let t=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;t===void 0&&(t=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let r=n.ns||this.options.defaultNS||[];const o=t&&e.indexOf(t)>-1,s=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!Bn(e,t,i);if(o&&!s){const d=e.match(this.interpolator.nestingRegexp);if(d&&d.length>0)return{key:e,namespaces:b(r)?[r]:r};const l=e.split(t);(t!==i||t===i&&this.options.ns.indexOf(l[0])>-1)&&(r=l.shift()),e=l.join(i)}return{key:e,namespaces:b(r)?[r]:r}}translate(e,n,t){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:s}=this.extractFromKey(e[e.length-1],n),d=s[s.length-1],l=n.lng||this.language,u=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(l&&l.toLowerCase()==="cimode"){if(u){const x=n.nsSeparator||this.options.nsSeparator;return i?{res:`${d}${x}${o}`,usedKey:o,exactUsedKey:o,usedLng:l,usedNS:d,usedParams:this.getUsedParamsDetails(n)}:`${d}${x}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:l,usedNS:d,usedParams:this.getUsedParamsDetails(n)}:o}const c=this.resolve(e,n);let f=c&&c.res;const p=c&&c.usedKey||o,g=c&&c.exactUsedKey||o,w=Object.prototype.toString.apply(f),$=["[object Number]","[object Function]","[object RegExp]"],m=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,z=!this.i18nFormat||this.i18nFormat.handleAsObject,y=!b(f)&&typeof f!="boolean"&&typeof f!="number";if(z&&f&&y&&$.indexOf(w)<0&&!(b(m)&&Array.isArray(f))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,f,{...n,ns:s}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(c.res=x,c.usedParams=this.getUsedParamsDetails(n),c):x}if(r){const x=Array.isArray(f),j=x?[]:{},q=x?g:p;for(const S in f)if(Object.prototype.hasOwnProperty.call(f,S)){const N=`${q}${r}${S}`;j[S]=this.translate(N,{...n,joinArrays:!1,ns:s}),j[S]===N&&(j[S]=f[S])}f=j}}else if(z&&b(m)&&Array.isArray(f))f=f.join(m),f&&(f=this.extendTranslation(f,e,n,t));else{let x=!1,j=!1;const q=n.count!==void 0&&!b(n.count),S=ie.hasDefaultValue(n),N=q?this.pluralResolver.getSuffix(l,n.count,n):"",T=n.ordinal&&q?this.pluralResolver.getSuffix(l,n.count,{ordinal:!1}):"",C=q&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),_=C&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${N}`]||n[`defaultValue${T}`]||n.defaultValue;!this.isValidLookup(f)&&S&&(x=!0,f=_),this.isValidLookup(f)||(j=!0,f=o);const L=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&j?void 0:f,F=S&&_!==f&&this.options.updateMissing;if(j||x||F){if(this.logger.log(F?"updateKey":"missingKey",l,d,o,F?_:f),r){const K=this.resolve(o,{...n,keySeparator:!1});K&&K.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const Z=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Z&&Z[0])for(let K=0;K<Z.length;K++)I.push(Z[K]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(n.lng||this.language):I.push(n.lng||this.language);const ge=(K,D,V)=>{const xe=S&&V!==f?V:L;this.options.missingKeyHandler?this.options.missingKeyHandler(K,d,D,xe,F,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(K,d,D,xe,F,n),this.emit("missingKey",K,d,D,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&q?I.forEach(K=>{const D=this.pluralResolver.getSuffixes(K,n);C&&n[`defaultValue${this.options.pluralSeparator}zero`]&&D.indexOf(`${this.options.pluralSeparator}zero`)<0&&D.push(`${this.options.pluralSeparator}zero`),D.forEach(V=>{ge([K],o+V,n[`defaultValue${V}`]||_)})}):ge(I,o,_))}f=this.extendTranslation(f,e,n,c,t),j&&f===o&&this.options.appendNamespaceToMissingKey&&(f=`${d}:${o}`),(j||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${d}:${o}`:o,x?f:void 0):f=this.options.parseMissingKeyHandler(f))}return i?(c.res=f,c.usedParams=this.getUsedParamsDetails(n),c):f}extendTranslation(e,n,t,i,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...t},t.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!t.skipInterpolation){t.interpolation&&this.interpolator.init({...t,interpolation:{...this.options.interpolation,...t.interpolation}});const l=b(e)&&(t&&t.interpolation&&t.interpolation.skipOnVariables!==void 0?t.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(l){const f=e.match(this.interpolator.nestingRegexp);u=f&&f.length}let c=t.replace&&!b(t.replace)?t.replace:t;if(this.options.interpolation.defaultVariables&&(c={...this.options.interpolation.defaultVariables,...c}),e=this.interpolator.interpolate(e,c,t.lng||this.language||i.usedLng,t),l){const f=e.match(this.interpolator.nestingRegexp),p=f&&f.length;u<p&&(t.nest=!1)}!t.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(t.lng=this.language||i.usedLng),t.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var f=arguments.length,p=new Array(f),g=0;g<f;g++)p[g]=arguments[g];return r&&r[0]===p[0]&&!t.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`),null):o.translate(...p,n)},t)),t.interpolation&&this.interpolator.reset()}const s=t.postProcess||this.options.postProcess,d=b(s)?[s]:s;return e!=null&&d&&d.length&&t.applyPostProcessor!==!1&&(e=We.handle(d,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(t)},...t}:t,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t,i,r,o,s;return b(e)&&(e=[e]),e.forEach(d=>{if(this.isValidLookup(t))return;const l=this.extractFromKey(d,n),u=l.key;i=u;let c=l.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const f=n.count!==void 0&&!b(n.count),p=f&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),g=n.context!==void 0&&(b(n.context)||typeof n.context=="number")&&n.context!=="",w=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);c.forEach($=>{this.isValidLookup(t)||(s=$,!qe[`${w[0]}-${$}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&(qe[`${w[0]}-${$}`]=!0,this.logger.warn(`key "${i}" for languages "${w.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(m=>{if(this.isValidLookup(t))return;o=m;const z=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(z,u,m,$,n);else{let x;f&&(x=this.pluralResolver.getSuffix(m,n.count,n));const j=`${this.options.pluralSeparator}zero`,q=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(z.push(u+x),n.ordinal&&x.indexOf(q)===0&&z.push(u+x.replace(q,this.options.pluralSeparator)),p&&z.push(u+j)),g){const S=`${u}${this.options.contextSeparator}${n.context}`;z.push(S),f&&(z.push(S+x),n.ordinal&&x.indexOf(q)===0&&z.push(S+x.replace(q,this.options.pluralSeparator)),p&&z.push(S+j))}}let y;for(;y=z.pop();)this.isValidLookup(t)||(r=y,t=this.getResource(m,$,y,n))}))})}),{res:t,usedKey:i,exactUsedKey:r,usedLng:o,usedNS:s}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,n,t,i):this.resourceStore.getResource(e,n,t,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],t=e.replace&&!b(e.replace);let i=t?e.replace:e;if(t&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!t){i={...i};for(const r of n)delete i[r]}return i}static hasDefaultValue(e){const n="defaultValue";for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n===t.substring(0,n.length)&&e[t]!==void 0)return!0;return!1}}const le=a=>a.charAt(0).toUpperCase()+a.slice(1);class Se{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=E.create("languageUtils")}getScriptPartFromCode(e){if(e=ae(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=ae(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(b(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(e)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let t=e.split("-");return this.options.lowerCaseLng?t=t.map(i=>i.toLowerCase()):t.length===2?(t[0]=t[0].toLowerCase(),t[1]=t[1].toUpperCase(),n.indexOf(t[1].toLowerCase())>-1&&(t[1]=le(t[1].toLowerCase()))):t.length===3&&(t[0]=t[0].toLowerCase(),t[1].length===2&&(t[1]=t[1].toUpperCase()),t[0]!=="sgn"&&t[2].length===2&&(t[2]=t[2].toUpperCase()),n.indexOf(t[1].toLowerCase())>-1&&(t[1]=le(t[1].toLowerCase())),n.indexOf(t[2].toLowerCase())>-1&&(t[2]=le(t[2].toLowerCase()))),t.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(t=>{if(n)return;const i=this.formatLanguageCode(t);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&e.forEach(t=>{if(n)return;const i=this.getLanguagePartFromCode(t);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(r=>{if(r===i)return r;if(!(r.indexOf("-")<0&&i.indexOf("-")<0)&&(r.indexOf("-")>0&&i.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===i||r.indexOf(i)===0&&i.length>1))return r})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),b(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let t=e[n];return t||(t=e[this.getScriptPartFromCode(n)]),t||(t=e[this.formatLanguageCode(n)]),t||(t=e[this.getLanguagePartFromCode(n)]),t||(t=e.default),t||[]}toResolveHierarchy(e,n){const t=this.getFallbackCodes(n||this.options.fallbackLng||[],e),i=[],r=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return b(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):b(e)&&r(this.formatLanguageCode(e)),t.forEach(o=>{i.indexOf(o)<0&&r(this.formatLanguageCode(o))}),i}}let Jn=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Yn={1:a=>+(a>1),2:a=>+(a!=1),3:a=>0,4:a=>a%10==1&&a%100!=11?0:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?1:2,5:a=>a==0?0:a==1?1:a==2?2:a%100>=3&&a%100<=10?3:a%100>=11?4:5,6:a=>a==1?0:a>=2&&a<=4?1:2,7:a=>a==1?0:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?1:2,8:a=>a==1?0:a==2?1:a!=8&&a!=11?2:3,9:a=>+(a>=2),10:a=>a==1?0:a==2?1:a<7?2:a<11?3:4,11:a=>a==1||a==11?0:a==2||a==12?1:a>2&&a<20?2:3,12:a=>+(a%10!=1||a%100==11),13:a=>+(a!==0),14:a=>a==1?0:a==2?1:a==3?2:3,15:a=>a%10==1&&a%100!=11?0:a%10>=2&&(a%100<10||a%100>=20)?1:2,16:a=>a%10==1&&a%100!=11?0:a!==0?1:2,17:a=>a==1||a%10==1&&a%100!=11?0:1,18:a=>a==0?0:a==1?1:2,19:a=>a==1?0:a==0||a%100>1&&a%100<11?1:a%100>10&&a%100<20?2:3,20:a=>a==1?0:a==0||a%100>0&&a%100<20?1:2,21:a=>a%100==1?1:a%100==2?2:a%100==3||a%100==4?3:0,22:a=>a==1?0:a==2?1:(a<0||a>10)&&a%10==0?2:3};const Zn=["v1","v2","v3"],Xn=["v4"],Ne={zero:0,one:1,two:2,few:3,many:4,other:5},et=()=>{const a={};return Jn.forEach(e=>{e.lngs.forEach(n=>{a[n]={numbers:e.nr,plurals:Yn[e.fc]}})}),a};class nt{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=E.create("pluralResolver"),(!this.options.compatibilityJSON||Xn.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=et(),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const t=ae(e==="dev"?"en":e),i=n.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:t,type:i});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(t,{type:i})}catch{if(!e.match(/-|_/))return;const d=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(d,n)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=this.getRule(e,n);return this.shouldUseIntlApi()?t&&t.resolvedOptions().pluralCategories.length>1:t&&t.numbers.length>1}getPluralFormsOfKey(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,t).map(i=>`${n}${i}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=this.getRule(e,n);return t?this.shouldUseIntlApi()?t.resolvedOptions().pluralCategories.sort((i,r)=>Ne[i]-Ne[r]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):t.numbers.map(i=>this.getSuffix(e,i,n)):[]}getSuffix(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,t);return i?this.shouldUseIntlApi()?`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,n){const t=e.noAbs?e.plurals(n):e.plurals(Math.abs(n));let i=e.numbers[t];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const r=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&t.toString()?this.options.prepend+t.toString():t.toString()}shouldUseIntlApi(){return!Zn.includes(this.options.compatibilityJSON)}}const Ce=function(a,e,n){let t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=Dn(a,e,n);return!r&&i&&b(n)&&(r=ce(a,n,t),r===void 0&&(r=ce(e,n,t))),r},he=a=>a.replace(/\$/g,"$$$$");class tt{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=E.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(n=>n),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:t,useRawValueToEscape:i,prefix:r,prefixEscaped:o,suffix:s,suffixEscaped:d,formatSeparator:l,unescapeSuffix:u,unescapePrefix:c,nestingPrefix:f,nestingPrefixEscaped:p,nestingSuffix:g,nestingSuffixEscaped:w,nestingOptionsSeparator:$,maxReplaces:m,alwaysFormat:z}=e.interpolation;this.escape=n!==void 0?n:Gn,this.escapeValue=t!==void 0?t:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=r?G(r):o||"{{",this.suffix=s?G(s):d||"}}",this.formatSeparator=l||",",this.unescapePrefix=u?"":c||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=f?G(f):p||G("$t("),this.nestingSuffix=g?G(g):w||G(")"),this.nestingOptionsSeparator=$||",",this.maxReplaces=m||1e3,this.alwaysFormat=z!==void 0?z:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,t)=>n&&n.source===t?(n.lastIndex=0,n):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,t,i){let r,o,s;const d=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},l=p=>{if(p.indexOf(this.formatSeparator)<0){const m=Ce(n,d,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(m,void 0,t,{...i,...n,interpolationkey:p}):m}const g=p.split(this.formatSeparator),w=g.shift().trim(),$=g.join(this.formatSeparator).trim();return this.format(Ce(n,d,w,this.options.keySeparator,this.options.ignoreJSONStructure),$,t,{...i,...n,interpolationkey:w})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,c=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>he(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?he(this.escape(p)):he(p)}].forEach(p=>{for(s=0;r=p.regex.exec(e);){const g=r[1].trim();if(o=l(g),o===void 0)if(typeof u=="function"){const $=u(e,r,i);o=b($)?$:""}else if(i&&Object.prototype.hasOwnProperty.call(i,g))o="";else if(c){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`),o="";else!b(o)&&!this.useRawValueToEscape&&(o=ye(o));const w=p.safeValue(o);if(e=e.replace(r[0],w),c?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=r[0].length):p.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),e}nest(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,r,o;const s=(d,l)=>{const u=this.nestingOptionsSeparator;if(d.indexOf(u)<0)return d;const c=d.split(new RegExp(`${u}[ ]*{`));let f=`{${c[1]}`;d=c[0],f=this.interpolate(f,o);const p=f.match(/'/g),g=f.match(/"/g);(p&&p.length%2===0&&!g||g.length%2!==0)&&(f=f.replace(/'/g,'"'));try{o=JSON.parse(f),l&&(o={...l,...o})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${d}`,w),`${d}${u}${f}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,d};for(;i=this.nestingRegexp.exec(e);){let d=[];o={...t},o=o.replace&&!b(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let l=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(c=>c.trim());i[1]=u.shift(),d=u,l=!0}if(r=n(s.call(this,i[1].trim(),o),o),r&&i[0]===e&&!b(r))return r;b(r)||(r=ye(r)),r||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),r=""),l&&(r=d.reduce((u,c)=>this.format(u,c,t.lng,{...t,interpolationkey:i[1].trim()}),r.trim())),e=e.replace(i[0],r),this.regexp.lastIndex=0}return e}}const at=a=>{let e=a.toLowerCase().trim();const n={};if(a.indexOf("(")>-1){const t=a.split("(");e=t[0].toLowerCase().trim();const i=t[1].substring(0,t[1].length-1);e==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(o=>{if(o){const[s,...d]=o.split(":"),l=d.join(":").trim().replace(/^'+|'+$/g,""),u=s.trim();n[u]||(n[u]=l),l==="false"&&(n[u]=!1),l==="true"&&(n[u]=!0),isNaN(l)||(n[u]=parseInt(l,10))}})}return{formatName:e,formatOptions:n}},H=a=>{const e={};return(n,t,i)=>{let r=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(r={...r,[i.interpolationkey]:void 0});const o=t+JSON.stringify(r);let s=e[o];return s||(s=a(ae(t),i),e[o]=s),s(n)}};class rt{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=E.create("formatter"),this.options=e,this.formats={number:H((n,t)=>{const i=new Intl.NumberFormat(n,{...t});return r=>i.format(r)}),currency:H((n,t)=>{const i=new Intl.NumberFormat(n,{...t,style:"currency"});return r=>i.format(r)}),datetime:H((n,t)=>{const i=new Intl.DateTimeFormat(n,{...t});return r=>i.format(r)}),relativetime:H((n,t)=>{const i=new Intl.RelativeTimeFormat(n,{...t});return r=>i.format(r,t.range||"day")}),list:H((n,t)=>{const i=new Intl.ListFormat(n,{...t});return r=>i.format(r)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=H(n)}format(e,n,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(s=>s.indexOf(")")>-1)){const s=r.findIndex(d=>d.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,s)].join(this.formatSeparator)}return r.reduce((s,d)=>{const{formatName:l,formatOptions:u}=at(d);if(this.formats[l]){let c=s;try{const f=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},p=f.locale||f.lng||i.locale||i.lng||t;c=this.formats[l](s,p,{...u,...i,...f})}catch(f){this.logger.warn(f)}return c}else this.logger.warn(`there was no format function for ${l}`);return s},e)}}const it=(a,e)=>{a.pending[e]!==void 0&&(delete a.pending[e],a.pendingCount--)};class st extends oe{constructor(e,n,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=t,this.languageUtils=t.languageUtils,this.options=i,this.logger=E.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(t,i.backend,i)}queueLoad(e,n,t,i){const r={},o={},s={},d={};return e.forEach(l=>{let u=!0;n.forEach(c=>{const f=`${l}|${c}`;!t.reload&&this.store.hasResourceBundle(l,c)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?o[f]===void 0&&(o[f]=!0):(this.state[f]=1,u=!1,o[f]===void 0&&(o[f]=!0),r[f]===void 0&&(r[f]=!0),d[c]===void 0&&(d[c]=!0)))}),u||(s[l]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(d)}}loaded(e,n,t){const i=e.split("|"),r=i[0],o=i[1];n&&this.emit("failedLoading",r,o,n),!n&&t&&this.store.addResourceBundle(r,o,t,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&t&&(this.state[e]=0);const s={};this.queue.forEach(d=>{In(d.loaded,[r],o),it(d,e),n&&d.errors.push(n),d.pendingCount===0&&!d.done&&(Object.keys(d.loaded).forEach(l=>{s[l]||(s[l]={});const u=d.loaded[l];u.length&&u.forEach(c=>{s[l][c]===void 0&&(s[l][c]=!0)})}),d.done=!0,d.errors.length?d.callback(d.errors):d.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(d=>!d.done)}read(e,n,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:t,tried:i,wait:r,callback:o});return}this.readingCalls++;const s=(l,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const c=this.waitingReads.shift();this.read(c.lng,c.ns,c.fcName,c.tried,c.wait,c.callback)}if(l&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,t,i+1,r*2,o)},r);return}o(l,u)},d=this.backend[t].bind(this.backend);if(d.length===2){try{const l=d(e,n);l&&typeof l.then=="function"?l.then(u=>s(null,u)).catch(s):s(null,l)}catch(l){s(l)}return}return d(e,n,s)}prepareLoading(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();b(e)&&(e=this.languageUtils.toResolveHierarchy(e)),b(n)&&(n=[n]);const r=this.queueLoad(e,n,t,i);if(!r.toLoad.length)return r.pending.length||i(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,n,t){this.prepareLoading(e,n,{},t)}reload(e,n,t){this.prepareLoading(e,n,{reload:!0},t)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const t=e.split("|"),i=t[0],r=t[1];this.read(i,r,"read",void 0,void 0,(o,s)=>{o&&this.logger.warn(`${n}loading namespace ${r} for language ${i} failed`,o),!o&&s&&this.logger.log(`${n}loaded namespace ${r} for language ${i}`,s),this.loaded(e,o,s)})}saveMissing(e,n,t,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${t}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(t==null||t==="")){if(this.backend&&this.backend.create){const d={...o,isUpdate:r},l=this.backend.create.bind(this.backend);if(l.length<6)try{let u;l.length===5?u=l(e,n,t,i,d):u=l(e,n,t,i),u&&typeof u.then=="function"?u.then(c=>s(null,c)).catch(s):s(null,u)}catch(u){s(u)}else l(e,n,t,i,s,d)}!e||!e[0]||this.store.addResource(e[0],n,t,i)}}}const Te=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:a=>{let e={};if(typeof a[1]=="object"&&(e=a[1]),b(a[1])&&(e.defaultValue=a[1]),b(a[2])&&(e.tDescription=a[2]),typeof a[2]=="object"||typeof a[3]=="object"){const n=a[3]||a[2];Object.keys(n).forEach(t=>{e[t]=n[t]})}return e},interpolation:{escapeValue:!0,format:a=>a,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Ae=a=>(b(a.ns)&&(a.ns=[a.ns]),b(a.fallbackLng)&&(a.fallbackLng=[a.fallbackLng]),b(a.fallbackNS)&&(a.fallbackNS=[a.fallbackNS]),a.supportedLngs&&a.supportedLngs.indexOf("cimode")<0&&(a.supportedLngs=a.supportedLngs.concat(["cimode"])),a),X=()=>{},ot=a=>{Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach(n=>{typeof a[n]=="function"&&(a[n]=a[n].bind(a))})};class Y extends oe{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ae(e),this.services={},this.logger=E,this.modules={external:[]},ot(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(t=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(b(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Te();this.options={...i,...this.options,...Ae(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?E.init(r(this.modules.logger),this.options):E.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=rt);const c=new Se(this.options);this.store=new je(this.options.resources,this.options);const f=this.services;f.logger=E,f.resourceStore=this.store,f.languageUtils=c,f.pluralResolver=new nt(c,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(f.formatter=r(u),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new tt(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new st(r(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(p){for(var g=arguments.length,w=new Array(g>1?g-1:0),$=1;$<g;$++)w[$-1]=arguments[$];e.emit(p,...w)}),this.modules.languageDetector&&(f.languageDetector=r(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=r(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new ie(this.services,this.options),this.translator.on("*",function(p){for(var g=arguments.length,w=new Array(g>1?g-1:0),$=1;$<g;$++)w[$-1]=arguments[$];e.emit(p,...w)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,t||(t=X),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const d=U(),l=()=>{const u=(c,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),d.resolve(f),t(c,f)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?l():setTimeout(l,0),d}loadResources(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X;const i=b(e)?e:this.language;if(typeof e=="function"&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return t();const r=[],o=s=>{if(!s||s==="cimode")return;this.services.languageUtils.toResolveHierarchy(s).forEach(l=>{l!=="cimode"&&r.indexOf(l)<0&&r.push(l)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(d=>o(d)),this.options.preload&&this.options.preload.forEach(s=>o(s)),this.services.backendConnector.load(r,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),t(s)})}else t(null)}reloadResources(e,n,t){const i=U();return typeof e=="function"&&(t=e,e=void 0),typeof n=="function"&&(t=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),t||(t=X),this.services.backendConnector.reload(e,n,r=>{i.resolve(),t(r)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&We.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const t=this.languages[n];if(!(["cimode","dev"].indexOf(t)>-1)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}}changeLanguage(e,n){var t=this;this.isLanguageChangingTo=e;const i=U();this.emit("languageChanging",e);const r=d=>{this.language=d,this.languages=this.services.languageUtils.toResolveHierarchy(d),this.resolvedLanguage=void 0,this.setResolvedLanguage(d)},o=(d,l)=>{l?(r(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,i.resolve(function(){return t.t(...arguments)}),n&&n(d,function(){return t.t(...arguments)})},s=d=>{!e&&!d&&this.services.languageDetector&&(d=[]);const l=b(d)?d:this.services.languageUtils.getBestMatchFromCodes(d);l&&(this.language||r(l),this.translator.language||this.translator.changeLanguage(l),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(l)),this.loadResources(l,u=>{o(u,l)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(e),i}getFixedT(e,n,t){var i=this;const r=function(o,s){let d;if(typeof s!="object"){for(var l=arguments.length,u=new Array(l>2?l-2:0),c=2;c<l;c++)u[c-2]=arguments[c];d=i.options.overloadTranslationOptionHandler([o,s].concat(u))}else d={...s};d.lng=d.lng||r.lng,d.lngs=d.lngs||r.lngs,d.ns=d.ns||r.ns,d.keyPrefix!==""&&(d.keyPrefix=d.keyPrefix||t||r.keyPrefix);const f=i.options.keySeparator||".";let p;return d.keyPrefix&&Array.isArray(o)?p=o.map(g=>`${d.keyPrefix}${f}${g}`):p=d.keyPrefix?`${d.keyPrefix}${f}${o}`:o,i.t(p,d)};return b(e)?r.lng=e:r.lngs=e,r.ns=n,r.keyPrefix=t,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const t=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(t.toLowerCase()==="cimode")return!0;const o=(s,d)=>{const l=this.services.backendConnector.state[`${s}|${d}`];return l===-1||l===0||l===2};if(n.precheck){const s=n.precheck(this,o);if(s!==void 0)return s}return!!(this.hasResourceBundle(t,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(t,e)&&(!i||o(r,e)))}loadNamespaces(e,n){const t=U();return this.options.ns?(b(e)&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{t.resolve(),n&&n(i)}),t):(n&&n(),Promise.resolve())}loadLanguages(e,n){const t=U();b(e)&&(e=[e]);const i=this.options.preload||[],r=e.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=i.concat(r),this.loadResources(o=>{t.resolve(),n&&n(o)}),t):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],t=this.services&&this.services.languageUtils||new Se(Te());return n.indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Y(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X;const t=e.forkResourceStore;t&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},r=new Y(i);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(s=>{r[s]=this[s]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},t&&(r.store=new je(this.store.data,i),r.services.resourceStore=r.store),r.translator=new ie(r.services,i),r.translator.on("*",function(s){for(var d=arguments.length,l=new Array(d>1?d-1:0),u=1;u<d;u++)l[u-1]=arguments[u];r.emit(s,...l)}),r.init(i,n),r.translator.options=i,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const A=Y.createInstance();A.createInstance=Y.createInstance;A.createInstance;A.dir;A.init;A.loadResources;A.reloadResources;A.use;A.changeLanguage;A.getFixedT;A.t;A.exists;A.setDefaultNamespace;A.hasLoadedNamespace;A.loadNamespaces;A.loadLanguages;const lt={title:"NumCalc",subtitle:"Numerical Differentiation & Integration",tagline:"Learn it. Play with it. Test yourself.",footer:"Built for Chapter 7 · Numerical Analysis"},ht={home:"Home",lessons:"Lessons",playground:"Playground",quiz:"Quiz"},dt={toggle:"Toggle theme",light:"Light",dark:"Dark"},ft={label:"Language",en:"English",hu:"Magyar"},ut={heading:"Numerical Calculus, made interactive",lead:"Read the chapter with beautifully typeset math, experiment with the real difference and quadrature formulas, then quiz yourself — in English or Hungarian.",cta_lessons:"Start reading",cta_playground:"Open the playground",card_lessons_title:"Lessons",card_lessons_desc:"Sections 7.1–7.4 with rendered formulas and tables.",card_playground_title:"Playground",card_playground_desc:"Tweak step sizes and methods; watch the error live.",card_quiz_title:"Quiz",card_quiz_desc:"Check your understanding with instant feedback."},ct={title:"Lessons",intro:"Pick a section to read.",loading:"Loading lesson…",error:"Could not load this lesson.",back:"All lessons",read:"Read"},pt={title:"Interactive playground",lead:"Choose a function and a method, then drag the sliders.",tab_diff:"Differentiation",tab_int:"Integration",function:"Function f(x)",custom:"Custom expression",custom_hint:"Use x as the variable, e.g. exp(x) * sin(x)",method:"Method",x0:"Point x₀",h:"Step size h",a:"Lower limit a",b:"Upper limit b",n:"Subintervals n",approx:"Approximation",reference:"Reference (exact)",error:"Absolute error",invalid:"Invalid expression — check your syntax.",methods:{forward:"Forward difference (1st order)",backward:"Backward difference (1st order)",central:"Central difference (2nd order)","five-point":"5-point central (4th order)",second:"Second derivative",trapezoid:"Composite trapezoidal",simpson:"Composite Simpson",gauss2:"Gauss 2-point",gauss3:"Gauss 3-point",gauss4:"Gauss 4-point",gauss5:"Gauss 5-point"},computing_derivative:"Approximating f{order}(x₀)",computing_integral:"Approximating ∫f(x) dx"},mt={title:"Quiz",lead:"Answer the questions — you get instant feedback.",start:"Start quiz",loading:"Loading questions…",question:"Question",of:"of",score:"Score",streak:"Streak",check:"Check",next:"Next",finish:"See results",true:"True",false:"False",your_answer:"Your answer",correct:"Correct!",incorrect:"Not quite.",numeric_placeholder:"Type a number",results_title:"Your results",results_score:"You scored {{correct}} / {{total}}",retry:"Try again",to_lessons:"Review the lessons",topic:"Topic"},$t={app:lt,nav:ht,theme:dt,lang:ft,home:ut,lessons:ct,playground:pt,quiz:mt},gt={title:"NumCalc",subtitle:"Numerikus differenciálás és integrálás",tagline:"Tanuld meg. Játssz vele. Teszteld magad.",footer:"A 7. fejezethez · Numerikus analízis"},xt={home:"Kezdőlap",lessons:"Leckék",playground:"Játéktér",quiz:"Kvíz"},_t={toggle:"Téma váltása",light:"Világos",dark:"Sötét"},bt={label:"Nyelv",en:"English",hu:"Magyar"},kt={heading:"A numerikus analízis, interaktívan",lead:"Olvasd a fejezetet szépen szedett képletekkel, kísérletezz a valódi differencia- és kvadratúraképletekkel, majd teszteld magad — angolul vagy magyarul.",cta_lessons:"Kezdj olvasni",cta_playground:"Nyisd meg a játékteret",card_lessons_title:"Leckék",card_lessons_desc:"7.1–7.4. szakaszok képletekkel és táblázatokkal.",card_playground_title:"Játéktér",card_playground_desc:"Állítsd a lépésközt és a módszert; nézd a hibát élőben.",card_quiz_title:"Kvíz",card_quiz_desc:"Ellenőrizd a tudásod azonnali visszajelzéssel."},yt={title:"Leckék",intro:"Válassz egy szakaszt olvasásra.",loading:"Lecke betöltése…",error:"Nem sikerült betölteni ezt a leckét.",back:"Összes lecke",read:"Olvasás"},vt={title:"Interaktív játéktér",lead:"Válassz függvényt és módszert, majd húzd a csúszkákat.",tab_diff:"Differenciálás",tab_int:"Integrálás",function:"Függvény f(x)",custom:"Egyéni kifejezés",custom_hint:"Használd az x változót, pl. exp(x) * sin(x)",method:"Módszer",x0:"Pont x₀",h:"Lépésköz h",a:"Alsó határ a",b:"Felső határ b",n:"Részintervallumok n",approx:"Közelítés",reference:"Referencia (pontos)",error:"Abszolút hiba",invalid:"Hibás kifejezés — ellenőrizd a szintaxist.",methods:{forward:"Jobb oldali differencia (1. rendű)",backward:"Bal oldali differencia (1. rendű)",central:"Centrális differencia (2. rendű)","five-point":"5-pontos centrális (4. rendű)",second:"Második derivált",trapezoid:"Összetett trapéz",simpson:"Összetett Simpson",gauss2:"Gauss 2-pontos",gauss3:"Gauss 3-pontos",gauss4:"Gauss 4-pontos",gauss5:"Gauss 5-pontos"},computing_derivative:"f{order}(x₀) közelítése",computing_integral:"∫f(x) dx közelítése"},zt={title:"Kvíz",lead:"Válaszolj a kérdésekre — azonnali visszajelzést kapsz.",start:"Kvíz indítása",loading:"Kérdések betöltése…",question:"Kérdés",of:"/",score:"Pontszám",streak:"Sorozat",check:"Ellenőrzés",next:"Következő",finish:"Eredmények",true:"Igaz",false:"Hamis",your_answer:"A válaszod",correct:"Helyes!",incorrect:"Nem egészen.",numeric_placeholder:"Írj be egy számot",results_title:"Az eredményed",results_score:"Eredményed: {{correct}} / {{total}}",retry:"Újra",to_lessons:"Nézd át a leckéket",topic:"Téma"},wt={app:gt,nav:xt,theme:_t,lang:bt,home:kt,lessons:yt,playground:vt,quiz:zt},Ge="numcalc-lang";function jt(){var a;try{const e=localStorage.getItem(Ge);if(e==="en"||e==="hu")return e;if((a=navigator.language)!=null&&a.toLowerCase().startsWith("hu"))return"hu"}catch{}return"en"}A.use(On).init({resources:{en:{translation:$t},hu:{translation:wt}},lng:jt(),fallbackLng:"en",interpolation:{escapeValue:!1}});A.on("languageChanged",a=>{try{localStorage.setItem(Ge,a),document.documentElement.setAttribute("lang",a)}catch{}});document.documentElement.setAttribute("lang",A.language);const qt=`## 7.2. Richardson's extrapolation

Suppose given a value $M$, and let $K(h)$ be its approximation, where $h$ denotes the discretization parameter of the approximation method. We also suppose that the truncation error of the approximation is known, and it has a special form, the error can be given by an even-order Taylor polynomial (or possibly Taylor series) approximation of the form

$$
M = K(h) + a_2 h^2 + a_4 h^4 + a_6 h^6 + \\cdots + a_{2m} h^{2m} + b(h),
\\tag{7.21}
$$

where $|b(h)| \\leq B h^{2m+2}$ with some constant $B > 0$. The error here is second-order in $h$. Now we present a general method to generate higher order approximation formulas using $K(h)$. Consider relation (7.21) corresponding to parameter $h/2$:

$$
M = K(h/2) + a_2 \\frac{h^2}{4} + a_4 \\frac{h^4}{16} + a_6 \\frac{h^6}{64} + \\cdots + a_{2m}\\frac{h^{2m}}{2^{2m}} + b(h/2).
\\tag{7.22}
$$

Multiplying both sides of (7.22) by 4, and subtracting equation (7.21) from it, the second-order term in $h$ cancels out, and solving it for $M$ we get

$$
\\begin{aligned}
M ={}& \\frac{4K(h/2) - K(h)}{3} - \\frac{1}{4}a_4 h^4 - \\frac{5}{16}a_6 h^6 \\\\
&- \\cdots - \\frac{2^{2m-2} - 1}{2^{2m-2}\\cdot 3}a_{2m}h^{2m} + \\frac{4b(h/2) - b(h)}{3}.
\\end{aligned}
\\tag{7.23}
$$

This relation can be written in the form

$$
M = K^{(1)}(h) + a_4^{(1)} h^4 + a_6^{(1)} h^6 + \\cdots + a_{2m}^{(1)} h^{2m} + b^{(1)}(h),
\\tag{7.24}
$$

where

$$
K^{(1)}(h) := \\frac{4K(h/2) - K(h)}{3}, \\qquad b^{(1)}(h) := \\frac{4b(h/2) - b(h)}{3}, \\qquad a_{2i}^{(1)} := \\frac{1 - 4^{i-1}}{4^{i-1}\\cdot 3}a_{2i},
$$

$i = 2, \\ldots, m$. Relation (7.24) yields that formula $K^{(1)}(h)$ approximates $M$ with a fourth-order error in $h$. The previous method can be repeated: we use (7.24) with $h/2$, multiply it by 16, subtract from it equation (7.24), and then solve it for $M$. Then the fourth-order error term cancels out, and we get relation

$$
M = K^{(2)}(h) + a_6^{(2)} h^6 + \\cdots + a_{2m}^{(2)} h^{2m} + b^{(2)}(h),
\\tag{7.25}
$$

where

$$
K^{(2)}(h) := \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}, \\qquad b^{(2)}(h) := \\frac{16b^{(1)}(h/2) - b^{(1)}(h)}{15},
$$

$$
a_{2i}^{(2)} := \\frac{1 - 4^{i-2}}{4^{i-2}\\cdot 15}a_{2i}^{(1)}, \\qquad i = 3, \\ldots, m.
$$

Relation (7.25) means that $K^{(2)}(h)$ approximates $M$ with a sixth-order error in $h$. The generation of new approximation formulas can be continued as

$$
K^{(i+1)}(h) := K^{(i)}(h/2) + \\frac{K^{(i)}(h/2) - K^{(i)}(h)}{4^{i+1} - 1}, \\qquad i = 0, 1, \\ldots, m - 1,
\\tag{7.26}
$$

where $K^{(0)}(h) := K(h)$. This procedure to generate higher order approximation formulas is called **Richardson's extrapolation**. A similar procedure can be applied also in the case when the Taylor expansion of the truncation error contains all powers of $h$ (see Exercises 2 and 3), but later we will use the case presented in this section.

**Example 7.6.** In the previous section we saw that the central difference formula (7.9) is second-order in $h$. Using Taylor's method we get a more precise form of the truncation error. Suppose that $f \\in C^{2m+3}$, and consider the following Taylor's expansion:

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \\cdots + \\frac{f^{(2m+2)}(x_0)}{(2m+2)!}h^{2m+2} + \\frac{f^{(2m+3)}(\\xi_1)}{(2m+3)!}h^{2m+3}.
$$

We apply the previous relation with $-h$ instead of $h$, subtracting the two equations, and solving it for $f'(x_0)$ we get:

$$
\\begin{aligned}
f'(x_0) ={}& \\frac{f(x_0 + h) - f(x_0 - h)}{2h} - \\frac{f'''(x_0)}{3!}h^2 - \\frac{f^{(5)}(x_0)}{5!}h^4 \\\\
&- \\cdots - \\frac{f^{(2m+1)}(x_0)}{(2m+1)!}h^{2m} - \\frac{f^{(2m+3)}(\\xi_1) + f^{(2m+3)}(\\xi_2)}{(2m+3)!}h^{2m+2}.
\\end{aligned}
$$

Hence we have that the central difference satisfies relation (7.21). Therefore, we get a higher order formula using Richardson's extrapolation. We have that formula

$$
\\begin{aligned}
K^{(1)}(h) &= \\frac{4\\,\\dfrac{f(x_0 + h/2) - f(x_0 - h/2)}{h} - \\dfrac{f(x_0 + h) - f(x_0 - h)}{2h}}{3} \\\\
&= \\frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{6h}
\\end{aligned}
$$

has fourth-order error in $h$. We note that this formula is equivalent to (7.11). $\\quad\\square$

### Exercises

**Exercise 1.** Derive a sixth-order approximation formula for the first derivative of a function starting from the central difference formula (7.9) using the Richardson's extrapolation. Apply the formula for approximating the first derivative of $f(x) = e^x \\sin x$ at $x = 0$ using step size $h = 0.25$.

<details class="reveal-solution"><summary>Show solution</summary>

**Richardson extrapolation table (worked example for $f'(0)$ where $f(x) = e^{x^2+x}$):**

$N_1(h) = \\frac{f(h) - f(0)}{h}$ (first-order forward)

$N_2(h) = N_1(h) + \\frac{N_1(h) - N_1(2h)}{2}$ (second-order)

$N_3(h) = N_2(h) + \\frac{N_2(h) - N_2(2h)}{4}$ (third-order)

\`\`\`
h      N₁(h)        N₂(h)        N₃(h)
0.1    1.16278      1.00789      1.00052
0.2    1.32868      1.01578
0.4    1.64158
\`\`\`

**Exact:** 1.0

**Errors:** $N_1(0.1)$: 0.16278 (first-order); $N_2(0.1)$: 0.00789 (second-order); $N_3(0.1)$: 0.00052 (third-order). Each extra Richardson column raises the order by one (here by two, since the central formula has only even powers of $h$).

</details>

**Exercise 2.** Reformulate the Richardson's extrapolation for the case when the Taylor expansion of the truncation error contains all powers of $h$, i.e.,
$$
M = K(h) + a_1 h + a_2 h^2 + \\cdots + a_m h^m + b(x),
$$
where $|b(h)| \\leq B h^{m+1}$ with some $B > 0$.

**Exercise 3.** Reformulate the Richardson's extrapolation for the general case when
$$
M = K(h) + a_1 h^{\\alpha_1} + a_2 h^{\\alpha_2} + \\cdots + a_m h^{\\alpha_m} + b(x),
$$
where $1 \\leq \\alpha_1 < \\alpha_2 < \\cdots < \\alpha_m$ are integers, and $|b(h)| \\leq B h^{\\alpha_m + 1}$ with some $B > 0$.

**Exercise 4.** Derive a third-order approximation of the first derivative using Richardson's extrapolation starting from the first-order difference formula.

<details class="reveal-solution"><summary>Show solution</summary>

Starting from the first-order forward difference $N_1(h) = \\frac{f(x_0+h)-f(x_0)}{h}$ (error $a_1 h + a_2 h^2 + \\cdots$), one Richardson step eliminates the $h$ term:

$N_2(h) = N_1(h) + \\frac{N_1(h) - N_1(2h)}{2}$ (second-order),

and a second step eliminates the $h^2$ term:

$N_3(h) = N_2(h) + \\frac{N_2(h) - N_2(2h)}{4}$ (third-order).

Applied to the worked example $f(x) = e^{x^2+x}$, $f'(0)$:

\`\`\`
h      N₁(h)        N₂(h)        N₃(h)
0.1    1.16278      1.00789      1.00052
0.2    1.32868      1.01578
0.4    1.64158
\`\`\`

with exact value $1.0$; the $N_3(0.1)$ error is $0.00052$, confirming third-order accuracy.

</details>
`,St=`# Chapter 7

## Numerical Differentiation and Integration

In this chapter first we study several methods for numerical differentiation, and consider the Richardson's extrapolation method to obtain higher order methods. Next we define Newton–Cotes formulas and the Gaussian quadrature to approximate definite integrals.
`,Nt=`## 7.2. Richardson-extrapoláció

Tegyük fel, hogy adott egy $M$ mennyiség, amelynek ismerjük egy $K(h)$ közelítését, ahol $h$ a közelítő módszer paramétere (lépésköze), és ismerjük a közelítés képlethibáját is. Feltesszük, hogy a hiba speciális alakú, $h$-szerint páros hatványú véges (vagy végtelen) hatványsorba fejthető:

$$
M = K(h) + a_2 h^2 + a_4 h^4 + a_6 h^6 + \\cdots + a_{2m} h^{2m} + b(h),
\\tag{7.20}
$$

ahol $|b(h)| \\leq B h^{2m+2}$ valamely $B > 0$ konstanssal. Ez a hiba $h$-ban másodrendű. Most egy általános módszert ismertetünk, amelynek segítségével magasabbrendű hibával rendelkező közelítő képletet nyerhetünk a $K(h)$ képletből kiindulva. Írjuk fel $h/2$-re az előző közelítő képletet és a hozzá tartozó hibát:

$$
M = K(h/2) + a_2 \\frac{h^2}{4} + a_4 \\frac{h^4}{16} + a_6 \\frac{h^6}{64} + \\cdots + a_{2m}\\frac{h^{2m}}{2^{2m}} + b(h/2).
\\tag{7.21}
$$

A (7.21) egyenlet 4-szereséből kivonva a (7.20) egyenletet a $h$-ban másodrendű hibatag kiesik. A kapott egyenletből $M$-et kifejezhetjük:

$$
\\begin{aligned}
M ={}& \\frac{4K(h/2) - K(h)}{3} - \\frac{1}{4}a_4 h^4 - \\frac{5}{16}a_6 h^6 \\\\
&- \\cdots - \\frac{2^{2m-2} - 1}{2^{2m-2}\\cdot 3}a_{2m}h^{2m} + \\frac{4b(h/2) - b(h)}{3}.
\\end{aligned}
\\tag{7.22}
$$

Ezt az összefüggést felírhatjuk a következő alakban:

$$
M = K^{(1)}(h) + a_4^{(1)} h^4 + a_6^{(1)} h^6 + \\cdots + a_{2m}^{(1)} h^{2m} + b^{(1)}(h),
\\tag{7.23}
$$

ahol

$$
K^{(1)} \\equiv \\frac{4K(h/2) - K(h)}{3}, \\qquad b^{(1)}(h) \\equiv \\frac{4b(h/2) - b(h)}{3}, \\qquad a_{2i}^{(1)} \\equiv \\frac{1 - 4^{i-1}}{4^{i-1}\\cdot 3}a_{2i},
$$

$i = 2, \\ldots, m$. A (7.23) egyenlet azt mutatja, hogy ha a $K^{(1)}(h)$ képletet $M$ közelítésének tekintjük, akkor a közelítés hibája $h$-ban már negyedrendű. Az előbbi ötletet újra alkalmazhatjuk: A (7.23) egyenletbe $h/2$-t helyettesítünk, majd a kapott egyenlet 16-szorosából kivonjuk a (7.23) egyenletet, és a kapott egyenletet megoldjuk $M$-re. Ekkor a $h^4$ tagok kiesnek, és az

$$
M = K^{(2)}(h) + a_6^{(2)} h^6 + \\cdots + a_{2m}^{(2)} h^{2m} + b^{(2)}(h),
\\tag{7.24}
$$

egyenletet kapjuk, ahol

$$
K^{(2)} \\equiv \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}, \\qquad b^{(2)}(h) \\equiv \\frac{16b^{(1)}(h/2) - b^{(1)}(h)}{15},
$$

$$
a_{2i}^{(2)} \\equiv \\frac{1 - 4^{i-2}}{4^{i-2}\\cdot 15}a_{2i}^{(1)}, \\qquad i = 3, \\ldots, m.
$$

A (7.24) képlet szerint $K^{(2)}(h)$ hatodrendű hibával közelíti $M$-et. Az eljárást folytatva definiálhatjuk a

$$
K^{(i+1)} \\equiv K^{(i)}(h/2) + \\frac{K^{(i)}(h/2) - K^{(i)}(h)}{4^{i+1} - 1}, \\qquad i = 0, 1, \\ldots, m - 1,
\\tag{7.25}
$$

közelítő képleteket, ahol $K^{(0)}(h) \\equiv K(h)$. Az ebben a szakaszban leírt módszert egy közelítő képlet pontosságának növelésére **Richardson-extrapolációnak** nevezzük. A módszer természetesen akkor is alkalmazható, ha a hiba $h$-nak nem csak páros hatványait tartalmazza (lásd a 2. és 3. feladatokat), de a későbbiekben az itt bemutatott esetre lesz majd szükségünk.

**7.6. példa.** Az előző szakaszban láttuk, hogy a (7.9) centrális differencia másodrendben közelíti a függvény első deriváltját. A Taylor-módszert alkalmazva megkaphatjuk a képlethiba pontosabb alakját. Tegyük fel, hogy $f \\in C^{2m+3}$, és induljunk ki a következő Taylor-képletből:

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \\cdots + \\frac{f^{(2m+2)}(x_0)}{(2m+2)!}h^{2m+2} + \\frac{f^{(2m+3)}(\\xi_1)}{(2m+3)!}h^{2m+3}.
$$

Az előző képletet $h$ helyett $-h$-ra felírva és a két egyenletet kivonva, majd $f'(x_0)$-at kifejezve kapjuk:

$$
\\begin{aligned}
f'(x_0) ={}& \\frac{f(x_0 + h) - f(x_0 - h)}{2h} - \\frac{f'''(x_0)}{3!}h^2 - \\frac{f^{(5)}(x_0)}{5!}h^4 \\\\
&- \\cdots - \\frac{f^{(2m+1)}(x_0)}{(2m+1)!}h^{2m} - \\frac{f^{(2m+3)}(\\xi_1) + f^{(2m+3)}(\\xi_2)}{(2m+3)!}h^{2m+2},
\\end{aligned}
$$

azaz a centrális differencia képlete teljesíti a (7.20) összefüggést. Magasabbrendű képletet kaphatunk tehát a centrális differencia képletből kiindulva a Richardson-extrapolációval. Negyedrendű közelítő képlet ad például a

$$
\\begin{aligned}
K^{(1)}(h) &= \\frac{4\\,\\dfrac{f(x_0 + h/2) - f(x_0 - h/2)}{h} - \\dfrac{f(x_0 + h) - f(x_0 - h)}{2h}}{3} \\\\
&= \\frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{6h}
\\end{aligned}
$$

formula. Vegyük észre, hogy a kapott képlet lényegében megegyezik a (7.11) formulával. $\\quad\\square$

### Feladatok

**1. Feladat.** Vezessen le egy hatodrendű képletet első derivált közelítésére a centrális differencia képletből kiindulva Richardson-extrapolációval! Alkalmazza a képletet az $f(x) = e^{x^2 + x}$ függvény deriváltjának közelítésére $x = 0$-ban a $h = 0.25$ lépésközt alkalmazva!

<details class="reveal-solution"><summary>Megoldás</summary>

**Richardson extrapolation table (worked example for $f'(0)$ where $f(x) = e^{x^2+x}$):**

$N_1(h) = \\frac{f(h) - f(0)}{h}$ (first-order forward)

$N_2(h) = N_1(h) + \\frac{N_1(h) - N_1(2h)}{2}$ (second-order)

$N_3(h) = N_2(h) + \\frac{N_2(h) - N_2(2h)}{4}$ (third-order)

\`\`\`
h      N₁(h)        N₂(h)        N₃(h)
0.1    1.16278      1.00789      1.00052
0.2    1.32868      1.01578
0.4    1.64158
\`\`\`

**Exact:** 1.0

**Errors:** $N_1(0.1)$: 0.16278 (first-order); $N_2(0.1)$: 0.00789 (second-order); $N_3(0.1)$: 0.00052 (third-order). Each extra Richardson column raises the order by one (here by two, since the central formula has only even powers of $h$).

</details>

**2. Feladat.** Fogalmazza meg a Richardson-extrapolációt arra az esetre, ha a közelítés képlethibája $h$ minden hatványát tartalmazhatja, azaz
$$
M = K(h) + a_1 h + a_2 h^2 + \\cdots + a_m h^m + b(x)
$$
alakú, ahol $|b(h)| \\leq B h^{m+1}$ valamely $B > 0$-ra!

**3. Feladat.** Fogalmazza meg a Richardson-extrapolációt arra az általános esetre, amikor
$$
M = K(h) + a_1 h^{\\alpha_1} + a_2 h^{\\alpha_2} + \\cdots + a_m h^{\\alpha_m} + b(x)
$$
alakú, ahol $1 \\leq \\alpha_1 < \\alpha_2 < \\cdots < \\alpha_m$ egész számok és $|b(h)| \\leq B h^{\\alpha_m + 1}$ valamely $B > 0$-ra!

**4. Feladat.** Készítsen harmadrendű képletet első derivált közelítésére Richardson-extrapolációval az egyoldali differencia formulából kiindulva!

<details class="reveal-solution"><summary>Megoldás</summary>

Starting from the first-order forward difference $N_1(h) = \\frac{f(x_0+h)-f(x_0)}{h}$ (error $a_1 h + a_2 h^2 + \\cdots$), one Richardson step eliminates the $h$ term:

$N_2(h) = N_1(h) + \\frac{N_1(h) - N_1(2h)}{2}$ (second-order),

and a second step eliminates the $h^2$ term:

$N_3(h) = N_2(h) + \\frac{N_2(h) - N_2(2h)}{4}$ (third-order).

Applied to the worked example $f(x) = e^{x^2+x}$, $f'(0)$:

\`\`\`
h      N₁(h)        N₂(h)        N₃(h)
0.1    1.16278      1.00789      1.00052
0.2    1.32868      1.01578
0.4    1.64158
\`\`\`

with exact value $1.0$; the $N_3(0.1)$ error is $0.00052$, confirming third-order accuracy.

</details>
`,Ct=`# 7. fejezet

## Numerikus differenciálás és integrálás

Ebben a fejezetben először a numerikus differenciálás különböző képleteit vizsgáljuk, majd a Richardson-extrapolációt definiáljuk, mellyel egy adott rendű numerikus módszer képletéből magasabbrendű formulákat nyerhetünk. Ezután határozott integrálok közelítésének két népszerű módszerét tanulmányozzuk: Newton–Cotes- és Gauss-féle kvadratúra formulák. A Gauss-féle kvadratúra formula levezetése kapcsán az ortogonális polinomok elméletének elemeit is ismertetjük.
`,He=[{id:"7.1",slug:"7_1",title:{en:"Numerical differentiation",hu:"Numerikus differenciálás"}},{id:"7.2",slug:"7_2",title:{en:"Richardson's extrapolation",hu:"Richardson-extrapoláció"}},{id:"7.3",slug:"7_3",title:{en:"Newton–Cotes Formulas",hu:"Newton–Cotes-formulák"}},{id:"7.4",slug:"7_4",title:{en:"Gaussian Quadrature",hu:"Gauss-féle kvadratúra formulák"}}],Tt=[{id:"q1",type:"mcq",topic:"7.1",prompt:{en:"What is the truncation error of the first-order forward difference formula f'(x₀) ≈ (f(x₀+h) − f(x₀))/h?",hu:"Mekkora az elsőrendű jobb oldali differencia képlet, f'(x₀) ≈ (f(x₀+h) − f(x₀))/h, képlethibája?"},options:{en:["−(h/2)·f''(ξ)","−(h²/6)·f'''(ξ)","−(h⁴/30)·f⁽⁵⁾(ξ)","−(h²/12)·f''(ξ)"],hu:["−(h/2)·f''(ξ)","−(h²/6)·f'''(ξ)","−(h⁴/30)·f⁽⁵⁾(ξ)","−(h²/12)·f''(ξ)"]},answer:0,explanation:{en:"From the Taylor expansion, f'(x₀) = (f(x₀+h) − f(x₀))/h − (h/2)·f''(ξ), so the error is first-order in h.",hu:"A Taylor-sorból f'(x₀) = (f(x₀+h) − f(x₀))/h − (h/2)·f''(ξ), tehát a hiba h-ban elsőrendű."}},{id:"q2",type:"mcq",topic:"7.1",prompt:{en:"Which formula is the second-order central difference for f'(x₀)?",hu:"Melyik képlet a másodrendű centrális differencia f'(x₀)-ra?"},options:{en:["(f(x₀+h) − f(x₀−h)) / (2h)","(f(x₀+h) − f(x₀)) / h","(f(x₀) − f(x₀−h)) / h","(f(x₀+h) − 2f(x₀) + f(x₀−h)) / h²"],hu:["(f(x₀+h) − f(x₀−h)) / (2h)","(f(x₀+h) − f(x₀)) / h","(f(x₀) − f(x₀−h)) / h","(f(x₀+h) − 2f(x₀) + f(x₀−h)) / h²"]},answer:0,explanation:{en:"The three-point midpoint formula (7.9) uses points x₀±h and is second-order in h.",hu:"A hárompontos felezőpont képlet (7.9) az x₀±h pontokat használja, és h-ban másodrendű."}},{id:"q3",type:"mcq",topic:"7.1",prompt:{en:"The central difference approximation of the second derivative, (f(x₀−h) − 2f(x₀) + f(x₀+h))/h², has error of order:",hu:"A második derivált centrális közelítésének, (f(x₀−h) − 2f(x₀) + f(x₀+h))/h², hibarendje:"},options:{en:["O(h²)","O(h)","O(h⁴)","O(h³)"],hu:["O(h²)","O(h)","O(h⁴)","O(h³)"]},answer:0,explanation:{en:"Formula (7.13) gives an error term −(f⁽⁴⁾(ξ)/12)·h², i.e. second order.",hu:"A (7.13) képlet hibatagja −(f⁽⁴⁾(ξ)/12)·h², azaz másodrendű."}},{id:"q4",type:"truefalse",topic:"7.1",prompt:{en:"Numerical differentiation is an unstable problem: as h → 0 the rounding error can grow without bound.",hu:"A numerikus differenciálás instabil feladat: ha h → 0, a kerekítési hiba korlátlanul nőhet."},answer:!0,explanation:{en:"The rounding term (e₁ − e₀)/h tends to ∞ as h → 0, even though the truncation error shrinks.",hu:"A kerekítési tag (e₁ − e₀)/h a ∞-hez tart, ha h → 0, miközben a képlethiba csökken."}},{id:"q5",type:"mcq",topic:"7.2",prompt:{en:"Richardson's extrapolation applied once to a second-order formula yields a formula of which order?",hu:"A Richardson-extrapolációt egyszer alkalmazva egy másodrendű képletre, milyen rendű képletet kapunk?"},options:{en:["Fourth order","Third order","Second order","Sixth order"],hu:["Negyedrendű","Harmadrendű","Másodrendű","Hatodrendű"]},answer:0,explanation:{en:"Combining K(h) and K(h/2) cancels the h² term, leaving a fourth-order formula K⁽¹⁾(h).",hu:"K(h) és K(h/2) kombinálása kiejti a h² tagot, így negyedrendű K⁽¹⁾(h) képletet ad."}},{id:"q6",type:"mcq",topic:"7.2",prompt:{en:"Richardson's extrapolation assumes the truncation error has which special form?",hu:"A Richardson-extrapoláció szerint a képlethiba milyen speciális alakú?"},options:{en:["Only even powers of h: a₂h² + a₄h⁴ + …","Only odd powers of h","A single term Bh","An arbitrary smooth function with no power structure"],hu:["Csak h páros hatványai: a₂h² + a₄h⁴ + …","Csak h páratlan hatványai","Egyetlen Bh tag","Tetszőleges sima függvény hatványszerkezet nélkül"]},answer:0,explanation:{en:"Relation (7.21): M = K(h) + a₂h² + a₄h⁴ + … — even-order powers, which lets successive terms cancel.",hu:"A (7.21) összefüggés: M = K(h) + a₂h² + a₄h⁴ + … — páros rendű hatványok, így a tagok sorra kiejthetők."}},{id:"q7",type:"mcq",topic:"7.3",prompt:{en:"What is the error term of the basic (elementary) trapezoidal rule on [a, b] with h = b − a?",hu:"Mi az elemi trapézformula hibatagja az [a, b]-n, ahol h = b − a?"},options:{en:["−(h³/12)·f''(ξ)","−(h⁵/90)·f⁽⁴⁾(ξ)","−(h/2)·f''(ξ)","−(h⁴/180)·f⁽⁴⁾(ξ)"],hu:["−(h³/12)·f''(ξ)","−(h⁵/90)·f⁽⁴⁾(ξ)","−(h/2)·f''(ξ)","−(h⁴/180)·f⁽⁴⁾(ξ)"]},answer:0,explanation:{en:"Trapezoidal rule (7.31): ∫ ≈ (h/2)(f(a)+f(b)) − (h³/12)·f''(ξ).",hu:"Trapézformula (7.31): ∫ ≈ (h/2)(f(a)+f(b)) − (h³/12)·f''(ξ)."}},{id:"q8",type:"truefalse",topic:"7.3",prompt:{en:"Simpson's rule integrates all cubic (third-degree) polynomials exactly.",hu:"A Simpson-formula minden harmadfokú polinomot pontosan integrál."},answer:!0,explanation:{en:"Its error involves f⁽⁴⁾, which vanishes for polynomials of degree ≤ 3, so Simpson is exact for cubics.",hu:"Hibája f⁽⁴⁾-t tartalmaz, ami legfeljebb harmadfokú polinomra nulla, így a Simpson pontos köbös polinomokra."}},{id:"q9",type:"mcq",topic:"7.3",prompt:{en:"The composite Simpson's rule has a global error of order:",hu:"Az összetett Simpson-formula globális hibarendje:"},options:{en:["O(h⁴)","O(h²)","O(h⁵)","O(h³)"],hu:["O(h⁴)","O(h²)","O(h⁵)","O(h³)"]},answer:0,explanation:{en:"Formula (7.34): error = −((b−a)h⁴/180)·f⁽⁴⁾(ξ), i.e. fourth order in h.",hu:"A (7.34) képlet: hiba = −((b−a)h⁴/180)·f⁽⁴⁾(ξ), azaz h-ban negyedrendű."}},{id:"q10",type:"numeric",topic:"7.3",prompt:{en:"Using the basic trapezoidal rule (h = 1) for ∫₀¹ x²eˣ dx = (1/2)(0 + e), what value do you get? (4 decimals)",hu:"Az elemi trapézformulával (h = 1) ∫₀¹ x²eˣ dx = (1/2)(0 + e) esetén milyen értéket kapsz? (4 tizedes)"},answer:1.3591,tolerance:.001,explanation:{en:"(1/2)(0 + e) = 1.3591409 (Example 7.7).",hu:"(1/2)(0 + e) = 1.3591409 (7.7. példa)."}},{id:"q11",type:"mcq",topic:"7.4",prompt:{en:"An n-point Gaussian quadrature formula is exact for all polynomials of degree at most:",hu:"Az n pontra felírt Gauss-féle kvadratúra formula minden legfeljebb hányadfokú polinomra pontos?"},options:{en:["2n − 1","n","n + 1","2n + 1"],hu:["2n − 1","n","n + 1","2n + 1"]},answer:0,explanation:{en:"It has 2n free parameters (cᵢ, xᵢ), giving exactness up to degree 2n − 1.",hu:"2n szabad paramétere van (cᵢ, xᵢ), így 2n − 1 fokszámig pontos."}},{id:"q12",type:"mcq",topic:"7.4",prompt:{en:"The mesh points (nodes) of the n-point Gaussian quadrature on [−1, 1] are:",hu:"Az n pontra felírt Gauss-kvadratúra alappontjai a [−1, 1]-en:"},options:{en:["the roots of the nth Legendre polynomial Pₙ","equidistant points a + ih","the roots of the nth Chebyshev polynomial","the endpoints ±1 and the midpoint 0"],hu:["az n-edik Legendre-polinom Pₙ gyökei","ekvidisztáns pontok a + ih","az n-edik Csebisev-polinom gyökei","a végpontok ±1 és a felezőpont 0"]},answer:0,explanation:{en:"Theorem 7.13: the nodes are the roots of the nth Legendre polynomial.",hu:"A 7.13. tétel szerint az alappontok az n-edik Legendre-polinom gyökei."}},{id:"q13",type:"numeric",topic:"7.4",prompt:{en:"The two-point Gauss approximation of ∫₋₁¹ eˣ dx is e^(−√3/3) + e^(√3/3). Enter its value. (4 decimals)",hu:"Az ∫₋₁¹ eˣ dx kétpontos Gauss-közelítése e^(−√3/3) + e^(√3/3). Add meg az értékét! (4 tizedes)"},answer:2.3427,tolerance:.001,explanation:{en:"e^(−√3/3) + e^(√3/3) = 2.3426961 (Example 7.11).",hu:"e^(−√3/3) + e^(√3/3) = 2.3426961 (7.11. példa)."}},{id:"q14",type:"truefalse",topic:"7.4",prompt:{en:"As n → ∞, the error of Gaussian quadrature can decrease exponentially, faster than Newton–Cotes (polynomial speed).",hu:"Ha n → ∞, a Gauss-kvadratúra hibája exponenciálisan csökkenhet, gyorsabban mint a Newton–Cotes (polinomiális sebesség)."},answer:!0,explanation:{en:"The error ~ πf⁽²ⁿ⁾(ξ)/(4ⁿ(2n)!) decays exponentially for bounded derivatives.",hu:"A hiba ~ πf⁽²ⁿ⁾(ξ)/(4ⁿ(2n)!) exponenciálisan csökken korlátos deriváltak esetén."}}],At=He,Ve=Tt,Lt=Object.assign({"../content/lessons/en/7_1.md":fn,"../content/lessons/en/7_2.md":qt,"../content/lessons/en/7_3.md":dn,"../content/lessons/en/7_4.md":hn,"../content/lessons/en/intro.md":St,"../content/lessons/hu/7_1.md":ln,"../content/lessons/hu/7_2.md":Nt,"../content/lessons/hu/7_3.md":on,"../content/lessons/hu/7_4.md":sn,"../content/lessons/hu/intro.md":Ct});function Ot(a,e){return Lt[`../content/lessons/${e}/${a}.md`]}const Kt=async(a,e)=>{const n=At.find(i=>i.id===a||i.slug===a),t=n?Ot(n.slug,e):void 0;if(!n||t===void 0)throw new Error("Lesson not found");return{id:n.id,slug:n.slug,lang:e,title:n.title[e],markdown:t}},Mt=async a=>Ve.map(e=>({id:e.id,type:e.type,topic:e.topic,prompt:e.prompt[a],...e.options?{options:e.options[a]}:{}}));async function Pt(a,e,n){const t=Ve.find(r=>r.id===a);if(!t)throw new Error("Question not found");let i=!1;if(t.type==="numeric"){const r=typeof e=="number"?e:Number(e),o=t.tolerance??1e-6;i=Number.isFinite(r)&&Math.abs(r-t.answer)<=o}else t.type==="truefalse"?i=!!e===t.answer:i=Number(e)===t.answer;return{correct:i,answer:t.answer,explanation:t.explanation[n]}}function se({markdown:a}){return h.jsx("div",{className:"lesson",children:h.jsx(un,{remarkPlugins:[pn,mn],rehypePlugins:[[cn,{throwOnError:!1,trust:!0}]],children:a})})}const Rt={"7_1":[{term:{en:"Numerical differentiation",hu:"Numerikus differenciálás"},def:{en:"Approximating $f'(x_0)$ (or higher derivatives) from a few function values, using difference quotients derived from the limit definition — together with a bound on the truncation error.",hu:"Az $f'(x_0)$ (vagy magasabb deriváltak) közelítése néhány függvényértékből, a határérték-definícióból származó differenciahányadosokkal — a csonkítási hiba korlátjával együtt."}},{term:{en:"Two derivation methods",hu:"Két levezetési módszer"},def:{en:"**Lagrange's method**: differentiate the interpolating polynomial $L_n$ and use $L_n'(x_0)$. **Taylor's method**: expand $f$ around $x_0$ and combine the expansions to cancel unwanted terms. Both give the same formulas with explicit error terms.",hu:"**Lagrange-módszer**: deriváld az $L_n$ interpolációs polinomot, és használd $L_n'(x_0)$-t. **Taylor-módszer**: fejtsd $f$-et $x_0$ körül, és kombináld a sorfejtéseket a nem kívánt tagok kioltására. Mindkettő ugyanazokat a képleteket adja, explicit hibataggal."}},{term:{en:"Forward/backward difference $O(h)$",hu:"Előre/hátra differencia $O(h)$"},def:{en:"$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0)}{h}$ with error $-\\tfrac{h}{2}f''(\\xi)$ — first-order accurate. Backward difference uses $f(x_0)-f(x_0-h)$.",hu:"$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0)}{h}$, hibája $-\\tfrac{h}{2}f''(\\xi)$ — elsőrendben pontos. A hátra differencia $f(x_0)-f(x_0-h)$-t használ."}},{term:{en:"Central difference $O(h^2)$",hu:"Centrális differencia $O(h^2)$"},def:{en:"$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0-h)}{2h}$ with error $-\\tfrac{h^2}{6}f'''(\\xi)$ — second-order accurate, the symmetric terms cancel. More accurate than the one-sided formula for the same $h$.",hu:"$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0-h)}{2h}$, hibája $-\\tfrac{h^2}{6}f'''(\\xi)$ — másodrendben pontos, a szimmetrikus tagok kioltják egymást. Pontosabb az egyoldali képletnél azonos $h$ mellett."}},{term:{en:"Second-derivative formula",hu:"Második derivált képlet"},def:{en:"$f''(x_0)\\approx\\dfrac{f(x_0+h)-2f(x_0)+f(x_0-h)}{h^2}$ with error $-\\tfrac{h^2}{12}f^{(4)}(\\xi)$ — the standard $O(h^2)$ three-point stencil.",hu:"$f''(x_0)\\approx\\dfrac{f(x_0+h)-2f(x_0)+f(x_0-h)}{h^2}$, hibája $-\\tfrac{h^2}{12}f^{(4)}(\\xi)$ — a szokásos $O(h^2)$ hárompontos sablon."}},{term:{en:"Truncation vs round-off (optimal $h$)",hu:"Csonkítás vs kerekítés (optimális $h$)"},def:{en:"Shrinking $h$ reduces the truncation error ($\\propto h^p$) but inflates the round-off error ($\\propto \\varepsilon/h$). There is an optimal $h$ balancing the two; going smaller makes the result worse, not better.",hu:"$h$ csökkentése mérsékli a csonkítási hibát ($\\propto h^p$), de felnagyítja a kerekítési hibát ($\\propto \\varepsilon/h$). Van egy optimális $h$, amely kiegyensúlyozza a kettőt; ennél kisebb $h$ rontja, nem javítja az eredményt."}},{term:{en:"Higher-order (multi-point) formulas",hu:"Magasabb rendű (többpontos) képletek"},def:{en:"Using more mesh points (e.g. the five-point stencil) raises the order of accuracy, at the cost of more function evaluations and more sensitivity to round-off. Derived the same way from $L_n$ or Taylor.",hu:"Több alappont (pl. az ötpontos sablon) növeli a pontossági rendet, több függvénykiértékelés és nagyobb kerekítés-érzékenység árán. Ugyanúgy vezethető le $L_n$-ből vagy Taylorral."}}],"7_2":[{term:{en:"Richardson extrapolation",hu:"Richardson-extrapoláció"},def:{en:"A way to boost the order of an approximation $K(h)\\to K$ by combining values at two step sizes so the leading error term cancels — turning an $O(h^p)$ formula into $O(h^{p+q})$.",hu:"Egy közelítés $K(h)\\to K$ rendjének növelése két lépésközhöz tartozó érték kombinálásával úgy, hogy a vezető hibatag kiessen — egy $O(h^p)$ képletből $O(h^{p+q})$-t csinál."}},{term:{en:"Cancelling the leading error",hu:"A vezető hiba kioltása"},def:{en:"If $K(h)=K+a_p h^p+a_{p+q}h^{p+q}+\\cdots$, then $\\dfrac{2^p K(h/2)-K(h)}{2^p-1}$ eliminates the $h^p$ term, leaving a higher-order approximation.",hu:"Ha $K(h)=K+a_p h^p+a_{p+q}h^{p+q}+\\cdots$, akkor $\\dfrac{2^p K(h/2)-K(h)}{2^p-1}$ kiküszöböli az $h^p$ tagot, magasabb rendű közelítést hagyva."}},{term:{en:"Repeated extrapolation",hu:"Ismételt extrapoláció"},def:{en:"Apply the cancellation recursively, $K^{(j)}(h)$ from $K^{(j-1)}(h)$ and $K^{(j-1)}(h/2)$, removing successive error terms — each level gains accuracy. Builds a triangular table like Romberg integration.",hu:"Alkalmazd a kioltást rekurzívan, $K^{(j)}(h)$-t $K^{(j-1)}(h)$-ból és $K^{(j-1)}(h/2)$-ből, sorra eltávolítva a hibatagokat — minden szint pontosabb. A Romberg-integráláshoz hasonló háromszög táblát épít."}},{term:{en:"Even-power error (central difference)",hu:"Páros hatványú hiba (centrális differencia)"},def:{en:"The central difference error expands in *even* powers $h^2,h^4,\\dots$, so each extrapolation step jumps the order by 2: $O(h^2)\\to O(h^4)\\to O(h^6)$ (Example 7.6).",hu:"A centrális differencia hibája *páros* hatványokban $h^2,h^4,\\dots$ fejlik ki, így minden extrapolációs lépés 2-vel ugrik: $O(h^2)\\to O(h^4)\\to O(h^6)$ (7.6. példa)."}},{term:{en:"General-power variant",hu:"Általános hatványú változat"},def:{en:"When the error contains all powers of $h$ (or general exponents), the same idea works with the appropriate factor $2^{p_j}$ at each step — the method is not limited to even powers.",hu:"Ha a hiba minden $h$-hatványt (vagy általános kitevőket) tartalmaz, ugyanaz az ötlet működik a megfelelő $2^{p_j}$ tényezővel lépésenként — a módszer nem korlátozódik páros hatványokra."}},{term:{en:"Why it works cheaply",hu:"Miért olcsó"},def:{en:"Extrapolation reuses already-computed values $K(h),K(h/2),\\dots$ with simple linear combinations — no new function evaluations beyond the halved-step ones — to get high-order accuracy.",hu:"Az extrapoláció a már kiszámolt $K(h),K(h/2),\\dots$ értékeket használja újra egyszerű lineáris kombinációkkal — a felezett lépésközűeken kívül nincs új függvénykiértékelés — magas rendű pontosságért."}}],"7_3":[{term:{en:"Newton–Cotes formulas",hu:"Newton–Cotes-formulák"},def:{en:"Quadrature rules obtained by integrating the Lagrange interpolant on equidistant nodes: $\\int_a^b f\\approx\\int_a^b L_n=\\sum_i c_i f(x_i)$. The trapezoidal ($n=1$) and Simpson ($n=2$) rules are the first cases.",hu:"Kvadratúraképletek, amelyeket az egyenközű alappontokon vett Lagrange-interpoláns integrálásával kapunk: $\\int_a^b f\\approx\\int_a^b L_n=\\sum_i c_i f(x_i)$. A trapéz ($n=1$) és a Simpson ($n=2$) szabály az első esetek."}},{term:{en:"Degree of precision",hu:"Pontossági fok"},def:{en:"The largest $n$ for which a quadrature is exact on all polynomials of degree $\\le n$ (but not $n+1$). The $(n+1)$-point Newton–Cotes rule has degree $\\ge n$; for **even** $n$ it gains one extra (degree $n+1$).",hu:"A legnagyobb $n$, amelyre a kvadratúra minden legfeljebb $n$-edfokú polinomra pontos (de $n+1$-re nem). Az $(n+1)$-pontos Newton–Cotes szabály foka $\\ge n$; **páros** $n$-re egy extra fokot nyer (foka $n+1$)."}},{term:{en:"Trapezoidal rule",hu:"Trapézszabály"},def:{en:"$\\int_{x_0}^{x_1}f\\approx\\tfrac{h}{2}(f(x_0)+f(x_1))$ with error $-\\tfrac{h^3}{12}f''(\\eta)$ — exact for linear functions (degree of precision 1).",hu:"$\\int_{x_0}^{x_1}f\\approx\\tfrac{h}{2}(f(x_0)+f(x_1))$, hibája $-\\tfrac{h^3}{12}f''(\\eta)$ — lineáris függvényekre pontos (pontossági fok 1)."}},{term:{en:"Composite trapezoidal rule",hu:"Összetett trapézszabály"},def:{en:"Apply the trapezoidal rule on $n$ equal subintervals: $\\tfrac{h}{2}\\big(f_0+2f_1+\\cdots+2f_{n-1}+f_n\\big)$ with total error $-\\tfrac{(b-a)h^2}{12}f''(\\xi)$ — $O(h^2)$.",hu:"A trapézszabály $n$ egyenlő részintervallumon: $\\tfrac{h}{2}\\big(f_0+2f_1+\\cdots+2f_{n-1}+f_n\\big)$, teljes hibája $-\\tfrac{(b-a)h^2}{12}f''(\\xi)$ — $O(h^2)$."}},{term:{en:"Simpson's rule",hu:"Simpson-szabály"},def:{en:"$\\int_{x_0}^{x_2}f\\approx\\tfrac{h}{3}(f_0+4f_1+f_2)$ with error $-\\tfrac{h^5}{90}f^{(4)}(\\xi)$ — exact for cubics (degree of precision 3) despite using only 3 points. The composite form splits $[a,b]$ into $2n$ parts.",hu:"$\\int_{x_0}^{x_2}f\\approx\\tfrac{h}{3}(f_0+4f_1+f_2)$, hibája $-\\tfrac{h^5}{90}f^{(4)}(\\xi)$ — köbös polinomokra pontos (pontossági fok 3), pedig csak 3 pontot használ. Az összetett alak $[a,b]$-t $2n$ részre osztja."}},{term:{en:"Simpson's 3/8 rule",hu:"Simpson-féle 3/8 szabály"},def:{en:"The 4-point ($n=3$) Newton–Cotes rule $\\tfrac{3h}{8}(f_0+3f_1+3f_2+f_3)$, also degree of precision 3. Useful when the subinterval count is not even.",hu:"A 4-pontos ($n=3$) Newton–Cotes szabály $\\tfrac{3h}{8}(f_0+3f_1+3f_2+f_3)$, szintén 3-as pontossági fokú. Akkor hasznos, ha a részintervallumok száma nem páros."}},{term:{en:"Stability of quadrature (Thm 7.9)",hu:"Kvadratúra stabilitása (7.9. tétel)"},def:{en:"If a quadrature is exact for constants and all weights $c_i>0$, then data errors $|y_i-f(x_i)|\\le\\varepsilon$ produce an output error $\\le(b-a)\\varepsilon$ — bounded, so the rule is stable. Negative weights (high-$n$ Newton–Cotes) lose this.",hu:"Ha egy kvadratúra konstansokra pontos és minden súly $c_i>0$, akkor a $|y_i-f(x_i)|\\le\\varepsilon$ adathibák $\\le(b-a)\\varepsilon$ kimeneti hibát adnak — korlátos, tehát a szabály stabil. A negatív súlyok (magas $n$-ű Newton–Cotes) ezt elrontják."}}],"7_4":[{term:{en:"Gaussian quadrature",hu:"Gauss-féle kvadratúra"},def:{en:"$\\int_a^b f\\approx\\sum_{i=1}^n c_i f(x_i)$ where **both** the weights $c_i$ and the nodes $x_i$ are chosen optimally — unlike Newton–Cotes, which fixes equidistant nodes.",hu:"$\\int_a^b f\\approx\\sum_{i=1}^n c_i f(x_i)$, ahol **mind** a $c_i$ súlyokat, **mind** az $x_i$ alappontokat optimálisan választjuk — szemben a Newton–Cotes-szal, amely rögzíti az egyenközű alappontokat."}},{term:{en:"Maximal degree of precision $2n-1$ (Thm 7.10)",hu:"Maximális pontossági fok $2n-1$ (7.10. tétel)"},def:{en:"With $2n$ free parameters ($n$ nodes + $n$ weights), an $n$-point formula can be (and is) exact for all polynomials of degree $\\le 2n-1$ — roughly double the precision of an $n$-point Newton–Cotes rule.",hu:"$2n$ szabad paraméterrel ($n$ alappont + $n$ súly) egy $n$-pontos képlet minden legfeljebb $2n-1$-edfokú polinomra pontos lehet (és az is) — nagyjából kétszer akkora pontosság, mint az $n$-pontos Newton–Cotes."}},{term:{en:"Orthogonal polynomials",hu:"Ortogonális polinomok"},def:{en:"$f,g$ are orthogonal on $[a,b]$ if $\\int_a^b fg=0$. Gram–Schmidt on $1,x,x^2,\\dots$ builds a sequence $P_i$ of degree-$i$ pairwise-orthogonal polynomials — on $[-1,1]$ these are the Legendre polynomials.",hu:"$f,g$ ortogonális $[a,b]$-n, ha $\\int_a^b fg=0$. Az $1,x,x^2,\\dots$-ra alkalmazott Gram–Schmidt egy $i$-edfokú, páronként ortogonális $P_i$ sorozatot épít — $[-1,1]$-en ezek a Legendre-polinomok."}},{term:{en:"Legendre polynomials (Thm 7.12)",hu:"Legendre-polinomok (7.12. tétel)"},def:{en:"$P_0=1,P_1=x,P_2=x^2-\\tfrac13,\\dots$, satisfying the recursion $(i+1)P_{i+1}=(2i+1)xP_i-iP_{i-1}$. Each $P_i$ is orthogonal to every lower-degree polynomial and has $i$ distinct real roots in $(-1,1)$.",hu:"$P_0=1,P_1=x,P_2=x^2-\\tfrac13,\\dots$, a $(i+1)P_{i+1}=(2i+1)xP_i-iP_{i-1}$ rekurzióval. Minden $P_i$ ortogonális minden alacsonyabb fokú polinomra, és $i$ különböző valós gyöke van $(-1,1)$-ben."}},{term:{en:"Nodes = Legendre roots (Thm 7.13)",hu:"Alappontok = Legendre-gyökök (7.13. tétel)"},def:{en:"The optimal $n$ Gaussian nodes on $[-1,1]$ are exactly the roots of $P_n$; the weights $c_i=\\int_{-1}^1 l_i(x)\\,dx$ come from the Lagrange basis at those nodes. This achieves degree of precision $2n-1$.",hu:"Az optimális $n$ Gauss-alappont $[-1,1]$-en pontosan $P_n$ gyökei; a $c_i=\\int_{-1}^1 l_i(x)\\,dx$ súlyok az ezekhez tartozó Lagrange-bázisból jönnek. Ez $2n-1$ pontossági fokot ér el."}},{term:{en:"Interval transformation",hu:"Intervallum-transzformáció"},def:{en:"Tables give nodes/weights on $[-1,1]$; for a general $[a,b]$ substitute $x=\\tfrac{b-a}{2}t+\\tfrac{a+b}{2}$, so $\\int_a^b f\\,dx=\\tfrac{b-a}{2}\\int_{-1}^1 f(\\dots)\\,dt$.",hu:"A táblázatok az alappontokat/súlyokat $[-1,1]$-en adják; általános $[a,b]$-re helyettesítsünk $x=\\tfrac{b-a}{2}t+\\tfrac{a+b}{2}$-t, így $\\int_a^b f\\,dx=\\tfrac{b-a}{2}\\int_{-1}^1 f(\\dots)\\,dt$."}},{term:{en:"Error formula (Thm 7.14)",hu:"Hibaformula (7.14. tétel)"},def:{en:"For $f\\in C^{2n}[-1,1]$ the $n$-point Gauss error is $\\dfrac{2^{2n+1}(n!)^4}{(2n+1)((2n)!)^3}f^{(2n)}(\\xi)$ — vanishes for polynomials up to degree $2n-1$, and shrinks extremely fast with $n$ for smooth $f$.",hu:"$f\\in C^{2n}[-1,1]$ esetén az $n$-pontos Gauss hibája $\\dfrac{2^{2n+1}(n!)^4}{(2n+1)((2n)!)^3}f^{(2n)}(\\xi)$ — eltűnik a $2n-1$ fokig terjedő polinomokra, és sima $f$-re rendkívül gyorsan csökken $n$-nel."}}]},Et={"7_1":[{q:{en:"What is the limit definition of the derivative $f'(x_0)$?",hu:"Mi a $f'(x_0)$ derivált határértéke?"},a:{en:"$f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}$",hu:"$f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}$"}},{q:{en:"Under what condition is the difference quotient $\\frac{f(x_0 + h) - f(x_0)}{h}$ considered a good approximation of $f'(x_0)$?",hu:"Milyen feltétel mellett tekinthető a $\\frac{f(x_0 + h) - f(x_0)}{h}$ különbséghányados a $f'(x_0)$ jó közelítésének?"},a:{en:"When the absolute value of the step size $|h|$ is small.",hu:"Ha a $|h|$ lépésméret abszolút értéke kicsi."}},{q:{en:"In the context of numerical differentiation, what does 'Lagrange's method' involve?",hu:"Mit foglal magában a „Lagrange-módszer” a numerikus differenciálás összefüggésében?"},a:{en:"Approximating a function $f$ with a Lagrange polynomial $L_n(x)$ and using $L'_n(x_0)$ as the derivative estimate.",hu:"$f$ függvény közelítése $L_n(x)$ Lagrange-polinommal, és derivált becslésként a $L'_n(x_0)$ felhasználását."}},{q:{en:"What is the formula for the first-order forward difference approximation of $f'(x_0)$?",hu:"Mi a képlete a $f'(x_0)$ elsőrendű előremenő különbség közelítésének?"},a:{en:"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ where $h > 0$.",hu:"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ ahol $h > 0$."}},{q:{en:"What is the formula for the first-order backward difference approximation of $f'(x_0)$?",hu:"Mi a képlete a $f'(x_0)$ elsőrendű visszafelé különbségközelítésének?"},a:{en:"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ where $h < 0$.",hu:"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ ahol $h < 0$."}},{q:{en:"The first-order difference formula is also known as the _____-point formula.",hu:"Az elsőrendű különbség képlet _____-pont képletként is ismert."},a:{en:"two",hu:"két"}},{q:{en:"What is the specific form of the truncation error for the first-order difference approximation of $f'(x_0)$?",hu:"Mi a csonkítási hiba konkrét formája a $f'(x_0)$ elsőrendű különbségközelítésénél?"},a:{en:"$-\\frac{h}{2}f''(\\xi)$ where $\\xi \\in \\langle x_0, x_0 + h \\rangle$.",hu:"$-\\frac{h}{2}f''(\\xi)$ ahol $\\xi \\in \\langle x_0, x_0 + h \\rangle$."}},{q:{en:"Using Taylor's method, what order of Taylor expansion is required to derive the first-order difference formula for $f'(x_0)$?",hu:"Taylor módszerét használva, milyen Taylor-kiterjesztés szükséges a $f'(x_0)$ elsőrendű különbségi képletének származtatásához?"},a:{en:"First-order Taylor expansion.",hu:"Elsőrendű Taylor bővítés."}},{q:{en:"How does the error of a first-order difference formula change if the step size $h$ decreases by one order of magnitude?",hu:"Hogyan változik egy elsőrendű különbségi képlet hibája, ha a $h$ lépésszám egy nagyságrenddel csökken?"},a:{en:"The error also decreases by one order of magnitude.",hu:"A hiba is egy nagyságrenddel csökken."}},{q:{en:"What general formula is used to derive an $(n+1)$-point difference formula using Lagrange basis polynomials $l_j(x)$?",hu:"Milyen általános képletet használunk a $(n+1)$-pontkülönbség képlet levezetésére a $l_j(x)$ Lagrange-bázispolinomok használatával?"},a:{en:"$f'(x_i) \\approx \\sum_{j=0}^{n} f(x_j)l'_j(x_i)$",hu:"$f'(x_i) \\approx \\sum_{j=0}^{n} f(x_j)l'_j(x_i)$"}},{q:{en:"For an $(n+1)$-point difference formula with equidistant points, what is the order of the error term in terms of $h$?",hu:"Egy $(n+1)$ pontkülönbség képlethez egyenlő távolságra lévő pontokkal, milyen sorrendben van a hibatag a $h$-ben?"},a:{en:"$n$th-order ($O(h^n)$).",hu:"$n$-edik rend ($O(h^n)$)."}},{q:{en:"What are the three mesh points used in the standard three-point difference formulas?",hu:"Mi az a három hálópont, amelyet a standard hárompontos különbségi képletekben használnak?"},a:{en:"$x_0$, $x_0 + h$, and $x_0 + 2h$.",hu:"$x_0$, $x_0 + h$ és $x_0 + 2h$."}},{q:{en:"What is the three-point endpoint formula for $f'(x_0)$?",hu:"Mi a $f'(x_0)$ hárompontos végpont képlete?"},a:{en:"$\\frac{1}{h}(-\\frac{3}{2}f(x_0) + 2f(x_0 + h) - \\frac{1}{2}f(x_0 + 2h))$",hu:"$\\frac{1}{h}(-\\frac{3}{2}f(x_0) + 2f(x_0 + h) - \\frac{1}{2}f(x_0 + 2h))$"}},{q:{en:"What is the order of the truncation error for the three-point endpoint formula?",hu:"Mi a hárompontos végpont képlet csonkítási hibájának sorrendje?"},a:{en:"Second-order ($O(h^2)$).",hu:"Másodrendű ($O(h^2)$)."}},{q:{en:"The three-point midpoint formula is also commonly called the second-order _____ difference formula.",hu:"A hárompontos felezőpont képletet másodrendű _____ különbség képletnek is szokták nevezni."},a:{en:"central",hu:"központi"}},{q:{en:"What is the formula for the three-point midpoint (central difference) approximation of $f'(x_0)$?",hu:"Mi a képlet a $f'(x_0)$ hárompontos felezőpont (középponti különbség) közelítésére?"},a:{en:"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}$",hu:"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}$"}},{q:{en:"What is the truncation error term for the second-order central difference formula?",hu:"Mi a csonkítási hibatag a másodrendű központi különbségi képlethez?"},a:{en:"$-\\frac{h^2}{6}f'''(\\xi)$",hu:"$-\\frac{h^2}{6}f'''(\\xi)$"}},{q:{en:"Between a one-sided second-order formula and a central second-order formula, which generally yields a smaller error for the same $h$?",hu:"Egy egyoldalú másodrendű képlet és egy központi másodrendű képlet között, amely általában kisebb hibát eredményez ugyanazon $h$?"},a:{en:"The central difference formula.",hu:"A központi különbség képlete."}},{q:{en:"Which formula uses the points $x_0 - 2h, x_0 - h, x_0 + h, x_0 + 2h$ to approximate $f'(x_0)$?",hu:"Melyik képlet használja a $x_0 - 2h, x_0 - h, x_0 + h, x_0 + 2h$ pontokat a $f'(x_0)$ közelítésére?"},a:{en:"The five-point central difference (fourth-order) formula.",hu:"Az ötpontos központi különbség (negyedrendű) képlet."}},{q:{en:"What is the order of accuracy for the five-point central difference formula (7.11)?",hu:"Mi a pontossági sorrendje az ötpontos központi különbségi képletnek (7.11)?"},a:{en:"Fourth-order ($O(h^4)$).",hu:"Negyedrendű ($O(h^4)$)."}},{q:{en:"What is the truncation error term for the fourth-order central difference formula?",hu:"Mi a negyedrendű központi különbségi képlet csonkolási hibatagja?"},a:{en:"$\\frac{h^4}{30}f^{(5)}(\\xi)$",hu:"$\\frac{h^4}{30}f^{(5)}(\\xi)$"}},{q:{en:"Which method is described as more convenient than Lagrange's method for deriving approximations of higher-order derivatives?",hu:"Melyik módszert írják le kényelmesebbnek, mint a Lagrange-féle módszert a magasabb rendű deriváltok közelítésének levezetésére?"},a:{en:"Taylor's method.",hu:"Taylor módszere."}},{q:{en:"What is the standard second-order central difference formula for the second derivative $f''(x_0)$?",hu:"Mi a standard másodrendű központi különbségi képlet a $f''(x_0)$ második származékhoz?"},a:{en:"$f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$",hu:"$f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$"}},{q:{en:"What is the truncation error associated with the central difference formula for the second derivative $f''(x_0)$?",hu:"Mi az a csonkolási hiba, amely a $f''(x_0)$ második derivált központi különbségi képletéhez kapcsolódik?"},a:{en:"$-\\frac{h^2}{12}f^{(4)}(\\xi)$",hu:"$-\\frac{h^2}{12}f^{(4)}(\\xi)$"}},{q:{en:"Numerical differentiation is described as an _____ problem because small perturbations in function values can cause large errors in the derivative.",hu:"A numerikus differenciálást _____ problémaként írják le, mivel a függvényértékek kis perturbációi nagy hibákat okozhatnak a deriváltban."},a:{en:"unstable",hu:"instabil"}},{q:{en:"In the error analysis $f'(x_0) - \\frac{f_1 - f_0}{h} = -\\frac{h}{2}f''(\\xi) + \\frac{e_1 - e_0}{h}$, what does the term $\\frac{e_1 - e_0}{h}$ represent?",hu:"A $f'(x_0) - \\frac{f_1 - f_0}{h} = -\\frac{h}{2}f''(\\xi) + \\frac{e_1 - e_0}{h}$ hibaelemzésben mit jelent a $\\frac{e_1 - e_0}{h}$ kifejezés?"},a:{en:"The rounding error.",hu:"A kerekítési hiba."}},{q:{en:"As the step size $h$ approaches zero, what happens to the rounding error in numerical differentiation?",hu:"Mi történik a numerikus differenciálás kerekítési hibájával, ha a $h$ lépésszám megközelíti a nullát?"},a:{en:"It tends toward infinity (or increases significantly).",hu:"A végtelen felé hajlik (vagy jelentősen megnövekszik)."}},{q:{en:"How do truncation error and rounding error behave differently as step size $h$ decreases?",hu:"Hogyan viselkedik eltérően a csonkítási hiba és a kerekítési hiba a $h$ lépésszám csökkenésével?"},a:{en:"Truncation error decreases, while rounding error increases.",hu:"A csonkítási hiba csökken, míg a kerekítési hiba növekszik."}},{q:{en:"Why might a 4-digit arithmetic calculation show an increase in error when $h$ is reduced from 0.01 to 0.001?",hu:"Miért mutathat egy 4 számjegyű aritmetikai számítás hibanövekedést, ha a $h$ értéket 0,01-ről 0,001-re csökkentjük?"},a:{en:"The increase in rounding error outweighs the decrease in truncation error.",hu:"A kerekítési hiba növekedése meghaladja a csonkolási hiba csökkenését."}},{q:{en:"What is the numerical approximation for the partial derivative $\\frac{\\partial f(x_0, y_0)}{\\partial x}$ using a first-order forward difference?",hu:"Mi a numerikus közelítés a $\\frac{\\partial f(x_0, y_0)}{\\partial x}$ parciális deriválthoz elsőrendű forward különbséget használva?"},a:{en:"$\\frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}$",hu:"$\\frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}$"}},{q:{en:"What is the central difference approximation for the second partial derivative $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2}$?",hu:"Mi a központi különbség közelítése a $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2}$ második parciális deriválthoz?"},a:{en:"$\\frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}$",hu:"$\\frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}$"}},{q:{en:"What is the approximation formula for the mixed partial derivative $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x \\partial y}$?",hu:"Mi a közelítési képlete a $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x \\partial y}$ vegyes parciális deriváltnak?"},a:{en:"$\\frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}$",hu:"$\\frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}$"}},{q:{en:"The formula $f'''(x_0) \\approx \\frac{1}{2h^3}(f(x_0 + 2h) - 2f(x_0 + h) + 2f(x_0 - h) - f(x_0 - 2h))$ approximates which derivative?",hu:"A $f'''(x_0) \\approx \\frac{1}{2h^3}(f(x_0 + 2h) - 2f(x_0 + h) + 2f(x_0 - h) - f(x_0 - 2h))$ képlet melyik származékot közelíti meg?"},a:{en:"The third derivative ($f'''(x_0)$).",hu:"A harmadik származék ($f'''(x_0)$)."}},{q:{en:"The formula $f^{(4)}(x_0) \\approx \\frac{1}{h^4}(f(x_0 + 2h) - 4f(x_0 + h) + 6f(x_0) - 4f(x_0 - h) + f(x_0 - 2h))$ approximates which derivative?",hu:"A $f^{(4)}(x_0) \\approx \\frac{1}{h^4}(f(x_0 + 2h) - 4f(x_0 + h) + 6f(x_0) - 4f(x_0 - h) + f(x_0 - 2h))$ képlet melyik származékot közelíti meg?"},a:{en:"The fourth derivative ($f^{(4)}(x_0)$).",hu:"A negyedik derivált ($f^{(4)}(x_0)$)."}},{q:{en:"What is the truncation error order of the first-order forward difference formula?",hu:"Mi a csonkítási hiba sorrendje az elsőrendű előrehaladási különbségi képletnek?"},a:{en:"$O(h)$",hu:"$O(h)$"}},{q:{en:"What is the truncation error order of the central difference formula for the first derivative?",hu:"Mi az első derivált központi különbségi képletének csonkolási hibasorrendje?"},a:{en:"$O(h^2)$",hu:"$O(h^2)$"}},{q:{en:"If $f \\in C^2[a, b]$, what is the maximum order of the Taylor expansion useful for deriving a first-order derivative approximation?",hu:"Ha $f \\in C^2[a, b]$, mekkora az elsőrendű derivált közelítés levezetéséhez használható Taylor-kiterjesztés maximális rendje?"},a:{en:"First-order Taylor expansion with a second-order error term.",hu:"Elsőrendű Taylor-kiterjesztés másodrendű hibataggal."}},{q:{en:"In formula (7.1), why is the limit $x \\to x_0$ taken?",hu:"A (7.1) képletben miért veszik fel a $x \\to x_0$ határértéket?"},a:{en:"To eliminate terms containing $(x-x_0)$ and isolate the derivative $f'(x_0)$ and the error term.",hu:"A $(x-x_0)$-t tartalmazó kifejezések kiküszöbölésére és a $f'(x_0)$ származék és a hibatag elkülönítésére."}},{q:{en:"Term: Two-point difference formula",hu:"Fogalom: Kétpontos különbségi képlet"},a:{en:"Definition: An approximation of the first derivative using values of the function at exactly two points.",hu:"Definíció: Az első derivált közelítése a függvény pontosan két ponton lévő értékeinek felhasználásával."}},{q:{en:"Which formula is obtained by substituting $x_0 \\leftarrow x_0 - 2h$ and $h \\leftarrow -h$ into the three-point endpoint formula at $x_0 + 2h$?",hu:"Melyik képletet kapjuk, ha $x_0 \\leftarrow x_0 - 2h$ és $h \\leftarrow -h$ behelyettesítjük a $x_0 + 2h$ hárompontos végpont képletébe?"},a:{en:"The second-order backward difference formula.",hu:"A másodrendű visszafelé különbségi képlet."}},{q:{en:"In Example 7.1, what happens to the error when $h$ is divided by 10?",hu:"A 7.1. példában mi történik a hibával, ha a $h$-t elosztjuk 10-zel?"},a:{en:"The error is also divided by approximately 10.",hu:"A hiba is el van osztva körülbelül 10-zel."}},{q:{en:"What happens to the error in a second-order formula when $h$ is divided by 10?",hu:"Mi történik a másodrendű képlet hibájával, ha a $h$-t elosztjuk 10-zel?"},a:{en:"The error is divided by 100 ($10^2$).",hu:"A hiba 100-zal van osztva ($10^2$)."}},{q:{en:"What is the primary drawback of using very small values of $h$ in practical computer calculations?",hu:"Mi az elsődleges hátránya annak, ha nagyon kis $h$ értéket használunk a gyakorlati számítógépes számításokban?"},a:{en:"Significant increase in rounding error due to finite precision arithmetic.",hu:"A kerekítési hiba jelentős növekedése a véges precíziós aritmetika miatt."}},{q:{en:"The five-point one-sided formula for $f'(x_0)$ involves points from $x_0$ up to $x_0 +$ _____.",hu:"A $f'(x_0)$ ötpontos egyoldalú képlete $x_0$-től $x_0 +$ _____-ig terjedő pontokat tartalmaz."},a:{en:"$4h$",hu:"$4h$"}},{q:{en:"In the second derivative formula $f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$, the error is proportional to which derivative of $f$?",hu:"A második $f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$ derivált képletben a hiba arányos a $f$ melyik deriváltjával?"},a:{en:"The fourth derivative ($f^{(4)}$).",hu:"A negyedik derivált ($f^{(4)}$)."}},{q:{en:"Formula: $\\frac{\\partial f(x_0, y_0)}{\\partial y} \\approx \\frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h}$",hu:"Képlet: $\\frac{\\partial f(x_0, y_0)}{\\partial y} \\approx \\frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h}$"},a:{en:"This is the first-order forward difference for the partial derivative with respect to $y$.",hu:"Ez a részleges derivált elsőrendű határidős különbsége a $y$-hez képest."}},{q:{en:"Why is the function $g(x) = f(x) + \\frac{1}{n}\\sin(n^2 x)$ used in the text?",hu:"Miért szerepel a szövegben a $g(x) = f(x) + \\frac{1}{n}\\sin(n^2 x)$ függvény?"},a:{en:"To demonstrate the instability of numerical differentiation as $n$ becomes large.",hu:"A numerikus differenciálódás instabilitásának bemutatása, mivel a $n$ nagy lesz."}},{q:{en:"Theorem 2.2 (Intermediate Value Theorem) is used in the derivation of the second derivative error to simplify the sum of which two terms?",hu:"Melyik két tag összegének egyszerűsítésére szolgál a 2.2. Tétel (Köztes érték tétel) a második derivált hiba levezetésében?"},a:{en:"$f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)$",hu:"$f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)$"}},{q:{en:"What does the notation $\\xi \\in \\langle x_0, x_0 + h \\rangle$ indicate?",hu:"Mit jelöl a $\\xi \\in \\langle x_0, x_0 + h \\rangle$ jelölés?"},a:{en:"The value $\\xi$ lies in the interval between $x_0$ and $x_0 + h$.",hu:"A $\\xi$ érték a $x_0$ és $x_0 + h$ közötti intervallumban található."}},{q:{en:"True or False: The three-point endpoint formula and the second-order forward difference formula are the same if $h > 0$.",hu:"Igaz vagy hamis: A hárompontos végpont képlet és a másodrendű előremenő különbség képlete megegyezik, ha $h > 0$."},a:{en:"True",hu:"Igaz"}},{q:{en:"What is the sign of $h$ in a backward difference formula?",hu:"Mi a $h$ jele egy visszafelé fordított különbségi képletben?"},a:{en:"Negative ($h < 0$).",hu:"Negatív ($h < 0$)."}},{q:{en:"If we use a 5-point formula, what is the highest degree of Lagrange polynomial being used?",hu:"Ha 5 pontos képletet használunk, melyik a használt Lagrange-polinom legmagasabb foka?"},a:{en:"Degree 4 ($n=4$).",hu:"4. fokozat ($n=4$)."}},{q:{en:"In Equation (7.14), what is the relationship between $h$ and the term $\\frac{e_1 - e_0}{h}$?",hu:"A (7.14) egyenletben mi a kapcsolat a $h$ és a $\\frac{e_1 - e_0}{h}$ kifejezés között?"},a:{en:"They are inversely proportional; as $h$ gets smaller, the term gets larger.",hu:"Ezek fordítottan arányosak; ahogy a $h$ kisebb lesz, a kifejezés nagyobb lesz."}},{q:{en:"What is the purpose of using 4-digit vs 6-digit arithmetic in Example 7.5?",hu:"Mi a célja a 4-6 számjegyű aritmetika használatának a 7.5. példában?"},a:{en:"To illustrate how limited precision arithmetic exacerbates rounding errors in differentiation.",hu:"Annak szemléltetésére, hogy a korlátozott pontosságú aritmetika hogyan súlyosbítja a kerekítési hibákat a differenciálás során."}},{q:{en:"Which partial derivative formula uses the values at $(x_0+2h, y_0)$, $(x_0+h, y_0)$, and $(x_0, y_0)$?",hu:"Melyik parciális derivált képlet használja a $(x_0+2h, y_0)$, $(x_0+h, y_0)$ és $(x_0, y_0)$ értékeket?"},a:{en:"The second-order forward difference for $\\frac{\\partial^2 f}{\\partial x^2}$.",hu:"A másodrendű előremutató különbség a $\\frac{\\partial^2 f}{\\partial x^2}$ esetében."}},{q:{en:"In Equation (7.5), the product term $\\prod_{j \\ne i} (x_i - x_j)$ for equidistant points $x_j = x_0 + jh$ will result in a power of $h$ equal to _____.",hu:"A (7.5) egyenletben a $\\prod_{j \\ne i} (x_i - x_j)$ szorzatkifejezés egyenlő távolságra lévő $x_j = x_0 + jh$ pontokra a $h$ hatványát eredményezi, amely egyenlő _____."},a:{en:"$n$",hu:"$n$"}},{q:{en:"What is the coefficient of $f(x_0)$ in the fourth-order one-sided difference formula (7.10)?",hu:"Mekkora a $f(x_0)$ együtthatója a negyedrendű egyoldalú különbségi képletben (7.10)?"},a:{en:"$-25$",hu:"$-25$"}},{q:{en:"What is the coefficient of $f(x_0 - h)$ in the fourth-order central difference formula (7.11)?",hu:"Mekkora a $f(x_0 - h)$ együtthatója a negyedrendű központi különbségi képletben (7.11)?"},a:{en:"$-8$ (divided by $12h$).",hu:"$-8$ (osztva: $12h$)."}},{q:{en:"The 'centered difference' is another name for the _____ formula.",hu:"A „központú különbség” a _____ képlet másik neve."},a:{en:"central difference",hu:"központi különbség"}},{q:{en:"Why is it impossible to compute the term $\\frac{d}{dx}(f''(\\xi(x)))$ explicitly in Lagrange's method?",hu:"Miért lehetetlen a $\\frac{d}{dx}(f''(\\xi(x)))$ kifejezést kifejezetten kiszámítani Lagrange módszerében?"},a:{en:"Because the functional form of $\\xi(x)$ is generally unknown.",hu:"Mivel a $\\xi(x)$ funkcionális formája általában ismeretlen."}}],"7_2":[{q:{en:"In the context of Richardson's extrapolation, what does the symbol $M$ represent?",hu:"A Richardson-féle extrapoláció kontextusában mit jelent a $M$ szimbólum?"},a:{en:"The exact value of a quantity being approximated.",hu:"Egy közelítő mennyiség pontos értéke."}},{q:{en:"What does $K(h)$ represent in the equation $M = K(h) + \\text{error}$?",hu:"Mit jelent a $K(h)$ a $M = K(h) + \\text{error}$ egyenletben?"},a:{en:"The numerical approximation of $M$ using step size $h$.",hu:"A $M$ numerikus közelítése $h$ lépésmérettel."}},{q:{en:"What is the standard assumption regarding the form of the truncation error in Richardson's extrapolation?",hu:"Mi a standard feltevés a csonkítási hiba formájára vonatkozóan a Richardson-féle extrapolációban?"},a:{en:"The error can be expanded in an even-order Taylor polynomial or power series in $h$.",hu:"A hiba a $h$ páros rendű Taylor-polinomjával vagy hatványsorral bővíthető."}},{q:{en:"If the truncation error is $a_2 h^2 + a_4 h^4 + \\dots$, what is the order of accuracy of $K(h)$?",hu:"Ha a csonkítási hiba $a_2 h^2 + a_4 h^4 + \\dots$, milyen a $K(h)$ pontossági sorrendje?"},a:{en:"Second-order.",hu:"Másodrendű."}},{q:{en:"How is the discretization parameter $h$ typically modified to perform the first step of Richardson's extrapolation?",hu:"Hogyan módosul a $h$ diszkretizációs paraméter a Richardson-féle extrapoláció első lépésének végrehajtására?"},a:{en:"It is halved to $h/2$.",hu:"Felezve $h/2$-re."}},{q:{en:"Why is $K(h/2)$ calculated in addition to $K(h)$ in Richardson's extrapolation?",hu:"Miért számítják a $K(h/2)$-t a $K(h)$ mellett a Richardson-extrapolációban?"},a:{en:"To combine the two results and eliminate the leading error term.",hu:"A két eredmény kombinálása és a vezető hibatag kiküszöbölése."}},{q:{en:"What factor is $K(h/2)$ multiplied by when eliminating the $h^2$ error term in a second-order approximation?",hu:"Milyen tényezővel szorozzuk meg a $K(h/2)$-t, ha kiküszöböljük a $h^2$ hibatagot egy másodrendű közelítésben?"},a:{en:"4",hu:"4"}},{q:{en:"Formula: The first Richardson extrapolation $K^{(1)}(h)$ for a second-order method.",hu:"Képlet: Az első Richardson-extrapoláció $K^{(1)}(h)$ egy másodrendű módszerhez."},a:{en:"$K^{(1)}(h) = \\frac{4K(h/2) - K(h)}{3}$",hu:"$K^{(1)}(h) = \\frac{4K(h/2) - K(h)}{3}$"}},{q:{en:"What is the order of accuracy of the extrapolated formula $K^{(1)}(h)$?",hu:"Milyen pontosságú a $K^{(1)}(h)$ extrapolált képlet?"},a:{en:"Fourth-order.",hu:"Negyedrendű."}},{q:{en:"In the error series for $K^{(1)}(h)$, which power of $h$ is the leading term?",hu:"A $K^{(1)}(h)$ hibasorában a $h$ melyik teljesítménye a vezető kifejezés?"},a:{en:"$h^4$",hu:"$h^4$"}},{q:{en:"To cancel the $h^4$ error term in $K^{(1)}(h)$, what factor must be applied to $K^{(1)}(h/2)$?",hu:"A $h^4$ hibatag törléséhez a $K^{(1)}(h)$-ben milyen tényezőt kell alkalmazni a $K^{(1)}(h/2)$-re?"},a:{en:"16",hu:"16"}},{q:{en:"Formula: The second Richardson extrapolation $K^{(2)}(h)$ derived from $K^{(1)}$.",hu:"Képlet: A második Richardson-extrapoláció, a $K^{(2)}(h)$, amely a $K^{(1)}$-ből származik."},a:{en:"$K^{(2)}(h) = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$",hu:"$K^{(2)}(h) = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$"}},{q:{en:"What is the order of accuracy of the extrapolated formula $K^{(2)}(h)$?",hu:"Milyen pontosságú a $K^{(2)}(h)$ extrapolált képlet?"},a:{en:"Sixth-order.",hu:"Hatodik rendű."}},{q:{en:"The general recursive formula for Richardson's extrapolation is $K^{(i+1)}(h) = K^{(i)}(h/2) + \\frac{K^{(i)}(h/2) - K^{(i)}(h)}{\\dots}$.",hu:"A Richardson-féle extrapoláció általános rekurzív képlete a $K^{(i+1)}(h) = K^{(i)}(h/2) + \\frac{K^{(i)}(h/2) - K^{(i)}(h)}{\\dots}$."},a:{en:"$4^{i+1} - 1$",hu:"$4^{i+1} - 1$"}},{q:{en:"In the recursive definition of Richardson's extrapolation, what is the value of the base case $K^{(0)}(h)$?",hu:"A Richardson-féle extrapoláció rekurzív definíciójában mekkora a $K^{(0)}(h)$ alapeset értéke?"},a:{en:"$K(h)$",hu:"$K(h)$"}},{q:{en:"Term: Richardson's extrapolation.",hu:"Fogalom: Richardson extrapolációja."},a:{en:"Definition: A procedure used to generate higher-order numerical approximation formulas from lower-order ones by eliminating leading error terms.",hu:"Definíció: Eljárás, amellyel magasabb rendű numerikus közelítési képleteket állítanak elő alacsonyabb rendűekből a vezető hibatagok kiküszöbölésével."}},{q:{en:"Does the central difference formula satisfy the error form requirement for standard Richardson's extrapolation?",hu:"A központi különbségi képlet kielégíti-e a standard Richardson-extrapoláció hibaforma-követelményét?"},a:{en:"Yes, because its Taylor expansion contains only even powers of $h$.",hu:"Igen, mert a Taylor-kiegészítője csak páros $h$-t tartalmaz."}},{q:{en:"What is the leading error term for the central difference formula $\\frac{f(x_0 + h) - f(x_0 - h)}{2h}$?",hu:"Mi a $\\frac{f(x_0 + h) - f(x_0 - h)}{2h}$ központi különbségi képlet vezető hibatagja?"},a:{en:"$- \\frac{f'''(x_0)}{3!}h^2$",hu:"$- \\frac{f'''(x_0)}{3!}h^2$"}},{q:{en:"In the Taylor expansion used for central differences, which powers of $h$ cancel out when subtracting $f(x_0 - h)$ from $f(x_0 + h)$?",hu:"A központi különbségekre használt Taylor-kiterjesztésben a $h$ mely hatványai érvényesülnek, ha kivonjuk a $f(x_0 - h)$-t a $f(x_0 + h)$-ből?"},a:{en:"The even powers ($h^0, h^2, h^4, \\dots$).",hu:"Az egyenletes teljesítmény ($h^0, h^2, h^4, \\dots$)."}},{q:{en:"When applying Richardson's extrapolation to the central difference, the resulting $K^{(1)}(h)$ formula achieves _____ order error.",hu:"Ha Richardson-féle extrapolációt alkalmazunk a központi különbségre, a kapott $K^{(1)}(h)$ képlet _____ sorrendi hibát ér el."},a:{en:"fourth",hu:"negyedik"}},{q:{en:"The 4th-order derivative approximation $K^{(1)}(h)$ equals $\\frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{\\dots}$.",hu:"A $K^{(1)}(h)$ 4. rendű derivált közelítés megegyezik a $\\frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{\\dots}$-vel."},a:{en:"$6h$",hu:"$6h$"}},{q:{en:"If the error expansion of $K(h)$ contains ALL powers of $h$ ($h^1, h^2, h^3, \\dots$), what is the denominator in the first extrapolation step?",hu:"Ha a $K(h)$ hibakiterjesztése tartalmazza a $h$ ÖSSZES hatványát ($h^1, h^2, h^3, \\dots$), mi a nevező az első extrapolációs lépésben?"},a:{en:"1",hu:"1"}},{q:{en:"In the general case where the error is $a_1 h^{\\alpha_1} + a_2 h^{\\alpha_2}$, how is $K^{(1)}(h)$ constructed using $h$ and $h/2$?",hu:"Általános esetben, amikor a hiba $a_1 h^{\\alpha_1} + a_2 h^{\\alpha_2}$, hogyan épül fel a $K^{(1)}(h)$ a $h$ és $h/2$ használatával?"},a:{en:"$K^{(1)}(h) = \\frac{2^{\\alpha_1}K(h/2) - K(h)}{2^{\\alpha_1} - 1}$",hu:"$K^{(1)}(h) = \\frac{2^{\\alpha_1}K(h/2) - K(h)}{2^{\\alpha_1} - 1}$"}},{q:{en:"True or False: Richardson's extrapolation can only be used if the error consists of even powers of $h$.",hu:"Igaz vagy hamis: Richardson extrapolációja csak akkor használható, ha a hiba $h$ páros hatványaiból áll."},a:{en:"False; it can be adapted for any power series error form.",hu:"Hamis; bármilyen teljesítménysoros hibaformához adaptálható."}},{q:{en:"What determines the denominator in the formula $K^{(1)} = \\frac{4K(h/2) - K(h)}{3}$?",hu:"Mi határozza meg a nevezőt a $K^{(1)} = \\frac{4K(h/2) - K(h)}{3}$ képletben?"},a:{en:"The ratio of the leading error terms for $h$ versus $h/2$ (specifically $2^2 - 1 = 3$).",hu:"A $h$ és a $h/2$ (különösen $2^2 - 1 = 3$) fő hibatagjainak aránya."}},{q:{en:"Starting from a 1st-order difference formula, what order approximation is produced by one step of Richardson's extrapolation?",hu:"Egy elsőrendű különbségi képletből kiindulva milyen sorrendű közelítés jön létre a Richardson-féle extrapoláció egy lépésével?"},a:{en:"Second-order.",hu:"Másodrendű."}},{q:{en:"According to Example 7.6, the 4th-order Richardson-extrapolated central difference is equivalent to which formula?",hu:"A 7.6. példa szerint melyik képlettel ekvivalens a 4. rendű Richardson-extrapolált központi különbség?"},a:{en:"Formula (7.11).",hu:"Képlet (7.11)."}},{q:{en:"What is the purpose of multiplying the $h/2$ equation by 4 in the derivation of $K^{(1)}$?",hu:"Mi a célja a $h/2$ egyenlet 4-gyel való szorzásának a $K^{(1)}$ levezetésében?"},a:{en:"To match the coefficient of the $a_2 h^2$ term in the original $h$ equation so it cancels out.",hu:"Hogy megfeleljen a $a_2 h^2$ kifejezés együtthatójának az eredeti $h$ egyenletben, így az érvénytelenné válik."}},{q:{en:"If $f \\in C^{2m+3}$, what is the order of the remainder term $b(h)$ in the central difference derivative expansion?",hu:"Ha $f \\in C^{2m+3}$, milyen sorrendben van a $b(h)$ maradék tag a központi differencia-derivatíva kiterjesztésében?"},a:{en:"$h^{2m+2}$",hu:"$h^{2m+2}$"}},{q:{en:"In the expression for $a_{2i}^{(1)}$, how is it related to the original coefficient $a_{2i}$?",hu:"A $a_{2i}^{(1)}$ kifejezésben hogyan kapcsolódik az eredeti $a_{2i}$ együtthatóhoz?"},a:{en:"$a_{2i}^{(1)} = \\frac{1 - 4^{i-1}}{4^{i-1} \\cdot 3}a_{2i}$",hu:"$a_{2i}^{(1)} = \\frac{1 - 4^{i-1}}{4^{i-1} \\cdot 3}a_{2i}$"}},{q:{en:"What is the primary benefit of using Richardson's extrapolation instead of simply decreasing $h$ to a very small value?",hu:"Mi az elsődleges előnye a Richardson-féle extrapoláció használatának ahelyett, hogy a $h$ értéket egyszerűen nagyon kis értékre csökkentené?"},a:{en:"It achieves high accuracy with larger step sizes, potentially avoiding round-off errors and reducing computational cost.",hu:"Nagy pontosságot ér el nagyobb lépésméretekkel, így elkerülhető a kerekítési hibák és csökkennek a számítási költségek."}},{q:{en:"In the formula $K^{(2)} = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$, where does the number 15 come from?",hu:"A $K^{(2)} = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$ képletben honnan származik a 15-ös szám?"},a:{en:"It is $4^2 - 1$ (the ratio of $h^4$ to $(h/2)^4$ minus 1).",hu:"Ez $4^2 - 1$ (a $h^4$ és $(h/2)^4$ aránya mínusz 1)."}},{q:{en:"Which specific differentiation formula is used as the starting point for the Richardson examples in the text?",hu:"Melyik konkrét megkülönböztetési képletet használjuk a szövegben a Richardson-példák kiindulópontjaként?"},a:{en:"The central difference formula.",hu:"A központi különbség képlete."}},{q:{en:"What is the result of applying Richardson's extrapolation to a sequence of approximations that does not have a structured error expansion?",hu:"Mi az eredménye, ha Richardson extrapolációját alkalmazzuk egy olyan közelítéssorozatra, amely nem rendelkezik strukturált hibakiterjesztéssel?"},a:{en:"The method may fail to improve accuracy or could even decrease it.",hu:"Előfordulhat, hogy a módszer nem javítja a pontosságot, vagy akár csökkentheti is."}},{q:{en:"Concept: Truncation error.",hu:"Koncepció: Csonkolási hiba."},a:{en:"Definition: The error made by truncating an infinite process (like a Taylor series) to a finite one.",hu:"Definíció: Egy végtelen folyamat (például egy Taylor-sorozat) végessé csonkolásával okozott hiba."}},{q:{en:"What is the value of $m$ in the term $a_{2m} h^{2m}$ if we want to reach a tenth-order approximation?",hu:"Mennyi a $m$ értéke a $a_{2m} h^{2m}$ kifejezésben, ha tizedrendű közelítést akarunk elérni?"},a:{en:"5",hu:"5"}},{q:{en:"Cloze: To derive a third-order approximation from a first-order one, the leading error term must be proportional to _____.",hu:"Bezárás: Ahhoz, hogy egy elsőrendű közelítésből harmadrendű közelítést lehessen levezetni, a vezető hibatagnak arányosnak kell lennie _____-val."},a:{en:"$h^1$ (or $h^2$ for the second step)",hu:"$h^1$ (vagy $h^2$ a második lépéshez)"}},{q:{en:"How does the complexity of the approximation formula $K^{(i)}(h)$ change as $i$ increases?",hu:"Hogyan változik a $K^{(i)}(h)$ közelítési képlet összetettsége a $i$ növekedésével?"},a:{en:"It involves more function evaluations at different step sizes ($h, h/2, h/4, \\dots$).",hu:"Több funkcióértékelést foglal magában különböző lépésméretekben ($h, h/2, h/4, \\dots$)."}},{q:{en:"Formula: The general error bound for $b(h)$ in the second-order case.",hu:"Képlet: A $b(h)$ általános hibája másodrendű esetben."},a:{en:"$|b(h)| \\le B h^{2m+2}$",hu:"$|b(h)| \\le B h^{2m+2}$"}},{q:{en:"If $M$ is being approximated, $K(h)$ is the approximation, and $E(h)$ is the error, what is the basic identity used?",hu:"Ha a $M$-t közelítjük, a $K(h)$ a közelítést, és a $E(h)$ a hibát, akkor mi az alapvető azonosság?"},a:{en:"$M = K(h) + E(h)$",hu:"$M = K(h) + E(h)$"}},{q:{en:"Why is the central difference formula referred to as 'másodrendű' in the Hungarian text?",hu:"Miért emlegetik a magyar szövegben „másodrendű”-ként a központi különbségképletet?"},a:{en:"Because its error is proportional to $h^2$ (second-order).",hu:"Mert a hibája arányos a $h^2$-vel (másodrendű)."}},{q:{en:"In the exercise to derive a 6th-order formula for $f'(0)$ where $f(x) = e^{x} \\sin x$, what is the starting step size $h$?",hu:"A gyakorlatban a $f'(0)$ 6. rendű képletének levezetésére, ahol $f(x) = e^{x} \\sin x$, mekkora a kezdő lépés mérete $h$?"},a:{en:"0.25",hu:"0,25"}},{q:{en:"The general case formula uses integers $1 \\le \\alpha_1 < \\alpha_2 < \\dots < \\alpha_m$. What does $\\alpha_i$ represent?",hu:"Az általános esetképlet $1 \\le \\alpha_1 < \\alpha_2 < \\dots < \\alpha_m$ egész számokat használ. Mit jelent a $\\alpha_i$?"},a:{en:"The powers of $h$ present in the error expansion.",hu:"A $h$ képességei jelen vannak a hibakiterjesztésben."}},{q:{en:"If the error expansion is $M = K(h) + a_1 h + a_2 h^2 + \\dots$, the first extrapolated value $K^{(1)}(h)$ is _____.",hu:"Ha a hibakiterjesztés $M = K(h) + a_1 h + a_2 h^2 + \\dots$, akkor az első extrapolált $K^{(1)}(h)$ érték _____."},a:{en:"$2K(h/2) - K(h)$",hu:"$2K(h/2) - K(h)$"}},{q:{en:"In the central difference expansion, what is the coefficient of the $h^4$ term ($a_4$)?",hu:"A központi különbség-kiterjesztésben mekkora a $h^4$ tag ($a_4$) együtthatója?"},a:{en:"$- \\frac{f^{(5)}(x_0)}{5!}$",hu:"$- \\frac{f^{(5)}(x_0)}{5!}$"}},{q:{en:"What happens to the coefficients $a_{2i}$ of the remaining error terms after one step of Richardson's extrapolation?",hu:"Mi történik a fennmaradó hibatagok $a_{2i}$ együtthatóival a Richardson-féle extrapoláció egy lépése után?"},a:{en:"They are transformed into new coefficients $a_{2i}^{(1)}$.",hu:"Ezek új együtthatókká alakulnak, $a_{2i}^{(1)}$."}},{q:{en:"The Richardson procedure can be viewed as a linear combination of _____ at different scales.",hu:"A Richardson-eljárás a _____ lineáris kombinációjaként fogható fel különböző skálákon."},a:{en:"approximations",hu:"közelítések"}},{q:{en:"Formula: The relation for $M$ after the second-order term is cancelled.",hu:"Képlet: A $M$ relációja a másodrendű tag után törlődik."},a:{en:"$M = \\frac{4K(h/2) - K(h)}{3} + O(h^4)$",hu:"$M = \\frac{4K(h/2) - K(h)}{3} + O(h^4)$"}},{q:{en:"Is Richardson's extrapolation limited to derivatives?",hu:"A Richardson-féle extrapoláció a származékokra korlátozódik?"},a:{en:"No, it can be applied to integrals (Romberg integration) or any numerical limit process with a known error structure.",hu:"Nem, alkalmazható integrálokra (Romberg-integráció) vagy bármely ismert hibastruktúrájú numerikus határfolyamatra."}},{q:{en:"What is the constant $B$ in the error bound $|b(h)| \\le B h^{2m+2}$?",hu:"Mi a $B$ konstans a $|b(h)| \\le B h^{2m+2}$ hibakorlátban?"},a:{en:"A positive constant independent of $h$ that bounds the higher-order terms.",hu:"A $h$-től független pozitív állandó, amely a magasabb rendű tagokat korlátozza."}},{q:{en:"In the context of Exercise 4, what is the order of the 'one-sided difference' formula?",hu:"A 4. gyakorlat összefüggésében milyen sorrendben jelenik meg az „egyoldalú különbség” képlet?"},a:{en:"First-order.",hu:"Elsőrendű."}},{q:{en:"If $K^{(0)}(h) = K(h)$, $K^{(1)}(h)$ requires $K(h/2)$, how many $h$ values does $K^{(2)}(h)$ require?",hu:"Ha a $K^{(0)}(h) = K(h)$, $K^{(1)}(h)$ $K(h/2)$-t igényli, hány $h$ értéket igényel a $K^{(2)}(h)$?"},a:{en:"Three: $h, h/2, h/4$.",hu:"Három: $h, h/2, h/4$."}},{q:{en:"Cloze: The procedure of Richardson's extrapolation generates a _____ of approximations of increasing order.",hu:"Cloze: A Richardson-féle extrapolációs eljárás növekvő sorrendű közelítések _____-ját generálja."},a:{en:"sequence",hu:"sorrend"}},{q:{en:"What is the denominator of the third extrapolation step $K^{(3)}$ if the error only has even powers?",hu:"Mi a nevezője a $K^{(3)}$ harmadik extrapolációs lépésnek, ha a hibának csak páros hatványa van?"},a:{en:"63 ($4^3 - 1$)",hu:"63 ($4^3 - 1$)"}},{q:{en:"How does halving the step size twice ($h \\to h/2 \\to h/4$) assist in reaching a 6th-order approximation?",hu:"Hogyan segíti a lépésméret kétszeres felezése ($h \\to h/2 \\to h/4$) a hatodrendű közelítés elérését?"},a:{en:"It provides enough data points to eliminate both the $h^2$ and $h^4$ error terms.",hu:"Elegendő adatpontot biztosít a $h^2$ és a $h^4$ hibakifejezések kiküszöböléséhez."}},{q:{en:"In the derivation of $K^{(1)}$, why is $M$ multiplied by 4 on the left side of the intermediate step?",hu:"A $K^{(1)}$ levezetésében miért van a $M$ 4-gyel szorozva a közbenső lépés bal oldalán?"},a:{en:"Because the entire equation for $h/2$ was multiplied by 4.",hu:"Mivel a $h/2$ teljes egyenletét megszorozták 4-gyel."}},{q:{en:"What is the leading error term of $K^{(2)}(h)$?",hu:"Mi a $K^{(2)}(h)$ fő hibatagja?"},a:{en:"$a_6^{(2)} h^6$",hu:"$a_6^{(2)} h^6$"}}],"7_3":[{q:{en:"In the definition of the definite integral, what is the 'norm' of a partition $a = x_0 < x_1 < \\dots < x_n = b$?",hu:"A határozott integrál definíciójában mi a $a = x_0 < x_1 < \\dots < x_n = b$ partíció 'normája'?"},a:{en:"The maximum length of the subintervals, defined as $\\max\\{x_i - x_{i-1} : i = 1, \\dots, n\\}$.",hu:"A részintervallumok maximális hossza, $\\max\\{x_i - x_{i-1}: i = 1, \\dots, n\\}$."}},{q:{en:"Formula: Midpoint Rule (also known as the Rectangle Rule) for numerical integration",hu:"Képlet: Középpontszabály (más néven téglalapszabály) a numerikus integrációhoz"},a:{en:"$\\int_a^b f(x) \\, dx \\approx \\frac{b - a}{n} \\sum_{i=1}^{n} f\\left(\\frac{x_{i-1} + x_i}{2}\\right)$",hu:"$\\int_a^b f(x) \\, dx \\approx \\frac{b - a}{n} \\sum_{i=1}^{n} f\\left(\\frac{x_{i-1} + x_i}{2}\\right)$"}},{q:{en:"What is the underlying approach of the Lagrange method for deriving numerical integration formulas?",hu:"Mi a Lagrange-módszer alapja a numerikus integrációs képletek származtatására?"},a:{en:"Approximating the function $f$ with its Lagrange interpolating polynomial $L_n$ and then integrating $L_n$.",hu:"A $f$ függvény közelítése a $L_n$ Lagrange interpoláló polinomjával, majd a $L_n$ integrálása."}},{q:{en:"In numerical integration, what is a 'quadrature formula'?",hu:"Mit jelent a numerikus integrációban a „kvadratúra képlet”?"},a:{en:"A formula that approximates a definite integral as a weighted sum of function values: $\\sum_{k=0}^{n} c_k f(x_k)$.",hu:"Egy meghatározott integrált függvényértékek súlyozott összegeként közelítő képlet: $\\sum_{k=0}^{n} c_k f(x_k)$."}},{q:{en:"How are the weights $c_k$ defined in a Newton-Cotes quadrature formula?",hu:"Hogyan definiálhatók a $c_k$ súlyok a Newton-Cotes kvadratúra képletben?"},a:{en:"$c_k = \\int_a^b l_k(x) \\, dx$, where $l_k(x)$ is the $k$-th Lagrange basis polynomial.",hu:"$c_k = \\int_a^b l_k(x) \\, dx$, ahol a $l_k(x)$ a $k$-edik Lagrange-alappolinom."}},{q:{en:"What distinguishes a 'closed' Newton-Cotes formula from an 'open' one?",hu:"Mi különbözteti meg a „zárt” Newton-Cotes-képletet a „nyitott”-tól?"},a:{en:"Closed formulas include the endpoints $a$ and $b$ as mesh points, while open formulas only use points within the open interval $(a, b)$.",hu:"A zárt képletek a $a$ és $b$ végpontokat tartalmazzák hálópontként, míg a nyitott képletek csak a $(a, b)$ nyitott intervallumon belüli pontokat használják."}},{q:{en:"What is the 'degree of precision' of a quadrature formula?",hu:"Mi a kvadratúra képlet „pontossági foka”?"},a:{en:"The highest integer $n$ such that the formula gives the exact integral for all polynomials of degree $\\le n$.",hu:"A $n$ legmagasabb egész szám úgy, hogy a formula megadja a pontos integrált minden $\\le n$ fokú polinomhoz."}},{q:{en:"What is the minimum degree of precision for an $(n+1)$-point Newton-Cotes formula?",hu:"Mi a minimális pontosság egy $(n+1)$-pontú Newton-Cotes képlethez?"},a:{en:"$n$",hu:"$n$"}},{q:{en:"For which values of $n$ do Newton-Cotes formulas provide an extra degree of precision (exact for polynomials of degree $n+1$)?",hu:"A $n$ mely értékeihez biztosítanak a Newton-Cotes képletek extra pontosságot (pontosan a $n+1$ fokú polinomokra)?"},a:{en:"Even values of $n$.",hu:"$n$ páros értékei."}},{q:{en:"Formula: Elementary Trapezoidal Rule",hu:"Képlet: elemi trapézszabály"},a:{en:"$\\int_a^b f(x) \\, dx \\approx \\frac{h}{2}(f(a) + f(b))$, where $h = b - a$.",hu:"$\\int_a^b f(x) \\, dx \\approx \\frac{h}{2}(f(a) + f(b))$, ahol $h = b - a$."}},{q:{en:"What is the error term for the elementary Trapezoidal rule?",hu:"Mi az elemi trapézszabály hibatagja?"},a:{en:"$-\\frac{h^3}{12}f''(\\xi)$ for some $\\xi \\in (a, b)$.",hu:"$-\\frac{h^3}{12}f''(\\xi)$ néhány $\\xi \\in (a, b)$-hez."}},{q:{en:"What is the geometric interpretation of the Trapezoidal rule?",hu:"Mi a trapézszabály geometriai értelmezése?"},a:{en:"The integral is approximated by the area of the trapezoid formed by the secant line connecting $(a, f(a))$ and $(b, f(b))$.",hu:"Az integrált a $(a, f(a))$-t és a $(b, f(b))$-t összekötő metszővonal alkotta trapéz területe közelíti meg."}},{q:{en:"Formula: Composite Trapezoidal Rule for $n$ subintervals of length $h$",hu:"Képlet: Összetett trapézszabály a $n$ $h$ hosszúságú részintervallumokhoz"},a:{en:"$\\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right)$",hu:"$\\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right)$"}},{q:{en:"What is the error term for the composite Trapezoidal rule?",hu:"Mi az összetett trapézszabály hibatagja?"},a:{en:"$-\\frac{(b - a)h^2}{12}f''(\\xi)$ for some $\\xi \\in (a, b)$.",hu:"$-\\frac{(b - a)h^2}{12}f''(\\xi)$ néhány $\\xi \\in (a, b)$-hez."}},{q:{en:"If the step size $h$ is halved in the composite Trapezoidal rule, by what factor does the error approximately decrease?",hu:"Ha az összetett trapézszabályban a $h$ lépésméretet felére csökkentjük, milyen tényezővel csökken a hiba megközelítőleg?"},a:{en:"One quarter (indicating quadratic error in $h$).",hu:"Egy negyed (a $h$ négyzetes hibáját jelzi)."}},{q:{en:"According to the Intermediate Value Theorem for integrals, what condition must $g(x)$ meet for $\\int_a^b f(x)g(x) \\, dx = f(\\xi)\\int_a^b g(x) \\, dx$ to hold?",hu:"Az integrálok köztes értéktétele szerint milyen feltételnek kell megfelelnie a $g(x)$-nek ahhoz, hogy a $\\int_a^b f(x)g(x) \\, dx = f(\\xi)\\int_a^b g(x) \\, dx$ teljesüljön?"},a:{en:"$g(x)$ must be integrable and not change sign on the interval $[a, b]$.",hu:"A $g(x)$-nek integrálhatónak kell lennie, és nem szabad előjelet változtatnia a $[a, b]$ intervallumon."}},{q:{en:"For the closed Newton-Cotes formula with $n=2$ (Simpson's rule), what is the relationship between $x_0, x_1, x_2$ and $h$?",hu:"A $n=2$ (Simpson-szabály) zárt Newton-Cotes-képlet esetében mi a kapcsolat a $x_0, x_1, x_2$ és a $h$ között?"},a:{en:"$x_0 = a$, $x_1 = a + h$, $x_2 = b$, and $h = (b - a)/2$.",hu:"$x_0 = a$, $x_1 = a + h$, $x_2 = b$ és $h = (b - a)/2$."}},{q:{en:"Formula: Elementary Simpson's Rule",hu:"Képlet: Simpson elemi szabálya"},a:{en:"$\\int_{x_0}^{x_2} f(x) \\, dx \\approx \\frac{h}{3}(f(x_0) + 4f(x_1) + f(x_2))$",hu:"$\\int_{x_0}^{x_2} f(x) \\, dx \\approx \\frac{h}{3}(f(x_0) + 4f(x_1) + f(x_2))$"}},{q:{en:"What is the error term for the elementary Simpson's rule?",hu:"Mi a hibatag az elemi Simpson-szabályhoz?"},a:{en:"$-\\frac{h^5}{90}f^{(4)}(\\eta)$ for some $\\eta \\in (x_0, x_2)$.",hu:"$-\\frac{h^5}{90}f^{(4)}(\\eta)$ néhány $\\eta \\in (x_0, x_2)$-hez."}},{q:{en:"Why is Simpson's rule exact for polynomials of degree 3 even though it is based on quadratic interpolation?",hu:"Miért pontos a Simpson-szabály a 3. fokú polinomokra, noha másodfokú interpoláción alapul?"},a:{en:"Because for even $n$, Newton-Cotes formulas have a higher degree of precision ($n+1$).",hu:"Mert még a $n$ esetében is a Newton-Cotes képletek nagyobb pontosságúak ($n+1$)."}},{q:{en:"What is the degree of precision of Simpson's rule?",hu:"Mennyi a Simpson-szabály pontossági foka?"},a:{en:"$3$",hu:"$3$"}},{q:{en:"What is the requirement for the number of subintervals in the composite Simpson's rule?",hu:"Mi a követelmény a részintervallumok számára az összetett Simpson-szabályban?"},a:{en:"The interval must be divided into an even number of equal parts ($2n$).",hu:"Az intervallumot páros számú egyenlő részre kell felosztani ($2n$)."}},{q:{en:"Formula: Composite Simpson's Rule for $2n$ subintervals of length $h$",hu:"Képlet: Összetett Simpson-szabály a $2n$ $h$ hosszúságú részintervallumokra"},a:{en:"$\\frac{h}{3}\\left(f(x_0) + 4\\sum_{i=1}^{n} f(x_{2i-1}) + 2\\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\\right)$",hu:"$\\frac{h}{3}\\left(f(x_0) + 4\\sum_{i=1}^{n} f(x_{2i-1}) + 2\\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\\right)$"}},{q:{en:"What is the error term for the composite Simpson's rule?",hu:"Mi az összetett Simpson-szabály hibatagja?"},a:{en:"$-\\frac{(b - a)h^4}{180}f^{(4)}(\\xi)$ for some $\\xi \\in (a, b)$.",hu:"$-\\frac{(b - a)h^4}{180}f^{(4)}(\\xi)$ néhány $\\xi \\in (a, b)$-hez."}},{q:{en:"Formula: Simpson's $\\frac{3}{8}$ Rule",hu:"Képlet: Simpson $\\frac{3}{8}$ szabálya"},a:{en:"$\\int_{x_0}^{x_3} f(x) \\, dx \\approx \\frac{3h}{8}(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3))$",hu:"$\\int_{x_0}^{x_3} f(x) \\, dx \\approx \\frac{3h}{8}(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3))$"}},{q:{en:"What is the degree of precision for the Simpson's $\\frac{3}{8}$ rule?",hu:"Mekkora a Simpson-féle $\\frac{3}{8}$ szabály pontossági foka?"},a:{en:"$3$ (since $n=3$ is odd, precision is $n$).",hu:"$3$ (mivel a $n=3$ páratlan, a pontosság $n$)."}},{q:{en:"Formula: Closed Newton-Cotes formula for $n=4$",hu:"Képlet: $n=4$ zárt Newton-Cotes formula"},a:{en:"$\\frac{2h}{45}(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4))$",hu:"$\\frac{2h}{45}(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4))$"}},{q:{en:"What is the error term for the $n=4$ closed Newton-Cotes formula?",hu:"Mi a $n=4$ zárt Newton-Cotes képlet hibakifejezése?"},a:{en:"$-\\frac{8h^7}{945}f^{(6)}(\\xi)$",hu:"$-\\frac{8h^7}{945}f^{(6)}(\\xi)$"}},{q:{en:"Formula: Open Newton-Cotes formula for $n=0$ over interval $[x_{-1}, x_1]$ (Midpoint Rule)",hu:"Képlet: Nyissa meg a Newton-Cotes képletet a $n=0$-hez a $[x_{-1}, x_1]$ intervallumon (középpont szabály)"},a:{en:"$2hf(x_0) + \\frac{h^3}{3}f''(\\xi)$",hu:"$2hf(x_0) + \\frac{h^3}{3}f''(\\xi)$"}},{q:{en:"Formula: Open Newton-Cotes formula for $n=1$ over interval $[x_{-1}, x_2]$ using points $x_0, x_1$",hu:"Képlet: Nyissa meg a Newton-Cotes képletet a $n=1$ számára a $[x_{-1}, x_2]$ intervallum felett a $x_0, x_1$ pontok használatával"},a:{en:"$\\frac{3h}{2}(f(x_0) + f(x_1)) + \\frac{3h^3}{4}f''(\\xi)$",hu:"$\\frac{3h}{2}(f(x_0) + f(x_1)) + \\frac{3h^3}{4}f''(\\xi)$"}},{q:{en:"Formula: Open Newton-Cotes formula for $n=2$ over interval $[x_{-1}, x_3]$ using points $x_0, x_1, x_2$",hu:"Képlet: Nyissa meg a Newton-Cotes képletet a $n=2$ számára a $[x_{-1}, x_3]$ intervallum felett a $x_0, x_1, x_2$ pontok használatával"},a:{en:"$\\frac{4h}{3}(2f(x_0) - f(x_1) + 2f(x_2)) + \\frac{14h^5}{45}f^{(4)}(\\xi)$",hu:"$\\frac{4h}{3}(2f(x_0) - f(x_1) + 2f(x_2)) + \\frac{14h^5}{45}f^{(4)}(\\xi)$"}},{q:{en:"Formula: Open Newton-Cotes formula for $n=3$ over interval $[x_{-1}, x_4]$ using points $x_0, x_1, x_2, x_3$",hu:"Képlet: Nyissa meg a Newton-Cotes képletet a $n=3$ számára a $[x_{-1}, x_4]$ intervallum felett a $x_0, x_1, x_2, x_3$ pontok használatával"},a:{en:"$\\frac{5h}{24}(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)) + \\frac{95h^5}{144}f^{(4)}(\\xi)$",hu:"$\\frac{5h}{24}(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)) + \\frac{95h^5}{144}f^{(4)}(\\xi)$"}},{q:{en:"What two conditions must a quadrature formula meet to be considered stable according to Theorem 7.9?",hu:"Milyen két feltételnek kell teljesülnie egy kvadratúra képletnek ahhoz, hogy a 7.9. Tétel szerint stabilnak tekinthető?"},a:{en:"The formula must be exact for constant functions and all coefficients $c_i$ must be positive.",hu:"A képletnek pontosnak kell lennie az állandó függvényekre, és minden együtthatónak pozitívnak kell lennie."}},{q:{en:"If function value errors are bounded by $|y_i - f(x_i)| \\le \\varepsilon$, what is the stability bound for a stable quadrature formula?",hu:"Ha a függvényérték hibáit $|y_i - f(x_i)| \\le \\varepsilon$ határolja, mi a korlátos stabilitás egy stabil kvadratúra képlethez?"},a:{en:"$\\varepsilon(b - a)$",hu:"$\\varepsilon(b - a)$"}},{q:{en:"What is the sum of the weights $\\sum c_i$ in any quadrature formula that is exact for constant functions over $[a, b]$?",hu:"Mennyi a $\\sum c_i$ súlyok összege bármely olyan kvadratúra képletben, amely pontos a $[a, b]$ konstans függvényekre?"},a:{en:"$b - a$",hu:"$b - a$"}},{q:{en:"Why are most standard quadrature formulas (like Trapezoidal or Simpson's) considered numerically stable?",hu:"Miért tekinthető a legtöbb szabványos kvadratúra képlet (például a trapéz vagy a Simpson-képlet) numerikusan stabilnak?"},a:{en:"They utilize positive weights and are exact for constant functions.",hu:"Pozitív súlyokat használnak, és pontosak az állandó funkciókhoz."}},{q:{en:"The error of the composite Simpson's rule is proportional to which power of the step size $h$?",hu:"Az összetett Simpson-szabály hibája a $h$ lépésnagyság melyik hatványával arányos?"},a:{en:"$h^4$",hu:"$h^4$"}},{q:{en:"Which Newton-Cotes formula is characterized by weights following the pattern $1, 4, 1$?",hu:"Melyik Newton-Cotes képletre jellemzőek a $1, 4, 1$ mintát követő súlyok?"},a:{en:"Simpson's Rule",hu:"Simpson szabálya"}},{q:{en:"The error of the composite Trapezoidal rule is proportional to which power of the step size $h$?",hu:"Az összetett trapézszabály hibája a $h$ lépésnagyság melyik hatványával arányos?"},a:{en:"$h^2$",hu:"$h^2$"}},{q:{en:"How does the error of the composite Simpson's rule respond if the step size $h$ is reduced to $1/2$?",hu:"Hogyan reagál az összetett Simpson-szabály hibája, ha a $h$ lépésméretet $1/2$-re csökkentjük?"},a:{en:"The error is reduced to approximately $1/16$ of its original value.",hu:"A hiba körülbelül az eredeti érték $1/16$-ére csökken."}}],"7_4":[{q:{en:"What is the general form of an $n$-point quadrature formula for the integral $\\int_a^b f(x)\\,dx$?",hu:"Mi a $n$-pontú kvadratúra képlet általános formája a $\\int_a^b f(x)\\,dx$ integrálhoz?"},a:{en:"$\\sum_{i=1}^{n} c_i f(x_i)$",hu:"$\\sum_{i=1}^{n} c_i f(x_i)$"}},{q:{en:"A quadrature formula is exact for polynomials of degree at most $m$ if and only if it is exact for all _____ $x^i$ where $i = 0, 1, \\ldots, m$.",hu:"A kvadratúra képlet akkor és csak akkor pontos a legfeljebb $m$ fokszámú polinomokra, ha minden _____ $x^i$ esetén pontos, ahol $i = 0, 1, \\ldots, m$."},a:{en:"monomials",hu:"monomiálisok"}},{q:{en:"How many parameters ($c_i$ and $x_i$) are contained in a general $n$-point quadrature formula?",hu:"Hány paramétert ($c_i$ és $x_i$) tartalmaz egy általános $n$-pont kvadratúra képlet?"},a:{en:"$2n$",hu:"$2n$"}},{q:{en:"What is the maximum degree of a polynomial for which an $n$-point Gaussian quadrature formula can be exact?",hu:"Mekkora a polinom maximális foka, amelyre a $n$-pont Gauss-négyzetképlet pontos lehet?"},a:{en:"$2n - 1$",hu:"$2n - 1$"}},{q:{en:"To find the parameters of an $n$-point Gaussian quadrature formula, one must solve a system of $2n$ _____ equations.",hu:"A $n$-pont Gauss-négyzetes képlet paramétereinek megtalálásához meg kell oldani egy $2n$ _____ egyenletrendszert."},a:{en:"nonlinear",hu:"nemlineáris"}},{q:{en:"In a 2-point Gaussian quadrature formula on the interval $[-1, 1]$, what are the values of the weights $c_1$ and $c_2$?",hu:"Mekkora a $c_1$ és $c_2$ súlyok értéke egy 2 pontos Gauss-kvadratúra képletben a $[-1, 1]$ intervallumon?"},a:{en:"$c_1 = 1, c_2 = 1$",hu:"$c_1 = 1, c_2 = 1$"}},{q:{en:"What are the nodes $x_1$ and $x_2$ for a 2-point Gaussian quadrature formula on $[-1, 1]$?",hu:"Melyek a $x_1$ és $x_2$ csomópontok a $[-1, 1]$ kétpontos Gauss-kvadratúra képletéhez?"},a:{en:"$x_1 = -\\frac{\\sqrt{3}}{3}, x_2 = \\frac{\\sqrt{3}}{3}$",hu:"$x_1 = -\\frac{\\sqrt{3}}{3}, x_2 = \\frac{\\sqrt{3}}{3}$"}},{q:{en:"What is the 2-point Gaussian quadrature formula for the interval $[-1, 1]$?",hu:"Mi a 2 pontos Gauss-kvadratúra képlet a $[-1, 1]$ intervallumhoz?"},a:{en:"$\\int_{-1}^{1} f(x)\\,dx \\approx f(-\\frac{\\sqrt{3}}{3}) + f(\\frac{\\sqrt{3}}{3})$",hu:"$\\int_{-1}^{1} f(x)\\,dx \\approx f(-\\frac{\\sqrt{3}}{3}) + f(\\frac{\\sqrt{3}}{3})$"}},{q:{en:"Under what condition are two functions $f$ and $g$ considered orthogonal on the interval $[a, b]$?",hu:"Milyen feltételek mellett tekintendő a $f$ és a $g$ két függvény ortogonálisnak a $[a, b]$ intervallumon?"},a:{en:"$\\int_a^b f(x)g(x)\\,dx = 0$",hu:"$\\int_a^b f(x)g(x)\\,dx = 0$"}},{q:{en:"The sequence of polynomials $(P_i)$ that are pairwise orthogonal on $[-1, 1]$ where $P_i$ has degree $i$ are called _____ polynomials.",hu:"A $(P_i)$ polinomok sorozatát, amelyek páronként merőlegesek a $[-1, 1]$-n, ahol a $P_i$ foka $i$, _____ polinomoknak nevezzük."},a:{en:"Legendre",hu:"Legendre"}},{q:{en:"What is the first Legendre polynomial, $P_0(x)$?",hu:"Mi az első Legendre-polinom, $P_0(x)$?"},a:{en:"$1$",hu:"$1$"}},{q:{en:"What is the second Legendre polynomial, $P_1(x)$?",hu:"Mi a második Legendre-polinom, a $P_1(x)$?"},a:{en:"$x$",hu:"$x$"}},{q:{en:"What method is used to construct the sequence of orthogonal Legendre polynomials?",hu:"Milyen módszerrel állítjuk össze az ortogonális Legendre-polinomok sorozatát?"},a:{en:"Gram-Schmidt orthogonalization",hu:"Gram-Schmidt ortogonalizáció"}},{q:{en:"In the Gram-Schmidt process for Legendre polynomials, $P_{i+1}(x)$ is sought in the form $x^{i+1} + \\sum_{j=0}^{i} a_{i+1,j} P_j(x)$. How is $a_{i+1,j}$ calculated?",hu:"A Gram-Schmidt eljárásban a Legendre-polinomokhoz a $P_{i+1}(x)$-t $x^{i+1} + \\sum_{j=0}^{i} a_{i+1,j} P_j(x)$ formában kell keresni. Hogyan történik a $a_{i+1,j}$ kiszámítása?"},a:{en:"$a_{i+1,j} = -\\frac{\\int_{-1}^{1} x^{i+1} P_j(x)\\,dx}{\\int_{-1}^{1} P_j^2(x)\\,dx}$",hu:"$a_{i+1,j} = -\\frac{\\int_{-1}^{1} x^{i+1} P_j(x)\\,dx}{\\int_{-1}^{1} P_j^2(x)\\,dx}$"}},{q:{en:"What is the specific formula for the Legendre polynomial $P_2(x)$?",hu:"Mi a $P_2(x)$ Legendre-polinom konkrét képlete?"},a:{en:"$x^2 - \\frac{1}{3}$",hu:"$x^2 - \\frac{1}{3}$"}},{q:{en:"What is the specific formula for the Legendre polynomial $P_3(x)$?",hu:"Mi a $P_3(x)$ Legendre-polinom konkrét képlete?"},a:{en:"$x^3 - \\frac{3}{5}x$",hu:"$x^3 - \\frac{3}{5}x$"}},{q:{en:"What is the specific formula for the Legendre polynomial $P_4(x)$?",hu:"Mi a $P_4(x)$ Legendre-polinom konkrét képlete?"},a:{en:"$x^4 - \\frac{6}{7}x^2 + \\frac{3}{35}$",hu:"$x^4 - \\frac{6}{7}x^2 + \\frac{3}{35}$"}},{q:{en:"Which recurrence relation do Legendre polynomials satisfy?",hu:"Melyik ismétlődési relációnak felelnek meg a Legendre-polinomok?"},a:{en:"$P_{n+1}(x) = xP_n(x) - \\frac{n^2}{4n^2 - 1}P_{n-1}(x)$",hu:"$P_{n+1}(x) = xP_n(x) - \\frac{n^2}{4n^2 - 1}P_{n-1}(x)$"}},{q:{en:"Property of Legendre polynomials: $P_i$ is orthogonal to any polynomial of degree at most _____.",hu:"Legendre-polinomok tulajdonságai: $P_i$ ortogonális bármely legfeljebb _____ fokú polinomra."},a:{en:"$i - 1$",hu:"$i - 1$"}},{q:{en:"How does the parity of the Legendre polynomial $P_i$ relate to the index $i$?",hu:"Hogyan viszonyul a $P_i$ Legendre-polinom paritása a $i$ indexhez?"},a:{en:"It is even if $i$ is even and odd if $i$ is odd.",hu:"Még akkor is, ha a $i$ páros, és páratlan, ha a $i$ páratlan."}},{q:{en:"How many distinct real roots does the $n$th Legendre polynomial $P_n$ have in the interval $(-1, 1)$?",hu:"Hány különböző valós gyöke van a $n$th Legendre polinomnak, a $P_n$ a $(-1, 1)$ intervallumban?"},a:{en:"$n$",hu:"$n$"}},{q:{en:"What is the geometric distribution of the roots of a Legendre polynomial relative to the origin?",hu:"Mi a Legendre-polinom gyökeinek geometriai eloszlása ​​az origóhoz képest?"},a:{en:"The roots are symmetric to the origin.",hu:"A gyökerek az eredetre szimmetrikusak."}},{q:{en:"The nodes $x_1, \\dots, x_n$ of the $n$-point Gaussian quadrature formula are the roots of which polynomial?",hu:"Melyik polinom gyökerei a $n$-pont Gauss-négyzetes képlet $x_1, \\dots, x_n$ csomópontjai?"},a:{en:"The $n$th-order Legendre polynomial $P_n$",hu:"A $n$-edrendű Legendre polinom $P_n$"}},{q:{en:"What is the required differentiability class for a function $f$ to apply the Gaussian quadrature truncation error formula involving $f^{(2n)}$?",hu:"Milyen differenciálhatósági osztály szükséges a $f$ függvénynek a Gauss-féle kvadratúra csonkítási hibaképlet alkalmazásához a $f^{(2n)}$-vel?"},a:{en:"$C^{2n}[a, b]$",hu:"$C^{2n}[a, b]$"}},{q:{en:"What is the truncation error formula for the $n$-point Gaussian quadrature on $[-1, 1]$?",hu:"Mi a csonkítási hiba képlete a $n$-pont Gauss-kvadratúrához a $[-1, 1]$-n?"},a:{en:"$\\frac{f^{(2n)}(\\xi)}{(2n)!}\\int_{-1}^{1} P_n^2(x)\\,dx$",hu:"$\\frac{f^{(2n)}(\\xi)}{(2n)!}\\int_{-1}^{1} P_n^2(x)\\,dx$"}},{q:{en:"What is the approximate form of the Gaussian quadrature error term if $f^{(2n)}$ is bounded?",hu:"Mi a Gauss-kvadratúra hibatag közelítő alakja, ha a $f^{(2n)}$ korlátos?"},a:{en:"$\\frac{\\pi f^{(2n)}(\\xi)}{4^n (2n)!}$",hu:"$\\frac{\\pi f^{(2n)}(\\xi)}{4^n (2n)!}$"}},{q:{en:"As $n \\to \\infty$, the error of Gaussian quadrature tends to zero at a(n) _____ speed.",hu:"$n \\to \\infty$-ként a Gauss-kvadratúra hibája nullára hajlik a(n) _____ sebességnél."},a:{en:"exponential",hu:"exponenciális"}},{q:{en:"How does the convergence speed of Gaussian quadrature compare to Newton-Cotes formulas as $n \\to \\infty$?",hu:"Hogyan viszonyul a Gauss-kvadratúra konvergenciasebessége a Newton-Cotes-képletekhez, mint a $n \\to \\infty$?"},a:{en:"Gaussian is exponential; Newton-Cotes is only polynomial.",hu:"Gauss exponenciális; Newton-Cotes csak polinom."}},{q:{en:"For $n=3$, what is the root $x_i$ located at the origin?",hu:"$n=3$ esetén mi a $x_i$ gyökér az origóban?"},a:{en:"$0.0000000000$",hu:"$0.0000000000$"}},{q:{en:"For $n=3$, what is the weight $c_i$ corresponding to the node $x=0$?",hu:"$n=3$ esetén mekkora a $c_i$ súlya a $x=0$ csomópontnak?"},a:{en:"$0.8888888889$ (or $\\frac{8}{9}$)",hu:"$0.8888888889$ (vagy $\\frac{8}{9}$)"}},{q:{en:"In the 3-point Gaussian formula, what is the value of the weights for the nodes $\\pm 0.7745966692$?",hu:"A 3 pontos Gauss-képletben mekkora a súlyok értéke a $\\pm 0.7745966692$ csomópontokhoz?"},a:{en:"$0.5555555556$ (or $\\frac{5}{9}$)",hu:"$0.5555555556$ (vagy $\\frac{5}{9}$)"}},{q:{en:"What substitution is used to transform the integral $\\int_a^b f(x)\\,dx$ to the interval $[-1, 1]$?",hu:"Milyen helyettesítéssel transzformáljuk a $\\int_a^b f(x)\\,dx$ integrált a $[-1, 1]$ intervallumra?"},a:{en:"$x = \\frac{(b - a)t + a + b}{2}$",hu:"$x = \\frac{(b - a)t + a + b}{2}$"}},{q:{en:"When transforming $\\int_a^b f(x)\\,dx$ to the interval $[-1, 1]$, what is the differential $dx$ in terms of $dt$?",hu:"Amikor $\\int_a^b f(x)\\,dx$-t $[-1, 1]$ intervallummá alakítunk, mekkora a $dx$ differenciálmű $dt$-ben?"},a:{en:"$dx = \\frac{b - a}{2}\\,dt$",hu:"$dx = \\frac{b - a}{2}\\,dt$"}},{q:{en:"Formula: Interval Transformation",hu:"Képlet: Intervallum transzformáció"},a:{en:"$\\int_a^b f(x)\\,dx = \\frac{b - a}{2}\\int_{-1}^{1} f(\\frac{(b - a)t + a + b}{2})\\,dt$",hu:"$\\int_a^b f(x)\\,dx = \\frac{b - a}{2}\\int_{-1}^{1} f(\\frac{(b - a)t + a + b}{2})\\,dt$"}},{q:{en:"Example: If using 2-point Gauss to approximate $\\int_0^1 x^2 e^x\\,dx$, what is the scaling factor applied to the integral on $[-1, 1]$?",hu:"Példa: Ha kétpontos Gausst használunk a $\\int_0^1 x^2 e^x\\,dx$ közelítésére, akkor mekkora skálázási tényezőt alkalmazunk a $[-1, 1]$ integráljára?"},a:{en:"$\\frac{1}{2}$",hu:"$\\frac{1}{2}$"}},{q:{en:"The 2-point Gaussian approximation of $\\int_{-1}^1 e^x\\,dx$ is approximately $2.3426961$. What is the exact value?",hu:"A $\\int_{-1}^1 e^x\\,dx$ 2 pontos Gauss-közelítése hozzávetőlegesen $2.3426961$. Mi a pontos érték?"},a:{en:"$e - \\frac{1}{e} \\approx 2.350424$",hu:"$e - \\frac{1}{e} \\approx 2.350424$"}},{q:{en:"True or False: Gaussian quadrature weights $c_i$ are always positive.",hu:"Igaz vagy hamis: A $c_i$ Gauss-négyzetsúlyok mindig pozitívak."},a:{en:"True",hu:"Igaz"}},{q:{en:"If a sequence of polynomials $(p_i)$ is pairwise orthogonal on $[-1, 1]$, what is the relationship between $p_i$ and the Legendre polynomial $P_i$?",hu:"Ha a $(p_i)$ polinomok sorozata páronként merőleges a $[-1, 1]$-n, mi a kapcsolat a $p_i$ és a $P_i$ Legendre-polinom között?"},a:{en:"$p_i(x) = c_i P_i(x)$ for some constant $c_i \\ne 0$",hu:"$p_i(x) = c_i P_i(x)$ valamilyen állandó $c_i \\ne 0$-hez"}},{q:{en:"The formula $c_i = \\int_{-1}^{1} \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}\\,dx$ defines the _____ of the Gaussian quadrature.",hu:"A $c_i = \\int_{-1}^{1} \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}\\,dx$ képlet a Gauss-kvadratúra _____-ját határozza meg."},a:{en:"weights (or coefficients)",hu:"súlyok (vagy együtthatók)"}},{q:{en:"In the 2-point case on $[-1, 1]$, the equation $c_1 x_1 + c_2 x_2 = 0$ follows from integrating which monomial?",hu:"A $[-1, 1]$ kétpontos esetben a $c_1 x_1 + c_2 x_2 = 0$ egyenlet melyik monom integrálásából következik?"},a:{en:"$x$",hu:"$x$"}},{q:{en:"In the 2-point case on $[-1, 1]$, the equation $c_1 + c_2 = 2$ follows from integrating which function?",hu:"A $[-1, 1]$ 2 pontos esetben melyik függvény integrálásából következik a $c_1 + c_2 = 2$ egyenlet?"},a:{en:"$1$ (or $x^0$)",hu:"$1$ (vagy $x^0$)"}},{q:{en:"Why can case (i) $x_1 = x_2$ not happen in the 2-point Gaussian derivation?",hu:"Miért nem fordulhat elő (i) $x_1 = x_2$ eset a 2 pontos Gauss-levezetésben?"},a:{en:"It would imply $c_1 + c_2 = 0$, contradicting the integral of 1 which equals 2.",hu:"Ez $c_1 + c_2 = 0$-t jelentene, ami ellentmond az 1 integráljának, amely egyenlő 2-vel."}},{q:{en:"Concept: $n$-point Gaussian Quadrature",hu:"Koncepció: $n$-pont Gauss-kvadratúra"},a:{en:"Definition: A quadrature formula where nodes and weights are chosen to integrate polynomials up to degree $2n-1$ exactly.",hu:"Definíció: Kvadratúra képlet, ahol a csomópontok és a súlyok úgy vannak kiválasztva, hogy pontosan $2n-1$ fokig integrálják a polinomokat."}},{q:{en:"Which theorem states that nodes $x_i$ are the roots of $P_n$ and provides the formula for $c_i$?",hu:"Melyik tétel mondja ki, hogy a $x_i$ csomópontok a $P_n$ gyökerei, és adja meg a $c_i$ képletét?"},a:{en:"Theorem 7.13",hu:"7.13. Tétel"}},{q:{en:"For $n=4$, how many nodes are positive and how many are negative?",hu:"A $n=4$ esetében hány csomópont pozitív és hány negatív?"},a:{en:"2 positive and 2 negative (due to symmetry).",hu:"2 pozitív és 2 negatív (a szimmetria miatt)."}},{q:{en:"What is the value of $P_2(x)$ at $x=0$?",hu:"Mennyi a $P_2(x)$ értéke a $x=0$-nél?"},a:{en:"$-\\frac{1}{3}$",hu:"$-\\frac{1}{3}$"}},{q:{en:"What is the result of the 2-point Gaussian approximation for $\\int_0^1 x^2 e^x\\,dx$?",hu:"Mi az eredménye a $\\int_0^1 x^2 e^x\\,dx$ kétpontos Gauss-közelítésének?"},a:{en:"$0.7119418$",hu:"$0.7119418$"}},{q:{en:"What is the error in the 2-point Gaussian approximation for $\\int_0^1 x^2 e^x\\,dx$?",hu:"Mi a hiba a $\\int_0^1 x^2 e^x\\,dx$ kétpontos Gauss-közelítésében?"},a:{en:"$0.0063400$",hu:"$0.0063400$"}},{q:{en:"True or False: The nodes $x_i$ in Gaussian quadrature must be inside the interval of integration.",hu:"Igaz vagy hamis: A Gauss-kvadratúra $x_i$ csomópontjainak az integrációs intervallumon belül kell lenniük."},a:{en:"True (Theorem 7.12 states roots are in $(-1, 1)$).",hu:"Igaz (a 7.12. tétel szerint a gyökök $(-1, 1)$-ben vannak)."}},{q:{en:"In the recursive formula $P_{n+1}(x) = xP_n(x) - \\gamma_n P_{n-1}(x)$, what is the coefficient $\\gamma_n$?",hu:"A $P_{n+1}(x) = xP_n(x) - \\gamma_n P_{n-1}(x)$ rekurzív képletben mekkora a $\\gamma_n$ együttható?"},a:{en:"$\\frac{n^2}{4n^2 - 1}$",hu:"$\\frac{n^2}{4n^2 - 1}$"}},{q:{en:"Legendre polynomials are constructed to be _____ on the interval $[-1, 1]$.",hu:"A legendapolinomok _____ értékűek a $[-1, 1]$ intervallumon."},a:{en:"orthogonal",hu:"ortogonális"}},{q:{en:"The error of the 2-point Gaussian formula for $e^x$ on $[-1, 1]$ is $0.0077062$. This is considered _____ given the formula's simplicity.",hu:"A $e^x$ 2 pontos Gauss-képlet hibája $[-1, 1]$-n $0.0077062$. Ez a képlet egyszerűsége miatt _____."},a:{en:"very small",hu:"nagyon kicsi"}},{q:{en:"If $i=3$ (odd), what is the value of $P_3(0)$?",hu:"Ha $i=3$ (páratlan), mennyi a $P_3(0)$ értéke?"},a:{en:"$0$ (because it is an odd function).",hu:"$0$ (mert ez egy furcsa függvény)."}},{q:{en:"How does the degree of $P_i$ relate to the index $i$?",hu:"Hogyan kapcsolódik a $P_i$ foka a $i$ indexhez?"},a:{en:"The degree of $P_i$ is exactly $i$.",hu:"A $P_i$ foka pontosan $i$."}},{q:{en:"The formula $\\int_{-1}^1 p(x)\\,dx = \\sum c_i p(x_i)$ is exact for $p$ of degree 5. What is the minimum $n$ required?",hu:"A $\\int_{-1}^1 p(x)\\,dx = \\sum c_i p(x_i)$ képlet pontosan az 5. fokozatú $p$-re vonatkozik. Mi a minimális $n$?"},a:{en:"$n = 3$ (since $2(3)-1 = 5$)",hu:"$n = 3$ ($2(3)-1 = 5$ óta)"}},{q:{en:"What is the weight $c_i$ for $n=2$ in the Gaussian quadrature on $[-1, 1]$?",hu:"Mekkora a $c_i$ súlya $n=2$ esetén a Gauss-kvadratúrában a $[-1, 1]$-n?"},a:{en:"$1.0000000000$",hu:"$1.0000000000$"}},{q:{en:"The 5-point Gaussian quadrature uses nodes derived from which Legendre polynomial?",hu:"Az 5 pontos Gauss-kvadratúra melyik Legendre-polinomból származó csomópontokat használja?"},a:{en:"$P_5(x)$",hu:"$P_5(x)$"}},{q:{en:"In the system of equations for $n=2$, the equation $\\frac{2}{3} = c_1 x_1^2 + c_2 x_2^2$ comes from the integral of _____.",hu:"A $n=2$ egyenletrendszerében a $\\frac{2}{3} = c_1 x_1^2 + c_2 x_2^2$ egyenlet a _____ integrálból származik."},a:{en:"$x^2$",hu:"$x^2$"}},{q:{en:"The $n$-point Gaussian quadrature is derived from a system of _____ equations (count).",hu:"A $n$-pont Gauss-kvadratúra _____ egyenletrendszerből (számlálás) származik."},a:{en:"$2n$",hu:"$2n$"}},{q:{en:"For an arbitrary interval $[a, b]$, the transformed function's argument in the integral is _____.",hu:"Egy tetszőleges $[a, b]$ intervallum esetén a transzformált függvény argumentuma az integrálban _____."},a:{en:"$\\frac{(b - a)t + a + b}{2}$",hu:"$\\frac{(b - a)t + a + b}{2}$"}}]},R={glossary:{en:"Glossary",hu:"Fogalomtár"},flashcards:{en:"Flashcards",hu:"Tanulókártyák"},shuffle:{en:"🔀 Shuffle",hu:"🔀 Keverés"},reset:{en:"Reset order",hu:"Eredeti sorrend"},question:{en:"Question",hu:"Kérdés"},answer:{en:"Answer",hu:"Válasz"},prev:{en:"‹ Prev",hu:"‹ Előző"},next:{en:"Next ›",hu:"Következő ›"},showAnswer:{en:"Show answer",hu:"Válasz mutatása"},showQuestion:{en:"Show question",hu:"Kérdés mutatása"}};function Ue(){const{i18n:a}=M();return a.language==="hu"?"hu":"en"}const ee="rounded border border-slate-300 px-3 py-1.5 text-sm hover:border-brand-500 dark:border-slate-700";function Ft({slug:a}){const e=Ue(),n=Rt[a]??[],[t,i]=k.useState(null);return n.length?h.jsxs("section",{className:"card mt-6",children:[h.jsx("h3",{className:"mb-3 font-semibold text-brand-700 dark:text-brand-200",children:R.glossary[e]}),h.jsx("div",{className:"grid gap-2",children:n.map((r,o)=>{const s=t===o;return h.jsxs("button",{onClick:()=>i(s?null:o),className:"rounded-lg border border-slate-200 px-4 py-3 text-left hover:border-brand-500 dark:border-slate-700",children:[h.jsxs("div",{className:"flex items-center justify-between gap-3",children:[h.jsx("span",{className:"font-semibold text-slate-800 dark:text-slate-100",children:h.jsx(se,{markdown:r.term[e]})}),h.jsx("span",{className:"text-slate-400",children:s?"−":"+"})]}),s&&h.jsx("div",{className:"mt-2 text-sm text-slate-600 dark:text-slate-300",children:h.jsx(se,{markdown:r.def[e]})})]},o)})})]}):null}const pe=a=>Array.from({length:a},(e,n)=>n);function It(a){const e=pe(a);for(let n=e.length-1;n>0;n--){const t=Math.floor(Math.random()*(n+1));[e[n],e[t]]=[e[t],e[n]]}return e}function Dt({slug:a}){const e=Ue(),n=Et[a]??[],[t,i]=k.useState(()=>pe(n.length)),[r,o]=k.useState(0),[s,d]=k.useState(!1),l=k.useMemo(()=>n[t[r]],[n,t,r]),u=f=>typeof f=="string"?f:f[e];if(!n.length)return null;const c=f=>{d(!1),o(p=>(p+f+n.length)%n.length)};return h.jsxs("section",{className:"card mt-6",children:[h.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[h.jsx("h3",{className:"font-semibold text-brand-700 dark:text-brand-200",children:R.flashcards[e]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("span",{className:"rounded bg-slate-100 px-2 py-1 font-mono text-sm dark:bg-slate-800",children:[r+1," / ",n.length]}),h.jsx("button",{className:ee,onClick:()=>{i(It(n.length)),o(0),d(!1)},children:R.shuffle[e]}),h.jsx("button",{className:ee,onClick:()=>{i(pe(n.length)),o(0),d(!1)},children:R.reset[e]})]})]}),h.jsxs("button",{onClick:()=>d(f=>!f),className:"min-h-[150px] w-full rounded-xl border border-slate-300 bg-slate-50 p-5 text-left dark:border-slate-700 dark:bg-slate-800",children:[h.jsx("div",{className:`mb-2 text-xs font-bold uppercase tracking-widest ${s?"text-emerald-600 dark:text-emerald-400":"text-brand-600 dark:text-brand-300"}`,children:s?R.answer[e]:R.question[e]}),h.jsx(se,{markdown:u(s?l.a:l.q)})]}),h.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[h.jsx("button",{className:ee,onClick:()=>c(-1),children:R.prev[e]}),h.jsx("button",{className:"flex-1 rounded bg-brand-600 px-3 py-1.5 text-sm font-medium text-white",onClick:()=>d(f=>!f),children:s?R.showQuestion[e]:R.showAnswer[e]}),h.jsx("button",{className:ee,onClick:()=>c(1),children:R.next[e]})]})]})}const Wt=`#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Composite trapezoidal (T) and Simpson (S) on [a, b] with n subintervals.
void composite(function<double(double)> f, double a, double b, int n, double &T, double &S) {
    if (n % 2) ++n;                          // Simpson needs even n
    double h = (b - a) / n;
    T = (f(a) + f(b)) / 2;
    S = f(a) + f(b);
    for (int i = 1; i < n; ++i) {
        double yi = f(a + i * h);
        T += yi;
        S += (i % 2 ? 4 : 2) * yi;
    }
    T *= h;
    S *= h / 3;
}

int main() {
    cout.precision(7);
    double T, S;
    composite([](double x) { return exp(x); }, 0, 1, 10, T, S);
    cout << fixed << "trapezoid ~ " << T << "\\n";
    cout << "Simpson   ~ " << S << "\\n";
}
// -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
`,Gt=`program composite_demo
  implicit none
  real(8) :: a, b, h, T, S, yi
  integer :: i, n
  a = 0d0; b = 1d0; n = 10
  if (mod(n, 2) == 1) n = n + 1          ! Simpson needs even n
  h = (b - a)/n
  T = (f(a) + f(b))/2d0
  S = f(a) + f(b)
  do i = 1, n-1
     yi = f(a + i*h)
     T = T + yi
     if (mod(i, 2) == 1) then
        S = S + 4d0*yi
     else
        S = S + 2d0*yi
     end if
  end do
  print '(A, F14.7)', 'trapezoid = ', h*T
  print '(A, F14.7)', 'Simpson   = ', h/3d0*S
  ! -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
contains
  real(8) function f(x)
    real(8), intent(in) :: x
    f = exp(x)
  end function f
end program composite_demo
`,Ht=`package main

import (
	"fmt"
	"math"
)

// Composite trapezoidal and Simpson rules on [a, b] with n subintervals.
func composite(f func(float64) float64, a, b float64, n int) (float64, float64) {
	if n%2 != 0 {
		n++ // Simpson needs even n
	}
	h := (b - a) / float64(n)
	T := (f(a) + f(b)) / 2
	S := f(a) + f(b)
	for i := 1; i < n; i++ {
		yi := f(a + float64(i)*h)
		T += yi
		if i%2 != 0 {
			S += 4 * yi
		} else {
			S += 2 * yi
		}
	}
	return h * T, h / 3 * S
}

func main() {
	T, S := composite(math.Exp, 0, 1, 10)
	fmt.Println("trapezoid ~", T)
	fmt.Println("Simpson   ~", S)
}
// -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
`,Vt=`function composite(f, a, b, n = 10)
    isodd(n) && (n += 1)                 # Simpson needs even n
    h = (b - a) / n
    T = (f(a) + f(b)) / 2
    S = f(a) + f(b)
    for i in 1:n-1
        yi = f(a + i*h)
        T += yi
        S += (isodd(i) ? 4 : 2) * yi
    end
    return h*T, h/3*S
end

T, S = composite(exp, 0.0, 1.0, 10)
println("trapezoid = ", T)
println("Simpson   = ", S)
# -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
`,Ut=`// Composite trapezoidal and Simpson rules on [a, b] with n subintervals.
function composite(f, a, b, n = 10) {
  if (n % 2) n += 1; // Simpson needs even n
  const h = (b - a) / n;
  let T = (f(a) + f(b)) / 2;
  let S = f(a) + f(b);
  for (let i = 1; i < n; i++) {
    const yi = f(a + i * h);
    T += yi;
    S += (i % 2 ? 4 : 2) * yi;
  }
  return [h * T, (h / 3) * S];
}

const [T, S] = composite(Math.exp, 0, 1, 10);
console.log("trapezoid ~", T);
console.log("Simpson   ~", S);
// -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
`,Bt=`function [T, S] = composite(f, a, b, n)
% COMPOSITE  Composite trapezoidal (T) and Simpson (S) on [a,b], n subintervals.
    if nargin < 4, n = 10; end
    if mod(n, 2), n = n + 1; end          % Simpson needs even n
    h = (b - a) / n;
    x = a + (0:n) * h;
    y = arrayfun(f, x);
    T = h * (y(1)/2 + sum(y(2:end-1)) + y(end)/2);
    S = h/3 * (y(1) + y(end) + 4*sum(y(2:2:end-1)) + 2*sum(y(3:2:end-1)));
end

% --- Demo ---
[T, S] = composite(@exp, 0, 1, 10);
fprintf('trapezoid ~ %.7f\\n', T);
fprintf('Simpson   ~ %.7f\\n', S);
% -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
`,Qt=`import math


def composite(f, a, b, n=10):
    """Composite trapezoidal and Simpson rules on [a, b] with n subintervals."""
    if n % 2:
        n += 1                                   # Simpson needs even n
    h = (b - a) / n
    x = [a + i * h for i in range(n + 1)]
    y = [f(xi) for xi in x]
    trap = h * (y[0] / 2 + sum(y[1:-1]) + y[-1] / 2)
    simp = h / 3 * (y[0] + y[-1] + 4 * sum(y[1:-1:2]) + 2 * sum(y[2:-1:2]))
    return trap, simp


if __name__ == "__main__":
    T, S = composite(math.exp, 0, 1, 10)
    print("trapezoid ~", T)
    print("Simpson   ~", S)
    print("exact e-1 =", math.e - 1)
# -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
`,Jt=`# Composite trapezoidal and Simpson rules on [a, b] with n subintervals.
composite <- function(f, a, b, n = 10) {
  if (n %% 2 == 1) n <- n + 1            # Simpson needs even n
  h <- (b - a) / n
  x <- seq(a, b, length.out = n + 1)
  y <- f(x)
  odd <- seq(2, n, by = 2)               # interior odd-position points (1-indexed)
  even <- seq(3, n - 1, by = 2)
  T <- h * (y[1] / 2 + sum(y[2:n]) + y[n + 1] / 2)
  S <- h / 3 * (y[1] + y[n + 1] + 4 * sum(y[odd]) + 2 * sum(y[even]))
  c(trapezoid = T, simpson = S)
}

r <- composite(exp, 0, 1, 10)
cat("trapezoid ~", r["trapezoid"], "\\n")
cat("Simpson   ~", r["simpson"], "\\n")
# -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
`,Yt=`// Composite trapezoidal and Simpson rules on [a, b] with n subintervals.
fn composite<F: Fn(f64) -> f64>(f: F, a: f64, b: f64, mut n: usize) -> (f64, f64) {
    if n % 2 == 1 { n += 1; }            // Simpson needs even n
    let h = (b - a) / n as f64;
    let mut t = (f(a) + f(b)) / 2.0;
    let mut s = f(a) + f(b);
    for i in 1..n {
        let yi = f(a + i as f64 * h);
        t += yi;
        s += (if i % 2 == 1 { 4.0 } else { 2.0 }) * yi;
    }
    (h * t, h / 3.0 * s)
}
fn main() {
    let (t, s) = composite(|x: f64| x.exp(), 0.0, 1.0, 10);
    println!("trapezoid = {}", t);
    println!("Simpson   = {}", s);
}
// -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
`,Zt=`composite[f_, a_, b_, nIn_ : 10] := Module[{n = nIn, h, T, S},
   If[OddQ[n], n++];                          (* Simpson needs even n *)
   h = (b - a)/n;
   T = h (f[a]/2 + f[b]/2 + Sum[f[a + i h], {i, 1, n - 1}]);
   S = h/3 (f[a] + f[b] + Sum[(If[OddQ[i], 4, 2]) f[a + i h], {i, 1, n - 1}]);
   {T, S}];
With[{r = composite[Exp, 0., 1., 10]},
  Print["trapezoid = ", r[[1]]];
  Print["Simpson   = ", r[[2]]]]
(* -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818 *)
`,Xt=`#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Central-difference first derivative, error O(h^2).
double deriv1(function<double(double)> f, double x, double h = 0.01) {
    return (f(x + h) - f(x - h)) / (2 * h);
}

// Central-difference second derivative, error O(h^2).
double deriv2(function<double(double)> f, double x, double h = 0.01) {
    return (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);
}

int main() {
    cout.precision(6);
    cout << fixed;
    auto f = [](double x) { return sin(x); };
    cout << "f'(1)  ~ " << deriv1(f, 1, 0.01) << "  exact cos(1)  = " << cos(1.0) << "\\n";
    cout << "f''(1) ~ " << deriv2(f, 1, 0.01) << "  exact -sin(1) = " << -sin(1.0) << "\\n";
}
`,ea=`program differentiation_demo
  implicit none
  real(8) :: x, h
  x = 1d0; h = 0.01d0
  print '(A, F12.6, A, F12.6)', "f'(1)  ~ ", deriv1(x, h),  "  exact cos(1)  = ",  cos(x)
  print '(A, F12.6, A, F12.6)', "f''(1) ~ ", deriv2(x, h),  "  exact -sin(1) = ", -sin(x)
contains
  ! Central-difference first derivative, error O(h^2).
  real(8) function deriv1(x, h)
    real(8), intent(in) :: x, h
    deriv1 = (f(x + h) - f(x - h)) / (2d0*h)
  end function deriv1

  ! Central-difference second derivative, error O(h^2).
  real(8) function deriv2(x, h)
    real(8), intent(in) :: x, h
    deriv2 = (f(x + h) - 2d0*f(x) + f(x - h)) / h**2
  end function deriv2

  real(8) function f(x)
    real(8), intent(in) :: x
    f = sin(x)
  end function f
end program differentiation_demo
`,na=`package main

import (
	"fmt"
	"math"
)

// Central-difference first derivative, error O(h^2).
func deriv1(f func(float64) float64, x, h float64) float64 {
	return (f(x+h) - f(x-h)) / (2 * h)
}

// Central-difference second derivative, error O(h^2).
func deriv2(f func(float64) float64, x, h float64) float64 {
	return (f(x+h) - 2*f(x) + f(x-h)) / (h * h)
}

func main() {
	fmt.Println("f'(1)  ~", deriv1(math.Sin, 1, 0.01), " exact cos(1)  =", math.Cos(1))
	fmt.Println("f''(1) ~", deriv2(math.Sin, 1, 0.01), " exact -sin(1) =", -math.Sin(1))
}
`,ta=`# Central-difference first derivative, error O(h^2).
deriv1(f, x, h = 0.01) = (f(x + h) - f(x - h)) / (2h)

# Central-difference second derivative, error O(h^2).
deriv2(f, x, h = 0.01) = (f(x + h) - 2f(x) + f(x - h)) / h^2

println("f'(1)  ~ ", deriv1(sin, 1.0, 0.01), "  exact cos(1)  = ", cos(1.0))
println("f''(1) ~ ", deriv2(sin, 1.0, 0.01), "  exact -sin(1) = ", -sin(1.0))
`,aa=`// Central-difference first derivative, error O(h^2).
function deriv1(f, x, h = 0.01) {
  return (f(x + h) - f(x - h)) / (2 * h);
}

// Central-difference second derivative, error O(h^2).
function deriv2(f, x, h = 0.01) {
  return (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);
}

console.log("f'(1)  ~", deriv1(Math.sin, 1, 0.01), " exact cos(1)  =", Math.cos(1));
console.log("f''(1) ~", deriv2(Math.sin, 1, 0.01), " exact -sin(1) =", -Math.sin(1));
`,ra=`function d = deriv1(f, x, h)
% DERIV1  Central-difference first derivative, error O(h^2).
    if nargin < 3, h = 0.01; end
    d = (f(x + h) - f(x - h)) / (2*h);
end

function d = deriv2(f, x, h)
% DERIV2  Central-difference second derivative, error O(h^2).
    if nargin < 3, h = 0.01; end
    d = (f(x + h) - 2*f(x) + f(x - h)) / h^2;
end

% --- Demo: f(x) = sin(x) at x = 1, h = 0.01 ---
fprintf("f'(1)  ~ %.6f  exact cos(1)  =  %.6f\\n", deriv1(@sin, 1, 0.01),  cos(1));
fprintf("f''(1) ~ %.6f  exact -sin(1) = %.6f\\n", deriv2(@sin, 1, 0.01), -sin(1));
`,ia=`import math


def deriv1(f, x, h=0.01):
    """Central-difference first derivative, error O(h^2)."""
    return (f(x + h) - f(x - h)) / (2 * h)


def deriv2(f, x, h=0.01):
    """Central-difference second derivative, error O(h^2)."""
    return (f(x + h) - 2 * f(x) + f(x - h)) / h ** 2


if __name__ == "__main__":
    print("f'(1)  ~", deriv1(math.sin, 1, 0.01), " exact cos(1)  =", math.cos(1))
    print("f''(1) ~", deriv2(math.sin, 1, 0.01), " exact -sin(1) =", -math.sin(1))
`,sa=`# Central-difference first derivative, error O(h^2).
deriv1 <- function(f, x, h = 0.01) {
  (f(x + h) - f(x - h)) / (2 * h)
}

# Central-difference second derivative, error O(h^2).
deriv2 <- function(f, x, h = 0.01) {
  (f(x + h) - 2 * f(x) + f(x - h)) / h^2
}

cat("f'(1)  ~", deriv1(sin, 1, 0.01), " exact cos(1)  =", cos(1), "\\n")
cat("f''(1) ~", deriv2(sin, 1, 0.01), " exact -sin(1) =", -sin(1), "\\n")
`,oa=`// Central-difference first derivative, error O(h^2).
fn deriv1<F: Fn(f64) -> f64>(f: F, x: f64, h: f64) -> f64 {
    (f(x + h) - f(x - h)) / (2.0 * h)
}

// Central-difference second derivative, error O(h^2).
fn deriv2<F: Fn(f64) -> f64>(f: F, x: f64, h: f64) -> f64 {
    (f(x + h) - 2.0 * f(x) + f(x - h)) / (h * h)
}

fn main() {
    let f = |x: f64| x.sin();
    println!("f'(1)  ~ {:.6}  exact cos(1)  = {:.6}", deriv1(f, 1.0, 0.01), 1.0_f64.cos());
    println!("f''(1) ~ {:.6}  exact -sin(1) = {:.6}", deriv2(f, 1.0, 0.01), -1.0_f64.sin());
}
`,la=`(* Central-difference first derivative, error O(h^2). *)
deriv1[f_, x_, h_ : 0.01] := (f[x + h] - f[x - h])/(2 h);

(* Central-difference second derivative, error O(h^2). *)
deriv2[f_, x_, h_ : 0.01] := (f[x + h] - 2 f[x] + f[x - h])/h^2;

Print["f'(1)  ~ ", deriv1[Sin, 1., 0.01], "  exact cos(1)  = ", Cos[1.]]
Print["f''(1) ~ ", deriv2[Sin, 1., 0.01], "  exact -sin(1) = ", -Sin[1.]]
`,ha=`#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// 2- or 3-point Gauss-Legendre quadrature on [a, b].
double gauss_quad(function<double(double)> f, double a, double b, int n = 2) {
    double t2[] = {-1 / sqrt(3.0), 1 / sqrt(3.0)}, w2[] = {1, 1};
    double t3[] = {-sqrt(3.0 / 5), 0, sqrt(3.0 / 5)}, w3[] = {5.0 / 9, 8.0 / 9, 5.0 / 9};
    double *t = n == 3 ? t3 : t2, *w = n == 3 ? w3 : w2;
    int m = n == 3 ? 3 : 2;
    double hm = (b - a) / 2, mid = (a + b) / 2, s = 0;   // map [-1,1] -> [a,b]
    for (int i = 0; i < m; ++i) s += w[i] * f(mid + hm * t[i]);
    return hm * s;
}

int main() {
    cout.precision(7);
    auto f = [](double x) { return exp(x); };
    cout << fixed << "int_0^1 e^x dx ~ " << gauss_quad(f, 0, 1, 2) << " (2-pt)\\n";
    cout << "int_0^1 e^x dx ~ " << gauss_quad(f, 0, 1, 3) << " (3-pt)\\n";
}
// -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
`,da=`program gauss_quad_demo
  implicit none
  print '(A, F12.7, A)', 'int_0^1 e^x dx = ', gauss_quad(0d0, 1d0, 2), ' (2-pt)'
  print '(A, F12.7, A)', 'int_0^1 e^x dx = ', gauss_quad(0d0, 1d0, 3), ' (3-pt)'
  ! -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
contains
  real(8) function gauss_quad(a, b, n)
    real(8), intent(in) :: a, b
    integer, intent(in) :: n
    real(8) :: t(3), w(3), hm, mid
    integer :: i, m
    if (n == 3) then
       t(1:3) = [-sqrt(3d0/5d0), 0d0, sqrt(3d0/5d0)]
       w(1:3) = [5d0/9d0, 8d0/9d0, 5d0/9d0]
       m = 3
    else
       t(1:2) = [-1d0/sqrt(3d0), 1d0/sqrt(3d0)]
       w(1:2) = [1d0, 1d0]
       m = 2
    end if
    hm = (b - a)/2d0                    ! map [-1,1] -> [a,b]
    mid = (a + b)/2d0
    gauss_quad = 0d0
    do i = 1, m
       gauss_quad = gauss_quad + hm*w(i)*f(mid + hm*t(i))
    end do
  end function gauss_quad
  real(8) function f(x)
    real(8), intent(in) :: x
    f = exp(x)
  end function f
end program gauss_quad_demo
`,fa=`package main

import (
	"fmt"
	"math"
)

// 2- or 3-point Gauss-Legendre quadrature on [a, b].
func gaussQuad(f func(float64) float64, a, b float64, n int) float64 {
	var t, w []float64
	if n == 3 {
		t = []float64{-math.Sqrt(3.0 / 5), 0, math.Sqrt(3.0 / 5)}
		w = []float64{5.0 / 9, 8.0 / 9, 5.0 / 9}
	} else {
		t = []float64{-1 / math.Sqrt(3), 1 / math.Sqrt(3)}
		w = []float64{1, 1}
	}
	hm := (b - a) / 2 // map [-1,1] -> [a,b]
	mid := (a + b) / 2
	s := 0.0
	for i := range t {
		s += w[i] * f(mid+hm*t[i])
	}
	return hm * s
}

func main() {
	fmt.Println("int_0^1 e^x dx ~", gaussQuad(math.Exp, 0, 1, 2), "(2-pt)")
	fmt.Println("int_0^1 e^x dx ~", gaussQuad(math.Exp, 0, 1, 3), "(3-pt)")
}
// -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
`,ua=`function gauss_quad(f, a, b, n = 2)
    if n == 3
        t = (-sqrt(3/5), 0.0, sqrt(3/5)); w = (5/9, 8/9, 5/9)
    else
        t = (-1/sqrt(3), 1/sqrt(3)); w = (1.0, 1.0)
    end
    hm = (b - a) / 2                     # map [-1,1] -> [a,b]
    mid = (a + b) / 2
    return hm * sum(wi * f(mid + hm*ti) for (ti, wi) in zip(t, w))
end

println("int_0^1 e^x dx = ", gauss_quad(exp, 0.0, 1.0, 2), " (2-pt)")
println("int_0^1 e^x dx = ", gauss_quad(exp, 0.0, 1.0, 3), " (3-pt)")
# -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
`,ca=`// 2- or 3-point Gauss-Legendre quadrature on [a, b].
function gaussQuad(f, a, b, n = 2) {
  const [t, w] =
    n === 3
      ? [[-Math.sqrt(3 / 5), 0, Math.sqrt(3 / 5)], [5 / 9, 8 / 9, 5 / 9]]
      : [[-1 / Math.sqrt(3), 1 / Math.sqrt(3)], [1, 1]];
  const hm = (b - a) / 2; // map [-1,1] -> [a,b]
  const mid = (a + b) / 2;
  return hm * t.reduce((s, ti, i) => s + w[i] * f(mid + hm * ti), 0);
}

console.log("int_0^1 e^x dx ~", gaussQuad(Math.exp, 0, 1, 2), "(2-pt)");
console.log("int_0^1 e^x dx ~", gaussQuad(Math.exp, 0, 1, 3), "(3-pt)");
// -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
`,pa=`function I = gauss_quad(f, a, b, n)
% GAUSS_QUAD  2- or 3-point Gauss-Legendre quadrature on [a,b].
    if nargin < 4, n = 2; end
    if n == 3
        t = [-sqrt(3/5), 0, sqrt(3/5)];
        w = [5/9, 8/9, 5/9];
    else
        t = [-1/sqrt(3), 1/sqrt(3)];
        w = [1, 1];
    end
    hm = (b - a) / 2;                 % map [-1,1] -> [a,b]
    mid = (a + b) / 2;
    I = hm * sum(w .* arrayfun(f, mid + hm * t));
end

% --- Demo ---
fprintf('int_0^1 e^x dx ~ %.7f (2-pt)\\n', gauss_quad(@exp, 0, 1, 2));
fprintf('int_0^1 e^x dx ~ %.7f (3-pt)\\n', gauss_quad(@exp, 0, 1, 3));
% -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
`,ma=`import math


def gauss_quad(f, a, b, n=2):
    """2- or 3-point Gauss-Legendre quadrature on [a, b]."""
    if n == 3:
        t = [-math.sqrt(3 / 5), 0.0, math.sqrt(3 / 5)]
        w = [5 / 9, 8 / 9, 5 / 9]
    else:
        t = [-1 / math.sqrt(3), 1 / math.sqrt(3)]
        w = [1.0, 1.0]
    hm = (b - a) / 2                       # map [-1, 1] -> [a, b]
    mid = (a + b) / 2
    return hm * sum(wi * f(mid + hm * ti) for ti, wi in zip(t, w))


if __name__ == "__main__":
    print("int_0^1 e^x dx ~", gauss_quad(math.exp, 0, 1, 2), "(2-pt)")
    print("int_0^1 e^x dx ~", gauss_quad(math.exp, 0, 1, 3), "(3-pt)")
    print("exact e-1 =", math.e - 1)
# -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
`,$a=`# 2- or 3-point Gauss-Legendre quadrature on [a, b].
gauss_quad <- function(f, a, b, n = 2) {
  if (n == 3) {
    t <- c(-sqrt(3 / 5), 0, sqrt(3 / 5)); w <- c(5 / 9, 8 / 9, 5 / 9)
  } else {
    t <- c(-1 / sqrt(3), 1 / sqrt(3)); w <- c(1, 1)
  }
  hm <- (b - a) / 2                 # map [-1,1] -> [a,b]
  mid <- (a + b) / 2
  hm * sum(w * f(mid + hm * t))
}

cat("int_0^1 e^x dx ~", gauss_quad(exp, 0, 1, 2), "(2-pt)\\n")
cat("int_0^1 e^x dx ~", gauss_quad(exp, 0, 1, 3), "(3-pt)\\n")
# -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
`,ga=`// 2- or 3-point Gauss-Legendre quadrature on [a, b].
fn gauss_quad<F: Fn(f64) -> f64>(f: F, a: f64, b: f64, n: usize) -> f64 {
    let (t, w): (Vec<f64>, Vec<f64>) = if n == 3 {
        (vec![-(3.0_f64 / 5.0).sqrt(), 0.0, (3.0_f64 / 5.0).sqrt()], vec![5.0 / 9.0, 8.0 / 9.0, 5.0 / 9.0])
    } else {
        (vec![-1.0 / 3.0_f64.sqrt(), 1.0 / 3.0_f64.sqrt()], vec![1.0, 1.0])
    };
    let hm = (b - a) / 2.0;               // map [-1,1] -> [a,b]
    let mid = (a + b) / 2.0;
    hm * t.iter().zip(&w).map(|(&ti, &wi)| wi * f(mid + hm * ti)).sum::<f64>()
}
fn main() {
    println!("int_0^1 e^x dx = {} (2-pt)", gauss_quad(|x: f64| x.exp(), 0.0, 1.0, 2));
    println!("int_0^1 e^x dx = {} (3-pt)", gauss_quad(|x: f64| x.exp(), 0.0, 1.0, 3));
}
// -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
`,xa=`gaussQuad[f_, a_, b_, n_ : 2] := Module[{t, w, hm, mid},
   {t, w} = If[n == 3,
     {{-Sqrt[3/5], 0, Sqrt[3/5]}, {5/9, 8/9, 5/9}},
     {{-1/Sqrt[3], 1/Sqrt[3]}, {1, 1}}];
   hm = (b - a)/2;                       (* map [-1,1] -> [a,b] *)
   mid = (a + b)/2;
   hm Total[w (f /@ (mid + hm t))]];
Print["int_0^1 e^x dx = ", gaussQuad[Exp, 0., 1., 2], " (2-pt)"]
Print["int_0^1 e^x dx = ", gaussQuad[Exp, 0., 1., 3], " (3-pt)"]
(* -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818 *)
`,_a=`#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Central-difference first derivative D(h), error O(h^2).
double central(function<double(double)> f, double x, double h) {
    return (f(x + h) - f(x - h)) / (2 * h);
}

int main() {
    cout.precision(10);
    cout << fixed;
    auto f = [](double x) { return sin(x); };
    double x = 1, h = 0.1;
    double d1 = central(f, x, h);        // D(h),   error O(h^2)
    double d2 = central(f, x, h / 2);    // D(h/2), error O(h^2)
    double ext = (4 * d2 - d1) / 3;      // Richardson extrapolation, error O(h^4)
    cout << "D(h)         = " << d1 << "\\n";
    cout << "D(h/2)       = " << d2 << "\\n";
    cout << "extrapolated = " << ext << "  exact cos(1) = " << cos(1.0) << "\\n";
}
`,ba=`program richardson_demo
  implicit none
  real(8) :: x, h, d1, d2, ext
  x = 1d0; h = 0.1d0
  d1 = central(x, h)        ! D(h),   error O(h^2)
  d2 = central(x, h/2d0)    ! D(h/2), error O(h^2)
  ext = (4d0*d2 - d1) / 3d0 ! Richardson extrapolation, error O(h^4)
  print '(A, F14.10)', 'D(h)         = ', d1
  print '(A, F14.10)', 'D(h/2)       = ', d2
  print '(A, F14.10, A, F14.10)', 'extrapolated = ', ext, '  exact cos(1) = ', cos(x)
contains
  ! Central-difference first derivative D(h), error O(h^2).
  real(8) function central(x, h)
    real(8), intent(in) :: x, h
    central = (f(x + h) - f(x - h)) / (2d0*h)
  end function central

  real(8) function f(x)
    real(8), intent(in) :: x
    f = sin(x)
  end function f
end program richardson_demo
`,ka=`package main

import (
	"fmt"
	"math"
)

// Central-difference first derivative D(h), error O(h^2).
func central(f func(float64) float64, x, h float64) float64 {
	return (f(x+h) - f(x-h)) / (2 * h)
}

// Richardson-extrapolate D(h) and D(h/2) to error O(h^4).
func richardson(f func(float64) float64, x, h float64) (float64, float64, float64) {
	d1 := central(f, x, h)
	d2 := central(f, x, h/2)
	return d1, d2, (4*d2 - d1) / 3
}

func main() {
	d1, d2, ext := richardson(math.Sin, 1, 0.1)
	fmt.Println("D(h)         =", d1)
	fmt.Println("D(h/2)       =", d2)
	fmt.Println("extrapolated =", ext, " exact cos(1) =", math.Cos(1))
}
`,ya=`# Central-difference first derivative D(h), error O(h^2).
central(f, x, h) = (f(x + h) - f(x - h)) / (2h)

# Richardson-extrapolate D(h) and D(h/2) to error O(h^4).
function richardson(f, x, h)
    d1 = central(f, x, h)
    d2 = central(f, x, h/2)
    return d1, d2, (4d2 - d1) / 3
end

d1, d2, ext = richardson(sin, 1.0, 0.1)
println("D(h)         = ", d1)
println("D(h/2)       = ", d2)
println("extrapolated = ", ext, "  exact cos(1) = ", cos(1.0))
`,va=`// Central-difference first derivative D(h), error O(h^2).
function central(f, x, h) {
  return (f(x + h) - f(x - h)) / (2 * h);
}

// Richardson-extrapolate D(h) and D(h/2) to error O(h^4).
function richardson(f, x, h) {
  const d1 = central(f, x, h);
  const d2 = central(f, x, h / 2);
  return [d1, d2, (4 * d2 - d1) / 3];
}

const [d1, d2, ext] = richardson(Math.sin, 1, 0.1);
console.log("D(h)         =", d1);
console.log("D(h/2)       =", d2);
console.log("extrapolated =", ext, " exact cos(1) =", Math.cos(1));
`,za=`function d = central(f, x, h)
% CENTRAL  Central-difference first derivative D(h), error O(h^2).
    d = (f(x + h) - f(x - h)) / (2*h);
end

function [d1, d2, ext] = richardson(f, x, h)
% RICHARDSON  Extrapolate D(h) and D(h/2) to error O(h^4).
    d1 = central(f, x, h);
    d2 = central(f, x, h/2);
    ext = (4*d2 - d1) / 3;
end

% --- Demo: f(x) = sin(x) at x = 1, h = 0.1 ---
[d1, d2, ext] = richardson(@sin, 1, 0.1);
fprintf('D(h)         = %.10f\\n', d1);
fprintf('D(h/2)       = %.10f\\n', d2);
fprintf('extrapolated = %.10f  exact cos(1) = %.10f\\n', ext, cos(1));
`,wa=`import math


def central(f, x, h):
    """Central-difference first derivative D(h), error O(h^2)."""
    return (f(x + h) - f(x - h)) / (2 * h)


def richardson(f, x, h):
    """Richardson-extrapolate D(h) and D(h/2) to error O(h^4)."""
    d1 = central(f, x, h)
    d2 = central(f, x, h / 2)
    return d1, d2, (4 * d2 - d1) / 3


if __name__ == "__main__":
    d1, d2, ext = richardson(math.sin, 1, 0.1)
    print("D(h)         =", d1)
    print("D(h/2)       =", d2)
    print("extrapolated =", ext, " exact cos(1) =", math.cos(1))
`,ja=`# Central-difference first derivative D(h), error O(h^2).
central <- function(f, x, h) {
  (f(x + h) - f(x - h)) / (2 * h)
}

# Richardson-extrapolate D(h) and D(h/2) to error O(h^4).
richardson <- function(f, x, h) {
  d1 <- central(f, x, h)
  d2 <- central(f, x, h / 2)
  list(d1 = d1, d2 = d2, ext = (4 * d2 - d1) / 3)
}

r <- richardson(sin, 1, 0.1)
cat("D(h)         =", r$d1, "\\n")
cat("D(h/2)       =", r$d2, "\\n")
cat("extrapolated =", r$ext, " exact cos(1) =", cos(1), "\\n")
`,qa=`// Central-difference first derivative D(h), error O(h^2).
fn central<F: Fn(f64) -> f64>(f: &F, x: f64, h: f64) -> f64 {
    (f(x + h) - f(x - h)) / (2.0 * h)
}

fn main() {
    let f = |x: f64| x.sin();
    let (x, h) = (1.0, 0.1);
    let d1 = central(&f, x, h);          // D(h),   error O(h^2)
    let d2 = central(&f, x, h / 2.0);    // D(h/2), error O(h^2)
    let ext = (4.0 * d2 - d1) / 3.0;     // Richardson extrapolation, error O(h^4)
    println!("D(h)         = {:.10}", d1);
    println!("D(h/2)       = {:.10}", d2);
    println!("extrapolated = {:.10}  exact cos(1) = {:.10}", ext, 1.0_f64.cos());
}
`,Sa=`(* Central-difference first derivative D(h), error O(h^2). *)
central[f_, x_, h_] := (f[x + h] - f[x - h])/(2 h);

(* Richardson-extrapolate D(h) and D(h/2) to error O(h^4). *)
richardson[f_, x_, h_] := Module[{d1, d2},
   d1 = central[f, x, h];
   d2 = central[f, x, h/2];
   {d1, d2, (4 d2 - d1)/3}];

{d1, d2, ext} = richardson[Sin, 1., 0.1];
Print["D(h)         = ", d1]
Print["D(h/2)       = ", d2]
Print["extrapolated = ", ext, "  exact cos(1) = ", Cos[1.]]
`,Na=`#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Composite Simpson's rule (n forced even) on [a, b].
double simpson(function<double(double)> f, double a, double b, int n = 100) {
    if (n % 2) ++n;
    double h = (b - a) / n, s = f(a) + f(b);
    for (int i = 1; i < n; ++i) s += (i % 2 ? 4 : 2) * f(a + i * h);
    return h / 3 * s;
}

int main() {
    cout.precision(10);
    cout << "int_0^1 e^x dx ~ " << simpson([](double x) { return exp(x); }, 0, 1, 100) << "\\n";
}
`,Ca=`program simpson_demo
  implicit none
  real(8) :: a, b, h, s
  integer :: i, n
  a = 0d0; b = 1d0; n = 100
  if (mod(n, 2) == 1) n = n + 1
  h = (b - a)/n
  s = f(a) + f(b)
  do i = 1, n-1
     if (mod(i, 2) == 1) then
        s = s + 4d0*f(a + i*h)
     else
        s = s + 2d0*f(a + i*h)
     end if
  end do
  print '(A, F14.10)', 'int_0^1 e^x dx = ', h/3d0*s
contains
  real(8) function f(x)
    real(8), intent(in) :: x
    f = exp(x)
  end function f
end program simpson_demo
`,Ta=`package main

import (
	"fmt"
	"math"
)

// Composite Simpson's rule (n forced even) on [a, b].
func simpson(f func(float64) float64, a, b float64, n int) float64 {
	if n%2 != 0 {
		n++
	}
	h := (b - a) / float64(n)
	s := f(a) + f(b)
	for i := 1; i < n; i++ {
		if i%2 != 0 {
			s += 4 * f(a+float64(i)*h)
		} else {
			s += 2 * f(a+float64(i)*h)
		}
	}
	return h / 3 * s
}

func main() {
	fmt.Println("int_0^1 e^x dx ~", simpson(math.Exp, 0, 1, 100), " exact =", math.E-1)
}
`,Aa=`function simpson(f, a, b, n = 100)
    isodd(n) && (n += 1)
    h = (b - a) / n
    s = f(a) + f(b)
    for i in 1:n-1
        s += (isodd(i) ? 4 : 2) * f(a + i*h)
    end
    return h / 3 * s
end

println("int_0^1 e^x dx = ", simpson(exp, 0.0, 1.0, 100))
`,La=`// Composite Simpson's rule (n forced even) on [a, b].
function simpson(f, a, b, n = 100) {
  if (n % 2) n += 1;
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * h);
  return (h / 3) * s;
}

console.log("int_0^1 e^x dx ~", simpson(Math.exp, 0, 1, 100), " exact =", Math.E - 1);
`,Oa=`function I = simpson(f, a, b, n)
% SIMPSON  Composite Simpson's rule (n forced even) on [a,b].
    if nargin < 4, n = 100; end
    if mod(n, 2), n = n + 1; end
    x = linspace(a, b, n+1);
    y = f(x);
    h = (b - a) / n;
    I = h/3 * (y(1) + y(end) + 4*sum(y(2:2:end-1)) + 2*sum(y(3:2:end-1)));
end

% --- Demo ---
fprintf('int_0^1 e^x dx ~ %.10f\\n', simpson(@exp, 0, 1, 100));
`,Ka=`import numpy as np


def simpson(f, a, b, n=100):
    """Composite Simpson's rule (n forced even) on [a, b]."""
    if n % 2:
        n += 1
    x = np.linspace(a, b, n + 1)
    y = f(x)
    h = (b - a) / n
    return h / 3 * (y[0] + y[-1] + 4 * y[1:-1:2].sum() + 2 * y[2:-1:2].sum())


if __name__ == "__main__":
    import math
    print("int_0^1 e^x dx ~", simpson(np.exp, 0, 1, 100), " exact =", math.e - 1)
`,Ma=`# Composite Simpson's rule (n forced even) on [a, b].
simpson <- function(f, a, b, n = 100) {
  if (n %% 2 == 1) n <- n + 1
  x <- seq(a, b, length.out = n + 1)
  y <- f(x)
  h <- (b - a) / n
  odd <- seq(2, n, by = 2)      # interior odd-position points (1-indexed)
  even <- seq(3, n - 1, by = 2)
  h / 3 * (y[1] + y[n + 1] + 4 * sum(y[odd]) + 2 * sum(y[even]))
}

cat("int_0^1 e^x dx ~", simpson(exp, 0, 1, 100), " exact =", exp(1) - 1, "\\n")
`,Pa=`// Composite Simpson's rule (n forced even).
fn simpson<F: Fn(f64) -> f64>(f: F, a: f64, b: f64, mut n: usize) -> f64 {
    if n % 2 == 1 { n += 1; }
    let h = (b - a) / n as f64;
    let mut s = f(a) + f(b);
    for i in 1..n { s += (if i % 2 == 1 { 4.0 } else { 2.0 }) * f(a + i as f64 * h); }
    h / 3.0 * s
}
fn main() {
    println!("int_0^1 e^x dx = {}", simpson(|x: f64| x.exp(), 0.0, 1.0, 100));
}
`,Ra=`simpson[f_, a_, b_, nIn_ : 100] := Module[{n = nIn, h},
   If[OddQ[n], n++];
   h = (b - a)/n;
   h/3 (f[a] + f[b] + Sum[(If[OddQ[i], 4, 2]) f[a + i h], {i, 1, n - 1}])];
Print["int_0^1 e^x dx = ", simpson[Exp, 0., 1., 100]]
`,Ea=`#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Composite trapezoidal rule for the integral of f on [a, b].
double trapezoid(function<double(double)> f, double a, double b, int n = 100) {
    double h = (b - a) / n, s = (f(a) + f(b)) / 2;
    for (int i = 1; i < n; ++i) s += f(a + i * h);
    return h * s;
}

int main() {
    cout.precision(10);
    cout << "int_0^1 e^x dx ~ " << trapezoid([](double x) { return exp(x); }, 0, 1, 100) << "\\n";
}
`,Fa=`program trapezoid_demo
  implicit none
  real(8) :: a, b, h, s
  integer :: i, n
  a = 0d0; b = 1d0; n = 100
  h = (b - a)/n
  s = (f(a) + f(b))/2d0
  do i = 1, n-1
     s = s + f(a + i*h)
  end do
  print '(A, F14.10)', 'int_0^1 e^x dx = ', h*s
contains
  real(8) function f(x)
    real(8), intent(in) :: x
    f = exp(x)
  end function f
end program trapezoid_demo
`,Ia=`package main

import (
	"fmt"
	"math"
)

// Composite trapezoidal rule for the integral of f on [a, b].
func trapezoid(f func(float64) float64, a, b float64, n int) float64 {
	h := (b - a) / float64(n)
	s := (f(a) + f(b)) / 2
	for i := 1; i < n; i++ {
		s += f(a + float64(i)*h)
	}
	return h * s
}

func main() {
	fmt.Println("int_0^1 e^x dx ~", trapezoid(math.Exp, 0, 1, 100), " exact =", math.E-1)
}
`,Da=`function trapezoid(f, a, b, n = 100)
    h = (b - a) / n
    s = (f(a) + f(b)) / 2
    for i in 1:n-1
        s += f(a + i*h)
    end
    return h * s
end

println("int_0^1 e^x dx = ", trapezoid(exp, 0.0, 1.0, 100))
`,Wa=`// Composite trapezoidal rule for the integral of f on [a, b].
function trapezoid(f, a, b, n = 100) {
  const h = (b - a) / n;
  let s = (f(a) + f(b)) / 2;
  for (let i = 1; i < n; i++) s += f(a + i * h);
  return h * s;
}

console.log("int_0^1 e^x dx ~", trapezoid(Math.exp, 0, 1, 100), " exact =", Math.E - 1);
`,Ga=`function I = trapezoid(f, a, b, n)
% TRAPEZOID  Composite trapezoidal rule for the integral of f on [a,b].
    if nargin < 4, n = 100; end
    x = linspace(a, b, n+1);
    y = f(x);
    h = (b - a) / n;
    I = h * (y(1)/2 + sum(y(2:end-1)) + y(end)/2);
end

% --- Demo ---
fprintf('int_0^1 e^x dx ~ %.10f\\n', trapezoid(@exp, 0, 1, 100));
`,Ha=`import numpy as np


def trapezoid(f, a, b, n=100):
    """Composite trapezoidal rule for the integral of f on [a, b]."""
    x = np.linspace(a, b, n + 1)
    y = f(x)
    h = (b - a) / n
    return h * (y[0] / 2 + y[1:-1].sum() + y[-1] / 2)


if __name__ == "__main__":
    import math
    print("int_0^1 e^x dx ~", trapezoid(np.exp, 0, 1, 100), " exact =", math.e - 1)
`,Va=`# Composite trapezoidal rule for the integral of f on [a, b].
trapezoid <- function(f, a, b, n = 100) {
  x <- seq(a, b, length.out = n + 1)
  y <- f(x)
  h <- (b - a) / n
  h * (y[1] / 2 + sum(y[2:n]) + y[n + 1] / 2)
}

cat("int_0^1 e^x dx ~", trapezoid(exp, 0, 1, 100), " exact =", exp(1) - 1, "\\n")
`,Ua=`// Composite trapezoidal rule.
fn trapezoid<F: Fn(f64) -> f64>(f: F, a: f64, b: f64, n: usize) -> f64 {
    let h = (b - a) / n as f64;
    let mut s = (f(a) + f(b)) / 2.0;
    for i in 1..n { s += f(a + i as f64 * h); }
    h * s
}
fn main() {
    println!("int_0^1 e^x dx = {}", trapezoid(|x: f64| x.exp(), 0.0, 1.0, 100));
}
`,Ba=`trapezoid[f_, a_, b_, n_ : 100] := Module[{h = (b - a)/n},
   h (f[a]/2 + f[b]/2 + Sum[f[a + i h], {i, 1, n - 1}])];
Print["int_0^1 e^x dx = ", trapezoid[Exp, 0., 1., 100]]
`,Qa=Object.assign({"./composite.cpp":Wt,"./composite.f90":Gt,"./composite.go":Ht,"./composite.jl":Vt,"./composite.js":Ut,"./composite.m":Bt,"./composite.py":Qt,"./composite.r":Jt,"./composite.rs":Yt,"./composite.wl":Zt,"./differentiation.cpp":Xt,"./differentiation.f90":ea,"./differentiation.go":na,"./differentiation.jl":ta,"./differentiation.js":aa,"./differentiation.m":ra,"./differentiation.py":ia,"./differentiation.r":sa,"./differentiation.rs":oa,"./differentiation.wl":la,"./gauss-quad.cpp":ha,"./gauss-quad.f90":da,"./gauss-quad.go":fa,"./gauss-quad.jl":ua,"./gauss-quad.js":ca,"./gauss-quad.m":pa,"./gauss-quad.py":ma,"./gauss-quad.r":$a,"./gauss-quad.rs":ga,"./gauss-quad.wl":xa,"./richardson.cpp":_a,"./richardson.f90":ba,"./richardson.go":ka,"./richardson.jl":ya,"./richardson.js":va,"./richardson.m":za,"./richardson.py":wa,"./richardson.r":ja,"./richardson.rs":qa,"./richardson.wl":Sa,"./simpson.cpp":Na,"./simpson.f90":Ca,"./simpson.go":Ta,"./simpson.jl":Aa,"./simpson.js":La,"./simpson.m":Oa,"./simpson.py":Ka,"./simpson.r":Ma,"./simpson.rs":Pa,"./simpson.wl":Ra,"./trapezoid.cpp":Ea,"./trapezoid.f90":Fa,"./trapezoid.go":Ia,"./trapezoid.jl":Da,"./trapezoid.js":Wa,"./trapezoid.m":Ga,"./trapezoid.py":Ha,"./trapezoid.r":Va,"./trapezoid.rs":Ua,"./trapezoid.wl":Ba}),P=(a,e)=>Qa[`./${a}.${e}`],Ja={differentiation:{en:"Numerical differentiation (central differences)",hu:"Numerikus deriválás (centrális differenciák)"},richardson:{en:"Richardson extrapolation of the derivative",hu:"A derivált Richardson-extrapolációja"},trapezoid:{en:"Composite trapezoidal rule",hu:"Összetett trapéz-szabály"},simpson:{en:"Composite Simpson's rule",hu:"Összetett Simpson-szabály"},"gauss-quad":{en:"Gauss–Legendre quadrature (2- and 3-point)",hu:"Gauss–Legendre-kvadratúra (2- és 3-pontos)"}},Ya=a=>({id:a,caption:Ja[a],snippets:{matlab:P(a,"m"),python:P(a,"py"),cpp:P(a,"cpp"),julia:P(a,"jl"),rust:P(a,"rs"),fortran:P(a,"f90"),wolfram:P(a,"wl"),javascript:P(a,"js"),go:P(a,"go"),r:P(a,"r")}}),Za={"7_1":["differentiation"],"7_2":["richardson"],"7_3":["trapezoid","simpson"],"7_4":["gauss-quad"]};function Xa(a){return(Za[a]??[]).map(Ya)}const er={"7_1":[{id:"q-7_1-1",prompt:{en:"Which is NOT true for numerical differentiation?",hu:"Melyik NEM igaz a numerikus deriválásra?"},options:[{en:"The approximate derivative can be obtained by differentiating a Lagrange interpolating polynomial",hu:"A közelítő derivált egy Lagrange-interpolációs polinom deriválásával nyerhető"},{en:"It is sensitive with respect to rounding error",hu:"Érzékeny a kerekítési hibára"},{en:"It is a well-conditioned mathematical problem",hu:"Jól kondicionált matematikai feladat"},{en:"The approximate derivative can be obtained with the help of the Taylor formula",hu:"A közelítő derivált a Taylor-formula segítségével nyerhető"}],answer:2,explanation:{en:"Numerical differentiation is ill-conditioned: small input errors are strongly amplified.",hu:"A numerikus deriválás rosszul kondicionált: a kis bemeneti hibák erősen felnagyítódnak."}},{id:"q-7_1-2",prompt:{en:"What is the main cause of instability in numerical differentiation for small h?",hu:"Mi a numerikus deriválás instabilitásának fő oka kis h-ra?"},options:[{en:"Truncation error increases",hu:"A csonkítási hiba nő"},{en:"Step size is too large",hu:"A lépésköz túl nagy"},{en:"Rounding error increases",hu:"A kerekítési hiba nő"},{en:"Function value becomes zero",hu:"A függvényérték nullává válik"}],answer:2,explanation:{en:"Dividing nearly-equal values by a tiny h magnifies rounding error.",hu:"Közel egyenlő értékek parányi h-val való osztása felnagyítja a kerekítési hibát."}},{id:"q-7_1-3",prompt:{en:"Order of accuracy of f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h:",hu:"Az f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h pontossági rendje:"},options:[{en:"First",hu:"Elsőrendű"},{en:"Second",hu:"Másodrendű"},{en:"Fourth",hu:"Negyedrendű"},{en:"Zero",hu:"Nulladrendű"}],answer:0,explanation:{en:"The forward difference has first-order accuracy, O(h).",hu:"Az előrehaladó differencia elsőrendű pontosságú, O(h)."}},{id:"q-7_1-4",prompt:{en:"Error term of the forward difference f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h:",hu:"Az előrehaladó differencia f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h hibatagja:"},options:[{en:"(h/2) f″(x₀)",hu:"(h/2) f″(x₀)"},{en:"(h²/2) f″(x₀)",hu:"(h²/2) f″(x₀)"},{en:"−h f″(x₀)",hu:"−h f″(x₀)"},{en:"−(h/2) f″(ξ)",hu:"−(h/2) f″(ξ)"}],answer:3,explanation:{en:"Taylor expansion gives the leading error −(h/2) f″(ξ).",hu:"A Taylor-sorfejtés a −(h/2) f″(ξ) vezető hibát adja."}},{id:"q-7_1-5",prompt:{en:"Which component contributes to the total error in the forward difference?",hu:"Melyik összetevő járul hozzá az előrehaladó differencia teljes hibájához?"},options:[{en:"Only Taylor expansion error",hu:"Csak a Taylor-sorfejtés hibája"},{en:"Only truncation error",hu:"Csak a csonkítási hiba"},{en:"Truncation and rounding errors",hu:"A csonkítási és a kerekítési hiba"},{en:"Only rounding error",hu:"Csak a kerekítési hiba"}],answer:2,explanation:{en:"Total error combines O(h) truncation and O(ε/h) rounding error.",hu:"A teljes hiba az O(h) csonkítási és az O(ε/h) kerekítési hibát egyesíti."}}],"7_3":[{id:"q-7_3-1",prompt:{en:"In Newton–Cotes formulas, the weights are determined by:",hu:"A Newton–Cotes-formulákban a súlyokat a következő határozza meg:"},options:[{en:"Integrating Lagrange basis polynomials",hu:"A Lagrange-bázispolinomok integrálása"},{en:"Taylor expansions",hu:"Taylor-sorfejtések"},{en:"Solving differential equations",hu:"Differenciálegyenletek megoldása"},{en:"Rounding approximations",hu:"Kerekítési közelítések"}],answer:0,explanation:{en:"The weights come from integrating the Lagrange basis over the interval.",hu:"A súlyok a Lagrange-bázis intervallumon vett integrálásából származnak."}},{id:"q-7_3-2",prompt:{en:"Which Newton–Cotes formula uses all mesh points inside the open interval?",hu:"Melyik Newton–Cotes-formula használja az összes csomópontot a nyílt intervallum belsejében?"},options:[{en:"Open",hu:"Nyílt"},{en:"Closed",hu:"Zárt"},{en:"Exact",hu:"Pontos"},{en:"Composite",hu:"Összetett"}],answer:0,explanation:{en:"Open Newton–Cotes formulas exclude the endpoints, using only interior points.",hu:"A nyílt Newton–Cotes-formulák kihagyják a végpontokat, csak belső pontokat használnak."}},{id:"q-7_3-3",prompt:{en:"What is the weight for the middle point in Simpson’s rule?",hu:"Mekkora a középső pont súlya a Simpson-formulában?"},options:[{en:"2",hu:"2"},{en:"1",hu:"1"},{en:"3",hu:"3"},{en:"4",hu:"4"}],answer:3,explanation:{en:"Simpson’s rule has the weight pattern 1, 4, 1, so the middle weight is 4.",hu:"A Simpson-formula súlymintája 1, 4, 1, így a középső súly 4."}},{id:"q-7_3-4",prompt:{en:"What does 'composite' in the composite trapezoidal rule refer to?",hu:"Mire utal az „összetett” az összetett trapézformulában?"},options:[{en:"Computing indefinite integrals",hu:"Határozatlan integrálok számítására"},{en:"Combining differentiation and integration",hu:"A deriválás és integrálás kombinálására"},{en:"Using second derivatives in the estimate",hu:"Második deriváltak használatára a becslésben"},{en:"Using multiple trapezoids over subintervals",hu:"Több trapéz használatára a részintervallumokon"}],answer:3,explanation:{en:"A composite rule sums the basic rule over many subintervals.",hu:"Egy összetett formula az alapformulát összegzi sok részintervallumon."}},{id:"q-7_3-5",prompt:{en:"Which Simpson-based rule uses three subintervals (four points)?",hu:"Melyik Simpson-alapú formula használ három részintervallumot (négy pontot)?"},options:[{en:"Trapezoidal rule",hu:"Trapézformula"},{en:"Simpson’s 3/8 rule",hu:"Simpson 3/8-os formulája"},{en:"Composite Simpson's rule",hu:"Összetett Simpson-formula"},{en:"Midpoint rule",hu:"Középponti formula"}],answer:1,explanation:{en:"Simpson’s 3/8 rule integrates over three subintervals (four nodes).",hu:"A Simpson 3/8-os formula három részintervallumon (négy csomóponton) integrál."}}],"7_4":[{id:"q-7_4-1",prompt:{en:"What kind of error decay does Gaussian quadrature exhibit for smooth functions?",hu:"Milyen hibacsökkenést mutat a Gauss-kvadratúra sima függvényekre?"},options:[{en:"Polynomial decay",hu:"Polinomiális csökkenés"},{en:"Linear decay",hu:"Lineáris csökkenés"},{en:"No decay",hu:"Nincs csökkenés"},{en:"Exponential decay",hu:"Exponenciális csökkenés"}],answer:3,explanation:{en:"For analytic/smooth integrands, Gaussian quadrature converges exponentially.",hu:"Analitikus/sima integrandusokra a Gauss-kvadratúra exponenciálisan konvergál."}},{id:"q-7_4-2",prompt:{en:"Which polynomials define the orthogonality in standard Gaussian quadrature?",hu:"Mely polinomok definiálják az ortogonalitást a standard Gauss-kvadratúrában?"},options:[{en:"Chebyshev polynomials",hu:"Csebisev-polinomok"},{en:"Hermite polynomials",hu:"Hermite-polinomok"},{en:"Legendre polynomials",hu:"Legendre-polinomok"},{en:"Laguerre polynomials",hu:"Laguerre-polinomok"}],answer:2,explanation:{en:"Standard Gauss–Legendre quadrature uses the Legendre polynomials (weight 1).",hu:"A standard Gauss–Legendre-kvadratúra a Legendre-polinomokat használja (1 súllyal)."}},{id:"q-7_4-3",prompt:{en:"Maximum polynomial degree for which an n-point Gaussian quadrature is exact:",hu:"A legnagyobb polinomfok, amelyre egy n-pontos Gauss-kvadratúra pontos:"},options:[{en:"n − 1",hu:"n − 1"},{en:"n",hu:"n"},{en:"2n",hu:"2n"},{en:"2n − 1",hu:"2n − 1"}],answer:3,explanation:{en:"n-point Gaussian quadrature is exact for polynomials up to degree 2n − 1.",hu:"Az n-pontos Gauss-kvadratúra pontos a 2n − 1 fokig terjedő polinomokra."}},{id:"q-7_4-4",prompt:{en:"The 2-point Gaussian quadrature approximation of ∫₋₁¹ f(x) dx is:",hu:"A ∫₋₁¹ f(x) dx 2-pontos Gauss-kvadratúrás közelítése:"},options:[{en:"f(−√3/3) + f(√3/3)",hu:"f(−√3/3) + f(√3/3)"},{en:"f(−1) + f(1)",hu:"f(−1) + f(1)"},{en:"½[f(−√2/2) + f(√2/2)]",hu:"½[f(−√2/2) + f(√2/2)]"},{en:"f(0)",hu:"f(0)"}],answer:0,explanation:{en:"Nodes ±1/√3 = ±√3/3 with unit weights give the 2-point Gauss rule.",hu:"A ±1/√3 = ±√3/3 csomópontok egységnyi súlyokkal adják a 2-pontos Gauss-formulát."}},{id:"q-7_4-5",prompt:{en:"Transformation to apply Gaussian quadrature on [a, b]:",hu:"A Gauss-kvadratúra [a, b]-n való alkalmazásához szükséges transzformáció:"},options:[{en:"x = (a + b)/2 + t",hu:"x = (a + b)/2 + t"},{en:"x = (b − a)/2 · t + (a + b)/2",hu:"x = (b − a)/2 · t + (a + b)/2"},{en:"x = (b − a)/(t + 1)",hu:"x = (b − a)/(t + 1)"},{en:"x = t · (b − a)",hu:"x = t · (b − a)"}],answer:1,explanation:{en:"This affine map sends [−1, 1] onto [a, b].",hu:"Ez az affin leképezés a [−1, 1]-et [a, b]-re viszi."}}]};function Le(a){return er[a]??[]}function nr({slug:a}={}){const e=tn(),n=a??e.slug??"",t=a!=null,{t:i,i18n:r}=M(),o=r.language==="hu"?"hu":"en",[s,d]=k.useState(null),[l,u]=k.useState("loading");return k.useEffect(()=>{let c=!0;return u("loading"),Kt(n,o).then(f=>{c&&(d(f),u("ok"))}).catch(()=>c&&u("error")),()=>{c=!1}},[n,o]),h.jsxs("article",{children:[!t&&h.jsxs(Re,{to:"/numerical-calculus/lessons",className:"text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300",children:["← ",i("lessons.back")]}),l==="loading"&&h.jsx("p",{className:"mt-6 text-slate-500",children:i("lessons.loading")}),l==="error"&&h.jsx("p",{className:"mt-6 text-rose-600",children:i("lessons.error")}),l==="ok"&&s&&h.jsx(J.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},className:"card mt-4",children:h.jsx(se,{markdown:s.markdown})},s.slug+o),l==="ok"&&s&&Xa(s.slug).map(c=>h.jsx($n,{snippets:c.snippets,caption:c.caption},c.id)),l==="ok"&&s&&Le(s.slug).length>0&&h.jsx(gn,{questions:Le(s.slug)}),l==="ok"&&s&&h.jsxs(h.Fragment,{children:[h.jsx(Ft,{slug:s.slug}),h.jsx(Dt,{slug:s.slug})]})]})}const tr=(a,e,n)=>(a(e+n)-a(e))/n,ar=(a,e,n)=>(a(e)-a(e-n))/n,rr=(a,e,n)=>(a(e+n)-a(e-n))/(2*n),ir=(a,e,n)=>(a(e-n)-2*a(e)+a(e+n))/(n*n),Be=(a,e,n)=>(a(e-2*n)-8*a(e-n)+8*a(e+n)-a(e+2*n))/(12*n),Oe={forward:{id:"forward",order:1,apply:tr},backward:{id:"backward",order:1,apply:ar},central:{id:"central",order:1,apply:rr},"five-point":{id:"five-point",order:1,apply:Be},second:{id:"second",order:2,apply:ir}};function sr(a,e,n,t){const i=(n-e)/t;let r=.5*(a(e)+a(n));for(let o=1;o<t;o++)r+=a(e+o*i);return r*i}function Qe(a,e,n,t){const i=t%2===0?t:t+1,r=(n-e)/i;let o=a(e)+a(n);for(let s=1;s<i;s++)o+=(s%2===0?2:4)*a(e+s*r);return o*r/3}const Je={2:{nodes:[-.5773502692,.5773502692],weights:[1,1]},3:{nodes:[-.7745966692,0,.7745966692],weights:[.5555555556,.8888888889,.5555555556]},4:{nodes:[-.8611363116,-.3399810436,.3399810436,.8611363116],weights:[.3478548451,.6521451549,.6521451549,.3478548451]},5:{nodes:[-.9061798459,-.5384693101,0,.5384693101,.9061798459],weights:[.236926885,.4786286705,.5688888889,.4786286705,.236926885]}};function ne(a,e,n,t){const{nodes:i,weights:r}=Je[t],o=(n-e)/2,s=(e+n)/2;let d=0;for(let l=0;l<i.length;l++)d+=r[l]*a(o*i[l]+s);return o*d}const Ke={trapezoid:{id:"trapezoid",usesN:!0,apply:sr},simpson:{id:"simpson",usesN:!0,apply:Qe},gauss2:{id:"gauss2",usesN:!1,apply:(a,e,n)=>ne(a,e,n,2)},gauss3:{id:"gauss3",usesN:!1,apply:(a,e,n)=>ne(a,e,n,3)},gauss4:{id:"gauss4",usesN:!1,apply:(a,e,n)=>ne(a,e,n,4)},gauss5:{id:"gauss5",usesN:!1,apply:(a,e,n)=>ne(a,e,n,5)}};function or(a,e,n,t=4e3){return Qe(a,e,n,t)}const Ye=(a,e)=>Math.abs(a-e),me=bn(kn,{}),Me=[{id:"exp_x2x",latex:"e^{x^2+x}",expr:"exp(x^2 + x)"},{id:"exp_x",latex:"e^{x}",expr:"exp(x)"},{id:"x2_exp_x",latex:"x^2 e^{x}",expr:"x^2 * exp(x)"},{id:"sin",latex:"\\sin x",expr:"sin(x)"},{id:"poly",latex:"x^4 - 6x^2 + 3x",expr:"x^4 - 6*x^2 + 3*x"},{id:"exp_sin",latex:"e^{x}\\sin x",expr:"exp(x) * sin(x)"}];function $e(a){try{const e=me.parse(a),n=e.compile(),t=r=>{const o=n.evaluate({x:r});return typeof o=="number"?o:Number(o)},i=t(.123);return Number.isFinite(i),{f:t,ok:!0,node:e}}catch(e){return{f:()=>NaN,ok:!1,error:e instanceof Error?e.message:String(e)}}}function lr(a,e,n){try{let r=me.parse(a);for(let l=0;l<n;l++)r=me.derivative(r,"x");const s=r.compile().evaluate({x:e}),d=typeof s=="number"?s:Number(s);if(Number.isFinite(d))return d}catch{}const{f:t}=$e(a),i=1e-4;return n===1?Be(t,e,i):(t(e-i)-2*t(e)+t(e+i))/(i*i)}function Q({label:a,value:e,min:n,max:t,step:i,onChange:r,format:o}){return h.jsxs("label",{className:"block",children:[h.jsxs("div",{className:"mb-1 flex items-baseline justify-between",children:[h.jsx("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:a}),h.jsx("span",{className:"font-mono text-sm font-semibold text-brand-700 dark:text-brand-300",children:o?o(e):e})]}),h.jsx("input",{type:"range",min:n,max:t,step:i,value:e,onChange:s=>r(Number(s.target.value)),className:"h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600 dark:bg-slate-700"})]})}const O={top:12,right:12,bottom:24,left:36};function Ze({f:a,xMin:e,xMax:n,width:t=520,height:i=300,segments:r=[],areas:o=[],points:s=[]}){const{curve:d,x:l,y:u,yMin:c,yMax:f}=k.useMemo(()=>{const m=[],z=[];for(let _=0;_<=240;_++){const v=e+(n-e)*_/240;m.push(v),z.push(a(v))}const y=z.filter(_=>Number.isFinite(_));for(const _ of o)for(const[,v]of _.points)y.push(v);for(const _ of r)for(const[,v]of _.points)y.push(v);for(const _ of s)y.push(_.y);let x=Math.min(...y,0),j=Math.max(...y,0);(!Number.isFinite(x)||!Number.isFinite(j)||x===j)&&(x=-1,j=1);const q=(j-x)*.1||1;x-=q,j+=q;const S=_e().domain([e,n]).range([O.left,t-O.right]),N=_e().domain([x,j]).range([i-O.bottom,O.top]);let T="",C=!1;for(let _=0;_<=240;_++){const v=z[_];if(!Number.isFinite(v)){C=!1;continue}const L=S(m[_]),F=N(v);T+=`${C?"L":"M"}${L.toFixed(2)},${F.toFixed(2)} `,C=!0}return{curve:T,x:S,y:N,yMin:x,yMax:j}},[a,e,n,t,i,o,r,s]),p=$=>$.map((m,z)=>`${z?"L":"M"}${l(m[0]).toFixed(2)},${u(m[1]).toFixed(2)}`).join(" "),g=c<0&&f>0?u(0):null,w=e<0&&n>0?l(0):null;return h.jsxs("svg",{viewBox:`0 0 ${t} ${i}`,className:"h-auto w-full text-slate-400 dark:text-slate-500",role:"img",children:[h.jsx("rect",{x:O.left,y:O.top,width:t-O.left-O.right,height:i-O.top-O.bottom,className:"fill-transparent stroke-slate-200 dark:stroke-slate-700"}),g!==null&&h.jsx("line",{x1:O.left,x2:t-O.right,y1:g,y2:g,stroke:"currentColor",strokeWidth:1}),w!==null&&h.jsx("line",{x1:w,x2:w,y1:O.top,y2:i-O.bottom,stroke:"currentColor",strokeWidth:1}),o.map(($,m)=>h.jsx("path",{d:`${p($.points)} Z`,fill:$.color??"#06b6d4",fillOpacity:.22,stroke:$.color??"#06b6d4",strokeOpacity:.5,strokeWidth:1},`a${m}`)),h.jsx("path",{d,fill:"none",stroke:"#6366f1",strokeWidth:2.5,strokeLinejoin:"round"}),r.map(($,m)=>h.jsx("path",{d:p($.points),fill:"none",stroke:$.color??"#f59e0b",strokeWidth:2,strokeDasharray:$.dashed?"5 4":void 0},`s${m}`)),s.map(($,m)=>h.jsx("circle",{cx:l($.x),cy:u($.y),r:4,fill:$.color??"#f59e0b",stroke:"#fff",strokeWidth:1.5},`p${m}`)),h.jsx("text",{x:O.left,y:i-6,className:"fill-slate-500 text-[10px]",children:e}),h.jsx("text",{x:t-O.right,y:i-6,textAnchor:"end",className:"fill-slate-500 text-[10px]",children:n})]})}function hr({tex:a,display:e=!1,className:n}){const t=k.useMemo(()=>{try{return yn.renderToString(a,{displayMode:e,throwOnError:!1})}catch{return a}},[a,e]);return h.jsx("span",{className:n,dangerouslySetInnerHTML:{__html:t}})}function Xe({expr:a,onChange:e,valid:n}){const{t}=M(),i=Me.find(r=>r.expr===a);return h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:t("playground.function")}),h.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:Me.map(r=>h.jsx("button",{type:"button",onClick:()=>e(r.expr),className:`chip border transition ${(i==null?void 0:i.id)===r.id?"border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200":"border-slate-200 bg-white text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"}`,children:h.jsx(hr,{tex:r.latex})},r.id))}),h.jsxs("label",{className:"mt-3 block",children:[h.jsx("span",{className:"text-xs uppercase tracking-wide text-slate-400",children:t("playground.custom")}),h.jsx("input",{type:"text",value:a,spellCheck:!1,onChange:r=>e(r.target.value),className:`mt-1 w-full rounded-xl border bg-white px-3 py-2 font-mono text-sm outline-none transition dark:bg-slate-800 ${n?"border-slate-200 focus:border-brand-400 dark:border-slate-700":"border-rose-400 focus:border-rose-500"}`})]}),n?h.jsx("p",{className:"mt-1 text-xs text-slate-400",children:t("playground.custom_hint")}):h.jsx("p",{className:"mt-1 text-xs text-rose-500",children:t("playground.invalid")})]})}const Pe=a=>Number.isFinite(a)?a.toPrecision(7):"—",dr=a=>Number.isFinite(a)?a.toExponential(4):"—";function en({approx:a,reference:e,error:n}){const{t}=M(),i=[{label:t("playground.approx"),value:Pe(a),accent:!0},{label:t("playground.reference"),value:Pe(e),accent:!1},{label:t("playground.error"),value:dr(n),accent:!1}];return h.jsx("dl",{className:"grid gap-2",children:i.map(r=>h.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-slate-100 px-4 py-2 dark:bg-slate-800/70",children:[h.jsx("dt",{className:"text-sm text-slate-500 dark:text-slate-400",children:r.label}),h.jsx("dd",{className:`font-mono text-sm font-semibold ${r.accent?"text-brand-700 dark:text-brand-300":"text-slate-800 dark:text-slate-100"}`,children:r.value})]},r.label))})}const fr=["forward","backward","central","five-point","second"];function ur(){const{t:a}=M(),[e,n]=k.useState("exp(x^2 + x)"),[t,i]=k.useState("central"),[r,o]=k.useState(0),[s,d]=k.useState(.1),l=k.useMemo(()=>$e(e),[e]),u=Oe[t].order,{approx:c,reference:f,error:p,segments:g,points:w}=k.useMemo(()=>{if(!l.ok)return{approx:NaN,reference:NaN,error:NaN,segments:[],points:[]};const m=l.f,z=Oe[t].apply(m,r,s),y=lr(e,r,u),x=Ye(z,y),j=[],q=[],S=m(r);if(q.push({x:r,y:S,color:"#ef4444"}),u===1){const N=Math.max(2*s,1),T=r-N,C=r+N;j.push({points:[[T,S+y*(T-r)],[C,S+y*(C-r)]],color:"#10b981",dashed:!0}),t==="central"||t==="five-point"?(q.push({x:r-s,y:m(r-s)},{x:r+s,y:m(r+s)}),j.push({points:[[r-s,m(r-s)],[r+s,m(r+s)]],color:"#f59e0b"})):t==="forward"?(q.push({x:r+s,y:m(r+s)}),j.push({points:[[r,S],[r+s,m(r+s)]],color:"#f59e0b"})):(q.push({x:r-s,y:m(r-s)}),j.push({points:[[r-s,m(r-s)],[r,S]],color:"#f59e0b"}))}else q.push({x:r-s,y:m(r-s)},{x:r+s,y:m(r+s)});return{approx:z,reference:y,error:x,segments:j,points:q}},[l,t,r,s,e,u]),$=Math.max(2.5*s,1.5);return h.jsxs("div",{className:"grid gap-5 lg:grid-cols-2",children:[h.jsxs("div",{className:"card space-y-4",children:[h.jsx(Xe,{expr:e,onChange:n,valid:l.ok}),h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:a("playground.method")}),h.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:fr.map(m=>h.jsx("button",{type:"button",onClick:()=>i(m),className:`chip border transition ${t===m?"border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200":"border-slate-200 bg-white text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"}`,children:a(`playground.methods.${m}`)},m))})]}),h.jsx(Q,{label:a("playground.x0"),value:r,min:-3,max:3,step:.1,onChange:o,format:m=>m.toFixed(2)}),h.jsx(Q,{label:a("playground.h"),value:s,min:.01,max:1,step:.01,onChange:d,format:m=>m.toFixed(2)}),h.jsx(en,{approx:c,reference:f,error:p})]}),h.jsxs("div",{className:"card",children:[h.jsx(Ze,{f:l.f,xMin:r-$,xMax:r+$,segments:g,points:w}),h.jsxs("div",{className:"mt-3 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400",children:[h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"inline-block h-1 w-4 rounded bg-brand-500"})," f(x)"]}),u===1&&h.jsxs(h.Fragment,{children:[h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"inline-block h-1 w-4 rounded bg-amber-500"})," ",a("playground.approx")]}),h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"inline-block h-1 w-4 rounded bg-emerald-500"})," ",a("playground.reference")]})]})]})]})]})}const cr=["trapezoid","simpson","gauss2","gauss3","gauss4","gauss5"];function pr(){const{t:a}=M(),[e,n]=k.useState("x^2 * exp(x)"),[t,i]=k.useState("simpson"),[r,o]=k.useState(0),[s,d]=k.useState(1),[l,u]=k.useState(4),c=k.useMemo(()=>$e(e),[e]),f=Ke[t].usesN,{approx:p,reference:g,error:w,areas:$,points:m}=k.useMemo(()=>{if(!c.ok||s<=r)return{approx:NaN,reference:NaN,error:NaN,areas:[],points:[]};const y=c.f,x=Ke[t].apply(y,r,s,l),j=or(y,r,s),q=Ye(x,j),S=[],N=[];if(t==="trapezoid"){const T=(s-r)/l;for(let C=0;C<l;C++){const _=r+C*T,v=_+T;S.push({points:[[_,0],[_,y(_)],[v,y(v)],[v,0]]})}}else{const T=[[r,0]],C=80;for(let _=0;_<=C;_++){const v=r+(s-r)*_/C;T.push([v,y(v)])}if(T.push([s,0]),S.push({points:T}),t.startsWith("gauss")){const _=Number(t.slice(5)),v=(s-r)/2,L=(r+s)/2;for(const F of Je[_].nodes){const I=v*F+L;N.push({x:I,y:y(I),color:"#ef4444"})}}}return{approx:x,reference:j,error:q,areas:S,points:N}},[c,t,r,s,l]),z=(s-r)*.1||.2;return h.jsxs("div",{className:"grid gap-5 lg:grid-cols-2",children:[h.jsxs("div",{className:"card space-y-4",children:[h.jsx(Xe,{expr:e,onChange:n,valid:c.ok}),h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:a("playground.method")}),h.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:cr.map(y=>h.jsx("button",{type:"button",onClick:()=>i(y),className:`chip border transition ${t===y?"border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200":"border-slate-200 bg-white text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"}`,children:a(`playground.methods.${y}`)},y))})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsx(Q,{label:a("playground.a"),value:r,min:-3,max:3,step:.1,onChange:o,format:y=>y.toFixed(2)}),h.jsx(Q,{label:a("playground.b"),value:s,min:-3,max:4,step:.1,onChange:d,format:y=>y.toFixed(2)})]}),f&&h.jsx(Q,{label:a("playground.n"),value:l,min:2,max:20,step:t==="simpson"?2:1,onChange:u}),h.jsx(en,{approx:p,reference:g,error:w})]}),h.jsxs("div",{className:"card",children:[h.jsx(Ze,{f:c.f,xMin:r-z,xMax:s+z,areas:$,points:m}),h.jsxs("div",{className:"mt-3 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400",children:[h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"inline-block h-1 w-4 rounded bg-brand-500"})," f(x)"]}),h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"inline-block h-3 w-4 rounded bg-accent-500/30"})," ∫ region"]}),t.startsWith("gauss")&&h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"inline-block h-2 w-2 rounded-full bg-red-500"})," nodes"]})]})]})]})}function mr(){const{t:a}=M(),[e,n]=k.useState("diff");return h.jsxs("div",{children:[h.jsx("h1",{className:"text-3xl font-extrabold",children:a("playground.title")}),h.jsx("p",{className:"mt-1 text-slate-500 dark:text-slate-400",children:a("playground.lead")}),h.jsx("div",{className:"mt-5 inline-flex rounded-xl bg-slate-200 p-1 dark:bg-slate-800",children:["diff","int"].map(t=>h.jsx("button",{type:"button",onClick:()=>n(t),className:`rounded-lg px-4 py-2 text-sm font-semibold transition ${e===t?"bg-white text-brand-700 shadow dark:bg-slate-900 dark:text-brand-300":"text-slate-600 dark:text-slate-300"}`,children:a(t==="diff"?"playground.tab_diff":"playground.tab_int")},t))}),h.jsx("div",{className:"mt-5",children:e==="diff"?h.jsx(ur,{}):h.jsx(pr,{})})]})}function $r({correct:a,total:e,onRetry:n}){const{t}=M(),i=e?Math.round(a/e*100):0,r=i>=80?"🏆":i>=50?"👍":"📚";return h.jsxs(J.div,{initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},className:"card text-center",children:[h.jsx("div",{className:"text-6xl",children:r}),h.jsx("h2",{className:"mt-3 text-2xl font-extrabold",children:t("quiz.results_title")}),h.jsx("p",{className:"mt-2 text-lg text-slate-600 dark:text-slate-300",children:t("quiz.results_score",{correct:a,total:e})}),h.jsx("div",{className:"mx-auto mt-4 h-3 w-full max-w-sm overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700",children:h.jsx(J.div,{className:"h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500",initial:{width:0},animate:{width:`${i}%`},transition:{duration:.6}})}),h.jsxs("div",{className:"mt-6 flex flex-wrap justify-center gap-3",children:[h.jsx("button",{type:"button",onClick:n,className:"btn-primary",children:t("quiz.retry")}),h.jsx(Re,{to:"/numerical-calculus/lessons",className:"btn-ghost",children:t("quiz.to_lessons")})]})]})}function gr(){var _;const{t:a,i18n:e}=M(),n=e.language==="hu"?"hu":"en",[t,i]=k.useState([]),[r,o]=k.useState(0),[s,d]=k.useState(""),[l,u]=k.useState(null),[c,f]=k.useState(0),[p,g]=k.useState(0),[w,$]=k.useState(!1),[m,z]=k.useState(!0);function y(v=t){o(0),d(""),u(null),f(0),g(0),$(!1)}if(k.useEffect(()=>{z(!0),Mt(n).then(v=>{i(v),y(v)}).finally(()=>z(!1))},[n]),m)return h.jsx("p",{className:"card text-slate-500",children:a("quiz.loading")});if(!t.length)return h.jsx("p",{className:"card text-slate-500",children:a("quiz.loading")});if(w)return h.jsx($r,{correct:c,total:t.length,onRetry:()=>y()});const x=t[r],j=r===t.length-1,q=l!==null,S=s!==""&&!q;async function N(){if(s==="")return;const v=await Pt(x.id,s,n);u(v),v.correct?(f(L=>L+1),g(L=>L+1)):g(0)}function T(){if(j){$(!0);return}o(v=>v+1),d(""),u(null)}const C=(v,L)=>q?v?"border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30":L?"border-rose-500 bg-rose-50 dark:bg-rose-900/30":"border-slate-200 bg-white opacity-60 dark:border-slate-700 dark:bg-slate-800":L?"border-brand-500 bg-brand-50 dark:bg-brand-900/40":"border-slate-200 bg-white hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800";return h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"flex items-center justify-between text-sm",children:[h.jsxs("span",{className:"font-semibold text-slate-500 dark:text-slate-400",children:[a("quiz.question")," ",r+1," ",a("quiz.of")," ",t.length]}),h.jsxs("span",{className:"flex gap-3",children:[h.jsxs("span",{className:"chip bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-200",children:[a("quiz.score"),": ",c]}),h.jsxs("span",{className:"chip bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200",children:["🔥 ",p]})]})]}),h.jsx("div",{className:"mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700",children:h.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all",style:{width:`${(r+(q?1:0))/t.length*100}%`}})}),h.jsxs("span",{className:"mt-4 inline-block chip bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",children:[a("quiz.topic")," ",x.topic]}),h.jsx(_n,{mode:"wait",children:h.jsxs(J.div,{initial:{opacity:0,x:16},animate:{opacity:1,x:0},exit:{opacity:0,x:-16},children:[h.jsx("h2",{className:"mt-3 text-lg font-semibold",children:x.prompt}),h.jsxs("div",{className:"mt-4 space-y-2",children:[x.type==="mcq"&&((_=x.options)==null?void 0:_.map((v,L)=>h.jsxs("button",{type:"button",disabled:q,onClick:()=>d(L),className:`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${C((l==null?void 0:l.answer)===L,s===L)}`,children:[h.jsx("span",{className:"grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-200 text-xs font-bold dark:bg-slate-700",children:String.fromCharCode(65+L)}),v]},L))),x.type==="truefalse"&&[!0,!1].map(v=>h.jsx("button",{type:"button",disabled:q,onClick:()=>d(v),className:`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${C((l==null?void 0:l.answer)===v,s===v)}`,children:a(v?"quiz.true":"quiz.false")},String(v))),x.type==="numeric"&&h.jsx("input",{type:"number",step:"any",disabled:q,placeholder:a("quiz.numeric_placeholder"),value:s===""?"":String(s),onChange:v=>d(v.target.value===""?"":Number(v.target.value)),className:"w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono outline-none focus:border-brand-400 dark:border-slate-700 dark:bg-slate-800"})]}),q&&h.jsxs(J.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},className:`mt-4 rounded-xl p-4 ${l!=null&&l.correct?"bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200":"bg-rose-50 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200"}`,children:[h.jsx("p",{className:"font-bold",children:l!=null&&l.correct?a("quiz.correct"):a("quiz.incorrect")}),h.jsx("p",{className:"mt-1 text-sm",children:l==null?void 0:l.explanation})]})]},x.id)}),h.jsx("div",{className:"mt-5 flex justify-end gap-3",children:q?h.jsx("button",{type:"button",onClick:T,className:"btn-primary",children:a(j?"quiz.finish":"quiz.next")}):h.jsx("button",{type:"button",disabled:!S,onClick:N,className:"btn-primary disabled:opacity-50",children:a("quiz.check")})})]})}function xr(){const{t:a}=M();return h.jsxs("div",{children:[h.jsx("h1",{className:"text-3xl font-extrabold",children:a("quiz.title")}),h.jsx("p",{className:"mb-5 mt-1 text-slate-500 dark:text-slate-400",children:a("quiz.lead")}),h.jsx(gr,{})]})}const nn=He,_r=[...nn.map(a=>({id:a.slug,no:a.id==="intro"?"7":a.id,title:a.title,blurb:{en:"",hu:""}})),{id:"playground",no:"7·pg",title:{en:"Playground",hu:"Játéktér"},blurb:{en:"",hu:""}},{id:"quiz",no:"7·qz",title:{en:"Quiz",hu:"Kvíz"},blurb:{en:"",hu:""}}];function Tr(){const a=an(),{t:e}=M(),{lang:n}=rn();k.useEffect(()=>{A.changeLanguage(n)},[n]),k.useEffect(()=>{let i=decodeURIComponent(a.hash.replace(/^#/,""));if(!i){const r=a.pathname.match(/\/lessons\/([^/]+)/);if(r)i=r[1];else{const o=a.pathname.split("/").filter(Boolean).pop()??"";["playground","quiz"].includes(o)&&(i=o)}}i&&requestAnimationFrame(()=>{var r;return(r=document.getElementById(i))==null?void 0:r.scrollIntoView()})},[a.pathname,a.hash]);const t={scrollMarginTop:"calc(var(--nav-h) + var(--scrolly-topbar-h, 44px) + 8px)"};return h.jsxs("div",{className:"flex min-h-screen flex-col",children:[h.jsx(xn,{sections:_r}),h.jsxs("main",{className:"mx-auto w-full max-w-5xl flex-1 space-y-16 px-4 py-8",children:[nn.map(i=>h.jsx("section",{id:i.slug,style:t,children:h.jsx(nr,{slug:i.slug})},i.slug)),h.jsx("section",{id:"playground",style:t,children:h.jsx(mr,{})}),h.jsx("section",{id:"quiz",style:t,children:h.jsx(xr,{})})]}),h.jsx("footer",{className:"border-t border-slate-200 py-6 text-center text-sm text-slate-400 dark:border-slate-800",children:e("app.footer")})]})}export{Tr as default};
