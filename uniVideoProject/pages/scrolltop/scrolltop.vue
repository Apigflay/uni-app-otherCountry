<template>
	<view class="content">
		<view class="header" :style="style">
			header
		</view>
		<view class="box">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				style:""
			};
		},
		onLoad() {//监听页面加载，其参数为上个页面传递的数据，参数类型为Object
			// console.log("页面加载")
			// this.getSwiperData()
		},
		onShow(){//监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面	
			// console.log("页面显示")
		},
		onReady(){//监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
			// console.log("初次渲染完成")
		},
		onHide(){//监听页面隐藏
			// console.log("页面隐藏")
		},
		onUnload(){//监听页面卸载
			// console.log("页面卸载")
		},
		onPullDownRefresh(){
			// console.log("页面下拉")
		},
		onReachBottom(){
			// console.log("页面上啦")
		},
		onPageScroll(){

			if(document.documentElement.scrollTop>=100){
				this.style="background:#000;color:#fff"
			}else{
				this.style=""
			}
		},
	}
</script>

<style lang="scss">
.content{
	.header{
		position: fixed;
		top: 0;
		left: 0;
		height: 60px;
		width: 100%;
		background: #cecece;
	}
	.box{
		height: 2083.33rpx;
		width: 100%;
	}
	
}
</style>
