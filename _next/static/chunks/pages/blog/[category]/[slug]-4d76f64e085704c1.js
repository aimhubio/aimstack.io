(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{4309:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[category]/[slug]",function(){return i(2638)}])},1409:function(t,e,i){"use strict";i.d(e,{UE:function(){return a},WD:function(){return c},aY:function(){return l},eW:function(){return d},fb:function(){return o},xu:function(){return s}});var n=i(2863),r=i(892);let a=(0,n.zo)("div",{padding:"10px",border:"1px solid #E2D7EB",borderRadius:"$2",transition:"$main",height:"100%","&:hover":{backgroundColor:"#F3F5F9"}}),o=(0,n.zo)("div",{position:"relative"}),s=(0,n.zo)(r.Z,{width:"100%",objectFit:"cover",height:"200px",minHeight:"200px"}),l=(0,n.zo)("div",{padding:"20px 10px 0px 10px",position:"relative"}),c=(0,n.zo)("div",{marginBottom:"$2",display:"flex",alignItems:"center",color:"$darkGrey",transition:"$main",".icon":{marginRight:"$1",fill:"$darkGrey",transition:"$main"},"&:hover":{color:"$darkGray",".icon":{fill:"$darkGray"}}}),d=(0,n.zo)("div",{display:"flex",alignItems:"center",justifyContent:"flex-end",".icon":{marginRight:"$1",fill:"$grey"}})},1736:function(t,e,i){"use strict";var n=i(5893);i(7294);var r=i(2962),a=i(6518);e.Z=t=>{let e=t.title.charAt(0).toUpperCase()+t.title.slice(1);return(0,n.jsx)(r.PB,{title:e,description:t.description,canonical:"".concat(a.ZP,"/").concat(t.path),openGraph:{url:"".concat(a.ZP,"/").concat(t.path),title:e,description:t.description,type:t.type||"website",locale:"en_US",article:{publishedTime:t.date,authors:["".concat(a.ZP,"/about-us")]},images:[{url:t.image,width:1224,height:724,alt:e,type:"image/jpeg"}],site_name:"AimStack"}})}},6518:function(t,e,i){"use strict";i.d(e,{c7:function(){return n},nI:function(){return r},ou:function(){return a}});let n="https://api.github.com/repos/aimhubio/aim/",r="https://formspree.io/f/xeqvdval",a=9;e.ZP="https://aimstack.io"},2638:function(t,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return z},default:function(){return PostPage}});var n=i(5893);i(7294);var r=i(1664),a=i.n(r),o=i(6243),s=i(1818),l=i(9011),c=i(2863),d=i(892);let u=(0,c.zo)("div",{}),h=(0,c.zo)("div",{position:"relative"}),m=(0,c.zo)(d.Z,{objectFit:"contain",minWidth:"100%",minHeight:"100%",width:"100%",height:"100%"}),g=(0,c.zo)("div",{display:"flex",justifyContent:"flex-end",marginBottom:"$10",button:{height:"40px",width:"40px",backgroundColor:"$lightGrey !important",borderRadius:"$1",marginLeft:"$3",transition:"$main","&:hover":{"&[aria-label=twitter]":{backgroundColor:"#43b1ff !important"},"&[aria-label=linkedin]":{backgroundColor:"#0A66C2 !important"},"&[aria-label=facebook]":{backgroundColor:"#6e8dd0 !important"},"&[aria-label=reddit]":{backgroundColor:"#fb411c !important"},".icon":{fill:"$white"}}}}),x=(0,c.zo)("div",{padding:"50px 0",borderTop:"2px solid $lightGrey",borderBottom:"2px solid $lightGrey",marginBottom:"50px",a:{transition:"$main",".text, .chevron-text":{transition:"$main"},"&:hover":{".text":{color:"$primary"}}}}),p=(0,c.zo)("div",{flex:1,paddingRight:"$3",borderRight:"2px solid $lightGrey","@bp2":{},a:{"&:hover":{".chevron-text":{transform:"translateX(15px)","@bp2":{transform:"translateX(0)"}}}}}),f=(0,c.zo)("div",{flex:1,textAlign:"right",paddingLeft:"$3",a:{"&:hover":{".chevron-text":{transform:"translateX(-15px)","@bp2":{transform:"translateX(0)"}}}}});var j=i(8729),v=i(1163),b=i(4680),$=i(1736),y=i(1409);i(6518);var k=i(9008),w=i.n(k),z=!0;function PostPage(t){var e,i;let{post:r,posts:c}=t,k=(0,v.useRouter)(),z=k.query,{slug:C,category:P}=z,_=c.findIndex(t=>t.slug===C),N="https://".concat(window.location.host),W="blog/".concat(P,"/").concat(r.slug),O="".concat(N,"/").concat(W),T=r.image.startsWith("http")?r.image:"".concat(N).concat(r.image);function getNeighborPostUrl(t){let{categories:e,slug:i}=c[t],n=(0,j.lV)(e[0]);return"/blog/".concat(n,"/").concat(i)}return(0,n.jsxs)(u,{children:[(0,n.jsxs)(w(),{children:[(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:r.title}),(0,n.jsx)("meta",{name:"twitter:description",content:r.description}),(0,n.jsx)("meta",{name:"twitter:image",content:T}),(0,n.jsx)("meta",{name:"twitter:site",content:"@aimstack"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@aimstack"})]}),(0,n.jsx)($.Z,{title:r.title,description:r.description,date:r.date,image:r.image,path:W}),(0,n.jsx)(l.W2,{style:{paddingTop:"100px"},children:(0,n.jsx)(a(),{href:"/blog",children:(0,n.jsxs)(l.kC,{align:"center",css:{marginTop:"$10"},children:[(0,n.jsx)(b.JO,{name:"back",size:20}),(0,n.jsx)(l.xv,{size:3,css:{fontWeight:"$3"},children:"Go Back"})]})})}),(0,n.jsxs)(l.W2,{css:{maxWidth:"848px"},children:[(0,n.jsxs)(l.kC,{gap:5,justify:"between",css:{marginTop:"$6"},children:[(0,n.jsx)(y.WD,{children:(0,n.jsx)(a(),{href:"/blog/".concat(P),children:(0,n.jsxs)(l.xv,{size:1,css:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(b.JO,{name:"folder",size:14}),r.categories[0]]})})}),(0,n.jsxs)(l.kC,{gap:2,align:"center",children:[(0,n.jsx)(b.JO,{name:"clock",size:14}),(0,n.jsx)(l.xv,{size:1,children:(0,j.Bi)(r.date)})]})]}),(0,n.jsx)(l.xv,{as:"h1",size:7,className:"title",css:{my:"$6",fontWeight:"$4"},children:r.title})]}),(0,n.jsx)(l.W2,{children:(0,n.jsx)(h,{children:(0,n.jsx)(m,{src:r.image,alt:r.title,title:r.title,width:1200,height:600,placeholder:"blur"},W)})}),(0,n.jsxs)(l.W2,{css:{maxWidth:"848px"},children:[(0,n.jsx)(l.V8,{className:"blog-inner",children:(0,n.jsx)(o.Z,{options:{overrides:{img:{component:d.Z,props:{fill:!0,alt:"blog image",style:{objectFit:"contain",aspectRatio:"auto"},className:"blog-image",key:C,placeholder:"blur"}}}},children:r.body.raw})}),(0,n.jsxs)(g,{children:[(0,n.jsx)(s.B,{url:O,title:r.title,children:(0,n.jsx)(b.JO,{size:16,name:"twitter"})}),(0,n.jsx)(s.r2,{url:O,title:r.title,children:(0,n.jsx)(b.JO,{size:16,name:"linkedIn"})}),(0,n.jsx)(s.Dk,{url:O,title:r.title,children:(0,n.jsx)(b.JO,{size:16,name:"fb"})}),(0,n.jsx)(s.iR,{url:O,title:r.title,children:(0,n.jsx)(b.JO,{size:16,name:"reddit"})})]})]}),(0,n.jsx)(x,{children:(0,n.jsx)(l.W2,{css:{maxWidth:"848px"},children:(0,n.jsxs)(l.kC,{children:[(0,n.jsx)(p,{children:!!_&&(0,n.jsxs)(a(),{rel:"prev",href:getNeighborPostUrl(_-1),children:[(0,n.jsxs)(l.kC,{align:"center",children:[(0,n.jsx)(b.JO,{name:"chevron-left"}),(0,n.jsx)(l.xv,{className:"chevron-text",size:1,css:{fontWeight:"$3"},children:"PREVIOUS POST"})]}),(0,n.jsx)(l.xv,{className:"text",size:1,lineClamp:!0,css:{marginTop:"$3",$$lineClamp:2},children:null===(e=c[_-1])||void 0===e?void 0:e.title})]})}),(0,n.jsx)(f,{children:_<c.length-1&&(0,n.jsxs)(a(),{rel:"next",href:getNeighborPostUrl(_+1),children:[(0,n.jsxs)(l.kC,{align:"center",justify:"end",children:[(0,n.jsx)(l.xv,{className:"chevron-text",size:1,css:{fontWeight:"$3"},children:"NEXT POST"}),(0,n.jsx)(b.JO,{name:"chevron-right"})]}),(0,n.jsx)(l.xv,{className:"text",size:1,lineClamp:!0,css:{marginTop:"$3",$$lineClamp:2},children:null===(i=c[_+1])||void 0===i?void 0:i.title})]})})]})})})]})}},8729:function(t,e,i){"use strict";i.d(e,{Bi:function(){return formattedDate},Qs:function(){return titleCase},eU:function(){return getTotalPosts},ef:function(){return ImageUrl},lV:function(){return slugify},mC:function(){return pageCount},oH:function(){return validateEmail}});var n=i(6518);function sortByDate(t,e){return new Date(e.date)-new Date(t.date)}function slugify(t){return String(t).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}function pageCount(t){return Math.ceil(t/n.ou)}function ImageUrl(t){return n.ZP+"/"+t}function titleCase(t){return t.replace(/(^\w)/g,t=>t[0].toUpperCase()).replace(/([-_]\w)/g,t=>" "+t[1].toUpperCase()).trim()}function formattedDate(t){return new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})}function getTotalPosts(t,e){let i=t.sort(sortByDate),r=i.filter((t,e)=>!t.draft),a=r.slice(0,n.ou);return 2===e&&(a=r.slice(n.ou,n.ou*e)),e>2&&(a=r.slice(n.ou*e-n.ou,n.ou*e)),a}let validateEmail=t=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}},function(t){t.O(0,[962,279,774,888,179],function(){return t(t.s=4309)}),_N_E=t.O()}]);