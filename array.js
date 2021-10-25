let myArray = [ 1, 2, 3]
let myArray2 = ["1th", "2nd", "3nd"]
let myArray3 = [[1, 2, 3], [ 4, 5, 6]]
let newArray = new Array("red") //creates a new array with one element "red"
let emptyArray = [] //empty array
// an array can hold numbers, strings, booleans

// ACCESS
let elem = myArray[0] //first element of the list
let elem2 = myArray[myArray.length - 1] // last element of the list
let elem4 = myArray3[1][2] // two-dimensional list
// in this case myArray3[2nd list][2nd element]

// OPERATORS and BUILT-IN methods (" musthave", "good-to-know", STACKOVERFLOW!!!)

let w = myArray.length //calls all element of an array, do not need to specify the size

// let x = myArray.forEach() //calls a function for each element in the array

myArray.push("BELA") //gives an item to the end of an array

myArray.pop() //removes the last item from the end 

myArray.shift() // removes an item from the beginning of an array

myArray.unshift("bELA") //add an item to the beginning of an array

let indexOfItemInArray =myArray2.indexOf('2nd') //find the index of an item in the Array

let pos = 1 // first position myArray[0]

let removedItem = myArray.splice(pos,1) //remove 1 item by index position [1]
console.log(removedItem)

let n = 2 // number of items to be removed
let removedItems = myArray.splice(pos, n) // removing items from an array, starting at index toward the end

let myCopiedArray = myArray.slice() // copy an array

array.sort() // sorts the elements of an array, and returns the sorted array
// the default sort order is ascending

array.reverse() //reverses an array, the first element becomes the last, and the last element becomes the first.

array.join() //creates and returns a new string by concatenating all of the elements in an array
// () - here comes how to separate the elements - (), (""), (" "), ("-")