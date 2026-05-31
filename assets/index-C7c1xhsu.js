import{r as y,j as h,f as nt,L as Ee,e as at,d as rt}from"./index-CQWxsxwj.js";import{b as it,c as st,a as ot,g as lt,n as ht,d as dt}from"./7_4-CWMfsFEh.js";import{M as ft,r as ct,d as ut,c as pt}from"./index-DQolu2FQ.js";import{C as mt,Q as gt,S as xt}from"./Quiz-DOgDaxTz.js";import{m as J,A as $t}from"./proxy-BdRdPMu6.js";import{c as bt,a as _t}from"./create-D_e7e3MO.js";import{m as be}from"./linear-Dm4wCrSs.js";import{k as yt}from"./CodeBlock-BjbEzVQe.js";import"./bitOr.transform-ChpRAsD3.js";import"./fraction-DqatKmli.js";const vt=(a,e,t,n)=>{var r,o,s,d;const i=[t,{code:e,...n||{}}];if((o=(r=a==null?void 0:a.services)==null?void 0:r.logger)!=null&&o.forward)return a.services.logger.forward(i,"warn","react-i18next::",!0);W(i[0])&&(i[0]=`react-i18next:: ${i[0]}`),(d=(s=a==null?void 0:a.services)==null?void 0:s.logger)!=null&&d.warn?a.services.logger.warn(...i):console!=null&&console.warn&&console.warn(...i)},_e={},de=(a,e,t,n)=>{W(t)&&_e[t]||(W(t)&&(_e[t]=new Date),vt(a,e,t,n))},Fe=(a,e)=>()=>{if(a.isInitialized)e();else{const t=()=>{setTimeout(()=>{a.off("initialized",t)},0),e()};a.on("initialized",t)}},fe=(a,e,t)=>{a.loadNamespaces(e,Fe(a,t))},ye=(a,e,t,n)=>{if(W(t)&&(t=[t]),a.options.preload&&a.options.preload.indexOf(e)>-1)return fe(a,t,n);t.forEach(i=>{a.options.ns.indexOf(i)<0&&a.options.ns.push(i)}),a.loadLanguages(e,Fe(a,n))},kt=(a,e,t={})=>!e.languages||!e.languages.length?(de(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(a,{lng:t.lng,precheck:(n,i)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!i(n.isLanguageChangingTo,a))return!1}}),W=a=>typeof a=="string",wt=a=>typeof a=="object"&&a!==null,zt=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,qt={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},St=a=>qt[a],Nt=a=>a.replace(zt,St);let ce={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Nt};const jt=(a={})=>{ce={...ce,...a}},Ct=()=>ce;let Ie;const Tt=a=>{Ie=a},Ot=()=>Ie,Lt={type:"3rdParty",init(a){jt(a.options.react),Tt(a)}},Rt=y.createContext();class Pt{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const At=(a,e)=>{const t=y.useRef();return y.useEffect(()=>{t.current=a},[a,e]),t.current},Me=(a,e,t,n)=>a.getFixedT(e,t,n),Kt=(a,e,t,n)=>y.useCallback(Me(a,e,t,n),[a,e,t,n]),A=(a,e={})=>{var $,q,S,N;const{i18n:t}=e,{i18n:n,defaultNS:i}=y.useContext(Rt)||{},r=t||n||Ot();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new Pt),!r){de(r,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const j=(C,b)=>W(b)?b:wt(b)&&W(b.defaultValue)?b.defaultValue:Array.isArray(C)?C[C.length-1]:C,T=[j,{},!1];return T.t=j,T.i18n={},T.ready=!1,T}($=r.options.react)!=null&&$.wait&&de(r,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...Ct(),...r.options.react,...e},{useSuspense:s,keyPrefix:d}=o;let l=i||((q=r.options)==null?void 0:q.defaultNS);l=W(l)?[l]:l||["translation"],(N=(S=r.reportNamespaces).addUsedNamespaces)==null||N.call(S,l);const c=(r.isInitialized||r.initializedStoreOnce)&&l.every(j=>kt(j,r,o)),u=Kt(r,e.lng||null,o.nsMode==="fallback"?l:l[0],d),f=()=>u,p=()=>Me(r,e.lng||null,o.nsMode==="fallback"?l:l[0],d),[x,z]=y.useState(f);let g=l.join();e.lng&&(g=`${e.lng}${g}`);const m=At(g),w=y.useRef(!0);y.useEffect(()=>{const{bindI18n:j,bindI18nStore:T}=o;w.current=!0,!c&&!s&&(e.lng?ye(r,e.lng,l,()=>{w.current&&z(p)}):fe(r,l,()=>{w.current&&z(p)})),c&&m&&m!==g&&w.current&&z(p);const C=()=>{w.current&&z(p)};return j&&(r==null||r.on(j,C)),T&&(r==null||r.store.on(T,C)),()=>{w.current=!1,r&&j&&(j==null||j.split(" ").forEach(b=>r.off(b,C))),T&&r&&T.split(" ").forEach(b=>r.store.off(b,C))}},[r,g]),y.useEffect(()=>{w.current&&c&&z(f)},[r,d,c]);const v=[x,r,c];if(v.t=x,v.i18n=r,v.ready=c,c||!c&&!s)return v;throw new Promise(j=>{e.lng?ye(r,e.lng,l,()=>j()):fe(r,l,()=>j())})},_=a=>typeof a=="string",U=()=>{let a,e;const t=new Promise((n,i)=>{a=n,e=i});return t.resolve=a,t.reject=e,t},ve=a=>a==null?"":""+a,Et=(a,e,t)=>{a.forEach(n=>{e[n]&&(t[n]=e[n])})},Ft=/###/g,ke=a=>a&&a.indexOf("###")>-1?a.replace(Ft,"."):a,we=a=>!a||_(a),B=(a,e,t)=>{const n=_(e)?e.split("."):e;let i=0;for(;i<n.length-1;){if(we(a))return{};const r=ke(n[i]);!a[r]&&t&&(a[r]=new t),Object.prototype.hasOwnProperty.call(a,r)?a=a[r]:a={},++i}return we(a)?{}:{obj:a,k:ke(n[i])}},ze=(a,e,t)=>{const{obj:n,k:i}=B(a,e,Object);if(n!==void 0||e.length===1){n[i]=t;return}let r=e[e.length-1],o=e.slice(0,e.length-1),s=B(a,o,Object);for(;s.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),s=B(a,o,Object),s&&s.obj&&typeof s.obj[`${s.k}.${r}`]<"u"&&(s.obj=void 0);s.obj[`${s.k}.${r}`]=t},It=(a,e,t,n)=>{const{obj:i,k:r}=B(a,e,Object);i[r]=i[r]||[],i[r].push(t)},ne=(a,e)=>{const{obj:t,k:n}=B(a,e);if(t)return t[n]},Mt=(a,e,t)=>{const n=ne(a,t);return n!==void 0?n:ne(e,t)},De=(a,e,t)=>{for(const n in e)n!=="__proto__"&&n!=="constructor"&&(n in a?_(a[n])||a[n]instanceof String||_(e[n])||e[n]instanceof String?t&&(a[n]=e[n]):De(a[n],e[n],t):a[n]=e[n]);return a},G=a=>a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Dt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Wt=a=>_(a)?a.replace(/[&<>"'\/]/g,e=>Dt[e]):a;class Gt{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}const Ht=[" ",",","?","!",";"],Vt=new Gt(20),Ut=(a,e,t)=>{e=e||"",t=t||"";const n=Ht.filter(o=>e.indexOf(o)<0&&t.indexOf(o)<0);if(n.length===0)return!0;const i=Vt.getRegExp(`(${n.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!i.test(a);if(!r){const o=a.indexOf(t);o>0&&!i.test(a.substring(0,o))&&(r=!0)}return r},ue=function(a,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!a)return;if(a[e])return a[e];const n=e.split(t);let i=a;for(let r=0;r<n.length;){if(!i||typeof i!="object")return;let o,s="";for(let d=r;d<n.length;++d)if(d!==r&&(s+=t),s+=n[d],o=i[s],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&d<n.length-1)continue;r+=d-r+1;break}i=o}return i},ae=a=>a&&a.replace("_","-"),Bt={type:"logger",log(a){this.output("log",a)},warn(a){this.output("warn",a)},error(a){this.output("error",a)},output(a,e){console&&console[a]&&console[a].apply(console,e)}};class re{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Bt,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,i){return i&&!this.debug?null:(_(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new re(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new re(this.logger,e)}}var F=new re;class oe{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const i=this.observers[n].get(t)||0;this.observers[n].set(t,i+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[s,d]=o;for(let l=0;l<d;l++)s(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[s,d]=o;for(let l=0;l<d;l++)s.apply(s,[e,...n])})}}class qe extends oe{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let s;e.indexOf(".")>-1?s=e.split("."):(s=[e,t],n&&(Array.isArray(n)?s.push(...n):_(n)&&r?s.push(...n.split(r)):s.push(n)));const d=ne(this.data,s);return!d&&!t&&!n&&e.indexOf(".")>-1&&(e=s[0],t=s[1],n=s.slice(2).join(".")),d||!o||!_(n)?d:ue(this.data&&this.data[e]&&this.data[e][t],n,r)}addResource(e,t,n,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let s=[e,t];n&&(s=s.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(s=e.split("."),i=t,t=s[1]),this.addNamespaces(t),ze(this.data,s,i),r.silent||this.emit("added",e,t,n,i)}addResources(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in n)(_(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});i.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},s=[e,t];e.indexOf(".")>-1&&(s=e.split("."),i=n,n=t,t=s[1]),this.addNamespaces(t);let d=ne(this.data,s)||{};o.skipCopy||(n=JSON.parse(JSON.stringify(n))),i?De(d,n,r):d={...d,...n},ze(this.data,s,d),o.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(i=>t[i]&&Object.keys(t[i]).length>0)}toJSON(){return this.data}}var We={processors:{},addPostProcessor(a){this.processors[a.name]=a},handle(a,e,t,n,i){return a.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,t,n,i))}),e}};const Se={};class ie extends oe{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Et(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=F.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const n=this.resolve(e,t);return n&&n.res!==void 0}extractFromKey(e,t){let n=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const i=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const o=n&&e.indexOf(n)>-1,s=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Ut(e,n,i);if(o&&!s){const d=e.match(this.interpolator.nestingRegexp);if(d&&d.length>0)return{key:e,namespaces:_(r)?[r]:r};const l=e.split(n);(n!==i||n===i&&this.options.ns.indexOf(l[0])>-1)&&(r=l.shift()),e=l.join(i)}return{key:e,namespaces:_(r)?[r]:r}}translate(e,t,n){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:o,namespaces:s}=this.extractFromKey(e[e.length-1],t),d=s[s.length-1],l=t.lng||this.language,c=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(l&&l.toLowerCase()==="cimode"){if(c){const $=t.nsSeparator||this.options.nsSeparator;return i?{res:`${d}${$}${o}`,usedKey:o,exactUsedKey:o,usedLng:l,usedNS:d,usedParams:this.getUsedParamsDetails(t)}:`${d}${$}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:l,usedNS:d,usedParams:this.getUsedParamsDetails(t)}:o}const u=this.resolve(e,t);let f=u&&u.res;const p=u&&u.usedKey||o,x=u&&u.exactUsedKey||o,z=Object.prototype.toString.apply(f),g=["[object Number]","[object Function]","[object RegExp]"],m=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,w=!this.i18nFormat||this.i18nFormat.handleAsObject,v=!_(f)&&typeof f!="boolean"&&typeof f!="number";if(w&&f&&v&&g.indexOf(z)<0&&!(_(m)&&Array.isArray(f))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const $=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,f,{...t,ns:s}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(u.res=$,u.usedParams=this.getUsedParamsDetails(t),u):$}if(r){const $=Array.isArray(f),q=$?[]:{},S=$?x:p;for(const N in f)if(Object.prototype.hasOwnProperty.call(f,N)){const j=`${S}${r}${N}`;q[N]=this.translate(j,{...t,joinArrays:!1,ns:s}),q[N]===j&&(q[N]=f[N])}f=q}}else if(w&&_(m)&&Array.isArray(f))f=f.join(m),f&&(f=this.extendTranslation(f,e,t,n));else{let $=!1,q=!1;const S=t.count!==void 0&&!_(t.count),N=ie.hasDefaultValue(t),j=S?this.pluralResolver.getSuffix(l,t.count,t):"",T=t.ordinal&&S?this.pluralResolver.getSuffix(l,t.count,{ordinal:!1}):"",C=S&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),b=C&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${j}`]||t[`defaultValue${T}`]||t.defaultValue;!this.isValidLookup(f)&&N&&($=!0,f=b),this.isValidLookup(f)||(q=!0,f=o);const L=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&q?void 0:f,I=N&&b!==f&&this.options.updateMissing;if(q||$||I){if(this.logger.log(I?"updateKey":"missingKey",l,d,o,I?b:f),r){const P=this.resolve(o,{...t,keySeparator:!1});P&&P.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let M=[];const Z=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Z&&Z[0])for(let P=0;P<Z.length;P++)M.push(Z[P]);else this.options.saveMissingTo==="all"?M=this.languageUtils.toResolveHierarchy(t.lng||this.language):M.push(t.lng||this.language);const xe=(P,D,V)=>{const $e=N&&V!==f?V:L;this.options.missingKeyHandler?this.options.missingKeyHandler(P,d,D,$e,I,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(P,d,D,$e,I,t),this.emit("missingKey",P,d,D,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&S?M.forEach(P=>{const D=this.pluralResolver.getSuffixes(P,t);C&&t[`defaultValue${this.options.pluralSeparator}zero`]&&D.indexOf(`${this.options.pluralSeparator}zero`)<0&&D.push(`${this.options.pluralSeparator}zero`),D.forEach(V=>{xe([P],o+V,t[`defaultValue${V}`]||b)})}):xe(M,o,b))}f=this.extendTranslation(f,e,t,u,n),q&&f===o&&this.options.appendNamespaceToMissingKey&&(f=`${d}:${o}`),(q||$)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${d}:${o}`:o,$?f:void 0):f=this.options.parseMissingKeyHandler(f))}return i?(u.res=f,u.usedParams=this.getUsedParamsDetails(t),u):f}extendTranslation(e,t,n,i,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const l=_(e)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(l){const f=e.match(this.interpolator.nestingRegexp);c=f&&f.length}let u=n.replace&&!_(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),e=this.interpolator.interpolate(e,u,n.lng||this.language||i.usedLng,n),l){const f=e.match(this.interpolator.nestingRegexp),p=f&&f.length;c<p&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(n.lng=this.language||i.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var f=arguments.length,p=new Array(f),x=0;x<f;x++)p[x]=arguments[x];return r&&r[0]===p[0]&&!n.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`),null):o.translate(...p,t)},n)),n.interpolation&&this.interpolator.reset()}const s=n.postProcess||this.options.postProcess,d=_(s)?[s]:s;return e!=null&&d&&d.length&&n.applyPostProcessor!==!1&&(e=We.handle(d,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,i,r,o,s;return _(e)&&(e=[e]),e.forEach(d=>{if(this.isValidLookup(n))return;const l=this.extractFromKey(d,t),c=l.key;i=c;let u=l.namespaces;this.options.fallbackNS&&(u=u.concat(this.options.fallbackNS));const f=t.count!==void 0&&!_(t.count),p=f&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),x=t.context!==void 0&&(_(t.context)||typeof t.context=="number")&&t.context!=="",z=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);u.forEach(g=>{this.isValidLookup(n)||(s=g,!Se[`${z[0]}-${g}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&(Se[`${z[0]}-${g}`]=!0,this.logger.warn(`key "${i}" for languages "${z.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),z.forEach(m=>{if(this.isValidLookup(n))return;o=m;const w=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(w,c,m,g,t);else{let $;f&&($=this.pluralResolver.getSuffix(m,t.count,t));const q=`${this.options.pluralSeparator}zero`,S=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(w.push(c+$),t.ordinal&&$.indexOf(S)===0&&w.push(c+$.replace(S,this.options.pluralSeparator)),p&&w.push(c+q)),x){const N=`${c}${this.options.contextSeparator}${t.context}`;w.push(N),f&&(w.push(N+$),t.ordinal&&$.indexOf(S)===0&&w.push(N+$.replace(S,this.options.pluralSeparator)),p&&w.push(N+q))}}let v;for(;v=w.pop();)this.isValidLookup(n)||(r=v,n=this.getResource(m,g,v,t))}))})}),{res:n,usedKey:i,exactUsedKey:r,usedLng:o,usedNS:s}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,i):this.resourceStore.getResource(e,t,n,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!_(e.replace);let i=n?e.replace:e;if(n&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!n){i={...i};for(const r of t)delete i[r]}return i}static hasDefaultValue(e){const t="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t===n.substring(0,t.length)&&e[n]!==void 0)return!0;return!1}}const le=a=>a.charAt(0).toUpperCase()+a.slice(1);class Ne{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=F.create("languageUtils")}getScriptPartFromCode(e){if(e=ae(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=ae(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(_(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(e)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const t=["hans","hant","latn","cyrl","cans","mong","arab"];let n=e.split("-");return this.options.lowerCaseLng?n=n.map(i=>i.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=le(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=le(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=le(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(n=>{if(t)return;const i=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(i))&&(t=i)}),!t&&this.options.supportedLngs&&e.forEach(n=>{if(t)return;const i=this.getLanguagePartFromCode(n);if(this.isSupportedCode(i))return t=i;t=this.options.supportedLngs.find(r=>{if(r===i)return r;if(!(r.indexOf("-")<0&&i.indexOf("-")<0)&&(r.indexOf("-")>0&&i.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===i||r.indexOf(i)===0&&i.length>1))return r})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),_(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),i=[],r=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return _(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):_(e)&&r(this.formatLanguageCode(e)),n.forEach(o=>{i.indexOf(o)<0&&r(this.formatLanguageCode(o))}),i}}let Qt=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Jt={1:a=>+(a>1),2:a=>+(a!=1),3:a=>0,4:a=>a%10==1&&a%100!=11?0:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?1:2,5:a=>a==0?0:a==1?1:a==2?2:a%100>=3&&a%100<=10?3:a%100>=11?4:5,6:a=>a==1?0:a>=2&&a<=4?1:2,7:a=>a==1?0:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?1:2,8:a=>a==1?0:a==2?1:a!=8&&a!=11?2:3,9:a=>+(a>=2),10:a=>a==1?0:a==2?1:a<7?2:a<11?3:4,11:a=>a==1||a==11?0:a==2||a==12?1:a>2&&a<20?2:3,12:a=>+(a%10!=1||a%100==11),13:a=>+(a!==0),14:a=>a==1?0:a==2?1:a==3?2:3,15:a=>a%10==1&&a%100!=11?0:a%10>=2&&(a%100<10||a%100>=20)?1:2,16:a=>a%10==1&&a%100!=11?0:a!==0?1:2,17:a=>a==1||a%10==1&&a%100!=11?0:1,18:a=>a==0?0:a==1?1:2,19:a=>a==1?0:a==0||a%100>1&&a%100<11?1:a%100>10&&a%100<20?2:3,20:a=>a==1?0:a==0||a%100>0&&a%100<20?1:2,21:a=>a%100==1?1:a%100==2?2:a%100==3||a%100==4?3:0,22:a=>a==1?0:a==2?1:(a<0||a>10)&&a%10==0?2:3};const Yt=["v1","v2","v3"],Zt=["v4"],je={zero:0,one:1,two:2,few:3,many:4,other:5},Xt=()=>{const a={};return Qt.forEach(e=>{e.lngs.forEach(t=>{a[t]={numbers:e.nr,plurals:Jt[e.fc]}})}),a};class en{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=F.create("pluralResolver"),(!this.options.compatibilityJSON||Zt.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Xt(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const n=ae(e==="dev"?"en":e),i=t.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:n,type:i});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(n,{type:i})}catch{if(!e.match(/-|_/))return;const d=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(d,t)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,t);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,n).map(i=>`${t}${i}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,t);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((i,r)=>je[i]-je[r]).map(i=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${i}`):n.numbers.map(i=>this.getSuffix(e,i,t)):[]}getSuffix(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,n);return i?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i.select(t)}`:this.getSuffixRetroCompatible(i,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let i=e.numbers[n];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const r=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!Yt.includes(this.options.compatibilityJSON)}}const Ce=function(a,e,t){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=Mt(a,e,t);return!r&&i&&_(t)&&(r=ue(a,t,n),r===void 0&&(r=ue(e,t,n))),r},he=a=>a.replace(/\$/g,"$$$$");class tn{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=F.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(t=>t),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:n,useRawValueToEscape:i,prefix:r,prefixEscaped:o,suffix:s,suffixEscaped:d,formatSeparator:l,unescapeSuffix:c,unescapePrefix:u,nestingPrefix:f,nestingPrefixEscaped:p,nestingSuffix:x,nestingSuffixEscaped:z,nestingOptionsSeparator:g,maxReplaces:m,alwaysFormat:w}=e.interpolation;this.escape=t!==void 0?t:Wt,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=r?G(r):o||"{{",this.suffix=s?G(s):d||"}}",this.formatSeparator=l||",",this.unescapePrefix=c?"":u||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=f?G(f):p||G("$t("),this.nestingSuffix=x?G(x):z||G(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=m||1e3,this.alwaysFormat=w!==void 0?w:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,n)=>t&&t.source===n?(t.lastIndex=0,t):new RegExp(n,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,n,i){let r,o,s;const d=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},l=p=>{if(p.indexOf(this.formatSeparator)<0){const m=Ce(t,d,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(m,void 0,n,{...i,...t,interpolationkey:p}):m}const x=p.split(this.formatSeparator),z=x.shift().trim(),g=x.join(this.formatSeparator).trim();return this.format(Ce(t,d,z,this.options.keySeparator,this.options.ignoreJSONStructure),g,n,{...i,...t,interpolationkey:z})};this.resetRegExp();const c=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,u=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>he(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?he(this.escape(p)):he(p)}].forEach(p=>{for(s=0;r=p.regex.exec(e);){const x=r[1].trim();if(o=l(x),o===void 0)if(typeof c=="function"){const g=c(e,r,i);o=_(g)?g:""}else if(i&&Object.prototype.hasOwnProperty.call(i,x))o="";else if(u){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`),o="";else!_(o)&&!this.useRawValueToEscape&&(o=ve(o));const z=p.safeValue(o);if(e=e.replace(r[0],z),u?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=r[0].length):p.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),e}nest(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,r,o;const s=(d,l)=>{const c=this.nestingOptionsSeparator;if(d.indexOf(c)<0)return d;const u=d.split(new RegExp(`${c}[ ]*{`));let f=`{${u[1]}`;d=u[0],f=this.interpolate(f,o);const p=f.match(/'/g),x=f.match(/"/g);(p&&p.length%2===0&&!x||x.length%2!==0)&&(f=f.replace(/'/g,'"'));try{o=JSON.parse(f),l&&(o={...l,...o})}catch(z){return this.logger.warn(`failed parsing options string in nesting for key ${d}`,z),`${d}${c}${f}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,d};for(;i=this.nestingRegexp.exec(e);){let d=[];o={...n},o=o.replace&&!_(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let l=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const c=i[1].split(this.formatSeparator).map(u=>u.trim());i[1]=c.shift(),d=c,l=!0}if(r=t(s.call(this,i[1].trim(),o),o),r&&i[0]===e&&!_(r))return r;_(r)||(r=ve(r)),r||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),r=""),l&&(r=d.reduce((c,u)=>this.format(c,u,n.lng,{...n,interpolationkey:i[1].trim()}),r.trim())),e=e.replace(i[0],r),this.regexp.lastIndex=0}return e}}const nn=a=>{let e=a.toLowerCase().trim();const t={};if(a.indexOf("(")>-1){const n=a.split("(");e=n[0].toLowerCase().trim();const i=n[1].substring(0,n[1].length-1);e==="currency"&&i.indexOf(":")<0?t.currency||(t.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?t.range||(t.range=i.trim()):i.split(";").forEach(o=>{if(o){const[s,...d]=o.split(":"),l=d.join(":").trim().replace(/^'+|'+$/g,""),c=s.trim();t[c]||(t[c]=l),l==="false"&&(t[c]=!1),l==="true"&&(t[c]=!0),isNaN(l)||(t[c]=parseInt(l,10))}})}return{formatName:e,formatOptions:t}},H=a=>{const e={};return(t,n,i)=>{let r=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(r={...r,[i.interpolationkey]:void 0});const o=n+JSON.stringify(r);let s=e[o];return s||(s=a(ae(n),i),e[o]=s),s(t)}};class an{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=F.create("formatter"),this.options=e,this.formats={number:H((t,n)=>{const i=new Intl.NumberFormat(t,{...n});return r=>i.format(r)}),currency:H((t,n)=>{const i=new Intl.NumberFormat(t,{...n,style:"currency"});return r=>i.format(r)}),datetime:H((t,n)=>{const i=new Intl.DateTimeFormat(t,{...n});return r=>i.format(r)}),relativetime:H((t,n)=>{const i=new Intl.RelativeTimeFormat(t,{...n});return r=>i.format(r,n.range||"day")}),list:H((t,n)=>{const i=new Intl.ListFormat(t,{...n});return r=>i.format(r)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=H(t)}format(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=t.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(s=>s.indexOf(")")>-1)){const s=r.findIndex(d=>d.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,s)].join(this.formatSeparator)}return r.reduce((s,d)=>{const{formatName:l,formatOptions:c}=nn(d);if(this.formats[l]){let u=s;try{const f=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},p=f.locale||f.lng||i.locale||i.lng||n;u=this.formats[l](s,p,{...c,...i,...f})}catch(f){this.logger.warn(f)}return u}else this.logger.warn(`there was no format function for ${l}`);return s},e)}}const rn=(a,e)=>{a.pending[e]!==void 0&&(delete a.pending[e],a.pendingCount--)};class sn extends oe{constructor(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=i,this.logger=F.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,i.backend,i)}queueLoad(e,t,n,i){const r={},o={},s={},d={};return e.forEach(l=>{let c=!0;t.forEach(u=>{const f=`${l}|${u}`;!n.reload&&this.store.hasResourceBundle(l,u)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?o[f]===void 0&&(o[f]=!0):(this.state[f]=1,c=!1,o[f]===void 0&&(o[f]=!0),r[f]===void 0&&(r[f]=!0),d[u]===void 0&&(d[u]=!0)))}),c||(s[l]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(d)}}loaded(e,t,n){const i=e.split("|"),r=i[0],o=i[1];t&&this.emit("failedLoading",r,o,t),!t&&n&&this.store.addResourceBundle(r,o,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);const s={};this.queue.forEach(d=>{It(d.loaded,[r],o),rn(d,e),t&&d.errors.push(t),d.pendingCount===0&&!d.done&&(Object.keys(d.loaded).forEach(l=>{s[l]||(s[l]={});const c=d.loaded[l];c.length&&c.forEach(u=>{s[l][u]===void 0&&(s[l][u]=!0)})}),d.done=!0,d.errors.length?d.callback(d.errors):d.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(d=>!d.done)}read(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:i,wait:r,callback:o});return}this.readingCalls++;const s=(l,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const u=this.waitingReads.shift();this.read(u.lng,u.ns,u.fcName,u.tried,u.wait,u.callback)}if(l&&c&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,n,i+1,r*2,o)},r);return}o(l,c)},d=this.backend[n].bind(this.backend);if(d.length===2){try{const l=d(e,t);l&&typeof l.then=="function"?l.then(c=>s(null,c)).catch(s):s(null,l)}catch(l){s(l)}return}return d(e,t,s)}prepareLoading(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();_(e)&&(e=this.languageUtils.toResolveHierarchy(e)),_(t)&&(t=[t]);const r=this.queueLoad(e,t,n,i);if(!r.toLoad.length)return r.pending.length||i(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=e.split("|"),i=n[0],r=n[1];this.read(i,r,"read",void 0,void 0,(o,s)=>{o&&this.logger.warn(`${t}loading namespace ${r} for language ${i} failed`,o),!o&&s&&this.logger.log(`${t}loaded namespace ${r} for language ${i}`,s),this.loaded(e,o,s)})}saveMissing(e,t,n,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const d={...o,isUpdate:r},l=this.backend.create.bind(this.backend);if(l.length<6)try{let c;l.length===5?c=l(e,t,n,i,d):c=l(e,t,n,i),c&&typeof c.then=="function"?c.then(u=>s(null,u)).catch(s):s(null,c)}catch(c){s(c)}else l(e,t,n,i,s,d)}!e||!e[0]||this.store.addResource(e[0],t,n,i)}}}const Te=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:a=>{let e={};if(typeof a[1]=="object"&&(e=a[1]),_(a[1])&&(e.defaultValue=a[1]),_(a[2])&&(e.tDescription=a[2]),typeof a[2]=="object"||typeof a[3]=="object"){const t=a[3]||a[2];Object.keys(t).forEach(n=>{e[n]=t[n]})}return e},interpolation:{escapeValue:!0,format:a=>a,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Oe=a=>(_(a.ns)&&(a.ns=[a.ns]),_(a.fallbackLng)&&(a.fallbackLng=[a.fallbackLng]),_(a.fallbackNS)&&(a.fallbackNS=[a.fallbackNS]),a.supportedLngs&&a.supportedLngs.indexOf("cimode")<0&&(a.supportedLngs=a.supportedLngs.concat(["cimode"])),a),X=()=>{},on=a=>{Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach(t=>{typeof a[t]=="function"&&(a[t]=a[t].bind(a))})};class Y extends oe{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Oe(e),this.services={},this.logger=F,this.modules={external:[]},on(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(n=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(_(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const i=Te();this.options={...i,...this.options,...Oe(t)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const r=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?F.init(r(this.modules.logger),this.options):F.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=an);const u=new Ne(this.options);this.store=new qe(this.options.resources,this.options);const f=this.services;f.logger=F,f.resourceStore=this.store,f.languageUtils=u,f.pluralResolver=new en(u,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(f.formatter=r(c),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new tn(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new sn(r(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(p){for(var x=arguments.length,z=new Array(x>1?x-1:0),g=1;g<x;g++)z[g-1]=arguments[g];e.emit(p,...z)}),this.modules.languageDetector&&(f.languageDetector=r(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=r(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new ie(this.services,this.options),this.translator.on("*",function(p){for(var x=arguments.length,z=new Array(x>1?x-1:0),g=1;g<x;g++)z[g-1]=arguments[g];e.emit(p,...z)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,n||(n=X),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return e.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return e.store[c](...arguments),e}});const d=U(),l=()=>{const c=(u,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),d.resolve(f),n(u,f)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initImmediate?l():setTimeout(l,0),d}loadResources(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X;const i=_(e)?e:this.language;if(typeof e=="function"&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const r=[],o=s=>{if(!s||s==="cimode")return;this.services.languageUtils.toResolveHierarchy(s).forEach(l=>{l!=="cimode"&&r.indexOf(l)<0&&r.push(l)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(d=>o(d)),this.options.preload&&this.options.preload.forEach(s=>o(s)),this.services.backendConnector.load(r,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(s)})}else n(null)}reloadResources(e,t,n){const i=U();return typeof e=="function"&&(n=e,e=void 0),typeof t=="function"&&(n=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),n||(n=X),this.services.backendConnector.reload(e,t,r=>{i.resolve(),n(r)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&We.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const n=this.languages[t];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;const i=U();this.emit("languageChanging",e);const r=d=>{this.language=d,this.languages=this.services.languageUtils.toResolveHierarchy(d),this.resolvedLanguage=void 0,this.setResolvedLanguage(d)},o=(d,l)=>{l?(r(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,i.resolve(function(){return n.t(...arguments)}),t&&t(d,function(){return n.t(...arguments)})},s=d=>{!e&&!d&&this.services.languageDetector&&(d=[]);const l=_(d)?d:this.services.languageUtils.getBestMatchFromCodes(d);l&&(this.language||r(l),this.translator.language||this.translator.changeLanguage(l),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(l)),this.loadResources(l,c=>{o(c,l)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(e),i}getFixedT(e,t,n){var i=this;const r=function(o,s){let d;if(typeof s!="object"){for(var l=arguments.length,c=new Array(l>2?l-2:0),u=2;u<l;u++)c[u-2]=arguments[u];d=i.options.overloadTranslationOptionHandler([o,s].concat(c))}else d={...s};d.lng=d.lng||r.lng,d.lngs=d.lngs||r.lngs,d.ns=d.ns||r.ns,d.keyPrefix!==""&&(d.keyPrefix=d.keyPrefix||n||r.keyPrefix);const f=i.options.keySeparator||".";let p;return d.keyPrefix&&Array.isArray(o)?p=o.map(x=>`${d.keyPrefix}${f}${x}`):p=d.keyPrefix?`${d.keyPrefix}${f}${o}`:o,i.t(p,d)};return _(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=n,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const o=(s,d)=>{const l=this.services.backendConnector.state[`${s}|${d}`];return l===-1||l===0||l===2};if(t.precheck){const s=t.precheck(this,o);if(s!==void 0)return s}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(n,e)&&(!i||o(r,e)))}loadNamespaces(e,t){const n=U();return this.options.ns?(_(e)&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{n.resolve(),t&&t(i)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=U();_(e)&&(e=[e]);const i=this.options.preload||[],r=e.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=i.concat(r),this.loadResources(o=>{n.resolve(),t&&t(o)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new Ne(Te());return t.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Y(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},r=new Y(i);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(s=>{r[s]=this[s]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},n&&(r.store=new qe(this.store.data,i),r.services.resourceStore=r.store),r.translator=new ie(r.services,i),r.translator.on("*",function(s){for(var d=arguments.length,l=new Array(d>1?d-1:0),c=1;c<d;c++)l[c-1]=arguments[c];r.emit(s,...l)}),r.init(i,t),r.translator.options=i,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const O=Y.createInstance();O.createInstance=Y.createInstance;O.createInstance;O.dir;O.init;O.loadResources;O.reloadResources;O.use;O.changeLanguage;O.getFixedT;O.t;O.exists;O.setDefaultNamespace;O.hasLoadedNamespace;O.loadNamespaces;O.loadLanguages;const ln={title:"NumCalc",subtitle:"Numerical Differentiation & Integration",tagline:"Learn it. Play with it. Test yourself.",footer:"Built for Chapter 7 · Numerical Analysis"},hn={home:"Home",lessons:"Lessons",playground:"Playground",quiz:"Quiz"},dn={toggle:"Toggle theme",light:"Light",dark:"Dark"},fn={label:"Language",en:"English",hu:"Magyar"},cn={heading:"Numerical Calculus, made interactive",lead:"Read the chapter with beautifully typeset math, experiment with the real difference and quadrature formulas, then quiz yourself — in English or Hungarian.",cta_lessons:"Start reading",cta_playground:"Open the playground",card_lessons_title:"Lessons",card_lessons_desc:"Sections 7.1–7.4 with rendered formulas and tables.",card_playground_title:"Playground",card_playground_desc:"Tweak step sizes and methods; watch the error live.",card_quiz_title:"Quiz",card_quiz_desc:"Check your understanding with instant feedback."},un={title:"Lessons",intro:"Pick a section to read.",loading:"Loading lesson…",error:"Could not load this lesson.",back:"All lessons",read:"Read"},pn={title:"Interactive playground",lead:"Choose a function and a method, then drag the sliders.",tab_diff:"Differentiation",tab_int:"Integration",function:"Function f(x)",custom:"Custom expression",custom_hint:"Use x as the variable, e.g. exp(x) * sin(x)",method:"Method",x0:"Point x₀",h:"Step size h",a:"Lower limit a",b:"Upper limit b",n:"Subintervals n",approx:"Approximation",reference:"Reference (exact)",error:"Absolute error",invalid:"Invalid expression — check your syntax.",methods:{forward:"Forward difference (1st order)",backward:"Backward difference (1st order)",central:"Central difference (2nd order)","five-point":"5-point central (4th order)",second:"Second derivative",trapezoid:"Composite trapezoidal",simpson:"Composite Simpson",gauss2:"Gauss 2-point",gauss3:"Gauss 3-point",gauss4:"Gauss 4-point",gauss5:"Gauss 5-point"},computing_derivative:"Approximating f{order}(x₀)",computing_integral:"Approximating ∫f(x) dx"},mn={title:"Quiz",lead:"Answer the questions — you get instant feedback.",start:"Start quiz",loading:"Loading questions…",question:"Question",of:"of",score:"Score",streak:"Streak",check:"Check",next:"Next",finish:"See results",true:"True",false:"False",your_answer:"Your answer",correct:"Correct!",incorrect:"Not quite.",numeric_placeholder:"Type a number",results_title:"Your results",results_score:"You scored {{correct}} / {{total}}",retry:"Try again",to_lessons:"Review the lessons",topic:"Topic"},gn={app:ln,nav:hn,theme:dn,lang:fn,home:cn,lessons:un,playground:pn,quiz:mn},xn={title:"NumCalc",subtitle:"Numerikus differenciálás és integrálás",tagline:"Tanuld meg. Játssz vele. Teszteld magad.",footer:"A 7. fejezethez · Numerikus analízis"},$n={home:"Kezdőlap",lessons:"Leckék",playground:"Játéktér",quiz:"Kvíz"},bn={toggle:"Téma váltása",light:"Világos",dark:"Sötét"},_n={label:"Nyelv",en:"English",hu:"Magyar"},yn={heading:"A numerikus analízis, interaktívan",lead:"Olvasd a fejezetet szépen szedett képletekkel, kísérletezz a valódi differencia- és kvadratúraképletekkel, majd teszteld magad — angolul vagy magyarul.",cta_lessons:"Kezdj olvasni",cta_playground:"Nyisd meg a játékteret",card_lessons_title:"Leckék",card_lessons_desc:"7.1–7.4. szakaszok képletekkel és táblázatokkal.",card_playground_title:"Játéktér",card_playground_desc:"Állítsd a lépésközt és a módszert; nézd a hibát élőben.",card_quiz_title:"Kvíz",card_quiz_desc:"Ellenőrizd a tudásod azonnali visszajelzéssel."},vn={title:"Leckék",intro:"Válassz egy szakaszt olvasásra.",loading:"Lecke betöltése…",error:"Nem sikerült betölteni ezt a leckét.",back:"Összes lecke",read:"Olvasás"},kn={title:"Interaktív játéktér",lead:"Válassz függvényt és módszert, majd húzd a csúszkákat.",tab_diff:"Differenciálás",tab_int:"Integrálás",function:"Függvény f(x)",custom:"Egyéni kifejezés",custom_hint:"Használd az x változót, pl. exp(x) * sin(x)",method:"Módszer",x0:"Pont x₀",h:"Lépésköz h",a:"Alsó határ a",b:"Felső határ b",n:"Részintervallumok n",approx:"Közelítés",reference:"Referencia (pontos)",error:"Abszolút hiba",invalid:"Hibás kifejezés — ellenőrizd a szintaxist.",methods:{forward:"Jobb oldali differencia (1. rendű)",backward:"Bal oldali differencia (1. rendű)",central:"Centrális differencia (2. rendű)","five-point":"5-pontos centrális (4. rendű)",second:"Második derivált",trapezoid:"Összetett trapéz",simpson:"Összetett Simpson",gauss2:"Gauss 2-pontos",gauss3:"Gauss 3-pontos",gauss4:"Gauss 4-pontos",gauss5:"Gauss 5-pontos"},computing_derivative:"f{order}(x₀) közelítése",computing_integral:"∫f(x) dx közelítése"},wn={title:"Kvíz",lead:"Válaszolj a kérdésekre — azonnali visszajelzést kapsz.",start:"Kvíz indítása",loading:"Kérdések betöltése…",question:"Kérdés",of:"/",score:"Pontszám",streak:"Sorozat",check:"Ellenőrzés",next:"Következő",finish:"Eredmények",true:"Igaz",false:"Hamis",your_answer:"A válaszod",correct:"Helyes!",incorrect:"Nem egészen.",numeric_placeholder:"Írj be egy számot",results_title:"Az eredményed",results_score:"Eredményed: {{correct}} / {{total}}",retry:"Újra",to_lessons:"Nézd át a leckéket",topic:"Téma"},zn={app:xn,nav:$n,theme:bn,lang:_n,home:yn,lessons:vn,playground:kn,quiz:wn},Ge="numcalc-lang";function qn(){var a;try{const e=localStorage.getItem(Ge);if(e==="en"||e==="hu")return e;if((a=navigator.language)!=null&&a.toLowerCase().startsWith("hu"))return"hu"}catch{}return"en"}O.use(Lt).init({resources:{en:{translation:gn},hu:{translation:zn}},lng:qn(),fallbackLng:"en",interpolation:{escapeValue:!1}});O.on("languageChanged",a=>{try{localStorage.setItem(Ge,a),document.documentElement.setAttribute("lang",a)}catch{}});document.documentElement.setAttribute("lang",O.language);const Sn=`## 7.2. Richardson's extrapolation

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
`,Nn=`# Chapter 7

## Numerical Differentiation and Integration

In this chapter first we study several methods for numerical differentiation, and consider the Richardson's extrapolation method to obtain higher order methods. Next we define Newton–Cotes formulas and the Gaussian quadrature to approximate definite integrals.
`,jn=`## 7.2. Richardson-extrapoláció

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
`,Cn=`# 7. fejezet

## Numerikus differenciálás és integrálás

Ebben a fejezetben először a numerikus differenciálás különböző képleteit vizsgáljuk, majd a Richardson-extrapolációt definiáljuk, mellyel egy adott rendű numerikus módszer képletéből magasabbrendű formulákat nyerhetünk. Ezután határozott integrálok közelítésének két népszerű módszerét tanulmányozzuk: Newton–Cotes- és Gauss-féle kvadratúra formulák. A Gauss-féle kvadratúra formula levezetése kapcsán az ortogonális polinomok elméletének elemeit is ismertetjük.
`,He=[{id:"7.1",slug:"7_1",title:{en:"Numerical differentiation",hu:"Numerikus differenciálás"}},{id:"7.2",slug:"7_2",title:{en:"Richardson's extrapolation",hu:"Richardson-extrapoláció"}},{id:"7.3",slug:"7_3",title:{en:"Newton–Cotes Formulas",hu:"Newton–Cotes-formulák"}},{id:"7.4",slug:"7_4",title:{en:"Gaussian Quadrature",hu:"Gauss-féle kvadratúra formulák"}}],Tn=[{id:"q1",type:"mcq",topic:"7.1",prompt:{en:"What is the truncation error of the first-order forward difference formula f'(x₀) ≈ (f(x₀+h) − f(x₀))/h?",hu:"Mekkora az elsőrendű jobb oldali differencia képlet, f'(x₀) ≈ (f(x₀+h) − f(x₀))/h, képlethibája?"},options:{en:["−(h/2)·f''(ξ)","−(h²/6)·f'''(ξ)","−(h⁴/30)·f⁽⁵⁾(ξ)","−(h²/12)·f''(ξ)"],hu:["−(h/2)·f''(ξ)","−(h²/6)·f'''(ξ)","−(h⁴/30)·f⁽⁵⁾(ξ)","−(h²/12)·f''(ξ)"]},answer:0,explanation:{en:"From the Taylor expansion, f'(x₀) = (f(x₀+h) − f(x₀))/h − (h/2)·f''(ξ), so the error is first-order in h.",hu:"A Taylor-sorból f'(x₀) = (f(x₀+h) − f(x₀))/h − (h/2)·f''(ξ), tehát a hiba h-ban elsőrendű."}},{id:"q2",type:"mcq",topic:"7.1",prompt:{en:"Which formula is the second-order central difference for f'(x₀)?",hu:"Melyik képlet a másodrendű centrális differencia f'(x₀)-ra?"},options:{en:["(f(x₀+h) − f(x₀−h)) / (2h)","(f(x₀+h) − f(x₀)) / h","(f(x₀) − f(x₀−h)) / h","(f(x₀+h) − 2f(x₀) + f(x₀−h)) / h²"],hu:["(f(x₀+h) − f(x₀−h)) / (2h)","(f(x₀+h) − f(x₀)) / h","(f(x₀) − f(x₀−h)) / h","(f(x₀+h) − 2f(x₀) + f(x₀−h)) / h²"]},answer:0,explanation:{en:"The three-point midpoint formula (7.9) uses points x₀±h and is second-order in h.",hu:"A hárompontos felezőpont képlet (7.9) az x₀±h pontokat használja, és h-ban másodrendű."}},{id:"q3",type:"mcq",topic:"7.1",prompt:{en:"The central difference approximation of the second derivative, (f(x₀−h) − 2f(x₀) + f(x₀+h))/h², has error of order:",hu:"A második derivált centrális közelítésének, (f(x₀−h) − 2f(x₀) + f(x₀+h))/h², hibarendje:"},options:{en:["O(h²)","O(h)","O(h⁴)","O(h³)"],hu:["O(h²)","O(h)","O(h⁴)","O(h³)"]},answer:0,explanation:{en:"Formula (7.13) gives an error term −(f⁽⁴⁾(ξ)/12)·h², i.e. second order.",hu:"A (7.13) képlet hibatagja −(f⁽⁴⁾(ξ)/12)·h², azaz másodrendű."}},{id:"q4",type:"truefalse",topic:"7.1",prompt:{en:"Numerical differentiation is an unstable problem: as h → 0 the rounding error can grow without bound.",hu:"A numerikus differenciálás instabil feladat: ha h → 0, a kerekítési hiba korlátlanul nőhet."},answer:!0,explanation:{en:"The rounding term (e₁ − e₀)/h tends to ∞ as h → 0, even though the truncation error shrinks.",hu:"A kerekítési tag (e₁ − e₀)/h a ∞-hez tart, ha h → 0, miközben a képlethiba csökken."}},{id:"q5",type:"mcq",topic:"7.2",prompt:{en:"Richardson's extrapolation applied once to a second-order formula yields a formula of which order?",hu:"A Richardson-extrapolációt egyszer alkalmazva egy másodrendű képletre, milyen rendű képletet kapunk?"},options:{en:["Fourth order","Third order","Second order","Sixth order"],hu:["Negyedrendű","Harmadrendű","Másodrendű","Hatodrendű"]},answer:0,explanation:{en:"Combining K(h) and K(h/2) cancels the h² term, leaving a fourth-order formula K⁽¹⁾(h).",hu:"K(h) és K(h/2) kombinálása kiejti a h² tagot, így negyedrendű K⁽¹⁾(h) képletet ad."}},{id:"q6",type:"mcq",topic:"7.2",prompt:{en:"Richardson's extrapolation assumes the truncation error has which special form?",hu:"A Richardson-extrapoláció szerint a képlethiba milyen speciális alakú?"},options:{en:["Only even powers of h: a₂h² + a₄h⁴ + …","Only odd powers of h","A single term Bh","An arbitrary smooth function with no power structure"],hu:["Csak h páros hatványai: a₂h² + a₄h⁴ + …","Csak h páratlan hatványai","Egyetlen Bh tag","Tetszőleges sima függvény hatványszerkezet nélkül"]},answer:0,explanation:{en:"Relation (7.21): M = K(h) + a₂h² + a₄h⁴ + … — even-order powers, which lets successive terms cancel.",hu:"A (7.21) összefüggés: M = K(h) + a₂h² + a₄h⁴ + … — páros rendű hatványok, így a tagok sorra kiejthetők."}},{id:"q7",type:"mcq",topic:"7.3",prompt:{en:"What is the error term of the basic (elementary) trapezoidal rule on [a, b] with h = b − a?",hu:"Mi az elemi trapézformula hibatagja az [a, b]-n, ahol h = b − a?"},options:{en:["−(h³/12)·f''(ξ)","−(h⁵/90)·f⁽⁴⁾(ξ)","−(h/2)·f''(ξ)","−(h⁴/180)·f⁽⁴⁾(ξ)"],hu:["−(h³/12)·f''(ξ)","−(h⁵/90)·f⁽⁴⁾(ξ)","−(h/2)·f''(ξ)","−(h⁴/180)·f⁽⁴⁾(ξ)"]},answer:0,explanation:{en:"Trapezoidal rule (7.31): ∫ ≈ (h/2)(f(a)+f(b)) − (h³/12)·f''(ξ).",hu:"Trapézformula (7.31): ∫ ≈ (h/2)(f(a)+f(b)) − (h³/12)·f''(ξ)."}},{id:"q8",type:"truefalse",topic:"7.3",prompt:{en:"Simpson's rule integrates all cubic (third-degree) polynomials exactly.",hu:"A Simpson-formula minden harmadfokú polinomot pontosan integrál."},answer:!0,explanation:{en:"Its error involves f⁽⁴⁾, which vanishes for polynomials of degree ≤ 3, so Simpson is exact for cubics.",hu:"Hibája f⁽⁴⁾-t tartalmaz, ami legfeljebb harmadfokú polinomra nulla, így a Simpson pontos köbös polinomokra."}},{id:"q9",type:"mcq",topic:"7.3",prompt:{en:"The composite Simpson's rule has a global error of order:",hu:"Az összetett Simpson-formula globális hibarendje:"},options:{en:["O(h⁴)","O(h²)","O(h⁵)","O(h³)"],hu:["O(h⁴)","O(h²)","O(h⁵)","O(h³)"]},answer:0,explanation:{en:"Formula (7.34): error = −((b−a)h⁴/180)·f⁽⁴⁾(ξ), i.e. fourth order in h.",hu:"A (7.34) képlet: hiba = −((b−a)h⁴/180)·f⁽⁴⁾(ξ), azaz h-ban negyedrendű."}},{id:"q10",type:"numeric",topic:"7.3",prompt:{en:"Using the basic trapezoidal rule (h = 1) for ∫₀¹ x²eˣ dx = (1/2)(0 + e), what value do you get? (4 decimals)",hu:"Az elemi trapézformulával (h = 1) ∫₀¹ x²eˣ dx = (1/2)(0 + e) esetén milyen értéket kapsz? (4 tizedes)"},answer:1.3591,tolerance:.001,explanation:{en:"(1/2)(0 + e) = 1.3591409 (Example 7.7).",hu:"(1/2)(0 + e) = 1.3591409 (7.7. példa)."}},{id:"q11",type:"mcq",topic:"7.4",prompt:{en:"An n-point Gaussian quadrature formula is exact for all polynomials of degree at most:",hu:"Az n pontra felírt Gauss-féle kvadratúra formula minden legfeljebb hányadfokú polinomra pontos?"},options:{en:["2n − 1","n","n + 1","2n + 1"],hu:["2n − 1","n","n + 1","2n + 1"]},answer:0,explanation:{en:"It has 2n free parameters (cᵢ, xᵢ), giving exactness up to degree 2n − 1.",hu:"2n szabad paramétere van (cᵢ, xᵢ), így 2n − 1 fokszámig pontos."}},{id:"q12",type:"mcq",topic:"7.4",prompt:{en:"The mesh points (nodes) of the n-point Gaussian quadrature on [−1, 1] are:",hu:"Az n pontra felírt Gauss-kvadratúra alappontjai a [−1, 1]-en:"},options:{en:["the roots of the nth Legendre polynomial Pₙ","equidistant points a + ih","the roots of the nth Chebyshev polynomial","the endpoints ±1 and the midpoint 0"],hu:["az n-edik Legendre-polinom Pₙ gyökei","ekvidisztáns pontok a + ih","az n-edik Csebisev-polinom gyökei","a végpontok ±1 és a felezőpont 0"]},answer:0,explanation:{en:"Theorem 7.13: the nodes are the roots of the nth Legendre polynomial.",hu:"A 7.13. tétel szerint az alappontok az n-edik Legendre-polinom gyökei."}},{id:"q13",type:"numeric",topic:"7.4",prompt:{en:"The two-point Gauss approximation of ∫₋₁¹ eˣ dx is e^(−√3/3) + e^(√3/3). Enter its value. (4 decimals)",hu:"Az ∫₋₁¹ eˣ dx kétpontos Gauss-közelítése e^(−√3/3) + e^(√3/3). Add meg az értékét! (4 tizedes)"},answer:2.3427,tolerance:.001,explanation:{en:"e^(−√3/3) + e^(√3/3) = 2.3426961 (Example 7.11).",hu:"e^(−√3/3) + e^(√3/3) = 2.3426961 (7.11. példa)."}},{id:"q14",type:"truefalse",topic:"7.4",prompt:{en:"As n → ∞, the error of Gaussian quadrature can decrease exponentially, faster than Newton–Cotes (polynomial speed).",hu:"Ha n → ∞, a Gauss-kvadratúra hibája exponenciálisan csökkenhet, gyorsabban mint a Newton–Cotes (polinomiális sebesség)."},answer:!0,explanation:{en:"The error ~ πf⁽²ⁿ⁾(ξ)/(4ⁿ(2n)!) decays exponentially for bounded derivatives.",hu:"A hiba ~ πf⁽²ⁿ⁾(ξ)/(4ⁿ(2n)!) exponenciálisan csökken korlátos deriváltak esetén."}}],On=He,Ve=Tn,Ln=Object.assign({"../content/lessons/en/7_1.md":dt,"../content/lessons/en/7_2.md":Sn,"../content/lessons/en/7_3.md":ht,"../content/lessons/en/7_4.md":lt,"../content/lessons/en/intro.md":Nn,"../content/lessons/hu/7_1.md":ot,"../content/lessons/hu/7_2.md":jn,"../content/lessons/hu/7_3.md":st,"../content/lessons/hu/7_4.md":it,"../content/lessons/hu/intro.md":Cn});function Rn(a,e){return Ln[`../content/lessons/${e}/${a}.md`]}const Pn=async(a,e)=>{const t=On.find(i=>i.id===a||i.slug===a),n=t?Rn(t.slug,e):void 0;if(!t||n===void 0)throw new Error("Lesson not found");return{id:t.id,slug:t.slug,lang:e,title:t.title[e],markdown:n}},An=async a=>Ve.map(e=>({id:e.id,type:e.type,topic:e.topic,prompt:e.prompt[a],...e.options?{options:e.options[a]}:{}}));async function Kn(a,e,t){const n=Ve.find(r=>r.id===a);if(!n)throw new Error("Question not found");let i=!1;if(n.type==="numeric"){const r=typeof e=="number"?e:Number(e),o=n.tolerance??1e-6;i=Number.isFinite(r)&&Math.abs(r-n.answer)<=o}else n.type==="truefalse"?i=!!e===n.answer:i=Number(e)===n.answer;return{correct:i,answer:n.answer,explanation:n.explanation[t]}}function se({markdown:a}){return h.jsx("div",{className:"lesson",children:h.jsx(ft,{remarkPlugins:[ut,pt],rehypePlugins:[[ct,{throwOnError:!1,trust:!0}]],children:a})})}const En={"7_1":[{term:{en:"Numerical differentiation",hu:"Numerikus differenciálás"},def:{en:"Approximating $f'(x_0)$ (or higher derivatives) from a few function values, using difference quotients derived from the limit definition — together with a bound on the truncation error.",hu:"Az $f'(x_0)$ (vagy magasabb deriváltak) közelítése néhány függvényértékből, a határérték-definícióból származó differenciahányadosokkal — a csonkítási hiba korlátjával együtt."}},{term:{en:"Two derivation methods",hu:"Két levezetési módszer"},def:{en:"**Lagrange's method**: differentiate the interpolating polynomial $L_n$ and use $L_n'(x_0)$. **Taylor's method**: expand $f$ around $x_0$ and combine the expansions to cancel unwanted terms. Both give the same formulas with explicit error terms.",hu:"**Lagrange-módszer**: deriváld az $L_n$ interpolációs polinomot, és használd $L_n'(x_0)$-t. **Taylor-módszer**: fejtsd $f$-et $x_0$ körül, és kombináld a sorfejtéseket a nem kívánt tagok kioltására. Mindkettő ugyanazokat a képleteket adja, explicit hibataggal."}},{term:{en:"Forward/backward difference $O(h)$",hu:"Előre/hátra differencia $O(h)$"},def:{en:"$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0)}{h}$ with error $-\\tfrac{h}{2}f''(\\xi)$ — first-order accurate. Backward difference uses $f(x_0)-f(x_0-h)$.",hu:"$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0)}{h}$, hibája $-\\tfrac{h}{2}f''(\\xi)$ — elsőrendben pontos. A hátra differencia $f(x_0)-f(x_0-h)$-t használ."}},{term:{en:"Central difference $O(h^2)$",hu:"Centrális differencia $O(h^2)$"},def:{en:"$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0-h)}{2h}$ with error $-\\tfrac{h^2}{6}f'''(\\xi)$ — second-order accurate, the symmetric terms cancel. More accurate than the one-sided formula for the same $h$.",hu:"$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0-h)}{2h}$, hibája $-\\tfrac{h^2}{6}f'''(\\xi)$ — másodrendben pontos, a szimmetrikus tagok kioltják egymást. Pontosabb az egyoldali képletnél azonos $h$ mellett."}},{term:{en:"Second-derivative formula",hu:"Második derivált képlet"},def:{en:"$f''(x_0)\\approx\\dfrac{f(x_0+h)-2f(x_0)+f(x_0-h)}{h^2}$ with error $-\\tfrac{h^2}{12}f^{(4)}(\\xi)$ — the standard $O(h^2)$ three-point stencil.",hu:"$f''(x_0)\\approx\\dfrac{f(x_0+h)-2f(x_0)+f(x_0-h)}{h^2}$, hibája $-\\tfrac{h^2}{12}f^{(4)}(\\xi)$ — a szokásos $O(h^2)$ hárompontos sablon."}},{term:{en:"Truncation vs round-off (optimal $h$)",hu:"Csonkítás vs kerekítés (optimális $h$)"},def:{en:"Shrinking $h$ reduces the truncation error ($\\propto h^p$) but inflates the round-off error ($\\propto \\varepsilon/h$). There is an optimal $h$ balancing the two; going smaller makes the result worse, not better.",hu:"$h$ csökkentése mérsékli a csonkítási hibát ($\\propto h^p$), de felnagyítja a kerekítési hibát ($\\propto \\varepsilon/h$). Van egy optimális $h$, amely kiegyensúlyozza a kettőt; ennél kisebb $h$ rontja, nem javítja az eredményt."}},{term:{en:"Higher-order (multi-point) formulas",hu:"Magasabb rendű (többpontos) képletek"},def:{en:"Using more mesh points (e.g. the five-point stencil) raises the order of accuracy, at the cost of more function evaluations and more sensitivity to round-off. Derived the same way from $L_n$ or Taylor.",hu:"Több alappont (pl. az ötpontos sablon) növeli a pontossági rendet, több függvénykiértékelés és nagyobb kerekítés-érzékenység árán. Ugyanúgy vezethető le $L_n$-ből vagy Taylorral."}}],"7_2":[{term:{en:"Richardson extrapolation",hu:"Richardson-extrapoláció"},def:{en:"A way to boost the order of an approximation $K(h)\\to K$ by combining values at two step sizes so the leading error term cancels — turning an $O(h^p)$ formula into $O(h^{p+q})$.",hu:"Egy közelítés $K(h)\\to K$ rendjének növelése két lépésközhöz tartozó érték kombinálásával úgy, hogy a vezető hibatag kiessen — egy $O(h^p)$ képletből $O(h^{p+q})$-t csinál."}},{term:{en:"Cancelling the leading error",hu:"A vezető hiba kioltása"},def:{en:"If $K(h)=K+a_p h^p+a_{p+q}h^{p+q}+\\cdots$, then $\\dfrac{2^p K(h/2)-K(h)}{2^p-1}$ eliminates the $h^p$ term, leaving a higher-order approximation.",hu:"Ha $K(h)=K+a_p h^p+a_{p+q}h^{p+q}+\\cdots$, akkor $\\dfrac{2^p K(h/2)-K(h)}{2^p-1}$ kiküszöböli az $h^p$ tagot, magasabb rendű közelítést hagyva."}},{term:{en:"Repeated extrapolation",hu:"Ismételt extrapoláció"},def:{en:"Apply the cancellation recursively, $K^{(j)}(h)$ from $K^{(j-1)}(h)$ and $K^{(j-1)}(h/2)$, removing successive error terms — each level gains accuracy. Builds a triangular table like Romberg integration.",hu:"Alkalmazd a kioltást rekurzívan, $K^{(j)}(h)$-t $K^{(j-1)}(h)$-ból és $K^{(j-1)}(h/2)$-ből, sorra eltávolítva a hibatagokat — minden szint pontosabb. A Romberg-integráláshoz hasonló háromszög táblát épít."}},{term:{en:"Even-power error (central difference)",hu:"Páros hatványú hiba (centrális differencia)"},def:{en:"The central difference error expands in *even* powers $h^2,h^4,\\dots$, so each extrapolation step jumps the order by 2: $O(h^2)\\to O(h^4)\\to O(h^6)$ (Example 7.6).",hu:"A centrális differencia hibája *páros* hatványokban $h^2,h^4,\\dots$ fejlik ki, így minden extrapolációs lépés 2-vel ugrik: $O(h^2)\\to O(h^4)\\to O(h^6)$ (7.6. példa)."}},{term:{en:"General-power variant",hu:"Általános hatványú változat"},def:{en:"When the error contains all powers of $h$ (or general exponents), the same idea works with the appropriate factor $2^{p_j}$ at each step — the method is not limited to even powers.",hu:"Ha a hiba minden $h$-hatványt (vagy általános kitevőket) tartalmaz, ugyanaz az ötlet működik a megfelelő $2^{p_j}$ tényezővel lépésenként — a módszer nem korlátozódik páros hatványokra."}},{term:{en:"Why it works cheaply",hu:"Miért olcsó"},def:{en:"Extrapolation reuses already-computed values $K(h),K(h/2),\\dots$ with simple linear combinations — no new function evaluations beyond the halved-step ones — to get high-order accuracy.",hu:"Az extrapoláció a már kiszámolt $K(h),K(h/2),\\dots$ értékeket használja újra egyszerű lineáris kombinációkkal — a felezett lépésközűeken kívül nincs új függvénykiértékelés — magas rendű pontosságért."}}],"7_3":[{term:{en:"Newton–Cotes formulas",hu:"Newton–Cotes-formulák"},def:{en:"Quadrature rules obtained by integrating the Lagrange interpolant on equidistant nodes: $\\int_a^b f\\approx\\int_a^b L_n=\\sum_i c_i f(x_i)$. The trapezoidal ($n=1$) and Simpson ($n=2$) rules are the first cases.",hu:"Kvadratúraképletek, amelyeket az egyenközű alappontokon vett Lagrange-interpoláns integrálásával kapunk: $\\int_a^b f\\approx\\int_a^b L_n=\\sum_i c_i f(x_i)$. A trapéz ($n=1$) és a Simpson ($n=2$) szabály az első esetek."}},{term:{en:"Degree of precision",hu:"Pontossági fok"},def:{en:"The largest $n$ for which a quadrature is exact on all polynomials of degree $\\le n$ (but not $n+1$). The $(n+1)$-point Newton–Cotes rule has degree $\\ge n$; for **even** $n$ it gains one extra (degree $n+1$).",hu:"A legnagyobb $n$, amelyre a kvadratúra minden legfeljebb $n$-edfokú polinomra pontos (de $n+1$-re nem). Az $(n+1)$-pontos Newton–Cotes szabály foka $\\ge n$; **páros** $n$-re egy extra fokot nyer (foka $n+1$)."}},{term:{en:"Trapezoidal rule",hu:"Trapézszabály"},def:{en:"$\\int_{x_0}^{x_1}f\\approx\\tfrac{h}{2}(f(x_0)+f(x_1))$ with error $-\\tfrac{h^3}{12}f''(\\eta)$ — exact for linear functions (degree of precision 1).",hu:"$\\int_{x_0}^{x_1}f\\approx\\tfrac{h}{2}(f(x_0)+f(x_1))$, hibája $-\\tfrac{h^3}{12}f''(\\eta)$ — lineáris függvényekre pontos (pontossági fok 1)."}},{term:{en:"Composite trapezoidal rule",hu:"Összetett trapézszabály"},def:{en:"Apply the trapezoidal rule on $n$ equal subintervals: $\\tfrac{h}{2}\\big(f_0+2f_1+\\cdots+2f_{n-1}+f_n\\big)$ with total error $-\\tfrac{(b-a)h^2}{12}f''(\\xi)$ — $O(h^2)$.",hu:"A trapézszabály $n$ egyenlő részintervallumon: $\\tfrac{h}{2}\\big(f_0+2f_1+\\cdots+2f_{n-1}+f_n\\big)$, teljes hibája $-\\tfrac{(b-a)h^2}{12}f''(\\xi)$ — $O(h^2)$."}},{term:{en:"Simpson's rule",hu:"Simpson-szabály"},def:{en:"$\\int_{x_0}^{x_2}f\\approx\\tfrac{h}{3}(f_0+4f_1+f_2)$ with error $-\\tfrac{h^5}{90}f^{(4)}(\\xi)$ — exact for cubics (degree of precision 3) despite using only 3 points. The composite form splits $[a,b]$ into $2n$ parts.",hu:"$\\int_{x_0}^{x_2}f\\approx\\tfrac{h}{3}(f_0+4f_1+f_2)$, hibája $-\\tfrac{h^5}{90}f^{(4)}(\\xi)$ — köbös polinomokra pontos (pontossági fok 3), pedig csak 3 pontot használ. Az összetett alak $[a,b]$-t $2n$ részre osztja."}},{term:{en:"Simpson's 3/8 rule",hu:"Simpson-féle 3/8 szabály"},def:{en:"The 4-point ($n=3$) Newton–Cotes rule $\\tfrac{3h}{8}(f_0+3f_1+3f_2+f_3)$, also degree of precision 3. Useful when the subinterval count is not even.",hu:"A 4-pontos ($n=3$) Newton–Cotes szabály $\\tfrac{3h}{8}(f_0+3f_1+3f_2+f_3)$, szintén 3-as pontossági fokú. Akkor hasznos, ha a részintervallumok száma nem páros."}},{term:{en:"Stability of quadrature (Thm 7.9)",hu:"Kvadratúra stabilitása (7.9. tétel)"},def:{en:"If a quadrature is exact for constants and all weights $c_i>0$, then data errors $|y_i-f(x_i)|\\le\\varepsilon$ produce an output error $\\le(b-a)\\varepsilon$ — bounded, so the rule is stable. Negative weights (high-$n$ Newton–Cotes) lose this.",hu:"Ha egy kvadratúra konstansokra pontos és minden súly $c_i>0$, akkor a $|y_i-f(x_i)|\\le\\varepsilon$ adathibák $\\le(b-a)\\varepsilon$ kimeneti hibát adnak — korlátos, tehát a szabály stabil. A negatív súlyok (magas $n$-ű Newton–Cotes) ezt elrontják."}}],"7_4":[{term:{en:"Gaussian quadrature",hu:"Gauss-féle kvadratúra"},def:{en:"$\\int_a^b f\\approx\\sum_{i=1}^n c_i f(x_i)$ where **both** the weights $c_i$ and the nodes $x_i$ are chosen optimally — unlike Newton–Cotes, which fixes equidistant nodes.",hu:"$\\int_a^b f\\approx\\sum_{i=1}^n c_i f(x_i)$, ahol **mind** a $c_i$ súlyokat, **mind** az $x_i$ alappontokat optimálisan választjuk — szemben a Newton–Cotes-szal, amely rögzíti az egyenközű alappontokat."}},{term:{en:"Maximal degree of precision $2n-1$ (Thm 7.10)",hu:"Maximális pontossági fok $2n-1$ (7.10. tétel)"},def:{en:"With $2n$ free parameters ($n$ nodes + $n$ weights), an $n$-point formula can be (and is) exact for all polynomials of degree $\\le 2n-1$ — roughly double the precision of an $n$-point Newton–Cotes rule.",hu:"$2n$ szabad paraméterrel ($n$ alappont + $n$ súly) egy $n$-pontos képlet minden legfeljebb $2n-1$-edfokú polinomra pontos lehet (és az is) — nagyjából kétszer akkora pontosság, mint az $n$-pontos Newton–Cotes."}},{term:{en:"Orthogonal polynomials",hu:"Ortogonális polinomok"},def:{en:"$f,g$ are orthogonal on $[a,b]$ if $\\int_a^b fg=0$. Gram–Schmidt on $1,x,x^2,\\dots$ builds a sequence $P_i$ of degree-$i$ pairwise-orthogonal polynomials — on $[-1,1]$ these are the Legendre polynomials.",hu:"$f,g$ ortogonális $[a,b]$-n, ha $\\int_a^b fg=0$. Az $1,x,x^2,\\dots$-ra alkalmazott Gram–Schmidt egy $i$-edfokú, páronként ortogonális $P_i$ sorozatot épít — $[-1,1]$-en ezek a Legendre-polinomok."}},{term:{en:"Legendre polynomials (Thm 7.12)",hu:"Legendre-polinomok (7.12. tétel)"},def:{en:"$P_0=1,P_1=x,P_2=x^2-\\tfrac13,\\dots$, satisfying the recursion $(i+1)P_{i+1}=(2i+1)xP_i-iP_{i-1}$. Each $P_i$ is orthogonal to every lower-degree polynomial and has $i$ distinct real roots in $(-1,1)$.",hu:"$P_0=1,P_1=x,P_2=x^2-\\tfrac13,\\dots$, a $(i+1)P_{i+1}=(2i+1)xP_i-iP_{i-1}$ rekurzióval. Minden $P_i$ ortogonális minden alacsonyabb fokú polinomra, és $i$ különböző valós gyöke van $(-1,1)$-ben."}},{term:{en:"Nodes = Legendre roots (Thm 7.13)",hu:"Alappontok = Legendre-gyökök (7.13. tétel)"},def:{en:"The optimal $n$ Gaussian nodes on $[-1,1]$ are exactly the roots of $P_n$; the weights $c_i=\\int_{-1}^1 l_i(x)\\,dx$ come from the Lagrange basis at those nodes. This achieves degree of precision $2n-1$.",hu:"Az optimális $n$ Gauss-alappont $[-1,1]$-en pontosan $P_n$ gyökei; a $c_i=\\int_{-1}^1 l_i(x)\\,dx$ súlyok az ezekhez tartozó Lagrange-bázisból jönnek. Ez $2n-1$ pontossági fokot ér el."}},{term:{en:"Interval transformation",hu:"Intervallum-transzformáció"},def:{en:"Tables give nodes/weights on $[-1,1]$; for a general $[a,b]$ substitute $x=\\tfrac{b-a}{2}t+\\tfrac{a+b}{2}$, so $\\int_a^b f\\,dx=\\tfrac{b-a}{2}\\int_{-1}^1 f(\\dots)\\,dt$.",hu:"A táblázatok az alappontokat/súlyokat $[-1,1]$-en adják; általános $[a,b]$-re helyettesítsünk $x=\\tfrac{b-a}{2}t+\\tfrac{a+b}{2}$-t, így $\\int_a^b f\\,dx=\\tfrac{b-a}{2}\\int_{-1}^1 f(\\dots)\\,dt$."}},{term:{en:"Error formula (Thm 7.14)",hu:"Hibaformula (7.14. tétel)"},def:{en:"For $f\\in C^{2n}[-1,1]$ the $n$-point Gauss error is $\\dfrac{2^{2n+1}(n!)^4}{(2n+1)((2n)!)^3}f^{(2n)}(\\xi)$ — vanishes for polynomials up to degree $2n-1$, and shrinks extremely fast with $n$ for smooth $f$.",hu:"$f\\in C^{2n}[-1,1]$ esetén az $n$-pontos Gauss hibája $\\dfrac{2^{2n+1}(n!)^4}{(2n+1)((2n)!)^3}f^{(2n)}(\\xi)$ — eltűnik a $2n-1$ fokig terjedő polinomokra, és sima $f$-re rendkívül gyorsan csökken $n$-nel."}}]},Fn={"7_1":[{q:"What is the limit definition of the derivative $f'(x_0)$?",a:"$f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}$"},{q:"Under what condition is the difference quotient $\\frac{f(x_0 + h) - f(x_0)}{h}$ considered a good approximation of $f'(x_0)$?",a:"When the absolute value of the step size $|h|$ is small."},{q:"In the context of numerical differentiation, what does 'Lagrange's method' involve?",a:"Approximating a function $f$ with a Lagrange polynomial $L_n(x)$ and using $L'_n(x_0)$ as the derivative estimate."},{q:"What is the formula for the first-order forward difference approximation of $f'(x_0)$?",a:"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ where $h > 0$."},{q:"What is the formula for the first-order backward difference approximation of $f'(x_0)$?",a:"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ where $h < 0$."},{q:"The first-order difference formula is also known as the _____-point formula.",a:"two"},{q:"What is the specific form of the truncation error for the first-order difference approximation of $f'(x_0)$?",a:"$-\\frac{h}{2}f''(\\xi)$ where $\\xi \\in \\langle x_0, x_0 + h \\rangle$."},{q:"Using Taylor's method, what order of Taylor expansion is required to derive the first-order difference formula for $f'(x_0)$?",a:"First-order Taylor expansion."},{q:"How does the error of a first-order difference formula change if the step size $h$ decreases by one order of magnitude?",a:"The error also decreases by one order of magnitude."},{q:"What general formula is used to derive an $(n+1)$-point difference formula using Lagrange basis polynomials $l_j(x)$?",a:"$f'(x_i) \\approx \\sum_{j=0}^{n} f(x_j)l'_j(x_i)$"},{q:"For an $(n+1)$-point difference formula with equidistant points, what is the order of the error term in terms of $h$?",a:"$n$th-order ($O(h^n)$)."},{q:"What are the three mesh points used in the standard three-point difference formulas?",a:"$x_0$, $x_0 + h$, and $x_0 + 2h$."},{q:"What is the three-point endpoint formula for $f'(x_0)$?",a:"$\\frac{1}{h}(-\\frac{3}{2}f(x_0) + 2f(x_0 + h) - \\frac{1}{2}f(x_0 + 2h))$"},{q:"What is the order of the truncation error for the three-point endpoint formula?",a:"Second-order ($O(h^2)$)."},{q:"The three-point midpoint formula is also commonly called the second-order _____ difference formula.",a:"central"},{q:"What is the formula for the three-point midpoint (central difference) approximation of $f'(x_0)$?",a:"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}$"},{q:"What is the truncation error term for the second-order central difference formula?",a:"$-\\frac{h^2}{6}f'''(\\xi)$"},{q:"Between a one-sided second-order formula and a central second-order formula, which generally yields a smaller error for the same $h$?",a:"The central difference formula."},{q:"Which formula uses the points $x_0 - 2h, x_0 - h, x_0 + h, x_0 + 2h$ to approximate $f'(x_0)$?",a:"The five-point central difference (fourth-order) formula."},{q:"What is the order of accuracy for the five-point central difference formula (7.11)?",a:"Fourth-order ($O(h^4)$)."},{q:"What is the truncation error term for the fourth-order central difference formula?",a:"$\\frac{h^4}{30}f^{(5)}(\\xi)$"},{q:"Which method is described as more convenient than Lagrange's method for deriving approximations of higher-order derivatives?",a:"Taylor's method."},{q:"What is the standard second-order central difference formula for the second derivative $f''(x_0)$?",a:"$f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$"},{q:"What is the truncation error associated with the central difference formula for the second derivative $f''(x_0)$?",a:"$-\\frac{h^2}{12}f^{(4)}(\\xi)$"},{q:"Numerical differentiation is described as an _____ problem because small perturbations in function values can cause large errors in the derivative.",a:"unstable"},{q:"In the error analysis $f'(x_0) - \\frac{f_1 - f_0}{h} = -\\frac{h}{2}f''(\\xi) + \\frac{e_1 - e_0}{h}$, what does the term $\\frac{e_1 - e_0}{h}$ represent?",a:"The rounding error."},{q:"As the step size $h$ approaches zero, what happens to the rounding error in numerical differentiation?",a:"It tends toward infinity (or increases significantly)."},{q:"How do truncation error and rounding error behave differently as step size $h$ decreases?",a:"Truncation error decreases, while rounding error increases."},{q:"Why might a 4-digit arithmetic calculation show an increase in error when $h$ is reduced from 0.01 to 0.001?",a:"The increase in rounding error outweighs the decrease in truncation error."},{q:"What is the numerical approximation for the partial derivative $\\frac{\\partial f(x_0, y_0)}{\\partial x}$ using a first-order forward difference?",a:"$\\frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}$"},{q:"What is the central difference approximation for the second partial derivative $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2}$?",a:"$\\frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}$"},{q:"What is the approximation formula for the mixed partial derivative $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x \\partial y}$?",a:"$\\frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}$"},{q:"The formula $f'''(x_0) \\approx \\frac{1}{2h^3}(f(x_0 + 2h) - 2f(x_0 + h) + 2f(x_0 - h) - f(x_0 - 2h))$ approximates which derivative?",a:"The third derivative ($f'''(x_0)$)."},{q:"The formula $f^{(4)}(x_0) \\approx \\frac{1}{h^4}(f(x_0 + 2h) - 4f(x_0 + h) + 6f(x_0) - 4f(x_0 - h) + f(x_0 - 2h))$ approximates which derivative?",a:"The fourth derivative ($f^{(4)}(x_0)$)."},{q:"What is the truncation error order of the first-order forward difference formula?",a:"$O(h)$"},{q:"What is the truncation error order of the central difference formula for the first derivative?",a:"$O(h^2)$"},{q:"If $f \\in C^2[a, b]$, what is the maximum order of the Taylor expansion useful for deriving a first-order derivative approximation?",a:"First-order Taylor expansion with a second-order error term."},{q:"In formula (7.1), why is the limit $x \\to x_0$ taken?",a:"To eliminate terms containing $(x-x_0)$ and isolate the derivative $f'(x_0)$ and the error term."},{q:"Term: Two-point difference formula",a:"Definition: An approximation of the first derivative using values of the function at exactly two points."},{q:"Which formula is obtained by substituting $x_0 \\leftarrow x_0 - 2h$ and $h \\leftarrow -h$ into the three-point endpoint formula at $x_0 + 2h$?",a:"The second-order backward difference formula."},{q:"In Example 7.1, what happens to the error when $h$ is divided by 10?",a:"The error is also divided by approximately 10."},{q:"What happens to the error in a second-order formula when $h$ is divided by 10?",a:"The error is divided by 100 ($10^2$)."},{q:"What is the primary drawback of using very small values of $h$ in practical computer calculations?",a:"Significant increase in rounding error due to finite precision arithmetic."},{q:"The five-point one-sided formula for $f'(x_0)$ involves points from $x_0$ up to $x_0 +$ _____.",a:"$4h$"},{q:"In the second derivative formula $f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$, the error is proportional to which derivative of $f$?",a:"The fourth derivative ($f^{(4)}$)."},{q:"Formula: $\\frac{\\partial f(x_0, y_0)}{\\partial y} \\approx \\frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h}$",a:"This is the first-order forward difference for the partial derivative with respect to $y$."},{q:"Why is the function $g(x) = f(x) + \\frac{1}{n}\\sin(n^2 x)$ used in the text?",a:"To demonstrate the instability of numerical differentiation as $n$ becomes large."},{q:"Theorem 2.2 (Intermediate Value Theorem) is used in the derivation of the second derivative error to simplify the sum of which two terms?",a:"$f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)$"},{q:"What does the notation $\\xi \\in \\langle x_0, x_0 + h \\rangle$ indicate?",a:"The value $\\xi$ lies in the interval between $x_0$ and $x_0 + h$."},{q:"True or False: The three-point endpoint formula and the second-order forward difference formula are the same if $h > 0$.",a:"True"},{q:"What is the sign of $h$ in a backward difference formula?",a:"Negative ($h < 0$)."},{q:"If we use a 5-point formula, what is the highest degree of Lagrange polynomial being used?",a:"Degree 4 ($n=4$)."},{q:"In Equation (7.14), what is the relationship between $h$ and the term $\\frac{e_1 - e_0}{h}$?",a:"They are inversely proportional; as $h$ gets smaller, the term gets larger."},{q:"What is the purpose of using 4-digit vs 6-digit arithmetic in Example 7.5?",a:"To illustrate how limited precision arithmetic exacerbates rounding errors in differentiation."},{q:"Which partial derivative formula uses the values at $(x_0+2h, y_0)$, $(x_0+h, y_0)$, and $(x_0, y_0)$?",a:"The second-order forward difference for $\\frac{\\partial^2 f}{\\partial x^2}$."},{q:"In Equation (7.5), the product term $\\prod_{j \\ne i} (x_i - x_j)$ for equidistant points $x_j = x_0 + jh$ will result in a power of $h$ equal to _____.",a:"$n$"},{q:"What is the coefficient of $f(x_0)$ in the fourth-order one-sided difference formula (7.10)?",a:"$-25$"},{q:"What is the coefficient of $f(x_0 - h)$ in the fourth-order central difference formula (7.11)?",a:"$-8$ (divided by $12h$)."},{q:"The 'centered difference' is another name for the _____ formula.",a:"central difference"},{q:"Why is it impossible to compute the term $\\frac{d}{dx}(f''(\\xi(x)))$ explicitly in Lagrange's method?",a:"Because the functional form of $\\xi(x)$ is generally unknown."}],"7_2":[{q:"In the context of Richardson's extrapolation, what does the symbol $M$ represent?",a:"The exact value of a quantity being approximated."},{q:"What does $K(h)$ represent in the equation $M = K(h) + \\text{error}$?",a:"The numerical approximation of $M$ using step size $h$."},{q:"What is the standard assumption regarding the form of the truncation error in Richardson's extrapolation?",a:"The error can be expanded in an even-order Taylor polynomial or power series in $h$."},{q:"If the truncation error is $a_2 h^2 + a_4 h^4 + \\dots$, what is the order of accuracy of $K(h)$?",a:"Second-order."},{q:"How is the discretization parameter $h$ typically modified to perform the first step of Richardson's extrapolation?",a:"It is halved to $h/2$."},{q:"Why is $K(h/2)$ calculated in addition to $K(h)$ in Richardson's extrapolation?",a:"To combine the two results and eliminate the leading error term."},{q:"What factor is $K(h/2)$ multiplied by when eliminating the $h^2$ error term in a second-order approximation?",a:"4"},{q:"Formula: The first Richardson extrapolation $K^{(1)}(h)$ for a second-order method.",a:"$K^{(1)}(h) = \\frac{4K(h/2) - K(h)}{3}$"},{q:"What is the order of accuracy of the extrapolated formula $K^{(1)}(h)$?",a:"Fourth-order."},{q:"In the error series for $K^{(1)}(h)$, which power of $h$ is the leading term?",a:"$h^4$"},{q:"To cancel the $h^4$ error term in $K^{(1)}(h)$, what factor must be applied to $K^{(1)}(h/2)$?",a:"16"},{q:"Formula: The second Richardson extrapolation $K^{(2)}(h)$ derived from $K^{(1)}$.",a:"$K^{(2)}(h) = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$"},{q:"What is the order of accuracy of the extrapolated formula $K^{(2)}(h)$?",a:"Sixth-order."},{q:"The general recursive formula for Richardson's extrapolation is $K^{(i+1)}(h) = K^{(i)}(h/2) + \\frac{K^{(i)}(h/2) - K^{(i)}(h)}{\\dots}$.",a:"$4^{i+1} - 1$"},{q:"In the recursive definition of Richardson's extrapolation, what is the value of the base case $K^{(0)}(h)$?",a:"$K(h)$"},{q:"Term: Richardson's extrapolation.",a:"Definition: A procedure used to generate higher-order numerical approximation formulas from lower-order ones by eliminating leading error terms."},{q:"Does the central difference formula satisfy the error form requirement for standard Richardson's extrapolation?",a:"Yes, because its Taylor expansion contains only even powers of $h$."},{q:"What is the leading error term for the central difference formula $\\frac{f(x_0 + h) - f(x_0 - h)}{2h}$?",a:"$- \\frac{f'''(x_0)}{3!}h^2$"},{q:"In the Taylor expansion used for central differences, which powers of $h$ cancel out when subtracting $f(x_0 - h)$ from $f(x_0 + h)$?",a:"The even powers ($h^0, h^2, h^4, \\dots$)."},{q:"When applying Richardson's extrapolation to the central difference, the resulting $K^{(1)}(h)$ formula achieves _____ order error.",a:"fourth"},{q:"The 4th-order derivative approximation $K^{(1)}(h)$ equals $\\frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{\\dots}$.",a:"$6h$"},{q:"If the error expansion of $K(h)$ contains ALL powers of $h$ ($h^1, h^2, h^3, \\dots$), what is the denominator in the first extrapolation step?",a:"1"},{q:"In the general case where the error is $a_1 h^{\\alpha_1} + a_2 h^{\\alpha_2}$, how is $K^{(1)}(h)$ constructed using $h$ and $h/2$?",a:"$K^{(1)}(h) = \\frac{2^{\\alpha_1}K(h/2) - K(h)}{2^{\\alpha_1} - 1}$"},{q:"True or False: Richardson's extrapolation can only be used if the error consists of even powers of $h$.",a:"False; it can be adapted for any power series error form."},{q:"What determines the denominator in the formula $K^{(1)} = \\frac{4K(h/2) - K(h)}{3}$?",a:"The ratio of the leading error terms for $h$ versus $h/2$ (specifically $2^2 - 1 = 3$)."},{q:"Starting from a 1st-order difference formula, what order approximation is produced by one step of Richardson's extrapolation?",a:"Second-order."},{q:"According to Example 7.6, the 4th-order Richardson-extrapolated central difference is equivalent to which formula?",a:"Formula (7.11)."},{q:"What is the purpose of multiplying the $h/2$ equation by 4 in the derivation of $K^{(1)}$?",a:"To match the coefficient of the $a_2 h^2$ term in the original $h$ equation so it cancels out."},{q:"If $f \\in C^{2m+3}$, what is the order of the remainder term $b(h)$ in the central difference derivative expansion?",a:"$h^{2m+2}$"},{q:"In the expression for $a_{2i}^{(1)}$, how is it related to the original coefficient $a_{2i}$?",a:"$a_{2i}^{(1)} = \\frac{1 - 4^{i-1}}{4^{i-1} \\cdot 3}a_{2i}$"},{q:"What is the primary benefit of using Richardson's extrapolation instead of simply decreasing $h$ to a very small value?",a:"It achieves high accuracy with larger step sizes, potentially avoiding round-off errors and reducing computational cost."},{q:"In the formula $K^{(2)} = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$, where does the number 15 come from?",a:"It is $4^2 - 1$ (the ratio of $h^4$ to $(h/2)^4$ minus 1)."},{q:"Which specific differentiation formula is used as the starting point for the Richardson examples in the text?",a:"The central difference formula."},{q:"What is the result of applying Richardson's extrapolation to a sequence of approximations that does not have a structured error expansion?",a:"The method may fail to improve accuracy or could even decrease it."},{q:"Concept: Truncation error.",a:"Definition: The error made by truncating an infinite process (like a Taylor series) to a finite one."},{q:"What is the value of $m$ in the term $a_{2m} h^{2m}$ if we want to reach a tenth-order approximation?",a:"5"},{q:"Cloze: To derive a third-order approximation from a first-order one, the leading error term must be proportional to _____.",a:"$h^1$ (or $h^2$ for the second step)"},{q:"How does the complexity of the approximation formula $K^{(i)}(h)$ change as $i$ increases?",a:"It involves more function evaluations at different step sizes ($h, h/2, h/4, \\dots$)."},{q:"Formula: The general error bound for $b(h)$ in the second-order case.",a:"$|b(h)| \\le B h^{2m+2}$"},{q:"If $M$ is being approximated, $K(h)$ is the approximation, and $E(h)$ is the error, what is the basic identity used?",a:"$M = K(h) + E(h)$"},{q:"Why is the central difference formula referred to as 'másodrendű' in the Hungarian text?",a:"Because its error is proportional to $h^2$ (second-order)."},{q:"In the exercise to derive a 6th-order formula for $f'(0)$ where $f(x) = e^{x} \\sin x$, what is the starting step size $h$?",a:"0.25"},{q:"The general case formula uses integers $1 \\le \\alpha_1 < \\alpha_2 < \\dots < \\alpha_m$. What does $\\alpha_i$ represent?",a:"The powers of $h$ present in the error expansion."},{q:"If the error expansion is $M = K(h) + a_1 h + a_2 h^2 + \\dots$, the first extrapolated value $K^{(1)}(h)$ is _____.",a:"$2K(h/2) - K(h)$"},{q:"In the central difference expansion, what is the coefficient of the $h^4$ term ($a_4$)?",a:"$- \\frac{f^{(5)}(x_0)}{5!}$"},{q:"What happens to the coefficients $a_{2i}$ of the remaining error terms after one step of Richardson's extrapolation?",a:"They are transformed into new coefficients $a_{2i}^{(1)}$."},{q:"The Richardson procedure can be viewed as a linear combination of _____ at different scales.",a:"approximations"},{q:"Formula: The relation for $M$ after the second-order term is cancelled.",a:"$M = \\frac{4K(h/2) - K(h)}{3} + O(h^4)$"},{q:"Is Richardson's extrapolation limited to derivatives?",a:"No, it can be applied to integrals (Romberg integration) or any numerical limit process with a known error structure."},{q:"What is the constant $B$ in the error bound $|b(h)| \\le B h^{2m+2}$?",a:"A positive constant independent of $h$ that bounds the higher-order terms."},{q:"In the context of Exercise 4, what is the order of the 'one-sided difference' formula?",a:"First-order."},{q:"If $K^{(0)}(h) = K(h)$, $K^{(1)}(h)$ requires $K(h/2)$, how many $h$ values does $K^{(2)}(h)$ require?",a:"Three: $h, h/2, h/4$."},{q:"Cloze: The procedure of Richardson's extrapolation generates a _____ of approximations of increasing order.",a:"sequence"},{q:"What is the denominator of the third extrapolation step $K^{(3)}$ if the error only has even powers?",a:"63 ($4^3 - 1$)"},{q:"How does halving the step size twice ($h \\to h/2 \\to h/4$) assist in reaching a 6th-order approximation?",a:"It provides enough data points to eliminate both the $h^2$ and $h^4$ error terms."},{q:"In the derivation of $K^{(1)}$, why is $M$ multiplied by 4 on the left side of the intermediate step?",a:"Because the entire equation for $h/2$ was multiplied by 4."},{q:"What is the leading error term of $K^{(2)}(h)$?",a:"$a_6^{(2)} h^6$"}],"7_3":[{q:"In the definition of the definite integral, what is the 'norm' of a partition $a = x_0 < x_1 < \\dots < x_n = b$?",a:"The maximum length of the subintervals, defined as $\\max\\{x_i - x_{i-1} : i = 1, \\dots, n\\}$."},{q:"Formula: Midpoint Rule (also known as the Rectangle Rule) for numerical integration",a:"$\\int_a^b f(x) \\, dx \\approx \\frac{b - a}{n} \\sum_{i=1}^{n} f\\left(\\frac{x_{i-1} + x_i}{2}\\right)$"},{q:"What is the underlying approach of the Lagrange method for deriving numerical integration formulas?",a:"Approximating the function $f$ with its Lagrange interpolating polynomial $L_n$ and then integrating $L_n$."},{q:"In numerical integration, what is a 'quadrature formula'?",a:"A formula that approximates a definite integral as a weighted sum of function values: $\\sum_{k=0}^{n} c_k f(x_k)$."},{q:"How are the weights $c_k$ defined in a Newton-Cotes quadrature formula?",a:"$c_k = \\int_a^b l_k(x) \\, dx$, where $l_k(x)$ is the $k$-th Lagrange basis polynomial."},{q:"What distinguishes a 'closed' Newton-Cotes formula from an 'open' one?",a:"Closed formulas include the endpoints $a$ and $b$ as mesh points, while open formulas only use points within the open interval $(a, b)$."},{q:"What is the 'degree of precision' of a quadrature formula?",a:"The highest integer $n$ such that the formula gives the exact integral for all polynomials of degree $\\le n$."},{q:"What is the minimum degree of precision for an $(n+1)$-point Newton-Cotes formula?",a:"$n$"},{q:"For which values of $n$ do Newton-Cotes formulas provide an extra degree of precision (exact for polynomials of degree $n+1$)?",a:"Even values of $n$."},{q:"Formula: Elementary Trapezoidal Rule",a:"$\\int_a^b f(x) \\, dx \\approx \\frac{h}{2}(f(a) + f(b))$, where $h = b - a$."},{q:"What is the error term for the elementary Trapezoidal rule?",a:"$-\\frac{h^3}{12}f''(\\xi)$ for some $\\xi \\in (a, b)$."},{q:"What is the geometric interpretation of the Trapezoidal rule?",a:"The integral is approximated by the area of the trapezoid formed by the secant line connecting $(a, f(a))$ and $(b, f(b))$."},{q:"Formula: Composite Trapezoidal Rule for $n$ subintervals of length $h$",a:"$\\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right)$"},{q:"What is the error term for the composite Trapezoidal rule?",a:"$-\\frac{(b - a)h^2}{12}f''(\\xi)$ for some $\\xi \\in (a, b)$."},{q:"If the step size $h$ is halved in the composite Trapezoidal rule, by what factor does the error approximately decrease?",a:"One quarter (indicating quadratic error in $h$)."},{q:"According to the Intermediate Value Theorem for integrals, what condition must $g(x)$ meet for $\\int_a^b f(x)g(x) \\, dx = f(\\xi)\\int_a^b g(x) \\, dx$ to hold?",a:"$g(x)$ must be integrable and not change sign on the interval $[a, b]$."},{q:"For the closed Newton-Cotes formula with $n=2$ (Simpson's rule), what is the relationship between $x_0, x_1, x_2$ and $h$?",a:"$x_0 = a$, $x_1 = a + h$, $x_2 = b$, and $h = (b - a)/2$."},{q:"Formula: Elementary Simpson's Rule",a:"$\\int_{x_0}^{x_2} f(x) \\, dx \\approx \\frac{h}{3}(f(x_0) + 4f(x_1) + f(x_2))$"},{q:"What is the error term for the elementary Simpson's rule?",a:"$-\\frac{h^5}{90}f^{(4)}(\\eta)$ for some $\\eta \\in (x_0, x_2)$."},{q:"Why is Simpson's rule exact for polynomials of degree 3 even though it is based on quadratic interpolation?",a:"Because for even $n$, Newton-Cotes formulas have a higher degree of precision ($n+1$)."},{q:"What is the degree of precision of Simpson's rule?",a:"$3$"},{q:"What is the requirement for the number of subintervals in the composite Simpson's rule?",a:"The interval must be divided into an even number of equal parts ($2n$)."},{q:"Formula: Composite Simpson's Rule for $2n$ subintervals of length $h$",a:"$\\frac{h}{3}\\left(f(x_0) + 4\\sum_{i=1}^{n} f(x_{2i-1}) + 2\\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\\right)$"},{q:"What is the error term for the composite Simpson's rule?",a:"$-\\frac{(b - a)h^4}{180}f^{(4)}(\\xi)$ for some $\\xi \\in (a, b)$."},{q:"Formula: Simpson's $\\frac{3}{8}$ Rule",a:"$\\int_{x_0}^{x_3} f(x) \\, dx \\approx \\frac{3h}{8}(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3))$"},{q:"What is the degree of precision for the Simpson's $\\frac{3}{8}$ rule?",a:"$3$ (since $n=3$ is odd, precision is $n$)."},{q:"Formula: Closed Newton-Cotes formula for $n=4$",a:"$\\frac{2h}{45}(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4))$"},{q:"What is the error term for the $n=4$ closed Newton-Cotes formula?",a:"$-\\frac{8h^7}{945}f^{(6)}(\\xi)$"},{q:"Formula: Open Newton-Cotes formula for $n=0$ over interval $[x_{-1}, x_1]$ (Midpoint Rule)",a:"$2hf(x_0) + \\frac{h^3}{3}f''(\\xi)$"},{q:"Formula: Open Newton-Cotes formula for $n=1$ over interval $[x_{-1}, x_2]$ using points $x_0, x_1$",a:"$\\frac{3h}{2}(f(x_0) + f(x_1)) + \\frac{3h^3}{4}f''(\\xi)$"},{q:"Formula: Open Newton-Cotes formula for $n=2$ over interval $[x_{-1}, x_3]$ using points $x_0, x_1, x_2$",a:"$\\frac{4h}{3}(2f(x_0) - f(x_1) + 2f(x_2)) + \\frac{14h^5}{45}f^{(4)}(\\xi)$"},{q:"Formula: Open Newton-Cotes formula for $n=3$ over interval $[x_{-1}, x_4]$ using points $x_0, x_1, x_2, x_3$",a:"$\\frac{5h}{24}(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)) + \\frac{95h^5}{144}f^{(4)}(\\xi)$"},{q:"What two conditions must a quadrature formula meet to be considered stable according to Theorem 7.9?",a:"The formula must be exact for constant functions and all coefficients $c_i$ must be positive."},{q:"If function value errors are bounded by $|y_i - f(x_i)| \\le \\varepsilon$, what is the stability bound for a stable quadrature formula?",a:"$\\varepsilon(b - a)$"},{q:"What is the sum of the weights $\\sum c_i$ in any quadrature formula that is exact for constant functions over $[a, b]$?",a:"$b - a$"},{q:"Why are most standard quadrature formulas (like Trapezoidal or Simpson's) considered numerically stable?",a:"They utilize positive weights and are exact for constant functions."},{q:"The error of the composite Simpson's rule is proportional to which power of the step size $h$?",a:"$h^4$"},{q:"Which Newton-Cotes formula is characterized by weights following the pattern $1, 4, 1$?",a:"Simpson's Rule"},{q:"The error of the composite Trapezoidal rule is proportional to which power of the step size $h$?",a:"$h^2$"},{q:"How does the error of the composite Simpson's rule respond if the step size $h$ is reduced to $1/2$?",a:"The error is reduced to approximately $1/16$ of its original value."}],"7_4":[{q:"What is the general form of an $n$-point quadrature formula for the integral $\\int_a^b f(x)\\,dx$?",a:"$\\sum_{i=1}^{n} c_i f(x_i)$"},{q:"A quadrature formula is exact for polynomials of degree at most $m$ if and only if it is exact for all _____ $x^i$ where $i = 0, 1, \\ldots, m$.",a:"monomials"},{q:"How many parameters ($c_i$ and $x_i$) are contained in a general $n$-point quadrature formula?",a:"$2n$"},{q:"What is the maximum degree of a polynomial for which an $n$-point Gaussian quadrature formula can be exact?",a:"$2n - 1$"},{q:"To find the parameters of an $n$-point Gaussian quadrature formula, one must solve a system of $2n$ _____ equations.",a:"nonlinear"},{q:"In a 2-point Gaussian quadrature formula on the interval $[-1, 1]$, what are the values of the weights $c_1$ and $c_2$?",a:"$c_1 = 1, c_2 = 1$"},{q:"What are the nodes $x_1$ and $x_2$ for a 2-point Gaussian quadrature formula on $[-1, 1]$?",a:"$x_1 = -\\frac{\\sqrt{3}}{3}, x_2 = \\frac{\\sqrt{3}}{3}$"},{q:"What is the 2-point Gaussian quadrature formula for the interval $[-1, 1]$?",a:"$\\int_{-1}^{1} f(x)\\,dx \\approx f(-\\frac{\\sqrt{3}}{3}) + f(\\frac{\\sqrt{3}}{3})$"},{q:"Under what condition are two functions $f$ and $g$ considered orthogonal on the interval $[a, b]$?",a:"$\\int_a^b f(x)g(x)\\,dx = 0$"},{q:"The sequence of polynomials $(P_i)$ that are pairwise orthogonal on $[-1, 1]$ where $P_i$ has degree $i$ are called _____ polynomials.",a:"Legendre"},{q:"What is the first Legendre polynomial, $P_0(x)$?",a:"$1$"},{q:"What is the second Legendre polynomial, $P_1(x)$?",a:"$x$"},{q:"What method is used to construct the sequence of orthogonal Legendre polynomials?",a:"Gram-Schmidt orthogonalization"},{q:"In the Gram-Schmidt process for Legendre polynomials, $P_{i+1}(x)$ is sought in the form $x^{i+1} + \\sum_{j=0}^{i} a_{i+1,j} P_j(x)$. How is $a_{i+1,j}$ calculated?",a:"$a_{i+1,j} = -\\frac{\\int_{-1}^{1} x^{i+1} P_j(x)\\,dx}{\\int_{-1}^{1} P_j^2(x)\\,dx}$"},{q:"What is the specific formula for the Legendre polynomial $P_2(x)$?",a:"$x^2 - \\frac{1}{3}$"},{q:"What is the specific formula for the Legendre polynomial $P_3(x)$?",a:"$x^3 - \\frac{3}{5}x$"},{q:"What is the specific formula for the Legendre polynomial $P_4(x)$?",a:"$x^4 - \\frac{6}{7}x^2 + \\frac{3}{35}$"},{q:"Which recurrence relation do Legendre polynomials satisfy?",a:"$P_{n+1}(x) = xP_n(x) - \\frac{n^2}{4n^2 - 1}P_{n-1}(x)$"},{q:"Property of Legendre polynomials: $P_i$ is orthogonal to any polynomial of degree at most _____.",a:"$i - 1$"},{q:"How does the parity of the Legendre polynomial $P_i$ relate to the index $i$?",a:"It is even if $i$ is even and odd if $i$ is odd."},{q:"How many distinct real roots does the $n$th Legendre polynomial $P_n$ have in the interval $(-1, 1)$?",a:"$n$"},{q:"What is the geometric distribution of the roots of a Legendre polynomial relative to the origin?",a:"The roots are symmetric to the origin."},{q:"The nodes $x_1, \\dots, x_n$ of the $n$-point Gaussian quadrature formula are the roots of which polynomial?",a:"The $n$th-order Legendre polynomial $P_n$"},{q:"What is the required differentiability class for a function $f$ to apply the Gaussian quadrature truncation error formula involving $f^{(2n)}$?",a:"$C^{2n}[a, b]$"},{q:"What is the truncation error formula for the $n$-point Gaussian quadrature on $[-1, 1]$?",a:"$\\frac{f^{(2n)}(\\xi)}{(2n)!}\\int_{-1}^{1} P_n^2(x)\\,dx$"},{q:"What is the approximate form of the Gaussian quadrature error term if $f^{(2n)}$ is bounded?",a:"$\\frac{\\pi f^{(2n)}(\\xi)}{4^n (2n)!}$"},{q:"As $n \\to \\infty$, the error of Gaussian quadrature tends to zero at a(n) _____ speed.",a:"exponential"},{q:"How does the convergence speed of Gaussian quadrature compare to Newton-Cotes formulas as $n \\to \\infty$?",a:"Gaussian is exponential; Newton-Cotes is only polynomial."},{q:"For $n=3$, what is the root $x_i$ located at the origin?",a:"$0.0000000000$"},{q:"For $n=3$, what is the weight $c_i$ corresponding to the node $x=0$?",a:"$0.8888888889$ (or $\\frac{8}{9}$)"},{q:"In the 3-point Gaussian formula, what is the value of the weights for the nodes $\\pm 0.7745966692$?",a:"$0.5555555556$ (or $\\frac{5}{9}$)"},{q:"What substitution is used to transform the integral $\\int_a^b f(x)\\,dx$ to the interval $[-1, 1]$?",a:"$x = \\frac{(b - a)t + a + b}{2}$"},{q:"When transforming $\\int_a^b f(x)\\,dx$ to the interval $[-1, 1]$, what is the differential $dx$ in terms of $dt$?",a:"$dx = \\frac{b - a}{2}\\,dt$"},{q:"Formula: Interval Transformation",a:"$\\int_a^b f(x)\\,dx = \\frac{b - a}{2}\\int_{-1}^{1} f(\\frac{(b - a)t + a + b}{2})\\,dt$"},{q:"Example: If using 2-point Gauss to approximate $\\int_0^1 x^2 e^x\\,dx$, what is the scaling factor applied to the integral on $[-1, 1]$?",a:"$\\frac{1}{2}$"},{q:"The 2-point Gaussian approximation of $\\int_{-1}^1 e^x\\,dx$ is approximately $2.3426961$. What is the exact value?",a:"$e - \\frac{1}{e} \\approx 2.350424$"},{q:"True or False: Gaussian quadrature weights $c_i$ are always positive.",a:"True"},{q:"If a sequence of polynomials $(p_i)$ is pairwise orthogonal on $[-1, 1]$, what is the relationship between $p_i$ and the Legendre polynomial $P_i$?",a:"$p_i(x) = c_i P_i(x)$ for some constant $c_i \\ne 0$"},{q:"The formula $c_i = \\int_{-1}^{1} \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}\\,dx$ defines the _____ of the Gaussian quadrature.",a:"weights (or coefficients)"},{q:"In the 2-point case on $[-1, 1]$, the equation $c_1 x_1 + c_2 x_2 = 0$ follows from integrating which monomial?",a:"$x$"},{q:"In the 2-point case on $[-1, 1]$, the equation $c_1 + c_2 = 2$ follows from integrating which function?",a:"$1$ (or $x^0$)"},{q:"Why can case (i) $x_1 = x_2$ not happen in the 2-point Gaussian derivation?",a:"It would imply $c_1 + c_2 = 0$, contradicting the integral of 1 which equals 2."},{q:"Concept: $n$-point Gaussian Quadrature",a:"Definition: A quadrature formula where nodes and weights are chosen to integrate polynomials up to degree $2n-1$ exactly."},{q:"Which theorem states that nodes $x_i$ are the roots of $P_n$ and provides the formula for $c_i$?",a:"Theorem 7.13"},{q:"For $n=4$, how many nodes are positive and how many are negative?",a:"2 positive and 2 negative (due to symmetry)."},{q:"What is the value of $P_2(x)$ at $x=0$?",a:"$-\\frac{1}{3}$"},{q:"What is the result of the 2-point Gaussian approximation for $\\int_0^1 x^2 e^x\\,dx$?",a:"$0.7119418$"},{q:"What is the error in the 2-point Gaussian approximation for $\\int_0^1 x^2 e^x\\,dx$?",a:"$0.0063400$"},{q:"True or False: The nodes $x_i$ in Gaussian quadrature must be inside the interval of integration.",a:"True (Theorem 7.12 states roots are in $(-1, 1)$)."},{q:"In the recursive formula $P_{n+1}(x) = xP_n(x) - \\gamma_n P_{n-1}(x)$, what is the coefficient $\\gamma_n$?",a:"$\\frac{n^2}{4n^2 - 1}$"},{q:"Legendre polynomials are constructed to be _____ on the interval $[-1, 1]$.",a:"orthogonal"},{q:"The error of the 2-point Gaussian formula for $e^x$ on $[-1, 1]$ is $0.0077062$. This is considered _____ given the formula's simplicity.",a:"very small"},{q:"If $i=3$ (odd), what is the value of $P_3(0)$?",a:"$0$ (because it is an odd function)."},{q:"How does the degree of $P_i$ relate to the index $i$?",a:"The degree of $P_i$ is exactly $i$."},{q:"The formula $\\int_{-1}^1 p(x)\\,dx = \\sum c_i p(x_i)$ is exact for $p$ of degree 5. What is the minimum $n$ required?",a:"$n = 3$ (since $2(3)-1 = 5$)"},{q:"What is the weight $c_i$ for $n=2$ in the Gaussian quadrature on $[-1, 1]$?",a:"$1.0000000000$"},{q:"The 5-point Gaussian quadrature uses nodes derived from which Legendre polynomial?",a:"$P_5(x)$"},{q:"In the system of equations for $n=2$, the equation $\\frac{2}{3} = c_1 x_1^2 + c_2 x_2^2$ comes from the integral of _____.",a:"$x^2$"},{q:"The $n$-point Gaussian quadrature is derived from a system of _____ equations (count).",a:"$2n$"},{q:"For an arbitrary interval $[a, b]$, the transformed function's argument in the integral is _____.",a:"$\\frac{(b - a)t + a + b}{2}$"}]},E={glossary:{en:"Glossary",hu:"Fogalomtár"},flashcards:{en:"Flashcards",hu:"Tanulókártyák"},shuffle:{en:"🔀 Shuffle",hu:"🔀 Keverés"},reset:{en:"Reset order",hu:"Eredeti sorrend"},question:{en:"Question",hu:"Kérdés"},answer:{en:"Answer",hu:"Válasz"},prev:{en:"‹ Prev",hu:"‹ Előző"},next:{en:"Next ›",hu:"Következő ›"},showAnswer:{en:"Show answer",hu:"Válasz mutatása"},showQuestion:{en:"Show question",hu:"Kérdés mutatása"}};function Ue(){const{i18n:a}=A();return a.language==="hu"?"hu":"en"}const ee="rounded border border-slate-300 px-3 py-1.5 text-sm hover:border-brand-500 dark:border-slate-700";function In({slug:a}){const e=Ue(),t=En[a]??[],[n,i]=y.useState(null);return t.length?h.jsxs("section",{className:"card mt-6",children:[h.jsx("h3",{className:"mb-3 font-semibold text-brand-700 dark:text-brand-200",children:E.glossary[e]}),h.jsx("div",{className:"grid gap-2",children:t.map((r,o)=>{const s=n===o;return h.jsxs("button",{onClick:()=>i(s?null:o),className:"rounded-lg border border-slate-200 px-4 py-3 text-left hover:border-brand-500 dark:border-slate-700",children:[h.jsxs("div",{className:"flex items-center justify-between gap-3",children:[h.jsx("span",{className:"font-semibold text-slate-800 dark:text-slate-100",children:h.jsx(se,{markdown:r.term[e]})}),h.jsx("span",{className:"text-slate-400",children:s?"−":"+"})]}),s&&h.jsx("div",{className:"mt-2 text-sm text-slate-600 dark:text-slate-300",children:h.jsx(se,{markdown:r.def[e]})})]},o)})})]}):null}const pe=a=>Array.from({length:a},(e,t)=>t);function Mn(a){const e=pe(a);for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function Dn({slug:a}){const e=Ue(),t=Fn[a]??[],[n,i]=y.useState(()=>pe(t.length)),[r,o]=y.useState(0),[s,d]=y.useState(!1),l=y.useMemo(()=>t[n[r]],[t,n,r]);if(!t.length)return null;const c=u=>{d(!1),o(f=>(f+u+t.length)%t.length)};return h.jsxs("section",{className:"card mt-6",children:[h.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[h.jsx("h3",{className:"font-semibold text-brand-700 dark:text-brand-200",children:E.flashcards[e]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("span",{className:"rounded bg-slate-100 px-2 py-1 font-mono text-sm dark:bg-slate-800",children:[r+1," / ",t.length]}),h.jsx("button",{className:ee,onClick:()=>{i(Mn(t.length)),o(0),d(!1)},children:E.shuffle[e]}),h.jsx("button",{className:ee,onClick:()=>{i(pe(t.length)),o(0),d(!1)},children:E.reset[e]})]})]}),h.jsxs("button",{onClick:()=>d(u=>!u),className:"min-h-[150px] w-full rounded-xl border border-slate-300 bg-slate-50 p-5 text-left dark:border-slate-700 dark:bg-slate-800",children:[h.jsx("div",{className:`mb-2 text-xs font-bold uppercase tracking-widest ${s?"text-emerald-600 dark:text-emerald-400":"text-brand-600 dark:text-brand-300"}`,children:s?E.answer[e]:E.question[e]}),h.jsx(se,{markdown:s?l.a:l.q})]}),h.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[h.jsx("button",{className:ee,onClick:()=>c(-1),children:E.prev[e]}),h.jsx("button",{className:"flex-1 rounded bg-brand-600 px-3 py-1.5 text-sm font-medium text-white",onClick:()=>d(u=>!u),children:s?E.showQuestion[e]:E.showAnswer[e]}),h.jsx("button",{className:ee,onClick:()=>c(1),children:E.next[e]})]})]})}const Wn=`#include <iostream>
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
`,Gn=`program composite_demo
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
`,Hn=`package main

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
`,Vn=`function composite(f, a, b, n = 10)
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
`,Un=`// Composite trapezoidal and Simpson rules on [a, b] with n subintervals.
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
`,Bn=`function [T, S] = composite(f, a, b, n)
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
`,Qn=`import math


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
`,Jn=`# Composite trapezoidal and Simpson rules on [a, b] with n subintervals.
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
`,Yn=`// Composite trapezoidal and Simpson rules on [a, b] with n subintervals.
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
`,Zn=`composite[f_, a_, b_, nIn_ : 10] := Module[{n = nIn, h, T, S},
   If[OddQ[n], n++];                          (* Simpson needs even n *)
   h = (b - a)/n;
   T = h (f[a]/2 + f[b]/2 + Sum[f[a + i h], {i, 1, n - 1}]);
   S = h/3 (f[a] + f[b] + Sum[(If[OddQ[i], 4, 2]) f[a + i h], {i, 1, n - 1}]);
   {T, S}];
With[{r = composite[Exp, 0., 1., 10]},
  Print["trapezoid = ", r[[1]]];
  Print["Simpson   = ", r[[2]]]]
(* -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818 *)
`,Xn=`#include <iostream>
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
`,ta=`package main

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
`,na=`# Central-difference first derivative, error O(h^2).
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
`,ca=`function gauss_quad(f, a, b, n = 2)
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
`,ua=`// 2- or 3-point Gauss-Legendre quadrature on [a, b].
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
`,ga=`# 2- or 3-point Gauss-Legendre quadrature on [a, b].
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
`,xa=`// 2- or 3-point Gauss-Legendre quadrature on [a, b].
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
`,$a=`gaussQuad[f_, a_, b_, n_ : 2] := Module[{t, w, hm, mid},
   {t, w} = If[n == 3,
     {{-Sqrt[3/5], 0, Sqrt[3/5]}, {5/9, 8/9, 5/9}},
     {{-1/Sqrt[3], 1/Sqrt[3]}, {1, 1}}];
   hm = (b - a)/2;                       (* map [-1,1] -> [a,b] *)
   mid = (a + b)/2;
   hm Total[w (f /@ (mid + hm t))]];
Print["int_0^1 e^x dx = ", gaussQuad[Exp, 0., 1., 2], " (2-pt)"]
Print["int_0^1 e^x dx = ", gaussQuad[Exp, 0., 1., 3], " (3-pt)"]
(* -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818 *)
`,ba=`#include <iostream>
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
`,_a=`program richardson_demo
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
`,ya=`package main

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
`,va=`# Central-difference first derivative D(h), error O(h^2).
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
`,ka=`// Central-difference first derivative D(h), error O(h^2).
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
`,wa=`function d = central(f, x, h)
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
`,za=`import math


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
`,qa=`# Central-difference first derivative D(h), error O(h^2).
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
`,Sa=`// Central-difference first derivative D(h), error O(h^2).
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
`,Na=`(* Central-difference first derivative D(h), error O(h^2). *)
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
`,ja=`#include <iostream>
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
`,Oa=`function simpson(f, a, b, n = 100)
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
`,Ra=`function I = simpson(f, a, b, n)
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
`,Pa=`import numpy as np


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
`,Aa=`# Composite Simpson's rule (n forced even) on [a, b].
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
`,Ka=`// Composite Simpson's rule (n forced even).
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
`,Ea=`simpson[f_, a_, b_, nIn_ : 100] := Module[{n = nIn, h},
   If[OddQ[n], n++];
   h = (b - a)/n;
   h/3 (f[a] + f[b] + Sum[(If[OddQ[i], 4, 2]) f[a + i h], {i, 1, n - 1}])];
Print["int_0^1 e^x dx = ", simpson[Exp, 0., 1., 100]]
`,Fa=`#include <iostream>
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
`,Ia=`program trapezoid_demo
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
`,Ma=`package main

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
`,Qa=Object.assign({"./composite.cpp":Wn,"./composite.f90":Gn,"./composite.go":Hn,"./composite.jl":Vn,"./composite.js":Un,"./composite.m":Bn,"./composite.py":Qn,"./composite.r":Jn,"./composite.rs":Yn,"./composite.wl":Zn,"./differentiation.cpp":Xn,"./differentiation.f90":ea,"./differentiation.go":ta,"./differentiation.jl":na,"./differentiation.js":aa,"./differentiation.m":ra,"./differentiation.py":ia,"./differentiation.r":sa,"./differentiation.rs":oa,"./differentiation.wl":la,"./gauss-quad.cpp":ha,"./gauss-quad.f90":da,"./gauss-quad.go":fa,"./gauss-quad.jl":ca,"./gauss-quad.js":ua,"./gauss-quad.m":pa,"./gauss-quad.py":ma,"./gauss-quad.r":ga,"./gauss-quad.rs":xa,"./gauss-quad.wl":$a,"./richardson.cpp":ba,"./richardson.f90":_a,"./richardson.go":ya,"./richardson.jl":va,"./richardson.js":ka,"./richardson.m":wa,"./richardson.py":za,"./richardson.r":qa,"./richardson.rs":Sa,"./richardson.wl":Na,"./simpson.cpp":ja,"./simpson.f90":Ca,"./simpson.go":Ta,"./simpson.jl":Oa,"./simpson.js":La,"./simpson.m":Ra,"./simpson.py":Pa,"./simpson.r":Aa,"./simpson.rs":Ka,"./simpson.wl":Ea,"./trapezoid.cpp":Fa,"./trapezoid.f90":Ia,"./trapezoid.go":Ma,"./trapezoid.jl":Da,"./trapezoid.js":Wa,"./trapezoid.m":Ga,"./trapezoid.py":Ha,"./trapezoid.r":Va,"./trapezoid.rs":Ua,"./trapezoid.wl":Ba}),K=(a,e)=>Qa[`./${a}.${e}`],Ja={differentiation:{en:"Numerical differentiation (central differences)",hu:"Numerikus deriválás (centrális differenciák)"},richardson:{en:"Richardson extrapolation of the derivative",hu:"A derivált Richardson-extrapolációja"},trapezoid:{en:"Composite trapezoidal rule",hu:"Összetett trapéz-szabály"},simpson:{en:"Composite Simpson's rule",hu:"Összetett Simpson-szabály"},"gauss-quad":{en:"Gauss–Legendre quadrature (2- and 3-point)",hu:"Gauss–Legendre-kvadratúra (2- és 3-pontos)"}},Ya=a=>({id:a,caption:Ja[a],snippets:{matlab:K(a,"m"),python:K(a,"py"),cpp:K(a,"cpp"),julia:K(a,"jl"),rust:K(a,"rs"),fortran:K(a,"f90"),wolfram:K(a,"wl"),javascript:K(a,"js"),go:K(a,"go"),r:K(a,"r")}}),Za={"7_1":["differentiation"],"7_2":["richardson"],"7_3":["trapezoid","simpson"],"7_4":["gauss-quad"]};function Xa(a){return(Za[a]??[]).map(Ya)}const er={"7_1":[{id:"q-7_1-1",prompt:{en:"Which is NOT true for numerical differentiation?",hu:"Melyik NEM igaz a numerikus deriválásra?"},options:[{en:"The approximate derivative can be obtained by differentiating a Lagrange interpolating polynomial",hu:"A közelítő derivált egy Lagrange-interpolációs polinom deriválásával nyerhető"},{en:"It is sensitive with respect to rounding error",hu:"Érzékeny a kerekítési hibára"},{en:"It is a well-conditioned mathematical problem",hu:"Jól kondicionált matematikai feladat"},{en:"The approximate derivative can be obtained with the help of the Taylor formula",hu:"A közelítő derivált a Taylor-formula segítségével nyerhető"}],answer:2,explanation:{en:"Numerical differentiation is ill-conditioned: small input errors are strongly amplified.",hu:"A numerikus deriválás rosszul kondicionált: a kis bemeneti hibák erősen felnagyítódnak."}},{id:"q-7_1-2",prompt:{en:"What is the main cause of instability in numerical differentiation for small h?",hu:"Mi a numerikus deriválás instabilitásának fő oka kis h-ra?"},options:[{en:"Truncation error increases",hu:"A csonkítási hiba nő"},{en:"Step size is too large",hu:"A lépésköz túl nagy"},{en:"Rounding error increases",hu:"A kerekítési hiba nő"},{en:"Function value becomes zero",hu:"A függvényérték nullává válik"}],answer:2,explanation:{en:"Dividing nearly-equal values by a tiny h magnifies rounding error.",hu:"Közel egyenlő értékek parányi h-val való osztása felnagyítja a kerekítési hibát."}},{id:"q-7_1-3",prompt:{en:"Order of accuracy of f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h:",hu:"Az f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h pontossági rendje:"},options:[{en:"First",hu:"Elsőrendű"},{en:"Second",hu:"Másodrendű"},{en:"Fourth",hu:"Negyedrendű"},{en:"Zero",hu:"Nulladrendű"}],answer:0,explanation:{en:"The forward difference has first-order accuracy, O(h).",hu:"Az előrehaladó differencia elsőrendű pontosságú, O(h)."}},{id:"q-7_1-4",prompt:{en:"Error term of the forward difference f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h:",hu:"Az előrehaladó differencia f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h hibatagja:"},options:[{en:"(h/2) f″(x₀)",hu:"(h/2) f″(x₀)"},{en:"(h²/2) f″(x₀)",hu:"(h²/2) f″(x₀)"},{en:"−h f″(x₀)",hu:"−h f″(x₀)"},{en:"−(h/2) f″(ξ)",hu:"−(h/2) f″(ξ)"}],answer:3,explanation:{en:"Taylor expansion gives the leading error −(h/2) f″(ξ).",hu:"A Taylor-sorfejtés a −(h/2) f″(ξ) vezető hibát adja."}},{id:"q-7_1-5",prompt:{en:"Which component contributes to the total error in the forward difference?",hu:"Melyik összetevő járul hozzá az előrehaladó differencia teljes hibájához?"},options:[{en:"Only Taylor expansion error",hu:"Csak a Taylor-sorfejtés hibája"},{en:"Only truncation error",hu:"Csak a csonkítási hiba"},{en:"Truncation and rounding errors",hu:"A csonkítási és a kerekítési hiba"},{en:"Only rounding error",hu:"Csak a kerekítési hiba"}],answer:2,explanation:{en:"Total error combines O(h) truncation and O(ε/h) rounding error.",hu:"A teljes hiba az O(h) csonkítási és az O(ε/h) kerekítési hibát egyesíti."}}],"7_3":[{id:"q-7_3-1",prompt:{en:"In Newton–Cotes formulas, the weights are determined by:",hu:"A Newton–Cotes-formulákban a súlyokat a következő határozza meg:"},options:[{en:"Integrating Lagrange basis polynomials",hu:"A Lagrange-bázispolinomok integrálása"},{en:"Taylor expansions",hu:"Taylor-sorfejtések"},{en:"Solving differential equations",hu:"Differenciálegyenletek megoldása"},{en:"Rounding approximations",hu:"Kerekítési közelítések"}],answer:0,explanation:{en:"The weights come from integrating the Lagrange basis over the interval.",hu:"A súlyok a Lagrange-bázis intervallumon vett integrálásából származnak."}},{id:"q-7_3-2",prompt:{en:"Which Newton–Cotes formula uses all mesh points inside the open interval?",hu:"Melyik Newton–Cotes-formula használja az összes csomópontot a nyílt intervallum belsejében?"},options:[{en:"Open",hu:"Nyílt"},{en:"Closed",hu:"Zárt"},{en:"Exact",hu:"Pontos"},{en:"Composite",hu:"Összetett"}],answer:0,explanation:{en:"Open Newton–Cotes formulas exclude the endpoints, using only interior points.",hu:"A nyílt Newton–Cotes-formulák kihagyják a végpontokat, csak belső pontokat használnak."}},{id:"q-7_3-3",prompt:{en:"What is the weight for the middle point in Simpson’s rule?",hu:"Mekkora a középső pont súlya a Simpson-formulában?"},options:[{en:"2",hu:"2"},{en:"1",hu:"1"},{en:"3",hu:"3"},{en:"4",hu:"4"}],answer:3,explanation:{en:"Simpson’s rule has the weight pattern 1, 4, 1, so the middle weight is 4.",hu:"A Simpson-formula súlymintája 1, 4, 1, így a középső súly 4."}},{id:"q-7_3-4",prompt:{en:"What does 'composite' in the composite trapezoidal rule refer to?",hu:"Mire utal az „összetett” az összetett trapézformulában?"},options:[{en:"Computing indefinite integrals",hu:"Határozatlan integrálok számítására"},{en:"Combining differentiation and integration",hu:"A deriválás és integrálás kombinálására"},{en:"Using second derivatives in the estimate",hu:"Második deriváltak használatára a becslésben"},{en:"Using multiple trapezoids over subintervals",hu:"Több trapéz használatára a részintervallumokon"}],answer:3,explanation:{en:"A composite rule sums the basic rule over many subintervals.",hu:"Egy összetett formula az alapformulát összegzi sok részintervallumon."}},{id:"q-7_3-5",prompt:{en:"Which Simpson-based rule uses three subintervals (four points)?",hu:"Melyik Simpson-alapú formula használ három részintervallumot (négy pontot)?"},options:[{en:"Trapezoidal rule",hu:"Trapézformula"},{en:"Simpson’s 3/8 rule",hu:"Simpson 3/8-os formulája"},{en:"Composite Simpson's rule",hu:"Összetett Simpson-formula"},{en:"Midpoint rule",hu:"Középponti formula"}],answer:1,explanation:{en:"Simpson’s 3/8 rule integrates over three subintervals (four nodes).",hu:"A Simpson 3/8-os formula három részintervallumon (négy csomóponton) integrál."}}],"7_4":[{id:"q-7_4-1",prompt:{en:"What kind of error decay does Gaussian quadrature exhibit for smooth functions?",hu:"Milyen hibacsökkenést mutat a Gauss-kvadratúra sima függvényekre?"},options:[{en:"Polynomial decay",hu:"Polinomiális csökkenés"},{en:"Linear decay",hu:"Lineáris csökkenés"},{en:"No decay",hu:"Nincs csökkenés"},{en:"Exponential decay",hu:"Exponenciális csökkenés"}],answer:3,explanation:{en:"For analytic/smooth integrands, Gaussian quadrature converges exponentially.",hu:"Analitikus/sima integrandusokra a Gauss-kvadratúra exponenciálisan konvergál."}},{id:"q-7_4-2",prompt:{en:"Which polynomials define the orthogonality in standard Gaussian quadrature?",hu:"Mely polinomok definiálják az ortogonalitást a standard Gauss-kvadratúrában?"},options:[{en:"Chebyshev polynomials",hu:"Csebisev-polinomok"},{en:"Hermite polynomials",hu:"Hermite-polinomok"},{en:"Legendre polynomials",hu:"Legendre-polinomok"},{en:"Laguerre polynomials",hu:"Laguerre-polinomok"}],answer:2,explanation:{en:"Standard Gauss–Legendre quadrature uses the Legendre polynomials (weight 1).",hu:"A standard Gauss–Legendre-kvadratúra a Legendre-polinomokat használja (1 súllyal)."}},{id:"q-7_4-3",prompt:{en:"Maximum polynomial degree for which an n-point Gaussian quadrature is exact:",hu:"A legnagyobb polinomfok, amelyre egy n-pontos Gauss-kvadratúra pontos:"},options:[{en:"n − 1",hu:"n − 1"},{en:"n",hu:"n"},{en:"2n",hu:"2n"},{en:"2n − 1",hu:"2n − 1"}],answer:3,explanation:{en:"n-point Gaussian quadrature is exact for polynomials up to degree 2n − 1.",hu:"Az n-pontos Gauss-kvadratúra pontos a 2n − 1 fokig terjedő polinomokra."}},{id:"q-7_4-4",prompt:{en:"The 2-point Gaussian quadrature approximation of ∫₋₁¹ f(x) dx is:",hu:"A ∫₋₁¹ f(x) dx 2-pontos Gauss-kvadratúrás közelítése:"},options:[{en:"f(−√3/3) + f(√3/3)",hu:"f(−√3/3) + f(√3/3)"},{en:"f(−1) + f(1)",hu:"f(−1) + f(1)"},{en:"½[f(−√2/2) + f(√2/2)]",hu:"½[f(−√2/2) + f(√2/2)]"},{en:"f(0)",hu:"f(0)"}],answer:0,explanation:{en:"Nodes ±1/√3 = ±√3/3 with unit weights give the 2-point Gauss rule.",hu:"A ±1/√3 = ±√3/3 csomópontok egységnyi súlyokkal adják a 2-pontos Gauss-formulát."}},{id:"q-7_4-5",prompt:{en:"Transformation to apply Gaussian quadrature on [a, b]:",hu:"A Gauss-kvadratúra [a, b]-n való alkalmazásához szükséges transzformáció:"},options:[{en:"x = (a + b)/2 + t",hu:"x = (a + b)/2 + t"},{en:"x = (b − a)/2 · t + (a + b)/2",hu:"x = (b − a)/2 · t + (a + b)/2"},{en:"x = (b − a)/(t + 1)",hu:"x = (b − a)/(t + 1)"},{en:"x = t · (b − a)",hu:"x = t · (b − a)"}],answer:1,explanation:{en:"This affine map sends [−1, 1] onto [a, b].",hu:"Ez az affin leképezés a [−1, 1]-et [a, b]-re viszi."}}]};function Le(a){return er[a]??[]}function tr({slug:a}={}){const e=nt(),t=a??e.slug??"",n=a!=null,{t:i,i18n:r}=A(),o=r.language==="hu"?"hu":"en",[s,d]=y.useState(null),[l,c]=y.useState("loading");return y.useEffect(()=>{let u=!0;return c("loading"),Pn(t,o).then(f=>{u&&(d(f),c("ok"))}).catch(()=>u&&c("error")),()=>{u=!1}},[t,o]),h.jsxs("article",{children:[!n&&h.jsxs(Ee,{to:"/numerical-calculus/lessons",className:"text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300",children:["← ",i("lessons.back")]}),l==="loading"&&h.jsx("p",{className:"mt-6 text-slate-500",children:i("lessons.loading")}),l==="error"&&h.jsx("p",{className:"mt-6 text-rose-600",children:i("lessons.error")}),l==="ok"&&s&&h.jsx(J.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},className:"card mt-4",children:h.jsx(se,{markdown:s.markdown})},s.slug+o),l==="ok"&&s&&Xa(s.slug).map(u=>h.jsx(mt,{snippets:u.snippets,caption:u.caption},u.id)),l==="ok"&&s&&Le(s.slug).length>0&&h.jsx(gt,{questions:Le(s.slug)}),l==="ok"&&s&&h.jsxs(h.Fragment,{children:[h.jsx(In,{slug:s.slug}),h.jsx(Dn,{slug:s.slug})]})]})}const nr=(a,e,t)=>(a(e+t)-a(e))/t,ar=(a,e,t)=>(a(e)-a(e-t))/t,rr=(a,e,t)=>(a(e+t)-a(e-t))/(2*t),ir=(a,e,t)=>(a(e-t)-2*a(e)+a(e+t))/(t*t),Be=(a,e,t)=>(a(e-2*t)-8*a(e-t)+8*a(e+t)-a(e+2*t))/(12*t),Re={forward:{id:"forward",order:1,apply:nr},backward:{id:"backward",order:1,apply:ar},central:{id:"central",order:1,apply:rr},"five-point":{id:"five-point",order:1,apply:Be},second:{id:"second",order:2,apply:ir}};function sr(a,e,t,n){const i=(t-e)/n;let r=.5*(a(e)+a(t));for(let o=1;o<n;o++)r+=a(e+o*i);return r*i}function Qe(a,e,t,n){const i=n%2===0?n:n+1,r=(t-e)/i;let o=a(e)+a(t);for(let s=1;s<i;s++)o+=(s%2===0?2:4)*a(e+s*r);return o*r/3}const Je={2:{nodes:[-.5773502692,.5773502692],weights:[1,1]},3:{nodes:[-.7745966692,0,.7745966692],weights:[.5555555556,.8888888889,.5555555556]},4:{nodes:[-.8611363116,-.3399810436,.3399810436,.8611363116],weights:[.3478548451,.6521451549,.6521451549,.3478548451]},5:{nodes:[-.9061798459,-.5384693101,0,.5384693101,.9061798459],weights:[.236926885,.4786286705,.5688888889,.4786286705,.236926885]}};function te(a,e,t,n){const{nodes:i,weights:r}=Je[n],o=(t-e)/2,s=(e+t)/2;let d=0;for(let l=0;l<i.length;l++)d+=r[l]*a(o*i[l]+s);return o*d}const Pe={trapezoid:{id:"trapezoid",usesN:!0,apply:sr},simpson:{id:"simpson",usesN:!0,apply:Qe},gauss2:{id:"gauss2",usesN:!1,apply:(a,e,t)=>te(a,e,t,2)},gauss3:{id:"gauss3",usesN:!1,apply:(a,e,t)=>te(a,e,t,3)},gauss4:{id:"gauss4",usesN:!1,apply:(a,e,t)=>te(a,e,t,4)},gauss5:{id:"gauss5",usesN:!1,apply:(a,e,t)=>te(a,e,t,5)}};function or(a,e,t,n=4e3){return Qe(a,e,t,n)}const Ye=(a,e)=>Math.abs(a-e),me=bt(_t,{}),Ae=[{id:"exp_x2x",latex:"e^{x^2+x}",expr:"exp(x^2 + x)"},{id:"exp_x",latex:"e^{x}",expr:"exp(x)"},{id:"x2_exp_x",latex:"x^2 e^{x}",expr:"x^2 * exp(x)"},{id:"sin",latex:"\\sin x",expr:"sin(x)"},{id:"poly",latex:"x^4 - 6x^2 + 3x",expr:"x^4 - 6*x^2 + 3*x"},{id:"exp_sin",latex:"e^{x}\\sin x",expr:"exp(x) * sin(x)"}];function ge(a){try{const e=me.parse(a),t=e.compile(),n=r=>{const o=t.evaluate({x:r});return typeof o=="number"?o:Number(o)},i=n(.123);return Number.isFinite(i),{f:n,ok:!0,node:e}}catch(e){return{f:()=>NaN,ok:!1,error:e instanceof Error?e.message:String(e)}}}function lr(a,e,t){try{let r=me.parse(a);for(let l=0;l<t;l++)r=me.derivative(r,"x");const s=r.compile().evaluate({x:e}),d=typeof s=="number"?s:Number(s);if(Number.isFinite(d))return d}catch{}const{f:n}=ge(a),i=1e-4;return t===1?Be(n,e,i):(n(e-i)-2*n(e)+n(e+i))/(i*i)}function Q({label:a,value:e,min:t,max:n,step:i,onChange:r,format:o}){return h.jsxs("label",{className:"block",children:[h.jsxs("div",{className:"mb-1 flex items-baseline justify-between",children:[h.jsx("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:a}),h.jsx("span",{className:"font-mono text-sm font-semibold text-brand-700 dark:text-brand-300",children:o?o(e):e})]}),h.jsx("input",{type:"range",min:t,max:n,step:i,value:e,onChange:s=>r(Number(s.target.value)),className:"h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600 dark:bg-slate-700"})]})}const R={top:12,right:12,bottom:24,left:36};function Ze({f:a,xMin:e,xMax:t,width:n=520,height:i=300,segments:r=[],areas:o=[],points:s=[]}){const{curve:d,x:l,y:c,yMin:u,yMax:f}=y.useMemo(()=>{const m=[],w=[];for(let b=0;b<=240;b++){const k=e+(t-e)*b/240;m.push(k),w.push(a(k))}const v=w.filter(b=>Number.isFinite(b));for(const b of o)for(const[,k]of b.points)v.push(k);for(const b of r)for(const[,k]of b.points)v.push(k);for(const b of s)v.push(b.y);let $=Math.min(...v,0),q=Math.max(...v,0);(!Number.isFinite($)||!Number.isFinite(q)||$===q)&&($=-1,q=1);const S=(q-$)*.1||1;$-=S,q+=S;const N=be().domain([e,t]).range([R.left,n-R.right]),j=be().domain([$,q]).range([i-R.bottom,R.top]);let T="",C=!1;for(let b=0;b<=240;b++){const k=w[b];if(!Number.isFinite(k)){C=!1;continue}const L=N(m[b]),I=j(k);T+=`${C?"L":"M"}${L.toFixed(2)},${I.toFixed(2)} `,C=!0}return{curve:T,x:N,y:j,yMin:$,yMax:q}},[a,e,t,n,i,o,r,s]),p=g=>g.map((m,w)=>`${w?"L":"M"}${l(m[0]).toFixed(2)},${c(m[1]).toFixed(2)}`).join(" "),x=u<0&&f>0?c(0):null,z=e<0&&t>0?l(0):null;return h.jsxs("svg",{viewBox:`0 0 ${n} ${i}`,className:"h-auto w-full text-slate-400 dark:text-slate-500",role:"img",children:[h.jsx("rect",{x:R.left,y:R.top,width:n-R.left-R.right,height:i-R.top-R.bottom,className:"fill-transparent stroke-slate-200 dark:stroke-slate-700"}),x!==null&&h.jsx("line",{x1:R.left,x2:n-R.right,y1:x,y2:x,stroke:"currentColor",strokeWidth:1}),z!==null&&h.jsx("line",{x1:z,x2:z,y1:R.top,y2:i-R.bottom,stroke:"currentColor",strokeWidth:1}),o.map((g,m)=>h.jsx("path",{d:`${p(g.points)} Z`,fill:g.color??"#06b6d4",fillOpacity:.22,stroke:g.color??"#06b6d4",strokeOpacity:.5,strokeWidth:1},`a${m}`)),h.jsx("path",{d,fill:"none",stroke:"#6366f1",strokeWidth:2.5,strokeLinejoin:"round"}),r.map((g,m)=>h.jsx("path",{d:p(g.points),fill:"none",stroke:g.color??"#f59e0b",strokeWidth:2,strokeDasharray:g.dashed?"5 4":void 0},`s${m}`)),s.map((g,m)=>h.jsx("circle",{cx:l(g.x),cy:c(g.y),r:4,fill:g.color??"#f59e0b",stroke:"#fff",strokeWidth:1.5},`p${m}`)),h.jsx("text",{x:R.left,y:i-6,className:"fill-slate-500 text-[10px]",children:e}),h.jsx("text",{x:n-R.right,y:i-6,textAnchor:"end",className:"fill-slate-500 text-[10px]",children:t})]})}function hr({tex:a,display:e=!1,className:t}){const n=y.useMemo(()=>{try{return yt.renderToString(a,{displayMode:e,throwOnError:!1})}catch{return a}},[a,e]);return h.jsx("span",{className:t,dangerouslySetInnerHTML:{__html:n}})}function Xe({expr:a,onChange:e,valid:t}){const{t:n}=A(),i=Ae.find(r=>r.expr===a);return h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:n("playground.function")}),h.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:Ae.map(r=>h.jsx("button",{type:"button",onClick:()=>e(r.expr),className:`chip border transition ${(i==null?void 0:i.id)===r.id?"border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200":"border-slate-200 bg-white text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"}`,children:h.jsx(hr,{tex:r.latex})},r.id))}),h.jsxs("label",{className:"mt-3 block",children:[h.jsx("span",{className:"text-xs uppercase tracking-wide text-slate-400",children:n("playground.custom")}),h.jsx("input",{type:"text",value:a,spellCheck:!1,onChange:r=>e(r.target.value),className:`mt-1 w-full rounded-xl border bg-white px-3 py-2 font-mono text-sm outline-none transition dark:bg-slate-800 ${t?"border-slate-200 focus:border-brand-400 dark:border-slate-700":"border-rose-400 focus:border-rose-500"}`})]}),t?h.jsx("p",{className:"mt-1 text-xs text-slate-400",children:n("playground.custom_hint")}):h.jsx("p",{className:"mt-1 text-xs text-rose-500",children:n("playground.invalid")})]})}const Ke=a=>Number.isFinite(a)?a.toPrecision(7):"—",dr=a=>Number.isFinite(a)?a.toExponential(4):"—";function et({approx:a,reference:e,error:t}){const{t:n}=A(),i=[{label:n("playground.approx"),value:Ke(a),accent:!0},{label:n("playground.reference"),value:Ke(e),accent:!1},{label:n("playground.error"),value:dr(t),accent:!1}];return h.jsx("dl",{className:"grid gap-2",children:i.map(r=>h.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-slate-100 px-4 py-2 dark:bg-slate-800/70",children:[h.jsx("dt",{className:"text-sm text-slate-500 dark:text-slate-400",children:r.label}),h.jsx("dd",{className:`font-mono text-sm font-semibold ${r.accent?"text-brand-700 dark:text-brand-300":"text-slate-800 dark:text-slate-100"}`,children:r.value})]},r.label))})}const fr=["forward","backward","central","five-point","second"];function cr(){const{t:a}=A(),[e,t]=y.useState("exp(x^2 + x)"),[n,i]=y.useState("central"),[r,o]=y.useState(0),[s,d]=y.useState(.1),l=y.useMemo(()=>ge(e),[e]),c=Re[n].order,{approx:u,reference:f,error:p,segments:x,points:z}=y.useMemo(()=>{if(!l.ok)return{approx:NaN,reference:NaN,error:NaN,segments:[],points:[]};const m=l.f,w=Re[n].apply(m,r,s),v=lr(e,r,c),$=Ye(w,v),q=[],S=[],N=m(r);if(S.push({x:r,y:N,color:"#ef4444"}),c===1){const j=Math.max(2*s,1),T=r-j,C=r+j;q.push({points:[[T,N+v*(T-r)],[C,N+v*(C-r)]],color:"#10b981",dashed:!0}),n==="central"||n==="five-point"?(S.push({x:r-s,y:m(r-s)},{x:r+s,y:m(r+s)}),q.push({points:[[r-s,m(r-s)],[r+s,m(r+s)]],color:"#f59e0b"})):n==="forward"?(S.push({x:r+s,y:m(r+s)}),q.push({points:[[r,N],[r+s,m(r+s)]],color:"#f59e0b"})):(S.push({x:r-s,y:m(r-s)}),q.push({points:[[r-s,m(r-s)],[r,N]],color:"#f59e0b"}))}else S.push({x:r-s,y:m(r-s)},{x:r+s,y:m(r+s)});return{approx:w,reference:v,error:$,segments:q,points:S}},[l,n,r,s,e,c]),g=Math.max(2.5*s,1.5);return h.jsxs("div",{className:"grid gap-5 lg:grid-cols-2",children:[h.jsxs("div",{className:"card space-y-4",children:[h.jsx(Xe,{expr:e,onChange:t,valid:l.ok}),h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:a("playground.method")}),h.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:fr.map(m=>h.jsx("button",{type:"button",onClick:()=>i(m),className:`chip border transition ${n===m?"border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200":"border-slate-200 bg-white text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"}`,children:a(`playground.methods.${m}`)},m))})]}),h.jsx(Q,{label:a("playground.x0"),value:r,min:-3,max:3,step:.1,onChange:o,format:m=>m.toFixed(2)}),h.jsx(Q,{label:a("playground.h"),value:s,min:.01,max:1,step:.01,onChange:d,format:m=>m.toFixed(2)}),h.jsx(et,{approx:u,reference:f,error:p})]}),h.jsxs("div",{className:"card",children:[h.jsx(Ze,{f:l.f,xMin:r-g,xMax:r+g,segments:x,points:z}),h.jsxs("div",{className:"mt-3 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400",children:[h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"inline-block h-1 w-4 rounded bg-brand-500"})," f(x)"]}),c===1&&h.jsxs(h.Fragment,{children:[h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"inline-block h-1 w-4 rounded bg-amber-500"})," ",a("playground.approx")]}),h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"inline-block h-1 w-4 rounded bg-emerald-500"})," ",a("playground.reference")]})]})]})]})]})}const ur=["trapezoid","simpson","gauss2","gauss3","gauss4","gauss5"];function pr(){const{t:a}=A(),[e,t]=y.useState("x^2 * exp(x)"),[n,i]=y.useState("simpson"),[r,o]=y.useState(0),[s,d]=y.useState(1),[l,c]=y.useState(4),u=y.useMemo(()=>ge(e),[e]),f=Pe[n].usesN,{approx:p,reference:x,error:z,areas:g,points:m}=y.useMemo(()=>{if(!u.ok||s<=r)return{approx:NaN,reference:NaN,error:NaN,areas:[],points:[]};const v=u.f,$=Pe[n].apply(v,r,s,l),q=or(v,r,s),S=Ye($,q),N=[],j=[];if(n==="trapezoid"){const T=(s-r)/l;for(let C=0;C<l;C++){const b=r+C*T,k=b+T;N.push({points:[[b,0],[b,v(b)],[k,v(k)],[k,0]]})}}else{const T=[[r,0]],C=80;for(let b=0;b<=C;b++){const k=r+(s-r)*b/C;T.push([k,v(k)])}if(T.push([s,0]),N.push({points:T}),n.startsWith("gauss")){const b=Number(n.slice(5)),k=(s-r)/2,L=(r+s)/2;for(const I of Je[b].nodes){const M=k*I+L;j.push({x:M,y:v(M),color:"#ef4444"})}}}return{approx:$,reference:q,error:S,areas:N,points:j}},[u,n,r,s,l]),w=(s-r)*.1||.2;return h.jsxs("div",{className:"grid gap-5 lg:grid-cols-2",children:[h.jsxs("div",{className:"card space-y-4",children:[h.jsx(Xe,{expr:e,onChange:t,valid:u.ok}),h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:a("playground.method")}),h.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:ur.map(v=>h.jsx("button",{type:"button",onClick:()=>i(v),className:`chip border transition ${n===v?"border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200":"border-slate-200 bg-white text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"}`,children:a(`playground.methods.${v}`)},v))})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsx(Q,{label:a("playground.a"),value:r,min:-3,max:3,step:.1,onChange:o,format:v=>v.toFixed(2)}),h.jsx(Q,{label:a("playground.b"),value:s,min:-3,max:4,step:.1,onChange:d,format:v=>v.toFixed(2)})]}),f&&h.jsx(Q,{label:a("playground.n"),value:l,min:2,max:20,step:n==="simpson"?2:1,onChange:c}),h.jsx(et,{approx:p,reference:x,error:z})]}),h.jsxs("div",{className:"card",children:[h.jsx(Ze,{f:u.f,xMin:r-w,xMax:s+w,areas:g,points:m}),h.jsxs("div",{className:"mt-3 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400",children:[h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"inline-block h-1 w-4 rounded bg-brand-500"})," f(x)"]}),h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"inline-block h-3 w-4 rounded bg-accent-500/30"})," ∫ region"]}),n.startsWith("gauss")&&h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"inline-block h-2 w-2 rounded-full bg-red-500"})," nodes"]})]})]})]})}function mr(){const{t:a}=A(),[e,t]=y.useState("diff");return h.jsxs("div",{children:[h.jsx("h1",{className:"text-3xl font-extrabold",children:a("playground.title")}),h.jsx("p",{className:"mt-1 text-slate-500 dark:text-slate-400",children:a("playground.lead")}),h.jsx("div",{className:"mt-5 inline-flex rounded-xl bg-slate-200 p-1 dark:bg-slate-800",children:["diff","int"].map(n=>h.jsx("button",{type:"button",onClick:()=>t(n),className:`rounded-lg px-4 py-2 text-sm font-semibold transition ${e===n?"bg-white text-brand-700 shadow dark:bg-slate-900 dark:text-brand-300":"text-slate-600 dark:text-slate-300"}`,children:a(n==="diff"?"playground.tab_diff":"playground.tab_int")},n))}),h.jsx("div",{className:"mt-5",children:e==="diff"?h.jsx(cr,{}):h.jsx(pr,{})})]})}function gr({correct:a,total:e,onRetry:t}){const{t:n}=A(),i=e?Math.round(a/e*100):0,r=i>=80?"🏆":i>=50?"👍":"📚";return h.jsxs(J.div,{initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},className:"card text-center",children:[h.jsx("div",{className:"text-6xl",children:r}),h.jsx("h2",{className:"mt-3 text-2xl font-extrabold",children:n("quiz.results_title")}),h.jsx("p",{className:"mt-2 text-lg text-slate-600 dark:text-slate-300",children:n("quiz.results_score",{correct:a,total:e})}),h.jsx("div",{className:"mx-auto mt-4 h-3 w-full max-w-sm overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700",children:h.jsx(J.div,{className:"h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500",initial:{width:0},animate:{width:`${i}%`},transition:{duration:.6}})}),h.jsxs("div",{className:"mt-6 flex flex-wrap justify-center gap-3",children:[h.jsx("button",{type:"button",onClick:t,className:"btn-primary",children:n("quiz.retry")}),h.jsx(Ee,{to:"/numerical-calculus/lessons",className:"btn-ghost",children:n("quiz.to_lessons")})]})]})}function xr(){var b;const{t:a,i18n:e}=A(),t=e.language==="hu"?"hu":"en",[n,i]=y.useState([]),[r,o]=y.useState(0),[s,d]=y.useState(""),[l,c]=y.useState(null),[u,f]=y.useState(0),[p,x]=y.useState(0),[z,g]=y.useState(!1),[m,w]=y.useState(!0);function v(k=n){o(0),d(""),c(null),f(0),x(0),g(!1)}if(y.useEffect(()=>{w(!0),An(t).then(k=>{i(k),v(k)}).finally(()=>w(!1))},[t]),m)return h.jsx("p",{className:"card text-slate-500",children:a("quiz.loading")});if(!n.length)return h.jsx("p",{className:"card text-slate-500",children:a("quiz.loading")});if(z)return h.jsx(gr,{correct:u,total:n.length,onRetry:()=>v()});const $=n[r],q=r===n.length-1,S=l!==null,N=s!==""&&!S;async function j(){if(s==="")return;const k=await Kn($.id,s,t);c(k),k.correct?(f(L=>L+1),x(L=>L+1)):x(0)}function T(){if(q){g(!0);return}o(k=>k+1),d(""),c(null)}const C=(k,L)=>S?k?"border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30":L?"border-rose-500 bg-rose-50 dark:bg-rose-900/30":"border-slate-200 bg-white opacity-60 dark:border-slate-700 dark:bg-slate-800":L?"border-brand-500 bg-brand-50 dark:bg-brand-900/40":"border-slate-200 bg-white hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800";return h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"flex items-center justify-between text-sm",children:[h.jsxs("span",{className:"font-semibold text-slate-500 dark:text-slate-400",children:[a("quiz.question")," ",r+1," ",a("quiz.of")," ",n.length]}),h.jsxs("span",{className:"flex gap-3",children:[h.jsxs("span",{className:"chip bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-200",children:[a("quiz.score"),": ",u]}),h.jsxs("span",{className:"chip bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200",children:["🔥 ",p]})]})]}),h.jsx("div",{className:"mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700",children:h.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all",style:{width:`${(r+(S?1:0))/n.length*100}%`}})}),h.jsxs("span",{className:"mt-4 inline-block chip bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",children:[a("quiz.topic")," ",$.topic]}),h.jsx($t,{mode:"wait",children:h.jsxs(J.div,{initial:{opacity:0,x:16},animate:{opacity:1,x:0},exit:{opacity:0,x:-16},children:[h.jsx("h2",{className:"mt-3 text-lg font-semibold",children:$.prompt}),h.jsxs("div",{className:"mt-4 space-y-2",children:[$.type==="mcq"&&((b=$.options)==null?void 0:b.map((k,L)=>h.jsxs("button",{type:"button",disabled:S,onClick:()=>d(L),className:`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${C((l==null?void 0:l.answer)===L,s===L)}`,children:[h.jsx("span",{className:"grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-200 text-xs font-bold dark:bg-slate-700",children:String.fromCharCode(65+L)}),k]},L))),$.type==="truefalse"&&[!0,!1].map(k=>h.jsx("button",{type:"button",disabled:S,onClick:()=>d(k),className:`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${C((l==null?void 0:l.answer)===k,s===k)}`,children:a(k?"quiz.true":"quiz.false")},String(k))),$.type==="numeric"&&h.jsx("input",{type:"number",step:"any",disabled:S,placeholder:a("quiz.numeric_placeholder"),value:s===""?"":String(s),onChange:k=>d(k.target.value===""?"":Number(k.target.value)),className:"w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono outline-none focus:border-brand-400 dark:border-slate-700 dark:bg-slate-800"})]}),S&&h.jsxs(J.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},className:`mt-4 rounded-xl p-4 ${l!=null&&l.correct?"bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200":"bg-rose-50 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200"}`,children:[h.jsx("p",{className:"font-bold",children:l!=null&&l.correct?a("quiz.correct"):a("quiz.incorrect")}),h.jsx("p",{className:"mt-1 text-sm",children:l==null?void 0:l.explanation})]})]},$.id)}),h.jsx("div",{className:"mt-5 flex justify-end gap-3",children:S?h.jsx("button",{type:"button",onClick:T,className:"btn-primary",children:a(q?"quiz.finish":"quiz.next")}):h.jsx("button",{type:"button",disabled:!N,onClick:j,className:"btn-primary disabled:opacity-50",children:a("quiz.check")})})]})}function $r(){const{t:a}=A();return h.jsxs("div",{children:[h.jsx("h1",{className:"text-3xl font-extrabold",children:a("quiz.title")}),h.jsx("p",{className:"mb-5 mt-1 text-slate-500 dark:text-slate-400",children:a("quiz.lead")}),h.jsx(xr,{})]})}const tt=He,br=[...tt.map(a=>({id:a.slug,no:a.id==="intro"?"7":a.id,title:a.title,blurb:{en:"",hu:""}})),{id:"playground",no:"7·pg",title:{en:"Playground",hu:"Játéktér"},blurb:{en:"",hu:""}},{id:"quiz",no:"7·qz",title:{en:"Quiz",hu:"Kvíz"},blurb:{en:"",hu:""}}];function Cr(){const a=at(),{t:e}=A(),{lang:t}=rt();y.useEffect(()=>{O.changeLanguage(t)},[t]),y.useEffect(()=>{let i=decodeURIComponent(a.hash.replace(/^#/,""));if(!i){const r=a.pathname.match(/\/lessons\/([^/]+)/);if(r)i=r[1];else{const o=a.pathname.split("/").filter(Boolean).pop()??"";["playground","quiz"].includes(o)&&(i=o)}}i&&requestAnimationFrame(()=>{var r;return(r=document.getElementById(i))==null?void 0:r.scrollIntoView()})},[a.pathname,a.hash]);const n={scrollMarginTop:"calc(var(--nav-h) + var(--scrolly-topbar-h, 44px) + 8px)"};return h.jsxs("div",{className:"flex min-h-screen flex-col",children:[h.jsx(xt,{sections:br}),h.jsxs("main",{className:"mx-auto w-full max-w-5xl flex-1 space-y-16 px-4 py-8",children:[tt.map(i=>h.jsx("section",{id:i.slug,style:n,children:h.jsx(tr,{slug:i.slug})},i.slug)),h.jsx("section",{id:"playground",style:n,children:h.jsx(mr,{})}),h.jsx("section",{id:"quiz",style:n,children:h.jsx($r,{})})]}),h.jsx("footer",{className:"border-t border-slate-200 py-6 text-center text-sm text-slate-400 dark:border-slate-800",children:e("app.footer")})]})}export{Cr as default};
