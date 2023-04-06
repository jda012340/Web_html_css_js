const order = document.querySelector('.order')
const result = document.querySelector('#result')
console.log(order,result)
//japangi() /* 함수호출 명령 */
order.addEventListener('click',japangi)

//함수 기본 문법
//function 함수명(){실행재사용문법}
//함수는 만들어지면 자동으로 시작하는 것이 아니라 호출을 하면 실행하도록 되어있다.
//함수생성과 호출은 별개. 함수는 무한정 재사용할 수 있기 때문.
function japangi() {
    window.alert('주문하시겠습니까?')
    let menu = window.prompt('주문하실 음료를 적어주세요')
    result.innerHTML = `주문하신 ${menu} 나왔습니다 ^~^`
    result.style.backgroundColor = '#eee'
    result.style.color = '#eee'
} 