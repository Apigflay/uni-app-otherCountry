(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d95":function(t,a,e){"use strict";e.r(a);var n=e("a243"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=i.a},"41c8":function(t,a,e){"use strict";e.r(a);var n=e("9b9f"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=i.a},"4b65":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIEAYAAAD9yHLdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAwRJREFUeNrt3K9O62Acx+G3CwzGn2om5kiwJEPgsEguYAl3wMVwDbsAJBIcgiZYEhxiWMpgsGXbEUsnj/gd0ZLzPOptmjRf90nNmxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNlVWHw+vD68Prra18kA/ywe1t3cMAaJZyWA7L4fn5y9XL1cvVz886IP1+v9/v7+ysnj4/6x4KQBPt7hZFURTF11er7ikA/E4CAkCIgAAQIiAAhAgIACECAkCIgAAQIiAAhAgIACECAkCIgAAQIiAAhAgIACEb1WHzZvNm82a5nHan3Wm3LOseBkCztEftUXu0XKZe6qVe3WsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoiKw6nC3PlmfL7e2PycfkY/L0VPcwAJplv7Pf2e8cH99n99l99v29Ub0Yn4xPxietVpaylKWjo7qHAtAs4zRO49RqVc+tf/kYAP8vAQEgREAACBEQAEIEBIAQAQEgREAACBEQAEIEBIAQAQEgREAACBEQAEIEBICQ9W28e497j3uPi8XqOvfn57qHAdAsq+vcF4u0urYdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUkopqw6nr6evp6+dzrQ77U67b291DwOgWdqj9qg9Ojh46D30HnqTyUb1YnYxu5hdZFmWspSlPK97KADNMkuzNEvZ+sejVfcgAH4nAQEgREAACBEQAEIEBIAQAQEgREAACBEQAEIEBIAQAQEgREAACBEQAEIEBICQ9W2875fvl++X83k+yAf54O6u7mEANEs5LIflcD5PRSpSUfcaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/uoPCuN2X81uACMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDYtMjZUMTQ6MjI6MjYrMDg6MDArDReLAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA2LTI2VDE0OjIyOjI2KzA4OjAwWlCvNwAAAEt0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fdG01Z3g5NWMyaS9zYW5nZWhlbmcuc3ZnP6Dg8AAAAABJRU5ErkJggg=="},"52aa":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content"},[e("navBar"),e("v-uni-view",{staticClass:"swiper_area"},[e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"page-section swiper"},[e("v-uni-view",{staticClass:"page-section-spacing"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{circular:t.circular,"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(6,function(a,n){return e("v-uni-swiper-item",{key:n,staticClass:"swiper-item"},[e("v-uni-view",{staticClass:"swiper-item uni-bg-red"},[t._v(t._s(a))])],1)}),1)],1)],1)],1)],1),e("div",{staticClass:"list_area"},t._l(t.listData,function(a,n){return e("div",{key:n,staticClass:"per",attrs:{id:n},on:{click:function(a){a=t.$handleEvent(a),t.goListPage(a)}}},[e("span",{staticClass:"iconfont",class:a.imgSrc}),e("p",[t._v(t._s(a.name))])])}),0),e("v-uni-view",{staticClass:"text-area"},[e("v-uni-text",{staticClass:"title",on:{click:function(a){a=t.$handleEvent(a),t.goPhonenum(a)}}},[t._v(t._s(t.title))])],1),e("v-uni-view",{staticClass:"share_area",on:{click:function(a){a=t.$handleEvent(a),t.shareMessage(a)}}},[t._v("分享微信")])],1)},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},"7a0d":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"tab_bar"},[n("div",{staticClass:"tip"},[n("img",{staticClass:"img",attrs:{src:e("4b65"),alt:""}}),n("div",{staticClass:"circle"},[t._v(t._s(t.msg))])]),n("div",{staticClass:"tab"},t._l(t.textData,function(a,e){return n("em",{key:e,class:1==t.activityBg&&e==t.activityBgId?"activityBg":"noActivityBg",attrs:{id:e},on:{click:function(a){a=t.$handleEvent(a),t.goSwich(a)},touchstart:function(a){a=t.$handleEvent(a),t.getStartStatus(a)},touchend:function(a){a=t.$handleEvent(a),t.getEndStatus(a)}}},[n("em",{class:e==t.activityId?"active noActivity":"noActivity"},[t._v(t._s(a))])])}),0),n("div",{staticClass:"search"},[n("v-uni-view",{staticClass:"iconfont icon-search"})],1)])},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},"7d74":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:iconfont;  /* project id 1374464 */src:url(https://at.alicdn.com/t/font_1374464_iw52nl1s22o.eot);src:url(https://at.alicdn.com/t/font_1374464_iw52nl1s22o.eot#iefix) format("embedded-opentype"),url(https://at.alicdn.com/t/font_1374464_iw52nl1s22o.woff2) format("woff2"),url(https://at.alicdn.com/t/font_1374464_iw52nl1s22o.woff) format("woff"),url(https://at.alicdn.com/t/font_1374464_iw52nl1s22o.ttf) format("truetype"),url(https://at.alicdn.com/t/font_1374464_iw52nl1s22o.svg#iconfont) format("svg")}.iconfont[data-v-51ef5d68]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-diantai1[data-v-51ef5d68]:before{content:"\\E605"}.icon-zhibo[data-v-51ef5d68]:before{content:"\\E601"}.icon-diantai[data-v-51ef5d68]:before{content:"\\E602"}.icon-zuanshi-zuanshi[data-v-51ef5d68]:before{content:"\\E603"}.icon-paihangbang[data-v-51ef5d68]:before{content:"\\E604"}.icon-search[data-v-51ef5d68]:before{content:"\\E600"}.icon-ttpodicon[data-v-51ef5d68]:before{content:"\\E607"}.icon-meirituijian[data-v-51ef5d68]:before{content:"\\E609"}.icon-gedan[data-v-51ef5d68]:before{content:"\\E60D"}em[data-v-51ef5d68]{font-style:normal}body[data-v-51ef5d68],dd[data-v-51ef5d68],dl[data-v-51ef5d68],h1[data-v-51ef5d68],h2[data-v-51ef5d68],h3[data-v-51ef5d68],h4[data-v-51ef5d68],h5[data-v-51ef5d68],h6[data-v-51ef5d68],hr[data-v-51ef5d68],ol[data-v-51ef5d68],p[data-v-51ef5d68],pre[data-v-51ef5d68],tbody[data-v-51ef5d68],td[data-v-51ef5d68],tfoot[data-v-51ef5d68],th[data-v-51ef5d68],thead[data-v-51ef5d68],ul[data-v-51ef5d68],uni-form[data-v-51ef5d68],uni-input[data-v-51ef5d68],uni-textarea[data-v-51ef5d68]{margin:0;padding:0}ol[data-v-51ef5d68],ul[data-v-51ef5d68]{list-style:none}a[data-v-51ef5d68]{text-decoration:none}html[data-v-51ef5d68]{-ms-text-size-adjust:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none}body[data-v-51ef5d68]{line-height:1.5;font-size:14px}body[data-v-51ef5d68],select[data-v-51ef5d68],uni-button[data-v-51ef5d68],uni-input[data-v-51ef5d68],uni-textarea[data-v-51ef5d68]{font-family:helvetica neue,tahoma,hiragino sans gb,stheiti,wenquanyi micro hei,\\5FAE\\8F6F\\96C5\\9ED1,\\5B8B\\4F53,sans-serif}b[data-v-51ef5d68],strong[data-v-51ef5d68]{font-weight:700}em[data-v-51ef5d68],i[data-v-51ef5d68]{font-style:normal}table[data-v-51ef5d68]{border-collapse:collapse;border-spacing:0}table td[data-v-51ef5d68],table th[data-v-51ef5d68]{border:1px solid #ddd;padding:5px}table th[data-v-51ef5d68]{font-weight:inherit;border-bottom-width:2px;border-bottom-color:#ccc}img[data-v-51ef5d68]{border:0 none;width:auto\\9;max-width:100%;vertical-align:top;height:auto}select[data-v-51ef5d68],uni-button[data-v-51ef5d68],uni-input[data-v-51ef5d68],uni-textarea[data-v-51ef5d68]{font-family:inherit;font-size:100%;margin:0;vertical-align:baseline}html uni-input[type=button][data-v-51ef5d68],uni-button[data-v-51ef5d68],uni-input[type=reset][data-v-51ef5d68],uni-input[type=submit][data-v-51ef5d68]{-webkit-appearance:button;cursor:pointer}uni-button[disabled][data-v-51ef5d68],uni-input[disabled][data-v-51ef5d68]{cursor:default}uni-input[type=checkbox][data-v-51ef5d68],uni-input[type=radio][data-v-51ef5d68]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}uni-input[type=search][data-v-51ef5d68]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}uni-input[type=search][data-v-51ef5d68]::-webkit-search-decoration{-webkit-appearance:none}uni-input[data-v-51ef5d68]:focus{outline:none}select[multiple][data-v-51ef5d68],select[size][data-v-51ef5d68],select[size][multiple][data-v-51ef5d68]{border:1px solid #aaa;padding:0}article[data-v-51ef5d68],aside[data-v-51ef5d68],details[data-v-51ef5d68],figcaption[data-v-51ef5d68],figure[data-v-51ef5d68],footer[data-v-51ef5d68],header[data-v-51ef5d68],hgroup[data-v-51ef5d68],main[data-v-51ef5d68],nav[data-v-51ef5d68],section[data-v-51ef5d68],summary[data-v-51ef5d68]{display:block}uni-audio[data-v-51ef5d68],uni-canvas[data-v-51ef5d68],uni-progress[data-v-51ef5d68],uni-video[data-v-51ef5d68]{display:inline-block}body[data-v-51ef5d68]{background:#fff}uni-input[data-v-51ef5d68]::-webkit-input-speech-button{display:none}uni-button[data-v-51ef5d68],uni-input[data-v-51ef5d68],uni-textarea[data-v-51ef5d68]{-webkit-tap-highlight-color:transparent}uni-page-body[data-v-51ef5d68]{width:100%;height:100%}.content[data-v-51ef5d68]{height:100%}.content .swiper_area[data-v-51ef5d68]{padding:0 %?34.72?%;height:%?256.94?%}.content .swiper_area .swiper[data-v-51ef5d68],.content .swiper_area .uni-padding-wrap[data-v-51ef5d68]{height:%?256.94?%;border-radius:%?8.33?%}.content .swiper_area .swiper .uni-swiper-dots-horizontal[data-v-51ef5d68],.content .swiper_area .uni-padding-wrap .uni-swiper-dots-horizontal[data-v-51ef5d68]{bottom:%?20.83?%}.content .list_area[data-v-51ef5d68]{padding:0 %?34.72?%;height:%?215.27?%;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #cecece}.content .list_area .per[data-v-51ef5d68]{height:%?134.72?%;width:%?97.22?%;text-align:center;color:red}.content .list_area .per .iconfont[data-v-51ef5d68]{font-size:%?80?%}.content .list_area .per p[data-v-51ef5d68]{font-size:%?23.61?%;color:#000}.content .text-area[data-v-51ef5d68]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.content .title[data-v-51ef5d68]{font-size:%?36?%;color:#8f8f94}',""])},"85a4":function(t,a,e){var n=e("7d74");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("b89668a6",n,!0,{sourceMap:!1,shadowMode:!1})},"9b9f":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("aa4a"));function i(t){return t&&t.__esModule?t:{default:t}}var o={components:{navBar:n.default},data:function(){return{swiperData:[],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,circular:!0,listData:[{name:"每日推荐",imgSrc:"icon-meirituijian"},{name:"歌单",imgSrc:"icon-gedan"},{name:"排行榜",imgSrc:"icon-paihangbang"},{name:"电台",imgSrc:"icon-diantai1"},{name:"直播",imgSrc:"icon-zhibo"}],title:"Hello"}},onLoad:function(){console.log("页面加载"),this.getSwiperData()},onShow:function(){console.log("页面显示")},onReady:function(){console.log("初次渲染完成")},onHide:function(){console.log("页面隐藏")},onUnload:function(){console.log("页面卸载")},onPullDownRefresh:function(){console.log("页面下拉")},onReachBottom:function(){console.log("页面上啦")},onPageScroll:function(){console.log("页面滚动")},methods:{getSwiperData:function(){var t=this;uni.request({url:"https://v1.itooi.cn/netease/song?id=37239038,526307800",method:"GET",data:{},header:{},success:function(a){console.log(a.data.data),t.swiperData=a.data.data},fail:function(t){console.log(t)}})},goListPage:function(t){0==t.currentTarget.id?this.$router.push({path:"/everyday"}):1==t.currentTarget.id||2==t.currentTarget.id||3==t.currentTarget.id||t.currentTarget.id},goPhonenum:function(){uni.switchTab({url:"../phonenum/phonenum?id=1"}),console.log(this.add(1)),console.log(this.add(3))},add:function(t){return t+t},shareMessage:function(){console.log(1),uni.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:"http://uniapp.dcloud.io/",title:"uni-app分享",summary:"哈哈哈！",imageUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){console.log("fail:"+JSON.stringify(t))}}),console.log(2)}}};a.default=o},a243:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"navBar",data:function(){return{textData:["我的","发现","朋友","视频"],msg:4,activityId:1,activityBgId:null,activityBg:null}},methods:{goSwich:function(t){this.activityId=t.currentTarget.id},getStartStatus:function(t){this.activityBg=!0,this.activityBgId=t.currentTarget.id,this.msg=6},getEndStatus:function(t){this.activityBg=!1,this.msg=9}}};a.default=n},aa4a:function(t,a,e){"use strict";e.r(a);var n=e("7a0d"),i=e("0d95");for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);e("aad0");var d=e("2877"),c=Object(d["a"])(i["default"],n["a"],n["b"],!1,null,"a4e26b3c",null);a["default"]=c.exports},aad0:function(t,a,e){"use strict";var n=e("e029"),i=e.n(n);i.a},bf32:function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:iconfont;  /* project id 1374464 */src:url(https://at.alicdn.com/t/font_1374464_iw52nl1s22o.eot);src:url(https://at.alicdn.com/t/font_1374464_iw52nl1s22o.eot#iefix) format("embedded-opentype"),url(https://at.alicdn.com/t/font_1374464_iw52nl1s22o.woff2) format("woff2"),url(https://at.alicdn.com/t/font_1374464_iw52nl1s22o.woff) format("woff"),url(https://at.alicdn.com/t/font_1374464_iw52nl1s22o.ttf) format("truetype"),url(https://at.alicdn.com/t/font_1374464_iw52nl1s22o.svg#iconfont) format("svg")}.iconfont[data-v-a4e26b3c]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-diantai1[data-v-a4e26b3c]:before{content:"\\E605"}.icon-zhibo[data-v-a4e26b3c]:before{content:"\\E601"}.icon-diantai[data-v-a4e26b3c]:before{content:"\\E602"}.icon-zuanshi-zuanshi[data-v-a4e26b3c]:before{content:"\\E603"}.icon-paihangbang[data-v-a4e26b3c]:before{content:"\\E604"}.icon-search[data-v-a4e26b3c]:before{content:"\\E600"}.icon-ttpodicon[data-v-a4e26b3c]:before{content:"\\E607"}.icon-meirituijian[data-v-a4e26b3c]:before{content:"\\E609"}.icon-gedan[data-v-a4e26b3c]:before{content:"\\E60D"}em[data-v-a4e26b3c]{font-style:normal}body[data-v-a4e26b3c],dd[data-v-a4e26b3c],dl[data-v-a4e26b3c],h1[data-v-a4e26b3c],h2[data-v-a4e26b3c],h3[data-v-a4e26b3c],h4[data-v-a4e26b3c],h5[data-v-a4e26b3c],h6[data-v-a4e26b3c],hr[data-v-a4e26b3c],ol[data-v-a4e26b3c],p[data-v-a4e26b3c],pre[data-v-a4e26b3c],tbody[data-v-a4e26b3c],td[data-v-a4e26b3c],tfoot[data-v-a4e26b3c],th[data-v-a4e26b3c],thead[data-v-a4e26b3c],ul[data-v-a4e26b3c],uni-form[data-v-a4e26b3c],uni-input[data-v-a4e26b3c],uni-textarea[data-v-a4e26b3c]{margin:0;padding:0}ol[data-v-a4e26b3c],ul[data-v-a4e26b3c]{list-style:none}a[data-v-a4e26b3c]{text-decoration:none}html[data-v-a4e26b3c]{-ms-text-size-adjust:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none}body[data-v-a4e26b3c]{line-height:1.5;font-size:14px}body[data-v-a4e26b3c],select[data-v-a4e26b3c],uni-button[data-v-a4e26b3c],uni-input[data-v-a4e26b3c],uni-textarea[data-v-a4e26b3c]{font-family:helvetica neue,tahoma,hiragino sans gb,stheiti,wenquanyi micro hei,\\5FAE\\8F6F\\96C5\\9ED1,\\5B8B\\4F53,sans-serif}b[data-v-a4e26b3c],strong[data-v-a4e26b3c]{font-weight:700}em[data-v-a4e26b3c],i[data-v-a4e26b3c]{font-style:normal}table[data-v-a4e26b3c]{border-collapse:collapse;border-spacing:0}table td[data-v-a4e26b3c],table th[data-v-a4e26b3c]{border:1px solid #ddd;padding:5px}table th[data-v-a4e26b3c]{font-weight:inherit;border-bottom-width:2px;border-bottom-color:#ccc}img[data-v-a4e26b3c]{border:0 none;width:auto\\9;max-width:100%;vertical-align:top;height:auto}select[data-v-a4e26b3c],uni-button[data-v-a4e26b3c],uni-input[data-v-a4e26b3c],uni-textarea[data-v-a4e26b3c]{font-family:inherit;font-size:100%;margin:0;vertical-align:baseline}html uni-input[type=button][data-v-a4e26b3c],uni-button[data-v-a4e26b3c],uni-input[type=reset][data-v-a4e26b3c],uni-input[type=submit][data-v-a4e26b3c]{-webkit-appearance:button;cursor:pointer}uni-button[disabled][data-v-a4e26b3c],uni-input[disabled][data-v-a4e26b3c]{cursor:default}uni-input[type=checkbox][data-v-a4e26b3c],uni-input[type=radio][data-v-a4e26b3c]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}uni-input[type=search][data-v-a4e26b3c]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}uni-input[type=search][data-v-a4e26b3c]::-webkit-search-decoration{-webkit-appearance:none}uni-input[data-v-a4e26b3c]:focus{outline:none}select[multiple][data-v-a4e26b3c],select[size][data-v-a4e26b3c],select[size][multiple][data-v-a4e26b3c]{border:1px solid #aaa;padding:0}article[data-v-a4e26b3c],aside[data-v-a4e26b3c],details[data-v-a4e26b3c],figcaption[data-v-a4e26b3c],figure[data-v-a4e26b3c],footer[data-v-a4e26b3c],header[data-v-a4e26b3c],hgroup[data-v-a4e26b3c],main[data-v-a4e26b3c],nav[data-v-a4e26b3c],section[data-v-a4e26b3c],summary[data-v-a4e26b3c]{display:block}uni-audio[data-v-a4e26b3c],uni-canvas[data-v-a4e26b3c],uni-progress[data-v-a4e26b3c],uni-video[data-v-a4e26b3c]{display:inline-block}body[data-v-a4e26b3c]{background:#fff}uni-input[data-v-a4e26b3c]::-webkit-input-speech-button{display:none}uni-button[data-v-a4e26b3c],uni-input[data-v-a4e26b3c],uni-textarea[data-v-a4e26b3c]{-webkit-tap-highlight-color:transparent}.tab_bar[data-v-a4e26b3c]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:%?680.55?%;margin:auto;height:%?145.83?%;background:#fff;position:relative}.tab_bar .tab[data-v-a4e26b3c]{width:%?459.72?%;margin:auto;height:100%;font-size:%?29.16?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.tab_bar .tab .activityBg[data-v-a4e26b3c]{background:rgba(0,0,0,.1);display:block;height:%?90.27?%;width:%?90.27?%;border-radius:50%}.tab_bar .tab .activityBg .noActivity[data-v-a4e26b3c]{display:block;height:%?90.27?%;width:%?90.27?%;border-radius:50%;line-height:%?90.27?%;text-align:center}.tab_bar .tab .activityBg .active[data-v-a4e26b3c]{font-weight:900;font-size:%?30.55?%}.tab_bar .tab .noActivityBg[data-v-a4e26b3c]{display:block;height:%?90.27?%;width:%?90.27?%;border-radius:50%}.tab_bar .tab .noActivityBg .noActivity[data-v-a4e26b3c]{display:block;height:%?90.27?%;width:%?90.27?%;border-radius:50%;line-height:%?90.27?%;text-align:center}.tab_bar .tab .noActivityBg .active[data-v-a4e26b3c]{font-weight:900;font-size:%?30.55?%}.tab_bar .tip[data-v-a4e26b3c]{position:absolute;height:%?48.61?%;width:%?34.72?%;padding:%?5?%;left:0;top:%?48.61?%}.tab_bar .tip .img[data-v-a4e26b3c]{height:%?48.61?%}.tab_bar .tip .circle[data-v-a4e26b3c]{position:absolute;background:red;border-radius:50%;height:%?30.55?%;line-height:%?34.72?%;color:#fff;text-align:center;font-size:%?20.83?%;width:%?30.55?%;top:%?-13.88?%;right:%?-30.55?%}.tab_bar .search[data-v-a4e26b3c]{position:absolute;right:0;top:%?56.25?%;padding:%?5?%}',""])},c6e7:function(t,a,e){"use strict";var n=e("85a4"),i=e.n(n);i.a},d66e:function(t,a,e){"use strict";e.r(a);var n=e("52aa"),i=e("41c8");for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);e("c6e7");var d=e("2877"),c=Object(d["a"])(i["default"],n["a"],n["b"],!1,null,"51ef5d68",null);a["default"]=c.exports},e029:function(t,a,e){var n=e("bf32");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("51e17b34",n,!0,{sourceMap:!1,shadowMode:!1})}}]);