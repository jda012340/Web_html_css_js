//노드 관계연습(형제)
//nextSibling, nextElementSibling
//previousSibling, previousElementSibling
const p = document.querySelectorAll('p')

console.log(p[0].nextSibling) //text => enter친 공백까지 인식
console.log(p[0].nextSibling.nextSibling)
console.log(p[0].nextElementSibling)//요소만 인식

p[1].nextElementSibling.style.color = 'purple'

console.log(p[1].previousElementSibling)
console.log(p[2].previousElementSibling.previousElementSibling)

p[2].previousElementSibling.style.boxShadow = 'inset 5px 5px 5px rgba(0,0,0,0.5)'
p[1].previousElementSibling.style.boxShadow = '5px 5px  blue'

let clone1 = p[1].previousElementSibling.cloneNode(true)
let clone2 = p[1].nextElementSibling.cloneNode(true)
let clone3 = p[2].previousElementSibling.cloneNode(true)
console.log(clone1)

p[3].appendChild(clone1)
p[3].appendChild(clone2)
p[3].appendChild(clone3)