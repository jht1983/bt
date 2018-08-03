<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>中控能源原始信息</title>
<style>
 
.list .labelFour{
		float:left;
		height: 34px;
		padding-top: 5px; 
	}
.list .inputFour{
		float:left ;
		margin-left:3%;
		    width: 62%;
           height: 100%;
} 

.list .btn-block{
        width: 70%;
        margin-left: 25%;
        
      
}

.grid .ui-jqgrid .ui-paging-info{
display:none;
} 

.grid .ui-state-disabled {
display:none;
}

.grid .ui-jqgrid .ui-pg-selbox{
display:none;
}
.grid .ui-jqgrid .ui-jqgrid-labels th{
text-align: center!important;
}

/* .grid .ui-jqgrid .ui-jqgrid-pager .ui-pg-div{
padding: 1px 0;
    float: left;
    position: relative;
} */

</style>
</head>
<body>
    <%@ include file="/bxui/bxuihead.jsp"%>
    <script type="text/javascript" src="<%=toolkitPath%>/bxui/baosight-require.js"></script>
    <script type="text/javascript"
        src="<%=toolkitPath%>/report/energyReport.js"></script>
    <link rel="stylesheet" href="<%=toolkitPath%>/df/console/css/style-frame-inner.css" />
    
 <%-- <link rel="stylesheet" href="<%=toolkitPath%>/bxui/other/css/style-frame-inner.css"/> --%>
    <div class="jqgridFrame contentFrame">
        <div class="page-content contentFrame">
            <!-- /section:settings.box -->
            <div class="page-header" style="height: 50px;">
                <h1 class="pull-left">
                    报表管理
                    <small> 
                        <i class="ace-icon fa fa-angle-double-right"></i>
                        中控能源数据原始信息
                    </small>
                </h1>

            </div>
            <!-- /.page-header -->


            <div class="row">

                <div class="col-xs-12 searchArea list" id="queryarea">

                    <div id="alertdiv" class="alertdiv">    
                    </div> 
                    <div class="col-sm-3 col-xs-12">
						<label class="labelFour control-label" for="inqu_status-proTime">日期</label> 
						<input id="inqu_status-proTime"
										class="Wdate inputFour" type="text" data-bxwidget onfocus="WdatePicker()" onclick="changeDate();" />
								</div>
					
              
                    <div class="col-sm-6">
                    </div> 
                    <div class="searchBtnPos col-sm-3">
                        <button class="btn btn-sm  btn-block" onclick="on_query_click();" >
                            <div class="ace-icon fa fa-search"></div>
                            <span>查询</span>
                        </button>
                    </div>
                </div>

                <div class="col-xs-12 grid" style="margin-top:10px">
                    <div id="jqGrid"></div>
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
       
    </form>
    
</body>
</html>
