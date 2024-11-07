// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 == 1)
// console.log(2 < 1)
// console.log(2 != 1)


// console.log("2" > 1);
// console.log("02" > 1)

// avoid the below comparisons.
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

console.log(undefined > 0) //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false

console.log(undefined > null) //false
console.log(undefined == null) //true
console.log(undefined >= null) //false

// === strict check; no conversation and checks for the same datatype too
// == allows conversion

console.log("2" === 2) //false
console.log("2" == 2) //true
