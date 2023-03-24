// const h1 = document.getElementsByTagName('h1')
// const sub_title = document.getElementsByClassName ('sub_title')
// const h3 = document.getElementsByTagName ('h3')
// const p = document.getElementsByTagName ('p')
// const main = document.getElementById ('main')
// const btn = document.getElementById ('btn')
// const link = document.getElementById ('link')

// console.log(h1)
// console.log(sub_title)
// console.log(h3)
// console.log(p)
// console.log(main)
// console.log(btn)
// console.log(link)

//var vs let const
// ES버전. 바의 단점을 렛과 콘스트가 보완
// getElementById, ByTagName, ByClassName => ES5이전버전 DOM
const box_h4 = document.querySelector('.box > h4')
const h1_tag = document.querySelector('h1')
const h1_after = document.querySelector('h1::after')
const h2_cls = document.querySelectorAll('.sub_title')
const h3_tag = document.querySelector('h3')
const p_tag = document.querySelectorAll('p')
const main_id = document.querySelector('#main')
const btn_id = document.querySelector('#btn')
const link_id = document.querySelector('#link')

// 객체.style.css속성 = '속성값'
// h1_after.style.content = 'ABC'
// h1_after.style.backgroundColor = '#ff0'

console.log(box_h4)
console.log(h1_tag)
console.log(h1_after)
console.log(h2_cls[1])
console.log(h3_tag)
console.log(p_tag)
console.log(main_id)
console.log(btn_id)
console.log(link_id)

