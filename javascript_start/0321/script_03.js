const btn1 = document.getElementById('btn1')
console.log(btn1)
console.log(btn1.innerHTML)
//내용을 변경한다 = 대입한다.
btn1.innerHTML = '확인완료' //

const btn = document.getElementsByClassName('btn')
console.log(btn, btn[0], btn[1], btn[2], btn[3])
// console.log(btn[0].innerHTML)
// console.log(btn[1].innerHTML)
// console.log(btn[2].innerHTML)
// console.log(btn[3].innerHTML)

btn[0].innerHTML = 'HOME'
btn[1].innerHTML = 'MAIL'
btn[2].innerHTML = 'CAFE'
btn[3].innerHTML = 'BLOG'