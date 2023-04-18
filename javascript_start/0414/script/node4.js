const box = document.querySelector('#box')
const result = document.querySelector('#result')

console.log(box.childNodes)//공백포함 자식들
console.log(box.children)//요소인식(자식들)
console.log(box.children[1])

box.children[0].classList.add('b')
box.children[1].classList.add('c')

let clone1 = box.children[2].cloneNode(true)
result.insertBefore(clone1, result.firstChild)