var sum = function(a, b) {
	return a + b;
}
var minus = function(a, b) {
	return a - b;
}
var multiply = function(a, b) {
	return a * b;
}

function calculate(a, b, func) {
	if(arguments.length !== 3)
		return "숫자 2개, 함수이름 1개가 차례로 입력되야합니다.";
	if(typeof func !== "function")
		return "3번째 인자에는 정의된 함수가 와야합니다.";
	else if(typeof a !== "number" || typeof b !== "number")
		return "1번째, 2번째 인자에는 숫자가 와야합니다."

	var result = fn(a, b);

  return result;
}

var sumResult = calculate(10, 20, sum);
var minusResult = calculate(10, 20, minus);
var multiplyResult = calculate(10, 20, multiply);

console.log("sum is " + sumResult);
console.log("minus is " + minusResult);
console.log("multiply is " + multiplyResult);
