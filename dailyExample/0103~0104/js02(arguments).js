var avg = calculateAvg(10, 20, 30);
console.log(avg);
var avg = calculateAvg(10, 20, 30, 40, 50);
console.log(avg);
var avg = calculateAvg(10, 20, 30, 40, 50, "80");
console.log(avg);

function calculateAvg(num) {
    var add = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number")
            return "";
        add += arguments[i];
        //console.log(i + " = " + arguments[i]);
    }
    return add / arguments.length;
}
