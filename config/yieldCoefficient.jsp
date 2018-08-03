<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>产量折算系数信息</title>
<style>
	.searchLabel{
		height:34px;
		line-height:34px;
		margin-right:5px;
	}
	.inputFrame{
		width:62%;
	}
	.inputFrame input{
		width:100%;
	}
	.rowspace .col-sm-12{
		margin-bottom:10px;
	}
</style>
</head>
<body>
    <%@ include file="/bxui/bxuihead.jsp"%>
    <script type="text/javascript" src="<%=toolkitPath%>/bxui/baosight-require.js"></script>
    <script type="text/javascript"
        src="<%=toolkitPath%>/config/yieldCoefficient.js"></script>
    <link rel="stylesheet" href="<%=toolkitPath%>/df/console/css/style-frame-inner.css" />
    
    <div class="jqgridFrame contentFrame">
        <div class="page-content contentFrame">
            <!-- /section:settings.box -->
            <div class="page-header" style="height: 50px;">
                <h1 class="pull-left">
                    配置管理
                    <small> 
                        <i class="ace-icon fa fa-angle-double-right"></i>
                      产量折算系数信息
                    </small>
                </h1>

            </div>
            <!-- /.page-header -->


            <div class="row">

                <div class="col-xs-12 searchArea" id="queryarea">

                    <div id="alertdiv" class="alertdiv">    
                    </div> 

                    <div class="col-sm-3 col-lg-2 col-xs-12">
                      <!--   <div class="row"> -->
                            <!-- <div class="form-group"> -->
                                <label class="searchLabel  control-label no-padding-right" style="float:left"
                                    for="inqu_status-productName">产品名称</label>
                                <div class="inputFrame" style="float:left" >
                                    <input type="text" id="inqu_status-productName" data-bxwidget class="searchInput" style="overflow:hidden;"/>
                                </div>
                            <!-- </div> -->
                       <!--  </div> -->
                    </div>
                    <div class="col-sm-3 col-lg-2 col-xs-12">
                        <!-- <div class="row">
                            <div class="form-group"> -->
                                <label class="searchLabel control-label no-padding-right" style="float:left"
                                    for="inqu_status-yieldCoefficient">折算系数</label>
                                <div class="inputFrame" style="float:left">
                                    <input type="text" id="inqu_status-yieldCoefficient" data-bxwidget class="searchInput"/>
                                </div>
                         <!--    </div>
                        </div> -->
                    </div>
                    <div class="searchBtnPos col-sm-2 col-xs-2" style="float:right">
                        <button class="btn btn-sm pull-right btn-block" onclick="on_query_click();" >
                            <div class="ace-icon fa fa-search"></div>
                            <span>查询</span>
                        </button>
                    </div>
                </div>

                <div class="col-xs-12" style="margin-top:10px">
                    <div id="yieldCoefficientContent"></div>
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
        <input type="hidden" id="detail-Id" data-bxwidget data-bxtype="number" data-bxauto />
        <div class="rowspace">
            <div class="col-sm-12">
                <div class="form-group">
                    <label class="col-sm-4 control-label no-padding-right labelfont"
                        for="detail-productCode">产品编码</label>
                    <div class="col-sm-8">
                        <input type="text" id="detail-productCode" name="detailproductCode"
                            class="col-xs-10 col-sm-10" data-bxwidget data-bxtype="string" />
                    </div>
                </div>
            </div>
        </div>
        <div class="rowspace">
            <div class="col-sm-12">
                <div class="form-group">
                    <label class="col-sm-4 control-label no-padding-right labelfont"
                        for="detail-productName">产品名称</label>
                    <div class="col-sm-8">
                        <input type="text" id="detail-productName" name="detailproductName"
                            class="col-xs-10 col-sm-10" data-bxwidget data-bxtype="string" />
                    </div>
                </div>
            </div>
        </div>
        <div class="rowspace">
            <div class="col-sm-12">
                <div class="form-group">
                    <label class="col-sm-4 control-label no-padding-right labelfont"
                        for="detail-yieldCoefficient">折算系数</label>
                    <div class="col-sm-8">
                        <input type="text" id="detail-yieldCoefficient" name="detailyieldCoefficient"
                            class="col-xs-10 col-sm-10" data-bxwidget data-bxtype="string" />
                    </div>
                </div>
            </div>
        </div>
        <div class="rowspace">
            <div class="col-sm-12">
                <div class="form-group">
                    <label class="col-sm-4 control-label no-padding-right labelfont"
                        for="detail-yieldDesc">描述 </label>
                    <div class="col-sm-8">
                        <input type="text" id="detail-yieldDesc" name="detailyieldDesc"
                            class="col-xs-10 col-sm-10" data-bxwidget data-bxtype="string" />
                    </div>
                </div>
            </div>
        </div>
    </form>
    
</body>
</html>
