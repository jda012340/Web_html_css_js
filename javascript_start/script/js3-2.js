//월 맑음 화 맑음 수 비 목 비 금 맑음 토 흐림 일 눈
let weather = ['맑아요','비와요','흐려요','눈와요','태풍와요']
let day = ['월','화','수','목','금','토','일']
const result = document.querySelectorAll('.result')
const answer_btn = document.querySelector('#answer_btn')
console.log(weather,day,result,answer_btn)

answer_btn.addEventListener('click',function(){
    console.log(this)
    result[0].innerHTML = `${day[0]}요일엔 ${weather[0]}`
    result[1].innerHTML = `${day[1]}요일엔 ${weather[0]}`
    result[2].innerHTML = `${day[2]}요일엔 ${weather[1]}`
    result[3].innerHTML = `${day[3]}요일엔 ${weather[1]}`
    result[4].innerHTML = `${day[4]}요일엔 ${weather[0]}`
    result[5].innerHTML = `${day[5]}요일엔 ${weather[2]}`
    result[6].innerHTML = `${day[6]}요일엔 ${weather[3]}`
})