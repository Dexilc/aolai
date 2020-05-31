<template>
	<view class="search">
		<Lines />
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">最近搜索</view>
				<view class="iconfont icon-trash" @tap="clearHistory()"></view>
			</view>
			<view class="" v-if="searchData.length>0" >
				<view class="search-name f-color"
				v-for="(item,index) in searchData"
				:key="index"
				@tap="toSearchList(item)"
				>
					{{item}}
				</view>				
			</view>
			<view v-else class="search-end">暂无搜索记录</view>
			
		</view>
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">热门搜索</view>				
			</view>
			<view class="">
				<view class="search-name f-color">
					四件套
				</view>
				<view class="search-name f-color">
					面膜
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import Lines from '@/components/Line'
	export default {
		data() {
			return {
				keyword:'',
				searchData:[]
			}
		},
		components:{
			Lines
		},
		onLoad() {
			uni.getStorage({
				key:'searchData',
				success:(res)=>{
					this.searchData=JSON.parse(res.data)
				}
			})
		},
		methods: {
			search(){
				if(this.keyword===''){
					return uni.showToast({
						title:'关键词不能为空',
						icon:'none'
					})
				}else{
					this.toSearchList(this.keyword)
				}
				//清除搜索框的值
				var webView = this.$mp.page.$getAppWebview();
				webView.setTitleNViewSearchInputText('') 
				uni.hideKeyboard()
				this.addSearch()
			},
			// 记录搜索词
			addSearch(){
				let idx=this.searchData.indexOf(this.keyword)
					
				if(idx<0){
					this.searchData.unshift(this.keyword)
				}else{
					this.searchData.unshift(this.searchData.splice(idx,1)[0])
				}
				uni.setStorage({
					key:"searchData",
					data:JSON.stringify(this.searchData),
					// success:function(){
					// 	console.log("success")
					// }
				})
				
			},
			//清除历史搜索记录
			clearHistory(){
				uni.showModal({
					title:'提示',
					content:"确定清空历史记录",
					cancelText:"取消",
					confirmText:"确定",
					success:(res)=> {						
						if (res.confirm){						            
								uni.removeStorage({
									key:'searchData',
									success: (res) => {
										console.log('清除成功')
									}
								})
								this.searchData=[]
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
					}
					
				})
			},
			// 历史搜索记录跳转
			toSearchList(item){				
				uni.navigateTo({
					url:`../search-list/search-list?keyword=${item}`
				})
			},
		},
		
		// 监听软键盘搜索按钮点击
		onNavigationBarSearchInputConfirmed() {
			this.search()
		},
		//监听右侧搜索按钮
		onNavigationBarButtonTap(e){
			
			this.search()
		},
		//监听输入内容
		onNavigationBarSearchInputChanged(e){
			this.keyword=e.text
		}
	}
</script>

<style scoped>
.search-item{padding: 20rpx;}
.search-title{
	display: flex;justify-content: space-between;
}
.search-name{
	padding: 4rpx 24rpx;background-color: #E1E1E1;
	display: inline-block;border-radius: 26rpx;margin: 10rpx;
}
.search-end{
	text-align: center;
}
</style>
