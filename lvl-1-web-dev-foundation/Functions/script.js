// function greet() {
//     console.log("Hello, welcome to javascript!");
// }

// greet(); calling the function

// function greetUser(name) {
//     console.log(`Hello, ${name}!`);

// }

// greetUser("Alice");
// greetUser("Bob");       
// greetUser("Charles");

// function addNumbers(num1, num2) {
//     console.log(`Sum: ${num1 + num2}`);
// }

// addNumbers(5, 10); // Outputs: Sum: 15
// addNumbers(20, 30); // Outputs: Sum: 50
// addNumbers(-5, 15); // Outputs: Sum: 10

// function addNumbers(num1, num2, num3) {
//     console.log(`Sum: ${num1 + num2 + num3}`);
// }

// addNumbers(5, 10, 15); // Outputs: Sum: 30

// function multiply(x, y) {
//     return x * y;
// }

// const result = multiply(4, 5);
// console.log(`Product: ${result}`); // Outputs: Product: 20

// const greet = function(name) {
//     return `Hello, ${name}!`;
// };

// console.log(greet("Diana")); // Outputs: Hello, Diana!

// Arrow Functions ( Shorter Syntax for Functions)

// const square = (num) => num ** 2;

// console.log(square(6)); // Outputs: 36

// const multiply = (a, b) => {
//     return a * b;
// } 

//or

// const multiply = (a, b) => a * b;

// console.log(multiply(8, 8)); // Outputs: 56

//Function Scope and Hoisting

// let globalVar = "I am a global variable";

// function testScope() {
//     let localVar = "I exist only in this function";
//     console.log(globalVar); // Accessible
//     console.log(localVar);  // Accessible
// }

// testScope();
// console.log(globalVar)
// console.log(localVar); // Error: localVar is not defined

// hello();

// function hello() {
//     console.log("Hello from a fuction declaration!");
// }

// const greet = function() {
//     console.log("Hello from a function expression!");
// }

// greet();

// // Declared functions can be called before they are defined due to hoisting.
// // Function expressions cannot be called before they are defined.
// // Function expressions must be defined before they are invoked.

