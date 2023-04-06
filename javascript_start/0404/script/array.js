let study = ['html','css','js','jq','sass','git']
let device = ['desktop','tablet','mobile','tv']
let weather = ['맑음','비','눈','흐림','태풍']
let num = 0
console.log(study,device,weather,num)//6,4,5
// ---------------------배열 속성 및 메서드()
console.log(Array.isArray(study)) // true
console.log(Array.isArray(device))
console.log(Array.isArray(weather))
console.log(Array.isArray(num)) // false
// ---------------------
// console.log(study.pop())
// console.log(study)
// console.log(study.pop())
// console.log(study)
// ---------------------
console.log(study.shift()) // html 제거
console.log(study)
study.unshift('html5') // html 추가
console.log(study)
study.pop()
console.log(study)// git 제거
study.push('gitHub') // gitHub 추가
console.log(study) 
console.log('-----------------------') 
// study.concat(device)
console.log(study.concat(device))
console.log(device.concat(study))
console.log('--------------------')
study.reverse()
console.log(study)
device.sort()
console.log(device)
console.log('----------------------')
// weather = ['맑음','비','눈','흐림','태풍']
console.log(weather.slice(0,2)) //맑음 비
console.log(weather.slice(1,3)) //비, 눈
console.log(weather.slice(0,-1)) // '맑음', '비', '눈', '흐림'
console.log(weather.slice(0))
console.log(weather.slice(2))
console.log(weather.slice(-1))
console.log('----------------------')
// weather.splice(0,2) // 눈 흐림 태풍
// weather.splice(0,1) // 비 눈 흐림 패풍
weather.splice(0,1,'sunny')
console.log(weather)
console.log('----------------------')
let yoil = ['월','화','수','목','금','토','일']
console.log(yoil.join('요일'))
yoil.push('')
console.log(yoil.join('요일'))

console.log('----------------------------------------')

// let color = ['pink','blue','yellow','green','red']

