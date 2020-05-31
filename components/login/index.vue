<template>
	<view class="login-other">
		<view class="other-txt">
			<view class="">
				或用以下方式登录
			</view>
		</view>
		<view class="other">
			<view class="oitem">
				<image class="oimg" src="../../static/img/wechat.png" mode="widthFix"></image>
				微信登录
			</view>
			<view class="oitem">
				<image class="oimg" src="../../static/img/weibo.png" mode="widthFix"></image>
				微博登录
			</view>
			<view class="oitem">
				<image class="oimg" src="../../static/img/QQ.png" mode="widthFix"></image>
				QQ登录
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	/* 其它登录方式 */
	.login-other{
		padding: 90rpx 0;
	}
	.other-txt{
		display: flex;padding: 50rpx 0;
	}
	.other-txt::after{
		content: '';
		flex: 1;
		height: 2rpx;
		background-color: #ccc;
		align-self: center;
	}
	.other-txt::before{
		content: '';
		flex: 1;
		height: 2rpx;
		background-color: #ccc;
		align-self: center;
	}
	.other{
		display: flex;justify-content: space-around;
	}
	.oitem{
		display: flex;flex-direction: column;justify-content: center;align-items: center;
	}
	.oimg{
		width: 80rpx;height: 80rpx;
	}
</style>
