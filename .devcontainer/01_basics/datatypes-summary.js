// Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol("123")
const anotherID = Symbol("123")

// console.log(id === anotherID)

const bigNumber = 2358845786030858234n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naajraj", "doga"]
let myObj = {
    name: "divya",
    age: "28",
}

const myFunction = function() {
    console.log("Hello Divya");
}

// console.log(typeof id)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "DivyaSingh"

let anotherName = myYoutubeName
anotherName = "KumariDivyaSingh"

console.log(anotherName)
console.log(myYoutubeName)

let userOne = {
    email: "lala@imail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hello@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)