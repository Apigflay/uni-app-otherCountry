 <template>
	<view class="content">
		<!-- navBar -->
		<view class="navBar" :style="style">
			<view class="logo">
				<image class="img_logo1" src="../../static/imgs/zuan2.png" mode=""></image>
				<image class="img_logo2" src="../../static/imgs/zuan2.png" mode=""></image>
			</view>
			<view class="text">
				<text class="text_cn">首页</text>
				<text class="text_en">Happy Your</text>
			</view>
			<view class="num">
				<image class="num_img" src="../../static/imgs/zuan2.png" mode=""></image>
				<text class="num_text">{{this.loginData.cash}}</text>
			</view>
		</view>
		<!-- videoArea -->
		<view class="videoArea">
			<view class="video">
				<video class="promotionalVideo" :autoplay="true" muted="muted" :loop="true" objectFit="cover" :controls="false" :src="topVideoSrc" ></video>
			</view>
			<view class="videoMessageArea">
				<view class="photoArea">
					<image class="photo" :src="topinfo.SmallPic" mode=""></image>
				</view>
				<view class="nameArea">
					{{topinfo.Content}}
				</view>
				<view class="lockArea">
					<view class="locked">
						<image class="img" src="../../static/imgs/lock1w.png" mode=""></image>
						<view class="text">
							{{topinfo.UnLockCount}}
						</view>
					</view>
					<view class="btn">
						<text class="text">解锁</text>
						<text class="text text2">|</text>
						<image class="img" src="../../static/imgs/zuan2.png" mode=""></image>
						<text class="text text3">{{topinfo.UnLockMoney}}</text>
					</view>
					<view class="prise">
						<image class="img" src="../../static/imgs/zan1w.png" mode=""></image>
						<view class="text">
							{{topinfo.GoodEvaluate}}%
						</view>
					</view>
				</view>
				
			</view>
		</view>
		<!-- popularArea  大家都在看-->
		<view class="popularArea">
			<view class="popular_title">
				<view class="left">
					<image class="img" :src="this.module[0].ModelImgUrl" mode=""></image>
					<text class="text">{{this.module[0].ModelName}}</text>
				</view>
				<view class="right" @click="goModelPerPage(module[0].Id)">
					<text class="text">更多</text>
					<image class="img" src="../../static/imgs/more2.png" mode=""></image>
				</view>
			</view>
			<view class="scrollArea">
				<view class="scroll">
					<view class="item" v-for="(item,index) in 6" :key="index">
						<image class="bg" src="../../static/imgs/19032400.jpg" mode=""></image>
						<image class="photo" src="" mode=""></image>
						<view class="status"></view>
						<view class="text">
							他他他他他他他他他他他他他他他他他他
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- worldList -->
		<view class="worldList">
			<view class="world_title">
				<view class="left">
					<image class="img" src="../../static/imgs/more2.png" mode=""></image>
					<text class="text">大家都在看</text>
				</view>
				<view class="right">
					<text class="text">更多</text>
					<image class="img" src="../../static/imgs/more2.png" mode=""></image>
				</view>
			</view>
			<!--  -->
			<!-- tab -->
			<view class="tab">
				<view :class="index==current?'tabActive':''" class="item" v-for="(item,index) in tabData" :key="index" :id="index" @click="changeTab">
					<image class="img" :src="item.imgsrcW" mode="" v-if="index==current"></image>
					<image class="img" :src="item.imgsrcB" mode="" v-if="index!=current"></image>
					<text class="text">{{item.text}}</text>
				</view>
			</view>
			<!-- swiper -->
			<view class="swiperArea">
				<swiper class="swiper" :current="current" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" @animationfinish="getChangeMsg">
					<swiper-item>
						<view class="swiper-item uni-bg-red">
							<view class="listPer" v-for="(item,index) in listNum" :key="index">
								<image class="img" :src="item.imgSrc" mode=""></image>
								<view class="text">
									{{item.text}}
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">BBBBBB</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue">CCCCC</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-black">DDDDD</view>
					</swiper-item>
				</swiper>		
			</view>
			<!--  -->
		</view>
		<!-- bannerArea -->
		<view class="banner">
			<!-- <image class="img" src="../../static/imgs/19032400.jpg" mode=""></image> -->
			<swiper class="swiper" indicator-active-color="green" :circular="circular1" :indicator-dots="indicatorDots1" :autoplay="autoplay1" :interval="interval1" :duration="duration1">
				<swiper-item v-for="(item,index) in ad" :key="index">
					<view class="swiper-item uni-bg-red" :url="item.linkAddr" @click="goBannerPages(item.linkAddr)">
						<image class="img" :src="item.picAddr" mode=""></image>
					</view>
				</swiper-item>
				
			</swiper>
		</view>
		<!--  -->
		<!-- 遮罩层 -->
		<view class="marsk" v-if="marskShow" @click="marskNone"></view>
		<!-- 邮箱登录获取验证码 -->
		<view class="getCheckArea"  v-if="getCheckArea">
			<!-- <image class="more" @click="getCheckAreaBack" src="../../static/imgs/more1.png" mode=""></image> -->
			<view class="title">
				绑定邮箱
			</view>
			<view class="inputArea" :class="btnMailStatus==false?'inputAreaErr':''">
				<image class="img" src="../../static/imgs/mail1.png" mode=""></image>
				<input class="input" type="text" placeholder="电子邮件" v-model="mailNum" @input="getMailNumW" />
			</view>
			<view class="tips" :class="btnMailStatus==false?'tipsErr':''">
				{{tip}}
			</view>
			<view class="btn" v-if="btnStatus==false">
				下一步
			</view>
			<view class="btn btnOk" @click="goWrite" v-if="btnStatus==true">
				下一步
			</view>
		</view>
		<!-- 邮箱登录输入验证码 -->
		<view class="mailWriteArea" v-if="mailWriteArea">
			<image class="back" @click="mailWriteAreaBack" src="../../static/imgs/more1.png" mode=""></image>
			<view class="title">
				验证码已发送
			</view>
			<view class="carArea">
				<image class="img" src="../../static/imgs/car1.png" mode=""></image>
			</view>
			<view class="text1 text">
				已经发送到
			</view>
			<view class="text2 text">
				{{mailNum}}
			</view>
			<view class="text3 text">
				请确认你的电子信箱，并输入六位数代码！
			</view>
			<view class="inputArea" :class="mailSixStatus==false?'inputAreaErr':''">
				<input class="input" type="number" maxlength="6" placeholder="6位数代码" v-model="mailSix" @input="getMailCheckNumW" />
				<text class="textErr" v-if="mailFail">电子邮件验证失败</text>
			</view>
			<view class="timeArea1 timeArea">
				若确认为收到信，请检查垃圾信件或
			</view>
			<view class="timeArea2 timeArea" v-if="timeOver==false">
				在{{sixty}}之后重新发送验证电子邮件
			</view>
			<view class="timeArea3 timeArea" v-if="timeOver==true" @click="reSendMailNum">
				重新发送验证信
			</view>
		</view>
		<!-- TagBar -->
		<!-- <TagBar></TagBar> -->
	</view>
</template>

<script>
	import {encrypt,decrypt,system,systemId,base64ToArrayBuffer,sendData,sendD,work,regMail} from "../../lib/js/GlobalFunction.js"
	export default {
		data() {
			return {
				// ---首次longin判断是否登录邮箱---
				marskShow:false,//marsk状态
				getCheckArea:false,//获取验证码弹框-----------------
				mailWriteArea:false,//邮箱登录输入验证码弹框-----------------		
				tip:'将向您发送 One Click 登录的验证邮件',//错误信息
				btnStatus:false,//邮箱 下一步可点击状态
				btnMailStatus:null,//邮箱 验证状态
				timeOver:false,//倒计时结束--邮箱--
				getPhoneAreaShow:false,//手机获取验证码弹框----------
				getPhoneBtnStatus:null,//获取手机号下一步按钮
				phoneNumStatus:null,//手机号码格式错误
				// ------手机号邮箱登录------
				sixty:60,//60秒
				sixtyOver:false,//60秒是否结束
				mailNum:'',//邮箱账号
				mailSix:'',//邮箱六位验证码
				mailSixStatus:null,//邮箱六位验证码  格式状态
				mailFail:false,//邮箱验证失败
				// ---首次longin判断是否登录邮箱---
				style:"",//顶部固定导航
				tabData:[{imgsrcB:'../../static/imgs/zuan2b.png',imgsrcW:'../../static/imgs/zuan2w.png',text:'总排行榜'},
				{imgsrcB:'../../static/imgs/lock2b.png',imgsrcW:'../../static/imgs/lock2w.png',text:'解锁榜'},
				{imgsrcB:'../../static/imgs/chat2b.png',imgsrcW:'../../static/imgs/chat2w.png',text:'聊天榜'},
				{imgsrcB:'../../static/imgs/gift2b.png',imgsrcW:'../../static/imgs/gift2w.png',text:'礼物榜'}],//
				listNum:[{imgSrc:'../../static/imgs/first.png',text:'No.1'},
					{imgSrc:'../../static/imgs/second.png',text:'No.2'},
					{imgSrc:'../../static/imgs/thrird.png',text:'No.3'},
					{imgSrc:'../../static/imgs/456.png',text:'No.4'},
					{imgSrc:'../../static/imgs/456.png',text:'No.5'},
					{imgSrc:'../../static/imgs/456.png',text:'No.6'}],
				indicatorDots: false,//指示点显示
				autoplay: false,//自动播放
				interval: 2000,//间隔
				duration: 500,//动画时长
				circular:true,//衔接
				current:0,//当前activity的滑块
				loginData:null,//登录成功信息
				ad:null,//广告
				module:null,//模块
				topinfo:null,//顶部广告信息
				indicatorDots1:true,//banner -指示点显示
				autoplay1:true,//banner
				interval1:2000,//banner
				duration1:500,//banner
				circular1:true,//衔接
				topVideoSrc:null,//顶部video视频链接
				model1Data:null,//模块1数据 
				model2Data:null,//模块2数据
				
			};
		},
		onLoad() {//监听页面加载，其参数为上个页面传递的数据，参数类型为Object
				this.getLoginData()//
				this.getHomeAdAndModule()
				
				
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
				this.style="background: rgba(0,0,0,0.3);"
			}else{
				this.style=""
			}
		},
		methods:{
			marskNone:function(){//遮罩层点击
			},
			getMailNumW:function(event){//输入邮箱  进行验证
				console.log(event.target.value)
				this.mailNum = event.target.value
				var test = regMail(event.target.value)
				if(test){
					this.btnStatus=true;
					this.btnMailStatus=true;
					this.tip='将向您发送 One Click 登录的验证邮件';
				}else{
					this.btnStatus=false;
					this.btnMailStatus=false;
					this.tip='请填写正确格式';
				}
			},
			goWrite:function(){//邮箱下一步 输入验证码-----
				this.sixty=60;
				var array=base64ToArrayBuffer(encrypt(JSON.stringify({
					Email:this.mailNum,//	string	邮箱号
				})))
				var res = JSON.parse(decrypt(sendData('POST',this.GLOBAL.urlPoint+'/Account/SendEmail',array)));
				console.log(res)
				if(res.code==100){
					this.getCheckArea=false;
					this.mailWriteArea=true;
					console.log(this.timeOver)
					var that=this;
					var timer = setInterval(function(){
						that.sixty--;
						if(that.sixty==0){
							clearInterval(timer)
							that.timeOver=true;
						}else{
							that.timeOver=false;
						}
						console.log(that.sixty)
					},1000)
				}else{
					
				}
				
				// this.getCheckArea=false;
				// this.mailWriteArea=true;
			},
			mailWriteAreaBack:function(){//邮箱输入验证码返回
				this.getCheckArea=true;
				this.mailWriteArea=false;
			},
			getMailCheckNumW:function(event){//输入邮箱验证码  进行验证
				console.log(event.target.value)
				this.mailSix = event.target.value
				if(event.target.value.length==6){
					this.mailSixStatus=true;
					console.log(this.mailNum)
					console.log(this.loginData.useridx)
					console.log(Number(event.target.value))
					var array=base64ToArrayBuffer(encrypt(JSON.stringify({
						Email:this.mailNum,//	string	邮箱号
						userIdx:this.loginData.useridx,// int 
						Code:Number(event.target.value),// int 验证码
					})))
					console.log(array)
					var res = JSON.parse(decrypt(sendData('POST',this.GLOBAL.urlPoint+'/Account/bindEmaill',array)));
					console.log(res)
					if(res.code==100){
						this.mailWriteArea=false;
						this.marskShow=false;
					}else{
						
					}
					
					
				}else{
					this.mailSixStatus=false;
				
				}
			},
			reSendMailNum:function(){//邮箱重新发送验证码
				this.goWrite()
				console.log("邮箱重新发送验证码")
			},
			// ----------------------------------------------------------------------------------
			getLoginData:function(){
				var that = this;
				uni.getStorage({
					key: 'storage_login_str',
					success: function (res) {
						// console.log(JSON.parse(res.data))
						that.loginData = JSON.parse(res.data);
						// console.log(this.loginData.bindmail);
						if(that.loginData.bindmail==false){
							// console.log("未绑定邮箱");
							that.marskShow = true;
							that.getCheckArea =true;
						}
						
					}
				});
			},
			changeTab:function(e){//tab点击
				// console.log(e.currentTarget.id);
				this.current=e.currentTarget.id;
				// console.log(this.current)
			},
			getChangeMsg:function(e){//滑动
				// console.log(e)
				// console.log(e.detail.current)
				this.current=e.detail.current;
			},
			getHomeAdAndModule:function(){//广告以及模块 登陆后请求 
				uni.request({
					url: this.GLOBAL.urlPoint+'/userinfo/HomeAdAndModule' ,//仅为示例，并非真实接口地址。
					method:"POST",
					data: {
						token:this.loginData.webtoken,//	string	
						userIdx:this.loginData.useridx,//	int
					},
					success: (res) => {
						console.log(JSON.parse(decrypt(res.data)).data.module)
						this.ad = JSON.parse(decrypt(res.data)).data.ad;
						this.module = JSON.parse(decrypt(res.data)).data.module;
						this.topinfo = JSON.parse(decrypt(res.data)).data.topinfo;
						this.topVideoSrc=JSON.parse(decrypt(res.data)).data.topinfo.VideoLockUrl;
						this.getHomeList();//模块一请求
					}
				});
				
			},
			getHomeList:function(){//首页各模块列表---1
				var array=base64ToArrayBuffer(encrypt(JSON.stringify({
					type:1,//	int
					useridx:this.loginData.useridx,//	int
					page:1,//	int
					limit:20,//	int
				})))
				console.log(this.module)
				var res = JSON.parse(decrypt(sendData('POST',this.GLOBAL.urlPoint+'/'+this.module[0].ApiUrl,array)));
				if(res.code==100){
					console.log(res.data)
					this.model1Data=res.data;
				}
				
			},
			goBannerPages:function(msg){//点击banner图
				console.log(msg)
			},
			goModelPerPage:function(str){
				console.log(str)
			}
		
		}
	}
</script>

<style lang="scss">
page{
	width: 100%;
	height: 100%;
	// background:rgba(35,35,35,1);#191919
	background:#191919;
}
.content{
	width: 100%;
	height: 100%;
	.navBar{
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		height: 100rpx;
		width: 700rpx;
		padding:0 25rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.logo{
			.img_logo1{
				height: 37rpx;
				width: 44rpx;
			}
			.img_logo2{
				margin-left: 17rpx;
				height: 29rpx;
				width: 97rpx;
			}
		}
		.text{
			font-size: 26rpx;
			.text_cn{
				color: #FFFFFF;
			}
			.text_en{
				margin-left: 45rpx;
				color: #B5B3B4;
			}
		}
		.num{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding:0 18rpx;
			height:50rpx;
			background:rgba(0,0,0,1);
			opacity:0.5;
			border-radius:6rpx;
			color:#FFD600;
			.num_img{
				height: 22rpx;
				width: 30rpx;
			}
			.num_text{
				font-size: 26rpx;
				color: #FFD600;
				margin-left: 13rpx;
			}
		}
	}
	// videoArea
	.videoArea{
		height: 808rpx;
		// background-image: url(../../static/imgs/19032400.jpg);
		// background-size: 100%;
		position: relative;
		.video{
			height: 100%;
			.promotionalVideo{
				width: 750rpx;
				height: 808rpx;
				// height: 100%;
			}
		}
		.videoMessageArea{
			height: 298rpx;
			width: 100%;
			position: absolute;
			bottom:0;
			left: 0;
			.photoArea{
				width: 84rpx;
				height: 84rpx;
				border:2px solid #FFFFFF; 
				border-radius: 50%;
				margin:auto;
				.photo{
					width:84rpx;
					height: 84rpx;
				}
			}
			.nameArea{
				height: 36rpx;
				line-height: 36rpx;
				font-size: 36rpx;
				margin-top: 30rpx;
				text-align: center;
				color:#FFFFFF;
			}
			.lockArea{
				width: 606rpx;
				height: 74rpx;
				margin-top:24rpx;
				padding:0 72rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.locked{
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					.img{
						height: 44rpx;
						width: 44rpx;
					}
					.text{
						height: 20rpx;
						font-size: 20rpx;
						line-height: 20rpx;
						text-align: center;
						color:#fff;
					}
				}
				.btn{
					border:2rpx solid #FFD600;
					border-radius: 35rpx;
					padding: 20rpx 68rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #FFD600;
					.text{
						height: 30rpx;
						line-height: 30rpx;
						text-align: center;
						font-size: 26rpx;
					}
					.text2{
						margin-left: 7rpx;
						margin-right: 8rpx;
					}
					.text3{
						margin-left: 13rpx;
					}
					.img{
						height: 30rpx;
						width: 30rpx;
					}
				}
				.prise{
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					.img{
						height: 44rpx;
						width: 44rpx;
					}
					.text{
						height: 20rpx;
						font-size: 22rpx;
						line-height: 22rpx;
						text-align: center;
						color:#fff;
					}
				}
			}
			// 
		}
	}
	// --popularArea--大家都在看
	.popularArea{
		height: 398rpx;
		padding-top: 10rpx;
		margin-bottom: 24rpx;
		background: #232323;
		.popular_title{
			height: 38rpx;
			width: 700rpx;
			padding:0 24rpx 0 26rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 22rpx;
			.left{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.text{
					height:28rpx;
					font-size: 28rpx;
					line-height: 28rpx;
					color: #FFFFFF;
				}
				.img{
					border-radius: 50%;
					background: red;
					height: 38rpx;
					width:38rpx;
					margin-right: 8rpx;
				}
			}
			.right{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.text{
					height: 22rpx;
					font-size: 22rpx;
					line-height: 22rpx;
					color:#FFFFFF;
				}
				.img{
					height: 24rpx;
					width: 24rpx;
					margin-left:9rpx;
				}
			}
		}
		// -----
		.scrollArea{
			height: 310rpx;
			width: 724rpx;
			margin-left:26rpx;
			border-radius: 8rpx;
			overflow-x: scroll;
			overflow-y:hidden;
			// ---
			.scroll{
				width: 1416rpx;
				display: flex;
				flex-wrap: nowrap;
				.item{
					width: 222rpx;
					height: 310rpx;
					margin-right: 14rpx;
					background: #FFFFFF;
					border-radius: 8rpx;
					position: relative;
					.bg{
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
			// ---
		}
	}
	// ---worldList---
	.worldList{
		height: 812rpx;
		margin-bottom: 24rpx;
		background: #232323;
		padding-top: 28rpx;
		// ---worldTile---
		.world_title{
			height: 38rpx;
			width: 700rpx;
			padding:0 24rpx 0 26rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 30rpx;
			.left{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.text{
					height:28rpx;
					font-size: 28rpx;
					line-height: 28rpx;
					color: #FFFFFF;
				}
				.img{
					border-radius: 50%;
					background: red;
					height: 38rpx;
					width:38rpx;
					margin-right: 8rpx;
				}
			}
			.right{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.text{
					height: 22rpx;
					font-size: 22rpx;
					line-height: 22rpx;
					color:#FFFFFF;
				}
				.img{
					height: 24rpx;
					width: 24rpx;
					margin-left:9rpx;
				}
			}
		}
		// tab--
		.tab{
			padding:0 25rpx;
			height: 52rpx;
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
		.swiperArea{
			padding:0 25rpx;
			height: 676rpx;
			.swiper{
				width: 100%;
				height: 100%;
				.swiper-item{
					display: flex;
					justify-content: space-between;
					align-items: center;
					flex-wrap: wrap;
					.listPer{
						width: 222rpx;
						height: 310rpx;
						background: #000000;
						color: #fff;
						margin-top: 20rpx;
						margin-bottom: 8px;
						position: relative;
						.img{
							position: absolute;
							width: 42rpx;
							height: 42rpx;
							bottom: 4rpx;
							left: 4rpx;
							z-index: 10;
						}
						.text{
							height: 30rpx;
							width: 82rpx;
							background: #FFFFFF;
							font-size: 22rpx;
							line-height: 30rpx;
							color:#383838;
							text-align: center;
							border-radius:15rpx; 
							position: absolute;
							bottom: 10rpx;
							left:28rpx;
							z-index: 9;
						}
					}
				}				
			}
		}
		// swiper---end--
		
	}
	// --bannerArea--
	.banner{
		height: 240rpx;
		margin-bottom: 240rpx;
		// margin-bottom: 100rpx;
		.swiper{
			height: 240rpx;
			position: relative;
			.img{
				width: 100%;
				height: 240rpx;
			}
			.uni-swiper-dots{
				background: green;
				position: absolute;
				left: 0!important;
			}
			.uni-swiper-dots-horizontal{
				background: green;
				position: absolute;
				left: 0!important;
			}
			.uni-swiper-wrapper{
				.uni-swiper-dots{
					background: red;
					position: absolute;
					left: 0!important;
				}
				.uni-swiper-dots-horizontal{
					background: red;
					position: absolute;
					left: 0!important;
				}
			}
			
		}
		
	}
	// ---- ----
	// --邮箱获取验证码--
	.getCheckArea{
		position: fixed;
		bottom: 0;
		left:0;
		z-index: 10001;
		width:750rpx;
		height:380rpx;
		background:rgba(255,255,255,1);
		border-radius:12rpx 12rpx 0rpx 0rpx;
		transition: all 0.3s;
		.more{
			position: absolute;
			top: 41rpx;
			left: 41rpx;
			width: 34rpx;
			height: 34rpx;
		}
		.title{
			height: 32rpx;
			font-size: 32rpx;
			text-align: center;
			line-height: 32rpx;
			margin-top: 41rpx;
			color:rgba(89,89,89,1);
			font-weight: 600;
		}
		.inputArea{
			width:536rpx;
			height:66rpx;
			border:2rpx solid rgba(246,246,246,1);
			background:rgba(246,246,246,1);
			border-radius:10rpx;
			margin: auto;
			margin-top: 63rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.img{
				width: 30rpx;
				height: 22rpx;
			}
			.input{
				width: 420rpx;
				margin-left: 32rpx;
				font-size:30rpx;
				color:rgba(172,172,172,1);
			}
			
		}
		.inputAreaErr{
			border:2rpx solid red;
		}
		.tips{
			width:540rpx;
			height:22rpx;
			font-size:22rpx;
			margin: auto;
			margin-top: 15rpx;
			font-weight:400;
			color:rgba(172,172,172,1);
			line-height:22rpx;
		}
		.tipsErr{
			color:red;
		}
		.btn{
			position: absolute;
			width: 100%;
			height: 70rpx;
			bottom: 0;
			background:rgba(172,172,172,1);
			font-size:30rpx;
			font-family:PingFang TC;
			color:rgba(255,255,255,1);
			line-height:70rpx;
			text-align: center;
		}
		.btnOk{
			background:rgba(255,214,0,1)
		}
	}
	// --邮箱输入验证码--
	.mailWriteArea{
		position: fixed;
		bottom: 0;
		left:0;
		z-index: 10001;
		width:750rpx;
		height:870rpx;
		background:rgba(255,255,255,1);
		border-radius:12rpx 12rpx 0rpx 0rpx;
		transition: all 0.3s;
		.back{
			position: absolute;
			top: 41rpx;
			left: 41rpx;
			width: 34rpx;
			height: 34rpx;
		}
		.title{
			height: 32rpx;
			font-size: 32rpx;
			text-align: center;
			line-height: 32rpx;
			margin-top: 41rpx;
			color:rgba(89,89,89,1);
			font-weight: 600;
		}
		.carArea{
			height: 173rpx; 
			text-align: center;
			margin-top: 73rpx;
			.img{
				height: 173rpx;
				width: 350rpx;
			}
		}
		.text{
			height: 30rpx;
			font-size: 30rpx;
			text-align: center;
			line-height: 30rpx;
			color:rgba(112,112,112,1);
			font-weight: 500;
		}
		.text1{
			margin-top: 73rpx;
		}
		.text2{
			margin-top: 27rpx;
		}
		.text3{
			margin-top: 27rpx;
			font-size: 26rpx;
			height: 26rpx;
			line-height: 26rpx;
		}
		.inputArea{
			width:536rpx;
			height:66rpx;
			border:2rpx solid rgba(246,246,246,1);
			background:rgba(246,246,246,1);
			border-radius:10rpx;
			margin: auto;
			margin-top: 39rpx;
			margin-bottom: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			.input{
				width: 490rpx;
				font-size:30rpx;
				color:rgba(172,172,172,1);
			}
			.textErr{
				position: absolute;
				left: 0;
				bottom: -40rpx;
				color: red;
				font-size: 24rpx;
				line-height: 24rpx;
			}
		}
		.inputAreaErr{
			border:2rpx solid red;
		}
		.timeArea{
			font-size:26rpx;
			font-family:PingFang TC;
			font-weight:400;
			color:rgba(172,172,172,1);
			line-height:26rpx;
			text-align: center;
		}
		.timeArea1{
		}
		.timeArea2{
			margin-top: 12rpx;
		}
		.timeArea3{
			margin-top: 12rpx;
			text-decoration: underline;
		}
	}
	// --遮罩层--
	.marsk{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10000;
		width: 100%;
		height: 100%;
		background:rgba(0,0,0,0.4);
	}
	// --遮罩层--
	
}
</style>
