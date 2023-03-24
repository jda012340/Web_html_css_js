let money1 = 10000
let money2 = 1000
let total = money1+money2
//객체.메소드()
//객체.toLocalString('ko-kr')
let total_replace = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector ('#answer_btn')
const answer_text = document.querySelector ('#result')

console.log(money1,money2,total)
console.log(answer_btn, answer_text)

answer_btn.addEventListener('click',function(){
    console.log(total)
    answer_text.value = `정답은 ${total_replace}원 입니다.`
})