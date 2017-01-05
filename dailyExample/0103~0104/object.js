var myFriend = {key : "value"};

// 해당 key를 가지는 value를 출력
console.log(myFriend["key"]);
console.log(myFriend.key);

// Array.[key] = [value];     // 해당 key, value를 가지는 세트를 배열에 추가;
myFriend.age = 34;

// 해당 key를 가지는 value를 출력
console.log(myFriend.age);
console.log(myFriend["age"]);
console.log(myFriend);



// object
var friendSNS = {name : "jiny", post : "넘 졸령", commemt : "hello!!", like : 100};

console.log("---for..in---");
for(var title in friendSNS) {
  console.log(title + " , " + friendSNS[title]);
}
// console.log("---forEach---");
// friendSNS.forEach(print);
//
// function print(x) {
//   console.log(x);
// }
console.log("---Object.keys---");
var keyArr = Object.keys(friendSNS);
console.log(keyArr);

//key값을 이용해 value값들 출력
keyArr.forEach(function(element, index) {
  console.log(friendSNS[element]);
});


//
// var example = {9 : "a", 5 : "b", 1 : "c"};
// console.log(Object.keys(example));
