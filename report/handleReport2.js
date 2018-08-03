$(document).ready(
        function() {            
            baosightRequire.requireFunct(['bxgrid', 'bxdiv', 'bxdialog',
                    'bxalert', 'bxvalidate'], function() {
                initWidgets();
                var gridOption = {
                    caption : '生产中控原始操作记录数据',
                    colNames : ['ID号', 'CF-100(ml/min)', '高炉水渣', '水分'],
                    colModel : [
                    {
                        name : 'handleId',
                        index : 'handleId',
                        width : 60,
                        hidden : true
                    }, {
                        name : 'cf100',
                        index : 'cf100',
                        width : 60
                      
                    }, {
                        name : 'feedVolume',
                        index : 'feedVolume',
                        width : 90
                       
                    }, {
                        name : 'material',
                        index : 'material',
                        width : 90,
                        sortable : false
                     
                    }],
                 
                    sorttable : true,
                    sortname : 'handleId',
                    sortorder : 'desc',
                    jsonReader : {
                        id : "handleId",
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
                    gridOption : gridOption
                   
                };

                $("#jqGrid").bxgrid(option);
                $("#jqGrid").bxgrid("rawMethodCallMore", 'setGroupHeaders', { //显示报表头部信息
                    useColSpanStyle: true,
                    groupHeaders: [
                        {
                            startColumnName: 'cf100',
                            numberOfColumns: 1,
                            titleText: '助磨剂'
                        },
                        {
                            startColumnName: 'feedVolume',
                            numberOfColumns: 2,
                            titleText: '喂料量(t/h)'
                        }
                    ]
                });
                
            });     
        
            $(window).on('resize.jqGrid', function () {
                $("#table_jqGrid").jqGrid( 'setGridWidth', $(".page-content").width() );
            });
            
        });





function on_query_click() {
    var queryParam = new Object();
    //$("#queryarea").bxdiv('setInfoFromDiv', queryParam, "inqu_status");
    $("#queryarea").bxdiv('setQueryFromDiv', queryParam, "inqu_status");
    $("#jqGrid").bxgrid("option", "queryParam", queryParam);
    $("#jqGrid").bxgrid("query");
    
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
