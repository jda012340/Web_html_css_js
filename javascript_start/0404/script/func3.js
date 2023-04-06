const result = document.querySelector('#result')

function fun1(a){//1.매개변수 a생성
    console.log(a)//3.값이 대입된 매개변수를 전달 후 출력 (console에 a변수가 가진 값을 알려줘라.)
}
fun1(10)//2.매개변수a에 10값 대입
// ==================================================
// function func(a,b){a,b
    // CSSConditionRule.log('출력'
    // )
//'}
// function japangi(drink){
//     console.log(`${drink} 출력`)
// }
// japangi('콜라')
// japangi('사이다')
// japangi('커피')
// function japangi(drink, num){
//     console.log(`${drink} ${num}개 출력`)
// }
// japangi('콜라',2)
// japangi('사이다',2)
// japangi('커피',10)
//===================================
function dan99(num){
    result.innerHTML = `${num}X1=${num*1}<br>`
    result.innerHTML += `${num}X2=${num*2}<br>`
    result.innerHTML += `${num}X3=${num*3}<br>`
    result.innerHTML += `${num}X4=${num*4}<br>`
    result.innerHTML += `${num}X5=${num*5}<br>`
    result.innerHTML += `${num}X6=${num*6}<br>`
    result.innerHTML += `${num}X7=${num*7}<br>`
    result.innerHTML += `${num}X8=${num*8}<br>`
    result.innerHTML += `${num}X9=${num*9}`
}
dan99(2)
dan99(3)
dan99(4)
dan99(5)
dan99(6)
dan99(7)
dan99(8)
dan99(9)
//========================================
const cat = {
    name:'쿠키',
    birthday:'12/25',
    birth:function(){
        return `${cat.name}야 ${cat.birthday} 생일축하해`
    }
}
console.log(cat)
console.log(cat.birth())