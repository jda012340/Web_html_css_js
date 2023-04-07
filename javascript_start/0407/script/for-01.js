//반복문 ⭐⭐⭐⭐⭐
/* 
    for(초기값)
*/
//for 초기변수명 : i, j, m, n
for(let i=0; i<10; i++){//ㅑ가 0으로 시작해서 10보다 작을 때까지 반복
    console.log(`javascript ${i+1}`)
}
//day1
//day2
//day3
//day4
for(let i=0; i<4; i++){
    console.log(`day+${i+1}`)
}
let a = ['html','css','javascript']
/* console.log(a[0])
console.log(a[1])
console.log(a[2])//이거는 3번만에 */
for(let i=0; i<3; i++){
    console.log(a[i])//
}//console을 한번에 보기.
let coffee = ['아메리카노','카페라떼','카푸치노','에스프레소','돌체라떼']
//1번메뉴 아메리카노 .....
/* for(let i=0; i<5; i++){//i가 5보다 작을 때까지 증가해라
    console.log(`${i+1}번메뉴 ${coffee[i]}나왔습니다.`)
} */
//역순출력
for(let i=4; i>=0; i--){
    console.log(`${i+1}번메뉴 ${coffee[i]}나왔습니다.`)
}
//========================================================
let fruits = new Array('사과','망고','오렌지','레몬','딸기','귤','복숭아')
console.log(fruits.length)
for(let i=0; i<fruits.length; i++){
    console.log(`${i+1}번 ${fruits[i]}`)
}
for(let i=fruits.length-1; i>=0; i--){
    console.log(`${i+1}번 ${fruits[i]}`)
}
//반복문 + 조건문================================
//반복문{조건문}
//1~20 홀수만 출력
for(let i=1; i<21; i++){
    if(i%2){
        console.log(i)
    }
}
//5~15까지 짝수만
console.log('5~15까지 짝수만----------------------------------')
for(let i=5; i<=15; i++){
    if(i%2==0){
        console.log(i)
    }
}
//1~10까지 역순 홀수만
console.log('1~10까지 역순 홀수만----------------------------------')
for(let i=10; i>=1; i--){
    if(i%2){    
        console.log(i)
    }
}
//10~20까지 짝수만
console.log('10~20까지 역순 짝수만----------------------------------')
for(let i=20; i>=10; i--){
    if(!(i%2)){
        console.log(i)
    }
}
//반복문 이용 총 합 구하기
console.log('반복문 이용 총 합 구하기----------------------------------')
let data = [10,20,30,40,50]
let result = 0
for(let i=0; i<data.length; i++){
    result += data[i]
    //10 + 20 + 30 + 40 + 50
}
console.log(`data 변수의 총 합은 ${result}입니다.`)
//1~10 반복문========================
console.log('1~10 반복문----------------------------------')
// for (let i=1; i<11; i++){
//     document.write(`<p class="bg1">${i}</p>`)
// }`
for (let i=1; i<11; i++){
    if(i%2){
        document.write(`<p class="bg1">${i}</p>`)
    }else{
        document.write(`<p class="bg2">${i}</p>`)
    }
}