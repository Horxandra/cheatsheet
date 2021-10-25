let x = "bela"

//OPERATOR
let y = x + "kovacs"
// y's value is "belakovacs" now

let z = x * 3
// z's value is "belabelabela" !!! IS NOT WORKING - z's value is NaN

otherDna += "A" // gives to an already existing variable an "A" string

// BUILT-IN METHODS:
let a = x.repeat(3)
// "belabelabela"

let b = x.split("").reverse().join
// [ "b", "e", "l", "a"]

// !!! STACKOVERFLOW!!! 
var c = [x.slice(0,2), x.slice(2)].join('')
console.log(c)

s.split(" ") // it divides a string  into an ordered list of substrings, puts them into an array, and returns the array
// ("") - here comes where to split the string