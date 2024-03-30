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

// accordion
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.accordion-button');

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-expanded', 'false');
      buttons[i].nextElementSibling.style.display = 'none';
      buttons[i].querySelector('.accordion-icon').textContent = '+';
    }

    if (itemToggle === 'false') {
      this.setAttribute('aria-expanded', 'true');
      this.nextElementSibling.style.display = 'block';
      this.querySelector('.accordion-icon').textContent = '-';
    }
  }

  buttons.forEach(button => button.addEventListener('click', toggleAccordion));
});
