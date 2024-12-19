function validateNumber(num) {
    return typeof num === "number" && !isNaN(num);
}

function sumNumbers(numbers) {
    for (let num of numbers) {
        if (!validateNumber(num)) {
            alert("Error: One of the values is not a valid number.");
            return;
        }
    }
    let sum = numbers.reduce((total, current) => total + current, 0);
    return sum;
}

let numbersArray = [15, 30, 45, 60, 75]; 
let result = sumNumbers(numbersArray);

if (result !== undefined) {
    console.log(`The sum is: ${result}`);
    alert(`The sum is: ${result}`);
}
