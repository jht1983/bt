<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>班组信息信息</title>
</head>
<body>
    <%@ include file="/bxui/bxuihead.jsp"%>
    <script type="text/javascript" src="<%=toolkitPath%>/bxui/baosight-require.js"></script>
     <%-- <script type="text/javascript" src="<%=toolkitPath%>/df/designer/js/loadsave.js"></script> --%>
    <script type="text/javascript"  src="<%=toolkitPath%>/config/team.js"></script>
    <link rel="stylesheet"      href="<%=toolkitPath%>/bxui/other/css/style-frame-inner.css" />
    <div class="jqgridFrame contentFrame">
        <div class="page-content contentFrame">
            <!-- /section:settings.box -->
            <div class="page-header" style="height: 50px;">
                <h1 class="pull-left">
                    配置管理
                    <small> 
                        <i class="ace-icon fa fa-angle-double-right"></i>
                        班组信息
                    </small>
                </h1>

            </div>
            <!-- /.page-header -->
            
              <div class="row">         
                <div class="col-xs-12 searchArea" id="queryarea">
				<div id="alertdiv" class="alertdiv"></div>
                <div class="row">
                    <div class="col-sm-5 col-1024-5 col-xs-12">
                        <div class="col-sm-6 col-1024-6 col-xs-12 no-padding">
                            <label
                                    class="labelThree" style="width:auto;float:left;"
                                    for="inqu_status-teamCode" >班组编码</label>
                            <input type="text" id="inqu_status-teamCode" style="float:left;"
                                   data-bxwidget class="inputThree" />
                        </div>
                        <div class="col-sm-6 col-1024-6 col-xs-12 no-padding">
                            <label
                                    class="labelThree" style="width:auto;float:left;"
                                    for="inqu_status-teamName">班组名称</label>
                            <input type="text" id="inqu_status-teamName" style="float:left;"
                                   data-bxwidget class="inputThree" />
                        </div>
                    </div>
                    <div class="col-sm-7 col-1024-7 col-xs-12">
                        <div class="col-sm-3 col-1024-3 col-xs-5 pull-right no-padding-right">
                            <button class="btn btn-sm btn-danger  width-100 " onclick="deleteRec();">
                                <div class="ace-icon fa fa-trash-o"></div>
                                <span>删除</span>
                            </button>
                        </div>
                        <div class="col-sm-3 col-1024-3 col-xs-5 pull-right no-padding-right">
                            <button class="btn btn-sm btn-block" onclick="saveRec();">
                                <div class="ace-icon fa fa-save"></div>
                                <span>保存</span>
                            </button>
                        </div>
                        <div class="col-sm-3 col-1024-3 col-xs-5 pull-right no-padding-right">
                            <button class="btn btn-sm btn-block" onclick="addAndCopy();">
                                <div class="ace-icon fa fa-plus"></div>
                                <span>新增/复制</span>
                            </button>
                        </div>
                        <div class="col-sm-3 col-1024-3 col-xs-5 pull-right no-padding-right">
                            <button class="btn btn-sm btn-block" onclick="on_query_click();">
                                <div class="ace-icon fa fa-search"></div>
                                <span>查询</span>
                            </button>
                        </div>
                    </div>
                </div>
			</div>
                 <div class="col-xs-12" >
                    <div id="jqGrid"></div>
            </div>
  

                   
                </div>

          
            <!-- /.row -->

        </div>
    </div>
    <!-- page-content -->

<!-- ----------------------------------信息弹出框---------------------------------------------------------->   
    <!-- <div id="dialog-message" class="hide">          
    </div>
    <div id="dialog-message" class="hide">
		<p class="bigger-110 bolder center grey">
			<br/>
			<b id="dialogInfo"></b>
		</p>
	</div> -->

<!-- ----------------------------------pop div---------------------------------------------------------->
   <!--  <form id="detail" class="hide">
        <input type="hidden" id="detail-teamId" data-bxwidget data-bxtype="number" data-bxauto />
        <div class="row rowspace">
            <div class="col-sm-12">
                <div class="form-group">
                    <label class="col-sm-4 control-label no-padding-right labelfont"
                        for="detail-scaleCode"><font style="color:red">* </font>粒度编码 </label>
                    <div class="col-sm-8">
                        <input type="text" id="detail-scaleCode" name="detailcompanyCode"
                            class="col-xs-10 col-sm-10" data-bxwidget data-bxtype="string" required />
                    </div>
                </div>
            </div>
        </div>
        <div class="row rowspace">
            <div class="col-sm-12">
                <div class="form-group">
                    <label class="col-sm-4 control-label no-padding-right labelfont"
                        for="detail-scaleName"><font style="color:red">* </font>粒度名称 </label>
                    <div class="col-sm-8">
                        <input type="text" id="detail-scaleName" name="detailcompanyName"
                            class="col-xs-10 col-sm-10" data-bxwidget data-bxtype="string" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row rowspace">
            <div class="col-sm-12">
                <div class="form-group">
                    <label class="col-sm-4 control-label no-padding-right labelfont"
                        for="detail-scaleDesc">描述 </label>
                    <div class="col-sm-8">
                        <input type="text" id="detail-scaleDesc" name="detailcompanyDesc"
                            class="col-xs-10 col-sm-10" data-bxwidget data-bxtype="string" />
                    </div>
                </div>
            </div>
        </div>
       
    </form> -->
    
</body>
</html>
