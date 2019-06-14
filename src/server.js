var http = require('http'); // node 내장 모듈 불러옴
var app = require('../app');

var hostname = '127.0.0.1'; // localhost와 동일
var port = 3000;

http.createServer(function(req, res){
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname);

console.log('Server running at http://'+hostname+':'+port);