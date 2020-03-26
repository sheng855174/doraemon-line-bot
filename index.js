const linebot = require('linebot');
const express = require('express');
const UserProfile = require("./UserProfile.js");

const bot = linebot({
	channelId: '1601315402',
	channelSecret: '6af8e930dab9b3a977719185adc48a99',
	channelAccessToken: 'E8M/Zgv4jKfyH/13Y/qcZ3YosAzkp9IRUFDRN0ZOYvKUVFLBrjqCAQzKruz6y2dvODQ57vf07Y+DlJJ4CZCHzToyhLm8dhPkmcz4aFNwFicKuHnDl2WGeNTA9id2jRVhr4Mhr2RyoP39f+7Wonbl0gdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
	
	let userId = event.source.userId;
	let type = event.source.type;
	let msg_type = event.message.type;
	let msg = event.message.text;
	let date = new Date().toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});
	
	if(msg == 'talk'){
		event.source.profile().then(function (profile) {
			var userProfile = new UserProfile(userId, type, msg_type, profile.displayName, profile.pictureUrl, msg);
			let txt = userProfile.toString() + date + "\r\n";
			event.reply(txt);
		});
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
