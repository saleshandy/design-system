/*! For license information please see stories-progress-bar-stories.9898e4cf.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_saleshandy_design_system=self.webpackChunk_saleshandy_design_system||[]).push([[648],{"./src/stories/progress-bar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>progress_bar_stories});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);const progressBarDefaultBreakPoints=[51,86],progressBarDefaultColors=["#FBBF24","#F87171"],progressBarBaseColor="#34D399";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProgressBar=react.forwardRef(((_ref,ref)=>{let{percentage,baseColor=progressBarBaseColor,hasBreakPoints=!0,breakPoints=progressBarDefaultBreakPoints,colors=progressBarDefaultColors}=_ref;const[bgColor,setBgColor]=(0,react.useState)(baseColor);return(0,react.useEffect)((()=>(hasBreakPoints&&breakPoints.forEach(((point,index)=>{percentage>=point&&setBgColor(colors[index])})),()=>{setBgColor(baseColor)})),[percentage,hasBreakPoints,breakPoints,baseColor,colors]),(0,jsx_runtime.jsx)("div",{ref,className:"progress-bar-wrapper",children:(0,jsx_runtime.jsx)("span",{style:{width:"".concat(percentage,"%")},children:(0,jsx_runtime.jsx)("span",{className:"progress-bar-wrapper__bar",style:{backgroundColor:bgColor}})})})}));ProgressBar.displayName="ProgressBar",ProgressBar.propTypes={percentage:prop_types_default().number.isRequired,hasBreakPoints:prop_types_default().bool,breakPoints:prop_types_default().arrayOf(prop_types_default().number.isRequired),colors:prop_types_default().arrayOf(prop_types_default().string.isRequired),baseColor:prop_types_default().string},ProgressBar.defaultProps={percentage:80,baseColor:progressBarBaseColor,hasBreakPoints:!0,breakPoints:progressBarDefaultBreakPoints,colors:progressBarDefaultColors};try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{percentage:{defaultValue:{value:"80"},description:"",name:"percentage",required:!1,type:{name:"number"}},baseColor:{defaultValue:{value:"#34D399"},description:"",name:"baseColor",required:!1,type:{name:"string"}},hasBreakPoints:{defaultValue:{value:"true"},description:"",name:"hasBreakPoints",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},breakPoints:{defaultValue:{value:"[51, 86]"},description:"",name:"breakPoints",required:!1,type:{name:"number[]"}},colors:{defaultValue:{value:"['#FBBF24', '#F87171']"},description:"",name:"colors",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/progress-bar/progress-bar.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/components/progress-bar/progress-bar.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}const progress_bar_stories={title:"Components/Progress Bar",component:ProgressBar},Template=_ref=>{let{...args}=_ref;return(0,jsx_runtime.jsx)(ProgressBar,{...args})};Template.displayName="Template";const Default=Template.bind({});Default.args={percentage:80,baseColor:progressBarBaseColor,hasBreakPoints:!0,breakPoints:progressBarDefaultBreakPoints,colors:progressBarDefaultColors},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => <ProgressBar {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);