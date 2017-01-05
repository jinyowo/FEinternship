/* 1/5 review */

var bookPrice = 500000;   // 책 한권의 값
var discount = 0.3;       // 할인율
var delivery = 5000;      // 배송료
var numOfBook = 10;       // 책 권수

var totalPrice = function(bookPrice, discount, delivery, numOfBook) {
  var result = (bookPrice * (1-discount)) * numOfBook + delivery;
  return result;
};

console.log(totalPrice(bookPrice, discount, delivery, numOfBook));

function circle(r) {
  var circumference = 2 * Math.PI * r;
  return circumference;
}


console.log(circle(5).toFixed(2));


function distance(x, y) {
  var distance;

  distance = Math.sqrt(((x[0]-y[0]) * (x[0]-y[0])) + ((x[1]-y[1]) * (x[1]-y[1])));
  return distance;
}

var x = [3, 0];
var y = [2, 0];
console.log(distance(x, y));
