var Ro=Object.defineProperty;var Ho=(t,e,r)=>e in t?Ro(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Wn=(t,e,r)=>(Ho(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const Vo=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Fo(t,e){return t?Vo.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function yn(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Wo(t){return Object.fromEntries(t)}function Uo(t,e){return t.filter((r,n)=>!e.includes(n))}function ah(t,e){return t.includes(e)}function oh(t,e){return Wo(t.map((r,n,s)=>[e(r,n,s),r]))}function lh(t,e,r){return t.reduce((n,s,i,a)=>{const o=e(s,i,a);return r(o,s,i,a)&&n.push(o),n},[])}function Pi(t){return!!t}var Un;(function(t){t.Upper="upper",t.Lower="lower"})(Un||(Un={}));function jo({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}var jn;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(jn||(jn={}));function He(t){return t?t instanceof Error?t.message:Fo(t,"message")?String(t.message):String(t):""}function zo(t){return t instanceof Error?t:new Error(He(t))}function uh(t,e){const r=zo(t);return r.message=`${e}: ${r.message}`,r}class qo extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}function Zr(t){return t instanceof Promise}function zt(t){return Array.isArray(t)?"array":typeof t}function L(t,e){return zt(t)===e}class Bo extends Error{constructor(e){super(`Failed to compare objects using JSON.stringify: ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonStringifyError"})}}function kr(t,e){return JSON.stringify(t)===JSON.stringify(e)}function Ii(t,e){try{return t===e||kr(t,e)?!0:Gr(t)&&Gr(e)?kr(Object.keys(t).sort(),Object.keys(e).sort())?yn(t).every(n=>Ii(t[n],e[n])):!1:kr(t,e)}catch(r){throw new Bo(He(r))}}function Zo(t,e){if(!(L(t,"string")||L(t,"number")||L(t,"symbol")))throw new qo(e||`value is of type '${zt(t)}' but expected a PropertyKey.`)}function Ar(t){try{return Zo(t),!0}catch{return!1}}function Gr(t){return!!t&&typeof t=="object"}function zn(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function Go(t){return yn(t).filter(e=>isNaN(Number(e)))}function gn(t){return Go(t).map(r=>t[r])}function Yo(t,e){return gn(e).includes(t)}function _i(t,e,r){if(e in t)return t[e];{const n=r();return Zr(n)?new Promise(async(s,i)=>{try{const a=await n;t[e]=a,s(a)}catch(a){i(a)}}):(t[e]=n,n)}}function Ko(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const Jo=Ko();function Qo({min:t,max:e}){const{min:r,max:n}=jo({min:Math.floor(t),max:Math.floor(e)}),s=n-r+1,i=Math.ceil(Math.log2(s)/8),a=Math.floor(256**i/s)*s,o=new Uint8Array(i);let l;do Jo.getRandomValues(o),l=o.reduce((u,c,d)=>u+c*256**d,0);while(l>=a);return r+l%s}const qn=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function ch(t=16){let e="";for(let r=0;r<t;r++){const n=Qo({min:0,max:qn.length-1});e+=qn[n]}return e}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=globalThis,wn=Vt.ShadowRoot&&(Vt.ShadyCSS===void 0||Vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vn=Symbol(),Bn=new WeakMap;let Di=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==vn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(wn&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=Bn.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Bn.set(r,e))}return e}toString(){return this.cssText}};const Q=t=>new Di(typeof t=="string"?t:t+"",void 0,vn),Ft=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,s,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new Di(r,t,vn)},Xo=(t,e)=>{if(wn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),s=Vt.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,t.appendChild(n)}},Zn=wn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return Q(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:el,defineProperty:tl,getOwnPropertyDescriptor:rl,getOwnPropertyNames:nl,getOwnPropertySymbols:sl,getPrototypeOf:il}=Object,oe=globalThis,Gn=oe.trustedTypes,al=Gn?Gn.emptyScript:"",xr=oe.reactiveElementPolyfillSupport,st=(t,e)=>t,qt={toAttribute(t,e){switch(e){case Boolean:t=t?al:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},bn=(t,e)=>!el(t,e),Yn={attribute:!0,type:String,converter:qt,reflect:!1,hasChanged:bn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),oe.litPropertyMetadata??(oe.litPropertyMetadata=new WeakMap);class Ce extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Yn){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,r);s!==void 0&&tl(this.prototype,e,s)}}static getPropertyDescriptor(e,r,n){const{get:s,set:i}=rl(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);i.call(this,a),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Yn}static _$Ei(){if(this.hasOwnProperty(st("elementProperties")))return;const e=il(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(st("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(st("properties"))){const r=this.properties,n=[...nl(r),...sl(r)];for(const s of n)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,s]of r)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const s=this._$Eu(r,n);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)r.unshift(Zn(s))}else e!==void 0&&r.push(Zn(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EC(e,r){var i;const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:qt).toAttribute(r,n.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,r){var i;const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=n.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:qt;this._$Em=s,this[s]=o.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??bn)(this[e],r))return;this.P(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,a]of s)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}Ce.elementStyles=[],Ce.shadowRootOptions={mode:"open"},Ce[st("elementProperties")]=new Map,Ce[st("finalized")]=new Map,xr==null||xr({ReactiveElement:Ce}),(oe.reactiveElementVersions??(oe.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=globalThis,Bt=it.trustedTypes,Kn=Bt?Bt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ri="$lit$",se=`lit$${(Math.random()+"").slice(9)}$`,Hi="?"+se,ol=`<${Hi}>`,Te=document,ft=()=>Te.createComment(""),ht=t=>t===null||typeof t!="object"&&typeof t!="function",Vi=Array.isArray,ll=t=>Vi(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Mr=`[ 	
\f\r]`,Xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jn=/-->/g,Qn=/>/g,ce=RegExp(`>|${Mr}(?:([^\\s"'>=/]+)(${Mr}*=${Mr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xn=/'/g,es=/"/g,Fi=/^(?:script|style|textarea|title)$/i,ul=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),cl=ul(1),Y=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),ts=new WeakMap,me=Te.createTreeWalker(Te,129);function Wi(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kn!==void 0?Kn.createHTML(e):e}const dl=(t,e)=>{const r=t.length-1,n=[];let s,i=e===2?"<svg>":"",a=Xe;for(let o=0;o<r;o++){const l=t[o];let u,c,d=-1,f=0;for(;f<l.length&&(a.lastIndex=f,c=a.exec(l),c!==null);)f=a.lastIndex,a===Xe?c[1]==="!--"?a=Jn:c[1]!==void 0?a=Qn:c[2]!==void 0?(Fi.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=ce):c[3]!==void 0&&(a=ce):a===ce?c[0]===">"?(a=s??Xe,d=-1):c[1]===void 0?d=-2:(d=a.lastIndex-c[2].length,u=c[1],a=c[3]===void 0?ce:c[3]==='"'?es:Xn):a===es||a===Xn?a=ce:a===Jn||a===Qn?a=Xe:(a=ce,s=void 0);const h=a===ce&&t[o+1].startsWith("/>")?" ":"";i+=a===Xe?l+ol:d>=0?(n.push(u),l.slice(0,d)+Ri+l.slice(d)+se+h):l+se+(d===-2?o:h)}return[Wi(t,i+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class mt{constructor({strings:e,_$litType$:r},n){let s;this.parts=[];let i=0,a=0;const o=e.length-1,l=this.parts,[u,c]=dl(e,r);if(this.el=mt.createElement(u,n),me.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=me.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(Ri)){const f=c[a++],h=s.getAttribute(d).split(se),w=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:w[2],strings:h,ctor:w[1]==="."?hl:w[1]==="?"?ml:w[1]==="@"?pl:ar}),s.removeAttribute(d)}else d.startsWith(se)&&(l.push({type:6,index:i}),s.removeAttribute(d));if(Fi.test(s.tagName)){const d=s.textContent.split(se),f=d.length-1;if(f>0){s.textContent=Bt?Bt.emptyScript:"";for(let h=0;h<f;h++)s.append(d[h],ft()),me.nextNode(),l.push({type:2,index:++i});s.append(d[f],ft())}}}else if(s.nodeType===8)if(s.data===Hi)l.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(se,d+1))!==-1;)l.push({type:7,index:i}),d+=se.length-1}i++}}static createElement(e,r){const n=Te.createElement("template");return n.innerHTML=e,n}}function Ve(t,e,r=t,n){var a,o;if(e===Y)return e;let s=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const i=ht(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),i===void 0?s=void 0:(s=new i(t),s._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=s:r._$Cl=s),s!==void 0&&(e=Ve(t,s._$AS(t,e.values),s,n)),e}class fl{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,s=((e==null?void 0:e.creationScope)??Te).importNode(r,!0);me.currentNode=s;let i=me.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new vt(i,i.nextSibling,this,e):l.type===1?u=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(u=new yl(i,this,e)),this._$AV.push(u),l=n[++o]}a!==(l==null?void 0:l.index)&&(i=me.nextNode(),a++)}return me.currentNode=Te,s}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class vt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,s){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ve(this,e,r),ht(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==Y&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ll(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==S&&ht(this._$AH)?this._$AA.nextSibling.data=e:this.T(Te.createTextNode(e)),this._$AH=e}$(e){var i;const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=mt.createElement(Wi(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(r);else{const a=new fl(s,this),o=a.u(this.options);a.p(r),this.T(o),this._$AH=a}}_$AC(e){let r=ts.get(e.strings);return r===void 0&&ts.set(e.strings,r=new mt(e)),r}k(e){Vi(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const i of e)s===r.length?r.push(n=new vt(this.S(ft()),this.S(ft()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class ar{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,s,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}_$AI(e,r=this,n,s){const i=this.strings;let a=!1;if(i===void 0)e=Ve(this,e,r,0),a=!ht(e)||e!==this._$AH&&e!==Y,a&&(this._$AH=e);else{const o=e;let l,u;for(e=i[0],l=0;l<i.length-1;l++)u=Ve(this,o[n+l],r,l),u===Y&&(u=this._$AH[l]),a||(a=!ht(u)||u!==this._$AH[l]),u===S?e=S:e!==S&&(e+=(u??"")+i[l+1]),this._$AH[l]=u}a&&!s&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class hl extends ar{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}class ml extends ar{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class pl extends ar{constructor(e,r,n,s,i){super(e,r,n,s,i),this.type=5}_$AI(e,r=this){if((e=Ve(this,e,r,0)??S)===Y)return;const n=this._$AH,s=e===S&&n!==S||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==S&&(n===S||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class yl{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ve(this,e)}}const Or=it.litHtmlPolyfillSupport;Or==null||Or(mt,vt),(it.litHtmlVersions??(it.litHtmlVersions=[])).push("3.1.2");const gl=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let s=n._$litPart$;if(s===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=s=new vt(e.insertBefore(ft(),i),i,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends Ce{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gl(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Y}};var Li;at._$litElement$=!0,at.finalized=!0,(Li=globalThis.litElementHydrateSupport)==null||Li.call(globalThis,{LitElement:at});const Cr=globalThis.litElementPolyfillSupport;Cr==null||Cr({LitElement:at});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},or=t=>(...e)=>({_$litDirective$:t,values:e});class bt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wl={attribute:!0,type:String,converter:qt,reflect:!1,hasChanged:bn},vl=(t=wl,e,r)=>{const{kind:n,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(r.name,t),n==="accessor"){const{name:a}=r;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,t)},init(o){return o!==void 0&&this.P(a,void 0,t),o}}}if(n==="setter"){const{name:a}=r;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,t)}}throw Error("Unsupported decorator location: "+n)};function bl(t){return(e,r)=>typeof r=="object"?vl(t,e,r):((n,s,i)=>{const a=s.hasOwnProperty(i);return s.constructor.createProperty(i,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(s,i):void 0})(t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lr=or(class extends bt{constructor(t){var e;if(super(t),t.type!==Tn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(e)}const r=t.element.classList;for(const i of this.st)i in e||(r.remove(i),this.st.delete(i));for(const i in e){const a=!!e[i];a===this.st.has(i)||(s=this.nt)!=null&&s.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Y}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Yr extends bt{constructor(e){if(super(e),this.it=S,e.type!==Tn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===S||e==null)return this._t=void 0,this.it=e;if(e===Y)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Yr.directiveName="unsafeHTML",Yr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rs extends Yr{}rs.directiveName="unsafeSVG",rs.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Tl(t,e,r){return t?e(t):r==null?void 0:r(t)}class Ui extends at{}const El=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ur(t,e){return t?El.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Ee(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function $l(t){return!!t}const Sl={capitalizeFirstLetter:!1};function kl(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Al(t,e){return e.capitalizeFirstLetter?kl(t):t}function xl(t,e=Sl){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return Al(n,e)}var ns;(function(t){t.Upper="upper",t.Lower="lower"})(ns||(ns={}));var ss;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ss||(ss={}));function Ml(t){return!!(ur(t,"then")&&typeof t.then=="function")}function ji(t){return t?t instanceof Error?t.message:ur(t,"message")?String(t.message):String(t):""}function En(t){return t instanceof Error?t:new Error(ji(t))}function Ol(t,e){const r=En(t);return r.message=`${e}: ${r.message}`,r}function Kr(t){return!!t&&typeof t=="object"}function is({source:t,whitespace:e,errorHandler:r}){try{return JSON.stringify(t,void 0,e)}catch(n){if(r)return r(n);throw n}}const as="Failed to compare objects using JSON.stringify";function os(t,e,r){return is({source:t,errorHandler(n){if(r)return"";throw n}})===is({source:e,errorHandler(n){if(r)return"";throw n}})}function zi(t,e,r={}){try{return t===e?!0:Kr(t)&&Kr(e)?os(Object.keys(t).sort(),Object.keys(e).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(t).every(s=>zi(t[s],e[s])):!1:os(t,e,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const s=En(n);throw s.message.startsWith(as)||(s.message=`${as}: ${s.message}`),s}}function qi(t,e){let r=!1;const n=Ee(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(Ee(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function Jr(){let t,e,r=!1;const n=new Promise((s,i)=>{t=a=>(r=!0,s(a)),e=a=>{r=!0,i(a)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Jr.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function Cl(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Cl();function ls(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var Fe;(function(t){t.Upper="upper",t.Lower="lower"})(Fe||(Fe={}));function Nl(t){return t.toLowerCase()!==t.toUpperCase()}function us(t,e,r){if(!t&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<t.length;n++){const s=t[n]||"";if(!Nl(s)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(e===Fe.Upper&&s!==s.toUpperCase())return!1;if(e===Fe.Lower&&s!==s.toLowerCase())return!1}return!0}function Ll(t){return t.split("").reduce((r,n,s,i)=>{const a=s>0&&i[s-1]||"",o=s<i.length-1&&i[s+1]||"",l=us(a,Fe.Lower,{blockNoCaseCharacters:!0})||us(o,Fe.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||s===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}var cs;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(cs||(cs={}));function Pl(t){return!!t&&typeof t=="object"}function Il(t,e){let r=!1;const n=ls(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(ls(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function _l(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}_l();function je(t){if(Pl(t))return Il(t,(r,n)=>{if(!L(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Ll(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?Q(r):r.startsWith("-")?Ft`-${Q(r)}`:Ft`--${Q(r)}`;return{name:a,value:Ft`var(${a}, ${Q(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${je.name}' function.`)}function Dl(t,e,r){const n=!e.length&&!r.length,s=t.length?!1:!e.filter(o=>!!o.index).length;if(n||s)return[...t];const i=t.map(o=>[o]);return i.length||(i[0]=[]),r.forEach(o=>{o>=0&&o<t.length&&(i[o]=[])}),e.forEach(o=>{const l=i[o.index];l&&l.splice(0,0,...o.values)}),i.flat()}function Wt(t){return ur(t,"_elementVirIsMinimalDefinitionWithInputs")&&!!t._elementVirIsMinimalDefinitionWithInputs}function $n(t){return ur(t,"tagName")&&!!t.tagName&&typeof t.tagName=="string"&&t.tagName.includes("-")}function Bi(t){return t.map(e=>Wt(e)?e.definition:e).filter(e=>$n(e))}const Zi=new WeakMap;function Rl(t,e){var s;const r=Bi(e);return(s=Gi(Zi,[t,...r]).value)==null?void 0:s.template}function Hl(t,e,r){const n=Bi(e);return Ki(Zi,[t,...n],r)}function Gi(t,e,r=0){const{currentTemplateAndNested:n,reason:s}=Yi(t,e,r);return n?r===e.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Gi(n.nested,e,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:s}}function Yi(t,e,r){const n=e[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!t.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const s=t.get(n);return s==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:s,reason:"key and value exists"}}function Ki(t,e,r,n=0){const{currentTemplateAndNested:s,currentKey:i,reason:a}=Yi(t,e,n);if(!i)return{result:!1,reason:a};const o=s??{nested:void 0,template:void 0};if(s||t.set(i,o),n===e.length-1)return o.template=r,{result:!0,reason:"set value at end of keys array"};const l=o.nested??new WeakMap;return o.nested||(o.nested=l),Ki(l,e,r,n+1)}const Vl=new WeakMap;function Ji(t,e,r){const n=Rl(t,e),s=n??r();if(!n){const o=Hl(t,e,s);if(o.result)Vl.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=s.valuesTransform(e),a=Dl(e,i.valueInsertions,i.valueIndexDeletions);return{strings:s.templateStrings,values:a}}function Qi(t,e,r,n){const s=[],i=[],a=[],o=[];return t.forEach((u,c)=>{const d=s.length-1,f=s[d],h=c-1,w=e[h];n&&n(u);let T,M=[];if(typeof f=="string"&&(T=r(f,u,w),T)){s[d]=f+T.replacement,a.push(h);const V=T.getExtraValues;M=V?V(w):[],M.length&&V?(s[d]+=" ",M.forEach((ue,Je)=>{Je&&s.push(" ")}),o.push(ue=>{const Je=ue[h],Mt=V(Je);return{index:h,values:Mt}}),s.push(u)):s[d]+=u}T||s.push(u);const _=t.raw[c];T?(i[d]=i[d]+T.replacement+_,M.length&&M.forEach(()=>{i.push("")})):i.push(_)}),{templateStrings:Object.assign([],s,{raw:i}),valuesTransform(u){const c=o.map(d=>d(u)).flat();return{valueIndexDeletions:a,valueInsertions:c}}}}function Fl(...[t,e,r]){if($n(r))return{replacement:r.tagName,getExtraValues:void 0}}function Wl(t,e){return Qi(t,e,Fl)}function A(t,...e){const r=Ji(t,e,()=>Wl(t,e));return Ft(r.strings,...r.values)}const Ul={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Xi(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const r=e.host;return r instanceof Ui?!0:Xi(r)}function ea(t,e){const r=t.instanceState;Ee(e).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),"instanceInputs"in t&&Ee(t.instanceInputs).forEach(n=>{n in e||(t.instanceInputs[n]=void 0)}),jl(t)}function jl(t){t._haveInputsBeenSet||(t._haveInputsBeenSet=!0)}function ds(t,e){const r=[t,"-"].join("");Object.keys(e).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${t}': CSS property names must begin with the element's tag name.`)})}class zl extends CustomEvent{get type(){return this._type}constructor(e,r){super(typeof e=="string"?e:e.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function Sn(){return t=>{var e;return e=class extends zl{constructor(r){super(t,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:t})}},Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}}function le(){return Sn()}function ql(t,e){return e?Object.keys(e).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const s=Sn()([t,n].join("-"));return r[n]=s,r},{}):{}}const Bl="_elementVirStateSetup";function Zl(t){return Kr(t)?Bl in t:!1}const Gl=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ot(t,e){return t?Gl.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function $e(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Yl(t){return $e(t).map(e=>t[e])}function Kl(t,e){return t.includes(e)}function Jl(t){return!!t}var fs;(function(t){t.Upper="upper",t.Lower="lower"})(fs||(fs={}));var hs;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(hs||(hs={}));function Ql(t){return t?t.map(ta).filter(Jl).join(`
`):""}function ta(t){return t?t instanceof Error?t.message:ot(t,"message")?String(t.message):String(t):""}function We(t){return!!t&&typeof t=="object"}function ra(t,e){let r=!1;const n=$e(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all($e(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function Xl(t,e){try{return eu(t,e),!0}catch{return!1}}function eu(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function tu(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}tu();function ru(t,e){var o;const r=e==null?void 0:e.constructor,n=(o=t==null?void 0:t.constructor)==null?void 0:o.prototype,s=(t==null?void 0:t.constructor)===r,i=r&&n?n instanceof r:!1,a=s||i;return zt(t)===zt(e)&&a}const na="__vir__shape__definition__key__do__not__use__in__actual__objects";function sa(t){return ot(t,na)}const kn=Symbol("and"),An=Symbol("instance"),xn=Symbol("enum"),ia=Symbol("exact"),Mn=Symbol("indexed-keys"),On=Symbol("or"),Cn=Symbol("unknown"),nu=[kn,xn,ia,Mn,An,On,Cn],aa="__vir__shape__specifier__key__do__not__use__in__actual__objects";function su(...t){return ze(t,kn)}function Qr(...t){return ze(t,An)}function Zt(...t){return ze(t,xn)}function lt(...t){return ze(t,Mn)}function ut(...t){return ze(t,On)}function iu(t){return ze([t],Cn)}function cr(t){return Se(t,kn)}function dr(t){return Se(t,An)}function fr(t){return Se(t,xn)}function hr(t){return Se(t,ia)}function mr(t){return Se(t,Mn)}function Tt(t){return Se(t,On)}function pr(t){return Se(t,Cn)}function Se(t,e){const r=Et(t);return!!r&&r.specifierType===e}function ze(t,e){return{[aa]:!0,specifierType:e,parts:t}}function pe(t,e,r,n){const s=Et(e);if(s){if(dr(s))return t instanceof s.parts[0];if(cr(s))return s.parts.every(i=>pe(t,i));if(Tt(s))return s.parts.some(i=>pe(t,i));if(hr(s))return We(t)?pe(t,s.parts[0]):t===s.parts[0];if(fr(s))return Object.values(s.parts[0]).some(i=>i===t);if(mr(s))return We(t)?au(t,s,!!r)&&Yl(t).every(i=>pe(i,s.parts[0].values)):!1;if(pr(s))return!0}return n?e===t:ru(t,e)}function au(t,e,r){const n=e.parts[0].required,s=e.parts[0].keys;if(r)if(n){const i=Nn(e);return L(i,"boolean")?i:i.every(a=>$e(t).some(o=>pe(o,a,!1,!0)))}else return!0;else return $e(t).every(i=>pe(i,s))}function Nn(t){const e=t.parts[0].keys,r=Et(e);if(Ar(e))return[e];if(r){if(dr(r))return!1;if(cr(r))return!1;if(Tt(r)){const n=r.parts.map(i=>Nn(lt({...t.parts[0],keys:i})));let s;return n.forEach(i=>{L(i,"boolean")&&(i&&s==null?s=!0:s=!1)}),L(s,"boolean")?s:n.flat().filter(Ar)}else if(hr(r)){const n=r.parts.filter(Ar);return n.length!==r.parts.length?!1:n}else{if(fr(r))return Object.values(r.parts[0]);if(mr(r))return!1;if(pr(r))return!0}}return!1}function Et(t){if(We(t)&&ot(t,aa)){if(!ot(t,"parts")||!L(t.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!ot(t,"specifierType")||!Kl(nu,t.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return t}}class ms extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function Xr(t,e=!1){return rt(t)}function rt(t){const e=Et(t);if(e)if(dr(e)){const r=e.parts[0];try{return new r}catch(n){throw new ms(`Failed to create default value for classShape for class '${r.name}': ${ta(n)}`)}}else{if(Tt(e)||hr(e))return rt(e.parts[0]);if(cr(e))return e.parts.reduce((r,n)=>Object.assign(r,rt(n)),{});if(fr(e))return Object.values(e.parts[0])[0];if(mr(e)){const r=Nn(e);return!e.parts[0].required||L(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,rt(e.parts[0].values)]))}else{if(pr(e))return e.parts[0]??{};throw new ms(`found specifier but it matches no expected specifiers: ${String(e.specifierType)}`)}}return sa(t)?Xr(t.shape):t instanceof RegExp?t:L(t,"array")?t.map(rt):We(t)?ra(t,(r,n)=>Xr(n)):t}function z(t,e=!1){return{shape:t,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:e,get defaultValue(){return Xr(t)},[na]:!0}}class W extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function oa(t,e,r={}){try{return la(t,e,r),!0}catch{return!1}}function la(t,e,r={}){J({subject:t,shape:e.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}function en(t){return[t[0],...t.slice(1).map(e=>`'${String(e)}'`)].join(" -> ")}function J({subject:t,shape:e,keys:r,options:n}){if(pr(e))return!0;if(sa(e))return J({subject:t,shape:e.shape,keys:r,options:n});const s=en(r);if(Et(t))throw new W(`Shape test subjects cannot be contain shape specifiers but one was found at ${s}.`);if(!pe(t,e,!n.ignoreExtraKeys))throw new W(`Subject does not match shape definition at key ${s}`);if(L(e,"function"))return L(t,"function");if(dr(e))return t instanceof e.parts[0];if(We(t)){const a=t,o=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1])),l=[];let u=!1;if(Tt(e)){const c=[];u=e.parts.some(d=>{try{const f=J({subject:t,shape:d,keys:r,options:{...n}});return Object.assign(o,f),!0}catch(f){if(f instanceof W)return c.push(f),!1;throw f}}),!u&&Xl(c,1)&&l.push(c[0])}else if(cr(e))u=e.parts.every(c=>{try{const d=J({subject:t,shape:c,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(o,d),!0}catch(d){if(d instanceof W)return l.push(d),!1;throw d}});else if(hr(e)){const c=J({subject:t,shape:e.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(o,c),u=!0}else{if(fr(e))throw new W(`Cannot compare an enum specifier to an object at ${s}`);if(L(e,"array")&&L(a,"array"))u=a.every((c,d)=>{const f=e.some(h=>{try{return J({subject:c,shape:h,keys:[...r,d],options:n}),!0}catch(w){if(w instanceof W)return l.push(w),!1;throw w}});return o[d]=f,f});else if(mr(e)){const c=ra(t,(d,f)=>(n.ignoreExtraKeys||J({shape:e.parts[0].keys,subject:d,keys:[...r,d],options:n}),J({shape:e.parts[0].values,subject:f,keys:[...r,d],options:n}),!0));Object.assign(o,c),u=!0}else{const c=ou({keys:r,options:n,shape:e,subject:t});Object.assign(o,c),u=!0}}if(l.length)throw new W(Ql(l));if(!u){const d=`Failed on key(s): ${Object.keys(o).filter(f=>!o[f]).map(f=>en([...r,f])).join(",")}`;throw new W(d)}return n.ignoreExtraKeys||Object.entries(o).forEach(([c,d])=>{if(!d)throw new W(`subject as extra key '${c}' in ${s}.`)}),o}else if(n.exactValues)return t===e;return!0}function ou({keys:t,options:e,shape:r,subject:n}){const s=en(t),i={};if(We(r)){const a=new Set($e(r)),o=new Set($e(n));a.forEach(l=>{l in n&&o.add(l)}),e.ignoreExtraKeys||o.forEach(l=>{if(!a.has(l))throw new W(`Subject has extra key '${String(l)}' in ${s}`)}),a.forEach(l=>{var f;const u=r[l],c=Tt(u)?u.parts.includes(void 0):!1,d=((f=u==null?void 0:u.includes)==null?void 0:f.call(u,void 0))||u===void 0;if(!o.has(l)&&!c&&!d)throw new W(`Subject missing key '${String(l)}' in ${s}`)}),o.forEach(l=>{const u=n[l];if(e.ignoreExtraKeys&&!a.has(l))return;const c=r[l];J({subject:u,shape:c,keys:[...t,l],options:e}),i[l]=!0})}else throw new W(`shape definition at ${s} was not an object.`);return i}const lu=z({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:iu()});function Nr(t){return oa(t,lu,{allowExtraKeys:!0})}function ua(t,e){e in t||bl()(t,e)}function uu(t,e,r){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${r.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${r.toLowerCase()}'.`)}function ps(t,e){const r=t;function n(a){e?uu(a,t,t.tagName):ua(t,a)}function s(a,o){return n(o),r[o]}return new Proxy({},{get:s,set(a,o,l){const u=Zl(l)?l._elementVirStateSetup():l;n(o);const c=r[o];function d(h){a[o]=h,r[o]=h}const f=t.observablePropertyListenerMap[o];if(c!==u&&Nr(c)&&(f!=null&&f.length)&&c.removeListener(f),Nr(u))if(f)u.addListener(f);else{let h=function(){t.requestUpdate()};t.observablePropertyListenerMap[o]=h,u.addListener(h)}else Nr(c)&&(t.observablePropertyListenerMap[o]=void 0);return d(u),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,o){if(o in a)return{get value(){return s(a,o)},configurable:!0,enumerable:!0}},has(a,o){return Reflect.has(a,o)}})}function cu(t){return t?qi(t,e=>e):{}}function du({hostClassNames:t,cssVars:e}){return{hostClasses:qi(t,(r,n)=>({name:Q(n),selector:Q(`:host(.${n})`)})),cssVars:e}}function fu({host:t,hostClassesInit:e,hostClassNames:r,state:n,inputs:s}){e&&Ee(e).forEach(i=>{const a=e[i],o=r[i];typeof a=="function"&&(a({state:n,inputs:s})?t.classList.add(o):t.classList.remove(o))})}function hu({element:t,eventsMap:e,cssVars:r,slotNamesMap:n}){function s(a){Ee(a).forEach(o=>{const l=a[o];t.instanceState[o]=l})}return{cssVars:r,slotNames:n,dispatch:a=>t.dispatchEvent(a),events:e,host:t,inputs:t.instanceInputs,state:t.instanceState,updateState:s}}function mu(t){return t?t.reduce((r,n)=>(r[n]=n,r),{}):{}}var pu=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function $t(t){var e;const r=t;if(!L(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!L(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...Ul,...r.options},s=ql(r.tagName,r.events),i=cu(r.hostClasses);r.hostClasses&&ds(r.tagName,r.hostClasses),r.cssVars&&ds(r.tagName,r.cssVars);const a=r.cssVars?je(r.cssVars):{},o=mu(r.slotNames),l=typeof r.styles=="function"?r.styles(du({hostClassNames:i,cssVars:a})):r.styles||A``,u=r.renderCallback;function c(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=(e=class extends Ui{createRenderParams(){return hu({element:this,eventsMap:s,cssVars:a,slotNamesMap:o})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Xi(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${$t.name}' to define ${r.tagName}.`),this._hasRendered=!0;const f=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(f)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const h=u(f);if(h instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return fu({host:f.host,hostClassesInit:r.hostClasses,hostClassNames:i,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=Ol(f,`Failed to render ${r.tagName}`);return console.error(h),this._lastRenderError=h,ji(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const f=this.createRenderParams();if(r.initCallback(f)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const f=this.createRenderParams();if(r.cleanupCallback(f)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(f){ea(this,f)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:ps(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:ps(this,!n.allowPolymorphicState)});const f=r.stateInitStatic||{};Ee(f).forEach(h=>{ua(this,h),this.instanceState[h]=f[h]}),this.definition=d}},pu(e,"anonymousClass"),Object.defineProperty(e,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(e,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(e,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(e,"assign",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(e,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(e,"events",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(e,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(e,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(e,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(e,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(e,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(e,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),e);return Object.defineProperties(d,{name:{value:xl(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:f=>f instanceof d,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,d),d}function K(){return t=>{const e=t;if(!L(e,"object"))throw new Error("Cannot define element with non-object init: ${init}");return $t({...e,options:{ignoreUnsetInputs:!1,...e.options}})}}function yu(t,e){return t===e}function gu(t,e=yu){const r=new Set;function n(){r.forEach(a=>a(i.value))}function s(a){return r.delete(a)}const i={value:t,setValue(a){e(i.value,a)||(i.value=a,n())},addListener(a){return!r.has(a)&&r.add(a),()=>s(a)},removeListener:s,destroy(){r.clear()}};return i}const Lr=Symbol("not set");function wu(t){let e=Lr,r;const n=t&&"updateCallback"in t?t.updateCallback:void 0;let s=Jr();const i=gu(s.promise);function a(){s=Jr(),i.setValue(s.promise)}function o(T){s.resolve(T),i.setValue(T),h.latestResolvedValue=T}function l(T){s.reject(T),i.setValue(T)}function u(T){T!==r&&(r=T,s.isSettled()&&a(),T.then(M=>{r===T&&o(M)}).catch(M=>{if(r===T){s.promise.catch(()=>{});const _=En(M);console.error(_),l(_)}}))}function c(T,M){if(!n)throw console.error(t),new Error("Trigger was updated for asyncProp but no updateCallback has been defined.");const _={...T},V={...M};if(e===Lr||!zi(_,e,{ignoreNonSerializableProperties:!0})){e=_;const ue=n(e,V);u(ue)}}function d(T,M){e=Lr,c(T,M)}const f={latestResolvedValue:t&&"defaultValue"in t&&!Zr(t.defaultValue)?t.defaultValue:void 0,setNewPromise(T){u(T)},setResolvedValue(T){T!==i.value&&(s.isSettled()&&a(),s.resolve(T),o(T))},updateTrigger:n?c:()=>{throw new Error("Cannot run updateTrigger when updateCallback was not set on the asyncProp.")},forceUpdate:n?d:()=>{throw new Error("Cannot run forceUpdate when updateCallback was not set on the asyncProp.")}},h=Object.assign(i,f),w=t&&"defaultValue"in t?t.defaultValue:new Promise(()=>{});return w instanceof Promise?u(w):o(w),Zr(w)?u(w):o(w),h}function ys(...t){return{_elementVirStateSetup(){return wu(...t)}}}function ca(t,e){return tn(t,e),t.element}function vu(t){try{return t.options.host.tagName.toLowerCase()}catch{return}}function tn(t,e){const r=vu(t),n=r?`: in ${r}`:"";if(t.type!==Tn.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element${n}.`);if(!t.element)throw new Error(`${e} directive found no element${n}.`)}function gs(t){return!Ml(t)}function Gt(t){return t instanceof Error}function I(t,e){return bu(t,e)}const bu=or(class extends bt{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=ca(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(t,e){const r=typeof t=="string"?t:t.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(r,e)),Y}}),Pr="onResize",da=or(class extends bt{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(e=>this.fireCallback(e))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),tn(t,Pr)}fireCallback(t){var r;const e=t[0];if(!e)throw console.error(t),new Error(`${Pr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:e.target,contentRect:e.contentRect},this.element)}update(t,[e]){tn(t,Pr),this.callback=e;const r=t.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(e)}render(t){}});function _e(t,e,r){return Tl(t,()=>e,()=>r)}function Tu(t){const{assertInputs:e,transformInputs:r}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(n=>n)};return{defineElement:()=>n=>(e(n),K()(r(n))),defineElementNoInputs:n=>(e(n),$t(r(n)))}}function Eu(t,e){return e?ws(t,e):ws(void 0,t)}const ws=or(class extends bt{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=ca(t,"assign")}render(t,e){return ea(this.element,e),Y}});function $u(...[t,e,r]){const n=Wt(r)?r.definition:r,s=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/),i=(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),a=s||i,o=$n(n);if(a&&!o)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);if(!a||!o)return;if(s&&!n.elementOptions.ignoreUnsetInputs&&!Wt(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(u){const c=Wt(u)?u.inputs:void 0;return[s&&c?Eu(c):void 0].filter($l)}}}function Su(t){}function ku(t){return Qi(t.strings,t.values,$u,Su)}function p(t,...e){const r=cl(t,...e),n=Ji(t,e,()=>ku(r));return{...r,strings:n.strings,values:n.values}}const vs="vira-",{defineElement:qe,defineElementNoInputs:hh}=Tu({assertInputs:t=>{if(!t.tagName.startsWith(vs))throw new Error(`Tag name should start with '${vs}' but got '${t.tagName}'`)}});var bs;(function(t){t.Upper="upper",t.Lower="lower"})(bs||(bs={}));var Ts;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ts||(Ts={}));function fa(){let t,e,r=!1;const n=new Promise((s,i)=>{t=a=>(r=!0,s(a)),e=a=>{r=!0,i(a)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${fa.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function Es(t){const e=fa();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function Au(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Au();const xu="px";function Mu(t){return Ou({value:t,suffix:xu})}function Ou({value:t,suffix:e}){return String(t).endsWith(e)?String(t):`${String(t)}${e}`}const ha=A`
    pointer-events: none;
    opacity: 0.3;
`,we=je({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Yt=je({"vira-form-input-border-radius":"8px"}),Kt=je({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":A`calc(${Yt["vira-form-input-border-radius"].value} + 4px)`});function ma({mainSelector:t,elementBorderSize:e,outlineGap:r=2,outlineWidth:n=3}){const s=Q(Mu(n+r+e));return A`
        ${Q(t)}::after {
            content: '';
            top: calc(${s} * -1);
            left: calc(${s} * -1);
            position: absolute;
            width: calc(100% + calc(${s} * 2));
            height: calc(100% + calc(${s} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Kt["vira-focus-outline-color"].value};
            border-radius: ${Kt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Jt=A`
    padding: 0;
    margin: 0;
`,ie=A`
    ${Jt};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,rn=A`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,x=qe()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>A`
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
    `,renderCallback({inputs:t}){return t.icon?t.icon.svgTemplate:""}});var pt;(function(t){t.Default="vira-button-default",t.Outline="vira-button-outline"})(pt||(pt={}));const Ne=qe()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:t})=>t.buttonStyle===pt.Outline,"vira-button-disabled":({inputs:t})=>!!t.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:t,cssVars:e})=>A`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${rn};
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-color"].value};
            ${e["vira-button-internal-foreground-color"].name}: ${e["vira-button-secondary-color"].value};
            ${Kt["vira-focus-outline-color"].name}: ${e["vira-button-primary-hover-color"].value}
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
            ${ha};
        }

        ${t["vira-button-outline-style"].selector} button {
            color: ${e["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${ie};
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
            border-radius: ${Yt["vira-form-input-border-radius"].value};
            background-color: ${e["vira-button-internal-background-color"].value};
            color: ${e["vira-button-internal-foreground-color"].value};
            padding: ${e["vira-button-padding"].value};
            transition:
                color ${we["vira-interaction-animation-duration"].value},
                background-color
                    ${we["vira-interaction-animation-duration"].value},
                border-color ${we["vira-interaction-animation-duration"].value};
        }

        ${ma({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${x} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?p`
                  <${x.assign({icon:t.icon})}></${x}>
              `:"",r=t.text?p`
                  <span class="text-template">${t.text}</span>
              `:"";return p`
            <button ?disabled=${t.disabled}>${e} ${r}</button>
        `}});var nn;(function(t){t.Header="header"})(nn||(nn={}));qe()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:t})=>t.expanded},styles:({hostClasses:t})=>A`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${ie};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${we["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${t["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:le()},stateInitStatic:{contentHeight:0},renderCallback({state:t,updateState:e,dispatch:r,events:n,inputs:s}){const i=s.expanded?A`
                  height: ${t.contentHeight}px;
              `:A`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${I("click",()=>{r(new n.expandChange(!s.expanded))})}
            >
                <slot name=${nn.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${da(({contentRect:a})=>{e({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const b=je({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function ee({name:t,svgTemplate:e}){return{name:t,svgTemplate:e}}const pa=ee({name:"CloseX24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ee({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ee({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Cu=ee({name:"Loader24Icon",svgTemplate:p`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Nu=A`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${we["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Qt=ee({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${Nu}
        </style>
        ${Cu.svgTemplate}
    `});ee({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${b["vira-icon-stroke-color"].value}"
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Xt=ee({name:"StatusFailure24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),$s=ee({name:"StatusInProgress24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${b["vira-icon-stroke-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width="calc(${b["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${b["vira-icon-stroke-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width="calc(${b["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${b["vira-icon-stroke-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width="calc(${b["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),ya=ee({name:"StatusSuccess24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var er;(function(t){t.Loading="loading",t.Error="error"})(er||(er={}));const Ir=qe()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:t})=>t.dominantDimension==="height"},events:{imageLoad:le(),imageError:le()},styles:({hostClasses:t})=>A`
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
                  <slot class="status-wrapper" name=${er.Error}>
                      <${x.assign({icon:Xt})} class="error"></${x}>
                  </slot>
              `:e.loadedUrls[i]?void 0:p`
                    <slot class="status-wrapper" name=${er.Loading}>
                        <${x.assign({icon:Qt})}></${x}>
                    </slot>
                `;return p`
            ${_e(!!a,a)}
            <img
                class=${lr({hidden:!!a})}
                ${I("load",async()=>{t._debugLoadDelay&&await Es(t._debugLoadDelay.milliseconds),r({loadedUrls:{...e.loadedUrls,[i]:!0}}),n(new s.imageLoad)})}
                ${I("error",async o=>{t._debugLoadDelay&&await Es(t._debugLoadDelay.milliseconds),r({erroredUrls:{...e.erroredUrls,[i]:!0}}),n(new s.imageError(o.error))})}
                src=${i}
            />
        `}});var Ss;(function(t){t.Upper="upper",t.Lower="lower"})(Ss||(Ss={}));var ks;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ks||(ks={}));function Lu(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Lu();const Pu={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},Iu=Object.keys(Pu);var As;(function(t){t.Upper="upper",t.Lower="lower"})(As||(As={}));var xs;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(xs||(xs={}));function _u(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}_u();const Du=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...Iu,...Du];function Ru(t,e){const r=t.currentTarget;if(!(r instanceof e))throw new Error(`Target from event '${t.type}' was not of type '${e.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function sn({input:t,matcher:e}){return!t||!e?!0:t.length>1?!!t.split("").every(r=>sn({input:r,matcher:e})):e instanceof RegExp?!!t.match(e):e.includes(t)}function ga({value:t,allowed:e,blocked:r}){const n=e?sn({input:t,matcher:e}):!0,s=r?sn({input:t,matcher:r}):!1;return n&&!s}function wa(t){if(!t.value)return{filtered:t.value,blocked:""};const{filtered:e,blocked:r}=t.value.split("").reduce((n,s)=>(ga({...t,value:s})?n.filtered.push(s):n.blocked.push(s),n),{filtered:[],blocked:[]});return{filtered:e.join(""),blocked:r.join("")}}function Hu({inputs:t,filteredValue:e,event:r,inputBlockedCallback:n,newValueCallback:s}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=Ru(r,HTMLInputElement),a=r.data,o=e;let l=i.value??"";if(a)if(a.length===1)ga({value:a,allowed:t.allowedInputs,blocked:t.blockedInputs})||(l=o,n(a));else{const{filtered:u,blocked:c}=wa({value:a,allowed:t.allowedInputs,blocked:t.blockedInputs});l=u,n(c)}i.value!==l&&(i.value=l),o!==l&&s(l)}const Ae=qe()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:t})=>!!t.disabled,"vira-input-fit-text":({inputs:t})=>!!t.fitText,"vira-input-clear-button-shown":({inputs:t})=>!!t.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:le(),inputBlocked:le()},styles:({hostClasses:t,cssVars:e})=>A`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Kt["vira-focus-outline-color"].name}: ${e["vira-input-focus-border-color"].value};
                color: ${e["vira-input-text-color"].value};
            }

            ${t["vira-input-disabled"].selector} {
                ${ha};
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
                ${ie};
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
                ${rn};
                vertical-align: middle;
                max-height: 100%;
            }

            ${t["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${ie};
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
                border-radius: ${Yt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${e["vira-input-border-color"].value};
                transition: border
                    ${we["vira-interaction-animation-duration"].value};
            }

            label {
                ${ie};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${e["vira-input-padding-horizontal"].value};
                border-radius: ${Yt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${ma({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${e["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${ie};
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
                ${rn};
            }

            .close-x-button {
                ${ie};
                color: ${e["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${we["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${e["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${e["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:t,dispatch:e,state:r,updateState:n,events:s})=>{const{filtered:i}=wa({value:t.value??"",allowed:t.allowedInputs,blocked:t.blockedInputs}),a=t.icon?p`
                  <${x.assign({icon:t.icon})} class="left-side-icon"></${x}>
              `:"",o=t.fitText?A`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${a}
                ${_e(!!t.fitText,p`
                        <span
                            class="size-span"
                            ${da(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${i||t.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    style=${o}
                    autocomplete=${t.disableBrowserHelps?"off":""}
                    autocorrect=${t.disableBrowserHelps?"off":""}
                    autocapitalize=${t.disableBrowserHelps?"off":""}
                    spellcheck=${t.disableBrowserHelps?"false":""}
                    ?disabled=${t.disabled}
                    .value=${i}
                    ${I("input",l=>{Hu({inputs:t,filteredValue:i,event:l,inputBlockedCallback(u){e(new s.inputBlocked(u))},newValueCallback(u){e(new s.valueChange(u))}})})}
                    placeholder=${t.placeholder}
                />
                ${_e(!!(t.showClearButton&&t.value),p`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${I("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),e(new s.valueChange(""))})}
                        >
                            <${x.assign({icon:pa})}></${x}>
                        </button>
                    `)}
                ${_e(!!t.suffix,p`
                        <div class="suffix">${t.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),Vu=0;function va(t){return!(t.type!=="click"||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.button!==Vu)}function Fu(t,e,r){va(t)&&(t.preventDefault(),r.setRoutes(e))}class yr extends Error{constructor(e){super(e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class Ms extends yr{constructor(e){super(e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WindowEventConsolidationError"})}}const yt="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Wu=globalThis.history.pushState;function Os(...t){const e=Wu.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(yt)),e}const Uu=globalThis.history.replaceState;function Cs(...t){const e=Uu.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(yt)),e}function ju(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Os)throw new Ms("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Cs)throw new Ms("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Os,globalThis.history.replaceState=Cs,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(yt))})}}const zu=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function tr(t,e){return t?zu.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Ns(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function gr(t){return!!t}var Ls;(function(t){t.Upper="upper",t.Lower="lower"})(Ls||(Ls={}));function qu(t,e){return t.split(e)}var Ps;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ps||(Ps={}));function Bu(t){return t?t instanceof Error?t.message:tr(t,"message")?String(t.message):String(t):""}function Zu(t){return!!t&&typeof t=="object"}function ba(t,e,r=!1,n={}){const s=Ns(t),i=new Set(Ns(e));if(!r){const a=s.filter(o=>!i.has(o));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!tr(t,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function o(c){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${c}`)}const l=t[a],u=e[a];n[a]||Ta(l,u,o,r,n[a]??{})})}function Ta(t,e,r,n,s){var o;const i=typeof t,a=typeof e;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{tr(e,"constructor")&&(!tr(t,"constructor")||t.constructor!==e.constructor)&&r(`constructor "${(o=t==null?void 0:t.constructor)==null?void 0:o.name}" did not match expected constructor "${e.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(e)?(Array.isArray(t)||r("expected an array"),t.forEach((l,u)=>{if(e.map(d=>{try{Ta(l,d,r,n,s);return}catch(f){return new Error(`entry at index "${u}" did not match expected shape: ${Bu(f)}`)}}).filter(gr).length===e.length)throw new Error(`entry at index "${u}" did not match any of the possible types from "${e.join(", ")}"`)})):Zu(e)&&ba(t,e,n,s)}function Gu(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Gu();function Yu({value:t,prefix:e}){return t.startsWith(e)?t.substring(e.length):t}function Ku(t){const e=Object.entries(t).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(gr);return e.length?`?${e.join("&")}`:""}function Ju(t){return Yu({value:t,prefix:"?"}).split("&").map(n=>{const[s,...i]=qu(n,"="),a=i.join("");if(!(!a&&!s))return[s,a]}).filter(gr)}function Qu(t,e){const r=L(t,"string")?new URL(t):t,n=Ju(r.search),s=Object.fromEntries(n);return e&&ba(s,e),s}function Xu(t){const e=`/${t}`,n=(t&&globalThis.location.pathname.startsWith(e)?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(a=>!!a),s=globalThis.location.search?Qu(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:s,hash:i}}function Ea(t){return t.replace(/(?:^\/|\/+$)/g,"")}function $a({routeBase:t,windowPath:e}){if(!t)return"";const r=Ea(t);if(Sa({routeBase:r,windowPath:e}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?$a({routeBase:n,windowPath:e}):""}function Sa({routeBase:t,windowPath:e}){const r=Ea(t);return r?e.startsWith(`/${r}`):!1}class ec extends yr{constructor(e){super(e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}function ka(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const r=Object.entries(t.search).join(" "),n=Object.entries(e.search).join(" ");if(r!==n)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const Is=6;function _s(t,e){const r=t.getCurrentRawRoutes();if(t.sanitizationDepth>Is)throw new ec(`Route sanitization depth has exceed the max of ${Is} with ${JSON.stringify(r)}`);const n=t.sanitizeFullRoute(r);if(ka(n,r))t.sanitizationDepth=0,e?e(n):t.listeners.forEach(s=>{s(n)});else return t.sanitizationDepth++,t.setRoutes(n,!0)}class _r extends yr{constructor(e){super(e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRouterInitParamsError"})}}function tc(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new _r(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new _r(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new _r(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function rc(t,e,r=!1){const n=Aa(t,e);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Aa(t,e){var o;const r=Sa({routeBase:e,windowPath:globalThis.location.pathname})?e:"",n=t.search?Ku(t.search):"",s=(o=t.hash)!=null&&o.startsWith("#")?"":"#",i=t.hash?`${s}${t.hash}`:"";return`/${[r,...t.paths].filter(gr).join("/")}${n}${i}`}function nc(t={}){tc(t),ju();const e=t.routeBase?$a({routeBase:t.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>_s(s),s={listeners:new Set,initParams:t,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes(i,a=!1,o=!1){const l=s.getCurrentRawRoutes(),u={...l,...i},c=s.sanitizeFullRoute(u);if(!(!o&&ka(l,c)))return rc(c,e,a)},createRoutesUrl(i){return Aa(i,e)},getCurrentRawRoutes(){return Xu(e)},removeAllRouteListeners(){s.listeners.forEach(i=>s.removeRouteListener(i))},addRouteListener(i,a){if(t.maxListenerCount&&s.listeners.size>=t.maxListenerCount)throw new yr(`Tried to exceed route listener max of '${t.maxListenerCount}'.`);return s.listeners.add(a),r||(globalThis.addEventListener(yt,n),r=!0),i&&_s(s,a),a},hasRouteListener(i){return s.listeners.has(i)},removeRouteListener(i){const a=s.listeners.delete(i);return s.listeners.size||(globalThis.removeEventListener(yt,n),r=!1),a},sanitizationDepth:0};return s}qe()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:t})=>A`
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
    `,events:{routeChange:le()},renderCallback({inputs:t,dispatch:e,events:r}){var s,i;function n(a){t.route&&va(a)&&(a.preventDefault(),t.route.scrollToTop&&window.scrollTo(0,0),e(new r.routeChange(t.route.route)))}if((s=t.link)!=null&&s.newTab)return p`
                <a href=${t.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=t.link?t.link.url:(i=t.route)==null?void 0:i.router.createRoutesUrl(t.route.route);return p`
                <a href=${a} rel="noopener noreferrer" ${I("click",n)}>
                    <slot></slot>
                </a>
            `}}});var Be=(t=>(t.Github="github",t))(Be||{});const sc=z({authTokenName:"",authTokenSecret:""},!0),xa=z(lt({keys:Zt(Be),values:[sc],required:!1}),!0);class an extends Error{constructor(r,n,s){super(`${r} at index '${s}' in service '${n}'`);Wn(this,"name","AuthTokenValidationError");this.serviceName=n,this.authTokenIndex=s}}function ic(t){la(t,xa),yn(t).forEach(e=>{const r=t[e];r==null||r.forEach((n,s)=>{if(n.authTokenName){if(!n.authTokenSecret)throw new an("Empty auth token secret",e,s)}else throw new an("Empty auth token name",e,s)})})}const Ot=typeof{}>"u"?void 0:{},ac="6rbd4mt4p4ve83gfijfcpxaoehmrux53",Ds={devAuthTokens:oa(Ot==null?void 0:Ot.authTokens,xa)?Ot.authTokens:{},encryptionKey:ac};var ve=(t=>(t.Auth="auth",t.PullRequests="pull-requests",t))(ve||{});const gt={hash:void 0,paths:["pull-requests"],search:void 0};function oc(){return nc({routeBase:"review-vir",routeSanitizer(t){return{paths:lc(t.paths),hash:void 0,search:void 0}}})}function lc(t){const e=t[0];return Yo(e,ve)?[e]:gt.paths}const uc="modulepreload",cc=function(t){return"/review-vir/"+t},Rs={},Hs=function(e,r,n){if(!r||r.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=cc(i),i in Rs)return;Rs[i]=!0;const a=i.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!n)for(let c=s.length-1;c>=0;c--){const d=s[c];if(d.href===i&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":uc,a||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),a)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},dc=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function fc(t,e){return t?dc.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Vs(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var Fs;(function(t){t.Upper="upper",t.Lower="lower"})(Fs||(Fs={}));var Ws;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ws||(Ws={}));function hc(t){return!!t&&typeof t=="object"}function mc(t,e){let r=!1;const n=Vs(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(Vs(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function pc(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}pc();function yc(t){return hc(t)&&fc(t,"liveClient")&&L(t.liveClient,"function")}function mh(t){return{liveClient(){return typeof t=="function"?t():t}}}const gc=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function wc(t,e){return t?gc.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function vc(t,e){return t.includes(e)}var Us;(function(t){t.Upper="upper",t.Lower="lower"})(Us||(Us={}));var js;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(js||(js={}));function bc(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}bc();const Tc=Symbol("set-mock-return-value"),Dr=Symbol("get-last-called-args"),Ec=["then","catch","finally"];function Ma(){const t={},e=()=>{};function r(n){return n in t||(t[n]=Ma()),t[n]}return new Proxy(e,{get:(n,s)=>s===Dr?t[Dr]:vc(Ec,s)&&!wc(t,s)?void 0:r(s),apply:(n,s,i)=>(t[Dr]=i,r(Tc)),set:(n,s,i)=>(t[s]=i,!0),has(n,s){return s in t}})}async function $c(t,e){const r=await t(),n=Object.values(r).find(yc);if(!n)throw new Error(`Failed to find any client definitions exported for client '${e}'`);return await n.liveClient()}function Sc({clientImports:t,isTestEnv:e,mockClients:r}){const n={};let s;return Object.entries(t).forEach(([i,a])=>{Object.defineProperty(n,i,{async get(){if(e){if(r&&(s||(s=typeof r=="function"?await r():r),s&&i in s)){const o=s[i];if(!o)throw new Error(`Mock client for '${i}' is not defined.`);return await o}return Ma()}else return await $c(a,i)}})}),n}async function kc(t){return mc(t,async(r,n)=>{try{return await n}catch(s){console.error(`Failed to await client '${String(r)}':`,s);return}})}const Ac=Sc({clientImports:{github:()=>Hs(()=>import("./github.client-b0889450.js"),["assets/github.client-b0889450.js","assets/index-f4dd668f.js"]),authStore:()=>Hs(()=>import("./auth-store.client-f9009aa6.js"),["assets/auth-store.client-f9009aa6.js","assets/index-f4dd668f.js"])},isTestEnv:!1});async function xc(){return kc(Ac)}const on=Sn()("change-route"),zs=K()({tagName:"vir-app-tabs",styles:A`
        :host {
            display: flex;
            border-bottom: 1px solid #ddd;
        }

        ol,
        li {
            ${Jt};
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
    `,renderCallback({inputs:t}){const e=Mc.map(r=>{const n={paths:r.paths,hash:void 0,search:void 0};return p`
                <li>
                    <a
                        href=${t.router.createRoutesUrl(n)}
                        ${I("click",s=>{Fu(s,n,t.router)})}
                    >
                        ${r.label}
                    </a>
                </li>
            `});return p`
            <ol>
                ${e}
            </ol>
        `}}),Mc=[{paths:[ve.PullRequests],label:"Pull Requests"},{paths:[ve.Auth],label:"Auth"}],Le=$t({tagName:"vir-error-message",styles:A`
        :host {
            color: red;
            font-weight: bold;
        }
    `,renderCallback(){return p`
            <slot></slot>
        `}}),Rr=K()({tagName:"vir-service-auth-token-entry",styles:A`
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
            ${Jt};
        }

        h2 {
            ${Jt};
        }

        .with-delete-wrapper {
            display: flex;
            gap: 16px;
            align-items: center;
        }

        .delete {
            ${ie};
            cursor: pointer;
        }

        .delete:hover {
            color: red;
        }
    `,events:{authTokensChange:le()},renderCallback({inputs:t,events:e,dispatch:r}){const n=t.authTokens.map((s,i)=>{var u;const o=((u=t.authTokenEntryError)==null?void 0:u.authTokenIndex)===i&&t.authTokenEntryError.serviceName===t.serviceName?p`
                      <${Le}>${t.authTokenEntryError.message}</${Le}>
                  `:S;function l(c,d){const f=zn(t.authTokens),h=f[i];if(!h)throw new Error("Failed to find auth token to edit");h[c]=d,r(new e.authTokensChange(f))}return p`
                <div class="auth-token-entry">
                    ${o}
                    <label>
                        <p>Token name</p>
                        <${Ae.assign({value:s.authTokenName})}
                            ${I(Ae.events.valueChange,c=>{l("authTokenName",c.detail)})}
                        ></${Ae}>
                    </label>
                    <label>
                        <p>Token Secret</p>
                        <div class="with-delete-wrapper">
                            <${Ae.assign({value:s.authTokenSecret})}
                                ${I(Ae.events.valueChange,c=>{l("authTokenSecret",c.detail)})}
                            ></${Ae}>
                            <button
                                class="delete"
                                ${I("click",()=>{const c=Uo(zn(t.authTokens),[i]);r(new e.authTokensChange(c))})}
                            >
                                <${x.assign({icon:pa})}></${x}>
                            </button>
                        </div>
                    </label>
                </div>
            `});return p`
            <h2>${t.serviceName}</h2>
            <section class="tokens">${n}</section>
            <${Ne.assign({text:"Add",buttonStyle:pt.Outline})}
                ${I("click",()=>{r(new e.authTokensChange(t.authTokens.concat({authTokenName:"",authTokenSecret:""})))})}
            ></${Ne}>
        `}}),Ct=K()({tagName:"vir-auth-token-entry-main-page",styles:A`
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
    `,events:{authTokensByServiceChange:le()},stateInitStatic:{currentAuthTokenEntry:void 0,errorMessage:void 0},renderCallback({inputs:t,state:e,updateState:r,dispatch:n,events:s}){e.currentAuthTokenEntry||r({currentAuthTokenEntry:t.authTokens});const i=gn(Be).map(a=>{var c;const o=(c=e.currentAuthTokenEntry)==null?void 0:c[a],l=o==null||!o.length?[{authTokenName:"",authTokenSecret:""}]:o,u=Gr(e.errorMessage)&&e.errorMessage.serviceName===a?e.errorMessage:void 0;return p`
                    <${Rr.assign({authTokenEntryError:u,authTokens:l,serviceName:a})}
                        ${I(Rr.events.authTokensChange,d=>{r({currentAuthTokenEntry:{...e.currentAuthTokenEntry,[a]:d.detail}})})}
                    ></${Rr}>
                `});return p`
            <section class="services">${i}</section>
            <section class="actions">
                <${Ne.assign({text:"Cancel",buttonStyle:pt.Outline})}
                    ${I("click",()=>{r({currentAuthTokenEntry:t.authTokens}),n(new on({route:gt}))})}
                ></${Ne}>
                <${Ne.assign({text:"Save"})}
                    ${I("click",()=>{try{ic(e.currentAuthTokenEntry)}catch(a){a instanceof an?r({errorMessage:{message:a.message,authTokenIndex:a.authTokenIndex,serviceName:a.serviceName}}):r({errorMessage:He(a)});return}n(new s.authTokensByServiceChange(e.currentAuthTokenEntry)),n(new on({route:gt}))})}
                ></${Ne}>
            </section>
        `}});function ln(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Oc(t){return Object.fromEntries(t)}var qs;(function(t){t.Upper="upper",t.Lower="lower"})(qs||(qs={}));function Cc(t){const e=Math.pow(10,t.digits),r=t.number*e;return Number((Math.round(r)/e).toFixed(t.digits))}var Bs;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Bs||(Bs={}));function Oa(t,e){return ln(t).filter(n=>{const s=t[n];return e(n,s,t)}).reduce((n,s)=>(n[s]=t[s],n),{})}function Nc(t,e){return Oa(t,r=>!e.includes(r))}function Lc(t,e){return Oa(t,r=>e.includes(r))}function Pc(t,e){let r=!1;const n=ln(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(ln(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function Ic(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Ic();class ke extends Error{}class _c extends ke{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class Dc extends ke{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class Rc extends ke{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class Pe extends ke{}class Ca extends ke{constructor(e){super(`Invalid unit ${e}`)}}class R extends ke{}class te extends ke{constructor(){super("Zone is an abstract class")}}const m="numeric",G="short",H="long",rr={year:m,month:m,day:m},Na={year:m,month:G,day:m},Hc={year:m,month:G,day:m,weekday:G},La={year:m,month:H,day:m},Pa={year:m,month:H,day:m,weekday:H},Ia={hour:m,minute:m},_a={hour:m,minute:m,second:m},Da={hour:m,minute:m,second:m,timeZoneName:G},Ra={hour:m,minute:m,second:m,timeZoneName:H},Ha={hour:m,minute:m,hourCycle:"h23"},Va={hour:m,minute:m,second:m,hourCycle:"h23"},Fa={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:G},Wa={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:H},Ua={year:m,month:m,day:m,hour:m,minute:m},ja={year:m,month:m,day:m,hour:m,minute:m,second:m},za={year:m,month:G,day:m,hour:m,minute:m},qa={year:m,month:G,day:m,hour:m,minute:m,second:m},Vc={year:m,month:G,day:m,weekday:G,hour:m,minute:m},Ba={year:m,month:H,day:m,hour:m,minute:m,timeZoneName:G},Za={year:m,month:H,day:m,hour:m,minute:m,second:m,timeZoneName:G},Ga={year:m,month:H,day:m,weekday:H,hour:m,minute:m,timeZoneName:H},Ya={year:m,month:H,day:m,weekday:H,hour:m,minute:m,second:m,timeZoneName:H};class St{get type(){throw new te}get name(){throw new te}get ianaName(){return this.name}get isUniversal(){throw new te}offsetName(e,r){throw new te}formatOffset(e,r){throw new te}offset(e){throw new te}equals(e){throw new te}get isValid(){throw new te}}let Hr=null;class wr extends St{static get instance(){return Hr===null&&(Hr=new wr),Hr}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return so(e,r,n)}formatOffset(e,r){return ct(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}}let Ut={};function Fc(t){return Ut[t]||(Ut[t]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Ut[t]}const Wc={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Uc(t,e){const r=t.format(e).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,s,i,a,o,l,u,c]=n;return[a,s,i,o,l,u,c]}function jc(t,e){const r=t.formatToParts(e),n=[];for(let s=0;s<r.length;s++){const{type:i,value:a}=r[s],o=Wc[i];i==="era"?n[o]=a:y(o)||(n[o]=parseInt(a,10))}return n}let Nt={};class X extends St{static create(e){return Nt[e]||(Nt[e]=new X(e)),Nt[e]}static resetCache(){Nt={},Ut={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch{return!1}}constructor(e){super(),this.zoneName=e,this.valid=X.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return so(e,r,n,this.name)}formatOffset(e,r){return ct(this.offset(e),r)}offset(e){const r=new Date(e);if(isNaN(r))return NaN;const n=Fc(this.name);let[s,i,a,o,l,u,c]=n.formatToParts?jc(n,r):Uc(n,r);o==="BC"&&(s=-Math.abs(s)+1);const f=br({year:s,month:i,day:a,hour:l===24?0:l,minute:u,second:c,millisecond:0});let h=+r;const w=h%1e3;return h-=w>=0?w:1e3+w,(f-h)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}}let Zs={};function zc(t,e={}){const r=JSON.stringify([t,e]);let n=Zs[r];return n||(n=new Intl.ListFormat(t,e),Zs[r]=n),n}let un={};function cn(t,e={}){const r=JSON.stringify([t,e]);let n=un[r];return n||(n=new Intl.DateTimeFormat(t,e),un[r]=n),n}let dn={};function qc(t,e={}){const r=JSON.stringify([t,e]);let n=dn[r];return n||(n=new Intl.NumberFormat(t,e),dn[r]=n),n}let fn={};function Bc(t,e={}){const{base:r,...n}=e,s=JSON.stringify([t,n]);let i=fn[s];return i||(i=new Intl.RelativeTimeFormat(t,e),fn[s]=i),i}let nt=null;function Zc(){return nt||(nt=new Intl.DateTimeFormat().resolvedOptions().locale,nt)}let Gs={};function Gc(t){let e=Gs[t];if(!e){const r=new Intl.Locale(t);e="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,Gs[t]=e}return e}function Yc(t){const e=t.indexOf("-x-");e!==-1&&(t=t.substring(0,e));const r=t.indexOf("-u-");if(r===-1)return[t];{let n,s;try{n=cn(t).resolvedOptions(),s=t}catch{const l=t.substring(0,r);n=cn(l).resolvedOptions(),s=l}const{numberingSystem:i,calendar:a}=n;return[s,i,a]}}function Kc(t,e,r){return(r||e)&&(t.includes("-u-")||(t+="-u"),r&&(t+=`-ca-${r}`),e&&(t+=`-nu-${e}`)),t}function Jc(t){const e=[];for(let r=1;r<=12;r++){const n=g.utc(2009,r,1);e.push(t(n))}return e}function Qc(t){const e=[];for(let r=1;r<=7;r++){const n=g.utc(2016,11,13+r);e.push(t(n))}return e}function Lt(t,e,r,n){const s=t.listingMode();return s==="error"?null:s==="en"?r(e):n(e)}function Xc(t){return t.numberingSystem&&t.numberingSystem!=="latn"?!1:t.numberingSystem==="latn"||!t.locale||t.locale.startsWith("en")||new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem==="latn"}class ed{constructor(e,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:s,floor:i,...a}=n;if(!r||Object.keys(a).length>0){const o={useGrouping:!1,...n};n.padTo>0&&(o.minimumIntegerDigits=n.padTo),this.inf=qc(e,o)}}format(e){if(this.inf){const r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{const r=this.floor?Math.floor(e):_n(e,3);return N(r,this.padTo)}}}class td{constructor(e,r,n){this.opts=n,this.originalZone=void 0;let s;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){const a=-1*(e.offset/60),o=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;e.offset!==0&&X.create(o).valid?(s=o,this.dt=e):(s="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,s=e.zone.name):(s="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const i={...this.opts};i.timeZone=i.timeZone||s,this.dtf=cn(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class rd{constructor(e,r,n){this.opts={style:"long",...n},!r&&ro()&&(this.rtf=Bc(e,n))}format(e,r){return this.rtf?this.rtf.format(e,r):Ed(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}}const nd={firstDay:1,minimalDays:4,weekend:[6,7]};class k{static fromOpts(e){return k.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,r,n,s,i=!1){const a=e||O.defaultLocale,o=a||(i?"en-US":Zc()),l=r||O.defaultNumberingSystem,u=n||O.defaultOutputCalendar,c=hn(s)||O.defaultWeekSettings;return new k(o,l,u,c,a)}static resetCache(){nt=null,un={},dn={},fn={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:n,weekSettings:s}={}){return k.create(e,r,n,s)}constructor(e,r,n,s,i){const[a,o,l]=Yc(e);this.locale=a,this.numberingSystem=r||o||null,this.outputCalendar=n||l||null,this.weekSettings=s,this.intl=Kc(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Xc(this)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:k.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,hn(e.weekSettings)||this.weekSettings,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,r=!1){return Lt(this,e,oo,()=>{const n=r?{month:e,day:"numeric"}:{month:e},s=r?"format":"standalone";return this.monthsCache[s][e]||(this.monthsCache[s][e]=Jc(i=>this.extract(i,n,"month"))),this.monthsCache[s][e]})}weekdays(e,r=!1){return Lt(this,e,co,()=>{const n=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},s=r?"format":"standalone";return this.weekdaysCache[s][e]||(this.weekdaysCache[s][e]=Qc(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[s][e]})}meridiems(){return Lt(this,void 0,()=>fo,()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[g.utc(2016,11,13,9),g.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Lt(this,e,ho,()=>{const r={era:e};return this.eraCache[e]||(this.eraCache[e]=[g.utc(-40,1,1),g.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[e]})}extract(e,r,n){const s=this.dtFormatter(e,r),i=s.formatToParts(),a=i.find(o=>o.type.toLowerCase()===n);return a?a.value:null}numberFormatter(e={}){return new ed(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new td(e,this.intl,r)}relFormatter(e={}){return new rd(this.intl,this.isEnglish(),e)}listFormatter(e={}){return zc(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:no()?Gc(this.locale):nd}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}let Vr=null;class D extends St{static get utcInstance(){return Vr===null&&(Vr=new D(0)),Vr}static instance(e){return e===0?D.utcInstance:new D(e)}static parseSpecifier(e){if(e){const r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new D(Tr(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${ct(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${ct(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return ct(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}}class sd extends St{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function ae(t,e){if(y(t)||t===null)return e;if(t instanceof St)return t;if(od(t)){const r=t.toLowerCase();return r==="default"?e:r==="local"||r==="system"?wr.instance:r==="utc"||r==="gmt"?D.utcInstance:D.parseSpecifier(r)||X.create(t)}else return be(t)?D.instance(t):typeof t=="object"&&"offset"in t&&typeof t.offset=="function"?t:new sd(t)}let Ys=()=>Date.now(),Ks="system",Js=null,Qs=null,Xs=null,ei=60,ti,ri=null;class O{static get now(){return Ys}static set now(e){Ys=e}static set defaultZone(e){Ks=e}static get defaultZone(){return ae(Ks,wr.instance)}static get defaultLocale(){return Js}static set defaultLocale(e){Js=e}static get defaultNumberingSystem(){return Qs}static set defaultNumberingSystem(e){Qs=e}static get defaultOutputCalendar(){return Xs}static set defaultOutputCalendar(e){Xs=e}static get defaultWeekSettings(){return ri}static set defaultWeekSettings(e){ri=hn(e)}static get twoDigitCutoffYear(){return ei}static set twoDigitCutoffYear(e){ei=e%100}static get throwOnInvalid(){return ti}static set throwOnInvalid(e){ti=e}static resetCaches(){k.resetCache(),X.resetCache()}}class Z{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Ka=[0,31,59,90,120,151,181,212,243,273,304,334],Ja=[0,31,60,91,121,152,182,213,244,274,305,335];function U(t,e){return new Z("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`)}function Ln(t,e,r){const n=new Date(Date.UTC(t,e-1,r));t<100&&t>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const s=n.getUTCDay();return s===0?7:s}function Qa(t,e,r){return r+(kt(t)?Ja:Ka)[e-1]}function Xa(t,e){const r=kt(t)?Ja:Ka,n=r.findIndex(i=>i<e),s=e-r[n];return{month:n+1,day:s}}function Pn(t,e){return(t-e+7)%7+1}function nr(t,e=4,r=1){const{year:n,month:s,day:i}=t,a=Qa(n,s,i),o=Pn(Ln(n,s,i),r);let l=Math.floor((a-o+14-e)/7),u;return l<1?(u=n-1,l=wt(u,e,r)):l>wt(n,e,r)?(u=n+1,l=1):u=n,{weekYear:u,weekNumber:l,weekday:o,...Er(t)}}function ni(t,e=4,r=1){const{weekYear:n,weekNumber:s,weekday:i}=t,a=Pn(Ln(n,1,e),r),o=De(n);let l=s*7+i-a-7+e,u;l<1?(u=n-1,l+=De(u)):l>o?(u=n+1,l-=De(n)):u=n;const{month:c,day:d}=Xa(u,l);return{year:u,month:c,day:d,...Er(t)}}function Fr(t){const{year:e,month:r,day:n}=t,s=Qa(e,r,n);return{year:e,ordinal:s,...Er(t)}}function si(t){const{year:e,ordinal:r}=t,{month:n,day:s}=Xa(e,r);return{year:e,month:n,day:s,...Er(t)}}function ii(t,e){if(!y(t.localWeekday)||!y(t.localWeekNumber)||!y(t.localWeekYear)){if(!y(t.weekday)||!y(t.weekNumber)||!y(t.weekYear))throw new Pe("Cannot mix locale-based week fields with ISO-based week fields");return y(t.localWeekday)||(t.weekday=t.localWeekday),y(t.localWeekNumber)||(t.weekNumber=t.localWeekNumber),y(t.localWeekYear)||(t.weekYear=t.localWeekYear),delete t.localWeekday,delete t.localWeekNumber,delete t.localWeekYear,{minDaysInFirstWeek:e.getMinDaysInFirstWeek(),startOfWeek:e.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function id(t,e=4,r=1){const n=vr(t.weekYear),s=j(t.weekNumber,1,wt(t.weekYear,e,r)),i=j(t.weekday,1,7);return n?s?i?!1:U("weekday",t.weekday):U("week",t.weekNumber):U("weekYear",t.weekYear)}function ad(t){const e=vr(t.year),r=j(t.ordinal,1,De(t.year));return e?r?!1:U("ordinal",t.ordinal):U("year",t.year)}function eo(t){const e=vr(t.year),r=j(t.month,1,12),n=j(t.day,1,sr(t.year,t.month));return e?r?n?!1:U("day",t.day):U("month",t.month):U("year",t.year)}function to(t){const{hour:e,minute:r,second:n,millisecond:s}=t,i=j(e,0,23)||e===24&&r===0&&n===0&&s===0,a=j(r,0,59),o=j(n,0,59),l=j(s,0,999);return i?a?o?l?!1:U("millisecond",s):U("second",n):U("minute",r):U("hour",e)}function y(t){return typeof t>"u"}function be(t){return typeof t=="number"}function vr(t){return typeof t=="number"&&t%1===0}function od(t){return typeof t=="string"}function ld(t){return Object.prototype.toString.call(t)==="[object Date]"}function ro(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function no(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function ud(t){return Array.isArray(t)?t:[t]}function ai(t,e,r){if(t.length!==0)return t.reduce((n,s)=>{const i=[e(s),s];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function cd(t,e){return e.reduce((r,n)=>(r[n]=t[n],r),{})}function Ue(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hn(t){if(t==null)return null;if(typeof t!="object")throw new R("Week settings must be an object");if(!j(t.firstDay,1,7)||!j(t.minimalDays,1,7)||!Array.isArray(t.weekend)||t.weekend.some(e=>!j(e,1,7)))throw new R("Invalid week settings");return{firstDay:t.firstDay,minimalDays:t.minimalDays,weekend:Array.from(t.weekend)}}function j(t,e,r){return vr(t)&&t>=e&&t<=r}function dd(t,e){return t-e*Math.floor(t/e)}function N(t,e=2){const r=t<0;let n;return r?n="-"+(""+-t).padStart(e,"0"):n=(""+t).padStart(e,"0"),n}function ne(t){if(!(y(t)||t===null||t===""))return parseInt(t,10)}function de(t){if(!(y(t)||t===null||t===""))return parseFloat(t)}function In(t){if(!(y(t)||t===null||t==="")){const e=parseFloat("0."+t)*1e3;return Math.floor(e)}}function _n(t,e,r=!1){const n=10**e;return(r?Math.trunc:Math.round)(t*n)/n}function kt(t){return t%4===0&&(t%100!==0||t%400===0)}function De(t){return kt(t)?366:365}function sr(t,e){const r=dd(e-1,12)+1,n=t+(e-r)/12;return r===2?kt(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function br(t){let e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&(e=new Date(e),e.setUTCFullYear(t.year,t.month-1,t.day)),+e}function oi(t,e,r){return-Pn(Ln(t,1,e),r)+e-1}function wt(t,e=4,r=1){const n=oi(t,e,r),s=oi(t+1,e,r);return(De(t)-n+s)/7}function mn(t){return t>99?t:t>O.twoDigitCutoffYear?1900+t:2e3+t}function so(t,e,r,n=null){const s=new Date(t),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const a={timeZoneName:e,...i},o=new Intl.DateTimeFormat(r,a).formatToParts(s).find(l=>l.type.toLowerCase()==="timezonename");return o?o.value:null}function Tr(t,e){let r=parseInt(t,10);Number.isNaN(r)&&(r=0);const n=parseInt(e,10)||0,s=r<0||Object.is(r,-0)?-n:n;return r*60+s}function io(t){const e=Number(t);if(typeof t=="boolean"||t===""||Number.isNaN(e))throw new R(`Invalid unit value ${t}`);return e}function ir(t,e){const r={};for(const n in t)if(Ue(t,n)){const s=t[n];if(s==null)continue;r[e(n)]=io(s)}return r}function ct(t,e){const r=Math.trunc(Math.abs(t/60)),n=Math.trunc(Math.abs(t%60)),s=t>=0?"+":"-";switch(e){case"short":return`${s}${N(r,2)}:${N(n,2)}`;case"narrow":return`${s}${r}${n>0?`:${n}`:""}`;case"techie":return`${s}${N(r,2)}${N(n,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Er(t){return cd(t,["hour","minute","second","millisecond"])}const fd=["January","February","March","April","May","June","July","August","September","October","November","December"],ao=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],hd=["J","F","M","A","M","J","J","A","S","O","N","D"];function oo(t){switch(t){case"narrow":return[...hd];case"short":return[...ao];case"long":return[...fd];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const lo=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],uo=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],md=["M","T","W","T","F","S","S"];function co(t){switch(t){case"narrow":return[...md];case"short":return[...uo];case"long":return[...lo];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const fo=["AM","PM"],pd=["Before Christ","Anno Domini"],yd=["BC","AD"],gd=["B","A"];function ho(t){switch(t){case"narrow":return[...gd];case"short":return[...yd];case"long":return[...pd];default:return null}}function wd(t){return fo[t.hour<12?0:1]}function vd(t,e){return co(e)[t.weekday-1]}function bd(t,e){return oo(e)[t.month-1]}function Td(t,e){return ho(e)[t.year<0?0:1]}function Ed(t,e,r="always",n=!1){const s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(t)===-1;if(r==="auto"&&i){const d=t==="days";switch(e){case 1:return d?"tomorrow":`next ${s[t][0]}`;case-1:return d?"yesterday":`last ${s[t][0]}`;case 0:return d?"today":`this ${s[t][0]}`}}const a=Object.is(e,-0)||e<0,o=Math.abs(e),l=o===1,u=s[t],c=n?l?u[1]:u[2]||u[1]:l?s[t][0]:t;return a?`${o} ${c} ago`:`in ${o} ${c}`}function li(t,e){let r="";for(const n of t)n.literal?r+=n.val:r+=e(n.val);return r}const $d={D:rr,DD:Na,DDD:La,DDDD:Pa,t:Ia,tt:_a,ttt:Da,tttt:Ra,T:Ha,TT:Va,TTT:Fa,TTTT:Wa,f:Ua,ff:za,fff:Ba,ffff:Ga,F:ja,FF:qa,FFF:Za,FFFF:Ya};class P{static create(e,r={}){return new P(e,r)}static parseFormat(e){let r=null,n="",s=!1;const i=[];for(let a=0;a<e.length;a++){const o=e.charAt(a);o==="'"?(n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),r=null,n="",s=!s):s||o===r?n+=o:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=o,r=o)}return n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(e){return $d[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...r}).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,{...this.opts,...r})}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return N(e,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,r){const n=this.loc.listingMode()==="en",s=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(h,w)=>this.loc.extract(e,h,w),a=h=>e.isOffsetFixed&&e.offset===0&&h.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,h.format):"",o=()=>n?wd(e):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,w)=>n?bd(e,h):i(w?{month:h}:{month:h,day:"numeric"},"month"),u=(h,w)=>n?vd(e,h):i(w?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),c=h=>{const w=P.macroTokenToFormatOpts(h);return w?this.formatWithSystemDefault(e,w):h},d=h=>n?Td(e,h):i({era:h},"era"),f=h=>{switch(h){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return o();case"d":return s?i({day:"numeric"},"day"):this.num(e.day);case"dd":return s?i({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return u("short",!0);case"cccc":return u("long",!0);case"ccccc":return u("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return u("short",!1);case"EEEE":return u("long",!1);case"EEEEE":return u("narrow",!1);case"L":return s?i({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return s?i({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return s?i({month:"numeric"},"month"):this.num(e.month);case"MM":return s?i({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return s?i({year:"numeric"},"year"):this.num(e.year);case"yy":return s?i({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return s?i({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return s?i({year:"numeric"},"year"):this.num(e.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return c(h)}};return li(P.parseFormat(r),f)}formatDurationFromString(e,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},s=l=>u=>{const c=n(u);return c?this.num(l.get(c),u.length):u},i=P.parseFormat(r),a=i.reduce((l,{literal:u,val:c})=>u?l:l.concat(c),[]),o=e.shiftTo(...a.map(n).filter(l=>l));return li(i,s(o))}}const mo=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Ze(...t){const e=t.reduce((r,n)=>r+n.source,"");return RegExp(`^${e}$`)}function Ge(...t){return e=>t.reduce(([r,n,s],i)=>{const[a,o,l]=i(e,s);return[{...r,...a},o||n,l]},[{},null,1]).slice(0,2)}function Ye(t,...e){if(t==null)return[null,null];for(const[r,n]of e){const s=r.exec(t);if(s)return n(s)}return[null,null]}function po(...t){return(e,r)=>{const n={};let s;for(s=0;s<t.length;s++)n[t[s]]=ne(e[r+s]);return[n,null,r+s]}}const yo=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Sd=`(?:${yo.source}?(?:\\[(${mo.source})\\])?)?`,Dn=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,go=RegExp(`${Dn.source}${Sd}`),Rn=RegExp(`(?:T${go.source})?`),kd=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Ad=/(\d{4})-?W(\d\d)(?:-?(\d))?/,xd=/(\d{4})-?(\d{3})/,Md=po("weekYear","weekNumber","weekDay"),Od=po("year","ordinal"),Cd=/(\d{4})-(\d\d)-(\d\d)/,wo=RegExp(`${Dn.source} ?(?:${yo.source}|(${mo.source}))?`),Nd=RegExp(`(?: ${wo.source})?`);function Re(t,e,r){const n=t[e];return y(n)?r:ne(n)}function Ld(t,e){return[{year:Re(t,e),month:Re(t,e+1,1),day:Re(t,e+2,1)},null,e+3]}function Ke(t,e){return[{hours:Re(t,e,0),minutes:Re(t,e+1,0),seconds:Re(t,e+2,0),milliseconds:In(t[e+3])},null,e+4]}function At(t,e){const r=!t[e]&&!t[e+1],n=Tr(t[e+1],t[e+2]),s=r?null:D.instance(n);return[{},s,e+3]}function xt(t,e){const r=t[e]?X.create(t[e]):null;return[{},r,e+1]}const Pd=RegExp(`^T?${Dn.source}$`),Id=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function _d(t){const[e,r,n,s,i,a,o,l,u]=t,c=e[0]==="-",d=l&&l[0]==="-",f=(h,w=!1)=>h!==void 0&&(w||h&&c)?-h:h;return[{years:f(de(r)),months:f(de(n)),weeks:f(de(s)),days:f(de(i)),hours:f(de(a)),minutes:f(de(o)),seconds:f(de(l),l==="-0"),milliseconds:f(In(u),d)}]}const Dd={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Hn(t,e,r,n,s,i,a){const o={year:e.length===2?mn(ne(e)):ne(e),month:ao.indexOf(r)+1,day:ne(n),hour:ne(s),minute:ne(i)};return a&&(o.second=ne(a)),t&&(o.weekday=t.length>3?lo.indexOf(t)+1:uo.indexOf(t)+1),o}const Rd=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Hd(t){const[,e,r,n,s,i,a,o,l,u,c,d]=t,f=Hn(e,s,n,r,i,a,o);let h;return l?h=Dd[l]:u?h=0:h=Tr(c,d),[f,new D(h)]}function Vd(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Fd=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Wd=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Ud=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function ui(t){const[,e,r,n,s,i,a,o]=t;return[Hn(e,s,n,r,i,a,o),D.utcInstance]}function jd(t){const[,e,r,n,s,i,a,o]=t;return[Hn(e,o,r,n,s,i,a),D.utcInstance]}const zd=Ze(kd,Rn),qd=Ze(Ad,Rn),Bd=Ze(xd,Rn),Zd=Ze(go),vo=Ge(Ld,Ke,At,xt),Gd=Ge(Md,Ke,At,xt),Yd=Ge(Od,Ke,At,xt),Kd=Ge(Ke,At,xt);function Jd(t){return Ye(t,[zd,vo],[qd,Gd],[Bd,Yd],[Zd,Kd])}function Qd(t){return Ye(Vd(t),[Rd,Hd])}function Xd(t){return Ye(t,[Fd,ui],[Wd,ui],[Ud,jd])}function ef(t){return Ye(t,[Id,_d])}const tf=Ge(Ke);function rf(t){return Ye(t,[Pd,tf])}const nf=Ze(Cd,Nd),sf=Ze(wo),af=Ge(Ke,At,xt);function of(t){return Ye(t,[nf,vo],[sf,af])}const ci="Invalid Duration",bo={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},lf={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...bo},F=146097/400,xe=146097/4800,uf={years:{quarters:4,months:12,weeks:F/7,days:F,hours:F*24,minutes:F*24*60,seconds:F*24*60*60,milliseconds:F*24*60*60*1e3},quarters:{months:3,weeks:F/28,days:F/4,hours:F*24/4,minutes:F*24*60/4,seconds:F*24*60*60/4,milliseconds:F*24*60*60*1e3/4},months:{weeks:xe/7,days:xe,hours:xe*24,minutes:xe*24*60,seconds:xe*24*60*60,milliseconds:xe*24*60*60*1e3},...bo},ye=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],cf=ye.slice(0).reverse();function re(t,e,r=!1){const n={values:r?e.values:{...t.values,...e.values||{}},loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix};return new E(n)}function To(t,e){let r=e.milliseconds??0;for(const n of cf.slice(1))e[n]&&(r+=e[n]*t[n].milliseconds);return r}function di(t,e){const r=To(t,e)<0?-1:1;ye.reduceRight((n,s)=>{if(y(e[s]))return n;if(n){const i=e[n]*r,a=t[s][n],o=Math.floor(i/a);e[s]+=o*r,e[n]-=o*a*r}return s},null),ye.reduce((n,s)=>{if(y(e[s]))return n;if(n){const i=e[n]%1;e[n]-=i,e[s]+=i*t[n][s]}return s},null)}function df(t){const e={};for(const[r,n]of Object.entries(t))n!==0&&(e[r]=n);return e}class E{constructor(e){const r=e.conversionAccuracy==="longterm"||!1;let n=r?uf:lf;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||k.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(e,r){return E.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new R(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new E({values:ir(e,E.normalizeUnit),loc:k.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if(be(e))return E.fromMillis(e);if(E.isDuration(e))return e;if(typeof e=="object")return E.fromObject(e);throw new R(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){const[n]=ef(e);return n?E.fromObject(n,r):E.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){const[n]=rf(e);return n?E.fromObject(n,r):E.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new R("need to specify a reason the Duration is invalid");const n=e instanceof Z?e:new Z(e,r);if(O.throwOnInvalid)throw new Rc(n);return new E({invalid:n})}static normalizeUnit(e){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new Ca(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?P.create(this.loc,n).formatDurationFromString(this,e):ci}toHuman(e={}){if(!this.isValid)return ci;const r=ye.map(n=>{const s=this.values[n];return y(s)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:n.slice(0,-1)}).format(s)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=_n(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},g.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?To(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;const r=E.fromDurationLike(e),n={};for(const s of ye)(Ue(r.values,s)||Ue(this.values,s))&&(n[s]=r.get(s)+this.get(s));return re(this,{values:n},!0)}minus(e){if(!this.isValid)return this;const r=E.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=io(e(this.values[n],n));return re(this,{values:r},!0)}get(e){return this[E.normalizeUnit(e)]}set(e){if(!this.isValid)return this;const r={...this.values,...ir(e,E.normalizeUnit)};return re(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:n,matrix:s}={}){const a={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:s,conversionAccuracy:n};return re(this,a)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;const e=this.toObject();return di(this.matrix,e),re(this,{values:e},!0)}rescale(){if(!this.isValid)return this;const e=df(this.normalize().shiftToAll().toObject());return re(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(a=>E.normalizeUnit(a));const r={},n={},s=this.toObject();let i;for(const a of ye)if(e.indexOf(a)>=0){i=a;let o=0;for(const u in n)o+=this.matrix[u][a]*n[u],n[u]=0;be(s[a])&&(o+=s[a]);const l=Math.trunc(o);r[a]=l,n[a]=(o*1e3-l*1e3)/1e3}else be(s[a])&&(n[a]=s[a]);for(const a in n)n[a]!==0&&(r[i]+=a===i?n[a]:n[a]/this.matrix[i][a]);return di(this.matrix,r),re(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const e={};for(const r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return re(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(n,s){return n===void 0||n===0?s===void 0||s===0:n===s}for(const n of ye)if(!r(this.values[n],e.values[n]))return!1;return!0}}const Me="Invalid Interval";function ff(t,e){return!t||!t.isValid?C.invalid("missing or invalid start"):!e||!e.isValid?C.invalid("missing or invalid end"):e<t?C.invalid("end before start",`The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`):null}class C{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new R("need to specify a reason the Interval is invalid");const n=e instanceof Z?e:new Z(e,r);if(O.throwOnInvalid)throw new Dc(n);return new C({invalid:n})}static fromDateTimes(e,r){const n=tt(e),s=tt(r),i=ff(n,s);return i??new C({start:n,end:s})}static after(e,r){const n=E.fromDurationLike(r),s=tt(e);return C.fromDateTimes(s,s.plus(n))}static before(e,r){const n=E.fromDurationLike(r),s=tt(e);return C.fromDateTimes(s.minus(n),s)}static fromISO(e,r){const[n,s]=(e||"").split("/",2);if(n&&s){let i,a;try{i=g.fromISO(n,r),a=i.isValid}catch{a=!1}let o,l;try{o=g.fromISO(s,r),l=o.isValid}catch{l=!1}if(a&&l)return C.fromDateTimes(i,o);if(a){const u=E.fromISO(s,r);if(u.isValid)return C.after(i,u)}else if(l){const u=E.fromISO(n,r);if(u.isValid)return C.before(o,u)}}return C.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(e,r);let s;return r!=null&&r.useLocaleWeeks?s=this.end.reconfigure({locale:n.locale}):s=this.end,s=s.startOf(e,r),Math.floor(s.diff(n,e).get(e))+(s.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?C.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];const r=e.map(tt).filter(a=>this.contains(a)).sort((a,o)=>a.toMillis()-o.toMillis()),n=[];let{s}=this,i=0;for(;s<this.e;){const a=r[i]||this.e,o=+a>+this.e?this.e:a;n.push(C.fromDateTimes(s,o)),s=o,i+=1}return n}splitBy(e){const r=E.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,s=1,i;const a=[];for(;n<this.e;){const o=this.start.plus(r.mapUnits(l=>l*s));i=+o>+this.e?this.e:o,a.push(C.fromDateTimes(n,i)),n=i,s+=1}return a}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;const r=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return r>=n?null:C.fromDateTimes(r,n)}union(e){if(!this.isValid)return this;const r=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return C.fromDateTimes(r,n)}static merge(e){const[r,n]=e.sort((s,i)=>s.s-i.s).reduce(([s,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[s,i.union(a)]:[s.concat([i]),a]:[s,a],[[],null]);return n&&r.push(n),r}static xor(e){let r=null,n=0;const s=[],i=e.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),o=a.sort((l,u)=>l.time-u.time);for(const l of o)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&s.push(C.fromDateTimes(r,l.time)),r=null);return C.merge(s)}difference(...e){return C.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Me}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=rr,r={}){return this.isValid?P.create(this.s.loc.clone(r),e).formatInterval(this):Me}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Me}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Me}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Me}toFormat(e,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:Me}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):E.invalid(this.invalidReason)}mapEndpoints(e){return C.fromDateTimes(e(this.s),e(this.e))}}class Pt{static hasDST(e=O.defaultZone){const r=g.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return X.isValidZone(e)}static normalizeZone(e){return ae(e,O.defaultZone)}static getStartOfWeek({locale:e=null,locObj:r=null}={}){return(r||k.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:r=null}={}){return(r||k.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:r=null}={}){return(r||k.create(e)).getWeekendDays().slice()}static months(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||k.create(r,n,i)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||k.create(r,n,i)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null}={}){return(s||k.create(r,n,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null}={}){return(s||k.create(r,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return k.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return k.create(r,null,"gregory").eras(e)}static features(){return{relative:ro(),localeWeek:no()}}}function fi(t,e){const r=s=>s.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(e)-r(t);return Math.floor(E.fromMillis(n).as("days"))}function hf(t,e,r){const n=[["years",(l,u)=>u.year-l.year],["quarters",(l,u)=>u.quarter-l.quarter+(u.year-l.year)*4],["months",(l,u)=>u.month-l.month+(u.year-l.year)*12],["weeks",(l,u)=>{const c=fi(l,u);return(c-c%7)/7}],["days",fi]],s={},i=t;let a,o;for(const[l,u]of n)r.indexOf(l)>=0&&(a=l,s[l]=u(t,e),o=i.plus(s),o>e?(s[l]--,t=i.plus(s),t>e&&(o=t,s[l]--,t=i.plus(s))):t=o);return[t,s,o,a]}function mf(t,e,r,n){let[s,i,a,o]=hf(t,e,r);const l=e-s,u=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);u.length===0&&(a<e&&(a=s.plus({[o]:1})),a!==s&&(i[o]=(i[o]||0)+l/(a-s)));const c=E.fromObject(i,n);return u.length>0?E.fromMillis(l,n).shiftTo(...u).plus(c):c}const Vn={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},hi={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},pf=Vn.hanidec.replace(/[\[|\]]/g,"").split("");function yf(t){let e=parseInt(t,10);if(isNaN(e)){e="";for(let r=0;r<t.length;r++){const n=t.charCodeAt(r);if(t[r].search(Vn.hanidec)!==-1)e+=pf.indexOf(t[r]);else for(const s in hi){const[i,a]=hi[s];n>=i&&n<=a&&(e+=n-i)}}return parseInt(e,10)}else return e}function q({numberingSystem:t},e=""){return new RegExp(`${Vn[t||"latn"]}${e}`)}const gf="missing Intl.DateTimeFormat.formatToParts support";function $(t,e=r=>r){return{regex:t,deser:([r])=>e(yf(r))}}const wf=String.fromCharCode(160),Eo=`[ ${wf}]`,$o=new RegExp(Eo,"g");function vf(t){return t.replace(/\./g,"\\.?").replace($o,Eo)}function mi(t){return t.replace(/\./g,"").replace($o," ").toLowerCase()}function B(t,e){return t===null?null:{regex:RegExp(t.map(vf).join("|")),deser:([r])=>t.findIndex(n=>mi(r)===mi(n))+e}}function pi(t,e){return{regex:t,deser:([,r,n])=>Tr(r,n),groups:e}}function It(t){return{regex:t,deser:([e])=>e}}function bf(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Tf(t,e){const r=q(e),n=q(e,"{2}"),s=q(e,"{3}"),i=q(e,"{4}"),a=q(e,"{6}"),o=q(e,"{1,2}"),l=q(e,"{1,3}"),u=q(e,"{1,6}"),c=q(e,"{1,9}"),d=q(e,"{2,4}"),f=q(e,"{4,6}"),h=M=>({regex:RegExp(bf(M.val)),deser:([_])=>_,literal:!0}),T=(M=>{if(t.literal)return h(M);switch(M.val){case"G":return B(e.eras("short"),0);case"GG":return B(e.eras("long"),0);case"y":return $(u);case"yy":return $(d,mn);case"yyyy":return $(i);case"yyyyy":return $(f);case"yyyyyy":return $(a);case"M":return $(o);case"MM":return $(n);case"MMM":return B(e.months("short",!0),1);case"MMMM":return B(e.months("long",!0),1);case"L":return $(o);case"LL":return $(n);case"LLL":return B(e.months("short",!1),1);case"LLLL":return B(e.months("long",!1),1);case"d":return $(o);case"dd":return $(n);case"o":return $(l);case"ooo":return $(s);case"HH":return $(n);case"H":return $(o);case"hh":return $(n);case"h":return $(o);case"mm":return $(n);case"m":return $(o);case"q":return $(o);case"qq":return $(n);case"s":return $(o);case"ss":return $(n);case"S":return $(l);case"SSS":return $(s);case"u":return It(c);case"uu":return It(o);case"uuu":return $(r);case"a":return B(e.meridiems(),0);case"kkkk":return $(i);case"kk":return $(d,mn);case"W":return $(o);case"WW":return $(n);case"E":case"c":return $(r);case"EEE":return B(e.weekdays("short",!1),1);case"EEEE":return B(e.weekdays("long",!1),1);case"ccc":return B(e.weekdays("short",!0),1);case"cccc":return B(e.weekdays("long",!0),1);case"Z":case"ZZ":return pi(new RegExp(`([+-]${o.source})(?::(${n.source}))?`),2);case"ZZZ":return pi(new RegExp(`([+-]${o.source})(${n.source})?`),2);case"z":return It(/[a-z_+-/]{1,256}?/i);case" ":return It(/[^\S\n\r]/);default:return h(M)}})(t)||{invalidReason:gf};return T.token=t,T}const Ef={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function $f(t,e,r){const{type:n,value:s}=t;if(n==="literal"){const l=/^\s+$/.test(s);return{literal:!l,val:l?" ":s}}const i=e[n];let a=n;n==="hour"&&(e.hour12!=null?a=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let o=Ef[a];if(typeof o=="object"&&(o=o[i]),o)return{literal:!1,val:o}}function Sf(t){return[`^${t.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,t]}function kf(t,e,r){const n=t.match(e);if(n){const s={};let i=1;for(const a in r)if(Ue(r,a)){const o=r[a],l=o.groups?o.groups+1:1;!o.literal&&o.token&&(s[o.token.val[0]]=o.deser(n.slice(i,i+l))),i+=l}return[n,s]}else return[n,{}]}function Af(t){const e=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return y(t.z)||(r=X.create(t.z)),y(t.Z)||(r||(r=new D(t.Z)),n=t.Z),y(t.q)||(t.M=(t.q-1)*3+1),y(t.h)||(t.h<12&&t.a===1?t.h+=12:t.h===12&&t.a===0&&(t.h=0)),t.G===0&&t.y&&(t.y=-t.y),y(t.u)||(t.S=In(t.u)),[Object.keys(t).reduce((i,a)=>{const o=e(a);return o&&(i[o]=t[a]),i},{}),r,n]}let Wr=null;function xf(){return Wr||(Wr=g.fromMillis(1555555555555)),Wr}function Mf(t,e){if(t.literal)return t;const r=P.macroTokenToFormatOpts(t.val),n=Ao(r,e);return n==null||n.includes(void 0)?t:n}function So(t,e){return Array.prototype.concat(...t.map(r=>Mf(r,e)))}function ko(t,e,r){const n=So(P.parseFormat(r),t),s=n.map(a=>Tf(a,t)),i=s.find(a=>a.invalidReason);if(i)return{input:e,tokens:n,invalidReason:i.invalidReason};{const[a,o]=Sf(s),l=RegExp(a,"i"),[u,c]=kf(e,l,o),[d,f,h]=c?Af(c):[null,null,void 0];if(Ue(c,"a")&&Ue(c,"H"))throw new Pe("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:n,regex:l,rawMatches:u,matches:c,result:d,zone:f,specificOffset:h}}}function Of(t,e,r){const{result:n,zone:s,specificOffset:i,invalidReason:a}=ko(t,e,r);return[n,s,i,a]}function Ao(t,e){if(!t)return null;const n=P.create(e,t).dtFormatter(xf()),s=n.formatToParts(),i=n.resolvedOptions();return s.map(a=>$f(a,t,i))}const Ur="Invalid DateTime",yi=864e13;function _t(t){return new Z("unsupported zone",`the zone "${t.name}" is not supported`)}function jr(t){return t.weekData===null&&(t.weekData=nr(t.c)),t.weekData}function zr(t){return t.localWeekData===null&&(t.localWeekData=nr(t.c,t.loc.getMinDaysInFirstWeek(),t.loc.getStartOfWeek())),t.localWeekData}function fe(t,e){const r={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new g({...r,...e,old:r})}function xo(t,e,r){let n=t-e*60*1e3;const s=r.offset(n);if(e===s)return[n,e];n-=(s-e)*60*1e3;const i=r.offset(n);return s===i?[n,s]:[t-Math.min(s,i)*60*1e3,Math.max(s,i)]}function Dt(t,e){t+=e*60*1e3;const r=new Date(t);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function jt(t,e,r){return xo(br(t),e,r)}function gi(t,e){const r=t.o,n=t.c.year+Math.trunc(e.years),s=t.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,i={...t.c,year:n,month:s,day:Math.min(t.c.day,sr(n,s))+Math.trunc(e.days)+Math.trunc(e.weeks)*7},a=E.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),o=br(i);let[l,u]=xo(o,r,t.zone);return a!==0&&(l+=a,u=t.zone.offset(l)),{ts:l,o:u}}function et(t,e,r,n,s,i){const{setZone:a,zone:o}=r;if(t&&Object.keys(t).length!==0||e){const l=e||o,u=g.fromObject(t,{...r,zone:l,specificOffset:i});return a?u:u.setZone(o)}else return g.invalid(new Z("unparsable",`the input "${s}" can't be parsed as ${n}`))}function Rt(t,e,r=!0){return t.isValid?P.create(k.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(t,e):null}function qr(t,e){const r=t.c.year>9999||t.c.year<0;let n="";return r&&t.c.year>=0&&(n+="+"),n+=N(t.c.year,r?6:4),e?(n+="-",n+=N(t.c.month),n+="-",n+=N(t.c.day)):(n+=N(t.c.month),n+=N(t.c.day)),n}function wi(t,e,r,n,s,i){let a=N(t.c.hour);return e?(a+=":",a+=N(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(a+=":")):a+=N(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(a+=N(t.c.second),(t.c.millisecond!==0||!n)&&(a+=".",a+=N(t.c.millisecond,3))),s&&(t.isOffsetFixed&&t.offset===0&&!i?a+="Z":t.o<0?(a+="-",a+=N(Math.trunc(-t.o/60)),a+=":",a+=N(Math.trunc(-t.o%60))):(a+="+",a+=N(Math.trunc(t.o/60)),a+=":",a+=N(Math.trunc(t.o%60)))),i&&(a+="["+t.zone.ianaName+"]"),a}const Mo={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Cf={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Nf={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Oo=["year","month","day","hour","minute","second","millisecond"],Lf=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Pf=["year","ordinal","hour","minute","second","millisecond"];function If(t){const e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!e)throw new Ca(t);return e}function vi(t){switch(t.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return If(t)}}function bi(t,e){const r=ae(e.zone,O.defaultZone),n=k.fromObject(e),s=O.now();let i,a;if(y(t.year))i=s;else{for(const u of Oo)y(t[u])&&(t[u]=Mo[u]);const o=eo(t)||to(t);if(o)return g.invalid(o);const l=r.offset(s);[i,a]=jt(t,l,r)}return new g({ts:i,zone:r,loc:n,o:a})}function Ti(t,e,r){const n=y(r.round)?!0:r.round,s=(a,o)=>(a=_n(a,n||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(a,o)),i=a=>r.calendary?e.hasSame(t,a)?0:e.startOf(a).diff(t.startOf(a),a).get(a):e.diff(t,a).get(a);if(r.unit)return s(i(r.unit),r.unit);for(const a of r.units){const o=i(a);if(Math.abs(o)>=1)return s(o,a)}return s(t>e?-0:0,r.units[r.units.length-1])}function Ei(t){let e={},r;return t.length>0&&typeof t[t.length-1]=="object"?(e=t[t.length-1],r=Array.from(t).slice(0,t.length-1)):r=Array.from(t),[e,r]}class g{constructor(e){const r=e.zone||O.defaultZone;let n=e.invalid||(Number.isNaN(e.ts)?new Z("invalid input"):null)||(r.isValid?null:_t(r));this.ts=y(e.ts)?O.now():e.ts;let s=null,i=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[s,i]=[e.old.c,e.old.o];else{const o=r.offset(this.ts);s=Dt(this.ts,o),n=Number.isNaN(s.year)?new Z("invalid input"):null,s=n?null:s,i=n?null:o}this._zone=r,this.loc=e.loc||k.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=s,this.o=i,this.isLuxonDateTime=!0}static now(){return new g({})}static local(){const[e,r]=Ei(arguments),[n,s,i,a,o,l,u]=r;return bi({year:n,month:s,day:i,hour:a,minute:o,second:l,millisecond:u},e)}static utc(){const[e,r]=Ei(arguments),[n,s,i,a,o,l,u]=r;return e.zone=D.utcInstance,bi({year:n,month:s,day:i,hour:a,minute:o,second:l,millisecond:u},e)}static fromJSDate(e,r={}){const n=ld(e)?e.valueOf():NaN;if(Number.isNaN(n))return g.invalid("invalid input");const s=ae(r.zone,O.defaultZone);return s.isValid?new g({ts:n,zone:s,loc:k.fromObject(r)}):g.invalid(_t(s))}static fromMillis(e,r={}){if(be(e))return e<-yi||e>yi?g.invalid("Timestamp out of range"):new g({ts:e,zone:ae(r.zone,O.defaultZone),loc:k.fromObject(r)});throw new R(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if(be(e))return new g({ts:e*1e3,zone:ae(r.zone,O.defaultZone),loc:k.fromObject(r)});throw new R("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};const n=ae(r.zone,O.defaultZone);if(!n.isValid)return g.invalid(_t(n));const s=k.fromObject(r),i=ir(e,vi),{minDaysInFirstWeek:a,startOfWeek:o}=ii(i,s),l=O.now(),u=y(r.specificOffset)?n.offset(l):r.specificOffset,c=!y(i.ordinal),d=!y(i.year),f=!y(i.month)||!y(i.day),h=d||f,w=i.weekYear||i.weekNumber;if((h||c)&&w)throw new Pe("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&c)throw new Pe("Can't mix ordinal dates with month/day");const T=w||i.weekday&&!h;let M,_,V=Dt(l,u);T?(M=Lf,_=Cf,V=nr(V,a,o)):c?(M=Pf,_=Nf,V=Fr(V)):(M=Oo,_=Mo);let ue=!1;for(const Qe of M){const Do=i[Qe];y(Do)?ue?i[Qe]=_[Qe]:i[Qe]=V[Qe]:ue=!0}const Je=T?id(i,a,o):c?ad(i):eo(i),Mt=Je||to(i);if(Mt)return g.invalid(Mt);const Po=T?ni(i,a,o):c?si(i):i,[Io,_o]=jt(Po,u,n),Sr=new g({ts:Io,zone:n,o:_o,loc:s});return i.weekday&&h&&e.weekday!==Sr.weekday?g.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${Sr.toISO()}`):Sr}static fromISO(e,r={}){const[n,s]=Jd(e);return et(n,s,r,"ISO 8601",e)}static fromRFC2822(e,r={}){const[n,s]=Qd(e);return et(n,s,r,"RFC 2822",e)}static fromHTTP(e,r={}){const[n,s]=Xd(e);return et(n,s,r,"HTTP",r)}static fromFormat(e,r,n={}){if(y(e)||y(r))throw new R("fromFormat requires an input string and a format");const{locale:s=null,numberingSystem:i=null}=n,a=k.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0}),[o,l,u,c]=Of(a,e,r);return c?g.invalid(c):et(o,l,n,`format ${r}`,e,u)}static fromString(e,r,n={}){return g.fromFormat(e,r,n)}static fromSQL(e,r={}){const[n,s]=of(e);return et(n,s,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new R("need to specify a reason the DateTime is invalid");const n=e instanceof Z?e:new Z(e,r);if(O.throwOnInvalid)throw new _c(n);return new g({invalid:n})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){const n=Ao(e,k.fromObject(r));return n?n.map(s=>s?s.val:null).join(""):null}static expandFormat(e,r={}){return So(P.parseFormat(e),k.fromObject(r)).map(s=>s.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?jr(this).weekYear:NaN}get weekNumber(){return this.isValid?jr(this).weekNumber:NaN}get weekday(){return this.isValid?jr(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?zr(this).weekday:NaN}get localWeekNumber(){return this.isValid?zr(this).weekNumber:NaN}get localWeekYear(){return this.isValid?zr(this).weekYear:NaN}get ordinal(){return this.isValid?Fr(this.c).ordinal:NaN}get monthShort(){return this.isValid?Pt.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Pt.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Pt.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Pt.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const e=864e5,r=6e4,n=br(this.c),s=this.zone.offset(n-e),i=this.zone.offset(n+e),a=this.zone.offset(n-s*r),o=this.zone.offset(n-i*r);if(a===o)return[this];const l=n-a*r,u=n-o*r,c=Dt(l,a),d=Dt(u,o);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[fe(this,{ts:l}),fe(this,{ts:u})]:[this]}get isInLeapYear(){return kt(this.year)}get daysInMonth(){return sr(this.year,this.month)}get daysInYear(){return this.isValid?De(this.year):NaN}get weeksInWeekYear(){return this.isValid?wt(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?wt(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){const{locale:r,numberingSystem:n,calendar:s}=P.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:s}}toUTC(e=0,r={}){return this.setZone(D.instance(e),r)}toLocal(){return this.setZone(O.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(e=ae(e,O.defaultZone),e.equals(this.zone))return this;if(e.isValid){let s=this.ts;if(r||n){const i=e.offset(this.ts),a=this.toObject();[s]=jt(a,i,e)}return fe(this,{ts:s,zone:e})}else return g.invalid(_t(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:n}={}){const s=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:n});return fe(this,{loc:s})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;const r=ir(e,vi),{minDaysInFirstWeek:n,startOfWeek:s}=ii(r,this.loc),i=!y(r.weekYear)||!y(r.weekNumber)||!y(r.weekday),a=!y(r.ordinal),o=!y(r.year),l=!y(r.month)||!y(r.day),u=o||l,c=r.weekYear||r.weekNumber;if((u||a)&&c)throw new Pe("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new Pe("Can't mix ordinal dates with month/day");let d;i?d=ni({...nr(this.c,n,s),...r},n,s):y(r.ordinal)?(d={...this.toObject(),...r},y(r.day)&&(d.day=Math.min(sr(d.year,d.month),d.day))):d=si({...Fr(this.c),...r});const[f,h]=jt(d,this.o,this.zone);return fe(this,{ts:f,o:h})}plus(e){if(!this.isValid)return this;const r=E.fromDurationLike(e);return fe(this,gi(this,r))}minus(e){if(!this.isValid)return this;const r=E.fromDurationLike(e).negate();return fe(this,gi(this,r))}startOf(e,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},s=E.normalizeUnit(e);switch(s){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(s==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:a}=this;a<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(s==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(e,r){return this.isValid?this.plus({[e]:1}).startOf(e,r).minus(1):this}toFormat(e,r={}){return this.isValid?P.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):Ur}toLocaleString(e=rr,r={}){return this.isValid?P.create(this.loc.clone(r),e).formatDateTime(this):Ur}toLocaleParts(e={}){return this.isValid?P.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:s=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=e==="extended";let o=qr(this,a);return o+="T",o+=wi(this,a,r,n,s,i),o}toISODate({format:e="extended"}={}){return this.isValid?qr(this,e==="extended"):null}toISOWeekDate(){return Rt(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:s=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(s?"T":"")+wi(this,a==="extended",r,e,n,i):null}toRFC2822(){return Rt(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Rt(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?qr(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let s="HH:mm:ss.SSS";return(r||e)&&(n&&(s+=" "),r?s+="z":e&&(s+="ZZ")),Rt(this,s,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Ur}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};const r={...this.c};return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",n={}){if(!this.isValid||!e.isValid)return E.invalid("created by diffing an invalid DateTime");const s={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=ud(r).map(E.normalizeUnit),a=e.valueOf()>this.valueOf(),o=a?this:e,l=a?e:this,u=mf(o,l,i,s);return a?u.negate():u}diffNow(e="milliseconds",r={}){return this.diff(g.now(),e,r)}until(e){return this.isValid?C.fromDateTimes(this,e):this}hasSame(e,r,n){if(!this.isValid)return!1;const s=e.valueOf(),i=this.setZone(e.zone,{keepLocalTime:!0});return i.startOf(r,n)<=s&&s<=i.endOf(r,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;const r=e.base||g.fromObject({},{zone:this.zone}),n=e.padding?this<r?-e.padding:e.padding:0;let s=["years","months","days","hours","minutes","seconds"],i=e.unit;return Array.isArray(e.unit)&&(s=e.unit,i=void 0),Ti(r,this.plus(n),{...e,numeric:"always",units:s,unit:i})}toRelativeCalendar(e={}){return this.isValid?Ti(e.base||g.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(g.isDateTime))throw new R("min requires all arguments be DateTimes");return ai(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(g.isDateTime))throw new R("max requires all arguments be DateTimes");return ai(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,n={}){const{locale:s=null,numberingSystem:i=null}=n,a=k.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0});return ko(a,e,r)}static fromStringExplain(e,r,n={}){return g.fromFormatExplain(e,r,n)}static get DATE_SHORT(){return rr}static get DATE_MED(){return Na}static get DATE_MED_WITH_WEEKDAY(){return Hc}static get DATE_FULL(){return La}static get DATE_HUGE(){return Pa}static get TIME_SIMPLE(){return Ia}static get TIME_WITH_SECONDS(){return _a}static get TIME_WITH_SHORT_OFFSET(){return Da}static get TIME_WITH_LONG_OFFSET(){return Ra}static get TIME_24_SIMPLE(){return Ha}static get TIME_24_WITH_SECONDS(){return Va}static get TIME_24_WITH_SHORT_OFFSET(){return Fa}static get TIME_24_WITH_LONG_OFFSET(){return Wa}static get DATETIME_SHORT(){return Ua}static get DATETIME_SHORT_WITH_SECONDS(){return ja}static get DATETIME_MED(){return za}static get DATETIME_MED_WITH_SECONDS(){return qa}static get DATETIME_MED_WITH_WEEKDAY(){return Vc}static get DATETIME_FULL(){return Ba}static get DATETIME_FULL_WITH_SECONDS(){return Za}static get DATETIME_HUGE(){return Ga}static get DATETIME_HUGE_WITH_SECONDS(){return Ya}}function tt(t){if(g.isDateTime(t))return t;if(t&&t.valueOf&&be(t.valueOf()))return g.fromJSDate(t);if(t&&typeof t=="object")return g.fromObject(t);throw new R(`Unknown datetime argument: ${t}, of type ${typeof t}`)}function pn(t){const e=g.fromObject(Nc(t,["timezone"]),{zone:t.timezone});if(!e.isValid)throw new Error(e.invalidExplanation??void 0);return e}function ph(t,e){if(!t.isValid)throw new Error(`Invalid input: '${t.toISO()}'`);return{day:t.day,month:t.month,year:t.year,hour:t.hour,minute:t.minute,second:t.second,millisecond:t.millisecond,timezone:e??t.zoneName}}const _f=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Df=_f.reduce((t,e)=>(t[e]=e,t),{}),yh=O.defaultZone.name,Co=Df.UTC;var $i;(function(t){t.Date="date",t.Time="time",t.DateTime="datetime-local"})($i||($i={}));const Rf=["hour","minute","second","millisecond"],Hf=z({hour:14,minute:19,second:7,millisecond:877,timezone:Co}),Vf=z({year:2023,month:6,day:5,timezone:Co}),Br=z(su(Vf,Hf));var v;(function(t){t.Years="years",t.Quarters="quarters",t.Months="months",t.Weeks="weeks",t.Days="days",t.Hours="hours",t.Minutes="minutes",t.Seconds="seconds",t.Milliseconds="milliseconds"})(v||(v={}));v.Milliseconds+"",v.Seconds+"",v.Minutes+"",v.Hours+"",v.Days+"",v.Weeks+"",v.Months+"",v.Quarters+"",v.Years+"";v.Milliseconds,v.Seconds,v.Minutes,v.Hours,v.Days,v.Weeks,v.Months,v.Quarters,v.Years;function Si(t,e){return Pc(t,(r,n)=>e==null||!L(n,"number")?n:Cc({number:n,digits:e}))}function gh(t,e){if(Ff(t))return{[e]:1/0};if(Wf(t))return{[e]:-1/0};const n=E.fromObject(t).as(e);return{[e]:n}}function Ff(t){return Object.values(t).some(e=>e===1/0)}function Wf(t){return Object.values(t).some(e=>e===-1/0)}const ki={longterm:1,casual:0},No={[v.Years]:"longterm",[v.Quarters]:"longterm",[v.Months]:"longterm",[v.Weeks]:"casual",[v.Days]:"casual",[v.Hours]:"casual",[v.Minutes]:"casual",[v.Seconds]:"casual",[v.Milliseconds]:"casual"};function Uf(t){return t.map(n=>No[n]).reduce((n,s)=>ki[s]>ki[n]?s:n)}var dt;(function(t){t.AdditiveUnits="additive-units",t.EquivalentUnits="equivalent-units"})(dt||(dt={}));function jf({start:t,end:e,units:r,unit:n,diffType:s,decimalCount:i}){const a=pn(t),o=pn(e),l=r??[n],u=l.length===1?dt.EquivalentUnits:s;if(!u)throw new Error("Failed to diff dates: no diffType was provided.");if(u===dt.AdditiveUnits){const c=Uf(l),d=o.diff(a,l,{conversionAccuracy:c}).toObject();return Si(d,i)}else if(u===dt.EquivalentUnits){const c=l.map(f=>{const w=o.diff(a,f,{conversionAccuracy:No[f]}).toObject()[f];if(w==null)throw new Error(`Internal date-vir error: failed to find duration for '${f}'`);return[f,w]}),d=Oc(c);return Si(d,i)}else throw new Error(`Failed to diff dates: provided diffType is invalid: '${u}'`)}function wh({relativeTo:t,fullDate:e}){return jf({start:t,end:e,unit:v.Milliseconds}).milliseconds>=0}function Oe(t){return pn(t).toMillis()}const zf={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Lc(zf,Rf);O.defaultLocale;v.Milliseconds+"",v.Seconds+"",v.Minutes+"",v.Hours+"",v.Days+"",v.Weeks+"",v.Months+"",v.Quarters+"",v.Years+"";const Ie=z({username:"",profileUrl:"",avatarUrl:""},!0),qf=z({repoName:"",repoOwner:Ie,htmlUrl:"",isPrivate:!1,isArchived:!1},!0),Ai=z({repo:qf,branchName:ut("",Qr(Error)),headCommitHash:ut("",Qr(Error))},!0);var ge=(t=>(t.Draft="draft",t.Merged="merged",t.Open="open",t.Rejected="rejected",t))(ge||{}),Fn=(t=>(t.Accepted="accepted",t.Rejected="rejected",t))(Fn||{});const Bf=z({successCount:0,failCount:0,inProgressCount:0,totalCount:0},!0),Zf=z({user:Ie,reviewStatus:Zt(Fn)},!0),vh=z({id:{htmlUrl:"",prId:"",prNumber:"",title:"",owner:Ie},auth:{client:Zt(Be),tokenName:""},branches:{headBranch:Ai,targetBranch:Ai},dates:{created:Br,lastUpdated:Br,closed:ut(void 0,Br)},status:{checksStatus:ut(Bf,Qr(Error)),commentCount:0,commitCount:0,mergeStatus:Zt(ge),mergedBy:ut(void 0,Ie),needsReviewFromCurrentUser:!1},changes:{additions:0,deletions:0,changedFiles:0},users:{reviewers:{submitted:lt({keys:"",values:Zf,required:!1}),pending:lt({keys:"",values:Ie,required:!1})},assignees:lt({keys:"",values:Ie,required:!1})}});function Gf(t,e){const r={};return e.forEach(n=>{const s=n.id.owner,i=_i(r,s.username,()=>({owner:s,pullRequests:{assigned:[],closed:[],reviewer:[]}}));n.status.mergeStatus===ge.Merged||n.status.mergeStatus===ge.Rejected?i.pullRequests.closed.push(n):t.username in n.users.assignees?i.pullRequests.assigned.push(n):i.pullRequests.reviewer.push(n)}),Object.values(r).forEach(n=>{n.pullRequests.assigned.sort((s,i)=>Oe(s.dates.created)-Oe(i.dates.created)),n.pullRequests.reviewer.sort((s,i)=>Oe(i.dates.lastUpdated)-Oe(s.dates.lastUpdated)).sort((s,i)=>{if(s.status.mergeStatus!==i.status.mergeStatus){if(s.status.mergeStatus===ge.Draft)return 1;if(i.status.mergeStatus===ge.Draft)return-1}return 0}).sort((s,i)=>s.status.needsReviewFromCurrentUser===i.status.needsReviewFromCurrentUser?0:s.status.needsReviewFromCurrentUser?-1:1),n.pullRequests.closed.sort((s,i)=>{if(s.dates.closed){if(!i.dates.closed)return 1}else return-1;return Oe(i.dates.closed)-Oe(s.dates.closed)})}),r}var Yf=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Kf(){return class extends Event{constructor(e,r){super(e,r),Object.defineProperty(this,"detail",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.detail=r.detail}}}const Jf=globalThis.CustomEvent||Kf();function $r(){function t(e){var r;return r=class extends Jf{constructor(s){super(e,s)}},Yf(r,"TypedEventConstructor"),Object.defineProperty(r,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),r}return t}globalThis&&globalThis.__setFunctionName;var xi;(function(t){t.Upper="upper",t.Lower="lower"})(xi||(xi={}));var Mi;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Mi||(Mi={}));function Qf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Qf();class Th extends $r()("pull-requests-resolved"){}class Eh extends $r()("custom-error"){}class $h extends $r()("pull-requests-update-started"){}class Xf extends $r()("pull-requests-change"){}function eh(t){const e=t.reduce((r,n)=>{const s=n.branches.headBranch.branchName,i=s instanceof Error?"":s;return _i(r,i,()=>[]).push({pullRequest:n,children:[],isChained:!1}),r},{});return Object.values(e).forEach(r=>{r.forEach(n=>{const s=n.pullRequest.branches.targetBranch.branchName;if(s instanceof Error)return;const i=e[s];i&&(n.isChained=!0,i.forEach(a=>{a.children.push(n)}))})}),Object.values(e).flat().filter(r=>!r.isChained)}const he=K()({tagName:"vir-user",styles:A`
        a {
            display: flex;
            align-items: center;
            gap: 0.3em;
        }

        ${Ir} {
            max-height: 1em;
            max-width: 1em;
            min-height: 1em;
            min-width: 1em;
            border-radius: 0.5em;
            background-color: white;
            border: 1px solid #eee;
        }

        ${x} {
            color: red;
        }

        ${x}.success {
            color: green;
        }

        .avatar {
            display: flex;
            flex-direction: column;
        }

        .placeholder {
            visibility: hidden;
        }
    `,renderCallback({inputs:t}){var a,o;const e=t.status==null?void 0:t.status.status?ya:Xt,r=!!t.show.statusSpace&&!e,n=e||r?p`
                      <${x.assign({icon:r?Xt:e,fitContainer:!0})}
                          class="status-icon ${lr({success:!!((a=t.status)!=null&&a.status),placeholder:r})}"
                          title=${(o=t.status)==null?void 0:o.description}
                      ></${x}>
                  `:S,s=p`
            <div class="avatar">
                <${Ir.assign({imageUrl:t.user.avatarUrl})}
                    title=${t.user.username}
                ></${Ir}>
                ${n}
            </div>
        `,i=t.user.username;return p`
            <a href=${t.user.profileUrl}>
                ${t.show.avatar?s:S}
                ${t.show.username?i:S}
            </a>
        `}}),Ht=K()({tagName:"vir-users",hostClasses:{"vir-users-overlap-icons":({inputs:t})=>t.overlap},styles:({hostClasses:t})=>A`
        :host {
            display: flex;
            align-items: center;
            align-items: flex-start;
        }

        ${he} {
            font-size: 20px;
        }

        ${t["vir-users-overlap-icons"].selector} ${he} + ${he} {
            margin-left: -10px;
        }
    `,renderCallback({inputs:t}){const r=[...t.users].sort((n,s)=>n.username.localeCompare(s.username)).map(n=>{var s;return p`
                <${he.assign({user:n,show:{avatar:!0,username:!1,statusSpace:t.holdStatusSpace},status:(s=t.statuses)==null?void 0:s[n.username]})}></${he}>
            `});return p`
            ${r}
        `}}),Oi=K()({tagName:"vir-pull-request",styles:A`
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
    `,renderCallback({inputs:t}){const e=Object.values(t.pullRequest.users.assignees).filter(Pi),r=t.pullRequest.status.checksStatus instanceof Error?"error":t.pullRequest.status.checksStatus.failCount?"fail":t.pullRequest.status.checksStatus.inProgressCount?"inProgress":"success",n=t.pullRequest.status.checksStatus instanceof Error?["Error",He(t.pullRequest.status.checksStatus)].join(": "):t.pullRequest.status.checksStatus.failCount?[t.pullRequest.status.checksStatus.failCount,"checks failed."].join(" "):t.pullRequest.status.checksStatus.inProgressCount?[t.pullRequest.status.checksStatus.inProgressCount,"check in progress."].join(" "):"All checks passed.",s=Gt(t.pullRequest.branches.headBranch.branchName)?void 0:t.pullRequest.branches.headBranch.branchName,i=Gt(t.pullRequest.branches.targetBranch.branchName)?void 0:t.pullRequest.branches.targetBranch.branchName;return p`
            ${_e(t.nested,p`
                    <div class="nested">↱</div>
                `)}
            <div
                class="pull-request rows grow ${lr({"needs-review":t.pullRequest.status.needsReviewFromCurrentUser,"is-draft":t.pullRequest.status.mergeStatus===ge.Draft})}"
            >
                <div class="columns title">
                    <div class="rows grow">
                        <div class="columns center">
                            <span class="faint">
                                ${t.pullRequest.branches.headBranch.repo.repoName}
                            </span>
                            <div class="checks">
                                <${x.assign({icon:rh[r]})}
                                    class=${r}
                                    title=${n}
                                ></${x}>
                                <${Ht.assign({users:e,overlap:!0})}></${Ht}>
                            </div>
                        </div>
                        <a href=${t.pullRequest.id.htmlUrl}>
                            <b>#${t.pullRequest.id.prNumber}:</b>
                            ${t.pullRequest.id.title}
                        </a>
                    </div>
                    <${Ht.assign({...th(t.pullRequest.users.reviewers),overlap:!1,holdStatusSpace:!0})}></${Ht}>
                </div>
                ${_e(!!(s||i),p`
                        <div class="subtitle faint">
                            <span class="select-all">${i}</span>
                            ←
                            <span class="select-all">${s}</span>
                        </div>
                    `)}
            </div>
        `}});function th(t){const e={},r=[];return Object.values(t.pending).forEach(n=>{n&&(e[n.username]=void 0,r.push(n))}),Object.values(t.submitted).forEach(n=>{if(!n)return;const s=n.reviewStatus===Fn.Accepted,i=s?"approved":"rejected";e[n.user.username]={status:s,description:`${n.user.username} has ${i} this pull request.`},r.push(n.user)}),{statuses:e,users:r}}const rh={error:$s,fail:Xt,inProgress:$s,success:ya},Ci=K()({tagName:"vir-org-pull-requests",styles:A`
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
    `,renderCallback({inputs:t}){const r=[{title:"Reviewer",pullRequests:t.ownedPullRequests.pullRequests.reviewer},{title:"Assigned",pullRequests:t.ownedPullRequests.pullRequests.assigned}].map(n=>{const i=eh(n.pullRequests).flatMap(a=>Lo(a,t.user));return i.length?p`
                    <section class="pull-request-section">
                        <h3>${n.title} (${i.length})</h3>
                        <div class="pull-requests">${i}</div>
                    </section>
                `:S}).filter(Pi);return r.length?p`
            <div class="wrapper">
                <h2>
                    <${he.assign({user:t.ownedPullRequests.owner,show:{avatar:!0,username:!0}})}></${he}>
                </h2>
                ${r}
            </div>
        `:S}});function Lo(t,e,r){const n=t.children.flatMap(s=>Lo(s,e,!0));return[p`
            <${Oi.assign({user:e,pullRequest:t.pullRequest,nested:!!r})}></${Oi}>
        `,...n]}const nh=K()({tagName:"vir-github-pull-requests",styles:A`
        :host {
            display: flex;
            flex-wrap: wrap;
        }
    `,stateInitStatic:{githubClient:void 0,pullRequests:void 0,user:void 0},renderCallback({state:t,updateState:e,inputs:r}){var a;if(!t.githubClient){const o=r.webClientInterface.github.init(r.authTokens);return e({githubClient:o}),o.listen(Xf,l=>{e({user:l.detail.user,pullRequests:l.detail.pullRequests})}),S}const n=t.user;if(!n)return p`
                <${x.assign({icon:Qt})}></${x}>
            `;const s=Gf(n,((a=t.pullRequests)==null?void 0:a.filter(o=>!(o instanceof Error)))||[]);return Object.values(s).map(o=>p`
                    <${Ci.assign({user:n,ownedPullRequests:o})}></${Ci}>
                `)}}),sh={[Be.Github]:nh},Ni=K()({tagName:"vir-pull-requests-main-page",renderCallback({inputs:t}){return gn(Be).map(r=>{const n=t.serviceAuthTokens[r];if(!(n!=null&&n.length))return S;const s=sh[r];return p`
                <${s.assign({authTokens:n,webClientInterface:t.webClientInterface})}></${s}>
            `})}});$t({tagName:"vir-review-vir-app",styles:A`
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

        ${Ct} {
            align-self: flex-start;
        }
    `,stateInitStatic:{serviceAuthTokens:ys({updateCallback({secretEncryptionKey:t},{webClientInterface:e}){if(!t)throw new Error("No encryption key.");return e.authStore.loadServiceAuthTokens({secretEncryptionKey:t})}}),webClientInterface:ys({defaultValue:xc()}),router:oc(),currentRoute:void 0},initCallback({state:t,updateState:e}){t.router.addRouteListener(!0,r=>{e({currentRoute:r})})},renderCallback({state:t}){const e=t.webClientInterface.value;if(gs(e)){if(Gt(e))return p`
                <${Le}>${He(e)}</${Le}>
            `}else return p`
                <${x.assign({icon:Qt})}></${x}>
            `;t.serviceAuthTokens.updateTrigger({secretEncryptionKey:Ds.encryptionKey},{webClientInterface:e});const r=t.serviceAuthTokens.value;if(gs(r)){if(Gt(r))return p`
                <${Le}>${He(r)}</${Le}>
            `}else return p`
                <${x.assign({icon:Qt})}></${x}>
            `;const n=Object.keys(r).length===0?{...gt,paths:[ve.Auth]}:t.currentRoute||gt;Ii(n,t.currentRoute)||t.router.setRoutes(n);const s=n.paths[0]===ve.Auth?p`
                      <${Ct.assign({authTokens:r})}
                          ${I(Ct.events.authTokensByServiceChange,async i=>{e.authStore.saveServiceAuthTokens({secretEncryptionKey:Ds.encryptionKey,authTokensByService:i.detail}),t.serviceAuthTokens.setResolvedValue(i.detail)})}
                      ></${Ct}>
                  `:S;return p`
            <div
                class="root"
                ${I(on,i=>{t.router.setRoutes(i.detail.route)})}
            >
                <${zs.assign({currentRoute:n,router:t.router})}></${zs}>
                ${s}
                <${Ni.assign({serviceAuthTokens:r,webClientInterface:e})}
                    class=${lr({"hide-main-page":n.paths[0]!==ve.PullRequests})}
                ></${Ni}>
            </div>
        `}});export{qo as A,wh as B,oa as C,g as D,Th as E,Ii as F,$h as G,Xf as H,Pt as I,Eh as J,gh as K,v as L,Zr as M,mh as N,gn as O,ge as P,Ds as Q,sc as R,Be as S,la as a,yh as b,Ie as c,z as d,Qr as e,Br as f,yn as g,vh as h,L as i,iu as j,Zt as k,su as l,Pi as m,uh as n,ut as o,ph as p,lh as q,oh as r,ah as s,pn as t,Co as u,Fn as v,Gt as w,zo as x,Wo as y,ch as z};
