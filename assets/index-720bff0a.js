var Io=Object.defineProperty;var _o=(t,e,r)=>e in t?Io(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Gn=(t,e,r)=>(_o(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const Do=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function mr(t,e){return t?Do.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function R(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Zn(t){return R(t).map(e=>t[e])}function Ro(t){return Object.fromEntries(t)}function Vo(t,e){return t.filter((r,n)=>!e.includes(n))}function wh(t,e){return t.includes(e)}function yh(t,e){return Ro(t.map((r,n,s)=>[e(r,n,s),r]))}function Ho(t,e,r){return t.reduce((n,s,i,a)=>{const o=e(s,i,a);return r(o,s,i,a)&&n.push(o),n},[])}function pr(t){return!!t}const Fo={capitalizeFirstLetter:!1};function Wo(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function jo(t,e){return e.capitalizeFirstLetter?Wo(t):t}function Uo(t,e=Fo){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return jo(n,e)}var Yn;(function(t){t.Upper="upper",t.Lower="lower"})(Yn||(Yn={}));function zo({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}var Kn;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Kn||(Kn={}));function $e(t){return t?t instanceof Error?t.message:mr(t,"message")?String(t.message):String(t):""}function Ae(t){return t instanceof Error?t:new Error($e(t))}function qo(t,e){const r=Ae(t);return r.message=`${e}: ${r.message}`,r}class Bo extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}const Go=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function rn(t,e){return t?Go.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Zo(t){return t instanceof Promise}function Kt(t){return Array.isArray(t)?"array":typeof t}function M(t,e){return Kt(t)===e}class Yo extends Error{constructor(e){super(`Failed to compare objects using JSON.stringify: ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonStringifyError"})}}function Pr(t,e){return JSON.stringify(t)===JSON.stringify(e)}function Jt(t,e){try{return t===e||Pr(t,e)?!0:Ue(t)&&Ue(e)?Pr(Object.keys(t).sort(),Object.keys(e).sort())?R(t).every(n=>Jt(t[n],e[n])):!1:Pr(t,e)}catch(r){throw new Yo($e(r))}}function Ko(t,e){try{if(Ue(t)&&Ue(e)){const r=new Set([...R(t),...R(e)]);return Array.from(r).every(n=>{if(!Xn(t,n)||!Xn(e,n))return!1;const s=t[n],i=e[n];return typeof s!=typeof i?!1:Qn(()=>Jt(s,i),{fallbackValue:!0})})}else return Qn(()=>Jt(t,e),{fallbackValue:!1})}catch{return!1}}function It(t,e){return t===e}function Jo(t,e){if(!(M(t,"string")||M(t,"number")||M(t,"symbol")))throw new Bo(e||`value is of type '${Kt(t)}' but expected a PropertyKey.`)}function Ir(t){try{return Jo(t),!0}catch{return!1}}function Ue(t){return!!t&&typeof t=="object"}function Jn(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function Qn(t,e={}){try{const r=t();return r instanceof Promise?r.catch(n=>e.handleError?e.handleError(n):rn(e,"fallbackValue")?e.fallbackValue:Ae(n)):r}catch(r){return e.handleError?e.handleError(r):rn(e,"fallbackValue")?e.fallbackValue:Ae(r)}}function Qo(t){return R(t).filter(e=>isNaN(Number(e)))}function Tn(t){return Qo(t).map(r=>t[r])}function Xo(t,e){return Tn(e).includes(t)}function Sn(t,e,r){if(e in t)return t[e];{const n=r();return Zo(n)?new Promise(async(s,i)=>{try{const a=await n;t[e]=a,s(a)}catch(a){i(a)}}):(t[e]=n,n)}}function Xn(t,e){return e in t}function Li(t,e){let r=!1;const n=R(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(R(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function el(t,e){try{return tl(t,e),!0}catch{return!1}}function tl(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Qt(){let t,e,r=!1;const n=new Promise((s,i)=>{t=a=>(r=!0,s(a)),e=a=>{r=!0,i(a)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Qt.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function rl(t){return!!(mr(t,"then")&&typeof t.then=="function")}function es(t){const e=Qt();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function nl(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const sl=nl();function il({min:t,max:e}){const{min:r,max:n}=zo({min:Math.floor(t),max:Math.floor(e)}),s=n-r+1,i=Math.ceil(Math.log2(s)/8),a=Math.floor(256**i/s)*s,o=new Uint8Array(i);let l;do sl.getRandomValues(o),l=o.reduce((u,c,d)=>u+c*256**d,0);while(l>=a);return r+l%s}const ts=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function gh(t=16){let e="";for(let r=0;r<t;r++){const n=il({min:0,max:ts.length-1});e+=ts[n]}return e}const al="px";function ol(t){return ll({value:t,suffix:al})}function ll({value:t,suffix:e}){return String(t).endsWith(e)?String(t):`${String(t)}${e}`}var ul=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function cl(){return class extends Event{constructor(e,r){super(e,r),Object.defineProperty(this,"detail",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.detail=r.detail}}}const dl=globalThis.CustomEvent||cl();function Z(){function t(e){var r;return r=class extends dl{constructor(s){super(e,s)}},ul(r,"TypedEventConstructor"),Object.defineProperty(r,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),r}return t}var fl=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Ni(t){var e;return e=class extends Event{constructor(n){super(t,n)}},fl(e,"TypedEventConstructor"),Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}class hl{constructor(){Object.defineProperty(this,"listeners",{enumerable:!0,configurable:!0,writable:!0,value:{}})}getListenerCount(){return Zn(this.listeners).map(r=>(r==null?void 0:r.size)||0).reduce((r,n)=>r+n,0)}listen(e,r,n={}){const s=this.listeners,i=M(e,"string")?e:e.type;function a(){var l;return((l=s[i])==null?void 0:l.delete(r))||!1}function o(l,u){n.once&&a(),r(l,u)}return s[i]||(s[i]=new Map),s[i].set(r,{listener:o,removeListener:a}),a}removeListener(e,r){const n=M(e,"string")?e:e.type,s=this.listeners[n];if(!s)return!1;const i=s.get(r);return i?i.removeListener():!1}dispatch(e){const r=this.listeners[e.type],n=(r==null?void 0:r.size)||0;return r==null||r.forEach(s=>{s.listener(e,s.removeListener)}),n}removeAllListeners(){const r=Zn(this.listeners).reduce((n,s)=>{const i=(s==null?void 0:s.size)||0;return s==null||s.clear(),n+i},0);return this.listeners={},r}destroy(){this.removeAllListeners()}}class ml extends hl{}class _r extends Z()("observable-value-update"){}class pl extends Z()("observable-value-resolve"){}class wl extends Z()("observable-value-error"){}class yl extends Ni("observable-destroy"){}class gl extends Ni("observable-callback-call"){}class vl extends Z()("observable-params-update"){}class bh extends Z()("observable-interval-run"){}class Eh extends Z()("observable-interval-skip"){}class Th extends Z()("observable-interval-rate-limited"){}class bl extends ml{constructor(){super(...arguments),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"listenerMap",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap})}setValue(e,r=this.equalityCheck){return!r||!r(this.value,e)?(this.value=e,this.dispatch(new _r({detail:e})),!0):!1}listen(e){const r=n=>e(n.detail);return this.listenerMap.set(e,r),super.listen(_r,r)}removeListener(e){const r=this.listenerMap.get(e);return!!r&&super.removeListener(_r,r)}destroy(){this.dispatch(new yl),super.destroy()}listenToEvent(e,r,n){return super.listen(e,r,n)}}class El extends bl{constructor(e={}){super(),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"waitingForValueDeferredPromise",{enumerable:!0,configurable:!0,writable:!0,value:Qt()}),Object.defineProperty(this,"lastSetPromise",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:this.waitingForValueDeferredPromise.promise}),Object.defineProperty(this,"lastResolvedValue",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.equalityCheck=e.equalityCheck||It,"defaultValue"in e&&this.setValue(e.defaultValue)}setPromise(e){return e===this.lastSetPromise?!1:(this.lastSetPromise=e,this.waitingForValueDeferredPromise.isSettled()&&(this.waitingForValueDeferredPromise=Qt(),super.setValue(this.waitingForValueDeferredPromise.promise,It)),e.then(r=>{this.lastSetPromise===e&&this.resolveValue(r)}).catch(r=>{if(this.lastSetPromise!==e)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const n=Ae(r);console.error(n),this.rejectValue(n)}),!0)}resolveValue(e){return this.lastResolvedValue=e,super.setValue(e,this.value instanceof Promise?It:void 0)?(this.waitingForValueDeferredPromise.isSettled()||this.waitingForValueDeferredPromise.resolve(e),this.dispatch(new pl({detail:e})),!0):!1}rejectValue(e){this.waitingForValueDeferredPromise.reject(e),super.setValue(e,It),this.dispatch(new wl({detail:e}))}setValue(e){try{return e instanceof Promise?this.setPromise(e):e instanceof Error?(this.rejectValue(e),!0):this.resolveValue(e)}catch(r){return this.rejectValue(Ae(r)),!0}}listen(e){return super.listen(e)}}class pe extends El{get lastParams(){if(this.internalParams!==pe.NotSet)return this.internalParams}constructor(e={}){super(e),Object.defineProperty(this,"updateCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"internalParams",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.equalityCheck=e.equalityCheck||Ko,this.updateCallback=e.updateCallback,this.internalParams="defaultParams"in e?e.defaultParams:pe.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===pe.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams))}catch(e){return this.setValue(Ae(e))}finally{this.dispatch(new gl)}}updateLastParams(e){try{return this.internalParams===pe.NotSet||!this.equalityCheck(e,this.internalParams)?(this.internalParams=e,this.dispatch(new vl({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(Ae(r)),!1}}update(e){return this.updateLastParams(e)?(this.updateFromCallback(),!0):!1}setParams(e){return this.updateLastParams(e)}forceUpdate(...e){return el(e,1)&&this.updateLastParams(e[0]),this.updateFromCallback()}}Object.defineProperty(pe,"NotSet",{enumerable:!0,configurable:!0,writable:!0,value:Symbol("not set")});function nn(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Tl(t){return Object.fromEntries(t)}var rs;(function(t){t.Upper="upper",t.Lower="lower"})(rs||(rs={}));function Sl(t){const e=Math.pow(10,t.digits),r=t.number*e;return Number((Math.round(r)/e).toFixed(t.digits))}var ns;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ns||(ns={}));function Pi(t,e){return nn(t).filter(n=>{const s=t[n];return e(n,s,t)}).reduce((n,s)=>(n[s]=t[s],n),{})}function kl(t,e){return Pi(t,r=>!e.includes(r))}function $l(t,e){return Pi(t,r=>e.includes(r))}function Al(t,e){let r=!1;const n=nn(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(nn(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function Ml(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Ml();class Oe extends Error{}class xl extends Oe{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class Ol extends Oe{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class Cl extends Oe{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class Re extends Oe{}class Ii extends Oe{constructor(e){super(`Invalid unit ${e}`)}}class D extends Oe{}class ne extends Oe{constructor(){super("Zone is an abstract class")}}const m="numeric",G="short",V="long",Xt={year:m,month:m,day:m},_i={year:m,month:G,day:m},Ll={year:m,month:G,day:m,weekday:G},Di={year:m,month:V,day:m},Ri={year:m,month:V,day:m,weekday:V},Vi={hour:m,minute:m},Hi={hour:m,minute:m,second:m},Fi={hour:m,minute:m,second:m,timeZoneName:G},Wi={hour:m,minute:m,second:m,timeZoneName:V},ji={hour:m,minute:m,hourCycle:"h23"},Ui={hour:m,minute:m,second:m,hourCycle:"h23"},zi={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:G},qi={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:V},Bi={year:m,month:m,day:m,hour:m,minute:m},Gi={year:m,month:m,day:m,hour:m,minute:m,second:m},Zi={year:m,month:G,day:m,hour:m,minute:m},Yi={year:m,month:G,day:m,hour:m,minute:m,second:m},Nl={year:m,month:G,day:m,weekday:G,hour:m,minute:m},Ki={year:m,month:V,day:m,hour:m,minute:m,timeZoneName:G},Ji={year:m,month:V,day:m,hour:m,minute:m,second:m,timeZoneName:G},Qi={year:m,month:V,day:m,weekday:V,hour:m,minute:m,timeZoneName:V},Xi={year:m,month:V,day:m,weekday:V,hour:m,minute:m,second:m,timeZoneName:V};class kt{get type(){throw new ne}get name(){throw new ne}get ianaName(){return this.name}get isUniversal(){throw new ne}offsetName(e,r){throw new ne}formatOffset(e,r){throw new ne}offset(e){throw new ne}equals(e){throw new ne}get isValid(){throw new ne}}let Dr=null;class wr extends kt{static get instance(){return Dr===null&&(Dr=new wr),Dr}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return la(e,r,n)}formatOffset(e,r){return ut(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}}let qt={};function Pl(t){return qt[t]||(qt[t]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),qt[t]}const Il={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function _l(t,e){const r=t.format(e).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,s,i,a,o,l,u,c]=n;return[a,s,i,o,l,u,c]}function Dl(t,e){const r=t.formatToParts(e),n=[];for(let s=0;s<r.length;s++){const{type:i,value:a}=r[s],o=Il[i];i==="era"?n[o]=a:w(o)||(n[o]=parseInt(a,10))}return n}let _t={};class re extends kt{static create(e){return _t[e]||(_t[e]=new re(e)),_t[e]}static resetCache(){_t={},qt={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch{return!1}}constructor(e){super(),this.zoneName=e,this.valid=re.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return la(e,r,n,this.name)}formatOffset(e,r){return ut(this.offset(e),r)}offset(e){const r=new Date(e);if(isNaN(r))return NaN;const n=Pl(this.name);let[s,i,a,o,l,u,c]=n.formatToParts?Dl(n,r):_l(n,r);o==="BC"&&(s=-Math.abs(s)+1);const f=gr({year:s,month:i,day:a,hour:l===24?0:l,minute:u,second:c,millisecond:0});let h=+r;const b=h%1e3;return h-=b>=0?b:1e3+b,(f-h)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}}let ss={};function Rl(t,e={}){const r=JSON.stringify([t,e]);let n=ss[r];return n||(n=new Intl.ListFormat(t,e),ss[r]=n),n}let sn={};function an(t,e={}){const r=JSON.stringify([t,e]);let n=sn[r];return n||(n=new Intl.DateTimeFormat(t,e),sn[r]=n),n}let on={};function Vl(t,e={}){const r=JSON.stringify([t,e]);let n=on[r];return n||(n=new Intl.NumberFormat(t,e),on[r]=n),n}let ln={};function Hl(t,e={}){const{base:r,...n}=e,s=JSON.stringify([t,n]);let i=ln[s];return i||(i=new Intl.RelativeTimeFormat(t,e),ln[s]=i),i}let ot=null;function Fl(){return ot||(ot=new Intl.DateTimeFormat().resolvedOptions().locale,ot)}let is={};function Wl(t){let e=is[t];if(!e){const r=new Intl.Locale(t);e="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,is[t]=e}return e}function jl(t){const e=t.indexOf("-x-");e!==-1&&(t=t.substring(0,e));const r=t.indexOf("-u-");if(r===-1)return[t];{let n,s;try{n=an(t).resolvedOptions(),s=t}catch{const l=t.substring(0,r);n=an(l).resolvedOptions(),s=l}const{numberingSystem:i,calendar:a}=n;return[s,i,a]}}function Ul(t,e,r){return(r||e)&&(t.includes("-u-")||(t+="-u"),r&&(t+=`-ca-${r}`),e&&(t+=`-nu-${e}`)),t}function zl(t){const e=[];for(let r=1;r<=12;r++){const n=g.utc(2009,r,1);e.push(t(n))}return e}function ql(t){const e=[];for(let r=1;r<=7;r++){const n=g.utc(2016,11,13+r);e.push(t(n))}return e}function Dt(t,e,r,n){const s=t.listingMode();return s==="error"?null:s==="en"?r(e):n(e)}function Bl(t){return t.numberingSystem&&t.numberingSystem!=="latn"?!1:t.numberingSystem==="latn"||!t.locale||t.locale.startsWith("en")||new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem==="latn"}class Gl{constructor(e,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:s,floor:i,...a}=n;if(!r||Object.keys(a).length>0){const o={useGrouping:!1,...n};n.padTo>0&&(o.minimumIntegerDigits=n.padTo),this.inf=Vl(e,o)}}format(e){if(this.inf){const r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{const r=this.floor?Math.floor(e):Mn(e,3);return C(r,this.padTo)}}}class Zl{constructor(e,r,n){this.opts=n,this.originalZone=void 0;let s;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){const a=-1*(e.offset/60),o=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;e.offset!==0&&re.create(o).valid?(s=o,this.dt=e):(s="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,s=e.zone.name):(s="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const i={...this.opts};i.timeZone=i.timeZone||s,this.dtf=an(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class Yl{constructor(e,r,n){this.opts={style:"long",...n},!r&&aa()&&(this.rtf=Hl(e,n))}format(e,r){return this.rtf?this.rtf.format(e,r):pu(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}}const Kl={firstDay:1,minimalDays:4,weekend:[6,7]};class k{static fromOpts(e){return k.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,r,n,s,i=!1){const a=e||x.defaultLocale,o=a||(i?"en-US":Fl()),l=r||x.defaultNumberingSystem,u=n||x.defaultOutputCalendar,c=un(s)||x.defaultWeekSettings;return new k(o,l,u,c,a)}static resetCache(){ot=null,sn={},on={},ln={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:n,weekSettings:s}={}){return k.create(e,r,n,s)}constructor(e,r,n,s,i){const[a,o,l]=jl(e);this.locale=a,this.numberingSystem=r||o||null,this.outputCalendar=n||l||null,this.weekSettings=s,this.intl=Ul(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Bl(this)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:k.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,un(e.weekSettings)||this.weekSettings,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,r=!1){return Dt(this,e,da,()=>{const n=r?{month:e,day:"numeric"}:{month:e},s=r?"format":"standalone";return this.monthsCache[s][e]||(this.monthsCache[s][e]=zl(i=>this.extract(i,n,"month"))),this.monthsCache[s][e]})}weekdays(e,r=!1){return Dt(this,e,ma,()=>{const n=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},s=r?"format":"standalone";return this.weekdaysCache[s][e]||(this.weekdaysCache[s][e]=ql(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[s][e]})}meridiems(){return Dt(this,void 0,()=>pa,()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[g.utc(2016,11,13,9),g.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Dt(this,e,wa,()=>{const r={era:e};return this.eraCache[e]||(this.eraCache[e]=[g.utc(-40,1,1),g.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[e]})}extract(e,r,n){const s=this.dtFormatter(e,r),i=s.formatToParts(),a=i.find(o=>o.type.toLowerCase()===n);return a?a.value:null}numberFormatter(e={}){return new Gl(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new Zl(e,this.intl,r)}relFormatter(e={}){return new Yl(this.intl,this.isEnglish(),e)}listFormatter(e={}){return Rl(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:oa()?Wl(this.locale):Kl}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}let Rr=null;class _ extends kt{static get utcInstance(){return Rr===null&&(Rr=new _(0)),Rr}static instance(e){return e===0?_.utcInstance:new _(e)}static parseSpecifier(e){if(e){const r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new _(vr(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${ut(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${ut(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return ut(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}}class Jl extends kt{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function ae(t,e){if(w(t)||t===null)return e;if(t instanceof kt)return t;if(eu(t)){const r=t.toLowerCase();return r==="default"?e:r==="local"||r==="system"?wr.instance:r==="utc"||r==="gmt"?_.utcInstance:_.parseSpecifier(r)||re.create(t)}else return Ee(t)?_.instance(t):typeof t=="object"&&"offset"in t&&typeof t.offset=="function"?t:new Jl(t)}let as=()=>Date.now(),os="system",ls=null,us=null,cs=null,ds=60,fs,hs=null;class x{static get now(){return as}static set now(e){as=e}static set defaultZone(e){os=e}static get defaultZone(){return ae(os,wr.instance)}static get defaultLocale(){return ls}static set defaultLocale(e){ls=e}static get defaultNumberingSystem(){return us}static set defaultNumberingSystem(e){us=e}static get defaultOutputCalendar(){return cs}static set defaultOutputCalendar(e){cs=e}static get defaultWeekSettings(){return hs}static set defaultWeekSettings(e){hs=un(e)}static get twoDigitCutoffYear(){return ds}static set twoDigitCutoffYear(e){ds=e%100}static get throwOnInvalid(){return fs}static set throwOnInvalid(e){fs=e}static resetCaches(){k.resetCache(),re.resetCache()}}class B{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const ea=[0,31,59,90,120,151,181,212,243,273,304,334],ta=[0,31,60,91,121,152,182,213,244,274,305,335];function W(t,e){return new B("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`)}function kn(t,e,r){const n=new Date(Date.UTC(t,e-1,r));t<100&&t>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const s=n.getUTCDay();return s===0?7:s}function ra(t,e,r){return r+($t(t)?ta:ea)[e-1]}function na(t,e){const r=$t(t)?ta:ea,n=r.findIndex(i=>i<e),s=e-r[n];return{month:n+1,day:s}}function $n(t,e){return(t-e+7)%7+1}function er(t,e=4,r=1){const{year:n,month:s,day:i}=t,a=ra(n,s,i),o=$n(kn(n,s,i),r);let l=Math.floor((a-o+14-e)/7),u;return l<1?(u=n-1,l=yt(u,e,r)):l>yt(n,e,r)?(u=n+1,l=1):u=n,{weekYear:u,weekNumber:l,weekday:o,...br(t)}}function ms(t,e=4,r=1){const{weekYear:n,weekNumber:s,weekday:i}=t,a=$n(kn(n,1,e),r),o=We(n);let l=s*7+i-a-7+e,u;l<1?(u=n-1,l+=We(u)):l>o?(u=n+1,l-=We(n)):u=n;const{month:c,day:d}=na(u,l);return{year:u,month:c,day:d,...br(t)}}function Vr(t){const{year:e,month:r,day:n}=t,s=ra(e,r,n);return{year:e,ordinal:s,...br(t)}}function ps(t){const{year:e,ordinal:r}=t,{month:n,day:s}=na(e,r);return{year:e,month:n,day:s,...br(t)}}function ws(t,e){if(!w(t.localWeekday)||!w(t.localWeekNumber)||!w(t.localWeekYear)){if(!w(t.weekday)||!w(t.weekNumber)||!w(t.weekYear))throw new Re("Cannot mix locale-based week fields with ISO-based week fields");return w(t.localWeekday)||(t.weekday=t.localWeekday),w(t.localWeekNumber)||(t.weekNumber=t.localWeekNumber),w(t.localWeekYear)||(t.weekYear=t.localWeekYear),delete t.localWeekday,delete t.localWeekNumber,delete t.localWeekYear,{minDaysInFirstWeek:e.getMinDaysInFirstWeek(),startOfWeek:e.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Ql(t,e=4,r=1){const n=yr(t.weekYear),s=j(t.weekNumber,1,yt(t.weekYear,e,r)),i=j(t.weekday,1,7);return n?s?i?!1:W("weekday",t.weekday):W("week",t.weekNumber):W("weekYear",t.weekYear)}function Xl(t){const e=yr(t.year),r=j(t.ordinal,1,We(t.year));return e?r?!1:W("ordinal",t.ordinal):W("year",t.year)}function sa(t){const e=yr(t.year),r=j(t.month,1,12),n=j(t.day,1,tr(t.year,t.month));return e?r?n?!1:W("day",t.day):W("month",t.month):W("year",t.year)}function ia(t){const{hour:e,minute:r,second:n,millisecond:s}=t,i=j(e,0,23)||e===24&&r===0&&n===0&&s===0,a=j(r,0,59),o=j(n,0,59),l=j(s,0,999);return i?a?o?l?!1:W("millisecond",s):W("second",n):W("minute",r):W("hour",e)}function w(t){return typeof t>"u"}function Ee(t){return typeof t=="number"}function yr(t){return typeof t=="number"&&t%1===0}function eu(t){return typeof t=="string"}function tu(t){return Object.prototype.toString.call(t)==="[object Date]"}function aa(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function oa(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function ru(t){return Array.isArray(t)?t:[t]}function ys(t,e,r){if(t.length!==0)return t.reduce((n,s)=>{const i=[e(s),s];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function nu(t,e){return e.reduce((r,n)=>(r[n]=t[n],r),{})}function ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function un(t){if(t==null)return null;if(typeof t!="object")throw new D("Week settings must be an object");if(!j(t.firstDay,1,7)||!j(t.minimalDays,1,7)||!Array.isArray(t.weekend)||t.weekend.some(e=>!j(e,1,7)))throw new D("Invalid week settings");return{firstDay:t.firstDay,minimalDays:t.minimalDays,weekend:Array.from(t.weekend)}}function j(t,e,r){return yr(t)&&t>=e&&t<=r}function su(t,e){return t-e*Math.floor(t/e)}function C(t,e=2){const r=t<0;let n;return r?n="-"+(""+-t).padStart(e,"0"):n=(""+t).padStart(e,"0"),n}function ie(t){if(!(w(t)||t===null||t===""))return parseInt(t,10)}function de(t){if(!(w(t)||t===null||t===""))return parseFloat(t)}function An(t){if(!(w(t)||t===null||t==="")){const e=parseFloat("0."+t)*1e3;return Math.floor(e)}}function Mn(t,e,r=!1){const n=10**e;return(r?Math.trunc:Math.round)(t*n)/n}function $t(t){return t%4===0&&(t%100!==0||t%400===0)}function We(t){return $t(t)?366:365}function tr(t,e){const r=su(e-1,12)+1,n=t+(e-r)/12;return r===2?$t(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function gr(t){let e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&(e=new Date(e),e.setUTCFullYear(t.year,t.month-1,t.day)),+e}function gs(t,e,r){return-$n(kn(t,1,e),r)+e-1}function yt(t,e=4,r=1){const n=gs(t,e,r),s=gs(t+1,e,r);return(We(t)-n+s)/7}function cn(t){return t>99?t:t>x.twoDigitCutoffYear?1900+t:2e3+t}function la(t,e,r,n=null){const s=new Date(t),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const a={timeZoneName:e,...i},o=new Intl.DateTimeFormat(r,a).formatToParts(s).find(l=>l.type.toLowerCase()==="timezonename");return o?o.value:null}function vr(t,e){let r=parseInt(t,10);Number.isNaN(r)&&(r=0);const n=parseInt(e,10)||0,s=r<0||Object.is(r,-0)?-n:n;return r*60+s}function ua(t){const e=Number(t);if(typeof t=="boolean"||t===""||Number.isNaN(e))throw new D(`Invalid unit value ${t}`);return e}function rr(t,e){const r={};for(const n in t)if(ze(t,n)){const s=t[n];if(s==null)continue;r[e(n)]=ua(s)}return r}function ut(t,e){const r=Math.trunc(Math.abs(t/60)),n=Math.trunc(Math.abs(t%60)),s=t>=0?"+":"-";switch(e){case"short":return`${s}${C(r,2)}:${C(n,2)}`;case"narrow":return`${s}${r}${n>0?`:${n}`:""}`;case"techie":return`${s}${C(r,2)}${C(n,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function br(t){return nu(t,["hour","minute","second","millisecond"])}const iu=["January","February","March","April","May","June","July","August","September","October","November","December"],ca=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],au=["J","F","M","A","M","J","J","A","S","O","N","D"];function da(t){switch(t){case"narrow":return[...au];case"short":return[...ca];case"long":return[...iu];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const fa=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ha=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ou=["M","T","W","T","F","S","S"];function ma(t){switch(t){case"narrow":return[...ou];case"short":return[...ha];case"long":return[...fa];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const pa=["AM","PM"],lu=["Before Christ","Anno Domini"],uu=["BC","AD"],cu=["B","A"];function wa(t){switch(t){case"narrow":return[...cu];case"short":return[...uu];case"long":return[...lu];default:return null}}function du(t){return pa[t.hour<12?0:1]}function fu(t,e){return ma(e)[t.weekday-1]}function hu(t,e){return da(e)[t.month-1]}function mu(t,e){return wa(e)[t.year<0?0:1]}function pu(t,e,r="always",n=!1){const s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(t)===-1;if(r==="auto"&&i){const d=t==="days";switch(e){case 1:return d?"tomorrow":`next ${s[t][0]}`;case-1:return d?"yesterday":`last ${s[t][0]}`;case 0:return d?"today":`this ${s[t][0]}`}}const a=Object.is(e,-0)||e<0,o=Math.abs(e),l=o===1,u=s[t],c=n?l?u[1]:u[2]||u[1]:l?s[t][0]:t;return a?`${o} ${c} ago`:`in ${o} ${c}`}function vs(t,e){let r="";for(const n of t)n.literal?r+=n.val:r+=e(n.val);return r}const wu={D:Xt,DD:_i,DDD:Di,DDDD:Ri,t:Vi,tt:Hi,ttt:Fi,tttt:Wi,T:ji,TT:Ui,TTT:zi,TTTT:qi,f:Bi,ff:Zi,fff:Ki,ffff:Qi,F:Gi,FF:Yi,FFF:Ji,FFFF:Xi};class I{static create(e,r={}){return new I(e,r)}static parseFormat(e){let r=null,n="",s=!1;const i=[];for(let a=0;a<e.length;a++){const o=e.charAt(a);o==="'"?(n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),r=null,n="",s=!s):s||o===r?n+=o:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=o,r=o)}return n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(e){return wu[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...r}).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,{...this.opts,...r})}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return C(e,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,r){const n=this.loc.listingMode()==="en",s=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(h,b)=>this.loc.extract(e,h,b),a=h=>e.isOffsetFixed&&e.offset===0&&h.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,h.format):"",o=()=>n?du(e):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,b)=>n?hu(e,h):i(b?{month:h}:{month:h,day:"numeric"},"month"),u=(h,b)=>n?fu(e,h):i(b?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),c=h=>{const b=I.macroTokenToFormatOpts(h);return b?this.formatWithSystemDefault(e,b):h},d=h=>n?mu(e,h):i({era:h},"era"),f=h=>{switch(h){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return o();case"d":return s?i({day:"numeric"},"day"):this.num(e.day);case"dd":return s?i({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return u("short",!0);case"cccc":return u("long",!0);case"ccccc":return u("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return u("short",!1);case"EEEE":return u("long",!1);case"EEEEE":return u("narrow",!1);case"L":return s?i({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return s?i({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return s?i({month:"numeric"},"month"):this.num(e.month);case"MM":return s?i({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return s?i({year:"numeric"},"year"):this.num(e.year);case"yy":return s?i({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return s?i({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return s?i({year:"numeric"},"year"):this.num(e.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return c(h)}};return vs(I.parseFormat(r),f)}formatDurationFromString(e,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},s=l=>u=>{const c=n(u);return c?this.num(l.get(c),u.length):u},i=I.parseFormat(r),a=i.reduce((l,{literal:u,val:c})=>u?l:l.concat(c),[]),o=e.shiftTo(...a.map(n).filter(l=>l));return vs(i,s(o))}}const ya=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Ze(...t){const e=t.reduce((r,n)=>r+n.source,"");return RegExp(`^${e}$`)}function Ye(...t){return e=>t.reduce(([r,n,s],i)=>{const[a,o,l]=i(e,s);return[{...r,...a},o||n,l]},[{},null,1]).slice(0,2)}function Ke(t,...e){if(t==null)return[null,null];for(const[r,n]of e){const s=r.exec(t);if(s)return n(s)}return[null,null]}function ga(...t){return(e,r)=>{const n={};let s;for(s=0;s<t.length;s++)n[t[s]]=ie(e[r+s]);return[n,null,r+s]}}const va=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,yu=`(?:${va.source}?(?:\\[(${ya.source})\\])?)?`,xn=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,ba=RegExp(`${xn.source}${yu}`),On=RegExp(`(?:T${ba.source})?`),gu=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,vu=/(\d{4})-?W(\d\d)(?:-?(\d))?/,bu=/(\d{4})-?(\d{3})/,Eu=ga("weekYear","weekNumber","weekDay"),Tu=ga("year","ordinal"),Su=/(\d{4})-(\d\d)-(\d\d)/,Ea=RegExp(`${xn.source} ?(?:${va.source}|(${ya.source}))?`),ku=RegExp(`(?: ${Ea.source})?`);function je(t,e,r){const n=t[e];return w(n)?r:ie(n)}function $u(t,e){return[{year:je(t,e),month:je(t,e+1,1),day:je(t,e+2,1)},null,e+3]}function Je(t,e){return[{hours:je(t,e,0),minutes:je(t,e+1,0),seconds:je(t,e+2,0),milliseconds:An(t[e+3])},null,e+4]}function At(t,e){const r=!t[e]&&!t[e+1],n=vr(t[e+1],t[e+2]),s=r?null:_.instance(n);return[{},s,e+3]}function Mt(t,e){const r=t[e]?re.create(t[e]):null;return[{},r,e+1]}const Au=RegExp(`^T?${xn.source}$`),Mu=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function xu(t){const[e,r,n,s,i,a,o,l,u]=t,c=e[0]==="-",d=l&&l[0]==="-",f=(h,b=!1)=>h!==void 0&&(b||h&&c)?-h:h;return[{years:f(de(r)),months:f(de(n)),weeks:f(de(s)),days:f(de(i)),hours:f(de(a)),minutes:f(de(o)),seconds:f(de(l),l==="-0"),milliseconds:f(An(u),d)}]}const Ou={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Cn(t,e,r,n,s,i,a){const o={year:e.length===2?cn(ie(e)):ie(e),month:ca.indexOf(r)+1,day:ie(n),hour:ie(s),minute:ie(i)};return a&&(o.second=ie(a)),t&&(o.weekday=t.length>3?fa.indexOf(t)+1:ha.indexOf(t)+1),o}const Cu=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Lu(t){const[,e,r,n,s,i,a,o,l,u,c,d]=t,f=Cn(e,s,n,r,i,a,o);let h;return l?h=Ou[l]:u?h=0:h=vr(c,d),[f,new _(h)]}function Nu(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Pu=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Iu=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,_u=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function bs(t){const[,e,r,n,s,i,a,o]=t;return[Cn(e,s,n,r,i,a,o),_.utcInstance]}function Du(t){const[,e,r,n,s,i,a,o]=t;return[Cn(e,o,r,n,s,i,a),_.utcInstance]}const Ru=Ze(gu,On),Vu=Ze(vu,On),Hu=Ze(bu,On),Fu=Ze(ba),Ta=Ye($u,Je,At,Mt),Wu=Ye(Eu,Je,At,Mt),ju=Ye(Tu,Je,At,Mt),Uu=Ye(Je,At,Mt);function zu(t){return Ke(t,[Ru,Ta],[Vu,Wu],[Hu,ju],[Fu,Uu])}function qu(t){return Ke(Nu(t),[Cu,Lu])}function Bu(t){return Ke(t,[Pu,bs],[Iu,bs],[_u,Du])}function Gu(t){return Ke(t,[Mu,xu])}const Zu=Ye(Je);function Yu(t){return Ke(t,[Au,Zu])}const Ku=Ze(Su,ku),Ju=Ze(Ea),Qu=Ye(Je,At,Mt);function Xu(t){return Ke(t,[Ku,Ta],[Ju,Qu])}const Es="Invalid Duration",Sa={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},ec={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Sa},H=146097/400,Ne=146097/4800,tc={years:{quarters:4,months:12,weeks:H/7,days:H,hours:H*24,minutes:H*24*60,seconds:H*24*60*60,milliseconds:H*24*60*60*1e3},quarters:{months:3,weeks:H/28,days:H/4,hours:H*24/4,minutes:H*24*60/4,seconds:H*24*60*60/4,milliseconds:H*24*60*60*1e3/4},months:{weeks:Ne/7,days:Ne,hours:Ne*24,minutes:Ne*24*60,seconds:Ne*24*60*60,milliseconds:Ne*24*60*60*1e3},...Sa},we=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],rc=we.slice(0).reverse();function se(t,e,r=!1){const n={values:r?e.values:{...t.values,...e.values||{}},loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix};return new E(n)}function ka(t,e){let r=e.milliseconds??0;for(const n of rc.slice(1))e[n]&&(r+=e[n]*t[n].milliseconds);return r}function Ts(t,e){const r=ka(t,e)<0?-1:1;we.reduceRight((n,s)=>{if(w(e[s]))return n;if(n){const i=e[n]*r,a=t[s][n],o=Math.floor(i/a);e[s]+=o*r,e[n]-=o*a*r}return s},null),we.reduce((n,s)=>{if(w(e[s]))return n;if(n){const i=e[n]%1;e[n]-=i,e[s]+=i*t[n][s]}return s},null)}function nc(t){const e={};for(const[r,n]of Object.entries(t))n!==0&&(e[r]=n);return e}class E{constructor(e){const r=e.conversionAccuracy==="longterm"||!1;let n=r?tc:ec;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||k.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(e,r){return E.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new D(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new E({values:rr(e,E.normalizeUnit),loc:k.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if(Ee(e))return E.fromMillis(e);if(E.isDuration(e))return e;if(typeof e=="object")return E.fromObject(e);throw new D(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){const[n]=Gu(e);return n?E.fromObject(n,r):E.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){const[n]=Yu(e);return n?E.fromObject(n,r):E.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new D("need to specify a reason the Duration is invalid");const n=e instanceof B?e:new B(e,r);if(x.throwOnInvalid)throw new Cl(n);return new E({invalid:n})}static normalizeUnit(e){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new Ii(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?I.create(this.loc,n).formatDurationFromString(this,e):Es}toHuman(e={}){if(!this.isValid)return Es;const r=we.map(n=>{const s=this.values[n];return w(s)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:n.slice(0,-1)}).format(s)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=Mn(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},g.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?ka(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;const r=E.fromDurationLike(e),n={};for(const s of we)(ze(r.values,s)||ze(this.values,s))&&(n[s]=r.get(s)+this.get(s));return se(this,{values:n},!0)}minus(e){if(!this.isValid)return this;const r=E.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=ua(e(this.values[n],n));return se(this,{values:r},!0)}get(e){return this[E.normalizeUnit(e)]}set(e){if(!this.isValid)return this;const r={...this.values,...rr(e,E.normalizeUnit)};return se(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:n,matrix:s}={}){const a={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:s,conversionAccuracy:n};return se(this,a)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;const e=this.toObject();return Ts(this.matrix,e),se(this,{values:e},!0)}rescale(){if(!this.isValid)return this;const e=nc(this.normalize().shiftToAll().toObject());return se(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(a=>E.normalizeUnit(a));const r={},n={},s=this.toObject();let i;for(const a of we)if(e.indexOf(a)>=0){i=a;let o=0;for(const u in n)o+=this.matrix[u][a]*n[u],n[u]=0;Ee(s[a])&&(o+=s[a]);const l=Math.trunc(o);r[a]=l,n[a]=(o*1e3-l*1e3)/1e3}else Ee(s[a])&&(n[a]=s[a]);for(const a in n)n[a]!==0&&(r[i]+=a===i?n[a]:n[a]/this.matrix[i][a]);return Ts(this.matrix,r),se(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const e={};for(const r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return se(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(n,s){return n===void 0||n===0?s===void 0||s===0:n===s}for(const n of we)if(!r(this.values[n],e.values[n]))return!1;return!0}}const Pe="Invalid Interval";function sc(t,e){return!t||!t.isValid?O.invalid("missing or invalid start"):!e||!e.isValid?O.invalid("missing or invalid end"):e<t?O.invalid("end before start",`The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`):null}class O{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new D("need to specify a reason the Interval is invalid");const n=e instanceof B?e:new B(e,r);if(x.throwOnInvalid)throw new Ol(n);return new O({invalid:n})}static fromDateTimes(e,r){const n=it(e),s=it(r),i=sc(n,s);return i??new O({start:n,end:s})}static after(e,r){const n=E.fromDurationLike(r),s=it(e);return O.fromDateTimes(s,s.plus(n))}static before(e,r){const n=E.fromDurationLike(r),s=it(e);return O.fromDateTimes(s.minus(n),s)}static fromISO(e,r){const[n,s]=(e||"").split("/",2);if(n&&s){let i,a;try{i=g.fromISO(n,r),a=i.isValid}catch{a=!1}let o,l;try{o=g.fromISO(s,r),l=o.isValid}catch{l=!1}if(a&&l)return O.fromDateTimes(i,o);if(a){const u=E.fromISO(s,r);if(u.isValid)return O.after(i,u)}else if(l){const u=E.fromISO(n,r);if(u.isValid)return O.before(o,u)}}return O.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(e,r);let s;return r!=null&&r.useLocaleWeeks?s=this.end.reconfigure({locale:n.locale}):s=this.end,s=s.startOf(e,r),Math.floor(s.diff(n,e).get(e))+(s.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?O.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];const r=e.map(it).filter(a=>this.contains(a)).sort((a,o)=>a.toMillis()-o.toMillis()),n=[];let{s}=this,i=0;for(;s<this.e;){const a=r[i]||this.e,o=+a>+this.e?this.e:a;n.push(O.fromDateTimes(s,o)),s=o,i+=1}return n}splitBy(e){const r=E.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,s=1,i;const a=[];for(;n<this.e;){const o=this.start.plus(r.mapUnits(l=>l*s));i=+o>+this.e?this.e:o,a.push(O.fromDateTimes(n,i)),n=i,s+=1}return a}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;const r=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return r>=n?null:O.fromDateTimes(r,n)}union(e){if(!this.isValid)return this;const r=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return O.fromDateTimes(r,n)}static merge(e){const[r,n]=e.sort((s,i)=>s.s-i.s).reduce(([s,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[s,i.union(a)]:[s.concat([i]),a]:[s,a],[[],null]);return n&&r.push(n),r}static xor(e){let r=null,n=0;const s=[],i=e.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),o=a.sort((l,u)=>l.time-u.time);for(const l of o)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&s.push(O.fromDateTimes(r,l.time)),r=null);return O.merge(s)}difference(...e){return O.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Pe}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=Xt,r={}){return this.isValid?I.create(this.s.loc.clone(r),e).formatInterval(this):Pe}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Pe}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Pe}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Pe}toFormat(e,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:Pe}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):E.invalid(this.invalidReason)}mapEndpoints(e){return O.fromDateTimes(e(this.s),e(this.e))}}class Rt{static hasDST(e=x.defaultZone){const r=g.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return re.isValidZone(e)}static normalizeZone(e){return ae(e,x.defaultZone)}static getStartOfWeek({locale:e=null,locObj:r=null}={}){return(r||k.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:r=null}={}){return(r||k.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:r=null}={}){return(r||k.create(e)).getWeekendDays().slice()}static months(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||k.create(r,n,i)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||k.create(r,n,i)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null}={}){return(s||k.create(r,n,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null}={}){return(s||k.create(r,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return k.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return k.create(r,null,"gregory").eras(e)}static features(){return{relative:aa(),localeWeek:oa()}}}function Ss(t,e){const r=s=>s.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(e)-r(t);return Math.floor(E.fromMillis(n).as("days"))}function ic(t,e,r){const n=[["years",(l,u)=>u.year-l.year],["quarters",(l,u)=>u.quarter-l.quarter+(u.year-l.year)*4],["months",(l,u)=>u.month-l.month+(u.year-l.year)*12],["weeks",(l,u)=>{const c=Ss(l,u);return(c-c%7)/7}],["days",Ss]],s={},i=t;let a,o;for(const[l,u]of n)r.indexOf(l)>=0&&(a=l,s[l]=u(t,e),o=i.plus(s),o>e?(s[l]--,t=i.plus(s),t>e&&(o=t,s[l]--,t=i.plus(s))):t=o);return[t,s,o,a]}function ac(t,e,r,n){let[s,i,a,o]=ic(t,e,r);const l=e-s,u=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);u.length===0&&(a<e&&(a=s.plus({[o]:1})),a!==s&&(i[o]=(i[o]||0)+l/(a-s)));const c=E.fromObject(i,n);return u.length>0?E.fromMillis(l,n).shiftTo(...u).plus(c):c}const Ln={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ks={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},oc=Ln.hanidec.replace(/[\[|\]]/g,"").split("");function lc(t){let e=parseInt(t,10);if(isNaN(e)){e="";for(let r=0;r<t.length;r++){const n=t.charCodeAt(r);if(t[r].search(Ln.hanidec)!==-1)e+=oc.indexOf(t[r]);else for(const s in ks){const[i,a]=ks[s];n>=i&&n<=a&&(e+=n-i)}}return parseInt(e,10)}else return e}function z({numberingSystem:t},e=""){return new RegExp(`${Ln[t||"latn"]}${e}`)}const uc="missing Intl.DateTimeFormat.formatToParts support";function T(t,e=r=>r){return{regex:t,deser:([r])=>e(lc(r))}}const cc=String.fromCharCode(160),$a=`[ ${cc}]`,Aa=new RegExp($a,"g");function dc(t){return t.replace(/\./g,"\\.?").replace(Aa,$a)}function $s(t){return t.replace(/\./g,"").replace(Aa," ").toLowerCase()}function q(t,e){return t===null?null:{regex:RegExp(t.map(dc).join("|")),deser:([r])=>t.findIndex(n=>$s(r)===$s(n))+e}}function As(t,e){return{regex:t,deser:([,r,n])=>vr(r,n),groups:e}}function Vt(t){return{regex:t,deser:([e])=>e}}function fc(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hc(t,e){const r=z(e),n=z(e,"{2}"),s=z(e,"{3}"),i=z(e,"{4}"),a=z(e,"{6}"),o=z(e,"{1,2}"),l=z(e,"{1,3}"),u=z(e,"{1,6}"),c=z(e,"{1,9}"),d=z(e,"{2,4}"),f=z(e,"{4,6}"),h=P=>({regex:RegExp(fc(P.val)),deser:([X])=>X,literal:!0}),L=(P=>{if(t.literal)return h(P);switch(P.val){case"G":return q(e.eras("short"),0);case"GG":return q(e.eras("long"),0);case"y":return T(u);case"yy":return T(d,cn);case"yyyy":return T(i);case"yyyyy":return T(f);case"yyyyyy":return T(a);case"M":return T(o);case"MM":return T(n);case"MMM":return q(e.months("short",!0),1);case"MMMM":return q(e.months("long",!0),1);case"L":return T(o);case"LL":return T(n);case"LLL":return q(e.months("short",!1),1);case"LLLL":return q(e.months("long",!1),1);case"d":return T(o);case"dd":return T(n);case"o":return T(l);case"ooo":return T(s);case"HH":return T(n);case"H":return T(o);case"hh":return T(n);case"h":return T(o);case"mm":return T(n);case"m":return T(o);case"q":return T(o);case"qq":return T(n);case"s":return T(o);case"ss":return T(n);case"S":return T(l);case"SSS":return T(s);case"u":return Vt(c);case"uu":return Vt(o);case"uuu":return T(r);case"a":return q(e.meridiems(),0);case"kkkk":return T(i);case"kk":return T(d,cn);case"W":return T(o);case"WW":return T(n);case"E":case"c":return T(r);case"EEE":return q(e.weekdays("short",!1),1);case"EEEE":return q(e.weekdays("long",!1),1);case"ccc":return q(e.weekdays("short",!0),1);case"cccc":return q(e.weekdays("long",!0),1);case"Z":case"ZZ":return As(new RegExp(`([+-]${o.source})(?::(${n.source}))?`),2);case"ZZZ":return As(new RegExp(`([+-]${o.source})(${n.source})?`),2);case"z":return Vt(/[a-z_+-/]{1,256}?/i);case" ":return Vt(/[^\S\n\r]/);default:return h(P)}})(t)||{invalidReason:uc};return L.token=t,L}const mc={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function pc(t,e,r){const{type:n,value:s}=t;if(n==="literal"){const l=/^\s+$/.test(s);return{literal:!l,val:l?" ":s}}const i=e[n];let a=n;n==="hour"&&(e.hour12!=null?a=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let o=mc[a];if(typeof o=="object"&&(o=o[i]),o)return{literal:!1,val:o}}function wc(t){return[`^${t.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,t]}function yc(t,e,r){const n=t.match(e);if(n){const s={};let i=1;for(const a in r)if(ze(r,a)){const o=r[a],l=o.groups?o.groups+1:1;!o.literal&&o.token&&(s[o.token.val[0]]=o.deser(n.slice(i,i+l))),i+=l}return[n,s]}else return[n,{}]}function gc(t){const e=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return w(t.z)||(r=re.create(t.z)),w(t.Z)||(r||(r=new _(t.Z)),n=t.Z),w(t.q)||(t.M=(t.q-1)*3+1),w(t.h)||(t.h<12&&t.a===1?t.h+=12:t.h===12&&t.a===0&&(t.h=0)),t.G===0&&t.y&&(t.y=-t.y),w(t.u)||(t.S=An(t.u)),[Object.keys(t).reduce((i,a)=>{const o=e(a);return o&&(i[o]=t[a]),i},{}),r,n]}let Hr=null;function vc(){return Hr||(Hr=g.fromMillis(1555555555555)),Hr}function bc(t,e){if(t.literal)return t;const r=I.macroTokenToFormatOpts(t.val),n=Oa(r,e);return n==null||n.includes(void 0)?t:n}function Ma(t,e){return Array.prototype.concat(...t.map(r=>bc(r,e)))}function xa(t,e,r){const n=Ma(I.parseFormat(r),t),s=n.map(a=>hc(a,t)),i=s.find(a=>a.invalidReason);if(i)return{input:e,tokens:n,invalidReason:i.invalidReason};{const[a,o]=wc(s),l=RegExp(a,"i"),[u,c]=yc(e,l,o),[d,f,h]=c?gc(c):[null,null,void 0];if(ze(c,"a")&&ze(c,"H"))throw new Re("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:n,regex:l,rawMatches:u,matches:c,result:d,zone:f,specificOffset:h}}}function Ec(t,e,r){const{result:n,zone:s,specificOffset:i,invalidReason:a}=xa(t,e,r);return[n,s,i,a]}function Oa(t,e){if(!t)return null;const n=I.create(e,t).dtFormatter(vc()),s=n.formatToParts(),i=n.resolvedOptions();return s.map(a=>pc(a,t,i))}const Fr="Invalid DateTime",Ms=864e13;function Ht(t){return new B("unsupported zone",`the zone "${t.name}" is not supported`)}function Wr(t){return t.weekData===null&&(t.weekData=er(t.c)),t.weekData}function jr(t){return t.localWeekData===null&&(t.localWeekData=er(t.c,t.loc.getMinDaysInFirstWeek(),t.loc.getStartOfWeek())),t.localWeekData}function fe(t,e){const r={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new g({...r,...e,old:r})}function Ca(t,e,r){let n=t-e*60*1e3;const s=r.offset(n);if(e===s)return[n,e];n-=(s-e)*60*1e3;const i=r.offset(n);return s===i?[n,s]:[t-Math.min(s,i)*60*1e3,Math.max(s,i)]}function Ft(t,e){t+=e*60*1e3;const r=new Date(t);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Bt(t,e,r){return Ca(gr(t),e,r)}function xs(t,e){const r=t.o,n=t.c.year+Math.trunc(e.years),s=t.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,i={...t.c,year:n,month:s,day:Math.min(t.c.day,tr(n,s))+Math.trunc(e.days)+Math.trunc(e.weeks)*7},a=E.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),o=gr(i);let[l,u]=Ca(o,r,t.zone);return a!==0&&(l+=a,u=t.zone.offset(l)),{ts:l,o:u}}function st(t,e,r,n,s,i){const{setZone:a,zone:o}=r;if(t&&Object.keys(t).length!==0||e){const l=e||o,u=g.fromObject(t,{...r,zone:l,specificOffset:i});return a?u:u.setZone(o)}else return g.invalid(new B("unparsable",`the input "${s}" can't be parsed as ${n}`))}function Wt(t,e,r=!0){return t.isValid?I.create(k.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(t,e):null}function Ur(t,e){const r=t.c.year>9999||t.c.year<0;let n="";return r&&t.c.year>=0&&(n+="+"),n+=C(t.c.year,r?6:4),e?(n+="-",n+=C(t.c.month),n+="-",n+=C(t.c.day)):(n+=C(t.c.month),n+=C(t.c.day)),n}function Os(t,e,r,n,s,i){let a=C(t.c.hour);return e?(a+=":",a+=C(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(a+=":")):a+=C(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(a+=C(t.c.second),(t.c.millisecond!==0||!n)&&(a+=".",a+=C(t.c.millisecond,3))),s&&(t.isOffsetFixed&&t.offset===0&&!i?a+="Z":t.o<0?(a+="-",a+=C(Math.trunc(-t.o/60)),a+=":",a+=C(Math.trunc(-t.o%60))):(a+="+",a+=C(Math.trunc(t.o/60)),a+=":",a+=C(Math.trunc(t.o%60)))),i&&(a+="["+t.zone.ianaName+"]"),a}const La={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Tc={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Sc={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Na=["year","month","day","hour","minute","second","millisecond"],kc=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],$c=["year","ordinal","hour","minute","second","millisecond"];function Ac(t){const e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!e)throw new Ii(t);return e}function Cs(t){switch(t.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Ac(t)}}function Ls(t,e){const r=ae(e.zone,x.defaultZone),n=k.fromObject(e),s=x.now();let i,a;if(w(t.year))i=s;else{for(const u of Na)w(t[u])&&(t[u]=La[u]);const o=sa(t)||ia(t);if(o)return g.invalid(o);const l=r.offset(s);[i,a]=Bt(t,l,r)}return new g({ts:i,zone:r,loc:n,o:a})}function Ns(t,e,r){const n=w(r.round)?!0:r.round,s=(a,o)=>(a=Mn(a,n||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(a,o)),i=a=>r.calendary?e.hasSame(t,a)?0:e.startOf(a).diff(t.startOf(a),a).get(a):e.diff(t,a).get(a);if(r.unit)return s(i(r.unit),r.unit);for(const a of r.units){const o=i(a);if(Math.abs(o)>=1)return s(o,a)}return s(t>e?-0:0,r.units[r.units.length-1])}function Ps(t){let e={},r;return t.length>0&&typeof t[t.length-1]=="object"?(e=t[t.length-1],r=Array.from(t).slice(0,t.length-1)):r=Array.from(t),[e,r]}class g{constructor(e){const r=e.zone||x.defaultZone;let n=e.invalid||(Number.isNaN(e.ts)?new B("invalid input"):null)||(r.isValid?null:Ht(r));this.ts=w(e.ts)?x.now():e.ts;let s=null,i=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[s,i]=[e.old.c,e.old.o];else{const o=r.offset(this.ts);s=Ft(this.ts,o),n=Number.isNaN(s.year)?new B("invalid input"):null,s=n?null:s,i=n?null:o}this._zone=r,this.loc=e.loc||k.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=s,this.o=i,this.isLuxonDateTime=!0}static now(){return new g({})}static local(){const[e,r]=Ps(arguments),[n,s,i,a,o,l,u]=r;return Ls({year:n,month:s,day:i,hour:a,minute:o,second:l,millisecond:u},e)}static utc(){const[e,r]=Ps(arguments),[n,s,i,a,o,l,u]=r;return e.zone=_.utcInstance,Ls({year:n,month:s,day:i,hour:a,minute:o,second:l,millisecond:u},e)}static fromJSDate(e,r={}){const n=tu(e)?e.valueOf():NaN;if(Number.isNaN(n))return g.invalid("invalid input");const s=ae(r.zone,x.defaultZone);return s.isValid?new g({ts:n,zone:s,loc:k.fromObject(r)}):g.invalid(Ht(s))}static fromMillis(e,r={}){if(Ee(e))return e<-Ms||e>Ms?g.invalid("Timestamp out of range"):new g({ts:e,zone:ae(r.zone,x.defaultZone),loc:k.fromObject(r)});throw new D(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if(Ee(e))return new g({ts:e*1e3,zone:ae(r.zone,x.defaultZone),loc:k.fromObject(r)});throw new D("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};const n=ae(r.zone,x.defaultZone);if(!n.isValid)return g.invalid(Ht(n));const s=k.fromObject(r),i=rr(e,Cs),{minDaysInFirstWeek:a,startOfWeek:o}=ws(i,s),l=x.now(),u=w(r.specificOffset)?n.offset(l):r.specificOffset,c=!w(i.ordinal),d=!w(i.year),f=!w(i.month)||!w(i.day),h=d||f,b=i.weekYear||i.weekNumber;if((h||c)&&b)throw new Re("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&c)throw new Re("Can't mix ordinal dates with month/day");const L=b||i.weekday&&!h;let P,X,K=Ft(l,u);L?(P=kc,X=Tc,K=er(K,a,o)):c?(P=$c,X=Sc,K=Vr(K)):(P=Na,X=La);let tt=!1;for(const nt of P){const Po=i[nt];w(Po)?tt?i[nt]=X[nt]:i[nt]=K[nt]:tt=!0}const rt=L?Ql(i,a,o):c?Xl(i):sa(i),Pt=rt||ia(i);if(Pt)return g.invalid(Pt);const Co=L?ms(i,a,o):c?ps(i):i,[Lo,No]=Bt(Co,u,n),Nr=new g({ts:Lo,zone:n,o:No,loc:s});return i.weekday&&h&&e.weekday!==Nr.weekday?g.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${Nr.toISO()}`):Nr}static fromISO(e,r={}){const[n,s]=zu(e);return st(n,s,r,"ISO 8601",e)}static fromRFC2822(e,r={}){const[n,s]=qu(e);return st(n,s,r,"RFC 2822",e)}static fromHTTP(e,r={}){const[n,s]=Bu(e);return st(n,s,r,"HTTP",r)}static fromFormat(e,r,n={}){if(w(e)||w(r))throw new D("fromFormat requires an input string and a format");const{locale:s=null,numberingSystem:i=null}=n,a=k.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0}),[o,l,u,c]=Ec(a,e,r);return c?g.invalid(c):st(o,l,n,`format ${r}`,e,u)}static fromString(e,r,n={}){return g.fromFormat(e,r,n)}static fromSQL(e,r={}){const[n,s]=Xu(e);return st(n,s,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new D("need to specify a reason the DateTime is invalid");const n=e instanceof B?e:new B(e,r);if(x.throwOnInvalid)throw new xl(n);return new g({invalid:n})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){const n=Oa(e,k.fromObject(r));return n?n.map(s=>s?s.val:null).join(""):null}static expandFormat(e,r={}){return Ma(I.parseFormat(e),k.fromObject(r)).map(s=>s.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Wr(this).weekYear:NaN}get weekNumber(){return this.isValid?Wr(this).weekNumber:NaN}get weekday(){return this.isValid?Wr(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?jr(this).weekday:NaN}get localWeekNumber(){return this.isValid?jr(this).weekNumber:NaN}get localWeekYear(){return this.isValid?jr(this).weekYear:NaN}get ordinal(){return this.isValid?Vr(this.c).ordinal:NaN}get monthShort(){return this.isValid?Rt.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Rt.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Rt.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Rt.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const e=864e5,r=6e4,n=gr(this.c),s=this.zone.offset(n-e),i=this.zone.offset(n+e),a=this.zone.offset(n-s*r),o=this.zone.offset(n-i*r);if(a===o)return[this];const l=n-a*r,u=n-o*r,c=Ft(l,a),d=Ft(u,o);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[fe(this,{ts:l}),fe(this,{ts:u})]:[this]}get isInLeapYear(){return $t(this.year)}get daysInMonth(){return tr(this.year,this.month)}get daysInYear(){return this.isValid?We(this.year):NaN}get weeksInWeekYear(){return this.isValid?yt(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?yt(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){const{locale:r,numberingSystem:n,calendar:s}=I.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:s}}toUTC(e=0,r={}){return this.setZone(_.instance(e),r)}toLocal(){return this.setZone(x.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(e=ae(e,x.defaultZone),e.equals(this.zone))return this;if(e.isValid){let s=this.ts;if(r||n){const i=e.offset(this.ts),a=this.toObject();[s]=Bt(a,i,e)}return fe(this,{ts:s,zone:e})}else return g.invalid(Ht(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:n}={}){const s=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:n});return fe(this,{loc:s})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;const r=rr(e,Cs),{minDaysInFirstWeek:n,startOfWeek:s}=ws(r,this.loc),i=!w(r.weekYear)||!w(r.weekNumber)||!w(r.weekday),a=!w(r.ordinal),o=!w(r.year),l=!w(r.month)||!w(r.day),u=o||l,c=r.weekYear||r.weekNumber;if((u||a)&&c)throw new Re("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new Re("Can't mix ordinal dates with month/day");let d;i?d=ms({...er(this.c,n,s),...r},n,s):w(r.ordinal)?(d={...this.toObject(),...r},w(r.day)&&(d.day=Math.min(tr(d.year,d.month),d.day))):d=ps({...Vr(this.c),...r});const[f,h]=Bt(d,this.o,this.zone);return fe(this,{ts:f,o:h})}plus(e){if(!this.isValid)return this;const r=E.fromDurationLike(e);return fe(this,xs(this,r))}minus(e){if(!this.isValid)return this;const r=E.fromDurationLike(e).negate();return fe(this,xs(this,r))}startOf(e,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},s=E.normalizeUnit(e);switch(s){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(s==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:a}=this;a<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(s==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(e,r){return this.isValid?this.plus({[e]:1}).startOf(e,r).minus(1):this}toFormat(e,r={}){return this.isValid?I.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):Fr}toLocaleString(e=Xt,r={}){return this.isValid?I.create(this.loc.clone(r),e).formatDateTime(this):Fr}toLocaleParts(e={}){return this.isValid?I.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:s=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=e==="extended";let o=Ur(this,a);return o+="T",o+=Os(this,a,r,n,s,i),o}toISODate({format:e="extended"}={}){return this.isValid?Ur(this,e==="extended"):null}toISOWeekDate(){return Wt(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:s=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(s?"T":"")+Os(this,a==="extended",r,e,n,i):null}toRFC2822(){return Wt(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Wt(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Ur(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let s="HH:mm:ss.SSS";return(r||e)&&(n&&(s+=" "),r?s+="z":e&&(s+="ZZ")),Wt(this,s,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Fr}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};const r={...this.c};return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",n={}){if(!this.isValid||!e.isValid)return E.invalid("created by diffing an invalid DateTime");const s={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=ru(r).map(E.normalizeUnit),a=e.valueOf()>this.valueOf(),o=a?this:e,l=a?e:this,u=ac(o,l,i,s);return a?u.negate():u}diffNow(e="milliseconds",r={}){return this.diff(g.now(),e,r)}until(e){return this.isValid?O.fromDateTimes(this,e):this}hasSame(e,r,n){if(!this.isValid)return!1;const s=e.valueOf(),i=this.setZone(e.zone,{keepLocalTime:!0});return i.startOf(r,n)<=s&&s<=i.endOf(r,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;const r=e.base||g.fromObject({},{zone:this.zone}),n=e.padding?this<r?-e.padding:e.padding:0;let s=["years","months","days","hours","minutes","seconds"],i=e.unit;return Array.isArray(e.unit)&&(s=e.unit,i=void 0),Ns(r,this.plus(n),{...e,numeric:"always",units:s,unit:i})}toRelativeCalendar(e={}){return this.isValid?Ns(e.base||g.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(g.isDateTime))throw new D("min requires all arguments be DateTimes");return ys(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(g.isDateTime))throw new D("max requires all arguments be DateTimes");return ys(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,n={}){const{locale:s=null,numberingSystem:i=null}=n,a=k.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0});return xa(a,e,r)}static fromStringExplain(e,r,n={}){return g.fromFormatExplain(e,r,n)}static get DATE_SHORT(){return Xt}static get DATE_MED(){return _i}static get DATE_MED_WITH_WEEKDAY(){return Ll}static get DATE_FULL(){return Di}static get DATE_HUGE(){return Ri}static get TIME_SIMPLE(){return Vi}static get TIME_WITH_SECONDS(){return Hi}static get TIME_WITH_SHORT_OFFSET(){return Fi}static get TIME_WITH_LONG_OFFSET(){return Wi}static get TIME_24_SIMPLE(){return ji}static get TIME_24_WITH_SECONDS(){return Ui}static get TIME_24_WITH_SHORT_OFFSET(){return zi}static get TIME_24_WITH_LONG_OFFSET(){return qi}static get DATETIME_SHORT(){return Bi}static get DATETIME_SHORT_WITH_SECONDS(){return Gi}static get DATETIME_MED(){return Zi}static get DATETIME_MED_WITH_SECONDS(){return Yi}static get DATETIME_MED_WITH_WEEKDAY(){return Nl}static get DATETIME_FULL(){return Ki}static get DATETIME_FULL_WITH_SECONDS(){return Ji}static get DATETIME_HUGE(){return Qi}static get DATETIME_HUGE_WITH_SECONDS(){return Xi}}function it(t){if(g.isDateTime(t))return t;if(t&&t.valueOf&&Ee(t.valueOf()))return g.fromJSDate(t);if(t&&typeof t=="object")return g.fromObject(t);throw new D(`Unknown datetime argument: ${t}, of type ${typeof t}`)}function dn(t){const e=g.fromObject(kl(t,["timezone"]),{zone:t.timezone});if(!e.isValid)throw new Error(e.invalidExplanation??void 0);return e}function Sh(t,e){if(!t.isValid)throw new Error(`Invalid input: '${t.toISO()}'`);return{day:t.day,month:t.month,year:t.year,hour:t.hour,minute:t.minute,second:t.second,millisecond:t.millisecond,timezone:e??t.zoneName}}const Mc=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ct(t,e){return t?Mc.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Me(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function xc(t){return Me(t).map(e=>t[e])}function Oc(t,e){return t.includes(e)}function Cc(t){return!!t}var Is;(function(t){t.Upper="upper",t.Lower="lower"})(Is||(Is={}));var _s;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(_s||(_s={}));function Lc(t){return t?t.map(Pa).filter(Cc).join(`
`):""}function Pa(t){return t?t instanceof Error?t.message:ct(t,"message")?String(t.message):String(t):""}function qe(t){return!!t&&typeof t=="object"}function Ia(t,e){let r=!1;const n=Me(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(Me(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function Nc(t,e){try{return Pc(t,e),!0}catch{return!1}}function Pc(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Ic(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Ic();function _c(t,e){var o;const r=e==null?void 0:e.constructor,n=(o=t==null?void 0:t.constructor)==null?void 0:o.prototype,s=(t==null?void 0:t.constructor)===r,i=r&&n?n instanceof r:!1,a=s||i;return Kt(t)===Kt(e)&&a}const _a="__vir__shape__definition__key__do__not__use__in__actual__objects";function Da(t){return ct(t,_a)}const Nn=Symbol("and"),Pn=Symbol("instance"),In=Symbol("enum"),Ra=Symbol("exact"),_n=Symbol("indexed-keys"),Dn=Symbol("or"),Rn=Symbol("unknown"),Dc=[Nn,In,Ra,_n,Pn,Dn,Rn],Va="__vir__shape__specifier__key__do__not__use__in__actual__objects";function Rc(...t){return Qe(t,Nn)}function fn(...t){return Qe(t,Pn)}function nr(...t){return Qe(t,In)}function dt(...t){return Qe(t,_n)}function ft(...t){return Qe(t,Dn)}function Vc(t){return Qe([t],Rn)}function Er(t){return Ce(t,Nn)}function Tr(t){return Ce(t,Pn)}function Sr(t){return Ce(t,In)}function kr(t){return Ce(t,Ra)}function $r(t){return Ce(t,_n)}function xt(t){return Ce(t,Dn)}function Ar(t){return Ce(t,Rn)}function Ce(t,e){const r=Ot(t);return!!r&&r.specifierType===e}function Qe(t,e){return{[Va]:!0,specifierType:e,parts:t}}function ye(t,e,r,n){const s=Ot(e);if(s){if(Tr(s))return t instanceof s.parts[0];if(Er(s))return s.parts.every(i=>ye(t,i));if(xt(s))return s.parts.some(i=>ye(t,i));if(kr(s))return qe(t)?ye(t,s.parts[0]):t===s.parts[0];if(Sr(s))return Object.values(s.parts[0]).some(i=>i===t);if($r(s))return qe(t)?Hc(t,s,!!r)&&xc(t).every(i=>ye(i,s.parts[0].values)):!1;if(Ar(s))return!0}return n?e===t:_c(t,e)}function Hc(t,e,r){const n=e.parts[0].required,s=e.parts[0].keys;if(r)if(n){const i=Vn(e);return M(i,"boolean")?i:i.every(a=>Me(t).some(o=>ye(o,a,!1,!0)))}else return!0;else return Me(t).every(i=>ye(i,s))}function Vn(t){const e=t.parts[0].keys,r=Ot(e);if(Ir(e))return[e];if(r){if(Tr(r))return!1;if(Er(r))return!1;if(xt(r)){const n=r.parts.map(i=>Vn(dt({...t.parts[0],keys:i})));let s;return n.forEach(i=>{M(i,"boolean")&&(i&&s==null?s=!0:s=!1)}),M(s,"boolean")?s:n.flat().filter(Ir)}else if(kr(r)){const n=r.parts.filter(Ir);return n.length!==r.parts.length?!1:n}else{if(Sr(r))return Object.values(r.parts[0]);if($r(r))return!1;if(Ar(r))return!0}}return!1}function Ot(t){if(qe(t)&&ct(t,Va)){if(!ct(t,"parts")||!M(t.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!ct(t,"specifierType")||!Oc(Dc,t.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return t}}class Ds extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function hn(t,e=!1){return lt(t)}function lt(t){const e=Ot(t);if(e)if(Tr(e)){const r=e.parts[0];try{return new r}catch(n){throw new Ds(`Failed to create default value for classShape for class '${r.name}': ${Pa(n)}`)}}else{if(xt(e)||kr(e))return lt(e.parts[0]);if(Er(e))return e.parts.reduce((r,n)=>Object.assign(r,lt(n)),{});if(Sr(e))return Object.values(e.parts[0])[0];if($r(e)){const r=Vn(e);return!e.parts[0].required||M(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,lt(e.parts[0].values)]))}else{if(Ar(e))return e.parts[0]??{};throw new Ds(`found specifier but it matches no expected specifiers: ${String(e.specifierType)}`)}}return Da(t)?hn(t.shape):t instanceof RegExp?t:M(t,"array")?t.map(lt):qe(t)?Ia(t,(r,n)=>hn(n)):t}function U(t,e=!1){return{shape:t,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:e,get defaultValue(){return hn(t)},[_a]:!0}}class F extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function Ha(t,e,r={}){try{return Fa(t,e,r),!0}catch{return!1}}function Fa(t,e,r={}){ee({subject:t,shape:e.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}function mn(t){return[t[0],...t.slice(1).map(e=>`'${String(e)}'`)].join(" -> ")}function ee({subject:t,shape:e,keys:r,options:n}){if(Ar(e))return!0;if(Da(e))return ee({subject:t,shape:e.shape,keys:r,options:n});const s=mn(r);if(Ot(t))throw new F(`Shape test subjects cannot be contain shape specifiers but one was found at ${s}.`);if(!ye(t,e,!n.ignoreExtraKeys))throw new F(`Subject does not match shape definition at key ${s}`);if(M(e,"function"))return M(t,"function");if(Tr(e))return t instanceof e.parts[0];if(qe(t)){const a=t,o=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1])),l=[];let u=!1;if(xt(e)){const c=[];u=e.parts.some(d=>{try{const f=ee({subject:t,shape:d,keys:r,options:{...n}});return Object.assign(o,f),!0}catch(f){if(f instanceof F)return c.push(f),!1;throw f}}),!u&&Nc(c,1)&&l.push(c[0])}else if(Er(e))u=e.parts.every(c=>{try{const d=ee({subject:t,shape:c,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(o,d),!0}catch(d){if(d instanceof F)return l.push(d),!1;throw d}});else if(kr(e)){const c=ee({subject:t,shape:e.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(o,c),u=!0}else{if(Sr(e))throw new F(`Cannot compare an enum specifier to an object at ${s}`);if(M(e,"array")&&M(a,"array"))u=a.every((c,d)=>{const f=e.some(h=>{try{return ee({subject:c,shape:h,keys:[...r,d],options:n}),!0}catch(b){if(b instanceof F)return l.push(b),!1;throw b}});return o[d]=f,f});else if($r(e)){const c=Ia(t,(d,f)=>(n.ignoreExtraKeys||ee({shape:e.parts[0].keys,subject:d,keys:[...r,d],options:n}),ee({shape:e.parts[0].values,subject:f,keys:[...r,d],options:n}),!0));Object.assign(o,c),u=!0}else{const c=Fc({keys:r,options:n,shape:e,subject:t});Object.assign(o,c),u=!0}}if(l.length)throw new F(Lc(l));if(!u){const d=`Failed on key(s): ${Object.keys(o).filter(f=>!o[f]).map(f=>mn([...r,f])).join(",")}`;throw new F(d)}return n.ignoreExtraKeys||Object.entries(o).forEach(([c,d])=>{if(!d)throw new F(`subject as extra key '${c}' in ${s}.`)}),o}else if(n.exactValues)return t===e;return!0}function Fc({keys:t,options:e,shape:r,subject:n}){const s=mn(t),i={};if(qe(r)){const a=new Set(Me(r)),o=new Set(Me(n));a.forEach(l=>{l in n&&o.add(l)}),e.ignoreExtraKeys||o.forEach(l=>{if(!a.has(l))throw new F(`Subject has extra key '${String(l)}' in ${s}`)}),a.forEach(l=>{var f;const u=r[l],c=xt(u)?u.parts.includes(void 0):!1,d=((f=u==null?void 0:u.includes)==null?void 0:f.call(u,void 0))||u===void 0;if(!o.has(l)&&!c&&!d)throw new F(`Subject missing key '${String(l)}' in ${s}`)}),o.forEach(l=>{const u=n[l];if(e.ignoreExtraKeys&&!a.has(l))return;const c=r[l];ee({subject:u,shape:c,keys:[...t,l],options:e}),i[l]=!0})}else throw new F(`shape definition at ${s} was not an object.`);return i}const Wc=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],jc=Wc.reduce((t,e)=>(t[e]=e,t),{}),kh=x.defaultZone.name,Wa=jc.UTC;var Rs;(function(t){t.Date="date",t.Time="time",t.DateTime="datetime-local"})(Rs||(Rs={}));const Uc=["hour","minute","second","millisecond"],zc=U({hour:14,minute:19,second:7,millisecond:877,timezone:Wa}),qc=U({year:2023,month:6,day:5,timezone:Wa}),zr=U(Rc(qc,zc));var v;(function(t){t.Years="years",t.Quarters="quarters",t.Months="months",t.Weeks="weeks",t.Days="days",t.Hours="hours",t.Minutes="minutes",t.Seconds="seconds",t.Milliseconds="milliseconds"})(v||(v={}));v.Milliseconds+"",v.Seconds+"",v.Minutes+"",v.Hours+"",v.Days+"",v.Weeks+"",v.Months+"",v.Quarters+"",v.Years+"";v.Milliseconds,v.Seconds,v.Minutes,v.Hours,v.Days,v.Weeks,v.Months,v.Quarters,v.Years;function Vs(t,e){return Al(t,(r,n)=>e==null||!M(n,"number")?n:Sl({number:n,digits:e}))}function $h(t,e){if(Bc(t))return{[e]:1/0};if(Gc(t))return{[e]:-1/0};const n=E.fromObject(t).as(e);return{[e]:n}}function Bc(t){return Object.values(t).some(e=>e===1/0)}function Gc(t){return Object.values(t).some(e=>e===-1/0)}const Hs={longterm:1,casual:0},ja={[v.Years]:"longterm",[v.Quarters]:"longterm",[v.Months]:"longterm",[v.Weeks]:"casual",[v.Days]:"casual",[v.Hours]:"casual",[v.Minutes]:"casual",[v.Seconds]:"casual",[v.Milliseconds]:"casual"};function Zc(t){return t.map(n=>ja[n]).reduce((n,s)=>Hs[s]>Hs[n]?s:n)}var ht;(function(t){t.AdditiveUnits="additive-units",t.EquivalentUnits="equivalent-units"})(ht||(ht={}));function Yc({start:t,end:e,units:r,unit:n,diffType:s,decimalCount:i}){const a=dn(t),o=dn(e),l=r??[n],u=l.length===1?ht.EquivalentUnits:s;if(!u)throw new Error("Failed to diff dates: no diffType was provided.");if(u===ht.AdditiveUnits){const c=Zc(l),d=o.diff(a,l,{conversionAccuracy:c}).toObject();return Vs(d,i)}else if(u===ht.EquivalentUnits){const c=l.map(f=>{const b=o.diff(a,f,{conversionAccuracy:ja[f]}).toObject()[f];if(b==null)throw new Error(`Internal date-vir error: failed to find duration for '${f}'`);return[f,b]}),d=Tl(c);return Vs(d,i)}else throw new Error(`Failed to diff dates: provided diffType is invalid: '${u}'`)}function Ah({relativeTo:t,fullDate:e}){return Yc({start:t,end:e,unit:v.Milliseconds}).milliseconds>=0}function Ie(t){return dn(t).toMillis()}const Kc={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};$l(Kc,Uc);x.defaultLocale;v.Milliseconds+"",v.Seconds+"",v.Minutes+"",v.Hours+"",v.Days+"",v.Weeks+"",v.Months+"",v.Quarters+"",v.Years+"";const Jc=U({listen(t){return()=>!1},destroy(){},removeListener(t){return!1},value:Vc()});function qr(t){return Ha(t,Jc,{allowExtraKeys:!0})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=globalThis,Hn=Gt.ShadowRoot&&(Gt.ShadyCSS===void 0||Gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fn=Symbol(),Fs=new WeakMap;let Ua=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Fn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Hn&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=Fs.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Fs.set(r,e))}return e}toString(){return this.cssText}};const te=t=>new Ua(typeof t=="string"?t:t+"",void 0,Fn),Zt=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,s,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new Ua(r,t,Fn)},Qc=(t,e)=>{if(Hn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),s=Gt.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,t.appendChild(n)}},Ws=Hn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return te(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Xc,defineProperty:ed,getOwnPropertyDescriptor:td,getOwnPropertyNames:rd,getOwnPropertySymbols:nd,getPrototypeOf:sd}=Object,ue=globalThis,js=ue.trustedTypes,id=js?js.emptyScript:"",Br=ue.reactiveElementPolyfillSupport,mt=(t,e)=>t,sr={toAttribute(t,e){switch(e){case Boolean:t=t?id:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Wn=(t,e)=>!Xc(t,e),Us={attribute:!0,type:String,converter:sr,reflect:!1,hasChanged:Wn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ue.litPropertyMetadata??(ue.litPropertyMetadata=new WeakMap);class De extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Us){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,r);s!==void 0&&ed(this.prototype,e,s)}}static getPropertyDescriptor(e,r,n){const{get:s,set:i}=td(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);i.call(this,a),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Us}static _$Ei(){if(this.hasOwnProperty(mt("elementProperties")))return;const e=sd(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(mt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mt("properties"))){const r=this.properties,n=[...rd(r),...nd(r)];for(const s of n)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,s]of r)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const s=this._$Eu(r,n);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)r.unshift(Ws(s))}else e!==void 0&&r.push(Ws(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EC(e,r){var i;const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:sr).toAttribute(r,n.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,r){var i;const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=n.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:sr;this._$Em=s,this[s]=o.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Wn)(this[e],r))return;this.P(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,a]of s)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}De.elementStyles=[],De.shadowRootOptions={mode:"open"},De[mt("elementProperties")]=new Map,De[mt("finalized")]=new Map,Br==null||Br({ReactiveElement:De}),(ue.reactiveElementVersions??(ue.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=globalThis,ir=pt.trustedTypes,zs=ir?ir.createPolicy("lit-html",{createHTML:t=>t}):void 0,za="$lit$",oe=`lit$${(Math.random()+"").slice(9)}$`,qa="?"+oe,ad=`<${qa}>`,xe=document,gt=()=>xe.createComment(""),vt=t=>t===null||typeof t!="object"&&typeof t!="function",Ba=Array.isArray,od=t=>Ba(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Gr=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qs=/-->/g,Bs=/>/g,he=RegExp(`>|${Gr}(?:([^\\s"'>=/]+)(${Gr}*=${Gr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gs=/'/g,Zs=/"/g,Ga=/^(?:script|style|textarea|title)$/i,ld=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),ud=ld(1),J=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Ys=new WeakMap,ge=xe.createTreeWalker(xe,129);function Za(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return zs!==void 0?zs.createHTML(e):e}const cd=(t,e)=>{const r=t.length-1,n=[];let s,i=e===2?"<svg>":"",a=at;for(let o=0;o<r;o++){const l=t[o];let u,c,d=-1,f=0;for(;f<l.length&&(a.lastIndex=f,c=a.exec(l),c!==null);)f=a.lastIndex,a===at?c[1]==="!--"?a=qs:c[1]!==void 0?a=Bs:c[2]!==void 0?(Ga.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=he):c[3]!==void 0&&(a=he):a===he?c[0]===">"?(a=s??at,d=-1):c[1]===void 0?d=-2:(d=a.lastIndex-c[2].length,u=c[1],a=c[3]===void 0?he:c[3]==='"'?Zs:Gs):a===Zs||a===Gs?a=he:a===qs||a===Bs?a=at:(a=he,s=void 0);const h=a===he&&t[o+1].startsWith("/>")?" ":"";i+=a===at?l+ad:d>=0?(n.push(u),l.slice(0,d)+za+l.slice(d)+oe+h):l+oe+(d===-2?o:h)}return[Za(t,i+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class bt{constructor({strings:e,_$litType$:r},n){let s;this.parts=[];let i=0,a=0;const o=e.length-1,l=this.parts,[u,c]=cd(e,r);if(this.el=bt.createElement(u,n),ge.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=ge.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(za)){const f=c[a++],h=s.getAttribute(d).split(oe),b=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:b[2],strings:h,ctor:b[1]==="."?fd:b[1]==="?"?hd:b[1]==="@"?md:Mr}),s.removeAttribute(d)}else d.startsWith(oe)&&(l.push({type:6,index:i}),s.removeAttribute(d));if(Ga.test(s.tagName)){const d=s.textContent.split(oe),f=d.length-1;if(f>0){s.textContent=ir?ir.emptyScript:"";for(let h=0;h<f;h++)s.append(d[h],gt()),ge.nextNode(),l.push({type:2,index:++i});s.append(d[f],gt())}}}else if(s.nodeType===8)if(s.data===qa)l.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(oe,d+1))!==-1;)l.push({type:7,index:i}),d+=oe.length-1}i++}}static createElement(e,r){const n=xe.createElement("template");return n.innerHTML=e,n}}function Be(t,e,r=t,n){var a,o;if(e===J)return e;let s=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const i=vt(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),i===void 0?s=void 0:(s=new i(t),s._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=s:r._$Cl=s),s!==void 0&&(e=Be(t,s._$AS(t,e.values),s,n)),e}class dd{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,s=((e==null?void 0:e.creationScope)??xe).importNode(r,!0);ge.currentNode=s;let i=ge.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new Ct(i,i.nextSibling,this,e):l.type===1?u=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(u=new pd(i,this,e)),this._$AV.push(u),l=n[++o]}a!==(l==null?void 0:l.index)&&(i=ge.nextNode(),a++)}return ge.currentNode=xe,s}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class Ct{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,s){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Be(this,e,r),vt(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==J&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):od(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==S&&vt(this._$AH)?this._$AA.nextSibling.data=e:this.T(xe.createTextNode(e)),this._$AH=e}$(e){var i;const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=bt.createElement(Za(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(r);else{const a=new dd(s,this),o=a.u(this.options);a.p(r),this.T(o),this._$AH=a}}_$AC(e){let r=Ys.get(e.strings);return r===void 0&&Ys.set(e.strings,r=new bt(e)),r}k(e){Ba(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const i of e)s===r.length?r.push(n=new Ct(this.S(gt()),this.S(gt()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Mr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,s,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}_$AI(e,r=this,n,s){const i=this.strings;let a=!1;if(i===void 0)e=Be(this,e,r,0),a=!vt(e)||e!==this._$AH&&e!==J,a&&(this._$AH=e);else{const o=e;let l,u;for(e=i[0],l=0;l<i.length-1;l++)u=Be(this,o[n+l],r,l),u===J&&(u=this._$AH[l]),a||(a=!vt(u)||u!==this._$AH[l]),u===S?e=S:e!==S&&(e+=(u??"")+i[l+1]),this._$AH[l]=u}a&&!s&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class fd extends Mr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}class hd extends Mr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class md extends Mr{constructor(e,r,n,s,i){super(e,r,n,s,i),this.type=5}_$AI(e,r=this){if((e=Be(this,e,r,0)??S)===J)return;const n=this._$AH,s=e===S&&n!==S||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==S&&(n===S||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class pd{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Be(this,e)}}const Zr=pt.litHtmlPolyfillSupport;Zr==null||Zr(bt,Ct),(pt.litHtmlVersions??(pt.litHtmlVersions=[])).push("3.1.2");const wd=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let s=n._$litPart$;if(s===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=s=new Ct(e.insertBefore(gt(),i),i,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class wt extends De{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wd(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return J}}var Ci;wt._$litElement$=!0,wt.finalized=!0,(Ci=globalThis.litElementHydrateSupport)==null||Ci.call(globalThis,{LitElement:wt});const Yr=globalThis.litElementPolyfillSupport;Yr==null||Yr({LitElement:wt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xr=t=>(...e)=>({_$litDirective$:t,values:e});class Lt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yd={attribute:!0,type:String,converter:sr,reflect:!1,hasChanged:Wn},gd=(t=yd,e,r)=>{const{kind:n,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(r.name,t),n==="accessor"){const{name:a}=r;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,t)},init(o){return o!==void 0&&this.P(a,void 0,t),o}}}if(n==="setter"){const{name:a}=r;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,t)}}throw Error("Unsupported decorator location: "+n)};function vd(t){return(e,r)=>typeof r=="object"?gd(t,e,r):((n,s,i)=>{const a=s.hasOwnProperty(i);return s.constructor.createProperty(i,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(s,i):void 0})(t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Or=xr(class extends Lt{constructor(t){var e;if(super(t),t.type!==jn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(e)}const r=t.element.classList;for(const i of this.st)i in e||(r.remove(i),this.st.delete(i));for(const i in e){const a=!!e[i];a===this.st.has(i)||(s=this.nt)!=null&&s.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return J}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pn extends Lt{constructor(e){if(super(e),this.it=S,e.type!==jn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===S||e==null)return this._t=void 0,this.it=e;if(e===J)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}pn.directiveName="unsafeHTML",pn.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ks extends pn{}Ks.directiveName="unsafeSVG",Ks.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bd(t,e,r){return t?e(t):r==null?void 0:r(t)}class Ya extends wt{}function Js(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var Ge;(function(t){t.Upper="upper",t.Lower="lower"})(Ge||(Ge={}));function Ed(t){return t.toLowerCase()!==t.toUpperCase()}function Qs(t,e,r){if(!t&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<t.length;n++){const s=t[n]||"";if(!Ed(s)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(e===Ge.Upper&&s!==s.toUpperCase())return!1;if(e===Ge.Lower&&s!==s.toLowerCase())return!1}return!0}function Td(t){return t.split("").reduce((r,n,s,i)=>{const a=s>0&&i[s-1]||"",o=s<i.length-1&&i[s+1]||"",l=Qs(a,Ge.Lower,{blockNoCaseCharacters:!0})||Qs(o,Ge.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||s===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}var Xs;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Xs||(Xs={}));function Sd(t){return!!t&&typeof t=="object"}function kd(t,e){let r=!1;const n=Js(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(Js(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function $d(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}$d();function Xe(t){if(Sd(t))return kd(t,(r,n)=>{if(!M(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Td(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?te(r):r.startsWith("-")?Zt`-${te(r)}`:Zt`--${te(r)}`;return{name:a,value:Zt`var(${a}, ${te(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${Xe.name}' function.`)}function Ad(t,e,r){const n=!e.length&&!r.length,s=t.length?!1:!e.filter(o=>!!o.index).length;if(n||s)return[...t];const i=t.map(o=>[o]);return i.length||(i[0]=[]),r.forEach(o=>{o>=0&&o<t.length&&(i[o]=[])}),e.forEach(o=>{const l=i[o.index];l&&l.splice(0,0,...o.values)}),i.flat()}function Yt(t){return mr(t,"_elementVirIsMinimalDefinitionWithInputs")&&!!t._elementVirIsMinimalDefinitionWithInputs}function Un(t){return mr(t,"tagName")&&!!t.tagName&&typeof t.tagName=="string"}function Ka(t){return Ho(t,e=>{if(Yt(e))return e.definition;if(Un(e))return e.tagInterpolationKey||e},pr)}const Ja=new WeakMap;function Md(t,e){var s;const r=Ka(e);return(s=Qa(Ja,[t,...r]).value)==null?void 0:s.template}function xd(t,e,r){const n=Ka(e);return eo(Ja,[t,...n],r)}function Qa(t,e,r=0){const{currentTemplateAndNested:n,reason:s}=Xa(t,e,r);return n?r===e.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Qa(n.nested,e,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:s}}function Xa(t,e,r){const n=e[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!t.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const s=t.get(n);return s==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:s,reason:"key and value exists"}}function eo(t,e,r,n=0){const{currentTemplateAndNested:s,currentKey:i,reason:a}=Xa(t,e,n);if(!i)return{result:!1,reason:a};const o=s??{nested:void 0,template:void 0};if(s||t.set(i,o),n===e.length-1)return o.template=r,{result:!0,reason:"set value at end of keys array"};const l=o.nested??new WeakMap;return o.nested||(o.nested=l),eo(l,e,r,n+1)}const Od=new WeakMap;function to(t,e,r){const n=Md(t,e),s=n??r();if(!n){const o=xd(t,e,s);if(o.result)Od.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=s.valuesTransform(e),a=Ad(e,i.valueInsertions,i.valueIndexDeletions);return{strings:s.templateStrings,values:a}}function ro(t,e,r,n){const s=[],i=[],a=[],o=[];return t.forEach((u,c)=>{const d=s.length-1,f=s[d],h=c-1,b=e[h];n&&n(u);let L,P=[];if(typeof f=="string"&&(L=r(f,u,b),L)){s[d]=f+L.replacement,a.push(h);const K=L.getExtraValues;P=K?K(b):[],P.length&&K?(s[d]+=" ",P.forEach((tt,rt)=>{rt&&s.push(" ")}),o.push(tt=>{const rt=tt[h],Pt=K(rt);return{index:h,values:Pt}}),s.push(u)):s[d]+=u}L||s.push(u);const X=t.raw[c];L?(i[d]=i[d]+L.replacement+X,P.length&&P.forEach(()=>{i.push("")})):i.push(X)}),{templateStrings:Object.assign([],s,{raw:i}),valuesTransform(u){const c=o.map(d=>d(u)).flat();return{valueIndexDeletions:a,valueInsertions:c}}}}function Cd(...[t,e,r]){if(Un(r))return{replacement:r.tagName,getExtraValues:void 0}}function Ld(t,e){return ro(t,e,Cd)}function A(t,...e){const r=to(t,e,()=>Ld(t,e));return Zt(r.strings,...r.values)}const Nd={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function no(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const r=e.host;return r instanceof Ya?!0:no(r)}function so(t,e){const r=t.instanceState;R(e).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),"instanceInputs"in t&&R(t.instanceInputs).forEach(n=>{n in e||(t.instanceInputs[n]=void 0)}),Pd(t)}function Pd(t){t._haveInputsBeenSet||(t._haveInputsBeenSet=!0)}function ei(t,e){const r=[t,"-"].join("");Object.keys(e).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${t}': CSS property names must begin with the element's tag name.`)})}class Id extends CustomEvent{get type(){return this._type}constructor(e,r){super(typeof e=="string"?e:e.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function zn(){return t=>{var e;return e=class extends Id{constructor(r){super(t,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:t})}},Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}}function ce(){return zn()}function _d(t,e){return e?Object.keys(e).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const s=zn()([t,n].join("-"));return r[n]=s,r},{}):{}}function Dd(t){return t?Li(t,e=>e):{}}const qn=Symbol("element-vir-state-setup");function Rd(t){return Ue(t)?qn in t:!1}function io(t,e){e in t||vd()(t,e)}function Vd(t,e,r){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${r.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${r.toLowerCase()}'.`)}function ti(t,e){const r=t;function n(a){e?Vd(a,t,t.tagName):io(t,a)}function s(a,o){return n(o),r[o]}return new Proxy({},{get:s,set(a,o,l){const u=Rd(l)?l[qn]():l;n(o);const c=r[o];function d(h){a[o]=h,r[o]=h}const f=t.observablePropertyListenerMap[o];if(c!==u&&qr(c)&&f&&c.removeListener(f),qr(u))if(f)u.listen(f);else{let h=function(){t.requestUpdate()};t.observablePropertyListenerMap[o]=h,u.listen(h)}else qr(c)&&(t.observablePropertyListenerMap[o]=void 0);return d(u),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,o){if(o in a)return{get value(){return s(a,o)},configurable:!0,enumerable:!0}},has(a,o){return Reflect.has(a,o)}})}function Hd({hostClassNames:t,cssVars:e}){return{hostClasses:Li(t,(r,n)=>({name:te(n),selector:te(`:host(.${n})`)})),cssVars:e}}function Fd({host:t,hostClassesInit:e,hostClassNames:r,state:n,inputs:s}){e&&R(e).forEach(i=>{const a=e[i],o=r[i];typeof a=="function"&&(a({state:n,inputs:s})?t.classList.add(o):t.classList.remove(o))})}function Wd({element:t,eventsMap:e,cssVars:r,slotNamesMap:n}){function s(a){R(a).forEach(o=>{const l=a[o];t.instanceState[o]=l})}return{cssVars:r,slotNames:n,dispatch:a=>t.dispatchEvent(a),events:e,host:t,inputs:t.instanceInputs,state:t.instanceState,updateState:s}}function jd(t){return t?t.reduce((r,n)=>(r[n]=n,r),{}):{}}var Ud=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Nt(t){var e;const r=t;if(!M(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!M(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...Nd,...r.options},s=_d(r.tagName,r.events),i=Dd(r.hostClasses);r.hostClasses&&ei(r.tagName,r.hostClasses),r.cssVars&&ei(r.tagName,r.cssVars);const a=r.cssVars?Xe(r.cssVars):{},o=jd(r.slotNames),l=typeof r.styles=="function"?r.styles(Hd({hostClassNames:i,cssVars:a})):r.styles||A``,u=r.renderCallback;function c(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=(e=class extends Ya{createRenderParams(){return Wd({element:this,eventsMap:s,cssVars:a,slotNamesMap:o})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{no(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Nt.name}' to define ${r.tagName}.`),this._hasRendered=!0;const f=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(f)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const h=u(f);if(h instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Fd({host:f.host,hostClassesInit:r.hostClasses,hostClassNames:i,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=qo(f,`Failed to render ${r.tagName}`);return console.error(h),this._lastRenderError=h,$e(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const f=this.createRenderParams();if(r.initCallback(f)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{rn(f,"destroy")&&M(f.destroy,"function")&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const f=this.createRenderParams();if(r.cleanupCallback(f)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}assignInputs(f){so(this,f)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:ti(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:ti(this,!n.allowPolymorphicState)});const f=r.stateInitStatic||{};R(f).forEach(h=>{io(this,h),this.instanceState[h]=f[h]}),this.definition=d}},Ud(e,"anonymousClass"),Object.defineProperty(e,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(e,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(e,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(e,"assign",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(e,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(e,"events",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(e,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(e,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(e,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(e,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(e,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(e,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),e);return Object.defineProperties(d,{name:{value:Uo(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:f=>f instanceof d,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,d),d}function Q(){return t=>{const e=t;if(!M(e,"object"))throw new Error("Cannot define element with non-object init: ${init}");return Nt({...e,options:{ignoreUnsetInputs:!1,...e.options}})}}class zd extends pe{}function ri(t){return{[qn](){return new zd(t)}}}function ao(t,e){return wn(t,e),t.element}function qd(t){try{return t.options.host.tagName.toLowerCase()}catch{return}}function wn(t,e){const r=qd(t),n=r?`: in ${r}`:"";if(t.type!==jn.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element${n}.`);if(!t.element)throw new Error(`${e} directive found no element${n}.`)}function ni(t){return!rl(t)}function ar(t){return t instanceof Error}function N(t,e){return Bd(t,e)}const Bd=xr(class extends Lt{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=ao(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(t,e){const r=typeof t=="string"?t:t.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(r,e)),J}}),Kr="onResize",oo=xr(class extends Lt{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(e=>this.fireCallback(e))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),wn(t,Kr)}fireCallback(t){var r;const e=t[0];if(!e)throw console.error(t),new Error(`${Kr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:e.target,contentRect:e.contentRect},this.element)}update(t,[e]){wn(t,Kr),this.callback=e;const r=t.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(e)}render(t){}});function ve(t,e,r){return bd(t,()=>e,()=>r)}R({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",isStrictInstance:"",renderCallback:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function Gd(t){const{assertInputs:e,transformInputs:r}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(n=>n)};return{defineElement:()=>n=>(e(n),Q()(r(n))),defineElementNoInputs:n=>(e(n),Nt(r(n)))}}function Zd(t,e){return e?si(t,e):si(void 0,t)}const si=xr(class extends Lt{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=ao(t,"assign")}render(t,e){return so(this.element,e),J}}),Yd={};function Kd(t,e){return e.map((r,n)=>{const s=t[n],i=t[n+1];if(s&&i){const{shouldHaveTagNameHere:a}=lo(s,i);if(a&&M(r,"string"))return{tagName:r,tagInterpolationKey:Sn(Yd,r,()=>({tagName:r}))}}return r})}function lo(t,e){const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/),n=(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function Jd(...[t,e,r]){var l,u,c;const n=Yt(r)?r.definition:r,{isOpeningTag:s,shouldHaveTagNameHere:i}=lo(t,e),a=Un(n);if(a&&i&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(i&&!a)throw console.error({lastNewString:t,currentTemplateString:e,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${(n==null?void 0:n.tagName)||((u=(l=n==null?void 0:n.prototype)==null?void 0:l.constructor)==null?void 0:u.name)||((c=n==null?void 0:n.constructor)==null?void 0:c.name)}'`);if(!i||!a)return;if(s&&n.elementOptions&&!n.elementOptions.ignoreUnsetInputs&&!Yt(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(d){const f=Yt(d)?d.inputs:void 0;return[s&&f?Zd(f):void 0].filter(pr)}}}function Qd(t){}function Xd(t){return ro(t.strings,t.values,Jd,Qd)}function p(t,...e){const r=Kd(t,e),n=ud(t,...r),s=to(t,r,()=>Xd(n));return{...n,strings:s.strings,values:s.values}}const ii="vira-",{defineElement:et,defineElementNoInputs:xh}=Gd({assertInputs:t=>{if(!t.tagName.startsWith(ii))throw new Error(`Tag name should start with '${ii}' but got '${t.tagName}'`)}}),uo=A`
    pointer-events: none;
    opacity: 0.3;
`,Te=Xe({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),or=Xe({"vira-form-input-border-radius":"8px"}),lr=Xe({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":A`calc(${or["vira-form-input-border-radius"].value} + 4px)`});function co({mainSelector:t,elementBorderSize:e,outlineGap:r=2,outlineWidth:n=3}){const s=te(ol(n+r+e));return A`
        ${te(t)}::after {
            content: '';
            top: calc(${s} * -1);
            left: calc(${s} * -1);
            position: absolute;
            width: calc(100% + calc(${s} * 2));
            height: calc(100% + calc(${s} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${lr["vira-focus-outline-color"].value};
            border-radius: ${lr["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const ur=A`
    padding: 0;
    margin: 0;
`,le=A`
    ${ur};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,yn=A`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,$=et()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>A`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${t["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:t}){return t.icon?t.icon.svgTemplate:""}});var Et;(function(t){t.Default="vira-button-default",t.Outline="vira-button-outline"})(Et||(Et={}));const Ve=et()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:t})=>t.buttonStyle===Et.Outline,"vira-button-disabled":({inputs:t})=>!!t.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:t,cssVars:e})=>A`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${yn};
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-color"].value};
            ${e["vira-button-internal-foreground-color"].name}: ${e["vira-button-secondary-color"].value};
            ${lr["vira-focus-outline-color"].name}: ${e["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-active-color"].value};
        }

        ${t["vira-button-disabled"].selector} {
            ${uo};
        }

        ${t["vira-button-outline-style"].selector} button {
            color: ${e["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${le};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${or["vira-form-input-border-radius"].value};
            background-color: ${e["vira-button-internal-background-color"].value};
            color: ${e["vira-button-internal-foreground-color"].value};
            padding: ${e["vira-button-padding"].value};
            transition:
                color ${Te["vira-interaction-animation-duration"].value},
                background-color
                    ${Te["vira-interaction-animation-duration"].value},
                border-color ${Te["vira-interaction-animation-duration"].value};
        }

        ${co({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${$} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?p`
                  <${$.assign({icon:t.icon})}></${$}>
              `:"",r=t.text?p`
                  <span class="text-template">${t.text}</span>
              `:"";return p`
            <button ?disabled=${t.disabled}>${e} ${r}</button>
        `}});var gn;(function(t){t.Header="header"})(gn||(gn={}));et()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:t})=>t.expanded},styles:({hostClasses:t})=>A`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${le};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Te["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${t["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:ce()},stateInitStatic:{contentHeight:0},renderCallback({state:t,updateState:e,dispatch:r,events:n,inputs:s}){const i=s.expanded?A`
                  height: ${t.contentHeight}px;
              `:A`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${N("click",()=>{r(new n.expandChange(!s.expanded))})}
            >
                <slot name=${gn.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${oo(({contentRect:a})=>{e({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const y=Xe({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function Y({name:t,svgTemplate:e}){return{name:t,svgTemplate:e}}const fo=Y({name:"CloseX24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});Y({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});Y({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const ef=Y({name:"EyeClosed24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${y["vira-icon-fill-color"].value}
            stroke=${y["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),tf=Y({name:"EyeOpen24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${y["vira-icon-fill-color"].value}
            stroke=${y["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),rf=Y({name:"Loader24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),nf=A`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Te["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,cr=Y({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${nf}
        </style>
        ${rf.svgTemplate}
    `});Y({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${y["vira-icon-stroke-color"].value}"
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const dr=Y({name:"StatusFailure24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ai=Y({name:"StatusInProgress24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),ho=Y({name:"StatusSuccess24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var fr;(function(t){t.Loading="loading",t.Error="error"})(fr||(fr={}));const Jr=et()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:t})=>t.dominantDimension==="height"},events:{imageLoad:ce(),imageError:ce()},styles:({hostClasses:t})=>A`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${t["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${t["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:t,state:e,updateState:r,dispatch:n,events:s}){const i=t.imageUrl,a=e.erroredUrls[i]?p`
                  <slot class="status-wrapper" name=${fr.Error}>
                      <${$.assign({icon:dr})} class="error"></${$}>
                  </slot>
              `:e.loadedUrls[i]?void 0:p`
                    <slot class="status-wrapper" name=${fr.Loading}>
                        <${$.assign({icon:cr})}></${$}>
                    </slot>
                `;return p`
            ${ve(!!a,a)}
            <img
                class=${Or({hidden:!!a})}
                ${N("load",async()=>{t._debugLoadDelay&&await es(t._debugLoadDelay.milliseconds),r({loadedUrls:{...e.loadedUrls,[i]:!0}}),n(new s.imageLoad)})}
                ${N("error",async o=>{t._debugLoadDelay&&await es(t._debugLoadDelay.milliseconds),r({erroredUrls:{...e.erroredUrls,[i]:!0}}),n(new s.imageError(o.error))})}
                src=${i}
            />
        `}});function sf(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Qr(t){return sf(t).map(e=>[e,t[e]])}var oi;(function(t){t.Upper="upper",t.Lower="lower"})(oi||(oi={}));var li;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(li||(li={}));function af(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}af();const mo={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},of=Object.keys(mo),po={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},lf=Object.keys(po),wo={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},uf=Object.keys(wo),cf=[Qr(mo).map(([t,e])=>[e,t]),Qr(po).map(([t,e])=>[e,t]),Qr(wo).map(([t,e])=>[e,t])].flat();new Map(cf);Array.from(new Set([...of,...uf,...lf].sort()));function df(t,e,r={}){const n=r.useOriginalTarget?t.target:t.currentTarget;if(!(n instanceof e)){const s=e.name,i=n==null?void 0:n.constructor.name,a=r.useOriginalTarget?`Current target from event '${t.type}' was not of type '${s}'. Got '${i}'.`:`Target from event '${t.type}' was not of type '${s}'. Got '${i}'.`;throw new Error(a)}return n}function vn({input:t,matcher:e}){return!t||!e?!0:t.length>1?!!t.split("").every(r=>vn({input:r,matcher:e})):e instanceof RegExp?!!t.match(e):e.includes(t)}function yo({value:t,allowed:e,blocked:r}){const n=e?vn({input:t,matcher:e}):!0,s=r?vn({input:t,matcher:r}):!1;return n&&!s}function go(t){if(!t.value)return{filtered:t.value,blocked:""};const{filtered:e,blocked:r}=t.value.split("").reduce((n,s)=>(yo({...t,value:s})?n.filtered.push(s):n.blocked.push(s),n),{filtered:[],blocked:[]});return{filtered:e.join(""),blocked:r.join("")}}function ff({inputs:t,filteredValue:e,event:r,inputBlockedCallback:n,newValueCallback:s}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=df(r,HTMLInputElement),a=r.data,o=e;let l=i.value??"";if(a)if(a.length===1)yo({value:a,allowed:t.allowedInputs,blocked:t.blockedInputs})||(l=o,n(a));else{const{filtered:u,blocked:c}=go({value:a,allowed:t.allowedInputs,blocked:t.blockedInputs});l=u,n(c)}i.value!==l&&(i.value=l),o!==l&&s(l)}var Se;(function(t){t.Default="text",t.Password="password",t.Email="email"})(Se||(Se={}));const _e=et()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:t})=>!!t.disabled,"vira-input-fit-text":({inputs:t})=>!!t.fitText,"vira-input-clear-button-shown":({inputs:t})=>!!t.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:ce(),inputBlocked:ce()},styles:({hostClasses:t,cssVars:e})=>A`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${lr["vira-focus-outline-color"].name}: ${e["vira-input-focus-border-color"].value};
                color: ${e["vira-input-text-color"].value};
            }

            ${t["vira-input-disabled"].selector} {
                ${uo};
            }

            ${t["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${t["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${t["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${t["vira-input-fit-text"].selector} .size-span {
                ${le};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${yn};
                vertical-align: middle;
                max-height: 100%;
            }

            ${t["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${le};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${or["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${e["vira-input-border-color"].value};
                transition: border
                    ${Te["vira-interaction-animation-duration"].value};
            }

            label {
                ${le};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${e["vira-input-padding-horizontal"].value};
                border-radius: ${or["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${co({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${e["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${le};
                cursor: text;
                margin: ${e["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${e["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${e["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${e["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${yn};
            }

            button {
                ${le};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Te["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${e["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${e["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${e["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${e["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${e["vira-input-show-password-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},renderCallback:({inputs:t,dispatch:e,state:r,updateState:n,events:s})=>{const{filtered:i}=go({value:t.value??"",allowed:t.allowedInputs,blocked:t.blockedInputs}),a=t.icon?p`
                  <${$.assign({icon:t.icon})} class="left-side-icon"></${$}>
              `:"",o=t.fitText?A`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${a}
                ${ve(!!t.fitText,p`
                        <span
                            class="size-span"
                            ${oo(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${i||t.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${hf(t.type,r.showPassword)}
                    style=${o}
                    autocomplete=${t.disableBrowserHelps?"off":""}
                    autocorrect=${t.disableBrowserHelps?"off":""}
                    autocapitalize=${t.disableBrowserHelps?"off":""}
                    spellcheck=${t.disableBrowserHelps?"false":""}
                    ?disabled=${t.disabled}
                    .value=${i}
                    ${N("input",l=>{ff({inputs:t,filteredValue:i,event:l,inputBlockedCallback(u){e(new s.inputBlocked(u))},newValueCallback(u){e(new s.valueChange(u))}})})}
                    placeholder=${t.placeholder}
                />
                ${ve(!!(t.showClearButton&&t.value),p`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${N("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),e(new s.valueChange(""))})}
                        >
                            <${$.assign({icon:fo})}></${$}>
                        </button>
                    `)}
                ${ve(t.type===Se.Password,p`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${N("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${$.assign({icon:r.showPassword?tf:ef})}></${$}>
                        </button>
                    `)}
                ${ve(!!t.suffix,p`
                        <div class="suffix">${t.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function hf(t,e){return t===Se.Password&&e?Se.Default:t||Se.Default}const mf=0;function vo(t){return!(t.type!=="click"||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.button!==mf)}function pf(t,e,r){vo(t)&&(t.preventDefault(),r.setRoutes(e))}class Cr extends Error{constructor(e){super(e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class ui extends Cr{constructor(e){super(e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WindowEventConsolidationError"})}}const Tt="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const wf=globalThis.history.pushState;function ci(...t){const e=wf.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(Tt)),e}const yf=globalThis.history.replaceState;function di(...t){const e=yf.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(Tt)),e}function gf(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===ci)throw new ui("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===di)throw new ui("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=ci,globalThis.history.replaceState=di,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Tt))})}}const vf=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function hr(t,e){return t?vf.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function fi(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Lr(t){return!!t}var hi;(function(t){t.Upper="upper",t.Lower="lower"})(hi||(hi={}));function bf(t,e){return t.split(e)}var mi;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(mi||(mi={}));function Ef(t){return t?t instanceof Error?t.message:hr(t,"message")?String(t.message):String(t):""}function Tf(t){return!!t&&typeof t=="object"}function bo(t,e,r=!1,n={}){const s=fi(t),i=new Set(fi(e));if(!r){const a=s.filter(o=>!i.has(o));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!hr(t,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function o(c){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${c}`)}const l=t[a],u=e[a];n[a]||Eo(l,u,o,r,n[a]??{})})}function Eo(t,e,r,n,s){var o;const i=typeof t,a=typeof e;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{hr(e,"constructor")&&(!hr(t,"constructor")||t.constructor!==e.constructor)&&r(`constructor "${(o=t==null?void 0:t.constructor)==null?void 0:o.name}" did not match expected constructor "${e.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(e)?(Array.isArray(t)||r("expected an array"),t.forEach((l,u)=>{if(e.map(d=>{try{Eo(l,d,r,n,s);return}catch(f){return new Error(`entry at index "${u}" did not match expected shape: ${Ef(f)}`)}}).filter(Lr).length===e.length)throw new Error(`entry at index "${u}" did not match any of the possible types from "${e.join(", ")}"`)})):Tf(e)&&bo(t,e,n,s)}function Sf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Sf();function kf({value:t,prefix:e}){return t.startsWith(e)?t.substring(e.length):t}function $f(t){const e=Object.entries(t).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(Lr);return e.length?`?${e.join("&")}`:""}function Af(t){return kf({value:t,prefix:"?"}).split("&").map(n=>{const[s,...i]=bf(n,"="),a=i.join("");if(!(!a&&!s))return[s,a]}).filter(Lr)}function Mf(t,e){const r=M(t,"string")?new URL(t):t,n=Af(r.search),s=Object.fromEntries(n);return e&&bo(s,e),s}function xf(t){const e=`/${t}`,n=(t&&globalThis.location.pathname.startsWith(e)?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(a=>!!a),s=globalThis.location.search?Mf(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:s,hash:i}}function To(t){return t.replace(/(?:^\/|\/+$)/g,"")}function So({routeBase:t,windowPath:e}){if(!t)return"";const r=To(t);if(ko({routeBase:r,windowPath:e}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?So({routeBase:n,windowPath:e}):""}function ko({routeBase:t,windowPath:e}){const r=To(t);return r?e.startsWith(`/${r}`):!1}class Of extends Cr{constructor(e){super(e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}function $o(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const r=Object.entries(t.search).join(" "),n=Object.entries(e.search).join(" ");if(r!==n)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const pi=6;function wi(t,e){const r=t.getCurrentRawRoutes();if(t.sanitizationDepth>pi)throw new Of(`Route sanitization depth has exceed the max of ${pi} with ${JSON.stringify(r)}`);const n=t.sanitizeFullRoute(r);if($o(n,r))t.sanitizationDepth=0,e?e(n):t.listeners.forEach(s=>{s(n)});else return t.sanitizationDepth++,t.setRoutes(n,!0)}class Xr extends Cr{constructor(e){super(e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRouterInitParamsError"})}}function Cf(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new Xr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new Xr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new Xr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Lf(t,e,r=!1){const n=Ao(t,e);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Ao(t,e){var o;const r=ko({routeBase:e,windowPath:globalThis.location.pathname})?e:"",n=t.search?$f(t.search):"",s=(o=t.hash)!=null&&o.startsWith("#")?"":"#",i=t.hash?`${s}${t.hash}`:"";return`/${[r,...t.paths].filter(Lr).join("/")}${n}${i}`}function Nf(t={}){Cf(t),gf();const e=t.routeBase?So({routeBase:t.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>wi(s),s={listeners:new Set,initParams:t,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes(i,a=!1,o=!1){const l=s.getCurrentRawRoutes(),u={...l,...i},c=s.sanitizeFullRoute(u);if(!(!o&&$o(l,c)))return Lf(c,e,a)},createRoutesUrl(i){return Ao(i,e)},getCurrentRawRoutes(){return xf(e)},removeAllRouteListeners(){s.listeners.forEach(i=>s.removeRouteListener(i))},addRouteListener(i,a){if(t.maxListenerCount&&s.listeners.size>=t.maxListenerCount)throw new Cr(`Tried to exceed route listener max of '${t.maxListenerCount}'.`);return s.listeners.add(a),r||(globalThis.addEventListener(Tt,n),r=!0),i&&wi(s,a),a},hasRouteListener(i){return s.listeners.has(i)},removeRouteListener(i){const a=s.listeners.delete(i);return s.listeners.size||(globalThis.removeEventListener(Tt,n),r=!1),a},sanitizationDepth:0};return s}et()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:t})=>A`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${t["vira-link-hover-color"].value};
        }
    `,events:{routeChange:ce()},renderCallback({inputs:t,dispatch:e,events:r}){var s,i;function n(a){t.route&&vo(a)&&(a.preventDefault(),t.route.scrollToTop&&window.scrollTo(0,0),e(new r.routeChange(t.route.route)))}if((s=t.link)!=null&&s.newTab)return p`
                <a href=${t.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=t.link?t.link.url:(i=t.route)==null?void 0:i.router.createRoutesUrl(t.route.route);return p`
                <a href=${a} rel="noopener noreferrer" ${N("click",n)}>
                    <slot></slot>
                </a>
            `}}});var Le=(t=>(t.Github="github",t))(Le||{});const Pf=U({authTokenName:"",authTokenSecret:""},!0),Mo=U(dt({keys:nr(Le),values:[Pf],required:!1}),!0);class bn extends Error{constructor(r,n,s){super(`${r} at index '${s}' in service '${n}'`);Gn(this,"name","AuthTokenValidationError");this.serviceName=n,this.authTokenIndex=s}}function If(t){Fa(t,Mo),R(t).forEach(e=>{const r=t[e];r==null||r.forEach((n,s)=>{if(n.authTokenName){if(!n.authTokenSecret)throw new bn("Empty auth token secret",e,s)}else throw new bn("Empty auth token name",e,s)})})}const jt=typeof{}>"u"?void 0:{},_f="6rbd4mt4p4ve83gfijfcpxaoehmrux53",yi={devAuthTokens:Ha(jt==null?void 0:jt.authTokens,Mo)?jt.authTokens:{},encryptionKey:_f};var ke=(t=>(t.Auth="auth",t.PullRequests="pull-requests",t))(ke||{});const St={hash:void 0,paths:["pull-requests"],search:void 0};function Df(){return Nf({routeBase:"review-vir",routeSanitizer(t){return{paths:Rf(t.paths),hash:void 0,search:void 0}}})}function Rf(t){const e=t[0];return Xo(e,ke)?[e]:St.paths}const Vf="modulepreload",Hf=function(t){return"/review-vir/"+t},gi={},vi=function(e,r,n){if(!r||r.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=Hf(i),i in gi)return;gi[i]=!0;const a=i.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!n)for(let c=s.length-1;c>=0;c--){const d=s[c];if(d.href===i&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Vf,a||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),a)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},Ff=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Wf(t,e){return t?Ff.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function bi(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var Ei;(function(t){t.Upper="upper",t.Lower="lower"})(Ei||(Ei={}));var Ti;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ti||(Ti={}));function jf(t){return!!t&&typeof t=="object"}function Uf(t,e){let r=!1;const n=bi(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(bi(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function zf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}zf();function qf(t){return jf(t)&&Wf(t,"liveClient")&&M(t.liveClient,"function")}function Oh(t){return{liveClient(){return typeof t=="function"?t():t}}}const Bf=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Gf(t,e){return t?Bf.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Zf(t,e){return t.includes(e)}var Si;(function(t){t.Upper="upper",t.Lower="lower"})(Si||(Si={}));var ki;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ki||(ki={}));function Yf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Yf();const Kf=Symbol("set-mock-return-value"),en=Symbol("get-last-called-args"),Jf=["then","catch","finally"];function xo(){const t={},e=()=>{};function r(n){return n in t||(t[n]=xo()),t[n]}return new Proxy(e,{get:(n,s)=>s===en?t[en]:Zf(Jf,s)&&!Gf(t,s)?void 0:r(s),apply:(n,s,i)=>(t[en]=i,r(Kf)),set:(n,s,i)=>(t[s]=i,!0),has(n,s){return s in t}})}async function Qf(t,e){const r=await t(),n=Object.values(r).find(qf);if(!n)throw new Error(`Failed to find any client definitions exported for client '${e}'`);return await n.liveClient()}function Xf({clientImports:t,isTestEnv:e,mockClients:r}){const n={};let s;return Object.entries(t).forEach(([i,a])=>{Object.defineProperty(n,i,{async get(){if(e){if(r&&(s||(s=typeof r=="function"?await r():r),s&&i in s)){const o=s[i];if(!o)throw new Error(`Mock client for '${i}' is not defined.`);return await o}return xo()}else return await Qf(a,i)}})}),n}async function eh(t){return Uf(t,async(r,n)=>{try{return await n}catch(s){console.error(`Failed to await client '${String(r)}':`,s);return}})}const th=Xf({clientImports:{github:()=>vi(()=>import("./github.client-07de5069.js"),["assets/github.client-07de5069.js","assets/index-f4dd668f.js"]),authStore:()=>vi(()=>import("./auth-store.client-9d87b7f4.js"),["assets/auth-store.client-9d87b7f4.js","assets/index-f4dd668f.js"])},isTestEnv:!1});async function rh(){return eh(th)}const En=zn()("change-route"),$i=Q()({tagName:"vir-app-tabs",styles:A`
        :host {
            display: flex;
            border-bottom: 1px solid #ddd;
        }

        ol,
        li {
            ${ur};
            list-style: none;
        }

        ol {
            padding: 4px 10px;
            display: flex;
        }

        a {
            display: flex;
            color: inherit;
            text-decoration: none;
            border-radius: 4px;
            padding: 4px 16px;
            margin-left: -8px;
        }

        a:hover {
            background-color: #ddd;
        }
    `,renderCallback({inputs:t}){const e=nh.map(r=>{const n={paths:r.paths,hash:void 0,search:void 0};return p`
                <li>
                    <a
                        href=${t.router.createRoutesUrl(n)}
                        ${N("click",s=>{pf(s,n,t.router)})}
                    >
                        ${r.label}
                    </a>
                </li>
            `});return p`
            <ol>
                ${e}
            </ol>
        `}}),nh=[{paths:[ke.PullRequests],label:"Pull Requests"},{paths:[ke.Auth],label:"Auth"}],He=Nt({tagName:"vir-error-message",styles:A`
        :host {
            color: red;
            font-weight: bold;
        }
    `,renderCallback(){return p`
            <slot></slot>
        `}}),sh={[Le.Github]:{intro:p`
            You will need a
            <a href="https://github.com/settings/tokens?type=beta">
                Fine-grained Personal Access Token
            </a>
            with the following permissions:
        `,permissions:[{label:"Commit statuses",value:"Read-only"},{label:"Contents",value:"Read-only"},{label:"Metadata",value:"Read-only"},{label:"Pull requests",value:"Read-only"}]}},tn=Q()({tagName:"vir-service-auth-token-entry",styles:A`
        :host,
        .tokens {
            box-sizing: border-box;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .auth-token-entry {
            display: flex;
            gap: 4px 16px;
            flex-wrap: wrap;
        }

        p {
            ${ur};
        }

        h2 {
            ${ur};
        }

        .with-delete-wrapper {
            display: flex;
            gap: 16px;
            align-items: center;
        }

        .delete {
            ${le};
            cursor: pointer;
        }

        .delete:hover {
            color: red;
        }

        .description td:first-child {
            padding-right: 16px;
        }

        .description table {
            margin-left: 16px;
        }
    `,events:{authTokensChange:ce()},renderCallback({inputs:t,events:e,dispatch:r}){const n=t.authTokens.map((a,o)=>{var d;const u=((d=t.authTokenEntryError)==null?void 0:d.authTokenIndex)===o&&t.authTokenEntryError.serviceName===t.serviceName?p`
                      <${He}>${t.authTokenEntryError.message}</${He}>
                  `:S;function c(f,h){const b=Jn(t.authTokens),L=b[o];if(!L)throw new Error("Failed to find auth token to edit");L[f]=h,r(new e.authTokensChange(b))}return p`
                <div class="auth-token-entry">
                    ${u}
                    <label>
                        <p>Token name</p>
                        <${_e.assign({value:a.authTokenName})}
                            ${N(_e.events.valueChange,f=>{c("authTokenName",f.detail)})}
                        ></${_e}>
                    </label>
                    <label>
                        <p>Token Secret</p>
                        <div class="with-delete-wrapper">
                            <${_e.assign({value:a.authTokenSecret,type:Se.Password})}
                                ${N(_e.events.valueChange,f=>{c("authTokenSecret",f.detail)})}
                            ></${_e}>
                            <button
                                class="delete"
                                ${N("click",()=>{const f=Vo(Jn(t.authTokens),[o]);r(new e.authTokensChange(f))})}
                            >
                                <${$.assign({icon:fo})}></${$}>
                            </button>
                        </div>
                    </label>
                </div>
            `}),s=sh[t.serviceName],i=s.permissions.map(a=>p`
                <tr>
                    <td>${a.label}</td>
                    <td>${a.value}</td>
                </tr>
            `);return p`
            <h2>${t.serviceName}</h2>
            <section class="description">
                <p>${s.intro}</p>
                <table>${i}</table>
            </section>
            <section class="tokens">${n}</section>
            <${Ve.assign({text:"Add",buttonStyle:Et.Outline})}
                ${N("click",()=>{r(new e.authTokensChange(t.authTokens.concat({authTokenName:"",authTokenSecret:""})))})}
            ></${Ve}>
        `}}),Ut=Q()({tagName:"vir-auth-token-entry-main-page",styles:A`
        :host {
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding: 0 32px;
            box-sizing: border-box;
        }

        .services {
            display: flex;
        }

        .actions {
            display: flex;
            gap: 16px;
            justify-content: center;
        }
    `,events:{authTokensByServiceChange:ce()},stateInitStatic:{currentAuthTokenEntry:void 0,errorMessage:void 0},renderCallback({inputs:t,state:e,updateState:r,dispatch:n,events:s}){e.currentAuthTokenEntry||r({currentAuthTokenEntry:t.authTokens});const i=Tn(Le).map(a=>{var c;const o=(c=e.currentAuthTokenEntry)==null?void 0:c[a],l=o==null||!o.length?[{authTokenName:"",authTokenSecret:""}]:o,u=Ue(e.errorMessage)&&e.errorMessage.serviceName===a?e.errorMessage:void 0;return p`
                    <${tn.assign({authTokenEntryError:u,authTokens:l,serviceName:a})}
                        ${N(tn.events.authTokensChange,d=>{r({currentAuthTokenEntry:{...e.currentAuthTokenEntry,[a]:d.detail}})})}
                    ></${tn}>
                `});return p`
            <section class="services">${i}</section>
            <section class="actions">
                <${Ve.assign({text:"Cancel",buttonStyle:Et.Outline})}
                    ${N("click",()=>{r({currentAuthTokenEntry:t.authTokens}),n(new En({route:St}))})}
                ></${Ve}>
                <${Ve.assign({text:"Save"})}
                    ${N("click",()=>{try{If(e.currentAuthTokenEntry)}catch(a){a instanceof bn?r({errorMessage:{message:a.message,authTokenIndex:a.authTokenIndex,serviceName:a.serviceName}}):r({errorMessage:$e(a)});return}n(new s.authTokensByServiceChange(e.currentAuthTokenEntry)),n(new En({route:St}))})}
                ></${Ve}>
            </section>
        `}}),Fe=U({username:"",profileUrl:"",avatarUrl:""},!0),ih=U({repoName:"",repoOwner:Fe,htmlUrl:"",isPrivate:!1,isArchived:!1},!0),Ai=U({repo:ih,branchName:ft("",fn(Error)),headCommitHash:ft("",fn(Error))},!0);var be=(t=>(t.Draft="draft",t.Merged="merged",t.Open="open",t.Rejected="rejected",t))(be||{}),Bn=(t=>(t.Accepted="accepted",t.Rejected="rejected",t))(Bn||{});const ah=U({successCount:0,failCount:0,inProgressCount:0,totalCount:0},!0),oh=U({user:Fe,reviewStatus:nr(Bn)},!0),Ch=U({id:{htmlUrl:"",prId:"",prNumber:"",title:"",owner:Fe},auth:{client:nr(Le),tokenName:""},branches:{headBranch:Ai,targetBranch:Ai},dates:{created:zr,lastUpdated:zr,closed:ft(void 0,zr)},status:{checksStatus:ft(ah,fn(Error)),commentCount:0,commitCount:0,mergeStatus:nr(be),mergedBy:ft(void 0,Fe),needsReviewFromCurrentUser:!1},changes:{additions:0,deletions:0,changedFiles:0},users:{reviewers:{submitted:dt({keys:"",values:oh,required:!1}),pending:dt({keys:"",values:Fe,required:!1})},assignees:dt({keys:"",values:Fe,required:!1})}});function lh(t,e){const r={};return e.forEach(n=>{const s=n.id.owner,i=Sn(r,s.username,()=>({owner:s,pullRequests:{assigned:[],closed:[],reviewer:[]}}));n.status.mergeStatus===be.Merged||n.status.mergeStatus===be.Rejected?i.pullRequests.closed.push(n):t.username in n.users.assignees?i.pullRequests.assigned.push(n):i.pullRequests.reviewer.push(n)}),Object.values(r).forEach(n=>{n.pullRequests.assigned.sort((s,i)=>Ie(s.dates.created)-Ie(i.dates.created)),n.pullRequests.reviewer.sort((s,i)=>Ie(i.dates.lastUpdated)-Ie(s.dates.lastUpdated)).sort((s,i)=>{if(s.status.mergeStatus!==i.status.mergeStatus){if(s.status.mergeStatus===be.Draft)return 1;if(i.status.mergeStatus===be.Draft)return-1}return 0}).sort((s,i)=>s.status.needsReviewFromCurrentUser===i.status.needsReviewFromCurrentUser?0:s.status.needsReviewFromCurrentUser?-1:1),n.pullRequests.closed.sort((s,i)=>{if(s.dates.closed){if(!i.dates.closed)return 1}else return-1;return Ie(i.dates.closed)-Ie(s.dates.closed)})}),r}class Lh extends Z()("pull-requests-resolved"){}class Nh extends Z()("custom-error"){}class Ph extends Z()("pull-requests-update-started"){}class uh extends Z()("pull-requests-change"){}function ch(t){const e=t.reduce((r,n)=>{const s=n.branches.headBranch.branchName,i=s instanceof Error?"":s;return Sn(r,i,()=>[]).push({pullRequest:n,children:[],isChained:!1}),r},{});return Object.values(e).forEach(r=>{r.forEach(n=>{const s=n.pullRequest.branches.targetBranch.branchName;if(s instanceof Error)return;const i=e[s];i&&(n.isChained=!0,i.forEach(a=>{a.children.push(n)}))})}),Object.values(e).flat().filter(r=>!r.isChained)}const me=Q()({tagName:"vir-user",styles:A`
        a {
            display: flex;
            align-items: center;
            gap: 0.3em;
        }

        ${Jr} {
            max-height: 1em;
            max-width: 1em;
            min-height: 1em;
            min-width: 1em;
            border-radius: 0.5em;
            background-color: white;
            border: 1px solid #eee;
        }

        ${$} {
            color: red;
        }

        ${$}.success {
            color: green;
        }

        .avatar {
            display: flex;
            flex-direction: column;
        }

        .placeholder {
            visibility: hidden;
        }
    `,renderCallback({inputs:t}){var a,o;const e=t.status==null?void 0:t.status.status?ho:dr,r=!!t.show.statusSpace&&!e,n=e||r?p`
                      <${$.assign({icon:r?dr:e,fitContainer:!0})}
                          class="status-icon ${Or({success:!!((a=t.status)!=null&&a.status),placeholder:r})}"
                          title=${(o=t.status)==null?void 0:o.description}
                      ></${$}>
                  `:S,s=p`
            <div class="avatar">
                <${Jr.assign({imageUrl:t.user.avatarUrl})}
                    title=${t.user.username}
                ></${Jr}>
                ${n}
            </div>
        `,i=t.user.username;return p`
            <a href=${t.user.profileUrl}>
                ${t.show.avatar?s:S}
                ${t.show.username?i:S}
            </a>
        `}}),zt=Q()({tagName:"vir-users",hostClasses:{"vir-users-overlap-icons":({inputs:t})=>t.overlap},styles:({hostClasses:t})=>A`
        :host {
            display: flex;
            align-items: center;
            align-items: flex-start;
        }

        ${me} {
            font-size: 20px;
        }

        ${t["vir-users-overlap-icons"].selector} ${me} + ${me} {
            margin-left: -10px;
        }
    `,renderCallback({inputs:t}){const r=[...t.users].sort((n,s)=>n.username.localeCompare(s.username)).map(n=>{var s;return p`
                <${me.assign({user:n,show:{avatar:!0,username:!1,statusSpace:t.holdStatusSpace},status:(s=t.statuses)==null?void 0:s[n.username]})}></${me}>
            `});return p`
            ${r}
        `}}),Mi=Q()({tagName:"vir-pull-request",styles:A`
        :host {
            display: flex;
        }

        a {
            color: inherit;
        }
        a:hover {
            color: blue;
        }

        .rows {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .columns {
            display: flex;
            flex-direction: row;
            gap: 4px;
        }

        .center {
            align-items: center;
        }

        .grow {
            flex-grow: 1;
        }

        .pull-request {
            border-radius: 8px;
            border: 2px solid #ccc;
            padding: 8px;
        }

        .pull-request.needs-review {
            border-color: dodgerblue;
        }

        .pull-request.is-draft {
            border-color: #f5f5f5;
        }

        .pull-request-title-line {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .subtitle {
            font-size: 0.9em;
        }

        .faint {
            color: #999;
        }

        .error {
            color: orange;
        }
        .fail {
            color: red;
        }
        .inProgress {
            color: dodgerblue;
        }
        .success {
            color: green;
        }

        .checks {
            display: flex;
            gap: 4px;
        }

        .nested {
            flex-shrink: 0;
            color: #ccc;
            height: 40px;
            width: 40px;
            font-size: 2em;
            font-weight: bold;
            transform: rotate(-90deg);
        }

        .select-all {
            user-select: all;
            -webkit-user-select: all;
        }
    `,renderCallback({inputs:t}){const e=Object.values(t.pullRequest.users.assignees).filter(pr),r=t.pullRequest.status.checksStatus instanceof Error?"error":t.pullRequest.status.checksStatus.failCount?"fail":t.pullRequest.status.checksStatus.inProgressCount?"inProgress":"success",n=t.pullRequest.status.checksStatus instanceof Error?["Error",$e(t.pullRequest.status.checksStatus)].join(": "):t.pullRequest.status.checksStatus.failCount?[t.pullRequest.status.checksStatus.failCount,"checks failed."].join(" "):t.pullRequest.status.checksStatus.inProgressCount?[t.pullRequest.status.checksStatus.inProgressCount,"check in progress."].join(" "):"All checks passed.",s=ar(t.pullRequest.branches.headBranch.branchName)?void 0:t.pullRequest.branches.headBranch.branchName,i=ar(t.pullRequest.branches.targetBranch.branchName)?void 0:t.pullRequest.branches.targetBranch.branchName;return p`
            ${ve(t.nested,p`
                    <div class="nested">↱</div>
                `)}
            <div
                class="pull-request rows grow ${Or({"needs-review":t.pullRequest.status.needsReviewFromCurrentUser,"is-draft":t.pullRequest.status.mergeStatus===be.Draft})}"
            >
                <div class="columns title">
                    <div class="rows grow">
                        <div class="columns center">
                            <span class="faint">
                                ${t.pullRequest.branches.headBranch.repo.repoName}
                            </span>
                            <div class="checks">
                                <${$.assign({icon:fh[r]})}
                                    class=${r}
                                    title=${n}
                                ></${$}>
                                <${zt.assign({users:e,overlap:!0})}></${zt}>
                            </div>
                        </div>
                        <a href=${t.pullRequest.id.htmlUrl}>
                            <b>#${t.pullRequest.id.prNumber}:</b>
                            ${t.pullRequest.id.title}
                        </a>
                    </div>
                    <${zt.assign({...dh(t.pullRequest.users.reviewers),overlap:!1,holdStatusSpace:!0})}></${zt}>
                </div>
                ${ve(!!(s||i),p`
                        <div class="subtitle faint">
                            <span class="select-all">${i}</span>
                            ←
                            <span class="select-all">${s}</span>
                        </div>
                    `)}
            </div>
        `}});function dh(t){const e={},r=[];return Object.values(t.pending).forEach(n=>{n&&(e[n.username]=void 0,r.push(n))}),Object.values(t.submitted).forEach(n=>{if(!n)return;const s=n.reviewStatus===Bn.Accepted,i=s?"approved":"rejected";e[n.user.username]={status:s,description:`${n.user.username} has ${i} this pull request.`},r.push(n.user)}),{statuses:e,users:r}}const fh={error:ai,fail:dr,inProgress:ai,success:ho},xi=Q()({tagName:"vir-org-pull-requests",styles:A`
        .wrapper {
            display: flex;
            flex-direction: column;
            width: 600px;
            max-width: 100%;
            margin: 0 16px 16px;
        }

        .pull-requests {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    `,renderCallback({inputs:t}){const r=[{title:"Reviewer",pullRequests:t.ownedPullRequests.pullRequests.reviewer},{title:"Assigned",pullRequests:t.ownedPullRequests.pullRequests.assigned}].map(n=>{const i=ch(n.pullRequests).flatMap(a=>Oo(a,t.user));return i.length?p`
                    <section class="pull-request-section">
                        <h3>${n.title} (${i.length})</h3>
                        <div class="pull-requests">${i}</div>
                    </section>
                `:S}).filter(pr);return r.length?p`
            <div class="wrapper">
                <h2>
                    <${me.assign({user:t.ownedPullRequests.owner,show:{avatar:!0,username:!0}})}></${me}>
                </h2>
                ${r}
            </div>
        `:S}});function Oo(t,e,r){const n=t.children.flatMap(s=>Oo(s,e,!0));return[p`
            <${Mi.assign({user:e,pullRequest:t.pullRequest,nested:!!r})}></${Mi}>
        `,...n]}const hh=Q()({tagName:"vir-github-pull-requests",styles:A`
        :host {
            display: flex;
            flex-wrap: wrap;
        }
    `,stateInitStatic:{githubClient:void 0,pullRequests:void 0,user:void 0},renderCallback({state:t,updateState:e,inputs:r}){var a;if(!t.githubClient){const o=r.webClientInterface.github.init(r.authTokens);return e({githubClient:o}),o.listen(uh,l=>{e({user:l.detail.user,pullRequests:l.detail.pullRequests})}),S}const n=t.user;if(!n)return p`
                <${$.assign({icon:cr})}></${$}>
            `;const s=lh(n,((a=t.pullRequests)==null?void 0:a.filter(o=>!(o instanceof Error)))||[]);return Object.values(s).map(o=>p`
                    <${xi.assign({user:n,ownedPullRequests:o})}></${xi}>
                `)}}),mh={[Le.Github]:hh},Oi=Q()({tagName:"vir-pull-requests-main-page",renderCallback({inputs:t}){return Tn(Le).map(r=>{const n=t.serviceAuthTokens[r];if(!(n!=null&&n.length))return S;const s=mh[r];return p`
                <${s.assign({authTokens:n,webClientInterface:t.webClientInterface})}></${s}>
            `})}});Nt({tagName:"vir-review-vir-app",styles:A`
        :host,
        .root {
            display: flex;
            flex-direction: column;
            min-height: 100%;
            width: 100%;
            box-sizing: border-box;
            font-family: sans-serif;
            gap: 16px;
        }

        .hide-main-page {
            display: none;
        }

        ${Ut} {
            align-self: flex-start;
        }
    `,stateInitStatic:{serviceAuthTokens:ri({updateCallback({secretEncryptionKey:t,webClientInterface:e}){if(!t)throw new Error("No encryption key.");return e.authStore.loadServiceAuthTokens({secretEncryptionKey:t})}}),webClientInterface:ri({defaultValue:rh()}),router:Df(),currentRoute:void 0},initCallback({state:t,updateState:e}){t.router.addRouteListener(!0,r=>{e({currentRoute:r})})},renderCallback({state:t}){const e=t.webClientInterface.value;if(ni(e)){if(ar(e))return p`
                <${He}>${$e(e)}</${He}>
            `}else return p`
                <${$.assign({icon:cr})}></${$}>
            `;t.serviceAuthTokens.update({secretEncryptionKey:yi.encryptionKey,webClientInterface:e});const r=t.serviceAuthTokens.value;if(ni(r)){if(ar(r))return p`
                <${He}>${$e(r)}</${He}>
            `}else return p`
                <${$.assign({icon:cr})}></${$}>
            `;const n=Object.keys(r).length===0?{...St,paths:[ke.Auth]}:t.currentRoute||St;Jt(n,t.currentRoute)||t.router.setRoutes(n);const s=n.paths[0]===ke.Auth?p`
                      <${Ut.assign({authTokens:r})}
                          ${N(Ut.events.authTokensByServiceChange,async i=>{e.authStore.saveServiceAuthTokens({secretEncryptionKey:yi.encryptionKey,authTokensByService:i.detail}),t.serviceAuthTokens.setValue(i.detail)})}
                      ></${Ut}>
                  `:S;return p`
            <div
                class="root"
                ${N(En,i=>{t.router.setRoutes(i.detail.route)})}
            >
                <${$i.assign({currentRoute:n,router:t.router})}></${$i}>
                ${s}
                <${Oi.assign({serviceAuthTokens:r,webClientInterface:e})}
                    class=${Or({"hide-main-page":n.paths[0]!==ke.PullRequests})}
                ></${Oi}>
            </div>
        `}});export{Bo as A,gh as B,Ah as C,g as D,Ha as E,Lh as F,Ph as G,Jt as H,Rt as I,uh as J,Nh as K,$h as L,v as M,Zo as N,Oh as O,be as P,Tn as Q,yi as R,Le as S,hl as T,Pf as U,M as a,Fa as b,kh as c,U as d,Fe as e,zr as f,fn as g,Ch as h,el as i,Vc as j,nr as k,Rc as l,Li as m,pr as n,ft as o,Sh as p,qo as q,Ho as r,yh as s,dn as t,Wa as u,wh as v,Bn as w,ar as x,Ae as y,Ro as z};
