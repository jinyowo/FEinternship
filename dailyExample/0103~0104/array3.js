// Array.map() : 모든 원소들에게 함수내용을 적용하여 새로운 배열을 만듬
var arr = ["a", "b", "c"];

var newArr = arr.map(function(x) {
  return "_" + x;
});

var largeArr = arr.map(function(x) {
  return x.toUpperCase();
});
console.log(arr);
console.log(newArr);
console.log(largeArr);

// Array.filter() : 해당 함수의 내용을 만족하는 원소들만 추려서 새로운 배열을 만듬
var onlyA = arr.filter(function(x) {
  return x === "a";
});
console.log(onlyA);
