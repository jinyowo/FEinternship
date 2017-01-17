### OOP JavaScript

* `bind()` - 객체를 함수의 this로 지정함.  
binding : 묶다, 결속시키다.
```javascript
var obj = {"name" : "jiny"};
function myMethod() {
    return this;
}
myMethod(); // Window객체
var myBindMethod = myMethod.bind(obj); // myMethod의 this를 obj로 바꿈
myBindMethod(); // obj객체
```

* `new` keyword  
`new` 연산자와 함께 호출하면 호출된 함수의 프로토타입을 근간으로 하는 신규 객체가 반환됩니다.
```javascript
function f () {};
f.prototype = {
    constructor : function f () {},
    __proto__ : Object
}
```
`constructor` 에는 f 함수가 생성될 때 사용된 함수 객체가 담겨 있습니다.  
`proto` 는 현재 프로토타입에 연결된 부모 객체 나타냅니다.
```javascript
var temp = f();
temp.__proto__; // undefined
var temp = new f();
temp.__proto__; // Object
```
`new` 연산자를 이용해 클래스의 새로운 인스턴스를 생성해냈고, 인스턴스는 자신의 속성과 메서드를 갖습니다.
```javascript
function myMethod () {
    this.name = "joe"; // 자신만의 프로퍼티로 지정(
// this.getName = function() {
// return this.name;
// }
}
myMethod.prototype.getName = function() { // 부모의 프로토타입에 선언하여 공용 메소드처럼 사용
return this.name;  
}
var result = new myMethod();
result.getName();
```
rectangle 함수에서 파생된 객체들이 공유하게끔 만든 메서드 : 프로토타입을 이용
```javascript
rect1 = {
    width : 7,
    height : 5,
    __proto__ : {
        get_name : function () {...},
        constructor : function rectangle () {...},
         __proto__ : Object
    }
}
```

* private & public
외부의 접근을 맊고자 하는 속성에 `var` 키워드를 주고, 외부에 공개될 속성에 `this` 키워드를 사용함  
__but!__ `var` 키워드로 만든 속성은 공용메서드에서 사용할 수 없음. -> 상속으로 해결가능


----
[출처 : http://beizix.tistory.com](http://beizix.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Function-%EC%9D%98-%EB%B9%84%EB%B0%80-prototype-%EA%B3%BC-new)

[출처 : http://www.nextree.co.kr/p7323/](http://www.nextree.co.kr/p7323/)

추가로 읽으면 좋을 책 : Module pattern - 'Javascript Design Pattern'
