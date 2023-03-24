//계산식 적정체중 = (본인신장-100)*0.9
//변수명 예 userHeight, userWeight, nomal_w
//prompt 현재키, 몸무게 입력받기
//dom 객체변수 생성하기

//1.prompt 현재 키, 몸무게, 입력받기
const height = document.getElementsByClassName('height')
console.log(height[0].innerHTML)
const weight = document.getElementsByClassName('weight')
console.log(weight[0].innerHTML)
const nomal = document.getElementsByClassName('nomal')
console.log(nomal[0].innerHTML)
const reach = document.getElementsByClassName('reach')

//dom객페 변수 생성
let userHeight = window.prompt('현재 키를 알려주세요!')
let userWeight = window.prompt('현재 몸무게를 알려주세요!')
let nomalW = (userHeight-100)*0.9
let weightWant = userWeight-nomalW

//검사
console.log(
    `당신의 적정 몸무게는 ${nomal}kg 입니다.`
    )
console.log(
    `목표 몸무게인 ${nomal}kg을 향해 앞으로 ${weightWant}kg감량에 도전해보세요!`
)

//html입력
// height[0].innerHTML = userHeight
// weight[0].innerHTML = userWeight
// nomal[0].innerHTML = nomalW
// nomal[1].innerHTML = nomalW
// reach[0].innerHTML = weightWant