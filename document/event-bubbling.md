# Event Bubbling

Javascript에서 `addEventListener()`는 3개의 인자를 전달합니다.  
``` Javascript
target.addEventListener(type, listener[, useCapture]);
```
이 때 마지막 인자인 useCapture에 따라 이벤트 전파 방식이 결정됩니다.

> (__false__) bubbling : 자식노드로부터 이벤트가 발생하여 부모노드로 이벤트가 전파됩니다.  
 ```Javascript
 parent.addEventListener("click", clickEvent, false);
 child.addEventListener("click", clickEvent, false);
 ```
 자식노드를 클릭하면, 자식노드의 이벤트가 발생한 후 부모노드의 이벤트가 발생합니다.  

> (__true__) capturing : bubbling과 반대로 부모노드에서 자식노드로 이벤트가 전파됩니다.
```Javascript
parent.addEventListener("click", clickEvent, true);
child.addEventListener("click", clickEvent, true);
```
자식노드를 클릭하면, 부모노드의 이벤트가 먼저 발생한 후 자식노드의 이벤트가 발생합니다.

useCapture의 기본값은 false입니다.
