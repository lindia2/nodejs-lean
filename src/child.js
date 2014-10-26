process.on('message',function(message){
	console.log('receive message from parent :'+JSON.stringify(message));
});

var msg = {
	pid:process.pid,
	message:'test message',
};

process.send(msg);