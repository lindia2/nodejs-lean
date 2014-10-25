/*
 * data gram scoket test example
 *
 */
var dgram = require('dgram');

var port = 1234;

var socket = dgram.createSocket('udp4', function(){
	console.log('datagram socket create success');
});

socket.on('message',function(data,rinfo){
	console.log('info:'+JSON.stringify(rinfo));
	console.log('dgram message come:'+data);
});

socket.on('error',function(err){
	console.log('dgram socket error:'+err);
});

socket.on('listening',function(){
	console.log('datagram socket start to listen');
});

socket.bind(port);


/*
 * data gram client test
 *
 */
var serverHost = '127.0.0.1';
var serverPort = 1234;

var client = dgram.createSocket('udp4',function(){
	console.log('client socket create success');
});
client.on('message',function(data,rinfo){
	console.log('receive msg from %s port %d msg :'+data,rinfo.address,rinfo.port);
});

var params = {
	name:'linda',
	age:43,
}
var msg = new Buffer(JSON.stringify(params));
client.send(msg,0,msg.length,serverPort,serverHost,function(err,bytes){
	if(err){
		console.log('seng datagram msg error');
	}else{
		console.log('send datagram msg success');
	}
});

