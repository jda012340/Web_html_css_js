//조건문 switch 다중조건처리
let a = 20
switch(a){
    case 10:console.log('a==10'); break;
    case 20:console.log('a==20'); break;
    default:console.log('일치하는 값 없음.');
}
//=============================================
let b = 10
let c = 5
let total = b>c //if(b>c){참일경우}else{거짓일경우}
switch(total){
    case true:console.log('참'); break;
    case false:console.log('거짓'); break;
    default:console.log('잘못된 접급입니다.');
}
//===============================================
/* 쇼핑몰에서 과일을 검색하면 판매가를 표시해줍니다.
딸기는 1000원 수박은 5000원 오렌지는 2000원이 출력되고
다른 과일을 작성한다면 판매하지 않는 상품입니다 라는 문구가 출력되게 하기 */

/* let order = window.prompt('구매하실 과일을 입력해주세요')
switch(order){
    case '딸기':window.alert('딸기는 1000원입니다.'); break;
    case '수박':window.alert('수박은 5000원입니다.'); break;
    case '오렌지':window.alert('오렌지는 2000원입니다.');
    default:window.alert('판매하지 않는 상품입니다.');
} */
//===============================================
/* 두개의 수가 저장된 변수를 저장하고
연산법을 사용자가 직접 정할 수 있는 변수를 제작하세요.
사용자가 입력한 값과 계산번에 따라서 두 개의 수가 계산되는
간단한 계산기 만들기 */
/* let num1 = window.prompt('첫번째 숫자를 입력해주세요')
let num2 = window.prompt('두번째 숫자를 입력해주세요')
let math = window.prompt('원하는 연산법을 입력해주세요')
switch(math){
    case '+':window.alert(`결과는 ${num1+num2}입니다.`); break;
    case '-':window.alert(`결과는 ${num1-num2}입니다.`); break;
    case '*':window.alert(`결과는 ${num1*num2}입니다`); break;
    case '/':window.alert(`결과는 ${num1/num2}입니다`); break;
    case '%':window.alert(`결과는 ${num1%num2}입니다.`); break;
    default:window.alert('잘못된 입력방법입니다.')
} */
//--------------------------------------------------------
/* let num1 = window.prompt('첫번째 숫자를 입력해주세요')
let num2 = window.prompt('두번째 숫자를 입력해주세요')
let math = window.prompt('원하는 연산법을 입력해주세요')
let result
switch(math){
    case '+':result = num1+num2; break;
    case '-':result = num1-num2break; break;
    case '*':result = num1*num2; break;
    case '/':result = num1/num2; break;
    case '%':result = num1%num2; break;
    default:'잘못된 입력방법입니다.'
}
window.alert(`결과는${result}입니다.`) */
//==================================================
/* 경품 추첨기를 만들어봅시다.
특정값을 변수에 저장하고 1이 나오면 당첨! 냉장고
2가 나오면 당첨! 세탁기 3이나오면 당첨! tV 이 외의 모든 숫자는 꽝이 나오게 해주세요 */
let lucky = window.prompt('응모번호를 입력해주세요')
let result
/* if(lucky == 1){
    result = '당첨! 냉장고'
}else if (lucky == 2){
    result = '당첨! 세탁기'
}else if (lucky == 3){
    result = '당첨! TV'
}else{
    result = '꽝'
} 
console.log(result) */
switch(lucky){
    case '1':result='축 당첨! 냉장고'; break;
    case '2':result='축 당첨! 세탁기'; break;
    case '3':result='축 당첨! TV'; break;
    default:result = '꽝! 다음기회에...';
}
window.alert(result)