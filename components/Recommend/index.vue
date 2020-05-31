<template>
	<view class="recommend bg-color">
		<view class="recommend-item" v-for="(item,index) in dataList" :key='index'>
			<image :src="item.bigUrl" mode="" class="item-big"></image>
			<view class="item-small">
				<block v-for="(k,i) in item.data" :key='i'>
					<image :src="k.imgUrl" mode="" class="item-img"></image>
				</block>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			dataList:Array
		}
	}
</script>

<style>
	.recommend{
		padding: 20rpx;
	}
	.recommend-item{
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border: 1rpx solid #ccc;
		overflow: hidden;
		margin: 20rpx 0;
	}
	.item-big{
		width: 100%;
		height: 300rpx;
	}
	.item-small{
		width: 100%;height: 240rpx;
	}
	.item-img{
		width: 33.333%;
		height: 240rpx;
	}
</style>
