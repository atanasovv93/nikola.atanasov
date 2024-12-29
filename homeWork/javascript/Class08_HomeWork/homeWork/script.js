function createTable() {
    const rows = parseInt(document.getElementById("rows").value.trim());
    const columns = parseInt(document.getElementById("columns").value.trim());
    const tableContainer = document.getElementById("table-container");

    tableContainer.innerHTML = "";

    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert("Please enter valid numbers for rows and columns!");
        return;
    }

    const table = document.createElement("table");

    for (let row = 1; row <= rows; row++) {
        const tableRow = document.createElement("tr");
        for (let col = 1; col <= columns; col++) {
            const tableCell = document.createElement("td");
            tableCell.textContent = `Row-${row} Column-${col}`;
            tableRow.appendChild(tableCell);
        }
        table.appendChild(tableRow);
    }

    tableContainer.appendChild(table);
}
