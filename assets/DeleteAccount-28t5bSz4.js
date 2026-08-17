var dp=Object.defineProperty;var pp=(r,e,t)=>e in r?dp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var M=(r,e,t)=>pp(r,typeof e!="symbol"?e+"":e,t);import{r as ln,j as X,L as gp,m as Jt}from"./main-C-3r73eD.js";/**
 * @license
 * Copyright 2025 Google LLC
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
 */const mp=()=>{};var Ac={};/**
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
 */const xh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ep=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],B=r[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|B&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fB={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,B=o?r[s+1]:0,u=s+2<r.length,c=u?r[s+2]:0,h=i>>2,f=(i&3)<<4|B>>4;let g=(B&15)<<2|c>>6,T=c&63;u||(T=64,o||(g=64)),n.push(t[h],t[f],t[g],t[T])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(xh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ep(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],B=s<r.length?t[r.charAt(s)]:0;++s;const c=s<r.length?t[r.charAt(s)]:64;++s;const f=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||B==null||c==null||f==null)throw new _p;const g=i<<2|B>>4;if(n.push(g),c!==64){const T=B<<4&240|c>>2;if(n.push(T),f!==64){const R=c<<6&192|f;n.push(R)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class _p extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dp=function(r){const e=xh(r);return fB.encodeByteArray(e,!0)},Ji=function(r){return Dp(r).replace(/\./g,"")},Vh=function(r){try{return fB.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wp=()=>Mh().__FIREBASE_DEFAULTS__,yp=()=>{if(typeof process>"u"||typeof Ac>"u")return;const r=Ac.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ip=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Vh(r[1]);return e&&JSON.parse(e)},fo=()=>{try{return mp()||wp()||yp()||Ip()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Gh=r=>{var e,t;return(t=(e=fo())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Hh=r=>{const e=Gh(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Uh=()=>{var r;return(r=fo())==null?void 0:r.config},Jh=r=>{var e;return(e=fo())==null?void 0:e[`_${r}`]};/**
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
 */class Rs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Tp(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Ji(JSON.stringify(t)),Ji(JSON.stringify(o)),""].join(".")}/**
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function vp(){var e;const r=(e=fo())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pp(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function bp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sp(){const r=We();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Np(){return!vp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dB(){try{return typeof indexedDB=="object"}catch{return!1}}function Op(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Fp="FirebaseError";class Ut extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Fp,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vr.prototype.create)}}class Vr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Lp(i,n):"Error",B=`${this.serviceName}: ${o} (${s}).`;return new Ut(s,B,n)}}function Lp(r,e){try{let t=0,n="";for(;t<r.length;){const s=r.indexOf("{$",t);if(s===-1){n+=r.substring(t);break}const i=r.indexOf("}",s+2);if(i===-1){n+=r.substring(t);break}const o=r.substring(s+2,i),B=e[o];n+=r.substring(t,s)+(B!=null?String(B):`<${o}?>`),t=i+1}return n}catch{return r}}function kp(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function nr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(vc(i)&&vc(o)){if(!nr(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function vc(r){return r!==null&&typeof r=="object"}/**
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
 */function js(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function xp(r,e){const t=new Vp(r,e);return t.subscribe.bind(t)}class Vp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Mp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Ca),s.error===void 0&&(s.error=Ca),s.complete===void 0&&(s.complete=Ca);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mp(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ca(){}/**
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
 */const Gp=1e3,Hp=2,Up=14400*1e3,Jp=.5;function jp(r,e=Gp,t=Hp){const n=e*Math.pow(t,r),s=Math.round(Jp*n*(Math.random()-.5)*2);return Math.min(Up,n+s)}/**
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
 */function Fe(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ar(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pB(r){return(await fetch(r,{credentials:"include"})).ok}class Mt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jn="[DEFAULT]";/**
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
 */class qp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Rs;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zp(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const B=this.normalizeInstanceIdentifier(i);n===B&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Kp(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kp(r){return r===jn?void 0:r}function zp(r){return r.instantiationMode==="EAGER"}/**
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
 */class Qp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ie||(ie={}));const $p={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Wp=ie.INFO,Yp={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Xp=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Yp[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class po{constructor(e){this.name=e,this._logLevel=Wp,this._logHandler=Xp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Zp=(r,e)=>e.some(t=>r instanceof t);let Rc,Pc;function eg(){return Rc||(Rc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tg(){return Pc||(Pc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jh=new WeakMap,Fa=new WeakMap,qh=new WeakMap,fa=new WeakMap,gB=new WeakMap;function ng(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(In(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&jh.set(t,r)}).catch(()=>{}),gB.set(e,r),e}function rg(r){if(Fa.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Fa.set(r,e)}let La={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Fa.get(r);if(e==="objectStoreNames")return r.objectStoreNames||qh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return In(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function sg(r){La=r(La)}function ig(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(da(this),e,...t);return qh.set(n,e.sort?e.sort():[e]),In(n)}:tg().includes(r)?function(...e){return r.apply(da(this),e),In(jh.get(this))}:function(...e){return In(r.apply(da(this),e))}}function og(r){return typeof r=="function"?ig(r):(r instanceof IDBTransaction&&rg(r),Zp(r,eg())?new Proxy(r,La):r)}function In(r){if(r instanceof IDBRequest)return ng(r);if(fa.has(r))return fa.get(r);const e=og(r);return e!==r&&(fa.set(r,e),gB.set(e,r)),e}const da=r=>gB.get(r);function ag(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),B=In(o);return n&&o.addEventListener("upgradeneeded",u=>{n(In(o.result),u.oldVersion,u.newVersion,In(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),B.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),B}const Bg=["get","getKey","getAll","getAllKeys","count"],ug=["put","add","delete","clear"],pa=new Map;function bc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(pa.get(e))return pa.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=ug.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Bg.includes(t)))return;const i=async function(o,...B){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return n&&(c=c.index(B.shift())),(await Promise.all([c[t](...B),s&&u.done]))[0]};return pa.set(e,i),i}sg(r=>({...r,get:(e,t,n)=>bc(e,t)||r.get(e,t,n),has:(e,t)=>!!bc(e,t)||r.has(e,t)}));/**
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
 */class cg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lg(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function lg(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ka="@firebase/app",Sc="0.16.0";/**
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
 */const Xt=new po("@firebase/app"),hg="@firebase/app-compat",Cg="@firebase/analytics-compat",fg="@firebase/analytics",dg="@firebase/app-check-compat",pg="@firebase/app-check",gg="@firebase/auth",mg="@firebase/auth-compat",Eg="@firebase/database",_g="@firebase/data-connect",Dg="@firebase/database-compat",wg="@firebase/functions",yg="@firebase/functions-compat",Ig="@firebase/installations",Tg="@firebase/installations-compat",Ag="@firebase/messaging",vg="@firebase/messaging-compat",Rg="@firebase/performance",Pg="@firebase/performance-compat",bg="@firebase/remote-config",Sg="@firebase/remote-config-compat",Ng="@firebase/storage",Og="@firebase/storage-compat",Fg="@firebase/firestore",Lg="@firebase/ai",kg="@firebase/firestore-compat",xg="firebase",Vg="12.17.0";/**
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
 */const xa="[DEFAULT]",Mg={[ka]:"fire-core",[hg]:"fire-core-compat",[fg]:"fire-analytics",[Cg]:"fire-analytics-compat",[pg]:"fire-app-check",[dg]:"fire-app-check-compat",[gg]:"fire-auth",[mg]:"fire-auth-compat",[Eg]:"fire-rtdb",[_g]:"fire-data-connect",[Dg]:"fire-rtdb-compat",[wg]:"fire-fn",[yg]:"fire-fn-compat",[Ig]:"fire-iid",[Tg]:"fire-iid-compat",[Ag]:"fire-fcm",[vg]:"fire-fcm-compat",[Rg]:"fire-perf",[Pg]:"fire-perf-compat",[bg]:"fire-rc",[Sg]:"fire-rc-compat",[Ng]:"fire-gcs",[Og]:"fire-gcs-compat",[Fg]:"fire-fst",[kg]:"fire-fst-compat",[Lg]:"fire-vertex","fire-js":"fire-js",[xg]:"fire-js-all"};/**
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
 */const ji=new Map,Gg=new Map,Va=new Map;function Nc(r,e){try{r.container.addComponent(e)}catch(t){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Zt(r){const e=r.name;if(Va.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;Va.set(e,r);for(const t of ji.values())Nc(t,r);for(const t of Gg.values())Nc(t,r);return!0}function Mr(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function dt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Hg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new Vr("app","Firebase",Hg);/**
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
 */class Ug{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
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
 */const Gr=Vg;function Kh(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:xa,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(t||(t=Uh()),!t)throw Kt.create("no-options");const i=ji.get(s);if(i)if(nr(t,i.options)){if(nr(n,i.config))return i;throw Kt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw Kt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new Qp(s);for(const u of Va.values())o.addComponent(u);const B=new Ug(t,n,o);return ji.set(s,B),B}function go(r=xa){const e=ji.get(r);if(!e&&r===xa&&Uh())return Kh();if(!e)throw Kt.create("no-app",{appName:r});return e}function At(r,e,t){let n=Mg[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(o.join(" "));return}Zt(new Mt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Jg="firebase-heartbeat-database",jg=1,Ps="firebase-heartbeat-store";let ga=null;function zh(){return ga||(ga=ag(Jg,jg,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ps)}catch(t){console.warn(t)}}}}).catch(r=>{throw Kt.create("idb-open",{originalErrorMessage:r.message})})),ga}async function qg(r){try{const t=(await zh()).transaction(Ps),n=await t.objectStore(Ps).get(Qh(r));return await t.done,n}catch(e){if(e instanceof Ut)Xt.warn(e.message);else{const t=Kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(t.message)}}}async function Oc(r,e){try{const n=(await zh()).transaction(Ps,"readwrite");await n.objectStore(Ps).put(e,Qh(r)),await n.done}catch(t){if(t instanceof Ut)Xt.warn(t.message);else{const n=Kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xt.warn(n.message)}}}function Qh(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Kg=1024,zg=30;class Qg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Wg(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>zg){const o=Yg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Xt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fc(),{heartbeatsToSend:n,unsentEntries:s}=$g(this._heartbeatsCache.heartbeats),i=Ji(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Xt.warn(t),""}}}function Fc(){return new Date().toISOString().substring(0,10)}function $g(r,e=Kg){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Lc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Lc(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Wg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dB()?Op().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Oc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Oc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Lc(r){return Ji(JSON.stringify({version:2,heartbeats:r})).length}function Yg(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function Xg(r){Zt(new Mt("platform-logger",e=>new cg(e),"PRIVATE")),Zt(new Mt("heartbeat",e=>new Qg(e),"PRIVATE")),At(ka,Sc,r),At(ka,Sc,"esm2020"),At("fire-js","")}/**
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
 */Xg("");function $h(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zg=$h,Wh=new Vr("auth","Firebase",$h());/**
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
 */const qi=new po("@firebase/auth");function Yh(r,...e){qi.logLevel<=ie.WARN&&qi.warn(`Auth (${Gr}): ${r}`,...e)}function Oi(r,...e){qi.logLevel<=ie.ERROR&&qi.error(`Auth (${Gr}): ${r}`,...e)}/**
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
 */function Gt(r,...e){throw EB(r,...e)}function Dt(r,...e){return EB(r,...e)}function mB(r,e,t){const n={...Zg(),[e]:t};return new Vr("auth","Firebase",n).create(e,{appName:r.name})}function Wn(r){return mB(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xh(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Gt(r,"argument-error"),mB(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function EB(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Wh.create(r,...e)}function te(r,e,...t){if(!r)throw EB(e,...t)}function zt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Oi(e),new Error(e)}function en(r,e){r||zt(e)}/**
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
 */function Ma(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function em(){return kc()==="http:"||kc()==="https:"}function kc(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function tm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(em()||Pp()||"connection"in navigator)?navigator.onLine:!0}function nm(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class qs{constructor(e,t){this.shortDelay=e,this.longDelay=t,en(t>e,"Short delay should be less than long delay!"),this.isMobile=Ap()||bp()}get(){return tm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _B(r,e){en(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Zh{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],im=new qs(3e4,6e4);function DB(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Hr(r,e,t,n,s={}){return eC(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const B=js({...o,key:r.config.apiKey}).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const c={method:e,headers:u,...i};return Rp()||(c.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&ar(r.emulatorConfig.host)&&(c.credentials="include"),Zh.fetch()(await tC(r,r.config.apiHost,t,B),c)})}async function eC(r,e,t){r._canInitEmulator=!1;const n={...rm,...e};try{const s=new am(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ei(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const B=i.ok?o.errorMessage:o.error.message,[u,c]=B.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ei(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ei(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ei(r,"user-disabled",o);const h=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw mB(r,h,c);Gt(r,h)}}catch(s){if(s instanceof Ut)throw s;Gt(r,"network-request-failed",{message:String(s)})}}async function om(r,e,t,n,s={}){const i=await Hr(r,e,t,n,s);return"mfaPendingCredential"in i&&Gt(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function tC(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?_B(r.config,s):`${r.config.apiScheme}://${s}`;return sm.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class am{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Dt(this.auth,"network-request-failed")),im.get())})}}function Ei(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Dt(r,e,n);return s.customData._tokenResponse=t,s}/**
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
 */async function Bm(r,e){return Hr(r,"POST","/v1/accounts:delete",e)}async function Ki(r,e){return Hr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Es(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function um(r,e=!1){const t=Fe(r),n=await t.getIdToken(e),s=wB(n);te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Es(ma(s.auth_time)),issuedAtTime:Es(ma(s.iat)),expirationTime:Es(ma(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ma(r){return Number(r)*1e3}function wB(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Oi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vh(t);return s?JSON.parse(s):(Oi("Failed to decode base64 JWT payload"),null)}catch(s){return Oi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function xc(r){const e=wB(r);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bs(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Ut&&cm(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function cm({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class lm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ga{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zi(r){var f;const e=r.auth,t=await r.getIdToken(),n=await bs(r,Ki(e,{idToken:t}));te(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?nC(s.providerUserInfo):[],o=Cm(r.providerData,i),B=r.isAnonymous,u=!(r.email&&s.passwordHash)&&!(o!=null&&o.length),c=B?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ga(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(r,h)}async function hm(r){const e=Fe(r);await zi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cm(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function nC(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function fm(r,e){const t=await eC(r,{},async()=>{const n=js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await tC(r,s,"/v1/token",`key=${i}`),B=await r._getAdditionalHeaders();B["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:B,body:n};return r.emulatorConfig&&ar(r.emulatorConfig.host)&&(u.credentials="include"),Zh.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function dm(r,e){return Hr(r,"POST","/v2/accounts:revokeToken",DB(r,e))}/**
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
 */class wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=xc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await fm(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new wr;return n&&(te(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wr,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function hn(r,e){te(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Tt{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new lm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ga(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await bs(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return um(this,e)}reload(){return hm(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await zi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await bs(this,Bm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,B=t.tenantId??void 0,u=t._redirectEventId??void 0,c=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:f,emailVerified:g,isAnonymous:T,providerData:R,stsTokenManager:x}=t;te(f&&x,e,"internal-error");const J=wr.fromJSON(this.name,x);te(typeof f=="string",e,"internal-error"),hn(n,e.name),hn(s,e.name),te(typeof g=="boolean",e,"internal-error"),te(typeof T=="boolean",e,"internal-error"),hn(i,e.name),hn(o,e.name),hn(B,e.name),hn(u,e.name),hn(c,e.name),hn(h,e.name);const z=new Tt({uid:f,auth:e,email:s,emailVerified:g,displayName:n,isAnonymous:T,photoURL:o,phoneNumber:i,tenantId:B,stsTokenManager:J,createdAt:c,lastLoginAt:h});return R&&Array.isArray(R)&&(z.providerData=R.map(se=>({...se}))),u&&(z._redirectEventId=u),z}static async _fromIdTokenResponse(e,t,n=!1){const s=new wr;s.updateFromServerResponse(t);const i=new Tt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await zi(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?nC(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),B=new wr;B.updateFromIdToken(n);const u=new Tt({uid:s.localId,auth:e,stsTokenManager:B,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ga(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const Vc=new Map;function Qt(r){en(r instanceof Function,"Expected a class definition");let e=Vc.get(r);return e?(en(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Vc.set(r,e),e)}/**
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
 */class rC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rC.type="NONE";const Mc=rC;/**
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
 */function Fi(r,e,t){return`firebase:${r}:${e}:${t}`}class yr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Fi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ki(this.auth,{idToken:e}).catch(()=>{});return t?Tt._fromGetAccountInfoResponse(this.auth,t,e):null}return Tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new yr(Qt(Mc),e,n);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Qt(Mc);const o=Fi(n,e.config.apiKey,e.name);let B=null;for(const c of t)try{const h=await c._get(o);if(h){let f;if(typeof h=="string"){const g=await Ki(e,{idToken:h}).catch(()=>{});if(!g)break;f=await Tt._fromGetAccountInfoResponse(e,g,h)}else f=Tt._fromJSON(e,h);c!==i&&(B=f),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new yr(i,e,n):(i=u[0],B&&await i._set(o,B.toJSON()),await Promise.all(t.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new yr(i,e,n))}}/**
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
 */function Gc(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uC(e))return"Blackberry";if(cC(e))return"Webos";if(iC(e))return"Safari";if((e.includes("chrome/")||oC(e))&&!e.includes("edge/"))return"Chrome";if(BC(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function sC(r=We()){return/firefox\//i.test(r)}function iC(r=We()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oC(r=We()){return/crios\//i.test(r)}function aC(r=We()){return/iemobile/i.test(r)}function BC(r=We()){return/android/i.test(r)}function uC(r=We()){return/blackberry/i.test(r)}function cC(r=We()){return/webos/i.test(r)}function yB(r=We()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function pm(r=We()){var e;return yB(r)&&!!((e=window.navigator)!=null&&e.standalone)}function gm(){return Sp()&&document.documentMode===10}function lC(r=We()){return yB(r)||BC(r)||cC(r)||uC(r)||/windows phone/i.test(r)||aC(r)}/**
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
 */function hC(r,e=[]){let t;switch(r){case"Browser":t=Gc(We());break;case"Worker":t=`${Gc(We())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gr}/${n}`}/**
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
 */class mm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,B)=>{try{const u=e(i);o(u)}catch(u){B(u)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Em(r,e={}){return Hr(r,"GET","/v2/passwordPolicy",DB(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const _m=6;class Dm{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??_m,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class wm{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hc(this),this.idTokenSubscription=new Hc(this),this.beforeStateQueue=new mm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qt(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted&&(this.persistenceManager=await yr.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ki(this,{idToken:e}),n=await Tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(B=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(B,B))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,B=n==null?void 0:n._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===B)&&(u!=null&&u.user)&&(n=u.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dt(this.app))return Promise.reject(Wn(this));const t=e?Fe(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dt(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Em(this),t=new Dm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await dm(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qt(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await yr.create(this,[Qt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const B=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(B,this,"internal-error"),B.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Yh(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function mo(r){return Fe(r)}class Hc{constructor(e){this.auth=e,this.observer=null,this.addObserver=xp(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let IB={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ym(r){IB=r}function Im(r){return IB.loadJS(r)}function Tm(){return IB.gapiScript}function Am(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function vm(r,e){const t=Mr(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(nr(i,e??{}))return s;Gt(s,"already-initialized")}return t.initialize({options:e})}function Rm(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Qt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Pm(r,e,t){const n=mo(r);te(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=CC(e),{host:o,port:B}=bm(e),u=B===null?"":`:${B}`,c={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:B,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){te(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),te(nr(c,n.config.emulator)&&nr(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=c,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,ar(o)?pB(`${i}//${o}${u}`):Sm()}function CC(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function bm(r){const e=CC(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Uc(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Uc(o)}}}function Uc(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Sm(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class fC{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,t){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}/**
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
 */async function Ir(r,e){return om(r,"POST","/v1/accounts:signInWithIdp",DB(r,e))}/**
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
 */const Nm="http://localhost";class rr extends fC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Gt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new rr(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ir(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ir(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ir(e,t)}buildRequest(){const e={requestUri:Nm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=js(t)}return e}}/**
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
 */class Eo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ks extends Eo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pn extends Ks{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends Ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rr._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Nt.credential(t,n)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class gn extends Ks{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */class mn extends Ks{constructor(){super("twitter.com")}static credential(e,t){return rr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return mn.credential(t,n)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
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
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await Tt._fromIdTokenResponse(e,n,s),o=Jc(n);return new Pr({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Jc(n);return new Pr({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Jc(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Qi extends Ut{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Qi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Qi(e,t,n,s)}}function dC(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qi._fromErrorAndOperation(r,i,e,n):i})}async function Om(r,e,t=!1){const n=await bs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Pr._forOperation(r,"link",n)}/**
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
 */async function Fm(r,e,t=!1){const{auth:n}=r;if(dt(n.app))return Promise.reject(Wn(n));const s="reauthenticate";try{const i=await bs(r,dC(n,s,e,r),t);te(i.idToken,n,"internal-error");const o=wB(i.idToken);te(o,n,"internal-error");const{sub:B}=o;return te(r.uid===B,n,"user-mismatch"),Pr._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Gt(n,"user-mismatch"),i}}/**
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
 */async function Lm(r,e,t=!1){if(dt(r.app))return Promise.reject(Wn(r));const n="signIn",s=await dC(r,n,e),i=await Pr._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function km(r,e,t,n){return Fe(r).onIdTokenChanged(e,t,n)}function xm(r,e,t){return Fe(r).beforeAuthStateChanged(e,t)}function Vm(r,e,t,n){return Fe(r).onAuthStateChanged(e,t,n)}function Mm(r){return Fe(r).signOut()}const $i="__sak";/**
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
 */class pC{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($i,"1"),this.storage.removeItem($i),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Gm=1e3,Hm=10;class gC extends pC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,B,u)=>{this.notifyListeners(o,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);gm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Hm):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Gm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gC.type="LOCAL";const Um=gC;/**
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
 */class mC extends pC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mC.type="SESSION";const EC=mC;/**
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
 */function Jm(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _o{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new _o(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const B=Array.from(o).map(async c=>c(t.origin,i)),u=await Jm(B);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_o.receivers=[];/**
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
 */function TB(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class jm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((B,u)=>{const c=TB("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(f){const g=f;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),B(g.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kt(){return window}function qm(r){kt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function _C(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function Km(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zm(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function Qm(){return _C()?self:null}/**
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
 */const DC="firebaseLocalStorageDb",$m=1,Wi="firebaseLocalStorage",wC="fbase_key";class zs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Do(r,e){return r.transaction([Wi],e?"readwrite":"readonly").objectStore(Wi)}function Wm(){const r=indexedDB.deleteDatabase(DC);return new zs(r).toPromise()}function yC(){const r=indexedDB.open(DC,$m);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Wi,{keyPath:wC})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Wi)?e(n):(n.close(),await Wm(),e(await yC()))})})}async function jc(r,e,t){const n=Do(r,!0).put({[wC]:e,value:t});return new zs(n).toPromise()}async function Ym(r,e){const t=Do(r,!1).get(e),n=await new zs(t).toPromise();return n===void 0?null:n.value}function qc(r,e){const t=Do(r,!0).delete(e);return new zs(t).toPromise()}const Xm=800,Zm=3;class IC{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.addEventListener=="function"&&document.addEventListener("visibilitychange",this.onVisibilityChange)}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.removeEventListener=="function"&&document.removeEventListener("visibilitychange",this.onVisibilityChange)}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isHiding=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isHiding=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isHiding&&(this.isHiding=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this.onVisibilityChange=()=>{typeof document<"u"&&(document.visibilityState==="hidden"?this.onPageHide():document.visibilityState==="visible"&&this.onPageShow())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isHiding)throw new Error("Database is closing/hidden");return this.dbPromise?this.dbPromise:(this.dbPromise=yC(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(this.isHiding||t++>Zm)throw n;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return _C()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_o._getInstance(Qm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Km(),!this.activeServiceWorker)return;this.sender=new jm(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await jc(e,$i,"1"),await qc(e,$i)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>jc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Ym(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isHiding)return[];try{const e=await this._withRetries(s=>{const i=Do(s,!1).getAll();return new zs(i).toPromise()});if(this.isHiding)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isHiding||Yh(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}IC.type="LOCAL";const eE=IC;new qs(3e4,6e4);/**
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
 */function AB(r,e){return e?Qt(e):(te(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class vB extends fC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ir(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ir(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tE(r){return Lm(r.auth,new vB(r),r.bypassAuthState)}function nE(r){const{auth:e,user:t}=r;return te(t,e,"internal-error"),Fm(t,new vB(r),r.bypassAuthState)}async function rE(r){const{auth:e,user:t}=r;return te(t,e,"internal-error"),Om(t,new vB(r),r.bypassAuthState)}/**
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
 */class TC{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:B}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(B)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tE;case"linkViaPopup":case"linkViaRedirect":return rE;case"reauthViaPopup":case"reauthViaRedirect":return nE;default:Gt(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sE=new qs(2e3,1e4);async function iE(r,e,t){if(dt(r.app))return Promise.reject(Dt(r,"operation-not-supported-in-this-environment"));const n=mo(r);Xh(r,e,Eo);const s=AB(n,t);return new _n(n,"signInViaPopup",e,s).executeNotNull()}async function oE(r,e,t){const n=Fe(r);if(dt(n.auth.app))return Promise.reject(Dt(n.auth,"operation-not-supported-in-this-environment"));Xh(n.auth,e,Eo);const s=AB(n.auth,t);return new _n(n.auth,"reauthViaPopup",e,s,n).executeNotNull()}class _n extends TC{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=TB();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sE.get())};e()}}_n.currentPopupAction=null;/**
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
 */const aE="pendingRedirect",Li=new Map;class BE extends TC{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Li.get(this.auth._key());if(!e){try{const n=await uE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Li.set(this.auth._key(),e)}return this.bypassAuthState||Li.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uE(r,e){const t=hE(e),n=lE(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function cE(r,e){Li.set(r._key(),e)}function lE(r){return Qt(r._redirectPersistence)}function hE(r){return Fi(aE,r.config.apiKey,r.name)}async function CE(r,e,t=!1){if(dt(r.app))return Promise.reject(Wn(r));const n=mo(r),s=AB(n,e),o=await new BE(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const fE=600*1e3;class dE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!AC(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(Dt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kc(e))}saveEventToCache(e){this.cachedEventUids.add(Kc(e)),this.lastProcessedEventTime=Date.now()}}function Kc(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function AC({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pE(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AC(r);default:return!1}}/**
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
 */async function gE(r,e={}){return Hr(r,"GET","/v1/projects",e)}/**
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
 */const mE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EE=/^https?/;async function _E(r){if(r.config.emulator)return;const{authorizedDomains:e}=await gE(r);for(const t of e)try{if(DE(t))return}catch{}Gt(r,"unauthorized-domain")}function DE(r){const e=Ma(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!EE.test(t))return!1;if(mE.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const wE=new qs(3e4,6e4);function zc(){const r=kt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function yE(r){return new Promise((e,t)=>{var s,i,o;function n(){zc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zc(),t(Dt(r,"network-request-failed"))},timeout:wE.get()})}if((i=(s=kt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=kt().gapi)!=null&&o.load)n();else{const B=Am("iframefcb");return kt()[B]=()=>{gapi.load?n():t(Dt(r,"network-request-failed"))},Im(`${Tm()}?onload=${B}`).catch(u=>t(u))}}).catch(e=>{throw ki=null,e})}let ki=null;function IE(r){return ki=ki||yE(r),ki}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const TE=new qs(5e3,15e3),AE="__/auth/iframe",vE="emulator/auth/iframe",RE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bE(r){const e=r.config;te(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?_B(e,vE):`https://${r.config.authDomain}/${AE}`,n={apiKey:e.apiKey,appName:r.name,v:Gr},s=PE.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${js(n).slice(1)}`}async function SE(r){const e=await IE(r),t=kt().gapi;return te(t,r,"internal-error"),e.open({where:document.body,url:bE(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RE,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=Dt(r,"network-request-failed"),B=kt().setTimeout(()=>{i(o)},TE.get());function u(){kt().clearTimeout(B),s(n)}n.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const NE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OE=500,FE=600,LE="_blank",kE="http://localhost";class Qc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xE(r,e,t,n=OE,s=FE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let B="";const u={...NE,width:n.toString(),height:s.toString(),top:i,left:o},c=We().toLowerCase();t&&(B=oC(c)?LE:t),sC(c)&&(e=e||kE,u.scrollbars="yes");const h=Object.entries(u).reduce((g,[T,R])=>`${g}${T}=${R},`,"");if(pm(c)&&B!=="_self")return VE(e||"",B),new Qc(null);const f=window.open(e||"",B,h);te(f,r,"popup-blocked");try{f.focus()}catch{}return new Qc(f)}function VE(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const ME="__/auth/handler",GE="emulator/auth/handler",HE=encodeURIComponent("fac");async function $c(r,e,t,n,s,i){te(r.config.authDomain,r,"auth-domain-config-required"),te(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Gr,eventId:s};if(e instanceof Eo){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",kp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Ks){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}r.tenantId&&(o.tid=r.tenantId);const B=o;for(const h of Object.keys(B))B[h]===void 0&&delete B[h];const u=await r._getAppCheckToken(),c=u?`#${HE}=${encodeURIComponent(u)}`:"";return`${UE(r)}?${js(B).slice(1)}${c}`}function UE({config:r}){return r.emulator?_B(r,GE):`https://${r.authDomain}/${ME}`}/**
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
 */const Ea="webStorageSupport";class JE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=EC,this._completeRedirectFn=CE,this._overrideRedirectResult=cE}async _openPopup(e,t,n,s){var o;en((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await $c(e,t,n,Ma(),s);return xE(e,i,TB())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await $c(e,t,n,Ma(),s);return qm(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(en(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await SE(e),n=new dE(e);return t.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ea,{type:Ea},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ea];i!==void 0&&t(!!i),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_E(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return lC()||iC()||yB()}}const jE=JE;var Wc="@firebase/auth",Yc="1.13.4";/**
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
 */class qE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function KE(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zE(r){Zt(new Mt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:B}=n.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:B,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hC(r)},c=new wm(n,s,i,u);return Rm(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Zt(new Mt("auth-internal",e=>{const t=mo(e.getProvider("auth").getImmediate());return(n=>new qE(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(Wc,Yc,KE(r)),At(Wc,Yc,"esm2020")}/**
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
 */const QE=300,$E=Jh("authIdTokenMaxAge")||QE;let Xc=null;const WE=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>$E)return;const s=t==null?void 0:t.token;Xc!==s&&(Xc=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function YE(r=go()){const e=Mr(r,"auth");if(e.isInitialized())return e.getImmediate();const t=vm(r,{popupRedirectResolver:jE,persistence:[eE,Um,EC]}),n=Jh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=WE(i.toString());xm(t,o,()=>o(t.currentUser)),km(t,B=>o(B))}}const s=Gh("auth");return s&&Pm(t,`http://${s}`),t}function XE(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}ym({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Dt("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",XE().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zE("Browser");var Zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tn,vC;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function D(){}D.prototype=E.prototype,A.F=E.prototype,A.prototype=new D,A.prototype.constructor=A,A.D=function(v,I,b){for(var _=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)_[nt-2]=arguments[nt];return E.prototype[I].apply(v,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,E,D){D||(D=0);const v=Array(16);if(typeof E=="string")for(var I=0;I<16;++I)v[I]=E.charCodeAt(D++)|E.charCodeAt(D++)<<8|E.charCodeAt(D++)<<16|E.charCodeAt(D++)<<24;else for(I=0;I<16;++I)v[I]=E[D++]|E[D++]<<8|E[D++]<<16|E[D++]<<24;E=A.g[0],D=A.g[1],I=A.g[2];let b=A.g[3],_;_=E+(b^D&(I^b))+v[0]+3614090360&4294967295,E=D+(_<<7&4294967295|_>>>25),_=b+(I^E&(D^I))+v[1]+3905402710&4294967295,b=E+(_<<12&4294967295|_>>>20),_=I+(D^b&(E^D))+v[2]+606105819&4294967295,I=b+(_<<17&4294967295|_>>>15),_=D+(E^I&(b^E))+v[3]+3250441966&4294967295,D=I+(_<<22&4294967295|_>>>10),_=E+(b^D&(I^b))+v[4]+4118548399&4294967295,E=D+(_<<7&4294967295|_>>>25),_=b+(I^E&(D^I))+v[5]+1200080426&4294967295,b=E+(_<<12&4294967295|_>>>20),_=I+(D^b&(E^D))+v[6]+2821735955&4294967295,I=b+(_<<17&4294967295|_>>>15),_=D+(E^I&(b^E))+v[7]+4249261313&4294967295,D=I+(_<<22&4294967295|_>>>10),_=E+(b^D&(I^b))+v[8]+1770035416&4294967295,E=D+(_<<7&4294967295|_>>>25),_=b+(I^E&(D^I))+v[9]+2336552879&4294967295,b=E+(_<<12&4294967295|_>>>20),_=I+(D^b&(E^D))+v[10]+4294925233&4294967295,I=b+(_<<17&4294967295|_>>>15),_=D+(E^I&(b^E))+v[11]+2304563134&4294967295,D=I+(_<<22&4294967295|_>>>10),_=E+(b^D&(I^b))+v[12]+1804603682&4294967295,E=D+(_<<7&4294967295|_>>>25),_=b+(I^E&(D^I))+v[13]+4254626195&4294967295,b=E+(_<<12&4294967295|_>>>20),_=I+(D^b&(E^D))+v[14]+2792965006&4294967295,I=b+(_<<17&4294967295|_>>>15),_=D+(E^I&(b^E))+v[15]+1236535329&4294967295,D=I+(_<<22&4294967295|_>>>10),_=E+(I^b&(D^I))+v[1]+4129170786&4294967295,E=D+(_<<5&4294967295|_>>>27),_=b+(D^I&(E^D))+v[6]+3225465664&4294967295,b=E+(_<<9&4294967295|_>>>23),_=I+(E^D&(b^E))+v[11]+643717713&4294967295,I=b+(_<<14&4294967295|_>>>18),_=D+(b^E&(I^b))+v[0]+3921069994&4294967295,D=I+(_<<20&4294967295|_>>>12),_=E+(I^b&(D^I))+v[5]+3593408605&4294967295,E=D+(_<<5&4294967295|_>>>27),_=b+(D^I&(E^D))+v[10]+38016083&4294967295,b=E+(_<<9&4294967295|_>>>23),_=I+(E^D&(b^E))+v[15]+3634488961&4294967295,I=b+(_<<14&4294967295|_>>>18),_=D+(b^E&(I^b))+v[4]+3889429448&4294967295,D=I+(_<<20&4294967295|_>>>12),_=E+(I^b&(D^I))+v[9]+568446438&4294967295,E=D+(_<<5&4294967295|_>>>27),_=b+(D^I&(E^D))+v[14]+3275163606&4294967295,b=E+(_<<9&4294967295|_>>>23),_=I+(E^D&(b^E))+v[3]+4107603335&4294967295,I=b+(_<<14&4294967295|_>>>18),_=D+(b^E&(I^b))+v[8]+1163531501&4294967295,D=I+(_<<20&4294967295|_>>>12),_=E+(I^b&(D^I))+v[13]+2850285829&4294967295,E=D+(_<<5&4294967295|_>>>27),_=b+(D^I&(E^D))+v[2]+4243563512&4294967295,b=E+(_<<9&4294967295|_>>>23),_=I+(E^D&(b^E))+v[7]+1735328473&4294967295,I=b+(_<<14&4294967295|_>>>18),_=D+(b^E&(I^b))+v[12]+2368359562&4294967295,D=I+(_<<20&4294967295|_>>>12),_=E+(D^I^b)+v[5]+4294588738&4294967295,E=D+(_<<4&4294967295|_>>>28),_=b+(E^D^I)+v[8]+2272392833&4294967295,b=E+(_<<11&4294967295|_>>>21),_=I+(b^E^D)+v[11]+1839030562&4294967295,I=b+(_<<16&4294967295|_>>>16),_=D+(I^b^E)+v[14]+4259657740&4294967295,D=I+(_<<23&4294967295|_>>>9),_=E+(D^I^b)+v[1]+2763975236&4294967295,E=D+(_<<4&4294967295|_>>>28),_=b+(E^D^I)+v[4]+1272893353&4294967295,b=E+(_<<11&4294967295|_>>>21),_=I+(b^E^D)+v[7]+4139469664&4294967295,I=b+(_<<16&4294967295|_>>>16),_=D+(I^b^E)+v[10]+3200236656&4294967295,D=I+(_<<23&4294967295|_>>>9),_=E+(D^I^b)+v[13]+681279174&4294967295,E=D+(_<<4&4294967295|_>>>28),_=b+(E^D^I)+v[0]+3936430074&4294967295,b=E+(_<<11&4294967295|_>>>21),_=I+(b^E^D)+v[3]+3572445317&4294967295,I=b+(_<<16&4294967295|_>>>16),_=D+(I^b^E)+v[6]+76029189&4294967295,D=I+(_<<23&4294967295|_>>>9),_=E+(D^I^b)+v[9]+3654602809&4294967295,E=D+(_<<4&4294967295|_>>>28),_=b+(E^D^I)+v[12]+3873151461&4294967295,b=E+(_<<11&4294967295|_>>>21),_=I+(b^E^D)+v[15]+530742520&4294967295,I=b+(_<<16&4294967295|_>>>16),_=D+(I^b^E)+v[2]+3299628645&4294967295,D=I+(_<<23&4294967295|_>>>9),_=E+(I^(D|~b))+v[0]+4096336452&4294967295,E=D+(_<<6&4294967295|_>>>26),_=b+(D^(E|~I))+v[7]+1126891415&4294967295,b=E+(_<<10&4294967295|_>>>22),_=I+(E^(b|~D))+v[14]+2878612391&4294967295,I=b+(_<<15&4294967295|_>>>17),_=D+(b^(I|~E))+v[5]+4237533241&4294967295,D=I+(_<<21&4294967295|_>>>11),_=E+(I^(D|~b))+v[12]+1700485571&4294967295,E=D+(_<<6&4294967295|_>>>26),_=b+(D^(E|~I))+v[3]+2399980690&4294967295,b=E+(_<<10&4294967295|_>>>22),_=I+(E^(b|~D))+v[10]+4293915773&4294967295,I=b+(_<<15&4294967295|_>>>17),_=D+(b^(I|~E))+v[1]+2240044497&4294967295,D=I+(_<<21&4294967295|_>>>11),_=E+(I^(D|~b))+v[8]+1873313359&4294967295,E=D+(_<<6&4294967295|_>>>26),_=b+(D^(E|~I))+v[15]+4264355552&4294967295,b=E+(_<<10&4294967295|_>>>22),_=I+(E^(b|~D))+v[6]+2734768916&4294967295,I=b+(_<<15&4294967295|_>>>17),_=D+(b^(I|~E))+v[13]+1309151649&4294967295,D=I+(_<<21&4294967295|_>>>11),_=E+(I^(D|~b))+v[4]+4149444226&4294967295,E=D+(_<<6&4294967295|_>>>26),_=b+(D^(E|~I))+v[11]+3174756917&4294967295,b=E+(_<<10&4294967295|_>>>22),_=I+(E^(b|~D))+v[2]+718787259&4294967295,I=b+(_<<15&4294967295|_>>>17),_=D+(b^(I|~E))+v[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,A.g[2]=A.g[2]+I&4294967295,A.g[3]=A.g[3]+b&4294967295}n.prototype.v=function(A,E){E===void 0&&(E=A.length);const D=E-this.blockSize,v=this.C;let I=this.h,b=0;for(;b<E;){if(I==0)for(;b<=D;)s(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<E;)if(v[I++]=A.charCodeAt(b++),I==this.blockSize){s(this,v),I=0;break}}else for(;b<E;)if(v[I++]=A[b++],I==this.blockSize){s(this,v),I=0;break}}this.h=I,this.o+=E},n.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;E=this.o*8;for(var D=A.length-8;D<A.length;++D)A[D]=E&255,E/=256;for(this.v(A),A=Array(16),E=0,D=0;D<4;++D)for(let v=0;v<32;v+=8)A[E++]=this.g[D]>>>v&255;return A};function i(A,E){var D=B;return Object.prototype.hasOwnProperty.call(D,A)?D[A]:D[A]=E(A)}function o(A,E){this.h=E;const D=[];let v=!0;for(let I=A.length-1;I>=0;I--){const b=A[I]|0;v&&b==E||(D[I]=b,v=!1)}this.g=D}var B={};function u(A){return-128<=A&&A<128?i(A,function(E){return new o([E|0],E<0?-1:0)}):new o([A|0],A<0?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return f;if(A<0)return J(c(-A));const E=[];let D=1;for(let v=0;A>=D;v++)E[v]=A/D|0,D*=4294967296;return new o(E,0)}function h(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return J(h(A.substring(1),E));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const D=c(Math.pow(E,8));let v=f;for(let b=0;b<A.length;b+=8){var I=Math.min(8,A.length-b);const _=parseInt(A.substring(b,b+I),E);I<8?(I=c(Math.pow(E,I)),v=v.j(I).add(c(_))):(v=v.j(D),v=v.add(c(_)))}return v}var f=u(0),g=u(1),T=u(16777216);r=o.prototype,r.m=function(){if(x(this))return-J(this).m();let A=0,E=1;for(let D=0;D<this.g.length;D++){const v=this.i(D);A+=(v>=0?v:4294967296+v)*E,E*=4294967296}return A},r.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(R(this))return"0";if(x(this))return"-"+J(this).toString(A);const E=c(Math.pow(A,6));var D=this;let v="";for(;;){const I=ve(D,E).g;D=z(D,I.j(E));let b=((D.g.length>0?D.g[0]:D.h)>>>0).toString(A);if(D=I,R(D))return b+v;for(;b.length<6;)b="0"+b;v=b+v}},r.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function R(A){if(A.h!=0)return!1;for(let E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function x(A){return A.h==-1}r.l=function(A){return A=z(this,A),x(A)?-1:R(A)?0:1};function J(A){const E=A.g.length,D=[];for(let v=0;v<E;v++)D[v]=~A.g[v];return new o(D,~A.h).add(g)}r.abs=function(){return x(this)?J(this):this},r.add=function(A){const E=Math.max(this.g.length,A.g.length),D=[];let v=0;for(let I=0;I<=E;I++){let b=v+(this.i(I)&65535)+(A.i(I)&65535),_=(b>>>16)+(this.i(I)>>>16)+(A.i(I)>>>16);v=_>>>16,b&=65535,_&=65535,D[I]=_<<16|b}return new o(D,D[D.length-1]&-2147483648?-1:0)};function z(A,E){return A.add(J(E))}r.j=function(A){if(R(this)||R(A))return f;if(x(this))return x(A)?J(this).j(J(A)):J(J(this).j(A));if(x(A))return J(this.j(J(A)));if(this.l(T)<0&&A.l(T)<0)return c(this.m()*A.m());const E=this.g.length+A.g.length,D=[];for(var v=0;v<2*E;v++)D[v]=0;for(v=0;v<this.g.length;v++)for(let I=0;I<A.g.length;I++){const b=this.i(v)>>>16,_=this.i(v)&65535,nt=A.i(I)>>>16,Vn=A.i(I)&65535;D[2*v+2*I]+=_*Vn,se(D,2*v+2*I),D[2*v+2*I+1]+=b*Vn,se(D,2*v+2*I+1),D[2*v+2*I+1]+=_*nt,se(D,2*v+2*I+1),D[2*v+2*I+2]+=b*nt,se(D,2*v+2*I+2)}for(A=0;A<E;A++)D[A]=D[2*A+1]<<16|D[2*A];for(A=E;A<2*E;A++)D[A]=0;return new o(D,0)};function se(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function ae(A,E){this.g=A,this.h=E}function ve(A,E){if(R(E))throw Error("division by zero");if(R(A))return new ae(f,f);if(x(A))return E=ve(J(A),E),new ae(J(E.g),J(E.h));if(x(E))return E=ve(A,J(E)),new ae(J(E.g),E.h);if(A.g.length>30){if(x(A)||x(E))throw Error("slowDivide_ only works with positive integers.");for(var D=g,v=E;v.l(A)<=0;)D=Ge(D),v=Ge(v);var I=Ie(D,1),b=Ie(v,1);for(v=Ie(v,2),D=Ie(D,2);!R(v);){var _=b.add(v);_.l(A)<=0&&(I=I.add(D),b=_),v=Ie(v,1),D=Ie(D,1)}return E=z(A,I.j(E)),new ae(I,E)}for(I=f;A.l(E)>=0;){for(D=Math.max(1,Math.floor(A.m()/E.m())),v=Math.ceil(Math.log(D)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),b=c(D),_=b.j(E);x(_)||_.l(A)>0;)D-=v,b=c(D),_=b.j(E);R(b)&&(b=g),I=I.add(b),A=z(A,_)}return new ae(I,A)}r.B=function(A){return ve(this,A).h},r.and=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let v=0;v<E;v++)D[v]=this.i(v)&A.i(v);return new o(D,this.h&A.h)},r.or=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let v=0;v<E;v++)D[v]=this.i(v)|A.i(v);return new o(D,this.h|A.h)},r.xor=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let v=0;v<E;v++)D[v]=this.i(v)^A.i(v);return new o(D,this.h^A.h)};function Ge(A){const E=A.g.length+1,D=[];for(let v=0;v<E;v++)D[v]=A.i(v)<<1|A.i(v-1)>>>31;return new o(D,A.h)}function Ie(A,E){const D=E>>5;E%=32;const v=A.g.length-D,I=[];for(let b=0;b<v;b++)I[b]=E>0?A.i(b+D)>>>E|A.i(b+D+1)<<32-E:A.i(b+D);return new o(I,A.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,vC=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Tn=o}).apply(typeof Zc<"u"?Zc:typeof self<"u"?self:typeof window<"u"?window:{});var _i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var RC,ds,PC,xi,Ha,bC,SC,NC;(function(){var r,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _i=="object"&&_i];for(var l=0;l<a.length;++l){var C=a[l];if(C&&C.Math==Math)return C}throw Error("Cannot find global object")}var n=t(this);function s(a,l){if(l)e:{var C=n;a=a.split(".");for(var d=0;d<a.length-1;d++){var P=a[d];if(!(P in C))break e;C=C[P]}a=a[a.length-1],d=C[a],l=l(d),l!=d&&l!=null&&e(C,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var C=[],d;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&C.push([d,l[d]]);return C}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function B(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,C){return a.call.apply(a.bind,arguments)}function c(a,l,C){return c=u,c.apply(null,arguments)}function h(a,l){var C=Array.prototype.slice.call(arguments,1);return function(){var d=C.slice();return d.push.apply(d,arguments),a.apply(this,d)}}function f(a,l){function C(){}C.prototype=l.prototype,a.Z=l.prototype,a.prototype=new C,a.prototype.constructor=a,a.Ob=function(d,P,S){for(var U=Array(arguments.length-2),re=2;re<arguments.length;re++)U[re-2]=arguments[re];return l.prototype[P].apply(d,U)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const l=a.length;if(l>0){const C=Array(l);for(let d=0;d<l;d++)C[d]=a[d];return C}return[]}function R(a,l){for(let d=1;d<arguments.length;d++){const P=arguments[d];var C=typeof P;if(C=C!="object"?C:P?Array.isArray(P)?"array":C:"null",C=="array"||C=="object"&&typeof P.length=="number"){C=a.length||0;const S=P.length||0;a.length=C+S;for(let U=0;U<S;U++)a[C+U]=P[U]}else a.push(P)}}class x{constructor(l,C){this.i=l,this.j=C,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function J(a){o.setTimeout(()=>{throw a},0)}function z(){var a=A;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class se{constructor(){this.h=this.g=null}add(l,C){const d=ae.get();d.set(l,C),this.h?this.h.next=d:this.g=d,this.h=d}}var ae=new x(()=>new ve,a=>a.reset());class ve{constructor(){this.next=this.g=this.h=null}set(l,C){this.h=l,this.g=C,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,Ie=!1,A=new se,E=()=>{const a=Promise.resolve(void 0);Ge=()=>{a.then(D)}};function D(){for(var a;a=z();){try{a.h.call(a.g)}catch(C){J(C)}var l=ae;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}Ie=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const C=()=>{};o.addEventListener("test",C,l),o.removeEventListener("test",C,l)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function nt(a,l){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}f(nt,I),nt.prototype.init=function(a,l){const C=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(C=="mouseover"?l=a.fromElement:C=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&nt.Z.h.call(this)},nt.prototype.h=function(){nt.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vn="closure_listenable_"+(Math.random()*1e6|0),xd=0;function Vd(a,l,C,d,P){this.listener=a,this.proxy=null,this.src=l,this.type=C,this.capture=!!d,this.ha=P,this.key=++xd,this.da=this.fa=!1}function si(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ii(a,l,C){for(const d in a)l.call(C,a[d],d,a)}function Md(a,l){for(const C in a)l.call(void 0,a[C],C,a)}function Tu(a){const l={};for(const C in a)l[C]=a[C];return l}const Au="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vu(a,l){let C,d;for(let P=1;P<arguments.length;P++){d=arguments[P];for(C in d)a[C]=d[C];for(let S=0;S<Au.length;S++)C=Au[S],Object.prototype.hasOwnProperty.call(d,C)&&(a[C]=d[C])}}function oi(a){this.src=a,this.g={},this.h=0}oi.prototype.add=function(a,l,C,d,P){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const U=jo(a,l,d,P);return U>-1?(l=a[U],C||(l.fa=!1)):(l=new Vd(l,this.src,S,!!d,P),l.fa=C,a.push(l)),l};function Jo(a,l){const C=l.type;if(C in a.g){var d=a.g[C],P=Array.prototype.indexOf.call(d,l,void 0),S;(S=P>=0)&&Array.prototype.splice.call(d,P,1),S&&(si(l),a.g[C].length==0&&(delete a.g[C],a.h--))}}function jo(a,l,C,d){for(let P=0;P<a.length;++P){const S=a[P];if(!S.da&&S.listener==l&&S.capture==!!C&&S.ha==d)return P}return-1}var qo="closure_lm_"+(Math.random()*1e6|0),Ko={};function Ru(a,l,C,d,P){if(Array.isArray(l)){for(let S=0;S<l.length;S++)Ru(a,l[S],C,d,P);return null}return C=Su(C),a&&a[Vn]?a.J(l,C,B(d)?!!d.capture:!1,P):Gd(a,l,C,!1,d,P)}function Gd(a,l,C,d,P,S){if(!l)throw Error("Invalid event type");const U=B(P)?!!P.capture:!!P;let re=Qo(a);if(re||(a[qo]=re=new oi(a)),C=re.add(l,C,d,U,S),C.proxy)return C;if(d=Hd(),C.proxy=d,d.src=a,d.listener=C,a.addEventListener)b||(P=U),P===void 0&&(P=!1),a.addEventListener(l.toString(),d,P);else if(a.attachEvent)a.attachEvent(bu(l.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return C}function Hd(){function a(C){return l.call(a.src,a.listener,C)}const l=Ud;return a}function Pu(a,l,C,d,P){if(Array.isArray(l))for(var S=0;S<l.length;S++)Pu(a,l[S],C,d,P);else d=B(d)?!!d.capture:!!d,C=Su(C),a&&a[Vn]?(a=a.i,S=String(l).toString(),S in a.g&&(l=a.g[S],C=jo(l,C,d,P),C>-1&&(si(l[C]),Array.prototype.splice.call(l,C,1),l.length==0&&(delete a.g[S],a.h--)))):a&&(a=Qo(a))&&(l=a.g[l.toString()],a=-1,l&&(a=jo(l,C,d,P)),(C=a>-1?l[a]:null)&&zo(C))}function zo(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[Vn])Jo(l.i,a);else{var C=a.type,d=a.proxy;l.removeEventListener?l.removeEventListener(C,d,a.capture):l.detachEvent?l.detachEvent(bu(C),d):l.addListener&&l.removeListener&&l.removeListener(d),(C=Qo(l))?(Jo(C,a),C.h==0&&(C.src=null,l[qo]=null)):si(a)}}}function bu(a){return a in Ko?Ko[a]:Ko[a]="on"+a}function Ud(a,l){if(a.da)a=!0;else{l=new nt(l,this);const C=a.listener,d=a.ha||a.src;a.fa&&zo(a),a=C.call(d,l)}return a}function Qo(a){return a=a[qo],a instanceof oi?a:null}var $o="__closure_events_fn_"+(Math.random()*1e9>>>0);function Su(a){return typeof a=="function"?a:(a[$o]||(a[$o]=function(l){return a.handleEvent(l)}),a[$o])}function Ke(){v.call(this),this.i=new oi(this),this.M=this,this.G=null}f(Ke,v),Ke.prototype[Vn]=!0,Ke.prototype.removeEventListener=function(a,l,C,d){Pu(this,a,l,C,d)};function Xe(a,l){var C,d=a.G;if(d)for(C=[];d;d=d.G)C.push(d);if(a=a.M,d=l.type||l,typeof l=="string")l=new I(l,a);else if(l instanceof I)l.target=l.target||a;else{var P=l;l=new I(d,a),vu(l,P)}P=!0;let S,U;if(C)for(U=C.length-1;U>=0;U--)S=l.g=C[U],P=ai(S,d,!0,l)&&P;if(S=l.g=a,P=ai(S,d,!0,l)&&P,P=ai(S,d,!1,l)&&P,C)for(U=0;U<C.length;U++)S=l.g=C[U],P=ai(S,d,!1,l)&&P}Ke.prototype.N=function(){if(Ke.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const C=a.g[l];for(let d=0;d<C.length;d++)si(C[d]);delete a.g[l],a.h--}}this.G=null},Ke.prototype.J=function(a,l,C,d){return this.i.add(String(a),l,!1,C,d)},Ke.prototype.K=function(a,l,C,d){return this.i.add(String(a),l,!0,C,d)};function ai(a,l,C,d){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let P=!0;for(let S=0;S<l.length;++S){const U=l[S];if(U&&!U.da&&U.capture==C){const re=U.listener,xe=U.ha||U.src;U.fa&&Jo(a.i,U),P=re.call(xe,d)!==!1&&P}}return P&&!d.defaultPrevented}function Jd(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function Nu(a){a.g=Jd(()=>{a.g=null,a.i&&(a.i=!1,Nu(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class jd extends v{constructor(l,C){super(),this.m=l,this.l=C,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Nu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(a){v.call(this),this.h=a,this.g={}}f(Wr,v);var Ou=[];function Fu(a){ii(a.g,function(l,C){this.g.hasOwnProperty(C)&&zo(l)},a),a.g={}}Wr.prototype.N=function(){Wr.Z.N.call(this),Fu(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wo=o.JSON.stringify,qd=o.JSON.parse,Kd=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Lu(){}function ku(){}var Yr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Yo(){I.call(this,"d")}f(Yo,I);function Xo(){I.call(this,"c")}f(Xo,I);var Mn={},xu=null;function Bi(){return xu=xu||new Ke}Mn.Ia="serverreachability";function Vu(a){I.call(this,Mn.Ia,a)}f(Vu,I);function Xr(a){const l=Bi();Xe(l,new Vu(l))}Mn.STAT_EVENT="statevent";function Mu(a,l){I.call(this,Mn.STAT_EVENT,a),this.stat=l}f(Mu,I);function Ze(a){const l=Bi();Xe(l,new Mu(l,a))}Mn.Ja="timingevent";function Gu(a,l){I.call(this,Mn.Ja,a),this.size=l}f(Gu,I);function Zr(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function es(){this.g=!0}es.prototype.ua=function(){this.g=!1};function zd(a,l,C,d,P,S){a.info(function(){if(a.g)if(S){var U="",re=S.split("&");for(let de=0;de<re.length;de++){var xe=re[de].split("=");if(xe.length>1){const He=xe[0];xe=xe[1];const bt=He.split("_");U=bt.length>=2&&bt[1]=="type"?U+(He+"="+xe+"&"):U+(He+"=redacted&")}}}else U=null;else U=S;return"XMLHTTP REQ ("+d+") [attempt "+P+"]: "+l+`
`+C+`
`+U})}function Qd(a,l,C,d,P,S,U){a.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+P+"]: "+l+`
`+C+`
`+S+" "+U})}function cr(a,l,C,d){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Wd(a,C)+(d?" "+d:"")})}function $d(a,l){a.info(function(){return"TIMEOUT: "+l})}es.prototype.info=function(){};function Wd(a,l){if(!a.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var C=S[a];if(!(C.length<2)){var d=C[1];if(Array.isArray(d)&&!(d.length<1)){var P=d[0];if(P!="noop"&&P!="stop"&&P!="close")for(let U=1;U<d.length;U++)d[U]=""}}}}return Wo(S)}catch{return l}}var ui={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Hu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Uu;function Zo(){}f(Zo,Lu),Zo.prototype.g=function(){return new XMLHttpRequest},Uu=new Zo;function ts(a){return encodeURIComponent(String(a))}function Yd(a){var l=1;a=a.split(":");const C=[];for(;l>0&&a.length;)C.push(a.shift()),l--;return a.length&&C.push(a.join(":")),C}function sn(a,l,C,d){this.j=a,this.i=l,this.l=C,this.S=d||1,this.V=new Wr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ju}function Ju(){this.i=null,this.g="",this.h=!1}var ju={},ea={};function ta(a,l,C){a.M=1,a.A=li(Pt(l)),a.u=C,a.R=!0,qu(a,null)}function qu(a,l){a.F=Date.now(),ci(a),a.B=Pt(a.A);var C=a.B,d=a.S;Array.isArray(d)||(d=[String(d)]),sc(C.i,"t",d),a.C=0,C=a.j.L,a.h=new Ju,a.g=wc(a.j,C?l:null,!a.u),a.P>0&&(a.O=new jd(c(a.Y,a,a.g),a.P)),l=a.V,C=a.g,d=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Ou[0]=P.toString()),P=Ou);for(let S=0;S<P.length;S++){const U=Ru(C,P[S],d||l.handleEvent,!1,l.h||l);if(!U)break;l.g[U.key]=U}l=a.J?Tu(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),Xr(),zd(a.i,a.v,a.B,a.l,a.S,a.u)}sn.prototype.ba=function(a){a=a.target;const l=this.O;l&&Bn(a)==3?l.j():this.Y(a)},sn.prototype.Y=function(a){try{if(a==this.g)e:{const re=Bn(this.g),xe=this.g.ya(),de=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||lc(this.g)))){this.K||re!=4||xe==7||(xe==8||de<=0?Xr(3):Xr(2)),na(this);var l=this.g.ca();this.X=l;var C=Xd(this);if(this.o=l==200,Qd(this.i,this.v,this.B,this.l,this.S,re,l),this.o){if(this.U&&!this.L){t:{if(this.g){var d,P=this.g;if((d=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(d)){var S=d;break t}}S=null}if(a=S)cr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ra(this,a);else{this.o=!1,this.m=3,Ze(12),Gn(this),ns(this);break e}}if(this.R){a=!0;let He;for(;!this.K&&this.C<C.length;)if(He=Zd(this,C),He==ea){re==4&&(this.m=4,Ze(14),a=!1),cr(this.i,this.l,null,"[Incomplete Response]");break}else if(He==ju){this.m=4,Ze(15),cr(this.i,this.l,C,"[Invalid Chunk]"),a=!1;break}else cr(this.i,this.l,He,null),ra(this,He);if(Ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||C.length!=0||this.h.h||(this.m=1,Ze(16),a=!1),this.o=this.o&&a,!a)cr(this.i,this.l,C,"[Invalid Chunked Response]"),Gn(this),ns(this);else if(C.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),la(U),U.P=!0,Ze(11))}}else cr(this.i,this.l,C,null),ra(this,C);re==4&&Gn(this),this.o&&!this.K&&(re==4?mc(this.j,this):(this.o=!1,ci(this)))}else Cp(this.g),l==400&&C.indexOf("Unknown SID")>0?(this.m=3,Ze(12)):(this.m=0,Ze(13)),Gn(this),ns(this)}}}catch{}finally{}};function Xd(a){if(!Ku(a))return a.g.la();const l=lc(a.g);if(l==="")return"";let C="";const d=l.length,P=Bn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Gn(a),ns(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<d;S++)a.h.h=!0,C+=a.h.i.decode(l[S],{stream:!(P&&S==d-1)});return l.length=0,a.h.g+=C,a.C=0,a.h.g}function Ku(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Zd(a,l){var C=a.C,d=l.indexOf(`
`,C);return d==-1?ea:(C=Number(l.substring(C,d)),isNaN(C)?ju:(d+=1,d+C>l.length?ea:(l=l.slice(d,d+C),a.C=d+C,l)))}sn.prototype.cancel=function(){this.K=!0,Gn(this)};function ci(a){a.T=Date.now()+a.H,zu(a,a.H)}function zu(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Zr(c(a.aa,a),l)}function na(a){a.D&&(o.clearTimeout(a.D),a.D=null)}sn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?($d(this.i,this.B),this.M!=2&&(Xr(),Ze(17)),Gn(this),this.m=2,ns(this)):zu(this,this.T-a)};function ns(a){a.j.I==0||a.K||mc(a.j,a)}function Gn(a){na(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Fu(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function ra(a,l){try{var C=a.j;if(C.I!=0&&(C.g==a||sa(C.h,a))){if(!a.L&&sa(C.h,a)&&C.I==3){try{var d=C.Ba.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var P=d;if(P[0]==0){e:if(!C.v){if(C.g)if(C.g.F+3e3<a.F)pi(C),fi(C);else break e;ca(C),Ze(18)}}else C.xa=P[1],0<C.xa-C.K&&P[2]<37500&&C.F&&C.A==0&&!C.C&&(C.C=Zr(c(C.Va,C),6e3));Wu(C.h)<=1&&C.ta&&(C.ta=void 0)}else Un(C,11)}else if((a.L||C.g==a)&&pi(C),!_(l))for(P=C.Ba.g.parse(l),l=0;l<P.length;l++){let de=P[l];const He=de[0];if(!(He<=C.K))if(C.K=He,de=de[1],C.I==2)if(de[0]=="c"){C.M=de[1],C.ba=de[2];const bt=de[3];bt!=null&&(C.ka=bt,C.j.info("VER="+C.ka));const Jn=de[4];Jn!=null&&(C.za=Jn,C.j.info("SVER="+C.za));const un=de[5];un!=null&&typeof un=="number"&&un>0&&(d=1.5*un,C.O=d,C.j.info("backChannelRequestTimeoutMs_="+d)),d=C;const cn=a.g;if(cn){const mi=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mi){var S=d.h;S.g||mi.indexOf("spdy")==-1&&mi.indexOf("quic")==-1&&mi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ia(S,S.h),S.h=null))}if(d.G){const ha=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;ha&&(d.wa=ha,Ee(d.J,d.G,ha))}}C.I=3,C.l&&C.l.ra(),C.aa&&(C.T=Date.now()-a.F,C.j.info("Handshake RTT: "+C.T+"ms")),d=C;var U=a;if(d.na=Dc(d,d.L?d.ba:null,d.W),U.L){Yu(d.h,U);var re=U,xe=d.O;xe&&(re.H=xe),re.D&&(na(re),ci(re)),d.g=U}else pc(d);C.i.length>0&&di(C)}else de[0]!="stop"&&de[0]!="close"||Un(C,7);else C.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Un(C,7):ua(C):de[0]!="noop"&&C.l&&C.l.qa(de),C.A=0)}}Xr(4)}catch{}}var ep=class{constructor(a,l){this.g=a,this.map=l}};function Qu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $u(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wu(a){return a.h?1:a.g?a.g.size:0}function sa(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function ia(a,l){a.g?a.g.add(l):a.h=l}function Yu(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Qu.prototype.cancel=function(){if(this.i=Xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const C of a.g.values())l=l.concat(C.G);return l}return T(a.i)}var Zu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tp(a,l){if(a){a=a.split("&");for(let C=0;C<a.length;C++){const d=a[C].indexOf("=");let P,S=null;d>=0?(P=a[C].substring(0,d),S=a[C].substring(d+1)):P=a[C],l(P,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function on(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof on?(this.l=a.l,rs(this,a.j),this.o=a.o,this.g=a.g,ss(this,a.u),this.h=a.h,oa(this,ic(a.i)),this.m=a.m):a&&(l=String(a).match(Zu))?(this.l=!1,rs(this,l[1]||"",!0),this.o=is(l[2]||""),this.g=is(l[3]||"",!0),ss(this,l[4]),this.h=is(l[5]||"",!0),oa(this,l[6]||"",!0),this.m=is(l[7]||"")):(this.l=!1,this.i=new as(null,this.l))}on.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(os(l,ec,!0),":");var C=this.g;return(C||l=="file")&&(a.push("//"),(l=this.o)&&a.push(os(l,ec,!0),"@"),a.push(ts(C).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),C=this.u,C!=null&&a.push(":",String(C))),(C=this.h)&&(this.g&&C.charAt(0)!="/"&&a.push("/"),a.push(os(C,C.charAt(0)=="/"?sp:rp,!0))),(C=this.i.toString())&&a.push("?",C),(C=this.m)&&a.push("#",os(C,op)),a.join("")},on.prototype.resolve=function(a){const l=Pt(this);let C=!!a.j;C?rs(l,a.j):C=!!a.o,C?l.o=a.o:C=!!a.g,C?l.g=a.g:C=a.u!=null;var d=a.h;if(C)ss(l,a.u);else if(C=!!a.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var P=l.h.lastIndexOf("/");P!=-1&&(d=l.h.slice(0,P+1)+d)}if(P=d,P==".."||P==".")d="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){d=P.lastIndexOf("/",0)==0,P=P.split("/");const S=[];for(let U=0;U<P.length;){const re=P[U++];re=="."?d&&U==P.length&&S.push(""):re==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),d&&U==P.length&&S.push("")):(S.push(re),d=!0)}d=S.join("/")}else d=P}return C?l.h=d:C=a.i.toString()!=="",C?oa(l,ic(a.i)):C=!!a.m,C&&(l.m=a.m),l};function Pt(a){return new on(a)}function rs(a,l,C){a.j=C?is(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function ss(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function oa(a,l,C){l instanceof as?(a.i=l,ap(a.i,a.l)):(C||(l=os(l,ip)),a.i=new as(l,a.l))}function Ee(a,l,C){a.i.set(l,C)}function li(a){return Ee(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function is(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function os(a,l,C){return typeof a=="string"?(a=encodeURI(a).replace(l,np),C&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function np(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ec=/[#\/\?@]/g,rp=/[#\?:]/g,sp=/[#\?]/g,ip=/[#\?@]/g,op=/#/g;function as(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&tp(a.i,function(l,C){a.add(decodeURIComponent(l.replace(/\+/g," ")),C)}))}r=as.prototype,r.add=function(a,l){Hn(this),this.i=null,a=lr(this,a);let C=this.g.get(a);return C||this.g.set(a,C=[]),C.push(l),this.h+=1,this};function tc(a,l){Hn(a),l=lr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function nc(a,l){return Hn(a),l=lr(a,l),a.g.has(l)}r.forEach=function(a,l){Hn(this),this.g.forEach(function(C,d){C.forEach(function(P){a.call(l,P,d,this)},this)},this)};function rc(a,l){Hn(a);let C=[];if(typeof l=="string")nc(a,l)&&(C=C.concat(a.g.get(lr(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)C=C.concat(a[l]);return C}r.set=function(a,l){return Hn(this),this.i=null,a=lr(this,a),nc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=rc(this,a),a.length>0?String(a[0]):l):l};function sc(a,l,C){tc(a,l),C.length>0&&(a.i=null,a.g.set(lr(a,l),T(C)),a.h+=C.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let d=0;d<l.length;d++){var C=l[d];const P=ts(C);C=rc(this,C);for(let S=0;S<C.length;S++){let U=P;C[S]!==""&&(U+="="+ts(C[S])),a.push(U)}}return this.i=a.join("&")};function ic(a){const l=new as;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function lr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function ap(a,l){l&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(C,d){const P=d.toLowerCase();d!=P&&(tc(this,d),sc(this,P,C))},a)),a.j=l}function Bp(a,l){const C=new es;if(o.Image){const d=new Image;d.onload=h(an,C,"TestLoadImage: loaded",!0,l,d),d.onerror=h(an,C,"TestLoadImage: error",!1,l,d),d.onabort=h(an,C,"TestLoadImage: abort",!1,l,d),d.ontimeout=h(an,C,"TestLoadImage: timeout",!1,l,d),o.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=a}else l(!1)}function up(a,l){const C=new es,d=new AbortController,P=setTimeout(()=>{d.abort(),an(C,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:d.signal}).then(S=>{clearTimeout(P),S.ok?an(C,"TestPingServer: ok",!0,l):an(C,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(P),an(C,"TestPingServer: error",!1,l)})}function an(a,l,C,d,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),d(C)}catch{}}function cp(){this.g=new Kd}function aa(a){this.i=a.Sb||null,this.h=a.ab||!1}f(aa,Lu),aa.prototype.g=function(){return new hi(this.i,this.h)};function hi(a,l){Ke.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(hi,Ke),r=hi.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,us(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=0},r.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;oc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function oc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}r.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?Bs(this):us(this),this.readyState==3&&oc(this)}},r.Oa=function(a){this.g&&(this.response=this.responseText=a,Bs(this))},r.Na=function(a){this.g&&(this.response=a,Bs(this))},r.ga=function(){this.g&&Bs(this)};function Bs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,us(a)}r.setRequestHeader=function(a,l){this.A.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var C=l.next();!C.done;)C=C.value,a.push(C[0]+": "+C[1]),C=l.next();return a.join(`\r
`)};function us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ac(a){let l="";return ii(a,function(C,d){l+=d,l+=":",l+=C,l+=`\r
`}),l}function Ba(a,l,C){e:{for(d in C){var d=!1;break e}d=!0}d||(C=ac(C),typeof a=="string"?C!=null&&ts(C):Ee(a,l,C))}function Te(a){Ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Te,Ke);var lp=/^https?$/i,hp=["POST","PUT"];r=Te.prototype,r.Fa=function(a){this.H=a},r.ea=function(a,l,C,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Uu.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(S){Bc(this,S);return}if(a=C||"",C=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var P in d)C.set(P,d[P]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const S of d.keys())C.set(S,d.get(S));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(C.keys()).find(S=>S.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(hp,l,void 0)>=0)||d||P||C.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,U]of C)this.g.setRequestHeader(S,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){Bc(this,S)}};function Bc(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,uc(a),Ci(a)}function uc(a){a.A||(a.A=!0,Xe(a,"complete"),Xe(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Xe(this,"complete"),Xe(this,"abort"),Ci(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ci(this,!0)),Te.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?cc(this):this.Xa())},r.Xa=function(){cc(this)};function cc(a){if(a.h&&typeof i<"u"){if(a.v&&Bn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Xe(a,"readystatechange"),Bn(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var C;if(!(C=l)){var d;if(d=S===0){let U=String(a.D).match(Zu)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),d=!lp.test(U?U.toLowerCase():"")}C=d}if(C)Xe(a,"complete"),Xe(a,"success");else{a.o=6;try{var P=Bn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",uc(a)}}finally{Ci(a)}}}}function Ci(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const C=a.g;a.g=null,l||Xe(a,"ready");try{C.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Bn(a){return a.g?a.g.readyState:0}r.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),qd(l)}};function lc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Cp(a){const l={};a=(a.g&&Bn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<a.length;d++){if(_(a[d]))continue;var C=Yd(a[d]);const P=C[0];if(C=C[1],typeof C!="string")continue;C=C.trim();const S=l[P]||[];l[P]=S,S.push(C)}Md(l,function(d){return d.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(a,l,C){return C&&C.internalChannelParams&&C.internalChannelParams[a]||l}function hc(a){this.za=0,this.i=[],this.j=new es,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=cs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=cs("baseRetryDelayMs",5e3,a),this.Za=cs("retryDelaySeedMs",1e4,a),this.Ta=cs("forwardChannelMaxRetries",2,a),this.va=cs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Qu(a&&a.concurrentRequestLimit),this.Ba=new cp,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=hc.prototype,r.ka=8,r.I=1,r.connect=function(a,l,C,d){Ze(0),this.W=a,this.H=l||{},C&&d!==void 0&&(this.H.OSID=C,this.H.OAID=d),this.F=this.X,this.J=Dc(this,null,this.W),di(this)};function ua(a){if(Cc(a),a.I==3){var l=a.V++,C=Pt(a.J);if(Ee(C,"SID",a.M),Ee(C,"RID",l),Ee(C,"TYPE","terminate"),ls(a,C),l=new sn(a,a.j,l),l.M=2,l.A=li(Pt(C)),C=!1,o.navigator&&o.navigator.sendBeacon)try{C=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!C&&o.Image&&(new Image().src=l.A,C=!0),C||(l.g=wc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),ci(l)}_c(a)}function fi(a){a.g&&(la(a),a.g.cancel(),a.g=null)}function Cc(a){fi(a),a.v&&(o.clearTimeout(a.v),a.v=null),pi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function di(a){if(!$u(a.h)&&!a.m){a.m=!0;var l=a.Ea;Ge||E(),Ie||(Ge(),Ie=!0),A.add(l,a),a.D=0}}function fp(a,l){return Wu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Zr(c(a.Ea,a,l),Ec(a,a.D)),a.D++,!0)}r.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new sn(this,this.j,a);let S=this.o;if(this.U&&(S?(S=Tu(S),vu(S,this.U)):S=this.U),this.u!==null||this.R||(P.J=S,S=null),this.S)e:{for(var l=0,C=0;C<this.i.length;C++){t:{var d=this.i[C];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(l+=d,l>4096){l=C;break e}if(l===4096||C===this.i.length-1){l=C+1;break e}}l=1e3}else l=1e3;l=dc(this,P,l),C=Pt(this.J),Ee(C,"RID",a),Ee(C,"CVER",22),this.G&&Ee(C,"X-HTTP-Session-Id",this.G),ls(this,C),S&&(this.R?l="headers="+ts(ac(S))+"&"+l:this.u&&Ba(C,this.u,S)),ia(this.h,P),this.Ra&&Ee(C,"TYPE","init"),this.S?(Ee(C,"$req",l),Ee(C,"SID","null"),P.U=!0,ta(P,C,null)):ta(P,C,l),this.I=2}}else this.I==3&&(a?fc(this,a):this.i.length==0||$u(this.h)||fc(this))};function fc(a,l){var C;l?C=l.l:C=a.V++;const d=Pt(a.J);Ee(d,"SID",a.M),Ee(d,"RID",C),Ee(d,"AID",a.K),ls(a,d),a.u&&a.o&&Ba(d,a.u,a.o),C=new sn(a,a.j,C,a.D+1),a.u===null&&(C.J=a.o),l&&(a.i=l.G.concat(a.i)),l=dc(a,C,1e3),C.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ia(a.h,C),ta(C,d,l)}function ls(a,l){a.H&&ii(a.H,function(C,d){Ee(l,d,C)}),a.l&&ii({},function(C,d){Ee(l,d,C)})}function dc(a,l,C){C=Math.min(a.i.length,C);const d=a.l?c(a.l.Ka,a.l,a):null;e:{var P=a.i;let re=-1;for(;;){const xe=["count="+C];re==-1?C>0?(re=P[0].g,xe.push("ofs="+re)):re=0:xe.push("ofs="+re);let de=!0;for(let He=0;He<C;He++){var S=P[He].g;const bt=P[He].map;if(S-=re,S<0)re=Math.max(0,P[He].g-100),de=!1;else try{S="req"+S+"_"||"";try{var U=bt instanceof Map?bt:Object.entries(bt);for(const[Jn,un]of U){let cn=un;B(un)&&(cn=Wo(un)),xe.push(S+Jn+"="+encodeURIComponent(cn))}}catch(Jn){throw xe.push(S+"type="+encodeURIComponent("_badmap")),Jn}}catch{d&&d(bt)}}if(de){U=xe.join("&");break e}}U=void 0}return a=a.i.splice(0,C),l.G=a,U}function pc(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;Ge||E(),Ie||(Ge(),Ie=!0),A.add(l,a),a.A=0}}function ca(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Zr(c(a.Da,a),Ec(a,a.A)),a.A++,!0)}r.Da=function(){if(this.v=null,gc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Zr(c(this.Wa,this),a)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ze(10),fi(this),gc(this))};function la(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function gc(a){a.g=new sn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=Pt(a.na);Ee(l,"RID","rpc"),Ee(l,"SID",a.M),Ee(l,"AID",a.K),Ee(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ee(l,"TO",a.ia),Ee(l,"TYPE","xmlhttp"),ls(a,l),a.u&&a.o&&Ba(l,a.u,a.o),a.O&&(a.g.H=a.O);var C=a.g;a=a.ba,C.M=1,C.A=li(Pt(l)),C.u=null,C.R=!0,qu(C,a)}r.Va=function(){this.C!=null&&(this.C=null,fi(this),ca(this),Ze(19))};function pi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function mc(a,l){var C=null;if(a.g==l){pi(a),la(a),a.g=null;var d=2}else if(sa(a.h,l))C=l.G,Yu(a.h,l),d=1;else return;if(a.I!=0){if(l.o)if(d==1){C=l.u?l.u.length:0,l=Date.now()-l.F;var P=a.D;d=Bi(),Xe(d,new Gu(d,C)),di(a)}else pc(a);else if(P=l.m,P==3||P==0&&l.X>0||!(d==1&&fp(a,l)||d==2&&ca(a)))switch(C&&C.length>0&&(l=a.h,l.i=l.i.concat(C)),P){case 1:Un(a,5);break;case 4:Un(a,10);break;case 3:Un(a,6);break;default:Un(a,2)}}}function Ec(a,l){let C=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(C*=2),C*l}function Un(a,l){if(a.j.info("Error code "+l),l==2){var C=c(a.bb,a),d=a.Ua;const P=!d;d=new on(d||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||rs(d,"https"),li(d),P?Bp(d.toString(),C):up(d.toString(),C)}else Ze(2);a.I=0,a.l&&a.l.pa(l),_c(a),Cc(a)}r.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function _c(a){if(a.I=0,a.ja=[],a.l){const l=Xu(a.h);(l.length!=0||a.i.length!=0)&&(R(a.ja,l),R(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function Dc(a,l,C){var d=C instanceof on?Pt(C):new on(C);if(d.g!="")l&&(d.g=l+"."+d.g),ss(d,d.u);else{var P=o.location;d=P.protocol,l=l?l+"."+P.hostname:P.hostname,P=+P.port;const S=new on(null);d&&rs(S,d),l&&(S.g=l),P&&ss(S,P),C&&(S.h=C),d=S}return C=a.G,l=a.wa,C&&l&&Ee(d,C,l),Ee(d,"VER",a.ka),ls(a,d),d}function wc(a,l,C){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new Te(new aa({ab:C})):new Te(a.ma),l.Fa(a.L),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function yc(){}r=yc.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function gi(){}gi.prototype.g=function(a,l){return new ht(a,l)};function ht(a,l){Ke.call(this),this.g=new hc(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!_(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new hr(this)}f(ht,Ke),ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ht.prototype.close=function(){ua(this.g)},ht.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var C={};C.__data__=a,a=C}else this.v&&(C={},C.__data__=Wo(a),a=C);l.i.push(new ep(l.Ya++,a)),l.I==3&&di(l)},ht.prototype.N=function(){this.g.l=null,delete this.j,ua(this.g),delete this.g,ht.Z.N.call(this)};function Ic(a){Yo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const C in l){a=C;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}f(Ic,Yo);function Tc(){Xo.call(this),this.status=1}f(Tc,Xo);function hr(a){this.g=a}f(hr,yc),hr.prototype.ra=function(){Xe(this.g,"a")},hr.prototype.qa=function(a){Xe(this.g,new Ic(a))},hr.prototype.pa=function(a){Xe(this.g,new Tc)},hr.prototype.oa=function(){Xe(this.g,"b")},gi.prototype.createWebChannel=gi.prototype.g,ht.prototype.send=ht.prototype.o,ht.prototype.open=ht.prototype.m,ht.prototype.close=ht.prototype.close,NC=function(){return new gi},SC=function(){return Bi()},bC=Mn,Ha={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ui.NO_ERROR=0,ui.TIMEOUT=8,ui.HTTP_ERROR=6,xi=ui,Hu.COMPLETE="complete",PC=Hu,ku.EventType=Yr,Yr.OPEN="a",Yr.CLOSE="b",Yr.ERROR="c",Yr.MESSAGE="d",Ke.prototype.listen=Ke.prototype.J,ds=ku,Te.prototype.listenOnce=Te.prototype.K,Te.prototype.getLastError=Te.prototype.Ha,Te.prototype.getLastErrorCode=Te.prototype.ya,Te.prototype.getStatus=Te.prototype.ca,Te.prototype.getResponseJson=Te.prototype.La,Te.prototype.getResponseText=Te.prototype.la,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Fa,RC=Te}).apply(typeof _i<"u"?_i:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var pe,k=(pe=class{},M(pe,"FOLD_CASE",1),M(pe,"LITERAL",2),M(pe,"CLASS_NL",4),M(pe,"DOT_NL",8),M(pe,"ONE_LINE",16),M(pe,"NON_GREEDY",32),M(pe,"PERL_X",64),M(pe,"UNICODE_GROUPS",128),M(pe,"WAS_DOLLAR",256),M(pe,"LOOKBEHIND",512),M(pe,"MATCH_NL",pe.CLASS_NL|pe.DOT_NL),M(pe,"PERL",pe.CLASS_NL|pe.ONE_LINE|pe.PERL_X|pe.UNICODE_GROUPS),M(pe,"POSIX",0),M(pe,"UNANCHORED",0),M(pe,"ANCHOR_START",1),M(pe,"ANCHOR_BOTH",2),pe);const Cr={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Ss=128,Ua=new Int32Array(Ss),Ja=new Int32Array(Ss),Di=65535;for(let r=0;r<Ss;r++)r>=97&&r<=122?Ua[r]=r-32:Ua[r]=r,r>=65&&r<=90?Ja[r]=r+32:Ja[r]=r;var Oa,N=(Oa=class{static toUpperCase(r){if(r<Ss)return Ua[r];const e=String.fromCodePoint(r).toUpperCase(),t=e.codePointAt(0)>Di?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=n.codePointAt(0)>Di?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}static toLowerCase(r){if(r<Ss)return Ja[r];const e=String.fromCodePoint(r).toLowerCase(),t=e.codePointAt(0)>Di?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=n.codePointAt(0)>Di?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}},M(Oa,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),Oa),p=class{constructor(r,e=!1){this.data=r,this.isStride1=e,this.SIZE=e?2:3}getLo(r){return this.data[r*this.SIZE]}getHi(r){return this.data[r*this.SIZE+1]}getStride(r){return this.isStride1?1:this.data[r*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const OC=new Uint8Array(256);for(let r=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";r<64;r++)OC[e.charCodeAt(r)]=r;const FC=r=>{const e=[];let t=0,n=0;for(let s=0;s<r.length;s++){let i=OC[r.charCodeAt(s)];t|=(i&31)<<n,(i&32)===0?(e.push(t),t=0,n=0):n+=5}return e},m=(r,e)=>{const t=FC(r),n=e?t.length/2:t.length/3,s=new Uint32Array(n*3);let i=0,o=0;for(let B=0;B<n;B++)i+=t[o++],s[B*3]=i,i+=t[o++],s[B*3+1]=i,s[B*3+2]=e?1:t[o++];return s},ZE=r=>{const e=FC(r),t=new Map;let n=0;for(let s=0;s<e.length;s+=2){n+=e[s];const i=e[s+1],o=i>>>1^-(i&1);t.set(n,n+o)}return t};var wi=class{constructor(r){this.initializer=r,this.cache=new Map}has(r){return r in this.initializer}get(r){if(this.cache.has(r))return this.cache.get(r);const e=this.initializer[r],t=e?e():null;return this.cache.set(r,t),t}},fn,st=(fn=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=ZE("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new p(m("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},M(fn,"_CASE_ORBIT",null),M(fn,"_Print",null),M(fn,"CATEGORIES",new wi({C:()=>new p(m("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new p(m("AfgDgB",!0)),Cf:()=>new p(m("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new p(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new p(m("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new p(m("gg2B--B",!0)),L:()=>new p(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new p(m("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new p(m("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new p(m("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new p(m("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new p(m("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new p(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new p(m("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new p(m("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new p(m("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new p(m("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new p(m("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new p(m("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new p(m("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new p(m("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new p(m("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new p(m("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new p(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new p(m("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new p(m("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new p(m("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new p(m("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new p(m("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new p(m("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new p(m("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new p(m("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new p(m("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new p(m("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new p(m("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new p(m("ohIA",!0)),Zp:()=>new p(m("phIA",!0)),Zs:()=>new p(m("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new p(m("wBJIFbF",!0)),Alphabetic:()=>new p(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new p(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new p(m("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new p(m("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new p(m("7-8DE",!0)),Emoji_Modifier_Base:()=>new p(m("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new p(m("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new p(m("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new p(m("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new p(m("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new p(m("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new p(m("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new p(m("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new p(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new p(m("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),M(fn,"SCRIPTS",new wi({Adlam:()=>new p(m("go6DrCFJFB",!0)),Ahom:()=>new p(m("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new p(m("ggxCmS",!0)),Arabic:()=>new p(m("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new p(m("xpBlBDxBDCks9BE",!0)),Avestan:()=>new p(m("g4iC1BEG",!0)),Balinese:()=>new p(m("g4GsCCxB",!0)),Bamum:()=>new p(m("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new p(m("w26CdDF",!0)),Batak:()=>new p(m("g+GzBJD",!0)),Bengali:()=>new p(m("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new p(m("g17CYDY",!0)),Bhaiksuki:()=>new p(m("ggnCICsBCNLc",!0)),Bopomofo:()=>new p(m("qXB6wLqBxDf",!0)),Brahmi:()=>new p(m("ggkCtCFjBKA",!0)),Braille:()=>new p(m("ggK-H",!0)),Buginese:()=>new p(m("gwGbDB",!0)),Buhid:()=>new p(m("g6FT",!0)),Canadian_Aboriginal:()=>new p(m("ggF-TxRlC7tgCP",!0)),Carian:()=>new p(m("g1gCwB",!0)),Caucasian_Albanian:()=>new p(m("wphCzBMA",!0)),Chakma:()=>new p(m("gokC0BCR",!0)),Cham:()=>new p(m("gwqB2BKNDJDD",!0)),Cherokee:()=>new p(m("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new p(m("w9jCb",!0)),Common:()=>new p(m("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new p(m("ifNxkKzDGG",!0)),Cuneiform:()=>new p(m("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new p(m("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new p(m("w8rCiD",!0)),Cyrillic:()=>new p(m("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new p(m("gghCvC",!0)),Devanagari:()=>new p(m("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new p(m("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new p(m("ggmC7B",!0)),Duployan:()=>new p(m("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new p(m("ggsC1iBL68D",!0)),Elbasan:()=>new p(m("gohCnB",!0)),Elymaic:()=>new p(m("g-jCW",!0)),Ethiopic:()=>new p(m("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new p(m("gqjClBEcJB",!0)),Georgian:()=>new p(m("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new p(m("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new p(m("w5gCa",!0)),Grantha:()=>new p(m("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new p(m("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new p(m("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new p(m("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new p(m("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new p(m("go4C5B",!0)),Han:()=>new p(m("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new p(m("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new p(m("gojCnBJJ",!0)),Hanunoo:()=>new p(m("g5FU",!0)),Hatran:()=>new p(m("gniCSCBGE",!0)),Hebrew:()=>new p(m("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new p(m("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new p(m("giiCVCI",!0)),Inherited:()=>new p(m("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new p(m("g7iCSGH",!0)),Inscriptional_Parthian:()=>new p(m("g6iCVDH",!0)),Javanese:()=>new p(m("gsqBtCDJFB",!0)),Kaithi:()=>new p(m("gkkCiCLA",!0)),Kannada:()=>new p(m("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new p(m("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new p(m("g4nCQCoBEc",!0)),Kayah_Li:()=>new p(m("goqBtBCA",!0)),Kharoshthi:()=>new p(m("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new p(m("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new p(m("g8F9CDJHJnPf",!0)),Khojki:()=>new p(m("gwkCRCuB",!0)),Khudawadi:()=>new p(m("w1kC6BGJ",!0)),Kirat_Rai:()=>new p(m("gq7C5B",!0)),Lao:()=>new p(m("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new p(m("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new p(m("ggH3BEOEC",!0)),Limbu:()=>new p(m("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new p(m("gwhC2JKVLH",!0)),Linear_B:()=>new p(m("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new p(m("wmpBvBx1eA",!0)),Lycian:()=>new p(m("g0gCc",!0)),Lydian:()=>new p(m("gpiCZGA",!0)),Mahajani:()=>new p(m("wqkCmB",!0)),Makasar:()=>new p(m("g3nCY",!0)),Malayalam:()=>new p(m("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new p(m("giCbDA",!0)),Manichaean:()=>new p(m("g2iCmBFL",!0)),Marchen:()=>new p(m("wjnCfDVCN",!0)),Masaram_Gondi:()=>new p(m("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new p(m("gy7C6C",!0)),Meetei_Mayek:()=>new p(m("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new p(m("gg6DkGDP",!0)),Meroitic_Cursive:()=>new p(m("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new p(m("gsiCf",!0)),Miao:()=>new p(m("g47CqCF4BIQ",!0)),Modi:()=>new p(m("gwlCkCMJ",!0)),Mongolian:()=>new p(m("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new p(m("gy6CeCJFB",!0)),Multani:()=>new p(m("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new p(m("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new p(m("gkiCeJI",!0)),Nag_Mundari:()=>new p(m("wm5DpB",!0)),Nandinagari:()=>new p(m("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new p(m("gsGrBFZHKEB",!0)),Newa:()=>new p(m("gglC7CCE",!0)),Nko:()=>new p(m("g+B6BDC",!0)),Nushu:()=>new p(m("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new p(m("go4DsBENDJFB",!0)),Ogham:()=>new p(m("g0Fc",!0)),Ol_Chiki:()=>new p(m("wiHvB",!0)),Ol_Onal:()=>new p(m("wu5DqBFA",!0)),Old_Hungarian:()=>new p(m("gkjCyBOyBIF",!0)),Old_Italic:()=>new p(m("g4gCjBKC",!0)),Old_North_Arabian:()=>new p(m("g0iCf",!0)),Old_Permic:()=>new p(m("w6gCqB",!0)),Old_Persian:()=>new p(m("g9gCjBFN",!0)),Old_Sogdian:()=>new p(m("g4jCnB",!0)),Old_South_Arabian:()=>new p(m("gziCf",!0)),Old_Turkic:()=>new p(m("ggjCoC",!0)),Old_Uyghur:()=>new p(m("w7jCZ",!0)),Oriya:()=>new p(m("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new p(m("wlhCjBFjB",!0)),Osmanya:()=>new p(m("gkhCdDJ",!0)),Pahawh_Hmong:()=>new p(m("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new p(m("gjiCf",!0)),Pau_Cin_Hau:()=>new p(m("g2mC4B",!0)),Phags_Pa:()=>new p(m("giqB3B",!0)),Phoenician:()=>new p(m("goiCbEA",!0)),Psalter_Pahlavi:()=>new p(m("g8iCRIDNG",!0)),Rejang:()=>new p(m("wpqBjBMA",!0)),Runic:()=>new p(m("g1FqCEK",!0)),Samaritan:()=>new p(m("ggCtBDO",!0)),Saurashtra:()=>new p(m("gkqBlCJL",!0)),Sharada:()=>new p(m("gskC-ChsCH",!0)),Shavian:()=>new p(m("wihCvB",!0)),Siddham:()=>new p(m("gslC1BDlB",!0)),Sidetic:()=>new p(m("gqiCZ",!0)),SignWriting:()=>new p(m("gg2DrUQECO",!0)),Sinhala:()=>new p(m("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new p(m("w5jCpB",!0)),Sora_Sompeng:()=>new p(m("wmkCYIJ",!0)),Soyombo:()=>new p(m("wymCyC",!0)),Sundanese:()=>new p(m("g8G-BhIH",!0)),Sunuwar:()=>new p(m("g+mChBPJ",!0)),Syloti_Nagri:()=>new p(m("ggqBsB",!0)),Syriac:()=>new p(m("g4BNC7BDCxIK",!0)),Tagalog:()=>new p(m("g4FVKA",!0)),Tagbanwa:()=>new p(m("g7FMCCCB",!0)),Tai_Le:()=>new p(m("wqGdDE",!0)),Tai_Tham:()=>new p(m("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new p(m("g0qBiCZE",!0)),Tai_Yo:()=>new p(m("g25DeCVJB",!0)),Takri:()=>new p(m("g0lC5BHJ",!0)),Tamil:()=>new p(m("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new p(m("wz6CuCCJ",!0)),Tangut:()=>new p(m("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new p(m("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new p(m("g8BxB",!0)),Thai:()=>new p(m("hwD5BGb",!0)),Tibetan:()=>new p(m("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new p(m("wpL3BIBPA",!0)),Tirhuta:()=>new p(m("gklCnCJJ",!0)),Todhri:()=>new p(m("guhCzB",!0)),Tolong_Siki:()=>new p(m("wtnCrBFJ",!0)),Toto:()=>new p(m("w04De",!0)),Tulu_Tigalari:()=>new p(m("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new p(m("g8gCdCA",!0)),Unknown:()=>new p(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new p(m("gopBrJ",!0)),Vithkuqi:()=>new p(m("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new p(m("g24D5BGA",!0)),Warang_Citi:()=>new p(m("glmCyCNA",!0)),Yezidi:()=>new p(m("g0jCpBCCDB",!0)),Yi:()=>new p(m("ggoBskBE2B",!0)),Zanabazar_Square:()=>new p(m("gwmCnC",!0))})),M(fn,"FOLD_CATEGORIES",new wi({L:()=>new p(m("laA",!0)),LC:()=>new p(m("laA",!0)),Ll:()=>new p(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new p(m("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new p(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new p(m("5cgBgBlgHAB",!1)),Mn:()=>new p(m("5cgBgBlgHAB",!1)),Emoji:()=>new p(m("8mJA",!0)),Extended_Pictographic:()=>new p(m("8mJA",!0)),Lowercase:()=>new p(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new p(m("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new p(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),M(fn,"FOLD_SCRIPT",new wi({Common:()=>new p(m("8cgBgB",!1)),Greek:()=>new p(m("1FwUwU",!1)),Inherited:()=>new p(m("5cgBgBlgHAB",!1))})),fn),ge,K=(ge=class{static is32(e,t){let n=0,s=e.length;for(;n<s;){const i=n+Math.floor((s-n)/2),o=e.getLo(i),B=e.getHi(i);if(o<=t&&t<=B){const u=e.getStride(i);return(t-o)%u===0}t<o?s=i:n=i+1}return!1}static is(e,t){if(t<=ge.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;const s=e.getLo(n);if(t<s)return!1;const i=e.getStride(n);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&ge.is32(e,t)}static isUpper(e){if(e<=ge.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return ge.is(st.Upper,e)}static isPrint(e){return e<=ge.MAX_LATIN1?e>=32&&e<ge.MAX_ASCII||e>=161&&e!==173:ge.is(st.Print,e)}static simpleFold(e){if(st.CASE_ORBIT.has(e))return st.CASE_ORBIT.get(e);const t=N.toLowerCase(e);return t!==e?t:N.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=ge.MAX_ASCII&&t<=ge.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=ge.simpleFold(e);n!==e;n=ge.simpleFold(n))if(n===t)return!0;return!1}},M(ge,"MAX_RUNE",1114111),M(ge,"MAX_ASCII",127),M(ge,"MAX_LATIN1",255),M(ge,"MAX_BMP",65535),M(ge,"MIN_FOLD",65),M(ge,"MAX_FOLD",125251),M(ge,"MIN_HIGH_SURROGATE",55296),M(ge,"MAX_HIGH_SURROGATE",56319),M(ge,"MIN_LOW_SURROGATE",56320),M(ge,"MAX_LOW_SURROGATE",57343),M(ge,"MIN_SUPPLEMENTARY_CODE_POINT",65536),ge);const RB=256,LC=new Uint8Array(RB);for(let r=0;r<RB;r++)LC[r]=97<=r&&r<=122||65<=r&&r<=90||48<=r&&r<=57||r===95?1:0;let _a=null,Da=null;var De,Q=(De=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return N.CODES.get("0")<=e&&e<=N.CODES.get("9")||N.CODES.get("a")<=e&&e<=N.CODES.get("z")||N.CODES.get("A")<=e&&e<=N.CODES.get("Z")}static unhex(e){return N.CODES.get("0")<=e&&e<=N.CODES.get("9")?e-N.CODES.get("0"):N.CODES.get("a")<=e&&e<=N.CODES.get("f")?e-N.CODES.get("a")+10:N.CODES.get("A")<=e&&e<=N.CODES.get("F")?e-N.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(K.isPrint(e))De.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case N.CODES.get('"'):t+='\\"';break;case N.CODES.get("\\"):t+="\\\\";break;case N.CODES.get("	"):t+="\\t";break;case N.CODES.get(`
`):t+="\\n";break;case N.CODES.get("\r"):t+="\\r";break;case N.CODES.get("\b"):t+="\\b";break;case N.CODES.get("\f"):t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){const t=String(e),n=[];let s=0;for(;s<t.length;){const i=t.codePointAt(s);n.push(i),s+=i>K.MAX_BMP?2:1}return n}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<RB?LC[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=De.EMPTY_BEGIN_TEXT|De.EMPTY_BEGIN_LINE),e===10&&(n|=De.EMPTY_BEGIN_LINE),t<0&&(n|=De.EMPTY_END_TEXT|De.EMPTY_END_LINE),t===10&&(n|=De.EMPTY_END_LINE),De.isWordRune(e)!==De.isWordRune(t)?n|=De.EMPTY_WORD_BOUNDARY:n|=De.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>De.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>K.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return _a||(_a=new TextEncoder),_a.encode(e);{let t=[],n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===K.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===K.MIN_LOW_SURROGATE?(i=K.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){Da||(Da=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return Da.decode(t)}else{let t=[],n=0,s=0;for(;n<e.length;){let i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],B=e[n++],u=e[n++],c=((i&7)<<18|(o&63)<<12|(B&63)<<6|u&63)-K.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode(K.MIN_HIGH_SURROGATE+(c>>10)),t[s++]=String.fromCharCode(K.MIN_LOW_SURROGATE+(c&1023))}else{let o=e[n++],B=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|B&63)}}return t.join("")}}},M(De,"METACHARACTERS","\\.+*?()|[]{}^$"),M(De,"EMPTY_BEGIN_LINE",1),M(De,"EMPTY_END_LINE",2),M(De,"EMPTY_BEGIN_TEXT",4),M(De,"EMPTY_END_TEXT",8),M(De,"EMPTY_WORD_BOUNDARY",16),M(De,"EMPTY_NO_WORD_BOUNDARY",32),M(De,"EMPTY_ALL",-1),De);const kC=(r=[],e=0)=>{const t=Object.create(null);for(let n=0;n<r.length;n++){const s=r[n],i=e+n;t[s]=i,t[i]=s}return Object.freeze(t)};var yn,sr=(yn=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===yn.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===yn.Encoding.UTF_16}},M(yn,"Encoding",kC(["UTF_16","UTF_8"])),yn),el=class extends sr{constructor(r=null){super(),this.bytes=r}getEncoding(){return sr.Encoding.UTF_8}asCharSequence(){return Q.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},e_=class extends sr{constructor(r=null){super(),this.charSequence=r}getEncoding(){return sr.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return Q.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},zn=class{static utf16(r){return new e_(r)}static utf8(r){return Q.isByteArray(r)?new el(r):new el(Q.stringToUtf8ByteArray(r))}},tt=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},t_=class extends tt{constructor(r,e=0,t=r.length){super(),this.bytes=r,this.start=e,this.end=t}hasString(r,e){const t=r.bytes;if(t.length===0)return!0;const n=this.indexOf(this.bytes,t,this.start+e);return n!==-1&&n<=this.end-t.length}hasAnyString(r,e){return r.ac8?r.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(r){if(r+=this.start,r>=this.end)return tt.EOF();const e=this.bytes[r]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&r+1<this.end){const t=this.bytes[r+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&r+2<this.end){const t=this.bytes[r+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[r+2]&255;return(n&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|n&63)<<3|3}else if(e>=240&&e<=244&&r+3<this.end){const t=this.bytes[r+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[r+2]&255;if((n&192)!==128)return e<<3|1;const s=this.bytes[r+3]&255;return(s&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(n&63)<<6|s&63)<<3|4}else return e<<3|1}index(r,e){e+=this.start;const t=this.indexOf(this.bytes,r.prefixUTF8,e);return t<0?t:t-e}context(r){r+=this.start;let e=-1;if(r>this.start&&r<=this.end){let n=r-1;if(e=this.bytes[n--],e>=128){let s=r-4;for(s<this.start&&(s=this.start);n>=s&&(this.bytes[n]&192)===128;)n--;n<this.start&&(n=this.start),e=this.step(n-this.start)>>3}}const t=r<this.end?this.step(r-this.start)>>3:-1;return Q.emptyOpContext(e,t)}indexOf(r,e,t=0){let n=e.length;if(n===0)return t<=this.end?t:-1;const s=e[0];let i=this.end-n;const o=typeof r.indexOf=="function";let B=t;for(;B<=i;){if(o){if(B=r.indexOf(s,B),B===-1||B>i)return-1}else{for(;B<=i&&r[B]!==s;)B++;if(B>i)return-1}let u=!0;for(let c=1;c<n;c++)if(r[B+c]!==e[c]){u=!1;break}if(u)return B;B++}return-1}prefixLength(r){return r.prefixUTF8.length}},n_=class extends tt{constructor(r,e=0,t=r.length){super(),this.charSequence=r,this.start=e,this.end=t}hasString(r,e){const t=this.charSequence.indexOf(r.str,this.start+e);return t!==-1&&t<=this.end-r.str.length}hasAnyString(r,e){return r.ac16?r.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(r){if(r+=this.start,r>=this.end)return tt.EOF();const e=this.charSequence.charCodeAt(r);if(e<K.MIN_HIGH_SURROGATE||e>K.MAX_HIGH_SURROGATE||r+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(r+1);return t>=K.MIN_LOW_SURROGATE&&t<=K.MAX_LOW_SURROGATE?(e-K.MIN_HIGH_SURROGATE)*1024+(t-K.MIN_LOW_SURROGATE)+K.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(r,e){e+=this.start;const t=this.charSequence.indexOf(r.prefix,e);return t<0||t>this.end-r.prefix.length?-1:t-e}context(r){r+=this.start;const e=r>this.start&&r<=this.end?this.charSequence.charCodeAt(r-1):-1,t=r<this.end?this.charSequence.charCodeAt(r):-1;return Q.emptyOpContext(e,t)}prefixLength(r){return r.prefix.length}},_e=class{static fromUTF8(r,e=0,t=r.length){return new t_(r,e,t)}static fromUTF16(r,e=0,t=r.length){return new n_(r,e,t)}},Qs=class extends Error{constructor(r){super(r),this.name="RE2JSException"}},me=class extends Qs{constructor(r,e=null){let t=`error parsing regexp: ${r}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=r,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},r_=class extends Qs{constructor(r){super(r),this.name="RE2JSCompileException"}},rt=class extends Qs{constructor(r){super(r),this.name="RE2JSGroupException"}},s_=class extends Qs{constructor(r){super(r),this.name="RE2JSFlagsException"}},_s=class extends Qs{constructor(r){super(r),this.name="RE2JSInternalException"}},$n,tl=($n=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const s=n.codePointAt(0);return s===N.CODES.get("\\")||s===N.CODES.get("$")?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===N.CODES.get("$")?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.numberOfInstructions=n.numberOfInstructions(),t instanceof sr?this.resetMatcherInput(t):Q.isByteArray(t)?this.resetMatcherInput(zn.utf8(t)):this.resetMatcherInput(zn.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof sr||(Q.isByteArray(e)?e=zn.utf8(e):e=zn.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new rt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new rt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new rt(`group '${e}' not found`);e=s}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new rt("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new rt(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new rt("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!n[0])throw new rt("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,k.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,k.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new rt(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?_e.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):_e.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,k.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?Q.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const s=this.start(),i=this.end();return this.appendPos<s&&(n+=this.substring(this.appendPos,s)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const s=e.length;let i=0;for(;i<s;){const o=e.codePointAt(i);if(o===N.CODES.get("\\")){if(n<i&&(t+=e.substring(n,i)),i++,i>=s)throw new rt("character to be escaped is missing");n=i,i++;continue}if(o===N.CODES.get("$")){if(n<i&&(t+=e.substring(n,i)),i+1>=s)throw new rt("Illegal group reference: group index is missing");const B=e.codePointAt(i+1);if(N.CODES.get("0")<=B&&B<=N.CODES.get("9")){let u=B-N.CODES.get("0"),c=i+2;for(;c<s;c++){const f=e.codePointAt(c);if(f<N.CODES.get("0")||f>N.CODES.get("9")||u*10+f-N.CODES.get("0")>this.patternGroupCount)break;u=u*10+f-N.CODES.get("0")}if(u>this.patternGroupCount)throw new rt(`n > number of groups: ${u}`);const h=this.group(u);h!==null&&(t+=h),i=c,n=i}else if(B===N.CODES.get("{")){let u=i+2;for(;u<s&&e.codePointAt(u)!==N.CODES.get("}");)u++;if(u>=s)throw new rt("named capture group is missing trailing '}'");const c=e.substring(i+2,u),h=this.group(c);h!==null&&(t+=h),i=u+1,n=i}else throw new rt("Illegal group reference");continue}i++}return n<s&&(t+=e.substring(n,s)),t}appendReplacementInternalJs(e){let t="",n=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===N.CODES.get("$")){let o=e.codePointAt(i+1);if(N.CODES.get("$")===o){n<i&&(t+=e.substring(n,i)),t+="$",i++,n=i+1;continue}else if(N.CODES.get("&")===o){n<i&&(t+=e.substring(n,i));const B=this.group(0);B!==null?t+=B:t+="$&",i++,n=i+1;continue}else if(N.CODES.get("`")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(0,this.start(0)),i++,n=i+1;continue}else if(N.CODES.get("'")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,n=i+1;continue}else if(N.CODES.get("1")<=o&&o<=N.CODES.get("9")){let B=o-N.CODES.get("0");for(n<i&&(t+=e.substring(n,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<N.CODES.get("0")||o>N.CODES.get("9")||B*10+o-N.CODES.get("0")>this.patternGroupCount));i++)B=B*10+o-N.CODES.get("0");if(B>this.patternGroupCount){t+=`$${B}`,n=i,i--;continue}const u=this.group(B);u!==null&&(t+=u),n=i,i--;continue}else if(o===N.CODES.get("<")){n<i&&(t+=e.substring(n,i)),i++;let B=i+1;for(;B<e.length&&e.codePointAt(B)!==N.CODES.get(">")&&e.codePointAt(B)!==N.CODES.get(" ");)B++;if(B===e.length||e.codePointAt(B)!==N.CODES.get(">")){t+=e.substring(i-1,B+1),n=B+1,i=B;continue}const u=e.substring(i+1,B);if(Object.prototype.hasOwnProperty.call(this.namedGroups,u)){const c=this.group(u);c!==null&&(t+=c)}else t+=`$<${u}>`;n=B+1,i=B;continue}}return n<s&&(t+=e.substring(n,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let s="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let B=null;if(i){if(this.groupCount()>=$n.MAX_REPLACER_ARGS)throw new rt("Too many capture groups to safely invoke replacer function");B=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,o,B):this.appendReplacement(e,n),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t,n){let s="";const i=this.start(),o=this.end();this.appendPos<i&&(s+=this.substring(this.appendPos,i)),this.appendPos=o;const B=this.buildReplacerArgs(i,t,n);return s+=String(e(...B)),s}buildReplacerArgs(e,t,n){const s=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const B=this.start(o);B<0?s.push(void 0):s.push(this.substring(B,this.end(o)))}if(s.push(e),s.push(n),t){const o=this.getNamedGroups();for(const B in o)o[B]===null&&(o[B]=void 0);s.push(o)}return s}},M($n,"MAX_REPLACER_ARGS",65535),$n),Be,O=(Be=class{static isRuneOp(e){return Be.RUNE<=e&&e<=Be.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=Q.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&k.FOLD_CASE)!==0?K.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&k.FOLD_CASE)!==0?K.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case Be.ALT:return`alt -> ${this.out}, ${this.arg}`;case Be.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case Be.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case Be.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case Be.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case Be.FAIL:return"fail";case Be.NOP:return`nop -> ${this.out}`;case Be.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case Be.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case Be.RUNE:return this.runes===null?"rune <null>":["rune ",Be.escapeRunes(this.runes),(this.arg&k.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case Be.RUNE1:return`rune1 ${Be.escapeRunes(this.runes)} -> ${this.out}`;case Be.RUNE_ANY:return`any -> ${this.out}`;case Be.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},M(Be,"ALT",1),M(Be,"ALT_MATCH",2),M(Be,"CAPTURE",3),M(Be,"EMPTY_WIDTH",4),M(Be,"FAIL",5),M(Be,"MATCH",6),M(Be,"NOP",7),M(Be,"RUNE",8),M(Be,"RUNE1",9),M(Be,"RUNE_ANY",10),M(Be,"RUNE_ANY_NOT_NL",11),M(Be,"LB_WRITE",12),M(Be,"LB_CHECK",13),Be),nl=class{constructor(r){this.sparse=new Int32Array(r),this.densePcs=new Int32Array(r),this.denseCaps=null,this.size=0,this.ncap=0}init(r){this.ncap=r;const e=this.densePcs.length*r;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(r){const e=this.sparse[r];return e<this.size&&this.densePcs[e]===r}isEmpty(){return this.size===0}add(r){const e=this.size++;return this.sparse[r]=e,this.densePcs[e]=r,e}clear(){this.size=0}toString(){let r="{";for(let e=0;e<this.size;e++)e!==0&&(r+=", "),r+=this.densePcs[e];return r+="}",r}},i_=class ja{static fromRE2(e){const t=new ja;return t.prog=e.prog,t.re2=e,t.q0=new nl(t.prog.numInst()),t.q1=new nl(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return ja.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?Q.emptyInts():Q.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n){const s=this.re2.cond;if(s===Q.EMPTY_ALL||(n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),h=c>>3,f=c&7,g=-1,T=0;c!==tt.EOF()&&(c=e.step(i+f),g=c>>3,T=c&7);let R;for(i===0?R=Q.emptyOpContext(-1,h):R=e.context(i);;){if(B.isEmpty()){if((s&Q.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&g!==this.re2.prefixRune&&e.canCheckPrefix()){const z=e.index(this.re2,i);if(z<0)break;i+=z,c=e.step(i),h=c>>3,f=c&7,c=e.step(i+f),g=c>>3,T=c&7,R=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let z=0;z<this.prog.lbStarts.length;z++)this.add(B,this.prog.lbStarts[z],i,this.matchcap,0,R);!this.matched&&(i===0||n===k.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(B,this.prog.start,i,this.matchcap,0,R));const x=i+f;if(R=e.context(x),this.step(B,u,i,x,h,R,n,i===e.endPos()),f===0||this.ncap===0&&this.matched)break;i+=f,h=g,f=T,h!==-1&&(c=e.step(i+f),g=c>>3,T=c&7);const J=B;B=u,u=J}return u.clear(),this.matched}matchSet(e,t,n){const s=this.re2.cond;if(s===Q.EMPTY_ALL)return[];if((n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),h=c>>3,f=c&7,g=-1,T=0;c!==tt.EOF()&&(c=e.step(i+f),g=c>>3,T=c&7);let R=i===0?Q.emptyOpContext(-1,h):e.context(i);const x=new Set;for(;!(B.isEmpty()&&((s&Q.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let se=0;se<this.prog.lbStarts.length;se++)this.add(B,this.prog.lbStarts[se],i,this.matchcap,0,R);(i===0||n===k.UNANCHORED)&&i>=o&&this.add(B,this.prog.start,i,this.matchcap,0,R);const J=i+f;R=e.context(J);for(let se=0;se<B.size;se++){const ae=B.densePcs[se],ve=this.prog.inst[ae],Ge=se*this.ncap;let Ie=!1;switch(ve.op){case O.MATCH:if(n===k.ANCHOR_BOTH&&i!==e.endPos())break;x.add(ve.arg);break;case O.RUNE:Ie=ve.matchRune(h);break;case O.RUNE1:Ie=h===ve.runes[0];break;case O.RUNE_ANY:Ie=!0;break;case O.RUNE_ANY_NOT_NL:Ie=h!==10;break;default:continue}Ie&&this.add(u,ve.out,J,B.denseCaps,Ge,R)}if(B.clear(),f===0)break;i+=f,h=g,f=T,h!==-1&&(c=e.step(i+f),g=c>>3,T=c&7);const z=B;B=u,u=z}return u.clear(),Array.from(x).sort((J,z)=>J-z)}step(e,t,n,s,i,o,B,u){const c=this.re2.longest;for(let h=0;h<e.size;h++){const f=e.densePcs[h],g=h*this.ncap;if(c&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[g])continue;const T=this.prog.inst[f];let R=!1;switch(T.op){case O.MATCH:if(B===k.ANCHOR_BOTH&&!u)break;if(this.ncap>0&&(!c||!this.matched||this.matchcap[1]<n)){e.denseCaps[g+1]=n;for(let x=0;x<this.ncap;x++)this.matchcap[x]=e.denseCaps[g+x]}c||(e.size=0),this.matched=!0;break;case O.RUNE:R=T.matchRune(i);break;case O.RUNE1:R=i===T.runes[0];break;case O.RUNE_ANY:R=!0;break;case O.RUNE_ANY_NOT_NL:R=i!==10;break;default:continue}R&&this.add(t,T.out,s,e.denseCaps,g,o)}e.clear()}add(e,t,n,s,i,o){for(;;){if(t===0||e.contains(t))return;const B=e.add(t),u=this.prog.inst[t];switch(u.op){case O.FAIL:return;case O.ALT:case O.ALT_MATCH:this.add(e,u.out,n,s,i,o),t=u.arg;continue;case O.EMPTY_WIDTH:if((u.arg&~o)===0){t=u.out;continue}return;case O.NOP:t=u.out;continue;case O.CAPTURE:if(u.arg<this.ncap){const c=s[i+u.arg];s[i+u.arg]=n,this.add(e,u.out,n,s,i,o),s[i+u.arg]=c;return}else{t=u.out;continue}case O.LB_WRITE:this.lbTable[Math.abs(u.arg)]=n,t=u.out;continue;case O.LB_CHECK:if(u.arg>0){if(this.lbTable[u.arg]===n){t=u.out;continue}}else if(this.lbTable[-u.arg]!==n){t=u.out;continue}return;case O.MATCH:case O.RUNE:case O.RUNE1:case O.RUNE_ANY:case O.RUNE_ANY_NOT_NL:if(this.ncap>0){const c=B*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[c+h]=s[i+h]}return;default:throw new _s("unhandled")}}}};const rl=r=>{let e=-2128831035;for(let t=0;t<r.length;t++)e^=r[t],e=Math.imul(e,16777619);return e},o_=(r,e)=>{if(r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0};var a_=class{constructor(r,e,t=[]){this.nfaStates=r,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(K.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(K.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},qt,B_=(qt=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/qt.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,n=[...e];let s=!1;const i=[];for(;n.length>0;){const B=n.pop();if(t.has(B))continue;t.add(B);const u=this.prog.getInst(B);switch(u.op){case O.MATCH:s=!0,i.includes(u.arg)||i.push(u.arg);break;case O.ALT:case O.ALT_MATCH:n.push(u.out),n.push(u.arg);break;case O.NOP:case O.CAPTURE:n.push(u.out);break;case O.EMPTY_WIDTH:case O.LB_WRITE:case O.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((B,u)=>B-u),{pcs:o,isMatch:s,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const n=t.pcs,s=rl(n);let i=this.stateCache.get(s);if(i)for(let B=0;B<i.length;B++){const u=i[B];if(o_(u.nfaStates,n))return u.lastSeen=++this.clock,u}else i=[],this.stateCache.set(s,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=qt.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(s),i||(i=[],this.stateCache.set(s,i))}const o=new a_(n,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let B=0;B<o.length;B++)e.push(o[B]);e.sort((o,B)=>o.lastSeen-B.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),n=e.length-t,s=e.slice(n),i=new Set(s);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<s.length;o++){const B=s[o];B.nextLatin1.fill(null),B.nextLatin1Anchored.fill(null),B.transKeys.length=0,B.transVals.length=0;const u=rl(B.nfaStates);let c=this.stateCache.get(u);c||(c=[],this.stateCache.set(u,c)),c.push(B),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,n){if(t<=K.MAX_LATIN1)if(n===k.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(n===k.UNANCHORED?0:K.MAX_RUNE+1),B=e.transKeys,u=B.length;for(let c=0;c<u;c++)if(B[c]===o)return e.transVals[c]}const s=[];for(let o=0;o<e.nfaStates.length;o++){const B=e.nfaStates[o],u=this.prog.getInst(B);O.isRuneOp(u.op)&&u.matchRune(t)&&s.push(u.out)}n===k.UNANCHORED&&s.push(this.prog.start);const i=this.getState(s);if(t<=K.MAX_LATIN1)n===k.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(n===k.UNANCHORED?0:K.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,n){if((n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;if(i.isMatch)if(n===k.ANCHOR_BOTH){if(t===s)return!0}else return!0;let o=t;for(;o<s;){const B=e.step(o),u=B>>3,c=B&7;if(c===0)break;if(i=n===k.UNANCHORED&&u<=K.MAX_LATIN1&&i.nextLatin1[u]||this.step(i,u,n),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(n===k.ANCHOR_BOTH){if(o+c===s)return!0}else return!0;if(i.nfaStates.length===0&&n!==k.UNANCHORED)return!1;o+=c}return!1}matchSet(e,t,n){if((n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;const o=new Set,B=(c,h)=>{c.isMatch&&(n===k.ANCHOR_BOTH?h===s&&c.matchIDs.forEach(f=>o.add(f)):c.matchIDs.forEach(f=>o.add(f)))};B(i,t);let u=t;for(;u<s;){const c=e.step(u),h=c>>3,f=c&7;if(f===0)break;if(i=n===k.UNANCHORED&&h<=K.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,n),i===null)return null;if(i.lastSeen=++this.clock,u+=f,B(i,u),i.nfaStates.length===0&&n!==k.UNANCHORED)break}return Array.from(o).sort((c,h)=>c-h)}},M(qt,"MAX_CACHE_CLEARS",5),M(qt,"STATE_MEMORY_ESTIMATE",838),qt);const u_=32,c_=500,wa=256,l_=256*1024;var h_=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(wa),this.jobArg=new Uint8Array(wa),this.jobPos=new Int32Array(wa),this.jobLen=0,this.visited=new Uint32Array(0)}reset(r,e,t){this.end=e,this.jobLen=0,this.ncap=t;const n=r.numInst()*(e+1)+u_-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(r,e){const t=r*(this.end+1)+e,n=t>>>5,s=1<<(t&31);return(this.visited[n]&s)!==0?!1:(this.visited[n]|=s,!0)}push(r,e,t,n){if(r.prog.getInst(e).op!==O.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(s);o.set(this.jobArg),this.jobArg=o;const B=new Int32Array(s);B.set(this.jobPos),this.jobPos=B}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(r,e,t,n,s){const i=r.longest;for(this.push(r,t,n,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],B=this.jobArg[this.jobLen]===1,u=this.jobPos[this.jobLen],c=!0;for(;!(!c&&!this.shouldVisit(o,u));){c=!1;const h=r.prog.getInst(o);switch(h.op){case O.FAIL:throw new _s("unexpected InstFail");case O.ALT:if(B){B=!1,o=h.arg;continue}else{this.push(r,o,u,!0),o=h.out;continue}case O.ALT_MATCH:{const f=r.prog.getInst(h.out);if(O.isRuneOp(f.op)){this.push(r,h.arg,u,!1),o=h.arg,u=this.end;continue}this.push(r,h.out,this.end,!1),o=h.out;continue}case O.RUNE:{const f=e.step(u);if(f===tt.EOF()||!h.matchRune(f>>3))break;u+=f&7,o=h.out;continue}case O.RUNE1:{const f=e.step(u);if(f===tt.EOF()||f>>3!==h.runes[0])break;u+=f&7,o=h.out;continue}case O.RUNE_ANY_NOT_NL:{const f=e.step(u);if(f===tt.EOF()||f>>3===10)break;u+=f&7,o=h.out;continue}case O.RUNE_ANY:{const f=e.step(u);if(f===tt.EOF())break;u+=f&7,o=h.out;continue}case O.CAPTURE:if(B){this.cap[h.arg]=u;break}else{h.arg<this.ncap&&(this.push(r,o,this.cap[h.arg],!0),this.cap[h.arg]=u),o=h.out;continue}case O.EMPTY_WIDTH:{const f=e.context(u);if((h.arg&~f)!==0)break;o=h.out;continue}case O.NOP:o=h.out;continue;case O.MATCH:{if(s===k.ANCHOR_BOTH&&u!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=u);const f=this.matchcap[1];if((f===-1||i&&u>0&&u>f)&&this.matchcap.set(this.cap),!i||u===this.end)return!0;break}case O.LB_WRITE:case O.LB_CHECK:throw new _s("Backtracker cannot evaluate Lookbehind instructions");default:throw new _s("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const yi=[];var Ii=class xC{static shouldBacktrack(e){return e.numInst()<=c_}static maxBitStateLen(e){return xC.shouldBacktrack(e)?Math.floor(l_/e.numInst()):0}static execute(e,t,n,s,i){const o=e.cond;if(o===Q.EMPTY_ALL||(s===k.ANCHOR_START||s===k.ANCHOR_BOTH)&&n!==0||(o&Q.EMPTY_BEGIN_TEXT)!==0&&n!==0)return null;const B=yi.length>0?yi.pop():new h_,u=t.endPos();B.reset(e.prog,u,i);let c=!1;if((o&Q.EMPTY_BEGIN_TEXT)!==0||s===k.ANCHOR_START||s===k.ANCHOR_BOTH)B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,s)&&(c=!0);else{let f=-1;for(;n<=u&&f!==0;n+=f){if(e.prefix.length>0){const T=t.index(e,n);if(T<0)break;n+=T}if(B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,s)){c=!0;break}const g=t.step(n);f=g===tt.EOF()?0:g&7}}if(!c)return yi.push(B),null;const h=i===0?[]:Q.toArray(B.matchcap.subarray(0,i));return yi.push(B),h}},sl=class{constructor(r){this.sparse=new Uint32Array(r),this.dense=new Uint32Array(r),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(r){return r<this.sparse.length&&this.sparse[r]<this.size&&this.dense[this.sparse[r]]===r}insert(r){this.contains(r)||this.insertNew(r)}insertNew(r){r>=this.sparse.length||(this.sparse[r]=this.size,this.dense[this.size]=r,this.size++)}};const C_=(r,e,t,n)=>{const s=r.length,i=e.length;let o=0,B=0;const u=[],c=[];let h=!0,f=-1;const g=T=>{const R=T?r:e,x=T?o:B,J=T?t:n;return f>0&&R[x]<=u[f]?!1:(u.push(R[x],R[x+1]),T?o+=2:B+=2,f+=2,c.push(J),!0)};for(;o<s||B<i;)if(B>=i?h=g(!0):o>=s||e[B]<r[o]?h=g(!1):h=g(!0),!h)return null;return{merged:u,next:c}};var f_=class{constructor(r){this.start=r.start,this.numCap=r.numCap,this.inst=new Array(r.inst.length);for(let e=0;e<r.inst.length;e++){const t=r.inst[e],n=new O(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?t.runes.slice():[],n.next=null,this.inst[e]=n}}};const d_=r=>{const e=new f_(r);for(let t=0;t<e.inst.length;t++){const n=e.inst[t];if(n.op!==O.ALT&&n.op!==O.ALT_MATCH)continue;let s="out",i="arg",o=e.inst[n[i]];if(o.op!==O.ALT&&o.op!==O.ALT_MATCH&&(s="arg",i="out",o=e.inst[n[i]],o.op!==O.ALT&&o.op!==O.ALT_MATCH))continue;const B=e.inst[n[s]];if(B.op===O.ALT||B.op===O.ALT_MATCH)continue;let u="out",c="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,u="arg",c="out"),h&&(o[u]=n[s]),n[s]===o[u]&&(n[i]=o[c])}return e},p_=r=>{if(r.inst.length>=1e3)return null;const e=new sl(r.inst.length),t=new sl(r.inst.length),n=new Array(r.inst.length),s=new Array(r.inst.length).fill(!1),i=o=>{let B=!0;const u=r.inst[o];if(t.contains(o))return!0;switch(t.insert(o),u.op){case O.ALT:case O.ALT_MATCH:{B=i(u.out)&&i(u.arg);let c=s[u.out],h=s[u.arg];if(c&&h)return!1;if(h){const R=u.out;u.out=u.arg,u.arg=R;const x=c;c=h,h=x}c&&(s[o]=!0,u.op=O.ALT_MATCH);const f=n[u.out]||[],g=n[u.arg]||[],T=C_(f,g,u.out,u.arg);if(!T)return!1;n[o]=T.merged,u.next=new Uint32Array(T.next);break}case O.CAPTURE:case O.EMPTY_WIDTH:case O.NOP:B=i(u.out),s[o]=s[u.out],n[o]=n[u.out]?n[u.out].slice():[],u.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(u.out);break;case O.MATCH:case O.FAIL:s[o]=u.op===O.MATCH;break;case O.RUNE:{if(s[o]=!1,u.next&&u.next.length>0)break;if(e.insert(u.out),!u.runes||u.runes.length===0){n[o]=[],u.next=new Uint32Array([u.out]);break}let c=[];if(u.runes.length===1&&(u.arg&k.FOLD_CASE)!==0){const h=u.runes[0];c.push(h,h);for(let f=K.simpleFold(h);f!==h;f=K.simpleFold(f))c.push(f,f);c.sort((f,g)=>f-g)}else for(let h=0;h<u.runes.length;h++)c.push(u.runes[h]);n[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=O.RUNE;break}case O.RUNE1:{if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out);let c=[];if((u.arg&k.FOLD_CASE)!==0){const h=u.runes[0];c.push(h,h);for(let f=K.simpleFold(h);f!==h;f=K.simpleFold(f))c.push(f,f);c.sort((f,g)=>f-g)}else c.push(u.runes[0],u.runes[0]);n[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=O.RUNE;break}case O.RUNE_ANY:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),n[o]=[0,K.MAX_RUNE],u.next=new Uint32Array([u.out]);break;case O.RUNE_ANY_NOT_NL:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),n[o]=[0,9,11,K.MAX_RUNE],u.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(u.out);break}return B};for(e.clear(),e.insert(r.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<r.inst.length;o++)n[o]&&(r.inst[o].runes=n[o]);return r},g_=(r,e)=>{for(let t=0;t<e.inst.length;t++){const n=e.inst[t];switch(n.op){case O.ALT:case O.ALT_MATCH:case O.RUNE:break;case O.CAPTURE:case O.EMPTY_WIDTH:case O.NOP:case O.MATCH:case O.FAIL:r.inst[t].next=null;break;case O.RUNE1:case O.RUNE_ANY:case O.RUNE_ANY_NOT_NL:r.inst[t].next=null,r.inst[t].op=n.op,r.inst[t].runes=n.runes?n.runes.slice():[];break}}};var il=class VC{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==O.EMPTY_WIDTH||(t.arg&Q.EMPTY_BEGIN_TEXT)===0)return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===O.ALT||e.inst[i].op===O.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],B=e.inst[o.out].op;switch(o.op){case O.ALT:case O.ALT_MATCH:if(B===O.MATCH||e.inst[o.arg].op===O.MATCH)return null;break;case O.EMPTY_WIDTH:if(B===O.MATCH){if((o.arg&Q.EMPTY_END_TEXT)===Q.EMPTY_END_TEXT)continue;return null}break;default:if(B===O.MATCH&&n)return null;break}}let s=d_(e);return s=p_(s),s!==null&&g_(s,e),s}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===O.ALT_MATCH?e.out:0}static execute(e,t,n,s,i){const o=e.onepass;if(!o)return null;const B=new Int32Array(i).fill(-1);let u=!1,c=t.step(n),h=c>>3,f=c&7,g=tt.EOF(),T=-1,R=0;c!==tt.EOF()&&(g=t.step(n+f),g!==tt.EOF()&&(T=g>>3,R=g&7));let x=n===0?Q.emptyOpContext(-1,h):t.context(n),J=o.start,z;for(;;){switch(z=o.inst[J],J=z.out,z.op){case O.MATCH:return s===k.ANCHOR_BOTH&&n!==t.endPos()?null:(u=!0,B.length>0&&(B[0]=0,B[1]=n),i===0?[]:Q.toArray(B));case O.RUNE:if(!z.matchRune(h))return null;break;case O.RUNE1:if(h!==z.runes[0])return null;break;case O.RUNE_ANY:break;case O.RUNE_ANY_NOT_NL:if(h===10)return null;break;case O.ALT:case O.ALT_MATCH:J=VC.next(z,h);continue;case O.FAIL:return null;case O.NOP:continue;case O.EMPTY_WIDTH:if((z.arg&~x)!==0)return null;continue;case O.CAPTURE:z.arg<B.length&&(B[z.arg]=n);continue;default:throw new _s("bad inst")}if(f===0)break;x=Q.emptyOpContext(h,T),n+=f,h=T,f=R,h!==-1&&(g=t.step(n+f),g!==tt.EOF()?(T=g>>3,R=g&7):(T=-1,R=0))}return u?i===0?[]:Q.toArray(B):null}},$,y=($=class{static isPseudoOp(e){return e>=$.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===N.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new $(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=$.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=$.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case $.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case $.Op.EMPTY_MATCH:e+="(?:)";break;case $.Op.STAR:case $.Op.PLUS:case $.Op.QUEST:case $.Op.REPEAT:{const t=this.subs[0];switch(t.op>$.Op.CAPTURE||t.op===$.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case $.Op.STAR:e+="*";break;case $.Op.PLUS:e+="+";break;case $.Op.QUEST:e+="?";break;case $.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}(this.flags&k.NON_GREEDY)!==0&&(e+="?");break}case $.Op.CONCAT:for(let t of this.subs)t.op===$.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case $.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case $.Op.LITERAL:(this.flags&k.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=Q.escapeRune(t);(this.flags&k.FOLD_CASE)!==0&&(e+=")");break;case $.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case $.Op.ANY_CHAR:e+="(?s:.)";break;case $.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case $.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case $.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==$.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case $.Op.BEGIN_TEXT:e+="\\A";break;case $.Op.END_TEXT:(this.flags&k.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case $.Op.BEGIN_LINE:e+="^";break;case $.Op.END_LINE:e+="$";break;case $.Op.WORD_BOUNDARY:e+="\\b";break;case $.Op.NO_WORD_BOUNDARY:e+="\\B";break;case $.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===K.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const n=this.runes[t]+1,s=this.runes[t+1]-1;e+=$.quoteIfHyphen(n),e+=Q.escapeRune(n),n!==s&&(e+="-",e+=$.quoteIfHyphen(s),e+=Q.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const n=this.runes[t],s=this.runes[t+1];e+=$.quoteIfHyphen(n),e+=Q.escapeRune(n),n!==s&&(e+="-",e+=$.quoteIfHyphen(s),e+=Q.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===$.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof $)||this.op!==e.op)return!1;switch(this.op){case $.Op.END_TEXT:if((this.flags&k.WAS_DOLLAR)!==(e.flags&k.WAS_DOLLAR))return!1;break;case $.Op.LITERAL:case $.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case $.Op.ALTERNATE:case $.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case $.Op.STAR:case $.Op.PLUS:case $.Op.QUEST:if((this.flags&k.NON_GREEDY)!==(e.flags&k.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case $.Op.REPEAT:if((this.flags&k.NON_GREEDY)!==(e.flags&k.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case $.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case $.Op.PLB:case $.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},M($,"Op",kC(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),$),ol=class{constructor(r){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of r){let n=0;for(let s=0;s<t.length;s++){const i=t[s];i in this.next[n]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[n][i]=this.next.length-1),n=this.next[n][i]}this.match[n]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const n=this.next[0][t];this.fail[n]=0,e.push(n)}for(;e.length>0;){const t=e.shift();for(const n in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],n)){const s=this.next[t][n];let i=this.fail[t];for(;i!==0&&!(n in this.next[i]);)i=this.fail[i];n in this.next[i]?this.fail[s]=this.next[i][n]:this.fail[s]=0,this.match[s]=this.match[s]||this.match[this.fail[s]],e.push(s)}}}searchUTF16(r,e,t){let n=0;for(let s=e;s<t;s++){const i=r.charCodeAt(s);for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}searchUTF8(r,e,t){let n=0;for(let s=e;s<t;s++){const i=r[s];for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}},Lt,Ce=(Lt=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case Lt.Type.NONE:return!0;case Lt.Type.EXACT:return e.hasString(this,t);case Lt.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case Lt.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},M(Lt,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),Lt),m_=class jt{static build(e){const t=jt.fromRegexp(e);return jt.simplify(t)}static fromRegexp(e){if(!e)return new Ce(Ce.Type.NONE);switch(e.op){case y.Op.PLB:case y.Op.NLB:case y.Op.NO_MATCH:case y.Op.EMPTY_MATCH:case y.Op.BEGIN_LINE:case y.Op.END_LINE:case y.Op.BEGIN_TEXT:case y.Op.END_TEXT:case y.Op.WORD_BOUNDARY:case y.Op.NO_WORD_BOUNDARY:case y.Op.CHAR_CLASS:case y.Op.ANY_CHAR_NOT_NL:case y.Op.ANY_CHAR:return new Ce(Ce.Type.NONE);case y.Op.LITERAL:{if(e.runes.length===0||(e.flags&k.FOLD_CASE)!==0)return new Ce(Ce.Type.NONE);const t=new Ce(Ce.Type.EXACT);let n="";for(let s=0;s<e.runes.length;s++)n+=String.fromCodePoint(e.runes[s]);return t.str=n,t.bytes=Q.stringToUtf8ByteArray(t.str),t}case y.Op.CAPTURE:case y.Op.PLUS:return jt.fromRegexp(e.subs[0]);case y.Op.REPEAT:return e.min>=1?jt.fromRegexp(e.subs[0]):new Ce(Ce.Type.NONE);case y.Op.CONCAT:{const t=new Ce(Ce.Type.AND);for(const n of e.subs)t.subs.push(jt.fromRegexp(n));return t}case y.Op.ALTERNATE:{const t=new Ce(Ce.Type.OR);for(const n of e.subs)t.subs.push(jt.fromRegexp(n));return t}default:return new Ce(Ce.Type.NONE)}}static simplify(e){if(e.type===Ce.Type.EXACT||e.type===Ce.Type.NONE)return e;if(e.type===Ce.Type.AND){const t=[];for(const n of e.subs){const s=jt.simplify(n);if(s.type!==Ce.Type.NONE)if(s.type===Ce.Type.AND)for(let i=0;i<s.subs.length;i++)t.push(s.subs[i]);else t.push(s)}return t.length===0?new Ce(Ce.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===Ce.Type.OR){const t=[];for(const o of e.subs){const B=jt.simplify(o);if(B.type===Ce.Type.NONE)return new Ce(Ce.Type.NONE);if(B.type===Ce.Type.OR)for(let u=0;u<B.subs.length;u++)t.push(B.subs[u]);else t.push(B)}if(t.length===0)return new Ce(Ce.Type.NONE);if(t.length===1)return t[0];const n=new Set,s=[];for(const o of t)o.type===Ce.Type.EXACT?n.has(o.str)||(n.add(o.str),s.push(o)):s.push(o);e.subs=s;let i=!0;for(const o of s)if(o.type!==Ce.Type.EXACT){i=!1;break}return i&&s.length>1&&(e.ac16=new ol(s.map(o=>{const B=[];for(let u=0;u<o.str.length;u++)B.push(o.str.charCodeAt(u));return B})),e.ac8=new ol(s.map(o=>o.bytes))),e}return e}},Et=class{constructor(r=0,e=0){this.head=r,this.tail=e}},E_=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(r){return this.inst[r]}numInst(){return this.inst.length}addInst(r){this.inst.push(new O(r))}skipNop(r){let e=this.inst[r];for(;e.op===O.NOP||e.op===O.CAPTURE;)e=this.inst[r],r=e.out;return e}prefix(){let r="",e=this.skipNop(this.start);if(!O.isRuneOp(e.op)||e.runes.length!==1)return[e.op===O.MATCH,r];for(;O.isRuneOp(e.op)&&e.runes.length===1&&(e.arg&k.FOLD_CASE)===0;)r+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===O.MATCH,r]}startCond(){let r=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case O.EMPTY_WIDTH:r|=t.arg;break;case O.FAIL:return-1;case O.CAPTURE:case O.NOP:break;default:break e}e=t.out}return r}patch(r,e){let t=r.head;for(;t!==0;){const n=this.inst[t>>1];(t&1)===0?(t=n.out,n.out=e):(t=n.arg,n.arg=e)}}append(r,e){if(r.head===0)return e;if(e.head===0)return r;const t=this.inst[r.tail>>1];return(r.tail&1)===0?t.out=e.head:t.arg=e.head,new Et(r.head,e.tail)}toString(){let r="";for(let e=0;e<this.inst.length;e++){const t=r.length;r+=e,e===this.start&&(r+="*"),r+="        ".substring(r.length-t),r+=this.inst[e],r+=`
`}return r}},Ti=class{constructor(r=0,e=new Et,t=!1){this.i=r,this.out=e,this.nullable=t}},__=class fr{static ANY_RUNE_NOT_NL(){return[0,N.CODES.get(`
`)-1,N.CODES.get(`
`)+1,K.MAX_RUNE]}static ANY_RUNE(){return[0,K.MAX_RUNE]}static compileRegexp(e){const t=new fr,n=t.compile(e);return t.prog.patch(n.out,t.newInst(O.MATCH).i),t.prog.start=n.i,t.prog}static compileSet(e){const t=new fr;if(e.length===0)return t.prog.start=t.newInst(O.FAIL).i,t.prog;let n=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),B=t.newInst(O.MATCH);t.prog.getInst(B.i).arg=i,t.prog.patch(o.out,B.i),n.push(o.i)}let s=n[0];for(let i=1;i<n.length;i++){const o=t.newInst(O.ALT),B=t.prog.getInst(o.i);B.out=s,B.arg=n[i],s=o.i}return t.prog.start=s,t.prog}constructor(){this.prog=new E_,this.newInst(O.FAIL)}newInst(e){return this.prog.addInst(e),new Ti(this.prog.numInst()-1,new Et,!0)}nop(){const e=this.newInst(O.NOP);return e.out=new Et(e.i<<1,e.i<<1),e}fail(){return new Ti}cap(e){const t=this.newInst(O.CAPTURE);return t.out=new Et(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Ti(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const n=this.newInst(O.ALT),s=this.prog.getInst(n.i);return s.out=e.i,s.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(O.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new Et(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new Et(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){const n=this.newInst(O.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new Et(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new Et(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Ti(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(O.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Et(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(O.RUNE);n.nullable=!1;const s=this.prog.getInst(n.i);return s.runes=e,t&=k.FOLD_CASE,(e.length!==1||K.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,n.out=new Et(n.i<<1,n.i<<1),(t&k.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?s.op=O.RUNE1:e.length===2&&e[0]===0&&e[1]===K.MAX_RUNE?s.op=O.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===N.CODES.get(`
`)-1&&e[2]===N.CODES.get(`
`)+1&&e[3]===K.MAX_RUNE&&(s.op=O.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=this.newInst(O.LB_WRITE);this.prog.getInst(n.i).arg=t;const s=this.rune(fr.ANY_RUNE(),0),i=this.star(s,!0),o=this.cat(i,e);this.prog.patch(o.out,n.i);const B=this.newInst(O.LB_CHECK);return this.prog.getInst(B.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),B.out=new Et(B.i<<1,B.i<<1),B}compile(e){switch(e.op){case y.Op.NO_MATCH:return this.fail();case y.Op.EMPTY_MATCH:return this.nop();case y.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let n of e.runes){const s=this.rune([n],e.flags);t=t===null?s:this.cat(t,s)}return t}case y.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case y.Op.ANY_CHAR_NOT_NL:return this.rune(fr.ANY_RUNE_NOT_NL(),0);case y.Op.ANY_CHAR:return this.rune(fr.ANY_RUNE(),0);case y.Op.BEGIN_LINE:return this.empty(Q.EMPTY_BEGIN_LINE);case y.Op.END_LINE:return this.empty(Q.EMPTY_END_LINE);case y.Op.BEGIN_TEXT:return this.empty(Q.EMPTY_BEGIN_TEXT);case y.Op.END_TEXT:return this.empty(Q.EMPTY_END_TEXT);case y.Op.WORD_BOUNDARY:return this.empty(Q.EMPTY_WORD_BOUNDARY);case y.Op.NO_WORD_BOUNDARY:return this.empty(Q.EMPTY_NO_WORD_BOUNDARY);case y.Op.PLB:case y.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case y.Op.CAPTURE:{const t=this.cap(e.cap<<1),n=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,n),s)}case y.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&k.NON_GREEDY)!==0);case y.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&k.NON_GREEDY)!==0);case y.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&k.NON_GREEDY)!==0);case y.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const s=this.compile(n);t=t===null?s:this.cat(t,s)}return t}case y.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const s=this.compile(n);t=t===null?s:this.alt(t,s)}return t}default:throw new r_("regexp: unhandled case in compile")}}},D_=class Ct{static simplify(e){if(e===null)return null;switch(e.op){case y.Op.PLB:case y.Op.NLB:case y.Op.CAPTURE:{const t=Ct.simplify(e.subs[0]);if(t!==e.subs[0]){const n=y.fromRegexp(e);return n.runes=[],n.subs=[t],n}return e}case y.Op.CONCAT:case y.Op.ALTERNATE:{const t=[];let n=!1;for(let s=0;s<e.subs.length;s++){const i=e.subs[s],o=Ct.simplify(i);if(o!==i&&(n=!0),e.op===y.Op.CONCAT){if(o.op===y.Op.NO_MATCH)return new y(y.Op.NO_MATCH);if(o.op===y.Op.EMPTY_MATCH){n=!0;continue}if(o.op===y.Op.CONCAT){n=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}else if(e.op===y.Op.ALTERNATE){if(o.op===y.Op.NO_MATCH){n=!0;continue}if(o.op===y.Op.ALTERNATE){n=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}t.push(o)}if(n){if(t.length===0)return new y(e.op===y.Op.CONCAT?y.Op.EMPTY_MATCH:y.Op.NO_MATCH);if(t.length===1)return t[0];const s=y.fromRegexp(e);return s.runes=[],s.subs=t,s}return e}case y.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new y(y.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===K.MAX_RUNE?new y(y.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===N.CODES.get(`
`)-1&&e.runes[2]===N.CODES.get(`
`)+1&&e.runes[3]===K.MAX_RUNE?new y(y.Op.ANY_CHAR_NOT_NL):e;case y.Op.STAR:case y.Op.PLUS:case y.Op.QUEST:{const t=Ct.simplify(e.subs[0]);return Ct.simplify1(e.op,e.flags,t,e)}case y.Op.REPEAT:{if(e.min===0&&e.max===0)return new y(y.Op.EMPTY_MATCH);const t=Ct.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Ct.simplify1(y.Op.STAR,e.flags,t,null);if(e.min===1)return Ct.simplify1(y.Op.PLUS,e.flags,t,null);const s=new y(y.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(Ct.simplify1(y.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),Ct.simplify(s)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let s=0;s<e.min;s++)n.push(t)}if(e.max>e.min){let s=Ct.simplify1(y.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new y(y.Op.CONCAT);o.subs=[t,s],s=Ct.simplify1(y.Op.QUEST,e.flags,o,null)}if(n===null)return s;n.push(s)}if(n!==null){const s=new y(y.Op.CONCAT);return s.subs=n.slice(0),Ct.simplify(s)}return new y(y.Op.NO_MATCH)}}return e}static simplify1(e,t,n,s){if(n.op===y.Op.EMPTY_MATCH)return n;if(n.op===y.Op.NO_MATCH)return e===y.Op.PLUS?n:new y(y.Op.EMPTY_MATCH);if(e===n.op&&(t&k.NON_GREEDY)===(n.flags&k.NON_GREEDY))return n;if(s!==null&&s.op===e&&(s.flags&k.NON_GREEDY)===(t&k.NON_GREEDY)&&n===s.subs[0])return s;const i=new y(e);return i.flags=t,i.subs=[n],i}},le=class{constructor(r,e){this.sign=r,this.cls=e}};const al=[48,57],Bl=[9,10,12,13,32,32],ul=[48,57,65,90,95,95,97,122],cl=new Map([["\\d",new le(1,al)],["\\D",new le(-1,al)],["\\s",new le(1,Bl)],["\\S",new le(-1,Bl)],["\\w",new le(1,ul)],["\\W",new le(-1,ul)]]),ll=[48,57,65,90,97,122],hl=[65,90,97,122],Cl=[0,127],fl=[9,9,32,32],dl=[0,31,127,127],pl=[48,57],gl=[33,126],ml=[97,122],El=[32,126],_l=[33,47,58,64,91,96,123,126],Dl=[9,13,32,32],wl=[65,90],yl=[48,57,65,90,95,95,97,122],Il=[48,57,65,70,97,102],Tl=new Map([["[:alnum:]",new le(1,ll)],["[:^alnum:]",new le(-1,ll)],["[:alpha:]",new le(1,hl)],["[:^alpha:]",new le(-1,hl)],["[:ascii:]",new le(1,Cl)],["[:^ascii:]",new le(-1,Cl)],["[:blank:]",new le(1,fl)],["[:^blank:]",new le(-1,fl)],["[:cntrl:]",new le(1,dl)],["[:^cntrl:]",new le(-1,dl)],["[:digit:]",new le(1,pl)],["[:^digit:]",new le(-1,pl)],["[:graph:]",new le(1,gl)],["[:^graph:]",new le(-1,gl)],["[:lower:]",new le(1,ml)],["[:^lower:]",new le(-1,ml)],["[:print:]",new le(1,El)],["[:^print:]",new le(-1,El)],["[:punct:]",new le(1,_l)],["[:^punct:]",new le(-1,_l)],["[:space:]",new le(1,Dl)],["[:^space:]",new le(-1,Dl)],["[:upper:]",new le(1,wl)],["[:^upper:]",new le(-1,wl)],["[:word:]",new le(1,yl)],["[:^word:]",new le(-1,yl)],["[:xdigit:]",new le(1,Il)],["[:^xdigit:]",new le(-1,Il)]]);var Cn=class dn{static charClassToString(e,t){let n="[";for(let s=0;s<t;s+=2){s>0&&(n+=" ");const i=e[s],o=e[s+1];i===o?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${o.toString(16)}`}return n+="]",n}static cmp(e,t,n,s){const i=e[t]-n;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,n){const s=((t+n)/2|0)&-2,i=e[s],o=e[s+1];let B=t,u=n;for(;B<=u;){for(;B<n&&dn.cmp(e,B,i,o)<0;)B+=2;for(;u>t&&dn.cmp(e,u,i,o)>0;)u-=2;if(B<=u){if(B!==u){let c=e[B];e[B]=e[u],e[u]=c,c=e[B+1],e[B+1]=e[u+1],e[u+1]=c}B+=2,u-=2}}t<u&&dn.qsortIntPair(e,t,u),B<n&&dn.qsortIntPair(e,B,n)}constructor(e=Q.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;dn.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const n=this.r[t],s=this.r[t+1];if(n<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=n,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&k.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){const s=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=K.MIN_FOLD&&t>=K.MAX_FOLD)return this.appendRange(e,t);if(t<K.MIN_FOLD||e>K.MAX_FOLD)return this.appendRange(e,t);e<K.MIN_FOLD&&(this.appendRange(e,K.MIN_FOLD-1),e=K.MIN_FOLD),t>K.MAX_FOLD&&(this.appendRange(K.MAX_FOLD+1,t),t=K.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let s=K.simpleFold(n);s!==n;s=K.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const s=e[n],i=e[n+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=K.MAX_RUNE&&this.appendRange(t,K.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,s);continue}for(let o=n;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const s=e.getLo(n),i=e.getHi(n),o=e.getStride(n);if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let B=s;B<=i;B+=o)t<=B-1&&this.appendRange(t,B-1),t=B+1}return t<=K.MAX_RUNE&&this.appendRange(t,K.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const s=this.r[n],i=this.r[n+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=K.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=K.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new dn().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return dn.charClassToString(this.r,this.len)}},w_=class{constructor(r){this.str=r,this.position=0}pos(){return this.position}rewindTo(r){this.position=r}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(r){this.position+=r}skipString(r){this.position+=r.length}pop(){const r=this.str.codePointAt(this.position);return this.position+=Q.charCount(r),r}lookingAt(r){return this.str.startsWith(r,this.position)}rest(){return this.str.substring(this.position)}from(r){return this.str.substring(r,this.position)}toString(){return this.rest()}},G,y_=(G=class{static unicodeTable(e){return e==="Any"?{tab:G.ANY_TABLE,fold:G.ANY_TABLE,sign:1}:e==="Ascii"?{tab:G.ASCII_TABLE,fold:G.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:st.CATEGORIES.get("Cn"),fold:st.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:st.CATEGORIES.get("LC"),fold:st.FOLD_CATEGORIES.get("LC"),sign:1}:st.CATEGORIES.has(e)?{tab:st.CATEGORIES.get(e),fold:st.FOLD_CATEGORIES.get(e),sign:1}:st.SCRIPTS.has(e)?{tab:st.SCRIPTS.get(e),fold:st.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<K.MIN_FOLD||e>K.MAX_FOLD)return e;let t=e;const n=e;for(e=K.simpleFold(e);e!==n;e=K.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===y.Op.EMPTY_MATCH)return null;if(e.op===y.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===y.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new y(y.Op.LITERAL);return n.flags=t,n.runes=Q.stringToRunes(e),n}static parse(e,t){return new G(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const n=G.parseInt(e);if(n===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=G.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||s===-2||s>1e3||s>=0&&n>s)throw new me(G.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|s&K.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==N.CODES.get("_")&&!Q.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=N.CODES.get("0")&&e.peek()<=N.CODES.get("9");)e.skip(1);const n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===N.CODES.get("0")?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===y.Op.LITERAL&&e.runes.length===1||e.op===y.Op.CHAR_CLASS||e.op===y.Op.ANY_CHAR_NOT_NL||e.op===y.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case y.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case y.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case y.Op.ANY_CHAR_NOT_NL:return t!==N.CODES.get(`
`);case y.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case y.Op.ANY_CHAR:break;case y.Op.ANY_CHAR_NOT_NL:G.matchRune(t,N.CODES.get(`
`))&&(e.op=y.Op.ANY_CHAR);break;case y.Op.CHAR_CLASS:t.op===y.Op.LITERAL?e.runes=new Cn(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new Cn(e.runes).appendClass(t.runes).toArray();break;case y.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=y.Op.CHAR_CLASS,e.runes=new Cn().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new me(G.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case N.CODES.get("1"):case N.CODES.get("2"):case N.CODES.get("3"):case N.CODES.get("4"):case N.CODES.get("5"):case N.CODES.get("6"):case N.CODES.get("7"):if(!e.more()||e.peek()<N.CODES.get("0")||e.peek()>N.CODES.get("7"))break;case N.CODES.get("0"):{let s=n-N.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<N.CODES.get("0")||e.peek()>N.CODES.get("7"));i++)s=s*8+e.peek()-N.CODES.get("0"),e.skip(1);return s}case N.CODES.get("x"):{if(!e.more())break;if(n=e.pop(),n===N.CODES.get("{")){let o=0,B=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===N.CODES.get("}"))break;const u=Q.unhex(n);if(u<0||(B=B*16+u,B>K.MAX_RUNE))break e;o++}if(o===0)break e;return B}const s=Q.unhex(n);if(!e.more())break;n=e.pop();const i=Q.unhex(n);if(s<0||i<0)break;return s*16+i}case N.CODES.get("a"):return N.CODES.get("\x07");case N.CODES.get("f"):return N.CODES.get("\f");case N.CODES.get("n"):return N.CODES.get(`
`);case N.CODES.get("r"):return N.CODES.get("\r");case N.CODES.get("t"):return N.CODES.get("	");case N.CODES.get("v"):return N.CODES.get("\v");default:if(n<=K.MAX_ASCII&&!Q.isalnum(n))return n;break}throw new me(G.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new me(G.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?G.parseEscape(e):e.pop()}static concatRunes(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===y.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(G.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new y(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>G.MAX_RUNES)throw new me(G.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===y.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(G.MAX_SIZE/this.repeats)?this.repeats=G.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(G.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>G.MAX_SIZE)throw new me(G.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case y.Op.LITERAL:n=e.runes.length;break;case y.Op.PLB:case y.Op.NLB:case y.Op.CAPTURE:case y.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case y.Op.PLUS:case y.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case y.Op.CONCAT:for(let s of e.subs)n=n+this.calcSize(s);break;case y.Op.ALTERNATE:for(let s of e.subs)n=n+this.calcSize(s);e.subs.length>1&&(n=n+e.subs.length-1);break;case y.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+s:n=1+e.min*s;break}n=e.max*s+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<G.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>G.MAX_HEIGHT)throw new me(G.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let s of e.subs){const i=this.calcHeight(s);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!y.isPseudoOp(this.stack[t-1].op);)t--;const n=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),n}push(e){if(this.numRunes+=e.runes.length,e.op===y.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=y.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===y.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&K.simpleFold(e.runes[0])===e.runes[2]&&K.simpleFold(e.runes[2])===e.runes[0]||e.op===y.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&K.simpleFold(e.runes[0])===e.runes[1]&&K.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|k.FOLD_CASE))return null;e.op=y.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|k.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const s=this.stack[n-1],i=this.stack[n-2];return s.op!==y.Op.LITERAL||i.op!==y.Op.LITERAL||(s.flags&k.FOLD_CASE)!==(i.flags&k.FOLD_CASE)?!1:(i.runes=G.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const n=this.newRegexp(y.Op.LITERAL);return n.flags=t,(t&k.FOLD_CASE)!==0&&(e=G.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,s,i,o){let B=this.flags;if((B&k.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),B^=k.NON_GREEDY),o!==-1))throw new me(G.ERR_INVALID_REPEAT_OP,i.from(o));const u=this.stack.length;if(u===0)throw new me(G.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const c=this.stack[u-1];if(y.isPseudoOp(c.op))throw new me(G.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.newRegexp(e);if(h.min=t,h.max=n,h.flags=B,h.subs=[c],this.stack[u-1]=h,this.checkLimits(h),e===y.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(h,1e3))throw new me(G.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===y.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(y.Op.EMPTY_MATCH)):this.push(this.collapse(e,y.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(y.Op.NO_MATCH)):this.push(this.collapse(e,y.Op.ALTERNATE))}cleanAlt(e){e.op===y.Op.CHAR_CLASS&&(e.runes=new Cn(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===K.MAX_RUNE?(e.runes=[],e.op=y.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===N.CODES.get(`
`)-1&&e.runes[2]===N.CODES.get(`
`)+1&&e.runes[3]===K.MAX_RUNE&&(e.runes=[],e.op=y.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let B of e)n+=B.op===t?B.subs.length:1;let s=new Array(n).fill(null),i=0;for(let B of e)if(B.op===t){for(let u=0;u<B.subs.length;u++)s[i++]=B.subs[u];this.reuse(B)}else s[i++]=B;let o=this.newRegexp(t);if(o.subs=s,t===y.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const B=o;o=o.subs[0],this.reuse(B)}return o}factor(e){if(e.length<2)return e;let t=0,n=e.length,s=0,i=null,o=0,B=0,u=0;for(let h=0;h<=n;h++){let f=null,g=0,T=0;if(h<n){let R=e[t+h];if(R.op===y.Op.CONCAT&&R.subs.length>0&&(R=R.subs[0]),R.op===y.Op.LITERAL&&(f=R.runes,g=R.runes.length,T=R.flags&k.FOLD_CASE),T===B){let x=0;for(;x<o&&x<g&&i[x]===f[x];)x++;if(x>0){o=x;continue}}}if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const R=this.newRegexp(y.Op.LITERAL);R.flags=B,R.runes=i.slice(0,o);for(let z=u;z<h;z++)e[t+z]=this.removeLeadingString(e[t+z],o),this.checkLimits(e[t+z]);const x=this.collapse(e.slice(t+u,t+h),y.Op.ALTERNATE),J=this.newRegexp(y.Op.CONCAT);J.subs=[R,x],e[s++]=J}u=h,i=f,o=g,B=T}n=s,t=0,u=0,s=0;let c=null;for(let h=0;h<=n;h++){let f=null;if(!(h<n&&(f=G.leadingRegexp(e[t+h]),c!==null&&c.equals(f)&&(G.isCharClass(c)||c.op===y.Op.REPEAT&&c.min===c.max&&G.isCharClass(c.subs[0]))))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const g=c;for(let x=u;x<h;x++){const J=x!==u;e[t+x]=this.removeLeadingRegexp(e[t+x],J),this.checkLimits(e[t+x])}const T=this.collapse(e.slice(t+u,t+h),y.Op.ALTERNATE),R=this.newRegexp(y.Op.CONCAT);R.subs=[g,T],e[s++]=R}u=h,c=f}}n=s,t=0,u=0,s=0;for(let h=0;h<=n;h++)if(!(h<n&&G.isCharClass(e[t+h]))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{let f=u;for(let T=u+1;T<h;T++){const R=e[t+f],x=e[t+T];(R.op<x.op||R.op===x.op&&(R.runes!==null?R.runes.length:0)<(x.runes!==null?x.runes.length:0))&&(f=T)}const g=e[t+u];e[t+u]=e[t+f],e[t+f]=g;for(let T=u+1;T<h;T++)G.mergeCharClass(e[t+u],e[t+T]),this.reuse(e[t+T]);this.cleanAlt(e[t+u]),e[s++]=e[t+u]}h<n&&(e[s++]=e[t+h]),u=h+1}n=s,t=0,u=0,s=0;for(let h=0;h<n;++h)h+1<n&&e[t+h].op===y.Op.EMPTY_MATCH&&e[t+h+1].op===y.Op.EMPTY_MATCH||(e[s++]=e[t+h]);return n=s,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===y.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===y.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=y.Op.EMPTY_MATCH,e.subs=y.emptySubs();break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===y.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=y.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===y.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=y.Op.EMPTY_MATCH,e.subs=y.emptySubs();break;case 1:{const n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(y.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&k.LITERAL)!==0)return G.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1;const s=new w_(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case N.CODES.get("("):if((this.flags&k.LOOKBEHIND)!==0){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if((this.flags&k.PERL_X)!==0&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(y.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case N.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case N.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case N.CODES.get("^"):(this.flags&k.ONE_LINE)!==0?this.op(y.Op.BEGIN_TEXT):this.op(y.Op.BEGIN_LINE),s.skip(1);break;case N.CODES.get("$"):(this.flags&k.ONE_LINE)!==0?this.op(y.Op.END_TEXT).flags|=k.WAS_DOLLAR:this.op(y.Op.END_LINE),s.skip(1);break;case N.CODES.get("."):(this.flags&k.DOT_NL)!==0?this.op(y.Op.ANY_CHAR):this.op(y.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case N.CODES.get("["):this.parseClass(s);break;case N.CODES.get("*"):case N.CODES.get("+"):case N.CODES.get("?"):{i=s.pos();let o=null;switch(s.pop()){case N.CODES.get("*"):o=y.Op.STAR;break;case N.CODES.get("+"):o=y.Op.PLUS;break;case N.CODES.get("?"):o=y.Op.QUEST;break}this.repeat(o,t,n,i,s,e);break}case N.CODES.get("{"):{i=s.pos();const o=G.parseRepeat(s);if(o<0){s.rewindTo(i),this.literal(s.pop());break}t=o>>16,n=(o&K.MAX_BMP)<<16>>16,this.repeat(y.Op.REPEAT,t,n,i,s,e);break}case N.CODES.get("\\"):{const o=s.pos();if(s.skip(1),(this.flags&k.PERL_X)!==0&&s.more())switch(s.pop()){case N.CODES.get("A"):this.op(y.Op.BEGIN_TEXT);break e;case N.CODES.get("b"):this.op(y.Op.WORD_BOUNDARY);break e;case N.CODES.get("B"):this.op(y.Op.NO_WORD_BOUNDARY);break e;case N.CODES.get("C"):throw new me(G.ERR_INVALID_ESCAPE,"\\C");case N.CODES.get("Q"):{let c=s.rest();const h=c.indexOf("\\E");h>=0?(c=c.substring(0,h),s.skipString(c),s.skipString("\\E")):s.skipString(c);let f=0;for(;f<c.length;){const g=c.codePointAt(f);this.literal(g),f+=Q.charCount(g)}break e}case N.CODES.get("z"):this.op(y.Op.END_TEXT);break e;default:s.rewindTo(o);break}else s.rewindTo(o);const B=this.newRegexp(y.Op.CHAR_CLASS);if(B.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const c=new Cn;if(this.parseUnicodeClass(s,c)){B.runes=c.toArray(),this.push(B);break e}}const u=new Cn;if(this.parsePerlClassEscape(s,u)){B.runes=u.toArray(),this.push(B);break e}s.rewindTo(o),this.reuse(B),this.literal(G.parseEscape(s));break}default:this.literal(s.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new me(G.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){const B=n.charAt(2)==="P"?4:3,u=n.indexOf(">");if(u<0)throw new me(G.ERR_INVALID_NAMED_CAPTURE,n);const c=n.substring(B,u);if(e.skipString(c),e.skip(B+1),!G.isValidCaptureName(c))throw new me(G.ERR_INVALID_NAMED_CAPTURE,n.substring(0,u+1));const h=this.op(y.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[c])throw new me(G.ERR_DUPLICATE_NAMED_CAPTURE,c);this.namedGroups[c]=this.numCap,h.name=c;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const B=e.pop();switch(B){case N.CODES.get("i"):s|=k.FOLD_CASE,o=!0;break;case N.CODES.get("m"):s&=-17,o=!0;break;case N.CODES.get("s"):s|=k.DOT_NL,o=!0;break;case N.CODES.get("U"):s|=k.NON_GREEDY,o=!0;break;case N.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case N.CODES.get(":"):case N.CODES.get(")"):if(i<0){if(!o)break e;s=~s}B===N.CODES.get(":")&&this.op(y.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new me(G.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(y.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(y.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(y.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===y.Op.VERTICAL_BAR&&G.isCharClass(this.stack[e-1])&&G.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){const s=n;n=t,t=s,this.stack[e-3]=n}return G.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],n=this.stack[e-2];if(n.op===y.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new me(G.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==y.Op.LEFT_PAREN)throw new me(G.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(G.hasCapture(e))throw new me(G.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=y.Op.PLB:t.op=y.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=y.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const n=e.pos();if((this.flags&k.PERL_X)===0||!e.more()||e.pop()!==N.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(n),i=cl.has(s)?cl.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&k.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const n=e.rest(),s=n.indexOf(":]");if(s<0)return!1;const i=n.substring(0,s+2);e.skipString(i);const o=Tl.has(i)?Tl.get(i):null;if(o===null)throw new me(G.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&k.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const n=e.pos();if((this.flags&k.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===N.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(n),new me(G.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==N.CODES.get("{"))o=Q.runeToString(i);else{const h=e.rest(),f=h.indexOf("}");if(f<0)throw e.rewindTo(n),new me(G.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,f),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===N.CODES.get("^")&&(s=0-s,o=o.substring(1));const B=G.unicodeTable(o);if(B===null)throw new me(G.ERR_INVALID_CHAR_RANGE,e.from(n));B.sign<0&&(s=0-s);const u=B.tab,c=B.fold;if((this.flags&k.FOLD_CASE)===0||c===null)t.appendTableWithSign(u,s);else{const h=new Cn().appendTable(u).appendTable(c).cleanClass().toArray();t.appendClassWithSign(h,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const n=this.newRegexp(y.Op.CHAR_CLASS);n.flags=this.flags;const s=new Cn;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&k.CLASS_NL)===0&&s.appendRange(N.CODES.get(`
`),N.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==N.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&(this.flags&k.PERL_X)===0&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new me(G.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const B=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(B)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(B);const u=G.parseClassChar(e,t);let c=u;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(c=G.parseClassChar(e,t),c<u)throw new me(G.ERR_INVALID_CHAR_RANGE,e.from(B))}(this.flags&k.FOLD_CASE)===0?s.appendRange(u,c):s.appendFoldedRange(u,c)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),n.runes=s.toArray(),this.push(n)}},M(G,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),M(G,"ERR_INVALID_CHAR_RANGE","invalid character class range"),M(G,"ERR_INVALID_ESCAPE","invalid escape sequence"),M(G,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),M(G,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),M(G,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),M(G,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),M(G,"ERR_MISSING_BRACKET","missing closing ]"),M(G,"ERR_MISSING_PAREN","missing closing )"),M(G,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),M(G,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),M(G,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),M(G,"ERR_UNEXPECTED_PAREN","unexpected )"),M(G,"ERR_NESTING_DEPTH","expression nests too deeply"),M(G,"ERR_LARGE","expression too large"),M(G,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),M(G,"MAX_HEIGHT",1e3),M(G,"MAX_SIZE",3355443),M(G,"MAX_RUNES",33554432),M(G,"ANY_TABLE",new p(new Uint32Array([0,K.MAX_RUNE,1]))),M(G,"ASCII_TABLE",new p(new Uint32Array([0,127,1]))),M(G,"ASCII_FOLD_TABLE",new p(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),G),I_=class qn{static initTest(e){const t=qn.compile(e),n=new qn(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n}static compile(e){return qn.compileImpl(e,k.PERL,!1)}static compilePOSIX(e){return qn.compileImpl(e,k.POSIX,!0)}static compileImpl(e,t,n){let s=y_.parse(e,t);const i=s.maxCap();s=D_.simplify(s);const o=m_.build(s),B=__.compileRegexp(s),u=new qn(e,B,i,n);u.prefilter=o.type===Ce.Type.NONE?null:o;const[c,h]=B.prefix();return u.prefixComplete=c,u.prefix=h,u.prefixUTF8=Q.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=s.namedGroups,u}static match(e,t){return qn.compile(e).match(t)}constructor(e,t,n=0,s=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new B_(this.prog),this.onepass=il.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,n,s){if((n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const B=e.prefixLength(this);if(n===k.UNANCHORED){const u=e.index(this,t);if(u<0)return null;i=t+u,o=i+B}else if(n===k.ANCHOR_BOTH){if(e.endPos()!==B||e.index(this,0)!==0)return null;i=0,o=B}else if(n===k.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=B}if(i<0)return null;if(s>0){const u=new Int32Array(s).fill(-1);return u[0]=i,u[1]=o,Array.from(u)}return[]}executeEngine(e,t,n,s){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,s);if(this.prefilter!==null&&n===k.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return il.execute(this,e,t,n,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=Ii.maxBitStateLen(this.prog)?Ii.execute(this,e,t,n,s):this.doExecuteNFA(e,t,n,s);if(this.prog.numLb===0){const i=this.dfa.match(e,t,n);if(i!==null)return i?[]:null;if(e.endPos()<=Ii.maxBitStateLen(this.prog))return Ii.execute(this,e,t,n,s)}return this.doExecuteNFA(e,t,n,s)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,s){let i=this.get();i||(i=i_.fromRE2(this)),i.init(s);const o=i.match(e,t,n)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(_e.fromUTF16(e),0,k.UNANCHORED,0)!==null}matchWithGroup(e,t,n,s,i){return e instanceof sr||(Q.isByteArray(e)?e=zn.utf8(e):e=zn.utf16(e)),this.matchMachineInput(e,t,n,s,i)}matchMachineInput(e,t,n,s,i){if(t>n)return[!1,null];const o=e.isUTF16Encoding()?_e.fromUTF16(e.asCharSequence(),0,n):_e.fromUTF8(e.asBytes(),0,n),B=this.executeEngine(o,t,s,2*i);return B===null?[!1,null]:[!0,B]}matchUTF8(e){return this.executeEngine(_e.fromUTF8(e),0,k.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let s=0,i=0,o="";const B=_e.fromUTF16(e);let u=0;for(;i<=e.length;){const c=this.executeEngine(B,i,k.UNANCHORED,2);if(c===null||c.length===0)break;o+=e.substring(s,c[0]),(c[1]>s||c[0]===0)&&(o+=t(e.substring(c[0],c[1])),u++),s=c[1];const h=B.step(i)&7;if(i+h>c[1]?i+=h:i+1>c[1]?i++:i=c[1],u>=n)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let s=0;s<e.length;s++)n[s]=e[s];e=n}return e}allMatches(e,t,n=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,B=0,u=-1;for(;B<t&&o<=i;){const c=this.executeEngine(e,o,k.UNANCHORED,this.prog.numCap);if(c===null||c.length===0)break;let h=!0;if(c[1]===o){c[0]===u&&(h=!1);const f=e.step(o);f<0?o=i+1:o+=f&7}else o=c[1];u=c[1],h&&(s.push(n(this.pad(c))),B++)}return s}findUTF8(e){const t=this.executeEngine(_e.fromUTF8(e),0,k.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(_e.fromUTF8(e),0,k.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(_e.fromUTF16(e),0,k.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(_e.fromUTF16(e),0,k.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(_e.fromUTF8(e),0,k.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.slice(t[2*s],t[2*s+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(_e.fromUTF8(e),0,k.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(_e.fromUTF16(e),0,k.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.substring(t[2*s],t[2*s+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(_e.fromUTF16(e),0,k.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(_e.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return n.length===0?null:n}findAllUTF8Index(e,t){const n=this.allMatches(_e.fromUTF8(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAll(e,t){const n=this.allMatches(_e.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return n.length===0?null:n}findAllIndex(e,t){const n=this.allMatches(_e.fromUTF16(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(_e.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(_e.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){const n=this.allMatches(_e.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(_e.fromUTF16(e),t);return n.length===0?null:n}},T_=class dr{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",s=!1,i=e.length;i===0&&(n="(?:)",s=!0);let o=!1,B=0;for(;B<i;){let c=e[B];if(c==="\\"){if(B+1<i)switch(c=e[B+1],c){case"\\":n+="\\\\",B+=2;continue;case"c":if(B+2<i){let g=e[B+2].charCodeAt(0);if(g>=65&&g<=90||g>=97&&g<=122){let T=g%32;n+="\\x",n+=(T>>4).toString(16).toUpperCase(),n+=(T&15).toString(16).toUpperCase(),B+=3,s=!0;continue}}n+="c",B+=2,s=!0;continue;case"u":if(B+2<i){if(e[B+2]==="{"){let g=B+3,T=!1,R=!1;for(;g<i;){const x=e[g];if(x==="}"){R=!0;break}if(!dr.isHexadecimal(x))break;T=!0,g++}if(R&&T){n+="\\x",B+=2,s=!0;continue}}else if(B+5<i){let g=!0;for(let T=0;T<4;T++)if(!dr.isHexadecimal(e[B+2+T])){g=!1;break}if(g){n+="\\x{"+e.substring(B+2,B+6)+"}",B+=6,s=!0;continue}}}n+="u",B+=2,s=!0;continue;case"x":{let g=!1;if(B+2<i&&e[B+2]==="{"){let T=B+3,R=!1,x=!1;for(;T<i;){const J=e[T];if(J==="}"){x=!0;break}if(!dr.isHexadecimal(J))break;R=!0,T++}x&&R&&(g=!0)}else B+3<i&&dr.isHexadecimal(e[B+2])&&dr.isHexadecimal(e[B+3])&&(g=!0);g?(n+="\\x",B+=2):(n+="x",B+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+c,B+=2;continue;default:{let g=e.codePointAt(B+1);if(g>=48&&g<=57||g>=65&&g<=90||g>=97&&g<=122){let T=Q.charCount(g);n+=e.substring(B+1,B+1+T),B+=T+1,s=!0}else{n+="\\";let T=Q.charCount(g);n+=e.substring(B+1,B+1+T),B+=T+1}continue}}}else if(c==="/"){n+="\\/",B+=1,s=!0;continue}else if(c==="[")o=!0;else if(c==="]")o=!1;else if(!o&&c==="("&&B+2<i&&e[B+1]==="?"&&e[B+2]==="<"&&B+3<i&&!"=!>)".includes(e[B+3])){n+="(?P<",B+=3,s=!0;continue}let h=e.codePointAt(B),f=Q.charCount(h);n+=e.substring(B,B+f),B+=f}const u=s?n:e;return t.length>0?`(?${t})${u}`:u}},Pe,PB=(Pe=class{static quote(e){return Q.quoteMeta(e)}static quoteReplacement(e,t=!1){return tl.quoteReplacement(e,t)}static translateRegExp(e){return T_.translate(e)}static compile(e,t=0){let n=e;if((t&Pe.CASE_INSENSITIVE)!==0&&(n=`(?i)${n}`),(t&Pe.DOTALL)!==0&&(n=`(?s)${n}`),(t&Pe.MULTILINE)!==0&&(n=`(?m)${n}`),(t&-544)!==0)throw new s_("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=k.PERL;(t&Pe.DISABLE_UNICODE_GROUPS)!==0&&(s&=-129),(t&Pe.LOOKBEHINDS)!==0&&(s|=k.LOOKBEHIND);const i=new Pe(e,t);return i.re2Input=I_.compileImpl(n,s,(t&Pe.LONGEST_MATCH)!==0),i}static matches(e,t){return Pe.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");const s=new Pe(e,t);return s.re2Input=n,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return Q.isByteArray(e)&&(e=zn.utf8(e)),new tl(this,e)}test(e){return Q.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=Q.isByteArray(e)?_e.fromUTF8(e):_e.fromUTF16(e);return this.re2Input.executeEngine(t,0,k.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;return n}split(e,t=0){const n=this.matcher(e),s=[];let i=0,o=0;for(;n.find();){if(o===0&&n.end()===0){o=n.end();continue}if(t>0&&s.length===t-1)break;if(o===n.start()){if(t===0){i+=1,o=n.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.start())),o=n.end()}if(t===0&&o!==n.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.inputLength()))}return(t!==0||s.length===0&&!(o===n.inputLength()&&o>0))&&s.push(n.substring(o,n.inputLength())),s}*matchAll(e){const t=this.matcher(e);for(;t.find();){const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;yield n}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},M(Pe,"CASE_INSENSITIVE",Cr.CASE_INSENSITIVE),M(Pe,"DOTALL",Cr.DOTALL),M(Pe,"MULTILINE",Cr.MULTILINE),M(Pe,"DISABLE_UNICODE_GROUPS",Cr.DISABLE_UNICODE_GROUPS),M(Pe,"LONGEST_MATCH",Cr.LONGEST_MATCH),M(Pe,"LOOKBEHINDS",Cr.LOOKBEHINDS),Pe);/**
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
 */let Ur="12.17.0";function A_(r){Ur=r}/**
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
 */const ir=new po("@firebase/firestore");function pr(){return ir.logLevel}function j(r,...e){if(ir.logLevel<=ie.DEBUG){const t=e.map(bB);ir.debug(`Firestore (${Ur}): ${r}`,...t)}}function tn(r,...e){if(ir.logLevel<=ie.ERROR){const t=e.map(bB);ir.error(`Firestore (${Ur}): ${r}`,...t)}}function vt(r,...e){if(ir.logLevel<=ie.WARN){const t=e.map(bB);ir.warn(`Firestore (${Ur}): ${r}`,...t)}}function bB(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function ee(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,MC(r,n,t)}function MC(r,e,t){let n=`FIRESTORE (${Ur}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw tn(n),new Error(n)}function Y(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||MC(e,s,n)}function he(r,e){return r}/**
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
 */function v_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class SB{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=v_(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function oe(r,e){return r<e?-1:r>e?1:0}function qa(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return ya(s)===ya(i)?oe(s,i):ya(s)?1:-1}return oe(r.length,e.length)}const R_=55296,P_=57343;function ya(r){const e=r.charCodeAt(0);return e>=R_&&e<=P_}function br(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}/**
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
 */class Ae{constructor(e,t){this.comparator=e,this.root=t||je.EMPTY}insert(e,t){return new Ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ai(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ai(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ai(this.root,e,this.comparator,!0)}}class Ai{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??je.RED,this.left=s??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new je(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Oe{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Al(this.data.getIterator())}getIteratorFrom(e){return new Al(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Oe(this.comparator);return t.data=e,t}}class Al{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */const Ot="__name__";class St{constructor(e,t,n){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&ee(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return St.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof St?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=St.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return oe(e.length,t.length)}static compareSegments(e,t){const n=St.isNumericId(e),s=St.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?St.extractNumericId(e).compare(St.extractNumericId(t)):qa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tn.fromString(e.substring(4,e.length-2))}}class fe extends St{construct(e,t,n){return new fe(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new fe(t)}static emptyPath(){return new fe([])}}const b_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let wt=class gr extends St{construct(e,t,n){return new gr(e,t,n)}static isValidIdentifier(e){return b_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ot}static keyField(){return new gr([Ot])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const B=e[s];if(B==="\\"){if(s+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else B==="`"?(o=!o,s++):B!=="."||o?(n+=B,s++):(i(),s++)}if(i(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gr(t)}static emptyPath(){return new gr([])}};/**
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
 */class Dn{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new Dn([])}unionWith(e){let t=new Oe(wt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Dn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return br(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */function Yi(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Jr(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function S_(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function GC(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(fe.fromString(e))}static fromName(e){return new W(fe.fromString(e).popFirst(5))}static empty(){return new W(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new fe(e.slice()))}}/**
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
 */function HC(r,e,t){if(!t)throw new q(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function N_(r,e,t,n){if(e===!0&&n===!0)throw new q(V.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function vl(r){if(!W.isDocumentKey(r))throw new q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Rl(r){if(W.isDocumentKey(r))throw new q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function $s(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function wo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ee(12329,{type:typeof r})}function Tr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wo(r);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Se(r,e){const t={typeString:r};return e&&(t.value=e),t}function Ws(r,e){if(!$s(r))throw new q(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new q(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const Pl=-62135596800,bl=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*bl);return new we(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pl)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bl}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ws(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Pl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:Se("string",we._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
 * @license
 * Copyright 2023 Google LLC
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
 */class UC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new UC("Invalid base64 string: "+i):i}})(e);return new Le(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const O_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(r){if(Y(!!r,39018),typeof r=="string"){let e=0;const t=O_.exec(r);if(Y(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ye(r.seconds),nanos:ye(r.nanos)}}function ye(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function bn(r){return typeof r=="string"?Le.fromBase64String(r):Le.fromUint8Array(r)}/**
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
 */const JC="server_timestamp",jC="__type__",qC="__previous_value__",KC="__local_write_time__";function yo(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[jC])==null?void 0:n.stringValue)===JC}function Ys(r){const e=r.mapValue.fields[qC];return yo(e)?Ys(e):e}function Sr(r){const e=Pn(r.mapValue.fields[KC].timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class F_{constructor(e,t,n,s,i,o,B,u,c,h,f,g,T){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=B,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=h,this.apiKey=f,this._customHeaders=g,this.grpcFlowControlWindow=T}}const Ka="(default)";class Ns{constructor(e,t){this.projectId=e,this.database=t||Ka}static empty(){return new Ns("","")}get isDefaultDatabase(){return this.database===Ka}isEqual(e){return e instanceof Ns&&e.projectId===this.projectId&&e.database===this.database}}function L_(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ns(r.options.projectId,e)}/**
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
 */const k_=-1;function Io(r){return r==null}function Os(r){return r===0&&1/r==-1/0}function x_(r){return typeof r=="number"&&Number.isInteger(r)&&!Os(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}function V_(r){return typeof r=="string"}/**
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
 */const zC="__type__",M_="__max__",vi={mapValue:{}},QC="__vector__",Fs="value",Nr={nullValue:"NULL_VALUE"},ut={booleanValue:!0},Je={booleanValue:!1};function ke(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?yo(r)?4:G_(r)?9007199254740991:Xi(r)?10:11:ee(28295,{value:r})}function yt(r,e,t){if(r===e)return!0;const n=ke(r);if(n!==ke(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Sr(r).isEqual(Sr(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const B=Pn(i.timestampValue),u=Pn(o.timestampValue);return B.seconds===u.seconds&&B.nanos===u.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(i,o){return bn(i.bytesValue).isEqual(bn(o.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(i,o){return ye(i.geoPointValue.latitude)===ye(o.geoPointValue.latitude)&&ye(i.geoPointValue.longitude)===ye(o.geoPointValue.longitude)})(r,e);case 2:return(function(i,o,B){if("integerValue"in i&&"integerValue"in o)return ye(i.integerValue)===ye(o.integerValue);let u,c;if("doubleValue"in i&&"doubleValue"in o)u=ye(i.doubleValue),c=ye(o.doubleValue);else{if(!(B!=null&&B.t))return!1;u=ye(i.integerValue??i.doubleValue),c=ye(o.integerValue??o.doubleValue)}return u===c?!!(B!=null&&B.i)||Os(u)===Os(c):!!(B===void 0||B.o)&&isNaN(u)&&isNaN(c)})(r,e,t);case 9:return br(r.arrayValue.values||[],e.arrayValue.values||[],((s,i)=>yt(s,i,t)));case 10:case 11:return(function(i,o,B){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Yi(u)!==Yi(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!yt(u[h],c[h],B)))return!1;return!0})(r,e,t);default:return ee(52216,{left:r})}}function Ls(r,e){return(r.values||[]).find((t=>yt(t,e)))!==void 0}function ct(r,e){if(r===e)return 0;const t=ke(r),n=ke(e);if(t!==n)return oe(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return oe(r.booleanValue,e.booleanValue);case 2:return(function(i,o){const B=ye(i.integerValue||i.doubleValue),u=ye(o.integerValue||o.doubleValue);return B<u?-1:B>u?1:B===u?0:isNaN(B)?isNaN(u)?0:-1:1})(r,e);case 3:return Sl(r.timestampValue,e.timestampValue);case 4:return Sl(Sr(r),Sr(e));case 5:return qa(r.stringValue,e.stringValue);case 6:return(function(i,o){const B=bn(i),u=bn(o);return B.compareTo(u)})(r.bytesValue,e.bytesValue);case 7:return(function(i,o){const B=i.split("/"),u=o.split("/");for(let c=0;c<B.length&&c<u.length;c++){const h=oe(B[c],u[c]);if(h!==0)return h}return oe(B.length,u.length)})(r.referenceValue,e.referenceValue);case 8:return(function(i,o){const B=oe(ye(i.latitude),ye(o.latitude));return B!==0?B:oe(ye(i.longitude),ye(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Nl(r.arrayValue,e.arrayValue);case 10:return(function(i,o){var g,T,R,x;const B=i.fields||{},u=o.fields||{},c=(g=B[Fs])==null?void 0:g.arrayValue,h=(T=u[Fs])==null?void 0:T.arrayValue,f=oe(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((x=h==null?void 0:h.values)==null?void 0:x.length)||0);return f!==0?f:Nl(c,h)})(r.mapValue,e.mapValue);case 11:return(function(i,o){if(i===vi.mapValue&&o===vi.mapValue)return 0;if(i===vi.mapValue)return 1;if(o===vi.mapValue)return-1;const B=i.fields||{},u=Object.keys(B),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const g=qa(u[f],h[f]);if(g!==0)return g;const T=ct(B[u[f]],c[h[f]]);if(T!==0)return T}return oe(u.length,h.length)})(r.mapValue,e.mapValue);default:throw ee(23264,{u:t})}}function Sl(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return oe(r,e);const t=Pn(r),n=Pn(e),s=oe(t.seconds,n.seconds);return s!==0?s:oe(t.nanos,n.nanos)}function Nl(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=ct(t[s],n[s]);if(i!==void 0&&i!==0)return i}return oe(t.length,n.length)}function Or(r){return za(r)}function za(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=Pn(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return bn(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return W.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=za(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${za(t.fields[o])}`;return s+"}"})(r.mapValue):ee(61005,{value:r})}function Vi(r){switch(ke(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ys(r);return e?16+Vi(e):16;case 5:return 2*r.stringValue.length;case 6:return bn(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+Vi(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return Jr(n.fields,((i,o)=>{s+=i.length+Vi(o)})),s})(r.mapValue);default:throw ee(13486,{value:r})}}function Ol(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ft(r){return!!r&&"integerValue"in r}function Qn(r){return!!r&&"doubleValue"in r}function Sn(r){return Ft(r)||Qn(r)}function Fr(r){return!!r&&"arrayValue"in r}function pt(r){return!!r&&"nullValue"in r}function lt(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ar(r){return!!r&&"mapValue"in r}function Xi(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[zC])==null?void 0:n.stringValue)===QC}function Qa(r){var e,t;return(t=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Fs])==null?void 0:t.arrayValue}function Ds(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Jr(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ds(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ds(r.arrayValue.values[t]);return e}return{...r}}function G_(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===M_}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ar(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(t)}setAll(e){let t=wt.emptyPath(),n={},s=[];e.forEach(((o,B)=>{if(!t.isImmediateParentOf(B)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=B.popLast()}o?n[B.lastSegment()]=Ds(o):s.push(B.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Ar(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Ar(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Jr(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new It(Ds(this.value))}}/**
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
 */function To(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Os(e)?"-0":e}}function NB(r){return{integerValue:""+r}}function OB(r,e,t){return x_(e)?NB(e):To(r,e)}/**
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
 */class Ao{constructor(){this._=void 0}}function H_(r,e,t){return r instanceof $a?(function(s,i){const o={fields:{[jC]:{stringValue:JC},[KC]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&yo(i)&&(i=Ys(i)),i&&(o.fields[qC]=i),{mapValue:o}})(t,e):r instanceof Zi?$C(r,e):r instanceof eo?WC(r,e):r instanceof to?(function(s,i){const o=J_(s,i),B=no(o)+no(s.l);return Ft(o)&&Ft(s.l)?NB(B):To(s.serializer,B)})(r,e):r instanceof Wa?(function(s,i){return Fl(s,i,Math.min)})(r,e):r instanceof Ya?(function(s,i){return Fl(s,i,Math.max)})(r,e):void 0}function U_(r,e,t){return r instanceof Zi?$C(r,e):r instanceof eo?WC(r,e):t}function J_(r,e){return r instanceof to?Sn(e)?e:{integerValue:0}:null}class $a extends Ao{}class Zi extends Ao{constructor(e){super(),this.elements=e}}function $C(r,e){const t=YC(e);for(const n of r.elements)t.some((s=>yt(s,n)))||t.push(n);return{arrayValue:{values:t}}}class eo extends Ao{constructor(e){super(),this.elements=e}}function WC(r,e){let t=YC(e);for(const n of r.elements)t=t.filter((s=>!yt(s,n)));return{arrayValue:{values:t}}}class FB extends Ao{constructor(e,t){super(),this.serializer=e,this.l=t}}class to extends FB{}class Wa extends FB{}class Ya extends FB{}function Fl(r,e,t){if(!Sn(e))return r.l;const n=t(no(e),no(r.l));return Ft(e)&&Ft(r.l)?NB(n):To(r.serializer,n)}function no(r){return ye(r.integerValue||r.doubleValue)}function YC(r){return Fr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function j_(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof Zi&&s instanceof Zi||n instanceof eo&&s instanceof eo?br(n.elements,s.elements,yt):n instanceof to&&s instanceof to||n instanceof Wa&&s instanceof Wa||n instanceof Ya&&s instanceof Ya?yt(n.l,s.l):n instanceof $a&&s instanceof $a})(r.transform,e.transform)}class Yn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yn}static exists(e){return new Yn(void 0,e)}static updateTime(e){return new Yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mi(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class LB{}function XC(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new K_(r.key,Yn.none()):new kB(r.key,r.data,Yn.none());{const t=r.data,n=It.empty();let s=new Oe(wt.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new vo(r.key,n,new Dn(s.toArray()),Yn.none())}}function q_(r,e,t){r instanceof kB?(function(s,i,o){const B=s.value.clone(),u=kl(s.fieldTransforms,i,o.transformResults);B.setAll(u),i.convertToFoundDocument(o.version,B).setHasCommittedMutations()})(r,e,t):r instanceof vo?(function(s,i,o){if(!Mi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const B=kl(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(ZC(s)),u.setAll(B),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ws(r,e,t,n){return r instanceof kB?(function(i,o,B,u){if(!Mi(i.precondition,o))return B;const c=i.value.clone(),h=xl(i.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null})(r,e,t,n):r instanceof vo?(function(i,o,B,u){if(!Mi(i.precondition,o))return B;const c=xl(i.fieldTransforms,u,o),h=o.data;return h.setAll(ZC(i)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),B===null?null:B.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(r,e,t,n):(function(i,o,B){return Mi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):B})(r,e,t)}function Ll(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&br(n,s,((i,o)=>j_(i,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class kB extends LB{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vo extends LB{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ZC(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function kl(r,e,t){const n=new Map;Y(r.length===t.length,32656,{h:t.length,T:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,B=e.data.field(i.field);n.set(i.field,U_(o,B,t[s]))}return n}function xl(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,H_(i,o,e))}return n}class K_ extends LB{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ro{constructor(e,t){this.position=e,this.inclusive=t}}function Vl(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=W.comparator(W.fromName(o.referenceValue),t.key):n=ct(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ml(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!yt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ef{}class be extends ef{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Q_(e,t,n):t==="array-contains"?new Y_(e,n):t==="in"?new X_(e,n):t==="not-in"?new Z_(e,n):t==="array-contains-any"?new eD(e,n):new be(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new $_(e,n):new W_(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ct(t,this.value)):t!==null&&ke(this.value)===ke(t)&&this.matchesComparison(ct(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends ef{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new Rt(e,t)}matches(e){return tf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function tf(r){return r.op==="and"}function nf(r){return z_(r)&&tf(r)}function z_(r){for(const e of r.filters)if(e instanceof Rt)return!1;return!0}function Xa(r){if(r instanceof be)return r.field.canonicalString()+r.op.toString()+Or(r.value);if(nf(r))return r.filters.map((e=>Xa(e))).join(",");{const e=r.filters.map((t=>Xa(t))).join(",");return`${r.op}(${e})`}}function rf(r,e){return r instanceof be?(function(n,s){return s instanceof be&&n.op===s.op&&n.field.isEqual(s.field)&&yt(n.value,s.value)})(r,e):r instanceof Rt?(function(n,s){return s instanceof Rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,B)=>i&&rf(o,s.filters[B])),!0):!1})(r,e):void ee(19439)}function sf(r){return r instanceof be?(function(t){return`${t.field.canonicalString()} ${t.op} ${Or(t.value)}`})(r):r instanceof Rt?(function(t){return t.op.toString()+" {"+t.getFilters().map(sf).join(" ,")+"}"})(r):"Filter"}class Q_ extends be{constructor(e,t,n){super(e,t,n),this.key=W.fromName(n.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class $_ extends be{constructor(e,t){super(e,"in",t),this.keys=of("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class W_ extends be{constructor(e,t){super(e,"not-in",t),this.keys=of("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function of(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>W.fromName(n.referenceValue)))}class Y_ extends be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fr(t)&&Ls(t.arrayValue,this.value)}}class X_ extends be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ls(this.value.arrayValue,t)}}class Z_ extends be{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ls(this.value.arrayValue,t)}}class eD extends be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fr(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>Ls(this.value.arrayValue,n)))}}/**
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
 */class so{constructor(e,t="asc"){this.field=e,this.dir=t}}function tD(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new we(0,0))}static max(){return new ne(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class $e{constructor(e,t,n,s,i,o,B){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=B}static newInvalidDocument(e){return new $e(e,0,ne.min(),ne.min(),ne.min(),It.empty(),0)}static newFoundDocument(e,t,n,s){return new $e(e,1,t,ne.min(),n,s,0)}static newNoDocument(e,t){return new $e(e,2,t,ne.min(),ne.min(),It.empty(),0)}static newUnknownDocument(e,t){return new $e(e,3,t,ne.min(),ne.min(),It.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const ks=-1;function nD(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(n===1e9?new we(t+1,0):new we(t,n));return new Nn(s,W.empty(),e)}function rD(r){return new Nn(r.readTime,r.key,ks)}class Nn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Nn(ne.min(),W.empty(),ks)}static max(){return new Nn(ne.max(),W.empty(),ks)}}function sD(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(r.documentKey,e.documentKey),t!==0?t:oe(r.largestBatchId,e.largestBatchId))}/**
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
 */class iD{constructor(e,t=null,n=[],s=[],i=null,o=null,B=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=B,this.R=null}}function Gl(r,e=null,t=[],n=[],s=null,i=null,o=null){return new iD(r,e,t,n,s,i,o)}function af(r){const e=he(r);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>Xa(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Io(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Or(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Or(n))).join(",")),e.R=t}return e.R}function Bf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!tD(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!rf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ml(r.startAt,e.startAt)&&Ml(r.endAt,e.endAt)}function Kn(r){return!!r.isCorePipeline}function uf(r){return!!r.path&&W.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Xs{constructor(e,t=null,n=[],s=[],i=null,o="F",B=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=B,this.endAt=u,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function oD(r,e,t,n,s,i,o,B){return new Xs(r,e,t,n,s,i,o,B)}function xB(r){return new Xs(r)}function Hl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function aD(r){return W.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function cf(r){return r.collectionGroup!==null}function ys(r){const e=he(r);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let B=new Oe(wt.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((c=>{c.isInequality()&&(B=B.add(c.field))}))})),B})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new so(i,n))})),t.has(wt.keyField().canonicalString())||e.I.push(new so(wt.keyField(),n))}return e.I}function xt(r){const e=he(r);return e.A||(e.A=BD(e,ys(r))),e.A}function BD(r,e){if(r.limitType==="F")return Gl(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new so(s.field,i)}));const t=r.endAt?new ro(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new ro(r.startAt.position,r.startAt.inclusive):null;return Gl(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Za(r,e){const t=r.filters.concat([e]);return new Xs(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function io(r,e,t){return new Xs(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function uD(r,e){return Bf(xt(r),xt(e))&&r.limitType===e.limitType}function Is(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>sf(s))).join(", ")}]`),Io(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>Or(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>Or(s))).join(",")),`Target(${n})`})(xt(r))}; limitType=${r.limitType})`}function Ro(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):W.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of ys(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(o,B,u){const c=Vl(o,B,u);return o.inclusive?c<=0:c<0})(n.startAt,ys(n),s)||n.endAt&&!(function(o,B,u){const c=Vl(o,B,u);return o.inclusive?c>=0:c>0})(n.endAt,ys(n),s))})(r,e)}function VB(r){return(e,t)=>{let n=!1;for(const s of ys(r)){const i=cD(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function cD(r,e,t){const n=r.field.isKeyField()?W.comparator(e.key,t.key):(function(i,o,B){const u=o.data.field(i),c=B.data.field(i);return u!==null&&c!==null?ct(u,c):ee(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return ee(19790,{direction:r.dir})}}/**
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
 */class lD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Re,ce;function lf(r){if(r===void 0)return tn("GRPC error has no .code"),V.UNKNOWN;switch(r){case Re.OK:return V.OK;case Re.CANCELLED:return V.CANCELLED;case Re.UNKNOWN:return V.UNKNOWN;case Re.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Re.INTERNAL:return V.INTERNAL;case Re.UNAVAILABLE:return V.UNAVAILABLE;case Re.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Re.NOT_FOUND:return V.NOT_FOUND;case Re.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Re.ABORTED:return V.ABORTED;case Re.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Re.DATA_LOSS:return V.DATA_LOSS;default:return ee(39323,{code:r})}}(ce=Re||(Re={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Br{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Jr(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return GC(this.inner)}size(){return this.innerSize}}/**
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
 */const hD=new Ae(W.comparator);function gt(){return hD}const hf=new Ae(W.comparator);function mr(...r){let e=hf;for(const t of r)e=e.insert(t.key,t);return e}function CD(r){let e=hf;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function En(){return Ts()}function Cf(){return Ts()}function Ts(){return new Br((r=>r.toString()),((r,e)=>r.isEqual(e)))}const fD=new Oe(W.comparator);function ue(...r){let e=fD;for(const t of r)e=e.add(t);return e}const dD=new Oe(oe);function pD(){return dD}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function gD(){return new TextEncoder}/**
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
 */const mD=new Tn([4294967295,4294967295],0);function Ul(r){const e=gD().encode(r),t=new vC;return t.update(e),new Uint8Array(t.digest())}function Jl(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tn([t,n],0),new Tn([s,i],0)]}class MB{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ps(`Invalid padding: ${t}`);if(n<0)throw new ps(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new ps(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ps(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=Tn.fromNumber(this.m)}v(e,t,n){let s=e.add(t.multiply(Tn.fromNumber(n)));return s.compare(mD)===1&&(s=new Tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.p).toNumber()}S(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=Ul(e),[n,s]=Jl(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,s,i);if(!this.S(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new MB(i,s,t);return n.forEach((B=>o.insert(B))),o}insert(e){if(this.m===0)return;const t=Ul(e),[n,s]=Jl(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,s,i);this.D(o)}}D(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zs{constructor(e,t,n,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,ei.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Zs(ne.min(),s,new Ae(oe),gt(),gt(),ue())}}class ei{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ei(n,t,ue(),ue(),ue())}}/**
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
 */class Gi{constructor(e,t,n,s){this.C=e,this.removedTargetIds=t,this.key=n,this.F=s}}class ff{constructor(e,t){this.targetId=e,this.O=t}}class df{constructor(e,t,n=Le.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class jl{constructor(e){this.targetId=e,this.M=0,this.N=ql(),this.L=Le.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=ue(),t=ue(),n=ue();return this.N.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:ee(38017,{changeType:i})}})),new ei(this.L,this.B,e,t,n)}W(){this.U=!1,this.N=ql()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,Y(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const hs="WatchChangeAggregator";class ED{constructor(e){this.Z=e,this.X=new Map,this.ee=gt(),this.te=Ri(),this.ne=gt(),this.re=Ri(),this.ie=new Ae(oe)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,(t=>{const n=this.X.get(t);if(n)switch(e.state){case 0:this.ue(t)&&n.$(e.resumeToken);break;case 1:n.J(),n.k||n.W(),n.$(e.resumeToken);break;case 2:n.J(),n.k||this.removeTarget(t);break;case 3:this.ue(t)&&(n.Y(),n.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),n.$(e.resumeToken));break;default:ee(56790,{state:e.state})}else j(hs,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach(((n,s)=>{this.ue(s)&&t(s)}))}le(e){var t;return Kn(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:uf(e)}Ee(e){const t=e.targetId,n=e.O.count,s=this.he(t);if(s){const i=s.target;if(this.le(i))if(n===0){const o=new W(Kn(i)?fe.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,o,$e.newNoDocument(o,ne.min()))}else Y(n===1,20013,"Single document existence filter with count: "+n);else{const o=this.Te(t);if(o!==n){const B=this.Pe(e),u=B?this.Re(B,e,o):1;if(u!==0){this.ce(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,c)}}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,B;try{o=bn(n).toUint8Array()}catch(u){if(u instanceof UC)return vt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{B=new MB(o,s,i)}catch(u){return vt(u instanceof ps?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return B.m===0?null:B}Re(e,t,n){return t.O.count===n-this.Ve(e,t.targetId)?0:2}Ve(e,t){const n=this.Z.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const o=this.Z.Ae(),B=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(B)||(this.oe(t,i,null),s++)})),s}de(e){const t=new Map;this.X.forEach(((i,o)=>{const B=this.he(o);if(B){if(i.current&&this.le(B.target)){const u=Kn(B.target)?fe.fromString(B.target.getPipelineDocuments()[0]):B.target.path,c=new W(u);this.fe(c).has(o)||this.me(o,c)||this.oe(o,c,$e.newNoDocument(c,e))}i.q&&(t.set(o,i.K()),i.W())}}));let n=ue();this.re.forEach(((i,o)=>{let B=!0;o.forEachWhile((u=>{const c=this.he(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(B=!1,!1)})),B&&(n=n.add(i))})),this.ee.forEach(((i,o)=>o.setReadTime(e))),this.ne.forEach(((i,o)=>o.setReadTime(e)));const s=new Zs(e,t,this.ie,this.ee,this.ne,n);return this.ee=gt(),this.te=Ri(),this.ne=gt(),this.re=Ri(),this.ie=new Ae(oe),s}_e(e,t){const n=this.X.get(e);if(!n||!this.ue(e))return void j(hs,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.me(e,t.key)?2:0;n.G(t.key,s),Kn(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,n){const s=this.X.get(e);s&&this.ue(e)?(this.me(e,t)?s.G(t,1):s.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),n&&(Kn(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,n):this.ee=this.ee.insert(t,n))):j(hs,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const n=t.K();return this.Z.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}H(e){let t=this.X.get(e);t||(j(hs,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new jl(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new Oe(oe),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new Oe(oe),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||j(hs,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new jl(e)),this.Z.getRemoteKeysForTarget(e).forEach((t=>{this.oe(e,t,null)}))}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function Ri(){return new Ae(W.comparator)}function ql(){return new Ae(W.comparator)}const _D={asc:"ASCENDING",desc:"DESCENDING"},DD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wD={and:"AND",or:"OR"};class yD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function eB(r,e){return r.useProto3Json||Io(e)?e:{value:e}}function oo(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GB(r){const e=Pn(r);return new we(e.seconds,e.nanos)}function pf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Ia(r,e){return oo(r,e.toTimestamp())}function vr(r){return Y(!!r,49232),ne.fromTimestamp(GB(r))}function HB(r,e){return tB(r,e).canonicalString()}function tB(r,e){const t=(function(s){return new fe(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function gf(r){const e=fe.fromString(r);return Y(wf(e),10190,{key:e.toString()}),e}function ID(r,e){return HB(r.databaseId,e.path)}function Ta(r,e){const t=gf(e);if(t.get(1)!==r.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new W(Ef(t))}function mf(r,e){return HB(r.databaseId,e)}function TD(r){const e=gf(r);return e.length===4?fe.emptyPath():Ef(e)}function Kl(r){return new fe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ef(r){return Y(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function AD(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee(39313,{state:c})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(c,h){return c.useProto3Json?(Y(h===void 0||typeof h=="string",58123),Le.fromBase64String(h||"")):(Y(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Le.fromUint8Array(h||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,B=o&&(function(c){const h=c.code===void 0?V.UNKNOWN:lf(c.code);return new q(h,c.message||"")})(o);t=new df(n,s,i,B||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Ta(r,n.document.name),i=vr(n.document.updateTime),o=n.document.createTime?vr(n.document.createTime):ne.min(),B=new It({mapValue:{fields:n.document.fields}}),u=$e.newFoundDocument(s,i,o,B),c=n.targetIds||[],h=n.removedTargetIds||[];t=new Gi(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Ta(r,n.document),i=n.readTime?vr(n.readTime):ne.min(),o=$e.newNoDocument(s,i),B=n.removedTargetIds||[];t=new Gi([],B,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Ta(r,n.document),i=n.removedTargetIds||[];t=new Gi([],i,s,null)}else{if(!("filter"in e))return ee(11601,{ye:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new lD(s,i),B=n.targetId;t=new ff(B,o)}}return t}function vD(r,e){return{documents:[mf(r,e.path)]}}function RD(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=mf(r,s);const i=(function(c){if(c.length!==0)return Df(Rt.create(c,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(c){if(c.length!==0)return c.map((h=>(function(g){return{field:Er(g.field),direction:ND(g.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const B=eB(r,e.limit);return B!==null&&(t.structuredQuery.limit=B),e.startAt&&(t.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(e.endAt)),{be:t,parent:s}}function PD(r){let e=TD(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){Y(n===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(f){const g=_f(f);return g instanceof Rt&&nf(g)?g.getFilters():[g]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((g=>(function(R){return new so(_r(R.field),(function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(g)))})(t.orderBy));let B=null;t.limit&&(B=(function(f){let g;return g=typeof f=="object"?f.value:f,Io(g)?null:g})(t.limit));let u=null;t.startAt&&(u=(function(f){const g=!!f.before,T=f.values||[];return new ro(T,g)})(t.startAt));let c=null;return t.endAt&&(c=(function(f){const g=!f.before,T=f.values||[];return new ro(T,g)})(t.endAt)),oD(e,s,o,i,B,"F",u,c)}function bD(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function SD(r,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(r)))}}}}function _f(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=_r(t.unaryFilter.field);return be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=_r(t.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_r(t.unaryFilter.field);return be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_r(t.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(r):r.fieldFilter!==void 0?(function(t){return be.create(_r(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Rt.create(t.compositeFilter.filters.map((n=>_f(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(t.compositeFilter.op))})(r):ee(30097,{filter:r})}function ND(r){return _D[r]}function OD(r){return DD[r]}function FD(r){return wD[r]}function Er(r){return{fieldPath:r.canonicalString()}}function _r(r){return wt.fromServerFormat(r.fieldPath)}function Df(r){return r instanceof be?(function(t){if(t.op==="=="){if(lt(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NAN"}};if(pt(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(lt(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NOT_NAN"}};if(pt(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Er(t.field),op:OD(t.op),value:t.value}}})(r):r instanceof Rt?(function(t){const n=t.getFilters().map((s=>Df(s)));return n.length===1?n[0]:{compositeFilter:{op:FD(t.op),filters:n}}})(r):ee(54877,{filter:r})}function wf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function yf(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}function xs(r,e){const t={fields:{}};return e.forEach(((n,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=n._toProto(r)})),{mapValue:t}}function If(r){return{stringValue:r}}/**
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
 */function Po(r){return new yD(r,!0)}/**
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
 */class _t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _t(Le.fromBase64String(e))}catch(t){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _t(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_t._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ws(e,_t._jsonSchema))return _t.fromBase64String(e.bytes)}}_t._jsonSchemaVersion="firestore/bytes/1.0",_t._jsonSchema={type:Se("string",_t._jsonSchemaVersion),bytes:Se("string")};/**
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
 */class UB{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function LD(){return new UB(Ot)}/**
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
 */class Tf{constructor(e){this._methodName=e}}/**
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
 */class Vt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vt._jsonSchemaVersion}}static fromJSON(e){if(Ws(e,Vt._jsonSchema))return new Vt(e.latitude,e.longitude)}}Vt._jsonSchemaVersion="firestore/geoPoint/1.0",Vt._jsonSchema={type:Se("string",Vt._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};/**
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
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */class Xn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Af{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Qe.UNAUTHENTICATED)))}shutdown(){}}class xD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class VD{constructor(e){this.Se=e,this.currentUser=Qe.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.xe===void 0,42304);let n=this.De;const s=u=>this.De!==n?(n=this.De,t(u)):Promise.resolve();let i=new Xn;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new Xn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},B=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.xe&&(this.auth.addAuthTokenListener(this.xe),o())};this.Se.onInit((u=>B(u))),setTimeout((()=>{if(!this.auth){const u=this.Se.getImmediate({optional:!0});u?B(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xn)}}),0),o()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.De!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Y(typeof n.accessToken=="string",31837,{Fe:n}),new Af(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string",2055,{Oe:e}),new Qe(e)}}class MD{constructor(e,t,n){this.Me=e,this.Ne=t,this.Le=n,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class GD{constructor(e,t,n){this.Me=e,this.Ne=t,this.Le=n}getToken(){return Promise.resolve(new MD(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable((()=>t(Qe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class zl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HD{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,dt(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){Y(this.xe===void 0,3512);const n=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.qe;return this.qe=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.$e)return Promise.resolve(new zl(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Y(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new zl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}function vf(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */class UD{Ke(e){}shutdown(){}}/**
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
 */const Ql="ConnectivityMonitor";class $l{constructor(){this.We=()=>this.Qe(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.We),window.addEventListener("offline",this.Ge)}Qe(){j(Ql,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){j(Ql,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Pi=null;function nB(){return Pi===null?Pi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Pi++,"0x"+Pi.toString(16)}/**
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
 */const Aa="RestConnection",JD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class jD{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${n}/databases/${s}`,this.et=this.databaseId.database===Ka?`project_id=${n}`:`project_id=${n}&database_id=${s}`}tt(e,t,n,s,i){const o=nB(),B=this.nt(e,t.toUriEncodedString());j(Aa,`Sending RPC '${e}' ${o}:`,B,n);const u={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(u,s,i);const{host:c}=new URL(B),h=ar(c);return this.it(e,B,u,n,h).then((f=>(j(Aa,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw vt(Aa,`RPC '${e}' ${o} failed with error: `,f,"url: ",B,"request:",n),f}))}st(e,t,n,s,i,o){return this.tt(e,t,n,s,i)}rt(e,t,n){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ur})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s)),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}nt(e,t){const n=JD[e];let s=`${this.Ze}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class qD{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
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
 */const ze="WebChannelConnection",Cs=(r,e,t)=>{r.listen(e,(n=>{try{t(n)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Rr extends jD{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!Rr.gt){const e=SC();Cs(e,bC.STAT_EVENT,(t=>{t.stat===Ha.PROXY?j(ze,"STAT_EVENT: detected buffering proxy"):t.stat===Ha.NOPROXY&&j(ze,"STAT_EVENT: detected no buffering proxy")})),Rr.gt=!0}}it(e,t,n,s,i){const o=nB();return new Promise(((B,u)=>{const c=new RC;c.setWithCredentials(!0),c.listenOnce(PC.COMPLETE,(()=>{try{switch(c.getLastErrorCode()){case xi.NO_ERROR:const f=c.getResponseJson();j(ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),B(f);break;case xi.TIMEOUT:j(ze,`RPC '${e}' ${o} timed out`),u(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case xi.HTTP_ERROR:const g=c.getStatus();if(j(ze,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const R=T==null?void 0:T.error;if(R&&R.status&&R.message){const x=(function(z){const se=z.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(se)>=0?se:V.UNKNOWN})(R.status);u(new q(x,R.message))}else u(new q(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new q(V.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{yt:e,streamId:o,wt:c.getLastErrorCode(),bt:c.getLastError()})}}finally{j(ze,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(s);j(ze,`RPC '${e}' ${o} sending request:`,s),c.send(t,"POST",h,n,15)}))}vt(e,t,n){const s=nB(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),B={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(B.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(B.useFetchStreams=!0),this.rt(B.initMessageHeaders,t,n),B.encodeInitMessageHeaders=!0;const c=i.join("");j(ze,`Creating RPC '${e}' stream ${s}: ${c}`,B);const h=o.createWebChannel(c,B);this.St(h);let f=!1,g=!1;const T=new qD({_t:R=>{g?j(ze,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(f||(j(ze,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),j(ze,`RPC '${e}' stream ${s} sending:`,R),h.send(R))},ot:()=>h.close()});return Cs(h,ds.EventType.OPEN,(()=>{g||(j(ze,`RPC '${e}' stream ${s} transport opened.`),T.Rt())})),Cs(h,ds.EventType.CLOSE,(()=>{g||(g=!0,j(ze,`RPC '${e}' stream ${s} transport closed`),T.At(),this.Dt(h))})),Cs(h,ds.EventType.ERROR,(R=>{g||(g=!0,vt(ze,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),T.At(new q(V.UNAVAILABLE,"The operation could not be completed")))})),Cs(h,ds.EventType.MESSAGE,(R=>{var x;if(!g){const J=R.data[0];Y(!!J,16349);const z=J,se=(z==null?void 0:z.error)||((x=z[0])==null?void 0:x.error);if(se){j(ze,`RPC '${e}' stream ${s} received error:`,se);const ae=se.status;let ve=(function(A){const E=Re[A];if(E!==void 0)return lf(E)})(ae),Ge=se.message;ae==="NOT_FOUND"&&Ge.includes("database")&&Ge.includes("does not exist")&&Ge.includes(this.databaseId.database)&&vt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ve===void 0&&(ve=V.INTERNAL,Ge="Unknown error status: "+ae+" with message "+se.message),g=!0,T.At(new q(ve,Ge)),h.close()}else j(ze,`RPC '${e}' stream ${s} received:`,J),T.Vt(J)}})),Rr.ft(),setTimeout((()=>{T.It()}),0),T}terminate(){this.dt.forEach((e=>e.close())),this.dt=[]}St(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter((t=>t===e))}rt(e,t,n){super.rt(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return NC()}}/**
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
 */function KD(r){return new Rr(r)}Rr.gt=!1;class Rf{constructor(e,t,n=1e3,s=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=n,this.Ft=s,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),n=Math.max(0,Date.now()-this.Lt),s=Math.max(0,t-n);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,s,(()=>(this.Lt=Date.now(),e()))),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
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
 */const Wl="PersistentStream";class zD{constructor(e,t,n,s,i,o,B,u){this.xt=e,this.$t=n,this.Kt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=B,this.listener=u,this.state=0,this.Wt=0,this.Qt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new Rf(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Qt===null&&(this.Qt=this.xt.enqueueAfterDelay(this.$t,6e4,(()=>this.en())))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Qt&&(this.Qt.cancel(),this.Qt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Wt++,e!==4?this.jt.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(tn(t.toString()),tn("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.Wt===t&&this.an(n,s)}),(n=>{e((()=>{const s=new q(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.un(s)}))}))}an(e,t){const n=this._n(this.Wt);this.stream=this.cn(e,t),this.stream.ut((()=>{n((()=>this.listener.ut()))})),this.stream.lt((()=>{n((()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,(()=>(this.Jt()&&(this.state=3),Promise.resolve()))),this.listener.lt())))})),this.stream.ht((s=>{n((()=>this.un(s)))})),this.stream.onMessage((s=>{n((()=>++this.zt==1?this.En(s):this.onNext(s)))}))}Yt(){this.state=5,this.jt.Ut((async()=>{this.state=0,this.start()}))}un(e){return j(Wl,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget((()=>this.Wt===e?t():(j(Wl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class QD extends zD{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}cn(e,t){return this.connection.vt("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=AD(this.serializer,e),n=(function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?vr(o.readTime):ne.min()})(e);return this.listener.hn(t,n)}Tn(e){const t={};t.database=Kl(this.serializer),t.addTarget=(function(i,o){let B;const u=o.target;if(B=Kn(u)?{pipelineQuery:SD(i,u)}:uf(u)?{documents:vD(i,u)}:{query:RD(i,u).be},B.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){B.resumeToken=pf(i,o.resumeToken);const c=eB(i,o.expectedCount);c!==null&&(B.expectedCount=c)}else if(o.snapshotVersion.compareTo(ne.min())>0){B.readTime=oo(i,o.snapshotVersion.toTimestamp());const c=eB(i,o.expectedCount);c!==null&&(B.expectedCount=c)}return B})(this.serializer,e);const n=bD(this.serializer,e);n&&(t.labels=n),this.tn(t)}Pn(e){const t={};t.database=Kl(this.serializer),t.removeTarget=e,this.tn(t)}}/**
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
 */class $D{}class WD extends $D{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.fn=!1}mn(){if(this.fn)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,n,s){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.tt(e,tB(t,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(V.UNKNOWN,i.toString())}))}st(e,t,n,s,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,B])=>this.connection.st(e,tB(t,n),s,o,B,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())}))}terminate(){this.fn=!0,this.connection.terminate()}}function YD(r,e,t,n){return new WD(r,e,t,n)}/**
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
 */const XD="ComponentProvider",Yl=new Map;function ZD(r,e,t,n,s){return new F_(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,vf(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n,s._customHeaders,s.grpcFlowControlWindow)}/**
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
 */const Xl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Pf=41943040;class it{static withCacheSize(e){return new it(e,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it(Pf,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);/**
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
 */class bo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.pn(n),this.gn=n=>t.writeSequenceNumber(n))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}bo.yn=-1;/**
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
 */const ew="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function So(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==ew)throw r;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):L.reject(t)}static resolve(e){return new L(((t,n)=>{t(e)}))}static reject(e){return new L(((t,n)=>{n(e)}))}static waitFor(e){return new L(((t,n)=>{let s=0,i=0,o=!1;e.forEach((B=>{++s,B.next((()=>{++i,o&&i===s&&t()}),(u=>n(u)))})),o=!0,i===s&&t()}))}static or(e){let t=L.resolve(!1);for(const n of e)t=t.next((s=>s?L.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,i)=>{n.push(t.call(this,s,i))})),this.waitFor(n)}static mapArray(e,t){return new L(((n,s)=>{const i=e.length,o=new Array(i);let B=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next((h=>{o[c]=h,++B,B===i&&n(o)}),(h=>s(h)))}}))}static doWhile(e,t){return new L(((n,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):n()};i()}))}}function nw(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jr(r){return r.name==="IndexedDbTransactionError"}/**
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
 */const Zl="LruGarbageCollector",rw=1048576;function eh([r,e],[t,n]){const s=oe(r,t);return s===0?oe(e,n):s}class sw{constructor(e){this.Jn=e,this.buffer=new Oe(eh),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();eh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iw{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){j(Zl,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jr(t)?j(Zl,"Ignoring IndexedDB error during garbage collection: ",t):await So(t)}await this.tr(3e5)}))}}class ow{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return L.resolve(bo.yn);const n=new sw(t);return this.nr.forEachTarget(e,(s=>n.Xn(s.sequenceNumber))).next((()=>this.nr.ir(e,(s=>n.Xn(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.nr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Xl)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xl):this.sr(e,t)))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let n,s,i,o,B,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s)))).next((f=>(n=f,B=Date.now(),this.removeTargets(e,n,t)))).next((f=>(i=f,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((f=>(c=Date.now(),pr()<=ie.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(B-o)+`ms
	Removed ${i} targets in `+(u-B)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f}))))}}function aw(r,e){return new ow(r,e)}/**
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
 */const bf="firestore.googleapis.com",th=!0;class nh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bf,this.ssl=th}else this.host=e.host,this.ssl=e.ssl??th;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=Pf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rw)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(N_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vf(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new q(V.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(n,s){if(n===s)return!0;if(!n||!s)return!1;const i=Object.keys(n),o=Object.keys(s);if(i.length!==o.length)return!1;for(const B of i)if(n[B]!==s[B])return!1;return!0})(this._customHeaders,e._customHeaders)}}let No=class{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new kD;switch(n.type){case"firstParty":return new GD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Yl.get(t);n&&(j(XD,"Removing Datastore"),Yl.delete(t),n.terminate())})(this),Promise.resolve()}};function Bw(r,e,t,n={}){var c;r=Tr(r,No);const s=ar(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},B=`${e}:${t}`;s&&pB(`https://${B}`),i.host!==bf&&i.host!==B&&vt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:B,ssl:s,emulatorOptions:n};if(!nr(u,o)&&(r._setSettings(u),n.mockUserToken)){let h,f;if(typeof n.mockUserToken=="string")h=n.mockUserToken,f=Qe.MOCK_USER;else{h=Tp(n.mockUserToken,(c=r._app)==null?void 0:c.options.projectId);const g=n.mockUserToken.sub||n.mockUserToken.user_id;if(!g)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Qe(g)}r._authCredentials=new xD(new Af(h,f))}}/**
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
 */class xn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new xn(this.firestore,e,this._query)}}class Ne{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new An(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Ws(t,Ne._jsonSchema))return new Ne(e,n||null,new W(fe.fromString(t.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:Se("string",Ne._jsonSchemaVersion),referencePath:Se("string")};class An extends xn{constructor(e,t,n){super(e,t,xB(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new W(e))}withConverter(e){return new An(this.firestore,e,this._path)}}function uw(r,e,...t){if(r=Fe(r),HC("collection","path",e),r instanceof No){const n=fe.fromString(e,...t);return Rl(n),new An(r,null,n)}{if(!(r instanceof Ne||r instanceof An))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(fe.fromString(e,...t));return Rl(n),new An(r.firestore,null,n)}}function cw(r,e,...t){if(r=Fe(r),arguments.length===1&&(e=SB.newId()),HC("doc","path",e),r instanceof No){const n=fe.fromString(e,...t);return vl(n),new Ne(r,null,new W(n))}{if(!(r instanceof Ne||r instanceof An))throw new q(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(fe.fromString(e,...t));return vl(n),new Ne(r.firestore,r instanceof An?r.converter:null,new W(n))}}/**
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
 * Copyright 2024 Google LLC
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
 */class Bt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ws(e,Bt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Bt(e.vectorValues);throw new q(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bt._jsonSchemaVersion="firestore/vectorValue/1.0",Bt._jsonSchema={type:Se("string",Bt._jsonSchemaVersion),vectorValues:Se("object")};/**
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
 */const lw=/^__.*__$/;function Sf(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:r})}}class JB{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new JB({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ao(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Sf(this.dataSource)&&lw.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class hw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Po(e)}createContext(e,t,n,s=!1){return new JB({dataSource:e,methodName:t,targetDoc:n,path:wt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cw(r){const e=r._freezeSettings(),t=Po(r._databaseId);return new hw(r._databaseId,!!e.ignoreUndefinedProperties,t)}function fw(r,e,t,n=!1){return Lr(t,r.createContext(n?4:3,e))}function Lr(r,e,t){if(Nf(r=Fe(r)))return pw("Unsupported field value:",e,r),dw(r,e);if(r instanceof Tf)return(function(s,i){if(!Sf(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,i){const o=[];let B=0;for(const u of s){let c=Lr(u,i.childContextForArray(B));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),B++}return{arrayValue:{values:o}}})(r,e)}return(function(s,i,o){if((s=Fe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return OB(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const B=we.fromDate(s);return{timestampValue:oo(i.serializer,B)}}if(s instanceof we){const B=new we(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:oo(i.serializer,B)}}if(s instanceof Vt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _t)return{bytesValue:pf(i.serializer,s._byteString)};if(s instanceof Ne){const B=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(B))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${B.projectId}/${B.database}`);return{referenceValue:HB(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Bt)return(function(u,c){const h=u instanceof Bt?u.toArray():u;return{mapValue:{fields:{[zC]:{stringValue:QC},[Fs]:{arrayValue:{values:h.map((g=>{if(typeof g!="number")throw c.createError("VectorValues must only contain numeric values.");return To(c.serializer,g)}))}}}}}})(s,i);if(yf(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${wo(s)}`)})(r,e)}function dw(r,e){const t={};return GC(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jr(r,((n,s)=>{const i=Lr(s,e.childContextForField(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function Nf(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof we||r instanceof Vt||r instanceof _t||r instanceof Ne||r instanceof Tf||r instanceof Bt||yf(r))}function pw(r,e,t){if(!Nf(t)||!$s(t)){const n=wo(t);throw n==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+n)}}function jB(r,e,t){if((e=Fe(e))instanceof UB)return e._internalPath;if(typeof e=="string")return mw(r,e);throw ao("Field path arguments must be of type string or ",r,!1,void 0,t)}const gw=new RegExp("[~\\*/\\[\\]]");function mw(r,e,t){if(e.search(gw)>=0)throw ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new UB(...e.split("."))._internalPath}catch{throw ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ao(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let B=`Function ${e}() called with invalid data`;t&&(B+=" (via `toFirestore()`)"),B+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new q(V.INVALID_ARGUMENT,B+r+u)}function Of(r){return typeof r._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class Ye{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=It.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let B;i.nestedOptions&&$s(o)?B={mapValue:{fields:new Ye(i.nestedOptions).getOptionsProto(t,o)}}:o&&(B=Lr(o,t)??void 0),B&&n.set(wt.fromServerFormat(i.serverName),B)}}return n}getOptionsProto(e,t,n){const s=this._getKnownOptions(t,e);if(n){const i=new Map(S_(n,((o,B)=>[wt.fromServerFormat(B),o!==void 0?Lr(o,e):null])));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function Ew(r){return typeof r=="object"&&r!==null&&!!("nullValue"in r&&(r.nullValue===null||r.nullValue==="NULL_VALUE")||"booleanValue"in r&&(r.booleanValue===null||typeof r.booleanValue=="boolean")||"integerValue"in r&&(r.integerValue===null||typeof r.integerValue=="number"||typeof r.integerValue=="string")||"doubleValue"in r&&(r.doubleValue===null||typeof r.doubleValue=="number")||"timestampValue"in r&&(r.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(r.timestampValue))||"stringValue"in r&&(r.stringValue===null||typeof r.stringValue=="string")||"bytesValue"in r&&(r.bytesValue===null||r.bytesValue instanceof Uint8Array)||"referenceValue"in r&&(r.referenceValue===null||typeof r.referenceValue=="string")||"geoPointValue"in r&&(r.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(r.geoPointValue))||"arrayValue"in r&&(r.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(r.arrayValue))||"mapValue"in r&&(r.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!$s(t.fields))})(r.mapValue))||"fieldReferenceValue"in r&&(r.fieldReferenceValue===null||typeof r.fieldReferenceValue=="string")||"functionValue"in r&&(r.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(r.functionValue))||"pipelineValue"in r&&(r.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(r.pipelineValue)))}function _w(r){return new Bt(r)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function H(r){let e;return r instanceof ur?r:(e=$s(r)?Tw(r):r instanceof Array?Aw(r):Ff(r,void 0),e)}function va(r){if(r instanceof ur)return r;if(r instanceof Bt)return Vs(r);if(Array.isArray(r))return Vs(_w(r));throw new Error("Unsupported value: "+typeof r)}function qB(r){return V_(r)?Hi(r):H(r)}class ur{constructor(){this._protoValueType="ProtoValue"}add(e){return new F("add",[this,H(e)],"add")}asBoolean(){if(this instanceof On)return this;if(this instanceof Kr)return new kf(this);if(this instanceof qr)return new Iw(this);if(this instanceof F)return new Lf(this);throw new q("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new F("subtract",[this,H(e)],"subtract")}multiply(e){return new F("multiply",[this,H(e)],"multiply")}divide(e){return new F("divide",[this,H(e)],"divide")}mod(e){return new F("mod",[this,H(e)],"mod")}equal(e){return new F("equal",[this,H(e)],"equal").asBoolean()}notEqual(e){return new F("not_equal",[this,H(e)],"notEqual").asBoolean()}lessThan(e){return new F("less_than",[this,H(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new F("less_than_or_equal",[this,H(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new F("greater_than",[this,H(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new F("greater_than_or_equal",[this,H(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map((s=>H(s)));return new F("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new F("array_contains",[this,H(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new gs(e.map(H),"arrayContainsAll"):e;return new F("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new gs(e.map(H),"arrayContainsAny"):e;return new F("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new F("array_reverse",[this])}arrayLength(){return new F("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new gs(e.map(H),"equalAny"):e;return new F("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new gs(e.map(H),"notEqualAny"):e;return new F("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new F("exists",[this],"exists").asBoolean()}charLength(){return new F("char_length",[this],"charLength")}like(e){return new F("like",[this,H(e)],"like").asBoolean()}regexContains(e){return new F("regex_contains",[this,H(e)],"regexContains").asBoolean()}regexFind(e){return new F("regex_find",[this,H(e)],"regexFind")}regexFindAll(e){return new F("regex_find_all",[this,H(e)],"regexFindAll")}regexMatch(e){return new F("regex_match",[this,H(e)],"regexMatch").asBoolean()}stringContains(e){return new F("string_contains",[this,H(e)],"stringContains").asBoolean()}startsWith(e){return new F("starts_with",[this,H(e)],"startsWith").asBoolean()}endsWith(e){return new F("ends_with",[this,H(e)],"endsWith").asBoolean()}toLower(){return new F("to_lower",[this],"toLower")}toUpper(){return new F("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(H(e)),new F("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(H(e)),new F("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(H(e)),new F("rtrim",t,"rtrim")}type(){return new F("type",[this])}isType(e){return new F("is_type",[this,Vs(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(H);return new F("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new F("string_index_of",[this,H(e)],"stringIndexOf")}stringRepeat(e){return new F("string_repeat",[this,H(e)],"stringRepeat")}stringReplaceAll(e,t){return new F("string_replace_all",[this,H(e),H(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new F("string_replace_one",[this,H(e),H(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(H);return new F("concat",[this,...n],"concat")}reverse(){return new F("reverse",[this],"reverse")}arrayFilter(e,t){return new F("array_filter",[this,H(e),t],"arrayFilter")}arrayTransform(e,t){return new F("array_transform",[this,H(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new F("array_transform",[this,H(e),H(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,H(e)];return t!==void 0&&n.push(H(t)),new F("array_slice",n,"arraySlice")}arrayFirst(){return new F("array_first",[this],"arrayFirst")}arrayFirstN(e){return new F("array_first_n",[this,H(e)],"arrayFirstN")}arrayLast(){return new F("array_last",[this],"arrayLast")}arrayLastN(e){return new F("array_last_n",[this,H(e)],"arrayLastN")}arrayMaximum(){return new F("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new F("maximum_n",[this,H(e)],"arrayMaximumN")}arrayMinimum(){return new F("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new F("minimum_n",[this,H(e)],"arrayMinimumN")}arrayIndexOf(e){return new F("array_index_of",[this,H(e),H("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new F("array_index_of",[this,H(e),H("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new F("array_index_of_all",[this,H(e)],"arrayIndexOfAll")}byteLength(){return new F("byte_length",[this],"byteLength")}ceil(){return new F("ceil",[this])}floor(){return new F("floor",[this])}abs(){return new F("abs",[this])}exp(){return new F("exp",[this])}mapGet(e){return new F("map_get",[this,Vs(e)],"mapGet")}mapSet(e,t,...n){const s=[this,H(e),H(t),...n.map(H)];return new F("map_set",s,"mapSet")}mapKeys(){return new F("map_keys",[this],"mapKeys")}mapValues(){return new F("map_values",[this],"mapValues")}mapEntries(){return new F("map_entries",[this],"mapEntries")}getField(e){return new F("get_field",[this,H(e)],"get_field")}count(){return ft._create("count",[this],"count")}sum(){return ft._create("sum",[this],"sum")}average(){return ft._create("average",[this],"average")}minimum(){return ft._create("minimum",[this],"minimum")}maximum(){return ft._create("maximum",[this],"maximum")}first(){return ft._create("first",[this],"first")}last(){return ft._create("last",[this],"last")}arrayAgg(){return ft._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return ft._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return ft._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new F("maximum",[this,...n.map(H)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new F("minimum",[this,...n.map(H)],"minimum")}vectorLength(){return new F("vector_length",[this],"vectorLength")}cosineDistance(e){return new F("cosine_distance",[this,va(e)],"cosineDistance")}dotProduct(e){return new F("dot_product",[this,va(e)],"dotProduct")}euclideanDistance(e){return new F("euclidean_distance",[this,va(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new F("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new F("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new F("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new F("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new F("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new F("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new F("timestamp_add",[this,H(e),H(t)],"timestampAdd")}timestampSubtract(e,t){return new F("timestamp_subtract",[this,H(e),H(t)],"timestampSubtract")}timestampDiff(e,t){return new F("timestamp_diff",[this,qB(e),H(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,H(e)];return t&&n.push(H(t)),new F("timestamp_extract",n,"timestampExtract")}documentId(){return new F("document_id",[this],"documentId")}parent(){return new F("parent",[this],"parent")}substring(e,t){const n=H(e);return new F("substring",t===void 0?[this,n]:[this,n,H(t)],"substring")}arrayGet(e){return new F("array_get",[this,H(e)],"arrayGet")}isError(){return new F("is_error",[this],"isError").asBoolean()}ifError(e){const t=new F("if_error",[this,H(e)],"ifError");return e instanceof On?t.asBoolean():t}isAbsent(){return new F("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new F("map_remove",[this,H(e)],"mapRemove")}mapMerge(e,...t){const n=H(e),s=t.map(H);return new F("map_merge",[this,n,...s],"mapMerge")}pow(e){return new F("pow",[this,H(e)])}trunc(e){return e===void 0?new F("trunc",[this]):new F("trunc",[this,H(e)],"trunc")}round(e){return e===void 0?new F("round",[this]):new F("round",[this,H(e)],"round")}collectionId(){return new F("collection_id",[this])}length(){return new F("length",[this])}ln(){return new F("ln",[this])}sqrt(){return new F("sqrt",[this])}stringReverse(){return new F("string_reverse",[this])}ifAbsent(e){return new F("if_absent",[this,H(e)],"ifAbsent")}ifNull(e){return new F("if_null",[this,H(e)],"ifNull")}coalesce(e,...t){return new F("coalesce",[this,H(e),...t.map(H)],"coalesce")}join(e){return new F("join",[this,H(e)],"join")}log10(){return new F("log10",[this])}arraySum(){return new F("sum",[this])}split(e){return new F("split",[this,H(e)])}timestampTruncate(e,t){const n=[this,H(e)];return t&&n.push(H(t)),new F("timestamp_trunc",n)}ascending(){return vw(this)}descending(){return Rw(this)}as(e){return new ww(this,e,"as")}}class ft{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const s=new ft(e,t);return s._methodName=n,s}as(e){return new Dw(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class Dw{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class ww{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class gs extends ur{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map((t=>t._toProto(e)))}}}_readUserData(e){this.ur.forEach((t=>t._readUserData(e)))}}class qr extends ur{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new F("geo_distance",[this,H(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Hi(r){return yw(r,"field")}function yw(r,e){return new qr(typeof r=="string"?Ot===r?LD()._internalPath:jB("field",r):r._internalPath,e)}class Kr extends ur{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Kr(e,void 0);return t._protoValue=e,t}_toProto(e){return Y(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,Ew(this._protoValue)||(this._protoValue=Lr(this.value,e))}}function Vs(r,e){return Ff(r,"constant")}function Ff(r,e){const t=new Kr(r,e);return typeof r=="boolean"?new kf(t):t}class F extends ur{constructor(e,t,n,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Ye({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((n=>n._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class On extends ur{get _methodName(){return this._expr._methodName}countIf(){return ft._create("count_if",[this],"countIf")}not(){return new F("not",[this],"not").asBoolean()}conditional(e,t){return new F("conditional",[this,e,t],"conditional")}ifError(e){const t=H(e),n=new F("if_error",[this,t],"ifError");return t instanceof On?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Lf extends On{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class kf extends On{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class Iw extends On{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function Tw(r,e){const t=[];for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)){const s=r[n];t.push(Vs(n)),t.push(H(s))}return new F("map",t,"map")}function Aw(r){return(function(t,n){return new F("array",t.map((s=>H(s))),n)})(r,"array")}function vw(r){return new xf(qB(r),"ascending","ascending")}function Rw(r){return new xf(qB(r),"descending","descending")}class xf{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:If(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class mt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Vf extends mt{get _name(){return"add_fields"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[xs(e,this.fields)]}}_readUserData(e){super._readUserData(e),Fn(this.fields,e)}}class Mf extends mt{get _name(){return"aggregate"}get _optionsUtil(){return new Ye({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[xs(e,this.accumulators),xs(e,this.groups)]}}_readUserData(e){super._readUserData(e),Fn(this.groups,e),Fn(this.accumulators,e)}}class Gf extends mt{get _name(){return"distinct"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[xs(e,this.groups)]}}_readUserData(e){super._readUserData(e),Fn(this.groups,e)}}class Oo extends mt{get _name(){return"collection"}get _optionsUtil(){return new Ye({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class Fo extends mt{get _name(){return"collection_group"}get _optionsUtil(){return new Ye({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class KB extends mt{get _name(){return"database"}get _optionsUtil(){return new Ye({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class zB extends mt{get _name(){return"documents"}get _optionsUtil(){return new Ye({})}constructor(e,t){if(super(t),!e||e.length===0)throw new q(V.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map((i=>i.startsWith("/")?i:"/"+i)),s=new Set(n);if(s.size!==n.length)throw new q(V.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=n,this.Tr=s}_toProto(e){return{...super._toProto(e),args:this.hr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class Lo extends mt{get _name(){return"where"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Fn(this.condition,e)}}class or extends mt{get _name(){return"limit"}get _optionsUtil(){return new Ye({})}constructor(e,t){Y(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[OB(e,this.limit)]}}}class rh extends mt{get _name(){return"offset"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[OB(e,this.offset)]}}}class Pw extends mt{get _name(){return"select"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[xs(e,this.selections)]}}_readUserData(e){super._readUserData(e),Fn(this.selections,e)}}class $t extends mt{get _name(){return"sort"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),Fn(this.orderings,e)}}class QB extends mt{get _name(){return"replace_with"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),If(QB.Pr)]}}_readUserData(e){super._readUserData(e),Fn(this.map,e)}}QB.Pr="full_replace";function Fn(r,e){return Of(r)?r._readUserData(e):Array.isArray(r)?r.forEach((t=>t._readUserData(e))):r instanceof Map?r.forEach((t=>t._readUserData(e))):Object.values(r).forEach((t=>t._readUserData(e))),r}/**
 * @license
 * Copyright 2026 Google LLC
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
 */class As{constructor(e,t,n,s){this._db=e,this.userDataReader=t,this._userDataWriter=n,this.stages=s}Ar(e,t){const n=this.userDataReader.createContext(3,e);return Of(t)?t._readUserData(n):Array.isArray(t)?t.forEach((s=>s._readUserData(n))):t.forEach((s=>s._readUserData(n))),t}where(e){const t=this.stages.map((n=>n));return this.Ar("where",e),t.push(new Lo(e,{})),new As(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((n=>n));return t.push(new or(e,{})),new As(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const n=this.stages.map((s=>s));return"orderings"in e?n.push(new $t(this.Ar("sort",e.orderings),{})):n.push(new $t(this.Ar("sort",[e,...t]),{})),new As(this._db,this.userDataReader,this._userDataWriter,n)}Vr(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class w{constructor(e,t){this.type=e,this.value=t}static dr(){return new w("ERROR",void 0)}static mr(){return new w("UNSET",void 0)}static pr(){return new w("NULL",Nr)}static newValue(e){return pt(e)?new w("NULL",Nr):(function(n){return!!n&&"booleanValue"in n})(e)?new w("BOOLEAN",e):Ft(e)?new w("INT",e):Qn(e)?new w("DOUBLE",e):(function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue})(e)?new w("TIMESTAMP",e):(function(n){return!!n&&"stringValue"in n})(e)?new w("STRING",e):(function(n){return!!n&&"bytesValue"in n})(e)?new w("BYTES",e):e.referenceValue?new w("REFERENCE",e):e.geoPointValue?new w("GEO_POINT",e):Fr(e)?new w("ARRAY",e):Xi(e)?new w("VECTOR",e):Ar(e)?new w("MAP",e):new w("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function vs(r){if(!r.gr())return r.value}function Hf(r){return r instanceof On?r._expr:r}function Z(r){if((r=Hf(r))instanceof qr)return new bw(r);if(r instanceof Kr)return new Sw(r);if(r instanceof gs)return new Nw(r);if(r instanceof F){if(r.name==="add")return new Lw(r);if(r.name==="subtract")return new kw(r);if(r.name==="multiply")return new xw(r);if(r.name==="divide")return new Vw(r);if(r.name==="mod")return new Mw(r);if(r.name==="and")return new Gw(r);if(r.name==="equal")return new Xw(r);if(r.name==="not_equal")return new Zw(r);if(r.name==="less_than")return new ey(r);if(r.name==="less_than_or_equal")return new ty(r);if(r.name==="greater_than")return new ny(r);if(r.name==="greater_than_or_equal")return new ry(r);if(r.name==="array_concat")return new sy(r);if(r.name==="array_reverse")return new iy(r);if(r.name==="array_contains")return new oy(r);if(r.name==="array_contains_all")return new ay(r);if(r.name==="array_contains_any")return new By(r);if(r.name==="array_length")return new uy(r);if(r.name==="array_element")return new cy(r);if(r.name==="equal_any")return new Uf(r);if(r.name==="not_equal_any")return new Uw(r);if(r.name==="is_nan")return new Jw(r);if(r.name==="is_not_nan")return new jw(r);if(r.name==="is_null")return new qw(r);if(r.name==="is_not_null")return new Kw(r);if(r.name==="is_error")return new zw(r);if(r.name==="exists")return new Qw(r);if(r.name==="not")return new ko(r);if(r.name==="or")return new Hw(r);if(r.name==="xor")return new $B(r);if(r.name==="conditional")return new $w(r);if(r.name==="maximum")return new Ww(r);if(r.name==="minimum")return new Yw(r);if(r.name==="reverse")return new ly(r);if(r.name==="replace_first")return new hy(r);if(r.name==="replace_all")return new Cy(r);if(r.name==="char_length")return new fy(r);if(r.name==="byte_length")return new dy(r);if(r.name==="like")return new py(r);if(r.name==="regex_contains")return new gy(r);if(r.name==="regex_match")return new my(r);if(r.name==="string_contains")return new Ey(r);if(r.name==="starts_with")return new _y(r);if(r.name==="ends_with")return new Dy(r);if(r.name==="to_lower")return new wy(r);if(r.name==="to_upper")return new yy(r);if(r.name==="trim")return new Iy(r);if(r.name==="string_concat")return new Ty(r);if(r.name==="map_get")return new Ay(r);if(r.name==="cosine_distance")return new vy(r);if(r.name==="dot_product")return new Ry(r);if(r.name==="euclidean_distance")return new Py(r);if(r.name==="vector_length")return new by(r);if(r.name==="unix_micros_to_timestamp")return new Ly(r);if(r.name==="timestamp_to_unix_micros")return new Vy(r);if(r.name==="unix_millis_to_timestamp")return new ky(r);if(r.name==="timestamp_to_unix_millis")return new My(r);if(r.name==="unix_seconds_to_timestamp")return new xy(r);if(r.name==="timestamp_to_unix_seconds")return new Gy(r);if(r.name==="timestamp_add")return new Hy(r);if(r.name==="timestamp_subtract")return new Uy(r)}throw new Error(`Unknown Expr : ${r}`)}class bw{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Ot)return w.newValue({referenceValue:ID(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return w.newValue({timestampValue:Ia(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return w.newValue({timestampValue:Ia(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?yo(n)?w.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Ia(i.serializer,ne.fromTimestamp(Sr(o)))};if(i.serverTimestampBehavior==="previous"){const B=Ys(o);if(B)return B}return{nullValue:"NULL_VALUE"}})(e,n)):w.newValue(n):w.mr()}}class Sw{constructor(e){this.expr=e}evaluate(e,t){return w.newValue(this.expr._getValue())}}class Nw{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.ur.map((s=>Z(s).evaluate(e,t)));return n.some((s=>s.gr()))?w.dr():w.newValue({arrayValue:{values:n.map((s=>s.value))}})}}function qe(r){return Qn(r)?Number(r.doubleValue):Number(r.integerValue)}function Ht(r){return BigInt(r.integerValue)}const Ow=BigInt("0x7fffffffffffffff"),Fw=-BigInt("0x8000000000000000");class ti{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length>=2,24778);const n=Z(this.expr.params[0]).evaluate(e,t),s=Z(this.expr.params[1]).evaluate(e,t);let i=this.wr(n,s);for(const o of this.expr.params.slice(2)){const B=Z(o).evaluate(e,t);i=this.wr(i,B)}return i}wr(e,t){if(e.gr()||t.gr())return w.dr();if(e.yr()||t.yr())return w.pr();const n=e.value,s=t.value;if(!Qn(n)&&!Ft(n)||!Qn(s)&&!Ft(s))return w.dr();if(Qn(n)||Qn(s)){const i=this.br(n,s);return i?w.newValue(i):w.dr()}if(Ft(n)&&Ft(s)){const i=this.vr(n,s);return i===void 0?w.dr():typeof i=="number"?w.newValue({doubleValue:i}):i<Fw||i>Ow?w.dr():w.newValue({integerValue:`${i}`})}return w.dr()}}function nn(r,e){return ke(r)!==ke(e)?"TYPE_MISMATCH":lt(r)||lt(e)?"NOT_EQ":pt(r)&&pt(e)?"EQ":pt(r)||pt(e)?"NULL":Fr(r)&&Fr(e)?(function(n,s){var o,B,u;if(((o=n.values)==null?void 0:o.length)!==((B=s.values)==null?void 0:B.length))return"NOT_EQ";let i=!1;for(let c=0;c<(((u=n.values)==null?void 0:u.length)??0);c++){const h=n.values[c],f=s.values[c];switch(nn(h,f)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:ee(44609,{Sr:h,Dr:f})}}return i?"NULL":"EQ"})(r.arrayValue,e.arrayValue):Xi(r)&&Xi(e)||Ar(r)&&Ar(e)?(function(n,s){const i=n.fields||{},o=s.fields||{};if(Yi(i)!==Yi(o))return"NOT_EQ";let B=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(nn(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":B=!0}}return B?"NULL":"EQ"})(r.mapValue,e.mapValue):(function(n,s){return yt(n,s,{o:!1,t:!0,i:!0})})(r,e)?"EQ":"NOT_EQ"}class Lw extends ti{vr(e,t){return Ht(e)+Ht(t)}br(e,t){return{doubleValue:qe(e)+qe(t)}}}class kw extends ti{constructor(e){super(e),this.expr=e}vr(e,t){return Ht(e)-Ht(t)}br(e,t){return{doubleValue:qe(e)-qe(t)}}}class xw extends ti{constructor(e){super(e),this.expr=e}vr(e,t){return Ht(e)*Ht(t)}br(e,t){return{doubleValue:qe(e)*qe(t)}}}class Vw extends ti{constructor(e){super(e),this.expr=e}vr(e,t){const n=Ht(t);if(n!==BigInt(0))return Ht(e)/n}br(e,t){const n=qe(t);return n===0?{doubleValue:Os(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:qe(e)/n}}}class Mw extends ti{constructor(e){super(e),this.expr=e}vr(e,t){const n=Ht(t);if(n!==BigInt(0))return Ht(e)%n}br(e,t){const n=qe(t);if(n!==0)return{doubleValue:qe(e)%n}}}class Gw{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=Z(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if(!((i=B.value)!=null&&i.booleanValue))return w.newValue(Je);break;case"NULL":s=!0;break;default:n=!0}}return n?w.dr():s?w.pr():w.newValue(ut)}}class ko{constructor(e){this.expr=e}evaluate(e,t){var s;Y(this.expr.params.length===1,9634);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return w.newValue({booleanValue:!((s=n.value)!=null&&s.booleanValue)});case"NULL":return w.pr();default:return w.dr()}}}class Hw{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=Z(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if((i=B.value)!=null&&i.booleanValue)return w.newValue(ut);break;case"NULL":s=!0;break;default:n=!0}}return n?w.dr():s?w.pr():w.newValue(Je)}}class $B{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=Z(o).evaluate(e,t);switch(B.type){case"BOOLEAN":n=$B.xor(n,!!((i=B.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return w.dr()}}return s?w.pr():w.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class Uf{constructor(e){this.expr=e}evaluate(e,t){var o,B;Y(this.expr.params.length===2,55094);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return w.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();for(const u of((B=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:B.values)??[])switch(pt(s.value)&&pt(u)?"EQ":nn(s.value,u)){case"EQ":return w.newValue(ut);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:ee(44608,{value:s.value,candidate:u})}return n?w.pr():w.newValue(Je)}}class Uw{constructor(e){this.expr=e}evaluate(e,t){return new ko(new F("not",[new F("equal_any",this.expr.params)])).evaluate(e,t)}}class Jw{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length===1,23322);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return w.newValue(Je);case"DOUBLE":return w.newValue({booleanValue:isNaN(qe(n.value))});case"NULL":return w.pr();default:return w.dr()}}}class jw{constructor(e){this.expr=e}evaluate(e,t){return Y(this.expr.params.length===1,50406),new ko(new F("not",[new F("is_nan",this.expr.params)])).evaluate(e,t)}}class qw{constructor(e){this.expr=e}evaluate(e,t){switch(Y(this.expr.params.length===1,23123),Z(this.expr.params[0]).evaluate(e,t).type){case"NULL":return w.newValue(ut);case"UNSET":case"ERROR":return w.dr();default:return w.newValue(Je)}}}class Kw{constructor(e){this.expr=e}evaluate(e,t){return Y(this.expr.params.length===1,23167),new ko(new F("not",[new F("is_null",this.expr.params)])).evaluate(e,t)}}class zw{constructor(e){this.expr=e}evaluate(e,t){return Y(this.expr.params.length===1,5228),Z(this.expr.params[0]).evaluate(e,t).type==="ERROR"?w.newValue(ut):w.newValue(Je)}}class Qw{constructor(e){this.expr=e}evaluate(e,t){switch(Y(this.expr.params.length===1,6877),Z(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return w.dr();case"UNSET":return w.newValue(Je);default:return w.newValue(ut)}}}class $w{constructor(e){this.expr=e}evaluate(e,t){var s;Y(this.expr.params.length===3,11706);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return(s=n.value)!=null&&s.booleanValue?Z(this.expr.params[1]).evaluate(e,t):Z(this.expr.params[2]).evaluate(e,t);case"NULL":return Z(this.expr.params[2]).evaluate(e,t);default:return w.dr()}}}class Ww{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>Z(i).evaluate(e,t)));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ct(i.value,s.value)>0?i:s}return s===void 0?w.pr():s}}class Yw{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>Z(i).evaluate(e,t)));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ct(i.value,s.value)<0?i:s}return s===void 0?w.pr():s}}class zr{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return w.dr()}const s=Z(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return w.dr()}return this.Cr(n,s)}}class Xw extends zr{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return w.newValue(ut);if(e.yr()||t.yr()||lt(e.value)||lt(t.value)||ke(e.value)!==ke(t.value))return w.newValue(Je);switch(nn(e.value,t.value)){case"EQ":return w.newValue(ut);case"NOT_EQ":return w.newValue(Je);case"NULL":return w.pr();default:ee(44615,{left:e,right:t})}}}class Zw extends zr{constructor(e){super(e),this.expr=e}Cr(e,t){switch(nn(e.value,t.value)){case"EQ":return w.newValue(Je);case"NOT_EQ":case"TYPE_MISMATCH":return w.newValue(ut);case"NULL":return w.pr();default:ee(44614,{left:e,right:t})}}}class ey extends zr{constructor(e){super(e),this.expr=e}Cr(e,t){return ke(e.value)!==ke(t.value)||lt(e.value)||lt(t.value)?w.newValue(Je):w.newValue({booleanValue:ct(e.value,t.value)<0})}}class ty extends zr{constructor(e){super(e),this.expr=e}Cr(e,t){return ke(e.value)!==ke(t.value)||lt(e.value)||lt(t.value)?w.newValue(Je):nn(e.value,t.value)==="EQ"?w.newValue(ut):w.newValue({booleanValue:ct(e.value,t.value)<0})}}class ny extends zr{constructor(e){super(e),this.expr=e}Cr(e,t){return ke(e.value)!==ke(t.value)||lt(e.value)||lt(t.value)?w.newValue(Je):w.newValue({booleanValue:ct(e.value,t.value)>0})}}class ry extends zr{constructor(e){super(e),this.expr=e}Cr(e,t){return ke(e.value)!==ke(t.value)||lt(e.value)||lt(t.value)?w.newValue(Je):nn(e.value,t.value)==="EQ"?w.newValue(ut):w.newValue({booleanValue:ct(e.value,t.value)>0})}}class sy{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class iy{constructor(e){this.expr=e}evaluate(e,t){var s;Y(this.expr.params.length===1,216);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.pr();case"ARRAY":{const i=((s=n.value.arrayValue)==null?void 0:s.values)??[];return w.newValue({arrayValue:{values:[...i].reverse()}})}default:return w.dr()}}}class oy{constructor(e){this.expr=e}evaluate(e,t){return Y(this.expr.params.length===2,52884),new Uf(new F("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class ay{constructor(e){this.expr=e}evaluate(e,t){var u,c,h,f;Y(this.expr.params.length===2,1392);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();const o=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],B=((f=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[];for(const g of o){let T=!1;n=!1;for(const R of B){switch(pt(g)&&pt(R)?"EQ":nn(g,R)){case"EQ":T=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:ee(44613,{value:R,search:g})}if(T)break}if(!T)return w.newValue(Je)}return w.newValue(ut)}}class By{constructor(e){this.expr=e}evaluate(e,t){var u,c,h,f;Y(this.expr.params.length===2,2680);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();const o=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],B=((f=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[];for(const g of B)for(const T of o)switch(pt(g)&&pt(T)?"EQ":nn(g,T)){case"EQ":return w.newValue(ut);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:ee(60403,{value:g,search:T})}return n?w.pr():w.newValue(Je)}}class uy{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;Y(this.expr.params.length===1,38605);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.pr();case"ARRAY":return w.newValue({integerValue:`${((o=(i=(s=n.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return w.dr()}}}class cy{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class ly{constructor(e){this.expr=e}evaluate(e,t){var s,i;Y(this.expr.params.length===1,1508);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.pr();case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const B=Le.fromBase64String(o).toUint8Array();return B.reverse(),w.newValue({bytesValue:Le.fromUint8Array(B).toBase64()})}return w.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=n.value)==null?void 0:i.stringValue,B=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),u=Array.from(B,(c=>c.segment)).reverse();return w.newValue({stringValue:u.join("")})}default:return w.dr()}}}class hy{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Cy{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class fy{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length===1,19400);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.pr();case"STRING":{const s=(function(o){let B=0;for(let u=0;u<o.length;u++){const c=o.codePointAt(u);if(c===void 0)return;if(c<=65535)if(c>=55296&&c<=57343)if(c<=56319){const h=o.codePointAt(u+1);h!==void 0&&h>=56320&&h<=57343?(B+=1,u++):B+=1}else B+=1;else B+=1;else{if(!(c<=1114111))return;B+=1,u++}}return B})(n.value.stringValue);return s===void 0?w.dr():w.newValue({integerValue:s})}default:return w.dr()}}}class dy{constructor(e){this.expr=e}evaluate(e,t){var s,i;Y(this.expr.params.length===1,8486);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;return typeof o=="string"?w.newValue({integerValue:Le.fromBase64String(o).toUint8Array().length}):w.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=(function(u){let c=0;for(let h=0;h<u.length;h++){const f=u.codePointAt(h);if(f===void 0)return;if(f>=55296&&f<=57343){if(!(f<=56319))return;{const g=u.codePointAt(h+1);if(g===void 0||!(g>=56320&&g<=57343))return;c+=4,h++}}else if(f<=127)c+=1;else if(f<=2047)c+=2;else if(f<=65535)c+=3;else{if(!(f<=1114111))return;c+=4,h++}}return c})((i=n.value)==null?void 0:i.stringValue);return o===void 0?w.dr():w.newValue({integerValue:o})}case"NULL":return w.pr();default:return w.dr()}}}class Qr{constructor(e){this.expr=e}evaluate(e,t){var o,B;Y(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":n=!0;break;default:return w.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return w.dr()}return n?w.pr():this.Fr((o=s.value)==null?void 0:o.stringValue,(B=i.value)==null?void 0:B.stringValue)}}class py extends Qr{Fr(e,t){try{const n=(function(o){let B="";for(let u=0;u<o.length;u++){const c=o.charAt(u);switch(c){case"_":B+=".";break;case"%":B+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":B+="\\"+c;break;default:B+=c}}return"^"+B+"$"})(t),s=PB.compile(n);return w.newValue({booleanValue:s.matches(e)})}catch(n){return vt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),w.dr()}}}class gy extends Qr{Fr(e,t){try{const n=PB.compile(t);return w.newValue({booleanValue:n.test(e)})}catch{return vt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),w.dr()}}}class my extends Qr{Fr(e,t){try{return w.newValue({booleanValue:PB.compile(t).matches(e)})}catch{return vt(`Invalid regex pattern found in regex_match: ${t}, returning error`),w.dr()}}}class Ey extends Qr{Fr(e,t){return w.newValue({booleanValue:e.includes(t)})}}class _y extends Qr{Fr(e,t){return w.newValue({booleanValue:e.startsWith(t)})}}class Dy extends Qr{Fr(e,t){return w.newValue({booleanValue:e.endsWith(t)})}}class wy{constructor(e){this.expr=e}evaluate(e,t){var s,i;Y(this.expr.params.length===1,29079);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return w.pr();default:return w.dr()}}}class yy{constructor(e){this.expr=e}evaluate(e,t){var s,i;Y(this.expr.params.length===1,60487);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return w.pr();default:return w.dr()}}}class Iy{constructor(e){this.expr=e}evaluate(e,t){var s,i;Y(this.expr.params.length===1,28544);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return w.pr();default:return w.dr()}}}class Ty{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((o=>Z(o).evaluate(e,t)));let s="",i=!1;for(const o of n)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return w.dr()}return i?w.pr():w.newValue({stringValue:s})}}class Ay{constructor(e){this.expr=e}evaluate(e,t){var o,B,u,c;Y(this.expr.params.length===2,4483);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return w.mr();case"MAP":break;default:return w.dr()}const s=Z(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return w.dr();const i=(c=(B=(o=n.value)==null?void 0:o.mapValue)==null?void 0:B.fields)==null?void 0:c[(u=s.value)==null?void 0:u.stringValue];return i===void 0?w.mr():w.newValue(i)}}class WB{constructor(e){this.expr=e}evaluate(e,t){var c,h;Y(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":n=!0;break;default:return w.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();const o=Qa(s.value),B=Qa(i.value);if(o===void 0||B===void 0||((c=o.values)==null?void 0:c.length)!==((h=B.values)==null?void 0:h.length))return w.dr();const u=this.Or(o,B);return u===void 0||isNaN(u)?w.dr():w.newValue({doubleValue:u})}}class vy extends WB{Or(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return;let i=0,o=0,B=0;for(let c=0;c<n.length;c++){if(!Sn(n[c])||!Sn(s[c]))return;const h=qe(n[c]),f=qe(s[c]);i+=h*f,o+=h*h,B+=f*f}const u=Math.sqrt(o)*Math.sqrt(B);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class Ry extends WB{Or(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Sn(n[o])||!Sn(s[o]))return;i+=qe(n[o])*qe(s[o])}return i}}class Py extends WB{Or(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Sn(n[o])||!Sn(s[o]))return;const B=qe(n[o]),u=qe(s[o]);i+=Math.pow(B-u,2)}return Math.sqrt(i)}}class by{constructor(e){this.expr=e}evaluate(e,t){var s;Y(this.expr.params.length===1,39044);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const i=Qa(n.value);return w.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return w.pr();default:return w.dr()}}}const Ms=BigInt(-62135596800),Gs=BigInt(253402300799),Bo=BigInt(1e3),vn=BigInt(1e6),Sy=Ms*Bo,Ny=Gs*Bo+BigInt(999),Oy=Ms*vn,Fy=Gs*vn+BigInt(999999);function YB(r){return r>=Oy&&r<=Fy}function Jf(r){return r>=Ms&&r<=Gs}function Hs(r,e){const t=BigInt(r);return!(t<Ms||t>Gs)&&!(e<0||e>=1e9)&&(t!==Ms||e===0)&&!(t===Gs&&e>999999999)}function jf(r,e){return e<0?{seconds:r-1,nanos:e+1e9}:{seconds:r,nanos:e}}function XB(r){return BigInt(r.seconds)*vn+BigInt(Math.trunc(r.nanoseconds/1e3))}class ZB{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return w.pr();default:return w.dr()}}}class Ly extends ZB{toTimestamp(e){if(!YB(e))return w.dr();let t=Number(e/vn),n=Number(e%vn*BigInt(1e3));const s=jf(t,n);return t=s.seconds,n=s.nanos,Hs(t,n)?w.newValue({timestampValue:{seconds:t,nanos:n}}):w.dr()}}class ky extends ZB{toTimestamp(e){if(!(function(o){return o>=Sy&&o<=Ny})(e))return w.dr();let t=Number(e/Bo),n=Number(e%Bo*BigInt(1e6));const s=jf(t,n);return t=s.seconds,n=s.nanos,Hs(t,n)?w.newValue({timestampValue:{seconds:t,nanos:n}}):w.dr()}}class xy extends ZB{toTimestamp(e){if(!Jf(e))return w.dr();const t=Number(e);return w.newValue({timestampValue:{seconds:t,nanos:0}})}}class eu{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return w.pr();default:return w.dr()}const s=GB(n.value.timestampValue);return Hs(s.seconds,s.nanoseconds)?this.Mr(s):w.dr()}}class Vy extends eu{Mr(e){const t=XB(e);return YB(t)?w.newValue({integerValue:`${t.toString()}`}):w.dr()}}class My extends eu{Mr(e){const t=XB(e),n=t/BigInt(1e3),s=t%BigInt(1e3);return n>BigInt(0)||s===BigInt(0)?w.newValue({integerValue:n.toString()}):w.newValue({integerValue:(n-BigInt(1)).toString()})}}class Gy extends eu{Mr(e){const t=BigInt(e.seconds);return Jf(t)?w.newValue({integerValue:t.toString()}):w.dr()}}class qf{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return w.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(se){switch(se){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return w.dr();break;case"NULL":n=!0;break;default:return w.dr()}const B=Z(this.expr.params[2]).evaluate(e,t);switch(B.type){case"INT":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();const u=BigInt(B.value.integerValue);let c;try{switch(o){case"microsecond":c=u;break;case"millisecond":c=u*BigInt(1e3);break;case"second":c=u*BigInt(1e6);break;case"minute":c=u*BigInt(6e7);break;case"hour":c=u*BigInt(36e8);break;case"day":c=u*BigInt(864e8);break;default:return w.dr()}if(o!=="microsecond"&&u!==BigInt(0)&&c/u!==BigInt(this.Nr(o)))return w.dr()}catch(z){return vt(`Error during timestamp arithmetic: ${z}`),w.dr()}const h=GB(s.value.timestampValue);if(!Hs(h.seconds,h.nanoseconds))return w.dr();const f=XB(h),g=this.Lr(f,c);if(!YB(g))return w.dr();const T=Number(g/vn),R=g%vn,x=Number((R<0?R+vn:R)*BigInt(1e3)),J=R<0?T-1:T;return Hs(J,x)?w.newValue({timestampValue:{seconds:J,nanos:x}}):w.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class Hy extends qf{Lr(e,t){return e+t}}class Uy extends qf{Lr(e,t){return e-t}}// Copyright 2024 Google LLC* @license
class et{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return xo(this)}getPipelineCollectionGroup(){return tu(this)}getPipelineCollectionId(){return Jy(this)}getPipelineDocuments(){return rB(this)}getPipelineFlavor(){return(function(t){let n="exact";return t.stages.forEach(((s,i)=>{s._name!==Gf.name&&s._name!==Mf.name||(n="keyless"),s._name===Pw.name&&n==="exact"&&(n="augmented"),s._name===Vf.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")})),n})(this)}getPipelineSourceType(){return Rn(this)}}function Rn(r){const e=r.stages[0];return e instanceof Oo||e instanceof Fo||e instanceof KB||e instanceof zB?e._name:"unknown"}function xo(r){if(Rn(r)==="collection")return r.stages[0].Er}function tu(r){if(Rn(r)==="collection_group")return r.stages[0].collectionId}function Jy(r){switch(Rn(r)){case"collection":return fe.fromString(xo(r)).lastSegment();case"collection_group":return tu(r);default:return}}function rB(r){if(Rn(r)==="documents")return r.stages[0].hr}function Us(r){if((r=Hf(r))instanceof qr)return`fld(${r.fieldName})`;if(r instanceof Kr)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ne?`ref(${t.path})`:t instanceof Bt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(r.value)})`;if(r instanceof F)return`fn(${r.name},[${r.params.map(Us).join(",")}])`;if(r.expressionType==="ListOfExpressions")return`list([${r.ur.map(Us).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(r,null,2)}`)}function jy(r){if(r instanceof Vf)return`${r._name}(${bi(r.fields)})`;if(r instanceof Mf){let e=`${r._name}(${bi(r.accumulators)})`;return r.groups.size>0&&(e+=`grouping(${bi(r.groups)})`),e}if(r instanceof Gf)return`${r._name}(${bi(r.groups)})`;if(r instanceof Oo)return`${r._name}(${r.Er})`;if(r instanceof Fo)return`${r._name}(${r.collectionId})`;if(r instanceof KB)return`${r._name}()`;if(r instanceof zB)return`${r._name}(${r.hr.sort()})`;if(r instanceof Lo)return`${r._name}(${Us(r.condition)})`;if(r instanceof or)return`${r._name}(${r.limit})`;if(r instanceof $t)return`${r._name}(${(function(t){return t.map((n=>`${Us(n.expr)}${n.direction}`)).join(",")})(r.orderings)})`;throw new Error(`Unrecognized stage ${r._name}`)}function bi(r){return`${Array.from(r.entries()).sort().map((([e,t])=>`${e}=${Us(t)}`)).join(",")}`}function Yt(r){return r.stages.map((e=>jy(e))).join("|")}function Kf(r,e){return Yt(r)===Yt(e)}function Ve(r){return r instanceof et}function sh(r){return Ve(r)?Yt(r):Is(r)}function zf(r){return Ve(r)?Yt(r):(function(t){return`${af(xt(t))}|lt:${t.limitType}`})(r)}function Vo(r,e){return r instanceof et&&e instanceof et?Kf(r,e):!(r instanceof et&&!(e instanceof et)||!(r instanceof et)&&e instanceof et)&&uD(r,e)}function Qf(r){return Kn(r)?Yt(r):af(r)}function $f(r,e){return r instanceof et&&e instanceof et?Kf(r,e):!(r instanceof et&&!(e instanceof et)||!(r instanceof et)&&e instanceof et)&&Bf(r,e)}function qy(r,e){const t=(function(s){let i=!1;const o=[];for(const B of s)if(B instanceof $t)if(i=!0,B.orderings.some((u=>u.expr instanceof qr&&u.expr.fieldName===Ot)))o.push(B);else{const u=B.orderings.map((c=>c));u.push(Hi(Ot).ascending()),o.push(new $t(u,{}))}else B instanceof or&&(i||(o.push(new $t([Hi(Ot).ascending()],{})),i=!0)),o.push(B);return i||o.push(new $t([Hi(Ot).ascending()],{})),o})(r.stages);if(r.userDataReader){const n=r.userDataReader.createContext(3,"toCorePipeline");t.forEach((s=>s._readUserData(n)))}return new et(r.userDataReader.serializer,t,e)}/**
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
 */class Ky{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&q_(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ws(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ws(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Cf();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let B=this.applyToLocalView(o,i.mutatedFields);B=t.has(s.key)?null:B;const u=XC(o,B);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ue())}isEqual(e){return this.batchId===e.batchId&&br(this.mutations,e.mutations,((t,n)=>Ll(t,n)))&&br(this.baseMutations,e.baseMutations,((t,n)=>Ll(t,n)))}}/**
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
 */const Wf="";function zy(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=ih(e)),e=Qy(r.get(t),e);return ih(e)}function Qy(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case Wf:t+="";break;default:t+=i}}return t}function ih(r){return r+Wf+""}/**
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
 */class $y{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wt{constructor(e,t,n,s,i=ne.min(),o=ne.min(),B=Le.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=B,this.expectedCount=u}withSequenceNumber(e){return new Wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Wy{constructor(e){this.qr=e}}function Yy(r){const e=PD({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?io(e,e.limit,"L"):e}/**
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
 */class Xy{constructor(){this.Yi=new Zy}addToCollectionParentIndex(e,t){return this.Yi.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Nn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Nn.min())}updateCollectionGroup(e,t,n){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class Zy{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new Oe(fe.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new Oe(fe.comparator)).toArray()}}/**
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
 */class Ln{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new Ln(0)}static ws(){return new Ln(-1)}}// Copyright 2024 Google LLC* @license
function Yf(r,e){var n;let t=e;for(const s of r.stages)t=tI({serializer:r.serializer,serverTimestampBehavior:(n=r.listenOptions)==null?void 0:n.serverTimestampBehavior},s,t);return t}function Mo(r,e){return Yf(r,[e]).length>0}function eI(r,e){return Ve(r)?Mo(r,e):Ro(r,e)}function tI(r,e,t){if(e instanceof Oo)return(function(s,i,o){return o.filter((B=>B.isFoundDocument()&&`/${B.key.getCollectionPath().canonicalString()}`===i.Er))})(0,e,t);if(e instanceof Lo)return(function(s,i,o){return o.filter((B=>{const u=vs(Z(i.condition).evaluate(s,B));return u!==void 0&&yt(u,ut)}))})(r,e,t);if(e instanceof Fo)return(function(s,i,o){return o.filter((B=>B.isFoundDocument()&&B.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof KB)return(function(s,i,o){return o.filter((B=>B.isFoundDocument()))})(0,0,t);if(e instanceof zB)return(function(s,i,o){return o.filter((B=>B.isFoundDocument()&&i.Tr.has(B.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof or)return(function(s,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof $t)return(function(s,i,o){const B=i.orderings.map((u=>({Os:Z(u.expr),direction:u.direction})));return[...o].sort(((u,c)=>{for(const{Os:h,direction:f}of B){const g=vs(h.evaluate(s,u)),T=vs(h.evaluate(s,c)),R=ct(g??Nr,T??Nr);if(R!==0)return f==="ascending"?R:-R}return 0}))})(r,e,t);throw new Error(`Unknown stage: ${e._name}`)}function sB(r){const e=(function(n){for(let s=n.stages.length-1;s>=0;s--){const i=n.stages[s];if(i instanceof $t)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(r);return(t,n)=>{for(const s of e){const i=vs(Z(s.expr).evaluate({serializer:r.serializer},t)),o=vs(Z(s.expr).evaluate({serializer:r.serializer},n)),B=ct(i||Nr,o||Nr);if(B!==0)return s.direction==="ascending"?B:-B}return 0}}function Ra(r){for(let e=r.stages.length-1;e>=0;e--){const t=r.stages[e];if(t instanceof or)return{limit:t.limit}}}/**
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
 */class nI{constructor(){this.changes=new Br((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?L.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class rI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class sI{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&ws(n.mutation,s,Dn.empty(),we.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,ue()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=ue()){const s=En();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let o=mr();return i.forEach(((B,u)=>{o=o.insert(B,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=En();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,ue())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,B)=>{t.set(o,B)}))}))}computeViews(e,t,n,s){let i=gt();const o=Ts(),B=(function(){return Ts()})();return t.forEach(((u,c)=>{const h=n.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof vo)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ws(h.mutation,c,h.mutation.getFieldMask(),we.now())):o.set(c.key,Dn.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((c,h)=>o.set(c,h))),t.forEach(((c,h)=>B.set(c,new rI(h,o.get(c)??null)))),B)))}recalculateAndSaveOverlays(e,t){const n=Ts();let s=new Ae(((o,B)=>o-B)),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const B of o)B.keys().forEach((u=>{const c=t.get(u);if(c===null)return;let h=n.get(u)||Dn.empty();h=B.applyToLocalView(c,h),n.set(u,h);const f=(s.get(B.batchId)||ue()).add(u);s=s.insert(B.batchId,f)}))})).next((()=>{const o=[],B=s.getReverseIterator();for(;B.hasNext();){const u=B.getNext(),c=u.key,h=u.value,f=Cf();h.forEach((g=>{if(!i.has(g)){const T=XC(t.get(g),n.get(g));T!==null&&f.set(g,T),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return L.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return Ve(t)?this.getDocumentsMatchingPipeline(e,t,n,s):aD(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):L.resolve(En());let B=ks,u=i;return o.next((c=>L.forEach(c,((h,f)=>(B<f.largestBatchId&&(B=f.largestBatchId),i.get(h)?L.resolve():this.remoteDocumentCache.getEntry(e,h).next((g=>{u=u.insert(h,g)}))))).next((()=>this.populateOverlays(e,c,i))).next((()=>this.computeViews(e,u,c,ue()))).next((h=>({batchId:B,changes:CD(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next((n=>{let s=mr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=mr();return this.indexManager.getCollectionParents(e,i).next((B=>L.forEach(B,(u=>{const c=(function(f,g){return new Xs(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,n,s).next((h=>{h.forEach(((f,g)=>{o=o.insert(f,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(B=>Ro(t,B)))))}getDocumentsMatchingPipeline(e,t,n,s){if(Rn(t)==="collection_group"){const i=tu(t);let o=mr();return this.indexManager.getCollectionParents(e,i).next((B=>L.forEach(B,(u=>{const c=(function(f,g){const T=f.stages.map((R=>R instanceof Fo?new Oo(g.canonicalString(),{}):R));return new et(f.serializer,T)})(t,u.child(i));return this.getDocumentsMatchingPipeline(e,c,n,s).next((h=>{h.forEach(((f,g)=>{o=o.insert(f,g)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next((o=>{switch(i=o,Rn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s);case"documents":let B=ue();for(const u of rB(t))B=B.add(W.fromPath(u));return this.remoteDocumentCache.getEntries(e,B);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new q("invalid-argument",`Invalid pipeline source to execute offline: ${Yt(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(B=>Mo(t,B)))))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach(((i,o)=>{const B=o.getKey();t.get(B)===null&&(t=t.insert(B,$e.newInvalidDocument(B)))}));let s=mr();return t.forEach(((i,o)=>{const B=e.get(i);B!==void 0&&ws(B.mutation,o,Dn.empty(),we.now()),n(o)&&(s=s.insert(i,o))})),s}getOverlaysForPipeline(e,t,n){switch(Rn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,fe.fromString(xo(t)),n);case"collection_group":throw new q("invalid-argument",`Unexpected collection group pipeline: ${Yt(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,rB(t).map((s=>W.fromPath(s))));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new q("invalid-argument",`Failed to get overlays for pipeline: ${Yt(t)}`)}}}/**
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
 */class iI{constructor(e){this.serializer=e,this.Ks=new Map,this.Ws=new Map}getBundleMetadata(e,t){return L.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:vr(s.createTime)}})(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,(function(s){return{name:s.name,query:Yy(s.bundledQuery),readTime:vr(s.readTime)}})(t)),L.resolve()}}/**
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
 */class oI{constructor(){this.overlays=new Ae(W.comparator),this.Qs=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const n=En();return L.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}getAllOverlays(e,t){const n=En();return this.overlays.forEach(((s,i)=>{i.largestBatchId>t&&n.set(s,i)})),L.resolve(n)}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.Yr(e,t,i)})),L.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Qs.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Qs.delete(n)),L.resolve()}getOverlaysForCollection(e,t,n){const s=En(),i=t.length+1,o=new W(t.child("")),B=this.overlays.getIteratorFrom(o);for(;B.hasNext();){const u=B.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new Ae(((c,h)=>c-h));const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>n){let h=i.get(c.largestBatchId);h===null&&(h=En(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const B=En(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((c,h)=>B.set(c,h))),!(B.size()>=s)););return L.resolve(B)}Yr(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Qs.get(s.largestBatchId).delete(n.key);this.Qs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new $y(t,n));let i=this.Qs.get(t);i===void 0&&(i=ue(),this.Qs.set(t,i)),this.Qs.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class aI{constructor(){this.sessionToken=Le.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
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
 */class nu{constructor(){this.Gs=new Oe(Ue.zs),this.js=new Oe(Ue.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const n=new Ue(e,t);this.Gs=this.Gs.add(n),this.js=this.js.add(n)}Js(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Ys(new Ue(e,t))}Zs(e,t){e.forEach((n=>this.removeReference(n,t)))}Xs(e){const t=new W(new fe([])),n=new Ue(t,e),s=new Ue(t,e+1),i=[];return this.js.forEachInRange([n,s],(o=>{this.Ys(o),i.push(o.key)})),i}e_(){this.Gs.forEach((e=>this.Ys(e)))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new W(new fe([])),n=new Ue(t,e),s=new Ue(t,e+1);let i=ue();return this.js.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Ue(e,0),n=this.Gs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ue{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return W.comparator(e.key,t.key)||oe(e.n_,t.n_)}static Hs(e,t){return oe(e.n_,t.n_)||W.comparator(e.key,t.key)}}/**
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
 */class BI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Qr=1,this.r_=new Oe(Ue.zs)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Qr;this.Qr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ky(i,t,n,s);this.mutationQueue.push(o);for(const B of s)this.r_=this.r_.add(new Ue(B.key,i)),this.indexManager.addToCollectionParentIndex(e,B.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.s_(n),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?k_:this.Qr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ue(t,0),s=new Ue(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([n,s],(o=>{const B=this.i_(o.n_);i.push(B)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Oe(oe);return t.forEach((s=>{const i=new Ue(s,0),o=new Ue(s,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,o],(B=>{n=n.add(B.n_)}))})),L.resolve(this.__(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;W.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new W(i),0);let B=new Oe(oe);return this.r_.forEachWhile((u=>{const c=u.key.path;return!!n.isPrefixOf(c)&&(c.length===s&&(B=B.add(u.n_)),!0)}),o),L.resolve(this.__(B))}__(e){const t=[];return e.forEach((n=>{const s=this.i_(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Y(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.r_;return L.forEach(t.mutations,(s=>{const i=new Ue(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.r_=n}))}jr(e){}containsKey(e,t){const n=new Ue(t,0),s=this.r_.firstAfterOrEqual(n);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class uI{constructor(e){this.a_=e,this.docs=(function(){return new Ae(W.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.a_(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return L.resolve(n?n.document.mutableCopy():$e.newInvalidDocument(t))}getEntries(e,t){let n=gt();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():$e.newInvalidDocument(s))})),L.resolve(n)}getAllEntries(e){let t=gt();return this.docs.forEach(((n,s)=>{t=t.insert(n,s.document)})),L.resolve(t)}getDocumentsMatchingQuery(e,t,n,s){let i,o;Ve(t)?(i=fe.fromString(xo(t)),o=h=>Mo(t,h)):(i=t.path,o=h=>Ro(t,h));let B=gt();const u=new W(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||sD(rD(f),n)<=0||(s.has(f.key)||o(f))&&(B=B.insert(f.key,f.mutableCopy()))}return L.resolve(B)}getAllFromCollectionGroup(e,t,n,s){ee(9500)}u_(e,t){return L.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new cI(this)}getSize(e){return L.resolve(this.size)}}class cI extends nI{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.qs.addEntry(e,s)):this.qs.removeEntry(n)})),L.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
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
 */class lI{constructor(e){this.persistence=e,this.c_=new Br((t=>Qf(t)),$f),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.l_=0,this.E_=new nu,this.targetCount=0,this.h_=Ln.ys()}forEachTarget(e,t){return this.c_.forEach(((n,s)=>t(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.l_&&(this.l_=t),L.resolve()}Ss(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new Ln(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.Ss(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Ss(t),L.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.c_.forEach(((o,B)=>{B.sequenceNumber<=t&&n.get(B.targetId)===null&&(this.c_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,B.targetId)),s++)})),L.waitFor(i).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const n=this.c_.get(t)||null;return L.resolve(n)}addMatchingKeys(e,t,n){return this.E_.Js(t,n),L.resolve()}removeMatchingKeys(e,t,n){this.E_.Zs(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),L.resolve()}getMatchingKeysForTargetId(e,t){const n=this.E_.t_(t);return L.resolve(n)}containsKey(e,t){return L.resolve(this.E_.containsKey(t))}}/**
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
 */class Xf{constructor(e,t){this.T_={},this.overlays={},this.P_=new bo(0),this.R_=!1,this.R_=!0,this.I_=new aI,this.referenceDelegate=e(this),this.A_=new lI(this),this.indexManager=new Xy,this.remoteDocumentCache=(function(s){return new uI(s)})((n=>this.referenceDelegate.V_(n))),this.serializer=new Wy(t),this.d_=new iI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.T_[e.toKey()];return n||(n=new BI(t,this.referenceDelegate),this.T_[e.toKey()]=n),n}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,n){j("MemoryPersistence","Starting transaction:",e);const s=new hI(this.P_.next());return this.referenceDelegate.f_(),n(s).next((i=>this.referenceDelegate.m_(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}p_(e,t){return L.or(Object.values(this.T_).map((n=>()=>n.containsKey(e,t))))}}class hI extends tw{constructor(e){super(),this.currentSequenceNumber=e}}class ru{constructor(e){this.persistence=e,this.g_=new nu,this.y_=null}static w_(e){return new ru(e)}get b_(){if(this.y_)return this.y_;throw ee(60996)}addReference(e,t,n){return this.g_.addReference(n,t),this.b_.delete(n.toString()),L.resolve()}removeReference(e,t,n){return this.g_.removeReference(n,t),this.b_.add(n.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),L.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach((s=>this.b_.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.b_.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.b_,(n=>{const s=W.fromPath(n);return this.v_(e,s).next((i=>{i||t.removeEntry(s,ne.min())}))})).next((()=>(this.y_=null,t.apply(e))))}updateLimboDocument(e,t){return this.v_(e,t).next((n=>{n?this.b_.delete(t.toString()):this.b_.add(t.toString())}))}V_(e){return 0}v_(e,t){return L.or([()=>L.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class uo{constructor(e,t){this.persistence=e,this.S_=new Br((n=>zy(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=aw(this,t)}static w_(e,t){return new uo(e,t)}f_(){}m_(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}xs(e){let t=0;return this.ir(e,(n=>{t++})).next((()=>t))}ir(e,t){return L.forEach(this.S_,((n,s)=>this.Fs(e,n,s).next((i=>i?L.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.u_(e,(o=>this.Fs(e,o,t).next((B=>{B||(n++,i.removeEntry(o,ne.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.S_.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.S_.set(n,e.currentSequenceNumber),L.resolve()}removeReference(e,t,n){return this.S_.set(n,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.S_.set(t,e.currentSequenceNumber),L.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vi(e.data.value)),t}Fs(e,t,n){return L.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.S_.get(t);return L.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class su{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ao=n,this.Vo=s}static fo(e,t){let n=ue(),s=ue();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new su(e,t.fromCache,n,s)}}/**
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
 */function CI(r,e){return W.comparator(r.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class fI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dI{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=(function(){return Np()?8:nw(We())>0?6:4})()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.vo(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.So(e,t,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new fI;return this.Do(e,t,o).next((B=>{if(i.result=B,this.po)return this.xo(e,t,o,B.size)}))})).next((()=>i.result))}xo(e,t,n,s){return Ve(t)?L.resolve():n.documentReadCount<this.yo?(pr()<=ie.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Is(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),L.resolve()):(pr()<=ie.DEBUG&&j("QueryEngine","Query:",Is(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.wo*s?(pr()<=ie.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Is(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xt(t))):L.resolve())}vo(e,t){if(Ve(t))return L.resolve(null);let n=t;if(Hl(n))return L.resolve(null);let s=xt(n);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=io(n,null,"F"),s=xt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((o=>{const B=ue(...o);return this.bo.getDocuments(e,B).next((u=>this.indexManager.getMinOffset(e,s).next((c=>{const h=this.Co(n,u);return this.Fo(n,h,B,c.readTime)?this.vo(e,io(n,null,"F")):this.Oo(e,h,n,c)}))))})))))}So(e,t,n,s){return(Ve(t)?(function(o){for(const B of o.stages){if(B instanceof or||B instanceof rh)return!1;if(B instanceof Lo){if(B.condition instanceof Lf&&B.condition._expr.name==="exists"&&B.condition._expr.params[0]instanceof qr&&B.condition._expr.params[0].fieldName===Ot)continue;return!1}}return!0})(t):Hl(t))||s.isEqual(ne.min())?L.resolve(null):this.bo.getDocuments(e,n).next((i=>{const o=this.Co(t,i);return this.Fo(t,o,n,s)?L.resolve(null):(pr()<=ie.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),sh(t)),this.Oo(e,o,t,nD(s,ks)).next((B=>B)))}))}Co(e,t){let n,s;return Ve(e)?(n=new Oe(CI),s=i=>Mo(e,i)):(n=new Oe(VB(e)),s=i=>Ro(e,i)),t.forEach(((i,o)=>{s(o)&&(n=n.add(o))})),n}Fo(e,t,n,s){if(Ve(e))return(function(B){return B.stages.some((u=>u instanceof or||u instanceof rh))})(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Do(e,t,n){return pr()<=ie.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",sh(t)),this.bo.getDocumentsMatchingQuery(e,t,Nn.min(),n)}Oo(e,t,n,s){return this.bo.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const iu="LocalStore",pI=3e8;class gI{constructor(e,t,n,s){this.persistence=e,this.Mo=t,this.serializer=s,this.No=new Ae(oe),this.Lo=new Br((i=>Qf(i)),$f),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(n)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sI(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.No)))}}function mI(r,e,t,n){return new gI(r,e,t,n)}async function Zf(r,e){const t=he(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.ko(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],B=[];let u=ue();for(const c of s){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){B.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(n,u).next((c=>({qo:c,removedBatchIds:o,addedBatchIds:B})))}))}))}function ed(r){const e=he(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.A_.getLastRemoteSnapshotVersion(t)))}function EI(r,e){const t=he(r),n=e.snapshotVersion;let s=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Uo.newChangeBuffer({trackRemovals:!0});s=t.No;const B=[];e.targetChanges.forEach(((h,f)=>{const g=s.get(f);if(!g)return;B.push(t.A_.removeMatchingKeys(i,h.removedDocuments,f).next((()=>t.A_.addMatchingKeys(i,h.addedDocuments,f))));let T=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?T=T.withResumeToken(Le.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):h.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(h.resumeToken,n)),s=s.insert(f,T),(function(x,J,z){return x.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=pI?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(g,T,h)&&B.push(t.A_.updateTargetData(i,T))}));let u=gt(),c=ue();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&B.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))})),B.push(_I(i,o,e.documentUpdates).next((h=>{u=h.$o,c=h.Ko}))),!n.isEqual(ne.min())){const h=t.A_.getLastRemoteSnapshotVersion(i).next((f=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,n)));B.push(h)}return L.waitFor(B).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,c))).next((()=>u))})).then((i=>(t.No=s,i)))}function _I(r,e,t){let n=ue(),s=ue();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let o=gt();return t.forEach(((B,u)=>{const c=i.get(B);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(B)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(B,u.readTime),o=o.insert(B,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(B,u)):j(iu,"Ignoring outdated watch update for ",B,". Current version:",c.version," Watch version:",u.version)})),{$o:o,Ko:s}}))}function DI(r,e){const t=he(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.A_.getTargetData(n,e).next((i=>i?(s=i,L.resolve(s)):t.A_.allocateTargetId(n).next((o=>(s=new Wt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.A_.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.No.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.No=t.No.insert(n.targetId,n),t.Lo.set(e,n.targetId)),n}))}async function iB(r,e,t){const n=he(r),s=n.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!jr(o))throw o;j(iu,`Failed to update sequence numbers for target ${e}: ${o}`)}n.No=n.No.remove(e),n.Lo.delete(s.target)}function oh(r,e,t){const n=he(r);let s=ne.min(),i=ue();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,c,h){const f=he(u),g=f.Lo.get(h);return g!==void 0?L.resolve(f.No.get(g)):f.A_.getTargetData(c,h)})(n,o,Ve(e)?e:xt(e)).next((B=>{if(B)return s=B.lastLimboFreeSnapshotVersion,n.A_.getMatchingKeysForTargetId(o,B.targetId).next((u=>{i=u}))})).next((()=>n.Mo.getDocumentsMatchingQuery(o,e,t?s:ne.min(),t?i:ue()))).next((B=>(wI(n,B),{documents:B,Wo:i})))))}function wI(r,e){e.forEach(((t,n)=>{const s=n.key.getCollectionGroup(),i=r.Bo.get(s)||ne.min();n.readTime.compareTo(i)>0&&r.Bo.set(s,n.readTime)}))}/**
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
 */class yI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve()))))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(tn(t),this.Zo=!1):j("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
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
 */const rn="RemoteStore";class II{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new Ln(1e3),this.ua=new Ln(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke((o=>{n.enqueueAndForget((async()=>{ri(this)&&(j(rn,"Restarting streams for network reachability change."),await(async function(u){const c=he(u);c.ca.add(4),await ni(c),c.ha.set("Unknown"),c.ca.delete(4),await Go(c)})(this))}))})),this.ha=new yI(n,s)}}async function Go(r){if(ri(r))for(const e of r.la)await e(!0)}async function ni(r){for(const e of r.la)await e(!1)}function oB(r,e){return r._a.get(e)||void 0}function td(r,e){const t=he(r),n=oB(t,e.targetId);if(n!==void 0&&t.sa.has(n))return;const s=(function(B,u){const c=oB(B,u);c!==void 0&&B.oa.delete(c);const h=(function(g,T){return T%2!=0?g.ua.next():g.aa.next()})(B,u);return B._a.set(u,h),B.oa.set(h,u),h})(t,e.targetId);j(rn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Wt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(s,i),uu(t)?Bu(t):$r(t).Jt()&&au(t,i)}function ou(r,e){const t=he(r),n=$r(t),s=oB(t,e);j(rn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.sa.delete(s),t._a.delete(e),t.oa.delete(s),n.Jt()&&nd(t,s),t.sa.size===0&&(n.Jt()?n.Xt():ri(t)&&t.ha.set("Unknown"))}function au(r,e){if(r.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=r.oa.get(e.targetId);if(t===void 0)return void j(rn,"SDK target ID not found for remote ID: "+e.targetId);const n=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}$r(r).Tn(e)}function nd(r,e){r.Ta.H(e),$r(r).Pn(e)}function Bu(r){r.Ta=new ED({getRemoteKeysForTarget:e=>{const t=r.oa.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):ue()},ge:e=>r.sa.get(e)||null,Ae:()=>r.datastore.serializer.databaseId}),$r(r).start(),r.ha.Xo()}function uu(r){return ri(r)&&!$r(r).Ht()&&r.sa.size>0}function ri(r){return he(r).ca.size===0}function rd(r){r.Ta=void 0}async function TI(r){r.ha.set("Online")}async function AI(r){r.sa.forEach(((e,t)=>{au(r,e)}))}async function vI(r,e){rd(r),uu(r)?(r.ha.na(e),Bu(r)):r.ha.set("Unknown")}async function RI(r,e,t){if(r.ha.set("Online"),e instanceof df&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const B of i.targetIds){if(s.sa.has(B)){const u=s.oa.get(B);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s._a.delete(u),s.oa.delete(B)),s.sa.delete(B)}s.Ta.removeTarget(B)}})(r,e)}catch(n){j(rn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ah(r,n)}else if(e instanceof Gi?r.Ta.se(e):e instanceof ff?r.Ta.Ee(e):r.Ta.ae(e),!t.isEqual(ne.min()))try{const n=await ed(r.localStore);t.compareTo(n)>=0&&await(function(i,o){const B=i.Ta.de(o);B.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.sa.get(h);f&&i.sa.set(h,f.withResumeToken(c.resumeToken,o))}})),B.targetMismatches.forEach(((c,h)=>{const f=i.sa.get(c);if(!f)return;i.sa.set(c,f.withResumeToken(Le.EMPTY_BYTE_STRING,f.snapshotVersion)),nd(i,c);const g=new Wt(f.target,c,h,f.sequenceNumber);au(i,g)}));const u=(function(h,f){const g=new Map;f.targetChanges.forEach(((R,x)=>{const J=h.oa.get(x);J!==void 0&&g.set(J,R)}));let T=new Ae(oe);return f.targetMismatches.forEach(((R,x)=>{const J=h.oa.get(R);J!==void 0&&(T=T.insert(J,x))})),new Zs(f.snapshotVersion,g,T,f.documentUpdates,f.augmentedDocumentUpdates,f.resolvedLimboDocuments)})(i,B);return i.remoteSyncer.applyRemoteEvent(u)})(r,t)}catch(n){j(rn,"Failed to raise snapshot:",n),await ah(r,n)}}async function ah(r,e,t){if(!jr(e))throw e;r.ca.add(1),await ni(r),r.ha.set("Offline"),t||(t=()=>ed(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{j(rn,"Retrying IndexedDB access"),await t(),r.ca.delete(1),await Go(r)}))}async function Bh(r,e){const t=he(r);t.asyncQueue.verifyOperationInProgress(),j(rn,"RemoteStore received new credentials");const n=ri(t);t.ca.add(3),await ni(t),n&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await Go(t)}async function PI(r,e){const t=he(r);e?(t.ca.delete(2),await Go(t)):e||(t.ca.add(2),await ni(t),t.ha.set("Unknown"))}function $r(r){return r.Pa||(r.Pa=(function(t,n,s){const i=he(t);return i.mn(),new QD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{ut:TI.bind(null,r),lt:AI.bind(null,r),ht:vI.bind(null,r),hn:RI.bind(null,r)}),r.la.push((async e=>{e?(r.Pa.Zt(),uu(r)?Bu(r):r.ha.set("Unknown")):(await r.Pa.stop(),rd(r))}))),r.Pa}/**
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
 */class sd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):tn("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class cu{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,B=new cu(e,t,o,s,i);return B.start(n),B}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function id(r,e){if(tn("AsyncQueue",`${e}: ${r}`),jr(r))return new q(V.UNAVAILABLE,`${e}: ${r}`);throw r}class uh{constructor(){this.activeTargetIds=pD()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bI{constructor(){this.du=new uh,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,n){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new uh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Pa(){return typeof document<"u"?document:null}/**
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
 */class Zn{static emptySet(e){return new Zn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||W.comparator(t.key,n.key):(t,n)=>W.comparator(t.key,n.key),this.keyedMap=mr(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Zn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class ch{constructor(){this.mu=new Ae(W.comparator)}track(e){const t=e.doc.key,n=this.mu.get(t);n?e.type!==0&&n.type===3?this.mu=this.mu.insert(t,e):e.type===3&&n.type!==1?this.mu=this.mu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.mu=this.mu.remove(t):e.type===1&&n.type===2?this.mu=this.mu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):ee(63341,{ye:e,pu:n}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class kr{constructor(e,t,n,s,i,o,B,u,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=B,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach((B=>{o.push({type:0,doc:B})})),new kr(e,t,Zn.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class SI{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some((e=>e.vu()))}}class NI{constructor(){this.queries=lh(),this.onlineState="Unknown",this.Su=new Set}terminate(){(function(t,n){const s=he(t),i=s.queries;s.queries=lh(),i.forEach(((o,B)=>{for(const u of B.wu)u.onError(n)}))})(this,new q(V.ABORTED,"Firestore shutting down"))}}function lh(){return new Br((r=>zf(r)),Vo)}async function od(r,e){const t=he(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.bu()&&e.vu()&&(n=2):(i=new SI,n=e.vu()?0:1);try{switch(n){case 0:i.yu=await t.onListen(s,!0);break;case 1:i.yu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const B=id(o,`Initialization of query '${Ve(e.query)?Yt(e.query):Is(e.query)}' failed`);return void e.onError(B)}t.queries.set(s,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&lu(t)}async function ad(r,e){const t=he(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.wu.indexOf(e);o>=0&&(i.wu.splice(o,1),i.wu.length===0?s=e.vu()?0:1:!i.bu()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function OI(r,e){const t=he(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const B of o.wu)B.xu(s)&&(n=!0);o.yu=s}}n&&lu(t)}function FI(r,e,t){const n=he(r),s=n.queries.get(e);if(s)for(const i of s.wu)i.onError(t);n.queries.delete(e)}function lu(r){r.Su.forEach((e=>{e.next()}))}var aB;(function(r){r.Default="default",r.Cache="cache"})(aB||(aB={}));class Bd{constructor(e,t,n){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=n||{}}xu(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new kr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.vu())return!0;const n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}vu(){return this.options.source!==aB.Cache}}/**
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
 */class ud{constructor(e){this.key=e}}class cd{constructor(e){this.key=e}}class LI{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=ue(),this.mutatedKeys=ue(),this.Hu=Ve(e)?sB(e):VB(e),this.Ju=new Zn(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const n=t?t.Xu:new ch,s=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,B=!1;const[u,c]=this.ec(this.query,s);e.inorderTraversal(((f,g)=>{const T=s.get(f),R=eI(this.query,g)?g:null,x=!!T&&this.mutatedKeys.has(T.key),J=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let z=!1;T&&R?T.data.isEqual(R.data)?x!==J&&(n.track({type:3,doc:R}),z=!0):this.tc(T,R)||(n.track({type:2,doc:R}),z=!0,(u&&this.Hu(R,u)>0||c&&this.Hu(R,c)<0)&&(B=!0)):!T&&R?(n.track({type:0,doc:R}),z=!0):T&&!R&&(n.track({type:1,doc:T}),z=!0,(u||c)&&(B=!0)),z&&(R?(o=o.add(R),i=J?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}));const h=this.nc(this.query);if(h)if(Ve(this.query)){const f=[];o.forEach((R=>f.push(R)));const g=Yf(this.query,f);let T=new Zn(sB(this.query));for(const R of g)T=T.add(R);o.forEach((R=>{T.has(R.key)||(i=i.delete(R.key),n.track({type:1,doc:R}))})),o=T}else{const f=this.rc(this.query);for(;o.size>h;){const g=f==="F"?o.last():o.first();o=o.delete(g.key),i=i.delete(g.key),n.track({type:1,doc:g})}}return{Ju:o,Xu:n,Fo:B,mutatedKeys:i}}nc(e){var t;return Ve(e)?(t=Ra(e))==null?void 0:t.limit:e.limit||void 0}rc(e){if(Ve(e)){const t=Ra(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){var n;if(Ve(e)){const s=(n=Ra(e))==null?void 0:n.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const o=e.Xu.gu();o.sort(((h,f)=>(function(T,R){const x=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{ye:J})}};return x(T)-x(R)})(h.type,f.type)||this.Hu(h.doc,f.doc))),this.sc(n),s=s??!1;const B=t&&!s?this._c():[],u=this.ju.size===0&&this.current&&!s?1:0,c=u!==this.zu;return this.zu=u,o.length!==0||c?{snapshot:new kr(this.query,e.Ju,i,o,e.mutatedKeys,u===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),oc:B}:{oc:B}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new ch,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach((t=>this.Gu=this.Gu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Gu=this.Gu.delete(t))),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=ue(),this.Ju.forEach((n=>{this.ac(n.key)&&(this.ju=this.ju.add(n.key))}));const t=[];return e.forEach((n=>{this.ju.has(n)||t.push(new cd(n))})),this.ju.forEach((n=>{e.has(n)||t.push(new ud(n))})),t}uc(e){this.Gu=e.Wo,this.ju=ue();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return kr.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const hu="SyncEngine";class kI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class xI{constructor(e){this.key=e,this.lc=!1}}class VI{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ec={},this.hc=new Br((B=>zf(B)),Vo),this.Tc=new Map,this.Pc=new Set,this.Rc=new Ae(W.comparator),this.Ic=new Map,this.Ac=new nu,this.Vc={},this.dc=new Map,this.fc=Ln.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function MI(r,e,t=!0){const n=dd(r);let s;const i=n.hc.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cc()):s=await ld(n,e,t,!0),s}async function GI(r,e){const t=dd(r);await ld(t,e,!0,!1)}async function ld(r,e,t,n){const s=await DI(r.localStore,Ve(e)?e:xt(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let B;return n&&(B=await HI(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&td(r.remoteStore,s),B}async function HI(r,e,t,n,s){r.gc=(f,g,T)=>(async function(x,J,z,se){let ae=J.view.Zu(z);ae.Fo&&(ae=await oh(x.localStore,J.query,!1).then((({documents:A})=>J.view.Zu(A,ae))));const ve=se&&se.targetChanges.get(J.targetId),Ge=se&&se.targetMismatches.get(J.targetId)!=null,Ie=J.view.applyChanges(ae,x.isPrimaryClient,ve,Ge);return Ch(x,J.targetId,Ie.oc),Ie.snapshot})(r,f,g,T);const i=await oh(r.localStore,e,!0),o=new LI(e,i.Wo),B=o.Zu(i.documents),u=ei.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),c=o.applyChanges(B,r.isPrimaryClient,u);Ch(r,t,c.oc);const h=new kI(e,t,o);return r.hc.set(e,h),r.Tc.has(t)?r.Tc.get(t).push(e):r.Tc.set(t,[e]),c.snapshot}async function UI(r,e,t){const n=he(r),s=n.hc.get(e),i=n.Tc.get(s.targetId);if(i.length>1)return n.Tc.set(s.targetId,i.filter((o=>!Vo(o,e)))),void n.hc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await iB(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&ou(n.remoteStore,s.targetId),BB(n,s.targetId)})).catch(So)):(BB(n,s.targetId),await iB(n.localStore,s.targetId,!0))}async function JI(r,e){const t=he(r),n=t.hc.get(e),s=t.Tc.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ou(t.remoteStore,n.targetId))}async function hd(r,e){const t=he(r);try{const n=await EI(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Ic.get(i);o&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?Y(o.lc,14607):s.removedDocuments.size>0&&(Y(o.lc,42227),o.lc=!1))})),await fd(t,n,e)}catch(n){await So(n)}}function hh(r,e,t){const n=he(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.hc.forEach(((i,o)=>{const B=o.view.Du(e);B.snapshot&&s.push(B.snapshot)})),(function(o,B){const u=he(o);u.onlineState=B;let c=!1;u.queries.forEach(((h,f)=>{for(const g of f.wu)g.Du(B)&&(c=!0)})),c&&lu(u)})(n.eventManager,e),s.length&&n.Ec.hn(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function jI(r,e,t){const n=he(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Ic.get(e),i=s&&s.key;if(i){let o=new Ae(W.comparator);o=o.insert(i,$e.newNoDocument(i,ne.min()));const B=ue().add(i),u=new Zs(ne.min(),new Map,new Ae(oe),o,gt(),B);await hd(n,u),n.Rc=n.Rc.remove(i),n.Ic.delete(e),Cu(n)}else await iB(n.localStore,e,!1).then((()=>BB(n,e,t))).catch(So)}function BB(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Tc.get(e))r.hc.delete(n),t&&r.Ec.yc(n,t);r.Tc.delete(e),r.isPrimaryClient&&r.Ac.Xs(e).forEach((n=>{r.Ac.containsKey(n)||Cd(r,n)}))}function Cd(r,e){r.Pc.delete(e.path.canonicalString());const t=r.Rc.get(e);t!==null&&(ou(r.remoteStore,t),r.Rc=r.Rc.remove(e),r.Ic.delete(t),Cu(r))}function Ch(r,e,t){for(const n of t)n instanceof ud?(r.Ac.addReference(n.key,e),qI(r,n)):n instanceof cd?(j(hu,"Document no longer in limbo: "+n.key),r.Ac.removeReference(n.key,e),r.Ac.containsKey(n.key)||Cd(r,n.key)):ee(19791,{wc:n})}function qI(r,e){const t=e.key,n=t.path.canonicalString();r.Rc.get(t)||r.Pc.has(n)||(j(hu,"New document in limbo: "+t),r.Pc.add(n),Cu(r))}function Cu(r){for(;r.Pc.size>0&&r.Rc.size<r.maxConcurrentLimboResolutions;){const e=r.Pc.values().next().value;r.Pc.delete(e);const t=new W(fe.fromString(e)),n=r.fc.next();r.Ic.set(n,new xI(t)),r.Rc=r.Rc.insert(t,n),td(r.remoteStore,new Wt(xt(xB(t.path)),n,"TargetPurposeLimboResolution",bo.yn))}}async function fd(r,e,t){const n=he(r),s=[],i=[],o=[];n.hc.isEmpty()||(n.hc.forEach(((B,u)=>{o.push(n.gc(u,e,t).then((c=>{var h;if((c||t)&&n.isPrimaryClient){const f=c?!c.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:h.current;n.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){s.push(c);const f=su.fo(u.targetId,c);i.push(f)}})))})),await Promise.all(o),n.Ec.hn(s),await(async function(u,c){const h=he(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>L.forEach(c,(g=>L.forEach(g.Ao,(T=>h.persistence.referenceDelegate.addReference(f,g.targetId,T))).next((()=>L.forEach(g.Vo,(T=>h.persistence.referenceDelegate.removeReference(f,g.targetId,T)))))))))}catch(f){if(!jr(f))throw f;j(iu,"Failed to update sequence numbers: "+f)}for(const f of c){const g=f.targetId;if(!f.fromCache){const T=h.No.get(g),R=T.snapshotVersion,x=T.withLastLimboFreeSnapshotVersion(R);h.No=h.No.insert(g,x)}}})(n.localStore,i))}async function KI(r,e){const t=he(r);if(!t.currentUser.isEqual(e)){j(hu,"User change. New user:",e.toKey());const n=await Zf(t.localStore,e);t.currentUser=e,(function(i,o){i.dc.forEach((B=>{B.forEach((u=>{u.reject(new q(V.CANCELLED,o))}))})),i.dc.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await fd(t,n.qo)}}function zI(r,e){const t=he(r),n=t.Ic.get(e);if(n&&n.lc)return ue().add(n.key);{let s=ue();const i=t.Tc.get(e);if(!i)return s;for(const o of i??[]){const B=t.hc.get(o);s=s.unionWith(B.view.Yu)}return s}}function dd(r){const e=he(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=hd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jI.bind(null,e),e.Ec.hn=OI.bind(null,e.eventManager),e.Ec.yc=FI.bind(null,e.eventManager),e}class co{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Po(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Sc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return mI(this.persistence,new dI,e.initialUser,this.serializer)}Sc(e){return new Xf(ru.w_,this.serializer)}vc(e){return new bI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}co.provider={build:()=>new co};class QI extends co{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){Y(this.persistence.referenceDelegate instanceof uo,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new iw(n,e.asyncQueue,t)}Sc(e){const t=this.cacheSizeBytes!==void 0?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new Xf((n=>uo.w_(n,t)),this.serializer)}}class uB{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>hh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=KI.bind(null,this.syncEngine),await PI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new NI})()}createDatastore(e){const t=Po(e.databaseInfo.databaseId),n=KD(e.databaseInfo);return YD(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,o,B){return new II(n,s,i,o,B)})(this.localStore,this.datastore,e.asyncQueue,(t=>hh(this.syncEngine,t,0)),(function(){return $l.Je()?new $l:new UD})())}createSyncEngine(e,t){return(function(s,i,o,B,u,c,h){const f=new VI(s,i,o,B,u,c);return h&&(f.mc=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=he(s);j(rn,"RemoteStore shutting down."),i.ca.add(5),await ni(i),i.Ea.shutdown(),i.ha.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}uB.provider={build:()=>new uB};/**
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
 */const kn="FirestoreClient";class $I{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=SB.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{j(kn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(j(kn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=id(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function ba(r,e){r.asyncQueue.verifyOperationInProgress(),j(kn,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await Zf(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function fh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await WI(r);j(kn,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>Bh(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Bh(e.remoteStore,s))),r._onlineComponents=e}async function WI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){j(kn,"Using user provided OfflineComponentProvider");try{await ba(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;vt("Error using user provided cache. Falling back to memory cache: "+t),await ba(r,new co)}}else j(kn,"Using default OfflineComponentProvider"),await ba(r,new QI(void 0));return r._offlineComponents}async function YI(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(j(kn,"Using user provided OnlineComponentProvider"),await fh(r,r._uninitializedComponentsProvider._online)):(j(kn,"Using default OnlineComponentProvider"),await fh(r,new uB))),r._onlineComponents}async function cB(r){const e=await YI(r),t=e.eventManager;return t.onListen=MI.bind(null,e.syncEngine),t.onUnlisten=UI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=GI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=JI.bind(null,e.syncEngine),t}function XI(r,e,t,n){const s=new sd(n),i=new Bd(e,s,t);return r.asyncQueue.enqueueAndForget((async()=>od(await cB(r),i))),()=>{s.Aa(),r.asyncQueue.enqueueAndForget((async()=>ad(await cB(r),i)))}}function ZI(r,e,t={}){const n=new Xn;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,B,u,c){const h=new sd({next:g=>{h.Aa(),o.enqueueAndForget((()=>ad(i,f))),g.fromCache&&u.source==="server"?c.reject(new q(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new Bd(B instanceof As?qy(B):B,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return od(i,f)})(await cB(r),r.asyncQueue,e,t,n))),n.promise}/**
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
 */const dh="AsyncQueue";class ph{constructor(e=Promise.resolve()){this.Wc=[],this.Qc=!1,this.Gc=[],this.zc=null,this.jc=!1,this.Hc=!1,this.Jc=[],this.jt=new Rf(this,"async_queue_retry"),this.Yc=()=>{const n=Pa();n&&j(dh,"Visibility state changed to "+n.visibilityState),this.jt.qt()},this.Zc=e;const t=Pa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.el(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const t=Pa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise((()=>{}));const t=new Xn;return this.el((()=>this.Qc&&this.Hc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Wc.push(e),this.tl())))}async tl(){if(this.Wc.length!==0){try{await this.Wc[0](),this.Wc.shift(),this.jt.reset()}catch(e){if(!jr(e))throw e;j(dh,"Operation failed with retryable error: "+e)}this.Wc.length>0&&this.jt.Ut((()=>this.tl()))}}el(e){const t=this.Zc.then((()=>(this.jc=!0,e().catch((n=>{throw this.zc=n,this.jc=!1,tn("INTERNAL UNHANDLED ERROR: ",gh(n)),n})).then((n=>(this.jc=!1,n))))));return this.Zc=t,t}enqueueAfterDelay(e,t,n){this.Xc(),this.Jc.indexOf(e)>-1&&(t=0);const s=cu.createAndSchedule(this,e,t,n,(i=>this.nl(i)));return this.Gc.push(s),s}Xc(){this.zc&&ee(47125,{rl:gh(this.zc)})}verifyOperationInProgress(){}async il(){let e;do e=this.Zc,await e;while(e!==this.Zc)}sl(e){for(const t of this.Gc)if(t.timerId===e)return!0;return!1}_l(e){return this.il().then((()=>{this.Gc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.Gc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.il()}))}ol(e){this.Jc.push(e)}nl(e){const t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}function gh(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class lo extends No{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new ph,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ph(e),this._firestoreClient=void 0,await e}}}function eT(r,e){const t=typeof r=="object"?r:go(),n=typeof r=="string"?r:e,s=Mr(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Hh("firestore");i&&Bw(s,...i)}return s}function pd(r){if(r._terminated)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||tT(r),r._firestoreClient}function tT(r){var n,s,i,o;const e=r._freezeSettings(),t=ZD(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new $I(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}})(r._componentsProvider))}/**
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
 */class nT{convertValue(e,t="none"){switch(ke(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Jr(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[Fs].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>ye(o.doubleValue)));return new Bt(t)}convertGeoPoint(e){return new Vt(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ys(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Sr(e));default:return null}}convertTimestamp(e){const t=Pn(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=fe.fromString(e);Y(wf(n),9688,{name:e});const s=new Ns(n.get(1),n.get(3)),i=new W(n.popFirst(5));return s.isEqual(t)||tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class fu extends nT{constructor(e){super(),this.firestore=e}convertBytes(e){return new _t(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}}/**
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
 */function mh(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}const Eh="@firebase/firestore",_h="4.17.0";/**
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
 */let gd=class{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(jB("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},rT=class extends gd{data(){return super.data()}};/**
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
 */function md(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new q(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class du{}class Ed extends du{}function sT(r,e,...t){let n=[];e instanceof du&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((u=>u instanceof gu)).length,B=i.filter((u=>u instanceof pu)).length;if(o>1||o>0&&B>0)throw new q(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class pu extends Ed{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new pu(e,t,n)}_apply(e){const t=this._parse(e);return _d(e._query,t),new xn(e.firestore,e.converter,Za(e._query,t))}_parse(e){const t=Cw(e.firestore);return(function(i,o,B,u,c,h,f){let g;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){wh(f,h);const R=[];for(const x of f)R.push(Dh(u,i,x));g={arrayValue:{values:R}}}else g=Dh(u,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||wh(f,h),g=fw(B,o,f,h==="in"||h==="not-in");return be.create(c,h,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class gu extends du{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new gu(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Rt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const B=i.getFlattenedFilters();for(const u of B)_d(o,u),o=Za(o,u)})(e._query,t),new xn(e.firestore,e.converter,Za(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mu extends Ed{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new mu(e,t,n)}_apply(e){return new xn(e.firestore,e.converter,io(e._query,this._limit,this._limitType))}}function iT(r){return mu._create("limit",r,"F")}function Dh(r,e,t){if(typeof(t=Fe(t))=="string"){if(t==="")throw new q(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cf(e)&&t.indexOf("/")!==-1)throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(fe.fromString(t));if(!W.isDocumentKey(n))throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Ol(r,new W(n))}if(t instanceof Ne)return Ol(r,t._key);throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wo(t)}.`)}function wh(r,e){if(!Array.isArray(r)||r.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _d(r,e){const t=(function(s,i){for(const o of s)for(const B of o.getFlattenedFilters())if(i.indexOf(B.op)>=0)return B.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ms{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class er extends gd{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(jB("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=er._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}er._jsonSchemaVersion="firestore/documentSnapshot/1.0",er._jsonSchema={type:Se("string",er._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class Ui extends er{data(e={}){return super.data(e)}}class tr{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ms(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ui(this._firestore,this._userDataWriter,n.key,n,new ms(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((B=>{Ve(s._snapshot.query)?sB(s._snapshot.query):VB(s.query._query);const u=new Ui(s._firestore,s._userDataWriter,B.doc.key,B.doc,new ms(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);return B.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((B=>i||B.type!==3)).map((B=>{const u=new Ui(s._firestore,s._userDataWriter,B.doc.key,B.doc,new ms(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return B.type!==0&&(c=o.indexOf(B.doc.key),o=o.delete(B.doc.key)),B.type!==1&&(o=o.add(B.doc),h=o.indexOf(B.doc.key)),{type:oT(B.type),doc:u,oldIndex:c,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=tr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=SB.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function oT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:r})}}/**
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
 */tr._jsonSchemaVersion="firestore/querySnapshot/1.0",tr._jsonSchema={type:Se("string",tr._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};function aT(r){r=Tr(r,xn);const e=Tr(r.firestore,lo),t=pd(e),n=new fu(e);return md(r._query),ZI(t,r._query).then((s=>new tr(e,n,r,s)))}function BT(r,...e){var c,h,f;r=Fe(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||mh(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(mh(e[n])){const g=e[n];e[n]=(c=g.next)==null?void 0:c.bind(g),e[n+1]=(h=g.error)==null?void 0:h.bind(g),e[n+2]=(f=g.complete)==null?void 0:f.bind(g)}let i,o,B;if(r instanceof Ne)o=Tr(r.firestore,lo),B=xB(r._key.path),i={next:g=>{e[n]&&e[n](uT(o,r,g))},error:e[n+1],complete:e[n+2]};else{const g=Tr(r,xn);o=Tr(g.firestore,lo),B=g._query;const T=new fu(o);i={next:R=>{e[n]&&e[n](new tr(o,T,g,R))},error:e[n+1],complete:e[n+2]},md(r._query)}const u=pd(o);return XI(u,B,s,i)}function uT(r,e,t){const n=t.docs.get(e._key),s=new fu(r);return new er(r,s,e._key,n,new ms(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){A_(Gr),Zt(new Mt("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),B=new lo(new VD(n.getProvider("auth-internal")),new HD(o,n.getProvider("app-check-internal")),L_(o,s),o);return i={useFetchStreams:t,...i},B._setSettings(i),B}),"PUBLIC").setMultipleInstances(!0)),At(Eh,_h,e),At(Eh,_h,"esm2020")})();/**
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
 */const cT="type.googleapis.com/google.protobuf.Int64Value",lT="type.googleapis.com/google.protobuf.UInt64Value";function Dd(r,e){const t={};for(const n in r)r.hasOwnProperty(n)&&(t[n]=e(r[n]));return t}function ho(r){if(r==null)return null;if(r instanceof Number&&(r=r.valueOf()),typeof r=="number"&&isFinite(r)||r===!0||r===!1||Object.prototype.toString.call(r)==="[object String]")return r;if(r instanceof Date)return r.toISOString();if(Array.isArray(r))return r.map(e=>ho(e));if(typeof r=="function"||typeof r=="object")return Dd(r,e=>ho(e));throw new Error("Data cannot be encoded in JSON: "+r)}function xr(r){if(r==null)return r;if(r["@type"])switch(r["@type"]){case cT:case lT:{const e=Number(r.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+r);return e}default:throw new Error("Data cannot be decoded from JSON: "+r)}return Array.isArray(r)?r.map(e=>xr(e)):typeof r=="function"||typeof r=="object"?Dd(r,e=>xr(e)):r}/**
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
 */const Eu="functions";/**
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
 */const yh={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ot extends Ut{constructor(e,t,n){super(`${Eu}/${e}`,t||""),this.details=n,Object.setPrototypeOf(this,ot.prototype)}}function hT(r){if(r>=200&&r<300)return"ok";switch(r){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Co(r,e){let t=hT(r),n=t,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!yh[o])return new ot("internal","internal");t=yh[o],n=o}const B=i.message;typeof B=="string"&&(n=B),s=i.details,s!==void 0&&(s=xr(s))}}catch{}return t==="ok"?null:new ot(t,n,s)}/**
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
 */class CT{constructor(e,t,n,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,dt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),n=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:n,appCheckToken:s}}}/**
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
 */const lB="us-central1",fT=/^data: (.*?)(?:\n|$)/;function dT(r){let e=null;return{promise:new Promise((t,n)=>{e=setTimeout(()=>{n(new ot("deadline-exceeded","deadline-exceeded"))},r)}),cancel:()=>{e&&clearTimeout(e)}}}class pT{constructor(e,t,n,s,i=lB,o=(...B)=>fetch(...B)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new CT(e,t,n,s),this.cancelAllRequests=new Promise(B=>{this.deleteService=()=>Promise.resolve(B())});try{const B=new URL(i);this.customDomain=B.origin+(B.pathname==="/"?"":B.pathname),this.region=lB}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function gT(r,e,t){const n=ar(e);r.emulatorOrigin=`http${n?"s":""}://${e}:${t}`,n&&pB(r.emulatorOrigin+"/backends")}function mT(r,e,t){const n=s=>_T(r,e,s,{});return n.stream=(s,i)=>wT(r,e,s,i),n}function wd(r){return r.emulatorOrigin&&ar(r.emulatorOrigin)?"include":void 0}async function ET(r,e,t,n,s){t["Content-Type"]="application/json";let i;try{i=await n(r,{method:"POST",body:JSON.stringify(e),headers:t,credentials:wd(s)})}catch{return{status:0,json:null}}let o=null;try{o=await i.json()}catch{}return{status:i.status,json:o}}async function yd(r,e){const t={},n=await r.contextProvider.getContext(e.limitedUseAppCheckTokens);return n.authToken&&(t.Authorization="Bearer "+n.authToken),n.messagingToken&&(t["Firebase-Instance-ID-Token"]=n.messagingToken),n.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=n.appCheckToken),t}function _T(r,e,t,n){const s=r._url(e);return DT(r,s,t,n)}async function DT(r,e,t,n){t=ho(t);const s={data:t},i=await yd(r,n),o=n.timeout||7e4,B=dT(o),u=await Promise.race([ET(e,s,i,r.fetchImpl,r),B.promise,r.cancelAllRequests]);if(B.cancel(),!u)throw new ot("cancelled","Firebase Functions instance was deleted.");const c=Co(u.status,u.json);if(c)throw c;if(!u.json)throw new ot("internal","Response is not valid JSON object.");let h=u.json.data;if(typeof h>"u"&&(h=u.json.result),typeof h>"u")throw new ot("internal","Response is missing data field.");return{data:xr(h)}}function wT(r,e,t,n){const s=r._url(e);return yT(r,s,t,n||{})}async function yT(r,e,t,n){var g;t=ho(t);const s={data:t},i=await yd(r,n);i["Content-Type"]="application/json",i.Accept="text/event-stream";let o;try{o=await r.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:i,signal:n==null?void 0:n.signal,credentials:wd(r)})}catch(T){if(T instanceof Error&&T.name==="AbortError"){const x=new ot("cancelled","Request was cancelled.");return{data:Promise.reject(x),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(x)}}}}}}const R=Co(0,null);return{data:Promise.reject(R),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(R)}}}}}}let B,u;const c=new Promise((T,R)=>{B=T,u=R});(g=n==null?void 0:n.signal)==null||g.addEventListener("abort",()=>{const T=new ot("cancelled","Request was cancelled.");u(T)});const h=o.body.getReader(),f=IT(h,B,u,n==null?void 0:n.signal);return{stream:{[Symbol.asyncIterator](){const T=f.getReader();return{async next(){const{value:R,done:x}=await T.read();return{value:R,done:x}},async return(){return await T.cancel(),{done:!0,value:void 0}}}}},data:c}}function IT(r,e,t,n){const s=(o,B)=>{const u=o.match(fT);if(!u)return;const c=u[1];try{const h=JSON.parse(c);if("result"in h){e(xr(h.result));return}if("message"in h){B.enqueue(xr(h.message));return}if("error"in h){const f=Co(0,h);B.error(f),t(f);return}}catch(h){if(h instanceof ot){B.error(h),t(h);return}}},i=new TextDecoder;return new ReadableStream({start(o){let B="";return u();async function u(){if(n!=null&&n.aborted){const c=new ot("cancelled","Request was cancelled");return o.error(c),t(c),Promise.resolve()}try{const{value:c,done:h}=await r.read();if(h){B.trim()&&s(B.trim(),o),o.close();return}if(n!=null&&n.aborted){const g=new ot("cancelled","Request was cancelled");o.error(g),t(g),await r.cancel();return}B+=i.decode(c,{stream:!0});const f=B.split(`
`);B=f.pop()||"";for(const g of f)g.trim()&&s(g.trim(),o);return u()}catch(c){const h=c instanceof ot?c:Co(0,null);o.error(h),t(h)}}},cancel(){return r.cancel()}})}const Ih="@firebase/functions",Th="0.13.6";/**
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
 */const TT="auth-internal",AT="app-check-internal",vT="messaging-internal";function RT(r){const e=(t,{instanceIdentifier:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider(TT),o=t.getProvider(vT),B=t.getProvider(AT);return new pT(s,i,o,B,n)};Zt(new Mt(Eu,e,"PUBLIC").setMultipleInstances(!0)),At(Ih,Th,r),At(Ih,Th,"esm2020")}/**
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
 */function PT(r=go(),e=lB){const n=Mr(Fe(r),Eu).getImmediate({identifier:e}),s=Hh("functions");return s&&bT(n,...s),n}function bT(r,e,t){gT(Fe(r),e,t)}function Ah(r,e,t){return mT(Fe(r),e)}/**
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
 */RT();var ST="firebase",NT="12.17.1";/**
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
 */At(ST,NT,"app");/**
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
 */const hB=new Map,Id={activated:!1,tokenObservers:[]},OT={initialized:!1,enabled:!1};function Me(r){return hB.get(r)||{...Id}}function FT(r,e){return hB.set(r,e),hB.get(r)}function Ho(){return OT}/**
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
 */const Td="https://content-firebaseappcheck.googleapis.com/v1",LT="exchangeRecaptchaEnterpriseToken",kT="exchangeDebugToken",vh={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},xT=1440*60*1e3;/**
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
 */class VT{constructor(e,t,n,s,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Rs,this.pending.promise.catch(t=>{}),await MT(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Rs,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function MT(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */const GT={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},at=new Vr("appCheck","AppCheck",GT);/**
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
 */function Rh(r=!1){var e;return r?(e=self.grecaptcha)==null?void 0:e.enterprise:self.grecaptcha}function _u(r){if(!Me(r).activated)throw at.create("use-before-activation",{appName:r.name})}function Ad(r){const e=Math.round(r/1e3),t=Math.floor(e/(3600*24)),n=Math.floor((e-t*3600*24)/3600),s=Math.floor((e-t*3600*24-n*3600)/60),i=e-t*3600*24-n*3600-s*60;let o="";return t&&(o+=Si(t)+"d:"),n&&(o+=Si(n)+"h:"),o+=Si(s)+"m:"+Si(i)+"s",o}function Si(r){return r===0?"00":r>=10?r.toString():"0"+r}/**
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
 */async function Du({url:r,body:e},t){const n={"Content-Type":"application/json"},s=t.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&(n["X-Firebase-Client"]=f)}const i={method:"POST",body:JSON.stringify(e),headers:n};let o;try{o=await fetch(r,i)}catch(f){throw at.create("fetch-network-error",{originalErrorMessage:f==null?void 0:f.message})}if(o.status!==200)throw at.create("fetch-status-error",{httpStatus:o.status});let B;try{B=await o.json()}catch(f){throw at.create("fetch-parse-error",{originalErrorMessage:f==null?void 0:f.message})}const u=B.ttl.match(/^([\d.]+)(s)$/);if(!u||!u[2]||isNaN(Number(u[1])))throw at.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${B.ttl}`});const c=Number(u[1])*1e3,h=Date.now();return{token:B.token,expireTimeMillis:h+c,issuedAtTimeMillis:h}}function HT(r,e){const{projectId:t,appId:n,apiKey:s}=r.options;return{url:`${Td}/projects/${t}/apps/${n}:${LT}?key=${s}`,body:{recaptcha_enterprise_token:e}}}function vd(r,e){const{projectId:t,appId:n,apiKey:s}=r.options;return{url:`${Td}/projects/${t}/apps/${n}:${kT}?key=${s}`,body:{debug_token:e}}}/**
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
 */const UT="firebase-app-check-database",JT=1,Js="firebase-app-check-store",Rd="debug-token";let Ni=null;function Pd(){return Ni||(Ni=new Promise((r,e)=>{try{const t=indexedDB.open(UT,JT);t.onsuccess=n=>{r(n.target.result)},t.onerror=n=>{var s;e(at.create("storage-open",{originalErrorMessage:(s=n.target.error)==null?void 0:s.message}))},t.onupgradeneeded=n=>{const s=n.target.result;switch(n.oldVersion){case 0:s.createObjectStore(Js,{keyPath:"compositeKey"})}}}catch(t){e(at.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Ni)}function jT(r){return Sd(Nd(r))}function qT(r,e){return bd(Nd(r),e)}function KT(r){return bd(Rd,r)}function zT(){return Sd(Rd)}async function bd(r,e){const n=(await Pd()).transaction(Js,"readwrite"),i=n.objectStore(Js).put({compositeKey:r,value:e});return new Promise((o,B)=>{i.onsuccess=u=>{o()},n.onerror=u=>{var c;B(at.create("storage-set",{originalErrorMessage:(c=u.target.error)==null?void 0:c.message}))}})}async function Sd(r){const t=(await Pd()).transaction(Js,"readonly"),s=t.objectStore(Js).get(r);return new Promise((i,o)=>{s.onsuccess=B=>{const u=B.target.result;i(u?u.value:void 0)},t.onerror=B=>{var u;o(at.create("storage-get",{originalErrorMessage:(u=B.target.error)==null?void 0:u.message}))}})}function Nd(r){return`${r.options.appId}-${r.name}`}/**
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
 */const wn=new po("@firebase/app-check");/**
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
 */async function QT(r){if(dB()){let e;try{e=await jT(r)}catch(t){wn.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function Sa(r,e){return dB()?qT(r,e).catch(t=>{wn.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function $T(){let r;try{r=await zT()}catch{}if(r)return r;{const e=crypto.randomUUID();return KT(e).catch(t=>wn.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
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
 */function wu(){return Ho().enabled}async function yu(){const r=Ho();if(r.enabled&&r.token)return r.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function WT(){const r=Mh(),e=Ho();if(e.initialized=!0,typeof r.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&r.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new Rs;e.token=t,typeof r.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(r.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve($T())}/**
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
 */const YT={error:"UNKNOWN_ERROR"};function XT(r){return fB.encodeString(JSON.stringify(r),!1)}async function CB(r,e=!1,t=!1){const n=r.app;_u(n);const s=Me(n);let i=s.token,o;if(i&&!Dr(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(Dr(c)?i=c:await Sa(n,void 0))}if(!e&&i&&Dr(i))return{token:i.token};let B=!1;if(wu())try{const c=await yu();s.exchangeTokenPromise||(s.exchangeTokenPromise=Du(vd(n,c),r.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),B=!0);const h=await s.exchangeTokenPromise;return await Sa(n,h),s.token=h,{token:h.token}}catch(c){return c.code==="appCheck/throttled"||c.code==="appCheck/initial-throttle"?wn.warn(c.message):t&&wn.error(c),Na(c)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),B=!0),i=await Me(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"||c.code==="appCheck/initial-throttle"?wn.warn(c.message):t&&wn.error(c),o=c}let u;return i?o?Dr(i)?u={token:i.token,internalError:o}:u=Na(o):(u={token:i.token},s.token=i,await Sa(n,i)):u=Na(o),B&&Ld(n,u),u}async function ZT(r){const e=r.app;_u(e);const{provider:t}=Me(e);if(wu()){const n=await yu(),s=vd(e,n);s.body.limited_use=!0;const{token:i}=await Du(s,r.heartbeatServiceProvider);return{token:i}}else{const{token:n}=await t.getToken(!0);return{token:n}}}function Od(r,e,t,n){const{app:s}=r,i=Me(s),o={next:t,error:n,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Dr(i.token)){const B=i.token;Promise.resolve().then(()=>{t({token:B.token}),Ph(r)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Ph(r))}function Fd(r,e){const t=Me(r),n=t.tokenObservers.filter(s=>s.next!==e);n.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=n}function Ph(r){const{app:e}=r,t=Me(e);let n=t.tokenRefresher;n||(n=eA(r),t.tokenRefresher=n),!n.isRunning()&&t.isTokenAutoRefreshEnabled&&n.start()}function eA(r){const{app:e}=r;return new VT(async()=>{const t=Me(e);let n;if(t.token?n=await CB(r,!0):n=await CB(r),n.error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{const t=Me(e);if(t.token){let n=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const s=t.token.expireTimeMillis-300*1e3;return n=Math.min(n,s),Math.max(0,n-Date.now())}else return 0},vh.RETRIAL_MIN_WAIT,vh.RETRIAL_MAX_WAIT)}function Ld(r,e){const t=Me(r).tokenObservers;for(const n of t)try{n.type==="EXTERNAL"&&e.error!=null?n.error(e.error):n.next(e)}catch{}}function Dr(r){return r.expireTimeMillis-Date.now()>0}function Na(r){return{token:XT(YT),error:r}}/**
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
 */class tA{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Me(this.app);for(const t of e)Fd(this.app,t.next);return Promise.resolve()}}function nA(r,e){return new tA(r,e)}function rA(r){return{getToken:e=>CB(r,e),getLimitedUseToken:()=>ZT(r),addTokenListener:e=>Od(r,"INTERNAL",e),removeTokenListener:e=>Fd(r.app,e)}}const sA="@firebase/app-check",iA="0.13.0",oA="https://www.google.com/recaptcha/enterprise.js";function aA(r,e){const t=new Rs,n=Me(r);n.reCAPTCHAState={initialized:t};const s=BA(r),i=Rh(!0);return i?bh(r,e,i,s,t):lA(()=>{const o=Rh(!0);if(!o)throw new Error("no recaptcha");bh(r,e,o,s,t)}),t.promise}function bh(r,e,t,n,s){t.ready(()=>{cA(r,e,t,n),s.resolve(t)})}function BA(r){const e=`fire_app_check_${r.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function uA(r){_u(r);const t=await Me(r).reCAPTCHAState.initialized.promise;return new Promise((n,s)=>{const i=Me(r).reCAPTCHAState;t.ready(()=>{n(t.execute(i.widgetId,{action:"fire_app_check"}))})})}function cA(r,e,t,n){const s=t.render(n,{sitekey:e,size:"invisible",callback:()=>{Me(r).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Me(r).reCAPTCHAState.succeeded=!1}}),i=Me(r);i.reCAPTCHAState={...i.reCAPTCHAState,widgetId:s}}function lA(r){const e=document.createElement("script");e.src=oA+"?render=explicit",e.onload=r,document.head.appendChild(e)}class Iu{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(e=!1){var s,i,o;CA(this._throttleData);const t=await uA(this._app).catch(B=>{throw at.create("recaptcha-error")});if(!((s=Me(this._app).reCAPTCHAState)!=null&&s.succeeded))throw at.create("recaptcha-error");let n;try{const B=HT(this._app,t);e&&(B.body.limited_use=!0),n=await Du(B,this._heartbeatServiceProvider)}catch(B){throw(i=B.code)!=null&&i.includes("fetch-status-error")?(this._throttleData=hA(Number((o=B.customData)==null?void 0:o.httpStatus),this._throttleData),at.create("initial-throttle",{time:Ad(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):B}return this._throttleData=null,n}initialize(e){this._app=e,this._heartbeatServiceProvider=Mr(e,"heartbeat"),aA(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Iu?this._siteKey===e._siteKey:!1}}function hA(r,e){if(r===404||r===403)return{backoffCount:1,allowRequestsAfter:Date.now()+xT,httpStatus:r};{const t=e?e.backoffCount:0,n=jp(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+n,httpStatus:r}}}function CA(r){if(r&&Date.now()-r.allowRequestsAfter<=0)throw at.create("throttled",{time:Ad(r.allowRequestsAfter-Date.now()),httpStatus:r.httpStatus})}/**
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
 */function fA(r=go(),e){var s;r=Fe(r);const t=Mr(r,"app-check");if(Ho().initialized||WT(),wu()&&yu().then(i=>console.log(`App Check debug token: ${i}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(o&&!!o.isTokenAutoRefreshEnabled==!!e.isTokenAutoRefreshEnabled&&((s=o.provider)!=null&&s.isEqual(e.provider)))return i;throw at.create("already-initialized",{appName:r.name})}const n=t.initialize({options:e});return dA(r,e.provider,e.isTokenAutoRefreshEnabled),Me(r).isTokenAutoRefreshEnabled&&Od(n,"INTERNAL",()=>{}),n}function dA(r,e,t=!1){const n=FT(r,{...Id});n.activated=!0,n.provider=e,n.cachedTokenPromise=QT(r).then(s=>(s&&Dr(s)&&(n.token=s,Ld(r,{token:s.token})),s)),n.isTokenAutoRefreshEnabled=t&&r.automaticDataCollectionEnabled,!r.automaticDataCollectionEnabled&&t&&wn.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),n.provider.initialize(r)}/**
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
 */const pA="app-check",Sh="app-check-internal";function gA(){Zt(new Mt(pA,r=>{const e=r.getProvider("app").getImmediate(),t=r.getProvider("heartbeat");return nA(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((r,e,t)=>{r.getProvider(Sh).initialize()})),Zt(new Mt(Sh,r=>{const e=r.getProvider("app-check").getImmediate();return rA(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),At(sA,iA)}gA();const kd={apiKey:"AIzaSyAnC-SqaCo0m5MW9HOvt7VOfzPZ10QOD6g",authDomain:"family-tree-d66cd.firebaseapp.com",projectId:"family-tree-d66cd",storageBucket:"family-tree-d66cd.firebasestorage.app",messagingSenderId:"646485716163",appId:"1:646485716163:web:02904942642f72114e4676"},Nh=Object.entries(kd).filter(([,r])=>!r).map(([r])=>r);if(Nh.length>0)throw new Error(`Firebase config is incomplete (${Nh.join(", ")}). Copy .env.example to .env.local.`);const Uo=Kh(kd),mA="6LcwW34tAAAAAPB27BascdAoO37XGT7aGx9JP9yx";fA(Uo,{provider:new Iu(mA),isTokenAutoRefreshEnabled:!0});const fs=YE(Uo),Oh=PT(Uo,"us-central1"),Fh=eT(Uo,"familytree"),EA={MEASURING:"Preparing",STORAGE:"Photos",FIRESTORE:"Records",AUTH:"Account"};function _A(r){const e=r.totalBytes??0,t=r.totalDocs??0,n=e>0?(r.deletedBytes??0)/e:1,s=t>0?(r.deletedDocs??0)/t:1;return Math.min(1,Math.max(0,.9*n+.1*s))}function DA(r){return r.toLocaleString(void 0,{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"2-digit"})}const wA=120;async function Lh(r){if(!r)return!1;try{const e=await r.getIdTokenResult(!0),t=Date.parse(e.authTime);return Number.isNaN(t)?!1:(Date.now()-t)/1e3<wA}catch{return!1}}function yA(r){const e=(r==null?void 0:r.code)??"";return e==="auth/popup-closed-by-user"||e==="auth/cancelled-popup-request"?"Sign-in was cancelled.":e==="auth/unauthorized-domain"?"This site is not yet authorized for sign-in. Please try again shortly.":e==="auth/popup-blocked"?"Your browser blocked the sign-in popup. Allow popups for this site and try again.":"Could not sign you in. Please try again."}function kh(r){const e=(r==null?void 0:r.message)??"";return e.includes("REAUTH_REQUIRED")?"Your sign-in has expired. Sign in again and retry.":e.includes("ALREADY_STARTED")?"The deletion has already started and can no longer be cancelled.":e.includes("ALREADY_COMPLETED")?"This account has already been deleted.":e.includes("NOT_SCHEDULED")?"No deletion is scheduled for this account.":`Something went wrong. Please try again, or email ${Jt.contactEmail}.`}function bA(){const[r,e]=ln.useState(null),[t,n]=ln.useState(void 0),[s,i]=ln.useState(void 0),[o,B]=ln.useState(!1),[u,c]=ln.useState(null);ln.useEffect(()=>Vm(fs,e),[]),ln.useEffect(()=>{if(!r){n(void 0);return}return BT(cw(Fh,"accountDeletions",r.uid),ae=>n(ae.exists()?ae.data():null),()=>{})},[r]),ln.useEffect(()=>{if(!r){i(void 0);return}let ae=!1;return aT(sT(uw(Fh,"users",r.uid,"persons"),iT(1))).then(ve=>{ae||i(!ve.empty)}).catch(()=>{ae||i(!0)}),()=>{ae=!0}},[r]);async function h(){c(null);try{await iE(fs,new Nt)}catch(ae){if(await Lh(fs.currentUser))return;c(yA(ae))}}async function f(){if(r){c(null),B(!0);try{try{await oE(r,new Nt)}catch(ae){if(!await Lh(fs.currentUser))throw ae}await Ah(Oh,"requestAccountDeletion")({from:"WEB"})}catch(ae){c(kh(ae))}finally{B(!1)}}}async function g(){c(null),B(!0);try{await Ah(Oh,"cancelAccountDeletion")()}catch(ae){c(kh(ae))}finally{B(!1)}}async function T(){await Mm(fs).catch(()=>{}),e(null),n(void 0),i(void 0),c(null)}const R=(t==null?void 0:t.status)==="SCHEDULED",x=(t==null?void 0:t.status)==="RUNNING",J=(t==null?void 0:t.status)==="FAILED",z=t===null&&s===!0||(t==null?void 0:t.status)==="CANCELLED",se=t===null&&s===!1;return X.jsx(gp,{children:X.jsxs("article",{className:"container doc section",style:{maxWidth:"640px"},children:[X.jsx("span",{className:"overline",children:"Account & data deletion"}),X.jsx("h1",{children:"Delete your account & data"}),X.jsxs("p",{className:"lede",children:["Sign in with the Google account you use in ",Jt.appName," to erase all of your data. This is the same as ",X.jsx("em",{children:"Settings → Delete account"})," inside the app."]}),X.jsx("div",{className:"callout",children:X.jsxs("p",{children:[X.jsx("strong",{children:"Deletion happens seven days after you ask for it."})," During those seven days your account is locked and you can cancel at any time. After that, every person you added and their relationship links, all photos you uploaded, and your ",Jt.appName," ","account and Google sign-in are permanently removed. There is no way to recover it."]})}),u&&X.jsx("p",{style:{color:"var(--secondary)"},children:u}),!r&&X.jsxs(X.Fragment,{children:[X.jsx("div",{className:"cta-row",style:{justifyContent:"flex-start"},children:X.jsx("button",{className:"btn btn-primary",onClick:h,children:"Continue with Google"})}),X.jsx("p",{className:"updated",style:{marginTop:"16px"},children:"You’ll be asked to sign in so we can verify it’s really you."})]}),r&&(t===void 0||s===void 0)&&X.jsx("p",{className:"lede",children:"Checking your account…"}),r&&se&&X.jsxs(X.Fragment,{children:[X.jsxs("p",{className:"lede",children:["There is no ",Jt.appName," account for ",X.jsx("strong",{children:r.email}),"."]}),X.jsxs("p",{children:["Nothing has been created with this Google account, so there is nothing to delete. If you use ",Jt.appName," with a different Google account, sign out and sign in with that one instead."]}),X.jsx("div",{className:"cta-row",style:{justifyContent:"flex-start"},children:X.jsx("button",{className:"btn btn-primary",onClick:T,disabled:o,children:"Sign in with a different account"})})]}),(t==null?void 0:t.status)==="CANCELLED"&&X.jsx("p",{children:"The scheduled deletion was cancelled. Your account and data are untouched."}),r&&z&&X.jsxs(X.Fragment,{children:[X.jsxs("p",{children:["Signed in as ",X.jsx("strong",{children:r.email}),"."]}),X.jsxs("div",{className:"cta-row",style:{justifyContent:"flex-start"},children:[X.jsx("button",{className:"btn btn-danger",onClick:f,disabled:o,children:o?"Scheduling…":"Schedule deletion"}),X.jsx("button",{className:"btn btn-ghost",onClick:T,disabled:o,children:"Cancel"})]})]}),R&&X.jsxs("div",{className:"callout",style:{borderColor:"var(--primary)"},children:[X.jsxs("p",{children:[X.jsxs("strong",{children:["Your account is scheduled for deletion",t!=null&&t.scheduledFor?` on ${DA(t.scheduledFor.toDate())}`:"","."]})," ","Until then your family tree is locked in the app. You can cancel any time before that date."]}),X.jsx("div",{className:"cta-row",style:{justifyContent:"flex-start"},children:X.jsx("button",{className:"btn btn-primary",onClick:g,disabled:o,children:o?"Cancelling…":"Cancel deletion"})})]}),x&&t&&X.jsx("div",{className:"callout",children:X.jsxs("p",{children:[X.jsx("strong",{children:"Deleting your account."})," ",EA[t.phase]??"Working"," —"," ",Math.round(_A(t)*100),"%. You can close this page; it will finish on its own."]})}),(t==null?void 0:t.status)==="COMPLETED"&&X.jsx("div",{className:"callout",style:{borderColor:"var(--primary)"},children:X.jsxs("p",{children:[X.jsx("strong",{children:"Done."})," Your ",Jt.appName," account and all associated data have been permanently deleted. You can close this page."]})}),J&&X.jsxs(X.Fragment,{children:[X.jsx("p",{style:{color:"var(--secondary)"},children:"The deletion could not be completed. Nothing further was deleted."}),X.jsx("div",{className:"cta-row",style:{justifyContent:"flex-start"},children:X.jsx("button",{className:"btn btn-primary",onClick:f,disabled:o,children:"Try again"})})]}),X.jsx("h2",{style:{marginTop:"2.5rem"},id:"prefer-in-app",children:"Prefer to do it in the app?"}),X.jsxs("p",{children:["Open ",Jt.appName," on your device and go to ",X.jsx("strong",{children:"Settings → Delete account"}),". You can also delete individual people (and their photos) from a person’s screen without deleting your whole account. Questions? Email"," ",X.jsx("a",{href:`mailto:${Jt.contactEmail}`,children:Jt.contactEmail}),"."]})]})})}export{bA as DeleteAccount};
