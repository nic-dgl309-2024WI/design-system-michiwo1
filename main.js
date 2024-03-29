/* hamburger menu */
document.querySelector('.toggle').addEventListener('click', function () {
  document.querySelector('nav').classList.toggle('show');
});

//pagination
document.addEventListener('DOMContentLoaded', function() {
  changeImageSet(1);
});

function changeImageSet(page) {
  const imageSets = {
    1: ["images/square.png", "images/square.png", "images/square.png", "images/square.png"],
    2: ["images/square.png", "images/square.png", "images/square.png", "images/square.png"],
    3: ["images/square.png", "images/square.png", "images/square.png", "images/square.png"],
    4: ["images/square.png", "images/square.png", "images/square.png", "images/square.png"],
    5: ["images/square.png", "images/square.png", "images/square.png", "images/square.png"],
    6: ["images/square.png", "images/square.png", "images/square.png", "images/square.png"],
  };

  const images = document.querySelectorAll('.grid-item img');
  images.forEach((img, index) => {
    img.src = imageSets[page][index]; 
  });

  document.querySelectorAll('.pagination a').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.pagination a')[page].classList.add('active');
}
