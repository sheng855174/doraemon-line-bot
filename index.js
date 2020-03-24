const linebot = require('linebot');
const express = require('express');

const bot = linebot({
	channelId: '1601315402',
	channelSecret: '6af8e930dab9b3a977719185adc48a99',
	channelAccessToken: 'E8M/Zgv4jKfyH/13Y/qcZ3YosAzkp9IRUFDRN0ZOYvKUVFLBrjqCAQzKruz6y2dvODQ57vf07Y+DlJJ4CZCHzToyhLm8dhPkmcz4aFNwFicKuHnDl2WGeNTA9id2jRVhr4Mhr2RyoP39f+7Wonbl0gdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {//這一段的程式是專門處理當有人傳送文字訊息給LineBot時，我們的處理回應
	
	let userId = event.source.userId;
	let type = event.source.type;
	let msg_type = event.message.type;
	let msg = event.message.text;
	let date = new Date().getTime();
	let year = date.getFullYear();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	
	if (event.message.type = 'text') {//收到文字訊息時，直接把收到的訊息傳回去
		if(userId == "U1062a218fd1dc5967b90f4ab74aa8e15" && msg == "talk"){
			event.source.profile().then(function (profile) {
				let txt = msg + "\r\n"
					+ "userId : " + userId + "\r\n"
					+ "spaces type ： " + type + "\r\n"
					+ "message type ： " + msg_type + "\r\n"
					+ "你的名字是 : " + profile.displayName + "\r\n"
					+ "你的照片 : " + profile.pictureUrl + "\r\n"
					+ year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds "\r\n"+;
				event.reply(txt);
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
