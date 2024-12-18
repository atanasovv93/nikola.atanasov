let numbersArray = [3, 5, 6, 8, 11];

console.log("Array of numbers:");
console.log(numbersArray);

let maxNumber = Math.max(...numbersArray);
let minNumber = Math.min(...numbersArray);
let sumOfMaxMin = maxNumber + minNumber;

console.log(`Max: ${maxNumber}`);
console.log(`Min: ${minNumber}`);
console.log(`Sum of Max and Min: ${sumOfMaxMin}`);

let mixedArray = [7, "Qinshift", 12, null, 4, 26, "student", 1, undefined, 11.5];
console.log("Mixed array:");
console.log(mixedArray);

let filteredNumbers = mixedArray.filter(item => typeof item === "number");
console.log("Filtered numbers from the mixed array:");
console.log(filteredNumbers);

let maxFromMixed = Math.max(...filteredNumbers);
let minFromMixed = Math.min(...filteredNumbers);
let sumFromMixed = maxFromMixed + minFromMixed;

console.log(`Max from mixed array: ${maxFromMixed}`);
console.log(`Min from mixed array: ${minFromMixed}`);
console.log(`Sum from mixed array: ${sumFromMixed}`);
