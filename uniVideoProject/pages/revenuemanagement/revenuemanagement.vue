<template>
	<view class="content">
		<view class="nav">
			<image class="back" src="../../static/imgs/more1w.png" mode=""></image>
			<text class="title">收益管理</text>
			<text class="tip">私讯</text>
		</view>
		<view class="mainArea">
			<view class="totalCount">
				<select class="select">
				  <option class="op" value ="volvo">免费</option>
				  <option class="op" value ="saab">Saab</option>
				  <option class="op" value="opel">Opel</option>
				  <option class="op" value="audi">Audisssss</option>
				</select>
				<text class="num">合计收益：12341567</text>
			</view>
			<view class="per" v-for="(item,index) in 15" :key="index">
				<image class="img" src="../../static/imgs/gift2b.png" mode=""></image>
				<view class="msgArea">
					<view class="intro1">
						<text class="left1">@323423.2dfsd</text>
						<text>购买了你的视频</text>
					</view>
					<view class="intro2">
						<text>定价240</text>
					</view>
					<view class="intro3">
						<text class="left1">09-30</text>
						<text>12:03</text>
					</view>
					<image class="video" src="../../static/imgs/19032400.jpg" mode=""></image>
					<text class="num">+2400</text>
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
page{
	width: 100%;
	height: 100%;
}
.content{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.nav{
		height: 100rpx;
		background:rgba(37,37,37,1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		.back{
			height: 36rpx;
			width: 36rpx;
			padding: 10rpx;
			margin-left: 19rpx;
		}
		.title{
			font-size:30rpx;
			color:rgba(255,255,255,1);
		}
		.tip{
			padding: 10rpx;
			margin-right: 19rpx;
			font-size:30rpx;
			color:rgba(255,214,0,1);
		}
	}
	.mainArea{
		flex: 1;
		background:rgba(25,25,25,1);
		overflow-y:scroll;
		.totalCount{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 36rpx;
			margin-top: 28rpx;
			margin-bottom:16rpx;
			.select{
				margin-left: 28rpx;
				height: 36rpx;
				background:rgba(116,116,116,1);
				border-radius:18rpx;
				font-size:24rpx;
				color:rgba(255,255,255,1);
				line-height: 36rpx;
				border: 0;  // 去除未选中状态边框
				outline: none; // 去除选中状态边框
				text-indent: 20rpx;
				.op{
					border: 0;  // 去除未选中状态边框
					outline: none; // 去除选中状态边框
					font-size:24rpx;
				}
			}
			.num{
				font-size:24rpx;
				color:rgba(255,255,255,1);
				margin-right: 28rpx;
			}
		}
		.per{
			width: 694rpx;
			height: 117rpx;
			padding-top:44rpx;
			margin: auto;
			display: flex;
			justify-content: space-between;
			.img{
				width:60rpx;
				height:60rpx;
				background:rgba(100,100,100,1);
				border-radius:50%;
			}
			.msgArea{
				width: 613rpx;
				height: 115rpx;
				border-bottom: 2rpx solid rgba(52,52,52,1);
				position: relative;
				.intro1{
					font-size:26rpx;
					color:rgba(255,255,255,1);
					height: 26rpx;
					line-height: 26rpx;
					.left1{
						margin-right: 21rpx;
					}
				}
				.intro2,.intro3{
					font-size:22rpx;
					color:rgba(172,172,172,1);
					margin-top: 10rpx;
					.left1{
						margin-right: 21rpx;
					}
				}
				.video{
					position: absolute;
					width:46rpx;
					height:64rpx;
					border-radius:8rpx;
					right: 0;
					top: 0rpx;
				}
				.num{
					position: absolute;
					height:26rpx;
					font-size:26rpx;
					color:rgba(255,214,0,1);
					right: 0;
					bottom: 19rpx;
				}
			}
		}
	}
}
</style>
