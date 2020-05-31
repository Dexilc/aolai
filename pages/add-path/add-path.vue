<template>
	<view class="addr">
		<Lines></Lines>
		<view class="path-ctn">
			<view class="path-item">
				<view class="title">
					收件人
				</view>				
				<input class="input-ctn" type="text" value="" v-model="pathObj.name" placeholder="收件人姓名,2到15位字符" />				
			</view>
			<view class="path-item">
				<view class="title">
					手机号
				</view>				
				<input class="input-ctn" type="number" maxlength="11" value="" v-model="pathObj.tel" placeholder="11位手机号" />				
			</view>
			<view class="path-item">
				<view class="title">
					所在地区
				</view>				
				<view class="" @tap="showCityPicker">
					{{pathObj.city}}<uniIcons type="arrowright" color='#636263' size='15'></uniIcons></view>
				<cityPicker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm"></cityPicker>
			</view>
			<view class="path-item">
				<view class="title">
					详细地址
				</view>				
				<input class="input-ctn" type="text" value="" v-model="pathObj.details" placeholder="5到60位字符" />
			</view>
			<view class="path-item">
				<view class="title">
					设为默认地址
				</view>
			<radio-group name="" @change="radioChange">
				<label class="radio">
					<radio value="" color="#FF3333" :checked="pathObj.isDefault"/><text></text>
				</label>
			</radio-group>
							
			</view>
		</view>
	</view>
</template>

<script>
	import Lines from '@/components/Line/index.vue'
	import uniIcons from '@/components/uni/uni-icons/uni-icons.vue'
	import cityPicker from '@/components/uni/mpvue-citypicker/mpvueCityPicker.vue'
	import {mapActions} from 'vuex'
	export default {
		data() {
			return {
				pickerValueDefault: [0, 0, 1],
				pathObj:{
					name:'',
					tel:'',
					city:'请选择',
					details:'',
					isDefault:false
				},
				i:-1,
				// 是否修改的状态
				isMod:false
			}
		},
		components:{
			Lines,uniIcons,cityPicker
		},
		onNavigationBarButtonTap() {
			if(this.isMod){
				//修改
				this.updatePathFn({
					index:this.i,
					item:this.pathObj
				})
				uni.navigateBack({
					delta:1
				})
				
			}else{
				//新增
				this.createPathFn(this.pathObj),
				uni.navigateBack({
					delta:1
				})
			}
			
		},
		onLoad(e) {
			if(e.data){
				uni.setNavigationBarTitle({
					title:"修改地址"
				})
				let result=JSON.parse(e.data)
				this.pathObj=result.item
				this.i=result.index
				this.isMod=true
				
			}
		},
		methods: {
			...mapActions(['createPathFn','updatePathFn']),
			showCityPicker() {
			      this.$refs.mpvueCityPicker.show();
			    },
				onConfirm(e) {
				      this.pathObj.city=e.label;
				},
				radioChange(){
					this.pathObj.isDefault=!this.pathObj.isDefault
				}
		}
	}
</script>

<style scoped>
.path-ctn{
	padding-left: 27rpx;
}
.path-item{
	display: flex;align-items: center;border-bottom: 2rpx solid #ccc;padding: 20rpx;justify-content: space-between;
}
.title{
	margin-right: 20rpx;
}
.input-ctn{
	flex: 1;text-align: left;
}
</style>
