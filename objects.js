let myObject = {name: "Kazmer", age: 25}
let myObject2 = {name: "Arnold", age: 3}

// ACCESS
let x = myObject.age // objectName.propertyName
let y = myObject.hobby // undefined, it is an unassigned property
y = myObject[1]

function sayHi() {
  console.log('Hello, my name is', this.name)
} //.this can be used within a method to refer to the current object

// OPERATOR

myObject.hobbi = "football" //add a new key value to an object

myObject2.name // removes the .name property, leaving only the .age in this case

myObject.forEach() //calls a function for each element in the object

// BUILT-IN methods (" musthave", "good-to-know", STACKOVERFLOW!!!)

delete myObject2.age // removes a property from an object