//forEach, for~in, for~of
let study = ['html','css','js','jq','sass','git']
//se5 for
for(let i=0; i<study.length; i++){
    console.log(study[i])
}
//es6 for~of : 객체값에 순차적으로 접근하는 for문
for(let i of study){
    console.log(i, study) // study를 i에 담으면서 i라는 for문의 변수가 알아서 접근해서 출력해줌.
}

//es6 for~in 객체 인덱스에 순차적으로 접근하는 for
for(let i in study){
    console.log(i)
}

//es6 forEach 객체의 인덱스, 값에 모두 접근하는 for
study.forEach((value,index)=>{ //매개변수는 의미에만 맞게 쓰면 어떤 이름이든 사용O
    console.log(value,index)
})

//---------------------------------------------------------------------------
//li태그에 접근해서 객체값, 인덱스를 추출하는 JS
let li = document.querySelectorAll('#list li')
//for ~ in
for(let i in li){console.log(i)} //해석:index와 객체의 부가정보까지
//for ~of 
for(let i of li){console.log(i, li)} //해석:li태그의 값을 가져온다.
//forEach
li.forEach((value,index)=>{console.log(value,index)}) //해석:index만
//--------------------------------------------------------------------------
//객체와 for~in
let cat = {
    color:['white','black','red','yelloW'],
    age:5,
    name:'cookie'
}
for(let i in cat){console.log(i,cat[i])} //cat의 속성정보가 나열됨.
let user = {
    name:'홍길동',
    age:20,
    id:'hong',
    pw:'1234',
    lang:'ko-kr'
}
console.log(user)
const result = document.querySelector('#result')
for(let i in user){
    // console.log(i,user[i])
    result.innerHTML += `${i} : ${user[i]}<br>`
}