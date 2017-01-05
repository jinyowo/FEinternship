function sum(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

function sumOfPrime(num) {
  var sum = 0;

  // 1은 소수가 아니므로 제외하고 시작
  for(var i = 2; i <= num; i++) {
    if(isPrime(i)) sum += i;
  }
  return sum;
}

console.log(sum(100));
console.log(sumOfPrime(100));


function isPrime(value) {
    if(value === 2) return true;

    var div = 2;
    var limit = Math.sqrt(value);

    do{
      if(value%div === 0) return false;
      div++;
    } while(div <= limit);

    // console.log(value);
    return true;
}
