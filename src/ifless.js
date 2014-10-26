var num1 = 10;
var num2 = 0x11;
var num3 = num1+num2;
console.log('this add result is %d',num3);


var arrStr = '0,1,2,3,4,5';
var items = arrStr.split(',');
console.log('for operation in array');
for(var i=0;i<items.length;i++){
	if(i>3){
		console.log('the item is %d start to break',i);
		break;
	}
	console.log('the item is:'+items[i]);
}

console.log('foreach operation in array');
for(var index in items){
	if(index>3){
		console.log('the item is > 3 start to skip');
		continue;
	}
	console.log('the item is:'+items[index]);
}

var containsFun = function(arr,obj){
	for(var index in arr){
		if(obj===arr[index]){
			return true;
		}
	}
	return false;
}
var result = containsFun(items,'3');
console.log('3 is in items:'+result);

var sw = 1;

var switchOption = function(sw){
	switch(sw){
		case 1:
			console.log('the switch is 1');
			break;
		case 'a':
			console.log('the switch is a');
			break;
		default :
			console.log('the switch is default');
			break;
	}
}

switchOption(sw);

var printArray = function(arr){
	var str = '[';
	for(var i=0;i<arr.length;i++){
		str = str+arr[i];
		if(i<arr.length-1){
			str = str+',';
		}
	}
	str = str+']';
	console.log('the array is:'+str);
}

var myArray = ['a','b','c','d'];
printArray(myArray);
var p = myArray.pop();
console.log('the var pop is:'+p);
console.log('the array after pop is:');
printArray(myArray);


