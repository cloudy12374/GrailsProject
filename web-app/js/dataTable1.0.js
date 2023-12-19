/**
 * 可擴充功能的dataTable
 */
function DataTable(){
	var asc="asc";	//asc排序
	var desc="desc";	//desc排序
	var noOrder="noOrder";  //不排序

	//放入產生結果的DOM
	var root;
	//原始輸入資料
	var input;
	//是否要多選true or false
	var isMulti=true;
	//要顯示的資料
	var data=[
		{"id":"1", "group":"yushi", "desc":"Human", "valid":"可", "time":"2016-13-13", "founder":"Lin"},
		{"id":"2", "group":"yushi2", "desc":"Human2", "valid":"可2", "time":"2016-13-132", "founder":"Lin2"}
	];
	//搜尋鍵的觸發方法function()
	var searchMethod=function(){ console.log("e:searchMethod");};
	//總頁數
	var toatalPages=10;
	//目前頁數
	var currentPage=8;
	var dataCol=["id", "group", "desc", "valid", "time", "founder"];	//顯示資料欄位
	var showCol=["id","群組名稱", "說明", "是否生效", "建立時間", "建立者"];		//顯示欄位敘述
	var orderCol=[asc, asc, desc, desc, desc, desc];	//欄位的排序
	
	//一次顯示多少資料項
	var showRowNumber=10;
	
	//當checkbox被點擊時的動作
	var onclickCheckbox=function(){
		//預設什麼都不做
	};
	
	this.onclick=function(check){
		onclickCheckbox=check;
	}
	
	//當物件New出來後，根據預設資料欄位，第一個使用的方法，初始化所有所需的參數
	this.initialData=function(inputData, inputSearchMethod, div, multi){
		root=div;
		input=inputData;
		searchMethod=inputSearchMethod;
		isMulti=multi;
		data=inputData["data"];
		toatalPages=parseInt(inputData["totalPages"]);
		currentPage=parseInt(inputData["currentPage"]);
	}
	
	//更新資料
	this.updateData=function(inputData){
		data=inputData["data"];
		toatalPages=parseInt(inputData["totalPages"]);
		currentPage=parseInt(inputData["currentPage"]);
	}
	
	//當物件New出來後，根據自訂資料欄位，第一個使用的方法，初始化所有所需的參數
	this.initialAll=function(inputData, inputSearchMethod, div, multi, datas, shows, orders){
		root=div;
		input=inputData;
		searchMethod=inputSearchMethod;
		data=inputData["data"];
		toatalPages=parseInt(inputData["totalPages"]);
		currentPage=parseInt(inputData["currentPage"]);
		dataCol=datas;
		showCol=shows;
		orderCol=orders;
		isMulti=multi;
	}

	this.getCurrentData=function(){
		var ids=$("INPUT[name='tableBox'][type='checkbox']:checked");
		var result=[];
		
		if(typeof(ids) != "undefined"){
			var size=ids.length;
			for(var i=0;i<size;i++){
				getSingleData($(ids[i]).val(), result);
			}
		}

		return result;
	}

	var getSingleData=function(id, result){
		$.each(data, function(key,value){
			if((value["id"]+"")==(id+"")){
				result.push(value);
			}
		});

		return result;
	}

	//取得目前顯示頁數，必須公開
	this.getCurrentPage=function(){
		return currentPage;
	}
	
	//設定顯示目前頁數
	this.setPageNumber=function(page){
		currentPage=parseInt(page);
		searchMethod($("#searchForm").val());
	}

	//取得總頁數，必須公開
	this.getTotalPages=function(){
		return toatalPages;
	}

	//取得所有欄位排序，必須公開
	this.getAllOrder=function(){
		var orders={};
		for(var i=0;i<dataCol.length;i++){
			orders[dataCol[i]]=orderCol[i];
		}

		return orders
	}

	//建構DataTable，必須公開
	this.createDataTable=function(){
		createTable(root);

		var div=document.createElement("div");
		$(div).css("text-align","right");
		$(div).css("padding-right","5px");
		$(root).append(div);
		var ul=document.createElement("ul");
		$(ul).addClass("pagination");
		$(ul).prop("id","page");
		$(div).append(ul);

		this.refresh();
		
	}

	//載入目前資料內容於Table，，
	this.refresh=function(){
		//清除並載入目前資料內容於Table
		var tobody=$("#tableBody");
		$(tobody).empty();
		var size=showRowNumber;
		$.each(data, function(key,value){
			var tr=document.createElement("tr");
			$(tobody).append(tr);
			
			var result=validate(value);
			if(result["result"]==0){
				createDataTd(tr, value);
				size=size-1;
			}else{
				console.error("在索引值"+key+"的顯示資料缺少欄位:"+result["error"]);
			}

		});
		
		for(var i=size;i>0;i--){
			var tr=document.createElement("tr");
			$(tobody).append(tr);
			createSpaceTd(tr);
		}

		//清除並載入目前頁數
		refreshPage();
	}
	
	var createSpaceTd=function(tr){
		for(var i=0;i<dataCol.length;i++){
			var td=document.createElement("td");
			$(tr).append(td);
			$(td).append("&nbsp;");
		}
	}
	
	//設定顯示目前頁數
	var setCurrentPage=function(page){
		currentPage=parseInt(page);
		searchMethod($("#searchForm").val());
	}

	var refreshPage=function(){
		var ul=$("#page");
		$(ul).empty();
		var previous=document.createElement("li");
		$(previous).click(function(){
			if((currentPage-1)>=1){
				setCurrentPage(currentPage-1);
			}
		});
		$(ul).append(previous);
		var previousA=document.createElement("a");
		$(previousA).prop("href","#");
		$(previous).append(previousA);
		var previousSpan=document.createElement("span");
		$(previousSpan).addClass("glyphicon");
		$(previousSpan).addClass("glyphicon-chevron-left");
		$(previousA).append(previousSpan);

		insertPageButton(ul);

		var next=document.createElement("li");
		$(next).click(function(){
			if((currentPage+1)<=toatalPages){
				setCurrentPage(currentPage+1);
			}
		});
		$(ul).append(next);
		var nextA=document.createElement("a");
		$(nextA).prop("href","#");
		$(next).append(nextA);
		var nextSpan=document.createElement("span");
		$(nextSpan).addClass("glyphicon");
		$(nextSpan).addClass("glyphicon-chevron-right");
		$(nextA).append(nextSpan);
	}

	var insertPageButton=function(ul){
		var size=5;
		if((currentPage-2)<1){
			for(var i=1;i<currentPage;i++){
				size=size-1;
				$(ul).append(getSinglePageButton("page"+(5-size),i));
			}
		}else{
			if((currentPage-2)>1){
				if(toatalPages>5){
					var li=document.createElement("li");
					$(li).prop("id","firstPage");
					$(li).attr("value",1);
					$(li).click(function(){
						movePage("firstPage");
					});
					$(ul).append(li);
					var a=document.createElement("a")
					$(a).prop("href","#");
					$(a).append("...");
					$(li).append(a);
				}
			}

			var number=2;
			if((currentPage-number)==0){
				number=1;
			}else if((currentPage-number)==-1){
				number=0;
			}else if((toatalPages-currentPage)==0){
				if(currentPage>4){
					number=4;
				}else{
					number=currentPage-1;
				}
			}else if((toatalPages-currentPage)==1){
				if(currentPage>3){
					number=3;
				}else{
					number=currentPage-1;
				}
			}
			for(var i=currentPage-number;i<currentPage;i++){
				size=size-1;
				$(ul).append(getSinglePageButton("page"+(5-size),i));
			}
		}

		size=size-1;
		var currentLi=document.createElement("li");
		$(currentLi).addClass("active");
		$(ul).append(currentLi);
		var currentA=document.createElement("a")
		$(currentA).prop("href","#");
		$(currentA).append(currentPage);
		$(currentLi).append(currentA);

		if((currentPage+2)>toatalPages){
			for(var i=currentPage+1;i<=toatalPages;i++){
				size=size-1;
				$(ul).append(getSinglePageButton("page"+(5-size),i));
			}
		}else{
			for(var i=currentPage+1;i<=toatalPages;i++){
				size=size-1;
				if(size<0){
					break;
				}
				$(ul).append(getSinglePageButton("page"+(5-size),i));
			}

			if(size<0){
				var li=document.createElement("li");
				$(li).prop("id","lastPage");
				$(li).attr("value",toatalPages);
				$(li).click(function(){
					movePage("lastPage");
				});
				$(ul).append(li);
				var a=document.createElement("a")
				$(a).prop("href","#");
				$(a).append("...");
				$(li).append(a);
			}
		}
	}

	var getSinglePageButton=function(id, value){
		var li=document.createElement("li");
		$(li).prop("id",id);
		$(li).attr("value",value);
		$(li).click(function(){
			movePage(id);
		});
		var a=document.createElement("a")
		$(a).prop("href","#");
		$(a).append(value)
		$(li).append(a);

		return li;
	}

	var movePage=function(id){
		var page=$("#"+id).attr("value");
		setCurrentPage(page);
	}

	var createDataTd=function(tr, singleData){
		for(var i=0;i<dataCol.length;i++){
			var td=document.createElement("td");
			$(tr).append(td);

			if(i==0){//處理checkBox
				var checkbox=document.createElement("input");
				$(checkbox).prop("type","checkbox");
				$(checkbox).prop("value",singleData[dataCol[i]]);
				$(checkbox).prop("name","tableBox");
				if(isMulti!=true){
					//如果允許多選
					$(checkbox).click(function(){
						var checked=$(this).prop("checked");
						$("INPUT[type='checkbox'][name='tableBox']").prop("checked",false);
						$(this).prop("checked", checked);
					});
				}
				$(checkbox).click(function(){onclickCheckbox();});
				$(td).append(checkbox);
			}else{
				$(td).append(singleData[dataCol[i]]);
			}
		}
	}

	//驗證單筆顯示資料的正確性
	var validate=function(json){
		var error=[];
		$.each(dataCol,function(key, value){
			if(!json.hasOwnProperty(value)){
				error.push(value);
			}
		});

		var result={};
		result["result"]=error.length;
		result["error"]=error+"";

		return result;
	}

	var createTable=function(lastDOM){
		var table=document.createElement("table");
		$(table).addClass("table");
		$(table).addClass("table-striped");
		$(lastDOM).append(table);

		var thead=document.createElement("thead");
		createTableTitle(thead);
		$(table).append(thead);

		var tbody=document.createElement("tbody");
		$(tbody).css("border-bottom","1px #CCC solid");
		$(tbody).prop("id","tableBody");
		$(table).append(tbody);
	}

	//翻轉排序，並從新搜尋
	var modifyOrder=function(item){
		var span=$(item).children("SPAN");
		var id=$(span).attr("id");
		var index=dataCol.indexOf(id);
		orderCol[index]=revertOrder(orderCol[index]);
		
		$(span).removeClass();
		$(span).addClass("glyphicon");
		if(orderCol[index]==asc){
			$(span).addClass("glyphicon-triangle-top");
		}else{
			$(span).addClass("glyphicon-triangle-bottom");
		}
		
		if($.isFunction(searchMethod)){
			searchMethod($("#searchForm").val());
		}
	}

	var revertOrder=function(order){
		if(order==asc){
			return desc;
		}

		return asc;
	}

	var createTableTitle=function(lastDOM){
		var tr=document.createElement("tr");
		$(lastDOM).append(tr);
		
		var tempTh=null;
		var tempSpan=null;

		for(var i=0;i<orderCol.length;i++){
			if(i==0){
				tempTh=document.createElement("th");
				$(tr).append(tempTh);
			}else{
				tempTh=document.createElement("th");
				$(tempTh).append(showCol[i]);
				
				if(orderCol[i]!=noOrder){
					tempSpan=document.createElement("span");
					$(tempSpan).addClass(getOrderClass(orderCol[i]));
					var id=dataCol[i];
					$(tempSpan).prop("id", id);
					$(tempSpan).prop("name", "icon");
					$(tempTh).click(function(){
						modifyOrder(this);
					});
					$(tempTh).append(tempSpan);
				}
				$(tr).append(tempTh);
			}
		}
	}
	
	var getOrderClass=function(order){
		if(order==asc){
			return "glyphicon glyphicon-triangle-top";
		}
		
		return "glyphicon glyphicon-triangle-bottom";
	}
}