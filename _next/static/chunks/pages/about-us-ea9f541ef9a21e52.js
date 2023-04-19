(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{4183:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-us",function(){return __webpack_require__(5883)}])},233:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);var next_seo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2962),config__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3346);let Seo=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_seo__WEBPACK_IMPORTED_MODULE_2__.PB,{title:props.title,description:props.description,openGraph:{url:"".concat(config__WEBPACK_IMPORTED_MODULE_3__.ZP).concat(props.path),title:props.title,description:props.description,type:props.type||"website",locale:"en_US",article:{publishedTime:props.date,authors:["".concat(config__WEBPACK_IMPORTED_MODULE_3__.ZP,"about-us")]},images:[{url:props.image,width:1224,height:724,alt:props.title,type:"image/jpeg"}],site_name:"Aimstack"},twitter:{site:"@aimstackio",handle:"@aimstackio"}});__webpack_exports__.Z=Seo},3346:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c7:function(){return GITHUB_API},nI:function(){return SUBSCRIBE_API},ou:function(){return show_per_page}});let GITHUB_API="https://api.github.com/repos/aimhubio/aim/",SUBSCRIBE_API="https://formspree.io/f/xeqvdval",show_per_page=9;__webpack_exports__.ZP="https://aimstack.io/"},5883:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return about_us}});var jsx_runtime=__webpack_require__(5893);__webpack_require__(7294);var foundations=__webpack_require__(9923),styles=__webpack_require__(5270);let TeamStyle=(0,styles.zo)("section",{textAlign:"center",paddingTop:"100px"}),TeamList=(0,styles.zo)("ul",{display:"flex",flexWrap:"wrap",marginLeft:"-40px",marginTop:"100px","@bp1":{justifyContent:"center"},"@bp2":{marginLeft:"0"}}),TeamItem=(0,styles.zo)("li",{width:"calc((100% / 4) - 40px)",marginLeft:"40px",marginBottom:"60px","@bp1":{width:"calc((100% / 2) - 40px)",marginBottom:"40px"},"@bp2":{width:"100%",marginLeft:"0"},".card-content":{marginTop:"$6","@bp2":{textAlign:"left",marginTop:"0"}}}),TeamImage=(0,styles.zo)("div",{maskSize:"100%",WebkitMaskRepeat:"no-repeat",img:{objectFit:"contain",height:"100%",width:"100%"},"@bp2":{width:"100px",minWidth:"100px",marginRight:"$6"}});var dist_image=__webpack_require__(8782),image_default=__webpack_require__.n(dist_image);let Team=param=>{let{team}=param;return(0,jsx_runtime.jsx)(TeamStyle,{children:(0,jsx_runtime.jsxs)(foundations.W2,{children:[(0,jsx_runtime.jsx)(foundations.xv,{as:"h3",size:8,css:{marginBottom:"$6"},children:"AimStack Team"}),(0,jsx_runtime.jsx)(foundations.xv,{size:4,children:"We are thankful to the awesome Aim community for the constant feedback and the trust to build for them the most performant open-source experiment tracking tool. Our mission is to democratize the AI Dev tools."}),(0,jsx_runtime.jsx)(TeamList,{children:team.map((param,index)=>{let{image,fullName,jobTitle,description,shape}=param;return(0,jsx_runtime.jsx)(TeamItem,{children:(0,jsx_runtime.jsxs)(foundations.kC,{align:{"@initial":"center","@bp2":"start"},direction:{"@initial":"column","@bp2":"row"},className:"card",children:[(0,jsx_runtime.jsx)(TeamImage,{css:{maskImage:"url(".concat(shape,")")},children:(0,jsx_runtime.jsx)(image_default(),{src:image,alt:fullName,height:200,width:200,quality:100})}),(0,jsx_runtime.jsxs)("div",{className:"card-content",children:[(0,jsx_runtime.jsx)(foundations.xv,{as:"h4",size:3,css:{fontWeight:"$4"},children:fullName}),(0,jsx_runtime.jsx)(foundations.xv,{size:2,css:{py:"$2",fontWeight:"$3"},children:jobTitle}),(0,jsx_runtime.jsx)(foundations.xv,{css:{color:"$black700"},size:2,children:description})]})]})},index)})})]})})};var content_teamList=[{fullName:"Gev Sogomonian",jobTitle:"Co-author",description:"Previously has helped build AI-based customer-communication platform at Altocloud (acqu. by Genesys).",image:"/images/static/about-us/team/Gev_Sogomonian.jpg",shape:"/images/static/about-us/shapes/1.svg"},{fullName:"Gor Arakelyan",jobTitle:"Co-author",description:"Previously AI researcher at YerevaNN.",image:"/images/static/about-us/team/Gor_Arakelyan.jpg",shape:"/images/static/about-us/shapes/2.svg"},{fullName:"Albert Torosyan",jobTitle:"Primary maintainer - Backend",description:"Previously worked at Siemens on chip design tools and helped build larg-scale data infrastructure at Aarki (acqu. by Skillz).",image:"/images/static/about-us/team/Albert_Torosyan.jpg",shape:"/images/static/about-us/shapes/3.svg"},{fullName:"Ruben Karapetyan",jobTitle:"Primary maintainer - UI",description:"Previously built web-based video editor at Bynder.",image:"/images/static/about-us/team/Ruben_Karapetyan.jpg",shape:"/images/static/about-us/shapes/1.svg"},{fullName:"Karen Hambardzumyan",jobTitle:"Primary maintainer - Backend",description:"AI researcher working with YerevaNN, FAIR.",image:"/images/static/about-us/team/Karen_Hambardzumyan.jpg",shape:"/images/static/about-us/shapes/5.svg"},{fullName:"Kristina Hovsepyan",jobTitle:"Product Designer",description:"Previously helped build product at PicsArt and worked on design of web-based games.",image:"/images/static/about-us/team/Kristina_Hovsepyan.jpg",shape:"/images/static/about-us/shapes/6.svg"},{fullName:"Arsen Alkamyan",jobTitle:"Core contributor - UI",description:"Previously worked on web-based games.",image:"/images/static/about-us/team/Arsen_Alkamyan.jpg",shape:"/images/static/about-us/shapes/7.svg"},{fullName:"Karo Mouradyan",jobTitle:"Core contributor - UI",description:"Previously helped AI teams build web-based interfaces for AI applications.",image:"/images/static/about-us/team/Karo_Mouradyan.jpg",shape:"/images/static/about-us/shapes/6.svg"},{fullName:"Mihran Vanyan",jobTitle:"Core contributor - Backend",description:"Previously Senior Backend engineer at Teamable (acqu. by TalkDesk).",image:"/images/static/about-us/team/Mihran_Vanyan.jpg",shape:"/images/static/about-us/shapes/3.svg"},{fullName:"Tatyana Manaseryan",jobTitle:"Operations manager",description:"AI Enthusiast and Operations",image:"/images/static/about-us/team/Tatyana_Manaseryan.jpg",shape:"/images/static/about-us/shapes/5.svg"}];let AboutHero=(0,styles.zo)("section",{textAlign:"center",py:"80px"}),Culture=(0,styles.zo)("section",{py:"80px",color:"$white",backgroundColor:"$darkBlue",position:"relative","@bp1":{py:"44px"}}),CultureLeft=(0,styles.zo)("div",{flex:"1"}),CultureList=(0,styles.zo)("ul",{display:"flex",flexWrap:"wrap",marginLeft:"-60px",marginTop:"60px","@bp2":{marginLeft:"0",marginTop:"$8"}}),CultureItem=(0,styles.zo)("li",{width:"calc((100% / 2) - 60px)",marginLeft:"60px",marginBottom:"60px","@bp2":{width:"100%",marginLeft:"0",marginBottom:"$10"}}),CultureRight=(0,styles.zo)("div",{maxWidth:"650px",img:{width:"100%",height:"auto"},"@bp1":{margin:"0 auto"}});(0,styles.zo)("section",{py:"80px",textAlign:"center"}),(0,styles.zo)("a",{display:"inline-block",border:"2px solid $black",borderRadius:"$1",padding:"14px 26px",transition:"$main","&:hover":{backgroundColor:"$black003"},span:{display:"block",fontWeight:"600",fontSize:"$3",paddingTop:"$2"}});let cultureList=[{image:"/images/static/about-us/shield.svg",title:"Output-driven",description:"We do what we promised each other, customers, users, and investors. While effort is recognized, it’s not regarded equally. We care about what you achieve."},{image:"/images/static/about-us/message.svg",title:"Community-driven",description:"We are building Aim as a result of an in-depth collaboration with the users and many teams in the industry."},{image:"/images/static/about-us/run.svg",title:"Move Quickly & Iterate",description:"We believe speed is a competitive advantage as a company. We never shy away from asking: “Could we do this faster?”"},{image:"/images/static/about-us/smile.svg",title:"Kindness and fun",description:"Kindness and fun help us foster a positive and productive work environment where we feel valued and motivated."}];var about={title:"About-us | AimStack",description:"AimStack",image:"",path:"about-us"},SEO=__webpack_require__(233);let About=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SEO.Z,{...about}),(0,jsx_runtime.jsx)(AboutHero,{children:(0,jsx_runtime.jsxs)(foundations.W2,{children:[(0,jsx_runtime.jsx)(foundations.xv,{as:"h1",size:10,css:{marginBottom:"$6"},children:"What You Do Is Who You Are"}),(0,jsx_runtime.jsx)(foundations.W2,{css:{maxWidth:"848px"},children:(0,jsx_runtime.jsx)(foundations.xv,{size:4,children:"We are a group of engineers and designers deeply passionate about the problem of building AI Metadata Infrastructure. AI Metadata is A LOT, it’s multidimensional and heterogeneous. We Aim to help build world’s best AI Metadata systems."})})]})}),(0,jsx_runtime.jsxs)(Culture,{children:[(0,jsx_runtime.jsx)(image_default(),{className:"bg-top",layout:"fill",objectFit:"cover",objectPosition:"top",src:"/images/static/about-us/bg.png",priority:!0,alt:"Our Cultural Values",quality:100}),(0,jsx_runtime.jsxs)(foundations.W2,{css:{position:"relative",zIndex:2},children:[(0,jsx_runtime.jsx)(foundations.xv,{as:"h3",size:8,css:{"@bp1":{textAlign:"center"}},children:"Our Cultural Values"}),(0,jsx_runtime.jsxs)(foundations.kC,{align:"center",direction:{"@bp1":"columnReverse"},children:[(0,jsx_runtime.jsx)(CultureLeft,{children:(0,jsx_runtime.jsx)(CultureList,{children:cultureList.map((param,index)=>{let{image,title,description}=param;return(0,jsx_runtime.jsxs)(CultureItem,{children:[(0,jsx_runtime.jsx)(image_default(),{src:image,width:44,height:44,alt:title}),(0,jsx_runtime.jsx)(foundations.xv,{as:"h4",size:3,css:{fontWeight:"$3",padding:"$3 0 $2"},children:title}),(0,jsx_runtime.jsx)(foundations.xv,{css:{color:"$white700"},children:description})]},index)})})}),(0,jsx_runtime.jsx)(CultureRight,{children:(0,jsx_runtime.jsx)(image_default(),{src:"/images/static/about-us/team.png",width:695,height:525,alt:"AimSack team"})})]})]})]}),(0,jsx_runtime.jsx)(Team,{team:content_teamList})]});var about_us=About}},function(__webpack_require__){__webpack_require__.O(0,[962,774,888,179],function(){return __webpack_require__(__webpack_require__.s=4183)}),_N_E=__webpack_require__.O()}]);