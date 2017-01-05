function plus(num1, num2) {
  if(checkargs(num1, num2, "number")) {
    var result = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + result);
    return true;
  }
  console.log("타입이 틀린 거 같아요.");
  return false;
}

function checkargs(num1, num2, type) {
  if(typeof num1 !== type || typeof num2 !== type)
    return false;
  else {
    return true;
  }
}

plus(1, 2);
plus(1, "2");
