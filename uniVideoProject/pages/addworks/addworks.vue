<template>
	<view class="content">
		<view class="nav">
			<image class="back" src="../../static/imgs/more1w.png" mode=""></image>
			<text class="title">上传作品</text>
		</view>
		<view class="mainArea">
			<view class="name">
				<text class="text">名称</text>
				<input class="input" type="text" placeholder="可以复制黏贴" />
			</view>
			<view class="selectArea">
				<text class="text">价格</text>
				<select class="select">
				  <option value ="volvo">免费</option>
				  <option value ="saab">Saab</option>
				  <option value="opel">Opel</option>
				  <option value="audi">Audi</option>
				</select>
			</view>
			<view class="uploadArea">
				<text class="text">上传</text>
				<input class="input" type="text" placeholder="可以复制黏贴" />
			</view>
			<view class="chooseImgArea">
				<text class="text">图片</text>
				<view class="choose">
					<view class="btnUp">
						选择上传
					</view>
					<view class="imgBox">
						
					</view>
				</view>
			</view>
			<view class="timeArea">
				<text class="text">时效</text>
				<select class="select">
				  <option value ="volvo">50小时</option>
				  <option value ="saab">Saab</option>
				  <option value="opel">Opel</option>
				  <option value="audi">Audi</option>
				</select>
			</view>
			<view class="tipArea">
				<text class="text">标签</text>
				<textarea class="input" value="" placeholder="#性感" />
			</view>
			<view class="btn">
				提交
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
	background:rgba(25,25,25,1);
}
.content{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.nav{
		height: 100rpx;
		background:rgba(37,37,37,1);
		line-height: 100rpx;
		text-align: center;
		.back{
			position: absolute;
			top: 22rpx;
			left: 20rpx;
			height: 36rpx;
			width: 36rpx;
			padding: 10rpx;
		}
		.title{
			font-size:30rpx;
			color:rgba(255,255,255,1);
		}
	}
	.mainArea{
		flex: 1;
		background:rgba(25,25,25,1);
		overflow-y:scroll;
		// ----公共----
		.name,.selectArea,.uploadArea,.timeArea,.tipArea,.chooseImgArea{
			width: 690rpx;
			height: 54rpx;
			padding-top:28rpx;
			margin-left: 30rpx;
			display: flex;
			// align-items: center;
			.text{
				font-size:30rpx;
				color:rgba(172,172,172,1);
				margin-right:28rpx;
			}
		}
		// ----名称----
		.name{
			.input{
				font-size:26rpx;
				width:520rpx;
				height:54rpx;
				color:rgba(255,255,255,1);
				background:rgba(52,52,52,1);
				border-radius:8rpx;
				text-indent: 30rpx;
			}
		}
		// ----价格
		.selectArea{
			.select{
				width:248rpx;
				height:54rpx;
				background:rgba(52,52,52,1);
				border-radius:8rpx;
				border:none;
				text-indent: 30rpx;
				font-size:26rpx;
				color:rgba(255,255,255,1);
			}
		}
		// ---上传
		.uploadArea{
			.input{
				width:520rpx;
				height:54rpx;
				background:rgba(52,52,52,1);
				border-radius:8rpx;
				text-indent: 30rpx;
				font-size:26rpx;
			}
		}
		// ----选择图片---
		.chooseImgArea{
			height:592rpx;
			.choose{
				width:520rpx;
				height:592rpx;
				.btnUp{
					width:516rpx;
					height:50rpx;
					border:2rpx solid rgba(255,214,0,1);
					border-radius:8rpx;
					font-size:26rpx;
					color:rgba(255,214,0,1);
					text-align: center;
					line-height: 50rpx;
				}
				.imgBox{
					width:520rpx;
					height:520rpx;
					background:rgba(52,52,52,1);
					border-radius:8rpx;
					margin-top: 28rpx;
				}
			}
		}
		// ---时效---
		.timeArea{
			.select{
				width:248rpx;
				height:54rpx;
				background:rgba(52,52,52,1);
				border-radius:8rpx;
				border:none;
				text-indent: 30rpx;
				font-size:26rpx;
				color:rgba(255,255,255,1);
			}
		}
		// ----标签----
		.tipArea{
			height: 180rpx;
			align-items: flex-start;
			.input{
				width:520rpx;
				height:180rpx;
				background:rgba(52,52,52,1);
				border-radius:8rpx;
				border:none;
				text-indent: 30rpx;
				font-size:26rpx;
				color:rgba(255,255,255,1);
			}
		}
		// -----提交
		.btn{
			width:520rpx;
			height:72rpx;
			background:rgba(255,214,0,1);
			border-radius:8rpx;
			margin-top: 60rpx;
			margin-left:115rpx;
			font-size:30rpx;
			color:rgba(0,0,0,1);
			text-align: center;
			font-weight:600;
			line-height: 72rpx;
		}
	}
}
</style>
