/*! For license information please see 6d06173b.85dce952.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[335130],{10018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(824246),i=n(511151);const r={id:"extensions",title:"Frontend Extensions",sidebar_label:"Extensions",description:"Frontend extensions"},a=void 0,s={id:"frontend-system/architecture/extensions",title:"Frontend Extensions",description:"Frontend extensions",source:"@site/../docs/frontend-system/architecture/03-extensions.md",sourceDirName:"frontend-system/architecture",slug:"/frontend-system/architecture/extensions",permalink:"/docs/frontend-system/architecture/extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/architecture/03-extensions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"extensions",title:"Frontend Extensions",sidebar_label:"Extensions",description:"Frontend extensions"}},u={},c=[{value:"Extension Structure",id:"extension-structure",level:2},{value:"ID",id:"id",level:3},{value:"Output",id:"output",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Attachment Point",id:"attachment-point",level:3},{value:"Disabled",id:"disabled",level:3},{value:"Configuration &amp; Configuration Schema",id:"configuration--configuration-schema",level:3},{value:"Factory",id:"factory",level:3},{value:"Creating an Extensions",id:"creating-an-extensions",level:2},{value:"Extension Data",id:"extension-data",level:2},{value:"Extension Inputs",id:"extension-inputs",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Configuration Schema",id:"configuration-schema",level:2},{value:"Extension Creators",id:"extension-creators",level:2},{value:"Extension Boundary",id:"extension-boundary",level:2}];function l(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",h2:"h2",img:"img",h3:"h3",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"NOTE: The new frontend system is in a highly experimental phase"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["As mentioned in the ",(0,o.jsx)(t.a,{href:"/docs/frontend-system/architecture/apps",children:"previous section"}),", Backstage apps are built up from a tree of extensions. This section will go into more detail about what extensions are, how to create and use them, and how to create your own extensibility patterns."]}),"\n",(0,o.jsx)(t.h2,{id:"extension-structure",children:"Extension Structure"}),"\n",(0,o.jsx)(t.p,{children:"Each extensions has a number of different properties that define how it behaves and how it interacts with other extensions and the rest of the app. Some of these properties are fixed, while others can be customized by integrators. The diagram below illustrates the structure of an extension."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"frontend extension structure diagram",src:n(563045).Z+"",width:"411",height:"382"})}),"\n",(0,o.jsx)(t.h3,{id:"id",children:"ID"}),"\n",(0,o.jsx)(t.p,{children:"The ID of an extension is used to uniquely identity it, and it should ideally by unique across the entire Backstage ecosystem. For each frontend app instance there can only be a single extension for any given ID. Installing multiple extensions with the same ID will either result in an error or one of the extensions will override the others. The ID is also used to reference the extensions from other extensions, in configuration, and in other places such as developer tools and analytics."}),"\n",(0,o.jsx)(t.h3,{id:"output",children:"Output"}),"\n",(0,o.jsx)(t.p,{children:"The output of an extension is the data that it provides to its parent extension, and ultimately its contribution to the app. The output itself comes in the form of a collection of arbitrary values, anything that can be represented as a TypeScript type. However, each individual output value must be associated with a shared reference known as an extension data reference. You must also use these same references to be able to access individual output values of an extension."}),"\n",(0,o.jsx)(t.h3,{id:"inputs",children:"Inputs"}),"\n",(0,o.jsx)(t.p,{children:"The inputs of an extension define the data that it received from its children. Each extension can have multiple different inputs identified by an input name. These inputs each have their own set of data that they expect, which is defined as a collection of extension data references. An extension will only have access to the data that it has explicitly requested from each input."}),"\n",(0,o.jsx)(t.h3,{id:"attachment-point",children:"Attachment Point"}),"\n",(0,o.jsx)(t.p,{children:"The attachment point of an extension decides where in the app extension tree it will be located. It is defined by the ID of the parent extension, as well as the name of the input to attach to. Through the attachment point the extension will share its own output as inputs to the parent extension. An extension can only be attached to an input that matches its own output, it is an error to try to attach an extension to an input the requires data that the extension does not provide in its output."}),"\n",(0,o.jsx)(t.p,{children:"The attachment point is one of the configurable properties of an extension, and can be overridden by integrators. In doing so, care must be taken to make sure that one doesn't attach an extension to an incompatible input. Extensions can also only be attached to a single input and parent at a time. This means that the app extension tree can not contain any cycles, as the extension ancestry will either be terminated at the root, or be detached from it."}),"\n",(0,o.jsx)(t.h3,{id:"disabled",children:"Disabled"}),"\n",(0,o.jsx)(t.p,{children:"Each extension in the app can be disabled, meaning it will not be instantiated and its parent will effectively not see it in its inputs. When creating an extension you can also specify whether extensions should be disabled by default. This makes it possible to for example install multiple extensions in an app, but only choose to enable one or a few of them depending on the environment."}),"\n",(0,o.jsx)(t.p,{children:"The ordering of extensions is sometimes very important, as it may for example affect in which order they show up in the UI. When an extension is toggled from disabled to enabled through configuration it resets the ordering of the extension, pushing it to the end of the list. It is generally recommended to leave extensions as disabled by default if their order is important, allowing for the order in which their are enabled in the configuration to determine their order in the app."}),"\n",(0,o.jsx)(t.h3,{id:"configuration--configuration-schema",children:"Configuration & Configuration Schema"}),"\n",(0,o.jsx)(t.p,{children:"Each extension can define a configuration schema that describes the configuration that it accepts. This schema is used to validate the configuration provided by integrators, but also to fill in default configuration values. The configuration itself is provided by integrators in order to customize the extension. It is not possible to provide a default configuration of an extension, this must instead be done through defaults in the configuration schema. This allows for a simpler configuration logic where multiple configurations of the same extension completely replace each other rather than being merged."}),"\n",(0,o.jsx)(t.h3,{id:"factory",children:"Factory"}),"\n",(0,o.jsx)(t.p,{children:"The extension factory is the implementation of the extension itself. It is a function that is provided with any inputs and configuration that the extension received, and must produce the output that it defined. When an app instance starts up it will call the factory function of each extension that is part of the app, starting at leaf nodes and working its way up to the root of the app extension tree. The factory will only be called for active extensions, which is an extension that is not disabled and has an active parent."}),"\n",(0,o.jsx)(t.p,{children:"Extension factories should be lean and not do any heavy lifting or async work, as they are called during the initialization of the app. For example, if you need to do an expensive computation to generate your output, then prefer outputting a callback that does the computation instead. This allows the parent extension to defer the computation for later so that you avoid blocking the app startup."}),"\n",(0,o.jsx)(t.h2,{id:"creating-an-extensions",children:"Creating an Extensions"}),"\n",(0,o.jsxs)(t.p,{children:["Extensions are created using the ",(0,o.jsx)(t.code,{children:"createExtension"})," function from ",(0,o.jsx)(t.code,{children:"@backstage/frontend-plugin-api"}),". At minimum you need to provide an ID, attachment point, output definition, and a factory function. The following example shows the creation of a minimal extension:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"const extension = createExtension({\n  id: 'my-extension',\n  // This is the attachment point, `id` is the ID of the parent extension,\n  // while `input` is the name of the input to attach to.\n  attachTo: { id: 'my-parent', input: 'content' },\n  // The output map defines the outputs of the extension. The object keys\n  // are only used internally to map the outputs of the factory and do\n  // not need to match the keys of the input.\n  output: {\n    element: coreExtensionData.reactElement,\n  },\n  // This factory is called to instantiate the extensions and produce its output.\n  factory({ bind }) {\n    bind({\n      element: <div>Hello World</div>,\n    });\n  },\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Note that while the ",(0,o.jsx)(t.code,{children:"createExtension"})," is public API and used in many places, it is not typically what you use when building plugins and features. Instead there are many extension creator functions exported by both the core APIs and plugins that make it easier to create extensions for more specific usages."]}),"\n",(0,o.jsx)(t.p,{children:"... TODO ..."}),"\n",(0,o.jsx)(t.h2,{id:"extension-data",children:"Extension Data"}),"\n",(0,o.jsx)(t.p,{children:"TODO"}),"\n",(0,o.jsx)(t.h2,{id:"extension-inputs",children:"Extension Inputs"}),"\n",(0,o.jsx)(t.p,{children:"TODO"}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(t.p,{children:"TODO"}),"\n",(0,o.jsx)(t.h2,{id:"configuration-schema",children:"Configuration Schema"}),"\n",(0,o.jsx)(t.p,{children:"TODO"}),"\n",(0,o.jsx)(t.h2,{id:"extension-creators",children:"Extension Creators"}),"\n",(0,o.jsx)(t.p,{children:"TODO"}),"\n",(0,o.jsx)(t.h2,{id:"extension-boundary",children:"Extension Boundary"}),"\n",(0,o.jsx)(t.p,{children:"TODO"})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},563045:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/architecture-extension.drawio-9a77417dfc89f5da4b643f41030f28e4.svg"},371426:(e,t,n)=>{var o=n(827378),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,r={},c=null,l=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,o)&&!u.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:i,type:e,key:c,ref:l,props:r,_owner:s.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function m(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||p}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var g=v.prototype=new b;g.constructor=v,y(g,m.prototype),g.isPureReactComponent=!0;var w=Array.isArray,j=Object.prototype.hasOwnProperty,_={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,o){var i,r={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,i)&&!E.hasOwnProperty(i)&&(r[i]=t[i]);var u=arguments.length-2;if(1===u)r.children=o;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];r.children=c}if(e&&e.defaultProps)for(i in u=e.defaultProps)void 0===r[i]&&(r[i]=u[i]);return{$$typeof:n,type:e,key:a,ref:s,props:r,_owner:_.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,i,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case o:u=!0}}if(u)return a=a(u=e),e=""===r?"."+O(u,0):r,w(a)?(i="",null!=e&&(i=e.replace(S,"$&/")+"/"),C(a,t,i,"",(function(e){return e}))):null!=a&&(T(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(S,"$&/")+"/")+e)),t.push(a)),1;if(u=0,r=""===r?".":r+":",w(e))for(var c=0;c<e.length;c++){var l=r+O(s=e[c],c);u+=C(s,t,i,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(s=e.next()).done;)u+=C(s=s.value,t,i,l=r+O(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function I(e,t,n){if(null==e)return e;var o=[],i=0;return C(e,o,"","",(function(e){return t.call(n,e,i++)})),o}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},$={transition:null},P={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:$,ReactCurrentOwner:_};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=i,t.Profiler=a,t.PureComponent=v,t.StrictMode=r,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=y({},e.props),r=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=_.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)j.call(t,c)&&!E.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=o;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}return{$$typeof:n,type:e.type,key:r,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>r});var o=n(667294);const i=o.createContext({});function r(e){const t=o.useContext(i);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:r(e),o.createElement(i.Provider,{value:s},t)}}}]);