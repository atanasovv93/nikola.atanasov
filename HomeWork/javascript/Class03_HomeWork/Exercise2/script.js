function farToCel(celsius) {
    let result = celsius * 1.8 + 32;
    return result;
}

function celToFar(farenheits) {
    let result = (5/9) * (farenheits - 32);
    return result;
}

let personChoice = prompt("Enter F for Fahrenheit and C for Celsius");
let personInput = parseInt(prompt("Please enter value:"));

if (personChoice === "F") {
    console.log(`${celToFar(personInput)}C`);
} else if (personChoice === "C") {
    console.log(`${farToCel(personInput)}F`);
} else {
    console.log("ERROR!");
}
