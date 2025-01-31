const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');
const searchContainer = document.querySelector('.search-container');
const submitButton = document.querySelector('.search-submit');

// Toggle search box visibility when clicking the search icon
searchIcon.addEventListener('click', (event) => {
    event.stopPropagation(); 
    searchBox.style.display = (searchBox.style.display === 'none' || searchBox.style.display === '') ? 'block' : 'none';
});

// Hide search box when clicking outside
document.addEventListener('click', (event) => {
    if (!searchContainer.contains(event.target)) {
        searchBox.style.display = 'none';
    }
});

// Handle search submission
submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission
    const searchInput = document.querySelector('.search-input').value;
    if (searchInput.trim() !== '') {
        alert(`Searching for: ${searchInput}`);
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