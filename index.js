const linebot = require('linebot');
const express = require('express');

const bot = linebot({
	channelId: '1601315402',
	channelSecret: '6af8e930dab9b3a977719185adc48a99',
	channelAccessToken: 'E8M/Zgv4jKfyH/13Y/qcZ3YosAzkp9IRUFDRN0ZOYvKUVFLBrjqCAQzKruz6y2dvODQ57vf07Y+DlJJ4CZCHzToyhLm8dhPkmcz4aFNwFicKuHnDl2WGeNTA9id2jRVhr4Mhr2RyoP39f+7Wonbl0gdB04t89/1O/w1cDnyilFU='
});



bot.on('message', function(event) {//這一段的程式是專門處理當有人傳送文字訊息給LineBot時，我們的處理回應
	profile = bot.get_profile(user_id) ;
	
	if (event.message.type = 'text') {//收到文字訊息時，直接把收到的訊息傳回去，這裏是 echo，就是你問什麼就回答什麼，簡單的對話
		let userid = event.source.userId;
		let display_name = profile.display_name;
		let msg = event.message.text + "\r\n"
		+ "userId : " + userid + "\r\n"
		+ "groupid : " + event.source.group_id + "\r\n"
		+ "display_name : " + display_name;
		
		if(userid == "U1062a218fd1dc5967b90f4ab74aa8e15"){
			event.reply(msg).then(function(data) {// 傳送訊息成功時，可在此寫程式碼
				console.log(msg);
			}).catch(function(error) {// 傳送訊息失敗時，可在此寫程式碼
				console.log('錯誤產生，錯誤碼：'+error);
			});
		}
	}
});

const app = express();

// bot.parser() 是 LINE Bot 的傳過來的資料，以及 JSON 解析
const linebotParser = bot.parser();
app.post('/linewebhook', linebotParser);

const server = app.listen(process.env.PORT || 80, function() {
	let port = server.address().port;
	console.log('目前的port是', port);
});
