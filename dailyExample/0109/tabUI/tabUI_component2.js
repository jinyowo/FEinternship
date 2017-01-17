document.addEventListener("DOMContentLoaded", start, false);

function start() {
  var tabArr = document.querySelectorAll("div.tab");
  var startTab = new UIset(tabArr[0].id);
  startTab.active();

  for (var i = 0; i < tabArr.length; i++) {
    tabArr[i].addEventListener("click", clickTab, false);
  }
}

function clickTab(evt) {
  var target = evt.target.closest("div");
  var alreadySelected = document.querySelector(".selectedTab");

  if(target !== alreadySelected) {
    var targetUI = new UIset(target.id);
    var alreadySelectedUI = new UIset(alreadySelected.id);

    targetUI.active();
    alreadySelectedUI.inactive();
  }
}

var UIset = function(id) {
  this.myTab = new Tab(document.getElementById(id));
  this.mySection = new Section(document.getElementById("my_" + id));
  //this.index = index;
}
UIset.prototype.addClass = function() {
  this.myTab.ele.classList.add(this.myTab.selectedClass);
  this.mySection.ele.classList.add(this.mySection.selectedClass);
}
UIset.prototype.removeClass = function() {
  this.myTab.ele.classList.remove(this.myTab.selectedClass);
  this.mySection.ele.classList.remove(this.mySection.selectedClass);

}
UIset.prototype.active = function() {
  this.addClass();

  var index = Array.prototype.indexOf.call(this.myTab.parent.children, this.myTab) + 1;

  console.log(index);
  this.mySection.loadData(index);
}
UIset.prototype.inactive = function() {
  this.removeClass();
}

var Tab = function(ele) {
  this.id = ele.id;
  this.ele = ele;
  this.class = ele.class;
  this.selectedClass = "selectedTab";
  this.parent = ele.parentElement;
}

var Section = function(ele) {
  this.id = ele.id;
  this.ele = ele;
  this.class = ele.class;
  this.selectedClass = "eleDisplayShow";
}
Section.prototype.loadData = function(index) {
  var cachedContent = localStorage.getItem(this.id);

  if (cachedContent) {
      this.writeContent(cachedContent);
      console.log("cached!");
  } else {
      this.ajax(index);
  }
}
Section.prototype.ajax = function(index) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
        // 응답이 정상일때
        if (oReq.status === 200) {
            goExec(oReq);
        }
    });
    oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/" + index);
    oReq.send();
}

Section.prototype.goExec = function(oReq) {
    var data = JSON.parse(oReq.responseText);

    // underscore template 작업 - 서버에서 작업을 해서 보내주는 경우가 많다. (handle bar, string.replace(정규표현식))
    var str = "<ul > <li > <div class='myName' ><%=title%></div> <div class='myDesc' ><%=body%></div> </li> </ul>";
    var template = _.template(str);

    writeContent(template(data));
}

Section.prototype.writeContent = function(content) {
    this.ele.innerHTML = content;
    localStorage.setItem(this.id, content);

    console.log(localStorage);
    setTimeout(function(){
      localStorage.removeItem(this.id);
      console.log(this.id);
    }, 60000);
    // 저장된지 어느정도 시간이 지나면 데이터를 storage에서 지움
}
