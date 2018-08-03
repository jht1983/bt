
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
                $("#inqu_status-producLine").bxcombobox({
                    dataPattern: 'ccs',
                    ccsId: "producLine",
                    async: false
                    
                });
                $("#inqu_status-statisticalType").bxcombobox({
                    dataPattern: 'ccs',
                    ccsId: "statisticalType",
                    async: false
                    
                });
                on_query_click();
            });
});


function on_query_click() {
	var paramResult;
    var queryParam = new Object();
   //$("#queryarea").bxdiv('setQueryFromDiv', queryParam, "inqu_status");
    
    var timeGran=$("#inqu_status-timeGran").bxcombobox("selectObj").val();
	var producLine=$("#inqu_status-producLine").bxcombobox("selectObj").val();
	var statisticalType=$("#inqu_status-statisticalType").bxcombobox("selectObj").val();
    var startTime=$("#startTime").val();
	var entTime=$("#endTime").val();
	var paramJsonObj = new Object();
    paramJsonObj.detail = {};
    paramJsonObj.detail.result = [];  //{"detail":{"result":[]}}
    /*paramJsonObj.detail.result.push(timeGran);
    paramJsonObj.detail.result.push(producLine);
    paramJsonObj.detail.result.push(statisticalType);
    paramJsonObj.detail.result.push(statisticalType);*/
    
    var jsonOjectResult = new Object();
    jsonOjectResult.rows = [];
   
	var callback = {
	        onSuccess: function (paramJsonObj) {
	        	/*var showMsgOpt = {
	                    showMsgId: "alertdiv",
	                    status: res.status,
	                    showMsg: res.returnMsg
	                };*/
	        	/*var showMsgOpt = {
	                    showMsgId: "alertdiv",
	                    status: paramJsonObj.status,
	                    showMsg: paramJsonObj.returnMsg
	                };*/
	        
	      //Todo
	         paramResult=paramJsonObj.rows;
	        	
	        }
	    };
    AjaxCommunicator.ajaxRequest('/da/trendAnalysis.do?method=query', 'POST', paramJsonObj, callback);
	
	
	var array = [];
	var stage = [];
	var colorList = [];
	for ( var i = 0; i < paramResult.length; i++) {
		stage.push(paramResult[i].updateTime);
		array.push(paramResult[i].trendUsageAmount);
	}

	require.config({
		paths : {
			echarts : '/bt_production/common/echarts'
		}
	});
	// 使用
	require(['echarts',
			 'echarts/chart/line',   // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
			 'echarts/chart/bar' ], function(ec) {
		// 基于准备好的dom，初始化echarts图表
		//var myChart = ec.init(document.getElementById('main4'), 'shine');
		//var myChart = ec.init($("#chartsdemo"), 'shine');
		//var myChart = ec.init($("#chartsdemo"),'macarons'); 
		var myChart = ec.init(document.getElementById('main'),'macarons'); 
		option = {
			tooltip : {
				trigger : 'axis'
			},
			toolbox : {
				show : true,
				feature : {
					mark : {
						show : true
					},
					dataView : {
						show : true,
						readOnly : false
					},
					magicType : {
						show : true,
						type : [ 'line', 'bar' ]
					},
					restore : {
						show : true
					},
					saveAsImage : {
						show : true
					}
				}
			},
			calculable : true,
			xAxis : [ {
				type : 'category',
				data : stage,
				axisLabel : {
					interval : 0,
					rotate : 10
				}

			} ],
			yAxis : [ {
				type : 'value'
			} ],
			series : [ {
				name : '',
				type : 'bar',
				data : array,
				itemStyle : {
					normal : {
						color:function(){
							return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
						},
						//以下为是否显示
						label : {
							show : true
						}
					}
				}
			} ]
		};
		myChart.setOption(option);
	});
	
	
	var chartsBarOption_stand = {
		    dataPattern: 'local',
		    chartOption: {
		        title: {
		            text: '1#生产线电使用量',
		            subtext: '单位:Kwh'
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
		                    type: ['line', 'bar']
		                },
		                restore: {
		                    show: true
		                },
		                saveAsImage: {
		                    show: true
		                }
		            }
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
		            type: 'line',
		            //barMaxWidth:30,//最大宽度
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
		                    name: '平均值'
		                }]
		            }
		        }]
		    }
		};
		//$("#bardemostandard").bxchartsbar(chartsBarOption_stand); 
	  $("#bardemostandard").bxchartsline(chartsBarOption_stand); 

    
}

function onKeyQuery() {
    var e = window.event || arguments.callee.caller.arguments[0];
    var keyCode = e.keyCode || e.which; // 按键的keyCode
    if (keyCode == 13) {
        on_query_click();
    }
}

function changeDate(){
	
}
