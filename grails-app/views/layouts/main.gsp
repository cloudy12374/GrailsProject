<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
	<meta http-equiv="expires" content="0">
	<title><g:layoutTitle default="練習系統"/></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- 最新編譯和最佳化的 CSS -->
	<link rel="stylesheet" href="${request.contextPath}/css/bootsnip.css">
	<link rel="stylesheet" href="${request.contextPath}/css/bootstrap.css">
	<link rel="stylesheet" href="${request.contextPath}/css/jquery.fileupload.css">
	<link rel="stylesheet" href="${request.contextPath}/css/jquery.fileupload-ui.css">
	<link rel="stylesheet" href="${request.contextPath}/css/font-awesome.min.css">
	<link rel="stylesheet" href="${request.contextPath}/css/jquery-ui.css">
	<link rel="stylesheet" href="${request.contextPath}/css/jquery-ui.min.css">
	<link rel="stylesheet" href="${request.contextPath}/css/jquery-ui.structure.css">
	<link rel="stylesheet" href="${request.contextPath}/css/jquery-ui.structure.min.css">
	<link rel="stylesheet" href="${request.contextPath}/css/jquery-ui.theme.css">
	<link rel="stylesheet" href="${request.contextPath}/css/jquery-ui.theme.min.css">

	<link rel="stylesheet" href="${request.contextPath}/css/bootstrap-datetimepicker.min.css">
	<link rel="stylesheet" href="${request.contextPath}/css/bootstrap-datetimepicker.css">
	<link rel="stylesheet" href="${request.contextPath}/css/menutree-1.1.css">
	<!-- 最新編譯和最佳化的 JavaScript -->
	<script type="text/javascript">
		var contextPath = '${request.contextPath}';
	</script>
	<script src="${request.contextPath}/js/jquery-2.2.2.js"></script>
	<script src="${request.contextPath}/js/bootstrap.min.js"></script>
	<script src="${request.contextPath}/js/dataform1.0.js"></script>
	<script src="${request.contextPath}/js/optionmenu1.0.js"></script>
	<script src="${request.contextPath}/js/dataTable1.0.js"></script>
	<script src="${request.contextPath}/js/dataTable2.js"></script>
	<script src="${request.contextPath}/js/vendor/jquery.ui.widget.js"></script>
	<script src="${request.contextPath}/js/load-image.all.min.js"></script>
	<script src="${request.contextPath}/js/jquery-ui.js" ></script>
	<script src="${request.contextPath}/js/jquery-ui.min.js" ></script>
	<script src="${request.contextPath}/js/jquery.iframe-transport.js"></script>
	<script src="${request.contextPath}/js/jquery.fileupload.js"></script>
	<script src="${request.contextPath}/js/jquery.fileupload-process.js"></script>
	<script src="${request.contextPath}/js/jquery.fileupload-image.js"></script>
	<script src="${request.contextPath}/js/jquery.fileupload-audio.js"></script>
	<script src="${request.contextPath}/js/jquery.fileupload-video.js"></script>
	<script src="${request.contextPath}/js/jquery.fileupload-validate.js"></script>
	<script src="${request.contextPath}/js/country.js"></script>
	<script src="${request.contextPath}/js/utils.js"></script>
	<script src="${request.contextPath}/js/menutree-1.1.js"></script>
	<script src="${request.contextPath}/js/bootstrap-datetimepicker.min.js"></script>
	<script src="${request.contextPath}/js/bootstrap-datetimepicker.js"></script>
	<script src="${request.contextPath}/js/main-1.0.js"></script>
	<g:layoutHead/>
</head>
<script type="text/javascript">
	var isDev = false;
	/*
     * 設定轉換select標籤目前所用的option
     */
	function changeSelect(select, data){
		$(select).find("option").each(function(){
			if($(this).val()==data){
				$(this).prop("selected",true);
			}
		});
	}

</script>
<style>
	@media screen and (max-width: 786px) {
		.main-btn {
			cursor:pointer;
			width:64px;
			height:64px;
		}
		.goback-btn{
			font-size:12px;
		}

	}
	@media screen and (min-width: 0px) {
		.side-collapse {
			background-color:#FF8200;
			bottom:0;
			left:0;
			width:300px;
			position:fixed;
			overflow:hidden;
			transition:width .4s;
			color: #000;
			border-right:2px solid #C2C5C7;
			z-index:99;
		}
		.side-collapse.in {
			width:0;
		}
	}
	.main_frame {
		margin-bottom: 5px;
	}
	body{
		background-color:#fff2e6;
		padding:0px;
	}
</style>

<body id="body">
	<div id="banner" style="background-color:#FFF; border-bottom:#C2C5C7 solid 2px; position:fixed; z-index:99;" >
		<table style="width:99%">
			<tr>
				<td style="padding:5px 10px 0px 10px;">
					<a id="menuInfoBar" data-toggle="collapse-side" data-target=".side-collapse" style=" color:#FF8200; font-size:36px; cursor:pointer; ">
						<span class="glyphicon glyphicon-th-large" ></span>
					</a>
				</td>
				<td style="width:60%; padding-top:5px;">
					<div class="dropdown">
						<button id="name_title" class="btn btn-warning dropdown-toggle" style="background-color:#FF8200; border:dashed 2px #000; font-weight:bold; color:#000" data-toggle="dropdown">
							<span style="margin-top:1px" class="glyphicon glyphicon-user"></span>
							<span id="_nameChn" style="font-size:20px;"></span>
							<span class="label label-default" id="_branchId" ></span>
						</button>
						<ul class="dropdown-menu" style="font-weight:bold">
							<li class="dropdown-header" style="font-size:16px" ><span class="glyphicon glyphicon-star-empty"></span> <span id="_roles"></span></li>
							<li class="dropdown-header" style="font-size:16px" ><span class="glyphicon glyphicon-star-empty"></span> <span id="_id"></span></li>
							<li class="dropdown-header" style="font-size:16px" ><span class="glyphicon glyphicon-star-empty"></span> <span id="_orgId"></span></li>
							<li role="presentation" class="divider"></li>
							<li style="font-size:16px"><a href="${request.contextPath}/login/logout"><span class="glyphicon glyphicon-log-out"></span> 登出</a></li>
						</ul>
					</div>
				</td>
				<td style="padding:10px; width:40%; text-align:right">
					<span >
						<img id="logo" height="36" style="cursor:pointer" src="${request.contextPath}/images/TBS/obank-logo.png" />
					</span>
				</td>
			</tr>
		</table>
	</div>
	<div id="touch-panel" role="panel" style="position:absolute;"></div>
	<div class="container">
		<div id="menu" class="navbar-inverse side-collapse in" style="overflow-y:visible"></div>
	</div>
	<div id="main" class="container theme-showcase" role="main" style="margin-top:25px;">
		<g:layoutBody/>
		<!-- Message Modal -->
		<div id="messageShower" class="modal fade" role="dialog" data-keyboard="false" data-backdrop="static">
			<div class="modal-dialog modal-sm">

				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header" style="background-color:#f2dede" id="messageHeader">
						<h4 class="modal-title" id="messageTitle"><span class="glyphicon glyphicon-info-sign" style="color:red"></span>&nbsp;&nbsp;警告</h4>
					</div>
					<div class="modal-body">
						<p id="messageInModal">Some text in the modal.</p>
					</div>
					<div class="modal-footer">
						<button id="messageCancelInModal" type="button" class="btn btn-default"><span class="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;確定</button>
					</div>
				</div>
			</div>
		</div>
		<!-- End Message Modal -->

		<div class="modal fade" id="loading" role="dialog" data-keyboard="false" data-backdrop="static">
			<div class="modal-dialog">
				<div style="margin-top:300px; text-align:center"">
				<span style="font-size:64px; color:#FF8200" id="lodingDesc">Loading......</span>
				<i class="fa fa-spinner fa-spin" style="font-size:64px; color:#FF8200"></i>
			</div>
		</div>
	</div>
	<!-- showConfirm -->
	<div role="dialog" class="modal fade" id="confirm_dialog" data-keyboard="false" data-backdrop="static">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header" style="background-color:#337ab7; color:white">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title"><i class="glyphicon glyphicon-warning-sign" ></i> 系統確認訊息</h4>
				</div>
				<div class="modal-body">
					<p style="margin:10px" id="confirmMessage"></p>
				</div>
				<div class="modal-footer">
					<div class="row">
						<div class="col-md-6 col-xs-6" >
							<button id="confirmButton" type="button" class="btn btn-primary btn-block"><span class="glyphicon glyphicon-ok"></span> 確定</button>
						</div>
						<div class="col-md-6 col-xs-6" >
							<button id="cancelButton" type="button" class="btn btn-primary btn-block"><span class="glyphicon glyphicon-remove"></span>取消</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- End showConfirm -->

	<!-- Error Modal -->
	<div id="errorModal" class="modal fade" role="dialog" data-keyboard="false" data-backdrop="static">
		<div class="modal-dialog modal-sm">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header" style="background-color:#f2dede">
					<h4 class="modal-title"><span class="glyphicon glyphicon-info-sign" style="color:red"></span>&nbsp;&nbsp;警告</h4>
				</div>
				<div class="modal-body">
					<p id="errorMessageInModal">Some text in the modal.</p>
				</div>
				<div class="modal-footer" style="background-color:#ffffff">
					<button id="errorMessageCancelInModal" type="button" class="btn btn-default"><span class="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;確定</button>
				</div>
			</div>
		</div>
	</div>
	<!-- End Error Modal -->

	<!-- SendDate Modal -->
	<div id="sendDateModal" class="modal fade" role="dialog" data-keyboard="false" data-backdrop="static">
		<div class="modal-dialog modal-sm">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header" style="background-color:#99BCDB">
					<h4 class="modal-title"><span class="glyphicon glyphicon-envelope" style="color:blue"></span>&nbsp;&nbsp;寄送日期</h4>
				</div>
				<div class="modal-body">
					<input type="text" class="form-control doAction Date" name="dateInModal" id="dateInModal">
				</div>
				<div class="modal-footer">
					<button id="dateconfirmInModal" type="button" class="btn btn-default"><span class="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;確定</button>
				</div>
			</div>
		</div>
	</div>
	<!-- End SendDate Modal -->
	</div>

	<!-- 讓後端開新分頁 -->
	<form target="_blank" method="post" id="newPageForm"></form>
	<!-- End 讓後端開新分頁 -->
</body>

</html>
