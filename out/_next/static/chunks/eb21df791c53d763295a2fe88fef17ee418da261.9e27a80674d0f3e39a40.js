(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[2],{"+tsZ":function(e,t,n){e.exports={section:"Footer_section__3_9tg",container:"Footer_container__2XN74",footer:"Footer_footer__317iK"}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"1FYc":function(e,t,n){"use strict";var r=n("nKUr"),o=(n("q1tI"),n("8Kt/")),a=n.n(o),i=n("H9SB");t.a=function(){return Object(r.jsx)(r.Fragment,{children:Object(i.a)()?Object(r.jsx)(a.a,{children:Object(r.jsx)("script",{dangerouslySetInnerHTML:{__html:'!(function () {\n                var analytics = (window.analytics = window.analytics || []);\n                if (!analytics.initialize)\n                  if (analytics.invoked)\n                    window.console &&\n                      console.error &&\n                      console.error("Segment snippet included twice.");\n                  else {\n                    analytics.invoked = !0;\n                    analytics.methods = [\n                      "trackSubmit",\n                      "trackClick",\n                      "trackLink",\n                      "trackForm",\n                      "pageview",\n                      "identify",\n                      "reset",\n                      "group",\n                      "track",\n                      "ready",\n                      "alias",\n                      "debug",\n                      "page",\n                      "once",\n                      "off",\n                      "on",\n                      "addSourceMiddleware",\n                      "addIntegrationMiddleware",\n                      "setAnonymousId",\n                      "addDestinationMiddleware",\n                    ];\n                    analytics.factory = function (e) {\n                      return function () {\n                        var t = Array.prototype.slice.call(arguments);\n                        t.unshift(e);\n                        analytics.push(t);\n                        return analytics;\n                      };\n                    };\n                    for (var e = 0; e < analytics.methods.length; e++) {\n                      var key = analytics.methods[e];\n                      analytics[key] = analytics.factory(key);\n                    }\n                    analytics.load = function (key, e) {\n                      var t = document.createElement("script");\n                      t.type = "text/javascript";\n                      t.async = !0;\n                      t.src =\n                        "https://cdn.segment.com/analytics.js/v1/" +\n                        key +\n                        "/analytics.min.js";\n                      var n = document.getElementsByTagName("script")[0];\n                      n.parentNode.insertBefore(t, n);\n                      analytics._loadOptions = e;\n                    };\n                    analytics._writeKey = "yoyQudE6HDZ6UmHcnhtZFwKC7LleWQJg";\n                    analytics.SNIPPET_VERSION = "4.15.3";\n                    analytics.load("yoyQudE6HDZ6UmHcnhtZFwKC7LleWQJg");\n                    analytics.page();\n                  }\n              })()'}})}):null})}},"2MzL":function(e,t,n){e.exports={TextMD:"Typography_TextMD__2Zpo8",TextLG:"Typography_TextLG__3ynyG",container:"Typography_container__1iTOH"}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var s=d[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],f=r[s]||new Set;f.has(l)?a=!1:(f.add(l),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function y(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}y.rewind=function(){};var h=y;t.default=h},"8lYe":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("nKUr"),o=n("+tsZ"),a=n.n(o),i=n("2MzL"),c=n.n(i);n("q1tI");function u(){return Object(r.jsx)("footer",{className:"".concat(a.a.section," ").concat(a.a.footer),children:Object(r.jsx)("div",{className:a.a.container,children:Object(r.jsxs)("p",{className:c.a.TextMD,children:["\xa9 AimStack, ",(new Date).getFullYear()]})})})}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},H9SB:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));function r(){return!0}var o=!1,a=function(){return console.log(!0),!1!==window.analytics},i=function(){o||(window.analytics._writeKey="yoyQudE6HDZ6UmHcnhtZFwKC7LleWQJg",window.analytics.load("yoyQudE6HDZ6UmHcnhtZFwKC7LleWQJg"),o=!0,console.log("init"))},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a()&&(i(),console.log("eventName:",e),window.analytics.track(e,t,{path:window.location.pathname,url:window.location.hostname,page:{path:null,search:null,referrer:null,title:null,url:null}}))}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},b0oO:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("nKUr"),o=(n("q1tI"),n("H9SB")),a=n("fzO5"),i=n.n(a);function c(){function e(e){Object(o.b)("[Header] go to ".concat(e))}return Object(r.jsx)("header",{className:"".concat(i.a.header," ").concat(i.a.headerShadow),children:Object(r.jsxs)("nav",{className:i.a.headerNav,children:[Object(r.jsx)("a",{href:"/#aim",children:"Aim"}),Object(r.jsx)("a",{href:"/#about",children:"About"}),Object(r.jsx)("a",{href:"/learn",children:"Learn"}),Object(r.jsx)("a",{href:"https://github.com/aimhubio/aim/wiki/contributing",target:"_blank",rel:"noreferrer noopener",onClick:function(){return e("contribute")},children:"Contribute"}),Object(r.jsx)("a",{href:"https://aimstack.readthedocs.io/en/stable/",target:"_blank",rel:"noreferrer noopener",onClick:function(){return e("docs")},children:"Docs"}),Object(r.jsx)("a",{href:"https://github.com/aimhubio/aim",target:"_blank",rel:"noreferrer noopener",onClick:function(){return e("GitHub")},children:"GitHub"})]})})}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},fzO5:function(e,t,n){e.exports={header:"Header_header__182Qc",headerShadow:"Header_headerShadow__2oFg6",headerNav:"Header_headerNav__2YKDM"}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}}]);