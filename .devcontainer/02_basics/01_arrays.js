// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shakitman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0]);


// Array methods

// myArr.push(6) // add the element in the end of array
// myArr.pop() // removes the last element in the array

// myArr.unshift(8) //adds element 8 at the 0th position. Makes everything shift to right.
// myArr.shift() // removes the first element that is at the 0th position. No need to specify element number.

// console.log(myArr.includes(9)) //if element 9 is included in the array or not. output is T/F
// console.log(myArr.indexOf(3)) //index of the element 3. If the element is not included in the array, output is -1.

// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof (newArr))


// slice, splice

console.log("A", myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C", myArr)