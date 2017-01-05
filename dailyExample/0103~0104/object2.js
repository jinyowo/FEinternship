var snsList = [{
        "id": 23,
        "name": "honux",
        "content": "오늘의 커피는 왜 항상 맛있지?",
        "like": 2,
        "comment": ["^^", "i like this"]
    },
    {
        "id": 55,
        "name": "nigayo",
        "content": "드디어 출근!",
        "like": 4,
        "comment": ["이직 하셨나봐요? "]
    },
    {
        "id": 93,
        "name": "jk",
        "content": "어제 읽은 책이 아직도 ",
        "like": 20,
        "comment": ["잠자기 전에 만화책은 금물..", "그게 뭘까?"]
    },
    {
        "id": 4,
        "name": "crong",
        "content": "코드스쿼드가 정말 좋은 곳일까? 믿을 수가 없다..",
        "like": 0,
        "comment": ["누가 그러디"]
    }
];

//console.log(snsList);

var newContent = {
    "id": 77,
    "name": "jiny",
    "content": "졸려",
    "like": 20,
    "comment": ["시렁"]
};

function appendContent(myNewsObj, newContent) {
    myNewsObj.push(newContent);
}

appendContent(snsList, newContent);
console.log(snsList);

function removeContent(myNewsObj, id) {
    var removeIndex;
    myNewsObj.forEach(function(element, index) {
        if (element["id"] === id) removeIndex = index;
    });

    myNewsObj.splice(removeIndex, 1);
}
removeContent(snsList, 77);
console.log(snsList);

// // 3번쨰 글에 comment를 추가하고 like 수를 하나 증가
// snsList[2].comment.push("ㅋㅋ한마디만 더 할게");
// snsList[2].like += 1;
// console.log(snsList);
//
// // 0번째 글에 comment를 하나 삭제하고 like를 0으로 감소
// snsList[0].comment.splice(0, 1);
// snsList[0].like = 0;
// console.log(snsList[0]);

// 해당 아이디의 content가 존재하는지
function isContent(myNewsObj, id) {
    var result = false;
    myNewsObj.forEach(function(element, index) {
        if (element["id"] === id) {
            result = true;
        }
    })
    return result;
}

console.log("id가 77인 content가 존재하나요? : " + isContent(snsList, 77));

// 모든 content에 id, name, content, like, comment가 존재하는지
// 모든 타입이 올바른지 확인.
function checkObject(myNewsObj) {
    var result = true;
    myNewsObj.forEach(function(element, index) {
        var keyArr = Object.keys(element);
        //1. 모든 content에 id, name, content, like, comment가 존재하는지
        if (keyArr[0] !== "id" || keyArr[1] !== "name" || keyArr[2] !== "content" ||
            keyArr[3] !== "like" || keyArr[4] !== "comment") {

            console.log(index + "번째 content의 항목이 잘못되었습니다.(5가지)");
            result = false;
        }
        //2. 모든 타입이 올바른지 확인.
        else if (typeof element["id"] !== "number" ||
            typeof element["name"] !== "string" ||
            typeof element["content"] !== "string" ||
            typeof element["like"] !== "number" ||
            !Array.isArray(element["comment"])) {

            console.log(index + "번째 content에서 항목의 타입이 잘못되었습니다.");
            result = false;
        }
    });
    return result;
}

if(checkObject(snsList)) console.log("모든 항목이 잘 작성됨");

var wrongContent1 = {
    "id": 77,
    "name": "jiny",
    "content": "졸려",
    "comment": ["시렁"]
};
var wrongContent2 = {
    "id": 77,
    "name": "jiny",
    "content": "졸려",
    "like": 20,
    "comment": {key : "name"}
};
appendContent(snsList, wrongContent2);
if(checkObject(snsList)) console.log("모든 항목이 잘 작성됨");




// ??
// (function() {
//   console.log("no name function");
// })()
