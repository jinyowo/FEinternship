function checkargs(arguments,type) {
  for(var i=0; i<arguments.length; i++) {
    if(typeof arguments[i] !== type)
      return false;
  }
  //if(typeof a !== type || typeof b !== type) return false;
  return true;
}

function multiplyDouble(num1,num2) {
  var DOUBLE = 2;
  var double = num1 * num2;
  var result = double * DOUBLE;

  return result;
}

function calculate(num1, num2, func) {
  if(!checkargs(num1,num2,"number")) return "not number..";
  if(typeof func !== "function") return "not function..";
  if(arguments.length !== 3) return "3 arguments please.."

  var result = func(num1,num2);
  console.log("result is ", result);
  return result;
}

console.log(calculate(2,5,multiplyDouble));
