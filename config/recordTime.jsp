<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>生产数据录入时间设置</title>

</head>
<body>
<%@ include file="/bxui/bxuihead.jsp" %>
<script type="text/javascript" src="<%=toolkitPath%>/bxui/baosight-require.js"></script>
<%-- <script type="text/javascript" src="<%=toolkitPath%>/df/designer/js/loadsave.js"></script> --%>
<script type="text/javascript" src="<%=toolkitPath%>/config/recordTime.js"></script>
<link rel="stylesheet" href="<%=toolkitPath%>/bxui/other/css/style-frame-inner.css"/>

<div class="jqgridFrame contentFrame">
    <div class="page-content contentFrame">
        <!-- /section:settings.box -->
        <div class="page-header" style="height: 50px;">
            <h1 class="pull-left">
                配置管理
                <small><i class="ace-icon fa fa-angle-double-right"></i>
                    生产数据时间管理
                </small>
            </h1>

        </div>
        <!-- /.page-header -->
        <div class="row">
            <div class="col-xs-12 searchArea" id="queryarea">

                <div id="alertdiv" class="alertdiv"></div>

                <div class="row">
                    <div class="col-sm-6 col-md-6 col-xs-12 no-padding">
                    </div>
                    <div class="col-sm-6 col-md-6 col-xs-12 no-padding">
                        <div class="col-md-9"></div>
                        
                        <div class="col-sm-3 col-md-3 col-xs-6 no-padding-left-1024">
                            <button class="btn  btn-sm btn-block" onclick="saveRec();" >
                                <div class="ace-icon fa fa-pencil-square-o"></div>
                                <span>修改</span>
                            </button>
                        </div>
                       
                    </div>
                </div>
            </div>

            <div class="col-xs-12">
                <div id="jqGrid"></div>
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </div>
</div>
<!-- page-content -->

</body>
</html>

