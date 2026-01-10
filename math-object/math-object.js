console.log(Math.PI);
console.log(Math.E);

// Math.round - rounds a number to the neareswt interger
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.3)); // 4

// Math.floor - rounds a number down to the nearest integer
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4

// Math.ceil - rounds a number up to the nearest integer
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5

// Math.max and Math.min, find the largest and smallest number in a set of numbers
console.log(Math.max(1, 3, 5, 7, 9)); // 9
console.log(Math.min(1, 3, 5, 7, 9)); // 1

const nums = [1, 2, 3, 4, 5, 6, 10 , 40, 100, 44, 30];
console.log(nums);
console.log(Math.max(...nums)); // 100
console.log(Math.min(...nums)); // 1

// Math.abs - Gets the absolute value of a number
// Converts negative numbers to positive numbers
console.log(Math.abs(-7.25)); // 7.25
console.log(Math.abs(7.25));  // 7.25

// Math.pow() - power of a number
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(4, 2)); // 16  

console.log(3 ** 4);       // 81
console.log(5 ** 3);       // 125

// Math.sqrt() - square root of a number
console.log(Math.sqrt(64)); // 8
console.log(Math.sqrt(81)); // 9

// check if a number is a perfect square

const num = 16;
if (Math.sqrt(num) % 1 === 0) {
    console.log(`${num} is a perfect square`);
} else {
    console.log(`${num} is not a perfect square`);
}

function isPerfectSquare(num) {
    if (Math.sqrt(num) % 1 === 0) return true;
    else return false;
}

console.log(isPerfectSquare(25)); // true
console.log(isPerfectSquare(26)); // false  
