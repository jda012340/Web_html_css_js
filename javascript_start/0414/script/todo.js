//1.오늘의 할 일 작성하고 추가하기 누르면 콘솔창에 작성한 내용 출력하기.
//2. 할일 입력 안하고 추가누르면 '할일을 ㅇㅂ력하세요' 안내메세지 출력
//3. 기존 태그 li의 다음위치에 <li>할일</li>값 출력
const todo = document.querySelector('#list')
const addBtn = document.querySelector('#list_add')
const list_wrap = document.querySelector('#list_wrap')
console.log(todo, addBtn)

let made_todo

// addBtn.addEventListener('click',()=>{
//     // console.log(this)
//     if(todo.value == ""){
//         window.alert('할일을 입력하세요')
//     }
//     else{
//         console.log(todo.value)
//         made_todo = document.createElement('li')
//         made_todo.innerHTML = todo.value+'<button type="button" class="close">X</button>'
//         list_wrap.appendChild(made_todo)
//         todo.value = ""
        
//         const todoDel = document.querySelectorAll('.close')
//         for(let i of todoDel){
//             console.log(close)
//             i.addEventListener('click',()=>{
//                 i.parentNode.remove()
//             })
//         }
//     }
// })

addBtn.addEventListener('click',()=>{
    // console.log(this)
    if(todo.value == ""){
        window.alert('할일을 입력하세요')
    }
    else{
        console.log(todo.value)
        made_todo = document.createElement('li')
        made_todo.innerHTML = '<input type="checkbox" class="check"></input>'+todo.value+'<button type="button" class="close">X</button>'
        list_wrap.appendChild(made_todo)
        todo.value = ""
        
        const todoDel = document.querySelectorAll('.close')
        for(let i of todoDel){
            console.log(close)
            i.addEventListener('click',()=>{
                i.parentNode.remove()
            })
        }
    }
})

// addBtn.addEventListener('click',()=>{
//     // console.log(this)
//     if(todo.value == ""){
//         window.alert('할일을 입력하세요')
//     }
//     else{
//         console.log(todo.value)
//         made_todo = document.createElement('input')
//         made_todo.type = 'checkbox'
//         console.log(made_todo.value)
//         // made_todo.value = todo.value
//         list_wrap.appendChild(made_todo)
//         todo.value = ""
//     }
    
// })