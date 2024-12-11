function calculateAge(birthYear, currentYear) {
    let age = currentYear - birthYear;
    console.log("You are " + age + " years old");
}

let currentYear = new Date().getFullYear();

calculateAge(2000, currentYear);
calculateAge(1995, currentYear);
calculateAge(2010, currentYear);
