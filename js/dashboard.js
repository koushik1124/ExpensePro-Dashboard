import { DataStore } from './data.js';

export function renderDashboard() {
  const total = DataStore.expenses.reduce((a, b) => a + b.amount, 0);
  const transactions = DataStore.expenses.length;
  const categoryTotals = DataStore.getCategoryTotals();

  const topCategory =
    Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';

  // Prepare a few latest transactions
  const recent = [...DataStore.expenses]
    .slice(-5)
    .reverse()
    .map(
      e => `
      <tr>
        <td>${e.desc}</td>
        <td>₹${e.amount.toFixed(2)}</td>
        <td>${e.category}</td>
        <td>${e.date}</td>
      </tr>`
    )
    .join('');

  // Prepare category summary
  const categorySummary = Object.entries(categoryTotals)
    .map(
      ([cat, amt]) => `
      <div class="summary-item">
        <span>${cat}</span>
        <span>₹${amt.toFixed(2)}</span>
      </div>`
    )
    .join('');

  return `
    <h1>Dashboard Overview</h1>
    <div class="cards">
      <div class="card"><h3>Total Expense</h3><p>₹${total.toFixed(2)}</p></div>
      <div class="card"><h3>Transactions</h3><p>${transactions}</p></div>
      <div class="card"><h3>Top Category</h3><p>${topCategory}</p></div>
    </div>

    <div class="dashboard-grid">
      <div class="category-box">
        <h2>Category Summary</h2>
        <div class="category-summary">${categorySummary || '<p>No data yet</p>'}</div>
      </div>

      <div class="recent-box">
        <h2>Recent Transactions</h2>
        <table class="recent-table">
          <thead><tr><th>Description</th><th>Amount</th><th>Category</th><th>Date</th></tr></thead>
          <tbody>${recent || '<tr><td colspan="4">No recent transactions</td></tr>'}</tbody>
        </table>
      </div>
    </div>
  `;
}

export function initDashboard() {
  // No chart initialization needed anymore
}
