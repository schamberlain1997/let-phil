//math.random() generates a decimal number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Example output: 0.543210987654321

// To generate a random number between 0 and 10
let randomBetween0And10 = Math.random() * 10;
console.log(randomBetween0And10); // Example output: 7.654321098765432

// To generate a random integer between 1 and 10
let randomIntegerBetween1And10 = Math.floor(Math.random() * 10) + 1;
console.log(randomIntegerBetween1And10); // Example output: 4

//or 

const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum); // Example output: 9   

//or

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 10)); // Example output: 2
console.log(getRandomNumber(20, 50)); // Example output: 37
console.log(getRandomNumber(100, 200)); // Example output: 145