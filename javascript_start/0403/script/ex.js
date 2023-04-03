//DOM 변수 -------------------
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const result = document.querySelector('#result')
console.log(btn1,btn2,btn3,result)
let qa = window.confirm('let과 const의 차이점을 서술하시오.')
btn1.addEventListener('click',function(){
    result.innerHTML = `let은 중복되지 않지만 값이 변하는 변수를 선언하는 객체,<br> const는 절대 변하지 않는 상수를 선언하는 객체`
})
btn2.addEventListener('click',function(){
    qa = window.confirm('변수와 배열의 차이점을 서술하시오')
    result.innerHTML = `변수는 1개 배열은 여러개
    변수의 값을 1씩 증가 또는 감소하는 증감연산자는 전위, 후위 위치에 따라 값을 대입 후 증가할지 증가하고 대입할지가 경정된다.`
})
btn3.addEventListener('click',function(){
    qa = window.confirm('증감연산자의 전위연산, 후위연산의 차이점을 서술하시오.')
    result.innerHTML = `전위연산은 증가 후 대입, 후위연산은 감소 후 대입.`
})