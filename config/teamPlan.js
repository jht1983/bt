$(document).ready(function () {
    baosightRequire.requireFunct(['bxgrid', 'bxdiv', 'bxdialog', 'bxalert', 'bxcombobox'],
            function () {
    	 var defaultData1 = [{
             label: "全部",
             value: ""
         }];
	       $("#inqu_status-teamName").bxcombobox({
	    	   dataPattern: 'ccs',
             ccsId: "bt_basicInfo.team",
             async: false,
             data: defaultData1
	       });
	       
	       var defaultData2 = [{
             label: "全部",
             value: ""
         }];
	       $("#inqu_status-shiftName").bxcombobox({
	    	   dataPattern: 'ccs',
             ccsId: "bt_basicInfo.shift",
             async: false,
             data: defaultData2
	       });
                $("#queryarea").bxdiv();
                var gridOption = {
                    primaryRowKey: "teamId",
                    caption: "排班信息",
                    colNames: ['班组Id', '日期', '班次', '班组'],
                    colModel: [{
                        name: 'teamId',
                        index: 'teamId',
                        width: 10,
                        hidden: true,
                        forbidCopy: true
                    },
                        {
                            name: 'teamTime',
                            index: 'teamTime',
                            width: 60,
                            readOnly:true,
                            editable: false
                        },
                        {
                            name: 'shiftName',
                            index: 'shiftName',
                            width: 60,
                            readOnly:true,
                            editable: false,
                            edittype: 'ccs',
                            editoptions: 'bt_basicInfo.shift'
                        },
                        {
                            name: 'teamName',
                            index: 'teamName',
                            width: 90,
                            sortable: false,
                            editable: true,
                            edittype: 'ccs',
                            editoptions: 'bt_basicInfo.team'
                        }
                       ],
                    sortorder: 'asc',
                    height:'auto',
                    jsonReader: {
                        id: "teamId",
                        repeatitems: false
                    }
                };
                /*var defaultData = [{
                    label: "全部",
                    value: ""
                }];
                $("#inqu_status-pageType").bxcombobox({
                    dataPattern: 'ccs',
                    ccsId: "metadata.pageType",
                    async: false,
                    data: defaultData
                });*/
                var option = {
                    queryParam: {},
                    dataPattern: "url",
                    url: "/config/teamPlan.do?method=query",
                    showMsgOpt: {
                        showMsgId: "alertdiv"
                    },
                    gridOption: gridOption
                    /*navGridOption: {
                        download: true,
                        downloadParam: {
                            downloadUrl: "/config/teamPlan.do/download.do"
                        }
                    }*/
                };
                $("#jqGrid").bxgrid(option);

            });
   /* $("#inqu_status-teamCode").keypress(function () {
        onKeyQuery();
    });
    $("#inqu_status-teamName").keypress(function () {
        onKeyQuery();
    });*/
});


function deleteRec() {
    var selectArray = $("#jqGrid").bxgrid('rawMethodCall', 'getGridParam', 'selarrrow');
    if (selectArray.length == 0) {
        alertDiv("提示", "请至少勾选一条记录进行操作！")
        return;
    }
    var buttons = [{
        html: "<i class='ace-icon fa fa-check bigger-110'></i>&nbsp; 是",
        "class": "btn btn-skinColor btn-xs",
        click: function () {
            deleteOK();
            $(this).dialog("close");
        }
    }, {
        html: "<i class='ace-icon fa fa-times bigger-110'></i>&nbsp; 否",
        "class": "btn btn-xs",
        click: function () {
            $(this).dialog("close");
        }
    }];
    confirmDiv("确认删除", "是否确定删除？", buttons);
}

function deleteOK() {
    var paramJsonObj = new Object();

    $("#jqGrid").bxgrid('setInfoFromGrid', paramJsonObj, 'result');
    var callback = {
        onSuccess: function (paramJsonObj) {
            var showMsgOpt = {
                showMsgId: "alertdiv",
                status: paramJsonObj.status,
                showMsg: paramJsonObj.returnMsg
            };

            $("#jqGrid").bxgrid("option", "showMsgOpt", showMsgOpt);
            $("#jqGrid").bxgrid("query");

        }
    };
    AjaxCommunicator.ajaxRequest('/config/teamPlan.do?method=delete', 'POST', paramJsonObj, callback);
}

function updateRec() {
    var selectArray = $("#jqGrid").bxgrid('rawMethodCall', 'getGridParam', 'selarrrow');
    if (selectArray.length == 0) {
        alertDiv("提示", "请至少勾选一条记录进行操作！")
        return;
    }
    var paramJsonObj = new Object();
    paramJsonObj.detail = {};
    paramJsonObj.detail.resultRow = [];
    for (var i = 0; i < selectArray.length; i++) {
        var status = $("#jqGrid").bxgrid('rawMethodCall', "saveRow", selectArray[i]);
        if (status == false) {
            return;
        }
        var saveData = $("#jqGrid").bxgrid('rawMethodCall', "getRowData", selectArray[i]);
        paramJsonObj.detail.resultRow.push(saveData);
    }
    var callback = {
        onSuccess: function (paramJsonObj) {
            var showMsgOpt = {
                showMsgId: "alertdiv",
                status: paramJsonObj.status,
                showMsg: paramJsonObj.returnMsg
            };

            $("#jqGrid").bxgrid("option", "showMsgOpt", showMsgOpt);
            $("#jqGrid").bxgrid("query");
        }
    };
    AjaxCommunicator.ajaxRequest('/config/teamPlan.do?method=update', 'POST', paramJsonObj, callback);
}

function on_query_click() {
    var queryParam = new Object();
    $("#queryarea").bxdiv('setQueryFromDiv', queryParam, "inqu_status");
    $("#jqGrid").bxgrid("option", "queryParam", queryParam);
    $("#jqGrid").bxgrid("query");
}

function onKeyQuery() {
    var e = window.event || arguments.callee.caller.arguments[0];
    var keyCode = e.keyCode || e.which; // 按键的keyCode
    if (keyCode == 13) {
        on_query_click();
    }
}
function generateTeamPlan(){
	var year=$("#inqu_status-year").val();
	if(year==null||year==""){
		 alertDiv("提示", "请选择大于等于2018年的年份！")
	        return;
	}
	//判断year值的排班计划是否已存在
	var yearFirstDay=year+"-"+"01-01";
	//var lastYearDay=year-1+"-"+"12-31";
	var jsonData1 = {};
	jsonData1.inqu_status={};
	jsonData1.inqu_status.teamTime = yearFirstDay;
	//jsonData1.inqu_status.teamTime1 = lastYearDay;
	var dataCallback1;
	var databack1;
	var callback1={
			onSuccess:function(dataCallback1){
		    	databack1=dataCallback1.rows;
			}
	}
	AjaxCommunicator.ajaxRequest('/config/teamPlan.do?method=queryExData', 'POST', jsonData1, callback1);
	if(databack1.length!=0){
		alertDiv("提示", year+"年份的排班计划已存在！")
        return;
	}
	if(year!="2018"){
		//判断year值的上一年末最后一天排班是否存在
		var lastYearDay=year-1+"-"+"12-31";
		var jsonData2 = {};
		jsonData2.inqu_status={};
		jsonData2.inqu_status.teamTime = lastYearDay;
		//jsonData1.inqu_status.teamTime1 = lastYearDay;
		var dataCallback2;
		var databack2;
		var callback2={
				onSuccess:function(dataCallback2){
			    	databack2=dataCallback2.rows;
				}
		}
		AjaxCommunicator.ajaxRequest('/config/teamPlan.do?method=queryExData', 'POST', jsonData2, callback2);
		if((databack2.length==0)||(databack2.length==null)){
			alertDiv("提示", (year-1)+"年份的排班计划不存在，请选择"+(year-1)+"年份的值！");
	        return;
		}
	}
	
	//表示上一年最后一天
	var lastYear=parseInt(year)-1;
	teamTime=lastYear+"-"+"12-31";
	var jsonData = {};
	var databack;
	jsonData.inqu_status={};
	jsonData.inqu_status.year = year;
	jsonData.inqu_status.teamTime = teamTime;
	var callback={
			onSuccess:function(dataCallback){
		    	 databack=dataCallback.rows;
			}
	}
	AjaxCommunicator.ajaxRequest('/config/teamPlan.do?method=generatePlanData', 'POST', jsonData, callback);
	//查询year年的排班计划是否生成
	var yearFirstDay=year+"-"+"01-01";
	var jsonData3 = {};
	jsonData3.inqu_status={};
	jsonData3.inqu_status.teamTime = yearFirstDay;
	var dataCallback3;
	var databack3;
	var callback3={
			onSuccess:function(dataCallback3){
		    	databack3=dataCallback3.rows;
			}
	}
	AjaxCommunicator.ajaxRequest('/config/teamPlan.do?method=queryExData', 'POST', jsonData3, callback3);
	if(databack3.length!=0){
		alertDiv("提示", year+"年份的排班计划生成成功！")
	}else{
		alertDiv("提示", year+"年份的排班计划生成失败！")
	}

	on_query_click();
}