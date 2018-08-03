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
                $("#inqu_status-statisticalType").bxcombobox({
                    dataPattern: 'ccs',
                    ccsId: "statisticalType",
                    async: false
                    
                });
                //点击查询按钮进去点击事件
                on_query_click();
            });
});
var echartsType;
//显示折线图跟柱状图判断的
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
	//获取统计类型的值
	var tagNames=$("#inqu_status-statisticalType").bxcombobox("selectObj").val();
	if(tagNames=="waterSlagAmount"){
		//根据下拉框判断传值
		var tagName='水渣使用量';
		//根据类型显示图表名称
		var title='水渣使用量综合分析';
		//根据类型显示类型单位
		var company='单位:kg';
	}else if(tagNames=="waterAmount"){
		var tagName='水';
		var title='水使用量综合分析';
		var company='单位:m3';
	}else if(tagNames=="electricityAmount"){
		var tagName='电';
		var title='电使用量综合分析';
		var company='单位:kwh';
	}else if(tagNames=="gasAmount"){
		var tagName='煤气';
		var title='煤气使用量综合分析';
		var company='单位:m3';
	}else if(tagNames=="powderProduction"){
		var tagName='矿粉';
		var title='矿粉产量综合分析';
		var company='单位:t';
	}else if(tagNames=="comprehensiveConsum"){
		var tagName='综合能耗';
		var title='综合能耗';
		var company='单位:t';
	}else if(tagNames=="unitConsumption"){
		var tagName='单耗';
		var title='单耗';
		var company='单位:t';
	}
	//获取时间粒度的值
    var timeGran=$("#inqu_status-timeGran").bxcombobox("selectObj").val();
    //获取单选趋势对比的值
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
    var obj = document.getElementsByName("form-field-checkbox");
    //获取复选框的值
   	var porducLines=[];
	for(var i=0;i<obj.length; i++){
	    if(obj[i].checked)
	    	porducLines.push(obj[i].value).toString();  	 
	}
	//传入后台的porducLine  
	var porducLine=porducLines.toString();
	//获取复选框文本的值
	var porducLinet=[];
    for(var i=0;i<obj.length; i++){
        if(obj[i].checked)
        	porducLinet.push(obj[i].nextSibling.nodeValue).toString();   	 
    }   
	//把获取的值存到json转为格式为['1','2']的
	var json = {};
	json.inqu_status={};
	json.inqu_status.porducLine = porducLine;
	json.inqu_status.tagName = tagName;
	json.inqu_status.timeGran = timeGran;
	json.inqu_status.trendContrast = trendContrast;
	json.inqu_status.startTime = startTime;
	json.inqu_status.endTime = endTime;    
	json1= {};
	//后台回调过来的值
	var callback = {
	        onSuccess: function (json1) {
	        	paramResult=json1.rows;	        	
	        }
	    };
    AjaxCommunicator.ajaxRequest('/da/analysis.do?method=query', 'POST', json, callback);
    //遍历数据
	var array1 = [];
	var array2 = [];
	var array3 = [];
	var stages = [];
	//遍历数据加载到折线图
	for ( var i = 0; i < paramResult.length; i++) {
			stages.push(paramResult[i].tagTime);
		if(paramResult[i].porducLine=="tags_line1"){	
			array1.push(paramResult[i].dataValue);		//.replace(/\"/g,"")
		}else if(paramResult[i].porducLine=="tags_line2"){		
			array2.push(paramResult[i].dataValue);		
		}else if(paramResult[i].porducLine=="tags_line3"){		
			array3.push(paramResult[i].dataValue);		
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
	console.log(stage);
	//创建数据图
	var chartsBarOption_stand = {
		    dataPattern: 'local',
		    chartOption: {
		        title: {
		            text: title,
		            subtext: company
		        },
		        tooltip: {
		            trigger: 'axis'
		        },
		      //条形的颜色
		        color:['#17A05E','#DE5448','#FFCE44'],
		        legend: {
		            data: porducLinet
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
		        series: [
		                 {
		                     name:porducLinet[0],
		                     type:echartsType,
		                     stack: '总量1',  
		                     data:array1,
		                     barMaxWidth:30,//最大宽度
		                   //data:[6693,-2319,-2590,7460,-2616,-2290,-2290]
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
		 		                    name: '平均值'
		 		                }]
		 		            }
		                     
		                 },
		                 {
		                     name:porducLinet[1],
		                     type:echartsType,
		                     stack: '总量2',
		                     data:array2,
		                     barMaxWidth:30,//最大宽度
		                   //data:[261,-72,9,-6,18,27,27]
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
		 		                    name: '平均值'
		 		                }]
		 		            }
		                     
		                 },
		                 {
		                     name:porducLinet[2],
		                     type:echartsType,
		                     stack: '总量3',
		                     data:array3,
		                     barMaxWidth:30,//最大宽度
		                   //data:[66,0,-30,36,-12,-18,-18]
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
		 		                    name: '平均值'
		 		                }]
		 		            }		                    
		                 }
		             ]
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