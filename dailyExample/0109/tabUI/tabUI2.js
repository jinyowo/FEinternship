//main.js
document.addEventListener("DOMContentLoaded", function(evt) {
    console.log("DOM fully loaded! ");

    //모든 초기화함수
    changeTab();
});

//other.js
var changeTab = function() {

    var tabArr = ["position", "friend", "theme", "news"];

    for (var i = 0; i < tabArr.length; i++) {
        (function(index) {
            document.getElementById(tabArr[i]).addEventListener("click", function(evt) {
                console.log(index, " ", evt.target);

                for (var j = 0; j < tabArr.length; j++) {
                    var tab = document.getElementById(tabArr[j]);

                    if (tab.id === tabArr[index]) {
                        if (tab.className === "tab") {
                            addClass(tab, "selectedTab");
                        }
                    } else {
                        resetClass(tab);
                    }

                }
            });
        })(i);
    };

    return "ok";
};

function addClass(ele, className) {
    ele.className += " " + className;
};

function resetClass(ele) {
    ele.className = "tab";
};
