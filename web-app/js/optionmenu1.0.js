/**
 * 選項清單
 */
function OptionMenu(input, element, logout, root){
	var data=input;
	var div=element;
	var hasLogout=logout;
	var menu="menu";
	var item="item";
	var unKnow="unknow";
	var basicProperty=["desc"];

	//取得輸入的資料
	this.getData=function(){
		return data;
	}

	//設定輸入的資料
	this.setData=function(repalce){
		data=repalce;
	}

	//取得要放入結果的HTML的DOM，如DIV
	this.getTag=function(){
		return div;
	}

	//設定要放入結果的HTML的DOM，如DIV
	this.setTag=function(repalce){
		div=repalce;
	}

	//取得是否要放入登出鍵
	this.getLogout=function(){
		return hasLogout;
	}

	//設定是否要放入登出鍵
	this.setLogout=function(replace){
		hasLogout=replace;
	}

	//根據輸入資料，製造出選單
	this.createMenuTree=function(){
		var ul=document.createElement("ul");
		$(ul).addClass("nav navbar-nav");

		if(hasLogout==1){
			createLogout(ul);
		}
		
		$(div).append(ul);
		
		if(!$.isPlainObject(data)){
			console.error("資料格式有誤");
			return;
		}
		
		if(!data.hasOwnProperty("ulName")){
			console.error("缺乏ulName無法生成Menu");
			return;
		}

		if(!$.isArray(data["child"])){
			console.error("起始的列表有誤");
			return;
		}
		
		

		var firstName="first"+Math.floor((Math.random() * 100) + 1)+"a";
		var index=0;
		$.each(data["child"],function(key,value){
			if($.isPlainObject(value)){
				var li=document.createElement("li");
				$(li).addClass("dropdown");
				
				index=index+1;
				createNextFloor(value, firstName+index, li);

				$(ul).append(li);
			}else{
				console.error("在索引值"+key+"的資料有誤");
			}
		});
	}

	//製造下一層的資料物件
	var createNextFloor=function(item, id, li){
		var result=validate(item);
		if(menu==result){
			createMenu(item, id, li);
		}else if(item==result){
			createItem(item, id, li);
		}
	}

	//製造選單
	var createMenu=function(item, id, lastFloor){
		var a=document.createElement("a");
		console.log();
		$(a).prop("href","#");
		$(a).attr("role","button");
		$(a).attr("aria-expanded","false");
		$(a).attr("data-toggle","dropdown");
		$(a).addClass("dropdown-toggle");
		$(a).prop("id",id);
		$(a).prop("name","option");
		$(a).append(item["desc"]);
		

		var span=document.createElement("span");
		$(span).addClass("caret");
		$(a).append(span);
		$(lastFloor).append(a);

		var ul=document.createElement("ul");
		$(ul).addClass("dropdown-menu");
		$(ul).attr("role","menu");

		var index=0;
		$.each(item["child"],function(key,value){
			if($.isPlainObject(value)){
				var li=document.createElement("li");
				index=index+1;
				createNextFloor(value, id+"a"+index, li);
				$(ul).append(li);
			}else{
				console.error("在Menu中的索引值"+key+"的內容不符格式");
			}
		});
		$(lastFloor).append(ul);
	}

	//製造選項，當href為divider為分隔號
	var createItem=function(item, id, lastFloor){
		if(item["href"]!="divider"){
			var a=document.createElement("a");
			$(a).prop("href",root+"/"+item["href"]);
			$(a).prop("id",id);
			$(a).prop("name","option");
			$(a).append(item["desc"]);
			$(lastFloor).append(a);
		}else{
			$(lastFloor).addClass( "divider");
		}
	}

	//驗證資料規格的正確性
	var validate=function(item){
		for(var i=0;i<basicProperty.length;i++){
			if(!item.hasOwnProperty(basicProperty[i])){
				console.error("缺乏基礎資料:"+basicProperty[i]);
				return unKnow;
			}
			
			if(item.hasOwnProperty("href")){
				return item;
			}

			if($.isArray(item["child"])){
				return menu;
			}
			
			return unKnow;
		}
	}

	//製造登出選項
	var createLogout=function(ul){
		var li=document.createElement("li");
		$(li).addClass("logout menu");

		var a=document.createElement("a");
		$(a).prop("href","#");
		$(a).attr("role","button");
		$(a).attr("aria-expanded","false");

		var span=document.createElement("span");
		$(span).addClass("glyphicon");
		$(span).addClass("glyphicon-log-out");

		$(a).append(span);
		$(a).append("登出");
		$(li).append(a);
		$(ul).append(li);
	}
}