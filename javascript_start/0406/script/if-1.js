console.log('논리데이터 연습==================================')
/* console.log(true) //참 '숫자데이터와 함께할 때 1' 
console.log(false) //거짓 '숫자데이터와 함께할 때 0'
console.log(true+2) //
console.log(false+10) //
console.log(typeof true)//boolean 논리데이터
console.log(typeof false+10)//boolean10
let bo = true+10
console.log(typeof bo) //number
console.log(true + null)//number
console.log(false + null) //0
console.log('비교연산자=======================================')
/* let a = 10
let b = 20
let c = '20'
let d = 0
console.log(a,b,c)
console.log(a==b)
console.log(b==c)
console.log(b===c)
console.log(a!=b)
console.log(b!=c)
console.log(b!==c)
console.log(a>b)
console.log(a<=b)
console.log(!d)//!값을 부정. 0은 false로 인식. d가 참으로 반전 인식되서 true로 나옴.
console.log(!b)//0이 아닌 값은 모두 참. 참인 true을 반전인식하여  false로 나옴.
console.log('조건식===============================================')
/* 
    if(날씨 == '비'){우산 챙기기}
    if(날씨 != '맑음'){우산챙기기}
    ----------------------------
    if(점수 >= 60){'합격'}
    if(점수 < 60){'재시험'}
*/
/* let weather = window.prompt('오늘 날씨 어때?')
if (weather == '비'){
    window.alert('우산을챙기세요')
} */
let a = true
let b = false
let c = 10
let d = 20
if(a==true){/*콘솔해석*/}
if(c<10){console.log('c는 10보다 작다')} //false c는 10과 같다.
if(d<c){console.log('c는d보다 작다')} //false d는 c보다 크다.
if(d<=20){console.log('d는 20보다 크거나 작다')} //true 
if(b!=true){console.log('b의 반대는 참이다.')} //true
