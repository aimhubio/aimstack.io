(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1127:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return __webpack_require__(909)}])},5349:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{UE:function(){return CardStyle},WD:function(){return Category},aY:function(){return CardContent},eW:function(){return CardFooter},fb:function(){return ImageWrapper}});var styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5270);let CardStyle=(0,styles__WEBPACK_IMPORTED_MODULE_0__.zo)("div",{}),ImageWrapper=(0,styles__WEBPACK_IMPORTED_MODULE_0__.zo)("div",{position:"relative",height:"0",paddingBottom:"65%"}),CardContent=(0,styles__WEBPACK_IMPORTED_MODULE_0__.zo)("div",{paddingTop:"50px",position:"relative"}),Category=(0,styles__WEBPACK_IMPORTED_MODULE_0__.zo)("div",{marginBottom:"$2",display:"flex",alignItems:"center",color:"$grey",transition:"$main",position:"absolute",top:"$6",".icon":{marginRight:"$1",fill:"$grey",transition:"$main"},"&:hover":{color:"$darkGray",".icon":{fill:"$darkGray"}}}),CardFooter=(0,styles__WEBPACK_IMPORTED_MODULE_0__.zo)("div",{display:"flex",alignItems:"center",justifyContent:"flex-end",".icon":{marginRight:"$1",fill:"$grey"}})},233:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);var next_seo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2962),config__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3346);let Seo=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_seo__WEBPACK_IMPORTED_MODULE_2__.PB,{title:props.title,description:props.description,openGraph:{url:"".concat(config__WEBPACK_IMPORTED_MODULE_3__.ZP).concat(props.path),title:props.title,description:props.description,type:props.type||"website",locale:"en_US",article:{publishedTime:props.date,authors:["".concat(config__WEBPACK_IMPORTED_MODULE_3__.ZP,"about-us")]},images:[{url:props.image,width:1224,height:724,alt:props.title,type:"image/jpeg"}],site_name:"Aimstack"},twitter:{cardType:"summary_large_image"}});__webpack_exports__.Z=Seo},3346:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c7:function(){return GITHUB_API},ou:function(){return show_per_page}});let GITHUB_API="https://api.github.com/repos/aimhubio/aim/",show_per_page=9;__webpack_exports__.ZP="https://v4.aimstack.io/"},909:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSG:function(){return __N_SSG},default:function(){return PostPage}});var jsx_runtime=__webpack_require__(5893);__webpack_require__(7294);var next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link),index_modern=__webpack_require__(6243),next_share_es=__webpack_require__(1818),foundations=__webpack_require__(9923),styles=__webpack_require__(5270);let BlogSingleStyle=(0,styles.zo)("div",{}),ImageWrapper=(0,styles.zo)("div",{position:"relative",img:{position:"static !important"}}),ShareSocial=(0,styles.zo)("div",{display:"flex",justifyContent:"flex-end",marginBottom:"$10",button:{height:"40px",width:"40px",backgroundColor:"$lightGrey !important",borderRadius:"$1",marginLeft:"$3",transition:"$main","&:hover":{"&[aria-label=twitter]":{backgroundColor:"#43b1ff !important"},"&[aria-label=linkedin]":{backgroundColor:"#0A66C2 !important"},"&[aria-label=facebook]":{backgroundColor:"#6e8dd0 !important"},"&[aria-label=reddit]":{backgroundColor:"#fb411c !important"},".icon":{fill:"$white"}}}}),PostNavigation=(0,styles.zo)("div",{padding:"50px 0",borderTop:"2px solid $lightGrey",borderBottom:"2px solid $lightGrey",marginBottom:"50px",a:{transition:"$main",".text, .chevron-text":{transition:"$main"},"&:hover":{".text":{color:"$primary"}}}}),Prev=(0,styles.zo)("div",{flex:1,paddingRight:"$3",borderRight:"2px solid $lightGrey","@bp2":{},a:{"&:hover":{".chevron-text":{transform:"translateX(15px)","@bp2":{transform:"translateX(0)"}}}}}),Next=(0,styles.zo)("div",{flex:1,textAlign:"right",paddingLeft:"$3",a:{"&:hover":{".chevron-text":{transform:"translateX(-15px)","@bp2":{transform:"translateX(0)"}}}}});var utils=__webpack_require__(558),UIkit=__webpack_require__(8561),dist_image=__webpack_require__(8782),image_default=__webpack_require__.n(dist_image),SEO=__webpack_require__(233),Card_style=__webpack_require__(5349),config=__webpack_require__(3346),__N_SSG=!0;function PostPage(param){var ref,ref1,ref2,ref3;let{post,posts}=param,index=posts.findIndex(object=>object.slug===post.slug),url="".concat(config.ZP,"/blog/").concat(post.slug);return(0,jsx_runtime.jsxs)(BlogSingleStyle,{children:[(0,jsx_runtime.jsx)(SEO.Z,{title:post.title,description:post.description,date:post.date,image:post.image,path:"blog/".concat(post.slug)}),(0,jsx_runtime.jsx)(foundations.W2,{children:(0,jsx_runtime.jsx)(link_default(),{href:"/blog",children:(0,jsx_runtime.jsxs)(foundations.kC,{align:"center",css:{marginTop:"$10"},children:[(0,jsx_runtime.jsx)(UIkit.JO,{name:"back",size:20}),(0,jsx_runtime.jsx)(foundations.xv,{size:3,css:{fontWeight:"$3"},children:"Go Back"})]})})}),(0,jsx_runtime.jsxs)(foundations.W2,{css:{maxWidth:"848px"},children:[(0,jsx_runtime.jsxs)(foundations.kC,{gap:5,justify:"between",css:{marginTop:"$6"},children:[(0,jsx_runtime.jsx)(Card_style.WD,{children:(0,jsx_runtime.jsx)(link_default(),{href:"/category/".concat(post.categories[0].toLowerCase()),children:(0,jsx_runtime.jsxs)(foundations.xv,{size:1,css:{display:"flex",alignItems:"center"},children:[(0,jsx_runtime.jsx)(UIkit.JO,{name:"folder",size:14}),post.categories[0]]})})}),(0,jsx_runtime.jsxs)(foundations.kC,{gap:2,align:"center",children:[(0,jsx_runtime.jsx)(UIkit.JO,{name:"clock",size:14}),(0,jsx_runtime.jsx)(foundations.xv,{size:1,children:(0,utils.Bi)(post.date)})]})]}),(0,jsx_runtime.jsx)(foundations.xv,{as:"h1",size:7,className:"title",css:{my:"$6",fontWeight:"$4"},children:post.title})]}),(0,jsx_runtime.jsx)(foundations.W2,{children:(0,jsx_runtime.jsx)(ImageWrapper,{children:(0,jsx_runtime.jsx)(image_default(),{src:post.image,className:"card-img-top",alt:post.title,title:post.title,layout:"fill",objectFit:"contain"})})}),(0,jsx_runtime.jsxs)(foundations.W2,{css:{maxWidth:"848px"},children:[(0,jsx_runtime.jsx)(foundations.V8,{className:"blog-inner",children:(0,jsx_runtime.jsx)(index_modern.Z,{children:post.body.raw})}),(0,jsx_runtime.jsxs)(ShareSocial,{children:[(0,jsx_runtime.jsx)(next_share_es.B,{url:url,title:post.title,children:(0,jsx_runtime.jsx)(UIkit.JO,{size:16,name:"twitter"})}),(0,jsx_runtime.jsx)(next_share_es.r2,{url:url,title:post.title,children:(0,jsx_runtime.jsx)(UIkit.JO,{size:16,name:"linkedIn"})}),(0,jsx_runtime.jsx)(next_share_es.Dk,{url:url,title:post.title,children:(0,jsx_runtime.jsx)(UIkit.JO,{size:16,name:"fb"})}),(0,jsx_runtime.jsx)(next_share_es.iR,{url:url,title:post.title,children:(0,jsx_runtime.jsx)(UIkit.JO,{size:16,name:"reddit"})})]})]}),(0,jsx_runtime.jsx)(PostNavigation,{children:(0,jsx_runtime.jsx)(foundations.W2,{css:{maxWidth:"848px"},children:(0,jsx_runtime.jsxs)(foundations.kC,{children:[(0,jsx_runtime.jsx)(Prev,{children:!!index&&(0,jsx_runtime.jsxs)(link_default(),{href:"/blog/".concat(null===(ref=posts[index-1])||void 0===ref?void 0:ref.slug),children:[(0,jsx_runtime.jsxs)(foundations.kC,{align:"center",children:[(0,jsx_runtime.jsx)(UIkit.JO,{name:"chevron-left"}),(0,jsx_runtime.jsx)(foundations.xv,{className:"chevron-text",size:1,css:{fontWeight:"$3"},children:"PREVIOUS POST"})]}),(0,jsx_runtime.jsx)(foundations.xv,{className:"text",size:1,lineClamp:!0,css:{marginTop:"$3",$$lineClamp:2},children:null===(ref1=posts[index-1])||void 0===ref1?void 0:ref1.title})]})}),(0,jsx_runtime.jsx)(Next,{children:index<posts.length-1&&(0,jsx_runtime.jsxs)(link_default(),{href:"/blog/".concat(null===(ref2=posts[index+1])||void 0===ref2?void 0:ref2.slug),children:[(0,jsx_runtime.jsxs)(foundations.kC,{align:"center",justify:"end",children:[(0,jsx_runtime.jsx)(foundations.xv,{className:"chevron-text",size:1,css:{fontWeight:"$3"},children:"NEXT POST"}),(0,jsx_runtime.jsx)(UIkit.JO,{name:"chevron-right"})]}),(0,jsx_runtime.jsx)(foundations.xv,{className:"text",size:1,lineClamp:!0,css:{marginTop:"$3",$$lineClamp:2},children:null===(ref3=posts[index+1])||void 0===ref3?void 0:ref3.title})]})})]})})})]})}},558:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Bi:function(){return formattedDate},Qs:function(){return titleCase},eU:function(){return getTotalPosts},ef:function(){return ImageUrl},lV:function(){return slugify},mC:function(){return pageCount}});var _config__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3346);function sortByDate(a,b){return new Date(b.date)-new Date(a.date)}function slugify(title){return title.toLowerCase().trim().replace(/[^\w ]+/g,"").replace(/ +/g,"-")}function pageCount(number){return Math.ceil(number/_config__WEBPACK_IMPORTED_MODULE_0__.ou)}function ImageUrl(url){return _config__WEBPACK_IMPORTED_MODULE_0__.ZP+url}function titleCase(str){return str.replace(/(^\w)/g,g=>g[0].toUpperCase()).replace(/([-_]\w)/g,g=>" "+g[1].toUpperCase()).trim()}function formattedDate(date){return new Date(date).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})}function getTotalPosts(posts,page){let postSortByDate=posts.sort(sortByDate),publish=postSortByDate.filter((post,i)=>!post.draft),totalPosts=publish.slice(0,_config__WEBPACK_IMPORTED_MODULE_0__.ou);return 2===page&&(totalPosts=publish.slice(_config__WEBPACK_IMPORTED_MODULE_0__.ou,_config__WEBPACK_IMPORTED_MODULE_0__.ou*page)),page>2&&(totalPosts=publish.slice(_config__WEBPACK_IMPORTED_MODULE_0__.ou*page-_config__WEBPACK_IMPORTED_MODULE_0__.ou,_config__WEBPACK_IMPORTED_MODULE_0__.ou*page)),totalPosts}}},function(__webpack_require__){__webpack_require__.O(0,[962,279,774,888,179],function(){return __webpack_require__(__webpack_require__.s=1127)}),_N_E=__webpack_require__.O()}]);