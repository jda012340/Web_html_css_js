var box1 = 10
let box2 = 20
const box3 = 30
let box4 = 'hello javascript'
console.log(`box1 변수값 = ${box1}`)
console.log(`box2 변수값 = ${box2}`)
console.log(`box3 상수값 = ${box3}`)
// box1 = box1+1
box1 += 1 /* 위와 같ㅌ은 결과가 됨. 복합대입 */
box1 += 10 /* box1dp 10을 더한 값을 box1에 대입한다. */
console.log(`box1 변수값 = ${box1}`)//템플릿문자열
box2 = box2%2 /* box2를 2로 나누었을 때 나머지 값 % : 산술연산자 += :  */
console.log(`box2 변수 값 = ${box2}`)
box2 = box1++ //후위연산자
console.log(`box2 변수 값 ${box2}`)
console.log(`box2=${box2}, box1=${box1}`)
box1 = box3
console.log(`box1=${box1}, box3=${box3}`)
console.log(box1.length) //length는 문자열의 길이만 알려줌 box1은 문자열이 아니라서 안됨
console.log(box4.length)
//=====================================================================================
let array1 = ['aqua', 'lime', 'yellow'] //
let array2 = new Array('black','white','gray') //
let array3 = new Array(10)
console.log(array1)
console.log(array1[2], array1[0], array1[1])
console.log(array2)
console.log(array3)
array3[9] = 'black'
console.log(array3)
//=========================================================================================
let array4 = [10,20,30,40,50]
console.log(array4)
console.log(array4[0]+1)
console.log(array4[1]%2)//array4의1 20을 2로 나눈 나머지의 값 = 0
console.log(++array4[4])//array4의4 1의 증가 = 51
console.log(array4[3]++)//array4의3 = 40(++는 후위연산자이기 때문에 대입 후 계산.)
total = array4[3]++
console.log(`total=${total}, array4[3]=${array4[3]}`)//예상 41, 42 | 