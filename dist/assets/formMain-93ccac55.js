import{_ as te,o as A,c as z,t as me,a as ve,b as w,m as Ie,p as $e,d as ge,g as Le,r as x,e as Fe,w as F,i as X,f as U,h as De,j as h,k as Te,l as Me,u as l,n as ne,q as se,s as oe,v as he,x as ke,y as qe,z as Be,A as _,B as N,F as Ge,C as Ue,D as He,E as Ze,G as be,H as we,I as We}from"./index-902ff64d.js";const k="/assets/down-arrow-5b6fea04.svg",Ke="/assets/checkmark-bca83c39.svg",Je=e=>($e("data-v-6d1d12d5"),e=e(),ge(),e),Qe={class:"input-wrapper"},Xe={key:0,class:"input-name"},Ye=["value"],et=Je(()=>w("div",{class:"underline"},null,-1)),tt={__name:"inputTemplate",props:{label:{type:String,Boolean,default:!1},modelValue:{type:String,default:""}},setup(e){return(a,r)=>(A(),z("div",Qe,[e.label?(A(),z("p",Xe,me(e.label),1)):ve("",!0),w("input",Ie({type:"text",value:e.modelValue,onInput:r[0]||(r[0]=t=>a.$emit("update:modelValue",t.target.value))},a.$attrs),null,16,Ye),et]))}},I=te(tt,[["__scopeId","data-v-6d1d12d5"]]);function ie(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,t)}return r}function j(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?ie(Object(r),!0).forEach(function(t){rt(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function rt(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function le(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((r,t)=>(a.includes(t)||(r[t]=l(e[t])),r),{})}function B(e){return typeof e=="function"}function at(e){return Te(e)||Me(e)}function ye(e,a,r){let t=e;const s=a.split(".");for(let o=0;o<s.length;o++){if(!t[s[o]])return r;t=t[s[o]]}return t}function Q(e,a,r){return h(()=>e.some(t=>ye(a,t,{[r]:!1})[r]))}function ue(e,a,r){return h(()=>e.reduce((t,s)=>{const o=ye(a,s,{[r]:!1})[r]||[];return t.concat(o)},[]))}function _e(e,a,r,t){return e.call(t,l(a),l(r),t)}function Oe(e){return e.$valid!==void 0?!e.$valid:!e}function nt(e,a,r,t,s,o,$){let{$lazy:d,$rewardEarly:f}=s,i=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],m=arguments.length>8?arguments[8]:void 0,u=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0;const v=x(!!t.value),n=x(0);r.value=!1;const c=F([a,t].concat(i,g),()=>{if(d&&!t.value||f&&!u.value&&!r.value)return;let p;try{p=_e(e,a,m,$)}catch(b){p=Promise.reject(b)}n.value++,r.value=!!n.value,v.value=!1,Promise.resolve(p).then(b=>{n.value--,r.value=!!n.value,o.value=b,v.value=Oe(b)}).catch(b=>{n.value--,r.value=!!n.value,o.value=b,v.value=!0})},{immediate:!0,deep:typeof a=="object"});return{$invalid:v,$unwatch:c}}function st(e,a,r,t,s,o,$,d){let{$lazy:f,$rewardEarly:i}=t;const m=()=>({}),u=h(()=>{if(f&&!r.value||i&&!d.value)return!1;let g=!0;try{const v=_e(e,a,$,o);s.value=v,g=Oe(v)}catch(v){s.value=v}return g});return{$unwatch:m,$invalid:u}}function ot(e,a,r,t,s,o,$,d,f,i,m){const u=x(!1),g=e.$params||{},v=x(null);let n,c;e.$async?{$invalid:n,$unwatch:c}=nt(e.$validator,a,u,r,t,v,s,e.$watchTargets,f,i,m):{$invalid:n,$unwatch:c}=st(e.$validator,a,r,t,v,s,f,i);const p=e.$message;return{$message:B(p)?h(()=>p(le({$pending:u,$invalid:n,$params:le(g),$model:a,$response:v,$validator:o,$propertyPath:d,$property:$}))):p||"",$params:g,$pending:u,$invalid:n,$response:v,$unwatch:c}}function it(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a=l(e),r=Object.keys(a),t={},s={},o={};let $=null;return r.forEach(d=>{const f=a[d];switch(!0){case B(f.$validator):t[d]=f;break;case B(f):t[d]={$validator:f};break;case d==="$validationGroups":$=f;break;case d.startsWith("$"):o[d]=f;break;default:s[d]=f}}),{rules:t,nestedValidators:s,config:o,validationGroups:$}}const lt="__root";function ut(e,a,r,t,s,o,$,d,f){const i=Object.keys(e),m=t.get(s,e),u=x(!1),g=x(!1),v=x(0);if(m){if(!m.$partial)return m;m.$unwatch(),u.value=m.$dirty.value}const n={$dirty:u,$path:s,$touch:()=>{u.value||(u.value=!0)},$reset:()=>{u.value&&(u.value=!1)},$commit:()=>{}};return i.length?(i.forEach(c=>{n[c]=ot(e[c],a,n.$dirty,o,$,c,r,s,f,g,v)}),n.$externalResults=h(()=>d.value?[].concat(d.value).map((c,p)=>({$propertyPath:s,$property:r,$validator:"$externalResults",$uid:`${s}-externalResult-${p}`,$message:c,$params:{},$response:null,$pending:!1})):[]),n.$invalid=h(()=>{const c=i.some(p=>l(n[p].$invalid));return g.value=c,!!n.$externalResults.value.length||c}),n.$pending=h(()=>i.some(c=>l(n[c].$pending))),n.$error=h(()=>n.$dirty.value?n.$pending.value||n.$invalid.value:!1),n.$silentErrors=h(()=>i.filter(c=>l(n[c].$invalid)).map(c=>{const p=n[c];return U({$propertyPath:s,$property:r,$validator:c,$uid:`${s}-${c}`,$message:p.$message,$params:p.$params,$response:p.$response,$pending:p.$pending})}).concat(n.$externalResults.value)),n.$errors=h(()=>n.$dirty.value?n.$silentErrors.value:[]),n.$unwatch=()=>i.forEach(c=>{n[c].$unwatch()}),n.$commit=()=>{g.value=!0,v.value=Date.now()},t.set(s,e,n),n):(m&&t.set(s,e,n),n)}function ct(e,a,r,t,s,o,$){const d=Object.keys(e);return d.length?d.reduce((f,i)=>(f[i]=Y({validations:e[i],state:a,key:i,parentKey:r,resultsCache:t,globalConfig:s,instance:o,externalResults:$}),f),{}):{}}function dt(e,a,r){const t=h(()=>[a,r].filter(n=>n).reduce((n,c)=>n.concat(Object.values(l(c))),[])),s=h({get(){return e.$dirty.value||(t.value.length?t.value.every(n=>n.$dirty):!1)},set(n){e.$dirty.value=n}}),o=h(()=>{const n=l(e.$silentErrors)||[],c=t.value.filter(p=>(l(p).$silentErrors||[]).length).reduce((p,b)=>p.concat(...b.$silentErrors),[]);return n.concat(c)}),$=h(()=>{const n=l(e.$errors)||[],c=t.value.filter(p=>(l(p).$errors||[]).length).reduce((p,b)=>p.concat(...b.$errors),[]);return n.concat(c)}),d=h(()=>t.value.some(n=>n.$invalid)||l(e.$invalid)||!1),f=h(()=>t.value.some(n=>l(n.$pending))||l(e.$pending)||!1),i=h(()=>t.value.some(n=>n.$dirty)||t.value.some(n=>n.$anyDirty)||s.value),m=h(()=>s.value?f.value||d.value:!1),u=()=>{e.$touch(),t.value.forEach(n=>{n.$touch()})},g=()=>{e.$commit(),t.value.forEach(n=>{n.$commit()})},v=()=>{e.$reset(),t.value.forEach(n=>{n.$reset()})};return t.value.length&&t.value.every(n=>n.$dirty)&&u(),{$dirty:s,$errors:$,$invalid:d,$anyDirty:i,$error:m,$pending:f,$touch:u,$reset:v,$silentErrors:o,$commit:g}}function Y(e){let{validations:a,state:r,key:t,parentKey:s,childResults:o,resultsCache:$,globalConfig:d={},instance:f,externalResults:i}=e;const m=s?`${s}.${t}`:t,{rules:u,nestedValidators:g,config:v,validationGroups:n}=it(a),c=j(j({},d),v),p=t?h(()=>{const y=l(r);return y?l(y[t]):void 0}):r,b=j({},l(i)||{}),S=h(()=>{const y=l(i);return t?y?l(y[t]):void 0:y}),Z=ut(u,p,t,$,m,c,f,S,r),O=ct(g,p,m,$,c,f,S),E={};n&&Object.entries(n).forEach(y=>{let[C,V]=y;E[C]={$invalid:Q(V,O,"$invalid"),$error:Q(V,O,"$error"),$pending:Q(V,O,"$pending"),$errors:ue(V,O,"$errors"),$silentErrors:ue(V,O,"$silentErrors")}});const{$dirty:R,$errors:T,$invalid:W,$anyDirty:je,$error:Pe,$pending:K,$touch:J,$reset:Ee,$silentErrors:Ce,$commit:ae}=dt(Z,O,o),Ne=t?h({get:()=>l(p),set:y=>{R.value=!0;const C=l(r),V=l(i);V&&(V[t]=b[t]),X(C[t])?C[t].value=y:C[t]=y}}):null;t&&c.$autoDirty&&F(p,()=>{R.value||J();const y=l(i);y&&(y[t]=b[t])},{flush:"sync"});async function Ae(){return J(),c.$rewardEarly&&(ae(),await oe()),await oe(),new Promise(y=>{if(!K.value)return y(!W.value);const C=F(K,()=>{y(!W.value),C()})})}function ze(y){return(o.value||{})[y]}function Se(){X(i)?i.value=b:Object.keys(b).length===0?Object.keys(i).forEach(y=>{delete i[y]}):Object.assign(i,b)}return U(j(j(j({},Z),{},{$model:Ne,$dirty:R,$error:Pe,$errors:T,$invalid:W,$anyDirty:je,$pending:K,$touch:J,$reset:Ee,$path:m||lt,$silentErrors:Ce,$validate:Ae,$commit:ae},o&&{$getResultsForChild:ze,$clearExternalResults:Se,$validationGroups:E}),O))}class pt{constructor(){this.storage=new Map}set(a,r,t){this.storage.set(a,{rules:r,result:t})}checkRulesValidity(a,r,t){const s=Object.keys(t),o=Object.keys(r);return o.length!==s.length||!o.every(d=>s.includes(d))?!1:o.every(d=>r[d].$params?Object.keys(r[d].$params).every(f=>l(t[d].$params[f])===l(r[d].$params[f])):!0)}get(a,r){const t=this.storage.get(a);if(!t)return;const{rules:s,result:o}=t,$=this.checkRulesValidity(a,r,s),d=o.$unwatch?o.$unwatch:()=>({});return $?o:{$dirty:o.$dirty,$partial:!0,$unwatch:d}}}const q={COLLECT_ALL:!0,COLLECT_NONE:!1},ce=Symbol("vuelidate#injectChildResults"),de=Symbol("vuelidate#removeChildResults");function ft(e){let{$scope:a,instance:r}=e;const t={},s=x([]),o=h(()=>s.value.reduce((m,u)=>(m[u]=l(t[u]),m),{}));function $(m,u){let{$registerAs:g,$scope:v,$stopPropagation:n}=u;n||a===q.COLLECT_NONE||v===q.COLLECT_NONE||a!==q.COLLECT_ALL&&a!==v||(t[g]=m,s.value.push(g))}r.__vuelidateInjectInstances=[].concat(r.__vuelidateInjectInstances||[],$);function d(m){s.value=s.value.filter(u=>u!==m),delete t[m]}r.__vuelidateRemoveInstances=[].concat(r.__vuelidateRemoveInstances||[],d);const f=ne(ce,[]);se(ce,r.__vuelidateInjectInstances);const i=ne(de,[]);return se(de,r.__vuelidateRemoveInstances),{childResults:o,sendValidationResultsToParent:f,removeValidationResultsFromParent:i}}function xe(e){return new Proxy(e,{get(a,r){return typeof a[r]=="object"?xe(a[r]):h(()=>a[r])}})}let pe=0;function mt(e,a){var r;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(t=e,e=void 0,a=void 0);let{$registerAs:s,$scope:o=q.COLLECT_ALL,$stopPropagation:$,$externalResults:d,currentVueInstance:f}=t;const i=f||((r=Le())===null||r===void 0?void 0:r.proxy),m=i?i.$options:{};s||(pe+=1,s=`_vuelidate_${pe}`);const u=x({}),g=new pt,{childResults:v,sendValidationResultsToParent:n,removeValidationResultsFromParent:c}=i?ft({$scope:o,instance:i}):{childResults:x({})};if(!e&&m.validations){const p=m.validations;a=x({}),Fe(()=>{a.value=i,F(()=>B(p)?p.call(a.value,new xe(a.value)):p,b=>{u.value=Y({validations:b,state:a,childResults:v,resultsCache:g,globalConfig:t,instance:i,externalResults:d||i.vuelidateExternalResults})},{immediate:!0})}),t=m.validationsConfig||t}else{const p=X(e)||at(e)?e:U(e||{});F(p,b=>{u.value=Y({validations:b,state:a,childResults:v,resultsCache:g,globalConfig:t,instance:i??{},externalResults:d})},{immediate:!0})}return i&&(n.forEach(p=>p(u,{$registerAs:s,$scope:o,$stopPropagation:$})),De(()=>c.forEach(p=>p(s)))),h(()=>j(j({},l(u.value)),v.value))}function fe(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,t)}return r}function D(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?fe(Object(r),!0).forEach(function(t){vt(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function vt(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function G(e){return typeof e=="function"}function ee(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function H(e){return G(e.$validator)?D({},e):{$validator:e}}function Re(e){return typeof e=="object"?e.$valid:e}function Ve(e){return e.$validator||e}function $t(e,a){if(!ee(e))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);if(!ee(a)&&!G(a))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=H(a);return r.$params=D(D({},r.$params||{}),e),r}function gt(e,a){if(!G(e)&&typeof l(e)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);if(!ee(a)&&!G(a))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=H(a);return r.$message=e,r}function ht(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const r=H(e);return D(D({},r),{},{$async:!0,$watchTargets:a})}function bt(e){return{$validator(a){for(var r=arguments.length,t=new Array(r>1?r-1:0),s=1;s<r;s++)t[s-1]=arguments[s];return l(a).reduce((o,$,d)=>{const f=Object.entries($).reduce((i,m)=>{let[u,g]=m;const v=e[u]||{},n=Object.entries(v).reduce((c,p)=>{let[b,S]=p;const O=Ve(S).call(this,g,$,d,...t),E=Re(O);if(c.$data[b]=O,c.$data.$invalid=!E||!!c.$data.$invalid,c.$data.$error=c.$data.$invalid,!E){let R=S.$message||"";const T=S.$params||{};typeof R=="function"&&(R=R({$pending:!1,$invalid:!E,$params:T,$model:g,$response:O})),c.$errors.push({$property:u,$message:R,$params:T,$response:O,$model:g,$pending:!1,$validator:b})}return{$valid:c.$valid&&E,$data:c.$data,$errors:c.$errors}},{$valid:!0,$data:{},$errors:[]});return i.$data[u]=n.$data,i.$errors[u]=n.$errors,{$valid:i.$valid&&n.$valid,$data:i.$data,$errors:i.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:o.$valid&&f.$valid,$data:o.$data.concat(f.$data),$errors:o.$errors.concat(f.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:a=>{let{$response:r}=a;return r?r.$errors.map(t=>Object.values(t).map(s=>s.map(o=>o.$message)).reduce((s,o)=>s.concat(o),[])):[]}}}const re=e=>{if(e=l(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let a in e)return!0;return!1}return!!String(e).length},wt=e=>(e=l(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function P(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return t=>(t=l(t),!re(t)||a.every(s=>(s.lastIndex=0,s.test(t))))}var M=Object.freeze({__proto__:null,forEach:bt,len:wt,normalizeValidatorObject:H,regex:P,req:re,unwrap:l,unwrapNormalizedValidator:Ve,unwrapValidatorResponse:Re,withAsync:ht,withMessage:gt,withParams:$t});P(/^[a-zA-Z]*$/);P(/^[a-zA-Z0-9]*$/);P(/^\d*(\.\d+)?$/);const yt=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var _t=P(yt),Ot={$validator:_t,$message:"Value is not a valid email address",$params:{type:"email"}};function xt(e){return typeof e=="string"&&(e=e.trim()),re(e)}var L={$validator:xt,$message:"Value is required",$params:{type:"required"}};function Rt(e){return a=>l(a)===l(e)}function Vt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"other";return{$validator:Rt(e),$message:r=>`The value must be equal to the ${a} value`,$params:{equalTo:e,otherName:a,type:"sameAs"}}}const jt=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;P(jt);P(/(^[0-9]*$)|(^-[0-9]+$)/);P(/^[-]?\d*(\.\d+)?$/);const Pt=e=>($e("data-v-65eeb083"),e=e(),ge(),e),Et={class:"container"},Ct={class:"input-column"},Nt={class:"input-column"},At=be('<div class="input-column" data-v-65eeb083><p class="input-name" data-v-65eeb083>Nationality</p><div class="select-btn nationality-input" data-v-65eeb083><span data-v-65eeb083>American</span><img src="'+k+'" alt="dropdown" data-v-65eeb083></div><div class="underline" data-v-65eeb083></div></div>',1),zt={class:"input-column"},St={class:"select-btn"},It={key:0,class:"checkmark",src:Ke},Lt=be('<div class="input-column" data-v-65eeb083><p class="input-name" data-v-65eeb083>Date of Birth</p><div class="birthdate-container" data-v-65eeb083><div class="select-wrapper" data-v-65eeb083><div class="select-btn day" data-v-65eeb083><span data-v-65eeb083>21</span><img src="'+k+'" alt="dropdown" data-v-65eeb083></div><div class="underline" data-v-65eeb083></div></div><div class="select-wrapper" data-v-65eeb083><div class="select-btn month" data-v-65eeb083><span data-v-65eeb083>December</span><img src="'+k+'" alt="" srcset="" data-v-65eeb083></div><div class="underline" data-v-65eeb083></div></div><div class="select-wrapper" data-v-65eeb083><div class="select-btn year" data-v-65eeb083><span data-v-65eeb083>1995</span><img src="'+k+'" alt="" srcset="" data-v-65eeb083></div><div class="underline" data-v-65eeb083></div></div></div></div><div class="input-column" data-v-65eeb083><p class="input-name gender" data-v-65eeb083>Gender</p><div class="gender-inputs" data-v-65eeb083><div class="input-male" data-v-65eeb083><input checked name="gender" type="radio" data-v-65eeb083> Male </div><div class="input-female" data-v-65eeb083><input name="gender" type="radio" data-v-65eeb083> Female </div></div></div>',2),Ft=[Lt],Dt={class:"input-column"},Tt={class:"error-msg"},Mt={class:"input-column"},kt=Pt(()=>w("p",null,[we(" Have an account? "),w("a",{href:"#",class:"link"},"Login")],-1)),qt={class:"btn-wrapper"},Bt={__name:"formInputsArea",setup(e){const a=he.useMq(),r=M.regex(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/),t=U({firstName:"",lastName:"",email:"",password:{password:"",confirmPass:""}}),s=h(()=>({firstName:{required:L},lastName:{required:L},email:{required:L,email:Ot},password:{password:{required:M.withMessage("",L),regex:M.withMessage("Password must contain at least 8 characters, one lower and uppercase letters",r)},confirmPass:{required:L,sameAs:M.withMessage("Passwords do not match",Vt(t.password.password))}}})),o=mt(s,t);o.value.$validate();const $=async()=>{const f=await o.value.$validate();f?await We.post("http://localhost:3000/users",{lastName:t.lastName,firstName:t.firstName,password:t.password,email:t.email,confirmPass:t.password.confirmPass}):f||alert("Form is not filled correctly!")},d=ke();return qe(()=>{o.value.$validate(),o.value.$invalid&&d.push("/signup")}),(f,i)=>{const m=Be("router-link");return A(),z("div",Et,[w("form",null,[w("div",{class:_([l(a).phone?"input-row-phone":"input-row","input-row"])},[w("div",Ct,[N(I,{modelValue:t.firstName,"onUpdate:modelValue":i[0]||(i[0]=u=>t.firstName=u),label:"First Name",type:"text",class:_({error:l(o).firstName.$error})},null,8,["modelValue","class"])]),w("div",Nt,[N(I,{modelValue:t.lastName,"onUpdate:modelValue":i[1]||(i[1]=u=>t.lastName=u),label:"Last Name",type:"text",class:_({error:l(o).lastName.$error})},null,8,["modelValue","class"])])],2),w("div",{class:_([l(a).phone?"input-row-phone":"input-row","input-row"])},[At,w("div",zt,[w("div",St,[N(I,{modelValue:t.email,"onUpdate:modelValue":i[2]||(i[2]=u=>t.email=u),label:"E-mail",type:"email",class:_({error:l(o).email.$error})},null,8,["modelValue","class"]),l(o).email.$error?ve("",!0):(A(),z("img",It))])])],2),w("div",{class:_([l(a).phone?"input-row-phone":"input-row","input-row"])},Ft,2),w("div",{class:_([l(a).phone?"input-row-phone":"input-row","input-row"])},[w("div",Dt,[N(I,{modelValue:t.password.password,"onUpdate:modelValue":i[3]||(i[3]=u=>t.password.password=u),label:"Password",type:"password",class:_({error:l(o).password.password.$error})},null,8,["modelValue","class"]),(A(!0),z(Ge,null,Ue(l(o).password.password.$errors,u=>(A(),z("span",Tt,me(u.$message),1))),256))]),w("div",Mt,[N(I,{modelValue:t.password.confirmPass,"onUpdate:modelValue":i[4]||(i[4]=u=>t.password.confirmPass=u),label:"Confirm Password",type:"password",class:_({error:l(o).password.confirmPass.$error})},null,8,["modelValue","class"])])],2),w("div",{class:_(["form-bottom-container",l(a).phone?"form-bottom-container-phone":"form-bottom-container"])},[kt,w("div",qt,[N(m,{class:"btn",to:"/registered",onClick:Ze($,["prevent"])},{default:He(()=>[we(" Complete Signup ")]),_:1},8,["onClick"])])],2)])])}}},Gt=te(Bt,[["__scopeId","data-v-65eeb083"]]);const Ut={class:"form-content"},Ht={class:"form-title-container-phone"},Zt={class:"form-inputs-container"},Wt={__name:"formMain",setup(e){const a=he.useMq();return(r,t)=>(A(),z("div",{class:_(["form-content-container",l(a).phone?"form-content-container-phone":"form-content-container"])},[w("div",Ut,[w("div",Ht,[w("h1",{class:_([l(a).phone?"form-title-phone":"form-title","form-title"])}," New user? ",2),w("span",{class:_([l(a).phone?"form-subtitle-phone":"form-subtitle","form-subtitle"])}," Use the form below to create your account. ",2)]),w("div",Zt,[N(Gt)])])],2))}},Jt=te(Wt,[["__scopeId","data-v-96886b1c"]]);export{Jt as default};
