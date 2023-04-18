//자식 노드
//nth-child(n), first-child, last-child css 비슷
const box = document.querySelector('#box')
const result = document.querySelector('#result')

console.log(box.firstChild) //공백포함
console.log(box.firstElementChild) //요소인식
console.log(box.lastChild)
console.log(box.lastElementChild)

box.firstElementChild.style.transform = 'scaleX(1.5)'
box.lastElementChild.classList.add('a')

let clone1 = box.lastElementChild.cloneNode(true)
let clone2 = box.firstElementChild.cloneNode(true)
let clone3 = box.parentNode.cloneNode()
console.log(clone1)

result.appendChild(clone1) //마지막 자식 추가

//DOM.insertBefore(복제대상, 기준위치)
result.insertBefore(clone1,result.firstChild)//공백에다 붙여넣기 할 거니까 firstchild
console.log(result.insertBefore(clone1,result.firstChild))
result.appendChild(clone3)
box.appendChild(clone2)