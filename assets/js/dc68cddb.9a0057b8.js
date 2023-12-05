/*! For license information please see dc68cddb.9a0057b8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[764445],{799787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=n(824246),o=n(511151);const i={id:"plugin-jenkins.jenkinsapi.getprojects",title:"JenkinsApi.getProjects()",description:"API reference for JenkinsApi.getProjects()"},s=void 0,c={id:"reference/plugin-jenkins.jenkinsapi.getprojects",title:"JenkinsApi.getProjects()",description:"API reference for JenkinsApi.getProjects()",source:"@site/../docs/reference/plugin-jenkins.jenkinsapi.getprojects.md",sourceDirName:"reference",slug:"/reference/plugin-jenkins.jenkinsapi.getprojects",permalink:"/docs/reference/plugin-jenkins.jenkinsapi.getprojects",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-jenkins.jenkinsapi.getprojects.md",tags:[],version:"current",frontMatter:{id:"plugin-jenkins.jenkinsapi.getprojects",title:"JenkinsApi.getProjects()",description:"API reference for JenkinsApi.getProjects()"}},u={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-jenkins",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-jenkins"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-jenkins.jenkinsapi",children:(0,r.jsx)(t.code,{children:"JenkinsApi"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-jenkins.jenkinsapi.getprojects",children:(0,r.jsx)(t.code,{children:"getProjects"})})]}),"\n",(0,r.jsx)(t.p,{children:"Get the projects (jobs which have builds, not folders) including info about their lastBuild."}),"\n",(0,r.jsx)(t.p,{children:"Deciding what jobs are for an entity can be configured by the backstage _Integrator_ in the plugin-jenkins-backend setup and by the _Software Engineer_ using annotations agreed with the _Integrator_."}),"\n",(0,r.jsx)(t.p,{children:"Typically, a folder job will be identified and the backend plugin will recursively look for projects (jobs with builds) within that folder."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"getProjects(options: {\n        entity: CompoundEntityRef;\n        filter: {\n            branch?: string;\n        };\n    }): Promise<Project[]>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsxs)(t.td,{children:["{ entity: ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"}),"; filter: { branch?: string; }; }"]}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-jenkins.project",children:"Project"}),"[]>"]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,i={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:c.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,j={};function g(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||h}function b(){}function m(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var _=m.prototype=new b;_.constructor=m,y(_,g.prototype),_.isPureReactComponent=!0;var k=Array.isArray,v=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var o,i={},s=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)v.call(t,o)&&!S.hasOwnProperty(o)&&(i[o]=t[o]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var a=Array(u),l=0;l<u;l++)a[l]=arguments[l+2];i.children=a}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:n,type:e,key:s,ref:c,props:i,_owner:x.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,i,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return s=s(u=e),e=""===i?"."+R(u,0):i,k(s)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(s,t,o,"",(function(e){return e}))):null!=s&&(P(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(u=0,i=""===i?".":i+":",k(e))for(var a=0;a<e.length;a++){var l=i+R(c=e[a],a);u+=C(c,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(c=e.next()).done;)u+=C(c=c.value,t,o,l=i+R(c,a++),s);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},A={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:A,ReactCurrentOwner:x};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=s,t.PureComponent=m,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)v.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==u?u[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){u=Array(a);for(var l=0;l<a;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:n,type:e.type,key:i,ref:s,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:c},t)}}}]);