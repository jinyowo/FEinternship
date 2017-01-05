function calculate(num, num2, operator) {
  //입력 인자가 3개가 아닌 경우
  if(arguments.length !== 3)
    return "입력값이 3개인지 확인해 주세요!";

  //입력 인자 값이 잘못된 경우
  // if(typeof arguments[0] !== "number" || typeof arguments[1] !== "number" || typeof arguments[2] !== "string") {
  if(typeof num !== "number" || typeof num2 !== "number" || typeof operator !== "string") {
    return "숫자 2개, 연산자 1개를 차례로 입력해 주세요!";
  }

  var result = num + " " + operator + " " + num2 + " = ";

  switch(operator) {
    case "+": result += num + num2; break;
    case "-": result += num - num2; break;
    case "*": result += num * num2; break;
    case "/": result += num / num2; break;
    //잘못된 연산자가 입력된 경우
    default: result = "잘못된 연산자가 입력되었습니다! ( +, -, *, / 만 입력가능)"; break;
  }

  return result;
}

console.log(calculate(10, 20));
console.log(calculate(10, 20, "+"));
console.log(calculate(10, 20, "-"));
console.log(calculate(10, 20, "*"));
console.log(calculate(10, "20", "+"));
console.log(calculate(5, 10, 20));
console.log(calculate(10, 20, "hello"));
