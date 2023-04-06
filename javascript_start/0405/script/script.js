const btn = document.querySelector('#btn')
console.log(btn)


// btn.addEventListener('click',()=>{
//     fun1_1(15,8)
// })//함수 호출(이벤트 만족 시 실행되는 함수.)

// function fun1(){
//     console.log(1+1)
// }//함수 생성
// fun1()//이벤트 없이 바로 함수호출.(함수호츨 자동실행)A

// //함수내에 변경되는 데이터가 있으면 매개변수를 생성하기.
// // fun1_1(200)
// function fun1_1(n,m){
//     console.log(n+m)
// }//함수 생성

//====================================================
// function re1(){console.log(1)}
// function re1(){window.alret(1)}
// function re1(){btn.innerHTML = '메롱'}
// re1()
// function re2(){
//     return 1
// }
// console.log(re2())
// window.alret(re2())
//-----------------------------
console.log(fun(10,20))
function fun(a,b){
    return (a+b)
}
//-----------------------------
function japangi(drink){
    return drink
}
let data = japangi('콜라')+'출력'
console.log(data)