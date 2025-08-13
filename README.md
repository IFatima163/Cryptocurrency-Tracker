# Cryptocurrency Tracker

A responsive and feature-rich cryptocurrency tracking app built with **Vite + React**. It uses the **CoinGecko API** to display live crypto data with sorting, filtering, pagination, favorites, and detailed pop-up charts.

---

## Features

* **Live Cryptocurrency Data** — Fetched from the [CoinGecko API](https://www.coingecko.com/en/api)
* **Tailwind CSS Styling** — Clean, modern, and responsive UI
* **Search & Filter** — Find cryptocurrencies instantly
* **Pagination** — Navigate between pages with previous/next controls (disabled when at first/last page)
* **Sorting** — Sort prices in ascending or descending order with active/inactive button states
* **Detailed Charts** — View interactive charts and extra details via pop-up (using React DOM Portal & ApexCharts)
* **Favorites** — Save favorite currencies to **localStorage** and view them in a dedicated table
* **Error Handling** — Handles API errors gracefully

---

## 📦 Tech Stack

* **Frontend:** React, Vite
* **Styling:** Tailwind CSS
* **Code Formatting:** Prettier
* **Charts:** ApexCharts
* **API:** CoinGecko
* **State & Logic:** useState, Fetch API, localStorage
* **Deployment:** GitHub Pages (optional)

---

## 🌐 Live Demo

[**Click here to view the live app**](https://IFatima163.github.io/Cryptocurrency-Tracker)

---

## 📌 Development Notes

1. Created Vite project & Git repo
2. Installed Tailwind CSS & Prettier
3. Built home page, search bar, and crypto table
4. Integrated CoinGecko API to display:

   * Name
   * Image
   * Price
   * 24h fluctuation
5. Implemented:

   * **Pagination** with prev/next button states
   * **Search filter** for table
   * **Sorting** with asc/desc buttons & active states
6. Added:

   * Pop-up with chart & currency details (React Portal + ApexCharts)
   * Favorite button & localStorage logic
   * Separate favorites table at top
