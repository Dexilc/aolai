<template>
	<view class="my">
		<view class="my-header">
			<view class="header-main">
				<view class="header-config" @tap='goConfig'>
					<image class="config-img" src="../../static/img/config.png" mode="widthFix"></image>
				</view>
				<view class="header-logo" @tap='goLogin'>
					<image class="logo-img" src="../../static/img/header.jpg" mode="widthFix"></image>
					<view>dav3ch3n</view>
				</view>
				<view class="message">
					<image class="message-img" src="../../static/img/message.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="order">
			<view class="order-title" @tap="goOrder">
				<view>我的订单</view>
				<view class="f-color">全部订单<uniIcons type="arrowright" size='15' color="#636263"></uniIcons></view>
			</view>
			<view class="order-list">
				<view class="order-item">
					<image class="order-img" src="../../static/img/order1.png" mode=""></image>
					<view class="">
						待付款
					</view>
				</view>
				<view class="order-item">
					<image class="order-img" src="../../static/img/order2.png" mode=""></image>
					<view class="">
						待发货
					</view>
				</view>
				<view class="order-item">
					<image class="order-img" src="../../static/img/order3.png" mode=""></image>
					<view class="">
						待收货
					</view>
				</view>
				<view class="order-item">
					<image class="order-img" src="../../static/img/order4.png" mode=""></image>
					<view class="">
						待评价
					</view>
				</view>
				<view class="order-item">
					<image class="order-img" src="../../static/img/order5.png" mode=""></image>
					<view class="">
						退款管理
					</view>
				</view>
			</view>
		</view>
		<view class="my-content">
			<view class="content-list">
				<view class="content-item">					
					<image class="ctn-img" src="../../static/img/order1.png" mode=""></image>					
					<view class="ctn-title">
						<view class="ctn-left">
							我的收藏
						</view>
						<view class="ctn-right f-color">
							0<uniIcons type="arrowright" size='15' color="#636263"></uniIcons>
						</view>
					</view>
				</view>
				<view class="content-item">
					<image class="ctn-img" src="../../static/img/order1.png" mode=""></image>					
					<view class="ctn-title">
						<view class="ctn-left">
							我的优惠券
						</view>
						<view class="ctn-right f-color">
							0<uniIcons type="arrowright" size='15' color="#636263"></uniIcons>
						</view>
					</view>
				</view>
				<view class="content-item">
					<image class="ctn-img" src="../../static/img/order1.png" mode=""></image>					
					<view class="ctn-title" style="border: none;">
						<view class="ctn-left">
							我的积分
						</view>
						<view class="ctn-right f-color">
							0<uniIcons type="arrowright" size='15' color="#636263"></uniIcons>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni/uni-icons/uni-icons.vue"
	
	export default {
		data() {
			return {
				
			}
		},
		components: {uniIcons},
		methods: {
			goConfig(){
				uni.navigateTo({
					url:'../conifg/conifg'
				})
			},
			goOrder(){
				uni.navigateTo({
					url:'../my-order/my-order'
				})
			},
			goLogin(){
				uni.navigateTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style scoped>
	.my{
		background-color: #f1f1f1;
		height: 100%;
	}
.my-header{
	background:url(../../static/img/mybg.png) no-repeat;
	width: 100%;
	height: 400rpx;
}
.header-main{
	position: relative;
}
.config-img{
	width: 54rpx;height: 54rpx;position: absolute;left: 45rpx; top: 60rpx;
}

.header-logo{
	position: absolute;width: 150rpx;margin-left: -75rpx;top: 100rpx;text-align: center;color: #fff;
	left: 50%;font-weight: bold;
}
.logo-img{
	width: 100%;height: 100%;border-radius: 50%;border: 2rpx solid #fff;
}

.message-img{
	width: 54rpx;height: 54rpx;position: absolute;right: 45rpx; top: 60rpx;
}
.order{
	background-color: #fff;margin-bottom: 20rpx;
}
.order-title{
	display: flex;justify-content: space-between;padding: 20rpx;align-items: center;
}
.order-list{
	display: flex;padding: 20rpx;
}
.order-item{
	display: flex;flex-direction: column;justify-content: center;flex: 1;text-align: center;
}
.order-img{
	width: 63rpx;height: 63rpx;align-self: center;
}
.my-content{
	background-color: #fff;margin-bottom: 20rpx;
}
.content-list{
	padding: 0 0 0 30rpx;
}
.content-item{
	display: flex;justify-content: center;align-items: center;
}
.ctn-img{
	width: 45rpx;height: 45rpx;	
	margin-right: 30rpx;
}
.ctn-title{
	flex: 1;display: flex;flex-direction: row;
	justify-content: space-between;align-items: center;border-bottom: 1rpx solid #ccc;padding: 20rpx 20rpx 20rpx 0;
}

</style>
