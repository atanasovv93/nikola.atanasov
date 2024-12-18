console.log('****** HomeWork Part 1 ******')

function checkType(value) {
    console.log(typeof value);
}

checkType({});               // object
checkType(true);              // boolean
checkType(42);                // number
checkType("Hello, world!");   // string
checkType(undefined);         // undefined



console.log('****** HomeWork Part 2 ******')

function calculateDogAge(age, type) {
    if (type === "dogToHuman") {
        let humanAge = age / 7;
        console.log(`${age} dog years is equivalent to ${humanAge} human years.`);
    } else if (type === "humanToDog") {
        let dogAge = age * 7;
        console.log(`${age} human years is equivalent to ${dogAge} dog years.`);
    } else {
        console.log("Invalid type! Please specify either 'dogToHuman' or 'humanToDog'.");
    }
}

calculateDogAge(3, "humanToDog");  // Example: 3 human years to dog years
calculateDogAge(21, "dogToHuman"); // Example: 21 dog years to human years


console.log('****** HomeWork Part 3 ******')


function atmWithdrawal() {
    let accountBalance = 5000; // Hardcoded account balance

    let requestedAmount = parseFloat(prompt("Enter the amount you want to withdraw:"));
    
    if (requestedAmount > accountBalance) {
        console.log("Not enough money.");
        alert("Not enough money.");
    } else {
        accountBalance -= requestedAmount;
        console.log(`You have withdrawn $${requestedAmount}. Your remaining balance is $${accountBalance}.`);
        alert(`You have withdrawn $${requestedAmount}. Your remaining balance is $${accountBalance}.`);
    }
}

atmWithdrawal();
