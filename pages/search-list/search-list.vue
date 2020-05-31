<template>
	<view>
		<ShopList :keyword="keyword"></ShopList>
		<Lines></Lines>
	</view>
</template>

<script>
	import ShopList from "@/components/ShopList"
	
	export default {
		data() {
			return {
				keyword:""
			}
		},
		components:{
			ShopList
		},
		methods: {
			
		},
		onLoad(e) {
			this.keyword=e.keyword
			// #ifdef APP-PLUS  
			var webView = this.$mp.page.$getAppWebview();			
			 // 设置 searchInput的 text  
			 webView.setTitleNViewSearchInputText(e.keyword)  
			 // #endif
			
		}
	}
</script>

<style>

</style>
