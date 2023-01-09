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

// function currying
// method 1
var multiply = function(x,y){
    console.log(x*y)
}
var multiplyByTwo = multiply.bind(this,2)
multiplyByTwo(6)

// method 2 using closures
var product = function(x){
    return function(y){
        console.log(x*y)
    }
}
var ans = product(2)
var ans2 = product(5)
ans(5)
ans2(10)