<template>
	<view class="main">
		<view class="top">
			<image src="../../static/pictures/back_1.png" class="img"></image>
			<text>我的电子收据</text>
		</view>
		<view class="center">
			<view class="content">
				<view class="list">
					<text class="p">捐赠发票</text>
					<view :class="chose==1?'switch':'switch1'" @click="switch_change()">
						<view class="button"></view>
					</view>
				</view>
				<view class="list1">
					<text class="p">电子收据</text>
					<image class="img" src="../../static/pictures/gengduo_1.png"></image>
				</view>
			</view>
		</view>
		
		<view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chose: 0
			};
		},
		onLoad(){
			
		},
		methods:{
			switch_change: function(){
				// console.log(this.chose)
				if(this.chose == 1)
				{
					this.chose = 0;
				}else if(this.chose == 0){
					this.chose = 1;
				}else{
					console.log((this.chose))
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
		width: 100%;
		height: 100rpx;
		background-color: #252525;
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
		width:100%;
		flex:1;
		overflow-y:scroll;
		.content{
			width: 100%;
			padding:60rpx 0rpx 0rpx 0rpx;
			.list{
				display: flex;
				align-items:center;
				justify-content:space-between;
				width: 678rpx;
				height: 100rpx;
				padding: 0rpx 36rpx;
				background:#252525;
				border-top:1rpx solid #747474;
				border-bottom:1rpx solid #747474;
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
			
			.list1{
				display: flex;
				align-items:center;
				justify-content:space-between;
				width: 678rpx;
				height: 100rpx;
				padding: 0rpx 36rpx;
				background:#252525;
				border-bottom:1rpx solid #747474;
				.p{
					color: #FFFFFF;
					font-size: 26rpx;
				}
				.img{
					width: 30rpx;
					height: 30rpx;
					padding: 10rpx;
				}
			}
		}
	}
}
</style>
