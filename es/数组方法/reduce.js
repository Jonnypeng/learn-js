var arr = require('./arry');  //载入数组模块

var sum = arr.a.reduce(function (x,y){  //reduce 通过运算符最后形成一个单值，起到对数组进行折叠的作用
  return x + y;
});

var sum2 = arr.a.reduce(function (x,y){
  return x + y ;   //第二个参数是一个赋予第一次运算的初始值，它不在原来的数组内，但是它被赋予最初始的运算中
},100);

var product = arr.a.reduce(function (x,y){
  return x*y;  //返回数组的乘积
});

var max = arr.a.reduce(function (x,y){
  return (x>y?x:y);   //最大值
});

var min = arr.a.reduce(function (x,y){
  return (x<y?x:y);    //最小值
});

console.log(sum,sum2,product,max,min);
