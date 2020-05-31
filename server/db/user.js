let user={
	//查询
	queryUserName(param){
		return "select * from user where userName ="`${param.userName}`" or phone="`${param.userName}`"
	}
	
}
