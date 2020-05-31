<template>
	<view class="goods">
		<image class="goods-img" :src="item.imgUrl" mode="widthFix"></image>
		<view class="goods-desc">
			<view class="goods-name">
				{{item.name}}
			</view>
			<view class="goods-attri">
				颜色分类:{{item.color}}
				尺寸:{{item.size}}
			</view>
			<view class="f-active-color">
				7天无理由
			</view>
		</view>
		<view>
			<view>${{item.pprice}}</view>
			<view>*{{item.num}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style scoped>
	.goods{
		display: flex;justify-content: space-between;align-items: center;padding:10rpx;
	}
	.goods-desc{
		flex:1;padding: 0 10rpx;font-size: 26rpx;
	}
	.goods-img{
		width: 160rpx;height: 160rpx;
	}
	.goods-name{
		overflow: hidden;
		-ms-text-overflow: ellipsis;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
		color: #333;
		word-break: break-all;
	}
	.goods-attri{
		font-size: 24rpx;color: #C0C0C0;
	}
</style>
