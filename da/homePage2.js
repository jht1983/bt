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
	//生产概况 （前一天，前一月，前一年）
	var TheOneDays = theOneDays();
	var TheOneMonth = theOneMonth();
	var TheOneYear = theOneYear();
	//生产概况 （前二天，前二月，前二年）
	var TheTwoDays = theTwoDays();
	var TheTwoMonth = theTwoMonth();
	var TheTwoYear = theTwoYear();
	//生产概况 （前三天，前三月，前三年）
	var TheThreeDays = theThreeDays();
	var TheThreeMonth = theThreeMonth();
	var TheThreeYear = theThreeYear();
	//获取系统时间
	var dateT = getDate();
	document.getElementById("date").innerHTML=dateT;
	//加载数据
	energyConsumption();
	energySource();
	productionSituation();
	function productionSituation() {
	var paramResult1 ={}; 
	var tagTimes=['2018-05-20',TheOneMonth,TheOneYear,'2018-05-19',TheTwoMonth,TheTwoYear,'2018-05-18',TheThreeMonth,TheThreeYear];
	var tagTime=tagTimes.toString();
	var jsons1 = {};
	  	jsons1.inqu_status={};
	  	jsons1.inqu_status.tagTime = tagTime;
	  	json1= {};
	  var callback1 = {
		        onSuccess: function (json1) {
		        	paramResult1=json1.rows;	        	
		        }
		    };
	  //产品发货量
	  AjaxCommunicator.ajaxRequest('/da/homePage2.do?method=productionSituationQuery', 'POST', jsons1, callback1);
	  	//遍历数据
	  	//产品产量（前一天，前一月，前一年）
		var productYieldDayOne = [];
		var productYieldMonthOne = [];
		var productYieldYearOne = []; 
		//产品产量（前二天，前二月，前二年）
		var productYieldDayTwo = [];
		var productYieldMonthTwo = [];
		var productYieldYearTwo = []; 
		//产品产量（前三天，前三月，前三年）
		var productYieldDayThree = [];
		var productYieldMonthThree = [];
		var productYieldYearThree = []; 
		//产品发货量（前一天，前一月，前一年）
		var productDeliveryDayOne = [];
		var productDeliveryMonthOne = [];
		var productDeliveryYearOne = []; 
		//产品发货量（前二天，前二月，前二年）
		var productDeliveryDayTwo = [];
		var productDeliveryMonthTwo = [];
		var productDeliveryYearTwo = []; 
		//产品发货量（前三天，前三月，前三年）
		var productDeliveryDayThree = [];
		var productDeliveryMonthThree = [];
		var productDeliveryYearThree = []; 
		//原料使用量（前一天，前一月，前一年）
		var rawMaterialUseDayOne = [];
		var rawMaterialUseMonthOne = [];
		var rawMaterialUseYearOne = []; 
		//原料使用量（前二天，前二月，前二年）
		var rawMaterialUseDayTwo = [];
		var rawMaterialUseMonthTwo = [];
		var rawMaterialUseYearTwo = [];
		//原料使用量（前三天，前三月，前三年）
		var rawMaterialUseDayThree = [];
		var rawMaterialUseMonthThree = [];
		var rawMaterialUseYearThree = [];
		//遍历数据加载到折线图
		for ( var i = 0; i < paramResult1.length; i++) {
			//产品产量（前一天，前一月，前一年）
			if((paramResult1[i].tagName=="水") && (paramResult1[i].tagTime=='2018-05-20')){	
				productYieldDayOne.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="水") && (paramResult1[i].tagTime==TheOneMonth)){		
				productYieldMonthOne.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="水") && (paramResult1[i].tagTime==TheOneYear)){		
				productYieldYearOne.push(paramResult1[i].dataValue);	
			//产品产量（前二天，前二月，前二年）
			}else if((paramResult1[i].tagName=="水") && (paramResult1[i].tagTime=='2018-05-19')){	
				productYieldDayTwo.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="水") && (paramResult1[i].tagTime==TheTwoMonth)){		
				productYieldMonthTwo.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="水") && (paramResult1[i].tagTime==TheTwoYear)){		
				productYieldYearTwo.push(paramResult1[i].dataValue);	
			//产品产量（前三天，前三月，前三年）
			}else if((paramResult1[i].tagName=="水") && (paramResult1[i].tagTime=='2018-05-18')){	
				productYieldDayThree.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="水") && (paramResult1[i].tagTime==TheThreeMonth)){		
				productYieldMonthThree.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="水") && (paramResult1[i].tagTime==TheThreeYear)){		
				productYieldYearThree.push(paramResult1[i].dataValue);	
			//产品发货量（前一天，前一月，前一年）	
			}else if((paramResult1[i].tagName=="电") && (paramResult1[i].tagTime=='2018-05-20')){	
				productDeliveryDayOne.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="电") && (paramResult1[i].tagTime==TheOneMonth)){		
				productDeliveryMonthOne.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="电") && (paramResult1[i].tagTime==TheOneYear)){		
				productDeliveryYearOne.push(paramResult1[i].dataValue);	
			//产品发货量（前二天，前二月，前二年）	
			}else if((paramResult1[i].tagName=="电") && (paramResult1[i].tagTime=='2018-05-19')){	
				productDeliveryDayTwo.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="电") && (paramResult1[i].tagTime==TheTwoMonth)){		
				productDeliveryMonthTwo.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="电") && (paramResult1[i].tagTime==TheTwoYear)){		
				productDeliveryYearTwo.push(paramResult1[i].dataValue);
			//产品发货量（前三天，前三月，前三年）	
			}else if((paramResult1[i].tagName=="电") && (paramResult1[i].tagTime=='2018-05-18')){	
				productDeliveryDayThree.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="电") && (paramResult1[i].tagTime==TheThreeMonth)){		
				productDeliveryMonthThree.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="电") && (paramResult1[i].tagTime==TheThreeYear)){		
				productDeliveryYearThree.push(paramResult1[i].dataValue);
			//原料使用量（前一天，前一月，前一年）	
			}else if((paramResult1[i].tagName=="煤气") && (paramResult1[i].tagTime=='2018-05-20')){	
				rawMaterialUseDayOne.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="煤气") && (paramResult1[i].tagTime==TheOneMonth)){		
				rawMaterialUseMonthOne.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="煤气") && (paramResult1[i].tagTime==TheOneYear)){		
				rawMaterialUseYearOne.push(paramResult1[i].dataValue);	
			//原料使用量（前二天，前二月，前二年）
			}else if((paramResult1[i].tagName=="煤气") && (paramResult1[i].tagTime=='2018-05-19')){	
				rawMaterialUseDayTwo.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="煤气") && (paramResult1[i].tagTime==TheTwoMonth)){		
				rawMaterialUseMonthTwo.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="煤气") && (paramResult1[i].tagTime==TheTwoYear)){		
				rawMaterialUseYearTwo.push(paramResult1[i].dataValue);	
			//原料使用量（前三天，前三月，前三年）	
			}else if((paramResult1[i].tagName=="煤气") && (paramResult1[i].tagTime=='2018-05-18')){	
				rawMaterialUseDayThree.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="煤气") && (paramResult1[i].tagTime==TheThreeMonth)){		
				rawMaterialUseMonthThree.push(paramResult1[i].dataValue);		
			}else if((paramResult1[i].tagName=="煤气") && (paramResult1[i].tagTime==TheThreeYear)){		
				rawMaterialUseYearThree.push(paramResult1[i].dataValue);	
			}
	}
		//获取系统时间
		var date = new Date();
		var strMonth = date.getMonth() + 1;//月
		var strDay = date.getDate();//日
		var hours = date.getHours();//时
		//赋值到jsp 
		//判断每一天的8点以后显示前一天的数据，否则每一天8点以前显示前两天的
		if(hours>=8){
			//前一天（产品产量，产品发货量，原料使用量）
			document.getElementById("productYieldDay").innerHTML=productYieldDayOne;
			document.getElementById("productDeliveryDay").innerHTML=productDeliveryDayOne;
			document.getElementById("rawMaterialUseDay").innerHTML=rawMaterialUseDayOne;
		}else if (hours<8 && hours!=8){
			//前两天（产品产量，产品发货量，原料使用量）
			document.getElementById("productYieldDay").innerHTML=productYieldDayTwo;
			document.getElementById("productDeliveryDay").innerHTML=productDeliveryDayTwo;
			document.getElementById("rawMaterialUseDay").innerHTML=rawMaterialUseDayTwo;	
		}
		//判断每一月的一号的8点以后显示前一天的数据，否则8点以前和其他时间显示前两天的
		if(strDay==1){
			if(hours>=8){
				//前一月（产品产量，产品发货量，原料使用量）
				document.getElementById("productYieldMonth").innerHTML=productYieldMonthOne;
				document.getElementById("productDeliveryMonth").innerHTML=productDeliveryMonthOne;
				document.getElementById("rawMaterialUseMonth").innerHTML=rawMaterialUseMonthOne;
			}else if (hours<8 && hours!=8){
				//前两月（产品产量，产品发货量，原料使用量）
				document.getElementById("productYieldMonth").innerHTML=productYieldMonthTwo;
				document.getElementById("productDeliveryMonth").innerHTML=productDeliveryMonthTwo;
				document.getElementById("rawMaterialUseMonth").innerHTML=rawMaterialUseMonthTwo;	
			}	
		}else{
			//前一月（产品产量，产品发货量，原料使用量）
			document.getElementById("productYieldMonth").innerHTML=productYieldMonthOne;
			document.getElementById("productDeliveryMonth").innerHTML=productDeliveryMonthOne;
			document.getElementById("rawMaterialUseMonth").innerHTML=rawMaterialUseMonthOne;
		}
		//判断每一年的一月的一号的8点以后显示前一天的数据，否则8点以前和其他时间显示前两天的
		if(strMonth==1){
			if(strDay==1){
				if(hours>=8){
					//前一年（产品产量，产品发货量，原料使用量）
					document.getElementById("productYieldYear").innerHTML=productYieldYearOne;
					document.getElementById("productDeliveryYear").innerHTML=productDeliveryYearOne;
					document.getElementById("rawMaterialUseYear").innerHTML=rawMaterialUseYearOne;
    			}else if (hours<8 && hours!=8){
    				//前两年（产品产量，产品发货量，原料使用量）
					document.getElementById("productYieldYear").innerHTML=productYieldYearTwo;
					document.getElementById("productDeliveryYear").innerHTML=productDeliveryYearTwo;
					document.getElementById("rawMaterialUseYear").innerHTML=rawMaterialUseYearTwo;	
    			}	
			}else{
				//前一年（产品产量，产品发货量，原料使用量）
				document.getElementById("productYieldYear").innerHTML=productYieldYearOne;
				document.getElementById("productDeliveryYear").innerHTML=productDeliveryYearOne;
				document.getElementById("rawMaterialUseYear").innerHTML=rawMaterialUseYearOne;
			}
		}else{
			//前一年（产品产量，产品发货量，原料使用量）
			document.getElementById("productYieldYear").innerHTML=productYieldYearOne;
			document.getElementById("productDeliveryYear").innerHTML=productDeliveryYearOne;
			document.getElementById("rawMaterialUseYear").innerHTML=rawMaterialUseYearOne;
		} 		
		
		//比较数据的大小判断数据升降
		//判断每一天的8点以后（前一天的数据跟前两天的数据比较），否则每一天8点以前（前两天的数据跟前三天的数据比较）
		if(hours>=8){
			//产品产量（前一天）跟（前二天）比较
			if(productYieldDayOne[0]>productYieldDayTwo[0]){
				document.getElementById("productYieldDayimg").src = "../common/images/rise.png";
			}else if(productYieldDayOne[0]<productYieldDayTwo[0]){
				document.getElementById("productYieldDayimg").src = "../common/images/decline.png";
			}else if(productYieldDayOne[0]==productYieldDayTwo[0]){
				document.getElementById("productYieldDayimg").src = "../common/images/equalTo.png";
			}
			//产品发货量（前一天）跟（前二天）比较
			if(productDeliveryDayOne[0]>productDeliveryDayTwo[0]){
				document.getElementById("productDeliveryDayimg").src = "../common/images/rise.png";
			}else if(productDeliveryDayOne[0]<productDeliveryDayTwo[0]){
				document.getElementById("productDeliveryDayimg").src = "../common/images/decline.png";
			}else if(productDeliveryDayOne[0]==productDeliveryDayTwo[0]){
				document.getElementById("productDeliveryDayimg").src = "../common/images/equalTo.png";
			} 
			//原料使用量（前一天）跟（前二天）比较
			if(rawMaterialUseDayOne[0]>rawMaterialUseDayTwo[0]){
				document.getElementById("rawMaterialUseDayimg").src = "../common/images/rise.png";
			}else if(rawMaterialUseDayOne[0]<rawMaterialUseDayTwo[0]){
				document.getElementById("rawMaterialUseDayimg").src = "../common/images/decline.png";
			}else if(rawMaterialUseDayOne[0]==rawMaterialUseDayTwo[0]){
				document.getElementById("rawMaterialUseDayimg").src = "../common/images/equalTo.png";
			}
		}else if (hours<8 && hours!=8){
			//产品产量（前两天）跟（前三天）比较
			if(productYieldDayTwo[0]>productYieldDayThree[0]){
				document.getElementById("productYieldDayimg").src = "../common/images/rise.png";
			}else if(productYieldDayTwo[0]<productYieldDayThree[0]){
				document.getElementById("productYieldDayimg").src = "../common/images/decline.png";
			}else if(productYieldDayTwo[0]==productYieldDayThree[0]){
				document.getElementById("productYieldDayimg").src = "../common/images/equalTo.png";
			}
			//产品发货量（前两天）跟（前三天）比较
			if(productDeliveryDayTwo[0]>productDeliveryDayThree[0]){
				document.getElementById("productDeliveryDayimg").src = "../common/images/rise.png";
			}else if(productDeliveryDayTwo[0]<productDeliveryDayThree[0]){
				document.getElementById("productDeliveryDayimg").src = "../common/images/decline.png";
			}else if(productDeliveryDayTwo[0]==productDeliveryDayThree[0]){
				document.getElementById("productDeliveryDayimg").src = "../common/images/equalTo.png";
			} 
			//原料使用量（前两天）跟（前三天）比较
			if(rawMaterialUseDayTwo[0]>rawMaterialUseDayThree[0]){
				document.getElementById("rawMaterialUseDayimg").src = "../common/images/rise.png";
			}else if(rawMaterialUseDayTwo[0]<rawMaterialUseDayThree[0]){
				document.getElementById("rawMaterialUseDayimg").src = "../common/images/decline.png";
			}else if(rawMaterialUseDayTwo[0]==rawMaterialUseDayThree[0]){
				document.getElementById("rawMaterialUseDayimg").src = "../common/images/equalTo.png";
			}	
		}
		//判断每个月的一号的8点以后（前一天的数据跟前两天的数据比较），否则8点以前和其他时间（前两天的数据跟前三天的数据比较）
		if(strDay==1){
			if(hours>=8){
				//产品产量（前一月）跟（前二月）比较
				if(productYieldMonthOne[0]>productYieldMonthTwo[0]){
					document.getElementById("productYieldMonthimg").src = "../common/images/rise.png";
				}else if(productYieldMonthOne[0]<productYieldMonthTwo[0]){
					document.getElementById("productYieldMonthimg").src = "../common/images/decline.png";
				}else if(productYieldMonthOne[0]==productYieldMonthTwo[0]){
					document.getElementById("productYieldMonthimg").src = "../common/images/equalTo.png";
				}
				//产品发货量（前一月）跟（前二月）比较
				if(productDeliveryMonthOne[0]>productDeliveryMonthTwo[0]){
					document.getElementById("productDeliveryMonthimg").src = "../common/images/rise.png";
				}else if(productDeliveryMonthOne[0]<productDeliveryMonthTwo[0]){
					document.getElementById("productDeliveryMonthimg").src = "../common/images/decline.png";
				}else if(productDeliveryMonthOne[0]==productDeliveryMonthTwo[0]){
					document.getElementById("productDeliveryMonthimg").src = "../common/images/equalTo.png";
				}
				//原料使用量（前一月）跟（前二月）比较
				if(rawMaterialUseMonthOne[0]>rawMaterialUseMonthTwo[0]){
					document.getElementById("rawMaterialUseMonthimg").src = "../common/images/rise.png";
				}else if(rawMaterialUseMonthOne[0]<rawMaterialUseMonthTwo[0]){
					document.getElementById("rawMaterialUseMonthimg").src = "../common/images/decline.png";
				}else if(rawMaterialUseMonthOne[0]==rawMaterialUseMonthTwo[0]){
					document.getElementById("rawMaterialUseMonthimg").src = "../common/images/equalTo.png";
				}
			}else if (hours<8 && hours!=8){
				//产品产量（前两月）跟（前三月）比较
				if(productYieldMonthTwo[0]>productYieldMonthThree[0]){
					document.getElementById("productYieldMonthimg").src = "../common/images/rise.png";
				}else if(productYieldMonthTwo[0]<productYieldMonthThree[0]){
					document.getElementById("productYieldMonthimg").src = "../common/images/decline.png";
				}else if(productYieldMonthTwo[0]==productYieldMonthThree[0]){
					document.getElementById("productYieldMonthimg").src = "../common/images/equalTo.png";
				}
				//产品发货量（前两月）跟（前三月）比较
				if(productDeliveryMonthTwo[0]>productDeliveryMonthThree[0]){
					document.getElementById("productDeliveryMonthimg").src = "../common/images/rise.png";
				}else if(productDeliveryMonthTwo[0]<productDeliveryMonthThree[0]){
					document.getElementById("productDeliveryMonthimg").src = "../common/images/decline.png";
				}else if(productDeliveryMonthTwo[0]==productDeliveryMonthThree[0]){
					document.getElementById("productDeliveryMonthimg").src = "../common/images/equalTo.png";
				}
				//原料使用量（前两月）跟（前三月）比较
				if(rawMaterialUseMonthTwo[0]>rawMaterialUseMonthThree[0]){
					document.getElementById("rawMaterialUseMonthimg").src = "../common/images/rise.png";
				}else if(rawMaterialUseMonthTwo[0]<rawMaterialUseMonthThree[0]){
					document.getElementById("rawMaterialUseMonthimg").src = "../common/images/decline.png";
				}else if(rawMaterialUseMonthTwo[0]==rawMaterialUseMonthThree[0]){
					document.getElementById("rawMaterialUseMonthimg").src = "../common/images/equalTo.png";
				}	
			}	
		}else{
			//产品产量（前一月）跟（前二月）比较
			if(productYieldMonthOne[0]>productYieldMonthTwo[0]){
				document.getElementById("productYieldMonthimg").src = "../common/images/rise.png";
			}else if(productYieldMonthOne[0]<productYieldMonthTwo[0]){
				document.getElementById("productYieldMonthimg").src = "../common/images/decline.png";
			}else if(productYieldMonthOne[0]==productYieldMonthTwo[0]){
				document.getElementById("productYieldMonthimg").src = "../common/images/equalTo.png";
			}
			//产品发货量（前一月）跟（前二月）比较
			if(productDeliveryMonthOne[0]>productDeliveryMonthTwo[0]){
				document.getElementById("productDeliveryMonthimg").src = "../common/images/rise.png";
			}else if(productDeliveryMonthOne[0]<productDeliveryMonthTwo[0]){
				document.getElementById("productDeliveryMonthimg").src = "../common/images/decline.png";
			}else if(productDeliveryMonthOne[0]==productDeliveryMonthTwo[0]){
				document.getElementById("productDeliveryMonthimg").src = "../common/images/equalTo.png";
			}
			//原料使用量（前一月）跟（前二月）比较
			if(rawMaterialUseMonthOne[0]>rawMaterialUseMonthTwo[0]){
				document.getElementById("rawMaterialUseMonthimg").src = "../common/images/rise.png";
			}else if(rawMaterialUseMonthOne[0]<rawMaterialUseMonthTwo[0]){
				document.getElementById("rawMaterialUseMonthimg").src = "../common/images/decline.png";
			}else if(rawMaterialUseMonthOne[0]==rawMaterialUseMonthTwo[0]){
				document.getElementById("rawMaterialUseMonthimg").src = "../common/images/equalTo.png";
			}
		}
		//判断每一年的一月的一号的8点以后（前一天的数据跟前两天的数据比较），否则8点以前和其他时间（前两天的数据跟前三天的数据比较）
		if(strMonth==1){
			if(strDay==1){
				if(hours>=8){
					//产品产量（前一年）跟（前二年）比较
					if(productYieldYearOne[0]>productYieldYearTwo[0]){
						document.getElementById("productYieldYearimg").src = "../common/images/rise.png";
					}else if(productYieldYearOne[0]<productYieldYearTwo[0]){
						document.getElementById("productYieldYearimg").src = "../common/images/decline.png";
					}else if(productYieldYearOne[0]==productYieldYearTwo[0]){
						document.getElementById("productYieldYearimg").src = "../common/images/equalTo.png";
					}
					//产品发货量（前一年）跟（前二年）比较
					if(productDeliveryYearOne[0]>productDeliveryYearTwo[0]){
						document.getElementById("productDeliveryYearimg").src = "../common/images/rise.png";
					}else if(productDeliveryYearOne[0]<productDeliveryYearTwo[0]){
						document.getElementById("productDeliveryYearimg").src = "../common/images/decline.png";
					}else if(productDeliveryYearOne[0]==productDeliveryYearTwo[0]){
						document.getElementById("productDeliveryYearimg").src = "../common/images/equalTo.png";
					}
					//原料使用量（前一年）跟（前二年）比较
					if(rawMaterialUseYearOne[0]>rawMaterialUseYearTwo[0]){
						document.getElementById("rawMaterialUseYearimg").src = "../common/images/rise.png";
					}else if(rawMaterialUseYearOne[0]<rawMaterialUseYearTwo[0]){
						document.getElementById("rawMaterialUseYearimg").src = "../common/images/decline.png";
					}else if(rawMaterialUseYearOne[0]==rawMaterialUseYearTwo[0]){
						document.getElementById("rawMaterialUseYearimg").src = "../common/images/equalTo.png";
					}
    			}else if (hours<8 && hours!=8){
    				//产品产量（前两年）跟（前三年）比较
    				if(productYieldYearTwo[0]>productYieldYearThree[0]){
    					document.getElementById("productYieldYearimg").src = "../common/images/rise.png";
    				}else if(productYieldYearTwo[0]<productYieldYearThree[0]){
    					document.getElementById("productYieldYearimg").src = "../common/images/decline.png";
    				}else if(productYieldYearTwo[0]==productYieldYearThree[0]){
    					document.getElementById("productYieldYearimg").src = "../common/images/equalTo.png";
    				}
    				//产品发货量（前两年）跟（前三年）比较
    				if(productDeliveryYearTwo[0]>productDeliveryYearThree[0]){
    					document.getElementById("productDeliveryYearimg").src = "../common/images/rise.png";
    				}else if(productDeliveryYearTwo[0]<productDeliveryYearThree[0]){
    					document.getElementById("productDeliveryYearimg").src = "../common/images/decline.png";
    				}else if(productDeliveryYearTwo[0]==productDeliveryYearThree[0]){
    					document.getElementById("productDeliveryYearimg").src = "../common/images/equalTo.png";
    				}
    				//原料使用量（前两年）跟（前三年）比较
    				if(rawMaterialUseYearTwo[0]>rawMaterialUseYearThree[0]){
    					document.getElementById("rawMaterialUseYearimg").src = "../common/images/rise.png";
    				}else if(rawMaterialUseYearTwo[0]<rawMaterialUseYearThree[0]){
    					document.getElementById("rawMaterialUseYearimg").src = "../common/images/decline.png";
    				}else if(rawMaterialUseYearTwo[0]==rawMaterialUseYearThree[0]){
    					document.getElementById("rawMaterialUseYearimg").src = "../common/images/equalTo.png";
    				}	
    			}	
			}else{
				//产品产量（前一年）跟（前二年）比较
				if(productYieldYearOne[0]>productYieldYearTwo[0]){
					document.getElementById("productYieldYearimg").src = "../common/images/rise.png";
				}else if(productYieldYearOne[0]<productYieldYearTwo[0]){
					document.getElementById("productYieldYearimg").src = "../common/images/decline.png";
				}else if(productYieldYearOne[0]==productYieldYearTwo[0]){
					document.getElementById("productYieldYearimg").src = "../common/images/equalTo.png";
				}
				//产品发货量（前一年）跟（前二年）比较
				if(productDeliveryYearOne[0]>productDeliveryYearTwo[0]){
					document.getElementById("productDeliveryYearimg").src = "../common/images/rise.png";
				}else if(productDeliveryYearOne[0]<productDeliveryYearTwo[0]){
					document.getElementById("productDeliveryYearimg").src = "../common/images/decline.png";
				}else if(productDeliveryYearOne[0]==productDeliveryYearTwo[0]){
					document.getElementById("productDeliveryYearimg").src = "../common/images/equalTo.png";
				}
				//原料使用量（前一年）跟（前二年）比较
				if(rawMaterialUseYearOne[0]>rawMaterialUseYearTwo[0]){
					document.getElementById("rawMaterialUseYearimg").src = "../common/images/rise.png";
				}else if(rawMaterialUseYearOne[0]<rawMaterialUseYearTwo[0]){
					document.getElementById("rawMaterialUseYearimg").src = "../common/images/decline.png";
				}else if(rawMaterialUseYearOne[0]==rawMaterialUseYearTwo[0]){
					document.getElementById("rawMaterialUseYearimg").src = "../common/images/equalTo.png";
				}
			}
		}else{
			//产品产量（前一年）跟（前二年）比较
			if(productYieldYearOne[0]>productYieldYearTwo[0]){
				document.getElementById("productYieldYearimg").src = "../common/images/rise.png";
			}else if(productYieldYearOne[0]<productYieldYearTwo[0]){
				document.getElementById("productYieldYearimg").src = "../common/images/decline.png";
			}else if(productYieldYearOne[0]==productYieldYearTwo[0]){
				document.getElementById("productYieldYearimg").src = "../common/images/equalTo.png";
			}
			//产品发货量（前一年）跟（前二年）比较
			if(productDeliveryYearOne[0]>productDeliveryYearTwo[0]){
				document.getElementById("productDeliveryYearimg").src = "../common/images/rise.png";
			}else if(productDeliveryYearOne[0]<productDeliveryYearTwo[0]){
				document.getElementById("productDeliveryYearimg").src = "../common/images/decline.png";
			}else if(productDeliveryYearOne[0]==productDeliveryYearTwo[0]){
				document.getElementById("productDeliveryYearimg").src = "../common/images/equalTo.png";
			}
			//原料使用量（前一年）跟（前二年）比较
			if(rawMaterialUseYearOne[0]>rawMaterialUseYearTwo[0]){
				document.getElementById("rawMaterialUseYearimg").src = "../common/images/rise.png";
			}else if(rawMaterialUseYearOne[0]<rawMaterialUseYearTwo[0]){
				document.getElementById("rawMaterialUseYearimg").src = "../common/images/decline.png";
			}else if(rawMaterialUseYearOne[0]==rawMaterialUseYearTwo[0]){
				document.getElementById("rawMaterialUseYearimg").src = "../common/images/equalTo.png";
			}
		} 				
	}
	function energyConsumption() {
		var paramResult4 ={}; 
		var tagNames=['水','电','煤气'];
		var tagName=tagNames.toString();
		var timeGran='day';
		var startTime='2018-05-17';
		var endTime='2018-05-23';
		var jsons4 = {};
		  	jsons4.inqu_status={};
		  	jsons4.inqu_status.tagName = tagName;
		  	jsons4.inqu_status.timeGran = timeGran;
		  	jsons4.inqu_status.startTime = startTime;
		  	jsons4.inqu_status.endTime = endTime; 
		  	json4= {};
		  var callback4 = {
			        onSuccess: function (json4) {
			        	paramResult4=json4.rows;	        	
			        }
			    };
		  //产品发货量
		  AjaxCommunicator.ajaxRequest('/da/homePage2.do?method=energyConsumptionQuery', 'POST', jsons4, callback4);
		//遍历数据
			var array1 = [];
			var array2 = [];
			var array3 = [];
			var stages = [];
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
				             text: '能源消耗'
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
		                    x:50,
		                    y:50,
		                    x2:10,
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
				            name:'单位：kg',
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
					            },*/					            
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
			 		            /*label: {
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
			  $("#energyConsumption").bxchartsbar(chartsBarOption_stand4);
			  }
	function energySource() {
		var paramResult5 ={}; 
		var tagNames=['水','电','煤气'];
		var tagName=tagNames.toString();
		var timeGran='day';
		var startTime='2018-05-17';
		var endTime='2018-05-23';
		var jsons5 = {};
		  	jsons5.inqu_status={};
		  	jsons5.inqu_status.tagName = tagName;
		  	jsons5.inqu_status.timeGran = timeGran;
		  	jsons5.inqu_status.startTime = startTime;
		  	jsons5.inqu_status.endTime = endTime; 
		  	json5= {};
		  var callback5 = {
			        onSuccess: function (json5) {
			        	paramResult5=json5.rows;	        	
			        }
			    };
		  //产品发货量
		  AjaxCommunicator.ajaxRequest('/da/homePage2.do?method=energySourceQuery', 'POST', jsons5, callback5);
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
				    	/*title: {
				             text: '能源消耗'
				        },*/
				        tooltip: {
				            trigger: 'axis'
				        },
				      //条形的颜色
				        color:['#1E9BB7','#F37B53','#3B3C60'],
				        //背景颜色
				        //backgroundColor: '#F2F2F2',
				        legend: {
				            data: tagNames
				        },
				        //控制echarts与四周的留白
				        grid:{
		                    x:50,
		                    y:50,
		                    x2:10,
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
				            name:'单位：kg',
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
			                  stack: '总量1',        
			                  barMaxWidth:30,//最大宽度
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
					            data:array1,
			                 // data:[6693,-2319,-2590,7460,-2616,-2290,-2290]
			                 },
			                 {
			                     name:tagNames[1],
			                     type:'bar',
			                     stack: '总量2',
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
			                     data:array2,
			                     barMaxWidth:30,//最大宽度
			                   //data:[261,-72,9,-6,18,27,27]		                     
			                 },
			                 {
			                     name:tagNames[2],
			                     type:'bar',
			                     stack: '总量3',
			                     barMaxWidth:30,//最大宽度
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
			 		           data:array3,
			                   //data:[66,0,-30,36,-12,-18,-18]		                    
			              }]
				    }
				};
			  $("#energySource").bxchartsbar(chartsBarOption_stand5);
			}
	 //echart图表自适应
	 $(window).bind('resize',energyConsumption);
	 $(window).bind('resize',energySource);
	gname();
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
	    AjaxCommunicator.ajaxRequest('/da/homePage2.do?method=gNameQuery', 'POST', jsons1, callback1);
	    //获取工号
	    document.getElementById("gname").innerHTML=gname;
	}
	lineStatus();
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
	    AjaxCommunicator.ajaxRequest('/da/homePage2.do?method=lineStatusQuery', 'POST', jsons1, callback1);
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
	  document.getElementById("tagsline1").innerHTML=tagline1;
	  document.getElementById("tagsline2").innerHTML=tagline2;
	  document.getElementById("tagsline3").innerHTML=tagline3;	 
	}
}
function onKeyQuery() {
    var e = window.event || arguments.callee.caller.arguments[0];
    var keyCode = e.keyCode || e.which; // 按键的keyCode
    if (keyCode == 13) {
        on_query_click();
    }
}
//窗口加载时垂直居中
$(window).load(function (){
	//动态获取div高度
	/*var hei=$("#ww").height();                
    document.getElementById("ww").style.line-height=hei+"px";  */  
	//动态水平居中
    /*left: ($('#qq').width() - $('#ww').outerWidth())/2, */
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
	$('#l1').css({ 
        position:'absolute', 
        //动态垂直居中
        top: ($('#r1').height() - $('#l1').outerHeight())/2 + $(document).scrollTop() 
      });
});
//窗口大小变化时垂直居中
$(window).resize(function (){
	//动态获取div高度
	/*var hei=$("#ww").height();                
    document.getElementById("ww").style.line-height=hei+"px";  */  
	//动态水平居中
    /*left: ($('#qq').width() - $('#ww').outerWidth())/2, */
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
	$('#l1').css({ 
        position:'absolute', 
        //动态垂直居中
        top: ($('#r1').height() - $('#l1').outerHeight())/2 + $(document).scrollTop() 
      });
});