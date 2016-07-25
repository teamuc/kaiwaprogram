/*javascript
	HTMLでフォームに入力された言葉をどうやって返すか？*/
//↓プログラム書き場

/*「こんにちは」か「こんばんは」に"Hello"と返す処理*/
function onButtonClick() {
          target = document.getElementById("output");
          
		　//今日の日付データを変数hidukeに格納
			var hiduke=new Date(); 

		　//年・月・日・曜日を取得する
			var year 	= hiduke.getFullYear();
			var month	= hiduke.getMonth()+1;
			var week 	= hiduke.getDay();
			var day 	= hiduke.getDate();

			var yobi= new Array("日","月","火","水","木","金","土");
			
		 //祝日設定
			var now 	= new Date();
			var ganjitu	= new Date(2016, 1-1, 1);
			var seijin 	= new Date(2016, 1-1, 11);
			var kenkoku	= new Date(2016, 2-1, 11);
			var shunbun = new Date(2016, 3-1, 20);
			var shouwa 	= new Date(2016, 4-1, 29);
			var kenpou 	= new Date(2016, 5-1, 3);
			var midori 	= new Date(2016, 5-1, 4);
			var kodomo 	= new Date(2016, 5-1, 5);
			var umi 	= new Date(2016, 7-1, 18);
			var keirou 	= new Date(2016, 9-1, 19);
			var shubun 	= new Date(2016, 9-1, 22);
			var taiiku 	= new Date(2016, 10-1, 10);
			var bunka 	= new Date(2016, 11-1, 3);
			var kinrou 	= new Date(2016, 11-1, 23);
			var tennou 	= new Date(2016, 12-1, 23);

        /*
		 * 検索対象文字列
		 */
		 var str = document.forms.kaiwa.kaiwatext.value;
		 
		/*
		 * 指定した文字列が存在する位置を検索する
		 */
			if(str.indexOf("こんにちは")!=-1 || str.indexOf("こんばんは")!=-1){
				document.write("Hello!");
			
			}else if(str.indexOf("今日の日付は")!=-1){
				document.write("西暦"+year+"年"+month+"月"+day+"日 "+yobi[week]+"曜日です！");
			
			}else if(str.indexOf("元日まであと何日？")!=-1){
				count = Math.ceil( (ganjitu.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("元日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				
			}else if(str.indexOf("成人の日まであと何日？")!=-1){
				count = Math.ceil( (seijin.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("成人の日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				
			}else if(str.indexOf("春分の日まであと何日？")!=-1){
				count = Math.ceil( (shunbun.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("春分の日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				
			}else if(str.indexOf("昭和の日まであと何日？")!=-1){
				count = Math.ceil( (shouwa.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("昭和の日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				
			}else if(str.indexOf("憲法記念日まであと何日？")!=-1){
				count = Math.ceil( (kenpou.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("憲法記念日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				
			}else if(str.indexOf("建国記念日まであと何日？")!=-1){
				count = Math.ceil( (midori.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("建国記念日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				
			}else if(str.indexOf("子供の日まであと何日？")!=-1){
				count = Math.ceil( (kodomo.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("子供の日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				
			}else if(str.indexOf("海の日まであと何日？")!=-1){
				count = Math.ceil( (umi.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("海の日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				
			}else if(str.indexOf("敬老の日まであと何日？")!=-1){
				count = Math.ceil( (keirou.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("敬老の日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				
			}else if(str.indexOf("秋分の日まであと何日？")!=-1){
				count = Math.ceil( (shubun.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("秋分の日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				
			}else if(str.indexOf("体育の日まであと何日？")!=-1){
				count = Math.ceil( (taiiku.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("体育の日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				
			}else if(str.indexOf("文化の日まであと何日？")!=-1){
				count = Math.ceil( (bunka.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("文化の日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				
			}else if(str.indexOf("勤労感謝の日まであと何日？")!=-1){
				count = Math.ceil( (kinrou.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("勤労感謝の日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				
			}else if(str.indexOf("天皇誕生日まであと何日？")!=-1){
				count = Math.ceil( (tennou.getTime() - now.getTime()) / (24*60*60*1000) );
				if(count>0){
					document.write("天皇誕生日まであと"+count+"日です");
				}else if(count==0){
					document.write("今日です！");
				}else if(count<0){
					document.write("もう過ぎました");
				}
				

      		}else{
      			document.write("わかりません");
      			alert("更新してください");
      		}
}