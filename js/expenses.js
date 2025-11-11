import { DataStore } from './data.js';

export function renderExpenses() {
  // Create proper placeholder and dynamic categories
  let categoryOptions = `<option value="" disabled selected hidden>Select category</option>`;
  if (DataStore.categories.length > 0) {
    categoryOptions += DataStore.categories
      .map(c => `<option value="${c}">${c}</option>`)
      .join('');
  }

  // Build expense rows
  const rows = DataStore.expenses.map((e, i) => `
    <tr>
      <td>${e.desc}</td>
      <td>₹${e.amount.toFixed(2)}</td>
      <td>${e.category}</td>
      <td>${e.date}</td>
      <td><button class="delete-btn" data-index="${i}">Delete</button></td>
    </tr>
  `).join('');

  // Return full layout
  return `
    <h1>Manage Expenses</h1>

    <div class="form">
      <input type="text" id="desc" placeholder="Description">
      <input type="number" id="amount" placeholder="Amount">
      <select id="category" required>${categoryOptions}</select>
      <button id="addExpense">Add</button>
    </div>

    <div class="form">
      <input type="text" id="newCategory" placeholder="Add new category">
      <button id="addCategory">Add Category</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

export function initExpenses() {
  // Handle expense addition
  document.getElementById('addExpense').addEventListener('click', () => {
    const desc = document.getElementById('desc').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const cat = document.getElementById('category').value;

    if (!desc || !amount || amount <= 0 || !cat) {
      alert('Please fill all fields and choose a valid category.');
      return;
    }

    DataStore.addExpense(desc, amount, cat);
    location.reload();
  });

  // Handle expense deletion
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = btn.dataset.index;
      DataStore.deleteExpense(index);
      location.reload();
    });
  });

  // Handle adding a new category dynamically
  document.getElementById('addCategory').addEventListener('click', () => {
    const newCat = document.getElementById('newCategory').value.trim();

    if (!newCat) {
      alert('Please enter a category name.');
      return;
    }

    if (DataStore.categories.includes(newCat)) {
      alert('Category already exists.');
      return;
    }

    DataStore.addCategory(newCat);

    // Update dropdown immediately without reload
    const categorySelect = document.getElementById('category');
    const newOption = document.createElement('option');
    newOption.value = newCat;
    newOption.textContent = newCat;
    categorySelect.appendChild(newOption);
    categorySelect.value = newCat;

    document.getElementById('newCategory').value = '';
  });
}
