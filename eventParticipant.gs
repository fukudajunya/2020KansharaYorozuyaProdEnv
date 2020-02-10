function eventParticipantInfo(userId,userName,item,setToken){
    var sheet = SpreadsheetApp.openById("1OjPRgoho1rcuaziwnEjsMrQHTPvY0kYgvvsArI1tfE0");
    var ss = sheet.getSheets()[0];
    var lastRow = ss.getLastRow();
    var date = new Date();
    var count = lastRow + 2;
    var participant = "";
    var participantNumber = 0;
    for(var i=1; i<=lastRow+1; i++){
      if(ss.getRange(i,3).getValue() == item){
        var participant = participant + ss.getRange(i,2).getValue() + "\n";
        var participantNumber = participantNumber + 1;
        count -= 1;
      }else if(count == 2){
        if(participantNumber == 0){
          var data = {
            "replyToken" : setToken, 
            "messages" : [{
              "type" : "text",
              "text" : item + "の参加者は現在いません。"
            }]
          };
          Logger.log(data)
          return data;
        }else{
          var data = {
          "replyToken" : setToken, 
          "messages" : [{
            "type" : "text",
            "text" : item + "の参加者リストはこちら \n\n" + participant + "\n計 " + participantNumber + " 人"
          }]
        };
        Logger.log(data)
        return data;
        }
      }else{
        count -= 1;
      }
    }   
}
