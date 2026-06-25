"use strict";

const $ = selector => document.querySelector(selector);

let timer = null;

// Display the countdown
const displayCountdown = () => {

    // Get the event name and date entered by the user
    const event = $("#event").value;
    const eventDate = $("#date").value;

    // Validate entries
    if (event === "") {
        alert("Please enter an event name.");
        $("#event").focus();
        return;
    }

    if (eventDate === "") {
        alert("Please enter an event date.");
        $("#date").focus();
        return;
    }

    // Create date objects
    const today = new Date();
    const futureDate = new Date(eventDate);

    // Calculate difference in seconds
    let seconds = Math.floor((futureDate.getTime() - today.getTime()) / 1000);

    // Check for past dates
    if (seconds < 0) {
        $("#message").textContent =
            "The event date must be in the future.";
        clearInterval(timer);
        return;
    }

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(seconds / 86400);
    seconds %= 86400;

    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    // Display results
    $("#message").textContent =
        `${days} day(s), ${hours} hour(s), ` +
        `${minutes} minute(s), ${seconds} second(s) ` +
        `until ${event}!`;
};

document.addEventListener("DOMContentLoaded", () => {

    $("#countdown").addEventListener("click", () => {

        // Cancel any previous timer
        clearInterval(timer);

        // Display immediately
        displayCountdown();

        // Update every second
        timer = setInterval(displayCountdown, 1000);
    });

    $("#event").focus();
});