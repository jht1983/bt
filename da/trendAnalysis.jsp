<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>趋势分析</title>
<style>
	.list .labelFour{
		float:left 
	}
	.list .inputFour{
		float:left ;
		margin-left:3%;
	}
	.btn-float{
		float:right !important;
	}
</style>
</head>
<body>
	<%@ include file="/bxui/bxuihead.jsp"%>
	
	<script type="text/javascript"
		src="<%=toolkitPath%>/bxui/baosight-require.js"></script>
	<script type="text/javascript" src="<%=toolkitPath%>/common/echarts/echarts.js"></script>
	<script type="text/javascript"
		src="<%=toolkitPath%>/da/trendAnalysis.js"></script>
		
	<%-- <script language="javascript" type="text/javascript" src="<%=toolkitPath%>/common/My97DatePicker/My97DatePicker/WdatePicker.js"></script>
 --%>
	<link rel="stylesheet"
		href="<%=toolkitPath%>/bxui/other/css/style-frame-inner.css" />

	<div class="jqgridFrame contentFrame">
		<div class="page-content contentFrame">
			<!-- /section:settings.box -->
			<div class="page-header" style="height: 50px;">
				<h1 class="pull-left">
					统计分析 <small><i class="ace-icon fa fa-angle-double-right"></i>
						趋势分析 </small>
				</h1>

			</div>
			<!-- /.page-header -->
               <div class="col-sm-12 col-xs-12">
				<div class="col-sm-12 col-xs-12 searchArea">
					<div class="row">
						<!-- <div class="col-sm-2 col-xs-12 no-padding">
							<div id="processtree"></div>
						</div> -->


						<div class="col-sm-12 col-xs-12">
							<div id="alertdiv" class="alertdiv"></div>
							<div class="col-sm-12 col-xs-12 list" style="padding: 0">



								<div class="col-sm-4 col-md-3 col-lg-2 col-xs-12 no-padding">
									<label class="labelFour control-label no-padding-right"
										 for="inqu_status-timeGranName">时间粒度</label>
									<div type="text" id="inqu_status-timeGran" class="inputFour" data-bxwidget="bxcombobox"
										></div>
								</div>
								<div class="col-sm-4 col-md-3 col-lg-2 col-xs-12 no-padding">
									<label class="labelFour control-label no-padding-right"
										 for="inqu_status-producLineName">生&nbsp;&nbsp;产&nbsp;线</label>
									<div id="inqu_status-producLine" class="inputFour" data-bxwidget="bxcombobox"
										onchange="setDefaultDate();"></div>
								</div>
								<div class="col-sm-4 col-md-3 col-lg-2 col-xs-12 no-padding">
									<label class="labelFour control-label no-padding-right"
										 for="inqu_status-statisticalTypeName">统计类型</label>
									<div id="inqu_status-statisticalType" class="inputFour" data-bxwidget="bxcombobox"
										onchange="getProcess(false);"></div>
								</div>
								<div class="col-sm-4 col-md-3 col-lg-2 col-xs-12 no-padding">
									<label class="labelFour control-label">起始日期</label> <input id="startTime"
										class="Wdate inputFour" type="text" onfocus="WdatePicker()" onclick="changeDate();" />
								</div>
								<div class="col-sm-4 col-md-3 col-lg-2 col-xs-12 no-padding">
									<label class="labelFour control-label">结束日期</label> <input id="endTime"
										class="Wdate inputFour" type="text"  onfocus="WdatePicker()" onclick="changeDate();" />
								</div>
								<!-- <div class="col-sm-7 col-xs-12"></div> -->
								<div></div>
								<div class="col-sm-2 col-xs-6 btn-float">
									<button class="btn btn-sm  btn-block" 
										onclick="on_query_click();">
										<div class="ace-icon fa fa-search"></div>
										<span>查询</span>
									</button>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-12 col-xs-12">

									<div id="main" style="height:600px"></div>
								</div>
							</div>

							<div class="row">
								<div class="col-xs-12" style="padding: 0px">
									<div id="bardemostandard" style="width: 100%; height: 400px"></div>
								</div>
							</div>
							<!-- /.col -->
						</div>
					</div>
				</div>
			</div>
			<!-- /.row -->

		</div>
	</div>
	<!-- page-content -->
				<div class="col-xs-12">
					<div id="jqGrid"></div>
				</div>
				<!-- /.col -->
			
			<!-- /.row -->
		
	<!-- page-content -->

</body>
</html>

