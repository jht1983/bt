<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>趋势分析</title>
<link rel="stylesheet" href="../common/iconfont/iconfont.css">
<style>
	html{
		height:100%;//让html的高度等于屏幕
	}
	body{
		height:100%;
		margin:0;
	}
	.list .labelFour{
		float:left 
	}
	.list .inputFour{
		float:left ;
		margin-left:3%;
	}
	 .wrapper{
		font-size: 1.2vw; 
		color: #333;  
		white-space: nowrap; 
		overflow: hidden;		
	 }
    .inner{ 
	    overflow:hidden;
    }
    .inner p{ 
    	display:inline-block;
    }
    .project-block{
    	color:#fff;
    	height:100%;
    }
    .icons{
    	font-size:8vw;
    }
    .project-title,
    .project-content{
    	background:#B2AAE0;
    }
    .project-title{
     	height:20%;
    }
    .project-title span{
    	font-size:1.4vw;
    }
     .project-title span i{
    	font-size:0.1vw;
    	font-style:normal;
    }
    .project-content,
    .project-left{
    	height:84%;
    }
     .project-left i{
     	line-height:12vw;
     }
    .project-left,
    .project-right{
    	display:inline-block;
    	height:100%;
    }
    .project-right-main img{
    	width:8%;
    	height:40%;
    	vertical-align: middle;
    	margin-top: 1vw;
    }
    .project-right-main{
    	display: flex;
    	justify-content: space-between;
    	height:33.33%;
    	line-height:3.5vw;
    }
    .project-right-main .project-data{
    	font-size:2.5vw;
    	font-weight:9vw;
    	font-family: '微软雅黑';
    }
    .project-title-two,
    .project-content-two{
    	background:#61b9ff;
    }
    .project-title-third,
    .project-content-third{
    	background:#FC7E52;
    }
</style>
</head>
<body>
	<%@ include file="/bxui/bxuihead.jsp"%>	
	<script type="text/javascript" src="<%=toolkitPath%>/bxui/baosight-require.js"></script>
	<script type="text/javascript" src="<%=toolkitPath%>/common/echarts/echarts.js"></script>
	<script type="text/javascript" src="<%=toolkitPath%>/da/homePage2.js"></script>
	<script type="text/javascript" src="<%=toolkitPath%>/da/dateTime.js"></script>
	<%-- <script language="javascript" type="text/javascript" src="<%=toolkitPath%>/common/My97DatePicker/My97DatePicker/WdatePicker.js"></script>
 	--%>
	<link rel="stylesheet" href="<%=toolkitPath%>/bxui/other/css/style-frame-inner.css" />
	
	<div class="jqgridFrame contentFrame" style="height:100%;">
		<div class="page-content contentFrame" style="height:100%;">
              <div class="col-sm-12 col-xs-12 col-md-12" style="height:100%;">
				<div class="col-sm-12 col-xs-12 col-md-12" style="height:100%;">
					<div class="row" style="height:100%;">									
						<div class="col-sm-12 col-xs-12  col-md-12" style="height:100%;">
							<div id="wrapper" class="row wrapper" style="height:5%;">
							    <div class="col-sm-12 col-xs-12 col-md-12 inner" >
							      <p class="txt" >
							      	<font id="gname" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;欢迎登录宝田生产指挥系统！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							      	<font id="date" ></font>&nbsp;&nbsp;&nbsp;&nbsp;
							      	一号生产线：<font id="tagsline1" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;
							      	二号生产线：<font id="tagsline2" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;
							      	三号生产线：<font id="tagsline3" color="red"></font>&nbsp;&nbsp;&nbsp;
							      </p>
							    </div>
							</div>				
							<div class="row" style="background-color:#ccc;height:7%;">
								<label style="font-size:1.3vw;font-weight:bold;margin-left: 1vw;color: white;padding:0.5vw 0;">生产概况</label>
							</div>												
							<div class="row" style="height:35%;">
								<div class="row" style="height:5%;"></div>
								<!-- 本期能耗 -->	
								 <div class="col-sm-6 col-xs-12 col-md-4 project-block">
								 	<div id="spn" class="col-sm-12 col-xs-12 col-md-12 project-title">
								 		<span id="di">产品产量<i>（单位:kg）</i></span>
								 	</div>
								 	<div class="col-sm-12 col-xs-12 col-md-12 no-padding project-content">
								 		<div class="project-left col-sm-4">
								 			<i class="iconfont icons">&#xe653;</i>
								 		</div>
								 		<div class="project-right col-sm-8">
								 			<div class="project-right-main project-right-year">
								 				<span>上一年</span>
								 				<span id="productYieldYear" class="project-data"></span>
								 				<img id="productYieldYearimg" />
								 			</div>
								 			<div class="project-right-main project-right-month">
								 				<span>上一月</span>
								 				<span id="productYieldMonth" class="project-data"></span>
								 				<img id="productYieldMonthimg"  />
								 			</div>
								 			<div class="project-right-main project-right-day">
								 				<span>上一天</span>
								 				<span id="productYieldDay" class="project-data"></span>
								 				<img id="productYieldDayimg" />
								 			</div>
								 		</div>
								 	</div>
								 </div>								 
								 <div class="col-sm-6 col-xs-12 col-md-4 project-block">
								 	<div id="spn2" class="col-sm-12 col-xs-12 col-md-12 project-title project-title-two">
								 		<span id="di2">产品发货量<i>（单位:kg）</i></span>
								 	</div>
								 	<div class="col-sm-12 col-xs-12 col-md-12 no-padding project-content project-content-two">
								 		<div class="project-left col-sm-4">
								 			<i class="iconfont icons">&#xe637;</i>	
								 		</div>
								 		<div class="project-right col-sm-8">
								 			<div class="project-right-main project-right-year">
								 				<span>上一年</span>
								 				<span id="productDeliveryYear" class="project-data"></span>
								 				<img id="productDeliveryYearimg"  />
								 			</div>
								 			<div class="project-right-main project-right-month">
								 				<span>上一月</span>
								 				<span id="productDeliveryMonth" class="project-data"></span>
								 				<img id="productDeliveryMonthimg"  />
								 			</div>
								 			<div class="project-right-main project-right-day">
								 				<span>上一天</span>
								 				<span id="productDeliveryDay" class="project-data"></span>
								 				<img id="productDeliveryDayimg" />
								 			</div>
								 		</div>
								 	</div>
								 </div>						 
								 <div class="col-sm-6 col-xs-12 col-md-4 project-block">
								 	<div id="spn3" class="col-sm-12 col-xs-12 col-md-12 project-title project-title-third">
								 		<span id="di3">原料使用量<i>（单位:kg）</i></span>
								 	</div>
								 	<div class="col-sm-12 col-xs-12 col-md-12 no-padding project-content project-content-third">
								 		<div class="project-left col-sm-4">
								 			<i class="iconfont icons">&#xe70e;</i>	
								 		</div>
								 		<div class="project-right col-sm-8">
								 			<div class="project-right-main project-right-year">
								 				<span>上一年</span>
								 				<span id="rawMaterialUseYear" class="project-data"></span>
								 				<img id="rawMaterialUseYearimg"  />
								 			</div>
								 			<div class="project-right-main project-right-month">
								 				<span>上一月</span>
								 				<span id="rawMaterialUseMonth" class="project-data"></span>
								 				<img id="rawMaterialUseMonthimg"  />
								 			</div>
								 			<div class="project-right-main project-right-day">
								 				<span>上一天</span>
								 				<span id="rawMaterialUseDay" class="project-data"></span>
								 				<img id="rawMaterialUseDayimg" />
								 			</div>
								 		</div>  
								 	</div>
								 </div>									 
							</div>													
							<div class="row" style="height:5%;"></div>
							<div class="row" style="height:35%;">
								<!-- 能源消耗  -->
								<div class="col-sm-6 col-xs-12 col-md-6" style="height:100%;">
									<div class="col-sm-12 col-xs-12 col-md-12" style="height:22%;background-color:#404040;">
										<label style="font-size:1.3vw;font-weight:bold;color:#fff;padding:0.5vw 0;">能源消耗</label>
									</div>
									<div class="col-sm-12 col-xs-12 col-md-12" id="energyConsumption" style="height:120%;border: 1px solid #404040;border-top: none;background-color:#F2F2F2;"></div>								
								</div>
								<!-- 能源单介  -->
								<div class="col-sm-6 col-xs-12 col-md-6" style="height:100%;">
									<div class="col-sm-12 col-xs-12 col-md-12" style="height:22%;background-color:#74B749;">
										<label style="font-size:1.3vw;font-weight:bold;color:#fff;padding:0.5vw 0;">能源单耗</label>
									</div>			  
									<div class="col-sm-12 col-xs-12 col-md-12" id="energySource" style="height:120%;border: 1px solid #74B749;border-top: none;background-color:#F2F2F2;"></div>
								</div>	
							</div>													
						</div>
					</div>				
				</div>
			</div>
		</div>
	</div>
</body>
</html>

