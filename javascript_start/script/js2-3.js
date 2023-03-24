const user_money = document.querySelector('#result1')
const plus_money = document.querySelector('#result2')
const total = document.querySelector('#result')
const answer_btn = document.querySelector('#answer_btn')

console.log(user_money, plus_money, total, answer_btn)

answer_btn.addEventListener('click',function(){
    let money = Number(window.prompt('자바스크립트 은행은 입금시마다 이자 100원을 드려요!'))
    console.log(typeof money)
    user_money.value = money

    plus_money.value = 100
    console.log(typeof plus_money.value)
    console.log(plus_money)

    console.log(typeof user_money.value)
    let result = money+100
    total.value = result.toLocaleString('ko-kr')
})