var kf=Object.defineProperty;var Af=(t,e,r)=>e in t?kf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var zr=(t,e,r)=>(Af(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const xf=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Cf(t,e){return t?xf.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function $i(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function wa(t){return $i(t).map(e=>t[e])}function Pf(t){return Object.fromEntries(t)}function Of(t,e){return t.filter((r,n)=>!e.includes(n))}function l2(t,e){return t.includes(e)}function c2(t,e){return Pf(t.map((r,n,s)=>[e(r,n,s),r]))}function Ti(t){return!!t}var ya;(function(t){t.Upper="upper",t.Lower="lower"})(ya||(ya={}));function Lf({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}var ba;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ba||(ba={}));function gr(t){return t?t instanceof Error?t.message:Cf(t,"message")?String(t.message):String(t):""}function Nf(t){return t instanceof Error?t:new Error(gr(t))}function u2(t,e){const r=Nf(t);return r.message=`${e}: ${r.message}`,r}const If=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Rf(t,e){return t?If.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function _f(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var va;(function(t){t.Upper="upper",t.Lower="lower"})(va||(va={}));var $a;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})($a||($a={}));function Df(t){return t?t instanceof Error?t.message:Rf(t,"message")?String(t.message):String(t):""}function yn(t){return!!t&&typeof t=="object"}function Vf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Vf();class Ei extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}const Hf=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Ec(t,e){return t?Hf.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Si(t){return t instanceof Promise}function Ht(t){return t===null?"null":Array.isArray(t)?"array":typeof t}function M(t,e){return Ht(t)===e}function Mi(t,e,r){if(!(t instanceof e))throw new Ei(r||"instanceof assertion failed")}function Ff(t,e){if(t==null)throw new Ei(e||"defined assertion failed")}class Uf extends Error{constructor(e){super(`Failed to compare objects using JSON.stringify: ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonStringifyError"})}}function cs(t,e){return JSON.stringify(t)===JSON.stringify(e)}function bn(t,e){try{if(t===e||cs(t,e))return!0;if(yn(t)&&yn(e)){const r=Object.keys(t).sort(),n=Object.keys(e).sort();if(r.length||n.length)return cs(r,n)?_f(t).every(i=>bn(t[i],e[i])):!1}return cs(t,e)}catch(r){throw new Uf(Df(r))}}function It(t,e){return t===e}function zf(t,e,r=It){return yn(t)&&yn(e)?Array.from(new Set([...Object.keys(t),...Object.keys(e)])).every(s=>{const i=t[s],a=e[s];return r(i,a)}):r(t,e)}function jf(t,e){if(!(M(t,"string")||M(t,"number")||M(t,"symbol")))throw new Ei(e||`value is of type '${Ht(t)}' but expected a PropertyKey.`)}function us(t){try{return jf(t),!0}catch{return!1}}function Wf(t){return!!t&&typeof t=="object"}function Ta(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function qf(t){return $i(t).filter(e=>isNaN(Number(e)))}function ki(t){return qf(t).map(r=>t[r])}function Bf(t,e){return ki(e).includes(t)}function Sc(t,e,r){if(e in t)return t[e];{const n=r();return Si(n)?new Promise(async(s,i)=>{try{const a=await n;t[e]=a,s(a)}catch(a){i(a)}}):(t[e]=n,n)}}function Gf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const Zf=Gf();function Yf({min:t,max:e}){const{min:r,max:n}=Lf({min:Math.floor(t),max:Math.floor(e)}),s=n-r+1,i=Math.ceil(Math.log2(s)/8),a=Math.floor(256**i/s)*s,o=new Uint8Array(i);let l;do Zf.getRandomValues(o),l=o.reduce((c,u,d)=>c+u*256**d,0);while(l>=a);return r+l%s}const Ea=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function d2(t=16){let e="";for(let r=0;r<t;r++){const n=Yf({min:0,max:Ea.length-1});e+=Ea[n]}return e}function Mc({value:t,prefix:e}){return String(t).startsWith(e)?String(t):`${e}${String(t)}`}function ds({value:t,prefix:e}){return t.startsWith(e)?t.substring(e.length):t}var Jf=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Kf(){return class extends Event{constructor(e,r){super(e,r),Object.defineProperty(this,"detail",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.detail=r.detail}}}const Xf=globalThis.CustomEvent||Kf();function he(){function t(e){var r;return r=class extends Xf{constructor(s){super(e,s)}},Jf(r,"TypedEventConstructor"),Object.defineProperty(r,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),r}return t}var Qf=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Ai(t){var e;return e=class extends Event{constructor(n){super(t,n)}},Qf(e,"TypedEventConstructor"),Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}class eh{constructor(){Object.defineProperty(this,"listeners",{enumerable:!0,configurable:!0,writable:!0,value:{}})}getListenerCount(){return wa(this.listeners).map(r=>(r==null?void 0:r.size)||0).reduce((r,n)=>r+n,0)}listen(e,r,n={}){const s=this.listeners,i=M(e,"string")?e:e.type;function a(){var l;return((l=s[i])==null?void 0:l.delete(r))||!1}function o(l,c){n.once&&a(),r(l,c)}return s[i]||(s[i]=new Map),s[i].set(r,{listener:o,removeListener:a}),a}removeListener(e,r){const n=M(e,"string")?e:e.type,s=this.listeners[n];if(!s)return!1;const i=s.get(r);return i?i.removeListener():!1}dispatch(e){const r=this.listeners[e.type],n=(r==null?void 0:r.size)||0;return r==null||r.forEach(s=>{s.listener(e,s.removeListener)}),n}removeAllListeners(){const r=wa(this.listeners).reduce((n,s)=>{const i=(s==null?void 0:s.size)||0;return s==null||s.clear(),n+i},0);return this.listeners={},r}destroy(){this.removeAllListeners()}}class kc extends eh{}function Ac(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function Sa(t,e,r){return Ac(globalThis,t,e,r)}const xi=Symbol("no update");function th(t){return t!==xi}class fs extends he()("observable-value-update"){}class rh extends he()("observable-value-resolve"){}class nh extends he()("observable-value-error"){}class sh extends Ai("observable-destroy"){}class ih extends Ai("observable-callback-call"){}class ah extends he()("observable-params-update"){}class h2 extends he()("observable-interval-run"){}class m2 extends he()("observable-interval-skip"){}class p2 extends he()("observable-interval-rate-limited"){}class xc{constructor(){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new kc}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"listenerMap",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap})}dispatch(...e){return this.listenTarget.dispatch(...e)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(e,r=this.equalityCheck){return e===xi?!1:!r||!r(this.value,e)?(this.value=e,this.listenTarget.dispatch(new fs({detail:e})),!0):!1}listen(e,r){const n=s=>r(s.detail);return this.listenerMap.set(r,n),e&&r(this.value),this.listenTarget.listen(fs,n)}removeListener(e){const r=this.listenerMap.get(e);return!!r&&this.listenTarget.removeListener(fs,r)}destroy(){this.listenTarget.dispatch(new sh),this.listenTarget.destroy()}listenToEvent(e,r,n){return this.listenTarget.listen(e,r,n)}}const oh=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function lh(t,e){return t?oh.some(r=>{try{return r(t,e)}catch{return!1}}):!1}var Ma;(function(t){t.Upper="upper",t.Lower="lower"})(Ma||(Ma={}));function ch({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}var ka;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ka||(ka={}));function uh(t){return t?t instanceof Error?t.message:lh(t,"message")?String(t.message):String(t):""}function vn(t){return t instanceof Error?t:new Error(uh(t))}function dh(t,e){try{return fh(t,e),!0}catch{return!1}}function fh(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Bs(){let t,e,r=!1;const n=new Promise((s,i)=>{t=a=>(r=!0,s(a)),e=a=>{r=!0,i(a)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Bs.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function hh(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const mh=hh();function ph({min:t,max:e}){const{min:r,max:n}=ch({min:Math.floor(t),max:Math.floor(e)}),s=n-r+1,i=Math.ceil(Math.log2(s)/8),a=Math.floor(256**i/s)*s,o=new Uint8Array(i);let l;do mh.getRandomValues(o),l=o.reduce((c,u,d)=>c+u*256**d,0);while(l>=a);return r+l%s}const Aa=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function hs(t=16){let e="";for(let r=0;r<t;r++){const n=ph({min:0,max:Aa.length-1});e+=Aa[n]}return e}function Ci(t,e){return zf(t,e,gh)}function gh(t,e){return Ht(t)===Ht(e)&&M(t,"function")?!0:It(t,e)}class wh extends xc{constructor(e={}){super(),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"waitingForValueDeferredPromise",{enumerable:!0,configurable:!0,writable:!0,value:Bs()}),Object.defineProperty(this,"lastSetPromise",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastSetId",{enumerable:!0,configurable:!0,writable:!0,value:hs()}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:this.waitingForValueDeferredPromise.promise}),Object.defineProperty(this,"lastResolvedValue",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.equalityCheck=e.equalityCheck||Ci,"defaultValue"in e&&this.setValue(e.defaultValue)}setPromise(e){if(e===this.lastSetPromise)return!1;const r=hs();return this.lastSetId=r,this.lastSetPromise=e,this.waitingForValueDeferredPromise.isSettled()&&(this.waitingForValueDeferredPromise=Bs(),super.setValue(this.waitingForValueDeferredPromise.promise,It)),e.then(n=>{this.lastSetPromise!==e||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==e||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const s=vn(n);console.error(s),this.rejectValue(s)}),!0}resolveValue(e){return e===xi||!super.setValue(e,this.value instanceof Promise?It:void 0)?!1:(this.lastResolvedValue=e,this.lastSetId=hs(),this.waitingForValueDeferredPromise.isSettled()||this.waitingForValueDeferredPromise.resolve(e),this.dispatch(new rh({detail:e})),!0)}rejectValue(e){this.waitingForValueDeferredPromise.reject(e),super.setValue(e,It),this.dispatch(new nh({detail:e}))}setValue(e){try{return e instanceof Promise?this.setPromise(e):e instanceof Error?(this.rejectValue(e),!0):th(e)?this.resolveValue(e):!1}catch(r){return this.rejectValue(vn(r)),!0}}listen(e,r){return super.listen(e,r)}}class st extends wh{get lastParams(){if(this.internalParams!==st.NotSet)return this.internalParams}constructor(e={}){super(e),Object.defineProperty(this,"updateCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"internalParams",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.equalityCheck=e.equalityCheck||Ci,this.updateCallback=e.updateCallback,this.internalParams="defaultParams"in e?e.defaultParams:st.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===st.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(e){return this.setValue(vn(e))}finally{this.dispatch(new ih)}}updateLastParams(e){try{return this.internalParams===st.NotSet||!this.equalityCheck(e,this.internalParams)?(this.internalParams=e,this.dispatch(new ah({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(vn(r)),!1}}update(...[e]){return this.updateLastParams(e)?(this.updateFromCallback(),!0):!1}setParams(e){return this.updateLastParams(e)}forceUpdate(...e){return dh(e,1)&&this.updateLastParams(e[0]),this.updateFromCallback()}}Object.defineProperty(st,"NotSet",{enumerable:!0,configurable:!0,writable:!0,value:Symbol("not set")});function Gs(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function yh(t){return Object.fromEntries(t)}var xa;(function(t){t.Upper="upper",t.Lower="lower"})(xa||(xa={}));function bh(t){const e=Math.pow(10,t.digits),r=t.number*e;return Number((Math.round(r)/e).toFixed(t.digits))}var Ca;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ca||(Ca={}));function Cc(t,e){return Gs(t).filter(n=>{const s=t[n];return e(n,s,t)}).reduce((n,s)=>(n[s]=t[s],n),{})}function vh(t,e){return Cc(t,r=>!e.includes(r))}function $h(t,e){return Cc(t,r=>e.includes(r))}function Th(t,e){let r=!1;const n=Gs(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(Gs(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function Eh(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Eh();class gt extends Error{}class Sh extends gt{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class Mh extends gt{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class kh extends gt{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class Ot extends gt{}class Pc extends gt{constructor(e){super(`Invalid unit ${e}`)}}class Q extends gt{}class _e extends gt{constructor(){super("Zone is an abstract class")}}const g="numeric",ye="short",se="long",$n={year:g,month:g,day:g},Oc={year:g,month:ye,day:g},Ah={year:g,month:ye,day:g,weekday:ye},Lc={year:g,month:se,day:g},Nc={year:g,month:se,day:g,weekday:se},Ic={hour:g,minute:g},Rc={hour:g,minute:g,second:g},_c={hour:g,minute:g,second:g,timeZoneName:ye},Dc={hour:g,minute:g,second:g,timeZoneName:se},Vc={hour:g,minute:g,hourCycle:"h23"},Hc={hour:g,minute:g,second:g,hourCycle:"h23"},Fc={hour:g,minute:g,second:g,hourCycle:"h23",timeZoneName:ye},Uc={hour:g,minute:g,second:g,hourCycle:"h23",timeZoneName:se},zc={year:g,month:g,day:g,hour:g,minute:g},jc={year:g,month:g,day:g,hour:g,minute:g,second:g},Wc={year:g,month:ye,day:g,hour:g,minute:g},qc={year:g,month:ye,day:g,hour:g,minute:g,second:g},xh={year:g,month:ye,day:g,weekday:ye,hour:g,minute:g},Bc={year:g,month:se,day:g,hour:g,minute:g,timeZoneName:ye},Gc={year:g,month:se,day:g,hour:g,minute:g,second:g,timeZoneName:ye},Zc={year:g,month:se,day:g,weekday:se,hour:g,minute:g,timeZoneName:se},Yc={year:g,month:se,day:g,weekday:se,hour:g,minute:g,second:g,timeZoneName:se};class Pr{get type(){throw new _e}get name(){throw new _e}get ianaName(){return this.name}get isUniversal(){throw new _e}offsetName(e,r){throw new _e}formatOffset(e,r){throw new _e}offset(e){throw new _e}equals(e){throw new _e}get isValid(){throw new _e}}let ms=null;class Fn extends Pr{static get instance(){return ms===null&&(ms=new Fn),ms}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return su(e,r,n)}formatOffset(e,r){return lr(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}}let fn={};function Ch(t){return fn[t]||(fn[t]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),fn[t]}const Ph={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Oh(t,e){const r=t.format(e).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,s,i,a,o,l,c,u]=n;return[a,s,i,o,l,c,u]}function Lh(t,e){const r=t.formatToParts(e),n=[];for(let s=0;s<r.length;s++){const{type:i,value:a}=r[s],o=Ph[i];i==="era"?n[o]=a:$(o)||(n[o]=parseInt(a,10))}return n}let jr={};class Oe extends Pr{static create(e){return jr[e]||(jr[e]=new Oe(e)),jr[e]}static resetCache(){jr={},fn={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch{return!1}}constructor(e){super(),this.zoneName=e,this.valid=Oe.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return su(e,r,n,this.name)}formatOffset(e,r){return lr(this.offset(e),r)}offset(e){const r=new Date(e);if(isNaN(r))return NaN;const n=Ch(this.name);let[s,i,a,o,l,c,u]=n.formatToParts?Lh(n,r):Oh(n,r);o==="BC"&&(s=-Math.abs(s)+1);const f=zn({year:s,month:i,day:a,hour:l===24?0:l,minute:c,second:u,millisecond:0});let h=+r;const m=h%1e3;return h-=m>=0?m:1e3+m,(f-h)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}}let Pa={};function Nh(t,e={}){const r=JSON.stringify([t,e]);let n=Pa[r];return n||(n=new Intl.ListFormat(t,e),Pa[r]=n),n}let Zs={};function Ys(t,e={}){const r=JSON.stringify([t,e]);let n=Zs[r];return n||(n=new Intl.DateTimeFormat(t,e),Zs[r]=n),n}let Js={};function Ih(t,e={}){const r=JSON.stringify([t,e]);let n=Js[r];return n||(n=new Intl.NumberFormat(t,e),Js[r]=n),n}let Ks={};function Rh(t,e={}){const{base:r,...n}=e,s=JSON.stringify([t,n]);let i=Ks[s];return i||(i=new Intl.RelativeTimeFormat(t,e),Ks[s]=i),i}let sr=null;function _h(){return sr||(sr=new Intl.DateTimeFormat().resolvedOptions().locale,sr)}let Oa={};function Dh(t){let e=Oa[t];if(!e){const r=new Intl.Locale(t);e="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,Oa[t]=e}return e}function Vh(t){const e=t.indexOf("-x-");e!==-1&&(t=t.substring(0,e));const r=t.indexOf("-u-");if(r===-1)return[t];{let n,s;try{n=Ys(t).resolvedOptions(),s=t}catch{const l=t.substring(0,r);n=Ys(l).resolvedOptions(),s=l}const{numberingSystem:i,calendar:a}=n;return[s,i,a]}}function Hh(t,e,r){return(r||e)&&(t.includes("-u-")||(t+="-u"),r&&(t+=`-ca-${r}`),e&&(t+=`-nu-${e}`)),t}function Fh(t){const e=[];for(let r=1;r<=12;r++){const n=E.utc(2009,r,1);e.push(t(n))}return e}function Uh(t){const e=[];for(let r=1;r<=7;r++){const n=E.utc(2016,11,13+r);e.push(t(n))}return e}function Wr(t,e,r,n){const s=t.listingMode();return s==="error"?null:s==="en"?r(e):n(e)}function zh(t){return t.numberingSystem&&t.numberingSystem!=="latn"?!1:t.numberingSystem==="latn"||!t.locale||t.locale.startsWith("en")||new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem==="latn"}class jh{constructor(e,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:s,floor:i,...a}=n;if(!r||Object.keys(a).length>0){const o={useGrouping:!1,...n};n.padTo>0&&(o.minimumIntegerDigits=n.padTo),this.inf=Ih(e,o)}}format(e){if(this.inf){const r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{const r=this.floor?Math.floor(e):Ni(e,3);return z(r,this.padTo)}}}class Wh{constructor(e,r,n){this.opts=n,this.originalZone=void 0;let s;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){const a=-1*(e.offset/60),o=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;e.offset!==0&&Oe.create(o).valid?(s=o,this.dt=e):(s="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,s=e.zone.name):(s="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const i={...this.opts};i.timeZone=i.timeZone||s,this.dtf=Ys(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class qh{constructor(e,r,n){this.opts={style:"long",...n},!r&&ru()&&(this.rtf=Rh(e,n))}format(e,r){return this.rtf?this.rtf.format(e,r):dm(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}}const Bh={firstDay:1,minimalDays:4,weekend:[6,7]};class R{static fromOpts(e){return R.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,r,n,s,i=!1){const a=e||H.defaultLocale,o=a||(i?"en-US":_h()),l=r||H.defaultNumberingSystem,c=n||H.defaultOutputCalendar,u=Xs(s)||H.defaultWeekSettings;return new R(o,l,c,u,a)}static resetCache(){sr=null,Zs={},Js={},Ks={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:n,weekSettings:s}={}){return R.create(e,r,n,s)}constructor(e,r,n,s,i){const[a,o,l]=Vh(e);this.locale=a,this.numberingSystem=r||o||null,this.outputCalendar=n||l||null,this.weekSettings=s,this.intl=Hh(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=zh(this)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:R.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,Xs(e.weekSettings)||this.weekSettings,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,r=!1){return Wr(this,e,ou,()=>{const n=r?{month:e,day:"numeric"}:{month:e},s=r?"format":"standalone";return this.monthsCache[s][e]||(this.monthsCache[s][e]=Fh(i=>this.extract(i,n,"month"))),this.monthsCache[s][e]})}weekdays(e,r=!1){return Wr(this,e,uu,()=>{const n=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},s=r?"format":"standalone";return this.weekdaysCache[s][e]||(this.weekdaysCache[s][e]=Uh(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[s][e]})}meridiems(){return Wr(this,void 0,()=>du,()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[E.utc(2016,11,13,9),E.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Wr(this,e,fu,()=>{const r={era:e};return this.eraCache[e]||(this.eraCache[e]=[E.utc(-40,1,1),E.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[e]})}extract(e,r,n){const s=this.dtFormatter(e,r),i=s.formatToParts(),a=i.find(o=>o.type.toLowerCase()===n);return a?a.value:null}numberFormatter(e={}){return new jh(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new Wh(e,this.intl,r)}relFormatter(e={}){return new qh(this.intl,this.isEnglish(),e)}listFormatter(e={}){return Nh(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:nu()?Dh(this.locale):Bh}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}let ps=null;class Z extends Pr{static get utcInstance(){return ps===null&&(ps=new Z(0)),ps}static instance(e){return e===0?Z.utcInstance:new Z(e)}static parseSpecifier(e){if(e){const r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new Z(jn(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${lr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${lr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return lr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}}class Gh extends Pr{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function He(t,e){if($(t)||t===null)return e;if(t instanceof Pr)return t;if(Jh(t)){const r=t.toLowerCase();return r==="default"?e:r==="local"||r==="system"?Fn.instance:r==="utc"||r==="gmt"?Z.utcInstance:Z.parseSpecifier(r)||Oe.create(t)}else return ct(t)?Z.instance(t):typeof t=="object"&&"offset"in t&&typeof t.offset=="function"?t:new Gh(t)}let La=()=>Date.now(),Na="system",Ia=null,Ra=null,_a=null,Da=60,Va,Ha=null;class H{static get now(){return La}static set now(e){La=e}static set defaultZone(e){Na=e}static get defaultZone(){return He(Na,Fn.instance)}static get defaultLocale(){return Ia}static set defaultLocale(e){Ia=e}static get defaultNumberingSystem(){return Ra}static set defaultNumberingSystem(e){Ra=e}static get defaultOutputCalendar(){return _a}static set defaultOutputCalendar(e){_a=e}static get defaultWeekSettings(){return Ha}static set defaultWeekSettings(e){Ha=Xs(e)}static get twoDigitCutoffYear(){return Da}static set twoDigitCutoffYear(e){Da=e%100}static get throwOnInvalid(){return Va}static set throwOnInvalid(e){Va=e}static resetCaches(){R.resetCache(),Oe.resetCache()}}class we{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Jc=[0,31,59,90,120,151,181,212,243,273,304,334],Kc=[0,31,60,91,121,152,182,213,244,274,305,335];function ue(t,e){return new we("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`)}function Pi(t,e,r){const n=new Date(Date.UTC(t,e-1,r));t<100&&t>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const s=n.getUTCDay();return s===0?7:s}function Xc(t,e,r){return r+(Or(t)?Kc:Jc)[e-1]}function Qc(t,e){const r=Or(t)?Kc:Jc,n=r.findIndex(i=>i<e),s=e-r[n];return{month:n+1,day:s}}function Oi(t,e){return(t-e+7)%7+1}function Tn(t,e=4,r=1){const{year:n,month:s,day:i}=t,a=Xc(n,s,i),o=Oi(Pi(n,s,i),r);let l=Math.floor((a-o+14-e)/7),c;return l<1?(c=n-1,l=wr(c,e,r)):l>wr(n,e,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:o,...Wn(t)}}function Fa(t,e=4,r=1){const{weekYear:n,weekNumber:s,weekday:i}=t,a=Oi(Pi(n,1,e),r),o=Rt(n);let l=s*7+i-a-7+e,c;l<1?(c=n-1,l+=Rt(c)):l>o?(c=n+1,l-=Rt(n)):c=n;const{month:u,day:d}=Qc(c,l);return{year:c,month:u,day:d,...Wn(t)}}function gs(t){const{year:e,month:r,day:n}=t,s=Xc(e,r,n);return{year:e,ordinal:s,...Wn(t)}}function Ua(t){const{year:e,ordinal:r}=t,{month:n,day:s}=Qc(e,r);return{year:e,month:n,day:s,...Wn(t)}}function za(t,e){if(!$(t.localWeekday)||!$(t.localWeekNumber)||!$(t.localWeekYear)){if(!$(t.weekday)||!$(t.weekNumber)||!$(t.weekYear))throw new Ot("Cannot mix locale-based week fields with ISO-based week fields");return $(t.localWeekday)||(t.weekday=t.localWeekday),$(t.localWeekNumber)||(t.weekNumber=t.localWeekNumber),$(t.localWeekYear)||(t.weekYear=t.localWeekYear),delete t.localWeekday,delete t.localWeekNumber,delete t.localWeekYear,{minDaysInFirstWeek:e.getMinDaysInFirstWeek(),startOfWeek:e.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Zh(t,e=4,r=1){const n=Un(t.weekYear),s=de(t.weekNumber,1,wr(t.weekYear,e,r)),i=de(t.weekday,1,7);return n?s?i?!1:ue("weekday",t.weekday):ue("week",t.weekNumber):ue("weekYear",t.weekYear)}function Yh(t){const e=Un(t.year),r=de(t.ordinal,1,Rt(t.year));return e?r?!1:ue("ordinal",t.ordinal):ue("year",t.year)}function eu(t){const e=Un(t.year),r=de(t.month,1,12),n=de(t.day,1,En(t.year,t.month));return e?r?n?!1:ue("day",t.day):ue("month",t.month):ue("year",t.year)}function tu(t){const{hour:e,minute:r,second:n,millisecond:s}=t,i=de(e,0,23)||e===24&&r===0&&n===0&&s===0,a=de(r,0,59),o=de(n,0,59),l=de(s,0,999);return i?a?o?l?!1:ue("millisecond",s):ue("second",n):ue("minute",r):ue("hour",e)}function $(t){return typeof t>"u"}function ct(t){return typeof t=="number"}function Un(t){return typeof t=="number"&&t%1===0}function Jh(t){return typeof t=="string"}function Kh(t){return Object.prototype.toString.call(t)==="[object Date]"}function ru(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function nu(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Xh(t){return Array.isArray(t)?t:[t]}function ja(t,e,r){if(t.length!==0)return t.reduce((n,s)=>{const i=[e(s),s];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function Qh(t,e){return e.reduce((r,n)=>(r[n]=t[n],r),{})}function Ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xs(t){if(t==null)return null;if(typeof t!="object")throw new Q("Week settings must be an object");if(!de(t.firstDay,1,7)||!de(t.minimalDays,1,7)||!Array.isArray(t.weekend)||t.weekend.some(e=>!de(e,1,7)))throw new Q("Invalid week settings");return{firstDay:t.firstDay,minimalDays:t.minimalDays,weekend:Array.from(t.weekend)}}function de(t,e,r){return Un(t)&&t>=e&&t<=r}function em(t,e){return t-e*Math.floor(t/e)}function z(t,e=2){const r=t<0;let n;return r?n="-"+(""+-t).padStart(e,"0"):n=(""+t).padStart(e,"0"),n}function Ve(t){if(!($(t)||t===null||t===""))return parseInt(t,10)}function Xe(t){if(!($(t)||t===null||t===""))return parseFloat(t)}function Li(t){if(!($(t)||t===null||t==="")){const e=parseFloat("0."+t)*1e3;return Math.floor(e)}}function Ni(t,e,r=!1){const n=10**e;return(r?Math.trunc:Math.round)(t*n)/n}function Or(t){return t%4===0&&(t%100!==0||t%400===0)}function Rt(t){return Or(t)?366:365}function En(t,e){const r=em(e-1,12)+1,n=t+(e-r)/12;return r===2?Or(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function zn(t){let e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&(e=new Date(e),e.setUTCFullYear(t.year,t.month-1,t.day)),+e}function Wa(t,e,r){return-Oi(Pi(t,1,e),r)+e-1}function wr(t,e=4,r=1){const n=Wa(t,e,r),s=Wa(t+1,e,r);return(Rt(t)-n+s)/7}function Qs(t){return t>99?t:t>H.twoDigitCutoffYear?1900+t:2e3+t}function su(t,e,r,n=null){const s=new Date(t),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const a={timeZoneName:e,...i},o=new Intl.DateTimeFormat(r,a).formatToParts(s).find(l=>l.type.toLowerCase()==="timezonename");return o?o.value:null}function jn(t,e){let r=parseInt(t,10);Number.isNaN(r)&&(r=0);const n=parseInt(e,10)||0,s=r<0||Object.is(r,-0)?-n:n;return r*60+s}function iu(t){const e=Number(t);if(typeof t=="boolean"||t===""||Number.isNaN(e))throw new Q(`Invalid unit value ${t}`);return e}function Sn(t,e){const r={};for(const n in t)if(Ft(t,n)){const s=t[n];if(s==null)continue;r[e(n)]=iu(s)}return r}function lr(t,e){const r=Math.trunc(Math.abs(t/60)),n=Math.trunc(Math.abs(t%60)),s=t>=0?"+":"-";switch(e){case"short":return`${s}${z(r,2)}:${z(n,2)}`;case"narrow":return`${s}${r}${n>0?`:${n}`:""}`;case"techie":return`${s}${z(r,2)}${z(n,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Wn(t){return Qh(t,["hour","minute","second","millisecond"])}const tm=["January","February","March","April","May","June","July","August","September","October","November","December"],au=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],rm=["J","F","M","A","M","J","J","A","S","O","N","D"];function ou(t){switch(t){case"narrow":return[...rm];case"short":return[...au];case"long":return[...tm];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const lu=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],cu=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],nm=["M","T","W","T","F","S","S"];function uu(t){switch(t){case"narrow":return[...nm];case"short":return[...cu];case"long":return[...lu];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const du=["AM","PM"],sm=["Before Christ","Anno Domini"],im=["BC","AD"],am=["B","A"];function fu(t){switch(t){case"narrow":return[...am];case"short":return[...im];case"long":return[...sm];default:return null}}function om(t){return du[t.hour<12?0:1]}function lm(t,e){return uu(e)[t.weekday-1]}function cm(t,e){return ou(e)[t.month-1]}function um(t,e){return fu(e)[t.year<0?0:1]}function dm(t,e,r="always",n=!1){const s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(t)===-1;if(r==="auto"&&i){const d=t==="days";switch(e){case 1:return d?"tomorrow":`next ${s[t][0]}`;case-1:return d?"yesterday":`last ${s[t][0]}`;case 0:return d?"today":`this ${s[t][0]}`}}const a=Object.is(e,-0)||e<0,o=Math.abs(e),l=o===1,c=s[t],u=n?l?c[1]:c[2]||c[1]:l?s[t][0]:t;return a?`${o} ${u} ago`:`in ${o} ${u}`}function qa(t,e){let r="";for(const n of t)n.literal?r+=n.val:r+=e(n.val);return r}const fm={D:$n,DD:Oc,DDD:Lc,DDDD:Nc,t:Ic,tt:Rc,ttt:_c,tttt:Dc,T:Vc,TT:Hc,TTT:Fc,TTTT:Uc,f:zc,ff:Wc,fff:Bc,ffff:Zc,F:jc,FF:qc,FFF:Gc,FFFF:Yc};class G{static create(e,r={}){return new G(e,r)}static parseFormat(e){let r=null,n="",s=!1;const i=[];for(let a=0;a<e.length;a++){const o=e.charAt(a);o==="'"?(n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),r=null,n="",s=!s):s||o===r?n+=o:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=o,r=o)}return n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(e){return fm[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...r}).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,{...this.opts,...r})}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return z(e,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,r){const n=this.loc.listingMode()==="en",s=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(h,m)=>this.loc.extract(e,h,m),a=h=>e.isOffsetFixed&&e.offset===0&&h.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,h.format):"",o=()=>n?om(e):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,m)=>n?cm(e,h):i(m?{month:h}:{month:h,day:"numeric"},"month"),c=(h,m)=>n?lm(e,h):i(m?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),u=h=>{const m=G.macroTokenToFormatOpts(h);return m?this.formatWithSystemDefault(e,m):h},d=h=>n?um(e,h):i({era:h},"era"),f=h=>{switch(h){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return o();case"d":return s?i({day:"numeric"},"day"):this.num(e.day);case"dd":return s?i({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return s?i({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return s?i({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return s?i({month:"numeric"},"month"):this.num(e.month);case"MM":return s?i({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return s?i({year:"numeric"},"year"):this.num(e.year);case"yy":return s?i({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return s?i({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return s?i({year:"numeric"},"year"):this.num(e.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return u(h)}};return qa(G.parseFormat(r),f)}formatDurationFromString(e,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},s=l=>c=>{const u=n(c);return u?this.num(l.get(u),c.length):c},i=G.parseFormat(r),a=i.reduce((l,{literal:c,val:u})=>c?l:l.concat(u),[]),o=e.shiftTo(...a.map(n).filter(l=>l));return qa(i,s(o))}}const hu=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Zt(...t){const e=t.reduce((r,n)=>r+n.source,"");return RegExp(`^${e}$`)}function Yt(...t){return e=>t.reduce(([r,n,s],i)=>{const[a,o,l]=i(e,s);return[{...r,...a},o||n,l]},[{},null,1]).slice(0,2)}function Jt(t,...e){if(t==null)return[null,null];for(const[r,n]of e){const s=r.exec(t);if(s)return n(s)}return[null,null]}function mu(...t){return(e,r)=>{const n={};let s;for(s=0;s<t.length;s++)n[t[s]]=Ve(e[r+s]);return[n,null,r+s]}}const pu=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,hm=`(?:${pu.source}?(?:\\[(${hu.source})\\])?)?`,Ii=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,gu=RegExp(`${Ii.source}${hm}`),Ri=RegExp(`(?:T${gu.source})?`),mm=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,pm=/(\d{4})-?W(\d\d)(?:-?(\d))?/,gm=/(\d{4})-?(\d{3})/,wm=mu("weekYear","weekNumber","weekDay"),ym=mu("year","ordinal"),bm=/(\d{4})-(\d\d)-(\d\d)/,wu=RegExp(`${Ii.source} ?(?:${pu.source}|(${hu.source}))?`),vm=RegExp(`(?: ${wu.source})?`);function _t(t,e,r){const n=t[e];return $(n)?r:Ve(n)}function $m(t,e){return[{year:_t(t,e),month:_t(t,e+1,1),day:_t(t,e+2,1)},null,e+3]}function Kt(t,e){return[{hours:_t(t,e,0),minutes:_t(t,e+1,0),seconds:_t(t,e+2,0),milliseconds:Li(t[e+3])},null,e+4]}function Lr(t,e){const r=!t[e]&&!t[e+1],n=jn(t[e+1],t[e+2]),s=r?null:Z.instance(n);return[{},s,e+3]}function Nr(t,e){const r=t[e]?Oe.create(t[e]):null;return[{},r,e+1]}const Tm=RegExp(`^T?${Ii.source}$`),Em=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Sm(t){const[e,r,n,s,i,a,o,l,c]=t,u=e[0]==="-",d=l&&l[0]==="-",f=(h,m=!1)=>h!==void 0&&(m||h&&u)?-h:h;return[{years:f(Xe(r)),months:f(Xe(n)),weeks:f(Xe(s)),days:f(Xe(i)),hours:f(Xe(a)),minutes:f(Xe(o)),seconds:f(Xe(l),l==="-0"),milliseconds:f(Li(c),d)}]}const Mm={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function _i(t,e,r,n,s,i,a){const o={year:e.length===2?Qs(Ve(e)):Ve(e),month:au.indexOf(r)+1,day:Ve(n),hour:Ve(s),minute:Ve(i)};return a&&(o.second=Ve(a)),t&&(o.weekday=t.length>3?lu.indexOf(t)+1:cu.indexOf(t)+1),o}const km=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Am(t){const[,e,r,n,s,i,a,o,l,c,u,d]=t,f=_i(e,s,n,r,i,a,o);let h;return l?h=Mm[l]:c?h=0:h=jn(u,d),[f,new Z(h)]}function xm(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Cm=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Pm=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Om=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Ba(t){const[,e,r,n,s,i,a,o]=t;return[_i(e,s,n,r,i,a,o),Z.utcInstance]}function Lm(t){const[,e,r,n,s,i,a,o]=t;return[_i(e,o,r,n,s,i,a),Z.utcInstance]}const Nm=Zt(mm,Ri),Im=Zt(pm,Ri),Rm=Zt(gm,Ri),_m=Zt(gu),yu=Yt($m,Kt,Lr,Nr),Dm=Yt(wm,Kt,Lr,Nr),Vm=Yt(ym,Kt,Lr,Nr),Hm=Yt(Kt,Lr,Nr);function Fm(t){return Jt(t,[Nm,yu],[Im,Dm],[Rm,Vm],[_m,Hm])}function Um(t){return Jt(xm(t),[km,Am])}function zm(t){return Jt(t,[Cm,Ba],[Pm,Ba],[Om,Lm])}function jm(t){return Jt(t,[Em,Sm])}const Wm=Yt(Kt);function qm(t){return Jt(t,[Tm,Wm])}const Bm=Zt(bm,vm),Gm=Zt(wu),Zm=Yt(Kt,Lr,Nr);function Ym(t){return Jt(t,[Bm,yu],[Gm,Zm])}const Ga="Invalid Duration",bu={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Jm={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...bu},oe=146097/400,$t=146097/4800,Km={years:{quarters:4,months:12,weeks:oe/7,days:oe,hours:oe*24,minutes:oe*24*60,seconds:oe*24*60*60,milliseconds:oe*24*60*60*1e3},quarters:{months:3,weeks:oe/28,days:oe/4,hours:oe*24/4,minutes:oe*24*60/4,seconds:oe*24*60*60/4,milliseconds:oe*24*60*60*1e3/4},months:{weeks:$t/7,days:$t,hours:$t*24,minutes:$t*24*60,seconds:$t*24*60*60,milliseconds:$t*24*60*60*1e3},...bu},it=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Xm=it.slice(0).reverse();function De(t,e,r=!1){const n={values:r?e.values:{...t.values,...e.values||{}},loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix};return new P(n)}function vu(t,e){let r=e.milliseconds??0;for(const n of Xm.slice(1))e[n]&&(r+=e[n]*t[n].milliseconds);return r}function Za(t,e){const r=vu(t,e)<0?-1:1;it.reduceRight((n,s)=>{if($(e[s]))return n;if(n){const i=e[n]*r,a=t[s][n],o=Math.floor(i/a);e[s]+=o*r,e[n]-=o*a*r}return s},null),it.reduce((n,s)=>{if($(e[s]))return n;if(n){const i=e[n]%1;e[n]-=i,e[s]+=i*t[n][s]}return s},null)}function Qm(t){const e={};for(const[r,n]of Object.entries(t))n!==0&&(e[r]=n);return e}class P{constructor(e){const r=e.conversionAccuracy==="longterm"||!1;let n=r?Km:Jm;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||R.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(e,r){return P.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new Q(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new P({values:Sn(e,P.normalizeUnit),loc:R.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if(ct(e))return P.fromMillis(e);if(P.isDuration(e))return e;if(typeof e=="object")return P.fromObject(e);throw new Q(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){const[n]=jm(e);return n?P.fromObject(n,r):P.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){const[n]=qm(e);return n?P.fromObject(n,r):P.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new Q("need to specify a reason the Duration is invalid");const n=e instanceof we?e:new we(e,r);if(H.throwOnInvalid)throw new kh(n);return new P({invalid:n})}static normalizeUnit(e){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new Pc(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?G.create(this.loc,n).formatDurationFromString(this,e):Ga}toHuman(e={}){if(!this.isValid)return Ga;const r=it.map(n=>{const s=this.values[n];return $(s)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:n.slice(0,-1)}).format(s)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=Ni(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},E.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?vu(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;const r=P.fromDurationLike(e),n={};for(const s of it)(Ft(r.values,s)||Ft(this.values,s))&&(n[s]=r.get(s)+this.get(s));return De(this,{values:n},!0)}minus(e){if(!this.isValid)return this;const r=P.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=iu(e(this.values[n],n));return De(this,{values:r},!0)}get(e){return this[P.normalizeUnit(e)]}set(e){if(!this.isValid)return this;const r={...this.values,...Sn(e,P.normalizeUnit)};return De(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:n,matrix:s}={}){const a={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:s,conversionAccuracy:n};return De(this,a)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;const e=this.toObject();return Za(this.matrix,e),De(this,{values:e},!0)}rescale(){if(!this.isValid)return this;const e=Qm(this.normalize().shiftToAll().toObject());return De(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(a=>P.normalizeUnit(a));const r={},n={},s=this.toObject();let i;for(const a of it)if(e.indexOf(a)>=0){i=a;let o=0;for(const c in n)o+=this.matrix[c][a]*n[c],n[c]=0;ct(s[a])&&(o+=s[a]);const l=Math.trunc(o);r[a]=l,n[a]=(o*1e3-l*1e3)/1e3}else ct(s[a])&&(n[a]=s[a]);for(const a in n)n[a]!==0&&(r[i]+=a===i?n[a]:n[a]/this.matrix[i][a]);return Za(this.matrix,r),De(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const e={};for(const r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return De(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(n,s){return n===void 0||n===0?s===void 0||s===0:n===s}for(const n of it)if(!r(this.values[n],e.values[n]))return!1;return!0}}const Tt="Invalid Interval";function e0(t,e){return!t||!t.isValid?U.invalid("missing or invalid start"):!e||!e.isValid?U.invalid("missing or invalid end"):e<t?U.invalid("end before start",`The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`):null}class U{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new Q("need to specify a reason the Interval is invalid");const n=e instanceof we?e:new we(e,r);if(H.throwOnInvalid)throw new Mh(n);return new U({invalid:n})}static fromDateTimes(e,r){const n=rr(e),s=rr(r),i=e0(n,s);return i??new U({start:n,end:s})}static after(e,r){const n=P.fromDurationLike(r),s=rr(e);return U.fromDateTimes(s,s.plus(n))}static before(e,r){const n=P.fromDurationLike(r),s=rr(e);return U.fromDateTimes(s.minus(n),s)}static fromISO(e,r){const[n,s]=(e||"").split("/",2);if(n&&s){let i,a;try{i=E.fromISO(n,r),a=i.isValid}catch{a=!1}let o,l;try{o=E.fromISO(s,r),l=o.isValid}catch{l=!1}if(a&&l)return U.fromDateTimes(i,o);if(a){const c=P.fromISO(s,r);if(c.isValid)return U.after(i,c)}else if(l){const c=P.fromISO(n,r);if(c.isValid)return U.before(o,c)}}return U.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(e,r);let s;return r!=null&&r.useLocaleWeeks?s=this.end.reconfigure({locale:n.locale}):s=this.end,s=s.startOf(e,r),Math.floor(s.diff(n,e).get(e))+(s.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?U.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];const r=e.map(rr).filter(a=>this.contains(a)).sort((a,o)=>a.toMillis()-o.toMillis()),n=[];let{s}=this,i=0;for(;s<this.e;){const a=r[i]||this.e,o=+a>+this.e?this.e:a;n.push(U.fromDateTimes(s,o)),s=o,i+=1}return n}splitBy(e){const r=P.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,s=1,i;const a=[];for(;n<this.e;){const o=this.start.plus(r.mapUnits(l=>l*s));i=+o>+this.e?this.e:o,a.push(U.fromDateTimes(n,i)),n=i,s+=1}return a}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;const r=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return r>=n?null:U.fromDateTimes(r,n)}union(e){if(!this.isValid)return this;const r=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return U.fromDateTimes(r,n)}static merge(e){const[r,n]=e.sort((s,i)=>s.s-i.s).reduce(([s,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[s,i.union(a)]:[s.concat([i]),a]:[s,a],[[],null]);return n&&r.push(n),r}static xor(e){let r=null,n=0;const s=[],i=e.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),o=a.sort((l,c)=>l.time-c.time);for(const l of o)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&s.push(U.fromDateTimes(r,l.time)),r=null);return U.merge(s)}difference(...e){return U.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Tt}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=$n,r={}){return this.isValid?G.create(this.s.loc.clone(r),e).formatInterval(this):Tt}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Tt}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Tt}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Tt}toFormat(e,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:Tt}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):P.invalid(this.invalidReason)}mapEndpoints(e){return U.fromDateTimes(e(this.s),e(this.e))}}class qr{static hasDST(e=H.defaultZone){const r=E.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return Oe.isValidZone(e)}static normalizeZone(e){return He(e,H.defaultZone)}static getStartOfWeek({locale:e=null,locObj:r=null}={}){return(r||R.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:r=null}={}){return(r||R.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:r=null}={}){return(r||R.create(e)).getWeekendDays().slice()}static months(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||R.create(r,n,i)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||R.create(r,n,i)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null}={}){return(s||R.create(r,n,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null}={}){return(s||R.create(r,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return R.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return R.create(r,null,"gregory").eras(e)}static features(){return{relative:ru(),localeWeek:nu()}}}function Ya(t,e){const r=s=>s.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(e)-r(t);return Math.floor(P.fromMillis(n).as("days"))}function t0(t,e,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const u=Ya(l,c);return(u-u%7)/7}],["days",Ya]],s={},i=t;let a,o;for(const[l,c]of n)r.indexOf(l)>=0&&(a=l,s[l]=c(t,e),o=i.plus(s),o>e?(s[l]--,t=i.plus(s),t>e&&(o=t,s[l]--,t=i.plus(s))):t=o);return[t,s,o,a]}function r0(t,e,r,n){let[s,i,a,o]=t0(t,e,r);const l=e-s,c=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);c.length===0&&(a<e&&(a=s.plus({[o]:1})),a!==s&&(i[o]=(i[o]||0)+l/(a-s)));const u=P.fromObject(i,n);return c.length>0?P.fromMillis(l,n).shiftTo(...c).plus(u):u}const Di={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Ja={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},n0=Di.hanidec.replace(/[\[|\]]/g,"").split("");function s0(t){let e=parseInt(t,10);if(isNaN(e)){e="";for(let r=0;r<t.length;r++){const n=t.charCodeAt(r);if(t[r].search(Di.hanidec)!==-1)e+=n0.indexOf(t[r]);else for(const s in Ja){const[i,a]=Ja[s];n>=i&&n<=a&&(e+=n-i)}}return parseInt(e,10)}else return e}function pe({numberingSystem:t},e=""){return new RegExp(`${Di[t||"latn"]}${e}`)}const i0="missing Intl.DateTimeFormat.formatToParts support";function L(t,e=r=>r){return{regex:t,deser:([r])=>e(s0(r))}}const a0=String.fromCharCode(160),$u=`[ ${a0}]`,Tu=new RegExp($u,"g");function o0(t){return t.replace(/\./g,"\\.?").replace(Tu,$u)}function Ka(t){return t.replace(/\./g,"").replace(Tu," ").toLowerCase()}function ge(t,e){return t===null?null:{regex:RegExp(t.map(o0).join("|")),deser:([r])=>t.findIndex(n=>Ka(r)===Ka(n))+e}}function Xa(t,e){return{regex:t,deser:([,r,n])=>jn(r,n),groups:e}}function Br(t){return{regex:t,deser:([e])=>e}}function l0(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function c0(t,e){const r=pe(e),n=pe(e,"{2}"),s=pe(e,"{3}"),i=pe(e,"{4}"),a=pe(e,"{6}"),o=pe(e,"{1,2}"),l=pe(e,"{1,3}"),c=pe(e,"{1,6}"),u=pe(e,"{1,9}"),d=pe(e,"{2,4}"),f=pe(e,"{4,6}"),h=y=>({regex:RegExp(l0(y.val)),deser:([x])=>x,literal:!0}),p=(y=>{if(t.literal)return h(y);switch(y.val){case"G":return ge(e.eras("short"),0);case"GG":return ge(e.eras("long"),0);case"y":return L(c);case"yy":return L(d,Qs);case"yyyy":return L(i);case"yyyyy":return L(f);case"yyyyyy":return L(a);case"M":return L(o);case"MM":return L(n);case"MMM":return ge(e.months("short",!0),1);case"MMMM":return ge(e.months("long",!0),1);case"L":return L(o);case"LL":return L(n);case"LLL":return ge(e.months("short",!1),1);case"LLLL":return ge(e.months("long",!1),1);case"d":return L(o);case"dd":return L(n);case"o":return L(l);case"ooo":return L(s);case"HH":return L(n);case"H":return L(o);case"hh":return L(n);case"h":return L(o);case"mm":return L(n);case"m":return L(o);case"q":return L(o);case"qq":return L(n);case"s":return L(o);case"ss":return L(n);case"S":return L(l);case"SSS":return L(s);case"u":return Br(u);case"uu":return Br(o);case"uuu":return L(r);case"a":return ge(e.meridiems(),0);case"kkkk":return L(i);case"kk":return L(d,Qs);case"W":return L(o);case"WW":return L(n);case"E":case"c":return L(r);case"EEE":return ge(e.weekdays("short",!1),1);case"EEEE":return ge(e.weekdays("long",!1),1);case"ccc":return ge(e.weekdays("short",!0),1);case"cccc":return ge(e.weekdays("long",!0),1);case"Z":case"ZZ":return Xa(new RegExp(`([+-]${o.source})(?::(${n.source}))?`),2);case"ZZZ":return Xa(new RegExp(`([+-]${o.source})(${n.source})?`),2);case"z":return Br(/[a-z_+-/]{1,256}?/i);case" ":return Br(/[^\S\n\r]/);default:return h(y)}})(t)||{invalidReason:i0};return p.token=t,p}const u0={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function d0(t,e,r){const{type:n,value:s}=t;if(n==="literal"){const l=/^\s+$/.test(s);return{literal:!l,val:l?" ":s}}const i=e[n];let a=n;n==="hour"&&(e.hour12!=null?a=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let o=u0[a];if(typeof o=="object"&&(o=o[i]),o)return{literal:!1,val:o}}function f0(t){return[`^${t.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,t]}function h0(t,e,r){const n=t.match(e);if(n){const s={};let i=1;for(const a in r)if(Ft(r,a)){const o=r[a],l=o.groups?o.groups+1:1;!o.literal&&o.token&&(s[o.token.val[0]]=o.deser(n.slice(i,i+l))),i+=l}return[n,s]}else return[n,{}]}function m0(t){const e=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return $(t.z)||(r=Oe.create(t.z)),$(t.Z)||(r||(r=new Z(t.Z)),n=t.Z),$(t.q)||(t.M=(t.q-1)*3+1),$(t.h)||(t.h<12&&t.a===1?t.h+=12:t.h===12&&t.a===0&&(t.h=0)),t.G===0&&t.y&&(t.y=-t.y),$(t.u)||(t.S=Li(t.u)),[Object.keys(t).reduce((i,a)=>{const o=e(a);return o&&(i[o]=t[a]),i},{}),r,n]}let ws=null;function p0(){return ws||(ws=E.fromMillis(1555555555555)),ws}function g0(t,e){if(t.literal)return t;const r=G.macroTokenToFormatOpts(t.val),n=Mu(r,e);return n==null||n.includes(void 0)?t:n}function Eu(t,e){return Array.prototype.concat(...t.map(r=>g0(r,e)))}function Su(t,e,r){const n=Eu(G.parseFormat(r),t),s=n.map(a=>c0(a,t)),i=s.find(a=>a.invalidReason);if(i)return{input:e,tokens:n,invalidReason:i.invalidReason};{const[a,o]=f0(s),l=RegExp(a,"i"),[c,u]=h0(e,l,o),[d,f,h]=u?m0(u):[null,null,void 0];if(Ft(u,"a")&&Ft(u,"H"))throw new Ot("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:n,regex:l,rawMatches:c,matches:u,result:d,zone:f,specificOffset:h}}}function w0(t,e,r){const{result:n,zone:s,specificOffset:i,invalidReason:a}=Su(t,e,r);return[n,s,i,a]}function Mu(t,e){if(!t)return null;const n=G.create(e,t).dtFormatter(p0()),s=n.formatToParts(),i=n.resolvedOptions();return s.map(a=>d0(a,t,i))}const ys="Invalid DateTime",Qa=864e13;function Gr(t){return new we("unsupported zone",`the zone "${t.name}" is not supported`)}function bs(t){return t.weekData===null&&(t.weekData=Tn(t.c)),t.weekData}function vs(t){return t.localWeekData===null&&(t.localWeekData=Tn(t.c,t.loc.getMinDaysInFirstWeek(),t.loc.getStartOfWeek())),t.localWeekData}function Qe(t,e){const r={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new E({...r,...e,old:r})}function ku(t,e,r){let n=t-e*60*1e3;const s=r.offset(n);if(e===s)return[n,e];n-=(s-e)*60*1e3;const i=r.offset(n);return s===i?[n,s]:[t-Math.min(s,i)*60*1e3,Math.max(s,i)]}function Zr(t,e){t+=e*60*1e3;const r=new Date(t);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function hn(t,e,r){return ku(zn(t),e,r)}function eo(t,e){const r=t.o,n=t.c.year+Math.trunc(e.years),s=t.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,i={...t.c,year:n,month:s,day:Math.min(t.c.day,En(n,s))+Math.trunc(e.days)+Math.trunc(e.weeks)*7},a=P.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),o=zn(i);let[l,c]=ku(o,r,t.zone);return a!==0&&(l+=a,c=t.zone.offset(l)),{ts:l,o:c}}function tr(t,e,r,n,s,i){const{setZone:a,zone:o}=r;if(t&&Object.keys(t).length!==0||e){const l=e||o,c=E.fromObject(t,{...r,zone:l,specificOffset:i});return a?c:c.setZone(o)}else return E.invalid(new we("unparsable",`the input "${s}" can't be parsed as ${n}`))}function Yr(t,e,r=!0){return t.isValid?G.create(R.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(t,e):null}function $s(t,e){const r=t.c.year>9999||t.c.year<0;let n="";return r&&t.c.year>=0&&(n+="+"),n+=z(t.c.year,r?6:4),e?(n+="-",n+=z(t.c.month),n+="-",n+=z(t.c.day)):(n+=z(t.c.month),n+=z(t.c.day)),n}function to(t,e,r,n,s,i){let a=z(t.c.hour);return e?(a+=":",a+=z(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(a+=":")):a+=z(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(a+=z(t.c.second),(t.c.millisecond!==0||!n)&&(a+=".",a+=z(t.c.millisecond,3))),s&&(t.isOffsetFixed&&t.offset===0&&!i?a+="Z":t.o<0?(a+="-",a+=z(Math.trunc(-t.o/60)),a+=":",a+=z(Math.trunc(-t.o%60))):(a+="+",a+=z(Math.trunc(t.o/60)),a+=":",a+=z(Math.trunc(t.o%60)))),i&&(a+="["+t.zone.ianaName+"]"),a}const Au={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},y0={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},b0={ordinal:1,hour:0,minute:0,second:0,millisecond:0},xu=["year","month","day","hour","minute","second","millisecond"],v0=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],$0=["year","ordinal","hour","minute","second","millisecond"];function T0(t){const e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!e)throw new Pc(t);return e}function ro(t){switch(t.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return T0(t)}}function no(t,e){const r=He(e.zone,H.defaultZone),n=R.fromObject(e),s=H.now();let i,a;if($(t.year))i=s;else{for(const c of xu)$(t[c])&&(t[c]=Au[c]);const o=eu(t)||tu(t);if(o)return E.invalid(o);const l=r.offset(s);[i,a]=hn(t,l,r)}return new E({ts:i,zone:r,loc:n,o:a})}function so(t,e,r){const n=$(r.round)?!0:r.round,s=(a,o)=>(a=Ni(a,n||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(a,o)),i=a=>r.calendary?e.hasSame(t,a)?0:e.startOf(a).diff(t.startOf(a),a).get(a):e.diff(t,a).get(a);if(r.unit)return s(i(r.unit),r.unit);for(const a of r.units){const o=i(a);if(Math.abs(o)>=1)return s(o,a)}return s(t>e?-0:0,r.units[r.units.length-1])}function io(t){let e={},r;return t.length>0&&typeof t[t.length-1]=="object"?(e=t[t.length-1],r=Array.from(t).slice(0,t.length-1)):r=Array.from(t),[e,r]}class E{constructor(e){const r=e.zone||H.defaultZone;let n=e.invalid||(Number.isNaN(e.ts)?new we("invalid input"):null)||(r.isValid?null:Gr(r));this.ts=$(e.ts)?H.now():e.ts;let s=null,i=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[s,i]=[e.old.c,e.old.o];else{const o=r.offset(this.ts);s=Zr(this.ts,o),n=Number.isNaN(s.year)?new we("invalid input"):null,s=n?null:s,i=n?null:o}this._zone=r,this.loc=e.loc||R.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=s,this.o=i,this.isLuxonDateTime=!0}static now(){return new E({})}static local(){const[e,r]=io(arguments),[n,s,i,a,o,l,c]=r;return no({year:n,month:s,day:i,hour:a,minute:o,second:l,millisecond:c},e)}static utc(){const[e,r]=io(arguments),[n,s,i,a,o,l,c]=r;return e.zone=Z.utcInstance,no({year:n,month:s,day:i,hour:a,minute:o,second:l,millisecond:c},e)}static fromJSDate(e,r={}){const n=Kh(e)?e.valueOf():NaN;if(Number.isNaN(n))return E.invalid("invalid input");const s=He(r.zone,H.defaultZone);return s.isValid?new E({ts:n,zone:s,loc:R.fromObject(r)}):E.invalid(Gr(s))}static fromMillis(e,r={}){if(ct(e))return e<-Qa||e>Qa?E.invalid("Timestamp out of range"):new E({ts:e,zone:He(r.zone,H.defaultZone),loc:R.fromObject(r)});throw new Q(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if(ct(e))return new E({ts:e*1e3,zone:He(r.zone,H.defaultZone),loc:R.fromObject(r)});throw new Q("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};const n=He(r.zone,H.defaultZone);if(!n.isValid)return E.invalid(Gr(n));const s=R.fromObject(r),i=Sn(e,ro),{minDaysInFirstWeek:a,startOfWeek:o}=za(i,s),l=H.now(),c=$(r.specificOffset)?n.offset(l):r.specificOffset,u=!$(i.ordinal),d=!$(i.year),f=!$(i.month)||!$(i.day),h=d||f,m=i.weekYear||i.weekNumber;if((h||u)&&m)throw new Ot("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&u)throw new Ot("Can't mix ordinal dates with month/day");const p=m||i.weekday&&!h;let y,x,T=Zr(l,c);p?(y=v0,x=y0,T=Tn(T,a,o)):u?(y=$0,x=b0,T=gs(T)):(y=xu,x=Au);let O=!1;for(const be of y){const Ke=i[be];$(Ke)?O?i[be]=x[be]:i[be]=T[be]:O=!0}const _=p?Zh(i,a,o):u?Yh(i):eu(i),q=_||tu(i);if(q)return E.invalid(q);const Ie=p?Fa(i,a,o):u?Ua(i):i,[Re,K]=hn(Ie,c,n),me=new E({ts:Re,zone:n,o:K,loc:s});return i.weekday&&h&&e.weekday!==me.weekday?E.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${me.toISO()}`):me}static fromISO(e,r={}){const[n,s]=Fm(e);return tr(n,s,r,"ISO 8601",e)}static fromRFC2822(e,r={}){const[n,s]=Um(e);return tr(n,s,r,"RFC 2822",e)}static fromHTTP(e,r={}){const[n,s]=zm(e);return tr(n,s,r,"HTTP",r)}static fromFormat(e,r,n={}){if($(e)||$(r))throw new Q("fromFormat requires an input string and a format");const{locale:s=null,numberingSystem:i=null}=n,a=R.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0}),[o,l,c,u]=w0(a,e,r);return u?E.invalid(u):tr(o,l,n,`format ${r}`,e,c)}static fromString(e,r,n={}){return E.fromFormat(e,r,n)}static fromSQL(e,r={}){const[n,s]=Ym(e);return tr(n,s,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new Q("need to specify a reason the DateTime is invalid");const n=e instanceof we?e:new we(e,r);if(H.throwOnInvalid)throw new Sh(n);return new E({invalid:n})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){const n=Mu(e,R.fromObject(r));return n?n.map(s=>s?s.val:null).join(""):null}static expandFormat(e,r={}){return Eu(G.parseFormat(e),R.fromObject(r)).map(s=>s.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?bs(this).weekYear:NaN}get weekNumber(){return this.isValid?bs(this).weekNumber:NaN}get weekday(){return this.isValid?bs(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?vs(this).weekday:NaN}get localWeekNumber(){return this.isValid?vs(this).weekNumber:NaN}get localWeekYear(){return this.isValid?vs(this).weekYear:NaN}get ordinal(){return this.isValid?gs(this.c).ordinal:NaN}get monthShort(){return this.isValid?qr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?qr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?qr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?qr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const e=864e5,r=6e4,n=zn(this.c),s=this.zone.offset(n-e),i=this.zone.offset(n+e),a=this.zone.offset(n-s*r),o=this.zone.offset(n-i*r);if(a===o)return[this];const l=n-a*r,c=n-o*r,u=Zr(l,a),d=Zr(c,o);return u.hour===d.hour&&u.minute===d.minute&&u.second===d.second&&u.millisecond===d.millisecond?[Qe(this,{ts:l}),Qe(this,{ts:c})]:[this]}get isInLeapYear(){return Or(this.year)}get daysInMonth(){return En(this.year,this.month)}get daysInYear(){return this.isValid?Rt(this.year):NaN}get weeksInWeekYear(){return this.isValid?wr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?wr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){const{locale:r,numberingSystem:n,calendar:s}=G.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:s}}toUTC(e=0,r={}){return this.setZone(Z.instance(e),r)}toLocal(){return this.setZone(H.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(e=He(e,H.defaultZone),e.equals(this.zone))return this;if(e.isValid){let s=this.ts;if(r||n){const i=e.offset(this.ts),a=this.toObject();[s]=hn(a,i,e)}return Qe(this,{ts:s,zone:e})}else return E.invalid(Gr(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:n}={}){const s=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:n});return Qe(this,{loc:s})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;const r=Sn(e,ro),{minDaysInFirstWeek:n,startOfWeek:s}=za(r,this.loc),i=!$(r.weekYear)||!$(r.weekNumber)||!$(r.weekday),a=!$(r.ordinal),o=!$(r.year),l=!$(r.month)||!$(r.day),c=o||l,u=r.weekYear||r.weekNumber;if((c||a)&&u)throw new Ot("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new Ot("Can't mix ordinal dates with month/day");let d;i?d=Fa({...Tn(this.c,n,s),...r},n,s):$(r.ordinal)?(d={...this.toObject(),...r},$(r.day)&&(d.day=Math.min(En(d.year,d.month),d.day))):d=Ua({...gs(this.c),...r});const[f,h]=hn(d,this.o,this.zone);return Qe(this,{ts:f,o:h})}plus(e){if(!this.isValid)return this;const r=P.fromDurationLike(e);return Qe(this,eo(this,r))}minus(e){if(!this.isValid)return this;const r=P.fromDurationLike(e).negate();return Qe(this,eo(this,r))}startOf(e,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},s=P.normalizeUnit(e);switch(s){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(s==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:a}=this;a<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(s==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(e,r){return this.isValid?this.plus({[e]:1}).startOf(e,r).minus(1):this}toFormat(e,r={}){return this.isValid?G.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):ys}toLocaleString(e=$n,r={}){return this.isValid?G.create(this.loc.clone(r),e).formatDateTime(this):ys}toLocaleParts(e={}){return this.isValid?G.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:s=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=e==="extended";let o=$s(this,a);return o+="T",o+=to(this,a,r,n,s,i),o}toISODate({format:e="extended"}={}){return this.isValid?$s(this,e==="extended"):null}toISOWeekDate(){return Yr(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:s=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(s?"T":"")+to(this,a==="extended",r,e,n,i):null}toRFC2822(){return Yr(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Yr(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?$s(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let s="HH:mm:ss.SSS";return(r||e)&&(n&&(s+=" "),r?s+="z":e&&(s+="ZZ")),Yr(this,s,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():ys}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};const r={...this.c};return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",n={}){if(!this.isValid||!e.isValid)return P.invalid("created by diffing an invalid DateTime");const s={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=Xh(r).map(P.normalizeUnit),a=e.valueOf()>this.valueOf(),o=a?this:e,l=a?e:this,c=r0(o,l,i,s);return a?c.negate():c}diffNow(e="milliseconds",r={}){return this.diff(E.now(),e,r)}until(e){return this.isValid?U.fromDateTimes(this,e):this}hasSame(e,r,n){if(!this.isValid)return!1;const s=e.valueOf(),i=this.setZone(e.zone,{keepLocalTime:!0});return i.startOf(r,n)<=s&&s<=i.endOf(r,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;const r=e.base||E.fromObject({},{zone:this.zone}),n=e.padding?this<r?-e.padding:e.padding:0;let s=["years","months","days","hours","minutes","seconds"],i=e.unit;return Array.isArray(e.unit)&&(s=e.unit,i=void 0),so(r,this.plus(n),{...e,numeric:"always",units:s,unit:i})}toRelativeCalendar(e={}){return this.isValid?so(e.base||E.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(E.isDateTime))throw new Q("min requires all arguments be DateTimes");return ja(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(E.isDateTime))throw new Q("max requires all arguments be DateTimes");return ja(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,n={}){const{locale:s=null,numberingSystem:i=null}=n,a=R.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0});return Su(a,e,r)}static fromStringExplain(e,r,n={}){return E.fromFormatExplain(e,r,n)}static get DATE_SHORT(){return $n}static get DATE_MED(){return Oc}static get DATE_MED_WITH_WEEKDAY(){return Ah}static get DATE_FULL(){return Lc}static get DATE_HUGE(){return Nc}static get TIME_SIMPLE(){return Ic}static get TIME_WITH_SECONDS(){return Rc}static get TIME_WITH_SHORT_OFFSET(){return _c}static get TIME_WITH_LONG_OFFSET(){return Dc}static get TIME_24_SIMPLE(){return Vc}static get TIME_24_WITH_SECONDS(){return Hc}static get TIME_24_WITH_SHORT_OFFSET(){return Fc}static get TIME_24_WITH_LONG_OFFSET(){return Uc}static get DATETIME_SHORT(){return zc}static get DATETIME_SHORT_WITH_SECONDS(){return jc}static get DATETIME_MED(){return Wc}static get DATETIME_MED_WITH_SECONDS(){return qc}static get DATETIME_MED_WITH_WEEKDAY(){return xh}static get DATETIME_FULL(){return Bc}static get DATETIME_FULL_WITH_SECONDS(){return Gc}static get DATETIME_HUGE(){return Zc}static get DATETIME_HUGE_WITH_SECONDS(){return Yc}}function rr(t){if(E.isDateTime(t))return t;if(t&&t.valueOf&&ct(t.valueOf()))return E.fromJSDate(t);if(t&&typeof t=="object")return E.fromObject(t);throw new Q(`Unknown datetime argument: ${t}, of type ${typeof t}`)}function ei(t){const e=E.fromObject(vh(t,["timezone"]),{zone:t.timezone});if(!e.isValid)throw new Error(e.invalidExplanation??void 0);return e}function g2(t,e){if(!t.isValid)throw new Error(`Invalid input: '${t.toISO()}'`);return{day:t.day,month:t.month,year:t.year,hour:t.hour,minute:t.minute,second:t.second,millisecond:t.millisecond,timezone:e??t.zoneName}}const E0=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function cr(t,e){return t?E0.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function ht(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function S0(t){return ht(t).map(e=>t[e])}function M0(t,e){return t.includes(e)}function k0(t){return!!t}var ao;(function(t){t.Upper="upper",t.Lower="lower"})(ao||(ao={}));var oo;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(oo||(oo={}));function A0(t){return t?t.map(Cu).filter(k0).join(`
`):""}function Cu(t){return t?t instanceof Error?t.message:cr(t,"message")?String(t.message):String(t):""}function Ut(t){return!!t&&typeof t=="object"}function Pu(t,e){let r=!1;const n=ht(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(ht(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function x0(t,e){try{return C0(t,e),!0}catch{return!1}}function C0(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function P0(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}P0();function O0(t,e){var o;const r=e==null?void 0:e.constructor,n=(o=t==null?void 0:t.constructor)==null?void 0:o.prototype,s=(t==null?void 0:t.constructor)===r,i=r&&n?n instanceof r:!1,a=s||i;return Ht(t)===Ht(e)&&a}const Ou="__vir__shape__definition__key__do__not__use__in__actual__objects";function Lu(t){return cr(t,Ou)}const Vi=Symbol("and"),Hi=Symbol("instance"),Fi=Symbol("enum"),Nu=Symbol("exact"),Ui=Symbol("indexed-keys"),zi=Symbol("or"),ji=Symbol("unknown"),L0=[Vi,Fi,Nu,Ui,Hi,zi,ji],Iu="__vir__shape__specifier__key__do__not__use__in__actual__objects";function N0(...t){return Xt(t,Vi)}function ti(...t){return Xt(t,Hi)}function Mn(...t){return Xt(t,Fi)}function yr(...t){return Xt(t,Ui)}function Ce(...t){return Xt(t,zi)}function ri(t){return Xt([t],ji)}function qn(t){return wt(t,Vi)}function Bn(t){return wt(t,Hi)}function Gn(t){return wt(t,Fi)}function Zn(t){return wt(t,Nu)}function Yn(t){return wt(t,Ui)}function Ir(t){return wt(t,zi)}function Jn(t){return wt(t,ji)}function wt(t,e){const r=Rr(t);return!!r&&r.specifierType===e}function Xt(t,e){return{[Iu]:!0,specifierType:e,parts:t}}function at(t,e,r,n){const s=Rr(e);if(s){if(Bn(s))return t instanceof s.parts[0];if(qn(s))return s.parts.every(i=>at(t,i));if(Ir(s))return s.parts.some(i=>at(t,i));if(Zn(s))return Ut(t)?at(t,s.parts[0]):t===s.parts[0];if(Gn(s))return Object.values(s.parts[0]).some(i=>i===t);if(Yn(s))return Ut(t)?I0(t,s,!!r)&&S0(t).every(i=>at(i,s.parts[0].values)):!1;if(Jn(s))return!0}return n?e===t:O0(t,e)}function I0(t,e,r){const n=e.parts[0].required,s=e.parts[0].keys;if(r)if(n){const i=Wi(e);return M(i,"boolean")?i:i.every(a=>ht(t).some(o=>at(o,a,!1,!0)))}else return!0;else return ht(t).every(i=>at(i,s))}function Wi(t){const e=t.parts[0].keys,r=Rr(e);if(us(e))return[e];if(r){if(Bn(r))return!1;if(qn(r))return!1;if(Ir(r)){const n=r.parts.map(i=>Wi(yr({...t.parts[0],keys:i})));let s;return n.forEach(i=>{M(i,"boolean")&&(i&&s==null?s=!0:s=!1)}),M(s,"boolean")?s:n.flat().filter(us)}else if(Zn(r)){const n=r.parts.filter(us);return n.length!==r.parts.length?!1:n}else{if(Gn(r))return Object.values(r.parts[0]);if(Yn(r))return!1;if(Jn(r))return!0}}return!1}function Rr(t){if(Ut(t)&&cr(t,Iu)){if(!cr(t,"parts")||!M(t.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!cr(t,"specifierType")||!M0(L0,t.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return t}}class lo extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function ni(t,e=!1){return ir(t)}function ir(t){const e=Rr(t);if(e)if(Bn(e)){const r=e.parts[0];try{return new r}catch(n){throw new lo(`Failed to create default value for classShape for class '${r.name}': ${Cu(n)}`)}}else{if(Ir(e)||Zn(e))return ir(e.parts[0]);if(qn(e))return e.parts.reduce((r,n)=>Object.assign(r,ir(n)),{});if(Gn(e))return Object.values(e.parts[0])[0];if(Yn(e)){const r=Wi(e);return!e.parts[0].required||M(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,ir(e.parts[0].values)]))}else{if(Jn(e))return e.parts[0]??{};throw new lo(`found specifier but it matches no expected specifiers: ${String(e.specifierType)}`)}}return Lu(t)?ni(t.shape):t instanceof RegExp?t:M(t,"array")?t.map(ir):Ut(t)?Pu(t,(r,n)=>ni(n)):t}function J(t,e=!1){return{shape:t,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:e,get defaultValue(){return ni(t)},[Ou]:!0}}class le extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function Ru(t,e,r={}){try{return qi(t,e,r),!0}catch{return!1}}function qi(t,e,r={}){Ae({subject:t,shape:e.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}function si(t){return[t[0],...t.slice(1).map(e=>`'${String(e)}'`)].join(" -> ")}function Ae({subject:t,shape:e,keys:r,options:n}){if(Jn(e))return!0;if(Lu(e))return Ae({subject:t,shape:e.shape,keys:r,options:n});const s=si(r);if(Rr(t))throw new le(`Shape test subjects cannot be contain shape specifiers but one was found at ${s}.`);if(!at(t,e,!n.ignoreExtraKeys))throw new le(`Subject does not match shape definition at key ${s}`);if(M(e,"function"))return M(t,"function");if(Bn(e))return t instanceof e.parts[0];if(Ut(t)){const a=t,o=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(u=>[u,!1])),l=[];let c=!1;if(Ir(e)){const u=[];c=e.parts.some(d=>{try{const f=Ae({subject:t,shape:d,keys:r,options:{...n}});return Object.assign(o,f),!0}catch(f){if(f instanceof le)return u.push(f),!1;throw f}}),!c&&x0(u,1)&&l.push(u[0])}else if(qn(e))c=e.parts.every(u=>{try{const d=Ae({subject:t,shape:u,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(o,d),!0}catch(d){if(d instanceof le)return l.push(d),!1;throw d}});else if(Zn(e)){const u=Ae({subject:t,shape:e.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(o,u),c=!0}else{if(Gn(e))throw new le(`Cannot compare an enum specifier to an object at ${s}`);if(M(e,"array")&&M(a,"array"))c=a.every((u,d)=>{const f=e.some(h=>{try{return Ae({subject:u,shape:h,keys:[...r,d],options:n}),!0}catch(m){if(m instanceof le)return l.push(m),!1;throw m}});return o[d]=f,f});else if(Yn(e)){const u=Pu(t,(d,f)=>(n.ignoreExtraKeys||Ae({shape:e.parts[0].keys,subject:d,keys:[...r,d],options:n}),Ae({shape:e.parts[0].values,subject:f,keys:[...r,d],options:n}),!0));Object.assign(o,u),c=!0}else{const u=R0({keys:r,options:n,shape:e,subject:t});Object.assign(o,u),c=!0}}if(l.length)throw new le(A0(l));if(!c){const d=`Failed on key(s): ${Object.keys(o).filter(f=>!o[f]).map(f=>si([...r,f])).join(",")}`;throw new le(d)}return n.ignoreExtraKeys||Object.entries(o).forEach(([u,d])=>{if(!d)throw new le(`subject as extra key '${u}' in ${s}.`)}),o}else if(n.exactValues)return t===e;return!0}function R0({keys:t,options:e,shape:r,subject:n}){const s=si(t),i={};if(Ut(r)){const a=new Set(ht(r)),o=new Set(ht(n));a.forEach(l=>{l in n&&o.add(l)}),e.ignoreExtraKeys||o.forEach(l=>{if(!a.has(l))throw new le(`Subject has extra key '${String(l)}' in ${s}`)}),a.forEach(l=>{var f;const c=r[l],u=Ir(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!o.has(l)&&!u&&!d)throw new le(`Subject missing key '${String(l)}' in ${s}`)}),o.forEach(l=>{const c=n[l];if(e.ignoreExtraKeys&&!a.has(l))return;const u=r[l];Ae({subject:c,shape:u,keys:[...t,l],options:e}),i[l]=!0})}else throw new le(`shape definition at ${s} was not an object.`);return i}const _0=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],D0=_0.reduce((t,e)=>(t[e]=e,t),{}),w2=H.defaultZone.name,_u=D0.UTC;var co;(function(t){t.Date="date",t.Time="time",t.DateTime="datetime-local"})(co||(co={}));const V0=["hour","minute","second","millisecond"],H0=J({hour:14,minute:19,second:7,millisecond:877,timezone:_u}),F0=J({year:2023,month:6,day:5,timezone:_u}),Ts=J(N0(F0,H0));var k;(function(t){t.Years="years",t.Quarters="quarters",t.Months="months",t.Weeks="weeks",t.Days="days",t.Hours="hours",t.Minutes="minutes",t.Seconds="seconds",t.Milliseconds="milliseconds"})(k||(k={}));k.Milliseconds+"",k.Seconds+"",k.Minutes+"",k.Hours+"",k.Days+"",k.Weeks+"",k.Months+"",k.Quarters+"",k.Years+"";k.Milliseconds,k.Seconds,k.Minutes,k.Hours,k.Days,k.Weeks,k.Months,k.Quarters,k.Years;function uo(t,e){return Th(t,(r,n)=>e==null||!M(n,"number")?n:bh({number:n,digits:e}))}function y2(t,e){if(U0(t))return{[e]:1/0};if(z0(t))return{[e]:-1/0};const n=P.fromObject(t).as(e);return{[e]:n}}function U0(t){return Object.values(t).some(e=>e===1/0)}function z0(t){return Object.values(t).some(e=>e===-1/0)}const fo={longterm:1,casual:0},Du={[k.Years]:"longterm",[k.Quarters]:"longterm",[k.Months]:"longterm",[k.Weeks]:"casual",[k.Days]:"casual",[k.Hours]:"casual",[k.Minutes]:"casual",[k.Seconds]:"casual",[k.Milliseconds]:"casual"};function j0(t){return t.map(n=>Du[n]).reduce((n,s)=>fo[s]>fo[n]?s:n)}var ur;(function(t){t.AdditiveUnits="additive-units",t.EquivalentUnits="equivalent-units"})(ur||(ur={}));function W0({start:t,end:e,units:r,unit:n,diffType:s,decimalCount:i}){const a=ei(t),o=ei(e),l=r??[n],c=l.length===1?ur.EquivalentUnits:s;if(!c)throw new Error("Failed to diff dates: no diffType was provided.");if(c===ur.AdditiveUnits){const u=j0(l),d=o.diff(a,l,{conversionAccuracy:u}).toObject();return uo(d,i)}else if(c===ur.EquivalentUnits){const u=l.map(f=>{const m=o.diff(a,f,{conversionAccuracy:Du[f]}).toObject()[f];if(m==null)throw new Error(`Internal date-vir error: failed to find duration for '${f}'`);return[f,m]}),d=yh(u);return uo(d,i)}else throw new Error(`Failed to diff dates: provided diffType is invalid: '${c}'`)}function ho({relativeTo:t,fullDate:e}){return W0({start:t,end:e,unit:k.Milliseconds}).milliseconds>=0}function Et(t){return ei(t).toMillis()}const q0={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};$h(q0,V0);H.defaultLocale;k.Milliseconds+"",k.Seconds+"",k.Minutes+"",k.Hours+"",k.Days+"",k.Weeks+"",k.Months+"",k.Quarters+"",k.Years+"";class Vu extends xc{constructor(e){super(),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.value=e.defaultValue,this.equalityCheck=e.equalityCheck||Ci}setValue(e){return super.setValue(e)}listen(e,r){return super.listen(e,r)}removeListener(e){return super.removeListener(e)}}const B0=J({listen(t,e){return()=>!1},destroy(){},removeListener(t){return!1},value:ri()});function Es(t){return Ru(t,B0,{allowExtraKeys:!0})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn=globalThis,Bi=mn.ShadowRoot&&(mn.ShadyCSS===void 0||mn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gi=Symbol(),mo=new WeakMap;let Hu=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Gi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Bi&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=mo.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&mo.set(r,e))}return e}toString(){return this.cssText}};const ee=t=>new Hu(typeof t=="string"?t:t+"",void 0,Gi),pn=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,s,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new Hu(r,t,Gi)},G0=(t,e)=>{if(Bi)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),s=mn.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,t.appendChild(n)}},po=Bi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return ee(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Z0,defineProperty:Y0,getOwnPropertyDescriptor:J0,getOwnPropertyNames:K0,getOwnPropertySymbols:X0,getPrototypeOf:Q0}=Object,je=globalThis,go=je.trustedTypes,ep=go?go.emptyScript:"",Ss=je.reactiveElementPolyfillSupport,dr=(t,e)=>t,kn={toAttribute(t,e){switch(e){case Boolean:t=t?ep:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Zi=(t,e)=>!Z0(t,e),wo={attribute:!0,type:String,converter:kn,reflect:!1,hasChanged:Zi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),je.litPropertyMetadata??(je.litPropertyMetadata=new WeakMap);let Ct=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=wo){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,r);s!==void 0&&Y0(this.prototype,e,s)}}static getPropertyDescriptor(e,r,n){const{get:s,set:i}=J0(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);i.call(this,a),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??wo}static _$Ei(){if(this.hasOwnProperty(dr("elementProperties")))return;const e=Q0(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(dr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(dr("properties"))){const r=this.properties,n=[...K0(r),...X0(r)];for(const s of n)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,s]of r)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const s=this._$Eu(r,n);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)r.unshift(po(s))}else e!==void 0&&r.push(po(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return G0(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EC(e,r){var i;const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:kn).toAttribute(r,n.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,r){var i;const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=n.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:kn;this._$Em=s,this[s]=o.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Zi)(this[e],r))return;this.P(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,a]of s)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};Ct.elementStyles=[],Ct.shadowRootOptions={mode:"open"},Ct[dr("elementProperties")]=new Map,Ct[dr("finalized")]=new Map,Ss==null||Ss({ReactiveElement:Ct}),(je.reactiveElementVersions??(je.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fr=globalThis,An=fr.trustedTypes,yo=An?An.createPolicy("lit-html",{createHTML:t=>t}):void 0,Fu="$lit$",Fe=`lit$${Math.random().toFixed(9).slice(2)}$`,Uu="?"+Fe,tp=`<${Uu}>`,mt=document,br=()=>mt.createComment(""),vr=t=>t===null||typeof t!="object"&&typeof t!="function",zu=Array.isArray,rp=t=>zu(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ms=`[ 	
\f\r]`,nr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bo=/-->/g,vo=/>/g,et=RegExp(`>|${Ms}(?:([^\\s"'>=/]+)(${Ms}*=${Ms}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$o=/'/g,To=/"/g,ju=/^(?:script|style|textarea|title)$/i,np=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),sp=np(1),fe=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),Eo=new WeakMap,ot=mt.createTreeWalker(mt,129);function Wu(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return yo!==void 0?yo.createHTML(e):e}const ip=(t,e)=>{const r=t.length-1,n=[];let s,i=e===2?"<svg>":"",a=nr;for(let o=0;o<r;o++){const l=t[o];let c,u,d=-1,f=0;for(;f<l.length&&(a.lastIndex=f,u=a.exec(l),u!==null);)f=a.lastIndex,a===nr?u[1]==="!--"?a=bo:u[1]!==void 0?a=vo:u[2]!==void 0?(ju.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=et):u[3]!==void 0&&(a=et):a===et?u[0]===">"?(a=s??nr,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?et:u[3]==='"'?To:$o):a===To||a===$o?a=et:a===bo||a===vo?a=nr:(a=et,s=void 0);const h=a===et&&t[o+1].startsWith("/>")?" ":"";i+=a===nr?l+tp:d>=0?(n.push(c),l.slice(0,d)+Fu+l.slice(d)+Fe+h):l+Fe+(d===-2?o:h)}return[Wu(t,i+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class $r{constructor({strings:e,_$litType$:r},n){let s;this.parts=[];let i=0,a=0;const o=e.length-1,l=this.parts,[c,u]=ip(e,r);if(this.el=$r.createElement(c,n),ot.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=ot.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(Fu)){const f=u[a++],h=s.getAttribute(d).split(Fe),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:h,ctor:m[1]==="."?op:m[1]==="?"?lp:m[1]==="@"?cp:Kn}),s.removeAttribute(d)}else d.startsWith(Fe)&&(l.push({type:6,index:i}),s.removeAttribute(d));if(ju.test(s.tagName)){const d=s.textContent.split(Fe),f=d.length-1;if(f>0){s.textContent=An?An.emptyScript:"";for(let h=0;h<f;h++)s.append(d[h],br()),ot.nextNode(),l.push({type:2,index:++i});s.append(d[f],br())}}}else if(s.nodeType===8)if(s.data===Uu)l.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(Fe,d+1))!==-1;)l.push({type:7,index:i}),d+=Fe.length-1}i++}}static createElement(e,r){const n=mt.createElement("template");return n.innerHTML=e,n}}function zt(t,e,r=t,n){var a,o;if(e===fe)return e;let s=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const i=vr(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),i===void 0?s=void 0:(s=new i(t),s._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=s:r._$Cl=s),s!==void 0&&(e=zt(t,s._$AS(t,e.values),s,n)),e}class ap{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,s=((e==null?void 0:e.creationScope)??mt).importNode(r,!0);ot.currentNode=s;let i=ot.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new _r(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new up(i,this,e)),this._$AV.push(c),l=n[++o]}a!==(l==null?void 0:l.index)&&(i=ot.nextNode(),a++)}return ot.currentNode=mt,s}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class _r{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,s){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=zt(this,e,r),vr(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==fe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):rp(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==N&&vr(this._$AH)?this._$AA.nextSibling.data=e:this.T(mt.createTextNode(e)),this._$AH=e}$(e){var i;const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=$r.createElement(Wu(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(r);else{const a=new ap(s,this),o=a.u(this.options);a.p(r),this.T(o),this._$AH=a}}_$AC(e){let r=Eo.get(e.strings);return r===void 0&&Eo.set(e.strings,r=new $r(e)),r}k(e){zu(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const i of e)s===r.length?r.push(n=new _r(this.S(br()),this.S(br()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Kn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,s,i){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}_$AI(e,r=this,n,s){const i=this.strings;let a=!1;if(i===void 0)e=zt(this,e,r,0),a=!vr(e)||e!==this._$AH&&e!==fe,a&&(this._$AH=e);else{const o=e;let l,c;for(e=i[0],l=0;l<i.length-1;l++)c=zt(this,o[n+l],r,l),c===fe&&(c=this._$AH[l]),a||(a=!vr(c)||c!==this._$AH[l]),c===N?e=N:e!==N&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!s&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class op extends Kn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}}class lp extends Kn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}}class cp extends Kn{constructor(e,r,n,s,i){super(e,r,n,s,i),this.type=5}_$AI(e,r=this){if((e=zt(this,e,r,0)??N)===fe)return;const n=this._$AH,s=e===N&&n!==N||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==N&&(n===N||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class up{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){zt(this,e)}}const ks=fr.litHtmlPolyfillSupport;ks==null||ks($r,_r),(fr.litHtmlVersions??(fr.litHtmlVersions=[])).push("3.1.3");const dp=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let s=n._$litPart$;if(s===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=s=new _r(e.insertBefore(br(),i),i,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hr extends Ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=dp(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return fe}}var bc;hr._$litElement$=!0,hr.finalized=!0,(bc=globalThis.litElementHydrateSupport)==null||bc.call(globalThis,{LitElement:hr});const As=globalThis.litElementPolyfillSupport;As==null||As({LitElement:hr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Qt=t=>(...e)=>({_$litDirective$:t,values:e});class yt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fp={attribute:!0,type:String,converter:kn,reflect:!1,hasChanged:Zi},hp=(t=fp,e,r)=>{const{kind:n,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(r.name,t),n==="accessor"){const{name:a}=r;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,t)},init(o){return o!==void 0&&this.P(a,void 0,t),o}}}if(n==="setter"){const{name:a}=r;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,t)}}throw Error("Unsupported decorator location: "+n)};function mp(t){return(e,r)=>typeof r=="object"?hp(t,e,r):((n,s,i)=>{const a=s.hasOwnProperty(i);return s.constructor.createProperty(i,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(s,i):void 0})(t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=Qt(class extends yt{constructor(t){var e;if(super(t),t.type!==Yi.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(e)}const r=t.element.classList;for(const i of this.st)i in e||(r.remove(i),this.st.delete(i));for(const i in e){const a=!!e[i];a===this.st.has(i)||(s=this.nt)!=null&&s.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return fe}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ji=t=>t??N;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ii extends yt{constructor(e){if(super(e),this.it=N,e.type!==Yi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||e==null)return this._t=void 0,this.it=e;if(e===fe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}ii.directiveName="unsafeHTML",ii.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class So extends ii{}So.directiveName="unsafeSVG",So.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pp(t,e,r){return t?e(t):r==null?void 0:r(t)}class qu extends hr{}function gp(t,e,r){if(e in t)return t[e];{const n=r();return Si(n)?new Promise(async(s,i)=>{try{const a=await n;t[e]=a,s(a)}catch(a){i(a)}}):(t[e]=n,n)}}const wp=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Ki(t,e){return t?wp.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Be(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function yp(t,e,r){return t.reduce((n,s,i,a)=>{const o=e(s,i,a);return r(o,s,i,a)&&n.push(o),n},[])}function Bu(t){return!!t}const bp={capitalizeFirstLetter:!1};function vp(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function $p(t,e){return e.capitalizeFirstLetter?vp(t):t}function Tp(t,e=bp){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return $p(n,e)}var Mo;(function(t){t.Upper="upper",t.Lower="lower"})(Mo||(Mo={}));var ko;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ko||(ko={}));function Gu(t){return t?t instanceof Error?t.message:Ki(t,"message")?String(t.message):String(t):""}function Ep(t){return t instanceof Error?t:new Error(Gu(t))}function Sp(t,e){const r=Ep(t);return r.message=`${e}: ${r.message}`,r}function Zu(t,e){let r=!1;const n=Be(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(Be(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function Mp(t){return!!t&&typeof t=="object"}function kp(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}kp();function Ao(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var jt;(function(t){t.Upper="upper",t.Lower="lower"})(jt||(jt={}));function Ap(t){return t.toLowerCase()!==t.toUpperCase()}function xo(t,e,r){if(!t&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<t.length;n++){const s=t[n]||"";if(!Ap(s)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(e===jt.Upper&&s!==s.toUpperCase())return!1;if(e===jt.Lower&&s!==s.toLowerCase())return!1}return!0}function xp(t){return t.split("").reduce((r,n,s,i)=>{const a=s>0&&i[s-1]||"",o=s<i.length-1&&i[s+1]||"",l=xo(a,jt.Lower,{blockNoCaseCharacters:!0})||xo(o,jt.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||s===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}var Co;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Co||(Co={}));function Cp(t){return!!t&&typeof t=="object"}function Pp(t,e){let r=!1;const n=Ao(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(Ao(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function Op(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Op();function bt(t){if(Cp(t))return Pp(t,(r,n)=>{if(!M(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(xp(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?ee(r):r.startsWith("-")?pn`-${ee(r)}`:pn`--${ee(r)}`;return{name:a,value:pn`var(${a}, ${ee(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${bt.name}' function.`)}function Lp(t,e,r){const n=!e.length&&!r.length,s=t.length?!1:!e.filter(o=>!!o.index).length;if(n||s)return[...t];const i=t.map(o=>[o]);return i.length||(i[0]=[]),r.forEach(o=>{o>=0&&o<t.length&&(i[o]=[])}),e.forEach(o=>{const l=i[o.index];l&&l.splice(0,0,...o.values)}),i.flat()}function gn(t){return Ki(t,"_elementVirIsMinimalDefinitionWithInputs")&&!!t._elementVirIsMinimalDefinitionWithInputs}function Xi(t){return Ki(t,"tagName")&&!!t.tagName&&typeof t.tagName=="string"}function Yu(t){return yp(t,e=>{if(gn(e))return e.definition;if(Xi(e))return e.tagInterpolationKey||e},Bu)}const Ju=new WeakMap;function Np(t,e){var s;const r=Yu(e);return(s=Ku(Ju,[t,...r]).value)==null?void 0:s.template}function Ip(t,e,r){const n=Yu(e);return Qu(Ju,[t,...n],r)}function Ku(t,e,r=0){const{currentTemplateAndNested:n,reason:s}=Xu(t,e,r);return n?r===e.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Ku(n.nested,e,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:s}}function Xu(t,e,r){const n=e[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!t.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const s=t.get(n);return s==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:s,reason:"key and value exists"}}function Qu(t,e,r,n=0){const{currentTemplateAndNested:s,currentKey:i,reason:a}=Xu(t,e,n);if(!i)return{result:!1,reason:a};const o=s??{nested:void 0,template:void 0};if(s||t.set(i,o),n===e.length-1)return o.template=r,{result:!0,reason:"set value at end of keys array"};const l=o.nested??new WeakMap;return o.nested||(o.nested=l),Qu(l,e,r,n+1)}const Rp=new WeakMap;function ed(t,e,r){const n=Np(t,e),s=n??r();if(!n){const o=Ip(t,e,s);if(o.result)Rp.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=s.valuesTransform(e),a=Lp(e,i.valueInsertions,i.valueIndexDeletions);return{strings:s.templateStrings,values:a}}function td(t,e,r,n){const s=[],i=[],a=[],o=[];return t.forEach((c,u)=>{const d=s.length-1,f=s[d],h=u-1,m=e[h];n&&n(c);let p,y=[];if(typeof f=="string"&&(p=r(f,c,m),p)){s[d]=f+p.replacement,a.push(h);const T=p.getExtraValues;y=T?T(m):[],y.length&&T?(s[d]+=" ",y.forEach((O,_)=>{_&&s.push(" ")}),o.push(O=>{const _=O[h],q=T(_);return{index:h,values:q}}),s.push(c)):s[d]+=c}p||s.push(c);const x=t.raw[u];p?(i[d]=i[d]+p.replacement+x,y.length&&y.forEach(()=>{i.push("")})):i.push(x)}),{templateStrings:Object.assign([],s,{raw:i}),valuesTransform(c){const u=o.map(d=>d(c)).flat();return{valueIndexDeletions:a,valueInsertions:u}}}}function _p(...[t,e,r]){if(Xi(r))return{replacement:r.tagName,getExtraValues:void 0}}function Dp(t,e){return td(t,e,_p)}function A(t,...e){const r=ed(t,e,()=>Dp(t,e));return pn(r.strings,...r.values)}const Vp={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function rd(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const r=e.host;return r instanceof qu?!0:rd(r)}function nd(t,e){const r=t.instanceState;Be(e).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),"instanceInputs"in t&&Be(t.instanceInputs).forEach(n=>{n in e||(t.instanceInputs[n]=void 0)}),Hp(t)}function Hp(t){t._haveInputsBeenSet||(t._haveInputsBeenSet=!0)}function Po(t,e){const r=[t,"-"].join("");Object.keys(e).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${t}': CSS property names must begin with the element's tag name.`)})}class Fp extends CustomEvent{get type(){return this._type}constructor(e,r){super(typeof e=="string"?e:e.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function Qi(){return t=>{var e;return e=class extends Fp{constructor(r){super(t,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:t})}},Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}}function Ee(){return Qi()}function Up(t,e){return e?Object.keys(e).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const s=Qi()([t,n].join("-"));return r[n]=s,r},{}):{}}function zp(t){return t?Zu(t,e=>e):{}}const Xn=Symbol("element-vir-state-setup");function jp(t){return Mp(t)?Xn in t:!1}function sd(t,e){e in t||mp()(t,e)}function Wp(t,e,r){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${r.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${r.toLowerCase()}'.`)}function Oo(t,e){const r=t;function n(a){e?Wp(a,t,t.tagName):sd(t,a)}function s(a,o){return n(o),r[o]}return new Proxy({},{get:s,set(a,o,l){const c=jp(l)?l[Xn]():l;n(o);const u=r[o];function d(h){a[o]=h,r[o]=h}const f=t.observablePropertyListenerMap[o];if(u!==c&&Es(u)&&f&&u.removeListener(f),Es(c))if(f)c.listen(!1,f);else{let h=function(){t.requestUpdate()};t.observablePropertyListenerMap[o]=h,c.listen(!1,h)}else Es(u)&&(t.observablePropertyListenerMap[o]=void 0);return d(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,o){if(o in a)return{get value(){return s(a,o)},configurable:!0,enumerable:!0}},has(a,o){return Reflect.has(a,o)}})}function qp({hostClassNames:t,cssVars:e}){return{hostClasses:Zu(t,(r,n)=>({name:ee(n),selector:ee(`:host(.${n})`)})),cssVars:e}}function Bp({host:t,hostClassesInit:e,hostClassNames:r,state:n,inputs:s}){e&&Be(e).forEach(i=>{const a=e[i],o=r[i];typeof a=="function"&&(a({state:n,inputs:s})?t.classList.add(o):t.classList.remove(o))})}function Gp({element:t,eventsMap:e,cssVars:r,slotNamesMap:n}){function s(a){Be(a).forEach(o=>{const l=a[o];t.instanceState[o]=l})}return{cssVars:r,slotNames:n,dispatch:a=>t.dispatchEvent(a),events:e,host:t,inputs:t.instanceInputs,state:t.instanceState,updateState:s}}function Zp(t){return t?t.reduce((r,n)=>(r[n]=n,r),{}):{}}var Yp=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Dr(t){var e;const r=t;if(!M(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!M(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...Vp,...r.options},s=Up(r.tagName,r.events),i=zp(r.hostClasses);r.hostClasses&&Po(r.tagName,r.hostClasses),r.cssVars&&Po(r.tagName,r.cssVars);const a=r.cssVars?bt(r.cssVars):{},o=Zp(r.slotNames),l=typeof r.styles=="function"?r.styles(qp({hostClassNames:i,cssVars:a})):r.styles||A``,c=r.renderCallback;function u(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=(e=class extends qu{createRenderParams(){return Gp({element:this,eventsMap:s,cssVars:a,slotNamesMap:o})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{rd(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Dr.name}' to define ${r.tagName}.`),this._hasRendered=!0;const f=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(f)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const h=c(f);if(h instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Bp({host:f.host,hostClassesInit:r.hostClasses,hostClassNames:i,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=Sp(f,`Failed to render ${r.tagName}`);return console.error(h),this._lastRenderError=h,Gu(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const f=this.createRenderParams();if(r.initCallback(f)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{Ec(f,"destroy")&&M(f.destroy,"function")&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const f=this.createRenderParams();if(r.cleanupCallback(f)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}assignInputs(f){nd(this,f)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:Oo(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:Oo(this,!n.allowPolymorphicState)});const f=r.stateInitStatic||{};Be(f).forEach(h=>{sd(this,h),this.instanceState[h]=f[h]}),this.definition=d}},Yp(e,"anonymousClass"),Object.defineProperty(e,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(e,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(e,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(e,"assign",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(e,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(e,"events",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(e,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(e,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(e,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(e,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(e,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(e,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),e);return Object.defineProperties(d,{name:{value:Tp(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:f=>f instanceof d,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,d),d}function Se(){return t=>{const e=t;if(!M(e,"object"))throw new Error("Cannot define element with non-object init: ${init}");return Dr({...e,options:{ignoreUnsetInputs:!1,...e.options}})}}class id extends st{}const ad=id;function Lo(t){return{[Xn](){return new id(t)}}}function Qn(t,e){return ai(t,e),t.element}function Jp(t){try{return t.options.host.tagName.toLowerCase()}catch{return}}function ai(t,e){const r=Jp(t),n=r?`: in ${r}`:"";if(t.type!==Yi.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element${n}.`);if(!t.element)throw new Error(`${e} directive found no element${n}.`)}function Kp(t){const e=Qt(class extends yt{constructor(r){super(r),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Qn(r,t)}render(r){return this.element.setAttribute(t,r),fe}});return{attributeSelector(r){return`[${t}="${r}"]`},attributeDirective(r){return e(r)},attributeName:t}}function No(t){if(t instanceof ad)throw new TypeError("Pass AsyncProp.value, not AsyncProp itself.");return!(t instanceof Promise)}function xn(t){if(t instanceof ad)throw new TypeError("Pass AsyncProp.value, not AsyncProp itself.");return t instanceof Error}function F(t,e){return Xp(t,e)}const Xp=Qt(class extends yt{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Qn(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(t,e){const r=typeof t=="string"?t:t.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(r,e)),fe}}),xs="onResize",od=Qt(class extends yt{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(e=>this.fireCallback(e))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),ai(t,xs)}fireCallback(t){var r;const e=t[0];if(!e)throw console.error(t),new Error(`${xs} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:e.target,contentRect:e.contentRect},this.element)}update(t,[e]){ai(t,xs),this.callback=e;const r=t.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(e)}render(t){}});function Ue(t,e,r){return pp(t,()=>e,()=>r)}const{attributeDirective:ar,attributeSelector:$2,attributeName:T2}=Kp("data-test-id");Be({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",isStrictInstance:"",renderCallback:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function Qp(t){return{[Xn]:t}}function eg(t){const{assertInputs:e,transformInputs:r}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(n=>n)};return{defineElement:()=>n=>(e(n),Se()(r(n))),defineElementNoInputs:n=>(e(n),Dr(r(n)))}}function tg(t,e){return e?Io(t,e):Io(void 0,t)}const Io=Qt(class extends yt{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Qn(t,"assign")}render(t,e){return nd(this.element,e),fe}}),rg={};function ng(t,e){return e.map((r,n)=>{const s=t[n],i=t[n+1];if(s&&i){const{shouldHaveTagNameHere:a}=ld(s,i);if(a&&M(r,"string"))return{tagName:r,tagInterpolationKey:gp(rg,r,()=>({tagName:r}))}}return r})}function ld(t,e){const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/),n=(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function sg(...[t,e,r]){var l,c,u;const n=gn(r)?r.definition:r,{isOpeningTag:s,shouldHaveTagNameHere:i}=ld(t,e),a=Xi(n);if(a&&i&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(i&&!a)throw console.error({lastNewString:t,currentTemplateString:e,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${(n==null?void 0:n.tagName)||((c=(l=n==null?void 0:n.prototype)==null?void 0:l.constructor)==null?void 0:c.name)||((u=n==null?void 0:n.constructor)==null?void 0:u.name)}'`);if(!i||!a)return;if(s&&n.elementOptions&&!n.elementOptions.ignoreUnsetInputs&&!gn(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(d){const f=gn(d)?d.inputs:void 0;return[s&&f?tg(f):void 0].filter(Bu)}}}function ig(t){}function ag(t){return td(t.strings,t.values,sg,ig)}function w(t,...e){const r=ng(t,e),n=sp(t,...r),s=ed(t,r,()=>ag(n));return{...n,strings:s.strings,values:s.values}}const Ro="vira-",{defineElement:Ne,defineElementNoInputs:E2}=eg({assertInputs:t=>{if(!t.tagName.startsWith(Ro))throw new Error(`Tag name should start with '${Ro}' but got '${t.tagName}'`)}}),v=bt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function _o(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function og(t,e="and"){if(t.length<2)return t.join("");const r=t.length>2?", ":" ";return`${t.slice(0,-1).join(r)}${r}${e} ${t[t.length-1]}`}var Do;(function(t){t.Upper="upper",t.Lower="lower"})(Do||(Do={}));var Vo;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Vo||(Vo={}));function Ho(t,e){let r=!1;const n=_o(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(_o(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function cd(){let t,e,r=!1;const n=new Promise((s,i)=>{t=a=>(r=!0,s(a)),e=a=>{r=!0,i(a)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${cd.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function Fo(t){const e=cd();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function lg(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}lg();const cg="px";function ug(t){return dg({value:t,suffix:cg})}function dg({value:t,suffix:e}){return String(t).endsWith(e)?String(t):`${String(t)}${e}`}function V(t,e){let r=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(a=>[a]));let n=e[0].length,s=e[0].map((a,o)=>e.map(l=>l[o])),i=t.map(a=>s.map(o=>{let l=0;if(!Array.isArray(a)){for(let c of o)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(o[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function Vr(t){return We(t)==="string"}function We(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Cn(t,{precision:e,unit:r}){return Ge(t)?"none":ud(t,e)+(r??"")}function Ge(t){return Number.isNaN(t)||t instanceof Number&&(t==null?void 0:t.none)}function j(t){return Ge(t)?0:t}function ud(t,e){if(t===0)return 0;let r=~~t,n=0;r&&e&&(n=~~Math.log10(Math.abs(r))+1);const s=10**(e-n);return Math.floor(t*s+.5)/s}const fg={deg:1,grad:.9,rad:180/Math.PI,turn:360};function dd(t){if(!t)return;t=t.trim();const e=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,s=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let i=t.match(e);if(i){let a=[];return i[2].replace(s,(o,l)=>{let c=l.match(n),u=l;if(c){let d=c[0],f=u.slice(0,-d.length);d==="%"?(u=new Number(f/100),u.type="<percentage>"):(u=new Number(f*fg[d]),u.type="<angle>",u.unit=d)}else r.test(u)?(u=new Number(u),u.type="<number>"):u==="none"&&(u=new Number(NaN),u.none=!0);o.startsWith("/")&&(u=u instanceof Number?u:new Number(u),u.alpha=!0),typeof u=="object"&&u instanceof Number&&(u.raw=l),a.push(u)}),{name:i[1].toLowerCase(),rawName:i[1],rawArgs:i[2],args:a}}}function fd(t){return t[t.length-1]}function Tr(t,e,r){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*r}function hd(t,e,r){return(r-t)/(e-t)}function ea(t,e,r){return Tr(e[0],e[1],hd(t[0],t[1],r))}function md(t){return t.map(e=>e.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let s=new String(n[1]);return s.range=[+n[2],+n[3]],s}return r}))}function pd(t,e,r){return Math.max(Math.min(r,e),t)}function es(t,e){return Math.sign(t)===Math.sign(e)?t:-t}function ve(t,e){return es(Math.abs(t)**e,t)}function ta(t,e){return e===0?0:t/e}function gd(t,e,r=0,n=t.length){for(;r<n;){const s=r+n>>1;t[s]<e?r=s+1:n=s}return r}var hg=Object.freeze({__proto__:null,bisectLeft:gd,clamp:pd,copySign:es,interpolate:Tr,interpolateInv:hd,isNone:Ge,isString:Vr,last:fd,mapRange:ea,multiplyMatrices:V,parseCoordGrammar:md,parseFunction:dd,serializeNumber:Cn,skipNone:j,spow:ve,toPrecision:ud,type:We,zdiv:ta});class mg{add(e,r,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(s){this[s]=this[s]||[],r&&this[s][n?"unshift":"push"](r)},this)}run(e,r){this[e]=this[e]||[],this[e].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Ze=new mg;var vc,$c,Tc,ie={gamut_mapping:"css",precision:5,deltaE:"76",verbose:((Tc=($c=(vc=globalThis==null?void 0:globalThis.process)==null?void 0:vc.env)==null?void 0:$c.NODE_ENV)==null?void 0:Tc.toLowerCase())!=="test",warn:function(e){var r,n;this.verbose&&((n=(r=globalThis==null?void 0:globalThis.console)==null?void 0:r.warn)==null||n.call(r,e))}};const Y={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function oi(t){return Array.isArray(t)?t:Y[t]}function Pn(t,e,r,n={}){if(t=oi(t),e=oi(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return r;let s={W1:t,W2:e,XYZ:r,options:n};if(Ze.run("chromatic-adaptation-start",s),s.M||(s.W1===Y.D65&&s.W2===Y.D50?s.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:s.W1===Y.D50&&s.W2===Y.D65&&(s.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Ze.run("chromatic-adaptation-end",s),s.M)return V(s.M,s.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const pg=new Set(["<number>","<percentage>","<angle>"]);function Uo(t,e,r,n){return Object.entries(t.coords).map(([i,a],o)=>{let l=e.coordGrammar[o],c=n[o],u=c==null?void 0:c.type,d;if(c.none?d=l.find(m=>pg.has(m)):d=l.find(m=>m==u),!d){let m=a.name||i;throw new TypeError(`${u??c.raw} not allowed for ${m} in ${r}()`)}let f=d.range;u==="<percentage>"&&(f||(f=[0,1]));let h=a.range||a.refRange;return f&&h&&(n[o]=ea(f,h,n[o])),d})}function wd(t,{meta:e}={}){var n,s,i,a;let r={str:(n=String(t))==null?void 0:n.trim()};if(Ze.run("parse-start",r),r.color)return r.color;if(r.parsed=dd(r.str),r.parsed){let o=r.parsed.name;if(o==="color"){let l=r.parsed.args.shift(),c=l.startsWith("--")?l.substring(2):`--${l}`,u=[l,c],d=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let m of b.all){let p=m.getFormat("color");if(p&&(u.includes(p.id)||(s=p.ids)!=null&&s.filter(y=>u.includes(y)).length)){const y=Object.keys(m.coords).map((T,O)=>r.parsed.args[O]||0);let x;return p.coordGrammar&&(x=Uo(m,p,"color",y)),e&&Object.assign(e,{formatId:"color",types:x}),p.id.startsWith("--")&&!l.startsWith("--")&&ie.warn(`${m.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${p.id}) instead of color(${l}).`),l.startsWith("--")&&!p.id.startsWith("--")&&ie.warn(`${m.name} is a standard space and supported in the CSS spec. Use color(${p.id}) instead of prefixed color(${l}).`),{spaceId:m.id,coords:y,alpha:d}}}let f="",h=l in b.registry?l:c;if(h in b.registry){let m=(a=(i=b.registry[h].formats)==null?void 0:i.color)==null?void 0:a.id;m&&(f=`Did you mean color(${m})?`)}throw new TypeError(`Cannot parse color(${l}). `+(f||"Missing a plugin?"))}else for(let l of b.all){let c=l.getFormat(o);if(c&&c.type==="function"){let u=1;(c.lastAlpha||fd(r.parsed.args).alpha)&&(u=r.parsed.args.pop());let d=r.parsed.args,f;return c.coordGrammar&&(f=Uo(l,c,o,d)),e&&Object.assign(e,{formatId:c.name,types:f}),{spaceId:l.id,coords:d,alpha:u}}}}else for(let o of b.all)for(let l in o.formats){let c=o.formats[l];if(c.type!=="custom"||c.test&&!c.test(r.str))continue;let u=c.parse(r.str);if(u)return u.alpha??(u.alpha=1),e&&(e.formatId=l),u}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function S(t){if(Array.isArray(t))return t.map(S);if(!t)throw new TypeError("Empty color reference");Vr(t)&&(t=wd(t));let e=t.space||t.spaceId;return e instanceof b||(t.space=b.get(e)),t.alpha===void 0&&(t.alpha=1),t}const gg=75e-6,X=class X{constructor(e){var s;this.id=e.id,this.name=e.name,this.base=e.base?X.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let r=e.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=e.white??this.base.white??"D65";this.white=oi(n),this.formats=e.formats??{};for(let i in this.formats){let a=this.formats[i];a.type||(a.type="function"),a.name||(a.name=i)}(s=this.formats.color)!=null&&s.id||(this.formats.color={...this.formats.color??{},id:e.cssId||this.id}),e.gamutSpace?this.gamutSpace=e.gamutSpace==="self"?this:X.get(e.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,a)=>!0),this.referred=e.referred,Object.defineProperty(this,"path",{value:wg(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Ze.run("colorspace-init-end",this)}inGamut(e,{epsilon:r=gg}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:r});let n=Object.values(this.coords);return e.every((s,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(s))return!0;let[o,l]=a.range;return(o===void 0||s>=o-r)&&(l===void 0||s<=l+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!("range"in e))}get cssId(){var e,r;return((r=(e=this.formats)==null?void 0:e.color)==null?void 0:r.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=zo(e,this),e;let r;return e==="default"?r=Object.values(this.formats)[0]:r=this.formats[e],r?(r=zo(r,this),r):null}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(e,r){if(arguments.length===1){const o=S(e);[e,r]=[o.space,o.coords]}if(e=X.get(e),this.equals(e))return r;r=r.map(o=>Number.isNaN(o)?0:o);let n=this.path,s=e.path,i,a;for(let o=0;o<n.length&&n[o].equals(s[o]);o++)i=n[o],a=o;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let o=n.length-1;o>a;o--)r=n[o].toBase(r);for(let o=a+1;o<s.length;o++)r=s[o].fromBase(r);return r}from(e,r){if(arguments.length===1){const n=S(e);[e,r]=[n.space,n.coords]}return e=X.get(e),e.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let r in this.coords){let n=this.coords[r],s=n.range||n.refRange;e.push((s==null?void 0:s.min)??0)}return e}static get all(){return[...new Set(Object.values(X.registry))]}static register(e,r){if(arguments.length===1&&(r=arguments[0],e=r.id),r=this.get(r),this.registry[e]&&this.registry[e]!==r)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(e,...r){if(!e||e instanceof X)return e;if(We(e)==="string"){let s=X.registry[e.toLowerCase()];if(!s)throw new TypeError(`No color space found with id = "${e}"`);return s}if(r.length)return X.get(...r);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,r){var l;let n=We(e),s,i;if(n==="string"?e.includes(".")?[s,i]=e.split("."):[s,i]=[,e]:Array.isArray(e)?[s,i]=e:(s=e.space,i=e.coordId),s=X.get(s),s||(s=r),!s)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(n=We(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(s.coords)[i];if(c)return{space:s,id:c[0],index:i,...c[1]}}s=X.get(s);let a=i.toLowerCase(),o=0;for(let c in s.coords){let u=s.coords[c];if(c.toLowerCase()===a||((l=u.name)==null?void 0:l.toLowerCase())===a)return{space:s,id:c,index:o,...u};o++}throw new TypeError(`No "${i}" coordinate found in ${s.name}. Its coordinates are: ${Object.keys(s.coords).join(", ")}`)}};zr(X,"registry",{}),zr(X,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=X;function wg(t){let e=[t];for(let r=t;r=r.base;)e.push(r);return e}function zo(t,{coords:e}={}){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=md(t.coords);let r=Object.entries(e).map(([n,s],i)=>{let a=t.coordGrammar[i][0],o=s.range||s.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:o,toRange:l,suffix:c}});t.serializeCoords=(n,s)=>n.map((i,a)=>{let{fromRange:o,toRange:l,suffix:c}=r[a];return o&&l&&(i=ea(o,l,i)),i=Cn(i,{precision:s,unit:c}),i})}return t}var B=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class te extends b{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=B),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??(e.toBase=r=>{let n=V(e.toXYZ_M,r);return this.white!==this.base.white&&(n=Pn(this.white,this.base.white,n)),n}),e.fromBase??(e.fromBase=r=>(r=Pn(this.base.white,this.white,r),V(e.fromXYZ_M,r)))),e.referred??(e.referred="display"),super(e)}}function Hr(t,e){return t=S(t),!e||t.space.equals(e)?t.coords.slice():(e=b.get(e),e.from(t))}function re(t,e){t=S(t);let{space:r,index:n}=b.resolveCoord(e,t.space);return Hr(t,r)[n]}function ra(t,e,r){return t=S(t),e=b.get(e),t.coords=e.to(t.space,r),t}ra.returns="color";function Le(t,e,r){if(t=S(t),arguments.length===2&&We(arguments[1])==="object"){let n=arguments[1];for(let s in n)Le(t,s,n[s])}else{typeof r=="function"&&(r=r(re(t,e)));let{space:n,index:s}=b.resolveCoord(e,t.space),i=Hr(t,n);i[s]=r,ra(t,n,i)}return t}Le.returns="color";var na=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:B,fromBase:t=>Pn(B.white,"D50",t),toBase:t=>Pn("D50",B.white,t)});const yg=216/24389,jo=24/116,Jr=24389/27;let Cs=Y.D50;var ne=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Cs,base:na,fromBase(t){let r=t.map((n,s)=>n/Cs[s]).map(n=>n>yg?Math.cbrt(n):(Jr*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>jo?Math.pow(e[0],3):(116*e[0]-16)/Jr,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/Jr,e[2]>jo?Math.pow(e[2],3):(116*e[2]-16)/Jr].map((n,s)=>n*Cs[s])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Me(t){return(t%360+360)%360}function bg(t,e){if(t==="raw")return e;let[r,n]=e.map(Me),s=n-r;return t==="increasing"?s<0&&(n+=360):t==="decreasing"?s>0&&(r+=360):t==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):t==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var Er=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ne,fromBase(t){let[e,r,n]=t,s;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Me(s)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Wo=25**7,On=Math.PI,qo=180/On,St=On/180;function Bo(t){const e=t*t;return e*e*e*t}function yd(t,e,{kL:r=1,kC:n=1,kH:s=1}={}){[t,e]=S([t,e]);let[i,a,o]=ne.from(t),l=Er.from(ne,[i,a,o])[1],[c,u,d]=ne.from(e),f=Er.from(ne,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let h=(l+f)/2,m=Bo(h),p=.5*(1-Math.sqrt(m/(m+Wo))),y=(1+p)*a,x=(1+p)*u,T=Math.sqrt(y**2+o**2),O=Math.sqrt(x**2+d**2),_=y===0&&o===0?0:Math.atan2(o,y),q=x===0&&d===0?0:Math.atan2(d,x);_<0&&(_+=2*On),q<0&&(q+=2*On),_*=qo,q*=qo;let Ie=c-i,Re=O-T,K=q-_,me=_+q,be=Math.abs(K),Ke;T*O===0?Ke=0:be<=180?Ke=K:K>180?Ke=K-360:K<-180?Ke=K+360:ie.warn("the unthinkable has happened");let fa=2*Math.sqrt(O*T)*Math.sin(Ke*St/2),$f=(i+c)/2,ls=(T+O)/2,ha=Bo(ls),ke;T*O===0?ke=me:be<=180?ke=me/2:me<360?ke=(me+360)/2:ke=(me-360)/2;let ma=($f-50)**2,Tf=1+.015*ma/Math.sqrt(20+ma),pa=1+.045*ls,er=1;er-=.17*Math.cos((ke-30)*St),er+=.24*Math.cos(2*ke*St),er+=.32*Math.cos((3*ke+6)*St),er-=.2*Math.cos((4*ke-63)*St);let ga=1+.015*ls*er,Ef=30*Math.exp(-1*((ke-275)/25)**2),Sf=2*Math.sqrt(ha/(ha+Wo)),Mf=-1*Math.sin(2*Ef*St)*Sf,Ur=(Ie/(r*Tf))**2;return Ur+=(Re/(n*pa))**2,Ur+=(fa/(s*ga))**2,Ur+=Mf*(Re/(n*pa))*(fa/(s*ga)),Math.sqrt(Ur)}const vg=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],$g=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Tg=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Eg=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Wt=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:B,fromBase(t){let r=V(vg,t).map(n=>Math.cbrt(n));return V(Tg,r)},toBase(t){let r=V(Eg,t).map(n=>n**3);return V($g,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function li(t,e){[t,e]=S([t,e]);let[r,n,s]=Wt.from(t),[i,a,o]=Wt.from(e),l=r-i,c=n-a,u=s-o;return Math.sqrt(l**2+c**2+u**2)}const Sg=75e-6;function ut(t,e,{epsilon:r=Sg}={}){t=S(t),e||(e=t.space),e=b.get(e);let n=t.coords;return e!==t.space&&(n=e.from(t)),e.inGamut(n,{epsilon:r})}function qt(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function bd(t,e,r="lab"){r=b.get(r);let n=r.from(t),s=r.from(e);return Math.sqrt(n.reduce((i,a,o)=>{let l=s[o];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function Mg(t,e){return bd(t,e,"lab")}const kg=Math.PI,Go=kg/180;function Ag(t,e,{l:r=2,c:n=1}={}){[t,e]=S([t,e]);let[s,i,a]=ne.from(t),[,o,l]=Er.from(ne,[s,i,a]),[c,u,d]=ne.from(e),f=Er.from(ne,[c,u,d])[1];o<0&&(o=0),f<0&&(f=0);let h=s-c,m=o-f,p=i-u,y=a-d,x=p**2+y**2-m**2,T=.511;s>=16&&(T=.040975*s/(1+.01765*s));let O=.0638*o/(1+.0131*o)+.638,_;Number.isNaN(l)&&(l=0),l>=164&&l<=345?_=.56+Math.abs(.2*Math.cos((l+168)*Go)):_=.36+Math.abs(.4*Math.cos((l+35)*Go));let q=Math.pow(o,4),Ie=Math.sqrt(q/(q+1900)),Re=O*(Ie*_+1-Ie),K=(h/(r*T))**2;return K+=(m/(n*O))**2,K+=x/Re**2,Math.sqrt(K)}const Zo=203;var sa=new b({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:B,fromBase(t){return t.map(e=>Math.max(e*Zo,0))},toBase(t){return t.map(e=>Math.max(e/Zo,0))}});const Kr=1.15,Xr=.66,Yo=2610/2**14,xg=2**14/2610,Jo=3424/2**12,Ko=2413/2**7,Xo=2392/2**7,Cg=1.7*2523/2**5,Qo=2**5/(1.7*2523),Qr=-.56,Ps=16295499532821565e-27,Pg=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Og=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Lg=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Ng=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var vd=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:sa,fromBase(t){let[e,r,n]=t,s=Kr*e-(Kr-1)*n,i=Xr*r-(Xr-1)*e,o=V(Pg,[s,i,n]).map(function(f){let h=Jo+Ko*(f/1e4)**Yo,m=1+Xo*(f/1e4)**Yo;return(h/m)**Cg}),[l,c,u]=V(Lg,o);return[(1+Qr)*l/(1+Qr*l)-Ps,c,u]},toBase(t){let[e,r,n]=t,s=(e+Ps)/(1+Qr-Qr*(e+Ps)),a=V(Ng,[s,r,n]).map(function(f){let h=Jo-f**Qo,m=Xo*f**Qo-Ko;return 1e4*(h/m)**xg}),[o,l,c]=V(Og,a),u=(o+(Kr-1)*c)/Kr,d=(l+(Xr-1)*u)/Xr;return[u,d,c]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),ci=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:vd,fromBase(t){let[e,r,n]=t,s;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Me(s)]},toBase(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]}});function Ig(t,e){[t,e]=S([t,e]);let[r,n,s]=ci.from(t),[i,a,o]=ci.from(e),l=r-i,c=n-a;Number.isNaN(s)&&Number.isNaN(o)?(s=0,o=0):Number.isNaN(s)?s=o:Number.isNaN(o)&&(o=s);let u=s-o,d=2*Math.sqrt(n*a)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const $d=3424/4096,Td=2413/128,Ed=2392/128,el=2610/16384,Rg=2523/32,_g=16384/2610,tl=32/2523,Dg=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Vg=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Hg=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Fg=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var ui=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:sa,fromBase(t){let e=V(Dg,t);return Ug(e)},toBase(t){let e=zg(t);return V(Fg,e)}});function Ug(t){let e=t.map(function(r){let n=$d+Td*(r/1e4)**el,s=1+Ed*(r/1e4)**el;return(n/s)**Rg});return V(Vg,e)}function zg(t){return V(Hg,t).map(function(n){let s=Math.max(n**tl-$d,0),i=Td-Ed*n**tl;return 1e4*(s/i)**_g})}function jg(t,e){[t,e]=S([t,e]);let[r,n,s]=ui.from(t),[i,a,o]=ui.from(e);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(s-o)**2)}const Wg=Y.D65,Sd=.42,rl=1/Sd,Os=2*Math.PI,Md=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],qg=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Bg=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Gg={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},tt={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Zg=180/Math.PI,nl=Math.PI/180;function kd(t,e){return t.map(n=>{const s=ve(e*Math.abs(n)*.01,Sd);return 400*es(s,n)/(s+27.13)})}function Yg(t,e){const r=100/e*27.13**rl;return t.map(n=>{const s=Math.abs(n);return es(r*ve(s/(400-s),rl),n)})}function Jg(t){let e=Me(t);e<=tt.h[0]&&(e+=360);const r=gd(tt.h,e)-1,[n,s]=tt.h.slice(r,r+2),[i,a]=tt.e.slice(r,r+2),o=tt.H[r],l=(e-n)/i;return o+100*l/(l+(s-e)/a)}function Kg(t){let e=(t%400+400)%400;const r=Math.floor(.01*e);e=e%100;const[n,s]=tt.h.slice(r,r+2),[i,a]=tt.e.slice(r,r+2);return Me((e*(a*n-i*s)-100*n*a)/(e*(a-i)-100*a))}function Ad(t,e,r,n,s){const i={};i.discounting=s,i.refWhite=t,i.surround=n;const a=t.map(p=>p*100);i.la=e,i.yb=r;const o=a[1],l=V(Md,a);n=Gg[i.surround];const c=n[0];i.c=n[1],i.nc=n[2];const d=(1/(5*i.la+1))**4;i.fl=d*i.la+.1*(1-d)*(1-d)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/o,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const f=s?1:Math.max(Math.min(c*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=l.map(p=>Tr(1,o/p,f)),i.dRgbInv=i.dRgb.map(p=>1/p);const h=l.map((p,y)=>p*i.dRgb[y]),m=kd(h,i.fl);return i.aW=i.nbb*(2*m[0]+m[1]+.05*m[2]),i}const sl=Ad(Wg,64/Math.PI*.2,20,"average",!1);function di(t,e){if(!(t.J!==void 0^t.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(t.C!==void 0^t.M!==void 0^t.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(t.h!==void 0^t.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(t.J===0||t.Q===0)return[0,0,0];let r=0;t.h!==void 0?r=Me(t.h)*nl:r=Kg(t.H)*nl;const n=Math.cos(r),s=Math.sin(r);let i=0;t.J!==void 0?i=ve(t.J,1/2)*.1:t.Q!==void 0&&(i=.25*e.c*t.Q/((e.aW+4)*e.flRoot));let a=0;t.C!==void 0?a=t.C/i:t.M!==void 0?a=t.M/e.flRoot/i:t.s!==void 0&&(a=4e-4*t.s**2*(e.aW+4)/e.c);const o=ve(a*Math.pow(1.64-Math.pow(.29,e.n),-.73),10/9),l=.25*(Math.cos(r+2)+3.8),c=e.aW*ve(i,2/e.c/e.z),u=5e4/13*e.nc*e.ncb*l,d=c/e.nbb,f=23*(d+.305)*ta(o,23*u+o*(11*n+108*s)),h=f*n,m=f*s,p=Yg(V(Bg,[d,h,m]).map(y=>y*1/1403),e.fl);return V(qg,p.map((y,x)=>y*e.dRgbInv[x])).map(y=>y/100)}function xd(t,e){const r=t.map(O=>O*100),n=kd(V(Md,r).map((O,_)=>O*e.dRgb[_]),e.fl),s=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(i,s)%Os+Os)%Os,o=.25*(Math.cos(a+2)+3.8),l=5e4/13*e.nc*e.ncb*ta(o*Math.sqrt(s**2+i**2),n[0]+n[1]+1.05*n[2]+.305),c=ve(l,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),u=e.nbb*(2*n[0]+n[1]+.05*n[2]),d=ve(u/e.aW,.5*e.c*e.z),f=100*ve(d,2),h=4/e.c*d*(e.aW+4)*e.flRoot,m=c*d,p=m*e.flRoot,y=Me(a*Zg),x=Jg(y),T=50*ve(e.c*c/(e.aW+4),1/2);return{J:f,C:m,h:y,s:T,Q:h,M:p,H:x}}var Xg=new b({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:B,fromBase(t){const e=xd(t,sl);return[e.J,e.M,e.h]},toBase(t){return di({J:t[0],M:t[1],h:t[2]},sl)}});const Qg=Y.D65,ew=216/24389,Cd=24389/27;function tw(t){return 116*(t>ew?Math.cbrt(t):(Cd*t+16)/116)-16}function fi(t){return t>8?Math.pow((t+16)/116,3):t/Cd}function rw(t,e){let[r,n,s]=t,i=[],a=0;if(s===0)return[0,0,0];let o=fi(s);s>0?a=.00379058511492914*s**2+.608983189401032*s+.9155088574762233:a=9514440756550361e-21*s**2+.08693057439788597*s-21.928975842194614;const l=2e-12,c=15;let u=0,d=1/0;for(;u<=c;){i=di({J:a,C:n,h:r},e);const f=Math.abs(i[1]-o);if(f<d){if(f<=l)return i;d=f}a=a-(i[1]-o)*a/(2*i[1]),u+=1}return di({J:a,C:n,h:r},e)}function nw(t,e){const r=tw(t[1]);if(r===0)return[0,0,0];const n=xd(t,ia);return[Me(n.h),n.C,r]}const ia=Ad(Qg,200/Math.PI*fi(50),fi(50)*100,"average",!1);var Sr=new b({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:B,fromBase(t){return nw(t)},toBase(t){return rw(t,ia)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const sw=Math.PI/180,il=[1,.007,.0228];function al(t){t[1]<0&&(t=Sr.fromBase(Sr.toBase(t)));const e=Math.log(Math.max(1+il[2]*t[1]*ia.flRoot,1))/il[2],r=t[0]*sw,n=e*Math.cos(r),s=e*Math.sin(r);return[t[2],n,s]}function iw(t,e){[t,e]=S([t,e]);let[r,n,s]=al(Sr.from(t)),[i,a,o]=al(Sr.from(e));return Math.sqrt((r-i)**2+(n-a)**2+(s-o)**2)}var Bt={deltaE76:Mg,deltaECMC:Ag,deltaE2000:yd,deltaEJz:Ig,deltaEITP:jg,deltaEOK:li,deltaEHCT:iw};function aw(t){const e=t?Math.floor(Math.log10(Math.abs(t))):0;return Math.max(parseFloat(`1e${e-2}`),1e-6)}const ol={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Ye(t,{method:e=ie.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:s=2,blackWhiteClamp:i={}}={}){if(t=S(t),Vr(arguments[1])?r=arguments[1]:r||(r=t.space),r=b.get(r),ut(t,r,{epsilon:0}))return t;let a;if(e==="css")a=ow(t,{space:r});else{if(e!=="clip"&&!ut(t,r)){Object.prototype.hasOwnProperty.call(ol,e)&&({method:e,jnd:s,deltaEMethod:n,blackWhiteClamp:i}=ol[e]);let o=yd;if(n!==""){for(let c in Bt)if("deltae"+n.toLowerCase()===c.toLowerCase()){o=Bt[c];break}}let l=Ye(D(t,r),{method:"clip",space:r});if(o(t,l)>s){if(Object.keys(i).length===3){let T=b.resolveCoord(i.channel),O=re(D(t,T.space),T.id);if(Ge(O)&&(O=0),O>=i.max)return D({space:"xyz-d65",coords:Y.D65},t.space);if(O<=i.min)return D({space:"xyz-d65",coords:[0,0,0]},t.space)}let c=b.resolveCoord(e),u=c.space,d=c.id,f=D(t,u);f.coords.forEach((T,O)=>{Ge(T)&&(f.coords[O]=0)});let m=(c.range||c.refRange)[0],p=aw(s),y=m,x=re(f,d);for(;x-y>p;){let T=qt(f);T=Ye(T,{space:r,method:"clip"}),o(f,T)-s<p?y=re(f,d):x=re(f,d),Le(f,d,(y+x)/2)}a=D(f,r)}else a=l}else a=D(t,r);if(e==="clip"||!ut(a,r,{epsilon:0})){let o=Object.values(r.coords).map(l=>l.range||[]);a.coords=a.coords.map((l,c)=>{let[u,d]=o[c];return u!==void 0&&(l=Math.max(u,l)),d!==void 0&&(l=Math.min(l,d)),l})}}return r!==t.space&&(a=D(a,t.space)),t.coords=a.coords,t}Ye.returns="color";const ll={WHITE:{space:Wt,coords:[1,0,0]},BLACK:{space:Wt,coords:[0,0,0]}};function ow(t,{space:e}={}){t=S(t),e||(e=t.space),e=b.get(e);const s=b.get("oklch");if(e.isUnbounded)return D(t,e);const i=D(t,s);let a=i.coords[0];if(a>=1){const m=D(ll.WHITE,e);return m.alpha=t.alpha,D(m,e)}if(a<=0){const m=D(ll.BLACK,e);return m.alpha=t.alpha,D(m,e)}if(ut(i,e,{epsilon:0}))return D(i,e);function o(m){const p=D(m,e),y=Object.values(e.coords);return p.coords=p.coords.map((x,T)=>{if("range"in y[T]){const[O,_]=y[T].range;return pd(O,x,_)}return x}),p}let l=0,c=i.coords[1],u=!0,d=qt(i),f=o(d),h=li(f,d);if(h<.02)return f;for(;c-l>1e-4;){const m=(l+c)/2;if(d.coords[1]=m,u&&ut(d,e,{epsilon:0}))l=m;else if(f=o(d),h=li(f,d),h<.02){if(.02-h<1e-4)break;u=!1,l=m}else c=m}return f}function D(t,e,{inGamut:r}={}){t=S(t),e=b.get(e);let n=e.from(t),s={space:e,coords:n,alpha:t.alpha};return r&&(s=Ye(s,r===!0?void 0:r)),s}D.returns="color";function mr(t,{precision:e=ie.precision,format:r="default",inGamut:n=!0,...s}={}){var l;let i;t=S(t);let a=r;r=t.space.getFormat(r)??t.space.getFormat("default")??b.DEFAULT_FORMAT;let o=t.coords.slice();if(n||(n=r.toGamut),n&&!ut(t)&&(o=Ye(qt(t),n===!0?void 0:n).coords),r.type==="custom")if(s.precision=e,r.serialize)i=r.serialize(o,t.alpha,s);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?o=r.serializeCoords(o,e):e!==null&&(o=o.map(h=>Cn(h,{precision:e})));let u=[...o];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||t.space.id;u.unshift(h)}let d=t.alpha;e!==null&&(d=Cn(d,{precision:e}));let f=t.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${d}`;i=`${c}(${u.join(r.commas?", ":" ")}${f})`}return i}const lw=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],cw=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var ts=new te({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:lw,fromXYZ_M:cw});const en=1.09929682680944,cl=.018053968510807;var Pd=new te({id:"rec2020",name:"REC.2020",base:ts,toBase(t){return t.map(function(e){return e<cl*4.5?e/4.5:Math.pow((e+en-1)/en,1/.45)})},fromBase(t){return t.map(function(e){return e>=cl?en*Math.pow(e,.45)-(en-1):4.5*e})}});const uw=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],dw=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Od=new te({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:uw,fromXYZ_M:dw});const fw=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],W=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ld=new te({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:fw,fromXYZ_M:W}),ul={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let dl=Array(3).fill("<percentage> | <number>[0, 255]"),fl=Array(3).fill("<number>[0, 255]");var Gt=new te({id:"srgb",name:"sRGB",base:Ld,fromBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n<=.04045?e/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:dl},rgb_number:{name:"rgb",commas:!0,coords:fl,noAlpha:!0},color:{},rgba:{coords:dl,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:fl},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,r=>{e.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:r=!0}={})=>{e<1&&t.push(e),t=t.map(i=>Math.round(i*255));let n=r&&t.every(i=>i%17===0);return"#"+t.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=ul.black,e.alpha=0):e.coords=ul[t],e.coords)return e}}}}),Nd=new te({id:"p3",cssId:"display-p3",name:"P3",base:Od,fromBase:Gt.fromBase,toBase:Gt.toBase});ie.display_space=Gt;let hw;if(typeof CSS<"u"&&CSS.supports)for(let t of[ne,Pd,Nd]){let e=t.getMinCoords(),n=mr({space:t,coords:e,alpha:1});if(CSS.supports("color",n)){ie.display_space=t;break}}function mw(t,{space:e=ie.display_space,...r}={}){let n=mr(t,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ie.display_space)n=new String(n),n.color=t;else{let s=t;if((t.coords.some(Ge)||Ge(t.alpha))&&!(hw??(hw=CSS.supports("color","hsl(none 50% 50%)")))&&(s=qt(t),s.coords=s.coords.map(j),s.alpha=j(s.alpha),n=mr(s,r),CSS.supports("color",n)))return n=new String(n),n.color=s,n;s=D(s,e),n=new String(mr(s,r)),n.color=s}return n}function pw(t,e){return t=S(t),e=S(e),t.space===e.space&&t.alpha===e.alpha&&t.coords.every((r,n)=>r===e.coords[n])}function Je(t){return re(t,[B,"y"])}function Id(t,e){Le(t,[B,"y"],e)}function gw(t){Object.defineProperty(t.prototype,"luminance",{get(){return Je(this)},set(e){Id(this,e)}})}var ww=Object.freeze({__proto__:null,getLuminance:Je,register:gw,setLuminance:Id});function yw(t,e){t=S(t),e=S(e);let r=Math.max(Je(t),0),n=Math.max(Je(e),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const bw=.56,vw=.57,$w=.62,Tw=.65,hl=.022,Ew=1.414,Sw=.1,Mw=5e-4,kw=1.14,ml=.027,Aw=1.14;function pl(t){return t>=hl?t:t+(hl-t)**Ew}function Mt(t){let e=t<0?-1:1,r=Math.abs(t);return e*Math.pow(r,2.4)}function xw(t,e){e=S(e),t=S(t);let r,n,s,i,a,o;e=D(e,"srgb"),[i,a,o]=e.coords;let l=Mt(i)*.2126729+Mt(a)*.7151522+Mt(o)*.072175;t=D(t,"srgb"),[i,a,o]=t.coords;let c=Mt(i)*.2126729+Mt(a)*.7151522+Mt(o)*.072175,u=pl(l),d=pl(c),f=d>u;return Math.abs(d-u)<Mw?n=0:f?(r=d**bw-u**vw,n=r*kw):(r=d**Tw-u**$w,n=r*Aw),Math.abs(n)<Sw?s=0:n>0?s=n-ml:s=n+ml,s*100}function Cw(t,e){t=S(t),e=S(e);let r=Math.max(Je(t),0),n=Math.max(Je(e),0);n>r&&([r,n]=[n,r]);let s=r+n;return s===0?0:(r-n)/s}const Pw=5e4;function Ow(t,e){t=S(t),e=S(e);let r=Math.max(Je(t),0),n=Math.max(Je(e),0);return n>r&&([r,n]=[n,r]),n===0?Pw:(r-n)/n}function Lw(t,e){t=S(t),e=S(e);let r=re(t,[ne,"l"]),n=re(e,[ne,"l"]);return Math.abs(r-n)}const Nw=216/24389,gl=24/116,tn=24389/27;let Ls=Y.D65;var hi=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ls,base:B,fromBase(t){let r=t.map((n,s)=>n/Ls[s]).map(n=>n>Nw?Math.cbrt(n):(tn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>gl?Math.pow(e[0],3):(116*e[0]-16)/tn,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/tn,e[2]>gl?Math.pow(e[2],3):(116*e[2]-16)/tn].map((n,s)=>n*Ls[s])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Ns=Math.pow(5,.5)*.5+.5;function Iw(t,e){t=S(t),e=S(e);let r=re(t,[hi,"l"]),n=re(e,[hi,"l"]),s=Math.abs(Math.pow(r,Ns)-Math.pow(n,Ns)),i=Math.pow(s,1/Ns)*Math.SQRT2-40;return i<7.5?0:i}var wn=Object.freeze({__proto__:null,contrastAPCA:xw,contrastDeltaPhi:Iw,contrastLstar:Lw,contrastMichelson:Cw,contrastWCAG21:yw,contrastWeber:Ow});function Rw(t,e,r={}){Vr(r)&&(r={algorithm:r});let{algorithm:n,...s}=r;if(!n){let i=Object.keys(wn).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}t=S(t),e=S(e);for(let i in wn)if("contrast"+n.toLowerCase()===i.toLowerCase())return wn[i](t,e,s);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function rs(t){let[e,r,n]=Hr(t,B),s=e+15*r+3*n;return[4*e/s,9*r/s]}function Rd(t){let[e,r,n]=Hr(t,B),s=e+r+n;return[e/s,r/s]}function _w(t){Object.defineProperty(t.prototype,"uv",{get(){return rs(this)}}),Object.defineProperty(t.prototype,"xy",{get(){return Rd(this)}})}var Dw=Object.freeze({__proto__:null,register:_w,uv:rs,xy:Rd});function or(t,e,r={}){Vr(r)&&(r={method:r});let{method:n=ie.deltaE,...s}=r;for(let i in Bt)if("deltae"+n.toLowerCase()===i.toLowerCase())return Bt[i](t,e,s);throw new TypeError(`Unknown deltaE method: ${n}`)}function Vw(t,e=.25){let n=[b.get("oklch","lch"),"l"];return Le(t,n,s=>s*(1+e))}function Hw(t,e=.25){let n=[b.get("oklch","lch"),"l"];return Le(t,n,s=>s*(1-e))}var Fw=Object.freeze({__proto__:null,darken:Hw,lighten:Vw});function _d(t,e,r=.5,n={}){return[t,e]=[S(t),S(e)],We(r)==="object"&&([r,n]=[.5,r]),Fr(t,e,n)(r)}function Dd(t,e,r={}){let n;aa(t)&&([n,r]=[t,e],[t,e]=n.rangeArgs.colors);let{maxDeltaE:s,deltaEMethod:i,steps:a=2,maxSteps:o=1e3,...l}=r;n||([t,e]=[S(t),S(e)],n=Fr(t,e,l));let c=or(t,e),u=s>0?Math.max(a,Math.ceil(c/s)+1):a,d=[];if(o!==void 0&&(u=Math.min(u,o)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,m)=>{let p=m*f;return{p,color:n(p)}})}if(s>0){let f=d.reduce((h,m,p)=>{if(p===0)return 0;let y=or(m.color,d[p-1].color,i);return Math.max(h,y)},0);for(;f>s;){f=0;for(let h=1;h<d.length&&d.length<o;h++){let m=d[h-1],p=d[h],y=(p.p+m.p)/2,x=n(y);f=Math.max(f,or(x,m.color),or(x,p.color)),d.splice(h,0,{p:y,color:n(y)}),h++}}}return d=d.map(f=>f.color),d}function Fr(t,e,r={}){if(aa(t)){let[l,c]=[t,e];return Fr(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:s,progression:i,premultiplied:a}=r;t=S(t),e=S(e),t=qt(t),e=qt(e);let o={colors:[t,e],options:r};if(n?n=b.get(n):n=b.registry[ie.interpolationSpace]||t.space,s=s?b.get(s):n,t=D(t,n),e=D(e,n),t=Ye(t),e=Ye(e),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[re(t,c),re(e,c)];isNaN(u)&&!isNaN(d)?u=d:isNaN(d)&&!isNaN(u)&&(d=u),[u,d]=bg(l,[u,d]),Le(t,c,u),Le(e,c,d)}return a&&(t.coords=t.coords.map(l=>l*t.alpha),e.coords=e.coords.map(l=>l*e.alpha)),Object.assign(l=>{l=i?i(l):l;let c=t.coords.map((f,h)=>{let m=e.coords[h];return Tr(f,m,l)}),u=Tr(t.alpha,e.alpha,l),d={space:n,coords:c,alpha:u};return a&&(d.coords=d.coords.map(f=>f/u)),s!==n&&(d=D(d,s)),d},{rangeArgs:o})}function aa(t){return We(t)==="function"&&!!t.rangeArgs}ie.interpolationSpace="lab";function Uw(t){t.defineFunction("mix",_d,{returns:"color"}),t.defineFunction("range",Fr,{returns:"function<color>"}),t.defineFunction("steps",Dd,{returns:"array<color>"})}var zw=Object.freeze({__proto__:null,isRange:aa,mix:_d,range:Fr,register:Uw,steps:Dd}),Vd=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Gt,fromBase:t=>{let e=Math.max(...t),r=Math.min(...t),[n,s,i]=t,[a,o,l]=[NaN,0,(r+e)/2],c=e-r;if(c!==0){switch(o=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case n:a=(s-i)/c+(s<i?6:0);break;case s:a=(i-n)/c+2;break;case i:a=(n-s)/c+4}a=a*60}return o<0&&(a+=180,o=Math.abs(o)),a>=360&&(a-=360),[a,o*100,l*100]},toBase:t=>{let[e,r,n]=t;e=e%360,e<0&&(e+=360),r/=100,n/=100;function s(i){let a=(i+e/30)%12,o=r*Math.min(n,1-n);return n-o*Math.max(-1,Math.min(a-3,9-a,1))}return[s(0),s(8),s(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Hd=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Vd,fromBase(t){let[e,r,n]=t;r/=100,n/=100;let s=n+r*Math.min(n,1-n);return[e,s===0?0:200*(1-n/s),100*s]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let s=n*(1-r/2);return[e,s===0||s===1?0:(n-s)/Math.min(s,1-s)*100,s*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),jw=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Hd,fromBase(t){let[e,r,n]=t;return[e,n*(100-r)/100,100-n]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let s=r+n;if(s>=1){let o=r/s;return[e,0,o*100]}let i=1-n,a=i===0?0:1-r/i;return[e,a*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Ww=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],qw=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Fd=new te({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Ww,fromXYZ_M:qw}),Bw=new te({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Fd,toBase:t=>t.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:t=>t.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e))});const Gw=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],Zw=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Ud=new te({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:na,toXYZ_M:Gw,fromXYZ_M:Zw});const Yw=1/512,Jw=16/512;var Kw=new te({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Ud,toBase(t){return t.map(e=>e<Jw?e/16:e**1.8)},fromBase(t){return t.map(e=>e>=Yw?e**(1/1.8):16*e)}}),Xw=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Wt,fromBase(t){let[e,r,n]=t,s;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Me(s)]},toBase(t){let[e,r,n]=t,s,i;return isNaN(n)?(s=0,i=0):(s=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[e,s,i]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let zd=Y.D65;const Qw=216/24389,wl=24389/27,[yl,bl]=rs({space:B,coords:zd});var jd=new b({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:zd,base:B,fromBase(t){let e=[j(t[0]),j(t[1]),j(t[2])],r=e[1],[n,s]=rs({space:B,coords:e});if(!Number.isFinite(n)||!Number.isFinite(s))return[0,0,0];let i=r<=Qw?wl*r:116*Math.cbrt(r)-16;return[i,13*i*(n-yl),13*i*(s-bl)]},toBase(t){let[e,r,n]=t;if(e===0||Ge(e))return[0,0,0];r=j(r),n=j(n);let s=r/(13*e)+yl,i=n/(13*e)+bl,a=e<=8?e/wl:Math.pow((e+16)/116,3);return[a*(9*s/(4*i)),a,a*((12-3*s-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),oa=new b({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:jd,fromBase(t){let[e,r,n]=t,s;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Me(s)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const e1=216/24389,t1=24389/27,vl=W[0][0],$l=W[0][1],Is=W[0][2],Tl=W[1][0],El=W[1][1],Rs=W[1][2],Sl=W[2][0],Ml=W[2][1],_s=W[2][2];function kt(t,e,r){const n=e/(Math.sin(r)-t*Math.cos(r));return n<0?1/0:n}function Ln(t){const e=Math.pow(t+16,3)/1560896,r=e>e1?e:t/t1,n=r*(284517*vl-94839*Is),s=r*(838422*Is+769860*$l+731718*vl),i=r*(632260*Is-126452*$l),a=r*(284517*Tl-94839*Rs),o=r*(838422*Rs+769860*El+731718*Tl),l=r*(632260*Rs-126452*El),c=r*(284517*Sl-94839*_s),u=r*(838422*_s+769860*Ml+731718*Sl),d=r*(632260*_s-126452*Ml);return{r0s:n/i,r0i:s*t/i,r1s:n/(i+126452),r1i:(s-769860)*t/(i+126452),g0s:a/l,g0i:o*t/l,g1s:a/(l+126452),g1i:(o-769860)*t/(l+126452),b0s:c/d,b0i:u*t/d,b1s:c/(d+126452),b1i:(u-769860)*t/(d+126452)}}function kl(t,e){const r=e/360*Math.PI*2,n=kt(t.r0s,t.r0i,r),s=kt(t.r1s,t.r1i,r),i=kt(t.g0s,t.g0i,r),a=kt(t.g1s,t.g1i,r),o=kt(t.b0s,t.b0i,r),l=kt(t.b1s,t.b1i,r);return Math.min(n,s,i,a,o,l)}var r1=new b({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:oa,gamutSpace:Gt,fromBase(t){let[e,r,n]=[j(t[0]),j(t[1]),j(t[2])],s;if(e>99.9999999)s=0,e=100;else if(e<1e-8)s=0,e=0;else{let i=Ln(e),a=kl(i,n);s=r/a*100}return[n,s,e]},toBase(t){let[e,r,n]=[j(t[0]),j(t[1]),j(t[2])],s;if(n>99.9999999)n=100,s=0;else if(n<1e-8)n=0,s=0;else{let i=Ln(n);s=kl(i,e)/100*r}return[n,s,e]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});W[0][0];W[0][1];W[0][2];W[1][0];W[1][1];W[1][2];W[2][0];W[2][1];W[2][2];function At(t,e){return Math.abs(e)/Math.sqrt(Math.pow(t,2)+1)}function Al(t){let e=At(t.r0s,t.r0i),r=At(t.r1s,t.r1i),n=At(t.g0s,t.g0i),s=At(t.g1s,t.g1i),i=At(t.b0s,t.b0i),a=At(t.b1s,t.b1i);return Math.min(e,r,n,s,i,a)}var n1=new b({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:oa,gamutSpace:"self",fromBase(t){let[e,r,n]=[j(t[0]),j(t[1]),j(t[2])],s;if(e>99.9999999)s=0,e=100;else if(e<1e-8)s=0,e=0;else{let i=Ln(e),a=Al(i);s=r/a*100}return[n,s,e]},toBase(t){let[e,r,n]=[j(t[0]),j(t[1]),j(t[2])],s;if(n>99.9999999)n=100,s=0;else if(n<1e-8)n=0,s=0;else{let i=Ln(n);s=Al(i)/100*r}return[n,s,e]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const xl=203,Cl=2610/2**14,s1=2**14/2610,i1=2523/2**5,Pl=2**5/2523,Ol=3424/2**12,Ll=2413/2**7,Nl=2392/2**7;var a1=new te({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:ts,toBase(t){return t.map(function(e){return(Math.max(e**Pl-Ol,0)/(Ll-Nl*e**Pl))**s1*1e4/xl})},fromBase(t){return t.map(function(e){let r=Math.max(e*xl/1e4,0),n=Ol+Ll*r**Cl,s=1+Nl*r**Cl;return(n/s)**i1})}});const Il=.17883277,Rl=.28466892,_l=.55991073,Ds=3.7743;var o1=new te({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:ts,toBase(t){return t.map(function(e){return e<=.5?e**2/3*Ds:(Math.exp((e-_l)/Il)+Rl)/12*Ds})},fromBase(t){return t.map(function(e){return e/=Ds,e<=1/12?Math.sqrt(3*e):Il*Math.log(12*e-Rl)+_l})}});const Wd={};Ze.add("chromatic-adaptation-start",t=>{t.options.method&&(t.M=qd(t.W1,t.W2,t.options.method))});Ze.add("chromatic-adaptation-end",t=>{t.M||(t.M=qd(t.W1,t.W2,t.options.method))});function ns({id:t,toCone_M:e,fromCone_M:r}){Wd[t]=arguments[0]}function qd(t,e,r="Bradford"){let n=Wd[r],[s,i,a]=V(n.toCone_M,t),[o,l,c]=V(n.toCone_M,e),u=[[o/s,0,0],[0,l/i,0],[0,0,c/a]],d=V(u,n.toCone_M);return V(n.fromCone_M,d)}ns({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});ns({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});ns({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});ns({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Y,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Y.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const l1=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],c1=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Bd=new te({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Y.ACES,toXYZ_M:l1,fromXYZ_M:c1});const rn=2**-16,Vs=-.35828683,nn=(Math.log2(65504)+9.72)/17.52;var u1=new te({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Vs,nn],name:"Red"},g:{range:[Vs,nn],name:"Green"},b:{range:[Vs,nn],name:"Blue"}},referred:"scene",base:Bd,toBase(t){const e=-.3013698630136986;return t.map(function(r){return r<=e?(2**(r*17.52-9.72)-rn)*2:r<nn?2**(r*17.52-9.72):65504})},fromBase(t){return t.map(function(e){return e<=0?(Math.log2(rn)+9.72)/17.52:e<rn?(Math.log2(rn+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),Dl=Object.freeze({__proto__:null,A98RGB:Bw,A98RGB_Linear:Fd,ACEScc:u1,ACEScg:Bd,CAM16_JMh:Xg,HCT:Sr,HPLuv:n1,HSL:Vd,HSLuv:r1,HSV:Hd,HWB:jw,ICTCP:ui,JzCzHz:ci,Jzazbz:vd,LCH:Er,LCHuv:oa,Lab:ne,Lab_D65:hi,Luv:jd,OKLCH:Xw,OKLab:Wt,P3:Nd,P3_Linear:Od,ProPhoto:Kw,ProPhoto_Linear:Ud,REC_2020:Pd,REC_2020_Linear:ts,REC_2100_HLG:o1,REC_2100_PQ:a1,XYZ_ABS_D65:sa,XYZ_D50:na,XYZ_D65:B,sRGB:Gt,sRGB_Linear:Ld});class I{constructor(...e){let r;e.length===1&&(r=S(e[0]));let n,s,i;r?(n=r.space||r.spaceId,s=r.coords,i=r.alpha):[n,s,i]=e,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=s?s.slice():[0,0,0],this.alpha=i>1||i===void 0?1:i<0?0:i;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:o=>this.set(a,o)})}get spaceId(){return this.space.id}clone(){return new I(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let r=mw(this,...e);return r.color=new I(r.color),r}static get(e,...r){return e instanceof I?e:new I(e,...r)}static defineFunction(e,r,n=r){let{instance:s=!0,returns:i}=n,a=function(...o){let l=r(...o);if(i==="color")l=I.get(l);else if(i==="function<color>"){let c=l;l=function(...u){let d=c(...u);return I.get(d)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>I.get(c)));return l};e in I||(I[e]=a),s&&(I.prototype[e]=function(...o){return a(this,...o)})}static defineFunctions(e){for(let r in e)I.defineFunction(r,e[r],e[r])}static extend(e){if(e.register)e.register(I);else for(let r in e)I.defineFunction(r,e[r])}}I.defineFunctions({get:re,getAll:Hr,set:Le,setAll:ra,to:D,equals:pw,inGamut:ut,toGamut:Ye,distance:bd,toString:mr});Object.assign(I,{util:hg,hooks:Ze,WHITES:Y,Space:b,spaces:b.registry,parse:wd,defaults:ie});for(let t of Object.keys(Dl))b.register(Dl[t]);for(let t in b.registry)mi(t,b.registry[t]);Ze.add("colorspace-init-end",t=>{var e;mi(t.id,t),(e=t.aliases)==null||e.forEach(r=>{mi(r,t)})});function mi(t,e){let r=t.replace(/-/g,"_");Object.defineProperty(I.prototype,r,{get(){let n=this.getAll(t);return typeof Proxy>"u"?n:new Proxy(n,{has:(s,i)=>{try{return b.resolveCoord([e,i]),!0}catch{}return Reflect.has(s,i)},get:(s,i,a)=>{if(i&&typeof i!="symbol"&&!(i in s)){let{index:o}=b.resolveCoord([e,i]);if(o>=0)return s[o]}return Reflect.get(s,i,a)},set:(s,i,a,o)=>{if(i&&typeof i!="symbol"&&!(i in s)||i>=0){let{index:l}=b.resolveCoord([e,i]);if(l>=0)return s[l]=a,this.setAll(t,s),!0}return Reflect.set(s,i,a,o)}})},set(n){this.setAll(t,n)},configurable:!0,enumerable:!0})}I.extend(Bt);I.extend({deltaE:or});Object.assign(I,{deltaEMethods:Bt});I.extend(Fw);I.extend({contrast:Rw});I.extend(Dw);I.extend(ww);I.extend(zw);I.extend(wn);function ae({name:t,svgTemplate:e}){return{name:t,svgTemplate:e}}const d1=ae({name:"Check24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),$e=bt({"vira-form-input-radius":"8px"}),ss=A`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Te=bt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),pt=bt({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":A`calc(${$e["vira-form-input-radius"].value} + 4px)`});function la({selector:t,elementBorderSize:e,outlineGap:r=2,outlineWidth:n=2}){const s=ee(ug(n+r+e));return A`
        ${ee(t)}::after {
            content: '';
            top: calc(${s} * -1);
            left: calc(${s} * -1);
            position: absolute;
            width: calc(100% + calc(${s} * 2));
            height: calc(100% + calc(${s} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${pt["vira-focus-outline-color"].value};
            border-radius: ${pt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const ze=bt({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":pt["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),Nn=A`
    padding: 0;
    margin: 0;
`,xe=A`
    ${Nn};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Vl=A`#e2e2e2`,Gd={menuShadow:A`
        filter: drop-shadow(0px 5px 5px ${Vl});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:A`
        filter: drop-shadow(0px -5px 5px ${Vl});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},Mr=A`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,C=Ne()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>A`
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
    `,renderCallback({inputs:t}){return t.icon?t.icon.svgTemplate:""}}),Hs=Ne()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:t})=>t.selected},styles:({hostClasses:t})=>A`
        :host {
            display: flex;
            ${Mr};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${t["vira-dropdown-item-selected"].selector} ${C} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${C} {
            transition: opacity
                ${Te["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${$e["vira-form-input-radius"].value}
                ${$e["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${$e["vira-form-input-radius"].value}
                ${$e["vira-form-input-radius"].value} 0 0;
        }
    `,renderCallback({inputs:t}){return w`
            <div class="option">
                <${C.assign({icon:d1})}></${C}>
                <slot>${t.label}</slot>
            </div>
        `}}),f1=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Zd(t,e){return t?f1.some(r=>{try{return r(t,e)}catch{return!1}}):!1}var Hl;(function(t){t.Upper="upper",t.Lower="lower"})(Hl||(Hl={}));function Fl(t){const e=Number(t);if(isNaN(e))throw new Error(`Cannot convert given input to a number: ${t}`);return e}function Fs({max:t,min:e,value:r}){return r>t?e:r<e?t:r}var Ul;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ul||(Ul={}));function h1(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function Yd(t,e){try{return m1(t,e),!0}catch{return!1}}function m1(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function p1(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}p1();function g1(t,e){return[t,e].filter(r=>r!==void 0).join(",")||""}function w1(t){const e=t.split(",");return Yd(e,2)?{type:"2d",xCord:Fl(e[0]),yCord:Fl(e[1])}:{type:"1d"}}function y1(t,e){Object.entries(e).forEach(([r,n])=>{M(n,"boolean")&&n?t.setAttribute(r,""):M(n,"boolean")&&!n||n==null?t.removeAttribute(r):t.setAttribute(r,String(n))})}const b1=Qt(class extends yt{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastKey",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Qn(t,"modifyElement")}render(t,e){return t!==this.lastKey&&(e(this.element),this.lastKey=t),fe}}),Dt={name:"data-nav",selector(t){return t===""?`[${Dt.name}]`:`[${Dt.name}*="${String(t).replace(/"/g,"'")}"]`},css(t){return A`
            ${ee(Dt.selector(t))}
        `}},Pt="nav-activated",pi={selector:{click(t){return`${t}.${Pt}`},selected(t){return`${t}:focus`}},css:{click(t){return A`
                ${ee(pi.selector.click(t))}
            `},selected(t){return A`
                ${ee(pi.selector.selected(t))}
            `}}},v1={activateKeys:["Space","Return","Enter"]};function $1(){Jd=h1(v1)}let Jd;$1();function zl(t){return Jd.activateKeys.some(e=>{const r=e.toLowerCase();return r===t.key.toLowerCase()||r===t.code.toLowerCase()})}function T1(t,e){const r=g1(t,e);return b1(`${t}-${e}`,n=>{const s=n.hasAttribute("tabindex")?{}:{tabindex:0},i={[Dt.name]:r,...s};Mi(n,HTMLElement),y1(n,i),n.style.getPropertyValue("cursor")||n.style.setProperty("cursor","pointer"),n.addEventListener("mousemove",a=>{a.target===n&&n.focus()},!0),n.addEventListener("mouseleave",a=>{a.target===n&&n.blur()},!0),n.addEventListener("mousedown",a=>{a.target===n&&n.classList.add(Pt)},!0),n.addEventListener("mouseup",a=>{a.target===n&&n.classList.remove(Pt)},!0),n.addEventListener("blur",()=>{n.classList.remove(Pt)},!0),n.addEventListener("keydown",a=>{a.target===n&&zl(a)&&n.classList.add(Pt)},!0),n.addEventListener("keyup",a=>{a.target===n&&zl(a)&&n.classList.remove(Pt)},!0)})}function E1(t,e){return Kd([],t,e)}function Kd(t,e,r){return!e||e.type==="child"?!1:e.type==="1d"?jl(e.children,e,0,t,r):e.children.some((n,s)=>jl(n,e,s,t,r))}function jl(t,e,r,n,s){return t.some((i,a)=>{const o=Zd(e,"isRoot")?n:n.concat(e);return s(o,i,{x:a,y:r})?!0:Kd(o,i,s)})}function is(t){if(!t)return;let e,r,n;E1(t,(i,a,o)=>a.element.matches(":focus")?(e=i,r=a,n=o,!0):!1);const s=e?(e==null?void 0:e.slice(-1)[0])||t:void 0;if(!(!r||!s||!n))return{node:r,parent:s,coords:n}}function In(t){t.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),t.focus()}function S1(t){var n;if(!t)return{success:!1,reason:"no nav tree"};const e=is(t);if(!e)return{success:!1,reason:"no focused node to enter into"};if(e.node.type==="child"||!e.node.children.length)return{success:!1,reason:"no children to enter into"};const r=e.node.type==="1d"?e.node.children[0]:(n=e.node.children[0])==null?void 0:n[0];return r?(In(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}):{success:!1,reason:"failed to find first child to enter into"}}function M1(t){if(!t)return{success:!1,reason:"no nav tree"};const e=is(t);if(!e)return{success:!1,reason:"no focused node to exit out of"};if(Zd(e.parent,"isRoot"))return{success:!1,reason:"at top level nav already, nothing to exit to"};const r=e.parent;return In(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}}function k1(t){var r;return[...t.children,...((r=t.shadowRoot)==null?void 0:r.children)??[]]}function A1(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Us(t){return A1(t).map(e=>[e,t[e]])}var Wl;(function(t){t.Upper="upper",t.Lower="lower"})(Wl||(Wl={}));var ql;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ql||(ql={}));function x1(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}x1();const Xd={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},C1=Object.keys(Xd),Qd={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},P1=Object.keys(Qd),ef={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},O1=Object.keys(ef),L1=[Us(Xd).map(([t,e])=>[e,t]),Us(Qd).map(([t,e])=>[e,t]),Us(ef).map(([t,e])=>[e,t])].flat();new Map(L1);Array.from(new Set([...C1,...O1,...P1].sort()));function tf(t){const e=[];return k1(t).forEach(r=>{if(!(r instanceof HTMLElement))return;const n=tf(r),s=r.hasAttribute(Dt.name)?w1(r.getAttribute(Dt.name)||""):void 0;if(!s){e.push(...n);return}e.push({children:n,element:r,navValue:s})}),e}function N1(t){const e=tf(t);return rf(e)}function rf(t){if(!Yd(t,1))return;const e=t[0].navValue.type,r={type:e,children:[],isRoot:!0};return t.forEach(n=>{const s=n.children.length?rf(n.children):void 0,i=s?{element:n.element,children:s.children,type:s.type}:{element:n.element,type:"child"};if(n.navValue.type==="2d"&&r.type==="2d"){r.children[n.navValue.xCord]||(r.children[n.navValue.xCord]=[]);const a=r.children[n.navValue.xCord];if(a[n.navValue.yCord])throw new Error(`Parent already has child at ${n.navValue.xCord},${n.navValue.yCord}`);a[n.navValue.yCord]=i}else if(n.navValue.type==="1d"&&r.type==="1d")r.children.push(i);else if(e!==n.navValue.type){const a=new Error("child nav does not match parent nav type");throw console.error(a,n),a}}),r}function Bl(t,e){return t>e}function Gl(t,e){return t<e}var ce;(function(t){t.Up="up",t.Down="down",t.Left="left",t.Right="right"})(ce||(ce={}));function I1(t,e,r){var o;if(!t)return{success:!1,reason:"no nav tree"};const n=is(t);if(!n){const l=t.type==="1d"?t.children[0]:(o=t.children[0])==null?void 0:o[0];return l?(In(l.element),{success:!0,wrapped:!1,defaulted:!0,newElement:l.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:s,requiresWrapping:i}=R1(n.parent,e,n),a=r?!0:!i;return(s==null?void 0:s.element)===n.node.element?{success:!1,reason:"no other nodes to navigate to"}:s&&a?(In(s.element),{success:!0,defaulted:!1,newElement:s.element,wrapped:i}):s?a?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"not allowed to wrap"}:{success:!1,reason:"failed to find node to focus"}}function R1(t,e,r){var s,i;if(e===ce.Down||e===ce.Up){const a=e===ce.Down?Gl:Bl,o=e===ce.Down?1:-1,l=t.type==="1d"?0:Fs({value:r.coords.y+o,min:0,max:t.children.length-1}),c=t.type==="2d"?t.children[l]:void 0,u={x:t.type==="1d"?Fs({value:r.coords.x+o,min:0,max:t.children.length-1}):c&&r.coords.x>=c.length?c.length-1:r.coords.x,y:l},d=t.type==="1d"?t.children[u.x]:(s=t.children[u.y])==null?void 0:s[u.x],f=t.type==="1d"?a(u.x,r.coords.x):a(u.y,r.coords.y);return{nextNode:d,requiresWrapping:f}}else{const a=e===ce.Right?Gl:Bl,o=e===ce.Right?1:-1,l=t.type==="1d"?t.children:t.children[r.coords.y];Ff(l,`No current row found at y index: '${r.coords.y}'`);const c={x:Fs({value:r.coords.x+o,min:0,max:l.length-1}),y:r.coords.y},u=a(c.x,r.coords.x);return{nextNode:t.type==="1d"?t.children[c.x]:(i=t.children[c.y])==null?void 0:i[c.x],requiresWrapping:u}}}class nf{constructor(e){Object.defineProperty(this,"rootElement",{enumerable:!0,configurable:!0,writable:!0,value:e})}getCurrentlyFocused(){return is(this.buildNavTree())}buildNavTree(){return N1(this.rootElement)}navigate({direction:e,allowWrapping:r}){return I1(this.buildNavTree(),e,r)}enterInto(){return S1(this.buildNavTree())}exitOutOf(){return M1(this.buildNavTree())}navigatePibling(e){const r=this.exitOutOf();if(!r.success)return r;const n=this.navigate(e);if(!n.success)return n;const s=this.enterInto();return s.success?s:n}}const _1={option:"dropdown-option"},sn=Ne()({tagName:"vira-dropdown-options",events:{selectionChange:Ee()},styles:A`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${$e["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${ze["vira-form-background-color"].value};
            border: 1px solid ${ze["vira-form-border-color"].value};
            color: ${ze["vira-form-foreground-color"].value};
            ${Gd.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${pi.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${ze["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${Hs} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${ss};
            pointer-events: auto;
        }
    `,renderCallback({inputs:t,dispatch:e,events:r}){const n=t.options.map(s=>{const i=s.template||w`
                    <${Hs.assign({label:s.label,selected:t.selectedOptions.includes(s)})}></${Hs}>
                `;return w`
                <div
                    class="dropdown-item ${qe({disabled:!!s.disabled})}"
                    ${ar(_1.option)}
                    title=${Ji(s.hoverText||void 0)}
                    role="option"
                    ${s.disabled?N:T1()}
                    ${F("mousedown",a=>{a.stopPropagation()})}
                    ${F("mouseup",a=>{a.stopPropagation(),s.disabled||e(new r.selectionChange(s))})}
                >
                    ${i}
                </div>
            `});return w`
            <slot>${n}</slot>
        `}}),D1=ae({name:"ChevronUp24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${v["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),sf=ae({name:"CloseX24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ae({name:"Element16Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ae({name:"Element24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const V1=ae({name:"EyeClosed24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${v["vira-icon-fill-color"].value}
            stroke=${v["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),H1=ae({name:"EyeOpen24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${v["vira-icon-fill-color"].value}
            stroke=${v["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),F1=ae({name:"Loader24Icon",svgTemplate:w`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),U1=A`
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
`,Rn=ae({name:"LoaderAnimated24Icon",svgTemplate:w`
        <style>
            ${U1}
        </style>
        ${F1.svgTemplate}
    `});ae({name:"Options24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${v["vira-icon-stroke-color"].value}"
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const _n=ae({name:"StatusFailure24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Zl=ae({name:"StatusInProgress24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),af=ae({name:"StatusSuccess24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var Yl;(function(t){t.Upper="upper",t.Lower="lower"})(Yl||(Yl={}));var Jl;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Jl||(Jl={}));function z1(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}z1();function Dn(t){if(t instanceof ShadowRoot)return Dn(t.host);const e=t.parentNode;if(e)return e instanceof Element?e:Dn(e)}function of(t,e){if(e(t))return t;const r=Dn(t);if(r)return of(r,e)}function j1(t){const e=Dn(t);return e&&of(e,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function W1(t,e,r={}){const n=r.useOriginalTarget?t.target:t.currentTarget;if(!(n instanceof e)){const s=e.name,i=n==null?void 0:n.constructor.name,a=r.useOriginalTarget?`Current target from event '${t.type}' was not of type '${s}'. Got '${i}'.`:`Target from event '${t.type}' was not of type '${s}'. Got '${i}'.`;throw new Error(a)}return n}class q1 extends Vu{constructor(){super({defaultValue:document.hidden,equalityCheck:It}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const e=r=>this.updateVisibility(r);globalThis.onpageshow=e,globalThis.onpagehide=e,globalThis.onfocus=e,globalThis.onblur=e}updateVisibility(e){const r=G1.includes(e.type),n=B1.includes(e.type),s=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(s)}}const B1=["blur","focusout","pagehide"],G1=["focus","focusin","pageshow"],Z1=new q1;function Y1(t,e){return Z1.listen(t,e)}const Kl={top:0,left:0,right:0,bottom:0};class lf extends Ai("hide-pop-up"){}class cf extends he()("nav-select"){}class J1{constructor(e){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new kc}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:{minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0}}),Object.defineProperty(this,"cleanupCallbacks",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"lastRootElement",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.options={...this.options,...e}}attachGlobalListeners(e){const r=new nf(e);this.cleanupCallbacks=[Y1(!1,n=>{n||this.removePopUp()}),Sa("mousedown",n=>{this.lastRootElement&&n.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Sa("keydown",n=>{const s=n.code;if(s==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(s==="ArrowDown")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:ce.Down,allowWrapping:!1});else if(s==="ArrowUp")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:ce.Up,allowWrapping:!1});else if(s==="ArrowLeft")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:ce.Left,allowWrapping:!1});else if(s==="ArrowRight")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:ce.Right,allowWrapping:!1});else if(s==="Enter"||s==="Return"){const i=r.getCurrentlyFocused();i&&(r.enterInto(),this.listenTarget.dispatch(new cf({detail:i.coords})),n.stopImmediatePropagation(),n.preventDefault())}}})]}listen(e,r,n){return this.listenTarget.listen(e,r,n)}removePopUp(){this.cleanupCallbacks.forEach(e=>e()),this.listenTarget.dispatch(new lf)}showPopUp(e,r){this.lastRootElement=e;const n={...this.options,...r},s=j1(e);Mi(s,HTMLElement);const i=e.getBoundingClientRect(),a=s.getBoundingClientRect(),o=s.offsetWidth-s.clientWidth,l=s.offsetHeight-s.clientHeight,c=s===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:a.top,left:a.left,right:a.right-o,bottom:a.bottom-l},u=Ho(Kl,h=>i[h]),d=Ho(Kl,h=>{const m=c[h],p=u[h];return Math.abs(m-p)}),f=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace;return this.attachGlobalListeners(e),{popDown:!f,positions:{container:c,root:u,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function K1({selected:t,options:e,isMultiSelect:r}){if(t.length&&e.length){const n=e.filter(s=>t.includes(s.id));return n.length>1&&!r?(console.error(`${Q1.tagName} has multiple selections but \`isMultiSelect\` is not \`true\`. Truncating to the first selection.`),n.slice(0,1)):n}else return[]}function X1(t){const e=new Set,r=[];if(t.forEach(n=>{e.has(n.id)?r.push(n.id):e.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${og(r)}`)}function Xl(t,e,r){return r?e.includes(t)?e.filter(n=>n!==t):[...e,t]:[t]}function Ql({open:t,emitEvent:e},{updateState:r,popUpManager:n,dispatch:s,host:i}){t?r({showPopUpResult:n.showPopUp(i)}):n.removePopUp(),e&&s(t)}const an={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},Q1=Ne()({tagName:"vira-dropdown",hostClasses:{"vira-dropdown-disabled":({inputs:t})=>!!t.isDisabled},styles:({hostClasses:t})=>A`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${pt["vira-focus-outline-color"].name}: ${ze["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${xe};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${$e["vira-form-input-radius"].value};
            transition: border-radius
                ${Te["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${la({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(0);
            transition: ${Te["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(180deg);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${ze["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${Mr};
            border-radius: inherit;
            background-color: ${ze["vira-form-background-color"].value};
            color: ${ze["vira-form-foreground-color"].value};
        }

        .open-upwards ${sn} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${Gd.menuShadowReversed}
        }

        ${t["vira-dropdown-disabled"].selector} {
            ${ss}
            pointer-events: auto;
        }

        ${t["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:Ee(),openChange:Ee()},stateInitStatic:{showPopUpResult:void 0,popUpManager:Qp(()=>new J1),navController:void 0},cleanupCallback({state:t,updateState:e}){e({showPopUpResult:void 0}),t.popUpManager.destroy()},initCallback({state:t,updateState:e,host:r,inputs:n,dispatch:s,events:i}){t.popUpManager.listen(lf,()=>{if(e({showPopUpResult:void 0}),!n.isDisabled){const a=r.shadowRoot.querySelector(".dropdown-wrapper");Mi(a,HTMLButtonElement,"failed to find dropdown wrapper child"),a.focus()}}),t.popUpManager.listen(cf,a=>{const o=a.detail.x,l=n.options[o];if(!l)throw new Error(`Found no dropdown option at index '${o}'`);n.isMultiSelect||Ql({emitEvent:!0,open:!1},{dispatch:c=>{s(new i.openChange(c))},host:r,popUpManager:t.popUpManager,updateState:e}),s(new i.selectedChange(Xl(l.id,n.selected,!!n.isMultiSelect)))}),e({navController:new nf(r)})},renderCallback({dispatch:t,events:e,state:r,inputs:n,updateState:s,host:i}){var m;X1(n.options);function a(p){Ql(p,{dispatch:y=>{t(new e.openChange(y))},host:i,popUpManager:r.popUpManager,updateState:s})}n.isDisabled?a({open:!1,emitEvent:!1}):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1}):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0}));const o=K1(n),l=n.icon?w`
                  <${C.assign({icon:n.icon})}
                      ${ar(an.icon)}
                  ></${C}>
              `:"",c=r.showPopUpResult?r.showPopUpResult.popDown?A`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                  `:A`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                  `:void 0;function u(){a({emitEvent:!0,open:!r.showPopUpResult})}const d=!o.length,f=n.selectionPrefix&&!d?w`
                      <span class="selected-label-prefix" ${ar(an.prefix)}>
                          ${n.selectionPrefix}
                      </span>
                  `:"",h=d?n.placeholder||"":o.map(p=>p.label).join(", ");return w`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${qe({open:!!r.showPopUpResult,"open-upwards":!((m=r.showPopUpResult)!=null&&m.popDown)})}"
                ${ar(an.trigger)}
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${F("keydown",p=>{!r.showPopUpResult&&p.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0})})}
                ${F("click",p=>{p.detail===0&&u()})}
                ${F("mousedown",p=>{p.button===0&&u()})}
            >
                <div class="dropdown-trigger">
                    ${l}
                    <span
                        class="selection-display ${qe({"using-placeholder":d})}"
                        title=${Ji(d?h:void 0)}
                    >
                        ${f} ${h}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${C.assign({icon:D1})}
                            class="trigger-icon"
                        ></${C}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${c}>
                    ${Ue(!!r.showPopUpResult,w`
                            <${sn.assign({options:n.options,selectedOptions:o})}
                                ${F(sn.events.selectionChange,p=>{n.isMultiSelect||a({emitEvent:!0,open:!1}),t(new e.selectedChange(Xl(p.detail.id,n.selected,!!n.isMultiSelect)))})}
                                ${ar(an.options)}
                            ></${sn}>
                        `)}
                </div>
            </button>
        `}});var kr;(function(t){t.Default="vira-button-default",t.Outline="vira-button-outline"})(kr||(kr={}));const Lt=Ne()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:t})=>t.buttonStyle===kr.Outline,"vira-button-disabled":({inputs:t})=>!!t.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:t,cssVars:e})=>A`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Mr};
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-color"].value};
            ${e["vira-button-internal-foreground-color"].name}: ${e["vira-button-secondary-color"].value};
            ${pt["vira-focus-outline-color"].name}: ${e["vira-button-primary-hover-color"].value}
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
            ${ss};
        }

        ${t["vira-button-outline-style"].selector} button {
            color: ${e["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${xe};
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
            border-radius: ${$e["vira-form-input-radius"].value};
            background-color: ${e["vira-button-internal-background-color"].value};
            color: ${e["vira-button-internal-foreground-color"].value};
            padding: ${e["vira-button-padding"].value};
            transition:
                color ${Te["vira-interaction-animation-duration"].value},
                background-color
                    ${Te["vira-interaction-animation-duration"].value},
                border-color ${Te["vira-interaction-animation-duration"].value};
        }

        ${la({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${C} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?w`
                  <${C.assign({icon:t.icon})}></${C}>
              `:"",r=t.text?w`
                  <span class="text-template">${t.text}</span>
              `:"";return w`
            <button ?disabled=${t.disabled}>${e} ${r}</button>
        `}});Ne()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:t})=>t.expanded},slotNames:["header"],styles:({hostClasses:t})=>A`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${xe};
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
    `,events:{expandChange:Ee()},stateInitStatic:{contentHeight:0},renderCallback({state:t,slotNames:e,updateState:r,dispatch:n,events:s,inputs:i}){const a=i.expanded?A`
                  height: ${t.contentHeight}px;
              `:A`
                  height: 0;
              `;return w`
            <button
                class="header-wrapper"
                ${F("click",()=>{n(new s.expandChange(!i.expanded))})}
            >
                <slot name=${e.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${od(({contentRect:o})=>{r({contentHeight:o.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});var Vn;(function(t){t.Loading="loading",t.Error="error"})(Vn||(Vn={}));const on=Ne()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:t})=>t.dominantDimension==="height"},events:{imageLoad:Ee(),imageError:Ee()},styles:({hostClasses:t})=>A`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:t,state:e,updateState:r,dispatch:n,events:s}){const i=t.imageUrl,a=e.erroredUrls[i]?w`
                  <slot class="status-wrapper" name=${Vn.Error}>
                      <${C.assign({icon:_n})} class="error"></${C}>
                  </slot>
              `:e.loadedUrls[i]?void 0:w`
                    <slot class="status-wrapper" name=${Vn.Loading}>
                        <${C.assign({icon:Rn})}></${C}>
                    </slot>
                `;return w`
            ${Ue(!!a,a)}
            <img
                class=${qe({hidden:!!a})}
                ${F("load",async()=>{t._debugLoadDelay&&await Fo(t._debugLoadDelay.milliseconds),r({loadedUrls:{...e.loadedUrls,[i]:!0}}),n(new s.imageLoad)})}
                ${F("error",async o=>{t._debugLoadDelay&&await Fo(t._debugLoadDelay.milliseconds),r({erroredUrls:{...e.erroredUrls,[i]:!0}}),n(new s.imageError(o.error))})}
                src=${i}
            />
        `}});function gi({input:t,matcher:e}){return!t||!e?!0:t.length>1?!!t.split("").every(r=>gi({input:r,matcher:e})):e instanceof RegExp?!!t.match(e):e.includes(t)}function uf({value:t,allowed:e,blocked:r}){const n=e?gi({input:t,matcher:e}):!0,s=r?gi({input:t,matcher:r}):!1;return n&&!s}function df(t){if(!t.value)return{filtered:t.value,blocked:""};const{filtered:e,blocked:r}=t.value.split("").reduce((n,s)=>(uf({...t,value:s})?n.filtered.push(s):n.blocked.push(s),n),{filtered:[],blocked:[]});return{filtered:e.join(""),blocked:r.join("")}}function ey({inputs:t,filteredValue:e,event:r,inputBlockedCallback:n,newValueCallback:s}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=W1(r,HTMLInputElement),a=r.data,o=e;let l=i.value??"";if(a)if(a.length===1)uf({value:a,allowed:t.allowedInputs,blocked:t.blockedInputs})||(l=o,n(a));else{const{filtered:c,blocked:u}=df({value:a,allowed:t.allowedInputs,blocked:t.blockedInputs});l=c,n(u)}i.value!==l&&(i.value=l),o!==l&&s(l)}var dt;(function(t){t.Default="text",t.Password="password",t.Email="email"})(dt||(dt={}));const xt=Ne()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:t})=>!!t.disabled,"vira-input-fit-text":({inputs:t})=>!!t.fitText,"vira-input-clear-button-shown":({inputs:t})=>!!t.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":pt["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Ee(),inputBlocked:Ee()},styles:({hostClasses:t,cssVars:e})=>A`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${pt["vira-focus-outline-color"].name}: ${e["vira-input-focus-border-color"].value};
                color: ${e["vira-input-text-color"].value};
            }

            ${t["vira-input-disabled"].selector} {
                ${ss};
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
                ${xe};
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
                ${Mr};
                vertical-align: middle;
                max-height: 100%;
            }

            ${t["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${xe};
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
                border-radius: ${$e["vira-form-input-radius"].value};
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
                ${xe};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${e["vira-input-padding-horizontal"].value};
                border-radius: ${$e["vira-form-input-radius"].value};
                background-color: ${e["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${la({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${e["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${xe};
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
                ${Mr};
            }

            button {
                ${xe};
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
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},renderCallback:({inputs:t,dispatch:e,state:r,updateState:n,events:s})=>{const{filtered:i}=df({value:t.value??"",allowed:t.allowedInputs,blocked:t.blockedInputs}),a=t.icon?w`
                  <${C.assign({icon:t.icon})} class="left-side-icon"></${C}>
              `:"",o=t.fitText?A`
                  width: ${r.forcedInputWidth}px;
              `:"";return w`
            <label>
                ${a}
                ${Ue(!!t.fitText,w`
                        <span
                            class="size-span"
                            ${od(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${i||t.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${ty(t.type,r.showPassword)}
                    style=${o}
                    autocomplete=${t.disableBrowserHelps?"off":""}
                    autocorrect=${t.disableBrowserHelps?"off":""}
                    autocapitalize=${t.disableBrowserHelps?"off":""}
                    spellcheck=${t.disableBrowserHelps?"false":""}
                    ?disabled=${t.disabled}
                    .value=${i}
                    ${F("input",l=>{ey({inputs:t,filteredValue:i,event:l,inputBlockedCallback(c){e(new s.inputBlocked(c))},newValueCallback(c){e(new s.valueChange(c))}})})}
                    placeholder=${t.placeholder}
                />
                ${Ue(!!(t.showClearButton&&t.value),w`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${F("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),e(new s.valueChange(""))})}
                        >
                            <${C.assign({icon:sf})}></${C}>
                        </button>
                    `)}
                ${Ue(t.type===dt.Password,w`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${F("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${C.assign({icon:r.showPassword?H1:V1})}></${C}>
                        </button>
                    `)}
                ${Ue(!!t.suffix,w`
                        <div class="suffix">${t.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function ty(t,e){return t===dt.Password&&e?dt.Default:t||dt.Default}Ne()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:t})=>A`
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
    `,renderCallback({inputs:t}){var r,n;function e(s){t.route&&t.route.router.setRouteOnDirectNavigation(t.route.route,s)&&t.route.scrollToTop&&window.scrollTo(0,0)}if((r=t.link)!=null&&r.newTab)return w`
                <a href=${t.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=t.link?t.link.url:(n=t.route)==null?void 0:n.router.createRouteUrl(t.route.route);return w`
                <a href=${s} rel="noopener noreferrer" ${F("click",e)}>
                    <slot></slot>
                </a>
            `}}});var vt=(t=>(t.Github="github",t))(vt||{});const ry=J({authTokenName:"",authTokenSecret:""},!0),ff=J(yr({keys:Mn(vt),values:[ry],required:!1}),!0);class wi extends Error{constructor(r,n,s){super(`${r} at index '${s}' in service '${n}'`);zr(this,"name","AuthTokenValidationError");this.serviceName=n,this.authTokenIndex=s}}function ny(t){qi(t,ff),$i(t).forEach(e=>{const r=t[e];r==null||r.forEach((n,s)=>{if(n.authTokenName){if(!n.authTokenSecret)throw new wi("Empty auth token secret",e,s)}else throw new wi("Empty auth token name",e,s)})})}const ln=typeof{}>"u"?void 0:{},sy="6rbd4mt4p4ve83gfijfcpxaoehmrux53",ec={devAuthTokens:Ru(ln==null?void 0:ln.authTokens,ff)?ln.authTokens:{},encryptionKey:sy};class ca extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class tc extends ca{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"GlobalUrlEventsConsolidationError"})}}class iy extends ca{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}function ay(t,e,r){if(e in t)return t[e];{const n=r();return Si(n)?new Promise(async(s,i)=>{try{const a=await n;t[e]=a,s(a)}catch(a){i(a)}}):(t[e]=n,n)}}const oy=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ly(t,e){return t?oy.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function yi(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function cy(t,e,r){return t.reduce((n,s,i,a)=>{const o=e(s,i,a);return r(o,s,i,a)&&n.push(o),n},[])}function uy(t){return!!t}var rc;(function(t){t.Upper="upper",t.Lower="lower"})(rc||(rc={}));function dy(t,e){return t.split(e)}var nc;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(nc||(nc={}));function fy(t,e){return yi(t).filter(n=>{const s=t[n];return e(n,s,t)}).reduce((n,s)=>(n[s]=t[s],n),{})}function bi(t,e){let r=!1;const n=yi(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(yi(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function hy(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function my(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}my();function Pe({value:t,prefix:e}){return String(t).startsWith(e)?String(t):`${e}${String(t)}`}function ua({value:t,prefix:e}){return t.startsWith(e)?t.substring(e.length):t}const zs="://";function hf(...t){const e=t.join("/"),[r,n=""]=e.includes(zs)?e.split(zs):["",e];let s=!1;const i=n.replace(/\/{2,}/g,"/").split("/").reduce((a,o,l,c)=>{if(s)return a;const u=c[l+1];let d=o;const f=u==null?void 0:u.startsWith("?"),h=!o.includes("?")&&f,m=u==="?";if(f||h){s=!0;let p=!1;const y=c.slice(l+2).reduce((x,T)=>(T.includes("#")&&(p=!0),p?x.concat(T):[x,T].join("&")),"");d=[o,u,m?ua({value:y,prefix:"&"}):y].join("")}return a.concat(d)},[]);return[r,r?zs:"",i.join("/")].join("")}var Ar;(function(t){t.Encode="encode",t.Decode="decode",t.None="none"})(Ar||(Ar={}));var xr;(function(t){t.Clear="clear",t.Replace="replace",t.Append="append"})(xr||(xr={}));function cn(t,e){return t.map(r=>{if(r!=null)return Vt(String(r),e)}).filter(r=>r!=null)}function Vt(t,e){return(e==null?void 0:e.encoding)===Ar.Decode?decodeURIComponent(t):(e==null?void 0:e.encoding)===Ar.Encode?encodeURIComponent(t):t}const py=J(yr({keys:"",values:[""],required:!0}));function gy(t,e,r){const n=(r==null?void 0:r.searchParamStrategy)===xr.Clear?{}:bi(t,(a,o)=>M(o,"string")?[o]:o),s=bi(e,(a,o)=>{if((r==null?void 0:r.searchParamStrategy)===xr.Append){const l=n[a],c=M(l,"array")?l:[l];if(o){const u=M(o,"array")?o:[o];return cn([...c,...u],r)}else return cn(c,r)}else return M(o,"array")?cn(o,r):o?cn([o],r):void 0});return fy({...n,...s},(a,o)=>!!o)}function mf(t,e){return M(t,"string")&&!t.includes("?")?{}:(M(t,"string")?t:t instanceof URL?t.search:t.toString()).replace(/^.*\?|\#.*$/,"").split("&").map(i=>{const[a,...o]=dy(i,"=");return[a,o.length?o.join("="):void 0]}).reduce((i,[a,o])=>{const l=pf({options:e,key:a,value:o}),c=ay(i,l.key,()=>[]);return o!=null&&c.push(l.value),i},{})}function wy(t){if(t!=null)return M(t,"array")?[...t]:t===""?[]:[t]}function yy(t,e){const r=cy(Object.entries(t),([n,s])=>{const i=wy(s);return i!=null&&i.length?i.map(a=>{const o=pf({options:e,key:n,value:a});return[o.key,o.value].join("=")}):[n]},(n,[,s])=>s!=null).flat();return r.length?Pe({value:r.join("&"),prefix:"?"}):""}function pf({options:t,key:e,value:r}){return{key:Vt(e,t),value:Vt(String(r),t)}}function gf({hash:t,hostname:e,password:r,pathname:n,port:s,protocol:i,search:a,username:o}){return[i?i+"://":"",o?o+":":"",r?r+"@":"",as({hostname:e,port:s}),da({hash:t,pathname:n,search:a})].join("")}function wf({pathname:t}){const e=ua({value:t,prefix:"/"});return e?e.split("/"):[]}function da({hash:t,pathname:e,search:r}){return[Pe({value:e,prefix:"/"}),r?Pe({value:r,prefix:"?"}):"",t?Pe({value:t,prefix:"#"}):""].join("")}function as({hostname:t,port:e}){return[t,e?":"+e:""].join("")}function yf({hostname:t,port:e,protocol:r}){return[r,as({hostname:t,port:e})].filter(uy).join("://")}function Hn(t,e){const r=M(t,"string")?t:t.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),s=n?Pe({value:Vt(n,e),prefix:"#"}):"",i=r.replace(/#.*$/,""),a=i.replace(/^[^\?]*(?:\?|$)/,""),o=a?Pe({value:Vt(a,e),prefix:"?"}):"",l=i.replace(/\?.*$/,""),c=l.includes("://")?l.replace(/:\/\/.*$/,""):"",u=l.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),d=u.replace(/@.*/,""),f=u.replace(/^[^@]*@/,""),h=d!==f,[m,...p]=h?d.split(":").reverse():[],y=p.reverse().join("").replace(/[\/:]/g,"")||"",x=(m==null?void 0:m.replace(/[\/:]/g,""))||"",T=f.replace(/[:\/].*/,""),O=f.replace(/^[^\/:]*(\:|\/|$)/,"$1"),_=ua({value:O.replace(/\/.*$/,""),prefix:":"}),q=Vt(O.replace(/^[^\/]*(?:\/|$)/,"/"),e),Ie=as({hostname:T,port:_}),Re=yf({hostname:T,port:_,protocol:c}),K=gf({hash:s,hostname:T,password:x,pathname:q,port:_,protocol:c,search:o,username:y}),me=mf(o),be=wf({pathname:q});return{fullPath:da({hash:s,pathname:q,search:o}),hash:s,host:Ie,hostname:T,href:K,origin:Re,password:x,pathname:q,paths:be,port:_,protocol:c,search:o,searchParams:me,username:y}}function by(t,e,r){const n=M(t,"string")?t:"",s=M(t,"string")?e:t,i=M(t,"string")?r:e,a=Hn(n),o=bi(a,(f,h)=>{if(!ly(s,f))return h;const m=s[f];return M(m,"number")?String(m):M(m,"string")?f==="hash"&&m?Pe({value:m,prefix:"#"}):f==="pathname"?Pe({value:m,prefix:"/"}):m:h});Ec(s,"paths")&&s.paths&&(o.pathname=hf("",...s.paths));const l=M(s.search,"string")?mf(Pe({value:s.search,prefix:"?"})):hy(s.search||{}),c=gy(o.searchParams,l,{...i,encoding:Ar.None}),u=yy(c,i);return{...o,searchParams:c,search:u,paths:wf(o),fullPath:da(o),host:as(o),origin:yf(o),href:gf({...o,search:u})}}const vy=J({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:py,hash:"",fullPath:"/",href:"/"});({...vy.defaultValue});const $y=J({basePath:Ce("",void 0),sanitizeRoute:t=>t,maxListenerCount:Ce(1,void 0),disableWarnings:Ce(void 0,!1),isPaused:Ce(!1,void 0)}),Ty=0;function Ey(t){return!(t.type!=="click"&&t.type!=="mousedown"||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.button!==Ty)}const os="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Sy=globalThis.history.pushState;function sc(...t){const e=Sy.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(os)),e}const My=globalThis.history.replaceState;function ic(...t){const e=My.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(os)),e}function ky(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){{if(globalThis.history.pushState===sc)throw new tc("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===ic)throw new tc("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=sc,globalThis.history.replaceState=ic,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(os))})}}function js(t,e){const r=Hn(t),n=ds({value:ds({value:r.pathname,prefix:Mc({value:e||"",prefix:"/"})}),prefix:"/"}),s=n?n.split("/"):[],i=Object.keys(r.searchParams).length?r.searchParams:void 0,a=r.hash?ds({value:r.hash,prefix:"#"}):void 0;return{paths:s,search:i,hash:a}}class Ay{constructor(e){Object.defineProperty(this,"innerObservable",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"removeGlobalListener",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sanitizationDepth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),qi(e,$y),this.params={...e};const r=this.readCurrentRoute();this.innerObservable=new Vu({defaultValue:r,equalityCheck:()=>!1}),ky(),this.removeGlobalListener=Ac(globalThis,os,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new iy("Looping route sanitization detected; aborting window URL change listener.");const n=js(globalThis.location.href,this.params.basePath),s=e.sanitizeRoute(n);bn(s,n)?(this.sanitizationDepth=0,this.innerObservable.setValue(s)):(this.sanitizationDepth++,this.setRoute(s,{replace:!0}),e.disableWarnings||console.warn("Route sanitized.",{from:n,to:s}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(e){return!e.paths||!this.params.basePath?!1:hf(...e.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(js(globalThis.location.href,this.params.basePath))}sanitizeRoute(e){return this.params.sanitizeRoute(e)}createRouteUrl(e){const r=js(globalThis.location.href,void 0),n={...r,...e},s=this.sanitizeRoute(n),a=this.routeIncludesBasePath(r)&&!this.routeIncludesBasePath(s)&&this.params.basePath?{...s,paths:[this.params.basePath,...s.paths]}:s;return by(globalThis.location.href,{paths:a.paths,search:a.search,hash:a.hash?Mc({value:a.hash,prefix:"#"}):"#"},{searchParamStrategy:xr.Clear}).href}setRoute(e,r={}){const n=this.createRouteUrl(e),{fullPath:s}=Hn(n);return this.params.isPaused||!r.force&&bn(Hn(globalThis.location.href).fullPath,s)?!1:r.replace?(globalThis.history.replaceState(void 0,"",s),!0):(globalThis.history.pushState(void 0,"",s),!0)}setRouteOnDirectNavigation(e,r){return Ey(r)?(r.preventDefault(),this.setRoute(e)):!1}listen(e,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new ca(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(e,r),()=>this.removeListener(r)}removeListener(e){return this.innerObservable.removeListener(e)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}var ft=(t=>(t.Auth="auth",t.PullRequests="pull-requests",t))(ft||{});const Cr={hash:void 0,paths:["pull-requests"],search:void 0};function xy(){return new Ay({basePath:"review-vir",sanitizeRoute(t){return{paths:Cy(t.paths),hash:void 0,search:void 0}}})}function Cy(t){const e=t[0];return Bf(e,ft)?[e]:Cr.paths}const Py="modulepreload",Oy=function(t){return"/review-vir/"+t},ac={},oc=function(e,r,n){if(!r||r.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=Oy(i),i in ac)return;ac[i]=!0;const a=i.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!n)for(let u=s.length-1;u>=0;u--){const d=s[u];if(d.href===i&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Py,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},Ly=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Ny(t,e){return t?Ly.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function lc(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var cc;(function(t){t.Upper="upper",t.Lower="lower"})(cc||(cc={}));var uc;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(uc||(uc={}));function Iy(t){return!!t&&typeof t=="object"}function Ry(t,e){let r=!1;const n=lc(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(lc(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function _y(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}_y();function Dy(t){return Iy(t)&&Ny(t,"liveClient")&&M(t.liveClient,"function")}function S2(t){return{liveClient(){return typeof t=="function"?t():t}}}const Vy=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Hy(t,e){return t?Vy.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Fy(t,e){return t.includes(e)}var dc;(function(t){t.Upper="upper",t.Lower="lower"})(dc||(dc={}));var fc;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(fc||(fc={}));function Uy(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Uy();const zy=Symbol("set-mock-return-value"),Ws=Symbol("get-last-called-args"),jy=["then","catch","finally"];function bf(){const t={},e=()=>{};function r(n){return n in t||(t[n]=bf()),t[n]}return new Proxy(e,{get:(n,s)=>s===Ws?t[Ws]:Fy(jy,s)&&!Hy(t,s)?void 0:r(s),apply:(n,s,i)=>(t[Ws]=i,r(zy)),set:(n,s,i)=>(t[s]=i,!0),has(n,s){return s in t}})}async function Wy(t,e){const r=await t(),n=Object.values(r).find(Dy);if(!n)throw new Error(`Failed to find any client definitions exported for client '${e}'`);return await n.liveClient()}function qy({clientImports:t,isTestEnv:e,mockClients:r}){const n={};let s;return Object.entries(t).forEach(([i,a])=>{Object.defineProperty(n,i,{async get(){if(e){if(r&&(s||(s=typeof r=="function"?await r():r),s&&i in s)){const o=s[i];if(!o)throw new Error(`Mock client for '${i}' is not defined.`);return await o}return bf()}else return await Wy(a,i)}})}),n}async function By(t){return Ry(t,async(r,n)=>{try{return await n}catch(s){console.error(`Failed to await client '${String(r)}':`,s);return}})}const Gy=qy({clientImports:{github:()=>oc(()=>import("./github.client-9e942e00.js"),["assets/github.client-9e942e00.js","assets/index-f4dd668f.js"]),authStore:()=>oc(()=>import("./auth-store.client-10502393.js"),["assets/auth-store.client-10502393.js","assets/index-f4dd668f.js"])},isTestEnv:!1});async function Zy(){return By(Gy)}const vi=Qi()("change-route"),hc=Se()({tagName:"vir-app-tabs",styles:A`
        :host {
            display: flex;
            border-bottom: 1px solid #ddd;
        }

        ol,
        li {
            ${Nn};
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
    `,renderCallback({inputs:t}){const e=Yy.map(r=>{const n={paths:r.paths,hash:void 0,search:void 0};return w`
                <li>
                    <a
                        href=${t.router.createRouteUrl(n)}
                        ${F("click",s=>{t.router.setRouteOnDirectNavigation(n,s)})}
                    >
                        ${r.label}
                    </a>
                </li>
            `});return w`
            <ol>
                ${e}
            </ol>
        `}}),Yy=[{paths:[ft.PullRequests],label:"Pull Requests"},{paths:[ft.Auth],label:"Auth"}],Nt=Dr({tagName:"vir-error-message",styles:A`
        :host {
            color: red;
            font-weight: bold;
        }
    `,renderCallback(){return w`
            <slot></slot>
        `}}),Jy={[vt.Github]:{intro:w`
            You will need a
            <a href="https://github.com/settings/tokens?type=beta">
                Fine-grained Personal Access Token
            </a>
            with the following permissions:
        `,permissions:[{label:"Commit statuses",value:"Read-only"},{label:"Contents",value:"Read-only"},{label:"Metadata",value:"Read-only"},{label:"Pull requests",value:"Read-only"}]}},qs=Se()({tagName:"vir-service-auth-token-entry",styles:A`
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
            ${Nn};
        }

        h2 {
            ${Nn};
        }

        .with-delete-wrapper {
            display: flex;
            gap: 16px;
            align-items: center;
        }

        .delete {
            ${xe};
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
    `,events:{authTokensChange:Ee()},renderCallback({inputs:t,events:e,dispatch:r}){const n=t.authTokens.map((a,o)=>{var d;const c=((d=t.authTokenEntryError)==null?void 0:d.authTokenIndex)===o&&t.authTokenEntryError.serviceName===t.serviceName?w`
                      <${Nt}>${t.authTokenEntryError.message}</${Nt}>
                  `:N;function u(f,h){const m=Ta(t.authTokens),p=m[o];if(!p)throw new Error("Failed to find auth token to edit");p[f]=h,r(new e.authTokensChange(m))}return w`
                <div class="auth-token-entry">
                    ${c}
                    <label>
                        <p>Token name</p>
                        <${xt.assign({value:a.authTokenName})}
                            ${F(xt.events.valueChange,f=>{u("authTokenName",f.detail)})}
                        ></${xt}>
                    </label>
                    <label>
                        <p>Token Secret</p>
                        <div class="with-delete-wrapper">
                            <${xt.assign({value:a.authTokenSecret,type:dt.Password})}
                                ${F(xt.events.valueChange,f=>{u("authTokenSecret",f.detail)})}
                            ></${xt}>
                            <button
                                class="delete"
                                ${F("click",()=>{const f=Of(Ta(t.authTokens),[o]);r(new e.authTokensChange(f))})}
                            >
                                <${C.assign({icon:sf})}></${C}>
                            </button>
                        </div>
                    </label>
                </div>
            `}),s=Jy[t.serviceName],i=s.permissions.map(a=>w`
                <tr>
                    <td>${a.label}</td>
                    <td>${a.value}</td>
                </tr>
            `);return w`
            <h2>${t.serviceName}</h2>
            <section class="description">
                <p>${s.intro}</p>
                <table>${i}</table>
            </section>
            <section class="tokens">${n}</section>
            <${Lt.assign({text:"Add",buttonStyle:kr.Outline})}
                ${F("click",()=>{r(new e.authTokensChange(t.authTokens.concat({authTokenName:"",authTokenSecret:""})))})}
            ></${Lt}>
        `}}),un=Se()({tagName:"vir-auth-token-entry-main-page",styles:A`
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
    `,events:{authTokensByServiceChange:Ee()},stateInitStatic:{currentAuthTokenEntry:void 0,errorMessage:void 0},renderCallback({inputs:t,state:e,updateState:r,dispatch:n,events:s}){e.currentAuthTokenEntry||r({currentAuthTokenEntry:t.authTokens});const i=ki(vt).map(a=>{var u;const o=(u=e.currentAuthTokenEntry)==null?void 0:u[a],l=o==null||!o.length?[{authTokenName:"",authTokenSecret:""}]:o,c=Wf(e.errorMessage)&&e.errorMessage.serviceName===a?e.errorMessage:void 0;return w`
                    <${qs.assign({authTokenEntryError:c,authTokens:l,serviceName:a})}
                        ${F(qs.events.authTokensChange,d=>{r({currentAuthTokenEntry:{...e.currentAuthTokenEntry,[a]:d.detail}})})}
                    ></${qs}>
                `});return w`
            <section class="services">${i}</section>
            <section class="actions">
                <${Lt.assign({text:"Cancel",buttonStyle:kr.Outline})}
                    ${F("click",()=>{r({currentAuthTokenEntry:t.authTokens}),n(new vi({route:Cr}))})}
                ></${Lt}>
                <${Lt.assign({text:"Save"})}
                    ${F("click",()=>{try{ny(e.currentAuthTokenEntry)}catch(a){a instanceof wi?r({errorMessage:{message:a.message,authTokenIndex:a.authTokenIndex,serviceName:a.serviceName}}):r({errorMessage:gr(a)});return}n(new s.authTokensByServiceChange(e.currentAuthTokenEntry)),n(new vi({route:Cr}))})}
                ></${Lt}>
            </section>
        `}}),pr=J({username:"",profileUrl:"",avatarUrl:""},!0),Ky=J({repoName:"",repoOwner:pr,htmlUrl:"",isPrivate:!1,isArchived:!1},!0),mc=J({repo:Ky,branchName:Ce("",ti(Error)),headCommitHash:Ce("",ti(Error))},!0);var lt=(t=>(t.Draft="draft",t.Merged="merged",t.Open="open",t.Rejected="rejected",t))(lt||{}),rt=(t=>(t.Accepted="accepted",t.Rejected="rejected",t.Pending="pending",t))(rt||{});const Xy=J({successCount:0,failCount:0,inProgressCount:0,totalCount:0},!0),Qy=J({user:pr,isPrimaryReviewer:!1,reviewStatus:Mn(rt)},!0),M2=J({id:{htmlUrl:"",prId:"",prNumber:"",title:"",owner:pr},auth:{client:Mn(vt),tokenName:""},branches:{headBranch:mc,targetBranch:mc},dates:{created:Ts,lastUpdated:Ts,closed:Ce(void 0,Ts)},status:{checksStatus:Ce(Xy,ti(Error)),comments:{resolved:0,total:0},commitCount:0,mergeStatus:Mn(lt),mergedBy:Ce(void 0,pr),needsReviewFromCurrentUser:!1,userIsPrimaryReviewer:!1,labels:[{name:"",color:""}],hasMergeConflicts:!1},changes:{additions:0,deletions:0,changedFiles:0},users:{reviewers:yr({keys:"",values:Qy,required:!1}),assignees:yr({keys:"",values:pr,required:!1})},cost:ri(),raw:ri()});function e2(t,e){const r={};return e.forEach(n=>{const s=n.id.owner,i=Sc(r,s.username,()=>({owner:s,pullRequests:{assigned:[],closed:[],reviewer:[]}}));n.status.mergeStatus===lt.Merged||n.status.mergeStatus===lt.Rejected?i.pullRequests.closed.push(n):t.username in n.users.assignees?i.pullRequests.assigned.push(n):i.pullRequests.reviewer.push(n)}),Object.values(r).forEach(n=>{n.pullRequests.assigned.sort((s,i)=>Et(s.dates.created)-Et(i.dates.created)),n.pullRequests.reviewer.sort((s,i)=>Et(i.dates.lastUpdated)-Et(s.dates.lastUpdated)).sort((s,i)=>{if(s.status.mergeStatus!==i.status.mergeStatus){if(s.status.mergeStatus===lt.Draft)return 1;if(i.status.mergeStatus===lt.Draft)return-1}return 0}).sort((s,i)=>s.status.needsReviewFromCurrentUser===i.status.needsReviewFromCurrentUser?0:s.status.needsReviewFromCurrentUser?-1:1),n.pullRequests.closed.sort((s,i)=>{if(s.dates.closed){if(!i.dates.closed)return 1}else return-1;return Et(i.dates.closed)-Et(s.dates.closed)})}),r}class k2 extends he()("pull-requests-resolved"){}class A2 extends he()("custom-error"){}class x2 extends he()("pull-requests-update-started"){}class t2 extends he()("pull-requests-change"){}function r2(t){const e=t.reduce((r,n)=>{const s=n.branches.headBranch.branchName,i=s instanceof Error?"":s;return Sc(r,i,()=>[]).push({needsChainedReviews:n.status.needsReviewFromCurrentUser,latestChainedUpdate:n.dates.lastUpdated,pullRequest:n,children:[],isChained:!1}),r},{});return Object.values(e).forEach(r=>{r.forEach(n=>{const s=n.pullRequest.branches.targetBranch.branchName;if(s instanceof Error)return;const i=e[s];i&&(n.isChained=!0,i.forEach(a=>{n.pullRequest.status.needsReviewFromCurrentUser&&(a.needsChainedReviews=!0),ho({fullDate:n.pullRequest.dates.lastUpdated,relativeTo:a.latestChainedUpdate})&&(a.latestChainedUpdate=n.pullRequest.dates.lastUpdated),a.children.push(n)}))})}),Object.values(e).flat().sort((r,n)=>ho({fullDate:r.latestChainedUpdate,relativeTo:n.latestChainedUpdate})?-1:1).sort((r,n)=>Number(n.needsChainedReviews)-Number(r.needsChainedReviews)).filter(r=>!r.isChained)}const nt=Se()({tagName:"vir-user",styles:A`
        a {
            display: flex;
            align-items: center;
            gap: 0.3em;
        }

        ${on} {
            max-height: 1em;
            max-width: 1em;
            min-height: 1em;
            min-width: 1em;
            border-radius: 50%;
            background-color: white;
            border: 2px solid #eee;
        }

        ${C} {
            color: red;
        }

        ${C}.success {
            color: green;
        }

        .avatar {
            display: flex;
            flex-direction: column;
        }

        .is-primary ${on} {
            border-color: red;
        }

        .placeholder {
            visibility: hidden;
        }
    `,renderCallback({inputs:t}){var o,l;const e=t.review==null||t.review.reviewStatus===rt.Pending?void 0:t.review.reviewStatus===rt.Accepted?af:_n,r=!!t.show.statusSpace&&!e,n=t.review==null||t.review.reviewStatus===rt.Pending?void 0:t.review.reviewStatus===rt.Accepted?`${t.user.username} has accepted this pull request.`:`${t.user.username} has requested changes on this pull request.`,s=e||r?w`
                      <${C.assign({icon:r?_n:e,fitContainer:!0})}
                          class="status-icon ${qe({success:((o=t.review)==null?void 0:o.reviewStatus)===rt.Accepted,placeholder:r})}"
                          title=${Ji(n)}
                      ></${C}>
                  `:N,i=w`
            <div class="avatar">
                <${on.assign({imageUrl:t.user.avatarUrl})}
                    title=${t.user.username}
                ></${on}>
                ${s}
            </div>
        `,a=t.user.username;return w`
            <a
                href=${t.user.profileUrl}
                class=${qe({"is-primary":!!((l=t.review)!=null&&l.isPrimaryReviewer)})}
            >
                ${t.show.avatar?i:N}
                ${t.show.username?a:N}
            </a>
        `}});function n2(t){const e=Math.abs(new I(t).contrast("white","APCA")),r=Math.abs(new I(t).contrast("black","APCA"));return e>r?"white":"black"}const dn=Se()({tagName:"vir-users",hostClasses:{"vir-users-overlap-icons":({inputs:t})=>t.overlap},styles:({hostClasses:t})=>A`
        :host {
            display: flex;
            align-items: center;
            align-items: flex-start;
        }

        ${nt} {
            font-size: 20px;
        }

        ${t["vir-users-overlap-icons"].selector} ${nt} + ${nt} {
            margin-left: -10px;
        }
    `,renderCallback({inputs:t}){const r=[...t.users].sort((n,s)=>n.username.localeCompare(s.username)).map(n=>{var s;return w`
                <${nt.assign({user:n,show:{avatar:!0,username:!1,statusSpace:t.holdStatusSpace},review:(s=t.reviews)==null?void 0:s[n.username]})}></${nt}>
            `});return w`
            ${r}
        `}}),pc=Se()({tagName:"vir-pull-request",styles:A`
        :host {
            display: flex;
            overflow: hidden;
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
            overflow: hidden;
        }

        .columns {
            display: flex;
            flex-direction: row;
            gap: 4px;
            overflow: hidden;
        }

        .big-gap {
            gap: 16px;
        }

        .center {
            align-items: center;
        }

        .grow {
            flex-grow: 1;
        }

        .pull-request {
            border-radius: 8px;
            gap: 8px;
            border: 2px solid #ccc;
            padding: 8px;
        }

        .pull-request.needs-review {
            border-color: dodgerblue;
        }
        .pull-request.primary-reviewer {
            border-color: red;
        }

        .pull-request.is-draft {
            border-color: #f5f5f5;
        }

        .pull-request-title-line {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .branch-name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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

        /*
            These colors were too noisy
            .deletions {
                color: #bf4040;
            }
            .changed-files {
                color: #5690c7;
            }
            .additions {
                color: #206020;
            }
        */

        .checks {
            display: flex;
            gap: 4px;
        }

        .checks-count {
            display: flex;
            align-items: center;
        }

        .label {
            opacity: 0.4;
            padding: 1px 8px;
            border-radius: 16px;
            color: black;
        }

        .no-shrink {
            flex-shrink: 0;
        }

        .nested-arrow {
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
    `,renderCallback({inputs:t}){const e=Object.values(t.pullRequest.users.assignees).filter(Ti),r=t.pullRequest.status.checksStatus instanceof Error||t.pullRequest.status.hasMergeConflicts?"error":t.pullRequest.status.checksStatus.failCount?void 0:t.pullRequest.status.checksStatus.inProgressCount?"inProgress":"success",n=t.pullRequest.status.hasMergeConflicts?"Has Merge Conflicts":t.pullRequest.status.checksStatus instanceof Error?["Error",gr(t.pullRequest.status.checksStatus)].join(": "):t.pullRequest.status.checksStatus.failCount?[t.pullRequest.status.checksStatus.failCount,"checks failed."].join(" "):t.pullRequest.status.checksStatus.inProgressCount?[t.pullRequest.status.checksStatus.inProgressCount,"check in progress."].join(" "):"All checks passed.",s=xn(t.pullRequest.branches.headBranch.branchName)?void 0:t.pullRequest.branches.headBranch.branchName,i=xn(t.pullRequest.branches.targetBranch.branchName)?void 0:t.pullRequest.branches.targetBranch.branchName,a=[t.pullRequest.status.comments.resolved,t.pullRequest.status.comments.total].join(" / "),o=t.pullRequest.status.labels.map(c=>{const u=A`
                /*
                    these colors are too noisy
                    background-color: ${ee(c.color)};
                    color: ${ee(n2(c.color))};
                */
            `;return w`
                <span class="label" style=${u}>${c.name}</span>
            `}),l=r?w`
                  <${C.assign({icon:gc[r]})}
                      class=${r}
                      title=${n}
                  ></${C}>
              `:t.pullRequest.status.checksStatus instanceof Error?w`
                    <${C.assign({icon:gc.error})}
                        class="error"
                        title=${n}
                    ></${C}>
                `:w`
                    <div class="checks-count fail" title=${n}>
                        ${t.pullRequest.status.checksStatus.failCount}
                    </div>
                `;return w`
            ${Ue(t.nested,w`
                    <div class="nested-arrow">↱</div>
                `)}
            <div
                class="pull-request rows grow ${qe({"needs-review":t.pullRequest.status.needsReviewFromCurrentUser,"primary-reviewer":t.pullRequest.status.userIsPrimaryReviewer,"is-draft":t.pullRequest.status.mergeStatus===lt.Draft})}"
            >
                <div class="columns title">
                    <div class="rows grow">
                        <div class="columns center">
                            <span class="faint no-shrink">
                                <a href=${t.pullRequest.branches.headBranch.repo.htmlUrl}>
                                    ${t.pullRequest.branches.headBranch.repo.repoName}
                                </a>
                            </span>
                            <div class="checks">
                                ${l}
                                <${dn.assign({users:e,overlap:!0})}></${dn}>
                            </div>
                            ${Ue(!!(s||i),w`
                                    <div class="center columns subtitle faint">
                                        <span
                                            class="branch-name select-all"
                                            title=${i}
                                        >
                                            ${i}
                                        </span>
                                        ←
                                        <span
                                            class="branch-name select-all"
                                            title=${s}
                                        >
                                            ${s}
                                        </span>
                                    </div>
                                `)}
                        </div>
                        <a href=${t.pullRequest.id.htmlUrl}>
                            <b>#${t.pullRequest.id.prNumber}:</b>
                            ${t.pullRequest.id.title}
                        </a>
                    </div>
                    <${dn.assign({...s2(t.pullRequest.users.reviewers),overlap:!1,holdStatusSpace:!0})}></${dn}>
                </div>
                <div class="subtitle columns big-gap faint">
                    <div>
                        <span
                            class="additions"
                            title=${`${t.pullRequest.changes.additions} added lines`}
                        >
                            +${t.pullRequest.changes.additions}
                        </span>
                        <span
                            class="deletions"
                            title=${`${t.pullRequest.changes.deletions} deleted lines`}
                        >
                            -${t.pullRequest.changes.deletions}
                        </span>
                        <span
                            class="changed-files"
                            title=${`${t.pullRequest.changes.changedFiles} changed files`}
                        >
                            &nbsp;${t.pullRequest.changes.changedFiles}
                        </span>
                    </div>
                    <div>
                        <span title=${`${a} comments resolved`}>
                            ${a}
                        </span>
                    </div>
                    <div>
                        <span title=${`${t.pullRequest.status.commitCount} commits`}>
                            ${t.pullRequest.status.commitCount}
                        </span>
                    </div>
                    <div>${o}</div>
                </div>
            </div>
        `}});function s2(t){const e=Object.values(t).map(r=>r==null?void 0:r.user).filter(Ti);return{reviews:t,users:e}}const gc={error:Zl,fail:_n,inProgress:Zl,success:af},wc=Se()({tagName:"vir-org-pull-requests",styles:A`
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
    `,renderCallback({inputs:t}){const r=[{title:"Reviewer",pullRequests:t.ownedPullRequests.pullRequests.reviewer},{title:"Assigned",pullRequests:t.ownedPullRequests.pullRequests.assigned}].map(n=>{const i=r2(n.pullRequests).flatMap(a=>vf(a,t.user));return i.length?w`
                    <section class="pull-request-section">
                        <h3>${n.title} (${i.length})</h3>
                        <div class="pull-requests">${i}</div>
                    </section>
                `:N}).filter(Ti);return r.length?w`
            <div class="wrapper">
                <h2>
                    <${nt.assign({user:t.ownedPullRequests.owner,show:{avatar:!0,username:!0}})}></${nt}>
                </h2>
                ${r}
            </div>
        `:N}});function vf(t,e,r){const n=t.children.flatMap(s=>vf(s,e,!0));return[w`
            <${pc.assign({user:e,pullRequest:t.pullRequest,nested:!!r})}></${pc}>
        `,...n]}const i2=Se()({tagName:"vir-github-pull-requests",styles:A`
        :host {
            display: flex;
            flex-wrap: wrap;
        }
    `,stateInitStatic:{githubClient:void 0,pullRequests:void 0,user:void 0},renderCallback({state:t,updateState:e,inputs:r}){var a;if(!t.githubClient){const o=r.webClientInterface.github.init(r.authTokens);return e({githubClient:o}),o.listen(t2,l=>{e({user:l.detail.user,pullRequests:l.detail.pullRequests})}),N}const n=t.user;if(!n)return w`
                <${C.assign({icon:Rn})}></${C}>
            `;const s=e2(n,((a=t.pullRequests)==null?void 0:a.filter(o=>!(o instanceof Error)))||[]);return Object.values(s).map(o=>w`
                    <${wc.assign({user:n,ownedPullRequests:o})}></${wc}>
                `)}}),a2={[vt.Github]:i2},yc=Se()({tagName:"vir-pull-requests-main-page",renderCallback({inputs:t}){return ki(vt).map(r=>{const n=t.serviceAuthTokens[r];if(!(n!=null&&n.length))return N;const s=a2[r];return w`
                <${s.assign({authTokens:n,webClientInterface:t.webClientInterface})}></${s}>
            `})}});Dr({tagName:"vir-review-vir-app",styles:A`
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

        ${un} {
            align-self: flex-start;
        }
    `,stateInitStatic:{serviceAuthTokens:Lo({updateCallback({secretEncryptionKey:t,webClientInterface:e}){if(!t)throw new Error("No encryption key.");return e.authStore.loadServiceAuthTokens({secretEncryptionKey:t})}}),webClientInterface:Lo({defaultValue:Zy()}),router:xy(),currentRoute:void 0},initCallback({state:t,updateState:e}){t.router.listen(!0,r=>{e({currentRoute:r})})},renderCallback({state:t}){const e=t.webClientInterface.value;if(No(e)){if(xn(e))return w`
                <${Nt}>${gr(e)}</${Nt}>
            `}else return w`
                <${C.assign({icon:Rn})}></${C}>
            `;t.serviceAuthTokens.update({secretEncryptionKey:ec.encryptionKey,webClientInterface:e});const r=t.serviceAuthTokens.value;if(No(r)){if(xn(r))return w`
                <${Nt}>${gr(r)}</${Nt}>
            `}else return w`
                <${C.assign({icon:Rn})}></${C}>
            `;const n=Object.keys(r).length===0?{...Cr,paths:[ft.Auth]}:t.currentRoute||Cr;bn(n,t.currentRoute)||t.router.setRoute(n);const s=n.paths[0]===ft.Auth?w`
                      <${un.assign({authTokens:r})}
                          ${F(un.events.authTokensByServiceChange,async i=>{e.authStore.saveServiceAuthTokens({secretEncryptionKey:ec.encryptionKey,authTokensByService:i.detail}),t.serviceAuthTokens.setValue(i.detail)})}
                      ></${un}>
                  `:N;return w`
            <div
                class="root"
                ${F(vi,i=>{t.router.setRoute(i.detail.route)})}
            >
                <${hc.assign({currentRoute:n,router:t.router})}></${hc}>
                ${s}
                <${yc.assign({serviceAuthTokens:r,webClientInterface:e})}
                    class=${qe({"hide-main-page":n.paths[0]!==ft.PullRequests})}
                ></${yc}>
            </div>
        `}});export{d2 as A,ho as B,Ru as C,E as D,k2 as E,bn as F,x2 as G,t2 as H,qr as I,A2 as J,y2 as K,k as L,Si as M,S2 as N,ki as O,lt as P,ec as Q,ry as R,vt as S,eh as T,qi as a,w2 as b,pr as c,J as d,ti as e,Ts as f,$i as g,M2 as h,M as i,ri as j,Mn as k,N0 as l,Ti as m,u2 as n,Ce as o,g2 as p,rt as q,c2 as r,Pf as s,ei as t,_u as u,Ec as v,l2 as w,xn as x,Ff as y,Nf as z};
