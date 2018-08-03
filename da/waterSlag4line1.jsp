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
	.timePicter.inputFour{
		width:40%;
	}
</style>
</head>
<body>
	<%@ include file="/bxui/bxuihead.jsp"%>
	
	<script type="text/javascript" src="<%=toolkitPath%>/bxui/baosight-require.js"></script>
	<script type="text/javascript" src="<%=toolkitPath%>/common/echarts/echarts.js"></script>
	<script type="text/javascript" src="<%=toolkitPath%>/da/waterSlag4line1.js"></script>
	<script type="text/javascript" src="<%=toolkitPath%>/da/dateTime.js"></script>
	
		
	<%-- <script language="javascript" type="text/javascript" src="<%=toolkitPath%>/common/My97DatePicker/My97DatePicker/WdatePicker.js"></script>
 --%>
	<link rel="stylesheet" href="<%=toolkitPath%>/bxui/other/css/style-frame-inner.css" />

	<div class="jqgridFrame contentFrame">
		<div class="page-content contentFrame">
			<!-- /section:settings.box -->
			<div class="page-header" style="height: 50px;">
				<h1 class="pull-left">
					统计分析 <small><i class="ace-icon fa fa-angle-double-right"></i>
						1号生产线水渣使用量统计分析 </small>
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
							<!-- <div id="alertdiv" class="alertdiv"></div> -->
							<div class="col-sm-12 col-xs-12 list" id="queryarea">
								<div class="col-sm-4 col-lg-2 col-xs-12 no-padding">
									<label class="labelFour control-label no-padding-right"
										 for="inqu_status-timeGranName">时间粒度</label>
									<div type="text" id="inqu_status-timeGran" class="inputFour"  data-bxwidget="bxcombobox"
										onclick="changeDate();"
										></div>
								</div>
								<div class="radio col-md-2 col-lg-2 col-sm-3 col-xs-12 no-padding" style="width: 120px;margin-top:5px;margin-bottom:10px;">
									<label> <input name="form-field-radio" type="radio" value="1" checked="checked"
										class="ace" /> <span class="lbl"> 趋势</span>
									</label>
									<label> <input name="form-field-radio" type="radio" value="2"
										class="ace" /> <span class="lbl"> 对比</span>
									</label>
								</div>						
								<div class="col-sm-5 col-lg-4 col-xs-12 no-padding" >
									<label id="label_time" class="labelFour control-label">统计时间</label> 
									<div class="col-sm-9 col-lg-9 col-xs-8 no-padding">		
										<input id="inqu_status-startTime"
											class="Wdate inputFour timePicter" type="text" onfocus="startTime();"  />
											<label id="label" class="labelFour control-label">至</label> 
										<input id="inqu_status-endTime"
											class="Wdate inputFour timePicter" type="text"  onfocus="endTime();" />
									</div>
								</div>
								<!-- <div class="col-sm-3 col-xs-12 no-padding">
									<label class="labelFour control-label no-padding-right"
										 for="inqu_status-statisticalTypeName">统计类型</label>
									<div id="inqu_status-statisticalType" class="inputFour" data-bxwidget="bxcombobox"
										onchange="getProcess(false);"></div>
								</div> -->
								<div class="col-sm-2 col-xs-12 no-padding" style="float:right">
									<button class="btn btn-sm  btn-block"
										onclick="on_query_click();" >
										<div class="ace-icon fa fa-search"></div>
										<span>查询</span>
									</button>
								</div>
							</div>
							<div class="row">
								<div class="col-xs-12" style="padding: 0px">
									<div id="bardemostandard" style="width: 100%; height: 32vw"></div>
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
				<!-- <div class="col-xs-12">
					<div id="jqGrid"></div>
				</div> -->
				<!-- /.col -->
			
			<!-- /.row -->
		
	<!-- page-content -->

</body>
</html>

