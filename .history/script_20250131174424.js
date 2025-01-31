const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.button-go');

// Ensure search box is hidden initially
searchBox.style.display = 'none';

// Toggle search box visibility on icon click
searchIcon.addEventListener('click', (event) => {
    event.stopPropagation(); 
    searchBox.style.display = (searchBox.style.display === 'none' || searchBox.style.display === '') ? 'block' : 'none';
});

// Hide search box when clicking outside
document.addEventListener('click', (event) => {
    if (!searchBox.contains(event.target) && !searchIcon.contains(event.target)) {
        searchBox.style.display = 'none';
    }
});



// Handle search action
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query !== '') {
        alert(`Searching for: ${query}`);
    } else {
        alert('Please enter a search term.');
    }
});


// valentine's day special countdown
function updateCountdown() {
    const now = new Date().getTime(); // current time
    const valentineDate = new Date("February 14, 2025 00:00:00").getTime(); // Set Valentine's Day date
    const timeLeft = valentineDate - now; 

    if (timeLeft > 0) { 
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        document.getElementById("#countdown").innerHTML = "Happy Valentine's Day! ❤️";
        clearInterval(countdownInterval); // it will Stop updating after reaching zero
    }
}

// It will run countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
