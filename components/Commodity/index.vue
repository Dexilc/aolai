<template>
	<view class="commodity" :style="`flex-wrap:${wrap};`">
		<!-- 单个商品组件 -->
		<view class="commodity-item"
		:style="`width:${itemW};`"
		v-for="(item,index) in dataList"
		@tap="goDetails(item.id)"
		:key="index">
			<image class="commodity-img" :src="item.imgUrl" mode="" :style="`height:${bigH};`"></image>
			<view class="commodity-content">
				<text class="commodity-name" :style="`font-size: ${nameSize};`">{{item.name}}</text>
				<view>
					<text class="nPrice">￥{{item.nprice}}</text>
					<text class="oPrice">￥{{item.oprice}}</text>
				</view>
				<text class="discount">{{item.discount}}折</text>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			dataList:Array,
			itemW:{
				type:String,
				default:"375rpx"
			},
			bigH:{
				type:String,
				default:"375rpx"
			},
			wrap:{
				type:String,
				default:'wrap'
			},
			nameSize:{
				type:String,
				default:'20rpx'
			}
			
		},
		data(){
			return{
				
			}
		},
		methods:{
			goDetails(id){
				uni.navigateTo({
					url:`../../pages/details/details?id=${id}`
				})
			}
		}
	}
</script>

<style scoped>
	.commodity{
		display: flex;
	}
	.commodity-item{
		width: 375rpx;padding-bottom: 20rpx;
	}
	.commodity-img{
		width: 100%;
	}
	.commodity-content{
		text-align: center;
	}
	.commodity-name{
		overflow: hidden;
		-ms-text-overflow: ellipsis;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
		color: #333;
		word-break: break-all;
		padding: 6rpx 20rpx;
		
	}
	.oPrice{
		text-decoration: line-through;
		font-size: 24rpx;color: #999;
	}
	.discount{
		border-radius: 4rpx;border: 1px solid #f33;padding: 2rpx 10rpx; font-size: 20rpx;color: #f33;
	}
</style>
