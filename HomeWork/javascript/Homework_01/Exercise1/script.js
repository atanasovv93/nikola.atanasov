// Enter a player's name
let playerName = prompt("Enter the player's name:");

// Insert the number of goals scored this season
let goals = prompt(`How many goals did ${playerName} score this season?`);

// Check if input is valid
if (goals !== null && !isNaN(goals) && goals >= 0) {
    goals = parseInt(goals); // Convert the input to a number

    
    if (goals > 20) {
        alert(`${playerName} scored ${goals} goals and he is nominated for Top Scorer of the Year!`);
    } else if (goals >= 10) {
        alert(`${playerName} had a solid season with ${goals} goals.`);
    } else if (goals >= 1) {
        alert(`${playerName} scored ${goals} goals. Keep practicing to improve!`);
    } else {
        alert(`${playerName} didn't score any goals this season. Better luck next year!`);
    }
} else {
    alert("Invalid input! Please enter a valid number of goals.");
}
