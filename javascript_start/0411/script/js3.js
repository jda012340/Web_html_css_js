const li = document.querySelectorAll('#list li')
console.log(li)

//개별 li에 마우스 올릴 시 ㅂㅐ경색 변경
//개별 li에 마우스 나갈시 배경 제거

for(let i of li){
    i.addEventListener('mouseover',()=>{
        i.style.background = '#ff0'
    })
    i.addEventListener('mouseout',()=>{
        i.style.background = 'none'
    })
}

// for(let i of li){
//     li[i].addEventListener('mouseover',()=>{
//         li[i].style.background = '#ff0'
//     })
//     li[i].addEventListener('mouseout',()=>{
//         li[i].style.background = 'none'
//     })
// } 
//==>>>> XXXXXXXXXXX


/* li[0].addEventListener('mouseover',()=>{
    li[0].style.background = '#ff0'
})
li[0].addEventListener('mouseout',()=>{
    li[0].style.background = 'none'
})
li[1].addEventListener('mouseover',()=>{
    li[1].style.background = '#ff0'
})
li[1].addEventListener('mouseout',()=>{
    li[1].style.background = 'none'
})
li[2].addEventListener('mouseover',()=>{
    li[2].style.background = '#ff0'
})
li[2].addEventListener('mouseout',()=>{
    li[2].style.background = 'none'
}) */