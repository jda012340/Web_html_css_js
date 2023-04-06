let id = 'admin'
let pw = '1234'
if(id=='admin'&&pw=='1234'){
    console.log('관리자 로그인 성공')
}else{
    console.log('로그인 실패')
}
//==============================
//1~20 숫자를 입력받고 해당숫자가 10보다 작다면 10 이하 아니면 11이상.
// let num = Number(window.prompt('1~20사이 숫자를 입력해주세요'))
// if(1<=num && num<=10){
//     console.log('10 이하입니다.')
// }else{
//     console.log('10 이상입니다.')
// }
//==============================
let a = 10
if(a>10){
    console.log('a>10')
}else if(a=10){
    console.log('a==10')
}else if(a<5){
    console.log('a<9')
}
console.log('if종료')//위에 조건이 참이면 다음 조건은 읽지 않는다.
let number = 9
if(number>0&&number<21){
    if(number<11){
        console.log('10이하')
    }else{
        console.log('10이상')
    }
    console.log('1단 if 종료위치')
}else{
    console.log('error')
}
console.log('if종료')
console.log('============================')
let age = window.prompt('당신의 나이를 입력해주세요')
if(0 < age && age <20){
    if(5<age){
        if(7<age){
            if(13<age){
                if(16<age){
                    window.alert('당신은 고등학생입니다.')
                }else{
                    window.alert('당신은 중학생입니다.')
                }
            }else{
                window.alert('당신은 초등학생입니다.')
            }
        }else{
            window.alert('당신은 유치원생입니다.')
        }
    }else{
        window.alert('당신은 어린이입니다.')
    }
}else{
    window.alert('당신은 성인입니다.')
}