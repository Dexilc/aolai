<template>
	<view class="details">
		<!-- 商品轮播 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image :src="goodsContent.imgUrl" mode="" class="swiper-img" />
				</view>
			</swiper-item>			
		</swiper>
		<!-- 价格和名称 -->
		<view class="details-goods">
			<view class="goods-nprice">
				${{goodsContent.nprice}}
			</view>
			<view class="goods-oprice">
				${{goodsContent.oprice}}
			</view>
			<view class="goods-name">
				{{goodsContent.name}}
			</view>
		</view>
		<!-- 商品详情图 -->
		<view class="">
			<view class="">
				<image class="detail-img" src="../../static/img/detail1.jpg" mode="widthFix"></image>
			</view>
			<view class="">
				<image class="detail-img" src="../../static/img/detail2.jpg" mode="widthFix"></image>
			</view>
			<view class="">
				<image class="detail-img" src="../../static/img/detail3.jpg" mode="widthFix"></image>
			</view>
			<view class="">
				<image class="detail-img" src="../../static/img/detail4.jpg" mode="widthFix"></image>
			</view>
			<view class="">
				<image class="detail-img" src="../../static/img/detail5.jpg" mode="widthFix"></image>
			</view>
		</view>
		<!-- 看了又看 -->
		<Card cardTitle='看了又看'></Card>
		<CommodityList :dataList='dataList'></CommodityList>
		<!-- 底部 -->
		<view class="details-foot">
			<view class="iconfont icon-message"></view>
			<view class="iconfont icon-shop-car" @tap='goShopCart'></view>
			<view class="add-shopcar" @tap="showPop()">
				加入购物车
			</view>
			<view class="purchase" @tap="showPop()">
				立即购买
			</view>
		</view>
		<view class="pop" v-show="isShow" @touchmove.stop.prevent="">
			<view class="pop-mask" @tap="hidePop()"></view>
			<view class="pop-box" :animation="animationData">
				<view class="img-ctn">
					<image class="pop-img" :src="goodsContent.imgUrl" mode="widthFix"></image>
				</view>
				<view class="pop-num">
					<view>购买数量</view> <UniNumberBox @change="" :min="1" :value='num' @change='changeNumber'></UniNumberBox>
				</view>
				<view class="pop-sub" @tap='addCart()'>
					确定
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import $http from '@/common/api/request.js'
	import Card from '@/components/Card/index.vue'
	import CommodityList from '@/components/CommodityList/index.vue'
	import UniNumberBox from "@/components/uni/uni-number-box/uni-number-box.vue"
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				isShow:false,
				goodsContent:{},
				num:1,
				animationData:{},
				swiperList:[
					{imgUrl:'../../static/img/details1.jpeg'},
					{imgUrl:'../../static/img/details2.jpeg'},
					{imgUrl:'../../static/img/details3.jpeg'}
				],
				dataList:[{
						  id:1,
						  imgUrl:'../../static/img/commodity1.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'2222',
						  oprice:'4444',
						  discount:"5.2"						  
					  },{
						  id:2,
						  imgUrl:'../../static/img/commodity2.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'3434',
						  oprice:'6666',
						  discount:"5.2"						  
					  },{
						  id:3,
						  imgUrl:'../../static/img/commodity3.jpg',
						  name:'羊绒买习爆款必须买，买习爆款必须买，头绪羊绒',
						  nprice:'3939',
						  oprice:'5444',
						  discount:"5.2"						  
					  },{
						  id:4,
						  imgUrl:'../../static/img/commodity4.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'299',
						  oprice:'599',
						  discount:"5.2"						  
					  }]
			}
		},
		components:{
			Card,CommodityList,UniNumberBox
		},
		onBackPress() {
			if(this.isShow){
				this.hidePop()
				return true;
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.type=='share'){
				uni.share({
					provider: "weixin",
					    scene: "WXSceneSession",
					    type: 0,
					    title: this.goodsContent.name,
						href:`http://192.168.0.108:3001/#/pages/details/details?id=${this.goodsContent.id}`,
						imageUrl:this.goodsContent.imgUrl,
						success: function (res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function (err) {
							console.log("fail:" + JSON.stringify(err));
						}
				})
			}
		},
		methods: {
			...mapMutations(['addShopCart']),
			addCart(){
				let goods=this.goodsContent
				// console.log(goods)
				this.goodsContent['checked']=false
				this.goodsContent['num']=this.num
				this.addShopCart(goods);
				this.hidePop()
				uni.showToast({
					title:'成功加入购物车',
					icon:'none'
				})
			},
			goShopCart(){
				uni.switchTab({
					url:'../shopcar/shopcar'
				})
			},
			changeNumber(value){
				this.num=value
			},
			getData(id){
				$http.request({
					url:"/goods/id",
					data:{
						id:id
					}
				}).then(res=>{
					this.goodsContent=res[0]					
				}).catch(()=>{
					uni.showToast({
						title:"请求失败",
						icon:'none'
					})					
				})
			},
			showPop(){
				var animation = uni.createAnimation({
				      duration: 300,
				        timingFunction: 'ease',
				    })
					animation.translateY(600).step()
				    this.animationData = animation.export()
					this.isShow=!this.isShow
					setTimeout(()=> {
					      animation.translateY(0).step()
					      this.animationData = animation.export()
					    }, 200)
			},
			hidePop(){
				var animation = uni.createAnimation({
				      duration: 300,
				        timingFunction: 'ease',
				    })
					animation.translateY(600).step()
				    this.animationData = animation.export()
					setTimeout(()=> {
					      animation.translateY(0).step()
					      this.isShow=false
					    }, 200)
				
			}
		},
		onLoad(e) {
			this.getData(e.id)
		}
	}
</script>

<style scoped>
	.details{
		padding-bottom: 90rpx;
	}
swiper{
	width: 100%;
	height: 700rpx;
}
.swiper-img{
	width: 100%;
	height: 700rpx;
}
.details-goods{
	text-align: center;
	font-weight: bold;
	font-size: 36rpx;
	padding: 10rpx 0;
	
}
.goods-oprice{
	text-decoration: line-through;
	color: #C0C0C0;
}
.detail-img{
	width: 100%;
}
.details-foot{
	position: fixed;bottom: 0;left: 0;width: 100%;height: 90rpx;
	display: flex;
	align-items: center;justify-content: center;background-color: #fff;
}
.details-foot .iconfont{
	width: 60rpx;height: 60rpx;border-radius: 100%;background-color: #000;color: #fff; text-align: center;margin: 0 10rpx;line-height: 60rpx;
}
.add-shopcar{
	margin: 0 40rpx;
	padding: 6rpx 30rpx;
	background-color: #000;
	color: #fff;
	border-radius: 40rpx;	
}
.purchase{
	margin: 0 40rpx;
	padding: 6rpx 30rpx;
	background-color: #49BDFB;
	color: #fff;
	border-radius: 40rpx;	
}
.pop{
	position: fixed;left: 0;top: 0;width: 100%;height: 100%;z-index: 999;
}
.pop-mask{
	position: absolute;left: 0;top: 0;width: 100%;height: 100%;background-color: rgba(0,0,0,.3);
}
.pop-box{
	position: absolute;left: 0;bottom: 0;width: 100%;background-color: #fff;
}
.img-ctn{
	position: relative;background-color: #fff;
}
.pop-img{
	width: 260rpx;height: 260rpx;position: absolute;top: -90rpx;left: 45rpx;
}
.pop-num{
	padding: 20rpx;display: flex;justify-content: space-between;
}
.pop-sub{
	line-height: 80rpx;background-color: #49BDFB;color: #fff;text-align: center;
}
</style>
