<template>
	<view class="main">
		<view class="top">
			<image src="../../static/pictures/back_1.png" class="img"></image>
			<text class="p">推播通知</text>
		</view>
		<view class="center">
			<view class="list" v-for="(item,index) in table" :key=index :id="index">
				<text class="p">{{item.name}}</text>
				<view :class="item.chose==1?'switch':'switch1'" @click="switch_change(index)">
					<view class="button"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list_name: '私讯通知',
				// chose: 1, // 判断 按钮是否开启
				table:[
					{name:'私讯通知',chose: 0},
					// {name:'私讯通知',chose: 1},
					// {name:'私讯通知',chose: 1},
					// {name:'私讯通知',chose: 1}
				]
			};
		},
		onLoad(){
			
		},
		
		methods:{
			switch_change:function(e){
				// console.log(this.table[e].chose)
				if(this.table[e].chose == 1)
				{
					this.table[e].chose = 0;
				}else if(this.table[e].chose == 0){
					this.table[e].chose = 1;
				}else{
					console.log((this.table[e].chose))
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
	.top{
		display: flex;
		flex-direction: row;
		justify-content:flex-start;
		align-items:center;
		width:100%;
		height:100rpx;
		background: #252525;
		padding: 0rpx 18rpx;
		.img{
			width:36rpx;
			height: 36rpx;
			padding: 10rpx;
		}
		.p{
			color: #FFFFFF;
			font-size: 30rpx;
			margin-left: 242rpx;
		}
	}
	.center{
		margin-top: 61rpx;
		// margin-top: 48rpx;
		.list{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items:center;
			background-color:#252525;
			padding:29rpx 36rpx;
			// margin-top:13rpx;
			.p{
				color: #FFFFFF;
				font-size: 26rpx;
			}
			.switch{
				width: 80rpx;
				height: 40rpx;
				border-radius:20rpx;
				border:2rpx solid #FFD600;
				background-color: #FFD600;
				margin:10rpx;
				.button{
					position: relative;
					top: 2rpx;
					bottom: 2rpx;
					left: 42rpx;
					right: 2rpx;
					width: 36rpx;
					height: 36rpx;
					border-radius: 50%;
					background-color: #FFFFFF;
					box-shadow:0px 3px 4px 0px rgba(0, 0, 0, 0.25);
				}
			}
			.switch1{
				width: 80rpx;
				height: 40rpx;
				border-radius:20rpx;
				border:2rpx solid #747474;
				margin:10rpx;
				.button{
					position: relative;
					top: 2rpx;
					bottom: 2rpx;
					left: 2rpx;
					right: 42rpx;
					width: 36rpx;
					height: 36rpx;
					border-radius: 50%;
					background-color: #FFFFFF;
					box-shadow:0px 3px 4px 0px rgba(0, 0, 0, 0.25);
				}
			}
		}
	}
}
</style>
