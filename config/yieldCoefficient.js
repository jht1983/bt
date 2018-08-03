$(document).ready(
        function() {            
            baosightRequire.requireFunct(['bxgrid', 'bxdiv', 'bxdialog',
                    'bxalert', 'bxvalidate'], function() {
                initWidgets();
                var gridOption = {
                    caption : '产量折算系数维护',
                    colNames : ['', '产品编码', '产品名称','折算系数', '描述'],
                    colModel : [
                    {
                        name : 'Id',
                        index : 'Id',
                        width : 60,
                        hidden : true
                    }, {
                        name : 'productCode',
                        index : 'productCode',
                        width : 60
                      //  editable : true
		            }, {
		                name : 'productName',
		                index : 'productName',
		                width : 60
		              //  editable : true
		            },{
                        name : 'yieldCoefficient',
                        index : 'yieldCoefficient',
                        width : 90
                       // editable : true
                    }, {
                        name : 'yieldDesc',
                        index : 'Desc',
                        width : 90
                       // editable : true
                    }],
                   // footerrow:true  ,
                   // gridComplete: gridComplete1,  //合并单元格
                    sorttable : true,
                    sortname : 'productName',
                    sortorder : 'desc',
                    jsonReader : {
                        id : "Id",
                        repeatitems : false
                    }
                };

                var option = {
                    queryParam : {},
                    dataPattern : "url",
                    url : "/config/yieldCoefficient.do?method=query",
                    showMsgOpt : {
                        showMsgId : "alertdiv"
                    },
                    gridOption : gridOption,
                    navGridOption : {
                    	edit: true,
		                editicon: 'ace-icon fa fa-pencil blue',
		                editfunc : updatePage,
		                add: true,
		                addicon: 'ace-icon fa fa-plus-circle purple',
                        addfunc : insertPage,
                        del: true,
		                delicon: 'ace-icon fa fa-trash-o red',
                        delfunc : deletePage
                    }
                };

                $("#yieldCoefficientContent").bxgrid(option);
            	
            });     

            $(window).on('resize.jqGr', function () {
                $("#table_yieldCoefficientContent").jqGrid( 'setGridWidth', $(".page-content").width() );
            });
            
        });

function insertPage() {

    $("#detail").bxdiv("cleanPopDiv");
    var buttons = [
            {
                text : "保存",
                "class" : "btn btn-primary btn-xs",
                click : function() {
                    if ($("#detail").bxvalidate("validate")) {
                        var paramJsonObj = new Object();
                        $("#detail").bxdiv('setInfoFromDiv', paramJsonObj,
                                'detail');
                        var callback = {
                            onSuccess : function(paramJsonObj) {
                                var showMsgOpt = {
                                        showMsgId : "alertdiv",
                                        status : paramJsonObj.status,
                                        showMsg : paramJsonObj.returnMsg
                                    };                                  
                                $("#yieldCoefficientContent").bxgrid("option","showMsgOpt",showMsgOpt);                              
                                $("#yieldCoefficientContent").bxgrid("query");
                                $("#detail").dialog("close");
                            }
                        };
                        AjaxCommunicator
                                .ajaxRequest(
                                        '/config/yieldCoefficient.do?method=insert',
                                        'POST', paramJsonObj, callback);
                    }
                }
            } ];

    var title = "新增记录";
    var dialogOpt = {
        title : title,
        buttons : buttons
    };
    $("#detail").bxdialog(dialogOpt);
}

function deletePage() {
    dialogMessage("确认删除","数据删除后将不可恢复，是否确定删除");
}

function deleteOK() {
    var paramJsonObj = new Object();
    $("#yieldCoefficientContent").bxgrid('setInfoFromGrid', paramJsonObj, 'result');
    var callback = {
        onSuccess : function(paramJsonObj) {
            var showMsgOpt = {
                    showMsgId : "alertdiv",
                    status : paramJsonObj.status,
                    showMsg : paramJsonObj.returnMsg
                };
                
            $("#yieldCoefficientContent").bxgrid("option","showMsgOpt",showMsgOpt);
            $("#yieldCoefficientContent").bxgrid("query");
            
        }
    };
    AjaxCommunicator.ajaxRequest(
            '/config/yieldCoefficient.do?method=delete', 'POST',
            paramJsonObj, callback);
}

function updatePage() {
	
	var selectArray = $("#yieldCoefficientContent").bxgrid('rawMethodCall', 'getGridParam', 'selarrrow');
    if(selectArray.length == 0){
    	alert("update");
        alertDiv("提示","请至少勾选一条记录进行操作！");
        return;
    }
	if(selectArray.length > 1){
		var buttons = [ 
			{
				text: '了解',
				"class" : "btn btn-skinColor btn-xs",
				click: function() {
					$("#dialog-message").bxdialog('close');
				} 
			}
		];
		var dialogOpt = {
			title : "<i class='ace-icon fa fa-warning orange'></i>  记录数错误",
			dataPattern: 'text',
			content : "记录数出错，只能选择一条数据进行修改！",
			buttons : buttons
		};
		$("#dialog-message").bxdialog(dialogOpt);
		return;
	}

    $("#detail").bxdiv("cleanPopDiv");
    var paramJsonObj = new Object();
   // var selectId = $("#yieldCoefficientContent").bxgrid('rawMethodCall', 'getGridParam', 'selrow');//selarrrow
    var selectId = $("#yieldCoefficientContent").bxgrid('rawMethodCall', 'getGridParam', 'selarrrow');
    var selectData = $("#yieldCoefficientContent").bxgrid('rawMethodCall', 'getRowData', selectId);
    paramJsonObj = selectData;

    var title = '修改记录';
    var buttons = [         
            {
                text : "保存",
                "class" : "btn btn-primary btn-xs",
                click : function() {

                    if ($("#detail").bxvalidate("validate")) {
                        var paramJsonObj = new Object();
                        $("#detail").bxdiv('setInfoFromDiv', paramJsonObj,
                                'detail');
                        var callback = {
                            onSuccess : function(paramJsonObj) {
                                var showMsgOpt = {
                                        showMsgId : "alertdiv",
                                        status : paramJsonObj.status,
                                        showMsg : paramJsonObj.returnMsg
                                    };
                                    
                                $("#yieldCoefficientContent").bxgrid("option","showMsgOpt",showMsgOpt);
                                $("#yieldCoefficientContent").bxgrid("refresh");
                                $("#detail").dialog("close");
                                
                            }
                        };
                        AjaxCommunicator.ajaxRequest(
                                        '/config/yieldCoefficient.do?method=update',
                                        'POST', paramJsonObj, callback);
                        $(this).dialog("close");
                    }
                }
            }];

    var dialogOpt = {
        title : title,
        buttons : buttons
    };
    
  /*  $("#detail").bxdialog(dialogOpt);
    var paramJsonObj = {
        detail: selectData
    };*/
   // $("#detail").bxdiv('fillPopDiv', paramJsonObj, 'detail');
     

    var queryRecBack = {
        onSuccess : function(paramJsonObj) {
            $("#detail").bxdiv('fillPopDiv', paramJsonObj, 'detail');
            $("#detail").bxdialog(dialogOpt);
        }
    };

    AjaxCommunicator.ajaxRequest(
            '/config/yieldCoefficient.do?method=queryOne', 'POST',
            paramJsonObj, queryRecBack);

}

function on_query_click() {
	$("#yieldCoefficientContent").bxgrid("rawMethodCallMore", 'clearGridData');
    var queryParam = new Object();
    //$("#queryarea").bxdiv('setInfoFromDiv', queryParam, "inqu_status");
    $("#queryarea").bxdiv('setQueryFromDiv', queryParam, "inqu_status");
    $("#yieldCoefficientContent").bxgrid("option", "queryParam", queryParam);
    $("#yieldCoefficientContent").bxgrid("rawMethodCallMore", 'clearGridData');
    $("#yieldCoefficientContent").bxgrid("query");
    
    
    
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
        custom: false,
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
