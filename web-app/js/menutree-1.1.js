	function MenuTree(data){
		var _data = data;
		var _menu;
		var _menuClick = function(nodeData){ alert("without set menu click !!!"); }
		var _sortedData = new Array();
		var _dirOnClickEnabled = false;
		this.setDirOnClickEnabled = function(enabled){
			_dirOnClickEnabled = enabled;
		}
		this.setData = function(data){
			_data = data;
		}
		this.getData = function(){
			return _data;
		}
		this.getMenu = function(){
			return _menu;
		}
		this.getNode = function(id){
			$(_menu).children().each(function(){
				if($(this).data("id") == id){
					return this;
				}
			});
		}
		this.setMenuClick = function(func){
			_menuclick = func;
		}
		this.getNodeData = function(id){
			return _getNodeData(id);
		}
		this.createMenu = function(){
			var data = findAllChild();
			_menu = document.createElement("div");
			for(var i=0; i<data.length; i++){
				var node = document.createElement("div");
				var tb = document.createElement("table");
				var tr = document.createElement("tr");
				var col1 = document.createElement("td");
				var col2 = document.createElement("td");
				var span = document.createElement("span");
				var text = document.createElement("input");
				$(col1).append(span).addClass("menu_col_span");
				if(data[i].type == 0){
					$(span).addClass("glyphicon glyphicon-triangle-right");
					$(span).prop("alt","+");
				}else{
					$(span).addClass("glyphicon glyphicon-folder-open");
					$(node).hide();
				}
				$(col2).append(text);
				$(text).addClass("menu_text").prop("disabled", true).val(data[i].name);
				$(tr).append(col1).append(col2);
				$(tb).css("width","100%").append(tr);
				var face = document.createElement("div");
				$(face).addClass("menu_text_face").hide();
				$(face).css("left", 0);
				$(node).css("padding-left", data[i].layout*20).prop("title",data[i].name);
				$(node).prop("id","_"+data[i].id);
				$(node).data("id", data[i].id);
				$(node).append(face).append(tb);
				$(node).mouseenter(function(){
					$(this).find("div").css("width", $(this).css("width")).css("height", $(this).css("height")).show();
				}).mouseleave(function(){
					$(this).find("div").hide();
				});
				if( data[i].type == 0 ){
					$(node).click(function(){
						var span = $(this).find("span");
						var alt = span.prop("alt");
						var nData = _getNodeData($(this).data("id"));
						var child = findAllChild(nData);
						var nextChild = findNextChild(nData);
						if( alt == '-'){
							$(span).prop("alt", "+").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-right");
							hideNodes(child);
						}else{
							$(span).prop("alt", "-").removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom");
							showNodes(nextChild);
						}
						if( _dirOnClickEnabled) 
							_menuclick(nData);
					});
				}else{
					$(node).click(function(){
						var nData = _getNodeData($(this).data("id"));
						_menuclick(nData);
					});
				}
				$(_menu).append(node);
			}
			return _menu;
		}

		var findChild = function(node){
			for(var i=0; i<_data.length; i++){
				if( _data[i].pid == node.id ){
					var layout = node.layout;
					if( !layout || layout == null ) layout = 0;
					_data[i].layout = ++layout;	
					_sortedData.push(_data[i]);
					findChild(_data[i]);
				}
			}
		};
		var findNextChild = function(node){
			var nextChild = new Array();
			for(var i=0; i<_data.length; i++){
				if( _data[i].pid == node.id ){
					nextChild.push(_data[i]);
				}
			}
			return nextChild;
		};
		var findAllChild = function(node){
			if( !node || node == null ) node = {id:0, pid:0};
			findChild(node);
			var sortedData = _sortedData;
			_sortedData = new Array();
			return sortedData;
		};
		var _getNodeData = function(id){
			for( var i=0; i<_data.length; i++){
				if( _data[i].id == id ){
					return _data[i];
				}
			}
		}
		var hideNodes = function(nodes){
			if( _menu && _menu != null ){
				for( var i=0; i<nodes.length; i++){
					$(_menu).children().each(function(){
						if($(this).data("id") == nodes[i].id){
							var span = $(this).find("span");
							var alt = "-";
							if( nodes[i].type == 0 )
								$(span).prop("alt", alt).removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom");
							$(this).hide();
						}
					});
				}
			}
		}
		var showNodes = function(nodes){
			if( _menu && _menu != null ){
				for( var i=0; i<nodes.length; i++){
					$(_menu).find("div").each(function(){
						if($(this).data("id") == nodes[i].id){
							var span = $(this).find("span");
							var alt = "+";
							if( nodes[i].type == 0 )
								$(span).prop("alt", alt).removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-right");
							$(this).show();
						}
					});
				}
			}
		}
	}