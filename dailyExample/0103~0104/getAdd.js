function getAdd(num1, num2) {
  var result = num1 + num2;
  return function() {
    console.log(result);
  }
}
var a = getAdd(1, 2);

a();
