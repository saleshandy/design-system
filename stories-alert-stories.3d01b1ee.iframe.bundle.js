/*! For license information please see stories-alert-stories.3d01b1ee.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_saleshandy_design_system=self.webpackChunk_saleshandy_design_system||[]).push([[352],{"./src/stories/alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,Variants:()=>Variants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>alert_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),constants=__webpack_require__("./src/utils/constants.ts"),classname_modifiers=__webpack_require__("./src/utils/classname-modifiers.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Alert=react.forwardRef(((_ref,ref)=>{let{className="",variant="info",header="",description="",size="lg",icon:Icon}=_ref;const componentClasses=classnames_default()(constants.M.Alert,(0,classname_modifiers.q)(constants.M.Alert,variant),(0,classname_modifiers.q)(constants.M.Alert,size),className);return(0,jsx_runtime.jsxs)("div",{ref,className:componentClasses,children:[Icon&&(0,jsx_runtime.jsx)("div",{className:"".concat(constants.M.Alert,"--icon"),children:(0,jsx_runtime.jsx)(Icon,{})}),(0,jsx_runtime.jsxs)("div",{className:"".concat(constants.M.Alert,"--text"),children:[header&&(0,jsx_runtime.jsx)("div",{className:"".concat(constants.M.Alert,"--header"),children:header}),(0,jsx_runtime.jsx)("div",{className:"".concat(constants.M.Alert,"--description"),children:description})]})]})}));Alert.displayName="Alert";try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"alert"'},{value:'"warning"'},{value:'"tricks"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FC<{}>"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"ReactNode"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/alert/alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/components/alert/alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}const alert_stories={title:"Components/Alert",component:Alert},Template=args=>(0,jsx_runtime.jsx)(Alert,{...args});Template.displayName="Template",Template.args={header:"",variant:"info",description:"",size:"lg"};const Variants=()=>(0,jsx_runtime.jsxs)("div",{className:"alert-story__container",children:[(0,jsx_runtime.jsx)(Alert,{variant:"info",description:""}),(0,jsx_runtime.jsx)(Alert,{variant:"alert",description:""}),(0,jsx_runtime.jsx)(Alert,{variant:"warning",description:""}),(0,jsx_runtime.jsx)(Alert,{variant:"tricks",description:""}),(0,jsx_runtime.jsx)(Alert,{variant:"success",description:""})]});Variants.displayName="Variants",Template.parameters={...Template.parameters,docs:{...Template.parameters?.docs,source:{originalSource:"args => <Alert {...args} />",...Template.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'() => <div className="alert-story__container">\n    <Alert variant="info" description=""></Alert>\n    <Alert variant="alert" description=""></Alert>\n    <Alert variant="warning" description=""></Alert>\n    <Alert variant="tricks" description=""></Alert>\n    <Alert variant="success" description=""></Alert>\n  </div>',...Variants.parameters?.docs?.source}}};const __namedExportsOrder=["Template","Variants"]},"./src/utils/classname-modifiers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>getClassNameByModifierBasedOnFlag,q:()=>getClassNameByModifier});const getClassNameByModifier=(base,modifier)=>modifier?"".concat(base,"--").concat(modifier):"",getClassNameByModifierBasedOnFlag=(base,modifier,flag)=>flag?"".concat(base,"--").concat(modifier):""},"./src/utils/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>ComponentClassNames});const ComponentClassNames={Avatar:"avatar",Button:"button",DragAndDrop:"drag-and-drop",ImageIcon:"image-icon",EmptyList:"empty-list",Toast:"toast",Pills:"pills",Accordion:"accordion",Carousel:"carousel",Input:"input",SearchInput:"search-input",Alert:"alert"};Object.keys(ComponentClassNames).forEach((component=>{ComponentClassNames[component]="".concat("shd-").concat(ComponentClassNames[component])}))},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);