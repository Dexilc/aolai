var express = require('express');
var router = express.Router();
var connection=require('../db/sql.js')
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/aolai";
 

// mongodb查询数据
// MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("aolai");
//     dbo.collection("shoplist"). find({name:'羊'}).toArray(function(err, result) { // 返回集合中所有数据
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/goods/id',function(req,res,next){
	let id=req.query.id
	connection.query('SELECT * from goods_search where id='+id+'', function (error, results, fields) {
	  if (error) throw error;
	  // console.log(results)
	  res.send({
		  code:'0',
		  data:results
	  })	 
	});
})

// mysql数据库连接
router.get('/api/goods/search',function(req,res,next){	
	let [goodsName,orderName]=Object.keys(req.query)	
	let name=req.query.name;
	let order=req.query[orderName]
	// console.log(name,order)
	connection.query('SELECT * from goods_search where name like "%'+name+'%" order by '+orderName+' '+order+'', function (error, results, fields) {
	  if (error) throw error;
	  // console.log(results)
	  res.send({
		  code:'0',
		  data:results
	  })	 
	});
})
router.get('/api/goods/list',function(req,res,next){
	res.json({
	code:0,
	    data:[
	           {
	               id:1,
	               name:"家居家纺",
	               data:[
	                   {
	                       name:"家纺",
	                       list:[
	                           {
	                               id:1,
	                               name:"毛巾/浴巾",
	                               imgUrl:"../../static/img/list1.jpg"
	                           },
	                           {
	                               id:2,
	                               name:"枕头",
	                               imgUrl:"../../static/img/list1.jpg"
	                           }
	                       ]
	                   },
	                   {
	                       name:"生活用品",
	                       list:[
	                           {
	                               id:1,
	                               name:"浴室用品",
	                               imgUrl:"../../static/img/list1.jpg"
	                           },
	                           {
	                               id:2,
	                               name:"洗晒",
	                               imgUrl:"../../static/img/list1.jpg"
	                           }
	                       ]
	                   }
	               ]
	           },
	           {
	               id:2,
	               name:"女装",
	               data:[
	                   {
	                       name:"裙装",
	                       list:[
	                           {
	                               id:1,
	                               name:"半身裙",
	                               imgUrl:"../../static/img/list1.jpg"
	                           },
	                           {
	                               id:2,
	                               name:"连衣裙",
	                               imgUrl:"../../static/img/list1.jpg"
	                           }
	                       ]
	                   },
	                   {
	                       name:"上衣",
	                       list:[
	                           {
	                               id:1,
	                               name:"T恤",
	                               imgUrl:"../../static/img/list1.jpg"
	                           },
	                           {
	                               id:2,
	                               name:"衬衫",
	                               imgUrl:"../../static/img/list1.jpg"
	                           }
	                       ]
	                   }
	               ]
	           }
	       ]
	})
})
router.get('/api/index_list/1/data/2',function(req,res,next){
	res.json({
		"code":0,
		"data":[{
				  type:'commodityList',
				  data:[
					  {
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
						  
					  }
				  ]
			  }
			
		]
	})
})
// 运动户外第二次上拉加载
router.get('/api/index_list/2/data/3',function(req,res,next){
	res.json({
		"code":0,
		"data":[{
				  type:'commodityList',
				  data:[
					  {
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
						  
					  }
				  ]
			  }
			
		]
	})
})
//运动户外第一次上拉加载
router.get('/api/index_list/2/data/2',function(req,res,next){
	res.json({
		"code":0,
		"data":[{
				  type:'commodityList',
				  data:[
					  {
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
						  
					  }
				  ]
			  }
			
		]
	})
})
// 运动户外第一次加载
router.get('/api/index_list/2/data/1', function(req, res, next) {
  res.json({
	  "code":0,
	  "data":[
		  {
			  type:"bannerList",
			  imgUrl:"../../static/img/banner1.jpg"
		  },{
			  type:'iconsList',
			  data:[
				  {
					  imgUrl:"../../static/img/icons1.png",
					  name:'篮球鞋'
				  },{
					  imgUrl:"../../static/img/icons2.png",
					  name:'运动休闲鞋'
				  },{
					  imgUrl:"../../static/img/icons3.png",
					  name:'户外鞋'
				  },{
					  imgUrl:"../../static/img/icons4.png",
					  name:'运动T恤'
				  },{
					  imgUrl:"../../static/img/icons5.png",
					  name:'夹克/连帽衫'
				  },{
					  imgUrl:"../../static/img/icons6.png",
					  name:'运动裤'
				  },{
					  imgUrl:"../../static/img/icons7.png",
					  name:'服饰内衣'
				  },{
					  imgUrl:"../../static/img/icons8.png",
					  name:'冲锋衣裤'
				  }
			  ]
		  },{
			  type:'hotList',
			  data:[{
						  id:1,
						  imgUrl:'../../static/img/hot1.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'2222',
						  oprice:'4444',
						  discount:"5.2"
						  
					  },{
						  id:2,
						  imgUrl:'../../static/img/hot2.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'3434',
						  oprice:'6666',
						  discount:"5.2"
						  
					  },{
						  id:3,
						  imgUrl:'../../static/img/hot3.jpg',
						  name:'羊绒买习爆款必须买，买习爆款必须买，头绪羊绒',
						  nprice:'3939',
						  oprice:'5444',
						  discount:"5.2"
						  
					  }]
		  },{
			  type:'shopList',
			  data:[{
				  bigUrl:'../../static/img/shop.jpg',
				  data:[{
						  id:1,
						  imgUrl:'../../static/img/shop1.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'2222',
						  oprice:'4444',
						  discount:"5.2"
						  
					  },{
						  id:2,
						  imgUrl:'../../static/img/shop2.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'3434',
						  oprice:'6666',
						  discount:"5.2"
						  
					  },{
						  id:3,
						  imgUrl:'../../static/img/shop3.jpg',
						  name:'羊绒买习爆款必须买，买习爆款必须买，头绪羊绒',
						  nprice:'3939',
						  oprice:'5444',
						  discount:"5.2"
						  
					  },{
						  id:4,
						  imgUrl:'../../static/img/shop4.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'299',
						  oprice:'599',
						  discount:"5.2"
						  
					  }
				  ]
			  },{
				  bigUrl:'../../static/img/shop.jpg',
				  data:[{
						  id:1,
						  imgUrl:'../../static/img/shop1.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'2222',
						  oprice:'4444',
						  discount:"5.2"
						  
					  },{
						  id:2,
						  imgUrl:'../../static/img/shop2.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'3434',
						  oprice:'6666',
						  discount:"5.2"
						  
					  },{
						  id:3,
						  imgUrl:'../../static/img/shop3.jpg',
						  name:'羊绒买习爆款必须买，买习爆款必须买，头绪羊绒',
						  nprice:'3939',
						  oprice:'5444',
						  discount:"5.2"
						  
					  },{
						  id:4,
						  imgUrl:'../../static/img/shop4.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'299',
						  oprice:'599',
						  discount:"5.2"
						  
					  }
				  ]
			  }
			  ]
		  },{
				  type:'commodityList',
				  data:[
					  {
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
						  
					  }
				  ]
			  }
		  ]
	  
  });
});
// 服饰内衣第一次加载
router.get('/api/index_list/3/data/1', function(req, res, next) {
  res.json({
	  "code":0,
	  "data":[
		  {
			  type:"bannerList",
			  imgUrl:"../../static/img/banner1.jpg"
		  },{
			  type:'iconsList',
			  data:[
				  {
					  imgUrl:"../../static/img/icons1.png",
					  name:'服饰内衣'
				  },{
					  imgUrl:"../../static/img/icons2.png",
					  name:'服饰内衣'
				  },{
					  imgUrl:"../../static/img/icons3.png",
					  name:'户外鞋'
				  },{
					  imgUrl:"../../static/img/icons4.png",
					  name:'运动T恤'
				  },{
					  imgUrl:"../../static/img/icons5.png",
					  name:'夹克/连帽衫'
				  },{
					  imgUrl:"../../static/img/icons6.png",
					  name:'运动裤'
				  },{
					  imgUrl:"../../static/img/icons7.png",
					  name:'服饰内衣'
				  },				  {
					  imgUrl:"../../static/img/icons8.png",
					  name:'冲锋衣裤'
				  }
			  ]
		  },{
			  type:'hotList',
			  data:[{
						  id:1,
						  imgUrl:'../../static/img/hot1.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'2222',
						  oprice:'4444',
						  discount:"5.2"
						  
					  },{
						  id:2,
						  imgUrl:'../../static/img/hot2.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'3434',
						  oprice:'6666',
						  discount:"5.2"
						  
					  },{
						  id:3,
						  imgUrl:'../../static/img/hot3.jpg',
						  name:'羊绒买习爆款必须买，买习爆款必须买，头绪羊绒',
						  nprice:'3939',
						  oprice:'5444',
						  discount:"5.2"
						  
					  }]
		  },{
			  type:'shopList',
			  data:[{
				  bigUrl:'../../static/img/shop.jpg',
				  data:[{
						  id:1,
						  imgUrl:'../../static/img/shop1.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'2222',
						  oprice:'4444',
						  discount:"5.2"
						  
					  },{
						  id:2,
						  imgUrl:'../../static/img/shop2.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'3434',
						  oprice:'6666',
						  discount:"5.2"
						  
					  },{
						  id:3,
						  imgUrl:'../../static/img/shop3.jpg',
						  name:'羊绒买习爆款必须买，买习爆款必须买，头绪羊绒',
						  nprice:'3939',
						  oprice:'5444',
						  discount:"5.2"
						  
					  },{
						  id:4,
						  imgUrl:'../../static/img/shop4.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'299',
						  oprice:'599',
						  discount:"5.2"
						  
					  },{
						  id:5,
						  imgUrl:'../../static/img/shop3.jpg',
						  name:'羊绒买习爆款必须买，买习爆款必须买，头绪羊绒',
						  nprice:'3939',
						  oprice:'5444',
						  discount:"5.2"
						  
					  },{
						  id:6,
						  imgUrl:'../../static/img/shop4.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'299',
						  oprice:'599',
						  discount:"5.2"
						  
					  }
				  ]
			  },{
				  bigUrl:'../../static/img/shop.jpg',
				  data:[{
						  id:1,
						  imgUrl:'../../static/img/shop1.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'2222',
						  oprice:'4444',
						  discount:"5.2"
						  
					  },{
						  id:2,
						  imgUrl:'../../static/img/shop2.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'3434',
						  oprice:'6666',
						  discount:"5.2"
						  
					  },{
						  id:3,
						  imgUrl:'../../static/img/shop3.jpg',
						  name:'羊绒买习爆款必须买，买习爆款必须买，头绪羊绒',
						  nprice:'3939',
						  oprice:'5444',
						  discount:"5.2"
						  
					  },{
						  id:4,
						  imgUrl:'../../static/img/shop4.jpg',
						  name:'羊绒买习爆款必须买，头绪羊绒买习爆款必须买，头绪羊绒',
						  nprice:'299',
						  oprice:'599',
						  discount:"5.2"
						  
					  }
				  ]
			  }
			  ]
		  },{
				  type:'commodityList',
				  data:[
					  {
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
						  
					  }
				  ]
			  }
		  ]
	  
  });
});
// 首页推荐
router.get('/api/index_list/data', function(req, res, next) {
  res.send({
	  "code":0,
	  "data":{
		  topBar:[
			  {id:1,name:'推荐'},
			  {id:2,
			  	name:'运动户外'
			  },{id:3,
			  	name:'服饰内衣'
			  },{id:4,
			  	name:'鞋靴箱包'
			  },{id:5,
			  	name:'美妆个护'
			  },{id:6,
			  	name:'家居数码'
			  },{id:7,
			  	name:'食品母婴'
			  }
		  ],
		  data:[
			  {
				  type:'swiperList',
				  data:[
					  {imgUrl:'../../static/img/swiper1.jpg'},
					  {imgUrl:'../../static/img/swiper2.jpg'},
					  {imgUrl:'../../static/img/swiper3.jpg'}
				  ]
			  },
			  {
				  type:'recommendList',
				  data:[
					  {
						  bigUrl:'../../static/img/Children.jpg',
						  data:[
							  {imgUrl:"../../static/img/Children1.jpg"},
							  {imgUrl:"../../static/img/Children2.jpg"},
							  {imgUrl:"../../static/img/Children3.jpg"}
						  ]
					  },{
						  bigUrl:'../../static/img/Furnishing.jpg',
						  data:[
							  {imgUrl:"../../static/img/Furnishing1.jpg"},
							  {imgUrl:"../../static/img/Furnishing2.jpg"},
							  {imgUrl:"../../static/img/Furnishing3.jpg"}
						  ]
					  }
					  
				  ]
			  },
			  {
				  type:'commodityList',
				  data:[
					  {
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
						  
					  }
				  ]
			  }
		  ]
	  }
  })
});
module.exports = router;
