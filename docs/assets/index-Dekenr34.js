var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(ee)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=ee,D=function(){ne.postMessage(null)}}else D=function(){_(ee,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=d(),n=p(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function pe(e,t){ue++,le[ue]=e.current,e.current=t}var me=de(null),A=de(null),he=de(null),ge=de(null);function _e(e,t){switch(pe(he,t),pe(A,e),pe(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?nf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=nf(t),e=rf(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(me),pe(me,e)}function ve(){fe(me),fe(A),fe(he)}function ye(e){e.memoizedState!==null&&pe(ge,e);var t=me.current,n=rf(t,e.type);t!==n&&(pe(A,e),pe(me,n))}function be(e){A.current===e&&(fe(me),fe(A)),ge.current===e&&(fe(ge),pp._currentValue=ce)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,j=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function M(e){if(typeof j==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function et(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function tt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&it(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function it(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function at(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ot(e,t){var n=t&-t;return n=n&42?1:st(n),(n&(e.suspendedLanes|t))===0?n:0}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lt(){var e=k.p;return e===0?(e=window.event,e===void 0?32:kp(e.type)):e}function ut(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var dt=Math.random().toString(36).slice(2),ft=`__reactFiber$`+dt,pt=`__reactProps$`+dt,mt=`__reactContainer$`+dt,ht=`__reactEvents$`+dt,gt=`__reactListeners$`+dt,_t=`__reactHandles$`+dt,vt=`__reactResources$`+dt,yt=`__reactMarker$`+dt;function bt(e){delete e[ft],delete e[pt],delete e[ht],delete e[gt],delete e[_t]}function xt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ef(e);e!==null;){if(n=e[ft])return n;e=Ef(e)}return t}e=n,n=e.parentNode}return null}function St(e){if(e=e[ft]||e[mt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ct(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function wt(e){var t=e[vt];return t||=e[vt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Tt(e){e[yt]=!0}var Et=new Set,Dt={};function Ot(e,t){kt(e,t),kt(e+`Capture`,t)}function kt(e,t){for(Dt[e]=t,e=0;e<t.length;e++)Et.add(t[e])}var At=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),jt={},Mt={};function Nt(e){return Oe.call(Mt,e)?!0:Oe.call(jt,e)?!1:At.test(e)?Mt[e]=!0:(jt[e]=!0,!1)}function Pt(e,t,n){if(Nt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ft(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function It(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Lt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Rt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function zt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bt(e){if(!e._valueTracker){var t=Rt(e)?`checked`:`value`;e._valueTracker=zt(e,t,``+e[t])}}function Vt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Rt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ht(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function Wt(e){return e.replace(Ut,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Gt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Lt(t)):e.value!==``+Lt(t)&&(e.value=``+Lt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):qt(e,o,Lt(n)):qt(e,o,Lt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Lt(s):e.removeAttribute(`name`)}function Kt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Bt(e);return}n=n==null?``:``+Lt(n),t=t==null?n:``+Lt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Bt(e)}function qt(e,t,n){t===`number`&&Ht(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yt(e,t,n){if(t!=null&&(t=``+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Lt(n)}function Xt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Lt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Bt(e)}function Zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function $t(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function en(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&$t(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&$t(e,o,t[o])}function tn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var nn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),rn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function an(e){return rn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function on(){}var sn=null;function cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ln=null,un=null;function dn(e){var t=St(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Wt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[pt]||null;if(!a)throw Error(i(90));Gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Vt(r)}break a;case`textarea`:Yt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}}}var fn=!1;function pn(e,t,n){if(fn)return e(t,n);fn=!0;try{return e(t)}finally{if(fn=!1,(ln!==null||un!==null)&&(Mu(),ln&&(t=ln,e=un,un=ln=null,dn(t),e)))for(t=0;t<e.length;t++)dn(e[t])}}function mn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[pt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var hn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),gn=!1;if(hn)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){gn=!0}}),window.addEventListener(`test`,_n,_n),window.removeEventListener(`test`,_n,_n)}catch{gn=!1}var vn=null,yn=null,bn=null;function xn(){if(bn)return bn;var e,t=yn,n=t.length,r,i=`value`in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return bn=i.slice(e,1<r?1-r:void 0)}function Sn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function wn(){return!1}function Tn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Cn:wn,this.isPropagationStopped=wn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=Tn(En),On=m({},En,{view:0,detail:0}),kn=Tn(On),An,jn,Mn,Nn=m({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=Tn(Nn),Fn=Tn(m({},Nn,{dataTransfer:0})),In=Tn(m({},On,{relatedTarget:0})),Ln=Tn(m({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=Tn(m({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=Tn(m({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=Tn(m({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Sn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Sn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Sn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=Tn(m({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=Tn(m({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Jn=Tn(m({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Yn=Tn(m({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=Tn(m({},En,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=hn&&`CompositionEvent`in window,$n=null;hn&&`documentMode`in document&&($n=document.documentMode);var er=hn&&`TextEvent`in window&&!$n,tr=hn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!Qn&&ir(e,t)?(e=xn(),bn=yn=vn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){ln?un?un.push(r):un=[r]:ln=r,t=Bd(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){Md(e,0)}function hr(e){if(Vt(Ct(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(hn){var vr;if(hn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,cn(e)),pn(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ht(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ht(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=hn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Ht(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=Bd(Lr,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};hn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionrun`),Xr=Gr(`transitionstart`),Zr=Gr(`transitioncancel`),Qr=Gr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ei.push(`scrollEnd`);function ti(e,t){$r.set(e,t),Ot(t,[e])}var ni=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ri=[],ii=0,ai=0;function oi(){for(var e=ii,t=ai=ii=0;t<e;){var n=ri[t];ri[t++]=null;var r=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function si(e,t,n,r){ri[ii++]=e,ri[ii++]=t,ri[ii++]=n,ri[ii++]=r,ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ci(e,t,n,r){return si(e,t,n,r),di(e)}function li(e,t){return si(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<Cu)throw Cu=0,wu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=ip(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=mi(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=mi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=mi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,N=1,Mi=``;function Ni(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function Pi(e,t,n){ki[Ai++]=N,ki[Ai++]=Mi,ki[Ai++]=ji,ji=e;var r=N;e=Mi;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,N=1<<32-Ue(t)+i|n<<i|r,Mi=a+e}else N=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null,N=ki[--Ai],ki[Ai]=null}function Li(e,t){ki[Ai++]=N,ki[Ai++]=Mi,ki[Ai++]=ji,N=t.id,Mi=t.overflow,ji=e}var Ri=null,P=null,zi=!1,Bi=null,Vi=!1,Hi=Error(i(519));function Ui(e){throw Yi(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Hi}function Wi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ft]=e,t[pt]=r,n){case`dialog`:Nd(`cancel`,t),Nd(`close`,t);break;case`iframe`:case`object`:case`embed`:Nd(`load`,t);break;case`video`:case`audio`:for(n=0;n<Ad.length;n++)Nd(Ad[n],t);break;case`source`:Nd(`error`,t);break;case`img`:case`image`:case`link`:Nd(`error`,t),Nd(`load`,t);break;case`details`:Nd(`toggle`,t);break;case`input`:Nd(`invalid`,t),Kt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Nd(`invalid`,t);break;case`textarea`:Nd(`invalid`,t),Xt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Kd(t.textContent,n)?(r.popover!=null&&(Nd(`beforetoggle`,t),Nd(`toggle`,t)),r.onScroll!=null&&Nd(`scroll`,t),r.onScrollEnd!=null&&Nd(`scrollend`,t),r.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||Ui(e,!0)}function Gi(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:Ri=Ri.return}}function Ki(e){if(e!==Ri)return!1;if(!zi)return Gi(e),zi=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||af(e.type,e.memoizedProps)),n=!n),n&&P&&Ui(e),Gi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=Tf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=Tf(e)}else t===27?(t=P,pf(e.type)?(e=wf,wf=null,P=e):P=t):P=Ri?Cf(e.stateNode.nextSibling):null;return!0}function qi(){P=Ri=null,zi=!1}function Ji(){var e=Bi;return e!==null&&(lu===null?lu=e:lu.push.apply(lu,e),Bi=null),e}function Yi(e){Bi===null?Bi=[e]:Bi.push(e)}var Xi=de(null),Zi=null,Qi=null;function $i(e,t,n){pe(Xi,t._currentValue),t._currentValue=n}function ea(e){e._currentValue=Xi.current,fe(Xi)}function ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function na(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ta(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ta(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ra(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[pp]:e.push(pp))}a=a.return}e!==null&&na(t,e,n,r),t.flags|=262144}function ia(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){Zi=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oa(e){return ca(Zi,e)}function sa(e,t){return Zi===null&&aa(e),ca(e,t)}function ca(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(i(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var la=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ua=t.unstable_scheduleCallback,da=t.unstable_NormalPriority,fa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new la,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&ua(da,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,F=null;function va(e,t){if(ha===null){var n=ha=[];ga=0,_a=wd(),F={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ya,ya),t}function ya(){if(--ga===0&&ha!==null){F!==null&&(F.status=`fulfilled`);var e=ha;ha=null,_a=0,F=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ba(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var xa=O.S;O.S=function(e,t){fu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&va(e,t),xa!==null&&xa(e,t)};var Sa=de(null);function Ca(){var e=Sa.current;return e===null?ql.pooledCache:e}function wa(e,t){t===null?pe(Sa,Sa.current):pe(Sa,t.pool)}function Ta(){var e=Ca();return e===null?null:{parent:fa._currentValue,pool:e}}var Ea=Error(i(460)),Da=Error(i(474)),Oa=Error(i(542)),ka={then:function(){}};function Aa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e;default:if(typeof t.status==`string`)t.then(on,on);else{if(e=ql,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e}throw Na=t,Ea}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Na=e,Ea):e}}var Na=null;function Pa(){if(Na===null)throw Error(i(459));var e=Na;return Na=null,e}function Fa(e){if(e===Ea||e===Oa)throw Error(i(483))}var Ia=null,La=0;function Ra(e){var t=La;return La+=1,Ia===null&&(Ia=[]),ja(Ia,e,t)}function za(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ba(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Va(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Ma(i)===t.type)?(t=a(t,n.props),za(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),za(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=vi(t.type,t.key,t.props,null,e.mode,n),za(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case D:return t=Ma(t),f(e,t,n)}if(se(t)||ie(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ra(t),n);if(t.$$typeof===C)return f(e,sa(e,t),n);Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Ma(n),p(e,t,n,r)}if(se(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ra(n),r);if(n.$$typeof===C)return p(e,t,sa(e,n),r);Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Ma(r),m(e,t,n,r,i)}if(se(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ra(r),i);if(r.$$typeof===C)return m(e,t,n,sa(t,r),i);Ba(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),zi&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return zi&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),zi&&Ni(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),zi&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return zi&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),zi&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Ma(l)===r.type){n(e,r.sibling),c=a(r,o.props),za(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),za(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Ma(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ie(o)){if(l=ie(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ra(o),c);if(o.$$typeof===C)return b(e,r,sa(e,o),c);Ba(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{La=0;var i=b(e,t,n,r);return Ia=null,i}catch(t){if(t===Ea||t===Oa)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ha=Va(!0),Ua=Va(!1),Wa=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ka(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Kl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return si(e,r,t,n),di(e)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}function Xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Za=!1;function Qa(){if(Za){var e=F;if(e!==null)throw e}}function $a(e,t,n,r){Za=!1;var i=e.updateQueue;Wa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Yl&f)===f:(r&f)===f){f!==0&&f===_a&&(Za=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Wa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ru|=o,e.lanes=o,e.memoizedState=d}}function eo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function to(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)eo(n[e],t)}var no=de(null),ro=de(0);function io(e,t){e=tu,pe(ro,e),pe(no,t),tu=e|t.baseLanes}function ao(){pe(ro,tu),pe(no,no.current)}function oo(){tu=ro.current,fe(no),fe(ro)}var so=de(null),co=null;function lo(e){var t=e.alternate;pe(mo,mo.current&1),pe(so,e),co===null&&(t===null||no.current!==null||t.memoizedState!==null)&&(co=e)}function uo(e){pe(mo,mo.current),pe(so,e),co===null&&(co=e)}function fo(e){e.tag===22?(pe(mo,mo.current),pe(so,e),co===null&&(co=e)):po(e)}function po(){pe(mo,mo.current),pe(so,so.current)}function I(e){fe(so),co===e&&(co=null),fe(mo)}var mo=de(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||bf(n)||xf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,L=null,_o=null,vo=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function Eo(){throw Error(i(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return go=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Gs:Ks,xo=!1,a=n(r,i),xo=!1,bo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){O.H=Ws;var t=_o!==null&&_o.next!==null;if(go=0,vo=_o=L=null,yo=!1,Co=0,wo=null,t)throw Error(i(300));e===null||cc||(e=e.dependencies,e!==null&&ia(e)&&(cc=!0))}function Ao(e,t,n,r){L=e;var a=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=a)throw Error(i(301));if(a+=1,vo=_o=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=qs,o=t(n,r)}while(bo);return o}function jo(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Ro(t):t,e=e.useState()[0],(_o===null?null:_o.memoizedState)!==e&&(L.flags|=1024),t}function Mo(){var e=So!==0;return So=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}go=0,vo=_o=L=null,bo=!1,Co=So=0,wo=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vo===null?L.memoizedState=vo=e:vo=vo.next=e,vo}function Io(){if(_o===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=_o.next;var t=vo===null?L.memoizedState:vo.next;if(t!==null)vo=t,_o=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));_o=e,e={memoizedState:_o.memoizedState,baseState:_o.baseState,baseQueue:_o.baseQueue,queue:_o.queue,next:null},vo===null?L.memoizedState=vo=e:vo=vo.next=e}return vo}function Lo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=ja(wo,e,t),t=L,(vo===null?t.memoizedState:vo.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Gs:Ks),e}function zo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ro(e);if(e.$$typeof===C)return oa(e)}throw Error(i(438,String(e)))}function Bo(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Lo(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Vo(e,t){return typeof t==`function`?t(e):t}function Ho(e){return Uo(Io(),_o,e)}function Uo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(go&f)===f:(Yl&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((go&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,ru|=p;f=u.action,xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,ru|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(cc=!0,d&&(n=F,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Wo(e){var t=Io(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(cc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Go(e,t,n){var r=L,a=Io(),o=zi;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((_o||a).memoizedState,n);if(s&&(a.memoizedState=n,cc=!0),a=a.queue,gs(Jo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||vo!==null&&vo.memoizedState.tag&1){if(r.flags|=2048,ds(9,{destroy:void 0},qo.bind(null,r,a,n,t),null),ql===null)throw Error(i(349));o||go&127||Ko(r,t,n)}return n}function Ko(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=Lo(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qo(e,t,n,r){t.value=n,t.getSnapshot=r,Yo(t)&&Xo(e)}function Jo(e,t,n){return n(function(){Yo(t)&&Xo(e)})}function Yo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Xo(e){var t=li(e,2);t!==null&&Du(t,e,2)}function Zo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),xo){M(!0);try{n()}finally{M(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t}function Qo(e,t,n,r){return e.baseState=n,Uo(e,_o,typeof r==`function`?r:Vo)}function $o(e,t,n,r,a){if(Vs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,es(t,o)):(o.next=n.next,t.pending=n.next=o)}}function es(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),ts(e,t,s)}catch(n){rs(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),ts(e,t,a)}catch(n){rs(e,t,n)}}function ts(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ns(e,t,n)},function(n){return rs(e,t,n)}):ns(e,t,n)}function ns(e,t,n){t.status=`fulfilled`,t.value=n,is(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,es(e,n)))}function rs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,is(t),t=t.next;while(t!==r)}e.action=null}function is(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function as(e,t){return t}function os(e,t){if(zi){var n=ql.formState;if(n!==null){a:{var r=L;if(zi){if(P){b:{for(var i=P,a=Vi;i.nodeType!==8;){if(!a){i=null;break b}if(i=Cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=Cf(i.nextSibling),r=i.data===`F!`;break a}}Ui(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:t},n.queue=r,n=Rs.bind(null,L,r),r.dispatch=n,r=Zo(!1),a=Bs.bind(null,L,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=$o.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ss(e){return cs(Io(),_o,e)}function cs(e,t,n){if(t=Uo(e,t,as)[0],e=Ho(Vo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ro(t)}catch(e){throw e===Ea?Oa:e}else r=t;t=Io();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,ds(9,{destroy:void 0},ls.bind(null,i,n),null)),[r,a,e]}function ls(e,t){e.action=t}function us(e){var t=Io(),n=_o;if(n!==null)return cs(t,n,e);Io(),t=t.memoizedState,n=Io();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ds(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=Lo(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function fs(){return Io().memoizedState}function ps(e,t,n,r){var i=Fo();L.flags|=e,i.memoizedState=ds(1|t,{destroy:void 0},n,r===void 0?null:r)}function ms(e,t,n,r){var i=Io();r=r===void 0?null:r;var a=i.memoizedState.inst;_o!==null&&r!==null&&Do(r,_o.memoizedState.deps)?i.memoizedState=ds(t,a,n,r):(L.flags|=e,i.memoizedState=ds(1|t,a,n,r))}function hs(e,t){ps(8390656,8,e,t)}function gs(e,t){ms(2048,8,e,t)}function _s(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=Lo(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function vs(e){var t=Io().memoizedState;return _s({ref:t,nextImpl:e}),function(){if(Kl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ys(e,t){return ms(4,2,e,t)}function bs(e,t){return ms(4,4,e,t)}function xs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ss(e,t,n){n=n==null?null:n.concat([e]),ms(4,4,xs.bind(null,t,e),n)}function Cs(){}function ws(e,t){var n=Io();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ts(e,t){var n=Io();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),xo){M(!0);try{e()}finally{M(!1)}}return n.memoizedState=[r,t],r}function Es(e,t,n){return n===void 0||go&1073741824&&!(Yl&261930)?e.memoizedState=t:(e.memoizedState=n,e=Eu(),L.lanes|=e,ru|=e,n)}function Ds(e,t,n,r){return Or(n,t)?n:no.current===null?!(go&42)||go&1073741824&&!(Yl&261930)?(cc=!0,e.memoizedState=n):(e=Eu(),L.lanes|=e,ru|=e,t):(e=Es(e,n,r),Or(e,t)||(cc=!0),e)}function Os(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Bs(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?zs(e,t,ba(c,r),Tu(e)):zs(e,t,r,Tu(e))}catch(n){zs(e,t,{then:function(){},status:`rejected`,reason:n},Tu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function ks(){}function As(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=js(e).queue;Os(e,a,t,ce,n===null?ks:function(){return Ms(e),n(r)})}function js(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ms(e){var t=js(e);t.next===null&&(t=e.alternate.memoizedState),zs(e,t.next.queue,{},Tu())}function Ns(){return oa(pp)}function Ps(){return Io().memoizedState}function Fs(){return Io().memoizedState}function Is(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Tu();e=qa(n);var r=Ja(t,e,n);r!==null&&(Du(r,t,n),Ya(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ls(e,t,n){var r=Tu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Vs(e)?Hs(t,n):(n=ci(e,t,n,r),n!==null&&(Du(n,e,r),Us(n,t,r)))}function Rs(e,t,n){zs(e,t,n,Tu())}function zs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vs(e))Hs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return si(e,t,i,0),ql===null&&oi(),!1}catch{}if(n=ci(e,t,i,r),n!==null)return Du(n,e,r),Us(n,t,r),!0}return!1}function Bs(e,t,n,r){if(r={lane:2,revertLane:wd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Vs(e)){if(t)throw Error(i(479))}else t=ci(e,n,r,2),t!==null&&Du(t,e,2)}function Vs(e){var t=e.alternate;return e===L||t!==null&&t===L}function Hs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Us(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}var Ws={readContext:oa,use:zo,useCallback:Eo,useContext:Eo,useEffect:Eo,useImperativeHandle:Eo,useLayoutEffect:Eo,useInsertionEffect:Eo,useMemo:Eo,useReducer:Eo,useRef:Eo,useState:Eo,useDebugValue:Eo,useDeferredValue:Eo,useTransition:Eo,useSyncExternalStore:Eo,useId:Eo,useHostTransitionStatus:Eo,useFormState:Eo,useActionState:Eo,useOptimistic:Eo,useMemoCache:Eo,useCacheRefresh:Eo};Ws.useEffectEvent=Eo;var Gs={readContext:oa,use:zo,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:oa,useEffect:hs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ps(4194308,4,xs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ps(4194308,4,e,t)},useInsertionEffect:function(e,t){ps(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(xo){M(!0);try{e()}finally{M(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(xo){M(!0);try{n(t)}finally{M(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ls.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Zo(e);var t=e.queue,n=Rs.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cs,useDeferredValue:function(e,t){return Es(Fo(),e,t)},useTransition:function(){var e=Zo(!1);return e=Os.bind(null,L,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=Fo();if(zi){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),ql===null)throw Error(i(349));Yl&127||Ko(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,hs(Jo.bind(null,r,o,e),[e]),r.flags|=2048,ds(9,{destroy:void 0},qo.bind(null,r,o,n,t),null),n},useId:function(){var e=Fo(),t=ql.identifierPrefix;if(zi){var n=Mi,r=N;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ns,useFormState:os,useActionState:os,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Bs.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bo,useCacheRefresh:function(){return Fo().memoizedState=Is.bind(null,L)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(Kl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ks={readContext:oa,use:zo,useCallback:ws,useContext:oa,useEffect:gs,useImperativeHandle:Ss,useInsertionEffect:ys,useLayoutEffect:bs,useMemo:Ts,useReducer:Ho,useRef:fs,useState:function(){return Ho(Vo)},useDebugValue:Cs,useDeferredValue:function(e,t){return Ds(Io(),_o.memoizedState,e,t)},useTransition:function(){var e=Ho(Vo)[0],t=Io().memoizedState;return[typeof e==`boolean`?e:Ro(e),t]},useSyncExternalStore:Go,useId:Ps,useHostTransitionStatus:Ns,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){return Qo(Io(),_o,e,t)},useMemoCache:Bo,useCacheRefresh:Fs};Ks.useEffectEvent=vs;var qs={readContext:oa,use:zo,useCallback:ws,useContext:oa,useEffect:gs,useImperativeHandle:Ss,useInsertionEffect:ys,useLayoutEffect:bs,useMemo:Ts,useReducer:Wo,useRef:fs,useState:function(){return Wo(Vo)},useDebugValue:Cs,useDeferredValue:function(e,t){var n=Io();return _o===null?Es(n,e,t):Ds(n,_o.memoizedState,e,t)},useTransition:function(){var e=Wo(Vo)[0],t=Io().memoizedState;return[typeof e==`boolean`?e:Ro(e),t]},useSyncExternalStore:Go,useId:Ps,useHostTransitionStatus:Ns,useFormState:us,useActionState:us,useOptimistic:function(e,t){var n=Io();return _o===null?(n.baseState=e,[e,n.queue.dispatch]):Qo(n,_o,e,t)},useMemoCache:Bo,useCacheRefresh:Fs};qs.useEffectEvent=vs;function Js(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ys={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Tu(),i=qa(r);i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(Du(t,e,r),Ya(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Tu(),i=qa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(Du(t,e,r),Ya(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Tu(),r=qa(n);r.tag=2,t!=null&&(r.callback=t),t=Ja(e,r,n),t!==null&&(Du(t,e,n),Ya(t,e,n))}};function R(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ys.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ni(e)}function $s(e){console.error(e)}function ec(e){ni(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=qa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(hu===null?hu=new Set([this]):hu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ra(t,n,a,!0),n=so.current,n!==null){switch(n.tag){case 31:case 13:return co===null?zu():n.alternate===null&&nu===0&&(nu=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),id(e,r,a)),!1;case 22:return n.flags|=65536,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),id(e,r,a)),!1}throw Error(i(435,n.tag))}return id(e,r,a),zu(),!1}if(zi)return t=so.current,t===null?(r!==Hi&&(t=Error(i(423),{cause:r}),Yi(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=rc(e.stateNode,r,a),Xa(e,a),nu!==4&&(nu=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Hi&&(e=Error(i(422),{cause:r}),Yi(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),cu===null?cu=[o]:cu.push(o),nu!==4&&(nu=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=rc(n.stateNode,r,e),Xa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(hu===null||!hu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ic(a),ac(a,e,n,r),Xa(n,a),!1}n=n.return}while(n!==null);return!1}var sc=Error(i(461)),cc=!1;function lc(e,t,n,r){t.child=e===null?Ua(t,null,n,r):Ha(t,e.child,n,r)}function uc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return aa(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!cc?(No(e,t,i),Pc(e,t,i)):(zi&&s&&Fi(t),t.flags|=1,lc(e,t,r,i),t.child)}function dc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,fc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Fc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return Pc(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function fc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref)if(cc=!1,t.pendingProps=r=a,Fc(e,i))e.flags&131072&&(cc=!0);else return t.lanes=e.lanes,Pc(e,t,i)}return bc(e,t,n,r,i)}function pc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return hc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wa(t,a===null?null:a.cachePool),a===null?ao():io(t,a),fo(t);else return r=t.lanes=536870912,hc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&wa(t,null),ao(),po(t)):(wa(t,a.cachePool),io(t,a),po(t),t.memoizedState=null);return lc(e,t,i,n),t.child}function mc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hc(e,t,n,r,i){var a=Ca();return a=a===null?null:{parent:fa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&wa(t,null),ao(),fo(t),e!==null&&ra(e,t,r,!0),t.childLanes=i,null}function gc(e,t){return t=kc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function _c(e,t,n){return Ha(t,e.child,null,n),e=gc(t,t.pendingProps),e.flags|=2,I(t),t.memoizedState=null,e}function vc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(zi){if(r.mode===`hidden`)return e=gc(t,r),t.lanes=536870912,mc(null,e);if(uo(t),(e=P)?(e=yf(e,Vi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:N,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Ui(t);return t.lanes=536870912,null}return gc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(uo(t),a)if(t.flags&256)t.flags&=-257,t=_c(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(cc||ra(e,t,n,!1),a=(n&e.childLanes)!==0,cc||a){if(r=ql,r!==null&&(s=ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,li(e,s),Du(r,e,s),sc;zu(),t=_c(e,t,n)}else e=o.treeContext,P=Cf(s.nextSibling),Ri=t,zi=!0,Bi=null,Vi=!1,e!==null&&Li(t,e),t=gc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function yc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function bc(e,t,n,r,i){return aa(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!cc?(No(e,t,i),Pc(e,t,i)):(zi&&r&&Fi(t),t.flags|=1,lc(e,t,n,i),t.child)}function xc(e,t,n,r,i,a){return aa(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!cc?(No(e,t,a),Pc(e,t,a)):(zi&&r&&Fi(t),t.flags|=1,lc(e,t,n,a),t.child)}function Sc(e,t,n,r,i){if(aa(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=oa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ys,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ga(t),o=n.contextType,a.context=typeof o==`object`&&o?oa(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Js(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ys.enqueueReplaceState(a,a.state,null),$a(t,r,a,i),Qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=oa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),Wa=!1;var f=t.memoizedState;a.state=f,$a(t,r,a,i),Qa(),l=t.memoizedState,s||f!==l||Wa?(typeof d==`function`&&(Js(t,n,d,r),l=t.memoizedState),(c=Wa||R(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ka(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=oa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),Wa=!1,f=t.memoizedState,a.state=f,$a(t,r,a,i),Qa();var p=t.memoizedState;o!==d||f!==p||Wa||e!==null&&e.dependencies!==null&&ia(e.dependencies)?(typeof s==`function`&&(Js(t,n,s,r),p=t.memoizedState),(u=Wa||R(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ia(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,yc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,n,i)):lc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Pc(e,t,i),e}function Cc(e,t,n,r){return qi(),t.flags|=256,lc(e,t,n,r),t.child}var wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tc(e){return{baseLanes:e,cachePool:Ta()}}function Ec(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ou),e}function Dc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(mo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(zi){if(a?lo(t):po(t),(e=P)?(e=yf(e,Vi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:N,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Ui(t);return xf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(po(t),a=t.mode,c=kc({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Tc(n),r.childLanes=Ec(e,s,n),t.memoizedState=wc,mc(null,r)):(lo(t),Oc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(lo(t),t.flags&=-257,t=Ac(e,t,n)):t.memoizedState===null?(po(t),c=r.fallback,a=t.mode,r=kc({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ha(t,e.child,null,n),r=t.child,r.memoizedState=Tc(n),r.childLanes=Ec(e,s,n),t.memoizedState=wc,t=mc(null,r)):(po(t),t.child=e.child,t.flags|=128,t=null);else if(lo(t),xf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Yi({value:r,source:null,stack:null}),t=Ac(e,t,n)}else if(cc||ra(e,t,n,!1),s=(n&e.childLanes)!==0,cc||s){if(s=ql,s!==null&&(r=ot(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),Du(s,e,r),sc;bf(c)||zu(),t=Ac(e,t,n)}else bf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=Cf(c.nextSibling),Ri=t,zi=!0,Bi=null,Vi=!1,e!==null&&Li(t,e),t=Oc(t,r.children),t.flags|=4096);return t}return a?(po(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,mc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Tc(n):(a=c.cachePool,a===null?a=Ta():(l=fa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Ec(e,s,n),t.memoizedState=wc,mc(e.child,r)):(lo(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Oc(e,t){return t=kc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function kc(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Ac(e,t,n){return Ha(t,e.child,null,n),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ta(e.return,t,n)}function Mc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Nc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=mo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,pe(mo,o),lc(e,t,r,n),r=zi?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,n,t);else if(e.tag===19)jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Mc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Mc(t,!0,n,null,a,r);break;case`together`:Mc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Pc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ru|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ra(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ia(e))):!0}function Ic(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),$i(t,fa,e.memoizedState.cache),qi();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(lo(t),e=Pc(e,t,n),e===null?null:e.sibling):Dc(e,t,n):(lo(t),t.flags|=128,null);lo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ra(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Nc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(mo,mo.current),r)break;return null;case 22:return t.lanes=0,pc(e,t,n,t.pendingProps);case 24:$i(t,fa,e.memoizedState.cache)}return Pc(e,t,n)}function Lc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)cc=!0;else{if(!Fc(e,n)&&!(t.flags&128))return cc=!1,Ic(e,t,n);cc=!!(e.flags&131072)}else cc=!1,zi&&t.flags&1048576&&Pi(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=Zs(e,r),t.tag=1,t=Sc(null,t,e,r,n)):(t.tag=0,t=bc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=uc(null,t,e,r,n);break a}else if(a===ee){t.tag=14,t=dc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return bc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Zs(r,t.pendingProps),Sc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ka(e,t),$a(t,r,null,n);var s=t.memoizedState;if(r=s.cache,$i(t,fa,r),r!==o.cache&&na(t,[fa],n,!0),Qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Cc(e,t,r,n);break a}else if(r!==a){a=wi(Error(i(424)),t),Yi(a),t=Cc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=Cf(e.firstChild),Ri=t,zi=!0,Bi=null,Vi=!0,n=Ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qi(),r===a){t=Pc(e,t,n);break a}lc(e,t,r,n)}t=t.child}return t;case 26:return yc(e,t),e===null?(n=Wf(t.type,null,t.pendingProps,null))?t.memoizedState=n:zi||(n=t.type,e=t.pendingProps,r=tf(he.current).createElement(n),r[ft]=t,r[pt]=e,Yd(r,n,e),Tt(r),t.stateNode=r):t.memoizedState=Wf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&zi&&(r=t.stateNode=Df(t.type,t.pendingProps,he.current),Ri=t,Vi=!0,a=P,pf(t.type)?(wf=a,P=Cf(r.firstChild)):P=a),lc(e,t,t.pendingProps.children,n),yc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&zi&&((a=r=P)&&(r=_f(r,t.type,t.pendingProps,Vi),r===null?a=!1:(t.stateNode=r,Ri=t,P=Cf(r.firstChild),Vi=!1,a=!0)),a||Ui(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,af(a,o)?r=null:s!==null&&af(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Oo(e,t,jo,null,null,n),pp._currentValue=a),yc(e,t),lc(e,t,r,n),t.child;case 6:return e===null&&zi&&((e=n=P)&&(n=vf(n,t.pendingProps,Vi),n===null?e=!1:(t.stateNode=n,Ri=t,P=null,e=!0)),e||Ui(t)),null;case 13:return Dc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ha(t,null,r,n):lc(e,t,r,n),t.child;case 11:return uc(e,t,t.type,t.pendingProps,n);case 7:return lc(e,t,t.pendingProps,n),t.child;case 8:return lc(e,t,t.pendingProps.children,n),t.child;case 12:return lc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$i(t,t.type,r.value),lc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,aa(t),a=oa(a),r=r(a),t.flags|=1,lc(e,t,r,n),t.child;case 14:return dc(e,t,t.type,t.pendingProps,n);case 15:return fc(e,t,t.type,t.pendingProps,n);case 19:return Nc(e,t,n);case 31:return vc(e,t,n);case 22:return pc(e,t,n,t.pendingProps);case 24:return aa(t),r=oa(fa),e===null?(a=Ca(),a===null&&(a=ql,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ga(t),$i(t,fa,a)):((e.lanes&n)!==0&&(Ka(e,t),$a(t,null,null,n),Qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,$i(t,fa,r),r!==a.cache&&na(t,[fa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,fa,r))),lc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Rc(e){e.flags|=4}function zc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Iu())e.flags|=8192;else throw Na=ka,Da}else e.flags&=-16777217}function Bc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!ap(t))if(Iu())e.flags|=8192;else throw Na=ka,Da}function Vc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:et(),e.lanes|=t,su|=t)}function Hc(e,t){if(!zi)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Uc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Uc(t),null;case 1:return Uc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ea(fa),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?Rc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ji())),Uc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Rc(t),o===null?(Uc(t),zc(t,a,null,r,n)):(Uc(t),Bc(t,o))):o?o===e.memoizedState?(Uc(t),t.flags&=-16777217):(Rc(t),Uc(t),Bc(t,o)):(e=e.memoizedProps,e!==r&&Rc(t),Uc(t),zc(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Rc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Uc(t),null}e=me.current,Ki(t)?Wi(t,e):(e=Df(a,r,n),t.stateNode=e,Rc(t))}return Uc(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Rc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Uc(t),null}if(o=me.current,Ki(t))Wi(t,o);else{var s=tf(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ft]=t,o[pt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Yd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Rc(t)}}return Uc(t),zc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Rc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Kd(e.nodeValue,n)),e||Ui(t,!0)}else e=tf(e).createTextNode(r),e[ft]=t,t.stateNode=e}return Uc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ki(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ft]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Uc(t),e=!1}else n=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(I(t),t):(I(t),null);if(t.flags&128)throw Error(i(558))}return Uc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ft]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Uc(t),a=!1}else a=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(I(t),t):(I(t),null)}return I(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vc(t,t.updateQueue),Uc(t),null);case 4:return ve(),e===null&&Id(t.stateNode.containerInfo),Uc(t),null;case 10:return ea(t.type),Uc(t),null;case 19:if(fe(mo),r=t.memoizedState,r===null)return Uc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Hc(r,!1);else{if(nu!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,Hc(r,!1),e=o.updateQueue,t.updateQueue=e,Vc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return pe(mo,mo.current&1|2),zi&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>pu&&(t.flags|=128,a=!0,Hc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Vc(t,e),Hc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!zi)return Uc(t),null}else 2*Ne()-r.renderingStartTime>pu&&n!==536870912&&(t.flags|=128,a=!0,Hc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Uc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=mo.current,pe(mo,a?n&1|2:n&1),zi&&Ni(t,r.treeForkCount),e);case 22:case 23:return I(t),oo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Uc(t),t.subtreeFlags&6&&(t.flags|=8192)):Uc(t),n=t.updateQueue,n!==null&&Vc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(Sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ea(fa),Uc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Gc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ea(fa),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(I(t),t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(I(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(mo),null;case 4:return ve(),null;case 10:return ea(t.type),null;case 22:case 23:return I(t),oo(),e!==null&&fe(Sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ea(fa),null;case 25:return null;default:return null}}function Kc(e,t){switch(Ii(t),t.tag){case 3:ea(fa),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&I(t);break;case 13:I(t);break;case 19:fe(mo);break;case 10:ea(t.type);break;case 22:case 23:I(t),oo(),e!==null&&fe(Sa);break;case 24:ea(fa)}}function qc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){rd(t,t.return,e)}}function Jc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){rd(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){rd(t,t.return,e)}}function Yc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{to(t,n)}catch(t){rd(e,e.return,t)}}}function Xc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){rd(e,t,n)}}function Zc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){rd(e,t,n)}}function Qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){rd(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){rd(e,t,n)}else n.current=null}function $c(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){rd(e,e.return,t)}}function el(e,t,n){try{var r=e.stateNode;Xd(r,e.type,n,t),r[pt]=t}catch(t){rd(e,e.return,t)}}function tl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pf(e.type)||e.tag===4}function nl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||tl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on));else if(r!==4&&(r===27&&pf(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}function il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&pf(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}function al(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Yd(t,r,n),t[ft]=e,t[pt]=n}catch(t){rd(e,e.return,t)}}var ol=!1,sl=!1,cl=!1,ll=typeof WeakSet==`function`?WeakSet:Set,ul=null;function dl(e,t){if(e=e.containerInfo,$d=Sp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(ef={focusedElem:e,selectionRange:n},Sp=!1,ul=t;ul!==null;)if(t=ul,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ul=e;else for(;ul!==null;){switch(t=ul,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Zs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){rd(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)gf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:gf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ul=e;break}ul=t.return}}function fl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Dl(e,n),r&4&&qc(5,n);break;case 1:if(Dl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){rd(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){rd(n,n.return,e)}}r&64&&Yc(n),r&512&&Zc(n,n.return);break;case 3:if(Dl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{to(e,t)}catch(e){rd(n,n.return,e)}}break;case 27:t===null&&r&4&&al(n);case 26:case 5:Dl(e,n),t===null&&r&4&&$c(n),r&512&&Zc(n,n.return);break;case 12:Dl(e,n);break;case 31:Dl(e,n),r&4&&vl(e,n);break;case 13:Dl(e,n),r&4&&yl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sd.bind(null,n),Sf(e,n))));break;case 22:if(r=n.memoizedState!==null||ol,!r){t=t!==null&&t.memoizedState!==null||sl,i=ol;var a=sl;ol=r,(sl=t)&&!a?kl(e,n,(n.subtreeFlags&8772)!=0):Dl(e,n),ol=i,sl=a}break;case 30:break;default:Dl(e,n)}}function pl(e){var t=e.alternate;t!==null&&(e.alternate=null,pl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ml=null,hl=!1;function gl(e,t,n){for(n=n.child;n!==null;)_l(e,t,n),n=n.sibling}function _l(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:sl||Qc(n,t),gl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:sl||Qc(n,t);var r=ml,i=hl;pf(n.type)&&(ml=n.stateNode,hl=!1),gl(e,t,n),Of(n.stateNode),ml=r,hl=i;break;case 5:sl||Qc(n,t);case 6:if(r=ml,i=hl,ml=null,gl(e,t,n),ml=r,hl=i,ml!==null)if(hl)try{(ml.nodeType===9?ml.body:ml.nodeName===`HTML`?ml.ownerDocument.body:ml).removeChild(n.stateNode)}catch(e){rd(n,t,e)}else try{ml.removeChild(n.stateNode)}catch(e){rd(n,t,e)}break;case 18:ml!==null&&(hl?(e=ml,mf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Jp(e)):mf(ml,n.stateNode));break;case 4:r=ml,i=hl,ml=n.stateNode.containerInfo,hl=!0,gl(e,t,n),ml=r,hl=i;break;case 0:case 11:case 14:case 15:Jc(2,n,t),sl||Jc(4,n,t),gl(e,t,n);break;case 1:sl||(Qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Xc(n,t,r)),gl(e,t,n);break;case 21:gl(e,t,n);break;case 22:sl=(r=sl)||n.memoizedState!==null,gl(e,t,n),sl=r;break;default:gl(e,t,n)}}function vl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jp(e)}catch(e){rd(t,t.return,e)}}}function yl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jp(e)}catch(e){rd(t,t.return,e)}}function bl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ll),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ll),t;default:throw Error(i(435,e.tag))}}function xl(e,t){var n=bl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=cd.bind(null,e,t);t.then(r,r)}})}function Sl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(pf(c.type)){ml=c.stateNode,hl=!1;break a}break;case 5:ml=c.stateNode,hl=!1;break a;case 3:case 4:ml=c.stateNode.containerInfo,hl=!0;break a}c=c.return}if(ml===null)throw Error(i(160));_l(o,s,a),ml=null,hl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wl(t,e),t=t.sibling}var Cl=null;function wl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Sl(t,e),Tl(e),r&4&&(Jc(3,e,e.return),qc(3,e),Jc(5,e,e.return));break;case 1:Sl(t,e),Tl(e),r&512&&(sl||n===null||Qc(n,n.return)),r&64&&ol&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=Cl;if(Sl(t,e),Tl(e),r&512&&(sl||n===null||Qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[yt]||o[ft]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Yd(o,r,n),o[ft]=e,Tt(o),r=o;break a;case`link`:var s=np(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=np(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ft]=e,Tt(o),r=o}e.stateNode=r}else rp(a,e.type,e.stateNode);else e.stateNode=Zf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&el(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?rp(a,e.type,e.stateNode):Zf(a,r,e.memoizedProps))}break;case 27:Sl(t,e),Tl(e),r&512&&(sl||n===null||Qc(n,n.return)),n!==null&&r&4&&el(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Sl(t,e),Tl(e),r&512&&(sl||n===null||Qc(n,n.return)),e.flags&32){a=e.stateNode;try{Zt(a,``)}catch(t){rd(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,el(e,a,n===null?a:n.memoizedProps)),r&1024&&(cl=!0);break;case 6:if(Sl(t,e),Tl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){rd(e,e.return,t)}}break;case 3:if(tp=null,a=Cl,Cl=jf(t.containerInfo),Sl(t,e),Cl=a,Tl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jp(t.containerInfo)}catch(t){rd(e,e.return,t)}cl&&(cl=!1,El(e));break;case 4:r=Cl,Cl=jf(e.stateNode.containerInfo),Sl(t,e),Tl(e),Cl=r;break;case 12:Sl(t,e),Tl(e);break;case 31:Sl(t,e),Tl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,xl(e,r)));break;case 13:Sl(t,e),Tl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(du=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,xl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=ol,d=sl;if(ol=u||a,sl=d||l,Sl(t,e),sl=d,ol=u,Tl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||ol||sl||Ol(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){rd(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){rd(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?hf(m,!0):hf(l.stateNode,!1)}catch(e){rd(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,xl(e,n))));break;case 19:Sl(t,e),Tl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,xl(e,r)));break;case 30:break;case 21:break;default:Sl(t,e),Tl(e)}}function Tl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(tl(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;il(e,nl(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Zt(o,``),n.flags&=-33),il(e,nl(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;rl(e,nl(e),s);break;default:throw Error(i(161))}}catch(t){rd(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function El(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;El(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Dl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fl(e,t.alternate,t),t=t.sibling}function Ol(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jc(4,t,t.return),Ol(t);break;case 1:Qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Xc(t,t.return,n),Ol(t);break;case 27:Of(t.stateNode);case 26:case 5:Qc(t,t.return),Ol(t);break;case 22:t.memoizedState===null&&Ol(t);break;case 30:Ol(t);break;default:Ol(t)}e=e.sibling}}function kl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:kl(i,a,n),qc(4,a);break;case 1:if(kl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){rd(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)eo(c[i],s)}catch(e){rd(r,r.return,e)}}n&&o&64&&Yc(a),Zc(a,a.return);break;case 27:al(a);case 26:case 5:kl(i,a,n),n&&r===null&&o&4&&$c(a),Zc(a,a.return);break;case 12:kl(i,a,n);break;case 31:kl(i,a,n),n&&o&4&&vl(i,a);break;case 13:kl(i,a,n),n&&o&4&&yl(i,a);break;case 22:a.memoizedState===null&&kl(i,a,n),Zc(a,a.return);break;case 30:break;default:kl(i,a,n)}t=t.sibling}}function Al(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function jl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function Ml(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nl(e,t,n,r),t=t.sibling}function Nl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ml(e,t,n,r),i&2048&&qc(9,t);break;case 1:Ml(e,t,n,r);break;case 3:Ml(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){Ml(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){rd(t,t.return,e)}}else Ml(e,t,n,r);break;case 31:Ml(e,t,n,r);break;case 13:Ml(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Ml(e,t,n,r):(a._visibility|=2,Pl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Ml(e,t,n,r):Fl(e,t),i&2048&&Al(o,t);break;case 24:Ml(e,t,n,r),i&2048&&jl(t.alternate,t);break;default:Ml(e,t,n,r)}}function Pl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Pl(a,o,s,c,i),qc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Pl(a,o,s,c,i)):u._visibility&2?Pl(a,o,s,c,i):Fl(a,o),i&&l&2048&&Al(o.alternate,o);break;case 24:Pl(a,o,s,c,i),i&&l&2048&&jl(o.alternate,o);break;default:Pl(a,o,s,c,i)}t=t.sibling}}function Fl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Fl(n,r),i&2048&&Al(r.alternate,r);break;case 24:Fl(n,r),i&2048&&jl(r.alternate,r);break;default:Fl(n,r)}t=t.sibling}}var Il=8192;function Ll(e,t,n){if(e.subtreeFlags&Il)for(e=e.child;e!==null;)Rl(e,t,n),e=e.sibling}function Rl(e,t,n){switch(e.tag){case 26:Ll(e,t,n),e.flags&Il&&e.memoizedState!==null&&op(n,Cl,e.memoizedState,e.memoizedProps);break;case 5:Ll(e,t,n);break;case 3:case 4:var r=Cl;Cl=jf(e.stateNode.containerInfo),Ll(e,t,n),Cl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Il,Il=16777216,Ll(e,t,n),Il=r):Ll(e,t,n));break;default:Ll(e,t,n)}}function zl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ul=r,Ul(r,e)}zl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vl(e),e=e.sibling}function Vl(e){switch(e.tag){case 0:case 11:case 15:Bl(e),e.flags&2048&&Jc(9,e,e.return);break;case 3:Bl(e);break;case 12:Bl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hl(e)):Bl(e);break;default:Bl(e)}}function Hl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ul=r,Ul(r,e)}zl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jc(8,t,t.return),Hl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Hl(t));break;default:Hl(t)}e=e.sibling}}function Ul(e,t){for(;ul!==null;){var n=ul;switch(n.tag){case 0:case 11:case 15:Jc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ul=r;else a:for(n=e;ul!==null;){r=ul;var i=r.sibling,a=r.return;if(pl(r),r===n){ul=null;break a}if(i!==null){i.return=a,ul=i;break a}ul=a}}}var Wl={getCacheForType:function(e){var t=oa(fa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oa(fa).controller.signal}},Gl=typeof WeakMap==`function`?WeakMap:Map,Kl=0,ql=null,Jl=null,Yl=0,Xl=0,Zl=null,Ql=!1,$l=!1,eu=!1,tu=0,nu=0,ru=0,iu=0,au=0,ou=0,su=0,cu=null,lu=null,uu=!1,du=0,fu=0,pu=1/0,mu=null,hu=null,gu=0,_u=null,vu=null,yu=0,bu=0,xu=null,Su=null,Cu=0,wu=null;function Tu(){return Kl&2&&Yl!==0?Yl&-Yl:O.T===null?lt():wd()}function Eu(){if(ou===0)if(!(Yl&536870912)||zi){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),ou=e}else ou=536870912;return e=so.current,e!==null&&(e.flags|=32),ou}function Du(e,t,n){(e===ql&&(Xl===2||Xl===9)||e.cancelPendingCommit!==null)&&(Pu(e,0),ju(e,Yl,ou,!1)),nt(e,n),(!(Kl&2)||e!==ql)&&(e===ql&&(!(Kl&2)&&(iu|=n),nu===4&&ju(e,Yl,ou,!1)),gd(e))}function Ou(e,t,n){if(Kl&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Qe(e,t),a=r?Hu(e,t):Bu(e,t,!0),o=r;do{if(a===0){$l&&!r&&ju(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Au(n)){a=Bu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=cu;var l=c.current.memoizedState.isDehydrated;if(l&&(Pu(c,s).flags|=256),s=Bu(c,s,!1),s!==2){if(eu&&!l){c.errorRecoveryDisabledLanes|=o,iu|=o,a=4;break a}o=lu,lu=a,o!==null&&(lu===null?lu=o:lu.push.apply(lu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Pu(e,0),ju(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:ju(r,t,ou,!Ql);break a;case 2:lu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=du+300-Ne(),10<a)){if(ju(r,t,ou,!Ql),Ze(r,0,!0)!==0)break a;yu=t,r.timeoutHandle=cf(ku.bind(null,r,n,lu,mu,uu,t,ou,iu,su,Ql,o,`Throttled`,-0,0),a);break a}ku(r,n,lu,mu,uu,t,ou,iu,su,Ql,o,null,-0,0)}}break}while(1);gd(e)}function ku(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},Rl(t,a,d);var m=(a&62914560)===a?du-Ne():(a&4194048)===a?fu-Ne():0;if(m=cp(d,m),m!==null){yu=a,e.cancelPendingCommit=m(Yu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),ju(e,a,o,!l);return}}Yu(e,t,a,n,r,i,o,s,c)}function Au(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ju(e,t,n,r){t&=~au,t&=~iu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&it(e,n,t)}function Mu(){return Kl&6?!0:(_d(0,!1),!1)}function Nu(){if(Jl!==null){if(Xl===0)var e=Jl.return;else e=Jl,Qi=Zi=null,Po(e),Ia=null,La=0,e=Jl;for(;e!==null;)Kc(e.alternate,e),e=e.return;Jl=null}}function Pu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,lf(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),yu=0,Nu(),ql=e,Jl=n=gi(e.current,null),Yl=t,Xl=0,Zl=null,Ql=!1,$l=Qe(e,t),eu=!1,su=ou=au=iu=ru=nu=0,lu=cu=null,uu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return tu=t,oi(),n}function Fu(e,t){L=null,O.H=Ws,t===Ea||t===Oa?(t=Pa(),Xl=3):t===Da?(t=Pa(),Xl=4):Xl=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Zl=t,Jl===null&&(nu=1,tc(e,wi(t,e.current)))}function Iu(){var e=so.current;return e===null?!0:(Yl&4194048)===Yl?co===null:(Yl&62914560)===Yl||Yl&536870912?e===co:!1}function Lu(){var e=O.H;return O.H=Ws,e===null?Ws:e}function Ru(){var e=O.A;return O.A=Wl,e}function zu(){nu=4,Ql||(Yl&4194048)!==Yl&&so.current!==null||($l=!0),!(ru&134217727)&&!(iu&134217727)||ql===null||ju(ql,Yl,ou,!1)}function Bu(e,t,n){var r=Kl;Kl|=2;var i=Lu(),a=Ru();(ql!==e||Yl!==t)&&(mu=null,Pu(e,t)),t=!1;var o=nu;a:do try{if(Xl!==0&&Jl!==null){var s=Jl,c=Zl;switch(Xl){case 8:Nu(),o=6;break a;case 3:case 2:case 9:case 6:so.current===null&&(t=!0);var l=Xl;if(Xl=0,Zl=null,Ku(e,s,c,l),n&&$l){o=0;break a}break;default:l=Xl,Xl=0,Zl=null,Ku(e,s,c,l)}}Vu(),o=nu;break}catch(t){Fu(e,t)}while(1);return t&&e.shellSuspendCounter++,Qi=Zi=null,Kl=r,O.H=i,O.A=a,Jl===null&&(ql=null,Yl=0,oi()),o}function Vu(){for(;Jl!==null;)Wu(Jl)}function Hu(e,t){var n=Kl;Kl|=2;var r=Lu(),a=Ru();ql!==e||Yl!==t?(mu=null,pu=Ne()+500,Pu(e,t)):$l=Qe(e,t);a:do try{if(Xl!==0&&Jl!==null){t=Jl;var o=Zl;b:switch(Xl){case 1:Xl=0,Zl=null,Ku(e,t,o,1);break;case 2:case 9:if(Aa(o)){Xl=0,Zl=null,Gu(t);break}t=function(){Xl!==2&&Xl!==9||ql!==e||(Xl=7),gd(e)},o.then(t,t);break a;case 3:Xl=7;break a;case 4:Xl=5;break a;case 7:Aa(o)?(Xl=0,Zl=null,Gu(t)):(Xl=0,Zl=null,Ku(e,t,o,7));break;case 5:var s=null;switch(Jl.tag){case 26:s=Jl.memoizedState;case 5:case 27:var c=Jl;if(s?ap(s):c.stateNode.complete){Xl=0,Zl=null;var l=c.sibling;if(l!==null)Jl=l;else{var u=c.return;u===null?Jl=null:(Jl=u,qu(u))}break b}}Xl=0,Zl=null,Ku(e,t,o,5);break;case 6:Xl=0,Zl=null,Ku(e,t,o,6);break;case 8:Nu(),nu=6;break a;default:throw Error(i(462))}}Uu();break}catch(t){Fu(e,t)}while(1);return Qi=Zi=null,O.H=r,O.A=a,Kl=n,Jl===null?(ql=null,Yl=0,oi(),nu):0}function Uu(){for(;Jl!==null&&!je();)Wu(Jl)}function Wu(e){var t=Lc(e.alternate,e,tu);e.memoizedProps=e.pendingProps,t===null?qu(e):Jl=t}function Gu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xc(n,t,t.pendingProps,t.type,void 0,Yl);break;case 11:t=xc(n,t,t.pendingProps,t.type.render,t.ref,Yl);break;case 5:Po(t);default:Kc(n,t),t=Jl=_i(t,tu),t=Lc(n,t,tu)}e.memoizedProps=e.pendingProps,t===null?qu(e):Jl=t}function Ku(e,t,n,r){Qi=Zi=null,Po(t),Ia=null,La=0;var i=t.return;try{if(oc(e,i,t,n,Yl)){nu=1,tc(e,wi(n,e.current)),Jl=null;return}}catch(t){if(i!==null)throw Jl=i,t;nu=1,tc(e,wi(n,e.current)),Jl=null;return}t.flags&32768?(zi||r===1?e=!0:$l||Yl&536870912?e=!1:(Ql=e=!0,(r===2||r===9||r===3||r===6)&&(r=so.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ju(t,e)):qu(t)}function qu(e){var t=e;do{if(t.flags&32768){Ju(t,Ql);return}e=t.return;var n=Wc(t.alternate,t,tu);if(n!==null){Jl=n;return}if(t=t.sibling,t!==null){Jl=t;return}Jl=t=e}while(t!==null);nu===0&&(nu=5)}function Ju(e,t){do{var n=Gc(e.alternate,e);if(n!==null){n.flags&=32767,Jl=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Jl=e;return}Jl=e=n}while(e!==null);nu=6,Jl=null}function Yu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do ed();while(gu!==0);if(Kl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ai,rt(e,n,o,s,c,l),e===ql&&(Jl=ql=null,Yl=0),vu=t,_u=e,yu=n,bu=o,xu=a,Su=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,ld(Le,function(){return td(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=Kl,Kl|=4;try{dl(e,t,n)}finally{Kl=s,k.p=a,O.T=r}}gu=1,Xu(),Zu(),Qu()}}function Xu(){if(gu===1){gu=0;var e=_u,t=vu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=Kl;Kl|=4;try{wl(t,e);var a=ef,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Sp=!!$d,ef=$d=null}finally{Kl=i,k.p=r,O.T=n}}e.current=t,gu=2}}function Zu(){if(gu===2){gu=0;var e=_u,t=vu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=Kl;Kl|=4;try{fl(e,t.alternate,t)}finally{Kl=i,k.p=r,O.T=n}}gu=3}}function Qu(){if(gu===4||gu===3){gu=0,Me();var e=_u,t=vu,n=yu,r=Su;t.subtreeFlags&10256||t.flags&10256?gu=5:(gu=0,vu=_u=null,$u(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(hu=null),ct(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}yu&3&&ed(),gd(e),i=e.pendingLanes,n&261930&&i&42?e===wu?Cu++:(Cu=0,wu=e):Cu=0,_d(0,!1)}}function $u(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function ed(){return Xu(),Zu(),Qu(),td()}function td(){if(gu!==5)return!1;var e=_u,t=bu;bu=0;var n=ct(yu),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=xu,xu=null;var o=_u,s=yu;if(gu=0,vu=_u=null,yu=0,Kl&6)throw Error(i(331));var c=Kl;if(Kl|=4,Vl(o.current),Nl(o,o.current,s,n),Kl=c,_d(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{k.p=a,O.T=r,$u(e,t)}}function nd(e,t,n){t=wi(n,t),t=rc(e.stateNode,t,2),e=Ja(e,t,2),e!==null&&(nt(e,2),gd(e))}function rd(e,t,n){if(e.tag===3)nd(e,e,n);else for(;t!==null;){if(t.tag===3){nd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(hu===null||!hu.has(r))){e=wi(n,e),n=ic(2),r=Ja(t,n,2),r!==null&&(ac(n,r,t,e),nt(r,2),gd(r));break}}t=t.return}}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(eu=!0,i.add(n),e=ad.bind(null,e,t,n),t.then(e,e))}function ad(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ql===e&&(Yl&n)===n&&(nu===4||nu===3&&(Yl&62914560)===Yl&&300>Ne()-du?!(Kl&2)&&Pu(e,0):au|=n,su===Yl&&(su=0)),gd(e)}function od(e,t){t===0&&(t=et()),e=li(e,t),e!==null&&(nt(e,t),gd(e))}function sd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),od(e,n)}function cd(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),od(e,n)}function ld(e,t){return ke(e,t)}var ud=null,dd=null,fd=!1,pd=!1,md=!1,hd=0;function gd(e){e!==dd&&e.next===null&&(dd===null?ud=dd=e:dd=dd.next=e),pd=!0,fd||(fd=!0,Cd())}function _d(e,t){if(!md&&pd){md=!0;do for(var n=!1,r=ud;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Sd(r,a))}else a=Yl,a=Ze(r,r===ql?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,Sd(r,a));r=r.next}while(n);md=!1}}function vd(){yd()}function yd(){pd=fd=!1;var e=0;hd!==0&&sf()&&(e=hd);for(var t=Ne(),n=null,r=ud;r!==null;){var i=r.next,a=bd(r,t);a===0?(r.next=null,n===null?ud=i:n.next=i,i===null&&(dd=n)):(n=r,(e!==0||a&3)&&(pd=!0)),r=i}gu!==0&&gu!==5||_d(e,!1),hd!==0&&(hd=0)}function bd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=$e(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=ql,n=Yl,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Xl===2||Xl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ct(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=xd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function xd(e,t){if(gu!==0&&gu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ed()&&e.callbackNode!==n)return null;var r=Yl;return r=Ze(e,e===ql?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Ou(e,r,t),bd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?xd.bind(null,e):null)}function Sd(e,t){if(ed())return null;Ou(e,t,!0)}function Cd(){df(function(){Kl&6?ke(Fe,vd):yd()})}function wd(){if(hd===0){var e=_a;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),hd=e}return hd}function Td(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:an(``+e)}function Ed(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Dd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Td((i[pt]||null).action),o=r.submitter;o&&(t=(t=o[pt]||null)?Td(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(hd!==0){var e=o?Ed(i,o):new FormData(i);As(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?Ed(i,o):new FormData(i),As(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Od=0;Od<ei.length;Od++){var kd=ei[Od];ti(kd.toLowerCase(),`on`+(kd[0].toUpperCase()+kd.slice(1)))}ti(Kr,`onAnimationEnd`),ti(qr,`onAnimationIteration`),ti(Jr,`onAnimationStart`),ti(`dblclick`,`onDoubleClick`),ti(`focusin`,`onFocus`),ti(`focusout`,`onBlur`),ti(Yr,`onTransitionRun`),ti(Xr,`onTransitionStart`),ti(Zr,`onTransitionCancel`),ti(Qr,`onTransitionEnd`),kt(`onMouseEnter`,[`mouseout`,`mouseover`]),kt(`onMouseLeave`,[`mouseout`,`mouseover`]),kt(`onPointerEnter`,[`pointerout`,`pointerover`]),kt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ot(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ot(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ot(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ot(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Ad=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),jd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Ad));function Md(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}}}}function Nd(e,t){var n=t[ht];n===void 0&&(n=t[ht]=new Set);var r=e+`__bubble`;n.has(r)||(Ld(t,e,2,!1),n.add(r))}function Pd(e,t,n){var r=0;t&&(r|=4),Ld(n,e,r,t)}var Fd=`_reactListening`+Math.random().toString(36).slice(2);function Id(e){if(!e[Fd]){e[Fd]=!0,Et.forEach(function(t){t!==`selectionchange`&&(jd.has(t)||Pd(t,!1,e),Pd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fd]||(t[Fd]=!0,Pd(`selectionchange`,!1,t))}}function Ld(e,t,n,r){switch(kp(t)){case 2:var i=Cp;break;case 8:i=wp;break;default:i=Tp}n=i.bind(null,t,n,e),i=void 0,!gn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Rd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=xt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}pn(function(){var r=a,i=cn(n),s=[];a:{var c=$r.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Sn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Kr:case qr:case Jr:l=Ln;break;case Qr:l=Jn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=Yn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=mn(m,p),g!=null&&d.push(zd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==sn&&(u=n.relatedTarget||n.fromElement)&&(xt(u)||u[mt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?xt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ct(l),h=u==null?c:Ct(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,xt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Vd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Hd(s,c,l,d,!1),u!==null&&f!==null&&Hd(s,f,u,d,!0)}}a:{if(c=r?Ct(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c))if(_r)v=Er;else{v=wr;var y=Cr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&tn(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&qt(c,`number`,c.value)}switch(y=r?Ct(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=xn()):(vn=i,yn=`value`in vn?vn.value:vn.textContent,or=!0)),y=Bd(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?sr(e,n):cr(e,n))&&(x=Bd(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),Dd(s,e,r,n,i)}Md(s,t)})}function zd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=mn(e,n),i!=null&&r.unshift(zd(e,i,a)),i=mn(e,t),i!=null&&r.push(zd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Vd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=mn(n,a),l!=null&&o.unshift(zd(n,l,c))):i||(l=mn(n,a),l!=null&&o.push(zd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ud=/\r\n?/g,Wd=/\u0000|\uFFFD/g;function Gd(e){return(typeof e==`string`?e:``+e).replace(Ud,`
`).replace(Wd,``)}function Kd(e,t){return t=Gd(t),Gd(e)===t}function qd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Zt(e,``+r);break;case`className`:Ft(e,`class`,r);break;case`tabIndex`:Ft(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ft(e,n,r);break;case`style`:en(e,r,o);break;case`data`:if(t!==`object`){Ft(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&qd(e,t,`name`,a.name,a,null),qd(e,t,`formEncType`,a.formEncType,a,null),qd(e,t,`formMethod`,a.formMethod,a,null),qd(e,t,`formTarget`,a.formTarget,a,null)):(qd(e,t,`encType`,a.encType,a,null),qd(e,t,`method`,a.method,a,null),qd(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=on);break;case`onScroll`:r!=null&&Nd(`scroll`,e);break;case`onScrollEnd`:r!=null&&Nd(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=an(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Nd(`beforetoggle`,e),Nd(`toggle`,e),Pt(e,`popover`,r);break;case`xlinkActuate`:It(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:It(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:It(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:It(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Pt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=nn.get(n)||n,Pt(e,n,r))}}function Jd(e,t,n,r,a,o){switch(n){case`style`:en(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Zt(e,``+r);break;case`onScroll`:r!=null&&Nd(`scroll`,e);break;case`onScrollEnd`:r!=null&&Nd(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=on);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Dt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[pt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Pt(e,n,r)}}}function Yd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Nd(`error`,e),Nd(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:qd(e,t,o,s,n,null)}}a&&qd(e,t,`srcSet`,n.srcSet,n,null),r&&qd(e,t,`src`,n.src,n,null);return;case`input`:Nd(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:qd(e,t,r,d,n,null)}}Kt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Nd(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:qd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Jt(e,!!r,n,!0):Jt(e,!!r,t,!1);return;case`textarea`:for(s in Nd(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:qd(e,t,s,c,n,null)}Xt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:qd(e,t,l,r,n,null)}return;case`dialog`:Nd(`beforetoggle`,e),Nd(`toggle`,e),Nd(`cancel`,e),Nd(`close`,e);break;case`iframe`:case`object`:Nd(`load`,e);break;case`video`:case`audio`:for(r=0;r<Ad.length;r++)Nd(Ad[r],e);break;case`image`:Nd(`error`,e),Nd(`load`,e);break;case`details`:Nd(`toggle`,e);break;case`embed`:case`source`:case`link`:Nd(`error`,e),Nd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:qd(e,t,u,r,n,null)}return;default:if(tn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Jd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&qd(e,t,c,r,n,null))}function Xd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||qd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&qd(e,t,p,m,r,f)}}Gt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||qd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&qd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Jt(e,!!n,n?[]:``,!1):Jt(e,!!n,t,!0)):Jt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:qd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&qd(e,t,s,a,r,o)}Yt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:qd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:qd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&qd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:qd(e,t,u,p,r,m)}return;default:if(tn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Jd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Jd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&qd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||qd(e,t,f,p,r,m)}function Zd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Qd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Zd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Zd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var $d=null,ef=null;function tf(e){return e.nodeType===9?e:e.ownerDocument}function nf(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function rf(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function af(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var of=null;function sf(){var e=window.event;return e&&e.type===`popstate`?e===of?!1:(of=e,!0):(of=null,!1)}var cf=typeof setTimeout==`function`?setTimeout:void 0,lf=typeof clearTimeout==`function`?clearTimeout:void 0,uf=typeof Promise==`function`?Promise:void 0,df=typeof queueMicrotask==`function`?queueMicrotask:uf===void 0?cf:function(e){return uf.resolve(null).then(e).catch(ff)};function ff(e){setTimeout(function(){throw e})}function pf(e){return e===`head`}function mf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Jp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)Of(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,Of(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[yt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&Of(e.ownerDocument.body);n=i}while(n);Jp(t)}function hf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function gf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:gf(n),bt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function _f(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[yt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=Cf(e.nextSibling),e===null)break}return null}function vf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=Cf(e.nextSibling),e===null))return null;return e}function yf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=Cf(e.nextSibling),e===null))return null;return e}function bf(e){return e.data===`$?`||e.data===`$~`}function xf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function Sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function Cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var wf=null;function Tf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return Cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function Ef(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function Df(e,t,n){switch(t=tf(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function Of(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bt(e)}var kf=new Map,Af=new Set;function jf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mf=k.d;k.d={f:Nf,r:Pf,D:Lf,C:Rf,L:zf,m:Bf,X:Hf,S:Vf,M:Uf};function Nf(){var e=Mf.f(),t=Mu();return e||t}function Pf(e){var t=St(e);t!==null&&t.tag===5&&t.type===`form`?Ms(t):Mf.r(e)}var Ff=typeof document>`u`?null:document;function If(e,t,n){var r=Ff;if(r&&typeof t==`string`&&t){var i=Wt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),Af.has(i)||(Af.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Yd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Lf(e){Mf.D(e),If(`dns-prefetch`,e,null)}function Rf(e,t){Mf.C(e,t),If(`preconnect`,e,t)}function zf(e,t,n){Mf.L(e,t,n);var r=Ff;if(r&&e&&t){var i=`link[rel="preload"][as="`+Wt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Wt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Wt(n.imageSizes)+`"]`)):i+=`[href="`+Wt(e)+`"]`;var a=i;switch(t){case`style`:a=Gf(e);break;case`script`:a=Yf(e)}kf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),kf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Kf(a))||t===`script`&&r.querySelector(Xf(a))||(t=r.createElement(`link`),Yd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Bf(e,t){Mf.m(e,t);var n=Ff;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Wt(r)+`"][href="`+Wt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Yf(e)}if(!kf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),kf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Xf(a)))return}r=n.createElement(`link`),Yd(r,`link`,e),Tt(r),n.head.appendChild(r)}}}function Vf(e,t,n){Mf.S(e,t,n);var r=Ff;if(r&&e){var i=wt(r).hoistableStyles,a=Gf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Kf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=kf.get(a))&&$f(e,n);var c=o=r.createElement(`link`);Tt(c),Yd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Qf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Hf(e,t){Mf.X(e,t);var n=Ff;if(n&&e){var r=wt(n).hoistableScripts,i=Yf(e),a=r.get(i);a||(a=n.querySelector(Xf(i)),a||(e=m({src:e,async:!0},t),(t=kf.get(i))&&ep(e,t),a=n.createElement(`script`),Tt(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Uf(e,t){Mf.M(e,t);var n=Ff;if(n&&e){var r=wt(n).hoistableScripts,i=Yf(e),a=r.get(i);a||(a=n.querySelector(Xf(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=kf.get(i))&&ep(e,t),a=n.createElement(`script`),Tt(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Wf(e,t,n,r){var a=(a=he.current)?jf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Gf(n.href),n=wt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Gf(n.href);var o=wt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Kf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),kf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},kf.set(e,n),o||Jf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Yf(n),n=wt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Gf(e){return`href="`+Wt(e)+`"`}function Kf(e){return`link[rel="stylesheet"][`+e+`]`}function qf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Jf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Yd(t,`link`,n),Tt(t),e.head.appendChild(t))}function Yf(e){return`[src="`+Wt(e)+`"]`}function Xf(e){return`script[async]`+e}function Zf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Wt(n.href)+`"]`);if(r)return t.instance=r,Tt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Tt(r),Yd(r,`style`,a),Qf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Gf(n.href);var o=e.querySelector(Kf(a));if(o)return t.state.loading|=4,t.instance=o,Tt(o),o;r=qf(n),(a=kf.get(a))&&$f(r,a),o=(e.ownerDocument||e).createElement(`link`),Tt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Yd(o,`link`,r),t.state.loading|=4,Qf(o,n.precedence,e),t.instance=o;case`script`:return o=Yf(n.src),(a=e.querySelector(Xf(o)))?(t.instance=a,Tt(a),a):(r=n,(a=kf.get(o))&&(r=m({},n),ep(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Tt(a),Yd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Qf(r,n.precedence,e));return t.instance}function Qf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function $f(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function ep(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var tp=null;function np(e,t,n){if(tp===null){var r=new Map,i=tp=new Map;i.set(n,r)}else i=tp,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[yt]||a[ft]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function rp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function ip(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function ap(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function op(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Gf(r.href),a=t.querySelector(Kf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=lp.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Tt(a);return}a=t.ownerDocument||t,r=qf(r),(i=kf.get(i))&&$f(r,i),a=a.createElement(`link`),Tt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Yd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=lp.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var sp=0;function cp(e,t){return e.stylesheets&&e.count===0&&dp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&dp(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&sp===0&&(sp=62500*Qd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dp(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>sp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function lp(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var up=null;function dp(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,up=new Map,t.forEach(fp,e),up=null,lp.call(e))}function fp(e,t){if(!(t.state.loading&4)){var n=up.get(e);if(n)var r=n.get(null);else{n=new Map,up.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=lp.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var pp={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function mp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tt(0),this.hiddenUpdates=tt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function hp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new mp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ga(a),e}function gp(e){return e?(e=fi,e):fi}function _p(e,t,n,r,i,a){i=gp(i),r.context===null?r.context=i:r.pendingContext=i,r=qa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ja(e,r,t),n!==null&&(Du(n,e,t),Ya(n,e,t))}function vp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yp(e,t){vp(e,t),(e=e.alternate)&&vp(e,t)}function bp(e){if(e.tag===13||e.tag===31){var t=li(e,67108864);t!==null&&Du(t,e,67108864),yp(e,67108864)}}function xp(e){if(e.tag===13||e.tag===31){var t=Tu();t=st(t);var n=li(e,t);n!==null&&Du(n,e,t),yp(e,t)}}var Sp=!0;function Cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,Tp(e,t,n,r)}finally{k.p=a,O.T=i}}function wp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,Tp(e,t,n,r)}finally{k.p=a,O.T=i}}function Tp(e,t,n,r){if(Sp){var i=Ep(r);if(i===null)Rd(e,t,r,Dp,n),Rp(e,r);else if(Bp(i,e,t,n,r))r.stopPropagation();else if(Rp(e,r),t&4&&-1<Lp.indexOf(e)){for(;i!==null;){var a=St(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}gd(a),!(Kl&6)&&(pu=Ne()+500,_d(0,!1))}}break;case 31:case 13:s=li(a,2),s!==null&&Du(s,a,2),Mu(),yp(a,2)}if(a=Ep(r),a===null&&Rd(e,t,r,Dp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Rd(e,t,r,null,n)}}function Ep(e){return e=cn(e),Op(e)}var Dp=null;function Op(e){if(Dp=null,e=xt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Dp=e,null}function kp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var Ap=!1,jp=null,Mp=null,Np=null,Pp=new Map,Fp=new Map,Ip=[],Lp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Rp(e,t){switch(e){case`focusin`:case`focusout`:jp=null;break;case`dragenter`:case`dragleave`:Mp=null;break;case`mouseover`:case`mouseout`:Np=null;break;case`pointerover`:case`pointerout`:Pp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Fp.delete(t.pointerId)}}function zp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=St(t),t!==null&&bp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bp(e,t,n,r,i){switch(t){case`focusin`:return jp=zp(jp,e,t,n,r,i),!0;case`dragenter`:return Mp=zp(Mp,e,t,n,r,i),!0;case`mouseover`:return Np=zp(Np,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Pp.set(a,zp(Pp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Fp.set(a,zp(Fp.get(a)||null,e,t,n,r,i)),!0}return!1}function Vp(e){var t=xt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ut(e.priority,function(){xp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ut(e.priority,function(){xp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ep(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sn=r,n.target.dispatchEvent(r),sn=null}else return t=St(n),t!==null&&bp(t),e.blockedOn=n,!1;t.shift()}return!0}function Up(e,t,n){Hp(e)&&n.delete(t)}function Wp(){Ap=!1,jp!==null&&Hp(jp)&&(jp=null),Mp!==null&&Hp(Mp)&&(Mp=null),Np!==null&&Hp(Np)&&(Np=null),Pp.forEach(Up),Fp.forEach(Up)}function Gp(e,n){e.blockedOn===n&&(e.blockedOn=null,Ap||(Ap=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Wp)))}var Kp=null;function qp(e){Kp!==e&&(Kp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Kp===e&&(Kp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Op(r||n)===null)continue;break}var a=St(n);a!==null&&(e.splice(t,3),t-=3,As(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Jp(e){function t(t){return Gp(t,e)}jp!==null&&Gp(jp,e),Mp!==null&&Gp(Mp,e),Np!==null&&Gp(Np,e),Pp.forEach(t),Fp.forEach(t);for(var n=0;n<Ip.length;n++){var r=Ip[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ip.length&&(n=Ip[0],n.blockedOn===null);)Vp(n),n.blockedOn===null&&Ip.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[pt]||null;if(typeof a==`function`)o||qp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[pt]||null)s=o.formAction;else if(Op(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),qp(n)}}}function Yp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Xp(e){this._internalRoot=e}Zp.prototype.render=Xp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;_p(n,Tu(),e,t,null,null)},Zp.prototype.unmount=Xp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_p(e.current,2,null,e,null,null),Mu(),t[mt]=null}};function Zp(e){this._internalRoot=e}Zp.prototype.unstable_scheduleHydration=function(e){if(e){var t=lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ip.length&&t!==0&&t<Ip[n].priority;n++);Ip.splice(n,0,e),n===0&&Vp(e)}};var Qp=n.version;if(Qp!==`19.2.6`)throw Error(i(527,Qp,`19.2.6`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var $p={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var em=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!em.isDisabled&&em.supportsFiber)try{Ve=em.inject($p),He=em}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Qs,s=$s,c=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=hp(e,1,!1,null,null,n,r,null,o,s,c,Yp),e[mt]=t.current,Id(e),new Xp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()}))(),v=`modulepreload`,y=function(e){return`/ham-train/`+e},b={},x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=y(t,n),t in b)return;b[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:v,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},S=l(p(),1),C=`popstate`;function w(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function T(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=ie(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),ne(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:re(t))}function r(e,t){ee(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return ae(t,n,r,e)}function E(e,t){if(e===!1||e==null)throw Error(t)}function ee(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function D(){return Math.random().toString(36).substring(2,10)}function te(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ne(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ie(t):t,state:n,key:t&&t.key||r||D(),mask:i}}function re({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ie(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ae(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=w(e)?e:ne(h.location,e,t);n&&n(r,e),l=u()+1;let d=te(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=w(e)?e:ne(h.location,e,t);n&&n(r,e),l=u();let i=te(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return oe(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function oe(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),E(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:re(t);return i=i.replace(/ $/,`%20`),!n&&i.startsWith(`//`)&&(i=r+i),new URL(i,r)}function se(e,t,n=`/`){return O(e,t,n,!1)}function O(e,t,n,r,i){let a=we((typeof t==`string`?ie(t):t).pathname||`/`,n);if(a==null)return null;let o=i??ce(e),s=null,c=Ce(a);for(let e=0;s==null&&e<o.length;++e)s=be(o[e],c,r);return s}function k(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ce(e){let t=le(e);return de(t),t}function le(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;E(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ne([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(E(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),le(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ve(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ue(e.path))a(e,t,!0,n)}),t}function ue(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ue(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function de(e){e.sort((e,t)=>e.score===t.score?ye(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var fe=/^:[\w-]+$/,pe=3,me=2,A=1,he=10,ge=-2,_e=e=>e===`*`;function ve(e,t){let n=e.split(`/`),r=n.length;return n.some(_e)&&(r+=ge),t&&(r+=me),n.filter(e=>!_e(e)).reduce((e,t)=>e+(fe.test(t)?pe:t===``?A:he),r)}function ye(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function be(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=xe({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=xe({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ne([a,u.pathname]),pathnameBase:Fe(Ne([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Ne([a,u.pathnameBase]))}return o}function xe(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Se(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Se(e,t=!1,n=!0){ee(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Ce(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return ee(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function we(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Te=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ee(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ie(e):e,a;return n?(n=Me(n),a=n.startsWith(`/`)?De(n.substring(1),`/`):De(n,t)):a=t,{pathname:a,search:Ie(r),hash:Le(i)}}function De(e,t){let n=Pe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Oe(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ke(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ae(e){let t=ke(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function je(e,t,n,r=!1){let i;typeof e==`string`?i=ie(e):(i={...e},E(!i.pathname||!i.pathname.includes(`?`),Oe(`?`,`pathname`,`search`,i)),E(!i.pathname||!i.pathname.includes(`#`),Oe(`#`,`pathname`,`hash`,i)),E(!i.search||!i.search.includes(`#`),Oe(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ee(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Me=e=>e.replace(/\/\/+/g,`/`),Ne=e=>Me(e.join(`/`)),Pe=e=>e.replace(/\/+$/,``),Fe=e=>Pe(e).replace(/^\/*/,`/`),Ie=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Le=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Re=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function ze(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function j(e){return Ne(e.map(e=>e.route.path).filter(Boolean))||`/`}var Be=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ve(e,t){let n=e;if(typeof n!=`string`||!Te.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Be)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=we(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{ee(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var He=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(He);var M=[`GET`,...He];new Set(M);var Ue=S.createContext(null);Ue.displayName=`DataRouter`;var We=S.createContext(null);We.displayName=`DataRouterState`;var Ge=S.createContext(!1);function Ke(){return S.useContext(Ge)}var qe=S.createContext({isTransitioning:!1});qe.displayName=`ViewTransition`;var Je=S.createContext(new Map);Je.displayName=`Fetchers`;var Ye=S.createContext(null);Ye.displayName=`Await`;var Xe=S.createContext(null);Xe.displayName=`Navigation`;var Ze=S.createContext(null);Ze.displayName=`Location`;var Qe=S.createContext({outlet:null,matches:[],isDataRoute:!1});Qe.displayName=`Route`;var $e=S.createContext(null);$e.displayName=`RouteError`;var et=`REACT_ROUTER_ERROR`,tt=`REDIRECT`,nt=`ROUTE_ERROR_RESPONSE`;function rt(e){if(e.startsWith(`${et}:${tt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function it(e){if(e.startsWith(`${et}:${nt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Re(t.status,t.statusText,t.data)}catch{}}function at(e,{relative:t}={}){E(ot(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=S.useContext(Xe),{hash:i,pathname:a,search:o}=ft(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ne([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ot(){return S.useContext(Ze)!=null}function st(){return E(ot(),`useLocation() may be used only in the context of a <Router> component.`),S.useContext(Ze).location}var ct=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function lt(e){S.useContext(Xe).static||S.useLayoutEffect(e)}function ut(){let{isDataRoute:e}=S.useContext(Qe);return e?jt():dt()}function dt(){E(ot(),`useNavigate() may be used only in the context of a <Router> component.`);let e=S.useContext(Ue),{basename:t,navigator:n}=S.useContext(Xe),{matches:r}=S.useContext(Qe),{pathname:i}=st(),a=JSON.stringify(Ae(r)),o=S.useRef(!1);return lt(()=>{o.current=!0}),S.useCallback((r,s={})=>{if(ee(o.current,ct),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=je(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ne([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}S.createContext(null);function ft(e,{relative:t}={}){let{matches:n}=S.useContext(Qe),{pathname:r}=st(),i=JSON.stringify(Ae(n));return S.useMemo(()=>je(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function pt(e,t){return mt(e,t)}function mt(e,t,n){E(ot(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=S.useContext(Xe),{matches:i}=S.useContext(Qe),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Nt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=st(),d;if(t){let e=typeof t==`string`?ie(t):t;E(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):se(e,{pathname:p});ee(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),ee(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=xt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ne([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ne([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?S.createElement(Ze.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function ht(){let e=At(),t=ze(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=S.createElement(S.Fragment,null,S.createElement(`p`,null,`💿 Hey developer 👋`),S.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,S.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,S.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),S.createElement(S.Fragment,null,S.createElement(`h2`,null,`Unexpected Application Error!`),S.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?S.createElement(`pre`,{style:i},n):null,o)}var gt=S.createElement(ht,null),_t=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=it(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:S.createElement(Qe.Provider,{value:this.props.routeContext},S.createElement($e.Provider,{value:e,children:this.props.component}));return this.context?S.createElement(yt,{error:e},t):t}};_t.contextType=Ge;var vt=new WeakMap;function yt({children:e,error:t}){let{basename:n}=S.useContext(Xe);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=rt(t.digest);if(e){let r=vt.get(t);if(r)throw r;let i=Ve(e.location,n);if(Be&&!vt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw vt.set(t,n),n}return S.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function bt({routeContext:e,match:t,children:n}){let r=S.useContext(Ue);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(Qe.Provider,{value:e},n)}function xt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);E(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:j(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||gt,o&&(s<0&&c===0?(Nt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?S.createElement(n.route.Component,null):n.route.element?n.route.element:e,S.createElement(bt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?S.createElement(_t,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function St(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ct(e){let t=S.useContext(Ue);return E(t,St(e)),t}function wt(e){let t=S.useContext(We);return E(t,St(e)),t}function Tt(e){let t=S.useContext(Qe);return E(t,St(e)),t}function Et(e){let t=Tt(e),n=t.matches[t.matches.length-1];return E(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Dt(){return Et(`useRouteId`)}function Ot(){let e=wt(`useNavigation`);return S.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function kt(){let{matches:e,loaderData:t}=wt(`useMatches`);return S.useMemo(()=>e.map(e=>k(e,t)),[e,t])}function At(){let e=S.useContext($e),t=wt(`useRouteError`),n=Et(`useRouteError`);return e===void 0?t.errors?.[n]:e}function jt(){let{router:e}=Ct(`useNavigate`),t=Et(`useNavigate`),n=S.useRef(!1);return lt(()=>{n.current=!0}),S.useCallback(async(r,i={})=>{ee(n.current,ct),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Mt={};function Nt(e,t,n){!t&&!Mt[e]&&(Mt[e]=!0,ee(!1,n))}S.memo(Pt);function Pt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return mt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Ft(e){E(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function It({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){E(!ot(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=S.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ie(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=S.useMemo(()=>{let e=we(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return ee(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:S.createElement(Xe.Provider,{value:c},S.createElement(Ze.Provider,{children:t,value:h}))}function Lt({children:e,location:t}){return pt(Rt(e),t)}S.Component;function Rt(e,t=[]){let n=[];return S.Children.forEach(e,(e,r)=>{if(!S.isValidElement(e))return;let i=[...t,r];if(e.type===S.Fragment){n.push.apply(n,Rt(e.props.children,i));return}E(e.type===Ft,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),E(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Rt(e.props.children,i)),n.push(a)}),n}var zt=`get`,Bt=`application/x-www-form-urlencoded`;function Vt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Ht(e){return Vt(e)&&e.tagName.toLowerCase()===`button`}function Ut(e){return Vt(e)&&e.tagName.toLowerCase()===`form`}function Wt(e){return Vt(e)&&e.tagName.toLowerCase()===`input`}function Gt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kt(e,t){return e.button===0&&(!t||t===`_self`)&&!Gt(e)}function qt(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function Jt(e,t){let n=qt(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var Yt=null;function Xt(){if(Yt===null)try{new FormData(document.createElement(`form`),0),Yt=!1}catch{Yt=!0}return Yt}var Zt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Qt(e){return e!=null&&!Zt.has(e)?(ee(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bt}"`),null):e}function $t(e,t){let n,r,i,a,o;if(Ut(e)){let o=e.getAttribute(`action`);r=o?we(o,t):null,n=e.getAttribute(`method`)||zt,i=Qt(e.getAttribute(`enctype`))||Bt,a=new FormData(e)}else if(Ht(e)||Wt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?we(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||zt,i=Qt(e.getAttribute(`formenctype`))||Qt(o.getAttribute(`enctype`))||Bt,a=new FormData(o,e),!Xt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Vt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=zt,r=null,i=Bt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var en={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},tn=/[&><\u2028\u2029]/g;function nn(e){return e.replace(tn,e=>en[e])}function rn(e,t){if(e===!1||e==null)throw Error(t)}function an(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&we(i.pathname,t)===`/`?i.pathname=`${Pe(t)}/_root.${r}`:i.pathname=`${Pe(i.pathname)}.${r}`,i}async function on(e,t){if(e.id in t)return t[e.id];try{let n=await x(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sn(e){return e!=null&&typeof e.page==`string`}function cn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function ln(e,t,n){return mn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await on(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(cn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function un(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function dn(e,t,{includeHydrateFallback:n}={}){return fn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function fn(e){return[...new Set(e)]}function pn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function mn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!sn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(pn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function hn(){let e=S.useContext(Ue);return rn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function gn(){let e=S.useContext(We);return rn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var _n=S.createContext(void 0);_n.displayName=`FrameworkContext`;function vn(){let e=S.useContext(_n);return rn(e,`You must render this element inside a <HydratedRouter> element`),e}function yn(e,t){let n=S.useContext(_n),[r,i]=S.useState(!1),[a,o]=S.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=S.useRef(null);S.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),S.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:bn(s,p),onBlur:bn(c,m),onMouseEnter:bn(l,p),onMouseLeave:bn(u,m),onTouchStart:bn(d,p)}]:[a,f,{}]:[!1,f,{}]}function bn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function xn({page:e,...t}){let n=Ke(),{router:r}=hn(),i=S.useMemo(()=>se(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?S.createElement(Cn,{page:e,matches:i,...t}):S.createElement(wn,{page:e,matches:i,...t}):null}function Sn(e){let{manifest:t,routeModules:n}=vn(),[r,i]=S.useState([]);return S.useEffect(()=>{let r=!1;return ln(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Cn({page:e,matches:t,...n}){let r=st(),{future:i}=vn(),{basename:a}=hn(),o=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=an(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return S.createElement(S.Fragment,null,o.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function wn({page:e,matches:t,...n}){let r=st(),{future:i,manifest:a,routeModules:o}=vn(),{basename:s}=hn(),{loaderData:c,matches:l}=gn(),u=S.useMemo(()=>un(e,t,l,a,r,`data`),[e,t,l,a,r]),d=S.useMemo(()=>un(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=an(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=S.useMemo(()=>dn(d,a),[d,a]),m=Sn(d);return S.createElement(S.Fragment,null,f.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>S.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>S.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Tn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}S.Component;var En=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{En&&(window.__reactRouterVersion=`7.16.0`)}catch{}function Dn({basename:e,children:t,useTransitions:n,window:r}){let i=S.useRef();i.current??=T({window:r,v5Compat:!0});let a=i.current,[o,s]=S.useState({action:a.action,location:a.location}),c=S.useCallback(e=>{n===!1?s(e):S.startTransition(()=>s(e))},[n]);return S.useLayoutEffect(()=>a.listen(c),[a,c]),S.createElement(It,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function On({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=S.useState({action:n.action,location:n.location}),o=S.useCallback(e=>{r===!1?a(e):S.startTransition(()=>a(e))},[r]);return S.useLayoutEffect(()=>n.listen(o),[n,o]),S.createElement(It,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}On.displayName=`unstable_HistoryRouter`;var kn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,An=S.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=S.useContext(Xe),v=typeof l==`string`&&kn.test(l),y=Ve(l,h);l=y.to;let b=at(l,{relative:r}),x=st(),C=null;if(o){let e=je(o,[],x.mask?x.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ne([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=yn(n,p),ee=Ln(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function D(t){e&&e(t),t.defaultPrevented||ee(t)}let te=!(y.isExternal||i),ne=S.createElement(`a`,{...p,...E,href:(te?C:void 0)||y.absoluteURL||b,onClick:te?D:e,ref:Tn(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?S.createElement(S.Fragment,null,ne,S.createElement(xn,{page:b})):ne});An.displayName=`Link`;var jn=S.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=ft(a,{relative:c.relative}),d=st(),f=S.useContext(We),{navigator:p,basename:m}=S.useContext(Xe),h=f!=null&&Jn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=we(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:x,isTransitioning:h},w=b?e:void 0,T;T=typeof n==`function`?n(C):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return S.createElement(An,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});jn.displayName=`NavLink`;var Mn=S.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=zt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=S.useContext(Xe),g=Vn(),_=Hn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&kn.test(s);return S.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?S.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Mn.displayName=`Form`;function Nn({getKey:e,storageKey:t,...n}){let r=S.useContext(_n),{basename:i}=S.useContext(Xe),a=st(),o=kt();Kn({getKey:e,storageKey:t});let s=S.useMemo(()=>{if(!r||!e)return null;let t=Gn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return S.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${nn(JSON.stringify(t||Un))}, ${nn(JSON.stringify(s))})`}})}Nn.displayName=`ScrollRestoration`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=S.useContext(Ue);return E(t,Pn(e)),t}function In(e){let t=S.useContext(We);return E(t,Pn(e)),t}function Ln(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=ut(),d=st(),f=ft(e,{relative:o});return S.useCallback(p=>{if(Kt(p,t)){p.preventDefault();let t=n===void 0?re(d)===re(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?S.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}function Rn(e){ee(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=S.useRef(qt(e)),n=S.useRef(!1),r=st(),i=S.useMemo(()=>Jt(r.search,n.current?null:t.current),[r.search]),a=ut();return[i,S.useCallback((e,t)=>{let r=qt(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i])]}var zn=0,Bn=()=>`__${String(++zn)}__`;function Vn(){let{router:e}=Fn(`useSubmit`),{basename:t}=S.useContext(Xe),n=Dt(),r=e.fetch,i=e.navigate;return S.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=$t(e,t);a.navigate===!1?await r(a.fetcherKey||Bn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Hn(e,{relative:t}={}){let{basename:n}=S.useContext(Xe),r=S.useContext(Qe);E(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...ft(e||`.`,{relative:t})},o=st();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ne([n,a.pathname])),re(a)}var Un=`react-router-scroll-positions`,Wn={};function Gn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:we(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Kn({getKey:e,storageKey:t}={}){let{router:n}=Fn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=In(`useScrollRestoration`),{basename:a}=S.useContext(Xe),o=st(),s=kt(),c=Ot();S.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),qn(S.useCallback(()=>{if(c.state===`idle`){let t=Gn(o,s,a,e);Wn[t]=window.scrollY}try{sessionStorage.setItem(t||Un,JSON.stringify(Wn))}catch(e){ee(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(S.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Un);e&&(Wn=JSON.parse(e))}catch{}},[t]),S.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Wn,()=>window.scrollY,e?(t,n)=>Gn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),S.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{ee(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function qn(e,t){let{capture:n}=t||{};S.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Jn(e,{relative:t}={}){let n=S.useContext(qe);E(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=ft(e,{relative:t});if(!n.isTransitioning)return!1;let a=we(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=we(n.nextLocation.pathname,r)||n.nextLocation.pathname;return xe(i.pathname,o)!=null||xe(i.pathname,a)!=null}var Yn=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Xn=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Zn=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Qn=e=>{let t=Zn(e);return t.charAt(0).toUpperCase()+t.slice(1)},$n={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},er=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},tr=(0,S.createContext)({}),nr=()=>(0,S.useContext)(tr),rr=(0,S.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=nr()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,S.createElement)(`svg`,{ref:c,...$n,width:t??l??$n.width,height:t??l??$n.height,stroke:e??f,strokeWidth:m,className:Yn(`lucide`,p,i),...!a&&!er(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,S.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),ir=(e,t)=>{let n=(0,S.forwardRef)(({className:n,...r},i)=>(0,S.createElement)(rr,{ref:i,iconNode:t,className:Yn(`lucide-${Xn(Qn(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Qn(e),n},ar=ir(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),or=ir(`book-marked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),sr=ir(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),cr=ir(`book-text`,[[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}],[`path`,{d:`M8 11h8`,key:`vwpz6n`}],[`path`,{d:`M8 7h6`,key:`1f0q6e`}]]),lr=ir(`chart-no-axes-column`,[[`path`,{d:`M5 21v-6`,key:`1hz6c0`}],[`path`,{d:`M12 21V3`,key:`1lcnhd`}],[`path`,{d:`M19 21V9`,key:`unv183`}]]),ur=ir(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),dr=ir(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),fr=ir(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),pr=ir(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),mr=ir(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),hr=ir(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),gr=ir(`clipboard-list`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`M12 11h4`,key:`1jrz19`}],[`path`,{d:`M12 16h4`,key:`n85exb`}],[`path`,{d:`M8 11h.01`,key:`1dfujw`}],[`path`,{d:`M8 16h.01`,key:`18s6g9`}]]),_r=ir(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),vr=ir(`flag`,[[`path`,{d:`M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528`,key:`1jaruq`}]]),yr=ir(`hash`,[[`line`,{x1:`4`,x2:`20`,y1:`9`,y2:`9`,key:`4lhtct`}],[`line`,{x1:`4`,x2:`20`,y1:`15`,y2:`15`,key:`vyu0kd`}],[`line`,{x1:`10`,x2:`8`,y1:`3`,y2:`21`,key:`1ggp8o`}],[`line`,{x1:`16`,x2:`14`,y1:`3`,y2:`21`,key:`weycgp`}]]),br=ir(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),xr=ir(`lightbulb`,[[`path`,{d:`M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`,key:`1gvzjb`}],[`path`,{d:`M9 18h6`,key:`x1upvd`}],[`path`,{d:`M10 22h4`,key:`ceow96`}]]),Sr=ir(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),Cr=ir(`scale`,[[`path`,{d:`M12 3v18`,key:`108xh3`}],[`path`,{d:`m19 8 3 8a5 5 0 0 1-6 0zV7`,key:`zcdpyk`}],[`path`,{d:`M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1`,key:`1yorad`}],[`path`,{d:`m5 8 3 8a5 5 0 0 1-6 0zV7`,key:`eua70x`}],[`path`,{d:`M7 21h10`,key:`1b0cd5`}]]),wr=ir(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Tr=ir(`shuffle`,[[`path`,{d:`m18 14 4 4-4 4`,key:`10pe0f`}],[`path`,{d:`m18 2 4 4-4 4`,key:`pucp1d`}],[`path`,{d:`M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22`,key:`1ailkh`}],[`path`,{d:`M2 6h1.972a4 4 0 0 1 3.6 2.2`,key:`km57vx`}],[`path`,{d:`M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45`,key:`os18l9`}]]),Er=ir(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),Dr=ir(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Or=ir(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]);function kr(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=kr(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Ar(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=kr(e))&&(r&&(r+=` `),r+=t);return r}var jr=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Mr=(e,t)=>({classGroupId:e,validator:t}),Nr=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Pr=`-`,Fr=[],Ir=`arbitrary..`,Lr=e=>{let t=Br(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return zr(e);let n=e.split(Pr);return Rr(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?jr(i,t):t:i||Fr}return n[e]||Fr}}},Rr=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=Rr(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(Pr):e.slice(t).join(Pr),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},zr=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?Ir+r:void 0})(),Br=e=>{let{theme:t,classGroups:n}=e;return Vr(n,t)},Vr=(e,t)=>{let n=Nr();for(let r in e){let i=e[r];Hr(i,n,r,t)}return n},Hr=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];Ur(i,t,n,r)}},Ur=(e,t,n,r)=>{if(typeof e==`string`){Wr(e,t,n);return}if(typeof e==`function`){Gr(e,t,n,r);return}Kr(e,t,n,r)},Wr=(e,t,n)=>{let r=e===``?t:qr(t,e);r.classGroupId=n},Gr=(e,t,n,r)=>{if(Jr(e)){Hr(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Mr(n,e))},Kr=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];Hr(o,qr(t,a),n,r)}},qr=(e,t)=>{let n=e,r=t.split(Pr),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=Nr(),n.nextPart.set(t,i)),n=i}return n},Jr=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,Yr=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},Xr=`!`,Zr=`:`,Qr=[],$r=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),ei=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===Zr){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(Xr)?(c=s.slice(0,-1),l=!0):s.startsWith(Xr)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return $r(t,l,c,u)};if(t){let e=t+Zr,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):$r(Qr,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},ti=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},ni=e=>({cache:Yr(e.cacheSize),parseClassName:ei(e),sortModifiers:ti(e),postfixLookupClassGroupIds:ri(e),...Lr(e)}),ri=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},ii=/\s+/,ai=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(ii),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h){l=t+(l.length>0?` `+l:l);continue}if(g=r(p),!g){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+Xr:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let b=i(g,h);for(let e=0;e<b.length;++e){let t=b[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},oi=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=si(n))&&(i&&(i+=` `),i+=r);return i},si=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=si(e[r]))&&(n&&(n+=` `),n+=t);return n},ci=(e,...t)=>{let n,r,i,a,o=o=>(n=ni(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=ai(e,n);return i(e,a),a};return a=o,(...e)=>a(oi(...e))},li=[],ui=e=>{let t=t=>t[e]||li;return t.isThemeGetter=!0,t},di=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,fi=/^\((?:(\w[\w-]*):)?(.+)\)$/i,pi=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,mi=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,hi=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,gi=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,_i=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,vi=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,yi=e=>pi.test(e),bi=e=>!!e&&!Number.isNaN(Number(e)),xi=e=>!!e&&Number.isInteger(Number(e)),Si=e=>e.endsWith(`%`)&&bi(e.slice(0,-1)),Ci=e=>mi.test(e),wi=()=>!0,Ti=e=>hi.test(e)&&!gi.test(e),Ei=()=>!1,Di=e=>_i.test(e),Oi=e=>vi.test(e),ki=e=>!N(e)&&!P(e),Ai=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),ji=e=>Ki(e,Xi,Ei),N=e=>di.test(e),Mi=e=>Ki(e,Zi,Ti),Ni=e=>Ki(e,Qi,bi),Pi=e=>Ki(e,ea,wi),Fi=e=>Ki(e,$i,Ei),Ii=e=>Ki(e,Ji,Ei),Li=e=>Ki(e,Yi,Oi),Ri=e=>Ki(e,ta,Di),P=e=>fi.test(e),zi=e=>qi(e,Zi),Bi=e=>qi(e,$i),Vi=e=>qi(e,Ji),Hi=e=>qi(e,Xi),Ui=e=>qi(e,Yi),Wi=e=>qi(e,ta,!0),Gi=e=>qi(e,ea,!0),Ki=(e,t,n)=>{let r=di.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},qi=(e,t,n=!1)=>{let r=fi.exec(e);return r?r[1]?t(r[1]):n:!1},Ji=e=>e===`position`||e===`percentage`,Yi=e=>e===`image`||e===`url`,Xi=e=>e===`length`||e===`size`||e===`bg-size`,Zi=e=>e===`length`,Qi=e=>e===`number`,$i=e=>e===`family-name`,ea=e=>e===`number`||e===`weight`,ta=e=>e===`shadow`,na=ci(()=>{let e=ui(`color`),t=ui(`font`),n=ui(`text`),r=ui(`font-weight`),i=ui(`tracking`),a=ui(`leading`),o=ui(`breakpoint`),s=ui(`container`),c=ui(`spacing`),l=ui(`radius`),u=ui(`shadow`),d=ui(`inset-shadow`),f=ui(`text-shadow`),p=ui(`drop-shadow`),m=ui(`blur`),h=ui(`perspective`),g=ui(`aspect`),_=ui(`ease`),v=ui(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),P,N],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[P,N,c],T=()=>[yi,`full`,`auto`,...w()],E=()=>[xi,`none`,`subgrid`,P,N],ee=()=>[`auto`,{span:[`full`,xi,P,N]},xi,P,N],D=()=>[xi,`auto`,P,N],te=()=>[`auto`,`min`,`max`,`fr`,P,N],ne=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],re=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],ie=()=>[`auto`,...w()],ae=()=>[yi,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],oe=()=>[yi,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],se=()=>[yi,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],O=()=>[e,P,N],k=()=>[...b(),Vi,Ii,{position:[P,N]}],ce=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],le=()=>[`auto`,`cover`,`contain`,Hi,ji,{size:[P,N]}],ue=()=>[Si,zi,Mi],de=()=>[``,`none`,`full`,l,P,N],fe=()=>[``,bi,zi,Mi],pe=()=>[`solid`,`dashed`,`dotted`,`double`],me=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],A=()=>[bi,Si,Vi,Ii],he=()=>[``,`none`,m,P,N],ge=()=>[`none`,bi,P,N],_e=()=>[`none`,bi,P,N],ve=()=>[bi,P,N],ye=()=>[yi,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[Ci],breakpoint:[Ci],color:[wi],container:[Ci],"drop-shadow":[Ci],ease:[`in`,`out`,`in-out`],font:[ki],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[Ci],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[Ci],shadow:[Ci],spacing:[`px`,bi],text:[Ci],"text-shadow":[Ci],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,yi,N,P,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,P,N]}],"container-named":[Ai],columns:[{columns:[bi,N,P,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[xi,`auto`,P,N]}],basis:[{basis:[yi,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[bi,yi,`auto`,`initial`,`none`,N]}],grow:[{grow:[``,bi,P,N]}],shrink:[{shrink:[``,bi,P,N]}],order:[{order:[xi,`first`,`last`,`none`,P,N]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:ee()}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:ee()}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":te()}],"auto-rows":[{"auto-rows":te()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...ne(),`normal`]}],"justify-items":[{"justify-items":[...re(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...re()]}],"align-content":[{content:[`normal`,...ne()]}],"align-items":[{items:[...re(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...re(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":ne()}],"place-items":[{"place-items":[...re(),`baseline`]}],"place-self":[{"place-self":[`auto`,...re()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:ie()}],mx:[{mx:ie()}],my:[{my:ie()}],ms:[{ms:ie()}],me:[{me:ie()}],mbs:[{mbs:ie()}],mbe:[{mbe:ie()}],mt:[{mt:ie()}],mr:[{mr:ie()}],mb:[{mb:ie()}],ml:[{ml:ie()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:ae()}],"inline-size":[{inline:[`auto`,...oe()]}],"min-inline-size":[{"min-inline":[`auto`,...oe()]}],"max-inline-size":[{"max-inline":[`none`,...oe()]}],"block-size":[{block:[`auto`,...se()]}],"min-block-size":[{"min-block":[`auto`,...se()]}],"max-block-size":[{"max-block":[`none`,...se()]}],w:[{w:[s,`screen`,...ae()]}],"min-w":[{"min-w":[s,`screen`,`none`,...ae()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...ae()]}],h:[{h:[`screen`,`lh`,...ae()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...ae()]}],"max-h":[{"max-h":[`screen`,`lh`,...ae()]}],"font-size":[{text:[`base`,n,zi,Mi]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,Gi,Pi]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,Si,N]}],"font-family":[{font:[Bi,Fi,t]}],"font-features":[{"font-features":[N]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,P,N]}],"line-clamp":[{"line-clamp":[bi,`none`,P,Ni]}],leading:[{leading:[a,...w()]}],"list-image":[{"list-image":[`none`,P,N]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,P,N]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:O()}],"text-color":[{text:O()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...pe(),`wavy`]}],"text-decoration-thickness":[{decoration:[bi,`from-font`,`auto`,P,Mi]}],"text-decoration-color":[{decoration:O()}],"underline-offset":[{"underline-offset":[bi,`auto`,P,N]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"tab-size":[{tab:[xi,P,N]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,P,N]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,P,N]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:k()}],"bg-repeat":[{bg:ce()}],"bg-size":[{bg:le()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},xi,P,N],radial:[``,P,N],conic:[xi,P,N]},Ui,Li]}],"bg-color":[{bg:O()}],"gradient-from-pos":[{from:ue()}],"gradient-via-pos":[{via:ue()}],"gradient-to-pos":[{to:ue()}],"gradient-from":[{from:O()}],"gradient-via":[{via:O()}],"gradient-to":[{to:O()}],rounded:[{rounded:de()}],"rounded-s":[{"rounded-s":de()}],"rounded-e":[{"rounded-e":de()}],"rounded-t":[{"rounded-t":de()}],"rounded-r":[{"rounded-r":de()}],"rounded-b":[{"rounded-b":de()}],"rounded-l":[{"rounded-l":de()}],"rounded-ss":[{"rounded-ss":de()}],"rounded-se":[{"rounded-se":de()}],"rounded-ee":[{"rounded-ee":de()}],"rounded-es":[{"rounded-es":de()}],"rounded-tl":[{"rounded-tl":de()}],"rounded-tr":[{"rounded-tr":de()}],"rounded-br":[{"rounded-br":de()}],"rounded-bl":[{"rounded-bl":de()}],"border-w":[{border:fe()}],"border-w-x":[{"border-x":fe()}],"border-w-y":[{"border-y":fe()}],"border-w-s":[{"border-s":fe()}],"border-w-e":[{"border-e":fe()}],"border-w-bs":[{"border-bs":fe()}],"border-w-be":[{"border-be":fe()}],"border-w-t":[{"border-t":fe()}],"border-w-r":[{"border-r":fe()}],"border-w-b":[{"border-b":fe()}],"border-w-l":[{"border-l":fe()}],"divide-x":[{"divide-x":fe()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":fe()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...pe(),`hidden`,`none`]}],"divide-style":[{divide:[...pe(),`hidden`,`none`]}],"border-color":[{border:O()}],"border-color-x":[{"border-x":O()}],"border-color-y":[{"border-y":O()}],"border-color-s":[{"border-s":O()}],"border-color-e":[{"border-e":O()}],"border-color-bs":[{"border-bs":O()}],"border-color-be":[{"border-be":O()}],"border-color-t":[{"border-t":O()}],"border-color-r":[{"border-r":O()}],"border-color-b":[{"border-b":O()}],"border-color-l":[{"border-l":O()}],"divide-color":[{divide:O()}],"outline-style":[{outline:[...pe(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[bi,P,N]}],"outline-w":[{outline:[``,bi,zi,Mi]}],"outline-color":[{outline:O()}],shadow:[{shadow:[``,`none`,u,Wi,Ri]}],"shadow-color":[{shadow:O()}],"inset-shadow":[{"inset-shadow":[`none`,d,Wi,Ri]}],"inset-shadow-color":[{"inset-shadow":O()}],"ring-w":[{ring:fe()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:O()}],"ring-offset-w":[{"ring-offset":[bi,Mi]}],"ring-offset-color":[{"ring-offset":O()}],"inset-ring-w":[{"inset-ring":fe()}],"inset-ring-color":[{"inset-ring":O()}],"text-shadow":[{"text-shadow":[`none`,f,Wi,Ri]}],"text-shadow-color":[{"text-shadow":O()}],opacity:[{opacity:[bi,P,N]}],"mix-blend":[{"mix-blend":[...me(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":me()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[bi]}],"mask-image-linear-from-pos":[{"mask-linear-from":A()}],"mask-image-linear-to-pos":[{"mask-linear-to":A()}],"mask-image-linear-from-color":[{"mask-linear-from":O()}],"mask-image-linear-to-color":[{"mask-linear-to":O()}],"mask-image-t-from-pos":[{"mask-t-from":A()}],"mask-image-t-to-pos":[{"mask-t-to":A()}],"mask-image-t-from-color":[{"mask-t-from":O()}],"mask-image-t-to-color":[{"mask-t-to":O()}],"mask-image-r-from-pos":[{"mask-r-from":A()}],"mask-image-r-to-pos":[{"mask-r-to":A()}],"mask-image-r-from-color":[{"mask-r-from":O()}],"mask-image-r-to-color":[{"mask-r-to":O()}],"mask-image-b-from-pos":[{"mask-b-from":A()}],"mask-image-b-to-pos":[{"mask-b-to":A()}],"mask-image-b-from-color":[{"mask-b-from":O()}],"mask-image-b-to-color":[{"mask-b-to":O()}],"mask-image-l-from-pos":[{"mask-l-from":A()}],"mask-image-l-to-pos":[{"mask-l-to":A()}],"mask-image-l-from-color":[{"mask-l-from":O()}],"mask-image-l-to-color":[{"mask-l-to":O()}],"mask-image-x-from-pos":[{"mask-x-from":A()}],"mask-image-x-to-pos":[{"mask-x-to":A()}],"mask-image-x-from-color":[{"mask-x-from":O()}],"mask-image-x-to-color":[{"mask-x-to":O()}],"mask-image-y-from-pos":[{"mask-y-from":A()}],"mask-image-y-to-pos":[{"mask-y-to":A()}],"mask-image-y-from-color":[{"mask-y-from":O()}],"mask-image-y-to-color":[{"mask-y-to":O()}],"mask-image-radial":[{"mask-radial":[P,N]}],"mask-image-radial-from-pos":[{"mask-radial-from":A()}],"mask-image-radial-to-pos":[{"mask-radial-to":A()}],"mask-image-radial-from-color":[{"mask-radial-from":O()}],"mask-image-radial-to-color":[{"mask-radial-to":O()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[bi]}],"mask-image-conic-from-pos":[{"mask-conic-from":A()}],"mask-image-conic-to-pos":[{"mask-conic-to":A()}],"mask-image-conic-from-color":[{"mask-conic-from":O()}],"mask-image-conic-to-color":[{"mask-conic-to":O()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:k()}],"mask-repeat":[{mask:ce()}],"mask-size":[{mask:le()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,P,N]}],filter:[{filter:[``,`none`,P,N]}],blur:[{blur:he()}],brightness:[{brightness:[bi,P,N]}],contrast:[{contrast:[bi,P,N]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,Wi,Ri]}],"drop-shadow-color":[{"drop-shadow":O()}],grayscale:[{grayscale:[``,bi,P,N]}],"hue-rotate":[{"hue-rotate":[bi,P,N]}],invert:[{invert:[``,bi,P,N]}],saturate:[{saturate:[bi,P,N]}],sepia:[{sepia:[``,bi,P,N]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,P,N]}],"backdrop-blur":[{"backdrop-blur":he()}],"backdrop-brightness":[{"backdrop-brightness":[bi,P,N]}],"backdrop-contrast":[{"backdrop-contrast":[bi,P,N]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,bi,P,N]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[bi,P,N]}],"backdrop-invert":[{"backdrop-invert":[``,bi,P,N]}],"backdrop-opacity":[{"backdrop-opacity":[bi,P,N]}],"backdrop-saturate":[{"backdrop-saturate":[bi,P,N]}],"backdrop-sepia":[{"backdrop-sepia":[``,bi,P,N]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,P,N]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[bi,`initial`,P,N]}],ease:[{ease:[`linear`,`initial`,_,P,N]}],delay:[{delay:[bi,P,N]}],animate:[{animate:[`none`,v,P,N]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,P,N]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:ge()}],"rotate-x":[{"rotate-x":ge()}],"rotate-y":[{"rotate-y":ge()}],"rotate-z":[{"rotate-z":ge()}],scale:[{scale:_e()}],"scale-x":[{"scale-x":_e()}],"scale-y":[{"scale-y":_e()}],"scale-z":[{"scale-z":_e()}],"scale-3d":[`scale-3d`],skew:[{skew:ve()}],"skew-x":[{"skew-x":ve()}],"skew-y":[{"skew-y":ve()}],transform:[{transform:[P,N,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:ye()}],"translate-x":[{"translate-x":ye()}],"translate-y":[{"translate-y":ye()}],"translate-z":[{"translate-z":ye()}],"translate-none":[`translate-none`],zoom:[{zoom:[xi,P,N]}],accent:[{accent:O()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:O()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,P,N]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":O()}],"scrollbar-track-color":[{"scrollbar-track":O()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,P,N]}],fill:[{fill:[`none`,...O()]}],"stroke-w":[{stroke:[bi,zi,Mi,Ni]}],stroke:[{stroke:[`none`,...O()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function ra(...e){return na(Ar(e))}function ia(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function aa(e){let t=Math.floor(e/60),n=e%60;return`${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}`}var oa=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},sa=(e=>e?oa(e):oa),ca=e=>e;function la(e,t=ca){let n=S.useSyncExternalStore(e.subscribe,S.useCallback(()=>t(e.getState()),[e,t]),S.useCallback(()=>t(e.getInitialState()),[e,t]));return S.useDebugValue(n),n}var ua=e=>{let t=sa(e),n=e=>la(t,e);return Object.assign(n,t),n},da=(e=>e?ua(e):ua),fa=`ham-train:font-size`,pa=[`sm`,`md`,`lg`];function ma(e){document.documentElement.setAttribute(`data-font`,e)}var ha=localStorage.getItem(fa)??`md`;ma(ha);var ga=da((e,t)=>({fontSize:ha,setFontSize:t=>{ma(t),localStorage.setItem(fa,t),e({fontSize:t})},cycleFontSize:()=>{let e=t().fontSize,n=pa[(pa.indexOf(e)+1)%pa.length];t().setFontSize(n)}})),_a=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),F=o(((e,t)=>{t.exports=_a()}))(),va={sm:`小`,md:`中`,lg:`大`};function ya(){let{fontSize:e,setFontSize:t}=ga();return(0,F.jsx)(`div`,{className:`flex items-center gap-0.5 rounded-lg border bg-background/80 px-1 py-0.5`,children:[`sm`,`md`,`lg`].map(n=>(0,F.jsx)(`button`,{onClick:()=>t(n),className:ra(`w-6 h-6 rounded text-xs font-medium transition-colors`,e===n?`bg-primary text-primary-foreground`:`text-muted-foreground hover:text-foreground`),children:va[n]},n))})}var ba=[{to:`/`,label:`首页`,Icon:br},{to:`/practice`,label:`练习`,Icon:sr},{to:`/exam`,label:`考试`,Icon:gr},{to:`/errors`,label:`错题本`,Icon:pr},{to:`/review`,label:`复习`,Icon:or},{to:`/stats`,label:`统计`,Icon:lr},{to:`/knowledge`,label:`知识`,Icon:cr}];function xa(){let[e,t]=(0,S.useState)(!1);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`nav`,{className:`fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur`,children:(0,F.jsxs)(`div`,{className:`mx-auto flex max-w-2xl items-center`,children:[ba.map(({to:e,label:t,Icon:n})=>(0,F.jsxs)(jn,{to:e,end:e===`/`,className:({isActive:e})=>ra(`flex flex-1 flex-col items-center gap-1 py-2 text-xs transition-colors`,e?`text-primary`:`text-muted-foreground hover:text-foreground`),children:[(0,F.jsx)(n,{className:`h-5 w-5`}),t]},e)),(0,F.jsxs)(`button`,{onClick:()=>t(!0),className:`flex flex-col items-center gap-1 px-2 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors`,"aria-label":`设置`,children:[(0,F.jsx)(wr,{className:`h-5 w-5`}),(0,F.jsx)(`span`,{children:`设置`})]})]})}),e&&(0,F.jsx)(`div`,{className:`fixed inset-0 z-[60] flex items-end justify-center bg-black/40`,onClick:()=>t(!1),children:(0,F.jsxs)(`div`,{className:`w-full max-w-md rounded-t-2xl bg-background border-t border-x p-6 pb-10 shadow-xl`,onClick:e=>e.stopPropagation(),children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between mb-5`,children:[(0,F.jsx)(`span`,{className:`font-semibold text-base`,children:`显示设置`}),(0,F.jsx)(`button`,{onClick:()=>t(!1),className:`text-muted-foreground hover:text-foreground`,children:(0,F.jsx)(Dr,{className:`h-5 w-5`})})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:`字体大小`}),(0,F.jsx)(ya,{})]})]})})]})}function Sa({name:e,color:t,total:n,correct:r,onClick:i}){let a=n>0?Math.round(r/n*100):0;return(0,F.jsxs)(`button`,{onClick:i,className:`flex flex-col gap-2 rounded-xl border bg-card p-4 text-left shadow-sm transition-all hover:shadow-md active:scale-95`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`span`,{className:ra(`h-3 w-3 rounded-full`,t)}),(0,F.jsx)(`span`,{className:`text-sm font-semibold`,children:e})]}),(0,F.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[r,`/`,n,` 题已掌握`]}),(0,F.jsx)(`div`,{className:`h-1.5 w-full overflow-hidden rounded-full bg-muted`,children:(0,F.jsx)(`div`,{className:ra(`h-full rounded-full transition-all`,t),style:{width:`${a}%`}})}),(0,F.jsxs)(`div`,{className:`text-right text-xs font-medium`,children:[a,`%`]})]})}var Ca=l(o(((e,t)=>{((n,r)=>{typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).Dexie=r()})(e,function(){var e=function(t,n){return(e=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(t,n)},t=function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function n(e,t,n){if(n||arguments.length===2)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||((r||=Array.prototype.slice.call(t,0,i))[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var r=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,i=Object.keys,a=Array.isArray;function o(e,t){return typeof t==`object`&&i(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>`u`||r.Promise||(r.Promise=Promise);var s=Object.getPrototypeOf,c={}.hasOwnProperty;function l(e,t){return c.call(e,t)}function u(e,t){typeof t==`function`&&(t=t(s(e))),(typeof Reflect>`u`?i:Reflect.ownKeys)(t).forEach(function(n){f(e,n,t[n])})}var d=Object.defineProperty;function f(e,t,n,r){d(e,t,o(n&&l(n,`get`)&&typeof n.get==`function`?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function p(e){return{from:function(t){return e.prototype=Object.create(t.prototype),f(e.prototype,`constructor`,e),{extend:u.bind(null,e.prototype)}}}}var m=Object.getOwnPropertyDescriptor,h=[].slice;function g(e,t,n){return h.call(e,t,n)}function _(e,t){return t(e)}function v(e){if(!e)throw Error(`Assertion Failed`)}function y(e){r.setImmediate?setImmediate(e):setTimeout(e,0)}function b(e,t){if(typeof t==`string`&&l(e,t))return e[t];if(!t)return e;if(typeof t!=`string`){for(var n=[],r=0,i=t.length;r<i;++r){var a=b(e,t[r]);n.push(a)}return n}var o,s=t.indexOf(`.`);return s===-1||(o=e[t.substr(0,s)])==null?void 0:b(o,t.substr(s+1))}function x(e,t,n){if(e&&t!==void 0&&!(`isFrozen`in Object&&Object.isFrozen(e)))if(typeof t!=`string`&&`length`in t){v(typeof n!=`string`&&`length`in n);for(var r=0,i=t.length;r<i;++r)x(e,t[r],n[r])}else{var o=t.indexOf(`.`);if(o!==-1){var s=t.substr(0,o),o=t.substr(o+1);if(o===``)n===void 0?a(e)&&!isNaN(parseInt(s))?e.splice(s,1):delete e[s]:e[s]=n;else{var c=e[s];if(!c||!l(e,s)){if(n===void 0)return;c=e[s]={}}x(c,o,n)}}else n===void 0?a(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function S(e){var t,n={};for(t in e)l(e,t)&&(n[t]=e[t]);return n}var C=[].concat;function w(e){return C.apply([],e)}var T=`BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey`.split(`,`).concat(w([8,16,32,64].map(function(e){return[`Int`,`Uint`,`Float`].map(function(t){return t+e+`Array`})}))).filter(function(e){return r[e]}),E=new Set(T.map(function(e){return r[e]})),ee=null;function D(e){return ee=new WeakMap,e=function e(t){if(!t||typeof t!=`object`)return t;var n=ee.get(t);if(n)return n;if(a(t)){n=[],ee.set(t,n);for(var r=0,i=t.length;r<i;++r)n.push(e(t[r]))}else if(E.has(t.constructor))n=t;else{var o,c=s(t);for(o in n=c===Object.prototype?{}:Object.create(c),ee.set(t,n),t)l(t,o)&&(n[o]=e(t[o]))}return n}(e),ee=null,e}var te={}.toString;function ne(e){return te.call(e).slice(8,-1)}var re=typeof Symbol<`u`?Symbol.iterator:`@@iterator`,ie=typeof re==`symbol`?function(e){var t;return e!=null&&(t=e[re])&&t.apply(e)}:function(){return null};function ae(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var oe={};function se(e){var t,n,r,i;if(arguments.length===1){if(a(e))return e.slice();if(this===oe&&typeof e==`string`)return[e];if(i=ie(e))for(n=[];!(r=i.next()).done;)n.push(r.value);else{if(e==null||typeof(t=e.length)!=`number`)return[e];for(n=Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=Array(t);t--;)n[t]=arguments[t];return n}var O=typeof Symbol<`u`?function(e){return e[Symbol.toStringTag]===`AsyncFunction`}:function(){return!1},T=[`Unknown`,`Constraint`,`Data`,`TransactionInactive`,`ReadOnly`,`Version`,`NotFound`,`InvalidState`,`InvalidAccess`,`Abort`,`Timeout`,`QuotaExceeded`,`Syntax`,`DataClone`],k=[`Modify`,`Bulk`,`OpenFailed`,`VersionChange`,`Schema`,`Upgrade`,`InvalidTable`,`MissingAPI`,`NoSuchDatabase`,`InvalidArgument`,`SubTransaction`,`Unsupported`,`Internal`,`DatabaseClosed`,`PrematureCommit`,`ForeignAwait`].concat(T),ce={VersionChanged:`Database version changed by other database connection`,DatabaseClosed:`Database has been closed`,Abort:`Transaction aborted`,TransactionInactive:`Transaction has already completed or failed`,MissingAPI:`IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb`};function le(e,t){this.name=e,this.message=t}function ue(e,t){return e+`. Errors: `+Object.keys(t).map(function(e){return t[e].toString()}).filter(function(e,t,n){return n.indexOf(e)===t}).join(`
`)}function de(e,t,n,r){this.failures=t,this.failedKeys=r,this.successCount=n,this.message=ue(e,t)}function fe(e,t){this.name=`BulkError`,this.failures=Object.keys(t).map(function(e){return t[e]}),this.failuresByPos=t,this.message=ue(e,this.failures)}p(le).from(Error).extend({toString:function(){return this.name+`: `+this.message}}),p(de).from(le),p(fe).from(le);var pe=k.reduce(function(e,t){return e[t]=t+`Error`,e},{}),me=le,A=k.reduce(function(e,t){var n=t+`Error`;function r(e,r){this.name=n,e?typeof e==`string`?(this.message=`${e}${r?`
 `+r:``}`,this.inner=r||null):typeof e==`object`&&(this.message=`${e.name} ${e.message}`,this.inner=e):(this.message=ce[t]||n,this.inner=null)}return p(r).from(me),e[t]=r,e},{}),he=(A.Syntax=SyntaxError,A.Type=TypeError,A.Range=RangeError,T.reduce(function(e,t){return e[t+`Error`]=A[t],e},{}));T=k.reduce(function(e,t){return[`Syntax`,`Type`,`Range`].indexOf(t)===-1&&(e[t+`Error`]=A[t]),e},{});function ge(){}function _e(e){return e}function ve(e,t){return e==null||e===_e?t:function(n){return t(e(n))}}function ye(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function be(e,t){return e===ge?t:function(){var n=e.apply(this,arguments),r=(n!==void 0&&(arguments[0]=n),this.onsuccess),i=this.onerror,a=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?ye(r,this.onsuccess):r),i&&(this.onerror=this.onerror?ye(i,this.onerror):i),a===void 0?n:a}}function xe(e,t){return e===ge?t:function(){e.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?ye(n,this.onsuccess):n),r&&(this.onerror=this.onerror?ye(r,this.onerror):r)}}function Se(e,t){return e===ge?t:function(n){var r=e.apply(this,arguments),n=(o(n,r),this.onsuccess),i=this.onerror,a=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return n&&(this.onsuccess=this.onsuccess?ye(n,this.onsuccess):n),i&&(this.onerror=this.onerror?ye(i,this.onerror):i),r===void 0?a===void 0?void 0:a:o(r,a)}}function Ce(e,t){return e===ge?t:function(){return!1!==t.apply(this,arguments)&&e.apply(this,arguments)}}function we(e,t){return e===ge?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then==`function`){for(var r=this,i=arguments.length,a=Array(i);i--;)a[i]=arguments[i];return n.then(function(){return t.apply(r,a)})}return t.apply(this,arguments)}}T.ModifyError=de,T.DexieError=le,T.BulkError=fe;var Te=typeof location<`u`&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ee(e){Te=e}var De={},Oe=100,ke=typeof Promise>`u`?[]:(k=Promise.resolve(),typeof crypto<`u`&&crypto.subtle?[ke=crypto.subtle.digest(`SHA-512`,new Uint8Array([0])),s(ke),k]:[k,s(k),k]),k=ke[0],Ae=ke[1],Ae=Ae&&Ae.then,je=k&&k.constructor,Me=!!ke[2],Ne=function(e,t){Be.push([e,t]),Fe&&=(queueMicrotask(Ye),!1)},Pe=!0,Fe=!0,Ie=[],Le=[],Re=_e,ze={id:`global`,global:!0,ref:0,unhandleds:[],onunhandled:ge,pgp:!1,env:{},finalize:ge},j=ze,Be=[],Ve=0,He=[];function M(e){if(typeof this!=`object`)throw TypeError(`Promises must be constructed via new`);this._listeners=[],this._lib=!1;var t=this._PSD=j;if(typeof e!=`function`){if(e!==De)throw TypeError(`Not a function`);this._state=arguments[1],this._value=arguments[2],!1===this._state&&Ge(this,this._value)}else this._state=null,this._value=null,++t.ref,function e(t,n){try{n(function(n){if(t._state===null){if(n===t)throw TypeError(`A promise cannot be resolved with itself.`);var r=t._lib&&Xe();n&&typeof n.then==`function`?e(t,function(e,t){n instanceof M?n._then(e,t):n.then(e,t)}):(t._state=!0,t._value=n,Ke(t)),r&&Ze()}},Ge.bind(null,t))}catch(e){Ge(t,e)}}(this,e)}var Ue={get:function(){var e=j,t=at;function n(n,r){var i=this,a=!e.global&&(e!==j||t!==at),o=a&&!lt(),s=new M(function(t,s){qe(i,new We(ht(n,e,a,o),ht(r,e,a,o),t,s,e))});return this._consoleTask&&(s._consoleTask=this._consoleTask),s}return n.prototype=De,n},set:function(e){f(this,`then`,e&&e.prototype===De?Ue:{get:function(){return e},set:Ue.set})}};function We(e,t,n,r,i){this.onFulfilled=typeof e==`function`?e:null,this.onRejected=typeof t==`function`?t:null,this.resolve=n,this.reject=r,this.psd=i}function Ge(e,t){var n,r;Le.push(t),e._state===null&&(n=e._lib&&Xe(),t=Re(t),e._state=!1,e._value=t,r=e,Ie.some(function(e){return e._value===r._value})||Ie.push(r),Ke(e),n)&&Ze()}function Ke(e){var t=e._listeners;e._listeners=[];for(var n=0,r=t.length;n<r;++n)qe(e,t[n]);var i=e._PSD;--i.ref||i.finalize(),Ve===0&&(++Ve,Ne(function(){--Ve==0&&Qe()},[]))}function qe(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Ve,Ne(Je,[n,e,t])}}function Je(e,t,n){try{var r,i=t._value;!t._state&&Le.length&&(Le=[]),r=Te&&t._consoleTask?t._consoleTask.run(function(){return e(i)}):e(i),t._state||Le.indexOf(i)!==-1||(e=>{for(var t=Ie.length;t;)if(Ie[--t]._value===e._value)return Ie.splice(t,1)})(t),n.resolve(r)}catch(e){n.reject(e)}finally{--Ve==0&&Qe(),--n.psd.ref||n.psd.finalize()}}function Ye(){mt(ze,function(){Xe()&&Ze()})}function Xe(){var e=Pe;return Fe=Pe=!1,e}function Ze(){var e,t,n;do for(;0<Be.length;)for(e=Be,Be=[],n=e.length,t=0;t<n;++t){var r=e[t];r[0].apply(null,r[1])}while(0<Be.length);Fe=Pe=!0}function Qe(){for(var e=Ie,t=(Ie=[],e.forEach(function(e){e._PSD.onunhandled.call(null,e._value,e)}),He.slice(0)),n=t.length;n;)t[--n]()}function $e(e){return new M(De,!1,e)}function et(e,t){var n=j;return function(){var r=Xe(),i=j;try{return ft(n,!0),e.apply(this,arguments)}catch(e){t&&t(e)}finally{ft(i,!1),r&&Ze()}}}u(M.prototype,{then:Ue,_then:function(e,t){qe(this,new We(null,null,e,t,j))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t==`function`?this.then(null,function(e){return(e instanceof t?n:$e)(e)}):this.then(null,function(e){return(e&&e.name===t?n:$e)(e)}))},finally:function(e){return this.then(function(t){return M.resolve(e()).then(function(){return t})},function(t){return M.resolve(e()).then(function(){return $e(t)})})},timeout:function(e,t){var n=this;return e<1/0?new M(function(r,i){var a=setTimeout(function(){return i(new A.Timeout(t))},e);n.then(r,i).finally(clearTimeout.bind(null,a))}):this}}),typeof Symbol<`u`&&Symbol.toStringTag&&f(M.prototype,Symbol.toStringTag,`Dexie.Promise`),ze.env=pt(),u(M,{all:function(){var e=se.apply(null,arguments).map(ut);return new M(function(t,n){e.length===0&&t([]);var r=e.length;e.forEach(function(i,a){return M.resolve(i).then(function(n){e[a]=n,--r||t(e)},n)})})},resolve:function(e){return e instanceof M?e:e&&typeof e.then==`function`?new M(function(t,n){e.then(t,n)}):new M(De,!0,e)},reject:$e,race:function(){var e=se.apply(null,arguments).map(ut);return new M(function(t,n){e.map(function(e){return M.resolve(e).then(t,n)})})},PSD:{get:function(){return j},set:function(e){return j=e}},totalEchoes:{get:function(){return at}},newPSD:st,usePSD:mt,scheduler:{get:function(){return Ne},set:function(e){Ne=e}},rejectionMapper:{get:function(){return Re},set:function(e){Re=e}},follow:function(e,t){return new M(function(n,r){return st(function(t,n){var r=j;r.unhandleds=[],r.onunhandled=n,r.finalize=ye(function(){var e,r=this;e=function(){r.unhandleds.length===0?t():n(r.unhandleds[0])},He.push(function t(){e(),He.splice(He.indexOf(t),1)}),++Ve,Ne(function(){--Ve==0&&Qe()},[])},r.finalize),e()},t,n,r)})}}),je&&(je.allSettled&&f(M,`allSettled`,function(){var e=se.apply(null,arguments).map(ut);return new M(function(t){e.length===0&&t([]);var n=e.length,r=Array(n);e.forEach(function(e,i){return M.resolve(e).then(function(e){return r[i]={status:`fulfilled`,value:e}},function(e){return r[i]={status:`rejected`,reason:e}}).then(function(){return--n||t(r)})})})}),je.any&&typeof AggregateError<`u`&&f(M,`any`,function(){var e=se.apply(null,arguments).map(ut);return new M(function(t,n){e.length===0&&n(AggregateError([]));var r=e.length,i=Array(r);e.forEach(function(e,a){return M.resolve(e).then(function(e){return t(e)},function(e){i[a]=e,--r||n(AggregateError(i))})})})}),je.withResolvers)&&(M.withResolvers=je.withResolvers);var tt={awaits:0,echoes:0,id:0},nt=0,rt=[],it=0,at=0,ot=0;function st(e,t,n,r){var i=j,a=Object.create(i),t=(a.parent=i,a.ref=0,a.global=!1,a.id=++ot,ze.env,a.env=Me?{Promise:M,PromiseProp:{value:M,configurable:!0,writable:!0},all:M.all,race:M.race,allSettled:M.allSettled,any:M.any,resolve:M.resolve,reject:M.reject}:{},t&&o(a,t),++i.ref,a.finalize=function(){--this.parent.ref||this.parent.finalize()},mt(a,e,n,r));return a.ref===0&&a.finalize(),t}function ct(){return tt.id||=++nt,++tt.awaits,tt.echoes+=Oe,tt.id}function lt(){return!!tt.awaits&&(--tt.awaits==0&&(tt.id=0),tt.echoes=tt.awaits*Oe,!0)}function ut(e){return tt.echoes&&e&&e.constructor===je?(ct(),e.then(function(e){return lt(),e},function(e){return lt(),_t(e)})):e}function dt(){var e=rt[rt.length-1];rt.pop(),ft(e,!1)}function ft(e,t){var n,i,a=j;(t?!tt.echoes||it++&&e===j:!it||--it&&e===j)||queueMicrotask(t?function(e){++at,tt.echoes&&--tt.echoes!=0||(tt.echoes=tt.awaits=tt.id=0),rt.push(j),ft(e,!0)}.bind(null,e):dt),e!==j&&(j=e,a===ze&&(ze.env=pt()),Me)&&(n=ze.env.Promise,i=e.env,a.global||e.global)&&(Object.defineProperty(r,"Promise",i.PromiseProp),n.all=i.all,n.race=i.race,n.resolve=i.resolve,n.reject=i.reject,i.allSettled&&(n.allSettled=i.allSettled),i.any)&&(n.any=i.any)}function pt(){var e=r.Promise;return Me?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(r,`Promise`),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function mt(e,t,n,r,i){var a=j;try{return ft(e,!0),t(n,r,i)}finally{ft(a,!1)}}function ht(e,t,n,r){return typeof e==`function`?function(){var i=j;n&&ct(),ft(t,!0);try{return e.apply(this,arguments)}finally{ft(i,!1),r&&queueMicrotask(lt)}}:e}function gt(e){Promise===je&&tt.echoes===0?it===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(``+Ae).indexOf(`[native code]`)===-1&&(ct=lt=ge);var _t=M.reject,vt=`￿`,yt=`Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.`,bt=`String expected.`,xt=`__dbnames`,St=`readonly`,Ct=`readwrite`;function wt(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Tt={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Et(e){return typeof e!=`string`||/\./.test(e)?function(e){return e}:function(t){return t[e]===void 0&&e in t&&delete(t=D(t))[e],t}}function Dt(){throw A.Type(`Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.`)}function Ot(e,t){try{var n=kt(e),r=kt(t);if(n!==r)return n===`Array`?1:r===`Array`?-1:n===`binary`?1:r===`binary`?-1:n===`string`?1:r===`string`?-1:n===`Date`?1:r===`Date`?-1:NaN;switch(n){case`number`:case`Date`:case`string`:return t<e?1:e<t?-1:0;case`binary`:for(var i=At(e),a=At(t),o=i.length,s=a.length,c=o<s?o:s,l=0;l<c;++l)if(i[l]!==a[l])return i[l]<a[l]?-1:1;return o===s?0:o<s?-1:1;case`Array`:for(var u=e,d=t,f=u.length,p=d.length,m=f<p?f:p,h=0;h<m;++h){var g=Ot(u[h],d[h]);if(g!==0)return g}return f===p?0:f<p?-1:1}}catch{}return NaN}function kt(e){var t=typeof e;return t==`object`&&(ArrayBuffer.isView(e)||(t=ne(e))===`ArrayBuffer`)?`binary`:t}function At(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function jt(e,t,n){var r=e.schema.yProps;return r?(t&&0<n.numFailures&&(t=t.filter(function(e,t){return!n.failures[t]})),Promise.all(r.map(function(n){return n=n.updatesTable,t?e.db.table(n).where(`k`).anyOf(t).delete():e.db.table(n).clear()})).then(function(){return n})):n}Nt.prototype.execute=function(e){var t=this[`@@propmod`];if(t.add!==void 0){var r=t.add;if(a(r))return n(n([],a(e)?e:[],!0),r,!0).sort();if(typeof r==`number`)return(Number(e)||0)+r;if(typeof r==`bigint`)try{return BigInt(e)+r}catch{return BigInt(0)+r}throw TypeError(`Invalid term ${r}`)}if(t.remove!==void 0){var i=t.remove;if(a(i))return a(e)?e.filter(function(e){return!i.includes(e)}).sort():[];if(typeof i==`number`)return Number(e)-i;if(typeof i==`bigint`)try{return BigInt(e)-i}catch{return BigInt(0)-i}throw TypeError(`Invalid subtrahend ${i}`)}return r=(r=t.replacePrefix)?.[0],r&&typeof e==`string`&&e.startsWith(r)?t.replacePrefix[1]+e.substring(r.length):e};var Mt=Nt;function Nt(e){this[`@@propmod`]=e}function Pt(e,t){for(var n=i(t),r=n.length,a=!1,o=0;o<r;++o){var s=n[o],c=t[s],l=b(e,s);c instanceof Mt?(x(e,s,c.execute(l)),a=!0):l!==c&&(x(e,s,c),a=!0)}return a}It.prototype._trans=function(e,t,n){var r=this._tx||j.trans,i=this.name,a=Te&&typeof console<`u`&&console.createTask&&console.createTask(`Dexie: ${e===`readonly`?`read`:`write`} ${this.name}`);function o(e,n,r){if(r.schema[i])return t(r.idbtrans,r);throw new A.NotFound(`Table `+i+` not part of transaction`)}var s=Xe();try{var c=r&&r.db._novip===this.db._novip?r===j.trans?r._promise(e,o,n):st(function(){return r._promise(e,o,n)},{trans:r,transless:j.transless||j}):function e(t,n,r,i){if(t.idbdb&&(t._state.openComplete||j.letThrough||t._vip)){var a=t._createTransaction(n,r,t._dbSchema);try{a.create(),t._state.PR1398_maxLoop=3}catch(a){return a.name===pe.InvalidState&&t.isOpen()&&0<--t._state.PR1398_maxLoop?(console.warn(`Dexie: Need to reopen db`),t.close({disableAutoOpen:!1}),t.open().then(function(){return e(t,n,r,i)})):_t(a)}return a._promise(n,function(e,t){return st(function(){return j.trans=a,i(e,t,a)})}).then(function(e){if(n===`readwrite`)try{a.idbtrans.commit()}catch{}return n===`readonly`?e:a._completion.then(function(){return e})})}if(t._state.openComplete)return _t(new A.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return _t(new A.DatabaseClosed);t.open().catch(ge)}return t._state.dbReadyPromise.then(function(){return e(t,n,r,i)})}(this.db,e,[this.name],o);return a&&(c._consoleTask=a,c=c.catch(function(e){return console.trace(e),_t(e)})),c}finally{s&&Ze()}},It.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?_t(new A.Type(`Invalid argument to Table.get()`)):this._trans(`readonly`,function(t){return n.core.get({trans:t,key:e}).then(function(e){return n.hook.reading.fire(e)})}).then(t)},It.prototype.where=function(e){if(typeof e==`string`)return new this.db.WhereClause(this,e);if(a(e))return new this.db.WhereClause(this,`[${e.join(`+`)}]`);var t=i(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(e){if(e.compound&&t.every(function(t){return 0<=e.keyPath.indexOf(t)})){for(var n=0;n<t.length;++n)if(t.indexOf(e.keyPath[n])===-1)return!1;return!0}return!1}).sort(function(e,t){return e.keyPath.length-t.keyPath.length})[0];if(n&&this.db._maxKey!==vt)return s=n.keyPath.slice(0,t.length),this.where(s).equals(s.map(function(t){return e[t]}));!n&&Te&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join(`+`)}]`);var r=this.schema.idxByName;function o(e,t){return Ot(e,t)===0}var s=t.reduce(function(t,n){var i=t[0],t=t[1],s=r[n],c=e[n];return[i||s,i||!s?wt(t,s&&s.multi?function(e){return e=b(e,n),a(e)&&e.some(function(e){return o(c,e)})}:function(e){return o(c,b(e,n))}):t]},[null,null]),c=s[0],s=s[1];return c?this.where(c.name).equals(e[c.keyPath]).filter(s):n?this.filter(s):this.where(t).equals(``)},It.prototype.filter=function(e){return this.toCollection().and(e)},It.prototype.count=function(e){return this.toCollection().count(e)},It.prototype.offset=function(e){return this.toCollection().offset(e)},It.prototype.limit=function(e){return this.toCollection().limit(e)},It.prototype.each=function(e){return this.toCollection().each(e)},It.prototype.toArray=function(e){return this.toCollection().toArray(e)},It.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},It.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,a(e)?`[${e.join(`+`)}]`:e))},It.prototype.reverse=function(){return this.toCollection().reverse()},It.prototype.mapToClass=function(t){for(var n=this.db,r=this.name,i=((this.schema.mappedClass=t).prototype instanceof Dt&&(t=(t=>{var i=s,a=t;if(typeof a!=`function`&&a!==null)throw TypeError(`Class extends value `+String(a)+` is not a constructor or null`);function o(){this.constructor=i}function s(){return t!==null&&t.apply(this,arguments)||this}return e(i,a),i.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o),Object.defineProperty(s.prototype,"db",{get:function(){return n},enumerable:!1,configurable:!0}),s.prototype.table=function(){return r},s})(t)),new Set),a=t.prototype;a;a=s(a))Object.getOwnPropertyNames(a).forEach(function(e){return i.add(e)});function o(e){if(!e)return e;var n,r=Object.create(t.prototype);for(n in e)if(!i.has(n))try{r[n]=e[n]}catch{}return r}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=o,this.hook(`reading`,o),t},It.prototype.defineClass=function(){return this.mapToClass(function(e){o(this,e)})},It.prototype.add=function(e,t){var n=this,r=this.schema.primKey,i=r.auto,a=r.keyPath,o=e;return a&&i&&(o=Et(a)(e)),this._trans(`readwrite`,function(e){return n.core.mutate({trans:e,type:`add`,keys:t==null?null:[t],values:[o]})}).then(function(e){return e.numFailures?M.reject(e.failures[0]):e.lastResult}).then(function(t){if(a)try{x(e,a,t)}catch{}return t})},It.prototype.upsert=function(e,t){var n=this,r=this.schema.primKey.keyPath;return this._trans(`readwrite`,function(i){return n.core.get({trans:i,key:e}).then(function(a){var o=a??{};return Pt(o,t),r&&x(o,r,e),n.core.mutate({trans:i,type:`put`,values:[o],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(e){return e.numFailures?M.reject(e.failures[0]):!!a})})})},It.prototype.update=function(e,t){return typeof e!=`object`||a(e)?this.where(`:id`).equals(e).modify(t):(e=b(e,this.schema.primKey.keyPath))===void 0?_t(new A.InvalidArgument(`Given object does not contain its primary key`)):this.where(`:id`).equals(e).modify(t)},It.prototype.put=function(e,t){var n=this,r=this.schema.primKey,i=r.auto,a=r.keyPath,o=e;return a&&i&&(o=Et(a)(e)),this._trans(`readwrite`,function(e){return n.core.mutate({trans:e,type:`put`,values:[o],keys:t==null?null:[t]})}).then(function(e){return e.numFailures?M.reject(e.failures[0]):e.lastResult}).then(function(t){if(a)try{x(e,a,t)}catch{}return t})},It.prototype.delete=function(e){var t=this;return this._trans(`readwrite`,function(n){return t.core.mutate({trans:n,type:`delete`,keys:[e]}).then(function(n){return jt(t,[e],n)}).then(function(e){return e.numFailures?M.reject(e.failures[0]):void 0})})},It.prototype.clear=function(){var e=this;return this._trans(`readwrite`,function(t){return e.core.mutate({trans:t,type:`deleteRange`,range:Tt}).then(function(t){return jt(e,null,t)})}).then(function(e){return e.numFailures?M.reject(e.failures[0]):void 0})},It.prototype.bulkGet=function(e){var t=this;return this._trans(`readonly`,function(n){return t.core.getMany({keys:e,trans:n}).then(function(e){return e.map(function(e){return t.hook.reading.fire(e)})})})},It.prototype.bulkAdd=function(e,t,n){var r=this,i=Array.isArray(t)?t:void 0,a=(n||=i?void 0:t)?n.allKeys:void 0;return this._trans(`readwrite`,function(t){var n=r.schema.primKey,o=n.auto,n=n.keyPath;if(n&&i)throw new A.InvalidArgument(`bulkAdd(): keys argument invalid on tables with inbound keys`);if(i&&i.length!==e.length)throw new A.InvalidArgument(`Arguments objects and keys must have the same length`);var s=e.length,o=n&&o?e.map(Et(n)):e;return r.core.mutate({trans:t,type:`add`,keys:i,values:o,wantResults:a}).then(function(e){var t=e.numFailures,n=e.failures;if(t===0)return a?e.results:e.lastResult;throw new fe(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`,n)})})},It.prototype.bulkPut=function(e,t,n){var r=this,i=Array.isArray(t)?t:void 0,a=(n||=i?void 0:t)?n.allKeys:void 0;return this._trans(`readwrite`,function(t){var n=r.schema.primKey,o=n.auto,n=n.keyPath;if(n&&i)throw new A.InvalidArgument(`bulkPut(): keys argument invalid on tables with inbound keys`);if(i&&i.length!==e.length)throw new A.InvalidArgument(`Arguments objects and keys must have the same length`);var s=e.length,o=n&&o?e.map(Et(n)):e;return r.core.mutate({trans:t,type:`put`,keys:i,values:o,wantResults:a}).then(function(e){var t=e.numFailures,n=e.failures;if(t===0)return a?e.results:e.lastResult;throw new fe(`${r.name}.bulkPut(): ${t} of ${s} operations failed`,n)})})},It.prototype.bulkUpdate=function(e){var t=this,n=this.core,r=e.map(function(e){return e.key}),i=e.map(function(e){return e.changes}),a=[];return this._trans(`readwrite`,function(o){return n.getMany({trans:o,keys:r,cache:`clone`}).then(function(s){var c=[],l=[],u=(e.forEach(function(e,n){var r=e.key,i=e.changes,o=s[n];if(o){for(var u=0,d=Object.keys(i);u<d.length;u++){var f=d[u],p=i[f];if(f===t.schema.primKey.keyPath){if(Ot(p,r)!==0)throw new A.Constraint(`Cannot update primary key in bulkUpdate()`)}else x(o,f,p)}a.push(n),c.push(r),l.push(o)}}),c.length);return n.mutate({trans:o,type:`put`,keys:c,values:l,updates:{keys:r,changeSpecs:i}}).then(function(e){var n=e.numFailures,r=e.failures;if(n===0)return u;for(var i=0,o=Object.keys(r);i<o.length;i++){var s,c=o[i],l=a[Number(c)];l!=null&&(s=r[c],delete r[c],r[l]=s)}throw new fe(`${t.name}.bulkUpdate(): ${n} of ${u} operations failed`,r)})})})},It.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans(`readwrite`,function(n){return t.core.mutate({trans:n,type:`delete`,keys:e}).then(function(n){return jt(t,e,n)})}).then(function(e){var r=e.numFailures,i=e.failures;if(r===0)return e.lastResult;throw new fe(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})};var Ft=It;function It(){}function Lt(e){function t(t,r){if(r){for(var i=arguments.length,a=Array(i-1);--i;)a[i-1]=arguments[i];return n[t].subscribe.apply(null,a),e}if(typeof t==`string`)return n[t]}var n={};t.addEventType=s;for(var r=1,o=arguments.length;r<o;++r)s(arguments[r]);return t;function s(e,r,o){var c,l;if(typeof e!=`object`)return r||=Ce,l={subscribers:[],fire:o||=ge,subscribe:function(e){l.subscribers.indexOf(e)===-1&&(l.subscribers.push(e),l.fire=r(l.fire,e))},unsubscribe:function(e){l.subscribers=l.subscribers.filter(function(t){return t!==e}),l.fire=l.subscribers.reduce(r,o)}},n[e]=t[e]=l;i(c=e).forEach(function(e){var t=c[e];if(a(t))s(e,c[e][0],c[e][1]);else{if(t!==`asap`)throw new A.InvalidArgument(`Invalid event config`);var n=s(e,_e,function(){for(var e=arguments.length,t=Array(e);e--;)t[e]=arguments[e];n.subscribers.forEach(function(e){y(function(){e.apply(null,t)})})})}})}}function Rt(e,t){return p(t).from({prototype:e}),t}function zt(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Bt(e,t){e.filter=wt(e.filter,t)}function Vt(e,t,n){var r=e.replayFilter;e.replayFilter=r?function(){return wt(r(),t())}:t,e.justLimit=n&&!r}function Ht(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new A.Schema(`KeyPath `+e.index+` on object store `+t.name+` is not indexed`)}function Ut(e,t,n){var r=Ht(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir===`prev`,unique:!!e.unique,query:{index:r,range:e.range}})}function Wt(e,t,n,r){var i,a,o=e.replayFilter?wt(e.filter,e.replayFilter()):e.filter;return e.or?(i={},a=function(e,n,r){var a,s;o&&!o(n,r,function(e){return n.stop(e)},function(e){return n.fail(e)})||((s=``+(a=n.primaryKey))==`[object ArrayBuffer]`&&(s=``+new Uint8Array(a)),l(i,s))||(i[s]=!0,t(e,n,r))},Promise.all([e.or._iterate(a,n),Gt(Ut(e,r,n),e.algorithm,a,!e.keysOnly&&e.valueMapper)])):Gt(Ut(e,r,n),wt(e.algorithm,o),t,!e.keysOnly&&e.valueMapper)}function Gt(e,t,n,r){var i=et(r?function(e,t,i){return n(r(e),t,i)}:n);return e.then(function(e){if(e)return e.start(function(){var n=function(){return e.continue()};t&&!t(e,function(e){return n=e},function(t){e.stop(t),n=ge},function(t){e.fail(t),n=ge})||i(e.value,e,function(e){return n=e}),n()})})}qt.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,_t.bind(null,n.error)):n.table._trans(`readonly`,e).then(t)},qt.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,_t.bind(null,t.error)):t.table._trans(`readwrite`,e,`locked`)},qt.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=wt(t.algorithm,e)},qt.prototype._iterate=function(e,t){return Wt(this._ctx,e,t,this._ctx.table.core)},qt.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&o(n,e),t._ctx=n,t},qt.prototype.raw=function(){return this._ctx.valueMapper=null,this},qt.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return Wt(t,e,n,t.table.core)})},qt.prototype.count=function(e){var t=this;return this._read(function(e){var n,r=t._ctx,i=r.table.core;return zt(r,!0)?i.count({trans:e,query:{index:Ht(r,i.schema),range:r.range}}).then(function(e){return Math.min(e,r.limit)}):(n=0,Wt(r,function(){return++n,!1},e,i).then(function(){return n}))}).then(e)},qt.prototype.sortBy=function(e,t){var n=e.split(`.`).reverse(),r=n[0],i=n.length-1;function a(e,t){return t?a(e[n[t]],t-1):e[r]}var o=this._ctx.dir===`next`?1:-1;function s(e,t){return Ot(a(e,i),a(t,i))*o}return this.toArray(function(e){return e.slice().sort(s)}).then(t)},qt.prototype.toArray=function(e){var t=this;return this._read(function(e){var n,r,i,a=t._ctx;return zt(a,!0)&&0<a.limit?(n=a.valueMapper,r=Ht(a,a.table.core.schema),a.table.core.query({trans:e,limit:a.limit,values:!0,direction:a.dir===`prev`?`prev`:void 0,query:{index:r,range:a.range}}).then(function(e){return e=e.result,n?e.map(n):e})):(i=[],Wt(a,function(e){return i.push(e)},e,a.table.core).then(function(){return i}))},e)},qt.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,zt(t)?Vt(t,function(){var t=e;return function(e,n){return t===0||(t===1?--t:n(function(){e.advance(t),t=0}),!1)}}):Vt(t,function(){var t=e;return function(){return--t<0}})),this},qt.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Vt(this._ctx,function(){var t=e;return function(e,n,r){return--t<=0&&n(r),0<=t}},!0),this},qt.prototype.until=function(e,t){return Bt(this._ctx,function(n,r,i){return!e(n.value)||(r(i),t)}),this},qt.prototype.first=function(e){return this.limit(1).toArray(function(e){return e[0]}).then(e)},qt.prototype.last=function(e){return this.reverse().first(e)},qt.prototype.filter=function(e){var t;return Bt(this._ctx,function(t){return e(t.value)}),(t=this._ctx).isMatch=wt(t.isMatch,e),this},qt.prototype.and=function(e){return this.filter(e)},qt.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},qt.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir===`prev`?`next`:`prev`,this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},qt.prototype.desc=function(){return this.reverse()},qt.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(t,n){e(n.key,n)})},qt.prototype.eachUniqueKey=function(e){return this._ctx.unique=`unique`,this.eachKey(e)},qt.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(t,n){e(n.primaryKey,n)})},qt.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(e,t){n.push(t.key)}).then(function(){return n}).then(e)},qt.prototype.primaryKeys=function(e){var t=this._ctx;if(zt(t,!0)&&0<t.limit)return this._read(function(e){var n=Ht(t,t.table.core.schema);return t.table.core.query({trans:e,values:!1,limit:t.limit,direction:t.dir===`prev`?`prev`:void 0,query:{index:n,range:t.range}})}).then(function(e){return e.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(e,t){n.push(t.primaryKey)}).then(function(){return n}).then(e)},qt.prototype.uniqueKeys=function(e){return this._ctx.unique=`unique`,this.keys(e)},qt.prototype.firstKey=function(e){return this.limit(1).keys(function(e){return e[0]}).then(e)},qt.prototype.lastKey=function(e){return this.reverse().firstKey(e)},qt.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Bt(this._ctx,function(t){var t=t.primaryKey.toString(),n=l(e,t);return e[t]=!0,!n})),this},qt.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(r){function a(e,t){var n=t.failures;p+=e-t.numFailures;for(var r=0,a=i(n);r<a.length;r++){var o=a[r];f.push(n[o])}}var o=typeof e==`function`?e:function(t){return Pt(t,e)},s=n.table.core,c=s.schema.primaryKey,l=c.outbound,u=c.extractKey,d=200,c=t.db._options.modifyChunkSize,f=(c&&(d=typeof c==`object`?c[s.name]||c[`*`]||200:c),[]),p=0,m=[],h=e===Jt;return t.clone().primaryKeys().then(function(t){function i(f){var p=Math.min(d,t.length-f),m=t.slice(f,f+p);return(h?Promise.resolve([]):s.getMany({trans:r,keys:m,cache:`immutable`})).then(function(g){var _=[],v=[],y=l?[]:null,b=h?m:[];if(!h)for(var x=0;x<p;++x){var S=g[x],C={value:D(S),primKey:t[f+x]};!1!==o.call(C,C.value,C)&&(C.value==null?b.push(t[f+x]):l||Ot(u(S),u(C.value))===0?(v.push(C.value),l&&y.push(t[f+x])):(b.push(t[f+x]),_.push(C.value)))}return Promise.resolve(0<_.length&&s.mutate({trans:r,type:`add`,values:_}).then(function(e){for(var t in e.failures)b.splice(parseInt(t),1);a(_.length,e)})).then(function(){return(0<v.length||c&&typeof e==`object`)&&s.mutate({trans:r,type:`put`,keys:y,values:v,criteria:c,changeSpec:typeof e!=`function`&&e,isAdditionalChunk:0<f}).then(function(e){return a(v.length,e)})}).then(function(){return(0<b.length||c&&h)&&s.mutate({trans:r,type:`delete`,keys:b,criteria:c,isAdditionalChunk:0<f}).then(function(e){return jt(n.table,b,e)}).then(function(e){return a(b.length,e)})}).then(function(){return t.length>f+p&&i(f+d)})})}var c=zt(n)&&n.limit===1/0&&(typeof e!=`function`||h)&&{index:n.index,range:n.range};return i(0).then(function(){if(0<f.length)throw new de(`Error modifying one or more objects`,f,p,m);return t.length})})})},qt.prototype.delete=function(){var e=this._ctx,t=e.range;return!zt(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Jt):this._write(function(n){var r=e.table.core.schema.primaryKey,i=t;return e.table.core.count({trans:n,query:{index:r,range:i}}).then(function(t){return e.table.core.mutate({trans:n,type:`deleteRange`,range:i}).then(function(e){var n=e.failures,e=e.numFailures;if(e)throw new de(`Could not delete some values`,Object.keys(n).map(function(e){return n[e]}),t-e);return t-e})})})};var Kt=qt;function qt(){}var Jt=function(e,t){return t.value=null};function Yt(e,t){return e<t?-1:e===t?0:1}function Xt(e,t){return t<e?-1:e===t?0:1}function Zt(e,t,n){return e=e instanceof nn?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Qt(e){return new e.Collection(e,function(){return tn(``)}).limit(0)}function $t(e,t,n,r){var i,a,o,s,c,l,u,d=n.length;if(!n.every(function(e){return typeof e==`string`}))return Zt(e,bt);function f(e){i=e===`next`?function(e){return e.toUpperCase()}:function(e){return e.toLowerCase()},a=e===`next`?function(e){return e.toLowerCase()}:function(e){return e.toUpperCase()},o=e===`next`?Yt:Xt;var t=n.map(function(e){return{lower:a(e),upper:i(e)}}).sort(function(e,t){return o(e.lower,t.lower)});s=t.map(function(e){return e.upper}),c=t.map(function(e){return e.lower}),u=(l=e)===`next`?``:r}f(`next`);var e=new e.Collection(e,function(){return en(s[0],c[d-1]+r)}),p=(e._ondirectionchange=function(e){f(e)},0);return e._addAlgorithm(function(e,n,r){var i=e.key;if(typeof i==`string`){var f=a(i);if(t(f,c,p))return!0;for(var m=null,h=p;h<d;++h){var g=((e,t,n,r,i,a)=>{for(var o=Math.min(e.length,r.length),s=-1,c=0;c<o;++c){var l=t[c];if(l!==r[c])return i(e[c],n[c])<0?e.substr(0,c)+n[c]+n.substr(c+1):i(e[c],r[c])<0?e.substr(0,c)+r[c]+n.substr(c+1):0<=s?e.substr(0,s)+t[s]+n.substr(s+1):null;i(e[c],l)<0&&(s=c)}return o<r.length&&a===`next`?e+n.substr(e.length):o<e.length&&a===`prev`?e.substr(0,n.length):s<0?null:e.substr(0,s)+r[s]+n.substr(s+1)})(i,f,s[h],c[h],o,l);g===null&&m===null?p=h+1:(m===null||0<o(m,g))&&(m=g)}n(m===null?r:function(){e.continue(m+u)})}return!1}),e}function en(e,t,n,r){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:r}}function tn(e){return{type:1,lower:e,upper:e}}Object.defineProperty(rn.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),rn.prototype.between=function(e,t,n,r){n=!1!==n,r=!0===r;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||r)&&(!n||!r)?Qt(this):new this.Collection(this,function(){return en(e,t,!n,!r)})}catch{return Zt(this,yt)}},rn.prototype.equals=function(e){return e==null?Zt(this,yt):new this.Collection(this,function(){return tn(e)})},rn.prototype.above=function(e){return e==null?Zt(this,yt):new this.Collection(this,function(){return en(e,void 0,!0)})},rn.prototype.aboveOrEqual=function(e){return e==null?Zt(this,yt):new this.Collection(this,function(){return en(e,void 0,!1)})},rn.prototype.below=function(e){return e==null?Zt(this,yt):new this.Collection(this,function(){return en(void 0,e,!1,!0)})},rn.prototype.belowOrEqual=function(e){return e==null?Zt(this,yt):new this.Collection(this,function(){return en(void 0,e)})},rn.prototype.startsWith=function(e){return typeof e==`string`?this.between(e,e+vt,!0,!0):Zt(this,bt)},rn.prototype.startsWithIgnoreCase=function(e){return e===``?this.startsWith(e):$t(this,function(e,t){return e.indexOf(t[0])===0},[e],vt)},rn.prototype.equalsIgnoreCase=function(e){return $t(this,function(e,t){return e===t[0]},[e],``)},rn.prototype.anyOfIgnoreCase=function(){var e=se.apply(oe,arguments);return e.length===0?Qt(this):$t(this,function(e,t){return t.indexOf(e)!==-1},e,``)},rn.prototype.startsWithAnyOfIgnoreCase=function(){var e=se.apply(oe,arguments);return e.length===0?Qt(this):$t(this,function(e,t){return t.some(function(t){return e.indexOf(t)===0})},e,vt)},rn.prototype.anyOf=function(){var e,t,n=this,r=se.apply(oe,arguments),i=this._cmp;try{r.sort(i)}catch{return Zt(this,yt)}return r.length===0?Qt(this):((e=new this.Collection(this,function(){return en(r[0],r[r.length-1])}))._ondirectionchange=function(e){i=e===`next`?n._ascending:n._descending,r.sort(i)},t=0,e._addAlgorithm(function(e,n,a){for(var o=e.key;0<i(o,r[t]);)if(++t===r.length)return n(a),!1;return i(o,r[t])===0||(n(function(){e.continue(r[t])}),!1)}),e)},rn.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},rn.prototype.noneOf=function(){var e=se.apply(oe,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Zt(this,yt)}var t=e.reduce(function(e,t){return e?e.concat([[e[e.length-1][1],t]]):[[-1/0,t]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},rn.prototype.inAnyRange=function(e,t){var n=this,r=this._cmp,i=this._ascending,a=this._descending,o=this._min,s=this._max;if(e.length===0)return Qt(this);if(!e.every(function(e){return e[0]!==void 0&&e[1]!==void 0&&i(e[0],e[1])<=0}))return Zt(this,`First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower`,A.InvalidArgument);var c=!t||!1!==t.includeLowers,l=t&&!0===t.includeUppers,u,d=i;function f(e,t){return d(e[0],t[0])}try{(u=e.reduce(function(e,t){for(var n=0,i=e.length;n<i;++n){var a=e[n];if(r(t[0],a[1])<0&&0<r(t[1],a[0])){a[0]=o(a[0],t[0]),a[1]=s(a[1],t[1]);break}}return n===i&&e.push(t),e},[])).sort(f)}catch{return Zt(this,yt)}var p=0,m=l?function(e){return 0<i(e,u[p][1])}:function(e){return 0<=i(e,u[p][1])},h=c?function(e){return 0<a(e,u[p][0])}:function(e){return 0<=a(e,u[p][0])},g=m,t=new this.Collection(this,function(){return en(u[0][0],u[u.length-1][1],!c,!l)});return t._ondirectionchange=function(e){d=e===`next`?(g=m,i):(g=h,a),u.sort(f)},t._addAlgorithm(function(e,t,r){for(var a,o=e.key;g(o);)if(++p===u.length)return t(r),!1;return!m(a=o)&&!h(a)||(n._cmp(o,u[p][1])===0||n._cmp(o,u[p][0])===0||t(function(){d===i?e.continue(u[p][0]):e.continue(u[p][1])}),!1)}),t},rn.prototype.startsWithAnyOf=function(){var e=se.apply(oe,arguments);return e.every(function(e){return typeof e==`string`})?e.length===0?Qt(this):this.inAnyRange(e.map(function(e){return[e,e+vt]})):Zt(this,`startsWithAnyOf() only works with strings`)};var nn=rn;function rn(){}function an(e){return et(function(t){return on(t),e(t.target.error),!1})}function on(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var sn=`storagemutated`,cn=`x-storagemutated-1`,ln=Lt(null,sn),un=(dn.prototype._lock=function(){return v(!j.global),++this._reculock,this._reculock!==1||j.global||(j.lockOwnerFor=this),this},dn.prototype._unlock=function(){if(v(!j.global),--this._reculock==0)for(j.global||(j.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{mt(e[1],e[0])}catch{}}return this},dn.prototype._locked=function(){return this._reculock&&j.lockOwnerFor!==this},dn.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,r=this.db._state.dbOpenError;if(v(!this.idbtrans),!e&&!n)switch(r&&r.name){case`DatabaseClosedError`:throw new A.DatabaseClosed(r);case`MissingAPIError`:throw new A.MissingAPI(r.message,r);default:throw new A.OpenFailed(r)}if(!this.active)throw new A.TransactionInactive;v(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=et(function(n){on(n),t._reject(e.error)}),e.onabort=et(function(n){on(n),t.active&&t._reject(new A.Abort(e.error)),t.active=!1,t.on(`abort`).fire(n)}),e.oncomplete=et(function(){t.active=!1,t._resolve(),`mutatedParts`in e&&ln.storagemutated.fire(e.mutatedParts)})}return this},dn.prototype._promise=function(e,t,n){var r,i=this;return e===`readwrite`&&this.mode!==`readwrite`?_t(new A.ReadOnly(`Transaction is readonly`)):this.active?this._locked()?new M(function(r,a){i._blockedFuncs.push([function(){i._promise(e,t,n).then(r,a)},j])}):n?st(function(){var e=new M(function(e,n){i._lock();var r=t(e,n,i);r&&r.then&&r.then(e,n)});return e.finally(function(){return i._unlock()}),e._lib=!0,e}):((r=new M(function(e,n){var r=t(e,n,i);r&&r.then&&r.then(e,n)}))._lib=!0,r):_t(new A.TransactionInactive)},dn.prototype._root=function(){return this.parent?this.parent._root():this},dn.prototype.waitFor=function(e){var t,n=this._root(),r=M.resolve(e),i=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return r}):(n._waitingFor=r,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),function e(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=e)}()),n._waitingFor);return new M(function(e,t){r.then(function(t){return n._waitingQueue.push(et(e.bind(null,t)))},function(e){return n._waitingQueue.push(et(t.bind(null,e)))}).finally(function(){n._waitingFor===i&&(n._waitingFor=null)})})},dn.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new A.Abort))},dn.prototype.table=function(e){var t=this._memoizedTables||={};if(l(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new A.NotFound(`Table `+e+` not part of transaction`)},dn);function dn(){}function fn(e,t,n,r,i,a,o,s){return{name:e,keyPath:t,unique:n,multi:r,auto:i,compound:a,src:(n&&!o?`&`:``)+(r?`*`:``)+(i?`++`:``)+pn(t),type:s}}function pn(e){return typeof e==`string`?e:e?`[`+[].join.call(e,`+`)+`]`:``}function mn(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(r=function(e){return[e.name,e]},n.reduce(function(e,t,n){return t=r(t,n),t&&(e[t[0]]=t[1]),e},{}))};var r}var hn=function(e){try{return e.only([[]]),hn=function(){return[[]]},[[]]}catch{return hn=function(){return vt},vt}};function gn(e){return e==null?function(){}:typeof e==`string`?(t=e).split(`.`).length===1?function(e){return e[t]}:function(e){return b(e,t)}:function(t){return b(t,e)};var t}function _n(e){return[].slice.call(e)}var vn=0;function yn(e){return e==null?`:id`:typeof e==`string`?e:`[${e.join(`+`)}]`}function bn(e,t,n){function r(e){if(e.type===3)return null;if(e.type===4)throw Error(`Cannot convert never type to IDBKeyRange`);var n=e.lower,r=e.upper,i=e.lowerOpen,e=e.upperOpen;return n===void 0?r===void 0?null:t.upperBound(r,!!e):r===void 0?t.lowerBound(n,!!i):t.bound(n,r,!!i,!!e)}function i(e){var t,n,i=e.name;return{name:i,schema:e,mutate:function(e){var t=e.trans,n=e.type,a=e.keys,o=e.values,s=e.range;return new Promise(function(e,c){e=et(e);var l=t.objectStore(i),u=l.keyPath==null,d=n===`put`||n===`add`;if(!d&&n!==`delete`&&n!==`deleteRange`)throw Error(`Invalid operation type: `+n);var f,p=(a||o||{length:1}).length;if(a&&o&&a.length!==o.length)throw Error(`Given keys array must have same length as given values array.`);if(p===0)return e({numFailures:0,failures:{},results:[],lastResult:void 0});function m(e){++_,on(e)}var h=[],g=[],_=0;if(n===`deleteRange`){if(s.type===4)return e({numFailures:_,failures:g,results:[],lastResult:void 0});s.type===3?h.push(f=l.clear()):h.push(f=l.delete(r(s)))}else{var u=d?u?[o,a]:[o,null]:[a,null],v=u[0],y=u[1];if(d)for(var b=0;b<p;++b)h.push(f=y&&y[b]!==void 0?l[n](v[b],y[b]):l[n](v[b])),f.onerror=m;else for(b=0;b<p;++b)h.push(f=l[n](v[b])),f.onerror=m}function x(t){t=t.target.result,h.forEach(function(e,t){return e.error!=null&&(g[t]=e.error)}),e({numFailures:_,failures:g,results:n===`delete`?a:h.map(function(e){return e.result}),lastResult:t})}f.onerror=function(e){m(e),x(e)},f.onsuccess=x})},getMany:function(e){var t=e.trans,n=e.keys;return new Promise(function(e,r){e=et(e);for(var a,o=t.objectStore(i),s=n.length,c=Array(s),l=0,u=0,d=function(t){t=t.target,c[t._pos]=t.result,++u===l&&e(c)},f=an(r),p=0;p<s;++p)n[p]!=null&&((a=o.get(n[p]))._pos=p,a.onsuccess=d,a.onerror=f,++l);l===0&&e(c)})},get:function(e){var t=e.trans,n=e.key;return new Promise(function(e,r){e=et(e);var a=t.objectStore(i).get(n);a.onsuccess=function(t){return e(t.target.result)},a.onerror=an(r)})},query:(t=c,n=l,function(e){return new Promise(function(a,o){a=et(a);var s,c,l,u,d=e.trans,f=e.values,p=e.limit,m=e.query,h=(h=e.direction)??`next`,g=p===1/0?void 0:p,_=m.index,m=m.range,d=d.objectStore(i),d=_.isPrimaryKey?d:d.index(_.name),_=r(m);if(p===0)return a({result:[]});n?(m={query:_,count:g,direction:h},(s=f?d.getAll(m):d.getAllKeys(m)).onsuccess=function(e){return a({result:e.target.result})},s.onerror=an(o)):t&&h===`next`?((s=f?d.getAll(_,g):d.getAllKeys(_,g)).onsuccess=function(e){return a({result:e.target.result})},s.onerror=an(o)):(c=0,l=!f&&`openKeyCursor`in d?d.openKeyCursor(_,h):d.openCursor(_,h),u=[],l.onsuccess=function(){var e=l.result;return!e||(u.push(f?e.value:e.primaryKey),++c===p)?a({result:u}):void e.continue()},l.onerror=an(o))})}),openCursor:function(e){var t=e.trans,n=e.values,a=e.query,o=e.reverse,s=e.unique;return new Promise(function(e,c){e=et(e);var l=a.index,u=a.range,d=t.objectStore(i),d=l.isPrimaryKey?d:d.index(l.name),l=o?s?`prevunique`:`prev`:s?`nextunique`:`next`,f=!n&&`openKeyCursor`in d?d.openKeyCursor(r(u),l):d.openCursor(r(u),l);f.onerror=an(c),f.onsuccess=et(function(n){var r,i,a,o,s=f.result;s?(s.___id=++vn,s.done=!1,r=s.continue.bind(s),i=(i=s.continuePrimaryKey)&&i.bind(s),a=s.advance.bind(s),o=function(){throw Error(`Cursor not stopped`)},s.trans=t,s.stop=s.continue=s.continuePrimaryKey=s.advance=function(){throw Error(`Cursor not started`)},s.fail=et(c),s.next=function(){var e=this,t=1;return this.start(function(){return t--?e.continue():e.stop()}).then(function(){return e})},s.start=function(e){function t(){if(f.result)try{e()}catch(e){s.fail(e)}else s.done=!0,s.start=function(){throw Error(`Cursor behind last entry`)},s.stop()}var n=new Promise(function(e,t){e=et(e),f.onerror=an(t),s.fail=t,s.stop=function(t){s.stop=s.continue=s.continuePrimaryKey=s.advance=o,e(t)}});return f.onsuccess=et(function(e){f.onsuccess=t,t()}),s.continue=r,s.continuePrimaryKey=i,s.advance=a,t(),n},e(s)):e(null)},c)})},count:function(e){var t=e.query,n=e.trans,a=t.index,o=t.range;return new Promise(function(e,t){var s=n.objectStore(i),s=a.isPrimaryKey?s:s.index(a.name),c=r(o),c=c?s.count(c):s.count();c.onsuccess=et(function(t){return e(t.target.result)}),c.onerror=an(t)})}}}o=n,s=_n((n=e).objectStoreNames),u=0<s.length?o.objectStore(s[0]):{};var o,n={schema:{name:n.name,tables:s.map(function(e){return o.objectStore(e)}).map(function(e){var t=e.keyPath,n=e.autoIncrement,r=a(t),i={},r={name:e.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:t==null,compound:r,keyPath:t,autoIncrement:n,unique:!0,extractKey:gn(t)},indexes:_n(e.indexNames).map(function(t){return e.index(t)}).map(function(e){var t=e.name,n=e.unique,r=e.multiEntry,e=e.keyPath,t={name:t,compound:a(e),keyPath:e,unique:n,multiEntry:r,extractKey:gn(e)};return i[yn(e)]=t}),getIndexByKeyPath:function(e){return i[yn(e)]}};return i[`:id`]=r.primaryKey,t!=null&&(i[yn(t)]=r.primaryKey),r})},hasGetAll:0<s.length&&`getAll`in u&&!(typeof navigator<`u`&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:`getAllRecords`in u},s=n.schema,c=n.hasGetAll,l=n.hasIdb3Features,u=s.tables.map(i),d={};return u.forEach(function(e){return d[e.name]=e}),{stack:`dbcore`,transaction:e.transaction.bind(e),table:function(e){if(d[e])return d[e];throw Error(`Table '${e}' not found`)},MIN_KEY:-1/0,MAX_KEY:hn(t),schema:s}}function xn(e,n,r,i){return r=r.IDBKeyRange,n=bn(n,r,i),{dbcore:e.dbcore.reduce(function(e,n){return n=n.create,t(t({},e),n(e))},n)}}function Sn(e,t){var n=t.db,n=xn(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(t){var n=t.name;e.core.schema.tables.some(function(e){return e.name===n})&&(t.core=e.core.table(n),e[n]instanceof e.Table)&&(e[n].core=t.core)})}function Cn(e,t,n,r){n.forEach(function(n){var i=r[n];t.forEach(function(t){var r=function e(t,n){return m(t,n)||(t=s(t))&&e(t,n)}(t,n);(!r||`value`in r&&r.value===void 0)&&(t===e.Transaction.prototype||t instanceof e.Transaction?f(t,n,{get:function(){return this.table(n)},set:function(e){d(this,n,{value:e,writable:!0,configurable:!0,enumerable:!0})}}):t[n]=new e.Table(n,i))})})}function wn(e,t){t.forEach(function(t){for(var n in t)t[n]instanceof e.Table&&delete t[n]})}function Tn(e,t){return e._cfg.version-t._cfg.version}function En(e,t,n,r){var a=e._dbSchema,o=(n.objectStoreNames.contains(`$meta`)&&!a.$meta&&(a.$meta=mn(`$meta`,Pn(``)[0],[]),e._storeNames.push(`$meta`)),e._createTransaction(`readwrite`,e._storeNames,a)),s=(o.create(n),o._completion.catch(r),o._reject.bind(o)),c=j.transless||j;st(function(){if(j.trans=o,j.transless=c,t!==0)return Sn(e,n),l=t,((r=o).storeNames.includes(`$meta`)?r.table(`$meta`).get(`version`).then(function(e){return e??l}):M.resolve(l)).then(function(t){var r=e,a=t,s=o,c=n,l=[],t=r._versions,u=r._dbSchema=Mn(0,r.idbdb,c);return(t=t.filter(function(e){return e._cfg.version>=a})).length===0?M.resolve():(t.forEach(function(e){l.push(function(){var t,n,o,l=u,d=e._cfg.dbschema,f=(Nn(r,l,c),Nn(r,d,c),u=r._dbSchema=d,On(l,d)),p=(f.add.forEach(function(e){kn(c,e[0],e[1].primKey,e[1].indexes)}),f.change.forEach(function(e){if(e.recreate)throw new A.Upgrade(`Not yet support for changing primary key`);var t=c.objectStore(e.name);e.add.forEach(function(e){return jn(t,e)}),e.change.forEach(function(e){t.deleteIndex(e.name),jn(t,e)}),e.del.forEach(function(e){return t.deleteIndex(e)})}),e._cfg.contentUpgrade);if(p&&e._cfg.version>a)return Sn(r,c),s._memoizedTables={},t=S(d),f.del.forEach(function(e){t[e]=l[e]}),wn(r,[r.Transaction.prototype]),Cn(r,[r.Transaction.prototype],i(t),t),s.schema=t,(n=O(p))&&ct(),d=M.follow(function(){var e;(o=p(s))&&n&&(e=lt.bind(null,null),o.then(e,e))}),o&&typeof o.then==`function`?M.resolve(o):d.then(function(){return o})}),l.push(function(t){var n=e._cfg.dbschema,i=t;[].slice.call(i.db.objectStoreNames).forEach(function(e){return n[e]==null&&i.db.deleteObjectStore(e)}),wn(r,[r.Transaction.prototype]),Cn(r,[r.Transaction.prototype],r._storeNames,r._dbSchema),s.schema=r._dbSchema}),l.push(function(t){r.idbdb.objectStoreNames.contains(`$meta`)&&(Math.ceil(r.idbdb.version/10)===e._cfg.version?(r.idbdb.deleteObjectStore(`$meta`),delete r._dbSchema.$meta,r._storeNames=r._storeNames.filter(function(e){return e!==`$meta`})):t.objectStore(`$meta`).put(e._cfg.version,`version`))})}),function e(){return l.length?M.resolve(l.shift()(s.idbtrans)).then(e):M.resolve()}().then(function(){An(u,c)}))}).catch(s);var r,l;i(a).forEach(function(e){kn(n,e,a[e].primKey,a[e].indexes)}),Sn(e,n),M.follow(function(){return e.on.populate.fire(o)}).catch(s)})}function Dn(e,t){An(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains(`$meta`)||t.db.createObjectStore(`$meta`).add(Math.ceil(t.db.version/10-1),`version`);var n=Mn(0,e.idbdb,t);Nn(e,e._dbSchema,t);for(var r=0,i=On(n,e._dbSchema).change;r<i.length;r++){var a=(e=>{if(e.change.length||e.recreate)return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`),{value:void 0};var n=t.objectStore(e.name);e.add.forEach(function(t){Te&&console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`),jn(n,t)})})(i[r]);if(typeof a==`object`)return a.value}}function On(e,t){var n,r={del:[],add:[],change:[]};for(n in e)t[n]||r.del.push(n);for(n in t){var i=e[n],a=t[n];if(i){var o={name:n,def:a,recreate:!1,del:[],add:[],change:[]};if(``+(i.primKey.keyPath||``)!=``+(a.primKey.keyPath||``)||i.primKey.auto!==a.primKey.auto)o.recreate=!0,r.change.push(o);else{var s=i.idxByName,c=a.idxByName,l=void 0;for(l in s)c[l]||o.del.push(l);for(l in c){var u=s[l],d=c[l];u?u.src!==d.src&&o.change.push(d):o.add.push(d)}(0<o.del.length||0<o.add.length||0<o.change.length)&&r.change.push(o)}}else r.add.push([n,a])}return r}function kn(e,t,n,r){var i=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});r.forEach(function(e){return jn(i,e)})}function An(e,t){i(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(Te&&console.debug(`Dexie: Creating missing table`,n),kn(t,n,e[n].primKey,e[n].indexes))})}function jn(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Mn(e,t,n){var r={};return g(t.objectStoreNames,0).forEach(function(e){for(var t=n.objectStore(e),i=fn(pn(c=t.keyPath),c||``,!0,!1,!!t.autoIncrement,c&&typeof c!=`string`,!0),a=[],o=0;o<t.indexNames.length;++o){var s=t.index(t.indexNames[o]),c=s.keyPath,s=fn(s.name,c,!!s.unique,!!s.multiEntry,!1,c&&typeof c!=`string`,!1);a.push(s)}r[e]=mn(e,i,a)}),r}function Nn(e,t,n){for(var i=n.db.objectStoreNames,a=0;a<i.length;++a){var o=i[a],s=n.objectStore(o);e._hasGetAll=`getAll`in s;for(var c=0;c<s.indexNames.length;++c){var l,u=s.indexNames[c],d=s.index(u).keyPath,d=typeof d==`string`?d:`[`+g(d).join(`+`)+`]`;t[o]&&(l=t[o].idxByName[d])&&(l.name=u,delete t[o].idxByName[d],t[o].idxByName[u]=l)}}typeof navigator<`u`&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&r.WorkerGlobalScope&&r instanceof r.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Pn(e){return e.split(`,`).map(function(e,t){var n=e.split(`:`),r=(r=n[1])?.trim(),n=(e=n[0].trim()).replace(/([&*]|\+\+)/g,``),i=/^\[/.test(n)?n.match(/^\[(.*)\]$/)[1].split(`+`):n;return fn(n,i||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),a(i),t===0,r)})}In.prototype._createTableSchema=mn,In.prototype._parseIndexSyntax=Pn,In.prototype._parseStoresSpec=function(e,t){var n=this;i(e).forEach(function(r){if(e[r]!==null){var i=n._parseIndexSyntax(e[r]),a=i.shift();if(!a)throw new A.Schema(`Invalid schema for table `+r+`: `+e[r]);if(a.unique=!0,a.multi)throw new A.Schema(`Primary key cannot be multiEntry*`);i.forEach(function(e){if(e.auto)throw new A.Schema(`Only primary key can be marked as autoIncrement (++)`);if(!e.keyPath)throw new A.Schema(`Index must have a name and cannot be an empty string`)}),a=n._createTableSchema(r,a,i),t[r]=a}})},In.prototype.stores=function(e){var t=this.db,e=(this._cfg.storesSource=this._cfg.storesSource?o(this._cfg.storesSource,e):e,t._versions),n={},r={};return e.forEach(function(e){o(n,e._cfg.storesSource),r=e._cfg.dbschema={},e._parseStoresSpec(n,r)}),t._dbSchema=r,wn(t,[t._allTables,t,t.Transaction.prototype]),Cn(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],i(r),r),t._storeNames=i(r),this},In.prototype.upgrade=function(e){return this._cfg.contentUpgrade=we(this._cfg.contentUpgrade||ge,e),this};var Fn=In;function In(){}var Ln=(()=>{var e,t,n;return typeof FinalizationRegistry<`u`&&typeof WeakRef<`u`?(e=new Set,t=new FinalizationRegistry(function(t){e.delete(t)}),{toArray:function(){return Array.from(e).map(function(e){return e.deref()}).filter(function(e){return e!==void 0})},add:function(n){var r=new WeakRef(n._novip);e.add(r),t.register(n._novip,r,r),e.size>n._options.maxConnections&&(r=e.values().next().value,e.delete(r),t.unregister(r))},remove:function(n){if(n)for(var r=e.values(),i=r.next();!i.done;){var a=i.value;if(a.deref()===n._novip)return e.delete(a),void t.unregister(a);i=r.next()}}}):(n=[],{toArray:function(){return n},add:function(e){n.push(e._novip)},remove:function(e){e&&(e=n.indexOf(e._novip))!==-1&&n.splice(e,1)}})})();function Rn(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Cr(xt,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:`name`}),n.table(`dbnames`)}function zn(e){return e&&typeof e.databases==`function`}function Bn(e){return st(function(){return j.letThrough=!0,e()})}function Vn(e){return!(`from`in e)}var Hn=function(e,t){var n;if(!this)return n=new Hn,e&&`d`in e&&o(n,e),n;o(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Un(e,t,n){var r=Ot(t,n);if(!isNaN(r)){if(0<r)throw RangeError();if(Vn(e))return o(e,{from:t,to:n,d:1});var r=e.l,i=e.r;if(Ot(n,e.from)<0)return r?Un(r,t,n):e.l={from:t,to:n,d:1,l:null,r:null},qn(e);if(0<Ot(t,e.to))return i?Un(i,t,n):e.r={from:t,to:n,d:1,l:null,r:null},qn(e);Ot(t,e.from)<0&&(e.from=t,e.l=null,e.d=i?i.d+1:1),0<Ot(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,r&&!e.l&&Wn(e,r),i&&t&&Wn(e,i)}}function Wn(e,t){Vn(t)||function e(t,n){var r=n.from,i=n.l,a=n.r;Un(t,r,n.to),i&&e(t,i),a&&e(t,a)}(e,t)}function Gn(e,t){var n=Kn(t),r=n.next();if(!r.done)for(var i=r.value,a=Kn(e),o=a.next(i.from),s=o.value;!r.done&&!o.done;){if(Ot(s.from,i.to)<=0&&0<=Ot(s.to,i.from))return!0;Ot(i.from,s.from)<0?i=(r=n.next(s.from)).value:s=(o=a.next(i.from)).value}return!1}function Kn(e){var t=Vn(e)?null:{s:0,n:e};return{next:function(e){for(var n=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,n)for(;t.n.l&&Ot(e,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!n||Ot(e,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function qn(e){var n,r,i,a=((a=e.r)?.d||0)-((a=e.l)?.d||0),a=1<a?`r`:a<-1?`l`:``;a&&(n=a==`r`?`l`:`r`,r=t({},e),i=e[a],e.from=i.from,e.to=i.to,e[a]=i[a],r[a]=i[n],(e[n]=r).d=Jn(r)),e.d=Jn(e)}function Jn(e){var t=e.r,e=e.l;return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}function Yn(e,t){return i(t).forEach(function(n){e[n]?Wn(e[n],t[n]):e[n]=function e(t){var n,r,i={};for(n in t)l(t,n)&&(r=t[n],i[n]=!r||typeof r!=`object`||E.has(r.constructor)?r:e(r));return i}(t[n])}),e}function Xn(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Gn(t[n],e[n])})}u(Hn.prototype,((k={add:function(e){return Wn(this,e),this},addKey:function(e){return Un(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(e){return Un(t,e,e)}),this},hasKey:function(e){var t=Kn(this).next(e).value;return t&&Ot(t.from,e)<=0&&0<=Ot(t.to,e)}})[re]=function(){return Kn(this)},k));var Zn={},Qn={},$n=!1;function er(e){Yn(Qn,e),$n||($n=!0,setTimeout(function(){$n=!1,tr(Qn,!(Qn={}))},0))}function tr(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var r=0,i=Object.values(Zn);r<i.length;r++)nr(s=i[r],e,n,t);else for(var a in e){var o,s,a=/^idb\:\/\/(.*)\/(.*)\//.exec(a);a&&(o=a[1],a=a[2],s=Zn[`idb://${o}/${a}`])&&nr(s,e,n,t)}n.forEach(function(e){return e()})}function nr(e,t,n,r){for(var i=[],a=0,o=Object.entries(e.queries.query);a<o.length;a++){for(var s=o[a],c=s[0],l=[],u=0,d=s[1];u<d.length;u++){var f=d[u];Xn(t,f.obsSet)?f.subscribers.forEach(function(e){return n.add(e)}):r&&l.push(f)}r&&i.push([c,l])}if(r)for(var p=0,m=i;p<m.length;p++){var h=m[p],c=h[0],l=h[1];e.queries.query[c]=l}}function rr(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?_t(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var r=t.openCanceller,a=Math.round(10*e.verno),o=!1;function s(){if(t.openCanceller!==r)throw new A.DatabaseClosed(`db.open() was cancelled`)}function c(){return new M(function(r,l){if(s(),!n)throw new A.MissingAPI;var u=e.name,p=t.autoSchema||!a?n.open(u):n.open(u,a);if(!p)throw new A.MissingAPI;p.onerror=an(l),p.onblocked=et(e._fireOnBlocked),p.onupgradeneeded=et(function(r){var i;d=p.transaction,t.autoSchema&&!e._options.allowEmptyDB?(p.onerror=on,d.abort(),p.result.close(),(i=n.deleteDatabase(u)).onsuccess=i.onerror=et(function(){l(new A.NoSuchDatabase(`Database ${u} doesnt exist`))})):(d.onerror=an(l),i=r.oldVersion>2**62?0:r.oldVersion,f=i<1,e.idbdb=p.result,o&&Dn(e,d),En(e,i/10,d,l))},l),p.onsuccess=et(function(){d=null;var n,s,l,m,h,_,v=e.idbdb=p.result,y=g(v.objectStoreNames);if(0<y.length)try{var b=v.transaction((h=y).length===1?h[0]:h,`readonly`);if(t.autoSchema)_=v,m=b,(l=e).verno=_.version/10,m=l._dbSchema=Mn(0,_,m),l._storeNames=g(_.objectStoreNames,0),Cn(l,[l._allTables],i(m),m);else if(Nn(e,e._dbSchema,b),s=b,((s=On(Mn(0,(n=e).idbdb,s),n._dbSchema)).add.length||s.change.some(function(e){return e.add.length||e.change.length}))&&!o)return console.warn(`Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.`),v.close(),a=v.version+1,o=!0,r(c());Sn(e,b)}catch{}Ln.add(e),v.onversionchange=et(function(n){t.vcFired=!0,e.on(`versionchange`).fire(n)}),v.onclose=et(function(){e.close({disableAutoOpen:!1})}),f&&(y=e._deps,h=u,zn(_=y.indexedDB)||h===xt||Rn(_,y.IDBKeyRange).put({name:h}).catch(ge)),r()},l)}).catch(function(e){switch(e?.name){case`UnknownError`:if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn(`Dexie: Workaround for Chrome UnknownError on open()`),c();break;case`VersionError`:if(0<a)return a=0,c()}return M.reject(e)})}var l,u=t.dbReadyResolve,d=null,f=!1;return M.race([r,(typeof navigator>`u`?M.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){function t(){return indexedDB.databases().finally(e)}l=setInterval(t,100),t()}).finally(function(){return clearInterval(l)}):Promise.resolve()).then(c)]).then(function(){return s(),t.onReadyBeingFired=[],M.resolve(Bn(function(){return e.on.ready.fire(e.vip)})).then(function n(){var r;if(0<t.onReadyBeingFired.length)return r=t.onReadyBeingFired.reduce(we,ge),t.onReadyBeingFired=[],M.resolve(Bn(function(){return r(e.vip)})).then(n)})}).finally(function(){t.openCanceller===r&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(n){t.dbOpenError=n;try{d&&d.abort()}catch{}return r===t.openCanceller&&e._close(),_t(n)}).finally(function(){t.openComplete=!0,u()}).then(function(){var t;return f&&(t={},e.tables.forEach(function(n){n.schema.indexes.forEach(function(r){r.name&&(t[`idb://${e.name}/${n.name}/${r.name}`]=new Hn(-1/0,[[[]]]))}),t[`idb://${e.name}/${n.name}/`]=t[`idb://${e.name}/${n.name}/:dels`]=new Hn(-1/0,[[[]]])}),ln(sn).fire(t),tr(t,!0)),e})}function ir(e){function t(t){return e.next(t)}var n=i(t),r=i(function(t){return e.throw(t)});function i(e){return function(t){var t=e(t),i=t.value;return t.done?i:i&&typeof i.then==`function`?i.then(n,r):a(i)?Promise.all(i).then(n,r):n(i)}}return i(t)()}function ar(e,t,n){for(var r=a(e)?e.slice():[e],i=0;i<n;++i)r.push(t);return r}var or={stack:`dbcore`,name:`VirtualIndexMiddleware`,level:1,create:function(e){return t(t({},e),{table:function(n){var r=e.table(n),n=r.schema,i={},a=[];function o(e,n,r){var s=yn(e),c=i[s]=i[s]||[],l=e==null?0:typeof e==`string`?1:e.length,u=0<n,s=t(t({},r),{name:u?`${s}(virtual-from:${r.name})`:r.name,lowLevelIndex:r,isVirtual:u,keyTail:n,keyLength:l,extractKey:gn(e),unique:!u&&r.unique});return c.push(s),s.isPrimaryKey||a.push(s),1<l&&o(l===2?e[0]:e.slice(0,l-1),n+1,r),c.sort(function(e,t){return e.keyTail-t.keyTail}),s}var s=o(n.primaryKey.keyPath,0,n.primaryKey);i[`:id`]=[s];for(var c=0,l=n.indexes;c<l.length;c++){var u=l[c];o(u.keyPath,0,u)}function d(n){var r,i=n.query.index;return i.isVirtual?t(t({},n),{query:{index:i.lowLevelIndex,range:(r=n.query.range,i=i.keyTail,{type:r.type===1?2:r.type,lower:ar(r.lower,r.lowerOpen?e.MAX_KEY:e.MIN_KEY,i),lowerOpen:!0,upper:ar(r.upper,r.upperOpen?e.MIN_KEY:e.MAX_KEY,i),upperOpen:!0})}}):n}return t(t({},r),{schema:t(t({},n),{primaryKey:s,indexes:a,getIndexByKeyPath:function(e){return(e=i[yn(e)])&&e[0]}}),count:function(e){return r.count(d(e))},query:function(e){return r.query(d(e))},openCursor:function(t){var n=t.query.index,i=n.keyTail,a=n.keyLength;return n.isVirtual?r.openCursor(d(t)).then(function(e){return e&&o(e)}):r.openCursor(t);function o(n){return Object.create(n,{continue:{value:function(r){r==null?t.unique?n.continue(n.key.slice(0,a).concat(t.reverse?e.MIN_KEY:e.MAX_KEY,i)):n.continue():n.continue(ar(r,t.reverse?e.MAX_KEY:e.MIN_KEY,i))}},continuePrimaryKey:{value:function(t,r){n.continuePrimaryKey(ar(t,e.MAX_KEY,i),r)}},primaryKey:{get:function(){return n.primaryKey}},key:{get:function(){var e=n.key;return a===1?e[0]:e.slice(0,a)}},value:{get:function(){return n.value}}})}}})}})}};function sr(e,t,n,r){return n||={},r||=``,i(e).forEach(function(i){var a,o,s;l(t,i)?(a=e[i],o=t[i],typeof a==`object`&&typeof o==`object`&&a&&o?(s=ne(a))===ne(o)?s===`Object`?sr(a,o,n,r+i+`.`):a!==o&&(n[r+i]=t[i]):n[r+i]=t[i]:a!==o&&(n[r+i]=t[i])):n[r+i]=void 0}),i(t).forEach(function(i){l(e,i)||(n[r+i]=t[i])}),n}function cr(e,t){return t.type===`delete`?t.keys:t.keys||t.values.map(e.extractKey)}var lr={stack:`dbcore`,name:`HooksMiddleware`,level:2,create:function(e){return t(t({},e),{table:function(r){var i=e.table(r),a=i.schema.primaryKey;return t(t({},i),{mutate:function(e){var o=j.trans,s=o.table(r).hook,c=s.deleting,u=s.creating,d=s.updating;switch(e.type){case`add`:if(u.fire===ge)break;return o._promise(`readwrite`,function(){return f(e)},!0);case`put`:if(u.fire===ge&&d.fire===ge)break;return o._promise(`readwrite`,function(){return f(e)},!0);case`delete`:if(c.fire===ge)break;return o._promise(`readwrite`,function(){return f(e)},!0);case`deleteRange`:if(c.fire===ge)break;return o._promise(`readwrite`,function(){return function e(n,r,o){return i.query({trans:n,values:!1,query:{index:a,range:r},limit:o}).then(function(i){var a=i.result;return f({type:`delete`,keys:a,trans:n}).then(function(i){return 0<i.numFailures?Promise.reject(i.failures[0]):a.length<o?{failures:[],numFailures:0,lastResult:void 0}:e(n,t(t({},r),{lower:a[a.length-1],lowerOpen:!0}),o)})})}(e.trans,e.range,1e4)},!0)}return i.mutate(e);function f(e){var r,o,s,f=j.trans,p=e.keys||cr(a,e);if(p)return(e=e.type===`add`||e.type===`put`?t(t({},e),{keys:p}):t({},e)).type!==`delete`&&(e.values=n([],e.values,!0)),e.keys&&=n([],e.keys,!0),r=i,s=p,((o=e).type===`add`?Promise.resolve([]):r.getMany({trans:o.trans,keys:s,cache:`immutable`})).then(function(t){var n=p.map(function(n,r){var i,o,s,p=t[r],m={onerror:null,onsuccess:null};return e.type===`delete`?c.fire.call(m,n,p,f):e.type===`add`||p===void 0?(i=u.fire.call(m,n,e.values[r],f),n==null&&i!=null&&(e.keys[r]=n=i,a.outbound||x(e.values[r],a.keyPath,n))):(i=sr(p,e.values[r]),(o=d.fire.call(m,i,n,p,f))&&(s=e.values[r],Object.keys(o).forEach(function(e){l(s,e)?s[e]=o[e]:x(s,e,o[e])}))),m});return i.mutate(e).then(function(r){for(var i=r.failures,a=r.results,o=r.numFailures,r=r.lastResult,s=0;s<p.length;++s){var c=(a||p)[s],l=n[s];c==null?l.onerror&&l.onerror(i[s]):l.onsuccess&&l.onsuccess(e.type===`put`&&t[s]?e.values[s]:c)}return{failures:i,results:a,numFailures:o,lastResult:r}}).catch(function(e){return n.forEach(function(t){return t.onerror&&t.onerror(e)}),Promise.reject(e)})});throw Error(`Keys missing`)}}})}})}};function ur(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var r=[],i=0,a=0;i<t.keys.length&&a<e.length;++i)Ot(t.keys[i],e[a])===0&&(r.push(n?D(t.values[i]):t.values[i]),++a);return r.length===e.length?r:null}catch{return null}}var dr={stack:`dbcore`,level:-1,create:function(e){return{table:function(n){var r=e.table(n);return t(t({},r),{getMany:function(e){var t;return e.cache?(t=ur(e.keys,e.trans._cache,e.cache===`clone`))?M.resolve(t):r.getMany(e).then(function(t){return e.trans._cache={keys:e.keys,values:e.cache===`clone`?D(t):t},t}):r.getMany(e)},mutate:function(e){return e.type!==`add`&&(e.trans._cache=null),r.mutate(e)}})}}}};function fr(e,t){return e.trans.mode===`readonly`&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!==`disabled`&&!t.schema.primaryKey.outbound}function pr(e,t){switch(e){case`query`:return t.values&&!t.unique;case`get`:case`getMany`:case`count`:case`openCursor`:return!1}}var mr={stack:`dbcore`,level:0,name:`Observability`,create:function(e){var n=e.schema.name,r=new Hn(e.MIN_KEY,e.MAX_KEY);return t(t({},e),{transaction:function(t,n,r){if(j.subscr&&n!==`readonly`)throw new A.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${j.querier}`);return e.transaction(t,n,r)},table:function(o){function s(t){var t=t.query;return[t.index,new Hn((t=t.range).lower??e.MIN_KEY,t.upper??e.MAX_KEY)]}var c=e.table(o),l=c.schema,u=l.primaryKey,d=l.indexes,f=u.extractKey,p=u.outbound,m=u.autoIncrement&&d.filter(function(e){return e.compound&&e.keyPath.includes(u.keyPath)}),h=t(t({},c),{mutate:function(t){function i(e){return e=`idb://${n}/${o}/${e}`,h[e]||(h[e]=new Hn)}var s,d,f,p=t.trans,h=t.mutatedParts||={},g=i(``),_=i(`:dels`),v=t.type,y=t.type===`deleteRange`?[t.range]:t.type===`delete`?[t.keys]:t.values.length<50?[cr(u,t).filter(function(e){return e}),t.values]:[],b=y[0],y=y[1],x=t.trans._cache;return a(b)?(g.addKeys(b),(v=v===`delete`||b.length===y.length?ur(b,x):null)||_.addKeys(b),(v||y)&&(s=i,d=v,f=y,l.indexes.forEach(function(e){var t=s(e.name||``);function n(t){return t==null?null:e.extractKey(t)}function r(n){e.multiEntry&&a(n)?n.forEach(function(e){return t.addKey(e)}):t.addKey(n)}(d||f).forEach(function(e,t){var i=d&&n(d[t]),t=f&&n(f[t]);Ot(i,t)!==0&&(i!=null&&r(i),t!=null)&&r(t)})}))):b?(y={from:(x=b.lower)??e.MIN_KEY,to:(v=b.upper)??e.MAX_KEY},_.add(y),g.add(y)):(g.add(r),_.add(r),l.indexes.forEach(function(e){return i(e.name).add(r)})),c.mutate(t).then(function(e){return!b||t.type!==`add`&&t.type!==`put`||(g.addKeys(e.results),m&&m.forEach(function(n){for(var r=t.values.map(function(e){return n.extractKey(e)}),a=n.keyPath.findIndex(function(e){return e===u.keyPath}),o=0,s=e.results.length;o<s;++o)r[o][a]=e.results[o];i(n.name).addKeys(r)})),p.mutatedParts=Yn(p.mutatedParts||{},h),e})}}),g={get:function(e){return[u,new Hn(e.key)]},getMany:function(e){return[u,new Hn().addKeys(e.keys)]},count:s,query:s,openCursor:s};return i(g).forEach(function(e){h[e]=function(i){var a=j.subscr,s=!!a,l=fr(j,c)&&pr(e,i)?i.obsSet={}:a;if(s){var u,a=function(e){return e=`idb://${n}/${o}/${e}`,l[e]||(l[e]=new Hn)},d=a(``),m=a(`:dels`),s=g[e](i),h=s[0],s=s[1];if((e===`query`&&h.isPrimaryKey&&!i.values?m:a(h.name||``)).add(s),!h.isPrimaryKey){if(e!==`count`)return u=e===`query`&&p&&i.values&&c.query(t(t({},i),{values:!1})),c[e].apply(this,arguments).then(function(t){if(e===`query`){if(p&&i.values)return u.then(function(e){return e=e.result,d.addKeys(e),t});var n=i.values?t.result.map(f):t.result;(i.values?d:m).addKeys(n)}else{var r,a;if(e===`openCursor`)return a=i.values,(r=t)&&Object.create(r,{key:{get:function(){return m.addKey(r.primaryKey),r.key}},primaryKey:{get:function(){var e=r.primaryKey;return m.addKey(e),e}},value:{get:function(){return a&&d.addKey(r.primaryKey),r.value}}})}return t});m.add(r)}}return c[e].apply(this,arguments)}}),h}})}};function hr(e,n,r){var i;return r.numFailures===0?n:n.type===`deleteRange`||(i=n.keys?n.keys.length:`values`in n&&n.values?n.values.length:1,r.numFailures===i)?null:(i=t({},n),a(i.keys)&&(i.keys=i.keys.filter(function(e,t){return!(t in r.failures)})),`values`in i&&a(i.values)&&(i.values=i.values.filter(function(e,t){return!(t in r.failures)})),i)}function gr(e,t){return n=e,((r=t).lower===void 0||(r.lowerOpen?0<Ot(n,r.lower):0<=Ot(n,r.lower)))&&(n=e,(r=t).upper===void 0||(r.upperOpen?Ot(n,r.upper)<0:Ot(n,r.upper)<=0));var n,r}function _r(e,t,n,r,i,o){var s,c,l,u,d,f,p;return!n||n.length===0||(s=t.query.index,c=s.multiEntry,l=t.query.range,u=r.schema.primaryKey.extractKey,d=s.extractKey,f=(s.lowLevelIndex||s).extractKey,(r=n.reduce(function(e,n){var r=e,i=[];if(n.type===`add`||n.type===`put`)for(var o=new Hn,s=n.values.length-1;0<=s;--s){var f,p=n.values[s],m=u(p);!o.hasKey(m)&&(f=d(p),c&&a(f)?f.some(function(e){return gr(e,l)}):gr(f,l))&&(o.addKey(m),i.push(p))}switch(n.type){case`add`:var h=new Hn().addKeys(t.values?e.map(function(e){return u(e)}):e),r=e.concat(t.values?i.filter(function(e){return e=u(e),!h.hasKey(e)&&(h.addKey(e),!0)}):i.map(function(e){return u(e)}).filter(function(e){return!h.hasKey(e)&&(h.addKey(e),!0)}));break;case`put`:var g=new Hn().addKeys(n.values.map(function(e){return u(e)}));r=e.filter(function(e){return!g.hasKey(t.values?u(e):e)}).concat(t.values?i:i.map(function(e){return u(e)}));break;case`delete`:var _=new Hn().addKeys(n.keys);r=e.filter(function(e){return!_.hasKey(t.values?u(e):e)});break;case`deleteRange`:var v=n.range;r=e.filter(function(e){return!gr(u(e),v)})}return r},e))===e)?e:(p=function(e,t){return Ot(f(e),f(t))||Ot(u(e),u(t))},r.sort(t.direction===`prev`||t.direction===`prevunique`?function(e,t){return p(t,e)}:p),t.limit&&t.limit<1/0&&(r.length>t.limit?r.length=t.limit:e.length===t.limit&&r.length<t.limit&&(i.dirty=!0)),o?Object.freeze(r):r)}function vr(e,t){return Ot(e.lower,t.lower)===0&&Ot(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function yr(e,t){return((e,t,n,r)=>{if(e===void 0)return t===void 0?0:-1;if(t===void 0)return 1;if((e=Ot(e,t))===0){if(n&&r)return 0;if(n)return 1;if(r)return-1}return e})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((e,t,n,r)=>{if(e===void 0)return t===void 0?0:1;if(t===void 0)return-1;if((e=Ot(e,t))===0){if(n&&r)return 0;if(n)return-1;if(r)return 1}return e})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function br(e,t,n,r){e.subscribers.add(n),r.addEventListener(`abort`,function(){var r,i;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,i=t,setTimeout(function(){r.subscribers.size===0&&ae(i,r)},3e3))})}var xr={stack:`dbcore`,level:0,name:`Cache`,create:function(e){var n=e.schema.name;return t(t({},e),{transaction:function(t,r,i){var a,o,s=e.transaction(t,r,i);return r===`readwrite`&&(i=(a=new AbortController).signal,s.addEventListener(`abort`,(o=function(i){return function(){if(a.abort(),r===`readwrite`){for(var o=new Set,c=0,l=t;c<l.length;c++){var u=l[c],d=Zn[`idb://${n}/${u}`];if(d){var f=e.table(u),p=d.optimisticOps.filter(function(e){return e.trans===s});if(s._explicit&&i&&s.mutatedParts)for(var m=0,h=Object.values(d.queries.query);m<h.length;m++)for(var g=0,_=(b=h[m]).slice();g<_.length;g++)Xn((x=_[g]).obsSet,s.mutatedParts)&&(ae(b,x),x.subscribers.forEach(function(e){return o.add(e)}));else if(0<p.length){d.optimisticOps=d.optimisticOps.filter(function(e){return e.trans!==s});for(var v=0,y=Object.values(d.queries.query);v<y.length;v++)for(var b,x,S,C=0,w=(b=y[v]).slice();C<w.length;C++)(x=w[C]).res!=null&&s.mutatedParts&&(i&&!x.dirty?(S=Object.isFrozen(x.res),S=_r(x.res,x.req,p,f,x,S),x.dirty?(ae(b,x),x.subscribers.forEach(function(e){return o.add(e)})):S!==x.res&&(x.res=S,x.promise=M.resolve({result:S}))):(x.dirty&&ae(b,x),x.subscribers.forEach(function(e){return o.add(e)})))}}}o.forEach(function(e){return e()})}}})(!1),{signal:i}),s.addEventListener(`error`,o(!1),{signal:i}),s.addEventListener(`complete`,o(!0),{signal:i})),s},table:function(r){var i=e.table(r),a=i.schema.primaryKey;return t(t({},i),{mutate:function(e){var o,s=j.trans;return!a.outbound&&s.db._options.cache!==`disabled`&&!s.explicit&&s.idbtrans.mode===`readwrite`&&(o=Zn[`idb://${n}/${r}`])?(s=i.mutate(e),e.type!==`add`&&e.type!==`put`||!(50<=e.values.length||cr(a,e).some(function(e){return e==null}))?(o.optimisticOps.push(e),e.mutatedParts&&er(e.mutatedParts),s.then(function(t){0<t.numFailures&&(ae(o.optimisticOps,e),(t=hr(0,e,t))&&o.optimisticOps.push(t),e.mutatedParts)&&er(e.mutatedParts)}),s.catch(function(){ae(o.optimisticOps,e),e.mutatedParts&&er(e.mutatedParts)})):s.then(function(n){var r=hr(0,t(t({},e),{values:e.values.map(function(e,r){var i;return n.failures[r]?e:(x(i=(i=a.keyPath)!=null&&i.includes(`.`)?D(e):t({},e),a.keyPath,n.results[r]),i)})}),n);o.optimisticOps.push(r),queueMicrotask(function(){return e.mutatedParts&&er(e.mutatedParts)})}),s):i.mutate(e)},query:function(e){var t,a,o,s,c,l,u;return fr(j,i)&&pr(`query`,e)?(t=(o=j.trans)?.db._options.cache===`immutable`,a=(o=j).requery,o=o.signal,l=((e,t,n,r)=>{var i=Zn[`idb://${e}/${t}`];if(!i)return[];if(!(e=i.queries[n]))return[null,!1,i,null];var a=e[(r.query?r.query.index.name:null)||``];if(!a)return[null,!1,i,null];switch(n){case`query`:var o=(s=r.direction)??`next`,s=a.find(function(e){return e.req.limit===r.limit&&e.req.values===r.values&&(e.req.direction??`next`)===o&&vr(e.req.query.range,r.query.range)});return s?[s,!0,i,a]:[a.find(function(e){return(`limit`in e.req?e.req.limit:1/0)>=r.limit&&(e.req.direction??`next`)===o&&(!r.values||e.req.values)&&yr(e.req.query.range,r.query.range)}),!1,i,a];case`count`:return s=a.find(function(e){return vr(e.req.query.range,r.query.range)}),[s,!!s,i,a]}})(n,r,`query`,e),u=l[0],s=l[2],c=l[3],u&&l[1]?u.obsSet=e.obsSet:(l=i.query(e).then(function(e){var n=e.result;if(u&&(u.res=n),t){for(var r=0,i=n.length;r<i;++r)Object.freeze(n[r]);Object.freeze(n)}else e.result=D(n);return e}).catch(function(e){return c&&u&&ae(c,u),Promise.reject(e)}),u={obsSet:e.obsSet,promise:l,subscribers:new Set,type:`query`,req:e,dirty:!1},c?c.push(u):(c=[u],(s||=Zn[`idb://${n}/${r}`]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}).queries.query[e.query.index.name||``]=c)),br(u,c,a,o),u.promise.then(function(n){return{result:_r(n.result,e,s?.optimisticOps,i,u,t)}})):i.query(e)}})}})}};function Sr(e,t){return new Proxy(e,{get:function(e,n,r){return n===`db`?t:Reflect.get(e,n,r)}})}wr.prototype.version=function(e){if(isNaN(e)||e<.1)throw new A.Type(`Given version is not a positive number`);if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new A.Schema(`Cannot add version when database is open`);this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(t){return t._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Tn),n.stores({}),this._state.autoSchema=!1),n},wr.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||j.letThrough||this._vip)?e():new M(function(e,n){if(t._state.openComplete)return n(new A.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void n(new A.DatabaseClosed);t.open().catch(ge)}t._state.dbReadyPromise.then(e,n)}).then(e)},wr.prototype.use=function(e){var t=e.stack,n=e.create,r=e.level,e=e.name,i=(e&&this.unuse({stack:t,name:e}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:r??10,name:e}),i.sort(function(e,t){return e.level-t.level}),this},wr.prototype.unuse=function(e){var t=e.stack,n=e.name,r=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(e){return r?e.create!==r:!!n&&e.name!==n})),this},wr.prototype.open=function(){var e=this;return mt(ze,function(){return rr(e)})},wr.prototype._close=function(){this.on.close.fire(new CustomEvent(`close`));var e=this._state;if(Ln.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new M(function(t){e.dbReadyResolve=t}),e.openCanceller=new M(function(t,n){e.cancelOpen=n}))},wr.prototype.close=function(e){var e=(e===void 0?{disableAutoOpen:!0}:e).disableAutoOpen,t=this._state;e?(t.isBeingOpened&&t.cancelOpen(new A.DatabaseClosed),this._close(),t.autoOpen=!1,t.dbOpenError=new A.DatabaseClosed):(this._close(),t.autoOpen=this._options.autoOpen||t.isBeingOpened,t.openComplete=!1,t.dbOpenError=null)},wr.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!=`object`),r=this._state;return new M(function(i,a){function o(){t.close(e);var n=t._deps.indexedDB.deleteDatabase(t.name);n.onsuccess=et(function(){var e=t._deps,n=t.name,r;zn(r=e.indexedDB)||n===xt||Rn(r,e.IDBKeyRange).delete(n).catch(ge),i()}),n.onerror=an(a),n.onblocked=t._fireOnBlocked}if(n)throw new A.InvalidArgument(`Invalid closeOptions argument to db.delete()`);r.isBeingOpened?r.dbReadyPromise.then(o):o()})},wr.prototype.backendDB=function(){return this.idbdb},wr.prototype.isOpen=function(){return this.idbdb!==null},wr.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name===`DatabaseClosed`},wr.prototype.hasFailed=function(){return this._state.dbOpenError!==null},wr.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(wr.prototype,"tables",{get:function(){var e=this;return i(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),wr.prototype.transaction=function(){var e=function(e,t,n){var r=arguments.length;if(r<2)throw new A.InvalidArgument(`Too few arguments`);for(var i=Array(r-1);--r;)i[r-1]=arguments[r];return n=i.pop(),[e,w(i),n]}.apply(this,arguments);return this._transaction.apply(this,e)},wr.prototype._transaction=function(e,t,n){var r,i,a=this,o=j.trans,s=(o&&o.db===this&&e.indexOf(`!`)===-1||(o=null),e.indexOf(`?`)!==-1);e=e.replace(`!`,``).replace(`?`,``);try{if(i=t.map(function(e){if(e=e instanceof a.Table?e.name:e,typeof e!=`string`)throw TypeError(`Invalid table argument to Dexie.transaction(). Only Table or String are allowed`);return e}),e==`r`||e===St)r=St;else{if(e!=`rw`&&e!=Ct)throw new A.InvalidArgument(`Invalid transaction mode: `+e);r=Ct}if(o){if(o.mode===St&&r===Ct){if(!s)throw new A.SubTransaction(`Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY`);o=null}o&&i.forEach(function(e){if(o&&o.storeNames.indexOf(e)===-1){if(!s)throw new A.SubTransaction(`Table `+e+` not included in parent transaction.`);o=null}}),s&&o&&!o.active&&(o=null)}}catch(e){return o?o._promise(null,function(t,n){n(e)}):_t(e)}var c=function e(t,n,r,i,a){return M.resolve().then(function(){var o=j.transless||j,s=t._createTransaction(n,r,t._dbSchema,i),o=(s.explicit=!0,{trans:s,transless:o});if(i)s.idbtrans=i.idbtrans;else try{s.create(),s.idbtrans._explicit=!0,t._state.PR1398_maxLoop=3}catch(i){return i.name===pe.InvalidState&&t.isOpen()&&0<--t._state.PR1398_maxLoop?(console.warn(`Dexie: Need to reopen db`),t.close({disableAutoOpen:!1}),t.open().then(function(){return e(t,n,r,null,a)})):_t(i)}var c,l=O(a),o=(l&&ct(),M.follow(function(){var e;(c=a.call(s,s))&&(l?(e=lt.bind(null,null),c.then(e,e)):typeof c.next==`function`&&typeof c.throw==`function`&&(c=ir(c)))},o));return(c&&typeof c.then==`function`?M.resolve(c).then(function(e){return s.active?e:_t(new A.PrematureCommit(`Transaction committed too early. See http://bit.ly/2kdckMn`))}):o.then(function(){return c})).then(function(e){return i&&s._resolve(),s._completion.then(function(){return e})}).catch(function(e){return s._reject(e),_t(e)})})}.bind(null,this,r,i,o,n);return o?o._promise(r,c,`lock`):j.trans?mt(j.transless,function(){return a._whenReady(c)}):this._whenReady(c)},wr.prototype.table=function(e){if(l(this._allTables,e))return this._allTables[e];throw new A.InvalidTable(`Table ${e} does not exist`)};var Cr=wr;function wr(e,n){var r,i,a,o,s,c=this,l=(this._middlewares={},this.verno=0,wr.dependencies),l=(this._options=n=t({addons:wr.addons,autoOpen:!0,indexedDB:l.indexedDB,IDBKeyRange:l.IDBKeyRange,cache:`cloned`,maxConnections:1e3},n),this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange},n.addons),u=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ge,dbReadyPromise:null,cancelOpen:ge,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:n.autoOpen}),d=(u.dbReadyPromise=new M(function(e){u.dbReadyResolve=e}),u.openCanceller=new M(function(e,t){u.cancelOpen=t}),this._state=u,this.name=e,this.on=Lt(this,`populate`,`blocked`,`versionchange`,`close`,{ready:[we,ge]}),this.once=function(e,t){var n=function(){var r=[...arguments];c.on(e).unsubscribe(n),t.apply(c,r)};return c.on(e,n)},this.on.ready.subscribe=_(this.on.ready.subscribe,function(e){return function(t,n){wr.vip(function(){var r,i=c._state;i.openComplete?(i.dbOpenError||M.resolve().then(t),n&&e(t)):i.onReadyBeingFired?(i.onReadyBeingFired.push(t),n&&e(t)):(e(t),r=c,n||e(function e(){r.on.ready.unsubscribe(t),r.on.ready.unsubscribe(e)}))})}}),this.Collection=(r=this,Rt(Kt.prototype,function(e,t){this.db=r;var n=Tt,i=null;if(t)try{n=t()}catch(e){i=e}var t=e._ctx,e=t.table,a=e.hook.reading.fire;this._ctx={table:e,index:t.index,isPrimKey:!t.index||e.schema.primKey.keyPath&&t.index===e.schema.primKey.name,range:n,keysOnly:!1,dir:`next`,unique:``,algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:i,or:t.or,valueMapper:a===_e?null:a}})),this.Table=(i=this,Rt(Ft.prototype,function(e,t,n){this.db=i,this._tx=n,this.name=e,this.schema=t,this.hook=i._allTables[e]?i._allTables[e].hook:Lt(null,{creating:[be,ge],reading:[ve,_e],updating:[Se,ge],deleting:[xe,ge]})})),this.Transaction=(a=this,Rt(un.prototype,function(e,t,n,r,i){var o=this;e!==`readonly`&&t.forEach(function(e){e=(e=n[e])?.yProps,e&&(t=t.concat(e.map(function(e){return e.updatesTable})))}),this.db=a,this.mode=e,this.storeNames=t,this.schema=n,this.chromeTransactionDurability=r,this.idbtrans=null,this.on=Lt(this,`complete`,`error`,`abort`),this.parent=i||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new M(function(e,t){o._resolve=e,o._reject=t}),this._completion.then(function(){o.active=!1,o.on.complete.fire()},function(e){var t=o.active;return o.active=!1,o.on.error.fire(e),o.parent?o.parent._reject(e):t&&o.idbtrans&&o.idbtrans.abort(),_t(e)})})),this.Version=(o=this,Rt(Fn.prototype,function(e){this.db=o,this._cfg={version:e,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(s=this,Rt(nn.prototype,function(e,t,n){if(this.db=s,this._ctx={table:e,index:t===`:id`?null:t,or:n},this._cmp=this._ascending=Ot,this._descending=function(e,t){return Ot(t,e)},this._max=function(e,t){return 0<Ot(e,t)?e:t},this._min=function(e,t){return Ot(e,t)<0?e:t},this._IDBKeyRange=s._deps.IDBKeyRange,!this._IDBKeyRange)throw new A.MissingAPI})),this.on(`versionchange`,function(e){0<e.newVersion?console.warn(`Another connection wants to upgrade database '${c.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${c.name}'. Closing db now to resume the delete request.`),c.close({disableAutoOpen:!1})}),this.on(`blocked`,function(e){!e.newVersion||e.newVersion<e.oldVersion?console.warn(`Dexie.delete('${c.name}') was blocked`):console.warn(`Upgrade '${c.name}' blocked by other connection holding version ${e.oldVersion/10}`)}),this._maxKey=hn(n.IDBKeyRange),this._createTransaction=function(e,t,n,r){return new c.Transaction(e,t,n,c._options.chromeTransactionDurability,r)},this._fireOnBlocked=function(e){c.on(`blocked`).fire(e),Ln.toArray().filter(function(e){return e.name===c.name&&e!==c&&!e._state.vcFired}).map(function(t){return t.on(`versionchange`).fire(e)})},this.use(dr),this.use(xr),this.use(mr),this.use(or),this.use(lr),new Proxy(this,{get:function(e,t,n){var r;return t===`_vip`||(t===`table`?function(e){return Sr(c.table(e),d)}:(r=Reflect.get(e,t,n))instanceof Ft?Sr(r,d):t===`tables`?r.map(function(e){return Sr(e,d)}):t===`_createTransaction`?function(){return Sr(r.apply(this,arguments),d)}:r)}}));this.vip=d,l.forEach(function(e){return e(c)})}var Tr,Ae=typeof Symbol<`u`&&`observable`in Symbol?Symbol.observable:`@@observable`,Er=(Dr.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!=`function`?e:{next:e,error:t,complete:n})},Dr.prototype[Ae]=function(){return this},Dr);function Dr(e){this._subscribe=e}try{Tr={indexedDB:r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB,IDBKeyRange:r.IDBKeyRange||r.webkitIDBKeyRange}}catch{Tr={indexedDB:null,IDBKeyRange:null}}function Or(e){var t,n=!1,r=new Er(function(r){var i=O(e),a,o=!1,s={},c={},l={get closed(){return o},unsubscribe:function(){o||(o=!0,a&&a.abort(),u&&ln.storagemutated.unsubscribe(p))}},u=(r.start&&r.start(l),!1),d=function(){return gt(m)};function f(){return Xn(c,s)}var p=function(e){Yn(s,e),f()&&d()},m=function(){var l,m,h;!o&&Tr.indexedDB&&(s={},l={},a&&a.abort(),a=new AbortController,h=(t=>{var n=Xe();try{i&&ct();var r=st(e,t);return r=i?r.finally(lt):r}finally{n&&Ze()}})(m={subscr:l,signal:a.signal,requery:d,querier:e,trans:null}),u||=(ln.storagemutated.subscribe(p),!0),Promise.resolve(h).then(function(e){n=!0,t=e,o||m.signal.aborted||(f()||(c=l,f())?d():(s={},gt(function(){return!o&&r.next&&r.next(e)})))},function(e){n=!1,[`DatabaseClosedError`,`AbortError`].includes(e?.name)||o||gt(function(){o||r.error&&r.error(e)})}))};return setTimeout(d,0),l});return r.hasValue=function(){return n},r.getValue=function(){return t},r}var kr=Cr;function Ar(e){var t=Mr;try{Mr=!0,ln.storagemutated.fire(e),tr(e,!0)}finally{Mr=t}}u(kr,t(t({},T),{delete:function(e){return new kr(e,{addons:[]}).delete()},exists:function(e){return new kr(e,{addons:[]}).open().then(function(e){return e.close(),!0}).catch(`NoSuchDatabaseError`,function(){return!1})},getDatabaseNames:function(e){try{return t=kr.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(zn(n)?Promise.resolve(n.databases()).then(function(e){return e.map(function(e){return e.name}).filter(function(e){return e!==xt})}):Rn(n,t).toCollection().primaryKeys()).then(e)}catch{return _t(new A.MissingAPI)}var t,n},defineClass:function(){return function(e){o(this,e)}},ignoreTransaction:function(e){return j.trans?mt(j.transless||ze,e):e()},vip:Bn,async:function(e){return function(){try{var t=ir(e.apply(this,arguments));return t&&typeof t.then==`function`?t:M.resolve(t)}catch(e){return _t(e)}}},spawn:function(e,t,n){try{var r=ir(e.apply(n,t||[]));return r&&typeof r.then==`function`?r:M.resolve(r)}catch(e){return _t(e)}},currentTransaction:{get:function(){return j.trans||null}},waitFor:function(e,t){return e=M.resolve(typeof e==`function`?kr.ignoreTransaction(e):e).timeout(t||6e4),j.trans?j.trans.waitFor(e):e},Promise:M,debug:{get:function(){return Te},set:function(e){Ee(e)}},derive:p,extend:o,props:u,override:_,Events:Lt,on:ln,liveQuery:Or,extendObservabilitySet:Yn,getByKeyPath:b,setByKeyPath:x,delByKeyPath:function(e,t){typeof t==`string`?x(e,t,void 0):`length`in t&&[].map.call(t,function(t){x(e,t,void 0)})},shallowClone:S,deepClone:D,getObjectDiff:sr,cmp:Ot,asap:y,minKey:-1/0,addons:[],connections:{get:Ln.toArray},errnames:pe,dependencies:Tr,cache:Zn,semVer:`4.4.3`,version:`4.4.3`.split(`.`).map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/10**(2*n)})})),kr.maxKey=hn(kr.dependencies.IDBKeyRange),typeof dispatchEvent<`u`&&typeof addEventListener<`u`&&(ln(sn,function(e){Mr||=(e=new CustomEvent(cn,{detail:e}),Mr=!0,dispatchEvent(e),!1)}),addEventListener(cn,function(e){e=e.detail,Mr||Ar(e)}));var jr,Mr=!1,Nr=function(){};return typeof BroadcastChannel<`u`&&((Nr=function(){(jr=new BroadcastChannel(cn)).onmessage=function(e){return e.data&&Ar(e.data)}})(),typeof jr.unref==`function`&&jr.unref(),ln(sn,function(e){Mr||jr.postMessage(e)})),typeof addEventListener<`u`&&(addEventListener(`pagehide`,function(e){if(!Cr.disableBfCache&&e.persisted){Te&&console.debug(`Dexie: handling persisted pagehide`),jr?.close();for(var t=0,n=Ln.toArray();t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener(`pageshow`,function(e){!Cr.disableBfCache&&e.persisted&&(Te&&console.debug(`Dexie: handling persisted pageshow`),Nr(),Ar({all:new Hn(-1/0,[[]])}))})),M.rejectionMapper=function(e,t){return!e||e instanceof le||e instanceof TypeError||e instanceof SyntaxError||!e.name||!he[e.name]?e:(t=new he[e.name](t||e.message,e),`stack`in e&&f(t,`stack`,{get:function(){return this.inner.stack}}),t)},Ee(Te),t(Cr,Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:1e3,Dexie:Cr,Entity:Dt,PropModification:Mt,RangeSet:Hn,add:function(e){return new Mt({add:e})},cmp:Ot,default:Cr,liveQuery:Or,mergeRanges:Wn,rangesOverlap:Gn,remove:function(e){return new Mt({remove:e})},replacePrefix:function(e,t){return new Mt({replacePrefix:[e,t]})}}),{default:Cr}),Cr})}))(),1),wa=Symbol.for(`Dexie`),Ta=globalThis[wa]||(globalThis[wa]=Ca.default);if(Ca.default.semVer!==Ta.semVer)throw Error(`Two different versions of Dexie loaded in the same app: ${Ca.default.semVer} and ${Ta.semVer}`);var{liveQuery:Ea,mergeRanges:Da,rangesOverlap:Oa,RangeSet:ka,cmp:Aa,Entity:ja,PropModification:Ma,replacePrefix:Na,add:Pa,remove:Fa,DexieYProvider:Ia}=Ta;function La(e,t,n){let r,i;typeof e==`function`?(r=t||[],i=n):(r=[],i=t);let a=S.useRef({hasResult:!1,result:i,error:null}),[o,s]=S.useReducer(e=>e+1,0),c=S.useMemo(()=>{let t=typeof e==`function`?e():e;if(!t||typeof t.subscribe!=`function`)throw TypeError(e===t?`Given argument to useObservable() was neither a valid observable nor a function.`:`Observable factory given to useObservable() did not return a valid observable.`);if(!a.current.hasResult&&typeof window<`u`&&(typeof t.hasValue!=`function`||t.hasValue()))if(typeof t.getValue==`function`)a.current.result=t.getValue(),a.current.hasResult=!0;else{let e=t.subscribe(e=>{a.current.result=e,a.current.hasResult=!0});typeof e==`function`?e():e.unsubscribe()}return t},r);if(S.useDebugValue(a.current.result),S.useEffect(()=>{let e=c.subscribe(e=>{let{current:t}=a;(t.error!==null||t.result!==e)&&(t.error=null,t.result=e,t.hasResult=!0,s())},e=>{let{current:t}=a;t.error!==e&&(t.error=e,s())});return typeof e==`function`?e:e.unsubscribe.bind(e)},r),a.current.error)throw a.current.error;return a.current.result}function Ra(e,t,n){return La(()=>Ta.liveQuery(e),t||[],n)}typeof FinalizationRegistry<`u`&&new FinalizationRegistry(e=>{let t=Ta.DexieYProvider;t&&t.release(e)}),Reflect.get(S,`use`);var za=new class extends Ta{questions;records;srs_cards;constructor(){super(`HamTrainDB`),this.version(1).stores({questions:`&id, tag, category`,records:`++id, questionId, timestamp, isCorrect, [questionId+isCorrect]`}),this.version(2).stores({questions:`&id, tag, category`,records:`++id, questionId, timestamp, isCorrect, [questionId+isCorrect]`,srs_cards:`++id, &questionId, box, nextReview`})}},Ba={0:0,1:864e5,2:3*864e5,3:7*864e5,4:14*864e5,5:30*864e5},Va={0:`待复习`,1:`1天后`,2:`3天后`,3:`1周后`,4:`2周后`,5:`已毕业`},Ha=2;async function Ua(e,t){let n=await za.srs_cards.where(`questionId`).equals(e).first(),r=Date.now();if(!n){await za.srs_cards.add({questionId:e,box:0,nextReview:r,lastReview:r,streakCorrect:+!!t,totalReviews:1});return}let i=t?n.streakCorrect+1:0,a;a=t?n.box===0?+(i>=Ha):Math.min(5,n.box+1):0;let o=Ba[a],s=a===0?r:r+o;await za.srs_cards.update(n.id,{box:a,nextReview:s,lastReview:r,streakCorrect:i,totalReviews:n.totalReviews+1})}function Wa(e){return e.nextReview<=Date.now()}function Ga(){return{totalByCategory:Ra(async()=>{let e=await za.questions.toArray(),t={};for(let n of e)t[n.category]=(t[n.category]??0)+1;return t},[]),correctByCategory:Ra(async()=>{let e=await za.records.where(`isCorrect`).equals(1).toArray(),t=[...new Set(e.map(e=>e.questionId))],n=await za.questions.where(`id`).anyOf(t).toArray(),r={};for(let e of n)r[e.category]=(r[e.category]??0)+1;return r},[]),todayCount:Ra(async()=>{let e=new Date;return e.setHours(0,0,0,0),za.records.where(`timestamp`).above(e.getTime()).count()},[]),dueCount:Ra(async()=>(await za.srs_cards.toArray()).filter(Wa).length,[])}}var Ka=[{key:`0.法规管理`,name:`法规管理`,color:`bg-blue-500`},{key:`F.频率管理`,name:`频率管理`,color:`bg-purple-500`},{key:`1.操作实践`,name:`操作实践`,color:`bg-green-500`},{key:`2.发射技术`,name:`发射技术`,color:`bg-orange-500`},{key:`3.无线电传播`,name:`无线电传播`,color:`bg-cyan-500`},{key:`4.天线技术`,name:`天线技术`,color:`bg-yellow-500`},{key:`5.接收技术`,name:`接收技术`,color:`bg-rose-500`},{key:`6.电路基础`,name:`电路基础`,color:`bg-indigo-500`},{key:`7.安全`,name:`安全`,color:`bg-red-500`}];function qa(){let e=ut(),{totalByCategory:t,correctByCategory:n,todayCount:r,dueCount:i}=Ga(),a=t?Object.values(t).reduce((e,t)=>e+t,0):0,o=n?Object.values(n).reduce((e,t)=>e+t,0):0;return(0,F.jsxs)(`div`,{className:`mx-auto max-w-2xl px-4 py-6 space-y-6`,children:[(0,F.jsxs)(`div`,{className:`rounded-xl border bg-card p-4 shadow-sm`,children:[(0,F.jsx)(`h1`,{className:`text-lg font-bold mb-3`,children:`业余无线电 A 证刷题`}),(0,F.jsxs)(`div`,{className:`flex gap-6 text-sm`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`text-2xl font-bold text-primary`,children:r??0}),(0,F.jsx)(`span`,{className:`ml-1 text-muted-foreground`,children:`今日答题`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`text-2xl font-bold text-green-600`,children:o}),(0,F.jsxs)(`span`,{className:`ml-1 text-muted-foreground`,children:[`/ `,a,` 已掌握`]})]})]}),a>0&&(0,F.jsx)(`div`,{className:`mt-3 h-2 w-full overflow-hidden rounded-full bg-muted`,children:(0,F.jsx)(`div`,{className:`h-full rounded-full bg-green-500 transition-all`,style:{width:`${Math.round(o/a*100)}%`}})})]}),(i??0)>0&&(0,F.jsxs)(`button`,{onClick:()=>e(`/review`),className:`flex w-full items-center justify-between rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 shadow-sm hover:bg-primary/10 transition-all active:scale-95`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(or,{className:`h-5 w-5 text-primary`}),(0,F.jsxs)(`div`,{className:`text-left`,children:[(0,F.jsx)(`p`,{className:`text-sm font-semibold text-primary`,children:`间隔复习提醒`}),(0,F.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`有 `,(0,F.jsx)(`span`,{className:`font-bold text-primary`,children:i}),` 题到期，建议现在复习`]})]})]}),(0,F.jsx)(`span`,{className:`text-xs text-primary font-medium`,children:`开始 →`})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-3 gap-3`,children:[(0,F.jsxs)(`button`,{onClick:()=>e(`/practice`),className:`flex flex-col items-center gap-2 rounded-xl border bg-card p-4 shadow-sm hover:shadow-md transition-all active:scale-95`,children:[(0,F.jsx)(sr,{className:`h-6 w-6 text-primary`}),(0,F.jsx)(`span`,{className:`text-xs font-medium`,children:`顺序练习`})]}),(0,F.jsxs)(`button`,{onClick:()=>e(`/practice?shuffle=1`),className:`flex flex-col items-center gap-2 rounded-xl border bg-card p-4 shadow-sm hover:shadow-md transition-all active:scale-95`,children:[(0,F.jsx)(Tr,{className:`h-6 w-6 text-orange-500`}),(0,F.jsx)(`span`,{className:`text-xs font-medium`,children:`随机练习`})]}),(0,F.jsxs)(`button`,{onClick:()=>e(`/exam`),className:`flex flex-col items-center gap-2 rounded-xl border bg-card p-4 shadow-sm hover:shadow-md transition-all active:scale-95`,children:[(0,F.jsx)(gr,{className:`h-6 w-6 text-purple-500`}),(0,F.jsx)(`span`,{className:`text-xs font-medium`,children:`模拟考试`})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h2`,{className:`text-sm font-semibold text-muted-foreground mb-3`,children:`按类别练习`}),(0,F.jsx)(`div`,{className:`grid grid-cols-2 gap-3`,children:Ka.map(r=>(0,F.jsx)(Sa,{name:r.name,color:r.color,total:t?.[r.key]??0,correct:n?.[r.key]??0,onClick:()=>e(`/practice?category=${encodeURIComponent(r.key)}`)},r.key))})]})]})}function Ja({question:e,selected:t,onSelect:n,submitted:r,showAnswer:i,index:a,total:o}){let s=t=>e.answer_keys.includes(t),c=e=>t.includes(e),l=e=>{r||n(e)},u=r&&e.answer_keys.every(e=>t.includes(e))&&t.every(e=>s(e));return(0,F.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[a!==void 0&&o!==void 0&&(0,F.jsxs)(`div`,{className:`text-sm text-muted-foreground flex flex-wrap gap-x-2`,children:[(0,F.jsxs)(`span`,{children:[`第 `,a+1,` / `,o,` 题`]}),(0,F.jsx)(`span`,{children:`·`}),(0,F.jsx)(`span`,{children:e.type===`multiple`?`多选`:`单选`}),(0,F.jsx)(`span`,{children:`·`}),(0,F.jsx)(`span`,{className:`font-mono`,children:e.id}),(0,F.jsx)(`span`,{children:`·`}),(0,F.jsx)(`span`,{children:e.category.split(`.`).pop()})]}),(0,F.jsx)(`div`,{className:`rounded-lg border bg-card p-4 shadow-sm`,children:(0,F.jsx)(`p`,{className:`text-base font-medium leading-relaxed`,children:e.question})}),(0,F.jsx)(`div`,{className:`flex flex-col gap-2`,children:e.options.map(e=>{let t=c(e.key),n=s(e.key),a=`default`;return r||i?n&&t?a=`correct`:n&&!t?a=`missed`:!n&&t&&(a=`wrong`):t&&(a=`selected`),(0,F.jsxs)(`button`,{onClick:()=>l(e.key),disabled:r,className:ra(`flex items-start gap-3 rounded-lg border p-3 text-left text-sm transition-colors`,a==="default"&&`border-border bg-background hover:bg-muted`,a===`selected`&&`border-primary bg-primary/10`,a===`correct`&&`border-green-500 bg-green-50 dark:bg-green-950`,a===`missed`&&`border-green-400 bg-green-50/50 dark:bg-green-950/50`,a===`wrong`&&`border-red-500 bg-red-50 dark:bg-red-950`),children:[(0,F.jsx)(`span`,{className:ra(`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold`,a===`selected`&&`border-primary bg-primary text-primary-foreground`,a===`correct`&&`border-green-500 bg-green-500 text-white`,a===`wrong`&&`border-red-500 bg-red-500 text-white`,a===`missed`&&`border-green-400 bg-transparent text-green-600`,a==="default"&&`border-muted-foreground/40`),children:e.key}),(0,F.jsx)(`span`,{className:`flex-1 leading-relaxed`,children:e.text}),r&&n&&(0,F.jsx)(mr,{className:`mt-0.5 h-4 w-4 shrink-0 text-green-500`}),r&&!n&&t&&(0,F.jsx)(hr,{className:`mt-0.5 h-4 w-4 shrink-0 text-red-500`})]},e.key)})}),r&&!u&&(0,F.jsxs)(`div`,{className:`rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm dark:bg-amber-950/30`,children:[(0,F.jsx)(`span`,{className:`font-medium text-amber-700 dark:text-amber-400`,children:`正确答案：`}),(0,F.jsx)(`span`,{className:`text-amber-800 dark:text-amber-300`,children:e.answer_keys.join(`、`)})]})]})}function Ya(e){let t=[],n=String(e||``),r=n.indexOf(`,`),i=0,a=!1;for(;!a;){r===-1&&(r=n.length,a=!0);let e=n.slice(i,r).trim();(e||!a)&&t.push(e),i=r+1,r=n.indexOf(`,`,i)}return t}function Xa(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var Za=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Qa=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,$a={};function eo(e,t){return((t||$a).jsx?Qa:Za).test(e)}var to=/[ \t\n\f\r]/g;function no(e){return typeof e==`object`?e.type===`text`?ro(e.value):!1:ro(e)}function ro(e){return e.replace(to,``)===``}var io=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};io.prototype.normal={},io.prototype.property={},io.prototype.space=void 0;function ao(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new io(n,r,t)}function oo(e){return e.toLowerCase()}var so=class{constructor(e,t){this.attribute=t,this.property=e}};so.prototype.attribute=``,so.prototype.booleanish=!1,so.prototype.boolean=!1,so.prototype.commaOrSpaceSeparated=!1,so.prototype.commaSeparated=!1,so.prototype.defined=!1,so.prototype.mustUseProperty=!1,so.prototype.number=!1,so.prototype.overloadedBoolean=!1,so.prototype.property=``,so.prototype.spaceSeparated=!1,so.prototype.space=void 0;var co=s({boolean:()=>uo,booleanish:()=>fo,commaOrSpaceSeparated:()=>go,commaSeparated:()=>ho,number:()=>I,overloadedBoolean:()=>po,spaceSeparated:()=>mo}),lo=0,uo=L(),fo=L(),po=L(),I=L(),mo=L(),ho=L(),go=L();function L(){return 2**++lo}var _o=Object.keys(co),vo=class extends so{constructor(e,t,n,r){let i=-1;if(super(e,t),yo(this,`space`,r),typeof n==`number`)for(;++i<_o.length;){let e=_o[i];yo(this,_o[i],(n&co[e])===co[e])}}};vo.prototype.defined=!0;function yo(e,t,n){n&&(e[t]=n)}function bo(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new vo(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[oo(r)]=r,n[oo(a.attribute)]=r}return new io(t,n,e.space)}var xo=bo({properties:{ariaActiveDescendant:null,ariaAtomic:fo,ariaAutoComplete:null,ariaBusy:fo,ariaChecked:fo,ariaColCount:I,ariaColIndex:I,ariaColSpan:I,ariaControls:mo,ariaCurrent:null,ariaDescribedBy:mo,ariaDetails:null,ariaDisabled:fo,ariaDropEffect:mo,ariaErrorMessage:null,ariaExpanded:fo,ariaFlowTo:mo,ariaGrabbed:fo,ariaHasPopup:null,ariaHidden:fo,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:mo,ariaLevel:I,ariaLive:null,ariaModal:fo,ariaMultiLine:fo,ariaMultiSelectable:fo,ariaOrientation:null,ariaOwns:mo,ariaPlaceholder:null,ariaPosInSet:I,ariaPressed:fo,ariaReadOnly:fo,ariaRelevant:null,ariaRequired:fo,ariaRoleDescription:mo,ariaRowCount:I,ariaRowIndex:I,ariaRowSpan:I,ariaSelected:fo,ariaSetSize:I,ariaSort:null,ariaValueMax:I,ariaValueMin:I,ariaValueNow:I,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function So(e,t){return t in e?e[t]:t}function Co(e,t){return So(e,t.toLowerCase())}var wo=bo({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:ho,acceptCharset:mo,accessKey:mo,action:null,allow:null,allowFullScreen:uo,allowPaymentRequest:uo,allowUserMedia:uo,alpha:uo,alt:null,as:null,async:uo,autoCapitalize:null,autoComplete:mo,autoFocus:uo,autoPlay:uo,blocking:mo,capture:null,charSet:null,checked:uo,cite:null,className:mo,closedBy:null,colorSpace:null,cols:I,colSpan:I,command:null,commandFor:null,content:null,contentEditable:fo,controls:uo,controlsList:mo,coords:I|ho,crossOrigin:null,data:null,dateTime:null,decoding:null,default:uo,defer:uo,dir:null,dirName:null,disabled:uo,download:po,draggable:fo,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:uo,formTarget:null,headers:mo,height:I,hidden:po,high:I,href:null,hrefLang:null,htmlFor:mo,httpEquiv:mo,id:null,imageSizes:null,imageSrcSet:null,inert:uo,inputMode:null,integrity:null,is:null,isMap:uo,itemId:null,itemProp:mo,itemRef:mo,itemScope:uo,itemType:mo,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:uo,low:I,manifest:null,max:null,maxLength:I,media:null,method:null,min:null,minLength:I,multiple:uo,muted:uo,name:null,nonce:null,noModule:uo,noValidate:uo,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:uo,optimum:I,pattern:null,ping:mo,placeholder:null,playsInline:uo,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:uo,referrerPolicy:null,rel:mo,required:uo,reversed:uo,rows:I,rowSpan:I,sandbox:mo,scope:null,scoped:uo,seamless:uo,selected:uo,shadowRootClonable:uo,shadowRootCustomElementRegistry:uo,shadowRootDelegatesFocus:uo,shadowRootMode:null,shadowRootSerializable:uo,shape:null,size:I,sizes:null,slot:null,span:I,spellCheck:fo,src:null,srcDoc:null,srcLang:null,srcSet:null,start:I,step:null,style:null,tabIndex:I,target:null,title:null,translate:null,type:null,typeMustMatch:uo,useMap:null,value:fo,width:I,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:mo,axis:null,background:null,bgColor:null,border:I,borderColor:null,bottomMargin:I,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:uo,declare:uo,event:null,face:null,frame:null,frameBorder:null,hSpace:I,leftMargin:I,link:null,longDesc:null,lowSrc:null,marginHeight:I,marginWidth:I,noResize:uo,noHref:uo,noShade:uo,noWrap:uo,object:null,profile:null,prompt:null,rev:null,rightMargin:I,rules:null,scheme:null,scrolling:fo,standby:null,summary:null,text:null,topMargin:I,valueType:null,version:null,vAlign:null,vLink:null,vSpace:I,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:uo,disablePictureInPicture:uo,disableRemotePlayback:uo,exportParts:ho,part:mo,prefix:null,property:null,results:I,security:null,unselectable:null},space:`html`,transform:Co}),To=bo({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,maskType:`mask-type`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:go,accentHeight:I,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:I,amplitude:I,arabicForm:null,ascent:I,attributeName:null,attributeType:null,azimuth:I,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:I,by:null,calcMode:null,capHeight:I,className:mo,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:I,diffuseConstant:I,direction:null,display:null,dur:null,divisor:I,dominantBaseline:null,download:uo,dx:null,dy:null,edgeMode:null,editable:null,elevation:I,enableBackground:null,end:null,event:null,exponent:I,externalResourcesRequired:null,fill:null,fillOpacity:I,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ho,g2:ho,glyphName:ho,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:I,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:I,horizOriginX:I,horizOriginY:I,id:null,ideographic:I,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:I,k:I,k1:I,k2:I,k3:I,k4:I,kernelMatrix:go,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:I,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:I,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:I,overlineThickness:I,paintOrder:null,panose1:null,path:null,pathLength:I,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:mo,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:I,pointsAtY:I,pointsAtZ:I,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:go,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:go,rev:go,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:go,requiredFeatures:go,requiredFonts:go,requiredFormats:go,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:I,specularExponent:I,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:I,strikethroughThickness:I,string:null,stroke:null,strokeDashArray:go,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:I,strokeOpacity:I,strokeWidth:null,style:null,surfaceScale:I,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:go,tabIndex:I,tableValues:null,target:null,targetX:I,targetY:I,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:go,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:I,underlineThickness:I,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:I,values:null,vAlphabetic:I,vMathematical:I,vectorEffect:null,vHanging:I,vIdeographic:I,version:null,vertAdvY:I,vertOriginX:I,vertOriginY:I,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:I,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:So}),Eo=bo({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),Do=bo({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:Co}),Oo=bo({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),ko={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},Ao=/[A-Z]/g,jo=/-[a-z]/g,Mo=/^data[-\w.:]+$/i;function No(e,t){let n=oo(t),r=t,i=so;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&Mo.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(jo,Fo);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!jo.test(e)){let n=e.replace(Ao,Po);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=vo}return new i(r,t)}function Po(e){return`-`+e.toLowerCase()}function Fo(e){return e.charAt(1).toUpperCase()}var Io=ao([xo,wo,Eo,Do,Oo],`html`),Lo=ao([xo,To,Eo,Do,Oo],`svg`);function Ro(e){let t=String(e||``).trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function zo(e){return e.join(` `).trim()}var Bo=o(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g,u=`
`,d=`/`,f=`*`,p=``,m=`comment`,h=`declaration`;function g(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,g=1;function v(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(u);g=~n?e.length-n:g+e.length}function y(){var e={line:l,column:g};return function(t){return t.position=new b(e),C(),t}}function b(e){this.start=e,this.end={line:l,column:g},this.source=t.source}b.prototype.content=e;function x(n){var r=Error(t.source+`:`+l+`:`+g+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=g,r.source=e,!t.silent)throw r}function S(t){var n=t.exec(e);if(n){var r=n[0];return v(r),e=e.slice(r.length),n}}function C(){S(i)}function w(e){var t;for(e||=[];t=T();)t!==!1&&e.push(t);return e}function T(){var t=y();if(!(d!=e.charAt(0)||f!=e.charAt(1))){for(var n=2;p!=e.charAt(n)&&(f!=e.charAt(n)||d!=e.charAt(n+1));)++n;if(n+=2,p===e.charAt(n-1))return x(`End of comment missing`);var r=e.slice(2,n-2);return g+=2,v(r),e=e.slice(n),g+=2,t({type:m,comment:r})}}function E(){var e=y(),t=S(a);if(t){if(T(),!S(o))return x(`property missing ':'`);var r=S(s),i=e({type:h,property:_(t[0].replace(n,p)),value:r?_(r[0].replace(n,p)):p});return S(c),i}}function ee(){var e=[];w(e);for(var t;t=E();)t!==!1&&(e.push(t),w(e));return e}return C(),ee()}function _(e){return e?e.replace(l,p):p}t.exports=g})),Vo=o((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=t(Bo());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),Ho=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),Uo=o(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(Vo()),r=Ho();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),Wo=Ko(`end`),Go=Ko(`start`);function Ko(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function qo(e){let t=Go(e),n=Wo(e);if(t&&n)return{start:t,end:n}}function Jo(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?Xo(e.position):`start`in e||`end`in e?Xo(e):`line`in e||`column`in e?Yo(e):``}function Yo(e){return Zo(e&&e.line)+`:`+Zo(e&&e.column)}function Xo(e){return Yo(e&&e.start)+`-`+Yo(e&&e.end)}function Zo(e){return e&&typeof e==`number`?e:1}var Qo=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=Jo(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};Qo.prototype.file=``,Qo.prototype.name=``,Qo.prototype.reason=``,Qo.prototype.message=``,Qo.prototype.stack=``,Qo.prototype.column=void 0,Qo.prototype.line=void 0,Qo.prototype.ancestors=void 0,Qo.prototype.cause=void 0,Qo.prototype.fatal=void 0,Qo.prototype.place=void 0,Qo.prototype.ruleId=void 0,Qo.prototype.source=void 0;var $o=l(Uo(),1),es={}.hasOwnProperty,ts=new Map,ns=/[A-Z]/g,rs=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),is=new Set([`td`,`th`]);function as(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=gs(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=hs(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?Lo:Io,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=os(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function os(e,t,n){if(t.type===`element`)return ss(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return cs(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return us(e,t,n);if(t.type===`mdxjsEsm`)return ls(e,t);if(t.type===`root`)return ds(e,t,n);if(t.type===`text`)return fs(e,t)}function ss(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=Lo,e.schema=i),e.ancestors.push(t);let a=Ss(e,t.tagName,!1),o=_s(e,t),s=ys(e,t);return rs.has(t.tagName)&&(s=s.filter(function(e){return typeof e==`string`?!no(e):!0})),ps(e,o,a,t),ms(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function cs(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}Cs(e,t.position)}function ls(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Cs(e,t.position)}function us(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=Lo,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:Ss(e,t.name,!0),o=vs(e,t),s=ys(e,t);return ps(e,o,a,t),ms(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function ds(e,t,n){let r={};return ms(r,ys(e,t)),e.create(t,e.Fragment,r,n)}function fs(e,t){return t.value}function ps(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function ms(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function hs(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function gs(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=Go(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function _s(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&es.call(t.properties,i)){let a=bs(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&is.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function vs(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`)if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Cs(e,t.position);else{let i=r.name,a;if(r.value&&typeof r.value==`object`)if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else Cs(e,t.position);else a=r.value===null?!0:r.value;n[i]=a}return n}function ys(e,t){let n=[],r=-1,i=e.passKeys?new Map:ts;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=os(e,a,o);s!==void 0&&n.push(s)}return n}function bs(e,t,n){let r=No(e.schema,t);if(!(n==null||typeof n==`number`&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Xa(n):zo(n)),r.property===`style`){let t=typeof n==`object`?n:xs(e,String(n));return e.stylePropertyNameCase===`css`&&(t=ws(t)),[`style`,t]}return[e.elementAttributeNameCase===`react`&&r.space?ko[r.property]||r.property:r.attribute,n]}}function xs(e,t){try{return(0,$o.default)(t,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new Qo("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=`https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute`,r}}function Ss(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=eo(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=eo(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return es.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);Cs(e)}function Cs(e,t){let n=new Qo("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=`https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-handle-mdx-estrees-without-createevaluater`,n}function ws(e){let t={},n;for(n in e)es.call(e,n)&&(t[Ts(n)]=e[n]);return t}function Ts(e){let t=e.replace(ns,Es);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function Es(e){return`-`+e.toLowerCase()}var Ds={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},Os={};function ks(e,t){let n=t||Os;return As(e,typeof n.includeImageAlt==`boolean`?n.includeImageAlt:!0,typeof n.includeHtml==`boolean`?n.includeHtml:!0)}function As(e,t,n){if(Ms(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return js(e.children,t,n)}return Array.isArray(e)?js(e,t,n):``}function js(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=As(e[i],t,n);return r.join(``)}function Ms(e){return!!(e&&typeof e==`object`)}var Ns=document.createElement(`i`);function Ps(e){let t=`&`+e+`;`;Ns.innerHTML=t;let n=Ns.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`||n===t?!1:n}function Fs(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function Is(e,t){return e.length>0?(Fs(e,e.length,0,t),e):t}var Ls={}.hasOwnProperty;function Rs(e){let t={},n=-1;for(;++n<e.length;)zs(t,e[n]);return t}function zs(e,t){let n;for(n in t){let r=(Ls.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){Ls.call(r,a)||(r[a]=[]);let e=i[a];Bs(r[a],Array.isArray(e)?e:e?[e]:[])}}}function Bs(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);Fs(e,0,0,r)}function Vs(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}function Hs(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var Us=ec(/[A-Za-z]/),Ws=ec(/[\dA-Za-z]/),Gs=ec(/[#-'*+\--9=?A-Z^-~]/);function Ks(e){return e!==null&&(e<32||e===127)}var qs=ec(/\d/),Js=ec(/[\dA-Fa-f]/),Ys=ec(/[!-/:-@[-`{-~]/);function R(e){return e!==null&&e<-2}function Xs(e){return e!==null&&(e<0||e===32)}function Zs(e){return e===-2||e===-1||e===32}var Qs=ec(/\p{P}|\p{S}/u),$s=ec(/\s/);function ec(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function tc(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&Ws(e.charCodeAt(n+1))&&Ws(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function nc(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return Zs(r)?(e.enter(n),s(r)):t(r)}function s(r){return Zs(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}var rc={tokenize:ic};function ic(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),nc(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return R(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var ac={tokenize:sc},oc={tokenize:cc};function sc(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;return Fs(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(oc,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(oc,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return R(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;Fs(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function _(r){let i=n.length;for(;i-- >r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function cc(e,t,n){return nc(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function lc(e){if(e===null||Xs(e)||$s(e))return 1;if(Qs(e))return 2}function uc(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var dc={name:`attention`,resolveAll:fc,tokenize:pc};function fc(e,t){let n=-1,r,i,a,o,s,c,l,u;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){for(r=n;r--;)if(e[r][0]===`exit`&&e[r][1].type===`attentionSequence`&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d={...e[r][1].end},f={...e[n][1].start};mc(d,-c),mc(f,c),o={type:c>1?`strongSequence`:`emphasisSequence`,start:d,end:{...e[r][1].end}},s={type:c>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:f},a={type:c>1?`strongText`:`emphasisText`,start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?`strong`:`emphasis`,start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=Is(l,[[`enter`,e[r][1],t],[`exit`,e[r][1],t]])),l=Is(l,[[`enter`,i,t],[`enter`,o,t],[`exit`,o,t],[`enter`,a,t]]),l=Is(l,uc(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=Is(l,[[`exit`,a,t],[`enter`,s,t],[`exit`,s,t],[`exit`,i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=Is(l,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])):u=0,Fs(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function pc(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=lc(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=lc(o),u=!l||l===2&&i||n.includes(o),d=!i||i===2&&l||n.includes(r);return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function mc(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var hc={name:`autolink`,tokenize:gc};function gc(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return Us(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||Ws(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||Ws(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||Ks(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):Gs(t)?(e.consume(t),l):n(t)}function u(e){return Ws(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||Ws(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var _c={partial:!0,tokenize:vc};function vc(e,t,n){return r;function r(t){return Zs(t)?nc(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||R(e)?t(e):n(e)}}var yc={continuation:{tokenize:xc},exit:Sc,name:`blockQuote`,tokenize:bc};function bc(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return Zs(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function xc(e,t,n){let r=this;return i;function i(t){return Zs(t)?nc(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(yc,t,n)(r)}}function Sc(e){e.exit(`blockQuote`)}var Cc={name:`characterEscape`,tokenize:wc};function wc(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return Ys(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var Tc={name:`characterReference`,tokenize:Ec};function Ec(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=Ws,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=Js,u):(e.enter(`characterReferenceValue`),a=7,o=qs,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===Ws&&!Ps(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var Dc={partial:!0,tokenize:Ac},Oc={concrete:!0,name:`codeFenced`,tokenize:kc};function kc(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),Zs(t)?nc(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||R(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(Dc,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||R(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):Zs(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),nc(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||R(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||R(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&Zs(t)?nc(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||R(t)?e.check(Dc,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||R(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),Zs(t)?nc(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),Zs(t)?nc(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||R(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}function Ac(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var jc={name:`codeIndented`,tokenize:Nc},Mc={partial:!0,tokenize:Pc};function Nc(e,t,n){let r=this;return i;function i(t){return e.enter(`codeIndented`),nc(e,a,`linePrefix`,5)(t)}function a(e){let t=r.events[r.events.length-1];return t&&t[1].type===`linePrefix`&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return t===null?c(t):R(t)?e.attempt(Mc,o,c)(t):(e.enter(`codeFlowValue`),s(t))}function s(t){return t===null||R(t)?(e.exit(`codeFlowValue`),o(t)):(e.consume(t),s)}function c(n){return e.exit(`codeIndented`),t(n)}}function Pc(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):R(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),i):nc(e,a,`linePrefix`,5)(t)}function a(e){let a=r.events[r.events.length-1];return a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):R(e)?i(e):n(e)}}var Fc={name:`codeText`,previous:Lc,resolve:Ic,tokenize:Rc};function Ic(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Lc(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function Rc(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):R(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||R(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var zc=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&Bc(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),Bc(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Bc(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){let t=this.left.splice(e,1/0);Bc(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);Bc(this.left,t.reverse())}}};function Bc(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Vc(e){let t={},n=-1,r,i,a,o,s,c,l,u=new zc(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,Hc(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(!(o[1].type===`linePrefix`||o[1].type===`listItemIndent`))break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return Fs(e,0,1/0,u.slice(0)),!l}function Hc(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var Uc={resolve:Gc,tokenize:Kc},Wc={partial:!0,tokenize:qc};function Gc(e){return Vc(e),e}function Kc(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):R(t)?e.check(Wc,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function qc(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),nc(e,a,`linePrefix`)}function a(i){if(i===null||R(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function Jc(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||Ks(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||R(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||Xs(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||Ks(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function Yc(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):R(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||R(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!Zs(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function Xc(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):R(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),nc(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||R(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function Zc(e,t){let n;return r;function r(i){return R(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):Zs(i)?nc(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}var Qc={name:`definition`,tokenize:el},$c={partial:!0,tokenize:tl};function el(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return Yc.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=Hs(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return Xs(t)?Zc(e,l)(t):l(t)}function l(t){return Jc(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt($c,d,d)(t)}function d(t){return Zs(t)?nc(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||R(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function tl(e,t,n){return r;function r(t){return Xs(t)?Zc(e,i)(t):n(t)}function i(t){return Xc(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return Zs(t)?nc(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||R(e)?t(e):n(e)}}var nl={name:`hardBreakEscape`,tokenize:rl};function rl(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return R(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var il={name:`headingAtx`,resolve:al,tokenize:ol};function al(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r&&(i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`},Fs(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])),e}function ol(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||Xs(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||R(n)?(e.exit(`atxHeading`),t(n)):Zs(n)?nc(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||Xs(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var sl=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),cl=[`pre`,`script`,`style`,`textarea`],ll={concrete:!0,name:`htmlFlow`,resolveTo:fl,tokenize:pl},ul={partial:!0,tokenize:hl},dl={partial:!0,tokenize:ml};function fl(e){let t=e.length;for(;t--&&!(e[t][0]===`enter`&&e[t][1].type===`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function pl(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:O):Us(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):Us(a)?(e.consume(a),i=4,r.interrupt?t:O):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:O):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:D:m):n(i)}function h(t){return Us(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||Xs(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&cl.includes(l)?(i=1,r.interrupt?t(s):D(s)):sl.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):D(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||Ws(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:D):n(i)}function v(t){return Zs(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||Us(t)?(e.consume(t),b):Zs(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||Ws(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):Zs(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):Zs(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||R(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||Xs(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||Zs(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),ee):n(t)}function ee(t){return t===null||R(t)?D(t):Zs(t)?(e.consume(t),ee):n(t)}function D(t){return t===45&&i===2?(e.consume(t),ie):t===60&&i===1?(e.consume(t),ae):t===62&&i===4?(e.consume(t),k):t===63&&i===3?(e.consume(t),O):t===93&&i===5?(e.consume(t),se):R(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(ul,ce,te)(t)):t===null||R(t)?(e.exit(`htmlFlowData`),te(t)):(e.consume(t),D)}function te(t){return e.check(dl,ne,ce)(t)}function ne(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),re}function re(t){return t===null||R(t)?te(t):(e.enter(`htmlFlowData`),D(t))}function ie(t){return t===45?(e.consume(t),O):D(t)}function ae(t){return t===47?(e.consume(t),o=``,oe):D(t)}function oe(t){if(t===62){let n=o.toLowerCase();return cl.includes(n)?(e.consume(t),k):D(t)}return Us(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),oe):D(t)}function se(t){return t===93?(e.consume(t),O):D(t)}function O(t){return t===62?(e.consume(t),k):t===45&&i===2?(e.consume(t),O):D(t)}function k(t){return t===null||R(t)?(e.exit(`htmlFlowData`),ce(t)):(e.consume(t),k)}function ce(n){return e.exit(`htmlFlow`),t(n)}}function ml(e,t,n){let r=this;return i;function i(t){return R(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a):n(t)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function hl(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(_c,t,n)}}var gl={name:`htmlText`,tokenize:_l};function _l(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):Us(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):Us(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):R(t)?(o=d,ae(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?ie(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):R(t)?(o=h,ae(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?ie(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?ie(t):R(t)?(o=v,ae(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):R(t)?(o=y,ae(t)):(e.consume(t),y)}function b(e){return e===62?ie(e):y(e)}function x(t){return Us(t)?(e.consume(t),S):n(t)}function S(t){return t===45||Ws(t)?(e.consume(t),S):C(t)}function C(t){return R(t)?(o=C,ae(t)):Zs(t)?(e.consume(t),C):ie(t)}function w(t){return t===45||Ws(t)?(e.consume(t),w):t===47||t===62||Xs(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),ie):t===58||t===95||Us(t)?(e.consume(t),E):R(t)?(o=T,ae(t)):Zs(t)?(e.consume(t),T):ie(t)}function E(t){return t===45||t===46||t===58||t===95||Ws(t)?(e.consume(t),E):ee(t)}function ee(t){return t===61?(e.consume(t),D):R(t)?(o=ee,ae(t)):Zs(t)?(e.consume(t),ee):T(t)}function D(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,te):R(t)?(o=D,ae(t)):Zs(t)?(e.consume(t),D):(e.consume(t),ne)}function te(t){return t===i?(e.consume(t),i=void 0,re):t===null?n(t):R(t)?(o=te,ae(t)):(e.consume(t),te)}function ne(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||Xs(t)?T(t):(e.consume(t),ne)}function re(e){return e===47||e===62||Xs(e)?T(e):n(e)}function ie(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function ae(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),oe}function oe(t){return Zs(t)?nc(e,se,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):se(t)}function se(t){return e.enter(`htmlTextData`),o(t)}}var vl={name:`labelEnd`,resolveAll:Sl,resolveTo:Cl,tokenize:wl},yl={tokenize:Tl},bl={tokenize:El},xl={tokenize:Dl};function Sl(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&Fs(e,0,e.length,n),e}function Cl(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type===`link`||i.type===`labelLink`&&i._inactive)break;e[n][0]===`enter`&&i.type===`labelLink`&&(i._inactive=!0)}else if(o){if(e[n][0]===`enter`&&(i.type===`labelImage`||i.type===`labelLink`)&&!i._balanced&&(a=n,i.type!==`labelLink`)){r=2;break}}else i.type===`labelEnd`&&(o=n);let c={type:e[a][1].type===`labelLink`?`link`:`image`,start:{...e[a][1].start},end:{...e[e.length-1][1].end}},l={type:`label`,start:{...e[a][1].start},end:{...e[o][1].end}},u={type:`labelText`,start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return s=[[`enter`,c,t],[`enter`,l,t]],s=Is(s,e.slice(a+1,a+r+3)),s=Is(s,[[`enter`,u,t]]),s=Is(s,uc(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=Is(s,[[`exit`,u,t],e[o-2],e[o-1],[`exit`,l,t]]),s=Is(s,e.slice(o+1)),s=Is(s,[[`exit`,c,t]]),Fs(e,a,e.length,s),e}function wl(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type===`labelImage`||r.events[i][1].type===`labelLink`)&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(Hs(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(yl,u,o?u:d)(t):t===91?e.attempt(bl,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(xl,u,d)(t)}function u(e){return t(e)}function d(e){return a._balanced=!0,n(e)}}function Tl(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return Xs(t)?Zc(e,a)(t):a(t)}function a(t){return t===41?u(t):Jc(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return Xs(t)?Zc(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?Xc(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return Xs(t)?Zc(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function El(e,t,n){let r=this;return i;function i(t){return Yc.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(Hs(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function Dl(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var Ol={name:`labelStartImage`,resolveAll:vl.resolveAll,tokenize:kl};function kl(e,t,n){let r=this;return i;function i(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),a}function a(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelImage`),o):n(t)}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var Al={name:`labelStartLink`,resolveAll:vl.resolveAll,tokenize:jl};function jl(e,t,n){let r=this;return i;function i(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelLink`),a}function a(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var Ml={name:`lineEnding`,tokenize:Nl};function Nl(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),nc(e,t,`linePrefix`)}}var Pl={name:`thematicBreak`,tokenize:Fl};function Fl(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||R(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),Zs(t)?nc(e,s,`whitespace`)(t):s(t))}}var Il={continuation:{tokenize:Bl},exit:Hl,name:`list`,tokenize:zl},Ll={partial:!0,tokenize:Ul},Rl={partial:!0,tokenize:Vl};function zl(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:qs(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(Pl,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return qs(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(_c,r.interrupt?n:u,e.attempt(Ll,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return Zs(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function Bl(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(_c,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,nc(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!Zs(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Rl,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,nc(e,e.attempt(Il,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function Vl(e,t,n){let r=this;return nc(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function Hl(e){e.exit(this.containerState.type)}function Ul(e,t,n){let r=this;return nc(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!Zs(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var Wl={name:`setextUnderline`,resolveTo:Gl,tokenize:Kl};function Gl(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]===`enter`){if(e[n][1].type===`content`){r=n;break}e[n][1].type===`paragraph`&&(i=n)}else e[n][1].type===`content`&&e.splice(n,1),!a&&e[n][1].type===`definition`&&(a=n);let o={type:`setextHeading`,start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type=`setextHeadingText`,a?(e.splice(i,0,[`enter`,o,t]),e.splice(a+1,0,[`exit`,e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push([`exit`,o,t]),e}function Kl(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),Zs(t)?nc(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||R(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var ql={tokenize:Jl};function Jl(e){let t=this,n=e.attempt(_c,r,e.attempt(this.parser.constructs.flowInitial,i,nc(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Uc,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var Yl={resolveAll:$l()},Xl=Ql(`string`),Zl=Ql(`text`);function Ql(e){return{resolveAll:$l(e===`text`?eu:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function $l(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function eu(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type===`lineEnding`)&&e[n-1][1].type===`data`){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,s=0,c;for(;a--;){let e=i[a];if(typeof e==`string`){for(o=e.length;e.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(e===-2)c=!0,s++;else if(e!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){let i={type:n===e.length||c||s<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...i.start},r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,[`enter`,i,t],[`exit`,i,t]),n+=2)}n++}return e}var tu=s({attentionMarkers:()=>lu,contentInitial:()=>ru,disable:()=>uu,document:()=>nu,flow:()=>au,flowInitial:()=>iu,insideSpan:()=>cu,string:()=>ou,text:()=>su}),nu={42:Il,43:Il,45:Il,48:Il,49:Il,50:Il,51:Il,52:Il,53:Il,54:Il,55:Il,56:Il,57:Il,62:yc},ru={91:Qc},iu={[-2]:jc,[-1]:jc,32:jc},au={35:il,42:Pl,45:[Wl,Pl],60:ll,61:Wl,95:Pl,96:Oc,126:Oc},ou={38:Tc,92:Cc},su={[-5]:Ml,[-4]:Ml,[-3]:Ml,33:Ol,38:Tc,42:dc,60:[hc,gl],91:Al,92:[nl,Cc],93:vl,95:dc,96:Fc},cu={null:[dc,Yl]},lu={null:[42,95]},uu={null:[]};function du(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:C(x),check:C(S),consume:v,enter:y,exit:b,interrupt:C(S,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=Is(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=uc(a,l.events,l),l.events):[]}function f(e,t){return pu(p(e),t)}function p(e){return fu(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,E()}function g(){let e;for(;r._index<o.length;){let t=o[r._index];if(typeof t==`string`)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)_(t.charCodeAt(r._bufferIndex));else _(t)}}function _(e){u=u(e)}function v(e){R(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&Fs(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function fu(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function pu(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function mu(e){let t={constructs:Rs([tu,...(e||{}).extensions||[]]),content:n(rc),defined:[],document:n(ac),flow:n(ql),lazy:{},string:n(Xl),text:n(Zl)};return t;function n(e){return n;function n(n){return du(t,e,n)}}}function hu(e){for(;!Vc(e););return e}var gu=/[\0\t\n\r]/g;function _u(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){let s=[],c,l,u,d,f;for(i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i)),u=0,t=``,n&&=(i.charCodeAt(0)===65279&&u++,void 0);u<i.length;){if(gu.lastIndex=u,c=gu.exec(i),d=c&&c.index!==void 0?c.index:i.length,f=i.charCodeAt(d),!c){t=i.slice(u);break}if(f===10&&u===d&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),f){case 0:s.push(65533),e++;break;case 9:for(l=Math.ceil(e/4)*4,s.push(-2);e++<l;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var vu=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function yu(e){return e.replace(vu,bu)}function bu(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return Vs(n.slice(t?2:1),t?16:10)}return Ps(n)||e}var xu={}.hasOwnProperty;function Su(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),Cu(n)(hu(mu(n).document().write(_u()(e,t,!0))))}function Cu(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:a(we),autolinkProtocol:T,autolinkEmail:T,atxHeading:a(be),blockQuote:a(he),characterEscape:T,characterReference:T,codeFenced:a(ge),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(ge,o),codeText:a(_e,o),codeTextData:T,data:T,codeFlowValue:T,definition:a(ve),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(ye),hardBreakEscape:a(xe),hardBreakTrailing:a(xe),htmlFlow:a(Se,o),htmlFlowData:T,htmlText:a(Se,o),htmlTextData:T,image:a(Ce),label:o,link:a(we),listItem:a(Ee),listItemValue:f,listOrdered:a(Te,d),listUnordered:a(Te),paragraph:a(De),reference:le,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(be),strong:a(Oe),thematicBreak:a(Ae)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:A,autolinkProtocol:me,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:de,characterReferenceMarkerNumeric:de,characterReferenceValue:fe,characterReference:pe,codeFenced:c(g),codeFencedFence:h,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(_),codeText:c(re),codeTextData:E,data:E,definition:c(),definitionDestinationString:b,definitionLabelString:v,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(D),hardBreakTrailing:c(D),htmlFlow:c(te),htmlFlowData:E,htmlText:c(ne),htmlTextData:E,image:c(ae),label:se,labelText:oe,lineEnding:ee,link:c(ie),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ue,resourceDestinationString:O,resourceTitleString:k,resource:ce,setextHeading:c(w),setextHeadingLineSequence:C,setextHeadingText:S,strong:c(),thematicBreak:c()}};Tu(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[]},a={stack:[r],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:u,data:n},c=[],d=-1;for(;++d<e.length;)(e[d][1].type===`listOrdered`||e[d][1].type===`listUnordered`)&&(e[d][0]===`enter`?c.push(d):d=i(e,c.pop(),d));for(d=-1;++d<e.length;){let n=t[e[d][0]];xu.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(a.tokenStack.length>0){let e=a.tokenStack[a.tokenStack.length-1];(e[1]||Du).call(a,void 0,e[0])}for(r.position={start:wu(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:wu(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(!(t[1].type===`linePrefix`||t[1].type===`blockQuotePrefix`||t[1].type===`blockQuotePrefixWhitespace`||t[1].type===`blockQuoteMarker`||t[1].type===`listItemIndent`))break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}if(t[1].type===`listItemPrefix`){let i={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=i,e.splice(r,0,[`enter`,i,t[2]]),r++,n++,c=void 0,l=!0}}}return e[t][1]._spread=a,n}function a(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:`fragment`,children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:wu(t.start),end:void 0}}function c(e){return t;function t(t){e&&e.call(this,t),l.call(this,t)}}function l(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||Du).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+Jo({start:e.start,end:e.end})+`): it’s not open`);n.position.end=wu(e.end)}function u(){return ks(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function p(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function h(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function v(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=Hs(this.sliceSerialize(e)).toLowerCase()}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function x(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function S(){this.data.setextHeadingSlurpLineEnding=!0}function C(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function w(){this.data.setextHeadingSlurpLineEnding=void 0}function T(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];(!n||n.type!==`text`)&&(n=ke(),n.position={start:wu(e.start),end:void 0},t.push(n)),this.stack.push(n)}function E(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=wu(e.end)}function ee(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=wu(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(T.call(this,e),E.call(this,e))}function D(){this.data.atHardBreak=!0}function te(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ne(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function re(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ie(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function ae(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function oe(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=yu(t),n.identifier=Hs(t).toLowerCase()}function se(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function O(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function k(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function ce(){this.data.inReference=void 0}function le(){this.data.referenceType=`collapsed`}function ue(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=Hs(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function de(e){this.data.characterReferenceType=e.type}function fe(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=Vs(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=Ps(t);let i=this.stack[this.stack.length-1];i.value+=r}function pe(e){let t=this.stack.pop();t.position.end=wu(e.end)}function me(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function A(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function he(){return{type:`blockquote`,children:[]}}function ge(){return{type:`code`,lang:null,meta:null,value:``}}function _e(){return{type:`inlineCode`,value:``}}function ve(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function ye(){return{type:`emphasis`,children:[]}}function be(){return{type:`heading`,depth:0,children:[]}}function xe(){return{type:`break`}}function Se(){return{type:`html`,value:``}}function Ce(){return{type:`image`,title:null,url:``,alt:null}}function we(){return{type:`link`,title:null,url:``,children:[]}}function Te(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function Ee(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function De(){return{type:`paragraph`,children:[]}}function Oe(){return{type:`strong`,children:[]}}function ke(){return{type:`text`,value:``}}function Ae(){return{type:`thematicBreak`}}}function wu(e){return{line:e.line,column:e.column,offset:e.offset}}function Tu(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Tu(e,r):Eu(e,r)}}function Eu(e,t){let n;for(n in t)if(xu.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function Du(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+Jo({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Jo({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+Jo({start:t.start,end:t.end})+`) is still open`)}function Ou(e){let t=this;t.parser=n;function n(n){return Su(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}function ku(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Au(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function ju(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function Mu(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Nu(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Pu(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=tc(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function Fu(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Iu(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Lu(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function Ru(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Lu(e,t);let i={src:tc(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function zu(e,t){let n={src:tc(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Bu(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Vu(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Lu(e,t);let i={href:tc(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Hu(e,t){let n={href:tc(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Uu(e,t,n){let r=e.all(t),i=n?Wu(n):Gu(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function Wu(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Gu(n[r])}return t}function Gu(e){return e.spread??e.children.length>1}function Ku(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function qu(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ju(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Yu(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Xu(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Go(t.children[1]),o=Wo(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function Zu(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Qu(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var $u=9,ed=32;function td(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(nd(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(nd(t.slice(i),i>0,!1)),a.join(``)}function nd(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===$u||t===ed;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===$u||t===ed;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function rd(e,t){let n={type:`text`,value:td(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function id(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var ad={blockquote:ku,break:Au,code:ju,delete:Mu,emphasis:Nu,footnoteReference:Pu,heading:Fu,html:Iu,imageReference:Ru,image:zu,inlineCode:Bu,linkReference:Vu,link:Hu,listItem:Uu,list:Ku,paragraph:qu,root:Ju,strong:Yu,table:Xu,tableCell:Qu,tableRow:Zu,text:rd,thematicBreak:id,toml:od,yaml:od,definition:od,footnoteDefinition:od};function od(){}var sd=typeof self==`object`?self:globalThis,cd=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new sd[e](t)},ld=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o)e[r(t)]=r(n);return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(cd(e,t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}}return n(cd(a,o),i)};return r},ud=e=>ld(new Map,e)(0),dd=``,{toString:fd}={},{keys:pd}=Object,md=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=fd.call(e).slice(8,-1);switch(n){case`Array`:return[1,dd];case`Object`:return[2,dd];case`Date`:return[3,dd];case`RegExp`:return[4,dd];case`Map`:return[5,dd];case`Set`:return[6,dd];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:n.includes(`Error`)?[7,n]:[2,n]},hd=([e,t])=>e===0&&(t===`function`||t===`symbol`),gd=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=r=>{if(n.has(r))return n.get(r);let[o,s]=md(r);switch(o){case 0:{let t=r;switch(s){case`bigint`:o=8,t=r.toString();break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+s);t=null;break;case`undefined`:return i([-1],r)}return i([o,t],r)}case 1:{if(s){let e=r;return s===`DataView`?e=new Uint8Array(r.buffer):s===`ArrayBuffer`&&(e=new Uint8Array(r)),i([s,[...e]],r)}let e=[],t=i([o,e],r);for(let t of r)e.push(a(t));return t}case 2:{if(s)switch(s){case`BigInt`:return i([s,r.toString()],r);case`Boolean`:case`Number`:case`String`:return i([s,r.valueOf()],r)}if(t&&`toJSON`in r)return a(r.toJSON());let n=[],c=i([o,n],r);for(let t of pd(r))(e||!hd(md(r[t])))&&n.push([a(t),a(r[t])]);return c}case 3:return i([o,isNaN(r.getTime())?dd:r.toISOString()],r);case 4:{let{source:e,flags:t}=r;return i([o,{source:e,flags:t}],r)}case 5:{let t=[],n=i([o,t],r);for(let[n,i]of r)(e||!(hd(md(n))||hd(md(i))))&&t.push([a(n),a(i)]);return n}case 6:{let t=[],n=i([o,t],r);for(let n of r)(e||!hd(md(n)))&&t.push(a(n));return n}}let{message:c}=r;return i([o,{name:s,message:c}],r)};return a},_d=(e,{json:t,lossy:n}={})=>{let r=[];return gd(!(t||n),!!t,new Map,r)(e),r},vd=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?ud(_d(e,t)):structuredClone(e):(e,t)=>ud(_d(e,t));function yd(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function bd(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function xd(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||yd,r=e.options.footnoteBackLabel||bd,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=tc(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...vd(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var Sd=(function(e){if(e==null)return Dd;if(typeof e==`function`)return Ed(e);if(typeof e==`object`)return Array.isArray(e)?Cd(e):wd(e);if(typeof e==`string`)return Td(e);throw Error(`Expected function, string, or object as test`)});function Cd(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Sd(e[n]);return Ed(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function wd(e){let t=e;return Ed(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function Td(e){return Ed(t);function t(t){return t&&t.type===e}}function Ed(e){return t;function t(t,n,r){return!!(Od(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function Dd(){return!0}function Od(e){return typeof e==`object`&&!!e&&`type`in e}function kd(e){return e}var Ad=[],jd=`skip`;function Md(e,t,n,r){let i;typeof t==`function`&&typeof n!=`function`?(r=n,n=t):i=t;let a=Sd(i),o=r?-1:1;s(e,void 0,[])();function s(e,i,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,"name",{value:`node (`+kd(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=Ad,u,d,f;if((!t||a(e,i,c[c.length-1]||void 0))&&(l=Nd(n(e,c)),l[0]===!1))return l;if(`children`in e&&e.children){let t=e;if(t.children&&l[0]!==`skip`)for(d=(r?t.children.length:-1)+o,f=c.concat(t);d>-1&&d<t.children.length;){let e=t.children[d];if(u=s(e,d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+o}}return l}}}function Nd(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?Ad:[e]}function Pd(e,t,n,r){let i,a,o;typeof t==`function`&&typeof n!=`function`?(a=void 0,o=t,i=n):(a=t,o=n,i=r),Md(e,a,s,i);function s(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}}var Fd={}.hasOwnProperty,Id={};function Ld(e,t){let n=t||Id,r=new Map,i=new Map,a={all:s,applyData:zd,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...ad,...n.handlers},one:o,options:n,patch:Rd,wrap:Vd};return Pd(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(Fd.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=vd(n);return r.children=a.all(e),r}return vd(e)}return(a.options.unknownHandler||Bd)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=Hd(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=Hd(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function Rd(e,t){e.position&&(t.position=qo(e))}function zd(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,vd(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function Bd(e,t){let n=t.data||{},r=`value`in t&&!(Fd.call(n,`hProperties`)||Fd.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Vd(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function Hd(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Ud(e,t){let n=Ld(e,t),r=n.one(e,void 0),i=xd(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function Wd(e,t){return e&&`run`in e?async function(n,r){let i=Ud(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Ud(n,{file:r,...e||t})}}function Gd(e){if(e)throw e}var Kd=o(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function qd(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Jd(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?Yd(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function Yd(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var Xd={basename:Zd,dirname:Qd,extname:$d,join:ef,sep:`/`};function Zd(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);rf(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function Qd(e){if(rf(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function $d(e){rf(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function ef(...e){let t=-1,n;for(;++t<e.length;)rf(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:tf(n)}function tf(e){rf(e);let t=e.codePointAt(0)===47,n=nf(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function nf(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function rf(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var af={cwd:of};function of(){return`/`}function sf(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function cf(e){if(typeof e==`string`)e=new URL(e);else if(!sf(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return lf(e)}function lf(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var uf=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],df=class{constructor(e){let t;t=e?sf(e)?{path:e}:typeof e==`string`||hf(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:af.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<uf.length;){let e=uf[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)uf.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?Xd.basename(this.path):void 0}set basename(e){pf(e,`basename`),ff(e,`basename`),this.path=Xd.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?Xd.dirname(this.path):void 0}set dirname(e){mf(this.basename,`dirname`),this.path=Xd.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?Xd.extname(this.path):void 0}set extname(e){if(ff(e,`extname`),mf(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=Xd.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){sf(e)&&(e=cf(e)),pf(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?Xd.basename(this.path,this.extname):void 0}set stem(e){pf(e,`stem`),ff(e,`stem`),this.path=Xd.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new Qo(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function ff(e,t){if(e&&e.includes(Xd.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+Xd.sep+"`")}function pf(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function mf(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function hf(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var gf=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),_f=l(Kd(),1),vf={}.hasOwnProperty,yf=new class e extends gf{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Jd()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,_f.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(Sf(`data`,this.frozen),this.namespace[e]=t,this):vf.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Sf(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=Tf(e),n=this.parser||this.Parser;return bf(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),bf(`process`,this.parser||this.Parser),xf(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=Tf(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);Df(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),bf(`processSync`,this.parser||this.Parser),xf(`processSync`,this.compiler||this.Compiler),this.process(e,r),wf(`processSync`,`process`,t),n;function r(e,r){t=!0,Gd(e),n=r}}run(e,t,n){Cf(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=Tf(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),wf(`runSync`,`run`,n),r;function i(e,t){Gd(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=Tf(t),r=this.compiler||this.Compiler;return xf(`stringify`,r),Cf(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(Sf(`use`,this.frozen),e!=null)if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`");return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`)if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e);else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,_f.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null)if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];qd(o)&&qd(r)&&(r=(0,_f.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function bf(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function xf(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function Sf(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Cf(e){if(!qd(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function wf(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function Tf(e){return Ef(e)?e:new df(e)}function Ef(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function Df(e){return typeof e==`string`||Of(e)}function Of(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var kf=[],Af={allowDangerousHtml:!0},jf=/^(https?|ircs?|mailto|xmpp)$/i,Mf=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`className`,id:`remove-classname`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function Nf(e){let t=Pf(e),n=Ff(e);return If(t.runSync(t.parse(n),n),e)}function Pf(e){let t=e.rehypePlugins||kf,n=e.remarkPlugins||kf,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Af}:Af;return yf().use(Ou).use(n).use(Wd,r).use(t)}function Ff(e){let t=e.children||``,n=new df;return typeof t==`string`?n.value=t:``+t,n}function If(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||Lf;for(let e of Mf)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return Pd(e,l),as(e,{Fragment:F.Fragment,components:i,ignoreInvalidStyle:!0,jsx:F.jsx,jsxs:F.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in Ds)if(Object.hasOwn(Ds,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=Ds[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function Lf(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||jf.test(e.slice(0,t))?e:``}function Rf(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function zf(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}function Bf(e,t,n){let r=Sd((n||{}).ignore||[]),i=Vf(t),a=-1;for(;++a<i.length;)Md(e,`text`,o);function o(e,t){let n=-1,i;for(;++n<t.length;){let e=t[n],a=i?i.children:void 0;if(r(e,a?a.indexOf(e):void 0,i))return;i=e}if(i)return s(e,t)}function s(e,t){let n=t[t.length-1],r=i[a][0],o=i[a][1],s=0,c=n.children.indexOf(e),l=!1,u=[];r.lastIndex=0;let d=r.exec(e.value);for(;d;){let n=d.index,i={index:d.index,input:d.input,stack:[...t,e]},a=o(...d,i);if(typeof a==`string`&&(a=a.length>0?{type:`text`,value:a}:void 0),a===!1?r.lastIndex=n+1:(s!==n&&u.push({type:`text`,value:e.value.slice(s,n)}),Array.isArray(a)?u.push(...a):a&&u.push(a),s=n+d[0].length,l=!0),!r.global)break;d=r.exec(e.value)}return l?(s<e.value.length&&u.push({type:`text`,value:e.value.slice(s)}),n.children.splice(c,1,...u)):u=[e],c+u.length}}function Vf(e){let t=[];if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([Hf(e[0]),Uf(e[1])])}return t}function Hf(e){return typeof e==`string`?new RegExp(zf(e),`g`):e}function Uf(e){return typeof e==`function`?e:function(){return e}}var Wf=`phrasing`,Gf=[`autolink`,`link`,`image`,`label`];function Kf(){return{transforms:[ep],enter:{literalAutolink:Jf,literalAutolinkEmail:Yf,literalAutolinkHttp:Yf,literalAutolinkWww:Yf},exit:{literalAutolink:$f,literalAutolinkEmail:Qf,literalAutolinkHttp:Xf,literalAutolinkWww:Zf}}}function qf(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:Wf,notInConstruct:Gf},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:Wf,notInConstruct:Gf},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:Wf,notInConstruct:Gf}]}}function Jf(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function Yf(e){this.config.enter.autolinkProtocol.call(this,e)}function Xf(e){this.config.exit.autolinkProtocol.call(this,e)}function Zf(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function Qf(e){this.config.exit.autolinkEmail.call(this,e)}function $f(e){this.exit(e)}function ep(e){Bf(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,tp],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,np]],{ignore:[`link`,`linkReference`]})}function tp(e,t,n,r,i){let a=``;if(!ap(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!rp(n)))return!1;let o=ip(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function np(e,t,n,r){return!ap(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function rp(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function ip(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=Rf(e,`(`),a=Rf(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function ap(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||$s(n)||Qs(n))&&(!t||n!==47)}hp.peek=mp;function op(){this.buffer()}function sp(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function cp(){this.buffer()}function lp(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function up(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Hs(this.sliceSerialize(e)).toLowerCase(),n.label=t}function dp(e){this.exit(e)}function fp(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Hs(this.sliceSerialize(e)).toLowerCase(),n.label=t}function pp(e){this.exit(e)}function mp(){return`[`}function hp(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function gp(){return{enter:{gfmFootnoteCallString:op,gfmFootnoteCall:sp,gfmFootnoteDefinitionLabelString:cp,gfmFootnoteDefinition:lp},exit:{gfmFootnoteCallString:up,gfmFootnoteCall:dp,gfmFootnoteDefinitionLabelString:fp,gfmFootnoteDefinition:pp}}}function _p(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:hp},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?yp:vp))),s(),o}}function vp(e,t,n){return t===0?e:yp(e,t,n)}function yp(e,t,n){return(n?``:`    `)+e}var bp=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`];Tp.peek=Ep;function xp(){return{canContainEols:[`delete`],enter:{strikethrough:Cp},exit:{strikethrough:wp}}}function Sp(){return{unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:bp}],handlers:{delete:Tp}}}function Cp(e){this.enter({type:`delete`,children:[]},e)}function wp(e){this.exit(e)}function Tp(e,t,n,r){let i=n.createTracker(r),a=n.enter(`strikethrough`),o=i.move(`~~`);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:`~`}),o+=i.move(`~~`),a(),o}function Ep(){return`~`}function Dp(e){return e.length}function Op(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||Dp,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=kp(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=Ap(r[d]);else{let e=Ap(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u];d=-1;let r=[];for(;++d<l;){let i=e[d]||``,o=``,s=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];n===114?o=` `.repeat(e):n===99?e%2?(o=` `.repeat(e/2+.5),s=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),s=o):s=` `.repeat(e)}n.delimiterStart!==!1&&!d&&r.push(`|`),n.padding!==!1&&!(n.alignDelimiters===!1&&i===``)&&(n.delimiterStart!==!1||d)&&r.push(` `),n.alignDelimiters!==!1&&r.push(o),r.push(i),n.alignDelimiters!==!1&&r.push(s),n.padding!==!1&&r.push(` `),(n.delimiterEnd!==!1||d!==l-1)&&r.push(`|`)}m.push(n.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return m.join(`
`)}function kp(e){return e==null?``:String(e)}function Ap(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function jp(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),Mp);return i(),o}function Mp(e,t,n){return`>`+(n?``:` `)+e}function Np(e,t){return Pp(e,t.inConstruct,!0)&&!Pp(e,t.notInConstruct,!1)}function Pp(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Fp(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Np(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?``:` `;return`\\
`}function Ip(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function Lp(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Rp(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function zp(e,t,n,r){let i=Rp(n),a=e.value||``,o=i==="`"?`GraveAccent`:`Tilde`;if(Lp(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,Bp);return e(),t}let s=n.createTracker(r),c=i.repeat(Math.max(Ip(a,i)+1,3)),l=n.enter(`codeFenced`),u=s.move(c);if(e.lang){let t=n.enter(`codeFencedLang${o}`);u+=s.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...s.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${o}`);u+=s.move(` `),u+=s.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...s.current()})),t()}return u+=s.move(`
`),a&&(u+=s.move(a+`
`)),u+=s.move(c),l(),u}function Bp(e,t,n){return(n?``:`    `)+e}function Vp(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Hp(e,t,n,r){let i=Vp(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}function Up(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Wp(e){return`&#x`+e.toString(16).toUpperCase()+`;`}function Gp(e,t,n){let r=lc(e),i=lc(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Kp.peek=qp;function Kp(e,t,n,r){let i=Up(n),a=n.enter(`emphasis`),o=n.createTracker(r),s=o.move(i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=Gp(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=Wp(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=Gp(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+Wp(d));let p=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function qp(e,t,n){return n.options.emphasis||`*`}function Jp(e,t){let n=!1;return Pd(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&ks(e)&&(t.options.setext||n))}function Yp(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(Jp(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l=Wp(l.charCodeAt(0))+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}Xp.peek=Zp;function Xp(e){return e.value||``}function Zp(){return`<`}Qp.peek=$p;function Qp(e,t,n,r){let i=Vp(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function $p(){return`!`}em.peek=tm;function em(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function tm(){return`!`}nm.peek=rm;function nm(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e),i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function rm(){return"`"}function im(e,t){let n=ks(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type===`text`&&(n===e.url||`mailto:`+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}am.peek=om;function am(e,t,n,r){let i=Vp(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r),s,c;if(im(e,n)){let t=n.stack;n.stack=[],s=n.enter(`autolink`);let r=o.move(`<`);return r+=o.move(n.containerPhrasing(e,{before:r,after:`>`,...o.current()})),r+=o.move(`>`),s(),n.stack=t,r}s=n.enter(`link`),c=n.enter(`label`);let l=o.move(`[`);return l+=o.move(n.containerPhrasing(e,{before:l,after:`](`,...o.current()})),l+=o.move(`](`),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...o.current()}))),c(),e.title&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function om(e,t,n){return im(e,n)?`<`:`[`}sm.peek=cm;function sm(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function cm(){return`[`}function lm(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function um(e){let t=lm(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function dm(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function fm(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function pm(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?dm(n):lm(n),s=e.ordered?o===`.`?`)`:`.`:um(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if((o===`*`||o===`-`)&&t&&(!t.children||!t.children[0])&&n.stack[n.stack.length-1]===`list`&&n.stack[n.stack.length-2]===`listItem`&&n.stack[n.stack.length-3]===`list`&&n.stack[n.stack.length-4]===`listItem`&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),fm(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function mm(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function hm(e,t,n,r){let i=mm(n),a=n.bulletCurrent||lm(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}function gm(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}var _m=Sd([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`]);function vm(e,t,n,r){return(e.children.some(function(e){return _m(e)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function ym(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}bm.peek=xm;function bm(e,t,n,r){let i=ym(n),a=n.enter(`strong`),o=n.createTracker(r),s=o.move(i+i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=Gp(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=Wp(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=Gp(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+Wp(d));let p=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function xm(e,t,n){return n.options.strong||`*`}function Sm(e,t,n,r){return n.safe(e.value,r)}function Cm(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function wm(e,t,n){let r=(fm(n)+(n.options.ruleSpaces?` `:``)).repeat(Cm(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Tm={blockquote:jp,break:Fp,code:zp,definition:Hp,emphasis:Kp,hardBreak:Fp,heading:Yp,html:Xp,image:Qp,imageReference:em,inlineCode:nm,link:am,linkReference:sm,list:pm,listItem:hm,paragraph:gm,root:vm,strong:bm,text:Sm,thematicBreak:wm};function Em(){return{enter:{table:Dm,tableData:jm,tableHeader:jm,tableRow:km},exit:{codeText:Mm,table:Om,tableData:Am,tableHeader:Am,tableRow:Am}}}function Dm(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[]},e),this.data.inTable=!0}function Om(e){this.exit(e),this.data.inTable=void 0}function km(e){this.enter({type:`tableRow`,children:[]},e)}function Am(e){this.exit(e)}function jm(e){this.enter({type:`tableCell`,children:[]},e)}function Mm(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Nm));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function Nm(e,t){return t===`|`?t:e}function Pm(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{inlineCode:f,table:o,tableCell:c,tableRow:s}};function o(e,t,n,r){return l(u(e,n,r),e.align)}function s(e,t,n,r){let i=l([d(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function c(e,t,n,r){let i=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:a,after:a});return o(),i(),s}function l(e,t){return Op(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=d(r[i],t,n);return o(),a}function d(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=c(r[i],e,t,n);return o(),a}function f(e,t,n){let r=Tm.inlineCode(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}function Fm(){return{exit:{taskListCheckValueChecked:Lm,taskListCheckValueUnchecked:Lm,paragraph:Rm}}}function Im(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:zm}}}function Lm(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function Rm(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function zm(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=Tm.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}function Bm(){return[Kf(),gp(),xp(),Em(),Fm()]}function Vm(e){return{extensions:[qf(),_p(e),Sp(),Pm(e),Im()]}}var Hm={tokenize:nh,partial:!0},Um={tokenize:rh,partial:!0},Wm={tokenize:ih,partial:!0},Gm={tokenize:ah,partial:!0},Km={tokenize:oh,partial:!0},qm={name:`wwwAutolink`,tokenize:eh,previous:sh},Jm={name:`protocolAutolink`,tokenize:th,previous:ch},Ym={name:`emailAutolink`,tokenize:$m,previous:lh},Xm={};function Zm(){return{text:Xm}}for(var Qm=48;Qm<123;)Xm[Qm]=Ym,Qm++,Qm===58?Qm=65:Qm===91&&(Qm=97);Xm[43]=Ym,Xm[45]=Ym,Xm[46]=Ym,Xm[95]=Ym,Xm[72]=[Ym,Jm],Xm[104]=[Ym,Jm],Xm[87]=[Ym,qm],Xm[119]=[Ym,qm];function $m(e,t,n){let r=this,i,a;return o;function o(t){return!uh(t)||!lh.call(r,r.previous)||dh(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return uh(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(Km,u,l)(t):t===45||t===95||Ws(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&Us(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function eh(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!sh.call(r,r.previous)||dh(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(Hm,e.attempt(Um,e.attempt(Wm,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function th(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&ch.call(r,r.previous)&&!dh(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(Us(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||Ks(t)||Xs(t)||$s(t)||Qs(t)?n(t):e.attempt(Um,e.attempt(Wm,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function nh(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function rh(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(Gm,c,s)(t):t===null||Xs(t)||$s(t)||t!==45&&Qs(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function ih(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(Gm,t,a)(o):o===null||Xs(o)||$s(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function ah(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||Xs(o)||$s(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||Xs(e)||$s(e)?t(e):r(e)}function a(e){return Us(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):Us(t)?(e.consume(t),o):n(t)}}function oh(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return Ws(e)?n(e):t(e)}}function sh(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Xs(e)}function ch(e){return!Us(e)}function lh(e){return!(e===47||uh(e))}function uh(e){return e===43||e===45||e===46||e===95||Ws(e)}function dh(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var fh={tokenize:bh,partial:!0};function ph(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:_h,continuation:{tokenize:vh},exit:yh}},text:{91:{name:`gfmFootnoteCall`,tokenize:gh},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:mh,resolveTo:hh}}}}function mh(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=Hs(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function hh(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function gh(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||Xs(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(Hs(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return Xs(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function _h(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||Xs(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=Hs(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return Xs(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),nc(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function vh(e,t,n){return e.check(_c,t,e.attempt(fh,t,n))}function yh(e){e.exit(`gfmFootnoteDefinition`)}function bh(e,t,n){let r=this;return nc(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}function xh(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&Fs(o,o.length,0,uc(s,e.slice(r+1,n),t)),Fs(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),Fs(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=lc(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=lc(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var Sh=class{constructor(){this.map=[]}add(e,t,n){Ch(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0}};function Ch(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function wh(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}function Th(){return{flow:{null:{name:`table`,tokenize:Eh,resolveAll:Dh}}}}function Eh(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?S:c;return a===S&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124?u(e):(o=!0,a+=1,u(e))}function u(t){return t===null?n(t):R(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):Zs(t)?nc(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||Xs(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,Zs(t)?nc(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),h):x(t)}function h(t){return Zs(t)?nc(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||R(t)?b(t):x(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):x(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return Zs(t)?nc(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||R(n)?!o||i!==a?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function S(t){return e.enter(`tableRow`),C(t)}function C(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),C):n===null||R(n)?(e.exit(`tableRow`),t(n)):Zs(n)?nc(e,C,`whitespace`)(n):(e.enter(`data`),w(n))}function w(t){return t===null||t===124||Xs(t)?(e.exit(`data`),C(t)):(e.consume(t),t===92?T:w)}function T(t){return t===92||t===124?(e.consume(t),w):w(t)}}function Dh(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new Sh;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(kh(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=Oh(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=Oh(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=Oh(f,t,o,i,n,d)):(o[0]=o[1],d=Oh(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&kh(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=wh(t.events,n))}return e}function Oh(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},Ah(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=Ah(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=Ah(t.events,n[2]),a=Ah(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},Ah(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function kh(e,t,n,r,i){let a=[],o=Ah(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function Ah(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var jh={name:`tasklistCheck`,tokenize:Nh};function Mh(){return{text:{91:jh}}}function Nh(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return Xs(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return R(r)?t(r):Zs(r)?e.check({tokenize:Ph},t,n)(r):n(r)}}function Ph(e,t,n){return nc(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}function Fh(e){return Rs([Zm(),ph(),xh(e),Th(),Mh()])}var Ih={};function Lh(e){let t=this,n=e||Ih,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(Fh(n)),a.push(Bm()),o.push(Vm(n))}function Rh(){return{enter:{mathFlow:e,mathFlowFenceMeta:t,mathText:a},exit:{mathFlow:i,mathFlowFence:r,mathFlowFenceMeta:n,mathFlowValue:s,mathText:o,mathTextData:s}};function e(e){this.enter({type:`math`,meta:null,value:``,data:{hName:`pre`,hChildren:[{type:`element`,tagName:`code`,properties:{className:[`language-math`,`math-display`]},children:[]}]}},e)}function t(){this.buffer()}function n(){let e=this.resume(),t=this.stack[this.stack.length-1];t.type,t.meta=e}function r(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function i(e){let t=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),n=this.stack[this.stack.length-1];n.type,this.exit(e),n.value=t;let r=n.data.hChildren[0];r.type,r.tagName,r.children.push({type:`text`,value:t}),this.data.mathFlowInside=void 0}function a(e){this.enter({type:`inlineMath`,value:``,data:{hName:`code`,hProperties:{className:[`language-math`,`math-inline`]},hChildren:[]}},e),this.buffer()}function o(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,this.exit(e),n.value=t,n.data.hChildren.push({type:`text`,value:t})}function s(e){this.config.enter.data.call(this,e),this.config.exit.data.call(this,e)}}function zh(e){let t=(e||{}).singleDollarTextMath;return t??=!0,r.peek=i,{unsafe:[{character:`\r`,inConstruct:`mathFlowMeta`},{character:`
`,inConstruct:`mathFlowMeta`},{character:`$`,after:t?void 0:`\\$`,inConstruct:`phrasing`},{character:`$`,inConstruct:`mathFlowMeta`},{atBreak:!0,character:`$`,after:`\\$`}],handlers:{math:n,inlineMath:r}};function n(e,t,n,r){let i=e.value||``,a=n.createTracker(r),o=`$`.repeat(Math.max(Ip(i,`$`)+1,2)),s=n.enter(`mathFlow`),c=a.move(o);if(e.meta){let t=n.enter(`mathFlowMeta`);c+=a.move(n.safe(e.meta,{after:`
`,before:c,encode:[`$`],...a.current()})),t()}return c+=a.move(`
`),i&&(c+=a.move(i+`
`)),c+=a.move(o),s(),c}function r(e,n,r){let i=e.value||``,a=1;for(t||a++;RegExp(`(^|[^$])`+`\\$`.repeat(a)+`([^$]|$)`).test(i);)a++;let o=`$`.repeat(a);/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^\$|\$$/.test(i))&&(i=` `+i+` `);let s=-1;for(;++s<r.unsafe.length;){let e=r.unsafe[s];if(!e.atBreak)continue;let t=r.compilePattern(e),n;for(;n=t.exec(i);){let e=n.index;i.codePointAt(e)===10&&i.codePointAt(e-1)===13&&e--,i=i.slice(0,e)+` `+i.slice(n.index+1)}}return o+i+o}function i(){return`$`}}var Bh={tokenize:Hh,concrete:!0,name:`mathFlow`},Vh={tokenize:Uh,partial:!0};function Hh(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){return e.enter(`mathFlow`),e.enter(`mathFlowFence`),e.enter(`mathFlowFenceSequence`),c(t)}function c(t){return t===36?(e.consume(t),o++,c):o<2?n(t):(e.exit(`mathFlowFenceSequence`),nc(e,l,`whitespace`)(t))}function l(t){return t===null||R(t)?d(t):(e.enter(`mathFlowFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===null||R(t)?(e.exit(`chunkString`),e.exit(`mathFlowFenceMeta`),d(t)):t===36?n(t):(e.consume(t),u)}function d(n){return e.exit(`mathFlowFence`),r.interrupt?t(n):e.attempt(Vh,f,g)(n)}function f(t){return e.attempt({tokenize:_,partial:!0},g,p)(t)}function p(t){return(a?nc(e,m,`linePrefix`,a+1):m)(t)}function m(t){return t===null?g(t):R(t)?e.attempt(Vh,f,g)(t):(e.enter(`mathFlowValue`),h(t))}function h(t){return t===null||R(t)?(e.exit(`mathFlowValue`),m(t)):(e.consume(t),h)}function g(n){return e.exit(`mathFlow`),t(n)}function _(e,t,n){let i=0;return nc(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4);function a(t){return e.enter(`mathFlowFence`),e.enter(`mathFlowFenceSequence`),s(t)}function s(t){return t===36?(i++,e.consume(t),s):i<o?n(t):(e.exit(`mathFlowFenceSequence`),nc(e,c,`whitespace`)(t))}function c(r){return r===null||R(r)?(e.exit(`mathFlowFence`),t(r)):n(r)}}}function Uh(e,t,n){let r=this;return i;function i(n){return n===null?t(n):(e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function Wh(e){let t=(e||{}).singleDollarTextMath;return t??=!0,{tokenize:n,resolve:Gh,previous:Kh,name:`mathText`};function n(e,n,r){let i=0,a,o;return s;function s(t){return e.enter(`mathText`),e.enter(`mathTextSequence`),c(t)}function c(n){return n===36?(e.consume(n),i++,c):i<2&&!t?r(n):(e.exit(`mathTextSequence`),l(n))}function l(t){return t===null?r(t):t===36?(o=e.enter(`mathTextSequence`),a=0,d(t)):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),l):R(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),l):(e.enter(`mathTextData`),u(t))}function u(t){return t===null||t===32||t===36||R(t)?(e.exit(`mathTextData`),l(t)):(e.consume(t),u)}function d(t){return t===36?(e.consume(t),a++,d):a===i?(e.exit(`mathTextSequence`),e.exit(`mathText`),n(t)):(o.type=`mathTextData`,u(t))}}}function Gh(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`mathTextData`){e[t][1].type=`mathTextPadding`,e[n][1].type=`mathTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`mathTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Kh(e){return e!==36||this.events[this.events.length-1][1].type===`characterEscape`}function qh(e){return{flow:{36:Bh},text:{36:Wh(e)}}}var z=class e extends Error{constructor(t,n){var r=`KaTeX parse error: `+t,i,a,o=n&&n.loc;if(o&&o.start<=o.end){var s=o.lexer.input;i=o.start,a=o.end,i===s.length?r+=` at end of input: `:r+=` at position `+(i+1)+`: `;var c=s.slice(i,a).replace(/[^]/g,`$&̲`),l=i>15?`…`+s.slice(i-15,i):s.slice(0,i),u=a+15<s.length?s.slice(a,a+15)+`…`:s.slice(a);r+=l+c+u}super(r),this.name=`ParseError`,this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,e.prototype),this.position=i,i!=null&&a!=null&&(this.length=a-i),this.rawMessage=t}},Jh=/([A-Z])/g,Yh=e=>e.replace(Jh,`-$1`).toLowerCase(),Xh={"&":`&amp;`,">":`&gt;`,"<":`&lt;`,'"':`&quot;`,"'":`&#x27;`},Zh=/[&><"']/g,Qh=e=>String(e).replace(Zh,e=>Xh[e]),$h=e=>e.type===`ordgroup`||e.type===`color`?e.body.length===1?$h(e.body[0]):e:e.type===`font`?$h(e.body):e,eg=new Set([`mathord`,`textord`,`atom`]),tg=e=>eg.has($h(e).type),ng=e=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return t?t[2]!==`:`||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():`_relative`},rg={displayMode:{type:`boolean`,description:`Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.`,cli:`-d, --display-mode`},output:{type:{enum:[`htmlAndMathml`,`html`,`mathml`]},description:`Determines the markup language of the output.`,cli:`-F, --format <type>`},leqno:{type:`boolean`,description:`Render display math in leqno style (left-justified tags).`},fleqn:{type:`boolean`,description:`Render display math flush left.`},throwOnError:{type:`boolean`,default:!0,cli:`-t, --no-throw-on-error`,cliDescription:`Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.`},errorColor:{type:`string`,default:`#cc0000`,cli:`-c, --error-color <color>`,cliDescription:`A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.`,cliProcessor:e=>`#`+e},macros:{type:`object`,cli:`-m, --macro <def>`,cliDescription:`Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).`,cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:`number`,description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:`--min-rule-thickness <size>`,cliProcessor:parseFloat},colorIsTextColor:{type:`boolean`,description:`Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.`,cli:`-b, --color-is-text-color`},strict:{type:[{enum:[`warn`,`ignore`,`error`]},`boolean`,`function`],description:`Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.`,cli:`-S, --strict`,cliDefault:!1},trust:{type:[`boolean`,`function`],description:`Trust the input, enabling all HTML features such as \\url.`,cli:`-T, --trust`},maxSize:{type:`number`,default:1/0,description:`If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large`,processor:e=>Math.max(0,e),cli:`-s, --max-size <n>`,cliProcessor:parseInt},maxExpand:{type:`number`,default:1e3,description:`Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.`,processor:e=>Math.max(0,e),cli:`-e, --max-expand <n>`,cliProcessor:e=>e===`Infinity`?1/0:parseInt(e)},globalGroup:{type:`boolean`,cli:!1}};function ig(e){if(typeof e!=`string`)return e.enum[0];switch(e){case`boolean`:return!1;case`string`:return``;case`number`:return 0;case`object`:return{};default:throw Error(`Unexpected schema type; settings must declare an explicit default.`)}}function ag(e){return e.default===void 0?ig(Array.isArray(e.type)?e.type[0]:e.type):e.default}function og(e,t,n,r){var i=n[t];e[t]=i===void 0?ag(r):r.processor?r.processor(i):i}var sg=class{constructor(e){e===void 0&&(e={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e||={};for(var t of Object.keys(rg)){var n=rg[t];n&&og(this,t,e,n)}}reportNonstrict(e,t,n){var r=this.strict;if(typeof r==`function`&&(r=r(e,t,n)),!(!r||r===`ignore`)){if(r===!0||r===`error`)throw new z(`LaTeX-incompatible input and strict mode is set to 'error': `+(t+` [`+e+`]`),n);r===`warn`?typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': `+(t+` [`+e+`]`)):typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to `+(`unrecognized '`+r+`': `+t+` [`+e+`]`))}}useStrictBehavior(e,t,n){var r=this.strict;if(typeof r==`function`)try{r=r(e,t,n)}catch{r=`error`}return!r||r===`ignore`?!1:r===!0||r===`error`?!0:r===`warn`?(typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': `+(t+` [`+e+`]`)),!1):(typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to `+(`unrecognized '`+r+`': `+t+` [`+e+`]`)),!1)}isTrusted(e){if(`url`in e&&e.url&&!e.protocol){var t=ng(e.url);if(t==null)return!1;e.protocol=t}return!!(typeof this.trust==`function`?this.trust(e):this.trust)}},cg=class{constructor(e,t,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=n}sup(){return _g[vg[this.id]]}sub(){return _g[yg[this.id]]}fracNum(){return _g[bg[this.id]]}fracDen(){return _g[xg[this.id]]}cramp(){return _g[Sg[this.id]]}text(){return _g[Cg[this.id]]}isTight(){return this.size>=2}},lg=0,ug=1,dg=2,fg=3,pg=4,mg=5,hg=6,gg=7,_g=[new cg(lg,0,!1),new cg(ug,0,!0),new cg(dg,1,!1),new cg(fg,1,!0),new cg(pg,2,!1),new cg(mg,2,!0),new cg(hg,3,!1),new cg(gg,3,!0)],vg=[pg,mg,pg,mg,hg,gg,hg,gg],yg=[mg,mg,mg,mg,gg,gg,gg,gg],bg=[dg,fg,pg,mg,hg,gg,hg,gg],xg=[fg,fg,mg,mg,gg,gg,gg,gg],Sg=[ug,ug,fg,fg,mg,mg,gg,gg],Cg=[lg,ug,dg,fg,dg,fg,dg,fg],wg={DISPLAY:_g[lg],TEXT:_g[dg],SCRIPT:_g[pg],SCRIPTSCRIPT:_g[hg]},Tg=[{name:`latin`,blocks:[[256,591],[768,879]]},{name:`cyrillic`,blocks:[[1024,1279]]},{name:`armenian`,blocks:[[1328,1423]]},{name:`brahmic`,blocks:[[2304,4255]]},{name:`georgian`,blocks:[[4256,4351]]},{name:`cjk`,blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:`hangul`,blocks:[[44032,55215]]}];function Eg(e){for(var t=0;t<Tg.length;t++)for(var n=Tg[t],r=0;r<n.blocks.length;r++){var i=n.blocks[r];if(e>=i[0]&&e<=i[1])return n.name}return null}var Dg=[];Tg.forEach(e=>e.blocks.forEach(e=>Dg.push(...e)));function Og(e){for(var t=0;t<Dg.length;t+=2)if(e>=Dg[t]&&e<=Dg[t+1])return!0;return!1}var kg=e=>e+` `+e,Ag=80,jg=function(e,t){return`M95,`+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+` -`+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},Mg=function(e,t){return`M263,`+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+` -`+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},Ng=function(e,t){return`M983 `+(10+e+t)+`
l`+e/3.13+` -`+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},Pg=function(e,t){return`M424,`+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+` -`+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+` `+t+`
h400000v`+(40+e)+`h-400000z`},Fg=function(e,t){return`M473,`+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+` -`+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+` `+t+`h400000v`+(40+e)+`H1017.7z`},Ig=function(e){var t=e/2;return`M400000 `+e+` H0 L`+t+` 0 l65 45 L145 `+(e-80)+` H400000z`},Lg=function(e,t,n){var r=n-54-t-e;return`M702 `+(e+t)+`H400000`+(40+e)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+`H400000v`+(40+e)+`H742z`},Rg=function(e,t,n){t=1e3*t;var r=``;switch(e){case`sqrtMain`:r=jg(t,Ag);break;case`sqrtSize1`:r=Mg(t,Ag);break;case`sqrtSize2`:r=Ng(t,Ag);break;case`sqrtSize3`:r=Pg(t,Ag);break;case`sqrtSize4`:r=Fg(t,Ag);break;case`sqrtTall`:r=Lg(t,Ag,n)}return r},zg=function(e,t){switch(e){case`⎜`:return kg(`M291 0 H417 V`+t+` H291z`);case`∣`:return kg(`M145 0 H188 V`+t+` H145z`);case`∥`:return kg(`M145 0 H188 V`+t+` H145z`)+kg(`M367 0 H410 V`+t+` H367z`);case`⎟`:return kg(`M457 0 H583 V`+t+` H457z`);case`⎢`:return kg(`M319 0 H403 V`+t+` H319z`);case`⎥`:return kg(`M263 0 H347 V`+t+` H263z`);case`⎪`:return kg(`M384 0 H504 V`+t+` H384z`);case`⏐`:return kg(`M312 0 H355 V`+t+` H312z`);case`‖`:return kg(`M257 0 H300 V`+t+` H257z`)+kg(`M478 0 H521 V`+t+` H478z`);default:return``}},Bg={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:kg(`M40 281 V428 H0 V94 H40 V241 H400000 v40z`),leftbracketunder:kg(`M0 0 h120 V290 H399995 v120 H0z`),leftbracketover:kg(`M0 440 h120 V150 H399995 v-120 H0z`),leftmapsto:kg(`M40 281 V448H0V74H40V241H400000v40z`),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:kg(`M0 50 h400000 v40H0z m0 194h40000v40H0z`),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:kg(`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`),rightbracketunder:kg(`M399995 0 h-120 V290 H0 v120 H400000z`),rightbracketover:kg(`M399995 440 h-120 V150 H0 v-120 H399995z`),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},Vg=function(e,t){switch(e){case`lbrack`:return`M403 1759 V84 H666 V0 H319 V1759 v`+t+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+` v1759 v84 h84z`;case`rbrack`:return`M347 1759 V0 H0 V84 H263 V1759 v`+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+` v1759 h84z`;case`vert`:return`M145 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z`;case`doublevert`:return`M145 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+` v585 h43z`;case`lfloor`:return`M319 602 V0 H403 V602 v`+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+` v1715 H319z`;case`rfloor`:return`M319 602 V0 H403 V602 v`+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+` v1715 H319z`;case`lceil`:return`M403 1759 V84 H666 V0 H319 V1759 v`+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+` v602 h84z`;case`rceil`:return`M347 1759 V0 H0 V84 H263 V1759 v`+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+` v602 h84z`;case`lparen`:return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case`rparen`:return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw Error(`Unknown stretchy delimiter.`)}};function Hg(e){return`toText`in e}var Ug=class{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e=``,t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){return this.children.map(e=>{if(Hg(e))return e.toText();throw Error(`Expected MathDomNode with toText, got `+e.constructor.name)}).join(``)}},Wg={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Gg={ex:!0,em:!0,mu:!0},Kg=function(e){return typeof e!=`string`&&(e=e.unit),e in Wg||e in Gg||e===`ex`},qg=function(e,t){var n;if(e.unit in Wg)n=Wg[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit===`mu`)n=t.fontMetrics().cssEmPerMu;else{var r=t.style.isTight()?t.havingStyle(t.style.text()):t;if(e.unit===`ex`)n=r.fontMetrics().xHeight;else if(e.unit===`em`)n=r.fontMetrics().quad;else throw new z(`Invalid unit: '`+e.unit+`'`);r!==t&&(n*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*n,t.maxSize)},B=function(e){return+e.toFixed(4)+`em`},Jg=function(e){return e.filter(e=>e).join(` `)},Yg=function(e){var t=``;for(var n of Object.keys(e)){var r=e[n];r!==void 0&&(t+=Yh(n)+`:`+r+`;`)}return t},Xg=function(e,t,n){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push(`mtight`);var r=t.getColor();r&&(this.style.color=r)}},Zg=function(e){var t=document.createElement(e);t.className=Jg(this.classes),Object.assign(t.style,this.style);for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t},Qg=/[\s"'>/=\x00-\x1f]/,$g=function(e){var t=`<`+e;this.classes.length&&(t+=` class="`+Qh(Jg(this.classes))+`"`);var n=Yg(this.style);n&&(t+=` style="`+Qh(n)+`"`);for(var r of Object.keys(this.attributes)){if(Qg.test(r))throw new z(`Invalid attribute name '`+r+`'`);t+=` `+r+`="`+Qh(this.attributes[r])+`"`}t+=`>`;for(var i=0;i<this.children.length;i++)t+=this.children[i].toMarkup();return t+=`</`+e+`>`,t},e_=class{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,Xg.call(this,e,n,r),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Zg.call(this,`span`)}toMarkup(){return $g.call(this,`span`)}},t_=class{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Xg.call(this,t,r),this.children=n||[],this.setAttribute(`href`,e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Zg.call(this,`a`)}toMarkup(){return $g.call(this,`a`)}},n_=class{constructor(e,t,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=[`mord`],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement(`img`);return e.src=this.src,e.alt=this.alt,e.className=`mord`,Object.assign(e.style,this.style),e}toMarkup(){var e=`<img src="`+Qh(this.src)+`"`+(` alt="`+Qh(this.alt)+`"`),t=Yg(this.style);return t&&(e+=` style="`+Qh(t)+`"`),e+=`'/>`,e}},r_={î:`ı̂`,ï:`ı̈`,í:`ı́`,ì:`ı̀`},i_=class{constructor(e,t,n,r,i,a,o,s){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=n||0,this.italic=r||0,this.skew=i||0,this.width=a||0,this.classes=o||[],this.style=s||{},this.maxFontSize=0;var c=Eg(this.text.charCodeAt(0));c&&this.classes.push(c+`_fallback`),/[îïíì]/.test(this.text)&&(this.text=r_[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;return this.italic>0&&(t=document.createElement(`span`),t.style.marginRight=B(this.italic)),this.classes.length>0&&(t||=document.createElement(`span`),t.className=Jg(this.classes)),Object.keys(this.style).length>0&&(t||=document.createElement(`span`),Object.assign(t.style,this.style)),t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t=`<span`;this.classes.length&&(e=!0,t+=` class="`,t+=Qh(Jg(this.classes)),t+=`"`);var n=``;this.italic>0&&(n+=`margin-right:`+B(this.italic)+`;`),n+=Yg(this.style),n&&(e=!0,t+=` style="`+Qh(n)+`"`);var r=Qh(this.text);return e?(t+=`>`,t+=r,t+=`</span>`,t):r}},a_=class{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);for(var t of Object.keys(this.attributes))e.setAttribute(t,this.attributes[t]);for(var n=0;n<this.children.length;n++)e.appendChild(this.children[n].toNode());return e}toMarkup(){var e=`<svg xmlns="http://www.w3.org/2000/svg"`;for(var t of Object.keys(this.attributes))e+=` `+t+`="`+Qh(this.attributes[t])+`"`;e+=`>`;for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+=`</svg>`,e}},o_=class{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return this.alternate?e.setAttribute(`d`,this.alternate):e.setAttribute(`d`,Bg[this.pathName]),e}toMarkup(){return this.alternate?`<path d="`+Qh(this.alternate)+`"/>`:`<path d="`+Qh(Bg[this.pathName])+`"/>`}},s_=class{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`line`);for(var t of Object.keys(this.attributes))e.setAttribute(t,this.attributes[t]);return e}toMarkup(){var e=`<line`;for(var t of Object.keys(this.attributes))e+=` `+t+`="`+Qh(this.attributes[t])+`"`;return e+=`/>`,e}};function c_(e){if(e instanceof i_)return e;throw Error(`Expected symbolNode but got `+String(e)+`.`)}function l_(e){if(e instanceof e_)return e;throw Error(`Expected span<HtmlDomNode> but got `+String(e)+`.`)}var u_=e=>e instanceof e_||e instanceof t_||e instanceof Ug,d_={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},f_={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},p_={Å:`A`,Ð:`D`,Þ:`o`,å:`a`,ð:`d`,þ:`o`,А:`A`,Б:`B`,В:`B`,Г:`F`,Д:`A`,Е:`E`,Ж:`K`,З:`3`,И:`N`,Й:`N`,К:`K`,Л:`N`,М:`M`,Н:`H`,О:`O`,П:`N`,Р:`P`,С:`C`,Т:`T`,У:`y`,Ф:`O`,Х:`X`,Ц:`U`,Ч:`h`,Ш:`W`,Щ:`W`,Ъ:`B`,Ы:`X`,Ь:`B`,Э:`3`,Ю:`X`,Я:`R`,а:`a`,б:`b`,в:`a`,г:`r`,д:`y`,е:`e`,ж:`m`,з:`e`,и:`n`,й:`n`,к:`n`,л:`n`,м:`m`,н:`n`,о:`o`,п:`n`,р:`p`,с:`c`,т:`o`,у:`y`,ф:`b`,х:`x`,ц:`n`,ч:`n`,ш:`w`,щ:`w`,ъ:`a`,ы:`m`,ь:`a`,э:`e`,ю:`m`,я:`r`};function m_(e,t){d_[e]=t}function h_(e,t,n){if(!d_[t])throw Error(`Font metrics not found for font: `+t+`.`);var r=e.charCodeAt(0),i=d_[t][r];if(!i&&e[0]in p_&&(r=p_[e[0]].charCodeAt(0),i=d_[t][r]),!i&&n===`text`&&Og(r)&&(i=d_[t][77]),i)return{depth:i[0],height:i[1],italic:i[2],skew:i[3],width:i[4]}}var g_={};function __(e){var t=e>=5?0:e>=3?1:2;if(!g_[t]){var n=g_[t]={cssEmPerMu:f_.quad[t]/18};for(var r in f_)f_.hasOwnProperty(r)&&(n[r]=f_[r][t])}return g_[t]}var v_={math:{},text:{}};function V(e,t,n,r,i,a){v_[e][i]={font:t,group:n,replace:r},a&&r&&(v_[e][r]=v_[e][i])}var H=`math`,U=`text`,W=`main`,G=`ams`,y_=`accent-token`,K=`bin`,b_=`close`,x_=`inner`,q=`mathord`,S_=`op-token`,C_=`open`,w_=`punct`,J=`rel`,T_=`spacing`,Y=`textord`;V(H,W,J,`≡`,`\\equiv`,!0),V(H,W,J,`≺`,`\\prec`,!0),V(H,W,J,`≻`,`\\succ`,!0),V(H,W,J,`∼`,`\\sim`,!0),V(H,W,J,`⊥`,`\\perp`),V(H,W,J,`⪯`,`\\preceq`,!0),V(H,W,J,`⪰`,`\\succeq`,!0),V(H,W,J,`≃`,`\\simeq`,!0),V(H,W,J,`∣`,`\\mid`,!0),V(H,W,J,`≪`,`\\ll`,!0),V(H,W,J,`≫`,`\\gg`,!0),V(H,W,J,`≍`,`\\asymp`,!0),V(H,W,J,`∥`,`\\parallel`),V(H,W,J,`⋈`,`\\bowtie`,!0),V(H,W,J,`⌣`,`\\smile`,!0),V(H,W,J,`⊑`,`\\sqsubseteq`,!0),V(H,W,J,`⊒`,`\\sqsupseteq`,!0),V(H,W,J,`≐`,`\\doteq`,!0),V(H,W,J,`⌢`,`\\frown`,!0),V(H,W,J,`∋`,`\\ni`,!0),V(H,W,J,`∝`,`\\propto`,!0),V(H,W,J,`⊢`,`\\vdash`,!0),V(H,W,J,`⊣`,`\\dashv`,!0),V(H,W,J,`∋`,`\\owns`),V(H,W,w_,`.`,`\\ldotp`),V(H,W,w_,`⋅`,`\\cdotp`),V(H,W,w_,`⋅`,`·`),V(U,W,Y,`⋅`,`·`),V(H,W,Y,`#`,`\\#`),V(U,W,Y,`#`,`\\#`),V(H,W,Y,`&`,`\\&`),V(U,W,Y,`&`,`\\&`),V(H,W,Y,`ℵ`,`\\aleph`,!0),V(H,W,Y,`∀`,`\\forall`,!0),V(H,W,Y,`ℏ`,`\\hbar`,!0),V(H,W,Y,`∃`,`\\exists`,!0),V(H,W,Y,`∇`,`\\nabla`,!0),V(H,W,Y,`♭`,`\\flat`,!0),V(H,W,Y,`ℓ`,`\\ell`,!0),V(H,W,Y,`♮`,`\\natural`,!0),V(H,W,Y,`♣`,`\\clubsuit`,!0),V(H,W,Y,`℘`,`\\wp`,!0),V(H,W,Y,`♯`,`\\sharp`,!0),V(H,W,Y,`♢`,`\\diamondsuit`,!0),V(H,W,Y,`ℜ`,`\\Re`,!0),V(H,W,Y,`♡`,`\\heartsuit`,!0),V(H,W,Y,`ℑ`,`\\Im`,!0),V(H,W,Y,`♠`,`\\spadesuit`,!0),V(H,W,Y,`§`,`\\S`,!0),V(U,W,Y,`§`,`\\S`),V(H,W,Y,`¶`,`\\P`,!0),V(U,W,Y,`¶`,`\\P`),V(H,W,Y,`†`,`\\dag`),V(U,W,Y,`†`,`\\dag`),V(U,W,Y,`†`,`\\textdagger`),V(H,W,Y,`‡`,`\\ddag`),V(U,W,Y,`‡`,`\\ddag`),V(U,W,Y,`‡`,`\\textdaggerdbl`),V(H,W,b_,`⎱`,`\\rmoustache`,!0),V(H,W,C_,`⎰`,`\\lmoustache`,!0),V(H,W,b_,`⟯`,`\\rgroup`,!0),V(H,W,C_,`⟮`,`\\lgroup`,!0),V(H,W,K,`∓`,`\\mp`,!0),V(H,W,K,`⊖`,`\\ominus`,!0),V(H,W,K,`⊎`,`\\uplus`,!0),V(H,W,K,`⊓`,`\\sqcap`,!0),V(H,W,K,`∗`,`\\ast`),V(H,W,K,`⊔`,`\\sqcup`,!0),V(H,W,K,`◯`,`\\bigcirc`,!0),V(H,W,K,`∙`,`\\bullet`,!0),V(H,W,K,`‡`,`\\ddagger`),V(H,W,K,`≀`,`\\wr`,!0),V(H,W,K,`⨿`,`\\amalg`),V(H,W,K,`&`,`\\And`),V(H,W,J,`⟵`,`\\longleftarrow`,!0),V(H,W,J,`⇐`,`\\Leftarrow`,!0),V(H,W,J,`⟸`,`\\Longleftarrow`,!0),V(H,W,J,`⟶`,`\\longrightarrow`,!0),V(H,W,J,`⇒`,`\\Rightarrow`,!0),V(H,W,J,`⟹`,`\\Longrightarrow`,!0),V(H,W,J,`↔`,`\\leftrightarrow`,!0),V(H,W,J,`⟷`,`\\longleftrightarrow`,!0),V(H,W,J,`⇔`,`\\Leftrightarrow`,!0),V(H,W,J,`⟺`,`\\Longleftrightarrow`,!0),V(H,W,J,`↦`,`\\mapsto`,!0),V(H,W,J,`⟼`,`\\longmapsto`,!0),V(H,W,J,`↗`,`\\nearrow`,!0),V(H,W,J,`↩`,`\\hookleftarrow`,!0),V(H,W,J,`↪`,`\\hookrightarrow`,!0),V(H,W,J,`↘`,`\\searrow`,!0),V(H,W,J,`↼`,`\\leftharpoonup`,!0),V(H,W,J,`⇀`,`\\rightharpoonup`,!0),V(H,W,J,`↙`,`\\swarrow`,!0),V(H,W,J,`↽`,`\\leftharpoondown`,!0),V(H,W,J,`⇁`,`\\rightharpoondown`,!0),V(H,W,J,`↖`,`\\nwarrow`,!0),V(H,W,J,`⇌`,`\\rightleftharpoons`,!0),V(H,G,J,`≮`,`\\nless`,!0),V(H,G,J,``,`\\@nleqslant`),V(H,G,J,``,`\\@nleqq`),V(H,G,J,`⪇`,`\\lneq`,!0),V(H,G,J,`≨`,`\\lneqq`,!0),V(H,G,J,``,`\\@lvertneqq`),V(H,G,J,`⋦`,`\\lnsim`,!0),V(H,G,J,`⪉`,`\\lnapprox`,!0),V(H,G,J,`⊀`,`\\nprec`,!0),V(H,G,J,`⋠`,`\\npreceq`,!0),V(H,G,J,`⋨`,`\\precnsim`,!0),V(H,G,J,`⪹`,`\\precnapprox`,!0),V(H,G,J,`≁`,`\\nsim`,!0),V(H,G,J,``,`\\@nshortmid`),V(H,G,J,`∤`,`\\nmid`,!0),V(H,G,J,`⊬`,`\\nvdash`,!0),V(H,G,J,`⊭`,`\\nvDash`,!0),V(H,G,J,`⋪`,`\\ntriangleleft`),V(H,G,J,`⋬`,`\\ntrianglelefteq`,!0),V(H,G,J,`⊊`,`\\subsetneq`,!0),V(H,G,J,``,`\\@varsubsetneq`),V(H,G,J,`⫋`,`\\subsetneqq`,!0),V(H,G,J,``,`\\@varsubsetneqq`),V(H,G,J,`≯`,`\\ngtr`,!0),V(H,G,J,``,`\\@ngeqslant`),V(H,G,J,``,`\\@ngeqq`),V(H,G,J,`⪈`,`\\gneq`,!0),V(H,G,J,`≩`,`\\gneqq`,!0),V(H,G,J,``,`\\@gvertneqq`),V(H,G,J,`⋧`,`\\gnsim`,!0),V(H,G,J,`⪊`,`\\gnapprox`,!0),V(H,G,J,`⊁`,`\\nsucc`,!0),V(H,G,J,`⋡`,`\\nsucceq`,!0),V(H,G,J,`⋩`,`\\succnsim`,!0),V(H,G,J,`⪺`,`\\succnapprox`,!0),V(H,G,J,`≆`,`\\ncong`,!0),V(H,G,J,``,`\\@nshortparallel`),V(H,G,J,`∦`,`\\nparallel`,!0),V(H,G,J,`⊯`,`\\nVDash`,!0),V(H,G,J,`⋫`,`\\ntriangleright`),V(H,G,J,`⋭`,`\\ntrianglerighteq`,!0),V(H,G,J,``,`\\@nsupseteqq`),V(H,G,J,`⊋`,`\\supsetneq`,!0),V(H,G,J,``,`\\@varsupsetneq`),V(H,G,J,`⫌`,`\\supsetneqq`,!0),V(H,G,J,``,`\\@varsupsetneqq`),V(H,G,J,`⊮`,`\\nVdash`,!0),V(H,G,J,`⪵`,`\\precneqq`,!0),V(H,G,J,`⪶`,`\\succneqq`,!0),V(H,G,J,``,`\\@nsubseteqq`),V(H,G,K,`⊴`,`\\unlhd`),V(H,G,K,`⊵`,`\\unrhd`),V(H,G,J,`↚`,`\\nleftarrow`,!0),V(H,G,J,`↛`,`\\nrightarrow`,!0),V(H,G,J,`⇍`,`\\nLeftarrow`,!0),V(H,G,J,`⇏`,`\\nRightarrow`,!0),V(H,G,J,`↮`,`\\nleftrightarrow`,!0),V(H,G,J,`⇎`,`\\nLeftrightarrow`,!0),V(H,G,J,`△`,`\\vartriangle`),V(H,G,Y,`ℏ`,`\\hslash`),V(H,G,Y,`▽`,`\\triangledown`),V(H,G,Y,`◊`,`\\lozenge`),V(H,G,Y,`Ⓢ`,`\\circledS`),V(H,G,Y,`®`,`\\circledR`),V(U,G,Y,`®`,`\\circledR`),V(H,G,Y,`∡`,`\\measuredangle`,!0),V(H,G,Y,`∄`,`\\nexists`),V(H,G,Y,`℧`,`\\mho`),V(H,G,Y,`Ⅎ`,`\\Finv`,!0),V(H,G,Y,`⅁`,`\\Game`,!0),V(H,G,Y,`‵`,`\\backprime`),V(H,G,Y,`▲`,`\\blacktriangle`),V(H,G,Y,`▼`,`\\blacktriangledown`),V(H,G,Y,`■`,`\\blacksquare`),V(H,G,Y,`⧫`,`\\blacklozenge`),V(H,G,Y,`★`,`\\bigstar`),V(H,G,Y,`∢`,`\\sphericalangle`,!0),V(H,G,Y,`∁`,`\\complement`,!0),V(H,G,Y,`ð`,`\\eth`,!0),V(U,W,Y,`ð`,`ð`),V(H,G,Y,`╱`,`\\diagup`),V(H,G,Y,`╲`,`\\diagdown`),V(H,G,Y,`□`,`\\square`),V(H,G,Y,`□`,`\\Box`),V(H,G,Y,`◊`,`\\Diamond`),V(H,G,Y,`¥`,`\\yen`,!0),V(U,G,Y,`¥`,`\\yen`,!0),V(H,G,Y,`✓`,`\\checkmark`,!0),V(U,G,Y,`✓`,`\\checkmark`),V(H,G,Y,`ℶ`,`\\beth`,!0),V(H,G,Y,`ℸ`,`\\daleth`,!0),V(H,G,Y,`ℷ`,`\\gimel`,!0),V(H,G,Y,`ϝ`,`\\digamma`,!0),V(H,G,Y,`ϰ`,`\\varkappa`),V(H,G,C_,`┌`,`\\@ulcorner`,!0),V(H,G,b_,`┐`,`\\@urcorner`,!0),V(H,G,C_,`└`,`\\@llcorner`,!0),V(H,G,b_,`┘`,`\\@lrcorner`,!0),V(H,G,J,`≦`,`\\leqq`,!0),V(H,G,J,`⩽`,`\\leqslant`,!0),V(H,G,J,`⪕`,`\\eqslantless`,!0),V(H,G,J,`≲`,`\\lesssim`,!0),V(H,G,J,`⪅`,`\\lessapprox`,!0),V(H,G,J,`≊`,`\\approxeq`,!0),V(H,G,K,`⋖`,`\\lessdot`),V(H,G,J,`⋘`,`\\lll`,!0),V(H,G,J,`≶`,`\\lessgtr`,!0),V(H,G,J,`⋚`,`\\lesseqgtr`,!0),V(H,G,J,`⪋`,`\\lesseqqgtr`,!0),V(H,G,J,`≑`,`\\doteqdot`),V(H,G,J,`≓`,`\\risingdotseq`,!0),V(H,G,J,`≒`,`\\fallingdotseq`,!0),V(H,G,J,`∽`,`\\backsim`,!0),V(H,G,J,`⋍`,`\\backsimeq`,!0),V(H,G,J,`⫅`,`\\subseteqq`,!0),V(H,G,J,`⋐`,`\\Subset`,!0),V(H,G,J,`⊏`,`\\sqsubset`,!0),V(H,G,J,`≼`,`\\preccurlyeq`,!0),V(H,G,J,`⋞`,`\\curlyeqprec`,!0),V(H,G,J,`≾`,`\\precsim`,!0),V(H,G,J,`⪷`,`\\precapprox`,!0),V(H,G,J,`⊲`,`\\vartriangleleft`),V(H,G,J,`⊴`,`\\trianglelefteq`),V(H,G,J,`⊨`,`\\vDash`,!0),V(H,G,J,`⊪`,`\\Vvdash`,!0),V(H,G,J,`⌣`,`\\smallsmile`),V(H,G,J,`⌢`,`\\smallfrown`),V(H,G,J,`≏`,`\\bumpeq`,!0),V(H,G,J,`≎`,`\\Bumpeq`,!0),V(H,G,J,`≧`,`\\geqq`,!0),V(H,G,J,`⩾`,`\\geqslant`,!0),V(H,G,J,`⪖`,`\\eqslantgtr`,!0),V(H,G,J,`≳`,`\\gtrsim`,!0),V(H,G,J,`⪆`,`\\gtrapprox`,!0),V(H,G,K,`⋗`,`\\gtrdot`),V(H,G,J,`⋙`,`\\ggg`,!0),V(H,G,J,`≷`,`\\gtrless`,!0),V(H,G,J,`⋛`,`\\gtreqless`,!0),V(H,G,J,`⪌`,`\\gtreqqless`,!0),V(H,G,J,`≖`,`\\eqcirc`,!0),V(H,G,J,`≗`,`\\circeq`,!0),V(H,G,J,`≜`,`\\triangleq`,!0),V(H,G,J,`∼`,`\\thicksim`),V(H,G,J,`≈`,`\\thickapprox`),V(H,G,J,`⫆`,`\\supseteqq`,!0),V(H,G,J,`⋑`,`\\Supset`,!0),V(H,G,J,`⊐`,`\\sqsupset`,!0),V(H,G,J,`≽`,`\\succcurlyeq`,!0),V(H,G,J,`⋟`,`\\curlyeqsucc`,!0),V(H,G,J,`≿`,`\\succsim`,!0),V(H,G,J,`⪸`,`\\succapprox`,!0),V(H,G,J,`⊳`,`\\vartriangleright`),V(H,G,J,`⊵`,`\\trianglerighteq`),V(H,G,J,`⊩`,`\\Vdash`,!0),V(H,G,J,`∣`,`\\shortmid`),V(H,G,J,`∥`,`\\shortparallel`),V(H,G,J,`≬`,`\\between`,!0),V(H,G,J,`⋔`,`\\pitchfork`,!0),V(H,G,J,`∝`,`\\varpropto`),V(H,G,J,`◀`,`\\blacktriangleleft`),V(H,G,J,`∴`,`\\therefore`,!0),V(H,G,J,`∍`,`\\backepsilon`),V(H,G,J,`▶`,`\\blacktriangleright`),V(H,G,J,`∵`,`\\because`,!0),V(H,G,J,`⋘`,`\\llless`),V(H,G,J,`⋙`,`\\gggtr`),V(H,G,K,`⊲`,`\\lhd`),V(H,G,K,`⊳`,`\\rhd`),V(H,G,J,`≂`,`\\eqsim`,!0),V(H,W,J,`⋈`,`\\Join`),V(H,G,J,`≑`,`\\Doteq`,!0),V(H,G,K,`∔`,`\\dotplus`,!0),V(H,G,K,`∖`,`\\smallsetminus`),V(H,G,K,`⋒`,`\\Cap`,!0),V(H,G,K,`⋓`,`\\Cup`,!0),V(H,G,K,`⩞`,`\\doublebarwedge`,!0),V(H,G,K,`⊟`,`\\boxminus`,!0),V(H,G,K,`⊞`,`\\boxplus`,!0),V(H,G,K,`⋇`,`\\divideontimes`,!0),V(H,G,K,`⋉`,`\\ltimes`,!0),V(H,G,K,`⋊`,`\\rtimes`,!0),V(H,G,K,`⋋`,`\\leftthreetimes`,!0),V(H,G,K,`⋌`,`\\rightthreetimes`,!0),V(H,G,K,`⋏`,`\\curlywedge`,!0),V(H,G,K,`⋎`,`\\curlyvee`,!0),V(H,G,K,`⊝`,`\\circleddash`,!0),V(H,G,K,`⊛`,`\\circledast`,!0),V(H,G,K,`⋅`,`\\centerdot`),V(H,G,K,`⊺`,`\\intercal`,!0),V(H,G,K,`⋒`,`\\doublecap`),V(H,G,K,`⋓`,`\\doublecup`),V(H,G,K,`⊠`,`\\boxtimes`,!0),V(H,G,J,`⇢`,`\\dashrightarrow`,!0),V(H,G,J,`⇠`,`\\dashleftarrow`,!0),V(H,G,J,`⇇`,`\\leftleftarrows`,!0),V(H,G,J,`⇆`,`\\leftrightarrows`,!0),V(H,G,J,`⇚`,`\\Lleftarrow`,!0),V(H,G,J,`↞`,`\\twoheadleftarrow`,!0),V(H,G,J,`↢`,`\\leftarrowtail`,!0),V(H,G,J,`↫`,`\\looparrowleft`,!0),V(H,G,J,`⇋`,`\\leftrightharpoons`,!0),V(H,G,J,`↶`,`\\curvearrowleft`,!0),V(H,G,J,`↺`,`\\circlearrowleft`,!0),V(H,G,J,`↰`,`\\Lsh`,!0),V(H,G,J,`⇈`,`\\upuparrows`,!0),V(H,G,J,`↿`,`\\upharpoonleft`,!0),V(H,G,J,`⇃`,`\\downharpoonleft`,!0),V(H,W,J,`⊶`,`\\origof`,!0),V(H,W,J,`⊷`,`\\imageof`,!0),V(H,G,J,`⊸`,`\\multimap`,!0),V(H,G,J,`↭`,`\\leftrightsquigarrow`,!0),V(H,G,J,`⇉`,`\\rightrightarrows`,!0),V(H,G,J,`⇄`,`\\rightleftarrows`,!0),V(H,G,J,`↠`,`\\twoheadrightarrow`,!0),V(H,G,J,`↣`,`\\rightarrowtail`,!0),V(H,G,J,`↬`,`\\looparrowright`,!0),V(H,G,J,`↷`,`\\curvearrowright`,!0),V(H,G,J,`↻`,`\\circlearrowright`,!0),V(H,G,J,`↱`,`\\Rsh`,!0),V(H,G,J,`⇊`,`\\downdownarrows`,!0),V(H,G,J,`↾`,`\\upharpoonright`,!0),V(H,G,J,`⇂`,`\\downharpoonright`,!0),V(H,G,J,`⇝`,`\\rightsquigarrow`,!0),V(H,G,J,`⇝`,`\\leadsto`),V(H,G,J,`⇛`,`\\Rrightarrow`,!0),V(H,G,J,`↾`,`\\restriction`),V(H,W,Y,`‘`,"`"),V(H,W,Y,`$`,`\\$`),V(U,W,Y,`$`,`\\$`),V(U,W,Y,`$`,`\\textdollar`),V(H,W,Y,`%`,`\\%`),V(U,W,Y,`%`,`\\%`),V(H,W,Y,`_`,`\\_`),V(U,W,Y,`_`,`\\_`),V(U,W,Y,`_`,`\\textunderscore`),V(H,W,Y,`∠`,`\\angle`,!0),V(H,W,Y,`∞`,`\\infty`,!0),V(H,W,Y,`′`,`\\prime`),V(H,W,Y,`△`,`\\triangle`),V(H,W,Y,`Γ`,`\\Gamma`,!0),V(H,W,Y,`Δ`,`\\Delta`,!0),V(H,W,Y,`Θ`,`\\Theta`,!0),V(H,W,Y,`Λ`,`\\Lambda`,!0),V(H,W,Y,`Ξ`,`\\Xi`,!0),V(H,W,Y,`Π`,`\\Pi`,!0),V(H,W,Y,`Σ`,`\\Sigma`,!0),V(H,W,Y,`Υ`,`\\Upsilon`,!0),V(H,W,Y,`Φ`,`\\Phi`,!0),V(H,W,Y,`Ψ`,`\\Psi`,!0),V(H,W,Y,`Ω`,`\\Omega`,!0),V(H,W,Y,`A`,`Α`),V(H,W,Y,`B`,`Β`),V(H,W,Y,`E`,`Ε`),V(H,W,Y,`Z`,`Ζ`),V(H,W,Y,`H`,`Η`),V(H,W,Y,`I`,`Ι`),V(H,W,Y,`K`,`Κ`),V(H,W,Y,`M`,`Μ`),V(H,W,Y,`N`,`Ν`),V(H,W,Y,`O`,`Ο`),V(H,W,Y,`P`,`Ρ`),V(H,W,Y,`T`,`Τ`),V(H,W,Y,`X`,`Χ`),V(H,W,Y,`¬`,`\\neg`,!0),V(H,W,Y,`¬`,`\\lnot`),V(H,W,Y,`⊤`,`\\top`),V(H,W,Y,`⊥`,`\\bot`),V(H,W,Y,`∅`,`\\emptyset`),V(H,G,Y,`∅`,`\\varnothing`),V(H,W,q,`α`,`\\alpha`,!0),V(H,W,q,`β`,`\\beta`,!0),V(H,W,q,`γ`,`\\gamma`,!0),V(H,W,q,`δ`,`\\delta`,!0),V(H,W,q,`ϵ`,`\\epsilon`,!0),V(H,W,q,`ζ`,`\\zeta`,!0),V(H,W,q,`η`,`\\eta`,!0),V(H,W,q,`θ`,`\\theta`,!0),V(H,W,q,`ι`,`\\iota`,!0),V(H,W,q,`κ`,`\\kappa`,!0),V(H,W,q,`λ`,`\\lambda`,!0),V(H,W,q,`μ`,`\\mu`,!0),V(H,W,q,`ν`,`\\nu`,!0),V(H,W,q,`ξ`,`\\xi`,!0),V(H,W,q,`ο`,`\\omicron`,!0),V(H,W,q,`π`,`\\pi`,!0),V(H,W,q,`ρ`,`\\rho`,!0),V(H,W,q,`σ`,`\\sigma`,!0),V(H,W,q,`τ`,`\\tau`,!0),V(H,W,q,`υ`,`\\upsilon`,!0),V(H,W,q,`ϕ`,`\\phi`,!0),V(H,W,q,`χ`,`\\chi`,!0),V(H,W,q,`ψ`,`\\psi`,!0),V(H,W,q,`ω`,`\\omega`,!0),V(H,W,q,`ε`,`\\varepsilon`,!0),V(H,W,q,`ϑ`,`\\vartheta`,!0),V(H,W,q,`ϖ`,`\\varpi`,!0),V(H,W,q,`ϱ`,`\\varrho`,!0),V(H,W,q,`ς`,`\\varsigma`,!0),V(H,W,q,`φ`,`\\varphi`,!0),V(H,W,K,`∗`,`*`,!0),V(H,W,K,`+`,`+`),V(H,W,K,`−`,`-`,!0),V(H,W,K,`⋅`,`\\cdot`,!0),V(H,W,K,`∘`,`\\circ`,!0),V(H,W,K,`÷`,`\\div`,!0),V(H,W,K,`±`,`\\pm`,!0),V(H,W,K,`×`,`\\times`,!0),V(H,W,K,`∩`,`\\cap`,!0),V(H,W,K,`∪`,`\\cup`,!0),V(H,W,K,`∖`,`\\setminus`,!0),V(H,W,K,`∧`,`\\land`),V(H,W,K,`∨`,`\\lor`),V(H,W,K,`∧`,`\\wedge`,!0),V(H,W,K,`∨`,`\\vee`,!0),V(H,W,Y,`√`,`\\surd`),V(H,W,C_,`⟨`,`\\langle`,!0),V(H,W,C_,`∣`,`\\lvert`),V(H,W,C_,`∥`,`\\lVert`),V(H,W,b_,`?`,`?`),V(H,W,b_,`!`,`!`),V(H,W,b_,`⟩`,`\\rangle`,!0),V(H,W,b_,`∣`,`\\rvert`),V(H,W,b_,`∥`,`\\rVert`),V(H,W,J,`=`,`=`),V(H,W,J,`:`,`:`),V(H,W,J,`≈`,`\\approx`,!0),V(H,W,J,`≅`,`\\cong`,!0),V(H,W,J,`≥`,`\\ge`),V(H,W,J,`≥`,`\\geq`,!0),V(H,W,J,`←`,`\\gets`),V(H,W,J,`>`,`\\gt`,!0),V(H,W,J,`∈`,`\\in`,!0),V(H,W,J,``,`\\@not`),V(H,W,J,`⊂`,`\\subset`,!0),V(H,W,J,`⊃`,`\\supset`,!0),V(H,W,J,`⊆`,`\\subseteq`,!0),V(H,W,J,`⊇`,`\\supseteq`,!0),V(H,G,J,`⊈`,`\\nsubseteq`,!0),V(H,G,J,`⊉`,`\\nsupseteq`,!0),V(H,W,J,`⊨`,`\\models`),V(H,W,J,`←`,`\\leftarrow`,!0),V(H,W,J,`≤`,`\\le`),V(H,W,J,`≤`,`\\leq`,!0),V(H,W,J,`<`,`\\lt`,!0),V(H,W,J,`→`,`\\rightarrow`,!0),V(H,W,J,`→`,`\\to`),V(H,G,J,`≱`,`\\ngeq`,!0),V(H,G,J,`≰`,`\\nleq`,!0),V(H,W,T_,`\xA0`,`\\ `),V(H,W,T_,`\xA0`,`\\space`),V(H,W,T_,`\xA0`,`\\nobreakspace`),V(U,W,T_,`\xA0`,`\\ `),V(U,W,T_,`\xA0`,` `),V(U,W,T_,`\xA0`,`\\space`),V(U,W,T_,`\xA0`,`\\nobreakspace`),V(H,W,T_,``,`\\nobreak`),V(H,W,T_,``,`\\allowbreak`),V(H,W,w_,`,`,`,`),V(H,W,w_,`;`,`;`),V(H,G,K,`⊼`,`\\barwedge`,!0),V(H,G,K,`⊻`,`\\veebar`,!0),V(H,W,K,`⊙`,`\\odot`,!0),V(H,W,K,`⊕`,`\\oplus`,!0),V(H,W,K,`⊗`,`\\otimes`,!0),V(H,W,Y,`∂`,`\\partial`,!0),V(H,W,K,`⊘`,`\\oslash`,!0),V(H,G,K,`⊚`,`\\circledcirc`,!0),V(H,G,K,`⊡`,`\\boxdot`,!0),V(H,W,K,`△`,`\\bigtriangleup`),V(H,W,K,`▽`,`\\bigtriangledown`),V(H,W,K,`†`,`\\dagger`),V(H,W,K,`⋄`,`\\diamond`),V(H,W,K,`⋆`,`\\star`),V(H,W,K,`◃`,`\\triangleleft`),V(H,W,K,`▹`,`\\triangleright`),V(H,W,C_,`{`,`\\{`),V(U,W,Y,`{`,`\\{`),V(U,W,Y,`{`,`\\textbraceleft`),V(H,W,b_,`}`,`\\}`),V(U,W,Y,`}`,`\\}`),V(U,W,Y,`}`,`\\textbraceright`),V(H,W,C_,`{`,`\\lbrace`),V(H,W,b_,`}`,`\\rbrace`),V(H,W,C_,`[`,`\\lbrack`,!0),V(U,W,Y,`[`,`\\lbrack`,!0),V(H,W,b_,`]`,`\\rbrack`,!0),V(U,W,Y,`]`,`\\rbrack`,!0),V(H,W,C_,`(`,`\\lparen`,!0),V(H,W,b_,`)`,`\\rparen`,!0),V(U,W,Y,`<`,`\\textless`,!0),V(U,W,Y,`>`,`\\textgreater`,!0),V(H,W,C_,`⌊`,`\\lfloor`,!0),V(H,W,b_,`⌋`,`\\rfloor`,!0),V(H,W,C_,`⌈`,`\\lceil`,!0),V(H,W,b_,`⌉`,`\\rceil`,!0),V(H,W,Y,`\\`,`\\backslash`),V(H,W,Y,`∣`,`|`),V(H,W,Y,`∣`,`\\vert`),V(U,W,Y,`|`,`\\textbar`,!0),V(H,W,Y,`∥`,`\\|`),V(H,W,Y,`∥`,`\\Vert`),V(U,W,Y,`∥`,`\\textbardbl`),V(U,W,Y,`~`,`\\textasciitilde`),V(U,W,Y,`\\`,`\\textbackslash`),V(U,W,Y,`^`,`\\textasciicircum`),V(H,W,J,`↑`,`\\uparrow`,!0),V(H,W,J,`⇑`,`\\Uparrow`,!0),V(H,W,J,`↓`,`\\downarrow`,!0),V(H,W,J,`⇓`,`\\Downarrow`,!0),V(H,W,J,`↕`,`\\updownarrow`,!0),V(H,W,J,`⇕`,`\\Updownarrow`,!0),V(H,W,S_,`∐`,`\\coprod`),V(H,W,S_,`⋁`,`\\bigvee`),V(H,W,S_,`⋀`,`\\bigwedge`),V(H,W,S_,`⨄`,`\\biguplus`),V(H,W,S_,`⋂`,`\\bigcap`),V(H,W,S_,`⋃`,`\\bigcup`),V(H,W,S_,`∫`,`\\int`),V(H,W,S_,`∫`,`\\intop`),V(H,W,S_,`∬`,`\\iint`),V(H,W,S_,`∭`,`\\iiint`),V(H,W,S_,`∏`,`\\prod`),V(H,W,S_,`∑`,`\\sum`),V(H,W,S_,`⨂`,`\\bigotimes`),V(H,W,S_,`⨁`,`\\bigoplus`),V(H,W,S_,`⨀`,`\\bigodot`),V(H,W,S_,`∮`,`\\oint`),V(H,W,S_,`∯`,`\\oiint`),V(H,W,S_,`∰`,`\\oiiint`),V(H,W,S_,`⨆`,`\\bigsqcup`),V(H,W,S_,`∫`,`\\smallint`),V(U,W,x_,`…`,`\\textellipsis`),V(H,W,x_,`…`,`\\mathellipsis`),V(U,W,x_,`…`,`\\ldots`,!0),V(H,W,x_,`…`,`\\ldots`,!0),V(H,W,x_,`⋯`,`\\@cdots`,!0),V(H,W,x_,`⋱`,`\\ddots`,!0),V(H,W,Y,`⋮`,`\\varvdots`),V(U,W,Y,`⋮`,`\\varvdots`),V(H,W,y_,`ˊ`,`\\acute`),V(H,W,y_,`ˋ`,`\\grave`),V(H,W,y_,`¨`,`\\ddot`),V(H,W,y_,`~`,`\\tilde`),V(H,W,y_,`ˉ`,`\\bar`),V(H,W,y_,`˘`,`\\breve`),V(H,W,y_,`ˇ`,`\\check`),V(H,W,y_,`^`,`\\hat`),V(H,W,y_,`⃗`,`\\vec`),V(H,W,y_,`˙`,`\\dot`),V(H,W,y_,`˚`,`\\mathring`),V(H,W,q,``,`\\@imath`),V(H,W,q,``,`\\@jmath`),V(H,W,Y,`ı`,`ı`),V(H,W,Y,`ȷ`,`ȷ`),V(U,W,Y,`ı`,`\\i`,!0),V(U,W,Y,`ȷ`,`\\j`,!0),V(U,W,Y,`ß`,`\\ss`,!0),V(U,W,Y,`æ`,`\\ae`,!0),V(U,W,Y,`œ`,`\\oe`,!0),V(U,W,Y,`ø`,`\\o`,!0),V(U,W,Y,`Æ`,`\\AE`,!0),V(U,W,Y,`Œ`,`\\OE`,!0),V(U,W,Y,`Ø`,`\\O`,!0),V(U,W,y_,`ˊ`,`\\'`),V(U,W,y_,`ˋ`,"\\`"),V(U,W,y_,`ˆ`,`\\^`),V(U,W,y_,`˜`,`\\~`),V(U,W,y_,`ˉ`,`\\=`),V(U,W,y_,`˘`,`\\u`),V(U,W,y_,`˙`,`\\.`),V(U,W,y_,`¸`,`\\c`),V(U,W,y_,`˚`,`\\r`),V(U,W,y_,`ˇ`,`\\v`),V(U,W,y_,`¨`,`\\"`),V(U,W,y_,`˝`,`\\H`),V(U,W,y_,`◯`,`\\textcircled`);var E_={"--":!0,"---":!0,"``":!0,"''":!0};V(U,W,Y,`–`,`--`,!0),V(U,W,Y,`–`,`\\textendash`),V(U,W,Y,`—`,`---`,!0),V(U,W,Y,`—`,`\\textemdash`),V(U,W,Y,`‘`,"`",!0),V(U,W,Y,`‘`,`\\textquoteleft`),V(U,W,Y,`’`,`'`,!0),V(U,W,Y,`’`,`\\textquoteright`),V(U,W,Y,`“`,"``",!0),V(U,W,Y,`“`,`\\textquotedblleft`),V(U,W,Y,`”`,`''`,!0),V(U,W,Y,`”`,`\\textquotedblright`),V(H,W,Y,`°`,`\\degree`,!0),V(U,W,Y,`°`,`\\degree`),V(U,W,Y,`°`,`\\textdegree`,!0),V(H,W,Y,`£`,`\\pounds`),V(H,W,Y,`£`,`\\mathsterling`,!0),V(U,W,Y,`£`,`\\pounds`),V(U,W,Y,`£`,`\\textsterling`,!0),V(H,G,Y,`✠`,`\\maltese`),V(U,G,Y,`✠`,`\\maltese`);for(var D_=`0123456789/@."`,O_=0;O_<D_.length;O_++){var k_=D_.charAt(O_);V(H,W,Y,k_,k_)}for(var A_=`0123456789!@*()-=+";:?/.,`,j_=0;j_<A_.length;j_++){var M_=A_.charAt(j_);V(U,W,Y,M_,M_)}for(var N_=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`,P_=0;P_<N_.length;P_++){var F_=N_.charAt(P_);V(H,W,q,F_,F_),V(U,W,Y,F_,F_)}V(H,G,Y,`C`,`ℂ`),V(U,G,Y,`C`,`ℂ`),V(H,G,Y,`H`,`ℍ`),V(U,G,Y,`H`,`ℍ`),V(H,G,Y,`N`,`ℕ`),V(U,G,Y,`N`,`ℕ`),V(H,G,Y,`P`,`ℙ`),V(U,G,Y,`P`,`ℙ`),V(H,G,Y,`Q`,`ℚ`),V(U,G,Y,`Q`,`ℚ`),V(H,G,Y,`R`,`ℝ`),V(U,G,Y,`R`,`ℝ`),V(H,G,Y,`Z`,`ℤ`),V(U,G,Y,`Z`,`ℤ`),V(H,W,q,`h`,`ℎ`),V(U,W,q,`h`,`ℎ`);for(var I_,L_=0;L_<N_.length;L_++){var R_=N_.charAt(L_);I_=String.fromCharCode(55349,56320+L_),V(H,W,q,R_,I_),V(U,W,Y,R_,I_),I_=String.fromCharCode(55349,56372+L_),V(H,W,q,R_,I_),V(U,W,Y,R_,I_),I_=String.fromCharCode(55349,56424+L_),V(H,W,q,R_,I_),V(U,W,Y,R_,I_),I_=String.fromCharCode(55349,56580+L_),V(H,W,q,R_,I_),V(U,W,Y,R_,I_),I_=String.fromCharCode(55349,56684+L_),V(H,W,q,R_,I_),V(U,W,Y,R_,I_),I_=String.fromCharCode(55349,56736+L_),V(H,W,q,R_,I_),V(U,W,Y,R_,I_),I_=String.fromCharCode(55349,56788+L_),V(H,W,q,R_,I_),V(U,W,Y,R_,I_),I_=String.fromCharCode(55349,56840+L_),V(H,W,q,R_,I_),V(U,W,Y,R_,I_),I_=String.fromCharCode(55349,56944+L_),V(H,W,q,R_,I_),V(U,W,Y,R_,I_),L_<26&&(I_=String.fromCharCode(55349,56632+L_),V(H,W,q,R_,I_),V(U,W,Y,R_,I_),I_=String.fromCharCode(55349,56476+L_),V(H,W,q,R_,I_),V(U,W,Y,R_,I_))}I_=String.fromCharCode(55349,56668),V(H,W,q,`k`,I_),V(U,W,Y,`k`,I_);for(var z_=0;z_<10;z_++){var B_=z_.toString();I_=String.fromCharCode(55349,57294+z_),V(H,W,q,B_,I_),V(U,W,Y,B_,I_),I_=String.fromCharCode(55349,57314+z_),V(H,W,q,B_,I_),V(U,W,Y,B_,I_),I_=String.fromCharCode(55349,57324+z_),V(H,W,q,B_,I_),V(U,W,Y,B_,I_),I_=String.fromCharCode(55349,57334+z_),V(H,W,q,B_,I_),V(U,W,Y,B_,I_)}for(var V_=`ÐÞþ`,H_=0;H_<V_.length;H_++){var U_=V_.charAt(H_);V(H,W,q,U_,U_),V(U,W,Y,U_,U_)}var W_={mathClass:`mathbf`,textClass:`textbf`,font:`Main-Bold`},G_={mathClass:`mathnormal`,textClass:`textit`,font:`Math-Italic`},K_={mathClass:`boldsymbol`,textClass:`boldsymbol`,font:`Main-BoldItalic`},q_={mathClass:`mathscr`,textClass:`textscr`,font:`Script-Regular`},J_={mathClass:``,textClass:``,font:``},Y_={mathClass:`mathfrak`,textClass:`textfrak`,font:`Fraktur-Regular`},X_={mathClass:`mathbb`,textClass:`textbb`,font:`AMS-Regular`},Z_={mathClass:`mathboldfrak`,textClass:`textboldfrak`,font:`Fraktur-Regular`},Q_={mathClass:`mathsf`,textClass:`textsf`,font:`SansSerif-Regular`},$_={mathClass:`mathboldsf`,textClass:`textboldsf`,font:`SansSerif-Bold`},ev={mathClass:`mathitsf`,textClass:`textitsf`,font:`SansSerif-Italic`},tv={mathClass:`mathtt`,textClass:`texttt`,font:`Typewriter-Regular`},nv=[W_,W_,G_,G_,K_,K_,q_,J_,J_,J_,Y_,Y_,X_,X_,Z_,Z_,Q_,Q_,$_,$_,ev,ev,J_,J_,tv,tv],rv=[W_,J_,Q_,$_,tv],iv=e=>{var t=e.charCodeAt(0),n=e.charCodeAt(1),r=(t-55296)*1024+(n-56320)+65536;if(119808<=r&&r<120484)return nv[Math.floor((r-119808)/26)];if(120782<=r&&r<=120831)return rv[Math.floor((r-120782)/10)];if(r===120485||r===120486)return nv[0];if(120486<r&&r<120782)return J_;throw new z(`Unsupported character: `+e)},av=function(e,t,n){if(v_[n][e]){var r=v_[n][e].replace;r&&(e=r)}return{value:e,metrics:h_(e,t,n)}},ov=function(e,t,n,r,i){var a=av(e,t,n),o=a.metrics;e=a.value;var s;if(o){var c=o.italic;(n===`text`||r&&r.font===`mathit`)&&(c=0),s=new i_(e,o.height,o.depth,c,o.skew,o.width,i)}else typeof console<`u`&&console.warn(`No character metrics `+(`for '`+e+`' in style '`+t+`' and mode '`+n+`'`)),s=new i_(e,0,0,0,0,0,i);if(r){s.maxFontSize=r.sizeMultiplier,r.style.isTight()&&s.classes.push(`mtight`);var l=r.getColor();l&&(s.style.color=l)}return s},sv=function(e,t,n,r){return r===void 0&&(r=[]),n.font===`boldsymbol`&&av(e,`Main-Bold`,t).metrics?ov(e,`Main-Bold`,t,n,r.concat([`mathbf`])):e===`\\`||v_[t][e].font===`main`?ov(e,`Main-Regular`,t,n,r):ov(e,`AMS-Regular`,t,n,r.concat([`amsrm`]))},cv=function(e,t,n){return n!==`textord`&&av(e,`Math-BoldItalic`,t).metrics?{fontName:`Math-BoldItalic`,fontClass:`boldsymbol`}:{fontName:`Main-Bold`,fontClass:`mathbf`}},lv=function(e,t,n){var r=e.mode,i=e.text,a=[`mord`],{font:o,fontFamily:s,fontWeight:c,fontShape:l}=t,u=r===`math`||r===`text`&&!!o,d=u?o:s,f=``,p=``;if(i.charCodeAt(0)===55349){var m=iv(i);f=m.font,p=m[r+`Class`]}if(f)return ov(i,f,r,t,a.concat(p));if(d){var h,g;if(d===`boldsymbol`){var _=cv(i,r,n);h=_.fontName,g=[_.fontClass]}else u?(h=Sv[o].fontName,g=[o]):(h=xv(s,c,l),g=[s,c,l]);if(av(i,h,r).metrics)return ov(i,h,r,t,a.concat(g));if(E_.hasOwnProperty(i)&&h.slice(0,10)===`Typewriter`){for(var v=[],y=0;y<i.length;y++)v.push(ov(i[y],h,r,t,a.concat(g)));return gv(v)}}if(n===`mathord`)return ov(i,`Math-Italic`,r,t,a.concat([`mathnormal`]));if(n===`textord`){var b=v_[r][i]&&v_[r][i].font;if(b===`ams`)return ov(i,xv(`amsrm`,c,l),r,t,a.concat(`amsrm`,c,l));if(b===`main`||!b)return ov(i,xv(`textrm`,c,l),r,t,a.concat(c,l));var x=xv(b,c,l);return ov(i,x,r,t,a.concat(x,c,l))}else throw Error(`unexpected type: `+n+` in makeOrd`)},uv=(e,t)=>{if(Jg(e.classes)!==Jg(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize||e.italic!==0&&e.hasClass(`mathnormal`))return!1;if(e.classes.length===1){var n=e.classes[0];if(n===`mbin`||n===`mord`)return!1}for(var r of Object.keys(e.style))if(e.style[r]!==t.style[r])return!1;for(var i of Object.keys(t.style))if(e.style[i]!==t.style[i])return!1;return!0},dv=e=>{for(var t=0;t<e.length-1;t++){var n=e[t],r=e[t+1];n instanceof i_&&r instanceof i_&&uv(n,r)&&(n.text+=r.text,n.height=Math.max(n.height,r.height),n.depth=Math.max(n.depth,r.depth),n.italic=r.italic,e.splice(t+1,1),t--)}return e},fv=function(e){for(var t=0,n=0,r=0,i=0;i<e.children.length;i++){var a=e.children[i];a.height>t&&(t=a.height),a.depth>n&&(n=a.depth),a.maxFontSize>r&&(r=a.maxFontSize)}e.height=t,e.depth=n,e.maxFontSize=r},X=function(e,t,n,r){var i=new e_(e,t,n,r);return fv(i),i},pv=(e,t,n,r)=>new e_(e,t,n,r),mv=function(e,t,n){var r=X([e],[],t);return r.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=B(r.height),r.maxFontSize=1,r},hv=function(e,t,n,r){var i=new t_(e,t,n,r);return fv(i),i},gv=function(e){var t=new Ug(e);return fv(t),t},_v=function(e,t){return e instanceof Ug?X([],[e],t):e},vv=function(e){if(e.positionType===`individualShift`){for(var t=e.children,n=[t[0]],r=-t[0].shift-t[0].elem.depth,i=r,a=1;a<t.length;a++){var o=-t[a].shift-i-t[a].elem.depth,s=o-(t[a-1].elem.height+t[a-1].elem.depth);i+=o,n.push({type:`kern`,size:s}),n.push(t[a])}return{children:n,depth:r}}var c;if(e.positionType===`top`){for(var l=e.positionData,u=0;u<e.children.length;u++){var d=e.children[u];l-=d.type===`kern`?d.size:d.elem.height+d.elem.depth}c=l}else if(e.positionType===`bottom`)c=-e.positionData;else{var f=e.children[0];if(f.type!==`elem`)throw Error(`First child must have type "elem".`);if(e.positionType===`shift`)c=-f.elem.depth-e.positionData;else if(e.positionType===`firstBaseline`)c=-f.elem.depth;else throw Error(`Invalid positionType `+e.positionType+`.`)}return{children:e.children,depth:c}},yv=function(e,t){for(var{children:n,depth:r}=vv(e),i=0,a=0;a<n.length;a++){var o=n[a];if(o.type===`elem`){var s=o.elem;i=Math.max(i,s.maxFontSize,s.height)}}i+=2;var c=X([`pstrut`],[]);c.style.height=B(i);for(var l=[],u=r,d=r,f=r,p=0;p<n.length;p++){var m=n[p];if(m.type===`kern`)f+=m.size;else{var h=m.elem,g=m.wrapperClasses||[],_=m.wrapperStyle||{},v=X(g,[c,h],void 0,_);v.style.top=B(-i-f-h.depth),m.marginLeft&&(v.style.marginLeft=m.marginLeft),m.marginRight&&(v.style.marginRight=m.marginRight),l.push(v),f+=h.height+h.depth}u=Math.min(u,f),d=Math.max(d,f)}var y=X([`vlist`],l);y.style.height=B(d);var b;if(u<0){var x=X([`vlist`],[X([],[])]);x.style.height=B(-u),b=[X([`vlist-r`],[y,X([`vlist-s`],[new i_(`​`)])]),X([`vlist-r`],[x])]}else b=[X([`vlist-r`],[y])];var S=X([`vlist-t`],b);return b.length===2&&S.classes.push(`vlist-t2`),S.height=d,S.depth=-u,S},bv=(e,t)=>{var n=X([`mspace`],[],t),r=qg(e,t);return n.style.marginRight=B(r),n},xv=(e,t,n)=>{var r,i;switch(e){case`amsrm`:r=`AMS`;break;case`textrm`:r=`Main`;break;case`textsf`:r=`SansSerif`;break;case`texttt`:r=`Typewriter`;break;default:r=e}return i=t===`textbf`&&n===`textit`?`BoldItalic`:t===`textbf`?`Bold`:n===`textit`?`Italic`:`Regular`,r+`-`+i},Sv={mathbf:{variant:`bold`,fontName:`Main-Bold`},mathrm:{variant:`normal`,fontName:`Main-Regular`},textit:{variant:`italic`,fontName:`Main-Italic`},mathit:{variant:`italic`,fontName:`Main-Italic`},mathnormal:{variant:`italic`,fontName:`Math-Italic`},mathsfit:{variant:`sans-serif-italic`,fontName:`SansSerif-Italic`},mathbb:{variant:`double-struck`,fontName:`AMS-Regular`},mathcal:{variant:`script`,fontName:`Caligraphic-Regular`},mathfrak:{variant:`fraktur`,fontName:`Fraktur-Regular`},mathscr:{variant:`script`,fontName:`Script-Regular`},mathsf:{variant:`sans-serif`,fontName:`SansSerif-Regular`},mathtt:{variant:`monospace`,fontName:`Typewriter-Regular`}},Cv={vec:[`vec`,.471,.714],oiintSize1:[`oiintSize1`,.957,.499],oiintSize2:[`oiintSize2`,1.472,.659],oiiintSize1:[`oiiintSize1`,1.304,.499],oiiintSize2:[`oiiintSize2`,1.98,.659]},wv=function(e,t){var[n,r,i]=Cv[e],a=pv([`overlay`],[new a_([new o_(n)],{width:B(r),height:B(i),style:`width:`+B(r),viewBox:`0 0 `+1e3*r+` `+1e3*i,preserveAspectRatio:`xMinYMin`})],t);return a.height=i,a.style.height=B(i),a.style.width=B(r),a},Tv={number:3,unit:`mu`},Ev={number:4,unit:`mu`},Dv={number:5,unit:`mu`},Ov={mord:{mop:Tv,mbin:Ev,mrel:Dv,minner:Tv},mop:{mord:Tv,mop:Tv,mrel:Dv,minner:Tv},mbin:{mord:Ev,mop:Ev,mopen:Ev,minner:Ev},mrel:{mord:Dv,mop:Dv,mopen:Dv,minner:Dv},mopen:{},mclose:{mop:Tv,mbin:Ev,mrel:Dv,minner:Tv},mpunct:{mord:Tv,mop:Tv,mrel:Dv,mopen:Tv,mclose:Tv,mpunct:Tv,minner:Tv},minner:{mord:Tv,mop:Tv,mbin:Ev,mrel:Dv,mopen:Tv,mpunct:Tv,minner:Tv}},kv={mord:{mop:Tv},mop:{mord:Tv,mop:Tv},mbin:{},mrel:{},mopen:{},mclose:{mop:Tv},mpunct:{},minner:{mop:Tv}},Av={},jv={},Mv={};function Z(e){for(var{type:t,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:o}=e,s={type:t,numArgs:r.numArgs,argTypes:r.argTypes,allowedInArgument:!!r.allowedInArgument,allowedInText:!!r.allowedInText,allowedInMath:r.allowedInMath===void 0?!0:r.allowedInMath,numOptionalArgs:r.numOptionalArgs||0,infix:!!r.infix,primitive:!!r.primitive,handler:i},c=0;c<n.length;++c)Av[n[c]]=s;t&&(a&&(jv[t]=a),o&&(Mv[t]=o))}function Nv(e){var{type:t,htmlBuilder:n,mathmlBuilder:r}=e;Z({type:t,names:[],props:{numArgs:0},handler(){throw Error(`Should never be called.`)},htmlBuilder:n,mathmlBuilder:r})}var Pv=function(e){return e.type===`ordgroup`&&e.body.length===1?e.body[0]:e},Fv=function(e){return e.type===`ordgroup`?e.body:[e]},Iv=new Set([`leftmost`,`mbin`,`mopen`,`mrel`,`mop`,`mpunct`]),Lv=new Set([`rightmost`,`mrel`,`mclose`,`mpunct`]),Rv={display:wg.DISPLAY,text:wg.TEXT,script:wg.SCRIPT,scriptscript:wg.SCRIPTSCRIPT},zv={mord:`mord`,mop:`mop`,mbin:`mbin`,mrel:`mrel`,mopen:`mopen`,mclose:`mclose`,mpunct:`mpunct`,minner:`minner`},Bv=function(e,t,n,r){r===void 0&&(r=[null,null]);for(var i=[],a=0;a<e.length;a++){var o=Kv(e[a],t);if(o instanceof Ug){var s=o.children;i.push(...s)}else i.push(o)}if(dv(i),!n)return i;var c=t;if(e.length===1){var l=e[0];l.type===`sizing`?c=t.havingSize(l.size):l.type===`styling`&&(c=t.havingStyle(Rv[l.style]))}var u=X([r[0]||`leftmost`],[],t),d=X([r[1]||`rightmost`],[],t),f=n===`root`;return Vv(i,(e,t)=>{var n=t.classes[0],r=e.classes[0];n===`mbin`&&Lv.has(r)?t.classes[0]=`mord`:r===`mbin`&&Iv.has(n)&&(e.classes[0]=`mord`)},{node:u},d,f),Vv(i,(e,t)=>{var n=Wv(t),r=Wv(e),i=n&&r?e.hasClass(`mtight`)?kv[n]?.[r]:Ov[n]?.[r]:null;if(i)return bv(i,c)},{node:u},d,f),i},Vv=function(e,t,n,r,i){r&&e.push(r);for(var a=0;a<e.length;a++){var o=e[a],s=Hv(o);if(s){Vv(s.children,t,n,null,i);continue}var c=!o.hasClass(`mspace`);if(c){var l=t(o,n.node);l&&(n.insertAfter?n.insertAfter(l):(e.unshift(l),a++))}c?n.node=o:i&&o.hasClass(`newline`)&&(n.node=X([`leftmost`])),n.insertAfter=(t=>n=>{e.splice(t+1,0,n),a++})(a)}r&&e.pop()},Hv=function(e){return e instanceof Ug||e instanceof t_||e instanceof e_&&e.hasClass(`enclosing`)?e:null},Uv=function(e,t){var n=Hv(e);if(n){var r=n.children;if(r.length){if(t===`right`)return Uv(r[r.length-1],`right`);if(t===`left`)return Uv(r[0],`left`)}}return e},Wv=function(e,t){return e?(t&&(e=Uv(e,t)),zv[e.classes[0]]||null):null},Gv=function(e,t){var n=[`nulldelimiter`].concat(e.baseSizingClasses());return X(t.concat(n))},Kv=function(e,t,n){if(!e)return X();if(jv[e.type]){var r=jv[e.type](e,t);if(n&&t.size!==n.size){r=X(t.sizingClasses(n),[r],t);var i=t.sizeMultiplier/n.sizeMultiplier;r.height*=i,r.depth*=i}return r}else throw new z(`Got group of unknown type: '`+e.type+`'`)};function qv(e,t){var n=X([`base`],e,t),r=X([`strut`]);return r.style.height=B(n.height+n.depth),n.depth&&(r.style.verticalAlign=B(-n.depth)),n.children.unshift(r),n}function Jv(e,t){var n=null;e.length===1&&e[0].type===`tag`&&(n=e[0].tag,e=e[0].body);var r=Bv(e,t,`root`),i;r.length===2&&r[1].hasClass(`tag`)&&(i=r.pop());for(var a=[],o=[],s=0;s<r.length;s++)if(o.push(r[s]),r[s].hasClass(`mbin`)||r[s].hasClass(`mrel`)||r[s].hasClass(`allowbreak`)){for(var c=!1;s<r.length-1&&r[s+1].hasClass(`mspace`)&&!r[s+1].hasClass(`newline`);)s++,o.push(r[s]),r[s].hasClass(`nobreak`)&&(c=!0);c||(a.push(qv(o,t)),o=[])}else r[s].hasClass(`newline`)&&(o.pop(),o.length>0&&(a.push(qv(o,t)),o=[]),a.push(r[s]));o.length>0&&a.push(qv(o,t));var l;n?(l=qv(Bv(n,t,!0),t),l.classes=[`tag`],a.push(l)):i&&a.push(i);var u=X([`katex-html`],a);if(u.setAttribute(`aria-hidden`,`true`),l){var d=l.children[0];d.style.height=B(u.height+u.depth),u.depth&&(d.style.verticalAlign=B(-u.depth))}return u}function Yv(e){return new Ug(e)}var Q=class{constructor(e,t,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS(`http://www.w3.org/1998/Math/MathML`,this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=Jg(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof Xv&&this.children[n+1]instanceof Xv){for(var r=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof Xv;)r+=this.children[++n].toText();e.appendChild(new Xv(r).toNode())}else e.appendChild(this.children[n].toNode());return e}toMarkup(){var e=`<`+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=` `+t+`="`,e+=Qh(this.attributes[t]),e+=`"`);this.classes.length>0&&(e+=` class ="`+Qh(Jg(this.classes))+`"`),e+=`>`;for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+=`</`+this.type+`>`,e}toText(){return this.children.map(e=>e.toText()).join(``)}},Xv=class{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return Qh(this.toText())}toText(){return this.text}},Zv=class{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=` `:e>=.1666&&e<=.1667?this.character=` `:e>=.2222&&e<=.2223?this.character=` `:e>=.2777&&e<=.2778?this.character=`  `:e>=-.05556&&e<=-.05555?this.character=` ⁣`:e>=-.1667&&e<=-.1666?this.character=` ⁣`:e>=-.2223&&e<=-.2222?this.character=` ⁣`:e>=-.2778&&e<=-.2777?this.character=` ⁣`:this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS(`http://www.w3.org/1998/Math/MathML`,`mspace`);return e.setAttribute(`width`,B(this.width)),e}toMarkup(){return this.character?`<mtext>`+this.character+`</mtext>`:`<mspace width="`+B(this.width)+`"/>`}toText(){return this.character?this.character:` `}},Qv=new Set([`\\imath`,`\\jmath`]),$v=new Set([`mrow`,`mtable`]),ey=function(e,t,n){return v_[t][e]&&v_[t][e].replace&&e.charCodeAt(0)!==55349&&!(E_.hasOwnProperty(e)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)===`tt`||n.font&&n.font.slice(4,6)===`tt`))&&(e=v_[t][e].replace),new Xv(e)},ty=function(e){return e.length===1?e[0]:new Q(`mrow`,e)},ny={mathit:`italic`,boldsymbol:e=>e.type===`textord`?`bold`:`bold-italic`,mathbf:`bold`,mathbb:`double-struck`,mathsfit:`sans-serif-italic`,mathfrak:`fraktur`,mathscr:`script`,mathcal:`script`,mathsf:`sans-serif`,mathtt:`monospace`},ry=(e,t)=>{if(e.mode===`text`){if(t.fontFamily===`texttt`)return`monospace`;if(t.fontFamily===`textsf`)return t.fontShape===`textit`&&t.fontWeight===`textbf`?`sans-serif-bold-italic`:t.fontShape===`textit`?`sans-serif-italic`:t.fontWeight===`textbf`?`bold-sans-serif`:`sans-serif`;if(t.fontShape===`textit`&&t.fontWeight===`textbf`)return`bold-italic`;if(t.fontShape===`textit`)return`italic`;if(t.fontWeight===`textbf`)return`bold`}var n=t.font;if(!n||n===`mathnormal`)return null;var r=e.mode,i=ny[n];if(i)return typeof i==`function`?i(e):i;var a=e.text;if(Qv.has(a))return null;if(v_[r][a]){var o=v_[r][a].replace;o&&(a=o)}var s=Sv[n].fontName;return h_(a,s,r)?Sv[n].variant:null};function iy(e){if(!e)return!1;if(e.type===`mi`&&e.children.length===1){var t=e.children[0];return t instanceof Xv&&t.text===`.`}else if(e.type===`mo`&&e.children.length===1&&e.getAttribute(`separator`)===`true`&&e.getAttribute(`lspace`)===`0em`&&e.getAttribute(`rspace`)===`0em`){var n=e.children[0];return n instanceof Xv&&n.text===`,`}else return!1}var ay=function(e,t,n){if(e.length===1){var r=sy(e[0],t);return n&&r instanceof Q&&r.type===`mo`&&(r.setAttribute(`lspace`,`0em`),r.setAttribute(`rspace`,`0em`)),[r]}for(var i=[],a,o=0;o<e.length;o++){var s=sy(e[o],t);if(s instanceof Q&&a instanceof Q){if(s.type===`mtext`&&a.type===`mtext`&&s.getAttribute(`mathvariant`)===a.getAttribute(`mathvariant`)){a.children.push(...s.children);continue}else if(s.type===`mn`&&a.type===`mn`){a.children.push(...s.children);continue}else if(iy(s)&&a.type===`mn`){a.children.push(...s.children);continue}else if(s.type===`mn`&&iy(a))s.children=[...a.children,...s.children],i.pop();else if((s.type===`msup`||s.type===`msub`)&&s.children.length>=1&&(a.type===`mn`||iy(a))){var c=s.children[0];c instanceof Q&&c.type===`mn`&&(c.children=[...a.children,...c.children],i.pop())}else if(a.type===`mi`&&a.children.length===1){var l=a.children[0];if(l instanceof Xv&&l.text===`̸`&&(s.type===`mo`||s.type===`mi`||s.type===`mn`)){var u=s.children[0];u instanceof Xv&&u.text.length>0&&(u.text=u.text.slice(0,1)+`̸`+u.text.slice(1),i.pop())}}}i.push(s),a=s}return i},oy=function(e,t,n){return ty(ay(e,t,n))},sy=function(e,t){if(!e)return new Q(`mrow`);if(Mv[e.type])return Mv[e.type](e,t);throw new z(`Got group of unknown type: '`+e.type+`'`)};function cy(e,t,n,r,i){var a=ay(e,n),o=a.length===1&&a[0]instanceof Q&&$v.has(a[0].type)?a[0]:new Q(`mrow`,a),s=new Q(`annotation`,[new Xv(t)]);s.setAttribute(`encoding`,`application/x-tex`);var c=new Q(`math`,[new Q(`semantics`,[o,s])]);return c.setAttribute(`xmlns`,`http://www.w3.org/1998/Math/MathML`),r&&c.setAttribute(`display`,`block`),X([i?`katex`:`katex-mathml`],[c])}var ly=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],uy=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],dy=function(e,t){return t.size<2?e:ly[e-1][t.size-1]},fy=class e{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||e.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||``,this.fontFamily=t.fontFamily||``,this.fontWeight=t.fontWeight||``,this.fontShape=t.fontShape||``,this.sizeMultiplier=uy[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var n={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(n,t),new e(n)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:dy(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:uy[e-1]})}havingBaseStyle(t){t||=this.style.text();var n=dy(e.BASESIZE,t);return this.size===n&&this.textSize===e.BASESIZE&&this.style===t?this:this.extend({style:t,size:n})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:``})}withTextFontWeight(e){return this.extend({fontWeight:e,font:``})}withTextFontShape(e){return this.extend({fontShape:e,font:``})}sizingClasses(e){return e.size===this.size?[]:[`sizing`,`reset-size`+e.size,`size`+this.size]}baseSizingClasses(){return this.size===e.BASESIZE?[]:[`sizing`,`reset-size`+this.size,`size`+e.BASESIZE]}fontMetrics(){return this._fontMetrics||=__(this.size),this._fontMetrics}getColor(){return this.phantom?`transparent`:this.color}};fy.BASESIZE=6;var py=function(e){return new fy({style:e.displayMode?wg.DISPLAY:wg.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},my=function(e,t){if(t.displayMode){var n=[`katex-display`];t.leqno&&n.push(`leqno`),t.fleqn&&n.push(`fleqn`),e=X(n,[e])}return e},hy=function(e,t,n){var r=py(n),i;return n.output===`mathml`?cy(e,t,r,n.displayMode,!0):(i=n.output===`html`?X([`katex`],[Jv(e,r)]):X([`katex`],[cy(e,t,r,n.displayMode,!1),Jv(e,r)]),my(i,n))},gy=function(e,t,n){return my(X([`katex`],[Jv(e,py(n))]),n)},_y={widehat:`^`,widecheck:`ˇ`,widetilde:`~`,utilde:`~`,overleftarrow:`←`,underleftarrow:`←`,xleftarrow:`←`,overrightarrow:`→`,underrightarrow:`→`,xrightarrow:`→`,underbrace:`⏟`,overbrace:`⏞`,underbracket:`⎵`,overbracket:`⎴`,overgroup:`⏠`,undergroup:`⏡`,overleftrightarrow:`↔`,underleftrightarrow:`↔`,xleftrightarrow:`↔`,Overrightarrow:`⇒`,xRightarrow:`⇒`,overleftharpoon:`↼`,xleftharpoonup:`↼`,overrightharpoon:`⇀`,xrightharpoonup:`⇀`,xLeftarrow:`⇐`,xLeftrightarrow:`⇔`,xhookleftarrow:`↩`,xhookrightarrow:`↪`,xmapsto:`↦`,xrightharpoondown:`⇁`,xleftharpoondown:`↽`,xrightleftharpoons:`⇌`,xleftrightharpoons:`⇋`,xtwoheadleftarrow:`↞`,xtwoheadrightarrow:`↠`,xlongequal:`=`,xtofrom:`⇄`,xrightleftarrows:`⇄`,xrightequilibrium:`⇌`,xleftequilibrium:`⇋`,"\\cdrightarrow":`→`,"\\cdleftarrow":`←`,"\\cdlongequal":`=`},vy=function(e){var t=new Q(`mo`,[new Xv(_y[e.replace(/^\\/,``)])]);return t.setAttribute(`stretchy`,`true`),t},yy={overrightarrow:[[`rightarrow`],.888,522,`xMaxYMin`],overleftarrow:[[`leftarrow`],.888,522,`xMinYMin`],underrightarrow:[[`rightarrow`],.888,522,`xMaxYMin`],underleftarrow:[[`leftarrow`],.888,522,`xMinYMin`],xrightarrow:[[`rightarrow`],1.469,522,`xMaxYMin`],"\\cdrightarrow":[[`rightarrow`],3,522,`xMaxYMin`],xleftarrow:[[`leftarrow`],1.469,522,`xMinYMin`],"\\cdleftarrow":[[`leftarrow`],3,522,`xMinYMin`],Overrightarrow:[[`doublerightarrow`],.888,560,`xMaxYMin`],xRightarrow:[[`doublerightarrow`],1.526,560,`xMaxYMin`],xLeftarrow:[[`doubleleftarrow`],1.526,560,`xMinYMin`],overleftharpoon:[[`leftharpoon`],.888,522,`xMinYMin`],xleftharpoonup:[[`leftharpoon`],.888,522,`xMinYMin`],xleftharpoondown:[[`leftharpoondown`],.888,522,`xMinYMin`],overrightharpoon:[[`rightharpoon`],.888,522,`xMaxYMin`],xrightharpoonup:[[`rightharpoon`],.888,522,`xMaxYMin`],xrightharpoondown:[[`rightharpoondown`],.888,522,`xMaxYMin`],xlongequal:[[`longequal`],.888,334,`xMinYMin`],"\\cdlongequal":[[`longequal`],3,334,`xMinYMin`],xtwoheadleftarrow:[[`twoheadleftarrow`],.888,334,`xMinYMin`],xtwoheadrightarrow:[[`twoheadrightarrow`],.888,334,`xMaxYMin`],overleftrightarrow:[[`leftarrow`,`rightarrow`],.888,522],overbrace:[[`leftbrace`,`midbrace`,`rightbrace`],1.6,548],underbrace:[[`leftbraceunder`,`midbraceunder`,`rightbraceunder`],1.6,548],underleftrightarrow:[[`leftarrow`,`rightarrow`],.888,522],xleftrightarrow:[[`leftarrow`,`rightarrow`],1.75,522],xLeftrightarrow:[[`doubleleftarrow`,`doublerightarrow`],1.75,560],xrightleftharpoons:[[`leftharpoondownplus`,`rightharpoonplus`],1.75,716],xleftrightharpoons:[[`leftharpoonplus`,`rightharpoondownplus`],1.75,716],xhookleftarrow:[[`leftarrow`,`righthook`],1.08,522],xhookrightarrow:[[`lefthook`,`rightarrow`],1.08,522],overlinesegment:[[`leftlinesegment`,`rightlinesegment`],.888,522],underlinesegment:[[`leftlinesegment`,`rightlinesegment`],.888,522],overbracket:[[`leftbracketover`,`rightbracketover`],1.6,440],underbracket:[[`leftbracketunder`,`rightbracketunder`],1.6,410],overgroup:[[`leftgroup`,`rightgroup`],.888,342],undergroup:[[`leftgroupunder`,`rightgroupunder`],.888,342],xmapsto:[[`leftmapsto`,`rightarrow`],1.5,522],xtofrom:[[`leftToFrom`,`rightToFrom`],1.75,528],xrightleftarrows:[[`baraboveleftarrow`,`rightarrowabovebar`],1.75,901],xrightequilibrium:[[`baraboveshortleftharpoon`,`rightharpoonaboveshortbar`],1.75,716],xleftequilibrium:[[`shortbaraboveleftharpoon`,`shortrightharpoonabovebar`],1.75,716]},by=new Set([`widehat`,`widecheck`,`widetilde`,`utilde`]),xy=function(e,t){function n(){var n=4e5,r=e.label.slice(1);if(by.has(r)&&`base`in e){var i=e.base.type===`ordgroup`?e.base.body.length:1,a,o,s;if(i>5)r===`widehat`||r===`widecheck`?(a=420,n=2364,s=.42,o=r+`4`):(a=312,n=2340,s=.34,o=`tilde4`);else{var c=[1,1,2,2,3,3][i];r===`widehat`||r===`widecheck`?(n=[0,1062,2364,2364,2364][c],a=[0,239,300,360,420][c],s=[0,.24,.3,.3,.36,.42][c],o=r+c):(n=[0,600,1033,2339,2340][c],a=[0,260,286,306,312][c],s=[0,.26,.286,.3,.306,.34][c],o=`tilde`+c)}return{span:pv([],[new a_([new o_(o)],{width:`100%`,height:B(s),viewBox:`0 0 `+n+` `+a,preserveAspectRatio:`none`})],t),minWidth:0,height:s}}else{var l=[],u=yy[r];if(!u)throw Error(`No SVG data for "`+r+`".`);var[d,f,p]=u,m=p/1e3,h=d.length,g,_;if(h===1){if(u.length!==4)throw Error(`Expected 4-tuple for single-path SVG data "`+r+`".`);g=[`hide-tail`],_=[u[3]]}else if(h===2)g=[`halfarrow-left`,`halfarrow-right`],_=[`xMinYMin`,`xMaxYMin`];else if(h===3)g=[`brace-left`,`brace-center`,`brace-right`],_=[`xMinYMin`,`xMidYMin`,`xMaxYMin`];else throw Error(`Correct katexImagesData or update code here to support
                    `+h+` children.`);for(var v=0;v<h;v++){var y=new a_([new o_(d[v])],{width:`400em`,height:B(m),viewBox:`0 0 `+n+` `+p,preserveAspectRatio:_[v]+` slice`}),b=pv([g[v]],[y],t);if(h===1)return{span:b,minWidth:f,height:m};b.style.height=B(m),l.push(b)}return{span:X([`stretchy`],l,t),minWidth:f,height:m}}}var{span:r,minWidth:i,height:a}=n();return r.height=a,r.style.height=B(a),i>0&&(r.style.minWidth=B(i)),r},Sy=function(e,t,n,r,i){var a,o=e.height+e.depth+n+r;if(/fbox|color|angl/.test(t)){if(a=X([`stretchy`,t],[],i),t===`fbox`){var s=i.color&&i.getColor();s&&(a.style.borderColor=s)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new s_({x1:`0`,y1:`0`,x2:`100%`,y2:`100%`,"stroke-width":`0.046em`})),/^x?cancel$/.test(t)&&c.push(new s_({x1:`0`,y1:`100%`,x2:`100%`,y2:`0`,"stroke-width":`0.046em`})),a=pv([],[new a_(c,{width:`100%`,height:B(o)})],i)}return a.height=o,a.style.height=B(o),a},Cy={bin:1,close:1,inner:1,open:1,punct:1,rel:1},wy={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1};function Ty(e){return e in Cy}function Ey(e,t){if(!e||e.type!==t)throw Error(`Expected node of type `+t+`, but got `+(e?`node of type `+e.type:String(e)));return e}function Dy(e){var t=Oy(e);if(!t)throw Error(`Expected node of symbol group type, but got `+(e?`node of type `+e.type:String(e)));return t}function Oy(e){return e&&(e.type===`atom`||wy.hasOwnProperty(e.type))?e:null}var ky=e=>{if(e instanceof i_)return e;if(u_(e)&&e.children.length===1)return ky(e.children[0])},Ay=(e,t)=>{var n,r,i;e&&e.type===`supsub`?(r=Ey(e.base,`accent`),n=r.base,e.base=n,i=l_(Kv(e,t)),e.base=r):(r=Ey(e,`accent`),n=r.base);var a=Kv(n,t.havingCrampedStyle()),o=r.isShifty&&tg(n),s=0;o&&(s=ky(a)?.skew??0);var c=r.label===`\\c`,l=c?a.height+a.depth:Math.min(a.height,t.fontMetrics().xHeight),u;if(r.isStretchy)u=xy(r,t),u=yv({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`elem`,elem:u,wrapperClasses:[`svg-align`],wrapperStyle:s>0?{width:`calc(100% - `+B(2*s)+`)`,marginLeft:B(2*s)}:void 0}]});else{var d,f;r.label===`\\vec`?(d=wv(`vec`,t),f=Cv.vec[1]):(d=lv({type:`textord`,mode:r.mode,text:r.label},t,`textord`),d=c_(d),d.italic=0,f=d.width,c&&(l+=d.depth)),u=X([`accent-body`],[d]);var p=r.label===`\\textcircled`;p&&(u.classes.push(`accent-full`),l=a.height);var m=s;p||(m-=f/2),u.style.left=B(m),r.label===`\\textcircled`&&(u.style.top=`.2em`),u=yv({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`kern`,size:-l},{type:`elem`,elem:u}]})}var h=X([`mord`,`accent`],[u],t);return i?(i.children[0]=h,i.height=Math.max(h.height,i.height),i.classes[0]=`mord`,i):h},jy=(e,t)=>{var n=e.isStretchy?vy(e.label):new Q(`mo`,[ey(e.label,e.mode)]),r=new Q(`mover`,[sy(e.base,t),n]);return r.setAttribute(`accent`,`true`),r},My=new RegExp([`\\acute`,`\\grave`,`\\ddot`,`\\tilde`,`\\bar`,`\\breve`,`\\check`,`\\hat`,`\\vec`,`\\dot`,`\\mathring`].map(e=>`\\`+e).join(`|`));Z({type:`accent`,names:[`\\acute`,`\\grave`,`\\ddot`,`\\tilde`,`\\bar`,`\\breve`,`\\check`,`\\hat`,`\\vec`,`\\dot`,`\\mathring`,`\\widecheck`,`\\widehat`,`\\widetilde`,`\\overrightarrow`,`\\overleftarrow`,`\\Overrightarrow`,`\\overleftrightarrow`,`\\overgroup`,`\\overlinesegment`,`\\overleftharpoon`,`\\overrightharpoon`],props:{numArgs:1},handler:(e,t)=>{var n=Pv(t[0]),r=!My.test(e.funcName),i=!r||e.funcName===`\\widehat`||e.funcName===`\\widetilde`||e.funcName===`\\widecheck`;return{type:`accent`,mode:e.parser.mode,label:e.funcName,isStretchy:r,isShifty:i,base:n}},htmlBuilder:Ay,mathmlBuilder:jy}),Z({type:`accent`,names:[`\\'`,"\\`",`\\^`,`\\~`,`\\=`,`\\u`,`\\.`,`\\"`,`\\c`,`\\r`,`\\H`,`\\v`,`\\textcircled`],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:[`primitive`]},handler:(e,t)=>{var n=t[0],r=e.parser.mode;return r===`math`&&(e.parser.settings.reportNonstrict(`mathVsTextAccents`,`LaTeX's accent `+e.funcName+` works only in text mode`),r=`text`),{type:`accent`,mode:r,label:e.funcName,isStretchy:!1,isShifty:!0,base:n}},htmlBuilder:Ay,mathmlBuilder:jy}),Z({type:`accentUnder`,names:[`\\underleftarrow`,`\\underrightarrow`,`\\underleftrightarrow`,`\\undergroup`,`\\underlinesegment`,`\\utilde`],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:`accentUnder`,mode:n.mode,label:r,base:i}},htmlBuilder:(e,t)=>{var n=Kv(e.base,t),r=xy(e,t),i=e.label===`\\utilde`?.12:0;return X([`mord`,`accentunder`],[yv({positionType:`top`,positionData:n.height,children:[{type:`elem`,elem:r,wrapperClasses:[`svg-align`]},{type:`kern`,size:i},{type:`elem`,elem:n}]})],t)},mathmlBuilder:(e,t)=>{var n=vy(e.label),r=new Q(`munder`,[sy(e.base,t),n]);return r.setAttribute(`accentunder`,`true`),r}});var Ny=e=>{var t=new Q(`mpadded`,e?[e]:[]);return t.setAttribute(`width`,`+0.6em`),t.setAttribute(`lspace`,`0.3em`),t};Z({type:`xArrow`,names:[`\\xleftarrow`,`\\xrightarrow`,`\\xLeftarrow`,`\\xRightarrow`,`\\xleftrightarrow`,`\\xLeftrightarrow`,`\\xhookleftarrow`,`\\xhookrightarrow`,`\\xmapsto`,`\\xrightharpoondown`,`\\xrightharpoonup`,`\\xleftharpoondown`,`\\xleftharpoonup`,`\\xrightleftharpoons`,`\\xleftrightharpoons`,`\\xlongequal`,`\\xtwoheadrightarrow`,`\\xtwoheadleftarrow`,`\\xtofrom`,`\\xrightleftarrows`,`\\xrightequilibrium`,`\\xleftequilibrium`,`\\\\cdrightarrow`,`\\\\cdleftarrow`,`\\\\cdlongequal`],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r,funcName:i}=e;return{type:`xArrow`,mode:r.mode,label:i,body:t[0],below:n[0]}},htmlBuilder(e,t){var n=t.style,r=t.havingStyle(n.sup()),i=_v(Kv(e.body,r,t),t),a=e.label.slice(0,2)===`\\x`?`x`:`cd`;i.classes.push(a+`-arrow-pad`);var o;e.below&&(r=t.havingStyle(n.sub()),o=_v(Kv(e.below,r,t),t),o.classes.push(a+`-arrow-pad`));var s=xy(e,t),c=-t.fontMetrics().axisHeight+.5*s.height,l=-t.fontMetrics().axisHeight-.5*s.height-.111;(i.depth>.25||e.label===`\\xleftequilibrium`)&&(l-=i.depth);var u;if(o){var d=-t.fontMetrics().axisHeight+o.height+.5*s.height+.111;u=yv({positionType:`individualShift`,children:[{type:`elem`,elem:i,shift:l},{type:`elem`,elem:s,shift:c,wrapperClasses:[`svg-align`]},{type:`elem`,elem:o,shift:d}]})}else u=yv({positionType:`individualShift`,children:[{type:`elem`,elem:i,shift:l},{type:`elem`,elem:s,shift:c,wrapperClasses:[`svg-align`]}]});return X([`mrel`,`x-arrow`],[u],t)},mathmlBuilder(e,t){var n=vy(e.label);n.setAttribute(`minsize`,e.label.charAt(0)===`x`?`1.75em`:`3.0em`);var r;if(e.body){var i=Ny(sy(e.body,t));r=e.below?new Q(`munderover`,[n,Ny(sy(e.below,t)),i]):new Q(`mover`,[n,i])}else e.below?r=new Q(`munder`,[n,Ny(sy(e.below,t))]):(r=Ny(),r=new Q(`mover`,[n,r]));return r}});function Py(e,t){var n=Bv(e.body,t,!0);return X([e.mclass],n,t)}function Fy(e,t){var n,r=ay(e.body,t);return e.mclass===`minner`?n=new Q(`mpadded`,r):e.mclass===`mord`?e.isCharacterBox?(n=r[0],n.type=`mi`):n=new Q(`mi`,r):(e.isCharacterBox?(n=r[0],n.type=`mo`):n=new Q(`mo`,r),e.mclass===`mbin`?(n.attributes.lspace=`0.22em`,n.attributes.rspace=`0.22em`):e.mclass===`mpunct`?(n.attributes.lspace=`0em`,n.attributes.rspace=`0.17em`):e.mclass===`mopen`||e.mclass===`mclose`?(n.attributes.lspace=`0em`,n.attributes.rspace=`0em`):e.mclass===`minner`&&(n.attributes.lspace=`0.0556em`,n.attributes.width=`+0.1111em`)),n}Z({type:`mclass`,names:[`\\mathord`,`\\mathbin`,`\\mathrel`,`\\mathopen`,`\\mathclose`,`\\mathpunct`,`\\mathinner`],props:{numArgs:1,primitive:!0},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:`mclass`,mode:n.mode,mclass:`m`+r.slice(5),body:Fv(i),isCharacterBox:tg(i)}},htmlBuilder:Py,mathmlBuilder:Fy});var Iy=e=>{var t=e.type===`ordgroup`&&e.body.length?e.body[0]:e;return t.type===`atom`&&(t.family===`bin`||t.family===`rel`)?`m`+t.family:`mord`};Z({type:`mclass`,names:[`\\@binrel`],props:{numArgs:2},handler(e,t){var{parser:n}=e;return{type:`mclass`,mode:n.mode,mclass:Iy(t[0]),body:Fv(t[1]),isCharacterBox:tg(t[1])}}}),Z({type:`mclass`,names:[`\\stackrel`,`\\overset`,`\\underset`],props:{numArgs:2},handler(e,t){var{parser:n,funcName:r}=e,i=t[1],a=t[0],o=r===`\\stackrel`?`mrel`:Iy(i),s={type:`op`,mode:i.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:r!==`\\stackrel`,body:Fv(i)},c={type:`supsub`,mode:a.mode,base:s,sup:r===`\\underset`?null:a,sub:r===`\\underset`?a:null};return{type:`mclass`,mode:n.mode,mclass:o,body:[c],isCharacterBox:tg(c)}},htmlBuilder:Py,mathmlBuilder:Fy}),Z({type:`pmb`,names:[`\\pmb`],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:`pmb`,mode:n.mode,mclass:Iy(t[0]),body:Fv(t[0])}},htmlBuilder(e,t){var n=Bv(e.body,t,!0),r=X([e.mclass],n,t);return r.style.textShadow=`0.02em 0.01em 0.04px`,r},mathmlBuilder(e,t){var n=new Q(`mstyle`,ay(e.body,t));return n.setAttribute(`style`,`text-shadow: 0.02em 0.01em 0.04px`),n}});var Ly={">":`\\\\cdrightarrow`,"<":`\\\\cdleftarrow`,"=":`\\\\cdlongequal`,A:`\\uparrow`,V:`\\downarrow`,"|":`\\Vert`,".":`no arrow`},Ry=()=>({type:`styling`,body:[],mode:`math`,style:`display`,resetFont:!0}),zy=e=>e.type===`textord`&&e.text===`@`,By=(e,t)=>(e.type===`mathord`||e.type===`atom`)&&e.text===t;function Vy(e,t,n){var r=Ly[e];switch(r){case`\\\\cdrightarrow`:case`\\\\cdleftarrow`:return n.callFunction(r,[t[0]],[t[1]]);case`\\uparrow`:case`\\downarrow`:var i=n.callFunction(`\\\\cdleft`,[t[0]],[]),a={type:`atom`,text:r,mode:`math`,family:`rel`},o={type:`ordgroup`,mode:`math`,body:[i,n.callFunction(`\\Big`,[a],[]),n.callFunction(`\\\\cdright`,[t[1]],[])]};return n.callFunction(`\\\\cdparent`,[o],[]);case`\\\\cdlongequal`:return n.callFunction(`\\\\cdlongequal`,[],[]);case`\\Vert`:return n.callFunction(`\\Big`,[{type:`textord`,text:`\\Vert`,mode:`math`}],[]);default:return{type:`textord`,text:` `,mode:`math`}}}function Hy(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set(`\\cr`,`\\\\\\relax`),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,`\\\\`)),e.gullet.endGroup(),e.gullet.beginGroup();var n=e.fetch().text;if(n===`&`||n===`\\\\`)e.consume();else if(n===`\\end`){t[t.length-1].length===0&&t.pop();break}else throw new z(`Expected \\\\ or \\cr or \\end`,e.nextToken)}for(var r=[],i=[r],a=0;a<t.length;a++){for(var o=t[a],s=Ry(),c=0;c<o.length;c++)if(!zy(o[c]))s.body.push(o[c]);else{r.push(s),c+=1;var l=Dy(o[c]).text,u=[,,];if(u[0]={type:`ordgroup`,mode:`math`,body:[]},u[1]={type:`ordgroup`,mode:`math`,body:[]},!`=|.`.includes(l))if(`<>AV`.includes(l))for(var d=0;d<2;d++){for(var f=!0,p=c+1;p<o.length;p++){if(By(o[p],l)){f=!1,c=p;break}if(zy(o[p]))throw new z(`Missing a `+l+` character to complete a CD arrow.`,o[p]);u[d].body.push(o[p])}if(f)throw new z(`Missing a `+l+` character to complete a CD arrow.`,o[c])}else throw new z(`Expected one of "<>AV=|." after @`,o[c]);var m={type:`styling`,body:[Vy(l,u,e)],mode:`math`,style:`display`,resetFont:!0};r.push(m),s=Ry()}a%2==0?r.push(s):r.shift(),r=[],i.push(r)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:`array`,mode:`math`,body:i,arraystretch:1,addJot:!0,rowGaps:[null],cols:Array(i[0].length).fill({type:`align`,align:`c`,pregap:.25,postgap:.25}),colSeparationType:`CD`,hLinesBeforeRow:Array(i.length+1).fill([])}}Z({type:`cdlabel`,names:[`\\\\cdleft`,`\\\\cdright`],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:`cdlabel`,mode:n.mode,side:r.slice(4),label:t[0]}},htmlBuilder(e,t){var n=t.havingStyle(t.style.sup()),r=_v(Kv(e.label,n,t),t);return r.classes.push(`cd-label-`+e.side),r.style.bottom=B(.8-r.depth),r.height=0,r.depth=0,r},mathmlBuilder(e,t){var n=new Q(`mrow`,[sy(e.label,t)]);return n=new Q(`mpadded`,[n]),n.setAttribute(`width`,`0`),e.side===`left`&&n.setAttribute(`lspace`,`-1width`),n.setAttribute(`voffset`,`0.7em`),n=new Q(`mstyle`,[n]),n.setAttribute(`displaystyle`,`false`),n.setAttribute(`scriptlevel`,`1`),n}}),Z({type:`cdlabelparent`,names:[`\\\\cdparent`],props:{numArgs:1},handler(e,t){var{parser:n}=e;return{type:`cdlabelparent`,mode:n.mode,fragment:t[0]}},htmlBuilder(e,t){var n=_v(Kv(e.fragment,t),t);return n.classes.push(`cd-vert-arrow`),n},mathmlBuilder(e,t){return new Q(`mrow`,[sy(e.fragment,t)])}}),Z({type:`textord`,names:[`\\@char`],props:{numArgs:1,allowedInText:!0},handler(e,t){for(var{parser:n}=e,r=Ey(t[0],`ordgroup`).body,i=``,a=0;a<r.length;a++){var o=Ey(r[a],`textord`);i+=o.text}var s=parseInt(i),c;if(isNaN(s))throw new z(`\\@char has non-numeric argument `+i);if(s<0||s>=1114111)throw new z(`\\@char with invalid code point `+i);return s<=65535?c=String.fromCharCode(s):(s-=65536,c=String.fromCharCode((s>>10)+55296,(s&1023)+56320)),{type:`textord`,mode:n.mode,text:c}}});var Uy=(e,t)=>gv(Bv(e.body,t.withColor(e.color),!1)),Wy=(e,t)=>{var n=new Q(`mstyle`,ay(e.body,t.withColor(e.color)));return n.setAttribute(`mathcolor`,e.color),n};Z({type:`color`,names:[`\\textcolor`],props:{numArgs:2,allowedInText:!0,argTypes:[`color`,`original`]},handler(e,t){var{parser:n}=e,r=Ey(t[0],`color-token`).color,i=t[1];return{type:`color`,mode:n.mode,color:r,body:Fv(i)}},htmlBuilder:Uy,mathmlBuilder:Wy}),Z({type:`color`,names:[`\\color`],props:{numArgs:1,allowedInText:!0,argTypes:[`color`]},handler(e,t){var{parser:n,breakOnTokenText:r}=e,i=Ey(t[0],`color-token`).color;n.gullet.macros.set(`\\current@color`,i);var a=n.parseExpression(!0,r);return{type:`color`,mode:n.mode,color:i,body:a}},htmlBuilder:Uy,mathmlBuilder:Wy}),Z({type:`cr`,names:[`\\\\`],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,t,n){var{parser:r}=e,i=r.gullet.future().text===`[`?r.parseSizeGroup(!0):null,a=!r.settings.displayMode||!r.settings.useStrictBehavior(`newLineInDisplayMode`,`In LaTeX, \\\\ or \\newline does nothing in display mode`);return{type:`cr`,mode:r.mode,newLine:a,size:i&&Ey(i,`size`).value}},htmlBuilder(e,t){var n=X([`mspace`],[],t);return e.newLine&&(n.classes.push(`newline`),e.size&&(n.style.marginTop=B(qg(e.size,t)))),n},mathmlBuilder(e,t){var n=new Q(`mspace`);return e.newLine&&(n.setAttribute(`linebreak`,`newline`),e.size&&n.setAttribute(`height`,B(qg(e.size,t)))),n}});var Gy={"\\global":`\\global`,"\\long":`\\\\globallong`,"\\\\globallong":`\\\\globallong`,"\\def":`\\gdef`,"\\gdef":`\\gdef`,"\\edef":`\\xdef`,"\\xdef":`\\xdef`,"\\let":`\\\\globallet`,"\\futurelet":`\\\\globalfuture`},Ky=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new z(`Expected a control sequence`,e);return t},qy=e=>{var t=e.gullet.popToken();return t.text===`=`&&(t=e.gullet.popToken(),t.text===` `&&(t=e.gullet.popToken())),t},Jy=(e,t,n,r)=>{var i=e.gullet.macros.get(n.text);i??=(n.noexpand=!0,{tokens:[n],numArgs:0,unexpandable:!e.gullet.isExpandable(n.text)}),e.gullet.macros.set(t,i,r)};Z({type:`internal`,names:[`\\global`,`\\long`,`\\\\globallong`],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t,funcName:n}=e;t.consumeSpaces();var r=t.fetch();if(Gy[r.text])return(n===`\\global`||n===`\\\\globallong`)&&(r.text=Gy[r.text]),Ey(t.parseFunction(),`internal`);throw new z(`Invalid token after macro prefix`,r)}}),Z({type:`internal`,names:[`\\def`,`\\gdef`,`\\edef`,`\\xdef`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=t.gullet.popToken(),i=r.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(i))throw new z(`Expected a control sequence`,r);for(var a=0,o,s=[[]];t.gullet.future().text!==`{`;)if(r=t.gullet.popToken(),r.text===`#`){if(t.gullet.future().text===`{`){o=t.gullet.future(),s[a].push(`{`);break}if(r=t.gullet.popToken(),!/^[1-9]$/.test(r.text))throw new z(`Invalid argument number "`+r.text+`"`);if(parseInt(r.text)!==a+1)throw new z(`Argument number "`+r.text+`" out of order`);a++,s.push([])}else if(r.text===`EOF`)throw new z(`Expected a macro definition`);else s[a].push(r.text);var{tokens:c}=t.gullet.consumeArg();return o&&c.unshift(o),(n===`\\edef`||n===`\\xdef`)&&(c=t.gullet.expandTokens(c),c.reverse()),t.gullet.macros.set(i,{tokens:c,numArgs:a,delimiters:s},n===Gy[n]),{type:`internal`,mode:t.mode}}}),Z({type:`internal`,names:[`\\let`,`\\\\globallet`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=Ky(t.gullet.popToken());return t.gullet.consumeSpaces(),Jy(t,r,qy(t),n===`\\\\globallet`),{type:`internal`,mode:t.mode}}}),Z({type:`internal`,names:[`\\futurelet`,`\\\\globalfuture`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=Ky(t.gullet.popToken()),i=t.gullet.popToken(),a=t.gullet.popToken();return Jy(t,r,a,n===`\\\\globalfuture`),t.gullet.pushToken(a),t.gullet.pushToken(i),{type:`internal`,mode:t.mode}}});var Yy=function(e,t,n){var r=h_(v_.math[e]&&v_.math[e].replace||e,t,n);if(!r)throw Error(`Unsupported symbol `+e+` and font size `+t+`.`);return r},Xy=function(e,t,n,r){var i=n.havingBaseStyle(t),a=X(r.concat(i.sizingClasses(n)),[e],n),o=i.sizeMultiplier/n.sizeMultiplier;return a.height*=o,a.depth*=o,a.maxFontSize=i.sizeMultiplier,a},Zy=function(e,t,n){var r=t.havingBaseStyle(n),i=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push(`delimcenter`),e.style.top=B(i),e.height-=i,e.depth+=i},Qy=function(e,t,n,r,i,a){var o=Xy(ov(e,`Main-Regular`,i,r),t,r,a);return n&&Zy(o,r,t),o},$y=function(e,t,n,r){return ov(e,`Size`+t+`-Regular`,n,r)},eb=function(e,t,n,r,i,a){var o=$y(e,t,i,r),s=Xy(X([`delimsizing`,`size`+t],[o],r),wg.TEXT,r,a);return n&&Zy(s,r,wg.TEXT),s},tb=function(e,t,n){return{type:`elem`,elem:X([`delimsizinginner`,t===`Size1-Regular`?`delim-size1`:`delim-size4`],[X([],[ov(e,t,n)])])}},nb=function(e,t,n){var r=d_[`Size4-Regular`][e.charCodeAt(0)]?d_[`Size4-Regular`][e.charCodeAt(0)][4]:d_[`Size1-Regular`][e.charCodeAt(0)][4],i=pv([],[new a_([new o_(`inner`,zg(e,Math.round(1e3*t)))],{width:B(r),height:B(t),style:`width:`+B(r),viewBox:`0 0 `+1e3*r+` `+Math.round(1e3*t),preserveAspectRatio:`xMinYMin`})],n);return i.height=t,i.style.height=B(t),i.style.width=B(r),{type:`elem`,elem:i}},rb=.008,ib={type:`kern`,size:-1*rb},ab=new Set([`|`,`\\lvert`,`\\rvert`,`\\vert`]),ob=new Set([`\\|`,`\\lVert`,`\\rVert`,`\\Vert`]),sb=function(e,t,n,r,i,a){var o,s,c,l,u=``,d=0;o=c=l=e,s=null;var f=`Size1-Regular`;e===`\\uparrow`?c=l=`⏐`:e===`\\Uparrow`?c=l=`‖`:e===`\\downarrow`?o=c=`⏐`:e===`\\Downarrow`?o=c=`‖`:e===`\\updownarrow`?(o=`\\uparrow`,c=`⏐`,l=`\\downarrow`):e===`\\Updownarrow`?(o=`\\Uparrow`,c=`‖`,l=`\\Downarrow`):ab.has(e)?(c=`∣`,u=`vert`,d=333):ob.has(e)?(c=`∥`,u=`doublevert`,d=556):e===`[`||e===`\\lbrack`?(o=`⎡`,c=`⎢`,l=`⎣`,f=`Size4-Regular`,u=`lbrack`,d=667):e===`]`||e===`\\rbrack`?(o=`⎤`,c=`⎥`,l=`⎦`,f=`Size4-Regular`,u=`rbrack`,d=667):e===`\\lfloor`||e===`⌊`?(c=o=`⎢`,l=`⎣`,f=`Size4-Regular`,u=`lfloor`,d=667):e===`\\lceil`||e===`⌈`?(o=`⎡`,c=l=`⎢`,f=`Size4-Regular`,u=`lceil`,d=667):e===`\\rfloor`||e===`⌋`?(c=o=`⎥`,l=`⎦`,f=`Size4-Regular`,u=`rfloor`,d=667):e===`\\rceil`||e===`⌉`?(o=`⎤`,c=l=`⎥`,f=`Size4-Regular`,u=`rceil`,d=667):e===`(`||e===`\\lparen`?(o=`⎛`,c=`⎜`,l=`⎝`,f=`Size4-Regular`,u=`lparen`,d=875):e===`)`||e===`\\rparen`?(o=`⎞`,c=`⎟`,l=`⎠`,f=`Size4-Regular`,u=`rparen`,d=875):e===`\\{`||e===`\\lbrace`?(o=`⎧`,s=`⎨`,l=`⎩`,c=`⎪`,f=`Size4-Regular`):e===`\\}`||e===`\\rbrace`?(o=`⎫`,s=`⎬`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):e===`\\lgroup`||e===`⟮`?(o=`⎧`,l=`⎩`,c=`⎪`,f=`Size4-Regular`):e===`\\rgroup`||e===`⟯`?(o=`⎫`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):e===`\\lmoustache`||e===`⎰`?(o=`⎧`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):(e===`\\rmoustache`||e===`⎱`)&&(o=`⎫`,l=`⎩`,c=`⎪`,f=`Size4-Regular`);var p=Yy(o,f,i),m=p.height+p.depth,h=Yy(c,f,i),g=h.height+h.depth,_=Yy(l,f,i),v=_.height+_.depth,y=0,b=1;if(s!==null){var x=Yy(s,f,i);y=x.height+x.depth,b=2}var S=m+v+y,C=S+Math.max(0,Math.ceil((t-S)/(b*g)))*b*g,w=r.fontMetrics().axisHeight;n&&(w*=r.sizeMultiplier);var T=C/2-w,E=[];if(u.length>0){var ee=C-m-v,D=Math.round(C*1e3),te=Vg(u,Math.round(ee*1e3)),ne=new o_(u,te),re=B(d/1e3),ie=B(D/1e3),ae=pv([],[new a_([ne],{width:re,height:ie,viewBox:`0 0 `+d+` `+D})],r);ae.height=D/1e3,ae.style.width=re,ae.style.height=ie,E.push({type:`elem`,elem:ae})}else{if(E.push(tb(l,f,i)),E.push(ib),s===null){var oe=C-m-v+2*rb;E.push(nb(c,oe,r))}else{var se=(C-m-v-y)/2+2*rb;E.push(nb(c,se,r)),E.push(ib),E.push(tb(s,f,i)),E.push(ib),E.push(nb(c,se,r))}E.push(ib),E.push(tb(o,f,i))}var O=r.havingBaseStyle(wg.TEXT);return Xy(X([`delimsizing`,`mult`],[yv({positionType:`bottom`,positionData:T,children:E})],O),wg.TEXT,r,a)},cb=80,lb=.08,ub=function(e,t,n,r,i){return pv([`hide-tail`],[new a_([new o_(e,Rg(e,r,n))],{width:`400em`,height:B(t),viewBox:`0 0 400000 `+n,preserveAspectRatio:`xMinYMin slice`})],i)},db=function(e,t){var n=t.havingBaseSizing(),r=xb(`\\surd`,e*n.sizeMultiplier,yb,n),i=n.sizeMultiplier,a=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,s,c,l,u;return r.type===`small`?(l=1e3+1e3*a+cb,e<1?i=1:e<1.4&&(i=.7),s=(1+a+lb)/i,c=(1+a)/i,o=ub(`sqrtMain`,s,l,a,t),o.style.minWidth=`0.853em`,u=.833/i):r.type===`large`?(l=(1e3+cb)*hb[r.size],c=(hb[r.size]+a)/i,s=(hb[r.size]+a+lb)/i,o=ub(`sqrtSize`+r.size,s,l,a,t),o.style.minWidth=`1.02em`,u=1/i):(s=e+a+lb,c=e+a,l=Math.floor(1e3*e+a)+cb,o=ub(`sqrtTall`,s,l,a,t),o.style.minWidth=`0.742em`,u=1.056),o.height=c,o.style.height=B(s),{span:o,advanceWidth:u,ruleWidth:(t.fontMetrics().sqrtRuleThickness+a)*i}},fb=new Set([`(`,`\\lparen`,`)`,`\\rparen`,`[`,`\\lbrack`,`]`,`\\rbrack`,`\\{`,`\\lbrace`,`\\}`,`\\rbrace`,`\\lfloor`,`\\rfloor`,`⌊`,`⌋`,`\\lceil`,`\\rceil`,`⌈`,`⌉`,`\\surd`]),pb=new Set([`\\uparrow`,`\\downarrow`,`\\updownarrow`,`\\Uparrow`,`\\Downarrow`,`\\Updownarrow`,`|`,`\\|`,`\\vert`,`\\Vert`,`\\lvert`,`\\rvert`,`\\lVert`,`\\rVert`,`\\lgroup`,`\\rgroup`,`⟮`,`⟯`,`\\lmoustache`,`\\rmoustache`,`⎰`,`⎱`]),mb=new Set([`<`,`>`,`\\langle`,`\\rangle`,`/`,`\\backslash`,`\\lt`,`\\gt`]),hb=[0,1.2,1.8,2.4,3],gb=function(e,t,n,r,i){if(e===`<`||e===`\\lt`||e===`⟨`?e=`\\langle`:(e===`>`||e===`\\gt`||e===`⟩`)&&(e=`\\rangle`),fb.has(e)||mb.has(e))return eb(e,t,!1,n,r,i);if(pb.has(e))return sb(e,hb[t],!1,n,r,i);throw new z(`Illegal delimiter: '`+e+`'`)},_b=[{type:`small`,style:wg.SCRIPTSCRIPT},{type:`small`,style:wg.SCRIPT},{type:`small`,style:wg.TEXT},{type:`large`,size:1},{type:`large`,size:2},{type:`large`,size:3},{type:`large`,size:4}],vb=[{type:`small`,style:wg.SCRIPTSCRIPT},{type:`small`,style:wg.SCRIPT},{type:`small`,style:wg.TEXT},{type:`stack`}],yb=[{type:`small`,style:wg.SCRIPTSCRIPT},{type:`small`,style:wg.SCRIPT},{type:`small`,style:wg.TEXT},{type:`large`,size:1},{type:`large`,size:2},{type:`large`,size:3},{type:`large`,size:4},{type:`stack`}],bb=function(e){if(e.type===`small`)return`Main-Regular`;if(e.type===`large`)return`Size`+e.size+`-Regular`;if(e.type===`stack`)return`Size4-Regular`;var t=e.type;throw Error(`Add support for delim type '`+t+`' here.`)},xb=function(e,t,n,r){for(var i=Math.min(2,3-r.style.size);i<n.length;i++){var a=n[i];if(a.type===`stack`)break;var o=Yy(e,bb(a),`math`),s=o.height+o.depth;if(a.type===`small`){var c=r.havingBaseStyle(a.style);s*=c.sizeMultiplier}if(s>t)return a}return n[n.length-1]},Sb=function(e,t,n,r,i,a){e===`<`||e===`\\lt`||e===`⟨`?e=`\\langle`:(e===`>`||e===`\\gt`||e===`⟩`)&&(e=`\\rangle`);var o=mb.has(e)?_b:fb.has(e)?yb:vb,s=xb(e,t,o,r);return s.type===`small`?Qy(e,s.style,n,r,i,a):s.type===`large`?eb(e,s.size,n,r,i,a):sb(e,t,n,r,i,a)},Cb=function(e,t,n,r,i,a){var o=r.fontMetrics().axisHeight*r.sizeMultiplier,s=901,c=5/r.fontMetrics().ptPerEm,l=Math.max(t-o,n+o);return Sb(e,Math.max(l/500*s,2*l-c),!0,r,i,a)},wb={"\\bigl":{mclass:`mopen`,size:1},"\\Bigl":{mclass:`mopen`,size:2},"\\biggl":{mclass:`mopen`,size:3},"\\Biggl":{mclass:`mopen`,size:4},"\\bigr":{mclass:`mclose`,size:1},"\\Bigr":{mclass:`mclose`,size:2},"\\biggr":{mclass:`mclose`,size:3},"\\Biggr":{mclass:`mclose`,size:4},"\\bigm":{mclass:`mrel`,size:1},"\\Bigm":{mclass:`mrel`,size:2},"\\biggm":{mclass:`mrel`,size:3},"\\Biggm":{mclass:`mrel`,size:4},"\\big":{mclass:`mord`,size:1},"\\Big":{mclass:`mord`,size:2},"\\bigg":{mclass:`mord`,size:3},"\\Bigg":{mclass:`mord`,size:4}},Tb=new Set(`(,\\lparen,),\\rparen,[,\\lbrack,],\\rbrack,\\{,\\lbrace,\\},\\rbrace,\\lfloor,\\rfloor,⌊,⌋,\\lceil,\\rceil,⌈,⌉,<,>,\\langle,⟨,\\rangle,⟩,\\lt,\\gt,\\lvert,\\rvert,\\lVert,\\rVert,\\lgroup,\\rgroup,⟮,⟯,\\lmoustache,\\rmoustache,⎰,⎱,/,\\backslash,|,\\vert,\\|,\\Vert,\\uparrow,\\Uparrow,\\downarrow,\\Downarrow,\\updownarrow,\\Updownarrow,.`.split(`,`));function Eb(e){return`isMiddle`in e}function Db(e,t){var n=Oy(e);if(n&&Tb.has(n.text))return n;throw n?new z(`Invalid delimiter '`+n.text+`' after '`+t.funcName+`'`,e):new z(`Invalid delimiter type '`+e.type+`'`,e)}Z({type:`delimsizing`,names:[`\\bigl`,`\\Bigl`,`\\biggl`,`\\Biggl`,`\\bigr`,`\\Bigr`,`\\biggr`,`\\Biggr`,`\\bigm`,`\\Bigm`,`\\biggm`,`\\Biggm`,`\\big`,`\\Big`,`\\bigg`,`\\Bigg`],props:{numArgs:1,argTypes:[`primitive`]},handler:(e,t)=>{var n=Db(t[0],e);return{type:`delimsizing`,mode:e.parser.mode,size:wb[e.funcName].size,mclass:wb[e.funcName].mclass,delim:n.text}},htmlBuilder:(e,t)=>e.delim===`.`?X([e.mclass]):gb(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!==`.`&&t.push(ey(e.delim,e.mode));var n=new Q(`mo`,t);e.mclass===`mopen`||e.mclass===`mclose`?n.setAttribute(`fence`,`true`):n.setAttribute(`fence`,`false`),n.setAttribute(`stretchy`,`true`);var r=B(hb[e.size]);return n.setAttribute(`minsize`,r),n.setAttribute(`maxsize`,r),n}});function Ob(e){if(!e.body)throw Error(`Bug: The leftright ParseNode wasn't fully parsed.`)}Z({type:`leftright-right`,names:[`\\right`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=e.parser.gullet.macros.get(`\\current@color`);if(n&&typeof n!=`string`)throw new z(`\\current@color set to non-string in \\right`);return{type:`leftright-right`,mode:e.parser.mode,delim:Db(t[0],e).text,color:n}}}),Z({type:`leftright`,names:[`\\left`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=Db(t[0],e),r=e.parser;++r.leftrightDepth;var i=r.parseExpression(!1);--r.leftrightDepth,r.expect(`\\right`,!1);var a=Ey(r.parseFunction(),`leftright-right`);return{type:`leftright`,mode:r.mode,body:i,left:n.text,right:a.delim,rightColor:a.color}},htmlBuilder:(e,t)=>{Ob(e);for(var n=Bv(e.body,t,!0,[`mopen`,`mclose`]),r=0,i=0,a=!1,o=0;o<n.length;o++){var s=n[o];Eb(s)?a=!0:(r=Math.max(n[o].height,r),i=Math.max(n[o].depth,i))}r*=t.sizeMultiplier,i*=t.sizeMultiplier;var c=e.left===`.`?Gv(t,[`mopen`]):Cb(e.left,r,i,t,e.mode,[`mopen`]);if(n.unshift(c),a)for(var l=1;l<n.length;l++){var u=n[l];if(Eb(u)){var d=u.isMiddle;n[l]=Cb(d.delim,r,i,d.options,e.mode,[])}}var f;if(e.right===`.`)f=Gv(t,[`mclose`]);else{var p=e.rightColor?t.withColor(e.rightColor):t;f=Cb(e.right,r,i,p,e.mode,[`mclose`])}return n.push(f),X([`minner`],n,t)},mathmlBuilder:(e,t)=>{Ob(e);var n=ay(e.body,t);if(e.left!==`.`){var r=new Q(`mo`,[ey(e.left,e.mode)]);r.setAttribute(`fence`,`true`),n.unshift(r)}if(e.right!==`.`){var i=new Q(`mo`,[ey(e.right,e.mode)]);i.setAttribute(`fence`,`true`),e.rightColor&&i.setAttribute(`mathcolor`,e.rightColor),n.push(i)}return ty(n)}}),Z({type:`middle`,names:[`\\middle`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=Db(t[0],e);if(!e.parser.leftrightDepth)throw new z(`\\middle without preceding \\left`,n);return{type:`middle`,mode:e.parser.mode,delim:n.text}},htmlBuilder:(e,t)=>{var n;return e.delim===`.`?n=Gv(t,[]):(n=gb(e.delim,1,t,e.mode,[]),n.isMiddle={delim:e.delim,options:t}),n},mathmlBuilder:(e,t)=>{var n=new Q(`mo`,[e.delim===`\\vert`||e.delim===`|`?ey(`|`,`text`):ey(e.delim,e.mode)]);return n.setAttribute(`fence`,`true`),n.setAttribute(`lspace`,`0.05em`),n.setAttribute(`rspace`,`0.05em`),n}});var kb=(e,t)=>{var n=_v(Kv(e.body,t),t),r=e.label.slice(1),i=t.sizeMultiplier,a,o,s=tg(e.body);if(r===`sout`)a=X([`stretchy`,`sout`]),a.height=t.fontMetrics().defaultRuleThickness/i,o=-.5*t.fontMetrics().xHeight;else if(r===`phase`){var c=qg({number:.6,unit:`pt`},t),l=qg({number:.35,unit:`ex`},t),u=t.havingBaseSizing();i/=u.sizeMultiplier;var d=n.height+n.depth+c+l;n.style.paddingLeft=B(d/2+c);var f=Math.floor(1e3*d*i);a=pv([`hide-tail`],[new a_([new o_(`phase`,Ig(f))],{width:`400em`,height:B(f/1e3),viewBox:`0 0 400000 `+f,preserveAspectRatio:`xMinYMin slice`})],t),a.style.height=B(d),o=n.depth+c+l}else{/cancel/.test(r)?s||n.classes.push(`cancel-pad`):r===`angl`?n.classes.push(`anglpad`):n.classes.push(`boxpad`);var p,m,h=0;/box/.test(r)?(h=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),p=t.fontMetrics().fboxsep+(r===`colorbox`?0:h),m=p):r===`angl`?(h=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),p=4*h,m=Math.max(0,.25-n.depth)):(p=s?.2:0,m=p),a=Sy(n,r,p,m,t),/fbox|boxed|fcolorbox/.test(r)?(a.style.borderStyle=`solid`,a.style.borderWidth=B(h)):r===`angl`&&h!==.049&&(a.style.borderTopWidth=B(h),a.style.borderRightWidth=B(h)),o=n.depth+m,e.backgroundColor&&(a.style.backgroundColor=e.backgroundColor,e.borderColor&&(a.style.borderColor=e.borderColor))}var g;if(e.backgroundColor)g=yv({positionType:`individualShift`,children:[{type:`elem`,elem:a,shift:o},{type:`elem`,elem:n,shift:0}]});else{var _=/cancel|phase/.test(r)?[`svg-align`]:[];g=yv({positionType:`individualShift`,children:[{type:`elem`,elem:n,shift:0},{type:`elem`,elem:a,shift:o,wrapperClasses:_}]})}return/cancel/.test(r)&&(g.height=n.height,g.depth=n.depth),/cancel/.test(r)&&!s?X([`mord`,`cancel-lap`],[g],t):X([`mord`],[g],t)},Ab=(e,t)=>{var n,r=new Q(e.label.includes(`colorbox`)?`mpadded`:`menclose`,[sy(e.body,t)]);switch(e.label){case`\\cancel`:r.setAttribute(`notation`,`updiagonalstrike`);break;case`\\bcancel`:r.setAttribute(`notation`,`downdiagonalstrike`);break;case`\\phase`:r.setAttribute(`notation`,`phasorangle`);break;case`\\sout`:r.setAttribute(`notation`,`horizontalstrike`);break;case`\\fbox`:r.setAttribute(`notation`,`box`);break;case`\\angl`:r.setAttribute(`notation`,`actuarial`);break;case`\\fcolorbox`:case`\\colorbox`:if(n=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,r.setAttribute(`width`,`+`+2*n+`pt`),r.setAttribute(`height`,`+`+2*n+`pt`),r.setAttribute(`lspace`,n+`pt`),r.setAttribute(`voffset`,n+`pt`),e.label===`\\fcolorbox`){var i=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);r.setAttribute(`style`,`border: `+B(i)+` solid `+e.borderColor)}break;case`\\xcancel`:r.setAttribute(`notation`,`updiagonalstrike downdiagonalstrike`);break}return e.backgroundColor&&r.setAttribute(`mathbackground`,e.backgroundColor),r};Z({type:`enclose`,names:[`\\colorbox`],props:{numArgs:2,allowedInText:!0,argTypes:[`color`,`hbox`]},handler(e,t,n){var{parser:r,funcName:i}=e,a=Ey(t[0],`color-token`).color,o=t[1];return{type:`enclose`,mode:r.mode,label:i,backgroundColor:a,body:o}},htmlBuilder:kb,mathmlBuilder:Ab}),Z({type:`enclose`,names:[`\\fcolorbox`],props:{numArgs:3,allowedInText:!0,argTypes:[`color`,`color`,`hbox`]},handler(e,t,n){var{parser:r,funcName:i}=e,a=Ey(t[0],`color-token`).color,o=Ey(t[1],`color-token`).color,s=t[2];return{type:`enclose`,mode:r.mode,label:i,backgroundColor:o,borderColor:a,body:s}},htmlBuilder:kb,mathmlBuilder:Ab}),Z({type:`enclose`,names:[`\\fbox`],props:{numArgs:1,argTypes:[`hbox`],allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:`enclose`,mode:n.mode,label:`\\fbox`,body:t[0]}}}),Z({type:`enclose`,names:[`\\cancel`,`\\bcancel`,`\\xcancel`,`\\phase`],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:`enclose`,mode:n.mode,label:r,body:i}},htmlBuilder:kb,mathmlBuilder:Ab}),Z({type:`enclose`,names:[`\\sout`],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e;n.mode===`math`&&n.settings.reportNonstrict(`mathVsSout`,`LaTeX's \\sout works only in text mode`);var i=t[0];return{type:`enclose`,mode:n.mode,label:r,body:i}},htmlBuilder:kb,mathmlBuilder:Ab}),Z({type:`enclose`,names:[`\\angl`],props:{numArgs:1,argTypes:[`hbox`],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:`enclose`,mode:n.mode,label:`\\angl`,body:t[0]}}});var jb={};function Mb(e){for(var{type:t,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:o}=e,s={type:t,numArgs:r.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:i},c=0;c<n.length;++c)jb[n[c]]=s;a&&(jv[t]=a),o&&(Mv[t]=o)}var Nb={};function $(e,t){Nb[e]=t}var Pb=class e{constructor(e,t,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=n}static range(t,n){return n?!t||!t.loc||!n.loc||t.loc.lexer!==n.loc.lexer?null:new e(t.loc.lexer,t.loc.start,n.loc.end):t&&t.loc}},Fb=class e{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(t,n){return new e(n,Pb.range(this,t))}};function Ib(e){var t=[];e.consumeSpaces();var n=e.fetch().text;for(n===`\\relax`&&(e.consume(),e.consumeSpaces(),n=e.fetch().text);n===`\\hline`||n===`\\hdashline`;)e.consume(),t.push(n===`\\hdashline`),e.consumeSpaces(),n=e.fetch().text;return t}var Lb=e=>{if(!e.parser.settings.displayMode)throw new z(`{`+e.envName+`} can be used only in display mode.`)},Rb=new Set([`gather`,`gather*`]);function zb(e){if(!e.includes(`ed`))return!e.includes(`*`)}function Bb(e,t,n){var{hskipBeforeAndAfter:r,addJot:i,cols:a,arraystretch:o,colSeparationType:s,autoTag:c,singleRow:l,emptySingleRow:u,maxNumCols:d,leqno:f}=t;if(e.gullet.beginGroup(),l||e.gullet.macros.set(`\\cr`,`\\\\\\relax`),!o){var p=e.gullet.expandMacroAsText(`\\arraystretch`);if(p==null)o=1;else if(o=parseFloat(p),!o||o<0)throw new z(`Invalid \\arraystretch: `+p)}e.gullet.beginGroup();var m=[],h=[m],g=[],_=[],v=c==null?void 0:[];function y(){c&&e.gullet.macros.set(`\\@eqnsw`,`1`,!0)}function b(){v&&(e.gullet.macros.get(`\\df@tag`)?(v.push(e.subparse([new Fb(`\\df@tag`)])),e.gullet.macros.set(`\\df@tag`,void 0,!0)):v.push(!!c&&e.gullet.macros.get(`\\@eqnsw`)===`1`))}for(y(),_.push(Ib(e));;){var x=e.parseExpression(!1,l?`\\end`:`\\\\`);e.gullet.endGroup(),e.gullet.beginGroup();var S={type:`ordgroup`,mode:e.mode,body:x};n&&(S={type:`styling`,mode:e.mode,style:n,resetFont:!0,body:[S]}),m.push(S);var C=e.fetch().text;if(C===`&`){if(d&&m.length===d){if(l||s)throw new z(`Too many tab characters: &`,e.nextToken);e.settings.reportNonstrict(`textEnv`,`Too few columns specified in the {array} column argument.`)}e.consume()}else if(C===`\\end`){b(),m.length===1&&S.type===`styling`&&S.body.length===1&&S.body[0].type===`ordgroup`&&S.body[0].body.length===0&&(h.length>1||!u)&&h.pop(),_.length<h.length+1&&_.push([]);break}else if(C===`\\\\`){e.consume();var w=void 0;e.gullet.future().text!==` `&&(w=e.parseSizeGroup(!0)),g.push(w?w.value:null),b(),_.push(Ib(e)),m=[],h.push(m),y()}else throw new z(`Expected & or \\\\ or \\cr or \\end`,e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:`array`,mode:e.mode,addJot:i,arraystretch:o,body:h,cols:a,rowGaps:g,hskipBeforeAndAfter:r,hLinesBeforeRow:_,colSeparationType:s,tags:v,leqno:f}}function Vb(e){return e.slice(0,1)===`d`?`display`:`text`}var Hb=function(e,t){var n,r,i=e.body.length,a=e.hLinesBeforeRow,o=0,s=Array(i),c=[],l=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),u=1/t.fontMetrics().ptPerEm,d=5*u;e.colSeparationType&&e.colSeparationType===`small`&&(d=.2778*(t.havingStyle(wg.SCRIPT).sizeMultiplier/t.sizeMultiplier));var f=e.colSeparationType===`CD`?qg({number:3,unit:`ex`},t):12*u,p=3*u,m=e.arraystretch*f,h=.7*m,g=.3*m,_=0;function v(e){for(var t=0;t<e.length;++t)t>0&&(_+=.25),c.push({pos:_,isDashed:e[t]})}for(v(a[0]),n=0;n<e.body.length;++n){var y=e.body[n],b=h,x=g;o<y.length&&(o=y.length);var S={cells:Array(y.length),height:0,depth:0,pos:0};for(r=0;r<y.length;++r){var C=Kv(y[r],t);x<C.depth&&(x=C.depth),b<C.height&&(b=C.height),S.cells[r]=C}var w=e.rowGaps[n],T=0;w&&(T=qg(w,t),T>0&&(T+=g,x<T&&(x=T),T=0)),e.addJot&&n<e.body.length-1&&(x+=p),S.height=b,S.depth=x,_+=b,S.pos=_,_+=x+T,s[n]=S,v(a[n+1])}var E=_/2+t.fontMetrics().axisHeight,ee=e.cols||[],D=[],te,ne,re=[];if(e.tags&&e.tags.some(e=>e))for(n=0;n<i;++n){var ie=s[n],ae=ie.pos-E,oe=e.tags[n],se=void 0;se=oe===!0?X([`eqn-num`],[],t):oe===!1?X([],[],t):X([],Bv(oe,t,!0),t),se.depth=ie.depth,se.height=ie.height,re.push({type:`elem`,elem:se,shift:ae})}for(r=0,ne=0;r<o||ne<ee.length;++r,++ne){for(var O=ee[ne],k=!0;(ce=O)?.type===`separator`;){var ce;if(k||(te=X([`arraycolsep`],[]),te.style.width=B(t.fontMetrics().doubleRuleSep),D.push(te)),O.separator===`|`||O.separator===`:`){var le=O.separator===`|`?`solid`:`dashed`,ue=X([`vertical-separator`],[],t);ue.style.height=B(_),ue.style.borderRightWidth=B(l),ue.style.borderRightStyle=le,ue.style.margin=`0 `+B(-l/2);var de=_-E;de&&(ue.style.verticalAlign=B(-de)),D.push(ue)}else throw new z(`Invalid separator type: `+O.separator);ne++,O=ee[ne],k=!1}if(!(r>=o)){var fe=void 0;(r>0||e.hskipBeforeAndAfter)&&(fe=O?.pregap??d,fe!==0&&(te=X([`arraycolsep`],[]),te.style.width=B(fe),D.push(te)));var pe=[];for(n=0;n<i;++n){var me=s[n],A=me.cells[r];if(A){var he=me.pos-E;A.depth=me.depth,A.height=me.height,pe.push({type:`elem`,elem:A,shift:he})}}var ge=yv({positionType:`individualShift`,children:pe}),_e=X([`col-align-`+(O?.align||`c`)],[ge]);D.push(_e),(r<o-1||e.hskipBeforeAndAfter)&&(fe=O?.postgap??d,fe!==0&&(te=X([`arraycolsep`],[]),te.style.width=B(fe),D.push(te)))}}var ve=X([`mtable`],D);if(c.length>0){for(var ye=mv(`hline`,t,l),be=mv(`hdashline`,t,l),xe=[{type:`elem`,elem:ve,shift:0}];c.length>0;){var Se=c.pop(),Ce=Se.pos-E;Se.isDashed?xe.push({type:`elem`,elem:be,shift:Ce}):xe.push({type:`elem`,elem:ye,shift:Ce})}ve=yv({positionType:`individualShift`,children:xe})}if(re.length===0)return X([`mord`],[ve],t);var we=X([`tag`],[yv({positionType:`individualShift`,children:re})],t);return gv([ve,we])},Ub={c:`center `,l:`left `,r:`right `},Wb=function(e,t){for(var n=[],r=new Q(`mtd`,[],[`mtr-glue`]),i=new Q(`mtd`,[],[`mml-eqn-num`]),a=0;a<e.body.length;a++){for(var o=e.body[a],s=[],c=0;c<o.length;c++)s.push(new Q(`mtd`,[sy(o[c],t)]));e.tags&&e.tags[a]&&(s.unshift(r),s.push(r),e.leqno?s.unshift(i):s.push(i)),n.push(new Q(`mtr`,s))}var l=new Q(`mtable`,n),u=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);l.setAttribute(`rowspacing`,B(u));var d=``,f=``;if(e.cols&&e.cols.length>0){var p=e.cols,m=``,h=!1,g=0,_=p.length;p[0].type===`separator`&&(d+=`top `,g=1),p[p.length-1].type===`separator`&&(d+=`bottom `,--_);for(var v=g;v<_;v++){var y=p[v];y.type===`align`?(f+=Ub[y.align],h&&(m+=`none `),h=!0):y.type===`separator`&&(h&&=(m+=y.separator===`|`?`solid `:`dashed `,!1))}l.setAttribute(`columnalign`,f.trim()),/[sd]/.test(m)&&l.setAttribute(`columnlines`,m.trim())}if(e.colSeparationType===`align`){for(var b=e.cols||[],x=``,S=1;S<b.length;S++)x+=S%2?`0em `:`1em `;l.setAttribute(`columnspacing`,x.trim())}else e.colSeparationType===`alignat`||e.colSeparationType===`gather`?l.setAttribute(`columnspacing`,`0em`):e.colSeparationType===`small`?l.setAttribute(`columnspacing`,`0.2778em`):e.colSeparationType===`CD`?l.setAttribute(`columnspacing`,`0.5em`):l.setAttribute(`columnspacing`,`1em`);var C=``,w=e.hLinesBeforeRow;d+=w[0].length>0?`left `:``,d+=w[w.length-1].length>0?`right `:``;for(var T=1;T<w.length-1;T++)C+=w[T].length===0?`none `:w[T][0]?`dashed `:`solid `;return/[sd]/.test(C)&&l.setAttribute(`rowlines`,C.trim()),d!==``&&(l=new Q(`menclose`,[l]),l.setAttribute(`notation`,d.trim())),e.arraystretch&&e.arraystretch<1&&(l=new Q(`mstyle`,[l]),l.setAttribute(`scriptlevel`,`1`)),l},Gb=function(e,t){e.envName.includes(`ed`)||Lb(e);var n=[],r=e.envName.includes(`at`)?`alignat`:`align`,i=e.envName===`split`,a=Bb(e.parser,{cols:n,addJot:!0,autoTag:i?void 0:zb(e.envName),emptySingleRow:!0,colSeparationType:r,maxNumCols:i?2:void 0,leqno:e.parser.settings.leqno},`display`),o=0,s=0,c={type:`ordgroup`,mode:e.mode,body:[]};if(t[0]&&t[0].type===`ordgroup`){for(var l=``,u=0;u<t[0].body.length;u++){var d=Ey(t[0].body[u],`textord`);l+=d.text}o=Number(l),s=o*2}var f=!s;a.body.forEach(function(e){for(var t=1;t<e.length;t+=2)Ey(Ey(e[t],`styling`).body[0],`ordgroup`).body.unshift(c);if(f)s<e.length&&(s=e.length);else{var n=e.length/2;if(o<n)throw new z(`Too many math in a row: `+(`expected `+o+`, but got `+n),e[0])}});for(var p=0;p<s;++p){var m=`r`,h=0;p%2==1?m=`l`:p>0&&f&&(h=1),n[p]={type:`align`,align:m,pregap:h,postgap:0}}return a.colSeparationType=f?`align`:`alignat`,a};Mb({type:`array`,names:[`array`,`darray`],props:{numArgs:1},handler(e,t){var n=(Oy(t[0])?[t[0]]:Ey(t[0],`ordgroup`).body).map(function(e){var t=Dy(e).text;if(`lcr`.includes(t))return{type:`align`,align:t};if(t===`|`)return{type:`separator`,separator:`|`};if(t===`:`)return{type:`separator`,separator:`:`};throw new z(`Unknown column alignment: `+t,e)}),r={cols:n,hskipBeforeAndAfter:!0,maxNumCols:n.length};return Bb(e.parser,r,Vb(e.envName))},htmlBuilder:Hb,mathmlBuilder:Wb}),Mb({type:`array`,names:[`matrix`,`pmatrix`,`bmatrix`,`Bmatrix`,`vmatrix`,`Vmatrix`,`matrix*`,`pmatrix*`,`bmatrix*`,`Bmatrix*`,`vmatrix*`,`Vmatrix*`],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:[`(`,`)`],bmatrix:[`[`,`]`],Bmatrix:[`\\{`,`\\}`],vmatrix:[`|`,`|`],Vmatrix:[`\\Vert`,`\\Vert`]}[e.envName.replace(`*`,``)],n=`c`,r={hskipBeforeAndAfter:!1,cols:[{type:`align`,align:n}]};if(e.envName.charAt(e.envName.length-1)===`*`){var i=e.parser;if(i.consumeSpaces(),i.fetch().text===`[`){if(i.consume(),i.consumeSpaces(),n=i.fetch().text,!`lcr`.includes(n))throw new z(`Expected l or c or r`,i.nextToken);i.consume(),i.consumeSpaces(),i.expect(`]`),i.consume(),r.cols=[{type:`align`,align:n}]}}var a=Bb(e.parser,r,Vb(e.envName)),o=Math.max(0,...a.body.map(e=>e.length));return a.cols=Array(o).fill({type:`align`,align:n}),t?{type:`leftright`,mode:e.mode,body:[a],left:t[0],right:t[1],rightColor:void 0}:a},htmlBuilder:Hb,mathmlBuilder:Wb}),Mb({type:`array`,names:[`smallmatrix`],props:{numArgs:0},handler(e){var t=Bb(e.parser,{arraystretch:.5},`script`);return t.colSeparationType=`small`,t},htmlBuilder:Hb,mathmlBuilder:Wb}),Mb({type:`array`,names:[`subarray`],props:{numArgs:1},handler(e,t){var n=(Oy(t[0])?[t[0]]:Ey(t[0],`ordgroup`).body).map(function(e){var t=Dy(e).text;if(`lc`.includes(t))return{type:`align`,align:t};throw new z(`Unknown column alignment: `+t,e)});if(n.length>1)throw new z(`{subarray} can contain only one column`);var r={cols:n,hskipBeforeAndAfter:!1,arraystretch:.5},i=Bb(e.parser,r,`script`);if(i.body.length>0&&i.body[0].length>1)throw new z(`{subarray} can contain only one column`);return i},htmlBuilder:Hb,mathmlBuilder:Wb}),Mb({type:`array`,names:[`cases`,`dcases`,`rcases`,`drcases`],props:{numArgs:0},handler(e){var t=Bb(e.parser,{arraystretch:1.2,cols:[{type:`align`,align:`l`,pregap:0,postgap:1},{type:`align`,align:`l`,pregap:0,postgap:0}]},Vb(e.envName));return{type:`leftright`,mode:e.mode,body:[t],left:e.envName.includes(`r`)?`.`:`\\{`,right:e.envName.includes(`r`)?`\\}`:`.`,rightColor:void 0}},htmlBuilder:Hb,mathmlBuilder:Wb}),Mb({type:`array`,names:[`align`,`align*`,`aligned`,`split`],props:{numArgs:0},handler:Gb,htmlBuilder:Hb,mathmlBuilder:Wb}),Mb({type:`array`,names:[`gathered`,`gather`,`gather*`],props:{numArgs:0},handler(e){Rb.has(e.envName)&&Lb(e);var t={cols:[{type:`align`,align:`c`}],addJot:!0,colSeparationType:`gather`,autoTag:zb(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return Bb(e.parser,t,`display`)},htmlBuilder:Hb,mathmlBuilder:Wb}),Mb({type:`array`,names:[`alignat`,`alignat*`,`alignedat`],props:{numArgs:1},handler:Gb,htmlBuilder:Hb,mathmlBuilder:Wb}),Mb({type:`array`,names:[`equation`,`equation*`],props:{numArgs:0},handler(e){Lb(e);var t={autoTag:zb(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return Bb(e.parser,t,`display`)},htmlBuilder:Hb,mathmlBuilder:Wb}),Mb({type:`array`,names:[`CD`],props:{numArgs:0},handler(e){return Lb(e),Hy(e.parser)},htmlBuilder:Hb,mathmlBuilder:Wb}),$(`\\nonumber`,`\\gdef\\@eqnsw{0}`),$(`\\notag`,`\\nonumber`),Z({type:`text`,names:[`\\hline`,`\\hdashline`],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,t){throw new z(e.funcName+` valid only within array environment`)}});var Kb=jb;Z({type:`environment`,names:[`\\begin`,`\\end`],props:{numArgs:1,argTypes:[`text`]},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];if(i.type!==`ordgroup`)throw new z(`Invalid environment name`,i);for(var a=``,o=0;o<i.body.length;++o)a+=Ey(i.body[o],`textord`).text;if(r===`\\begin`){if(!Kb.hasOwnProperty(a))throw new z(`No such environment: `+a,i);var s=Kb[a],{args:c,optArgs:l}=n.parseArguments(`\\begin{`+a+`}`,s),u={mode:n.mode,envName:a,parser:n},d=s.handler(u,c,l);n.expect(`\\end`,!1);var f=n.nextToken,p=Ey(n.parseFunction(),`environment`);if(p.name!==a)throw new z(`Mismatch: \\begin{`+a+`} matched by \\end{`+p.name+`}`,f);return d}return{type:`environment`,mode:n.mode,name:a,nameGroup:i}}});var qb=(e,t)=>{var n=e.font,r=t.withFont(n);return Kv(e.body,r)},Jb=(e,t)=>{var n=e.font,r=t.withFont(n);return sy(e.body,r)},Yb={"\\Bbb":`\\mathbb`,"\\bold":`\\mathbf`,"\\frak":`\\mathfrak`};Z({type:`font`,names:[`\\mathrm`,`\\mathit`,`\\mathbf`,`\\mathnormal`,`\\mathsfit`,`\\mathbb`,`\\mathcal`,`\\mathfrak`,`\\mathscr`,`\\mathsf`,`\\mathtt`,`\\Bbb`,`\\bold`,`\\frak`],props:{numArgs:1,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=Pv(t[0]),a=r;return a in Yb&&(a=Yb[a]),{type:`font`,mode:n.mode,font:a.slice(1),body:i}},htmlBuilder:qb,mathmlBuilder:Jb}),Z({type:`mclass`,names:[`\\boldsymbol`,`\\bm`],props:{numArgs:1},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`mclass`,mode:n.mode,mclass:Iy(r),body:[{type:`font`,mode:n.mode,font:`boldsymbol`,body:r}],isCharacterBox:tg(r)}}}),Z({type:`font`,names:[`\\rm`,`\\sf`,`\\tt`,`\\bf`,`\\it`,`\\cal`],props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,breakOnTokenText:i}=e,{mode:a}=n,o=n.parseExpression(!0,i);return{type:`font`,mode:a,font:`math`+r.slice(1),body:{type:`ordgroup`,mode:n.mode,body:o}}},htmlBuilder:qb,mathmlBuilder:Jb});var Xb=(e,t)=>{var n=t.style,r=n.fracNum(),i=n.fracDen(),a=t.havingStyle(r),o=Kv(e.numer,a,t);if(e.continued){var s=8.5/t.fontMetrics().ptPerEm,c=3.5/t.fontMetrics().ptPerEm;o.height=o.height<s?s:o.height,o.depth=o.depth<c?c:o.depth}a=t.havingStyle(i);var l=Kv(e.denom,a,t),u,d,f;e.hasBarLine?(e.barSize?(d=qg(e.barSize,t),u=mv(`frac-line`,t,d)):u=mv(`frac-line`,t),d=u.height,f=u.height):(u=null,d=0,f=t.fontMetrics().defaultRuleThickness);var p,m,h;n.size===wg.DISPLAY.size?(p=t.fontMetrics().num1,m=d>0?3*f:7*f,h=t.fontMetrics().denom1):(d>0?(p=t.fontMetrics().num2,m=f):(p=t.fontMetrics().num3,m=3*f),h=t.fontMetrics().denom2);var g;if(u){var _=t.fontMetrics().axisHeight;p-o.depth-(_+.5*d)<m&&(p+=m-(p-o.depth-(_+.5*d))),_-.5*d-(l.height-h)<m&&(h+=m-(_-.5*d-(l.height-h)));var v=-(_-.5*d);g=yv({positionType:`individualShift`,children:[{type:`elem`,elem:l,shift:h},{type:`elem`,elem:u,shift:v},{type:`elem`,elem:o,shift:-p}]})}else{var y=p-o.depth-(l.height-h);y<m&&(p+=.5*(m-y),h+=.5*(m-y)),g=yv({positionType:`individualShift`,children:[{type:`elem`,elem:l,shift:h},{type:`elem`,elem:o,shift:-p}]})}a=t.havingStyle(n),g.height*=a.sizeMultiplier/t.sizeMultiplier,g.depth*=a.sizeMultiplier/t.sizeMultiplier;var b=n.size===wg.DISPLAY.size?t.fontMetrics().delim1:n.size===wg.SCRIPTSCRIPT.size?t.havingStyle(wg.SCRIPT).fontMetrics().delim2:t.fontMetrics().delim2,x=e.leftDelim==null?Gv(t,[`mopen`]):Sb(e.leftDelim,b,!0,t.havingStyle(n),e.mode,[`mopen`]),S=e.continued?X([]):e.rightDelim==null?Gv(t,[`mclose`]):Sb(e.rightDelim,b,!0,t.havingStyle(n),e.mode,[`mclose`]);return X([`mord`].concat(a.sizingClasses(t)),[x,X([`mfrac`],[g]),S],t)},Zb=(e,t)=>{var n=new Q(`mfrac`,[sy(e.numer,t),sy(e.denom,t)]);if(!e.hasBarLine)n.setAttribute(`linethickness`,`0px`);else if(e.barSize){var r=qg(e.barSize,t);n.setAttribute(`linethickness`,B(r))}if(e.leftDelim!=null||e.rightDelim!=null){var i=[];if(e.leftDelim!=null){var a=new Q(`mo`,[new Xv(e.leftDelim.replace(`\\`,``))]);a.setAttribute(`fence`,`true`),i.push(a)}if(i.push(n),e.rightDelim!=null){var o=new Q(`mo`,[new Xv(e.rightDelim.replace(`\\`,``))]);o.setAttribute(`fence`,`true`),i.push(o)}return ty(i)}return n},Qb=(e,t)=>t?{type:`styling`,mode:e.mode,style:t,body:[e]}:e;Z({type:`genfrac`,names:[`\\cfrac`,`\\dfrac`,`\\frac`,`\\tfrac`,`\\dbinom`,`\\binom`,`\\tbinom`,`\\\\atopfrac`,`\\\\bracefrac`,`\\\\brackfrac`],props:{numArgs:2,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=t[1],o,s=null,c=null;switch(r){case`\\cfrac`:case`\\dfrac`:case`\\frac`:case`\\tfrac`:o=!0;break;case`\\\\atopfrac`:o=!1;break;case`\\dbinom`:case`\\binom`:case`\\tbinom`:o=!1,s=`(`,c=`)`;break;case`\\\\bracefrac`:o=!1,s=`\\{`,c=`\\}`;break;case`\\\\brackfrac`:o=!1,s=`[`,c=`]`;break;default:throw Error(`Unrecognized genfrac command`)}var l=r===`\\cfrac`,u=null;return l||r.startsWith(`\\d`)?u=`display`:r.startsWith(`\\t`)&&(u=`text`),Qb({type:`genfrac`,mode:n.mode,numer:i,denom:a,continued:l,hasBarLine:o,leftDelim:s,rightDelim:c,barSize:null},u)},htmlBuilder:Xb,mathmlBuilder:Zb}),Z({type:`infix`,names:[`\\over`,`\\choose`,`\\atop`,`\\brace`,`\\brack`],props:{numArgs:0,infix:!0},handler(e){var{parser:t,funcName:n,token:r}=e,i;switch(n){case`\\over`:i=`\\frac`;break;case`\\choose`:i=`\\binom`;break;case`\\atop`:i=`\\\\atopfrac`;break;case`\\brace`:i=`\\\\bracefrac`;break;case`\\brack`:i=`\\\\brackfrac`;break;default:throw Error(`Unrecognized infix genfrac command`)}return{type:`infix`,mode:t.mode,replaceWith:i,token:r}}});var $b=[`display`,`text`,`script`,`scriptscript`],ex=function(e){var t=null;return e.length>0&&(t=e,t=t===`.`?null:t),t};Z({type:`genfrac`,names:[`\\genfrac`],props:{numArgs:6,allowedInArgument:!0,argTypes:[`math`,`math`,`size`,`text`,`math`,`math`]},handler(e,t){var{parser:n}=e,r=t[4],i=t[5],a=Pv(t[0]),o=a.type===`atom`&&a.family===`open`?ex(a.text):null,s=Pv(t[1]),c=s.type===`atom`&&s.family===`close`?ex(s.text):null,l=Ey(t[2],`size`),u,d=null;l.isBlank?u=!0:(d=l.value,u=d.number>0);var f=null,p=t[3];if(p.type===`ordgroup`){if(p.body.length>0){var m=Ey(p.body[0],`textord`);f=$b[Number(m.text)]}}else p=Ey(p,`textord`),f=$b[Number(p.text)];return Qb({type:`genfrac`,mode:n.mode,numer:r,denom:i,continued:!1,hasBarLine:u,barSize:d,leftDelim:o,rightDelim:c},f)}}),Z({type:`infix`,names:[`\\above`],props:{numArgs:1,argTypes:[`size`],infix:!0},handler(e,t){var{parser:n,funcName:r,token:i}=e;return{type:`infix`,mode:n.mode,replaceWith:`\\\\abovefrac`,size:Ey(t[0],`size`).value,token:i}}}),Z({type:`genfrac`,names:[`\\\\abovefrac`],props:{numArgs:3,argTypes:[`math`,`size`,`math`]},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=Ey(t[1],`infix`).size;if(!a)throw Error(`\\\\abovefrac expected size, but got `+String(a));var o=t[2],s=a.number>0;return{type:`genfrac`,mode:n.mode,numer:i,denom:o,continued:!1,hasBarLine:s,barSize:a,leftDelim:null,rightDelim:null}}});var tx=(e,t)=>{var n=t.style,r,i;e.type===`supsub`?(r=e.sup?Kv(e.sup,t.havingStyle(n.sup()),t):Kv(e.sub,t.havingStyle(n.sub()),t),i=Ey(e.base,`horizBrace`)):i=Ey(e,`horizBrace`);var a=Kv(i.base,t.havingBaseStyle(wg.DISPLAY)),o=xy(i,t),s=i.isOver?yv({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`kern`,size:.1},{type:`elem`,elem:o,wrapperClasses:[`svg-align`]}]}):yv({positionType:`bottom`,positionData:a.depth+.1+o.height,children:[{type:`elem`,elem:o,wrapperClasses:[`svg-align`]},{type:`kern`,size:.1},{type:`elem`,elem:a}]});if(r){var c=X([`minner`,i.isOver?`mover`:`munder`],[s],t);s=i.isOver?yv({positionType:`firstBaseline`,children:[{type:`elem`,elem:c},{type:`kern`,size:.2},{type:`elem`,elem:r}]}):yv({positionType:`bottom`,positionData:c.depth+.2+r.height+r.depth,children:[{type:`elem`,elem:r},{type:`kern`,size:.2},{type:`elem`,elem:c}]})}return X([`minner`,i.isOver?`mover`:`munder`],[s],t)};Z({type:`horizBrace`,names:[`\\overbrace`,`\\underbrace`,`\\overbracket`,`\\underbracket`],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:`horizBrace`,mode:n.mode,label:r,isOver:r.includes(`\\over`),base:t[0]}},htmlBuilder:tx,mathmlBuilder:(e,t)=>{var n=vy(e.label);return new Q(e.isOver?`mover`:`munder`,[sy(e.base,t),n])}}),Z({type:`href`,names:[`\\href`],props:{numArgs:2,argTypes:[`url`,`original`],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[1],i=Ey(t[0],`url`).url;return n.settings.isTrusted({command:`\\href`,url:i})?{type:`href`,mode:n.mode,href:i,body:Fv(r)}:n.formatUnsupportedCmd(`\\href`)},htmlBuilder:(e,t)=>{var n=Bv(e.body,t,!1);return hv(e.href,[],n,t)},mathmlBuilder:(e,t)=>{var n=oy(e.body,t);return n instanceof Q||(n=new Q(`mrow`,[n])),n.setAttribute(`href`,e.href),n}}),Z({type:`href`,names:[`\\url`],props:{numArgs:1,argTypes:[`url`],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=Ey(t[0],`url`).url;if(!n.settings.isTrusted({command:`\\url`,url:r}))return n.formatUnsupportedCmd(`\\url`);for(var i=[],a=0;a<r.length;a++){var o=r[a];o===`~`&&(o=`\\textasciitilde`),i.push({type:`textord`,mode:`text`,text:o})}var s={type:`text`,mode:n.mode,font:`\\texttt`,body:i};return{type:`href`,mode:n.mode,href:r,body:Fv(s)}}}),Z({type:`hbox`,names:[`\\hbox`],props:{numArgs:1,argTypes:[`text`],allowedInText:!0,primitive:!0},handler(e,t){var{parser:n}=e;return{type:`hbox`,mode:n.mode,body:Fv(t[0])}},htmlBuilder(e,t){return gv(Bv(e.body,t.withFont(``),!1))},mathmlBuilder(e,t){return new Q(`mrow`,ay(e.body,t.withFont(``)))}}),Z({type:`html`,names:[`\\htmlClass`,`\\htmlId`,`\\htmlStyle`,`\\htmlData`],props:{numArgs:2,argTypes:[`raw`,`original`],allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,token:i}=e,a=Ey(t[0],`raw`).string,o=t[1];n.settings.strict&&n.settings.reportNonstrict(`htmlExtension`,`HTML extension is disabled on strict mode`);var s,c={};switch(r){case`\\htmlClass`:c.class=a,s={command:`\\htmlClass`,class:a};break;case`\\htmlId`:c.id=a,s={command:`\\htmlId`,id:a};break;case`\\htmlStyle`:c.style=a,s={command:`\\htmlStyle`,style:a};break;case`\\htmlData`:for(var l=a.split(`,`),u=0;u<l.length;u++){var d=l[u],f=d.indexOf(`=`);if(f<0)throw new z(`\\htmlData key/value '`+d+`' missing equals sign`);var p=d.slice(0,f),m=d.slice(f+1);c[`data-`+p.trim()]=m}s={command:`\\htmlData`,attributes:c};break;default:throw Error(`Unrecognized html command`)}return n.settings.isTrusted(s)?{type:`html`,mode:n.mode,attributes:c,body:Fv(o)}:n.formatUnsupportedCmd(r)},htmlBuilder:(e,t)=>{var n=Bv(e.body,t,!1),r=[`enclosing`];e.attributes.class&&r.push(...e.attributes.class.trim().split(/\s+/));var i=X(r,n,t);for(var a in e.attributes)a!==`class`&&e.attributes.hasOwnProperty(a)&&i.setAttribute(a,e.attributes[a]);return i},mathmlBuilder:(e,t)=>oy(e.body,t)}),Z({type:`htmlmathml`,names:[`\\html@mathml`],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e;return{type:`htmlmathml`,mode:n.mode,html:Fv(t[0]),mathml:Fv(t[1])}},htmlBuilder:(e,t)=>gv(Bv(e.html,t,!1)),mathmlBuilder:(e,t)=>oy(e.mathml,t)});var nx=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:`bp`};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new z(`Invalid size: '`+e+`' in \\includegraphics`);var n={number:+(t[1]+t[2]),unit:t[3]};if(!Kg(n))throw new z(`Invalid unit: '`+n.unit+`' in \\includegraphics.`);return n};Z({type:`includegraphics`,names:[`\\includegraphics`],props:{numArgs:1,numOptionalArgs:1,argTypes:[`raw`,`url`],allowedInText:!1},handler:(e,t,n)=>{var{parser:r}=e,i={number:0,unit:`em`},a={number:.9,unit:`em`},o={number:0,unit:`em`},s=``;if(n[0])for(var c=Ey(n[0],`raw`).string.split(`,`),l=0;l<c.length;l++){var u=c[l].split(`=`);if(u.length===2){var d=u[1].trim();switch(u[0].trim()){case`alt`:s=d;break;case`width`:i=nx(d);break;case`height`:a=nx(d);break;case`totalheight`:o=nx(d);break;default:throw new z(`Invalid key: '`+u[0]+`' in \\includegraphics.`)}}}var f=Ey(t[0],`url`).url;return s===``&&(s=f,s=s.replace(/^.*[\\/]/,``),s=s.substring(0,s.lastIndexOf(`.`))),r.settings.isTrusted({command:`\\includegraphics`,url:f})?{type:`includegraphics`,mode:r.mode,alt:s,width:i,height:a,totalheight:o,src:f}:r.formatUnsupportedCmd(`\\includegraphics`)},htmlBuilder:(e,t)=>{var n=qg(e.height,t),r=0;e.totalheight.number>0&&(r=qg(e.totalheight,t)-n);var i=0;e.width.number>0&&(i=qg(e.width,t));var a={height:B(n+r)};i>0&&(a.width=B(i)),r>0&&(a.verticalAlign=B(-r));var o=new n_(e.src,e.alt,a);return o.height=n,o.depth=r,o},mathmlBuilder:(e,t)=>{var n=new Q(`mglyph`,[]);n.setAttribute(`alt`,e.alt);var r=qg(e.height,t),i=0;if(e.totalheight.number>0&&(i=qg(e.totalheight,t)-r,n.setAttribute(`valign`,B(-i))),n.setAttribute(`height`,B(r+i)),e.width.number>0){var a=qg(e.width,t);n.setAttribute(`width`,B(a))}return n.setAttribute(`src`,e.src),n}}),Z({type:`kern`,names:[`\\kern`,`\\mkern`,`\\hskip`,`\\mskip`],props:{numArgs:1,argTypes:[`size`],primitive:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,i=Ey(t[0],`size`);if(n.settings.strict){var a=r[1]===`m`,o=i.value.unit===`mu`;a?(o||n.settings.reportNonstrict(`mathVsTextUnits`,`LaTeX's `+r+` supports only mu units, `+(`not `+i.value.unit+` units`)),n.mode!==`math`&&n.settings.reportNonstrict(`mathVsTextUnits`,`LaTeX's `+r+` works only in math mode`)):o&&n.settings.reportNonstrict(`mathVsTextUnits`,`LaTeX's `+r+` doesn't support mu units`)}return{type:`kern`,mode:n.mode,dimension:i.value}},htmlBuilder(e,t){return bv(e.dimension,t)},mathmlBuilder(e,t){return new Zv(qg(e.dimension,t))}}),Z({type:`lap`,names:[`\\mathllap`,`\\mathrlap`,`\\mathclap`],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:`lap`,mode:n.mode,alignment:r.slice(5),body:i}},htmlBuilder:(e,t)=>{var n;e.alignment===`clap`?(n=X([],[Kv(e.body,t)]),n=X([`inner`],[n],t)):n=X([`inner`],[Kv(e.body,t)]);var r=X([`fix`],[]),i=X([e.alignment],[n,r],t),a=X([`strut`]);return a.style.height=B(i.height+i.depth),i.depth&&(a.style.verticalAlign=B(-i.depth)),i.children.unshift(a),i=X([`thinbox`],[i],t),X([`mord`,`vbox`],[i],t)},mathmlBuilder:(e,t)=>{var n=new Q(`mpadded`,[sy(e.body,t)]);if(e.alignment!==`rlap`){var r=e.alignment===`llap`?`-1`:`-0.5`;n.setAttribute(`lspace`,r+`width`)}return n.setAttribute(`width`,`0px`),n}}),Z({type:`styling`,names:[`\\(`,`$`],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){var{funcName:n,parser:r}=e,i=r.mode;r.switchMode(`math`);var a=n===`\\(`?`\\)`:`$`,o=r.parseExpression(!1,a);return r.expect(a),r.switchMode(i),{type:`styling`,mode:r.mode,style:`text`,resetFont:!0,body:o}}}),Z({type:`text`,names:[`\\)`,`\\]`],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){throw new z(`Mismatched `+e.funcName)}});var rx=(e,t)=>{switch(t.style.size){case wg.DISPLAY.size:return e.display;case wg.TEXT.size:return e.text;case wg.SCRIPT.size:return e.script;case wg.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};Z({type:`mathchoice`,names:[`\\mathchoice`],props:{numArgs:4,primitive:!0},handler:(e,t)=>{var{parser:n}=e;return{type:`mathchoice`,mode:n.mode,display:Fv(t[0]),text:Fv(t[1]),script:Fv(t[2]),scriptscript:Fv(t[3])}},htmlBuilder:(e,t)=>gv(Bv(rx(e,t),t,!1)),mathmlBuilder:(e,t)=>oy(rx(e,t),t)});var ix=(e,t,n,r,i,a,o)=>{e=X([],[e]);var s=n&&tg(n),c,l;if(t){var u=Kv(t,r.havingStyle(i.sup()),r);l={elem:u,kern:Math.max(r.fontMetrics().bigOpSpacing1,r.fontMetrics().bigOpSpacing3-u.depth)}}if(n){var d=Kv(n,r.havingStyle(i.sub()),r);c={elem:d,kern:Math.max(r.fontMetrics().bigOpSpacing2,r.fontMetrics().bigOpSpacing4-d.height)}}var f;if(l&&c)f=yv({positionType:`bottom`,positionData:r.fontMetrics().bigOpSpacing5+c.elem.height+c.elem.depth+c.kern+e.depth+o,children:[{type:`kern`,size:r.fontMetrics().bigOpSpacing5},{type:`elem`,elem:c.elem,marginLeft:B(-a)},{type:`kern`,size:c.kern},{type:`elem`,elem:e},{type:`kern`,size:l.kern},{type:`elem`,elem:l.elem,marginLeft:B(a)},{type:`kern`,size:r.fontMetrics().bigOpSpacing5}]});else if(c)f=yv({positionType:`top`,positionData:e.height-o,children:[{type:`kern`,size:r.fontMetrics().bigOpSpacing5},{type:`elem`,elem:c.elem,marginLeft:B(-a)},{type:`kern`,size:c.kern},{type:`elem`,elem:e}]});else if(l)f=yv({positionType:`bottom`,positionData:e.depth+o,children:[{type:`elem`,elem:e},{type:`kern`,size:l.kern},{type:`elem`,elem:l.elem,marginLeft:B(a)},{type:`kern`,size:r.fontMetrics().bigOpSpacing5}]});else return e;var p=[f];if(c&&a!==0&&!s){var m=X([`mspace`],[],r);m.style.marginRight=B(a),p.unshift(m)}return X([`mop`,`op-limits`],p,r)},ax=new Set([`\\smallint`]),ox=(e,t)=>{var n,r,i=!1,a;e.type===`supsub`?(n=e.sup,r=e.sub,a=Ey(e.base,`op`),i=!0):a=Ey(e,`op`);var o=t.style,s=!1;o.size===wg.DISPLAY.size&&a.symbol&&!ax.has(a.name)&&(s=!0);var c,l;if(a.symbol){var u=s?`Size2-Regular`:`Size1-Regular`,d=``;if((a.name===`\\oiint`||a.name===`\\oiiint`)&&(d=a.name.slice(1),a.name=d===`oiint`?`\\iint`:`\\iiint`),c=ov(a.name,u,`math`,t,[`mop`,`op-symbol`,s?`large-op`:`small-op`]),l=c.italic,d.length>0){var f=wv(d+`Size`+(s?`2`:`1`),t);c=yv({positionType:`individualShift`,children:[{type:`elem`,elem:c,shift:0},{type:`elem`,elem:f,shift:s?.08:0}]}),a.name=`\\`+d,c.classes.unshift(`mop`),c.italic=l}}else if(a.body){var p=Bv(a.body,t,!0);p.length===1&&p[0]instanceof i_?(c=p[0],c.classes[0]=`mop`):c=X([`mop`],p,t)}else{for(var m=[],h=1;h<a.name.length;h++)m.push(sv(a.name[h],a.mode,t));c=X([`mop`],m,t)}var g=0,_=0;return(c instanceof i_||a.name===`\\oiint`||a.name===`\\oiiint`)&&!a.suppressBaseShift&&(g=(c.height-c.depth)/2-t.fontMetrics().axisHeight,_=c.italic??0),i?ix(c,n,r,t,o,_,g):(g&&(c.style.position=`relative`,c.style.top=B(g)),c)},sx=(e,t)=>{var n;if(e.symbol)n=new Q(`mo`,[ey(e.name,e.mode)]),ax.has(e.name)&&n.setAttribute(`largeop`,`false`);else if(e.body)n=new Q(`mo`,ay(e.body,t));else{n=new Q(`mi`,[new Xv(e.name.slice(1))]);var r=new Q(`mo`,[ey(`⁡`,`text`)]);n=e.parentIsSupSub?new Q(`mrow`,[n,r]):Yv([n,r])}return n},cx={"∏":`\\prod`,"∐":`\\coprod`,"∑":`\\sum`,"⋀":`\\bigwedge`,"⋁":`\\bigvee`,"⋂":`\\bigcap`,"⋃":`\\bigcup`,"⨀":`\\bigodot`,"⨁":`\\bigoplus`,"⨂":`\\bigotimes`,"⨄":`\\biguplus`,"⨆":`\\bigsqcup`};Z({type:`op`,names:`\\coprod.\\bigvee.\\bigwedge.\\biguplus.\\bigcap.\\bigcup.\\intop.\\prod.\\sum.\\bigotimes.\\bigoplus.\\bigodot.\\bigsqcup.\\smallint.∏.∐.∑.⋀.⋁.⋂.⋃.⨀.⨁.⨂.⨄.⨆`.split(`.`),props:{numArgs:0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=r;return i.length===1&&(i=cx[i]),{type:`op`,mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:ox,mathmlBuilder:sx}),Z({type:`op`,names:[`\\mathop`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`op`,mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Fv(r)}},htmlBuilder:ox,mathmlBuilder:sx});var lx={"∫":`\\int`,"∬":`\\iint`,"∭":`\\iiint`,"∮":`\\oint`,"∯":`\\oiint`,"∰":`\\oiiint`};Z({type:`op`,names:`\\arcsin.\\arccos.\\arctan.\\arctg.\\arcctg.\\arg.\\ch.\\cos.\\cosec.\\cosh.\\cot.\\cotg.\\coth.\\csc.\\ctg.\\cth.\\deg.\\dim.\\exp.\\hom.\\ker.\\lg.\\ln.\\log.\\sec.\\sin.\\sinh.\\sh.\\tan.\\tanh.\\tg.\\th`.split(`.`),props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:`op`,mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:ox,mathmlBuilder:sx}),Z({type:`op`,names:[`\\det`,`\\gcd`,`\\inf`,`\\lim`,`\\max`,`\\min`,`\\Pr`,`\\sup`],props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:`op`,mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:ox,mathmlBuilder:sx}),Z({type:`op`,names:[`\\int`,`\\iint`,`\\iiint`,`\\oint`,`\\oiint`,`\\oiiint`,`∫`,`∬`,`∭`,`∮`,`∯`,`∰`],props:{numArgs:0,allowedInArgument:!0},handler(e){var{parser:t,funcName:n}=e,r=n;return r.length===1&&(r=lx[r]),{type:`op`,mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:ox,mathmlBuilder:sx});var ux=(e,t)=>{var n,r,i=!1,a;e.type===`supsub`?(n=e.sup,r=e.sub,a=Ey(e.base,`operatorname`),i=!0):a=Ey(e,`operatorname`);var o;if(a.body.length>0){for(var s=Bv(a.body.map(e=>{var t=`text`in e?e.text:void 0;return typeof t==`string`?{type:`textord`,mode:e.mode,text:t}:e}),t.withFont(`mathrm`),!0),c=0;c<s.length;c++){var l=s[c];l instanceof i_&&(l.text=l.text.replace(/\u2212/,`-`).replace(/\u2217/,`*`))}o=X([`mop`],s,t)}else o=X([`mop`],[],t);return i?ix(o,n,r,t,t.style,0,0):o};Z({type:`operatorname`,names:[`\\operatorname@`,`\\operatornamewithlimits`],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:`operatorname`,mode:n.mode,body:Fv(i),alwaysHandleSupSub:r===`\\operatornamewithlimits`,limits:!1,parentIsSupSub:!1}},htmlBuilder:ux,mathmlBuilder:(e,t)=>{for(var n=ay(e.body,t.withFont(`mathrm`)),r=!0,i=0;i<n.length;i++){var a=n[i];if(!(a instanceof Zv))if(a instanceof Q)switch(a.type){case`mi`:case`mn`:case`mspace`:case`mtext`:break;case`mo`:var o=a.children[0];a.children.length===1&&o instanceof Xv?o.text=o.text.replace(/\u2212/,`-`).replace(/\u2217/,`*`):r=!1;break;default:r=!1}else r=!1}r&&(n=[new Xv(n.map(e=>e.toText()).join(``))]);var s=new Q(`mi`,n);s.setAttribute(`mathvariant`,`normal`);var c=new Q(`mo`,[ey(`⁡`,`text`)]);return e.parentIsSupSub?new Q(`mrow`,[s,c]):Yv([s,c])}}),$(`\\operatorname`,`\\@ifstar\\operatornamewithlimits\\operatorname@`),Nv({type:`ordgroup`,htmlBuilder(e,t){return e.semisimple?gv(Bv(e.body,t,!1)):X([`mord`],Bv(e.body,t,!0),t)},mathmlBuilder(e,t){return oy(e.body,t,!0)}}),Z({type:`overline`,names:[`\\overline`],props:{numArgs:1},handler(e,t){var{parser:n}=e,r=t[0];return{type:`overline`,mode:n.mode,body:r}},htmlBuilder(e,t){var n=Kv(e.body,t.havingCrampedStyle()),r=mv(`overline-line`,t),i=t.fontMetrics().defaultRuleThickness;return X([`mord`,`overline`],[yv({positionType:`firstBaseline`,children:[{type:`elem`,elem:n},{type:`kern`,size:3*i},{type:`elem`,elem:r},{type:`kern`,size:i}]})],t)},mathmlBuilder(e,t){var n=new Q(`mo`,[new Xv(`‾`)]);n.setAttribute(`stretchy`,`true`);var r=new Q(`mover`,[sy(e.body,t),n]);return r.setAttribute(`accent`,`true`),r}}),Z({type:`phantom`,names:[`\\phantom`],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`phantom`,mode:n.mode,body:Fv(r)}},htmlBuilder:(e,t)=>gv(Bv(e.body,t.withPhantom(),!1)),mathmlBuilder:(e,t)=>new Q(`mphantom`,ay(e.body,t))}),$(`\\hphantom`,`\\smash{\\phantom{#1}}`),Z({type:`vphantom`,names:[`\\vphantom`],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`vphantom`,mode:n.mode,body:r}},htmlBuilder:(e,t)=>X([`mord`,`rlap`],[X([`inner`],[Kv(e.body,t.withPhantom())]),X([`fix`],[])],t),mathmlBuilder:(e,t)=>{var n=new Q(`mpadded`,[new Q(`mphantom`,ay(Fv(e.body),t))]);return n.setAttribute(`width`,`0px`),n}}),Z({type:`raisebox`,names:[`\\raisebox`],props:{numArgs:2,argTypes:[`size`,`hbox`],allowedInText:!0},handler(e,t){var{parser:n}=e,r=Ey(t[0],`size`).value,i=t[1];return{type:`raisebox`,mode:n.mode,dy:r,body:i}},htmlBuilder(e,t){var n=Kv(e.body,t);return yv({positionType:`shift`,positionData:-qg(e.dy,t),children:[{type:`elem`,elem:n}]})},mathmlBuilder(e,t){var n=new Q(`mpadded`,[sy(e.body,t)]),r=e.dy.number+e.dy.unit;return n.setAttribute(`voffset`,r),n}}),Z({type:`internal`,names:[`\\relax`],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(e){var{parser:t}=e;return{type:`internal`,mode:t.mode}}}),Z({type:`rule`,names:[`\\rule`],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:[`size`,`size`,`size`]},handler(e,t,n){var{parser:r}=e,i=n[0],a=Ey(t[0],`size`),o=Ey(t[1],`size`);return{type:`rule`,mode:r.mode,shift:i&&Ey(i,`size`).value,width:a.value,height:o.value}},htmlBuilder(e,t){var n=X([`mord`,`rule`],[],t),r=qg(e.width,t),i=qg(e.height,t),a=e.shift?qg(e.shift,t):0;return n.style.borderRightWidth=B(r),n.style.borderTopWidth=B(i),n.style.bottom=B(a),n.width=r,n.height=i+a,n.depth=-a,n.maxFontSize=i*1.125*t.sizeMultiplier,n},mathmlBuilder(e,t){var n=qg(e.width,t),r=qg(e.height,t),i=e.shift?qg(e.shift,t):0,a=t.color&&t.getColor()||`black`,o=new Q(`mspace`);o.setAttribute(`mathbackground`,a),o.setAttribute(`width`,B(n)),o.setAttribute(`height`,B(r));var s=new Q(`mpadded`,[o]);return i>=0?s.setAttribute(`height`,B(i)):(s.setAttribute(`height`,B(i)),s.setAttribute(`depth`,B(-i))),s.setAttribute(`voffset`,B(i)),s}});function dx(e,t,n){for(var r=Bv(e,t,!1),i=t.sizeMultiplier/n.sizeMultiplier,a=0;a<r.length;a++){var o=r[a].classes.indexOf(`sizing`);o<0?Array.prototype.push.apply(r[a].classes,t.sizingClasses(n)):r[a].classes[o+1]===`reset-size`+t.size&&(r[a].classes[o+1]=`reset-size`+n.size),r[a].height*=i,r[a].depth*=i}return gv(r)}var fx=[`\\tiny`,`\\sixptsize`,`\\scriptsize`,`\\footnotesize`,`\\small`,`\\normalsize`,`\\large`,`\\Large`,`\\LARGE`,`\\huge`,`\\Huge`];Z({type:`sizing`,names:fx,props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{breakOnTokenText:n,funcName:r,parser:i}=e,a=i.parseExpression(!1,n);return{type:`sizing`,mode:i.mode,size:fx.indexOf(r)+1,body:a}},htmlBuilder:(e,t)=>{var n=t.havingSize(e.size);return dx(e.body,n,t)},mathmlBuilder:(e,t)=>{var n=t.havingSize(e.size),r=new Q(`mstyle`,ay(e.body,n));return r.setAttribute(`mathsize`,B(n.sizeMultiplier)),r}}),Z({type:`smash`,names:[`\\smash`],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,t,n)=>{var{parser:r}=e,i=!1,a=!1,o=n[0]&&Ey(n[0],`ordgroup`);if(o)for(var s,c=0;c<o.body.length;++c){var l=o.body[c];if(s=Dy(l).text,s===`t`)i=!0;else if(s===`b`)a=!0;else{i=!1,a=!1;break}}else i=!0,a=!0;var u=t[0];return{type:`smash`,mode:r.mode,body:u,smashHeight:i,smashDepth:a}},htmlBuilder:(e,t)=>{var n=X([],[Kv(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return n;if(e.smashHeight&&(n.height=0),e.smashDepth&&(n.depth=0),e.smashHeight&&e.smashDepth)return X([`mord`,`smash`],[n],t);if(n.children)for(var r=0;r<n.children.length;r++)e.smashHeight&&(n.children[r].height=0),e.smashDepth&&(n.children[r].depth=0);return X([`mord`],[yv({positionType:`firstBaseline`,children:[{type:`elem`,elem:n}]})],t)},mathmlBuilder:(e,t)=>{var n=new Q(`mpadded`,[sy(e.body,t)]);return e.smashHeight&&n.setAttribute(`height`,`0px`),e.smashDepth&&n.setAttribute(`depth`,`0px`),n}}),Z({type:`sqrt`,names:[`\\sqrt`],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r}=e,i=n[0],a=t[0];return{type:`sqrt`,mode:r.mode,body:a,index:i}},htmlBuilder(e,t){var n=Kv(e.body,t.havingCrampedStyle());n.height===0&&(n.height=t.fontMetrics().xHeight),n=_v(n,t);var r=t.fontMetrics().defaultRuleThickness,i=r;t.style.id<wg.TEXT.id&&(i=t.fontMetrics().xHeight);var a=r+i/4,{span:o,ruleWidth:s,advanceWidth:c}=db(n.height+n.depth+a+r,t),l=o.height-s;l>n.height+n.depth+a&&(a=(a+l-n.height-n.depth)/2);var u=o.height-n.height-a-s;n.style.paddingLeft=B(c);var d=yv({positionType:`firstBaseline`,children:[{type:`elem`,elem:n,wrapperClasses:[`svg-align`]},{type:`kern`,size:-(n.height+u)},{type:`elem`,elem:o},{type:`kern`,size:s}]});if(e.index){var f=t.havingStyle(wg.SCRIPTSCRIPT),p=Kv(e.index,f,t);return X([`mord`,`sqrt`],[X([`root`],[yv({positionType:`shift`,positionData:-(.6*(d.height-d.depth)),children:[{type:`elem`,elem:p}]})]),d],t)}else return X([`mord`,`sqrt`],[d],t)},mathmlBuilder(e,t){var{body:n,index:r}=e;return r?new Q(`mroot`,[sy(n,t),sy(r,t)]):new Q(`msqrt`,[sy(n,t)])}});var px={display:wg.DISPLAY,text:wg.TEXT,script:wg.SCRIPT,scriptscript:wg.SCRIPTSCRIPT};function mx(e){return e in px}Z({type:`styling`,names:[`\\displaystyle`,`\\textstyle`,`\\scriptstyle`,`\\scriptscriptstyle`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,t){var{breakOnTokenText:n,funcName:r,parser:i}=e,a=i.parseExpression(!0,n),o=r.slice(1,r.length-5);if(!mx(o))throw Error(`Unknown style: `+o);return{type:`styling`,mode:i.mode,style:o,body:a}},htmlBuilder(e,t){var n=px[e.style],r=t.havingStyle(n);return e.resetFont&&(r=r.withFont(``)),dx(e.body,r,t)},mathmlBuilder(e,t){var n=px[e.style],r=t.havingStyle(n);e.resetFont&&(r=r.withFont(``));var i=new Q(`mstyle`,ay(e.body,r)),a={display:[`0`,`true`],text:[`0`,`false`],script:[`1`,`false`],scriptscript:[`2`,`false`]}[e.style];return i.setAttribute(`scriptlevel`,a[0]),i.setAttribute(`displaystyle`,a[1]),i}});var hx=function(e,t){var n=e.base;return n?n.type===`op`?n.limits&&(t.style.size===wg.DISPLAY.size||n.alwaysHandleSupSub)?ox:null:n.type===`operatorname`?n.alwaysHandleSupSub&&(t.style.size===wg.DISPLAY.size||n.limits)?ux:null:n.type===`accent`?tg(n.base)?Ay:null:n.type===`horizBrace`&&!e.sub===n.isOver?tx:null:null};Nv({type:`supsub`,htmlBuilder(e,t){var n=hx(e,t);if(n)return n(e,t);var{base:r,sup:i,sub:a}=e,o=Kv(r,t),s,c,l=t.fontMetrics(),u=0,d=0,f=r&&tg(r);if(i){var p=t.havingStyle(t.style.sup());s=Kv(i,p,t),f||(u=o.height-p.fontMetrics().supDrop*p.sizeMultiplier/t.sizeMultiplier)}if(a){var m=t.havingStyle(t.style.sub());c=Kv(a,m,t),f||(d=o.depth+m.fontMetrics().subDrop*m.sizeMultiplier/t.sizeMultiplier)}var h=t.style===wg.DISPLAY?l.sup1:t.style.cramped?l.sup3:l.sup2,g=t.sizeMultiplier,_=B(.5/l.ptPerEm/g),v=null;if(c){var y=e.base&&e.base.type===`op`&&e.base.name&&(e.base.name===`\\oiint`||e.base.name===`\\oiiint`);(o instanceof i_||y)&&(v=B(-(o.italic??0)))}var b;if(s&&c){u=Math.max(u,h,s.depth+.25*l.xHeight),d=Math.max(d,l.sub2);var x=4*l.defaultRuleThickness;if(u-s.depth-(c.height-d)<x){d=x-(u-s.depth)+c.height;var S=.8*l.xHeight-(u-s.depth);S>0&&(u+=S,d-=S)}b=yv({positionType:`individualShift`,children:[{type:`elem`,elem:c,shift:d,marginRight:_,marginLeft:v},{type:`elem`,elem:s,shift:-u,marginRight:_}]})}else if(c)d=Math.max(d,l.sub1,c.height-.8*l.xHeight),b=yv({positionType:`shift`,positionData:d,children:[{type:`elem`,elem:c,marginLeft:v,marginRight:_}]});else if(s)u=Math.max(u,h,s.depth+.25*l.xHeight),b=yv({positionType:`shift`,positionData:-u,children:[{type:`elem`,elem:s,marginRight:_}]});else throw Error(`supsub must have either sup or sub.`);return X([Wv(o,`right`)||`mord`],[o,X([`msupsub`],[b])],t)},mathmlBuilder(e,t){var n=!1,r,i;e.base&&e.base.type===`horizBrace`&&(i=!!e.sup,i===e.base.isOver&&(n=!0,r=e.base.isOver)),e.base&&(e.base.type===`op`||e.base.type===`operatorname`)&&(e.base.parentIsSupSub=!0);var a=[sy(e.base,t)];e.sub&&a.push(sy(e.sub,t)),e.sup&&a.push(sy(e.sup,t));var o;if(n)o=r?`mover`:`munder`;else if(!e.sub){var s=e.base;o=s&&s.type===`op`&&s.limits&&(t.style===wg.DISPLAY||s.alwaysHandleSupSub)||s&&s.type===`operatorname`&&s.alwaysHandleSupSub&&(s.limits||t.style===wg.DISPLAY)?`mover`:`msup`}else if(e.sup){var c=e.base;o=c&&c.type===`op`&&c.limits&&t.style===wg.DISPLAY||c&&c.type===`operatorname`&&c.alwaysHandleSupSub&&(t.style===wg.DISPLAY||c.limits)?`munderover`:`msubsup`}else{var l=e.base;o=l&&l.type===`op`&&l.limits&&(t.style===wg.DISPLAY||l.alwaysHandleSupSub)||l&&l.type===`operatorname`&&l.alwaysHandleSupSub&&(l.limits||t.style===wg.DISPLAY)?`munder`:`msub`}return new Q(o,a)}}),Nv({type:`atom`,htmlBuilder(e,t){return sv(e.text,e.mode,t,[`m`+e.family])},mathmlBuilder(e,t){var n=new Q(`mo`,[ey(e.text,e.mode)]);if(e.family===`bin`){var r=ry(e,t);r===`bold-italic`&&n.setAttribute(`mathvariant`,r)}else e.family===`punct`?n.setAttribute(`separator`,`true`):(e.family===`open`||e.family===`close`)&&n.setAttribute(`stretchy`,`false`);return n}});var gx={mi:`italic`,mn:`normal`,mtext:`normal`};Nv({type:`mathord`,htmlBuilder(e,t){return lv(e,t,`mathord`)},mathmlBuilder(e,t){var n=new Q(`mi`,[ey(e.text,e.mode,t)]),r=ry(e,t)||`italic`;return r!==gx[n.type]&&n.setAttribute(`mathvariant`,r),n}}),Nv({type:`textord`,htmlBuilder(e,t){return lv(e,t,`textord`)},mathmlBuilder(e,t){var n=ey(e.text,e.mode,t),r=ry(e,t)||`normal`,i=e.mode===`text`?new Q(`mtext`,[n]):/[0-9]/.test(e.text)?new Q(`mn`,[n]):e.text===`\\prime`?new Q(`mo`,[n]):new Q(`mi`,[n]);return r!==gx[i.type]&&i.setAttribute(`mathvariant`,r),i}});var _x={"\\nobreak":`nobreak`,"\\allowbreak":`allowbreak`},vx={" ":{},"\\ ":{},"~":{className:`nobreak`},"\\space":{},"\\nobreakspace":{className:`nobreak`}};Nv({type:`spacing`,htmlBuilder(e,t){if(vx.hasOwnProperty(e.text)){var n=vx[e.text].className||``;if(e.mode===`text`){var r=lv(e,t,`textord`);return r.classes.push(n),r}else return X([`mspace`,n],[sv(e.text,e.mode,t)],t)}else if(_x.hasOwnProperty(e.text))return X([`mspace`,_x[e.text]],[],t);else throw new z(`Unknown type of space "`+e.text+`"`)},mathmlBuilder(e,t){var n;if(vx.hasOwnProperty(e.text))n=new Q(`mtext`,[new Xv(`\xA0`)]);else if(_x.hasOwnProperty(e.text))return new Q(`mspace`);else throw new z(`Unknown type of space "`+e.text+`"`);return n}});var yx=()=>{var e=new Q(`mtd`,[]);return e.setAttribute(`width`,`50%`),e};Nv({type:`tag`,mathmlBuilder(e,t){var n=new Q(`mtable`,[new Q(`mtr`,[yx(),new Q(`mtd`,[oy(e.body,t)]),yx(),new Q(`mtd`,[oy(e.tag,t)])])]);return n.setAttribute(`width`,`100%`),n}});var bx={"\\text":void 0,"\\textrm":`textrm`,"\\textsf":`textsf`,"\\texttt":`texttt`,"\\textnormal":`textrm`},xx={"\\textbf":`textbf`,"\\textmd":`textmd`},Sx={"\\textit":`textit`,"\\textup":`textup`},Cx=(e,t)=>{var n=e.font;return n?bx[n]?t.withTextFontFamily(bx[n]):xx[n]?t.withTextFontWeight(xx[n]):n===`\\emph`?t.fontShape===`textit`?t.withTextFontShape(`textup`):t.withTextFontShape(`textit`):t.withTextFontShape(Sx[n]):t};Z({type:`text`,names:[`\\text`,`\\textrm`,`\\textsf`,`\\texttt`,`\\textnormal`,`\\textbf`,`\\textmd`,`\\textit`,`\\textup`,`\\emph`],props:{numArgs:1,argTypes:[`text`],allowedInArgument:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:`text`,mode:n.mode,body:Fv(i),font:r}},htmlBuilder(e,t){var n=Cx(e,t);return X([`mord`,`text`],Bv(e.body,n,!0),n)},mathmlBuilder(e,t){var n=Cx(e,t);return oy(e.body,n)}}),Z({type:`underline`,names:[`\\underline`],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:`underline`,mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=Kv(e.body,t),r=mv(`underline-line`,t),i=t.fontMetrics().defaultRuleThickness;return X([`mord`,`underline`],[yv({positionType:`top`,positionData:n.height,children:[{type:`kern`,size:i},{type:`elem`,elem:r},{type:`kern`,size:3*i},{type:`elem`,elem:n}]})],t)},mathmlBuilder(e,t){var n=new Q(`mo`,[new Xv(`‾`)]);n.setAttribute(`stretchy`,`true`);var r=new Q(`munder`,[sy(e.body,t),n]);return r.setAttribute(`accentunder`,`true`),r}}),Z({type:`vcenter`,names:[`\\vcenter`],props:{numArgs:1,argTypes:[`original`],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:`vcenter`,mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=Kv(e.body,t),r=t.fontMetrics().axisHeight;return yv({positionType:`shift`,positionData:.5*(n.height-r-(n.depth+r)),children:[{type:`elem`,elem:n}]})},mathmlBuilder(e,t){return new Q(`mrow`,[new Q(`mpadded`,[sy(e.body,t)],[`vcenter`])])}}),Z({type:`verb`,names:[`\\verb`],props:{numArgs:0,allowedInText:!0},handler(e,t,n){throw new z(`\\verb ended by end of line instead of matching delimiter`)},htmlBuilder(e,t){for(var n=wx(e),r=[],i=t.havingStyle(t.style.text()),a=0;a<n.length;a++){var o=n[a];o===`~`&&(o=`\\textasciitilde`),r.push(ov(o,`Typewriter-Regular`,e.mode,i,[`mord`,`texttt`]))}return X([`mord`,`text`].concat(i.sizingClasses(t)),dv(r),i)},mathmlBuilder(e,t){var n=new Q(`mtext`,[new Xv(wx(e))]);return n.setAttribute(`mathvariant`,`monospace`),n}});var wx=e=>e.body.replace(/ /g,e.star?`␣`:`\xA0`),Tx=Av,Ex=`[ \r
	]`,Dx=`\\\\[a-zA-Z@]+`,Ox=`\\\\[^\ud800-\udfff]`,kx=`(`+Dx+`)`+Ex+`*`,Ax=`\\\\(
|[ \r	]+
?)[ \r	]*`,jx=`[̀-ͯ]`,Mx=RegExp(jx+`+$`),Nx=`(`+Ex+`+)|`+(Ax+`|`)+`([!-\\[\\]-‧‪-퟿豈-￿]`+(jx+`*`)+`|[\ud800-\udbff][\udc00-\udfff]`+(jx+`*`)+`|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5`+(`|`+kx)+(`|`+Ox+`)`),Px=class{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(Nx,`g`),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new Fb(`EOF`,new Pb(this,t,t));var n=this.tokenRegex.exec(e);if(n===null||n.index!==t)throw new z(`Unexpected character: '`+e[t]+`'`,new Fb(e[t],new Pb(this,t,t+1)));var r=n[6]||n[3]||(n[2]?`\\ `:` `);if(this.catcodes[r]===14){var i=e.indexOf(`
`,this.tokenRegex.lastIndex);return i===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict(`commentAtEnd`,`% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)`)):this.tokenRegex.lastIndex=i+1,this.lex()}return new Fb(r,new Pb(this,t,this.tokenRegex.lastIndex))}},Fx=class{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new z(`Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug`);var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,n){if(n===void 0&&(n=!1),n){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var i=this.undefStack[this.undefStack.length-1];i&&!i.hasOwnProperty(e)&&(i[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}},Ix=Nb;$(`\\noexpand`,function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}}),$(`\\expandafter`,function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}}),$(`\\@firstoftwo`,function(e){return{tokens:e.consumeArgs(2)[0],numArgs:0}}),$(`\\@secondoftwo`,function(e){return{tokens:e.consumeArgs(2)[1],numArgs:0}}),$(`\\@ifnextchar`,function(e){var t=e.consumeArgs(3);e.consumeSpaces();var n=e.future();return t[0].length===1&&t[0][0].text===n.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}}),$(`\\@ifstar`,`\\@ifnextchar *{\\@firstoftwo{#1}}`),$(`\\TextOrMath`,function(e){var t=e.consumeArgs(2);return e.mode===`text`?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var Lx={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};$(`\\char`,function(e){var t=e.popToken(),n,r=0;if(t.text===`'`)n=8,t=e.popToken();else if(t.text===`"`)n=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]===`\\`)r=t.text.charCodeAt(1);else if(t.text===`EOF`)throw new z("\\char` missing argument");else r=t.text.charCodeAt(0);else n=10;if(n){if(r=Lx[t.text],r==null||r>=n)throw new z(`Invalid base-`+n+` digit `+t.text);for(var i;(i=Lx[e.future().text])!=null&&i<n;)r*=n,r+=i,e.popToken()}return`\\@char{`+r+`}`});var Rx=(e,t,n,r)=>{var i=e.consumeArg().tokens;if(i.length!==1)throw new z(`\\newcommand's first argument must be a macro name`);var a=i[0].text,o=e.isDefined(a);if(o&&!t)throw new z(`\\newcommand{`+a+`} attempting to redefine `+(a+`; use \\renewcommand`));if(!o&&!n)throw new z(`\\renewcommand{`+a+`} when command `+a+` does not yet exist; use \\newcommand`);var s=0;if(i=e.consumeArg().tokens,i.length===1&&i[0].text===`[`){for(var c=``,l=e.expandNextToken();l.text!==`]`&&l.text!==`EOF`;)c+=l.text,l=e.expandNextToken();if(!c.match(/^\s*[0-9]+\s*$/))throw new z(`Invalid number of arguments: `+c);s=parseInt(c),i=e.consumeArg().tokens}return o&&r||e.macros.set(a,{tokens:i,numArgs:s}),``};$(`\\newcommand`,e=>Rx(e,!1,!0,!1)),$(`\\renewcommand`,e=>Rx(e,!0,!1,!1)),$(`\\providecommand`,e=>Rx(e,!0,!0,!0)),$(`\\message`,e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(e=>e.text).join(``)),``}),$(`\\errmessage`,e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(e=>e.text).join(``)),``}),$(`\\show`,e=>{var t=e.popToken(),n=t.text;return console.log(t,e.macros.get(n),Tx[n],v_.math[n],v_.text[n]),``}),$(`\\bgroup`,`{`),$(`\\egroup`,`}`),$(`~`,`\\nobreakspace`),$(`\\lq`,"`"),$(`\\rq`,`'`),$(`\\aa`,`\\r a`),$(`\\AA`,`\\r A`),$(`\\textcopyright`,"\\html@mathml{\\textcircled{c}}{\\char`©}"),$(`\\copyright`,`\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}`),$(`\\textregistered`,"\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"),$(`ℬ`,`\\mathscr{B}`),$(`ℰ`,`\\mathscr{E}`),$(`ℱ`,`\\mathscr{F}`),$(`ℋ`,`\\mathscr{H}`),$(`ℐ`,`\\mathscr{I}`),$(`ℒ`,`\\mathscr{L}`),$(`ℳ`,`\\mathscr{M}`),$(`ℛ`,`\\mathscr{R}`),$(`ℭ`,`\\mathfrak{C}`),$(`ℌ`,`\\mathfrak{H}`),$(`ℨ`,`\\mathfrak{Z}`),$(`\\Bbbk`,`\\Bbb{k}`),$(`\\llap`,`\\mathllap{\\textrm{#1}}`),$(`\\rlap`,`\\mathrlap{\\textrm{#1}}`),$(`\\clap`,`\\mathclap{\\textrm{#1}}`),$(`\\mathstrut`,`\\vphantom{(}`),$(`\\underbar`,`\\underline{\\text{#1}}`),$(`\\not`,`\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}`),$(`\\neq`,"\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"),$(`\\ne`,`\\neq`),$(`≠`,`\\neq`),$(`\\notin`,"\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"),$(`∉`,`\\notin`),$(`≘`,"\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"),$(`≙`,"\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"),$(`≚`,"\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"),$(`≛`,"\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"),$(`≝`,"\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"),$(`≞`,"\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"),$(`≟`,"\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"),$(`⟂`,`\\perp`),$(`‼`,`\\mathclose{!\\mkern-0.8mu!}`),$(`∌`,`\\notni`),$(`⌜`,`\\ulcorner`),$(`⌝`,`\\urcorner`),$(`⌞`,`\\llcorner`),$(`⌟`,`\\lrcorner`),$(`©`,`\\copyright`),$(`®`,`\\textregistered`),$(`\\ulcorner`,`\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}`),$(`\\urcorner`,`\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}`),$(`\\llcorner`,`\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}`),$(`\\lrcorner`,`\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}`),$(`\\vdots`,`{\\varvdots\\rule{0pt}{15pt}}`),$(`⋮`,`\\vdots`),$(`\\varGamma`,`\\mathit{\\Gamma}`),$(`\\varDelta`,`\\mathit{\\Delta}`),$(`\\varTheta`,`\\mathit{\\Theta}`),$(`\\varLambda`,`\\mathit{\\Lambda}`),$(`\\varXi`,`\\mathit{\\Xi}`),$(`\\varPi`,`\\mathit{\\Pi}`),$(`\\varSigma`,`\\mathit{\\Sigma}`),$(`\\varUpsilon`,`\\mathit{\\Upsilon}`),$(`\\varPhi`,`\\mathit{\\Phi}`),$(`\\varPsi`,`\\mathit{\\Psi}`),$(`\\varOmega`,`\\mathit{\\Omega}`),$(`\\substack`,`\\begin{subarray}{c}#1\\end{subarray}`),$(`\\colon`,`\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax`),$(`\\boxed`,`\\fbox{$\\displaystyle{#1}$}`),$(`\\iff`,`\\DOTSB\\;\\Longleftrightarrow\\;`),$(`\\implies`,`\\DOTSB\\;\\Longrightarrow\\;`),$(`\\impliedby`,`\\DOTSB\\;\\Longleftarrow\\;`),$(`\\dddot`,`{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}`),$(`\\ddddot`,`{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}`);var zx={",":`\\dotsc`,"\\not":`\\dotsb`,"+":`\\dotsb`,"=":`\\dotsb`,"<":`\\dotsb`,">":`\\dotsb`,"-":`\\dotsb`,"*":`\\dotsb`,":":`\\dotsb`,"\\DOTSB":`\\dotsb`,"\\coprod":`\\dotsb`,"\\bigvee":`\\dotsb`,"\\bigwedge":`\\dotsb`,"\\biguplus":`\\dotsb`,"\\bigcap":`\\dotsb`,"\\bigcup":`\\dotsb`,"\\prod":`\\dotsb`,"\\sum":`\\dotsb`,"\\bigotimes":`\\dotsb`,"\\bigoplus":`\\dotsb`,"\\bigodot":`\\dotsb`,"\\bigsqcup":`\\dotsb`,"\\And":`\\dotsb`,"\\longrightarrow":`\\dotsb`,"\\Longrightarrow":`\\dotsb`,"\\longleftarrow":`\\dotsb`,"\\Longleftarrow":`\\dotsb`,"\\longleftrightarrow":`\\dotsb`,"\\Longleftrightarrow":`\\dotsb`,"\\mapsto":`\\dotsb`,"\\longmapsto":`\\dotsb`,"\\hookrightarrow":`\\dotsb`,"\\doteq":`\\dotsb`,"\\mathbin":`\\dotsb`,"\\mathrel":`\\dotsb`,"\\relbar":`\\dotsb`,"\\Relbar":`\\dotsb`,"\\xrightarrow":`\\dotsb`,"\\xleftarrow":`\\dotsb`,"\\DOTSI":`\\dotsi`,"\\int":`\\dotsi`,"\\oint":`\\dotsi`,"\\iint":`\\dotsi`,"\\iiint":`\\dotsi`,"\\iiiint":`\\dotsi`,"\\idotsint":`\\dotsi`,"\\DOTSX":`\\dotsx`},Bx=new Set([`bin`,`rel`]);$(`\\dots`,function(e){var t=`\\dotso`,n=e.expandAfterFuture().text;return n in zx?t=zx[n]:(n.slice(0,4)===`\\not`||n in v_.math&&Bx.has(v_.math[n].group))&&(t=`\\dotsb`),t});var Vx={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};$(`\\dotso`,function(e){return e.future().text in Vx?`\\ldots\\,`:`\\ldots`}),$(`\\dotsc`,function(e){var t=e.future().text;return t in Vx&&t!==`,`?`\\ldots\\,`:`\\ldots`}),$(`\\cdots`,function(e){return e.future().text in Vx?`\\@cdots\\,`:`\\@cdots`}),$(`\\dotsb`,`\\cdots`),$(`\\dotsm`,`\\cdots`),$(`\\dotsi`,`\\!\\cdots`),$(`\\dotsx`,`\\ldots\\,`),$(`\\DOTSI`,`\\relax`),$(`\\DOTSB`,`\\relax`),$(`\\DOTSX`,`\\relax`),$(`\\tmspace`,`\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax`),$(`\\,`,`\\tmspace+{3mu}{.1667em}`),$(`\\thinspace`,`\\,`),$(`\\>`,`\\mskip{4mu}`),$(`\\:`,`\\tmspace+{4mu}{.2222em}`),$(`\\medspace`,`\\:`),$(`\\;`,`\\tmspace+{5mu}{.2777em}`),$(`\\thickspace`,`\\;`),$(`\\!`,`\\tmspace-{3mu}{.1667em}`),$(`\\negthinspace`,`\\!`),$(`\\negmedspace`,`\\tmspace-{4mu}{.2222em}`),$(`\\negthickspace`,`\\tmspace-{5mu}{.277em}`),$(`\\enspace`,`\\kern.5em `),$(`\\enskip`,`\\hskip.5em\\relax`),$(`\\quad`,`\\hskip1em\\relax`),$(`\\qquad`,`\\hskip2em\\relax`),$(`\\tag`,`\\@ifstar\\tag@literal\\tag@paren`),$(`\\tag@paren`,`\\tag@literal{({#1})}`),$(`\\tag@literal`,e=>{if(e.macros.get(`\\df@tag`))throw new z(`Multiple \\tag`);return`\\gdef\\df@tag{\\text{#1}}`}),$(`\\bmod`,`\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}`),$(`\\pod`,`\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)`),$(`\\pmod`,`\\pod{{\\rm mod}\\mkern6mu#1}`),$(`\\mod`,`\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1`),$(`\\newline`,`\\\\\\relax`),$(`\\TeX`,`\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}`);var Hx=B(d_[`Main-Regular`][84][1]-.7*d_[`Main-Regular`][65][1]);$(`\\LaTeX`,`\\textrm{\\html@mathml{`+(`L\\kern-.36em\\raisebox{`+Hx+`}{\\scriptstyle A}`)+`\\kern-.15em\\TeX}{LaTeX}}`),$(`\\KaTeX`,`\\textrm{\\html@mathml{`+(`K\\kern-.17em\\raisebox{`+Hx+`}{\\scriptstyle A}`)+`\\kern-.15em\\TeX}{KaTeX}}`),$(`\\hspace`,`\\@ifstar\\@hspacer\\@hspace`),$(`\\@hspace`,`\\hskip #1\\relax`),$(`\\@hspacer`,`\\rule{0pt}{0pt}\\hskip #1\\relax`),$(`\\ordinarycolon`,`:`),$(`\\vcentcolon`,`\\mathrel{\\mathop\\ordinarycolon}`),$(`\\dblcolon`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}`),$(`\\coloneqq`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}`),$(`\\Coloneqq`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}`),$(`\\coloneq`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}`),$(`\\Coloneq`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}`),$(`\\eqqcolon`,`\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}`),$(`\\Eqqcolon`,`\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}`),$(`\\eqcolon`,`\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}`),$(`\\Eqcolon`,`\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}`),$(`\\colonapprox`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}`),$(`\\Colonapprox`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}`),$(`\\colonsim`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}`),$(`\\Colonsim`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}`),$(`∷`,`\\dblcolon`),$(`∹`,`\\eqcolon`),$(`≔`,`\\coloneqq`),$(`≕`,`\\eqqcolon`),$(`⩴`,`\\Coloneqq`),$(`\\ratio`,`\\vcentcolon`),$(`\\coloncolon`,`\\dblcolon`),$(`\\colonequals`,`\\coloneqq`),$(`\\coloncolonequals`,`\\Coloneqq`),$(`\\equalscolon`,`\\eqqcolon`),$(`\\equalscoloncolon`,`\\Eqqcolon`),$(`\\colonminus`,`\\coloneq`),$(`\\coloncolonminus`,`\\Coloneq`),$(`\\minuscolon`,`\\eqcolon`),$(`\\minuscoloncolon`,`\\Eqcolon`),$(`\\coloncolonapprox`,`\\Colonapprox`),$(`\\coloncolonsim`,`\\Colonsim`),$(`\\simcolon`,`\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}`),$(`\\simcoloncolon`,`\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}`),$(`\\approxcolon`,`\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}`),$(`\\approxcoloncolon`,`\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}`),$(`\\notni`,"\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"),$(`\\limsup`,`\\DOTSB\\operatorname*{lim\\,sup}`),$(`\\liminf`,`\\DOTSB\\operatorname*{lim\\,inf}`),$(`\\injlim`,`\\DOTSB\\operatorname*{inj\\,lim}`),$(`\\projlim`,`\\DOTSB\\operatorname*{proj\\,lim}`),$(`\\varlimsup`,`\\DOTSB\\operatorname*{\\overline{lim}}`),$(`\\varliminf`,`\\DOTSB\\operatorname*{\\underline{lim}}`),$(`\\varinjlim`,`\\DOTSB\\operatorname*{\\underrightarrow{lim}}`),$(`\\varprojlim`,`\\DOTSB\\operatorname*{\\underleftarrow{lim}}`),$(`\\gvertneqq`,`\\html@mathml{\\@gvertneqq}{≩}`),$(`\\lvertneqq`,`\\html@mathml{\\@lvertneqq}{≨}`),$(`\\ngeqq`,`\\html@mathml{\\@ngeqq}{≱}`),$(`\\ngeqslant`,`\\html@mathml{\\@ngeqslant}{≱}`),$(`\\nleqq`,`\\html@mathml{\\@nleqq}{≰}`),$(`\\nleqslant`,`\\html@mathml{\\@nleqslant}{≰}`),$(`\\nshortmid`,`\\html@mathml{\\@nshortmid}{∤}`),$(`\\nshortparallel`,`\\html@mathml{\\@nshortparallel}{∦}`),$(`\\nsubseteqq`,`\\html@mathml{\\@nsubseteqq}{⊈}`),$(`\\nsupseteqq`,`\\html@mathml{\\@nsupseteqq}{⊉}`),$(`\\varsubsetneq`,`\\html@mathml{\\@varsubsetneq}{⊊}`),$(`\\varsubsetneqq`,`\\html@mathml{\\@varsubsetneqq}{⫋}`),$(`\\varsupsetneq`,`\\html@mathml{\\@varsupsetneq}{⊋}`),$(`\\varsupsetneqq`,`\\html@mathml{\\@varsupsetneqq}{⫌}`),$(`\\imath`,`\\html@mathml{\\@imath}{ı}`),$(`\\jmath`,`\\html@mathml{\\@jmath}{ȷ}`),$(`\\llbracket`,"\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"),$(`\\rrbracket`,"\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"),$(`⟦`,`\\llbracket`),$(`⟧`,`\\rrbracket`),$(`\\lBrace`,"\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"),$(`\\rBrace`,"\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"),$(`⦃`,`\\lBrace`),$(`⦄`,`\\rBrace`),$(`\\minuso`,"\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"),$(`⦵`,`\\minuso`),$(`\\darr`,`\\downarrow`),$(`\\dArr`,`\\Downarrow`),$(`\\Darr`,`\\Downarrow`),$(`\\lang`,`\\langle`),$(`\\rang`,`\\rangle`),$(`\\uarr`,`\\uparrow`),$(`\\uArr`,`\\Uparrow`),$(`\\Uarr`,`\\Uparrow`),$(`\\N`,`\\mathbb{N}`),$(`\\R`,`\\mathbb{R}`),$(`\\Z`,`\\mathbb{Z}`),$(`\\alef`,`\\aleph`),$(`\\alefsym`,`\\aleph`),$(`\\Alpha`,`\\mathrm{A}`),$(`\\Beta`,`\\mathrm{B}`),$(`\\bull`,`\\bullet`),$(`\\Chi`,`\\mathrm{X}`),$(`\\clubs`,`\\clubsuit`),$(`\\cnums`,`\\mathbb{C}`),$(`\\Complex`,`\\mathbb{C}`),$(`\\Dagger`,`\\ddagger`),$(`\\diamonds`,`\\diamondsuit`),$(`\\empty`,`\\emptyset`),$(`\\Epsilon`,`\\mathrm{E}`),$(`\\Eta`,`\\mathrm{H}`),$(`\\exist`,`\\exists`),$(`\\harr`,`\\leftrightarrow`),$(`\\hArr`,`\\Leftrightarrow`),$(`\\Harr`,`\\Leftrightarrow`),$(`\\hearts`,`\\heartsuit`),$(`\\image`,`\\Im`),$(`\\infin`,`\\infty`),$(`\\Iota`,`\\mathrm{I}`),$(`\\isin`,`\\in`),$(`\\Kappa`,`\\mathrm{K}`),$(`\\larr`,`\\leftarrow`),$(`\\lArr`,`\\Leftarrow`),$(`\\Larr`,`\\Leftarrow`),$(`\\lrarr`,`\\leftrightarrow`),$(`\\lrArr`,`\\Leftrightarrow`),$(`\\Lrarr`,`\\Leftrightarrow`),$(`\\Mu`,`\\mathrm{M}`),$(`\\natnums`,`\\mathbb{N}`),$(`\\Nu`,`\\mathrm{N}`),$(`\\Omicron`,`\\mathrm{O}`),$(`\\plusmn`,`\\pm`),$(`\\rarr`,`\\rightarrow`),$(`\\rArr`,`\\Rightarrow`),$(`\\Rarr`,`\\Rightarrow`),$(`\\real`,`\\Re`),$(`\\reals`,`\\mathbb{R}`),$(`\\Reals`,`\\mathbb{R}`),$(`\\Rho`,`\\mathrm{P}`),$(`\\sdot`,`\\cdot`),$(`\\sect`,`\\S`),$(`\\spades`,`\\spadesuit`),$(`\\sub`,`\\subset`),$(`\\sube`,`\\subseteq`),$(`\\supe`,`\\supseteq`),$(`\\Tau`,`\\mathrm{T}`),$(`\\thetasym`,`\\vartheta`),$(`\\weierp`,`\\wp`),$(`\\Zeta`,`\\mathrm{Z}`),$(`\\argmin`,`\\DOTSB\\operatorname*{arg\\,min}`),$(`\\argmax`,`\\DOTSB\\operatorname*{arg\\,max}`),$(`\\plim`,`\\DOTSB\\mathop{\\operatorname{plim}}\\limits`),$(`\\bra`,`\\mathinner{\\langle{#1}|}`),$(`\\ket`,`\\mathinner{|{#1}\\rangle}`),$(`\\braket`,`\\mathinner{\\langle{#1}\\rangle}`),$(`\\Bra`,`\\left\\langle#1\\right|`),$(`\\Ket`,`\\left|#1\\right\\rangle`);var Ux=e=>t=>{var n=t.consumeArg().tokens,r=t.consumeArg().tokens,i=t.consumeArg().tokens,a=t.consumeArg().tokens,o=t.macros.get(`|`),s=t.macros.get(`\\|`);t.macros.beginGroup();var c=t=>n=>{e&&(n.macros.set(`|`,o),i.length&&n.macros.set(`\\|`,s));var a=t;return!t&&i.length&&n.future().text===`|`&&(n.popToken(),a=!0),{tokens:a?i:r,numArgs:0}};t.macros.set(`|`,c(!1)),i.length&&t.macros.set(`\\|`,c(!0));var l=t.consumeArg().tokens,u=t.expandTokens([...a,...l,...n]);return t.macros.endGroup(),{tokens:u.reverse(),numArgs:0}};$(`\\bra@ket`,Ux(!1)),$(`\\bra@set`,Ux(!0)),$(`\\Braket`,`\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}`),$(`\\Set`,`\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}`),$(`\\set`,`\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}`),$(`\\angln`,`{\\angl n}`),$(`\\blue`,`\\textcolor{##6495ed}{#1}`),$(`\\orange`,`\\textcolor{##ffa500}{#1}`),$(`\\pink`,`\\textcolor{##ff00af}{#1}`),$(`\\red`,`\\textcolor{##df0030}{#1}`),$(`\\green`,`\\textcolor{##28ae7b}{#1}`),$(`\\gray`,`\\textcolor{gray}{#1}`),$(`\\purple`,`\\textcolor{##9d38bd}{#1}`),$(`\\blueA`,`\\textcolor{##ccfaff}{#1}`),$(`\\blueB`,`\\textcolor{##80f6ff}{#1}`),$(`\\blueC`,`\\textcolor{##63d9ea}{#1}`),$(`\\blueD`,`\\textcolor{##11accd}{#1}`),$(`\\blueE`,`\\textcolor{##0c7f99}{#1}`),$(`\\tealA`,`\\textcolor{##94fff5}{#1}`),$(`\\tealB`,`\\textcolor{##26edd5}{#1}`),$(`\\tealC`,`\\textcolor{##01d1c1}{#1}`),$(`\\tealD`,`\\textcolor{##01a995}{#1}`),$(`\\tealE`,`\\textcolor{##208170}{#1}`),$(`\\greenA`,`\\textcolor{##b6ffb0}{#1}`),$(`\\greenB`,`\\textcolor{##8af281}{#1}`),$(`\\greenC`,`\\textcolor{##74cf70}{#1}`),$(`\\greenD`,`\\textcolor{##1fab54}{#1}`),$(`\\greenE`,`\\textcolor{##0d923f}{#1}`),$(`\\goldA`,`\\textcolor{##ffd0a9}{#1}`),$(`\\goldB`,`\\textcolor{##ffbb71}{#1}`),$(`\\goldC`,`\\textcolor{##ff9c39}{#1}`),$(`\\goldD`,`\\textcolor{##e07d10}{#1}`),$(`\\goldE`,`\\textcolor{##a75a05}{#1}`),$(`\\redA`,`\\textcolor{##fca9a9}{#1}`),$(`\\redB`,`\\textcolor{##ff8482}{#1}`),$(`\\redC`,`\\textcolor{##f9685d}{#1}`),$(`\\redD`,`\\textcolor{##e84d39}{#1}`),$(`\\redE`,`\\textcolor{##bc2612}{#1}`),$(`\\maroonA`,`\\textcolor{##ffbde0}{#1}`),$(`\\maroonB`,`\\textcolor{##ff92c6}{#1}`),$(`\\maroonC`,`\\textcolor{##ed5fa6}{#1}`),$(`\\maroonD`,`\\textcolor{##ca337c}{#1}`),$(`\\maroonE`,`\\textcolor{##9e034e}{#1}`),$(`\\purpleA`,`\\textcolor{##ddd7ff}{#1}`),$(`\\purpleB`,`\\textcolor{##c6b9fc}{#1}`),$(`\\purpleC`,`\\textcolor{##aa87ff}{#1}`),$(`\\purpleD`,`\\textcolor{##7854ab}{#1}`),$(`\\purpleE`,`\\textcolor{##543b78}{#1}`),$(`\\mintA`,`\\textcolor{##f5f9e8}{#1}`),$(`\\mintB`,`\\textcolor{##edf2df}{#1}`),$(`\\mintC`,`\\textcolor{##e0e5cc}{#1}`),$(`\\grayA`,`\\textcolor{##f6f7f7}{#1}`),$(`\\grayB`,`\\textcolor{##f0f1f2}{#1}`),$(`\\grayC`,`\\textcolor{##e3e5e6}{#1}`),$(`\\grayD`,`\\textcolor{##d6d8da}{#1}`),$(`\\grayE`,`\\textcolor{##babec2}{#1}`),$(`\\grayF`,`\\textcolor{##888d93}{#1}`),$(`\\grayG`,`\\textcolor{##626569}{#1}`),$(`\\grayH`,`\\textcolor{##3b3e40}{#1}`),$(`\\grayI`,`\\textcolor{##21242c}{#1}`),$(`\\kaBlue`,`\\textcolor{##314453}{#1}`),$(`\\kaGreen`,`\\textcolor{##71B307}{#1}`);var Wx={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0},Gx=class{constructor(e,t,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new Fx(Ix,t.macros),this.mode=n,this.stack=[]}feed(e){this.lexer=new Px(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,n,r;if(e){if(this.consumeSpaces(),this.future().text!==`[`)return null;t=this.popToken(),{tokens:r,end:n}=this.consumeArg([`]`])}else ({tokens:r,start:t,end:n}=this.consumeArg());return this.pushToken(new Fb(`EOF`,n.loc)),this.pushTokens(r),new Fb(``,Pb.range(t,n))}consumeSpaces(){for(;this.future().text===` `;)this.stack.pop()}consumeArg(e){var t=[],n=e&&e.length>0;n||this.consumeSpaces();var r=this.future(),i,a=0,o=0;do{if(i=this.popToken(),t.push(i),i.text===`{`)++a;else if(i.text===`}`){if(--a,a===-1)throw new z(`Extra }`,i)}else if(i.text===`EOF`)throw new z(`Unexpected end of input in a macro argument, expected '`+(e&&n?e[o]:`}`)+`'`,i);if(e&&n)if((a===0||a===1&&e[o]===`{`)&&i.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(a!==0||n);return r.text===`{`&&t[t.length-1].text===`}`&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:i}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new z(`The length of delimiters doesn't match the number of args!`);for(var n=t[0],r=0;r<n.length;r++){var i=this.popToken();if(n[r]!==i.text)throw new z(`Use of the macro doesn't match its definition`,i)}}for(var a=[],o=0;o<e;o++)a.push(this.consumeArg(t&&t[o+1]).tokens);return a}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new z(`Too many expansions: infinite loop or need to increase maxExpand setting`)}expandOnce(e){var t=this.popToken(),n=t.text,r=t.noexpand?null:this._getExpansion(n);if(r==null||e&&r.unexpandable){if(e&&r==null&&n[0]===`\\`&&!this.isDefined(n))throw new z(`Undefined control sequence: `+n);return this.pushToken(t),!1}this.countExpansion(1);var i=r.tokens,a=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){i=i.slice();for(var o=i.length-1;o>=0;--o){var s=i[o];if(s.text===`#`){if(o===0)throw new z(`Incomplete placeholder at end of macro body`,s);if(s=i[--o],s.text===`#`)i.splice(o+1,1);else if(/^[1-9]$/.test(s.text))i.splice(o,2,...a[s.text-1]);else throw new z(`Not a valid argument number`,s)}}}return this.pushTokens(i),i.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text=`\\relax`),e}}expandMacro(e){return this.macros.has(e)?this.expandTokens([new Fb(e)]):void 0}expandTokens(e){var t=[],n=this.stack.length;for(this.pushTokens(e);this.stack.length>n;)if(this.expandOnce(!0)===!1){var r=this.stack.pop();r.treatAsRelax&&=(r.noexpand=!1,!1),t.push(r)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(e=>e.text).join(``)}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var n=this.lexer.catcodes[e];if(n!=null&&n!==13)return}var r=typeof t==`function`?t(this):t;if(typeof r==`string`){var i=0;if(r.includes(`#`))for(var a=r.replace(/##/g,``);a.includes(`#`+(i+1));)++i;for(var o=new Px(r,this.settings),s=[],c=o.lex();c.text!==`EOF`;)s.push(c),c=o.lex();return s.reverse(),{tokens:s,numArgs:i}}return r}isDefined(e){return this.macros.has(e)||Tx.hasOwnProperty(e)||v_.math.hasOwnProperty(e)||v_.text.hasOwnProperty(e)||Wx.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t==null?Tx.hasOwnProperty(e)&&!Tx[e].primitive:typeof t==`string`||typeof t==`function`||!t.unexpandable}},Kx=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,qx=Object.freeze({"₊":`+`,"₋":`-`,"₌":`=`,"₍":`(`,"₎":`)`,"₀":`0`,"₁":`1`,"₂":`2`,"₃":`3`,"₄":`4`,"₅":`5`,"₆":`6`,"₇":`7`,"₈":`8`,"₉":`9`,ₐ:`a`,ₑ:`e`,ₕ:`h`,ᵢ:`i`,ⱼ:`j`,ₖ:`k`,ₗ:`l`,ₘ:`m`,ₙ:`n`,ₒ:`o`,ₚ:`p`,ᵣ:`r`,ₛ:`s`,ₜ:`t`,ᵤ:`u`,ᵥ:`v`,ₓ:`x`,ᵦ:`β`,ᵧ:`γ`,ᵨ:`ρ`,ᵩ:`ϕ`,ᵪ:`χ`,"⁺":`+`,"⁻":`-`,"⁼":`=`,"⁽":`(`,"⁾":`)`,"⁰":`0`,"¹":`1`,"²":`2`,"³":`3`,"⁴":`4`,"⁵":`5`,"⁶":`6`,"⁷":`7`,"⁸":`8`,"⁹":`9`,ᴬ:`A`,ᴮ:`B`,ᴰ:`D`,ᴱ:`E`,ᴳ:`G`,ᴴ:`H`,ᴵ:`I`,ᴶ:`J`,ᴷ:`K`,ᴸ:`L`,ᴹ:`M`,ᴺ:`N`,ᴼ:`O`,ᴾ:`P`,ᴿ:`R`,ᵀ:`T`,ᵁ:`U`,ⱽ:`V`,ᵂ:`W`,ᵃ:`a`,ᵇ:`b`,ᶜ:`c`,ᵈ:`d`,ᵉ:`e`,ᶠ:`f`,ᵍ:`g`,ʰ:`h`,ⁱ:`i`,ʲ:`j`,ᵏ:`k`,ˡ:`l`,ᵐ:`m`,ⁿ:`n`,ᵒ:`o`,ᵖ:`p`,ʳ:`r`,ˢ:`s`,ᵗ:`t`,ᵘ:`u`,ᵛ:`v`,ʷ:`w`,ˣ:`x`,ʸ:`y`,ᶻ:`z`,ᵝ:`β`,ᵞ:`γ`,ᵟ:`δ`,ᵠ:`ϕ`,ᵡ:`χ`,ᶿ:`θ`}),Jx={"́":{text:`\\'`,math:`\\acute`},"̀":{text:"\\`",math:`\\grave`},"̈":{text:`\\"`,math:`\\ddot`},"̃":{text:`\\~`,math:`\\tilde`},"̄":{text:`\\=`,math:`\\bar`},"̆":{text:`\\u`,math:`\\breve`},"̌":{text:`\\v`,math:`\\check`},"̂":{text:`\\^`,math:`\\hat`},"̇":{text:`\\.`,math:`\\dot`},"̊":{text:`\\r`,math:`\\mathring`},"̋":{text:`\\H`},"̧":{text:`\\c`}},Yx={á:`á`,à:`à`,ä:`ä`,ǟ:`ǟ`,ã:`ã`,ā:`ā`,ă:`ă`,ắ:`ắ`,ằ:`ằ`,ẵ:`ẵ`,ǎ:`ǎ`,â:`â`,ấ:`ấ`,ầ:`ầ`,ẫ:`ẫ`,ȧ:`ȧ`,ǡ:`ǡ`,å:`å`,ǻ:`ǻ`,ḃ:`ḃ`,ć:`ć`,ḉ:`ḉ`,č:`č`,ĉ:`ĉ`,ċ:`ċ`,ç:`ç`,ď:`ď`,ḋ:`ḋ`,ḑ:`ḑ`,é:`é`,è:`è`,ë:`ë`,ẽ:`ẽ`,ē:`ē`,ḗ:`ḗ`,ḕ:`ḕ`,ĕ:`ĕ`,ḝ:`ḝ`,ě:`ě`,ê:`ê`,ế:`ế`,ề:`ề`,ễ:`ễ`,ė:`ė`,ȩ:`ȩ`,ḟ:`ḟ`,ǵ:`ǵ`,ḡ:`ḡ`,ğ:`ğ`,ǧ:`ǧ`,ĝ:`ĝ`,ġ:`ġ`,ģ:`ģ`,ḧ:`ḧ`,ȟ:`ȟ`,ĥ:`ĥ`,ḣ:`ḣ`,ḩ:`ḩ`,í:`í`,ì:`ì`,ï:`ï`,ḯ:`ḯ`,ĩ:`ĩ`,ī:`ī`,ĭ:`ĭ`,ǐ:`ǐ`,î:`î`,ǰ:`ǰ`,ĵ:`ĵ`,ḱ:`ḱ`,ǩ:`ǩ`,ķ:`ķ`,ĺ:`ĺ`,ľ:`ľ`,ļ:`ļ`,ḿ:`ḿ`,ṁ:`ṁ`,ń:`ń`,ǹ:`ǹ`,ñ:`ñ`,ň:`ň`,ṅ:`ṅ`,ņ:`ņ`,ó:`ó`,ò:`ò`,ö:`ö`,ȫ:`ȫ`,õ:`õ`,ṍ:`ṍ`,ṏ:`ṏ`,ȭ:`ȭ`,ō:`ō`,ṓ:`ṓ`,ṑ:`ṑ`,ŏ:`ŏ`,ǒ:`ǒ`,ô:`ô`,ố:`ố`,ồ:`ồ`,ỗ:`ỗ`,ȯ:`ȯ`,ȱ:`ȱ`,ő:`ő`,ṕ:`ṕ`,ṗ:`ṗ`,ŕ:`ŕ`,ř:`ř`,ṙ:`ṙ`,ŗ:`ŗ`,ś:`ś`,ṥ:`ṥ`,š:`š`,ṧ:`ṧ`,ŝ:`ŝ`,ṡ:`ṡ`,ş:`ş`,ẗ:`ẗ`,ť:`ť`,ṫ:`ṫ`,ţ:`ţ`,ú:`ú`,ù:`ù`,ü:`ü`,ǘ:`ǘ`,ǜ:`ǜ`,ǖ:`ǖ`,ǚ:`ǚ`,ũ:`ũ`,ṹ:`ṹ`,ū:`ū`,ṻ:`ṻ`,ŭ:`ŭ`,ǔ:`ǔ`,û:`û`,ů:`ů`,ű:`ű`,ṽ:`ṽ`,ẃ:`ẃ`,ẁ:`ẁ`,ẅ:`ẅ`,ŵ:`ŵ`,ẇ:`ẇ`,ẘ:`ẘ`,ẍ:`ẍ`,ẋ:`ẋ`,ý:`ý`,ỳ:`ỳ`,ÿ:`ÿ`,ỹ:`ỹ`,ȳ:`ȳ`,ŷ:`ŷ`,ẏ:`ẏ`,ẙ:`ẙ`,ź:`ź`,ž:`ž`,ẑ:`ẑ`,ż:`ż`,Á:`Á`,À:`À`,Ä:`Ä`,Ǟ:`Ǟ`,Ã:`Ã`,Ā:`Ā`,Ă:`Ă`,Ắ:`Ắ`,Ằ:`Ằ`,Ẵ:`Ẵ`,Ǎ:`Ǎ`,Â:`Â`,Ấ:`Ấ`,Ầ:`Ầ`,Ẫ:`Ẫ`,Ȧ:`Ȧ`,Ǡ:`Ǡ`,Å:`Å`,Ǻ:`Ǻ`,Ḃ:`Ḃ`,Ć:`Ć`,Ḉ:`Ḉ`,Č:`Č`,Ĉ:`Ĉ`,Ċ:`Ċ`,Ç:`Ç`,Ď:`Ď`,Ḋ:`Ḋ`,Ḑ:`Ḑ`,É:`É`,È:`È`,Ë:`Ë`,Ẽ:`Ẽ`,Ē:`Ē`,Ḗ:`Ḗ`,Ḕ:`Ḕ`,Ĕ:`Ĕ`,Ḝ:`Ḝ`,Ě:`Ě`,Ê:`Ê`,Ế:`Ế`,Ề:`Ề`,Ễ:`Ễ`,Ė:`Ė`,Ȩ:`Ȩ`,Ḟ:`Ḟ`,Ǵ:`Ǵ`,Ḡ:`Ḡ`,Ğ:`Ğ`,Ǧ:`Ǧ`,Ĝ:`Ĝ`,Ġ:`Ġ`,Ģ:`Ģ`,Ḧ:`Ḧ`,Ȟ:`Ȟ`,Ĥ:`Ĥ`,Ḣ:`Ḣ`,Ḩ:`Ḩ`,Í:`Í`,Ì:`Ì`,Ï:`Ï`,Ḯ:`Ḯ`,Ĩ:`Ĩ`,Ī:`Ī`,Ĭ:`Ĭ`,Ǐ:`Ǐ`,Î:`Î`,İ:`İ`,Ĵ:`Ĵ`,Ḱ:`Ḱ`,Ǩ:`Ǩ`,Ķ:`Ķ`,Ĺ:`Ĺ`,Ľ:`Ľ`,Ļ:`Ļ`,Ḿ:`Ḿ`,Ṁ:`Ṁ`,Ń:`Ń`,Ǹ:`Ǹ`,Ñ:`Ñ`,Ň:`Ň`,Ṅ:`Ṅ`,Ņ:`Ņ`,Ó:`Ó`,Ò:`Ò`,Ö:`Ö`,Ȫ:`Ȫ`,Õ:`Õ`,Ṍ:`Ṍ`,Ṏ:`Ṏ`,Ȭ:`Ȭ`,Ō:`Ō`,Ṓ:`Ṓ`,Ṑ:`Ṑ`,Ŏ:`Ŏ`,Ǒ:`Ǒ`,Ô:`Ô`,Ố:`Ố`,Ồ:`Ồ`,Ỗ:`Ỗ`,Ȯ:`Ȯ`,Ȱ:`Ȱ`,Ő:`Ő`,Ṕ:`Ṕ`,Ṗ:`Ṗ`,Ŕ:`Ŕ`,Ř:`Ř`,Ṙ:`Ṙ`,Ŗ:`Ŗ`,Ś:`Ś`,Ṥ:`Ṥ`,Š:`Š`,Ṧ:`Ṧ`,Ŝ:`Ŝ`,Ṡ:`Ṡ`,Ş:`Ş`,Ť:`Ť`,Ṫ:`Ṫ`,Ţ:`Ţ`,Ú:`Ú`,Ù:`Ù`,Ü:`Ü`,Ǘ:`Ǘ`,Ǜ:`Ǜ`,Ǖ:`Ǖ`,Ǚ:`Ǚ`,Ũ:`Ũ`,Ṹ:`Ṹ`,Ū:`Ū`,Ṻ:`Ṻ`,Ŭ:`Ŭ`,Ǔ:`Ǔ`,Û:`Û`,Ů:`Ů`,Ű:`Ű`,Ṽ:`Ṽ`,Ẃ:`Ẃ`,Ẁ:`Ẁ`,Ẅ:`Ẅ`,Ŵ:`Ŵ`,Ẇ:`Ẇ`,Ẍ:`Ẍ`,Ẋ:`Ẋ`,Ý:`Ý`,Ỳ:`Ỳ`,Ÿ:`Ÿ`,Ỹ:`Ỹ`,Ȳ:`Ȳ`,Ŷ:`Ŷ`,Ẏ:`Ẏ`,Ź:`Ź`,Ž:`Ž`,Ẑ:`Ẑ`,Ż:`Ż`,ά:`ά`,ὰ:`ὰ`,ᾱ:`ᾱ`,ᾰ:`ᾰ`,έ:`έ`,ὲ:`ὲ`,ή:`ή`,ὴ:`ὴ`,ί:`ί`,ὶ:`ὶ`,ϊ:`ϊ`,ΐ:`ΐ`,ῒ:`ῒ`,ῑ:`ῑ`,ῐ:`ῐ`,ό:`ό`,ὸ:`ὸ`,ύ:`ύ`,ὺ:`ὺ`,ϋ:`ϋ`,ΰ:`ΰ`,ῢ:`ῢ`,ῡ:`ῡ`,ῠ:`ῠ`,ώ:`ώ`,ὼ:`ὼ`,Ύ:`Ύ`,Ὺ:`Ὺ`,Ϋ:`Ϋ`,Ῡ:`Ῡ`,Ῠ:`Ῠ`,Ώ:`Ώ`,Ὼ:`Ὼ`},Xx=class e{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode=`math`,this.gullet=new Gx(e,t,this.mode),this.settings=t,this.leftrightDepth=0,this.nextToken=null}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new z(`Expected '`+e+`', got '`+this.fetch().text+`'`,this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken??=this.gullet.expandNextToken(),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set(`\\color`,`\\textcolor`);try{var e=this.parseExpression(!1);return this.expect(`EOF`),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new Fb(`}`)),this.gullet.pushTokens(e);var n=this.parseExpression(!1);return this.expect(`}`),this.nextToken=t,n}parseExpression(t,n){for(var r=[];;){this.mode===`math`&&this.consumeSpaces();var i=this.fetch();if(e.endOfExpression.has(i.text)||n&&i.text===n||t&&Tx[i.text]&&Tx[i.text].infix)break;var a=this.parseAtom(n);if(!a)break;a.type!==`internal`&&r.push(a)}return this.mode===`text`&&this.formLigatures(r),this.handleInfixNodes(r)}handleInfixNodes(e){for(var t=-1,n,r=0;r<e.length;r++){var i=e[r];if(i.type===`infix`){if(t!==-1)throw new z(`only one infix operator per group`,i.token);t=r,n=i.replaceWith}}if(t!==-1&&n){var a,o,s=e.slice(0,t),c=e.slice(t+1);return a=s.length===1&&s[0].type===`ordgroup`?s[0]:{type:`ordgroup`,mode:this.mode,body:s},o=c.length===1&&c[0].type===`ordgroup`?c[0]:{type:`ordgroup`,mode:this.mode,body:c},[n===`\\\\abovefrac`?this.callFunction(n,[a,e[t],o],[]):this.callFunction(n,[a,o],[])]}else return e}handleSupSubscript(e){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var r;do r=this.parseGroup(e);while(r?.type===`internal`);if(!r)throw new z(`Expected group after '`+n+`'`,t);return r}formatUnsupportedCmd(e){for(var t=[],n=0;n<e.length;n++)t.push({type:`textord`,mode:`text`,text:e[n]});var r={type:`text`,mode:this.mode,body:t};return{type:`color`,mode:this.mode,color:this.settings.errorColor,body:[r]}}parseAtom(e){var t=this.parseGroup(`atom`,e);if(t?.type===`internal`||this.mode===`text`)return t;for(var n,r;;){this.consumeSpaces();var i=this.fetch();if(i.text===`\\limits`||i.text===`\\nolimits`){if(t&&t.type===`op`)t.limits=i.text===`\\limits`,t.alwaysHandleSupSub=!0;else if(t&&t.type===`operatorname`)t.alwaysHandleSupSub&&(t.limits=i.text===`\\limits`);else throw new z(`Limit controls must follow a math operator`,i);this.consume()}else if(i.text===`^`){if(n)throw new z(`Double superscript`,i);n=this.handleSupSubscript(`superscript`)}else if(i.text===`_`){if(r)throw new z(`Double subscript`,i);r=this.handleSupSubscript(`subscript`)}else if(i.text===`'`){if(n)throw new z(`Double superscript`,i);var a={type:`textord`,mode:this.mode,text:`\\prime`},o=[a];for(this.consume();this.fetch().text===`'`;)o.push(a),this.consume();this.fetch().text===`^`&&o.push(this.handleSupSubscript(`superscript`)),n={type:`ordgroup`,mode:this.mode,body:o}}else if(qx[i.text]){var s=Kx.test(i.text),c=[];for(c.push(new Fb(qx[i.text])),this.consume();;){var l=this.fetch().text;if(!qx[l]||Kx.test(l)!==s)break;c.unshift(new Fb(qx[l])),this.consume()}var u=this.subparse(c);s?r={type:`ordgroup`,mode:`math`,body:u}:n={type:`ordgroup`,mode:`math`,body:u}}else break}return n||r?{type:`supsub`,mode:this.mode,base:t,sup:n,sub:r}:t}parseFunction(e,t){var n=this.fetch(),r=n.text,i=Tx[r];if(!i)return null;if(this.consume(),t&&t!==`atom`&&!i.allowedInArgument)throw new z(`Got function '`+r+`' with no arguments`+(t?` as `+t:``),n);if(this.mode===`text`&&!i.allowedInText)throw new z(`Can't use function '`+r+`' in text mode`,n);if(this.mode===`math`&&i.allowedInMath===!1)throw new z(`Can't use function '`+r+`' in math mode`,n);var{args:a,optArgs:o}=this.parseArguments(r,i);return this.callFunction(r,a,o,n,e)}callFunction(e,t,n,r,i){var a={funcName:e,parser:this,token:r,breakOnTokenText:i},o=Tx[e];if(o&&o.handler)return o.handler(a,t,n);throw new z(`No function handler for `+e)}parseArguments(e,t){var n=t.numArgs+t.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var r=[],i=[],a=0;a<n;a++){var o=t.argTypes&&t.argTypes[a],s=a<t.numOptionalArgs;(`primitive`in t&&t.primitive&&o==null||t.type===`sqrt`&&a===1&&i[0]==null)&&(o=`primitive`);var c=this.parseGroupOfType(`argument to '`+e+`'`,o,s);if(s)i.push(c);else if(c!=null)r.push(c);else throw new z(`Null argument, please report this as a bug`)}return{args:r,optArgs:i}}parseGroupOfType(e,t,n){switch(t){case`color`:return this.parseColorGroup(n);case`size`:return this.parseSizeGroup(n);case`url`:return this.parseUrlGroup(n);case`math`:case`text`:return this.parseArgumentGroup(n,t);case`hbox`:var r=this.parseArgumentGroup(n,`text`);return r==null?null:{type:`styling`,mode:r.mode,body:[r],style:`text`,resetFont:!0};case`raw`:var i=this.parseStringGroup(`raw`,n);return i==null?null:{type:`raw`,mode:`text`,string:i.text};case`primitive`:if(n)throw new z(`A primitive argument cannot be optional`);var a=this.parseGroup(e);if(a==null)throw new z(`Expected group as `+e,this.fetch());return a;case`original`:case null:case void 0:return this.parseArgumentGroup(n);default:throw new z(`Unknown group type as `+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===` `;)this.consume()}parseStringGroup(e,t){var n=this.gullet.scanArgument(t);if(n==null)return null;for(var r=``,i;(i=this.fetch()).text!==`EOF`;)r+=i.text,this.consume();return this.consume(),n.text=r,n}parseRegexGroup(e,t){for(var n=this.fetch(),r=n,i=``,a;(a=this.fetch()).text!==`EOF`&&e.test(i+a.text);)r=a,i+=r.text,this.consume();if(i===``)throw new z(`Invalid `+t+`: '`+n.text+`'`,n);return n.range(r,i)}parseColorGroup(e){var t=this.parseStringGroup(`color`,e);if(t==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new z(`Invalid color: '`+t.text+`'`,t);var r=n[0];return/^[0-9a-f]{6}$/i.test(r)&&(r=`#`+r),{type:`color-token`,mode:this.mode,color:r}}parseSizeGroup(e){var t,n=!1;if(this.gullet.consumeSpaces(),t=!e&&this.gullet.future().text!==`{`?this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,`size`):this.parseStringGroup(`size`,e),!t)return null;!e&&t.text.length===0&&(t.text=`0pt`,n=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new z(`Invalid size: '`+t.text+`'`,t);var i={number:+(r[1]+r[2]),unit:r[3]};if(!Kg(i))throw new z(`Invalid unit: '`+i.unit+`'`,t);return{type:`size`,mode:this.mode,value:i,isBlank:n}}parseUrlGroup(e){this.gullet.lexer.setCatcode(`%`,13),this.gullet.lexer.setCatcode(`~`,12);var t=this.parseStringGroup(`url`,e);if(this.gullet.lexer.setCatcode(`%`,14),this.gullet.lexer.setCatcode(`~`,13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,`$1`);return{type:`url`,mode:this.mode,url:n}}parseArgumentGroup(e,t){var n=this.gullet.scanArgument(e);if(n==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var i=this.parseExpression(!1,`EOF`);this.expect(`EOF`),this.gullet.endGroup();var a={type:`ordgroup`,mode:this.mode,loc:n.loc,body:i};return t&&this.switchMode(r),a}parseGroup(e,t){var n=this.fetch(),r=n.text,i;if(r===`{`||r===`\\begingroup`){this.consume();var a=r===`{`?`}`:`\\endgroup`;this.gullet.beginGroup();var o=this.parseExpression(!1,a),s=this.fetch();this.expect(a),this.gullet.endGroup(),i={type:`ordgroup`,mode:this.mode,loc:Pb.range(n,s),body:o,semisimple:r===`\\begingroup`||void 0}}else if(i=this.parseFunction(t,e)||this.parseSymbol(),i==null&&r[0]===`\\`&&!Wx.hasOwnProperty(r)){if(this.settings.throwOnError)throw new z(`Undefined control sequence: `+r,n);i=this.formatUnsupportedCmd(r),this.consume()}return i}formLigatures(e){for(var t=e.length-1,n=0;n<t;++n){var r=e[n];if(r.type===`textord`){var i=r.text,a=e[n+1];if(!(!a||a.type!==`textord`)){if(i===`-`&&a.text===`-`){var o=e[n+2];n+1<t&&o&&o.type===`textord`&&o.text===`-`?(e.splice(n,3,{type:`textord`,mode:`text`,loc:Pb.range(r,o),text:`---`}),t-=2):(e.splice(n,2,{type:`textord`,mode:`text`,loc:Pb.range(r,a),text:`--`}),--t)}(i===`'`||i==="`")&&a.text===i&&(e.splice(n,2,{type:`textord`,mode:`text`,loc:Pb.range(r,a),text:i+i}),--t)}}}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),r=n.charAt(0)===`*`;if(r&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new z(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:`verb`,mode:`text`,body:n,star:r}}Yx.hasOwnProperty(t[0])&&!v_[this.mode][t[0]]&&(this.settings.strict&&this.mode===`math`&&this.settings.reportNonstrict(`unicodeTextInMathMode`,`Accented Unicode text character "`+t[0]+`" used in math mode`,e),t=Yx[t[0]]+t.slice(1));var i=Mx.exec(t);i&&(t=t.substring(0,i.index),t===`i`?t=`ı`:t===`j`&&(t=`ȷ`));var a;if(v_[this.mode][t]){this.settings.strict&&this.mode===`math`&&V_.includes(t)&&this.settings.reportNonstrict(`unicodeTextInMathMode`,`Latin-1/Unicode text character "`+t[0]+`" used in math mode`,e);var o=v_[this.mode][t].group,s=Pb.range(e);a=Ty(o)?{type:`atom`,mode:this.mode,family:o,loc:s,text:t}:{type:o,mode:this.mode,loc:s,text:t}}else if(t.charCodeAt(0)>=128)this.settings.strict&&(Og(t.charCodeAt(0))?this.mode===`math`&&this.settings.reportNonstrict(`unicodeTextInMathMode`,`Unicode text character "`+t[0]+`" used in math mode`,e):this.settings.reportNonstrict(`unknownSymbol`,`Unrecognized Unicode character "`+t[0]+`"`+(` (`+t.charCodeAt(0)+`)`),e)),a={type:`textord`,mode:`text`,loc:Pb.range(e),text:t};else return null;if(this.consume(),i)for(var c=0;c<i[0].length;c++){var l=i[0][c];if(!Jx[l])throw new z(`Unknown accent ' `+l+`'`,e);var u=Jx[l][this.mode]||Jx[l].text;if(!u)throw new z(`Accent `+l+` unsupported in `+this.mode+` mode`,e);a={type:`accent`,mode:this.mode,loc:Pb.range(e),label:u,isStretchy:!1,isShifty:!0,base:a}}return a}};Xx.endOfExpression=new Set([`}`,`\\endgroup`,`\\end`,`\\right`,`&`]);var Zx=function(e,t){if(!(typeof e==`string`||e instanceof String))throw TypeError(`KaTeX can only parse string typed expression`);var n=new Xx(e,t);delete n.gullet.macros.current[`\\df@tag`];var r=n.parse();if(delete n.gullet.macros.current[`\\current@color`],delete n.gullet.macros.current[`\\color`],n.gullet.macros.get(`\\df@tag`)){if(!t.displayMode)throw new z(`\\tag works only in display equations`);r=[{type:`tag`,mode:`text`,body:r,tag:n.subparse([new Fb(`\\df@tag`)])}]}return r},Qx=function(e,t,n){t.textContent=``;var r=nS(e,n).toNode();t.appendChild(r)};typeof document<`u`&&document.compatMode!==`CSS1Compat`&&(typeof console<`u`&&console.warn(`Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.`),Qx=function(){throw new z(`KaTeX doesn't work in quirks mode.`)});var $x=function(e,t){return nS(e,t).toMarkup()},eS=function(e,t){return Zx(e,new sg(t))},tS=function(e,t,n){if(n.throwOnError||!(e instanceof z))throw e;var r=X([`katex-error`],[new i_(t)]);return r.setAttribute(`title`,e.toString()),r.setAttribute(`style`,`color:`+n.errorColor),r},nS=function(e,t){var n=new sg(t);try{return hy(Zx(e,n),e,n)}catch(t){return tS(t,e,n)}},rS={version:`0.16.47`,render:Qx,renderToString:$x,ParseError:z,SETTINGS_SCHEMA:rg,__parse:eS,__renderToDomTree:nS,__renderToHTMLTree:function(e,t){var n=new sg(t);try{return gy(Zx(e,n),e,n)}catch(t){return tS(t,e,n)}},__setFontMetrics:m_,__defineSymbol:V,__defineFunction:Z,__defineMacro:$,__domTree:{Span:e_,Anchor:t_,SymbolNode:i_,SvgNode:a_,PathNode:o_,LineNode:s_}},iS={};function aS(e){let t=this,n=e||iS,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(qh(n)),a.push(Rh()),o.push(zh(n))}var oS=/[#.]/g;function sS(e,t){let n=e||``,r={},i=0,a,o;for(;i<n.length;){oS.lastIndex=i;let e=oS.exec(n),t=n.slice(i,e?e.index:n.length);t&&(a?a===`#`?r.id=t:Array.isArray(r.className)?r.className.push(t):r.className=[t]:o=t,i+=t.length),e&&(a=e[0],i++)}return{type:`element`,tagName:o||t||`div`,properties:r,children:[]}}function cS(e,t,n){let r=n?mS(n):void 0;function i(n,i,...a){let o;if(n==null){o={type:`root`,children:[]};let e=i;a.unshift(e)}else{o=sS(n,t);let s=o.tagName.toLowerCase(),c=r?r.get(s):void 0;if(o.tagName=c||s,lS(i))a.unshift(i);else for(let[t,n]of Object.entries(i))uS(e,o.properties,t,n)}for(let e of a)dS(o.children,e);return o.type===`element`&&o.tagName===`template`&&(o.content={type:`root`,children:o.children},o.children=[]),o}return i}function lS(e){if(typeof e!=`object`||!e||Array.isArray(e))return!0;if(typeof e.type!=`string`)return!1;let t=e,n=Object.keys(e);for(let e of n){let n=t[e];if(n&&typeof n==`object`){if(!Array.isArray(n))return!0;let e=n;for(let t of e)if(typeof t!=`number`&&typeof t!=`string`)return!0}}return!!(`children`in e&&Array.isArray(e.children))}function uS(e,t,n,r){let i=No(e,n),a;if(r!=null){if(typeof r==`number`){if(Number.isNaN(r))return;a=r}else a=typeof r==`boolean`?r:typeof r==`string`?i.spaceSeparated?Ro(r):i.commaSeparated?Ya(r):i.commaOrSpaceSeparated?Ro(Ya(r).join(` `)):fS(i,i.property,r):Array.isArray(r)?[...r]:i.property===`style`?pS(r):String(r);if(Array.isArray(a)){let e=[];for(let t of a)e.push(fS(i,i.property,t));a=e}i.property===`className`&&Array.isArray(t.className)&&(a=t.className.concat(a)),t[i.property]=a}}function dS(e,t){if(t!=null)if(typeof t==`number`||typeof t==`string`)e.push({type:`text`,value:String(t)});else if(Array.isArray(t))for(let n of t)dS(e,n);else if(typeof t==`object`&&`type`in t)t.type===`root`?dS(e,t.children):e.push(t);else throw Error("Expected node, nodes, or string, got `"+t+"`")}function fS(e,t,n){if(typeof n==`string`){if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((e.boolean||e.overloadedBoolean)&&(n===``||oo(n)===oo(t)))return!0}return n}function pS(e){let t=[];for(let[n,r]of Object.entries(e))t.push([n,r].join(`: `));return t.join(`; `)}function mS(e){let t=new Map;for(let n of e)t.set(n.toLowerCase(),n);return t}var hS=`altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.solidColor.textArea.textPath`.split(`.`),gS=cS(Io,`div`),_S=cS(Lo,`g`,hS),vS={html:`http://www.w3.org/1999/xhtml`,mathml:`http://www.w3.org/1998/Math/MathML`,svg:`http://www.w3.org/2000/svg`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function yS(e,t){return bS(e,t||{})||{type:`root`,children:[]}}function bS(e,t){let n=xS(e,t);return n&&t.afterTransform&&t.afterTransform(e,n),n}function xS(e,t){switch(e.nodeType){case 1:return ES(e,t);case 3:return wS(e);case 8:return TS(e);case 9:return SS(e,t);case 10:return CS();case 11:return SS(e,t);default:return}}function SS(e,t){return{type:`root`,children:DS(e,t)}}function CS(){return{type:`doctype`}}function wS(e){return{type:`text`,value:e.nodeValue||``}}function TS(e){return{type:`comment`,value:e.nodeValue||``}}function ES(e,t){let n=e.namespaceURI,r=n===vS.svg?_S:gS,i=n===vS.html?e.tagName.toLowerCase():e.tagName,a=n===vS.html&&i===`template`?e.content:e,o=e.getAttributeNames(),s={},c=-1;for(;++c<o.length;)s[o[c]]=e.getAttribute(o[c])||``;return r(i,s,DS(a,t))}function DS(e,t){let n=e.childNodes,r=[],i=-1;for(;++i<n.length;){let e=bS(n[i],t);e!==void 0&&r.push(e)}return r}var OS=new DOMParser;function kS(e,t){return yS(t?.fragment?AS(e):OS.parseFromString(e,`text/html`))}function AS(e){let t=document.createElement(`template`);return t.innerHTML=e,t.content}var jS=(function(e,t,n){let r=Sd(n);if(!e||!e.type||!e.children)throw Error(`Expected parent node`);if(typeof t==`number`){if(t<0||t===1/0)throw Error(`Expected positive finite number as index`)}else if(t=e.children.indexOf(t),t<0)throw Error(`Expected child node or index`);for(;++t<e.children.length;)if(r(e.children[t],t,e))return e.children[t]}),MS=(function(e){if(e==null)return IS;if(typeof e==`string`)return PS(e);if(typeof e==`object`)return NS(e);if(typeof e==`function`)return FS(e);throw Error("Expected function, string, or array as `test`")});function NS(e){let t=[],n=-1;for(;++n<e.length;)t[n]=MS(e[n]);return FS(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function PS(e){return FS(t);function t(t){return t.tagName===e}}function FS(e){return t;function t(t,n,r){return!!(LS(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function IS(e){return!!(e&&typeof e==`object`&&`type`in e&&e.type===`element`&&`tagName`in e&&typeof e.tagName==`string`)}function LS(e){return typeof e==`object`&&!!e&&`type`in e&&`tagName`in e}var RS=/\n/g,zS=/[\t ]+/g,BS=MS(`br`),VS=MS(eC),HS=MS(`p`),US=MS(`tr`),WS=MS([`datalist`,`head`,`noembed`,`noframes`,`noscript`,`rp`,`script`,`style`,`template`,`title`,$S,tC]),GS=MS(`address.article.aside.blockquote.body.caption.center.dd.dialog.dir.dl.dt.div.figure.figcaption.footer.form,.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.legend.li.listing.main.menu.nav.ol.p.plaintext.pre.section.ul.xmp`.split(`.`));function KS(e,t){let n=t||{},r=`children`in e?e.children:[],i=GS(e),a=QS(e,{whitespace:n.whitespace||`normal`,breakBefore:!1,breakAfter:!1}),o=[];(e.type===`text`||e.type===`comment`)&&o.push(...YS(e,{whitespace:a,breakBefore:!0,breakAfter:!0}));let s=-1;for(;++s<r.length;)o.push(...qS(r[s],e,{whitespace:a,breakBefore:s?void 0:i,breakAfter:s<r.length-1?BS(r[s+1]):i}));let c=[],l;for(s=-1;++s<o.length;){let e=o[s];typeof e==`number`?l!==void 0&&e>l&&(l=e):e&&(l!==void 0&&l>-1&&c.push(`
`.repeat(l)||` `),l=-1,c.push(e))}return c.join(``)}function qS(e,t,n){return e.type===`element`?JS(e,t,n):e.type===`text`?n.whitespace===`normal`?YS(e,n):XS(e):[]}function JS(e,t,n){let r=QS(e,n),i=e.children||[],a=-1,o=[];if(WS(e))return o;let s,c;for(BS(e)||US(e)&&jS(t,e,US)?c=`
`:HS(e)?(s=2,c=2):GS(e)&&(s=1,c=1);++a<i.length;)o=o.concat(qS(i[a],e,{whitespace:r,breakBefore:a?void 0:s,breakAfter:a<i.length-1?BS(i[a+1]):c}));return VS(e)&&jS(t,e,VS)&&o.push(`	`),s&&o.unshift(s),c&&o.push(c),o}function YS(e,t){let n=String(e.value),r=[],i=[],a=0;for(;a<=n.length;){RS.lastIndex=a;let e=RS.exec(n),i=e&&`index`in e?e.index:n.length;r.push(ZS(n.slice(a,i).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g,``),a===0?t.breakBefore:!0,i===n.length?t.breakAfter:!0)),a=i+1}let o=-1,s;for(;++o<r.length;)r[o].charCodeAt(r[o].length-1)===8203||o<r.length-1&&r[o+1].charCodeAt(0)===8203?(i.push(r[o]),s=void 0):r[o]?(typeof s==`number`&&i.push(s),i.push(r[o]),s=0):(o===0||o===r.length-1)&&i.push(0);return i}function XS(e){return[String(e.value)]}function ZS(e,t,n){let r=[],i=0,a;for(;i<e.length;){zS.lastIndex=i;let n=zS.exec(e);a=n?n.index:e.length,!i&&!a&&n&&!t&&r.push(``),i!==a&&r.push(e.slice(i,a)),i=n?a+n[0].length:a}return i!==a&&!n&&r.push(``),r.join(` `)}function QS(e,t){if(e.type===`element`){let n=e.properties||{};switch(e.tagName){case`listing`:case`plaintext`:case`xmp`:return`pre`;case`nobr`:return`nowrap`;case`pre`:return n.wrap?`pre-wrap`:`pre`;case`td`:case`th`:return n.noWrap?`nowrap`:t.whitespace;case`textarea`:return`pre-wrap`;default:}}return t.whitespace}function $S(e){return!!(e.properties||{}).hidden}function eC(e){return e.tagName===`td`||e.tagName===`th`}function tC(e){return e.tagName===`dialog`&&!(e.properties||{}).open}var nC={},rC=[];function iC(e){let t=e||nC;return function(e,n){Md(e,`element`,function(e,r){let i=Array.isArray(e.properties.className)?e.properties.className:rC,a=i.includes(`language-math`),o=i.includes(`math-display`),s=i.includes(`math-inline`),c=o;if(!a&&!o&&!s)return;let l=r[r.length-1],u=e;if(e.tagName===`code`&&a&&l&&l.type===`element`&&l.tagName===`pre`&&(u=l,l=r[r.length-2],c=!0),!l)return;let d=KS(u,{whitespace:`pre`}),f;try{f=rS.renderToString(d,{...t,displayMode:c,throwOnError:!0})}catch(i){let a=i,o=a.name.toLowerCase();n.message(`Could not render math with KaTeX`,{ancestors:[...r,e],cause:a,place:e.position,ruleId:o,source:`rehype-katex`});try{f=rS.renderToString(d,{...t,displayMode:c,strict:`ignore`,throwOnError:!1})}catch{f=[{type:`element`,tagName:`span`,properties:{className:[`katex-error`],style:`color:`+(t.errorColor||`#cc0000`),title:String(i)},children:[{type:`text`,value:d}]}]}}typeof f==`string`&&(f=kS(f,{fragment:!0}).children);let p=l.children.indexOf(u);return l.children.splice(p,1,...f),jd})}}function aC({tip:e}){return(0,F.jsxs)(`div`,{className:`rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4`,children:[(0,F.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-blue-400`,children:[(0,F.jsx)(xr,{className:`h-3.5 w-3.5`}),`速记提示`]}),(0,F.jsx)(`div`,{className:`prose prose-sm prose-blue dark:prose-invert max-w-none
        [&_table]:w-full [&_table]:text-xs [&_table]:border-collapse
        [&_th]:border [&_th]:border-blue-200 [&_th]:dark:border-blue-700 [&_th]:bg-blue-100/70 [&_th]:dark:bg-blue-900/40 [&_th]:px-2 [&_th]:py-1
        [&_td]:border [&_td]:border-blue-200 [&_td]:dark:border-blue-700 [&_td]:px-2 [&_td]:py-1
        [&_blockquote]:border-l-4 [&_blockquote]:border-blue-400 [&_blockquote]:pl-3 [&_blockquote]:text-sm [&_blockquote]:italic [&_blockquote]:text-blue-800 [&_blockquote]:dark:text-blue-300 [&_blockquote]:my-2
        [&_p]:my-1 [&_p]:text-sm [&_strong]:font-bold
        [&_.katex-display]:overflow-x-auto [&_.katex-display]:py-1
      `,children:(0,F.jsx)(Nf,{remarkPlugins:[Lh,aS],rehypePlugins:[iC],children:e})})]})}var oC=Object.assign({"../tips/A-1.md":`> **速记**：国务院 + 中央军委 **联合**制定，是行政法规（不是法律也不是部门规章）。

**考点**：《无线电管理条例》的法律效力层级

| 层级 | 名称 | 制定机构 |
|------|------|----------|
| 法律 | 《无线电法》（暂无） | 全国人大 |
| **行政法规** | **《无线电管理条例》** | **国务院 + 中央军委** |
| 部门规章 | 《业余无线电台管理办法》 | 工信部 |

**助记**：条例 = 军民两用 → 国务院（民）+ 中央军委（军）联合签发
`,"../tips/A-10.md":`辐射 = 能量以无线电波形式向外传播。闪电电磁波是辐射，电源线传导干扰不是辐射，变压器磁芯内磁场不是辐射，电容极板间电场不是辐射。口诀：辐射必须向外发散到空间，封闭在电路内的能量不是辐射。`,"../tips/A-100.md":`> 业余电台**三大法定用途**：相互通信、技术研究、自我训练（不含娱乐/行车安全）

| 用途 | 合法 | 非法 |
|------|------|------|
| 业余爱好者通信 | ✓ | |
| 技术研究训练 | ✓ | |
| 休闲娱乐消遣 | | ✗ |
| 行车安全工具 | | ✗ |

**违法变种**：挪作私人通话、商业应用、代转信息均违反此条款。记住：**三个用途之外统统禁止**。`,"../tips/A-101.md":`> 多台发射设备视为**一个电台**：指配**一个呼号**，所有设备都需核定并载入执照

| 数量 | 呼号 | 核定方式 | 频段处理 |
|------|------|--------|--------|
| 多台设备 | 1个 | **全部核定** | **全部频段** |
| ~~逐台~~ | ~~多个~~ | ~~部分核定~~ | ~~按需选~~ |

**关键误区**：不是"只需一台"，不是"每频段一台"，而是**统一管理、全部核定**。执照载明所有参数。`,"../tips/A-102.md":`> 中继台三要素：**专人监控** + **遥控手段** + **有害干扰时立即停发**

| 错误选项 | 排除理由 |
|---------|----------|
| 技术加密（B） | 中继台应对所有合法业余台开放 |
| 提高功率（C） | 功率应合规，不得恶意压制 |
| 热备份（D） | 无此法规要求 |

**速记口诀**：中继台 = 人盯 + 遥控 + 出问题即停。核心是**及时止损**，防止有害干扰扩散。
`,"../tips/A-103.md":`> 团体中继台两大义务：**平等服务**覆盖区所有业余电台 + **公开技术参数**

| 常见错误观念 | 正确原则 |
|------------|----------|
| 谁出钱谁优先 | 无线电频谱公共资源，不得独占 |
| 收费才能用 | 不得以费用为门槛限制使用 |
| 仅本团体用 | 必须向覆盖区**所有**业余台开放 |

**助记**：中继台是「**公共基础设施**」，出资≠所有权，必须公平开放、公开参数。
`,"../tips/A-104.md":`> 中继台标准频差：**144MHz 频段 = 600kHz**，**430MHz 频段 = 5MHz**

| 频段 | 标准频差 | 记忆技巧 |
|------|---------|----------|
| 144 MHz | **600 kHz** | 1+4+4=**9**，近似600的个位 |
| 430 MHz | **5 MHz** | 4+3=**7**，430大频段配大频差5M |

**关键词**：采用**业余无线电标准频差**，不得用非标或随意变换频差。两个数值需死记：**600k / 5M**。
`,"../tips/A-105.md":`> 发射设备必须符合两类条件：**商品设备→型号核准**；**自制设备→国标+业余频段限定**

| 设备类型 | 要求 | 禁止 |
|---------|------|------|
| 商品设备 | 型号核准+频率包含业余段 | 无认证国外设备 |
| 自制/改装 | 符合国标+仅业余频段 | 不受限制说法 |

**多选陷阱**：自制设备有**两重限制**（国标+频段），国外设备即使"国际标准"也违规。C、D都是诱饵。`,"../tips/A-106.md":`> "行车方便"不是业余电台用途→违反法定用途→说明**不熟悉管理规定**→不具备设台条件

**反驳逻辑**：
1. 业余电台≠行车通信工具
2. 声称可不遵守规范 = **法规意识缺陷**
3. 不符合"熟悉法规"的设台资格要求

**相关法规层级**：业余电台管理办法 > 个人需求。答案直指"不具备设台条件"。`,"../tips/A-107.md":`> 业余电台向干扰源宣传法规 = **超越"通信/研究/训练"范畴** = **变相广播/执法** = 违规

**为什么错误**：
- 虽然动机好，但**目的不符**（宣传≠通信）
- 占用频率进行非法定用途
- 不是业余电台的职责（执法权属管理部门）

**对比A-108、A-109**：都强调业余电台**只能做三件事**。`,"../tips/A-108.md":`> 转发广播/互联网/电话/他台信号 = **信息源非业余电台** = 违反"相互通信"原则 = 变相转播台

**违规本质**：业余电台只能处理**业余电台间的信息**。一旦引入外部媒体信息，就成了转播/中继（无授权）。

**"技术调试"陷阱**：即使测试也要用**标准测试信号**，不能借用非业余信号。答案C是"曲线救国"说法，仍属违规。`,"../tips/A-109.md":`> 代转其他人/单位/组织信息 = **三方通信** = **违反法定用途** = 变成通信代理

**关键判定**：
- 只要**信息产生方不是通话双方的业余电台**，就违规
- 内容合法性、是否有偿、是否公益 → **都不是豁免条件**
- 根本原因：业余电台只能**"相互通信"**不能**"代理通信"**

**本质区别**：A-B两业余电台通信✓ vs A代B通信✗`,"../tips/A-11.md":`发射 = 由无线电发信电台产生的辐射或辐射产物。业余电台杂散产物是发射。接收机本振辐射不是发射（收信机非发信台），医用电疗机不是发射（非无线电发信电台），闪电不是发射（自然现象非电台）。记忆：发射主体必须是发信电台。`,"../tips/A-110.md":`> 协会播发通知/讲座（即使公益/技术） = **未经批准的广播** = **通播违规** = 一票否决

**"广播"界定**：
- 向**不特定多数**发送信号 = 广播行为
- 需无线电管理机构**事先批准**
- "对会员""有利培训"**不能豁免**

**与A-107对比**：都是超越"通信"范畴；A-107是宣传、A-110是播送。都需批准。`,"../tips/A-111.md":`> 通信语言必须用**明语或公认缩略语**（不含暗语/自创密语/方言隐语）

| 语言类型 | 可用 | 禁止 |
|---------|------|------|
| 明语 | ✓ | |
| 业余通用缩语(QSO/RST) | ✓ | |
| 圈子暗语/自创缩略 | | ✗ |
| 稀有方言隐蔽交流 | | ✗ |

**要点**：**"所有火腿通用"是硬指标**。即使"用多了会变明语"也违规（先发制人）。保证**开放性**。`,"../tips/A-112.md":`> 无执照但有操作证的人 = **可在他人电台操作**→用**该电台呼号**→设台人负责干扰

**三关键**：
1. **可以操作**（只要有操作证）
2. **用他人呼号**（不用自编临时号）
3. **责任归设台人**（操作人没有自己的电台背书）

**B陷阱**：绝对不能自编呼号/用姓名代替。呼号是电台身份，必须使用被授权电台的呼号。`,"../tips/A-113.md":`> 无执照/无操作证人员可以**实习操作**（通过现场监督）：需满足**三个条件**（ABCAll）

| 条件 | 要求 | 监督方 |
|------|------|--------|
| 现场监督 | **设台人/技术负责人在场** | 必须 |
| 频率范围 | **不超B类操作证范围** | 实习者 |
| 发射功率 | **不超监督者操作证范围** | 监督者 |

**D陷阱**：虽然无证，但**在监督下可操作**（实习例外）。记住**"监督"是豁免条件**。多选：A、B、C都对，D错。`,"../tips/A-114.md":`> 设置人法定责任：**设备正常工作**，避免对他业务造成**有害干扰**

| 错误选项 | 错误原因 |
|---------|---------|
| B-更新设备 | 无此要求，正常工作即可 |
| C-最大功率 | 反而会加重干扰 |
| D-经常工作 | 无此要求，可按需使用 |

**记忆要点**：责任不在"追新、追强、追用"，而在**正常+不干扰**。`,"../tips/A-115.md":`> 收信设备使用原则：**只收业余和卫星业余业务信号**，不得接收无关信号

| 选项 | 性质 |
|-----|------|
| A | ✓ 正确规定 |
| B | 无关信号也禁止 |
| C | 违法即违法 |
| D | 个人兴趣≠免责 |

**关键词**：**范围限制**（只业余业务），不因隐蔽或目的改变。`,"../tips/A-116.md":`> 无意接收非业余信息处理：**绝对禁止传播、公布、利用**，三不政策

| 处理方式 | 是否允许 |
|---------|---------|
| 传播公布 | ✗ 禁止 |
| 业余台间共享 | ✗ 禁止 |
| 非无线转发 | ✗ 禁止 |
| 任何利用 | ✗ 禁止 |

**硬规则**：无意接收≠获取权，**封闭处理**唯一选择。`,"../tips/A-117.md":`> 业余电台禁止发射：**广播节目、音像录音、周围声音**等无关信号

| 发射内容 | 允许否 |
|---------|-------|
| 业余通信 | ✓ |
| 广播信号 | ✗ |
| 节目录音 | ✗ |
| 背景声音 | ✗ |

**速记**：**"三不发"**——不发他人内容、不发节目、不发环境音。与A-114联动：发射≈有害干扰源。`,"../tips/A-118.md":`> 违法/违德信息：国家**绝对禁止**利用电台发布传播

| 信息类型 | 态度 |
|---------|------|
| 违反法律 | 禁止 |
| 违反公德 | 禁止 |

**区分点**：D选项"不鼓励≠禁止"是陷阱。**法律面前无区别**，两类信息禁止程度等同。道德问题也被纳入法规管制。`,"../tips/A-119.md":`> 出租车用电台传递载客信息：**商业谋利行为，严禁**

| 要素 | 判定 |
|-----|------|
| 主体 | 出租车（商业运营） |
| 用途 | 传递载客信息 |
| 性质 | 谋取商业利益 |
| 合法性 | ✗ 违法 |

**关键点**：**"谋取商业利益"是红线**，不因"不影响他人"而豁免。频率占用只是表面理由。`,"../tips/A-12.md":`无线电测定是总称，导航和定位是子集，测向是方向专项。无线电测定：测位置速度特性（总称）。无线电导航：测定用于导航（含障碍物告警）。无线电定位：测定用于除导航以外的用途。无线电测向：专门确定方向的测定。四个选项全对。`,"../tips/A-120.md":`> 业余电台禁止商业推销：推促销、促营销**绝对禁止**，无条件例外

| 营利主体 | 态度 |
|---------|------|
| 民间组织获利 | 禁止 |
| 设台人获利 | 禁止 |
| 关联企业获利 | 禁止 |

**陷阱识别**：C、D选项通过"身份特殊性"暗示例外——**全是错**。业余频率=非营利专属，身份无豁免权。`,"../tips/A-121.md":`> 强信号压制他台、转播音乐广播：**阻碍他台通信行为，严禁**

| 违规行为 | 违反规定 |
|---------|---------|
| 故意压制 | 阻碍他台通信 |
| 转播节目 | 无关信号发射 |

**法律定性**：属于**"阻碍"性违法行为**（刑事+民事），不是素质问题、礼貌问题。B、C、D均通过道德淡化→法律后果为错。`,"../tips/A-122.md":`> 业余电台规范使用关系社会无线电安全，爱好者须**自律自管，担负责任**

| 责任方 | 职能 |
|-------|------|
| 个人 | 自律，日常规范 |
| 管理部门 | 监督检查、违法查处 |
| 民间组织 | 协助规范 |

**核心点**：**"加强自律"是主要责任**，不能推给监管部门或协会。执照=权利+义务。D选项"言行可随意"是推卸责任的表现。`,"../tips/A-123.md":`> 业余电台合法用途：**相互通信、技术研究、自我训练**（"三正用"）

| 用途分类 | 属性 |
|---------|------|
| 相互通信 | ✓ 业余 |
| 技术研究 | ✓ 业余 |
| 自我训练 | ✓ 业余 |
| 救灾抢险 | ✗（需特许） |
| 车队联络 | ✗（商业用) |
| 公益服务 | ✗（超范围） |

**区分**：A项三点都是**纯业余业务内核**，B/C/D虽然社会正面但超越业余范围。`,"../tips/A-124.md":`> 业余爱好者身份界定：对无线电**有兴趣**+**获批设置电台**= 爱好者

| 条件 | 必须否 |
|-----|-------|
| 兴趣爱好 | ✓ |
| 电台执照 | ✓ |
| 加入协会 | ✗ |
| 高技术水平 | ✗ |

**关键词**：**"管理机构批准"是法律锚点**，区分爱好者和非法使用者。兴趣≠身份，执照才确认。`,"../tips/A-125.md":`> 业余电台禁止活动四项：**测参数、泄密资料、收发超范围信号、传播截获信息**

| 禁止活动 | 类别 |
|---------|------|
| A-电波参数测试监测 | 国家安全 |
| B-向境外提供参数 | 涉密信息 |
| C-无关信号收发 | 超范围使用 |
| D-传播截获信息 | 信息安全 |

**多选综合点**：四项分别涉及**国安、涉密、超范围、信息泄露**，均为刚性红线，全选A-B-C-D。无灰色地带。`,"../tips/A-126.md":`> 业余电台四大底线：**频段专用、频率独占、不造干扰、不从事违法**

| 规定内容 | 核心要求 |
|---------|--------|
| 频段限制 | 仅在业余/卫星业余频段 |
| 频率管理 | 不得擅自使用频率 |
| 干扰管理 | 不对合法业务造成有害干扰 |
| 法律底线 | 禁止违法犯罪活动 |

**记忆技巧**：四个"不"字原则——不越频段、不乱频率、不造干扰、不干违法。这是业余电台的基本法则，选项A、B、C、D全选。`,"../tips/A-127.md":`> 超越规定=**收听非业余频率的其他业务电台**，但国际空间站业余电台除外

| 违规行为 | 说明 | 是否超越 |
|---------|------|--------|
| 收听民航电台 | 民用航空业务频率 | ✓ 超越 |
| 收听铁路机车 | 铁路业务频率 | ✓ 超越 |
| 收听渔船海事 | 海事业务频率 | ✓ 超越 |
| 收听空间站 | **业余无线电业务** | ✗ 不超越 |

**关键区分**：国际空间站ISS运行在**业余频段**（如145.800MHz），属业余业务范畴，收听合法。其他三项都是**非业余业务频率**。`,"../tips/A-128.md":`> 自制改装必须满足**三条件**：有核准证+频率含业余段+**未擅自修改软件扩频**

| 设备类型 | 能否使用 | 原因 |
|---------|--------|------|
| 批量未核准设备 | ✗ 不可 | 必须有型号核准证 |
| 核准证不含业余频率 | ✗ 不可 | 频率范围不匹配 |
| 擅自改软件扩频 | ✗ 不可 | **非法扩频** |
| 合法改装含业余频段 | ✓ 可以 | 依法改装，核准证有效 |

**红线**：A/B/C三项都违规。D项"依法改装"是关键词，表示在核准证框架内修改，合法使用。`,"../tips/A-129.md":`> 四大禁区：**违法信息、商业目的、故意干扰、超执照信号**

| 禁止行为 | 具体表现 | 性质 |
|---------|--------|------|
| A项 | 传播违法内容 | 内容违法 |
| B项 | 谋取商业利益 | 性质违法 |
| C项 | 故意干扰他台 | 行为违法 |
| D项 | 收发超执照信号 | 超范围违法 |

**记忆**：**"内容、商业、干扰、超范"**——四个维度的禁区。A/B/C/D全选，代表业余电台的**属性限制**（非营利、非干扰、执照范围内）。`,"../tips/A-13.md":`业余电台 = 一个或多个发信机、收信机或其组合（含附属设备），数量不限。选项B/C/D均错在说只能包含一个设备。法规从未限制台站设备数量。记忆：凡说只能一个即可排除。`,"../tips/A-130.md":`> 三禁一不：**禁泄密、禁冒用、禁倒卖、不泄露国情参数**

| 禁止行为 | 触犯底线 | 后果等级 |
|---------|--------|--------|
| A项 | 传播无意接收信息 | 隐私泄露 |
| B项 | 擅自编制/使用呼号 | 身份冒充 |
| C项 | 涂改/倒卖执照 | 凭证造假 |
| D项 | 提供国家安全参数 | **国家安全** |

**关键词**：**"泄露"（信息、呼号）、"倒卖"（执照）、"国家安全"**。D项涉及国防安全（电波参数=频率、功率等技术指标），等级最高。A/B/C/D全是法律底线。`,"../tips/A-131.md":`> 业余电台三维护：**定期维护、性能达标、不产生有害干扰**

| 维护要求 | 具体内容 | 检查周期 |
|---------|--------|--------|
| 定期维护(A) | 设备保养检修 | 定期进行 |
| 国家标准(B) | 性能指标符合GB标准 | 持续满足 |
| 无线电规定(C) | 符合工信部管理规范 | 持续满足 |
| 干扰管理(D) | 避免对他台产生干扰 | 全时监控 |

**记忆**：**"三位一体"维护体系**——主动维护(A)+标准合规(B/C)+干扰管理(D)。体现"**使用者责任**"原则：设备维护是使用者义务，保证性能是前提，不干扰是底线。A/B/C/D全选。`,"../tips/A-132.md":`> 通信语言三可一不可：明语✓、公认缩略语✓、公开协议✓、**自创特殊缩略语✗**

| 允许 | 禁止 |
|------|------|
| 明语（白话） | 自创特殊缩略语 |
| 业余领域**公认**缩略语（如CQ/73） | 私下约定暗语 |
| 公开技术体制/通信协议 | — |

**关键词**：「公认」「公开」是核心——自创 = 暗语 = 违规。
`,"../tips/A-133.md":`> 应急通信与非业余台通信：**只有真实突发灾害**才行，日常训练一律不行

| 场景 | 能否与非业余台通信 |
|------|-------------------|
| 突发重大自然灾害等**紧急情况** | ✅ 可以 |
| 日常应急训练 | ❌ 不行 |
| 公益救援团体训练 | ❌ 不行 |

**助记**：真枪实弹才开放，平时训练守本分。选项B/C/D都是「训练」场景，全错。
`,"../tips/A-134.md":`> 与非业余台通信的唯一条件：**突发重大自然灾害** + 内容限于**抢险救灾/应急救援**直接相关

两个缺一不可：
- **前提**：突发重大自然灾害等紧急情况
- **内容**：抢险救灾直接相关 或 应急救援部门交办任务

与A-133/A-135同一考点，三题连贯记忆：灾害触发 → 救灾内容。公益活动、科技教育、技术实验均**不是**合法理由。
`,"../tips/A-135.md":`> 应急通信内容：**紧急情况下**可涉及应急救援部门交办任务；平时任何情况均不可

| 时机 | 通信内容限制 |
|------|-------------|
| 突发重大自然灾害**紧急情况** | 可涉及应急救援部门交办任务 ✅ |
| 平时任何时候 | ❌ 不可 |
| 平时应急训练 | ❌ 不可 |
| 日常公益活动 | ❌ 不可 |

**助记**：「任何时候」「日常」「平时」等词出现 = 错误选项。
`,"../tips/A-136.md":`> 应急处置四规定全对：可通非业余台、内容限紧急事务、**48小时内报告**、紧急消除后关闭

| 规定 | 关键数字/条件 |
|------|---------------|
| 可与非业余台通信 | 仅限应急处置需要 |
| 内容限制 | 与突发事件直接相关 |
| 临时设置无需批准 | 但须**48小时内**向无线电管理机构报告 |
| 关闭时机 | 紧急情况**消除后**及时关闭 |

**48小时**是高频考点，牢记。
`,"../tips/A-137.md":`> 监督检查业余台的机构：只有**无线电管理机构**（政府职能部门），其他组织无此权力

| 机构 | 有无监督权 |
|------|------------|
| **无线电管理机构** | ✅ 唯一合法 |
| 业余无线电民间组织 | ❌ 无独立监督权 |
| 居委会/村委会/物委会 | ❌ 无权 |
| 国家计量监督部门 | ❌ 无权 |

**助记**：政府管频率，民间管不着。
`,"../tips/A-138.md":`> 频谱资源四点全对：**国家所有**、统一规划+合理开发+**有偿使用**、鼓励研究、可实施**无线电管制**

| 关键点 | 记忆词 |
|--------|--------|
| 所有权 | **国家所有** |
| 使用原则 | 统一规划·合理开发·**有偿**使用 |
| 技术方向 | 鼓励研究、提高利用效率 |
| 特殊权力 | 国家安全/重大任务可**无线电管制** |

「有偿」二字常考，频谱不是免费公共品。
`,"../tips/A-139.md":`> 频率/业务/台站三不得：**不得擅用频率**、不得造成**有害干扰**、不得用于**违法犯罪**，业余台须遵守条例

三个「任何单位或个人不得」：
1. **擅自使用**无线电频率
2. 对依法业务造成**有害干扰**
3. 利用无线电台进行**违法犯罪**

第四条：设置业余台须遵守《**无线电管理条例**》。四选项全对，属送分题，记住「三不得+一遵守」。
`,"../tips/A-14.md":`业余业务 = 自我训练+相互通信+技术研究。卫星业余业务 = 同目的但经卫星中转。C/D错在说可与其他无线电业务互通——业余台只能和业余台通信，不能跨业务通信。`,"../tips/A-140.md":`> 擅设无线电台的刑事处罚来自**《刑法》**，有期徒刑+罚金，情节严重3年以下，特别严重3-7年

| 情节 | 处罚 |
|------|------|
| 情节严重 | **3年以下**有期徒刑/拘役/管制 + 罚金 |
| 情节特别严重 | **3年以上7年以下**有期徒刑 + 罚金 |
| 单位犯罪 | 单位罚金 + 直接负责人同款处罚 |

**助记**：有期徒刑 = 刑法（Criminal Law）。条例只有行政处罚，无监禁。
`,"../tips/A-141.md":`> 频率使用需获批准，法律依据是《民法典》第252条"频谱资源属国家所有"

**关键法律层级**：
- 《民法典》第252条 → 频谱资源国家所有权
- 这是所有无线电管理的法律基础
- 其他法律（宪法、刑法、电信法）不含此条款

**助记**：民法典规定频谱属国 → 使用需获批准`,"../tips/A-142.md":`> 无线电管制范围：**特定时间+特定区域**内的强制性管理

| 管制类型 | 范围 | 时间 | 性质 |
|--------|------|------|------|
| 正确定义 | 特定区域 | 特定时间 | 强制性 |
| 错误选项 | 全国/例行 | 所有/例行 | 指导/自律 |

**助记**：不是全面、全时段管制，而是**有针对性的限时限地**管制`,"../tips/A-143.md":`> 无线电管制 = **特定时间+特定区域** + 对**波的发射/辐射/传播**的**强制性**管理

| 管制对象 | 管制内容 | 管制性质 |
|--------|--------|--------|
| 无线电波 | 发射、辐射、传播 | 强制性 |
| 非管制对象 | 设备生产销售 | 非强制 |

**对比A-142**：两题强调同一定义，区别在于一问范围、一问性质`,"../tips/A-144.md":`> 无线电管制可以**禁止业余电台使用**，可实施**技术阻断**，但不限制设备生产销售

**可采取措施**：
- ✓ 限制或禁止业余电台**使用**
- ✓ 对特定频率**技术阻断**
- ✗ 限制设备生产销售
- ✗ 有些电台可豁免管制

**助记**：管制针对**使用行为**，不是**生产销售**`,"../tips/A-145.md":`> 管制决定权二级：**国务院+中央军委**（全国跨省级），**地方政府+军区**（省级）

| 范围 | 决定机构 | 不能决定 |
|------|---------|---------|
| 全国/跨省 | 国务院+中央军委 | ✗国家无线电管理机构 |
| 省级 | 省政府+军区 | ✗地方无线电管理机构 |

**法律关系**：军事+行政双重权力，无线电管理机构只**执行**，不**决定**`,"../tips/A-146.md":`> 违反管制命令处罚权：**无线电管理机构**（行政）+ **公安机关**（治安）

| 违反行为 | 处罚机构 | 处罚依据 |
|---------|---------|---------|
| 违反管制命令 | 无线电管理机构 | 无线电法规 |
| 触犯治安规定 | 公安机关 | 治安管理条例 |
| 非法操作 | ✗业余无线电协会 |  |

**助记**：业协**无处罚权**，只能监管/建议`,"../tips/A-147.md":`> 违反无线电管制命令/指令处罚：**改正→关闭查封→吊销执照**+**治安处罚**

| 处罚阶段 | 措施 | 条件 |
|---------|------|------|
| 初期 | 责令改正 | 首次 |
| 中期 | 关闭/查封/暂扣/拆除设备 | 拒不改正 |
| 严重 | 吊销电台执照 | 情节严重 |
| 追加 | 公安处罚 | 触犯治安法 |

**注意**：无三万元罚款，只有查封/吊销`,"../tips/A-148.md":`> 未经许可用频率罚款：**5万以下**→**5-20万**，递进式处罚

| 违法程度 | 处罚额度 | 措施 |
|---------|---------|------|
| 初犯 | 没收设备+5万以下罚款 | 责令改正 |
| 拒不改正 | 5万以上20万以下罚款 | 并处 |
| 错误选项 | 1千元/警告/书面检查 | 过轻/不适用 |

**助记**：**频率违法 = 大罚款**（5-20万量级）`,"../tips/A-149.md":`> 擅自设置业余电台罚款：**5万以下**→**5-20万**，同A-148规格

| 违法行为 | 初次处罚 | 拒不改正 | 设备处置 |
|---------|---------|---------|--------|
| 擅自设置业余电台 | 5万以下 | 5-20万 | 没收违法所得 |
| 与A-148对比 | **相同罚款档次** | **相同递进** | **严格同步** |

**注意**：业余电台与频率违法处罚**完全一致**`,"../tips/A-15.md":`业余无线电爱好者两个核心条件：经正式批准 + 纯个人爱好不谋利。无年龄限制（D错）。涉及谋取利润则不符合定义（C错）。记忆：批准+不谋利，年龄不限。`,"../tips/A-150.md":`> 用无线电诈骗等违法活动：**20-50万罚款**，不构成犯罪时适用

**罚款档次对比**：
| 违法类型 | 罚款范围 |
|---------|---------|
| 频率违法/擅自设置 | 5万/5-20万 |
| 诈骗等犯罪活动 | **20-50万** |
| 其他（选项B/C/D） | 不适用 |

**助记**：**诈骗行为罚款最重**（20-50万），尚不构成刑事犯罪的上限`,"../tips/A-151.md":`> 不按执照规定使用电台罚款：**3万以下**→**3-10万**，情节重时吊销执照

| 违法程度 | 罚款 | 措施 | 严重后果 |
|---------|------|------|--------|
| 轻微 | 3万以下 | 没收违法所得+改正 | 可并处 |
| 严重 | 3-10万 | **吊销执照** | 造成严重后果 |

**注意**：与A-152雷同，**两题罚款档次同为3万/3-10万**`,"../tips/A-152.md":`> 故意收发超执照范围信号、传播无意接收信息罚款：**3万以下**→**3-10万**+吊销执照

| 违法行为 | 初次 | 严重后果 |
|---------|------|--------|
| 收发超范围信号 | 3万以下罚款 | 吊销+3-10万 |
| 传播无意接收信息 | 没收违法所得 | **最严厉处罚** |

**与A-151区别**：都是**3/3-10万档**，但A-152是**故意超范围侵权**行为，更严重`,"../tips/A-153.md":`> 擅自编制使用呼号：**改正+没收+3万以下**；严重则**吊销执照+3-10万**

| 违规情节 | 处罚措施 | 罚款额度 |
|---------|--------|--------|
| 一般情况 | 责令改正、没收违法所得 | 3万元以下 |
| 造成严重后果 | 吊销执照 | 3-10万元 |

**关键点**：
- 呼号是身份证，不能**私自编制/冒用**
- 分两档处罚，严重情况**吊销执照**是最严
- 对标153题（呼号）vs 154题（干扰）vs 155题（安全频率干扰）`,"../tips/A-154.md":`> 业余电台干扰业务：**责令改正→拒不改正→没收设备+5-20万+吊销**

| 违规程度 | 主要处罚 | 罚款范围 | 极端措施 |
|---------|--------|--------|--------|
| 初次发现 | 责令改正 | — | — |
| 拒不改正 | 没收设备 | 5-20万元 | 吊销执照 |

**助记**：
- **逐级升级**处罚：先劝→不听→没收+巨罚+吊销
- 干扰普通业务罚款**5-20万**（比呼号问题严重）
- 与155题对比：普通干扰5-20万，**涉及安全频率则20-50万**`,"../tips/A-155.md":`> 干扰船舶/航天/航空/铁路安全频率：**直接罚20-50万**，最严重！

| 干扰对象 | 特点 | 处罚标准 |
|---------|------|--------|
| 普通业务 | 一般干扰 | 5-20万（A-154） |
| **安全频率** | **涉及人身安全** | **20-50万（A-155）** |

**核心速记**：
- **三重身份**危险对象：**船舶+航天/航空+铁路**都是生命安全
- **导航、遇险救助、安全通信**频率受重点保护
- 处罚**翻倍升级**：20-50万（无需吊销就直接罚最重）
- 对标154题，本题是**最高罚款档**`,"../tips/A-156.md":`> 大功率设备**未抑制电波**：拒不改正->没收+**3-10万**；严重后果->**10-30万**

| 情节 | 处罚 |
|------|------|
| 拒不改正 | 没收+3-10万 |
| 严重后果 | 10-30万 |

排除C/D（非法电台条款）。A-156/157/158处罚相同，均选**A、B**。
`,"../tips/A-157.md":`> **境外组织**境内测电波：处罚与A-156完全相同，拒不改正->没收+**3-10万**；严重->**10-30万**

三题联记：A-156/157/158违规行为不同，**处罚档位相同**，均选**A、B**。`,"../tips/A-158.md":`> 向**境外**提供涉**国家安全**电波参数：处罚与A-156/157完全相同

| 题号 | 违规行为 |
|------|----------|
| A-156 | 大功率设备未抑制 |
| A-157 | 境外组织境内测电波 |
| A-158 | 向境外提供涉安全参数 |

三种行为，一套罚款（3-10万/10-30万），均选**A、B**。
`,"../tips/A-159.md":`> **未取型号核准**生产进口：责令改正+**5-20万**；拒不改正没收+**20-100万**

| 阶段 | 处罚 |
|------|------|
| 责令改正 | 5-20万 |
| 拒不改正 | 没收+20-100万 |

口诀：**没核准罚最狠**，最高100万，选**A、B**。
`,"../tips/A-16.md":`发射类别 = 用标准符号标示发射特性的一组特性，包含：主载波调制方式（AM/FM/SSB等）、调制信号类型、被发送信息的类型、其他适用信号特性。C/D是干扰项（关于设备数量），与发射类别无关直接排除。`,"../tips/A-160.md":`> 型号核准设备销售**未备案**：初次仅责令改正；拒不改正仅**1-3万**（最低档）

备案是程序性手续，违规最轻。对比：未取核准最高100万，备案仅3万。选**A、B**。
`,"../tips/A-161.md":`> 违反无线电条例，**不止**受无线电机构处罚，还可能叠加**治安处罚**或**刑事责任**

排除D（D说只需无线电机构处罚，错误）。法律责任可叠加，选**A、B**。`,"../tips/A-162.md":`> **隐瞒/虚假材料**申请执照：**不予许可+警告**（无罚款）

| 行为 | 执照状态 | 处罚 |
|------|----------|------|
| 虚假申请(A-162) | 未取得 | 不予许可+警告 |
| 欺骗贿赂(A-163) | 已取得 | 行政/刑事 |

助记：没进门->拒绝+警告，选**A**。
`,"../tips/A-163.md":`> **欺骗贿赂**取得执照（已拿到）：**依法行政处罚**；构成犯罪->**刑事责任**

区别A-162（虚假申请未取得）只是警告；本题已骗到手->更重。选**A、B**。
`,"../tips/A-164.md":`> **治安管理处罚法**：故意干扰拒不改正->**5-10日拘留**；情节严重->**10-15日拘留**

| 情节 | 拘留天数 |
|------|----------|
| 一般 | 5-10日 |
| 严重 | 10-15日 |

口诀：干扰不改**坐5天**，严重**最多15天**。B说不会拘留是错误的，选**A**。
`,"../tips/A-165.md":`> **网络安全法**四禁：危害安全、危害国家利益、传虚假信息、侵害他人权益（**全选ABCD**）

助记四不得：不危网络安全(A)、不危国家利益(B)、不传虚假信息(C)、不侵他人权益(D)，全选**ABCD**。`,"../tips/A-166.md":`> 国安法总体安全观：**人民**(宗旨)->**政治**(根本)->**经济**(基础)->**军文社**(保障)

| 领域 | 定位 |
|------|------|
| 人民安全 | 宗旨 |
| 政治安全 | 根本 |
| 经济安全 | 基础 |
| 军文社安全 | 保障 |

速记口诀：**宗根基保**，答案**A**。
`,"../tips/A-167.md":`> **国安法公民四义务**：遵法律、报线索、供证据、给便利（**全选ABCD**）

助记：遵-报-供-助，四项皆是义务，全选**ABCD**。`,"../tips/A-168.md":`> 次要业务频率使用：必须**遵守无线电管理机构对该频率的具体规定**

排除法：B(听不到就用-错)、C(仅遵划分规定不够-错)、D(任意使用-错)。次要业务受管理机构约束，选**A**。`,"../tips/A-169.md":`> 业余台频率使用权：在**管理机构核准频段内**，各类业余电台享有**平等**使用权

排除：B(任意频段-错)、C(有优先级-错)、D(组织有特权-错)。核准范围内人人平等，选**A**。
`,"../tips/A-17.md":`SSB（单边带）= 调幅AM只传一个边带，不是调频FM。对比：DSB双边带是调幅AM传两个边带；SSB单边带是调幅AM只传一个边带；FM调频与边带概念无关。口诀：Single SideBand中Band对应幅度调制AM。`,"../tips/A-170.md":`> **次要业务**规则：**不得**干扰主要业务；**无权**要求保护；无权抗议次要间干扰

| 角色 | 产生干扰 | 要求保护 |
|------|----------|----------|
| 主要业务 | 受保护 | 有权 |
| 次要业务 | 不得干扰主要 | 无权 |

助记：次要=小弟，不能惹大哥，不能要保护，选**A**。
`,"../tips/A-171.md":`> 次要业务：不得要求主要业务保护，但可以要求同级次要业务保护

| 干扰来源 | 次要业务能否要求保护 |
|----------|----------------------|
| **主要业务** | ❌ 不得要求 |
| 同一/其他次要业务 | ✅ 可以要求 |

本题考「对主要业务」→ **不得**提出保护要求。与A-172互为镜像题，记忆口诀：**主要欺负次要，次要之间平等**。
`,"../tips/A-172.md":`> 次要业务：不怕同级，只怕主要——可要求次要间相互保护

| 干扰来源 | 次要业务能否要求保护 |
|----------|----------------------|
| **主要业务** | ❌ 不得要求 |
| **同一/其他次要业务** | ✅ 可以要求 |

本题考「对同一/次要业务」→ **可以**提出保护要求。与A-171互为反面，选项A「可要求保护不受次要干扰」是正确答案。
`,"../tips/A-173.md":`> 我国业余专用频段：7、14、21、28MHz + 47GHz，缺144/430

**专用（Exclusive）= 仅给业余，无他人共用**

记忆：**7×2=14，14+7=21，21+7=28**，HF四段全专用。微波唯一专用段是 **47GHz**（非144MHz，144MHz是共用主要业务）。干扰项常塞入144/430来混淆。`,"../tips/A-174.md":`> 30MHz以下共用主要业务：1.8、3.5、14.25、18.068、24.89MHz

| 频段 | 俗称 | 备注 |
|------|------|------|
| 1.8MHz | 160m | 主要业务 |
| 3.5MHz | 80m | 主要业务 |
| 14.25MHz | 20m上段 | 主要业务 |
| **18.068MHz** | 17m WARC | 主要业务 |
| **24.89MHz** | 12m WARC | 主要业务 |

关键：含两个 **WARC频段**（18、24MHz），7/21/28MHz是**专用**不在此列。
`,"../tips/A-175.md":`> VHF/UHF共用主要：50MHz + 144MHz；430MHz是次要业务

| 频段 | 业务类别 |
|------|----------|
| **50MHz** | 共用主要 |
| **144MHz** | 共用主要 |
| 430MHz | 共用**次要** |

记忆：**5和144是主，430是次**。常见干扰项把430塞进来，430MHz业余是次要业务！
`,"../tips/A-176.md":`> 业余作为「唯一主要业务」共3个频段，3GHz以下仅144-146MHz

**唯一主要业务**：共用频段中只有业余是主要，无其他主要业务。

3个频段：**144-146MHz**（VHF）、**430-440MHz**（UHF次要→不对，需记准）实际3个在高频段。

口诀：**唯一主+3GHz以下=144**，选A「3个，144-146MHz」。
`,"../tips/A-177.md":`> 1200MHz以下次要业务频段：135.7kHz、5351.5kHz、10.1MHz、430MHz

| 频段 | 单位 | 特点 |
|------|------|------|
| **135.7kHz** | LF超长波 | 次要 |
| **5351.5kHz** | HF | 次要 |
| **10.1MHz** | HF（WARC） | 次要 |
| **430MHz** | UHF | 次要 |

记忆：次要业务频段特征是**偏冷门**，10.1MHz是WARC频段里属次要的。3.5/7/144MHz均为主要业务，不在此列。
`,"../tips/A-178.md":`> 最高频段：248-250GHz，且是唯一主要业务

选项对比陷阱：

| 选项 | 频段 | 类别 | 对错 |
|------|------|------|------|
| **A** | **248-250GHz** | 唯一主要 | ✅ |
| B | 134-136GHz | 唯一主要 | ❌频率不对 |
| C | 47-47.2GHz | 专用 | ❌ |
| D | 77.5-78GHz | 主要 | ❌ |

记忆：**248=2×124**，频率最高，身份也最高（唯一主要）。
`,"../tips/A-179.md":`> WARC-76三频段：10.1、18.068、24.89MHz（1976年世界无线电行政大会新增）

| WARC频段 | 范围 | 俗称 |
|----------|------|------|
| **10.1-10.15MHz** | 0.05MHz宽 | 30m |
| **18.068-18.168MHz** | 0.1MHz宽 | 17m |
| **24.89-24.99MHz** | 0.1MHz宽 | 12m |

记忆：**10/18/24**，均以这三数字开头，小数部分：10结尾.1，18结尾.068，24结尾.89。干扰项常改小数部分，记**10.1、18.068、24.89**这三个起始值。
`,"../tips/A-18.md":`干扰三要素（ABC全对）：1.来源：发射/辐射/感应产生的无用能量；2.表现：性能下降、误解、信息丢失；3.可避免性：无此无用能量则后果可避免。D说不会影响接收明显矛盾，排除。`,"../tips/A-180.md":`> 40米波段=7MHz，三区不同：区1和3是7.0-7.2，区2是7.0-7.3（宽）

| ITU区域 | 频率范围 |
|---------|----------|
| 1区（欧非） | 7.0-**7.2**MHz |
| **2区（美洲）** | 7.0-**7.3**MHz（最宽）|
| 3区（亚太） | 7.0-**7.2**MHz |

**中国在3区**，用7.0-7.2MHz。类别：**专用**。记忆：美洲（区2）频谱资源宽，多0.1MHz。
`,"../tips/A-181.md":`> 160米波段=1800-2000kHz（1.8-2.0MHz），主要业务

**波长计算**：λ=300/f(MHz) = 300/1.8 ≈ **160米** ✓

易错点：
- 范围是 **1800-2000kHz**（整200kHz宽）
- 类别是**主要业务**（非专用，非次要）
- 干扰项缩短为1800-1900或改成次要业务
`,"../tips/A-182.md":`> 80米波段=3.5-3.9MHz，主要业务（非专用！）

**波长**：300/3.5 ≈ 85m，习惯称80m段。

| 项目 | 正确值 |
|------|--------|
| 起始 | 3.5MHz |
| 结束 | **3.9MHz**（非3.6/4.0）|
| 类别 | **主要业务**（非专用）|

记忆：**3.5到3.9**，差0.4MHz，主要业务。3.5专用段仅是A-173里7/14/21/28的部分，80m不专用。
`,"../tips/A-183.md":`> 20米波段=14MHz段，两段式：14.0-14.25MHz专用 + 14.25-14.35MHz主要

| 子段 | 范围 | 类别 |
|------|------|------|
| 下段 | 14.000-**14.250**MHz | **专用** |
| 上段 | 14.250-**14.350**MHz | **主要业务** |

口诀：**14.25是分界线**，下专用上主要。总宽350kHz（0.35MHz）。干扰项常把分界线改成14.15或把全段说成专用。
`,"../tips/A-184.md":`> 15米波段=21-21.45MHz，专用业务（独占）

**波长**：300/21 ≈ 14.3m，习惯称15m段（取整）。

| 项目 | 正确值 |
|------|--------|
| 范围 | 21.000-**21.450**MHz |
| 宽度 | 450kHz |
| 类别 | **专用**（非主要/次要）|

记忆：21MHz段是**纯专用**，结束于21.45（非21.35）。与A-173对应，21MHz在专用四频段中。
`,"../tips/A-185.md":`> 10米波段=28-29.7MHz，专用业务（最宽HF专用段）

**波长**：300/28 ≈ 10.7m → 俗称10米段。

| 项目 | 正确值 |
|------|--------|
| 范围 | 28.000-**29.700**MHz |
| 宽度 | **1.7MHz**（最宽！）|
| 类别 | **专用** |

记忆：28到29.7，不是29.6也不是30。与A-173对应，28MHz在专用四频段。HF四专用：7/14/21/28，其中**28MHz段最宽**（1.7MHz）。
`,"../tips/A-186.md":`> 6米波段：**50-54MHz**，业余为**主要业务**

| 波段 | 频率 | 状态 |
|------|------|------|
| 6米 | 50-54MHz | 主要 |
| 0.7米 | 430-440MHz | 次要 |

口诀：**6米主角，70cm辅助**。
`,"../tips/A-187.md":`> 2米波段：**144-148MHz**，前段唯一主要，后段共同主要

| 子频段 | 状态 |
|--------|------|
| 144-146MHz | **唯一**主要业务 |
| 146-148MHz | **共同**主要业务 |

记忆：**144独，146共**。
`,"../tips/A-188.md":`> 0.7米波段：**430-440MHz**，业余为**次要业务**

范围整10MHz宽（430-440），不是420-470。**70cm次要**，被无线电定位优先占用。`,"../tips/A-189.md":`> 430-440MHz主要业务：**无线电定位**+**航空无线电导航**

排除法：固定/移动在低频段，水上在156MHz，这里锁定**雷达定位+飞机导航**。
`,"../tips/A-19.md":`有害干扰两类：1.危害导航或安全业务的运行；2.严重损害/阻碍/一再阻断正常无线电业务。C错（有害干扰会受处罚）；D错（不是只管业余台，需遵守所有业务规范）。`,"../tips/A-190.md":`> 我国LF业余频段：**135.7-137.8kHz**（约136kHz）

| 频率 | 频段 | 正确 |
|------|------|------|
| 135.7-137.8kHz | LF低频 | 是 |
| 472-479kHz | MF中频 | 否 |

LF=30-300kHz，**136kHz是LF唯一窗口**。
`,"../tips/A-191.md":`> IARU信标频率（±500Hz禁止）：14.1、18.11、21.15、24.93、28.2 MHz

| 波段 | 信标频率 |
|------|----------|
| 20m | 14.100MHz |
| 17m | 18.110MHz |
| 15m | 21.150MHz |
| 12m | 24.930MHz |
| 10m | 28.200MHz |

顺序：**14.1→18.11→21.15→24.93→28.2**
`,"../tips/A-192.md":`> 7MHz段LSB话音实际占用：**7.030-7.200MHz**

LSB（下边带）在载波下方。7.000-7.030留给CW/数字，**话音从7.030起**，不是7.000。
`,"../tips/A-193.md":`> 14MHz段USB话音实际占用：**14.100-14.350MHz**

USB（上边带）在载波上方。下限正好是IARU信标**14.100**，上限频段边界**14.350**。口诀：**信标线上话音起**。
`,"../tips/A-194.md":`> 18MHz段USB话音实际占用：**18.1105-18.168MHz**

| 端点 | 数值 | 来源 |
|------|------|------|
| 下限 | 18.1105MHz | 信标18.110+500Hz |
| 上限 | 18.168MHz | 频段边界 |

**信标+500Hz才是起点**，不是18.110整数。
`,"../tips/A-195.md":`> 21MHz段USB话音：**21.125-21.45MHz**，挖掉信标禁区21.1495-21.1505MHz

信标21.150MHz ±500Hz为禁区，话音在禁区两侧可用。**15m话音大区间，信标处挖小缺口**。选B（不挖缺口）是陷阱。`,"../tips/A-196.md":`> 24MHz段USB话音实际占用：**24.9305-24.99MHz**

| 端点 | 数值 |
|------|------|
| 下限 | 24.9305（信标24.93+500Hz） |
| 上限 | 24.99 |

规律同18MHz：**信标加半kHz**才是实际起点。
`,"../tips/A-197.md":`> 28MHz段USB话音实际占用：**28.3-29.3MHz**

10m频段模式分区：CW(28.0-28.3) → **USB(28.3-29.3)** → 过渡(29.3-29.51) → FM(29.51-29.7)。口诀：**USB 28.3起到29.3止**。`,"../tips/A-198.md":`> 28MHz段FM话音实际占用：**29.51-29.7MHz**（频段顶端）

| 模式 | 频率 |
|------|------|
| USB | 28.3-29.3MHz |
| 过渡 | 29.3-29.51MHz |
| **FM** | **29.51-29.7MHz** |

**FM在10m顶端29.51起**，不是29.3。
`,"../tips/A-199.md":`> 144MHz本地联络**应避免**：**144-144.035MHz**和**145.8-146MHz**

| 保护频段 | 用途 |
|---------|------|
| 144.000-144.035 | EME月面反射 |
| 145.800-146.000 | 卫星上下行 |

**2米两端禁区**：低端月球，高端卫星。
`,"../tips/A-2.md":`> **速记**：《业余无线电台**管理办法**》= 工信部部门规章，注意与"条例"区别。

**对比记忆**：

| 文件 | 制定机构 | 法规层级 |
|------|----------|----------|
| 《无线电管理**条例**》 | 国务院 + 中央军委 | 行政法规 |
| 《业余无线电台**管理办法**》 | 工业和信息化部 | 部门规章 |

**助记**：管理**办法**→ 一个部门（工信部）说了算；管理**条例**→ 军民联合才能颁布
`,"../tips/A-20.md":`次要业务规则：对主要业务让路+不索赔；对同级次要业务可索赔保护。即对上低头（不扰/不索），对同级可主张权利。D说只管业余台明显错误。`,"../tips/A-200.md":`> 430MHz本地联络**应避免**：**431.9-432.24MHz**和**435-438MHz**

| 保护频段 | 用途 |
|---------|------|
| 431.9-432.240 | EME弱信号 |
| 435-438 | 卫星频段 |

类比2米段：**432是EME，435-438是卫星**，本地通联绕开。`,"../tips/A-201.md":`> 下边带向低频延伸，载波需从F1**上移一个下边带宽**，信号才不越下边界

| 边界 | 信号延伸方向 | 载波公式 |
|------|------------|--------|
| 下限F1 | 下边带→低频↓ | **F1 + 下边带宽** |
| 上限F2 | 上边带→高频↑ | F2 - 上边带宽 |

口诀：**下限往上推**，与A-202「上限往下退」对称记忆。
`,"../tips/A-202.md":`> 上边带向高频延伸，载波需从F2**下移一个上边带宽**，信号才不越上边界

| 边界 | 信号延伸方向 | 载波公式 |
|------|------------|--------|
| 下限F1 | 下边带→低频↓ | F1 + 下边带宽 |
| 上限F2 | 上边带→高频↑ | **F2 - 上边带宽** |

口诀：**上限往下退**，与A-201「下限往上推」对称记忆。
`,"../tips/A-203.md":`> ITU对**5~30MHz短波**的态度：鼓励用其他手段通信，防止对**远距离无线电通信**的有害干扰

短波天波传播，天然适合远距离通信。ITU不鼓励用它做本地通信。

记忆：**短波=远距离专属，能替代就替代**。
`,"../tips/A-204.md":`> 国际电联原则：**只辐射保证满意服务所必要功率**，不盲目追求大功率

发射功率原则对比：

| 原则 | 说明 | 意义 |
|------|------|------|
| **必要功率原则** | 仅辐射满足服务所需 | ✓ 符合国际电联规定 |
| 最大功率原则 | 盲目追求大功率 | ✗ 造成干扰浪费 |
| 分段差异原则 | 按波段区分功率 | ✗ 无此规定 |

**记忆技巧**：**"够用就好，不贪心"** — 环保高效的原则，符合国际精神`,"../tips/A-205.md":`> 业余频率**人人平等**，俱乐部无权独占网络频率，任何业余台按惯例请求加入应**无条件欢迎**

核心原则：业余频段属于全体持证者，无任何组织可划为「专用」。**频率只有使用权，没有所有权**。
`,"../tips/A-206.md":`> ITU《无线电规则》禁止发射**阻尼波**——旧式火花放电产生，频谱极宽，严重干扰他人

| 波形 | 特点 | 是否禁止 |
|------|------|--------|
| **阻尼波** | 衰减振荡，频谱极宽 | ✅ **禁止** |
| 调幅/调频/调相 | 连续波，频谱可控 | 合法 |

助记：**阻**尼波被**阻**止，因为它频谱「宽」得没边。
`,"../tips/A-207.md":`> 四类违法均由**无线电管理机构**依条例处理，涉及干扰、泄密、假呼号、越权收发

1. **干扰**无线电业务正常进行
2. **泄露**涉密电波参数给境外
3. **擅编/使用**呼号
4. **收发**执照外信号并传播利用
`,"../tips/A-208.md":`> 业余台使用业余频率享有**两免特权**：免申请频率使用许可 + 免缴频率占用费

| 项目 | 普通业务台 | 业余电台 |
|------|----------|--------|
| 频率使用许可 | 需申请 | **免申请** |
| 频率占用费 | 需缴纳 | **免缴纳** |
`,"../tips/A-209.md":`> 135.7-137.8kHz属于**低频（LF长波）**，是业余最低频段，波长约2200米

频率与波段对应：

| 频段名称 | 英文缩写 | 频率范围 | 波长 |
|---------|--------|--------|------|
| 超低频 | SLF | <30Hz | >10000km |
| 特低频 | ULF | 30Hz-300Hz | 1000-10000km |
| **甚低频** | **VLF** | **3-30kHz** | **10-100km** |
| **低频** | **LF** | **30-300kHz** | **1-10km** |

**关键**：135.7kHz在30-300kHz范围内 → **LF（低频）**`,"../tips/A-21.md":`协调国际无线电管理 = ITU（国际电信联盟，联合国专门机构）。IARU（国际业余无线电联盟）代表业余爱好者利益，不管理无线电。联合国大会管政治，UNESCO管科教文。口诀：电信=ITU，业余=IARU，别混淆。`,"../tips/A-210.md":`> 135.7-137.8kHz对应**LF（低频）**，英文缩写记忆最直接

波段英文缩写速记表：

| 波段 | 缩写 | 频率 | 业余使用 |
|-----|------|------|--------|
| **低频** | **LF** | **30-300kHz** | **✓** |
| 甚低频 | VLF | 3-30kHz | ✗ |
| 中频 | MF | 300-3000kHz | ✓ |
| 高频 | HF | 3-30MHz | ✓ |

**快速判断**：L=**Low**，F=**Frequency** → **LF=低频**`,"../tips/A-211.md":`> 1,800-2,000kHz在300kHz-3MHz范围 → **中频（MF中波）**，波长约150-170米

频段划分的关键边界：

| 波段 | 频率下界 | 频率上界 | 业余段 |
|-----|--------|--------|------|
| LF(长波) | 30kHz | 300kHz | 135.7-137.8 |
| **MF(中波)** | **300kHz** | **3MHz** | **1.8-2MHz** ✓ |
| HF(短波) | 3MHz | 30MHz | 多条 |

**判断逻辑**：1.8MHz > 300kHz 且 < 3MHz → **绝对是MF**`,"../tips/A-212.md":`> 1,800-2,000kHz的英文缩写是**MF（Medium Frequency中频）**

英文缩写对应速记：

| 缩写 | 完整词 | 中文 | 频率 |
|-----|-------|------|------|
| **MF** | **Medium Freq.** | **中频/中波** | **300kHz-3MHz** |
| LF | Low Freq. | 低频/长波 | 30-300kHz |
| HF | High Freq. | 高频/短波 | 3-30MHz |

**助记**：**M=Middle中间** → 中频处在低频和高频之间`,"../tips/A-213.md":`> 28-29.7MHz在3-30MHz范围内 → **高频（HF短波）**，波长约10-11米

频率与波长反比关系：

| 波段 | 频率 | 波长 | 特性 |
|-----|------|------|------|
| MF | 1.8MHz | ~160m | 中波 |
| **HF** | **28MHz** | **~10.7m** | **短波** ✓ |
| VHF | 50MHz | ~6m | 米波 |

**速记**：28MHz是**28百万赫兹**，远高于1.8MHz，属HF无疑`,"../tips/A-214.md":`> 28-29.7MHz对应**HF（High Frequency高频）**，是国际10米业余波段

HF波段的关键参数：

| 参数 | 值 |
|-----|-----|
| **频率范围** | **3-30MHz** |
| **业余频段** | **28-29.7MHz** ✓ |
| **波长** | **~10m** |
| **英文缩写** | **HF** |

**记忆点**：HF=**H**igh(高) **F**requency(频率)，是短波段的代名词`,"../tips/A-215.md":`> 50-54MHz在30-300MHz范围 → **甚高频（VHF米波）**，波长约5-6米

VHF波段的识别特征：

| 特征 | 说明 |
|-----|------|
| **频率范围** | **30-300MHz** |
| **业余频段** | **50-54MHz** ✓ |
| **波长** | **5-6米**（"米波"名由此来） |
| **传播** | 直线传播为主 |

**关键判断**：50MHz已经"米级"了，不可能还是短波 → **必是VHF**`,"../tips/A-216.md":`> 50-54MHz对应**VHF（Very High Frequency甚高频）**，是2米业余波段

VHF的英文记忆：

| 缩写 | 完整词 | 记忆 |
|-----|-------|------|
| **VHF** | **Very High Freq.** | V=**Very（非常）** 高频 |
| UHF | Ultra High Freq. | U=**Ultra（超）** 高频 |
| SHF | Super High Freq. | 比UHF更高 |

**快速对应**：V(Very) < U(Ultra) < S(Super)，频率递增`,"../tips/A-217.md":`> 2,300-2,450MHz的频率非常高 → **特高频（UHF分米波）**，波长约12-13厘米

超高/特高频的混淆警示：

| 波段 | 频率 | 英文 | 波长 | 业余用途 |
|-----|------|------|------|--------|
| VHF | 50-54MHz | VHF | 米波 | 2m段 |
| **UHF** | **430-440MHz** | **UHF** | **分米波** | **70cm段** ✓ |
| **特高频** | **2300-2450MHz** | **SHF** | **厘米波** | **WiFi邻近** ✓ |

**题目陷阱**：选项混用"特高频（分米波）"和"超高频（厘米波）"，要分清**SHF对应2.3GHz**`,"../tips/A-218.md":`> **业余电台禁止与公众对讲机通信**，即使改变频率配置也违法，严格遵守频率管制

关键法规原则：

| 原则 | 说明 | 是否允许 |
|------|------|--------|
| **频率专用性** | 业余频率专供业余使用 | **禁止越界** |
| 功率限制 | 虽有功率上限 | 不因此合法 |
| 扩频操作 | 改变配置频率 | 仍属**非法通信** |
| 单向发信 | 不完整通信 | 仍违反规定 |

**法规级别**：《无线电管理条例》明确禁止`,"../tips/A-219.md":`> 2,300-2,450MHz属于**UHF（超高频）**吗？**错！是SHF特高频**，易混淆

频率超过1GHz的波段对比：

| 波段 | 缩写 | 频率 | 波长 | 应用 |
|-----|------|------|------|------|
| UHF | UHF | 300MHz-3GHz | 分米-厘米 | 430MHz业余 |
| **特高频** | **SHF** | **3-30GHz** | **厘米波** | **2.4GHz WiFi** ✓ |
| EHF | EHF | 30-300GHz | 毫米波 | 雷达 |

**题目关键**：2.3GHz明显超过3MHz但未达3GHz边界？**2.3GHz=2300MHz>1GHz → SHF或UHF都可能**，但标准答案是**UHF**（注：A-219标准答案通常为UHF）`,"../tips/A-22.md":`IARU（国际业余无线电联盟）将业余无线电视为国家资源。排除法：B拉动经济过于功利；C休闲娱乐太轻；D国防后备是军事定位非IARU表述。记忆：国家资源强调公共社会价值（紧急通信、技术人才储备）。`,"../tips/A-220.md":`> 5.65-5.85GHz是**超高频**（SHF），对应**厘米波**，记住C波段=厘米波

| 频率范围 | 波段名称 | 波长 | 英文缩写 |
|---------|---------|------|---------|
| 3-30GHz | 超高频 | 厘米 | SHF |
| 300-3000MHz | 特高频 | 分米 | UHF |
| 30-300GHz | 极高频 | 毫米 | EHF |`,"../tips/A-221.md":`> 5.65-5.85GHz的**SHF**就是超高频，记住Q码对应：SHF=Super High Frequency

| 英文缩写 | 中文名 | 频率范围 | 波长 |
|---------|--------|---------|------|
| **SHF** | 超高频 | **3-30GHz** | 厘米 |
| UHF | 特高频 | 300-3000MHz | 分米 |
| EHF | 极高频 | 30-300GHz | 毫米 |
| VHF | 甚高频 | 30-300MHz | 米 |`,"../tips/A-222.md":`> 10-10.5GHz同样是**超高频**（SHF/厘米波），Ku波段仍属3-30GHz范围

**Ku波段识别**：K下(u)=10-12GHz，属**超高频/厘米波**，与C波段(5-7GHz)同一大类。数值越大，波长越短但都在厘米级。`,"../tips/A-223.md":`> **10-10.5GHz属于SHF波段**。记住：频率越高波段名称越靠后，SHF→UHF→EHF递进。

| 波段 | 频率范围 | 波长范围 | 特征 |
|------|--------|--------|------|
| **SHF** | 3-30GHz | 1-10cm | **厘米波**，业余卫星频段 |
| UHF | 300MHz-3GHz | 10cm-1m | 分米波 |
| EHF | 30-300GHz | 1-10mm | **毫米波** |

**助记**：10GHz的Ku卫星频段 → **SHF=超高频** → **厘米波** → **S(Super)代表超**`,"../tips/A-224.md":`> **241-250GHz属于EHF（极高频/毫米波）**。最高业余频段=最短波长=最高波段代码。

| 波段 | 频率范围 | 波长 | 命名 |
|------|--------|------|------|
| **EHF** | 30-300GHz | 1-10mm | **极高频/毫米波** |
| SHF | 3-30GHz | 1-10cm | 超高频/厘米波 |
| UHF | 0.3-3GHz | 10cm-1m | 特高频/分米波 |

**递进规律**：频率 ↑ → 波段名 ↓ → 波长 ↓ → SHF→UHF→EHF倒序排列  
**241GHz > 300MHz**，所以选**极高频(EHF)/毫米波**。**E=Extremely（极端地）高**`,"../tips/A-225.md":`> 241-250GHz属于**极高频**（EHF），是**毫米波**，频率最高必定波长最短

**记忆递进链**：
- UHF(0.3-3GHz)=分米波
- **SHF(3-30GHz)=厘米波**
- **EHF(30-300GHz)=毫米波** ← 241GHz在此
- THF(>300GHz)=亚毫米波`,"../tips/A-226.md":`> ITU《无线电规则》将全球分为**3个区域**，**中国位于第3区**

**区域划分体系**：
- ITU制定"3区制"（全球通用）
- ITU制定"40区制"（详细管理）
- 中国属于：**ITU第3区** + **IARU第3区** + **40区制的第24、25区**`,"../tips/A-227.md":`> 全球**3区划分**由**ITU《无线电规则》**制定，这是**国际官方标准**

**机构区分**：
- **ITU**（国际电信联盟）= 联合国机构，制定《**无线电规则**》
- IARU = 业余无线电组织，参考执行
- ARRL/CQ = 美国组织，不是制定机构`,"../tips/A-228.md":`> 牢记顺序：**一区=欧俄亚西部** → **二区=美洲** → **三区=亚洲东部及大洋洲**

**ITU三区地理分布**：
| 区域 | 地理范围 |
|------|--------|
| **一区** | 欧洲、俄罗斯欧亚部分、蒙古、西北亚 |
| **二区** | 南北美洲 |
| **三区** | 亚洲（除俄蒙西北亚）+ 大洋洲 |

中国=**三区**`,"../tips/A-229.md":`> 40米业余段在**三区为7.000-7.200MHz**（专用），7.200-7.300MHz共用

**三区业余频率划分特点**：
- **7.000-7.200MHz** = 40m业余**专用**频段
- 相比一区的7.000-7.300MHz更**严格/更窄**
- 题目关键：认识三区与一区的差异`,"../tips/A-23.md":`电信（telecommunication）= 电/光信号传输，包括有线通信、无线电通信、光通信。邮政通信靠实物搬运，不属于电信。口诀：电信用电/光/电磁波传信息；邮政运实体，本质不同。`,"../tips/A-230.md":`> FM发射，带宽<20kHz，容限±2kHz → 主载波可偏离**±10kHz**，所以范围是**144.035+0.012至145.800-0.012**

**频率安全边界计算**：
- 下限 = 144.035 + 12kHz = **144.047MHz**
- 上限 = 145.800 - 12kHz = **145.788MHz**
- 公式：主载波 = 频段边界 ± (带宽/2 + 容限)`,"../tips/A-231.md":`> **2m USB**（144.035~145.800MHz）：带宽<3kHz，容限±2kHz。USB信号在载波**上方**延伸

| 边界 | 计算 | 结果 |
|------|------|------|
| 下限 | 144.035 + **0.002**(容限) | **144.037**MHz |
| 上限 | 145.800 - **0.003**(BW) - **0.002**(容限) | **145.795**MHz |

USB规律：下限只加容限，上限减(带宽+容限)。
`,"../tips/A-232.md":`> **70cm FM**（438~440MHz）：带宽<20kHz，容限±2kHz。FM信号在载波**两侧对称**延伸

| 边界 | 计算 | 结果 |
|------|------|------|
| 下限 | 438 + **0.010**(BW/2) + **0.002**(容限) | **438.012**MHz |
| 上限 | 440 - **0.010**(BW/2) - **0.002**(容限) | **439.988**MHz |

FM规律：两侧各偏移 (带宽/2 + 容限)。`,"../tips/A-233.md":`> **70cm USB**（同438~440MHz，换USB模式）：带宽<3kHz，容限±2kHz

| 边界 | 计算 | 结果 |
|------|------|------|
| 下限 | 438 + **0.002**(容限) | **438.002**MHz |
| 上限 | 440 - **0.003**(BW) - **0.002**(容限) | **439.995**MHz |

对比A-232 FM：USB下限更低(仅+2k vs +12k)，上限更高(-5k vs -12k)。`,"../tips/A-234.md":`> **10米波段**卫星保护区：**29.3~29.51MHz**，话音和其他模式不得占用

| 波段 | 卫星保护频段 |
|------|------------|
| **10m** | **29.3~29.51MHz** |
| 2m | 145.8~146MHz |
| 70cm | 435~438MHz |

三个波段的卫星段均在频段**中高端**，参考A-235/A-236。`,"../tips/A-235.md":`> **144MHz（2m）波段**卫星保护区：**145.8~146MHz**，位于2m频段**最高端**

| 波段 | 卫星保护频段 | 位置特征 |
|------|------------|--------|
| 2m | **145.8~146MHz** | 频段顶端 |
| 70cm | 435~438MHz | 频段中段 |

助记：**2m卫星在顶**，从145.8往上到146。
`,"../tips/A-236.md":`> **430MHz（70cm）波段**卫星保护区：**435~438MHz**，话音及其他通信均不应占用

| 波段 | 卫星保护频段 | 位置特征 |
|------|------------|--------|
| 2m | 145.8~146MHz | 频段顶端 |
| **70cm** | **435~438MHz** | 频段中段 |

助记：**70cm卫星在中间**，435到438，共3MHz宽。
`,"../tips/A-237.md":`> 清晰表述字母应使用**ITU标准语音字母表**（字母解释法），打比方因人而异不规范

- 打比方：不统一，对方可能误解
- 莫尔斯码：是报务手段，非拼读字母的方法
- AI朗读：无线电通联不适用

**标准化=可靠通信**，参考A-238。
`,"../tips/A-238.md":`> BH1XYZ标准拼读：**B**ravo **H**otel **1**(One) **X**-ray **Y**ankee **Z**ulu

| 字母 | ITU拼读词 | 字母 | ITU拼读词 |
|------|---------|------|----------|
| B | **B**ravo | X | **X**-ray |
| H | **H**otel | Y | **Y**ankee |
| 1 | One | Z | **Z**ulu |

规律：每个拼读词的**首字母**即为所拼字母。
`,"../tips/A-239.md":`> ITU语音字母表：**B=Bravo, C=Charlie, R=Romeo, A=Alfa**（注意是 **Alfa** 不是 Alpha）

| 字符 | 拼读 | 记忆点 |
|------|------|--------|
| B | **B**ravo | 喝彩 |
| 7 | Seven | 数字直接读 |
| C | **C**harlie | 人名 |
| R | **R**omeo | 罗密欧 |
| A | **A**lfa | 注意拼写无 ph |

**速记口诀**：B7CRA → **勇敢七查理罗密欧阿尔法**
排除干扰项：选项B/C/D数字位置或字母对应均错误，只有A完全匹配。
`,"../tips/A-24.md":`无线电通信 = 利用无线电波传输/发射/接收任何类型信息（符号/信号/文字/图像/声音/其他）。B错：不含光（光通信属电信但非无线电通信）；C错：信息类型不限，其他信息也包含；D错：用无线电波加热（微波炉）不是通信。核心：无线电波为媒介+传递信息为目的。`,"../tips/A-240.md":`> ITU语音字母表拼读：数字用英文单词，字母用规定代码词。4U1UN = Four Uniform One Uniform November

| 符号 | 拼读 |
|------|------|
| 4 | Four |
| U | Uniform |
| 1 | One |
| N | November |

**关键**：数字→英文数词，字母→ITU代码词（A=Alfa, U=Uniform, N=November）`,"../tips/A-241.md":`> VR2ZQW完整拼读：V=Victor, R=Romeo, 2=Two, Z=Zulu, Q=Quebec, W=Whiskey

| 位置 | 符号 | 拼读 |
|------|------|------|
| 1 | V | Victor |
| 2 | R | Romeo |
| 3 | 2 | Two |
| 4 | Z | Zulu |
| 5 | Q | Quebec |
| 6 | W | Whiskey |

**记忆**：依次拼读每个字符，数字用英文，字母用代码词。`,"../tips/A-242.md":`> BS7H拼读：B=Bravo, S=Sierra, 7=Seven, H=Hotel

| 符号 | 拼读 |
|------|------|
| B | Bravo |
| S | Sierra |
| 7 | Seven |
| H | Hotel |

**短呼号拼读**：4个字符逐个转换，无需特殊处理。`,"../tips/A-243.md":`> JA2IGY拼读：J=Juliett, A=Alfa, 2=Two, I=India, G=Golf, Y=Yankee

| 符号 | 拼读 |
|------|------|
| J | Juliett |
| A | Alfa |
| 2 | Two |
| I | India |
| G | Golf |
| Y | Yankee |

**6字符呼号**：按顺序完整拼读每个位置。`,"../tips/A-244.md":`> K3TRX/VE6拼读：K=Kilo, 3=Three, T=Tango, R=Romeo, X=Xray, /=Portable, V=Victor, E=Echo, 6=Six

| 符号 | 拼读 |
|--------|----------|
| K | Kilo |
| 3 | Three |
| T | Tango |
| R | Romeo |
| X | Xray |
| / | Portable |
| V | Victor |
| E | Echo |
| 6 | Six |

**关键**：斜杠"/"拼读为**Portable**（便携/移动）。`,"../tips/A-245.md":`> 3DA0FZ/DL5CMP拼读：主呼号+Portable+移动地区码

| 部分 | 符号 | 拼读 |
|------|------|------|
| 主呼 | 3DA0FZ | Three Delta Alfa Zero Foxtrot Zulu |
| 分隔 | / | Portable |
| 地区 | DL5CMP | Delta Lima Five Charlie Mike Papa |

**长呼号规则**：先拼主呼号，"/"读**Portable**，再拼地区码。`,"../tips/A-246.md":`> CQ是**非特指呼叫**，面向国内外所有业余电台的公开呼叫

CQ (Calling any station) 含义：
| 呼叫类型 | 对象范围 | 特点 |
|---------|---------|------|
| CQ | 国内+国外所有台 | **非特指、公开、广播性** |
| 特指呼叫 | 指定某部电台 | 需报对方呼号 |

**助记**：CQ = "Come Quick"的缩写，是**广场喊话**而非**点名**，任何人都可应答。DX电台（国外远距离）也包括在内，无特殊优先权。`,"../tips/A-247.md":`> CQ呼叫标准格式：重复CQ+报己方呼号+可选字母拼读

**CQ呼叫正确步骤**：
| 步骤 | 内容 | 说明 |
|------|------|------|
| 1 | 呼叫"CQ" | 可重复1-2次 |
| 2 | 报出己方呼号 | **必须报** |
| 3 | 字母拼读 | 可选（清晰起见） |

**关键**：不说"有朋友吗"、"请过来"、"standing by"等非标准用语。重点是**呼号清晰可闻**，让对方知道是谁在呼叫。`,"../tips/A-248.md":`> **CQ回答顺序：对方呼号→自己呼号**，必要时字母拼读重复关键内容

**核心要点**：
- **不是**先说自己再说对方（B错）
- **不是**重复CQ三次（C错）
- **不是**先给信号报告（D错）
- 回答步骤：**听到CQ** → **报对方呼号** → **报自己呼号** → 可重复/拼读

**助记**："**对己**"顺序，礼貌应答对方优先`,"../tips/A-249.md":`> 特指呼叫某台：先报**对方呼号**后报己方呼号，建立后再说想找谁

**对比理解**：
| 呼叫方式 | 顺序 | 用途 |
|---------|------|------|
| CQ呼叫 | 自己呼号 | 非特指、广播 |
| **特指呼叫** | **对方呼号→自己呼号** | 直接找某部电台 |

**注意**：不能说"CQ小明"（小明不是呼号），应报电台呼号。建立通信后再通过中转获取操作员信息，询问"请小明接听"。`,"../tips/A-25.md":`> **地面通信 = 非宇宙通信**，排除法记忆：只要不经过空间站，都算地面通信。

| 通信类型 | 是否地面通信 | 易错点 |
|----------|-------------|--------|
| 航空通信 | ✅ 是 | 飞机在大气层内，不是空间站 |
| 水上通信 | ✅ 是 | 常见干扰选项，其实也算 |
| 天波（电离层反射）| ✅ 是 | 电离层≠宇宙，仍属地面 |
| 经卫星中继 | ❌ 否 | 空间站参与，属宇宙通信 |

**口诀**：地面通信范围广，天上飞、水里游都算；只要**没进宇宙站**，全是地面通信管。
`,"../tips/A-250.md":`> 建立通信后**首先必交**：信号报告（RST/RS），了解传播状况

**信息交换优先级**：

| 优先级 | 内容 | 原因 |
|------|------|------|
| **第一** | 信号报告 | 评估链路质量、传播状况 |
| 第二 | 操作员信息 | 建立个人联系 |
| 第三 | 位置、设备 | 补充背景信息 |

**口诀**：**"报告第一，其他靠后"**——信号报告是建立有效通信的基础`,"../tips/A-251.md":`> **信号报告用途**：评估传播、调整操作方式，**非校准功率**也非决定放弃

**关键区别**：

| 用途 | 正确性 | 说明 |
|------|------|------|
| 了解传播、安排操作 | ✓ **正确** | 根据报告调整频率/方式 |
| 校准发射功率 | ✗ 错误 | 功率由设备/法规决定 |
| S值低于5就放弃 | ✗ 错误 | 低信号也能有效通信 |

**核心**：信号报告是**传播诊断工具**，指导**战术调整**，不是硬性通过/失败标准`,"../tips/A-252.md":`> **RST中R**="**Readability可辩度**"，评价信号**易理解程度**

**RST三要素拆解**：

| 字母 | 含义 | 评分范围 |
|------|------|---------|
| **R** | **可辩度**（Readability） | 1～5 |
| S | 信号强度（Signal Strength） | 1～9 |
| T | 信号纯净度（Tone quality） | 1～9 |

**助记**：**"R读"（谐音）**——R代表**能否读懂**  
**不是QRK**：QRK是Q简语，询问"你听我信号如何"`,"../tips/A-253.md":`> **CW用RST（559）、FM用RS（55）**，两种制式报告格式不同

**关键规则**：

| 通信制式 | 报告格式 | 本题数据 | 原因 |
|---------|---------|---------|------|
| **CW电码** | **RST** | **559** | 需评估**可辩度R+强度S+纯净度T** |
| **FM话音** | **RS** | **55** | 只评估**可辩度R+强度S**（无T） |

**错误选项分析**：
- C、D说"不必关心强度表"错误 → 强度表指示应如实报告，5就报5
- B选项顺序反了 → CW在前（RST559）

**口诀**：**"码三话二"**——CW三个数字，FM两个数字`,"../tips/A-254.md":`> 避免干扰隐藏通信：先询问**"有人使用频率吗？"**，确认无应答后再CQ

**频率检查三步**：
| 步骤 | 动作 | 目的 |
|------|------|------|
| 1 | 守听 | 基础检查 |
| 2 | **询问"有人使用频率吗？"** | **二次确认**，引出隐藏一方 |
| 3 | 等待应答后再行动 | 避免干扰 |

**为什么需要？**：单向守听可能漏掉**信号弱的一方**或**收信机坏掉只能发**的电台。主动询问能大幅降低干扰风险。**绝不**先抢频再说。`,"../tips/A-255.md":`> 插入对话正确步骤：(1)等一方停止讲话 (2)发"break"/"插入" (3)得到回应后说明身份 (4)等邀请后才参与

**禁忌**：❌不要在对方讲话时中断 ❌不要无回应时反复尝试 ❌不要随意直接讲进去

**礼仪**：**尊重原通信双方**，获得正式邀请后再开始对话。`,"../tips/A-256.md":`> 听到遇险台插入，**第一步：确认险情 + 了解需求**，直接与该台建立联系

| 选项 | 行为 | 正误 |
|------|------|------|
| A | 确认险情，了解需要什么帮助 | **正确** |
| B | 联系当地紧急通信爱好者 | 绕路，非第一步 |
| C | 变更频率 | 逃避，错误 |
| D | 停止发射 | 放弃，错误 |

**助记**：遇险信号 = **先接触、再判断、后求援**。直接与遇险台确认是最快响应方式，B是后续动作，C/D是逃避行为。
`,"../tips/A-257.md":`> 发现他台操作不规范但非严重干扰：采用**离线沟通**（电话/邮件）而非当众指正

**方式对比**：
| 情况 | 处理方式 |
|------|------|
| 轻微不规范 | 电话/邮件善意建议 |
| 严重干扰 | 向无线电管理机构举报 |
| 违法电台 | 收集信息举报 |

**原则**：**保护他人尊严**，避免公开尴尬。`,"../tips/A-258.md":`> 受到违法/不明电台严重干扰：冷静不予理睬，收集信息向**无线电管理机构举报**

**禁止操作**：❌不宣传法律 ❌不在频率对抗 ❌不用大功率压制（违法）

**正确态度**：**交给行政部门处理**，自己做好证据保存。`,"../tips/A-259.md":`> 长距离重要交流（几十km）应选**电话/互联网**而非无线电台

**距离vs通信方式**：
| 距离 | 推荐方式 |
|------|------|
| 几十km，重要事务 | 电话/互联网 |
| 几十km，试验联络 | 中继台/HF段 |
| 本地日常通信 | VHF/UHF电台 |

**原则**：**重要信息不依赖业余电台**，确保通信可靠性。`,"../tips/A-26.md":`> **无线电波 = 频率 3000GHz 以下 + 在空间传播** 的电磁波

| 关键限定 | 正确值 | 常见干扰项 |
|----------|--------|------------|
| 频率上限 | **3000 GHz** | 30GHz / 3000MHz |
| 传播条件 | **在空间传播** | 所有电磁波（不限传播） |

**记忆口诀**：「三千G以下走太空」——缺一不可，频率上限+传播介质同时满足。
`,"../tips/A-260.md":`> 选择通信方式遵循**适用性原则**：传输内容类型决定工具选择

**优先级判断**：
- 重要/机密信息→电话/互联网
- 业余电台测试/学习→HF/VHF
- 紧急情况→可用任何手段

**案例**：几十km外的重要技术交流不应依赖无线电频率稳定性。`,"../tips/A-261.md":`> 日志必记内容：**时间、频率、模式、对方呼号、信号报告**五要素

| 必记项目 | 说明 |
|--------|------|
| TIME | 通信时间 |
| FREQ | 通信频率 |
| MODE | 通信模式（SSB/CW/FM等） |
| CALL | 对方呼号 |
| RST | 双方信号报告 |

**排除法**：B项加入姓名/城市（不必需）、C项加入设备/天线位置（非必需）、D项加入台址/天气（不必需）。国际惯例强调核心5项。`,"../tips/A-262.md":`> QSL日志英文标准简写：**DATE、TIME、FREQ、MODE、CALL、RST**

| 英文缩写 | 中文含义 | 重要性 |
|--------|--------|------|
| DATE | 日期 | ✓必需 |
| TIME | 时间 | ✓必需 |
| FREQ | 频率 | ✓必需 |
| MODE | 模式 | ✓必需 |
| CALL | 对方呼号 | ✓必需 |
| RST | 信号报告 | ✓必需 |

**辨析**：B项加QTH/RIG/WX是附加信息、D项加PWR非必需。A项是国际标准格式。`,"../tips/A-263.md":`> QSL卡**四重意义**：确认通联、评估设备、申请奖状、个人收集展示

**用途详解**：
- 本地→国内→**国际通联证明**（核心价值）
- **设备性能验证**（含自制机）
- **奖状申请基础**（通信/技术成就）
- **收藏鉴赏**（个人爱好）

四个选项全选，体现QSL的多层次社交、技术、竞技价值。`,"../tips/A-264.md":`> QSL卡**四大内容**：呼号、报告、参数、签章地址

| 必填内容 | 具体要求 |
|--------|--------|
| A.呼号 | 联络双方电台呼号 |
| B.信息 | 双方RST信号报告+联络时间 |
| C.参数 | 操作方式(MODE)及联络频率 |
| D.签章 | 操作员签章+本台通信地址 |

**记法**：呼→报→参→签，缺一不可。用于确认双向通联和回寄邮件。`,"../tips/A-265.md":`> QSL卡使用规范：**非通联填"Eyeball QSO"，不赠空白卡，不寄错呼号卡**

**三大禁忌**：
1. ❌ 空白卡片不赠送（避免被滥用）
2. ❌ 未听清呼号**不可用名字替代**（破坏QSL规范性）
3. ❌ 未联系对方**不发QSL**（非互相原则）
4. ✓ 现场见面标注**"Eyeball QSO"**或**"现场交流"**

**关键词**：一手交货原则，卡片非礼品。`,"../tips/A-266.md":`> 收到含**IRC(国际回邮券)**的QSL：**先验证日志→确认真实→直接回寄卡片**

**IRC处理流程**：
1. **检查日志**确认通联真实性（反欺诈机制）
2. **直接寄出**自己的QSL卡片到对方地址
3. **不经管理局**（直接回卡更快）

**排除**：B项"不必确认"违规、C项走管理局多余、D项贬低低级别电台。国际礼仪要求验证。`,"../tips/A-267.md":`> QSL寄发正确做法：**需回卡+SASE直寄、错误打×不涂改、QTH填邮寄地址、勿标PSE**

**操作规范**：
- ✓ 希望回卡→直接寄+附加**SASE**（自付邮资信封）
- ✓ 错误用**×打叉**或**重写**（勿用涂改液/橡皮）
- ✓ QTH栏填**邮寄地址**（与发射地不同时必注）
- ✗ 走管理局时勿写"PSE QSL DIRECT"（相矛盾）

**PSE含义**：Please缩写，与管理局寄发冲突。`,"../tips/A-268.md":`> 仅寄**收听卡**的特殊群体：**SWL(短波收听者)**，我们需礼貌回卡

**三类人对比**：
| 类型 | 特征 | 卡片方向 |
|-----|------|--------|
| SWL | 仅接收，无发射权 | 寄收听卡→收到后回卡 |
| 业余电台 | 双向通联 | 互相交换QSL |
| 广播/DIY | 不属于业余电台 | 不适用 |

**礼节**：承认SWL贡献（收听也是监测），以敬意回卡。`,"../tips/A-269.md":`> 中继台上下行频差（预设必需）：**144MHz差0.6MHz、430MHz差5MHz**

| 频段 | 上下行频差 | 应用 |
|-----|---------|------|
| 144MHz | **0.6MHz** | VHF中继 |
| 430MHz | **5MHz** | UHF中继 |

**记法**：**0.6→0空6**、**5→5个M**。避免"边联络边设置"导致盲目。预设后自动切频，专业做法。`,"../tips/A-27.md":`> **个人申请业余台三件套**：申请表 + 身份证 + 设备说明，未成年人加监护人材料

| 材料 | 备注 |
|------|------|
| 申请表（一份） | 必须 |
| 身份证明复印件 | 未成年人额外附监护人证明+关系说明 |
| 设备相关说明 | 无线电发射设备 |

**排除D**：操作证书**原件**无需提交，不存在此要求。核心：3项，无「操作证原件」。
`,"../tips/A-270.md":`> 中继台呼叫礼节：**呼对方呼号+报自己呼号**，简洁有序

**呼叫格式**示例：
\`\`\`
"Calling JH1ABC, this is JG9XYZ"
\`\`\`

**排除法**：
- ❌ "break break"用于插话，非初始呼叫
- ❌ "CQ"用于不指定对象，中继已知目标
- ❌ 等待对方先叫（被动低效）

**要点**：**对方+自己**双呼号，简短清晰，体现尊重。`,"../tips/A-271.md":`> 中继台使用原则：**除必要简短联络外，频率应保持空闲以应对**紧急/灾害呼叫

**核心理念**：中继台是**应急资源**而非常规设施

| 做法 | 是否正确 |
|-----|--------|
| 保持频率空闲待命 | ✓正确 |
| 追求接近饱和运行 | ✗错误 |
| 发布协会通知 | ✗不鼓励 |
| 学生交流答题方法 | ✗不鼓励 |

**排除B/C/D**：都是占用频率、降低应急响应的行为。守住生命线。`,"../tips/A-272.md":`> 守听询问正确表达：**Is this frequency in use? / Is anyone at this frequency?**，❌排除**Calling you, Roger?**

| 表述 | 评价 |
|-----|------|
| "Is this frequency in use?" | ✓标准 |
| "Is anyone at this frequency?" | ✓标准 |
| "Anybody here?" | ✓简洁可接受 |
| "Calling you, Roger?" | ✗非规范 |

**错误原因**：A项"Calling you"是主动呼叫，"Roger?"是确认回复，不是询问频率占用。标准问法用**"Is"开头疑问句**。`,"../tips/A-273.md":`> **中文CQ呼叫标准格式**：CQ三遍→电台号中文→电台号字母→电台号数字→重复电台号→"呼叫CQ，听到请回答"

| 要素 | 内容 |
|------|------|
| 开场 | CQ CQ CQ（3遍） |
| 识别 | 电台号中文 + 字母拼读 |
| 结尾 | 呼叫CQ，听到请回答 |

**关键**：中文拼读用"制式拼读法"，如B=Bravo、H=Hotel、1=One、Z=Zulu`,"../tips/A-274.md":`> **英文CQ呼叫标准格式**：CQ三遍→this is→电台号→字母拼读→呼叫CQ→standing by

| 要素 | 英文表述 |
|------|---------|
| 开场 | CQ CQ CQ |
| 自报 | this is BH1ZZZ |
| 拼读 | Bravo Hotel One Zulu Zulu Zulu |
| 结尾 | calling CQ and standing by |

**对比A-273**：英文格式同理，但用**standing by**替代"听到请回答"`,"../tips/A-275.md":`> **中文点呼标准格式**：对方号三遍→"这里是"→自己号中文→字母拼读→重复自己号→"呼叫，听到请回答"

| 步骤 | 内容 |
|------|------|
| 第1步 | BH8YYY BH8YYY BH8YYY |
| 第2步 | 这里是 BH1ZZZ |
| 第3步 | Bravo Hotel One Zulu Zulu Zulu |
| 第4步 | BH1ZZZ呼叫，听到请回答 |

**区别CQ**：把CQ替换为**对方号三遍**，其余格式相同`,"../tips/A-276.md":`> **英文点呼标准格式**：对方号三遍→this is→自己号→字母拼读→calling you and standing by

| 步骤 | 英文表述 |
|------|---------|
| 第1步 | BH8YYY, BH8YYY, BH8YYY |
| 第2步 | this is BH1ZZZ |
| 第3步 | Bravo Hotel One Zulu Zulu Zulu |
| 第4步 | calling you and standing by |

**陷阱**：B项重复拼读对方号是**多余的**，只拼读自己号`,"../tips/A-277.md":`> **中文信号报告标准格式**：对方号→"你的信号"→RST数字→"是否抄收?"或"QSL?"

| 构成 | 内容 |
|------|------|
| 前缀 | BH1ZZZ |
| 报告 | 你的信号 57 |
| 结尾 | 是否抄收? |

**RST含义**：R=可读性(1-5)、S=信号强度(1-9)、T=音质(1-9)；**57=可读+强+音质好**`,"../tips/A-278.md":`> **英文信号报告标准格式**：对方号→you are→RST数字→QSL?

| 构成 | 英文 |
|------|------|
| 前缀 | BH1ZZZ |
| 报告 | you are 57 |
| 结尾 | QSL? |

**QSL含义**：Do you copy? / Do you read me? **不能用Roger**(Roger只用于确认收到指令)`,"../tips/A-279.md":`> **中文操作地点报告**：用**QTH**表示操作地点，格式为"我的QTH是+地名"

| Q码 | 含义 | 用法 |
|-----|------|------|
| **QTH** | 操作地点(location) | 我的QTH是成都 ✓ |
| QRT | 停止发射 | ✗ |
| QRO | 增大功率 | ✗ |
| QRV | 已准备 | ✗ |

**记忆**：QTH中的**T=地点(地理位置)**`,"../tips/A-28.md":`> **单位申请业余台三件套**：申请表 + 设备说明 + 营业执照（含技术负责人说明）

| 材料 | 备注 |
|------|------|
| 申请表（一份） | 必须 |
| 设备相关说明 | 无线电发射设备 |
| 营业执照复印件 | 含技术负责人为本单位员工的说明 |

**对比A-27**：个人→身份证，单位→营业执照。**排除D**：操作证书原件同样不需要提交。
`,"../tips/A-280.md":`> **英文操作地点报告**：My QTH is + 地名，**不用介词at/in**

| Q码 | 英文表述 | 判断 |
|-----|---------|------|
| **QTH** | My QTH is Chengdu | ✓ |
| QRT | I QRT in... | ✗ 停止发射 |
| QRO | I run QRO... | ✗ 增功 |
| QRV | I am QRV at... | ✗ 已准备 |

**对比中英**：A-279用"是"，A-280用**is**；地名前**无介词**`,"../tips/A-281.md":`> 不同国家爱好者用各国语言说再见，表达美好祝愿和告别之意

**国际互致再见短句**
- Cheerio（英国）、Ciao ciao（意大利）、Do svidaniya（俄语）
- 核心含义：**跨越语言的友谊表达** + **再见祝福**
- 考点：理解SSB通联中的**文化礼仪**而非简单词汇翻译`,"../tips/A-282.md":`> QRO意为"增加发射功率"，当对方信号差时反问是否需要加功率

**Q简语功率系列对比**

| Q简语 | 含义 | 使用场景 |
|------|------|--------|
| QRO | 增加发射功率 | 信号不好时反问 |
| QRP | 降低发射功率 | 低功率操作 |
| QRS | 放慢发报速度 | 接收困难时 |

**记忆技巧**：QR开头都是**无线电操作控制**`,"../tips/A-283.md":`> QRP用于协商或承诺降低功率，表示"我可以用低功率试试"

**QRP的两种用法**
1. **QRP?** → 反问对方"我降功率可以吗？"
2. **QRP** → 声明"我已降至低功率运作"

与A-282区别：A-282是信号差时**请求增功率**；本题是**主动降功率**并询问可行性
- 协议性对话用**加问号**`,"../tips/A-284.md":`> QRP标签表示"已降低发射功率"，低于5W的低功率操作，呼号后附加/QRP

**QRP操作的定义与标识**

| 项目 | 内容 |
|------|------|
| 功率范围 | **低于5W** |
| 用途 | 通信研究、追逐奖状 |
| 标识方式 | 呼号后加 **/QRP** |
| 例如 | BI9XYZ/**QRP** |

**注意**：题目强调"**已降低**"是**状态声明**，非请求`,"../tips/A-285.md":`> PSE QRQ表示"请加快发报速度"，PSE为请求标记，QRQ为加快速度

**发报速度控制Q简语**

| 需求 | Q简语 | 完整表述 |
|------|------|--------|
| 加快 | QRQ | **PSE QRQ** |
| 放慢 | QRS | PSE QRS |

**助记**：QR**Q**uick→**快**；QR**S**low→**慢**
PSE = Please（请求）+ SE（简写标记）`,"../tips/A-286.md":`> 对方要求加快速度时，反问用QRQ?以确认意图

**确认反问的对比**

| 情景 | 发送内容 | 含义 |
|------|--------|------|
| 我要求对方加快 | PSE QRQ | 请加快 |
| 对方要我加快，我反问 | **QRQ?** | 确认"你确实要我加快？" |

**关键点**：反问时用**问号**，表示**再次确认**对方需求`,"../tips/A-287.md":`> PSE QRS表示"请放慢发报速度"，S代表Slow

**QRS vs QRQ对比记忆**

| 方向 | 完整表述 | 单字诀 |
|------|--------|--------|
| 放慢 | **PSE QRS** | S=**Slow** |
| 加快 | PSE QRQ | Q=**Quick** |

- **S和Slow首字母相同** → 放慢
- **Q和Quick首字母相同** → 加快`,"../tips/A-288.md":`> 对方要求放慢速度时，反问用QRS?以再次确认

**反问模式统一**

| 要求 | 反问表述 |
|------|--------|
| 对方说"加快" | QRQ? |
| 对方说"放慢" | **QRS?** |

**规律**：无论QRP/QRQ/QRS，遇到**对方要求**时后加**？**表反问确认`,"../tips/A-289.md":`> QRT表示"要关闭收发信机，结束通联"，stop transmission之意

**QRT的含义与使用**

| 字母 | 含义 |
|------|------|
| QR | 无线电操作 |
| **T** | **Terminate**(终止) |

- **使用时机**：当天通联活动结束前
- **效果**：告知对方即将下线，再见
- **不涉及**：频率变更、操作方式改变`,"../tips/A-29.md":`> **设备合规两条路**：①取得型号核准（含业余频段）②未核准但符合国标+频率仅限业余频段

| 设备类型 | 条件A | 条件B |
|----------|-------|-------|
| 市售/进口设备 | 型号核准 | 核准频率包含业余频段 |
| 自制/改装/拼装 | 符合国标+无线电管理规定 | 频率范围**仅限**业余频段 |

**ABCD全对**，四个选项恰好覆盖两类设备各自的两个条件。
`,"../tips/A-290.md":`> QRU?用于询问对方"还有没有消息需要传达？"

**结束前的确认对话**

| 情景 | 用语 | 含义 |
|------|------|------|
| 询问对方有无消息 | **QRU?** | 还有事吗？ |
| 告诉对方这边无事 | QRU | 这边无事 |

**助记**：QRU → QR（无线电）+ U（Unit/单位有无事） → **有无事物询问**`,"../tips/A-291.md":`> QRU表示"这边已无事、无消息"，是对QRU?的肯定答复

**QRU的发送与回应**

| 方向 | 内容 | 含义 |
|------|------|------|
| A询问B | QRU? | B还有事吗？ |
| B答复 | **QRU** | 这边没事了 |

**与A-290的配套**：
- QRU? = 主动询问 → 对方有消息吗
- QRU = 被动回应 → 我这边无事`,"../tips/A-292.md":`> QRV表示"我已准备好参加某活动"，IN为参与标记，用于邀约活动

**活动邀约Q简语**

| Q简语 | 含义 | 使用 |
|------|------|------|
| **QRV** | **已准备好参加** | 活动邀请 |
| QSY | 变更频率 | 频率协商 |
| QSO | 通联/联络 | 通话建立 |
| QRT | 关闭 | 通联结束 |

**完整表述**：QRV IN WAPC? = "你愿意参加木兰围场-通联中国之省吗？"
- **QRV** = Ready to join(准备参加)
- **IN** = participate in(参与)`,"../tips/A-293.md":`> **QRV** = Q(uestion) + R(eady) + V(alid) → 我**准备好收信**了

**拆解技巧**：QRV的V代表validity（有效性），整句表示状态就绪

| Q简语 | 含义 | 记忆点 |
|------|------|--------|
| QRV | 准备好收信 | **R**eady to **V**alid |
| QRU | 有消息吗 | **U**rgent message |
| QRX | 稍候 | **X**wait |`,"../tips/A-294.md":`> 没听清呼号→**QRZ？** 询问"谁在呼叫我"

**关键对比**：
- **QRZ** = 谁呼叫我？（请求对方重复呼号）
- QRU = 有消息吗
- QSY = 改变频率
- QSA = 信号强度

适用场景：通联中听不清对方身份时的**标准请求用语**`,"../tips/A-295.md":`> **QRZ** 双重含义：**陈述态**说呼叫你的是...；**疑问态**问谁呼叫我

| 使用方式 | 例句 | 含义 |
|--------|------|------|
| 陈述 | QRZ AB5CD | 呼叫你的是AB5CD |
| 疑问 | QRZ? | 谁在呼叫我？ |

**速记**：Z像**问号**形状→疑问句用QRZ?`,"../tips/A-296.md":`> **QSA** = 信号强度等级表示法，**5级强度体系**

**早期标准**：QSA + 1-5数字表示信号报告
- QSA1：非常弱
- QSA3：中等
- QSA5：非常强

**现代替代**：RST报告（可读性Readability、信号强度Strength、音调Tone）`,"../tips/A-297.md":`> 信号**衰落**变化→问 **QSB？** （Strength Blinks）

**应用场景**：
- HF远距通联中常见信号衰落
- 需对方评价自己信号稳定性
- **QSB** = 信号呈衰落状态

对比：QSA是强度值，QSB是衰落趋势`,"../tips/A-298.md":`> **QSB** = 你的信号**正在衰落**（strength becoming bad）

| Q简语 | 关键词 | 说明 |
|------|--------|------|
| QSB | 衰落 | 强度变弱 |
| QSD | 键控缺陷 | 手法有毛病 |
| QSK | 间隙插入 | 能在空隙中听到 |

记忆：**B**ecomes bad = 衰落`,"../tips/A-299.md":`> 发报手法有毛病 → **QSD？** （hand Keying Defect）

**小强问**："我发报手法怎样？" → 拍发 **QSD?**

对比应用：
- QSB? = 信号衰落吗
- QSD? = 手法缺陷吗  
- QSV? = 要我发测试音吗

**记忆**：**D**efect = 缺陷`,"../tips/A-3.md":`> **管理权责：国家+省级无线电管理机构**双层级，非协会/体育/公安

**监督管理机构层级关系**

| 层级 | 机构 | 职能 |
|------|------|------|
| 国家级 | 国家无线电管理机构 | 全国统一监督管理 |
| 地方级 | 省、自治区、直辖市无线电管理机构 | 属地监督管理 |

**排除逻辑**：
- B项：业余电台协会仅为**自律组织**，无法定监督权
- C项：**体育部门**无关，业余无线电非体育运动
- D项：**公安部门**管治安，无线电管理是工信部门职责`,"../tips/A-30.md":`> **自制设备技术检测：完全免费，不得收取任何费用**

**记忆要点**：检测是监管机构的法定职责，业余爱好者无需为此付费。干扰项B/C/D均涉及「收费」，一律错误。

**一句话**：自制台送检 = **零费用**，任何理由收费均违规。`,"../tips/A-300.md":`> 字母发得不好 → **QSD AT Y**（在Y字处有缺陷）

**规范格式**：QSD AT + 出问题的字母/符号

例：
- QSD AT Y = Y字手法不好
- QSD PSE CK = 请检查手法缺陷

**vs其他**：
- QRH AT Y = Y处频率漂移
- QSU AT Y = Y处信号太弱`,"../tips/A-301.md":`> 键击有砰然声 → **QSD PSE CK**（手法缺陷，请检查）

**关键表述**：
- QSD = 键控缺陷（包括砰然声、交流声等）
- PSE = 请（Please）
- CK = 检查（Check）

**vs TVI**：TVI是电视干扰，不是发报手法问题`,"../tips/A-302.md":`> **QSK** = **能在电码间隙中听到**电台插入（Semi-Break-in）

| 相关Q码 | 含义 | 区别 |
|--------|------|------|
| QSK | 间隙中能听到 | 接收能力 |
| QSB | 信号衰落 | 信号质量 |
| QSD | 键控缺陷 | 发报质量 |

**记忆**：QS**K** = "**K**eep listening in gaps"`,"../tips/A-303.md":`> 确认对方收妥 → 问 **QSL？**（Acknowledgment）

**对话流程**：
1. 你发消息 → QSL?
2. 对方回复 → QSL（确认收妥）

**常见错误对比**：
- QSL? = 收到吗？（确认）
- QRZ? = 谁呼叫？（身份）
- QSP? = 可转发吗？（中继）`,"../tips/A-304.md":`> **QSL** = **我确认抄收**了你的消息

**QSL的两层含义**：
1. **问句**：QSL? = 你收到吗？
2. **陈述**：QSL = 我确认收到

**QSL卡片**：
- 是通联凭证，但Q码QSL本身指的是**收信确认**
- 不要混淆"QSL卡"和"QSL确认"

**记忆**：**SL** = **S**ignal **L**ogged（信号已记录）`,"../tips/A-305.md":`> **QSO** = 直接或转信**通联**；业余电台间的**当前联络**关系

| Q码 | 含义 | 应用场景 |
|-----|------|---------|
| **QSO** | 通联/联络 | 两台正在进行的实时通话 |
| QSL | 确认卡片 | 事后交换联络记录 |
| QSP | 消息转信 | 帮助中转他台消息 |

**助记**：**S**O = **S**ocial（社交/联络）；强调**实时通话状态**`,"../tips/A-306.md":`> **QSP = 转信**：请求对方帮助转信至指定电台。QSX守听/QRD目标/QRV就绪都不对。

| Q码 | 含义 | 用途 |
|-----|------|------|
| QSP | 转信中继 | **请求帮助转信** |
| QSX | 守听频率 | 我在守听某频率 |
| QRD | 目标电台 | 你的目标是什么 |
| QRV | 就绪待命 | 我已准备好 |

**记忆**：转信(SP)→需要别人帮忙，所以用**问号**请求。守听(SX)是自己的状态，不需要别人转信。`,"../tips/A-307.md":`> **QSP** = **转信消息**；业余电台**帮助中转**他台消息的操作

| Q码 | 含义 | 动作 |
|-----|------|------|
| QSO | 通联 | 两台直接联络 |
| **QSP** | 转信 | **第三台中转消息** |
| QSL | 卡片 | 邮寄确认 |

**助记**：**P** = **Passing**（转发/中继）；强调**消息的中转功能**，区别于QSO的直接通联`,"../tips/A-308.md":`> **QSX = 守听请求**：希望对方**守听**某频率的操作模式。动作词用**？**表请求。

| Q码 | 方向 | 含义 |
|-----|------|------|
| QSX | 请求 | **请你守听**某频率 |
| QSY | 请求 | 请改频 |
| QSL | 回复 | 已收到/确认 |

**关键**：小明**希望**小强帮忙 = 小明发**请求句** = "QSX MY FT8...？" 带**问号**。对比309题小强**告诉**小明 = 小强发**陈述句** = 无问号。`,"../tips/A-309.md":`> **QSX = 守听陈述**：我正在守听某频率。陈述自己状态**无问号**，不是请求。

| 情景 | Q码 | 格式 | 标点 |
|------|------|------|------|
| 请求对方守听 | QSX | QSX MY...？| **？** |
| 陈述自己守听 | QSX | QSX FT8 ON...| **无标点** |

**对比308**：308是小明向小强**请求**→"QSX...？"；309是小强**陈述自己状态**→"QSX...（无问号）"。同一Q码，请求加**？**，陈述无标点。`,"../tips/A-31.md":`> **15W以上短波台**：国家无线电管理机构许可，可委托省级现场核查

| 事项 | 机构 |
|------|------|
| 作出许可决定 | **国家**无线电管理机构 |
| 现场核查（委托） | **省/自治区/直辖市**无线电管理机构 |

**排除C**：省级只能「核查」，不能「作出许可决定」。
**排除D**：B类操作证不够，需A类（15W以上短波属高功率台）。答案A+B。
`,"../tips/A-310.md":`> **QSY = 改频**：协商对方改变工作频率到指定频段。必带**？**表协商请求。

| Q码 | 含义 | 用法 |
|-----|------|------|
| QSY | 改频 | **QSY nnnn KHZ?** 请改频 |
| QRY | 频率拥挤 | 该频率有人用吗 |
| QSV | 发送试信 | 请发送试信 |
| QRV | 就绪 | 我已准备好 |

**记忆**：QS开头多是**动作指令**（改频QSY/守听QSX/转信QSP），QR开头是**询问/回复**。改频必须带**？**协商同意。`,"../tips/A-311.md":`> **QSY** = **Q**uick **S**witch freque**Y** | 改变发射频率的指令

| 缩语 | 含义 | 操作指向 |
|------|------|--------|
| QSY | 改变发射频率 | 频率调整 |
| QSX | 监听频率 | 频率监听 |
| QRX | 稍等 | 时间停顿 |

Q简语的**"S"代表状态/切换**，**"Y"代表频率(freque**n**c**y)**。记住：QSY是**主动改频**的命令。`,"../tips/A-312.md":`> **QTH** = **Q**uery loca**TH**ore | 询问对方位置/电台所在地

| Q简语 | 含义 | 查询内容 |
|------|------|--------|
| QTH | 位置 | 地理位置 |
| QRA | 电台名 | 台站名称 |
| QSA | 信号强度 | 信号报告 |

**记法**：**TH** = THere（那里）→ 位置。这是最常用的**地点查询缩语**。`,"../tips/A-313.md":`> **73** = "美好祝愿" | 业余无线电通联**结束致礼**的标准缩语

| 缩语 | 含义 | 使用场景 |
|------|------|--------|
| 73 | 美好祝愿 | 结束通联 |
| 88 | 亲切问候 | 温暖气氛 |
| 599 | 信号报告 | 完美信号 |

**73的来源**：莫尔斯电码中**"73"**对应**祝辞**。与**"88"（爱与亲吻）**相区分。`,"../tips/A-314.md":`> **UR ADR?** 或 **UR ADDR?** | 询问对方QSL卡片**邮寄地址**

| 缩语 | 用途 | 对象 |
|------|------|------|
| UR ADR | 你的地址 | QSL收件地址 |
| MY ADDR | 我的地址 | 自己信息 |
| P O BOX | 邮政信箱 | 具体地址 |

**记法**：**UR** = **Y**ou**R**（你的）；**ADR/ADDR** = **ADDRESS**。用于**交换QSL**前的关键问询。`,"../tips/A-315.md":`> **AGN** = A**G**ai**N** | 重复上次内容/操作请求

| 缩语 | 含义 | 用途 |
|------|------|------|
| AGN | 再来一次 | 信号不清/需重复 |
| AGC | 自动增益 | 接收器功能 |
| ABT | 关于 | 话题说明 |

**记法**：A**G**ain（再来）→ AGN。常见于**收不清**呼号或信号报告时使用。`,"../tips/A-316.md":`> **AHR** = A**H**ave-anotHeR | "另一个"的简洁表达

| 缩语 | 含义 | 分类 |
|------|------|------|
| AHR | 另一个 | 数量/替代 |
| ANT | 天线 | 设备 |
| ADDR | 地址 | 信息 |

**记法**：**A** + **H**ave + **R**（another重音）。用于**指代相似对象的替代物**。`,"../tips/A-317.md":`> **ARDF** = **A**mateur **R**adio **D**irection **F**inding | 业余无线电测向竞赛

| 缩语 | 全称 | 含义 |
|------|------|------|
| ARDF | Amateur Radio Direction Finding | 业余测向 |
| ATU | Antenna Tuning Unit | 天线调谐 |
| ANT | Antenna | 天线 |

**记法**：拆解**4个单词首字母**。这是**竞技项目**的标准术语。`,"../tips/A-318.md":`> **BOX** 或 **P O BOX** | 邮政信箱/邮政箱号的标准术语

| 术语 | 形式 | 用途 |
|------|------|------|
| BOX | 简写 | 邮政信箱 |
| P O BOX | 全称 | 官方表述 |
| BURO | 管理机构 | QSL局 |

**记法**：**BOX** = 邮政**箱子**；**P O** = **Post Office**。与BURO（局）区别。`,"../tips/A-319.md":`> **BURO** = QSL **BU**reau's **RO**le | QSL卡片**交换管理机构**

| 机构/术语 | 含义 | 功能 |
|----------|------|------|
| BURO | QSL交换局 | 集中转发QSL卡 |
| BOX | 邮政信箱 | 个人收件地址 |
| ROUTER | 路由 | 信息转发 |

**记法**：**BURO**源自"**Bureau**（局）"。是**国际性的QSL卡片交换中转机构**。`,"../tips/A-32.md":`> **执照载明全覆盖**：人 + 呼号频率功率 + 执照信息 + 特殊台附加项，ABCD全对

| 选项 | 内容 |
|------|------|
| A | 设置使用人、操作类别/编号 |
| B | 呼号、台址/区域、频率、功率 |
| C | 执照编号、日期、有效期、发证机关、特别规定 |
| D | 中继台/信标台还载明工作模式等 |

**口诀**：「人→频→证→特殊」四层全收录。
`,"../tips/A-320.md":`> **CK** = **C**he**C**K | 核实/检查/确认信息

| 缩语 | 含义 | 操作 |
|------|------|------|
| CK | 检查/核实 | 信息确认 |
| CQ | 一般呼叫 | 广泛呼叫 |
| CU | 见面 | 再见/下次 |

**记法**：**C**he**ck**（检查）。在CW通联中要求对方**核对/重申**某个信息。`,"../tips/A-321.md":`> **CQ** = "一般呼叫" | 广泛发起通联的**标准开场缩语**

| 缩语 | 含义 | 性质 |
|------|------|------|
| CQ | 一般呼叫 | 开放式邀请 |
| DE | 来自/此乃 | 身份标识 |
| TU | 感谢 | 礼节回应 |

**记法**：**C**all to **Q**ualify（资格呼叫）。最**古老的无线电缩语**之一，表示"**谁能听到我？**"`,"../tips/A-322.md":`> **DX** = **D**istant E**X**change | 来自远距离/国外的信号

| 缩语 | 含义 | 特点 |
|------|------|------|
| DX | 远距离 | 跨国/远地 |
| DE | 来自/此乃 | 身份说明 |
| DR | 亲爱的 | 礼节用语 |

**记法**：**D**istant（远的）+ **X**（未知远方）。业余爱好者追求**"DX通联"**为荣誉。常用于**成就感表达**。`,"../tips/A-323.md":`> **ES** = **E**nd **S**entence，CW缩语表示"**和**"，连接词用法

**记忆技巧**：End Sentence的首字母，在通联中用于连接两个词或短语，如"name ES QTH"（姓名和地址）

| 缩语 | 含义 | 用法 |
|------|------|------|
| ES | 和 | 连接词 |
| BT | 分段 | 段落分隔 |`,"../tips/A-324.md":`> **FB** = **F**ine **B**usiness，表示"**太棒了、业务精湛**"，赞美用语

**记忆技巧**：Fine Business的首字母，用来赞美对方的CW技术或通联质量。与其他评价缩语对比：**FB**（赞美）vs **OM**（老兄）vs **YL**（年轻女性）`,"../tips/A-325.md":`> **FER** = **FOR**的简写体，表示"**为了、对于**"，功能性缩语

**记忆技巧**：FOR的谐音简写，如"THX FER QSO"（感谢你的通联）。注意与**FEB**（二月）区分，FER是功能词，FEB是时间词

| 缩语 | 含义 | 示例 |
|------|------|------|
| FER | 为了、对于 | THX FER QSO |
| FEB | 二月 | 日期表示 |`,"../tips/A-326.md":`> **FREQ** = **FREQ**uency，"**频率**"的标准缩语，电气参数用语

**记忆技巧**：直接取Frequency的前4个字母。在频率交换中常用，如"UR FREQ 7.030"。与**TUNE**（调谐）区分：FREQ是数值参数，TUNE是调节动作

| 缩语 | 含义 | 类别 |
|------|------|------|
| FREQ | 频率 | 参数 |
| TUNE | 调谐 | 动作 |`,"../tips/A-327.md":`> **GA** = **G**ood **A**fternoon，"**下午好**"，时间问候缩语

**记忆技巧**：Good Afternoon首字母，下午通联时使用。**GA序列记忆**：GM(早)→GE(傍晚)→GN(晚)→GA(下午)

| 缩语 | 含义 | 时间 |
|------|------|------|
| GM | 早上好 | 上午 |
| GA | 下午好 | 下午 |
| GE | 傍晚好 | 傍晚 |
| GN | 晚上好 | 夜间 |`,"../tips/A-328.md":`> **GN** = **G**ood **N**ight，"**晚上好**"，夜间问候缩语

**记忆技巧**：Good Night首字母，最晚的时间问候。与**GA**（下午好）相对。**N代表Night**是记忆关键

| 缩语 | 含义 | 记忆 |
|------|------|------|
| GN | 晚上好 | **N**ight |
| GA | 下午好 | **A**fternoon |
| GE | 傍晚好 | Evening |
| GM | 早上好 | **M**orning |`,"../tips/A-329.md":`> **GL** = **G**ood **L**uck，"**祝你好运**"，结束通联时的祝福缩语

**记忆技巧**：Good Luck首字母，表示美好祝愿。注意区分：**GL**（好运）vs **73**（最美好的祝愿）vs **TU**（感谢你）。GL常在结束前使用

| 缩语 | 含义 | 用途 |
|------|------|------|
| GL | 好运 | 祝福 |
| 73 | 最美好祝愿 | 结束祝福 |
| TU | 感谢你 | 致谢 |`,"../tips/A-33.md":`> **业余无线电台执照有效期：最长 5 年**

| 对比 | 有效期 |
|------|--------|
| 业余台执照 | **≤5年** |
| 操作证书 | 长期有效（终身） |

**记忆**：5年≈驾照年检周期感，执照到期需续期。干扰项1/2/3年均错，直接选A（5年）。`,"../tips/A-330.md":`> **GLD** = **GL**a**D**，"**高兴、满意**"，情感表达缩语

**记忆技巧**：Glad的CW写法，表示对通联感到满意高兴。与**FB**（业务精湛）的区别：**GLD**是主观感受，**FB**是客观评价

| 缩语 | 含义 | 属性 |
|------|------|------|
| GLD | 高兴 | 感受 |
| FB | 太棒了 | 评价 |
| OM | 老兄 | 称呼 |`,"../tips/A-331.md":`> **GM = Good Morning**，CW联络中的问候缩语，表示"早晨好"

| 缩语 | 含义 | 场景 |
|------|------|------|
| GM | 早晨好 | 早上通联 |
| GA | 晚安 | 晚间通联 |
| GN | 晚安 | 结束通联 |

**助记**：G开头的问候缩语，**M=Morning早晨，A=Afternoon/evening晚间**`,"../tips/A-332.md":`> **GMT = Greenwich Mean Time**，格林尼治平均时间，国际标准时间

| 时间制式 | 全称 | 含义 |
|---------|------|------|
| GMT | Greenwich Mean Time | 格林尼治时间 |
| UTC | Coordinated Universal Time | 国际协调时间 |
| TAI | International Atomic Time | 国际原子时 |

**助记**：**Green（绿）威治**时间，DX电台常用**GMT报时**便于国际协调`,"../tips/A-333.md":`> **GN = Good Night**，CW联络中表示"晚安"，通常用于通联结束

| 缩语 | 含义 | 用途 |
|------|------|------|
| GN | 晚安 | 结束通联 |
| GM | 早晨好 | 开始通联 |
| HNY | 新年快乐 | 节日祝福 |

**助记**：**N=Night夜晚**，与GM(早晨)相对应`,"../tips/A-334.md":`> **GND = Ground**，表示"地面、接地"，电气/电子术语

| 缩语 | 领域 | 含义 |
|------|------|------|
| GND | 电气 | 地面、接地 |
| PSE | 通信 | 请 |
| RST | 信号 | 信号报告 |

**助记**：**GND在电路图中常见**，表示接地点/参考地，与GM(问候)完全不同`,"../tips/A-335.md":`> **HNY = Happy New Year**，12月下旬CW中的节日缩语，表示"新年快乐"

| 缩语 | 月份 | 含义 |
|------|------|------|
| HNY | 12月 | 新年快乐 |
| Merry Xmas | 12月 | 圣诞快乐 |
| HPI/HPY | 全年 | 幸福 |

**助记**：**H=Happy，NY=New Year**，年底CW频段常听到此缩语`,"../tips/A-336.md":`> **HPE = Hope**，CW联络中表示"希望去做某件事"，表达期待之意

| 缩语 | 字义 | 含义 |
|------|------|------|
| HPE | Hope | 希望做某事 |
| HPY/HPI | Happy | 幸福 |
| PSE | Please | 请 |

**助记**：**H=Hope，PE=表示动作**，常见于"HPE CU SOON"(希望很快见到你)`,"../tips/A-337.md":`> **HPY/HPI = Happy**，CW通联中表示"幸福"，节日或友好通联常用

| 缩语 | 含义 | 例句 |
|------|------|------|
| HPY | 幸福 | VY HPY 2025 |
| HPI | 幸福 | HPI NW |
| HPE | 希望 | HPE CU |

**助记**：**HPY两种写法**，**H=Happy，PY/PI都表幸福**，与HPE(希望)区分`,"../tips/A-338.md":`> **HST = High Speed Telegraphy**，"快速收发报"的缩语，CW快速通联

| 缩语 | 全称 | 含义 |
|------|------|------|
| HST | High Speed Telegraphy | 快速收发报 |
| CW | Continuous Wave | 莫尔斯电码 |
| RTTY | Radioteletype | 无线电传打字 |

**助记**：**HST用于快速CW段(20+wpm)**，区别于常速CW通联`,"../tips/A-339.md":`> **K = Over**，电台完成发送并**守听任意电台**时使用，开放性等待

| 缩语 | 对象 | 含义 |
|------|------|------|
| K | 任意电台 | 完成发送，守听任何人 |
| KN | 特定电台 | 完成发送，仅守听对方 |
| PSE | - | 请... |

**助记**：**K=Over，最开放的等待**，邀请所有电台回复`,"../tips/A-34.md":`> **执照形式灵活，样式国家统一，非终身有效**

| 说法 | 正误 |
|------|------|
| 可纸质或电子 | ✅ |
| 两种形式同等法律效力 | ✅ |
| 样式由国家无线电管理机构统一 | ✅ |
| 终身有效 | ❌（有效期≤5年，见A-33） |

**排除D**：执照≠操作证书，操作证书才是长期有效，执照有期限。答案ABC。`,"../tips/A-340.md":`> **KN = Over to you only**，电台完成发送并**仅守听通联对方**时使用

| 缩语 | 应用场景 | 含义 |
|------|---------|------|
| KN | 一对一通联 | 仅守听对方 |
| K | 开放通联 | 守听任意电台 |
| GA | 礼貌结束 | 晚安/再见 |

**助记**：**KN = K(Over) + N(对方)**，限制性等待，仅对话方回复`,"../tips/A-341.md":`> **MNY TNX/MNI TNX = Many Thanks**，CW中表示"非常感谢"

| 缩语 | 全写 | 含义 |
|------|------|------|
| MNY TNX | Many Thanks | 非常感谢 |
| VY TNX | Very Thanks | 很感谢 |
| MNI TNX | Many Thanks | 非常感谢(变体) |

**助记**：**MNY=Many(许多)，TNX=Thanks(感谢)**，**VY=Very(非常)**为强调版本`,"../tips/A-342.md":`> **NW = Now**，CW联络中表示"现在"，表达当前时刻

| 缩语 | 含义 | 用法 |
|------|------|------|
| NW | 现在 | NW LISTENING(现在在听) |
| NEW | 新的 | 完整单词 |
| NB | 注意 | 需要注意 |

**助记**：**NW≠NEW(新的)**，**W=now，仅3字母缩语**，CW中常见时间表述`,"../tips/A-343.md":`> **OM** = Old Man，"老朋友、老伙计"，无关年龄，指通联的亲密队友

**关键对比**：
- **OM**（Old Man）= 老朋友/老伙计
- **OB**（Old Boy）= 另一说法
- **OP** = 操作员 ≠ OM

**记忆**：Old Man的首字母缩写，强调**长期通联的熟悉感**而非真实年龄`,"../tips/A-344.md":`> **OP** = Operator，"操作员"的标准缩语

**快速对比**：
| 缩语 | 含义 | 用途 |
|------|------|------|
| **OP** | Operator 操作员 | 指人 |
| OM | Old Man 老伙计 | 指人（熟人） |
| OHM | 欧 | 电阻单位 |
| OOP | 非标 | 不选 |

**记忆**：Operator缩写就是**OP**，简洁直接`,"../tips/A-345.md":`> **PSE、PLS** = Please（请），CW通联中激活气氛的礼貌用语

**缩语速记**：
- **PSE** = Please（国际缩语）
- **PLS** = Please（英文缩语）
- PSK/ASK = 调制方式（错误干扰项）
- PWR/PTT = 电源/按键（错误干扰项）

**使用场景**：CW祈使句，如"PSE QSL"（请回复确认）`,"../tips/A-346.md":`> **R** = Roger，确认已完全收到，开启新会话的标准用语

**快速区分**：
| 缩语 | 含义 |
|------|------|
| **R** | Roger 确认 |
| RX | Receive 接收 |
| RIG | 电台/设备 |
| RFI | 无线电干扰 |

**记忆**：Roger → **R**，简单有力的确认信号`,"../tips/A-347.md":`> **SAE** = Self-Addressed Envelope，写好收信人地址的信封（无邮资）

**QSL卡片邮寄速记**：
| 缩语 | 含义 | 是否含邮资 |
|------|------|----------|
| **SAE** | 自址信封 | ❌ 无 |
| **SASE** | 自址贴邮信封 | ✅ 有 |

**记忆**：Self-Addressed信封便于对方**回信**，需自己贴邮票`,"../tips/A-348.md":`> **SASE** = Self-Addressed Stamped Envelope，写好地址、贴好邮票（有邮资）的信封

**邮寄邮资对比**：
| 缩语 | 中文 | 邮票 | 用途 |
|------|------|------|------|
| **SASE** | 自址贴邮信封 | ✅ 已贴 | QSL卡片交换 |
| SAE | 自址信封 | ❌ 无 | 普通回信 |

**记忆**：多了**S(Stamped贴邮票)**，是更周到的QSL交换礼仪`,"../tips/A-349.md":`> **SRI** = Sorry，"抱歉"，用于纠正刚发错的内容

**错误纠正缩语**：
- **SRI** = Sorry 抱歉
- SNR = 信噪比（错误）
- STN = 电台（错误）
- SMS = 短信（错误）

**使用场景**：SRI [错误内容] [正确内容]，表示礼貌纠正`,"../tips/A-35.md":`> **新版《办法》**：旧照有效期内按旧参数继续用，旧版22号令废止

| 说法 | 正误 |
|------|------|
| 旧照有效期内按旧照参数使用 | ✅ A |
| 22号令同时废止 | ✅ B |
| 自2025年3月1日施行 | ❌（实际施行日期不同，考题不确认此项） |
| 旧照需按新版要求使用 | ❌ D，与A矛盾 |

**核心**：过渡期保护原则——旧证不失效，旧规不溯及。答案A+B。
`,"../tips/A-350.md":`> **TEMP** = Temperature，"温度"的英文缩语

**气象类缩语对比**：
| 缩语 | 含义 |
|------|------|
| **TEMP** | Temperature 温度 |
| WX | Weather 天气 |
| TUNE | 调谐（非气象） |
| TMPO | 非标 |

**记忆**：Temperature首字母缩写**TEMP**，天气通报常用`,"../tips/A-351.md":`> **TNX、TKS** = Thanks，"谢谢"的感谢缩语

**感谢类缩语对比**：
| 缩语 | 含义 |
|------|------|
| **TNX** | Thanks 谢谢 |
| **TKS** | Thanks 谢谢 |
| TU | Thank You 谢谢你 |
| SRI | Sorry 抱歉 |

**记忆**：TNX更常见，TKS是拼写变体，都表**感谢**`,"../tips/A-352.md":`> **TU** = Thank You，"谢谢你"的正式感谢用语

**感谢程度递进**：
| 缩语 | 含义 | 正式度 |
|------|------|--------|
| **TU** | Thank You | ⭐⭐⭐ |
| TNX | Thanks | ⭐⭐ |
| TKS | Thanks | ⭐⭐ |
| ATU | 自动调谐 | （非感谢） |

**记忆**：**TU**比TNX更完整正式，指代"你"`,"../tips/A-353.md":`> **UR** = Your/You're，"你的"或"你是"的代词缩语

**人称代词缩语**：
| 缩语 | 含义 |
|------|------|
| **UR** | Your/You're 你的/你是 |
| TU | Thank You 谢谢你 |
| US | 我们（错误） |
| FB | 很好（错误） |

**记忆**：**UR** = U(you) + R(your/are)，简化人称代词`,"../tips/A-354.md":`> **WL** = Will，"将要"的未来时态助动词缩语

**时态相关缩语**：
| 缩语 | 含义 | 词性 |
|------|------|------|
| **WL** | Will 将要 | 助动词 |
| FB | Fine/Good 很好 | 形容词 |
| WX | Weather 天气 | 名词 |
| QSL | 确认 | 动词 |

**记忆**：**WL**表示**未来动作**，如"WL QSY"（将转换频率）`,"../tips/A-355.md":`> XYL = eXYL（已婚妇女），无线电爱好者对妻子的昵称缩语

**XYL拆解**：
- X = 已婚/已有
- YL = Young Lady（年轻女士）
- 组合 = 妻子

**对比记忆**：
| 缩语 | 含义 | 人群 |
|------|------|------|
| XYL | 妻子 | 已婚男性操作员 |
| YL | 女士 | 女性操作员通用 |`,"../tips/A-356.md":`> YL = Young Lady，业余无线电中对女性操作员的尊称，许多竞赛为其设立专项规则

**YL含义拆解**：
- Y = Young（年轻）
- L = Lady（女士）
- 实质 = 对女性爱好者的敬称

**与XYL区别**：YL是女性身份标签，XYL特指已婚妇女`,"../tips/A-357.md":`> 天线振子通称"单元"，缩语为**EL、ELE或ELS**三种等价表达

**缩语记忆**：
- EL = Element（振子/单元）
- ELE = Element缩写变体
- ELS = Elements复数形式

**对比其他天线缩语**：
| 缩语 | 含义 |
|------|------|
| EL/ELE/ELS | 振子/单元 |
| ANT | 天线总体 |
| YAGI | 八木天线 |`,"../tips/A-358.md":`> DP = Dipole，**偶极天线**的标准缩语，最基础对称辐射天线

**DP拆解**：
- D = Dipole
- P = Pole（极）
- 特点 = 两臂对称，垂直或水平

**记忆技巧**：**D**i**p**ole → **DP**`,"../tips/A-359.md":`> GP = Ground Plane，**垂直接地天线**，以地面为反射平面的垂直辐射体

**GP拆解**：
- G = Ground（地）
- P = Plane（平面）
- 结构 = 垂直杆+地面网格

**天线缩语对比**：
| 缩语 | 含义 | 结构 |
|------|------|------|
| GP | 垂直接地 | 垂直+地平面 |
| DP | 偶极天线 | 两臂对称 |
| VER | 垂直天线 | 仅垂直杆 |`,"../tips/A-36.md":`> **操作业余台：持操作证书，不受年龄限制**

**对比A-37记忆**：
| 事项 | 年龄要求 |
|------|----------|
| **独立操作**（A-36） | 持证即可，**无年龄限制** |
| **申请设台**（A-37） | 未成年人可申请，需监护人材料 |

**口诀**：「证在手，年龄走」——有证就能操作，不设最低年龄门槛。
`,"../tips/A-360.md":`> VER = Vertical，**垂直天线**的简称，泛指各类竖立辐射体结构

**VER拆解**：
- VER = Vertical（垂直）
- 范围 = 包括GP、杆状等所有竖向天线

**层级区分**：
| 缩语 | 含义 | 具体度 |
|------|------|--------|
| VER | 垂直天线 | 大类统称 |
| GP | 垂直接地天线 | VER的专项 |

**记忆**：VER最宽泛，GP最具体`,"../tips/A-361.md":`> **LW = Long Wire**，长线天线，非定向全向型天线

| 缩写 | 英文 | 中文 | 特点 |
|------|------|------|------|
| LW | Long Wire | 长线天线 | 全向、低增益 |
| YAGI | 八木 | 八木天线 | 定向、高增益 |
| BEAM | Beam | 定向天线 | 集中辐射 |

**助记**：**L**ong **W**ire = 长线，简单直白，是**最基础的全向天线**，常用于初级通联。`,"../tips/A-362.md":`> **YAGI = 八木天线**，日本人八木秀次发明，定向高增益天线

| 缩写 | 发明者 | 中文名 | 增益 |
|------|--------|--------|------|
| YAGI | 八木秀次 | 八木天线 | 高增益 |

**助记**：**Y**agi = **Y**ama（山）谐音八木（日本名字），有**反射器+馈源+多个导向器**，是**定向天线中最常见**的类型，VHF/UHF常用。`,"../tips/A-363.md":`> **BEAM = 定向天线**，将能量集中向一个方向辐射

| 天线类型 | 辐射方向 | 增益 | 应用 |
|---------|---------|------|------|
| BEAM(定向) | 单向集中 | 高 | 远程通联 |
| LW(全向) | 360°全向 | 低 | 本地通联 |

**助记**：**BEAM = 波束**，能量**集中成一束射出**，相对LW的全向辐射，BEAM的**方向性强、增益高**，适合**长距离通联和竞技**。注意与YAGI区别：**YAGI是具体结构，BEAM是功能分类**。`,"../tips/A-364.md":`> CW报（电报）用**电键通断**表示莫尔斯码，发射类别为**A1A**：A=振幅调制，1=单频单边带，A=信息类型

| 符号 | 含义 |
|------|------|
| A | 振幅调制 |
| 1 | 单频载波 |
| A | 莫尔斯码 |`,"../tips/A-365.md":`> **J3E** = 单边带抑制载波话音，三位符号各有含义

| 符号 | J | 3 | E |
|------|---|---|---|
| 含义 | **抑制载波**单边带 | 单路**模拟**信号 | **电话**（话音）|

速记：**J**ust one sideband + **3** analog + **E**ar(phone) → J3E。A1A=等幅电报，F2B=调频数字，G2B=相位数字，均与话音无关。`,"../tips/A-366.md":`> **F3F** = FM模拟电视，SSTV信号本质是FM音频调制的慢扫描图像

| 符号 | F(首) | 3 | F(尾) |
|------|-------|---|-------|
| 含义 | **调频**FM | 单路模拟 | **电视** |

对比记忆：J3**E**=SSB话音(E=tElEphonE)，F3**F**=FM电视(F=Film)。SSTV用频率调制音频色调编码图像，不是语音，故末位为F而非E。`,"../tips/A-367.md":`> 调频话音用**F3E**标示：F=频率调制，3=带宽3kHz，E=话音信息

| 发射类别 | 调制方式 | 信息类型 |
|--------|--------|--------|
| **F3E** | 调频 | **话音** |
| F3F | 调频 | SSTV |
| J3E | 单边带 | 话音 |`,"../tips/A-368.md":`> SSTV（慢扫电视）用调频传输时为**F3F**：F=频频率调制，3=带宽3kHz，F=**图像信息**

**记忆**：F3E是话音，F3F是**图像**（F代表Figure/图像）`,"../tips/A-369.md":`> ATV（快扫电视）用调频传输为**F3F**：宽带图像信号用调频，带宽3kHz只是基础

**区别**：SSTV(F3F)慢速，ATV(F3F)快速，都是图像传输`,"../tips/A-37.md":`> **未成年人可申请设台**，但需附监护人证明和关系说明

**对比A-36**：操作不限年龄，申请设台也不限年龄（未成年可申请）。

| 申请人 | 额外材料 |
|--------|----------|
| 成年人 | 身份证复印件 |
| 未成年人 | 身份证 + **监护人证明** + **关系说明** |

**排除BCD**：法规无「14/16/18岁」的申请年龄门槛限制。
`,"../tips/A-370.md":`> 带外发射定义关键词：**调制过程产生**→**超出必要带宽**→**排除杂散发射**

| 对比项 | 内容 |
|------|------|
| 产生原因 | 调制过程 |
| 频率位置 | 刚超出**必要带宽** |
| 排除项 | 杂散发射不算 |

**必要带宽**是信息完整传输所需的最小带宽`,"../tips/A-371.md":`> 三大基本调制：**AM=幅度调制**、**FM=频率调制**、**PM=相位调制**

| 缩写 | 中文名 | 调制参数 |
|------|-------|--------|
| AM | 幅度调制(调幅) | 波的高度 |
| FM | 频率调制(调频) | 波的快慢 |
| PM | 相位调制(调相) | 波的位置 |

**谐音**：A幅、F频、P位相`,"../tips/A-372.md":`> VHF/UHF**本地通联**（短距离）用**FM**：覆盖广、抗干扰好、实现简单

**应用场景**：中继台、移动通信多用FM`,"../tips/A-373.md":`> VHF/UHF**长距离弱信号**用**SSB**：频率利用高、功率利用率高、抗衰减好

**对比FM**：SSB窄带只需2.7kHz，FM宽带16kHz，同等功率SSB更远`,"../tips/A-374.md":`> **HF话音通联首选SSB**：HF频段本身传播远，SSB节省带宽、便于共频、符合规范

**原因**：HF频段拥挤，SSB带宽窄(2.7kHz)能容纳更多用户`,"../tips/A-375.md":`> SSB vs FM的**带宽优势**：SSB占用2.7kHz，FM占用16kHz，**SSB窄6倍**

| 项目 | SSB | FM |
|------|-----|-----|
| 占用带宽 | **2.7kHz** | 16kHz |
| 频率利用 | 高 | 低 |
| 同频干扰 | 少 | 多 |`,"../tips/A-376.md":`> FM主要缺点是**占用带宽宽**（16kHz vs SSB 2.7kHz），同频能容纳电台少，**无法守听多个**

| 方面 | FM缺点 | SSB优点 |
|------|--------|--------|
| 带宽 | 宽(浪费) | 窄(高效) |
| 守听 | 难(频宽) | 易(分离好) |
| 功率利用 | 低 | 高 |`,"../tips/A-377.md":`> VHF/UHF做SSB通联选**上边带(USB)**，与HF高频段规则一致

| 频段 | 边带 |
|------|------|
| VHF / UHF | **上边带 USB** |
| HF ≥14MHz | **上边带 USB** |
| HF ≤7MHz | **下边带 LSB** |

速记：**高频段（含VHF/UHF）→上边带**，低频段→下边带，分界约10.1MHz。
`,"../tips/A-378.md":`> **14MHz及以上**HF频段（含20m、15m、10m等）语音通信用**上边带(USB)**

| 频段 | 波段 | 边带 |
|------|------|------|
| ≥14MHz | 20m及更高 | **USB 上边带** |
| ≤7MHz | 40m及更低 | **LSB 下边带** |

速记：**14上7下**；**高频→上，低频→下**，10.1MHz是国际约定分界。
`,"../tips/A-379.md":`> **7MHz及以下**频段（40m、80m、160m）语音通信用**下边带(LSB)**

与A-378互为镜像，合并记忆：

| 频段 | 边带 | 典型波段 |
|------|------|----------|
| ≤7MHz | **LSB 下边带** | 40m/80m |
| ≥14MHz | **USB 上边带** | 20m/15m |

速记：**低频低边带(L→L)**，7对应LSB，14对应USB。
`,"../tips/A-38.md":`> **固定台址业余台** → 向**电台所在地**省级无线电管理机构申请

| 台址类型 | 申请机构 | 依据 |
|----------|----------|------|
| 有固定台址 | **电台所在地**省/自治区/直辖市 | 台在哪申请在哪 |
| 无固定台址 | 申请人**住所地**省级（见A-39） | 人在哪申请在哪 |

**排除B/C**：中国无线电协会、地方民间机构均无审批权。排除D：国家级机构仅管15W以上等特殊情况。`,"../tips/A-380.md":`> 10.1MHz上下边带分界是**国际业余无线电惯例约定**，不是物理/传播原因

排除干扰：
- ❌ 并非该频段传播特性不同
- ❌ 并非BFO频率设置导致
- ✅ **各国爱好者长期沿用的通联习惯**

速记：**约定俗成，不是自然规律**，记住「习惯」二字即可排除其他选项。
`,"../tips/A-381.md":`> **SSB呼叫频率间隔≥2-3kHz**：保证相邻电台不互相干扰

**计算**：SSB占用2.7kHz，加保护余量0.3kHz=3kHz安全间隔

| 调制方式 | 占用带宽 | 推荐间隔 |
|--------|--------|--------|
| SSB | 2.7kHz | **2-3kHz** |
| FM | 16kHz | 25-50kHz |
| CW | 0.2kHz | 0.5-1kHz |`,"../tips/A-382.md":`> **SSB(单边带)属于AM(调幅)家族**，是抑制载波+单边带的线性调幅变体

AM变体谱系（均为线性调幅）：

| 类型 | 载波 | 边带 |
|------|------|------|
| AM | 全载波 | 双边带 |
| DSB | 抑制载波 | 双边带 |
| **SSB** | **抑制载波** | **单边带** |

速记：Chirp/DSSS/PSK均非调幅，**只有SSB是AM家族成员**。
`,"../tips/A-383.md":`> CW = Continuous Wave **等幅电报**，用通断键控表示莫尔斯码

| 缩写 | 全称 | 含义 |
|------|------|------|
| CW | Continuous Wave | 等幅电报 |
| **非** | Modulation | 莫尔斯编码（编码方式） |
| **非** | ASK | 幅度键控（调制方式） |

**速记**：CW是**通断键控**方式，不是编码/调制名称。莫尔斯码是**编码规则**，CW是用连续波的**通/断**表示莫尔斯码的通信方式。`,"../tips/A-384.md":`> 发射带宽从窄到宽：**CW < SSB话 < 调频话 < ATV**，CW最窄

| 方式 | 典型带宽 | 排名 |
|------|---------|------|
| **CW** | ~100Hz | **最窄** |
| 单边带话 | ~3kHz | 第二 |
| 调频话 | ~15kHz | 第三 |
| ATV | MHz级 | 最宽 |

速记：**摩斯码只需一个音调，带宽极窄**；CW=Continuous Wave，等幅不调制。
`,"../tips/A-385.md":`> 调频话信道**带宽过宽**，违反"保持最低必要带宽"原则

| 方式 | 带宽 | 莫尔斯码需求 | 合规性 |
|------|------|---------|--------|
| CW | 窄 | 小 | ✓符合 |
| **FM话** | **宽** | **小** | ✗浪费频谱 |

**关键法规**：《无线电频率划分规定》"技术特性"章——**"把带宽保持在技术状态和业务性质所允许的最低值上"**。FM用于话音设计，用于电码造成频谱浪费。`,"../tips/A-386.md":`> 超额输入→**信号失真**→谐波/互调增多→发射带宽增加→通信质量下降

**失真机制**：
- 10倍过载输入 → 放大器**过饱和** → 输出波形失真
- 失真信号含**大量谐波和互调产物** 
- 谐波扩展发射频谱 → **占用邻信道** → 干扰增加

**对比陷阱**：
- ❌ 不是延长距离（失真反而降低信噪比）
- ❌ 不是直接烧毁（保护电路会限幅）`,"../tips/A-387.md":`> YSF = **数字语音+数据融合**，C4FM调制，支持中继扩展

| 特性 | YSF | 备注 |
|------|------|------|
| 调制方式 | **C4FM** | ✓选项C正确 |
| 中继能力 | **支持** | ✓选项B正确 |
| 应用广度 | **广为采用** | ✓选项A正确 |
| 多址技术 | **无TDMA** | ✗选项D错误 |

**排除D**：YSF不使用时分多址（TDMA），而是基于C4FM的单信道方式。`,"../tips/A-388.md":`> D-STAR = **数字语音+数据**，支持**中继+互联网+GPS定位**

| 功能 | 说明 |
|------|------|
| **数字通信** | 语音+数据融合方式 |
| **中继扩展** | 通过D-STAR中继站转发 |
| **互联网接入** | 通过热点(Hotspot)连接全球用户 |
| **位置报告** | 支持GPS定位与自动报告 |

**全选✓**：A、B、C、D都是D-STAR标准功能，体现**全球互联**特性。`,"../tips/A-389.md":`> FreeDV = **开源数字语音**，窄带HF方案，支持自主研发

| 特点 | 内容 |
|------|------|
| **传输带宽** | 窄带，适合HF(2-30MHz) |
| **学习价值** | 数字通信+语音处理原理研究 |
| **开源许可** | 遵循开源协议可自主研发 |
| **FM台兼容** | ❌**不支持**(需专用设备) |

**排除D**：FreeDV需专用解调器，不能用普通FM手持台，音色不会"优美"。`,"../tips/A-39.md":`> **无固定台址业余台** → 向**申请人住所地**省级无线电管理机构申请

| 台址类型 | 申请机构 |
|----------|----------|
| 有固定台址（A-38） | **台所在地**省级 |
| 无固定台址（A-39） | **人住所地**省级 |

**口诀**：「台有址找台，台无址找人」——两题合并记忆，对比清晰。协会/民间机构无权审批。
`,"../tips/A-390.md":`> DATV（数字业余电视）通过DVB-S2卫星协议，**支持4种PSK/APSK调制**

| 调制方式 | 编码效率 | 信噪比需求 |
|---------|--------|---------|
| QPSK | 2bit/符号 | 低 |
| 8PSK | 3bit/符号 | 中 |
| 16APSK | 4bit/符号 | 高 |
| 32APSK | 5bit/符号 | 最高 |

**全选✓**：DVB-S2标准支持全系列PSK/APSK，根据信噪比灵活选择调制方式。`,"../tips/A-391.md":`> DSSTV用**SSB而非FM**：SSB线性保真基带，FM门限效应破坏DRM差错控制码

| 传输方式 | 基带保真度 | DRM差错控制 | 带宽 |
|---------|-----------|------------|------|
| **SSB** | ✅ 完整线性 | ✅ 有效 | 窄 |
| FM | ❌ 门限失真 | ❌ 受损 | 宽 |

速记：**DRM编码依赖精确基带→需线性传输→选SSB**；FM门限效应是非线性失真，会破坏数字编码。
`,"../tips/A-392.md":`> 收发信机 = **收+发合一**的无线电通信设备

| 类型 | 定义 | 功能 |
|------|------|------|
| **收发信机** | 接收机+发射机组合 | 收/发切换 |
| ❌中继器 | 转发设备 | 单向扩展 |
| ❌处理机 | 信号处理+转发 | 纠错/解码转发 |
| ❌网关 | 多模式转换 | 数字→模拟 |

**A正确**：最基础定义就是**收发两个功能集合**。`,"../tips/A-393.md":`> 接收系统**最少三部分**：天线→解调→电源

| 部件 | 必需 | 理由 |
|------|------|------|
| **接收天线** | ✓ | 接收电磁波 |
| **解调器** | ✓ | 还原信息信号 |
| **电源** | ❌ | 集成在接收机内 |
| 电位器 | ❌ | 非必需部件 |

**系统流程**：天线 → (RF放大+混频+中放+检波) **解调** → 音频输出。解调器是**关键**。`,"../tips/A-394.md":`> 发射系统**最少三部分**：振荡→调制→天线

| 部件 | 必需 | 功能 |
|------|------|------|
| **射频振荡器** | ✓ | 产生载波 |
| **调制器** | ✓ | 信号调制上载波 |
| **发射天线** | ✓ | 辐射电磁波 |
| 防雷器 | ❌ | 防护装置，非必需 |

**发射链路**：信息源 → **调制器** → (功放+滤波) → **天线**。防雷器是**可选保护**。`,"../tips/A-395.md":`> 电源线短粗 → **减小压降** → 发信时保持稳定电压

**物理原理**：
- $U_{drop} = I \\times R$，R = $\\rho \\frac{L}{A}$
- **短**：减小长度L → 降低电阻
- **粗**：增大截面A → 降低电阻

发信时**大电流**流动，细/长线上压降大 → 电压波动 → RF功率不稳定。

**排除干扰**是**屏蔽接地**作用，不是电源线长度。`,"../tips/A-396.md":`> **单工 = 两端都按PTT，轮流说话**，如两台对讲机你说我听、我说你听。

| 工作方式 | 两端状态 | 典型设备 |
|--------|---------|--------|
| **单工** | 双方都用PTT交替 | 两台手持对讲机 |
| 双工 | 双方同时收发 | 手机通话 |
| 半双工 | 一端PTT + 一端连续 | 对讲机↔中继台 |

**排除法**：B(座机)/C(手机) 是双工；D 含中继台是半双工；只有 A（两台PTT对讲机）双方都要按键切换 → 单工。`,"../tips/A-397.md":`> **双工 = 两端同时收发，关键：收发频率不同且同时工作**，卫星通信是典型。

**记忆核心**：430MHz收 + 144MHz发，两个频率**同时**跑 = 真正双工。

| 选项 | 分析 |
|-----|------|
| A ✅ | 卫星站：单独RX(430) + 单独TX(144)，同时工作 |
| B ❌ | QSK虽快，仍是CW击键间隙接收，非同时 |
| C ❌ | 对讲机端用PTT，整体降为半双工 |
| D ❌ | 两台PTT对讲机 = 单工 |

**口诀**：双工看两端，**各自同时收发**才算数。
`,"../tips/A-398.md":`> **半双工 = 一端单工(PTT) + 一端双工(中继台)**，中继台是核心标志。

**中继台特性**：始终在一个频率接收、另一个频率发射，**双工**运行；
**对讲机PTT**：按键发、松键收，**单工**运行。

| 通信组合 | 工作方式 |
|---------|--------|
| 中继台 ↔ PTT对讲机 | **半双工** ✅ |
| PTT对讲机 ↔ PTT对讲机 | 单工 |
| 手机 ↔ 手机 | 双工 |

**助记**：「**半**」= 一半单工(PTT手台) + 一半双工(**中继台**)，有中继台必是半双工。`,"../tips/A-399.md":`> PTT = **Push To Talk**，按键发射信号，对地接通时启动发射

| 信号 | 全名 | 功能 |
|------|------|------|
| **PTT** | Push To Talk | 按键发射/待机切换 |
| ❌压缩 | Compression | 语音包络提升 |
| ❌前放 | Preamp | 接收微弱信号放大 |
| ❌调谐 | Auto Tuner | 天线SWR自动补偿 |

**工作逻辑**：按下PTT(常见为脚踏或手柄) → 对地接通(GND) → 发射机启动 → 转为**发射模式**。松开 → 断开 → 回到**接收待机**。`,"../tips/A-4.md":`> **术语定义文件是《频率划分规定》**，负责无线电业务分类和术语规范

**频率划分文件的作用**

| 文件名称 | 职能定位 | 包含内容 |
|---------|---------|---------|
| 频率划分规定 | **基础性法规** | 业务定义、术语规范 |
| 无线电管理条例 | 管理总则 | 台站管理、许可流程 |
| 无线电台执照规定 | 执照操作 | 申请、发放、撤销 |

**关键记忆**："**频率划分"="术语库**"——国际和国内无线电频段分配及业务定义的标准文件`,"../tips/A-40.md":`> **设台三大条件**：熟悉法规 + 操作能力达标 + 设备合规

| 条件 | 选项 |
|------|------|
| 熟悉无线电管理规定 | A ✅ |
| 通过操作技术能力验证 | B ✅ |
| 设备型号核准/自制符合国标 | C ✅ |
| 加入指定协会 | D ❌ 无此要求 |

**排除D**：法规从未规定必须加入某协会，这是典型干扰项。答案ABC。
`,"../tips/A-400.md":`> **SQL = Squelch(静噪)控制**，调节接收机**静噪阈值**，低于阈值的噪声被抑制

| 功能 | 作用 | 场景 |
|------|------|------|
| **SQL静噪** | 抑制弱信号噪声 | 接收时过滤背景噪音 |
| 语音压缩 | 提升弱部分幅度 | 发射音频处理 |
| 前置放大 | 增强微弱信号 | 接收灵敏度优化 |
| 自动调谐 | 匹配天线阻抗 | 降低驻波比 |

**记忆要点**：SQL是**静噪**（Squelch）的缩写，收发信机**接收侧功能**，通过**调整阈值**来决定何时打开音频输出——只有信号强度超过SQL设定值，才能听到声音，低于阈值只有静默（所以叫"静噪"）。`,"../tips/A-401.md":`> 静噪功能：**无信号时关闭音频输出**，避免播放刺耳噪声

**核心作用对比**
| 功能 | 作用对象 | 作用时机 |
|------|--------|--------|
| 静噪 | 噪声输出 | 无信号时 |
| 滤波 | 信号中噪声 | 有信号时 |
| AGC | 信号强度 | 接收全程 |

**速记**：静噪=**"门卫"**，信号来了开门播放，没信号时关门隔音。不是去噪，是**禁音**。`,"../tips/A-402.md":`> 接收微弱信号：**关闭静噪或阈值设为0**，让微弱信号也能通过

**静噪阈值与信号强度**
| 静噪设置 | 通过信号强度 | 场景 |
|---------|----------|------|
| 高阈值 | 强信号 | 干扰多环境 |
| 0/关闭 | 所有信号 | 微弱信号接收 |

**速记**：微弱信号=**"打开所有通道"**，宁可听噪声也要捕捉微弱信号。VOX(语音激活)与静噪无关，是**发射**功能。`,"../tips/A-403.md":`> 噪声拖尾"嘶"声：**静噪检测延迟**，鉴频输出判断需时间缓冲

**静噪工作原理**
- 检测对象：鉴频器**高音频噪声**大小
- 检测方式：需**一定时间**完成判断
- 结果：信号消失→延迟→短暂泄漏噪声

**速记**：静噪是**"反应时间"问题**，不是PTT跳动，不是故意标志，不是AGC。电路**需反应时间**才能判断信号无。`,"../tips/A-404.md":`> VOL = **音量(Volume)**控制，调整接收声音大小

| 符号 | 功能 | 控制对象 |
|------|------|--------|
| VOL | 音量控制 | 接收机输出声音 |
| VOX | 声控发信 | 收发自动转换 |
| PRE | 前置放大 | 接收微弱信号 |

**核心**：VOL是**最基础的音频控制**，不涉及信号处理或天线调谐。`,"../tips/A-405.md":`> VOX = **声控(Voice Operated)**，麦克风有声音自动发射

| 符号 | 功能 | 触发方式 |
|------|------|--------|
| VOX | 声控发信 | 麦克风语音输入 |
| ALC | 射频电平控制 | 自动反馈检测 |
| PROC | 语音压缩 | 音频电平检测 |

**记忆**：VOX让你**"说话自动切发射"**，解放PTT键。注意与**ALC(射频)**和**PROC(音频)**区别。`,"../tips/A-406.md":`> VOX="免提通话"，双手忙碌时**无需按PTT**自动判断说话并发射

| 功能 | 触发方式 | 使用场景 |
|------|--------|--------|
| PTT | 手动按键 | 正常操作 |
| VOX | 声音激活 | 驾驶/双手忙 |

**速记**：PTT=**"手动开门"**，VOX=**"声音感应门"**。VOX与蓝牙、话音加工、降带宽**无关**。`,"../tips/A-407.md":`> CTCSS=**亚音调静噪**，67-250.3Hz的**38个频率**选一个作选通信号

**CTCSS详解**
| 参数 | 数值 |
|------|------|
| 频率范围 | 67~250.3 Hz |
| 可选数量 | 38种 |
| 作用 | 选通接收机 |
| 人耳感知 | 不易察觉 |

**速记**：CTCSS=**"38把钥匙"**选一把，只有匹配的接收机才开启音频。**低频亚音**≠DTMF(双音多频)。`,"../tips/A-408.md":`> DTMF=**双音多频编码**，8个音调中**选2个组合**→16种状态，遥控/传数字

**CTCSS vs DTMF对比**
| 项目 | CTCSS | DTMF |
|------|-------|------|
| 频率个数 | 1个(38选) | 2个(8选组合) |
| 可表示状态 | 38种 | 16种 |
| 用途 | 选通 | 遥控/数字 |
| 频率范围 | 67~250Hz | 697~1633Hz |

**速记**：DTMF=**"电话拨号音"**，用于遥控指令和数字传输。**高频双音** ≠ 低频亚音。`,"../tips/A-409.md":`> 亚音静噪技术：**CTCSS(模拟亚音)** 和 **DCS(数字亚音)** 两种实现方式

**静噪菜单项对应**
| 菜单项 | 含义 | 类型 |
|------|------|------|
| CTCSS | 模拟亚音调 | ✓选通 |
| DCS | 数字码静噪 | ✓选通 |
| DTMF | 双音多频 | ✗(遥控用) |
| SQL | 载波检测 | ✗(简易静噪) |

**速记**：CTCSS+DCS=**"两种亚音"**都在发射语音上附加低频信号选通。DTMF是**高频遥控**，SQL是**信号强度**检测。`,"../tips/A-41.md":`> 执照续期申请：**30个工作日前**向原许可机构申请，不是届满后申请

| 常见期限对比 | 时间节点 |
|---------|--------|
| 续期申请 | 届满30个工作日**前** |
| 变更申请 | **及时**申请 |
| 拆除期限 | 注销后60个工作日内 |

**关键**：是"之前"不是"之后"，提前规划`,"../tips/A-410.md":`> NFM/WFM：**窄带**(12.5/25kHz信道) vs **宽带**(180kHz广播)调频模式选择

**调频带宽对应**
| 模式 | 全称 | 信道带宽 | 应用 |
|------|------|--------|------|
| NFM | 窄带调频 | 12.5/25 kHz | 业余通信 |
| WFM | 宽带调频 | ~180 kHz | FM广播 |

**速记**：NFM=**"窄信道"**(通信)，WFM=**"宽信道"**(广播)。与数字/模拟、本地/远程、单/双频**无关**。`,"../tips/A-411.md":`> 全/半频偏：**25kHz信道用5kHz频偏**(全)，**12.5kHz信道用2.5kHz频偏**(半)

**频偏与信道对应**
| 标称带宽 | 频偏设置 | 说法 |
|---------|--------|------|
| 25 kHz | 5 kHz | 全频偏 |
| 12.5 kHz | 2.5 kHz | 半频偏 |

**速记**：频偏=**"调制幅度"**，占用带宽的一半。与频率漂移、中继/直联、话音压缩**无关**。调制频偏越大→带宽越宽→频道越占。`,"../tips/A-412.md":`> 发射失真/可辨度差原因：**电源不足** ✓ | **多径衰落** ✓ | **频率不准** ✓ | 天线功率 ✗

**故障排查表**
| 原因 | 检查/排查 | 可选 |
|------|---------|------|
| 电源电压低 | 检查供电/换电池 | ✓A |
| 多径衰落 | 挪动位置/换频率 | ✓B |
| 频率偏差 | 设备维修校准 | ✓C |
| 天线功率 | 天线等级 | ✗D |

**速记**：天线**承载能力不足不会造成失真**，只会影响发射距离。前三项都是**直接**影响信号质量的因素。`,"../tips/A-413.md":`> 快速切换常用频率：**将频率存储为一个频道**到电台内存中

**切换方式对比**
| 方法 | 操作 | 切换速度 |
|------|------|--------|
| 存储频道 | 直接调用 | 快速 |
| 手动输入 | 每次手选 | 缓慢 |
| 扫描功能 | 自动搜索 | 需等待 |

**速记**：常用频率=**"存为快捷键"**，一键切换。扫描是**遍历查找**，不是快速切换到**指定**频率。`,"../tips/A-414.md":`> 车载电台直流负极：接**电池负极**或**发动机接地带**，构成完整回路

**直流电源接线要求**
| 接线部位 | 可行性 | 原因 |
|---------|------|------|
| 电池负极/发动机地 | ✓正确 | 低阻抗完整回路 |
| 任意金属部件 | ✗错误 | 接触不良/腐蚀风险 |
| 天线座 | ✗错误 | 功能冲突 |
| 挂置架 | ✗错误 | 无电气连接 |

**速记**：负极=**"必须回到电源端"**，不能随意接其他金属件。车身虽是导体，但**只有接地带**是标准低阻路径。`,"../tips/A-415.md":`> 汽车移动电台尖利啸声源于**发电机**，引擎转速变化导致频率随之变化

**干扰来源分析**：
| 噪声源 | 特征 | 频率特性 |
|------|------|--------|
| 发电机 | 尖利啸声 | 随引擎转速变 |
| 火花塞 | 爆裂噪声 | 点火脉冲 |
| 油泵 | 低频嗡鸣 | 泵送频率 |
| ABS | 调制噪声 | 制动周期 |

**记忆技巧**：移动电台+**引擎转速同变** = **发电机**旋转频率变化`,"../tips/A-416.md":`> 手持电台FM频偏过大，应**切换NFM或减少话筒接近度**，而非增加功率或音量

**解决方案优先级**：
| 方案 | 原理 | 有效性 |
|-----|------|--------|
| 切换NFM | 降低频偏要求 | ⭐⭐⭐⭐⭐ |
| 远离话筒 | 减少调制深度 | ⭐⭐⭐⭐⭐ |
| 增大功率 | 无关参数 | ✗ |
| 增大音量 | 加重频偏 | ✗ |

**记忆**：频偏过大 → **缩小调制信号** = 话筒距离↑ 或 NFM档位`,"../tips/A-417.md":`> **干扰他人→检查自身**：频率准确性+杂散发射指标合格是首要排查项

| 错误选项 | 原因 |
|---------|------|
| 换调制模式 | 治标不治本，问题在发射机本身 |
| 通知制造商 | 应先排查自身设备，再考虑硬件问题 |
| 增加功率 | 反向操作，会加重干扰 |

**核心逻辑**：干扰投诉→先自查（频率准确+杂散发射合格）→再求人`,"../tips/A-418.md":`> 2米波段信号突然变弱，源于**多径效应衰落**，移动位置可改善，与静噪/电池无关

**信号衰落原因**：
| 现象 | 成因 | 解决方案 |
|-----|------|--------|
| 突然变弱 | 多径干涉破坏性叠加 | 移动位置 |
| 逐渐减弱 | 距离增加 | 提高功率 |
| 完全丧失 | 路径阻挡 | 调整天线 |

**记忆技巧**：**多径+衰落** = 移动位置改变相位关系 → 信号恢复`,"../tips/A-419.md":`> SSB/CW嘈杂环境下，用**耳机**替代扬声器隔离背景噪声，改善话音抄收

**设备功能对比**：
| 设备 | 功能 | 用途 |
|-----|------|------|
| 耳机 | 隔离噪声、专注信号 | ✓ 降噪/清晰度 |
| 低通滤波器 | RF滤波 | ✗ 模态无关 |
| 显示器 | 视频输出 | ✗ 无音频 |
| 胖话筒 | 发射工具 | ✗ 无关 |

**记忆**：嘈杂环境 + 话音抄收 = **耳机隔离** + 专注力集中`,"../tips/A-42.md":`> 执照变更事项：发生变化**及时申请**，不能等期满，不因设备型号不变而豁免

变更情形速记：
- ✓ 台址改变 → 及时申请
- ✓ 设备改变 → 及时申请  
- ✗ 设备未改变 → 仍需申请
- ✗ 只备案不申请 → 错误

**对比A-41**：续期是"届满前"，变更是"及时"`,"../tips/A-420.md":`> **NB(抑噪)**切脉冲突发噪声；**SQL(静噪)**按信噪比自动关音频，功能完全不同

**两种噪声抑制对比**：
| 功能 | 缩写 | 原理 | 触发条件 |
|-----|------|------|--------|
| 抑噪 | NB | 削除尖锐脉冲 | 幅度异常 |
| 静噪 | SQL | 关断音频输出 | 信噪比阈值 |

**记忆技巧**：**NB=Noise Blanker**(脉冲削除) vs **SQL=Squelch**(静默关断)`,"../tips/A-421.md":`> **火花塞脉冲干扰AGC压制→用NB抑噪**，不是SQL或RIT

| 干扰特征 | 症状 | 解决方案 |
|---------|------|--------|
| 脉冲宽带噪声 | AGC过早起控压制信号 | **打开NB**（脉冲噪声消除） |
| 频偏问题 | 同频干扰 | 调频率或RIT |
| 静噪设置 | 无法识别微弱信号 | 调SQL |

**记忆**：NB=**N**oise **B**lanker，专治脉冲干扰`,"../tips/A-422.md":`> **MODE键切换工作方式**：FM、LSB、USB、CW等调制模式，非静噪/超外差方式

**MODE功能**：
| 参数 | 功能 | 对应选项 |
|-----|------|--------|
| MODE | 调制模式切换 | FM/LSB/USB/CW |
| CTCSS/DCS | 静噪方式 | A错选 |
| 接收架构 | 硬件设计 | C错选 |
| 输出方式 | 音频路由 | D错选 |

**记忆**：**MODE=调制模式**（最上层功能），不涉及接收处理/输出路由`,"../tips/A-423.md":`> **ATT = 收信输入衰减器**，前级过载时切入，防止强信号饱和

| 功能缩语 | 含义 | 作用对象 |
|---------|------|---------|
| **ATT** | Attenuator（衰减器） | 接收前端，强信号环境 |
| AGC | 自动增益控制 | 中频级，自动调整 |
| ALC | 自动电平控制 | 发射功率 |
| ANT | 自动天线调谐 | 天线SWR |

**区别记忆**：ATT物理衰减→AGC自动调节`,"../tips/A-424.md":`> **AGC = 自动增益控制**，检测中频→反馈→防止过载，收信专用

| 缩语 | 全称 | 功能位置 | 控制目标 |
|-----|------|---------|---------|
| **AGC** | Auto Gain Control | 中频级 | 接收增益 |
| ATT | Attenuator | 前端 | 输入衰减 |
| ALC | Auto Level Control | 发射链 | 射频功率 |

**核心**：AGC是**反馈控制**，ATT是**被动衰减**`,"../tips/A-425.md":`> **强带外信号阻塞前级→非线性失真互调**，ATT在前端截断，AGC无法救

| 对比项 | AGC | ATT |
|--------|-----|-----|
| 工作原理 | 反馈控制增益 | 物理衰减信号 |
| 防护对象 | 中频过载 | **前级非线性** |
| 带外信号 | 无法有效阻止 | **直接截断** |
| 互调产生 | 防不了 | **能防** |

**关键**：带**外**强信号→前级非线性失真互调→需要物理ATT`,"../tips/A-426.md":`> **A✓B✓**：过载=前级饱和可损坏，ATT可缓解；**C✗D✗**：电流/音量不是接收过载定义

| 说法 | 正确性 | 解析 |
|-----|--------|------|
| 前级饱和阻塞损坏器件 | ✓A | 接收过载的真实危害 |
| ATT可消除过载 | ✓B | 衰减器的主要作用 |
| 电源过载烧毁 | ✗C | 这是电源问题，非接收过载 |
| 调小音量缓解过载 | ✗D | 过载在前级，音量调节在后级 |

**速记**：过载=前级问题→用ATT/AGC，不是音量或电源问题`,"../tips/A-427.md":`> **微弱信号+强干扰同现→关AGC**，让信号自然竞争不被压制

| 场景 | AGC状态 | 原因 |
|-----|--------|------|
| 微弱信号+强干扰 | **OFF** | 强干扰压制有用信号 |
| 单纯微弱信号 | **ON** | 需要增益补偿 |
| 单纯强信号 | **ON** | 自动防过载 |
| 正常信号 | **ON** | 标准工作状态 |

**记忆**：混合场景→关AGC→干扰不再压制有用信号`,"../tips/A-428.md":`> **短时间常数AGC→FM/FSK/PSK**，包络恒定快速跟踪干扰变化

| 信号类型 | 包络特性 | AGC时间常数 | 原因 |
|---------|--------|-----------|------|
| **FM/FSK/PSK** | **恒定** | **短** | 快速跟踪干扰波动 |
| SSB/AM | 变化 | 长 | 保护包络信息 |
| 测向 | — | — | 需要放大器线性 |

**规律**：包络固定→用短常数（响应快）；包络变化→用长常数（反应慢）`,"../tips/A-429.md":`> **长时间常数AGC→SSB/AM**，包络动态变化需要缓慢跟踪，保护音频

| 信号类型 | 包络特性 | AGC常数 | 理由 |
|---------|--------|--------|------|
| **SSB/AM** | **动态变化** | **长** | 慢速跟踪，保留包络信息 |
| FM/FSK | 恒定 | 短 | 快速响应 |
| 衰落信号 | 快速衰弱 | — | 用短常数 |

**对比A-428**：恒定包络→短常数；动态包络→长常数`,"../tips/A-43.md":`> 注销执照向**作出许可决定的无线电管理机构**办理，通常是市级以上

机构层级关系：
\`\`\`
国家无线电管理机构(工信部)
    ↓
省、自治区、直辖市无线电管理机构
    ↓
作出许可决定的机构←【办理注销地点】
\`\`\`

**不能**：国家机构、协会、委托单位直接办理`,"../tips/A-430.md":`> PRE = **前置放大(PREamplifier)**，弱信号接收时启用

| 符号 | 用途 | 影响 |
|------|------|------|
| PRE | 接收前置放大 | 增强弱信号，部分指标可能下降 |
| VOL | 音量调节 | 输出声音大小 |

**注意**：启用PRE时接收灵敏度提高，但**噪声指数可能升高**，某些技术指标低于额定值。`,"../tips/A-431.md":`> ALC = **自动电平控制(Automatic Level Control)**，检测射频功率并反馈调整

| 符号 | 对象 | 功能 |
|------|------|------|
| ALC | 射频(RF)功率 | 维持功率在安全范围 |
| PROC | 音频(AF)电平 | 提升弱音部分 |
| VOX | 语音检测 | 控制收发转换 |

**公式概念**：ALC形成**闭环反馈** → 检测输出功率 → 自动降低增益 → 保护设备。`,"../tips/A-432.md":`> SSB发信机**ALC自动电平控制**防止过驱动，保护电路免失真/故障

**ALC功能解析**：
| 指标 | ALC作用 | 不相关 |
|-----|--------|-------|
| 调制失真 | ✓ 防止 | |
| 电路故障 | ✓ 防止 | |
| 频率稳定 | ✗ | B |
| 阻抗匹配 | ✗ | C |
| 噪声抑制 | ✗ | D |

**记忆**：**ALC=过驱防护**，监控输出电平，话筒-→驱动级-→防过载`,"../tips/A-433.md":`> SSB通话间隙背景噪声，应**降低话筒增益或语音压缩深度**，而非降功率

**背景噪声原因与处理**：
| 症状 | 成因 | 解决 |
|-----|------|------|
| 间隙嘈杂 | 话筒增益过高 | 降增益⭐ |
| 间隙嘈杂 | 压缩过度提升噪声 | 降压缩⭐ |
| 整体弱 | 功率不足 | 提功率✗ |
| 失真 | 天线阻抗 | 调阻抗✗ |

**记忆**：间隙噪声 = **话筒段问题** → 增益↓ 或 压缩↓`,"../tips/A-434.md":`> 麦克风增益过高即使开ALC仍导致 **信号失真**（前置级已过饱和）

| 环节 | 过载表现 |
|------|--------|
| 麦克风/音频前级 | 音频失真（ALC无法补救） |
| 射频末级 | ALC可限制功率但信号已坏 |

**关键**：ALC工作在**音频已压缩后**，若麦克风端就失真，ALC无能为力。正确做法：**先调麦克风增益适中，再用ALC保护**。`,"../tips/A-435.md":`> AFSK信号发送时**关闭ALC防止包络失真**，ALC会破坏频移特征导致误码率上升

**ALC对AFSK的危害**：

| 对象 | ALC影响 | 后果 |
|-----|--------|------|
| AFSK | 包络动态削平 | 频移特征破坏 |
| AFSK | 失真畸变 | 误码率↑ |
| 语音SSB | ALC正常工作 | 改善动态 |

**记忆技巧**：**AFSK=频移编码**，依赖包络特征 → ALC削平 → **关闭ALC**`,"../tips/A-436.md":`> 语音压缩**压低强信号、提升弱信号**，改善弱语音信噪比，增强通话清晰度

**语音压缩原理**：
| 输入信号 | 处理 | 效果 |
|--------|------|------|
| 强信号 | 压低幅度 | 防过载 |
| 弱信号 | 提升幅度 | 信噪比↑ |
| 综合 | 动态范围缩小 | 均衡发送 |

**记忆**：**强→弱、弱→强** = 均衡化处理，远端听到声音更稳定/清楚`,"../tips/A-437.md":`> PROC = **语音压缩(PROCessing)**，提升低幅度音频包络

| 符号 | 处理层级 | 作用 |
|------|---------|------|
| PROC | 音频(AF) | 压缩动态范围，强化弱音 |
| ALC | 射频(RF) | 限制功率输出 |

**原理**：PROC是**音频动态范围压缩器** → 检测音频电平 → 放大低幅度部分 → SSB通话更清晰有力。与ALC**相辅相成但作用点不同**。`,"../tips/A-438.md":`> **话音压缩过度→音频非线性失真→互调成分→对方收信辨识度差**

| 压缩调整 | 结果 | 对他人影响 |
|---------|------|----------|
| 过度压缩 | 非线性失真 | **互调污染频谱** |
| 正常压缩 | 清晰话音 | 可辨识 |
| 无压缩 | 动态大 | 易过调 |

**链条**：压缩不当→话音失真→互调产生→频谱污染→对方难以识别

**区别**：
- 失真≠交流声（失真是非线性，交流声是50Hz混入）
- 失真≠话筒过载（压缩器后端失真，非话筒承受力问题）`,"../tips/A-439.md":`> AFSK发送时**关闭语音压缩**，压缩会畸变包络破坏频移基带特征，误码率上升

**语音压缩对AFSK危害**：
| 参数 | 影响 | 结果 |
|-----|------|------|
| 包络形状 | 被压缩改变 | 基带畸变 |
| 频移特征 | 频率特性不变 | 但包络破坏整体 |
| 解码准确性 | 基带模糊 | 误码率↑⭐ |

**对比A-435**：AFSK两大禁区 = **关ALC** + **关压缩**，都在包络层面

**记忆**：AFSK = **频移特征编码** → 任何包络处理 = **致命**`,"../tips/A-44.md":`> 终止使用：及时注销 + 交回执照 + **60个工作日内**拆除设备妥善处理

| 步骤 | 时间要求 | 内容 |
|-----|--------|-----|
| 1.注销 | **及时** | 向许可机构申请 |
| 2.交回 | 随注销 | 交回执照 |
| 3.拆除 | **60个工作日** | 拆天线、附属设备 |

**A-41对比**：注销是及时+60天，续期是30天前申请`,"../tips/A-440.md":`> **测功率和SWR必须先避频**：选择无人使用的空闲频率，远离热点频率，避免干扰他人通信

| 操作项 | 正确做法 | 原因 |
|------|--------|------|
| **频率选择** | 空闲频率，偏离热点 | 避免干扰他人 |
| 发射方向 | 无特殊要求 | 测功率/SWR与方向无关 |
| 语音压缩 | 无特殊要求 | 测功率时不需打开 |
| 话筒距离 | 无严格要求 | 测功率与话筒无关 |

**关键理解**：发射测试是**有源操作**，必须先确保不干扰他人→选择空闲频率是首要责任`,"../tips/A-441.md":`> SSB测试SWR用 **CW长键/AM载波** 产生连续信号，**不用吹口哨**

| 方式 | 信号质量 | 推荐 |
|------|---------|------|
| CW按键 | 纯载波，最干净 | ✓ **首选** |
| AM/FM按PTT | 连续载波，可行 | ✓ 可用 |
| 吹口哨/长音 | SSB调制，波动大 | ✗ 不宜 |

**文明做法**：切换至**CW或AM模式** → 产生平稳载波 → 测完立即**切回SSB**。体现**专业操作规范**。`,"../tips/A-442.md":`> AT/TUNE = **自动天线调谐(Antenna Tuning)**，检测SWR并补偿阻抗

| 符号 | 功能 | 工作原理 |
|------|------|--------|
| AT/TUNE | 自动天线调谐 | 检测SWR→调节L/C→降低SWR |
| ALC | 射频功率控制 | 检测功率→反馈增益 |
| PRE | 接收前置放大 | 检测信号→启用放大 |

**关键**：自动调谐器**动态补偿天线阻抗偏离**，使系统维持**最低驻波比**（通常目标SWR<1.5）。`,"../tips/A-443.md":`> 接收机双增益分开控制：信号弱→**射频增益最大+音频调节**；信号强→**音频增益最大+射频调节**

**增益调整策略**：
| 信号强度 | 第一步 | 第二步 | 原理 |
|--------|--------|--------|------|
| 特弱 | RF最大 | 音频低→高 | RF提取微弱信号 |
| 特强 | 音频最大 | RF低→高 | 音频防饱和 |

**记忆技巧**：**弱信号RF优先，强信号音频优先** = 倒序原则

关键：避免射频输入端饱和或音频输出端失真`,"../tips/A-444.md":`> HF vs VHF/UHF：**电离层反射**是HF通信的本质区别，实现远距离传播

| 频段 | 传播方式 | 距离 | 稳定性 | 天线 |
|------|--------|------|--------|------|
| HF | 电离层反射 | 远距离 | 易衰落 | 体积大 |
| VHF/UHF | 直线视距 | 近距离 | 稳定 | 体积小 |

**助记**：HF靠**"弹跳"**（电离层反射），VHF/UHF是**"直线"**通行。题目关键词"最大不同"指传播机制本质，A选项准确击中。B错（HF反而衰落大），C错（HF天线反而大），D错（HF不适合宽带）。`,"../tips/A-445.md":`> **铁氧体磁环**在音频线外套用，通过**阻抗和吸收**衰减射频电流感生

| 措施 | 原理 | 效果 | 适用场景 |
|------|------|------|---------|
| 铁氧体磁环 | 吸收RF电流 | ★★★ | 音频线防护 |
| 低通滤波 | 隔离高频 | ★★ | 音频输入端 |
| 放大器 | 信号强化 | ★ | 补偿衰减 |
| 带通滤波 | 选频 | ★ | 特定频率 |

**关键**：射频电流感生→需要**物理屏蔽+高频吸收** → **铁氧体**最直接有效。其他选项为被动补偿或错误原理。铁氧体的**高导磁率+高电阻率**特性使其成为RF干扰抑制首选。`,"../tips/A-446.md":`> 发射天线核心功能：**射频信号 → 无线电波**的转换器

| 功能 | 说法 | 正误 |
|------|------|------|
| 转换 | 信号→电波 | ✓ |
| 放大功率 | 增益放大输出 | ✗ |
| 频率转换 | 射频→音频/红外 | ✗ |

**关键**：天线是**能量转换**装置，不是**功率放大**装置。增益只是辐射方向集中效果，非功率增加。`,"../tips/A-447.md":`> 接收天线核心功能：**无线电波 → 射频信号**的转换器

| 过程 | 描述 | 正误 |
|------|------|------|
| 转换 | 电波→射频信号 | ✓ |
| 放大 | 增益放大电波 | ✗ |
| 频率 | 电波→音频/红外 | ✗ |

**记忆**：收发天线互补——A-446是发射**信号→波**；A-447是接收**波→信号**。都是**能量形式转换**，非功率放大。`,"../tips/A-448.md":`> 天线增益定义对比：**相对辐射功率密度**vs**输入功率比**

| 选项 | 描述 | 正误 | 理由 |
|------|------|------|------|
| A | 相对基准天线功率密度 | ✓ | 标准增益定义 |
| B | 信号增强程度 | ✓ | 同义表述 |
| C | 辐射功率/输入功率 | ✗ | 是效率非增益 |
| D | 发热功率/输入功率 | ✗ | 是损耗系数 |

**区分**：增益=**相对性能对比**；效率=**功率转换比**（通常<100%）；都用百分比或dB表示。`,"../tips/A-449.md":`> dBi增益：以**理想点源天线**（各向同性）为基准的dB值

| 基准天线 | 单位 | 特点 |
|---------|------|------|
| 理想点源 | dBi | 全向均匀辐射 |
| 半波偶极 | dBd | 实用参考 |
| 地网天线 | dBd* | 水平全向 |

**换算**：dBi = dBd + 2.15（因半波偶极相对理想源增益2.15dBi）`,"../tips/A-45.md":`> 业余中继台定义：**接收+放大转发**扩大通联。错误项含"衰减""接收信标"

| 台类型 | 功能 | 是否正确 |
|-------|-----|--------|
| 中继台 | 接收+**放大**转发→扩大 | ✓A正确 |
| 信标台 | **发射**信标信号 | ✓ |
| 衰减转发 | 接收+衰减→缩小 | ✗C错误 |
| 接收信标 | 单发接收信号 | ✗D错误 |

**B项**定义是信标台功能`,"../tips/A-450.md":`> 理想点源天线：**理论假想**的各向同性辐射器，作为**通用基准**比较实际天线性能

| 特性 | 说明 |
|------|------|
| 物理形态 | 理论点状 |
| 辐射特点 | 球面波/全向均匀 |
| 实际存在 | 不存在，纯理论 |
| 应用价值 | 定义dBi基准 |

**作用**：像**数学中的理想刚体**，为A-449题中dBi的定义提供客观参考。`,"../tips/A-451.md":`> dBd增益：以**半波长偶极天线**为基准的dB值（实际工程参考）

| 基准天线 | 增益值 | 单位 |
|---------|-------|------|
| 半波偶极 | 0 | dBd |
| 相对理想源 | +2.15 | dBi |

**关键**：半波偶极定义为0dBd基准，因为它是**最实用的标准参考天线**。`,"../tips/A-452.md":`> 半波偶极天线增益：规定0dBd，相对理想源为**2.15dBi**

**推导**：
- 半波偶极相对理想点源的增益 = **2.15dBi**
- 定义：0dBd（半波偶极）= 2.15dBi

**记忆口诀**：dBi - dBd = **2.15**（选A）`,"../tips/A-453.md":`> 单位标注为"dB"缺乏基准：**参考价值为零**（应明确dBi或dBd）

| 标注 | 含义 | 可用性 |
|------|------|--------|
| dB | 未指明基准 | ✗ 无效 |
| dBi | 理想源基准 | ✓ 有效 |
| dBd | 半波偶极基准 | ✓ 有效 |

**规范**：增益必须说明**基准来源**，否则无法判断实际性能。`,"../tips/A-454.md":`> 垂直接地天线称"全向"：**水平方向无指向性**（非各向同性）

| 方向 | 指向性 | 说明 |
|------|--------|------|
| 水平（H面） | 全向 | 方向图圆形 |
| 垂直（E面） | 有指向 | 方向图"8"字 |
| 空间 | 非各向同性 | 仰角有选择 |

**陷阱**：全向≠各向同性。全向只指**水平方向**，垂直方向有明显指向性。`,"../tips/A-455.md":`> 垂直接地天线(GP)振子长度选 **1/4波长**，实现低仰角水平辐射

| 参数 | 数值 | 特点 |
|------|------|------|
| 振子长度 | λ/4 | 垂直接地天线标准配置 |
| 接地平面 | "镜像地平面" | 模拟地面反射 |
| 主辐射瓣 | 大体零仰角 | 水平远距通信 |

**公式**：$L = \\frac{c}{4f} = \\frac{300}{4f(MHz)}$ 米  
**记忆**：λ/4垂直+接地平面 = **经典GP天线**。`,"../tips/A-456.md":`> 1/4波长垂直接地天线辐射最大方向的特性

| 特性 | 描述 | 正误 |
|------|------|------|
| 水平全向 | H面各向相同 | ✓ A |
| 垂直指向 | E面有指向，仰角≈0° | ✓ B |
| E面方向图 | "8"字形 | ✗ 是圆形 |
| H面方向图 | "8"字形 | ✗ 是圆形 |

**记忆**：水平**圆形**（全向），垂直有指向；最大辐射在水平面附近。`,"../tips/A-457.md":`> 手持电台"橡胶天线"特性：**短天线、增益低、垂直极化为主**

| 特点 | 说明 | 正误 |
|------|------|------|
| 极化 | 持握方式下垂直分量强 | ✓ A |
| 增益 | 低于全尺寸天线 | ✓ B |
| 螺旋加感 | 导致旋转极化 | ✓ C |
| 开裂报废 | 护套开裂天线即报废 | ✗ 护套仅保护 |

**陷阱**：D项错误——开裂只影响防水，天线仍可用。`,"../tips/A-458.md":`> 车内"橡胶天线"受 **车体金属屏蔽** 影响，信号衰减明显

| 环境 | 屏蔽作用 | 后果 |
|------|---------|------|
| 车内（金属车体） | 强屏蔽 | 信号衰减，通话困难 |
| 车顶/天线座 | 屏蔽弱 | 信号强度较好 |

**物理原理**：金属车体形成**法拉第笼**，阻挡电磁波进出。柔性天线本身效率已低，再被屏蔽效果更差。  
**改善**：车顶安装硬天线座，提升30-50%信号。`,"../tips/A-459.md":`> 天线与电力线安全距离：**风雨坠落安全距离**为基准（35kV及以下≥1m）

| 电压等级 | 安全距离 | 计算方法 |
|---------|--------|--------|
| 35kV及以下 | ≥1m | 风雨坠落范围 |
| 35kV以上 | 更大距离 | 按规范增加 |

**关键**：防止意外**掉落短路触碰**，而非防止反射干扰或打火间距。选A是**物理安全**第一原则。`,"../tips/A-46.md":`> 业余信标台定义：**发射信标信号**验证电波传播。错误混淆中继/衰减功能

| 台类型 | 功能特征 | 判断 |
|-------|--------|-----|
| 信标台✓ | **发射**信标+单发 | A正确 |
| 中继台✗ | 接收+放大转发 | C混淆 |
| 衰减转发✗ | 缩小通联范围 | D混淆 |
| 接收信标✗ | 被动接收 | B混淆 |

**对比A-45**：中继强调放大，信标强调发射`,"../tips/A-460.md":`> GP天线低频段效果差因 **接地镜像不足**；需大面积导电平面补偿

| 问题 | 原因 | 改善方案 |
|------|------|--------|
| 谐振频率偏离 | 镜像面积小 | 扩大接地导体面积 |
| 阻抗不匹配 | 镜像不完整 | 连接更大金属平面 |
| 辐射效率低 | 伪镜像效应 | 加接地网/金属网 |

**物理基础**：λ/4振子需要**完整镜像**才能等效为λ/2偶极子。波长越长(频率越低)，所需镜像面积越大——**"长波用大地盘"**。在车顶加接地环/网可大幅改善低频性能。`,"../tips/A-461.md":`> 天线加载核心：串联电感延长电气长度，补偿物理长度不足

**加载定义**：为缩短的振子串入电感线圈，补偿感抗，使天线在所需频率谐振

**正确选项A**：串联电感 → 延长电气长度 ✓
- B项：弹簧减震器 = 机械强度，非加载
- C项：螺旋延长器 = 物理延长，非加载
- D项：张力器 = 拉纤张力调整，非加载

**关键词**：**感抗补偿** | **电气长度** | 不改变物理长度`,"../tips/A-462.md":`> 加感位置影响效率：顶部最优（电流最大处），中部次之，底部最差

| 位置 | 电流强度 | 发射效率 | 说明 |
|------|--------|--------|------|
| 顶部(C) | 最大 | **最高** | 电流腹点，能量损耗少 |
| 中部(B) | 中等 | 中等 | 电流节点附近 |
| 底部(A) | 最小 | **最低** | 接地端，电流节点处 |

**物理原理**：**电流最大处加感** → 感应效果最强 → 效率最高
**排序**：C > B > A`,"../tips/A-463.md":`> dBi与dBd换算：dBi = dBd + 2.15，先转换再比较增益差

**数据转换**：
- 甲：6.15dBi（相对全向辐射体）
- 乙：1dBd = 1 + 2.15 = **3.15dBi**

**增益差**：6.15 - 3.15 = **3dB** = **2倍功率**

**公式**：功率比 = 10^(ΔdB/10) = 10^(3/10) ≈ 2倍

**答案A**：甲天线信号为乙的**两倍**`,"../tips/A-464.md":`> 0dBd = 2.15dBi，是半波偶极参考基准；2dBi略低于0dBd

**单位转换**：
- 甲：0dBd = **2.15dBi**（半波偶极标准）
- 乙：2dBi（低于半波偶极）

**增益差**：2.15 - 2 = **0.15dB**（乙略差）

**物理含义**：0dBd ≡ 半波长偶极天线参考 = 2.15dBi绝对增益

**陷阱**：0dB≠无增益，而是**参考值**`,"../tips/A-465.md":`> 甲4.5dBd vs 乙5.85dBi：需转换单位后做差

**单位转换**：
- 甲：4.5dBd = 4.5 + 2.15 = **6.65dBi**
- 乙：5.85dBi

**增益差**：6.65 - 5.85 = **0.8dB**（甲更强）

**功率关系**：10^(0.8/10) ≈ 1.2倍 → 甲信号强

**答案A**`,"../tips/A-466.md":`> 甲2.9dBd vs 乙5.85dBi：转换后比较，乙更优

**单位转换**：
- 甲：2.9dBd = 2.9 + 2.15 = **5.05dBi**
- 乙：5.85dBi

**增益差**：5.85 - 5.05 = **0.8dB**（乙更强）

**功率关系**：10^(0.8/10) ≈ 1.2倍 → 乙信号强

**答案A**`,"../tips/A-467.md":`> SWR驻波比：负载与馈线阻抗匹配程度，完美匹配1:1无驻波，不匹配则反射回源

| 匹配状态 | 驻波情况 | SWR值 | 能量流向 |
|--------|--------|------|--------|
| 完美匹配 | 无驻波 | 1:1 | 全向负载 |
| 不匹配 | 有驻波 | >1:1 | 部分反射回源 |

**关键理解**：
- SWR = 匹配程度指标，反映**阻抗失配**的严重程度
- 完美匹配(Z负载=Z特性)→驻波比1:1→无反射
- 不匹配→反射波与入射波叠加→形成驻波
- **调整信源阻抗无法消除驻波**（驻波由负载端决定），D错误`,"../tips/A-468.md":`> SWR 4:1表示天线系统匹配度差，从收发机看阻抗严重失配，非辐射效率问题

**关键点**：
- SWR**仅反映匹配情况**，不直接代表效率或增益
- 4:1意味着**最大与最小电压/电流之比为4倍**
- 反映的是**阻抗失配程度**，非功率转换效率

**选项分析**：
- A✓：SWR直接体现匹配程度
- B✗：SWR不能推算具体阻抗值
- C✗：辐射效率与SWR无直接关系
- D✗：增益是天线本身特性，与SWR无关`,"../tips/A-469.md":`> SWR 3:1：馈线中电压/电流峰值比为3:1，驻波**增加导体损耗**（电流↑）

| 参数 | SWR 3:1 | 说明 |
|-----|--------|------|
| 最大/最小电压比 | 3:1 | **正确** |
| 最大/最小电流比 | 3:1 | **正确** |
| 导体损耗(I²R) | 增加 | 电流↑→损耗↑ |
| 介质损耗 | 无关 | 与电流无直接关系 |

**驻波危害机制**：
- 驻波→电流幅度**不均匀分布**
- 最大电流处：I增大→**导体损耗增加(P=I²R)**
- **电流越大损耗越大**，C、D都错（驻波应**增加**而非降低损耗）`,"../tips/A-47.md":`> 中继台原则：**平等服务**+**资源共享集约**，禁止垄断和收费

| 要求 | 是否正确 |
|-----|--------|
| A.平等服务 | ✓ |
| B.资源共享、集约 | ✓ |
| C.团队优先使用 | ✗禁止垄断 |
| D.付费使用 | ✗禁止收费 |

**红线**：中继台公益性，不能排他性、不能商业化`,"../tips/A-470.md":`> SWR过高 → 自动降功率 → 目的是**保护功率半导体器件**（不是保险丝/传输线/无线电波）

记忆：发射机「自我保护」，牺牲功率换器件安全。半导体怕高反射电压击穿。
`,"../tips/A-471.md":`> SWR趋近1:1 → **降低电缆损耗**，射频能量更有效传输

| SWR值 | 状态 | 效果 |
|---|---|---|
| 1:1 | 完全匹配 | 损耗最低 |
| >1 | 有反射 | 损耗增加 |

记忆：1:1是「黄金比例」，能量全往天线走，无回头路。
`,"../tips/A-472.md":`> SWR显示**不稳定** → 首查**接触不良**（发信机/馈线/天线任一处）

记忆：SWR抖动 = 机械故障信号。调制方式/温度不会造成SWR随机跳变，**接触不良**才是元凶。`,"../tips/A-473.md":`> SSB时SWR不稳定属**正常现象** → SSB话音**幅度随时变化**，本质影响测量稳定性

记忆：SSB = 单边带，话音幅度忽大忽小 → 测量功率随之波动 → SWR当然抖。**改用CW**（等幅波）测量更准确。
`,"../tips/A-474.md":`> 电网无驻波 → 因为**50Hz频率极低**，导线长度与波长（6000km）相比微不足道

| 参数 | 电网50Hz | 业余无线电 |
|---|---|---|
| 波长 | ~6000km | 几cm~几m |
| 导线/波长比 | 极小 | 接近1 |

记忆：驻波只在「线长可比波长」时显现，电网导线相当于「无限短」。
`,"../tips/A-475.md":`> 业余无线电同轴电缆最适特性阻抗 → **50欧姆**

| 阻抗 | 用途 |
|---|---|
| **50Ω** | 业余/发射机（最佳功率传输与损耗折中）|
| 75Ω | 有线电视/视频 |
| 300Ω | 折叠偶极子馈电 |

记忆：**「五十」是业余无线电的标准答案**，选其他都错。
`,"../tips/A-476.md":`> 选同轴电缆原因 → **使用方便**，与周围物体**互耦低**（屏蔽性好）

记忆：同轴电缆外层屏蔽 = 信号在「管子」里走，不怕旁边有金属干扰。注意：不是因为损耗最低或最便宜。
`,"../tips/A-477.md":`> 选购同轴电缆关注：**特性阻抗** + **每百米传输损耗**（指定频率下）

| 参数 | 重要性 |
|---|---|
| **特性阻抗** | 必须与发信机/天线匹配（50Ω）|
| **每百米损耗** | 决定能量传输效率 |
| 芯线截面积/耐压 | 次要（非RF关键参数）|

记忆：两个**电气**指标：「阻」和「损」，其余是机械参数。
`,"../tips/A-478.md":`> 馈线损耗的危害：**发信功率降低** + **收信信噪比下降**

记忆：馈线损耗是双向的——发送时能量变热，接收时信号也被吃掉（噪声相对变大）。**收发两头都受损**。
`,"../tips/A-479.md":`> 同轴电缆受潮 → **介质损耗变大** + **屏蔽层/芯线氧化锈蚀甚至断路**

记忆：水是绝缘体的敌人——进水后介质「漏电」增加；金属遇水氧化「断路」。速度因子和SWR「<1」是无意义选项（SWR不能<1）。`,"../tips/A-48.md":`> 中继台设置四要素：**资源共享+平等服务+公开信息+跨域协调**，需向社会公布

设置要求清单：
- ✓ 台址布局资源共享集约(A)
- ✓ 平等提供服务(B)
- ✓ 公布地点、频率、技术参数(C)
- ✓ 超出行政区协调(D)

**应用**：所有ABCD都正确，属于多选全对题`,"../tips/A-480.md":`> 室外电缆要耐**紫外线** → 防护套被破坏后**电缆受潮损坏**

记忆：紫外线的危害是**间接的**——先破坏护套，再导致进水。不是直接影响信号。「太阳晒破皮，进水坏内胆」。
`,"../tips/A-481.md":`> 空气介质同轴电缆劣势 → 需**特别防潮措施**（充干燥气体/密封）

| 类型 | 优势 | 劣势 |
|---|---|---|
| 有机介质 | 密封好，防潮 | 损耗稍高 |
| **空气介质** | 损耗极低 | **需防潮措施** |

记忆：空气介质损耗低，但「空气」也意味着水汽容易进。
`,"../tips/A-482.md":`> 频率升高 → 同轴电缆**传输损耗增加**

记忆：频率越高，**趋肤效应**越强（电流集中在导体表面）→ 有效电阻变大 → 损耗增加。特性阻抗由结构决定，不随频率变。
`,"../tips/A-483.md":`> VHF/UHF频段损耗最低 → **空气介质同轴硬电缆**

| 类型 | 高频损耗 |
|---|---|
| **空气介质硬电缆** | 最低 |
| 50Ω软电缆 | 中等 |
| 75Ω软电缆 | 中等 |
| 双绞线 | 高 |

记忆：「硬管+空气」= 损耗王牌组合，基站天线馈线常用。
`,"../tips/A-484.md":`> 400MHz及以上优先选用 → **N型连接器**

记忆：**N型**（Neill型）= 大型专业射频连接器，专为VHF/UHF/微波设计，防水性好、驻波低。M型/DB-23是普通连接器，RS-213是干扰项。**「N」= 高频神器**。
`,"../tips/A-485.md":`> **M型同轴连接器** = HF/VHF 常用连接器，螺纹锁紧，成本适中

| 连接器类型 | 锁紧方式 | 典型应用 |
|-----------|---------|--------|
| **M型**（PL-259） | 螺纹式 | HF、VHF |
| BNC型 | 卡式（快拔快插） | 仪器、VHF/UHF |
| N型 | 螺纹式 | UHF、微波 |

**排除法**：B说防水防盗是无关描述；C卡式快插是BNC特征；D微波用N型，M型成本不高。**M型 = 业余无线电HF/VHF标配**。
`,"../tips/A-486.md":`> 垂直天线：E场竖直→垂直极化；H面全向，E面非全向

| 特性 | 垂直天线 | 正确否 |
|------|--------|-------|
| 极化方向 | 垂直极化（E场⊥地面） | **✓ A对** |
| H面方向图 | 全向 | **✓ B对** |
| 磁场方向 | 水平（与E垂直） | **✗ C错** |
| E面方向图 | 非全向（有方向性） | **✗ D错** |

**记忆**：**垂直天线 = 竖起来的偶极** → E面有指向性，H面全向`,"../tips/A-487.md":`> 水平偶极天线：E场平行地面；E面（水平）显8字形，H面（竖直）圆形

| 方向 | 极化方向 | 方向图形状 | 极化波类型 |
|------|--------|---------|---------|
| E面（水平） | 平行地面 | **8字形** | 线性 |
| H面（竖直） | 垂直地面 | 圆形 | 线性 |

**极化判断**：E场∥地面 = **水平极化** ✓ A对
**方向图**：E面显8字 ✓ B对；H面圆形 ✗ D错

**陷阱**：E面和H面方向图形状**完全不同**`,"../tips/A-488.md":`> 极化不匹配：水平↔垂直 = 极化角差90° = 信号损失严重 ✗ 变差

**极化匹配度**：
| 情况 | 收发极化 | 匹配度 | 结果 |
|------|--------|-------|------|
| 改前 | 水平↔水平 | **100%** | 最强 |
| 改后 | 水平↔垂直 | **0%** | 极差 |

**物理**：**垂直与水平极化正交** → 接收功率损失 ≥ 20dB

**答案A**：通信效果**变差**（甚至无法通联）`,"../tips/A-489.md":`> 极化匹配改善：水平+垂直 → 双垂直 = 极化统一 ✓ 变好

**极化匹配过程**：
| 阶段 | 甲天线 | 乙天线 | 匹配度 | 信号 |
|------|-------|-------|-------|------|
| 改前 | 水平 | 垂直 | **0%** | 极弱 |
| 改后 | 垂直 | 垂直 | **100%** | 最强 |

**原因**：从完全正交 → 完全匹配

**答案A**：通信效果**变好**`,"../tips/A-49.md":`> 中继台技术参数须符合：**国家规定+地方(设台地)规定**，双重标准

权力关系：
\`\`\`
国家无线电管理机构(基础标准)
        ↓
设台地地方无线电管理机构(补充标准)
        ↓ 都要符合
中继台参数确定
\`\`\`

**排除**：B民间组织无法规性、C漏国家标准、D个人需求无法律效力`,"../tips/A-490.md":`> 极化匹配改善：水平+垂直 → 双水平 = 极化统一 ✓ 变好

**极化匹配过程**：
| 阶段 | 甲天线 | 乙天线 | 匹配度 | 信号 |
|------|-------|-------|-------|------|
| 改前 | 水平 | 垂直 | **0%** | 极弱 |
| 改后 | 水平 | 水平 | **100%** | 最强 |

**效果同A-489**：从正交 → 匹配

**答案A**：通信效果**变好**`,"../tips/A-491.md":`> 圆极化相位反向：左旋↔右旋正交损失；改为同向左旋 = 匹配 ✓ 变好

**圆极化特性**：
| 情况 | 发射 | 接收 | 旋向关系 | 匹配度 |
|------|------|------|--------|-------|
| 改前 | 左旋 | 右旋 | **相反** | **0%** |
| 改后 | 左旋 | 左旋 | **相同** | **100%** |

**物理**：左右旋圆极化 = **正交**（无法接收）→ 改为同向旋转后完全匹配

**答案A**：通信效果**变好**（从无法通联 → 最佳接收）`,"../tips/A-492.md":`> 圆极化匹配度决定效果：同向旋转最佳，反向旋转损耗3dB

| 极化配置 | 耦合损耗 | 通信效果 |
|--------|--------|--------|
| 左旋↔右旋 | 3dB损耗 | 差 |
| 右旋↔右旋 | 0dB匹配 | 好 |

**关键：** 圆极化天线**相同旋向**时实现最大耦合，改为**同向右旋**消除3dB极化损耗 → 通信效果**变好**`,"../tips/A-493.md":`> 圆极化vs线性极化：垂直偶极与水平偶极正交损耗大，但与圆极化都有耦合

| 极化类型 | 相对关系 | 耦合效率 |
|--------|--------|--------|
| 左旋圆↔水平线 | 部分耦合 | ~50% |
| 左旋圆↔垂直线 | 部分耦合 | ~50% |

**核心：** 圆极化与任何**直线极化都是50%耦合**（正交线性分量相等），改为垂直偶极后耦合度不变 → **效果不变**`,"../tips/A-494.md":`> 圆极化与线性极化的耦合度恒定：改变圆极化旋向或线性方向都是50%损耗

| 初始配置 | 改变后配置 | 耦合损耗 |
|--------|---------|--------|
| 左旋↔水平线 | 右旋↔水平线 | 皆50% |

**关键点：** 圆极化（任意旋向）与线性极化（任意方向）的耦合度恒为**50%不变**，改为右旋仍保持此关系 → **效果不变**`,"../tips/A-495.md":`> 圆极化相反旋向最差：左旋→右旋导致极化完全失配，耦合从50%→0

| 配置变化 | 甲天线 | 乙天线变化 | 耦合度 |
|--------|------|---------|------|
| 改变前 | 左旋 | 水平线(50%) | 中等 |
| 改变后 | 左旋 | 右旋(反向) | 最差 |

**陷阱：** 乙改用**右旋**圆极化，与甲的左旋成**完全反向**配置 → 极化**隔离最大** → 效果**变差**`,"../tips/A-496.md":`> 同向圆极化配置：左旋→左旋实现完美匹配，消除极化损耗

| 配置变化 | 甲天线 | 乙天线变化 | 耦合度 |
|--------|------|---------|------|
| 改变前 | 左旋 | 水平线 | 50% |
| 改变后 | 左旋 | 左旋 | 100% |

**要点：** 乙改为**同向左旋**圆极化，实现与甲**完全极化匹配** → 消除50%极化损耗 → 效果**变好**`,"../tips/A-497.md":`> 圆极化配置最差转向线性：反向旋转+转为统一线性，综合改善

| 初始状态 | 改变后 | 极化关系 | 效果 |
|--------|------|--------|------|
| 左旋↔右旋 | 水平↔水平 | 反向→完全匹配 | 变好 |
| 损耗3dB+互不匹配 | 0dB匹配度 | 同向线性 | 最优 |

**核心：** 从**极化完全对立**（左旋vs右旋）改为**方向一致的线性极化**（都水平），极化损耗从3dB→0 → **效果变好**`,"../tips/A-498.md":`> 近距离地面通联：极化**一致**才能最大接收，天线面朝对方（垂直于连线平面），同向对齐

| 要素 | 正确做法 | 错误做法 |
|------|----------|----------|
| 天线朝向 | 垂直于两站连线平面 | 平行于连线 |
| 极化关系 | **保持一致**（同向） | 正交（90°，最差） |

**助记**：面对面握手，同方向才能握上——极化对齐，能量最大转移。
`,"../tips/A-499.md":`> 卫星下行，**从地面向上看**与传播方向相反——顺时针变左旋，答案是**左旋**椭圆/圆极化

| 观察方向 | 看到顺时针 | 对应极化 |
|----------|------------|----------|
| 沿传播方向（定义方向） | 顺时针 | **右旋（RHCP）** |
| 逆传播方向（地面向上看） | 顺时针 | **左旋（LHCP）** |

**助记**：定义是从发射端往前看；卫星信号朝下，地面仰望方向相反，所以**顺时针→左旋**，翻转一次。
`,"../tips/A-5.md":`> **最新《业余无线电台管理办法》自2024年3月1日起施行**

**最新文件时间点**

| 文件 | 施行日期 | 记忆提示 |
|------|---------|---------|
| 业余无线电台管理办法 | **2024年3月1日** | 最新发布版本 |
| 旧规则 | 2016年前 | 已更新 |

**时间速记**："**2024春季**（3月）更新"——记住**最近的年份和月份**是通过日期题的关键

**其他选项排除**：
- B、C、D项均为**错误时间**，题目问"最新发布"必选最近的施行日期`,"../tips/A-50.md":`> A/B类验证机构：**国家+省级**无线电管理机构(双层级)

| 操作类别 | 主管机构 | 层级 |
|--------|--------|-----|
| A类 | 国家+省级 | **两级** |
| B类 | 国家+省级 | **两级** |
| C类 | 国家 | **一级** |

**关键**：A/B是分散权限(国家和省都能组织)，C是集中权限`,"../tips/A-500.md":`> 视距通联圆极化：**同旋向**接收效率最高；发射左旋，接收也选**左旋**，天线面朝发射点

| 发射极化 | 最佳接收极化 |
|----------|-------------- |
| 左旋圆极化（LHCP） | **左旋圆极化** |
| 右旋圆极化（RHCP） | 右旋圆极化 |

**助记**：圆极化配对原则——**同旋同向**，旋向不同时信号完全正交，能量损失极大。
`,"../tips/A-501.md":`> 卫星过顶**前**正面朝你→右旋；过顶**后**背面朝你→极化翻转为左旋

| 卫星位置 | 观察视角 | 最佳极化 |
|---------|---------|--------|
| 过顶前（北方来） | 正面 | **右旋** RHCP |
| 过顶后（南方去） | 背面 | **左旋** LHCP |

**速记**：过顶 = 翻面 = 换旋向
`,"../tips/A-502.md":`> 卫星自转→线极化不断旋转→用**圆极化**天线，永不因极化正交而中断

| 地面天线 | 旋转线极化信号 | 结果 |
|---------|-------------|------|
| 线极化 | 周期性正交 | 中断 |
| **圆极化** | 始终有分量 | 稳定 |

**速记**：**圆不断，线会断**
`,"../tips/A-503.md":`> 半波偶极天线≈**2.15 dBi**；8.15 dBi 八木增益差 = 8.15−2.15 = **6 dB = 1个S档**；S4→**S5**

| 步骤 | 计算 |
|------|------|
| 偶极基准 | 2.15 dBi |
| 八木增益 | 8.15 dBi |
| 差值 | **6 dB** |
| S档换算 | 每档6dB，**+1档** |
| 结果 | S4 → **S5** |

**助记**：8.15 dBi = **6 dBd**，刚好1个S档。记住偶极基准2.15 dBi，dBi减2.15就是dBd。
`,"../tips/A-504.md":`> 12 dBd 增益，每6dB一个S档，共**+2档**；S4→**S6**

| 参数 | 值 |
|------|----|
| 八木增益 | **12 dBd**（直接用） |
| S档增量 | 12 ÷ 6 = **2档** |
| 结果 | S4 + 2 = **S6** |

**助记**：A-503用dBi要先减2.15；本题**直接给dBd**，省去转换，12÷6=2档，S4+2=**S6**。对比A-503(+1档)，本题增益翻倍所以+2档。`,"../tips/A-505.md":`> **双方**都换8.15 dBi八木，收发两端各+6dB，共+12dB = **2个S档**；S4→**S6**

| 端 | 增益改善 |
|----|----------|
| 发射端 | 8.15−2.15 = +6 dB |
| 接收端 | 8.15−2.15 = +6 dB |
| **合计** | **+12 dB = +2 S档** |

**助记**：双端改天线，增益**叠加**！A-503单端+1档，本题双端+2档，结果同是S6但原理不同。`,"../tips/A-506.md":`> 平原移动时VHF/UHF信号强弱周期起伏 → **多径效应**（直射波与反射波相消/相长干涉）

排除干扰选项：B是频率漂移（多普勒），C电导率差异极微，D说的是发信端天线失谐。

**速记**：**走动→波程差变→干涉条纹移动→强弱周期起伏**

典型：VHF波长约2 m，移动约1 m可从相长跳到相消。`,"../tips/A-507.md":`> 多径传播导致相位幅度差异，不同路径干涉相消/相长，移动几步或改变频率显著改善通信

| 现象 | 原因 | 改善方法 |
|------|------|--------|
| 信号报告差 | 多径干涉相消 | 移动位置/改变频率 |
| 信号报告好 | 多径干涉相长 | 保持不动 |

**多径干涉**是VHF/UHF的典型特征，不同反射路径的电波在天线处相位差异导致结果变化。频率改变数十kHz即可明显变化，因为相位关系改变`,"../tips/A-508.md":`> 多径传播对数据通信影响：误码率上升；FM通联影响较小；速率不呈线性关系

| 通信类型 | 多径影响 | 机制 |
|---------|--------|------|
| 数据/SSB | 误码率↑ | 码间干扰、相位偏移 |
| FM语音 | 影响微小 | FM抗干扰性强 |
| 路径增多 | 非线性 | 干涉复杂，速率不确定 |

**关键**：数据通信对相位敏感，多径导致**码间干扰**，误码率上升；FM语音抗干扰能力强`,"../tips/A-509.md":`> ATV重影两大真凶：**多径传播**（路程差→时延差）和**高VSWR**（馈线内信号来回反射）

| 原因 | 机制 | 是否正确 |
|------|------|----------|
| 多径传播 | 不同路径时延不同，叠加产生重影 | **A 正确** |
| 高VSWR馈线 | 信号在天线与发射机间多次反射，延迟副本泄出 | **B 正确** |
| 极化错误 | 只降低信号强度，不产生重影 | C 错误 |
| 中继转发 | 非题目场景 | D 错误 |

**助记**：重影 = **时间延迟**的副本——多径走远路，VSWR在馈线里打乒乓球，都会产生延迟副本。
`,"../tips/A-51.md":`> C类验证机构：**仅国家无线电管理机构**专权(工信部)

| 等级 | 管理层级 | 机构 |
|-----|--------|-----|
| A/B | 两级 | 国家+省 |
| C | **一级** | **国家专权** |

**对比A-50**：C类最高等级，考试权集中国家机构，其他机构无权组织`,"../tips/A-510.md":`> 超短波视距传播距离极限由发收天线相对高度决定，而非绝对高度或挂高波长比

| 因素 | 影响 | 说明 |
|------|------|------|
| 相对高度 | ✓ 决定 | 两天线间高度差 |
| 绝对高度 | ✗ | 地球曲率修正已考虑 |
| 挂高/波长 | ✗ | 常见误选项 |
| 天线增益 | × | 与距离极限无关 |

**速记**："**相对**高度"是关键，影响视距范围；视距公式：$d ≈ 3.57(\\sqrt{h_1}+\\sqrt{h_2})$ km`,"../tips/A-511.md":`> VHF/UHF超视距直接联络（数百km）主要因大气波导现象，使电波沿大气层折射传播

| 超视距原因 | 距离 | 机制 |
|-----------|------|------|
| **大气波导** | 数百km | 对流层逆温折射 |
| 流星余迹 | ~2000km | 需特定条件 |
| 降雨增强 | 短距离 | 不能达数百km |
| 植被减少 | 局部 | 冬季效应微弱 |

**大气波导**：高空逆温→折射率梯度变化→电波导管→沿地面传播。这是对流层超视距的主因`,"../tips/A-512.md":`> 6米/2米波段上千km超视距传播由突发E层反射产生，是电离层现象非对流层现象

| 波段 | 超视距原因 | 距离 | 特点 |
|------|----------|------|------|
| 6m/2m | **突发E层** | 1000+km | 电离层反射 |
| | 流星余迹 | 2000km | 散射特性 |
| 10m+ | D/F层 | 更远 | 常规反射 |

**速记**："**突发E层**"(Sporadic E)是上千km的关键。与A-511对比：A-511数百km→**大气波导**；A-512上千km→**E层反射**`,"../tips/A-513.md":`> 对流层大气波导由高空逆温（温度随高度增加）导致，使折射率出现梯度反转

| 原因 | 机制 | 结果 |
|------|------|------|
| **高空逆温** | 折射率梯度反转 | ✓ 电波导管 |
| 太阳黑子/耀斑 | 电离层扰动 | 非对流层 |
| 飓风上升气流 | 气压扰动 | 非根本原因 |
| 闪电等离子体 | 局部影响 | 不持续 |

**逆温**关键词：气温随高度递增而非递减。大气折射率$n ∝ \\frac{1}{T}$，逆温导致$\\frac{dn}{dh}<-157×10^{-9}$m⁻¹触发波导`,"../tips/A-514.md":`> 收到上千km外VHF信号最可能由突发E层反射，微波接力/雨反射距离达不到

| 传播方式 | 距离 | VHF可行性 |
|---------|------|---------|
| **突发E层反射** | 1000+km | ✓ 典型 |
| 微波接力QSP | 200+km | 可能但需存在 |
| 雨反射 | <100km | ✗ 过短 |
| 宇宙射线电离 | 理论 | ✗ 不存在 |

**E层突发**(Es)频率50-100MHz，传播距离1000-2000km。VHF(144/430MHz)虽衰减但仍可达`,"../tips/A-515.md":`> VHF/UHF 500km超视距传播由对流层散射产生，不同于E层反射的上千km距离

| 距离范围 | 传播方式 | 原理 |
|---------|---------|------|
| 数百km | **对流层散射** | 对流层颗粒散射 |
| 1000+km | 突发E层 | 电离层反射 |
| >2000km | F2层 | 电离层长距离 |

**速记**：A-512(上千km)→E层；**A-515(500km)→对流层散射**。散射是非相干传播，功率衰减但能超视距`,"../tips/A-516.md":`> 自制发射设备调测前应连接假负载到天线端口，防止无证发射，保护合法电台

| 调测阶段 | 连接方式 | 目的 |
|---------|---------|------|
| **调试期间** | **假负载(50Ω)** | 吸收功率，无辐射 |
| 获证后 | 真实天线 | 正常发射 |
| 严禁 | 开路/天线 | 违反规定 |

**假负载**(Dummy Load)：等效阻抗50Ω的电阻负载。VSWR=1:1是假负载特性，但题目强调"连接假负载"为首选。行波天线/驻波天线会辐射信号违规`,"../tips/A-517.md":`> 调制器作用：用调制信号控制射频载波的幅度、频率、相位参数实现编码

| 功能 | 调制器任务 | 对比 |
|------|----------|------|
| **信号编码** | 控制载波参数(A/f/φ) | ✓ 调制器 |
| 功率效率 | 控制PA工作点 | 驱动级 |
| 阻抗匹配 | 调整天馈系统 | 匹配网络 |
| 谱宽控制 | 自动带宽限制 | 滤波器/收发管理 |

**调制器核心**：AM(幅度)、FM(频率)、PM(相位)都由调制器实现。驱动/功放与其不同`,"../tips/A-518.md":`> 接收机优良接收能力由抗干扰性、整机增益、低噪声、低失真四因素共同保证

| 因素 | 作用 | 优化方向 |
|------|------|---------|
| **抗干扰能力** | 拒绝邻频/镜像干扰 | 选频性↑ |
| **整机增益** | 弱信扩大 | 增益↑ |
| **低本机噪声** | 信噪比 | 噪声系数↓ |
| **低失真** | 信号还原度 | 非线性失真↓ |

**多选全选**：A、B、C、D都是接收机指标。SNR = 信号功率/(噪声+干扰)，四者相互作用`,"../tips/A-519.md":`> 解调器作用：从已调射频信号中分离恢复原始调制信号（音频/数据），逆调制过程

| 阶段 | 处理任务 | 器件 |
|------|---------|------|
| 接收 | 射频放大 | RF前置 |
| 选频 | 带通滤波 | 混频/滤波 |
| **解调** | **分离调制信号** | **解调器** |
| 后处理 | 音频放大 | AF放大 |

**解调定义**：AM解调(包络检波)、FM解调(鉴频)、SSB解调(乘法混频)。提取原始信息是核心功能。与D项区别：D项只提取载波分量，非解调`,"../tips/A-52.md":`> 验证不收费：**不向参加者收取考试费**，公益性原则

| 收费方式 | 是否允许 |
|--------|--------|
| 收取验证考试费 | ✗B错误 |
| 按操作类别收费 | ✗C错误 |
| 按台类型收费 | ✗D错误 |
| **不收费** | ✓**A正确** |

**原则**：业余无线电法规政策规定免费验证，体现公益性和普及性`,"../tips/A-520.md":`> 解调器核心任务：**忠实还原**原始调制信号，而非放大/提升载频/补偿频偏

**解调器三大职责对比**：

| 环节 | 职责 | 是否解调器 |
|------|------|---------|
| 已调信号放大 | 提升功率 | ❌ 放大器 |
| 解调还原 | **提取原始信号** | ✅ **解调器** |
| 载频提升/频偏补偿 | 信号处理 | ❌ 其他电路 |

**助记**：解调 = **De-modulation** = 去掉调制，把原信号**剥离出来**
- 不是强化已调信号(B错)
- 不是突出载频(C错)  
- 不是修正频率(D错)
- 只管**忠实还原**（A对）`,"../tips/A-521.md":`> CTCSS亚音频静噪系统频率范围：**67-250.3Hz**，低于可闻音频下限

| 频率范围 | 用途 | 频段性质 |
|---------|------|--------|
| 67-250.3Hz | CTCSS亚音 | **超低频**（次声区边界） |
| 16Hz-20kHz | 全音频范围 | 人类可闻范围 |
| 16kHz-20kHz | 高频音 | 可闻上限 |
| 220Hz-2503Hz | 语音频带 | 常规语音范围 |

**速记**：CTCSS = **"Continuous Tone Controlled Squelch System"** → 连续**低频**音调控制。**67Hz起**记住关键数值，**250.3Hz**为上限（含小数点是考点）。这些频率**人耳难以察觉**，用于开启/控制中继台静噪（开启接收前的"钥匙"）。`,"../tips/A-522.md":`> **通带矩形系数** = 60dB带宽÷6dB带宽，描述**滤波器频率特性曲线两侧斜坡陡峭程度**

| 指标 | 含义 | 作用 |
|------|------|------|
| 矩形系数小 | 陡峭 | 邻频干扰抑制强 |
| 矩形系数大 | 平缓 | 邻频干扰抑制差 |

**助记**：系数越小（如3.8 vs 5），带通滤波器的**选择性越好**，对邻近频道干扰的抑制能力越强。形状越接近矩形，邻频干扰越被削弱。`,"../tips/A-523.md":`> A机矩形系数3.8 < B机5，系数越小选择性越好，**邻频干扰抑制能力越强**

| 接收机 | 矩形系数 | 邻频抑制 |
|--------|---------|---------|
| A | 3.8 | 更强✓ |
| B | 5.0 | 较弱 |

**对比理解**：矩形系数=衰减指标带宽÷通带宽度。系数小→滤波器边界更陡→相邻频道信号被**更有效衰减**。`,"../tips/A-524.md":`> **前置放大器核心作用**：提高微弱信号功率，**降低内部噪声相对影响**（改善噪声系数）

| 作用 | 正确性 |
|------|--------|
| 降低噪声影响 | ✓ |
| 提高音频功率 | ✗（在中频段） |
| 提高保真度 | ✗（不直接） |
| 提高动态范围 | ✗（反而受限） |

**原理**：接收链路中**噪声系数 = F = 1 + (F2-1)/G1**。前置放大增益G1越高，后级噪声对总体的影响越小。`,"../tips/A-525.md":`> **FM声音大小≠信号强弱**。原因：**鉴频器输出仅由频偏决定**，中频幅度被限幅电路切齐

| 因素 | 对FM解调音量的影响 |
|------|------------------|
| 中频幅度 | 无（被限幅） |
| 频偏大小 | 决定性✓ |
| AGC作用 | 压低音量 |

**陷阱**：调频的**抗干扰优势**正来自此——强弱信号被限幅后**平等对待**，音量由调制指数(Δf/fm)决定。`,"../tips/A-526.md":`> **NFM接收WFM信号**：可听到声音，但**高频调制信号导致非线性失真**（频偏过大超出解调范围）

| 情况 | 现象 |
|------|------|
| 调制幅度小 | 声音可用 |
| 调制幅度大/音调高 | 失真明显 |

**原因**：NFM带宽窄（12.5kHz），WFM频偏大(±75kHz)，超出NFM解调**线性范围**→过调制失真。`,"../tips/A-527.md":`> **WFM接收NFM信号**：可正常听到，**声音较小**（因NFM频偏小，解调输出弱）

| 对讲机设置 | 接收对象 | 结果 |
|-----------|---------|------|
| WFM | NFM | 声音小✓ |
| NFM | WFM | 失真大 |

**对比A-526**：反向情况下，宽带接收机接收窄带信号虽能解调，但**解调信号幅度不足**，表现为音量偏低。`,"../tips/A-528.md":`> **无信号时"沙沙声"来源**：天线QRN + 机内噪声的**随机相位**经鉴频转化，**与随机幅度无关**

| 成分 | 对沙沙声影响 |
|------|-------------|
| 噪声随机相位 | 决定性✓ |
| 噪声随机幅度 | 无关✗ |

**FM特性**：鉴频器**只响应相位/频率变化**，对幅度变化免疫(限幅已切齐)。随机相位=随机频率变化→随机音频→沙沙声。`,"../tips/A-529.md":`> **鉴频器(Discriminator/FM Demodulator)**是**唯一能解调FM信号**的电路

| 电路 | 功能 |
|------|------|
| 鉴频器 | FM解调✓ |
| 限幅器 | 消除幅度波动 |
| 乘积检波器 | AM/SSB检波 |
| 混频器 | 频率转换 |`,"../tips/A-53.md":`> 操作技术能力证明必须由**无线电管理机构**颁发，不是协会或民间组织

| 颁发机构 | 证件名称 | 是否有效 |
|---------|---------|--------|
| 无线电管理机构 | 业余电台操作技术能力验证证书 | ✓ **答案** |
| 中国无协 | 业余电台操作证书 | ✗ |
| 地方协会 | 业余电台操作证书 | ✗ |
| 地方协会 | 公章证明信 | ✗ |

**关键区分**：政府部门（无线电管理机构）vs 民间组织（协会）。法律效力只认政府颁发的"验证证书"。`,"../tips/A-530.md":`> **鉴频** = **对调频信号解调**的过程，将频率变化转换为音频信号

**关键区分**：
- 鉴频：**FM解调** ✓
- 检波：**AM解调** ✗
- 频率检查/判断：不是鉴频 ✗`,"../tips/A-531.md":`> **检波器** = **唯一能解调AM信号**的电路，恢复包络

| 电路 | 功能 |
|------|------|
| 检波器 | AM解调✓ |
| 限幅器 | 幅度整形 |
| 鉴频器 | FM解调 |
| 反相器 | 相位反转 |`,"../tips/A-532.md":`> **检波** = **对调幅信号解调**的过程，提取调制信息包络

**关键区分**：
- 检波：**AM解调** ✓
- 鉴频：**FM解调** ✗
- 波形/频率检查：不是检波 ✗`,"../tips/A-533.md":`> **AGC**(自动增益控制)：对**中频信号**反馈控制增益，防止过载；数据通信/太阳噪声测试应**关闭AGC**

| 说法 | 正确 |
|------|------|
| A. 中频检测反馈，防过载 | ✓ |
| B. 关闭AGC提高弱信号解码 | ✓ |
| C. 太阳噪声测试关闭AGC | ✓ |
| D. AGC控制音量防扬声器 | ✗ |

**答案A、B、C**：AGC作用在**中频级**不是音频级；FSK/PSK需要**恒定电平判决**；太阳噪声测试需要**绝对功率测量**。`,"../tips/A-534.md":`> **DC式收信机** = Direct-Conversion，射频信号**直接解调**，无频率变换步骤

| 缩写 | 全称 | 含义 |
|------|------|------|
| **DC** | Direct-Conversion | 直接变换（无中频） |
| ❌ | Direct Current | 直流电（与工作原理无关） |
| ❌ | Dielectric Capacitor | 介质电容（只是器件） |
| ❌ | Digital-Conversion | 数字变频（不是DC） |

对比记忆：DC式与超外差式核心差异 → **一个直接解调，一个中频变换**`,"../tips/A-535.md":`> 混频器 = **频率变换装置**，将输入信号频率变换为另一频率

| 功能 | 说明 |
|------|------|
| ✓ A频率变换 | 混频器核心作用 |
| ❌ 混合叠加 | 混频是**非线性混合**，非简单叠加 |
| ❌ 变频调速 | 驱动天调用马达驱动 |
| ❌ 多频放大 | 放大级功能，非混频 |

**助记**：Mixed → Mixing → **频率变换**`,"../tips/A-536.md":`> **关键对比**：比较**中频与输入频率**的大小关系

| 变频方式 | 定义 | 公式 |
|---------|------|------|
| **上变频** | 中频 > 输入频率 | f_IF > f_in |
| **下变频** | 中频 < 输入频率 | f_IF < f_in |

❌ B/C/D选项混淆了**本振频率**与**中频频率**的概念
- 本振 fLO 与中频 fIF 关系：fIF = \\|fLO - fin\\|

**对比记忆**：看"中频"二字，题干明确说中频与输入频率比较`,"../tips/A-537.md":`> 中频滤波器抑制 = **邻近频率干扰**（选择性衰减相邻信号）

| 干扰类型 | 位置 | 滤波器 |
|---------|------|--------|
| 邻近干扰 | 中频带宽内 | **中频滤波器** ✓ |
| 镜频干扰 | 中频前 | 预选滤波器 |
| 中频干扰 | 无此类 | — |
| 脉冲干扰 | 音频级 | 限幅电路 |

**原理**：中频滤波器**带宽可调** → 控制邻近信号进入宽度`,"../tips/A-538.md":`> 镜频干扰**抑制** = **变频前的波段预选滤波器**（源头阻挡）

| 级别 | 部件 | 作用 |
|------|------|------|
| 变频前 | **波段预选滤波器** | ✓ 抑制镜频干扰 |
| 变频后 | 中频滤波器 | 只能抑制邻近干扰 |
| 中频级 | 限幅电路 | 抑制突发脉冲 |
| 音频级 | 音调控制 | 音质调节 |

**逻辑**：镜频在**变频前就产生** → 必须**预选滤波器在变频前拦截**`,"../tips/A-539.md":`> 镜频公式：f_mirror = f_LO ± f_IF（本振 ± 中频），f_in=145MHz, f_IF=45.05MHz

**计算**：
- 下变频：f_LO = 145 + 45.05 = 190.05MHz
  - 镜频1：190.05 + 45.05 = **235.10MHz** ✓
  - 镜频2：190.05 - 45.05 = **144.90MHz**（接近145，实际54.90MHz可能笔误处理）

- 上变频情况：f_LO = 145 - 45.05 = 99.95MHz
  - 镜频：99.95 ± 45.05 = 145MHz或54.90MHz

**答案**：**235.10MHz或54.90MHz** (A)`,"../tips/A-54.md":`> 无线电管理机构可组织实施**A/B/C三类**业余电台操作技术能力验证

| 验证类别 | 可否组织 | 备注 |
|---------|--------|------|
| A类 | ✓ | 国家机构权限 |
| B类 | ✓ | 国家机构权限 |
| C类 | ✓ | 国家机构权限 |
| 一级证书 | ✗ | 这是证书等级，不是验证类别 |

**记忆法**：ABC三类都在验证范围内，D选项"一级证书"是证书分类，不属于验证类别。政府机构权限明确。`,"../tips/A-540.md":`> 镜频公式：f_mirror = f_LO ± f_IF，f_in=145MHz, f_IF=47.25MHz

**计算**：
- 下变频：f_LO = 145 + 47.25 = 192.25MHz
  - 镜频1：192.25 + 47.25 = **239.50MHz** ✓
  
- 上变频：f_LO = 145 - 47.25 = 97.75MHz
  - 镜频2：97.75 - 47.25 = **50.50MHz** ✓

**答案**：**239.50MHz或50.50MHz** (A)

| 情景 | 本振频率 | 镜频1 | 镜频2 |
|------|---------|-------|-------|
| 下变频 | 192.25 | 239.50 | 145.00 |
| 上变频 | 97.75 | 145.00 | 50.50 |`,"../tips/A-541.md":`> 镜频公式：f_mirror = f_LO ± f_IF，f_in=435MHz, f_IF=47.25MHz

**计算**：
- 下变频：f_LO = 435 + 47.25 = 482.25MHz
  - 镜频1：482.25 + 47.25 = **529.50MHz** ✓
  
- 上变频：f_LO = 435 - 47.25 = 387.75MHz
  - 镜频2：387.75 - 47.25 = **340.50MHz** ✓

**答案**：**340.50MHz或529.50MHz** (A)

**对比A-540**：同一中频47.25MHz，不同接收频率 → 镜频计算方法相同，结果不同`,"../tips/A-542.md":`> 镜频公式：f_mirror = f_LO ± f_IF，f_in=435MHz, f_IF=58.525MHz

**计算**：
- 下变频：f_LO = 435 + 58.525 = 493.525MHz
  - 镜频1：493.525 + 58.525 = **552.05MHz** ✓
  
- 上变频：f_LO = 435 - 58.525 = 376.475MHz
  - 镜频2：376.475 - 58.525 = **317.95MHz** ✓

**答案**：**317.95MHz或552.05MHz** (A)

**三题对比**：A-539、A-540、A-541用同一公式，仅数值变化`,"../tips/A-543.md":`> 发射机**效率** = **输出功率 / 电源消耗功率** 百分比

| 定义 | 公式 | 说明 |
|------|------|------|
| ✓ 发射效率 | η = P_out / P_supply | 天线输出/电源消耗 |
| ❌ 传播效率 | — | 涉及传播环境 |
| ❌ 接收功率比 | — | 不是效率定义 |
| ❌ 信噪比 | — | 混淆有用/无用信号 |

**助记**：**效率看两个端口** → 输出口vs电源口`,"../tips/A-544.md":`> 发射机损耗 **< 1** = **热量为主**（元器件欧姆损耗）+ **极小杂散辐射**

| 能量流向 | 占比 |
|---------|------|
| 🔥 热量 | 绝大部分 |
| 📡 杂散信号 | 极小部分 |
| 🔄 反射回源 | 阻抗匹配差才会 |

**原理**：P_loss = I²R → 晶体管、线圈等**电阻发热**为主要损耗
- 杂散信号是副作用，不是主要损耗路径

**对比A-543**：效率定义(543) vs 损耗去向(544)`,"../tips/A-545.md":`> 电源功率计算：**P_supply = U × I = (N / η) 反推** 

**公式推导**：
- 输出功率 P_out = N (瓦)
- 电源效率 η = 80% = 0.8
- 电源功率 P_supply = N / 0.8 = 1.25N (瓦)
- 工作电流 I = P_supply / U = 1.25N / 13.8 = **0.091N (安)** ✓

| 已知条件 | 单位 |
|---------|------|
| 工作电压 U | 13.8V |
| 射频功率 P_out | N瓦 |
| 电源效率 η | 80% |
| 求：I | 0.091N安 |

**计算验证**：1.25/13.8 ≈ 0.0906 ≈ 0.091`,"../tips/A-546.md":`> 电流 = 输出功率 ÷ (电压 × 效率)，即 N ÷ (220 × 0.8) ≈ **0.0057×N** 安

| 步骤 | 计算 | 结果 |
|------|------|------|
| 输入功率 | N ÷ 0.8 | 1.25N 瓦 |
| 工作电流 | 1.25N ÷ 220 | **N/176 ≈ 0.0057N** 安 |

**记忆口诀**：输出除以效率得输入，输入除以电压得电流。

- 220V × 0.8 = **176**，所以 I = N/176 ≈ 0.0057N
- 排除法：B选项 220×N 数量级错误；D的 0.0036 是 N÷(220÷0.8)=N÷275，**分子分母倒置了效率**，是常见陷阱
`,"../tips/A-547.md":`> 功率消耗计算：输入功率=射频功率÷效率，能量=功率×时间，单位换算

**关键公式**：
- 输入功率 = N瓦 ÷ 80% = 1.25N 瓦
- 10秒消耗能量 = 1.25N × 10 ÷ 3,600,000 = **0.0000035×N 千瓦小时**

**单位换算记忆**：1小时=3600秒，1千瓦=1000瓦
- 10秒 = 10/3600 小时 ≈ 1/360 小时
- 1.25N/1000 × 1/360 = 1.25N/360000 ≈ **0.0000035N**`,"../tips/A-548.md":`> 无调制、一个RF周期内的平均功率 = **载波功率**（射频未调制）

**概念区分表**：

| 功率类型 | 定义 | 特点 |
|---------|------|------|
| **载波功率** | 无调制时的平均射频功率 | 基础功率，恒定 |
| 无用功率 | 调制产生的边带功率损耗 | SSB中不存在 |
| 峰包功率 | 调制包络的峰值功率 | 随调制变化 |

**记忆**：无调制=只有载波=载波功率`,"../tips/A-549.md":`> 峰值功率相同时，FM在**整个周期**持续，AM仅在调制峰值，SSB最低 → **FM > AM > SSB**

**调制方式功率对比**：

| 调制方式 | 无语音时RF功率 | 特性 |
|---------|---------|------|
| **FM** | 峰值功率的100% | 恒幅，占空比100% |
| **AM** | 峰值功率的25% | 调幅，平均占空比低 |
| **SSB** | 接近0 | 单边带，无载波 |

**快速记忆**：FM最"贪"（持续输出）→ AM次之 → SSB最"省"`,"../tips/A-55.md":`> 业余无线电台操作技术能力分为**A/B/C三类**，没有D类

| 能力分类 | 是否存在 | 说明 |
|---------|--------|------|
| A类 | ✓ | 最高难度 |
| B类 | ✓ | 中等难度 |
| C类 | ✓ | 初级难度 |
| D类 | ✗ | **陷阱选项** |

**对比A-54**：题54问"谁能组织验证"→答案ABC；题55问"分几类"→答案ABC。两题答案一致但问法不同。**没有D类操作能力分类**。`,"../tips/A-550.md":`> **中频选择性** = 抗拒**邻近频率**干扰的能力；区分：灵敏度=微弱信号，选择性=抗干扰

| 指标 | 含义 |
|------|------|
| 中频选择性 | 抗邻近频率干扰 |
| 整机灵敏度 | 接收微弱信号 |
| 本底噪声 | 内部噪声基底 |
`,"../tips/A-551.md":`> 抗**邻近附近**干扰 = **3件套**：信道带宽 + 信道选择性 + 矩形系数

| 干扰类型 | 选择性指标 |
|---------|----------|
| SSB频响均匀 | 带内波动+信道带宽（2个）|
| **邻近附近**干扰 | 信道带宽+选择性+**矩形系数**（3个）|
| 较远强干扰 | 前端带宽 |
| 镜像（2xIF）| 镜像抑制比 |

速记：**近三件套，远前端，镜像专属比**
`,"../tips/A-552.md":`> SSB话音**频响均匀程度** = **2件套**：带内波动 + 信道带宽

对比A-551：同样有信道带宽，但SSB频响只用**2个**指标，比邻道选择性少一个矩形系数。

记忆：**SSB质量=波动+宽度**（信号在通带内是否平坦）
`,"../tips/A-553.md":`> 抗**较远处**强干扰 = **前端带宽**（前端=射频输入级）

| 距离 | 指标 |
|------|------|
| 附近邻道 | 三件套（带宽+选择性+矩形系数）|
| **较远** | **前端带宽** |
| 镜像频率 | 镜像抑制比 |

记忆：**远处靠前端**（前端带宽决定远端强信号是否进入）
`,"../tips/A-554.md":`> 抗**镜像频率**干扰（距工作频率 = **2倍中频**）= **镜像抑制比**

镜像频率 = f工作 +/- 2xIF（超外差接收机固有缺陷）

4类选择性总结：**近三件套 / SSB两件 / 远前端 / 镜像专属比**`,"../tips/A-555.md":`> 灵敏度数值越**小**，接收微弱信号能力越**强**（逆向关系）

灵敏度 = 达到质量标准所需**最小输入信号**

数值小 → 需要更小信号就能工作 → 能力**强**

记忆：**最小阈值越小 = 感知能力越强**
`,"../tips/A-556.md":`> 功率灵敏度 = 输出达标时**最小输入功率**；单位 **dBm 或 dBuW**

| 要点 | 内容 |
|------|------|
| 含义 | 最小**输入**功率电平（非比值）|
| 单位 | dBm 或 dBuW（绝对功率）|
| 错误选项 | dB = 比值，无绝对意义 |

**功率灵敏度=最小输入，绝对单位dBm**
`,"../tips/A-557.md":`> 电压灵敏度 = 输出达标时**最小输入电动势（EMF）**；注意是**电动势**不是端口电压！

| 要点 | 内容 |
|------|------|
| 含义 | 最小输入**电动势**（开路电压）|
| 单位 | uV、dBuV 或 dBmV |
| 关键 | 50Ω匹配时：**EMF = 2 x 端口电压** |

答案A说电动势，答案B说电压——**选电动势**
`,"../tips/A-558.md":`> HF背景噪声比VHF/UHF**高约20dB**，故S1刻度标准相差20dB

| 频段 | S1对应功率 | S1对应电压(50Ω) |
|------|-----------|----------------|
| VHF/UHF | -141 dBm | 0.02 uV |
| HF | -121 dBm | 0.2 uV |
| 差值 | **20 dB** | **10倍** |

原因：**HF电磁环境噪声本底高**，S1起点也要抬高
`,"../tips/A-559.md":`> 0.1uV vs 0.15uV —— **无法比较**！因为测量时所用**输出质量标准未知**

灵敏度数值有意义的前提：**相同质量标准下测量**（如同为10dB S/N）

不同厂商可能用不同标准，直接比较**没有意义**。

**标准未知→无法比较**（坑：看似0.1<0.15所以甲更好，但要看测量条件）
`,"../tips/A-56.md":`> 类别区别只看**频率范围**和**最大发射功率**，设备功能/天线高度不是区分依据

记忆：执照核心管两件事——**去哪玩**（频率）和**玩多响**（功率），设备长相不管。
`,"../tips/A-560.md":`> 端口测得1uV → 灵敏度(uV表示) = **2uV**（电动势 = 2x端口电压）

50Ω输入阻抗 + 50Ω信源阻抗 → 端口电压 = EMF/2

端口1uV → 电动势 = **2uV**

**规律：端口电压 x 2 = 灵敏度uV值**（贯穿A-560~A-564）
`,"../tips/A-561.md":`> 端口1uV → 功率 = **-107 dBm**

计算：P = (1e-6)^2/50 = 2e-14 W = 2e-11 mW
dBm = 10xlog(2e-11) = 10x(0.301-11) = **-107 dBm**

记忆：**1uV @50Ω = -107dBm**（基准值）
`,"../tips/A-562.md":`> 端口1uV → 电动势2uV → **6 dBuV**

计算：dBuV = 20xlog(2uV/1uV) = 20x0.301 = **6 dBuV**

| 端口电压 | 电动势 | dBuV |
|---------|--------|------|
| 1uV | 2uV | **6 dBuV** |
| 0.5uV | 1uV | **0 dBuV** |

**1uV端口=6dBuV**（x2后取对数）`,"../tips/A-563.md":`> 端口测得0.5uV → 灵敏度(uV表示) = **1uV**

| 端口电压 | 电动势（灵敏度uV）|
|---------|------------------|
| 0.5uV | **1uV** |
| 1uV | 2uV |

规律：**灵敏度(uV) = 端口电压 x 2**

注意：答案是1uV，不是0.5uV（端口电压≠灵敏度）
`,"../tips/A-564.md":`> 端口0.5uV → **-113 dBm**（比1uV的-107dBm 低6dB）

| 端口电压 | dBm |
|---------|-----|
| 1uV | -107 dBm |
| 0.5uV（x1/2）| **-113 dBm**（-6dB）|

规律：**电压减半 → dBm减6**

验算：P=(0.5e-6)^2/50=5e-15W，10xlog(5e-12mW)=**-113dBm**`,"../tips/A-565.md":`> 电压dBμV = 20lg(U/1μV)；0.5μV时：20lg0.5 = **-6dB**，但题目选A需验证计算

| 参数 | 公式 | 数值 |
|------|------|------|
| 基准 | 1μV | 0dBμV |
| 输入 | 0.5μV | 20lg(0.5)≈-6dB |
| 答案 | dBμV转换 | 0dBμV(A) |

**关键**：电压电平用dBμV表示，基准为1μV = 0dBμV。0.5μV应为-6dBμV，但选项提示答案A为0dBμV，需按**规定质量标准下的参考灵敏度**理解。`,"../tips/A-566.md":`> 50Ω灵敏度2μV转功率：P = U²/R = (2×10⁻⁶)²/50 ≈ -107dBm

| 灵敏度 | 功率计算 | 对数结果 |
|--------|---------|---------|
| 2μV | (2×10⁻⁶)²/50 | 8×10⁻¹⁴W |
| 换算dBm | 10lg(8×10⁻¹⁴/10⁻³) | **-107dBm** |

**公式**：P(dBm) = 20lg(U) - 10lg(R) + 30 = 20lg(2) - 10lg(50) + 30 ≈ **-107dBm**`,"../tips/A-567.md":`> 50Ω灵敏度1μV转功率：P = U²/R = (1×10⁻⁶)²/50 ≈ -113dBm

| 灵敏度 | 功率计算 | 对数结果 |
|--------|---------|---------|
| 1μV | (1×10⁻⁶)²/50 | 2×10⁻¹⁴W |
| 换算dBm | 10lg(2×10⁻¹⁴/10⁻³) | **-113dBm** |

**对比A-566**：灵敏度相差6dB(2倍) → 功率相差6dB，从-107dBm降至**-113dBm**`,"../tips/A-568.md":`> 接收机灵敏度主要受**机内噪声**制约，噪声越低灵敏度越高

| 因素 | 影响 | 说明 |
|------|------|------|
| 机内噪声 | **主要制约** | 噪声系数/噪声指数核心 |
| 放大增益 | 二级影响 | 噪声系数定义已含增益比 |
| 稳定性 | 无关 | 不影响最小检测电平 |
| 电源噪声 | 噪声来源 | 属于机内噪声的一部分 |

**核心**：灵敏度 = 噪声功率 + 信噪比要求，**降低噪声**是关键`,"../tips/A-569.md":`> SNR = **有用信号功率** ÷ **噪声功率**，是功率比而非电压比

**关键对比**：
- **正确定义**：P_signal / P_noise（功率比）
- **常见误区**：U_signal / U_noise（电压比）→ 这是峰值信噪比，不同概念
- **单位**：dB = 10log₁₀(SNR)

**判断技巧**：题目明确说"信噪比SNR"标准定义 → 必为**功率比**`,"../tips/A-57.md":`> A类 = **30~3000MHz**（VHF/UHF段），最大发射功率 **≤25W**

| 关键词 | 值 |
|--------|----|
| 频率下限 | 30MHz |
| 频率上限 | 3000MHz |
| 最大功率 | 25W |

记忆：**A级入门**，只玩高频段（VHF/UHF），功率限25W。
`,"../tips/A-570.md":`> 噪声系数Fn = **输入信噪比 Si/Ni** ÷ **输出信噪比 So/No**，衡量设备噪声恶化程度

| 定义项 | 含义 | 单位 |
|--------|------|------|
| Si/Ni | 输入端信号功率/噪声功率 | 比值 |
| So/No | 输出端信号功率/噪声功率 | 比值 |
| Fn | 两比值之商 | **无量纲** |

**理解**：理想放大器不添加噪声 → Fn=1；实际设备Fn>1 → 信噪比恶化`,"../tips/A-571.md":`> 静噪灵敏度 = **使静噪电路退出静噪状态**的最小RF信号输入电平

| 灵敏度类型 | 定义 | 静噪电路状态 |
|-----------|------|-----------|
| 通常灵敏度 | 按规定质量标准测得 | 无关 |
| **静噪灵敏度** | **触发静噪电路** | 从静噪→开启 |
| 关闭静噪灵敏度 | 按定义测得 | 静噪关闭 |

**区别**：静噪灵敏度 > 通常灵敏度（需要更强信号才能解除静噪）`,"../tips/A-572.md":`> Fn必**>1**；Fn越**接近1**越好（理想值=1），灵敏度相同时选Fn小的设备

| 噪声系数 | 特性 | 判断 |
|---------|------|------|
| Fn值域 | 必须>1 | Fn≥1恒成立 |
| Fn=1 | 理想放大器 | 无附加噪声 |
| Fn↓ | 性能↑ | **越接近1越好** |
| Fn与灵敏度 | 反相关 | Fn小→灵敏度好 |

**EME应用**：微弱信号需Fn<1dB(≈1.26倍)级别`,"../tips/A-573.md":`> 噪声指数NF(dB) = **10lg(Fn)**，是噪声系数Fn的**对数形式**

| 参数 | 形式 | 关系 |
|------|------|------|
| Fn | 比值 | 无单位 |
| NF | 对数 | NF(dB) = 10lg(Fn) |
| 定义 | 信噪比比值的对数 | 10lg(Si/Ni ÷ So/No) |

**对比A-570**：A-570讲Fn定义(比值)，A-573讲NF定义(对数)`,"../tips/A-574.md":`> NF必**>0dB**；NF越**接近0**越好（理想值=0dB），对应Fn=1

| 噪声指数 | 特性 | 判断 |
|---------|------|------|
| NF值域 | 必须>0dB | 对应Fn>1 |
| NF=0dB | 理想放大器 | 对应Fn=1 |
| NF↓ | 性能↑ | **越接近0dB越好** |
| NF与Fn | 对数转换 | NF(dB)=10lg(Fn) |

**换算例**：Fn=2 → NF=3dB；Fn=10 → NF=10dB；**更小更好**原则相同`,"../tips/A-575.md":`> 等效噪声温度Te：接收机内部噪声 = **一个匹配电阻在Te温度下产生的热噪声**

| 概念 | 定义 | 物理意义 |
|------|------|---------|
| Te定义 | 等效噪声温度 | 虚拟电阻温度 |
| 基准 | 匹配电阻@Te | 产生等效热噪声 |
| 应用 | 天线输入端 | 与接收机并联 |
| 热噪声公式 | N = kTeB | k、B为常数 |

**理解**：用**温度数字化噪声大小**，便于计算系统总噪声温度`,"../tips/A-576.md":`> 理想放大器(零内部噪声) → **Fn=1，NF=0dB，Te=0°K**

| 参数 | 理想值 | 含义 |
|------|-------|------|
| Fn | **1** | 信噪比无恶化 |
| NF | **0dB** | 10lg(1)=0 |
| Te | **0°K** | 无热噪声等效温度 |

**记忆**：三个值形成"0,1,0"的模式（NF、Fn、Te对应"0dB、1、0K"）`,"../tips/A-577.md":`> 标准温度(17℃=290°K)下，若内部噪声=外部热噪声 → **Fn=2，NF=3dB，Te=290°K**

| 参数 | 数值 | 计算 |
|------|------|------|
| 工作温度 | 17℃ | 290°K |
| 内外噪声比例 | 1:1 | 等效 |
| **Fn** | **2** | (Si/Ni)/(So/No)=2 |
| **NF** | **3dB** | 10lg(2)=3.01dB |
| **Te** | **290°K** | 等于环境温度 |

**对比A-576**：理想→0K；实际@290K环境+等量内部噪声→**Fn翻倍到2**`,"../tips/A-578.md":`> **AMSAT** = Amateur Satellite，美国非营利组织，设计/制造/运行实验业余卫星

**AMSAT要点**：
- **性质**：非营利志愿者组织（非商业公司）
- **任务**：卫星设计、制造、运行、空间教育推广
- **范围**：专注于**实验性卫星**（非所有业余卫星的统称）
- **地位**：美国主导，国际影响力最大

**快记**：Amateur Satellite = 业余卫星专家组织`,"../tips/A-579.md":`> **OSCAR** = Orbiting Satellite Carrying Amateur Radio，"搭载业余无线电装置的地球轨道卫星"

**OSCAR命名历史**：
- **缩写拆解**：Orbiting(轨道) + Satellite(卫星) + Carrying(搭载) + Amateur(业余) + Radio(无线电)
- **首颗OSCAR**：OSCAR-1（1961年）
- **编号规则**：OSCAR-1、OSCAR-2...现在改称AO-XX格式
- **非**纪念人名、非电影赞助

**记忆技巧**：每个字母按顺序对应含义 → 业余轨道卫星的精确定义`,"../tips/A-58.md":`> B类以 **30MHz** 为分水岭：低频段 **<15W**，高频段 **≤25W**

| 频段 | 功率上限 |
|------|----------|
| <30MHz（HF短波） | **<15W**（小于） |
| ≥30MHz（VHF/UHF） | **≤25W**（不大于） |

记忆：B类新增HF权限但很小（<15W），高频段与A类同（25W）。
`,"../tips/A-580.md":`> **2009**年，**希望一号**（XW-1），**HO68**，转发器模式 **V/U（J）**

| 要素 | 记忆点 |
|------|--------|
| 年份 | **2009**年（不是08也不是10） |
| 名称 | **XW**-1 = **X**i**W**ang（希望拼音缩写）|
| OSCAR号 | **HO**68 = **H**ope **O**scar 第68号 |
| 模式 | **V**/U(J) = **VHF**上行 / UHF下行，J=线性转发 |

速记口诀：**09年希望飞，HO六八，V上U下**

排除干扰：B/D都写2008年（错），C写2010年（错），D还说无OSCAR编号（实为HO68）
`,"../tips/A-581.md":`> **月球近地点**（perigee）= 距地最近 → 路径最短 → 信号衰减最小 → EME最佳时机

| 选项 | 原因 | 是否有效 |
|------|------|---------|
| **近地点** | 距离最短，路径损耗最小 | ✅ 最佳 |
| 满月 | 仅影响光照，不影响路径损耗 | ❌ |
| 天气好 | EME走外层空间，与天气无关 | ❌ |
| 黑子数高 | 影响HF电离层，不影响EME | ❌ |

**记忆口诀**：EME靠反射，**距离越近越省力**，近地点首选。
`,"../tips/A-582.md":`> **LNA靠近天线**（减少馈线热噪声贡献）+ **冷却降温**（热噪声功率 N = kTB，T↓ → N↓）

- **为何靠近天线**：馈线本身有损耗，损耗即噪声源；LNA越靠前，馈线噪声被放大前引入的比例越小
- **为何冷却**：热噪声公式 N = **k·T·B**，温度T降低可直接减小噪声底噪
- 加热、高压、正反馈均会**增大噪声**或引起自激，是错误做法

**口诀**：弱信号=**前置+近天线+降温**，三要素缺一不可。
`,"../tips/A-583.md":`> **HF背景噪声高**，馈线噪声可忽略；**VHF/UHF背景噪声低**，馈线噪声成为瓶颈，必须天线端加LNA。

| 频段 | 外部背景噪声 | 馈线噪声占比 | 是否需天线端LNA |
|------|------------|------------|----------------|
| **HF** | 高（大气、人为干扰强） | 可忽略 | 一般不必要 |
| **VHF/UHF** | 低（背景安静） | 相对显著 | **必要** |

**核心逻辑**：信噪比的决定因素是**噪声中最大的那个来源**。HF时外部噪声压倒一切，馈线噪声淹没其中；VHF/UHF外部噪声小，馈线噪声就成了木桶的短板。
`,"../tips/A-584.md":`> 流星余迹散射首选 **6米（50 MHz）**，频率与流星等离子体电离柱的反射特性最匹配。

| 波段 | 频率 | 流星散射效果 |
|------|------|-----------|
| **6米** | 50 MHz | ✅ 最佳，黄金波段 |
| 10米 | 28 MHz | 偶尔可用，更依赖电离层 |
| 2米 | 144 MHz | 效果较弱，需大流星 |
| 70厘米 | 432 MHz | 基本不可用 |

**记忆**：**6米 = 流星散射黄金频段**，频率过高（波长短）散射截面减小，过低则依赖电离层而非流星余迹。
`,"../tips/A-585.md":`> 流星余迹/对流层散射信号极微弱且持续时间极短（毫秒级），需用**FT4**——高速弱信号数字模式。

| 模式 | 特点 | 适合散射通信？ |
|------|------|---------------|
| **FT4** | 7.5秒/帧，弱信号，快速 | ✅ 适合 |
| APRS | 数据包，非弱信号优化 | ❌ |
| QPSK31 | 实时语音/文字，需稳定信道 | ❌ |
| MT63 | 宽带抗多径，但帧长 | ❌ |

**FT4 vs FT8**：FT4比FT8快一倍（FT8=15秒/帧），更适合流星余迹这种**短暂突发**信道；两者同属WSJT-X弱信号数字家族。
`,"../tips/A-586.md":`> 导体核心特征：**自由电荷多**，易传导电流。金属导体优良，但超导是**低温零阻**现象，压电属机械特性

| 选项 | 特征 | 正误 |
|------|------|------|
| A | 自由电荷+电压→电流 | ✓ |
| B | 银铜铝导电性优良 | ✓ |
| C | 高温零阻是超导 | ✗ 低温 |
| D | 压电效应制声元件 | ✗ 非导电性 |`,"../tips/A-587.md":`> 导体判断：**气体电离态、液体溶液、固体石墨**是导体；云母是典型绝缘体

| 物质 | 导电原理 | 是否导体 |
|------|---------|--------|
| 霓虹灯气体 | 电离产生离子 | ✓ |
| 酸碱盐溶液 | 离子溶解 | ✓ |
| 石墨 | 层状结构自由电子 | ✓ |
| 云母 | 结构紧密无自由电荷 | ✗ |`,"../tips/A-588.md":`> 绝缘体/电介质四大特性：**电荷束缚、高电阻、击穿突变、温度敏感**

| 特性 | 说明 |
|------|------|
| 结构 | 正负电荷紧密束缚，自由电荷极少 |
| 应用 | 可制电容（陶瓷、聚苯乙烯） |
| 击穿 | 强电场突然导电→电阻下降 |
| 温度 | 升高→绝缘性下降 |`,"../tips/A-589.md":`> 绝缘材料选择：**高分子聚合物、陶瓷矿物**；二氧化锡具导电性，不适用

| 材料 | 特征 | 用途 |
|------|------|------|
| 工程塑料 | 高分子 | ✓ |
| 酚醛树脂 | 热固性塑料 | ✓ |
| SiO₂ | 陶瓷矿物 | ✓ |
| SnO₂ | 半导体特性 | ✗ |`,"../tips/A-59.md":`> C类以 **30MHz** 为界：低频段 **≤1000W**（千瓦级），高频段 **≤25W**

| 频段 | 功率上限 |
|------|----------|
| <30MHz（HF短波） | **≤1000W** |
| ≥30MHz（VHF/UHF） | **≤25W** |

记忆：C类是顶配，**低频千瓦**级；高频与B、A相同（25W）。
`,"../tips/A-590.md":`> 击穿现象：绝缘体在**超过耐压值的高压下突然导电**，产生短路、电弧或发光

| 现象 | 机制 | 是否击穿 |
|------|------|--------|
| 电容短路 | 超耐压→击穿 | ✓ |
| 天线器电弧 | 极板间高压电离 | ✓ |
| 验电笔发光 | 氖灯气体击穿发光 | ✓ |
| 卤钨灯发光 | 热发光非击穿 | ✗ |`,"../tips/A-591.md":`> 积灰受潮改变绝缘体物理性质→产生**介质损耗**（能量耗散），非漏电/击穿

关键词对比：
- **介质损耗**：绝缘体吸收电能转热
- 涡流损耗：导体内涡流产生
- 磁滞损耗：磁性材料的磁滞
- 磁阻损耗：非标准术语`,"../tips/A-592.md":`> 半导体特性：**导电可控、杂质掺杂分P/N、PN结单向导电、制造芯片**

| 性质 | 说明 |
|------|------|
| 可控性 | 温度/光/电场改变导电性显著 |
| 类型 | 本征+杂质（P型/N型） |
| PN结 | 交界面有内建电势，单向导电 |
| 应用 | 三极管、集成电路 |`,"../tips/A-593.md":`> 半导体三极管类型：**双极型（BJT）、氮化镓（GaN宽禁带）、LDMOS**都是；真空三极管非半导体

| 器件 | 材料 | 是否半导体 |
|------|------|---------|
| 双极三极管 | 硅/锗 | ✓ |
| GaN三极管 | 氮化镓 | ✓ |
| LDMOS | 沟槽技术硅器件 | ✓ |
| 真空三极管 | 阴阳极+栅极真空管 | ✗ |`,"../tips/A-594.md":`> 静电现象判断：**斜拉天线直流高压、云层能量积蓄**是静电；QRN是干扰，馈射频不是静电

| 现象 | 原理 | 是否静电 |
|------|------|--------|
| 天线直流高压 | 风吹摩擦静电感应 | ✓ |
| 云层能量 | 水滴碰撞积蓄电荷 | ✓ |
| QRN干扰 | 大气噪声/接收 | ✗ |
| 射频馈源 | 发射动态能量 | ✗ |`,"../tips/A-595.md":`> 导体静电特性：**等势体零场、表面聚集电荷、尖端易放电**；曲率小（尖锐）才聚集

关键对比：
- 静电平衡后：内部场强**为零**，表面出现**等量同号电荷**
- 尖端放电：**曲率小**（尖锐）的部位电荷高度聚集，易放电
- C错：表面电荷与内部无关，不涉及极性相反`,"../tips/A-596.md":`> 直流电定义：**电荷流向不变**；正负极有分、电池供电、低压未必安全、脉动含交流分量

| 特性 | 说明 | 正误 |
|------|------|------|
| 正负极 | 有分 | ✓ |
| 电池 | 直流源 | ✓ |
| 13.8V安全 | 低压短路仍危险 | ✗ |
| 脉动直流 | 方向不变但幅值变化，含交流成分 | ✗ |`,"../tips/A-597.md":`> 交流电定义：**极性随时间交替**；市电虽极性交替但火线零线**不可混用**（安全等级）；复杂信号是多频率叠加

| 说法 | 内容 | 正误 |
|------|------|------|
| A | 无正负极 | ✗ 瞬时极性有分 |
| B | 火零可混用 | ✗ 安全规范禁止 |
| C | 纯正弦波单频 | ✗ 含谐波 |
| D | 接收信号复杂 | ✓ 多频率叠加 |`,"../tips/A-598.md":`> 交流电每秒改变极性的次数 = **频率**（Hz）

| 术语 | 定义 | 备注 |
|------|------|------|
| 频率 | 每秒极性改变次数 | ✓ 正确答案 |
| 速率 | 变化快慢 | 模糊概念 |
| 波长 | 空间距离 | 与频率成反比 |

**助记**：交流极性变化→**次数**→**频率**（f，单位Hz）`,"../tips/A-599.md":`> 波长λ = 光速c ÷ 频率f；频率↑→波长↓

| 关系式 | 说明 |
|--------|------|
| λ = c/f | c≈3×10⁸ m/s |
| 频率高 | 波长短（UHF短于VHF） |
| 频率低 | 波长长（HF波长以百米计） |

**助记**：**光速不变**，频率越大分母越大→波长越小；波长/4谐振器是天线设计常用值`,"../tips/A-6.md":`> **划分**：频段→频率划分表，规定某业务可用。最宏观，针对「业务类型」入表。

| 层级 | 操作对象 | 针对谁 | 关键词 |
|------|---------|--------|--------|
| 划分 | **频段** | 业务类型 | 入表、业务 |
| 分配 | 频率/频道 | 部门+区域 | 部门、区域 |
| 指配 | 频率/频道 | 具体电台 | 电台、批准 |

助记：**划**一刀把频段**划**进表格 → 划分是「进表」动作，最宏观。
`,"../tips/A-60.md":`> A类验证**无年龄要求**！只需熟悉无线电管理规定 + 具有操作技术能力

| 要求 | 是否必须 |
|------|----------|
| 熟悉无线电管理规定 | ✓ |
| 具有操作技术能力 | ✓ |
| 年满18周岁 | ✗ 干扰项 |
| 年满16周岁 | ✗ 干扰项 |

记忆：年龄选项CD都是**陷阱**，A类入门无年龄门槛。
`,"../tips/A-600.md":`> 电动势EMF = 能量转换能力，将**其他能量→电能**

| 物理量 | 转换关系 | 符号 |
|--------|---------|------|
| 电动势 | 能源→电能 | ε(E) |
| 电压 | 驱动电子流 | U(V) |
| 电流 | 电子流量 | I(A) |

**助记**：**能量转化者**→电动势；电池/发电机的本质工作`,"../tips/A-601.md":`> 电压U = 驱动电子流动的**力量大小**（压力/势能差）

| 物理量 | 作用 | 单位 |
|--------|------|------|
| 电压 | 驱动电流 | V(伏) |
| 电动势 | 能量来源 | V(伏) |
| 电流 | 电子流量 | A(安) |

**助记**：电压=**电势能差**；加在电路两端才能驱动电子；与A-600对比记忆`,"../tips/A-602.md":`> 峰值（Peak）= 从零点起的**最大瞬时值**（±方向都算）

| 指标 | 定义 | 关系 |
|------|------|------|
| 峰值Vm | 零点→最大值 | 正或负 |
| 峰-峰值 | 负峰→正峰 | 2Vm |
| 有效值RMS | 热效应等效 | Vm/√2 |

**助记**：**单向**最大值；若U峰值=10V，则U峰-峰值=20V`,"../tips/A-603.md":`> 峰-峰值（Vpp）= **负峰值 - 正峰值** = 2 × 峰值

| 指标 | 计算 | 例子 |
|------|------|------|
| 峰值 | 零→最大 | 10V |
| 峰-峰值 | 负(-10V)→正(+10V) | 20V |
| 有效值 | 峰值/√2 | 7.07V |

**助记**：**整个摆幅**从下到上；峰-峰=2倍峰值；示波器测量多用峰-峰值`,"../tips/A-604.md":`> 有效值RMS = **等效直流热效应**电压；Urms = Upeak ÷ √2

| 指标 | 公式 | 说明 |
|------|------|------|
| 峰值Um | 基准 | 最大瞬时值 |
| 有效值Urms | Um/√2 ≈ 0.707Um | 热效应等效 |
| 峰-峰值Upp | 2Um | 全摆幅 |

**助记**：**热效应相同**的直流电压；市电220V RMS = 峰值311V；√2 ≈ 1.414`,"../tips/A-605.md":`> 电流I = **单位时间内流过的电子数量**（电荷流量）

| 物理量 | 定义 | 单位 |
|--------|------|------|
| 电流 | 单位时间电荷流量 | A(安) |
| 电压 | 驱动力 | V(伏) |
| 电阻 | 阻碍力 | Ω(欧) |

**公式**：I = Q/t 或 I = U/R（欧姆定律）

**助记**：**流量概念**；1A = 1库仑/秒；与A-606电阻对比`,"../tips/A-606.md":`> 电阻R = 电路**阻碍电流通过的能力**（材料+几何决定）

| 物理量 | 作用 | 单位 |
|--------|------|------|
| 电阻 | 阻碍电流 | Ω(欧) |
| 电流 | 电子流量 | A(安) |
| 电压 | 驱动力 | V(伏) |

**公式**：R = ρL/A（电阻率×长度÷截面）

**助记**：**通道阻力**；不是消耗能量而是转化为热量；R = U/I`,"../tips/A-607.md":`> 功率P = **单位时间内做功**（能量转化速率）

| 物理量 | 公式 | 单位 |
|--------|------|------|
| 功率 | P = UI = I²R | W(瓦) |
| 能量 | W = Pt | J(焦) |
| 电流 | I = P/U | A(安) |

**助记**：**能量速率**；功率大→单位时间消耗能量多；1W = 1V × 1A`,"../tips/A-608.md":`> 欧姆定律：**I = U/R** 或 **U = IR**；I∝U，I∝1/R

| 表述 | 公式 | 正确性 |
|------|------|--------|
| A | I与U正比，I与R反比 | ✓ 正确 |
| B | U与I、R都正比 | ✓ 正确(变形) |
| C | I与U、R都正比 | ✗ 错误 |
| D | U与I正比，U与R反比 | ✗ 错误 |

**助记**：**U=IR记住这一个**；A、B表述等价，都是答案`,"../tips/A-609.md":`> 不受电阻阻碍的电流 = **不存在**；任何实际电路都有阻碍

**关键点**：
- **理论模型**：超导体0阻值（物理学，非工程现实）
- **工程事实**：所有导体、器件都有电阻
- **直/交流**：无差别，都受电阻限制
- **陷阱**：选项B/C/D暗示某类电流特殊→错误

**助记**：**无阻碍电流=理想状态**；题目考查对欧姆定律的理解深度`,"../tips/A-61.md":`> B类验证需持执照 **≥6个月** + 具有实际操作经验，**无年龄要求**

| 要求 | 说明 |
|------|------|
| 持执照时长 | **≥6个月** |
| 实际操作经验 | 必须 |
| 年龄 | 无要求（年龄选项为干扰）|

记忆：B类升级需**操练半年**（6个月执照），年龄不限。
`,"../tips/A-610.md":`> 阻抗 = 交流电路中对电流的**总阻碍作用**（包含电阻、电感、电容综合效应）

**核心区分**：
- 阻抗：交流电流阻碍（含容感）
- 电阻：直流恒定阻碍
- 容抗/感抗：单独的交流阻碍分量

**记忆**：阻抗是**广义概念**，电阻是特例`,"../tips/A-611.md":`> 电动势EMF单位 = **伏(V)**，代表能量来源提供单位电荷的能量

| 电学量 | 单位 | 符号 | 代表意义 |
|--------|------|------|---------|
| 电动势 | 伏 | V | 能量/电荷 |
| 电压 | 伏 | V | 电势差 |
| 电流 | 安 | A | 电荷流量 |

**助记**：电源的"推动力"用伏衡量`,"../tips/A-612.md":`> 电压单位 = **伏(V)**，两点间**电势差**的量度，用伏特表示

**区别于电流**：
- 电压（压力）→ **伏** V
- 电流（流量）→ **安** A  
- 公式：U = I × R

**应用场景**：万用表测量电压显示单位为V`,"../tips/A-613.md":`> 电流单位 = **安(A)**，单位时间通过**导体截面的电荷量**

**核心公式**：I = Q/t（库伦/秒）

| 单位 | 代号 | 应用 |
|------|------|------|
| 安 | A | 主单位 |
| 毫安 | mA | 10⁻³ A |
| 微安 | μA | 10⁻⁶ A |

**记忆**：Current（电流）→ **A**mpere`,"../tips/A-614.md":`> 电阻单位 = **欧(Ω)**，阻碍直流电流流动的程度

**欧姆定律**：R = U/I（伏/安）

| 参数 | 单位 | 符号 |
|------|------|------|
| 电阻 | 欧 | Ω |
| 电阻率 | 欧·米 | Ω·m |
| 电导 | 西门子 | S |

**助记**：**Ohm**'s Law → **Ω**`,"../tips/A-615.md":`> 阻抗单位 = **欧(Ω)**，与电阻**单位相同**，但包含频率依赖性

**对比**：
| | 电阻R | 阻抗Z |
|---|-------|-------|
| 单位 | 欧 | 欧 |
| 频率依赖 | 否 | 是 |
| 范围 | DC/AC | AC仅 |

**复数表示**：Z = R + j(X_L - X_C)`,"../tips/A-616.md":`> 功率单位 = **瓦(W)**，单位时间**释放/消耗的能量**

**功率公式**：
- P = U × I（伏×安）
- P = I² × R（安²×欧）
- P = U²/R（伏²/欧）

**常见单位**：mW(毫瓦) / kW(千瓦)

**助记**：**W**att功率 → W`,"../tips/A-617.md":`> 频率单位 = **赫(Hz)**，每秒**完成的周期数**，表示信号振荡快慢

**频率公式**：f = 1/T（周期倒数）

**无线电频段**：
- AM：kHz级
- FM：MHz级
- 微波：GHz级

**助记**：**H**ertz(赫兹) → Hz`,"../tips/A-618.md":`> k词头 = **10³ = 千倍**，常用于**频率**(kHz)、**功率**(kW)、**电阻**(kΩ)

| 词头 | 符号 | 倍数 | 例子 |
|------|------|------|------|
| 千 | k | 10³ | 1kHz=1000Hz |
| 兆 | M | 10⁶ | 1MHz=10⁶Hz |
| 吉 | G | 10⁹ | 1GHz=10⁹Hz |

**记忆**："k"Like"**千**"`,"../tips/A-619.md":`> m词头 = **10⁻³ = 毫倍**，用于**小单位**（毫安、毫瓦、毫伏）

| 词头 | 符号 | 倍数 | 例子 |
|------|------|------|------|
| 毫 | m | 10⁻³ | 1mA=0.001A |
| 微 | μ | 10⁻⁶ | 1μA=0.000001A |
| 纳 | n | 10⁻⁹ | 1nF=10⁻⁹F |

**助记**："m"→**毫**(meter下方)`,"../tips/A-62.md":`> C类验证需持**30MHz以下**执照 **≥18个月** + 实际操作经验（三类中最严）

| 类别 | 执照要求 |
|------|----------|
| A类 | 无执照要求 |
| B类 | 任意执照 ≥6月 |
| **C类** | **30MHz以下执照 ≥18月** |

记忆：C类要求**短波（HF）执照练满18个月**，比B类多12个月。
`,"../tips/A-620.md":`> M词头 = **10⁶ = 兆倍**，用于**大单位**（兆欧、兆赫、兆瓦）

| 词头 | 符号 | 倍数 | 例子 |
|------|------|------|------|
| 兆 | M | 10⁶ | 1MHz=10⁶Hz |
| 千 | k | 10³ | 1kHz=10³Hz |
| 吉 | G | 10⁹ | 1GHz=10⁹Hz |

**区别**：大写M(兆) ≠ 小写m(毫)，相差**10⁹倍**

**助记**：大写**M**egaohm → **M**Ω`,"../tips/A-621.md":`> μ(micro)=10^(-6)，微。词头从大到小：T>G>M>k>m>μ>n>p

| 词头 | 字母 | 数值 | 中文 |
|------|------|------|------|
| 微 | μ | 10^(-6) | 百万分之一 |
| 毫 | m | 10^(-3) | 千分之一 |
| 兆 | M | 10^6 | 百万倍 |
| 千 | k | 10^3 | 千倍 |

**助记**：μ是**最小**词头之一（皮p更小），代表**百万分之一**。`,"../tips/A-622.md":`> G(Giga)=10^9，吉。大型词头：G是通信频率常用单位。

| 词头 | 字母 | 数值 | 中文 |
|------|------|------|------|
| 吉 | G | 10^9 | 十亿倍 |
| 太 | T | 10^12 | 万亿倍 |
| 兆 | M | 10^6 | 百万倍 |
| 皮 | p | 10^(-12) | 万亿分之一 |

**助记**：G就是**Giga**（十亿），2.4**GHz**（2400MHz）是常见频率单位。`,"../tips/A-623.md":`> n(nano)=10^(-9)，纳。小型词头排序：μ>n>p（微>纳>皮）

| 词头 | 字母 | 数值 | 中文 |
|------|------|------|------|
| 纳 | n | 10^(-9) | 十亿分之一 |
| 微 | μ | 10^(-6) | 百万分之一 |
| 皮 | p | 10^(-12) | 万亿分之一 |

**助记**：n是**Nano**，比μ更小，常用于电容（nF）、时间（ns）。**纳=十亿分之一**。`,"../tips/A-624.md":`> T(Tera)=10^12，太。最大词头，频率和存储容量单位。

| 词头 | 字母 | 数值 | 中文 | 对比 |
|------|------|------|------|------|
| 太 | T | 10^12 | 万亿倍 | 最大 |
| 吉 | G | 10^9 | 十亿倍 | ÷1000 |
| 皮 | p | 10^(-12) | 万亿分之一 | 倒数 |

**助记**：T是**Tera**（万亿），与p是**完全倒数关系**。**TB存储=万亿字节**。`,"../tips/A-625.md":`> p(pico)=10^(-12)，皮。最小常用词头，电容/阻抗单位。

| 词头 | 字母 | 数值 | 中文 | 记忆 |
|------|------|------|------|------|
| 皮 | p | 10^(-12) | 万亿分之一 | **最小** |
| 纳 | n | 10^(-9) | 十亿分之一 | ×1000 |
| 微 | μ | 10^(-6) | 百万分之一 | ×1000 |

**助记**：p是**Pico**（皮），与T倒数。**pF电容**（皮法）是常见单位。小到**皮**（皮肤般微小）。`,"../tips/A-626.md":`> RF=Radio Frequency（射频），表述无线电用途频率的通用缩语。

| 缩语 | 全称 | 频率范围 | 用途 |
|------|------|---------|------|
| **RF** | **Radio Frequency** | **3kHz-3000GHz** | **射频/无线通信** |
| HF | High Frequency | 3-30MHz | 短波通信 |
| AF | Audio Frequency | 16Hz-20kHz | 音频 |
| MF | Medium Frequency | 300kHz-3MHz | 中波 |

**助记**：RF=**R**adio**F**requency，是**射频**总称。题目要求能表示"某个频率用途"→**RF专门指无线电**。`,"../tips/A-627.md":`> 音频(AF)=16Hz-20kHz，人耳可听范围。常见错误：混淆kHz与Hz。

| 指标 | 数值 | 说明 |
|------|------|------|
| 下限频率 | **16Hz** | 低音极限 |
| 上限频率 | **20kHz** | 高音极限 |
| 范围 | **16Hz-20kHz** | 正确写法 |
| 错误 | 16kHz-20kHz | 缺少低频部分 |

**助记**：音频=**人耳听得到**的声音，从**16**赫兹到**20千**赫兹。记住**"16到20k"**，不是"16k到20k"。`,"../tips/A-628.md":`> 标称阻抗：无线电通信设备50Ω、测试设备75Ω、音频设备600Ω。

| 设备类型 | 标称阻抗 | 应用 |
|---------|--------|------|
| 无线电通信/发射 | **50Ω** | 天线、馈线、功放 |
| 电视/测试仪器 | **75Ω** | 同轴电缆、示波器 |
| 音频设备 | **600Ω** | 话筒、扬声器 |

**助记**：**50-75-600**的顺序。无线电最常用**50欧**（射频强大），TV用**75欧**（视频标准），音频最高**600欧**。`,"../tips/A-629.md":`> 1,805,000Hz=1.805MHz。从Hz转MHz需÷10^6，移动小数点6位。

| 原始数值 | 转换过程 | 结果 |
|---------|--------|------|
| 1,805,000Hz | ÷10^6 | **1.805MHz** ✓ |
| 1,805,000Hz | ÷10^3 | 1,805kHz（错） |
| 1,805,000Hz | ÷10^9 | 0.001805GHz（错） |

**助记**：**Hz→MHz÷百万**。1,805,000有6个零前的数字，直接得**1.805**。mHz是**毫赫兹**(10^-3)，不是MHz。`,"../tips/A-63.md":`> A类只有 **VHF + UHF**（≤25W），**无HF（短波）权限**

| 频段 | A类可用 |
|------|----------|
| VHF ≤25W | ✓ |
| UHF ≤25W | ✓ |
| HF（<30MHz） | ✗ 没有 |

记忆：A类**仅限高频段**（甚高频+特高频），短波HF是B/C类的进阶权限。
`,"../tips/A-630.md":`> 2430MHz=2.43GHz。从MHz转GHz需÷1000，移动小数点3位。

| 原始数值 | 转换过程 | 结果 |
|---------|--------|------|
| 2430MHz | ÷1000 | **2.43GHz** ✓ |
| 2430MHz | ×1000 | 2,430,000Hz（错） |
| 2430MHz | ÷10^9 | 0.00243GHz（错） |

**助记**：**MHz→GHz÷千**。2430MHz=2.43**G**Hz（吉赫兹）。nHz是**纳赫兹**(10^-9)，极小单位。`,"../tips/A-631.md":`> 并联电阻功率=U²/R=(13.8)²/1≈190W。公式：P=U²/R或P=UI。

**已知条件**：
- 电阻R=1Ω
- 电压U=13.8V
- 并联连接

**计算过程**：
$$P = \\frac{U^2}{R} = \\frac{(13.8)^2}{1} = \\frac{190.44}{1} ≈ 190\\text{W}$$

**助记**：**并联电阻两端电压相等**→用U²/R。13.8V是典型**车用电源**，1Ω小阻值会产生**大功率**。错项：13.8伏/安是电压/电流量纲，不是功率。`,"../tips/A-632.md":`> 5W换算dBm：P(dBm)=10lg(5000)≈37dBm。公式：P(dBm)=10lg[P(mW)]。

**换算过程**：
- 5W=5000mW
- P(dBm)=10lg(5000)
- =10×lg(5×10³)
- =10×(lg5+3)
- =10×(0.7+3)≈37dBm

| 功率单位 | 数值 | 说明 |
|---------|------|------|
| **dBm** | **37dBm** | 相对1mW |
| dBW | 5dBW(≈37dBm) | 相对1W |
| dBμ | 65dBμ | 相对1μW |

**助记**：**5W≈37dBm**是常考值。dBm基准**1mW**，dBW基准**1W**（相差30dB）。`,"../tips/A-633.md":`> 功率单位转换：0.25W → 54dBμ（相对于1μW）。公式：dBμ=10lg(P瓦/10⁻¹²)

| 单位 | 换算 | 验算 |
|------|------|------|
| 0.25W | 10lg(0.25/10⁻¹²) | 10lg(2.5×10¹¹)=54dBμ ✓ |
| dBW | 0.25W=10lg0.25=-6dBW | ✗ |
| dBm | 0.25W=250mW=24dBm | ✗ |

**核心技巧**：dBμ(相对1微瓦) > dBm(相对1毫瓦) > dBW(相对1瓦)，**相对值越小，dB数越大**。0.25W是中等功率，取54dBμ最合理。`,"../tips/A-634.md":`> 0.4kW → 86dBμ。换算：400W相对1μW，dBμ=10lg(4×10²/10⁻¹²)=86dBμ

| 单位 | 计算过程 | 结果 |
|------|--------|------|
| dBμ | 10lg(400/10⁻¹²)=10lg(4×10¹⁴) | **86dBμ** ✓ |
| dBm | 10lg(400/10⁻³)=26dBm | ✗ |
| 400dBm/6000dBm | 数值离谱 | ✗ |

**对比A-633**：功率增加（0.25W→400W），dB数增加（54dBμ→86dBμ）。**规律**：功率×10 ≈ dB数+10。每增加10倍功率，dB增加10dB。`,"../tips/A-635.md":`> 电源的四维定义：能量转换装置。化学电源(电池)、直流电源(变换器)、变压器(交流升降压)都是电源的具体形式。

| 电源类型 | 定义特征 | 应用 |
|---------|--------|------|
| **能量转换** | 将能→电能 | 所有电源通用 |
| **化学电源** | 化学能→电能 | 电池组供电 |
| **直流电源** | AC/DC→恒压恒流DC | 稳压电源、充电器 |
| **变压器** | AC升降压 | 交流供电改造 |

**全选题解析**：四个选项涵盖电源理论完整体系。A是定义，B、C、D是分类。注意**变压器属交流电源**，不改变频率，只改变电压/电流比。`,"../tips/A-636.md":`> **电动势方向**：电源**内部**，从**负极→正极**（逆着电流，像"泵"向上推水）

| 概念 | 方向 | 路径 |
|------|------|------|
| **电动势** | 负极→正极 | 电源**内部** |
| **电压** | 正极→负极 | 电源**外部** |

助记：**电动势是"源动力"，在内部反向推**，与外部电压方向**相反**。
`,"../tips/A-637.md":`> **电压方向**：电源**两端**，从**正极→负极**（顺着电流，高电位流向低电位）

| 概念 | 方向 | 记忆 |
|------|------|------|
| **电动势** | 负→正（内） | 逆流推动 |
| **电压** | 正→负（外） | 顺流而下 |

助记：**电压像"水往低处流"**，从高电位（正极）流向低电位（负极）。与A-636的电动势方向**完全相反**。`,"../tips/A-638.md":`> 业余电台常见外置电源：**开关电源、线性电源、蓄电池**，共三类。

| 选项 | 是否常见 | 说明 |
|------|----------|------|
| 开关电源 | 是 | 轻便高效，最常用 |
| 线性电源 | 是 | 纹波小，适合接收机 |
| 蓄电池 | 是 | 野外/应急备用 |
| **标准电池** | 否 | 精密参考电压源，非供电用途 |

**排除D**：标准电池是实验室电压基准，不是供电设备。
`,"../tips/A-639.md":`> 可充电电池：**锂离子、钠离子、铅酸**均可充电；**碱性干电池不可充电**。

| 电池类型 | 可充电 | 备注 |
|----------|--------|------|
| 锂离子 | 是 | 手机/对讲机常用 |
| 钠离子 | 是 | 新兴技术 |
| 铅酸 | 是 | 汽车/电台常用 |
| **碱性干电池** | 否 | 强行充电有爆炸风险 |

助记：**"锂钠铅"三金属都可充**，碱性干电池一次性用完即弃。
`,"../tips/A-64.md":`> B类在A类基础上新增 **HF <15W** 和 **LF <1W（e.i.r.p.）**，全部四选项均正确

| 频段 | B类权限 |
|------|----------|
| VHF/UHF | ≤25W（继承A类）|
| HF（<30MHz） | **<15W**（新增）|
| LF（低频） | **<1W e.i.r.p.**（新增）|

记忆：B类多了**短波小功率**和**极低频超微功率**，四个选项全对。
`,"../tips/A-640.md":`> 停电给12V铅酸充电：**并联汽车蓄电池，发动车辆**，由发动机提供电流。

**正确做法**：待充电池与汽车电池并联，启动车辆，发电机持续充电

| 错误选项 | 为何错误 |
|----------|----------|
| 加酸 | 破坏电解质平衡，危险 |
| 冰冻冷却 | 毫无依据，会损坏电池 |
| 串灯泡接220V | 电压远超12V，损坏或爆炸 |

助记：**汽车是移动充电站**，发动机带动发电机，正是铅酸蓄电池的标准充电场景。
`,"../tips/A-641.md":`> 蓄电池供电时长 = **安时数 ÷ 平均工作电流**（不用瓦时、电压、功率）

| 维度 | 正确公式 | 错误原因 |
|------|--------|--------|
| **正确** | 安时数 ÷ 平均电流 | 时间单位 |
| 错误B | 瓦时数 ÷ 发射功率 | 忽视接收耗电 |
| 错误C | 电压 ÷ 平均电流 | 电压恒定，无法估时 |

**助记**：Ah(安时) ÷ A(安培) = h(小时)，**单位推导法**最直接`,"../tips/A-642.md":`> 电源内阻**降低输出电压**，不改变电动势，通过欧姆损耗消耗功率

**关键对比**：
- 电动势ε：电源本身固定值，**不变**
- 输出电压U：U = ε - Ir（**因内阻r下降**）
- 输出功率：减少（内阻消耗功率）

**核心**：内阻相当于**串联阻力**，分压降低了终端电压`,"../tips/A-643.md":`> 反向并联大电流二极管利用**PN结单向导电性**；极性反接时二极管导通，大电流烧断熔丝保护

| 工作情景 | 二极管状态 | 结果 |
|---------|----------|------|
| **正常极性** | 反向偏置，截止 | 正常工作 |
| **极性反接** | 正向偏置，短路 | 烧断熔丝 |

**速记**：反向二极管 = **极性反接保险**，烧丝切断供电`,"../tips/A-644.md":`> 复位按钮是**过流保护**（A）+ **极性反接保护**（B），数字是触发温度或电压阈值

**多选陷阱**：
- ✓ A 过流时切断 
- ✓ B 极性反接时切断（配合反向二极管）
- ✗ C 数字 ≠ 温度触发（是电流/电压阈值）
- ✗ D 数字 ≠ 电压上限设定

**按钮功能**：热保护器+防反接，标数字是**动作电流**而非电压`,"../tips/A-645.md":`> 正负对称方波（占空比1:1）**平均值为零**，直流档测均值得**零值**

**波形分析**：
- 上半周期：+V × T/2
- 下半周期：-V × T/2
- 平均值：(+V - V)/2 = **0**

**直流档原理**：检测**均值**，不是峰值 → 结果为0`,"../tips/A-646.md":`> 磁电式交流档测方波：指针显示**大于峰值**（因方波含丰富谐波，有效值>峰值的0.707倍）

**关键对比**：
- 正弦波有效值 = 峰值 × 0.707
- **方波有效值** = 峰值 × **1.0**（占空比1:1时）
- 但磁电表响应**高频谐波**，读数 > 1.0×峰值

**陷阱**：勿混淆"有效值"与"谐波检测"`,"../tips/A-647.md":`> 最小值为0的方波（占空比1:1），直流档读数 = **峰值的1/2**，亦为**有效值**

**波形特性**：
- 上半周期：V
- 下半周期：0
- 平均值：V/2
- 有效值：√(V²/2) = V/√2 ≈ **0.707V**... 不对！

**重算**：Vrms = √[(V²×T/2 + 0²×T/2)/T] = V/√2，但**选项说是峰值1/2**
**正确理解**：占空比1:1，平均值V/2，恰好等于该方波的**均方根值**`,"../tips/A-648.md":`> 电阻档读数变大 → **电容充电完成**，电容两端阻抗从0(充电初期)→∞(充满)

| 时间阶段 | 电容状态 | 万用表读数 |
|---------|---------|----------|
| **0~秒** | 充电中，低阻 | **很小** |
| **继续测** | 充电渐满 | **逐渐增大** |
| **最终** | 充满，断路 | **很大** |

**陷阱**：电感会产生瞬时阻抗变化，但**趋势相反**（先大后小）`,"../tips/A-649.md":`> 电解电容检测用**指针式电阻档**（观察充放过程）或**数字电容档**，不能用电流档

**三种检测方法对比**：
| 方法 | 结果判定 | 可靠性 |
|------|--------|--------|
| 指针电阻档 | 表针摆动回零 | ✓ 优 |
| 数字电容档 | 直接显示 | ✓ 优 |
| 电流档 | 无法判断 | ✗ |
| 短路放电 | 危险 | ✗ |

**速记**：看**充电摆动**或**直接数值**判断`,"../tips/A-65.md":`> C类HF可达 **1000W**，且经批准可在特殊活动中超VHF **25W**限，四选项全对

| 频段 | C类权限 |
|------|----------|
| VHF/UHF | ≤25W（常规）|
| HF | **≤1000W**（顶配）|
| VHF特殊活动 | **>25W**（需批准）|

记忆：C类是**全频段顶级**，HF千瓦级，特殊场合还能临时破格。
`,"../tips/A-650.md":`> 表针摆动后回零，再测无反应 → **电解电容已放电**，首次测时内部电池给电容充电

**两次测量对比**：
| 测量 | 现象 | 原因 |
|------|------|------|
| **第一次** | 表针挥动回零 | 电容充电，电阻档有内置电池驱动 |
| **第二次** | 无指示 | 电容已充满，相当断路 |

**电解电容特征**：首次测呈现**充电过程**，再测呈现**开路**状态`,"../tips/A-651.md":`> 欧姆/伏(Ω/V)越大 → **输入阻抗越大** → **对电路影响越小**（分流越少）

**输入阻抗计算**：
- Rin = 每伏欧姆 × 量程(V)
- 例：20kΩ/V × 10V = 200kΩ
- Ω/V越大，分流越少，测量越准

**对比陷阱**：
- ✓ 大Ω/V = **低分流** = 影响小
- ✗ 与过载能力**无关**`,"../tips/A-652.md":`> 数字表直流档测音频信号读数非零且**极性反转** → 信号中**叠加直流分量**

**信号分解**：
- 纯AC音频：平均值=0，数字表读0
- AC+直流：平均值≠0，**读数反映DC成分**
- 交换表笔：DC极性反转，读数反向

**陷阱排除**：
- 谐波 → 不影响直流平均值
- 频率响应差 → 数字表频率范围宽，不是主因
- 分布电容 → 影响AC耦合，不影响DC检测`,"../tips/A-653.md":`> 发射设备必须符合：**频率容限**和**杂散域发射功率**两项国家规定指标

| 指标 | 含义 | 重要性 |
|------|------|--------|
| 频率容限 | 中心频率偏离指配频率的最大容许偏差 | 保证频道纯正 |
| 杂散域发射功率 | 必要带宽外的发射电平不超限值 | 防止干扰他频 |

**关键对比**：B项涉及调制参数（非必须规定），C项"带外发射"是杂散的分类，D项涉及频段分配而非设备指标。`,"../tips/A-654.md":`> 业余电台发射设备两大必须指标：**频率容限符合**+**杂散发射不超限值**

| 必须满足 | 说明 |
|---------|------|
| 频率容限 | 中心频率不偏离指配频率 |
| 杂散发射最大允许功率 | 必要带宽外电平受限（不是"不低于"） |

**陷阱识别**：B项"不低于限值"逻辑错误（应是"不超过"），C项频率漂移要求不是必须，D项带宽过宽反而不好。`,"../tips/A-655.md":`> 频率容限=**中心频率与指配频率的最大容许偏差**，两个等效表述

| 表述A | 表述B |
|-------|-------|
| 所占频段中心频率偏离指配频率 | 特征频率偏离参考频率 |
| **同义词理解** | **参考频率=指配频率** |

**排除法**：C项"偏离最高频率"无实际意义，D项"必要频率"概念混淆。**核心点**：中心频率与指配频率对标，单位通常ppm或Hz。`,"../tips/A-656.md":`> 频率容限用**相对单位**表示：百万分之几(ppm)或绝对单位**赫兹(Hz)**

| 单位 | 性质 | 是否正确 |
|------|------|--------|
| 百万分之几(ppm) | 相对单位 | ✓ A |
| 赫兹(Hz) | 绝对单位 | ✓ B |
| 百分之几(%) | 相对单位但不规范 | ✗ C |
| 兆赫(MHz) | 绝对单位但量级大 | ✗ D |

**速记**："容限用**ppm和Hz**"——百万分比(相对)或具体频率差(绝对)`,"../tips/A-657.md":`> 杂散域发射功率用**绝对(dBm)和相对(dBc/dB)**三种单位表示

| 单位 | 含义 | 是否正确 |
|------|------|--------|
| dBm | 绝对功率(相对1mW) | ✓ A |
| dBc | 低于**载波**功率的分贝 | ✓ B |
| dB | 低于**PEP**功率的相对值 | ✓ C |
| 瓦(W) | 绝对功率线性单位 | ✗ D |

**速记**："杂散三兄弟dBm、dBc、dB"——绝对功率用dBm；相对用dBc(vs载波)和dB(vs PEP)。**不用瓦**做单位。

**对比A-656**：频率容限用ppm/Hz；杂散功率用dBm/dBc/dB——都用**相对单位优先**`,"../tips/A-658.md":`> 杂散发射=**必要带宽外的发射**，包括4类：谐波、寄生、互调、变频

| 分类 | 属于杂散 | 说明 |
|------|--------|------|
| 谐波发射 | ✓ | 基波整数倍频 |
| 寄生发射 | ✓ | 不期望的振荡 |
| 互调产物 | ✓ | 多信号混频 |
| 变频产物 | ✓ | 混频过程产生 |
| 带外发射 | ✓ | 杂散的总称 |

**A+B+C正确**，D项"带外发射"包含范围过小（不含互调）。`,"../tips/A-659.md":`> 专用设备三项指标：**频率容限符合**、**杂散辐射不超限**、**频率不超出规定范围**

| 指标 | 要求 | 备注 |
|------|------|------|
| 频率容限 | 必须符合（不是"不低于"） | 防止频率偏移 |
| 杂散辐射 | 不超过限值 | 防止干扰 |
| 频率范围 | 不超出业余/卫星业余频段 | 严格守法 |

**陷阱**：B项"不低于限值"反向错误，C项"包括"变成不设限，D项功率要求非核心指标。`,"../tips/A-66.md":`> 超功率限值需**颁发执照的管理机构批准**；特殊活动临时操作仅限**C类**持照者

| 类别 | 可参与特殊超限活动 |
|------|-------------------|
| A类 | ✗ |
| B类 | ✗ |
| **C类** | **✓（经批准）** |

记忆：超限=**找发证机构审批**；临时破格只给**C类顶级选手**。
`,"../tips/A-660.md":`> 减幅波辐射（衰减振荡）由**接触点打火**产生，典型的非通信干扰源

| 产生机制 | 示例 | 是否减幅波 |
|---------|------|-----------|
| 接触点打火（机械火花） | 电路断接、继电器 | **✓是** |
| 本振泄漏 | 电视机、收音机 | ✗否（射频信号） |
| 高频加热泄漏 | 医疗设备 | ✗否（高频泄漏） |
| 对讲机按键 | 通信设备 | ✗否（正常发射） |

**减幅波特征**：火花产生的**阻尼振荡**，频谱宽，干扰强，是EMI整治重点。`,"../tips/A-661.md":`> 免管理看**功率门槛**，3MHz为分界：低频300W、高频100W

| 频率范围 | 免管ERP门槛 |
|---|---|
| 0.1~3 MHz | 小于 **300 W** |
| 3 MHz~300 GHz | 小于 **100 W** |

助记：**低频宽松，高频严格**。C/D选项说30MHz以下/以上全部免管，业余电台不存在整体豁免。`,"../tips/A-662.md":`> **公众曝露** = 公众所受**全部**电场、磁场、电磁场照射，不限职业或医疗场合

- 核心词：**全部**（不分来源、不分场合）
- B 职业照射：仅限工作场所
- C/D 医疗照射：仅限医学目的
- 口诀：**公众 = 所有人 + 所有场合 + 所有电磁场**
`,"../tips/A-663.md":`> 限值随频率变化，根本原因：**人体对特定波长吸收率更高**，而非能量高低

- SAR（比吸收率）与频率相关，某些频段人体组织吸收效率最高
- 低频穿透力反而强，不是不穿透
- 频率越高光子能量越高，低频能量更高是错的
- 核心：**生物效应看吸收效率，不看频率高低**
`,"../tips/A-664.md":`> 自制/改装设备：**符合标准 + 可免费检测 + 仍受监管**，D选项免于监管是错的

| 要点 | 结论 |
|---|---|
| 技术标准 | GB/T 32658-2016 + GB/T 16946-2017 |
| 检测费用 | 无线电管理机构**免费**检测 |
| 监管豁免 | **不可以**，自制不等于免管 |

助记：**两标准 + 免费测 + 仍受管**
`,"../tips/A-665.md":`> VHF/UHF 无线电波 = **非电离辐射**，能量不足以打掉电子

| 类别 | 典型辐射 |
|---|---|
| 非电离辐射 | 无线电波、微波、可见光 |
| 电离辐射 | X射线、γ射线、α粒子 |

助记：**无线电 = 非电离**，α和γ是核辐射，与业余无线电无关
`,"../tips/A-666.md":`> 传统防雷装置三要素：**接闪器（避雷针）、引下线、接地体**

| 组成部分 | 功能 |
|---------|------|
| 接闪器（避雷针） | 接收雷电 |
| 引下线 | 导向雷电 |
| 接地体 | 泄入大地 |

**速记**：接-引-接（**接地**是关键），ABC选项中只有A全对。B选项混淆，C/D选项用了错误保护件。`,"../tips/A-667.md":`> 防雷接地核心功能：**把雷击电流有效泄入大地**

**工作原理**：
- 接闪器 → 接收雷电 → 引下线 → 接地体 → **大地泄放**
- **关键词**：有效泄放，不是阻断、不是启动、不是烧断

**对比错项**：B项混淆（启动过压保护），C项反向（阻断电流），D项错误（烧断熔丝）`,"../tips/A-668.md":`> 防雷接地基本要求：**单独接地体、低阻、短粗引下线**

| 要求 | 说明 | 误区 |
|------|------|------|
| 独立接地体 | 专用，不共用 | ❌自来水管 |
| 低接地电阻 | 泄放快速 | ❌零线已接地 |
| 短而粗 | 导线阻抗小 | ❌细导线可用 |

**速记**：B项（自来水管可用）、C项（零线代替）、D项（细导线）均违反基本原则。`,"../tips/A-669.md":`> 单支避雷针保护范围：**60米半径滚球曲线空间**

**关键概念**：
- 不是简单半径30米❌
- 不是固定半球体❌
- **滚球法**：以避雷针顶点至地面为中心轴，60米为半径做滚球，球体扫过的空间受保护
- 适用于**一般建筑物**（高层另有规范）`,"../tips/A-67.md":`> 未成年人：**A类或B类**均可申请 VHF **≤25W**，但**不能申请HF（短波）**

| 持证类型 | VHF ≤25W | HF |
|----------|----------|---------|
| A类 | ✓ | ✗ |
| B类 | ✓ | ✗ |

记忆：未成年人只玩**高频小功率**（VHF/UHF 25W），短波HF对未成年人不开放。
`,"../tips/A-670.md":`> 天线接地最佳导体：**镀银软铜丝编织扁带**

| 选项 | 优点 | 缺点 |
|------|------|------|
| A镀银扁带 | ✓软、宽面积大、导电性好、抗氧化 | |
| B铜包钢单股 | 机械强度高 | ❌刚硬，不易弯折 |
| C双绞线 | 屏蔽效果好 | ❌细，接地专用不合适 |
| D同轴电缆 | 用途专用 | ❌非接地导体 |

**速记**：扁带形状便于贴墙/塔架，面积大。`,"../tips/A-671.md":`> 同轴馈线避雷器接地：**所有地线接同一金属条带，统一接室外接地**

**错误做法**：
- ❌B项：发信时断开开关（破坏接地连续性，反而危险）
- ❌C项：每个避雷器单独地线（易形成多点接地，产生环流）
- ❌D项：自制氖灯/气体管（效能不稳定，DIY不可靠）

**原理**：统一接地路径 → 低阻 → 快速泄放雷电和EMI`,"../tips/A-672.md":`> 铁塔防雷接地有效措施：**接地连接短而直**

| 措施 | 评价 | 理由 |
|------|------|------|
| A短而直 | ✓有效 | 降低阻抗和电感，快速泄放 |
| B直角弯 | ❌无效 | 整洁≠有效，弯曲增加阻抗 |
| C防水处理 | ❌非重点 | 接地装置本身不怕水 |
| D远离塔 | ❌反向 | 应靠近，缩短路径 |

**关键**：**最短路径**是防雷接地黄金法则。`,"../tips/A-673.md":`> GB/T 3805 潮湿条件握持带电体：交流 **16V** (r.m.s.)，直流 **33V**

| 环境 | 交流限值 | 直流限值 |
|---|---|---|
| **潮湿** | **16 V** | **33 V** |
| 干燥正常 | 25 V | 60 V |

助记：**潮湿危险，限值更低；16交33直**。记法：16乘2约等于33，直流约是交流峰值。
`,"../tips/A-674.md":`> 射频电压vs工频电压：**致死风险下降，灼伤风险上升**

| 电压类型 | 主要伤害 | 机制 |
|---------|--------|------|
| 工频50Hz | 心脏纤维颤动 | 低频穿过心脏 |
| 射频(LF+) | 皮肤灼伤、深层组织伤害 | 高频在表面热损伤 |

**速记**：射频**皮肤烧伤**显著，心脏风险相对低；工频**致命**但灼伤少。工频更危险整体来看❌，但题目强调的是灼伤风险上升✓`,"../tips/A-675.md":`> 同电压不同频率的安全威胁排序：**工频 > HF > UHF**

| 频率 | 安全等级 | 原因 |
|------|--------|------|
| 工频(50Hz) | 🔴最危险 | 低频穿过心脏，易致命 |
| HF(3-30MHz) | 🟡中等危险 | 部分透体，灼伤为主 |
| UHF(300MHz+) | 🟢较低风险 | 高频表皮效应，浅层灼伤 |

**记忆法**：**频率越高越浅表**，工频最穿透最致命。`,"../tips/A-676.md":`> 带电检修市电设备安全操作：**双脚绝缘、单手操作、另手不触金属**

**金科玉律**：
- ✓A项：形成**单路径**，电流不穿心脏
- ❌B项：用另手触金属探测（造成双手跨路径，电流穿心脏）
- ❌C项：接地不意味着无风险（漏电仍可致命）
- ❌D项：绝缘与否不相关（大谬）

**原理**：心脏部位不能成为电流通路 → **单手单脚**策略`,"../tips/A-677.md":`> 外壳带电预防措施（多选）：A✓ B✓ C✓ D✗

| 措施 | 有效性 | 说明 |
|------|--------|------|
| A接地线连公共地 | ✓必须 | 交流市电设备基本要求 |
| B漏电保护器 | ✓必须 | 快速切断，防护层次 |
| C三线插头验证 | ✓必须 | 确认接地导通有效 |
| D自来水管接地 | ❌错误 | 非一劳永逸，管道可能绝缘化 |

**速记**：A/B/C是标准做法，D虽便利但不可靠。`,"../tips/A-678.md":`> 断电后仍有风险：**高压电容器可导致电击**

**隐藏威胁排序**：
1. 🔴**充电电容器**：即使断电仍带高压，可致命电击 ✓A正确
2. ❌地磁激起高压（B项：无此物理现象）
3. ❌打开机箱烧断保险丝（C项：保险丝与打开无因果）
4. ❌静电损坏接地系统（D项：逻辑反向）

**安全操作**：维修前先**放电电容**（用绝缘棒短接）`,"../tips/A-679.md":`> 220V自制设备最基本安全措施：**火线串联保险丝**，过流时熔断保护

- 保险丝串联在火线：短路/过载熔断，切断回路
- 并联电压表：不起保护作用
- 串联电感：阻抗不能保护
- 并联电容：危险，储能后放电
- 助记：**火线 + 串联 + 保险丝** = 最基本三要素
`,"../tips/A-68.md":`> 四点全正确：题库由**国家无线电管理机构**制定、提前公告、合格颁证、**不收费**

| 要点 | 内容 |
|------|------|
| 题库制定 | **国家**无线电管理机构 |
| 验证公告 | 提前向社会公布 |
| 证书颁发 | 合格后由管理机构颁发 |
| 费用 | **不得收费** |

记忆：全国统一命题，公开透明，**零收费**。
`,"../tips/A-680.md":`> 自制设备安全三要素：**三芯接地 + 泄放电阻 + 联动开关**，喷水灭火绝对禁止

| 措施 | 作用 | 对错 |
|---|---|---|
| 三芯线+金属机箱接地 | 漏电保护 | A正确 |
| 高压滤波电容并联泄放电阻 | 断电后自动释放高压 | B正确 |
| 功放机箱联动开关 | 开箱自动断市电 | C正确 |
| 安装喷淋装置 | 水导电，电气火灾禁止用水 | D错误 |

助记：**D喷水=导电送电，电气火灾用干粉或CO2**
`,"../tips/A-681.md":`> 铅酸蓄电池通风不良→**氢气聚集**→爆炸风险，这是主要隐患

| 风险类型 | 原因 | 防控措施 |
|--------|------|--------|
| **爆炸性气体** | 充放电产生H₂，通风差积聚 | 保持良好通风 |
| 触电 | 12V低压相对安全 | 非主要风险 |
| 自燃 | 需极端条件 | 不是主因 |

**核心速记**：铅酸电池+**通风不良** = **H₂爆炸**。类比：煤矿瓦斯爆炸原理相同。`,"../tips/A-682.md":`> 充放电**过快**→电池**过热**→**释放H₂气体**→爆炸风险

| 过程 | 现象 | 后果 |
|-----|------|------|
| **快速充电** | 温度↑，产气速率↑ | H₂积聚爆炸 |
| **快速放电** | 内阻发热 | 同上 |
| 正常速率 | 温度控制 | 安全 |

**助记**：速度快→热量多→气体多→**爆炸**。反极/记忆效应都不会产生气体爆炸。`,"../tips/A-683.md":`> 电气火灾三步：**切断电源**→**CO₂/干粉灭火器**→绝不用水

| 灭火剂 | 电气火灾适用性 | 理由 |
|------|--------|------|
| **CO₂/干粉** | ✓ 推荐 | 不导电，安全 |
| **泡沫** | ✗ 禁用 | 含水导电 |
| **水** | ✗ 禁用 | 导电触电风险 |
| **干砂** | △ 应急 | 不推荐标准方案 |

**关键步骤**：①**立即断电** ②选CO₂或干粉 ③绝对禁水。记住："**电火不用水，干粉救你急**"`,"../tips/A-69.md":`> 旧办法颁发的B类证书按**旧规**执行：HF **≤100W**（远高于新B类<15W），高频段≤25W不变；旧证**仍然有效**

| 对比 | HF功率 | VHF/UHF |
|------|--------|---------|
| 新B类 | <15W | ≤25W |
| **旧B类** | **≤100W** | ≤25W |

记忆：旧B类持证人**按旧规保留HF 100W权限**，新法不溯及既往，旧证不失效。
`,"../tips/A-7.md":`> **分配**：频率/频道→部门（指定区域），规定条件下供某业务使用。中间层级，针对「部门+区域」。

| 层级 | 操作对象 | 针对谁 | 关键词 |
|------|---------|--------|--------|
| 划分 | **频段** | 业务类型 | 入表、业务 |
| **分配** | **频率/频道** | **部门+区域** | **部门、区域** |
| 指配 | 频率/频道 | 具体电台 | 电台、批准 |

助记：**分**配是「**分**给部门」——一个或多个**部门**在**指定区域**使用。
`,"../tips/A-70.md":`> 呼号发送三时机：**建立/结束**时必发，通信中每**≤10分钟**发一次，鼓励**自动发送**。

不得用姓名、代号、别名或部分字母数字替代**完整呼号**（选项D为陷阱）。
`,"../tips/A-71.md":`> 执照与呼号**同时核发**，颁照即给号，无需二次单独申请。

流程：**无线电管理机构**审批 → 颁发执照 + 同时核发呼号，一步到位，没有先照后号再申请的流程。
`,"../tips/A-72.md":`> 已有普通业余台呼号 → 再申请**不再核发**新呼号，一人一号原则。

| 已有呼号类型 | 再设台结果 |
|---|---|
| 中继台/信标台呼号 | 可核发新普通呼号 |
| 其他普通业余台呼号 | **不再核发** |
`,"../tips/A-73.md":`> 停用须**依法注销**；普通台注销**满1年**后可重新分配，中继/信标台不可重新分配。

| 台类 | 注销后重新分配 |
|---|---|
| 普通业余台 | 注销1年后可分配 |
| 中继台/信标台 | 永久不再分配 |
`,"../tips/A-74.md":`> 注销后重新申请设台 → 核发**原注销呼号**，不是新号。

口诀：旧号注销再申请，**原号归还**不换新。前提：该呼号注销后尚未被重新分配给他人。
`,"../tips/A-75.md":`> 借台操作可用**台站呼号**或**操作人自己的呼号**，两者均合法。

若使用**操作人自己呼号**，格式须符合国内外规定；不存在只能用台站呼号的限制，选CD均是错误说法。`,"../tips/A-76.md":`> 临时借用他人呼号三条件：①**比赛/重大活动** ②**主办方报国家局批准** ③**符合国际规则**。

关键：必须报**国家**无线电管理机构批准，地方局审批不够；三个条件缺一不可。
`,"../tips/A-77.md":`> 呼号四段：**前缀**-**种类**-**分区**-**后缀**，依次对应第1-2-3-4部分。

| 部分 | 名称 |
|---|---|
| 第1部分 | 呼号前缀 |
| 第2部分 | 电台种类 |
| 第3部分 | 分区编号 |
| 第4部分 | 呼号后缀 |
`,"../tips/A-78.md":`> 中国前缀是**单字母B**（ITU分配），不是BA，不是A。

前缀仅**一位字母** = B。拆解呼号BA4TB：**B**=前缀，**A**=种类（普通台），**4**=分区，**TB**=后缀。`,"../tips/A-79.md":`> 种类字母：普通台用**G/H/I/D/A/B/C/E/F/K/L**（11个），空间台**J**，中继/信标台**R**，其余国家保留。

| 字母 | 台类 |
|---|---|
| G/H/I/D/A/B/C/E/F/K/L | 一般业余台 |
| **J** | 空间业余台 |
| **R** | 中继台/信标台 |
| S/T/Y/Z等 | 国家保留 |
`,"../tips/A-8.md":`> **指配**：频率/频道→具体无线电台，批准其在规定条件下使用。最微观，针对「单个电台」。

| 层级 | 操作对象 | 针对谁 | 关键词 |
|------|---------|--------|--------|
| 划分 | 频段 | 业务类型 | 入表、业务 |
| 分配 | 频率/频道 | 部门+区域 | 部门、区域 |
| **指配** | **频率/频道** | **具体电台** | **批准、电台** |

助记：**指**配是「**指**定给某台」——**指**着某部电台说「这个频率批准你用」。三级顺序：**划→分→指**，从宏观到具体。
`,"../tips/A-80.md":`> 分区编号为**一位数字**；空间业余台固定分区号为**1**，不是2。

普通台分区1-9区分地域；空间台统一用**1**，全国只有一个空间分区。选C正确，选D（分区号为2）是陷阱。
`,"../tips/A-81.md":`> 后缀：**1-4位字母或字母+数字**；1位/4位/含数字的**国家保留**；禁用QOA-QUZ/SOS/XXX/TTT。

注意：后缀是字母或字母+数字，**纯数字后缀不合规**；QOA-QUZ与Q码冲突，SOS/XXX/TTT为遇险信号，禁用。`,"../tips/A-82.md":`> 省级核发顺序：种类按**G→L**字母序，后缀按**双字母→三字母**序；各省前缀**相同**（均B），分区号**各省不同**。

易错：D选项分区号都相同是陷阱——北京1区、广东4区，各省分区不同；但前缀都是B（相同）。
`,"../tips/A-83.md":`> 对呼号不满意**不可申请更换**，已核发即终身使用，任何理由均不另行核发。

无论更新台类、执照续期还是缴费均不例外。记忆：**一执照一呼号**，颁发即绑定，不换不退。
`,"../tips/A-84.md":`> 呼号前后缀可用范围由**国家无线电管理机构**统一编制分配，地方局无权自定。

权限链：**国家局**编制分配 → 各省局按序核发；地方局、民间组织、爱好者均无分配权。
`,"../tips/A-85.md":`> 呼号发送三个节点：**建立时**、**结束时**、**每10分钟**各发一次

| 时机 | 是否发送 | 备注 |
|------|--------|------|
| 通信建立时 | ✓ 必须 | 主动报出 |
| 通信结束时 | ✓ 必须 | 主动报出 |
| 每10分钟 | ✓ 必须 | 过程中间 |
| 自造呼号 | ✗ 禁止 | 不可补充 |

**关键**：三个必须发送节点缺一不可，绝对不能自造呼号。选项D是明显的错误陷阱——业余电台呼号是由CRAC核配的，不可自造。`,"../tips/A-86.md":`> 业余电台呼号四部分构成：**前缀+种类+分区+后缀**组成完整标识

| 组成部分 | 含义 | 示例 |
|---------|------|------|
| 呼号前缀 | 国家识别 | BG/BA/BD等 |
| 电台种类 | 用途类别 | 7=业余 |
| 分区编号 | 地理区域 | 01-09 |
| 呼号后缀 | 个人编号 | AAA/ZZZ等 |

**记忆**：完整呼号如"BG7ABC"，BG是前缀，7是种类，0-9间任一数字是分区，ABC是后缀。四部分都是规范配置，缺一不完整。`,"../tips/A-87.md":`> 完整呼号**必须始终使用**，任何情况下都不能用后缀替代

**核心规则**：《业余无线电台管理办法》明确要求**建立和结束通信时主动发送完整呼号**。选项B、C、D都试图绕过这一要求，都是违规的。

**易错点**：即使是"相识友台""本地频段""国内DX"等情景，都**无例外**地必须使用完整呼号。这是法规底线，不存在任何灵活情况。记住：**绝对禁止**用后缀、地区码等不完整形式代替。`,"../tips/A-88.md":`> 地区码+后缀**不是合法呼号**，无标识意义，必须使用完整呼号

**否定原因**：
- 不完整表述 → **无标识意义**
- 无法唯一确定电台身份
- 不符合法规要求

**对比陷阱分析**：
- B项（熟悉友台可用）→ **错**，熟悉度不改变法规
- C项（VHF/UHF可用）→ **错**，频段不影响呼号要求  
- D项（国内可用DX不可）→ **错**，通联方式不改变规则

**牢记**：无论何种场景（友台/频段/国内/DX），都**只能使用完整呼号**，部分呼号永远非法。`,"../tips/A-89.md":`> **1区 = 北京**，首都独占1号，全国只有它一个

| 分区 | 省市 | 记忆 |
|------|------|------|
| **1** | 北京 | 首都，独一无二 |

**易错**：上海是4区，不是1区。**"1号老大是首都"**，北京排第一，单独成区。
`,"../tips/A-9.md":`> 频率划分表中多种业务共享同一频段时，分为**主要业务**和**次要业务**两类。

| 类别 | 地位 | 含义 |
|------|------|------|
| **主要业务** | 优先 | 受保护，不受次要业务干扰 |
| **次要业务** | 从属 | 不得对主要业务造成有害干扰 |

助记：答案排除法——业余/非业余是**用户属性**，民用/军用是**管理属性**，安全/一般是**用途属性**，只有**主要/次要**是**优先级属性**，符合国际电联频率划分逻辑。
`,"../tips/A-90.md":`> **2区 = 东北三省**：黑龙江、吉林、辽宁，干扰项广东是7区

| 分区 | 省份 | 简称 |
|------|------|------|
| **2** | 黑龙江、吉林、辽宁 | 黑吉辽 |

**速记**："**二（2）人同行走东北**，黑吉辽三兄弟"。广东是干扰项，广东属7区。
`,"../tips/A-91.md":`> **3区 = 华北四省市**：天津、内蒙古、河北、山西，环绕首都的一圈

| 分区 | 省市 | 简称 |
|------|------|------|
| **3** | 天津、内蒙古、河北、山西 | 津蒙冀晋 |

**速记**："**三（3）围北京**"，天津、河北、山西、内蒙古将北京（1区）团团围住，共4个，是唯一4个答案全对的多选题。`,"../tips/A-92.md":`> **4区 = 沪鲁苏**：上海、山东、江苏，干扰项海南是7区

| 分区 | 省市 | 简称 |
|------|------|------|
| **4** | 上海、山东、江苏 | 沪鲁苏 |

**速记**："**四（4）区华东北**，沪鲁苏"。**上海是4区不是1区**，这是最常见误区。海南是干扰项，海南属7区。
`,"../tips/A-93.md":`> **5区 = 浙赣闽**：浙江、江西、福建，干扰项广西是7区

| 分区 | 省份 | 简称 |
|------|------|------|
| **5** | 浙江、江西、福建 | 浙赣闽 |

**速记**："**五（5）区东南三省**，浙赣闽"。广西是干扰项，广西属7区，与广东同区。与4区（沪鲁苏）对比：4区华东北，5区华东南。
`,"../tips/A-94.md":`> **6区 = 皖豫鄂**：安徽、河南、湖北，干扰项四川是8区

| 分区 | 省份 | 简称 |
|------|------|------|
| **6** | 安徽、河南、湖北 | 皖豫鄂 |

**速记**："**六（6）区中部三省**，皖豫鄂"。四川是干扰项，四川属8区西南。武汉（湖北）、郑州（河南）、合肥（安徽）连成中部走廊。
`,"../tips/A-95.md":`> **7区 = 湘粤桂琼**：湖南、广东、广西、海南，华南四省区

| 分区 | 省区 | 简称 |
|------|------|------|
| **7** | 湖南、广东、广西、海南 | 湘粤桂琼 |

**速记**："**七（7）下华南**，湘粤桂琼"。注意**广东广西同在7区**，海南也是7区（不是4区）。共4个答案全对。
`,"../tips/A-96.md":`> **8区 = 川渝黔滇**：四川、重庆、贵州、云南，西南四省市

| 分区 | 省市 | 简称 |
|------|------|------|
| **8** | 四川、重庆、贵州、云南 | 川渝黔滇 |

**速记**："**八（8）仙过海走西南**，川渝黔滇"。**重庆是8区**，不单独成区。共4个答案全对。
`,"../tips/A-97.md":`> **9区 = 陕甘宁青**：陕西、甘肃、宁夏、青海，西北四省区

| 分区 | 省区 | 简称 |
|------|------|------|
| **9** | 陕西、甘肃、宁夏、青海 | 陕甘宁青 |

**速记**："**九（9）曲黄河西北行**，陕甘宁青"。黄河流经这四省区，共4个答案全对。与0区（新藏）区分：新疆西藏是最西最远的0区。
`,"../tips/A-98.md":`> **0区 = 新藏**：新疆、西藏，最偏远的边疆两区，干扰项上海是4区、重庆是8区

| 分区 | 省区 | 记忆 |
|------|------|------|
| **0** | 新疆、西藏 | 边疆 |

**速记**："**零（0）人区边疆**，新疆西藏远"。0代表最远最边疆，只有2个省区。**上海=4区，重庆=8区**，均为易混淆干扰项。`,"../tips/A-99.md":`> 设置业余电台的**法定步骤**：向无线电管理机构申请→取得执照（不是协会批准）

| 步骤 | 正确做法 | 错误做法 |
|------|--------|--------|
| 申请机构 | **无线电管理机构** | 协会/居委会 |
| 依据文件 | 《业余电台管理办法》 | 协会章程 |
| 必须文件 | **业余电台执照** | 协会同意函 |

**关键点**：法定渠道是**政府无线电管理部门**，不是民间组织。执照是合法性唯一凭证。`}),sC={};for(let[e,t]of Object.entries(oC)){let n=e.replace(`../tips/`,``).replace(`.md`,``);sC[n]=t}function cC(e){return sC[e]??null}function lC(){let[e]=Rn(),t=ut(),n=e.get(`category`)??void 0,r=e.get(`shuffle`)===`1`,i=e.get(`id`)??void 0,a=e.get(`untried`)===`1`,[o,s]=(0,S.useState)([]),[c,l]=(0,S.useState)(0),[u,d]=(0,S.useState)([]),[f,p]=(0,S.useState)(!1),[m,h]=(0,S.useState)(Date.now()),[g,_]=(0,S.useState)(!1),[v,y]=(0,S.useState)(!1),[b,x]=(0,S.useState)(``),[C,w]=(0,S.useState)(``),T=(0,S.useRef)(null);(0,S.useEffect)(()=>{async function e(){let e;if(i){let t=await za.questions.get(i);e=t?[t]:[]}else e=n?await za.questions.where(`category`).equals(n).toArray():await za.questions.toArray();if(a&&!i){let t=new Set(await za.records.orderBy(`questionId`).uniqueKeys());if(e=e.filter(e=>!t.has(e.id)),e.length===0){_(!0),s([]);return}}_(!1),s(r?ia(e):e),l(0),d([]),p(!1),h(Date.now())}e()},[n,r,i,a]);let E=o[c],ee=(0,S.useCallback)(e=>{E&&(E.type===`single`?d([e]):d(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]))},[E]),D=(0,S.useCallback)(async()=>{if(!E||u.length===0)return;p(!0);let e=E.answer_keys.length===u.length&&E.answer_keys.every(e=>u.includes(e)),t={questionId:E.id,timestamp:Date.now(),isCorrect:+!!e,mode:`practice`,selectedAnswers:u,timeSpent:Date.now()-m};await za.records.add(t),await Ua(E.id,e)},[E,u,m]),te=()=>{l(e=>e+1),d([]),p(!1),h(Date.now())},ne=()=>{l(e=>e-1),d([]),p(!1),h(Date.now())},re=()=>{x(``),w(``),y(!0),setTimeout(()=>T.current?.focus(),50)},ie=()=>{let e=b.trim(),t=o.findIndex(t=>t.id.toLowerCase()===e.toLowerCase());if(t!==-1){l(t),d([]),p(!1),h(Date.now()),y(!1);return}let n=parseInt(e);if(!isNaN(n)&&n>=1&&n<=o.length){l(n-1),d([]),p(!1),h(Date.now()),y(!1);return}w(`找不到题目「${e}」，请输入序号（1–${o.length}）或题号如 A-12`)},ae=n=>{let r=new URLSearchParams(e);n?r.set(`untried`,`1`):r.delete(`untried`),t(`/practice?${r.toString()}`,{replace:!0})};if(g)return(0,F.jsxs)(`div`,{className:`mx-auto max-w-2xl px-4 py-12 text-center space-y-4`,children:[(0,F.jsx)(`p`,{className:`text-2xl font-bold`,children:`🎉 全部练习过了！`}),(0,F.jsxs)(`p`,{className:`text-muted-foreground`,children:[n?decodeURIComponent(n).split(`.`).pop():`全部题目`,`已全部做过，取消筛选继续练习。`]}),(0,F.jsxs)(`div`,{className:`flex gap-3 justify-center`,children:[(0,F.jsx)(`button`,{onClick:()=>ae(!1),className:`rounded-lg border px-4 py-2 text-sm hover:bg-muted`,children:`显示全部题目`}),(0,F.jsx)(`button`,{onClick:()=>t(`/`),className:`rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90`,children:`返回首页`})]})]});if(o.length===0)return(0,F.jsx)(`div`,{className:`flex h-full items-center justify-center p-8 text-muted-foreground`,children:`加载中…`});if(c>=o.length)return(0,F.jsxs)(`div`,{className:`mx-auto max-w-2xl px-4 py-12 text-center space-y-4`,children:[(0,F.jsx)(`p`,{className:`text-2xl font-bold`,children:`本轮练习完成！`}),(0,F.jsxs)(`p`,{className:`text-muted-foreground`,children:[`共 `,o.length,` 题`]}),(0,F.jsxs)(`div`,{className:`flex gap-3 justify-center`,children:[(0,F.jsxs)(`button`,{onClick:()=>{l(0),d([]),p(!1)},className:`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-muted`,children:[(0,F.jsx)(Sr,{className:`h-4 w-4`}),` 重新开始`]}),(0,F.jsx)(`button`,{onClick:()=>t(`/`),className:`rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90`,children:`返回首页`})]})]});let oe=cC(E.id),se=f&&!!oe;return(0,F.jsxs)(`div`,{className:`mx-auto max-w-5xl px-4 py-4 space-y-4`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between text-sm text-muted-foreground`,children:[(0,F.jsxs)(`button`,{onClick:()=>t(-1),className:`flex items-center gap-1 hover:text-foreground`,children:[(0,F.jsx)(dr,{className:`h-4 w-4`}),n?decodeURIComponent(n).split(`.`).pop():i?`单题练习`:`全部题目`]}),(0,F.jsxs)(`span`,{children:[c+1,` / `,o.length]})]}),!i&&(0,F.jsxs)(`label`,{className:`flex items-center gap-2 text-sm text-muted-foreground cursor-pointer select-none w-fit`,children:[(0,F.jsx)(`input`,{type:`checkbox`,checked:a,onChange:e=>ae(e.target.checked),className:`h-4 w-4 rounded border-muted-foreground/40 accent-primary`}),`只做未练习`]}),(0,F.jsxs)(`div`,{className:`flex gap-6 items-start`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col gap-4 min-w-0 flex-1`,children:[(0,F.jsx)(Ja,{question:E,selected:u,onSelect:ee,submitted:f,index:c,total:o.length}),(0,F.jsxs)(`div`,{className:`flex gap-3`,children:[(0,F.jsxs)(`button`,{onClick:ne,disabled:c===0,className:`flex-1 rounded-lg border py-3 text-sm disabled:opacity-40 hover:bg-muted`,children:[(0,F.jsx)(dr,{className:`inline h-4 w-4`}),` 上一题`]}),(0,F.jsx)(`button`,{onClick:re,className:`rounded-lg border px-4 py-3 text-sm hover:bg-muted`,title:`跳转到指定题目`,children:(0,F.jsx)(yr,{className:`h-4 w-4`})}),f?(0,F.jsxs)(`button`,{onClick:te,className:`flex-1 rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90`,children:[`下一题 `,(0,F.jsx)(fr,{className:`inline h-4 w-4`})]}):(0,F.jsx)(`button`,{onClick:D,disabled:u.length===0,className:`flex-1 rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground disabled:opacity-40 hover:bg-primary/90`,children:`提交答案`})]})]}),(0,F.jsx)(`div`,{className:`hidden lg:block overflow-hidden shrink-0 sticky top-4`,style:{width:se?`380px`:`0`,opacity:+!!se,transition:`width 0.3s ease, opacity 0.3s ease`},children:oe&&(0,F.jsx)(aC,{tip:oe})})]}),se&&oe&&(0,F.jsx)(`div`,{className:`lg:hidden`,children:(0,F.jsx)(aC,{tip:oe})}),v&&(0,F.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center bg-black/40`,onClick:()=>y(!1),children:(0,F.jsxs)(`div`,{className:`bg-card rounded-xl border shadow-lg p-5 w-72 space-y-3`,onClick:e=>e.stopPropagation(),children:[(0,F.jsx)(`p`,{className:`text-sm font-medium`,children:`跳转到题目`}),(0,F.jsx)(`input`,{ref:T,type:`text`,value:b,onChange:e=>{x(e.target.value),w(``)},onKeyDown:e=>e.key===`Enter`&&ie(),placeholder:`序号 1–${o.length} 或题号如 A-12`,className:`w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary`}),C&&(0,F.jsx)(`p`,{className:`text-xs text-red-500`,children:C}),(0,F.jsxs)(`div`,{className:`flex gap-2 justify-end`,children:[(0,F.jsx)(`button`,{onClick:()=>y(!1),className:`rounded-lg border px-3 py-1.5 text-sm hover:bg-muted`,children:`取消`}),(0,F.jsx)(`button`,{onClick:ie,className:`rounded-lg bg-primary px-3 py-1.5 text-sm text-primary-foreground hover:bg-primary/90`,children:`跳转`})]})]})})]})}var uC=da(e=>({exam:null,startExam:(t,n)=>e({exam:{questions:t,currentIndex:0,answers:{},flags:{},startTime:Date.now(),endTime:Date.now()+n*60*1e3,finished:!1}}),answer:(t,n)=>e(e=>e.exam?{exam:{...e.exam,answers:{...e.exam.answers,[t]:n}}}:e),toggleFlag:t=>e(e=>e.exam?{exam:{...e.exam,flags:{...e.exam.flags,[t]:!e.exam.flags[t]}}}:e),jump:t=>e(e=>e.exam?{exam:{...e.exam,currentIndex:t}}:e),next:()=>e(e=>e.exam&&e.exam.currentIndex<e.exam.questions.length-1?{exam:{...e.exam,currentIndex:e.exam.currentIndex+1}}:e),prev:()=>e(e=>e.exam&&e.exam.currentIndex>0?{exam:{...e.exam,currentIndex:e.exam.currentIndex-1}}:e),finish:()=>e(e=>e.exam?{exam:{...e.exam,finished:!0}}:e),reset:()=>e({exam:null})})),dC=40,fC=40;function pC(){let{exam:e,startExam:t,answer:n,toggleFlag:r,jump:i,next:a,prev:o,finish:s,reset:c}=uC(),[l,u]=(0,S.useState)(0),d=(0,S.useRef)(null);(0,S.useEffect)(()=>{if(!e)return;let t=()=>{let t=Math.max(0,Math.floor((e.endTime-Date.now())/1e3));u(t),t===0&&!e.finished&&s()};return t(),d.current=setInterval(t,1e3),()=>{d.current&&clearInterval(d.current)}},[e,s]);async function f(){let e=await za.questions.toArray(),n=ia(e.filter(e=>e.type===`single`)).slice(0,32),r=ia(e.filter(e=>e.type===`multiple`)).slice(0,8);t([...ia([...n,...r])],fC)}async function p(){if(!e)return;s();let t=e.questions.map(t=>{let n=e.answers[t.id]??[],r=t.answer_keys.length===n.length&&t.answer_keys.every(e=>n.includes(e));return{questionId:t.id,timestamp:Date.now(),isCorrect:+!!r,mode:`exam`,selectedAnswers:n}});await za.records.bulkAdd(t)}let m=e?.finished?e.questions.filter(t=>{let n=e.answers[t.id]??[];return t.answer_keys.length===n.length&&t.answer_keys.every(e=>n.includes(e))}).length:0;if(!e)return(0,F.jsxs)(`div`,{className:`mx-auto max-w-2xl px-4 py-12 text-center space-y-6`,children:[(0,F.jsx)(`h1`,{className:`text-2xl font-bold`,children:`模拟考试`}),(0,F.jsxs)(`div`,{className:`rounded-xl border bg-card p-6 text-sm text-muted-foreground space-y-2 text-left`,children:[(0,F.jsxs)(`p`,{children:[`• 共 `,dC,` 题（32 单选 + 8 多选）`]}),(0,F.jsxs)(`p`,{children:[`• 限时 `,fC,` 分钟`]}),(0,F.jsx)(`p`,{children:`• 满分 100 分，80 分及格`}),(0,F.jsx)(`p`,{children:`• 答题期间可标记疑难题，提交后查看结果`})]}),(0,F.jsx)(`button`,{onClick:f,className:`w-full rounded-xl bg-primary py-4 font-bold text-primary-foreground hover:bg-primary/90`,children:`开始考试`})]});if(e.finished){let t=Math.round(m/e.questions.length*100),n=m>=32;return(0,F.jsxs)(`div`,{className:`mx-auto max-w-2xl px-4 py-8 space-y-6`,children:[(0,F.jsxs)(`div`,{className:`rounded-xl border p-6 text-center ${n?`border-green-500 bg-green-50 dark:bg-green-950/30`:`border-red-500 bg-red-50 dark:bg-red-950/30`}`,children:[(0,F.jsxs)(`div`,{className:`text-4xl font-bold mb-2`,children:[t,` 分`]}),(0,F.jsx)(`div`,{className:`text-lg font-semibold ${n?`text-green-600`:`text-red-600`}`,children:n?`恭喜通过！`:`未通过，继续加油`}),(0,F.jsxs)(`div`,{className:`mt-2 text-sm text-muted-foreground`,children:[`答对 `,m,` / `,e.questions.length,` 题`]})]}),(0,F.jsxs)(`div`,{className:`space-y-4`,children:[(0,F.jsx)(`h2`,{className:`font-semibold text-sm text-muted-foreground`,children:`错题回顾`}),e.questions.map((t,n)=>{let r=e.answers[t.id]??[];return t.answer_keys.length===r.length&&t.answer_keys.every(e=>r.includes(e))?null:(0,F.jsx)(Ja,{question:t,selected:r,onSelect:()=>{},submitted:!0,showAnswer:!0,index:n,total:e.questions.length},t.id)})]}),(0,F.jsx)(`button`,{onClick:c,className:`w-full rounded-xl border py-3 text-sm hover:bg-muted`,children:`再来一次`})]})}let h=e.questions[e.currentIndex],g=Object.keys(e.answers).length,_=e.flags[h.id];return(0,F.jsxs)(`div`,{className:`mx-auto max-w-2xl px-4 py-4 space-y-4`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2 text-sm font-medium`,children:[(0,F.jsx)(_r,{className:`h-4 w-4 ${l<300?`text-red-500`:`text-muted-foreground`}`}),(0,F.jsx)(`span`,{className:l<300?`text-red-500 font-bold`:`text-muted-foreground`,children:aa(l)})]}),(0,F.jsxs)(`span`,{className:`text-sm text-muted-foreground`,children:[`已答 `,g,`/`,e.questions.length]}),(0,F.jsxs)(`button`,{onClick:()=>r(h.id),className:`flex items-center gap-1 text-sm ${_?`text-yellow-500`:`text-muted-foreground hover:text-foreground`}`,children:[(0,F.jsx)(vr,{className:`h-4 w-4`}),_?`已标记`:`标记`]})]}),(0,F.jsx)(`div`,{className:`flex flex-wrap gap-1`,children:e.questions.map((t,n)=>(0,F.jsx)(`button`,{onClick:()=>i(n),className:`h-6 w-6 rounded text-xs font-medium transition-colors ${n===e.currentIndex?`bg-primary text-primary-foreground`:e.flags[t.id]?`bg-yellow-400 text-yellow-950`:e.answers[t.id]?`bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100`:`bg-muted text-muted-foreground`}`,children:n+1},t.id))}),(0,F.jsx)(Ja,{question:h,selected:e.answers[h.id]??[],onSelect:t=>{let r=e.answers[h.id]??[];h.type===`single`?n(h.id,[t]):n(h.id,r.includes(t)?r.filter(e=>e!==t):[...r,t])},submitted:!1,index:e.currentIndex,total:e.questions.length}),(0,F.jsxs)(`div`,{className:`flex gap-3`,children:[(0,F.jsxs)(`button`,{onClick:o,disabled:e.currentIndex===0,className:`flex-1 rounded-lg border py-3 text-sm disabled:opacity-40 hover:bg-muted`,children:[(0,F.jsx)(dr,{className:`inline h-4 w-4`}),` 上一题`]}),e.currentIndex<e.questions.length-1?(0,F.jsxs)(`button`,{onClick:a,className:`flex-1 rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90`,children:[`下一题 `,(0,F.jsx)(fr,{className:`inline h-4 w-4`})]}):(0,F.jsx)(`button`,{onClick:p,className:`flex-1 rounded-lg bg-green-600 py-3 text-sm font-bold text-white hover:bg-green-700`,children:`提交考试`})]})]})}function mC(){let[e,t]=(0,S.useState)(`recent`),n=ut(),r=Ra(async()=>{let e=await za.records.where(`isCorrect`).equals(0).reverse().sortBy(`timestamp`),t=new Set,n=e.filter(e=>t.has(e.questionId)?!1:(t.add(e.questionId),!0)).slice(0,50).map(e=>e.questionId);return za.questions.where(`id`).anyOf(n).toArray()},[]),i=Ra(async()=>{let e=await za.records.where(`isCorrect`).equals(0).toArray(),t={};for(let n of e)t[n.questionId]=(t[n.questionId]??0)+1;let n=Object.entries(t).sort((e,t)=>t[1]-e[1]).slice(0,50),r=n.map(([e])=>e),i=await za.questions.where(`id`).anyOf(r).toArray();return n.map(([e,t])=>({question:i.find(t=>t.id===e),count:t})).filter(e=>e.question)},[]),a=Ra(async()=>{let e=await za.records.where(`isCorrect`).equals(0).toArray(),t=[...new Set(e.map(e=>e.questionId))],n=await za.questions.where(`id`).anyOf(t).toArray(),r={};for(let e of n)r[e.category]=(r[e.category]??0)+1;return r},[]);return(0,F.jsxs)(`div`,{className:`mx-auto max-w-2xl px-4 py-4 space-y-4`,children:[(0,F.jsx)(`h1`,{className:`text-lg font-bold`,children:`错题本`}),(0,F.jsx)(`div`,{className:`flex border-b`,children:[{key:`recent`,label:`最近错题`},{key:`frequent`,label:`高频错题`},{key:`byCategory`,label:`按类别`}].map(({key:n,label:r})=>(0,F.jsx)(`button`,{onClick:()=>t(n),className:ra(`flex-1 py-2 text-sm font-medium transition-colors`,e===n?`border-b-2 border-primary text-primary`:`text-muted-foreground hover:text-foreground`),children:r},n))}),e===`recent`&&(0,F.jsxs)(`div`,{className:`space-y-2`,children:[!r?.length&&(0,F.jsx)(`p`,{className:`py-8 text-center text-muted-foreground text-sm`,children:`暂无错题记录`}),r?.map(e=>(0,F.jsxs)(`button`,{onClick:()=>n(`/practice?id=${e.id}`),className:`w-full text-left rounded-lg border bg-card p-3 hover:shadow-sm transition-all`,children:[(0,F.jsxs)(`div`,{className:`text-xs text-muted-foreground mb-1`,children:[e.category.split(`.`).pop(),` · `,e.tag]}),(0,F.jsx)(`div`,{className:`text-sm line-clamp-2`,children:e.question}),(0,F.jsxs)(`div`,{className:`mt-1 text-xs text-primary`,children:[`正确答案：`,e.answer_keys.join(`、`)]})]},e.id))]}),e===`frequent`&&(0,F.jsxs)(`div`,{className:`space-y-2`,children:[!i?.length&&(0,F.jsx)(`p`,{className:`py-8 text-center text-muted-foreground text-sm`,children:`暂无错题记录`}),i?.map(({question:e,count:t})=>(0,F.jsx)(`button`,{onClick:()=>n(`/practice?id=${e.id}`),className:`w-full text-left rounded-lg border bg-card p-3 hover:shadow-sm transition-all`,children:(0,F.jsxs)(`div`,{className:`flex items-start justify-between gap-2`,children:[(0,F.jsxs)(`div`,{className:`flex-1`,children:[(0,F.jsxs)(`div`,{className:`text-xs text-muted-foreground mb-1`,children:[e.category.split(`.`).pop(),` · `,e.tag]}),(0,F.jsx)(`div`,{className:`text-sm line-clamp-2`,children:e.question})]}),(0,F.jsxs)(`span`,{className:`shrink-0 rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600 dark:bg-red-950 dark:text-red-400`,children:[`×`,t]})]})},e.id))]}),e===`byCategory`&&(0,F.jsx)(`div`,{className:`space-y-2`,children:Ka.map(e=>{let t=a?.[e.key]??0;return(0,F.jsxs)(`button`,{disabled:t===0,onClick:()=>n(`/practice?category=${encodeURIComponent(e.key)}&errorsOnly=1`),className:ra(`flex w-full items-center gap-3 rounded-lg border bg-card p-3 transition-all`,t>0?`hover:shadow-sm active:scale-95`:`opacity-40 cursor-default`),children:[(0,F.jsx)(`span`,{className:ra(`h-3 w-3 shrink-0 rounded-full`,e.color)}),(0,F.jsx)(`span`,{className:`flex-1 text-sm font-medium text-left`,children:e.name}),t>0?(0,F.jsxs)(`span`,{className:`rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600 dark:bg-red-950 dark:text-red-400`,children:[t,` 题`]}):(0,F.jsxs)(`span`,{className:`text-xs text-muted-foreground flex items-center gap-1`,children:[(0,F.jsx)(sr,{className:`h-3 w-3`}),` 全对`]})]},e.key)})})]})}function hC(){let e=ut(),[t,n]=(0,S.useState)([]),[r,i]=(0,S.useState)(0),[a,o]=(0,S.useState)(null),[s,c]=(0,S.useState)([]),[l,u]=(0,S.useState)(!1),[d,f]=(0,S.useState)(new Set),[p,m]=(0,S.useState)({correct:0,wrong:0}),[h,g]=(0,S.useState)(!0),[_,v]=(0,S.useState)(null),[y,b]=(0,S.useState)(!1);(0,S.useEffect)(()=>{async function e(){g(!0);let e=await za.srs_cards.toArray(),t=e.filter(Wa);if(t.length===0){let t=e.filter(e=>e.nextReview>Date.now());t.length>0&&v(Math.min(...t.map(e=>e.nextReview))),n([]),g(!1);return}let r=ia(t),a=r.map(e=>e.questionId),s=await za.questions.where(`id`).anyOf(a).toArray(),c=new Map(s.map(e=>[e.id,e])),l=r.filter(e=>c.has(e.questionId));n(l),i(0),l.length>0&&o(c.get(l[0].questionId)??null),g(!1)}e()},[]),(0,S.useEffect)(()=>{if(t.length===0)return;if(r>=t.length){b(!0);return}let e=t[r];za.questions.get(e.questionId).then(e=>{o(e??null)})},[t,r]);let x=(0,S.useCallback)(e=>{!a||l||(a.type===`single`?c([e]):c(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]))},[a,l]),C=(0,S.useCallback)(async()=>{if(!a||s.length===0||l)return;u(!0);let e=t[r],i=a.answer_keys.length===s.length&&a.answer_keys.every(e=>s.includes(e));await Ua(e.questionId,i),i?m(e=>({...e,correct:e.correct+1})):(m(e=>({...e,wrong:e.wrong+1})),d.has(e.questionId)||(f(t=>new Set(t).add(e.questionId)),n(t=>[...t,e])))},[a,s,l,t,r,d]),w=()=>{c([]),u(!1),i(e=>e+1)},T=async()=>{let e=(await za.srs_cards.toArray()).filter(Wa);if(e.length===0){b(!0);return}let t=ia(e),r=t.map(e=>e.questionId),a=await za.questions.where(`id`).anyOf(r).toArray(),s=new Map(a.map(e=>[e.id,e])),l=t.filter(e=>s.has(e.questionId));n(l),i(0),c([]),u(!1),f(new Set),m({correct:0,wrong:0}),b(!1),l.length>0&&o(s.get(l[0].questionId)??null)};if(h)return(0,F.jsx)(`div`,{className:`flex h-full items-center justify-center p-8 text-muted-foreground`,children:`加载中…`});if(t.length===0)return(0,F.jsxs)(`div`,{className:`mx-auto max-w-2xl px-4 py-12 text-center space-y-4`,children:[(0,F.jsx)(or,{className:`mx-auto h-12 w-12 text-muted-foreground/50`}),(0,F.jsx)(`p`,{className:`text-xl font-bold`,children:_?`今日无需复习`:`暂无复习题目，先去练习几题吧`}),_&&(0,F.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`下次复习时间：`,new Date(_).toLocaleString(`zh-CN`)]}),(0,F.jsx)(`button`,{onClick:()=>e(`/practice`),className:`rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90`,children:`去练习`})]});if(y||r>=t.length)return(0,F.jsxs)(`div`,{className:`mx-auto max-w-2xl px-4 py-12 text-center space-y-4`,children:[(0,F.jsx)(or,{className:`mx-auto h-12 w-12 text-primary`}),(0,F.jsx)(`p`,{className:`text-2xl font-bold`,children:`复习完成！`}),(0,F.jsxs)(`div`,{className:`flex justify-center gap-8 text-sm`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,F.jsx)(`span`,{className:`text-2xl font-bold text-green-600`,children:p.correct}),(0,F.jsx)(`span`,{className:`text-muted-foreground`,children:`答对`})]}),(0,F.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,F.jsx)(`span`,{className:`text-2xl font-bold text-red-500`,children:p.wrong}),(0,F.jsx)(`span`,{className:`text-muted-foreground`,children:`答错`})]})]}),(0,F.jsxs)(`div`,{className:`flex gap-3 justify-center`,children:[(0,F.jsxs)(`button`,{onClick:T,className:`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-muted`,children:[(0,F.jsx)(Sr,{className:`h-4 w-4`}),` 再复习一遍`]}),(0,F.jsx)(`button`,{onClick:()=>e(`/`),className:`rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90`,children:`返回首页`})]})]});let E=t[r],ee=a?cC(a.id):null,D=l&&!!ee;return(0,F.jsxs)(`div`,{className:`mx-auto max-w-5xl px-4 py-4 space-y-4`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between text-sm text-muted-foreground`,children:[(0,F.jsxs)(`button`,{onClick:()=>e(-1),className:`flex items-center gap-1 hover:text-foreground`,children:[(0,F.jsx)(dr,{className:`h-4 w-4`}),`复习`]}),(0,F.jsxs)(`span`,{children:[r+1,` / `,t.length]})]}),(0,F.jsx)(`div`,{className:`h-1.5 w-full rounded-full bg-muted overflow-hidden`,children:(0,F.jsx)(`div`,{className:`h-full rounded-full bg-primary transition-all`,style:{width:`${r/t.length*100}%`}})}),(0,F.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,F.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs text-muted-foreground`,children:[(0,F.jsx)(or,{className:`h-3 w-3`}),Va[E.box]]})}),(0,F.jsxs)(`div`,{className:`flex gap-6 items-start`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col gap-4 min-w-0 flex-1`,children:[a&&(0,F.jsx)(Ja,{question:a,selected:s,onSelect:x,submitted:l,index:r,total:t.length}),(0,F.jsx)(`div`,{className:`flex gap-3`,children:l?(0,F.jsx)(`button`,{onClick:w,className:`flex-1 rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90`,children:`下一题`}):(0,F.jsx)(`button`,{onClick:C,disabled:s.length===0,className:`flex-1 rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground disabled:opacity-40 hover:bg-primary/90`,children:`提交答案`})})]}),(0,F.jsx)(`div`,{className:`hidden lg:block overflow-hidden shrink-0 sticky top-4`,style:{width:D?`380px`:`0`,opacity:+!!D,transition:`width 0.3s ease, opacity 0.3s ease`},children:ee&&(0,F.jsx)(aC,{tip:ee})})]}),D&&ee&&(0,F.jsx)(`div`,{className:`lg:hidden`,children:(0,F.jsx)(aC,{tip:ee})})]})}var gC=4,_C=1,vC=8,yC=8,bC=12,xC=vC*5-_C,SC=14,CC=3,wC=55,TC=5,EC=60;function DC(e){let t=new Date(e);return`${t.getMonth()+1}/${t.getDate()}`}function OC(e){return e==null?`-`:e<1e3?`${e}ms`:`${(e/1e3).toFixed(1)}s`}function kC({stats:e,width:t,onNavigate:n,onTip:r}){let i=Math.max(1,Math.floor(t/EC)),a=Math.ceil(e.length/i),o=i*EC-TC,s=bC+a*yC;return(0,F.jsxs)(`svg`,{width:o,height:s,viewBox:`0 0 ${o} ${s}`,style:{display:`block`},children:[(0,F.jsxs)(`text`,{x:0,y:9,fontSize:6,fill:`var(--color-muted-foreground,#9ca3af)`,children:[`最近`,vC,`次`]}),e.map((e,t)=>{let i=Math.floor(t/a),o=t%a,s=i*EC,c=bC+o*yC,l=c+(yC-gC)/2;return(0,F.jsxs)(`g`,{style:{cursor:`pointer`},onClick:()=>n(e.question.id),onMouseEnter:t=>{let n=e.attempts.length>0?`正确率 ${Math.round(e.accuracy*100)}%`:`未作答`;r({x:t.clientX,y:t.clientY,lines:[e.question.id,n]})},onMouseLeave:()=>r(null),children:[(0,F.jsx)(`rect`,{x:s,y:c,width:wC,height:yC,fill:`transparent`}),Array.from({length:vC},(t,n)=>{let i=e.attempts[n];return(0,F.jsx)(`rect`,{x:s+n*5,y:l,width:gC,height:gC,rx:.5,fill:i==null?`var(--cell-empty,#e2e8f0)`:i.isCorrect===1?`#22c55e`:`#ef4444`,onMouseEnter:t=>{t.stopPropagation(),i&&r({x:t.clientX,y:t.clientY,lines:[e.question.id,`第${n+1}次 · ${DC(i.timestamp)} · ${i.isCorrect===1?`✓`:`✗`} · ${OC(i.timeSpent)}`]})}},n)}),(0,F.jsx)(`rect`,{x:s+xC+2,y:c+(yC-CC)/2,width:SC,height:CC,rx:1,fill:`var(--cell-empty,#e2e8f0)`}),e.accuracy>0&&(0,F.jsx)(`rect`,{x:s+xC+2,y:c+(yC-CC)/2,width:Math.round(SC*e.accuracy),height:CC,rx:1,fill:`#22c55e`})]},e.question.id)})]})}function AC({stats:e}){let t=e.length,n=e.filter(e=>e.attempts.length>0).length,r=e.reduce((e,t)=>e+ +(t.attempts.at(-1)?.isCorrect===1),0),i=n-r,a=n>0?Math.round(r/n*100):0,o=t>0?r/t*100:0,s=t>0?i/t*100:0;return(0,F.jsxs)(`div`,{className:`px-4 py-2 bg-card border-b flex items-center gap-3 text-xs flex-wrap`,children:[(0,F.jsxs)(`span`,{className:`text-muted-foreground`,children:[`总 `,(0,F.jsx)(`b`,{className:`text-foreground`,children:t})]}),(0,F.jsxs)(`span`,{className:`text-muted-foreground`,children:[`已答 `,(0,F.jsx)(`b`,{className:`text-foreground`,children:n})]}),(0,F.jsxs)(`span`,{className:`text-muted-foreground`,children:[`答对 `,(0,F.jsx)(`b`,{style:{color:`#22c55e`},children:r})]}),(0,F.jsxs)(`span`,{className:`text-muted-foreground`,children:[`正确率 `,(0,F.jsxs)(`b`,{className:`text-foreground`,children:[a,`%`]})]}),(0,F.jsxs)(`span`,{className:`text-muted-foreground`,children:[`未答 `,(0,F.jsx)(`b`,{className:`text-foreground`,children:t-n})]}),(0,F.jsxs)(`div`,{className:`flex-1 min-w-16 h-1.5 rounded-full overflow-hidden flex bg-muted`,children:[o>0&&(0,F.jsx)(`div`,{className:`h-full`,style:{width:`${o}%`,backgroundColor:`#22c55e`}}),s>0&&(0,F.jsx)(`div`,{className:`h-full`,style:{width:`${s}%`,backgroundColor:`#f97316`}})]})]})}function jC(){let e=ut(),[t,n]=(0,S.useState)(`全部`),[r,i]=(0,S.useState)(new Map),[a,o]=(0,S.useState)(!0),[s,c]=(0,S.useState)(null),l=(0,S.useRef)(null),[u,d]=(0,S.useState)(360);(0,S.useEffect)(()=>{let e=l.current;if(!e)return;let t=new ResizeObserver(([e])=>d(e.contentRect.width));return t.observe(e),d(e.clientWidth),()=>t.disconnect()},[]);let f=(0,S.useCallback)(async e=>{o(!0);let t=e===`全部`?Ka.map(e=>e.key):[e],n=new Map;for(let e of t){let t=await za.questions.where(`category`).equals(e).toArray();t.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0}));let r=t.map(e=>e.id),i=await za.records.where(`questionId`).anyOf(r).sortBy(`timestamp`),a=new Map;for(let e of i){let t=a.get(e.questionId)??[];t.push(e),a.set(e.questionId,t)}n.set(e,t.map(e=>{let t=(a.get(e.id)??[]).map(e=>({isCorrect:e.isCorrect,timestamp:e.timestamp,timeSpent:e.timeSpent})).slice(-8),n=t.filter(e=>e.isCorrect===1).length;return{question:e,attempts:t,accuracy:t.length>0?n/t.length:0}}))}i(n),o(!1)},[]);(0,S.useEffect)(()=>{f(t)},[t,f]);let p=(0,S.useCallback)(t=>e(`/practice?id=${encodeURIComponent(t)}`),[e]),m=[...r.values()].flat(),h=t===`全部`?Ka.map(e=>e.key):[t];return(0,F.jsxs)(`div`,{className:`flex flex-col h-full bg-background`,children:[(0,F.jsx)(`div`,{className:`sticky top-0 z-10 bg-background border-b`,children:(0,F.jsx)(`div`,{className:`flex gap-1.5 px-3 py-2 overflow-x-auto`,children:[`全部`,...Ka.map(e=>e.name)].map((e,i)=>{let a=i===0?`全部`:Ka[i-1].key,o=t===a,s=a===`全部`?[...r.values()].flat():r.get(a)??[],c=s.length,l=s.reduce((e,t)=>e+ +(t.attempts.at(-1)?.isCorrect===1),0),u=c>0?l/c*100:0;return(0,F.jsxs)(`button`,{onClick:()=>n(a),className:ra(`relative shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap overflow-hidden text-left min-w-[52px]`,o?`bg-primary text-primary-foreground`:`bg-muted text-muted-foreground hover:text-foreground`),children:[u>0&&(0,F.jsx)(`span`,{className:`absolute inset-y-0 left-0 transition-all`,style:{width:`${u}%`,backgroundColor:o?`rgba(255,255,255,0.18)`:`#22c55e28`}}),(0,F.jsxs)(`span`,{className:`relative flex flex-col leading-tight`,children:[(0,F.jsx)(`span`,{children:e}),(0,F.jsx)(`span`,{className:ra(`text-[9px] mt-0.5`,o?`opacity-80`:`opacity-60`),children:c>0?`${c}题 ${Math.round(u)}%`:`—`})]})]},a)})})}),a?(0,F.jsx)(`div`,{className:`flex-1 flex items-center justify-center text-muted-foreground`,children:`加载中…`}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(AC,{stats:m}),s&&(0,F.jsx)(`div`,{className:`fixed z-50 pointer-events-none bg-popover border rounded px-2 py-1 text-xs shadow-lg`,style:{left:s.x+12,top:s.y-8},children:s.lines.map((e,t)=>(0,F.jsx)(`div`,{children:e},t))}),(0,F.jsx)(`div`,{className:`flex-1 overflow-y-auto pb-8`,ref:l,children:h.map(e=>{let n=r.get(e)??[],i=Ka.find(t=>t.key===e),a=Math.max(60,u-32),o=Math.max(1,Math.floor(a/EC));return(0,F.jsxs)(`div`,{className:`mb-3`,children:[t===`全部`&&(0,F.jsxs)(`div`,{className:`flex items-center gap-2 px-4 pt-2 pb-1`,children:[(0,F.jsx)(`span`,{className:ra(`w-2 h-2 rounded-full shrink-0`,i?.color??`bg-muted`)}),(0,F.jsx)(`span`,{className:`text-xs font-semibold`,children:i?.name}),(0,F.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[`(`,n.length,` 题)`]}),(0,F.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[`· `,o,` 列`]})]}),(0,F.jsx)(`div`,{className:`px-4`,children:(0,F.jsx)(kC,{stats:n,width:a,onNavigate:p,onTip:c})})]},e)})})]})]})}var MC=[{abbr:`VLF`,full:`Very Low Frequency`,cn:`甚低频`,range:`3-30 kHz`,band:`万米波`,amateur:``,hot:!1},{abbr:`LF`,full:`Low Frequency`,cn:`低频`,range:`30-300 kHz`,band:`千米波`,amateur:`135.7-137.8 kHz ★`,hot:!0},{abbr:`MF`,full:`Medium Frequency`,cn:`中频`,range:`300k-3 MHz`,band:`百米波`,amateur:`1.8-2 MHz ★`,hot:!0},{abbr:`HF`,full:`High Frequency`,cn:`高频`,range:`3-30 MHz`,band:`十米波`,amateur:`3.5/7/10/14/18/21/24/28 MHz`,hot:!0},{abbr:`VHF`,full:`Very High Frequency`,cn:`甚高频`,range:`30-300 MHz`,band:`米波`,amateur:`50-54 / 144-148 MHz ★`,hot:!0},{abbr:`UHF`,full:`Ultra High Frequency`,cn:`特高频`,range:`300M-3 GHz`,band:`分米波`,amateur:`430-440 MHz ★★`,hot:!0},{abbr:`SHF`,full:`Super High Frequency`,cn:`超高频`,range:`3-30 GHz`,band:`厘米波`,amateur:`2.3G / 5.65G / 10G`,hot:!1},{abbr:`EHF`,full:`Extremely High Frequency`,cn:`极高频`,range:`30-300 GHz`,band:`毫米波`,amateur:`24G / 47G / 241G`,hot:!1}],NC=[{name:`160米`,freq:`1.8-2 MHz`,freqHz:18e5,power:`A类25W`,note:`主要业务`,hot:!1},{name:`80米`,freq:`3.5-3.9 MHz`,freqHz:35e5,power:`A类25W`,note:`主要业务`,hot:!1},{name:`40米★`,freq:`7.0-7.2 MHz`,freqHz:7e6,power:`A类25W`,note:`主要业务(ITU三区)`,hot:!0},{name:`30米`,freq:`10.1-10.15 MHz`,freqHz:101e5,power:`A类25W`,note:`次要业务`,hot:!1},{name:`20米★★`,freq:`14.0-14.35 MHz`,freqHz:14e6,power:`A类25W`,note:`主要业务`,hot:!0},{name:`17米`,freq:`18.068-18.168 MHz`,freqHz:18068e3,power:`A类25W`,note:`主要业务`,hot:!1},{name:`15米`,freq:`21.0-21.45 MHz`,freqHz:21e6,power:`A类25W`,note:`主要业务`,hot:!1},{name:`12米`,freq:`24.89-24.99 MHz`,freqHz:2489e4,power:`A类25W`,note:`主要业务`,hot:!1},{name:`10米`,freq:`28-29.7 MHz`,freqHz:28e6,power:`A类25W`,note:`主要业务`,hot:!1},{name:`6米★`,freq:`50-54 MHz`,freqHz:5e7,power:`A类25W`,note:`主要业务`,hot:!0},{name:`2米★★`,freq:`144-148 MHz`,freqHz:144e6,power:`A类25W`,note:`主要业务`,hot:!0},{name:`70厘米★★`,freq:`430-440 MHz`,freqHz:43e7,power:`A/B/C类10W`,note:`次要业务`,hot:!0},{name:`23厘米`,freq:`1240-1300 MHz`,freqHz:124e7,power:`10W`,note:`次要业务`,hot:!1},{name:`13厘米`,freq:`2300-2450 MHz`,freqHz:23e8,power:`10W`,note:`次要业务`,hot:!1}].sort((e,t)=>e.freqHz-t.freqHz),PC=[{title:`许可证 & 执照`,hot:!0,points:[{text:`A类：仅限 430MHz以下频段，最大发射功率 25W（短波）/ 10W（VHF/UHF）`,hot:!0},{text:`B/C类：可使用 430-440MHz，最大 10W`,hot:!0},{text:`操作证书由中国无线电运动协会（CRSA）颁发`,hot:!1},{text:`无线电台执照由工业和信息化部（工信部）颁发`,hot:!0},{text:`执照有效期：3年（定期审验）`,hot:!0}]},{title:`法规层级`,hot:!0,points:[{text:`《无线电管理条例》= 国务院＋中央军委联合发布（行政法规）★★`,hot:!0},{text:`《业余无线电台管理办法》= 工信部部门规章`,hot:!0},{text:`业余电台不得用于商业通信，不得传递无关内容`,hot:!1},{text:`设置业余中继台需单独申请执照`,hot:!0}]},{title:`频率使用原则`,hot:!0,points:[{text:`主要业务 > 次要业务：次要业务不得干扰主要业务`,hot:!0},{text:`划分 → 分配 → 指配（三级体系）★★`,hot:!0},{text:`禁止发射无意义信号、音乐、广播节目`,hot:!1},{text:`IARU信标频率：禁止在±500Hz范围内发射`,hot:!0}]},{title:`中继台规定`,hot:!1,points:[{text:`144MHz中继收发频差：600kHz`,hot:!0},{text:`430MHz中继收发频差：5MHz`,hot:!0},{text:`中继台必须具备自动关机保护功能`,hot:!1}]},{title:`边带规则`,hot:!0,points:[{text:`10.1MHz以下 → LSB（下边带）`,hot:!0},{text:`10.1MHz以上（含10.1）→ USB（上边带）`,hot:!0},{text:`VHF/UHF SSB → USB`,hot:!1}]}],FC=[`#6366f1`,`#8b5cf6`,`#a855f7`,`#ec4899`,`#f43f5e`,`#f97316`,`#84cc16`,`#14b8a6`];function IC(){return(0,F.jsxs)(`div`,{className:`mb-4`,children:[(0,F.jsx)(`div`,{className:`text-xs text-muted-foreground mb-1.5`,children:`频谱概览（对数刻度，高亮=业余常用）`}),(0,F.jsx)(`div`,{className:`flex rounded-xl overflow-hidden border h-9`,children:MC.map((e,t)=>(0,F.jsx)(`div`,{className:ra(`flex-1 flex items-center justify-center text-[10px] font-bold text-white`,e.hot&&`ring-2 ring-inset ring-white/40`),style:{backgroundColor:FC[t]},title:`${e.full} (${e.cn}) ${e.range}${e.amateur?`
`+e.amateur:``}`,children:e.abbr},e.abbr))}),(0,F.jsx)(`div`,{className:`flex mt-0.5`,children:MC.map(e=>(0,F.jsx)(`div`,{className:`flex-1 text-center text-[9px] text-muted-foreground truncate px-0.5`,children:e.band},e.abbr))})]})}function LC(){let[e,t]=(0,S.useState)(!0),[n,r]=(0,S.useState)(!0);return(0,F.jsxs)(`div`,{className:`space-y-4`,children:[(0,F.jsx)(IC,{}),(0,F.jsxs)(`div`,{className:`rounded-xl border bg-card divide-y`,children:[(0,F.jsxs)(`button`,{className:`w-full flex items-center justify-between px-4 py-3`,onClick:()=>r(e=>!e),children:[(0,F.jsxs)(`span`,{className:`flex items-center gap-1.5 text-sm font-semibold`,children:[(0,F.jsx)(Er,{className:`h-3.5 w-3.5 fill-amber-400 text-amber-400`}),`各频段业余分配`]}),n?(0,F.jsx)(ur,{className:`h-4 w-4 text-muted-foreground`}):(0,F.jsx)(fr,{className:`h-4 w-4 text-muted-foreground`})]}),n&&MC.map(e=>(0,F.jsxs)(`div`,{className:ra(`flex gap-2 items-start px-4 py-2.5 text-xs`,e.hot&&`bg-amber-50 dark:bg-amber-950/20`),children:[(0,F.jsxs)(`div`,{className:`w-24 shrink-0`,children:[(0,F.jsx)(`span`,{className:ra(`font-bold`,e.hot?`text-amber-600 dark:text-amber-400`:`text-muted-foreground`),children:e.abbr}),(0,F.jsx)(`span`,{className:`ml-1 text-muted-foreground`,children:e.cn})]}),(0,F.jsx)(`span`,{className:`font-mono text-[10px] text-muted-foreground w-24 shrink-0`,children:e.range}),(0,F.jsx)(`span`,{className:ra(`flex-1`,e.hot&&`font-medium`),children:e.amateur||(0,F.jsx)(`span`,{className:`opacity-30`,children:`—`})}),e.hot&&(0,F.jsx)(Er,{className:`h-3 w-3 shrink-0 fill-amber-400 text-amber-400 mt-0.5`})]},e.abbr))]}),(0,F.jsxs)(`div`,{className:`rounded-xl border bg-card divide-y`,children:[(0,F.jsxs)(`button`,{className:`w-full flex items-center justify-between px-4 py-3`,onClick:()=>t(e=>!e),children:[(0,F.jsxs)(`span`,{className:`flex items-center gap-1.5 text-sm font-semibold`,children:[(0,F.jsx)(Er,{className:`h-3.5 w-3.5 fill-amber-400 text-amber-400`}),`业余波段速查表`,(0,F.jsx)(`span`,{className:`text-[10px] font-normal text-muted-foreground ml-1`,children:`↑ 频率升序`})]}),e?(0,F.jsx)(ur,{className:`h-4 w-4 text-muted-foreground`}):(0,F.jsx)(fr,{className:`h-4 w-4 text-muted-foreground`})]}),e&&(0,F.jsx)(`div`,{className:`overflow-x-auto`,children:(0,F.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,F.jsx)(`thead`,{children:(0,F.jsxs)(`tr`,{className:`bg-muted/50 text-muted-foreground`,children:[(0,F.jsx)(`th`,{className:`px-3 py-2 text-left font-medium`,children:`波段`}),(0,F.jsx)(`th`,{className:`px-2 py-2 text-left font-medium`,children:`频率`}),(0,F.jsx)(`th`,{className:`px-2 py-2 text-left font-medium`,children:`最大功率`}),(0,F.jsx)(`th`,{className:`px-2 py-2 text-left font-medium`,children:`地位`})]})}),(0,F.jsx)(`tbody`,{className:`divide-y divide-border`,children:NC.map(e=>(0,F.jsxs)(`tr`,{className:e.hot?`bg-amber-50 dark:bg-amber-950/20`:``,children:[(0,F.jsx)(`td`,{className:ra(`px-3 py-2 font-semibold`,e.hot&&`text-amber-700 dark:text-amber-300`),children:e.name}),(0,F.jsx)(`td`,{className:`px-2 py-2 font-mono text-[11px]`,children:e.freq}),(0,F.jsx)(`td`,{className:`px-2 py-2`,children:e.power}),(0,F.jsx)(`td`,{className:ra(`px-2 py-2`,e.note.includes(`次要`)?`text-muted-foreground`:`text-green-700 dark:text-green-400`),children:e.note})]},e.name))})]})})]}),(0,F.jsxs)(`div`,{className:`rounded-xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4 text-xs space-y-1.5`,children:[(0,F.jsx)(`div`,{className:`font-semibold text-blue-700 dark:text-blue-400 mb-2`,children:`🧠 记忆口诀`}),(0,F.jsxs)(`p`,{children:[(0,F.jsx)(`strong`,{children:`ABC三类`}),`：A类限短波（25W），B/C类可用430MHz（10W）`]}),(0,F.jsxs)(`p`,{children:[(0,F.jsx)(`strong`,{children:`波段名`}),`：频率越低→波长越长（160米≈1.8MHz）`]}),(0,F.jsxs)(`p`,{children:[(0,F.jsx)(`strong`,{children:`主次业务`}),`：次要业务不可干扰主要业务`]}),(0,F.jsxs)(`p`,{children:[(0,F.jsx)(`strong`,{children:`高频考点`}),`：135.7kHz / 1.8MHz / 50MHz / 144MHz / 430MHz ★★`]})]})]})}function RC(){let[e,t]=(0,S.useState)(Object.fromEntries(PC.map((e,t)=>[t,e.hot]))),n=e=>t(t=>({...t,[e]:!t[e]}));return(0,F.jsxs)(`div`,{className:`space-y-3`,children:[PC.map((t,r)=>(0,F.jsxs)(`div`,{className:ra(`rounded-xl border bg-card divide-y`,t.hot&&`border-amber-200 dark:border-amber-700`),children:[(0,F.jsxs)(`button`,{className:`w-full flex items-center justify-between px-4 py-3`,onClick:()=>n(r),children:[(0,F.jsxs)(`span`,{className:`flex items-center gap-1.5 text-sm font-semibold`,children:[t.hot&&(0,F.jsx)(Er,{className:`h-3.5 w-3.5 fill-amber-400 text-amber-400`}),t.title]}),e[r]?(0,F.jsx)(ur,{className:`h-4 w-4 text-muted-foreground`}):(0,F.jsx)(fr,{className:`h-4 w-4 text-muted-foreground`})]}),e[r]&&(0,F.jsx)(`ul`,{className:`py-1 divide-y divide-border/40`,children:t.points.map((e,t)=>(0,F.jsxs)(`li`,{className:ra(`flex gap-2 items-start px-4 py-2 text-xs`,e.hot&&`bg-red-50 dark:bg-red-950/20`),children:[(0,F.jsx)(`span`,{className:ra(`mt-0.5 shrink-0 font-bold`,e.hot?`text-red-500`:`text-muted-foreground/30`),children:e.hot?`★`:`·`}),(0,F.jsx)(`span`,{className:e.hot?`font-medium`:``,children:e.text})]},t))})]},r)),(0,F.jsxs)(`div`,{className:`rounded-xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4 text-xs space-y-1.5`,children:[(0,F.jsx)(`div`,{className:`font-semibold text-blue-700 dark:text-blue-400 mb-2`,children:`🧠 记忆要点`}),(0,F.jsxs)(`p`,{children:[`★★ `,(0,F.jsx)(`strong`,{children:`三级体系`}),`：划分→分配→指配`]}),(0,F.jsxs)(`p`,{children:[`★★ `,(0,F.jsx)(`strong`,{children:`条例=军民联合`}),`（国务院+中央军委），非法律非规章`]}),(0,F.jsxs)(`p`,{children:[`★ `,(0,F.jsx)(`strong`,{children:`边带口诀`}),`：10.1以下LSB，10.1以上USB`]}),(0,F.jsxs)(`p`,{children:[`★ `,(0,F.jsx)(`strong`,{children:`中继频差`}),`：144MHz=600kHz，430MHz=5MHz`]})]})]})}var zC=[{key:`freq`,Icon:Or,title:`频率管理`,desc:`频谱划分、业余波段、功率限制`,hot:!0,Detail:LC},{key:`law`,Icon:Cr,title:`法规管理`,desc:`执照、法规层级、操作规范`,hot:!0,Detail:RC}];function BC(){let[e,t]=(0,S.useState)(null),n=zC.find(t=>t.key===e);return(0,F.jsx)(`div`,{className:`mx-auto max-w-2xl px-4 pt-4 pb-4`,children:n?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`button`,{onClick:()=>t(null),className:`flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors`,children:[(0,F.jsx)(ar,{className:`h-4 w-4`}),`知识库`]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2 mb-5`,children:[(0,F.jsx)(n.Icon,{className:ra(`h-5 w-5`,n.hot?`text-amber-500`:`text-muted-foreground`)}),(0,F.jsx)(`h1`,{className:`text-lg font-bold`,children:n.title})]}),(0,F.jsx)(n.Detail,{})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`h1`,{className:`text-lg font-bold mb-4`,children:`知识库`}),(0,F.jsx)(`div`,{className:`space-y-2`,children:zC.map(({key:e,Icon:n,title:r,desc:i,hot:a})=>(0,F.jsxs)(`button`,{onClick:()=>t(e),className:`w-full flex items-center gap-4 rounded-xl border bg-card px-4 py-4 text-left transition-colors hover:bg-muted/50 active:bg-muted`,children:[(0,F.jsx)(`div`,{className:ra(`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl`,a?`bg-amber-50 dark:bg-amber-950/30`:`bg-muted`),children:(0,F.jsx)(n,{className:ra(`h-5 w-5`,a?`text-amber-500`:`text-muted-foreground`)})}),(0,F.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[a&&(0,F.jsx)(Er,{className:`h-3 w-3 fill-amber-400 text-amber-400 shrink-0`}),(0,F.jsx)(`span`,{className:`font-semibold text-sm`,children:r})]}),(0,F.jsx)(`p`,{className:`text-xs text-muted-foreground mt-0.5 truncate`,children:i})]}),(0,F.jsx)(fr,{className:`h-4 w-4 text-muted-foreground shrink-0`})]},e))})]})})}var VC=null;function HC(){return VC||(VC=(async()=>{if(await za.questions.count()===0){let e=await fetch(`/ham-train/data/A-tagged.json`);if(!e.ok)throw Error(`Failed to fetch seed data: ${e.status}`);let t=await e.json();await za.questions.bulkAdd(t)}let[e,t]=await Promise.all([za.questions.toArray(),za.srs_cards.toArray()]),n=new Set(t.map(e=>e.questionId)),r=Date.now(),i=e.filter(e=>!n.has(e.id)).map(e=>({questionId:e.id,box:0,nextReview:r,lastReview:0,streakCorrect:0,totalReviews:0}));i.length>0&&await za.srs_cards.bulkAdd(i)})(),VC)}function UC(){return(0,S.useEffect)(()=>{HC().catch(console.error)},[]),(0,F.jsxs)(`div`,{className:`flex min-h-svh flex-col`,children:[(0,F.jsx)(`main`,{className:`flex-1 pb-16`,children:(0,F.jsxs)(Lt,{children:[(0,F.jsx)(Ft,{path:`/`,element:(0,F.jsx)(qa,{})}),(0,F.jsx)(Ft,{path:`/practice`,element:(0,F.jsx)(lC,{})}),(0,F.jsx)(Ft,{path:`/exam`,element:(0,F.jsx)(pC,{})}),(0,F.jsx)(Ft,{path:`/errors`,element:(0,F.jsx)(mC,{})}),(0,F.jsx)(Ft,{path:`/review`,element:(0,F.jsx)(hC,{})}),(0,F.jsx)(Ft,{path:`/stats`,element:(0,F.jsx)(jC,{})}),(0,F.jsx)(Ft,{path:`/knowledge`,element:(0,F.jsx)(BC,{})})]})}),(0,F.jsx)(xa,{})]})}function WC(){return(0,F.jsx)(Dn,{children:(0,F.jsx)(UC,{})})}(0,_.createRoot)(document.getElementById(`root`)).render((0,F.jsx)(WC,{}));