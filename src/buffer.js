var str = 'hello world';
var buf = new Buffer(str);
console.log('utf8 encode:'+Buffer.isEncoding('utf8'));
console.log('is buffer:'+Buffer.isBuffer(buf));

console.log('the length of \'%s\' is %d',str,Buffer.byteLength(str));
console.log('the len of %s is %d',str,buf.length);



var m = {
	name:'hzlindzh',
	age:24,
	sex:'male',
}
var mStr = JSON.stringify(m);
var mbuf = new Buffer(mStr);
console.log('str is %s',mStr);
console.log('the str in buffer is %s',mbuf.toString());

var str = 'this is a nodejs test';
var strLen = Buffer.byteLength(str);
var tbuf = new Buffer(256);
var len = tbuf.write(str,0);
var tjson = tbuf.toJSON();
console.log(JSON.stringify(tjson));
console.log('the str in buf is:%s',tbuf.toString('utf8',0,len));

console.log('start copy');
var tcopy = new Buffer(256);
tbuf.copy(tcopy,0,0,tbuf.length);
console.log(JSON.stringify(tcopy.toJSON()));

var bb = tbuf.slice(0,4);
console.log(JSON.stringify(bb.toJSON()));

var str = bb.toString();
console.log(str);

var ibuf = new Buffer(100);
ibuf[0] = 0x01;
ibuf[1] = 0x82;
ibuf[2] = 0x11;
ibuf[3] = 0x22;
var v1 = ibuf.readUInt16BE(0);
var v2 = ibuf.readUInt16LE(0);
console.log(v1.toString(16));
console.log(v2.toString(16));
var v3 = ibuf.readUInt32BE(0);
var v4 = ibuf.readUInt32LE(0);
console.log(v3.toString(16));
console.log(v4.toString(16));

var fbuf = new Buffer(64);
var f = 1.43;
fbuf.writeFloatBE(f,0);
var fr = fbuf.readFloatBE(0);
console.log('read float is '+fr);


var fillbuf = new Buffer(40);
var hh = 'hh';
fillbuf.fill(hh);
console.log(fillbuf.toString());

