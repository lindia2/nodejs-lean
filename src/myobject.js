var util = require('util');

function NewName() {
	var name;

	this.setName = function(newName) {
		name = newName;
	};

	this.sayHello = function() {
		console.log('my name is %s\n', name);
	};

};

exports.NewName = NewName;

function Base() {

	Base.prototype.name = 'linda';
	Base.prototype.age = 0;

	this.sayHello = function() {
		console.log("hello this is " + Base.prototype.name);
	};

	Base.prototype.showName = function() {
		console.log("showName:" + Base.prototype.name);
	};
};

function Sub() {

	this.test = 'sub';

}

util.inherits(Sub, Base);

var base = new Base();
base.sayHello();
base.showName();
console.log('age is ' + base.age);
console.log(base);

var sub = new Sub();
sub.showName();
console.log('age is ' + sub.age);
console.log(sub);

var map = {
	'name': 'lindia',
	'age': 24,
	'sex': 'boy',
}

console.log(map);

//--------------------js object test-----------

var obj = new Object();

obj.name = 'objectName';
obj.fun = function(test) {
	console.log("function name:" + this.name + " test:" + test);
}
obj.fun('obj');

var fun = obj.fun;
fun.call(map, 'linda-test');