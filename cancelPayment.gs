// 支払い確認キャンセル
function cancelPaymentStatus(userId,userName,item,setToken){
  var sheet = SpreadsheetApp.openById("1VAZjeiI1xCLjWdxEeUx5o3kfeA8y2EyxT3m1t6RDr-o");
  var ss = sheet.getSheets()[0];
  var lastRow = ss.getLastRow();
  var count = lastRow + 1;
  for(var i=1; i<= lastRow+1; i++){
    if(ss.getRange(i, 1).getValue() == userId && ss.getRange(i,3).getValue() == item){
      if(ss.getRange(i, 6).getValue() == true){
        var data = {
          "replyToken" : setToken, 
          "messages" : [{
            "type" : "text",
            "text" : item + "の支払い確認・更新をキャンセルしました。"
          }]
        };
        ss.getRange(i, 6).setValue('false');
        return data;
      }else{
        var data = {
          "replyToken" : setToken, 
          "messages" : [{
            "type" : "text",
            "text" : "直近で" + item + "の支払申請はされていません。キャンセルできませんでした。"
          }]
        };
        return data;
      }
    }else if(count == 2){
      var data = {
        "replyToken" : setToken, 
        "messages" : [{
          "type" : "text",
          "text" : "直近で" + item + "の支払申請はされていません。キャンセルできませんでした。"
        }]
      };
      return data;
    }else{
      count -= 1;
    }
  }
}
