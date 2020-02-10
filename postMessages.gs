/**
 * スラックにPostする際の詳細の設定
 *
 * @ param object value
 * @ return void
 */
function postMessage(value){
  var options = {
    'method': 'post',
    'headers': {'Content-type': 'application/json'},
    'payload' : JSON.stringify({
    'channel' : '申請通知チャンネル',
      'attachments':[
       {                                                              
        'fallback': '物品/イベント購入管理シート更新通知',
        'color': '#36a64f',
        'title': '物品/イベント購入管理シート更新通知',
        'title_link': 'https://docs.google.com/spreadsheets/d/1OjPRgoho1rcuaziwnEjsMrQHTPvY0kYgvvsArI1tfE0/edit#gid=0',
        'text': value,                                                 
       }
      ]
    })
  };
  UrlFetchApp.fetch("https://hooks.slack.com/services/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", options);  
 }