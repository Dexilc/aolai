<template>
	<view class="index">
		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scrollIntoIndex">
			<view class="scroll-item" v-for="(item,index) in topBar" :key='index' :id="`top${index}`"
			@tap="changeTab(index)"
			>
				<text :class="topBarIndex===index ? 'f-active-color':'' ">{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper @change="onChangeTab" :current="topBarIndex" :style="`height:${clientHeight}px`">
			<swiper-item v-for="(item,index) in newTopBar" :key='index'>
			<scroll-view scroll-y="true" :scroll-with-animation="true" :style="`height:${clientHeight}px`" @scrolltolower="loadMore(index)">
				<block v-if="item.data.length>0">
					<block v-for="(k,i) in item.data" :key="i">
						
						<!-- 首页推荐 -->
						<IndexSwiper v-if='k.type==="swiperList"' :dataList="k.data"></IndexSwiper>
						<template v-if='k.type==="recommendList"'>
							<Recommend :dataList="k.data"></Recommend>
							<Card cardTitle="猜你喜欢"></Card>
						</template>
						<!-- 运动户外………… -->
						<Banner v-if='k.type==="bannerList"' :dataList='k.imgUrl'></Banner>
						
						<template v-if='k.type==="iconsList"'>
							<Icon :dataList='k.data'></Icon>
							<Card cardTitle="热销爆品"></Card>
						</template>
						<template v-if='k.type==="hotList"'>
							<Hot :dataList='k.data'></Hot>
							<Card cardTitle="推荐店铺"></Card>
						</template>
						<template v-if='k.type==="shopList"'>
							<Shop :dataList='k.data'></Shop>
							<Card cardTitle="为您推荐"></Card>
						</template>	
						
						<CommodityList v-if='k.type==="commodityList"' :dataList="k.data"></CommodityList>
					</block>					
				</block>
				<view class="" v-else>
					暂无数据………………
				</view>
				<view class="load-text f-color">
					{{loadText}}
				</view>
			</scroll-view>
				
			
			</swiper-item>						
		</swiper>		
	</view>
</template>

<script>
	import $http from '@/common/api/request.js'
	import IndexSwiper from '@/components/IndexSwiper'
	import Recommend from '@/components/Recommend'
	import Card from '@/components/Card'
	import CommodityList from '@/components/CommodityList'
	import Banner from '@/components/Banner'
	import Icon from '@/components/Icon'
	import Hot from '@/components/Hot'
	import Shop from '@/components/Shop'
	export default {
		data() {
			return {
				topBarIndex:0,
				scrollIntoIndex:'top0',
				clientHeight:0,
				topBar:[],
				newTopBar:[],
				loadText:'上拉加载更多······'
			}
		},
		components:{
			IndexSwiper,Recommend,Card,CommodityList,Banner,Icon,Hot,Shop
		},
		onNavigationBarButtonTap(e) {
			if(e.float=='left'){
				uni.navigateTo({
					url:'../search/search'
				})
			}
		},
		methods:{
			changeTab(index){
				if(this.topBarIndex===index){
					return;
				}
				this.topBarIndex=index
				this.scrollIntoIndex=`top${index}`
				//每次滑动标签加载数据
				if(this.newTopBar[this.topBarIndex].load==='first'){
					this.addData()
				}
				
			},
			onChangeTab(e){
				this.changeTab(e.detail.current)
			},
			__init(){
				$http.request({
					url:"/index_list/data"
				}).then(res=>{
					// console.log(res)
					this.topBar=res.topBar
					this.newTopBar=this.initData(res)
				}).catch(()=>{
					uni.showToast({
						title:"请求失败",
						icon:'none'
					})					
				})
				// uni.request({
				// 	url:'http://192.168.0.105:3000/api/index_list/data',
				// 	success:(res)=>{
				// 		let data=res.data.data
				// 		this.topBar=data.topBar
				// 		// console.log(JSON.stringify(this.initData(data)))
				// 		this.newTopBar=this.initData(data)
				// 	}
				// })
			},
			// 顶部滑动栏点击加载数据
			addData(callback){
				let index=this.topBarIndex;
				let id=this.topBar[index].id
				let page=Math.ceil(this.newTopBar[index].data.length/5)+1
				// console.log(page)
				$http.request({
					url:`/index_list/${id}/data/${page}`
				}).then(res=>{
					// console.log(res)					
					this.newTopBar[index].data=[...this.newTopBar[index].data,...res]
				}).catch(()=>{
					uni.showToast({
						title:"请求失败",
						icon:'none'
					})					
				})
				// uni.request({
				// 	url:`http://192.168.0.105:3000/api/index_list/${id}/data/${page}`,
				// 	success: (res) => {
				// 		if(res.statusCode!=200){
				// 			return;
				// 		}else{
				// 			let data=res.data.data
							
				// 			this.newTopBar[index].data=[...this.newTopBar[index].data,...data]
				// 		}
						
				// 	}
				// })
				// 请求结束后,改变load的值,下一次滑动到该标签时不再加载数据
				this.newTopBar[index].load='last'
				if(typeof callback ==='function'){
					callback()
				}
			},
			// 上拉加载更多
			loadMore(index){
				this.newTopBar[index].loadText='加载中······'
				// 请求数据
				this.addData(()=>{
					this.newTopBar[index].loadText='上拉加载更多······'
				})
				
				
			},
			//滚动区域高度兼容性调整
			// getClientHeight(){
			// 	const res=uni.getSystemInfoSync()
			// 	// console.log(res.platform,res.statusBarHeight)
			// 	const system=res.platform
			// 	console.log(res.windowHeight)
			// 	if(system==='ios'){
			// 		return res.statusBarHeight
			// 	}else if(system==='android'){
			// 		return 48+res.statusBarHeight
			// 	}else{
			// 		return 0
			// 	}				
			// },
			initData(res){
				let arr=[]
				for(let i=0;i<this.topBar.length;i++){
					let obj={
						data:[],
						load:'first'
					}
					if(i==0){
						obj.data=res.data
					}
					arr.push(obj)
					
				}
				return arr
			}
		},
		onLoad() {
			this.__init();
		},
		onReady(){		
			uni.getSystemInfo({
				success:(res)=>{
					this.clientHeight=res.windowHeight-uni.upx2px(80)
				}
			})
		}
	}
</script>

<style scoped>
	.scroll-content{
		width: 100%;height: 80rpx;white-space: nowrap;
	}
	.scroll-item{
		font-size: 32rpx;display: inline-block;padding: 10rpx 30rpx;
	}
	.f-active-color{
		border-bottom:6rpx solid #49bdfb;
		padding: 10rpx 0;
		
	}
	.load-text{		
		display: flex;
		line-height: 60rpx;		
		justify-content: center;
	}
	.load-text::before{
		background-color: #636263;
		content: '';		
		align-self: center;
		margin-right: 20rpx;		
		width: 120rpx;
		height: 2rpx;
	}
	.load-text::after{
		background-color: #636263;
		align-self: center;		
		content: '';
		margin-left: 20rpx;		
		width: 120rpx;
		height: 2rpx;
	}
</style>
