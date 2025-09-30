/**
 * hotel.js
 * Main JavaScript for Hotelisite website
 * Connects functionality and CSS
 */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Example: Toggle mobile menu
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Example: Booking form validation
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const date = document.getElementById('date').value;
            if (!name || !email || !date) {
                alert('Please fill in all fields.');
                return;
            }
            alert('Booking submitted! Thank you.');
            bookingForm.reset();
        });
    }

    // Example: Change theme (connects to CSS)
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }
});

// Example: Export for module usage (if needed)
export {};