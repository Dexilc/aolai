<template>
	<view class="shop-car">
		<template v-if="list.length>0">
			<uniNavBar
			title="购物车"
			fixed='true'
			status-bar='false'		
			:right-text='isNavBar ? "完成" : "编辑"'
			@clickRight="isNavBar= !isNavBar">		
			</uniNavBar>
			<!-- 商品列表 -->
			<view class="shop-list">			
				<view class="shop-item" v-for="(item,index) in list" :key="index">
					<label class="radio" @tap='selectedItem(index)'>
						<radio value="" color="#ff3333" :checked="item.checked"/><text></text>
					</label>
					<image :src="item.imgUrl" mode="widthFix" class="shop-img"></image>
					<view class="shop-text">
						<view class="shop-name">
							{{item.name}}
						</view>
						<view class="shop-color f-color">
							颜色:{{item.color}}
						</view>
						<view class="shop-price">
							<view>${{item.nprice}}</view>
							<template v-if='!isNavBar'>
								<view class="">×{{item.num}}</view>
							</template>
							<template v-else>
								<UniNumberBox 
								:value="item.num"
								:min="1"
								@change='changeNumber($event,index)'
								></UniNumberBox>
							</template>
						</view>
					</view>				
				</view>
			</view>
			<view class="shop-foot">
				<label class="radio foot-radio" @tap='checkedAllFn'>
					<radio value="" color="#FF3333" :checked="checkedAll"/><text>全选</text>
				</label>
				<template v-if="!isNavBar">
					<view class="foot-total">
						<view class="foot-count">
							合计:<text class="f-active-color">${{totalCount.nprice}}</text>
						</view>
						<view class="foot-num" @tap='goConfirmOrder'>
							结算({{totalCount.num}})
						</view>
					</view>
				</template>
				<template v-else>
					<view class="foot-total">
						<view class="foot-num" style="background-color: #000;">
							移入收藏夹
						</view>
						<view class="foot-num" @tap='delGoodsFn'>
							删除
						</view>
					</view>
				</template>
			</view>
		</template>
		<template v-else>
			<uniNavBar
			title="购物车"
			status-bar='false'
			fixed="true"
			>		
			</uniNavBar>
			<view class="shop-else-list" :style="`height:${clientHeight}px`">
				<text>购物车还是空的,快去选购商品吧</text>
			</view>
		</template>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni/uni-nav-bar/uni-nav-bar.vue'
	import UniNumberBox from '@/components/uni/uni-number-box/uni-number-box.vue'
	import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				isNavBar:false,
				clientHeight:0
			}
		},
		computed:{
			...mapState({
				list:state=>state.cart.list
			}),
			...mapGetters(['checkedAll','totalCount'])
		},
		components:{
			uniNavBar,UniNumberBox
		},
		methods: {
			...mapActions(['checkedAllFn','delGoodsFn']),
			...mapMutations(['selectedItem']),
			changeNumber(value,index){
				this.list[index].num=value
			},
			goConfirmOrder(){
				uni.navigateTo({
					url:'../confirm-order/confirm-order'
				})
			}
		},onReady(){		
			uni.getSystemInfo({
				success:(res)=>{
					this.clientHeight=res.windowHeight-uni.upx2px(80)
				}
			})
		}
	}
</script>

<style scoped>
.shop-list{
	padding-bottom: 100rpx;
}
.shop-else-list{
	background-color: #f7f7f7;
	width: 100vw;display: flex;align-items: center;justify-content: center;
}
.shop-item{
	display: flex;
	padding: 20rpx;
	align-items: center;
	background-color: #F7F7F7;
}
.shop-img{
	width: 200rpx;height: 200rpx;
}
.shop-text{
	padding-left: 20rpx;
	flex: 1;
}
.shop-name{
	overflow: hidden;
	text-overflow: ellipsis;
	-ms-text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp:2; 
	-webkit-box-orient:vertical;
}
.shop-color{
	font-size: 24rpx;
}
.shop-price{
	display: flex;justify-content: space-between;
}
.shop-foot{
	border-top:2rpx solid #F7F7F7;background-color:#fff;display: flex;bottom: 0;left: 0;width: 100%;height: 100rpx;position: fixed;justify-content: space-between;align-items: center;
}
.foot-radio{
	padding-left: 20rpx;
}
.foot-total{
	display: flex;
}
.foot-count{
	line-height: 100rpx;padding: 0 20rpx;font-size: 32rpx;
}

.foot-num{
	background-color: #49BDFB;
	color: #fff;
	padding:0 60rpx;line-height: 100rpx;
}
</style>
