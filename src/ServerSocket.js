var net = require('net');

var server = net.createServer(function(socket){
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(8080,'127.0.0.1');

console.log('server is running on tcp 127.0.0.1:8080');