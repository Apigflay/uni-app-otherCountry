<template>
	<view class="main">
		<view class="top">
			<view class="search">
				<image class="img" src="../../static/pictures/search_1.png"></image>
			</view>
			<view class="title">
				<text class="p">所有信息</text>
			</view>
			<view class="money">
				<image class="img" src="../../static/pictures/lcon_1.png"></image>
				<text class="p">{{num}}</text>
			</view>
		</view>
		<view class="content">
			<view class="list">
				<view class="listPer" v-for="(item,index) in 16" :key="index">
					<view class="left">
						<image class="photo"></image>
					</view>
					<view class="content">
						<view class="center">
							<view class="p1">@sasa.baby1235 <view v-if="show_spot" class="spot"></view></view>
							<text class="p2">9月vip为两台飞机  享有8.9月百部影片，你的女神...</text>
						</view>
						<view class="right">
							<view class="newmsg">
								<view v-if="msg" class="show">
									<view class="status"></view>
									<text class="p1">新帖子</text>
								</view>
							</view>
							<text class="p2">剩余{{time}}小时</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- TagBar -->
		<!-- <TagBar></TagBar> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show_spot: true, // 是否在线的绿点
				msg: true, // 控制是否是信息系的显示
				num: '30', // 宝石数
				time: 47 //剩余时间
			};
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
	width:100%;
	height: 100%;
	background: #191919;
	.top{ // 页面搜索题目
		position: fixed;
		top: 0rpx;
		left:0rpx;
		right: 0rpx;
		z-index: 9999;
		background: #3B3B3B;
		display:flex;
		justify-content:space-between;
		align-items:center;
		height:100rpx;
		.search{
			width:40rpx;
			height: 40rpx;
			margin-left:28rpx;
			.img{
				width:40rpx;
				height:40rpx;
			}
		}
		.title{
			color: #FFFFFF;
			font-size: 30rpx;
			font-weight:400;
		}
		.money{
			margin-right:28rpx;
			width:110rpx;
			height:50rpx;
			background:rgba(0,0,0,0.5);
			border-radius:6px;
			display:flex;
			justify-content:center;
			align-items:center;
			.img{
				width: 30rpx;
				height: 22rpx;
				margin-right: 13rpx;
				margin-left: 20rpx;
				margin-top:14rpx;
				margin-bottom:14rpx;
				vertical-align: text-bottom;
			}
			.p{
				font-size: 26rpx;
				color: #FFD600;
				font-weight:500;
				line-height: 22rpx;
				margin-right: 18rpx;
				margin-top:14rpx;
				margin-bottom:14rpx;
				
			}
		}
	}
	.content{ // 页面列表
		.list{
			margin-left:28rpx;
			padding-top:100rpx;
			padding-bottom:90rpx;
			.listPer{
				height: 113rpx;
				display:flex;
				.left{ // 头像
					padding: 12rpx 0rpx 11rpx 0rpx;
					height: 90rpx;
					width: 90rpx;
					.photo{ // 头像
						background: #646464;
						height: 90rpx;
						width: 90rpx;
						border-radius: 50%;
					}
				}
				.content{
					width:100%;
					height:113rpx;
					border-bottom: 2px solid #343434;
					margin-left:39rpx;
					margin-right:28rpx;
					display:flex;
					align-items:center;
					.center{ // 内容
						display: flex;
						flex-direction:column;
						justify-content:center;
						.p1{
							font-size: 26rpx;
							font-weight:500;
							color: #FFFFFF;
							.spot{
								display: inline-block;
								vertical-align: middle;
								margin-left: 11rpx;
								height: 12rpx;
								width: 12rpx;
								background: #00FF2A;
								border-radius: 50%;
							}
						}
						.p2{
							width: 389rpx;
							font-size: 22rpx;
							font-weight:400;
							margin-top:9rpx;
							color:#ACACAC;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;
							overflow: hidden;
						}
					}
					.right{
						margin-left: 51rpx;
						display:flex;
						flex-direction:column;
						// justify-content:flex-start;
						align-items:flex-end;
						.newmsg{
							height:20rpx;
							margin-bottom:14rpx;
							.show{
								display:flex;
								justify-content:center;
								align-items:center;
								.status{
									height: 6rpx;
									width: 6rpx;
									background: #00D8FF;
									border-radius: 50%;
									margin-right: 7rpx;
								}
								.p1{
									color: #00D8FF;
									font-size: 20rpx;
									font-weight:400;
								}
							}
						}
						.p2{
							color: #ACACAC;
							font-size: 20rpx;
							font-weight:400;
						}
					}
				}
			}
		}
	}
}
</style>
