var secret_token = "HZkdrfdWZTu7g/HijXenVvLLvb5LHJkMlevJsRkZPslCDoPQEHl+P8EvXhMaLj9befLRnkoX2yb83K0S/TzB/iCwHDg8ZdRx5rEHIjEr7yIvQvcYiEwJytK19yfNbfWpHLYrvBMAnNb9iGf8Qf7fCQdB04t89/1O/w1cDnyilFU="
var secret = "Bearer " + secret_token;

function doPost(e) {
  var json = e.postData.getDataAsString();

  var token = JSON.parse(json).events[0].replyToken;

  var text = JSON.parse(json).events[0].message.text;

  var url = "https://api.line.me/v2/bot/message/reply";

  var headers = {
    "Content-Type" : "application/json",
    "Authorization":secret
  };

  var data = {
    "replyToken" : token, 
    "messages" : [{
      "type" : "text",
      "text" : text
    }]
  };

  var options = {
    "method" : "POST",
    "headers" : headers,
    "payload" : JSON.stringify(data)
  };

  return UrlFetchApp.fetch(url, options);  
} 