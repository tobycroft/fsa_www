(function(e){function o(o){for(var t,a,d=o[0],c=o[1],s=o[2],u=0,g=[];u<d.length;u++)a=d[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&g.push(r[a][0]),r[a]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);l&&l(o);while(g.length)g.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,o=0;o<i.length;o++){for(var n=i[o],t=!0,d=1;d<n.length;d++){var c=n[d];0!==r[c]&&(t=!1)}t&&(i.splice(o--,1),e=a(a.s=n[0]))}return e}var t={},r={index:0},i=[];function a(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var o=[],n=r[e];if(0!==n)if(n)o.push(n[2]);else{var t=new Promise((function(o,t){n=r[e]=[o,t]}));o.push(n[2]=t);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.src=function(e){return a.p+"static/js/"+({"pages-about-about~pages-cases-cases~pages-focus-focus~pages-index-index":"pages-about-about~pages-cases-cases~pages-focus-focus~pages-index-index","pages-about-about":"pages-about-about","pages-cases-cases":"pages-cases-cases","pages-focus-focus":"pages-focus-focus","pages-index-index":"pages-index-index","pages-products-products":"pages-products-products"}[e]||e)+"."+{"pages-about-about~pages-cases-cases~pages-focus-focus~pages-index-index":"9c05aa9c","pages-about-about":"591414dd","pages-cases-cases":"7d6d4a89","pages-focus-focus":"81ff3838","pages-index-index":"cf1646fe","pages-products-products":"0c2f0d28"}[e]+".js"}(e);var c=new Error;i=function(o){d.onerror=d.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var t=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+e+" failed.\n("+t+": "+i+")",c.name="ChunkLoadError",c.type=t,c.request=i,n[1](c)}r[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(o)},a.m=e,a.c=t,a.d=function(e,o,n){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)a.d(n,t,function(o){return e[o]}.bind(null,t));return n},a.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="/",a.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=o,d=d.slice();for(var s=0;s<d.length;s++)o(d[s]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,o,n){e.exports=n("67c2")},"1d10":function(e,o,n){"use strict";n("7a82");var t=n("4ea4").default;Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=t(n("a6ac")),i={onLaunch:function(){console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！"),console.log("App Launch"),window.onscroll=function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;r.default.commit("menu/setTopShow",e>uni.getSystemInfoSync().windowHeight)}},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};o.default=i},"28f1":function(e,o,n){"use strict";n("7a82"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={namespaced:!0,state:{menuRef:null,topShow:!1},mutations:{setMenuRef:function(e,o){e.menuRef=o},setTopShow:function(e,o){e.topShow=o}},actions:{}};o.default=t},"5ba0":function(e,o,n){"use strict";var t=n("7fc2"),r=n.n(t);r.a},"67c2":function(e,o,n){"use strict";var t=n("4ea4").default,r=t(n("5530"));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("fdc7"),n("1c31");var i=t(n("6a0a")),a=t(n("e143")),d=t(n("a6ac")),c=t(n("d262"));a.default.prototype.$store=d.default,a.default.use(c.default),a.default.config.productionTip=!1,i.default.mpType="app";var s=new a.default((0,r.default)({},i.default));s.$mount()},"6a0a":function(e,o,n){"use strict";n.r(o);var t=n("f117"),r=n("9881");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(o,e,(function(){return r[e]}))}(i);n("5ba0");var a=n("f0c5"),d=Object(a["a"])(r["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);o["default"]=d.exports},"7fc2":function(e,o,n){var t=n("8cfc");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var r=n("4f06").default;r("f6af2e00",t,!0,{sourceMap:!1,shadowMode:!1})},"8cfc":function(e,o,n){var t=n("24fb");o=t(!1),o.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 公共css样式库-类bootstrap */*{margin:0;padding:0}uni-image{vertical-align:middle}\r\n/* 宽度 */.w-100{width:%?750?%}.row{margin-right:%?-20?%;margin-left:%?-20?%;display:flex;flex-wrap:wrap;flex-direction:row}.col-1,\r\n.col-2,\r\n.col-3,\r\n.col-4,\r\n.col-5,\r\n.col-6,\r\n.col-7,\r\n.col-8,\r\n.col-9,\r\n.col-10,\r\n.col-11,\r\n.col-12{position:relative;padding-right:%?20?%;padding-left:%?20?%}.col-12{width:%?750?%}.col-11{width:%?687.5?%}.col-10{width:%?625?%}.col-9{width:%?562.5?%}.col-8{width:%?500?%}.col-7{width:%?437.5?%}.col-6{width:%?375?%}.col-5{width:%?312.5?%}.col-4{width:%?250?%}.col-3{width:%?187.5?%}.col-2{width:%?125?%}.col-1{width:%?62.5?%}.col-offset-12{margin-left:%?750?%}.col-offset-11{margin-left:%?687.5?%}.col-offset-10{margin-left:%?625?%}.col-offset-9{margin-left:%?562.5?%}.col-offset-8{margin-left:%?500?%}.col-offset-7{margin-left:%?437.5?%}.col-offset-6{margin-left:%?375?%}.col-offset-5{margin-left:%?312.5?%}.col-offset-4{margin-left:%?250?%}.col-offset-3{margin-left:%?187.5?%}.col-offset-2{margin-left:%?125?%}.col-offset-1{margin-left:%?62.5?%}.col-offset-0{margin-left:0}\r\n/* flex 布局 */.flex{display:flex;flex-direction:row}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-center{justify-content:center}.align-center{align-items:center}.align-stretch{align-items:stretch}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.content-start{align-content:flex-start}.content-end{align-content:flex-end}.content-center{align-content:center}.content-between{align-content:space-between}.content-around{align-content:space-around}.content-stretch{align-content:stretch}.flex-1{flex:1}.flex-2{flex:2}.flex-3{flex:3}.flex-4{flex:4}.flex-5{flex:5}.flex-shrink{flex-shrink:0}.container{padding-right:%?20?%;padding-left:%?20?%}\r\n/*  -- 内外边距 -- */.m-0{margin:0}.m-auto{margin:auto}.m-1{margin:%?10?%}.m-2{margin:%?20?%}.m-3{margin:%?30?%}.m-4{margin:%?40?%}.m-5{margin:%?50?%}.mt-0{margin-top:0}.mt-auto{margin-top:auto}.mt-1{margin-top:%?10?%}.mt-2{margin-top:%?20?%}.mt-3{margin-top:%?30?%}.mt-4{margin-top:%?40?%}.mt-5{margin-top:%?50?%}.mb-0{margin-bottom:0}.mb-auto{margin-bottom:auto}.mb-1{margin-bottom:%?10?%}.mb-2{margin-bottom:%?20?%}.mb-3{margin-bottom:%?30?%}.mb-4{margin-bottom:%?40?%}.mb-5{margin-bottom:%?50?%}.ml-0{margin-left:0}.ml-auto{margin-left:auto}.ml-1{margin-left:%?10?%}.ml-2{margin-left:%?20?%}.ml-3{margin-left:%?30?%}.ml-4{margin-left:%?40?%}.ml-5{margin-left:%?50?%}.mr-0{margin-right:0}.mr-auto{margin-right:auto}.mr-1{margin-right:%?10?%}.mr-2{margin-right:%?20?%}.mr-3{margin-right:%?30?%}.mr-4{margin-right:%?40?%}.mr-5{margin-right:%?50?%}.my-0{margin-top:0;margin-bottom:0}.my-auto{margin-top:auto;margin-bottom:auto}.my-1{margin-top:%?10?%;margin-bottom:%?10?%}.my-2{margin-top:%?20?%;margin-bottom:%?20?%}.my-3{margin-top:%?30?%;margin-bottom:%?30?%}.my-4{margin-top:%?40?%;margin-bottom:%?40?%}.my-5{margin-top:%?50?%;margin-bottom:%?50?%}.mx-0{margin-left:0;margin-right:0}.mx-auto{margin-left:auto;margin-right:auto}.mx-1{margin-left:%?10?%;margin-right:%?10?%}.mx-2{margin-left:%?20?%;margin-right:%?20?%}.mx-3{margin-left:%?30?%;margin-right:%?30?%}.mx-4{margin-left:%?40?%;margin-right:%?40?%}.mx-5{margin-left:%?50?%;margin-right:%?50?%}.p-0{padding:0}.p{padding:%?5?%}.p-1{padding:%?10?%}.p-2{padding:%?20?%}.p-3{padding:%?30?%}.p-4{padding:%?40?%}.p-5{padding:%?50?%}.pt-0{padding-top:0}.pt{padding-top:%?5?%}.pt-1{padding-top:%?10?%}.pt-2{padding-top:%?20?%}.pt-3{padding-top:%?30?%}.pt-4{padding-top:%?40?%}.pt-5{padding-top:%?50?%}.pb-0{padding-bottom:0}.pb-1{padding-bottom:%?10?%}.pb{padding-bottom:%?5?%}.pb-2{padding-bottom:%?20?%}.pb-3{padding-bottom:%?30?%}.pb-4{padding-bottom:%?40?%}.pb-5{padding-bottom:%?50?%}.pl-0{padding-left:0}.pl{padding-left:%?5?%}.pl-1{padding-left:%?10?%}.pl-2{padding-left:%?20?%}.pl-3{padding-left:%?30?%}.pl-4{padding-left:%?40?%}.pl-5{padding-left:%?50?%}.pr-0{padding-right:0}.pr{padding-right:%?5?%}.pr-1{padding-right:%?10?%}.pr-2{padding-right:%?20?%}.pr-3{padding-right:%?30?%}.pr-4{padding-right:%?40?%}.pr-5{padding-right:%?50?%}.py-0{padding-top:0;padding-bottom:0}.py{padding-top:%?5?%;padding-bottom:%?5?%}.py-1{padding-top:%?10?%;padding-bottom:%?10?%}.py-2{padding-top:%?20?%;padding-bottom:%?20?%}.py-3{padding-top:%?30?%;padding-bottom:%?30?%}.py-4{padding-top:%?40?%;padding-bottom:%?40?%}.py-5{padding-top:%?50?%;padding-bottom:%?50?%}.px-0{padding-left:0;padding-right:0}.px-1{padding-left:%?10?%;padding-right:%?10?%}.px{padding-left:%?5?%;padding-right:%?5?%}.px-2{padding-left:%?20?%;padding-right:%?20?%}.px-3{padding-left:%?30?%;padding-right:%?30?%}.px-4{padding-left:%?40?%;padding-right:%?40?%}.px-5{padding-left:%?50?%;padding-right:%?50?%}\r\n/* 文字大小 */.font-small{font-size:%?20?%}.font-sm{font-size:%?25?%}.font{font-size:%?30?%}.font-md{font-size:%?35?%}.font-lg{font-size:%?40?%}.h1{font-size:%?80?%;line-height:1.8}.h2{font-size:%?60?%;line-height:1.8}.h3{font-size:%?45?%;line-height:1.8}.h4{font-size:%?32?%;line-height:1.8}.h5{font-size:%?30?%;line-height:1.8}.h6{font-size:%?28?%;line-height:1.8}\r\n/* 文字缩进 */.text-indent{text-indent:2}\r\n/* 文字划线 */.text-through{text-decoration:line-through}\r\n/* 文字对齐 */.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}\r\n/* 文字换行溢出处理 */.text-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\r\n/* 文字粗细和斜体 */.font-weight-light{font-weight:300}\r\n/*细*/.font-weight-lighter{font-weight:100}\r\n/*更细*/.font-weight-normal{font-weight:400}\r\n/*正常*/.font-weight-bold{font-weight:700}\r\n/*粗*/.font-weight-bolder{font-weight:700}\r\n/*更粗*/.font-italic{font-style:italic}\r\n/*斜体*/\r\n/* 文字颜色 */.text-white{color:#fff}.text-primary{color:#007bff}.text-hover-primary{color:#0056b3}.text-secondary{color:#6c757d}.text-hover-secondary{color:#494f54}.text-success{color:#28a745}.text-hover-success{color:#19692c}.text-info{color:#17a2b8}.text-hover-info{color:#0f6674}.text-warning{color:#ffc107}.text-hover-warning{color:#ba8b00}.text-danger{color:#dc3545}.text-hover-danger{color:#a71d2a}.text-light{color:#f8f9fa}.text-hover-light{color:#cbd3da}.text-dark{color:#343a40}.text-hover-dark{color:#121416}.text-body{color:#212529}.text-muted{color:#6c757d}.text-light-muted{color:#a9a5a0}.text-light-black{color:rgba(0,0,0,.5)}.text-light-white{color:hsla(0,0%,100%,.5)}\r\n/* 背景颜色 */.bg-primary{background-color:#007bff}.bg-hover-primary:hover{background-color:#0062cc}.bg-secondary{background-color:#6c757d}.bg-hover-secondary:hover{background-color:#545b62}.bg-success{background-color:#28a745}.bg-hover-success{background-color:#1e7e34}.bg-info{background-color:#17a2b8}.bg-hover-info{background-color:#117a8b}.bg-warning{background-color:#ffc107}.bg-hover-warning{background-color:#d39e00}.bg-danger{background-color:#dc3545}.bg-hover-danger{background-color:#bd2130}.bg-light{background-color:#f8f9fa}.bg-hover-light{background-color:#dae0e5}.bg-dark{background-color:#343a40}.bg-hover-dark{background-color:#1d2124}.bg-white{background-color:#fff}.bg-transparent{background-color:initial}\r\n/* 边框 */.border{border-width:%?1?%;border-style:solid;border-color:#dee2e6}.border-top{border-top-width:%?1?%;border-top-style:solid;border-top-color:#dee2e6}.border-right{border-right-width:%?1?%;border-right-style:solid;border-right-color:#dee2e6}.border-bottom{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#dee2e6}.border-left{border-left-width:%?1?%;border-left-style:solid;border-left-color:#dee2e6}.border-0{border-width:0!important}.border-top-0{border-top-width:0!important}.border-right-0{border-right-width:0!important}.border-bottom-0{border-bottom-width:0!important}.border-left-0{border-left-width:0!important}.border-primary{border-color:#007bff}.border-secondary{border-color:#6c757d}.border-light-secondary{border-color:#e9e8e5}.border-success{border-color:#28a745}.border-info{border-color:#17a2b8}.border-warning{border-color:#ffc107}.border-danger{border-color:#dc3545}.border-light{border-color:#f8f9fa}.border-dark{border-color:#343a40}.border-white{border-color:#fff}\r\n/* 圆角 */.rounded{border-radius:%?8?%}.rounded-top{border-top-left-radius:%?8?%;border-top-right-radius:%?8?%}.rounded-right{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.rounded-bottom{border-bottom-right-radius:%?8?%;border-bottom-left-radius:%?8?%}.rounded-left{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.rounded-circle{border-radius:%?100?%}.rounded-0{border-radius:0}\r\n/* 显示 */.d-none{display:none}.d-inline-block{display:inline-block}.d-block{display:block}\r\n/* 内容溢出 */.overflow-hidden{overflow:hidden}\r\n/* 定位 */.position-relative{position:relative}.position-absolute{position:absolute}.position-fixed{position:fixed}\r\n/* 定位 - 固定顶部 */.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}\r\n/* 定位 - 固定底部 */.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.top-0{top:0}.left-0{left:0}.right-0{right:0}.bottom-0{bottom:0}\r\n/* 阴影 */.shadow{box-shadow:0 %?2?% %?12?% rgba(0,0,0,.15)}.shadow-lg{box-shadow:%?0?% %?40?% %?100?% %?0?% rgba(0,0,0,.175)}.shadow-none{box-shadow:none!important}',""]),e.exports=o},9881:function(e,o,n){"use strict";n.r(o);var t=n("1d10"),r=n.n(t);for(var i in t)["default"].indexOf(i)<0&&function(e){n.d(o,e,(function(){return t[e]}))}(i);o["default"]=r.a},a6ac:function(e,o,n){"use strict";n("7a82");var t=n("4ea4").default;Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,n("13d5"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319");var r=t(n("e143")),i=t(n("26cb")),a=t(n("5fe9"));r.default.use(i.default);var d=function(){var e=n("ca85"),o=e.keys().reduce((function(o,n){var t=n.replace(/^\.\/(.*)\.\w+$/,"$1"),r=e(n);return o[t]=r.default,o}),{});return o}(),c=new i.default.Store({modules:d,plugins:[(0,a.default)()]}),s=c;o.default=s},ca85:function(e,o,n){var t={"./menu.js":"28f1"};function r(e){var o=i(e);return n(o)}function i(e){if(!n.o(t,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=i,e.exports=r,r.id="ca85"},d262:function(e,o,n){"use strict";n("7a82"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={install:function(e){e.mixin({data:function(){var e=uni.getSystemInfoSync(),o=e.windowWidth;return{customerFontSize:o/19.2+"px"}},onload:function(){},methods:{},computed:{}})}};o.default=t},f117:function(e,o,n){"use strict";n.d(o,"b",(function(){return t})),n.d(o,"c",(function(){return r})),n.d(o,"a",(function(){}));var t=function(){var e=this.$createElement,o=this._self._c||e;return o("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},r=[]},fdc7:function(e,o,n){"use strict";(function(e){var o=n("4ea4").default;n("13d5"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319");var t=o(n("e143")),r={keys:function(){return[]}};e["____D98EEDD____"]=!0,delete e["____D98EEDD____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"亲师友",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},uniIdRouter:{}},e.__uniConfig.compilerVersion="3.6.15",e.__uniConfig.darkmode=!1,e.__uniConfig.themeConfig={},e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__D98EEDD",e.__uniConfig.appName="亲师友官网",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.aMapKey=void 0,e.__uniConfig.aMapSecurityJsCode=void 0,e.__uniConfig.aMapServiceHost=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=r.keys().reduce((function(e,o){var n=o.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=r(o);return Object.assign(e[n]||(e[n]={}),t.common||t),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=n.e,t.default.component("pages-index-index",(function(e){var o={component:Promise.all([n.e("pages-about-about~pages-cases-cases~pages-focus-focus~pages-index-index"),n.e("pages-index-index")]).then(function(){return e(n("9e57"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(o.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(o.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),o})),t.default.component("pages-products-products",(function(e){var o={component:n.e("pages-products-products").then(function(){return e(n("6b85"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(o.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(o.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),o})),t.default.component("pages-about-about",(function(e){var o={component:Promise.all([n.e("pages-about-about~pages-cases-cases~pages-focus-focus~pages-index-index"),n.e("pages-about-about")]).then(function(){return e(n("4c18"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(o.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(o.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),o})),t.default.component("pages-cases-cases",(function(e){var o={component:Promise.all([n.e("pages-about-about~pages-cases-cases~pages-focus-focus~pages-index-index"),n.e("pages-cases-cases")]).then(function(){return e(n("b80b"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(o.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(o.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),o})),t.default.component("pages-focus-focus",(function(e){var o={component:Promise.all([n.e("pages-about-about~pages-cases-cases~pages-focus-focus~pages-index-index"),n.e("pages-focus-focus")]).then(function(){return e(n("0818"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(o.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(o.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),o})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"亲师友-首页",navigationStyle:"custom"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/products/products",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"亲师友-产品中心",navigationStyle:"custom"})},[e("pages-products-products",{slot:"page"})])}},meta:{name:"pages-products-products",isNVue:!1,maxWidth:0,pagePath:"pages/products/products",windowTop:0}},{path:"/pages/about/about",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"亲师友-关于我们",navigationStyle:"custom"})},[e("pages-about-about",{slot:"page"})])}},meta:{name:"pages-about-about",isNVue:!1,maxWidth:0,pagePath:"pages/about/about",windowTop:0}},{path:"/pages/cases/cases",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"亲师友-服务案例",navigationStyle:"custom"})},[e("pages-cases-cases",{slot:"page"})])}},meta:{name:"pages-cases-cases",isNVue:!1,maxWidth:0,pagePath:"pages/cases/cases",windowTop:0}},{path:"/pages/focus/focus",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"亲师友-媒体关注",navigationStyle:"custom"})},[e("pages-focus-focus",{slot:"page"})])}},meta:{name:"pages-focus-focus",isNVue:!1,maxWidth:0,pagePath:"pages/focus/focus",windowTop:0}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,n("c8ba"))}});