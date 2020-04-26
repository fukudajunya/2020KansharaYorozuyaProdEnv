function addCard(userId, place, setToken){
  /*
  * 本番用ボードにカードを作成する
  *
  */
  var sheet = SpreadsheetApp.openById("1VAZjeiI1xCLjWdxEeUx5o3kfeA8y2EyxT3m1t6RDr-o");
  var nicknameSheet = sheet.getSheets()[1];
  var nicknameLastRow = nicknameSheet.getLastRow();
  var count = nicknameLastRow + 2;
  for(var i=1; i<=nicknameLastRow+1; i++){
      if(nicknameSheet.getRange(i,1).getValue() == userId){
          var nickname = nicknameSheet.getRange(i,3).getValue();
          break;
      }
  }
  var date = new Date();
  var requestDate = Utilities.formatDate(date, "JST", "YYYY'年'MM'月'dd'日'")
  var trelloKey   = "015f7b6dcdad76ef0150a4475a629cf6";
  var trelloToken = "46081dea58b57738efdd3bf408edcf7af601c5d6a344bd391c1d6fe52880b8d9";
  var listId = '5e6daa5c6d3a564ccd91091d';
  var url = 'https://api.trello.com/1/cards/?key=' + trelloKey + '&token=' + trelloToken;
  // input option
  var options = {
    'method' : 'post',
    'muteHttpExceptions' : true,
    'payload' : {
      // input from Line bot
      'name'      : nickname + "\n申請日時\n" + requestDate, // used to descript the name
      'desc'      : place, // used to descript the area (Osaka, Tokyo, Nagoya)
      'due'       : '', // not used
      'idList'    : listId,
      'urlSource' : '', // not used
    }
  }
Logger.log(UrlFetchApp.fetch(url, options));
var data = {
  "replyToken" : setToken, 
  "messages" : [{
    "type" : "text",
    "text" : "動画チェックの申請が完了したよ!インストから連絡が来たら動画を渡してあげてね!"
  }]
};
return data; 
}