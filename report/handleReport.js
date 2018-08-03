$(document).ready(
        function() {            
            baosightRequire.requireFunct(['bxgrid', 'bxdiv', 'bxdialog',
                    'bxalert', 'bxvalidate'], function() {
            	 $("#queryarea").bxdiv();
               // initWidgets();
                
                var gridOption = {
                    caption : '生产中控原始操作记录数据',
                    multiselect: false,
                    colNames : ['','time','team','班次', 'CF-100(ml/min)', '高炉水渣', '水分','比表面积','水分',
                                '磨辊压力','立磨功率','立磨电流','立磨压差','立磨位置','立磨振动',
                                '循环斗提机','成品斗提机电流','立磨喷水量','选粉机转速','选粉机电流',
                                '进口阀门','循环阀门','循环风流量','马达电流','转炉煤气压力','转炉煤气使用量',
                                '二次风机阀门开度','热风炉出口温度','热风炉出口压力','磨机进口温度',
                                '磨机进口压力','磨机出口温度','磨机出口压力','主收尘器出口温度',
                                '主收尘器出口压力','主收尘器出口压差'],
                    colModel : [
                    {
                        name : 'handleId',
                        index : 'handleId',
                        width : 60,
                      //  align: 'center',
                        hidden : true
                    },{
                        name : 'proTime',
                        index : 'proTime',
                       // formatoptions: {newformat:'hh:mm:ss'},
                       // align:'center',
                        width : 150
                      
                    }, {
                        name : 'team',
                        index : 'team',
                        edittype: 'ccs',
                        align:'center',
                        editoptions: 'bt_basicInfo.team',
                        width : 110
                      
                    },{
                        name : 'shift',
                        index : 'shift',
                        edittype: 'ccs',
                        editoptions: 'bt_basicInfo.shift',
                        width : 110
                      
                    }, {
                        name : 'cf100',
                        index : 'cf100',
                        width : 110
                      
                    }, {
                        name : 'feedVolume',
                        index : 'feedVolume',
                        width : 90
                       
                    }, {
                        name : 'material',
                        index : 'material',
                        width : 90,
                        sortable : false
                     
                    }, {
                        name : 'proArea',
                        index : 'proArea',
                        width : 90,
                        sortable : false
                     
                    }, {
                        name : 'proWater',
                        index : 'proWater',
                        width : 90,
                        sortable : false
                     
                    }, {
                        name : 'lmPressure',
                        index : 'lmPressure',
                        width : 90,
                        sortable : false
                     
                    }, {
                        name : 'lmPower',
                        index : 'lmPower',
                        width : 90,
                        sortable : false
                     
                    }, {
                        name : 'lmElectricity',
                        index : 'lmElectricity',
                        width : 90,
                        sortable : false
                      
                    }, {
                        name : 'lmPressureDif',
                        index : 'lmPressureDif',
                        width : 90,
                        sortable : false
                      
                    }, {
                        name : 'lmPosition',
                        index : 'lmPosition',
                        width : 120,
                        sortable : false
                     
                    }, {
                        name : 'lmVibration',
                        index : 'lmVibration',
                        width : 120,
                        sortable : false
                      
                    }, {
                        name : 'lmElevator',
                        index : 'lmElevator',
                        width : 120,
                        sortable : false
                     
                    }, {
                        name : 'lmElevatorElect',
                        index : 'lmElevatorElect',
                        width : 120,
                        sortable : false
                      
                    }, {
                        name : 'lmWaterJet',
                        index : 'lmWaterJet',
                        width : 120,
                        sortable : false
                     
                    }, {
                        name : 'xfjSpeed',
                        index : 'xfjSpeed',
                        width : 120,
                        sortable : false
                     
                    }, {
                        name : 'xfjElectricity',
                        index : 'xfjElectricity',
                        width : 90,
                        sortable : false
                      
                    }, {
                        name : 'idfjImportValve',
                        index : 'idfjImportValve',
                        width : 90,
                        sortable : false
                     
                    }, {
                        name : 'idfjLoopValve',
                        index : 'idfjLoopValve',
                        width : 120,
                        sortable : false
                      
                    }, {
                        name : 'idfjLoopWind',
                        index : 'idfjLoopWind',
                        width : 120,
                        sortable : false
                      
                    }, {
                        name : 'idfjElectricity',
                        index : 'idfjElectricity',
                        width : 120,
                        sortable : false
                      
                    }, {
                        name : 'rflGasPressure',
                        index : 'rflGasPressure',
                        width : 120,
                        sortable : false
                      
                    }, {
                        name : 'rflUsage',
                        index : 'rflUsage',
                        width : 120,
                        sortable : false
                     
                    }, {
                        name : 'rflOpen',
                        index : 'rflOpen',
                        width : 120,
                        sortable : false
                      
                    }, {
                        name : 'rflTemperature',
                        index : 'rflTemperature',
                        width : 120,
                        sortable : false
                      
                    }, {
                        name : 'rflPressure',
                        index : 'rflPressure',
                        width : 120,
                        sortable : false
                    
                    }, {
                        name : 'mjjTemperature',
                        index : 'mjjTemperature',
                        width : 120,
                        sortable : false
                     
                    }, {
                        name : 'mjjPressure',
                        index : 'mjjPressure',
                        width : 120,
                        sortable : false
                     
                    }, {
                        name : 'mjcTemperature',
                        index : 'mjcTemperature',
                        width : 120,
                        sortable : false
                      
                    }, {
                        name : 'mjcPressure',
                        index : 'mjcPressure',
                        width : 120,
                        sortable : false
                      
                    }, {
                        name : 'zscTemperature',
                        index : 'zscTemperature',
                        width : 120,
                        sortable : false
                     
                    },{
                        name : 'zscPressure',
                        index : 'zscPressure',
                        width : 120,
                        sortable : false
                      
                    }, {
                        name : 'zscPressureDif',
                        index : 'zscPressureDif',
                        width : 120,
                        sortable : false
                      
                    }
                    ],
                  //  autowidth: false,
                    shrinkToFit:false,
                    autoScroll: true,
                   // width:4200,
                   // rownumbers: true,
                   // scroll:true,
                    pgbuttons: false,//屏蔽翻页按钮
                    pginput:false,
                    rowNum:12,
                    height:'auto',
                    grouping: true,
                    groupingView: {
                        groupField: ["shift"],
                        groupColumnShow: [false],
                        groupText: ["<span style='cursor:pointer;'  onclick='$(this).prev().click();'><b>{0}</b></span>"],
                        groupOrder: ["asc"],
                      /*groupSummary: [true],
                        summaryType : 'avg',
                        summaryTpl: '<b>Max: {0}</b>',*/
                        groupCollapse: false,  //各分组是否展开  false：展开；true：收缩；
                        plusicon: "ace-icon fa fa-plus",
                        minusicon: "ace-icon fa fa-minus"
                    },
                   // footerrow:true  ,
                   // gridComplete: completeMethod,  //合并单元格
                    sorttable : true,
                    sortname : 'proTime',
                    sortorder : 'asc',
                    jsonReader : {
                        id : "handleId",
                        //records: "12",
                        repeatitems : false
                    }
                };
                
                var option = {
                    queryParam : {},
                    dataPattern : "url",
                    url : "/report/handleReport.do?method=query",
                    showMsgOpt : {
                        showMsgId : "alertdiv"
                    },
                    gridOption : gridOption,
                   
                    navGridOption : {
                    	download: true,
                        downloadParam: {
                            downloadUrl: "/report/handleReport.do/download.do"
                        }
                    }
                };

                $("#jqGrid").bxgrid(option);
               // $("#jqGrid").bxgrid("rawMethodCallMore", 'clearGridData');
                $("#jqGrid").bxgrid("rawMethodCallMore", 'setGroupHeaders', { //显示报表头部信息
                    useColSpanStyle: true,
                    groupHeaders: [
                        {
	                       startColumnName: 'proTime',
	                       numberOfColumns: 1,
	                       titleText: '时间'
                        },
                        {
	                       startColumnName: 'team',
	                       numberOfColumns: 1,
	                       titleText: '班组'
                        },
                        {
                            startColumnName: 'cf100',
                            numberOfColumns: 1,
                            titleText: '助磨剂'
                        },
                        {
                            startColumnName: 'feedVolume',
                            numberOfColumns: 1,
                            titleText: '喂料量(t/h)'
                        },
                        {
                            startColumnName: 'material',
                            numberOfColumns: 1,
                            titleText: '原料'
                        },
                        {
                            startColumnName: 'proArea',
                            numberOfColumns: 2,
                            titleText: '产品质量'
                        },
                        {
                            startColumnName: 'lmPressure',
                            numberOfColumns: 9,
                            titleText: '立磨'
                        },
                        {
                            startColumnName: 'xfjSpeed',
                            numberOfColumns: 2,
                            titleText: '选粉机'
                        },
                        {
                            startColumnName: 'idfjImportValve',
                            numberOfColumns: 4,
                            titleText: 'ID风机'
                        },
                        {
                            startColumnName: 'rflGasPressure',
                            numberOfColumns: 5,
                            titleText: '热风炉'
                        },
                        {
                            startColumnName: 'mjjTemperature',
                            numberOfColumns: 7,
                            titleText: '温度、压力'
                        }
                    ]
                });
                
               
  /*              $("#timeScaleContent").jqGrid("setGroupHeaders",{

        			  useColSpanStyle: true, 

        			  groupHeaders:[

        				{startColumnName: 'name', numberOfColumns: 2, titleText: '基本信息一'},

        				{startColumnName: 'age', numberOfColumns: 2, titleText: '基本信息二'},

        				{startColumnName: 'name2', numberOfColumns: 2, titleText: '基本信息三'},

        				{startColumnName: 'age2', numberOfColumns: 2, titleText: '基本信息四'}

        			  ]	

        		});

        //单独调用该方法，设置三级表头

        		$("#timeScaleContent").jqGrid("setComplexGroupHeaders",{

        			  complexGroupHeaders:[

        			     {startColumnName:'name',numberOfColumns:4,titleText:'基本信息A'},

        			     {startColumnName:'deptname',numberOfColumns:5,titleText:'基本信息B'}

        			  ]	

        		});*/
            });     
            
            function completeMethod(){  
            	/*$(".ui-jqgrid-sdiv").show();*/
                var sum_scaleDesc1=$(this).getCol('cf100',false,'sum');  
                var sum_scaleDesc2=$(this).getCol('feedVolume',false,'sum'); 
               // alert(sum_scaleDesc1);
                $(this).footerData('set', { "cblb": '合计', scaleDesc1: sum_scaleDesc1, scaleDesc2: sum_scaleDesc2 });  
            }  

            $(window).on('resize.jqGrid', function () {
                $("#table_jqGrid").jqGrid( 'setGridWidth', $(".page-content").width() );
            });
            
           /* $("#page_table_jqGrid").hide();
           console.log($("#page_table_jqGrid"),$("#pg_page_table_jqGrid"),$(".ui-pager-control"));
           $("#cursor").prev().click();*/
            
        });





function on_query_click() {
	//jQuery("#gridTable").jqGrid("clearGridData");
	//$("#jqGrid").bxgrid("rawMethodCallMore", 'clearGridData');
    var queryParam = new Object();
    $("#queryarea").bxdiv('setQueryFromDiv', queryParam, "inqu_status");
    $("#jqGrid").bxgrid("option", "queryParam", queryParam);
    $("#jqGrid").bxgrid("query");
   // $("#jqGrid").bxgrid("rawMethodCallMore", 'clearGridData');
    
   /* var queryParam = {
    		'systemCode' : $("#inqu_status-systemCode").val(),
    		'systemName' : $("#inqu_status-systemName").val()
    	};
    	$("#jqGrid").bxgrid("option", "queryParam", queryParam);
    	$("#jqGrid").bxgrid("query");*/
    
    
    
}

function initWidgets() {
    $("#queryarea").bxdiv();
    $("#detail").bxdiv();
    $("#detail").bxvalidate();
    var ruleOptionCustom = {
        rules : {
            detailcompanyCode : {
                required : true,
                englishCheck : true
            },
            detailcompanyName : {
                required : true,
                stringCheck : true
            },
            detailareaCode : {
                required : true,
                englishCheck : true
            }
        }
    };
    $("#detail").bxvalidate("option", "ruleOptionCustom", ruleOptionCustom);
}

function dialogMessage(title, centext) {    
    var dialogOpt = {
        title: title,
        custom:false,
        content: centext,   
        buttons:[{
            text : "确认",
                   "class" : "btn btn-primary btn-xs",
                    click : function() {
                        deleteOK();
                        $(this).dialog("close");
                    }
        }]
    };
    $('#dialogInfo').bxdialog(dialogOpt);
}

function changeDate(){
	
}
