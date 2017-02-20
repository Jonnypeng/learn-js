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
