/*
1. 키보드 이벤트가 발생하는 순간 - clear-query 영역 노출 /
동시에 해당 키워드에 해당하는 json파일과 ajax통신 - 해당 내용을 하단 영역에 내용으로 추가 + localstorage에 저장(저장되었으면 불러오기)

2. go click event = 해당 키워드를 localstorage에 저장

3. input영역 click event = 하단 리스트 노출 - localstorage에 정보가 있으면 리스트에 노출
3-1. 하단 리스트가 열려있는 상태에서 다른 영역을 클릭하면 리스트 레이ㅓ가 닫힘
3-2. list에 있는 단어를 클릭 event = 하단의 리스트 레이어는 닫히고 + input 영역에 text 추가
*/

/* TODO
1. 코드 관계도를 그려보고 함수들의 호출관계가 올바른지 확인하여 수정한다.
2. 함수를 최대한 범용성 있도록 수정한다.(show/hide)
3. 함수이름을 알아보기 쉽게 바꾸고, 중복된 내용들은 함수로 뽑아낼 수 있는지 확인하여 수정한다.(selectWord)(retrieve~)
    (함수 이름은 한 눈에 무슨 기능을 하는 함수인지 알아 보기 쉬워야 함.)
4. 주석의 스타일을 통일시키고, 내가 보기위한 주석이 아닌 남들이 보기 편하게 작성하도록 노력한다. 또 꼭 필요한 주석인지 생각해본다.
5. 이중 if문을 최대한 줄여본다.
6. 즉시실행함수나 object형식으로 전역변수를 관리한다.
*/
document.addEventListener("DOMContentLoaded", init, false);
// TODO : 쿼리셀렉터 $로 바꾸기
// TODO : 클래스명을 오브젝트로 - class set 으로 넣어서

var classSet = {
    $searchBox: document.querySelector(".input-field"),
    $clearButton: document.querySelector(".clear-query"),

    $searchButton: document.querySelector(".button-wrap"),

    $recentCompleteList: document.querySelector(".recent-word-wrap"),
    $autoCompleteList: document.querySelector(".auto-complete-wrap"),

    $recentCompleteItems: document.querySelector(".recent-word-wrap").childNodes[1],
    $autoCompleteItems: document.querySelector(".auto-complete-wrap").childNodes[1],
};

function init() {
    localStorage.clear();
    registerEvent();
}

function registerEvent() {
    document.addEventListener("click", hideSearchBoxAssistItems, true);

    classSet.$searchBox.addEventListener("keyup", startInputText);
    classSet.$searchBox.addEventListener("click", showRecentSearchHistory);

    classSet.$clearButton.addEventListener("click", clearQueryEvt);
    classSet.$searchButton.addEventListener("click", sendSearchResult);

    classSet.$recentCompleteList.addEventListener("click", selectWord);
    classSet.$autoCompleteList.addEventListener("click", selectWord);
}

// 최근검색어 창 / 자동완성 검색어 창 이외의 영역을 클릭했을 경우 창을 숨김
function hideSearchBoxAssistItems() {
    hideList(classSet.$autoCompleteList);
    hideList(classSet.$recentCompleteList);
}

/* 최근 검색어 리스트  */
function showRecentSearchHistory(evt) {
    var data = localStorage.getItem("recent");
    if (evt.target.value === "" && data) {
        showList(classSet.$recentCompleteList);
        var words = data.split(" ");
        renderList(classSet.$recentCompleteItems, words);
    }
}

function showList(ele, type = "block") {
    ele.style.display = type;
}

function hideList(ele, type = "none") {
    ele.style.display = type;
}

function activeButton(ele) {
    ele.style.display = "inline-block";
}

function inactiveButton(ele) {
    ele.style.display = "none"
}

// 키 입력을 시작했을 때
function startInputText(evt) {
    hideList(classSet.$recentCompleteList);
    activeButton(classSet.$clearButton);

    if (evt.target.value !== "") {
        showList(classSet.$autoCompleteList);
        loadAutoCompleteItems(evt);
    } else {
        hideList(classSet.$autoCompleteList);
        inactiveButton(classSet.$clearButton);
    }
}
// word.value로 ajax통신
function loadAutoCompleteItems(evt) {
    var word = classSet.$searchBox.value;
    // localStorage에 데이타가 있으면
    var data = localStorage.getItem(word);
    if (data) {
        var parseData = data.split(",");
        renderList(classSet.$autoCompleteList.childNodes[1], parseData);
    } else { // 저장된 데이터가 없으면 새로 통신
        ajax(word);
    }
}

function ajax(word) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
        if (oReq.status === 200) {
            retrieveWords(oReq);
        } else {
            hideList(classSet.$autoCompleteList);
        }
    });
    oReq.open("GET", "./data/" + word + ".json");
    oReq.send();
}
// 자동완성 검색어를 ajax통신의 응답에 따라 가져옴
function retrieveWords(oReq) {
    var data = JSON.parse(oReq.responseText);
    renderList(classSet.$autoCompleteItems, data[1]);
    localStorage.setItem(data[0], data[1]);
}
// list rendering (list element, data(배열 형태))
// 해당 데이터를 li태그에 넣어 리스트에 입력함
function renderList(target, data) {
    var list = "";
    for (var i = 0; i < data.length; i++) {
        var str = "<li>" + data[i] + "</li>";
        list += str;
    }
    target.innerHTML = list;
}
// X버튼 눌렀을 떄 처리
function clearQueryEvt(evt) {
    hideList(classSet.$autoCompleteList);
    inactiveButton(classSet.$clearButton);

    classSet.$searchBox.value = "";
}

function sendSearchResult(evt) {
    // 버튼 기본 submit 이벤트 방지
    evt.preventDefault();

    var word = classSet.$searchBox.value;
    if (word !== "") {
        addToStorage(word);
    }
    clearQueryEvt();
}

function addToStorage(word) {
    var prev = localStorage.getItem("recent");
    if (prev) {
        prev += " " + word;
    } else {
        prev = word;
    }
    localStorage.setItem("recent", prev);
}
// recent
function selectWord(evt) {
    if (evt.target.nodeName === "LI") {
        classSet.$searchBox.value = evt.target.innerText;
        activeButton(classSet.$clearButton);
    }
}
