const btn = document.querySelector('.order')
const result = document.querySelector('#result')
let have = 99999999

console.log(btn,result)
//명령
btn.addEventListener('click',out)
btn.addEventListener('mouseover',function(){
    btn.style.color = 'yellow'
    btn.style.boxShadow = 'inset 5px 5px 10px rgba(0,0,0,0.5)'
})
btn.addEventListener('mouseout',function(){
    btn.style.color = 'white'
    btn.style.boxShadow = 'inset -5px -5px 10px rgba(0,0,0,0.5)'
})

//함수
function out() {
    window.alert('현금을 인출하시겠습니까?')
    let user_much = window.prompt('인출할 금액을 입력해주세요')
    let howmuch = Number(user_much)
    let howmuch_replace = howmuch.toLocaleString('ko-kr')
    console.log(howmuch_replace)
    result.innerHTML = `${howmuch_replace}원이 인출되었습니다.`
    let now = Number(have-howmuch)
    console.log(now)
    let now_replace = now.toLocaleString('ko-kr')
    window.alert(`현재 남은 잔액은 ${now_replace}원 입니다.`)
}
result.style.fontWeight = '700'
result.style.backgroundColor = 'pink'
result.style.display = 'inline-block'
btn.style.display = 'block'
btn.style.backgroundColor = '#7BB7FF'
btn.style.color = 'white'
btn.style.width = '800px'
btn.style.height = '200px'
btn.style.borderRadius = '20px'
btn.style.fontSize = '3rem'
btn.style.fontWeight = '700'
btn.style.boxShadow = 'inset -5px -5px 10px rgba(0,0,0,0.5)'

//출금하기 버튼 클릭
//얼마 출금하시겠습니까?
//숫자 콤마들어가게 ㅇㅇㅇㅇ원 출력되었습니다.