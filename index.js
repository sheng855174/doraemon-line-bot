var player = require("./logger.js");

const inori = new player('Inori', 16, 'girl', 'pink')


//引用'http'模組
const http = require('http');

//port 號會由 Heroku 給予，因此不再自行指定
const port = process.env.PORT || 3000;

//新增一個server並指定他的頁面資訊，內容為'Hello World!'
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n' + inori.toString());
});

//監聽得到的 port 號開啟
server.listen(port, () => console.log(`Listening on ${port}`));
