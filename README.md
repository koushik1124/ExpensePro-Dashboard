# 💰 ExpensePro Dashboard

A modern, explainable **expense tracking dashboard** built using **Vanilla JavaScript**, **HTML**, and **CSS** — designed with a clean, professional UI for real-world analytics.

---

## 🏠 Project Overview

**ExpensePro** helps users visualize and manage their daily and monthly spending efficiently.  
It offers dynamic category management, persistent data storage, and a sleek analytics dashboard — all without any backend.

---

## 🚀 Features
- 🧾 Add, view, and delete expenses with persistent storage (LocalStorage)
- 🗂️ Create and manage custom categories dynamically
- 📅 Monthly and category-wise expense summaries
- 💼 Professional dark-themed dashboard UI
- 🧠 Modular architecture with clean JavaScript ES6 modules

---

## 🖼️ Project Screenshots

### 🏠 Dashboard View
![Dashboard Screenshot](screenshots/dashboard-view.png)

---

### 💰 Expense Management
![Expenses Screenshot](screenshots/expenses-view.png)

---

### 📊 Reports (Monthly Summary)
![Reports Screenshot](screenshots/reports-view.png)

---

🗂️ Folder Structure
```text
expensepro-dashboard/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── data.js
│   ├── dashboard.js
│   ├── expenses.js
│   └── reports.js
├── assets/
│   └── logo.png
└── screenshots/
    ├── dashboard-view.png
    ├── expenses-view.png
    └── reports-view.png


---

## 🧰 Tech Stack
- **HTML5**  
- **CSS3**  
- **JavaScript (ES6 Modules)**  
- **LocalStorage** for data persistence  
- **Chart.js** *(optional, deprecated in favor of table-based reports)*  

---

## 🚀 Deployment

This project is hosted on **[Netlify](https://www.netlify.com/)** for fast and reliable static site deployment.

### 🌐 Live Demo  
👉 [ExpensePro Dashboard](https://expensepro-dashboard.netlify.app)

---

### 🛠️ Deployment Steps
1. Pushed the project to **GitHub**
2. Logged into **Netlify** and selected **“Add New Site → Import from Git”**
3. Chose the GitHub repository (**ExpensePro-Dashboard**)
4. Netlify automatically detected the static site (HTML, CSS, JS)
5. Clicked **Deploy Site**
6. Renamed the project via **Settings → Change project name** to `expensepro-dashboard`

Your project is now live at:  
➡️ **https://expensepro-dashboard.netlify.app**

---

### 🧾 Notes
- The site auto-deploys whenever new commits are pushed to the **main branch**  
- **Free SSL (HTTPS)** and continuous deployment enabled by default  
- **No backend required** — uses LocalStorage for persistent data

