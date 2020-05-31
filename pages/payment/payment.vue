<template>
	<view>
		<uniNavBar
		title="确认支付"
		left-text="关闭"
		status-bar='true'
		fixed="true"
		@clickLeft='goBack'
		>		
		</uniNavBar>
		<view class="pay-main">
			<label for="pay-a">
				<view class="pay-item">
					<image class="pay-img" src="../../static/img/alipay.png" mode="widthFix"></image>
					<view class="pay-txt">
						<view>支付宝支付</view>
						<view class="pay-s">推荐支付宝用户使用</view>
					</view>
					<label class="radio">
						<radio value="" color="#f33" id="pay-a"/><text></text>
					</label>
				</view>
			</label>
			<label for="pay-w">
				<view class="pay-item">
					<image class="pay-img" src="../../static/img/wxpay.png" mode="widthFix"></image>
					<view class="pay-txt">
						<view>微信支付</view>
						<view class="pay-s">推荐微信用户使用</view>
					</view>
					<label class="radio">
						<radio value="" color="#f33" id="pay-w"/><text></text>
					</label>
				</view>
			</label>			
		</view>
		<view class="pay-foot">
			<view class="total">
				<text class="f-color">合计</text><text class="total-price">$2323.00</text>
			</view>
			<view class="go-pay" @tap='goPayment'>
				去支付
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			uniNavBar
		},
		methods: {
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			goPayment(){
				uni.navigateTo({
					url:'../pay-success/pay-success'
				})
			}
		}
	}
</script>

<style scoped>
	.pay-main{
		padding: 10rpx 20rpx;
	}
.pay-item{
	display: flex;justify-content: space-between;align-items: center;padding: 15rpx;border-bottom: 1rpx solid #CCCCCC;
}
.pay-txt{
	flex: 1;margin-left: 30rpx;
}
.pay-img{
	width: 100rpx;height: 100rpx;
}
.pay-s{
	font-size: 24rpx;color: #C0C0C0;
}
.pay-foot{
	display: flex;justify-content: space-between;position: fixed;left: 0;bottom: 0;height: 100rpx;width: 100%;
}
.total{
	line-height: 100rpx;width: 70%;background-color: #333333;padding-left: 30rpx;
}
.total-price{
	color: #fff;margin-left: 20rpx;
}
.go-pay{
	line-height: 100rpx;text-align: center;width: 30%;background-color: #42B7FB;color: #fff;
}
</style>
