(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{2691:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing",function(){return __webpack_require__(5333)}])},233:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);var next_seo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2962),config__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3346);let Seo=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_seo__WEBPACK_IMPORTED_MODULE_2__.PB,{title:props.title,description:props.description,openGraph:{url:"".concat(config__WEBPACK_IMPORTED_MODULE_3__.ZP).concat(props.path),title:props.title,description:props.description,type:props.type||"website",locale:"en_US",article:{publishedTime:props.date,authors:["".concat(config__WEBPACK_IMPORTED_MODULE_3__.ZP,"about-us")]},images:[{url:props.image,width:1224,height:724,alt:props.title,type:"image/jpeg"}],site_name:"Aimstack"},twitter:{site:"@aimstackio",handle:"@aimstackio"}});__webpack_exports__.Z=Seo},3346:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c7:function(){return GITHUB_API},nI:function(){return SUBSCRIBE_API},ou:function(){return show_per_page}});let GITHUB_API="https://api.github.com/repos/aimhubio/aim/",SUBSCRIBE_API="https://formspree.io/f/xeqvdval",show_per_page=9;__webpack_exports__.ZP="https://aimstack.io/"},5333:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return pages_pricing}});var jsx_runtime=__webpack_require__(5893);__webpack_require__(7294);var styles=__webpack_require__(5270);let PricingCardStyle=(0,styles.zo)("div",{display:"flex",flex:"1",boxShadow:"$4",borderRadius:"$2",padding:"$6",backgroundColor:"$white"}),PricingCardList=(0,styles.zo)("ul",{marginBottom:"$6",paddingLeft:"$5",listStyleType:"disc",fontSize:"$2",li:{color:"$secondary","&:not(:last-child)":{marginBottom:"$3"},span:{color:"$black700"}}});var foundations=__webpack_require__(9923),UIkit=__webpack_require__(8561),dist_image=__webpack_require__(8782),image_default=__webpack_require__.n(dist_image);let PricingCard=param=>{let{title,buttonURL,buttonText,buttonVariant,image,list,description,plan}=param;return(0,jsx_runtime.jsx)(PricingCardStyle,{children:(0,jsx_runtime.jsxs)(foundations.kC,{direction:"column",justify:"between",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)(foundations.kC,{align:"center",css:{marginBottom:"$4"},children:[(0,jsx_runtime.jsx)(image_default(),{src:image,alt:title,height:44,width:44}),(0,jsx_runtime.jsx)(foundations.xv,{as:"h2",css:{fontWeight:"$4",marginLeft:"$4"},size:6,children:title})]}),(0,jsx_runtime.jsx)(foundations.xv,{size:2,css:{marginBottom:"$5",color:"$black700"},children:description}),(0,jsx_runtime.jsx)(PricingCardList,{children:list.map((item,index)=>(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("span",{children:item})},index))})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(foundations.xv,{size:3,css:{marginBottom:"$6",fontWeight:"$3"},children:plan}),(0,jsx_runtime.jsx)(UIkit.zx,{as:"a",variant:buttonVariant,href:buttonURL,target:"_blank",css:{fontSize:"$2"},children:buttonText})]})]})})};var content_pricingList=[{title:"Open Source",image:"/images/static/pricing/open-source.svg",description:"We are building with an open roadmap.\nWhile working with companies we use their feedback constantly in improving core Aim and sometimes reprioritizing items in the roadmap.",list:["Core Aim support","Open roadmap"],plan:"Free",buttonVariant:"secondary",buttonText:"Learn More",buttonURL:"https://github.com/aimhubio/aim"},{title:"Enterprise",image:"/images/static/pricing/enterprise.svg",description:"AimStack also offers paid Enterprise support that's beyond core Aim - mainly involving help with additional plugins and specific Aim deployments.",list:["Multi-user deployment","Custom plugins","Support outside core Aim"],plan:"Paid",buttonVariant:"primary",buttonText:"Contact us",buttonURL:"mailto:hello@aimstack.io"}],SEO=__webpack_require__(233),pricing={title:"Pricing | AimStack",description:"AimStack",image:"",path:"pricing"};let Pricing=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SEO.Z,{...pricing}),(0,jsx_runtime.jsxs)(foundations.W2,{children:[(0,jsx_runtime.jsxs)(foundations.kC,{direction:"column",className:"text-center",css:{py:"80px"},children:[(0,jsx_runtime.jsx)(foundations.xv,{as:"h1",size:10,css:{marginBottom:"$6"},children:"Aim support options"}),(0,jsx_runtime.jsx)(foundations.xv,{size:4,children:"Aim is free, open-source and self-hosted. "})]}),(0,jsx_runtime.jsx)(foundations.kC,{css:{paddingBottom:"104px"},direction:{"@bp2":"column"},gap:12,children:content_pricingList.map(card=>(0,jsx_runtime.jsx)(PricingCard,{...card},card.title))})]})]});var pages_pricing=Pricing}},function(__webpack_require__){__webpack_require__.O(0,[962,774,888,179],function(){return __webpack_require__(__webpack_require__.s=2691)}),_N_E=__webpack_require__.O()}]);