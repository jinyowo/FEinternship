//main.js
document.addEventListener("DOMContentLoaded", function(evt) {
    changeTab();
});

//other.js
var changeTab = function() {
    // 첫 로딩 시 section의 내용을 한 번 받아옴
    var start = document.querySelector("section.eleDisplayShow");
    loadData(1, start);

    // tab Array
    var tabArr = document.querySelectorAll("div.tab");

    // click event listener
    for (var i = 0; i < tabArr.length; i++) {
        tabArr[i].addEventListener("click", clickTab, false);
    }
};

function clickTab(evt) {
    // click된 target이 div가 아니여도 가장 가까운 div를 그 target으로 지정해줌.
    var target = evt.target.closest("div");
    var parent = target.parentElement;

    var tabClass = "tab";

    var selectedTabClass = "selectedTab";
    var displayClass = "eleDisplayShow";

<<<<<<< HEAD
    var alreadySelectedTab = document.querySelector("div." + selectedTabClass);

    // 이미 활성화되어 있는 탭을 클릭하면 아무일도 일어나지 않는다.
    if (target === alreadySelectedTab || parent === alreadySelectedTab) {
        return 0;
    }

    var alreadySelectedSection = document.querySelector("." + displayClass);

    var displaySection = document.getElementById("my_" + target.id);

    resetClass(alreadySelectedTab, tabClass);
    resetClass(alreadySelectedSection);

<<<<<<< HEAD
    // click 후 tab과 section에 class 추가
    addClass(target, selectedTabClass);
    addClass(displaySection, displayClass);

    // 부모Node의 children 중에서 target이 몇번째인지
    var index = Array.prototype.indexOf.call(parent.children, target) + 1;

    loadData(index, displaySection);
};

//localstorage
function loadData(index, ele) {
    var cachedContent = localStorage.getItem(ele.id);

    if (cachedContent) {
        writeContent(ele, cachedContent);
        console.log("cached!");
    } else {
        ajax(index, ele);
    }
}

function ajax(index, ele) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
        // 응답이 정상일때
        if (oReq.status === 200) {
            goExec(oReq, ele);
        }
    });
    oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/" + index);
    oReq.send();
}

function goExec(oReq, ele) {
    var data = JSON.parse(oReq.responseText);

    // underscore template 작업 - 서버에서 작업을 해서 보내주는 경우가 많다. (handle bar, string.replace(정규표현식))
    var str = "<ul > <li > <div class='myName' ><%=title%></div> <div class='myDesc' ><%=body%></div> </li> </ul>";
    var template = _.template(str);

    writeContent(ele, template(data));
}

function writeContent(ele, content) {
    ele.innerHTML = content;
    localStorage.setItem(ele.id, content);

    console.log(localStorage);
    setTimeout(function(){
      localStorage.removeItem(ele.id);
      console.log(ele.id);
    }, 60000);
    // 저장된지 어느정도 시간이 지나면 데이터를 storage에서 지움
}

// classList
function addClass(ele, className) {
    if (ele.nodeName === "DIV") {
        ele.className += " " + className;
    } else {
        ele.className = className;
    }
};

function resetClass(ele, className) {
    if (ele.nodeName === "DIV") {
        ele.className = className;
    } else {
        ele.removeAttribute("class");
    }
};

//diagram그리기
//css : box model, position, float기반 layout
//header/nav/body/footer/광고 - 1)고정형 2)반응형(%)
