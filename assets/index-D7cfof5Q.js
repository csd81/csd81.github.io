import{r as k,j as f,f as tt,L as Re,e as nt,d as at}from"./index-EeI9LWfD.js";import{M as rt,r as it,b as st,a as ot}from"./index-Yb4tRmXv.js";import{a as lt,k as ft,S as ht}from"./CodeTabs-Gr9qjXLp.js";import{m as J,A as dt}from"./proxy-D7T07iWz.js";import{c as ct,a as $t}from"./create-CiioV7Xd.js";import{m as _e}from"./linear-Dm4wCrSs.js";import"./bitOr.transform-gyCwQloK.js";import"./fraction-DqatKmli.js";const xt=(a,e,t,n)=>{var r,o,s,h;const i=[t,{code:e,...n||{}}];if((o=(r=a==null?void 0:a.services)==null?void 0:r.logger)!=null&&o.forward)return a.services.logger.forward(i,"warn","react-i18next::",!0);D(i[0])&&(i[0]=`react-i18next:: ${i[0]}`),(h=(s=a==null?void 0:a.services)==null?void 0:s.logger)!=null&&h.warn?a.services.logger.warn(...i):console!=null&&console.warn&&console.warn(...i)},be={},he=(a,e,t,n)=>{D(t)&&be[t]||(D(t)&&(be[t]=new Date),xt(a,e,t,n))},Ke=(a,e)=>()=>{if(a.isInitialized)e();else{const t=()=>{setTimeout(()=>{a.off("initialized",t)},0),e()};a.on("initialized",t)}},de=(a,e,t)=>{a.loadNamespaces(e,Ke(a,t))},ke=(a,e,t,n)=>{if(D(t)&&(t=[t]),a.options.preload&&a.options.preload.indexOf(e)>-1)return de(a,t,n);t.forEach(i=>{a.options.ns.indexOf(i)<0&&a.options.ns.push(i)}),a.loadLanguages(e,Ke(a,n))},ut=(a,e,t={})=>!e.languages||!e.languages.length?(he(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(a,{lng:t.lng,precheck:(n,i)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!i(n.isLanguageChangingTo,a))return!1}}),D=a=>typeof a=="string",pt=a=>typeof a=="object"&&a!==null,mt=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,gt={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},_t=a=>gt[a],bt=a=>a.replace(mt,_t);let ce={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:bt};const kt=(a={})=>{ce={...ce,...a}},yt=()=>ce;let Ie;const vt=a=>{Ie=a},zt=()=>Ie,wt={type:"3rdParty",init(a){kt(a.options.react),vt(a)}},qt=k.createContext();class jt{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Nt=(a,e)=>{const t=k.useRef();return k.useEffect(()=>{t.current=a},[a,e]),t.current},Fe=(a,e,t,n)=>a.getFixedT(e,t,n),St=(a,e,t,n)=>k.useCallback(Fe(a,e,t,n),[a,e,t,n]),E=(a,e={})=>{var g,q,j,N;const{i18n:t}=e,{i18n:n,defaultNS:i}=k.useContext(qt)||{},r=t||n||zt();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new jt),!r){he(r,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const S=(T,_)=>D(_)?_:pt(_)&&D(_.defaultValue)?_.defaultValue:Array.isArray(T)?T[T.length-1]:T,L=[S,{},!1];return L.t=S,L.i18n={},L.ready=!1,L}(g=r.options.react)!=null&&g.wait&&he(r,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...yt(),...r.options.react,...e},{useSuspense:s,keyPrefix:h}=o;let l=i||((q=r.options)==null?void 0:q.defaultNS);l=D(l)?[l]:l||["translation"],(N=(j=r.reportNamespaces).addUsedNamespaces)==null||N.call(j,l);const c=(r.isInitialized||r.initializedStoreOnce)&&l.every(S=>ut(S,r,o)),$=St(r,e.lng||null,o.nsMode==="fallback"?l:l[0],h),d=()=>$,x=()=>Fe(r,e.lng||null,o.nsMode==="fallback"?l:l[0],h),[m,w]=k.useState(d);let p=l.join();e.lng&&(p=`${e.lng}${p}`);const u=Nt(p),z=k.useRef(!0);k.useEffect(()=>{const{bindI18n:S,bindI18nStore:L}=o;z.current=!0,!c&&!s&&(e.lng?ke(r,e.lng,l,()=>{z.current&&w(x)}):de(r,l,()=>{z.current&&w(x)})),c&&u&&u!==p&&z.current&&w(x);const T=()=>{z.current&&w(x)};return S&&(r==null||r.on(S,T)),L&&(r==null||r.store.on(L,T)),()=>{z.current=!1,r&&S&&(S==null||S.split(" ").forEach(_=>r.off(_,T))),L&&r&&L.split(" ").forEach(_=>r.store.off(_,T))}},[r,p]),k.useEffect(()=>{z.current&&c&&w(d)},[r,h,c]);const y=[m,r,c];if(y.t=m,y.i18n=r,y.ready=c,c||!c&&!s)return y;throw new Promise(S=>{e.lng?ke(r,e.lng,l,()=>S()):de(r,l,()=>S())})},b=a=>typeof a=="string",V=()=>{let a,e;const t=new Promise((n,i)=>{a=n,e=i});return t.resolve=a,t.reject=e,t},ye=a=>a==null?"":""+a,Tt=(a,e,t)=>{a.forEach(n=>{e[n]&&(t[n]=e[n])})},Lt=/###/g,ve=a=>a&&a.indexOf("###")>-1?a.replace(Lt,"."):a,ze=a=>!a||b(a),U=(a,e,t)=>{const n=b(e)?e.split("."):e;let i=0;for(;i<n.length-1;){if(ze(a))return{};const r=ve(n[i]);!a[r]&&t&&(a[r]=new t),Object.prototype.hasOwnProperty.call(a,r)?a=a[r]:a={},++i}return ze(a)?{}:{obj:a,k:ve(n[i])}},we=(a,e,t)=>{const{obj:n,k:i}=U(a,e,Object);if(n!==void 0||e.length===1){n[i]=t;return}let r=e[e.length-1],o=e.slice(0,e.length-1),s=U(a,o,Object);for(;s.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),s=U(a,o,Object),s&&s.obj&&typeof s.obj[`${s.k}.${r}`]<"u"&&(s.obj=void 0);s.obj[`${s.k}.${r}`]=t},Ct=(a,e,t,n)=>{const{obj:i,k:r}=U(a,e,Object);i[r]=i[r]||[],i[r].push(t)},ne=(a,e)=>{const{obj:t,k:n}=U(a,e);if(t)return t[n]},Pt=(a,e,t)=>{const n=ne(a,t);return n!==void 0?n:ne(e,t)},We=(a,e,t)=>{for(const n in e)n!=="__proto__"&&n!=="constructor"&&(n in a?b(a[n])||a[n]instanceof String||b(e[n])||e[n]instanceof String?t&&(a[n]=e[n]):We(a[n],e[n],t):a[n]=e[n]);return a},G=a=>a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var At={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Ot=a=>b(a)?a.replace(/[&<>"'\/]/g,e=>At[e]):a;class Et{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}const Rt=[" ",",","?","!",";"],Kt=new Et(20),It=(a,e,t)=>{e=e||"",t=t||"";const n=Rt.filter(o=>e.indexOf(o)<0&&t.indexOf(o)<0);if(n.length===0)return!0;const i=Kt.getRegExp(`(${n.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!i.test(a);if(!r){const o=a.indexOf(t);o>0&&!i.test(a.substring(0,o))&&(r=!0)}return r},$e=function(a,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!a)return;if(a[e])return a[e];const n=e.split(t);let i=a;for(let r=0;r<n.length;){if(!i||typeof i!="object")return;let o,s="";for(let h=r;h<n.length;++h)if(h!==r&&(s+=t),s+=n[h],o=i[s],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&h<n.length-1)continue;r+=h-r+1;break}i=o}return i},ae=a=>a&&a.replace("_","-"),Ft={type:"logger",log(a){this.output("log",a)},warn(a){this.output("warn",a)},error(a){this.output("error",a)},output(a,e){console&&console[a]&&console[a].apply(console,e)}};class re{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Ft,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,i){return i&&!this.debug?null:(b(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new re(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new re(this.logger,e)}}var K=new re;class oe{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const i=this.observers[n].get(t)||0;this.observers[n].set(t,i+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[s,h]=o;for(let l=0;l<h;l++)s(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[s,h]=o;for(let l=0;l<h;l++)s.apply(s,[e,...n])})}}class qe extends oe{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let s;e.indexOf(".")>-1?s=e.split("."):(s=[e,t],n&&(Array.isArray(n)?s.push(...n):b(n)&&r?s.push(...n.split(r)):s.push(n)));const h=ne(this.data,s);return!h&&!t&&!n&&e.indexOf(".")>-1&&(e=s[0],t=s[1],n=s.slice(2).join(".")),h||!o||!b(n)?h:$e(this.data&&this.data[e]&&this.data[e][t],n,r)}addResource(e,t,n,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let s=[e,t];n&&(s=s.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(s=e.split("."),i=t,t=s[1]),this.addNamespaces(t),we(this.data,s,i),r.silent||this.emit("added",e,t,n,i)}addResources(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in n)(b(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});i.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},s=[e,t];e.indexOf(".")>-1&&(s=e.split("."),i=n,n=t,t=s[1]),this.addNamespaces(t);let h=ne(this.data,s)||{};o.skipCopy||(n=JSON.parse(JSON.stringify(n))),i?We(h,n,r):h={...h,...n},we(this.data,s,h),o.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(i=>t[i]&&Object.keys(t[i]).length>0)}toJSON(){return this.data}}var Me={processors:{},addPostProcessor(a){this.processors[a.name]=a},handle(a,e,t,n,i){return a.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,t,n,i))}),e}};const je={};class ie extends oe{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Tt(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=K.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const n=this.resolve(e,t);return n&&n.res!==void 0}extractFromKey(e,t){let n=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const i=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const o=n&&e.indexOf(n)>-1,s=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!It(e,n,i);if(o&&!s){const h=e.match(this.interpolator.nestingRegexp);if(h&&h.length>0)return{key:e,namespaces:b(r)?[r]:r};const l=e.split(n);(n!==i||n===i&&this.options.ns.indexOf(l[0])>-1)&&(r=l.shift()),e=l.join(i)}return{key:e,namespaces:b(r)?[r]:r}}translate(e,t,n){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:o,namespaces:s}=this.extractFromKey(e[e.length-1],t),h=s[s.length-1],l=t.lng||this.language,c=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(l&&l.toLowerCase()==="cimode"){if(c){const g=t.nsSeparator||this.options.nsSeparator;return i?{res:`${h}${g}${o}`,usedKey:o,exactUsedKey:o,usedLng:l,usedNS:h,usedParams:this.getUsedParamsDetails(t)}:`${h}${g}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:l,usedNS:h,usedParams:this.getUsedParamsDetails(t)}:o}const $=this.resolve(e,t);let d=$&&$.res;const x=$&&$.usedKey||o,m=$&&$.exactUsedKey||o,w=Object.prototype.toString.apply(d),p=["[object Number]","[object Function]","[object RegExp]"],u=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,z=!this.i18nFormat||this.i18nFormat.handleAsObject,y=!b(d)&&typeof d!="boolean"&&typeof d!="number";if(z&&d&&y&&p.indexOf(w)<0&&!(b(u)&&Array.isArray(d))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const g=this.options.returnedObjectHandler?this.options.returnedObjectHandler(x,d,{...t,ns:s}):`key '${o} (${this.language})' returned an object instead of string.`;return i?($.res=g,$.usedParams=this.getUsedParamsDetails(t),$):g}if(r){const g=Array.isArray(d),q=g?[]:{},j=g?m:x;for(const N in d)if(Object.prototype.hasOwnProperty.call(d,N)){const S=`${j}${r}${N}`;q[N]=this.translate(S,{...t,joinArrays:!1,ns:s}),q[N]===S&&(q[N]=d[N])}d=q}}else if(z&&b(u)&&Array.isArray(d))d=d.join(u),d&&(d=this.extendTranslation(d,e,t,n));else{let g=!1,q=!1;const j=t.count!==void 0&&!b(t.count),N=ie.hasDefaultValue(t),S=j?this.pluralResolver.getSuffix(l,t.count,t):"",L=t.ordinal&&j?this.pluralResolver.getSuffix(l,t.count,{ordinal:!1}):"",T=j&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),_=T&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${S}`]||t[`defaultValue${L}`]||t.defaultValue;!this.isValidLookup(d)&&N&&(g=!0,d=_),this.isValidLookup(d)||(q=!0,d=o);const P=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&q?void 0:d,I=N&&_!==d&&this.options.updateMissing;if(q||g||I){if(this.logger.log(I?"updateKey":"missingKey",l,h,o,I?_:d),r){const O=this.resolve(o,{...t,keySeparator:!1});O&&O.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let F=[];const Z=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Z&&Z[0])for(let O=0;O<Z.length;O++)F.push(Z[O]);else this.options.saveMissingTo==="all"?F=this.languageUtils.toResolveHierarchy(t.lng||this.language):F.push(t.lng||this.language);const me=(O,W,H)=>{const ge=N&&H!==d?H:P;this.options.missingKeyHandler?this.options.missingKeyHandler(O,h,W,ge,I,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(O,h,W,ge,I,t),this.emit("missingKey",O,h,W,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&j?F.forEach(O=>{const W=this.pluralResolver.getSuffixes(O,t);T&&t[`defaultValue${this.options.pluralSeparator}zero`]&&W.indexOf(`${this.options.pluralSeparator}zero`)<0&&W.push(`${this.options.pluralSeparator}zero`),W.forEach(H=>{me([O],o+H,t[`defaultValue${H}`]||_)})}):me(F,o,_))}d=this.extendTranslation(d,e,t,$,n),q&&d===o&&this.options.appendNamespaceToMissingKey&&(d=`${h}:${o}`),(q||g)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?d=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${h}:${o}`:o,g?d:void 0):d=this.options.parseMissingKeyHandler(d))}return i?($.res=d,$.usedParams=this.getUsedParamsDetails(t),$):d}extendTranslation(e,t,n,i,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const l=b(e)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(l){const d=e.match(this.interpolator.nestingRegexp);c=d&&d.length}let $=n.replace&&!b(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&($={...this.options.interpolation.defaultVariables,...$}),e=this.interpolator.interpolate(e,$,n.lng||this.language||i.usedLng,n),l){const d=e.match(this.interpolator.nestingRegexp),x=d&&d.length;c<x&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(n.lng=this.language||i.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var d=arguments.length,x=new Array(d),m=0;m<d;m++)x[m]=arguments[m];return r&&r[0]===x[0]&&!n.context?(o.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${t[0]}`),null):o.translate(...x,t)},n)),n.interpolation&&this.interpolator.reset()}const s=n.postProcess||this.options.postProcess,h=b(s)?[s]:s;return e!=null&&h&&h.length&&n.applyPostProcessor!==!1&&(e=Me.handle(h,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,i,r,o,s;return b(e)&&(e=[e]),e.forEach(h=>{if(this.isValidLookup(n))return;const l=this.extractFromKey(h,t),c=l.key;i=c;let $=l.namespaces;this.options.fallbackNS&&($=$.concat(this.options.fallbackNS));const d=t.count!==void 0&&!b(t.count),x=d&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),m=t.context!==void 0&&(b(t.context)||typeof t.context=="number")&&t.context!=="",w=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);$.forEach(p=>{this.isValidLookup(n)||(s=p,!je[`${w[0]}-${p}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&(je[`${w[0]}-${p}`]=!0,this.logger.warn(`key "${i}" for languages "${w.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(u=>{if(this.isValidLookup(n))return;o=u;const z=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(z,c,u,p,t);else{let g;d&&(g=this.pluralResolver.getSuffix(u,t.count,t));const q=`${this.options.pluralSeparator}zero`,j=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(z.push(c+g),t.ordinal&&g.indexOf(j)===0&&z.push(c+g.replace(j,this.options.pluralSeparator)),x&&z.push(c+q)),m){const N=`${c}${this.options.contextSeparator}${t.context}`;z.push(N),d&&(z.push(N+g),t.ordinal&&g.indexOf(j)===0&&z.push(N+g.replace(j,this.options.pluralSeparator)),x&&z.push(N+q))}}let y;for(;y=z.pop();)this.isValidLookup(n)||(r=y,n=this.getResource(u,p,y,t))}))})}),{res:n,usedKey:i,exactUsedKey:r,usedLng:o,usedNS:s}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,i):this.resourceStore.getResource(e,t,n,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!b(e.replace);let i=n?e.replace:e;if(n&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!n){i={...i};for(const r of t)delete i[r]}return i}static hasDefaultValue(e){const t="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t===n.substring(0,t.length)&&e[n]!==void 0)return!0;return!1}}const le=a=>a.charAt(0).toUpperCase()+a.slice(1);class Ne{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=K.create("languageUtils")}getScriptPartFromCode(e){if(e=ae(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=ae(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(b(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(e)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const t=["hans","hant","latn","cyrl","cans","mong","arab"];let n=e.split("-");return this.options.lowerCaseLng?n=n.map(i=>i.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=le(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=le(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=le(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(n=>{if(t)return;const i=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(i))&&(t=i)}),!t&&this.options.supportedLngs&&e.forEach(n=>{if(t)return;const i=this.getLanguagePartFromCode(n);if(this.isSupportedCode(i))return t=i;t=this.options.supportedLngs.find(r=>{if(r===i)return r;if(!(r.indexOf("-")<0&&i.indexOf("-")<0)&&(r.indexOf("-")>0&&i.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===i||r.indexOf(i)===0&&i.length>1))return r})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),b(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),i=[],r=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return b(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):b(e)&&r(this.formatLanguageCode(e)),n.forEach(o=>{i.indexOf(o)<0&&r(this.formatLanguageCode(o))}),i}}let Wt=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Mt={1:a=>+(a>1),2:a=>+(a!=1),3:a=>0,4:a=>a%10==1&&a%100!=11?0:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?1:2,5:a=>a==0?0:a==1?1:a==2?2:a%100>=3&&a%100<=10?3:a%100>=11?4:5,6:a=>a==1?0:a>=2&&a<=4?1:2,7:a=>a==1?0:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?1:2,8:a=>a==1?0:a==2?1:a!=8&&a!=11?2:3,9:a=>+(a>=2),10:a=>a==1?0:a==2?1:a<7?2:a<11?3:4,11:a=>a==1||a==11?0:a==2||a==12?1:a>2&&a<20?2:3,12:a=>+(a%10!=1||a%100==11),13:a=>+(a!==0),14:a=>a==1?0:a==2?1:a==3?2:3,15:a=>a%10==1&&a%100!=11?0:a%10>=2&&(a%100<10||a%100>=20)?1:2,16:a=>a%10==1&&a%100!=11?0:a!==0?1:2,17:a=>a==1||a%10==1&&a%100!=11?0:1,18:a=>a==0?0:a==1?1:2,19:a=>a==1?0:a==0||a%100>1&&a%100<11?1:a%100>10&&a%100<20?2:3,20:a=>a==1?0:a==0||a%100>0&&a%100<20?1:2,21:a=>a%100==1?1:a%100==2?2:a%100==3||a%100==4?3:0,22:a=>a==1?0:a==2?1:(a<0||a>10)&&a%10==0?2:3};const Dt=["v1","v2","v3"],Gt=["v4"],Se={zero:0,one:1,two:2,few:3,many:4,other:5},Bt=()=>{const a={};return Wt.forEach(e=>{e.lngs.forEach(t=>{a[t]={numbers:e.nr,plurals:Mt[e.fc]}})}),a};class Ht{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=K.create("pluralResolver"),(!this.options.compatibilityJSON||Gt.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Bt(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const n=ae(e==="dev"?"en":e),i=t.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:n,type:i});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(n,{type:i})}catch{if(!e.match(/-|_/))return;const h=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(h,t)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,t);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,n).map(i=>`${t}${i}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,t);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((i,r)=>Se[i]-Se[r]).map(i=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${i}`):n.numbers.map(i=>this.getSuffix(e,i,t)):[]}getSuffix(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,n);return i?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i.select(t)}`:this.getSuffixRetroCompatible(i,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let i=e.numbers[n];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const r=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!Dt.includes(this.options.compatibilityJSON)}}const Te=function(a,e,t){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=Pt(a,e,t);return!r&&i&&b(t)&&(r=$e(a,t,n),r===void 0&&(r=$e(e,t,n))),r},fe=a=>a.replace(/\$/g,"$$$$");class Vt{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=K.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(t=>t),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:n,useRawValueToEscape:i,prefix:r,prefixEscaped:o,suffix:s,suffixEscaped:h,formatSeparator:l,unescapeSuffix:c,unescapePrefix:$,nestingPrefix:d,nestingPrefixEscaped:x,nestingSuffix:m,nestingSuffixEscaped:w,nestingOptionsSeparator:p,maxReplaces:u,alwaysFormat:z}=e.interpolation;this.escape=t!==void 0?t:Ot,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=r?G(r):o||"{{",this.suffix=s?G(s):h||"}}",this.formatSeparator=l||",",this.unescapePrefix=c?"":$||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=d?G(d):x||G("$t("),this.nestingSuffix=m?G(m):w||G(")"),this.nestingOptionsSeparator=p||",",this.maxReplaces=u||1e3,this.alwaysFormat=z!==void 0?z:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,n)=>t&&t.source===n?(t.lastIndex=0,t):new RegExp(n,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,n,i){let r,o,s;const h=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},l=x=>{if(x.indexOf(this.formatSeparator)<0){const u=Te(t,h,x,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(u,void 0,n,{...i,...t,interpolationkey:x}):u}const m=x.split(this.formatSeparator),w=m.shift().trim(),p=m.join(this.formatSeparator).trim();return this.format(Te(t,h,w,this.options.keySeparator,this.options.ignoreJSONStructure),p,n,{...i,...t,interpolationkey:w})};this.resetRegExp();const c=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,$=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:x=>fe(x)},{regex:this.regexp,safeValue:x=>this.escapeValue?fe(this.escape(x)):fe(x)}].forEach(x=>{for(s=0;r=x.regex.exec(e);){const m=r[1].trim();if(o=l(m),o===void 0)if(typeof c=="function"){const p=c(e,r,i);o=b(p)?p:""}else if(i&&Object.prototype.hasOwnProperty.call(i,m))o="";else if($){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${m} for interpolating ${e}`),o="";else!b(o)&&!this.useRawValueToEscape&&(o=ye(o));const w=x.safeValue(o);if(e=e.replace(r[0],w),$?(x.regex.lastIndex+=o.length,x.regex.lastIndex-=r[0].length):x.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),e}nest(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,r,o;const s=(h,l)=>{const c=this.nestingOptionsSeparator;if(h.indexOf(c)<0)return h;const $=h.split(new RegExp(`${c}[ ]*{`));let d=`{${$[1]}`;h=$[0],d=this.interpolate(d,o);const x=d.match(/'/g),m=d.match(/"/g);(x&&x.length%2===0&&!m||m.length%2!==0)&&(d=d.replace(/'/g,'"'));try{o=JSON.parse(d),l&&(o={...l,...o})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${h}`,w),`${h}${c}${d}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,h};for(;i=this.nestingRegexp.exec(e);){let h=[];o={...n},o=o.replace&&!b(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let l=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const c=i[1].split(this.formatSeparator).map($=>$.trim());i[1]=c.shift(),h=c,l=!0}if(r=t(s.call(this,i[1].trim(),o),o),r&&i[0]===e&&!b(r))return r;b(r)||(r=ye(r)),r||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),r=""),l&&(r=h.reduce((c,$)=>this.format(c,$,n.lng,{...n,interpolationkey:i[1].trim()}),r.trim())),e=e.replace(i[0],r),this.regexp.lastIndex=0}return e}}const Ut=a=>{let e=a.toLowerCase().trim();const t={};if(a.indexOf("(")>-1){const n=a.split("(");e=n[0].toLowerCase().trim();const i=n[1].substring(0,n[1].length-1);e==="currency"&&i.indexOf(":")<0?t.currency||(t.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?t.range||(t.range=i.trim()):i.split(";").forEach(o=>{if(o){const[s,...h]=o.split(":"),l=h.join(":").trim().replace(/^'+|'+$/g,""),c=s.trim();t[c]||(t[c]=l),l==="false"&&(t[c]=!1),l==="true"&&(t[c]=!0),isNaN(l)||(t[c]=parseInt(l,10))}})}return{formatName:e,formatOptions:t}},B=a=>{const e={};return(t,n,i)=>{let r=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(r={...r,[i.interpolationkey]:void 0});const o=n+JSON.stringify(r);let s=e[o];return s||(s=a(ae(n),i),e[o]=s),s(t)}};class Qt{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=K.create("formatter"),this.options=e,this.formats={number:B((t,n)=>{const i=new Intl.NumberFormat(t,{...n});return r=>i.format(r)}),currency:B((t,n)=>{const i=new Intl.NumberFormat(t,{...n,style:"currency"});return r=>i.format(r)}),datetime:B((t,n)=>{const i=new Intl.DateTimeFormat(t,{...n});return r=>i.format(r)}),relativetime:B((t,n)=>{const i=new Intl.RelativeTimeFormat(t,{...n});return r=>i.format(r,n.range||"day")}),list:B((t,n)=>{const i=new Intl.ListFormat(t,{...n});return r=>i.format(r)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=B(t)}format(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=t.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(s=>s.indexOf(")")>-1)){const s=r.findIndex(h=>h.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,s)].join(this.formatSeparator)}return r.reduce((s,h)=>{const{formatName:l,formatOptions:c}=Ut(h);if(this.formats[l]){let $=s;try{const d=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},x=d.locale||d.lng||i.locale||i.lng||n;$=this.formats[l](s,x,{...c,...i,...d})}catch(d){this.logger.warn(d)}return $}else this.logger.warn(`there was no format function for ${l}`);return s},e)}}const Jt=(a,e)=>{a.pending[e]!==void 0&&(delete a.pending[e],a.pendingCount--)};class Yt extends oe{constructor(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=i,this.logger=K.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,i.backend,i)}queueLoad(e,t,n,i){const r={},o={},s={},h={};return e.forEach(l=>{let c=!0;t.forEach($=>{const d=`${l}|${$}`;!n.reload&&this.store.hasResourceBundle(l,$)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?o[d]===void 0&&(o[d]=!0):(this.state[d]=1,c=!1,o[d]===void 0&&(o[d]=!0),r[d]===void 0&&(r[d]=!0),h[$]===void 0&&(h[$]=!0)))}),c||(s[l]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(h)}}loaded(e,t,n){const i=e.split("|"),r=i[0],o=i[1];t&&this.emit("failedLoading",r,o,t),!t&&n&&this.store.addResourceBundle(r,o,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);const s={};this.queue.forEach(h=>{Ct(h.loaded,[r],o),Jt(h,e),t&&h.errors.push(t),h.pendingCount===0&&!h.done&&(Object.keys(h.loaded).forEach(l=>{s[l]||(s[l]={});const c=h.loaded[l];c.length&&c.forEach($=>{s[l][$]===void 0&&(s[l][$]=!0)})}),h.done=!0,h.errors.length?h.callback(h.errors):h.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(h=>!h.done)}read(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:i,wait:r,callback:o});return}this.readingCalls++;const s=(l,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const $=this.waitingReads.shift();this.read($.lng,$.ns,$.fcName,$.tried,$.wait,$.callback)}if(l&&c&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,n,i+1,r*2,o)},r);return}o(l,c)},h=this.backend[n].bind(this.backend);if(h.length===2){try{const l=h(e,t);l&&typeof l.then=="function"?l.then(c=>s(null,c)).catch(s):s(null,l)}catch(l){s(l)}return}return h(e,t,s)}prepareLoading(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();b(e)&&(e=this.languageUtils.toResolveHierarchy(e)),b(t)&&(t=[t]);const r=this.queueLoad(e,t,n,i);if(!r.toLoad.length)return r.pending.length||i(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=e.split("|"),i=n[0],r=n[1];this.read(i,r,"read",void 0,void 0,(o,s)=>{o&&this.logger.warn(`${t}loading namespace ${r} for language ${i} failed`,o),!o&&s&&this.logger.log(`${t}loaded namespace ${r} for language ${i}`,s),this.loaded(e,o,s)})}saveMissing(e,t,n,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const h={...o,isUpdate:r},l=this.backend.create.bind(this.backend);if(l.length<6)try{let c;l.length===5?c=l(e,t,n,i,h):c=l(e,t,n,i),c&&typeof c.then=="function"?c.then($=>s(null,$)).catch(s):s(null,c)}catch(c){s(c)}else l(e,t,n,i,s,h)}!e||!e[0]||this.store.addResource(e[0],t,n,i)}}}const Le=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:a=>{let e={};if(typeof a[1]=="object"&&(e=a[1]),b(a[1])&&(e.defaultValue=a[1]),b(a[2])&&(e.tDescription=a[2]),typeof a[2]=="object"||typeof a[3]=="object"){const t=a[3]||a[2];Object.keys(t).forEach(n=>{e[n]=t[n]})}return e},interpolation:{escapeValue:!0,format:a=>a,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Ce=a=>(b(a.ns)&&(a.ns=[a.ns]),b(a.fallbackLng)&&(a.fallbackLng=[a.fallbackLng]),b(a.fallbackNS)&&(a.fallbackNS=[a.fallbackNS]),a.supportedLngs&&a.supportedLngs.indexOf("cimode")<0&&(a.supportedLngs=a.supportedLngs.concat(["cimode"])),a),X=()=>{},Zt=a=>{Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach(t=>{typeof a[t]=="function"&&(a[t]=a[t].bind(a))})};class Y extends oe{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ce(e),this.services={},this.logger=K,this.modules={external:[]},Zt(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(n=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(b(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const i=Le();this.options={...i,...this.options,...Ce(t)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const r=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?K.init(r(this.modules.logger),this.options):K.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=Qt);const $=new Ne(this.options);this.store=new qe(this.options.resources,this.options);const d=this.services;d.logger=K,d.resourceStore=this.store,d.languageUtils=$,d.pluralResolver=new Ht($,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(d.formatter=r(c),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new Vt(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new Yt(r(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(x){for(var m=arguments.length,w=new Array(m>1?m-1:0),p=1;p<m;p++)w[p-1]=arguments[p];e.emit(x,...w)}),this.modules.languageDetector&&(d.languageDetector=r(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=r(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new ie(this.services,this.options),this.translator.on("*",function(x){for(var m=arguments.length,w=new Array(m>1?m-1:0),p=1;p<m;p++)w[p-1]=arguments[p];e.emit(x,...w)}),this.modules.external.forEach(x=>{x.init&&x.init(this)})}if(this.format=this.options.interpolation.format,n||(n=X),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return e.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return e.store[c](...arguments),e}});const h=V(),l=()=>{const c=($,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),h.resolve(d),n($,d)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initImmediate?l():setTimeout(l,0),h}loadResources(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X;const i=b(e)?e:this.language;if(typeof e=="function"&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const r=[],o=s=>{if(!s||s==="cimode")return;this.services.languageUtils.toResolveHierarchy(s).forEach(l=>{l!=="cimode"&&r.indexOf(l)<0&&r.push(l)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(h=>o(h)),this.options.preload&&this.options.preload.forEach(s=>o(s)),this.services.backendConnector.load(r,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(s)})}else n(null)}reloadResources(e,t,n){const i=V();return typeof e=="function"&&(n=e,e=void 0),typeof t=="function"&&(n=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),n||(n=X),this.services.backendConnector.reload(e,t,r=>{i.resolve(),n(r)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Me.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const n=this.languages[t];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;const i=V();this.emit("languageChanging",e);const r=h=>{this.language=h,this.languages=this.services.languageUtils.toResolveHierarchy(h),this.resolvedLanguage=void 0,this.setResolvedLanguage(h)},o=(h,l)=>{l?(r(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,i.resolve(function(){return n.t(...arguments)}),t&&t(h,function(){return n.t(...arguments)})},s=h=>{!e&&!h&&this.services.languageDetector&&(h=[]);const l=b(h)?h:this.services.languageUtils.getBestMatchFromCodes(h);l&&(this.language||r(l),this.translator.language||this.translator.changeLanguage(l),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(l)),this.loadResources(l,c=>{o(c,l)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(e),i}getFixedT(e,t,n){var i=this;const r=function(o,s){let h;if(typeof s!="object"){for(var l=arguments.length,c=new Array(l>2?l-2:0),$=2;$<l;$++)c[$-2]=arguments[$];h=i.options.overloadTranslationOptionHandler([o,s].concat(c))}else h={...s};h.lng=h.lng||r.lng,h.lngs=h.lngs||r.lngs,h.ns=h.ns||r.ns,h.keyPrefix!==""&&(h.keyPrefix=h.keyPrefix||n||r.keyPrefix);const d=i.options.keySeparator||".";let x;return h.keyPrefix&&Array.isArray(o)?x=o.map(m=>`${h.keyPrefix}${d}${m}`):x=h.keyPrefix?`${h.keyPrefix}${d}${o}`:o,i.t(x,h)};return b(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=n,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const o=(s,h)=>{const l=this.services.backendConnector.state[`${s}|${h}`];return l===-1||l===0||l===2};if(t.precheck){const s=t.precheck(this,o);if(s!==void 0)return s}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(n,e)&&(!i||o(r,e)))}loadNamespaces(e,t){const n=V();return this.options.ns?(b(e)&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{n.resolve(),t&&t(i)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=V();b(e)&&(e=[e]);const i=this.options.preload||[],r=e.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=i.concat(r),this.loadResources(o=>{n.resolve(),t&&t(o)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new Ne(Le());return t.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Y(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},r=new Y(i);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(s=>{r[s]=this[s]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},n&&(r.store=new qe(this.store.data,i),r.services.resourceStore=r.store),r.translator=new ie(r.services,i),r.translator.on("*",function(s){for(var h=arguments.length,l=new Array(h>1?h-1:0),c=1;c<h;c++)l[c-1]=arguments[c];r.emit(s,...l)}),r.init(i,t),r.translator.options=i,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const C=Y.createInstance();C.createInstance=Y.createInstance;C.createInstance;C.dir;C.init;C.loadResources;C.reloadResources;C.use;C.changeLanguage;C.getFixedT;C.t;C.exists;C.setDefaultNamespace;C.hasLoadedNamespace;C.loadNamespaces;C.loadLanguages;const Xt={title:"NumCalc",subtitle:"Numerical Differentiation & Integration",tagline:"Learn it. Play with it. Test yourself.",footer:"Built for Chapter 7 · Numerical Analysis"},en={home:"Home",lessons:"Lessons",playground:"Playground",quiz:"Quiz"},tn={toggle:"Toggle theme",light:"Light",dark:"Dark"},nn={label:"Language",en:"English",hu:"Magyar"},an={heading:"Numerical Calculus, made interactive",lead:"Read the chapter with beautifully typeset math, experiment with the real difference and quadrature formulas, then quiz yourself — in English or Hungarian.",cta_lessons:"Start reading",cta_playground:"Open the playground",card_lessons_title:"Lessons",card_lessons_desc:"Sections 7.1–7.4 with rendered formulas and tables.",card_playground_title:"Playground",card_playground_desc:"Tweak step sizes and methods; watch the error live.",card_quiz_title:"Quiz",card_quiz_desc:"Check your understanding with instant feedback."},rn={title:"Lessons",intro:"Pick a section to read.",loading:"Loading lesson…",error:"Could not load this lesson.",back:"All lessons",read:"Read"},sn={title:"Interactive playground",lead:"Choose a function and a method, then drag the sliders.",tab_diff:"Differentiation",tab_int:"Integration",function:"Function f(x)",custom:"Custom expression",custom_hint:"Use x as the variable, e.g. exp(x) * sin(x)",method:"Method",x0:"Point x₀",h:"Step size h",a:"Lower limit a",b:"Upper limit b",n:"Subintervals n",approx:"Approximation",reference:"Reference (exact)",error:"Absolute error",invalid:"Invalid expression — check your syntax.",methods:{forward:"Forward difference (1st order)",backward:"Backward difference (1st order)",central:"Central difference (2nd order)","five-point":"5-point central (4th order)",second:"Second derivative",trapezoid:"Composite trapezoidal",simpson:"Composite Simpson",gauss2:"Gauss 2-point",gauss3:"Gauss 3-point",gauss4:"Gauss 4-point",gauss5:"Gauss 5-point"},computing_derivative:"Approximating f{order}(x₀)",computing_integral:"Approximating ∫f(x) dx"},on={title:"Quiz",lead:"Answer the questions — you get instant feedback.",start:"Start quiz",loading:"Loading questions…",question:"Question",of:"of",score:"Score",streak:"Streak",check:"Check",next:"Next",finish:"See results",true:"True",false:"False",your_answer:"Your answer",correct:"Correct!",incorrect:"Not quite.",numeric_placeholder:"Type a number",results_title:"Your results",results_score:"You scored {{correct}} / {{total}}",retry:"Try again",to_lessons:"Review the lessons",topic:"Topic"},ln={app:Xt,nav:en,theme:tn,lang:nn,home:an,lessons:rn,playground:sn,quiz:on},fn={title:"NumCalc",subtitle:"Numerikus differenciálás és integrálás",tagline:"Tanuld meg. Játssz vele. Teszteld magad.",footer:"A 7. fejezethez · Numerikus analízis"},hn={home:"Kezdőlap",lessons:"Leckék",playground:"Játéktér",quiz:"Kvíz"},dn={toggle:"Téma váltása",light:"Világos",dark:"Sötét"},cn={label:"Nyelv",en:"English",hu:"Magyar"},$n={heading:"A numerikus analízis, interaktívan",lead:"Olvasd a fejezetet szépen szedett képletekkel, kísérletezz a valódi differencia- és kvadratúraképletekkel, majd teszteld magad — angolul vagy magyarul.",cta_lessons:"Kezdj olvasni",cta_playground:"Nyisd meg a játékteret",card_lessons_title:"Leckék",card_lessons_desc:"7.1–7.4. szakaszok képletekkel és táblázatokkal.",card_playground_title:"Játéktér",card_playground_desc:"Állítsd a lépésközt és a módszert; nézd a hibát élőben.",card_quiz_title:"Kvíz",card_quiz_desc:"Ellenőrizd a tudásod azonnali visszajelzéssel."},xn={title:"Leckék",intro:"Válassz egy szakaszt olvasásra.",loading:"Lecke betöltése…",error:"Nem sikerült betölteni ezt a leckét.",back:"Összes lecke",read:"Olvasás"},un={title:"Interaktív játéktér",lead:"Válassz függvényt és módszert, majd húzd a csúszkákat.",tab_diff:"Differenciálás",tab_int:"Integrálás",function:"Függvény f(x)",custom:"Egyéni kifejezés",custom_hint:"Használd az x változót, pl. exp(x) * sin(x)",method:"Módszer",x0:"Pont x₀",h:"Lépésköz h",a:"Alsó határ a",b:"Felső határ b",n:"Részintervallumok n",approx:"Közelítés",reference:"Referencia (pontos)",error:"Abszolút hiba",invalid:"Hibás kifejezés — ellenőrizd a szintaxist.",methods:{forward:"Jobb oldali differencia (1. rendű)",backward:"Bal oldali differencia (1. rendű)",central:"Centrális differencia (2. rendű)","five-point":"5-pontos centrális (4. rendű)",second:"Második derivált",trapezoid:"Összetett trapéz",simpson:"Összetett Simpson",gauss2:"Gauss 2-pontos",gauss3:"Gauss 3-pontos",gauss4:"Gauss 4-pontos",gauss5:"Gauss 5-pontos"},computing_derivative:"f{order}(x₀) közelítése",computing_integral:"∫f(x) dx közelítése"},pn={title:"Kvíz",lead:"Válaszolj a kérdésekre — azonnali visszajelzést kapsz.",start:"Kvíz indítása",loading:"Kérdések betöltése…",question:"Kérdés",of:"/",score:"Pontszám",streak:"Sorozat",check:"Ellenőrzés",next:"Következő",finish:"Eredmények",true:"Igaz",false:"Hamis",your_answer:"A válaszod",correct:"Helyes!",incorrect:"Nem egészen.",numeric_placeholder:"Írj be egy számot",results_title:"Az eredményed",results_score:"Eredményed: {{correct}} / {{total}}",retry:"Újra",to_lessons:"Nézd át a leckéket",topic:"Téma"},mn={app:fn,nav:hn,theme:dn,lang:cn,home:$n,lessons:xn,playground:un,quiz:pn},De="numcalc-lang";function gn(){var a;try{const e=localStorage.getItem(De);if(e==="en"||e==="hu")return e;if((a=navigator.language)!=null&&a.toLowerCase().startsWith("hu"))return"hu"}catch{}return"en"}C.use(wt).init({resources:{en:{translation:ln},hu:{translation:mn}},lng:gn(),fallbackLng:"en",interpolation:{escapeValue:!1}});C.on("languageChanged",a=>{try{localStorage.setItem(De,a),document.documentElement.setAttribute("lang",a)}catch{}});document.documentElement.setAttribute("lang",C.language);const _n=`## 7.1. Numerical differentiation

In this section we present two methods to derive numerical approximation formulas for the derivative, and we derive some basic approximation formulas.

The derivative of a function is defined by the limit

$$
f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}.
$$

Therefore, if $|h|$ is small, then the difference quotient $\\dfrac{f(x_0 + h) - f(x_0)}{h}$ is close to the value of the derivative. But we need more: we need to know the truncation error of the approximation. Next we derive this formula in two different ways, and we will derive the formula of the truncation error too.

Suppose $f \\in C^3[a, b]$ and $x_0 \\in (a, b)$. The idea of the first method is the following: We approximate the function $f$ in a neighbourhood of $x_0$ by a Lagrange polynomial $L_n(x)$. We use $L'_n(x_0)$ as an approximation of $f'(x_0)$. We will call this method as Lagrange's method. Consider a simple case: let $n = 1$, $x_1 = x_0 + h \\in (a, b)$ (and $x_0 \\neq x_1$), consider the first-order Lagrange polynomial interpolation of $f$ corresponding to the mesh points $x_0$ and $x_1$:

$$
\\begin{aligned}
f(x) &= L_1(x) + E_1(x) \\\\
&= \\frac{f(x_0)(x - x_0 - h)}{-h} + \\frac{f(x_0 + h)(x - x_0)}{h} + \\frac{f''(\\xi(x))}{2}(x - x_0)(x - x_0 - h).
\\end{aligned}
$$

Taking the derivative of both sides we get

$$
\\begin{aligned}
f'(x) ={}& \\frac{f(x_0 + h) - f(x_0)}{h} + \\frac{f''(\\xi(x))}{2}\\bigl(2(x - x_0) - h\\bigr) \\\\
&+ \\frac{d}{dx}\\Bigl(f''(\\xi(x))\\Bigr)\\frac{(x - x_0)(x - x_0 - h)}{2}.
\\end{aligned}
\\tag{7.1}
$$

Theorem 6.8 yields that the function $f''(\\xi(x))$ is differentiable for $x \\neq x_0, x_0 + h$, but the derivative cannot be computed explicitly. On the other hand, taking the limit $x \\to x_0$ in (7.1) we get

$$
f'(x_0) = \\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{h}{2}f''(\\xi),
\\tag{7.2}
$$

where $\\xi \\in \\langle x_0, x_0 + h \\rangle$. Therefore, if we use the approximation formula

$$
f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h},
\\tag{7.3}
$$

the truncation error of the approximation has the form $-\\dfrac{h}{2}f''(\\xi)$. Formula (7.3) is called **first-order forward difference formula** if $h > 0$, and **first-order backward difference formula** if $h < 0$. In these formulas the mesh point $x_0 + h$ is located right and left to $x_0$, in the respective cases. Formula (7.2) shows that approximation (7.3) is first-order in $h$. Formula (7.3) is also called **two-point difference formula**, since it uses two mesh points.

The same formula can be derived (under weaker conditions) in the following way: Let $f \\in C^2[a, b]$, and consider the first-order Taylor expansion of $f$ around $x_0$:

$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \\frac{f''(\\xi(x))}{2}(x - x_0)^2.
$$

Substitution $x = x_0 + h$ gives

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \\frac{f''(\\xi)}{2}h^2,
$$

hence

$$
f'(x_0) = \\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{h}{2}f''(\\xi),
$$

where $\\xi = \\xi(x_0 + h)$.

**Example 7.1.** Consider the function $f(x) = e^{x^2 + x}$. We have $f'(x) = e^{x^2 + x}(2x + 1)$, so $f'(0) = 1$. We compute an approximate value of $f'(0)$ using the first-order forward ($h > 0$) and backward ($h < 0$) difference formula, i.e., formula (7.3). In Table 7.1 we printed the approximate values and their errors for different values of $h$. The numerical results show that if the step size $h$ decreases by one order of magnitude, then the corresponding error also decreases by one order of magnitude. $\\quad\\square$

**Table 7.1:** First-order difference formula, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\\lvert h\\rvert$ | forward difference | error | backward difference | error |
|---|---|---|---|---|
| 0.100 | 1.1627807 | 1.6278e-01 | 0.8606881 | 1.3931e-01 |
| 0.010 | 1.0151177 | 1.5118e-02 | 0.9851156 | 1.4884e-02 |
| 0.001 | 1.0015012 | 1.5012e-03 | 0.9985012 | 1.4988e-03 |

The previous two methods are appropriate to derive higher order, so more precise formulas. Suppose $f \\in C^{n+1}$, and consider an approximation of $f$ by a Lagrange polynomial of degree $n$:

$$
f(x) = \\sum_{k=0}^{n} f(x_k)l_k(x) + \\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\\cdots(x - x_n),
\\tag{7.4}
$$

where $l_k(x)$ are the Lagrange basis polynomials of degree $n$ defined by (6.2). Differentiating (7.4) and using substitution $x = x_i$ we get

$$
f'(x_i) = \\sum_{j=0}^{n} f(x_j)l'_j(x_i) + \\frac{f^{(n+1)}(\\xi(x_i))}{(n+1)!}\\prod_{\\substack{j=0 \\\\ j \\neq i}}^{n}(x_i - x_j),
\\tag{7.5}
$$

which is called **$n+1$-point difference formula** to approximate $f'(x_i)$. We apply relation (7.5) for equidistant mesh points, so we assume $x_j = x_0 + jh$, where $h > 0$. It can be shown that the error term in (7.5) is of $n$th-order in $h$, and then the resulting formula will also be called difference formula of order $n$.

Consider the case when $n = 2$, i.e., we study three-point formulas. Consider the mesh points $x_0, x_0 + h, x_0 + 2h$. Then

$$
\\begin{aligned}
l_0(x) &= \\frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)} = \\frac{(x - x_1)(x - x_2)}{2h^2}, \\\\
l_1(x) &= \\frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)} = \\frac{(x - x_0)(x - x_2)}{-h^2}, \\\\
l_2(x) &= \\frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)} = \\frac{(x - x_0)(x - x_1)}{2h^2},
\\end{aligned}
$$

therefore,

$$
\\begin{aligned}
l'_0(x) &= \\frac{2x - x_1 - x_2}{2h^2}, \\\\
l'_1(x) &= \\frac{2x - x_0 - x_2}{-h^2}, \\\\
l'_2(x) &= \\frac{2x - x_0 - x_1}{2h^2}.
\\end{aligned}
$$

We apply them with $x = x_0$, $x = x_0 + h$ and $x = x_0 + 2h$, so relation (7.5) yields

$$
f'(x_0) = \\frac{1}{h}\\left(-\\frac{3}{2}f(x_0) + 2f(x_0 + h) - \\frac{1}{2}f(x_0 + 2h)\\right) + \\frac{h^2}{3}f'''(\\xi_0),
\\tag{7.6}
$$

$$
f'(x_0 + h) = \\frac{1}{h}\\left(-\\frac{1}{2}f(x_0) + \\frac{1}{2}f(x_0 + 2h)\\right) - \\frac{h^2}{6}f'''(\\xi_1),
\\tag{7.7}
$$

$$
f'(x_0 + 2h) = \\frac{1}{h}\\left(\\frac{1}{2}f(x_0) - 2f(x_0 + h) + \\frac{3}{2}f(x_0 + 2h)\\right) + \\frac{h^2}{3}f'''(\\xi_2).
\\tag{7.8}
$$

The substitutions $x_0 \\leftarrow x_0 - 2h$ and $h \\leftarrow -h$ give that (7.8) can be written in the form (7.6), and (7.7) has the form

$$
f'(x_0) = \\frac{1}{h}\\left(-\\frac{1}{2}f(x_0 - h) + \\frac{1}{2}f(x_0 + h)\\right) - \\frac{h^2}{6}f'''(\\xi_1).
\\tag{7.9}
$$

Relation (7.9) is called **three-point midpoint formula** or **second-order central difference formula**. (It is also called centered difference.) Formula (7.6) is called **three-point endpoint formula**. It is also called **second-order forward difference formula** if $h > 0$, and **second-order backward difference formula** if $h < 0$.

**Example 7.2.** We approximate the derivative of the function $f(x) = e^{x^2 + x}$ at $x = 0$ with second-order difference formulas (formulas (7.6) and (7.9)). The results can be seen in Table 7.2 for different values of $h$. The numerical results demonstrate that the truncation error of the formulas is second-order in $h$. $\\quad\\square$

**Table 7.2:** Second-order difference formulas, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\\lvert h\\rvert$ | forward | error | backward | error | central | error |
|---|---|---|---|---|---|---|
| 0.100 | 0.9693157 | 3.0684e-02 | 0.9820952 | 1.7905e-02 | 1.0117344 | 1.1734e-02 |
| 0.010 | 0.9997603 | 2.3968e-04 | 0.9997728 | 2.2718e-04 | 1.0001167 | 1.1667e-04 |
| 0.001 | 0.9999977 | 2.3396e-06 | 0.9999977 | 2.3271e-06 | 1.0000012 | 1.1667e-06 |

Without proofs we present 5-point central and one-sided formulas, i.e., fourth-order difference formulas:

$$
\\begin{aligned}
f'(x_0) ={}& \\frac{1}{12h}\\Bigl(-25f(x_0) + 48f(x_0 + h) - 36f(x_0 + 2h) + 16f(x_0 + 3h) \\\\
&- 3f(x_0 + 4h)\\Bigr) + \\frac{h^4}{5}f^{(5)}(\\xi_0),
\\end{aligned}
\\tag{7.10}
$$

$$
\\begin{aligned}
f'(x_0) ={}& \\frac{1}{12h}\\Bigl(f(x_0 - 2h) - 8f(x_0 - h) + 8f(x_0 + h) - f(x_0 + 2h)\\Bigr) \\\\
&+ \\frac{h^4}{30}f^{(5)}(\\xi_1).
\\end{aligned}
\\tag{7.11}
$$

Formula (7.10) is one-sided, and (7.11) is central difference.

**Example 7.3.** We apply formulas (7.10) and (7.11) to approximate the first derivative of $f(x) = e^{x^2 + x}$ at $x = 0$. Table 7.3 shows the numerical results. $\\quad\\square$

**Table 7.3:** Fourth-order difference formulas, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\\lvert h\\rvert$ | forward | error | backward | error | central | error |
|---|---|---|---|---|---|---|
| 0.100 | 0.9967110 | 3.2890e-03 | 0.9991793 | 8.2070e-04 | 0.9997248 | 2.7523e-04 |
| 0.010 | 0.9999998 | 1.7345e-07 | 0.9999998 | 1.5136e-07 | 1.0000000 | 2.7005e-08 |
| 0.001 | 1.0000000 | 1.6311e-11 | 1.0000000 | 1.6090e-11 | 1.0000000 | 2.7000e-12 |

Next we use the Taylor's method to derive approximation formulas for higher order derivatives. Let $f \\in C^4$, and consider the third-order Taylor polynomial expansion of $f$ at $x_0$ with the fourth-order error term:

$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \\frac{f''(x_0)}{2}(x - x_0)^2 + \\frac{f'''(x_0)}{6}(x - x_0)^3 + \\frac{f^{(4)}(\\xi)}{24}(x - x_0)^4.
$$

If we substitute $x = x_0 - h$ and $x = x_0 + h$ into this relation, we get

$$
f(x_0 - h) = f(x_0) - f'(x_0)h + \\frac{f''(x_0)}{2}h^2 - \\frac{f'''(x_0)}{6}h^3 + \\frac{f^{(4)}(\\xi_1)}{24}h^4
$$

and

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \\frac{f''(x_0)}{2}h^2 + \\frac{f'''(x_0)}{6}h^3 + \\frac{f^{(4)}(\\xi_2)}{24}h^4.
$$

Adding the two equations we get

$$
f(x_0 - h) + f(x_0 + h) = 2f(x_0) + f''(x_0)h^2 + \\frac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{24}h^4,
$$

which yields

$$
f''(x_0) = \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \\frac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{24}h^2.
$$

Therefore, the approximation formula

$$
f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}
\\tag{7.12}
$$

has an error of order $h^2$. We can rewrite the error term $\\dfrac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{24}h^2$ in a simpler form. We have by our assumptions that $f^{(4)}$ is continuous, therefore, Theorem 2.2 yields that there exists a point $\\xi$ in between $\\xi_1$ and $\\xi_2$ such that

$$
f^{(4)}(\\xi) = \\frac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{2}.
$$

Hence

$$
f''(x_0) = \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \\frac{f^{(4)}(\\xi)}{12}h^2.
\\tag{7.13}
$$

**Example 7.4.** We computed the approximation of the second-order derivative of $f(x) = e^{x^2 + x}$ at $x = 0$ using formula (7.12) and different step sizes. The numerical results can be seen in Table 7.4. Note that the exact derivative value is $f''(0) = 3$. $\\quad\\square$

**Table 7.4:** Approximation of the second-order derivative, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | approximation | error |
|---|---|---|
| 0.100 | 3.0209256 | 2.0926e-02 |
| 0.010 | 3.0002083 | 2.0834e-04 |
| 0.001 | 3.0000021 | 2.0833e-06 |

The numerical differentiation is an unstable problem. To illustrate it we consider a function $f(x)$ and its perturbation of the form

$$
g(x) = f(x) + \\frac{1}{n}\\sin(n^2 x).
$$

If we compute an approximation of $g'$ instead of $f'$ using any difference formula obtained above, then there is a small change in the function values used in the difference formula if $n$ is large. But the difference between the exact value of the derivatives is large, since $g'(x) = f'(x) + n\\cos(n^2 x)$.

Next we investigate the effect of the rounding in numerical differentiation. Consider the simplest difference formula, the first-order difference (7.2). Suppose that here, instead of the exact function values $f(x_0)$ and $f(x_0 + h)$, we use their approximate values $f_0$ and $f_1$, where

$$
f(x_0) = f_0 + e_0 \\quad\\text{and}\\quad f(x_0 + h) = f_1 + e_1.
$$

Then

$$
f'(x_0) \\approx \\frac{f_1 - f_0}{h},
$$

and the resulting error is

$$
\\begin{aligned}
f'(x_0) - \\frac{f_1 - f_0}{h} &= f'(x_0) - \\frac{f(x_0 + h) - f(x_0)}{h} + \\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{f_1 - f_0}{h} \\\\
&= -\\frac{h}{2}f''(\\xi) + \\frac{e_1 - e_0}{h}.
\\end{aligned}
\\tag{7.14}
$$

Relation (7.14) shows that the error consists of two parts: the truncation error and the rounding error. If the step size $h$ is small, then the truncation error will be small, but the rounding error can go to $\\infty$ as $h \\to 0$.

**Example 7.5.** Consider the function $f(x) = e^x$. We compute the approximation of $f'(1) = e$ using first-order forward difference formula. In order to enlarge the effect of the rounding, we used 6- and 4-digit arithmetic in the computation. We can see in Table 7.5 that in case of the 4-digit arithmetic, when we decreased the step size to 0.001 from 0.01, the error of the approximation increased. The reason is, clearly, the increase of the rounding error, since here we subtracted two numbers which are close to each other, and also divided by a small number. $\\quad\\square$

**Table 7.5:** Effect of rounding in first-order forward difference, $f(x) = e^x$, $x_0 = 1$

| | 6-digit arithmetic | | 4-digit arithmetic | |
|---|---|---|---|---|
| $h$ | approximation | error | approximation | error |
| 0.100 | 2.8589000 | 1.4062e-01 | 2.8600000 | 1.4172e-01 |
| 0.010 | 2.7320000 | 1.3718e-02 | 2.8000000 | 8.1718e-02 |
| 0.001 | 2.7200000 | 1.7182e-03 | 3.0000000 | 2.8172e-01 |

The formulas derived in this section can be applied to approximate partial derivatives. We list some formulas next.

$$
\\frac{\\partial f(x_0, y_0)}{\\partial x} \\approx \\frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h},
\\tag{7.15}
$$

$$
\\frac{\\partial f(x_0, y_0)}{\\partial y} \\approx \\frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h},
\\tag{7.16}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2} \\approx \\frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}
\\tag{7.17}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial y^2} \\approx \\frac{f(x_0, y_0 + h) - 2f(x_0, y_0) + f(x_0, y_0 - h)}{h^2}
\\tag{7.18}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial x\\,\\partial y} \\approx \\frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}
\\tag{7.19}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2} \\approx \\frac{f(x_0 + 2h, y_0) - 2f(x_0 + h, y_0) + f(x_0, y_0)}{h^2}
\\tag{7.20}
$$

### Exercises

1. Compute an approximation of $f'(x_0)$ using first-order forward and backward difference formulas with $h = 0.1$ and $0.01$ if
   - (a) $f(x) = x^4 - 6x^2 + 3x$, $x_0 = 1$,
   - (b) $f(x) = e^x \\sin x$, $x_0 = 0$,
   - (c) $f(x) = \\cos x^2$, $x_0 = 1$,
   - (d) $f(x) = x \\ln x$, $x_0 = 1$.

2. Apply second-order difference formulas in the previous exercise.

3. Approximate $f''(x_0)$ for the functions given in Exercise 1.

4. Derive formulas (7.6) and (7.9) using Taylor's method.

5. Prove relations (7.10) and (7.11).

6. Derive the following approximation formulas:
$$
f'''(x_0) \\approx \\frac{1}{2h^3}\\Bigl(f(x_0 + 2h) - 2f(x_0 + h) + 2f(x_0 - h) - f(x_0 - 2h)\\Bigr),
$$
$$
f^{(4)}(x_0) \\approx \\frac{1}{h^4}\\Bigl(f(x_0 + 2h) - 4f(x_0 + h) + 6f(x_0) - 4f(x_0 - h) + f(x_0 + 2h)\\Bigr)
$$

7. Derive formulas (7.15)–(7.20) using
   - (a) approximation formulas formulated for single variable functions,
   - (b) two-variable Lagrange's method,
   - (c) two-variable Taylor's method.

   Compute the truncation errors.
`,bn=`## 7.2. Richardson's extrapolation

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

1. Derive a sixth-order approximation formula for the first derivative of a function starting from the central difference formula (7.9) using the Richardson's extrapolation. Apply the formula for approximating the first derivative of $f(x) = e^x \\sin x$ at $x = 0$ using step size $h = 0.25$.

2. Reformulate the Richardson's extrapolation for the case when the Taylor expansion of the truncation error contains all powers of $h$, i.e.,
$$
M = K(h) + a_1 h + a_2 h^2 + \\cdots + a_m h^m + b(x),
$$
where $|b(h)| \\leq B h^{m+1}$ with some $B > 0$.

3. Reformulate the Richardson's extrapolation for the general case when
$$
M = K(h) + a_1 h^{\\alpha_1} + a_2 h^{\\alpha_2} + \\cdots + a_m h^{\\alpha_m} + b(x),
$$
where $1 \\leq \\alpha_1 < \\alpha_2 < \\cdots < \\alpha_m$ are integers, and $|b(h)| \\leq B h^{\\alpha_m + 1}$ with some $B > 0$.

4. Derive a third-order approximation of the first derivative using Richardson's extrapolation starting from the first-order difference formula.
`,kn=`## 7.3. Newton–Cotes Formulas

Let $f \\in C[a, b]$. The definite integral, similarly to the derivative, is defined by a limit. The definition using Riemann's sum is the following: consider a finite partition of the interval $[a, b]$ using the mesh points $a = x_0 < x_1 < \\cdots < x_n = b$, and in each subinterval $[x_{i-1}, x_i]$ select a point $\\xi_i$. Then the integral $\\int_a^b f(x)\\,dx$ is a limit of the Riemann's sum $\\sum_{i=1}^{n} f(\\xi_i)(x_i - x_{i-1})$ as the norm of the partition, $\\max\\{x_i - x_{i-1} : i = 1, \\ldots, n\\}$ goes to zero. Such a Riemann's sum is for example

$$
\\int_a^b f(x)\\,dx \\approx \\frac{b - a}{n}\\left(f\\left(\\frac{x_0 + x_1}{2}\\right) + f\\left(\\frac{x_1 + x_2}{2}\\right) + \\cdots + f\\left(\\frac{x_{n-1} + x_n}{2}\\right)\\right),
\\tag{7.27}
$$

where $x_i = a + i(b - a)/n$, $i = 0, 1, \\ldots, n$. This formula is called **midpoint rule** or **rectangle rule**. (See Exercises 5 and 6.)

Similarly to the numerical differentiation, we can use the Lagrange's method to derive approximation formulas for definite integrals. Consider a partition of the interval $[a, b]$ (typically with equidistant mesh points), and let $L_n$ be the Lagrange interpolating polynomial of the function $f$ corresponding to the given mesh. Consider $\\int_a^b L_n(x)\\,dx$ as an approximation of $\\int_a^b f(x)\\,dx$. We suppose that $f \\in C^{n+1}[a, b]$. Then Theorem 6.5 yields the error of the approximation:

$$
\\begin{aligned}
\\int_a^b f(x)\\,dx ={}& \\sum_{k=0}^{n} f(x_k)\\int_a^b l_k(x)\\,dx \\\\
&+ \\int_a^b \\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\\cdots(x - x_n)\\,dx,
\\end{aligned}
\\tag{7.28}
$$

where $l_k(x)$ (corresponding to the mesh points) is the Lagrange basis polynomial of degree $n$ defined by (6.2). Here we get an approximation formula of the form

$$
\\int_a^b f(x)\\,dx \\approx \\sum_{k=0}^{n} c_k f(x_k),
\\tag{7.29}
$$

where the weights $c_k$ are defined by

$$
c_k = \\int_a^b l_k(x)\\,dx.
\\tag{7.30}
$$

Approximation formulas of the form (7.29) are called **quadrature formulas**. Those quadrature formulas when the weights $c_k$ are defined by the integrals (7.30) are called **Newton–Cotes formulas**. If the end points of the interval $a$ and $b$ belong to the mesh points, then formulas (7.29)–(7.30) are called **closed Newton–Cotes formulas**, and if all mesh points belong to the open interval $(a, b)$, then they are called **open Newton–Cotes formulas**.

We say that the **degree of precision** of a quadrature formula is $n$ if the formula gives back the exact value of the definite integral for all polynomials with degree at most $n$, and there exists a polynomial of degree $n + 1$ for which the quadrature formula is not exact. Therefore, the degree of precision of the $(n+1)$-point Newton–Cotes formula (7.29)–(7.30) is at least $n$, since in this case the Lagrange polynomial $L_n$ is identical to the function $f$. It is possible to show that for even $n$ the $(n + 1)$-point Newton–Cotes formulas are exact for polynomials with degree $n + 1$ too.

Next we consider the closed Newton–Cotes formula for $n = 1$. Let $x_0 = a$, $x_1 = b$ and $h = b - a$. Then

$$
L_1(x) = f(x_0)\\frac{x - x_1}{x_0 - x_1} + f(x_1)\\frac{x - x_0}{x_1 - x_0},
$$

so

$$
\\begin{aligned}
\\int_{x_0}^{x_1} L_1(x)\\,dx &= f(x_0)\\int_{x_0}^{x_1} \\frac{x - x_1}{x_0 - x_1}\\,dx + f(x_1)\\int_{x_0}^{x_1} \\frac{x - x_0}{x_1 - x_0}\\,dx \\\\
&= \\left[f(x_0)\\frac{(x - x_1)^2}{2(x_0 - x_1)} + f(x_1)\\frac{(x - x_0)^2}{2(x_1 - x_0)}\\right]_{x_0}^{x_1} \\\\
&= \\frac{h}{2}\\bigl(f(x_0) + f(x_1)\\bigr).
\\end{aligned}
$$

The error of this formula, according to (7.28), is

$$
\\int_{x_0}^{x_1} f(x)\\,dx - \\frac{h}{2}\\bigl(f(x_0) + f(x_1)\\bigr) = \\int_{x_0}^{x_1} \\frac{f''(\\xi(x))}{2}(x - x_0)(x - x_1)\\,dx.
$$

To simplify the formula of the error term we use that $(x - x_0)(x - x_1) < 0$ for $x \\in (x_0, x_1)$, and hence Theorem 2.6 can be used. Therefore, there exists $\\eta \\in (x_0, x_1)$ such that

$$
\\int_{x_0}^{x_1} \\frac{f''(\\xi(x))}{2}(x - x_0)(x - x_1)\\,dx = \\frac{f''(\\eta)}{2}\\int_{x_0}^{x_1}(x - x_0)(x - x_1)\\,dx.
$$

Hence

$$
\\begin{aligned}
\\int_{x_0}^{x_1} f(x)\\,dx - \\frac{h}{2}\\bigl(f(x_0) + f(x_1)\\bigr) &= \\frac{f''(\\eta)}{2}\\int_{x_0}^{x_1}(x - x_0)^2 - h(x - x_0)\\,dx \\\\
&= \\frac{f''(\\eta)}{2}\\left[\\frac{(x - x_0)^3}{3} - h\\frac{(x - x_0)^2}{2}\\right]_{x_0}^{x_1} \\\\
&= -\\frac{h^3}{12}f''(\\eta).
\\end{aligned}
$$

We obtained the so-called **trapezoidal rule**:

$$
\\int_a^b f(x)\\,dx = \\frac{h}{2}\\bigl(f(a) + f(b)\\bigr) - \\frac{h^3}{12}f''(\\xi), \\qquad \\xi \\in (a, b).
\\tag{7.31}
$$

The name of the formula comes from the fact that $\\frac{h}{2}\\bigl(f(a) + f(b)\\bigr)$ gives back the area of the region bounded by the secant line of the function corresponding to the points $a$ and $b$, the $x$-axis, and the vertical lines $x = a$ and $x = b$.

The trapezoidal rule gives a good approximation of the integral if the length of the interval is small. If we have a large interval, then we divide it into $n$ subintervals of equal length by the mesh points $x_i = a + ih$ ($i = 0, 1, \\ldots, n$), where $h = (b - a)/n$, and we apply the trapezoidal rule for each subintervals:

$$
\\begin{aligned}
\\int_a^b f(x)\\,dx &= \\sum_{i=1}^{n}\\int_{x_{i-1}}^{x_i} f(x)\\,dx \\\\
&= \\sum_{i=1}^{n}\\frac{h}{2}\\bigl(f(x_{i-1}) + f(x_i)\\bigr) - \\frac{h^3}{12}\\sum_{i=1}^{n} f''(\\xi_i) \\\\
&= \\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right) - \\frac{nh^3}{12}\\frac{1}{n}\\sum_{i=1}^{n} f''(\\xi_i).
\\end{aligned}
$$

We suppose that $f \\in C^2[a, b]$. Then it follows from Theorem 2.2 that the average value $\\frac{1}{n}\\sum_{i=1}^{n} f''(\\xi_i)$ can be replaced by a single function value of the form $f''(\\xi)$. Therefore, using $hn = b - a$, we get

$$
\\int_a^b f(x)\\,dx = \\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right) - \\frac{(b - a)h^2}{12}f''(\\xi), \\qquad \\xi \\in (a, b).
\\tag{7.32}
$$

This formula is called **composite trapezoidal rule**.

**Example 7.7.** We compute approximate values of the integral $\\int_0^1 x^2 e^x\\,dx$ using the basic or composite trapezoidal rule with $h = 1$, $h = 0.5$ and $h = 0.25$, respectively. It can be checked that the exact value of the integral is $\\int_0^1 x^2 e^x\\,dx = e - 2 = 0.7182818$ (with 7 digits precision). For the first case we have

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{1}{2}(0 + e) = 1.3591409,
$$

where we computed the numerical values with 7 digits precision. The error in this case is $0.6408591$. With $h = 0.5$ the composite trapezoidal rule gives

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.5}{2}(0 + 2 \\cdot 0.5^2 e^{0.5} + e) = 0.8856606.
$$

Hence its error is $0.1673788$. Finally, for $h = 0.25$ we get

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.25}{2}(0 + 2 \\cdot 0.25^2 e^{0.25} + 2 \\cdot 0.5^2 e^{0.5} + 2 \\cdot 0.75^2 e^{0.75} + e) = 0.7605963,
$$

so its error is $0.0423145$. We can observe that if the step size reduces to its half, then the corresponding error in the approximation reduces to its quarter, which indicates that the error in $h$ is quadratic. $\\quad\\square$

Consider formula (7.28) for $n = 2$ and using equidistant mesh points, i.e., $x_0 = a$, $x_1 = x_0 + h$, $x_2 = b$, $h = (b - a)/2$.

$$
\\begin{aligned}
\\int_{x_0}^{x_2} L_2(x)\\,dx ={}& f(x_0)\\int_{x_0}^{x_2} \\frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)}\\,dx + f(x_1)\\int_{x_0}^{x_2} \\frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)}\\,dx \\\\
&+ f(x_2)\\int_{x_0}^{x_2} \\frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)}\\,dx \\\\
={}& \\frac{f(x_0)}{2h^2}\\int_{x_0}^{x_2}(x - x_2 + h)(x - x_2)\\,dx - \\frac{f(x_1)}{h^2}\\int_{x_0}^{x_2}(x - x_0)(x - x_0 - 2h)\\,dx \\\\
&+ \\frac{f(x_2)}{2h^2}\\int_{x_0}^{x_2}(x - x_0)(x - x_0 - h)\\,dx \\\\
={}& \\frac{f(x_0)}{2h^2}\\left[\\frac{(x - x_2)^3}{3} + h\\frac{(x - x_2)^2}{2}\\right]_{x_0}^{x_2} - \\frac{f(x_1)}{h^2}\\left[\\frac{(x - x_0)^3}{3} - 2h\\frac{(x - x_0)^2}{2}\\right]_{x_0}^{x_2} \\\\
&+ \\frac{f(x_2)}{2h^2}\\left[\\frac{(x - x_0)^3}{3} - h\\frac{(x - x_0)^2}{2}\\right]_{x_0}^{x_2} \\\\
={}& \\frac{h}{3}\\bigl(f(x_0) + 4f(x_1) + f(x_2)\\bigr).
\\end{aligned}
$$

The truncation error is

$$
\\int_{x_0}^{x_2} \\frac{f'''(\\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\\,dx.
$$

Now there is a difference compared to the previous case: the function $(x - x_0)(x - x_1)(x - x_2)$ has opposite signs on the intervals $(x_0, x_1)$ and $(x_1, x_2)$, so Theorem 2.6 is not applicable on $(x_0, x_2)$. We have a different method to simplify the formula for the error term. Let

$$
\\begin{aligned}
p(x) &:= \\int_{x_0}^{x}(t - x_0)(t - x_1)(t - x_2)\\,dt \\\\
&= \\int_{x_0}^{x}(t - x_1 + h)(t - x_1)(t - x_1 - h)\\,dt \\\\
&= \\left[\\frac{(t - x_1)^4}{4} - h^2\\frac{(t - x_1)^2}{2}\\right]_{x_0}^{x} \\\\
&= \\frac{(x - x_1)^4}{4} - \\frac{h^2(x - x_1)^2}{2} + \\frac{h^4}{4} \\\\
&= \\frac{1}{4}\\bigl((x - x_1)^2 - h^2\\bigr)^2.
\\end{aligned}
$$

Then $p(x_0) = p(x_2) = 0$, so integration by parts gives

$$
\\int_{x_0}^{x_2} \\frac{f'''(\\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\\,dx = -\\int_{x_0}^{x_2} \\frac{d}{dx}\\frac{f'''(\\xi(x))}{6}\\,p(x)\\,dx.
$$

$p$ is a nonnegative function, hence applying Theorems 2.6 and 6.8, we get

$$
\\int_{x_0}^{x_2} \\frac{f'''(\\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\\,dx = -\\frac{f^{(4)}(\\eta)}{24}\\int_{x_0}^{x_2} p(x)\\,dx = -\\frac{h^5}{90}f^{(4)}(\\eta).
$$

We have proved the relation

$$
\\int_{x_0}^{x_2} f(x)\\,dx = \\frac{h}{3}\\bigl(f(x_0) + 4f(x_1) + f(x_2)\\bigr) - \\frac{h^5}{90}f^{(4)}(\\eta), \\qquad \\eta \\in (x_0, x_2),
\\tag{7.33}
$$

which is called **Simpson's rule**.

This error formula yields that the Simpson's rule is precise for third-order polynomials, since then $f^{(4)}$ is identically equal to 0. On the other hand, the order of approximation in $h$ is five. Similar higher order of precision can be shown for all Newton–Cotes formulas with even $n$.

Similarly to the composite trapezoidal rule, we can derive the composite Simpson's rule: We divide the interval $[a, b]$ into $2n$ equal parts, so let $h = (b - a)/2n$. Then

$$
\\begin{aligned}
\\int_a^b f(x)\\,dx ={}& \\frac{h}{3}\\left(f(x_0) + 4\\sum_{i=1}^{n} f(x_{2i-1}) + 2\\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\\right) \\\\
&- \\frac{(b - a)h^4}{180}f^{(4)}(\\xi), \\qquad \\xi \\in (a, b).
\\end{aligned}
\\tag{7.34}
$$

**Example 7.8.** Compute the approximate values of $\\int_0^1 x^2 e^x\\,dx$ using (composite) Simpson's formula with $h = 0.5$, $h = 0.25$ and $h = 0.125$. First we get

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.5}{3}(0 + 4 \\cdot 0.5^2 e^{0.5} + e) = 0.7278339.
$$

The error is $0.0095520$. For $h = 0.25$ we apply the composite Simpson's formula:

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.25}{3}(0 + 4 \\cdot 0.25^2 e^{0.25} + 2 \\cdot 0.5^2 e^{0.5} + 4 \\cdot 0.75^2 e^{0.75} + e) = 0.7189082.
$$

Its error is $0.0006264$. Finally, for $h = 0.125$ we get

$$
\\begin{aligned}
\\int_0^1 x^2 e^x\\,dx \\approx{}& \\frac{0.125}{3}\\Bigl(0 + 4 \\cdot 0.125^2 e^{0.125} + 2 \\cdot 0.25^2 e^{0.25} + 4 \\cdot 0.375^2 e^{0.375} + 2 \\cdot 0.5^2 e^{0.5} \\\\
&+ 4 \\cdot 0.625^2 e^{0.625} + 2 \\cdot 0.75^2 e^{0.75} + 4 \\cdot 0.875^2 e^{0.875} + e\\Bigr) = 0.7183215,
\\end{aligned}
$$

which has the error $0.0000396$. $\\quad\\square$

Next we present some other closed Newton–Cotes formulas.

**Simpson's $\\frac{3}{8}$ formula:**

$$
\\int_{x_0}^{x_3} f(x)\\,dx = \\frac{3h}{8}\\bigl(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)\\bigr) - \\frac{3h^5}{80}f^{(4)}(\\xi)
\\tag{7.35}
$$

**$n = 4$:**

$$
\\int_{x_0}^{x_4} f(x)\\,dx = \\frac{2h}{45}\\bigl(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)\\bigr) - \\frac{8h^7}{945}f^{(6)}(\\xi)
\\tag{7.36}
$$

Finally, we present some open Newton–Cotes formulas:

$$
\\int_{x_{-1}}^{x_1} f(x)\\,dx = 2hf(x_0) + \\frac{h^3}{3}f''(\\xi),
\\tag{7.37}
$$

$$
\\int_{x_{-1}}^{x_2} f(x)\\,dx = \\frac{3h}{2}\\bigl(f(x_0) + f(x_1)\\bigr) + \\frac{3h^3}{4}f''(\\xi),
\\tag{7.38}
$$

$$
\\int_{x_{-1}}^{x_3} f(x)\\,dx = \\frac{4h}{3}\\bigl(2f(x_0) - f(x_1) + 2f(x_2)\\bigr) + \\frac{14h^5}{45}f^{(4)}(\\xi),
\\tag{7.39}
$$

$$
\\int_{x_{-1}}^{x_4} f(x)\\,dx = \\frac{5h}{24}\\bigl(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)\\bigr) + \\frac{95h^5}{144}f^{(4)}(\\xi).
\\tag{7.40}
$$

We close this section with the investigation of the numerical stability of the integration.

**Theorem 7.9.** Let $\\sum_{i=1}^{n} c_i f(x_i)$ be a quadrature formula which is exact for constant functions and each coefficient $c_i$ is positive. Let $y_i$ be an approximate value of the exact function value $f(x_i)$, and suppose $|y_i - f(x_i)| \\leq \\varepsilon$. Then

$$
\\left|\\sum_{i=1}^{n} c_i f(x_i) - \\sum_{i=1}^{n} c_i y_i\\right| \\leq \\varepsilon(b - a).
$$

*Proof.* According to the assumptions, $(b - a) = \\int_a^b 1\\,dx = \\sum_{i=1}^{n} c_i$, therefore,

$$
\\left|\\sum_{i=1}^{n} c_i f(x_i) - \\sum_{i=1}^{n} c_i y_i\\right| \\leq \\sum_{i=1}^{n} c_i |f(x_i) - y_i| \\leq \\varepsilon\\sum_{i=1}^{n} c_i = \\varepsilon(b - a). \\qquad\\square
$$

We note that all quadrature formulas we presented in this section were exact for constant functions, and most of them had positive weights. Therefore, all such formulas are stable for the rounding error.

### Exercises

1. Compute approximate values of the integrals using the trapezoidal rule with step sizes $h = 0.5, 0.25, 0.125$, respectively:
   - (a) $\\int_0^1 \\sin^3 x\\,dx$,
   - (b) $\\int_1^2 \\ln(x + 1)\\,dx$,
   - (c) $\\int_1^2 e^{1/x}\\,dx$.

2. Repeat Exercise 1 using the Simpson's rule.

3. Repeat Exercise 1 using formulas (7.35)–(7.36).

4. Repeat Exercise 1 using formulas Newton–Cotes Formulas (7.37)–(7.40).

5. Prove that the midpoint formula (7.27) gives back the sum of the areas under tangent lines at the midpoints of the intervals $[x_i, x_{i+1}]$.

6. Show that the midpoint formula is a Newton–Cotes formula, and derive its error term.

7. Derive formulas (7.35)–(7.36) (without computing the error terms).

8. Derive formulas (7.37)–(7.40) (without computing the error terms).
`,yn=`## 7.4. Gaussian Quadrature

In the previous section we have seen that the Newton–Cotes formulas give back the exact value of the integral for polynomials with certain degree. Now we would like to derive quadrature formulas with similar property. Consider the general quadrature formula

$$
\\int_a^b f(x)\\,dx \\approx \\sum_{i=1}^{n} c_i f(x_i).
$$

We have the following statement:

**Theorem 7.10.** A quadrature formula

$$
Q(f) := \\sum_{i=1}^{n} c_i f(x_i)
\\tag{7.41}
$$

is exact for polynomials $p(x) = a_m x^m + a_{m-1} x^{m-1} + \\cdots + a_0$ of degree at most $m$ if and only if it is exact for the monomials $x^i$ for all $i = 0, 1, \\ldots, m$.

*Proof.* If $Q$ is exact for all polynomials with degree at most $m$, it certainly implies that it is exact for all monomials $x^i$ for all $i = 0, 1, \\ldots, m$.

Suppose now that $Q$ is exact for the monomials $x^i$ for all $i = 0, 1, \\ldots, m$. Then the linearity of the integral and the quadrature formula $Q$ yield that

$$
\\begin{aligned}
\\int_a^b a_m x^m + a_{m-1} x^{m-1} + \\cdots + a_0\\,dx &= a_m\\int_a^b x^m\\,dx + a_{m-1}\\int_a^b x^{m-1}\\,dx + \\cdots + a_0\\int_a^b 1\\,dx \\\\
&= a_m Q(x^m) + a_{m-1} Q(x^{m-1}) + \\cdots + a_0 Q(1) \\\\
&= Q(a_m x^m + a_{m-1} x^{m-1} + \\cdots + a_0). \\qquad\\square
\\end{aligned}
$$

The quadrature formula $Q$ defined by (7.41) contains $2n$ number of parameters, $c_i, x_i$ ($i = 1, 2, \\ldots, n$). The previous theorem indicates that such a quadrature formula can be exact for polynomials with degree at most $2n - 1$, since it also contains $2n$ coefficients. Then Theorem 7.10 yields that a quadrature formula $Q$ is exact for polynomials of degree at most $2n - 1$ if and only if the following $2n$ number of equations hold:

$$
\\begin{aligned}
\\int_a^b 1\\,dx &= \\sum_{i=1}^{n} c_i \\\\
\\int_a^b x\\,dx &= \\sum_{i=1}^{n} c_i x_i \\\\
\\int_a^b x^2\\,dx &= \\sum_{i=1}^{n} c_i x_i^2 \\\\
&\\;\\;\\vdots \\\\
\\int_a^b x^{2n-1}\\,dx &= \\sum_{i=1}^{n} c_i x_i^{2n-1}
\\end{aligned}
\\tag{7.42}
$$

The quadrature formula of the form (7.41) where the parameters are the solutions of the nonlinear system (7.42) is called **$n$-point Gaussian quadrature formula**.

Consider the special case when $n = 2$ and $[a, b] = [-1, 1]$. Then system (7.42) is equivalent to the system

$$
\\begin{aligned}
2 &= c_1 + c_2 \\\\
0 &= c_1 x_1 + c_2 x_2 \\\\
\\frac{2}{3} &= c_1 x_1^2 + c_2 x_2^2 \\\\
0 &= c_1 x_1^3 + c_2 x_2^3.
\\end{aligned}
$$

It can be checked that this system has a unique solution (apart from the order): $c_1 = c_2 = 1$ and $x_1 = -\\frac{\\sqrt{3}}{3}$, $x_2 = \\frac{\\sqrt{3}}{3}$. So the two-point Gaussian quadrature formula is

$$
\\int_{-1}^{1} f(x)\\,dx \\approx f\\left(-\\frac{\\sqrt{3}}{3}\\right) + f\\left(\\frac{\\sqrt{3}}{3}\\right).
\\tag{7.43}
$$

**Example 7.11.** We compute the approximation of the integral of $f(x) = e^x$ on the interval $[-1, 1]$. The Gaussian formula (7.43) yields

$$
\\int_{-1}^{1} e^x\\,dx \\approx e^{-\\frac{\\sqrt{3}}{3}} + e^{\\frac{\\sqrt{3}}{3}} = 2.3426961.
$$

Comparing it with the exact value $e - 1/e = 2.350424$ we get that the error of the approximation is $0.0077062$, which is small, compared to the simplicity of the formula. $\\quad\\square$

We need the notion of orthogonal functions. The functions $f$ and $g$ are called **orthogonal** on the interval $[a, b]$ if

$$
\\int_a^b f(x)g(x)\\,dx = 0.
$$

We show that there exists a sequence of functions $(P_i)_{i=0,1,\\ldots}$ which are pairwise orthogonal on the interval $[-1, 1]$, and $P_i$ is a polynomial of degree $i$. Let $P_0(x) := 1$ and $P_1(x) := x$. Then $P_0$ and $P_1$ are orthogonal on $[-1, 1]$. We are looking for $P_2$ in the form $P_2(x) = x^2 + a_{2,1} P_1(x) + a_{2,0} P_0(x)$. Then the requested orthogonality yields

$$
\\begin{aligned}
0 &= \\int_{-1}^{1} P_2(x)P_0(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_0(x)\\,dx + a_{2,1}\\int_{-1}^{1} P_1(x)P_0(x)\\,dx + a_{2,0}\\int_{-1}^{1} P_0^2(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_0(x)\\,dx + a_{2,0}\\int_{-1}^{1} P_0^2(x)\\,dx,
\\end{aligned}
$$

which gives

$$
a_{2,0} = -\\frac{\\int_{-1}^{1} x^2 P_0(x)\\,dx}{\\int_{-1}^{1} P_0^2(x)\\,dx}.
$$

Similarly,

$$
\\begin{aligned}
0 &= \\int_{-1}^{1} P_2(x)P_1(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_1(x)\\,dx + a_{2,1}\\int_{-1}^{1} P_1^2(x)\\,dx + a_{2,0}\\int_{-1}^{1} P_0(x)P_1(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_1(x)\\,dx + a_{2,1}\\int_{-1}^{1} P_1^2(x)\\,dx,
\\end{aligned}
$$

so

$$
a_{2,1} = -\\frac{\\int_{-1}^{1} x^2 P_1(x)\\,dx}{\\int_{-1}^{1} P_1^2(x)\\,dx}.
$$

We found a unique $P_2$ of this form. We can continue this procedure. If $P_0, \\ldots, P_i$ are already defined, then we are looking for $P_{i+1}$ in the form

$$
P_{i+1}(x) = x^{i+1} + a_{i+1,i} P_i(x) + \\cdots + a_{i+1,0} P_0(x).
\\tag{7.44}
$$

Then, similarly to the previous computation, we get

$$
a_{i+1,j} = -\\frac{\\int_{-1}^{1} x^{i+1} P_j(x)\\,dx}{\\int_{-1}^{1} P_j^2(x)\\,dx}, \\qquad j = 0, 1, \\ldots, i,
\\tag{7.45}
$$

so $P_{i+1}$ can be defined uniquely. This method is called **Gram–Schmidt orthogonalization**, and the resulting polynomial $P_i$ is called **Legendre polynomial** of degree $i$. The formulas of the first five Legendre polynomials are:

$$
\\begin{aligned}
P_0(x) &= 1, \\\\
P_1(x) &= x, \\\\
P_2(x) &= x^2 - \\frac{1}{3}, \\\\
P_3(x) &= x^3 - \\frac{3}{5}x, \\\\
P_4(x) &= x^4 - \\frac{6}{7}x^2 + \\frac{3}{35}.
\\end{aligned}
$$

It can be shown that the Legendre polynomials satisfy the recursion

$$
P_{n+1}(x) = xP_n(x) - \\frac{n^2}{4n^2 - 1}P_{n-1}(x).
\\tag{7.46}
$$

The next theorem summarizes the most important properties of the Legendre polynomials.

**Theorem 7.12.** Let $P_i$ be the $i$th Legendre polynomial. Then

1. $P_i$ is orthogonal to any polynomial with degree at most $i - 1$.

2. $P_i$ is even if $i$ is even, and it is odd if $i$ is odd.

3. $P_i$ has $i$ distinct real roots in the interval $(-1, 1)$, and they are symmetric to the origin.

4. If $(p_i)_{i=0,1,\\ldots}$ is a sequence of polynomials of degree (exactly) $i$, which are pairwise orthogonal, then $p_i(x) = c_i P_i(x)$ for all $i$ for some constant $c_i \\neq 0$.

The next theorem shows that the mesh points of the $n$-point Gaussian quadrature formula defined on the interval $[-1, 1]$ are the roots of the $n$th-order Legendre polynomial $P_n$.

**Theorem 7.13.** Let $x_1, x_2, \\ldots, x_n$ be the roots of the $n$th Legendre polynomial $P_n$, and let

$$
c_i = \\int_{-1}^{1} \\frac{(x - x_1)\\cdots(x - x_{i-1})(x - x_{i+1})\\cdots(x - x_n)}{(x_i - x_1)\\cdots(x_i - x_{i-1})(x_i - x_{i+1})\\cdots(x_i - x_n)}\\,dx.
\\tag{7.47}
$$

Then, for any polynomial $p$ of degree at most $2n - 1$, it follows

$$
\\int_{-1}^{1} p(x)\\,dx = \\sum_{i=1}^{n} c_i p(x_i).
$$

The next result gives the truncation error of the Gaussian quadrature.

**Theorem 7.14.** Let $f \\in C^{2n}[-1, 1]$. Then there exists $\\xi \\in (-1, 1)$ such that the $n$-point Gaussian quadrature formula satisfies

$$
\\int_{-1}^{1} f(x)\\,dx = \\sum_{k=1}^{n} c_k f(x_k) + \\frac{f^{(2n)}(\\xi)}{(2n)!}\\int_{-1}^{1} P_n^2(x)\\,dx.
$$

It can be shown that the error term in the previous theorem has the form

$$
\\frac{\\pi f^{(2n)}(\\xi)}{4^n (2n)!},
$$

which gives that if $f^{(2n)}$ is bounded for all $n$ with a bound independent of $n$, then the error of the Gaussian quadrature goes to 0 exponentially. Note that the error in the Newton–Cotes formulas tends to 0 only with polynomial speed if $n \\to \\infty$.

Table 7.6 presents the roots of the first several Legendre polynomials and the corresponding coefficients.

**Table 7.6:** The parameters of the Gaussian quadrature formulas

| $n$ | $x_i$ | $c_i$ |
|---|---|---|
| 2 | 0.5773502692 | 1.0000000000 |
|   | -0.5773502692 | 1.0000000000 |
| 3 | 0.7745966692 | 0.5555555556 |
|   | 0.0000000000 | 0.8888888889 |
|   | -0.7745966692 | 0.5555555556 |
| 4 | 0.8611363116 | 0.3478548451 |
|   | 0.3399810436 | 0.6521451549 |
|   | -0.3399810436 | 0.6521451549 |
|   | -0.8611363116 | 0.3478548451 |
| 5 | 0.9061798459 | 0.2369268850 |
|   | 0.5384693101 | 0.4786286705 |
|   | 0.0000000000 | 0.5688888889 |
|   | -0.5384693101 | 0.4786286705 |
|   | -0.9061798459 | 0.2369268850 |

The Gaussian quadrature formulas can be applied to the case when the interval is $[-1, 1]$. But in case of an arbitrary interval $[a, b]$, the new variable $x = ((b - a)t + a + b)/2$ transforms the computation of the integral to the interval $[-1, 1]$:

$$
\\int_a^b f(x)\\,dx = \\frac{b - a}{2}\\int_{-1}^{1} f\\left(\\frac{(b - a)t + a + b}{2}\\right)dt.
$$

**Example 7.15.** Approximate the integral $\\int_0^1 x^2 e^x\\,dx$ using the two-point Gaussian quadrature:

$$
\\begin{aligned}
\\int_0^1 x^2 e^x\\,dx &= \\frac{1}{2}\\int_{-1}^{1}\\left(\\frac{t + 1}{2}\\right)^2 e^{(t+1)/2}\\,dt \\\\
&\\approx \\frac{1}{2}\\left(\\left(\\frac{-\\sqrt{3}/3 + 1}{2}\\right)^2 e^{(-\\sqrt{3}/3 + 1)/2} + \\left(\\frac{\\sqrt{3}/3 + 1}{2}\\right)^2 e^{(\\sqrt{3}/3 + 1)/2}\\right) \\\\
&= 0.7119418.
\\end{aligned}
$$

The error of this approximation is $0.0063400$. $\\quad\\square$

### Exercises

1. Apply the 2-point Gaussian quadrature to the integrals given in Exercise 1 of the previous section.

2. Apply the 3-, 4- and 5-point Gaussian quadrature formulas to the integrals given in Exercise 1 of the previous section.
`,vn=`# Chapter 7

## Numerical Differentiation and Integration

In this chapter first we study several methods for numerical differentiation, and consider the Richardson's extrapolation method to obtain higher order methods. Next we define Newton–Cotes formulas and the Gaussian quadrature to approximate definite integrals.
`,zn=`## 7.1. Numerikus differenciálás

Ebben a szakaszban függvények deriváltjait közelítő képletek levezetésének két módszerét és az egyszerűbb közelítő képleteket ismertetjük. A derivált a függvény differenciahányadosának határértéke:

$$
f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}.
$$

Így nyilvánvalóan ha $|h|$ kicsi, akkor a differenciahányados, $\\dfrac{f(x_0 + h) - f(x_0)}{h}$ közel van a derivált értékéhez. A numerikus analízisben ennél többre van szükség: ismerni szeretnénk a közelítés hibáját. A következőkben kétféleképpen vezetjük le ugyanezt a közelítő képletet, de úgy, hogy közben a közelítés hibáját is megkapjuk.

Tegyük fel, hogy $f \\in C^3(a, b)$, és $x_0 \\in (a, b)$. Az első megközelítés alapötlete a következő: Helyettesítsük az $f$ függvényt $x_0$ egy környezetében valamilyen $L_n(x)$ Lagrange-féle közelítő polinommal. Használjuk $L'_n(x_0)$-t az $f'(x_0)$ érték közelítésére! Ezt a módszert Lagrange-módszernek nevezzük. Nézzük a legegyszerűbb esetet: Legyen $n = 1$, $x_1 = x_0 + h \\in (a, b)$ (és $x_0 \\neq x_1$), és tekintsük az $f$ függvény $x_0, x_1$ osztópontokhoz tartozó elsőfokú Lagrange-polinom közelítését:

$$
\\begin{aligned}
f(x) &= L_1(x) + E_1(x) \\\\
&= \\frac{f(x_0)(x - x_0 - h)}{-h} + \\frac{f(x_0 + h)(x - x_0)}{h} + \\frac{f''(\\xi(x))}{2}(x - x_0)(x - x_0 - h).
\\end{aligned}
$$

Ezt differenciálva kapjuk:

$$
\\begin{aligned}
f'(x) ={}& \\frac{f(x_0 + h) - f(x_0)}{h} + \\frac{f''(\\xi(x))}{2}\\bigl(2(x - x_0) - h\\bigr) \\\\
&+ \\frac{d}{dx}\\Bigl(f''(\\xi(x))\\Bigr)\\frac{(x - x_0)(x - x_0 - h)}{2}.
\\end{aligned}
\\tag{7.1}
$$

A 6.8. tétel szerint $f''(\\xi(x))$ differenciálható $x \\neq x_0, x_0 + h$-ra, de a deriváltat nem tudjuk explicit módon kiszámolni. Viszont az $x \\to x_0$ határértéket véve a (7.1) képletben kapjuk az

$$
f'(x_0) = \\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{h}{2}f''(\\xi)
\\tag{7.2}
$$

összefüggést, ahol $\\xi \\in \\langle x_0, x_0 + h \\rangle$. Azaz, ha az

$$
f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}
\\tag{7.3}
$$

közelítést használjuk, a közelítés hibája $-\\dfrac{h}{2}f''(\\xi)$ alakban írható fel. A (7.3) képletet az $f$ függvény **jobb oldali elsőrendű differenciájának** nevezzük, ha $h > 0$, illetve **bal oldali elsőrendű differenciájának** nevezzük, ha $h < 0$ (mert ekkor az $x_0 + h$ pont az $x_0$-tól jobbra, ill. balra helyezkedik el). A (7.2) képlet mutatja, hogy a (7.3) közelítés hibája $h$-ban elsőrendű.

Ugyanezt az eredményt (de egy kicsit enyhébb feltételek mellett) levezethetjük a következőképpen is: Legyen $f \\in C^2(a, b)$, és tekintsük az $f$ függvény elsőrendű $x_0$-körüli Taylor-közelítését:

$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \\frac{f''(\\xi(x))}{2}(x - x_0)^2.
$$

Behelyettesítve $x = x_0 + h$-t, következik, hogy

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \\frac{f''(\\xi)}{2}h^2,
$$

azaz

$$
f'(x_0) = \\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{h}{2}f''(\\xi),
$$

ahol $\\xi = \\xi(x_0 + h)$.

**7.1. példa.** Tekintsük az $f(x) = e^{x^2 + x}$ függvényt. $f'(x) = e^{x^2 + x}(2x + 1)$, így $f'(0) = 1$. Számítsuk ki az $f'(0)$ egy közelítő értékét jobb oldali (pozitív $h$) és bal oldali (negatív $h$) elsőrendű differencia képletet ((7.3) képlet) használva! A 7.1. táblázatban feltüntettük a derivált közelítő értékeket és a fellépő hibát különböző $h$ értékekre. A numerikus eredmények igazolják, hogy ha egy nagyságrenddel csökkentjük a lépésközt, akkor a hiba egy nagyságrenddel csökken. $\\quad\\square$

**7.1. táblázat.** Elsőrendű differencia képlet, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $\\lvert h\\rvert$ | jobb oldali | hiba | bal oldali | hiba |
|---|---|---|---|---|
| 0.100 | 1.1627807 | 1.6278e-01 | 0.8606881 | 1.3931e-01 |
| 0.010 | 1.0151177 | 1.5118e-02 | 0.9851156 | 1.4884e-02 |
| 0.001 | 1.0015012 | 1.5012e-03 | 0.9985012 | 1.4988e-03 |

Az előbb említett két módszer magasabbrendű (azaz pontosabb) közelítő képletek levezetésére is használható. Tekintsük az $n$-edfokú Lagrange-polinom közelítést használó módszert: legyen $f \\in C^{n+1}$, és tekintsük az

$$
f(x) = \\sum_{k=0}^{n} f(x_k)l_k(x) + \\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\\cdots(x - x_n)
\\tag{7.4}
$$

összefüggést, ahol $l_k(x)$ a (6.2) képlettel definiált $n$-edfokú Lagrange-féle alappolinom. Differenciálva (7.4)-et és az $x = x_i$ helyettesítést alkalmazva kis számolás után kapjuk

$$
f'(x_i) = \\sum_{j=0}^{n} f(x_j)l'_j(x_i) + \\frac{f^{(n+1)}(\\xi(x_i))}{(n+1)!}\\prod_{\\substack{j=0 \\\\ j \\neq i}}^{n}(x_i - x_j).
\\tag{7.5}
$$

A (7.5) összefüggést ekvidisztáns alappontokra szokás felírni, azaz feltesszük, hogy $x_j = x_0 + jh$, ahol $h > 0$. A (7.5) képletet $n+1$ alappontot használó differencia képletnek nevezzük. Belátható, hogy a (7.5) képletben szereplő hibatag $h$-ban $n$-edrendű.

Tekintsük most az $n = 2$ esetet, azaz a három pontra illeszkedő formulákat. Tekintsük az $x_0, x_0 + h, x_0 + 2h$ osztópontokat. Ekkor

$$
\\begin{aligned}
l_0(x) &= \\frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)} = \\frac{(x - x_1)(x - x_2)}{2h^2}, \\\\
l_1(x) &= \\frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)} = \\frac{(x - x_0)(x - x_2)}{-h^2}, \\\\
l_2(x) &= \\frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)} = \\frac{(x - x_0)(x - x_1)}{2h^2},
\\end{aligned}
$$

ezért

$$
\\begin{aligned}
l'_0(x) &= \\frac{2x - x_1 - x_2}{2h^2}, \\\\
l'_1(x) &= \\frac{2x - x_0 - x_2}{-h^2}, \\\\
l'_2(x) &= \\frac{2x - x_0 - x_1}{2h^2}.
\\end{aligned}
$$

Ezt alkalmazva $x = x_0$, $x = x_0 + h$ ill. $x = x_0 + 2h$-ra, a (7.5) képletből kapjuk, hogy

$$
f'(x_0) = \\frac{1}{h}\\left(-\\frac{3}{2}f(x_0) + 2f(x_0 + h) - \\frac{1}{2}f(x_0 + 2h)\\right) + \\frac{h^2}{3}f'''(\\xi_0),
\\tag{7.6}
$$

$$
f'(x_0 + h) = \\frac{1}{h}\\left(-\\frac{1}{2}f(x_0) + \\frac{1}{2}f(x_0 + 2h)\\right) - \\frac{h^2}{6}f'''(\\xi_1),
\\tag{7.7}
$$

$$
f'(x_0 + 2h) = \\frac{1}{h}\\left(\\frac{1}{2}f(x_0) - 2f(x_0 + h) + \\frac{3}{2}f(x_0 + 2h)\\right) + \\frac{h^2}{3}f'''(\\xi_2).
\\tag{7.8}
$$

Az $x_0 \\leftarrow x_0 - 2h$ és $h \\leftarrow -h$ helyettesítéssel a (7.8) a (7.6) alakban írható fel, (7.7) pedig az $x_0 \\leftarrow x_0 - h$ és $h \\leftarrow -h$ helyettesítéssel

$$
f'(x_0) = \\frac{1}{h}\\left(-\\frac{1}{2}f(x_0 - h) + \\frac{1}{2}f(x_0 + h)\\right) - \\frac{h^2}{6}f'''(\\xi_1)
\\tag{7.9}
$$

alakú lesz. A (7.9) képlet egy **centrális másodrendű differencia képlet**, (7.6) pedig **jobb oldali** ill. **bal oldali másodrendű differencia**, attól függően, hogy $h$ pozitív vagy negatív.

**7.2. példa.** Az $f(x) = e^{x^2 + x}$ függvény $x = 0$ pontjában vett deriváltját közelítettük jobb oldali, bal oldali és centrális másodrendű differencia képletekkel ((7.6) és (7.9) képletek). Az eredményeket a 7.2. táblázatban adtuk meg különböző $h$-ra, amelyekből látható, hogy a képletek másodrendű hibával rendelkeznek. $\\quad\\square$

**7.2. táblázat.** Másodrendű differencia képlet, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | jobb oldali | hiba | bal oldali | hiba | centrális | hiba |
|---|---|---|---|---|---|---|
| 0.100 | 0.9693157 | 3.0684e-02 | 0.9820952 | 1.7905e-02 | 1.0117344 | 1.1734e-02 |
| 0.010 | 0.9997603 | 2.3968e-04 | 0.9997728 | 2.2718e-04 | 1.0001167 | 1.1667e-04 |
| 0.001 | 0.9999977 | 2.3396e-06 | 0.9999977 | 2.3271e-06 | 1.0000012 | 1.1667e-06 |

Bizonyítás nélkül közöljük az 5 pontra felírt egyoldali és centrális negyedrendű képleteket:

$$
\\begin{aligned}
f'(x_0) ={}& \\frac{1}{12h}\\Bigl(-25f(x_0) + 48f(x_0 + h) - 36f(x_0 + 2h) + 16f(x_0 + 3h) \\\\
&- 3f(x_0 + 4h)\\Bigr) + \\frac{h^4}{5}f^{(5)}(\\xi_0),
\\end{aligned}
\\tag{7.10}
$$

$$
\\begin{aligned}
f'(x_0) ={}& \\frac{1}{12h}\\Bigl(f(x_0 - 2h) - 8f(x_0 - h) + 8f(x_0 + h) - f(x_0 + 2h)\\Bigr) \\\\
&+ \\frac{h^4}{30}f^{(5)}(\\xi_1).
\\end{aligned}
\\tag{7.11}
$$

A (7.10) egyoldali, (7.11) pedig centrális differencia képlet.

**7.3. példa.** Alkalmazzuk a (7.10) és (7.11) képleteket az $f(x) = e^{x^2 + x}$ függvény deriváltjának közelítésére $x = 0$-ban! A 7.3. táblázatban láthatók a numerikus eredmények. $\\quad\\square$

**7.3. táblázat.** Negyedrendű differencia képlet, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | jobb oldali | hiba | bal oldali | hiba | centrális | hiba |
|---|---|---|---|---|---|---|
| 0.100 | 0.9967110 | 3.2890e-03 | 0.9991793 | 8.2070e-04 | 0.9997248 | 2.7523e-04 |
| 0.010 | 0.9999998 | 1.7345e-07 | 0.9999998 | 1.5136e-07 | 1.0000000 | 2.7005e-08 |
| 0.001 | 1.0000000 | 1.6311e-11 | 1.0000000 | 1.6090e-11 | 1.0000000 | 2.7000e-12 |

Magasabbrendű deriváltak közelítésére a Lagrange-módszernél kényelmesebben használható a Taylor-módszer. Legyen $f \\in C^4$, és tekintsük az $f$ függvény $x_0$ körüli harmadrendű Taylor-képletét:

$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \\frac{f''(x_0)}{2}(x - x_0)^2 + \\frac{f'''(x_0)}{6}(x - x_0)^3 + \\frac{f^{(4)}(\\xi)}{24}(x - x_0)^4.
$$

Ha ebbe $x = x_0 - h$-t és $x = x_0 + h$-t helyettesítünk, akkor az

$$
f(x_0 - h) = f(x_0) - f'(x_0)h + \\frac{f''(x_0)}{2}h^2 - \\frac{f'''(x_0)}{6}h^3 + \\frac{f^{(4)}(\\xi_1)}{24}h^4
$$

és

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \\frac{f''(x_0)}{2}h^2 + \\frac{f'''(x_0)}{6}h^3 + \\frac{f^{(4)}(\\xi_2)}{24}h^4
$$

összefüggéseket kapjuk. Ezt a két egyenletet összeadva

$$
f(x_0 - h) + f(x_0 + h) = 2f(x_0) + f''(x_0)h^2 + \\frac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{24}h^4
$$

adódik, amiből

$$
f''(x_0) = \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \\frac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{24}h^2.
$$

Ebből látszik, hogy az

$$
f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}
$$

közelítő képlet $h^2$ nagyságrendű hibával rendelkezik. Az $\\dfrac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{24}h^2$ hibatagot egyszerűbb alakra hozhatjuk. A feltételek szerint $f^{(4)}$ folytonos, ezért a 2.2. tétel szerint valamely $\\xi_1$ és $\\xi_2$ közötti $\\xi$ pontban

$$
f^{(4)}(\\xi) = \\frac{f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)}{2}.
$$

Ezért

$$
f''(x_0) = \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2} - \\frac{f^{(4)}(\\xi)}{12}h^2.
\\tag{7.12}
$$

**7.4. példa.** Számítsuk ki az $f(x) = e^{x^2 + x}$ függvény második deriváltjának közelítő értékét $x = 0$-ban! A 7.4. táblázatban láthatók a numerikus eredmények. $\\quad\\square$

**7.4. táblázat.** Másodrendű derivált közelítése, $f(x) = e^{x^2 + x}$, $x_0 = 0$

| $h$ | közelítés | hiba |
|---|---|---|
| 0.100 | 3.0209256 | 2.0926e-02 |
| 0.010 | 3.0002083 | 2.0834e-04 |
| 0.001 | 3.0000021 | 2.0833e-06 |

A numerikus differenciálás egy instabil feladat. Ennek igazolására tekintsünk egy $f(x)$ függvényt és annak egy

$$
g(x) = f(x) + \\frac{1}{n}\\sin(n^2 x)
$$

perturbációját. Ha $f$ helyett a $g$ függvény numerikus deriváltját számoljuk ki, akkor a differencia képletekben használt függvényértékek nagy $n$ esetén csak kicsit változnak, a derivált értéke viszont jelentősen megváltozik, hiszen $g'(x) = f'(x) + n\\cos(n^2 x)$.

Vizsgáljuk most a kerekítési hiba hatását a numerikus differenciálási képletekre. Tekintsük pl. a legegyszerűbb numerikus differenciálási képletet, a (7.2) formulát. Ebben $f(x_0)$ és $f(x_0 + h)$ pontos értékei helyett $f_0$ ill. $f_1$ közelítő értékekkel számolunk, ahol

$$
f(x_0) = f_0 + e_0 \\quad\\text{és}\\quad f(x_0 + h) = f_1 + e_1.
$$

Ekkor

$$
f'(x_0) \\approx \\frac{f_1 - f_0}{h},
$$

és az elkövetett hiba

$$
\\begin{aligned}
f'(x_0) - \\frac{f_1 - f_0}{h} &= f'(x_0) - \\frac{f(x_0 + h) - f(x_0)}{h} + \\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{f_1 - f_0}{h} \\\\
&= -\\frac{h}{2}f''(\\xi) + \\frac{e_1 - e_0}{h}.
\\end{aligned}
\\tag{7.13}
$$

A (7.13) összefüggésből látszik, hogy a tényleges hiba két részből adódik. Az egyik a képlethiba, a másik pedig a kerekítési hiba. Ha a lépésköz kicsi, akkor a képlethiba kicsi lesz, viszont a kerekítési hiba tart a végtelenbe, ha $h \\to 0$.

**7.5. példa.** Tekintsük az $f(x) = e^x$ függvényt. Számítsuk ki $f'(1)$ közelítését elsőrendű jobb oldali differencia képlettel. Hogy a kerekítési hibák hatását vizsgáljuk, a számításokat 6- illetve 4-jegyű aritmetikát használva végeztük el. A 7.5. táblázatból látható, hogy 4-jegyű aritmetika használata esetén a lépéshossz 0.01-ről 0.001-re csökkentésekor az elkövetett hiba növekszik. $\\quad\\square$

**7.5. táblázat.** Kerekítési hibák hatása, $f(x) = e^x$, $x_0 = 1$

| | 6-jegyű aritmetikával | | 4-jegyű aritmetikával | |
|---|---|---|---|---|
| $h$ | differencia | hiba | differencia | hiba |
| 0.100 | 2.8589000 | 1.4062e-01 | 2.8600000 | 1.4172e-01 |
| 0.010 | 2.7320000 | 1.3718e-02 | 2.8000000 | 8.1718e-02 |
| 0.001 | 2.7200000 | 1.7182e-03 | 3.0000000 | 2.8172e-01 |

Az itt megismert módszereket könnyen átfogalmazhatjuk többváltozós függvények parciális deriváltjai közelítésére. A következő egyoldali ill. centrális közelítő képletek levezetését az olvasóra hagyjuk.

$$
\\frac{\\partial f(x_0, y_0)}{\\partial x} \\approx \\frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h},
\\tag{7.14}
$$

$$
\\frac{\\partial f(x_0, y_0)}{\\partial y} \\approx \\frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h},
\\tag{7.15}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2} \\approx \\frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}
\\tag{7.16}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial y^2} \\approx \\frac{f(x_0, y_0 + h) - 2f(x_0, y_0) + f(x_0, y_0 - h)}{h^2}
\\tag{7.17}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial x\\,\\partial y} \\approx \\frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}
\\tag{7.18}
$$

$$
\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2} \\approx \\frac{f(x_0 + 2h, y_0) - 2f(x_0 + h, y_0) + f(x_0, y_0)}{h^2}
\\tag{7.19}
$$

### Feladatok

1. Számítsa ki $f'(x_0)$ közelítő értékét elsőrendű jobb és bal oldali differencia képletek segítségével a $h = 0.1$ és $0.01$ lépésközt használva, ha
   - (a) $f(x) = x^4 - 6x^2 + 3x$, $x_0 = 1$,
   - (b) $f(x) = e^x \\sin x$, $x_0 = 0$,
   - (c) $f(x) = \\cos x^2$, $x_0 = 1$,
   - (d) $f(x) = x \\ln x$, $x_0 = 1$.

2. Ismételje meg az előző feladatot másodrendű differencia képleteket használva!

3. Számítsa ki $f''(x_0)$ közelítő értékét az 1. feladatban felsorolt függvényekre!

4. Vezesse le a (7.6) és (7.9) közelítő képleteket Taylor-módszerrel!

5. Vezesse le a (7.10) és (7.11) közelítő képleteket!

6. Vezesse le a következő közelítő képleteket:
$$
f'''(x_0) \\approx \\frac{1}{2h^3}\\Bigl(f(x_0 + 2h) - 2f(x_0 + h) + 2f(x_0 - h) - f(x_0 - 2h)\\Bigr),
$$
$$
f^{(4)}(x_0) \\approx \\frac{1}{h^4}\\Bigl(f(x_0 + 2h) - 4f(x_0 + h) + 6f(x_0) - 4f(x_0 - h) + f(x_0 + 2h)\\Bigr)
$$

7. Vezesse le a (7.14)–(7.19) közelítéseket
   - (a) egyváltozós függvényekre vonatkozó közelítő deriválási képletek,
   - (b) kétváltozós Lagrange-módszer,
   - (c) kétváltozós Taylor-módszer

   segítségével! Határozza meg a képlethiba rendjét!
`,wn=`## 7.2. Richardson-extrapoláció

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

1. Vezessen le egy hatodrendű képletet első derivált közelítésére a centrális differencia képletből kiindulva Richardson-extrapolációval! Alkalmazza a képletet az $f(x) = e^{x^2 + x}$ függvény deriváltjának közelítésére $x = 0$-ban a $h = 0.25$ lépésközt alkalmazva!

2. Fogalmazza meg a Richardson-extrapolációt arra az esetre, ha a közelítés képlethibája $h$ minden hatványát tartalmazhatja, azaz
$$
M = K(h) + a_1 h + a_2 h^2 + \\cdots + a_m h^m + b(x)
$$
alakú, ahol $|b(h)| \\leq B h^{m+1}$ valamely $B > 0$-ra!

3. Fogalmazza meg a Richardson-extrapolációt arra az általános esetre, amikor
$$
M = K(h) + a_1 h^{\\alpha_1} + a_2 h^{\\alpha_2} + \\cdots + a_m h^{\\alpha_m} + b(x)
$$
alakú, ahol $1 \\leq \\alpha_1 < \\alpha_2 < \\cdots < \\alpha_m$ egész számok és $|b(h)| \\leq B h^{\\alpha_m + 1}$ valamely $B > 0$-ra!

4. Készítsen harmadrendű képletet első derivált közelítésére Richardson-extrapolációval az egyoldali differencia formulából kiindulva!
`,qn=`## 7.3. Newton–Cotes-formulák

Legyen $f \\in C(a, b)$. A határozott integrált is, a deriválthoz hasonlóan, határérték segítségével definiáljuk. Riemann-összeg segítségével ez a következő alakban adható meg: vegyük az $[a, b]$ intervallum egy $a = x_0 < x_1 < \\cdots < x_n = b$ beosztását, és minden $[x_{i-1}, x_i]$ részintervallumból válasszunk ki egy $\\xi_i$ pontot. Ekkor az $\\int_a^b f(x)\\,dx$ integrál a $\\sum_{i=1}^{n} f(\\xi_i)(x_i - x_{i-1})$ alakú Riemann-féle közelítő összeg határértéke, ha a beosztás normája, azaz $\\max\\{x_i - x_{i-1} : i = 1, \\ldots, n\\}$ nullához tart. Egy ilyen Riemann-összeg például

$$
\\int_a^b f(x)\\,dx \\approx \\frac{b - a}{n}\\left(f\\left(\\frac{x_0 + x_1}{2}\\right) + f\\left(\\frac{x_1 + x_2}{2}\\right) + \\cdots + f\\left(\\frac{x_{n-1} + x_n}{2}\\right)\\right),
\\tag{7.26}
$$

ahol $x_i = a + i(b - a)/n$, $i = 0, 1, \\ldots, n$. Ezt a közelítő képletet **érintőformulának** nevezzük. (Az érintőformulával kapcsolatban lásd az 5. és 6. feladatokat!)

A numerikus differenciáláshoz hasonlóan integrál közelítő képletek levezetésére is alkalmazhatjuk a Lagrange-módszert: Az $[a, b]$ intervallumon vegyünk (többnyire ekvidisztáns) osztópontokat és legyen $L_n$ a választott alappontokhoz és az $f$ függvényhez tartozó interpolációs polinom. Tekintsük a $\\int_a^b L_n(x)\\,dx$-et mint a $\\int_a^b f(x)\\,dx$ közelítését. Feltéve, hogy $f \\in C^{n+1}(a, b)$, a közelítés hibáját megkapjuk a 6.5. tétel felhasználásával:

$$
\\begin{aligned}
\\int_a^b f(x)\\,dx ={}& \\sum_{k=0}^{n} f(x_k)\\int_a^b l_k(x)\\,dx \\\\
&+ \\int_a^b \\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\\cdots(x - x_n)\\,dx,
\\end{aligned}
\\tag{7.27}
$$

ahol $l_k(x)$ a (6.2) egyenlettel definiált (az alappontoktól függő) $n$-edfokú polinom. Ezzel egy

$$
\\int_a^b f(x)\\,dx \\approx \\sum_{k=0}^{n} c_k f(x_k)
\\tag{7.28}
$$

alakú integrál közelítő képletet kaptunk, ahol a $c_k$ súlyokat a

$$
c_k = \\int_a^b l_k(x)\\,dx
\\tag{7.29}
$$

integrálok adják. A (7.28) alakú közelítő képleteket **kvadratúra képleteknek** nevezzük, azokat a kvadratúra képleteket pedig, ahol a $c_k$ súlyokat a (7.29) integrálok adják, **Newton–Cotes-formuláknak** hívjuk. Ha az alappontokhoz az $a$ és $b$ pontok is hozzá tartoznak, akkor a (7.28)–(7.29) képletet **zárt Newton–Cotes-formuláknak**, ha az összes alappont az $(a, b)$ nyílt intervallumból van, akkor **nyílt Newton–Cotes-formuláknak** nevezzük. Egy kvadratúra formula **pontossági foka** $n$, ha a képlet az integrál pontos értékét adja vissza minden legfeljebb $n$-edfokú polinomra, de van olyan $n+1$-edfokú polinom, amelyre a képlet nem egyezik meg az integrál pontos értékével. Az $n + 1$ pontra felírt Newton–Cotes-formulák pontossági rendje tehát legalább $n$, hiszen az $n$-edfokú polinomot interpoláló Lagrange-polinom hibája 0. Megmutatható azonban, hogy páros $n$-re a Newton–Cotes-formula $(n + 1)$-edrendű polinomokra is pontos értéket ad vissza.

Vizsgáljuk meg $n = 1$-re a zárt Newton–Cotes-képletet. Legyen $x_0 = a$, $x_1 = b$, $h = b - a$. Ekkor

$$
L_1(x) = f(x_0)\\frac{x - x_1}{x_0 - x_1} + f(x_1)\\frac{x - x_0}{x_1 - x_0},
$$

így

$$
\\begin{aligned}
\\int_{x_0}^{x_1} L_1(x)\\,dx &= f(x_0)\\int_{x_0}^{x_1} \\frac{x - x_1}{x_0 - x_1}\\,dx + f(x_1)\\int_{x_0}^{x_1} \\frac{x - x_0}{x_1 - x_0}\\,dx \\\\
&= \\left[f(x_0)\\frac{(x - x_1)^2}{2(x_0 - x_1)} + f(x_1)\\frac{(x - x_0)^2}{2(x_1 - x_0)}\\right]_{x_0}^{x_1} \\\\
&= \\frac{h}{2}\\bigl(f(x_0) + f(x_1)\\bigr).
\\end{aligned}
$$

Ennek a formulának a hibáját (7.27) szerint az

$$
\\int_{x_0}^{x_1} f(x)\\,dx - \\frac{h}{2}\\bigl(f(x_0) + f(x_1)\\bigr) = \\int_{x_0}^{x_1} \\frac{f''(\\xi(x))}{2}(x - x_0)(x - x_1)\\,dx
$$

képlet adja. A hibatag átalakításához használjuk, hogy $(x - x_0)(x - x_1) < 0$, ha $x \\in (x_0, x_1)$, ezért alkalmazható a 2.6. tétel. Létezik tehát olyan $\\eta \\in (x_0, x_1)$ konstans, hogy

$$
\\int_{x_0}^{x_1} \\frac{f''(\\xi(x))}{2}(x - x_0)(x - x_1)\\,dx = \\frac{f''(\\eta)}{2}\\int_{x_0}^{x_1}(x - x_0)(x - x_1)\\,dx,
$$

tehát

$$
\\begin{aligned}
\\int_{x_0}^{x_1} f(x)\\,dx - \\frac{h}{2}\\bigl(f(x_0) + f(x_1)\\bigr) &= \\frac{f''(\\eta)}{2}\\int_{x_0}^{x_1}(x - x_0)^2 - h(x - x_0)\\,dx \\\\
&= \\frac{f''(\\eta)}{2}\\left[\\frac{(x - x_0)^3}{3} - h\\frac{(x - x_0)^2}{2}\\right]_{x_0}^{x_1} \\\\
&= -\\frac{h^3}{12}f''(\\eta).
\\end{aligned}
$$

Kaptuk tehát az ún. **elemi trapézformulát**:

$$
\\int_a^b f(x)\\,dx = \\frac{h}{2}\\bigl(f(a) + f(b)\\bigr) - \\frac{h^3}{12}f''(\\xi), \\qquad \\xi \\in (a, b).
\\tag{7.30}
$$

A képlet a nevét a geometriai jelentéséből kapta: a $\\frac{h}{2}\\bigl(f(a) + f(b)\\bigr)$ kifejezés az $f$ függvény grafikonjának $a$ és $b$ $x$-koordinátájú pontjához tartozó szelő alatti területet, azaz a trapéz területét adja vissza.

Az elemi trapéz formula akkor alkalmazható sikeresen, ha az intervallum hossza kicsi. Ha az intervallum hossza nem kicsi, akkor osszuk fel az $[a, b]$ intervallumot $n$ egyenlő hosszú részintervallumra az $x_i$ ($i = 0, 1, \\ldots, n$) osztópontokkal, ahol $x_i = a + ih$, $h = (b - a)/n$, és minden részintervallumra alkalmazzuk az elemi trapézformulát:

$$
\\begin{aligned}
\\int_a^b f(x)\\,dx &= \\sum_{i=1}^{n}\\int_{x_{i-1}}^{x_i} f(x)\\,dx \\\\
&= \\sum_{i=1}^{n}\\frac{h}{2}\\bigl(f(x_{i-1}) + f(x_i)\\bigr) - \\frac{h^3}{12}\\sum_{i=1}^{n} f''(\\xi_i) \\\\
&= \\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right) - \\frac{nh^3}{12}\\frac{1}{n}\\sum_{i=1}^{n} f''(\\xi_i).
\\end{aligned}
$$

Feltéve, hogy $f \\in C^2(a, b)$, a 2.2. tétel szerint az $\\frac{1}{n}\\sum_{i=1}^{n} f''(\\xi_i)$ átlagérték helyettesíthető egy $f''(\\xi)$ alakú függvényértékkel. Ezért, használva még a $hn = b - a$ összefüggést,

$$
\\int_a^b f(x)\\,dx = \\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right) - \\frac{(b - a)h^2}{12}f''(\\xi), \\qquad \\xi \\in (a, b).
\\tag{7.31}
$$

Ezt a képletet **összetett trapézformulának** nevezzük.

**7.7. példa.** Számítsuk ki az $\\int_0^1 x^2 e^x\\,dx$ integrál közelítő értékét a trapézformulával $h = 1$ (elemi trapézformula), $h = 0.5$ és $h = 0.25$ lépésközt használva! Könnyen ellenőrizhető, hogy a pontos integrál $\\int_0^1 x^2 e^x\\,dx = e - 2 = 0.7182818$. Az első esetben

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{1}{2}(0 + e) = 1.3591409.
$$

A hiba ekkor $0.6408591$. Ha $h = 0.5$-re alkalmazzuk az összetett trapézformulát, akkor

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.5}{2}(0 + 2 \\cdot 0.5^2 e^{0.5} + e) = 0.8856606.
$$

Ennek hibája $0.1673788$. Végül $h = 0.25$-re

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.25}{2}(0 + 2 \\cdot 0.25^2 e^{0.25} + 2 \\cdot 0.5^2 e^{0.5} + 2 \\cdot 0.75^2 e^{0.75} + e) = 0.7605963,
$$

aminek a hibája $0.0423145$. Látható, hogy felezve a lépésközt a hiba körülbelül a negyedrészére csökken, azaz a hiba $h$-ban másodrendű. $\\quad\\square$

Számítsuk most ki a (7.27) képletet $n = 2$-re, ekvidisztáns osztópontokat használva, azaz $x_0 = a$, $x_1 = x_0 + h$, $x_2 = b$, $h = (b - a)/2$.

$$
\\begin{aligned}
\\int_{x_0}^{x_2} L_2(x)\\,dx ={}& f(x_0)\\int_{x_0}^{x_2} \\frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)}\\,dx + f(x_1)\\int_{x_0}^{x_2} \\frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)}\\,dx \\\\
&+ f(x_2)\\int_{x_0}^{x_2} \\frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)}\\,dx \\\\
={}& \\frac{f(x_0)}{2h^2}\\int_{x_0}^{x_2}(x - x_2 + h)(x - x_2)\\,dx - \\frac{f(x_1)}{h^2}\\int_{x_0}^{x_2}(x - x_0)(x - x_0 - 2h)\\,dx \\\\
&+ \\frac{f(x_2)}{2h^2}\\int_{x_0}^{x_2}(x - x_0)(x - x_0 - h)\\,dx \\\\
={}& \\frac{f(x_0)}{2h^2}\\left[\\frac{(x - x_2)^3}{3} + h\\frac{(x - x_2)^2}{2}\\right]_{x_0}^{x_2} - \\frac{f(x_1)}{h^2}\\left[\\frac{(x - x_0)^3}{3} - 2h\\frac{(x - x_0)^2}{2}\\right]_{x_0}^{x_2} \\\\
&+ \\frac{f(x_2)}{2h^2}\\left[\\frac{(x - x_0)^3}{3} - h\\frac{(x - x_0)^2}{2}\\right]_{x_0}^{x_2} \\\\
={}& \\frac{h}{3}\\bigl(f(x_0) + 4f(x_1) + f(x_2)\\bigr).
\\end{aligned}
$$

A közelítés képlethibája

$$
\\int_{x_0}^{x_2} \\frac{f'''(\\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\\,dx.
$$

A különbség az előző esethez képest az, hogy most az $(x - x_0)(x - x_1)(x - x_2)$ szorzat különböző előjelű az $(x_0, x_1)$ és az $(x_1, x_2)$ intervallumokon, tehát nem alkalmazható a 2.6. tétel az $(x_0, x_2)$ intervallumon. Másképp járunk tehát el. Legyen

$$
\\begin{aligned}
p(x) &\\equiv \\int_{x_0}^{x}(t - x_0)(t - x_1)(t - x_2)\\,dt \\\\
&= \\int_{x_0}^{x}(t - x_1 + h)(t - x_1)(t - x_1 - h)\\,dt \\\\
&= \\left[\\frac{(t - x_1)^4}{4} - h^2\\frac{(t - x_1)^2}{2}\\right]_{x_0}^{x} \\\\
&= \\frac{(x - x_1)^4}{4} - \\frac{h^2(x - x_1)^2}{2} + \\frac{h^4}{4} \\\\
&= \\frac{1}{4}\\bigl((x - x_1)^2 - h^2\\bigr)^2.
\\end{aligned}
$$

Ekkor $p(x_0) = p(x_2) = 0$, így parciális integrálással

$$
\\int_{x_0}^{x_2} \\frac{f'''(\\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\\,dx = -\\int_{x_0}^{x_2} \\frac{d}{dx}\\frac{f'''(\\xi(x))}{6}\\,p(x)\\,dx.
$$

$p$ nemnegatív függvény, ezért a 2.6. és a 6.8. tételeket alkalmazva kapjuk, hogy

$$
\\int_{x_0}^{x_2} \\frac{f'''(\\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\\,dx = -\\frac{f^{(4)}(\\eta)}{24}\\int_{x_0}^{x_2} p(x)\\,dx = -\\frac{h^5}{90}f^{(4)}(\\eta).
$$

Beláttuk tehát az

$$
\\int_{x_0}^{x_2} f(x)\\,dx = \\frac{h}{3}\\bigl(f(x_0) + 4f(x_1) + f(x_2)\\bigr) - \\frac{h^5}{90}f^{(4)}(\\eta), \\qquad \\eta \\in (x_0, x_2)
\\tag{7.32}
$$

képletet, az ún. **elemi Simpson-formulát**.

A hibatag képlete mutatja, hogy a Simpson-formula meglepő módon harmadrendű polinomokra is az integrál pontos értékét adja vissza, mivel ekkor $f^{(4)}$ azonosan nulla. Másrészt a várt negyedrendű hiba helyett a képlet eggyel jobb, ötödrendű hibával rendelkezik. Ez a jobb hibarend megmutatható minden páros $n$-re felírt Newton–Cotes-képletnél.

Az összetett trapézformulához hasonlóan vezethető le az **összetett Simpson-formula**: Páros sok egyenlő részre, $2n$ részre osztjuk az $[a, b]$ intervallumot, azaz $h = (b - a)/2n$. Ekkor

$$
\\begin{aligned}
\\int_a^b f(x)\\,dx ={}& \\frac{h}{3}\\left(f(x_0) + 4\\sum_{i=1}^{n} f(x_{2i-1}) + 2\\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\\right) \\\\
&- \\frac{(b - a)h^4}{180}f^{(4)}(\\xi), \\qquad \\xi \\in (a, b).
\\end{aligned}
\\tag{7.33}
$$

**7.8. példa.** Számítsuk ki az $\\int_0^1 x^2 e^x\\,dx$ integrál közelítő értékét a Simpson-formulával $h = 0.5$ (elemi Simpson-formula), $h = 0.25$ és $h = 0.125$ lépésközt használva! Az első esetben

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.5}{3}(0 + 4 \\cdot 0.5^2 e^{0.5} + e) = 0.7278339.
$$

A hiba ekkor $0.0095520$. Ha $h = 0.25$-re alkalmazzuk az összetett Simpson-formulát, akkor

$$
\\int_0^1 x^2 e^x\\,dx \\approx \\frac{0.25}{3}(0 + 4 \\cdot 0.25^2 e^{0.25} + 2 \\cdot 0.5^2 e^{0.5} + 4 \\cdot 0.75^2 e^{0.75} + e) = 0.7189082.
$$

Ennek hibája $0.0006264$. Végül $h = 0.125$-re

$$
\\begin{aligned}
\\int_0^1 x^2 e^x\\,dx \\approx{}& \\frac{0.125}{3}\\Bigl(0 + 4 \\cdot 0.125^2 e^{0.125} + 2 \\cdot 0.25^2 e^{0.25} + 4 \\cdot 0.375^2 e^{0.375} + 2 \\cdot 0.5^2 e^{0.5} \\\\
&+ 4 \\cdot 0.625^2 e^{0.625} + 2 \\cdot 0.75^2 e^{0.75} + 4 \\cdot 0.875^2 e^{0.875} + e\\Bigr) = 0.7183215,
\\end{aligned}
$$

aminek a hibája $0.0000396$. $\\quad\\square$

Most bizonyítás nélkül felsorolunk néhány egyéb zárt elemi Newton–Cotes-formulát.

**Simpson $\\frac{3}{8}$-ados formula:**

$$
\\int_{x_0}^{x_3} f(x)\\,dx = \\frac{3h}{8}\\bigl(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)\\bigr) - \\frac{3h^5}{80}f^{(4)}(\\xi)
\\tag{7.34}
$$

**$n = 4$:**

$$
\\int_{x_0}^{x_4} f(x)\\,dx = \\frac{2h}{45}\\bigl(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)\\bigr) - \\frac{8h^7}{945}f^{(6)}(\\xi)
\\tag{7.35}
$$

Végül levezetés és bizonyítás nélkül felsoroljuk az első néhány nyílt Newton–Cotes-formulát:

$$
\\int_{x_{-1}}^{x_1} f(x)\\,dx = 2hf(x_0) + \\frac{h^3}{3}f''(\\xi),
\\tag{7.36}
$$

$$
\\int_{x_{-1}}^{x_2} f(x)\\,dx = \\frac{3h}{2}\\bigl(f(x_0) + f(x_1)\\bigr) + \\frac{3h^3}{4}f''(\\xi),
\\tag{7.37}
$$

$$
\\int_{x_{-1}}^{x_3} f(x)\\,dx = \\frac{4h}{3}\\bigl(2f(x_0) - f(x_1) + 2f(x_2)\\bigr) + \\frac{14h^5}{45}f^{(4)}(\\xi),
\\tag{7.38}
$$

$$
\\int_{x_{-1}}^{x_4} f(x)\\,dx = \\frac{5h}{24}\\bigl(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)\\bigr) + \\frac{95h^5}{144}f^{(4)}(\\xi).
\\tag{7.39}
$$

Zárjuk ezt a szakaszt a numerikus integrálás stabilitásának vizsgálatával.

**7.9. tétel.** Legyen $\\sum_{i=1}^{n} c_i f(x_i)$ egy olyan kvadratúra formula, amely pontos a konstans függvényekre és minden $c_i$ együttható pozitív. Legyen $y_i$ közelítése a pontos $f(x_i)$ függvényértékeknek, és tegyük fel, hogy $|y_i - f(x_i)| \\leq \\varepsilon$. Ekkor

$$
\\left|\\sum_{i=1}^{n} c_i f(x_i) - \\sum_{i=1}^{n} c_i y_i\\right| \\leq \\varepsilon(b - a).
$$

*Bizonyítás.* A feltétel szerint $(b - a) = \\int_a^b 1\\,dx = \\sum_{i=1}^{n} c_i$, ezért

$$
\\left|\\sum_{i=1}^{n} c_i f(x_i) - \\sum_{i=1}^{n} c_i y_i\\right| \\leq \\sum_{i=1}^{n} c_i |f(x_i) - y_i| \\leq \\varepsilon\\sum_{i=1}^{n} c_i = \\varepsilon(b - a). \\qquad\\square
$$

Megjegyezzük, hogy az összes ebben a fejezetben ismertetendő kvadratúra képlet pontos a konstans függvényekre, és a legtöbb pozitív súlyokat használ. Ezek a módszerek tehát numerikusan stabilak a függvény kerekítési hibájára nézve.

### Feladatok

1. Számítsa ki a következő integrálok közelítő értékét a trapézformula segítségével $h = 0.5, 0.25, 0.125$ lépésközt használva:
   - (a) $\\int_0^1 \\sin^3 x\\,dx$,
   - (b) $\\int_1^2 \\ln(x + 1)\\,dx$,
   - (c) $\\int_1^2 e^{1/x}\\,dx$.

2. Ismételje meg az 1. feladatot a Simpson-formulát használva!

3. Ismételje meg az 1. feladatot a (7.34)–(7.35) formulákat használva!

4. Ismételje meg az 1. feladatot a (7.36)–(7.39) formulákat használva!

5. Mutassa meg, hogy a (7.26) érintőformula az $[x_i, x_{i+1}]$ intervallumok felezőpontjához húzott érintő alatti területek összegét adja vissza!

6. Mutassa meg, hogy az érintőformula a Newton–Cotes-formulák egyik speciális esete, és vezesse le az érintőformula hibatagját!

7. Vezesse le a (7.34)–(7.35) formulákat (a hibatag alakja nélkül)!

8. Vezesse le a (7.36)–(7.39) formulákat (a hibatag alakja nélkül)!

9. Vezesse le a Simpson-formula képletét a trapézformulából Richardson-extrapolációval!
`,jn=`## 7.4. Gauss-féle kvadratúra formulák

Az előző szakaszban láttuk, hogy a Newton–Cotes-formulák a pontos integrált adják vissza bizonyos fokszámú polinomok esetén. Ebben a szakaszban olyan kvadratúra képletek levezetésével foglalkozunk, amelyek hasonló tulajdonságúak. Tekintsük az

$$
\\int_a^b f(x)\\,dx \\approx \\sum_{i=1}^{n} c_i f(x_i)
$$

általános kvadratúra képletet. Teljesül a következő állítás:

**7.10. tétel.** Egy

$$
Q(f) \\equiv \\sum_{i=1}^{n} c_i f(x_i)
\\tag{7.40}
$$

kvadratúra formula akkor és csak akkor pontos egy tetszőleges $p(x) = a_m x^m + a_{m-1} x^{m-1} + \\cdots + a_0$ legfeljebb $m$-edfokú polinomra, ha pontos az $x^i$ hatványfüggvényekre minden $i = 0, 1, \\ldots, m$-re.

*Bizonyítás.* Abból, hogy $Q$ pontos minden legfeljebb $m$-edfokú polinomra, természetesen következik, hogy pontos az $x^i$ hatványfüggvényekre minden $i = 0, 1, \\ldots, m$-re.

Most tegyük fel, hogy $Q$ pontos az $x^i$ hatványfüggvényekre minden $i = 0, 1, \\ldots, m$-re. Ekkor az integrál és a $Q$ kvadratúra formula linearitásából következik

$$
\\begin{aligned}
\\int_a^b a_m x^m + a_{m-1} x^{m-1} + \\cdots + a_0\\,dx &= a_m\\int_a^b x^m\\,dx + a_{m-1}\\int_a^b x^{m-1}\\,dx + \\cdots + a_0\\int_a^b 1\\,dx \\\\
&= a_m Q(x^m) + a_{m-1} Q(x^{m-1}) + \\cdots + a_0 Q(1) \\\\
&= Q(a_m x^m + a_{m-1} x^{m-1} + \\cdots + a_0). \\qquad\\square
\\end{aligned}
$$

A (7.40) képlettel definiált $Q$ kvadratúra formulában $2n$ darab paraméter szerepel, a $c_i, x_i$ számok ($i = 1, 2, \\ldots, n$). Azt várhatjuk tehát az előző tétel alapján, hogy egy ilyen kvadratúra képlet legfeljebb $(2n - 1)$-edfokú polinomokra adjon vissza pontos értéket, hiszen azokban is $2n$ együttható van. A 7.10. tétel szerint ekkor a $Q$ kvadratúra formula akkor és csak akkor pontos a legfeljebb $(2n - 1)$-edfokú polinomokra, ha teljesül a következő $2n$ egyenlet:

$$
\\begin{aligned}
\\int_a^b 1\\,dx &= \\sum_{i=1}^{n} c_i \\\\
\\int_a^b x\\,dx &= \\sum_{i=1}^{n} c_i x_i \\\\
\\int_a^b x^2\\,dx &= \\sum_{i=1}^{n} c_i x_i^2 \\\\
&\\;\\;\\vdots \\\\
\\int_a^b x^{2n-1}\\,dx &= \\sum_{i=1}^{n} c_i x_i^{2n-1}
\\end{aligned}
\\tag{7.41}
$$

Azt a (7.40) alakú kvadratúra formulát, amelyet a (7.41) egyenletrendszer megoldása segítségével írunk fel, **$n$ pontra felírt Gauss-féle kvadratúra formulának** nevezzük.

Most tekintsünk egy speciális esetet, legyen $[a, b] = [-1, 1]$ és $n = 2$. Ekkor a (7.41) egyenletekből kapjuk az integrálokat kiszámolva

$$
\\begin{aligned}
2 &= c_1 + c_2 \\\\
0 &= c_1 x_1 + c_2 x_2 \\\\
\\frac{2}{3} &= c_1 x_1^2 + c_2 x_2^2 \\\\
0 &= c_1 x_1^3 + c_2 x_2^3.
\\end{aligned}
$$

Könnyen ellenőrizhető, hogy az egyenletrendszernek egyértelmű megoldása van (a sorrendtől eltekintve): $c_1 = c_2 = 1$ és $x_1 = -\\frac{\\sqrt{3}}{3}$, $x_2 = \\frac{\\sqrt{3}}{3}$. A másodrendű Gauss-féle kvadratúra formula képlete tehát:

$$
\\int_{-1}^{1} f(x)\\,dx \\approx f\\left(-\\frac{\\sqrt{3}}{3}\\right) + f\\left(\\frac{\\sqrt{3}}{3}\\right).
\\tag{7.42}
$$

**7.11. példa.** Számítsuk ki az $f(x) = e^x$ függvény integráljának egy közelítését a $[-1, 1]$ intervallumon! A (7.42) Gauss-formula alapján

$$
\\int_{-1}^{1} e^x\\,dx \\approx e^{-\\frac{\\sqrt{3}}{3}} + e^{\\frac{\\sqrt{3}}{3}} = 2.3426961.
$$

Ezt az $e - 1/e = 2.350424$ pontos értékkel összehasonlítva kapjuk, hogy a közelítés hibája $0.0077062$, ami a képlet egyszerűségéhez viszonyítva nagyon kicsi. $\\quad\\square$

Szükségünk lesz az ortogonális függvények fogalmára. Az $f$ és $g$ függvényeket egymásra **ortogonálisnak** nevezzük az $[a, b]$ intervallumon, ha

$$
\\int_a^b f(x)g(x)\\,dx = 0.
$$

Megmutatjuk, hogy létezik polinomoknak egy olyan $(P_i)_{i=0,1,\\ldots}$ sorozata, amelyek páronként ortogonálisak a $[-1, 1]$ intervallumon, és $P_i$ $i$-edfokú polinom. Legyen $P_0(x) \\equiv 1$ és $P_1(x) \\equiv x$. Ekkor $P_0$ és $P_1$ ortogonális egymásra a $[-1, 1]$ intervallumon. Keressük $P_2$-t a $P_2(x) = x^2 + a_{2,1} P_1(x) + a_{2,0} P_0(x)$ alakban. Ekkor a kívánt ortogonalitás alapján

$$
\\begin{aligned}
0 &= \\int_{-1}^{1} P_2(x)P_0(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_0(x)\\,dx + a_{2,1}\\int_{-1}^{1} P_1(x)P_0(x)\\,dx + a_{2,0}\\int_{-1}^{1} P_0^2(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_0(x)\\,dx + a_{2,0}\\int_{-1}^{1} P_0^2(x)\\,dx,
\\end{aligned}
$$

amit megoldva

$$
a_{2,0} = -\\frac{\\int_{-1}^{1} x^2 P_0(x)\\,dx}{\\int_{-1}^{1} P_0^2(x)\\,dx}.
$$

Ehhez hasonlóan

$$
\\begin{aligned}
0 &= \\int_{-1}^{1} P_2(x)P_1(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_1(x)\\,dx + a_{2,1}\\int_{-1}^{1} P_1^2(x)\\,dx + a_{2,0}\\int_{-1}^{1} P_0(x)P_1(x)\\,dx \\\\
&= \\int_{-1}^{1} x^2 P_1(x)\\,dx + a_{2,1}\\int_{-1}^{1} P_1^2(x)\\,dx,
\\end{aligned}
$$

amiből

$$
a_{2,1} = -\\frac{\\int_{-1}^{1} x^2 P_1(x)\\,dx}{\\int_{-1}^{1} P_1^2(x)\\,dx}.
$$

$P_2$-t tehát egyértelműen felírhatjuk a keresett alakban. Ezt az eljárást folytatva ha $P_0, \\ldots, P_i$ már definiált, $P_{i+1}$-et a

$$
P_{i+1}(x) = x^{i+1} + a_{i+1,i} P_i(x) + \\cdots + a_{i+1,0} P_0(x)
\\tag{7.43}
$$

alakban keressük. Ekkor az előbbi számoláshoz hasonlóan kapjuk, hogy

$$
a_{i+1,j} = -\\frac{\\int_{-1}^{1} x^{i+1} P_j(x)\\,dx}{\\int_{-1}^{1} P_j^2(x)\\,dx}, \\qquad j = 0, 1, \\ldots, i,
\\tag{7.44}
$$

tehát $P_{i+1}$ egyértelműen definiálható. Ezt az eljárást **Gram–Schmidt-féle ortogonalizálásnak** nevezzük, a kapott $P_i$ polinomokat pedig $i$-edfokú **Legendre-polinomnak** hívjuk. Az első néhány Legendre-polinom képlete:

$$
\\begin{aligned}
P_0(x) &= 1, \\\\
P_1(x) &= x, \\\\
P_2(x) &= x^2 - \\frac{1}{3}, \\\\
P_3(x) &= x^3 - \\frac{3}{5}x, \\\\
P_4(x) &= x^4 - \\frac{6}{7}x^2 + \\frac{3}{35}
\\end{aligned}
$$

Megmutatható hogy a Legendre-polinomok teljesítik a

$$
P_{n+1}(x) = xP_n(x) - \\frac{n^2}{4n^2 - 1}P_{n-1}(x)
\\tag{7.45}
$$

rekurzív képletet. A Legendre-polinomok fontosabb tulajdonságait foglalja össze a következő tétel:

**7.12. tétel.** Legyen $P_i$ az $i$-edik Legendre-polinom. Ekkor

1. $P_i$ ortogonális egy tetszőleges legfeljebb $(i - 1)$-edfokú polinomra.

2. $P_i$ páros függvény ha $i$ páros, és páratlan függvény, ha $i$ páratlan.

3. $P_i$-nek $i$ darab különböző valós gyöke van a $(-1, 1)$ intervallumban, amelyek szimmetrikusak az origóra nézve.

4. Ha $(p_i)_{i=0,1,\\ldots}$ (pontosan) $i$-edfokú, páronként ortogonális polinomok egy sorozata, akkor minden $i$-re $p_i(x) = c_i P_i(x)$ valamely $c_i \\neq 0$ konstansra.

Az alábbi tétel szerint az $n$ pontra felírt Gauss-féle kvadratúra képlet alappontjai a $P_n$ Legendre-polinom gyökeivel egyeznek meg.

**7.13. tétel.** Tegyük fel, hogy az $x_1, x_2, \\ldots, x_n$ számok az $n$-edfokú Legendre-polinom gyökei, és legyen

$$
c_i = \\int_{-1}^{1} \\frac{(x - x_1)\\cdots(x - x_{i-1})(x - x_{i+1})\\cdots(x - x_n)}{(x_i - x_1)\\cdots(x_i - x_{i-1})(x_i - x_{i+1})\\cdots(x_i - x_n)}\\,dx.
\\tag{7.46}
$$

Ekkor egy tetszőleges legfeljebb $(2n - 1)$-edfokú $p$ polinomra

$$
\\int_{-1}^{1} p(x)\\,dx = \\sum_{i=1}^{n} c_i p(x_i).
$$

A következő tétel a Gauss-féle kvadratúra formula képlethibáját adja meg.

**7.14. tétel.** Legyen $f \\in C^{2n}(a, b)$. Ekkor létezik olyan $\\xi \\in (a, b)$, hogy az $n$ pontra felírt Gauss-féle kvadratúra formulára

$$
\\int_a^b f(x)\\,dx = \\sum_{k=1}^{n} c_k f(x_k) + \\frac{f^{(2n)}(\\xi)}{(2n)!}\\int_{-1}^{1} P_n^2(x)\\,dx.
$$

A 7.14. tételből belátható, hogy a Gauss-féle kvadratúra formula maradéktagja közelítőleg

$$
\\frac{\\pi f^{(2n)}(\\xi)}{4^n (2n)!}
$$

alakú, azaz ha például $f^{(2n)}$ korlátos $n$-től független korláttal, akkor a Gauss-féle kvadratúra formula exponenciális sebességgel tart 0-hoz, ha $n \\to \\infty$. Emlékezzünk, hogy a Newton–Cotes-formulák csak polinomiális sebességgel tartanak 0-hoz, ha $n \\to \\infty$.

**7.6. táblázat.** A Gauss-féle kvadratúra formula paraméterei

| $n$ | $x_i$ | $c_i$ |
|---|---|---|
| 2 | 0.5773502692 | 1.0000000000 |
|   | -0.5773502692 | 1.0000000000 |
| 3 | 0.7745966692 | 0.5555555556 |
|   | 0.0000000000 | 0.8888888889 |
|   | -0.7745966692 | 0.5555555556 |
| 4 | 0.8611363116 | 0.3478548451 |
|   | 0.3399810436 | 0.6521451549 |
|   | -0.3399810436 | 0.6521451549 |
|   | -0.8611363116 | 0.3478548451 |
| 5 | 0.9061798459 | 0.2369268850 |
|   | 0.5384693101 | 0.4786286705 |
|   | 0.0000000000 | 0.5688888889 |
|   | -0.5384693101 | 0.4786286705 |
|   | -0.9061798459 | 0.2369268850 |

A 7.6. táblázatban felsoroltuk az első néhány Legendre-polinom gyökeit, és az előző tételből kapott hozzá tartozó $c_i$ együtthatók értékét.

A Gauss-féle kvadratúra képletek a $[-1, 1]$ intervallumra vonatkoznak. Egy tetszőleges $[a, b]$ intervallumon vett integrált az $x = ((b - a)t + a + b)/2$ változó helyettesítéssel tudunk a $[-1, 1]$ intervallumra visszavezetni:

$$
\\int_a^b f(x)\\,dx = \\frac{b - a}{2}\\int_{-1}^{1} f\\left(\\frac{(b - a)t + a + b}{2}\\right)dt.
$$

**7.15. példa.** Közelítsük az $\\int_0^1 x^2 e^x\\,dx$ integrált másodrendű Gauss-féle kvadratúra képlettel:

$$
\\begin{aligned}
\\int_0^1 x^2 e^x\\,dx &= \\frac{1}{2}\\int_{-1}^{1}\\left(\\frac{t + 1}{2}\\right)^2 e^{(t+1)/2}\\,dt \\\\
&\\approx \\frac{1}{2}\\left(\\left(\\frac{-\\sqrt{3}/3 + 1}{2}\\right)^2 e^{(-\\sqrt{3}/3 + 1)/2} + \\left(\\frac{\\sqrt{3}/3 + 1}{2}\\right)^2 e^{(\\sqrt{3}/3 + 1)/2}\\right) \\\\
&= 0.7119418.
\\end{aligned}
$$

amelynek hibája $0.0063400$. $\\quad\\square$

### Feladatok

1. Alkalmazza a kétpontos Gauss-féle kvadratúra képletet az előző szakasz 1. feladatában felsorolt integrálokra!

2. Alkalmazza a 3, 4 és 5 pontra felírt Gauss-féle kvadratúra képleteket az előző szakasz 1. feladatában felsorolt integrálokra!
`,Nn=`# 7. fejezet

## Numerikus differenciálás és integrálás

Ebben a fejezetben először a numerikus differenciálás különböző képleteit vizsgáljuk, majd a Richardson-extrapolációt definiáljuk, mellyel egy adott rendű numerikus módszer képletéből magasabbrendű formulákat nyerhetünk. Ezután határozott integrálok közelítésének két népszerű módszerét tanulmányozzuk: Newton–Cotes- és Gauss-féle kvadratúra formulák. A Gauss-féle kvadratúra formula levezetése kapcsán az ortogonális polinomok elméletének elemeit is ismertetjük.
`,Ge=[{id:"7.1",slug:"7_1",title:{en:"Numerical differentiation",hu:"Numerikus differenciálás"}},{id:"7.2",slug:"7_2",title:{en:"Richardson's extrapolation",hu:"Richardson-extrapoláció"}},{id:"7.3",slug:"7_3",title:{en:"Newton–Cotes Formulas",hu:"Newton–Cotes-formulák"}},{id:"7.4",slug:"7_4",title:{en:"Gaussian Quadrature",hu:"Gauss-féle kvadratúra formulák"}}],Sn=[{id:"q1",type:"mcq",topic:"7.1",prompt:{en:"What is the truncation error of the first-order forward difference formula f'(x₀) ≈ (f(x₀+h) − f(x₀))/h?",hu:"Mekkora az elsőrendű jobb oldali differencia képlet, f'(x₀) ≈ (f(x₀+h) − f(x₀))/h, képlethibája?"},options:{en:["−(h/2)·f''(ξ)","−(h²/6)·f'''(ξ)","−(h⁴/30)·f⁽⁵⁾(ξ)","−(h²/12)·f''(ξ)"],hu:["−(h/2)·f''(ξ)","−(h²/6)·f'''(ξ)","−(h⁴/30)·f⁽⁵⁾(ξ)","−(h²/12)·f''(ξ)"]},answer:0,explanation:{en:"From the Taylor expansion, f'(x₀) = (f(x₀+h) − f(x₀))/h − (h/2)·f''(ξ), so the error is first-order in h.",hu:"A Taylor-sorból f'(x₀) = (f(x₀+h) − f(x₀))/h − (h/2)·f''(ξ), tehát a hiba h-ban elsőrendű."}},{id:"q2",type:"mcq",topic:"7.1",prompt:{en:"Which formula is the second-order central difference for f'(x₀)?",hu:"Melyik képlet a másodrendű centrális differencia f'(x₀)-ra?"},options:{en:["(f(x₀+h) − f(x₀−h)) / (2h)","(f(x₀+h) − f(x₀)) / h","(f(x₀) − f(x₀−h)) / h","(f(x₀+h) − 2f(x₀) + f(x₀−h)) / h²"],hu:["(f(x₀+h) − f(x₀−h)) / (2h)","(f(x₀+h) − f(x₀)) / h","(f(x₀) − f(x₀−h)) / h","(f(x₀+h) − 2f(x₀) + f(x₀−h)) / h²"]},answer:0,explanation:{en:"The three-point midpoint formula (7.9) uses points x₀±h and is second-order in h.",hu:"A hárompontos felezőpont képlet (7.9) az x₀±h pontokat használja, és h-ban másodrendű."}},{id:"q3",type:"mcq",topic:"7.1",prompt:{en:"The central difference approximation of the second derivative, (f(x₀−h) − 2f(x₀) + f(x₀+h))/h², has error of order:",hu:"A második derivált centrális közelítésének, (f(x₀−h) − 2f(x₀) + f(x₀+h))/h², hibarendje:"},options:{en:["O(h²)","O(h)","O(h⁴)","O(h³)"],hu:["O(h²)","O(h)","O(h⁴)","O(h³)"]},answer:0,explanation:{en:"Formula (7.13) gives an error term −(f⁽⁴⁾(ξ)/12)·h², i.e. second order.",hu:"A (7.13) képlet hibatagja −(f⁽⁴⁾(ξ)/12)·h², azaz másodrendű."}},{id:"q4",type:"truefalse",topic:"7.1",prompt:{en:"Numerical differentiation is an unstable problem: as h → 0 the rounding error can grow without bound.",hu:"A numerikus differenciálás instabil feladat: ha h → 0, a kerekítési hiba korlátlanul nőhet."},answer:!0,explanation:{en:"The rounding term (e₁ − e₀)/h tends to ∞ as h → 0, even though the truncation error shrinks.",hu:"A kerekítési tag (e₁ − e₀)/h a ∞-hez tart, ha h → 0, miközben a képlethiba csökken."}},{id:"q5",type:"mcq",topic:"7.2",prompt:{en:"Richardson's extrapolation applied once to a second-order formula yields a formula of which order?",hu:"A Richardson-extrapolációt egyszer alkalmazva egy másodrendű képletre, milyen rendű képletet kapunk?"},options:{en:["Fourth order","Third order","Second order","Sixth order"],hu:["Negyedrendű","Harmadrendű","Másodrendű","Hatodrendű"]},answer:0,explanation:{en:"Combining K(h) and K(h/2) cancels the h² term, leaving a fourth-order formula K⁽¹⁾(h).",hu:"K(h) és K(h/2) kombinálása kiejti a h² tagot, így negyedrendű K⁽¹⁾(h) képletet ad."}},{id:"q6",type:"mcq",topic:"7.2",prompt:{en:"Richardson's extrapolation assumes the truncation error has which special form?",hu:"A Richardson-extrapoláció szerint a képlethiba milyen speciális alakú?"},options:{en:["Only even powers of h: a₂h² + a₄h⁴ + …","Only odd powers of h","A single term Bh","An arbitrary smooth function with no power structure"],hu:["Csak h páros hatványai: a₂h² + a₄h⁴ + …","Csak h páratlan hatványai","Egyetlen Bh tag","Tetszőleges sima függvény hatványszerkezet nélkül"]},answer:0,explanation:{en:"Relation (7.21): M = K(h) + a₂h² + a₄h⁴ + … — even-order powers, which lets successive terms cancel.",hu:"A (7.21) összefüggés: M = K(h) + a₂h² + a₄h⁴ + … — páros rendű hatványok, így a tagok sorra kiejthetők."}},{id:"q7",type:"mcq",topic:"7.3",prompt:{en:"What is the error term of the basic (elementary) trapezoidal rule on [a, b] with h = b − a?",hu:"Mi az elemi trapézformula hibatagja az [a, b]-n, ahol h = b − a?"},options:{en:["−(h³/12)·f''(ξ)","−(h⁵/90)·f⁽⁴⁾(ξ)","−(h/2)·f''(ξ)","−(h⁴/180)·f⁽⁴⁾(ξ)"],hu:["−(h³/12)·f''(ξ)","−(h⁵/90)·f⁽⁴⁾(ξ)","−(h/2)·f''(ξ)","−(h⁴/180)·f⁽⁴⁾(ξ)"]},answer:0,explanation:{en:"Trapezoidal rule (7.31): ∫ ≈ (h/2)(f(a)+f(b)) − (h³/12)·f''(ξ).",hu:"Trapézformula (7.31): ∫ ≈ (h/2)(f(a)+f(b)) − (h³/12)·f''(ξ)."}},{id:"q8",type:"truefalse",topic:"7.3",prompt:{en:"Simpson's rule integrates all cubic (third-degree) polynomials exactly.",hu:"A Simpson-formula minden harmadfokú polinomot pontosan integrál."},answer:!0,explanation:{en:"Its error involves f⁽⁴⁾, which vanishes for polynomials of degree ≤ 3, so Simpson is exact for cubics.",hu:"Hibája f⁽⁴⁾-t tartalmaz, ami legfeljebb harmadfokú polinomra nulla, így a Simpson pontos köbös polinomokra."}},{id:"q9",type:"mcq",topic:"7.3",prompt:{en:"The composite Simpson's rule has a global error of order:",hu:"Az összetett Simpson-formula globális hibarendje:"},options:{en:["O(h⁴)","O(h²)","O(h⁵)","O(h³)"],hu:["O(h⁴)","O(h²)","O(h⁵)","O(h³)"]},answer:0,explanation:{en:"Formula (7.34): error = −((b−a)h⁴/180)·f⁽⁴⁾(ξ), i.e. fourth order in h.",hu:"A (7.34) képlet: hiba = −((b−a)h⁴/180)·f⁽⁴⁾(ξ), azaz h-ban negyedrendű."}},{id:"q10",type:"numeric",topic:"7.3",prompt:{en:"Using the basic trapezoidal rule (h = 1) for ∫₀¹ x²eˣ dx = (1/2)(0 + e), what value do you get? (4 decimals)",hu:"Az elemi trapézformulával (h = 1) ∫₀¹ x²eˣ dx = (1/2)(0 + e) esetén milyen értéket kapsz? (4 tizedes)"},answer:1.3591,tolerance:.001,explanation:{en:"(1/2)(0 + e) = 1.3591409 (Example 7.7).",hu:"(1/2)(0 + e) = 1.3591409 (7.7. példa)."}},{id:"q11",type:"mcq",topic:"7.4",prompt:{en:"An n-point Gaussian quadrature formula is exact for all polynomials of degree at most:",hu:"Az n pontra felírt Gauss-féle kvadratúra formula minden legfeljebb hányadfokú polinomra pontos?"},options:{en:["2n − 1","n","n + 1","2n + 1"],hu:["2n − 1","n","n + 1","2n + 1"]},answer:0,explanation:{en:"It has 2n free parameters (cᵢ, xᵢ), giving exactness up to degree 2n − 1.",hu:"2n szabad paramétere van (cᵢ, xᵢ), így 2n − 1 fokszámig pontos."}},{id:"q12",type:"mcq",topic:"7.4",prompt:{en:"The mesh points (nodes) of the n-point Gaussian quadrature on [−1, 1] are:",hu:"Az n pontra felírt Gauss-kvadratúra alappontjai a [−1, 1]-en:"},options:{en:["the roots of the nth Legendre polynomial Pₙ","equidistant points a + ih","the roots of the nth Chebyshev polynomial","the endpoints ±1 and the midpoint 0"],hu:["az n-edik Legendre-polinom Pₙ gyökei","ekvidisztáns pontok a + ih","az n-edik Csebisev-polinom gyökei","a végpontok ±1 és a felezőpont 0"]},answer:0,explanation:{en:"Theorem 7.13: the nodes are the roots of the nth Legendre polynomial.",hu:"A 7.13. tétel szerint az alappontok az n-edik Legendre-polinom gyökei."}},{id:"q13",type:"numeric",topic:"7.4",prompt:{en:"The two-point Gauss approximation of ∫₋₁¹ eˣ dx is e^(−√3/3) + e^(√3/3). Enter its value. (4 decimals)",hu:"Az ∫₋₁¹ eˣ dx kétpontos Gauss-közelítése e^(−√3/3) + e^(√3/3). Add meg az értékét! (4 tizedes)"},answer:2.3427,tolerance:.001,explanation:{en:"e^(−√3/3) + e^(√3/3) = 2.3426961 (Example 7.11).",hu:"e^(−√3/3) + e^(√3/3) = 2.3426961 (7.11. példa)."}},{id:"q14",type:"truefalse",topic:"7.4",prompt:{en:"As n → ∞, the error of Gaussian quadrature can decrease exponentially, faster than Newton–Cotes (polynomial speed).",hu:"Ha n → ∞, a Gauss-kvadratúra hibája exponenciálisan csökkenhet, gyorsabban mint a Newton–Cotes (polinomiális sebesség)."},answer:!0,explanation:{en:"The error ~ πf⁽²ⁿ⁾(ξ)/(4ⁿ(2n)!) decays exponentially for bounded derivatives.",hu:"A hiba ~ πf⁽²ⁿ⁾(ξ)/(4ⁿ(2n)!) exponenciálisan csökken korlátos deriváltak esetén."}}],Tn=Ge,Be=Sn,Ln=Object.assign({"../content/lessons/en/7_1.md":_n,"../content/lessons/en/7_2.md":bn,"../content/lessons/en/7_3.md":kn,"../content/lessons/en/7_4.md":yn,"../content/lessons/en/intro.md":vn,"../content/lessons/hu/7_1.md":zn,"../content/lessons/hu/7_2.md":wn,"../content/lessons/hu/7_3.md":qn,"../content/lessons/hu/7_4.md":jn,"../content/lessons/hu/intro.md":Nn});function Cn(a,e){return Ln[`../content/lessons/${e}/${a}.md`]}const Pn=async(a,e)=>{const t=Tn.find(i=>i.id===a||i.slug===a),n=t?Cn(t.slug,e):void 0;if(!t||n===void 0)throw new Error("Lesson not found");return{id:t.id,slug:t.slug,lang:e,title:t.title[e],markdown:n}},An=async a=>Be.map(e=>({id:e.id,type:e.type,topic:e.topic,prompt:e.prompt[a],...e.options?{options:e.options[a]}:{}}));async function On(a,e,t){const n=Be.find(r=>r.id===a);if(!n)throw new Error("Question not found");let i=!1;if(n.type==="numeric"){const r=typeof e=="number"?e:Number(e),o=n.tolerance??1e-6;i=Number.isFinite(r)&&Math.abs(r-n.answer)<=o}else n.type==="truefalse"?i=!!e===n.answer:i=Number(e)===n.answer;return{correct:i,answer:n.answer,explanation:n.explanation[t]}}function se({markdown:a}){return f.jsx("div",{className:"lesson",children:f.jsx(rt,{remarkPlugins:[st,ot],rehypePlugins:[[it,{throwOnError:!1,trust:!0}]],children:a})})}const En={"7_1":[{term:{en:"Numerical differentiation",hu:"Numerikus differenciálás"},def:{en:"Approximating $f'(x_0)$ (or higher derivatives) from a few function values, using difference quotients derived from the limit definition — together with a bound on the truncation error.",hu:"Az $f'(x_0)$ (vagy magasabb deriváltak) közelítése néhány függvényértékből, a határérték-definícióból származó differenciahányadosokkal — a csonkítási hiba korlátjával együtt."}},{term:{en:"Two derivation methods",hu:"Két levezetési módszer"},def:{en:"**Lagrange's method**: differentiate the interpolating polynomial $L_n$ and use $L_n'(x_0)$. **Taylor's method**: expand $f$ around $x_0$ and combine the expansions to cancel unwanted terms. Both give the same formulas with explicit error terms.",hu:"**Lagrange-módszer**: deriváld az $L_n$ interpolációs polinomot, és használd $L_n'(x_0)$-t. **Taylor-módszer**: fejtsd $f$-et $x_0$ körül, és kombináld a sorfejtéseket a nem kívánt tagok kioltására. Mindkettő ugyanazokat a képleteket adja, explicit hibataggal."}},{term:{en:"Forward/backward difference $O(h)$",hu:"Előre/hátra differencia $O(h)$"},def:{en:"$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0)}{h}$ with error $-\\tfrac{h}{2}f''(\\xi)$ — first-order accurate. Backward difference uses $f(x_0)-f(x_0-h)$.",hu:"$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0)}{h}$, hibája $-\\tfrac{h}{2}f''(\\xi)$ — elsőrendben pontos. A hátra differencia $f(x_0)-f(x_0-h)$-t használ."}},{term:{en:"Central difference $O(h^2)$",hu:"Centrális differencia $O(h^2)$"},def:{en:"$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0-h)}{2h}$ with error $-\\tfrac{h^2}{6}f'''(\\xi)$ — second-order accurate, the symmetric terms cancel. More accurate than the one-sided formula for the same $h$.",hu:"$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0-h)}{2h}$, hibája $-\\tfrac{h^2}{6}f'''(\\xi)$ — másodrendben pontos, a szimmetrikus tagok kioltják egymást. Pontosabb az egyoldali képletnél azonos $h$ mellett."}},{term:{en:"Second-derivative formula",hu:"Második derivált képlet"},def:{en:"$f''(x_0)\\approx\\dfrac{f(x_0+h)-2f(x_0)+f(x_0-h)}{h^2}$ with error $-\\tfrac{h^2}{12}f^{(4)}(\\xi)$ — the standard $O(h^2)$ three-point stencil.",hu:"$f''(x_0)\\approx\\dfrac{f(x_0+h)-2f(x_0)+f(x_0-h)}{h^2}$, hibája $-\\tfrac{h^2}{12}f^{(4)}(\\xi)$ — a szokásos $O(h^2)$ hárompontos sablon."}},{term:{en:"Truncation vs round-off (optimal $h$)",hu:"Csonkítás vs kerekítés (optimális $h$)"},def:{en:"Shrinking $h$ reduces the truncation error ($\\propto h^p$) but inflates the round-off error ($\\propto \\varepsilon/h$). There is an optimal $h$ balancing the two; going smaller makes the result worse, not better.",hu:"$h$ csökkentése mérsékli a csonkítási hibát ($\\propto h^p$), de felnagyítja a kerekítési hibát ($\\propto \\varepsilon/h$). Van egy optimális $h$, amely kiegyensúlyozza a kettőt; ennél kisebb $h$ rontja, nem javítja az eredményt."}},{term:{en:"Higher-order (multi-point) formulas",hu:"Magasabb rendű (többpontos) képletek"},def:{en:"Using more mesh points (e.g. the five-point stencil) raises the order of accuracy, at the cost of more function evaluations and more sensitivity to round-off. Derived the same way from $L_n$ or Taylor.",hu:"Több alappont (pl. az ötpontos sablon) növeli a pontossági rendet, több függvénykiértékelés és nagyobb kerekítés-érzékenység árán. Ugyanúgy vezethető le $L_n$-ből vagy Taylorral."}}],"7_2":[{term:{en:"Richardson extrapolation",hu:"Richardson-extrapoláció"},def:{en:"A way to boost the order of an approximation $K(h)\\to K$ by combining values at two step sizes so the leading error term cancels — turning an $O(h^p)$ formula into $O(h^{p+q})$.",hu:"Egy közelítés $K(h)\\to K$ rendjének növelése két lépésközhöz tartozó érték kombinálásával úgy, hogy a vezető hibatag kiessen — egy $O(h^p)$ képletből $O(h^{p+q})$-t csinál."}},{term:{en:"Cancelling the leading error",hu:"A vezető hiba kioltása"},def:{en:"If $K(h)=K+a_p h^p+a_{p+q}h^{p+q}+\\cdots$, then $\\dfrac{2^p K(h/2)-K(h)}{2^p-1}$ eliminates the $h^p$ term, leaving a higher-order approximation.",hu:"Ha $K(h)=K+a_p h^p+a_{p+q}h^{p+q}+\\cdots$, akkor $\\dfrac{2^p K(h/2)-K(h)}{2^p-1}$ kiküszöböli az $h^p$ tagot, magasabb rendű közelítést hagyva."}},{term:{en:"Repeated extrapolation",hu:"Ismételt extrapoláció"},def:{en:"Apply the cancellation recursively, $K^{(j)}(h)$ from $K^{(j-1)}(h)$ and $K^{(j-1)}(h/2)$, removing successive error terms — each level gains accuracy. Builds a triangular table like Romberg integration.",hu:"Alkalmazd a kioltást rekurzívan, $K^{(j)}(h)$-t $K^{(j-1)}(h)$-ból és $K^{(j-1)}(h/2)$-ből, sorra eltávolítva a hibatagokat — minden szint pontosabb. A Romberg-integráláshoz hasonló háromszög táblát épít."}},{term:{en:"Even-power error (central difference)",hu:"Páros hatványú hiba (centrális differencia)"},def:{en:"The central difference error expands in *even* powers $h^2,h^4,\\dots$, so each extrapolation step jumps the order by 2: $O(h^2)\\to O(h^4)\\to O(h^6)$ (Example 7.6).",hu:"A centrális differencia hibája *páros* hatványokban $h^2,h^4,\\dots$ fejlik ki, így minden extrapolációs lépés 2-vel ugrik: $O(h^2)\\to O(h^4)\\to O(h^6)$ (7.6. példa)."}},{term:{en:"General-power variant",hu:"Általános hatványú változat"},def:{en:"When the error contains all powers of $h$ (or general exponents), the same idea works with the appropriate factor $2^{p_j}$ at each step — the method is not limited to even powers.",hu:"Ha a hiba minden $h$-hatványt (vagy általános kitevőket) tartalmaz, ugyanaz az ötlet működik a megfelelő $2^{p_j}$ tényezővel lépésenként — a módszer nem korlátozódik páros hatványokra."}},{term:{en:"Why it works cheaply",hu:"Miért olcsó"},def:{en:"Extrapolation reuses already-computed values $K(h),K(h/2),\\dots$ with simple linear combinations — no new function evaluations beyond the halved-step ones — to get high-order accuracy.",hu:"Az extrapoláció a már kiszámolt $K(h),K(h/2),\\dots$ értékeket használja újra egyszerű lineáris kombinációkkal — a felezett lépésközűeken kívül nincs új függvénykiértékelés — magas rendű pontosságért."}}],"7_3":[{term:{en:"Newton–Cotes formulas",hu:"Newton–Cotes-formulák"},def:{en:"Quadrature rules obtained by integrating the Lagrange interpolant on equidistant nodes: $\\int_a^b f\\approx\\int_a^b L_n=\\sum_i c_i f(x_i)$. The trapezoidal ($n=1$) and Simpson ($n=2$) rules are the first cases.",hu:"Kvadratúraképletek, amelyeket az egyenközű alappontokon vett Lagrange-interpoláns integrálásával kapunk: $\\int_a^b f\\approx\\int_a^b L_n=\\sum_i c_i f(x_i)$. A trapéz ($n=1$) és a Simpson ($n=2$) szabály az első esetek."}},{term:{en:"Degree of precision",hu:"Pontossági fok"},def:{en:"The largest $n$ for which a quadrature is exact on all polynomials of degree $\\le n$ (but not $n+1$). The $(n+1)$-point Newton–Cotes rule has degree $\\ge n$; for **even** $n$ it gains one extra (degree $n+1$).",hu:"A legnagyobb $n$, amelyre a kvadratúra minden legfeljebb $n$-edfokú polinomra pontos (de $n+1$-re nem). Az $(n+1)$-pontos Newton–Cotes szabály foka $\\ge n$; **páros** $n$-re egy extra fokot nyer (foka $n+1$)."}},{term:{en:"Trapezoidal rule",hu:"Trapézszabály"},def:{en:"$\\int_{x_0}^{x_1}f\\approx\\tfrac{h}{2}(f(x_0)+f(x_1))$ with error $-\\tfrac{h^3}{12}f''(\\eta)$ — exact for linear functions (degree of precision 1).",hu:"$\\int_{x_0}^{x_1}f\\approx\\tfrac{h}{2}(f(x_0)+f(x_1))$, hibája $-\\tfrac{h^3}{12}f''(\\eta)$ — lineáris függvényekre pontos (pontossági fok 1)."}},{term:{en:"Composite trapezoidal rule",hu:"Összetett trapézszabály"},def:{en:"Apply the trapezoidal rule on $n$ equal subintervals: $\\tfrac{h}{2}\\big(f_0+2f_1+\\cdots+2f_{n-1}+f_n\\big)$ with total error $-\\tfrac{(b-a)h^2}{12}f''(\\xi)$ — $O(h^2)$.",hu:"A trapézszabály $n$ egyenlő részintervallumon: $\\tfrac{h}{2}\\big(f_0+2f_1+\\cdots+2f_{n-1}+f_n\\big)$, teljes hibája $-\\tfrac{(b-a)h^2}{12}f''(\\xi)$ — $O(h^2)$."}},{term:{en:"Simpson's rule",hu:"Simpson-szabály"},def:{en:"$\\int_{x_0}^{x_2}f\\approx\\tfrac{h}{3}(f_0+4f_1+f_2)$ with error $-\\tfrac{h^5}{90}f^{(4)}(\\xi)$ — exact for cubics (degree of precision 3) despite using only 3 points. The composite form splits $[a,b]$ into $2n$ parts.",hu:"$\\int_{x_0}^{x_2}f\\approx\\tfrac{h}{3}(f_0+4f_1+f_2)$, hibája $-\\tfrac{h^5}{90}f^{(4)}(\\xi)$ — köbös polinomokra pontos (pontossági fok 3), pedig csak 3 pontot használ. Az összetett alak $[a,b]$-t $2n$ részre osztja."}},{term:{en:"Simpson's 3/8 rule",hu:"Simpson-féle 3/8 szabály"},def:{en:"The 4-point ($n=3$) Newton–Cotes rule $\\tfrac{3h}{8}(f_0+3f_1+3f_2+f_3)$, also degree of precision 3. Useful when the subinterval count is not even.",hu:"A 4-pontos ($n=3$) Newton–Cotes szabály $\\tfrac{3h}{8}(f_0+3f_1+3f_2+f_3)$, szintén 3-as pontossági fokú. Akkor hasznos, ha a részintervallumok száma nem páros."}},{term:{en:"Stability of quadrature (Thm 7.9)",hu:"Kvadratúra stabilitása (7.9. tétel)"},def:{en:"If a quadrature is exact for constants and all weights $c_i>0$, then data errors $|y_i-f(x_i)|\\le\\varepsilon$ produce an output error $\\le(b-a)\\varepsilon$ — bounded, so the rule is stable. Negative weights (high-$n$ Newton–Cotes) lose this.",hu:"Ha egy kvadratúra konstansokra pontos és minden súly $c_i>0$, akkor a $|y_i-f(x_i)|\\le\\varepsilon$ adathibák $\\le(b-a)\\varepsilon$ kimeneti hibát adnak — korlátos, tehát a szabály stabil. A negatív súlyok (magas $n$-ű Newton–Cotes) ezt elrontják."}}],"7_4":[{term:{en:"Gaussian quadrature",hu:"Gauss-féle kvadratúra"},def:{en:"$\\int_a^b f\\approx\\sum_{i=1}^n c_i f(x_i)$ where **both** the weights $c_i$ and the nodes $x_i$ are chosen optimally — unlike Newton–Cotes, which fixes equidistant nodes.",hu:"$\\int_a^b f\\approx\\sum_{i=1}^n c_i f(x_i)$, ahol **mind** a $c_i$ súlyokat, **mind** az $x_i$ alappontokat optimálisan választjuk — szemben a Newton–Cotes-szal, amely rögzíti az egyenközű alappontokat."}},{term:{en:"Maximal degree of precision $2n-1$ (Thm 7.10)",hu:"Maximális pontossági fok $2n-1$ (7.10. tétel)"},def:{en:"With $2n$ free parameters ($n$ nodes + $n$ weights), an $n$-point formula can be (and is) exact for all polynomials of degree $\\le 2n-1$ — roughly double the precision of an $n$-point Newton–Cotes rule.",hu:"$2n$ szabad paraméterrel ($n$ alappont + $n$ súly) egy $n$-pontos képlet minden legfeljebb $2n-1$-edfokú polinomra pontos lehet (és az is) — nagyjából kétszer akkora pontosság, mint az $n$-pontos Newton–Cotes."}},{term:{en:"Orthogonal polynomials",hu:"Ortogonális polinomok"},def:{en:"$f,g$ are orthogonal on $[a,b]$ if $\\int_a^b fg=0$. Gram–Schmidt on $1,x,x^2,\\dots$ builds a sequence $P_i$ of degree-$i$ pairwise-orthogonal polynomials — on $[-1,1]$ these are the Legendre polynomials.",hu:"$f,g$ ortogonális $[a,b]$-n, ha $\\int_a^b fg=0$. Az $1,x,x^2,\\dots$-ra alkalmazott Gram–Schmidt egy $i$-edfokú, páronként ortogonális $P_i$ sorozatot épít — $[-1,1]$-en ezek a Legendre-polinomok."}},{term:{en:"Legendre polynomials (Thm 7.12)",hu:"Legendre-polinomok (7.12. tétel)"},def:{en:"$P_0=1,P_1=x,P_2=x^2-\\tfrac13,\\dots$, satisfying the recursion $(i+1)P_{i+1}=(2i+1)xP_i-iP_{i-1}$. Each $P_i$ is orthogonal to every lower-degree polynomial and has $i$ distinct real roots in $(-1,1)$.",hu:"$P_0=1,P_1=x,P_2=x^2-\\tfrac13,\\dots$, a $(i+1)P_{i+1}=(2i+1)xP_i-iP_{i-1}$ rekurzióval. Minden $P_i$ ortogonális minden alacsonyabb fokú polinomra, és $i$ különböző valós gyöke van $(-1,1)$-ben."}},{term:{en:"Nodes = Legendre roots (Thm 7.13)",hu:"Alappontok = Legendre-gyökök (7.13. tétel)"},def:{en:"The optimal $n$ Gaussian nodes on $[-1,1]$ are exactly the roots of $P_n$; the weights $c_i=\\int_{-1}^1 l_i(x)\\,dx$ come from the Lagrange basis at those nodes. This achieves degree of precision $2n-1$.",hu:"Az optimális $n$ Gauss-alappont $[-1,1]$-en pontosan $P_n$ gyökei; a $c_i=\\int_{-1}^1 l_i(x)\\,dx$ súlyok az ezekhez tartozó Lagrange-bázisból jönnek. Ez $2n-1$ pontossági fokot ér el."}},{term:{en:"Interval transformation",hu:"Intervallum-transzformáció"},def:{en:"Tables give nodes/weights on $[-1,1]$; for a general $[a,b]$ substitute $x=\\tfrac{b-a}{2}t+\\tfrac{a+b}{2}$, so $\\int_a^b f\\,dx=\\tfrac{b-a}{2}\\int_{-1}^1 f(\\dots)\\,dt$.",hu:"A táblázatok az alappontokat/súlyokat $[-1,1]$-en adják; általános $[a,b]$-re helyettesítsünk $x=\\tfrac{b-a}{2}t+\\tfrac{a+b}{2}$-t, így $\\int_a^b f\\,dx=\\tfrac{b-a}{2}\\int_{-1}^1 f(\\dots)\\,dt$."}},{term:{en:"Error formula (Thm 7.14)",hu:"Hibaformula (7.14. tétel)"},def:{en:"For $f\\in C^{2n}[-1,1]$ the $n$-point Gauss error is $\\dfrac{2^{2n+1}(n!)^4}{(2n+1)((2n)!)^3}f^{(2n)}(\\xi)$ — vanishes for polynomials up to degree $2n-1$, and shrinks extremely fast with $n$ for smooth $f$.",hu:"$f\\in C^{2n}[-1,1]$ esetén az $n$-pontos Gauss hibája $\\dfrac{2^{2n+1}(n!)^4}{(2n+1)((2n)!)^3}f^{(2n)}(\\xi)$ — eltűnik a $2n-1$ fokig terjedő polinomokra, és sima $f$-re rendkívül gyorsan csökken $n$-nel."}}]},Rn={"7_1":[{q:"What is the limit definition of the derivative $f'(x_0)$?",a:"$f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}$"},{q:"Under what condition is the difference quotient $\\frac{f(x_0 + h) - f(x_0)}{h}$ considered a good approximation of $f'(x_0)$?",a:"When the absolute value of the step size $|h|$ is small."},{q:"In the context of numerical differentiation, what does 'Lagrange's method' involve?",a:"Approximating a function $f$ with a Lagrange polynomial $L_n(x)$ and using $L'_n(x_0)$ as the derivative estimate."},{q:"What is the formula for the first-order forward difference approximation of $f'(x_0)$?",a:"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ where $h > 0$."},{q:"What is the formula for the first-order backward difference approximation of $f'(x_0)$?",a:"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ where $h < 0$."},{q:"The first-order difference formula is also known as the _____-point formula.",a:"two"},{q:"What is the specific form of the truncation error for the first-order difference approximation of $f'(x_0)$?",a:"$-\\frac{h}{2}f''(\\xi)$ where $\\xi \\in \\langle x_0, x_0 + h \\rangle$."},{q:"Using Taylor's method, what order of Taylor expansion is required to derive the first-order difference formula for $f'(x_0)$?",a:"First-order Taylor expansion."},{q:"How does the error of a first-order difference formula change if the step size $h$ decreases by one order of magnitude?",a:"The error also decreases by one order of magnitude."},{q:"What general formula is used to derive an $(n+1)$-point difference formula using Lagrange basis polynomials $l_j(x)$?",a:"$f'(x_i) \\approx \\sum_{j=0}^{n} f(x_j)l'_j(x_i)$"},{q:"For an $(n+1)$-point difference formula with equidistant points, what is the order of the error term in terms of $h$?",a:"$n$th-order ($O(h^n)$)."},{q:"What are the three mesh points used in the standard three-point difference formulas?",a:"$x_0$, $x_0 + h$, and $x_0 + 2h$."},{q:"What is the three-point endpoint formula for $f'(x_0)$?",a:"$\\frac{1}{h}(-\\frac{3}{2}f(x_0) + 2f(x_0 + h) - \\frac{1}{2}f(x_0 + 2h))$"},{q:"What is the order of the truncation error for the three-point endpoint formula?",a:"Second-order ($O(h^2)$)."},{q:"The three-point midpoint formula is also commonly called the second-order _____ difference formula.",a:"central"},{q:"What is the formula for the three-point midpoint (central difference) approximation of $f'(x_0)$?",a:"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}$"},{q:"What is the truncation error term for the second-order central difference formula?",a:"$-\\frac{h^2}{6}f'''(\\xi)$"},{q:"Between a one-sided second-order formula and a central second-order formula, which generally yields a smaller error for the same $h$?",a:"The central difference formula."},{q:"Which formula uses the points $x_0 - 2h, x_0 - h, x_0 + h, x_0 + 2h$ to approximate $f'(x_0)$?",a:"The five-point central difference (fourth-order) formula."},{q:"What is the order of accuracy for the five-point central difference formula (7.11)?",a:"Fourth-order ($O(h^4)$)."},{q:"What is the truncation error term for the fourth-order central difference formula?",a:"$\\frac{h^4}{30}f^{(5)}(\\xi)$"},{q:"Which method is described as more convenient than Lagrange's method for deriving approximations of higher-order derivatives?",a:"Taylor's method."},{q:"What is the standard second-order central difference formula for the second derivative $f''(x_0)$?",a:"$f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$"},{q:"What is the truncation error associated with the central difference formula for the second derivative $f''(x_0)$?",a:"$-\\frac{h^2}{12}f^{(4)}(\\xi)$"},{q:"Numerical differentiation is described as an _____ problem because small perturbations in function values can cause large errors in the derivative.",a:"unstable"},{q:"In the error analysis $f'(x_0) - \\frac{f_1 - f_0}{h} = -\\frac{h}{2}f''(\\xi) + \\frac{e_1 - e_0}{h}$, what does the term $\\frac{e_1 - e_0}{h}$ represent?",a:"The rounding error."},{q:"As the step size $h$ approaches zero, what happens to the rounding error in numerical differentiation?",a:"It tends toward infinity (or increases significantly)."},{q:"How do truncation error and rounding error behave differently as step size $h$ decreases?",a:"Truncation error decreases, while rounding error increases."},{q:"Why might a 4-digit arithmetic calculation show an increase in error when $h$ is reduced from 0.01 to 0.001?",a:"The increase in rounding error outweighs the decrease in truncation error."},{q:"What is the numerical approximation for the partial derivative $\\frac{\\partial f(x_0, y_0)}{\\partial x}$ using a first-order forward difference?",a:"$\\frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}$"},{q:"What is the central difference approximation for the second partial derivative $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2}$?",a:"$\\frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}$"},{q:"What is the approximation formula for the mixed partial derivative $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x \\partial y}$?",a:"$\\frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}$"},{q:"The formula $f'''(x_0) \\approx \\frac{1}{2h^3}(f(x_0 + 2h) - 2f(x_0 + h) + 2f(x_0 - h) - f(x_0 - 2h))$ approximates which derivative?",a:"The third derivative ($f'''(x_0)$)."},{q:"The formula $f^{(4)}(x_0) \\approx \\frac{1}{h^4}(f(x_0 + 2h) - 4f(x_0 + h) + 6f(x_0) - 4f(x_0 - h) + f(x_0 - 2h))$ approximates which derivative?",a:"The fourth derivative ($f^{(4)}(x_0)$)."},{q:"What is the truncation error order of the first-order forward difference formula?",a:"$O(h)$"},{q:"What is the truncation error order of the central difference formula for the first derivative?",a:"$O(h^2)$"},{q:"If $f \\in C^2[a, b]$, what is the maximum order of the Taylor expansion useful for deriving a first-order derivative approximation?",a:"First-order Taylor expansion with a second-order error term."},{q:"In formula (7.1), why is the limit $x \\to x_0$ taken?",a:"To eliminate terms containing $(x-x_0)$ and isolate the derivative $f'(x_0)$ and the error term."},{q:"Term: Two-point difference formula",a:"Definition: An approximation of the first derivative using values of the function at exactly two points."},{q:"Which formula is obtained by substituting $x_0 \\leftarrow x_0 - 2h$ and $h \\leftarrow -h$ into the three-point endpoint formula at $x_0 + 2h$?",a:"The second-order backward difference formula."},{q:"In Example 7.1, what happens to the error when $h$ is divided by 10?",a:"The error is also divided by approximately 10."},{q:"What happens to the error in a second-order formula when $h$ is divided by 10?",a:"The error is divided by 100 ($10^2$)."},{q:"What is the primary drawback of using very small values of $h$ in practical computer calculations?",a:"Significant increase in rounding error due to finite precision arithmetic."},{q:"The five-point one-sided formula for $f'(x_0)$ involves points from $x_0$ up to $x_0 +$ _____.",a:"$4h$"},{q:"In the second derivative formula $f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$, the error is proportional to which derivative of $f$?",a:"The fourth derivative ($f^{(4)}$)."},{q:"Formula: $\\frac{\\partial f(x_0, y_0)}{\\partial y} \\approx \\frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h}$",a:"This is the first-order forward difference for the partial derivative with respect to $y$."},{q:"Why is the function $g(x) = f(x) + \\frac{1}{n}\\sin(n^2 x)$ used in the text?",a:"To demonstrate the instability of numerical differentiation as $n$ becomes large."},{q:"Theorem 2.2 (Intermediate Value Theorem) is used in the derivation of the second derivative error to simplify the sum of which two terms?",a:"$f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)$"},{q:"What does the notation $\\xi \\in \\langle x_0, x_0 + h \\rangle$ indicate?",a:"The value $\\xi$ lies in the interval between $x_0$ and $x_0 + h$."},{q:"True or False: The three-point endpoint formula and the second-order forward difference formula are the same if $h > 0$.",a:"True"},{q:"What is the sign of $h$ in a backward difference formula?",a:"Negative ($h < 0$)."},{q:"If we use a 5-point formula, what is the highest degree of Lagrange polynomial being used?",a:"Degree 4 ($n=4$)."},{q:"In Equation (7.14), what is the relationship between $h$ and the term $\\frac{e_1 - e_0}{h}$?",a:"They are inversely proportional; as $h$ gets smaller, the term gets larger."},{q:"What is the purpose of using 4-digit vs 6-digit arithmetic in Example 7.5?",a:"To illustrate how limited precision arithmetic exacerbates rounding errors in differentiation."},{q:"Which partial derivative formula uses the values at $(x_0+2h, y_0)$, $(x_0+h, y_0)$, and $(x_0, y_0)$?",a:"The second-order forward difference for $\\frac{\\partial^2 f}{\\partial x^2}$."},{q:"In Equation (7.5), the product term $\\prod_{j \\ne i} (x_i - x_j)$ for equidistant points $x_j = x_0 + jh$ will result in a power of $h$ equal to _____.",a:"$n$"},{q:"What is the coefficient of $f(x_0)$ in the fourth-order one-sided difference formula (7.10)?",a:"$-25$"},{q:"What is the coefficient of $f(x_0 - h)$ in the fourth-order central difference formula (7.11)?",a:"$-8$ (divided by $12h$)."},{q:"The 'centered difference' is another name for the _____ formula.",a:"central difference"},{q:"Why is it impossible to compute the term $\\frac{d}{dx}(f''(\\xi(x)))$ explicitly in Lagrange's method?",a:"Because the functional form of $\\xi(x)$ is generally unknown."}],"7_2":[{q:"In the context of Richardson's extrapolation, what does the symbol $M$ represent?",a:"The exact value of a quantity being approximated."},{q:"What does $K(h)$ represent in the equation $M = K(h) + \\text{error}$?",a:"The numerical approximation of $M$ using step size $h$."},{q:"What is the standard assumption regarding the form of the truncation error in Richardson's extrapolation?",a:"The error can be expanded in an even-order Taylor polynomial or power series in $h$."},{q:"If the truncation error is $a_2 h^2 + a_4 h^4 + \\dots$, what is the order of accuracy of $K(h)$?",a:"Second-order."},{q:"How is the discretization parameter $h$ typically modified to perform the first step of Richardson's extrapolation?",a:"It is halved to $h/2$."},{q:"Why is $K(h/2)$ calculated in addition to $K(h)$ in Richardson's extrapolation?",a:"To combine the two results and eliminate the leading error term."},{q:"What factor is $K(h/2)$ multiplied by when eliminating the $h^2$ error term in a second-order approximation?",a:"4"},{q:"Formula: The first Richardson extrapolation $K^{(1)}(h)$ for a second-order method.",a:"$K^{(1)}(h) = \\frac{4K(h/2) - K(h)}{3}$"},{q:"What is the order of accuracy of the extrapolated formula $K^{(1)}(h)$?",a:"Fourth-order."},{q:"In the error series for $K^{(1)}(h)$, which power of $h$ is the leading term?",a:"$h^4$"},{q:"To cancel the $h^4$ error term in $K^{(1)}(h)$, what factor must be applied to $K^{(1)}(h/2)$?",a:"16"},{q:"Formula: The second Richardson extrapolation $K^{(2)}(h)$ derived from $K^{(1)}$.",a:"$K^{(2)}(h) = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$"},{q:"What is the order of accuracy of the extrapolated formula $K^{(2)}(h)$?",a:"Sixth-order."},{q:"The general recursive formula for Richardson's extrapolation is $K^{(i+1)}(h) = K^{(i)}(h/2) + \\frac{K^{(i)}(h/2) - K^{(i)}(h)}{\\dots}$.",a:"$4^{i+1} - 1$"},{q:"In the recursive definition of Richardson's extrapolation, what is the value of the base case $K^{(0)}(h)$?",a:"$K(h)$"},{q:"Term: Richardson's extrapolation.",a:"Definition: A procedure used to generate higher-order numerical approximation formulas from lower-order ones by eliminating leading error terms."},{q:"Does the central difference formula satisfy the error form requirement for standard Richardson's extrapolation?",a:"Yes, because its Taylor expansion contains only even powers of $h$."},{q:"What is the leading error term for the central difference formula $\\frac{f(x_0 + h) - f(x_0 - h)}{2h}$?",a:"$- \\frac{f'''(x_0)}{3!}h^2$"},{q:"In the Taylor expansion used for central differences, which powers of $h$ cancel out when subtracting $f(x_0 - h)$ from $f(x_0 + h)$?",a:"The even powers ($h^0, h^2, h^4, \\dots$)."},{q:"When applying Richardson's extrapolation to the central difference, the resulting $K^{(1)}(h)$ formula achieves _____ order error.",a:"fourth"},{q:"The 4th-order derivative approximation $K^{(1)}(h)$ equals $\\frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{\\dots}$.",a:"$6h$"},{q:"If the error expansion of $K(h)$ contains ALL powers of $h$ ($h^1, h^2, h^3, \\dots$), what is the denominator in the first extrapolation step?",a:"1"},{q:"In the general case where the error is $a_1 h^{\\alpha_1} + a_2 h^{\\alpha_2}$, how is $K^{(1)}(h)$ constructed using $h$ and $h/2$?",a:"$K^{(1)}(h) = \\frac{2^{\\alpha_1}K(h/2) - K(h)}{2^{\\alpha_1} - 1}$"},{q:"True or False: Richardson's extrapolation can only be used if the error consists of even powers of $h$.",a:"False; it can be adapted for any power series error form."},{q:"What determines the denominator in the formula $K^{(1)} = \\frac{4K(h/2) - K(h)}{3}$?",a:"The ratio of the leading error terms for $h$ versus $h/2$ (specifically $2^2 - 1 = 3$)."},{q:"Starting from a 1st-order difference formula, what order approximation is produced by one step of Richardson's extrapolation?",a:"Second-order."},{q:"According to Example 7.6, the 4th-order Richardson-extrapolated central difference is equivalent to which formula?",a:"Formula (7.11)."},{q:"What is the purpose of multiplying the $h/2$ equation by 4 in the derivation of $K^{(1)}$?",a:"To match the coefficient of the $a_2 h^2$ term in the original $h$ equation so it cancels out."},{q:"If $f \\in C^{2m+3}$, what is the order of the remainder term $b(h)$ in the central difference derivative expansion?",a:"$h^{2m+2}$"},{q:"In the expression for $a_{2i}^{(1)}$, how is it related to the original coefficient $a_{2i}$?",a:"$a_{2i}^{(1)} = \\frac{1 - 4^{i-1}}{4^{i-1} \\cdot 3}a_{2i}$"},{q:"What is the primary benefit of using Richardson's extrapolation instead of simply decreasing $h$ to a very small value?",a:"It achieves high accuracy with larger step sizes, potentially avoiding round-off errors and reducing computational cost."},{q:"In the formula $K^{(2)} = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$, where does the number 15 come from?",a:"It is $4^2 - 1$ (the ratio of $h^4$ to $(h/2)^4$ minus 1)."},{q:"Which specific differentiation formula is used as the starting point for the Richardson examples in the text?",a:"The central difference formula."},{q:"What is the result of applying Richardson's extrapolation to a sequence of approximations that does not have a structured error expansion?",a:"The method may fail to improve accuracy or could even decrease it."},{q:"Concept: Truncation error.",a:"Definition: The error made by truncating an infinite process (like a Taylor series) to a finite one."},{q:"What is the value of $m$ in the term $a_{2m} h^{2m}$ if we want to reach a tenth-order approximation?",a:"5"},{q:"Cloze: To derive a third-order approximation from a first-order one, the leading error term must be proportional to _____.",a:"$h^1$ (or $h^2$ for the second step)"},{q:"How does the complexity of the approximation formula $K^{(i)}(h)$ change as $i$ increases?",a:"It involves more function evaluations at different step sizes ($h, h/2, h/4, \\dots$)."},{q:"Formula: The general error bound for $b(h)$ in the second-order case.",a:"$|b(h)| \\le B h^{2m+2}$"},{q:"If $M$ is being approximated, $K(h)$ is the approximation, and $E(h)$ is the error, what is the basic identity used?",a:"$M = K(h) + E(h)$"},{q:"Why is the central difference formula referred to as 'másodrendű' in the Hungarian text?",a:"Because its error is proportional to $h^2$ (second-order)."},{q:"In the exercise to derive a 6th-order formula for $f'(0)$ where $f(x) = e^{x} \\sin x$, what is the starting step size $h$?",a:"0.25"},{q:"The general case formula uses integers $1 \\le \\alpha_1 < \\alpha_2 < \\dots < \\alpha_m$. What does $\\alpha_i$ represent?",a:"The powers of $h$ present in the error expansion."},{q:"If the error expansion is $M = K(h) + a_1 h + a_2 h^2 + \\dots$, the first extrapolated value $K^{(1)}(h)$ is _____.",a:"$2K(h/2) - K(h)$"},{q:"In the central difference expansion, what is the coefficient of the $h^4$ term ($a_4$)?",a:"$- \\frac{f^{(5)}(x_0)}{5!}$"},{q:"What happens to the coefficients $a_{2i}$ of the remaining error terms after one step of Richardson's extrapolation?",a:"They are transformed into new coefficients $a_{2i}^{(1)}$."},{q:"The Richardson procedure can be viewed as a linear combination of _____ at different scales.",a:"approximations"},{q:"Formula: The relation for $M$ after the second-order term is cancelled.",a:"$M = \\frac{4K(h/2) - K(h)}{3} + O(h^4)$"},{q:"Is Richardson's extrapolation limited to derivatives?",a:"No, it can be applied to integrals (Romberg integration) or any numerical limit process with a known error structure."},{q:"What is the constant $B$ in the error bound $|b(h)| \\le B h^{2m+2}$?",a:"A positive constant independent of $h$ that bounds the higher-order terms."},{q:"In the context of Exercise 4, what is the order of the 'one-sided difference' formula?",a:"First-order."},{q:"If $K^{(0)}(h) = K(h)$, $K^{(1)}(h)$ requires $K(h/2)$, how many $h$ values does $K^{(2)}(h)$ require?",a:"Three: $h, h/2, h/4$."},{q:"Cloze: The procedure of Richardson's extrapolation generates a _____ of approximations of increasing order.",a:"sequence"},{q:"What is the denominator of the third extrapolation step $K^{(3)}$ if the error only has even powers?",a:"63 ($4^3 - 1$)"},{q:"How does halving the step size twice ($h \\to h/2 \\to h/4$) assist in reaching a 6th-order approximation?",a:"It provides enough data points to eliminate both the $h^2$ and $h^4$ error terms."},{q:"In the derivation of $K^{(1)}$, why is $M$ multiplied by 4 on the left side of the intermediate step?",a:"Because the entire equation for $h/2$ was multiplied by 4."},{q:"What is the leading error term of $K^{(2)}(h)$?",a:"$a_6^{(2)} h^6$"}],"7_3":[{q:"In the definition of the definite integral, what is the 'norm' of a partition $a = x_0 < x_1 < \\dots < x_n = b$?",a:"The maximum length of the subintervals, defined as $\\max\\{x_i - x_{i-1} : i = 1, \\dots, n\\}$."},{q:"Formula: Midpoint Rule (also known as the Rectangle Rule) for numerical integration",a:"$\\int_a^b f(x) \\, dx \\approx \\frac{b - a}{n} \\sum_{i=1}^{n} f\\left(\\frac{x_{i-1} + x_i}{2}\\right)$"},{q:"What is the underlying approach of the Lagrange method for deriving numerical integration formulas?",a:"Approximating the function $f$ with its Lagrange interpolating polynomial $L_n$ and then integrating $L_n$."},{q:"In numerical integration, what is a 'quadrature formula'?",a:"A formula that approximates a definite integral as a weighted sum of function values: $\\sum_{k=0}^{n} c_k f(x_k)$."},{q:"How are the weights $c_k$ defined in a Newton-Cotes quadrature formula?",a:"$c_k = \\int_a^b l_k(x) \\, dx$, where $l_k(x)$ is the $k$-th Lagrange basis polynomial."},{q:"What distinguishes a 'closed' Newton-Cotes formula from an 'open' one?",a:"Closed formulas include the endpoints $a$ and $b$ as mesh points, while open formulas only use points within the open interval $(a, b)$."},{q:"What is the 'degree of precision' of a quadrature formula?",a:"The highest integer $n$ such that the formula gives the exact integral for all polynomials of degree $\\le n$."},{q:"What is the minimum degree of precision for an $(n+1)$-point Newton-Cotes formula?",a:"$n$"},{q:"For which values of $n$ do Newton-Cotes formulas provide an extra degree of precision (exact for polynomials of degree $n+1$)?",a:"Even values of $n$."},{q:"Formula: Elementary Trapezoidal Rule",a:"$\\int_a^b f(x) \\, dx \\approx \\frac{h}{2}(f(a) + f(b))$, where $h = b - a$."},{q:"What is the error term for the elementary Trapezoidal rule?",a:"$-\\frac{h^3}{12}f''(\\xi)$ for some $\\xi \\in (a, b)$."},{q:"What is the geometric interpretation of the Trapezoidal rule?",a:"The integral is approximated by the area of the trapezoid formed by the secant line connecting $(a, f(a))$ and $(b, f(b))$."},{q:"Formula: Composite Trapezoidal Rule for $n$ subintervals of length $h$",a:"$\\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right)$"},{q:"What is the error term for the composite Trapezoidal rule?",a:"$-\\frac{(b - a)h^2}{12}f''(\\xi)$ for some $\\xi \\in (a, b)$."},{q:"If the step size $h$ is halved in the composite Trapezoidal rule, by what factor does the error approximately decrease?",a:"One quarter (indicating quadratic error in $h$)."},{q:"According to the Intermediate Value Theorem for integrals, what condition must $g(x)$ meet for $\\int_a^b f(x)g(x) \\, dx = f(\\xi)\\int_a^b g(x) \\, dx$ to hold?",a:"$g(x)$ must be integrable and not change sign on the interval $[a, b]$."},{q:"For the closed Newton-Cotes formula with $n=2$ (Simpson's rule), what is the relationship between $x_0, x_1, x_2$ and $h$?",a:"$x_0 = a$, $x_1 = a + h$, $x_2 = b$, and $h = (b - a)/2$."},{q:"Formula: Elementary Simpson's Rule",a:"$\\int_{x_0}^{x_2} f(x) \\, dx \\approx \\frac{h}{3}(f(x_0) + 4f(x_1) + f(x_2))$"},{q:"What is the error term for the elementary Simpson's rule?",a:"$-\\frac{h^5}{90}f^{(4)}(\\eta)$ for some $\\eta \\in (x_0, x_2)$."},{q:"Why is Simpson's rule exact for polynomials of degree 3 even though it is based on quadratic interpolation?",a:"Because for even $n$, Newton-Cotes formulas have a higher degree of precision ($n+1$)."},{q:"What is the degree of precision of Simpson's rule?",a:"$3$"},{q:"What is the requirement for the number of subintervals in the composite Simpson's rule?",a:"The interval must be divided into an even number of equal parts ($2n$)."},{q:"Formula: Composite Simpson's Rule for $2n$ subintervals of length $h$",a:"$\\frac{h}{3}\\left(f(x_0) + 4\\sum_{i=1}^{n} f(x_{2i-1}) + 2\\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\\right)$"},{q:"What is the error term for the composite Simpson's rule?",a:"$-\\frac{(b - a)h^4}{180}f^{(4)}(\\xi)$ for some $\\xi \\in (a, b)$."},{q:"Formula: Simpson's $\\frac{3}{8}$ Rule",a:"$\\int_{x_0}^{x_3} f(x) \\, dx \\approx \\frac{3h}{8}(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3))$"},{q:"What is the degree of precision for the Simpson's $\\frac{3}{8}$ rule?",a:"$3$ (since $n=3$ is odd, precision is $n$)."},{q:"Formula: Closed Newton-Cotes formula for $n=4$",a:"$\\frac{2h}{45}(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4))$"},{q:"What is the error term for the $n=4$ closed Newton-Cotes formula?",a:"$-\\frac{8h^7}{945}f^{(6)}(\\xi)$"},{q:"Formula: Open Newton-Cotes formula for $n=0$ over interval $[x_{-1}, x_1]$ (Midpoint Rule)",a:"$2hf(x_0) + \\frac{h^3}{3}f''(\\xi)$"},{q:"Formula: Open Newton-Cotes formula for $n=1$ over interval $[x_{-1}, x_2]$ using points $x_0, x_1$",a:"$\\frac{3h}{2}(f(x_0) + f(x_1)) + \\frac{3h^3}{4}f''(\\xi)$"},{q:"Formula: Open Newton-Cotes formula for $n=2$ over interval $[x_{-1}, x_3]$ using points $x_0, x_1, x_2$",a:"$\\frac{4h}{3}(2f(x_0) - f(x_1) + 2f(x_2)) + \\frac{14h^5}{45}f^{(4)}(\\xi)$"},{q:"Formula: Open Newton-Cotes formula for $n=3$ over interval $[x_{-1}, x_4]$ using points $x_0, x_1, x_2, x_3$",a:"$\\frac{5h}{24}(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)) + \\frac{95h^5}{144}f^{(4)}(\\xi)$"},{q:"What two conditions must a quadrature formula meet to be considered stable according to Theorem 7.9?",a:"The formula must be exact for constant functions and all coefficients $c_i$ must be positive."},{q:"If function value errors are bounded by $|y_i - f(x_i)| \\le \\varepsilon$, what is the stability bound for a stable quadrature formula?",a:"$\\varepsilon(b - a)$"},{q:"What is the sum of the weights $\\sum c_i$ in any quadrature formula that is exact for constant functions over $[a, b]$?",a:"$b - a$"},{q:"Why are most standard quadrature formulas (like Trapezoidal or Simpson's) considered numerically stable?",a:"They utilize positive weights and are exact for constant functions."},{q:"The error of the composite Simpson's rule is proportional to which power of the step size $h$?",a:"$h^4$"},{q:"Which Newton-Cotes formula is characterized by weights following the pattern $1, 4, 1$?",a:"Simpson's Rule"},{q:"The error of the composite Trapezoidal rule is proportional to which power of the step size $h$?",a:"$h^2$"},{q:"How does the error of the composite Simpson's rule respond if the step size $h$ is reduced to $1/2$?",a:"The error is reduced to approximately $1/16$ of its original value."}],"7_4":[{q:"What is the general form of an $n$-point quadrature formula for the integral $\\int_a^b f(x)\\,dx$?",a:"$\\sum_{i=1}^{n} c_i f(x_i)$"},{q:"A quadrature formula is exact for polynomials of degree at most $m$ if and only if it is exact for all _____ $x^i$ where $i = 0, 1, \\ldots, m$.",a:"monomials"},{q:"How many parameters ($c_i$ and $x_i$) are contained in a general $n$-point quadrature formula?",a:"$2n$"},{q:"What is the maximum degree of a polynomial for which an $n$-point Gaussian quadrature formula can be exact?",a:"$2n - 1$"},{q:"To find the parameters of an $n$-point Gaussian quadrature formula, one must solve a system of $2n$ _____ equations.",a:"nonlinear"},{q:"In a 2-point Gaussian quadrature formula on the interval $[-1, 1]$, what are the values of the weights $c_1$ and $c_2$?",a:"$c_1 = 1, c_2 = 1$"},{q:"What are the nodes $x_1$ and $x_2$ for a 2-point Gaussian quadrature formula on $[-1, 1]$?",a:"$x_1 = -\\frac{\\sqrt{3}}{3}, x_2 = \\frac{\\sqrt{3}}{3}$"},{q:"What is the 2-point Gaussian quadrature formula for the interval $[-1, 1]$?",a:"$\\int_{-1}^{1} f(x)\\,dx \\approx f(-\\frac{\\sqrt{3}}{3}) + f(\\frac{\\sqrt{3}}{3})$"},{q:"Under what condition are two functions $f$ and $g$ considered orthogonal on the interval $[a, b]$?",a:"$\\int_a^b f(x)g(x)\\,dx = 0$"},{q:"The sequence of polynomials $(P_i)$ that are pairwise orthogonal on $[-1, 1]$ where $P_i$ has degree $i$ are called _____ polynomials.",a:"Legendre"},{q:"What is the first Legendre polynomial, $P_0(x)$?",a:"$1$"},{q:"What is the second Legendre polynomial, $P_1(x)$?",a:"$x$"},{q:"What method is used to construct the sequence of orthogonal Legendre polynomials?",a:"Gram-Schmidt orthogonalization"},{q:"In the Gram-Schmidt process for Legendre polynomials, $P_{i+1}(x)$ is sought in the form $x^{i+1} + \\sum_{j=0}^{i} a_{i+1,j} P_j(x)$. How is $a_{i+1,j}$ calculated?",a:"$a_{i+1,j} = -\\frac{\\int_{-1}^{1} x^{i+1} P_j(x)\\,dx}{\\int_{-1}^{1} P_j^2(x)\\,dx}$"},{q:"What is the specific formula for the Legendre polynomial $P_2(x)$?",a:"$x^2 - \\frac{1}{3}$"},{q:"What is the specific formula for the Legendre polynomial $P_3(x)$?",a:"$x^3 - \\frac{3}{5}x$"},{q:"What is the specific formula for the Legendre polynomial $P_4(x)$?",a:"$x^4 - \\frac{6}{7}x^2 + \\frac{3}{35}$"},{q:"Which recurrence relation do Legendre polynomials satisfy?",a:"$P_{n+1}(x) = xP_n(x) - \\frac{n^2}{4n^2 - 1}P_{n-1}(x)$"},{q:"Property of Legendre polynomials: $P_i$ is orthogonal to any polynomial of degree at most _____.",a:"$i - 1$"},{q:"How does the parity of the Legendre polynomial $P_i$ relate to the index $i$?",a:"It is even if $i$ is even and odd if $i$ is odd."},{q:"How many distinct real roots does the $n$th Legendre polynomial $P_n$ have in the interval $(-1, 1)$?",a:"$n$"},{q:"What is the geometric distribution of the roots of a Legendre polynomial relative to the origin?",a:"The roots are symmetric to the origin."},{q:"The nodes $x_1, \\dots, x_n$ of the $n$-point Gaussian quadrature formula are the roots of which polynomial?",a:"The $n$th-order Legendre polynomial $P_n$"},{q:"What is the required differentiability class for a function $f$ to apply the Gaussian quadrature truncation error formula involving $f^{(2n)}$?",a:"$C^{2n}[a, b]$"},{q:"What is the truncation error formula for the $n$-point Gaussian quadrature on $[-1, 1]$?",a:"$\\frac{f^{(2n)}(\\xi)}{(2n)!}\\int_{-1}^{1} P_n^2(x)\\,dx$"},{q:"What is the approximate form of the Gaussian quadrature error term if $f^{(2n)}$ is bounded?",a:"$\\frac{\\pi f^{(2n)}(\\xi)}{4^n (2n)!}$"},{q:"As $n \\to \\infty$, the error of Gaussian quadrature tends to zero at a(n) _____ speed.",a:"exponential"},{q:"How does the convergence speed of Gaussian quadrature compare to Newton-Cotes formulas as $n \\to \\infty$?",a:"Gaussian is exponential; Newton-Cotes is only polynomial."},{q:"For $n=3$, what is the root $x_i$ located at the origin?",a:"$0.0000000000$"},{q:"For $n=3$, what is the weight $c_i$ corresponding to the node $x=0$?",a:"$0.8888888889$ (or $\\frac{8}{9}$)"},{q:"In the 3-point Gaussian formula, what is the value of the weights for the nodes $\\pm 0.7745966692$?",a:"$0.5555555556$ (or $\\frac{5}{9}$)"},{q:"What substitution is used to transform the integral $\\int_a^b f(x)\\,dx$ to the interval $[-1, 1]$?",a:"$x = \\frac{(b - a)t + a + b}{2}$"},{q:"When transforming $\\int_a^b f(x)\\,dx$ to the interval $[-1, 1]$, what is the differential $dx$ in terms of $dt$?",a:"$dx = \\frac{b - a}{2}\\,dt$"},{q:"Formula: Interval Transformation",a:"$\\int_a^b f(x)\\,dx = \\frac{b - a}{2}\\int_{-1}^{1} f(\\frac{(b - a)t + a + b}{2})\\,dt$"},{q:"Example: If using 2-point Gauss to approximate $\\int_0^1 x^2 e^x\\,dx$, what is the scaling factor applied to the integral on $[-1, 1]$?",a:"$\\frac{1}{2}$"},{q:"The 2-point Gaussian approximation of $\\int_{-1}^1 e^x\\,dx$ is approximately $2.3426961$. What is the exact value?",a:"$e - \\frac{1}{e} \\approx 2.350424$"},{q:"True or False: Gaussian quadrature weights $c_i$ are always positive.",a:"True"},{q:"If a sequence of polynomials $(p_i)$ is pairwise orthogonal on $[-1, 1]$, what is the relationship between $p_i$ and the Legendre polynomial $P_i$?",a:"$p_i(x) = c_i P_i(x)$ for some constant $c_i \\ne 0$"},{q:"The formula $c_i = \\int_{-1}^{1} \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}\\,dx$ defines the _____ of the Gaussian quadrature.",a:"weights (or coefficients)"},{q:"In the 2-point case on $[-1, 1]$, the equation $c_1 x_1 + c_2 x_2 = 0$ follows from integrating which monomial?",a:"$x$"},{q:"In the 2-point case on $[-1, 1]$, the equation $c_1 + c_2 = 2$ follows from integrating which function?",a:"$1$ (or $x^0$)"},{q:"Why can case (i) $x_1 = x_2$ not happen in the 2-point Gaussian derivation?",a:"It would imply $c_1 + c_2 = 0$, contradicting the integral of 1 which equals 2."},{q:"Concept: $n$-point Gaussian Quadrature",a:"Definition: A quadrature formula where nodes and weights are chosen to integrate polynomials up to degree $2n-1$ exactly."},{q:"Which theorem states that nodes $x_i$ are the roots of $P_n$ and provides the formula for $c_i$?",a:"Theorem 7.13"},{q:"For $n=4$, how many nodes are positive and how many are negative?",a:"2 positive and 2 negative (due to symmetry)."},{q:"What is the value of $P_2(x)$ at $x=0$?",a:"$-\\frac{1}{3}$"},{q:"What is the result of the 2-point Gaussian approximation for $\\int_0^1 x^2 e^x\\,dx$?",a:"$0.7119418$"},{q:"What is the error in the 2-point Gaussian approximation for $\\int_0^1 x^2 e^x\\,dx$?",a:"$0.0063400$"},{q:"True or False: The nodes $x_i$ in Gaussian quadrature must be inside the interval of integration.",a:"True (Theorem 7.12 states roots are in $(-1, 1)$)."},{q:"In the recursive formula $P_{n+1}(x) = xP_n(x) - \\gamma_n P_{n-1}(x)$, what is the coefficient $\\gamma_n$?",a:"$\\frac{n^2}{4n^2 - 1}$"},{q:"Legendre polynomials are constructed to be _____ on the interval $[-1, 1]$.",a:"orthogonal"},{q:"The error of the 2-point Gaussian formula for $e^x$ on $[-1, 1]$ is $0.0077062$. This is considered _____ given the formula's simplicity.",a:"very small"},{q:"If $i=3$ (odd), what is the value of $P_3(0)$?",a:"$0$ (because it is an odd function)."},{q:"How does the degree of $P_i$ relate to the index $i$?",a:"The degree of $P_i$ is exactly $i$."},{q:"The formula $\\int_{-1}^1 p(x)\\,dx = \\sum c_i p(x_i)$ is exact for $p$ of degree 5. What is the minimum $n$ required?",a:"$n = 3$ (since $2(3)-1 = 5$)"},{q:"What is the weight $c_i$ for $n=2$ in the Gaussian quadrature on $[-1, 1]$?",a:"$1.0000000000$"},{q:"The 5-point Gaussian quadrature uses nodes derived from which Legendre polynomial?",a:"$P_5(x)$"},{q:"In the system of equations for $n=2$, the equation $\\frac{2}{3} = c_1 x_1^2 + c_2 x_2^2$ comes from the integral of _____.",a:"$x^2$"},{q:"The $n$-point Gaussian quadrature is derived from a system of _____ equations (count).",a:"$2n$"},{q:"For an arbitrary interval $[a, b]$, the transformed function's argument in the integral is _____.",a:"$\\frac{(b - a)t + a + b}{2}$"}]},R={glossary:{en:"Glossary",hu:"Fogalomtár"},flashcards:{en:"Flashcards",hu:"Tanulókártyák"},shuffle:{en:"🔀 Shuffle",hu:"🔀 Keverés"},reset:{en:"Reset order",hu:"Eredeti sorrend"},question:{en:"Question",hu:"Kérdés"},answer:{en:"Answer",hu:"Válasz"},prev:{en:"‹ Prev",hu:"‹ Előző"},next:{en:"Next ›",hu:"Következő ›"},showAnswer:{en:"Show answer",hu:"Válasz mutatása"},showQuestion:{en:"Show question",hu:"Kérdés mutatása"}};function He(){const{i18n:a}=E();return a.language==="hu"?"hu":"en"}const ee="rounded border border-slate-300 px-3 py-1.5 text-sm hover:border-brand-500 dark:border-slate-700";function Kn({slug:a}){const e=He(),t=En[a]??[],[n,i]=k.useState(null);return t.length?f.jsxs("section",{className:"card mt-6",children:[f.jsx("h3",{className:"mb-3 font-semibold text-brand-700 dark:text-brand-200",children:R.glossary[e]}),f.jsx("div",{className:"grid gap-2",children:t.map((r,o)=>{const s=n===o;return f.jsxs("button",{onClick:()=>i(s?null:o),className:"rounded-lg border border-slate-200 px-4 py-3 text-left hover:border-brand-500 dark:border-slate-700",children:[f.jsxs("div",{className:"flex items-center justify-between gap-3",children:[f.jsx("span",{className:"font-semibold text-slate-800 dark:text-slate-100",children:f.jsx(se,{markdown:r.term[e]})}),f.jsx("span",{className:"text-slate-400",children:s?"−":"+"})]}),s&&f.jsx("div",{className:"mt-2 text-sm text-slate-600 dark:text-slate-300",children:f.jsx(se,{markdown:r.def[e]})})]},o)})})]}):null}const xe=a=>Array.from({length:a},(e,t)=>t);function In(a){const e=xe(a);for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function Fn({slug:a}){const e=He(),t=Rn[a]??[],[n,i]=k.useState(()=>xe(t.length)),[r,o]=k.useState(0),[s,h]=k.useState(!1),l=k.useMemo(()=>t[n[r]],[t,n,r]);if(!t.length)return null;const c=$=>{h(!1),o(d=>(d+$+t.length)%t.length)};return f.jsxs("section",{className:"card mt-6",children:[f.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[f.jsx("h3",{className:"font-semibold text-brand-700 dark:text-brand-200",children:R.flashcards[e]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("span",{className:"rounded bg-slate-100 px-2 py-1 font-mono text-sm dark:bg-slate-800",children:[r+1," / ",t.length]}),f.jsx("button",{className:ee,onClick:()=>{i(In(t.length)),o(0),h(!1)},children:R.shuffle[e]}),f.jsx("button",{className:ee,onClick:()=>{i(xe(t.length)),o(0),h(!1)},children:R.reset[e]})]})]}),f.jsxs("button",{onClick:()=>h($=>!$),className:"min-h-[150px] w-full rounded-xl border border-slate-300 bg-slate-50 p-5 text-left dark:border-slate-700 dark:bg-slate-800",children:[f.jsx("div",{className:`mb-2 text-xs font-bold uppercase tracking-widest ${s?"text-emerald-600 dark:text-emerald-400":"text-brand-600 dark:text-brand-300"}`,children:s?R.answer[e]:R.question[e]}),f.jsx(se,{markdown:s?l.a:l.q})]}),f.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[f.jsx("button",{className:ee,onClick:()=>c(-1),children:R.prev[e]}),f.jsx("button",{className:"flex-1 rounded bg-brand-600 px-3 py-1.5 text-sm font-medium text-white",onClick:()=>h($=>!$),children:s?R.showQuestion[e]:R.showAnswer[e]}),f.jsx("button",{className:ee,onClick:()=>c(1),children:R.next[e]})]})]})}const Wn=`#include <iostream>
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
`,Mn=`program simpson_demo
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
`,Dn=`function simpson(f, a, b, n = 100)
    isodd(n) && (n += 1)
    h = (b - a) / n
    s = f(a) + f(b)
    for i in 1:n-1
        s += (isodd(i) ? 4 : 2) * f(a + i*h)
    end
    return h / 3 * s
end

println("int_0^1 e^x dx = ", simpson(exp, 0.0, 1.0, 100))
`,Gn=`function I = simpson(f, a, b, n)
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
`,Bn=`import numpy as np


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
`,Hn=`// Composite Simpson's rule (n forced even).
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
`,Vn=`simpson[f_, a_, b_, nIn_ : 100] := Module[{n = nIn, h},
   If[OddQ[n], n++];
   h = (b - a)/n;
   h/3 (f[a] + f[b] + Sum[(If[OddQ[i], 4, 2]) f[a + i h], {i, 1, n - 1}])];
Print["int_0^1 e^x dx = ", simpson[Exp, 0., 1., 100]]
`,Un=`#include <iostream>
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
`,Qn=`program trapezoid_demo
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
`,Jn=`function trapezoid(f, a, b, n = 100)
    h = (b - a) / n
    s = (f(a) + f(b)) / 2
    for i in 1:n-1
        s += f(a + i*h)
    end
    return h * s
end

println("int_0^1 e^x dx = ", trapezoid(exp, 0.0, 1.0, 100))
`,Yn=`function I = trapezoid(f, a, b, n)
% TRAPEZOID  Composite trapezoidal rule for the integral of f on [a,b].
    if nargin < 4, n = 100; end
    x = linspace(a, b, n+1);
    y = f(x);
    h = (b - a) / n;
    I = h * (y(1)/2 + sum(y(2:end-1)) + y(end)/2);
end

% --- Demo ---
fprintf('int_0^1 e^x dx ~ %.10f\\n', trapezoid(@exp, 0, 1, 100));
`,Zn=`import numpy as np


def trapezoid(f, a, b, n=100):
    """Composite trapezoidal rule for the integral of f on [a, b]."""
    x = np.linspace(a, b, n + 1)
    y = f(x)
    h = (b - a) / n
    return h * (y[0] / 2 + y[1:-1].sum() + y[-1] / 2)


if __name__ == "__main__":
    import math
    print("int_0^1 e^x dx ~", trapezoid(np.exp, 0, 1, 100), " exact =", math.e - 1)
`,Xn=`// Composite trapezoidal rule.
fn trapezoid<F: Fn(f64) -> f64>(f: F, a: f64, b: f64, n: usize) -> f64 {
    let h = (b - a) / n as f64;
    let mut s = (f(a) + f(b)) / 2.0;
    for i in 1..n { s += f(a + i as f64 * h); }
    h * s
}
fn main() {
    println!("int_0^1 e^x dx = {}", trapezoid(|x: f64| x.exp(), 0.0, 1.0, 100));
}
`,ea=`trapezoid[f_, a_, b_, n_ : 100] := Module[{h = (b - a)/n},
   h (f[a]/2 + f[b]/2 + Sum[f[a + i h], {i, 1, n - 1}])];
Print["int_0^1 e^x dx = ", trapezoid[Exp, 0., 1., 100]]
`,ta=Object.assign({"./simpson.cpp":Wn,"./simpson.f90":Mn,"./simpson.jl":Dn,"./simpson.m":Gn,"./simpson.py":Bn,"./simpson.rs":Hn,"./simpson.wl":Vn,"./trapezoid.cpp":Un,"./trapezoid.f90":Qn,"./trapezoid.jl":Jn,"./trapezoid.m":Yn,"./trapezoid.py":Zn,"./trapezoid.rs":Xn,"./trapezoid.wl":ea}),M=(a,e)=>ta[`./${a}.${e}`],na={trapezoid:{en:"Composite trapezoidal rule",hu:"Összetett trapéz-szabály"},simpson:{en:"Composite Simpson's rule",hu:"Összetett Simpson-szabály"}},aa=a=>({id:a,caption:na[a],snippets:{matlab:M(a,"m"),python:M(a,"py"),cpp:M(a,"cpp"),julia:M(a,"jl"),rust:M(a,"rs"),fortran:M(a,"f90"),wolfram:M(a,"wl")}}),ra={"7_3":["trapezoid","simpson"]};function ia(a){return(ra[a]??[]).map(aa)}function sa({slug:a}={}){const e=tt(),t=a??e.slug??"",n=a!=null,{t:i,i18n:r}=E(),o=r.language==="hu"?"hu":"en",[s,h]=k.useState(null),[l,c]=k.useState("loading");return k.useEffect(()=>{let $=!0;return c("loading"),Pn(t,o).then(d=>{$&&(h(d),c("ok"))}).catch(()=>$&&c("error")),()=>{$=!1}},[t,o]),f.jsxs("article",{children:[!n&&f.jsxs(Re,{to:"/numerical-calculus/lessons",className:"text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300",children:["← ",i("lessons.back")]}),l==="loading"&&f.jsx("p",{className:"mt-6 text-slate-500",children:i("lessons.loading")}),l==="error"&&f.jsx("p",{className:"mt-6 text-rose-600",children:i("lessons.error")}),l==="ok"&&s&&f.jsx(J.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},className:"card mt-4",children:f.jsx(se,{markdown:s.markdown})},s.slug+o),l==="ok"&&s&&ia(s.slug).map($=>f.jsx(lt,{snippets:$.snippets,caption:$.caption},$.id)),l==="ok"&&s&&f.jsxs(f.Fragment,{children:[f.jsx(Kn,{slug:s.slug}),f.jsx(Fn,{slug:s.slug})]})]})}const oa=(a,e,t)=>(a(e+t)-a(e))/t,la=(a,e,t)=>(a(e)-a(e-t))/t,fa=(a,e,t)=>(a(e+t)-a(e-t))/(2*t),ha=(a,e,t)=>(a(e-t)-2*a(e)+a(e+t))/(t*t),Ve=(a,e,t)=>(a(e-2*t)-8*a(e-t)+8*a(e+t)-a(e+2*t))/(12*t),Pe={forward:{id:"forward",order:1,apply:oa},backward:{id:"backward",order:1,apply:la},central:{id:"central",order:1,apply:fa},"five-point":{id:"five-point",order:1,apply:Ve},second:{id:"second",order:2,apply:ha}};function da(a,e,t,n){const i=(t-e)/n;let r=.5*(a(e)+a(t));for(let o=1;o<n;o++)r+=a(e+o*i);return r*i}function Ue(a,e,t,n){const i=n%2===0?n:n+1,r=(t-e)/i;let o=a(e)+a(t);for(let s=1;s<i;s++)o+=(s%2===0?2:4)*a(e+s*r);return o*r/3}const Qe={2:{nodes:[-.5773502692,.5773502692],weights:[1,1]},3:{nodes:[-.7745966692,0,.7745966692],weights:[.5555555556,.8888888889,.5555555556]},4:{nodes:[-.8611363116,-.3399810436,.3399810436,.8611363116],weights:[.3478548451,.6521451549,.6521451549,.3478548451]},5:{nodes:[-.9061798459,-.5384693101,0,.5384693101,.9061798459],weights:[.236926885,.4786286705,.5688888889,.4786286705,.236926885]}};function te(a,e,t,n){const{nodes:i,weights:r}=Qe[n],o=(t-e)/2,s=(e+t)/2;let h=0;for(let l=0;l<i.length;l++)h+=r[l]*a(o*i[l]+s);return o*h}const Ae={trapezoid:{id:"trapezoid",usesN:!0,apply:da},simpson:{id:"simpson",usesN:!0,apply:Ue},gauss2:{id:"gauss2",usesN:!1,apply:(a,e,t)=>te(a,e,t,2)},gauss3:{id:"gauss3",usesN:!1,apply:(a,e,t)=>te(a,e,t,3)},gauss4:{id:"gauss4",usesN:!1,apply:(a,e,t)=>te(a,e,t,4)},gauss5:{id:"gauss5",usesN:!1,apply:(a,e,t)=>te(a,e,t,5)}};function ca(a,e,t,n=4e3){return Ue(a,e,t,n)}const Je=(a,e)=>Math.abs(a-e),ue=ct($t,{}),Oe=[{id:"exp_x2x",latex:"e^{x^2+x}",expr:"exp(x^2 + x)"},{id:"exp_x",latex:"e^{x}",expr:"exp(x)"},{id:"x2_exp_x",latex:"x^2 e^{x}",expr:"x^2 * exp(x)"},{id:"sin",latex:"\\sin x",expr:"sin(x)"},{id:"poly",latex:"x^4 - 6x^2 + 3x",expr:"x^4 - 6*x^2 + 3*x"},{id:"exp_sin",latex:"e^{x}\\sin x",expr:"exp(x) * sin(x)"}];function pe(a){try{const e=ue.parse(a),t=e.compile(),n=r=>{const o=t.evaluate({x:r});return typeof o=="number"?o:Number(o)},i=n(.123);return Number.isFinite(i),{f:n,ok:!0,node:e}}catch(e){return{f:()=>NaN,ok:!1,error:e instanceof Error?e.message:String(e)}}}function $a(a,e,t){try{let r=ue.parse(a);for(let l=0;l<t;l++)r=ue.derivative(r,"x");const s=r.compile().evaluate({x:e}),h=typeof s=="number"?s:Number(s);if(Number.isFinite(h))return h}catch{}const{f:n}=pe(a),i=1e-4;return t===1?Ve(n,e,i):(n(e-i)-2*n(e)+n(e+i))/(i*i)}function Q({label:a,value:e,min:t,max:n,step:i,onChange:r,format:o}){return f.jsxs("label",{className:"block",children:[f.jsxs("div",{className:"mb-1 flex items-baseline justify-between",children:[f.jsx("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:a}),f.jsx("span",{className:"font-mono text-sm font-semibold text-brand-700 dark:text-brand-300",children:o?o(e):e})]}),f.jsx("input",{type:"range",min:t,max:n,step:i,value:e,onChange:s=>r(Number(s.target.value)),className:"h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600 dark:bg-slate-700"})]})}const A={top:12,right:12,bottom:24,left:36};function Ye({f:a,xMin:e,xMax:t,width:n=520,height:i=300,segments:r=[],areas:o=[],points:s=[]}){const{curve:h,x:l,y:c,yMin:$,yMax:d}=k.useMemo(()=>{const u=[],z=[];for(let _=0;_<=240;_++){const v=e+(t-e)*_/240;u.push(v),z.push(a(v))}const y=z.filter(_=>Number.isFinite(_));for(const _ of o)for(const[,v]of _.points)y.push(v);for(const _ of r)for(const[,v]of _.points)y.push(v);for(const _ of s)y.push(_.y);let g=Math.min(...y,0),q=Math.max(...y,0);(!Number.isFinite(g)||!Number.isFinite(q)||g===q)&&(g=-1,q=1);const j=(q-g)*.1||1;g-=j,q+=j;const N=_e().domain([e,t]).range([A.left,n-A.right]),S=_e().domain([g,q]).range([i-A.bottom,A.top]);let L="",T=!1;for(let _=0;_<=240;_++){const v=z[_];if(!Number.isFinite(v)){T=!1;continue}const P=N(u[_]),I=S(v);L+=`${T?"L":"M"}${P.toFixed(2)},${I.toFixed(2)} `,T=!0}return{curve:L,x:N,y:S,yMin:g,yMax:q}},[a,e,t,n,i,o,r,s]),x=p=>p.map((u,z)=>`${z?"L":"M"}${l(u[0]).toFixed(2)},${c(u[1]).toFixed(2)}`).join(" "),m=$<0&&d>0?c(0):null,w=e<0&&t>0?l(0):null;return f.jsxs("svg",{viewBox:`0 0 ${n} ${i}`,className:"h-auto w-full text-slate-400 dark:text-slate-500",role:"img",children:[f.jsx("rect",{x:A.left,y:A.top,width:n-A.left-A.right,height:i-A.top-A.bottom,className:"fill-transparent stroke-slate-200 dark:stroke-slate-700"}),m!==null&&f.jsx("line",{x1:A.left,x2:n-A.right,y1:m,y2:m,stroke:"currentColor",strokeWidth:1}),w!==null&&f.jsx("line",{x1:w,x2:w,y1:A.top,y2:i-A.bottom,stroke:"currentColor",strokeWidth:1}),o.map((p,u)=>f.jsx("path",{d:`${x(p.points)} Z`,fill:p.color??"#06b6d4",fillOpacity:.22,stroke:p.color??"#06b6d4",strokeOpacity:.5,strokeWidth:1},`a${u}`)),f.jsx("path",{d:h,fill:"none",stroke:"#6366f1",strokeWidth:2.5,strokeLinejoin:"round"}),r.map((p,u)=>f.jsx("path",{d:x(p.points),fill:"none",stroke:p.color??"#f59e0b",strokeWidth:2,strokeDasharray:p.dashed?"5 4":void 0},`s${u}`)),s.map((p,u)=>f.jsx("circle",{cx:l(p.x),cy:c(p.y),r:4,fill:p.color??"#f59e0b",stroke:"#fff",strokeWidth:1.5},`p${u}`)),f.jsx("text",{x:A.left,y:i-6,className:"fill-slate-500 text-[10px]",children:e}),f.jsx("text",{x:n-A.right,y:i-6,textAnchor:"end",className:"fill-slate-500 text-[10px]",children:t})]})}function xa({tex:a,display:e=!1,className:t}){const n=k.useMemo(()=>{try{return ft.renderToString(a,{displayMode:e,throwOnError:!1})}catch{return a}},[a,e]);return f.jsx("span",{className:t,dangerouslySetInnerHTML:{__html:n}})}function Ze({expr:a,onChange:e,valid:t}){const{t:n}=E(),i=Oe.find(r=>r.expr===a);return f.jsxs("div",{children:[f.jsx("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:n("playground.function")}),f.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:Oe.map(r=>f.jsx("button",{type:"button",onClick:()=>e(r.expr),className:`chip border transition ${(i==null?void 0:i.id)===r.id?"border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200":"border-slate-200 bg-white text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"}`,children:f.jsx(xa,{tex:r.latex})},r.id))}),f.jsxs("label",{className:"mt-3 block",children:[f.jsx("span",{className:"text-xs uppercase tracking-wide text-slate-400",children:n("playground.custom")}),f.jsx("input",{type:"text",value:a,spellCheck:!1,onChange:r=>e(r.target.value),className:`mt-1 w-full rounded-xl border bg-white px-3 py-2 font-mono text-sm outline-none transition dark:bg-slate-800 ${t?"border-slate-200 focus:border-brand-400 dark:border-slate-700":"border-rose-400 focus:border-rose-500"}`})]}),t?f.jsx("p",{className:"mt-1 text-xs text-slate-400",children:n("playground.custom_hint")}):f.jsx("p",{className:"mt-1 text-xs text-rose-500",children:n("playground.invalid")})]})}const Ee=a=>Number.isFinite(a)?a.toPrecision(7):"—",ua=a=>Number.isFinite(a)?a.toExponential(4):"—";function Xe({approx:a,reference:e,error:t}){const{t:n}=E(),i=[{label:n("playground.approx"),value:Ee(a),accent:!0},{label:n("playground.reference"),value:Ee(e),accent:!1},{label:n("playground.error"),value:ua(t),accent:!1}];return f.jsx("dl",{className:"grid gap-2",children:i.map(r=>f.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-slate-100 px-4 py-2 dark:bg-slate-800/70",children:[f.jsx("dt",{className:"text-sm text-slate-500 dark:text-slate-400",children:r.label}),f.jsx("dd",{className:`font-mono text-sm font-semibold ${r.accent?"text-brand-700 dark:text-brand-300":"text-slate-800 dark:text-slate-100"}`,children:r.value})]},r.label))})}const pa=["forward","backward","central","five-point","second"];function ma(){const{t:a}=E(),[e,t]=k.useState("exp(x^2 + x)"),[n,i]=k.useState("central"),[r,o]=k.useState(0),[s,h]=k.useState(.1),l=k.useMemo(()=>pe(e),[e]),c=Pe[n].order,{approx:$,reference:d,error:x,segments:m,points:w}=k.useMemo(()=>{if(!l.ok)return{approx:NaN,reference:NaN,error:NaN,segments:[],points:[]};const u=l.f,z=Pe[n].apply(u,r,s),y=$a(e,r,c),g=Je(z,y),q=[],j=[],N=u(r);if(j.push({x:r,y:N,color:"#ef4444"}),c===1){const S=Math.max(2*s,1),L=r-S,T=r+S;q.push({points:[[L,N+y*(L-r)],[T,N+y*(T-r)]],color:"#10b981",dashed:!0}),n==="central"||n==="five-point"?(j.push({x:r-s,y:u(r-s)},{x:r+s,y:u(r+s)}),q.push({points:[[r-s,u(r-s)],[r+s,u(r+s)]],color:"#f59e0b"})):n==="forward"?(j.push({x:r+s,y:u(r+s)}),q.push({points:[[r,N],[r+s,u(r+s)]],color:"#f59e0b"})):(j.push({x:r-s,y:u(r-s)}),q.push({points:[[r-s,u(r-s)],[r,N]],color:"#f59e0b"}))}else j.push({x:r-s,y:u(r-s)},{x:r+s,y:u(r+s)});return{approx:z,reference:y,error:g,segments:q,points:j}},[l,n,r,s,e,c]),p=Math.max(2.5*s,1.5);return f.jsxs("div",{className:"grid gap-5 lg:grid-cols-2",children:[f.jsxs("div",{className:"card space-y-4",children:[f.jsx(Ze,{expr:e,onChange:t,valid:l.ok}),f.jsxs("div",{children:[f.jsx("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:a("playground.method")}),f.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:pa.map(u=>f.jsx("button",{type:"button",onClick:()=>i(u),className:`chip border transition ${n===u?"border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200":"border-slate-200 bg-white text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"}`,children:a(`playground.methods.${u}`)},u))})]}),f.jsx(Q,{label:a("playground.x0"),value:r,min:-3,max:3,step:.1,onChange:o,format:u=>u.toFixed(2)}),f.jsx(Q,{label:a("playground.h"),value:s,min:.01,max:1,step:.01,onChange:h,format:u=>u.toFixed(2)}),f.jsx(Xe,{approx:$,reference:d,error:x})]}),f.jsxs("div",{className:"card",children:[f.jsx(Ye,{f:l.f,xMin:r-p,xMax:r+p,segments:m,points:w}),f.jsxs("div",{className:"mt-3 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400",children:[f.jsxs("span",{className:"flex items-center gap-1",children:[f.jsx("span",{className:"inline-block h-1 w-4 rounded bg-brand-500"})," f(x)"]}),c===1&&f.jsxs(f.Fragment,{children:[f.jsxs("span",{className:"flex items-center gap-1",children:[f.jsx("span",{className:"inline-block h-1 w-4 rounded bg-amber-500"})," ",a("playground.approx")]}),f.jsxs("span",{className:"flex items-center gap-1",children:[f.jsx("span",{className:"inline-block h-1 w-4 rounded bg-emerald-500"})," ",a("playground.reference")]})]})]})]})]})}const ga=["trapezoid","simpson","gauss2","gauss3","gauss4","gauss5"];function _a(){const{t:a}=E(),[e,t]=k.useState("x^2 * exp(x)"),[n,i]=k.useState("simpson"),[r,o]=k.useState(0),[s,h]=k.useState(1),[l,c]=k.useState(4),$=k.useMemo(()=>pe(e),[e]),d=Ae[n].usesN,{approx:x,reference:m,error:w,areas:p,points:u}=k.useMemo(()=>{if(!$.ok||s<=r)return{approx:NaN,reference:NaN,error:NaN,areas:[],points:[]};const y=$.f,g=Ae[n].apply(y,r,s,l),q=ca(y,r,s),j=Je(g,q),N=[],S=[];if(n==="trapezoid"){const L=(s-r)/l;for(let T=0;T<l;T++){const _=r+T*L,v=_+L;N.push({points:[[_,0],[_,y(_)],[v,y(v)],[v,0]]})}}else{const L=[[r,0]],T=80;for(let _=0;_<=T;_++){const v=r+(s-r)*_/T;L.push([v,y(v)])}if(L.push([s,0]),N.push({points:L}),n.startsWith("gauss")){const _=Number(n.slice(5)),v=(s-r)/2,P=(r+s)/2;for(const I of Qe[_].nodes){const F=v*I+P;S.push({x:F,y:y(F),color:"#ef4444"})}}}return{approx:g,reference:q,error:j,areas:N,points:S}},[$,n,r,s,l]),z=(s-r)*.1||.2;return f.jsxs("div",{className:"grid gap-5 lg:grid-cols-2",children:[f.jsxs("div",{className:"card space-y-4",children:[f.jsx(Ze,{expr:e,onChange:t,valid:$.ok}),f.jsxs("div",{children:[f.jsx("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:a("playground.method")}),f.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:ga.map(y=>f.jsx("button",{type:"button",onClick:()=>i(y),className:`chip border transition ${n===y?"border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200":"border-slate-200 bg-white text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"}`,children:a(`playground.methods.${y}`)},y))})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[f.jsx(Q,{label:a("playground.a"),value:r,min:-3,max:3,step:.1,onChange:o,format:y=>y.toFixed(2)}),f.jsx(Q,{label:a("playground.b"),value:s,min:-3,max:4,step:.1,onChange:h,format:y=>y.toFixed(2)})]}),d&&f.jsx(Q,{label:a("playground.n"),value:l,min:2,max:20,step:n==="simpson"?2:1,onChange:c}),f.jsx(Xe,{approx:x,reference:m,error:w})]}),f.jsxs("div",{className:"card",children:[f.jsx(Ye,{f:$.f,xMin:r-z,xMax:s+z,areas:p,points:u}),f.jsxs("div",{className:"mt-3 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400",children:[f.jsxs("span",{className:"flex items-center gap-1",children:[f.jsx("span",{className:"inline-block h-1 w-4 rounded bg-brand-500"})," f(x)"]}),f.jsxs("span",{className:"flex items-center gap-1",children:[f.jsx("span",{className:"inline-block h-3 w-4 rounded bg-accent-500/30"})," ∫ region"]}),n.startsWith("gauss")&&f.jsxs("span",{className:"flex items-center gap-1",children:[f.jsx("span",{className:"inline-block h-2 w-2 rounded-full bg-red-500"})," nodes"]})]})]})]})}function ba(){const{t:a}=E(),[e,t]=k.useState("diff");return f.jsxs("div",{children:[f.jsx("h1",{className:"text-3xl font-extrabold",children:a("playground.title")}),f.jsx("p",{className:"mt-1 text-slate-500 dark:text-slate-400",children:a("playground.lead")}),f.jsx("div",{className:"mt-5 inline-flex rounded-xl bg-slate-200 p-1 dark:bg-slate-800",children:["diff","int"].map(n=>f.jsx("button",{type:"button",onClick:()=>t(n),className:`rounded-lg px-4 py-2 text-sm font-semibold transition ${e===n?"bg-white text-brand-700 shadow dark:bg-slate-900 dark:text-brand-300":"text-slate-600 dark:text-slate-300"}`,children:a(n==="diff"?"playground.tab_diff":"playground.tab_int")},n))}),f.jsx("div",{className:"mt-5",children:e==="diff"?f.jsx(ma,{}):f.jsx(_a,{})})]})}function ka({correct:a,total:e,onRetry:t}){const{t:n}=E(),i=e?Math.round(a/e*100):0,r=i>=80?"🏆":i>=50?"👍":"📚";return f.jsxs(J.div,{initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},className:"card text-center",children:[f.jsx("div",{className:"text-6xl",children:r}),f.jsx("h2",{className:"mt-3 text-2xl font-extrabold",children:n("quiz.results_title")}),f.jsx("p",{className:"mt-2 text-lg text-slate-600 dark:text-slate-300",children:n("quiz.results_score",{correct:a,total:e})}),f.jsx("div",{className:"mx-auto mt-4 h-3 w-full max-w-sm overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700",children:f.jsx(J.div,{className:"h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500",initial:{width:0},animate:{width:`${i}%`},transition:{duration:.6}})}),f.jsxs("div",{className:"mt-6 flex flex-wrap justify-center gap-3",children:[f.jsx("button",{type:"button",onClick:t,className:"btn-primary",children:n("quiz.retry")}),f.jsx(Re,{to:"/numerical-calculus/lessons",className:"btn-ghost",children:n("quiz.to_lessons")})]})]})}function ya(){var _;const{t:a,i18n:e}=E(),t=e.language==="hu"?"hu":"en",[n,i]=k.useState([]),[r,o]=k.useState(0),[s,h]=k.useState(""),[l,c]=k.useState(null),[$,d]=k.useState(0),[x,m]=k.useState(0),[w,p]=k.useState(!1),[u,z]=k.useState(!0);function y(v=n){o(0),h(""),c(null),d(0),m(0),p(!1)}if(k.useEffect(()=>{z(!0),An(t).then(v=>{i(v),y(v)}).finally(()=>z(!1))},[t]),u)return f.jsx("p",{className:"card text-slate-500",children:a("quiz.loading")});if(!n.length)return f.jsx("p",{className:"card text-slate-500",children:a("quiz.loading")});if(w)return f.jsx(ka,{correct:$,total:n.length,onRetry:()=>y()});const g=n[r],q=r===n.length-1,j=l!==null,N=s!==""&&!j;async function S(){if(s==="")return;const v=await On(g.id,s,t);c(v),v.correct?(d(P=>P+1),m(P=>P+1)):m(0)}function L(){if(q){p(!0);return}o(v=>v+1),h(""),c(null)}const T=(v,P)=>j?v?"border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30":P?"border-rose-500 bg-rose-50 dark:bg-rose-900/30":"border-slate-200 bg-white opacity-60 dark:border-slate-700 dark:bg-slate-800":P?"border-brand-500 bg-brand-50 dark:bg-brand-900/40":"border-slate-200 bg-white hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800";return f.jsxs("div",{className:"card",children:[f.jsxs("div",{className:"flex items-center justify-between text-sm",children:[f.jsxs("span",{className:"font-semibold text-slate-500 dark:text-slate-400",children:[a("quiz.question")," ",r+1," ",a("quiz.of")," ",n.length]}),f.jsxs("span",{className:"flex gap-3",children:[f.jsxs("span",{className:"chip bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-200",children:[a("quiz.score"),": ",$]}),f.jsxs("span",{className:"chip bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200",children:["🔥 ",x]})]})]}),f.jsx("div",{className:"mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700",children:f.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all",style:{width:`${(r+(j?1:0))/n.length*100}%`}})}),f.jsxs("span",{className:"mt-4 inline-block chip bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",children:[a("quiz.topic")," ",g.topic]}),f.jsx(dt,{mode:"wait",children:f.jsxs(J.div,{initial:{opacity:0,x:16},animate:{opacity:1,x:0},exit:{opacity:0,x:-16},children:[f.jsx("h2",{className:"mt-3 text-lg font-semibold",children:g.prompt}),f.jsxs("div",{className:"mt-4 space-y-2",children:[g.type==="mcq"&&((_=g.options)==null?void 0:_.map((v,P)=>f.jsxs("button",{type:"button",disabled:j,onClick:()=>h(P),className:`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${T((l==null?void 0:l.answer)===P,s===P)}`,children:[f.jsx("span",{className:"grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-200 text-xs font-bold dark:bg-slate-700",children:String.fromCharCode(65+P)}),v]},P))),g.type==="truefalse"&&[!0,!1].map(v=>f.jsx("button",{type:"button",disabled:j,onClick:()=>h(v),className:`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${T((l==null?void 0:l.answer)===v,s===v)}`,children:a(v?"quiz.true":"quiz.false")},String(v))),g.type==="numeric"&&f.jsx("input",{type:"number",step:"any",disabled:j,placeholder:a("quiz.numeric_placeholder"),value:s===""?"":String(s),onChange:v=>h(v.target.value===""?"":Number(v.target.value)),className:"w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono outline-none focus:border-brand-400 dark:border-slate-700 dark:bg-slate-800"})]}),j&&f.jsxs(J.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},className:`mt-4 rounded-xl p-4 ${l!=null&&l.correct?"bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200":"bg-rose-50 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200"}`,children:[f.jsx("p",{className:"font-bold",children:l!=null&&l.correct?a("quiz.correct"):a("quiz.incorrect")}),f.jsx("p",{className:"mt-1 text-sm",children:l==null?void 0:l.explanation})]})]},g.id)}),f.jsx("div",{className:"mt-5 flex justify-end gap-3",children:j?f.jsx("button",{type:"button",onClick:L,className:"btn-primary",children:a(q?"quiz.finish":"quiz.next")}):f.jsx("button",{type:"button",disabled:!N,onClick:S,className:"btn-primary disabled:opacity-50",children:a("quiz.check")})})]})}function va(){const{t:a}=E();return f.jsxs("div",{children:[f.jsx("h1",{className:"text-3xl font-extrabold",children:a("quiz.title")}),f.jsx("p",{className:"mb-5 mt-1 text-slate-500 dark:text-slate-400",children:a("quiz.lead")}),f.jsx(ya,{})]})}const et=Ge,za=[...et.map(a=>({id:a.slug,no:a.id==="intro"?"7":a.id,title:a.title,blurb:{en:"",hu:""}})),{id:"playground",no:"7·pg",title:{en:"Playground",hu:"Játéktér"},blurb:{en:"",hu:""}},{id:"quiz",no:"7·qz",title:{en:"Quiz",hu:"Kvíz"},blurb:{en:"",hu:""}}];function Pa(){const a=nt(),{t:e}=E(),{lang:t}=at();k.useEffect(()=>{C.changeLanguage(t)},[t]),k.useEffect(()=>{let i=decodeURIComponent(a.hash.replace(/^#/,""));if(!i){const r=a.pathname.match(/\/lessons\/([^/]+)/);if(r)i=r[1];else{const o=a.pathname.split("/").filter(Boolean).pop()??"";["playground","quiz"].includes(o)&&(i=o)}}i&&requestAnimationFrame(()=>{var r;return(r=document.getElementById(i))==null?void 0:r.scrollIntoView()})},[a.pathname,a.hash]);const n={scrollMarginTop:"calc(var(--nav-h) + var(--scrolly-topbar-h, 44px) + 8px)"};return f.jsxs("div",{className:"flex min-h-screen flex-col",children:[f.jsx(ht,{sections:za}),f.jsxs("main",{className:"mx-auto w-full max-w-5xl flex-1 space-y-16 px-4 py-8",children:[et.map(i=>f.jsx("section",{id:i.slug,style:n,children:f.jsx(sa,{slug:i.slug})},i.slug)),f.jsx("section",{id:"playground",style:n,children:f.jsx(ba,{})}),f.jsx("section",{id:"quiz",style:n,children:f.jsx(va,{})})]}),f.jsx("footer",{className:"border-t border-slate-200 py-6 text-center text-sm text-slate-400 dark:border-slate-800",children:e("app.footer")})]})}export{Pa as default};
