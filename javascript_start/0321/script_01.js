// 
// 
// 
// 
// var vs let ==> 중복변수
// const 상수
// console.log('a') 문자 'a'의 log를 consol에 표시한데 콘솔창에 문자데이터 a의 로그를 표시한다.
// window.alret(10) 숫자 10을 윈도우 팝업(alert)창에 띄운다.
// console.log('안녕하세요'.length) 안녕하세요라는 문자데이터의 길이를 콘솔에 출력해라.


let a = 10 //변수 a에 10을 대입한다.
let b = 'hello' //변수 b에 hello를 대입한다
let c = a //변수 c에 변수 a의 값을 대입한다. ==> 현재 정의되어 있는 값. 미래에 a값이 바뀌어도 바뀐 값이 아닌 현재 값을 인식함.
console.log(a.length) //변수 a의 길이를 콘솔에 출력한다 (2) undefined 글자수는 문자만 잴 수 잇음.. 숫자는 안재짐 왜 그런지는 나도 모름....
console.log(a+b) //변수 a와 변수 b의 합을 콘솔에 출력한다 (Nan 숫자가 아님) a와b의 값을 연결해서 출력한다. 10hello  
console.log(typeof b) //변수 b의 타입을 콘솔에 출력한다 (text-문자) 문자는 string 
window.alert(c) //윈도우 팝업창에 변수 c를 띄운다 (10)  c라는 변수에 들어잇는 데이터를 윈도우 팝업에 띄운다. 10
window.alert(a+c) //윈도우 팝업창에 변수 a와 변수 c의 합을 띄운다 (20)