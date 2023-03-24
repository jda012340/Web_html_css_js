//원시데이터 논리형데이터 true=1 false=0
let a = false
let b = 1
console.log(a==b)

//원시데이터 null(빔), undefined(정의되지 않음)

let c = 10 //선언과 대입이 동시에 이루어짐.
let d //선언만 되어있는 상태. 대입이 되어있지 않음
c = null //대입된 후 특정 상황에 따라 값을 제거할 경우
console.log(c) //null 값이 들어간 상태에서 지움
console.log(d) //indefined 값이 대입되지 않음.
//-----------------------------------------------------
let e = 10
let f
console.log(e+f)
console.log('-------------------------------')
//산술연산자.
let num1 = 10+20
let num2 = 50-20
let num3 = 5*1
let num4 = 6/3
let num5 = 5%3
console.log(num1, num2, num3, num4, num5)
console.log('-------------------------------')
let box1 = 1
box1 += 10
// box1= bkx1+10
console.log(box1) //11
console.log('-------------------------------')
let box2 = 0
box2 = box2+10 // box2 += 10
console.log(box2) //10 
box2 = box2-5 // boc -= 5
console.log(box2) // 5
box2 = box2*2 // box2 *= 2
console.log(box2) //10
box2+='살 입니다'
// window.alert(box2)
console.log('---------------------')
let box3 = 10
console.log(box3)
// box3++
// console.log(box3)
// console.log(box3++) //후위연산
// console.log(++box3) //전위연산
let box4 = box3++ //박스3을 박스4에 대입한 후 박스3을 1증가해라.
console.log(box4, box3)
