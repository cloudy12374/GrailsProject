/**
 * 
 */
var Country = function(){
	var list = [
					{code:"AD",name:"安道爾"},{code:"AE",name:"阿拉伯聯合大公國"},{code:"AF",name:"阿富汗"},
					{code:"AG",name:"安地卡及巴布達"},{code:"AI",name:"英屬安圭拉"},{code:"AL",name:"阿爾巴尼亞"},
					{code:"AM",name:"亞美尼亞"},{code:"AO",name:"荷屬安地列斯"},{code:"AO",name:"安哥拉"},{code:"AQ",name:"南極洲"},
					{code:"AR",name:"阿根廷"},{code:"AS",name:"美屬薩摩亞"},{code:"AT",name:"奧地利"},
					{code:"AU",name:"澳大利亞"},{code:"AW",name:"阿魯巴"},{code:"AZ",name:"亞塞拜然"},
					{code:"BA",name:"波士尼亞"},{code:"BB",name:"巴貝多"},{code:"BD",name:"孟加拉"},
					{code:"BE",name:"比利時"},{code:"BF",name:"上伏塔"},{code:"BG",name:"保加利亞"},
					{code:"BH",name:"巴林"},{code:"BI",name:"蒲隆地"},{code:"BJ",name:"貝南"},
					{code:"BL",name:"法屬聖巴泰勒米島"},{code:"BM",name:"百慕達"},{code:"BN",name:"汶萊"},
					{code:"BO",name:"玻利維亞"},{code:"BR",name:"巴西"},{code:"BS",name:"巴哈馬"},
					{code:"BT",name:"不丹"},{code:"BV",name:"波維特島"},{code:"BW",name:"波札那"},
					{code:"BY",name:"白俄羅斯"},{code:"BZ",name:"貝里斯"},{code:"CA",name:"加拿大"},
					{code:"CC",name:"可可斯群島"},{code:"CD",name:"薩伊"},{code:"CF",name:"中非共和國"},
					{code:"CG",name:"剛果"},{code:"CH",name:"瑞士"},{code:"CI",name:"象牙海岸"},
					{code:"CK",name:"科克群島"},{code:"CL",name:"智利"},{code:"CM",name:"喀麥隆"},
					{code:"CN",name:"中國大陸"},{code:"CO",name:"哥倫比亞"},{code:"Cr",name:"哥斯大黎加"},
					{code:"CS",name:"塞爾維亞"},{code:"CS",name:"蒙特尼哥羅"},{code:"CU",name:"古巴"},{code:"CV",name:"佛德角"},
					{code:"CX",name:"聖誕島"},{code:"CY",name:"塞普路斯"},{code:"CZ",name:"捷克"},
					{code:"DE",name:"德國"},{code:"DJ",name:"吉布地"},{code:"DK",name:"丹麥"},
					{code:"DM",name:"多米尼克"},{code:"DO",name:"多明尼加"},{code:"DZ",name:"阿爾及利亞"},
					{code:"EC",name:"厄瓜多爾"},{code:"EE",name:"愛沙尼亞"},{code:"EG",name:"埃及"},
					{code:"EH",name:"西撒哈拉"},{code:"ER",name:"厄利垂亞"},{code:"ES",name:"西班牙"},
					{code:"ET",name:"衣索比亞"},{code:"FI",name:"芬蘭"},{code:"FJ",name:"斐濟"},
					{code:"FK",name:"福克蘭群島"},{code:"FM",name:"密克羅尼西亞"},{code:"FO",name:"法羅群島"},
					{code:"FR",name:"法國"},{code:"GA",name:"加彭"},{code:"GB",name:"英國"},
					{code:"GD",name:"格瑞那達"},{code:"GE",name:"喬治亞"},{code:"GF",name:"法屬圭亞那"},
					{code:"GG",name:"根息島"},{code:"GH",name:"迦納"},{code:"GI",name:"直布羅陀"},
					{code:"GL",name:"格陵蘭"},{code:"GM",name:"甘比亞"},{code:"GN",name:"幾內亞"},
					{code:"GP",name:"瓜德魯普島"},{code:"GQ",name:"赤道幾內亞"},{code:"GR",name:"希臘"},
					{code:"GT",name:"瓜地馬拉"},{code:"GU",name:"關島"},{code:"GW",name:"幾內亞比索"},
					{code:"GY",name:"蓋亞那"},{code:"HK",name:"香港"},{code:"HM",name:"赫德及麥當勞群島"},
					{code:"HN",name:"宏都拉斯"},{code:"HR",name:"克羅埃西亞"},{code:"HT",name:"海地"},
					{code:"HU",name:"匈牙利"},{code:"ID",name:"印尼"},{code:"IE",name:"愛爾蘭"},
					{code:"IL",name:"以色列"},{code:"IM",name:"英屬曼島"},{code:"IN",name:"印度"},
					{code:"IO",name:"英屬印度洋地區"},{code:"IQ",name:"伊拉克"},{code:"IR",name:"伊朗"},
					{code:"IS",name:"冰島"},{code:"IT",name:"義大利"},{code:"JE",name:"澤西島"},
					{code:"JM",name:"牙買加"},{code:"JO",name:"約旦"},{code:"JP",name:"日本"},
					{code:"KE",name:"肯亞"},{code:"KI",name:"吉爾吉斯"},{code:"KH",name:"高棉"},
					{code:"KI",name:"吉里巴斯"},{code:"KM",name:"葛摩"},{code:"KN",name:"聖克里斯多福"},
					{code:"KP",name:"北韓"},{code:"KR",name:"大韓民國"},{code:"KW",name:"科威特"},
					{code:"KY",name:"開曼群島"},{code:"KZ",name:"哈薩克"},{code:"LA",name:"寮國"},
					{code:"LB",name:"黎巴嫩"},{code:"LC",name:"聖露西亞"},{code:"LI",name:"列支敦斯堡"},
					{code:"LK",name:"斯里蘭卡"},{code:"LR",name:"賴比瑞亞"},{code:"LS",name:"賴索托"},
					{code:"LT",name:"立陶宛"},{code:"LU",name:"盧森堡"},{code:"LV",name:"拉脫維亞"},
					{code:"LY",name:"利比亞"},{code:"OTHER",name:"其他"}
	           ];
	this.getList = function(){
		return list;
	}
	
}
