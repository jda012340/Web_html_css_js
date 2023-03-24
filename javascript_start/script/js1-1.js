//answer_btn
//answer_input
//day1
//day2
//day3
//total

let day1 = 10
let day2 = 5
let day3 = 8
let total = day1+day2+day3
const answer_input = document.querySelector ('#result')
const answer_btn = document.querySelector ('#answer_btn')

console.log(day1,day2,day3,total)
console.log(answer_input)
console.log(answer_btn)

//객체.속성 -> 속성을 읽는다
//객체.속성 = 변경값 -> 속성을 변경한다.
//length(문자길이 확인), innerHTML(html내용 읽기 및 변경), style(css)
// answer_input.value = `정답은 ${total}장 입니다.` //<---템플릿문자열:변수와 문자 함께 가능

// 요소.addEventListener(이벤트종류, 함수실행 및 호출);
answer_btn.addEventListener('click',function(){
    //이벤트 조건 만족시 실행결과
    answer_input.value = `정답은 ${total}장 입니다.`
})