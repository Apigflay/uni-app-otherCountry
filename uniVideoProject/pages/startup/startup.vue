<template>
	<view class="content">
		<view class="startUpVideo">
			<video class="video" :autoplay="true" :loop="true" objectFit="cover" muted="muted" :controls="false" :show-center-play-btn="false" src="../../static/promotionalVideo.mp4" ></video>
		</view>
		<view class="mainArea">
			<view class="loginBtn" @click="goLogin">
				登录/注册
			</view>
			<view class="introduction1">
				Welcome to Asia's Largest Adult Private Platform
			</view>
			<view class="introduction2">
				Discover new sensualitites and evoke heart-throbbing emotions through intimate messages.
			</view>
			<view class="introduction3">
					<view class="online per">
						<view class="num">
							9112
						</view>
						<view class="text">
							Online Users
						</view>
					</view>
					<view class="broad per">
						<view class="num">
							9112
						</view>
						<view class="text">
							Briadcasts
						</view>
					</view>
					<view class="chat per">
						<view class="num">
							64106
						</view>
						<view class="text">
							Chats
						</view>
					</view>
			</view>
			<view class="login" @click="goLogin">
				Enter for free
			</view>
			<view class="rule">
				This website follows R18rule.
			</view>
		</view>
		<!-- chooseMethodArea -->
		<view class="chooseMethodArea" v-if="chooseMethodAreaShow">
			<image class="close" src="../../static/imgs/close1.png" mode="" @click="close"></image>
			<view class="introduction">
				欢迎来到亚洲最大的私密成人平台我们能给你的一切叫做爱
			</view>
			<view class="login" @click="goRex">
				<image class="img" src="../../static/imgs/mail1.png" mode=""></image>
				<text class="text">使用电子邮箱登入/注册</text>
			</view>
			<view class="line">
				<text class="text">其他登录方法</text>
			</view>
			<view class="loginMethod">
				<image :class="index==nowActive?'active':''" @click="chooseMethod" :id="index" class="img" :src="item" v-for="(item,index) in loginMethodData" :key="index" mode=""></image>
			</view>
			<view class="tuleText">
				<text>注册/登入即代表你年满18岁并同意</text>
				<text class="rule">条款</text>
			</view>
		</view>
		<!-- 邮箱登录获取验证码 -->
		<view class="getCheckArea"  v-if="getCheckArea">
			<image class="more" @click="getCheckAreaBack" src="../../static/imgs/more1.png" mode=""></image>
			<view class="title">
				登入cat
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
		<!-- 手机号登录获取验证码 -->
		<view class="getPhoneArea" v-if="getPhoneAreaShow">
			<image class="back" @click="getPhoneAreaBack" src="../../static/imgs/more1.png" mode=""></image>
			<view class="title">
				请输入手机号
			</view>
			<view class="tips">
				验证码将传送到你的手机
			</view>
			<view class="inputArea">
				<view class="boforeNum" @click="goChooseBoforeNum">
					<text class="text1">+{{this.beforePhoneNum}}</text>
					<text class="text2"></text>
				</view>
				<view class="phone" :class="phoneNumStatus==false?'phoneErr':''">
					<input class="input" placeholder="您的电话号码" type="text" v-model="phobeNum" @input="getPhoneNumW" />
				</view>
			</view>
			<view class="btn btnErr" v-if="getPhoneBtnStatus==false">
				号码格式不符
			</view>
			<view class="btn" @click="goPhoneWrite" v-if="getPhoneBtnStatus==true">
				接收验证码
			</view>
		</view>
		<!-- 手机号登录输入验证码 -->
		<view class="phoneNumWriteArea" v-if="phoneNumWriteAreaShow">
			<image class="back" @click="phoneNumWriteAreaBack" src="../../static/imgs/more1.png" mode=""></image>
			<view class="title">
				输入验证码
			</view>
			<view class="tips">
				已传送短信验证码到 +{{beforePhoneNum}}{{phobeNum}}
			</view>
			<view class="inputArea" :class="phoneSixStatus==false?'inputAreaErr':''">
				<input class="input" type="number" maxlength="6" placeholder="6位数代码" @input="getPhoneCheckNumW"/>
				<text class="time" v-if="sixtyOver==false">{{sixty}}s</text>
				<text class="time" v-if="sixtyOver==true" @click="goPhoneWrite">重新发送</text>
				<text class="text" v-if="phoneSixStatus==false">无效验证码</text>
			</view>
			<text class="changeNum" @click="changePhoneNum">修改手机号</text>
		</view>
		<!-- 手机号码选择 -->
		<view class="boforeNumChooseArea" v-if="boforeNumChooseAreaShow" >
			<image class="img" src="../../static/imgs/close1.png" mode="" @click="boforeNumChooseAreaClose"></image>
			<view class="country">
				选择国家
			</view>
			<view class="inputArea">
				<input class="input" placeholder="搜索" type="text" value="" />
			</view>
			<view class="countryArea">
				<view class="perCountry" v-for="(item,index) in beforePhoneNumData" :key="index" @click="getPhoneBefore(item)">
					<text>{{item.conuntry}}</text>
					<text>+{{item.num}}</text>
				</view>
			</view>
		</view>
		<!-- 遮罩层 -->
		<view class="marsk" v-if="marskShow" @click="marskNone"></view>
	</view>
</template>

<script>
	import {encrypt,decrypt,system,systemId,base64ToArrayBuffer,sendData,sendD,work,regMail} from "../../lib/js/GlobalFunction.js"
	export default {
		
		data() {
			return {
				chooseMethodAreaShow:false,//选择登录方式弹框
				getCheckArea:false,//获取验证码弹框-----------------
				mailWriteArea:false,//邮箱登录输入验证码弹框-----------------
				marskShow:false,//marsk状态
				loginMethodData:['../../static/imgs/gmail1.png','../../static/imgs/phone1.png','../../static/imgs/facebook1.png','../../static/imgs/bird1.png'],
				loginMethod:0,//登录方式 0--邮箱, 1--手机, 2--Facebook, 3--twitter, 4--Google
				nowActive:4,//当前点击的登录方式 控制status 0--Google, 1--手机, 2--Facebook, 3--twitter, 4--邮箱
				tip:'将向您发送 One Click 登录的验证邮件',//错误信息
				btnStatus:false,//邮箱 下一步可点击状态
				btnMailStatus:null,//邮箱 验证状态
				timeOver:false,//倒计时结束--邮箱--
				getPhoneAreaShow:false,//手机获取验证码弹框----------
				getPhoneBtnStatus:null,//获取手机号下一步按钮
				phoneNumStatus:null,//手机号码格式错误
				phoneNumWriteAreaShow:false,//手机验证码输入弹框-------------
				phoneSixStatus:null,//手机验证码格式错误
				boforeNumChooseAreaShow:false,//手机号前缀选择区域
				beforePhoneNum:'1897',//手机号前缀
				beforePhoneNumData:[{conuntry:"China",num:'86'},//手机号前缀 信息
					{conuntry:"Hongkong(香港)",num:'852'},
					{conuntry:"Angenala",num:'54'},
					{conuntry:"Angoia",num:'244'}],
				// ------手机号邮箱登录------
				phobeNum:'',//手机号
				phoneSix:'',//手机号六位验证码
				sixty:60,//60秒
				sixtyOver:false,//60秒是否结束
				mailNum:'',//邮箱账号
				mailSix:'',//邮箱六位验证码
				mailSixStatus:null,//邮箱六位验证码  格式状态
				mailFail:false,//邮箱验证失败
				// ----------
			};
		},
		methods:{
			goLogin:function(){
				this.chooseMethodAreaShow=true;
				this.marskShow=true;
			},
			marskNone:function(){
				if(this.getCheckArea==false&&this.mailWriteArea==false&&this.getPhoneAreaShow==false&&this.phoneNumWriteAreaShow==false){
					this.chooseMethodAreaShow=false;
					this.marskShow=false;
				}
				
			},
			close:function(){//x点击
				this.chooseMethodAreaShow=false;
				this.marskShow=false;
			},
			chooseMethod:function(e){//选择登录方式点击
				// 0--邮箱, 1--手机, 2--Facebook, 3--twitter, 4--Google
				// console.log(e.currentTarget.id)
				// console.log(this.loginMethod)
				// console.log(this.nowActive)
				if(e.currentTarget.id==0){
					// this.loginMethod=4
				}else if(e.currentTarget.id==1){
					// this.loginMethod=1;//手机登录
					this.nowActive=1;//手机登录
					this.chooseMethodAreaShow=false;
					this.getPhoneAreaShow=true;
				}else if(e.currentTarget.id==2){
					// this.loginMethod=2
				}else if(e.currentTarget.id==3){
					// this.loginMethod=3
				}
				// console.log(this.loginMethod)
				// console.log(this.nowActive)
			},
			goRex:function(){//点击邮箱登录
				this.nowActive=4;//邮箱登录
				this.chooseMethodAreaShow=false;
				this.getCheckArea=true;
				console.log(this.nowActive)
			},
			getCheckAreaBack:function(){//获取验证码弹框返回
				this.chooseMethodAreaShow=true;
				this.getCheckArea=false;
			},
			
			goWrite:function(){//邮箱下一步 输入验证码-----
				this.sixty=60;
				var array=base64ToArrayBuffer(encrypt(JSON.stringify({
					Areacode:'',//	string	区号 输入邮件的时候传空值
					NumberId:this.mailNum,//	string	邮箱或者手机号
					Type:this.nowActive,//	int	4- 邮箱 1-手机号
					DeciveId:system(),//	stringstring	设备号
					DeviceType:systemId()//	string	设备类型
				})))
				var res = JSON.parse(decrypt(sendData('POST',this.GLOBAL.urlPoint+'/Account/userRegisterPhone',array)));
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
			reSendMailNum:function(){//邮箱重新发送验证码
				this.goWrite()
				console.log("邮箱重新发送验证码")
			},
			getPhoneAreaBack:function(){//手机号获取验证码返回
				this.chooseMethodAreaShow=true;
				this.getPhoneAreaShow=false;
			},
			goPhoneWrite:function(){//验证手机号按钮点击
				this.sixty=60;
				var array=base64ToArrayBuffer(encrypt(JSON.stringify({
					Areacode:this.beforePhoneNum,//	string	区号 输入邮件的时候传空值
					NumberId:this.phobeNum,//	string	邮箱或者手机号
					Type:this.nowActive,//	int	4- 邮箱 1-手机号
					DeciveId:system(),//	stringstring	设备号
					DeviceType:systemId()//	string	设备类型
				})))
				var res = JSON.parse(decrypt(sendData('POST',this.GLOBAL.urlPoint+'/Account/userRegisterPhone',array)));
				console.log(res)
				if(res.code==100){
					this.getPhoneAreaShow=false;
					this.phoneNumWriteAreaShow=true;
					var that=this;
					var timer = setInterval(function(){
						that.sixty--;
						if(that.sixty==0){
							clearInterval(timer)
							that.sixtyOver=true;
						}else{
							that.sixtyOver=false;
						}
						console.log(that.sixty)
					},1000)
				}else{
					
				}
			},
			phoneNumWriteAreaBack:function(){//手机验证码输入返回
				this.getPhoneAreaShow=true;
				this.phoneNumWriteAreaShow=false;
			},
			changePhoneNum:function(){//修改手机号
				this.getPhoneAreaShow=true;
				this.phoneNumWriteAreaShow=false;
			},
			goChooseBoforeNum:function(){//选择手机号前缀点击
				this.boforeNumChooseAreaShow=true;
				this.getPhoneAreaShow=false;
				
			},
			getPhoneBefore:function(item){//手机号前缀 列表 单个点击
				// console.log(item)
				this.beforePhoneNum=item.num;
				this.boforeNumChooseAreaShow=false;
				this.getPhoneAreaShow=true;
			},
			boforeNumChooseAreaClose:function(){//手机号前缀选择弹框关闭按钮
				this.boforeNumChooseAreaShow=false;
				this.getPhoneAreaShow=true;
			},
			getPhoneNumW:function(event){//获取手机号 进行验证
				this.phobeNum = event.target.value
				if(event.target.value.length>6){
					this.getPhoneBtnStatus=true;
					this.phoneNumStatus=true;
				}else{
					this.getPhoneBtnStatus=false;
					this.phoneNumStatus=false;					
				}
			},
			getPhoneCheckNumW:function(event){//获取手机号验证码 进行验证
				this.phoneSix=event.target.value;
				console.log(this.phoneSix)
				if(event.target.value.length==6){
					this.phoneSixStatus=true;
					
					var array =JSON.stringify({	
						"userName": this.phobeNum,
						"pwd": this.phoneSix,
						"devId": systemId(),
						"devType": system(),
						"productType": 3,
						"isRelogin": false,
						"loginWay": 1,
						"language": 0,
						"ver": "1.00",
						"ip":"127.0.0.1"
					})
					console.log(array)
					var arr = sendD(array);
					uni.connectSocket({
						url: 'ws://192.168.1.101:17400',
						// data() {
						// 	return {
						// 		x: '',
						// 		y: ''
						// 	};
						// },
						// header: {
						// 	'content-type': 'application/json'
						// },
						// method: 'GET',
						// success:function(res){
						// 	// console.log(res)
						// 	
						// }
					});
					uni.onSocketOpen(function (res) {
						
						// console.log(res)
					  console.log('WebSocket连接已打开！');
					  uni.sendSocketMessage({
					    data:arr,
					    success:function(res1){
							console.log(res1)
					    },
					    fail:function(err){
					  	 console.log(err)
					    },
					    complete:function(com){
					  	  // console.log(com)
					    }
					  });
					  uni.onSocketMessage(function (res2) {
					  	console.log(res2.data)
					  			  
					     var fileReader = new FileReader();
					     fileReader.onload = function (progressEvent) {
					     	var arrayBuffer = this.result; // arrayBuffer即为blob对应的arrayBuffer
					     	var HeadRecv = new Uint32Array(arrayBuffer, 0, 3);
					     	var strArray = new Uint8Array(arrayBuffer, 12, HeadRecv[0] - 12 - 1);
					     	var str = new TextDecoder().decode(strArray);//{"code":-1,"error":"用户名或密码错误"}
					     	// console.log(HeadRecv[1],JSON.parse(str))
					     	//to do
							if(HeadRecv[1]==10002){
								uni.navigateTo({
									url: '/pages/home/home'
								});
								uni.setStorage({
									key: 'storage_login_str',
									data: str,
									success: function () {
										console.log('success');
									}
								});
							}else{
								uni.showToast({
									title: '标题',
									duration: 1500
								});
							}
					     	console.log(HeadRecv[1])
					     	console.log(JSON.parse(str))
					     };
					     fileReader.readAsArrayBuffer(res2.data);
					  	
					      
					    });
					  	  
					  });
					
				}else{
					this.phoneSixStatus=false;
				
				}
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
			getMailCheckNumW:function(event){//输入邮箱验证码  进行验证
				console.log(event.target.value)
				this.mailSix = event.target.value
				if(event.target.value.length==6){
					this.mailSixStatus=true;
					console.log("socket content")
					var array =JSON.stringify({
						"userName": this.mailNum,
						"pwd": this.mailSix,
						"devId": systemId(),
						"devType": system(),
						"productType": 3,
						"isRelogin": false,
						"loginWay": 0,
						"language": 0,
						"ver": "1.00",
						"ip":"127.0.0.1"
					})
					console.log(array)
					var arr = sendD(array);
					uni.connectSocket({
						url: 'ws://192.168.1.101:17400',
						// data() {
						// 	return {
						// 		x: '',
						// 		y: ''
						// 	};
						// },
						// header: {
						// 	'content-type': 'application/json'
						// },
						// method: 'GET',
						// success:function(res){
						// 	// console.log(res)
						// 	
						// }
					});
					uni.onSocketOpen(function (res) {
						
						// console.log(res)
					  console.log('WebSocket连接已打开！');
					  uni.sendSocketMessage({
					    data:arr,
					    success:function(res1){
							console.log(res1)
					    },
					    fail:function(err){
					  	 console.log(err)
					    },
					    complete:function(com){
					  	  // console.log(com)
					    }
					  });
					  uni.onSocketMessage(function (res2) {
					  	console.log(res2.data)
					  			  
					     var fileReader = new FileReader();
					     fileReader.onload = function (progressEvent) {
					     	var arrayBuffer = this.result; // arrayBuffer即为blob对应的arrayBuffer
					     	var HeadRecv = new Uint32Array(arrayBuffer, 0, 3);
					     	var strArray = new Uint8Array(arrayBuffer, 12, HeadRecv[0] - 12 - 1);
					     	var str = new TextDecoder().decode(strArray);//{"code":-1,"error":"用户名或密码错误"}
					     	// console.log(HeadRecv[1],JSON.parse(str))
					     	//to do
							if(HeadRecv[1]==10002){
								uni.navigateTo({
									url: '/pages/home/home'
								});
								uni.setStorage({
									key: 'storage_login_str',
									data: str,
									success: function () {
										console.log('success');
									}
								});
							}else{
								uni.showToast({
									title: '标题',
									duration: 1500
								});
							}
					     	console.log(HeadRecv[1])
					     	console.log(JSON.parse(str))
					     };
					     fileReader.readAsArrayBuffer(res2.data);
					  	
					      
					    });
					  	  
					  });
					
					
				}else{
					this.mailSixStatus=false;
				
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
	position: relative;
	.startUpVideo{
		width: 100%;
		height: 100%;
		overflow: hidden;
		.video{
			width: 100%;
			height: 100%;
		}
	}
	//-- mainArea--
	.mainArea{
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 9999;
		top:0;
		left: 0;
		background:rgba(0,0,0,0.3);
		.loginBtn{
			position: absolute;
			top: 46rpx;
			right: 40rpx;
			border-radius: 6rpx;
			color:#fff;
			font-size: 26rpx;
			line-height: 26rpx;
			padding: 10rpx 15rpx;
			border: 2px solid #fff;
		}
		.introduction1{
			position: absolute;
			top: 386rpx;
			padding:0 132rpx;
			width:486rpx;
			color:#fff;
			font-size: 48rpx;
			text-align: center;
			font-family:Franklin Gothic Demi;
			font-weight:400;
		}
		.introduction2{
			position: absolute;
			top: 574rpx;
			padding:0 105rpx;
			width:560rpx;
			color:rgba(255,255,255,0.7);
			text-align: center;
			font-size:22rpx;
			font-family:PingFang TC;
			font-weight:400;
		}
		.introduction3{
			position: absolute;
			top:654rpx;
			width: 100%;
			display: flex;
			justify-content: center;
			.per{
				padding:20rpx 30rpx;
				border-right: 4px solid rgba(255,255,255,0.5);
				text-align: center;
				color: #fff;
				.num{
					font-size: 28rpx;
				}
				.text{
					font-size: 18rpx;
					color:#FFD600;
				}
			}
			.chat{
				border-right:0;
			}
		}
		.login{
			position: absolute;
			width: 510rpx;
			height: 64rpx;
			background:rgba(255,214,0,1);
			border-radius:32rpx;
			font-size:26rpx;
			color:rgba(255,255,255,1);
			text-align: center;
			line-height: 64rpx;
			left: 120rpx;
			bottom: 95rpx;
		}
		.rule{
			position: absolute;
			bottom: 57rpx;
			width:100%;
			font-size: 22rpx;
			color: #FFFFFF;
			text-align: center;
		}
	}
	// --chooseMethodArea--
	.chooseMethodArea{
		position: absolute;
		bottom: 0;
		z-index: 10001;
		width:750rpx;
		height:680rpx;
		background:rgba(255,255,255,1);
		border-radius:12rpx 12rpx 0rpx 0rpx;
		transition: all 0.3s;
		.close{
			position: absolute;
			height: 34rpx;
			width: 34rpx;
			top:41rpx;
			right: 41rpx;
		}
		.introduction{
			padding: 0 180rpx;
			width:390rpx;
			font-size: 26rpx;
			color:rgba(172,172,172,1);
			text-align: center;
			line-height: 40rpx;
			margin-top: 175rpx;
		}
		.login{
			height: 64rpx;
			width: 460rpx;
			background:rgba(255,214,0,1);
			border-radius:32rpx;
			margin-top:60rpx;
			margin-left: 145rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.img{
				height: 36rpx;
				width:36rpx;
			}
			.text{
				font-size: 26rpx;
				color:#fff;
				margin-left:18rpx;
				line-height: 28rpx;
			}
		}
		.line{
			width: 630rpx;
			border-bottom: 2px solid rgba(172,172,172,1);
			margin-left: 60rpx;
			margin-top: 50rpx;
			position: relative;
			.text{
				position:absolute;
				left: 219rpx;
				top:-12rpx;
				padding:0 18rpx;
				font-size: 26rpx;
				line-height: 26rpx;
				background: #FFFFFF;
				color:rgba(172,172,172,1);
			}
		}
		.loginMethod{
			width: 100%;
			height: 92rpx;
			margin-top:50rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.img{
				height:92rpx;
				width:92rpx;
				margin:0 13rpx;
			}
			.active{
				-webkit-filter: grayscale(0.6);
				filter: grayscale(0.6);
			}
		}
		.tuleText{
			height: 22rpx;
			font-size: 22rpx;
			color:rgba(112,112,112,1);
			line-height:22rpx;
			text-align: center;
			margin-top:44rpx;
			.rule{
				text-decoration: underline;
				padding-left: 4rpx;
			}
		}
	}
	// --邮箱获取验证码--
	.getCheckArea{
		position: absolute;
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
		position: absolute;
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
	// --手机号登录--获取验证码---
	.getPhoneArea{
		position: absolute;
		bottom: 0;
		left:0;
		z-index: 10001;
		width:750rpx;
		height:380rpx;
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
		.tips{
			height:22rpx;
			font-size:22rpx;
			font-family:PingFang TC;
			color:rgba(172,172,172,1);
			line-height:22rpx;
			margin-top: 45rpx;
			text-align: center;
		}
		.inputArea{
			height: 70rpx;
			margin-top:39rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.boforeNum{
				height:70rpx;
				background:rgba(246,246,246,1);
				border-radius:10rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				.text1{
					font-size: 30rpx;
					line-height: 30rpx;
					margin-left: 20rpx;
				}
				.text2{
					width:0;
					height:0;
					border-right:10rpx solid transparent;
					border-left:10rpx solid transparent;
					border-top:20rpx solid #000;
					margin:0 20rpx;
				}
			}
			.phone{
				width:392rpx;
				height:66rpx;
				background:rgba(246,246,246,1);
				border: 2rpx solid rgba(246,246,246,1);
				border-radius:10rpx;
				margin-left:6rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				.input{
					font-size: 30rpx;
					width: 350rpx;
				}
			}
			.phoneErr{
				border: 2rpx solid red;
			}
		}
		.btn{
			position: absolute;
			width: 100%;
			height: 70rpx;
			bottom: 0;
			background:rgba(255,214,0,1);
			font-size:30rpx;
			font-family:PingFang TC;
			color:rgba(255,255,255,1);
			line-height:70rpx;
			text-align: center;
		}
		.btnErr{
			background:#C8C8C8;
			color:rgba(89,89,89,1);
		}
	}
	// --手机号登录--输入验证码--
	.phoneNumWriteArea{
		position: absolute;
		bottom: 0;
		left:0;
		z-index: 10001;
		width:750rpx;
		height:380rpx;
		background:rgba(255,255,255,1);
		border-radius:12rpx 12rpx 0rpx 0rpx;
		transition: all 0.3s;
		text-align: center;
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
		.tips{
			height:22rpx;
			font-size:22rpx;
			font-family:PingFang TC;
			font-weight:400;
			color:rgba(172,172,172,1);
			line-height:22rpx;
			margin-top: 46rpx;
			margin-bottom: 39rpx;
			text-align: center;
		}
		.inputArea{
			width:540rpx;
			height:66rpx;
			background:rgba(246,246,246,1);
			border: 2rpx solid rgba(246,246,246,1);
			border-radius:10rpx;
			margin-left:6rpx;
			display: flex;
			justify-content: space-between;
			margin: auto;
			margin-bottom:60rpx;
			align-items: center;
			position: relative;
			.input{
				font-size: 30rpx;
				width: 350rpx;
				margin-left:20rpx;
				text-align: left;
				text-indent: 10rpx;
			}
			.time{
				margin-right:20rpx;
				font-size: 30rpx;
				line-height: 30rpx;
			}
			.text{
				position: absolute;
				left: 0;
				bottom: -40rpx;
				color: red;
				font-size: 24rpx;
				line-height: 24rpx;
			}
		}
		.inputAreaErr{
			border: 2rpx solid red;
		}
		.changeNum{
			font-size:30rpx;
			font-family:PingFang TC;
			font-weight:400;
			color:rgba(112,112,112,1);
			line-height:30rpx;
			text-decoration: underline;
		}	
	}
	// --手机号前缀选择区域--
	.boforeNumChooseArea{
		position: absolute;
		bottom: 0;
		left:0;
		z-index: 10001;
		width:750rpx;
		// height:380rpx;
		height: 100%;
		background:rgba(255,255,255,1);
		// background: red;
		border-radius:12rpx 12rpx 0rpx 0rpx;
		transition: all 0.3s;
		text-align: center;
		.img{
			position:absolute;
			top:41rpx;
			right:41rpx;
			width: 34rpx;
			height: 34rpx;
		}
		.country{
			height:32rpx;
			font-size:32rpx;
			font-family:PingFang TC;
			font-weight:500;
			color:rgba(89,89,89,1);
			line-height:32rpx;
			margin-top: 43rpx;
			margin-bottom: 41rpx;
			text-align: center;
		}
		.inputArea{
			width:700rpx;
			height:70rpx;
			background:rgba(246,246,246,1);
			border-radius:10rpx;
			margin:auto;
			display: flex;
			justify-content: center;
			align-items: center;
			.input{
				font-size: 30rpx;
				text-align:left;
				width: 660rpx;
			}
		}
		.countryArea{
			padding:0 25rpx 20rpx 25rpx;
			width: 700rpx;
			.perCountry{
				display:flex;
				justify-content: space-between;
				align-items: center;
				height: 84rpx;
				border-bottom: 1rpx solid rgba(172,172,172,1);
				font-size: 24rpx;
				color:#000;
			}
		}
	}
	// --遮罩层--
	.marsk{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10000;
		width: 100%;
		height: 100%;
		background:rgba(0,0,0,0.4);
	}
}
</style>
