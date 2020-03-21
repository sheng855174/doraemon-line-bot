var url = 'http://mylogger.io/log';
function log(message) {
  //Send an HTTP request
  console.log(message);
};
module.exports.log = log;
//module.exports.自訂想輸出的名稱 = 這個file裡的函數、變數等等
