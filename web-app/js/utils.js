//工具
var Utils = {
	open : function m1(args){
		console.log(args);
		return args;
	    //.............todo
	},
	//是否純數字
	containNumberOnly : function m2(number){
		if(number.match("[^0-9]+")!=null){
			return false;
		}
		return true;
	},
	//是否純英文字母
	containLetterOnly : function m2(number){
		if(number.match("[^a-zA-Z]+")!=null){
			return false;
		}
		return true;
	},
	//取得所有非數字的陣列，或回傳NULL純數字
	getAllExceptNumberOnly : function m2(number){
		return number.match("[^0-9]+");
	},
	//取得所有非數字與英文字母的陣列，或回傳NULL
	getAllExceptNumberAndLetter : function m3(dataString){
		return dataString.match("[^0-9a-zA-Z]+");
	},
	//取得所有符號的陣列，或回傳NULL
	getAllMark : function m7(dataString){
		return dataString.match("[`~!@%+#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;|{}【】‘；：”“'。，、？\u0022\u0027\u005C_-]+");
	},
	//限制input欄位不可輸入數字以外的值
	inputNumberOnly : function m4(e){
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        	e.preventDefault();
        }
	},
	//只可輸入英數字
	inputNumberAndEnglishOnly : function m4(e){
        var ew = e.which;
        if(ew == 32){
            return true;
        }
        if(48 <= ew && ew <= 57){
            return true;
        }
        if(65 <= ew && ew <= 90){
            return true;
    	}
        if(97 <= ew && ew <= 122){
            return true;
        }
        if(ew == 46 || ew == 8 || ew == 9 || ew == 27 || ew == 13 || ew == 110){
            return true;
        }
        if(ew >= 35 && ew <= 39){
            return true;
        }
        return false;
	},
	//只可輸入英文及空白
	inputEnglishAndSpaceOnly : function m4(e){
        var ew = e.which;
        if(ew == 32)
            return true;
        if(65 <= ew && ew <= 90)
            return true;
        if(97 <= ew && ew <= 122)
            return true;
        return false;
	},
	//send OCR Util
//	sendOCR : function m5(openType,imgData,url,callback){
//		checkSession(function(){
//			var formData = {
//					'openType' : openType,
//					'imgData' : imgData
//				};
//			$.ajax({
//				type : 'POST',
//				headers : {
//					Accept : "application/json"
//				},
//				url : url+'/ao01/sendOCR',
//				data : formData,
//				success : function(data) {
//					if(data.processCode == "0"){
//						callback(data);
//					}else{
//						showMessage("發生錯誤:"+data.message,WARN);
//					}
//				},
//				error : function(e) {
//					showMessage("無法與OCR連線:"+e);
//				},
//			});
//		});
//	},
	//check input length
	checkLength : function m6(tag,e){
		var max = $(tag).attr("max");
		var input = $(tag).val();
		if(e.keyCode != 46 || e.keyCode != 8){
			if(input.length >= parseInt(max)){
				$(tag).val(input.substring(0,max));
				return;
			}
		}
	},
	//檢核身份證字號是否符合規則
	checkUid : function m6(uid){
		var tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
		var A1 = new Array (1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3 );
		var A2 = new Array (0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5 );
		var Mx = new Array (9,8,7,6,5,4,3,2,1,1);
	
	    if ( uid.length != 10 ) return false;
	    var i = tab.indexOf( uid.charAt(0) );
	    if ( i == -1 ) return false;
	    var sum = A1[i] + A2[i]*9;
	  
	    for ( i=1; i<10; i++ ) {
	        var v = parseInt( uid.charAt(i) );
	        if ( isNaN(v) ) return false;
	        sum = sum + v * Mx[i];
	    }
	    if ( sum % 10 != 0 ) return false;
	    return true;
	}
};