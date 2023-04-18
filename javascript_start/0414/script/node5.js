//노드생성,제거
// DOM.createElement(노드생성)
// DOM.remove()
// DOM.removeChild(자식노드)
const p = document.querySelectorAll('p')
const box = document.querySelector('#box')

// p[0].remove()
p[2].remove()
box.removeChild(p[0]) //box안의 자식 첫번째 p를 지운다.

let img = document.createElement('img')
img.alt = '연습 이미지'
// img.src = '이미지의 경로'
console.log(img)

let pTag = document.createElement('p')
pTag.classList.add('a')
pTag.innerHTML = 'p태그 생성'
console.log(pTag)
box.appendChild(pTag)

// creatElement = 생성
// cloneNode = 복붗