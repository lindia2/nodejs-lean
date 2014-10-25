var redis = require('redis');
var host = '127.0.0.1';
var port = 6379;
var auth = '';

var client = redis.createClient(port,host);
client.on('error',function(err){
	console.log('connect to redis service error');
});

if(auth){
	client.auth(auth);
}

var key1 = 'node-k1';

client.set(key1,'this is a node test',function(err,result){
	if(err){
		console.log('get key err:'+err);
	}else{
		console.log('get key result:'+result);
	}
});
client.get(key1,function(err,result){
	if(err){
		console.log('get key err:'+err);
	}else{
		console.log('get key result:'+result);
	}
});

client.end();

