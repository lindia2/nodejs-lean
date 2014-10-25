var fs = require('fs');

var args = process.argv;

if (args.length > 2) {
	for (var i=2;i<args.length;i++) {
		console.log('argv:' + args[i]);
	}
}

var pid = process.pid;
console.log('pid:' + pid);
console.log('path:' + process.execPath);
console.log('pwd:'+process.cwd());

process.chdir('d:\\work');
console.log('new pwd:'+process.cwd());

console.log('env:'+JSON.stringify(process.env));
console.log('windir:'+process.env.windir);

var computerProfileName = 'COMPUTERNAME';
var userProfile = 'USERPROFILE';
var computerName = process.env[computerProfileName];
var userProfileBase = process.env[userProfile];
console.log(computerName);
console.log(userProfileBase);

if(process.getgid){
	console.log('gid:'+process.getgid());
}else{
	console.log('can\'t get gid on windows');
}

var version = process.version;
console.log('node version:'+version);

var dependencies = process.versions;
console.log('node deps:'+JSON.stringify(dependencies));



