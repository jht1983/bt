$(document).ready(function () {
    baosightRequire.requireFunct(['bxgrid', 'bxdiv', 'bxdialog', 'bxalert', 'bxcombobox',
                                  'bxcharts','bxchartsbar','bxchartsline'],                        
               function () {                       
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
var echartsType;
var echartsTypes=[];

//点击事件
function on_query_click() {
	//前1天，前 1月，前 一年
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
	
	var paramResult ={};    
	var porducLine='tags_line1';
	var tagName='煤气';
    var timeGran=$("#inqu_status-timeGran").bxcombobox("selectObj").val();
    var trendContrast=$("input[type='radio']:checked").val();
    //获取系统时间
    var date = new Date();
    var strMonth = date.getMonth() + 1;
    var strDay = date.getDate();
	var hours = date.getHours(); 
	//获取初始的起始时间控件的值进行判断
	var startTime=$("#inqu_status-startTime").val();
	//获取初始的结束时间控件的值进行判断
	var endTime=$("#inqu_status-endTime").val();
    //判断单选为趋势时显示折线图跟柱状图,为对比时只显示柱状图
	if(trendContrast=="1"){
    	//获取时间
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
    		if (endTime == null || endTime == ''){
    			if(hours>=8){
    				endTime = TheOneDays;
        			$("#inqu_status-endTime").val(endTime); 			
    			}else if (hours<8 && hours!=8){
    				endTime = TheTwoDays;
        			$("#inqu_status-endTime").val(endTime); 
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
    	}	
    	//选择趋势默认折线图
    	echartsType='line';
    	//显示折线图跟柱状图
    	echartsTypes=['bar','line'];
    }else if(trendContrast=="2"){
    	 //获取时间
        if(timeGran=="day"){
    		if (startTime == null || startTime == ''){
    			if(hours>=8){
    				startTime = TheOneDays;
    				$("#inqu_status-startTime").val(startTime);			
    			}else if (hours<8 && hours!=8){
    				startTime = TheTwoDays;
    				$("#inqu_status-startTime").val(startTime);
    			}	
    	    }
    		if (endTime == null || endTime == ''){
    			if(hours>=8){
    				endTime = TheTwoDays;
        			$("#inqu_status-endTime").val(endTime); 			
    			}else if (hours<8 && hours!=8){
    				endTime = TheThreeDays;
        			$("#inqu_status-endTime").val(endTime); 
    			}	     	
    	    } 
    	}else if(timeGran=="month"){	
    		if (startTime == null || startTime == ''){
    			if(strDay==1){
    				if(hours>=8){
    					startTime = TheTwoMonth;
            			$("#inqu_status-startTime").val(startTime);			
        			}else if (hours<8 && hours!=8){
        				startTime = TheThreeMonth;
            			$("#inqu_status-startTime").val(startTime);
        			}			
    			}else{
    				startTime = TheTwoMonth;
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
    	}else if(timeGran=="year"){   		
    		if (startTime == null || startTime == ''){
    			if(strMonth==1){
        			if(strDay==1){
        				if(hours>=8){
        					startTime = TheTwoYear;
                			$("#inqu_status-startTime").val(startTime);  		
            			}else if (hours<8 && hours!=8){
            				startTime = TheThreeYear;
                			$("#inqu_status-startTime").val(startTime);
            			}	
        			}else{
        				startTime = TheTwoYear;
            			$("#inqu_status-startTime").val(startTime);
        			}
        		}else{
        			startTime = TheTwoYear;
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
    	}	
    	//选择对比默认柱状图
    	echartsType='bar';
    	//只显示柱状图
    	echartsTypes=['bar'];
    }
	var json = {};
	json.inqu_status={};
	json.inqu_status.porducLine = porducLine;
	json.inqu_status.tagName = tagName;
	json.inqu_status.timeGran = timeGran;
	json.inqu_status.trendContrast = trendContrast;
	json.inqu_status.startTime = startTime;
	json.inqu_status.endTime = endTime;    
	json1= {};
	var callback = {
	        onSuccess: function (json1) {
	        	paramResult=json1.rows;	        	
	        }
	    };
    AjaxCommunicator.ajaxRequest('/da/thegas4line1.do?method=query', 'POST', json, callback);
	var array = [];
	var stages = [];
	//遍历数据加载到折线图
	for ( var i = 0; i < paramResult.length; i++) {
		stages.push(paramResult[i].tagTime);
		array.push(paramResult[i].dataValue);
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
	var chartsBarOption_stand = {
		    dataPattern: 'local',
		    chartOption: {
		        title: {
		            text: '1#生产线煤气使用量统计分析',
		            subtext: '单位:m3'
		        },
		        tooltip: {
		            trigger: 'axis'
		        },
		        legend: {
		            data: ['使用量']
		        },
		        toolbox: {
		            show: true,
		            right:20,
		            feature: {
		                mark: {
		                    show: true
		                },
		                dataView: {
		                    show: true,
		                    readOnly: false
		                },
		                magicType: {
		                    show: true,
		                    type: echartsTypes
		                },
		                restore: {
		                    show: true
		                },
		                saveAsImage: {
		                    show: true
		                }
		            }
		        },
		        grid: {
		            left: '3%',
		            right: '2%',
		            bottom: '3%',
		            containLabel: true
		        },
		        calculable: true,
		        xAxis: [{
		            type: 'category',
		            //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		            data:stage
		        }],
		        yAxis: [{
		            type: 'value'
		        }],
		        series: [{
		            name: '使用量',
		            type: echartsType,
		            barMaxWidth:50,//最大宽度
		            //把数据的值显示在柱子上
		            /*label: {
		                normal: {
		                	show: true,
		                    position: 'top', 
		                    textStyle: {
		                        color: 'black'
		                    },
		                }
		            },*/
		            itemStyle:{
		            	normal:{
		            		 color:'#DE5347',
		            		 lineStyle:{
		            			//设置折线颜色
                                 color:'#DE5347'
			            		}		            		
		            	}
		            },
		           // data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
		            data : array,
		            markPoint: {
		                data: [{
		                    type: 'max',
		                    name: '最大值'
		                },
		                {
		                    type: 'min',
		                    name: '最小值'
		                }]
		            },
		            markLine: {
		                data: [{
		                    type: 'average',
		                    name: '平均值',
		                    itemStyle:{
				            	normal:{
				            		 lineStyle:{
				            			//设置折线颜色
		                                 color:'#DE5347'
					            		}		            		
				            	}
				            },
		                }]
		            }
		        }]
		    }
		};
	  $("#bardemostandard").bxchartsbar(chartsBarOption_stand); 
	  
}
function onKeyQuery() {
    var e = window.event || arguments.callee.caller.arguments[0];
    var keyCode = e.keyCode || e.which; // 按键的keyCode
    if (keyCode == 13) {
        on_query_click();
    }
}