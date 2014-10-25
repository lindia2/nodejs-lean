var mysql = require('mysql');
var util = require('util');

var options = {
	host : 'localhost',
	port : 3306,
	user : 'node-test',
	password : 'node-test',
	database : 'test',
};

var connection = mysql.createConnection(options);
connection.connect();

var startTransaction = function(){
	connection.beginTransaction(function(err){
		if(err){
			console.log('begin transaction failure');
		}else{
			console.log('begin transaction success');
		}
	});
};

var commitTransaction = function(){
	connection.commit(function(err){
		if(err){
			console.log('commit transaction failure');
		}else{
			console.log('commit transaction success');
		}
	});
};

var getUserList = function(){
	var sql = 'select * from testu order by id asc';
	connection.query(sql,function(err,result,fields){
		if(err){
			console.log('query users error');
		}else{
			console.log('result:'+JSON.stringify(result));
			for(var index in result){
				console.log(result[index].id);
				console.log(result[index].name);
			}
		}
	});
};

var User = function(name,phone){
	console.log('super construct');
	User.prototype.name = name;
	User.prototype.id = 0;
	User.prototype.phone = phone;
	User.prototype.sex = 2;
};

var insertSql = 'insert into testu(id,name,phone,sex) values(?,?,?,?)';
var insertUser = function(user){
	connection.query(insertSql,[user.id,user.name,user.phone,user.sex],function(err,result){
		if(err){
			console.log('insert error'+err);
		}else{
			console.log('insert seccuss result:'+JSON.stringify(result));
		}
	});
};

var selectByIdSql = 'select * from testu where id=?';

var getById = function(id){
	connection.query(selectByIdSql,id,function(err,result,fields){
		if(err){
			console.log('select error'+err);
		}else{
			console.log('id '+id+" result:"+JSON.stringify(result));
		}
	});
};

var deleteByIdSql = 'delete from testu where id=?';

var deleteById = function(id){
	connection.query(deleteByIdSql,id,function(err,result){
		if(err){
			console.log('delete err:'+err);
		}else{
			console.log('delete %d result '+JSON.stringify(result),id);
		}
	});
};

var updateById = 'update testu set name=?,phone=?,sex=? where id=?';
var updateUser = function(user){
	connection.query(updateById,[user.name,user.phone,user.sex,user.id],function(err,result){
		if(err){
			console.log('update err:'+err);
		}else{
			console.log('update user success');
		}
	});
}

startTransaction();

var user = new User('node-test2','1543545657');
user.id = 55;
insertUser(user);
getUserList();

user.name = 'node-test88';
user.phone = '123456789';
updateUser(user);
getUserList();

commitTransaction();

//getById(user.id);
//deleteById(user.id);

connection.end();

