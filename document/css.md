### Study CSS
1. style을 HTML페이지에 적용하는 세 가지 방법
  * inline : html 요소 태그 안에다가 - 가독성이 좋지 않고, style수정할 때 일일이 모두 수정해야 하므로 별로 좋지 않음.
  * internal : html의 head부분에 style태그로 지정 - inline보다는 보기 편하지만, html마다 매 번 수정해야 하므로 이 방법도 별로.
  * external : 외부파일(.css)로 지정하기 - 가장 추천!💛 (구조화에 신경을 많이 써야함)  
    ```<link rel="stylesheet" type="text/css" href="styles.css" /> ```  

2. Cascading
> CSS는 여러가지 스타일정보를 기반으로 최종적으로 '경쟁'에 의해서 적절한 스타일이 반영됨.  
>
> 1. 대상이 동일하면 나중에 쓰인 내용을 적용  
> 2. 적용 대상이 더 구체적인 것을 먼저 적용  
> 3. id > class > element  

3. CSS selector

  * `p:nth-child(n)` : Specify a background color for every `<p>` element that is **the second child** of its parent.
  * `p:nth-of-type(n)` : Specify a background color for every `<p>` element that is **the second p element** of its parent.  

4. BOX model
margin, border, padding

5. position
static, relative, absolute, fixed
  * relative 속성의 실제 사용은, absolute속성을 가진 자식의 기준점으로 더 많이 활용됨.

6. float
  - 문서의 흐름에서 제외되고 떠 있는 형태로 되어 있게 됨.
  - clear : float속성의 영향을 받고 싶지 않을 때
  - overflow

  fixed layout(px) & fluid layout(%)

7. flex - https://css-tricks.com/snippets/css/a-guide-to-flexbox/

8. columns
