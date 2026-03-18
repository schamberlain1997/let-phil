// 08 – FUNCTIONS (Homework)
// ----------------------------------------------

// Homework focus:
// - practice writing small functions
// - practice parameters + return
// - practice arrow functions
// - practice callbacks (just a little)
//
// ==============================================
// TASK 1 – “MAKE A MACHINE” (RETURN A VALUE)
// ==============================================
//
// STEP 1: Create a function named doubleNumber.
//         It takes ONE parameter: n
//         It returns n * 2
//
// STEP 2: Test it 3 times with console.log.
//         Use labels so it’s clear.
//
function doubleNumber(n){
    return n * 2
}

console.log(`Double of 4: ${doubleNumber(4)}`)
console.log(`Double of 6: ${doubleNumber(6)}`)
console.log(`Double of 53: ${doubleNumber(53)}`)

// ==============================================
// TASK 2 – “GUARDRAIL” (IF / ELSE INSIDE A FUNCTION)
// ==============================================
//
// STEP 3: Create a function named canWatchMovie.
//         It takes ONE parameter: age
//
// STEP 4: Inside the function:
//         - If age is 13 or higher, return "Allowed ✅"
//         - Else, return "Not allowed ❌"
//
// STEP 5: Test it with ages like 10, 13, 17.
//

function canWatchMovie(age){
    if (age >= 13) {
        return "Allowed ✅"
    }
    else {
        return "Not allowed ❌"
    }};

console.log(`10 Years Old ${canWatchMovie(10)}`)
console.log(`13 Years Old ${canWatchMovie(13)}`)
console.log(`17 Years Old ${canWatchMovie(17)}`)
// ==============================================
// TASK 3 – DEFAULT PARAMETER (OPTIONAL INPUT)
// ==============================================
//
//  Sometimes you want a “backup value” if the user didn’t pass anything.
//
// STEP 6: Create a function named greet.
//         It takes ONE parameter: name
//         If no name is provided, it should default to "friend"
//
// STEP 7: Return a string like: "Hello, <name>!"
//
// STEP 8: Test greet() with:
//         - greet("Maya")
//         - greet()   (no argument)
//
function greet(name) {
   if (name === undefined){
        return "Hello, friend"
   } 
   else {return `Hello, ${name}`
}}

console.log(greet())
console.log(greet("Maya"))
// ==============================================
// TASK 4 – ARROW FUNCTION PRACTICE
// ==============================================
//
// STEP 9: Create an arrow function named subtract.
//         It takes two parameters: a and b
//         It returns a - b
//
// STEP 10: console.log subtract with a few tests.
//
const subtract = (a,b) => {
    return a - b
}
console.log(`5-3=${subtract(5,3)}`)
console.log(`3-5=${subtract(3,5)}`)
console.log(`91-42=${subtract(91,42)}`)


// ==============================================
// TASK 5 – CALLBACK MINI (FUNCTION AS AN ARGUMENT)
// ==============================================
//
// STEP 11: Create a function named doMath.
//          It takes THREE parameters:
//          - numberA
//          - numberB
//          - operation (this will be a FUNCTION)
//
// STEP 12: Inside doMath:
//          return operation(numberA, numberB)
//
// STEP 13: Call doMath twice:
//          - once with an add operation
//          - once with a multiply operation
//
//  Hint: You can pass arrow functions like:
// (x, y) => x + y
//

const doMath = (numberA, numberB, operation) => {
    return operation(numberA, numberB)
}

console.log(`5+4=${doMath(5, 4, (numberA, numberB)=>numberA + numberB)}`)
console.log(`9*2=${doMath(9, 2, (numberA, numberB)=>numberA * numberB)}`)


// ==============================================
// TASK 6 – “REAL LIFE” MINI: TAX CALCULATOR
// ==============================================
//
// STEP 14: Create a function named addTax.
//          It takes two parameters:
//          - price
//          - taxRatePercent  (example: 16 for 16%)
//
// STEP 15: Convert the taxRatePercent into a decimal rate.
//          Example: 16% becomes 0.16
//
// STEP 16: Return the final price WITH tax included.
//
// STEP 17: Test with console.log:
//          addTax(100, 16)
//          addTax(59.99, 8)
//
const addTax = (price, taxRatePercent)=>{
    const taxRate = taxRatePercent * .01;
    const finalPrice = price + (price * taxRate)
    return `$${(finalPrice).toFixed(2)}`;
}

console.log(addTax(100, 16))
console.log(addTax(59.99, 8))
console.log(addTax(421.42, 7.3))