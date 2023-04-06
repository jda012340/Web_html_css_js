//변수====================================
// 1. KR
const kr_lnb = document.querySelector('header .topR>li:first-child>a')
const kr_lnb_open = document.querySelector('header .topR .lang')
// 2. 전체메뉴+닫기
const all_nav = document.querySelector('header .topR>li:last-child>a')
const all_nav_open = document.querySelector('header .all_nav')
const all_nav_close = document.querySelector('.close')
// 3. ACC gnb + sub
const nav_acc = document.querySelectorAll('nav>ul>li')
const nav_acc_sub = document.querySelectorAll('nav>ul>li>.sub')
console.log(kr_lnb, kr_lnb_open)
console.log(all_nav, all_nav_open, all_nav_close)
console.log(nav_acc, nav_acc_sub)
//4. snb
const right_popup = document.querySelector('.right_popup')
const popup_btn = document.querySelector('#popup_btn>a:first-child')
//event======================================
//이벤트 전에 모두 숨기기
//객체.속성.속성 = 값 | 객체.style.display = 'none'으로
kr_lnb_open.style.display ='none'
all_nav_open.style.display = 'none'
nav_acc_sub[0].style.display = 'none'
right_popup.style.transform = 'translateX(500px)'
//2. 메뉴를 누르면 전체메뉴가 나오게 설정하기
all_nav.addEventListener('click',function(){
    all_nav_open.style.display = 'block'
})
//3. 닫힘 누르면 꺼지도록 하기
all_nav_close.addEventListener('click',function(){
    all_nav_open.style.display = 'none'
})
//4. mouseover/mouseout 적용하기
nav_acc[12].addEventListener('mouseover',function(){
    console.log(this)
    nav_acc_sub[0].style.display = 'block'
})
nav_acc[12].addEventListener('mouseout',function(){
    console.log(this)
    nav_acc_sub[0].style.display = 'none'
})
//5. lang 열렸다가 닫히기 적용
// kr_lnb.addEventListener('mouseover',function(){
//     kr_lnb_open.style.display = 'block'
// })
// kr_lnb.addEventListener('mouseout',function(){
//     kr_lnb_open.style.display = 'none'
// })
let kr_lnb_boolean = true
kr_lnb.addEventListener('click',function(){
    kr_lnb.style.transition = 'all 0.5s'
    if(kr_lnb_boolean){
        kr_lnb_open.style.display = 'block'
    }else{kr_lnb_open.style.display = 'none'}
    kr_lnb_boolean = !kr_lnb_boolean
})
//side popup메뉴열기
let popup_boolean = true //popup용 논리데이터
popup_btn.addEventListener('click',function(){
    right_popup.style.transition = 'all 0.5s'
    if(popup_boolean){
        console.log('보이기')
        right_popup.style.transform = 'translateX(0)'
    }else{
        console.log('숨기기')
        right_popup.style.transform = 'translateX(500px)'
    }
    popup_boolean = !popup_boolean
})