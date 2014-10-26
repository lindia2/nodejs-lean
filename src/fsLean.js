var fs = require('fs');
var fileName = '/home/linda/work/nodejs/fsLean.js';
fs.readFile(fileName, function(err, data) {
	if (err) {
		console.log('read file error');
	} else {
		console.log('read file success');
		console.log('file content:\n');
		console.log(data);
	}
});
console.info('start to open file');

var createFile = function(file) {
	if (!fs.existsSync(file)) {
		fs.open(file, 'w+', function(err, fd) {
			if (err) {
				console.log('create file ' + file + ' success');
			} else {
				console.log('create file ' + file + ' failed');
			}
		});
	}
}

var basePath = '/home/linda/work/nodejs/test';
var i = 0;
for(i=0;i<10;i++){
	var file = basePath+'/tt-'+i+'.txt';
	createFile(file);
}
console.log('start to create files in dir:'+basePath);

var path = '/home/linda/work/nodejs/test';
fs.exists(path, function(exist) {
	if (exist) {
		console.log('file ' + path + ' has exist');
	} else {
		console.log('file ' + path + ' not exist start to create');
		fs.mkdir(path, function(err) {
			if (err) {
				console.log('mkdir ' + path + ' error');
			} else {
				console.log('mkdir ' + path + ' success');
			}
		});
		console.log('start to mkdir');
	}
});


var MyObject = function(name, age) {
	this.name = name;
	this.age = age;

	MyObject.prototype.getName = function() {
		return name;
	};

	this.sayHello = function() {
		console.log('my name is:' + name + " age:" + age);
	};
};

var myObject = new MyObject('linda', 24);
console.log('getName:' + myObject.getName());
myObject.sayHello();