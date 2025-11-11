import { DataStore } from './data.js';

export function renderReports() {
  // Group expenses by month & year
  const monthlyData = {};

  DataStore.expenses.forEach(exp => {
    const date = new Date(exp.date);
    const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });

    if (!monthlyData[monthYear]) {
      monthlyData[monthYear] = { total: 0, count: 0 };
    }

    monthlyData[monthYear].total += exp.amount;
    monthlyData[monthYear].count += 1;
  });

  // Convert to sorted array by date
  const sortedMonths = Object.entries(monthlyData).sort((a, b) => {
    const dateA = new Date(a[0]);
    const dateB = new Date(b[0]);
    return dateA - dateB;
  });

  // Build table rows
  const rows = sortedMonths.map(([month, data]) => `
    <tr>
      <td>${month}</td>
      <td>₹${data.total.toFixed(2)}</td>
      <td>${data.count}</td>
    </tr>
  `).join('');

  // Calculate grand total
  const grandTotal = Object.values(monthlyData)
    .reduce((a, b) => a + b.total, 0)
    .toFixed(2);

  return `
    <h1>Monthly Expense Report</h1>

    <div class="report-card">
      <table class="report-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Total Spent</th>
            <th>Transactions</th>
          </tr>
        </thead>
        <tbody>
          ${rows || '<tr><td colspan="3">No data available</td></tr>'}
        </tbody>
        <tfoot>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>₹${grandTotal}</strong></td>
            <td><strong>${DataStore.expenses.length}</strong></td>
          </tr>
        </tfoot>
      </table>
    </div>
  `;
}

export function initReports() {
  // No charts needed anymore
}
