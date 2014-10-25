var util = require('util');

console.log('-------------------copy from parent-------------------------');

var User = function(name,sex,age){
	this.name=name;
	this.sex = sex;
	this.age = age;

	User.other = 'tttt';

	this.introduce = function(){
		console.log('I am %s,my name is %s and my age is %d',sex,name,age);
	};

	this.sayHello = function(){
		console.log('super hello '+User.other);
	};
};

var Worker = function(company,department,salary,name,sex,age){
	this.company = company;
	this.department = department;
	this.salary = salary;
	
	var user = new User(name,sex,age);
	for(var p in user){
		this[p] = user[p];
	};

	this.work = function(){
		console.log('i am a worker,i am working now');
	};

	this.info = function(){
		console.log('I work in %s and i am in %s department,my salary is %d',company,department,salary);
	};
};

util.inherits(Worker, User);

var user = new User('linda','male',23);
user.other = 'rerrrrr';
user.introduce();
user.sayHello();

var user2 = new User('test','female',22);
user2.introduce();
user2.sayHello();

user.introduce();

var worker = new Worker('netease','yixin',2000,'lindzh','male',25);
worker.info();
worker.introduce();
worker.sayHello();

console.log('--------------private public------------------');

var Super = function(name,age){

	var pri = {
		name:'',
		age:0,
	};

	var pub = {
		getName:function(){
			return pri.name;
		},
		setName:function(name){
			pri.name = name;
		},
		getAge:function(){
			return pri.age;
		},
		setAge:function(age){
			pri.age = age;
		},
	};

	pri.name = name;
	pri.age = age;
	return pub;
}

var su = Super('mysuper',14);
console.log(su.name);
console.log(su.getName());
console.log(su.getAge());
su.setAge(21);
console.log(su.getAge());
console.log('---------------------------------------');

var mm = {
	nn:4343,
	test:'test',
};

for(var key in mm){
	console.log('key:'+key+" v:"+mm[key]);
}

var li = [66,5454,'32','fsefse'];
for(var index in li){
	console.log('index:'+index+" value:"+li[index]);
}


