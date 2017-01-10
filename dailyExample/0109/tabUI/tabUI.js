
//main.js
document.addEventListener("DOMContentLoaded", function(evt) {
    changeTab();
});

//other.js
var changeTab = function() {
    // tab Array
    var tabArr = document.querySelectorAll("div.tab");

    // 첫 로딩 시 section의 내용을 한 번 받아옴
    var start = document.querySelector("section.eleDisplayShow");
    ajax(1, start);

    // click event listener
    for (var i = 0; i < tabArr.length; i++) {
        tabArr[i].addEventListener("click", clickTab, false);
    }
};

function clickTab(evt) {
    var target = evt.target;

    var tabClass = "tab";

    var selectedTabClass = "selectedTab";
    var displayClass = "eleDisplayShow";

    var alreadySelectedTab = document.querySelector("div."+selectedTabClass);

    // 이미 활성화되어 있는 탭을 클릭하면 아무일도 일어나지 않는다.
    if(target === alreadySelectedTab || target.parentElement === alreadySelectedTab) {
      return 0;
    }

    var alreadySelectedSection = document.querySelector("."+displayClass);
    var showSectionId = "my_";

    resetClass(alreadySelectedTab, tabClass);
    resetClass(alreadySelectedSection);

    // nodeName / tagName
    if (target.nodeName === "DIV") {
        addClass(target, selectedTabClass);
        showSectionId += target.id;
    } else if (target.nodeName === "SPAN") {
        addClass(target.parentElement, selectedTabClass);
        showSectionId += target.parentElement.id;
    } // closest : 가장 가까운 조상 element를 찾아줌

    //
    var showSection = document.getElementById(showSectionId);
    addClass(showSection, displayClass);

    contentFill(showSection);
};

function contentFill(ele) {
  var index = 0;
  switch(ele.id) {
    case "my_position" : index = 1; break;
    case "my_friend" : index = 2; break;
    case "my_theme" : index = 3; break;
    case "my_news" : index = 4; break;
  }
  ajax(index, ele);
}
function ajax(index, ele) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
        goExec(oReq, ele);
    });
    oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/"+index);
    oReq.send();
}
function goExec(oReq, ele){
  var data = JSON.parse(oReq.responseText);

  var str = "<ul > <li > <div class='myName' ><%=title%></div> <div class='myDesc' ><%=body%></div> </li> </ul>";
  var template = _.template(str);

  ele.innerHTML = template(data);
}
// classList
function addClass(ele, className) {
  if(ele.nodeName === "DIV") {
    ele.className += " " + className;
  } else {
    ele.className = className;
  }
};

function resetClass(ele, className="") {
  if(ele.nodeName === "DIV") {
    ele.className = className;
  } else {
    ele.removeAttribute("class");
  }
};
