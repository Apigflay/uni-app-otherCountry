<template>
	<view>
		<button @click="facebook()">facebook</button>
		<button @click="outfacebook()">outfacebook</button>
		<button @click="aaa()">oook</button>
		<view>
			<text>{{userid}}</text>
		</view>
	</view>
</template>

<script>
	import facebook from "../../lib/js/facebook.js"
	import {encrypt,decrypt,system,systemId,base64ToArrayBuffer,sendData,sendD,work} from "../../lib/js/GlobalFunction.js"
	export default {
		data() {
			return {
				userid: 111111111
			};
		},
		methods:{
			aaa:function(){
				// -----socket----
				//"EAAQZBHuMiEdABAHoqVGIkB6itUFLrlZBuSZCW0BS74nNQ6CoIFHYKRmmviJ48QDzBJUqP8hEed1g29zRAgOdbiMQgItHuOK0kQ4TcjVEzTtpNTcHhHCjJ3GkuesOED3UZBF3PdXAZCLZCsPMDxdYwIOhRdLXqwPgQtbg3kg2yfz4ShJa9Tbz6Wf5LtoZBFYjTpVohyaSsclhgX87uiy05bU"
				//"EAAQZBHuMiEdABAGZAsB2amqcduQYNi16wPuSZAqTA8VTZAJZCw0LXZAhvZAOGGKchKWwpwlp9pmajTtcaHJPSt8XTAeeTWGgoh6k4RnwmsYgl8wRnPvdxmiFzn0imblA2E8iTV4QKWnaRZCzJfYhDmf63G6BLYT3XjebiJGud86J5ajud2lrPLd5m4AHGGM40xNZA4OeKUJkxm53qWeFFduXT"
				var array =JSON.stringify({
					// "userName": response.authResponse.userID,
					// "pwd":response.authResponse.accessToken,
										"userName": "107728597293332",
										"pwd":"EAAQZBHuMiEdABAGZAsB2amqcduQYNi16wPuSZAqTA8VTZAJZCw0LXZAhvZAOGGKchKWwpwlp9pmajTtcaHJPSt8XTAeeTWGgoh6k4RnwmsYgl8wRnPvdxmiFzn0imblA2E8iTV4QKWnaRZCzJfYhDmf63G6BLYT3XjebiJGud86J5ajud2lrPLd5m4AHGGM40xNZA4OeKUJkxm53qWeFFduXT",
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
							uni.switchTab({
								url: '/pages/home1/home1'
							});
						}
				     	console.log(HeadRecv[1])
				     	console.log(JSON.parse(str))
				     };
				     fileReader.readAsArrayBuffer(res2.data);
				  	
				      
				    });
				  	  
				  });
				// -----socket----
			},
			facebook:function(){
				
				console.log("aaa")
				// this.userid = 1231231;
				var that = this
				FB.login(function(response) {
				  // handle the response
					if (response.status === 'connected') {
				      // Logged into your webpage and Facebook.
					  
					  console.log(response);
					  console.log('Successful login for: ' + response.authResponse.userID);
					  that.userid = response.authResponse.userID;
					  // this.userid = 1231231;
				    } else if(response.status === 'not_authorized'){
						console.log('用户没有登录页面')
					} else if(response.status === 'unknown'){
						console.log("用户未登录")
						console.log(response);
					} else {
				      // The person is not logged into your webpage or we are unable to tell. 
					  console.log('未获取到数据')
				    }
				}, {scope: 'public_profile,email'});
			},
			outfacebook:function(){
				FB.logout(function(response) {
				   // Person is now logged out
				   console.log("退出成功")
				});
			}
		},
		onLoad() {//监听页面加载，
			window.fbAsyncInit = function() {
				FB.init({
				  appId      : 1194202287444432,
				  cookie     : true,                     // Enable cookies to allow the server to access the session.
				  xfbml      : true,                     // Parse social plugins on this webpage.
				  version    : 'v4.0'           // Use this Graph API version for this call.
				});
				FB.AppEvents.logPageView();
			},
		
			FB.getLoginStatus(function(response) { // 页面开始检测用户是否已经使用Facebook登录页面
			     console.log("getLoginStatus")
			     console.log(response);
				 if (response.status === 'connected') {   // Logged into your webpage and Facebook.
				   console.log('Welcome!  Fetching your information.... ');
				   // FB.api('/me', function(response) {
				   //   console.log('Successful login for: ' + response.name);
				   // });
				 } else if(response.status === 'not_authorized'){
					 console.log('用户没有登录页面')
				 }else if(response.status === 'unknown') {
					 console.log("用户未登录")
				 }else{                                 // Not logged into your webpage or we are unable to tell.
				   console.log("未获取到数据")
				 }
			});
		}
	}
</script>

<style lang="scss">

</style>

