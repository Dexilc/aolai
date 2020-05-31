<template>
	<view class="order de-bgc">
		<Lines></Lines>
		<view class="order-header">
			<view class="header-item" v-for="(item,index) in tabList" :key="index"
			:class="tabIndex==index ? 'active' : ''"
			@tap='changeTab(index)'
			>
				{{item.name}}
			</view>			
		</view>
		<block v-for="(tabItem,tabI) in tabList" :key="tabI">
			<view class="" v-show="tabI===tabIndex">
				<view class="order-main" :style="`height:${clientHeight}px`"
				v-if="tabItem.list.length>0"
				>
				<view class=""  v-for="(k,i) in tabItem.list" :key='i'>
					<view class="store">
						<view class="store-name">
							床品专卖店<view class="iconfont icon-message"></view>
						</view>
						<view class="f-active-color">
							{{k.status}}
						</view>
					</view>
					<view class=" goods-item" v-for="(item,index) in k.goods_item">
						<OrderList :item='item' :index='index'></OrderList>						
					</view>
					<view class="total-price">
						<view class="">
							订单金额:<text class="f-active-color">${{k.totalPrice}}</text>(含运费$0.00)
						</view>					
					</view>
					<view class="payment">
						<view class="pay-btn">支付</view>
					</view>
				</view>
					
				</view>		
			<view v-else class="no-order" :style="`height:${clientHeight}px`">
				<view class="">
					您还没有相关订单
				</view>
				<view class="order-home" @tap='goHome'>
					去首页逛逛
				</view>
			</view>
			</view>
		</block>
	</view>
</template>

<script>
	import Lines from "@/components/Line/index.vue"
	import OrderList from '@/components/order/order-list.vue'
	export default {
		data() {
			return {
				clientHeight:0,
				tabIndex:0,
				tabList:[
					{name:'全部',
					list:[
						{
							status:'待付款',
							totalPrice:'3999.00',
							goods_item:[{
								imgUrl:'../../static/img/commodity1.jpg',
								name:'坐垫办公室椅垫3D网眼透气防掌骨学生垫汽车夏季专用坐垫办公室椅垫3D网眼透气',
								color:'竹炭坐垫黑色',
								size:'45*45cm',
								pprice:'299.00',
								num:1
							}]
						}
					]					
					},
					{name:'待付款',
					list:[	]					
					},					
					{name:'待发货',
					list:[	]
					},					
					{name:'待收货',
					list:[	]
					},
					{name:'待评价',
					list:[	]
					},
				]
			}
		},
		components:{
			Lines,OrderList
		},
		methods: {
			changeTab(index){
				this.tabIndex=index
			},
			goHome(){
				uni.switchTab({
					url:'../index/index'
				})
			}
		},
		onReady(){
			uni.getSystemInfo({
				success:(res)=>{
					this.clientHeight=res.windowHeight-uni.upx2px(90)
				}
			})
		}
	}
</script>

<style scoped>
.order-header{
	background-color: #fff;
	display: flex;justify-content: center;align-items: center;border-bottom: 2rpx solid #F7F7F7;
}
.header-item{
	line-height: 90rpx;
	text-align: center;
	flex: 1;
	box-sizing:border-box;
	
}
.active{
	border-bottom: 4rpx solid #49BDFB;
}
.store{
	display: flex;justify-content: space-between;padding: 20rpx 30rpx;align-items: center;
	background-color: #fff;
}
.iconfont{
	margin-left: 20rpx;
}
.store-name{
	align-items: center;display: flex;
}

.total-price{
	padding: 20rpx;display: flex;justify-content: flex-end;background-color: #fff;border-bottom: 2rpx solid #ccc;
}
.payment{
	padding: 20rpx;display: flex;justify-content: flex-end;background-color: #fff;
}
.pay-btn{
	border: 2rpx solid #49BDFB;
	padding: 10rpx 45rpx;border-radius: 36rpx;color: #49BDFB;
}
.no-order{
	display: flex;justify-content: center;align-items: center;flex-direction: column;
}
.order-home{
	padding: 6rpx 60rpx;border: 2rpx solid #49BDFB;color: #49BDFB;border-radius: 30rpx;margin-top: 10rpx;
}
</style>
