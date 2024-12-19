let money = prompt("How much money do you have?");

if (money === null) {
    console.log("You canceled the prompt.");
} else {
    if (money >= 100) {
        console.log("You have enough money to buy something expensive, like a nice meal or a gadget!");
    } else if (money >= 75) {
        console.log("You can buy a good quality meal or a nice gift!");
    } else if (money >= 50) {
        console.log("You can buy a nice lunch or a few small items.");
    } else if (money >= 30) {
        console.log("You can buy a decent snack or a drink.");
    } else if (money >= 20) {
        console.log("You can buy an ice cream or a small snack.");
    } else if (money >= 10) {
        console.log("You can buy a small treat, like a candy bar.");
    } else {
        console.log("You might want to save up a little more money before making a purchase.");
    }
}
