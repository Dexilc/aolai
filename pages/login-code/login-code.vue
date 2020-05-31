<template>
	<view>
		<Lines></Lines>
		<view class="login-tel">
			<view class="tel-main">
				<view class="login-form">
					<view class="login-info">
						<text class="user-txt">验证码</text>
						<input type="number" maxlength="6" value="" v-model="userCode" placeholder="请输入验证码" />
						<button type="default" plain="true" size="mini" :disabled="disabled" @tap='sendCode'>{{codeMsg}}</button>
					</view>
				</view>
				<view class="tel" @tap='goNextIndex'>
					下一步
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Lines from '@/components/Line/index.vue'
	export default {
		data() {
			return {
				codeNum:10,
				codeMsg:'',
				disabled:false,
				userCode:''
			}
		},
		components:{
			Lines
		},
		methods: {
			sendCode(){
				this.disabled=true
				let timer=setInterval(()=>{
					--this.codeNum
					this.codeMsg=`重新发送(${this.codeNum})`
				},1000)
				setTimeout(()=>{
					clearInterval(timer)
					this.codeNum=10
					this.disabled=false
					this.codeMsg='重新发送'
				},10000)
			},
			goNextIndex(){
				
				uni.switchTab({
					url:'../index/index'
				})
				
			}
		},
		onReady() {
			this.codeMsg=`重新发送(${this.codeNum})`
			this.sendCode()
		}
	}
</script>

<style scoped>
.login-tel{
	width: 100vw;height: 100vh;
}
.tel-main{
	padding: 0 20rpx;display: flex;flex-direction: column;
}
.login-form{
	padding: 100rpx 0;
}
.login-info{
	font-size: 32rpx;padding: 10rpx 0;display: flex;align-items: center;border-bottom: 2rpx solid #f7f7f7;
}
.login-info > input{
	flex:1;margin-left: 20rpx;
}
.tel{
	width: 100%;text-align: center;background-color: #49BDFB;color: #fff;align-self: center;border-radius: 45rpx;
	padding: 20rpx 0;
}
</style>
