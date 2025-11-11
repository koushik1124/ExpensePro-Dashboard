import { renderDashboard, initDashboard } from './dashboard.js';
import { renderExpenses, initExpenses } from './expenses.js';
import { renderReports, initReports } from './reports.js';

document.addEventListener('DOMContentLoaded', () => {
  const contentArea = document.getElementById('contentArea');
  const navMenu = document.getElementById('navMenu');
  const navItems = navMenu.querySelectorAll('li');

  // Helper: Activate the selected nav item visually
  function setActive(page) {
    navItems.forEach(li => li.classList.toggle('active', li.dataset.page === page));
  }

  // Helper: Load page content dynamically
  function loadPage(page) {
    setActive(page);

    if (page === 'dashboard') {
      contentArea.innerHTML = renderDashboard();
      initDashboard();
    } else if (page === 'expenses') {
      contentArea.innerHTML = renderExpenses();
      initExpenses();
    } else if (page === 'reports') {
      contentArea.innerHTML = renderReports();
      initReports();
    }
  }

  // Bind click events to all sidebar items
  navItems.forEach(li => {
    li.addEventListener('click', () => {
      const targetPage = li.dataset.page;
      loadPage(targetPage);
    });
  });

  // Load dashboard by default
  loadPage('dashboard');
});
