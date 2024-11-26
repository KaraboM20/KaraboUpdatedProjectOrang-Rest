const backgroundDiv = document.querySelector('.upper-section');

const image = [
    './assets/food-image.jpg',
    './assets/food-image2.jpg',
    './assets/food-image3.jpg'
];

let currentIndex = 0

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    backgroundDiv.computedStyleMap.backgroundImage = `url(${images[currentIndex]})`;
}