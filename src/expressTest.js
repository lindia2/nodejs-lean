var express = require('express');
var utility = require('utility');
var superagent = require('superagent');

var app = express();
var port = 1233;

var wrongParam = {
	code:301,
	message:'request parameter wrong',
};

app.use(function(req,resp,next){
	var time = new Date();
	console.log('request time:'+time);
	try{
		next();
	}catch(e){
		console.log('err:'+e);
		resp.send('server is busy,please try it later');
	}
});

app.use(function(request,response,next){
	var ip = request.ip;
	var hostname = request.hostname;
	var path = request.path;
	var cookies = request.cookies;
	console.log('request ip:'+ip);
	console.log('request hostname:'+hostname);
	console.log('request path:'+path);
	console.log('request cookies:'+JSON.stringify(cookies));
	console.log('request protocol:'+request.protocol);
	console.log('request html:'+request.is('plain/text'));
	console.log('request secure:'+request.secure);
	console.log(JSON.stringify(request.query));
	next();
});

app.param('id',function(req,resp,next,id){
	console.log('request id:'+id);
	next();
});

app.get('/user/:id',function(req,resp,next){
	console.log(JSON.stringify(req.params));
	console.log(JSON.stringify(req.query));
	resp.send('request user id send');
});

app.get('/node/test',function(request,response){
	var pass = request.query.pass;
	if(pass){
		response.send('pass encode:'+utility.md5(pass));
	}else{
		response.send(JSON.stringify(wrongParam));
	}
	
});

app.get('/redirect',function(request,response,next){
	var uri = request.query.uri;
	if(uri){
		superagent.get(uri).end(function(err,sres){
			if(err){
				next(err);
			}else{
				var body = sres.text;
				response.send(body);
			}
			
		});
	}else{
		response.send('request uri can\'t be null');	
	}
});

app.listen(port,function(){
	console.log('server start up listening on %s',port);
});
