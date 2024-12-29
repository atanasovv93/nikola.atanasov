function createRecipe() {
    let recipeName = prompt("What is the name of your recipe?");
    if (!recipeName) {
        alert("Recipe name cannot be empty!");
        return;
    }

    let ingredientCount = parseInt(prompt("How many ingredients do you need?"));
    if (isNaN(ingredientCount) || ingredientCount <= 0) {
        alert("Please enter a valid number of ingredients.");
        return;
    }

    let ingredients = [];
    for (let i = 1; i <= ingredientCount; i++) {
        let ingredient = prompt(`Enter the name of ingredient ${i}:`);
        if (!ingredient) {
            alert("Ingredient name cannot be empty!");
            return;
        }
        ingredients.push(ingredient);
    }

    let container = document.getElementById("recipeContainer");
    container.innerHTML = `
        <h2>${recipeName}</h2>
        <p>Here are the ingredients for <strong>${recipeName}</strong>:</p>
        <ul>
            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>
        <h3>Fancy Table</h3>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Ingredient</th>
                </tr>
            </thead>
            <tbody>
                ${ingredients
                    .map(
                        (ingredient, index) =>
                            `<tr><td>${index + 1}</td><td>${ingredient}</td></tr>`
                    )
                    .join("")}
            </tbody>
        </table>
    `;
}

createRecipe();
