<template>
	<view class="main">
		<view class="top">
			<view class="left">
				<image class="img" src="../../static/pictures/back_1.png"></image>
			</view>
			<text class="p">选择朋友</text>
		</view>
		<view class="content">
			<view class="search">
				<form @submit="formSubmit">
					<input class="section__title" id="search" type="search" placeholder="搜索" v-model="search" @input="check()" @blur="blur()" @focus="focus()"/>
				</form>
			</view>
			<view class="list" v-for="(item,index) in 3" :key="index" :id="index">
				<view class="left">
					<image class="photo" src=""></image>
				</view>
				<view class="right">
					<view class="bottom">
						<text class="p1">@sasa.baby1235<view v-if="show_spot" class="spot"></view></text>
						<text class="p2">9月vip为两台飞机 享有8.9月百部影片，你的女神...</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show_spot: true, // 判断主播是否在线的绿点
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
	.top{
		position:fixed;
		top: 0rpx;
		left: 0rpx;
		right: 0rpx;
		z-index: 9999;
		background:#252525;
		height:100rpx;
		display:flex;
		// justify-content:flex-start;
		align-items:center ;
		.left{
			width: 30rpx;
			height:30rpx;
			margin-left: 29rpx;
			display:flex;
			align-items:center ;
			.img{
				width: 30rpx;
				height:30rpx;
			}
		}
		.p{
			color: #FFFFFF;
			font-size: 30rpx;
			font-weight: 400;
			line-height: 28rpx;
			margin-left: 257rpx;
		}
	}
	.content{
		margin-top: 112rpx;
		margin-left: 28rpx;
		margin-right:28rpx;
		
		.search{
			margin-bottom:16rpx;
			.section__title{ // 搜索栏中的 input
				height: 54rpx;
				color:#ACACAC;
				border-radius:8px;
				font-size: 30rpx;
				font-weight:400;
				background-color:#343434;
				background-image: url(../../static/pictures/search_1.png);
				background-repeat: no-repeat; /*设置图片不重复*/
				background-position: left; /*图片显示的位置*/
				background-position:12rpx; // 设置图片位置
				padding-left: 70rpx; //设置搜索文字位置
				background-size: 31rpx 31rpx; // 搜索图标的大小
			}
		}
		.list{
			display:flex;
			justify-content: flex-start;
			align-items:center;
			.left{
				height: 90rpx;
				width: 90rpx;
				margin:12rpx 0rpx 11rpx 0rpx;
				.photo{ // 头像
					background: #646464;
					height: 90rpx;
					width: 90rpx;
					border-radius: 50%;
				}
			}
			.right{
				padding:12rpx 0rpx 13rpx 0rpx;
				margin-left:39rpx;
				border-bottom:2px solid #343434;
				.bottom{
					display:flex;
					flex-direction:column;
					align-items:flex-start;
					justify-content: center;
					margin-top: 28rpx;
					margin-bottom:26rpx;
					.p1{
						color:#FFFFFF;
						font-size: 26rpx;
						font-weight: 500;
						line-height: 27rpx;
						.spot{
							display: inline-block;
							vertical-align: middle;
							margin-left: 11rpx;
							height: 12rpx;
							width: 12rpx;
							background: #00FF2A;
							border-radius: 50%;
							vertical-align: middle;
						}
					}
					.p2{
						padding-right: 66rpx;
						margin-top: 9rpx;
						color:#ACACAC;
						font-size: 22rpx;
						font-weight: 400;
						line-height: 23rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						overflow: hidden;
					}
				}
			}
		}
	}
}
</style>
