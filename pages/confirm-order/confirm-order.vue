<template>
	<view class="confirm-order de-bgc">
		<Lines></Lines>
		<view class="order-info">
			<template v-if="path">
				<view class="order-map" @tap="goPathList">
					<view class="order-title">
						<view class="title-name">收件人:{{path.name}}</view>
						<view>{{path.tel}}</view>
					</view>
					<view class="order-city">
						收货地址:{{path.city}}{{path.details}}
					</view>
				</view>
			</template>
			<template v-else>
				<view class="order-map">
					<view class="title-name">
						请选择地址
					</view>
				</view>
			</template>
			<uniIcons type="arrowright" size="21"></uniIcons>			
		</view>
		<view class="goods-list">
			<view class="store">
				<view class="store-name">
					床品专卖店
				</view>				
			</view>
			<view class="goods">
				<image class="goods-img" src="../../static/img/commodity1.jpg" mode="widthFix"></image>
				<view class="goods-desc">
					<view class="goods-name">
						坐垫办公室椅垫3D网眼透气防掌骨学生垫汽车夏季专用坐垫办公室椅垫3D网眼透气
					</view>
					<view class="goods-attri">
						颜色分类:竹炭坐垫黑色
						尺寸:45*45cm
					</view>
					<view class="f-active-color">
						7天无理由
					</view>
				</view>
				<view>
					<view>$299.00</view>
					<view>*3</view>
				</view>
			</view>
			<view class="goods">
				<image class="goods-img" src="../../static/img/commodity1.jpg" mode="widthFix"></image>
				<view class="goods-desc">
					<view class="goods-name">
						坐垫办公室椅垫3D网眼透气防掌骨学生垫汽车夏季专用坐垫办公室椅垫3D网眼透气
					</view>
					<view class="goods-attri">
						颜色分类:竹炭坐垫黑色
						尺寸:45*45cm
					</view>
					<view class="f-active-color">
						7天无理由
					</view>
				</view>
				<view>
					<view>$299.00</view>
					<view>*3</view>
				</view>
			</view>
			<view class="freight">
				<view class="">
					运费
				</view>
				<view class="f-active-color">$0.00</view>
			</view>
			<view class="message">
				留言:<input type="text" value="" maxlength="140" placeholder="给卖家的留言,140字以内" class="info"/>
			</view>
			<view class="payment">
				共1件商品小计:<view class="f-active-color"><text style="font-size: 36rpx;font-weight: bold;">$1233</text>.00</view>
			</view>
		</view>
		<!-- 提交订单 -->
		<view class="order-foot">
			<view>合计:<text class="f-active-color">$388.00</text></view>
			<view class="confirm" @tap='goPayment'>
				提交订单
			</view>
		</view>
	</view>
</template>

<script>
	import Lines from "@/components/Line/index.vue"
	import uniIcons from '@/components/uni/uni-icons/uni-icons.vue'
	import {mapGetters} from 'vuex'
	
	export default {
		data() {
			return {
				path:false
			}
		},
		computed:{
			...mapGetters(['defaultPath'])
		},
		onLoad(){
			//如果有默认地址
			if(this.defaultPath.length){
				this.path=this.defaultPath[0]
			}
			uni.$on('selectPathItem',(res)=>{
				this.path=res
			})
		},
		onUnload() {
			uni.$off('selectPathItem',()=>{
				console.log('移除selectPathItem')
			})
		},
		components:{
			Lines,uniIcons
		},
		methods: {
			goPathList(){				
				uni.navigateTo({
					url:'../addr-list/addr-list?type=selectedPath'
				})				
			},
			goPayment(){
				uni.navigateTo({
					url:'../payment/payment'
				})
			}
		}
	}
</script>

<style scoped>
.confirm-order{
	position: absolute;left: 0;top: 0;right: 0;bottom: 0;
}
.order-info{
	background-color: #fff;line-height: 40rpx;padding:20rpx;display: flex;justify-content: space-between;align-items: center;
}
.order-map{flex: 1;padding-right: 20rpx;}
.order-title{
	display: flex;justify-content: space-between;margin-bottom: 15rpx;
}
.title-name{
	font-weight: bold;
}
.goods-list{
	margin-top: 20rpx;
}
.store{
	display: flex;padding: 20rpx 30rpx;align-items: center;
	background-color: #fff;
}
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
.freight{
		display: flex;justify-content: space-between;align-items: center;padding: 20rpx;background-color: #fff;border-bottom: 1rpx solid #ccc;
	}
.message{
		display: flex;padding:20rpx;background-color: #fff;border-bottom: 1rpx solid #ccc;align-items: center;
	}
.info{
		flex: 1;text-indent: 10rpx;
	}
.payment{
		display: flex;padding: 15rpx;justify-content: flex-end;align-items: center;background-color: #fff;
	}
.order-foot{
		height: 120rpx;width: 100%;position: fixed;bottom: 0;left: 0;background-color: #fff;display: flex;justify-content: flex-end;align-items: center;
	}
.confirm{
		color: #fff;background-color: #49BDFB;width: 27%;height: 100%;text-align: center;line-height: 120rpx;margin-left: 20rpx;
	}
</style>
