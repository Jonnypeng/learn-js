var arr = require('./arry');

var hArr = arr.h.match(/\w/g);

var h = hArr.indexOf('s');  //搜索s的索引
var i = hArr.indexOf('s',4);  //搜索s的索引，从索引4开始

console.log(h,i);
