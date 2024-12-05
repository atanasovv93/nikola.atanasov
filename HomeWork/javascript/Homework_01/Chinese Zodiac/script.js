let year = prompt("Enter a year:");

// Check if the input is NOT a number
if (isNaN(year)) {
    alert("Invalid input! Please enter a valid year.");
} else {
    // Convert input to a number and calculate the Zodiac
    let zodiacCal = (year - 4) % 12;
    let zodiacs = [
        "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
        "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
    ];
    alert("The Chinese Zodiac for the year " + year + " is: " + zodiacs[zodiacCal]);
}
