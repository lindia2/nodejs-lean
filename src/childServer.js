process.on('message',function(message,handler){
	if(message==='server'){
		console.log('on server event');
		var server = handler;
		server.on('connection',function(socket){
			console.log('servive worker:'+process.pid);
			socket.on('message',function(message){
				console.log('client msg:'+message);
			});
			socket.end('echo test');
		});
	}
});