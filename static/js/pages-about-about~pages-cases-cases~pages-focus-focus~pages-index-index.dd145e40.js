(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-about~pages-cases-cases~pages-focus-focus~pages-index-index"],{"013c":function(t,e,n){"use strict";n("c975"),n("a9e3"),n("acd8"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},i={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var n=function n(i){i.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",n),t.$emit("scrolldone",o))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",n)}})}}}};e.default=i},"20a1":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"flex align-center justify-center",staticStyle:{width:"100vw",background:"rgba(249, 103, 102, 0.06)"}},[o("v-uni-view",{staticStyle:{padding:"0.3rem 0 0.5rem 0"}},[o("v-uni-view",{staticClass:"flex align-center"},[o("v-uni-view",{},[o("v-uni-image",{staticStyle:{width:"1.72rem",height:"auto"},attrs:{src:n("bdc4"),mode:"widthFix"}}),o("v-uni-view",{staticStyle:{"font-size":"0.24rem",color:"#333333","line-height":"0.48rem"}},[t._v("全国咨询热线：13328233302"),o("br"),t._v("总部地址：福建省福州市仓山区宏利兴创意园4#303"),o("br"),t._v("联系邮箱：mogel@qq.com")])],1),o("v-uni-view",{staticStyle:{"margin-left":"4rem"}},[o("v-uni-view",{staticStyle:{"font-size":"0.24rem",color:"#333333"}},[t._v("微信公众号二维码")]),o("v-uni-image",{staticStyle:{width:"1.5rem",height:"auto","margin-top":"0.2rem"},attrs:{src:n("8069"),mode:"widthFix"}})],1)],1),o("v-uni-view",{staticStyle:{"text-align":"center","font-size":"0.24rem",color:"#333333","margin-top":"0.5rem"}},[t._v("福建亲师友科技有限公司"),o("v-uni-text",{staticStyle:{"text-decoration":"underline"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBeian.apply(void 0,arguments)}}},[t._v("闽ICP备2022006361号-1")])],1)],1)],1)},a=[]},"2bee":function(t,e,n){"use strict";n.r(e);var o=n("a296"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"422d":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},a=[]},5124:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".menu[data-v-059ccdbc]:hover{color:#333}.product-center[data-v-059ccdbc]{position:relative;margin-right:.8rem}.product-item[data-v-059ccdbc]{font-size:.24rem;color:#999;cursor:pointer}.product-item[data-v-059ccdbc]:hover{color:#ec3a39;font-weight:700}.product-list[data-v-059ccdbc]{width:3.4rem;font-size:.24rem;line-height:2;position:absolute;bottom:0;left:0;-webkit-transform:translateY(100%);transform:translateY(100%);background:#fff;color:#999;z-index:10;overflow:hidden;transition:all .3s ease}.navigation-bar-container[data-v-059ccdbc]{height:.9rem;background:#fff;width:100vw;border-bottom:1px solid #efefef}.bar-container[data-v-059ccdbc]{width:14rem;height:.9rem}.nav-logo[data-v-059ccdbc]{cursor:pointer;width:1.6rem}.menu-container[data-v-059ccdbc]{margin-left:1.7rem}.menu-item[data-v-059ccdbc]{font-size:.24rem;color:#999;margin-right:.8rem;cursor:pointer}.menu-item[data-v-059ccdbc]:hover{color:#ec3a39;font-weight:700}.menu-item.active[data-v-059ccdbc]{color:#ec3a39;font-weight:700}",""]),t.exports=e},"68a3":function(t,e,n){"use strict";n.r(e);var o=n("cb53"),i=n("f4b3");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var r,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"c04b8280",null,!1,o["a"],r);e["default"]=u.exports},"6d42":function(t,e,n){"use strict";n.r(e);var o=n("422d"),i=n("8f28");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var r,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=u.exports},"7d86":function(t,e,n){"use strict";var o=n("84d3"),i=n.n(o);i.a},8069:function(t,e,n){t.exports=n.p+"static/img/footer_qrcode.d34daea5.png"},"84d3":function(t,e,n){var o=n("5124");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("be35fee0",o,!0,{sourceMap:!1,shadowMode:!1})},"8cc6":function(t,e,n){"use strict";n.r(e);var o=n("a4f7"),i=n("ee74");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("7d86");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"059ccdbc",null,!1,o["a"],r);e["default"]=u.exports},"8f28":function(t,e,n){"use strict";n.r(e);var o=n("013c"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},a296:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"Footer",data:function(){return{}},computed:{},methods:{goBeian:function(){window.open("https://beian.miit.gov.cn/","_blank")}}};e.default=o},a4de:function(t,e,n){t.exports=n.p+"static/img/ico-to-top.5108b9f3.png"},a4f7:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"navigation-bar-container flex align-center justify-center"},[o("v-uni-view",{staticClass:"bar-container flex align-center flex-shrink"},[o("v-uni-image",{staticClass:"nav-logo",attrs:{src:n("bdc4"),mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menuClick(t.menus[0])}}}),o("v-uni-view",{staticClass:"menu-container flex align-center"},[o("v-uni-view",{staticClass:"menu-item",class:{active:t.menus[0].path==t.path},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menuClick(t.menus[0])}}},[t._v(t._s(t.menus[0].name))]),o("v-uni-view",{staticClass:"product-center",staticStyle:{height:"0.9rem","line-height":"0.9rem"},on:{mouseleave:function(e){arguments[0]=e=t.$handleEvent(e),t.mouseleave.apply(void 0,arguments)},mouseover:function(e){arguments[0]=e=t.$handleEvent(e),t.mouseover.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"product-item",staticStyle:{cursor:"pointer"}},[t._v("产品中心")]),o("v-uni-view",{staticClass:"product-list shadow",style:t.prodShow?"max-height:3rem":"max-height:0"},[o("v-uni-view",{staticStyle:{padding:"0.2rem"}},t._l(t.products,(function(e,n){return o("v-uni-view",{key:n,staticClass:"menu",staticStyle:{cursor:"pointer"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.productClick(e)}}},[t._v(t._s(e.name))])})),1)],1)],1),o("v-uni-view",{staticClass:"menu-item",class:{active:t.menus[1].path==t.path},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menuClick(t.menus[1])}}},[t._v(t._s(t.menus[1].name))]),o("v-uni-view",{staticClass:"menu-item",class:{active:t.menus[2].path==t.path},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menuClick(t.menus[2])}}},[t._v(t._s(t.menus[2].name))]),o("v-uni-view",{staticClass:"menu-item",class:{active:t.menus[3].path==t.path},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menuClick(t.menus[3])}}},[t._v(t._s(t.menus[3].name))])],1)],1)],1)},a=[]},ae96:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"BackTop",data:function(){return{}},computed:{topShow:function(){return this.$store.state.menu.topShow}},methods:{goTop:function(){uni.pageScrollTo({scrollTop:0,duration:100})}}};e.default=o},bdc4:function(t,e){t.exports="data:image/png;base64,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"},cb53:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.topShow,expression:"topShow"}],staticClass:"flex align-center justify-center ",staticStyle:{position:"fixed",bottom:"1rem",right:"0.5rem",width:"0.8rem",height:"0.8rem",background:"#F65B5A","border-radius":"0.1rem",cursor:"pointer","box-shadow":"0upx 10upx 20upx 0upx rgba(185, 61, 50, 1.0)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goTop.apply(void 0,arguments)}}},[o("v-uni-image",{staticStyle:{width:"0.5rem",height:"0.5rem"},attrs:{src:n("a4de"),mode:""}})],1)},a=[]},db7b:function(t,e,n){"use strict";n.r(e);var o=n("20a1"),i=n("2bee");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var r,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"61cc9714",null,!1,o["a"],r);e["default"]=u.exports},ea34:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"NavigationBar",data:function(){return{prodShow:!1,menus:[{path:"/",name:"首页"},{path:"/pages/cases/cases",name:"服务案例"},{path:"/pages/focus/focus",name:"媒体关注"},{path:"/pages/about/about",name:"关于我们"}],products:[{ref:"product1",name:"家庭教育数智化管理系统"},{ref:"product2",name:"数智化家长云校系统"},{ref:"product3",name:"新晋家庭能力促进平台系统"}]}},computed:{path:function(){return this.$route.path}},methods:{mouseleave:function(){this.prodShow=!1},mouseover:function(){this.prodShow=!0},productClick:function(t){this.$store.commit("menu/setMenuRef",t.ref),"/"!=t.path&&this.$router.push("/"),this.prodShow=!1},menuClick:function(t){t.path!=this.$route.path&&this.$router.push(t.path)}}};e.default=o},ee74:function(t,e,n){"use strict";n.r(e);var o=n("ea34"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},f4b3:function(t,e,n){"use strict";n.r(e);var o=n("ae96"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a}}]);