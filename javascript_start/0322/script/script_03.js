let num1=10;
let num2=20;
let result //undefind
num1--
console.log(num1) //9
num1++
console.log(num1) //11 10
result=num2++
console.log(result) //20
result=++num2 //result=++num2 result + ++num2 = 42
console.log(result) //21 22
console.log('-----------------------------')
let age = window.prompt('당신의 나이는?')
console.log('올해 당신의 나이는'+age+'살입니다.')
age = ++age;
console.log('내년 당신의 나이는'+age+'살입니다.')
//템플릿 문자열
console.log(`내후년 당신의 나이는 ${++age}살입니다.`)
//구구단
let dan99 = window.prompt('구구단 몇단이 궁금해요?')
// 2x1=2
let count = 1
console.log(`구구단 ${dan99}단은
${dan99}X${count}=${dan99*count}
${dan99}X${++count}=${dan99*count}
${dan99}X${++count}=${dan99*count}
${dan99}X${++count}=${dan99*count}
${dan99}X${++count}=${dan99*count}
${dan99}X${++count}=${dan99*count}
${dan99}X${++count}=${dan99*count}
${dan99}X${++count}=${dan99*count}
${dan99}X${++count}=${dan99*count} 입니다.`)