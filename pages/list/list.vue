<template>
	<view class="">
		<Lines></Lines>
		<view class="list">
			<!-- 左侧滑动 -->
			<scroll-view scroll-y="true" class="list-left" :style="`height:${clientHeight}px`">
				<view v-for="(item,index) in leftData" :key="index" class="left-item" @tap="changeLeftTab(index,item.id)">
					<view class="left-name"
					:class="activeIndex===index ? 'left-name-active' : '' "
					>
						{{item.name}}
					</view>
				</view>
			</scroll-view>
			<!-- 右侧滑动 -->
			<scroll-view scroll-y="true" class="list-right" :style="`height:${clientHeight}px`">
				<view class="right-list" v-for="(item,index) in rightData" :key="index">
					<block v-for="(k,i) in item" :key='i'>
						<view class="list-title">{{k.name}}</view>
						<view class="right-content">
							<view class="right-item" v-for="(j,idx) in k.list" :key='idx'>
								<image :src="j.imgUrl" :alt="j.name" class="right-img">
								<view class="right-name">
									{{j.name}}
								</view>
							</view>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import $http from '@/common/api/request.js'
	import Lines from '../../components/Line/index.vue'
	export default {
		data() {
			return {
				clientHeight:0,
				activeIndex:0,
				leftData:[],
				rightData:[]
			}
		},
		components:{
			Lines
		},
		methods: {
			getData(id){
				if(id===(this.activeIndex+1)){
					return
				}
				$http.request({
					url:"/goods/list"
				}).then(res=>{
					// console.log(res)
					let leftData=[];
					let rightData=[];
					res.forEach(v=>{
						leftData.push({
							id:v.id,
							name:v.name
						})
						if(v.id===(this.activeIndex+1)){
							rightData.push(v.data)
						}
					})
					this.leftData=leftData
					this.rightData=rightData
					
					
				}).catch(()=>{
					uni.showToast({
						title:"请求失败",
						icon:'none'
					})					
				})
			},
			changeLeftTab(index,id){
				this.getData(id)
				this.activeIndex=index
			}
		},
		onLoad() {
			this.getData()
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:'../search/search'
			})
		},
		onReady(){		
			uni.getSystemInfo({
				success:(res)=>{
					// console.log(res.windowHeight)
					this.clientHeight=res.windowHeight
				}
			})
		}
	}
</script>

<style scoped>
.list{
	display: flex;
}
.list-left{
	width: 200rpx;
}
.left-item{
	border-bottom: 2rpx solid #fff;
	font-size: 28rpx;
	background-color: #f7f7f7;
}
.left-name{
	padding: 30rpx 6rpx;
	text-align: center;
}
.left-name-active{
	border-left: 8rpx solid #49bdfb;
	background-color: #fff;
}
.list-title{
	font-weight: bold;
	padding: 30rpx 0;
}
.right-content{
	display: flex;
	flex-wrap: wrap;
}
.right-item{
	width: 150rpx;
	display: flex;flex-direction: column;justify-content: center;align-items: center;padding: 10rpx;
}
.right-img{
	width: 150rpx;height: 150rpx;
}

.right-name{
	padding: 16rpx 0;
}
.list-right{
	flex: 1;padding-left: 30rpx;
}
</style>
