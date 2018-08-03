<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>时间粒度信息</title>
<style>
	.inputFrame{
		display:inline-block;
		width:62%;
	}
	.inputFrame input{
		width:100%;
	}
</style>
</head>
<body>
    <%@ include file="/bxui/bxuihead.jsp"%>
    <script type="text/javascript" src="<%=toolkitPath%>/bxui/baosight-require.js"></script>
    <script type="text/javascript"
        src="<%=toolkitPath%>/config/timeScale.js"></script>
    <link rel="stylesheet" href="<%=toolkitPath%>/df/console/css/style-frame-inner.css" />
    
    <div class="jqgridFrame contentFrame">
        <div class="page-content contentFrame">
            <!-- /section:settings.box -->
            <div class="page-header" style="height: 50px;">
                <h1 class="pull-left">
                    配置管理
                    <small> 
                        <i class="ace-icon fa fa-angle-double-right"></i>
                        时间粒度信息
                    </small>
                </h1>

            </div>
            <!-- /.page-header -->


            <div class="row">

                <div class="col-xs-12 searchArea" id="queryarea">

                    <div id="alertdiv" class="alertdiv">    
                    </div> 

                    <div class="col-sm-4 col-md-3 col-lg-2 col-xs-12">
                    	<div class="form-group">
                        	 <label class="searchLabel control-label no-padding-right"
                             for="inqu_status-scaleCode">粒度编码</label>
	                         <div class="inputFrame">
	                             <input type="text" id="inqu_status-scaleCode" data-bxwidget class="searchInput" />
	                         </div>
                     	</div>
                    </div>
                    <div class="col-sm-4 col-md-3 col-lg-2 col-xs-12">
	                    <div class="form-group">
	                        <label class="searchLabel control-label no-padding-right"
	                            for="inqu_status-scaleName">粒度名称</label>
	                        <div class="inputFrame">
	                            <input type="text" id="inqu_status-scaleName" data-bxwidget class="searchInput"/>
	                        </div>
	                    </div>
                    </div>
                     <!--<div class="col-sm-3">
                        <div class="row">
                            <div class="form-group">
                                <label class="searchLabel col-sm-4 control-label no-padding-right"
                                    for="inqu_status-areaCode">所属区县</label>
                                <div class="col-sm-7 inputFrame">
                                    <input type="text" id="inqu_status-areaCode" data-bxwidget class="searchInput"/>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div class="searchBtnPos col-sm-2" style="float:right">
                        <button class="btn btn-sm pull-right btn-block" onclick="on_query_click();" >
                            <div class="ace-icon fa fa-search"></div>
                            <span>查询</span>
                        </button>
                    </div>
                </div>

                <div class="col-xs-12" style="margin-top:10px">
                    <div id="timeScaleContent"></div>
                </div>
                <!-- /.col -->

            </div>
            <!-- /.row -->

        </div>
    </div>
    <!-- page-content -->

<!-- ----------------------------------信息弹出框---------------------------------------------------------->   
    <div id="dialog-message" class="hide">          
    </div>
    <div id="dialog-message" class="hide">
		<p class="bigger-110 bolder center grey">
			<br/>
			<b id="dialogInfo"></b>
		</p>
	</div>

<!-- ----------------------------------pop div---------------------------------------------------------->
    <form id="detail" class="hide">
        <input type="hidden" id="detail-scaleId" data-bxwidget data-bxtype="number" data-bxauto />
        <div class="rowspace">
            <div class="col-sm-12" style="margin-bottom:10px">
                <div class="form-group">
                    <label class="col-sm-4 control-label no-padding-right no-padding-left labelfont"
                        for="detail-scaleCode"><font style="color:red">* </font>粒度编码 </label>
                    <div class="col-sm-8">
                        <input type="text" id="detail-scaleCode" name="detailcompanyCode"
                            class="col-xs-10 col-sm-10" data-bxwidget data-bxtype="string" required />
                    </div>
                </div>
            </div>
        </div>
        <div class="rowspace">
            <div class="col-sm-12" style="margin-bottom:10px">
                <div class="form-group">
                    <label class="col-sm-4 control-label no-padding-right no-padding-left labelfont"
                        for="detail-scaleName"><font style="color:red">* </font>粒度名称 </label>
                    <div class="col-sm-8">
                        <input type="text" id="detail-scaleName" name="detailcompanyName"
                            class="col-xs-10 col-sm-10" data-bxwidget data-bxtype="string" />
                    </div>
                </div>
            </div>
        </div>
        <div class="rowspace">
            <div class="col-sm-12" style="margin-bottom:10px">
                <div class="form-group">
                    <label class="col-sm-4 control-label no-padding-right no-padding-left labelfont"
                        for="detail-scaleDesc">&nbsp;&nbsp;描述 </label>
                    <div class="col-sm-8">
                        <input type="text" id="detail-scaleDesc" name="detailcompanyDesc"
                            class="col-xs-10 col-sm-10" data-bxwidget data-bxtype="string" />
                    </div>
                </div>
            </div>
        </div>
       <!--  <div class="row rowspace">
            <div class="col-sm-12">
                <div class="form-group">
                    <label class="col-sm-4 control-label no-padding-right labelfont"
                        for="detail-areaCode"><font style="color:red">* </font>所属区县</label>
                    <div class="col-sm-8">
                        <input type="text" id="detail-areaCode" name="detailareaCode"
                            class="col-xs-10 col-sm-10" data-bxwidget data-bxtype="string" />
                    </div>
                </div>
            </div>
        </div> -->
    </form>
    
</body>
</html>
