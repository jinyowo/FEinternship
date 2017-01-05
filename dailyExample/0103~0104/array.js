var myfriend = ["크롱", "jk", "honux", "cony", "brown"];
console.log(myfriend);

myfriend.push("jiny");
console.log(myfriend);

var a = myfriend.indexOf("jk");
console.log("jk - " + a);
// 해당 범위의 원소들만 저장
var slice = myfriend.slice(1, 3);
console.log(slice);
console.log(myfriend);

// 해당 범위의 원소들만 저장
myfriend.splice(1, 1);
//console.log(splice);
console.log(myfriend);

// forEach();
myfriend.forEach(print);

function print(item, index) {
  console.log(item + " " + index);
}

// 그냥 출력
for(var i=0; i<myfriend.length; i++) {
  console.log(myfriend[i] + i);
}
//
// myfriend.slice(myfriend.indexOf("jk"));
// console.log(myfriend);
