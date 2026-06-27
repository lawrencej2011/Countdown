"use strict";

const getElement = selector => document.querySelector(selector);

window.onload = () => {
    // Get today's date
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentDate = today.getDate();

    // Display month and year in heading
    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    getElement("#month_year").textContent =
        `${monthNames[currentMonth]} ${currentYear}`;

    // Get first day of month and number of days in month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const calendar = getElement("#calendar");

    let date = 1;

    // Create up to 6 weeks (rows)
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");

        // Create 7 days (columns)
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");

            // Empty cells before first day of month
            if (i === 0 && j < firstDay) {
                cell.textContent = "";
            }
            // Fill in dates
            else if (date <= daysInMonth) {
                cell.textContent = date;

                // Highlight today's date
                if (date === currentDate) {
                    cell.className = "today";
                }

                date++;
            }

            row.appendChild(cell);
        }

        calendar.appendChild(row);

        // Stop creating rows when all dates are displayed
        if (date > daysInMonth) {
            break;
        }
    }
};