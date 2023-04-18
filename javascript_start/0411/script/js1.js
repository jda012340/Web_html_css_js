let array = new Array(1,2,3,'H','e','1','1','o')
for(let i=0; i<=array.length-1; i++){ //i<=array.length-1; = i<array.length;
    console.log(array[i])
    console.log(typeof array[i])
}

let num = 0
for(let i=0; i<5; i++){
    num += i //num=num+i
//기존 num변수에 i를 복합대입해라. 기존 num변수에 i를 증가하여 대입해라.
}
console.log(num) //10=(0+0)=>(0+1)=>(1+2)=>(3+3)=>(6+4)

let num1 = 0 
for(let i=0; i<5; i++){
    if(i%2==0){num1+=i}
}
console.log(num1) //6

let num2 = 0 
for(let i=0; i<5; i++){
    if(i%2==0)
    continue; //continue가 있으면 그 다음구문을 실행하지 않음. 그리고 다시 처음으로 
    num2+=i
}
console.log(num2) //0 증가 되는 것을 무시함. 결국 num2에 아무런 대입이 이뤄지지 않음 

let num3 = 0 
for(let i=0; i<5; i++){
    if(i%2==0){
        continue;
        num3+=1
    }else{break;}
}
//break는 강제로 나간다. 조건이 참이든 거짓이든. => 오류가 났을 때 종료한다. 이런식으로 사용

let num4 = 0
for(let i=0; i<10; i++){
    num4 += i
    continue;
    console.log(num4,1)//for가 한 번 돌 때마다 읽는 console
}
console.log(num4)//for가 종료된 최종결과를 읽는 console

let num5 = 0
for(let i=1; i<10; i++){
    num5 += i
    break;
    console.log(num5,1)
}
console.log(num5) //1 = for를 한 번 실행하고 break를 만나 강제종료.

//다중 for ====================================================================
for(let i=1; i<3; i++){
    //2단for : 1단 for가 한 번 루프할 때 2단 for는 거짓이 될 때까지 루프
    for(let j=0; j<3; j++){
        console.log(`i=${i}, j=${j}`)
    }
}

for(let i=3; i>=0; i--){ //i가 3이고 i가 0이 될 때가지 감소한다.
    for(let j=0; j<3; j++){
        console.log(`i=${i},j=${j}`)
    }
}

//다중 for 활용 태그 생성-------------------------------------------------------
let p_tag = '<p>test</p>'
let li = '<li>list</li>'
for(let i=0; i<5; i++){
    document.write(p_tag) //html에 p를 생성
}

for(let i=0; i<2; i++){
    document.write('<ul>')
    for(let j=0; j<5; j++){
        document.write(li)
    }
    document.write('</ul>')
}

//다중 for 1행 3열 표 2개만들기 --------------------------------------------------
let td = '<td>cell</td>'
let tableT = document.querySelectorAll('.tableTest')
for(let i=0; i<2; i++){
    document.write('<table class=tableTest border=1>')
    for(let j=0; j<1; j++){
        document.write('<tr>')
        for(let k=0; k<3; k++){
            document.write(td)
        }
        document.write('</tr>')
    }
    document.write('</table>')
    // tableT[i].style.margin = '10px'
    console.log(this)
}
// let table = document.querySelector('.tableTest')
//다중 for를 활용한 영화관 좌석 만들기=================================================
let seat = 1
let number = ['A','B','C','D']
for(let i=0; i<1; i++){
    document.write('<table border="1">')
    for(let j=0; j<4; j++){
        document.write('<tr>')
        document.write(`<td>${number[j]}</td>`)
        for(let k=0; k<4; k++){
            if(seat>4){seat=1}
            document.write(`<td>${seat++}</td>`)
        }
        //seat=1
        document.write('</tr>')
    }
    document.write('</table>')
}
//무한반복 while ==================================================================
for(let i=0; i<10; i++){
    console.log(i)
}

let i = 0
while(i<10){
    console.log(i)
    i++
}

//점심시간이에요?===========================================================================
let qa = confirm('점심시간이에요?')
while(qa!=true){
    qa = confirm('점심시간이에요?')
}
alert('밥먹자!!!!!!!!!')