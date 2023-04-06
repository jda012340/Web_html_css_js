// let num = Number(window.prompt('숫자를입력해주세요'))
// if(num%2){
//     console.log('홀수')
// }else{
//     console.log('짝수')
// }

//admin관리자 아이디. 아이디 입력받고 아이디가 맞으면 관리자님 어서오세요
let adminId = 'admin'
let userId = window.prompt('아이디를 입력해주세요.')
if(userId==adminId){
    window.alert('관리자님 어서오세요')
}else{
    window.alert('관리자가 아닌 사용자는 페이지에 접근할 수 없습니다.')
}