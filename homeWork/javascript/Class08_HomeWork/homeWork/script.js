const generateTableButton = document.getElementById("generateTableButton");

generateTableButton.addEventListener("click", function () {
    // Parse input values for rows and columns
    const rows = parseInt(document.getElementById("rows").value.trim());
    const columns = parseInt(document.getElementById("columns").value.trim());
    const tableContainer = document.getElementById("tableContainer");

    // Clear any previous table
    tableContainer.innerHTML = "";

    // Check if input values are valid numbers
    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert("Please enter valid numbers for rows and columns!");
        return;
    }

    // Create the table element
    const table = document.createElement("table");

    // Loop to create rows and columns
    for (let row = 1; row <= rows; row++) {
        const tableRow = document.createElement("tr");
        
        for (let col = 1; col <= columns; col++) {
            const tableCell = document.createElement("td");
            tableCell.textContent = `Row-${row} Column-${col}`;
            tableRow.appendChild(tableCell);
        }
        
        table.appendChild(tableRow);
    }

    // Append the table to the container
    tableContainer.appendChild(table);
});
