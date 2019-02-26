myApp.controller('login',function($scope,$http,$state){
	$scope.username="sxygsj"
	$scope.password="sxygsj123"
	$scope.Project="安 全 风 险 隐 患 双 重 预 防 平 台"
	$scope.url="www.sxygsj.com"
	$scope.fullinformation="版权信息：山西阳光三极科技股份有限公司"
	$scope.information="Copyright © 2006-2018,山西阳光三极科技股份有限公司"
	$scope.english="Double prevention platform for safety risk"
	$scope.error="密码错误"
	
	document.onkeyup = function (e) {
	    var code = e.charCode || e.keyCode;
	    if (code == 13) {  
		   $state.go("homepage") 
		}  
	} 
})

myApp.controller('registe',function($scope,$http,$state){
	$scope.Project="安 全 风 险 隐 患 双 重 预 防 平 台"
	
//	
//	var map = new BMap.Map("allmap");
//  var point = new BMap.Point(116.331398,39.897445);
//  map.centerAndZoom(point,12);
//
//  var geolocation = new BMap.Geolocation();
//  geolocation.getCurrentPosition(function(r){
//      if(this.getStatus() == BMAP_STATUS_SUCCESS){
//          var mk = new BMap.Marker(r.point);
//          map.addOverlay(mk);
//          map.panTo(r.point);
//          alert('您的位置：'+r.point.lng+','+r.point.lat);
//      }
//      else {
//          alert('failed'+this.getStatus());
//      }
//  },{enableHighAccuracy: true})
	
})
myApp.controller('registemessage',function($scope,$http,$state){//注册
	
	$scope.shen=['山西省'],
    $scope.shi=["太原市"],
    $scope.xian=["请选择","杏花岭区","小店区","迎泽区","尖草坪区","万柏林区","晋源区","古交市","清徐县","阳曲县","娄烦县"]
    
    
	 $("#fileUploadContent").initUpload({
        "uploadUrl":"#",//上传文件信息地址
        //"size":350,//文件大小限制，单位kb,默认不限制
          "maxFileNumber":1,//文件个数限制，为整数
        //"filelSavePath":"",//文件上传地址，后台设置的根目录
        "beforeUpload":beforeUploadFun,//在上传前执行的函数
        //"onUpload":onUploadFun，//在上传后执行的函数
        //autoCommit:true,//文件是否自动上传
        "fileType":['png','jpg','docx','doc']//文件类型限制，默认不限制，注意写的是文件后缀
    });
    function beforeUploadFun(opt){
        opt.otherData =[{"name":"name","value":"zxm"}];
    }
    function onUploadFun(opt,data){
        alert(data);
        uploadTools.uploadError(opt);//显示上传错误
        uploadTools.uploadSuccess(opt);//显示上传成功
    }
    $scope.testUpload=function(){
  	  	var opt = uploadTools.getOpt("fileUploadContent");
  	  	uploadEvent.uploadFileEvent(opt);
  	  	$state.go("registe.registesuccess")
  	  	
	    var map = new BMap.Map("registemessagemap");
//	    var point = new BMap.Point(112.45,37.90);
//		map.centerAndZoom("太原市",10);
		var localSearch = new BMap.LocalSearch(map);
		var keyword ='太原市'+$scope.text1
        map.clearOverlays(); //清空原来的标注
        localSearch.setSearchCompleteCallback(function(searchResult) {
            var poi = searchResult.getPoi(0);
     		alert(poi.point.lng+"-"+poi.point.lat)
        });
        localSearch.search(keyword);
    }
})
//山西阳光三极科技股份有限公司
myApp.controller('registesuccess',function($scope,$http,$state){//注册成功
	
})



myApp.controller('homepage',function($scope,$http,$state){
	$scope.Project="安 全 风 险 隐 患 双 重 预 防 平 台"
})

myApp.controller('homepageview',function($scope,$http,$state){//侧边导航
	$state.go("homepage.home")
	$scope.navs=[
		{
		  	id: '首 页',
		  	navli:[
		  		/*{li:"首页",router:".home"},*/
		  	],
		  	router:".home"
	   	},
	   	{
		  	id: '权 限 管 理', 
		  	navli:[
		  		{li:"部门管理",router:".qx-bmgl"},
	            {li:"用户管理",router:".qx-yhgl"},
	            {li:"角色管理",router:".qx-jsgl"},
	            {li:"菜单管理",router:".qx-cdgl"},
	            {li:"字典管理",router:".qx-zdgl"},
	            {li:"功能管理",router:".qx-gngl"},
		  	],
		  	router:""
	    },
		{
		  	id: '系 统 设 置', 
		  	navli:[
		  		{li:"个人中心",router:".xt-personal"},
	            {li:"日志记录",router:".xt-rzjl"},
	            {li:"修改密码",router:".xt-xgmm"},
	            {li:"消息推送管理",router:".xt-xxts"},
		  	],
		  	router:""
	    },
	    { 
		  	id: '企 业 管 理',
		  	navli:[
		  		{li:"未注册企业",router:".qy-wzc"},
	            {li:"已注册企业",router:".qy-yzc"},
		  	],
		  	router:""
	    },
	    { 
		  	id: '危 险 源 管 理',
		    navli:[
	  			{li:"已上传数据",router:".wx-ysc"},
	            {li:"待办数据",router:".wx-dbsj"},
	            {li:"已办数据",router:".wx-ybsj"},
		  	],
		  	router:""
		},
		{ 
		  	id: '可 视 化 数 据',
		    navli:[
	  			{li:"GIS地图",router:".ksh-map"},
	  			{li:"图表分析",router:".ksh-chart"},
		  	],
		  	router:""
		},
	]
	
	$scope.subbtn=function(){
		$(function(){
			$(".subNav").each(function(index){
				var i = index
				$(this).click(function(){
					$(".navContent").eq(i).slideToggle(200)
					$(".navContent").not($(".navContent").eq(i)).slideUp(200)
				})
			})	
		})
	}
	$scope.subbtn()//侧边导航插件.
	
	$scope.fcli=0
	$scope.head=function(item,$index){
		$scope.fcli=$index
	}
	
})


myApp.controller('home',function($scope,$http,$state){//主页
	$scope.ul1="hiddenn"
	$scope.ul2="hiddenn"
	$scope.more1=function(){
		$scope.ul1="autoo"
	}
	$scope.more2=function(){
		$scope.ul2="autoo"
	}
	
	var homebottomleft = echarts.init(document.getElementById('home-bottom-left'));
	homebottomleft.setOption({
//		title: {
//	        text: '今日产量比',
//	        x:"center",
//	        y:"bottom"
//	    },
		color: ['blue', 'gold', 'orange', 'red'],
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data:['蓝色风险','黄色风险','橘色风险','红色风险']
	    },
	    series: [
	        {
	            name:'风险占比',
	            type:'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:80, name:'蓝色风险'},
	                {value:150, name:'黄色风险'},
	                {value:170, name:'橘色风险'},
	                {value:250, name:'红色风险'},
	            ],
	        }
	    ]
	});
	
	
	var homebottomright = echarts.init(document.getElementById('home-bottom-right'));
	homebottomright.setOption({
//		title: {
//	        text: '实时产量图',
//	        x:"center",
//	        y:"bottom"
//	    },
	    xAxis: {
	        type: 'category',
	        data: ['蓝色风险', '黄色风险', '橘色风险', '红色风险']
	    },
	    yAxis: {
	        type: 'value'
	    },
	     tooltip: {
	        formatter: "{a} <br/>{b}: {c}"
	    },
	     legend: {
	        y: 'bottom',
	        data:['蓝色风险','黄色风险','橘色风险','红色风险']
	    },
	    series: [{
	    	name:'风险值',
	        data: [80, 150, 170, 250],
	        type: 'bar',
	        itemStyle:{
             	normal:{
             		color:function(params){
             			if(params.value==80){
             				return 'blue'
             			}else if(params.value==150){
             				return '#FFCC00'
             			}else if(params.value==170){
             				return '#FF6600'
             			}else{
             				return 'red'
             			}
             		}
             	}
            },
	    }]
	});
	
})




myApp.controller('xt-personal',function($scope,$http,$state){//个人中心
	$scope.isdisabled=true
	$scope.personalbtn="修 改 注 册 信 息"
	var a=true
	$scope.personal=function(){
		if(a){
			$scope.isdisabled=false
			$scope.personalbtn="修 改 完 成"
			$scope.autofocus="autofocus"
			a=false
		}else{
			$scope.isdisabled=true
			$scope.personalbtn="修 改 注 册 信 息"
			a=true
		}
	}
})
myApp.controller('xt-rzjl',function($scope,$http,$state,greeting){//日志记录
	$scope.th=['#','用户名','所属部门','真实姓名','操作记录','操作时间','备注']
	greeting.timedate()//时间控件
	
	$scope.serch=function(){
		alert($("#date01").val())
		
		alert($("#date02").val())
	}
	
})
myApp.controller('xt-xgmm',function($scope,$http,$state){//修改密码
	$scope.isdisabled=true
	$scope.xgmmbtn="修 改 密 码"
	var a=true
	$scope.xgmm=function(){
		if(a){
			$scope.isdisabled=false
			$scope.xgmmbtn="修 改 完 成"
			a=false
		}else{
			$scope.isdisabled=true
			$scope.xgmmbtn="修 改 密 码"
			a=true
		}
	}
})

myApp.controller('xt-xgmmchird',function($scope,$http,$state){//修改密码chird
	$scope.divdisplay="block"
	$scope.btndisplay="none"
	
	$scope.xgmmchirdbtn="修 改 完 成"
	var a=true
	$scope.xgmmchird=function(){
		if(a){
			$scope.xgmmchirdbtn="返 回"
			$scope.divdisplay="none"
			$scope.btndisplay="block"
			a=false
		}else{
			$state.go("homepage.xt-xgmm")
			$scope.divdisplay="block"
			$scope.btndisplay="none"
			$scope.xgmmchirdbtn="修 改 密 码"
			a=true
		}
	}
})

myApp.controller('xt-xxts',function($scope,$http,$state,greeting){//消息推送
	greeting.timedate()//时间控件
})
myApp.controller('xt-xxtschird',function($scope,$http,$state){//消息推送chird
	
})



myApp.controller('qx-bmgl',function($scope,$http,$state){//部门管理
	$scope.icon="none"
	$scope.serch=function(){
		$scope.icon="block"
	}
})
myApp.controller('qx-bmglnew',function($scope,$http,$state){//新建部门
	
})
myApp.controller('qx-bmgldetails',function($scope,$http,$state){//查看部门
	
})



myApp.controller('qx-yhgl',function($scope,$http,$state){//用户管理
	
})
myApp.controller('qx-yhglnew',function($scope,$http,$state,greeting){//新建用户
	$scope.tree=tree
	greeting.snav()
})
myApp.controller('qx-yhglrevise',function($scope,$http,$state){//查看用户
	$scope.isdisabled=true
	$scope.yhglrevisebtn="修 改"
	var a=true
	$scope.yhgl=function(){
		if(a){
			$scope.isdisabled=false
			$scope.yhglrevisebtn="修 改 完 成"
			a=false
		}else{
			$scope.isdisabled=true
			$scope.yhglrevisebtn="修 改"
			a=true
		}
	}
})




myApp.controller('qx-jsgl',function($scope,$http,$state){//角色管理
	
})
myApp.controller('qx-jsglnew',function($scope,$http,$state,greeting){//新建角色
	$scope.tree=tree
	greeting.snav()
})
myApp.controller('qx-jsglsq',function($scope,$http,$state,greeting){//查看角色
	$scope.tree=tree
	greeting.snav()
})
myApp.controller('qx-cdgl',function($scope,$http,$state){//菜单管理
	
})
myApp.controller('qx-cdglnew',function($scope,$http,$state){//新建菜单
	
})
myApp.controller('qx-cdglcheck',function($scope,$http,$state){//查看菜单
	$scope.isdisabled=true;
	$scope.sure="修 改"
	var a=true
	$scope.cdglcheck=function(){
		if(a){
			$scope.isdisabled=false;
			$scope.sure="确 定"
			a=false
		}else{
			$scope.isdisabled=true;
			$scope.sure="修 改"
			a=true
		}
	}
})

myApp.controller('qx-zdgl',function($scope,$http,$state){//字典管理
	
})
myApp.controller('qx-zdglnew',function($scope,$http,$state){//新建字典
})
myApp.controller('qx-zdglcheck',function($scope,$http,$state){//查看字典
	$scope.isdisabled=true;
	$scope.sure="修 改"
	var a=true
	$scope.zdglcheck=function(){
		if(a){
			$scope.isdisabled=false;
			$scope.sure="修改完成"
			a=false
		}else{
			$scope.isdisabled=true;
			$scope.sure="确定"
			a=true
		}
	}
	
})


myApp.controller('qx-gngl',function($scope,$http,$state){//功能管理
	
})

myApp.controller('qx-gnglnew',function($scope,$http,$state){//新建功能
	
})
myApp.controller('qx-gnglcheck',function($scope,$http,$state){//查看功能
	
})



myApp.controller('qy-wzc',function($scope,$http,$state){//未注册
	
})
myApp.controller('qy-wzcchird',function($scope,$http,$state){//未注册chird
	
})
myApp.controller('qy-yzc',function($scope,$http,$state){//已注册
	
})
myApp.controller('qy-yzcchird',function($scope,$http,$state){//已注册chird
	
})



myApp.controller('wx-ysc',function($scope,$http,$state){//已上传
	
})
myApp.controller('wx-yscchird',function($scope,$http,$state){//已上传chird
//	var map = new BMap.Map("yscchirdmap");
//	var point = new BMap.Point(116.331398,39.897445);
//	map.centerAndZoom(point,19);
//	var geolocation = new BMap.Geolocation();
//	geolocation.getCurrentPosition(function(r){
//		if(this.getStatus() == BMAP_STATUS_SUCCESS){
//			var mk = new BMap.Marker(r.point);
//			map.addOverlay(mk);
//			map.panTo(r.point);
//			alert('您的位置：'+r.point.lng+','+r.point.lat);
//		}
//		else {
//			alert('failed'+this.getStatus());
//		}        
//	});

//var geolocation = new BMap.Geolocation();
//geolocation.getCurrentPosition(function(r){
//if(this.getStatus() == BMAP_STATUS_SUCCESS){
//alert('您的位置：'+r.point.lng+','+r.point.lat);
//}
//else {
//alert('failed'+this.getStatus());
//} 
//});



//if(navigator.geolocation) {
//  navigator.geolocation.getCurrentPosition(
//      function (position) {  
//          var longitude = position.coords.longitude;  
//          var latitude = position.coords.latitude;  
//          console.log(longitude)
//          console.log(latitude)
//          },
//          function (e) {
//           var msg = e.code;
//           var dd = e.message;
//           console.log(msg)
//           console.log(dd)
//      }
//    ) 
// }


//var map = new BMap.Map("yscchirdmap");
//var point = new BMap.Point(112.556396,37.879724);
//map.centerAndZoom(point,19);
//var geolocation = new BMap.Geolocation();
//// 开启SDK辅助定位
//geolocation.enableSDKLocation();
//geolocation.getCurrentPosition(function(r){
//	if(this.getStatus() == BMAP_STATUS_SUCCESS){
//		var mk = new BMap.Marker(r.point);
//		map.addOverlay(mk);
//		map.panTo(r.point);
//		alert('您的位置：'+r.point.lng+','+r.point.lat);
//	}
//	else {
//		alert('failed'+this.getStatus());
//	}        
//});



})
myApp.controller('wx-yscchirdchird',function($scope,$http,$state){//已上传chird
	
})
myApp.controller('wx-dbsj',function($scope,$http,$state){//待办数据
	
})
myApp.controller('wx-dbsjchird',function($scope,$http,$state){//待办数据chird
	
})
myApp.controller('wx-dbsjchirdchird',function($scope,$http,$state){//待办数据chird
	
})
myApp.controller('wx-ybsj',function($scope,$http,$state){//已办数据
	
})


myApp.controller('ksh-map',function($scope,$http,$state,mapp){
	$scope.diqu="太原市"
	
	$scope.serch=function(){
		$scope.diqu=$scope.select
		if($scope.diqu=="太原市"){
			map.centerAndZoom("太原市",10);
		}else{
			map.centerAndZoom("太原市"+$scope.diqu,11);
		}
		$scope.mapmap()
	}//改变地图区域
	
	$scope.close=function(){
		$("#allmaptable").css("display","none")
		$("#allmap").css("display","block")
	}
	
	var xon=xonn
	
	$scope.mapmap=function(){
		bdary.get("山西省"+$scope.diqu, function(rs){   //获取行政区域
			map.clearOverlays();//清除地图覆盖物
			var count = rs.boundaries.length;//行政区域的点有多少个
			if (count === 0) {
				alert('未能获取当前输入行政区域');
				return ;
			}
			for (var i = 0; i < count; i++) {
				var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 3, strokeColor: "#aaa",fillColor: "#d4d4d7",fillOpacity:0.5}); //建立多边形覆盖物
				map.addOverlay(ply);  //添加覆盖物
			}    
			var myIcon = new BMap.Icon("./img/1.png", new BMap.Size(30,30));
			
			 map.addEventListener("zoomend", function () {
                var u = this.getZoom();
				if(u>10){
					xon=xonnn
					$scope.mapmap()
				}else{
					xon=xonn
					$scope.mapmap()
				}
            });//滚动监听事件 显示marker数量
			
			var removeMarker = function(e,ee,marker){
				$("#allmaptable").css("display","block")
				$("#allmap").css("display","none")
			}///右击marker 查看详情
			
			
			
			for(var i=0;i<xon.length;i++ ){
				
				
				var markerMenu=new BMap.ContextMenu();
				markerMenu.addItem(new BMap.MenuItem('查看详情',removeMarker.bind(marker)));//将右击时间绑定在marker上面
				
				
				var marker = new BMap.Marker(new BMap.Point(xon[i].x,xon[i].y),{icon:myIcon}); // 创建标注
				map.addOverlay(marker);//添加描点
				marker.addContextMenu(markerMenu);
				
				var label = new BMap.Label(xon[i].name,{
		          offset:new BMap.Size(21,0),
		          color:"red",
		        });
		        marker.setLabel(label);//添加红框标注
		        
		        
				var html="<div style='margin-top:10px;'class='"+xon[i].class+"'>"
				+"<p style='font-size:18px;color:#fff;height:30px;line-height:30px;background-color:#102041;text-align:center;'>"+ xon[i].name + " 风 险 点"+"</p>"
				+"<p style='font-size:15px;color:#fff;height:30px;line-height:30px;background-color:red;border-radius:5px;padding-left:5px;' onclick='nmb(1)'>"+"红色风险"+ "<span>"+xon[i].red+"</span>"+ "</p>"+
				"<p style='font-size:15px;color:#fff;height:30px;line-height:30px;background-color:orange;border-radius:5px;padding-left:5px;' onclick='nmb(2)'>"+"橙色风险"+"<span>"+ xon[i].orange+"</span>" + "</p>"+
				"<p style='font-size:15px;color:#fff;height:30px;line-height:30px;background-color:gold;border-radius:5px;padding-left:5px;' onclick='nmb(3)'>"+"黄色风险"+ "<span>"+xon[i].yellow+"</span>" + "</p>"+
				"<p style='font-size:15px;color:#fff;height:30px;line-height:30px;background-color:blue;border-radius:5px;padding-left:5px;' onclick='nmb(4)'>"+ "蓝色风险"+"<span>"+xon[i].blue+"</span>" + "</p>"+
				"</div>"
				
				$scope.addClickHandler(html,marker,xon[i].name,xon[i].red,xon[i].orange,xon[i].yellow,xon[i].blue);//点击事件
				
				$scope.addrightClickHandler(html,marker,xon[i].name,xon[i].red,xon[i].orange,xon[i].yellow,xon[i].blue);//右击事件
			}
		}); 
	}
	$scope.mapmap()
	
	
	
	$scope.addClickHandler=function(html,marker,namea,reda,orangea,yellowa,bluea){
			marker.addEventListener("click",function(e){
				$scope.openInfo(html,marker,reda)
				$(".reda").html(" "+reda)
				$(".orangea").html(" "+orangea)
				$(".yellowa").html(" "+yellowa)
				$(".bluea").html(" "+bluea)
				$(".namea").html(namea )
				$(".zonga").html(reda+orangea+yellowa+bluea)
			});
		}
	$scope.addrightClickHandler=function(html,marker,namea,reda,orangea,yellowa,bluea){
		marker.addEventListener("rightclick", function(e){
			$("#dfgh").html(namea)
		});
	}
		
		
	$scope.openInfo=function(html,marker,reda){
		var p = marker.getPosition();
		var point = new BMap.Point(p.lng, p.lat);
		var infoWindow = new BMap.InfoWindow(html);  // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	}
	
	
})


function nmb(a){
//	alert(a)	
		$("#allmaptable").css("display","block")
		$("#allmap").css("display","none")
}


myApp.controller('ksh-chart',function($scope,$http,$state){
	
	var kshchartpieleft = echarts.init(document.getElementById('ksh-chart-pieleft'));
	kshchartpieleft.setOption({
//		title: {
//	        text: '今日产量比',
//	        x:"center",
//	        y:"bottom"
//	    },
		color: ['blue', 'gold', 'orange', 'red'],
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data:['蓝色风险','黄色风险','橘色风险','红色风险']
	    },
	    series: [
	        {
	            name:'风险占比',
	            type:'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:80, name:'蓝色风险'},
	                {value:150, name:'黄色风险'},
	                {value:170, name:'橘色风险'},
	                {value:250, name:'红色风险'},
	            ],
	        }
	    ]
	});
	
	
	var kshchartpieright = echarts.init(document.getElementById('ksh-chart-pieright'),'shine');
	kshchartpieright.setOption({
		
//		title: {
//	        text: '实时产量图',
//	        x:"center",
//	        y:"bottom"
//	    },
	    xAxis: {
	        type: 'category',
	        data: ['蓝色风险', '黄色风险', '橘色风险', '红色风险']
	    },
	    yAxis: {
	        type: 'value'
	    },
	     tooltip: {
	        formatter: "{a} <br/>{b}: {c}"
	    },
	    series: [{
	    	name:'风险值',
	        data: [80, 150, 170, 250],
	        type: 'bar',
	        itemStyle:{
             	normal:{
             		color:function(params){
             			if(params.value==80){
             				return 'blue'
             			}else if(params.value==150){
             				return '#FFCC00'
             			}else if(params.value==170){
             				return '#FF6600'
             			}else{
             				return 'red'
             			}
             		}
             	}
            },
	    }]
	});
	
	
	
	var kshchartbar = echarts.init(document.getElementById('ksh-chart-bar'));
	kshchartbar.setOption({
		color: ['red', 'orange', 'gold', 'blue'],
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
	        data: ['红色风险', '橙色风险', '黄色风险', '蓝色风险']
	    },
//	    calculable: true,
	    xAxis: [
	        {
	            type: 'category',
	            axisTick: {show: false},
	            data: ['1', '2', '3', '4', '5','6','7','8','9','10','11']
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value'
	        }
	    ],
	    series: [
	        {
	            name: '红色风险',
	            type: 'bar',
	            barGap: 0,
	            data: [320, 332, 301, 334, 390,250,260,270,280,290,310]
	        },
	        {
	            name: '橙色风险',
	            type: 'bar',
	            data: [220, 182, 191, 234, 290,260,270,280,290,300,320]
	        },
	        {
	            name: '黄色风险',
	            type: 'bar',
	            data: [150, 232, 201, 154, 190,270,280,290,300,310,330]
	        },
	        {
	            name: '蓝色风险',
	            type: 'bar',
	            data: [98, 77, 101, 99, 40,280,290,300,310,320,340]
	        }
	    ]
	});
	
	
	var kshchartline = echarts.init(document.getElementById('ksh-chart-line'));
	kshchartline.setOption({
		color: ['red', 'orange', 'gold', 'blue'],
		title: {
	        text: '折线图堆叠'
	    },
	    tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['红色风险','橙色风险','黄色风险','蓝色风险']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: ['1','2','3','4','6','6','7']
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [
	        {
	            name:'红色风险',
	            type:'line',
	            stack: '总量',
	            data:[120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name:'橙色风险',
	            type:'line',
	            stack: '总量',
	            data:[220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name:'黄色风险',
	            type:'line',
	            stack: '总量',
	            data:[150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'蓝色风险',
	            type:'line',
	            stack: '总量',
	            data:[320, 332, 301, 334, 390, 330, 320]
	        }
	    ]
	});
	
	
	
})

myApp.service("mapp", function($http){
	
	this.mapred=""

   	
})
myApp.service("greeting", function($http){
   	this.timedate=function(){
   		$("#date01").jeDate({
		    isinitVal:true,
		    //festival:true,
		    ishmsVal:false,
		    minDate: '2016-06-16 23:59:59',
		    maxDate: $.nowDate({DD:0}),
		    format:"YYYY-MM-DD hh:mm:ss",
		    zIndex:3000,
		})
		$("#date02").jeDate({
		    isinitVal:true,
		    //festival:true,
		    ishmsVal:false,
		    minDate: '2016-06-16 23:59:59',
		    maxDate: $.nowDate({DD:0}),
		    format:"YYYY-MM-DD hh:mm:ss",
		    zIndex:3000,
		})
   	}
   	
   	this.snav=function(){
   		$(function(){
			$(".yiz").each(function(index){
				var i = index
				$(this).click(function(){
					$(".er").eq(i).slideToggle(200)
					$(".er").not($(".er").eq(i)).slideUp(200)
				})
			})	
		
			$(".erz").each(function(index){
				var i = index
				$(this).click(function(){
					$(".san").eq(i).slideToggle(200)
					$(".san").not($(".san").eq(i)).slideUp(200)
				})
			})	
		})
   	}
   	
})


var tree=[{
	"name": "icon-bar-chart",
	"id": "临汾市监控室",
	"check": "checkk",
	"navli": [{
		"name": "icon-bar-chart",
		"check": "checkk",
		"li": "翼城县监控室",
		"sanji": [{
			"router": ".zoneone",
			"sanli": "蒲县宏源集团凤凰台煤业有限公司"
		}, {
			"router": ".zoneone",
			"sanli": "山西乡宁焦煤集团台头煤焦有限责任公司"
		}, {
			"router": ".zoneone",
			"sanli": "山西安泽玉华煤业有限公司"
		}, {
			"router": ".zoneone",
			"sanli": "蒲县宏源集团官庄河煤业有限公司"
		}, {
			"router": ".zoneone",
			"sanli": "山西煤炭运销集团吉县盛平煤业有限公司"
		}, {
			"router": ".zoneone",
			"sanli": "山西古县兰花宝欣煤业有限公司"
		}, {
			"router": ".zoneone",
			"sanli": "山西保利裕丰煤业有限公司"
		}]
	}]	
}]