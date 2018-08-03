$(document).ready(
        function() {            
            baosightRequire.requireFunct(['bxgrid', 'bxdiv', 'bxdialog',
                    'bxalert', 'bxvalidate'], function() {
                initWidgets();
                var gridOption = {
                    caption : '班次信息维护',
                    colNames : ['', '班次代码', '班次名称', '起始时间', '终止时间', '描述'],
                    colModel : [
                    {
                        name : 'shiftId',
                        index : 'shiftId',
                        width : 60,
                        hidden : true
                    }, {
                        name : 'shiftCode',
                        index : 'shiftCode',
                        width : 60
                      //  editable : true
                    }, {
                        name : 'shiftName',
                        index : 'shiftName',
                        width : 90
                       // editable : true
                    }, {
                        name : 'startTime',
                        index : 'startTime',
                        width : 90
                       // editable : true
                    }, {
                        name : 'endTime',
                        index : 'endTime',
                        width : 90
                       // editable : true
                    }, {
                        name : 'shiftDesc',
                        index : 'shiftDesc',
                        width : 90,
                        sortable : false
                      //  editable : true
                    }],
                   // footerrow:true  ,
                   // gridComplete: gridComplete1,  //合并单元格
                    sorttable : true,
                    sortname : 'shiftCode',
                    sortorder : 'desc',
                    jsonReader : {
                        id : "shiftId",
                        repeatitems : false
                    }
                };

                var option = {
                    queryParam : {},
                    dataPattern : "url",
                    url : "/config/shiftData.do?method=query",
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

                $("#shiftDataContent").bxgrid(option);
            	
            });     

            $(window).on('resize.jqGr', function () {
                $("#table_shiftDataContent").jqGrid( 'setGridWidth', $(".page-content").width() );
            });
            
        });

function completeMethod(){  
    var sum_Fy=$("#shiftDataContent").getCol('shiftCode',false,'sum');  
    //var sum_qntqFy=$("#shiftDataContent").getCol('qntqFy',false,'sum');  
   // $("#shiftDataContent").footerData('set', { "cblb": '合计', fy: sum_Fy, qntqFy: sum_qntqFy });  
    $("#shiftDataContent").footerData('set', { "shiftId": '合计', fy: sum_Fy });  
}  

function gridComplete1() {

	var rowNum1 = $(this).getGridParam('records');
	var rowNum = parseInt($(this).getGridParam('records'),10);
	var selectArray = $("#shiftDataContent").bxgrid('rawMethodCall', 'getGridParam', 'records');

	if(rowNum > 0){

	$(".ui-jqgrid-sdiv").show();

	var id = jQuery(this).getCol('shiftId',false);

	var minerCount0 = jQuery(this).getCol('shiftCode',false,'sum');

	var minerCount8 = jQuery(this).getCol('shiftName',false,'sum');

	var minerCount16 = jQuery(this).getCol('shiftDesc',false,'sum');

	$(this).footerData("set",{name:"合计",minerCount0:minerCount0,minerCount8:minerCount8,

	minerCount16:minerCount16

	});

	}else{

	$(".ui-jqgrid-sdiv").hide();

	}
}

function gridComplete() {

	var rowNum = parseInt($(this).getGridParam('records'),10);

	if(rowNum > 0){

	$(".ui-jqgrid-sdiv").show();

	var id = jQuery(this).getCol('id',false);

	var minerCount0 = jQuery(this).getCol('minerCount0',false,'sum');

	var minerCount8 = jQuery(this).getCol('minerCount8',false,'sum');

	var minerCount16 = jQuery(this).getCol('minerCount16',false,'sum');

	var sumOutput0 = jQuery(this).getCol('sumOutput0',false,'sum');

	var sumOutput8 = jQuery(this).getCol('sumOutput8',false,'sum');

	var sumOutput16 = jQuery(this).getCol('sumOutput16',false,'sum');

	var sumOutput = jQuery(this).getCol('sumOutput',false,'sum');

	var cutCount0 = jQuery(this).getCol('cutCount0',false,'sum');

	var cutCount8 = jQuery(this).getCol('cutCount8',false,'sum');

	var cutCount16 = jQuery(this).getCol('cutCount16',false,'sum');

	var cutCount = jQuery(this).getCol('cutCount',false,'sum');

	var avgOutput =sumOutput/ cutCount;

	$(this).footerData("set",{name:"合计",minerCount0:minerCount0,minerCount8:minerCount8,

	minerCount16:minerCount16,sumOutput0:sumOutput0,sumOutput8:sumOutput8,sumOutput16:sumOutput16,sumOutput:sumOutput,

	cutCount0:cutCount0,cutCount8:cutCount8,cutCount16:cutCount16,cutCount:cutCount,avgOutput:avgOutput

	});

	}else{

	$(".ui-jqgrid-sdiv").hide();

	}
}

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
                                $("#shiftDataContent").bxgrid("option","showMsgOpt",showMsgOpt);                              
                                $("#shiftDataContent").bxgrid("query");
                                $("#detail").dialog("close");
                            }
                        };
                        AjaxCommunicator
                                .ajaxRequest(
                                        '/config/shiftData.do?method=insert',
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
    $("#detail-shiftCode").attr("readonly", false);
}

function deletePage() {
	//alert("删除");
	var dialogOpt = {
	        title: "确认删除",
	        //custom: false,
	        content: "数据删除后将不可恢复，是否确定删除",   
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
    //dialogMessage("确认删除","数据删除后将不可恢复，是否确定删除");
}

function deleteOK() {
    var paramJsonObj = new Object();
    $("#shiftDataContent").bxgrid('setInfoFromGrid', paramJsonObj, 'result');
    var callback = {
        onSuccess : function(paramJsonObj) {
            var showMsgOpt = {
                    showMsgId : "alertdiv",
                    status : paramJsonObj.status,
                    showMsg : paramJsonObj.returnMsg
                };
                
            $("#shiftDataContent").bxgrid("option","showMsgOpt",showMsgOpt);
            $("#shiftDataContent").bxgrid("query");
            
        }
    };
    AjaxCommunicator.ajaxRequest(
            '/config/shiftData.do?method=delete', 'POST',
            paramJsonObj, callback);
}

function updatePage() {
	
	var selectArray = $("#shiftDataContent").bxgrid('rawMethodCall', 'getGridParam', 'selarrrow');
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
   // var selectId = $("#shiftDataContent").bxgrid('rawMethodCall', 'getGridParam', 'selrow');//selarrrow
    var selectId = $("#shiftDataContent").bxgrid('rawMethodCall', 'getGridParam', 'selarrrow');
    var selectData = $("#shiftDataContent").bxgrid('rawMethodCall', 'getRowData', selectId);
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
                                    
                                $("#shiftDataContent").bxgrid("option","showMsgOpt",showMsgOpt);
                                $("#shiftDataContent").bxgrid("refresh");
                                $("#detail").dialog("close");
                                
                            }
                        };
                        AjaxCommunicator.ajaxRequest(
                                        '/config/shiftData.do?method=update',
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
      $("#detail-shiftCode").attr("readonly", true);

    var queryRecBack = {
        onSuccess : function(paramJsonObj) {
            $("#detail").bxdiv('fillPopDiv', paramJsonObj, 'detail');
            $("#detail").bxdialog(dialogOpt);
        }
    };

    AjaxCommunicator.ajaxRequest(
            '/config/shiftData.do?method=queryOne', 'POST',
            paramJsonObj, queryRecBack);

}

function on_query_click() {
	$("#shiftDataContent").bxgrid("rawMethodCallMore", 'clearGridData');
    var queryParam = new Object();
    //$("#queryarea").bxdiv('setInfoFromDiv', queryParam, "inqu_status");
    $("#queryarea").bxdiv('setQueryFromDiv', queryParam, "inqu_status");
    $("#shiftDataContent").bxgrid("option", "queryParam", queryParam);
    $("#shiftDataContent").bxgrid("rawMethodCallMore", 'clearGridData');
    $("#shiftDataContent").bxgrid("query");
    
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
