	//本月，今年
	var TheMonth = theMonth();
	var TheYear = theYear();
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
//判断时间控件为空的时候赋值给他
//前一天
function theOneDays() {
    var date = new Date();
    date.setDate(date.getDate()-1);
    var seperator = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator + month + seperator + strDate;
    return currentdate;
}
//前二天
function theTwoDays() {
    var date = new Date();
    date.setDate(date.getDate()-2);
    var seperator = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator + month + seperator + strDate;
    return currentdate;
}
//前三天
function theThreeDays() {
    var date = new Date();
    date.setDate(date.getDate()-3);
    var seperator = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator + month + seperator + strDate;
    return currentdate;
}
//前七天
function theSevenDays() {
    var date = new Date();
    date.setDate(date.getDate()-7);
    var seperator = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator + month + seperator + strDate;
    return currentdate;
}
//前八天
function theEightDays() {
    var date = new Date();
    date.setDate(date.getDate()-8);
    var seperator = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator + month + seperator + strDate;
    return currentdate;
}
//本月
function theMonth() {
    var date = new Date();
    date.setMonth(date.getMonth());
    var seperator = "-";
    var month = date.getMonth() +1;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    var currentdate = date.getFullYear() + seperator + month;
    return currentdate;
}
//前一月
function theOneMonth() {
    var date = new Date();
    date.setMonth(date.getMonth()-1,1);	
    var seperator = "-";
    var month = date.getMonth() +1;    
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    var currentdate = date.getFullYear() + seperator + month;
    return currentdate;
}
//前二月
function theTwoMonth() {
    var date = new Date();
    date.setMonth(date.getMonth()-2);
    var seperator = "-";
    var month = date.getMonth() +1;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    var currentdate = date.getFullYear() + seperator + month;
    return currentdate;
}
//前三月
function theThreeMonth() {
    var date = new Date();
    date.setMonth(date.getMonth()-3);
    var seperator = "-";
    var month = date.getMonth() +1;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    var currentdate = date.getFullYear() + seperator + month;
    return currentdate;
}
//前六月
function theSixMonth() {
    var date = new Date();
    date.setMonth(date.getMonth()-6);
    var seperator = "-";
    var month = date.getMonth() +1;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    var currentdate = date.getFullYear() + seperator + month;
    return currentdate;
}
//前七月
function theSevenMonth() {
    var date = new Date();
    date.setMonth(date.getMonth()-7);
    var seperator = "-";
    var month = date.getMonth() +1;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    var currentdate = date.getFullYear() + seperator + month;
    return currentdate;
}
//今年
function theYear() {
    var date = new Date();
    date.setFullYear(date.getFullYear());
    var year = date.getFullYear();
    var currentdate = year;
    return currentdate+"";
}
//前一年
function theOneYear() {
    var date = new Date();
    date.setFullYear(date.getFullYear() -1);
    var year = date.getFullYear();
    var currentdate = year;
    return currentdate+"";
}
//前二年
function theTwoYear() {
    var date = new Date();
    date.setFullYear(date.getFullYear() -2);
    var year = date.getFullYear();
    var currentdate = year;
    return currentdate+"";
}
//前三年
function theThreeYear() {
    var date = new Date();
    date.setFullYear(date.getFullYear() -3);
    var year = date.getFullYear();
    var currentdate = year;
    return currentdate+"";
}
//前五年
function theFiveYear() {
    var date = new Date();
    date.setFullYear(date.getFullYear() -5);
    var year = date.getFullYear();
    var currentdate = year;
    return currentdate+"";
}
//前六年
function theSixYear() {
    var date = new Date();
    date.setFullYear(date.getFullYear() -6);
    var year = date.getFullYear();
    var currentdate = year;
    return currentdate+"";
}
//获取系统时间
function getDate() {
    var date = new Date();
    date.setDate(date.getDate());
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hours = date.getHours();       
    var min = date.getMinutes();     
    if(date.getDay()==0){
    	var day="星期天";
    }else if(date.getDay()==1){
    	var day="星期一";
    }else if(date.getDay()==2){
    	var day="星期二";
    }else if(date.getDay()==3){
    	var day="星期三";
    }else if(date.getDay()==4){
    	var day="星期四";
    }else if(date.getDay()==5){
    	var day="星期五";
    }else if(date.getDay()==6){
    	var day="星期六";
    }
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (hours >= 0 && hours <= 9) {
    	hours = "0" + hours;
    }
    if (min >= 0 && min <= 9) {
    	min = "0" + min;
    }
    var currentdate = year + "年" + month + "月" + strDate + "日"  + "  " + day + "  " + hours + ":" + min;
    return currentdate;
}


//时间粒度下拉框改变事件
function changeDate(){
	//获取单选趋势对比的值
    var trendContrast=$("input[type='radio']:checked").val();
	var timeGran=$("#inqu_status-timeGran").bxcombobox("selectObj").val();
	var startTime=$("#inqu_status-startTime").val();
	var endTime=$("#inqu_status-endTime").val();
	//获取系统时间
	var date = new Date();
	var strMonth = date.getMonth() + 1;//月
	var strDay = date.getDate();//日
	var hours = date.getHours();//时
	 //判断单选为趋势时显示折线图跟柱状图,为对比时只显示柱状图
    if(trendContrast=="1"){
    	//获取时间
        if(timeGran=="day"){
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
    	}else if(timeGran=="month"){
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
    	}else if(timeGran=="year"){
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
    	}	
    }else if(trendContrast=="2"){
    	 //获取时间
        if(timeGran=="day"){	
    		if(hours>=8){
    			startTime = TheTwoDays;
    			$("#inqu_status-startTime").val(startTime);
    	    	endTime = TheOneDays;
    			$("#inqu_status-endTime").val(endTime);  			
			}else if (hours<8 && hours!=8){
				startTime = TheThreeDays;
    			$("#inqu_status-startTime").val(startTime);
    	    	endTime = TheTwoDays;
    			$("#inqu_status-endTime").val(endTime);  
			}	  	 	    
    	}else if(timeGran=="month"){
    		if(strDay==1){
				if(hours>=8){
					startTime = TheTwoMonth;
					$("#inqu_status-startTime").val(startTime);
			    	endTime = TheOneMonth;
					$("#inqu_status-endTime").val(endTime);  		
    			}else if (hours<8 && hours!=8){
    				startTime = TheThreeMonth;
    				$("#inqu_status-startTime").val(startTime);
    		    	endTime = TheTwoMonth;
    				$("#inqu_status-endTime").val(endTime);  
    			}			
			}else{
				startTime = TheTwoMonth;
				$("#inqu_status-startTime").val(startTime);
		    	endTime = TheOneMonth;
				$("#inqu_status-endTime").val(endTime);   
			}   	   
    	}else if(timeGran=="year"){
    		if(strMonth==1){
    			if(strDay==1){
    				if(hours>=8){
    					startTime = TheTwoYear;
    	    			$("#inqu_status-startTime").val(startTime);
    	    	    	endTime = TheOneYear;
    	    			$("#inqu_status-endTime").val(endTime);       	  		
        			}else if (hours<8 && hours!=8){
        				startTime = TheThreeYear;
            			$("#inqu_status-startTime").val(startTime);
            	    	endTime = TheTwoYear;
            			$("#inqu_status-endTime").val(endTime);    	
        			}	
    			}else{
    				startTime = TheTwoYear;
        			$("#inqu_status-startTime").val(startTime);
        	    	endTime = TheOneYear;
        			$("#inqu_status-endTime").val(endTime);       	
    			}
    		}else{
    			startTime = TheTwoYear;
    			$("#inqu_status-startTime").val(startTime);
    	    	endTime = TheOneYear;
    			$("#inqu_status-endTime").val(endTime);      	
    		}   	
    	}	
    }
}
//判断选择趋势和对比单选的文本显示以及查询条件的改变
$(document).ready(function() {
	 $('input[type=radio][name=form-field-radio]').change(function() {
	    	//获取单选趋势对比的值
	        var trendContrast=$("input[type='radio']:checked").val();
	    	var timeGran=$("#inqu_status-timeGran").bxcombobox("selectObj").val();
			var startTime=$("#inqu_status-startTime").val();
    		var endTime=$("#inqu_status-endTime").val();
    		//获取系统时间
	    	var date = new Date();
	    	var strMonth = date.getMonth() + 1;//月
	    	var strDay = date.getDate();//日
	    	var hours = date.getHours();//时
	    	if (this.value == 1) {
	    		//单选趋势显示的内容
	         	$("#label_time").html("统计时间");
	     		$("#label").html("至");
	     		//获取时间
	            if(timeGran=="day"){
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
	        	}else if(timeGran=="month"){	
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
	        	}else if(timeGran=="year"){
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
	        	}	
	         }else if (this.value == 2) {
	        	//单选对比显示的内容
	         	$("#label_time").html("对比时间");	
	     		$("#label").html("和");     		
	     		 //获取时间
	            if(timeGran=="day"){		
	        		if(hours>=8){
	        			startTime = TheTwoDays;
		    			$("#inqu_status-startTime").val(startTime);
		    	    	endTime = TheOneDays;
		    			$("#inqu_status-endTime").val(endTime);  			
	    			}else if (hours<8 && hours!=8){
	    				startTime = TheThreeDays;
		    			$("#inqu_status-startTime").val(startTime);
		    	    	endTime = TheTwoDays;
		    			$("#inqu_status-endTime").val(endTime);  
	    			}	    	 	    
	        	}else if(timeGran=="month"){
	        		if(strDay==1){
	    				if(hours>=8){
	    					startTime = TheTwoMonth;
	    	    			$("#inqu_status-startTime").val(startTime);
	    	    	    	endTime = TheOneMonth;
	    	    			$("#inqu_status-endTime").val(endTime);  		
	        			}else if (hours<8 && hours!=8){
	        				startTime = TheThreeMonth;
	    	    			$("#inqu_status-startTime").val(startTime);
	    	    	    	endTime = TheTwoMonth;
	    	    			$("#inqu_status-endTime").val(endTime);
	        			}			
	    			}else{
	    				startTime = TheTwoMonth;
    	    			$("#inqu_status-startTime").val(startTime);
    	    	    	endTime = TheOneMonth;
    	    			$("#inqu_status-endTime").val(endTime);    
	    			}   	   
	        	}else if(timeGran=="year"){
	        		if(strMonth==1){
	        			if(strDay==1){
	        				if(hours>=8){
	        					startTime = TheTwoYear;
	        	    			$("#inqu_status-startTime").val(startTime);
	        	    	    	endTime = TheOneYear;
	        	    			$("#inqu_status-endTime").val(endTime);       	  		
	            			}else if (hours<8 && hours!=8){
	            				startTime = TheThreeYear;
	                			$("#inqu_status-startTime").val(startTime);
	                	    	endTime = TheTwoYear;
	                			$("#inqu_status-endTime").val(endTime);    	
	            			}	
	        			}else{
	        				startTime = TheTwoYear;
        	    			$("#inqu_status-startTime").val(startTime);
        	    	    	endTime = TheOneYear;
        	    			$("#inqu_status-endTime").val(endTime);        	
	        			}
	        		}else{
	        			startTime = TheTwoYear;
    	    			$("#inqu_status-startTime").val(startTime);
    	    	    	endTime = TheOneYear;
    	    			$("#inqu_status-endTime").val(endTime);       	
	        		}    	
	        	}	
	        }
	    });
});
//起始时间控件属性控制
function startTime(){
	var timeGran=$("#inqu_status-timeGran").bxcombobox("selectObj").val();
	//获取时间
    if(timeGran=="day"){
    	WdatePicker({maxDate:'#F{$dp.$D(\'inqu_status-endTime\',{d:-1})||\'%y-%M-%d\'}',dateFmt:'yyyy-MM-dd '});   	
	}else if(timeGran=="month"){
		WdatePicker({maxDate:'#F{$dp.$D(\'inqu_status-endTime\',{M:-1})||\'%y-%M\'}',dateFmt:'yyyy-MM'}); 	
	}else if(timeGran=="year"){
		WdatePicker({maxDate:'#F{$dp.$D(\'inqu_status-endTime\',{y:-1})||\'%y\'}',dateFmt:'yyyy'});   	
	}		
}
//结束时间控件属性控制
function endTime(){
	var timeGran=$("#inqu_status-timeGran").bxcombobox("selectObj").val();
	var date = new Date();
	var strMonth = date.getMonth() + 1;
	var strDay = date.getDate();
	var hours = date.getHours();  
	//获取时间
    if(timeGran=="day"){
    	if(hours>=8){
    		WdatePicker({minDate:'#F{$dp.$D(\'inqu_status-startTime\',{d:1})}',maxDate:'%y-%M-{%d-1}',dateFmt:'yyyy-MM-dd'});			
		}else if (hours<8 && hours!=8){
			WdatePicker({minDate:'#F{$dp.$D(\'inqu_status-startTime\',{d:1})}',maxDate:'%y-%M-{%d-2}',dateFmt:'yyyy-MM-dd'});
		}	 	
	}else if(timeGran=="month"){
		if(strDay==1){
			if(hours>=8){
				WdatePicker({minDate:'#F{$dp.$D(\'inqu_status-startTime\',{M:1})}',maxDate:'%y-{%M-1}',dateFmt:'yyyy-MM'});
			}else if (hours<8 && hours!=8){
				WdatePicker({minDate:'#F{$dp.$D(\'inqu_status-startTime\',{M:1})}',maxDate:'%y-{%M-2}',dateFmt:'yyyy-MM'});
			}
		}else{
			WdatePicker({minDate:'#F{$dp.$D(\'inqu_status-startTime\',{M:1})}',maxDate:'%y-{%M-1}',dateFmt:'yyyy-MM'});
		}	 	
	}else if(timeGran=="year"){
		if(strMonth==1){
			if(strDay==1){
				if(hours>=8){
					WdatePicker({minDate:'#F{$dp.$D(\'inqu_status-startTime\',{y:1})}',maxDate:'{%y-1}',dateFmt:'yyyy'});
				}else if (hours<8 && hours!=8){
					WdatePicker({minDate:'#F{$dp.$D(\'inqu_status-startTime\',{y:1})}',maxDate:'{%y-2}',dateFmt:'yyyy'});
				}
			}else{
				WdatePicker({minDate:'#F{$dp.$D(\'inqu_status-startTime\',{y:1})}',maxDate:'{%y-1}',dateFmt:'yyyy'});
			}
		}else{
			WdatePicker({minDate:'#F{$dp.$D(\'inqu_status-startTime\',{y:1})}',maxDate:'{%y-1}',dateFmt:'yyyy'});
		}  	
	}		
}
//报表日期控件属性控制
function proTime(){
	var proTime=$("#proTime").val();
	var date = new Date();
	var strMonth = date.getMonth() + 1;
	var strDay = date.getDate();
	var hours = date.getHours();  
	//获取时间
    if(proTime=="day"){
    	if(hours>=8){
    		WdatePicker({maxDate:'%y-%M-{%d-1}',dateFmt:'yyyy-MM-dd'});			
		}else if (hours<8 && hours!=8){
			WdatePicker({maxDate:'%y-%M-{%d-2}',dateFmt:'yyyy-MM-dd'});
		}	 	
	}else if(proTime=="month"){
		if(strDay==2){
			if(hours>=8){
				WdatePicker({maxDate:'%y-%M',dateFmt:'yyyy-MM'});
			}else if (hours<8 && hours!=8){
				WdatePicker({maxDate:'%y-{%M-1}',dateFmt:'yyyy-MM'});
			}
		}else if(strDay<2 && strDay!=2){
			WdatePicker({maxDate:'%y-{%M-1}',dateFmt:'yyyy-MM'});
		}else if(strDay>2 && strDay!=2){
			WdatePicker({maxDate:'%y-%M',dateFmt:'yyyy-MM'});
		}	 	
	}else if(proTime=="year"){
		if(strMonth==2){
			if(strDay==1){
				if(hours>=8){
					WdatePicker({maxDate:'%y',dateFmt:'yyyy'});
				}else if (hours<8 && hours!=8){
					WdatePicker({maxDate:'{%y-1}',dateFmt:'yyyy'});
				}
			}else{
				WdatePicker({maxDate:'%y',dateFmt:'yyyy'});
			}
		}else if(strMonth<2 && strMonth!=2){
			WdatePicker({maxDate:'{%y-1}',dateFmt:'yyyy'});
		}else if(strMonth>2 && strMonth!=2){
			WdatePicker({maxDate:'%y',dateFmt:'yyyy'});
		}  	
	}		
}