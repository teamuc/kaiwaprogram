/*javascript
	HTMLでフォームに入力された言葉をどうやって返すか？*/
//↓プログラム書き場

//選択肢返答サンプル
function goScript(num) {
	num++;
	switch(num){
		case 1:
			alert("こんにちは!");
			break;
		case 2:
			alert("こんばんは!");
			break;
		
	}
	document.write("更新してください");

}
/*「こんにちは」か「こんばんは」に"Hello"と返す処理*/
function onButtonClick() {
          target = document.getElementById("output");
          

        /*
		 * 検索対象文字列
		 */
		 var str = document.forms.kaiwa.kaiwatext.value;
		 
		/*
		 * 指定した文字列が存在する位置を検索する
		 */
			if(str.indexOf("こんにちは")!=-1 || str.indexOf("こんばんは")!=-1){
				document.write("Hello");
		}else{
			document.write("わかりません");
      }
          
}