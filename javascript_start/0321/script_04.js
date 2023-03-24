const more = document.getElementsByClassName('more')
const img = document.getElementsByTagName('img')
const plus = document.getElementsByClassName('plus')
const join_btn = document.getElementById('join_btn')
const li = document.getElementsByTagName('li')

console.log(more[0], img, join_btn)
console.log(plus[0],[1])
console.log(li[0])
console.log(li[1])
console.log(li[2])
console.log(li[3])
console.log(li[4])

//style속성 style속성 style속성
//속성종류 border,font-size etc........
//객체.속성 => 객체.style.속성 = a (우측의 값을 좌측에 대입한다.)
more[0].style.color = 'red' //질문. 난 모든 more에 적용하고 싶을땐 어떻게?
li[0].style.backgroundColor = 'yellowgreen'
li[1].style.background = 'pink'
li[2].style.background = 'purple'
li[3].style.background = 'rgba(105,80,90)'
li[4].style.background = 'yellow'