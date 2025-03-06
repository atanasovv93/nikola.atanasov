const calculator = require('./calculator.js'); // Import the calculator module
const greetings = require('./greetings.js'); // Import the greetings module
const sumResult = calculator.add(1, 2); // Use the add function from the calculator module

console.log(sumResult); // Output: 3

console.log(greetings.saysHello('World')); // Output: Hello World!
console.log(greetings.saysGoodbye('World')); // Output: Goodbye World!