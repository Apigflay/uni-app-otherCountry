<template>
	<view>
		<view class="main">
			<view class="search">
				<form @submit="formSubmit">
					<input class="section__title" id="search" type="search" placeholder="搜索" v-model="search" @input="check()" @blur="blur()" @focus="focus()"/>
				</form>
			</view>
			<view class="video">
				<view class="title">
					<view :class="index==current?'tabActive':''" class="tab" v-for="(item,index) in tabledata" :key="index" :id="index" @click="changeTab">
						<text class="text">{{item.text}}</text>
					</view>
				</view>
				<view class="movie">
					<view class="swiperArea" :style="'height:'+ height + 'rpx'">
						<view class="swiper">
							<view v-show="current == 0">
								<view class="title1">
									<text class="p">热门搜索</text>
								</view>
								<view class="swiper-video">
									<view class="listPer" v-for="(item,index) in listNum" :key="index">
										<image class="img" :src="item.imgSrc" mode=""></image>
										<image class="photo"></image>
										<view class="status"></view>
										<view class="text">{{item.text}}</view>
									</view>
								</view>
							</view>
							<view v-show="current == 1">
								<view>
									<text class="title2">最近</text>
								</view>
								<view class="swiper-table">
									<view class="listPer" v-for="(item,index) in 2" :key="index">
										<view class="head">
											<image class="photo"></image>
											<view class="status"><text class="p">#</text></view>
										</view>
										<view class="center">
											<text class="p1">#性感</text>
											<text class="p2">1163则帖子</text>
										</view>
									</view>
								</view>
								<view>
									<text class="title2">热门搜索</text>
								</view>
								<view class="swiper-table">
									<view class="listPer" v-for="(item,index) in 2" :key="index">
										<view class="head">
											<image class="photo"></image>
											<view class="status"><text class="p">#</text></view>
										</view>
										<view class="center">
											<text class="p1">#性感</text>
											<text class="p2">1163则帖子</text>
										</view>
									</view>
								</view>
							</view>
							<view v-show="current == 2">
								<view>
									<view>
										<text class="title3">粉丝推荐</text>
									</view>
									<view class="swiper-swagger">
										<view class="listPer" v-for="(item,index) in 6" :key="index">
											<view class="head">
												<image class="photo"></image>
											</view>
											<view class="center">
												<view class="p1">@sasa.baby1235 <view v-if="show_spot" class="spot"></view> </view>
												<text class="p2">9月vip为两台飞机  享有8.9月百部影片，你的女神...</text>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>		
					</view>
				</view>
			</view>
			<!-- TagBar -->
			<!-- <TagBar></TagBar> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show_spot: true, // 是否在线的绿点
				search: "", //搜索栏input中的内容
				height:1004,//页面video视频部分高度
				style:"",//顶部固定导航
				current:0,//当前activity的滑块
				indicatorDots: false,//指示点显示
				autoplay: false,//自动播放
				interval: 2000,//间隔
				duration: 500,//动画时长
				circular:true,//衔接
				tabledata:[
					{abc:1,text:"群发影片"},
					{abc:2,text:"标签"},
					{abc:3,text:"Swagger"}
				],
				listNum:[
					{imgSrc:'../../static/pictures/bgtop.jpg',text:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',icon:'../../static/pictures/box.jpeg',online:true},
					{imgSrc:'../../static/pictures/bgtop.jpg',text:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',icon:'../../static/pictures/box.jpeg',online:true},
					{imgSrc:'../../static/pictures/bgtop.jpg',text:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',icon:'../../static/pictures/box.jpeg',online:true},
					{imgSrc:'../../static/pictures/bgtop.jpg',text:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',icon:'../../static/pictures/box.jpeg',online:true},
					{imgSrc:'../../static/pictures/bgtop.jpg',text:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',icon:'../../static/pictures/box.jpeg',online:true},
					{imgSrc:'../../static/pictures/bgtop.jpg',text:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',icon:'../../static/pictures/box.jpeg',online:true},
					{imgSrc:'../../static/pictures/bgtop.jpg',text:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',icon:'../../static/pictures/box.jpeg',online:true},
					{imgSrc:'../../static/pictures/bgtop.jpg',text:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',icon:'../../static/pictures/box.jpeg',online:true},
					{imgSrc:'../../static/pictures/bgtop.jpg',text:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',icon:'../../static/pictures/box.jpeg',online:true},
					{imgSrc:'../../static/pictures/bgtop.jpg',text:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',icon:'../../static/pictures/box.jpeg',online:true},
					{imgSrc:'../../static/pictures/bgtop.jpg',text:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',icon:'../../static/pictures/box.jpeg',online:true},
					{imgSrc:'../../static/pictures/bgtop.jpg',text:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',icon:'../../static/pictures/box.jpeg',online:true}
				],
				listLately:[]
			};
		},
		
		onLoad() {//监听页面加载，其参数为上个页面传递的数据，参数类型为Object
				// console.log("页面加载")
				// this.getSwiperData()
		},
		onReachBottom(){
			console.log("aaa")
			// this.height=this.height+750
		},
		methods:{
			changeTab:function(e){
				// console.log(e.currentTarget.id);
				this.current=e.currentTarget.id;
				// console.log(this.current)
			},
			getChangeMsg:function(e){
				// console.log(this.current)
				// console.log(e.detail.current)
				this.current=e.detail.current;
			},
			check:function(){ // 搜索栏输入事件
				console.log(this.search)
			},
			focus:function(){
				console.log("aaa");
			},
			blur:function(){
				console.log("bbb")
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
	// width:750rpx;
	width: 100%;
	height:1334rpx;
	background-color:#191919;
	.search{ // 搜索栏样式
		z-index: 9999; // 页面搜索栏 位置
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		right: 0rpx;
		height: 110rpx;
		background-color:#232323;
		padding: 28rpx 28rpx 28rpx 28rpx;
		.section__title{ //搜索栏中的 input
			height: 54rpx;
			color:#ACACAC;
			font-size: 30rpx;
			font-weight:400;
			background-color:#343434;
			border-radius: 10rpx;
			background-image: url(../../static/pictures/search_1.png);
			background-repeat: no-repeat; /*设置图片不重复*/
			background-position: left; /*图片显示的位置*/
			background-position:12rpx; // 设置图片位置
			padding-left: 70rpx; //设置搜索文字位置
			background-size: 31rpx 31rpx; // 搜索图标的大小
			
		}
	}
	.video{ 
		height:100%;
		// height:1147rpx;
		.title{// 搜索内容
			display: flex;
			justify-content:space-around;
			align-items: center;
			border-top:2rpx solid #343434;
			border-bottom:2rpx solid #343434;
			padding-left:67rpx;
			padding-right:67rpx;
			height:74rpx;
			background-color: #232323;
			z-index: 9999; // 页面tab栏 位置
			position: fixed;
			top: 112rpx;
			left: 0rpx;
			right: 0rpx;
			.tab{
				transition:all 0.2s;
				display: flex;
				justify-content: center;
				align-items: center;
				padding:26rpx 0 23rpx 0;
				border-bottom:2rpx solid #232323;
				.text{
					font-size: 26rpx;
					line-height: 25rpx;
					color: #707070;
					margin: 0rpx 31rpx 0rpx 31rpx;
				}
			}
			.tabActive{ // tab文字选中下划线
				box-sizing: border-box;
				border-bottom: 2rpx solid #FFFFFF;
				.text{
					color: #fff;
				}
			}
		}
		.movie{ // 页面视频部分
			width:100%;
			z-index: 1; // 页面tab栏 位置
			position: absolute;
			top: 186rpx;
			background:#191919;
			// height:1147rpx;
			.swiperArea{ // 视频内容
				// width:750rpx;
				width:100%;
				// height:1004rpx;
				// padding:11rpx 0rpx 7rpx 0rpx;
				.swiper{
					// width: 100%;
					// height:100%;
					height:1058rpx;
					.title1{ // 视频上方文字
						.p{
							display: block;
							margin-top:28rpx;
							margin-left: 29rpx;
							margin-bottom: 11rpx;
							color: #FFFFFF;
							font-size: 26rpx;
							font-weight: 400;
							// line-height: 25rpx;
						}
					}
					.swiper-video{
						background:#191919;
						padding: 0rpx 14rpx 0rpx 28rpx;
						display: flex;
						justify-content: flex-start;
						align-items: center;
						flex-wrap: wrap;
						.listPer{
							width: 222rpx;
							height: 310rpx;
							margin-bottom: 28rpx;
							margin-right: 14rpx;
							position: relative;
							.img{
								border-radius:8rpx;
								width: 222rpx;
								height: 310rpx;
							}
							.photo{
								background: #232323;
								position: absolute;
								height: 60rpx;
								width: 60rpx;
								border:2px solid #fff;
								border-radius: 50%;
								top: 10rpx;
								left: 10rpx;
							}
							.status{
								height: 20rpx;
								width: 20rpx;
								background: #17FF2A;
								position: absolute;
								top:55rpx;
								left: 55rpx;
								border-radius: 50%;
							}
							.text{
								position: absolute;
								width:197rpx;
								height:68rpx;
								bottom: 9rpx;
								left: 12rpx;
								font-size:22rpx;
								font-weight:400;
								color:#FFFFFF;
								line-height:34rpx;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 2;
								overflow: hidden;
							}
							
						}
					}
					.title2{ // 标签列表上面的文字 最近
						// width:50rpx;
						// height: 24rpx;
						display: block;
						font-size: 26rpx;
						font-weight: 400;
						color: #FFFFFF;
						margin-top: 29rpx;
						margin-left: 29rpx;
					}
					.swiper-table{
						margin-top: 15rpx;
						margin-left:29rpx;
						
						.listPer{
							height: 113rpx;
							// width:690rpx;
							display:flex;
							.head{ // 头像
								padding: 12rpx 0rpx 11rpx 0rpx;
								height: 90rpx;
								width: 90rpx;
								position:absolute;
								.photo{ // 头像
									background: #646464;
									height: 90rpx;
									width: 90rpx;
									border-radius: 50%;
								}
								.status{ // 图片中的圆
									height: 32rpx;
									width: 32rpx;
									background: #877DF5;
									border-radius: 50%;
									position: absolute;
									top:62rpx;
									left:65rpx;
									.p{ // #号
										position: absolute;
										top:0rpx;
										left:10rpx;
										color:#FFFFFF;
										font-size: 26rpx;
										font-weight:500;
									}
								}
							}
							.center{
								// width: 600rpx;
								width: 100%;
								height:113rpx;
								border-bottom: 2px solid #343434;
								display: flex;
								flex-direction:column;
								justify-content:center;
								margin-left:93rpx;
								margin-right:28rpx;
								.p1{
									font-size: 26rpx;
									font-weight:500;
									// margin-top:28rpx;
									margin-left:37rpx;
									color: #FFFFFF;
								}
								.p2{
									font-size: 22rpx;
									font-weight:400;
									margin-top:10rpx;
									margin-left:38rpx;
									color:#ACACAC;
								}
							}
						}
					}
					.title3{
						display: block;
						font-size: 26rpx;
						font-weight: 400;
						color: #FFFFFF;
						margin-top: 29rpx;
						margin-left: 29rpx;
					}
					.swiper-swagger{
						margin-top: 15rpx;
						margin-left:29rpx;
						.listPer{
							height: 113rpx;
							// width:690rpx;
							display:flex;
							.head{ // 头像
								padding: 12rpx 0rpx 11rpx 0rpx;
								height: 90rpx;
								width: 90rpx;
								// position:absolute;
								.photo{ // 头像
									background: #646464;
									height: 90rpx;
									width: 90rpx;
									border-radius: 50%;
								}
							}
							.center{
								// width: 600rpx;
								width: 100%;
								height:113rpx;
								border-bottom: 2px solid #343434;
								display: flex;
								flex-direction:column;
								justify-content:center;
								margin-left:40rpx;
								margin-right:28rpx;
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
									font-size: 22rpx;
									font-weight:400;
									margin-top:9rpx;
									margin-right: 94rpx;
									color:#ACACAC;
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
		}
		
	}
}
</style>
