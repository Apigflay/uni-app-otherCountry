<template>
	<view class="content">
		<view class="navArea">
			<view class="nav">
				<image class="img" src="../../static/imgs/more1w.png" mode=""></image>
				<text class="title" @click="changeTitle">{{titleText}}</text>
				<text class="bottom" v-if="titleStatus==false"></text>
				<text class="top" v-if="titleStatus==true"></text>
				<view class="showNoneArea" v-if="titleStatus" @click="chooseTitle()">
					{{showNoneAreaText}}
				</view>
			</view>
			<view class="tab">
				<view :class="index==current?'tabActive':''" class="item" v-for="(item,index) in tabData" :key="index" :id="index" @click="changeTab">
					<image class="img" :src="item.imgsrcW" mode="" v-if="index==current"></image>
					<image class="img" :src="item.imgsrcB" mode="" v-if="index!=current"></image>
					<text class="text">{{item.text}}</text>
				</view>
			</view>
		</view>
		<view class="listArea">
			<view class="tab">
				<view class="per" :class="index==bgcurrent?'active'+index+' '+item.class:' '+item.class" v-for="(item,index) in timeTab" :key="index" :id="index" @click="changeTabBg">
					{{item.text}}
				</view>
			</view>
			<view class="changeTime">
				{{changeTime}}
			</view>
			<view class="listArea">
				<view class="per" v-for="(item,index) in 11" :key="index">
					<text class="index">{{index+1}}</text>
					<view class="box">
						<image class="img" src="../../static/imgs/456.png" mode=""></image>
						<text class="name">@43534535345</text>
						<view class="status" v-if="index%2==0"></view>
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
				tabData:[{imgsrcB:'../../static/imgs/zuan2b.png',imgsrcW:'../../static/imgs/zuan2w.png',text:'总排行榜'},
				{imgsrcB:'../../static/imgs/lock2b.png',imgsrcW:'../../static/imgs/lock2w.png',text:'解锁榜'},
				{imgsrcB:'../../static/imgs/chat2b.png',imgsrcW:'../../static/imgs/chat2w.png',text:'聊天榜'},
				{imgsrcB:'../../static/imgs/gift2b.png',imgsrcW:'../../static/imgs/gift2w.png',text:'礼物榜'}],//
				current:0,//当前activity的滑块
				timeTab:[{text:'24小时',class:'red'},{text:'7日',class:'green'},{text:'30日',class:'blue'}],
				bgcurrent:0,//时间初始状态
				changeTime:'每小时更新一次',//更新时间
				titleStatus:false,//顶部三角的方向
				titleData:[{text:'全球榜',id:'1'},{text:'欧美榜',id:'2'}],//暂未使用
				titleText:'全球榜',//顶部的文字
				showNoneAreaText:'欧美榜',//隐藏的文字信息
				
			};
		},
		methods:{
			changeTab:function(e){//tab点击
				// console.log(e.currentTarget.id);
				this.current=e.currentTarget.id;
				// console.log(this.current)
			},
			changeTabBg:function(e){
				console.log(e.currentTarget.id);
				this.bgcurrent=e.currentTarget.id;
			},
			changeTitle:function(){
				if(this.titleStatus==false){
					this.titleStatus=true;
				}else{
					this.titleStatus=false;
				}
					
			},
			chooseTitle:function(msg){
				console.log(msg)
				if(this.titleStatus==false){
					this.titleStatus=true;
				}else{
					if(this.titleText=='全球榜'){
						this.titleText='欧美榜';
						this.showNoneAreaText='全球榜';
					}else if(this.titleText=='欧美榜'){
						this.titleText='全球榜';
						this.showNoneAreaText='欧美榜';
					}
					this.titleStatus=false;
				}
			}
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
	justify-content: space-between;
	flex-direction: column;
	.navArea{
		height: 186rpx;
		width:100%;
		background:rgba(35,35,35,1);
		.nav{
			height: 110rpx;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			.img{
				position: absolute;
				width: 36rpx;
				height: 36rpx;
				padding: 10rpx;
				top:27rpx;
				left: 19rpx;
			}
			.title{
				font-size:30rpx;
				color:rgba(255,255,255,1)
			}
			.bottom{
				width:0;
				height:0;
				border-right:5px solid transparent;
				border-left:5px solid transparent;
				border-top:10px solid rgba(255,214,0,1);
			}
			.top{
				width:0;
				height:0;
				border-right:5px solid transparent;
				border-left:5px solid transparent;
				border-bottom:10px solid rgba(255,214,0,1);
			}
			.showNoneArea{
				height: 84rpx;
				width: 100%;
				position: absolute;
				bottom: -84rpx;
				// background: red;
				background:rgba(35,35,35,1); 
				text-align: center;
				line-height: 84rpx;
				z-index: 9999;
				color: #FFFFFF;
				font-size:30rpx;
			}
		}
		.tab{
			padding:0 42rpx;
			height: 84rpx;
			border-top:2rpx solid rgba(52,52,52,1);
			display: flex;
			justify-content:space-between;
			align-items: center;
			.item{
				display: flex;
				justify-content: center;
				align-items: center;
				padding:12rpx 0 14rpx 0;
				border-bottom: 2px solid #232323;
				transition:all 0.2s;
				.img{
					height: 24rpx;
					width: 24rpx;
					margin-right: 8rpx;
				}
				.text{
					font-size: 22rpx;
					line-height: 22rpx;
					color: #707070;
				}
			}
			.tabActive{
				box-sizing: border-box;
				border-bottom: 2px solid #FFFFFF;
				.text{
					color: #fff;
				}
			}
		}
	}
	.listArea{
		flex: 1;
		background:rgba(25,25,25,1);
		overflow-y:scroll;
		.tab{
			height: 40rpx;
			padding: 40rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.per{
				font-size: 24rpx;
				padding:6rpx 52rpx;
				border-radius: 20rpx;
			}
			.red{
				border:2px solid rgba(246,119,118,1);
				color: rgba(246,119,118,1);
				margin-left: 65rpx;
			}
			.green{
				border:2px solid rgba(129,190,38,1);
				color: rgba(129,190,38,1);
			}
			.blue{
				border:2px solid rgba(97,167,198,1);
				color: rgba(97,167,198,1);
				margin-right: 65rpx;
			}
			.active0{
				color:#fff;
				background: rgba(246,119,118,1);
			}
			.active1{
				color:#fff;
				background: rgba(129,190,38,1);
			}
			.active2{
				color:#fff;
				background: rgba(97,167,198,1);
			}
		}
		.changeTime{
			font-size:22rpx;
			color:rgba(112,112,112,1);
			line-height: 22rpx;
			height: 22rpx;
			text-align: right;
			padding-right: 30rpx;
			margin-bottom: 8rpx;
		}
		.listArea{
			.per{
				height: 123rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.index{
					height: 123rpx;
					width: 74rpx;
					font-size:26rpx;
					color:rgba(255,255,255,1);
					text-align: center;
					line-height: 123rpx;
				}
				.box{
					height: 122rpx;
					width: 676rpx;
					display: flex;
					// justify-content: space-between;
					align-items: center;
					border-bottom: 1rpx solid rgba(116,116,116,1);
					.img{
						width:90rpx;height: 90rpx;border-radius: 50%;
					}
					.name{
						font-size:26rpx;
						color:rgba(255,255,255,1);
						margin-left: 20rpx;
					}
					.status{
						width: 14rpx;
						height: 14rpx;
						background:rgba(23,255,42,1);
						border-radius:50%;
						margin-left: 11rpx;
					}
				}
			}
		}
	}
}

</style>
