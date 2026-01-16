// const fruits = ['apple', 'banana', 'cherry'];
// // console.log(fruits); // Output: ['apple', 'banana', 'cherry']; 

// // Declaring and Manipulating Arrays

// // console.log(fruits[0]); // Output: 'apple'
// // console.log(fruits[1]); // Output: 'banana'
// // console.log(fruits[2]); // Output: 'cherry' 

// // fruits[1] = 'blueberry';
// // console.log(fruits); // Output: ['apple', 'blueberry', 'cherry'];

// // console.log(fruits.length); // Output: 3

// // Array Methods
// // Push adds an element to the end of the array

// fruits.push('mango');
// console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'mango']

// // Pop removes the last element from the array

// fruits.pop();
// console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// // Shift removes the first element from the array

// fruits.shift();
// console.log(fruits); // Output: ['banana', 'cherry']

// // Unshift adds an element to the beginning of the array

// fruits.unshift('kiwi');
// console.log(fruits); // Output: ['kiwi', 'banana', 'cherry']

// // splice can add or remove elements at a specific index

// fruits.splice(1, 1, 'orange');
// console.log(fruits); // Output: ['kiwi', 'orange', 'cherry']

// fruits.splice(1,2);
// console.log(fruits); // Output: ['kiwi']

//map creates a new array by applying a function to each element
const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4, 5]

// filter creates a new array with elements that match a condition

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
