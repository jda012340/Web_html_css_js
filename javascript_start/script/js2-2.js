const money = document.querySelector ('#result1')
const bonus = document.querySelector ('#result2')
const result_total = document.querySelector ('#result')
const answer_btn = document.querySelector ('#answer_btn')

console.log(money, bonus, result_total, answer_btn)

answer_btn.addEventListener('click',function(){
    console.log(money.value)
    console.log(bonus.value)
    let money_num = Number(money.value)
    let bonus_num = Number(bonus.value)
    let total = money_num+bonus_num
    console.log(total)
    console.log(typeof total)
    result_total.value = total.toLocaleString('ko-kr')

    //변수없이 쓰는 법
    //result_total.value = Number(money.value) + Number(bonus.value)
})