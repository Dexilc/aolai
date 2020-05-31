<template>
	<view class="login">
		<swiper vertical="true" style="height: 100vh;" :current="index">
			<swiper-item>
				<scroll-view>
					<view class="login-tel">
						<view class="tel-main">
							<view class="close" @tap="goBack">
								<image class="close-img" src="../../static/img/close.png" mode="widthFix"></image>
							</view>
							<view class="logo">
								<image class="logo-img" src="../../static/img/aolai.png" mode="widthFix"></image>
							</view>
							<view class="tel" @tap='goLoginTel'>
								手机号注册
							</view>
							<LoginOther></LoginOther>
							<view class="go-login" @tap='goDown'>
								<view class="">
									已有账号,去登录
								</view>
								<image src="../../static/img/down.png" mode="widthFix"></image>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view>
					<view class="login-tel">
						<view class="tel-main">
							<view class="close close-center">
								<view class="" @tap="goBack">
									<image class="close-img" src="../../static/img/close.png" mode="widthFix"></image>
								</view>
								<view class="go-login" @tap='goUp'>
									<image src="../../static/img/up.png" mode="widthFix"></image>
									<view>没有账号,去注册</view>
								</view>
								<view>
									
								</view>
							</view>
							<view class="login-form">
								<view class="login-info">
									<text>账号</text>
									<input type="text" value="" v-model="userName" placeholder="手机号/昵称" />
								</view>
								<view class="login-info">
									<text>密码</text>
									<input type="password" value="" v-model="userPwd" placeholder="6-16位字符" />
								</view>
							</view>
							<view class="login-quick">
								<view>忘记密码?</view>
								<view>免密登录</view>
							</view>
							<view class="tel" @tap='submit'>登录</view>
							<view class="tips">
								温馨提示:您可以选择免密登录,更加方便
							</view>
							<LoginOther></LoginOther>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		
		
	</view>
</template>

<script>
	import LoginOther from '@/components/login/index.vue'
	export default {
		data() {
			return {
				index:0,
				userName:'',
				userPwd:'',
				rules:{
					userName:{
						rule:/\S/,
						msg:'账号不能为空'
					},
					userPwd:{
						rule:/[0-9a-zA-Z]{6,16}/,
						msg:'密码应该为6-16位字符'
					}
				},
			
			}
		},
		components:{
			LoginOther
		},
		methods: {
			goDown(){
				this.index=1
			},
			goUp(){
				this.index=0
			},
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			goLoginTel(){
				uni.navigateTo({
					url:'../login-tel/login-tel'
				})
			},
			submit(){
				if(!this.validate('userName')) return
				if(!this.validate('userPwd')) return
				uni.showLoading({
					title:"登录中...."
				})
				setTimeout(()=>{
					uni.hideLoading()
					uni.navigateBack({
						delta:1
					})
				},2000)
			},				
			validate(key){
				let bool=true
				if(!this.rules[key].rule.test(this[key])){
					uni.showToast({
						title:this.rules[key].msg,
						icon:'none'
					})
					bool=false
					return false
				}
				return bool;
			}
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
.close{
	padding-top: 120rpx;
}
.close-img{
	width: 60rpx;height: 60rpx;
}
.logo{
	padding-bottom: 100rpx;display: flex;justify-content: center;
}
.logo-img{
	height: 210rpx;width: 210rpx;
}
.tel{
	width: 100%;text-align: center;background-color: #49BDFB;color: #fff;align-self: center;border-radius: 45rpx;
	padding: 20rpx 0;
}

.go-login{
	display: flex;flex-direction: column;
	justify-content: center;align-items: center;
}
.go-login image{
	width: 60rpx;height: 60rpx;
}
/* 二屏 */
.close-center{
	display: flex;
}
.close-center>view{
	flex:1;
}
.login-form{
	padding-top: 100rpx;
}
.login-info{
	font-size: 32rpx;padding: 10rpx 0;display: flex;align-items: center;border-bottom: 2rpx solid #f7f7f7;
}
.login-info > input{
	flex:1;margin-left: 20rpx;
}
.login-quick{
	display: flex;justify-content: space-between;align-items: center;padding: 20rpx 0;
}
.tips{
	text-align: center;margin-top: 20rpx;color: #ccc;
}
</style>
