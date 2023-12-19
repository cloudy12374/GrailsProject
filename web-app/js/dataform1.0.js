/**
 * 多用途表單
 */

function DataForm(){
	var list=[];
	var structure;

	//以Array的方式，回傳所有的Name
	this.getNames=function(){
		return list;
	}

	//取得所有數值，以JSON格式回傳，{name:value}，其中單一Name有多個值，則每個值以[,]隔開
	this.getValues=function(){
		var json={};
		$.each(list,function(key,value){
			var items=document.getElementsByName(value);
			var result=[];
			for(var i=0;i<items.length;i++){
				if($(items[i]).prop("checked")){
					result.push($(items[i]).prop("cake"));
				}
			}
			json[value]=result+"";
		});
		return json["option"]
	}
	
	this.getStructure=function(){
		return structure;
	}


	//生成整個Form
	this.makeForm=function(input, space){
		list=[];
		if(!$.isPlainObject(input)){
			console.error("所傳來的值非JSON格式，無法產生From");
			return;
		}
		
		structure=input;

		var formJson=input;
		if(!$.isArray(formJson["child"])){
			console.error("所傳來的JSON，取得不合法的child");
			return;
		}

		if(!formJson.hasOwnProperty("formName")){
			console.error("所傳來的JSON，無法取得formName");
			return;
		}

		//建立Form
		var form=document.createElement("form");
		$(form).attr("role","form");
		$(form).prop("name",formJson["formName"]);
		$(form).prop("id",formJson["formName"]);

		//生成粗分類項
		makeClass(formJson["child"],form);

		//將結果加入頁面
		$(space).append(form);
	}

	var makeClass=function(array, formNode){
		var index=0;
		var firstClass="first";
		
		var row=document.createElement("div");
		$(row).addClass("row");
		$(formNode).append(row);
		var leftCol=document.createElement("div");
		$(leftCol).addClass("col-md-6");
		$(row).append(leftCol);
		
		var rightCol=document.createElement("div");
		$(rightCol).addClass("col-md-6");
		$(row).append(rightCol);
		
		var current="left";
		
		$.each(array, function(key,value){
			var result=validate(value);
			index=index+1;
			if(result=="wrong"){
				console.error("其中有一項無法發生成");
			}else if(result=="dictory"){
				var id=firstClass+index;
				
				var div=document.createElement("div");
				$(div).addClass("checkbox");
				$(div).append(createItem(value,null,null,id));
				
				//$(formNode).append(div);
				if(current=="left"){
					$(leftCol).append(div);
				}else{
					$(rightCol).append(div);
				}
				
				var sub=document.createElement("div");
				$(sub).css("margin-left","30px");

				if($.isArray(value["child"])){
					$(sub).append(makeDictories(value["child"], id));
				}
				
				//$(formNode).append(sub);
				if(current=="left"){
					$(leftCol).append(sub);
				}else{
					$(rightCol).append(sub);
				}
			}else{
				var div=document.createElement("div");
				$(div).css("margin-left","30px");
				
				//$(formNode).append(makeSingleItem(value,null, firstClass+index));
				var item=makeSingleItem(value,null, firstClass+index);
				if(current=="left"){
					$(leftCol).append(item);
				}else{
					$(rightCol).append(item);
				}
			}
			
			if(current=="left"){
				current="right";
			}else{
				current="left";
			}
		});

		
	}

	//生成細分類項
	var makeDictories=function(array, parent){
		var div=document.createElement("div");
		$(div).addClass("checkbox");

		var i=0;
		$.each(array,function(key,value){
			var kind=validate(value);
			i=i+1;
			if(kind=="dictory"){
				if($.isArray(value["child"])){
					$(div).append(createItem(value,null,parent, parent+"a"+i));
					$(div).append(makeItems(value["child"],  parent+"a"+i));
				}else{
					$(div).append(createItem(value,"checkbox-inline",parent, parent+"a"+i));
				}
			}else if(kind=="item"){
				$(div).append(makeSingleItem(value,parent, parent+"a"+i));
			}else{
				console.error("有Dictory不合法");
			}
		});
		return div;
	}

	//生成末尾項群
	var makeItems=function(array, parent){
		var div=document.createElement("div");
		$(div).css("margin-left","30px");

		var i=0;
		$.each(array,function(key,value){
			i=i+1;
			$(div).append(makeSingleItem(value,parent, parent+"a"+i));
		});

		return div;
	}

	var makeSingleItem=function(item, parent, id){
		var kind=validate(item);
		if(kind!="dictory"){
			return createItem(item,"checkbox-inline", parent, id);
		}else if(kind){
			console.error("有資料項不合法");
		}

		return null;
	}

	//生成項目和顯示標籤
	var createItem=function(item, labelClass, parent, id){
		var box=document.createElement("label");
		if(labelClass!=null){
			$(box).addClass(labelClass);
		}
		
		var inputField=document.createElement("input");
		setPropertyOfItem(inputField,item, parent, id);
		$(inputField).prop("type","checkbox");
		$(box).append(inputField);
		$(box).append(item["desc"]);
		$(inputField).click(function(){clickCheckbox(this)});
		
		return box;
	}

	//設定基本屬性
	var setPropertyOfItem=function(box,item, parent, id){
		$(box).prop("name","option");
		$(box).prop("cake",item["value"]);
		$(box).attr("parent",parent);
		$(box).prop("id",id);

		if(item["checked"]=="true"){
			$(box).prop("checked",true);
		}

		pushinArray("option");
	}

	//將資料項屬性name，加進list中
	var pushinArray=function(name){
		$.each(list,function(key,value){
			if(name==value){
				return;
			}
		});

		list.push(name);
	}

	//直接驗證單項資料的正確性
	var validate=function(input){
		var item=input;
		//敘述、資料項名稱、資料項類別、資料項的當前值、是否已被選取、是否可為NULL、是否可為存空白
		var columns=["desc","value","checked"];
		var shortage=[];

		shortage=subValidate(input,columns,shortage);
		if(shortage.length!=0){
			console.error("資料項缺乏欄位:"+shortage);
		}else{
			if(item.hasOwnProperty("child")){
				if($.isArray(item["child"])){
					return "dictory";
				}
			}
			return "item";
		}

		return "wrong";
	}

	//驗證指定欄位
	var subValidate=function(input,columns,errorArray){
		var size=columns.length;
		for(var i=0;i<size;i++){
			if(!input.hasOwnProperty(columns[i])){
				errorArray.push(columns[i]);
			}
		}
		return errorArray;
	}

	//當checkbox被點擊時的動作
	var clickCheckbox=function(name){
		var id=$(name).prop("id");
		$("INPUT[parent='"+id+"']").prop("checked",$(name).prop("checked"));
		$("INPUT[parent*='"+id+"a']").prop("checked",$(name).prop("checked"));
		checkParent($(name).attr("parent"));
	}

	//檢查父節點們的狀態，並修正
	var checkParent=function(id){
		var parent=$("#"+id).attr("parent");
			//if(checkchildren(id)){
			$("#"+id).prop("checked",checkchildren(id));
			if(parent!=null){
				checkParent(parent);
			//}
		}
	}

	//檢查子節點們的狀態，用來決定父節點的狀態
	var checkchildren=function(id){
		var children=$("INPUT[parent*='"+id+"']");
		for(var i=0;i<children.length;i++){
			if($(children[i]).prop("checked")){
				return true;
			}
		}
		return false;
	}
}