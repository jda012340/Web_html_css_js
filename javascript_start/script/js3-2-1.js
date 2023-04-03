const btn = document.querySelectorAll('.btn')
const result = document.querySelector('#result')
console.log(btn,result)
const today = {
    weather:['맑음','비옴','흐림','눈옴','태풍'],
    rain:['10%','20%','30%','40%','50%'],
    wind:['1.4m/s','2.4m/s','3.4m/s','4.4m/s','5.4m/s'],
    moisture:['5%','15%','25%','35%','45%']
}
btn[0].addEventListener('click',function(){
    console.log(this)
    result.innerHTML = today.weather[0]
})
btn[1].addEventListener('click',function(){
    console.log(this)
    result.innerHTML = today.rain[1]
})
btn[2].addEventListener('click',function(){
    console.log(this)
    result.innerHTML = today.wind[2]
})
btn[3].addEventListener('click',function(){
    console.log(this)
    result.innerHTML = today.moisture[1]
})
