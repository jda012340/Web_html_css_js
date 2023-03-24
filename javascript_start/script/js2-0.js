// let number = '기5784328'
const result1 = document.querySelector('#result1')
const result2 = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')
console.log(result1,result2,answer_btn)

answer_btn.addEventListener('click',function(){
    let number = window.prompt('인증번호를 입력하세요')
    result1.value = typeof(number)
    result2.value = number
    console.log (this)
})






// let number = '기5784328'
// let check = window.alert
// const result1 = document.querySelector('#result1')
// const result2 = document.querySelector('#result2')
// const answer_btn = document.querySelector('#answer_btn')

// console.log(number,)
// console.log(window.alert)


// answer_btn.addEventListener('click',function(){
//     window.alert(number)
//     result1.value = typeof(number)
//     result2.value = number
// })