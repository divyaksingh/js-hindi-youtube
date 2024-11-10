const name = "divya"
const repoCount = 4

// console.log(name + repoCount + "Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("DivyaKSingh-DS-com") // 2nd way of defining string.//

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("K"))

const newString = gameName.substring(0, 4) //last char is not included in the result. 
// so only from 0 to 3.

// console.log(newString)

const anotherString = gameName.slice (-13, 4)
// console.log(anotherString)

const newStringOne = "   dIvya   "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20", " -"))

console.log(url.includes("divya"))

const newGameName = gameName.split('-')
console.log(newGameName)
console.log(gameName.split('-'))