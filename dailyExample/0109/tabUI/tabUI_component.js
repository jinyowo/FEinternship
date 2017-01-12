document.addEventListener("DOMContentLoaded", function(evt) {
    start();
});

// init
var Tab = function(ele, i) {
  this.element = ele;
  this.name = ele.id;
  this.isClicked = false;
  this.defaultClass = "tab";
  this.clickedClass = " selectedTab";
  this.index = i;
    //element:ele - click된 target중 가장 가까운 div
    //clicked:T/F
    //defaultClass : "tab";
    //clickedClass : "selectedTab"
    //
    //클래스 조작
    //activeTab(); - addEventListener : 해당 element를 활성화함.
    //inactiveTab(); - 해당 element를 비활성화함.
    //
}
Tab.prototype.init = function() {
  //첫번째 tab만 활성화된 상태로 시작
  if(this.index===0){
    this.isClicked = true;
    this.myClass = this.defaultClass + this.clickedClass;
  } else {
    this.myClass = this.defaultClass;
  }
}
Tab.prototype.activeTab = function() {
  this.myClass += this.clickedClass;
  this.isClicked = true;
}
Tab.prototype.inactiveTab = function() {
  this.myClass = this.defaultClass;
  this.isClicked = false;
}
//
// var Section = function(ele) {
//   this.element = ele;
//   this.clicked = false;
//   this.defaultClass = "";
//   this.clickedClass = "eleDisplayShow";
//   //element
//   //clicked:T/F
//   //defaultClass : "";
//   //clickedClass : "eleDisplayShow"
//   //index - url주소에서 참조할 내용
//   //content - 파싱된 데이터를 저장
//   //
//   //클래스 조작
//   //evtClick(); - addEventListener : 해당 element이 비활성화상태일때 활성화함.
//   //reset(); - 해당 element가 활성화상태일떄 비활성화함.
//   //
//   //데이터파싱
//   //loadData
//   //setContent -> content
//   //ajax
//   //goExec
// }
//
// Section.prototype.activeSection = function(nav, tab) {
//   this.index = Array.prototype.indexOf.call(nav, tab) + 1;
//
//   this.loadData(this.index);
// }
//
// Section.prototype.activeSection = function() {
//   this.myClass += this.clickedClass;
// }
// Section.prototype.inactiveSection = function() {
//
// }


function findThis(ele) {
      var length = this.length;
      for(var i=0; i<length; i++) {
        if(this[i].element===ele) {
          return this[i].isClicked;
        }
      }
  }
// main stream
function start() {
  // tab객체, section객체 생성
  var tabs = document.querySelectorAll("div.tab");
  var tabGroup = document.querySelector("nav");
  var numOfTab = tabs.length;

  var tabArr = [];

  for(var i=0; i<numOfTab; i++){
    var tabObject = new Tab(tabs[i], i);
    tabObject.init();
    tabArr.push(tabObject);
  }

  var isAlreadyClicked = findThis.bind(tabArr);
  //var sectionArr;

  // 첫 로딩 시 1번 section의 내용을 한 번 받아옴

  // click이벤트발생시(해당 tab이 안눌린상태일때만)
  // (tab)
  // 해당tab의 click이벤트발생/ 다른 tab중 활성화된 탭만 비활성화
  // - evtClick(); reset();
  var clickTab = function(evt) {
    // 해당 tab이 비활성화된 상태일때만 실행
    if(!isAlreadyClicked(evt.target)) {
      console.log("ok");
      // 해당 tab - 활성화
      activeTab();
      // 다른 활성 tab - 비활
      inactiveTab();
    } 
  }
  tabGroup.addEventListener("click", clickTab, false);

  // (section)
  // click이벤트발생시
}
