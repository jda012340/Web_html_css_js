//보유포인트가 가상으로 최소 100원이상 가지고 있다고 설정(사용자마다 다름.)
//전액사용 버튼을 클릭시 보유는 0이되고 사용은 그전 보유값으로
//리셋을 누르면 다시 처음으로
//사용의 값이 1이상이면 X 아니면 X숨도록.

const user_point = document.querySelector('#user_point')
const use_point = document.querySelector('#use_point')
const point_all_btn = document.querySelector('#point_all_btn')
const point_reset = document.querySelector('#point_reset')
let have = 10000
console.log(user_point,use_point,point_all_btn,have)

//명령
point_reset.style.display = 'none'
user_point.value = have.toLocaleString('ko-kr')
point_all_btn.addEventListener('click',pointAll)
point_reset.addEventListener('click',pointReset)


//함수
function pointAll (){
    user_point.value = 0
    use_point.value = have.toLocaleString('ko-kr')
    reset_display()
}
function pointReset (){
    user_point.value = have.toLocaleString('ko-kr')
    use_point.value = 0
    reset_display()
}
function reset_display(){
    if(use_point.value != 0){
        point_reset.style.display = 'inline-block'
    }else{
        point_reset.style.display = 'none'
    }
}
//함수 테스트
// pointAll()

/* 
    0. 변수 설정
    const
    1. 보유 포인트 값 적립
    user_point.value = point
    point_reset.style.display = 'none'
    2. 전액사용 클릭 시 보유 => 사용 값 전환 (전환 후 보유0)
    point_all btn.addEventListener('click',()=>{
        use_point.value = user_point.value
        user_point.value = 0
        reset_display()
    })
    3. X클릭 시 사용 => 보유 값 전환 (전환 후 사용O)
    point_reset.addEventListener('click',()=>{
        user_point.value = use_point.value
        user_point.value = 0
        reset_display()
    })
    4. 사용값 1이상이면 X보이고 아니면 X 숨기기
    function reset_display(){
        if(use_point.value > 0){*사용값이 1 이상이면*
            point_reset.style.display = 'inline-block'
        }else{point_reset.style.display = 'none}
    }
*/