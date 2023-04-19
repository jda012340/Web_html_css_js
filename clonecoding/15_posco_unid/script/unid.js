const h_bg = document.querySelector('#h_bg')
const gnb = document.querySelectorAll('#h_bg .gnb > li')
const nav_bg = document.querySelector('#h_bg .nav_bg')
const sub = document.querySelectorAll('#h_bg .gnb .sub')
console.log(h_bg,gnb,nav_bg,sub)


/* nav_bg.style.height = '0'
// sub.style.height = '0'
// sub.style.overflow = 'hidden'
for(let i of sub){
    i.style.height = '0'
    i.style.overflow = 'hidden'
}

for(let i of gnb){
    i.addEventListener('mouseover',()=>{
        for(let j of sub){
            j.style.transition = 'all 0.5s'
            j.style.height = '0'
            j.style.overflow = 'hidden'
            j.style.height = '80vh'
        }
        nav_bg.style.height = '80vh'
        h_bg.style.backgroundColor = 'white'
    })
    i.addEventListener('mouseout',()=>{
        for(let j of sub){
            j.style.height = '0'
            j.style.overflow = 'hidden'
            nav_bg.style.height = '0vh'
            h_bg.style.backgroundColor = 'rgba(255,255,255,0.5)'
        }
    })
    nav_bg.style.transition = 'all 0.5s'
    h_bg.style.transition = 'all 0.5s'
} */



//쉽게 하는 법

//1. 모두 숨기기
sub_func('0')

//2. gnb 마우스 오버시 sub, sub_bg 보이기
for(let i of gnb){
    nav_bg.style.transition = 'all 0.7s'
    for(let i of sub){i.style.transition = 'all 0.7s'}
    i.addEventListener('mouseover',()=>{
        sub_func('80vh')
        h_bg.style.backgroundColor ='#fff'
        i.children[0].style.color = 'green'
        i.children[1].style.backgroundColor = '#eee'
    })
    i.addEventListener('mouseout',()=>{
        sub_func('0')
        h_bg.style.backgroundColor ='rgba(255,255,255,0.5)'
        i.children[0].style.color = '#000'
        i.children[1].style.background = 'none'
    })
}




function sub_func(value){
    nav_bg.style.height = value
    for(let i of sub){i.style.height = value}
    for(let i of sub){i.style.overflow = 'hidden'}
}