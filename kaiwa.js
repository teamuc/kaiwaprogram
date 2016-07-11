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


//入力された文をそのまま返す処理
function onButtonClick() {
          target = document.getElementById("output");
          target.innerText = document.forms.kaiwa.kaiwatext.value;
}