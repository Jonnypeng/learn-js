var data = [1,2,3,4,5,6,7,8];
var data1 = [];
data.forEach(function(value){  //遍历数组的每一个值，并通过函数遍历使用方法重新计算,不返回一个新数组
  data1.push(value+=1);
});
console.log(data1);

var data2 = data.map(function(value){
  return value+=1;   //如果不注明return,那么返回是undefined
});
console.log(data2);

var data3 = [10,1,2,4,5,61,'',3];
var data4 = data3.filter(function(value,i){
  return i>=1&&value<6;     //return后是一个不注明if的条件语句，符合这个条件语句的元素，会通过返回值填充到新数组中
});
console.log(data4);

var everyResult1 = data3.every(function (value){   //ervery(),是数组的逻辑判断方法，最后返回布尔值
  return value > 6;
});

var rs2 = data3.every(function (value){
  return value < 100;
});

console.log(everyResult1,rs2);

var some1 = data3.some(function (value){   //some()至少有一个符合条件语句的布尔值判定
  return value > 60;
});

var some2 = data3.some(function (value){
  return value > 100;
});

console.log(some1,some2);
