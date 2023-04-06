const user = document.querySelectorAll('.box input')
console.log(user)
//input 마우스 커서를 올렸을 때(focus)
//이벤트 내에 function은 this대상을 DOM이벤트 객체로 인식하고
//화살표 함수는 this를 전역객체대상으로 인식하기 때문에
//정확하게 대상을 구분해서 작성해야 한다.
user[0].addEventListener('focus',function(){bg(this)})
user[1].addEventListener('focus',()=>{bg(user[1],)})
user[2].addEventListener('focus',()=>{bg(user[2])})
//함수
//선택된 창의 배경을 노란색으로
function bg(target){
    bg_none()
    return target.style.backgroundColor = '#ff0'
}
function bg_none(){
    user[0].style.background = 'none'
    user[1].style.background = 'none'
    user[2].style.background = 'none'
}
// 하트채우기 =======================================
const like = document.querySelector('.like img')
const idea = document.querySelector('.idea img')
console.log(like)
like.addEventListener('mouseover',()=>{like_on(like,'heart')})
like.addEventListener('mouseout',()=>{like_off(like,'heart')})
idea.addEventListener('mouseover',()=>{like_on(idea,'idea')})
idea.addEventListener('mouseout',()=>{like_off(idea,'idea')})
//함수생성 객체.src = '값'
function like_on(target,name){
    return target.src =`./images/${name}_on.png`
}
function like_off(target,name){
    return target.src = `./images/${name}_off.png`
}
