var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('hello world<br>');
}).listen(8080,'127.0.0.1');
console.log('server is running at 127.0.0.1:8080');