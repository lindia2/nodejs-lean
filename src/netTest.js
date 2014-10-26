var net = require('net');
var ip4 = '223.252.117.54';
console.log('%s is ipv4 address '+net.isIPv4(ip4),ip4);

var server =  net.createServer(function(connection){
	console.log('server has connected');
	connection.on('data',function(data){
		console.log('data:'+data);
	});
	connection.on('end',function(){
		console.log('connection has closed');
	});

	connection.write('hello world');

});
server.listen(1234,function(){
	console.log('server has started');
});





/*
 *
 * net client
 */

 var options = {
 	host:'127.0.0.1',
 	port:1234,
 	path:'',
 	allowHalfOpen:true,
 };
var client = net.connect(options,function(){
	console.log('client has connected to server');
	client.write('client connected msg:hello');
});
client.on('data',function(data){
	console.log('client receive data:'+data);
	client.write('ttt msg received');
	client.end();
});

client.on('end',function(){
	console.log('client end');
});

client.on('close',function(){
	console.log('client close');
});





