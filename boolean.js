let x = true

//OPERATOR
x = !x //create new value based on x's value
let y = !x //modify x's value

let myBool = 5 == 6
// false
let myOtherBool = 6 == 6
//true
let myBool3 = 6 < 4
//false
let myBool4 = 7 <= 9
//true
let myBool5 = 7 != 9
//true
let myBool6 = 9 != 9
//false

let myVar = 5 //can be calculted from function, can come from server (fetch), can come from user interaction(event
let myCondition = myVar == 3
// false - can be true or false based on event/whatever

let threeAsString = "3"
let threeAsNumber = 3
console.log(threeAsString == threeAsNumber) //true
console.log(threeAsString === threeAsNumber) //false

let bool10 = 3 > 2 && 1 > 3 // AND
//false

let bool11 = 3 > 4 || 1 > 0 // OR
//true

// BUILT-IN methods not really...