//li에 마우스를 올리면 그 안에 sub가 나오도록 Node관계이용
/* 
    모든 서브 숨기기
    gnb 자식 li에 마우스를 올리면 자식 snb 보이기(Node관계처리)
    gnb 자식 li에서 나가면 자식 snb 숨기기
*/
const sub = document.querySelectorAll('.snb')
const li = document.querySelectorAll('.gnb > li')
console.log(sub,li)



// for(let i of sub){
//     i.style.height = '0'
//     i.style.overflow = 'hidden'
//     i.style.transition = 'all 0.5s'
//     i.addEventListener('mouseover',()=>{
//         // j.children[1].style.display = 'block'
//         i.children[1].style.height = '300px'
//     })
//     i.addEventListener('mouseout',()=>{
//         // j.children[1].style.display = 'none'
//         i.children[1].style.height = '0'
//     })
// }

for(let i of sub){
    i.style.height = '0'
    i.style.overflow = 'hidden'
    i.style.transition = 'all 0.5s'
}

for (let i of li){
    i.parentElement.nextElementSibling.style.height = '0'
    i.parentElement.nextElementSibling.style.transition = 'all 0.5s'
    i.addEventListener('mouseover',()=>{
        for(let j of sub){
            j.style.height = '300px'
            j.parentElement.parentElement.nextElementSibling.style.height = '300px'
        }
    })
    i.addEventListener('mouseout',()=>{
        for(let j of sub){
            j.style.height = '0'
            j.parentElement.parentElement.nextElementSibling.style.height = '0px'
    }
    })
}