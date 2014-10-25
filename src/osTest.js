var os = require('os');
var util = require('util');

var tmpdir = os.tmpdir();
console.log('tmpdir:'+tmpdir);

var hostname = os.hostname();
console.log('hostname:'+hostname);

var arch = os.arch();
console.log('arch:'+arch);

var type = os.type();
console.log('type:'+type);

var platform = os.platform();
console.log('platform:'+platform);

var time = os.uptime();
console.log('time:'+time);

var netIfs = os.networkInterfaces();


var printObject = function(name,obj){
	var str = JSON.stringify(obj);
	console.log(name+' '+str);
	var ifs = JSON.parse(str);
	var loArr = ifs.lo;
	for(var index in loArr){
		var lo = loArr[index];
		if(lo.family==='IPv4'){
			console.log('local ipv4:'+JSON.stringify(lo));
		}else{
			console.log('local ipv6:'+JSON.stringify(lo));
		}
	}
	var loStr = JSON.stringify(lo);
	console.log('local:'+loStr);
}

printObject('networks:',netIfs);


var cpus = os.cpus();
var cpuStr = JSON.stringify(cpus);
console.log('cpus:'+cpuStr);

var freemem = os.freemem();
var freeg = freemem/1024/1024;
var totalmem = os.totalmem();
var totalg = totalmem/1024/1024;
console.log('mem:%dm/%dm',freeg,totalg);

var osrelease = os.release();
console.log('os.release:'+osrelease);

var load = os.loadavg();
printObject('load:',load);


/*
* this is a path test example
*
*/

var path = require('path');
var fp = '/ff/ttt///ggggg/tr';
console.log('path %s after normalize is %s',fp,path.normalize(fp));

var from = '/home/linda/test/ggg';
var to = '/home/linda/work/nodejs';
var relative = path.relative(from, to);
console.log('from %s to %s relative path is %s',from,to,relative);
var resolve = path.resolve(from,relative);
console.log('from %s to %s resolve is %s',from,relative,resolve);

var dirname = path.dirname(from);
console.log('dir name of %s is %s',from,dirname);

var ff = from+'/tttt.txt';
var ext = 'txt';
var basename = path.basename(ff, ext);
console.log('this basename of %s is %s',ff,basename);

/*
 *
 * query string parse
 *
 */

 var querystring = require('querystring');
 var mm = {ff:1,tttt:'name',age:43};
 var url = querystring.stringify(mm,'&','=');
 console.log('query:'+url);
 var mmobj = querystring.parse(url,'&','=');
 console.log('age:'+mmobj.age);
 printObject('query string:',mmobj);


/*
 * timmer test case
 *
 */

 var repeatTimeFun = function(){
 	var time = new Date();
 	console.log('time:'+time);
 }

var intervalId = setInterval(repeatTimeFun,1000);

var timeOutFun = function(){
	clearInterval(intervalId);
	console.log('stop timmer');
}

var timeOutProcess = setTimeout(timeOutFun, 10000);