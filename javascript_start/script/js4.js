//아메리카노 1잔에 4700원 주문하기 클릭하면 수량 증가 및 가격 증가
const order = document.querySelector('#order')
const cup = document.querySelector('#number')
const price = document.querySelector('#result')
const reset = document.querySelector('#reset')
const ame_price = 4700 //고정가격
let num = 0 //변경 수량 변수(초기값 0)
let total = 0 //변경 최종가격(초기값 0)
console.log(order,cup,price,reset,ame_price,total,num)

//이벤트
order.addEventListener('click',ame)
reset.addEventListener('click',reset_order)

//함수
// function ame (){
//     ++num
//     cup.innerHTML = num
//     total = num*ame_price
//     price.innerHTML = total.toLocaleString('ko-kr')
//     let max = 10
//     if(num > max){
//         window.alert(`구매가능한 최대수량을 초과하셨습니다.`)
//         cup.innerHTML = max
//         price.innerHTML = max*ame_price
//     } 복잡한 방법은 자제
// }
function reset_order (){
    num = 0
    total = 0
    cup.innerHTML = num
    price.innerHTML = total
}

// function ame (){
//     if(num<10){  //9일 때 눌러야
//         ++num //여기에서 10이 됨.
//         cup.innerHTML = num
//         total = num*ame_price
//         price.innerHTML = total.toLocaleString('ko-kr')
//     }else{
//         window.alert('최대 구매수량입니다.')
//     }
// }