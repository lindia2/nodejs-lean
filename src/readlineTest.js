var readline = require('readline');

var options = {
	input:process.stdin,
	output:process.stdout,
	terminal:false,
};

var rl = readline.createInterface(options);

rl.on('line',function(line){
	var l = line.trim();
	if(l==='quit'){
		console.log('start to exit');
		rl.close();
		return 0;
	}
	console.log('the str you input is:'+l);
});

rl.on('close',function(){
	console.log('start to close,wish you have a nice day!');
	process.exit(0);
});

rl.on('pause',function(){
	console.log('input has paused');
});

rl.on('resume',function(){
	console.log('input resumed');
});






