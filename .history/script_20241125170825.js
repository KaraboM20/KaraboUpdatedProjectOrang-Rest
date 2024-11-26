// const timer = document.getElementById("christmas-special")

// function updateTimer() {
//     const now = new Date();
//     const dueDate = new Date('December 25 2024 23:59:59');
    
//     const diff = dueDate - now;
//     const days = Math.floor(diff/(1000*60*60*24));
//     const hours = Math.floor(diff/((1000*60*60))% 24);
//     const minutes = Math.floor(diff/((1000*60))% 60);
//     const seconds = Math.floor((diff/(1000))% 60);
//     timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
// }
// setInterval(updateTimer, 1000);
// updateTimer();

const targetDate = new Date("December 25, 2024 23:59:59").getTime();


function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

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
        
        document.getElementById("countdown").textContent = "The special offer has ended!";
    }
}


setInterval(updateCountdown, 1000);


updateCountdown();



const searchIcon = document.querySelector('.search-');
const searchBox = document.querySelector('.search-box');


searchIcon.addEventListener('click', () => {
    if (searchBox.style.display === 'none' || searchBox.style.display === '') {
        searchBox.style.display = 'block'; 
    } else {
        searchBox.style.display = 'none'; 
    }
});


document.addEventListener('click', (event) => {
    if (!event.target.closest('.search-container')) {
        searchBox.style.display = 'none'; 
    }
});