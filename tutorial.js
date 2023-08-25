/** 1. What are and Why JS Functions */
// avoids repeating the same tasks again and again
// let's you run lines of code multiple times rather than copying code over and over
// reduce lines of code to run

/** 2. Clarifying Terminologies (functions vs methods, parameter vs arguments, and many more) */
// Declaration vs. definition - same thing, declaring and defining a function is creating a function with logic

function printMe() { // named function, function is keyword, printMe is name
    console.log('printing...')  // logic is writen between curly brackets
}

printMe() // calling the function

// passing a parameter to a function
function printThis(param) { // whatever you put in the parentheses is a parameter (parentheses/parameters, double p)
    console.log(param)
}

printThis('hello world') // actual value you are passing into the function as you call it is an argument

const count = 100 // expression

const printMeAgain = function(a, b) { // function as an expression
    console.log(a, b)
}

printMeAgain(10, 20) // passing arguments 10 and 20

/** 3. How to Return from a Function */
function x() {

}
let p = x() // pass the result of the function into a variable
// this is not defining p as a function becasue we have the defined function above with parentheses
function y() {
    p
}

function sum(a, b) {
    return a + b // can also declare a variable and then return that variable:
    // let ret = a + b
    return ret
}

console.log('sum function', sum(2,3))

/** 4. Default Parameters */
function calc(a, b=0) { // if someone does not pass a second argument, the function will default to 0
    return (2 * (a + b))
}

console.log('calc function', calc(2,3))
console.log('calc function with only one parameter', calc(3))

/** 5. Rest parameters */
// rest parameters allow a function to accept any number of parameters
function collectThings(x, ...y) { // use rest operator (rest because it is last parameter) to put in an array so you have infinite number of parameters
    console.log(x)
    console.log(y)
}

collectThings(1,2,3,4,5,6,7,8,9)

/** 6. Arrow Functions/Fat Arrow Syntax */
// const add = function(x,y) {
//     return x + y
// }

// convert to arrow function/fat arrow to write fewer lines of code. most functions in development are arrow functions
const add = (x,y) => x + y // don't need curly brackets or return function

console.log('arrow function add', add(2,4))

/** 7. Nested Functions */
// define a function within a function
// closure in functions = understanding of nested functions + function scope
function outer() {
    console.log('outer')
        function inner(){
            console.log('inner')
        }
    inner()
}

outer()

/** 8. Function Scope */
// define who can access what variables
// variables defined within the function cannot be accessed outside the function
// variables defined in the scope of the function (global variables) can be accessed by the function
// for nested functions:
// -- outer function cannot access variables defined within inner function, while inner functions can access the outer function variables
// -- (the scope it is defined in)

function doSomething() {
    let x = 10
    const y = 20
    var z = 30

    console.log(x,y,z)
}

doSomething()

// console.log(x)
// console.log(y)
// console.log(z) // cannot access z outside of the doSomething() function

let x2 = 10
var y2 = 20
let z = 30

function doSomething2() {
    console.log(x2, y2, z)
}

doSomething2()

/**9. Closures */
