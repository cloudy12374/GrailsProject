	var FAIL = 1;
	var SUCCESS = 2;
	var WARN = 3;
	var INFO = 4;
	if( top != self ) top.location = encodeURI(self.location);
	function resizeTouchPanel(){
		var h = $(window).innerHeight();
		var w = $(window).innerWidth();
		$("#touch-panel").width(w-5);
		$("#touch-panel").height(h-5);
	}
	function showConfirm(msg, ok, cancel){
		$("#confirmMessage").html(msg);
		$("#confirmButton").unbind("click");
		$("#cancelButton").unbind("click");
		$("#confirmButton").bind("click",function(){
			$("#confirm_dialog").modal("hide");
			if(ok && ok != null){
				setTimeout(ok, 500);
			}
		});
		$("#cancelButton").bind("click",function(){
			$("#confirm_dialog").modal("hide");
			if(cancel && cancel != null){
				setTimeout(cancel,500);
			}
		});
		$("#confirm_dialog").modal("show");
	}
	function showMessage(msg, type, func){
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
		$("#messageCancelInModal").bind("click",function(){
			$("#messageShower").modal("hide");
			if(func && func != null){
				setTimeout(func,500);
			}
				
		});
		setTimeout(function(){
			$("#messageShower").modal("show");
		},500);
	}
	
	function showLoading(desc){
		$("#loading").modal({backdrop: "static"});
		if(desc==null || desc=="" || (typeof desc == "undefined")){
			$("#lodingDesc").html("Loading......");
		}else{
			$("#lodingDesc").html(desc+"......");
		}
		$("#loading").modal("show");
	}
	function hideLoading(){
		$("#loading").modal("hide");
	}
	function preLoad(){
		initial();
		//帳號檢查
		$(".ACCOUNT").prop("maxlength",16);
		$(".ACCOUNT").prop("type","number");
		$(".ACCOUNT").blur(function(){
			var accountData=$(this).val();
			if(accountData.trim()!=""){
				if(accountData.length<16){
					accountData=fillZero(accountData, 16);
					$(this).val(accountData);
				}
			}
		});
		$(".ACCOUNT").keyup(function(e){
			var accountData=$(this).val();
			var result=Utils.getAllExceptNumberOnly(accountData);
			if(result!=null){
				for(var i=0;i<result.length;i++){
					accountData=accountData.replace(result[i],"");
				}
			}
			if(accountData.length>16){
				accountData=accountData.substring(0, 16);
			}
			$(this).val(accountData);
		});


		//帳號檢查(ODS特製)
		$(".ACCOUNT_ODS").prop("maxlength",14);
		$(".ACCOUNT_ODS").prop("type","text");
		$(".ACCOUNT_ODS").blur(function(){
			var accountData=$(this).val();
			if(accountData.trim()!=""){
				if(accountData.length<14){
					accountData=fillZero(accountData, 14);
					$(this).val(accountData);
				}
			}
		});
		$(".ACCOUNT_ODS").keyup(function(e){
			var accountData=$(this).val();
			var result=Utils.getAllExceptNumberOnly(accountData);
			if(result!=null){
				for(var i=0;i<result.length;i++){
					accountData=accountData.replace(result[i],"");
				}
			}
			if(accountData.length>14){
				accountData=accountData.substring(0, 14);
			}
			$(this).val(accountData);
		});

		//UID檢查
		$(".UID").prop("maxlength",10);
		$(".UID").prop("type","text");
		$(".UID").keyup(function(){
			var checkResult=Utils.getAllExceptNumberAndLetter($(this).val());
			if(checkResult!=null){
				var valueString=$(this).val();
				for(var i=0;i<checkResult.length;i++){
					valueString=valueString.replace(checkResult[i], "");
				}
				$(this).val(valueString);
			}
			
			var valueNow=$(this).val();
			if(valueNow!=""){
				var firstAlpha=valueNow.substring(0,1);
				if(Utils.containLetterOnly(firstAlpha)){
					var result=firstAlpha.toUpperCase();
					if(valueNow.length>1){
						var remaind=valueNow.substring(1,valueNow.length);
						var checkResult=Utils.getAllExceptNumberOnly(remaind);
						if(checkResult!=null){
							for(var i=0;i<checkResult.length;i++){
								remaind=remaind.replace(checkResult[i], "");
							}
						}
						result=result+remaind;
					}
					$(this).val(result);
				}else{
					$(this).val("");
				}
			}
		});
		
		//銀行別檢查
		$(".BANK").prop("maxlength",3);
		$(".BANK").prop("type","number");
		$(".BANK").keyup(function(e){
			var bankData=$(this).val();
			var result=Utils.getAllExceptNumberOnly(bankData);
			if(result!=null){
				for(var i=0;i<result.length;i++){
					bankData=bankData.replace(result[i],"");
				}
			}
			if(bankData.length>3){
				bankData=bankData.substring(0,3);
			}
			$(this).val(bankData);
		});

		//只允許數字
		$(".PHONE").prop("maxlength",10);
		$(".PHONE").prop("type","number");
		$(".PHONE").keyup(function(e){
			var phoneData=$(this).val();
			var result=Utils.getAllExceptNumberOnly(phoneData);
			if(result!=null){
				for(var i=0;i<result.length;i++){
					phoneData=phoneData.replace(result[i],"");
				}
			}
			if(phoneData.length>10){
				phoneData=phoneData.substring(0, 10);
			}
			$(this).val(phoneData);
		});
		
		//只允許數字，但以純文字的方式輸入
		$(".PHONE_TXT").prop("maxlength",10);
		$(".PHONE_TXT").prop("type","text");
		$(".PHONE_TXT").keyup(function(e){
			var phoneData=$(this).val();
			var result=Utils.getAllExceptNumberOnly(phoneData);
			if(result!=null){
				for(var i=0;i<result.length;i++){
					phoneData=phoneData.replace(result[i],"");
				}
			}
			if(phoneData.length>10){
				phoneData=phoneData.substring(0, 10);
			}
			$(this).val(phoneData);
		});
		
		//不允許特殊符號
		/*$(".NO_MARK").keyup(function(e){
			var d=$(this).val();
			var result=Utils.getAllMark(d);
			if(result!=null){
				for(var i=0;i<result.length;i++){
					d=d.replace(result[i],"");
				}
			}
			if(d.length>10){
				d=d.substring(0, 10);
			}
			$(this).val(d);
		});*/
		
		$("#cityZone,#cityZoneCon,#f_cityZone,#f_cityZoneCon").keyup(function(e){
			var d=$(this).val();
			var result=Utils.getAllMark(d);
			if(result!=null){
				for(var i=0;i<result.length;i++){
					d=d.replace(result[i],"");
				}
			}
			if(d.length>10){
				d=d.substring(0, 10);
			}
			$(this).val(d);
		});
	}
	
	function createMenu(){
		$.ajax({
			type : 'POST',
			headers : {
				Accept : "application/json"
			},
			url : contextPath+'/login/loadMenu',
			success : function(data) {
				if(data.processCode==0){
					var datas=data.data;
					var menutree = new MenuTree(datas);
					var menu = menutree.createMenu();
					menutree.setMenuClick( function(nodeData){
						window.location = nodeData.url;
					});
					$("#menu").append(menu);
				}else{
					showMessage("get Menu fail:"+data.message, FAIL);
				}
			},
			error : function(e) {
				showMessage("get Menu fail.", FAIL);
			}
		});
	}
	function setUserInfo(){

		$.ajax({
			type : 'POST',
			headers : {
				Accept : "application/json"
			},
			url : contextPath+'/login/getUserData',
			success : function(data) {
				if(data.processCode==0){
					var info=data.data;
					$("#_id").html("員工編號: "+info.id);
					$("#_orgId").html("單位代號: "+info.orgId);
					var roles = "角色: ";
					if( info.roles ){
						for( var i=0; i<info.roles.length; i++){
							if( i == 0 )
								roles += info.roles[i];
							else
								roles += ", "+info.roles[i];
						}
					}
					$("#_roles").html(roles);
					$("#_nameChn").html(info.nameChn);
					$("#_branchId").html(info.orgId);
				}else{
					showErrorMessage("取得使用者資訊失敗:",function(){
						if(data.message!="sf"){
							window.location=contextPath+'/login/logout';
						}else{
							window.location=contextPath+'/login/close';
						}
					});
				}
			},
			error : function(e) {
				showMessage("取得使用者資訊失敗:status="+e.status+";statusText="+e.statusText, FAIL);
			}
		});
	}
	function initial(){
		resizeTouchPanel();
		$("#logo").click(function(){
			window.location=contextPath;
		})
		var sideslider = $('[data-toggle=collapse-side]');
        var sel = sideslider.attr('data-target');
        var height = $("#banner").outerHeight();
		$(sel).css("top",height);
        sideslider.click(function(event){
            $(sel).toggleClass('in');
        });
        
 		$(window).resize(function(){
			var top = $("#main").offset().top;
			var height = $("#banner").outerHeight();
			$(sel).css("top",height);
			resizeTouchPanel();
     	});                                                                                                                                  
		$("#menu").mouseleave(function(){
			$(sel).addClass("in");
		});
		$("#touch-panel, #main").click(function(){
			$(sel).addClass("in");
		});
		$("#name_title").mouseenter(function(){
			$(sel).addClass("in");
		});
		//列出選項清單
		var Logout=1;

        $('input[class~="Date"]').datepicker({
            dateFormat : 'yy-mm-dd',
        });

        $('input[class~="DateTime"]').datetimepicker({
			autoclose:true
		});
        $('.datetimepicker').css("background-color",$("#ui-datepicker-div").css("background-color"));
	        
	    checkSession(function(){
	    	createMenu();
	    	setUserInfo();
	    	
	        $.ajax({
	        	type : 'POST',
				headers : {
					Accept : "application/json"
				},
				url : contextPath+'/login/isInSF',
				success : function(data){
					if(data.processCode==0){
						//$("#banner").css("display",data.data);
						if(data.data=="none"){
							$("#logo").unbind();
							$("#name_title").css("visibility","hidden");
							$("#menuInfoBar").css("visibility","hidden");
						}
					}else{
						showMessage(data.message, FAIL);
					}
				},
				error :function(e){
					console.log(e);
					showMessage("網路異常:status="+e.status+";statusText="+e.statusText, FAIL);
				}
	        });
		});
	}

	function setAuth(href, finish){
		$.ajax({
			type : 'POST',
			headers : {
				Accept : "application/json"
			},
			url : contextPath+'/sm01/getAthByFunctionName',
			data:{"functionHref":href},
			success : function(data) {
				if(data.processCode==0){
					finish(data.data);
				}else{
					showMessage("set auth fail:"+data.message, FAIL);
				}
			},
			error : function(e) {
				showMessage("set auth fail:status="+e.status+";statusText="+e.statusText, FAIL);
			}
		});
	}

	function showErrorMessage(message, ok){
		$("#errorMessageInModal").html(message);
		$("#errorMessageCancelInModal").unbind("click");
		$("#errorMessageCancelInModal").click(function(){
			$("#errorModal").modal("hide");
			if(ok || ok != null){
				ok();
			}
		});
		$("#errorModal").modal("show");
	}

	function parseText(src){
		var content="<ul>";
		$.each(src,function(key,value){
			if($.isPlainObject(value)){
				if($.isEmptyObject(value)){
					return "";
				}
				content+="<li><label style='color:blue'>"+key+": </label>"+parseText(value)+"</li>";
			}else if($.isArray(value)){
				if(value.length==0){
					return "";
				}
				content+="<li><label style='color:blue'>"+key+": </label>";
				$.each(value,function(k,v){
					content+=parseText(v);
				});
				content+="</li>";
			}else{
				content+="<li><label style='color:blue'>"+key+": </label>"+value+"</li>";
			}
		});
		return content+"</ul>";
	}

	function fillZero(t, length){
		var result=""+t;
		while(result.length<length)
			result="0"+result;
		return result;
	}

	function checkSession(nextMethod){
		$.ajax({
			type : 'POST',
			headers : {
				Accept : "application/json"
			},
			url : contextPath+'/login/checkSession',
			success : function(data) {
				if(data.processCode!=0){
					$(".modal").modal("hide");
					showErrorMessage("Session過期，請重新登入",function(){
						if(data.message!="sf"){
							window.location=contextPath+'/login/logout';
						}else{
							window.location=contextPath+'/login/close';
						}
					});
				}else{
					nextMethod();
				}
			},
			error : function(e) {
				$(".modal").modal("hide");
				showErrorMessage("連線失敗:status="+e.status+";statusText="+e.statusText,function(){
					window.location=contextPath+'/login/logout';
				});
			}
		});
	}

	//會向指定方法塞入日期字串yyyyMMdd
	function getSendDate(ok){
		$("#dateInModal").datepicker("option","minDate",new Date());
		$("#dateInModal").datepicker("setDate",new Date());
		$("#dateconfirmInModal").unbind("click");
		$("#dateconfirmInModal").click(function(){
			$("#sendDateModal").modal("hide");
			if(ok || ok != null){
				var date=$("#dateInModal").val();
				if(date==null || date==""){
					showMessage("輸入日期為空",FAIL);
				}else{
					ok(date);
				}
			}
		});
		$("#sendDateModal").modal("show");
	}
	//傳資料至後端，應以此開新分頁；href為目標網址、data為傳遞參數{key1:value1, key2:value2..}
	//data.viewType!=open:表示下載，呼叫PdfviewerController的download
	//data.viewType==open:表示直接顯示，呼叫PdfviewerController的open?type=02
	function openNewWindow(href, data){
		showLoading();
		$.ajax({
			type : 'POST',
			headers : {
				Accept : "application/json"
			},
			url : href,
			data:data,
			success : function(dataR) {
				hideLoading();
				if(dataR.processCode==0){
					if(data.viewType!="open"){
						$("#newPageForm").empty();
						$("#newPageForm").prop("action",contextPath+'/pdfviewer/download');
						$("#newPageForm").submit();
						setTimeout(function(){
							showMessage("請自行至瀏覽器下載位置，查看下載結果",INFO);
						},3000);
					}else{
						window.open(contextPath+"/pdfviewer/open?type=02");
					}
				}else{
					showMessage(dataR.message, FAIL);
				}
			},
			error : function(e) {
				hideLoading();
				showMessage("下載失敗:請找系統維護人員:status="+e.status+";statusText="+e.statusText, FAIL);
			}
		});
	}
	
	//新的選卡功能
	//取得所有卡片風格
	function getAllStyle(href, isATM, nactNo, func){
		$.ajax({
        	type : 'POST',
			headers : {
				Accept : "application/json"
			},
			url : href,
			data : {cardATM:isATM, nactNo:nactNo},
			success : function(data){
				func(data);
			},
			error :function(e){
				hideLoading();
				showMessage("取得所有卡片風格異常:status="+e.status+";statusText="+e.statusText, FAIL);
			}
        });
	}

	//新的選卡功能
	//根據大風格編號，找出所屬的大風格資料
	function getLargeStyleByCode(source, largeCode){
		var larg=null;
		for(var i=0;i<source.length;i++){
			if(source[i].code==largeCode){
				larg=source[i];
				break;
			}
		}
		return larg;
	}

	//新的選卡功能
	//根據大小風格，取得所有卡片資料
	function getCardInfo(href, largeStyleCode, smallStyleCode, isATM, nactNo, func){
		showLoading();
		$.ajax({
        	type : 'POST',
			headers : {
				Accept : "application/json"
			},
			url : href,
			data : {largeStyle:largeStyleCode, smallStyle:smallStyleCode, cardATM:isATM, nactNo:nactNo},
			success : function(data){
				hideLoading();
				func(data);
			},
			error :function(e){
				hideLoading();
				console.log(e);
				showMessage("取得卡片圖檔異常:status="+e.status+";statusText="+e.statusText, FAIL);
			}
        });
	}

	//新的選卡功能
	//製造卡片編號搜尋欄
	function makeSearchInput(searchRow, func, fu, cardATM, nactNo){
		//卡片編號搜尋欄
		var searchInputDiv = document.createElement("div");
		$(searchInputDiv).addClass("col-md-6 col-xs-6").css("margin","10px 10px 10px 15px");
		$(searchRow).append(searchInputDiv);
		
		var rowTemp=document.createElement("div");
		$(rowTemp).addClass("col-md-12 col-xs-12 input-group");
		$(searchInputDiv).append(rowTemp);
		
		var searchSpan = document.createElement("span");
		$(searchSpan).addClass("input-group-addon").css("font-weight","bold").html("卡片編號");
		$(rowTemp).append(searchSpan);
		
		var searchInput = document.createElement("input");
		$(searchInput).addClass("form-control").attr("type","text").attr("id","cardImageId").attr("placeholder","請輸入卡片編號");
		$(rowTemp).append(searchInput);
		$(searchInput).blur(func);
		
		var searchInputDiv2 = document.createElement("div");
		$(searchInputDiv2).addClass("col-md-4 col-xs-4").css("margin","10px 10px 10px 15px");
		$(searchRow).append(searchInputDiv2);
		
		var searchButton=document.createElement("input");
		$(searchButton).addClass("btn btn-md").attr("id","searchStyleButton").attr("type", "button");
		$(searchButton).val("查風格");
		$(searchInputDiv2).append(searchButton);
		$(searchButton).click(function(){
			var imgCode=$("#cardImageId").val();
			if(imgCode=="" || imgCode==null){
				showMessage("請輸入卡片編號", INFO);
			}else{
				showLoading();
				$.ajax({
					type : 'POST',
					headers : {
						Accept : "application/json"
					},
					url : contextPath+'/'+fu+'/searchCardStyle',
					data:{
						"imgCode":imgCode,
						"cardATM":cardATM,
						"nactNo":nactNo
					},
					success : function(data) {
						console.log(data);
						hideLoading();
						if(data.processCode==0){
							var reList=data.data;
							var showMsg="";
							$.each(reList, function(k, v){
								if(showMsg!=""){
									showMsg=showMsg+"、大風格:"+v.lvName+"-小風格:"+v.svName;
								}else{
									showMsg="大風格:"+v.lvName+"-小風格:"+v.svName;
								}
							});
							showMessage(showMsg, INFO);
						}else if(data.processCode==2){
							showMessage(data.message, INFO);
						}else{
							showMessage(data.message, FAIL);
						}
					},
					error : function(e) {
						hideLoading();
						showMessage("取得卡片的風格失敗:status="+e.status+";statusText="+e.statusText, FAIL);
					}
				});
			}
		});
	}

	//新的選卡功能
	//根據卡片圖檔編號、發情卡片組織(卡別)，找出所有卡片等級
	function getCardGrade(cardInfo, imageNo, cardTypeCode){
		var item=null;
		for(var i=0;i<cardInfo.length;i++){
			if(cardInfo[i].imageNo==imageNo){
				for(var i2=0;i2<cardInfo[i].cardType.length;i2++){
					if(cardInfo[i].cardType[i2].cardTypeCode==cardTypeCode){
						item=cardInfo[i].cardType[i2];
					}
				}
			}
		}
		return item;
	}

	//新的選卡功能
	//根據卡片圖檔編號、發情卡片組織(卡別)、卡片等級，找出所有電子票證
	function getElekType(cardInfo, imageNo, cardTypeCode, cardGradeCode){
		var item=null;
		for(var i=0;i<cardInfo.length;i++){
			if(cardInfo[i].imageNo==imageNo){
				for(var i2=0;i2<cardInfo[i].cardType.length;i2++){
					if(cardInfo[i].cardType[i2].cardTypeCode==cardTypeCode){
						for(var i3=0;i3<cardInfo[i].cardType[i2].cardGrade.length;i3++){
							if(cardInfo[i].cardType[i2].cardGrade[i3].cardGradeCode==cardGradeCode){
								item=cardInfo[i].cardType[i2].cardGrade[i3];
							}
						}
					}
				}
			}
		}
		return item;
	}
	
	//取得新戶禮列表
	function getNewAcctGiftList(fu, img, func){
		showLoading();
		$.ajax({
        	type : 'POST',
			headers : {
				Accept : "application/json"
			},
			url : contextPath+'/'+fu+'/getNewAcctGiftList',
			data : {"img":img},
			success : function(data){
				hideLoading();
				if(data.processCode!=0){
					showMessage(data.message, FAIL);
				}else{
					func(data.data);
				}
			},
			error :function(e){
				hideLoading();
				console.log(e);
				showMessage("取得新戶禮列表失敗異常:status="+e.status+";statusText="+e.statusText, FAIL);
			}
        });
	}
	
	//判別是否為IE
	function checkBrowser(){
		var isIE = navigator.userAgent.search("MSIE") > -1;
	    var isIE7 = navigator.userAgent.search("MSIE 7") > -1;
	    var isIE11 = navigator.userAgent.toLowerCase().search(/rv:([\d.]+)\) like gecko/) > -1;
	    if(isIE || isIE7 || isIE11){
	    	return true;
	    }
	    return false;
	}
	

	//"美國稅籍編號"只可輸入英數字
	function USATaxNumberCheck(){
		value = $("#USATaxNumber").val();	
		if (/[\W]/g.test(value)) {
			value = value.replace(/[\W]/g, '')
			alert("美國稅籍編號只可輸入英數字");
			$("#USATaxNumber").val(value);
		}
		return false;
	}
	
	//"美國稅籍編號"只可輸入英數字
	function f_USATaxNumberCheck(){
		value = $("#f_USATaxNumber").val();	
		if (/[\W]/g.test(value)) {
			value = value.replace(/[\W]/g, '')
			alert("美國稅籍編號只可輸入英數字");
			$("#f_USATaxNumber").val(value);
		}
		return false;
	}	