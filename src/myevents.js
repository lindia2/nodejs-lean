var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('testEvent', function(a, b) {
	console.log('this parameter is [' + a + ',' + b + ']');
});

emitter.on('testEvent', function(test, tt) {
	console.log('testEvent happen');
});

emitter.emit('testEvent', 'test', 55);