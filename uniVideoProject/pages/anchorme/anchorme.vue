<template>
		<view class="main">
			<!-- top -->
			<view class="top">
				<image class="img" src="../../static/pictures/shezhi_1.png"></image>
				<view class="imgArea">
					<image class="size" src="../../static/pictures/lcon_1.png"></image>
					<text class="font">{{balance}}</text>
				</view>
			</view>
			<!-- top -->
			<!-- top 上推 出现层 -->
			<view v-if="show" class="move">
				<text class="p">{{name}}</text>
			</view>
			<view v-if="show1" class="move1">
				<text class="p">已买商品</text>
			</view>
			<!-- top 上推 出现层 -->
			<!-- top 背景 -->
			<view class="top_bj"></view>
			<!-- top 背景 -->
			<!-- center -->
			<view class="center">
				<image src="" class="photo"></image>
				<view class="follow">
					<text class="p">{{follow}}</text>
					<text class="p1">关注中</text>
				</view>
				<view class="follow">
					<text class="p">{{fans}}</text>
					<text class="p1">粉丝数</text>
				</view>
				<view class="edit">
					<image src="../../static/pictures/search_1.png" class="img"></image>
					<text class="p">编辑</text>
				</view>
			</view>
			<!-- center -->
			<!-- name 账号-->
			<view class="name">
				<text class="p">{{name}}</text>
			</view>
			<!-- name -->
			<!-- 商品，收益 管理 -->
			<view class="commodity ">
				<text class="p">商品管理</text>
				<image class="img" src="../../static/pictures/gengduo_1.png"></image>
			</view>
			<view class="profit">
				<text class="p">收益管理</text>
				<image class="img" src="../../static/pictures/gengduo_1.png"></image>
			</view>
			<!-- 商品，收益 管理 -->
			<!-- purchased  已购买商品 -->
			<view class="purchased ">
				<view class="p">
					<text class="p1">已买商品</text>
				</view>
				<view class="list">
					<view class="pro" v-for="(item,index) in table" :key="index" :id="index">
						<image src="" class="photo"></image>
						<view class="id">
							<text class="p1">{{item.pro_name}}</text>
							<view v-show=item.status class="status"></view>
						</view>
						<text class="p2">{{item.pro_num}}贴文</text>
					</view>
				</view>
			</view>
			<!-- purchased  -->
			<!-- TagBar -->
			<!-- <TagBar></TagBar> -->
		</view>
</template>

<script>
	export default {
		data() {
			return {
				balance: '22,415',
				follow: 13,
				fans:13,
				name:'@callum0852',
				table:[
					{pro_name:'@callum0852',pro_num: 8,status:true},
					{pro_name:'@callum0852',pro_num: 8,},
					{pro_name:'@callum0852',pro_num: 8,},
					{pro_name:'@callum0852',pro_num: 8,},
					{pro_name:'@callum0852',pro_num: 8,},
					{pro_name:'@callum0852',pro_num: 8,},
					{pro_name:'@callum0852',pro_num: 8,},
					{pro_name:'@callum0852',pro_num: 8,},
					{pro_name:'@callum0852',pro_num: 8,},
					{pro_name:'@callum0852',pro_num: 8,}
				],
				show: false,
				show1: false
			};
		},
		onLoad(){
			
		},
		onPageScroll(){
			if(document.documentElement.scrollTop>=100){
				this.show = true;
			}else{
				this.show= false
			}
			if(document.documentElement.scrollTop>=310){
				this.show1 = true;
			}else{
				this.show1= false
			}
		},
		methods:{
			
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
	// ---背景
	.top_bj{
		height: 400rpx;
		width: 100%;
		background:url(../../static/pictures/juxing_1.png);
		}
	// ---- 设置部分
	.top{
		height: 150rpx;
		width: 100%;
		position:fixed;
		top: 0;
		left: 0;
		z-index:9999;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.img{
			width: 42rpx;
			height: 40rpx;
			padding: 10rpx;
			margin-left: 25rpx;
		}
		.imgArea{
			display: flex;
			justify-content: space-between;
			align-items: center;
			background:rgba(0,0,0,0.5);
			border-radius:6rpx;
			padding:14rpx 9rpx;
			margin-right:28rpx;
			.size{
				width: 30rpx;
				height: 22rpx;
				margin-right: 13rpx;
			}
			.font{
				font-size:26rpx;
				color:rgba(255,214,0,1);
			}
		}
	}
	.move{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9998;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 150rpx;
		background-color:#252525;
		transition: all 5s;
		-webkit-transition: all 5s;	/* Safari 和 Chrome */
		.p{
			color: #FFFFFF;
			font-size: 30rpx;
		}
	}
	.move1{
		position: fixed;
		top: 150rpx;
		left:0;
		z-index: 9998;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 50rpx;
		background-color:#343434;
		.p{
			font-size:22rpx;
			color: #FFFFFF;
		}
	}
	// ------- 头像 关注 粉丝部分
	.center{
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		margin-top: -100rpx;
		padding: 0rpx 28rpx 0rpx 28rpx;
		width: 100%;
		height: 100rpx;
		.photo{
			width:160rpx;
			height:160rpx;
			background: #151515;
			border:2px solid rgba(255, 255, 255, 1);
			border-radius:50%;
			margin-right: 23rpx;
		}
		.follow{
			display: flex;
			flex-direction: column;
			align-items:center;
			padding:10rpx;
			margin-top:8rpx;
			margin-left:8rpx;
			.p{
				color: #FFFFFF;
				font-size: 26rpx;
			}
			.p1{
				color: #FFFFFF;
				font-size: 22rpx;
			}
		}
		.edit{
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			margin-left:160rpx;
			padding:10rpx;
			padding:11rpx 19rpx;
			border:2px solid rgba(255,255,255,1);
			border-radius:8rpx;
			margin-top:20rpx;
			.img{
				width:29rpx;
				height:29rpx;
				vertical-align: middle;
			}
			.p{
				color: #FFFFFF;
				font-size: 26rpx;
				line-height: 25rpx;
				margin-left: 16rpx;
			}
		}
	}
	.name{
		width: 100%;
		background: #232323;
		padding-top:89rpx;
		padding-left:29rpx;
		padding-bottom:35rpx;
		.p{
			font-size:30rpx;
			color: #FFFFFF;
		}
	}
	.commodity{
		// width:100%;
		height: 100rpx;
		background: #252525;
		border: 1px solid #747474;
		padding: 0rpx 37rpx;
		display:flex;
		align-items:center;
		justify-content:space-between;
		.p{
			color: #FFFFFF;
			font-size: 26rpx;
			line-height: 26rpx;
		}
		.img{
			width: 30rpx;
			height: 30rpx;
			padding: 10rpx;
		}
	}
	.profit{
		height: 100rpx;
		background: #252525;
		border: 1px solid #747474;
		padding: 0rpx 37rpx;
		display:flex;
		align-items:center;
		justify-content:space-between;
		.p{
			color: #FFFFFF;
			font-size: 26rpx;
			line-height: 26rpx;
		}
		.img{
			width: 30rpx;
			height: 30rpx;
			padding: 10rpx;
		}
	}
	
	.purchased{
		.p{
			display: flex;
			justify-content: center;
			align-items: center;
			width:100%;
			height:50rpx;
			background-color:#343434;
			.p1{
				font-size: 22rpx;
				color: #FFFFFF;
			}
		}
		.list{
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: flex-start;
			// align-items:center;
			padding: 0rpx 20rpx;
			.pro{
				display: flex;
				flex-direction:column;
				align-items: center;
				justify-content: center;
				.photo{
					width:220rpx;
					height:220rpx;
					background: #343434;
					border-radius:50%;
					margin:28rpx 8rpx 16rpx 8rpx;
				}
				.id{
					display: flex;
					justify-content: center;
					align-items: center;
					height: 22rpx;
					margin-bottom: 11rpx;
					.p1{
						color: #FFFFFF;
						font-size: 22rpx;
						line-height: 22rpx;
					}
					.status{
						height: 14rpx;
						width: 14rpx;
						background: #17FF2A;
						border-radius: 50%;
						margin-left: 9rpx;
					}
				}
				.p2{
					color:#747474;
					font-size: 22rpx;
					margin-bottom: 11rpx;
				}
			}
		}
	}
}
</style>
