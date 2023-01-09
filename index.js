// using call method
var name1 = {firstName : "Virat", secondName : "Kohli"}
var printFullName = function(age){
    console.log(`${this.firstName} ${this.secondName}, ${age} years old`)
}
printFullName.call(name1,32)

// using apply method
var name2 = {firstName : "John", secondName : "Smith"}
var printDetails = function(age,profession){
    console.log(`${this.firstName} ${this.secondName}, ${age} years old, professional in ${profession}`)
}
printDetails.apply(name2,[28,'software enginering'])

// using bind method

var exeFunction = printDetails.bind(name1)
exeFunction(34,'cricketer')

// student object
var Student  = {age : 20}
var printAge = function(){
    console.log(this.age)
}
var display = printAge.bind(Student)
display()