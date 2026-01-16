let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");  

num1 = parseFloat(num1);
num2 = parseFloat(num2);

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
