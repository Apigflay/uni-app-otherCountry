(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0b57":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){return Promise.all([i.e("common/vendor"),i.e("components/nav")]).then(i.bind(null,"aa4a"))},o={components:{navBar:t},data:function(){return{swiperData:[],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,circular:!0,listData:[{name:"每日推荐",imgSrc:"icon-meirituijian"},{name:"歌单",imgSrc:"icon-gedan"},{name:"排行榜",imgSrc:"icon-paihangbang"},{name:"电台",imgSrc:"icon-diantai1"},{name:"直播",imgSrc:"icon-zhibo"}],title:"Hello"}},onLoad:function(){console.log("页面加载"," at pages\\index\\index.vue:61"),this.getSwiperData()},onShow:function(){console.log("页面显示"," at pages\\index\\index.vue:65")},onReady:function(){console.log("初次渲染完成"," at pages\\index\\index.vue:68")},onHide:function(){console.log("页面隐藏"," at pages\\index\\index.vue:71")},onUnload:function(){console.log("页面卸载"," at pages\\index\\index.vue:74")},onPullDownRefresh:function(){console.log("页面下拉"," at pages\\index\\index.vue:77")},onReachBottom:function(){console.log("页面上啦"," at pages\\index\\index.vue:80")},onPageScroll:function(){console.log("页面滚动"," at pages\\index\\index.vue:83")},methods:{getSwiperData:function(){var e=this;n.request({url:"https://v1.itooi.cn/netease/song?id=37239038,526307800",method:"GET",data:{},header:{},success:function(n){console.log(n.data.data," at pages\\index\\index.vue:95"),e.swiperData=n.data.data},fail:function(n){console.log(n," at pages\\index\\index.vue:99")}})},goListPage:function(n){0==n.currentTarget.id?this.$router.push({path:"/everyday"}):1==n.currentTarget.id||2==n.currentTarget.id||3==n.currentTarget.id||n.currentTarget.id},goPhonenum:function(){n.switchTab({url:"../phonenum/phonenum?id=1"}),console.log(this.add(1)," at pages\\index\\index.vue:122"),console.log(this.add(3)," at pages\\index\\index.vue:123")},add:function(n){return n+n},shareMessage:function(){console.log(1," at pages\\index\\index.vue:129"),n.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:"http://uniapp.dcloud.io/",title:"uni-app分享",summary:"哈哈哈！",imageUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",success:function(n){console.log("success:"+JSON.stringify(n)," at pages\\index\\index.vue:139")},fail:function(n){console.log("fail:"+JSON.stringify(n)," at pages\\index\\index.vue:142")}}),console.log(2," at pages\\index\\index.vue:145")}}};e.default=o}).call(this,i("6e42")["default"])},"23a6":function(n,e,i){"use strict";var t=i("f41c"),o=i.n(t);o.a},"41c8":function(n,e,i){"use strict";i.r(e);var t=i("0b57"),o=i.n(t);for(var a in t)"default"!==a&&function(n){i.d(e,n,function(){return t[n]})}(a);e["default"]=o.a},d66e:function(n,e,i){"use strict";i.r(e);var t=i("e716"),o=i("41c8");for(var a in o)"default"!==a&&function(n){i.d(e,n,function(){return o[n]})}(a);i("23a6");var u=i("2877"),c=Object(u["a"])(o["default"],t["a"],t["b"],!1,null,null,null);e["default"]=c.exports},e716:function(n,e,i){"use strict";var t=function(){var n=this,e=n.$createElement;n._self._c},o=[];i.d(e,"a",function(){return t}),i.d(e,"b",function(){return o})},f41c:function(n,e,i){}},[["65ce","common/runtime","common/vendor"]]]);