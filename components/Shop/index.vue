<template>
	<view class="shop">
		<view class="shop-item" v-for="(item,index) in dataList" :key="index">
			<view class="shop-big">
				<image :src="item.bigUrl" mode="" class="shop-big"></image>
			</view>			
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<Commodity :dataList="item.data"
					wrap='no-wrap'
					itemW="200rpx"
					bigH='200rpx'
					nameSize='20rpx'
					></Commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Commodity from '../Commodity'
	export default{
		data(){
			return{
				
			}
		},
		props:{
			dataList:Array
		},
		components:{
			Commodity
		}
	}
</script>

<style scoped>
	.shop-big{
		width: 100%;
		height: 350rpx;
	}
	.scroll-content{
		width: 100%;white-space: nowrap;
	}
	.scroll-item{
		display: inline-block;
	}
</style>
