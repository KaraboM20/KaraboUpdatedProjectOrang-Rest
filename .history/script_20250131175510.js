// The Search-Icon
const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('.button-go');


searchBox.style.display = 'none';

// Toggle search box visibility on icon click
searchIcon.addEventListener('click', (event) => {
    event.stopPropagation(); 
    searchBox.style.display = (searchBox.style.display === 'none' || searchBox.style.display === '') ? 'block' : 'none';
});

// To hide search box when clicking outside
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



// Valentine's day special countdown
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



// Checking Availability
const checkButton = document.querySelector('.check-button');
const categorySelect = document.querySelector('#category-select');
const checkInInput = document.querySelector('.check-in input');
const checkOutInput = document.querySelector('.check-out input');
const eventStartInput = document.querySelector('.event-start input');
const eventEndInput = document.querySelector('.event-end input');

// Handle button click event
checkButton.addEventListener('click', (event) => {
    event.preventDefault(); 

    const category = categorySelect.value;
    const checkIn = checkInInput.value;
    const checkOut = checkOutInput.value;
    const eventStart = eventStartInput.value;
    const eventEnd = eventEndInput.value;

    // Validation: Ensure all fields are filled
    if (!category || !checkIn || !checkOut || !eventStart || !eventEnd) {
        alert('Please fill in all fields before checking availability.');
        return;
    }

    // Display selected values (You can replace this with an actual availability check)
    alert(`Checking availability for:
    📌 Category: ${category}
    🏨 Check-In: ${checkIn}
    🏨 Check-Out: ${checkOut}
    ⏰ Event Start: ${eventStart}
    ⏰ Event End: ${eventEnd}`);

    // You can now send this data to a backend API for real availability checking
});