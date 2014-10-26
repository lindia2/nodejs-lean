var child_process = require('child_process');

var ch = child_process.fork('./child.js');

ch.on('message',function(message){
	console.log('receive messsage from child messages:'+JSON.stringify(message));
});

ch.on('close',function(code,signal){
	console.log('child process close code:'+code+' signal:'+signal);
});

var msg = {
	pid:process.pid,
	test:'this is a process child test',
	index:3232,
};

ch.send(msg);