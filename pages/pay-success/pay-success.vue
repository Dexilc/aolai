<template>
	<view class="pay-success">
		<view class="icon">
			<uniIcons type='checkmarkempty' size='100' color="#00c700"></uniIcons>
		</view>
		<view class="pay-txt">
			支付成功!
		</view>
		<view class="back" @tap='goIndex'>
			返回首页
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni/uni-icons/uni-icons.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			uniIcons
		},
		methods: {
			goIndex(){
				uni.switchTab({
					url:'../index/index'
				})
			}
		}
	}
</script>

<style scoped>
.pay-success{
	width: 100vw;height: 100vh;display: flex;flex-direction: column;justify-content: flex-start;align-items: center;
}
.pay-txt{
	font-size: 30rpx;
}
.back{
	border: 2rpx solid #49BDFB;margin-top: 20rpx; color:#49BDFB;padding: 10rpx 45rpx;border-radius: 40rpx;
}
</style>
