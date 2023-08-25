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
// closure - basically an inner function that can access the outer function defined variables
// -- can be accessed by statements in the outer function
// -- outer function cannot access the arguments and variables in the inner function
function outer(x) {
    function inner(y) {
        return x + y
    }
    return inner 
}
const outerReturn = outer(10) // basically creating a new function that will take 10 as the default value of x
console.log(outerReturn)
outerReturn
console.log(outerReturn(2))
// find more info about closures

/**10. Callback functions */
// call the function back at some point in tim
// in js function is a first class citizen, can pass a function as a parameter into another function
// let itsNight = true
// let isDinksOverCheckOnLine = false
// function bar(){
//     console.log('bar')
// }
// function foo(bar) {
//     bar();
// }

// function foo(bar) {
// 	bar();
// }

// foo()
// // callback functions in nodejs are different than just vanilla js
// function named() {
//     console.log('bar')
// }

// foo(named)

// function foo(bar) {
// 	if(itsNight) {
//   bar();
//   }
//   if(isDrinksOverCheckOnline){
//   bar()
//   }
// }
// none of the above works in nodejs, copy/paste it in jsfiddle.net to see how it works
// basically callback functiosn take a function as an argument.

/**11. High Order Functions (HOF) */
// HOF takes one or more functions as an argument
// -- it may return a function
// -- relationship between HOF and callback function
// -- callbacks do not necessarily return a function
// HOF can return a function

function getCapture(camera) { // example of a HOF because it returns a function
    camera()
}

getCapture(function() {
    console.log('Canon')
})

function returnFn() {
    return function() {
        console.log('returning')
    }
}

const fn = returnFn()
fn()
// array functions are HOF
let array = [1,2,3]
const array_mod = array.filter((elem) => elem > 1)
console.log(array_mod)

/**12. Pure Functions */
// pure function produces the same output for the same input
// predictable

// function sayGreeting(name) { // initial function definition
//     return `Hello ${name}`
// }
console.log(sayGreeting('Tapas'))

// let greeting = "hello"; // initial greeting declaration

function sayGreeting(name) {
    let greeting = 'hola'

    return `${greeting} ${name}`
}
console.log(sayGreeting('Tapas'))

// side effect - variable otuside of the scope of the function
// -- causes function to no longer produce the same output for the same input

/**13. Immediately Invoked Function Expression (IIFE) */
// code in the function is immediately executed when it is defined
// (function () {
//     console.log('iife function')
// })() // this function runs immediately after declaration, but does not seem to work in node...

/**14. Function Execution Stack (1st step in call stack)*/
// call stack and function execution stack can be the same (reverse in picture format)

/**15. Recursion */
// a function that refers or calls itself
function foo3() {
    console.log('foo')
    foo3() // it is suppose to constantly console log foo until you get the "max call stack size exceeded"
}

const foo4 = function buz() { // example of recursion because you are referring to the foo function with foo or buz
    foo4()
}

// whenever you use recursion you need to have a base condition or a condition when you stop the recursion

// function recurse() {
//     if(base_condition) {
//         // do something
//         return
//     }
//     recurse()
// }
// let count = 100 // already declared further up in file
function fetchWater(count) { // similar to a for loop
    if (count === 0) {
        console.log('No more Water left!')
        return
    }
    console.log('Fetching water...', count)
    fetchWater(count -1)
}
fetchWater(100) // always remember to call the function!