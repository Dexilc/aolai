export default{
	state:{
		list:[],
			selectedList:[]
	},
	getters:{
		// 判断是否全选
		checkedAll(state){
			return state.list.length===state.selectedList.length
		},
		// 合计+结算数量
		totalCount(state){
			let total={
				nprice:0,
				num:0
			}
			state.list.forEach(v=>{
				if(state.selectedList.indexOf(v.id)>-1){
					total.nprice+=v.nprice*v.num
					total.num=state.selectedList.length
					
				}
			})
			return total;
		}
	},
	mutations:{
		// 全选
		checkAll(state){
			state.selectedList=state.list.map(v=>{
				v.checked=true;
				return v.id
			})
		},
		// 全不选
		unCheckAll(state){
			state.list.forEach(v=>{
				v.checked=false
				
			})
			state.selectedList=[]
		},
		selectedItem(state,index){
			let id=state.list[index].id
			// 判断selectedList里有没有被选中的商品,存在返回0,不存在返回-1
			let i=state.selectedList.indexOf(id)
			if(i>-1){
				state.list[index].checked=false
				return state.selectedList.splice(i,1)
			}
			state.list[index].checked=true
			state.selectedList.push(id)
		},
		delGoods(state){
			state.list=state.list.filter(v=>{
				return state.selectedList.indexOf(v.id)===-1
			})
		},
		addShopCart(state,goods){
			state.list.push(goods)
		}
	},
	actions:{
		checkedAllFn({commit,getters}){
			getters.checkedAll ? commit('unCheckAll') : commit('checkAll')
		},
		delGoodsFn({commit}){
			commit('delGoods');
			commit('unCheckAll')
			uni.showToast({
				title:'删除成功',
				icon:"success"
			})
		}
	}
}