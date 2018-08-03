<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>排班计划信息</title>
<style>
	.labelThree{
		float:left;
		width:auto !important;
		margin-right:5px;
	}
	.inputThree{
		float:left !important;
	}
</style>
</head>
<body>
    <%@ include file="/bxui/bxuihead.jsp"%>
    <script type="text/javascript" src="<%=toolkitPath%>/bxui/baosight-require.js"></script>
     <%-- <script type="text/javascript" src="<%=toolkitPath%>/df/designer/js/loadsave.js"></script> --%>
    <script type="text/javascript"  src="<%=toolkitPath%>/config/teamPlan.js"></script>
    <link rel="stylesheet"      href="<%=toolkitPath%>/bxui/other/css/style-frame-inner.css" />
    <div class="jqgridFrame contentFrame">
        <div class="page-content contentFrame">
            <!-- /section:settings.box -->
            <div class="page-header" style="height: 50px;">
                <h1 class="pull-left">
                    配置管理
                    <small> 
                        <i class="ace-icon fa fa-angle-double-right"></i>
                        排班计划信息
                    </small>
                </h1>

            </div>
            <!-- /.page-header -->
            
              <div class="row">         
                <div class="col-xs-12 searchArea" id="queryarea">
				<div id="alertdiv" class="alertdiv"></div>
                <div class="row">
                   <!--  <div class="col-sm-7 col-1024-7 col-xs-12"> -->
                        <div class="col-sm-3 col-lg-2 col-1024-4 col-xs-12">
                            <label class="labelThree"  for="inqu_status-teamTime">日期</label> 
								<input id="inqu_status-teamTime" data-bxwidget class="Wdate inputThree" type="text" 
								onfocus="WdatePicker()" />
                        </div>
                        <div class="col-sm-3 col-lg-2 col-1024-4 col-xs-12">
                        	<label class="labelThree"
								for="inqu_status-teamName">班组</label>
							<div type="text" id="inqu_status-teamName" class="inputThree" 
								data-bxwidget="bxcombobox"></div>
                          <!--   <label
                                    class="labelThree"
                                    for="inqu_status-teamName">班组名称</label>
                            <input type="text" id="inqu_status-teamName"
                                   data-bxwidget class="inputThree" /> -->
                        </div>
                         <div class="col-sm-3 col-lg-2 col-1024-4 col-xs-12">
                        	<label class="labelThree"
								for="inqu_status-shiftName">班次</label>
							<div type="text" id="inqu_status-shiftName" class="inputThree" 
								data-bxwidget="bxcombobox"></div>
                        </div>
                    <!-- </div> -->
                    <!-- <div class="col-sm-5 col-1024-5 col-xs-12"> -->
                       <!--  <div class="col-sm-3 col-1024-3 col-xs-12 pull-right">
                            <button class="btn btn-sm btn-danger  width-100 " onclick="deleteRec();">
                                <div class="ace-icon fa fa-trash-o"></div>
                                <span>删除</span>
                            </button>
                        </div> -->
                      <!--   <div class="col-sm-3 col-1024-3 col-xs-12 pull-right">
                            <button class="btn btn-sm btn-block" onclick="saveRec();">
                                <div class="ace-icon fa fa-save"></div>
                                <span>保存</span>
                            </button>
                        </div> -->
                        <div class="col-sm-2 col-1024-2 col-xs-2 pull-right">
                            <button class="btn btn-sm btn-block" onclick="updateRec();">
                                <div class="ace-icon fa fa-pencil-square-o"></div>
                                <span>修改</span>
                            </button>
                        </div>
                        <div class="col-sm-2 col-1024-2 col-xs-2 pull-right">
                            <button class="btn btn-sm btn-block" onclick="on_query_click();">
                                <div class="ace-icon fa fa-search"></div>
                                <span>查询</span>
                            </button>
                        </div>
                    <!-- </div> -->
                </div>
			</div>
                 <div class="col-xs-12" >
                    <div id="jqGrid"></div>
                    
            </div>

				<div class="col-sm-12 col-1024-12 col-xs-12"  style="margin:10px 0;">
					<div class="col-sm-3  col-xs-6">
						<label class="labelThree" for="inqu_status-year">年份</label> <input
							id="inqu_status-year" data-bxwidget class="Wdate inputThree" style="width:80%"
							type="text" onfocus="WdatePicker({lang:'zh-cn',dateFmt:'yyyy',minDate:'{2018}'})" />
					</div>
					<div class="col-sm-3 col-md-2 col-xs-6">
                            <button class="btn btn-sm btn-block" onclick="generateTeamPlan();">
                                <div class="ace-icon fa fa-plus"></div>
                                <span>生成班组计划</span>
                            </button>
                    </div>
					<div class="col-sm-6 col-1024-6 col-xs-12"></div>

				</div>




				<!-- /.row -->

        </div>
    </div>
    <!-- page-content -->

<!-- ----------------------------------信息弹出框---------------------------------------------------------->   


<!-- ----------------------------------pop div---------------------------------------------------------->

    
</body>
</html>
