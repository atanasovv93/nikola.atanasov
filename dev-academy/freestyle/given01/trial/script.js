// Warehouse Management Logic
const form = document.getElementById('product-form');
const tableBody = document.querySelector('#warehouse-table tbody');

// Event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get values from the form
    const productName = document.getElementById('product-name').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    const entryDate = document.getElementById('entry-date').value;
    const expiryDate = document.getElementById('expiry-date').value;

    // Add product to the table
    addProductToTable(productName, quantity, entryDate, expiryDate);

    // Clear form fields
    form.reset();
});

// Function to add product to the table
function addProductToTable(name, quantity, entryDate, expiryDate) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${quantity}</td>
        <td>${entryDate}</td>
        <td>${expiryDate}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Append the row to the table body
    tableBody.appendChild(row);

    // Add event listener for delete button
    row.querySelector('.delete-btn').addEventListener('click', () => {
        row.remove();
    });
}
