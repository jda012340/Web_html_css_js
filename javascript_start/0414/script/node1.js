//노드 관계 속성
/* 
노드 관계 속성
DOM.parentNode.한단계 앞 부모 인식
DOM.parentNode.parentNode 앞 앞 부모 인식
-----------------------------------------
DOM 부모 기준 연습 + cloneNode
*/
const p = document.querySelectorAll(' p')
console.log(p[0].parentNode) //box 1번째 p의 부모
console.log(p[0].parentNode) //result 4번째 p의 부모
//객체.속성.속성 = 값
p[0].parentNode.style.backgroundColor = 'lime'
p[1].parentNode.parentNode.style.border = '15px solid gray'
//Node 복제 (복제 => 반복사용 위치 붙여넣기)
//cloneNode = ctrl+c, ctrl+v와 같은 역할 (복붙)
console.log(p[2].parentNode.cloneNode())
console.log(p[2].parentNode.cloneNode(true)) //true를 사용하는 경우가 더 많음.
/* 괄호만 붙이면 대상만 복제. 괄호안에 true를 적으면 자식자손까지 복제 */
console.log(p[0].parentNode.parentNode.cloneNode())
console.log(p[0].parentNode.parentNode.cloneNode(true))

let clone1 =p[0].parentNode.cloneNode(true)
let clone2 =p[0].parentNode.cloneNode()
console.log(clone1) //원본x 복제본O => 원본에 영향을 주지 않음.

//appendChild 마지막 자식 위치에
p[3].appendChild(clone1)
p[2].appendChild(clone2)

/* 
객체,속성
객체,속성,함수()
DOM.parentNode 부모
DOM.parentNode.parentNode 부모의 부모
DOM.parentNode.style.속성 = 값 부모에 css적용하기
DOM.parentNode.cloneNode() 부모 복제(자식,자손포함X)
DOM.parentNode.cloneNode(true) 부모 복제(자식,자손포함o)
DOM.appendChild(삽입노드) 마지막 자식 위치에 노드삽입
*/