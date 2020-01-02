var myApp = angular.module("app", ["ui.router","ui.bootstrap"]);
myApp.config(function ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.when("", "/login");
	$stateProvider
	 .state('login', {
		 url: '/login',
	    views: {
	        '': {
	            templateUrl: 'login.html',
	            controller:"login"
	        }
	       }
	})
	 
	 .state('registe', {
		url: '/registe',
	    views: {
	        '': {
	            templateUrl: 'registe.html',
	            controller:"registe"
	        },
	        'center@registe': {
	            templateUrl: 'registemessage.html',
	            controller:"registemessage"
	        },
	    }
	})
	 .state('registe.registesuccess', {
		 url: '/registesuccess',
	    views: {
	        'center@registe': {
	            templateUrl: 'registesuccess.html',
	            controller:"registesuccess"
	        },
	    }
	})
	
	.state('reviseregiste', {
		 url: '/reviseregiste',
	    views: {
	        '': {
	            templateUrl: 'reviseregiste.html',
	            controller:"reviseregiste"
	        },
	    }
	})
	 
	
	.state('homepage', {
		 url: '/homepage',
		  params:{name:""},
	    views: {
	        '': {
	            templateUrl: 'homepage.html',
	            controller:"homepage"
	        },
	        'center@homepage': {
	            templateUrl: 'homepageview.html',
	            controller:"homepageview"
	        },
	    }
	})
//	
	.state('homepage.home', {
        url: '/home',
        views: {
            'right@homepage': {
                templateUrl: 'components/home.html',
                controller: 'home'
            }
           
        }
    })
	
	.state('homepage.home.hometz', {
        url: '/hometz',
        views: {
            'right@homepage': {
                templateUrl: 'components/hometz.html',
                controller: 'hometz'
            }
           
        }
    })
	.state('homepage.home.homegg', {
        url: '/homegg',
        views: {
            'right@homepage': {
                templateUrl: 'components/homegg.html',
                controller: 'homegg'
            }
           
        }
    })
	
	
	
	.state('homepage.xt-personal', {
        url: '/xt-personal',
        views: {
            'right@homepage': {
                templateUrl: 'components/system/personal.html',
                controller: 'xt-personal'
            }
           
        }
    })
	.state('homepage.xt-rzjl', {
        url: '/xt-rzjl',
        views: {
            'right@homepage': {
                templateUrl: 'components/system/rzjl.html',
                controller: 'xt-rzjl'
            }
           
        }
    })
	.state('homepage.xt-xgmm', {
        url: '/xt-xgmm',
        views: {
            'right@homepage': {
                templateUrl: 'components/system/xgmm.html',
                controller: 'xt-xgmm'
            }
           
        }
    })
	.state('homepage.xt-xgmm.xt-xgmmchird', {
        url: '/xt-xgmmchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/system/xgmmchird.html',
                controller: 'xt-xgmmchird'
            }
           
        }
    })
	.state('homepage.xt-xxts', {
        url: '/xt-xxts',
        views: {
            'right@homepage': {
                templateUrl: 'components/system/xxts.html',
                controller: 'xt-xxts'
            }
           
        }
    })
	.state('homepage.xt-xxts.xt-xxtschird', {
        url: '/xt-xxtschird',
        views: {
            'right@homepage': {
                templateUrl: 'components/system/xxtschird.html',
                controller: 'xt-xxtschird'
            }
           
        }
    })
	
	
	.state('homepage.qx-bmgl', {
        url: '/qx-bmgl',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/bmgl.html',
                controller: 'qx-bmgl'
            }
           
        }
    })
	.state('homepage.qx-bmgl.qx-bmglnew', {
        url: '/qx-bmglnew',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/bmglnew.html',
                controller: 'qx-bmglnew'
            }
           
        }
    })
	.state('homepage.qx-bmgl.qx-bmgldetails', {
        url: '/qx-bmgldetails',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/bmgldetails.html',
                controller: 'qx-bmgldetails'
            }
           
        }
    })
	
	
	
	.state('homepage.qx-yhgl', {
        url: '/qx-yhgl',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/yhgl.html',
                controller: 'qx-yhgl'
            }
           
        }
    })
	.state('homepage.qx-yhgl.qx-yhglnew', {
        url: '/qx-yhglnew',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/yhglnew.html',
                controller: 'qx-yhglnew'
            }
           
        }
    })
	.state('homepage.qx-yhgl.qx-yhglrevise', {
        url: '/qx-yhglrevise',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/yhglrevise.html',
                controller: 'qx-yhglrevise'
            }
           
        }
    })
	
	
	.state('homepage.qx-jsgl', {
        url: '/qx-jsgl',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/jsgl.html',
                controller: 'qx-jsgl'
            }
           
        }
    })
	.state('homepage.qx-jsgl.qx-jsglnew', {
        url: '/qx-jsglnew',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/jsglnew.html',
                controller: 'qx-jsglnew'
            }
           
        }
    })
	.state('homepage.qx-jsgl.qx-jsglsq', {
        url: '/qx-jsglsq',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/jsglsq.html',
                controller: 'qx-jsglsq'
            }
           
        }
    })
	
	
	
	.state('homepage.qx-cdgl', {
        url: '/qx-cdgl',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/cdgl.html',
                controller: 'qx-cdgl'
            }
           
        }
    })
	.state('homepage.qx-cdgl.qx-cdglnew', {
        url: '/qx-cdglnew',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/cdglnew.html',
                controller: 'qx-cdglnew'
            }
           
        }
    })
	.state('homepage.qx-cdgl.qx-cdglcheck', {
        url: '/qx-cdglcheck',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/cdglcheck.html',
                controller: 'qx-cdglcheck'
            }
           
        }
    })
	
	.state('homepage.qx-zdgl', {
        url: '/qx-zdgl',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/zdgl.html',
                controller: 'qx-zdgl'
            }
           
        }
    })
	.state('homepage.qx-zdgl.qx-zdglnew', {
        url: '/qx-zdglnew',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/zdglnew.html',
                controller: 'qx-zdglnew'
            }
           
        }
    })
	.state('homepage.qx-zdgl.qx-zdglcheck', {
        url: '/qx-zdglcheck',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/zdglcheck.html',
                controller: 'qx-zdglcheck'
            }
           
        }
    })
	
	.state('homepage.qx-gngl', {
        url: '/qx-gngl',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/gngl.html',
                controller: 'qx-gngl'
            }
           
        }
    })
	
	.state('homepage.qx-gngl.qx-gnglnew', {
        url: '/qx-gnglnew',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/gnglnew.html',
                controller: 'qx-gnglnew'
            }
           
        }
    })
	
	.state('homepage.qx-gngl.qx-gnglcheck', {
        url: '/qx-gnglcheck',
        views: {
            'right@homepage': {
                templateUrl: 'components/rbac/gnglcheck.html',
                controller: 'qx-gnglcheck'
            }
           
        }
    })
	
	
	
	.state('homepage.qy-wzc', {
        url: '/qy-wzc',
        views: {
            'right@homepage': {
                templateUrl: 'components/company/wzc.html',
                controller: 'qy-wzc'
            }
           
        }
    })
	.state('homepage.qy-wzc.qy-wzcchird', {
        url: '/qy-wzcchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/company/wzcchird.html',
                controller: 'qy-wzcchird'
            }
           
        }
    })
	
	
	.state('homepage.qy-yzc', {
        url: '/qy-yzc',
        views: {
            'right@homepage': {
                templateUrl: 'components/company/yzc.html',
                controller: 'qy-yzc'
            }
           
        }
    })
	
	.state('homepage.qy-yzc.qy-yzcchird', {
        url: '/qy-yzcchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/company/yzcchird.html',
                controller: 'qy-yzcchird'
            }
           
        }
    })
	
	
	
	.state('homepage.wx-ysc', {
        url: '/wx-ysc',
        views: {
            'right@homepage': {
                templateUrl: 'components/hazard/ysc.html',
                controller: 'wx-ysc'
            }
           
        }
    })
	.state('homepage.wx-ysc.wx-yscchird', {
        url: '/wx-yscchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/hazard/yscchird.html',
                controller: 'wx-yscchird'
            }
           
        }
    })
	.state('homepage.wx-ysc.wx-yscchirdchird', {
        url: '/wx-yscchirdchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/hazard/yscchirdchird.html',
                controller: 'wx-yscchirdchird'
            }
           
        }
    })
	
	
	
	.state('homepage.wx-dbsj', {
        url: '/wx-dbsj',
        views: {
            'right@homepage': {
                templateUrl: 'components/hazard/dbsj.html',
                controller: 'wx-dbsj'
            }
           
        }
    })
	
	.state('homepage.wx-dbsj.wx-dbsjchird', {
        url: '/wx-dbsjchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/hazard/dbsjchird.html',
                controller: 'wx-dbsjchird'
            }
           
        }
    })
	
	.state('homepage.wx-dbsj.wx-dbsjchirdchird', {
        url: '/wx-dbsjchirdchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/hazard/dbsjchirdchird.html',
                controller: 'wx-dbsjchirdchird'
            }
           
        }
    })
	
	.state('homepage.wx-ybsj', {
        url: '/wx-ybsj',
        views: {
            'right@homepage': {
                templateUrl: 'components/hazard/ybsj.html',
                controller: 'wx-ybsj'
            }
           
        }
    })
	
	
	.state('homepage.fxdgk', {//风险点管控
        url: '/fxdgkhome',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdgk/fxdgkhome.html',
                controller: 'fxdgkhome'
            }
           
        }
    })
	
	.state('homepage.fxdgkdetails', {//企业登录风险点管控查看
        url: '/fxdgkdetails',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdgk/fxdgkdetails.html',
                controller: 'fxdgkdetails'
            }
           
        }
    })
	
	.state('homepage.fxdgk.fxdgkdetails', {//政府登录风险点管控查看
        url: '/fxdgkdetails',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdgk/fxdgkdetails.html',
                controller: 'fxdgkdetails1'
            }
           
        }
    })
	
//	.state('homepage.fxdgk.fxdgkoperation', {
//      url: '/fxdgkoperation',
//      views: {
//          'right@homepage': {
//              templateUrl: 'components/fxdgk/fxdgkoperation.html',
////              controller: 'fxdgkoperation'
//          }
//         
//      }
//  })
	
	
	
	.state('homepage.fxdpc', {//风险排查
        url: '/fxdpchome',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdpc/fxdpchome.html',
                controller: 'fxdpchome'
            }
           
        }
    })
	
	.state('homepage.fxdpcdetails', {//企业登录风险点排查查看
        url: '/fxdpcdetails',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdpc/fxdpcdetails.html',
                controller: 'fxdpcdetails'
            }
           
        }
    })
	
	
	.state('homepage.fxdpc.fxdpcdetails', {//政府登录风险点排查查看
        url: '/fxdgkdetails',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdpc/fxdpcdetails.html',
                controller: 'fxdpcdetails1'
            }
           
        }
    })
	
	.state('homepage.fxdpc.fxdpcoperation', {//风险点排查操作政府
        url: '/fxdpcoperation1',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdpc/fxdpcoperation.html',
                controller: 'fxdpcoperation1'
            }
           
        }
    })
	
	.state('homepage.fxdpcdetails.fxdpcoperation', {//风险点排查操作企业
        url: '/fxdpcoperation',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdpc/fxdpcoperation.html',
                controller: 'fxdpcoperation'
            }
           
        }
    })
	
	
	
	.state('homepage.fxdzl-pczg', {//政府登录风险治理排查整改
        url: '/fxdzl-pczg',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/pczghome.html',
                controller: 'fxdzl-pczg'
            }
           
        }
    })
	
	.state('homepage.pczgchird', {//企业登录风险治理排查整改
        url: '/pczgchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/pczgchird.html',
                controller: 'pczgchird'
            }
           
        }
    })
	
	.state('homepage.fxdzl-pczg.pczgchird', {//政府登录风险治理chird排查整改
        url: '/pczgchird1',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/pczgchird.html',
                controller: 'pczgchird1'
            }
           
        }
    })
	
	.state('homepage.fxdzl-pczg.pczgchird.pczgchirdchird', {//政府企业治理chirdchird排查整改
        url: '/pczgchirdchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/pczgchirdchird.html',
                controller: 'pczgchirdchird1'
            }
           
        }
    })
	
	.state('homepage.pczgchird.pczgchirdchird', {//企业企业治理chirdchird排查整改
        url: '/pczgchirdchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/pczgchirdchird.html',
                controller: 'pczgchirdchird'
            }
           
        }
    })
	
	
	
	
	.state('homepage.fxdzl-dbsj', {//政府登录风险治理待办数据
        url: '/fxdzl-dbsj',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/dbsjhome.html',
                controller: 'fxdzl-dbsj'
            }
           
        }
    })
	
	.state('homepage.dbsjchird', {//企业登录风险治理待办数据
        url: '/dbsjchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/dbsjchird.html',
                controller: 'dbsjchird'
            }
           
        }
    })
	
	.state('homepage.fxdzl-dbsj.dbsjchird', {//政府登录风险治理chird待办数据
        url: '/dbsjchird1',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/dbsjchird.html',
                controller: 'dbsjchird1'
            }
           
        }
    })
	
	.state('homepage.fxdzl-dbsj.dbsjchird.dbsjchirdchird', {//政府企业治理chirdchird待办数据
        url: '/dbsjchirdchird1',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/dbsjchirdchird.html',
                controller: 'dbsjchirdchird1'
            }
           
        }
    })
	
	.state('homepage.dbsjchird.dbsjchirdchird', {//企业企业治理chirdchird  企业待办数据
        url: '/dbsjchirdchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/dbsjchirdchird.html',
                controller: 'dbsjchirdchird'
            }
           
        }
    })
	
	
	
	.state('homepage.fxdzl-ybsj', {//政府登录风险治理已办数据
        url: '/fxdzl-ybsj',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/ybsjhome.html',
                controller: 'fxdzl-ybsj'
            }
           
        }
    })
	
	.state('homepage.ybsjchird', {//企业登录风险治理已办数据
        url: '/ybsjchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/ybsjchird.html',
                controller: 'ybsjchird'
            }
           
        }
    })
	
	.state('homepage.fxdzl-ybsj.ybsjchird', {//政府登录风险治理chird已办数据
        url: '/ybsjchird1',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/ybsjchird.html',
                controller: 'ybsjchird1'
            }
           
        }
    })
	
	.state('homepage.fxdzl-ybsj.ybsjchird.ybsjchirdchird', {//政府企业治理chirdchird已办数据  政府
        url: '/ybsjchirdchird1',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/ybsjchirdchird.html',
                controller: 'ybsjchirdchird1'
            }
           
        }
    })
	
	.state('homepage.ybsjchird.ybsjchirdchird', {//企业企业治理chirdchird已办数据  企业
        url: '/ybsjchirdchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/fxdzl/ybsjchirdchird.html',
                controller: 'ybsjchirdchird'
            }
           
        }
    })
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	.state('homepage.ksh-map', {
        url: '/ksh-map',
        views: {
            'right@homepage': {
                templateUrl: 'components/visualization/map.html',
                controller: 'ksh-map'
            }
           
        }
    })
	
	.state('homepage.ksh-chart', {
        url: '/ksh-chart',
        views: {
            'right@homepage': {
                templateUrl: 'components/visualization/chart.html',
                controller: 'ksh-chart'
            }
           
        }
    })
	
	
	.state('homepage.ksh-pcfx', {
        url: '/ksh-pcfx',
        views: {
            'right@homepage': {
                templateUrl: 'components/visualization/pcfx.html',
                controller: 'ksh-pcfx'
            }
           
        }
    })
	
	
	
	.state('homepage.gzqktjb', {
        url: '/gzqktjbhome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/gzqktjbhome.html',
                controller: 'gzqktjbhome'
            }
           
        }
    })
	.state('homepage.gzqktjb.gzqktjbchird', {
        url: '/gzqktjb',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/gzqktjb.html',
                controller: 'gzqktjb'
            }
           
        }
    })
	.state('homepage.gzqktjb.gzqktjbchirdchird', {
        url: '/gzqktjbchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/gzqktjbchird.html',
                controller: 'gzqktjbchird'
            }
           
        }
    })
	
	
	
	.state('homepage.aqscdjc', {
        url: '/aqscdjchome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/aqscdjchome.html',
                controller: 'aqscdjchome'
            }
           
        }
    })
	.state('homepage.aqscdjc.aqscdjcchird', {
        url: '/aqscdjc',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/aqscdjc.html',
                controller: 'aqscdjc'
            }
           
        }
    })
	.state('homepage.aqscdjc.aqscdjcchirdchird', {
        url: '/aqscdjcchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/aqscdjcchird.html',
                controller: 'aqscdjcchird'
            }
           
        }
    })
	
	
	.state('homepage.gpdbzdyh', {
        url: '/gpdbhome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/gpdbhome.html',
                controller: 'gpdbhome'
            }
           
        }
    })
	.state('homepage.gpdbzdyh.gpdbchird', {
        url: '/gpdbzdyh',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/gpdb.html',
                controller: 'gpdbzdyh'
            }
           
        }
    })
	.state('homepage.gpdbzdyh.gpdbchirdchird', {
        url: '/gpdbchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/gpdbchird.html',
                controller: 'gpdbchird'
            }
           
        }
    })
	
	
	
	
	
	.state('homepage.wzgzdyh', {
        url: '/wzgzdyhhome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/wzgzdyhhome.html',
                controller: 'wzgzdyhhome'
            }
           
        }
    })
	.state('homepage.wzgzdyh.wzgzdyhchird', {
        url: '/wzgzdyh',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/wzgzdyh.html',
                controller: 'wzgzdyh'
            }
           
        }
    })
	.state('homepage.wzgzdyh.wzgzdyhchirdchird', {
        url: '/wzgzdyhchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/wzgzdyhchird.html',
                controller: 'wzgzdyhchird'
            }
           
        }
    })
	
	
	.state('homepage.tctyzdqy', {
        url: '/tctyzdqyhome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/tctyzdqyhome.html',
                controller: 'tctyzdqyhome'
            }
           
        }
    })
	
	.state('homepage.tctyzdqy.tctyzdqychird', {
        url: '/tctyzdqy',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/tctyzdqy.html',
                controller: 'tctyzdqy'
            }
           
        }
    })
	
	.state('homepage.tctyzdqy.tctyzdqychirdchird', {
        url: '/tctyzdqychird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/tctyzdqychird.html',
                controller: 'tctyzdqychird'
            }
           
        }
    })
	
	.state('homepage.gbqdqy', {
        url: '/gbqdqyhome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/gbqdqyhome.html',
                controller: 'gbqdqyhome'
            }
           
        }
    })
	.state('homepage.gbqdqy.gbqdqychird', {
        url: '/gbqdqy',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/gbqdqy.html',
                controller: 'gbqdqy'
            }
           
        }
    })
	.state('homepage.gbqdqy.gbqdqychirdchird', {
        url: '/gbqdqychird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/gbqdqychird.html',
                controller: 'gbqdqychird'
            }
           
        }
    })
	
	.state('homepage.fxwtyhzg', {
        url: '/fxwtyhzghome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/fxwtyhzghome.html',
                controller: 'fxwtyhzghome'
            }
           
        }
    })
	.state('homepage.fxwtyhzg.fxwtyhzgchird', {
        url: '/fxwtyhzg',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/fxwtyhzg.html',
                controller: 'fxwtyhzg'
            }
           
        }
    })
	.state('homepage.fxwtyhzg.fxwtyhzgchirdchird', {
        url: '/fxwtyhzgchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/fxwtyhzgchird.html',
                controller: 'fxwtyhzgchird'
            }
           
        }
    })
	
	.state('homepage.yhwtlddb', {
        url: '/yhwtlddbhome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/yhwtlddbhome.html',
                controller: 'yhwtlddbhome'
            }
           
        }
    })
	
	.state('homepage.yhwtlddb.yhwtlddbchird', {
        url: '/yhwtlddb',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/yhwtlddb.html',
                controller: 'yhwtlddb'
            }
           
        }
    })
	
	.state('homepage.yhwtlddb.yhwtlddbchirdchird', {
        url: '/yhwtlddbchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/yhwtlddbchird.html',
                controller: 'yhwtlddbchird'
            }
           
        }
    })
	
	
	.state('homepage.zzwzqd', {
        url: '/zzwzqdhome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/zzwzqdhome.html',
                controller: 'zzwzqdhome'
            }
           
        }
    })
	.state('homepage.zzwzqd.zzwzqdchird', {
        url: '/zzwzqd',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/zzwzqd.html',
                controller: 'zzwzqd'
            }
           
        }
    })
	.state('homepage.zzwzqd.zzwzqdchirdchird', {
        url: '/zzwzqdchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/zzwzqdchird.html',
                controller: 'zzwzqdchird'
            }
           
        }
    })
	
	.state('homepage.lhcjhmd', {
        url: '/lhcjhmdhome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/lhcjhmdhome.html',
                controller: 'lhcjhmdhome'
            }
           
        }
    })
	.state('homepage.lhcjhmd.lhcjhmdchird', {
        url: '/lhcjhmd',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/lhcjhmd.html',
                controller: 'lhcjhmd'
            }
           
        }
    })
	.state('homepage.lhcjhmd.lhcjhmdchirdchird', {
        url: '/lhcjhmdchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/lhcjhmdchird.html',
                controller: 'lhcjhmdchird'
            }
           
        }
    })
	
	
	.state('homepage.tjqktjb', {
        url: '/tjqktjbhome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/tjqktjbhome.html',
                controller: 'tjqktjbhome'
            }
           
        }
    })
	
	.state('homepage.tjqktjb.tjqktjbchird', {
        url: '/tjqktjb',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/tjqktjb.html',
                controller: 'tjqktjb'
            }
           
        }
    })
	.state('homepage.tjqktjb.tjqktjbchirdchird', {
        url: '/tjqktjbchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/tjqktjbchird.html',
                controller: 'tjqktjbchird'
            }
           
        }
    })
	
	
	.state('homepage.aqscbbqd', {
        url: '/aqscbbqdhome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/aqscbbqdhome.html',
                controller: 'aqscbbqdhome'
            }
           
        }
    })
	.state('homepage.aqscbbqd.aqscbbqdchird', {
        url: '/aqscbbqdchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/aqscbbqdchird.html',
                controller: 'aqscbbqdchird'
            }
           
        }
    })
	
	
	.state('homepage.zdwxytjmxbhome', {
        url: '/zdwxytjmxbhome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/zdwxytjmxbhome.html',
                controller: 'zdwxytjmxbhome'
            }
           
        }
    })
	.state('homepage.zdwxytjmxbhome.zdwxytjmxbchird', {
        url: '/zdwxytjmxbchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/zdwxytjmxbchird.html',
                controller: 'zdwxytjmxbchird'
            }
           
        }
    })
	
	
	
	
	.state('homepage.scdjcjzb', {
        url: '/scdjcjzbhome',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/scdjcjzbhome.html',
                controller: 'scdjcjzbhome'
            }
           
        }
    })
	
	.state('homepage.scdjcjzb.scdjcjzbchird', {
        url: '/scdjcjzb',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/scdjcjzb.html',
                controller: 'scdjcjzb'
            }
           
        }
    })
	
	.state('homepage.scdjcjzb.scdjcjzbchirdchird', {
        url: '/scdjcjzbchird',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/scdjcjzbchird.html',
                controller: 'scdjcjzbchird'
            }
           
        }
    })
	
	
	.state('homepage.ylb', {
        url: '/ylb',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/ylb.html',
                controller: 'ylb'
            }
           
        }
    })
	.state('homepage.aqtj', {
        url: 'aqtj',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/aqtj.html',
                controller: 'aqtj'
            }
           
        }
    })
	.state('homepage.aqsczxzz', {
        url: 'aqsczxzz',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/aqsczxzz.html',
                controller: 'aqsczxzz'
            }
           
        }
    })
	.state('homepage.zdfxqk', {
        url: 'zdfxqk',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/zdfxqk.html',
                controller: 'zdfxqk'
            }
           
        }
    })
	.state('homepage.wzgzdaqyh', {
        url: 'wzgzdaqyh',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/wzgzdaqyh.html',
                controller: 'wzgzdaqyh'
            }
           
        }
    })
	.state('homepage.jzjcfxyh', {
        url: 'jzjcfxyh',
        views: {
            'right@homepage': {
                templateUrl: 'components/tablefrom/jzjcfxyh.html',
                controller: 'jzjcfxyh'
            }
           
        }
    })
})
	 