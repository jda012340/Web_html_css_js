//1.아이디 안적고 로그인누르면 : 아이디를 입력하세요 error_result
//
const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const error = document.querySelector('#error_result')
const loginBtn = document.querySelector('#login_btn')
console.log(userId,userPw,error,loginBtn)

loginBtn.addEventListener('click',id)

function id(){
    if(userId.value == ''){
        error.innerHTML = '아이디를 입력하세요'
        console.log(this)
    }
}