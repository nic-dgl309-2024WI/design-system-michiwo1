/* hamburger menu */
document.querySelector('.toggle').addEventListener('click', function () {
  document.querySelector('nav').classList.toggle('show');
});

// carousel
var carousel = document.querySelector('.carousel-images');
var images = Array.from(carousel.children);
var prevButton = document.querySelector('.carousel-control.prev');
var nextButton = document.querySelector('.carousel-control.next');
var currentIndex = 0;

function updateCarousel() {
  var newTransformValue = -currentIndex * 100 / images.length;
  carousel.style.transform = 'translateX(' + newTransformValue + '%)';
}

prevButton.addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextButton.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});