<template>
	<view class="commodity-list">
		<Commodity :dataList='dataList'></Commodity>
		
	</view>
</template>

<script>
	import Commodity from '../Commodity'
	export default{
		props:{
			dataList:Array
		},
		data(){
			return{
				
			}
		},
		components:{
			Commodity
		}
	}
</script>

<style>
</style>
