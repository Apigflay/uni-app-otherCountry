<template>
	<view class="main">
		<view class="top">
			<image class="img" src="../../static/pictures/back_1.png"></image>
			<text>已连结账号</text>
		</view>
		<view class="center">
			<view class="list">
				<text class="p1">电子邮件</text>
				<text class="p2">123456798@qq.com</text>
			</view>
			<view class="list1" v-for="(item,index) in table" :key="index" :id="index">
				<text class="p1">{{item.title}}</text>
				<view :class="item.on == false?'button':'button1'" @click="change(index)"  @touchstart="change_start(index)" @touchend="change_end(index)"><text>连结账号</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				table:[
					{title:'Google',on:false},
					{title:'Facebook',on:false},
					{title:'Twitter',on:false},
					{title:'电话号码',on:false},
				],
			};
		},
		onLoad(){
			
		},
		methods:{
			change:function(e){
				// console.log(e)
			},
			change_start:function(e){
				// console.log(e);
				if(this.table[e].on == false){
					this.table[e].on = true;
				}else{
					// console.log(this.table[e].on);
				}
			},
			change_end:function(e){
				// console.log(e);
				if(this.table[e].on == true){
					this.table[e].on = false;
				}else{
					// console.log(this.table[e].on);
				}
			}
		}
	}
</script>

<style lang="scss">
page{
	width: 100%;
	height: 100%;
	background: #191919;
}
.main{
	width: 100%;
	height: 100%;
	display:flex;
	align-items:center;
	flex-direction:column;
	.top{
		position: relative;
		width:100%;
		height: 100rpx;
		background: #252525;
		font-size:30rpx;
		color:#FFFFFF;
		text-align:center;
		line-height:100rpx;
		.img{
			position: absolute;
			top: 32rpx;
			left: 28rpx;
			width: 36rpx;
			height: 36rpx;
		}
	}
	.center{
		flex:1;
		overflow-y:scroll;
		padding-top:60rpx;
		.list{
			display:flex;
			justify-content:space-between;
			align-items:center;
			width:678rpx;
			height:100rpx;
			padding: 0rpx 36rpx;
			background-color:#252525;
			border-top:1rpx solid #747474;
			border-bottom:1rpx solid #747474;
			.p1{
				color: #FFFFFF;
				font-size:26rpx;
			}
			.p2{
				color:#747474;
				font-size:26rpx;
			}
		}
		.list1{
			display:flex;
			justify-content:space-between;
			align-items:center;
			width:678rpx;
			height:100rpx;
			padding: 0rpx 36rpx;
			background-color:#252525;
			// border-top:1rpx solid #747474;
			border-bottom:1rpx solid #747474;
			.p1{
				color: #FFFFFF;
				font-size:26rpx;
			}
			.button{
				display:flex;
				justify-content: center;
				align-items: center;
				
				width: 134rpx;
				height: 50rpx;
				border:2rpx solid #FFD600;
				border-radius:8rpx;
				
				font-size: 26rpx;
				color: #FFD600;
				line-height: 26rpx;
			}
			.button1{
				display:flex;
				justify-content: center;
				align-items: center;
				
				width: 134rpx;
				height: 50rpx;
				border:2rpx solid #FFD600;
				background: #FFD600;
				border-radius:8rpx;
				
				font-size: 26rpx;
				color: #191919;
				line-height: 26rpx;
			}
		}
	}
}
</style>
