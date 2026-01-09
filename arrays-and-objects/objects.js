const person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

console.log(person);

console.log(person.name); // Accessing property using dot notation
console.log(person["age"]); // Accessing property using bracket notation

// Adding a new property
person.country = "USA";
console.log(person);

person.age = 26; // Modifying an existing property
console.log(person);

// Deleting a property
delete person.city;
console.log(person);

// for in loop to iterate over properties
for (const key in person) {
  console.log("key =", key);
  console.log("value =", person[key]);
}