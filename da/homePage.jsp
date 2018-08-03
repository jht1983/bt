<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, 

maximum-scale=1.0, user-scalable=no">
<title>趋势分析</title>
<style>
	html{
		height:100%;//让html的高度等于屏幕	 	
	}
	body{
		height:100%;
		margin:0;
	}
	.list .labelFour{
		float:left;
	}
	.tt {
		width:1000px;	 
	    margin-right: 4%;	    
	    font-weight:bold;
	}
	.setting{
    	position:absolute;
    	top:0.2%;
    	right:3%; 
    } 
    #queryarea{    	
    	margin-bottom: 0.5%;
    }
    .label-margin{
    	margin-right: 0.2%;
    	font-size:1.1vw;
    }
    .input-select{
    	display:inline-block;
    	width:6vw;
    }
    .input-select.input-time{
    	display:inline-block;
    	height:100%;
    	width:8vw;
    }
  	.btn-float{
  		float:right !important;
  	}
  	.project-title{
    	background:#847CC5;
    }
  	.project-title-two{
    	background:#74B749;
    }
    .project-title-three{
    	background:#F37B53;
    }
  	.project-title-four{
    	background:#9D4A9C;
    }
  	.project-title-five{
    	background:#DE577B;
    }
  	.project-title-six{
   		background:#0AC283;
   	} 
   	.project-left,
   	.project-center,
   	.project-right,
   	.project-left2,
   	.project-center2,
   	.project-right2{
   		height:100%;	
  	}
  	.project-title,
  	.project-title-two,
  	.project-title-three,
  	.project-title-four,
  	.project-title-five,
  	.project-title-six{
    	height:16%; 
   	}
  	.project-title span,
  	.project-title-two span,
  	.project-title-three span,
  	.project-title-four span,
  	.project-title-five span,
  	.project-title-six span{
    	font-size:1.4vw;
    	color:white;  	
    }
 	.project-title span i,
 	.project-title-two span i,
 	.project-title-three span i,
 	.project-title-four span i,
 	.project-title-five span i,
 	.project-title-six span i{
    	font-size:0.1vw;
    	font-style:normal;
    } 
  	.project-content{
  		border: 1px solid #847CC5;
  	}
  	.project-content-two{
  		border: 1px solid #74B749;
  	}
  	.project-content-three{
  		border: 1px solid #F37B53;
  	}
  	.project-content-four{
  		border: 1px solid #9D4A9C;
  	}
  	.project-content-five{
  		border: 1px solid #DE577B;
  	}
   	.project-content-six{
  		border: 1px solid #0AC283;
  	}
  	.project-content,
  	.project-content-two,
  	.project-content-three,
  	.project-content-four,
  	.project-content-five,
  	.project-content-six{
  		border-top: none;
  		height: 84%;
  	}
</style>
</head>
<body>
	<%@ include file="/bxui/bxuihead.jsp"%>	
	<script type="text/javascript" src="<%=toolkitPath%>/bxui/baosight-require.js"></script>
	<script type="text/javascript" src="<%=toolkitPath%>/common/echarts/echarts.js"></script>
	<script type="text/javascript" src="<%=toolkitPath%>/da/homePage.js"></script>
	<script type="text/javascript" src="<%=toolkitPath%>/da/dateTime.js"></script>
	<%-- <script language="javascript" type="text/javascript" src="<%=toolkitPath%>/common/My97DatePicker/My97DatePicker/WdatePicker.js"></script>
 	--%>
	<link rel="stylesheet" href="<%=toolkitPath%>/bxui/other/css/style-frame-inner.css" />
	
		<div class="page-content contentFrame" style="height:100%;">
			<div class="col-sm-12 col-xs-12 col-md-12" style="height:100%;">
				<div class="row" style="height:100%;">									
					<div class="col-sm-12 col-xs-12  col-md-12" style="height:5%;margin-bottom: 0.3%;">			
							<div  class="col-sm-1 col-xs-1  col-md-1" style="overflow: hidden;"></div>			
						    <div id="row" class="col-sm-10 col-xs-10  col-md-10" style="overflow: hidden;">
						        <table >
						            <tbody>
						                <tr>
						                    <td id="colee_left1" valign="top">
						                        <table>
						                            <tbody>
						                                <tr align="center">
						                                    <td>
						                                        <p class="tt" >							                                    
						                                        	<font id="gname" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	欢迎登录宝田生产指挥系统！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	 <font id="date" ></font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	一号生产线：<font id="tagsline1a" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	二号生产线：<font id="tagsline2a" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	三号生产线：<font id="tagsline3a" color="red"></font>&nbsp;&nbsp;&nbsp;
						                                        </p>
						                                    </td>
						                                     <td>
						                                        <p class="tt" >
						                                        	<font id="gname2" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	欢迎登录宝田生产指挥系统！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	<font id="date2" ></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	一号生产线：<font id="tagsline1b" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	二号生产线：<font id="tagsline2b" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	三号生产线：<font id="tagsline3b" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        </p>
						                                    </td>  
						                                     <td>
						                                        <p class="tt" >
						                                        	<font id="gname3" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	欢迎登录宝田生产指挥系统！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	<font id="date3" ></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	一号生产线：<font id="tagsline1c" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	二号生产线：<font id="tagsline2c" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        	三号生产线：<font id="tagsline3c" color="red"></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						                                        </p>
						                                    </td>                      
						                                </tr>
						                            </tbody>
						                        </table>
						                    </td>
						                    <td id="colee_left2" valign="top" style="visibility:hidden;" >
						                    </td>
						                </tr>
						            </tbody>
						        </table>
						    </div>						
							<div class="col-sm-1 col-xs-1 col-md-1" class="setting">
								<img id="img"  src="../common/images/config.png" style="width:40%;height:40%;" /> 
							</div>
						</div>
						<div  class="col-sm-12 col-xs-12 col-md-12" style="display:none;height:8%;" id="queryarea">
							<div class="col-sm-2 col-xs-2 col-md-2">
								<label class="label-margin">时间粒度</label>
								<div type="text" id="inqu_status-timeGran" class="input-select"  data-bxwidget="bxcombobox"onclick="changeDate();" >
								</div>
							</div>
							<div style= "display:none;">
								<label> 
								<input name="form-field-radio" type="radio" value="1" checked="checked"class="ace" /> 
									<span class="lbl"> 趋势</span>
								</label>
								<label> 
									<input name="form-field-radio" type="radio" value="2"class="ace" /> 
									<span class="lbl"> 对比</span>
								</label>
							</div>	
							<div class="col-sm-2 col-xs-2 col-md-2">
	                         	<label class="label-margin">生&nbsp;&nbsp;产&nbsp;线</label> 
								<div type="text" id="inqu_status-tagLine" class="input-select" data-bxwidget="bxcombobox" ></div>
	                      	</div>
							<div class="col-sm-5 col-xs-5 col-md-5">							
								<div class="col-sm-6 col-xs-12 col-md-6 col-lg-6">
									<label 	id="label_time" class="label-margin">起始时间</label> 
									<input 	id="inqu_status-startTime" 	class="Wdate input-select input-time" type="text"  onfocus="startTime();"/>
								</div>
								<div  class="col-sm-6 col-xs-12 col-md-6 col-lg-6">		
									<label 	id="label" class="label-margin">终止时间</label>  
									<input 	id="inqu_status-endTime"	class="Wdate input-select input-time" type="text"  onfocus="endTime();"/>
								</div>
							</div>
							<div class="col-sm-1 col-xs-1 col-md-1" ></div>
							<div class="col-sm-2 col-xs-2 col-md-2" style="float:right;" >
								<button class="btn btn-sm  btn-block" onclick="on_query_click();" >
									<div class="ace-icon fa fa-search"></div>
									<span>查询</span>
								</button>
							</div>
						</div>												
						<div class="row" style="height:88%;">									
							<div class="col-sm-12 col-xs-12 col-md-12" style="height:48%;">
								<!-- 产品产量 -->
								<div class="col-sm-4 col-xs-4 col-md-4 project-left">
									<div id="spn" class="col-sm-12 col-xs-12 col-md-12 project-title">
										<span id="di">产品产量<i>（单位:t）</i></span>
									</div>
									<div id="bardemostandard3" class="col-sm-12 col-xs-12 col-md-12 no-padding project-content"></div>
								</div>
								<!-- 产品发货量 -->
								<div class="col-sm-4 col-xs-4 col-md-4 project-center">
									<div id="spn2" class="col-sm-12 col-xs-12 col-md-12 project-title-two">
										<span id="di2">产品发货量<i>（单位:t）</i></span>
									</div>
									<div id="bardemostandard2" class="col-sm-12 col-xs-12 col-md-12 no-padding project-content-two"></div>
								</div>
								<!-- 原料使用量 -->	
								<div class="col-sm-4 col-xs-4 col-md-4 project-right">
									<div id="spn3" class="col-sm-12 col-xs-12 col-md-12 project-title-three">
										<span id="di3">原料使用量<i>（单位:t）</i></span>
									</div>
									<div id="bardemostandard" class="col-sm-12 col-xs-12 col-md-12 no-padding project-content-three"></div>
								</div>	
							</div>	
							<div class="col-sm-12 col-xs-12 col-md-12" style="height:4%;"></div>
							<div class="col-sm-12 col-xs-12 col-md-12" style="height:48%;">
								<!-- 能介单耗   -->
								<div class="col-sm-4 col-xs-4 col-md-4 project-left2">
									<div id="spn4" class="col-sm-12 col-xs-12 col-md-12 project-title-four">
										<span id="di4">能介单耗<i>（单位:kg）</i></span>
									</div>
									<div id="bardemostandard4" class="col-sm-12 col-xs-12 col-md-12 no-padding project-content-four"></div>
								</div>
								<!-- 能源消耗  -->
								<div class="col-sm-4 col-xs-4 col-md-4 project-center2">
									<div id="spn5" class="col-sm-12 col-xs-12 col-md-12 project-title-five">
										<span id="di5">能源消耗<i>（单位:kg）</i></span>
									</div>
									<div id="bardemostandard5" class="col-sm-12 col-xs-12 col-md-12 no-padding project-content-five"></div>
								</div>
								<div class="col-sm-4 col-xs-4 col-md-4 project-right2">
									<div id="spn6" class="col-sm-12 col-xs-12 col-md-12 project-title-six">
										<span id="di6">环保数据<i>（待定）</i></span>
									</div>
									<div id="bardemostandard5" class="col-sm-12 col-xs-12 col-md-12 no-padding project-content-six"></div>
								</div>
							</div>		
						</div>														
					</div>
				</div>
			</div>
	<script type="text/javascript">
	 var speed = 30;
	    //速度数值越大速度越慢
	    var colee_left2 = document.getElementById("colee_left2");
	    var colee_left1 = document.getElementById("colee_left1");
	    var colee_left = document.getElementById("row");
	    colee_left2.innerHTML = colee_left1.innerHTML;
	    function Marquee3() {
	            if (colee_left2.offsetWidth - colee_left.scrollLeft <= 0){//offsetWidth 是对象的可见宽度
	                    colee_left.scrollLeft -= colee_left1.offsetWidth//scrollWidth 是对象的实际内容的宽，不包边线宽度
	        }
	        else {
	            colee_left.scrollLeft++;
	        }
	    }
	    var MyMar3 = setInterval(Marquee3, speed);
</script>
</body>
</html>