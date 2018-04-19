function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();//現在のスプレッドシート取得
  var sheet = spreadsheet.getActiveSheet();//現在のワークシートを取得
  var range = sheet.getRange("A1");　//stringを引数にするのは、１つのセルを参照するもの
  var range2 = sheet.getRange(2,2);//行、列で指定
  var value = range2.getValue();
  
  Logger.log(value);
}

function myHai() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();//現在のスプレッドシート取得
  var sheet = spreadsheet.getActiveSheet();//現在のワークシートを取得
  var range = sheet.getRange("A1");　//stringを引数にするのは、１つのセルを参照するもの
  var range2 = sheet.getRange(1,1,10,1);//A1からA10で指定
  var value = range2.getValues();
  
  Logger.log(value);
}

function myShitei() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();//現在のスプレッドシート取得
  var sheet = spreadsheet.getActiveSheet();//現在のワークシートを取得
  var range = sheet.getRange("A1").setValue(10000);　//stringを引数にするのは、１つのセルを参照するもの
  var value = range.getValues();
  
  Logger.log(value);
}