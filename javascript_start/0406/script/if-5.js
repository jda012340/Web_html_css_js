//로그인 정보 admin / 1234
let userId = 'admn'
let userPw = '124'

//ver1
// if(userId=='admin'){
//     if(userPw!='1234'){
//         console.log('비밀번호 오류')
//     }else{
//         console.log('로그인 성공')
//     }
// }else{
//     console.log('아이디 오류')
// }

//ver2
if(userId == 'admin' && userPw == '1234'){
    console.log('로그인 성공')
}else{
    //아이디오류, 비밀번호 오류 표시
    if(userId == 'admin'){
        console.log('비밀번호 오류')
    }else{
        console.log('아이디 오류')
    }
}
//========================================
let value='오른쪽'
if (value=='가운데'||value=='오른쪽'||value=='왼쪽'){
    console.log(`${value}버튼을 눌렀군요`)
}else{console.log('확인할 수 없습니다.')}