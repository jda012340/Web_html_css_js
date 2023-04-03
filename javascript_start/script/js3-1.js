//사이트에 미리 저장된 회원정보 변수(배열)
let userId = ['a','b','c','d','e']
let userPw = ['1','2','3','4','5']
//DOM 제어변수
const id_pw_result = document.querySelectorAll('.result')
const answer_btn = document.querySelector('#answer_btn')
console.log(id_pw_result,answer_btn)
answer_btn.addEventListener('click',function(){
    console.log(this)
    window.alert(`회원님의 아이디는 ${userId[3]} 비밀번호는 ${userPw[3]}입니다.`)
    id_pw_result[0].innerHTML = userId[3]
    id_pw_result[1].innerHTML = userPw[3]
})
