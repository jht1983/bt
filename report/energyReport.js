$(document).ready(
        function() {            
            baosightRequire.requireFunct(['bxgrid', 'bxdiv', 'bxdialog',
                    'bxalert', 'bxvalidate'], function() {
            	 $("#queryarea").bxdiv();
               // initWidgets();
                
                var gridOption = {
                    caption : '中控能源数据原始信息',
                    multiselect: false,
                    colNames : ['','time','team','班次', '(kg)', '(m3)', '(m3)','(Kwh)',
                                '(Kwh)','(Kwh)','(Kwh)','(kg)','(ml/min)'],
                    colModel : [
                    {
                        name : 'energyId',
                        index : 'energyId',
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
                        width : 110,
                        hidden : true
                      
                    },{
                        name : 'shift',
                        index : 'shift',
                        edittype: 'ccs',
                        editoptions: 'bt_basicInfo.shift',
                        width : 110
                      
                    }, {
                        name : 'waterSlag',
                        index : 'waterSlag',
                        width : 110
                      
                    }, {
                        name : 'coalGas',
                        index : 'coalGas',
                        width : 90
                       
                    }, {
                        name : 'abnormalGas',
                        index : 'abnormalGas',
                        width : 90,
                        sortable : false
                     
                    }, {
                        name : 'mainMotor',
                        index : 'mainMotor',
                        width : 90,
                        sortable : false
                     
                    }, {
                        name : 'idFj',
                        index : 'idFj',
                        width : 90,
                        sortable : false
                     
                    }, {
                        name : 'otherMeter',
                        index : 'otherMeter',
                        width : 90,
                        sortable : false
                     
                    }, {
                        name : 'xfjMeter',
                        index : 'xfjMeter',
                        width : 90,
                        sortable : false
                     
                    }, {
                        name : 'tlh',
                        index : 'tlh',
                        width : 90,
                        sortable : false
                     
                    }, {
                        name : 'zmjUnitUsage',
                        index : 'zmjUnitUsage',
                        width : 90,
                        sortable : false
                     
                    }
                    ],
                  //  autowidth: false,
                  //  shrinkToFit:false,
                  //  autoScroll: true,
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
                        groupCollapse: true,  //各分组是否展开  false：展开；true：收缩；
                        plusicon: "ace-icon fa fa-plus",
                        minusicon: "ace-icon fa fa-minus"
                    },
                   // footerrow:true  ,
                   // gridComplete: completeMethod,  //合并单元格
                    sorttable : true,
                    sortname : 'proTime',
                    sortorder : 'asc',
                    jsonReader : {
                        id : "energyId",
                        //records: "12",
                        repeatitems : false
                    }
                };
                
                var option = {
                    queryParam : {},
                    dataPattern : "url",
                    url : "/report/energyReport.do?method=query",
                    showMsgOpt : {
                        showMsgId : "alertdiv"
                    },
                    gridOption : gridOption,
                   
                    navGridOption : {
                    	download: true,
                        downloadParam: {
                            downloadUrl: "/report/energyReport.do/download.do"
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
                            startColumnName: 'waterSlag',
                            numberOfColumns: 1,
                            titleText: '水渣读数'
                        },
                        {
                            startColumnName: 'coalGas',
                            numberOfColumns: 1,
                            titleText: '煤气读数'
                        },
                        {
                            startColumnName: 'abnormalGas',
                            numberOfColumns: 1,
                            titleText: '异常停机煤气用量'
                        },
                        {
                            startColumnName: 'mainMotor',
                            numberOfColumns: 1,
                            titleText: '主电机电表读数'
                        },
                        {
                            startColumnName: 'idFj',
                            numberOfColumns: 1,
                            titleText: 'ID风机电表读数'
                        },
                        {
                            startColumnName: 'otherMeter',
                            numberOfColumns: 1,
                            titleText: '其它电表读数'
                        },
                        {
                            startColumnName: 'xfjMeter',
                            numberOfColumns: 1,
                            titleText: '选粉机电表读数'
                        },
                        {
                            startColumnName: 'tlh',
                            numberOfColumns: 1,
                            titleText: '脱硫灰'
                        },
                        {
                            startColumnName: 'zmjUnitUsage',
                            numberOfColumns: 1,
                            titleText: '助磨剂单位用量'
                        }
                    ]
                });
                
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
