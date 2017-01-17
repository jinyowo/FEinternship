/*
1. 키보드 이벤트가 발생하는 순간 - clear-query 영역 노출 /
동시에 해당 키워드에 해당하는 json파일과 ajax통신 - 해당 내용을 하단 영역에 내용으로 추가 + localstorage에 저장(저장되었으면 불러오기)

2. go click event = 해당 키워드를 localstorage에 저장

3. input영역 click event = 하단 리스트 노출 - localstorage에 정보가 있으면 리스트에 노출
3-1. 하단 리스트가 열려있는 상태에서 다른 영역을 클릭하면 리스트 레이ㅓ가 닫힘
3-2. list에 있는 단어를 클릭 event = 하단의 리스트 레이어는 닫히고 + input 영역에 text 추가
*/
document.addEventListener("DOMContentLoaded", start, false);
document.addEventListener("click", hideSearchBoxAssistItems, true);

var searchBox = document.querySelector(".input-field");
var clearButton = document.querySelector(".clear-query");

var searchButton = document.querySelector(".button-wrap");

var recentCompleteList = document.querySelector(".recent-word-wrap");
var autoCompleteList = document.querySelector(".auto-complete-wrap");


function start() {
    localStorage.clear();
    searchBox.addEventListener("keyup", startInputText, false);
    searchBox.addEventListener("click", showRecentSearchItems, false);
    //searchBox.addEventListener("blur", hideRecentSearchItems, false);
    // TODO : onBlur이벤트시에 recentSearchItem 뿐만아니라 autoCompleteList도 숨겨줘야 한다.

    // clear-query를 클릭하면 input-field의 값을 모두 지우고 + clear-query의 display속성을 되돌린다.
    clearButton.addEventListener("click", clearQueryEvt, false);

    searchButton.addEventListener("click", sendSearchResult, false);

    recentCompleteList.addEventListener("click", selectWord, false);
    autoCompleteList.addEventListener("click", selectWord2, false);
}

// 최근검색어 창 / 자동완성 검색어 창 이외의 영역을 클릭했을 경우 창을 숨김
function hideSearchBoxAssistItems() {
    hideAutoCompleteItems();
    hideRecentSearchItems();
}

/* 최근 검색어 리스트  */
function showRecentSearchItems(evt) {
    if (evt.target.value === "") {
        var data = localStorage.getItem("recent");
        if (data) {
            recentCompleteList.style.display = "block";
            retrieveRecentSearchItems(data);
        }
    }
}
function hideRecentSearchItems() {
    recentCompleteList.style.display = "none";
}

/* 검색어 자동 완성 리스트  */
function showAutoCompleteItems() {
    autoCompleteList.style.display = "block";
}

function hideAutoCompleteItems() {
    autoCompleteList.style.display = "none";
}

// 검색창에 키를 입력했을 때 자동완성 기능 및 검색어를 지울수 있는 UI를 제공
function changeClearQueryBtn(searchBox) {
    var thisDisplay = clearButton.style.display;

    if (searchBox.value.length > 0) {
        if (thisDisplay === "none") {
            thisDisplay = "inline-block";
        }
    } else {
        if (thisDisplay === "inline-block") {
            thisDisplay = "none";
        }
    }
    clearButton.style.display = thisDisplay;
}

// 키 입력을 시작했을 때
function startInputText(evt) {
    hideRecentSearchItems();
    changeClearQueryBtn(evt.target);

    // input-field의 내용을 모두 받아옴
    loadAutoCompleteItems(evt);
}
// word.value로 ajax통신
function loadAutoCompleteItems(evt) {
    var word = searchBox.value;

    // input내용을 모두 지운 상태
    if (word === "") {
        clearQueryEvt(evt);
    } else {
        // localStorage에 데이타가 있으면
        var data = localStorage.getItem(word);
        if (data) {
            var parseData = data.split(',');
            renderList(autoCompleteList.childNodes[1],parseData);
            showAutoCompleteItems();
        } else { // 저장된 데이터가 없으면 새로 통신
            ajax(word);
        }
    }
}

function ajax(word) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
        if (oReq.status === 200) {
            retrieveAutoCompleteItems(oReq);
        }
    });
    oReq.open("GET", "./data/" + word + ".json");
    oReq.send();
}
// 자동완성 검색어를 ajax통신의 응답에 따라 가져옴
function retrieveAutoCompleteItems(oReq) {
    var data = JSON.parse(oReq.responseText);
    renderList(autoCompleteList.childNodes[1], data[1]);
    showAutoCompleteItems();
    localStorage.setItem(data[0], data[1]);
}
// list rendering (list element, data(배열 형태))
// 해당 데이터를 li태그에 넣어 리스트에 입력함
function renderList(target, data) {
    var list = "";
    for(var i=0; i<data.length; i++) {
        var str = "<li>" + data[i] + "</li>";
        list += str;
    }
    target.innerHTML = list;
}
// X버튼 눌렀을 떄 처리
function clearQueryEvt(evt) {
    hideAutoCompleteItems();
    //autoCompleteList.style.display = "none";
    searchBox.value = "";

    clearButton.style.display = "none";
}

function sendSearchResult(evt) {
    // 버튼 기본 submit 이벤트 방지
    evt.preventDefault();
    var word = searchBox;
    if (word.value !== "") {
        var prev = localStorage.getItem("recent");
        if (prev)
            prev += " " + word.value;
        else
            prev = word.value;
        localStorage.setItem("recent", prev);
    }
    clearQueryEvt();
}

function retrieveRecentSearchItems(words) {
    var data = words.split(" ");
    renderList(recentCompleteList.childNodes[1], data);
}

// recent
function selectWord(evt) {
    if (evt.target.nodeName === "LI") {
        searchBox.value = evt.target.innerText;
        //hideRecentSearchItems();
        changeClearQueryBtn(searchBox);
    }
}
// auto
function selectWord2(evt) {
    if (evt.target.nodeName === "LI") {
        searchBox.value = evt.target.innerText;
        //hideAutoCompleteItems();
    }
}
