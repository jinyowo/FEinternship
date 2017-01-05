function plus(num1, num2) {
  if(checkargs(num1, num2, "number")) {
    var result = num1 + num2;

    // 결과를 모조리 다음 화면의 body에 넣음(새로운 화면에 결과 표시됨)
    document.body.innerHTML += result;
    //window.alert(num1 + " + " + num2 + " = " + result);
    return true;

  } else {
    window.alert("타입이 틀린 거 같아요.");
    return false;
  }
}

function checkargs(num1, num2, type) {
  if(typeof num1 === type && typeof num2 === type) {
    return true;
  } else {
    return false;
  }

}
