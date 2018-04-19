function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();//現在のスプレッドシート取得
  var sheet = spreadsheet.getActiveSheet();//現在のワークシートを取得
  var range = sheet.getRange(1,1,sheet.getLastRow()).getValues();
  
  for(var i=0;i<range.length;i++){
    if(range[i][0].match("taro_yoshioka@r.recruit.co.jp")) {
      //マッチした場合
      var name_value = sheet.getRange(i+1,2).getValue();
      Logger.log(name_value);
      sheet.getRange("G1").setValue(name_value);
    }else{
      
      sheet.getRange("G1").setValue("マッチしませんでした");
      
    }
  }

}

