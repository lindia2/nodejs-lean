var net = require('net');
var os = require('os');
var child_process = require('child_process');

var workers = {};

var createWorker = function(){
	ch = child_process.fork('childServer.js');
	ch.on('message',function(message){

	});
	ch.on('close',function(code,signal){

	});
	workers[ch.pid] = ch;
	console.log('create worker '+ch.pid+' success');
};

var randomInt = function(len){
	console.log('len '+len);
	return Math.ceil(Math.random()*len);
}

var initWorkers = function(){
	var cpus = os.cpus().length;
	console.log('start to create '+cpus+' workers');
	for(var i=0;i<cpus;i++){
		createWorker();
	}
};

var getObjectLen = function(obj){
	var i=0;
	for(var index in obj){
		i++;
	}
	return i;
};

var forwardServer = function(server){
	for(var pid in workers){
		workers[pid].send('server',server);
	}
};

initWorkers();

var host = '127.0.0.1';
var port = 1234;
var server = net.createServer();
server.on('connection',function(socket){

});
server.listen(port,host,function(){
	forwardServer(server);
});
console.log('simple lbs socket start up');








