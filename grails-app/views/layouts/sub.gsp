<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><g:layoutTitle default="TBS系統"/></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<g:layoutHead/>
		<!-- 最新編譯和最佳化的 CSS -->
		<link rel="stylesheet" href="${request.contextPath}/css/bootsnip.css">
		<link rel="stylesheet" href="${request.contextPath}/css/bootstrap.css">
		<link rel="stylesheet" href="${request.contextPath}/css/signin.css">
		<link rel="stylesheet" href="${request.contextPath}/css/sticky-footer-navbar.css">
		<link rel="stylesheet" href="${request.contextPath}/css/bootsnip.css">
		<link rel="stylesheet" href="${request.contextPath}/css/jquery.fileupload.css">
		<link rel="stylesheet" href="${request.contextPath}/css/jquery.fileupload-ui.css">
		<!-- 最新編譯和最佳化的 JavaScript -->
		<script src="${request.contextPath}/js/jquery-2.2.2.js"></script>
		<script src="${request.contextPath}/js/bootstrap.min.js"></script>
		<script src="${request.contextPath}/js/dataTable1.0.js"></script>
	</head>
	<script>
		var FAIL = 1;
		var SUCCESS = 2;
		var WARN = 3;
		var INFO = 4;
	
		function showMessage(msg, type){
			$("#messageShower").modal("hide");
			var span=document.createElement("span");
			$(span).css("color","black");
			$("#messageTitle").empty();
			switch(type){
				case FAIL:
					$("#messageHeader").css("background-color","#FF5151");
					$(span).addClass("glyphicon glyphicon-remove-sign");
					$("#messageTitle").append(span);
					
					break;
				case SUCCESS:
					$("#messageHeader").css("background-color","#53FF53");
					$(span).addClass("glyphicon glyphicon-ok-sign");
					$("#messageTitle").append(span);
					break;
				case WARN:
					$("#messageHeader").css("background-color","#FFDC35");
					$(span).addClass("glyphicon glyphicon-question-sign");
					$("#messageTitle").append(span);
					break;
				default :
					$("#messageHeader").css("background-color","#80FFFF");
					$(span).addClass("glyphicon glyphicon-info-sign");
					$("#messageTitle").append(span);
			}
	
			$("#messageTitle").append("系統訊息");
			$("#messageInModal").html(msg);
			$("#messageCancelInModal").unbind("click");
			$("#messageCancelInModal").click(function(){
				$("#messageShower").modal("hide");
			});
			$("#messageShower").modal("show");
		}
	</script>
	<style>
	      body{
	      	  background-color:#fff2e6;
	      	  padding:0px;
	      }
	</style>
	<body>
		<div id="banner" style="background-color:#FFF; border-bottom:#C2C5C7 solid 2px; position:fixed; z-index:99; height:58px; width:100%" >
			<table style="width:99%">
				<tr>
					<td style="padding:10px; text-align:right; width:100%">
				    	<span >
				    		<img height="36" src="${request.contextPath}/images/TBS/obank-logo.png" />
				    	</span>	
				    </td>
				</tr>				
			</table>
		</div>
		<div id="main" role="main" class="container theme-showcase">
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
			<g:layoutBody/>
		</div>
	</body>
</html>