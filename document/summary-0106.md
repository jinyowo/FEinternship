# DOM 조작의 성능 비교  
---
### < innerHTML() vs insertAdjacentHTML() >

* innerHTML()  
> 해당 요소의 내용을 HTML 마크업 문자열로 반환한다.  <br><br>
`innerHTML()`은 파싱된 새 문자열의 결과와 요소의 현재 내용을 교체한다.<br>
```javascript
element.innerHTML = content;```
보통은 괜찮지만,  
```javascript
element.innerHTML += addContent;```  
와 같이 텍스트 조각을 반복해서 덧붙이는 과정에서는 직렬화와 파싱의 두 단계가 반복되므로 비효율적이다. <br>


* insertAdjacentHTML()  
> 지정한 요소의 '주변에' HTML 마크업 문자열을 입력할 수 있다.  <br><br>
```javascript
element.insertAdjacentHTML(position, text);```  
구조로 첫 번째 인자에는 text를 넣을 위치를 지정하고, 두 번째 인자에는 넣고 싶은 문자열을 쓴다.<br><br>
ex)  
```javascript
var element = document.querySelector("h1");  
element.insertAdjacentHTML("beforebegin", "<p>hello</p>");```  
을 실행하면 h1 태그의 앞 부분에 p태그 구문이 삽입된다. (h1태그가 1개라고 가정)  <br><br>
이 메소드는 기존 하위 Node들을 건드리지 않아서 작업속도가 `innerHTML()`에 비해 상대적으로 빠르다.  <br><br>
[추가정보 및 position의 종류에 대한 정보 바로가기](https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML)


### < DocumentFragment를 이용한 최적화 >
`DocumentFragment`란, 웹 페이지에 객체를 생성할 때 생성 객체를 Body 에 넣기 전에 미리 만들어 두는 것을 말한다. 즉, 다른 노드를 담는 임시 컨테이너 역할을 하는 특수 목적 노드.<br>

`DocumentFragment`의 특이한 점은 노드 집합을 단일 노드처럼 다룰 수 있다는 점이다. `DocumentFragment`를 `appendChild()`, `insertBefore()`, `replaceChild()`에 인자로 넘기면 해당 객체가 아닌 자식 객체가 문서에 삽입된다.

웹브라우저는 웹페이지 내부의 View 영역 안에 보이는 객체에 변화가 생길 때 **reflow**를 하게 된다. **reflow**란, 한 객체의 크기가 변경될 경우 다른 여러 객체들의 크기도 함께 영향 받을 수 있는데, 이런 것들을 재조정 하는 과정이다.  
`DocumentFragment`는 이 **reflow**를 최소화 함으로써 성능을 향상시키도록 도와준다.  
> *예제*  
* `appendChild()`만 사용하여 DOM그리기   
```javascript
var div = document.getElementsByTagName("div");  
for ( var i = 0; i < div.length; i++) {  
    for ( var e = 0; e < elems.length; e++) {  
        div[i].appendChild(elems[e].cloneNode(true));  
    }  
}```  
* `DocumentFragment`를 사용하여 DOM그리기  
```javascript
var div = document.getElementsByTagName("div");
var frag = document.createDocumentFragment();
for ( var e = 0; e < elems.length; e++) {
    frag.appendChild(elems[e]);
}
for ( var i = 0; i < div.length; i++) {
    div[i].appendChild(frag.cloneNode(true));
}```

이러한 특징을 이용해 `innerHTML()`과 `DocumentFragment`를 이용하여 `insertAdjacentHTML()`를 구현할 수도 있다.


### < querySelectorAll() >
CSS선택자를 사용하기 때문에, 클라이언트 측 자바스크립트에서 조작할 문서 요소를 선택하는 방법 중 가장 강력한 기법이다. (정확한 이유?)
* id로 요소 선택하기
* name으로 요소 선택하기
* HTML 태그 이름으로 요소 선택하기( = type으로 요소 선택하기)
* CSS class 이름들을 지정하여 선택하기
* 지정한 CSS 선택자와 일치 여부로 선택하기 -> `querySelectorAll`
