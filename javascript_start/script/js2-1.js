//숫자를 입력하고 버튼을 눌렀을 때 데이터 타입에 숫자라고 뜨기.
// 사용자 입력값확인엔 동일 숫자가 뜨도록!
const num_input = document.querySelector('#result')
const result_type = document.querySelector('#result1')
const result_num = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')

console.log(num_input, result_type, result_num, answer_btn)
console.log(num_input.value)//실시간 input값이 추적되지 않으므로 결과값이 표시되지 않음
answer_btn.addEventListener('click',function (){
    console.log(num_input.value)//이벤트 추적 가능확인
    console.log(typeof num_input.value) //str -> num
    //num_input의 값을 숫자로 변환하는 저장변수
    let number_type = Number(num_input.value)
    //위 변수가 숫자인지 +1을 통해 숫자+숫자=숫자 인지 결과 확인
    console.log(number_type+1)
    //위 변수가 number 데이터타입인지 typeof 연산자 확인
    console.log(typeof number_type)
    //모든 경과 console 확인 후 각 변수에 최종 데이터결과 대입

    result_num.value = num_input.value
    result_type.value = typeof number_type
})
