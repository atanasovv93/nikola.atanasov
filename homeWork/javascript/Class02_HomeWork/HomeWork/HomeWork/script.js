let year = prompt("Enter a year:");

if (isNaN(year)) {
    alert("Invalid input! Please enter a valid year.");
} else {
        year = Number(year);
        let zodiacCal = (year - 4) % 12;

        if (zodiacCal === 0) {
            alert("The Chinese Zodiac for the year " + year + " is: Rat");
        } else if (zodiacCal === 1) {
            alert("The Chinese Zodiac for the year " + year + " is: Ox");
        } else if (zodiacCal === 2) {
            alert("The Chinese Zodiac for the year " + year + " is: Tiger");
        } else if (zodiacCal === 3) {
            alert("The Chinese Zodiac for the year " + year + " is: Rabbit");
        } else if (zodiacCal === 4) {
            alert("The Chinese Zodiac for the year " + year + " is: Dragon");
        } else if (zodiacCal === 5) {
            alert("The Chinese Zodiac for the year " + year + " is: Snake");
        } else if (zodiacCal === 6) {
            alert("The Chinese Zodiac for the year " + year + " is: Horse");
        } else if (zodiacCal === 7) {
                alert("The Chinese Zodiac for the year " + year + " is: Goat");
        } else if (zodiacCal === 8) {
                alert("The Chinese Zodiac for the year " + year + " is: Monkey");
        } else if (zodiacCal === 9) {
                alert("The Chinese Zodiac for the year " + year + " is: Rooster");
        } else if (zodiacCal === 10) {
                alert("The Chinese Zodiac for the year " + year + " is: Dog");
        } else if (zodiacCal === 11) {
                alert("The Chinese Zodiac for the year " + year + " is: Pig");
        
    alert("The Chinese Zodiac for the year " + year + " is: " + zodiacs[zodiacCal]);
}

}