const form = document.getElementById("product-form");
const productTable = document.getElementById("product-table").getElementsByTagName("tbody")[0];
const productFormContainer = document.querySelector(".form-container");
const editFormContainer = document.querySelector(".edit-form-container");

// Додадени продукти
let products = [];

// Функција за додавање на продукт
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const product = Object.fromEntries(formData);
  products.push(product);
  renderTable();
  form.reset();
});

// Функција за рендерирање на табелата
function renderTable() {
  productTable.innerHTML = "";
  products.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.quantity}</td>
      <td>${product.distributor}</td>
      <td>${product.entryDate}</td>
      <td>${product.expirationDate}</td>
      <td>
        <button class="edit-btn" onclick="editProduct(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>
      </td>
    `;
    productTable.appendChild(row);
  });
}

// Функција за уредување на продукт
function editProduct(index) {
  const product = products[index];
  editFormContainer.innerHTML = `
    <form id="edit-product-form">
      <h2>Edit Product</h2>
      <label for="edit-name">Name</label>
      <input type="text" id="edit-name" name="name" value="${product.name}" required>
      <label for="edit-category">Category</label>
      <input type="text" id="edit-category" name="category" value="${product.category}" required>
      <label for="edit-quantity">Quantity</label>
      <input type="number" id="edit-quantity" name="quantity" value="${product.quantity}" required>
      <label for="edit-distributor">Distributor</label>
      <input type="text" id="edit-distributor" name="distributor" value="${product.distributor}" required>
      <label for="edit-entryDate">Entry Date</label>
      <input type="date" id="edit-entryDate" name="entryDate" value="${product.entryDate}" required>
      <label for="edit-expirationDate">Expiration Date</label>
      <input type="date" id="edit-expirationDate" name="expirationDate" value="${product.expirationDate}" required>
      <button type="submit">Save</button>
      <button type="button" onclick="cancelEdit()">Cancel</button>
    </form>
  `;
  editFormContainer.classList.remove("hidden");

  const editForm = document.getElementById("edit-product-form");
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const updatedData = new FormData(editForm);
    products[index] = Object.fromEntries(updatedData);
    renderTable();
    editFormContainer.innerHTML = "";
    editFormContainer.classList.add("hidden");
  });
}

// Функција за откажување на уредувањето
function cancelEdit() {
  editFormContainer.innerHTML = "";
  editFormContainer.classList.add("hidden");
}

// Функција за бришење на продукт
function deleteProduct(index) {
  products.splice(index, 1);
  renderTable();
}
