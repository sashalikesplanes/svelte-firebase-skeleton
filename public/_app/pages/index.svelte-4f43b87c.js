var uc=Object.defineProperty,lc=Object.defineProperties;var dc=Object.getOwnPropertyDescriptors;var zi=Object.getOwnPropertySymbols;var fc=Object.prototype.hasOwnProperty,pc=Object.prototype.propertyIsEnumerable;var Wi=(e,t,n)=>t in e?uc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jn=(e,t)=>{for(var n in t||(t={}))fc.call(t,n)&&Wi(e,n,t[n]);if(zi)for(var n of zi(t))pc.call(t,n)&&Wi(e,n,t[n]);return e},Zn=(e,t)=>lc(e,dc(t));import{S as gc,i as mc,s as yc,K as vc,e as ft,t as Ks,k as Je,l as Xi,c as pt,a as _t,h as Hs,d as st,m as Ze,g as Ht,J as at,L as wc,n as gt,b as bt,M as Ec,N as Tc}from"../chunks/index-62fbe76e.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ic=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,h=c?e[i+2]:0,u=r>>2,l=(r&3)<<4|a>>4;let p=(a&15)<<2|h>>6,m=h&63;c||(m=64,o||(p=64)),s.push(n[u],n[l],n[p],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Zr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ic(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||h==null||l==null)throw Error();const p=r<<2|a>>4;if(s.push(p),h!==64){const m=a<<4&240|h>>2;if(s.push(m),l!==64){const v=h<<6&192|l;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Cc=function(e){const t=Zr(e);return Sc.encodeByteArray(t,!0)},to=function(e){return Cc(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ac(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cn())}function _c(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Dc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nc(){return Cn().indexOf("Electron/")>=0}function kc(){const e=Cn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Rc(){return Cn().indexOf("MSAppHost/")>=0}function Lc(){return typeof indexedDB=="object"}function xc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="FirebaseError";class bn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Mc,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Oc(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bn(i,a,s)}}function Oc(e,t){return e.replace(Pc,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Pc=/\{\$([^}]+)}/g;function ms(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Yi(r)&&Yi(o)){if(!ms(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Yi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e){return e&&e._delegate?e._delegate:e}class ye{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new bc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Uc(t))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=At){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=At){return this.instances.has(t)}getOptions(t=At){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Fc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=At){return this.component?this.component.multipleInstances?t:At:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fc(e){return e===At?void 0:e}function Uc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Vc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(A||(A={}));const $c={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},jc=A.INFO,qc={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},Kc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=qc[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class no{constructor(t){this.name=t,this._logLevel=jc,this._logHandler=Kc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in A))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$c[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...t),this._logHandler(this,A.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...t),this._logHandler(this,A.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,A.INFO,...t),this._logHandler(this,A.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,A.WARN,...t),this._logHandler(this,A.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...t),this._logHandler(this,A.ERROR,...t)}}const Hc=(e,t)=>t.some(n=>e instanceof n);let Qi,Ji;function Gc(){return Qi||(Qi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zc(){return Ji||(Ji=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const so=new WeakMap,ys=new WeakMap,io=new WeakMap,ts=new WeakMap,Gs=new WeakMap;function Wc(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(mt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&so.set(n,e)}).catch(()=>{}),Gs.set(t,e),t}function Xc(e){if(ys.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});ys.set(e,t)}let vs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ys.get(e);if(t==="objectStoreNames")return e.objectStoreNames||io.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Yc(e){vs=e(vs)}function Qc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(es(this),t,...n);return io.set(s,t.sort?t.sort():[t]),mt(s)}:zc().includes(e)?function(...t){return e.apply(es(this),t),mt(so.get(this))}:function(...t){return mt(e.apply(es(this),t))}}function Jc(e){return typeof e=="function"?Qc(e):(e instanceof IDBTransaction&&Xc(e),Hc(e,Gc())?new Proxy(e,vs):e)}function mt(e){if(e instanceof IDBRequest)return Wc(e);if(ts.has(e))return ts.get(e);const t=Jc(e);return t!==e&&(ts.set(e,t),Gs.set(t,e)),t}const es=e=>Gs.get(e);function Zc(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(mt(o.result),c.oldVersion,c.newVersion,mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const th=["get","getKey","getAll","getAllKeys","count"],eh=["put","add","delete","clear"],ns=new Map;function Zi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ns.get(t))return ns.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=eh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||th.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&c.done]))[0]};return ns.set(t,r),r}Yc(e=>Zn(Jn({},e),{get:(t,n,s)=>Zi(t,n)||e.get(t,n,s),has:(t,n)=>!!Zi(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function sh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ws="@firebase/app",tr="0.7.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new no("@firebase/app"),ih="@firebase/app-compat",rh="@firebase/analytics-compat",oh="@firebase/analytics",ah="@firebase/app-check-compat",ch="@firebase/app-check",hh="@firebase/auth",uh="@firebase/auth-compat",lh="@firebase/database",dh="@firebase/database-compat",fh="@firebase/functions",ph="@firebase/functions-compat",gh="@firebase/installations",mh="@firebase/installations-compat",yh="@firebase/messaging",vh="@firebase/messaging-compat",wh="@firebase/performance",Eh="@firebase/performance-compat",Th="@firebase/remote-config",Ih="@firebase/remote-config-compat",Sh="@firebase/storage",Ch="@firebase/storage-compat",bh="@firebase/firestore",Ah="@firebase/firestore-compat",_h="firebase",Dh="9.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="[DEFAULT]",Nh={[ws]:"fire-core",[ih]:"fire-core-compat",[oh]:"fire-analytics",[rh]:"fire-analytics-compat",[ch]:"fire-app-check",[ah]:"fire-app-check-compat",[hh]:"fire-auth",[uh]:"fire-auth-compat",[lh]:"fire-rtdb",[dh]:"fire-rtdb-compat",[fh]:"fire-fn",[ph]:"fire-fn-compat",[gh]:"fire-iid",[mh]:"fire-iid-compat",[yh]:"fire-fcm",[vh]:"fire-fcm-compat",[wh]:"fire-perf",[Eh]:"fire-perf-compat",[Th]:"fire-rc",[Ih]:"fire-rc-compat",[Sh]:"fire-gcs",[Ch]:"fire-gcs-compat",[bh]:"fire-fst",[Ah]:"fire-fst-compat","fire-js":"fire-js",[_h]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Map,Es=new Map;function kh(e,t){try{e.container.addComponent(t)}catch(n){zs.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function on(e){const t=e.name;if(Es.has(t))return zs.debug(`There were multiple attempts to register component ${t}.`),!1;Es.set(t,e);for(const n of rn.values())kh(n,e);return!0}function Rh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Rt=new eo("app","Firebase",Lh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=Dh;function Oh(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:ro,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Rt.create("bad-app-name",{appName:String(s)});const i=rn.get(s);if(i){if(ms(e,i.options)&&ms(n,i.config))return i;throw Rt.create("duplicate-app",{appName:s})}const r=new Bc(s);for(const a of Es.values())r.addComponent(a);const o=new xh(e,n,r);return rn.set(s,o),o}function Ph(e=ro){const t=rn.get(e);if(!t)throw Rt.create("no-app",{appName:e});return t}function Gt(e,t,n){var s;let i=(s=Nh[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zs.warn(a.join(" "));return}on(new ye(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="firebase-heartbeat-database",Fh=1,ve="firebase-heartbeat-store";let ss=null;function oo(){return ss||(ss=Zc(Vh,Fh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ve)}}}).catch(e=>{throw Rt.create("storage-open",{originalErrorMessage:e.message})})),ss}async function Uh(e){try{return(await oo()).transaction(ve).objectStore(ve).get(ao(e))}catch(t){throw Rt.create("storage-get",{originalErrorMessage:t.message})}}async function er(e,t){try{const s=(await oo()).transaction(ve,"readwrite");return await s.objectStore(ve).put(t,ao(e)),s.done}catch(n){throw Rt.create("storage-set",{originalErrorMessage:n.message})}}function ao(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=1024,$h=30*24*60*60*1e3;class jh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=$h}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nr(),{heartbeatsToSend:n,unsentEntries:s}=qh(this._heartbeatsCache.heartbeats),i=to(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nr(){return new Date().toISOString().substring(0,10)}function qh(e,t=Bh){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),sr(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Kh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lc()?xc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Uh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return er(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return er(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function sr(e){return to(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(e){on(new ye("platform-logger",t=>new nh(t),"PRIVATE")),on(new ye("heartbeat",t=>new jh(t),"PRIVATE")),Gt(ws,tr,e),Gt(ws,tr,"esm2017"),Gt("fire-js","")}Hh("");var Gh="firebase",zh="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(Gh,zh,"app");var Wh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,Ws=Ws||{},T=Wh||self;function an(){}function Ts(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ke(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Xh(e){return Object.prototype.hasOwnProperty.call(e,is)&&e[is]||(e[is]=++Yh)}var is="closure_uid_"+(1e9*Math.random()>>>0),Yh=0;function Qh(e,t,n){return e.call.apply(e.bind,arguments)}function Jh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function $(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$=Qh:$=Jh,$.apply(null,arguments)}function He(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function H(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function St(){this.s=this.s,this.o=this.o}var Zh=0;St.prototype.s=!1;St.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Zh!=0)&&Xh(this)};St.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const co=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},ho=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function tu(e){t:{var t=Hu;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function ir(e){return Array.prototype.concat.apply([],arguments)}function Xs(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function cn(e){return/^[\s\xa0]*$/.test(e)}var rr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Q(e,t){return e.indexOf(t)!=-1}function rs(e,t){return e<t?-1:e>t?1:0}var J;t:{var or=T.navigator;if(or){var ar=or.userAgent;if(ar){J=ar;break t}}J=""}function Ys(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function uo(e){const t={};for(const n in e)t[n]=e[n];return t}var cr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lo(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<cr.length;r++)n=cr[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Qs(e){return Qs[" "](e),e}Qs[" "]=an;function eu(e){var t=iu;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var nu=Q(J,"Opera"),Yt=Q(J,"Trident")||Q(J,"MSIE"),fo=Q(J,"Edge"),Is=fo||Yt,po=Q(J,"Gecko")&&!(Q(J.toLowerCase(),"webkit")&&!Q(J,"Edge"))&&!(Q(J,"Trident")||Q(J,"MSIE"))&&!Q(J,"Edge"),su=Q(J.toLowerCase(),"webkit")&&!Q(J,"Edge");function go(){var e=T.document;return e?e.documentMode:void 0}var hn;t:{var os="",as=function(){var e=J;if(po)return/rv:([^\);]+)(\)|;)/.exec(e);if(fo)return/Edge\/([\d\.]+)/.exec(e);if(Yt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(su)return/WebKit\/(\S+)/.exec(e);if(nu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(as&&(os=as?as[1]:""),Yt){var cs=go();if(cs!=null&&cs>parseFloat(os)){hn=String(cs);break t}}hn=os}var iu={};function ru(){return eu(function(){let e=0;const t=rr(String(hn)).split("."),n=rr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=rs(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||rs(i[2].length==0,r[2].length==0)||rs(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Ss;if(T.document&&Yt){var hr=go();Ss=hr||parseInt(hn,10)||void 0}else Ss=void 0;var ou=Ss,au=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",an,t),T.removeEventListener("test",an,t)}catch{}return e}();function X(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};function we(e,t){if(X.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(po){t:{try{Qs(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:cu[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&we.Z.h.call(this)}}H(we,X);var cu={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Re="closure_listenable_"+(1e6*Math.random()|0),hu=0;function uu(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++hu,this.ca=this.fa=!1}function An(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function _n(e){this.src=e,this.g={},this.h=0}_n.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=bs(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new uu(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function Cs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=co(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(An(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function bs(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var Js="closure_lm_"+(1e6*Math.random()|0),hs={};function mo(e,t,n,s,i){if(s&&s.once)return vo(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)mo(e,t[r],n,s,i);return null}return n=ei(n),e&&e[Re]?e.N(t,n,ke(s)?!!s.capture:!!s,i):yo(e,t,n,!1,s,i)}function yo(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=ke(i)?!!i.capture:!!i,a=ti(e);if(a||(e[Js]=a=new _n(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=lu(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)au||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Eo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function lu(){function e(n){return t.call(e.src,e.listener,n)}var t=du;return e}function vo(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)vo(e,t[r],n,s,i);return null}return n=ei(n),e&&e[Re]?e.O(t,n,ke(s)?!!s.capture:!!s,i):yo(e,t,n,!0,s,i)}function wo(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)wo(e,t[r],n,s,i);else s=ke(s)?!!s.capture:!!s,n=ei(n),e&&e[Re]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=bs(r,n,s,i),-1<n&&(An(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ti(e))&&(t=e.g[t.toString()],e=-1,t&&(e=bs(t,n,s,i)),(n=-1<e?t[e]:null)&&Zs(n))}function Zs(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Re])Cs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Eo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ti(t))?(Cs(n,e),n.h==0&&(n.src=null,t[Js]=null)):An(e)}}}function Eo(e){return e in hs?hs[e]:hs[e]="on"+e}function du(e,t){if(e.ca)e=!0;else{t=new we(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Zs(e),e=n.call(s,t)}return e}function ti(e){return e=e[Js],e instanceof _n?e:null}var us="__closure_events_fn_"+(1e9*Math.random()>>>0);function ei(e){return typeof e=="function"?e:(e[us]||(e[us]=function(t){return e.handleEvent(t)}),e[us])}function F(){St.call(this),this.i=new _n(this),this.P=this,this.I=null}H(F,St);F.prototype[Re]=!0;F.prototype.removeEventListener=function(e,t,n,s){wo(this,e,t,n,s)};function j(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new X(t,e);else if(t instanceof X)t.target=t.target||e;else{var i=t;t=new X(s,e),lo(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Ge(o,s,!0,t)&&i}if(o=t.g=e,i=Ge(o,s,!0,t)&&i,i=Ge(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Ge(o,s,!1,t)&&i}F.prototype.M=function(){if(F.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)An(n[s]);delete e.g[t],e.h--}}this.I=null};F.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};F.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ge(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Cs(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var ni=T.JSON.stringify;function fu(){var e=Io;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class pu{constructor(){this.h=this.g=null}add(t,n){const s=To.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var To=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new gu,e=>e.reset());class gu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mu(e){T.setTimeout(()=>{throw e},0)}function si(e,t){As||yu(),_s||(As(),_s=!0),Io.add(e,t)}var As;function yu(){var e=T.Promise.resolve(void 0);As=function(){e.then(vu)}}var _s=!1,Io=new pu;function vu(){for(var e;e=fu();){try{e.h.call(e.g)}catch(n){mu(n)}var t=To;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}_s=!1}function Dn(e,t){F.call(this),this.h=e||1,this.g=t||T,this.j=$(this.kb,this),this.l=Date.now()}H(Dn,F);g=Dn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),j(this,"tick"),this.da&&(ii(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ii(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){Dn.Z.M.call(this),ii(this),delete this.g};function ri(e,t,n){if(typeof e=="function")n&&(e=$(e,n));else if(e&&typeof e.handleEvent=="function")e=$(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function So(e){e.g=ri(()=>{e.g=null,e.i&&(e.i=!1,So(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class wu extends St{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:So(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ee(e){St.call(this),this.h=e,this.g={}}H(Ee,St);var ur=[];function Co(e,t,n,s){Array.isArray(n)||(n&&(ur[0]=n.toString()),n=ur);for(var i=0;i<n.length;i++){var r=mo(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function bo(e){Ys(e.g,function(t,n){this.g.hasOwnProperty(n)&&Zs(t)},e),e.g={}}Ee.prototype.M=function(){Ee.Z.M.call(this),bo(this)};Ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Nn(){this.g=!0}Nn.prototype.Aa=function(){this.g=!1};function Eu(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&l[1]=="type"?o+(u+"="+h+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Tu(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function qt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Su(e,n)+(s?" "+s:"")})}function Iu(e,t){e.info(function(){return"TIMEOUT: "+t})}Nn.prototype.info=function(){};function Su(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ni(n)}catch{return t}}var Ut={},lr=null;function kn(){return lr=lr||new F}Ut.Ma="serverreachability";function Ao(e){X.call(this,Ut.Ma,e)}H(Ao,X);function Te(e){const t=kn();j(t,new Ao(t,e))}Ut.STAT_EVENT="statevent";function _o(e,t){X.call(this,Ut.STAT_EVENT,e),this.stat=t}H(_o,X);function Z(e){const t=kn();j(t,new _o(t,e))}Ut.Na="timingevent";function Do(e,t){X.call(this,Ut.Na,e),this.size=t}H(Do,X);function Le(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var Rn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},No={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function oi(){}oi.prototype.h=null;function dr(e){return e.h||(e.h=e.i())}function ko(){}var xe={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ai(){X.call(this,"d")}H(ai,X);function ci(){X.call(this,"c")}H(ci,X);var Ds;function Ln(){}H(Ln,oi);Ln.prototype.g=function(){return new XMLHttpRequest};Ln.prototype.i=function(){return{}};Ds=new Ln;function Me(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new Ee(this),this.P=Cu,e=Is?125:void 0,this.W=new Dn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ro}function Ro(){this.i=null,this.g="",this.h=!1}var Cu=45e3,Ns={},un={};g=Me.prototype;g.setTimeout=function(e){this.P=e};function ks(e,t,n){e.K=1,e.v=Mn(lt(t)),e.s=n,e.U=!0,Lo(e,null)}function Lo(e,t){e.F=Date.now(),Oe(e),e.A=lt(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Uo(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Ro,e.g=ra(e.l,n?t:null,!e.s),0<e.O&&(e.L=new wu($(e.Ia,e,e.g),e.O)),Co(e.V,e.g,"readystatechange",e.gb),t=e.H?uo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Te(1),Eu(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&ht(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const u=ht(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>u)&&(u!=3||Is||this.g&&(this.h.h||this.g.ga()||mr(this.g)))){this.I||u!=4||t==7||(t==8||0>=l?Te(3):Te(2)),xn(this);var n=this.g.ba();this.N=n;e:if(xo(this)){var s=mr(this.g);e="";var i=s.length,r=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Dt(this),fe(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Tu(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cn(a)){var h=a;break e}}h=null}if(n=h)qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rs(this,n);else{this.i=!1,this.o=3,Z(12),Dt(this),fe(this);break t}}this.U?(Mo(this,u,o),Is&&this.i&&u==3&&(Co(this.V,this.W,"tick",this.fb),this.W.start())):(qt(this.j,this.m,o,null),Rs(this,o)),u==4&&Dt(this),this.i&&!this.I&&(u==4?ea(this.l,this):(this.i=!1,Oe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Z(12)):(this.o=0,Z(13)),Dt(this),fe(this)}}}catch{}finally{}};function xo(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Mo(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=bu(e,n),i==un){t==4&&(e.o=4,Z(14),s=!1),qt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Ns){e.o=4,Z(15),qt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else qt(e.j,e.m,i,null),Rs(e,i);xo(e)&&i!=un&&i!=Ns&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Z(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),yi(t),t.L=!0,Z(11))):(qt(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),fe(e))}g.fb=function(){if(this.g){var e=ht(this.g),t=this.g.ga();this.C<t.length&&(xn(this),Mo(this,e,t),this.i&&e!=4&&Oe(this))}};function bu(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?un:(n=Number(t.substring(n,s)),isNaN(n)?Ns:(s+=1,s+n>t.length?un:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,Dt(this)};function Oe(e){e.Y=Date.now()+e.P,Oo(e,e.P)}function Oo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Le($(e.eb,e),t)}function xn(e){e.B&&(T.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Iu(this.j,this.A),this.K!=2&&(Te(3),Z(17)),Dt(this),this.o=2,fe(this)):Oo(this,this.Y-e)};function fe(e){e.l.G==0||e.I||ea(e.l,e)}function Dt(e){xn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,ii(e.W),bo(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Rs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ls(n.i,e))){if(n.I=e.N,!e.J&&Ls(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)pn(n),Vn(n);else break t;mi(n),Z(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Le($(n.ab,n),6e3));if(1>=jo(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Nt(n,11)}else if((e.J||n.g==e)&&pn(n),!cn(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const u=h[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const l=h[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const p=h[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.i;!r.g&&(Q(v,"spdy")||Q(v,"quic")||Q(v,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(li(r,r.h),r.h=null))}if(s.D){const D=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(s.sa=D,L(s.F,s.D,D))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=ia(s,s.H?s.la:null,s.W),o.J){qo(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(xn(a),Oe(a)),s.g=o}else Zo(s);0<n.l.length&&Fn(n)}else h[0]!="stop"&&h[0]!="close"||Nt(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Nt(n,7):gi(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}Te(4)}catch{}}function Au(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Ts(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function hi(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ts(e)||typeof e=="string")ho(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Ts(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=Au(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function ie(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof ie)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=ie.prototype;g.R=function(){ui(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return ui(this),this.g.concat()};function ui(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Lt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Lt(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}g.get=function(e,t){return Lt(this.h,e)?this.h[e]:t};g.set=function(e,t){Lt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Lt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Po=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function _u(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof xt){this.g=t!==void 0?t:e.g,ln(this,e.j),this.s=e.s,dn(this,e.i),fn(this,e.m),this.l=e.l,t=e.h;var n=new Ie;n.i=t.i,t.g&&(n.g=new ie(t.g),n.h=t.h),fr(this,n),this.o=e.o}else e&&(n=String(e).match(Po))?(this.g=!!t,ln(this,n[1]||"",!0),this.s=pe(n[2]||""),dn(this,n[3]||"",!0),fn(this,n[4]),this.l=pe(n[5]||"",!0),fr(this,n[6]||"",!0),this.o=pe(n[7]||"")):(this.g=!!t,this.h=new Ie(null,this.g))}xt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(de(t,pr,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(de(t,pr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(de(n,n.charAt(0)=="/"?Lu:Ru,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",de(n,Mu)),e.join("")};function lt(e){return new xt(e)}function ln(e,t,n){e.j=n?pe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function dn(e,t,n){e.i=n?pe(t,!0):t}function fn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function fr(e,t,n){t instanceof Ie?(e.h=t,Ou(e.h,e.g)):(n||(t=de(t,xu)),e.h=new Ie(t,e.g))}function L(e,t,n){e.h.set(t,n)}function Mn(e){return L(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Du(e){return e instanceof xt?lt(e):new xt(e,void 0)}function Nu(e,t,n,s){var i=new xt(null,void 0);return e&&ln(i,e),t&&dn(i,t),n&&fn(i,n),s&&(i.l=s),i}function pe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function de(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ku),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ku(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var pr=/[#\/\?@]/g,Ru=/[#\?:]/g,Lu=/[#\?]/g,xu=/[#\?@]/g,Mu=/#/g;function Ie(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ct(e){e.g||(e.g=new ie,e.h=0,e.i&&_u(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=Ie.prototype;g.add=function(e,t){Ct(this),this.i=null,e=re(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Vo(e,t){Ct(e),t=re(e,t),Lt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Lt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&ui(e)))}function Fo(e,t){return Ct(e),t=re(e,t),Lt(e.g.h,t)}g.forEach=function(e,t){Ct(this),this.g.forEach(function(n,s){ho(n,function(i){e.call(t,i,s,this)},this)},this)};g.T=function(){Ct(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};g.R=function(e){Ct(this);var t=[];if(typeof e=="string")Fo(this,e)&&(t=ir(t,this.g.get(re(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=ir(t,e[n])}return t};g.set=function(e,t){return Ct(this),this.i=null,e=re(this,e),Fo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Uo(e,t,n){Vo(e,t),0<n.length&&(e.i=null,e.g.set(re(e,t),Xs(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function re(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ou(e,t){t&&!e.j&&(Ct(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Vo(this,s),Uo(this,i,n))},e)),e.j=t}var Pu=class{constructor(e,t){this.h=e,this.g=t}};function Bo(e){this.l=e||Vu,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Vu=10;function $o(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function jo(e){return e.h?1:e.g?e.g.size:0}function Ls(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function li(e,t){e.g?e.g.add(t):e.h=t}function qo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Bo.prototype.cancel=function(){if(this.i=Ko(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ko(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Xs(e.i)}function di(){}di.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};di.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function Fu(){this.g=new di}function Uu(e,t,n){const s=n||"";try{hi(e,function(i,r){let o=i;ke(i)&&(o=ni(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Bu(e,t){const n=new Nn;if(T.Image){const s=new Image;s.onload=He(ze,n,s,"TestLoadImage: loaded",!0,t),s.onerror=He(ze,n,s,"TestLoadImage: error",!1,t),s.onabort=He(ze,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=He(ze,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function ze(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Pe(e){this.l=e.$b||null,this.j=e.ib||!1}H(Pe,oi);Pe.prototype.g=function(){return new On(this.l,this.j)};Pe.prototype.i=function(e){return function(){return e}}({});function On(e,t){F.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=fi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}H(On,F);var fi=0;g=On.prototype;g.open=function(e,t){if(this.readyState!=fi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Se(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ve(this)),this.readyState=fi};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Se(this)),this.g&&(this.readyState=3,Se(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ho(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ho(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ve(this):Se(this),this.readyState==3&&Ho(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,Ve(this))};g.Ta=function(e){this.g&&(this.response=e,Ve(this))};g.ha=function(){this.g&&Ve(this)};function Ve(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Se(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Se(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(On.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var $u=T.JSON.parse;function P(e){F.call(this),this.headers=new ie,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Go,this.K=this.L=!1}H(P,F);var Go="",ju=/^https?$/i,qu=["POST","PUT"];g=P.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ds.g(),this.C=this.u?dr(this.u):dr(Ds),this.g.onreadystatechange=$(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){gr(this,r);return}e=n||"";const i=new ie(this.headers);s&&hi(s,function(r,o){i.set(o,r)}),s=tu(i.T()),n=T.FormData&&e instanceof T.FormData,!(0<=co(qu,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xo(this),0<this.B&&((this.K=Ku(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$(this.pa,this)):this.A=ri(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){gr(this,r)}};function Ku(e){return Yt&&ru()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Hu(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof Ws!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,j(this,"timeout"),this.abort(8))};function gr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,zo(e),Pn(e)}function zo(e){e.D||(e.D=!0,j(e,"complete"),j(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,j(this,"complete"),j(this,"abort"),Pn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pn(this,!0)),P.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?Wo(this):this.cb())};g.cb=function(){Wo(this)};function Wo(e){if(e.h&&typeof Ws!="undefined"&&(!e.C[1]||ht(e)!=4||e.ba()!=2)){if(e.v&&ht(e)==4)ri(e.Fa,0,e);else if(j(e,"readystatechange"),ht(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Po)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!ju.test(i?i.toLowerCase():"")}n=s}if(n)j(e,"complete"),j(e,"success");else{e.m=6;try{var o=2<ht(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",zo(e)}}finally{Pn(e)}}}}function Pn(e,t){if(e.g){Xo(e);const n=e.g,s=e.C[0]?an:null;e.g=null,e.C=null,t||j(e,"ready");try{n.onreadystatechange=s}catch{}}}function Xo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function ht(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),$u(t)}};function mr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Go:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gu(e){let t="";return Ys(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function pi(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Gu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):L(e,t,n))}function le(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Yo(e){this.za=0,this.l=[],this.h=new Nn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=le("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=le("baseRetryDelayMs",5e3,e),this.$a=le("retryDelaySeedMs",1e4,e),this.Ya=le("forwardChannelMaxRetries",2,e),this.ra=le("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Bo(e&&e.concurrentRequestLimit),this.Ca=new Fu,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=Yo.prototype;g.ma=8;g.G=1;function gi(e){if(Qo(e),e.G==3){var t=e.V++,n=lt(e.F);L(n,"SID",e.J),L(n,"RID",t),L(n,"TYPE","terminate"),Fe(e,n),t=new Me(e,e.h,t,void 0),t.K=2,t.v=Mn(lt(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=ra(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Oe(t)}sa(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Vn(e){e.g&&(yi(e),e.g.cancel(),e.g=null)}function Qo(e){Vn(e),e.u&&(T.clearTimeout(e.u),e.u=null),pn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function ls(e,t){e.l.push(new Pu(e.Za++,t)),e.G==3&&Fn(e)}function Fn(e){$o(e.i)||e.m||(e.m=!0,si(e.Ha,e),e.C=0)}function zu(e,t){return jo(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Le($(e.Ha,e,t),na(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Me(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=uo(r),lo(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Jo(this,i,t),n=lt(this.F),L(n,"RID",e),L(n,"CVER",22),this.D&&L(n,"X-HTTP-Session-Id",this.D),Fe(this,n),this.o&&r&&pi(n,this.o,r),li(this.i,i),this.Ra&&L(n,"TYPE","init"),this.ja?(L(n,"$req",t),L(n,"SID","null"),i.$=!0,ks(i,n,null)):ks(i,n,t),this.G=2}}else this.G==3&&(e?yr(this,e):this.l.length==0||$o(this.i)||yr(this))};function yr(e,t){var n;t?n=t.m:n=e.V++;const s=lt(e.F);L(s,"SID",e.J),L(s,"RID",n),L(s,"AID",e.U),Fe(e,s),e.o&&e.s&&pi(s,e.o,e.s),n=new Me(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Jo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),li(e.i,n),ks(n,s,t)}function Fe(e,t){e.j&&hi({},function(n,s){L(t,s,n)})}function Jo(e,t,n){n=Math.min(e.l.length,n);var s=e.j?$(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let h=i[c].h;const u=i[c].g;if(h-=r,0>h)r=Math.max(0,i[c].h-100),a=!1;else try{Uu(u,o,"req"+h+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Zo(e){e.g||e.u||(e.Y=1,si(e.Ga,e),e.A=0)}function mi(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Le($(e.Ga,e),na(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,ta(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Le($(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Z(10),Vn(this),ta(this))};function yi(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function ta(e){e.g=new Me(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=lt(e.oa);L(t,"RID","rpc"),L(t,"SID",e.J),L(t,"CI",e.N?"0":"1"),L(t,"AID",e.U),Fe(e,t),L(t,"TYPE","xmlhttp"),e.o&&e.s&&pi(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Mn(lt(t)),n.s=null,n.U=!0,Lo(n,e)}g.ab=function(){this.v!=null&&(this.v=null,Vn(this),mi(this),Z(19))};function pn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function ea(e,t){var n=null;if(e.g==t){pn(e),yi(e),e.g=null;var s=2}else if(Ls(e.i,t))n=t.D,qo(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=kn(),j(s,new Do(s,n,t,i)),Fn(e)}else Zo(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&zu(e,t)||s==2&&mi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Nt(e,5);break;case 4:Nt(e,10);break;case 3:Nt(e,6);break;default:Nt(e,2)}}}function na(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Nt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=$(e.jb,e);n||(n=new xt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||ln(n,"https"),Mn(n)),Bu(n.toString(),s)}else Z(2);e.G=0,e.j&&e.j.va(t),sa(e),Qo(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Z(2)):(this.h.info("Failed to ping google.com"),Z(1))};function sa(e){e.G=0,e.I=-1,e.j&&((Ko(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Xs(e.l),e.l.length=0),e.j.ua())}function ia(e,t,n){let s=Du(n);if(s.i!="")t&&dn(s,t+"."+s.i),fn(s,s.m);else{const i=T.location;s=Nu(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&Ys(e.aa,function(i,r){L(s,r,i)}),t=e.D,n=e.sa,t&&n&&L(s,t,n),L(s,"VER",e.ma),Fe(e,s),s}function ra(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new P(new Pe({ib:!0})):new P(e.qa),t.L=e.H,t}function oa(){}g=oa.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function gn(){if(Yt&&!(10<=Number(ou)))throw Error("Environmental error: no available transport.")}gn.prototype.g=function(e,t){return new it(e,t)};function it(e,t){F.call(this),this.g=new Yo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!cn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!cn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new oe(this)}H(it,F);it.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),si($(e.hb,e,t))),Z(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=ia(e,null,e.W),Fn(e)};it.prototype.close=function(){gi(this.g)};it.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,ls(this.g,t)}else this.v?(t={},t.__data__=ni(e),ls(this.g,t)):ls(this.g,e)};it.prototype.M=function(){this.g.j=null,delete this.j,gi(this.g),delete this.g,it.Z.M.call(this)};function aa(e){ai.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}H(aa,ai);function ca(){ci.call(this),this.status=1}H(ca,ci);function oe(e){this.g=e}H(oe,oa);oe.prototype.xa=function(){j(this.g,"a")};oe.prototype.wa=function(e){j(this.g,new aa(e))};oe.prototype.va=function(e){j(this.g,new ca(e))};oe.prototype.ua=function(){j(this.g,"b")};gn.prototype.createWebChannel=gn.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;Rn.NO_ERROR=0;Rn.TIMEOUT=8;Rn.HTTP_ERROR=6;No.COMPLETE="complete";ko.EventType=xe;xe.OPEN="a";xe.CLOSE="b";xe.ERROR="c";xe.MESSAGE="d";F.prototype.listen=F.prototype.N;P.prototype.listenOnce=P.prototype.O;P.prototype.getLastError=P.prototype.La;P.prototype.getLastErrorCode=P.prototype.Da;P.prototype.getStatus=P.prototype.ba;P.prototype.getResponseJson=P.prototype.Qa;P.prototype.getResponseText=P.prototype.ga;P.prototype.send=P.prototype.ea;var Wu=function(){return new gn},Xu=function(){return kn()},ds=Rn,Yu=No,Qu=Ut,vr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ju=Pe,We=ko,Zu=P;const wr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ae="9.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new no("@firebase/firestore");function Er(){return Mt.logLevel}function y(e,...t){if(Mt.logLevel<=A.DEBUG){const n=t.map(vi);Mt.debug(`Firestore (${ae}): ${e}`,...n)}}function Et(e,...t){if(Mt.logLevel<=A.ERROR){const n=t.map(vi);Mt.error(`Firestore (${ae}): ${e}`,...n)}}function Tr(e,...t){if(Mt.logLevel<=A.WARN){const n=t.map(vi);Mt.warn(`Firestore (${ae}): ${e}`,...n)}}function vi(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${ae}) INTERNAL ASSERTION FAILED: `+e;throw Et(t),new Error(t)}function k(e,t){e||I()}function S(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends bn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class el{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class nl{constructor(t){this.t=t,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new yt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new yt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(k(typeof s.accessToken=="string"),new tl(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return k(t===null||typeof t=="string"),new tt(t)}}class sl{constructor(t,n,s){this.type="FirstParty",this.user=tt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class il{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new sl(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ol{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(k(typeof n.token=="string"),this.p=n.token,new rl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wi.A=-1;class ha{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=al(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function _(e,t){return e<t?-1:e>t?1:0}function Qt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new E(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new E(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new Y(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_(this.nanoseconds,t.nanoseconds):_(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new Y(0,0))}static max(){return new C(new Y(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Bt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ua(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ce.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ce?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends Ce{construct(t,n,s){return new x(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new E(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new x(n)}static emptyPath(){return new x([])}}const cl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Ce{construct(t,n,s){return new et(t,n,s)}static isValidIdentifier(t){return cl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new E(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new E(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new E(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t){this.fields=t,t.sort(et.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Qt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new K(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new K(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}K.EMPTY_BYTE_STRING=new K("");const hl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tt(e){if(k(!!e),typeof e=="string"){let t=0;const n=hl.exec(e);if(k(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:O(e.seconds),nanos:O(e.nanos)}}function O(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Jt(e){return typeof e=="string"?K.fromBase64String(e):K.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function da(e){const t=e.mapValue.fields.__previous_value__;return la(t)?da(t):t}function be(e){const t=Tt(e.mapValue.fields.__local_write_time__.timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Zt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Zt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Zt&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(e){return e==null}function mn(e){return e===0&&1/e==-1/0}function ll(e){return typeof e=="number"&&Number.isInteger(e)&&!mn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(x.fromString(t))}static fromName(t){return new w(x.fromString(t).popFirst(5))}static empty(){return new w(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new x(t.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ot(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?la(e)?4:dl(e)?9007199254740991:10:I()}function ct(e,t){if(e===t)return!0;const n=Ot(e);if(n!==Ot(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return be(e).isEqual(be(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Tt(s.timestampValue),o=Tt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Jt(s.bytesValue).isEqual(Jt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return O(s.geoPointValue.latitude)===O(i.geoPointValue.latitude)&&O(s.geoPointValue.longitude)===O(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return O(s.integerValue)===O(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=O(s.doubleValue),o=O(i.doubleValue);return r===o?mn(r)===mn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Qt(e.arrayValue.values||[],t.arrayValue.values||[],ct);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ir(r)!==Ir(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ct(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function Ae(e,t){return(e.values||[]).find(n=>ct(n,t))!==void 0}function te(e,t){if(e===t)return 0;const n=Ot(e),s=Ot(t);if(n!==s)return _(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=O(i.integerValue||i.doubleValue),a=O(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Sr(e.timestampValue,t.timestampValue);case 4:return Sr(be(e),be(t));case 5:return _(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Jt(i),a=Jt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const h=_(o[c],a[c]);if(h!==0)return h}return _(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=_(O(i.latitude),O(r.latitude));return o!==0?o:_(O(i.longitude),O(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const h=te(o[c],a[c]);if(h)return h}return _(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===Xe.mapValue&&r===Xe.mapValue)return 0;if(i===Xe.mapValue)return 1;if(r===Xe.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},h=Object.keys(c);a.sort(),h.sort();for(let u=0;u<a.length&&u<h.length;++u){const l=_(a[u],h[u]);if(l!==0)return l;const p=te(o[a[u]],c[h[u]]);if(p!==0)return p}return _(a.length,h.length)}(e.mapValue,t.mapValue);default:throw I()}}function Sr(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return _(e,t);const n=Tt(e),s=Tt(t),i=_(n.seconds,s.seconds);return i!==0?i:_(n.nanos,s.nanos)}function zt(e){return xs(e)}function xs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=Tt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Jt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=xs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${xs(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function Ms(e){return!!e&&"integerValue"in e}function Ti(e){return!!e&&"arrayValue"in e}function Cr(e){return!!e&&"nullValue"in e}function br(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function tn(e){return!!e&&"mapValue"in e}function ge(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Bt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ge(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ge(e.arrayValue.values[n]);return t}return Object.assign({},e)}function dl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.value=t}static empty(){return new rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!tn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ge(n)}setAll(t){let n=et.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ge(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());tn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ct(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];tn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Bt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new rt(ge(this.value))}}function fa(e){const t=[];return Bt(e.fields,(n,s)=>{const i=new et([n]);if(tn(s)){const r=fa(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new Ei(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new W(t,0,C.min(),C.min(),rt.empty(),0)}static newFoundDocument(t,n,s){return new W(t,1,n,C.min(),s,0)}static newNoDocument(t,n){return new W(t,2,n,C.min(),rt.empty(),0)}static newUnknownDocument(t,n){return new W(t,3,n,C.min(),rt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof W&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new W(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function fl(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=C.fromTimestamp(s===1e9?new Y(n+1,0):new Y(n,s));return new Pt(i,w.empty(),t)}function pl(e){return new Pt(e.readTime,e.key,-1)}class Pt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Pt(C.min(),w.empty(),-1)}static max(){return new Pt(C.max(),w.empty(),-1)}}function gl(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:_(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,n){this.comparator=t,this.root=n||B.EMPTY}insert(t,n){return new U(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,B.BLACK,null,null))}remove(t){return new U(this.comparator,this.root.remove(t,this.comparator).copy(null,null,B.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ye(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ye(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ye(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ye(this.root,t,this.comparator,!0)}}class Ye{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class B{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:B.RED,this.left=i!=null?i:B.EMPTY,this.right=r!=null?r:B.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new B(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return B.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.comparator=t,this.data=new U(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ar(this.data.getIterator())}getIteratorFrom(t){return new Ar(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof q)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new q(this.comparator);return n.data=t,n}}class Ar{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function _r(e,t=null,n=[],s=[],i=null,r=null,o=null){return new ml(e,t,n,s,i,r,o)}function Ii(e){const t=S(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+zt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Un(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>zt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>zt(s)).join(",")),t.P=n}return t.P}function yl(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${zt(s.value)}`;var s}).join(", ")}]`),Un(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>zt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>zt(n)).join(",")),`Target(${t})`}function Si(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!bl(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ct(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Nr(e.startAt,t.startAt)&&Nr(e.endAt,t.endAt)}function Os(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class nt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.V(t,n,s):new vl(t,n,s):n==="array-contains"?new Tl(t,s):n==="in"?new Il(t,s):n==="not-in"?new Sl(t,s):n==="array-contains-any"?new Cl(t,s):new nt(t,n,s)}static V(t,n,s){return n==="in"?new wl(t,s):new El(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(te(n,this.value)):n!==null&&Ot(this.value)===Ot(n)&&this.v(te(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class vl extends nt{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.v(n)}}class wl extends nt{constructor(t,n){super(t,"in",n),this.keys=pa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class El extends nt{constructor(t,n){super(t,"not-in",n),this.keys=pa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function pa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class Tl extends nt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ti(n)&&Ae(n.arrayValue,this.value)}}class Il extends nt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ae(this.value.arrayValue,n)}}class Sl extends nt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ae(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ae(this.value.arrayValue,n)}}class Cl extends nt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ti(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ae(this.value.arrayValue,s))}}class yn{constructor(t,n){this.position=t,this.inclusive=n}}class me{constructor(t,n="asc"){this.field=t,this.dir=n}}function bl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Dr(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=te(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Nr(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ct(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function Al(e,t,n,s,i,r,o,a){return new Bn(e,t,n,s,i,r,o,a)}function ga(e){return new Bn(e)}function _l(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Dl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Nl(e){for(const t of e.filters)if(t.S())return t.field;return null}function kl(e){return e.collectionGroup!==null}function _e(e){const t=S(e);if(t.D===null){t.D=[];const n=Nl(t),s=Dl(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new me(n)),t.D.push(new me(et.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new me(et.keyField(),r))}}}return t.D}function Vt(e){const t=S(e);if(!t.C)if(t.limitType==="F")t.C=_r(t.path,t.collectionGroup,_e(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of _e(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new me(r.field,o))}const s=t.endAt?new yn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new yn(t.startAt.position,t.startAt.inclusive):null;t.C=_r(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.C}function Rl(e,t,n){return new Bn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function $n(e,t){return Si(Vt(e),Vt(t))&&e.limitType===t.limitType}function ma(e){return`${Ii(Vt(e))}|lt:${e.limitType}`}function Ps(e){return`Query(target=${yl(Vt(e))}; limitType=${e.limitType})`}function Ci(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):w.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Dr(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,_e(n),s)||n.endAt&&!function(i,r,o){const a=Dr(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,_e(n),s))}(e,t)}function Ll(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ya(e){return(t,n)=>{let s=!1;for(const i of _e(e)){const r=xl(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function xl(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?te(a,c):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mn(t)?"-0":t}}function wa(e){return{integerValue:""+e}}function Ml(e,t){return ll(t)?wa(t):va(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this._=void 0}}function Ol(e,t,n){return e instanceof vn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof De?Ta(e,t):e instanceof Ne?Ia(e,t):function(s,i){const r=Ea(s,i),o=kr(r)+kr(s.k);return Ms(r)&&Ms(s.k)?wa(o):va(s.M,o)}(e,t)}function Pl(e,t,n){return e instanceof De?Ta(e,t):e instanceof Ne?Ia(e,t):n}function Ea(e,t){return e instanceof wn?Ms(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class vn extends jn{}class De extends jn{constructor(t){super(),this.elements=t}}function Ta(e,t){const n=Sa(t);for(const s of e.elements)n.some(i=>ct(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ne extends jn{constructor(t){super(),this.elements=t}}function Ia(e,t){let n=Sa(t);for(const s of e.elements)n=n.filter(i=>!ct(i,s));return{arrayValue:{values:n}}}class wn extends jn{constructor(t,n){super(),this.M=t,this.k=n}}function kr(e){return O(e.integerValue||e.doubleValue)}function Sa(e){return Ti(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Vl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof De&&s instanceof De||n instanceof Ne&&s instanceof Ne?Qt(n.elements,s.elements,ct):n instanceof wn&&s instanceof wn?ct(n.k,s.k):n instanceof vn&&s instanceof vn}(e.transform,t.transform)}class Fl{constructor(t,n){this.version=t,this.transformResults=n}}class Wt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Wt}static exists(t){return new Wt(void 0,t)}static updateTime(t){return new Wt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function en(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class qn{}function Ul(e,t,n){e instanceof bi?function(s,i,r){const o=s.value.clone(),a=xr(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ue?function(s,i,r){if(!en(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=xr(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ca(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Vs(e,t,n){e instanceof bi?function(s,i,r){if(!en(s.precondition,i))return;const o=s.value.clone(),a=Mr(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(Lr(i),o).setHasLocalMutations()}(e,t,n):e instanceof Ue?function(s,i,r){if(!en(s.precondition,i))return;const o=Mr(s.fieldTransforms,r,i),a=i.data;a.setAll(Ca(s)),a.setAll(o),i.convertToFoundDocument(Lr(i),a).setHasLocalMutations()}(e,t,n):function(s,i){en(s.precondition,i)&&i.convertToNoDocument(C.min())}(e,t)}function Bl(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Ea(s.transform,i||null);r!=null&&(n==null&&(n=rt.empty()),n.set(s.field,r))}return n||null}function Rr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Qt(n,s,(i,r)=>Vl(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Lr(e){return e.isFoundDocument()?e.version:C.min()}class bi extends qn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class Ue extends qn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Ca(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function xr(e,t,n){const s=new Map;k(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Pl(o,a,n[i]))}return s}function Mr(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Ol(r,o,t))}return s}class $l extends qn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class jl extends qn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,b;function Kl(e){switch(e){default:return I();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function ba(e){if(e===void 0)return Et("GRPC error has no .code"),d.UNKNOWN;switch(e){case M.OK:return d.OK;case M.CANCELLED:return d.CANCELLED;case M.UNKNOWN:return d.UNKNOWN;case M.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case M.INTERNAL:return d.INTERNAL;case M.UNAVAILABLE:return d.UNAVAILABLE;case M.UNAUTHENTICATED:return d.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case M.NOT_FOUND:return d.NOT_FOUND;case M.ALREADY_EXISTS:return d.ALREADY_EXISTS;case M.PERMISSION_DENIED:return d.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case M.ABORTED:return d.ABORTED;case M.OUT_OF_RANGE:return d.OUT_OF_RANGE;case M.UNIMPLEMENTED:return d.UNIMPLEMENTED;case M.DATA_LOSS:return d.DATA_LOSS;default:return I()}}(b=M||(M={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Bt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return ua(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new U(w.comparator);function Ft(){return Hl}const Gl=new U(w.comparator);function Fs(...e){let t=Gl;for(const n of e)t=t.insert(n.key,n);return t}function fs(){return new ce(e=>e.toString(),(e,t)=>e.isEqual(t))}const zl=new U(w.comparator),Wl=new q(w.comparator);function R(...e){let t=Wl;for(const n of e)t=t.add(n);return t}const Xl=new q(_);function Aa(){return Xl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Be.createSynthesizedTargetChangeForCurrentChange(t,n)),new Kn(C.min(),s,Aa(),Ft(),R())}}class Be{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Be(K.EMPTY_BYTE_STRING,n,R(),R(),R())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,n,s,i){this.O=t,this.removedTargetIds=n,this.key=s,this.F=i}}class _a{constructor(t,n){this.targetId=t,this.$=n}}class Da{constructor(t,n,s=K.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Or{constructor(){this.B=0,this.L=Vr(),this.U=K.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=R(),n=R(),s=R();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Be(this.U,this.q,t,n,s)}J(){this.K=!1,this.L=Vr()}Y(t,n){this.K=!0,this.L=this.L.insert(t,n)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Yl{constructor(t){this.nt=t,this.st=new Map,this.it=Ft(),this.rt=Pr(),this.ot=new q(_)}ut(t){for(const n of t.O)t.F&&t.F.isFoundDocument()?this.at(n,t.F):this.ct(n,t.key,t.F);for(const n of t.removedTargetIds)this.ct(n,t.key,t.F)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(t){const n=t.targetId,s=t.$.count,i=this.wt(n);if(i){const r=i.target;if(Os(r))if(s===0){const o=new w(r.path);this.ct(n,o,W.newNoDocument(o,C.min()))}else k(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&Os(a.target)){const c=new w(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,W.newNoDocument(c,t))}r.j&&(n.set(o,r.H()),r.J())}});let s=R();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const h=this.wt(c);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(t));const i=new Kn(t,n,this.ot,this.it,s);return this.it=Ft(),this.rt=Pr(),this.ot=new q(_),i}at(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,s){if(!this.ft(t))return;const i=this.lt(t);this.It(t,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new Or,this.st.set(t,n)),n}Tt(t){let n=this.rt.get(t);return n||(n=new q(_),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new Or),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.ct(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function Pr(){return new U(w.comparator)}function Vr(){return new U(w.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Jl=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Zl{constructor(t,n){this.databaseId=t,this.N=n}}function En(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Na(e,t){return e.N?t.toBase64():t.toUint8Array()}function td(e,t){return En(e,t.toTimestamp())}function ut(e){return k(!!e),C.fromTimestamp(function(t){const n=Tt(t);return new Y(n.seconds,n.nanos)}(e))}function Ai(e,t){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function ka(e){const t=x.fromString(e);return k(xa(t)),t}function Us(e,t){return Ai(e.databaseId,t.path)}function ps(e,t){const n=ka(t);if(n.get(1)!==e.databaseId.projectId)throw new E(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(Ra(n))}function Bs(e,t){return Ai(e.databaseId,t)}function ed(e){const t=ka(e);return t.length===4?x.emptyPath():Ra(t)}function $s(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ra(e){return k(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Fr(e,t,n){return{name:Us(e,t),fields:n.value.mapValue.fields}}function nd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,h){return c.N?(k(h===void 0||typeof h=="string"),K.fromBase64String(h||"")):(k(h===void 0||h instanceof Uint8Array),K.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const h=c.code===void 0?d.UNKNOWN:ba(c.code);return new E(h,c.message||"")}(o);n=new Da(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=ps(e,s.document.name),r=ut(s.document.updateTime),o=new rt({mapValue:{fields:s.document.fields}}),a=W.newFoundDocument(i,r,o),c=s.targetIds||[],h=s.removedTargetIds||[];n=new nn(c,h,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=ps(e,s.document),r=s.readTime?ut(s.readTime):C.min(),o=W.newNoDocument(i,r),a=s.removedTargetIds||[];n=new nn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=ps(e,s.document),r=s.removedTargetIds||[];n=new nn([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new ql(i),o=s.targetId;n=new _a(o,r)}}return n}function sd(e,t){let n;if(t instanceof bi)n={update:Fr(e,t.key,t.value)};else if(t instanceof $l)n={delete:Us(e,t.key)};else if(t instanceof Ue)n={update:Fr(e,t.key,t.data),updateMask:fd(t.fieldMask)};else{if(!(t instanceof jl))return I();n={verify:Us(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof vn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof De)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ne)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof wn)return{fieldPath:r.field.canonicalString(),increment:o.k};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:td(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function id(e,t){return e&&e.length>0?(k(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?ut(s.updateTime):ut(i);return r.isEqual(C.min())&&(r=ut(i)),new Fl(r,s.transformResults||[])}(n,t))):[]}function rd(e,t){return{documents:[Bs(e,t.path)]}}function od(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Bs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Bs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const h=c.map(u=>function(l){if(l.op==="=="){if(br(l.value))return{unaryFilter:{field:jt(l.field),op:"IS_NAN"}};if(Cr(l.value))return{unaryFilter:{field:jt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(br(l.value))return{unaryFilter:{field:jt(l.field),op:"IS_NOT_NAN"}};if(Cr(l.value))return{unaryFilter:{field:jt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jt(l.field),op:ud(l.op),value:l.value}}}(u));return h.length===1?h[0]:{compositeFilter:{op:"AND",filters:h}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(h=>function(u){return{field:jt(u.field),direction:hd(u.dir)}}(h))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,h){return c.N||Un(h)?h:{value:h}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function ad(e){let t=ed(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){k(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let r=[];n.where&&(r=La(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(l){return new me(Kt(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(u)));let a=null;n.limit&&(a=function(u){let l;return l=typeof u=="object"?u.value:u,Un(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(u){const l=!!u.before,p=u.values||[];return new yn(p,l)}(n.startAt));let h=null;return n.endAt&&(h=function(u){const l=!u.before,p=u.values||[];return new yn(p,l)}(n.endAt)),Al(t,i,o,r,a,"F",c,h)}function cd(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function La(e){return e?e.unaryFilter!==void 0?[dd(e)]:e.fieldFilter!==void 0?[ld(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>La(t)).reduce((t,n)=>t.concat(n)):I():[]}function hd(e){return Ql[e]}function ud(e){return Jl[e]}function jt(e){return{fieldPath:e.canonicalString()}}function Kt(e){return et.fromServerFormat(e.fieldPath)}function ld(e){return nt.create(Kt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function dd(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Kt(e.unaryFilter.field);return nt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Kt(e.unaryFilter.field);return nt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Kt(e.unaryFilter.field);return nt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Kt(e.unaryFilter.field);return nt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function fd(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function xa(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(i=>i?f.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function $e(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Ul(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&Vs(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&Vs(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(C.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),R())}isEqual(t){return this.batchId===t.batchId&&Qt(this.mutations,t.mutations,(n,s)=>Rr(n,s))&&Qt(this.baseMutations,t.baseMutations,(n,s)=>Rr(n,s))}}class _i{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){k(t.mutations.length===s.length);let i=zl;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new _i(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,n,s,i,r=C.min(),o=C.min(),a=K.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t){this.Jt=t}}function wd(e){const t=ad({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Rl(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.qe=new Td}addToCollectionParentIndex(t,n){return this.qe.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.qe.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(Pt.min())}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class Td{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new q(x.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new q(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new ee(0)}static yn(){return new ee(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==pd)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.changes=new ce(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,W.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,n,s){this.ds=t,this.Bs=n,this.indexManager=s}Ls(t,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Us(t,n,s))}Us(t,n,s){return this.ds.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}qs(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Ks(t,n){return this.ds.getEntries(t,n).next(s=>this.Gs(t,s).next(()=>s))}Gs(t,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.qs(n,s))}Qs(t,n,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.js(t,n.path):kl(n)?this.Ws(t,n,s):this.zs(t,n,s)}js(t,n){return this.Ls(t,new w(n)).next(s=>{let i=Fs();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}Ws(t,n,s){const i=n.collectionGroup;let r=Fs();return this.indexManager.getCollectionParents(t,i).next(o=>f.forEach(o,a=>{const c=function(h,u){return new Bn(u,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.zs(t,c,s).next(h=>{h.forEach((u,l)=>{r=r.insert(u,l)})})}).next(()=>r))}zs(t,n,s){let i;return this.ds.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.Bs.getAllMutationBatchesAffectingQuery(t,n))).next(r=>{for(const o of r)for(const a of o.mutations){const c=a.key;let h=i.get(c);h==null&&(h=W.newInvalidDocument(c),i=i.insert(c,h)),Vs(a,h,o.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}).next(()=>(i.forEach((r,o)=>{Ci(n,o)||(i=i.remove(r))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Hs=s,this.Js=i}static Ys(t,n){let s=R(),i=R();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Di(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.Xs=!1}initialize(t,n){this.Zs=t,this.indexManager=n,this.Xs=!0}Qs(t,n,s,i){return this.ti(t,n).next(r=>r||this.ei(t,n,i,s)).next(r=>r||this.ni(t,n))}ti(t,n){return f.resolve(null)}ei(t,n,s,i){return _l(n)||i.isEqual(C.min())?this.ni(t,n):this.Zs.Ks(t,s).next(r=>{const o=this.si(n,r);return this.ii(n,o,s,i)?this.ni(t,n):(Er()<=A.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ps(n)),this.ri(t,o,n,fl(i,-1)))})}si(t,n){let s=new q(ya(t));return n.forEach((i,r)=>{Ci(t,r)&&(s=s.add(r))}),s}ii(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ni(t,n){return Er()<=A.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Ps(n)),this.Zs.Qs(t,n,Pt.min())}ri(t,n,s,i){return this.Zs.Qs(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,n,s,i){this.persistence=t,this.oi=n,this.M=i,this.ui=new U(_),this.ai=new ce(r=>Ii(r),Si),this.ci=new Map,this.hi=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.li(s)}li(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.fi=new Sd(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ui))}}function Ad(e,t,n,s){return new bd(e,t,n,s)}async function Ma(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.Bs.getAllMutationBatches(s).next(r=>(i=r,n.li(t),n.Bs.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=R();for(const h of i){o.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}for(const h of r){a.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}return n.fi.Ks(s,c).next(h=>({di:h,removedBatchIds:o,addedBatchIds:a}))})})}function _d(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,h){const u=c.batch,l=u.keys();let p=f.resolve();return l.forEach(m=>{p=p.next(()=>h.getEntry(a,m)).next(v=>{const D=c.docVersions.get(m);k(D!==null),v.version.compareTo(D)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),h.addEntry(v)))})}),p.next(()=>o.Bs.removeMutationBatch(a,u))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.Bs.performConsistencyCheck(s)).next(()=>n.fi.Ks(s,i))})}function Oa(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.fs.getLastRemoteSnapshotVersion(n))}function Dd(e,t){const n=S(e),s=t.snapshotVersion;let i=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});i=n.ui;const a=[];t.targetChanges.forEach((h,u)=>{const l=i.get(u);if(!l)return;a.push(n.fs.removeMatchingKeys(r,h.removedDocuments,u).next(()=>n.fs.addMatchingKeys(r,h.addedDocuments,u)));let p=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(u)?p=p.withResumeToken(K.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,s)),i=i.insert(u,p),function(m,v,D){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(l,p,h)&&a.push(n.fs.updateTargetData(r,p))});let c=Ft();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Nd(r,o,t.documentUpdates).next(h=>{c=h})),!s.isEqual(C.min())){const h=n.fs.getLastRemoteSnapshotVersion(r).next(u=>n.fs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(r)).next(()=>n.fi.Gs(r,c)).next(()=>c)}).then(r=>(n.ui=i,r))}function Nd(e,t,n){let s=R();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let r=Ft();return n.forEach((o,a)=>{const c=i.get(o);a.isNoDocument()&&a.version.isEqual(C.min())?(t.removeEntry(o,a.readTime),r=r.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(a),r=r.insert(o,a)):y("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),r})}function kd(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(s,t)))}function Rd(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.fs.getTargetData(s,t).next(r=>r?(i=r,f.resolve(i)):n.fs.allocateTargetId(s).next(o=>(i=new kt(t,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ui=n.ui.insert(s.targetId,s),n.ai.set(t,s.targetId)),s})}async function js(e,t,n){const s=S(e),i=s.ui.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$e(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.ui=s.ui.remove(t),s.ai.delete(i.target)}function Ur(e,t,n){const s=S(e);let i=C.min(),r=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,h){const u=S(a),l=u.ai.get(h);return l!==void 0?f.resolve(u.ui.get(l)):u.fs.getTargetData(c,h)}(s,o,Vt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.oi.Qs(o,t,n?i:C.min(),n?r:R())).next(a=>(Ld(s,Ll(t),a),{documents:a,_i:r})))}function Ld(e,t,n){let s=C.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.ci.set(t,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t){this.M=t,this.yi=new Map,this.pi=new Map}getBundleMetadata(t,n){return f.resolve(this.yi.get(n))}saveBundleMetadata(t,n){var s;return this.yi.set(n.id,{id:(s=n).id,version:s.version,createTime:ut(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.pi.get(n))}saveNamedQuery(t,n){return this.pi.set(n.name,function(s){return{name:s.name,query:wd(s.bundledQuery),readTime:ut(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.overlays=new U(w.comparator),this.Ii=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.Xt(t,n,r)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.Ii.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ii.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const i=fs(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new U((h,u)=>h-u);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let u=r.get(h.largestBatchId);u===null&&(u=fs(),r=r.insert(h.largestBatchId,u)),u.set(h.getKey(),h)}}const a=fs(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,u)=>a.set(h,u)),!(a.size()>=i)););return f.resolve(a)}Xt(t,n,s){if(s===null)return;const i=this.overlays.get(s.key);if(i!==null){const o=this.Ii.get(i.largestBatchId).delete(s.key);this.Ii.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yd(n,s));let r=this.Ii.get(n);r===void 0&&(r=R(),this.Ii.set(n,r)),this.Ii.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.Ti=new q(V.Ei),this.Ai=new q(V.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(t,n){const s=new V(t,n);this.Ti=this.Ti.add(s),this.Ai=this.Ai.add(s)}bi(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Pi(new V(t,n))}Vi(t,n){t.forEach(s=>this.removeReference(s,n))}vi(t){const n=new w(new x([])),s=new V(n,t),i=new V(n,t+1),r=[];return this.Ai.forEachInRange([s,i],o=>{this.Pi(o),r.push(o.key)}),r}Si(){this.Ti.forEach(t=>this.Pi(t))}Pi(t){this.Ti=this.Ti.delete(t),this.Ai=this.Ai.delete(t)}Di(t){const n=new w(new x([])),s=new V(n,t),i=new V(n,t+1);let r=R();return this.Ai.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new V(t,0),s=this.Ti.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class V{constructor(t,n){this.key=t,this.Ci=n}static Ei(t,n){return w.comparator(t.key,n.key)||_(t.Ci,n.Ci)}static Ri(t,n){return _(t.Ci,n.Ci)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new q(V.Ei)}checkEmpty(t){return f.resolve(this.Bs.length===0)}addMutationBatch(t,n,s,i){const r=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new md(r,n,s,i);this.Bs.push(o);for(const a of i)this.Ni=this.Ni.add(new V(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.Mi(s),r=i<0?0:i;return f.resolve(this.Bs.length>r?this.Bs[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(t){return f.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new V(n,0),i=new V(n,Number.POSITIVE_INFINITY),r=[];return this.Ni.forEachInRange([s,i],o=>{const a=this.ki(o.Ci);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new q(_);return n.forEach(i=>{const r=new V(i,0),o=new V(i,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([r,o],a=>{s=s.add(a.Ci)})}),f.resolve(this.Oi(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new V(new w(r),0);let a=new q(_);return this.Ni.forEachWhile(c=>{const h=c.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(c.Ci)),!0)},o),f.resolve(this.Oi(a))}Oi(t){const n=[];return t.forEach(s=>{const i=this.ki(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){k(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let s=this.Ni;return f.forEach(n.mutations,i=>{const r=new V(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Ni=s})}_n(t){}containsKey(t,n){const s=new V(n,0),i=this.Ni.firstAfterOrEqual(s);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.Bs.length,f.resolve()}Fi(t,n){return this.Mi(t)}Mi(t){return this.Bs.length===0?0:t-this.Bs[0].batchId}ki(t){const n=this.Mi(t);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t){this.$i=t,this.docs=new U(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.$i(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():W.newInvalidDocument(n))}getEntries(t,n){let s=Ft();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():W.newInvalidDocument(i))}),f.resolve(s)}getAllFromCollection(t,n,s){let i=Ft();const r=new w(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||gl(pl(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(t,n,s,i){I()}Bi(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Vd(this)}getSize(t){return f.resolve(this.size)}}class Vd extends Id{constructor(t){super(),this.Kn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(t,i)):this.Kn.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.Kn.getEntry(t,n)}getAllFromCache(t,n){return this.Kn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this.persistence=t,this.Li=new ce(n=>Ii(n),Si),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Ni,this.targetCount=0,this.Ki=ee.gn()}forEachTarget(t,n){return this.Li.forEach((s,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Ui)}allocateTargetId(t){return this.highestTargetId=this.Ki.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ui&&(this.Ui=n),f.resolve()}Tn(t){this.Li.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ki=new ee(n),this.highestTargetId=n),t.sequenceNumber>this.Ui&&(this.Ui=t.sequenceNumber)}addTargetData(t,n){return this.Tn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.Tn(n),f.resolve()}removeTargetData(t,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Li.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(r).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.Li.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.qi.bi(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.qi.Vi(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.qi.vi(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.qi.Di(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.qi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,n){this.Gi={},this.overlays={},this.es=new wi(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new Fd(this),this.indexManager=new Ed,this.ds=function(s){return new Pd(s)}(s=>this.referenceDelegate.Qi(s)),this.M=new vd(n),this._s=new xd(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Md,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Gi[t.toKey()];return s||(s=new Od(n,this.referenceDelegate),this.Gi[t.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new Bd(this.es.next());return this.referenceDelegate.ji(),s(i).next(r=>this.referenceDelegate.Wi(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}zi(t,n){return f.or(Object.values(this.Gi).map(s=>()=>s.containsKey(t,n)))}}class Bd extends gd{constructor(t){super(),this.currentSequenceNumber=t}}class ki{constructor(t){this.persistence=t,this.Hi=new Ni,this.Ji=null}static Yi(t){return new ki(t)}get Xi(){if(this.Ji)return this.Ji;throw I()}addReference(t,n,s){return this.Hi.addReference(s,n),this.Xi.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.Hi.removeReference(s,n),this.Xi.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Xi.add(n.toString()),f.resolve()}removeTarget(t,n){this.Hi.vi(n.targetId).forEach(i=>this.Xi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Xi.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}ji(){this.Ji=new Set}Wi(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Xi,s=>{const i=w.fromPath(s);return this.Zi(t,i).next(r=>{r||n.removeEntry(i,C.min())})}).next(()=>(this.Ji=null,n.apply(t)))}updateLimboDocument(t,n){return this.Zi(t,n).next(s=>{s?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(t){return 0}Zi(t,n){return f.or([()=>f.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.zi(t,n)])}}class Br{constructor(){this.activeTargetIds=Aa()}nr(t){this.activeTargetIds=this.activeTargetIds.add(t)}sr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}er(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $d{constructor(){this.Ur=new Br,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Ur.nr(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Ur.sr(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new Br,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{Kr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Wr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t){this.Jr=t.Jr,this.Yr=t.Yr}Xr(t){this.Zr=t}eo(t){this.no=t}onMessage(t){this.so=t}close(){this.Yr()}send(t){this.Jr(t)}io(){this.Zr()}ro(t){this.no(t)}oo(t){this.so(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.uo=n+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,n,s,i,r){const o=this.ho(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(t,o,a,s).then(c=>(y("RestConnection","Received: ",c),c),c=>{throw Tr("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,i,r){return this.co(t,n,s,i,r)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ae,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ho(t,n){const s=qd[t];return`${this.uo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,i){return new Promise((r,o)=>{const a=new Zu;a.listenOnce(Yu.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ds.NO_ERROR:const h=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(h)),r(h);break;case ds.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new E(d.DEADLINE_EXCEEDED,"Request time out"));break;case ds.HTTP_ERROR:const u=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const p=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(v)>=0?v:d.UNKNOWN}(l.status);o(new E(p,l.message))}else o(new E(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(d.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}wo(t,n,s){const i=[this.uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Wu(),o=Xu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Ju({})),this.lo(a.initMessageHeaders,n,s),Ac()||Dc()||Nc()||kc()||Rc()||_c()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");y("Connection","Creating WebChannel: "+c,a);const h=r.createWebChannel(c,a);let u=!1,l=!1;const p=new Kd({Jr:v=>{l?y("Connection","Not sending because WebChannel is closed:",v):(u||(y("Connection","Opening WebChannel transport."),h.open(),u=!0),y("Connection","WebChannel sending:",v),h.send(v))},Yr:()=>h.close()}),m=(v,D,N)=>{v.listen(D,G=>{try{N(G)}catch(z){setTimeout(()=>{throw z},0)}})};return m(h,We.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),m(h,We.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),p.ro())}),m(h,We.EventType.ERROR,v=>{l||(l=!0,Tr("Connection","WebChannel transport errored:",v),p.ro(new E(d.UNAVAILABLE,"The operation could not be completed")))}),m(h,We.EventType.MESSAGE,v=>{var D;if(!l){const N=v.data[0];k(!!N);const G=N,z=G.error||((D=G[0])===null||D===void 0?void 0:D.error);if(z){y("Connection","WebChannel received error:",z);const dt=z.status;let ue=function(hc){const Gi=M[hc];if(Gi!==void 0)return ba(Gi)}(dt),Hi=z.message;ue===void 0&&(ue=d.INTERNAL,Hi="Unknown error status: "+dt+" with message "+z.message),l=!0,p.ro(new E(ue,Hi)),h.close()}else y("Connection","WebChannel received:",N),p.oo(N)}}),m(o,Qu.STAT_EVENT,v=>{v.stat===vr.PROXY?y("Connection","Detected buffering proxy"):v.stat===vr.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.io()},0),p}}function gs(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e){return new Zl(e,!0)}class Pa{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Yn=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,n,s,i,r,o,a,c){this.Yn=t,this.Vo=s,this.vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Pa(t,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,t!==4?this.No.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(Et(n.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{t(()=>{const i=new E(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(t,n){const s=this.Go(this.Do);this.stream=this.Wo(t,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return n=>{this.Yn.enqueueAndForget(()=>this.Do===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gd extends Va{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.M=r}Wo(t,n){return this.So.wo("Listen",t,n)}onMessage(t){this.No.reset();const n=nd(this.M,t),s=function(i){if(!("targetChange"in i))return C.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?C.min():r.readTime?ut(r.readTime):C.min()}(t);return this.listener.zo(n,s)}Ho(t){const n={};n.database=$s(this.M),n.addTarget=function(i,r){let o;const a=r.target;return o=Os(a)?{documents:rd(i,a)}:{query:od(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Na(i,r.resumeToken):r.snapshotVersion.compareTo(C.min())>0&&(o.readTime=En(i,r.snapshotVersion.toTimestamp())),o}(this.M,t);const s=cd(this.M,t);s&&(n.labels=s),this.Lo(n)}Jo(t){const n={};n.database=$s(this.M),n.removeTarget=t,this.Lo(n)}}class zd extends Va{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.M=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,n){return this.So.wo("Write",t,n)}onMessage(t){if(k(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const n=id(t.writeResults,t.commitTime),s=ut(t.commitTime);return this.listener.tu(s,n)}return k(!t.writeResults||t.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=$s(this.M),this.Lo(t)}Zo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>sd(this.M,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.So=s,this.M=i,this.su=!1}iu(){if(this.su)throw new E(d.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.co(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(d.UNKNOWN,i.toString())})}_o(t,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So._o(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(d.UNKNOWN,i.toString())})}terminate(){this.su=!0}}class Xd{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(t){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.fu(),this.ru=0,t==="Online"&&(this.uu=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Et(n),this.uu=!1):y("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.Kr(o=>{s.enqueueAndForget(async()=>{$t(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=S(a);c.wu.add(4),await qe(c),c.yu.set("Unknown"),c.wu.delete(4),await Gn(c)}(this))})}),this.yu=new Xd(s,i)}}async function Gn(e){if($t(e))for(const t of e.mu)await t(!0)}async function qe(e){for(const t of e.mu)await t(!1)}function Fa(e,t){const n=S(e);n._u.has(t.targetId)||(n._u.set(t.targetId,t),xi(n)?Li(n):he(n).Mo()&&Ri(n,t))}function Ua(e,t){const n=S(e),s=he(n);n._u.delete(t),s.Mo()&&Ba(n,t),n._u.size===0&&(s.Mo()?s.$o():$t(n)&&n.yu.set("Unknown"))}function Ri(e,t){e.pu.Z(t.targetId),he(e).Ho(t)}function Ba(e,t){e.pu.Z(t),he(e).Jo(t)}function Li(e){e.pu=new Yl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e._u.get(t)||null}),he(e).start(),e.yu.au()}function xi(e){return $t(e)&&!he(e).ko()&&e._u.size>0}function $t(e){return S(e).wu.size===0}function $a(e){e.pu=void 0}async function Qd(e){e._u.forEach((t,n)=>{Ri(e,t)})}async function Jd(e,t){$a(e),xi(e)?(e.yu.lu(t),Li(e)):e.yu.set("Unknown")}async function Zd(e,t,n){if(e.yu.set("Online"),t instanceof Da&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Tn(e,s)}else if(t instanceof nn?e.pu.ut(t):t instanceof _a?e.pu._t(t):e.pu.ht(t),!n.isEqual(C.min()))try{const s=await Oa(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const h=i._u.get(c);h&&i._u.set(c,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i._u.get(a);if(!c)return;i._u.set(a,c.withResumeToken(K.EMPTY_BYTE_STRING,c.snapshotVersion)),Ba(i,a);const h=new kt(c.target,a,1,c.sequenceNumber);Ri(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await Tn(e,s)}}async function Tn(e,t,n){if(!$e(t))throw t;e.wu.add(1),await qe(e),e.yu.set("Offline"),n||(n=()=>Oa(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.wu.delete(1),await Gn(e)})}function ja(e,t){return t().catch(n=>Tn(e,n,t))}async function zn(e){const t=S(e),n=It(t);let s=t.du.length>0?t.du[t.du.length-1].batchId:-1;for(;tf(t);)try{const i=await kd(t.localStore,s);if(i===null){t.du.length===0&&n.$o();break}s=i.batchId,ef(t,i)}catch(i){await Tn(t,i)}qa(t)&&Ka(t)}function tf(e){return $t(e)&&e.du.length<10}function ef(e,t){e.du.push(t);const n=It(e);n.Mo()&&n.Xo&&n.Zo(t.mutations)}function qa(e){return $t(e)&&!It(e).ko()&&e.du.length>0}function Ka(e){It(e).start()}async function nf(e){It(e).nu()}async function sf(e){const t=It(e);for(const n of e.du)t.Zo(n.mutations)}async function rf(e,t,n){const s=e.du.shift(),i=_i.from(s,t,n);await ja(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await zn(e)}async function of(e,t){t&&It(e).Xo&&await async function(n,s){if(i=s.code,Kl(i)&&i!==d.ABORTED){const r=n.du.shift();It(n).Fo(),await ja(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await zn(n)}var i}(e,t),qa(e)&&Ka(e)}async function jr(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=$t(n);n.wu.add(3),await qe(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.wu.delete(3),await Gn(n)}async function af(e,t){const n=S(e);t?(n.wu.delete(2),await Gn(n)):t||(n.wu.add(2),await qe(n),n.yu.set("Unknown"))}function he(e){return e.Iu||(e.Iu=function(t,n,s){const i=S(t);return i.iu(),new Gd(n,i.So,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{Xr:Qd.bind(null,e),eo:Jd.bind(null,e),zo:Zd.bind(null,e)}),e.mu.push(async t=>{t?(e.Iu.Fo(),xi(e)?Li(e):e.yu.set("Unknown")):(await e.Iu.stop(),$a(e))})),e.Iu}function It(e){return e.Tu||(e.Tu=function(t,n,s){const i=S(t);return i.iu(),new zd(n,i.So,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{Xr:nf.bind(null,e),eo:of.bind(null,e),eu:sf.bind(null,e),tu:rf.bind(null,e)}),e.mu.push(async t=>{t?(e.Tu.Fo(),await zn(e)):(await e.Tu.stop(),e.du.length>0&&(y("RemoteStore",`Stopping write stream with ${e.du.length} pending writes`),e.du=[]))})),e.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Mi(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oi(e,t){if(Et("AsyncQueue",`${t}: ${e}`),$e(e))return new E(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=Fs(),this.sortedSet=new U(this.comparator)}static emptySet(t){return new Xt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Xt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Xt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.Eu=new U(w.comparator)}track(t){const n=t.doc.key,s=this.Eu.get(n);s?t.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,t):t.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Eu=this.Eu.remove(n):t.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:t.doc}):I():this.Eu=this.Eu.insert(n,t)}Au(){const t=[];return this.Eu.inorderTraversal((n,s)=>{t.push(s)}),t}}class ne{constructor(t,n,s,i,r,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new ne(t,n,Xt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&$n(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.Ru=void 0,this.listeners=[]}}class hf{constructor(){this.queries=new ce(t=>ma(t),$n),this.onlineState="Unknown",this.bu=new Set}}async function uf(e,t){const n=S(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new cf),i)try{r.Ru=await n.onListen(s)}catch(o){const a=Oi(o,`Initialization of query '${Ps(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Pu(n.onlineState),r.Ru&&t.Vu(r.Ru)&&Pi(n)}async function lf(e,t){const n=S(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function df(e,t){const n=S(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.Ru=i}}s&&Pi(n)}function ff(e,t,n){const s=S(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function Pi(e){e.bu.forEach(t=>{t.next()})}class pf{constructor(t,n,s){this.query=t,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}Vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new ne(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(t)&&(this.vu.next(t),n=!0):this.xu(t,this.onlineState)&&(this.Nu(t),n=!0),this.Du=t,n}onError(t){this.vu.error(t)}Pu(t){this.onlineState=t;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),n=!0),n}xu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!t.docs.isEmpty()||n==="Offline")}Cu(t){if(t.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(t){t=ne.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Su=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){this.key=t}}class Ga{constructor(t){this.key=t}}class gf{constructor(t,n){this.query=t,this.Uu=n,this.qu=null,this.current=!1,this.Ku=R(),this.mutatedKeys=R(),this.Gu=ya(t),this.Qu=new Xt(this.Gu)}get ju(){return this.Uu}Wu(t,n){const s=n?n.zu:new qr,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,l)=>{const p=i.get(u),m=Ci(this.query,l)?l:null,v=!!p&&this.mutatedKeys.has(p.key),D=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let N=!1;p&&m?p.data.isEqual(m.data)?v!==D&&(s.track({type:3,doc:m}),N=!0):this.Hu(p,m)||(s.track({type:2,doc:m}),N=!0,(c&&this.Gu(m,c)>0||h&&this.Gu(m,h)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),N=!0):p&&!m&&(s.track({type:1,doc:p}),N=!0,(c||h)&&(a=!0)),N&&(m?(o=o.add(m),r=D?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,ii:a,mutatedKeys:r}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Au();r.sort((h,u)=>function(l,p){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(l)-m(p)}(h.type,u.type)||this.Gu(h.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new ne(this.query,t.Qu,i,r,t.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new qr,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=R(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new Ga(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new Ha(s))}),n}ta(t){this.Uu=t._i,this.Ku=R();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ea(){return ne.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class mf{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class yf{constructor(t){this.key=t,this.na=!1}}class vf{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new ce(a=>ma(a),$n),this.ra=new Map,this.oa=new Set,this.ua=new U(w.comparator),this.aa=new Map,this.ca=new Ni,this.ha={},this.la=new Map,this.fa=ee.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function wf(e,t){const n=Nf(e);let s,i;const r=n.ia.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ea();else{const o=await Rd(n.localStore,Vt(t));n.isPrimaryClient&&Fa(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ef(n,t,s,a==="current")}return i}async function Ef(e,t,n,s){e._a=(u,l,p)=>async function(m,v,D,N){let G=v.view.Wu(D);G.ii&&(G=await Ur(m.localStore,v.query,!1).then(({documents:ue})=>v.view.Wu(ue,G)));const z=N&&N.targetChanges.get(v.targetId),dt=v.view.applyChanges(G,m.isPrimaryClient,z);return Hr(m,v.targetId,dt.Xu),dt.snapshot}(e,u,l,p);const i=await Ur(e.localStore,t,!0),r=new gf(t,i._i),o=r.Wu(i.documents),a=Be.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=r.applyChanges(o,e.isPrimaryClient,a);Hr(e,n,c.Xu);const h=new mf(t,n,r);return e.ia.set(t,h),e.ra.has(n)?e.ra.get(n).push(t):e.ra.set(n,[t]),c.snapshot}async function Tf(e,t){const n=S(e),s=n.ia.get(t),i=n.ra.get(s.targetId);if(i.length>1)return n.ra.set(s.targetId,i.filter(r=>!$n(r,t))),void n.ia.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await js(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ua(n.remoteStore,s.targetId),qs(n,s.targetId)}).catch(je)):(qs(n,s.targetId),await js(n.localStore,s.targetId,!0))}async function If(e,t,n){const s=kf(e);try{const i=await function(r,o){const a=S(r),c=Y.now(),h=o.reduce((l,p)=>l.add(p.key),R());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.fi.Ks(l,h).next(p=>{u=p;const m=[];for(const v of o){const D=Bl(v,u.get(v.key));D!=null&&m.push(new Ue(v.key,D,fa(D.value.mapValue),Wt.exists(!0)))}return a.Bs.addMutationBatch(l,c,m,o)})).then(l=>(l.applyToLocalDocumentSet(u),{batchId:l.batchId,changes:u}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.ha[r.currentUser.toKey()];c||(c=new U(_)),c=c.insert(o,a),r.ha[r.currentUser.toKey()]=c}(s,i.batchId,n),await Ke(s,i.changes),await zn(s.remoteStore)}catch(i){const r=Oi(i,"Failed to persist write");n.reject(r)}}async function za(e,t){const n=S(e);try{const s=await Dd(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.aa.get(r);o&&(k(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.na=!0:i.modifiedDocuments.size>0?k(o.na):i.removedDocuments.size>0&&(k(o.na),o.na=!1))}),await Ke(n,s,t)}catch(s){await je(s)}}function Kr(e,t,n){const s=S(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ia.forEach((r,o)=>{const a=o.view.Pu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=S(r);a.onlineState=o;let c=!1;a.queries.forEach((h,u)=>{for(const l of u.listeners)l.Pu(o)&&(c=!0)}),c&&Pi(a)}(s.eventManager,t),i.length&&s.sa.zo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Sf(e,t,n){const s=S(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.aa.get(t),r=i&&i.key;if(r){let o=new U(w.comparator);o=o.insert(r,W.newNoDocument(r,C.min()));const a=R().add(r),c=new Kn(C.min(),new Map,new q(_),o,a);await za(s,c),s.ua=s.ua.remove(r),s.aa.delete(t),Vi(s)}else await js(s.localStore,t,!1).then(()=>qs(s,t,n)).catch(je)}async function Cf(e,t){const n=S(e),s=t.batch.batchId;try{const i=await _d(n.localStore,t);Xa(n,s,null),Wa(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ke(n,i)}catch(i){await je(i)}}async function bf(e,t,n){const s=S(e);try{const i=await function(r,o){const a=S(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return a.Bs.lookupMutationBatch(c,o).next(u=>(k(u!==null),h=u.keys(),a.Bs.removeMutationBatch(c,u))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,h))})}(s.localStore,t);Xa(s,t,n),Wa(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Ke(s,i)}catch(i){await je(i)}}function Wa(e,t){(e.la.get(t)||[]).forEach(n=>{n.resolve()}),e.la.delete(t)}function Xa(e,t,n){const s=S(e);let i=s.ha[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.ha[s.currentUser.toKey()]=i}}function qs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ra.get(t))e.ia.delete(s),n&&e.sa.wa(s,n);e.ra.delete(t),e.isPrimaryClient&&e.ca.vi(t).forEach(s=>{e.ca.containsKey(s)||Ya(e,s)})}function Ya(e,t){e.oa.delete(t.path.canonicalString());const n=e.ua.get(t);n!==null&&(Ua(e.remoteStore,n),e.ua=e.ua.remove(t),e.aa.delete(n),Vi(e))}function Hr(e,t,n){for(const s of n)s instanceof Ha?(e.ca.addReference(s.key,t),Af(e,s)):s instanceof Ga?(y("SyncEngine","Document no longer in limbo: "+s.key),e.ca.removeReference(s.key,t),e.ca.containsKey(s.key)||Ya(e,s.key)):I()}function Af(e,t){const n=t.key,s=n.path.canonicalString();e.ua.get(n)||e.oa.has(s)||(y("SyncEngine","New document in limbo: "+n),e.oa.add(s),Vi(e))}function Vi(e){for(;e.oa.size>0&&e.ua.size<e.maxConcurrentLimboResolutions;){const t=e.oa.values().next().value;e.oa.delete(t);const n=new w(x.fromString(t)),s=e.fa.next();e.aa.set(s,new yf(n)),e.ua=e.ua.insert(n,s),Fa(e.remoteStore,new kt(Vt(ga(n.path)),s,2,wi.A))}}async function Ke(e,t,n){const s=S(e),i=[],r=[],o=[];s.ia.isEmpty()||(s.ia.forEach((a,c)=>{o.push(s._a(c,t,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,h.fromCache?"not-current":"current"),i.push(h);const u=Di.Ys(c.targetId,h);r.push(u)}}))}),await Promise.all(o),s.sa.zo(i),await async function(a,c){const h=S(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>f.forEach(c,l=>f.forEach(l.Hs,p=>h.persistence.referenceDelegate.addReference(u,l.targetId,p)).next(()=>f.forEach(l.Js,p=>h.persistence.referenceDelegate.removeReference(u,l.targetId,p)))))}catch(u){if(!$e(u))throw u;y("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const l=u.targetId;if(!u.fromCache){const p=h.ui.get(l),m=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(m);h.ui=h.ui.insert(l,v)}}}(s.localStore,r))}async function _f(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await Ma(n.localStore,t);n.currentUser=t,function(i,r){i.la.forEach(o=>{o.forEach(a=>{a.reject(new E(d.CANCELLED,r))})}),i.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ke(n,s.di)}}function Df(e,t){const n=S(e),s=n.aa.get(t);if(s&&s.na)return R().add(s.key);{let i=R();const r=n.ra.get(t);if(!r)return i;for(const o of r){const a=n.ia.get(o);i=i.unionWith(a.view.ju)}return i}}function Nf(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=za.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Df.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Sf.bind(null,t),t.sa.zo=df.bind(null,t.eventManager),t.sa.wa=ff.bind(null,t.eventManager),t}function kf(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Cf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=bf.bind(null,t),t}class Rf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Hn(t.databaseInfo.databaseId),this.sharedClientState=this.ga(t),this.persistence=this.ya(t),await this.persistence.start(),this.gcScheduler=this.pa(t),this.localStore=this.Ia(t)}pa(t){return null}Ia(t){return Ad(this.persistence,new Cd,t.initialUser,this.M)}ya(t){return new Ud(ki.Yi,this.M)}ga(t){return new $d}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Lf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Kr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_f.bind(null,this.syncEngine),await af(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new hf}createDatastore(t){const n=Hn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Hd(i));var i;return function(r,o,a,c){return new Wd(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Kr(this.syncEngine,a,0),o=$r.vt()?new $r:new jd,new Yd(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,h){const u=new vf(s,i,r,o,a,c);return h&&(u.da=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=S(t);y("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await qe(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ea(this.observer.next,t)}error(t){this.observer.error?this.Ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Aa(){this.muted=!0}Ea(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=ha.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Oi(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Of(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ma(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Pf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Vf(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>jr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>jr(t.remoteStore,r)),e.onlineComponents=t}async function Vf(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await Of(e,new Rf)),e.offlineComponents}async function Qa(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await Pf(e,new Lf)),e.onlineComponents}function Ff(e){return Qa(e).then(t=>t.syncEngine)}async function Uf(e){const t=await Qa(e),n=t.eventManager;return n.onListen=wf.bind(null,t.syncEngine),n.onUnlisten=Tf.bind(null,t.syncEngine),n}function Bf(e,t,n={}){const s=new yt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const h=new xf({next:l=>{r.enqueueAndForget(()=>lf(i,u)),l.fromCache&&a.source==="server"?c.reject(new E(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(l)},error:l=>c.reject(l)}),u=new pf(o,h,{includeMetadataChanges:!0,ku:!0});return uf(i,u)}(await Uf(e),e.asyncQueue,t,n,s)),s.promise}const Gr=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(e,t,n){if(!n)throw new E(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function $f(e,t,n,s){if(t===!0&&s===!0)throw new E(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function zr(e){if(!w.isDocumentKey(e))throw new E(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Wr(e){if(w.isDocumentKey(e))throw new E(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Fi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function In(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fi(e);throw new E(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new E(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new E(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,$f("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xr({}),this._settingsFrozen=!1,t instanceof Zt?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new E(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zt(i.options.projectId)}(t))}get app(){if(!this._app)throw new E(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new E(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xr(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new el;switch(n.type){case"gapi":const s=n.client;return k(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new il(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new E(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Gr.get(t);n&&(y("ComponentProvider","Removing Datastore"),Gr.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}}class Wn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Wn(this.firestore,t,this._query)}}class vt extends Wn{constructor(t,n,s){super(t,n,ga(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new w(t))}withConverter(t){return new vt(this.firestore,t,this._path)}}function jf(e,t,...n){if(e=wt(e),Ja("collection","path",t),e instanceof Ui){const s=x.fromString(t,...n);return Wr(s),new vt(e,null,s)}{if(!(e instanceof ot||e instanceof vt))throw new E(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return Wr(s),new vt(e.firestore,null,s)}}function qf(e,t,...n){if(e=wt(e),arguments.length===1&&(t=ha.R()),Ja("doc","path",t),e instanceof Ui){const s=x.fromString(t,...n);return zr(s),new ot(e,null,new w(s))}{if(!(e instanceof ot||e instanceof vt))throw new E(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return zr(s),new ot(e.firestore,e instanceof vt?e.converter:null,new w(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Pa(this,"async_queue_retry"),this.Qa=()=>{const n=gs();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const t=gs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ja(),this.Wa(t)}enterRestrictedMode(t){if(!this.Ba){this.Ba=!0,this.Ka=t||!1;const n=gs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(t){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new yt;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.$a.push(t),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(t){if(!$e(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(t){const n=this.Fa.then(()=>(this.qa=!0,t().catch(s=>{this.Ua=s,this.qa=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Et("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.qa=!1,s))));return this.Fa=n,n}enqueueAfterDelay(t,n,s){this.ja(),this.Ga.indexOf(t)>-1&&(n=0);const i=Mi.createAndSchedule(this,t,n,s,r=>this.Ha(r));return this.La.push(i),i}ja(){this.Ua&&I()}verifyOperationInProgress(){}async Ja(){let t;do t=this.Fa,await t;while(t!==this.Fa)}Ya(t){for(const n of this.La)if(n.timerId===t)return!0;return!1}Xa(t){return this.Ja().then(()=>{this.La.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.La)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Ja()})}Za(t){this.Ga.push(t)}Ha(t){const n=this.La.indexOf(t);this.La.splice(n,1)}}class Bi extends Ui{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Kf,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||tc(this),this._firestoreClient.terminate()}}function Hf(e=Ph()){return Rh(e,"firestore").getImmediate()}function Za(e){return e._firestoreClient||tc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function tc(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new ul(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Mf(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new E(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this._byteString=t}static fromBase64String(t){try{return new se(K.fromBase64String(t))}catch(n){throw new E(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new se(K.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new E(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new E(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _(this._lat,t._lat)||_(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=/^__.*__$/;class ec{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Ue(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function nc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class qi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=i,r===void 0&&this.tc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(t){return new qi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.nc({path:s,ic:!1});return i.rc(t),i}oc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.nc({path:s,ic:!1});return i.tc(),i}uc(t){return this.nc({path:void 0,ic:!0})}ac(t){return Sn(t,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let t=0;t<this.path.length;t++)this.rc(this.path.get(t))}rc(t){if(t.length===0)throw this.ac("Document fields must not be empty");if(nc(this.ec)&&Gf.test(t))throw this.ac('Document fields cannot begin and end with "__"')}}class zf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.M=s||Hn(t)}lc(t,n,s,i=!1){return new qi({ec:t,methodName:n,hc:s,path:et.emptyPath(),ic:!1,cc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Wf(e){const t=e._freezeSettings(),n=Hn(e._databaseId);return new zf(e._databaseId,!!t.ignoreUndefinedProperties,n)}class Yn extends $i{_toFieldTransform(t){if(t.ec!==2)throw t.ec===1?t.ac(`${this._methodName}() can only appear at the top level of your update data`):t.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Yn}}function Xf(e,t,n,s){const i=e.lc(1,t,n);ic("Data must be an object, but it was:",i,s);const r=[],o=rt.empty();Bt(s,(c,h)=>{const u=Ki(t,c,n);h=wt(h);const l=i.oc(u);if(h instanceof Yn)r.push(u);else{const p=Qn(h,l);p!=null&&(r.push(u),o.set(u,p))}});const a=new Ei(r);return new ec(o,a,i.fieldTransforms)}function Yf(e,t,n,s,i,r){const o=e.lc(1,t,n),a=[Yr(t,s,n)],c=[i];if(r.length%2!=0)throw new E(d.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<r.length;p+=2)a.push(Yr(t,r[p])),c.push(r[p+1]);const h=[],u=rt.empty();for(let p=a.length-1;p>=0;--p)if(!Zf(h,a[p])){const m=a[p];let v=c[p];v=wt(v);const D=o.oc(m);if(v instanceof Yn)h.push(m);else{const N=Qn(v,D);N!=null&&(h.push(m),u.set(m,N))}}const l=new Ei(h);return new ec(u,l,o.fieldTransforms)}function Qn(e,t){if(sc(e=wt(e)))return ic("Unsupported field value:",t,e),Qf(e,t);if(e instanceof $i)return function(n,s){if(!nc(s.ec))throw s.ac(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ac(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ic&&t.ec!==4)throw t.ac("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Qn(o,s.uc(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=wt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ml(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Y.fromDate(n);return{timestampValue:En(s.M,i)}}if(n instanceof Y){const i=new Y(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:En(s.M,i)}}if(n instanceof ji)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof se)return{bytesValue:Na(s.M,n._byteString)};if(n instanceof ot){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ac(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ai(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ac(`Unsupported field value: ${Fi(n)}`)}(e,t)}function Qf(e,t){const n={};return ua(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Bt(e,(s,i)=>{const r=Qn(i,t.sc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function sc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Y||e instanceof ji||e instanceof se||e instanceof ot||e instanceof $i)}function ic(e,t,n){if(!sc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Fi(n);throw s==="an object"?t.ac(e+" a custom object"):t.ac(e+" "+s)}}function Yr(e,t,n){if((t=wt(t))instanceof Xn)return t._internalPath;if(typeof t=="string")return Ki(e,t);throw Sn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Jf=new RegExp("[~\\*/\\[\\]]");function Ki(e,t,n){if(t.search(Jf)>=0)throw Sn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Xn(...t.split("."))._internalPath}catch{throw Sn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Sn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new E(d.INVALID_ARGUMENT,a+e+c)}function Zf(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new tp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(oc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tp extends rc{data(){return super.data()}}function oc(e,t){return typeof t=="string"?Ki(e,t):t instanceof Xn?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ep extends rc{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new sn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(oc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class sn extends ep{data(t={}){return super.data(t)}}class np{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qe(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new sn(this._firestore,this._userDataWriter,s.key,s,new Qe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new sn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new sn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:sp(o.type),doc:a,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new E(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function rp(e,...t){for(const n of t)e=n._apply(e);return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{convertValue(t,n="none"){switch(Ot(t)){case 0:return null;case 1:return t.booleanValue;case 2:return O(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Bt(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new ji(O(t.latitude),O(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=da(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(be(t));default:return null}}convertTimestamp(t){const n=Tt(t);return new Y(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=x.fromString(t);k(xa(s));const i=new Zt(s.get(1),s.get(3)),r=new w(s.popFirst(5));return i.isEqual(n)||Et(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}class ap extends op{constructor(t){super(),this.firestore=t}convertBytes(t){return new se(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function cp(e){e=In(e,Wn);const t=In(e.firestore,Bi),n=Za(t),s=new ap(t);return ip(e._query),Bf(n,e._query).then(i=>new np(t,s,e,i))}function hp(e,t,n,...s){e=In(e,ot);const i=In(e.firestore,Bi),r=Wf(i);let o;return o=typeof(t=wt(t))=="string"||t instanceof Xn?Yf(r,"updateDoc",e._key,t,n,s):Xf(r,"updateDoc",e._key,t),up(i,[o.toMutation(e._key,Wt.exists(!0))])}function up(e,t){return function(n,s){const i=new yt;return n.asyncQueue.enqueueAndForget(async()=>If(await Ff(n),s,i)),i.promise}(Za(e),t)}(function(e,t=!0){(function(n){ae=n})(Mh),on(new ye("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Bi(i,new nl(n.getProvider("auth-internal")),new ol(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),Gt(wr,"3.4.9",e),Gt(wr,"3.4.9","esm2017")})();const ac="gifts",lp={apiKey:"AIzaSyCrOhLFT9mKaL0BQVVALcqd89yqBe17W6s",authDomain:"fir-demo-1f579.firebaseapp.com",projectId:"fir-demo-1f579",storageBucket:"fir-demo-1f579.appspot.com",messagingSenderId:"803667900690",appId:"1:803667900690:web:f0c4bc015354674dc25bcb"},dp=Oh(lp),cc=Hf(dp);async function fp(){const e=rp(jf(cc,ac)),t=await cp(e),n=[];return t.forEach(s=>n.push(Zn(Jn({},s.data()),{id:s.id}))),n}async function pp(e){const t=qf(cc,ac,e.id);await hp(t,{claimed:!e.claimed})}function Qr(e,t,n){const s=e.slice();return s[3]=t[n],s}function gp(e){return{c:gt,l:gt,m:gt,p:gt,d:gt}}function mp(e){let t,n=e[2],s=[];for(let i=0;i<n.length;i+=1)s[i]=Jr(Qr(e,n,i));return{c(){t=ft("ul");for(let i=0;i<s.length;i+=1)s[i].c()},l(i){t=pt(i,"UL",{});var r=_t(t);for(let o=0;o<s.length;o+=1)s[o].l(r);r.forEach(st)},m(i,r){Ht(i,t,r);for(let o=0;o<s.length;o+=1)s[o].m(t,null)},p(i,r){if(r&1){n=i[2];let o;for(o=0;o<n.length;o+=1){const a=Qr(i,n,o);s[o]?s[o].p(a,r):(s[o]=Jr(a),s[o].c(),s[o].m(t,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){i&&st(t),Tc(s,i)}}}function Jr(e){let t,n,s,i=e[3].name+"",r,o,a,c,h,u,l,p,m,v;function D(){return e[1](e[3])}return{c(){t=ft("li"),n=ft("label"),s=ft("a"),r=Ks(i),a=Je(),c=ft("input"),u=Je(),l=ft("span"),p=Je(),this.h()},l(N){t=pt(N,"LI",{class:!0});var G=_t(t);n=pt(G,"LABEL",{class:!0});var z=_t(n);s=pt(z,"A",{href:!0,class:!0});var dt=_t(s);r=Hs(dt,i),dt.forEach(st),a=Ze(z),c=pt(z,"INPUT",{type:!0,class:!0}),u=Ze(z),l=pt(z,"SPAN",{class:!0}),_t(l).forEach(st),z.forEach(st),p=Ze(G),G.forEach(st),this.h()},h(){bt(s,"href",o=e[3].link),bt(s,"class","svelte-1kvx0ax"),bt(c,"type","checkbox"),c.checked=h=e[3].claimed,bt(c,"class","svelte-1kvx0ax"),bt(l,"class","checkmark svelte-1kvx0ax"),bt(n,"class","container svelte-1kvx0ax"),bt(t,"class","svelte-1kvx0ax")},m(N,G){Ht(N,t,G),at(t,n),at(n,s),at(s,r),at(n,a),at(n,c),at(n,u),at(n,l),at(t,p),m||(v=Ec(l,"click",D),m=!0)},p(N,G){e=N},d(N){N&&st(t),m=!1,v()}}}function yp(e){let t,n;return{c(){t=ft("p"),n=Ks("Loading Gifts...")},l(s){t=pt(s,"P",{});var i=_t(t);n=Hs(i,"Loading Gifts..."),i.forEach(st)},m(s,i){Ht(s,t,i),at(t,n)},p:gt,d(s){s&&st(t)}}}function vp(e){let t,n,s,i,r={ctx:e,current:null,token:null,hasCatch:!1,pending:yp,then:mp,catch:gp,value:2};return vc(e[0],r),{c(){t=ft("h1"),n=Ks("Welcome to Denis' Gift List"),s=Je(),i=Xi(),r.block.c()},l(o){t=pt(o,"H1",{});var a=_t(t);n=Hs(a,"Welcome to Denis' Gift List"),a.forEach(st),s=Ze(o),i=Xi(),r.block.l(o)},m(o,a){Ht(o,t,a),at(t,n),Ht(o,s,a),Ht(o,i,a),r.block.m(o,r.anchor=a),r.mount=()=>i.parentNode,r.anchor=i},p(o,[a]){e=o,wc(r,e,a)},i:gt,o:gt,d(o){o&&st(t),o&&st(s),o&&st(i),r.block.d(o),r.token=null,r=null}}}function wp(e){return[fp(),s=>pp(s)]}class Ip extends gc{constructor(t){super(),mc(this,t,wp,vp,yc,{})}}export{Ip as default};
