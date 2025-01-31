

// valentine's day special countdown




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