const images = [
 "1.jpg",
 '2.jpg',
 "3.jpg",
 "4.jpg"
];

let currentIndex = 0;
const heroSection = document.querySelector('.hero');

function changeBackground() {
  heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 1000);

// Initial background
changeBackground();
