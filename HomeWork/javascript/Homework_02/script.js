// Function that will convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (5 / 9) * (fahrenheit - 32);
    console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);
}

// Get input from the user
let choice = prompt("Do you want to convert:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius\nEnter 1 or 2:");

if (choice === "1") {
    let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
    if (!isNaN(celsius)) {
        celsiusToFahrenheit(celsius);
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
} else if (choice === "2") {
    let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));
    if (!isNaN(fahrenheit)) {
        fahrenheitToCelsius(fahrenheit);
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
} else {
    console.log("Invalid choice. Please refresh and try again.");
}
