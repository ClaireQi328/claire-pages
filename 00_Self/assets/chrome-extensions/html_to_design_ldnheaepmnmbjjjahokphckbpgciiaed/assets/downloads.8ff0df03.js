var _t,V,ni,Ce,un,ii,hr,xr,dr,fr,si,ft={},oi=[],Qs=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,zt=Array.isArray;function le(t,e){for(var r in e)t[r]=e[r];return t}function ai(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function eo(t,e,r){var n,i,a,u={};for(a in e)a=="key"?n=e[a]:a=="ref"?i=e[a]:u[a]=e[a];if(arguments.length>2&&(u.children=arguments.length>3?_t.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(a in t.defaultProps)u[a]===void 0&&(u[a]=t.defaultProps[a]);return at(t,u,n,i,null)}function at(t,e,r,n,i){var a={type:t,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++ni,__i:-1,__u:0};return i==null&&V.vnode!=null&&V.vnode(a),a}function Zl(){return{current:null}}function Gt(t){return t.children}function ct(t,e){this.props=t,this.context=e}function ze(t,e){if(e==null)return t.__?ze(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?ze(t):null}function ci(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return ci(t)}}function pr(t){(!t.__d&&(t.__d=!0)&&Ce.push(t)&&!Nt.__r++||un!==V.debounceRendering)&&((un=V.debounceRendering)||ii)(Nt)}function Nt(){var t,e,r,n,i,a,u,h;for(Ce.sort(hr);t=Ce.shift();)t.__d&&(e=Ce.length,n=void 0,a=(i=(r=t).__v).__e,u=[],h=[],r.__P&&((n=le({},i)).__v=i.__v+1,V.vnode&&V.vnode(n),kr(r.__P,n,i,r.__n,r.__P.namespaceURI,32&i.__u?[a]:null,u,a??ze(i),!!(32&i.__u),h),n.__v=i.__v,n.__.__k[n.__i]=n,hi(u,n,h),n.__e!=a&&ci(n)),Ce.length>e&&Ce.sort(hr));Nt.__r=0}function ui(t,e,r,n,i,a,u,h,d,g,w){var p,T,A,R,U,L=n&&n.__k||oi,C=e.length;for(r.__d=d,to(r,e,L),d=r.__d,p=0;p<C;p++)(A=r.__k[p])!=null&&(T=A.__i===-1?ft:L[A.__i]||ft,A.__i=p,kr(t,A,T,i,a,u,h,d,g,w),R=A.__e,A.ref&&T.ref!=A.ref&&(T.ref&&Cr(T.ref,null,A),w.push(A.ref,A.__c||R,A)),U==null&&R!=null&&(U=R),65536&A.__u||T.__k===A.__k?d=li(A,d,t):typeof A.type=="function"&&A.__d!==void 0?d=A.__d:R&&(d=R.nextSibling),A.__d=void 0,A.__u&=-196609);r.__d=d,r.__e=U}function to(t,e,r){var n,i,a,u,h,d=e.length,g=r.length,w=g,p=0;for(t.__k=[],n=0;n<d;n++)(i=e[n])!=null&&typeof i!="boolean"&&typeof i!="function"?(u=n+p,(i=t.__k[n]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?at(null,i,null,null,null):zt(i)?at(Gt,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?at(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=t,i.__b=t.__b+1,a=null,(h=i.__i=no(i,r,u,w))!==-1&&(w--,(a=r[h])&&(a.__u|=131072)),a==null||a.__v===null?(h==-1&&p--,typeof i.type!="function"&&(i.__u|=65536)):h!==u&&(h==u-1?p--:h==u+1?p++:(h>u?p--:p++,i.__u|=65536))):i=t.__k[n]=null;if(w)for(n=0;n<g;n++)(a=r[n])!=null&&(131072&a.__u)==0&&(a.__e==t.__d&&(t.__d=ze(a)),di(a,a))}function li(t,e,r){var n,i;if(typeof t.type=="function"){for(n=t.__k,i=0;n&&i<n.length;i++)n[i]&&(n[i].__=t,e=li(n[i],e,r));return e}t.__e!=e&&(e&&t.type&&!r.contains(e)&&(e=ze(t)),r.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function ro(t,e){return e=e||[],t==null||typeof t=="boolean"||(zt(t)?t.some(function(r){ro(r,e)}):e.push(t)),e}function no(t,e,r,n){var i=t.key,a=t.type,u=r-1,h=r+1,d=e[r];if(d===null||d&&i==d.key&&a===d.type&&(131072&d.__u)==0)return r;if(n>(d!=null&&(131072&d.__u)==0?1:0))for(;u>=0||h<e.length;){if(u>=0){if((d=e[u])&&(131072&d.__u)==0&&i==d.key&&a===d.type)return u;u--}if(h<e.length){if((d=e[h])&&(131072&d.__u)==0&&i==d.key&&a===d.type)return h;h++}}return-1}function ln(t,e,r){e[0]==="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||Qs.test(e)?r:r+"px"}function St(t,e,r,n,i){var a;e:if(e==="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)r&&e in r||ln(t.style,e,"");if(r)for(e in r)n&&r[e]===n[e]||ln(t.style,e,r[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+a]=r,r?n?r.u=n.u:(r.u=xr,t.addEventListener(e,a?fr:dr,a)):t.removeEventListener(e,a?fr:dr,a);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function hn(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e.t==null)e.t=xr++;else if(e.t<r.u)return;return r(V.event?V.event(e):e)}}}function kr(t,e,r,n,i,a,u,h,d,g){var w,p,T,A,R,U,L,C,b,S,I,O,N,k,v,E,x=e.type;if(e.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),a=[h=e.__e=r.__e]),(w=V.__b)&&w(e);e:if(typeof x=="function")try{if(C=e.props,b="prototype"in x&&x.prototype.render,S=(w=x.contextType)&&n[w.__c],I=w?S?S.props.value:w.__:n,r.__c?L=(p=e.__c=r.__c).__=p.__E:(b?e.__c=p=new x(C,I):(e.__c=p=new ct(C,I),p.constructor=x,p.render=so),S&&S.sub(p),p.props=C,p.state||(p.state={}),p.context=I,p.__n=n,T=p.__d=!0,p.__h=[],p._sb=[]),b&&p.__s==null&&(p.__s=p.state),b&&x.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=le({},p.__s)),le(p.__s,x.getDerivedStateFromProps(C,p.__s))),A=p.props,R=p.state,p.__v=e,T)b&&x.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),b&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(b&&x.getDerivedStateFromProps==null&&C!==A&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(C,I),!p.__e&&(p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(C,p.__s,I)===!1||e.__v===r.__v)){for(e.__v!==r.__v&&(p.props=C,p.state=p.__s,p.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(P){P&&(P.__=e)}),O=0;O<p._sb.length;O++)p.__h.push(p._sb[O]);p._sb=[],p.__h.length&&u.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(C,p.__s,I),b&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(A,R,U)})}if(p.context=I,p.props=C,p.__P=t,p.__e=!1,N=V.__r,k=0,b){for(p.state=p.__s,p.__d=!1,N&&N(e),w=p.render(p.props,p.state,p.context),v=0;v<p._sb.length;v++)p.__h.push(p._sb[v]);p._sb=[]}else do p.__d=!1,N&&N(e),w=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++k<25);p.state=p.__s,p.getChildContext!=null&&(n=le(le({},n),p.getChildContext())),b&&!T&&p.getSnapshotBeforeUpdate!=null&&(U=p.getSnapshotBeforeUpdate(A,R)),ui(t,zt(E=w!=null&&w.type===Gt&&w.key==null?w.props.children:w)?E:[E],e,r,n,i,a,u,h,d,g),p.base=e.__e,e.__u&=-161,p.__h.length&&u.push(p),L&&(p.__E=p.__=null)}catch(P){if(e.__v=null,d||a!=null){for(e.__u|=d?160:128;h&&h.nodeType===8&&h.nextSibling;)h=h.nextSibling;a[a.indexOf(h)]=null,e.__e=h}else e.__e=r.__e,e.__k=r.__k;V.__e(P,e,r)}else a==null&&e.__v===r.__v?(e.__k=r.__k,e.__e=r.__e):e.__e=io(r.__e,e,r,n,i,a,u,d,g);(w=V.diffed)&&w(e)}function hi(t,e,r){e.__d=void 0;for(var n=0;n<r.length;n++)Cr(r[n],r[++n],r[++n]);V.__c&&V.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(a){a.call(i)})}catch(a){V.__e(a,i.__v)}})}function io(t,e,r,n,i,a,u,h,d){var g,w,p,T,A,R,U,L=r.props,C=e.props,b=e.type;if(b==="svg"?i="http://www.w3.org/2000/svg":b==="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(g=0;g<a.length;g++)if((A=a[g])&&"setAttribute"in A==!!b&&(b?A.localName===b:A.nodeType===3)){t=A,a[g]=null;break}}if(t==null){if(b===null)return document.createTextNode(C);t=document.createElementNS(i,b,C.is&&C),h&&(V.__m&&V.__m(e,a),h=!1),a=null}if(b===null)L===C||h&&t.data===C||(t.data=C);else{if(a=a&&_t.call(t.childNodes),L=r.props||ft,!h&&a!=null)for(L={},g=0;g<t.attributes.length;g++)L[(A=t.attributes[g]).name]=A.value;for(g in L)if(A=L[g],g!="children"){if(g=="dangerouslySetInnerHTML")p=A;else if(!(g in C)){if(g=="value"&&"defaultValue"in C||g=="checked"&&"defaultChecked"in C)continue;St(t,g,null,A,i)}}for(g in C)A=C[g],g=="children"?T=A:g=="dangerouslySetInnerHTML"?w=A:g=="value"?R=A:g=="checked"?U=A:h&&typeof A!="function"||L[g]===A||St(t,g,A,L[g],i);if(w)h||p&&(w.__html===p.__html||w.__html===t.innerHTML)||(t.innerHTML=w.__html),e.__k=[];else if(p&&(t.innerHTML=""),ui(t,zt(T)?T:[T],e,r,n,b==="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,u,a?a[0]:r.__k&&ze(r,0),h,d),a!=null)for(g=a.length;g--;)ai(a[g]);h||(g="value",b==="progress"&&R==null?t.removeAttribute("value"):R!==void 0&&(R!==t[g]||b==="progress"&&!R||b==="option"&&R!==L[g])&&St(t,g,R,L[g],i),g="checked",U!==void 0&&U!==t[g]&&St(t,g,U,L[g],i))}return t}function Cr(t,e,r){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(i){V.__e(i,r)}}function di(t,e,r){var n,i;if(V.unmount&&V.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||Cr(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(a){V.__e(a,e)}n.base=n.__P=null}if(n=t.__k)for(i=0;i<n.length;i++)n[i]&&di(n[i],e,r||typeof t.type!="function");r||ai(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function so(t,e,r){return this.constructor(t,r)}function oo(t,e,r){var n,i,a,u;V.__&&V.__(t,e),i=(n=typeof r=="function")?null:r&&r.__k||e.__k,a=[],u=[],kr(e,t=(!n&&r||e).__k=eo(Gt,null,[t]),i||ft,ft,e.namespaceURI,!n&&r?[r]:i?null:e.firstChild?_t.call(e.childNodes):null,a,!n&&r?r:i?i.__e:e.firstChild,n,u),hi(a,t,u)}function ao(t,e){oo(t,e,ao)}function Ql(t,e,r){var n,i,a,u,h=le({},t.props);for(a in t.type&&t.type.defaultProps&&(u=t.type.defaultProps),e)a=="key"?n=e[a]:a=="ref"?i=e[a]:h[a]=e[a]===void 0&&u!==void 0?u[a]:e[a];return arguments.length>2&&(h.children=arguments.length>3?_t.call(arguments,2):r),at(t.type,h,n||t.key,i||t.ref,null)}function co(t,e){var r={__c:e="__cC"+si++,__:t,Consumer:function(n,i){return n.children(i)},Provider:function(n){var i,a;return this.getChildContext||(i=new Set,(a={})[e]=this,this.getChildContext=function(){return a},this.componentWillUnmount=function(){i=null},this.shouldComponentUpdate=function(u){this.props.value!==u.value&&i.forEach(function(h){h.__e=!0,pr(h)})},this.sub=function(u){i.add(u);var h=u.componentWillUnmount;u.componentWillUnmount=function(){i&&i.delete(u),h&&h.call(u)}}),n.children}};return r.Provider.__=r.Consumer.contextType=r}_t=oi.slice,V={__e:function(t,e,r,n){for(var i,a,u;e=e.__;)if((i=e.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(t)),u=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,n||{}),u=i.__d),u)return i.__E=i}catch(h){t=h}throw t}},ni=0,ct.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=le({},this.state),typeof t=="function"&&(t=t(le({},r),this.props)),t&&le(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),pr(this))},ct.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),pr(this))},ct.prototype.render=Gt,Ce=[],ii=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,hr=function(t,e){return t.__v.__b-e.__v.__b},Nt.__r=0,xr=0,dr=hn(!1),fr=hn(!0),si=0;const Pr=t=>{if(t.stack){let e=t.stack;if(t.cause){const r=Pr(t.cause);e+=`
Caused by ${r}`}return e}return""},uo=void 0;function lo(t,e){return{...t,...e,properties:{...t.properties,...e.properties}}}class ce{def;stackCleaner=e=>e;static SHARED_SERVICE_URLS={}.LOCAL_SHR?["http://localhost:5001/dev-shared-services/us-central1/api"]:{}.STAGING!=="true"?["https://api.divriots.com","https://api-eu.divriots.com"]:["https://api-oddhqn4pmq-uc.a.run.app","https://apieu-oddhqn4pmq-ew.a.run.app"];static serviceUrl;constructor(e){this.def=e,{}.K_REVISION&&this.addDefault({properties:{krevision:{}.K_REVISION}})}addDefault(e){const r=this.resolveDefaults();if(r){if(r.properties){const{properties:n,...i}=e;Object.assign(r.properties,n),e=i}Object.assign(r,e)}else this.def={...e}}resetDefault(){this.def=void 0}transformOptions(e){if(!e)return;const{country:r,userAgent:n}=e,i={};return r&&(i.co=r),n&&(i.ua=n),i}async feature_test(e,r){if("feature"in r){console.error("`feature` is a reserved property for feature_test tracking.");return}return this.track("feature-test",{properties:{feature:e,...r}})}async exception(e,r,n){({}).FIREBASE_CONFIG&&console.error(`Analytics.exception(): ${e}`,r,n);const i={name:e};return n&&(i.details=typeof n=="string"?n:JSON.stringify(n)),this.track("exception",{error:r,properties:i})}catcher(e,r){return n=>{this.exception(e,n,r)}}unhandled(e,r){try{const n=r();return n&&typeof n=="object"&&"catch"in n?n.catch(this.catcher(e)):n}catch(n){this.exception(e,n)}}setStackCleaner(e){this.stackCleaner=e}resolveDefaults(){return this.def}async track(e,r={},n){const i=this.resolveDefaults(),a={...i?.properties,...r.properties};if(r.error){const d=r.error;a.error_message=d.message||String(d),a.error_stack=this.stackCleaner(Pr(d)),delete r.error}const u={event:e,version:{}.__FIGMA_PLUGIN_VERSION__,...i,...r,properties:a,options:this.transformOptions(n)};if(!u.product){console.error("Analytics.track(): `product` property is missing.");return}const h=async(d,g)=>{try{return await fetch(`${d}/pa`,{method:"POST",body:JSON.stringify(u)}),!0}catch(w){g&&console.error(`Analytics.track(): Unexpected error on event ${e}.`,w)}return!1};if(ce.serviceUrl)await h(ce.serviceUrl,!0);else{const d=[...ce.SHARED_SERVICE_URLS];for(;d.length;){const g=d.shift();if(await h(g,!d.length)){ce.serviceUrl=g;return}}ce.serviceUrl||(ce.serviceUrl=ce.SHARED_SERVICE_URLS[0])}}}class ho extends ce{isInitialized=!1;constructor(){super({})}initialize(e){this.addDefault(e),this.isInitialized=!0}runWith(e,r,...n){{const i=new Error("AsyncLocalStorage is not available");return Dt.exception("analytics:runWith",i),r(...n)}}resolveDefaults(){const e=uo?.getStore(),r=super.resolveDefaults();return e?lo(r??{},e):r}}const Dt=new ho;function fo(){let t,e;return{promise:new Promise((n,i)=>{t=n,e=i}),resolve:t,error:e}}const po=t=>typeof t?.then=="function",go=(t,e)=>new Promise((r,n)=>setTimeout(()=>{e&&"errorOnTimeout"in e?n(new Error(e.errorOnTimeout)):r(e?.value)},t));function mo(t,e,r){const n=Date.now(),i=h=>r?.({result:h,name:t,duration:Date.now()-n}),a=h=>(i({ret:h,failed:!1}),h),u=h=>{throw i({error:h,failed:!0}),h};try{const h=e();return po(h)?h.then(a).catch(u):a(h)}catch(h){return u(h)}}const _o=(t,e,r)=>mo(t,e,n=>{console.log(`${t}${n.result.failed?" (errored)":""}: ${n.duration}ms`),r?.(n)});let fi;const eh=t=>{fi=t};function Xe(t,e,r){const n=t,i=e,{source:a,retry:u,tracking:h,analytics:d,extraTrackingProps:g,fallbacks:w,...p}=i??{},T=d||Dt.isInitialized&&Dt,A=a||fi;if(!A&&h!==!1){const C="No source provided and defaultSource has not been set";throw console.error(C),new Error(C)}const R=C=>Array.isArray(u)&&u.includes(C),U=r,L=C=>{let b=n,S=typeof n=="object"&&"url"in n?n.url:String(n);if(C&&w)if(S=yo(S,w),typeof b=="string")b=S;else throw new Error("Retry with fallback only supported for string requests");return _o(`fetch ${b}${C?" (retry)":""}`,()=>fetch(b,p),async({duration:I,result:O})=>{const N=h??"both";if(N===!1)return;const k="ret"in O,v=k&&O.ret.ok;if(!(N==="success"&&!v||N==="error"&&v)&&T){const E={...g,url:S,duration:I,retry:C,source:A},x=p.method&&p.method.toLowerCase();if(x!=="get"&&(E.method=p.method),(x==="post"||x==="put")&&p.body){const P=Rr(p.body);P!==void 0&&(E.requestPayloadSize=P)}if(k){const P=O.ret,m={...E,code:O.ret.status},F=!v&&await P.clone().text().catch(()=>"");F&&(m.message=F),dn(T,m)}else dn(T,{...E,message:O.error?.message||O.error})}}).then(I=>{if(!C&&R(I.status))throw new Error("Retry");return I}).then(I=>U?U(I):I)};return L().catch(C=>{if(C.name==="AbortError"||!u)throw C;return L(!0)})}function Rr(t){if(!!t){if(typeof t=="string")return new TextEncoder().encode(t).length;if(typeof t=="object"){if(t instanceof FormData)return Array.from(t.values()).reduce((e,r)=>e+(Rr(r)||0),0);if("length"in t)return t.length;if("size"in t)return t.size;if("byteLength"in t)return t.byteLength}}}function dn(t,e){t.track("fetch",{properties:{...e,type:"message"in e?"error":"success"}},{country:!0})}function yo(t,e){for(const[r,n]of Object.entries(e)){const i=t.replace(r,n);if(i!==t)return i}return t}var Ee,W,tr,fn,Ge=0,pi=[],G=V,pn=G.__b,gn=G.__r,mn=G.diffed,_n=G.__c,yn=G.unmount,wn=G.__;function Ze(t,e){G.__h&&G.__h(W,t,Ge||e),Ge=0;var r=W.__H||(W.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function wo(t){return Ge=1,vo(_i,t)}function vo(t,e,r){var n=Ze(Ee++,2);if(n.t=t,!n.__c&&(n.__=[r?r(e):_i(void 0,e),function(h){var d=n.__N?n.__N[0]:n.__[0],g=n.t(d,h);d!==g&&(n.__N=[g,n.__[1]],n.__c.setState({}))}],n.__c=W,!W.u)){var i=function(h,d,g){if(!n.__c.__H)return!0;var w=n.__c.__H.__.filter(function(T){return!!T.__c});if(w.every(function(T){return!T.__N}))return!a||a.call(this,h,d,g);var p=!1;return w.forEach(function(T){if(T.__N){var A=T.__[0];T.__=T.__N,T.__N=void 0,A!==T.__[0]&&(p=!0)}}),!(!p&&n.__c.props===h)&&(!a||a.call(this,h,d,g))};W.u=!0;var a=W.shouldComponentUpdate,u=W.componentWillUpdate;W.componentWillUpdate=function(h,d,g){if(this.__e){var w=a;a=void 0,i(h,d,g),a=w}u&&u.call(this,h,d,g)},W.shouldComponentUpdate=i}return n.__N||n.__}function gi(t,e){var r=Ze(Ee++,3);!G.__s&&Or(r.__H,e)&&(r.__=t,r.i=e,W.__H.__h.push(r))}function bo(t,e){var r=Ze(Ee++,4);!G.__s&&Or(r.__H,e)&&(r.__=t,r.i=e,W.__h.push(r))}function mi(t){return Ge=5,qt(function(){return{current:t}},[])}function th(t,e,r){Ge=6,bo(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},r==null?r:r.concat(t))}function qt(t,e){var r=Ze(Ee++,7);return Or(r.__H,e)&&(r.__=t(),r.__H=e,r.__h=t),r.__}function Ao(t,e){return Ge=8,qt(function(){return t},e)}function rh(t){var e=W.context[t.__c],r=Ze(Ee++,9);return r.c=t,e?(r.__==null&&(r.__=!0,e.sub(W)),e.props.value):t.__}function nh(t,e){G.useDebugValue&&G.useDebugValue(e?e(t):t)}function ih(){var t=Ze(Ee++,11);if(!t.__){for(var e=W.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var r=e.__m||(e.__m=[0,0]);t.__="P"+r[0]+"-"+r[1]++}return t.__}function Io(){for(var t;t=pi.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(kt),t.__H.__h.forEach(gr),t.__H.__h=[]}catch(e){t.__H.__h=[],G.__e(e,t.__v)}}G.__b=function(t){W=null,pn&&pn(t)},G.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),wn&&wn(t,e)},G.__r=function(t){gn&&gn(t),Ee=0;var e=(W=t.__c).__H;e&&(tr===W?(e.__h=[],W.__h=[],e.__.forEach(function(r){r.__N&&(r.__=r.__N),r.i=r.__N=void 0})):(e.__h.forEach(kt),e.__h.forEach(gr),e.__h=[],Ee=0)),tr=W},G.diffed=function(t){mn&&mn(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(pi.push(e)!==1&&fn===G.requestAnimationFrame||((fn=G.requestAnimationFrame)||Eo)(Io)),e.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.i=void 0})),tr=W=null},G.__c=function(t,e){e.some(function(r){try{r.__h.forEach(kt),r.__h=r.__h.filter(function(n){return!n.__||gr(n)})}catch(n){e.some(function(i){i.__h&&(i.__h=[])}),e=[],G.__e(n,r.__v)}}),_n&&_n(t,e)},G.unmount=function(t){yn&&yn(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{kt(n)}catch(i){e=i}}),r.__H=void 0,e&&G.__e(e,r.__v))};var vn=typeof requestAnimationFrame=="function";function Eo(t){var e,r=function(){clearTimeout(n),vn&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(r,100);vn&&(e=requestAnimationFrame(r))}function kt(t){var e=W,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),W=e}function gr(t){var e=W;t.__c=t.__(),W=e}function Or(t,e){return!t||t.length!==e.length||e.some(function(r,n){return r!==t[n]})}function _i(t,e){return typeof e=="function"?e(t):e}class To extends Error{url;constructor(e){super("Allow access to file URLs authorization is necessary for local files, please enable it in extension settings"),this.name="FileAccessRequiredError",this.url=e}}async function sh(){const t=await chrome.tabs.query({active:!0,currentWindow:!0}).then(e=>e[0]);if(!t)throw new Error("Unable to get active tab");if(!t.id||!t.url)throw new Error("Unable to get required tab metadata");if(t.url.includes("chrome://"))throw new Error("html.to.design cannot capture chrome:// pages");if(t.url.startsWith("file://")&&!await chrome.extension.isAllowedFileSchemeAccess())throw new To(t.url);return{tabId:t.id,url:t.url}}var So=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yi(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qe={exports:{}};const xo=t=>typeof crypto<"u"&&typeof crypto.getRandomValues=="function"?()=>{const e=crypto.getRandomValues(new Uint8Array(1))[0];return(e>=t?e%t:e).toString(t)}:()=>Math.floor(Math.random()*t).toString(t),wi=(t=7,e=!1)=>Array.from({length:t},xo(e?16:36)).join("");qe.exports=wi;qe.exports.default=wi;var oh=()=>`uid::${qe.exports(7)}`,vi=(t,e=["endpointName","fingerprint"])=>typeof t=="object"&&t!==null&&e.every(r=>r in t),ah=t=>{if(!vi(t))throw new TypeError("Invalid connection args");return JSON.stringify(t)},ch=t=>{try{const e=JSON.parse(t);return vi(e)?e:null}catch{return null}},uh=()=>{let t=[];return{add:(...e)=>{t=[...t,...e]},remove:e=>{t=typeof e=="string"?t.filter(r=>r.message.transactionId!==e):t.filter(r=>!e.includes(r))},entries:()=>t}},lh=class{static toBackground(t,e){return t.postMessage(e)}static toExtensionContext(t,e){return t.postMessage(e)}},bi={exports:{}};(function(t,e){(function(r,n){n(t)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:So,function(r){if(typeof globalThis!="object"||typeof chrome!="object"||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const n="The message port closed before a response was received.",i="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",a=u=>{const h={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(h).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class d extends WeakMap{constructor(E,x=void 0){super(x),this.createItem=E}get(E){return this.has(E)||this.set(E,this.createItem(E)),super.get(E)}}const g=v=>v&&typeof v=="object"&&typeof v.then=="function",w=(v,E)=>(...x)=>{u.runtime.lastError?v.reject(new Error(u.runtime.lastError.message)):E.singleCallbackArg||x.length<=1&&E.singleCallbackArg!==!1?v.resolve(x[0]):v.resolve(x)},p=v=>v==1?"argument":"arguments",T=(v,E)=>function(P,...m){if(m.length<E.minArgs)throw new Error(`Expected at least ${E.minArgs} ${p(E.minArgs)} for ${v}(), got ${m.length}`);if(m.length>E.maxArgs)throw new Error(`Expected at most ${E.maxArgs} ${p(E.maxArgs)} for ${v}(), got ${m.length}`);return new Promise((F,q)=>{if(E.fallbackToNoCallback)try{P[v](...m,w({resolve:F,reject:q},E))}catch(D){console.warn(`${v} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,D),P[v](...m),E.fallbackToNoCallback=!1,E.noCallback=!0,F()}else E.noCallback?(P[v](...m),F()):P[v](...m,w({resolve:F,reject:q},E))})},A=(v,E,x)=>new Proxy(E,{apply(P,m,F){return x.call(m,v,...F)}});let R=Function.call.bind(Object.prototype.hasOwnProperty);const U=(v,E={},x={})=>{let P=Object.create(null),m={has(q,D){return D in v||D in P},get(q,D,X){if(D in P)return P[D];if(!(D in v))return;let K=v[D];if(typeof K=="function")if(typeof E[D]=="function")K=A(v,v[D],E[D]);else if(R(x,D)){let ie=T(D,x[D]);K=A(v,v[D],ie)}else K=K.bind(v);else if(typeof K=="object"&&K!==null&&(R(E,D)||R(x,D)))K=U(K,E[D],x[D]);else if(R(x,"*"))K=U(K,E[D],x["*"]);else return Object.defineProperty(P,D,{configurable:!0,enumerable:!0,get(){return v[D]},set(ie){v[D]=ie}}),K;return P[D]=K,K},set(q,D,X,K){return D in P?P[D]=X:v[D]=X,!0},defineProperty(q,D,X){return Reflect.defineProperty(P,D,X)},deleteProperty(q,D){return Reflect.deleteProperty(P,D)}},F=Object.create(v);return new Proxy(F,m)},L=v=>({addListener(E,x,...P){E.addListener(v.get(x),...P)},hasListener(E,x){return E.hasListener(v.get(x))},removeListener(E,x){E.removeListener(v.get(x))}}),C=new d(v=>typeof v!="function"?v:function(x){const P=U(x,{},{getContent:{minArgs:0,maxArgs:0}});v(P)});let b=!1;const S=new d(v=>typeof v!="function"?v:function(x,P,m){let F=!1,q,D=new Promise(Se=>{q=function(te){b||(console.warn(i,new Error().stack),b=!0),F=!0,Se(te)}}),X;try{X=v(x,P,q)}catch(Se){X=Promise.reject(Se)}const K=X!==!0&&g(X);if(X!==!0&&!K&&!F)return!1;const ie=Se=>{Se.then(te=>{m(te)},te=>{let rt;te&&(te instanceof Error||typeof te.message=="string")?rt=te.message:rt="An unexpected error occurred",m({__mozWebExtensionPolyfillReject__:!0,message:rt})}).catch(te=>{console.error("Failed to send onMessage rejected reply",te)})};return ie(K?X:D),!0}),I=({reject:v,resolve:E},x)=>{u.runtime.lastError?u.runtime.lastError.message===n?E():v(new Error(u.runtime.lastError.message)):x&&x.__mozWebExtensionPolyfillReject__?v(new Error(x.message)):E(x)},O=(v,E,x,...P)=>{if(P.length<E.minArgs)throw new Error(`Expected at least ${E.minArgs} ${p(E.minArgs)} for ${v}(), got ${P.length}`);if(P.length>E.maxArgs)throw new Error(`Expected at most ${E.maxArgs} ${p(E.maxArgs)} for ${v}(), got ${P.length}`);return new Promise((m,F)=>{const q=I.bind(null,{resolve:m,reject:F});P.push(q),x.sendMessage(...P)})},N={devtools:{network:{onRequestFinished:L(C)}},runtime:{onMessage:L(S),onMessageExternal:L(S),sendMessage:O.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:O.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},k={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return h.privacy={network:{"*":k},services:{"*":k},websites:{"*":k}},U(u,N,h)};r.exports=a(chrome)}else r.exports=globalThis.browser})})(bi);const hh=bi.exports;var ko=Object.defineProperty,Co=Object.defineProperties,Po=Object.getOwnPropertyDescriptors,bn=Object.getOwnPropertySymbols,Ro=Object.prototype.hasOwnProperty,Oo=Object.prototype.propertyIsEnumerable,An=(t,e,r)=>e in t?ko(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ai=(t,e)=>{for(var r in e||(e={}))Ro.call(e,r)&&An(t,r,e[r]);if(bn)for(var r of bn(e))Oo.call(e,r)&&An(t,r,e[r]);return t},Ii=(t,e)=>Co(t,Po(e)),No=/^((?:background$)|devtools|popup|options|content-script|window)(?:@(\d+)(?:\.(\d+))?)?$/,Ei=t=>{const[,e,r,n]=t.match(No)||[];return{context:e,tabId:+r,frameId:n?+n:void 0}},dh=({context:t,tabId:e,frameId:r})=>["background","popup","options"].includes(t)?t:`${t}@${e}${r?`.${r}`:""}`,Ti={};(function(t){Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var e={},r={};r.byteLength=w,r.toByteArray=T,r.fromByteArray=U;for(var n=[],i=[],a=typeof Uint8Array<"u"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h=0,d=u.length;h<d;++h)n[h]=u[h],i[u.charCodeAt(h)]=h;i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63;function g(b){var S=b.length;if(S%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var I=b.indexOf("=");I===-1&&(I=S);var O=I===S?0:4-I%4;return[I,O]}function w(b){var S=g(b),I=S[0],O=S[1];return(I+O)*3/4-O}function p(b,S,I){return(S+I)*3/4-I}function T(b){var S,I=g(b),O=I[0],N=I[1],k=new a(p(b,O,N)),v=0,E=N>0?O-4:O,x;for(x=0;x<E;x+=4)S=i[b.charCodeAt(x)]<<18|i[b.charCodeAt(x+1)]<<12|i[b.charCodeAt(x+2)]<<6|i[b.charCodeAt(x+3)],k[v++]=S>>16&255,k[v++]=S>>8&255,k[v++]=S&255;return N===2&&(S=i[b.charCodeAt(x)]<<2|i[b.charCodeAt(x+1)]>>4,k[v++]=S&255),N===1&&(S=i[b.charCodeAt(x)]<<10|i[b.charCodeAt(x+1)]<<4|i[b.charCodeAt(x+2)]>>2,k[v++]=S>>8&255,k[v++]=S&255),k}function A(b){return n[b>>18&63]+n[b>>12&63]+n[b>>6&63]+n[b&63]}function R(b,S,I){for(var O,N=[],k=S;k<I;k+=3)O=(b[k]<<16&16711680)+(b[k+1]<<8&65280)+(b[k+2]&255),N.push(A(O));return N.join("")}function U(b){for(var S,I=b.length,O=I%3,N=[],k=16383,v=0,E=I-O;v<E;v+=k)N.push(R(b,v,v+k>E?E:v+k));return O===1?(S=b[I-1],N.push(n[S>>2]+n[S<<4&63]+"==")):O===2&&(S=(b[I-2]<<8)+b[I-1],N.push(n[S>>10]+n[S>>4&63]+n[S<<2&63]+"=")),N.join("")}var L={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */L.read=function(b,S,I,O,N){var k,v,E=N*8-O-1,x=(1<<E)-1,P=x>>1,m=-7,F=I?N-1:0,q=I?-1:1,D=b[S+F];for(F+=q,k=D&(1<<-m)-1,D>>=-m,m+=E;m>0;k=k*256+b[S+F],F+=q,m-=8);for(v=k&(1<<-m)-1,k>>=-m,m+=O;m>0;v=v*256+b[S+F],F+=q,m-=8);if(k===0)k=1-P;else{if(k===x)return v?NaN:(D?-1:1)*(1/0);v=v+Math.pow(2,O),k=k-P}return(D?-1:1)*v*Math.pow(2,k-O)},L.write=function(b,S,I,O,N,k){var v,E,x,P=k*8-N-1,m=(1<<P)-1,F=m>>1,q=N===23?Math.pow(2,-24)-Math.pow(2,-77):0,D=O?0:k-1,X=O?1:-1,K=S<0||S===0&&1/S<0?1:0;for(S=Math.abs(S),isNaN(S)||S===1/0?(E=isNaN(S)?1:0,v=m):(v=Math.floor(Math.log(S)/Math.LN2),S*(x=Math.pow(2,-v))<1&&(v--,x*=2),v+F>=1?S+=q/x:S+=q*Math.pow(2,1-F),S*x>=2&&(v++,x/=2),v+F>=m?(E=0,v=m):v+F>=1?(E=(S*x-1)*Math.pow(2,N),v=v+F):(E=S*Math.pow(2,F-1)*Math.pow(2,N),v=0));N>=8;b[I+D]=E&255,D+=X,E/=256,N-=8);for(v=v<<N|E,P+=N;P>0;b[I+D]=v&255,D+=X,v/=256,P-=8);b[I+D-X]|=K*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(b){const S=r,I=L,O=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;b.Buffer=m,b.SlowBuffer=Ns,b.INSPECT_MAX_BYTES=50;const N=2147483647;b.kMaxLength=N;const{Uint8Array:k,ArrayBuffer:v,SharedArrayBuffer:E}=globalThis;m.TYPED_ARRAY_SUPPORT=x(),!m.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function x(){try{const c=new k(1),s={foo:function(){return 42}};return Object.setPrototypeOf(s,k.prototype),Object.setPrototypeOf(c,s),c.foo()===42}catch{return!1}}Object.defineProperty(m.prototype,"parent",{enumerable:!0,get:function(){if(!!m.isBuffer(this))return this.buffer}}),Object.defineProperty(m.prototype,"offset",{enumerable:!0,get:function(){if(!!m.isBuffer(this))return this.byteOffset}});function P(c){if(c>N)throw new RangeError('The value "'+c+'" is invalid for option "size"');const s=new k(c);return Object.setPrototypeOf(s,m.prototype),s}function m(c,s,o){if(typeof c=="number"){if(typeof s=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return X(c)}return F(c,s,o)}m.poolSize=8192;function F(c,s,o){if(typeof c=="string")return K(c,s);if(v.isView(c))return Se(c);if(c==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c);if(se(c,v)||c&&se(c.buffer,v)||typeof E<"u"&&(se(c,E)||c&&se(c.buffer,E)))return te(c,s,o);if(typeof c=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const l=c.valueOf&&c.valueOf();if(l!=null&&l!==c)return m.from(l,s,o);const f=rt(c);if(f)return f;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof c[Symbol.toPrimitive]=="function")return m.from(c[Symbol.toPrimitive]("string"),s,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c)}m.from=function(c,s,o){return F(c,s,o)},Object.setPrototypeOf(m.prototype,k.prototype),Object.setPrototypeOf(m,k);function q(c){if(typeof c!="number")throw new TypeError('"size" argument must be of type number');if(c<0)throw new RangeError('The value "'+c+'" is invalid for option "size"')}function D(c,s,o){return q(c),c<=0?P(c):s!==void 0?typeof o=="string"?P(c).fill(s,o):P(c).fill(s):P(c)}m.alloc=function(c,s,o){return D(c,s,o)};function X(c){return q(c),P(c<0?0:Xt(c)|0)}m.allocUnsafe=function(c){return X(c)},m.allocUnsafeSlow=function(c){return X(c)};function K(c,s){if((typeof s!="string"||s==="")&&(s="utf8"),!m.isEncoding(s))throw new TypeError("Unknown encoding: "+s);const o=Jr(c,s)|0;let l=P(o);const f=l.write(c,s);return f!==o&&(l=l.slice(0,f)),l}function ie(c){const s=c.length<0?0:Xt(c.length)|0,o=P(s);for(let l=0;l<s;l+=1)o[l]=c[l]&255;return o}function Se(c){if(se(c,k)){const s=new k(c);return te(s.buffer,s.byteOffset,s.byteLength)}return ie(c)}function te(c,s,o){if(s<0||c.byteLength<s)throw new RangeError('"offset" is outside of buffer bounds');if(c.byteLength<s+(o||0))throw new RangeError('"length" is outside of buffer bounds');let l;return s===void 0&&o===void 0?l=new k(c):o===void 0?l=new k(c,s):l=new k(c,s,o),Object.setPrototypeOf(l,m.prototype),l}function rt(c){if(m.isBuffer(c)){const s=Xt(c.length)|0,o=P(s);return o.length===0||c.copy(o,0,0,s),o}if(c.length!==void 0)return typeof c.length!="number"||er(c.length)?P(0):ie(c);if(c.type==="Buffer"&&Array.isArray(c.data))return ie(c.data)}function Xt(c){if(c>=N)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+N.toString(16)+" bytes");return c|0}function Ns(c){return+c!=c&&(c=0),m.alloc(+c)}m.isBuffer=function(s){return s!=null&&s._isBuffer===!0&&s!==m.prototype},m.compare=function(s,o){if(se(s,k)&&(s=m.from(s,s.offset,s.byteLength)),se(o,k)&&(o=m.from(o,o.offset,o.byteLength)),!m.isBuffer(s)||!m.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(s===o)return 0;let l=s.length,f=o.length;for(let _=0,y=Math.min(l,f);_<y;++_)if(s[_]!==o[_]){l=s[_],f=o[_];break}return l<f?-1:f<l?1:0},m.isEncoding=function(s){switch(String(s).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},m.concat=function(s,o){if(!Array.isArray(s))throw new TypeError('"list" argument must be an Array of Buffers');if(s.length===0)return m.alloc(0);let l;if(o===void 0)for(o=0,l=0;l<s.length;++l)o+=s[l].length;const f=m.allocUnsafe(o);let _=0;for(l=0;l<s.length;++l){let y=s[l];if(se(y,k))_+y.length>f.length?(m.isBuffer(y)||(y=m.from(y)),y.copy(f,_)):k.prototype.set.call(f,y,_);else if(m.isBuffer(y))y.copy(f,_);else throw new TypeError('"list" argument must be an Array of Buffers');_+=y.length}return f};function Jr(c,s){if(m.isBuffer(c))return c.length;if(v.isView(c)||se(c,v))return c.byteLength;if(typeof c!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof c);const o=c.length,l=arguments.length>2&&arguments[2]===!0;if(!l&&o===0)return 0;let f=!1;for(;;)switch(s){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Qt(c).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return cn(c).length;default:if(f)return l?-1:Qt(c).length;s=(""+s).toLowerCase(),f=!0}}m.byteLength=Jr;function Ds(c,s,o){let l=!1;if((s===void 0||s<0)&&(s=0),s>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,s>>>=0,o<=s))return"";for(c||(c="utf8");;)switch(c){case"hex":return Ws(this,s,o);case"utf8":case"utf-8":return Zr(this,s,o);case"ascii":return js(this,s,o);case"latin1":case"binary":return Vs(this,s,o);case"base64":return $s(this,s,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return zs(this,s,o);default:if(l)throw new TypeError("Unknown encoding: "+c);c=(c+"").toLowerCase(),l=!0}}m.prototype._isBuffer=!0;function xe(c,s,o){const l=c[s];c[s]=c[o],c[o]=l}m.prototype.swap16=function(){const s=this.length;if(s%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let o=0;o<s;o+=2)xe(this,o,o+1);return this},m.prototype.swap32=function(){const s=this.length;if(s%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let o=0;o<s;o+=4)xe(this,o,o+3),xe(this,o+1,o+2);return this},m.prototype.swap64=function(){const s=this.length;if(s%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let o=0;o<s;o+=8)xe(this,o,o+7),xe(this,o+1,o+6),xe(this,o+2,o+5),xe(this,o+3,o+4);return this},m.prototype.toString=function(){const s=this.length;return s===0?"":arguments.length===0?Zr(this,0,s):Ds.apply(this,arguments)},m.prototype.toLocaleString=m.prototype.toString,m.prototype.equals=function(s){if(!m.isBuffer(s))throw new TypeError("Argument must be a Buffer");return this===s?!0:m.compare(this,s)===0},m.prototype.inspect=function(){let s="";const o=b.INSPECT_MAX_BYTES;return s=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(s+=" ... "),"<Buffer "+s+">"},O&&(m.prototype[O]=m.prototype.inspect),m.prototype.compare=function(s,o,l,f,_){if(se(s,k)&&(s=m.from(s,s.offset,s.byteLength)),!m.isBuffer(s))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof s);if(o===void 0&&(o=0),l===void 0&&(l=s?s.length:0),f===void 0&&(f=0),_===void 0&&(_=this.length),o<0||l>s.length||f<0||_>this.length)throw new RangeError("out of range index");if(f>=_&&o>=l)return 0;if(f>=_)return-1;if(o>=l)return 1;if(o>>>=0,l>>>=0,f>>>=0,_>>>=0,this===s)return 0;let y=_-f,B=l-o;const J=Math.min(y,B),z=this.slice(f,_),Y=s.slice(o,l);for(let H=0;H<J;++H)if(z[H]!==Y[H]){y=z[H],B=Y[H];break}return y<B?-1:B<y?1:0};function Yr(c,s,o,l,f){if(c.length===0)return-1;if(typeof o=="string"?(l=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,er(o)&&(o=f?0:c.length-1),o<0&&(o=c.length+o),o>=c.length){if(f)return-1;o=c.length-1}else if(o<0)if(f)o=0;else return-1;if(typeof s=="string"&&(s=m.from(s,l)),m.isBuffer(s))return s.length===0?-1:Xr(c,s,o,l,f);if(typeof s=="number")return s=s&255,typeof k.prototype.indexOf=="function"?f?k.prototype.indexOf.call(c,s,o):k.prototype.lastIndexOf.call(c,s,o):Xr(c,[s],o,l,f);throw new TypeError("val must be string, number or Buffer")}function Xr(c,s,o,l,f){let _=1,y=c.length,B=s.length;if(l!==void 0&&(l=String(l).toLowerCase(),l==="ucs2"||l==="ucs-2"||l==="utf16le"||l==="utf-16le")){if(c.length<2||s.length<2)return-1;_=2,y/=2,B/=2,o/=2}function J(Y,H){return _===1?Y[H]:Y.readUInt16BE(H*_)}let z;if(f){let Y=-1;for(z=o;z<y;z++)if(J(c,z)===J(s,Y===-1?0:z-Y)){if(Y===-1&&(Y=z),z-Y+1===B)return Y*_}else Y!==-1&&(z-=z-Y),Y=-1}else for(o+B>y&&(o=y-B),z=o;z>=0;z--){let Y=!0;for(let H=0;H<B;H++)if(J(c,z+H)!==J(s,H)){Y=!1;break}if(Y)return z}return-1}m.prototype.includes=function(s,o,l){return this.indexOf(s,o,l)!==-1},m.prototype.indexOf=function(s,o,l){return Yr(this,s,o,l,!0)},m.prototype.lastIndexOf=function(s,o,l){return Yr(this,s,o,l,!1)};function Ms(c,s,o,l){o=Number(o)||0;const f=c.length-o;l?(l=Number(l),l>f&&(l=f)):l=f;const _=s.length;l>_/2&&(l=_/2);let y;for(y=0;y<l;++y){const B=parseInt(s.substr(y*2,2),16);if(er(B))return y;c[o+y]=B}return y}function Ls(c,s,o,l){return Tt(Qt(s,c.length-o),c,o,l)}function Bs(c,s,o,l){return Tt(Js(s),c,o,l)}function Us(c,s,o,l){return Tt(cn(s),c,o,l)}function Fs(c,s,o,l){return Tt(Ys(s,c.length-o),c,o,l)}m.prototype.write=function(s,o,l,f){if(o===void 0)f="utf8",l=this.length,o=0;else if(l===void 0&&typeof o=="string")f=o,l=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(l)?(l=l>>>0,f===void 0&&(f="utf8")):(f=l,l=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const _=this.length-o;if((l===void 0||l>_)&&(l=_),s.length>0&&(l<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");f||(f="utf8");let y=!1;for(;;)switch(f){case"hex":return Ms(this,s,o,l);case"utf8":case"utf-8":return Ls(this,s,o,l);case"ascii":case"latin1":case"binary":return Bs(this,s,o,l);case"base64":return Us(this,s,o,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Fs(this,s,o,l);default:if(y)throw new TypeError("Unknown encoding: "+f);f=(""+f).toLowerCase(),y=!0}},m.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function $s(c,s,o){return s===0&&o===c.length?S.fromByteArray(c):S.fromByteArray(c.slice(s,o))}function Zr(c,s,o){o=Math.min(c.length,o);const l=[];let f=s;for(;f<o;){const _=c[f];let y=null,B=_>239?4:_>223?3:_>191?2:1;if(f+B<=o){let J,z,Y,H;switch(B){case 1:_<128&&(y=_);break;case 2:J=c[f+1],(J&192)===128&&(H=(_&31)<<6|J&63,H>127&&(y=H));break;case 3:J=c[f+1],z=c[f+2],(J&192)===128&&(z&192)===128&&(H=(_&15)<<12|(J&63)<<6|z&63,H>2047&&(H<55296||H>57343)&&(y=H));break;case 4:J=c[f+1],z=c[f+2],Y=c[f+3],(J&192)===128&&(z&192)===128&&(Y&192)===128&&(H=(_&15)<<18|(J&63)<<12|(z&63)<<6|Y&63,H>65535&&H<1114112&&(y=H))}}y===null?(y=65533,B=1):y>65535&&(y-=65536,l.push(y>>>10&1023|55296),y=56320|y&1023),l.push(y),f+=B}return Hs(l)}const Qr=4096;function Hs(c){const s=c.length;if(s<=Qr)return String.fromCharCode.apply(String,c);let o="",l=0;for(;l<s;)o+=String.fromCharCode.apply(String,c.slice(l,l+=Qr));return o}function js(c,s,o){let l="";o=Math.min(c.length,o);for(let f=s;f<o;++f)l+=String.fromCharCode(c[f]&127);return l}function Vs(c,s,o){let l="";o=Math.min(c.length,o);for(let f=s;f<o;++f)l+=String.fromCharCode(c[f]);return l}function Ws(c,s,o){const l=c.length;(!s||s<0)&&(s=0),(!o||o<0||o>l)&&(o=l);let f="";for(let _=s;_<o;++_)f+=Xs[c[_]];return f}function zs(c,s,o){const l=c.slice(s,o);let f="";for(let _=0;_<l.length-1;_+=2)f+=String.fromCharCode(l[_]+l[_+1]*256);return f}m.prototype.slice=function(s,o){const l=this.length;s=~~s,o=o===void 0?l:~~o,s<0?(s+=l,s<0&&(s=0)):s>l&&(s=l),o<0?(o+=l,o<0&&(o=0)):o>l&&(o=l),o<s&&(o=s);const f=this.subarray(s,o);return Object.setPrototypeOf(f,m.prototype),f};function Z(c,s,o){if(c%1!==0||c<0)throw new RangeError("offset is not uint");if(c+s>o)throw new RangeError("Trying to access beyond buffer length")}m.prototype.readUintLE=m.prototype.readUIntLE=function(s,o,l){s=s>>>0,o=o>>>0,l||Z(s,o,this.length);let f=this[s],_=1,y=0;for(;++y<o&&(_*=256);)f+=this[s+y]*_;return f},m.prototype.readUintBE=m.prototype.readUIntBE=function(s,o,l){s=s>>>0,o=o>>>0,l||Z(s,o,this.length);let f=this[s+--o],_=1;for(;o>0&&(_*=256);)f+=this[s+--o]*_;return f},m.prototype.readUint8=m.prototype.readUInt8=function(s,o){return s=s>>>0,o||Z(s,1,this.length),this[s]},m.prototype.readUint16LE=m.prototype.readUInt16LE=function(s,o){return s=s>>>0,o||Z(s,2,this.length),this[s]|this[s+1]<<8},m.prototype.readUint16BE=m.prototype.readUInt16BE=function(s,o){return s=s>>>0,o||Z(s,2,this.length),this[s]<<8|this[s+1]},m.prototype.readUint32LE=m.prototype.readUInt32LE=function(s,o){return s=s>>>0,o||Z(s,4,this.length),(this[s]|this[s+1]<<8|this[s+2]<<16)+this[s+3]*16777216},m.prototype.readUint32BE=m.prototype.readUInt32BE=function(s,o){return s=s>>>0,o||Z(s,4,this.length),this[s]*16777216+(this[s+1]<<16|this[s+2]<<8|this[s+3])},m.prototype.readBigUInt64LE=me(function(s){s=s>>>0,Le(s,"offset");const o=this[s],l=this[s+7];(o===void 0||l===void 0)&&nt(s,this.length-8);const f=o+this[++s]*2**8+this[++s]*2**16+this[++s]*2**24,_=this[++s]+this[++s]*2**8+this[++s]*2**16+l*2**24;return BigInt(f)+(BigInt(_)<<BigInt(32))}),m.prototype.readBigUInt64BE=me(function(s){s=s>>>0,Le(s,"offset");const o=this[s],l=this[s+7];(o===void 0||l===void 0)&&nt(s,this.length-8);const f=o*2**24+this[++s]*2**16+this[++s]*2**8+this[++s],_=this[++s]*2**24+this[++s]*2**16+this[++s]*2**8+l;return(BigInt(f)<<BigInt(32))+BigInt(_)}),m.prototype.readIntLE=function(s,o,l){s=s>>>0,o=o>>>0,l||Z(s,o,this.length);let f=this[s],_=1,y=0;for(;++y<o&&(_*=256);)f+=this[s+y]*_;return _*=128,f>=_&&(f-=Math.pow(2,8*o)),f},m.prototype.readIntBE=function(s,o,l){s=s>>>0,o=o>>>0,l||Z(s,o,this.length);let f=o,_=1,y=this[s+--f];for(;f>0&&(_*=256);)y+=this[s+--f]*_;return _*=128,y>=_&&(y-=Math.pow(2,8*o)),y},m.prototype.readInt8=function(s,o){return s=s>>>0,o||Z(s,1,this.length),this[s]&128?(255-this[s]+1)*-1:this[s]},m.prototype.readInt16LE=function(s,o){s=s>>>0,o||Z(s,2,this.length);const l=this[s]|this[s+1]<<8;return l&32768?l|4294901760:l},m.prototype.readInt16BE=function(s,o){s=s>>>0,o||Z(s,2,this.length);const l=this[s+1]|this[s]<<8;return l&32768?l|4294901760:l},m.prototype.readInt32LE=function(s,o){return s=s>>>0,o||Z(s,4,this.length),this[s]|this[s+1]<<8|this[s+2]<<16|this[s+3]<<24},m.prototype.readInt32BE=function(s,o){return s=s>>>0,o||Z(s,4,this.length),this[s]<<24|this[s+1]<<16|this[s+2]<<8|this[s+3]},m.prototype.readBigInt64LE=me(function(s){s=s>>>0,Le(s,"offset");const o=this[s],l=this[s+7];(o===void 0||l===void 0)&&nt(s,this.length-8);const f=this[s+4]+this[s+5]*2**8+this[s+6]*2**16+(l<<24);return(BigInt(f)<<BigInt(32))+BigInt(o+this[++s]*2**8+this[++s]*2**16+this[++s]*2**24)}),m.prototype.readBigInt64BE=me(function(s){s=s>>>0,Le(s,"offset");const o=this[s],l=this[s+7];(o===void 0||l===void 0)&&nt(s,this.length-8);const f=(o<<24)+this[++s]*2**16+this[++s]*2**8+this[++s];return(BigInt(f)<<BigInt(32))+BigInt(this[++s]*2**24+this[++s]*2**16+this[++s]*2**8+l)}),m.prototype.readFloatLE=function(s,o){return s=s>>>0,o||Z(s,4,this.length),I.read(this,s,!0,23,4)},m.prototype.readFloatBE=function(s,o){return s=s>>>0,o||Z(s,4,this.length),I.read(this,s,!1,23,4)},m.prototype.readDoubleLE=function(s,o){return s=s>>>0,o||Z(s,8,this.length),I.read(this,s,!0,52,8)},m.prototype.readDoubleBE=function(s,o){return s=s>>>0,o||Z(s,8,this.length),I.read(this,s,!1,52,8)};function re(c,s,o,l,f,_){if(!m.isBuffer(c))throw new TypeError('"buffer" argument must be a Buffer instance');if(s>f||s<_)throw new RangeError('"value" argument is out of bounds');if(o+l>c.length)throw new RangeError("Index out of range")}m.prototype.writeUintLE=m.prototype.writeUIntLE=function(s,o,l,f){if(s=+s,o=o>>>0,l=l>>>0,!f){const B=Math.pow(2,8*l)-1;re(this,s,o,l,B,0)}let _=1,y=0;for(this[o]=s&255;++y<l&&(_*=256);)this[o+y]=s/_&255;return o+l},m.prototype.writeUintBE=m.prototype.writeUIntBE=function(s,o,l,f){if(s=+s,o=o>>>0,l=l>>>0,!f){const B=Math.pow(2,8*l)-1;re(this,s,o,l,B,0)}let _=l-1,y=1;for(this[o+_]=s&255;--_>=0&&(y*=256);)this[o+_]=s/y&255;return o+l},m.prototype.writeUint8=m.prototype.writeUInt8=function(s,o,l){return s=+s,o=o>>>0,l||re(this,s,o,1,255,0),this[o]=s&255,o+1},m.prototype.writeUint16LE=m.prototype.writeUInt16LE=function(s,o,l){return s=+s,o=o>>>0,l||re(this,s,o,2,65535,0),this[o]=s&255,this[o+1]=s>>>8,o+2},m.prototype.writeUint16BE=m.prototype.writeUInt16BE=function(s,o,l){return s=+s,o=o>>>0,l||re(this,s,o,2,65535,0),this[o]=s>>>8,this[o+1]=s&255,o+2},m.prototype.writeUint32LE=m.prototype.writeUInt32LE=function(s,o,l){return s=+s,o=o>>>0,l||re(this,s,o,4,4294967295,0),this[o+3]=s>>>24,this[o+2]=s>>>16,this[o+1]=s>>>8,this[o]=s&255,o+4},m.prototype.writeUint32BE=m.prototype.writeUInt32BE=function(s,o,l){return s=+s,o=o>>>0,l||re(this,s,o,4,4294967295,0),this[o]=s>>>24,this[o+1]=s>>>16,this[o+2]=s>>>8,this[o+3]=s&255,o+4};function en(c,s,o,l,f){an(s,l,f,c,o,7);let _=Number(s&BigInt(4294967295));c[o++]=_,_=_>>8,c[o++]=_,_=_>>8,c[o++]=_,_=_>>8,c[o++]=_;let y=Number(s>>BigInt(32)&BigInt(4294967295));return c[o++]=y,y=y>>8,c[o++]=y,y=y>>8,c[o++]=y,y=y>>8,c[o++]=y,o}function tn(c,s,o,l,f){an(s,l,f,c,o,7);let _=Number(s&BigInt(4294967295));c[o+7]=_,_=_>>8,c[o+6]=_,_=_>>8,c[o+5]=_,_=_>>8,c[o+4]=_;let y=Number(s>>BigInt(32)&BigInt(4294967295));return c[o+3]=y,y=y>>8,c[o+2]=y,y=y>>8,c[o+1]=y,y=y>>8,c[o]=y,o+8}m.prototype.writeBigUInt64LE=me(function(s,o=0){return en(this,s,o,BigInt(0),BigInt("0xffffffffffffffff"))}),m.prototype.writeBigUInt64BE=me(function(s,o=0){return tn(this,s,o,BigInt(0),BigInt("0xffffffffffffffff"))}),m.prototype.writeIntLE=function(s,o,l,f){if(s=+s,o=o>>>0,!f){const J=Math.pow(2,8*l-1);re(this,s,o,l,J-1,-J)}let _=0,y=1,B=0;for(this[o]=s&255;++_<l&&(y*=256);)s<0&&B===0&&this[o+_-1]!==0&&(B=1),this[o+_]=(s/y>>0)-B&255;return o+l},m.prototype.writeIntBE=function(s,o,l,f){if(s=+s,o=o>>>0,!f){const J=Math.pow(2,8*l-1);re(this,s,o,l,J-1,-J)}let _=l-1,y=1,B=0;for(this[o+_]=s&255;--_>=0&&(y*=256);)s<0&&B===0&&this[o+_+1]!==0&&(B=1),this[o+_]=(s/y>>0)-B&255;return o+l},m.prototype.writeInt8=function(s,o,l){return s=+s,o=o>>>0,l||re(this,s,o,1,127,-128),s<0&&(s=255+s+1),this[o]=s&255,o+1},m.prototype.writeInt16LE=function(s,o,l){return s=+s,o=o>>>0,l||re(this,s,o,2,32767,-32768),this[o]=s&255,this[o+1]=s>>>8,o+2},m.prototype.writeInt16BE=function(s,o,l){return s=+s,o=o>>>0,l||re(this,s,o,2,32767,-32768),this[o]=s>>>8,this[o+1]=s&255,o+2},m.prototype.writeInt32LE=function(s,o,l){return s=+s,o=o>>>0,l||re(this,s,o,4,2147483647,-2147483648),this[o]=s&255,this[o+1]=s>>>8,this[o+2]=s>>>16,this[o+3]=s>>>24,o+4},m.prototype.writeInt32BE=function(s,o,l){return s=+s,o=o>>>0,l||re(this,s,o,4,2147483647,-2147483648),s<0&&(s=4294967295+s+1),this[o]=s>>>24,this[o+1]=s>>>16,this[o+2]=s>>>8,this[o+3]=s&255,o+4},m.prototype.writeBigInt64LE=me(function(s,o=0){return en(this,s,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),m.prototype.writeBigInt64BE=me(function(s,o=0){return tn(this,s,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function rn(c,s,o,l,f,_){if(o+l>c.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function nn(c,s,o,l,f){return s=+s,o=o>>>0,f||rn(c,s,o,4),I.write(c,s,o,l,23,4),o+4}m.prototype.writeFloatLE=function(s,o,l){return nn(this,s,o,!0,l)},m.prototype.writeFloatBE=function(s,o,l){return nn(this,s,o,!1,l)};function sn(c,s,o,l,f){return s=+s,o=o>>>0,f||rn(c,s,o,8),I.write(c,s,o,l,52,8),o+8}m.prototype.writeDoubleLE=function(s,o,l){return sn(this,s,o,!0,l)},m.prototype.writeDoubleBE=function(s,o,l){return sn(this,s,o,!1,l)},m.prototype.copy=function(s,o,l,f){if(!m.isBuffer(s))throw new TypeError("argument should be a Buffer");if(l||(l=0),!f&&f!==0&&(f=this.length),o>=s.length&&(o=s.length),o||(o=0),f>0&&f<l&&(f=l),f===l||s.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(l<0||l>=this.length)throw new RangeError("Index out of range");if(f<0)throw new RangeError("sourceEnd out of bounds");f>this.length&&(f=this.length),s.length-o<f-l&&(f=s.length-o+l);const _=f-l;return this===s&&typeof k.prototype.copyWithin=="function"?this.copyWithin(o,l,f):k.prototype.set.call(s,this.subarray(l,f),o),_},m.prototype.fill=function(s,o,l,f){if(typeof s=="string"){if(typeof o=="string"?(f=o,o=0,l=this.length):typeof l=="string"&&(f=l,l=this.length),f!==void 0&&typeof f!="string")throw new TypeError("encoding must be a string");if(typeof f=="string"&&!m.isEncoding(f))throw new TypeError("Unknown encoding: "+f);if(s.length===1){const y=s.charCodeAt(0);(f==="utf8"&&y<128||f==="latin1")&&(s=y)}}else typeof s=="number"?s=s&255:typeof s=="boolean"&&(s=Number(s));if(o<0||this.length<o||this.length<l)throw new RangeError("Out of range index");if(l<=o)return this;o=o>>>0,l=l===void 0?this.length:l>>>0,s||(s=0);let _;if(typeof s=="number")for(_=o;_<l;++_)this[_]=s;else{const y=m.isBuffer(s)?s:m.from(s,f),B=y.length;if(B===0)throw new TypeError('The value "'+s+'" is invalid for argument "value"');for(_=0;_<l-o;++_)this[_+o]=y[_%B]}return this};const Me={};function Zt(c,s,o){Me[c]=class extends o{constructor(){super(),Object.defineProperty(this,"message",{value:s.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${c}]`,this.stack,delete this.name}get code(){return c}set code(f){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:f,writable:!0})}toString(){return`${this.name} [${c}]: ${this.message}`}}}Zt("ERR_BUFFER_OUT_OF_BOUNDS",function(c){return c?`${c} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Zt("ERR_INVALID_ARG_TYPE",function(c,s){return`The "${c}" argument must be of type number. Received type ${typeof s}`},TypeError),Zt("ERR_OUT_OF_RANGE",function(c,s,o){let l=`The value of "${c}" is out of range.`,f=o;return Number.isInteger(o)&&Math.abs(o)>2**32?f=on(String(o)):typeof o=="bigint"&&(f=String(o),(o>BigInt(2)**BigInt(32)||o<-(BigInt(2)**BigInt(32)))&&(f=on(f)),f+="n"),l+=` It must be ${s}. Received ${f}`,l},RangeError);function on(c){let s="",o=c.length;const l=c[0]==="-"?1:0;for(;o>=l+4;o-=3)s=`_${c.slice(o-3,o)}${s}`;return`${c.slice(0,o)}${s}`}function Gs(c,s,o){Le(s,"offset"),(c[s]===void 0||c[s+o]===void 0)&&nt(s,c.length-(o+1))}function an(c,s,o,l,f,_){if(c>o||c<s){const y=typeof s=="bigint"?"n":"";let B;throw _>3?s===0||s===BigInt(0)?B=`>= 0${y} and < 2${y} ** ${(_+1)*8}${y}`:B=`>= -(2${y} ** ${(_+1)*8-1}${y}) and < 2 ** ${(_+1)*8-1}${y}`:B=`>= ${s}${y} and <= ${o}${y}`,new Me.ERR_OUT_OF_RANGE("value",B,c)}Gs(l,f,_)}function Le(c,s){if(typeof c!="number")throw new Me.ERR_INVALID_ARG_TYPE(s,"number",c)}function nt(c,s,o){throw Math.floor(c)!==c?(Le(c,o),new Me.ERR_OUT_OF_RANGE(o||"offset","an integer",c)):s<0?new Me.ERR_BUFFER_OUT_OF_BOUNDS:new Me.ERR_OUT_OF_RANGE(o||"offset",`>= ${o?1:0} and <= ${s}`,c)}const qs=/[^+/0-9A-Za-z-_]/g;function Ks(c){if(c=c.split("=")[0],c=c.trim().replace(qs,""),c.length<2)return"";for(;c.length%4!==0;)c=c+"=";return c}function Qt(c,s){s=s||1/0;let o;const l=c.length;let f=null;const _=[];for(let y=0;y<l;++y){if(o=c.charCodeAt(y),o>55295&&o<57344){if(!f){if(o>56319){(s-=3)>-1&&_.push(239,191,189);continue}else if(y+1===l){(s-=3)>-1&&_.push(239,191,189);continue}f=o;continue}if(o<56320){(s-=3)>-1&&_.push(239,191,189),f=o;continue}o=(f-55296<<10|o-56320)+65536}else f&&(s-=3)>-1&&_.push(239,191,189);if(f=null,o<128){if((s-=1)<0)break;_.push(o)}else if(o<2048){if((s-=2)<0)break;_.push(o>>6|192,o&63|128)}else if(o<65536){if((s-=3)<0)break;_.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((s-=4)<0)break;_.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return _}function Js(c){const s=[];for(let o=0;o<c.length;++o)s.push(c.charCodeAt(o)&255);return s}function Ys(c,s){let o,l,f;const _=[];for(let y=0;y<c.length&&!((s-=2)<0);++y)o=c.charCodeAt(y),l=o>>8,f=o%256,_.push(f),_.push(l);return _}function cn(c){return S.toByteArray(Ks(c))}function Tt(c,s,o,l){let f;for(f=0;f<l&&!(f+o>=s.length||f>=c.length);++f)s[f+o]=c[f];return f}function se(c,s){return c instanceof s||c!=null&&c.constructor!=null&&c.constructor.name!=null&&c.constructor.name===s.name}function er(c){return c!==c}const Xs=function(){const c="0123456789abcdef",s=new Array(256);for(let o=0;o<16;++o){const l=o*16;for(let f=0;f<16;++f)s[l+f]=c[o]+c[f]}return s}();function me(c){return typeof BigInt>"u"?Zs:c}function Zs(){throw new Error("BigInt not supported")}})(e);const C=e.Buffer;t.Blob=e.Blob,t.BlobOptions=e.BlobOptions,t.Buffer=e.Buffer,t.File=e.File,t.FileOptions=e.FileOptions,t.INSPECT_MAX_BYTES=e.INSPECT_MAX_BYTES,t.SlowBuffer=e.SlowBuffer,t.TranscodeEncoding=e.TranscodeEncoding,t.atob=e.atob,t.btoa=e.btoa,t.constants=e.constants,t.default=C,t.isAscii=e.isAscii,t.isUtf8=e.isUtf8,t.kMaxLength=e.kMaxLength,t.kStringMaxLength=e.kStringMaxLength,t.resolveObjectURL=e.resolveObjectURL,t.transcode=e.transcode})(Ti);const In=yi(Ti),Do=[{property:"name",enumerable:!1},{property:"message",enumerable:!1},{property:"stack",enumerable:!1},{property:"code",enumerable:!0}],mr=Symbol(".toJSON was called"),Mo=t=>{t[mr]=!0;const e=t.toJSON();return delete t[mr],e},Si=({from:t,seen:e,to_:r,forceEnumerable:n,maxDepth:i,depth:a})=>{const u=r||(Array.isArray(t)?[]:{});if(e.push(t),a>=i)return u;if(typeof t.toJSON=="function"&&t[mr]!==!0)return Mo(t);for(const[h,d]of Object.entries(t)){if(typeof In=="function"&&In.isBuffer(d)){u[h]="[object Buffer]";continue}if(d!==null&&typeof d=="object"&&typeof d.pipe=="function"){u[h]="[object Stream]";continue}if(typeof d!="function"){if(!d||typeof d!="object"){u[h]=d;continue}if(!e.includes(t[h])){a++,u[h]=Si({from:t[h],seen:[...e],forceEnumerable:n,maxDepth:i,depth:a});continue}u[h]="[Circular]"}}for(const{property:h,enumerable:d}of Do)typeof t[h]=="string"&&Object.defineProperty(u,h,{value:t[h],enumerable:n?!0:d,configurable:!0,writable:!0});return u};function Lo(t,e={}){const{maxDepth:r=Number.POSITIVE_INFINITY}=e;return typeof t=="object"&&t!==null?Si({from:t,seen:[],forceEnumerable:!0,maxDepth:r,depth:0}):typeof t=="function"?`[Function: ${t.name||"anonymous"}]`:t}let xi=()=>({events:{},emit(t,...e){(this.events[t]||[]).forEach(r=>r(...e))},on(t,e){return(this.events[t]=this.events[t]||[]).push(e),()=>this.events[t]=(this.events[t]||[]).filter(r=>r!==e)}});var ph=(t,e,r)=>{const n=qe.exports(),i=new Map,a=new Map,u=h=>{if(h.destination.context===t&&!h.destination.frameId&&!h.destination.tabId){r?.(h);const{transactionId:d,messageID:g,messageType:w}=h,p=()=>{const A=i.get(d);if(A){const{err:R,data:U}=h;if(R){const L=R,C=self[L.name],b=new(typeof C=="function"?C:Error)(L.message);for(const S in L)b[S]=L[S];A.reject(b)}else A.resolve(U);i.delete(d)}},T=async()=>{let A,R,U=!1;try{const L=a.get(g);if(typeof L=="function")A=await L({sender:h.origin,id:g,data:h.data,timestamp:h.timestamp});else throw U=!0,new Error(`[webext-bridge] No handler registered in '${t}' to accept messages with id '${g}'`)}catch(L){R=L}finally{if(R&&(h.err=Lo(R)),u(Ii(Ai({},h),{messageType:"reply",data:A,origin:{context:t,tabId:null},destination:h.origin,hops:[]})),R&&!U)throw A}};switch(w){case"reply":return p();case"message":return T()}}return h.hops.push(`${t}::${n}`),e(h)};return{handleMessage:u,endTransaction:h=>{const d=i.get(h);d?.reject("Transaction was ended before it could complete"),i.delete(h)},sendMessage:(h,d,g="background")=>{const w=typeof g=="string"?Ei(g):g,p="Bridge#sendMessage ->";if(!w.context)throw new TypeError(`${p} Destination must be any one of known destinations`);return new Promise((T,A)=>{const R={messageID:h,data:d,destination:w,messageType:"message",transactionId:qe.exports(),origin:{context:t,tabId:null},hops:[],timestamp:Date.now()};i.set(R.transactionId,{resolve:T,reject:A});try{u(R)}catch(U){i.delete(R.transactionId),A(U)}})},onMessage:(h,d)=>(a.set(h,d),()=>a.delete(h))}},Ue=class{constructor(t,e){this.endpointRuntime=t,this.streamInfo=e,this.emitter=xi(),this.isClosed=!1,this.handleStreamClose=()=>{this.isClosed||(this.isClosed=!0,this.emitter.emit("closed",!0),this.emitter.events={})},Ue.initDone||(t.onMessage("__crx_bridge_stream_transfer__",r=>{const{streamId:n,streamTransfer:i,action:a}=r.data,u=Ue.openStreams.get(n);u&&!u.isClosed&&(a==="transfer"&&u.emitter.emit("message",i),a==="close"&&(Ue.openStreams.delete(n),u.handleStreamClose()))}),Ue.initDone=!0),Ue.openStreams.set(this.streamInfo.streamId,this)}get info(){return this.streamInfo}send(t){if(this.isClosed)throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");this.endpointRuntime.sendMessage("__crx_bridge_stream_transfer__",{streamId:this.streamInfo.streamId,streamTransfer:t,action:"transfer"},this.streamInfo.endpoint)}close(t){t&&this.send(t),this.handleStreamClose(),this.endpointRuntime.sendMessage("__crx_bridge_stream_transfer__",{streamId:this.streamInfo.streamId,streamTransfer:null,action:"close"},this.streamInfo.endpoint)}onMessage(t){return this.getDisposable("message",t)}onClose(t){return this.getDisposable("closed",t)}getDisposable(t,e){const r=this.emitter.on(t,e);return Object.assign(r,{dispose:r,close:r})}},Mt=Ue;Mt.initDone=!1;Mt.openStreams=new Map;var gh=t=>{const e=new Map,r=new Map,n=xi();t.onMessage("__crx_bridge_stream_open__",u=>new Promise(h=>{const{sender:d,data:g}=u,{channel:w}=g;let p=!1,T=()=>{};const A=()=>{const R=r.get(w);typeof R=="function"?(R(new Mt(t,Ii(Ai({},g),{endpoint:d}))),p&&T(),h(!0)):p||(p=!0,T=n.on("did-change-stream-callbacks",A))};A()}));async function i(u,h){if(e.has(u))throw new Error("webext-bridge: A Stream is already open at this channel");const d=typeof h=="string"?Ei(h):h,g={streamId:qe.exports(),channel:u,endpoint:d},w=new Mt(t,g);return w.onClose(()=>e.delete(u)),await t.sendMessage("__crx_bridge_stream_open__",g,d),e.set(u,w),w}function a(u,h){if(r.has(u))throw new Error("webext-bridge: This channel has already been claimed. Stream allows only one-on-one communication");r.set(u,h),n.emit("did-change-stream-callbacks")}return{openStream:i,onOpenStreamChannel:a}};const mh=(t,...e)=>{const r=e[1];return e[1]=async function(...n){try{return await r(...n)}catch(i){return{__error:{message:i.message,stack:Pr(i)}}}},t(...e)},_h=async(t,...e)=>{const r=await t(...e);if(r?.__error){console.error(`sendMessage ${e[0]} error`,r.__error);const n=new Error(r.__error.message);throw n.stack+=`
`+r.__error.stack,n}return r},ut={};let En=0;function Bo(t,e){const r=`${En}`;return En+=1,ut[r]={handler:e,name:t},function(){delete ut[r]}}function Uo(t,e){let r=!1;const n=Bo(t,function(...i){r!==!0&&(r=!0,n(),e(...i))});return n}function Tn(t,e){for(const r in ut)ut[r].name===t&&ut[r].handler.apply(null,e)}typeof figma<"u"?figma.ui.onmessage=function([t,...e]){Tn(t,e)}:typeof window<"u"&&window.addEventListener("message",function(t){if(typeof t.data.pluginMessage>"u")return;const[e,...r]=t.data.pluginMessage;Tn(e,r)});function Fo(t,e){return e.find(r=>r.id===t)||void 0}const ki=[{id:"desktop",name:"Desktop",width:1920,type:"preset"},{id:"laptop",name:"Laptop",width:1440,type:"preset"},{id:"tablet",name:"Tablet",width:1024,type:"preset"},{id:"phablet",name:"Phablet",width:768,type:"preset"},{id:"phone",name:"Phone",width:390,type:"preset"}];function yh(t){const e=[...t,...ki],r=n=>e.find(i=>i.id===n)?.width??0;return(n,i)=>r(i)-r(n)}const Ci={id:"default",name:"Browser width",type:"preset",width:-1},Sn=[Ci,...ki],wh=t=>{const e=[],{multiImport:r}=t;for(const n of r.modes)for(const i of r.deviceIds){const a=Fo(i,t.devices);if(a){const u={theme:n};a.width>=0&&(u.width=a.width),e.push(u)}}return e};let it={devices:Sn,multiImport:{deviceIds:[Sn[0].id],modes:["default"]},fullAutoActions:[],clipboardAutoLayout:!0};function vh(t){const[e,r]=wo(it),n=mi(),i=Ao(a=>{a.devices=a.devices.map(u=>u.id===Ci.id?{...u,name:n.current?`Browser (${n.current}px)`:"Browser"}:u),r(it=a)},[]);return gi(()=>{chrome.storage.local.get(["settings","fullAutoActions"]).then(async a=>{const u={...it,...a.settings};u.fullAutoActions===void 0&&(Array.isArray(a.fullAutoActions)?u.fullAutoActions=a.fullAutoActions:a.settings?.saveLocation&&(u.fullAutoActions=a.settings.saveLocation==="gstorage"?["figma"]:["h2d"])),n.current=await t.current,i(u)})},[i,t]),co([e,a=>{i({...it,...a}),chrome.storage.local.set({settings:it}).catch(u=>console.error(`Failed to save user settings: ${u}`))}])}async function bh(t){const e=await chrome.storage.local.get(["settings"]);t(e.settings)}var $o=Symbol.for("preact-signals");function Nr(){if($e>1)$e--;else{for(var t,e=!1;lt!==void 0;){var r=lt;for(lt=void 0,_r++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&Oi(r))try{r.c()}catch(i){e||(t=i,e=!0)}r=n}}if(_r=0,$e--,e)throw t}}var $=void 0;function Pi(t){var e=$;$=void 0;try{return t()}finally{$=e}}var lt=void 0,$e=0,_r=0,Lt=0;function Ri(t){if($!==void 0){var e=t.n;if(e===void 0||e.t!==$)return e={i:0,S:t,p:$.s,n:void 0,t:$,e:void 0,x:void 0,r:e},$.s!==void 0&&($.s.n=e),$.s=e,t.n=e,32&$.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=$.s,e.n=void 0,$.s.n=e,$.s=e),e}}function Q(t,e){this.v=t,this.i=0,this.n=void 0,this.t=void 0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}Q.prototype.brand=$o;Q.prototype.h=function(){return!0};Q.prototype.S=function(t){var e=this,r=this.t;r!==t&&t.e===void 0&&(t.x=r,this.t=t,r!==void 0?r.e=t:Pi(function(){var n;(n=e.W)==null||n.call(e)}))};Q.prototype.U=function(t){var e=this;if(this.t!==void 0){var r=t.e,n=t.x;r!==void 0&&(r.x=n,t.e=void 0),n!==void 0&&(n.e=r,t.x=void 0),t===this.t&&(this.t=n,n===void 0&&Pi(function(){var i;(i=e.Z)==null||i.call(e)}))}};Q.prototype.subscribe=function(t){var e=this;return Kt(function(){var r=e.value,n=$;$=void 0;try{t(r)}finally{$=n}},{name:"sub"})};Q.prototype.valueOf=function(){return this.value};Q.prototype.toString=function(){return this.value+""};Q.prototype.toJSON=function(){return this.value};Q.prototype.peek=function(){var t=$;$=void 0;try{return this.value}finally{$=t}};Object.defineProperty(Q.prototype,"value",{get:function(){var t=Ri(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(_r>100)throw new Error("Cycle detected");this.v=t,this.i++,Lt++,$e++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Nr()}}}});function yt(t,e){return new Q(t,e)}function Oi(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Ni(t){for(var e=t.s;e!==void 0;e=e.n){var r=e.S.n;if(r!==void 0&&(e.r=r),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function Di(t){for(var e=t.s,r=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):r=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}t.s=r}function Ne(t,e){Q.call(this,void 0),this.x=t,this.s=void 0,this.g=Lt-1,this.f=4,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}Ne.prototype=new Q;Ne.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Lt))return!0;if(this.g=Lt,this.f|=1,this.i>0&&!Oi(this))return this.f&=-2,!0;var t=$;try{Ni(this),$=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return $=t,Di(this),this.f&=-2,!0};Ne.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}Q.prototype.S.call(this,t)};Ne.prototype.U=function(t){if(this.t!==void 0&&(Q.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};Ne.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(Ne.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=Ri(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function Ho(t,e){return new Ne(t,e)}function Mi(t){var e=t.u;if(t.u=void 0,typeof e=="function"){$e++;var r=$;$=void 0;try{e()}catch(n){throw t.f&=-2,t.f|=8,Dr(t),n}finally{$=r,Nr()}}}function Dr(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Mi(t)}function jo(t){if($!==this)throw new Error("Out-of-order effect");Di(this),$=t,this.f&=-2,8&this.f&&Dr(this),Nr()}function Qe(t,e){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=e?.name}Qe.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};Qe.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Mi(this),Ni(this),$e++;var t=$;return $=this,jo.bind(this,t)};Qe.prototype.N=function(){2&this.f||(this.f|=2,this.o=lt,lt=this)};Qe.prototype.d=function(){this.f|=8,1&this.f||Dr(this)};Qe.prototype.dispose=function(){this.d()};function Kt(t,e){var r=new Qe(t,e);try{r.c()}catch(i){throw r.d(),i}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var rr;function et(t,e){V[t]=e.bind(null,V[t]||function(){})}function Bt(t){rr&&rr(),rr=t&&t.S()}function Li(t){var e=this,r=t.data,n=Wo(r);n.value=r;var i=qt(function(){for(var a=e.__v;a=a.__;)if(a.__c){a.__c.__$f|=4;break}return e.__$u.c=function(){e.base.data=i.peek()},Ho(function(){var u=n.value.value;return u===0?0:u===!0?"":u||""})},[]);return i.value}Li.displayName="_st";Object.defineProperties(Q.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Li},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});et("__b",function(t,e){if(typeof e.type=="string"){var r,n=e.props;for(var i in n)if(i!=="children"){var a=n[i];a instanceof Q&&(r||(e.__np=r={}),r[i]=a,n[i]=a.peek())}}t(e)});et("__r",function(t,e){Bt();var r,n=e.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(i){var a;return Kt(function(){a=this}),a.c=function(){n.__$f|=1,n.setState({})},a}())),Bt(r),t(e)});et("__e",function(t,e,r,n){Bt(),t(e,r,n)});et("diffed",function(t,e){Bt();var r;if(typeof e.type=="string"&&(r=e.__e)){var n=e.__np,i=e.props;if(n){var a=r.U;if(a)for(var u in a){var h=a[u];h!==void 0&&!(u in n)&&(h.d(),a[u]=void 0)}else r.U=a={};for(var d in n){var g=a[d],w=n[d];g===void 0?(g=Vo(r,d,w,i),a[d]=g):g.o(w,i)}}}t(e)});function Vo(t,e,r,n){var i=e in t&&t.ownerSVGElement===void 0,a=yt(r);return{o:function(u,h){a.value=u,n=h},d:Kt(function(){var u=a.value.value;n[e]!==u&&(n[e]=u,i?t[e]=u:u?t.setAttribute(e,u):t.removeAttribute(e))})}}et("unmount",function(t,e){if(typeof e.type=="string"){var r=e.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var i in n){var a=n[i];a&&a.d()}}}}else{var u=e.__c;if(u){var h=u.__$u;h&&(u.__$u=void 0,h.d())}}t(e)});et("__h",function(t,e,r,n){n<3&&(e.__$f|=2),t(e,r,n)});ct.prototype.shouldComponentUpdate=function(t,e){var r=this.__$u;if(!(r&&r.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var n in e)return!0;for(var i in t)if(i!=="__source"&&t[i]!==this.props[i])return!0;for(var a in this.props)if(!(a in t))return!0;return!1};function Wo(t){return qt(function(){return yt(t)},[])}function Ah(t){var e=mi(t);e.current=t,gi(function(){return Kt(function(){return e.current()})},[])}const zo=typeof window>"u"?function(t,...e){figma.ui.postMessage([t,...e])}:function(t,...e){window.parent.postMessage({pluginMessage:[t,...e]},"*")};function Bi(t,...e){({}).NO_DEBUG_LOGS||console.log("EMIT",t,e),zo(t,...e)}let Go=0;function qo(t,...e){const r=Go++;return new Promise((n,i)=>{Uo(`${String(t)}-response-${r}`,a=>{if("error"in a){const{message:u,stack:h,name:d}=a.error,g=new Error(u);d&&(g.name=d),g.cause=new Ko(u,h),i(g)}else n(a.result)}),Bi(String(t),[r,...e])})}class Ko extends Error{constructor(e,r){super(e),this.stack=r}}function Ui(t,...e){return qo(t,...e)}const ht=globalThis.chrome?.storage?.local;async function Jo(t){return ht?(await ht.get(t))[t]:Ui("client-storage-request",t)}async function Fi(t,e){ht?e===void 0?await ht.remove(t):await ht.set({[t]:e}):await Ui("client-storage-set",t,e)}function Yo(t,e){try{Bi("notify-request",t,e)}catch{console.log(t,e)}}const Xo=()=>Math.floor(Date.now()/1e3);var $i={};(function(t){Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});function e(I){return I&&I.__esModule&&Object.prototype.hasOwnProperty.call(I,"default")?I.default:I}var r={exports:{}},n=r.exports={},i,a;function u(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=u}catch{i=u}try{typeof clearTimeout=="function"?a=clearTimeout:a=h}catch{a=h}})();function d(I){if(i===setTimeout)return setTimeout(I,0);if((i===u||!i)&&setTimeout)return i=setTimeout,setTimeout(I,0);try{return i(I,0)}catch{try{return i.call(null,I,0)}catch{return i.call(this,I,0)}}}function g(I){if(a===clearTimeout)return clearTimeout(I);if((a===h||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(I);try{return a(I)}catch{try{return a.call(null,I)}catch{return a.call(this,I)}}}var w=[],p=!1,T,A=-1;function R(){!p||!T||(p=!1,T.length?w=T.concat(w):A=-1,w.length&&U())}function U(){if(!p){var I=d(R);p=!0;for(var O=w.length;O;){for(T=w,w=[];++A<O;)T&&T[A].run();A=-1,O=w.length}T=null,p=!1,g(I)}}n.nextTick=function(I){var O=new Array(arguments.length-1);if(arguments.length>1)for(var N=1;N<arguments.length;N++)O[N-1]=arguments[N];w.push(new L(I,O)),w.length===1&&!p&&d(U)};function L(I,O){this.fun=I,this.array=O}L.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={};function C(){}n.on=C,n.addListener=C,n.once=C,n.off=C,n.removeListener=C,n.removeAllListeners=C,n.emit=C,n.prependListener=C,n.prependOnceListener=C,n.listeners=function(I){return[]},n.binding=function(I){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(I){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};var b=r.exports;const S=e(b);t.default=S,t.process=S})($i);const xn=yi($i);/**
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
 */const Zo=()=>{};/**
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
 */const Hi=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},Qo=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[r++];e[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[r++],u=t[r++],h=t[r++],d=((i&7)<<18|(a&63)<<12|(u&63)<<6|h&63)-65536;e[n++]=String.fromCharCode(55296+(d>>10)),e[n++]=String.fromCharCode(56320+(d&1023))}else{const a=t[r++],u=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|u&63)}}return e.join("")},ji={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const a=t[i],u=i+1<t.length,h=u?t[i+1]:0,d=i+2<t.length,g=d?t[i+2]:0,w=a>>2,p=(a&3)<<4|h>>4;let T=(h&15)<<2|g>>6,A=g&63;d||(A=64,u||(T=64)),n.push(r[w],r[p],r[T],r[A])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hi(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const a=r[t.charAt(i++)],h=i<t.length?r[t.charAt(i)]:0;++i;const g=i<t.length?r[t.charAt(i)]:64;++i;const p=i<t.length?r[t.charAt(i)]:64;if(++i,a==null||h==null||g==null||p==null)throw new ea;const T=a<<2|h>>4;if(n.push(T),g!==64){const A=h<<4&240|g>>2;if(n.push(A),p!==64){const R=g<<6&192|p;n.push(R)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ea extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ta=function(t){const e=Hi(t);return ji.encodeByteArray(e,!0)},Vi=function(t){return ta(t).replace(/\./g,"")},Wi=function(t){try{return ji.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ra(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const na=()=>ra().__FIREBASE_DEFAULTS__,ia=()=>{if(typeof xn>"u"||typeof xn.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sa=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wi(t[1]);return e&&JSON.parse(e)},Mr=()=>{try{return Zo()||na()||ia()||sa()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oa=t=>Mr()?.emulatorHosts?.[t],zi=()=>Mr()?.config,Gi=t=>Mr()?.[`_${t}`];/**
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
 */class aa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ca(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())}function ua(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function la(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ha(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function da(){const t=ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fa(){try{return typeof indexedDB=="object"}catch{return!1}}function pa(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(r){e(r)}})}/**
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
 */const ga="FirebaseError";class Te extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=ga,Object.setPrototypeOf(this,Te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wt.prototype.create)}}class wt{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,a=this.errors[e],u=a?ma(a,n):"Error",h=`${this.serviceName}: ${u} (${i}).`;return new Te(i,h,n)}}function ma(t,e){return t.replace(_a,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const _a=/\{\$([^}]+)}/g;function ya(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ke(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const a=t[i],u=e[i];if(kn(a)&&kn(u)){if(!Ke(a,u))return!1}else if(a!==u)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function kn(t){return t!==null&&typeof t=="object"}/**
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
 */function vt(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function wa(t,e){const r=new va(t,e);return r.subscribe.bind(r)}class va{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");ba(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=nr),i.error===void 0&&(i.error=nr),i.complete===void 0&&(i.complete=nr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ba(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function nr(){}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Lr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Aa(t){return(await fetch(t,{credentials:"include"})).ok}class Je{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ke="[DEFAULT]";/**
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
 */class Ia{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new aa;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){const r=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ta(e))try{this.getOrInitializeService({instanceIdentifier:ke})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(e=ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ke){return this.instances.has(e)}getOptions(e=ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[a,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);n===h&&u.resolve(i)}return i}onInit(e,r){const n=this.normalizeInstanceIdentifier(r),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const a=this.instances.get(n);return a&&e(a,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(!!n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Ea(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ke){return this.component?this.component.multipleInstances?e:ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ea(t){return t===ke?void 0:t}function Ta(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new Ia(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const xa={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},ka=j.INFO,Ca={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Pa=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=Ca[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qi{constructor(e){this.name=e,this._logLevel=ka,this._logHandler=Pa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Ra=(t,e)=>e.some(r=>t instanceof r);let Cn,Pn;function Oa(){return Cn||(Cn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Na(){return Pn||(Pn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ki=new WeakMap,yr=new WeakMap,Ji=new WeakMap,ir=new WeakMap,Br=new WeakMap;function Da(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",u)},a=()=>{r(Ae(t.result)),i()},u=()=>{n(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",u)});return e.then(r=>{r instanceof IDBCursor&&Ki.set(r,t)}).catch(()=>{}),Br.set(e,t),e}function Ma(t){if(yr.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",u),t.removeEventListener("abort",u)},a=()=>{r(),i()},u=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",u),t.addEventListener("abort",u)});yr.set(t,e)}let wr={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return yr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ji.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Ae(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function La(t){wr=t(wr)}function Ba(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(sr(this),e,...r);return Ji.set(n,e.sort?e.sort():[e]),Ae(n)}:Na().includes(t)?function(...e){return t.apply(sr(this),e),Ae(Ki.get(this))}:function(...e){return Ae(t.apply(sr(this),e))}}function Ua(t){return typeof t=="function"?Ba(t):(t instanceof IDBTransaction&&Ma(t),Ra(t,Oa())?new Proxy(t,wr):t)}function Ae(t){if(t instanceof IDBRequest)return Da(t);if(ir.has(t))return ir.get(t);const e=Ua(t);return e!==t&&(ir.set(t,e),Br.set(e,t)),e}const sr=t=>Br.get(t);function Fa(t,e,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){const u=indexedDB.open(t,e),h=Ae(u);return n&&u.addEventListener("upgradeneeded",d=>{n(Ae(u.result),d.oldVersion,d.newVersion,Ae(u.transaction),d)}),r&&u.addEventListener("blocked",d=>r(d.oldVersion,d.newVersion,d)),h.then(d=>{a&&d.addEventListener("close",()=>a()),i&&d.addEventListener("versionchange",g=>i(g.oldVersion,g.newVersion,g))}).catch(()=>{}),h}const $a=["get","getKey","getAll","getAllKeys","count"],Ha=["put","add","delete","clear"],or=new Map;function Rn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(or.get(e))return or.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=Ha.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||$a.includes(r)))return;const a=async function(u,...h){const d=this.transaction(u,i?"readwrite":"readonly");let g=d.store;return n&&(g=g.index(h.shift())),(await Promise.all([g[r](...h),i&&d.done]))[0]};return or.set(e,a),a}La(t=>({...t,get:(e,r,n)=>Rn(e,r)||t.get(e,r,n),has:(e,r)=>!!Rn(e,r)||t.has(e,r)}));/**
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
 */class ja{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Va(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function Va(t){return t.getComponent()?.type==="VERSION"}const vr="@firebase/app",On="0.14.10";/**
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
 */const fe=new qi("@firebase/app"),Wa="@firebase/app-compat",za="@firebase/analytics-compat",Ga="@firebase/analytics",qa="@firebase/app-check-compat",Ka="@firebase/app-check",Ja="@firebase/auth",Ya="@firebase/auth-compat",Xa="@firebase/database",Za="@firebase/data-connect",Qa="@firebase/database-compat",ec="@firebase/functions",tc="@firebase/functions-compat",rc="@firebase/installations",nc="@firebase/installations-compat",ic="@firebase/messaging",sc="@firebase/messaging-compat",oc="@firebase/performance",ac="@firebase/performance-compat",cc="@firebase/remote-config",uc="@firebase/remote-config-compat",lc="@firebase/storage",hc="@firebase/storage-compat",dc="@firebase/firestore",fc="@firebase/ai",pc="@firebase/firestore-compat",gc="firebase",mc="12.11.0";/**
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
 */const br="[DEFAULT]",_c={[vr]:"fire-core",[Wa]:"fire-core-compat",[Ga]:"fire-analytics",[za]:"fire-analytics-compat",[Ka]:"fire-app-check",[qa]:"fire-app-check-compat",[Ja]:"fire-auth",[Ya]:"fire-auth-compat",[Xa]:"fire-rtdb",[Za]:"fire-data-connect",[Qa]:"fire-rtdb-compat",[ec]:"fire-fn",[tc]:"fire-fn-compat",[rc]:"fire-iid",[nc]:"fire-iid-compat",[ic]:"fire-fcm",[sc]:"fire-fcm-compat",[oc]:"fire-perf",[ac]:"fire-perf-compat",[cc]:"fire-rc",[uc]:"fire-rc-compat",[lc]:"fire-gcs",[hc]:"fire-gcs-compat",[dc]:"fire-fst",[pc]:"fire-fst-compat",[fc]:"fire-vertex","fire-js":"fire-js",[gc]:"fire-js-all"};/**
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
 */const Ut=new Map,yc=new Map,Ar=new Map;function Nn(t,e){try{t.container.addComponent(e)}catch(r){fe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function pt(t){const e=t.name;if(Ar.has(e))return fe.debug(`There were multiple attempts to register component ${e}.`),!1;Ar.set(e,t);for(const r of Ut.values())Nn(r,t);for(const r of yc.values())Nn(r,t);return!0}function Yi(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function ue(t){return t==null?!1:t.settings!==void 0}/**
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
 */const wc={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Ie=new wt("app","Firebase",wc);/**
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
 */class vc{constructor(e,r,n){this._isDeleted=!1,this._options={...e},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}}/**
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
 */const bt=mc;function bc(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n={name:br,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw Ie.create("bad-app-name",{appName:String(i)});if(r||(r=zi()),!r)throw Ie.create("no-options");const a=Ut.get(i);if(a){if(Ke(r,a.options)&&Ke(n,a.config))return a;throw Ie.create("duplicate-app",{appName:i})}const u=new Sa(i);for(const d of Ar.values())u.addComponent(d);const h=new vc(r,n,u);return Ut.set(i,h),h}function Ac(t=br){const e=Ut.get(t);if(!e&&t===br&&zi())return bc();if(!e)throw Ie.create("no-app",{appName:t});return e}function He(t,e,r){let n=_c[t]??t;r&&(n+=`-${r}`);const i=n.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${n}" with version "${e}":`];i&&u.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fe.warn(u.join(" "));return}pt(new Je(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Ic="firebase-heartbeat-database",Ec=1,gt="firebase-heartbeat-store";let ar=null;function Xi(){return ar||(ar=Fa(Ic,Ec,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gt)}catch(r){console.warn(r)}}}}).catch(t=>{throw Ie.create("idb-open",{originalErrorMessage:t.message})})),ar}async function Tc(t){try{const r=(await Xi()).transaction(gt),n=await r.objectStore(gt).get(Zi(t));return await r.done,n}catch(e){if(e instanceof Te)fe.warn(e.message);else{const r=Ie.create("idb-get",{originalErrorMessage:e?.message});fe.warn(r.message)}}}async function Dn(t,e){try{const n=(await Xi()).transaction(gt,"readwrite");await n.objectStore(gt).put(e,Zi(t)),await n.done}catch(r){if(r instanceof Te)fe.warn(r.message);else{const n=Ie.create("idb-set",{originalErrorMessage:r?.message});fe.warn(n.message)}}}function Zi(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sc=1024,xc=30;class kc{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Pc(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Mn();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats.length>xc){const i=Rc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){fe.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mn(),{heartbeatsToSend:r,unsentEntries:n}=Cc(this._heartbeatsCache.heartbeats),i=Vi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return fe.warn(e),""}}}function Mn(){return new Date().toISOString().substring(0,10)}function Cc(t,e=Sc){const r=[];let n=t.slice();for(const i of t){const a=r.find(u=>u.agent===i.agent);if(a){if(a.dates.push(i.date),Ln(r)>e){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Ln(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class Pc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fa()?pa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Tc(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Dn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Dn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Ln(t){return Vi(JSON.stringify({version:2,heartbeats:t})).length}function Rc(t){if(t.length===0)return-1;let e=0,r=t[0].date;for(let n=1;n<t.length;n++)t[n].date<r&&(r=t[n].date,e=n);return e}/**
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
 */function Oc(t){pt(new Je("platform-logger",e=>new ja(e),"PRIVATE")),pt(new Je("heartbeat",e=>new kc(e),"PRIVATE")),He(vr,On,t),He(vr,On,"esm2020"),He("fire-js","")}Oc("");function Qi(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nc=Qi,es=new wt("auth","Firebase",Qi());/**
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
 */const Ft=new qi("@firebase/auth");function Dc(t,...e){Ft.logLevel<=j.WARN&&Ft.warn(`Auth (${bt}): ${t}`,...e)}function Ct(t,...e){Ft.logLevel<=j.ERROR&&Ft.error(`Auth (${bt}): ${t}`,...e)}/**
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
 */function pe(t,...e){throw Ur(t,...e)}function oe(t,...e){return Ur(t,...e)}function ts(t,e,r){const n={...Nc(),[e]:r};return new wt("auth","Firebase",n).create(e,{appName:t.name})}function Re(t){return ts(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ur(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return es.create(t,...e)}function M(t,e,...r){if(!t)throw Ur(e,...r)}function he(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ct(e),new Error(e)}function ge(t,e){t||he(e)}/**
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
 */function Ir(){return typeof self<"u"&&self.location?.href||""}function Mc(){return Bn()==="http:"||Bn()==="https:"}function Bn(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Lc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mc()||la()||"connection"in navigator)?navigator.onLine:!0}function Bc(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class At{constructor(e,r){this.shortDelay=e,this.longDelay=r,ge(r>e,"Short delay should be less than long delay!"),this.isMobile=ca()||ha()}get(){return Lc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fr(t,e){ge(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class rs{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Uc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Fc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$c=new At(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function tt(t,e,r,n,i={}){return ns(t,i,async()=>{let a={},u={};n&&(e==="GET"?u=n:a={body:JSON.stringify(n)});const h=vt({key:t.config.apiKey,...u}).slice(1),d=await t._getAdditionalHeaders();d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode);const g={method:e,headers:d,...a};return ua()||(g.referrerPolicy="no-referrer"),t.emulatorConfig&&Lr(t.emulatorConfig.host)&&(g.credentials="include"),rs.fetch()(await is(t,t.config.apiHost,r,h),g)})}async function ns(t,e,r){t._canInitEmulator=!1;const n={...Uc,...e};try{const i=new jc(t),a=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw xt(t,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const h=a.ok?u.errorMessage:u.error.message,[d,g]=h.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw xt(t,"credential-already-in-use",u);if(d==="EMAIL_EXISTS")throw xt(t,"email-already-in-use",u);if(d==="USER_DISABLED")throw xt(t,"user-disabled",u);const w=n[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw ts(t,w,g);pe(t,w)}}catch(i){if(i instanceof Te)throw i;pe(t,"network-request-failed",{message:String(i)})}}async function Hc(t,e,r,n,i={}){const a=await tt(t,e,r,n,i);return"mfaPendingCredential"in a&&pe(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function is(t,e,r,n){const i=`${e}${r}?${n}`,a=t,u=a.config.emulator?Fr(t.config,i):`${t.config.apiScheme}://${i}`;return Fc.includes(r)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}class jc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(oe(this.auth,"network-request-failed")),$c.get())})}}function xt(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=oe(t,e,n);return i.customData._tokenResponse=r,i}/**
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
 */async function Vc(t,e){return tt(t,"POST","/v1/accounts:delete",e)}async function $t(t,e){return tt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function dt(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wc(t,e=!1){const r=De(t),n=await r.getIdToken(e),i=Hr(n);M(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,u=a?.sign_in_provider;return{claims:i,token:n,authTime:dt(cr(i.auth_time)),issuedAtTime:dt(cr(i.iat)),expirationTime:dt(cr(i.exp)),signInProvider:u||null,signInSecondFactor:a?.sign_in_second_factor||null}}function cr(t){return Number(t)*1e3}function Hr(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Ct("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wi(r);return i?JSON.parse(i):(Ct("Failed to decode base64 JWT payload"),null)}catch(i){return Ct("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Un(t){const e=Hr(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mt(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Te&&zc(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function zc({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Er{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=dt(this.lastLoginAt),this.creationTime=dt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ht(t){const e=t.auth,r=await t.getIdToken(),n=await mt(t,$t(e,{idToken:r}));M(n?.users.length,e,"internal-error");const i=n.users[0];t._notifyReloadListener(i);const a=i.providerUserInfo?.length?ss(i.providerUserInfo):[],u=Kc(t.providerData,a),h=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!u?.length,g=h?d:!1,w={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new Er(i.createdAt,i.lastLoginAt),isAnonymous:g};Object.assign(t,w)}async function qc(t){const e=De(t);await Ht(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kc(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function ss(t){return t.map(({providerId:e,...r})=>({providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}/**
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
 */async function Jc(t,e){const r=await ns(t,{},async()=>{const n=vt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,u=await is(t,i,"/v1/token",`key=${a}`),h=await t._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:h,body:n};return t.emulatorConfig&&Lr(t.emulatorConfig.host)&&(d.credentials="include"),rs.fetch()(u,d)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Yc(t,e){return tt(t,"POST","/v2/accounts:revokeToken",$r(t,e))}/**
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
 */class je{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Un(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){M(e.length!==0,"internal-error");const r=Un(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:a}=await Jc(e,r);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:a}=r,u=new je;return n&&(M(typeof n=="string","internal-error",{appName:e}),u.refreshToken=n),i&&(M(typeof i=="string","internal-error",{appName:e}),u.accessToken=i),a&&(M(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new je,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
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
 */function _e(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ne{constructor({uid:e,auth:r,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new Gc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Er(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const r=await mt(this,this.stsTokenManager.getToken(this.auth,e));return M(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Wc(this,e)}reload(){return qc(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>({...r})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new ne({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await Ht(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ue(this.auth.app))return Promise.reject(Re(this.auth));const e=await this.getIdToken();return await mt(this,Vc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){const n=r.displayName??void 0,i=r.email??void 0,a=r.phoneNumber??void 0,u=r.photoURL??void 0,h=r.tenantId??void 0,d=r._redirectEventId??void 0,g=r.createdAt??void 0,w=r.lastLoginAt??void 0,{uid:p,emailVerified:T,isAnonymous:A,providerData:R,stsTokenManager:U}=r;M(p&&U,e,"internal-error");const L=je.fromJSON(this.name,U);M(typeof p=="string",e,"internal-error"),_e(n,e.name),_e(i,e.name),M(typeof T=="boolean",e,"internal-error"),M(typeof A=="boolean",e,"internal-error"),_e(a,e.name),_e(u,e.name),_e(h,e.name),_e(d,e.name),_e(g,e.name),_e(w,e.name);const C=new ne({uid:p,auth:e,email:i,emailVerified:T,displayName:n,isAnonymous:A,photoURL:u,phoneNumber:a,tenantId:h,stsTokenManager:L,createdAt:g,lastLoginAt:w});return R&&Array.isArray(R)&&(C.providerData=R.map(b=>({...b}))),d&&(C._redirectEventId=d),C}static async _fromIdTokenResponse(e,r,n=!1){const i=new je;i.updateFromServerResponse(r);const a=new ne({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Ht(a),a}static async _fromGetAccountInfoResponse(e,r,n){const i=r.users[0];M(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?ss(i.providerUserInfo):[],u=!(i.email&&i.passwordHash)&&!a?.length,h=new je;h.updateFromIdToken(n);const d=new ne({uid:i.localId,auth:e,stsTokenManager:h,isAnonymous:u}),g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Er(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(d,g),d}}/**
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
 */const Fn=new Map;function de(t){ge(t instanceof Function,"Expected a class definition");let e=Fn.get(t);return e?(ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fn.set(t,e),e)}/**
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
 */class os{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}os.type="NONE";const $n=os;/**
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
 */function Pt(t,e,r){return`firebase:${t}:${e}:${r}`}class Ve{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=Pt(this.userKey,i.apiKey,a),this.fullPersistenceKey=Pt("persistence",i.apiKey,a),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const r=await $t(this.auth,{idToken:e}).catch(()=>{});return r?ne._fromGetAccountInfoResponse(this.auth,r,e):null}return ne._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new Ve(de($n),e,n);const i=(await Promise.all(r.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=i[0]||de($n);const u=Pt(n,e.config.apiKey,e.name);let h=null;for(const g of r)try{const w=await g._get(u);if(w){let p;if(typeof w=="string"){const T=await $t(e,{idToken:w}).catch(()=>{});if(!T)break;p=await ne._fromGetAccountInfoResponse(e,T,w)}else p=ne._fromJSON(e,w);g!==a&&(h=p),a=g;break}}catch{}const d=i.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!d.length?new Ve(a,e,n):(a=d[0],h&&await a._set(u,h.toJSON()),await Promise.all(r.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new Ve(a,e,n))}}/**
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
 */function Hn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ls(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(as(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ds(e))return"Blackberry";if(fs(e))return"Webos";if(cs(e))return"Safari";if((e.includes("chrome/")||us(e))&&!e.includes("edge/"))return"Chrome";if(hs(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if(n?.length===2)return n[1]}return"Other"}function as(t=ee()){return/firefox\//i.test(t)}function cs(t=ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function us(t=ee()){return/crios\//i.test(t)}function ls(t=ee()){return/iemobile/i.test(t)}function hs(t=ee()){return/android/i.test(t)}function ds(t=ee()){return/blackberry/i.test(t)}function fs(t=ee()){return/webos/i.test(t)}function jr(t=ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xc(t=ee()){return jr(t)&&!!window.navigator?.standalone}function Zc(){return da()&&document.documentMode===10}function ps(t=ee()){return jr(t)||hs(t)||fs(t)||ds(t)||/windows phone/i.test(t)||ls(t)}/**
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
 */function gs(t,e=[]){let r;switch(t){case"Browser":r=Hn(ee());break;case"Worker":r=`${Hn(ee())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${bt}/${n}`}/**
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
 */class Qc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=a=>new Promise((u,h)=>{try{const d=e(a);u(d)}catch(d){h(d)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
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
 */async function eu(t,e={}){return tt(t,"GET","/v2/passwordPolicy",$r(t,e))}/**
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
 */const tu=6;class ru{constructor(e){const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??tu,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,r),this.validatePasswordCharacterOptions(e,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),i&&(r.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class nu{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jn(this),this.idTokenSubscription=new jn(this),this.beforeStateQueue=new Qc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=es,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=de(r)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ve.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await $t(this,{idToken:e}),n=await ne._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ue(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,u=n?._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&h?.user&&(n=h.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(a){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await Ht(e)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ue(this.app))return Promise.reject(Re(this));const r=e?De(e):null;return r&&M(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ue(this.app)?Promise.reject(Re(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ue(this.app)?Promise.reject(Re(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eu(this),r=new ru(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new wt("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await Yc(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&de(e)||this._popupRedirectResolver;M(r,this,"argument-error"),this.redirectPersistenceManager=await Ve.create(this,[de(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const a=typeof r=="function"?r:r.next.bind(r);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(h,this,"internal-error"),h.then(()=>{u||a(this.currentUser)}),typeof r=="function"){const d=e.addObserver(r,n,i);return()=>{u=!0,d()}}else{const d=e.addObserver(r);return()=>{u=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();r&&(e["X-Firebase-Client"]=r);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Dc(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Vr(t){return De(t)}class jn{constructor(e){this.auth=e,this.observer=null,this.addObserver=wa(r=>this.observer=r)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iu(t){Wr=t}function su(t){return Wr.loadJS(t)}function ou(){return Wr.gapiScript}function au(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function cu(t,e){const r=Yi(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),a=r.getOptions();if(Ke(a,e??{}))return i;pe(i,"already-initialized")}return r.initialize({options:e})}function uu(t,e){const r=e?.persistence||[],n=(Array.isArray(r)?r:[r]).map(de);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e?.popupRedirectResolver)}function lu(t,e,r){const n=Vr(t);M(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!r?.disableWarnings,a=ms(e),{host:u,port:h}=hu(e),d=h===null?"":`:${h}`,g={url:`${a}//${u}${d}/`},w=Object.freeze({host:u,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){M(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),M(Ke(g,n.config.emulator)&&Ke(w,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=g,n.emulatorConfig=w,n.settings.appVerificationDisabledForTesting=!0,Lr(u)?Aa(`${a}//${u}${d}`):i||du()}function ms(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hu(t){const e=ms(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const a=i[1];return{host:a,port:Vn(n.substr(a.length+1))}}else{const[a,u]=n.split(":");return{host:a,port:Vn(u)}}}function Vn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function du(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _s{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,r){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}/**
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
 */async function We(t,e){return Hc(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
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
 */const fu="http://localhost";class Oe extends _s{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Oe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):pe("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...a}=r;if(!n||!i)return null;const u=new Oe(n,i);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const r=this.buildRequest();return We(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,We(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,We(e,r)}buildRequest(){const e={requestUri:fu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=vt(r)}return e}}/**
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
 */class ys{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class It extends ys{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ye extends It{constructor(){super("facebook.com")}static credential(e){return Oe._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ye.credential(e.oauthAccessToken)}catch{return null}}}ye.FACEBOOK_SIGN_IN_METHOD="facebook.com";ye.PROVIDER_ID="facebook.com";/**
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
 */class we extends It{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Oe._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return we.credential(r,n)}catch{return null}}}we.GOOGLE_SIGN_IN_METHOD="google.com";we.PROVIDER_ID="google.com";/**
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
 */class ve extends It{constructor(){super("github.com")}static credential(e){return Oe._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ve.credential(e.oauthAccessToken)}catch{return null}}}ve.GITHUB_SIGN_IN_METHOD="github.com";ve.PROVIDER_ID="github.com";/**
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
 */class be extends It{constructor(){super("twitter.com")}static credential(e,r){return Oe._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return be.credential(r,n)}catch{return null}}}be.TWITTER_SIGN_IN_METHOD="twitter.com";be.PROVIDER_ID="twitter.com";/**
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
 */class Ye{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const a=await ne._fromIdTokenResponse(e,n,i),u=Wn(n);return new Ye({user:a,providerId:u,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=Wn(n);return new Ye({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function Wn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class jt extends Te{constructor(e,r,n,i){super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,jt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new jt(e,r,n,i)}}function ws(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?jt._fromErrorAndOperation(t,a,e,n):a})}async function pu(t,e,r=!1){const n=await mt(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Ye._forOperation(t,"link",n)}/**
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
 */async function gu(t,e,r=!1){const{auth:n}=t;if(ue(n.app))return Promise.reject(Re(n));const i="reauthenticate";try{const a=await mt(t,ws(n,i,e,t),r);M(a.idToken,n,"internal-error");const u=Hr(a.idToken);M(u,n,"internal-error");const{sub:h}=u;return M(t.uid===h,n,"user-mismatch"),Ye._forOperation(t,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&pe(n,"user-mismatch"),a}}/**
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
 */async function mu(t,e,r=!1){if(ue(t.app))return Promise.reject(Re(t));const n="signIn",i=await ws(t,n,e),a=await Ye._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(a.user),a}function _u(t,e,r,n){return De(t).onIdTokenChanged(e,r,n)}function yu(t,e,r){return De(t).beforeAuthStateChanged(e,r)}function wu(t){return De(t).signOut()}const Vt="__sak";/**
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
 */class vs{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Vt,"1"),this.storage.removeItem(Vt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vu=1e3,bu=10;class bs extends vs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ps(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((u,h,d)=>{this.notifyListeners(u,d)});return}const n=e.key;r?this.detachListener():this.stopPolling();const i=()=>{const u=this.storage.getItem(n);!r&&this.localCache[n]===u||this.notifyListeners(n,u)},a=this.storage.getItem(n);Zc()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bu):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},vu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}bs.type="LOCAL";const Au=bs;/**
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
 */class As extends vs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}As.type="SESSION";const Is=As;/**
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
 */function Iu(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Jt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new Jt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:a}=r.data,u=this.handlersMap[i];if(!u?.size)return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const h=Array.from(u).map(async g=>g(r.origin,a)),d=await Iu(h);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:d})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jt.receivers=[];/**
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
 */function zr(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class Eu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,u;return new Promise((h,d)=>{const g=zr("",20);i.port1.start();const w=setTimeout(()=>{d(new Error("unsupported_event"))},n);u={messageChannel:i,onMessage(p){const T=p;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(w),a=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(T.data.response);break;default:clearTimeout(w),clearTimeout(a),d(new Error("invalid_response"));break}}},this.handlers.add(u),i.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:r},[i.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function ae(){return window}function Tu(t){ae().location.href=t}/**
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
 */function Es(){return typeof ae().WorkerGlobalScope<"u"&&typeof ae().importScripts=="function"}async function Su(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xu(){return navigator?.serviceWorker?.controller||null}function ku(){return Es()?self:null}/**
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
 */const Ts="firebaseLocalStorageDb",Cu=1,Wt="firebaseLocalStorage",Ss="fbase_key";class Et{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Yt(t,e){return t.transaction([Wt],e?"readwrite":"readonly").objectStore(Wt)}function Pu(){const t=indexedDB.deleteDatabase(Ts);return new Et(t).toPromise()}function Tr(){const t=indexedDB.open(Ts,Cu);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(Wt,{keyPath:Ss})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Wt)?e(n):(n.close(),await Pu(),e(await Tr()))})})}async function zn(t,e,r){const n=Yt(t,!0).put({[Ss]:e,value:r});return new Et(n).toPromise()}async function Ru(t,e){const r=Yt(t,!1).get(e),n=await new Et(r).toPromise();return n===void 0?null:n.value}function Gn(t,e){const r=Yt(t,!0).delete(e);return new Et(r).toPromise()}const Ou=800,Nu=3;class xs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tr(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>Nu)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Es()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jt._getInstance(ku()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Su(),!this.activeServiceWorker)return;this.sender=new Eu(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);!e||e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tr();return await zn(e,Vt,"1"),await Gn(e,Vt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>zn(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>Ru(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gn(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Yt(i,!1).getAll();return new Et(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ou)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xs.type="LOCAL";const Du=xs;new At(3e4,6e4);/**
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
 */function Mu(t,e){return e?de(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gr extends _s{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return We(e,this._buildIdpRequest())}_linkToIdToken(e,r){return We(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return We(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Lu(t){return mu(t.auth,new Gr(t),t.bypassAuthState)}function Bu(t){const{auth:e,user:r}=t;return M(r,e,"internal-error"),gu(r,new Gr(t),t.bypassAuthState)}async function Uu(t){const{auth:e,user:r}=t;return M(r,e,"internal-error"),pu(r,new Gr(t),t.bypassAuthState)}/**
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
 */class ks{constructor(e,r,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:a,error:u,type:h}=e;if(u){this.reject(u);return}const d={auth:this.auth,requestUri:r,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(d))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lu;case"linkViaPopup":case"linkViaRedirect":return Uu;case"reauthViaPopup":case"reauthViaRedirect":return Bu;default:pe(this.auth,"internal-error")}}resolve(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Fu=new At(2e3,1e4);class Fe extends ks{constructor(e,r,n,i,a){super(e,r,i,a),this.provider=n,this.authWindow=null,this.pollId=null,Fe.currentPopupAction&&Fe.currentPopupAction.cancel(),Fe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){ge(this.filter.length===1,"Popup operations only handle one event");const e=zr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fe.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(oe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fu.get())};e()}}Fe.currentPopupAction=null;/**
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
 */const $u="pendingRedirect",Rt=new Map;class Hu extends ks{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=Rt.get(this.auth._key());if(!e){try{const n=await ju(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}Rt.set(this.auth._key(),e)}return this.bypassAuthState||Rt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ju(t,e){const r=zu(e),n=Wu(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function Vu(t,e){Rt.set(t._key(),e)}function Wu(t){return de(t._redirectPersistence)}function zu(t){return Pt($u,t.config.apiKey,t.name)}async function Gu(t,e,r=!1){if(ue(t.app))return Promise.reject(Re(t));const n=Vr(t),i=Mu(n,e),u=await new Hu(n,i,r).execute();return u&&!r&&(delete u.user._redirectEventId,await n._persistUserIfCurrent(u.user),await n._setRedirectUser(null,e)),u}/**
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
 */const qu=10*60*1e3;class Ku{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ju(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){if(e.error&&!Cs(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";r.onError(oe(this.auth,n))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qu&&this.cachedEventUids.clear(),this.cachedEventUids.has(qn(e))}saveEventToCache(e){this.cachedEventUids.add(qn(e)),this.lastProcessedEventTime=Date.now()}}function qn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cs({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Ju(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cs(t);default:return!1}}/**
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
 */async function Yu(t,e={}){return tt(t,"GET","/v1/projects",e)}/**
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
 */const Xu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zu=/^https?/;async function Qu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yu(t);for(const r of e)try{if(el(r))return}catch{}pe(t,"unauthorized-domain")}function el(t){const e=Ir(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const u=new URL(t);return u.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&u.hostname===n}if(!Zu.test(r))return!1;if(Xu.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const tl=new At(3e4,6e4);function Kn(){const t=ae().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function rl(t){return new Promise((e,r)=>{function n(){Kn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kn(),r(oe(t,"network-request-failed"))},timeout:tl.get()})}if(ae().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ae().gapi?.load)n();else{const i=au("iframefcb");return ae()[i]=()=>{gapi.load?n():r(oe(t,"network-request-failed"))},su(`${ou()}?onload=${i}`).catch(a=>r(a))}}).catch(e=>{throw Ot=null,e})}let Ot=null;function nl(t){return Ot=Ot||rl(t),Ot}/**
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
 */const il=new At(5e3,15e3),sl="__/auth/iframe",ol="emulator/auth/iframe",al={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ul(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Fr(e,ol):`https://${t.config.authDomain}/${sl}`,n={apiKey:e.apiKey,appName:t.name,v:bt},i=cl.get(t.config.apiHost);i&&(n.eid=i);const a=t._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${vt(n).slice(1)}`}async function ll(t){const e=await nl(t),r=ae().gapi;return M(r,t,"internal-error"),e.open({where:document.body,url:ul(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:al,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const u=oe(t,"network-request-failed"),h=ae().setTimeout(()=>{a(u)},il.get());function d(){ae().clearTimeout(h),i(n)}n.ping(d).then(d,()=>{a(u)})}))}/**
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
 */const hl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dl=500,fl=600,pl="_blank",gl="http://localhost";class Jn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ml(t,e,r,n=dl,i=fl){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),u=Math.max((window.screen.availWidth-n)/2,0).toString();let h="";const d={...hl,width:n.toString(),height:i.toString(),top:a,left:u},g=ee().toLowerCase();r&&(h=us(g)?pl:r),as(g)&&(e=e||gl,d.scrollbars="yes");const w=Object.entries(d).reduce((T,[A,R])=>`${T}${A}=${R},`,"");if(Xc(g)&&h!=="_self")return _l(e||"",h),new Jn(null);const p=window.open(e||"",h,w);M(p,t,"popup-blocked");try{p.focus()}catch{}return new Jn(p)}function _l(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const yl="__/auth/handler",wl="emulator/auth/handler",vl=encodeURIComponent("fac");async function Yn(t,e,r,n,i,a){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:bt,eventId:i};if(e instanceof ys){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",ya(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,p]of Object.entries(a||{}))u[w]=p}if(e instanceof It){const w=e.getScopes().filter(p=>p!=="");w.length>0&&(u.scopes=w.join(","))}t.tenantId&&(u.tid=t.tenantId);const h=u;for(const w of Object.keys(h))h[w]===void 0&&delete h[w];const d=await t._getAppCheckToken(),g=d?`#${vl}=${encodeURIComponent(d)}`:"";return`${bl(t)}?${vt(h).slice(1)}${g}`}function bl({config:t}){return t.emulator?Fr(t,wl):`https://${t.authDomain}/${yl}`}/**
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
 */const ur="webStorageSupport";class Al{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Is,this._completeRedirectFn=Gu,this._overrideRedirectResult=Vu}async _openPopup(e,r,n,i){ge(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await Yn(e,r,n,Ir(),i);return ml(e,a,zr())}async _openRedirect(e,r,n,i){await this._originValidation(e);const a=await Yn(e,r,n,Ir(),i);return Tu(a),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:a}=this.eventManagers[r];return i?Promise.resolve(i):(ge(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await ll(e),n=new Ku(e);return r.register("authEvent",i=>(M(i?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(ur,{type:ur},i=>{const a=i?.[0]?.[ur];a!==void 0&&r(!!a),pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Qu(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return ps()||cs()||jr()}}const Il=Al;var Xn="@firebase/auth",Zn="1.12.2";/**
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
 */class El{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);!r||(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Tl(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sl(t){pt(new Je("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=n.options;M(u&&!u.includes(":"),"invalid-api-key",{appName:n.name});const d={apiKey:u,authDomain:h,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gs(t)},g=new nu(n,i,a,d);return uu(g,r),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),pt(new Je("auth-internal",e=>{const r=Vr(e.getProvider("auth").getImmediate());return(n=>new El(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(Xn,Zn,Tl(t)),He(Xn,Zn,"esm2020")}/**
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
 */const xl=5*60,kl=Gi("authIdTokenMaxAge")||xl;let Qn=null;const Cl=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>kl)return;const i=r?.token;Qn!==i&&(Qn=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ih(t=Ac()){const e=Yi(t,"auth");if(e.isInitialized())return e.getImmediate();const r=cu(t,{popupRedirectResolver:Il,persistence:[Du,Au,Is]}),n=Gi("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(n,location.origin);if(location.origin===a.origin){const u=Cl(a.toString());yu(r,u,()=>u(r.currentUser)),_u(r,h=>u(h))}}const i=oa("auth");return i&&lu(r,`http://${i}`),r}function Pl(){return document.getElementsByTagName("head")?.[0]??document}iu({loadJS(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const a=oe("internal-error");a.customData=i,r(a)},n.type="text/javascript",n.charset="UTF-8",Pl().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sl("Browser");const qr=void 0,Kr="oauth-token",Pe=yt(null),Rl=yt(!1);let Ol;function Eh(){return Ol??=Jo(Kr).then(t=>{t&&(Pe.value=JSON.parse(t)),Rl.value=!0})}function Nl(){Pe.value=null,Fi(Kr,void 0)}const Dl=12e4,ei=2e3,Be=yt(null);let st;async function Ml(t,e,r){return await Ll(t,e,r).then(n=>Bl(t,n))}async function Ll(t,e,r){if(Be.value&&st)return console.debug("Already authenticating, triggering callback again"),e(Be.value.state),st;const n=await Xe(t+"/flow",{method:"POST"});if(!n.ok)throw new Error(await n.text());Be.value=await n.json(),e(Be.value.state);let i,a;return st=new Promise((u,h)=>{let d=!1;const g=()=>{d=!0,clearTimeout(a),clearTimeout(i)};if(r?.aborted)return g(),h("login canceled");i=setTimeout(()=>{g(),h("login timeout")},Dl);const w=async()=>{let p;try{p=await Ul(t,Be.value.id)}catch(T){console.debug("login poll failed, retrying",T)}if(!d){if(p)return g(),u(p);a=setTimeout(w,ei)}};a=setTimeout(w,ei),r?.addEventListener("abort",()=>{g(),h("login canceled")})}).catch(u=>{throw console.error(u),u.message&&Yo(u.message,{error:!0}),u}).finally(()=>{Be.value=null,st=void 0,clearTimeout(a),clearTimeout(i)}),st}async function Ps(t){return await Fi(Kr,JSON.stringify(t)),Pe.value=t}const Bl=async(t,e)=>{const r=await Xe(t+"/token",{headers:{...qr,"Content-Type":"application/json"},method:"POST",tracking:"error",body:JSON.stringify(e)});if(r.ok)return await r.json();throw new Error(await r.text())},Ul=async(t,e)=>{console.debug("fetch auth result");const r=await Xe(t+"/flow/"+e,{headers:qr,tracking:"error"});switch(r.status){case 204:return;case 200:return await r.json();default:throw new Error(await r.text())}};async function Th({auth:t,authURL:e}){if(!Pe.value)return;const{refresh_token:r,expires_in:n,created_at:i}=Pe.value,a=Xo();if(i+n<a){const u=await Xe(e+"/refresh",{headers:qr,method:"POST",body:JSON.stringify({refresh_token:r})});if(u.ok){const h=await u.json(),d={...Pe.value,...h,created_at:a};return Ps(d)}else{Dt.exception("getValidToken:refresh",void 0,await u.text()),t&&await wu(t).catch(console.error),Nl();return}}return Pe.value}const Fl=6e5,$l=2e3;async function Hl(t,e){const r=new Headers(e?.headers);r.set("prefer","respond-async");const n=await Xe(t,{...e,headers:r}).catch(i=>new Response(i?.message||"Request failed",{status:500}));return n.status===202&&!n.headers.get("location")?new Response("Missing response location",{status:502}):n}async function jl(t,e){if(t.status===202){const r=t.headers.get("location");if(r)return Vl(r,e)}return t}async function Vl(t,e){const r=e?.pollTimeout??Fl,n=e?.pollInterval??(()=>$l),i=Date.now()+r;console.debug("polling started",{url:t,timeout:r,deadline:i});for(let a=0;;a++){await new Promise(h=>setTimeout(h,n(a)));const u=i-Date.now();if(u<=0)return new Response("Timeout",{status:504});try{const h=AbortSignal.timeout(u);if((await fetch(t,{method:"HEAD",signal:h})).status===200){const g=await Xe(t,{signal:h});if(g.headers.get("content-type")?.includes("application/problem+json")){const{status:p=500}=await g.clone().json();return new Response(g.body,{status:p,headers:g.headers})}return g}}catch(h){if(h?.name==="TimeoutError")return new Response("Timeout",{status:504});console.debug("polling attempt",a+1,"error:",h?.message)}}}const ti=()=>{const t=globalThis.location?.hostname;return t==="localhost"||/^127(?:\.\d{1,3}){3}$/.test(t??"")?t:"localhost"},Rs=!!{}.STAGING||!1,Wl=Rs?"https://us-central1-dev-shared-services.cloudfunctions.net/api":"https://api.divriots.com",zl=Rs?"https://dev-divriots-f6c83.web.app":"https://divriots.com",Sh=function(t,e,r,n,i){const a=async(u,h)=>{if(h.body&&(h.method==="POST"||h.method==="PUT")&&(Rr(h.body)||0)>32*Math.pow(2,20))throw new Error("Payload is too large");const d=new Headers(h.headers),g=(await r)?.id_token;g&&(d.set("authorization",`Bearer ${g}`),n&&d.set("x-drc-figma-uid",n),h.headers=d);const w=await Hl(`${t}/${u}`,h).then(T=>jl(T,i?.pollOpts)).catch(()=>{throw new Error("Unexpected error. Please contact us for support.")});if(w.ok)return w;const p=await w.clone().json().then(T=>T.message||T.error||JSON.stringify(T)).catch(()=>w.text());throw new Error(p)};return{get:u=>a(`${e}/${u}`,{method:"GET"}).then(ot),delete:u=>a(`${e}/${u}`,{method:"DELETE"}),list:()=>a(e,{method:"GET"}).then(ot),put:(u,h)=>a(`${e}/${u}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then(ot),post:u=>a(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}).then(ot),patch:u=>a(e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}).then(ot)}};async function ot(t){if(!t.headers.get("Content-Type")?.toLowerCase().includes("application/json"))return t.text();const r=await t.json(),n=t.headers.get("X-Credits-Consumed")||void 0,i=t.headers.get("X-Images-Generated")||void 0;return Object.prototype.toString.call(r)==="[object Object]"?{...r,_creditsConsumed:n,_imagesGenerated:i}:r}var Gl="firebase",ql="12.11.0";/**
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
 */He(Gl,ql,"app");function Kl(t){const e=globalThis.chrome;e?.tabs?.create?e.tabs.create({url:t}):window.self!==window.top?window.open(t,"_blank","noopener,noreferrer"):window.location.href=t}async function xh(t){await Ml(`${Wl}/oauth`,e=>{const r=new URL("/login",zl);r.searchParams.set("state",e),t&&r.searchParams.set("redirect",t),Kl(r.toString())}).then(Ps)}const kh={}.STAGING?{projectId:"dev-storytodesign",storageBucket:"dev-storytodesign.appspot.com",apiKey:"AIzaSyBWv_ip8ye3EEmzT1cZ1sqhV1rSoA9LS48",authDomain:"dev-storytodesign.firebaseapp.com",messagingSenderId:"568452031036"}:{apiKey:"AIzaSyAYhTW2QNjar9gR2wslR0V6Yugfh7xia8c",authDomain:"prd-storytodesign.firebaseapp.com",messagingSenderId:"394848236605",projectId:"prd-storytodesign",storageBucket:"prd-storytodesign.appspot.com"},Sr={api:"https://h.to.design",concurrent:"https://hc.to.design"},Ch={[Sr.api]:"https://h2d.divriots.com",[Sr.concurrent]:"https://h2d.divriots.com"},Os=!{}.STAGING,Jl=!Os&&{}.STAGING,ri=Os?Sr:Jl?{api:"https://us-central1-dev-storytodesign.cloudfunctions.net/api2",concurrent:"https://us-central1-dev-storytodesign.cloudfunctions.net/apiConcurrent"}:{api:`http://${ti()}:5101/dev-storytodesign/us-central1/api2`,concurrent:`http://${ti()}:5101/dev-storytodesign/us-central1/apiConcurrent`},Ph=t=>(t==="/html"||t==="/page"||t==="/make"?ri.api:ri.concurrent)+t,Yl=typeof navigator<"u"&&/Mac|iPhone|iPod|iPad/i.test(navigator.userAgent),lr=[{action:"figma",title:"Send to Figma plugin",description:'Your capture will be available in the "Extension" tab of the Figma plugin.',buttonLabel:"Send to Figma",toolbarLabel:"Send to Figma",verb:"Send",color:"#13a546",iconSvg:'<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 32"><g><path d="M5.3,32c3,0,5.4-2.4,5.4-5.3v-5.4H5.3c-3,0-5.3,2.4-5.3,5.4S2.3,32,5.3,32z" fill="#FFFFFF"/><path d="M0,16c0-3,2.4-5.3,5.3-5.3h5.4v10.6H5.3C2.3,21.3,0,19,0,16z" fill="#CCCCCC"/><path d="M0,5.3C0,2.3,2.4,0,5.3,0h5.4v10.7H5.3C2.3,10.7,0,8.3,0,5.3z" fill="#BBBBBB"/><path d="M10.7,0H16c3,0,5.4,2.4,5.4,5.3S19,10.7,16,10.7h-5.3V0z" fill="#EEEEEE"/><path d="M21.3,16c0,2.9-2.4,5.3-5.3,5.3c-2.9,0-5.3-2.4-5.3-5.3c0,0,0,0,0,0c0-2.9,2.4-5.3,5.3-5.3 C18.9,10.7,21.3,13.1,21.3,16z" fill="#FFFFFF"/></g></svg>',requiresLogin:!0,auto:{available:!0},pendingMessage:"Sending to Figma plugin\u2026",successMessage:"Capture sent to Figma plugin"},{action:"h2d",title:"Download .h2d file",description:"Drag-and-drop the .h2d file into the Figma plugin for maximum privacy.",buttonLabel:"Download .h2d",toolbarLabel:"Download .h2d",verb:"Download",color:"#df260e",iconSvg:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',requiresLogin:!1,auto:{available:!0},pendingMessage:"Preparing download\u2026",successMessage:"Download started"},{action:"make",title:"Download Figma Make project",description:"Drag-and-drop the .make file into Figma document explorer.",buttonLabel:"Download .make",toolbarLabel:"Download .make",verb:"Download",color:"#000000",iconSvg:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',requiresLogin:!0,auto:{available:!0},pendingMessage:"Preparing Figma Make project\u2026",successMessage:"Download started"},{action:"clipboard",title:"Copy to clipboard",description:`Paste (${Yl?"\u2318":"Ctrl"}+V) to your Figma canvas.`,buttonLabel:"Copy",toolbarLabel:"Copy to clipboard",verb:"Copy",color:"#0d99ff",iconSvg:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>',requiresLogin:!0,auto:{available:!1},pendingMessage:"Copying to clipboard\u2026",successMessage:"Capture copied to clipboard"}];function Rh(t){return lr.find(e=>e.action===t)??lr[lr.length-1]}async function Xl(t,e){const{promise:r,resolve:n}=fo(),i=(a,u)=>{a.byExtensionName==="html.to.design"&&(u({filename:e}),n())};chrome.downloads.onDeterminingFilename.addListener(i);try{await chrome.downloads.download({url:t,filename:e,saveAs:!1}),await Promise.race([go(3e3,{errorOnTimeout:"timed out"}),r]).catch(()=>console.error("Download listener was not called within allocated timeout"))}finally{chrome.downloads.onDeterminingFilename.removeListener(i)}}async function Oh(t,e){const r=await caches.open("h2d-downloads"),n=await r.match(t);if(!n)throw new Error("Download data not found in cache");const i=await n.blob(),a=URL.createObjectURL(i);try{await Xl(a,e)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}await r.delete(t)}export{Rl as $,mi as A,oo as B,Sh as C,ao as D,Ql as E,th as F,co as G,ro as H,Dt as I,Th as J,Wl as K,zl as L,Kt as M,Pe as N,Wo as O,lh as P,xh as Q,Kl as R,Yo as S,qt as T,Xe as U,Ph as V,Nl as W,wu as X,Ah as Y,Eh as Z,eo as _,uh as a,sh as a0,To as a1,vh as a2,lr as a3,wh as a4,go as a5,Kr as a6,Rh as a7,bh as a8,Oh as a9,j as aA,ee as aB,Te as aC,Wi as aD,vt as aE,ua as aF,oa as aG,Ac as aH,kh as aI,Ch as aJ,Ci as aK,Xl as aL,eh as aa,In as ab,Ti as ac,So as ad,ch as ae,dh as af,Ei as ag,Ai as ah,Ii as ai,_o as aj,ca as ak,ha as al,De as am,pt as an,Je as ao,He as ap,la as aq,bt as ar,ue as as,wt as at,wa as au,Yi as av,Ke as aw,Lr as ax,Aa as ay,qi as az,hh as b,oh as c,ph as d,ah as e,gh as f,Gt as g,wo as h,ih as i,bo as j,ct as k,V as l,nh as m,Zl as n,mh as o,vo as p,Ao as q,ki as r,_h as s,yh as t,yt as u,fo as v,bc as w,rh as x,gi as y,Ih as z};
