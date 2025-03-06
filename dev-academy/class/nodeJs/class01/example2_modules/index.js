import * as mathOperations from './math-operations';

const sumResult = mathOperations.add(1, 2); // Use the add function from the math-operations module

console.log(sumResult); // Output: 3

const subtractResult = mathOperations.subtract(10, 5); // Use the subtract function from the math-operations module

console.log(subtractResult); // Output: 5

import Person from './person.js';

const person = new Person('Nikola', 30); // Create a new Person instance
const daniel = new Person('Daniel', 34); // Create a new Person instance
daniel.introduce(); // Output: Hello, my name is Daniel and I am 34 years old.

Person.prototype.introduce = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
} // Use the introduce method from the Person class

console.log(person.greet()); // Output: Hello, my name is Nikola and I am 30 years old.