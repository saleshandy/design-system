"use strict";(self.webpackChunk_saleshandy_design_system=self.webpackChunk_saleshandy_design_system||[]).push([[620],{"./src/stories/toaster.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>toaster_stories});var react=__webpack_require__("./node_modules/react/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const toaster=new class ToastHelper{constructor(){_defineProperty(this,"bindActions",(renderToast=>{this._renderToast=renderToast})),_defineProperty(this,"toast",((content,options)=>this._renderToast&&this._renderToast({content,...options}))),_defineProperty(this,"info",((content,options)=>this.toast(content,{...options,variant:"info"}))),_defineProperty(this,"success",((content,options)=>this.toast(content,{...options,variant:"success"}))),_defineProperty(this,"error",((content,options)=>this.toast(content,{...options,variant:"error"})))}};let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,(e=>n.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e},i=(e,t,r,i,p)=>{let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[d],t,i,f),d},p=(e,t,r)=>e.reduce(((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==n?"":n)}),"");function u(e){let r=this||{},l=e.call?e(r.p):e;return i(l.unshift?l.raw?p(l,[].slice.call(arguments,1),r.p):l.reduce(((e,t)=>Object.assign(e,t&&t.call?t(r.p):t)),{}):l,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let d,f,g,h=u.bind({k:1});function j(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g&&i[0]&&g(c),d(i,c)}return t?t(a):a}}var T=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,U=(()=>{let e=0;return()=>(++e).toString()})(),dist_b=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),S=new Map,$=e=>{if(S.has(e))return;let t=setTimeout((()=>{S.delete(e),dist_u({type:4,toastId:e})}),1e3);S.set(e,t)},v=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=S.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((r=>r.id===t.toast.id?{...r,...t.toast}:r))};case 2:let{toast:o}=t;return e.toasts.find((r=>r.id===o.id))?v(e,{type:1,toast:o}):v(e,{type:0,toast:o});case 3:let{toastId:s}=t;return s?$(s):e.toasts.forEach((r=>{$(r.id)})),{...e,toasts:e.toasts.map((r=>r.id===s||void 0===s?{...r,visible:!1}:r))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((r=>r.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((r=>({...r,pauseDuration:r.pauseDuration+a})))}}},A=[],P={toasts:[],pausedAt:void 0},dist_u=e=>{P=v(P,e),A.forEach((t=>{t(P)}))},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},dist_h=e=>(t,o)=>{let s=((e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(null==o?void 0:o.id)||U()}))(t,e,o);return dist_u({type:2,toast:s}),s.id},dist_n=(e,t)=>dist_h("blank")(e,t);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,t,o)=>{let s=dist_n.loading(t.loading,{...o,...null==o?void 0:o.loading});return e.then((a=>(dist_n.success(T(t.success,a),{id:s,...o,...null==o?void 0:o.success}),a))).catch((a=>{dist_n.error(T(t.error,a),{id:s,...o,...null==o?void 0:o.error})})),e};var Z=(e,t)=>{dist_u({type:1,toast:{id:e,height:t}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:t,pausedAt:o}=((e={})=>{let[t,o]=(0,react.useState)(P);(0,react.useEffect)((()=>(A.push(o),()=>{let a=A.indexOf(o);a>-1&&A.splice(a,1)})),[t]);let s=t.toasts.map((a=>{var r,c;return{...e,...e[a.type],...a,duration:a.duration||(null==(r=e[a.type])?void 0:r.duration)||(null==e?void 0:e.duration)||Y[a.type],style:{...e.style,...null==(c=e[a.type])?void 0:c.style,...a.style}}}));return{...t,toasts:s}})(e);(0,react.useEffect)((()=>{if(o)return;let r=Date.now(),c=t.map((i=>{if(i.duration===1/0)return;let d=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(!(d<0))return setTimeout((()=>dist_n.dismiss(i.id)),d);i.visible&&dist_n.dismiss(i.id)}));return()=>{c.forEach((i=>i&&clearTimeout(i)))}}),[t,o]);let s=(0,react.useCallback)((()=>{o&&dist_u({type:6,time:Date.now()})}),[o]),a=(0,react.useCallback)(((r,c)=>{let{reverseOrder:i=!1,gutter:d=8,defaultPosition:p}=c||{},g=t.filter((m=>(m.position||p)===(r.position||p)&&m.height)),E=g.findIndex((m=>m.id===r.id)),x=g.filter(((m,R)=>R<E&&m.visible)).length;return g.filter((m=>m.visible)).slice(...i?[x+1]:[0,x]).reduce(((m,R)=>m+(R.height||0)+d),0)}),[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:ee,endPause:s,calculateOffset:a}}},oe=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,re=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,se=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ne=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ne} 1s linear infinite;
`,pe=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,de=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,w=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ue=j("div")`
  position: absolute;
`,le=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Te=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fe=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:t,type:o,iconTheme:s}=e;return void 0!==t?"string"==typeof t?react.createElement(fe,null,t):t:"blank"===o?null:react.createElement(le,null,react.createElement(V,{...s}),"loading"!==o&&react.createElement(ue,null,"error"===o?react.createElement(_,{...s}):react.createElement(w,{...s})))},ye=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,ge=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,be=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Se=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,F=react.memo((({toast:e,position:t,style:o,children:s})=>{let a=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,r]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(s),ge(s)];return{animation:t?`${h(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},r=react.createElement(M,{toast:e}),c=react.createElement(Se,{...e.ariaProps},T(e.message,e));return react.createElement(be,{className:e.className,style:{...a,...o,...e.style}},"function"==typeof s?s({icon:r,message:c}):react.createElement(react.Fragment,null,r,c))}));!function m(e,t,r,l){o.p=t,d=e,f=r,g=l}(react.createElement);var Ee=({id:e,className:t,style:o,onHeightUpdate:s,children:a})=>{let r=react.useCallback((c=>{if(c){let i=()=>{let d=c.getBoundingClientRect().height;s(e,d)};i(),new MutationObserver(i).observe(c,{subtree:!0,childList:!0,characterData:!0})}}),[e,s]);return react.createElement("div",{ref:r,className:t,style:o},a)},ve=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:s,children:a,containerStyle:r,containerClassName:c})=>{let{toasts:i,handlers:d}=D(o);return react.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...r},className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},i.map((p=>{let g=p.position||t,x=((e,t)=>{let o=e.includes("top"),s=o?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...s,...a}})(g,d.calculateOffset(p,{reverseOrder:e,gutter:s,defaultPosition:t}));return react.createElement(Ee,{id:p.id,key:p.id,onHeightUpdate:d.updateHeight,className:p.visible?ve:"",style:x},"custom"===p.type?T(p.message,p):a?a(p):react.createElement(F,{toast:p,position:g}))})))},_t=dist_n,classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),constants=__webpack_require__("./src/utils/constants.ts"),classname_modifiers=__webpack_require__("./src/utils/classname-modifiers.ts"),index_esm=__webpack_require__("./node_modules/@saleshandy/icons/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getToast=_ref=>{let{variant="info",showCloseButton=!1,duration=3e3,content,position="bottom-center"}=_ref;const TOAST_DURATION=showCloseButton&&3e3===duration?5e3:duration,componentClasses=classnames_default()(constants.M.Toast,(0,classname_modifiers.q)(constants.M.Toast,variant),(0,classname_modifiers.S)(constants.M.Toast,"showCloseButton",showCloseButton));return _t((t=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:(0,classname_modifiers.q)(constants.M.Toast,"content"),children:["success"===variant?(0,jsx_runtime.jsx)(index_esm.iOp,{}):"error"===variant?(0,jsx_runtime.jsx)(index_esm.GAo,{}):(0,jsx_runtime.jsx)(index_esm.KGT,{}),(0,jsx_runtime.jsx)("span",{children:content})]}),showCloseButton&&(0,jsx_runtime.jsx)("button",{className:(0,classname_modifiers.q)(constants.M.Toast,"close-btn"),onClick:()=>_t.dismiss(t.id),children:(0,jsx_runtime.jsx)(index_esm.a8P,{})})]})),{position,duration:TOAST_DURATION,className:componentClasses})};try{getToast.displayName="getToast",getToast.__docgenInfo={description:"",displayName:"getToast",props:{variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"error"'}]}},duration:{defaultValue:{value:"3000"},description:"",name:"duration",required:!1,type:{name:"number"}},showCloseButton:{defaultValue:{value:"false"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},position:{defaultValue:{value:"bottom-center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom-center"'},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/toaster/toast.tsx#getToast"]={docgenInfo:getToast.__docgenInfo,name:"getToast",path:"src/components/toaster/toast.tsx#getToast"})}catch(__react_docgen_typescript_loader_error){}class ToastManager extends react.Component{constructor(props){super(props),_defineProperty(this,"renderToast",(_ref=>{let{content,variant,showCloseButton,duration,position}=_ref;getToast({content,variant,showCloseButton,duration,position})})),this.renderToast=this.renderToast.bind(this);const{bindActions}=this.props;bindActions(this.renderToast)}render(){return(0,jsx_runtime.jsx)(Ie,{})}}ToastManager.displayName="ToastManager";try{ToastManager.displayName="ToastManager",ToastManager.__docgenInfo={description:"",displayName:"ToastManager",props:{bindActions:{defaultValue:null,description:"",name:"bindActions",required:!0,type:{name:"(...args: any[]) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/toaster/toast-manager.tsx#ToastManager"]={docgenInfo:ToastManager.__docgenInfo,name:"ToastManager",path:"src/components/toaster/toast-manager.tsx#ToastManager"})}catch(__react_docgen_typescript_loader_error){}var button_button=__webpack_require__("./src/components/button/button.tsx");const toaster_stories={title:"Components/Toaster",argTypes:{position:{description:"The position of the toaster on the screen.",defaultValue:"bottom-center",control:{type:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]}},showCloseButton:{description:"Render close button to dismiss the toaster.",defaultValue:!1},duration:{description:"The duration in seconds after which the toaster will auto hide.",defaultValue:3e3}},parameters:{docs:{description:{component:"Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.\n\n There are different types of toasts depending on the message they must show:\n Info: this toast has the scope of letting the user know about a neutral and informative change\n Success: this toast is indicative that the user just performed a successful or positive action\n Error: this toast indicates a potentially negative action that the user must take notice of\n\n Best practices -\n\n Use toasts to notify the user of information that is either time-sensitive or relevant to the action the user is performing\n\n DEVELOPER NOTE: For more information about the props, check react-hot-toast"}}}},Template=args=>(0,jsx_runtime.jsxs)("div",{className:"toaster-story__container",children:[(0,jsx_runtime.jsx)(ToastManager,{bindActions:toaster.bindActions}),(0,jsx_runtime.jsx)(button_button.q,{onClick:()=>toaster.info("Please note this simple info",args),children:"Info"}),(0,jsx_runtime.jsx)(button_button.q,{onClick:()=>toaster.success("Please note this is done",args),children:"Success"}),(0,jsx_runtime.jsx)(button_button.q,{onClick:()=>toaster.error("Please note this urgent issue",args),children:"Error"})]});Template.displayName="Template";const Example=Template.bind({});Example.args={position:"bottom-center",showCloseButton:!1,duration:3e3},Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"args => {\n  const showInfoToast = () => toaster.info('Please note this simple info', args);\n  const showSuccessToast = () => toaster.success('Please note this is done', args);\n  const showErrorToast = () => toaster.error('Please note this urgent issue', args);\n  return <div className=\"toaster-story__container\">\n      <ToastManager bindActions={toaster.bindActions} />\n      <Button onClick={showInfoToast}>Info</Button>\n      <Button onClick={showSuccessToast}>Success</Button>\n      <Button onClick={showErrorToast}>Error</Button>\n    </div>;\n}",...Example.parameters?.docs?.source}}};const __namedExportsOrder=["Example"];try{toasterstories.displayName="toasterstories",toasterstories.__docgenInfo={description:"Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.\n\nThere are different types of toasts depending on the message they must show:\nInfo: this toast has the scope of letting the user know about a neutral and informative change\nSuccess: this toast is indicative that the user just performed a successful or positive action\nError: this toast indicates a potentially negative action that the user must take notice of\n\nBest practices -\n\nUse toasts to notify the user of information that is either time-sensitive or relevant to the action the user is performing\n\nDEVELOPER NOTE: For more information about the props, check react-hot-toast",displayName:"toasterstories",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/toaster.stories.tsx#toasterstories"]={docgenInfo:toasterstories.__docgenInfo,name:"toasterstories",path:"src/stories/toaster.stories.tsx#toasterstories"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_utils_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/constants.ts"),_utils_classname_modifiers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/classname-modifiers.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className="",variant="primary",isFullWidth=!1,disabled=!1,isLoading=!1,loadingText="Loading...",children,icon:Icon,iconPlacement,...rest}=_ref;const componentClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.M.Button,(0,_utils_classname_modifiers__WEBPACK_IMPORTED_MODULE_4__.q)(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.M.Button,variant),(0,_utils_classname_modifiers__WEBPACK_IMPORTED_MODULE_4__.S)(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.M.Button,"disabled",disabled||isLoading),(0,_utils_classname_modifiers__WEBPACK_IMPORTED_MODULE_4__.S)(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.M.Button,"loading",isLoading),(0,_utils_classname_modifiers__WEBPACK_IMPORTED_MODULE_4__.S)(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.M.Button,"fullWidth",isFullWidth),className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{ref,className:componentClasses,disabled:disabled||isLoading,type:"button",...rest,children:isLoading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"shd-loader",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:loadingText})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["left"===iconPlacement&&Icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children}),"right"===iconPlacement&&Icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon,{})]})})}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"Buttons allow users to take actions, and make choices, with a single tap.\nA button triggers an event or action. This let users know what will happen next.\nThey are typically placed throughout your UI, in places like:\n<br /> - Modal windows\n<br /> - Forms\n<br /> - Cards\n<br /> - Toolbars",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'},{value:'"link"'},{value:'"link-subtle"'}]}},isFullWidth:{defaultValue:{value:"false"},description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"Loading..."},description:"",name:"loadingText",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FC<{}>"}},iconPlacement:{defaultValue:null,description:"",name:"iconPlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/classname-modifiers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>getClassNameByModifierBasedOnFlag,q:()=>getClassNameByModifier});const getClassNameByModifier=(base,modifier)=>modifier?"".concat(base,"--").concat(modifier):"",getClassNameByModifierBasedOnFlag=(base,modifier,flag)=>flag?"".concat(base,"--").concat(modifier):""},"./src/utils/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>ComponentClassNames});const ComponentClassNames={Avatar:"avatar",Button:"button",DragAndDrop:"drag-and-drop",ImageIcon:"image-icon",EmptyList:"empty-list",Toast:"toast",Pills:"pills",Accordion:"accordion",Carousel:"carousel",Input:"input"};Object.keys(ComponentClassNames).forEach((component=>{ComponentClassNames[component]="".concat("shd-").concat(ComponentClassNames[component])}))}}]);
//# sourceMappingURL=stories-toaster-stories.cee49eef.iframe.bundle.js.map