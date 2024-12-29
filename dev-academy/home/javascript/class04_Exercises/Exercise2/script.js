function findNumber(array, type) {
    let result = [];
    for (let number of array) {
        if (type === "even" && number % 2 === 0) {
            result.push(number);
        } else if (type === "odd" && number % 2 !== 0) {
            result.push(number);
        }
    }
    return result;
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let evenNumbers = findNumber(numbersArray, "even");
console.log("Even numbers:", evenNumbers);

let oddNumbers = findNumber(numbersArray, "odd");
console.log("Odd numbers:", oddNumbers);