<template>
	<view>
		<Lines></Lines>
		<view class="login-tel">
			<view class="tel-main">
				<view class="login-form">
					<view class="login-info">
						<text class="user-txt">手机号</text>
						<input type="number" focus="true" maxlength="11" v-model="userTel" value="" placeholder="请输入11位手机号" />
					</view>
				</view>
				<view class="tel" @tap='goNextCode'>
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
				userTel:'',
				rules:{
					userTel:{
						rule:/^1[3456789]\d{9}$/,
						msg:'请输入11位手机号'
					}
				}
			}
		},
		components:{
			Lines
		},
		methods: {
			goNextCode(){
				if(!this.validate('userTel')) return;
				uni.navigateTo({
					url:'../login-code/login-code'
				})
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
