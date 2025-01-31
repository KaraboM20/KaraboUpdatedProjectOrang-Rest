
// valentine's day special countdown
function updateCountdown() {
    const now = new Date().getTime(); // Current time
    const valentineDate = new Date("February 14, 2024 00:00:00").getTime(); // Target date
    const timeLeft = valentineDate - now; // Time difference

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "Happy Valentine's Day! ❤️";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Run the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Run immediately on page load
updateCountdown();


// Select the search icon and search box
const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');

searchIcon.addEventListener('click', (event) => {
    event.stopPropagation(); 
    if (searchBox.style.display === 'none' || searchBox.style.display === '') {
        searchBox.style.display = 'block'; 
    } else {
        searchBox.style.display = 'none'; 
    }
});


document.addEventListener('click', (event) => {
    const searchContainer = document.querySelector('.search-container');
    if (!searchContainer.contains(event.target)) {
        searchBox.style.display = 'none';
    }
});