$(document).ready(function () {
    baosightRequire.requireFunct(['bxgrid', 'bxdiv', 'bxdialog', 'bxalert', 'bxcombobox'],
            function () {
                $("#queryarea").bxdiv();
                var gridOption = {
                    primaryRowKey: "recordId",
                    caption: "生产数据时间管理",
                    colNames: ['记录ID', '班次','开始时间', '结束时间', '定义方式','频率', '结果集', '时间数据'],
                    colModel: [{
                        name: 'recordId',
                        index: 'recordId',
                        width: 10,
                        hidden: true,
                        forbidCopy: true
                    },
                    {
                        name: 'shift',
                        index: 'shift',
                        width: 90,
                        sortable: false,
                        editable: true,
                        edittype:'select', 
                        hidden: true,
                        editoptions: {value: {1:'白班', 2:'夜班'}}
                    },
                        {
                            name: 'startTime',
                            index: 'startTime',
                            width: 60,
                            sortable: true,
                            editable: true
                        },
                        {
                            name: 'endTime',
                            index: 'endTime',
                            width: 60,
                            editable: true,
                            sortable: true
                        },
                        {
                            name: 'model',
                            index: 'model',
                            width: 50,
                            sortable: false,
                            editable: true,
                            edittype:'select', 
                            editoptions: {value: {1:'等时间间隔'},
                            	dataEvents:[{
                            		//type:'change',
                            		type:'click',
                            		fn:function(e){
                            			var id=this.id;
                            			var value=this.value;
                            			//var selectArray = $("#jqGrid").bxgrid('rawMethodCall', 'getGridParam', 'selrow');  
                            			getFrequecyData(id,value);
                            		}
                            	}]}
                             
                        },
                        {
                            name: 'frequency',
                            index: 'frequency',
                            width: 50,
                            sortable: false,
                            editable: true,
                            edittype:'select',
                            editoptions: { value:{},
                            	dataEvents:[{
                            		type:'change',
                            		fn:function(e){
                            			var id=this.id;
                            			var value=this.value;
                            			//var selectArray = $("#jqGrid").bxgrid('rawMethodCall', 'getGridParam', 'selrow');  
                            			var selectedFre=$("#"+id).find("option:selected").text();	
                            			var idHeader=id.substr(0,1);
                            			var startTime=$("#"+idHeader+"_"+"startTime").val();
                            			var endTime=$("#"+idHeader+"_"+"endTime").val();
                            			getResultData(id,value,selectedFre,startTime,endTime);
                            		}
                            	}]}
                           
                        },
                        {
                            name: 'resultData',
                            index: 'resultData',
                            width: 120,
                            sortable: false,
                            editable: false
                        },
                        {
                            name: 'expiryDate',
                            index: 'expiryDate',
                            width: 120,
                            editable: true,
                            sortable: true,
                            hidden: true       
                         }
                       ],
                       
                    sortorder: 'asc',
                    //height:351,
                    height:'auto',
                    jsonReader: {
                        id: "recordId",
                        repeatitems: false
                    }
                };
                
              
                var option = {
                    queryParam: {},
                    dataPattern: "url",
                    url: "/config/recordTime.do?method=query",
                    showMsgOpt: {
                        showMsgId: "alertdiv"
                    },
                    gridOption: gridOption,
                    navGridOption: {

                    }
                };
              
                $("#jqGrid").bxgrid(option);

            });
});



function getFrequecyData(id,value){
	//var username = $("select #frequency");    
	//解析id，获取行号   "1_model"
	var idHeader=id.substr(0,1);
	//拼接frequency所在单元格的id
	var frequencyId=$("#"+idHeader+"_"+"frequency");
	/*var startTime=$("#jqGrid").bxgrid('rawMethodCallMore','getCell',idHeader,'startTime');
	var endTime=$("#jqGrid").bxgrid('rawMethodCallMore','getCell',idHeader,'endTime');
	var model=$("#jqGrid").bxgrid('rawMethodCallMore','getCell',idHeader,'model');*/
	var startTime=$("#"+idHeader+"_"+"startTime").val();
	var endTime=$("#"+idHeader+"_"+"endTime").val();
	var model=$("#"+idHeader+"_"+"model").val();
	if(startTime==""||startTime==null||endTime==""||endTime==null){
		alertDiv("提示","开始时间和结束时间不能为空！");
	}
	var dataResults=startTime;
	if(model=="1"){
		//清空下拉框的值
		 $("#"+idHeader+"_"+"frequency").empty();  

		   //分别解析开始时间和结束时间的前后部分
			var finalStartTime=startTime.substr(startTime.length-2,startTime.length);
			var finalEndTime=endTime.substr(endTime.length-2,endTime.length);
		    var startInt=parseInt(startTime.substr(0,startTime.length-3));
		    var endInt=parseInt(endTime.substr(0,endTime.length-3));
		   // var minus=endInt-startInt;
		    var internal;
		   
		    if ((endInt>=0 && endInt<= 8) && (startInt>=7 && startInt <= 19)) {
			if (finalStartTime == finalEndTime) {
				internal = (24 - startInt + endInt) * 2;
				// 计算出所有半点的数据
				if (finalStartTime == '00') {
					for (var i = startInt; i < 24; i++) {
						if((i>=0 && i<=9)&&(i==startInt)){
							dataResults +="," +"0" +i+ ":30";
						}else if((i>9)&&(i==startInt)){
							dataResults +="," +i+ ":30";
						}else if((i>=0 && i<=9)&&(i!=startInt)){
						dataResults += "," + "0" +i + ":00" + "," +"0" + i+ ":30";
						}else{
						dataResults += "," + i + ":00" + "," + i+ ":30";	
						}
					}
					for	(var j=0;j<=endInt;j++){
						if(j==endInt){
							dataResults +="," +endTime;
						}else{
							dataResults += "," + "0" +j + ":00" + "," +"0" + j+ ":30";
						}
						
					}
				}else if(finalStartTime == '30'){
					for (var i = startInt+1; i < 24; i++) {
						if((i>=0 && i<=9)&&(i!=startInt)){
						dataResults += "," + "0" +i + ":00" + "," +"0" + i+ ":30";
						}else{
						dataResults += "," + i + ":00" + "," + i+ ":30";	
						}
					}
					for	(var j=0;j<=endInt;j++){
						dataResults += "," + "0" +j + ":00" + "," +"0" + j+ ":30";
						}
					}
				}
			 else if ((finalStartTime != finalEndTime)
					&& (finalStartTime == '30')) {
				internal = (24 - startInt + endInt) * 2 - 1;
				for (var i = startInt+1; i < 24; i++) {
					if((i>=0 && i<=9)&&(i!=startInt)){
					dataResults += "," + "0" +i + ":00" + "," +"0" + i+ ":30";
					}else{
					dataResults += "," + i + ":00" + "," + i+ ":30";	
					}
				}
				for	(var j=0;j<=endInt;j++){
					if(j==endInt){
						dataResults +="," +endTime;
					}else{
						dataResults += "," + "0" +j + ":00" + "," +"0" + j+ ":30";
					}
					
				}
			} else if ((finalStartTime != finalEndTime)
					&& (finalEndTime == '30')) {
				internal = (24 - startInt + endInt) * 2 + 1;
				for (var i = startInt; i < 24; i++) {
					if((i>=0 && i<=9)&&(i==startInt)){
						dataResults +="," +"0" +i+ ":30";
					}else if((i>9)&&(i==startInt)){
						dataResults +=","+i+ ":30";
					}else if((i>=0 && i<=9)&&(i!=startInt)){
					dataResults += "," + "0" +i + ":00" + "," +"0" + i+ ":30";
					}else{
					dataResults += "," + i + ":00" + "," + i+ ":30";	
					}
				}
				for	(var j=0;j<=endInt;j++){
					dataResults += "," + "0" +j + ":00" + "," +"0" + j+ ":30";
					}
				}
		    }
		    var dataArray=dataResults.split(",");
 		    var  str = "<option>" + "0.5小时" + "</option>";
		    if(internal%2==0){
		    	str+= "<option>" + "1小时" + "</option>";
		    }
		    if(internal%3==0){
		    	str+= "<option>" + "1.5小时" + "</option>";
		    }
		    if(internal%4==0){
		    	str+= "<option>" + "2小时" + "</option>";
		    }
		    if(internal%5==0){
		    	str+= "<option>" + "2.5小时" + "</option>";
		    }
		    if(internal%6==0){
		    	str+= "<option>" + "3小时" + "</option>";
		    }
		    if(internal%7==0){
		    	str+= "<option>" + "3.5小时" + "</option>";
		    }
		    if(internal%8==0){
		    	str+= "<option>" + "4小时" + "</option>";
		    }
		    if(internal%9==0){
		    	str+= "<option>" + "4.5小时" + "</option>";		    	
		    }if(internal%10==0){
		    	str+= "<option>" + "5小时" + "</option>";
		    }if(internal%11==0){
		    	str+= "<option>" + "5.5小时" + "</option>";
		    }if(internal%12==0){
		    	str+= "<option>" + "6小时" + "</option>";
		    }if(internal%13==0){
		    	str+= "<option>" + "6.5小时" + "</option>";
		    }if(internal%14==0){
		    	str+= "<option>" + "7小时" + "</option>";
		    }if(internal%15==0){
		    	str+= "<option>" + "7.5小时" + "</option>";
		    }if(internal%16==0){
		    	str+= "<option>" + "8小时" + "</option>";
		    }if(internal%17==0){
		    	str+= "<option>" + "8.5小时" + "</option>";
		    }if(internal%18==0){
		    	str+= "<option>" + "9小时" + "</option>";
		    }if(internal%19==0){
		    	str+= "<option>" + "9.5小时" + "</option>";
		    }if(internal%20==0){
		    	str+= "<option>" + "10小时" + "</option>";
		    }if(internal%21==0){
		    	str+= "<option>" + "10.5小时" + "</option>";
		    }if(internal%22==0){
		    	str+= "<option>" + "11小时" + "</option>";
		    }if(internal%23==0){
		    	str+= "<option>" + "11.5小时" + "</option>";
		    }if(internal%24==0){
		    	str+= "<option>" + "12小时" + "</option>";
		    }if(internal%25==0){
		    	str+= "<option>" + "12.5小时" + "</option>";
		    }if(internal%26==0){
		    	str+= "<option>" + "13小时" + "</option>";
		    }if(internal%27==0){
		    	str+= "<option>" + "13.5小时" + "</option>";
		    }if(internal%28==0){
		    	str+= "<option>" + "14小时" + "</option>";
		    }if(internal%29==0){
		    	str+= "<option>" + "14.5小时" + "</option>";
		    }if(internal%30==0){
		    	str+= "<option>" + "15小时" + "</option>";
		    }if(internal%31==0){
		    	str+= "<option>" + "15.5小时" + "</option>";
		    }if(internal%32==0){
		    	str+= "<option>" + "16小时" + "</option>";
		    }if(internal%33==0){
		    	str+= "<option>" + "16.5小时" + "</option>";
		    }if(internal%34==0){
		    	str+= "<option>" + "17小时" + "</option>";
		    }if(internal%35==0){
		    	str+= "<option>" + "17.5小时" + "</option>";
		    }if(internal%36==0){
		    	str+= "<option>" + "18小时" + "</option>";
		    }if(internal%37==0){
		    	str+= "<option>" + "18.5小时" + "</option>";
		    }if(internal%38==0){
		    	str+= "<option>" + "19小时" + "</option>";
		    }if(internal%39==0){
		    	str+= "<option>" + "19.5小时" + "</option>";
		    }if(internal%40==0){
		    	str+= "<option>" + "20小时" + "</option>";
		    }if(internal%41==0){
		    	str+= "<option>" + "20.5小时" + "</option>";
		    }if(internal%42==0){
		    	str+= "<option>" + "21小时" + "</option>";
		    }if(internal%43==0){
		    	str+= "<option>" + "21.5小时" + "</option>";
		    }if(internal%44==0){
		    	str+= "<option>" + "22小时" + "</option>";
		    }if(internal%45==0){
		    	str+= "<option>" + "22.5小时" + "</option>";
		    }if(internal%46==0){
		    	str+= "<option>" + "23小时" + "</option>";
		    }if(internal%47==0){
		    	str+= "<option>" + "23.5小时" + "</option>";
		    }if(internal%48==0){
		    	str+= "<option>" + "24小时" + "</option>";
		    }if(internal%49==0){
		    	str+= "<option>" + "24.5小时" + "</option>";
			    }
		    frequencyId.append(str);//渲染option  	
	}
	
	}
	
//平均等分为新的数据
function newTimeData(dataArray,frequency){
	var newArray=new Array();
	for(var i=0;i<dataArray.length;i++){
		if(i % frequency==0){
			newArray.push(dataArray[i])
		}
}
	return newArray;
}

function getResultData(id, value, selectFrequency, startTime, endTime) {
	// 解析id
	var idHeader = id.substr(0, 1);
	// 拼接resultData所在单元格的id
	var resultData = $("#" + idHeader + "_" + "resultData").val();
	var dataResults = startTime;
	var finalStartTime = startTime.substr(startTime.length - 2,
			startTime.length);
	var finalEndTime = endTime.substr(endTime.length - 2, endTime.length);
	var startInt = parseInt(startTime.substr(0, startTime.length - 3));
	var endInt = parseInt(endTime.substr(0, endTime.length - 3));
	// var minus=endInt-startInt;
	var internal;

	if ((endInt >= 0 && endInt <= 8) && (startInt >= 7 && startInt <= 19)) {
		if (finalStartTime == finalEndTime) {
			internal = (24 - startInt + endInt) * 2;
			// 计算出所有半点的数据
			if (finalStartTime == '00') {
				for (var i = startInt; i < 24; i++) {
					if ((i >= 0 && i <= 9) && (i == startInt)) {
						dataResults += "," + "0" + i + ":30";
					} else if ((i > 9) && (i == startInt)) {
						dataResults += "," + i + ":30";
					} else if ((i >= 0 && i <= 9) && (i != startInt)) {
						dataResults += "," + "0" + i + ":00" + "," + "0" + i
								+ ":30";
					} else {
						dataResults += "," + i + ":00" + "," + i + ":30";
					}
				}
				for (var j = 0; j <= endInt; j++) {
					if (j == endInt) {
						dataResults += "," + endTime;
					} else {
						dataResults += "," + "0" + j + ":00" + "," + "0" + j
								+ ":30";
					}
				}
			} else if (finalStartTime == '30') {
				for (var i = startInt + 1; i < 24; i++) {
					if ((i >= 0 && i <= 9) && (i != startInt)) {
						dataResults += "," + "0" + i + ":00" + "," + "0" + i
								+ ":30";
					} else {
						dataResults += "," + i + ":00" + "," + i + ":30";
					}
				}
				for (var j = 0; j <= endInt; j++) {
					dataResults += "," + "0" + j + ":00" + "," + "0" + j
							+ ":30";
				}
			}
		} else if ((finalStartTime != finalEndTime) && (finalStartTime == '30')) {
			internal = (24 - startInt + endInt) * 2 - 1;
			for (var i = startInt + 1; i < 24; i++) {
				if ((i >= 0 && i <= 9) && (i != startInt)) {
					dataResults += "," + "0" + i + ":00" + "," + "0" + i
							+ ":30";
				} else {
					dataResults += "," + i + ":00" + "," + i + ":30";
				}
			}
			for (var j = 0; j <= endInt; j++) {
				if (j == endInt) {
					dataResults += "," + endTime;
				} else {
					dataResults += "," + "0" + j + ":00" + "," + "0" + j
							+ ":30";
				}
			}
		} else if ((finalStartTime != finalEndTime) && (finalEndTime == '30')) {
			internal = (24 - startInt + endInt) * 2 + 1;
			for (var i = startInt; i < 24; i++) {
				if ((i >= 0 && i <= 9) && (i == startInt)) {
					dataResults += "," + "0" + i + ":30";
				} else if ((i > 9) && (i == startInt)) {
					dataResults += "," + i + ":30";
				} else if ((i >= 0 && i <= 9) && (i != startInt)) {
					dataResults += "," + "0" + i + ":00" + "," + "0" + i
							+ ":30";
				} else {
					dataResults += "," + i + ":00" + "," + i + ":30";
				}
			}
			for (var j = 0; j <= endInt; j++) {
				dataResults += "," + "0" + j + ":00" + "," + "0" + j + ":30";
			}
		}
	}
	var dataArray = dataResults.split(",");
	var array1 = new Array();
	if (selectFrequency == "0.5小时") { // 半小时间隔,08:30,18:30
		array1 = dataArray;
	} else if (selectFrequency == "1小时") {
		array1 = newTimeData(dataArray, 2);
	} else if (selectFrequency == "1.5小时") {
		array1 = newTimeData(dataArray, 3);
	} else if (selectFrequency == "2小时") {
		array1 = newTimeData(dataArray, 4);
	} else if (selectFrequency == "2.5小时") {
		array1 = newTimeData(dataArray, 5);
	} else if (selectFrequency == "3小时") {
		array1 = newTimeData(dataArray, 6);
	} else if (selectFrequency == "3.5小时") {
		array1 = newTimeData(dataArray, 7);
	} else if (selectFrequency == "4小时") {
		array1 = newTimeData(dataArray, 8);
	} else if (selectFrequency == "4.5小时") {
		array1 = newTimeData(dataArray, 9);
	} else if (selectFrequency == "5小时") {
		array1 = newTimeData(dataArray, 10);
	} else if (selectFrequency == "5.5小时") {
		array1 = newTimeData(dataArray, 11);
	} else if (selectFrequency == "6小时") {
		array1 = newTimeData(dataArray, 12);
	} else if (selectFrequency == "6.5小时") {
		array1 = newTimeData(dataArray, 13);
	} else if (selectFrequency == "7小时") {
		array1 = newTimeData(dataArray, 14);
	} else if (selectFrequency == "7.5小时") {
		array1 = newTimeData(dataArray, 15);
	} else if (selectFrequency == "8小时") {
		array1 = newTimeData(dataArray, 16);
	} else if (selectFrequency == "8.5小时") {
		array1 = newTimeData(dataArray, 17);
	} else if (selectFrequency == "9小时") {
		array1 = newTimeData(dataArray, 18);
	} else if (selectFrequency == "9.5小时") {
		array1 = newTimeData(dataArray, 19);
	} else if (selectFrequency == "10小时") {
		array1 = newTimeData(dataArray, 20);
	} else if (selectFrequency == "10.5小时") {
		array1 = newTimeData(dataArray, 21);
	} else if (selectFrequency == "11小时") {
		array1 = newTimeData(dataArray, 22);
	} else if (selectFrequency == "11.5小时") {
		array1 = newTimeData(dataArray, 23);
	} else if (selectFrequency == "12小时") {
		array1 = newTimeData(dataArray, 24);
	} else if (selectFrequency == "12.5小时") {
		array1 = newTimeData(dataArray, 25);
	} else if (selectFrequency == "13小时") {
		array1 = newTimeData(dataArray, 26);
	} else if (selectFrequency == "13.5小时") {
		array1 = newTimeData(dataArray, 27);
	} else if (selectFrequency == "14小时") {
		array1 = newTimeData(dataArray, 28);
	} else if (selectFrequency == "14.5小时") {
		array1 = newTimeData(dataArray, 29);
	} else if (selectFrequency == "15小时") {
		array1 = newTimeData(dataArray, 30);
	} else if (selectFrequency == "15.5小时") {
		array1 = newTimeData(dataArray, 31);
	} else if (selectFrequency == "16小时") {
		array1 = newTimeData(dataArray, 32);
	} else if (selectFrequency == "16.5小时") {
		array1 = newTimeData(dataArray, 33);
	} else if (selectFrequency == "17小时") {
		array1 = newTimeData(dataArray, 34);
	} else if (selectFrequency == "17.5小时") {
		array1 = newTimeData(dataArray, 35);
	} else if (selectFrequency == "18小时") {
		array1 = newTimeData(dataArray, 36);
	} else if (selectFrequency == "18.5小时") {
		array1 = newTimeData(dataArray, 37);
	} else if (selectFrequency == "19小时") {
		array1 = newTimeData(dataArray, 38);
	} else if (selectFrequency == "19.5小时") {
		array1 = newTimeData(dataArray, 39);
	} else if (selectFrequency == "20小时") {
		array1 = newTimeData(dataArray, 40);
	} else if (selectFrequency == "20.5小时") {
		array1 = newTimeData(dataArray, 41);
	} else if (selectFrequency == "21小时") {
		array1 = newTimeData(dataArray, 42);
	} else if (selectFrequency == "21.5小时") {
		array1 = newTimeData(dataArray, 43);
	} else if (selectFrequency == "22小时") {
		array1 = newTimeData(dataArray, 44);
	} else if (selectFrequency == "22.5小时") {
		array1 = newTimeData(dataArray, 45);
	} else if (selectFrequency == "23小时") {
		array1 = newTimeData(dataArray, 46);
	} else if (selectFrequency == "23.5小时") {
		array1 = newTimeData(dataArray, 47);
	} else if (selectFrequency == "24小时") {
		array1 = newTimeData(dataArray, 48);
	} else if (selectFrequency == "24.5小时") {
		array1 = newTimeData(dataArray, 49);
	}
	$("#jqGrid").bxgrid('rawMethodCallMore','setRowData',idHeader,{"resultData":array1});
}


function onclick(){
	var selectArray = $("#jqGrid").bxgrid('rawMethodCall', 'getGridParam', 'selarrrow');
	var saveData = $("#jqGrid").bxgrid('rawMethodCall', "getRowData", selectArray);
	 if(jQuery("#model").val()==2){  
	        $("#jqGrid").bxgrid('rawMethodCallMore',setGridParam().hideCol("frequency"));  
	    } 
}

function addAndCopy(){
    $("#jqGrid").bxgrid("addAndCopy");
}

function saveRec() {
    var insertOrUpdate = $("#jqGrid").bxgrid('rawMethodCall', 'getGridParam', 'insertOrUpdate');
    if(insertOrUpdate == "insert"){
        insertRec();
    }else{
        updateRec();
    }
}

function insertRec() {
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
    AjaxCommunicator.ajaxRequest('/config/recordTime.do?method=insert', 'POST', paramJsonObj, callback);
}

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
    AjaxCommunicator.ajaxRequest('/config/recordTime.do?method=delete', 'POST', paramJsonObj, callback);
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
    AjaxCommunicator.ajaxRequest('/config/recordTime.do?method=update', 'POST', paramJsonObj, callback);
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