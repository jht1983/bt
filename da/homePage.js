$(document).ready(function () {
    baosightRequire.requireFunct(['bxgrid', 'bxdiv', 'bxdialog', 'bxalert', 'bxcombobox',
                                  'bxcharts','bxchartsbar','bxchartsline'],                        
               function () {  
		    	var defaultData1 = [{
		            label: "全部",
		            value: ""
		        }];
			       $("#inqu_status-tagLine").bxcombobox({
			    	   dataPattern: 'ccs',
		            ccsId: "producLine",
		            async: false,
		            data: defaultData1
			       });
                $("#queryarea").bxdiv();
                $("#inqu_status-timeGran").bxcombobox({
                    dataPattern: 'ccs',
                    ccsId: "timeGran",
                    async: false                  
                });
                //点击查询按钮进去点击事件
                on_query_click();  
            }); 
});
//点击事件
function on_query_click() {
	//前1天，前1月，前1年
	var TheOneDays = theOneDays();
	var TheOneMonth = theOneMonth();
	var TheOneYear = theOneYear();
	//前2天，前2月，前2年
	var TheTwoDays = theTwoDays();
	var TheTwoMonth = theTwoMonth();
	var TheTwoYear = theTwoYear();
	//前3天，前3月，前3年
	var TheThreeDays = theThreeDays();
	var TheThreeMonth = theThreeMonth();
	var TheThreeYear = theThreeYear();
	//前7天，前6月，前5年
	var TheSevenDays = theSevenDays();
	var TheSixMonth = theSixMonth();
	var TheFiveYear = theFiveYear();
	//前8天，前7月，前6年
	var TheEightDays = theEightDays();
	var TheSevenMonth = theSevenMonth();
	var TheSixYear = theSixYear();
	//获取系统时间
	var dateT = getDate();
	//赋值系统时间
	document.getElementById("date").innerHTML=dateT;
	document.getElementById("date2").innerHTML=dateT;
	document.getElementById("date3").innerHTML=dateT;
	//获取时间粒度
    var timeGran=$("#inqu_status-timeGran").bxcombobox("selectObj").val();
    //筛选生产线
    var porducLine=$("#inqu_status-tagLine").bxcombobox("selectObj").val();
    //获取系统时间
    var date = new Date();
    var strMonth = date.getMonth() + 1;
    var strDay = date.getDate();
	var hours = date.getHours(); 
	//获取初始的起始时间控件的值进行判断
	var startTime=$("#inqu_status-startTime").val();
	//获取初始的结束时间控件的值进行判断
	var endTime=$("#inqu_status-endTime").val();
    //获取判断时间粒度
	if(timeGran=="day"){		
		if (startTime == null || startTime == ''){
			if(hours>=8){
				startTime = TheSevenDays;
				$("#inqu_status-startTime").val(startTime);			
			}else if (hours<8 && hours!=8){
				startTime = TheEightDays;
				$("#inqu_status-startTime").val(startTime);
			}	
		}
		if( endTime == null || endTime == ''){	
			if(hours>=8){
				endTime = TheOneDays;
    			$("#inqu_status-endTime").val(endTime); 			
			}else if (hours<8 && hours!=8){
				endTime = TheTwoDays;
    			$("#inqu_status-endTime").val(endTime); 
			}			    	     		
		}
		if(startTime != null && startTime != '' && endTime != null && endTime != ''){
			//获取开始时间结束时间
			var start=$("#inqu_status-startTime").val();
			var end=$("#inqu_status-endTime").val();
			//计算天数时间间隔
			var date1 = new Date(start);
			var date2 = new Date(end);	
			var s1 = date1.getTime(),s2 = date2.getTime();
			var total = (s2 - s1)/1000; 
			var days = parseInt(total / (24*60*60));//间隔天数
			if(days>=7){
				alertDiv("提示","查询天数间隔不可超过7天");		
				if(hours>=8){
					startTime = TheSevenDays;
					$("#inqu_status-startTime").val(startTime);	
					endTime = TheOneDays;
	    			$("#inqu_status-endTime").val(endTime); 			
				}else if (hours<8 && hours!=8){
					startTime = TheEightDays;
					$("#inqu_status-startTime").val(startTime);
					endTime = TheTwoDays;
	    			$("#inqu_status-endTime").val(endTime);
				}		 				
			}else if(days<7 && days!=7){
				startTime = start;
    			endTime = end;
			}
		}
	}else if(timeGran=="month"){
        if (startTime == null || startTime == ''){
        	if(strDay==1){
				if(hours>=8){
					startTime = TheSixMonth;
        			$("#inqu_status-startTime").val(startTime);			
    			}else if (hours<8 && hours!=8){
    				startTime = TheSevenMonth;
        			$("#inqu_status-startTime").val(startTime);
    			}			
			}else{
				startTime = TheSixMonth;
    			$("#inqu_status-startTime").val(startTime);
			}	
	    }
		if (endTime == null || endTime == ''){
			if(strDay==1){
				if(hours>=8){
					endTime = TheOneMonth;
        			$("#inqu_status-endTime").val(endTime);  		
    			}else if (hours<8 && hours!=8){
    				endTime = TheTwoMonth;
        			$("#inqu_status-endTime").val(endTime);  
    			}			
			}else{
				endTime = TheOneMonth;
    			$("#inqu_status-endTime").val(endTime);  
			}       	
	    } 
		if(startTime != null && startTime != '' && endTime != null && endTime != ''){
			//获取开始时间结束时间
			var start=$("#inqu_status-startTime").val();
			var end=$("#inqu_status-endTime").val();
			//计算月份查询时间间隔	
	        //用-分成数组
	        date1 = start.split("-");
	        date2 = end.split("-");
			//获取年,月数
	        var year1 = parseInt(date1[0]) , 
	            month1 = parseInt(date1[1]) , 
	            year2 = parseInt(date2[0]) , 
	            month2 = parseInt(date2[1]) ,
	            //通过年,月差计算月份差        
	            months = (year2 - year1) * 12 + (month2-month1);
			if(months>=6){
				alertDiv("提示","查询月份间隔不可超过6个月");			
				if(strDay==1){
					if(hours>=8){
						startTime = TheSixMonth;
	        			$("#inqu_status-startTime").val(startTime);	
	        			endTime = TheOneMonth;
	        			$("#inqu_status-endTime").val(endTime);
	    			}else if (hours<8 && hours!=8){
	    				startTime = TheSevenMonth;
	        			$("#inqu_status-startTime").val(startTime);
	    				endTime = TheTwoMonth;
	        			$("#inqu_status-endTime").val(endTime);  
	    			}			
				}else{
					startTime = TheSixMonth;
        			$("#inqu_status-startTime").val(startTime);	
        			endTime = TheOneMonth;
        			$("#inqu_status-endTime").val(endTime);
				}  
			}else if(months<6 && months!=6){			
				startTime = start;
    			endTime = end;				 
			}
		}
	}else if(timeGran=="year"){
		if (startTime == null || startTime == ''){
			if(strMonth==1){
    			if(strDay==1){
    				if(hours>=8){
    					startTime = TheFiveYear;
            			$("#inqu_status-startTime").val(startTime);  		
        			}else if (hours<8 && hours!=8){
        				startTime = TheSixYear;
            			$("#inqu_status-startTime").val(startTime);   
        			}	
    			}else{
    				startTime = TheFiveYear;
        			$("#inqu_status-startTime").val(startTime);
    			}
    		}else{
    			startTime = TheFiveYear;
    			$("#inqu_status-startTime").val(startTime);
    		}
	    }
		if (endTime == null || endTime == ''){
			if(strMonth==1){
    			if(strDay==1){
    				if(hours>=8){
    					endTime = TheOneYear;
    	    			$("#inqu_status-endTime").val(endTime);		
        			}else if (hours<8 && hours!=8){
        				endTime = TheTwoYear;
            			$("#inqu_status-endTime").val(endTime);   
        			}	
    			}else{
    				endTime = TheOneYear;
        			$("#inqu_status-endTime").val(endTime);
    			}
    		}else{
    			endTime = TheOneYear;
    			$("#inqu_status-endTime").val(endTime);
    		}    	
	    }
		if(startTime != null && startTime != '' && endTime != null && endTime != ''){
			//获取开始时间结束时间
			var start=$("#inqu_status-startTime").val();
			var end=$("#inqu_status-endTime").val();
			//计算年份间隔
			var years = end-start;
			if(years>=5){
				alertDiv("提示","查询年份间隔不可超过5年");			
				if(strMonth==1){
        			if(strDay==1){
        				if(hours>=8){
        					startTime = TheFiveYear;
                			$("#inqu_status-startTime").val(startTime);
        					endTime = TheOneYear;
        	    			$("#inqu_status-endTime").val(endTime);		
            			}else if (hours<8 && hours!=8){
            				startTime = TheSixYear;
                			$("#inqu_status-startTime").val(startTime); 
            				endTime = TheTwoYear;
                			$("#inqu_status-endTime").val(endTime);   
            			}	
        			}else{
        				startTime = TheFiveYear;
            			$("#inqu_status-startTime").val(startTime);
    					endTime = TheOneYear;
    	    			$("#inqu_status-endTime").val(endTime);
        			}
        		}else{
        			startTime = TheFiveYear;
        			$("#inqu_status-startTime").val(startTime);
					endTime = TheOneYear;
	    			$("#inqu_status-endTime").val(endTime);
        		}  
			}else if(years<5 && years!=5){
				startTime = start;
    			endTime = end;
			}
		}
	}	
	//加载每个echart图表
	div1();
	div2();
	div3();
	div4();
	div5();
	//获取工号
	gname();
	//获取生产线的状态
	lineStatus();
	function gname() {
		var paramJsonObj = new Object();
		var jsons1 = {};
		var gname;
		json1= {};
		var callback1 = {
		        onSuccess: function (paramJsonObj) {
		        	gname=paramJsonObj.employeeid;
		        }
		    };
	    AjaxCommunicator.ajaxRequest('/da/homePage.do?method=gNameQuery', 'POST', jsons1, callback1);
	    //获取工号
	    document.getElementById("gname").innerHTML=gname;
	    document.getElementById("gname2").innerHTML=gname;
	    document.getElementById("gname3").innerHTML=gname;
	}
	function lineStatus() {
		var paramJsonObj=[];
		var jsons1 = [];
		var tagsLine1;
		var tagsLine2;
		var tagsLine3;
		json1= {};
		var callback1 = {
		        onSuccess: function (paramJsonObj) {
		        	tagsLine1=paramJsonObj.tagsLine1;
		        	tagsLine2=paramJsonObj.tagsLine2;
		        	tagsLine3=paramJsonObj.tagsLine3;
		        }
		    };
	    AjaxCommunicator.ajaxRequest('/da/homePage.do?method=lineStatusQuery', 'POST', jsons1, callback1);
	  //一号生产线
	  var arrayline1=tagsLine1.split("=");
	  var line1;
	  if(arrayline1.length>0){
		  for(var i=0;i<arrayline1.length;i++){
			  arrayline1[i];	
		  	}
		  line1=arrayline1[2];
		 }
	  if(line1==-1){
		  var tagline1="停止";
	  }else if(line1==0){
		  var tagline1="生产中";
	  }
	  //二号生产线
	  var arrayline2=tagsLine2.split("=");
	  var line2;
	  if(arrayline2.length>0){
		  for(var i=0;i<arrayline2.length;i++){
			  arrayline2[i];	
		  	}
		  line2=arrayline2[2];
		 }
	  if(line2==-1){
		  var tagline2="停止";
	  }else if(line2==0){
		  var tagline2="生产中";
	  }
	  //二号生产线
	  var arrayline3=tagsLine3.split("=");
	  var line3;
	  if(arrayline3.length>0){
		  for(var i=0;i<arrayline3.length;i++){
			  arrayline3[i];	
		  	}
		  line3=arrayline3[2];
		 }
	  if(line3==-1){
		  var tagline3="停止";
	  }else if(line3==0){
		  var tagline3="生产中";
	  }
	  //获取生产线的状态
	  document.getElementById("tagsline1a").innerHTML=tagline1;
	  document.getElementById("tagsline1b").innerHTML=tagline1;
	  document.getElementById("tagsline1c").innerHTML=tagline1;
	  document.getElementById("tagsline2a").innerHTML=tagline2;
	  document.getElementById("tagsline2b").innerHTML=tagline2;
	  document.getElementById("tagsline2c").innerHTML=tagline2;
	  document.getElementById("tagsline3a").innerHTML=tagline3;
	  document.getElementById("tagsline3b").innerHTML=tagline3;
	  document.getElementById("tagsline3c").innerHTML=tagline3;
	}
	function div1() {
		var paramResult ={};   
		var tagName1='水';
		var jsons1 = {};
		jsons1.inqu_status={};
		jsons1.inqu_status.tagName1 = tagName1;
		jsons1.inqu_status.timeGran = timeGran;
		jsons1.inqu_status.porducLine = porducLine;
		jsons1.inqu_status.startTime = startTime;
		jsons1.inqu_status.endTime = endTime;
		json1= {};
		var callback1 = {
		        onSuccess: function (json1) {
		        	paramResult=json1.rows;	        	
		        }
		    };
		//原料使用量
	    AjaxCommunicator.ajaxRequest('/da/homePage.do?method=rawMaterialQuery', 'POST', jsons1, callback1);
		var array = [];
		var stage = [];
		var colorList = [];
		//遍历数据加载到折线图
		for ( var i = 0; i < paramResult.length; i++) {		
			if(paramResult[i].timeScale=='day'){
				stage.push(paramResult[i].tagTime.substring(5));
			}else if(paramResult[i].timeScale=='month'){
				stage.push(paramResult[i].tagTime.substring(2));
			}else if(paramResult[i].timeScale=='year'){
				stage.push(paramResult[i].tagTime);
			}			
			array.push(paramResult[i].dataValue);
		}
		var chartsBarOption_stand = {
			    dataPattern: 'local',
			    chartOption: {	
			    	/*title: {
			             text: '原料使用量',
			             textStyle: {
		                        color: '#6D7483',
		                        fontSize:15
		                    }	
			        },*/
			        tooltip: {
			            trigger: 'axis'
			        },
			        /*legend: {
			            data: ['原料使用量']
			        },*/
			      //控制echarts与四周的留白
			        grid:{
			        	x:45,
	                    y:25,
	                    x2:30,
	                    y2:30,
	                    borderWidth:1
	                },
			        calculable: true,
			        xAxis: [{
			            type: 'category',
			          	axisLabel: {
	                        show: true,
	                        textStyle: {
	                            color:'black' 	
		            			}
	                    },
			            //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			            data:stage
			        }],
			        yAxis: [{
			            type: 'value',
			           /* name:'单位：t',*/
		            	axisLabel: {
	                        show: true,
	                        textStyle: {
	                            color:'black' 	
		            			}
	                    }
			        }],
			        series: [{
			            name: '原料使用量',
			            type: 'bar',
			            barMaxWidth:30,//最大宽度
			            barMinHeight:5,//最小高度
			            //把数据的值显示在柱子上
			            label: {
			                normal: {
			                	show: true,
			                    position: 'top',
			                    textStyle: {
			                        color: 'black'
			                    },
			                }
			            },
			            itemStyle:{
			            	normal:{
			            		//柱形的颜色随机
			            		color: function (value){
			            			return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
			            			}
			            	}
			            },
			           // data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
			            data : array
			        }]
			    }
			};
		  $("#bardemostandard").bxchartsbar(chartsBarOption_stand);
		  
	}
	function div2() {
	  var paramResult2 ={}; 
	  var tagName2='电';
	  var jsons2 = {};
		jsons2.inqu_status={};
		jsons2.inqu_status.tagName2 = tagName2;
		jsons2.inqu_status.timeGran = timeGran;
		jsons2.inqu_status.porducLine = porducLine;
		jsons2.inqu_status.startTime = startTime;
		jsons2.inqu_status.endTime = endTime;    
		json2= {};
	  var callback2 = {
		        onSuccess: function (json2) {
		        	paramResult2=json2.rows;	        	
		        }
		    };
	  //产品发货量
	  AjaxCommunicator.ajaxRequest('/da/homePage.do?method=shipProductsQuery', 'POST', jsons2, callback2);
		var array2 = [];
		var stage2 = [];
		var colorList2 = [];
		//遍历数据加载到折线图
		for ( var i = 0; i < paramResult2.length; i++) {
			stage2.push(paramResult2[i].tagTime);
			array2.push(paramResult2[i].dataValue);
		}
		var chartsBarOption_stand2 = {
			    dataPattern: 'local',
			    chartOption: {
			    	/*title: {
			             text: '产品发货量',
			             textStyle: {
		                        color: '#6D7483',
		                        fontSize:15
		                    }	
			        },*/
			        tooltip: {
			            trigger: 'axis'
			        },
			        /*legend: {
			            data: ['产品发货量']
			        },*/
			        //控制echarts与四周的留白
			        grid:{
			        	x:45,
	                    y:25,
	                    x2:30,
	                    y2:35,
	                    borderWidth:1
	                },
			        calculable: true,
			        xAxis: [{
			            type: 'category',
			            axisLabel: {
	                        show: true,
	                        //坐标轴刻度标签的显示间隔
	                        interval:0,
	                        //横坐标标签倾斜的角度
                            rotate:15,
	                        textStyle: {
	                            color:'black' 	
		            			}
	                    },
			            //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			            data:stage2
			        }],
			        yAxis: [{
			            type: 'value',
			            /*name:'单位：t',*/
		            	axisLabel: {
	                        show: true,
	                        textStyle: {
	                            color:'black' 	
		            			}
	                    }
			        }],
			        series: [{
			            name: '产品发货量',
			            type: 'line',
			            //barMaxWidth:30,//最大宽度
			            //把数据的值显示在柱子上
			            label: {
			                normal: {
			                	show: true,
			                    position: 'top', 
			                    textStyle: {
			                        color: 'black'
			                    },
			                }
			            },
			            itemStyle:{
			            	normal:{
			            		 lineStyle:{
			            			//设置折线颜色
                                     color:'#0081CD'
 			            		}		            		
			            	}
			            },
			           // data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
			            data : array2,
			           /* markLine: {
			                data: [{
			                    type: 'average',
			                    name: '平均值'
			                }]
			            }*/
			        }]
			    }
			};
		  $("#bardemostandard2").bxchartsbar(chartsBarOption_stand2);
		  
}
	function div3() {
		  var paramResult3 ={}; 
		  var tagName3='煤气';
		  var jsons3 = {};
		  	jsons3.inqu_status={};
		  	jsons3.inqu_status.tagName3 = tagName3;
		  	jsons3.inqu_status.timeGran = timeGran;
		  	jsons3.inqu_status.porducLine = porducLine;
		  	jsons3.inqu_status.startTime = startTime;
		  	jsons3.inqu_status.endTime = endTime; 
		  	json3= {};
		  var callback3 = {
			        onSuccess: function (json3) {
			        	paramResult3=json3.rows;	        	
			        }
			    };
		  //产品产量
		  AjaxCommunicator.ajaxRequest('/da/homePage.do?method=productYieldQuery', 'POST', jsons3, callback3);
			var array3 = [];
			var stage3 = [];
			var colorList3 = [];
			//遍历数据加载到折线图
			for ( var i = 0; i < paramResult3.length; i++) {
				stage3.push(paramResult3[i].tagTime);
				array3.push(paramResult3[i].dataValue);
			}
			var chartsBarOption_stand3 = {
				    dataPattern: 'local',
				    chartOption: {				        
				        	/*title: {
					            text: '产品产量',					             				                   
			                    textStyle: {
			                        color: '#6D7483',
			                        fontSize:15
			                    }						         
					        },*/
					        tooltip: {
					            trigger: 'axis'
					        },
				        //控制echarts与四周的留白
				        grid:{
		                    x:45,
		                    y:25,
		                    x2:30,
		                    y2:30,
		                    borderWidth:1
		                },
				        calculable: true,
				        xAxis: [{
				            type: 'category',			            
				            //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
				            data:stage3,
				            axisLabel: {
		                        show: true,
		                        textStyle: {
		                            color:'black' 	
			            			}
		                    }
				        }],
				        yAxis: [{
				        	/*name:'单位：t',*/
				            type: 'value',
				            axisLabel: {
		                        show: true,
		                        textStyle: {
		                            color:'black' 	
			            			}
		                    }
				        }],
				        series: [{
				        	 name: '产品产量',
					            type: 'bar',
					            barMaxWidth:30,//最大宽度
					            barMinHeight:5,//最小高度
					            //把数据的值显示在柱子上
					            label: {
					                normal: {
					                	show: true,
					                    position: 'insideTop',
					                    textStyle: {
					                        color: 'white'
					                    },
					                }
					            },
					            itemStyle:{
					            	normal:{
					            		//柱形的颜色随机
					            		color: function (value){
					            			return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
					            			}
					            	}
					            },
				           // data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
				            data : array3,				         
				        }]
				    }
				};
			/*var chartsBarOption_stand3 = {
				    dataPattern: 'local',
				    chartOption: {
				    	title: {
				             text: '产品产量'
				        },
				        tooltip: {
				            trigger: 'axis'
				        },
				        legend: {
				            data: ['产品产量']
				        },
				        //控制echarts与四周的留白
				        grid:{
		                    x:80,
		                    y:50,
		                    x2:70,
		                    y2:30,
		                    borderWidth:1
		                },
				        calculable: true,
				        xAxis: [{
				        	type: 'value',
				        	name:'单位：kg',
			        		axisLabel: {
		                        show: true,
		                        textStyle: {
		                            color:'black' 	
			            			}
		                    }
				        }],
				        yAxis: [{
				        	type: 'category',				        	
				        	axisLabel: {
		                        show: true,
		                        textStyle: {
		                            color:'black' 	
			            			}
		                    },
				            //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
				            data:stage3
				        }],
				        series: [{
				            name: '产品产量',
				            type: 'bar',
				            stack: '总量',
				            label: {
				                normal: {
				                    show: true,
				                    position: 'insideRight',
				                    textStyle: {
			                            color: 'white'
			                        },
				                }
				            },
				            itemStyle:{
				            	normal:{
				            		//柱形的颜色随机
				            		color: function (value){
				            			return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
				            			}
				            	}
				            },
				            //barMaxWidth:30,//最大宽度
				           // data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
				            data : array3,
				        }]
				    }
				};*/
			  $("#bardemostandard3").bxchartsbar(chartsBarOption_stand3);
			 
}
	function div4() {
		var paramResult4 ={}; 
		var tagNames=['水','电','煤气'];
		var tagName=tagNames.toString();
		var jsons4 = {};
		  	jsons4.inqu_status={};
		  	jsons4.inqu_status.tagName = tagName;
		  	jsons4.inqu_status.timeGran = timeGran;
		  	jsons4.inqu_status.porducLine = porducLine;
		  	jsons4.inqu_status.startTime = startTime;
		  	jsons4.inqu_status.endTime = endTime; 
		  	json4= {};
		  var callback4 = {
			        onSuccess: function (json4) {
			        	paramResult4=json4.rows;	        	
			        }
			    };
		  //产品发货量
		  AjaxCommunicator.ajaxRequest('/da/homePage.do?method=mediateSingleCQuery', 'POST', jsons4, callback4);
		//遍历数据
			var array1 = [];
			var array2 = [];
			var array3 = [];
			var stages = [];
			var colorList = [];
			//遍历数据加载到折线图
			for ( var i = 0; i < paramResult4.length; i++) {
				stages.push(paramResult4[i].tagTime);
				if(paramResult4[i].tagName=="水"){	
					array1.push(paramResult4[i].dataValue);		
				}else if(paramResult4[i].tagName=="电"){		
					array2.push(paramResult4[i].dataValue);		
				}else if(paramResult4[i].tagName=="煤气"){		
					array3.push(paramResult4[i].dataValue);		
				}
			}
			
			//时间遍历去重
			var stage=[];
			    function first(args){
			        for(i=0;i<args.length;i++){//从此处循环args
			            if(stage.indexOf(args[i])<0){//从这里开始匹配，如果没有匹配到，那么就执行push方法
			            	stage.push(args[i])//push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
			            }
			        }
			        return stage;
			    }
			    first(stages);//调用方法
			    console.log(stage)
			var chartsBarOption_stand4 = {
				    dataPattern: 'local',
				    chartOption: {
				    	/*title: {
				             text: '能介单耗',
				             textStyle: {
			                        color: '#6D7483',
			                        fontSize:15
			                    }	
				        },*/
				        tooltip: {
				            trigger: 'axis'
				        },
				        //条形的颜色
				        color:['#17A05E','#DE5448','#FFCE44'],
				        //背景颜色
				        //backgroundColor: '#F2F2F2',
				        legend: {
				            data: tagNames
				        },
				        //控制echarts与四周的留白
				        grid:{
				        	x:45,
		                    y:25,
		                    x2:30,
		                    y2:30,
		                    borderWidth:1
		                },
				        calculable: true,
				        xAxis: [{
				            type: 'category',
				            axisLabel: {
		                        show: true,
		                        textStyle: {
		                            color:'black' 	
			            			}
		                    },
				            //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
				            data:stage
				        }],
				        yAxis: [{
				            type: 'value',
				           /* name:'单位：kg',*/
			            	axisLabel: {
		                        show: true,
		                        textStyle: {
		                            color:'black' 	
			            			}
		                    }
				        }],
				        series: [{
			                  name:tagNames[0],
			                  type:'bar',
			                  stack: '总量',        
			                  barMaxWidth:30,//最大宽度
			                //把数据的值显示在柱子上
					           /* label: {
					                normal: {
					                    show: true,
					                    position: 'inside',
					                    	textStyle: {
					                            color: 'black'
					                        },
					                }
					            },	*/				            
					            data:array1,
			                 // data:[6693,-2319,-2590,7460,-2616,-2290,-2290]
			                 },
			                 {
			                     name:tagNames[1],
			                     type:'bar',
			                     stack: '总量',
			                     //把数据的值显示在柱子上
			 		            /*label: {
			 		                normal: {
			 		                    show: true,
			 		                    position: 'inside',
			 		                    textStyle: {
			 		                         color: 'black'
			 		                       },
			 		                }
			 		            },*/
			                     data:array2,
			                     barMaxWidth:30,//最大宽度
			                   //data:[261,-72,9,-6,18,27,27]		                     
			                 },
			                 {
			                     name:tagNames[2],
			                     type:'bar',
			                     stack: '总量',
			                     barMaxWidth:30,//最大宽度
			                   //把数据的值显示在柱子上
			 		           /* label: {
			 		                normal: {
			 		                    show: true,
			 		                    position: 'inside',
			 		                    textStyle: {
			 		                         color: 'black'
			 		                       },
			 		                }
			 		            },*/
			 		           data:array3,
			                   //data:[66,0,-30,36,-12,-18,-18]		                    
			              }]
				    }
				};
			  $("#bardemostandard4").bxchartsbar(chartsBarOption_stand4);
			  }
	function div5() {
		var paramResult5 ={}; 
		var tagNames=['水','电','煤气'];
		var tagName=tagNames.toString();
		var jsons5 = {};
		  	jsons5.inqu_status={};
		  	jsons5.inqu_status.tagName = tagName;
		  	jsons5.inqu_status.timeGran = timeGran;
		  	jsons5.inqu_status.porducLine = porducLine;
		  	jsons5.inqu_status.startTime = startTime;
		  	jsons5.inqu_status.endTime = endTime; 
		  	json5= {};
		  var callback5 = {
			        onSuccess: function (json5) {
			        	paramResult5=json5.rows;	        	
			        }
			    };
		  //产品发货量
		  AjaxCommunicator.ajaxRequest('/da/homePage.do?method=currentEnergyQuery', 'POST', jsons5, callback5);
		//遍历数据
			var array1 = [];
			var array2 = [];
			var array3 = [];
			var stages = [];
			var colorList = [];
			//遍历数据加载到折线图
			for ( var i = 0; i < paramResult5.length; i++) {
				stages.push(paramResult5[i].tagTime);
				if(paramResult5[i].tagName=="水"){	
					array1.push(paramResult5[i].dataValue);		
				}else if(paramResult5[i].tagName=="电"){		
					array2.push(paramResult5[i].dataValue);		
				}else if(paramResult5[i].tagName=="煤气"){		
					array3.push(paramResult5[i].dataValue);		
				}
			}			
			//时间遍历去重
			var stage=[];
			    function first(args){
			        for(i=0;i<args.length;i++){//从此处循环args
			            if(stage.indexOf(args[i])<0){//从这里开始匹配，如果没有匹配到，那么就执行push方法
			            	stage.push(args[i])//push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
			            }
			        }
			        return stage;
			    }
			    first(stages);//调用方法
			    console.log(stage)
			var chartsBarOption_stand5 = {
				    dataPattern: 'local',
				    chartOption: {
				    /*	title: {
				             text: '能源消耗',
				             textStyle: {
			                        color: '#6D7483',
			                        fontSize:15
			                    }	
				        },*/
				        tooltip: {
				            trigger: 'axis'
				        },
				        //折线的颜色
				        color:['green','red','black'],
				        //背景颜色
				        //backgroundColor: '#F2F2F2',
				        legend: {
				            data: tagNames
				        },
				        //控制echarts与四周的留白
				        grid:{
		                    x:45,
		                    y:25,
		                    x2:30,
		                    y2:30,
		                    borderWidth:1
		                },
				        calculable: true,
				        xAxis: [{
				            type: 'category',
				            axisLabel: {
		                        show: true,
		                        textStyle: {
		                            color:'black' 	
			            			}
		                    },
				            //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
				            data:stage
				        }],
				        yAxis: [{
				            type: 'value',
				           /* name:'单位：kg',*/
			            	axisLabel: {
		                        show: true,
		                        textStyle: {
		                            color:'black' 	
			            			}
		                    }
				        }],
				        series: [{
			                  name:tagNames[0],
			                  type:'line',
			                  stack: '总量1',        
			                  barMaxWidth:30,//最大宽度
			                //把数据的值显示在柱子上
					            /*label: {
					                normal: {
					                    show: true,
					                    position: 'inside',
					                    	textStyle: {
					                            color: 'black'
					                        },
					                }
					            },		*/			            
					            data:array1,
			                 // data:[6693,-2319,-2590,7460,-2616,-2290,-2290]
			                 },
			                 {
			                     name:tagNames[1],
			                     type:'line',
			                     stack: '总量2',
			                   //把数据的值显示在柱子上
				 		           /* label: {
				 		                normal: {
				 		                    show: true,
				 		                    position: 'inside',
				 		                    textStyle: {
				 		                         color: 'black'
				 		                       },
				 		                }
				 		            },*/
			                     data:array2,
			                     barMaxWidth:30,//最大宽度
			                   //data:[261,-72,9,-6,18,27,27]		                     
			                 },
			                 {
			                     name:tagNames[2],
			                     type:'line',
			                     stack: '总量3',
			                     barMaxWidth:30,//最大宽度
			                   //把数据的值显示在柱子上
			 		           /* label: {
			 		                normal: {
			 		                    show: true,
			 		                    position: 'inside',
			 		                    textStyle: {
			 		                         color: 'black'
			 		                       },
			 		                }
			 		            },*/
			 		           data:array3,
			                   //data:[66,0,-30,36,-12,-18,-18]		                    
			              }]
				    }
				};
			  $("#bardemostandard5").bxchartsbar(chartsBarOption_stand5);				
	}	
	 //echart图表自适应
	 $(window).bind('resize',div1);
	 $(window).bind('resize',div2);
	 $(window).bind('resize',div3);
	 $(window).bind('resize',div4);
	 $(window).bind('resize',div5);
}
function onKeyQuery() {
    var e = window.event || arguments.callee.caller.arguments[0];
    var keyCode = e.keyCode || e.which; // 按键的keyCode
    if (keyCode == 13) {
        on_query_click();
    }
}
//点击显示条件查询
$(document).ready(function(){
	  $("#img").click(function(){
	  $("#queryarea").toggle();
	});
});
	  //窗口加载时垂直居中
	  $(window).load(function (){
		  //alert($(window).height());  
			//动态获取div高度
			//var hei=$("#ww").height();                
		    //document.getElementById("ww").style.line-height=hei+"px";    
			//水平居中方法： 将浏览器可视区的宽度(clientWidth) -减去 要居中元素本身的宽度(offsetWidth) /除以 2 +'px'
			//垂直居中方法： 将浏览器可视区的高度(clientHeight) -减去 要居中元素本身的高度(offsetHeight) /除以 2 +'px'
			$('#di').css({ 
		        position:'absolute', 
		        //动态垂直居中
		        top: ($('#spn').height() - $('#di').outerHeight())/2 + $(document).scrollTop() 
		      });
			$('#di2').css({ 
		        position:'absolute', 
		        //动态垂直居中
		        top: ($('#spn2').height() - $('#di2').outerHeight())/2 + $(document).scrollTop() 
		      });
			$('#di3').css({ 
		        position:'absolute', 
		        //动态垂直居中
		        top: ($('#spn3').height() - $('#di3').outerHeight())/2 + $(document).scrollTop() 
		      });
			$('#di4').css({ 
		        position:'absolute', 
		        //动态垂直居中
		        top: ($('#spn4').height() - $('#di4').outerHeight())/2 + $(document).scrollTop() 
		      });
			$('#di5').css({ 
		        position:'absolute', 
		        //动态垂直居中
		        top: ($('#spn5').height() - $('#di5').outerHeight())/2 + $(document).scrollTop() 
		      });
			$('#di6').css({ 
		        position:'absolute', 
		        //动态垂直居中
		        top: ($('#spn6').height() - $('#di6').outerHeight())/2 + $(document).scrollTop() 
		      });	
		});
	  	//窗口大小变化时垂直居中
		$(window).resize(function (){	
		  	//动态获取div高度
		  	//var hei=$("#ww").height();                
		    //document.getElementById("ww").style.line-height=hei+"px";    
		  	//水平居中方法： 将浏览器可视区的宽度(clientWidth) -减去 要居中元素本身的宽度(offsetWidth) /除以 2 +'px'
		  	//垂直居中方法： 将浏览器可视区的高度(clientHeight) -减去 要居中元素本身的高度(offsetHeight) /除以 2 +'px'
		  	$('#di').css({ 
		          position:'absolute', 
		          //动态水平居中
		          //left: ($('#qq').width() - $('#ww').outerWidth())/2, 
		          //动态垂直居中
		          top: ($('#spn').height() - $('#di').outerHeight())/2 + $(document).scrollTop() 
		        });
		  	$('#di2').css({ 
		          position:'absolute', 
		          //动态垂直居中
		          top: ($('#spn2').height() - $('#di2').outerHeight())/2 + $(document).scrollTop() 
		        });
		  	$('#di3').css({ 
		          position:'absolute', 
		          //动态垂直居中
		          top: ($('#spn3').height() - $('#di3').outerHeight())/2 + $(document).scrollTop() 
		        });
		  	$('#di4').css({ 
		          position:'absolute', 
		          //动态垂直居中
		          top: ($('#spn4').height() - $('#di4').outerHeight())/2 + $(document).scrollTop() 
		        });
		  	$('#di5').css({ 
		          position:'absolute', 
		          //动态垂直居中
		          top: ($('#spn5').height() - $('#di5').outerHeight())/2 + $(document).scrollTop() 
		        });
		  	$('#di6').css({ 
		          position:'absolute', 
		          //动态垂直居中
		          top: ($('#spn6').height() - $('#di6').outerHeight())/2 + $(document).scrollTop() 
		        });
		  	});	 