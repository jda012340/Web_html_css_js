//1. 사용자 아이디 확인
let userId = 'admin'
if(userId == 'admin'){
    console.log(`${userId}님 어서오세요.`)
}

//2.사용자 숫자를 입력 => 짝수면 당신이 좋아하는 숫자는 짝수입니다.
let userNum = 2
if( userNum%2 == 0  ){
    console.log(`당신이 좋아하는 숫자는 짝수입니다.`)
}
//3. 나이 입력 => 10살이상이면 탑승가능
let userAge = 50 /* window.prompt('나이를 적어주세요') */
if(userAge>=10){
    console.log(`이 놀이기구를 탑승하실 수 있습니다.`)
}
//4. 24시간 기준 현재 시간 입력 => 12시 이후면 오후 nn시입니다.
let time = 15
if(time>12){
    console.log(`현재시각은 오후 ${time}시입니다.`)
}
//===============================================
let print = window.confirm('인쇄할까요?')
// console.log(print)
if(print){
    window.print()
}