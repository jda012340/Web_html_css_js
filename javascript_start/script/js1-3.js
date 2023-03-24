let money1 = 10000
let money2 = 2000
let money3 = 1000
let total = money1-(money2+money3)
let total_comma = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector ('#answer_btn')
const answer_text = document.querySelector ('#result')

console.log(money1,money2,money3,total)
console.log(answer_btn,answer_text)

answer_btn.addEventListener('click',function(){
    console.log(total)
    answer_text.value = `남은 돈은 총 ${total_comma}원 입니다.`
})