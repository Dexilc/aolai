<template>
	<view class="config">
		<Lines></Lines>
		<view class="config-content">
			<view class="cfg-title">
				帐号设置
			</view>
			<view class="cfg-content">
				<view class="cfg-left">
					<image class="cfg-img" src="../../static/img/header.jpg" mode="widthFix"></image>
					<view class="cfg-name">
						dickWang
					</view>
				</view>
				<view class="cfg-right f-color">
					编辑个人资料<uniIcons type='arrowright' size="15"></uniIcons>
				</view>
			</view>
			<view class="cfg-item" @tap='goAddrList'>
				<view class="item-left">
					地址管理
				</view>
				<view class="item-right">
					<uniIcons type='arrowright' size="21" color='#636263'></uniIcons>
				</view>
			</view>
			<view class="cfg-item">
				<view class="item-left">
					修改密码
				</view>
				<view class="item-right">
					<uniIcons type='arrowright' size="21" color='#636263'></uniIcons>
				</view>
			</view>
			<view class="cfg-item">
				<view class="item-left">
					绑定手机号码
				</view>
				<view class="item-right">
					<uniIcons type='arrowright' size="21" color='#636263'></uniIcons>
				</view>
			</view>
			<view class="cfg-item">
				<view class="item-left">
					绑定第三方帐号
				</view>
				<view class="item-right">
					<uniIcons type='arrowright' size="21" color='#636263'></uniIcons>
				</view>
			</view>
		</view>
		<view class="exit">
			退出
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni/uni-icons/uni-icons.vue'
	import Lines from '@/components/Line/index.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{uniIcons,Lines},
		methods: {
			goAddrList(){
				uni.navigateTo({
					url:'../addr-list/addr-list'
				})
			}
		}
	}
</script>

<style scoped>
.config-content{
	margin-left: 20rpx;
}
.cfg-title{
	font-size: 24rpx;
	border-bottom: 1rpx solid #7f7f7f;padding: 20rpx 0 10rpx 0;
}
.cfg-content{
	display: flex;justify-content:space-between;align-items:center;padding: 15rpx 15rpx 15rpx 10rpx;border-bottom: 1rpx solid #C0C0C0;
}
.cfg-left{
	display: flex;align-items: center;
}
.cfg-name{
	margin-left: 20rpx;
}
.cfg-img{
	width: 72rpx;height: 72rpx;border-radius: 50%;border: 1rpx solid #C0C0C0;
}
.cfg-item{
	display: flex;justify-content: space-between;align-items: center;border-bottom: 1rpx solid #C0C0C0;
	padding: 6rpx 10rpx;
}
.exit{
	background-color: #49BDFB;width: 100%;line-height: 80rpx;color: #fff;text-align: center;margin-top: 30rpx;
}
</style>
