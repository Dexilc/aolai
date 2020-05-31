<template>
	<view class="banner">
		<image :src="dataList" mode="" class="banner-img"></image>		
	</view>
</template>

<script>
	export default{
		props:{
			dataList:String
		}
	}
</script>

<style>
	.banner{
		width: 100%;
		height: 300rpx;
	}
	.banner-img{
		width: 100%;
		height: 300rpx;
	}
</style>
