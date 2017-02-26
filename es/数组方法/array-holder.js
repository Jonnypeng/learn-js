/*//1.1 join 数组转字符串
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [5,2,56,67,8,1,2,56,7];
console.log(arr1.join('-'));

//1.2 reverse 将数组颠倒顺序并返回逆向数组
console.log(arr1.reverse());

//1.3 sort 通过比较函数，返回具有一定逻辑排序的数组
console.log(arr1.sort());  //默认字母表顺序
var sortAB = arr3.sort(function (a,b){
  //return a - b;   //升序
  return b - a;   //降序
});
console.log(sortAB);*/

//1.4 concat 数组连接
var a = [1,2,3];

console.log(a.concat(4,5,6,[7,8,[9,10]]));

//1.5 slice 数组片段
console.log(a.slice(1,2));  //第一个参数，是开始位置，第二个参数是达到位置但这个位置并不包含在内

//1.6 splice 数组删除，且插入任意元素
var arr1 = [1,2,3,4,5,6,7,8,9];
var arr2 = arr1.splice(2,3,'元素1','元素2','元素3','元素4');  //第一个参数是起始位置，第二个参数是删除个数，方法灰返回一个被删除元素的全新数组，同时会将改变原数组的元素,后面跟随的任意个数的元素，都会在起始点进行插入
console.log(arr2,arr1);
