var globalName = "Kim";

function setName(lastName) {
    //var을 쓰지 않으면 자동으로 전역변수로 됨
    firstName = "youn";
    console.log("my name is", firstName+lastName);
}

console.log(globalName);

setName(globalName);

// js는 블록 유효범위가 없어서 변수 선언 이후에 해당 블록이 닫혀도 이용할 수 있다.
console.log(firstName);

if(true) {
  var x = 5;
}

console.log(x);

//
// setName(globalName);
