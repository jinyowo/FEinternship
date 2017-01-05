var arr = ["크롱", "jk", "honux", ["코니", "샐리"], "브라운"];

var lineFriend = arr[3];
var sally = lineFriend[1];

console.log(lineFriend);
console.log(sally);

console.log(sally === arr[3][1]);

function printArrayElement(arr) {
    for (var i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i]) === true) console.log(arr[i]);
    }
}

printArrayElement(arr);

function getNotArrayElement(arr) {
  var resultArr = [];

  for (var i = 0; i < arr.length; i++) {
    if(!Array.isArray(arr[i])) resultArr.push(arr[i]);
  }
  return resultArr;
}

var newArr = getNotArrayElement(arr);

console.log(newArr);
