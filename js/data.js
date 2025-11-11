export const DataStore = {
  expenses: JSON.parse(localStorage.getItem('expenses')) || [],
  categories: JSON.parse(localStorage.getItem('categories')) || [],


  save() {
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
    localStorage.setItem('categories', JSON.stringify(this.categories));
  },

  addExpense(desc, amount, category) {
    const date = new Date().toLocaleDateString('en-IN');
    this.expenses.push({ desc, amount: parseFloat(amount), category, date });
    this.save();
  },

  deleteExpense(index) {
    this.expenses.splice(index, 1);
    this.save();
  },

  addCategory(newCat) {
    if (!this.categories.includes(newCat)) {
      this.categories.push(newCat);
      this.save();
    }
  },

  getCategoryTotals() {
    return this.expenses.reduce((acc, exp) => {
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    }, {});
  }
};
