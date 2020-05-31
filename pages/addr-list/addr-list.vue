<template>
	<view class="addr">
		<view class="addr-list">
			<view v-for="(item,index) in list" :key="index"
				@tap="toAddPath(index)">
				<view class="addr-item" @tap='goConfirmOrder(item)'>
					<view class="m-item">
						<view class="name">
							{{item.name}}
						</view>
						<view class="phoneNum">
							{{item.tel}}
						</view>
					</view>
					<view class="m-item">
						<view class="active" v-if="item.isDefault">
							默认
						</view>
						<view class="de-addr">
							{{item.city}}{{item.details}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="add-addr">
			<view class="addr-btn" @tap='goAddPath'>
				新增地址
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				isSelected:false
			}
		},
		onLoad(e) {
			if(e.type==='selectedPath'){
				this.isSelected=true
				uni.setNavigationBarTitle({
					title:'选择地址'
				})
			}
		},
		computed:{
			...mapState({
				list:state=>state.path.list
			})
		},
		methods: {
			toAddPath(index){
				let pathObj=JSON.stringify({
					index:index,
					item:this.list[index]
				})
				uni.navigateTo({
					url:'../add-path/add-path?data='+pathObj+''
				})
			},
			goAddPath(){
				uni.navigateTo({
					url:'../add-path/add-path'
				})
			},
			goConfirmOrder(item){
				if(this.isSelected){
					uni.$emit('selectPathItem',item)
					
					uni.navigateBack({
						delta:1
					})
				}
				
			}
		}
	}
</script>

<style>
.add-addr{
	width: 100%;display: flex;justify-content: center;
}
.addr-btn{
	border: 2rpx solid #49BDFB;color: #49BDFB;border-radius: 30rpx;padding: 6rpx 30rpx;margin-top: 21rpx;
}
.addr-list{
	padding-left: 20rpx;
}
.addr-item{
	padding: 10rpx;border-bottom: 2rpx solid #CCCCCC;
}
.m-item{
	display: flex;align-items: center;
}
.name{
	margin-right: 12rpx;
}
.active{
	padding: 0 12rpx;background-color: #49BDFB;color: #FFFFFF;border-radius: 45rpx;margin-right: 12rpx;font-size: 21rpx
}
</style>
