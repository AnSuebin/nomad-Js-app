const rawInput = prompt('태어난 해를 입력해주세요', '')
const year = Number(rawInput)
const tti = '원숭이, 닭, 개, 돼지, 쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양'.split(
  ','
)

console.log(`${year}년에 태어났다면, ${tti[year % 12]}띠입니다.`)
