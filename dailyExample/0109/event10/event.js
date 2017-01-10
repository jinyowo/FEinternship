//main.js
document.addEventListener("DOMContentLoaded", function(evt) {
  console.log("DOM fully loaded! ");

  //모든 초기화함수
  registEvent();
});

//other.js
var registEvent = function() {
    console.log("start");
    var hello = document.getElementById("hello");
    var border = true;
    var name = "name"; //클로저변수

    hello.addEventListener("click", function(evt) {
        //debugger;
        //evt.target = this
        var random1 = Math.floor(Math.random()*255);
        var random2 = Math.floor(Math.random()*255);
        var random3 = Math.floor(Math.random()*255);
        var rgbColor = "rgb("+random1+","+random2+","+random3+")";
        evt.target.style.backgroundColor = rgbColor;
        console.log(rgbColor);


        setTimeout(function() {
            evt.target.style.border = "";
        }, 500);

    }, false);
    console.log("end");
    return "ok";
};
