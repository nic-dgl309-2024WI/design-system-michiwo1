/* hamburger menu */
document.querySelector('.c-nav__toggle').addEventListener('click', function () {
  document.querySelector('nav').classList.toggle('c-nav__show');
});

//pagination
document.addEventListener('DOMContentLoaded', function () {
  changeImageSet(1);
});

function changeImageSet(page) {
  const imageSets = {
    1: ["images/product-1.png", "images/product-2.png", "images/product-3.png", "images/product-4.png"],
    2: ["images/product-1.png", "images/product-1.png", "images/product-1.png", "images/product-1.png"],
    3: ["images/product-2.png", "images/product-2.png", "images/product-2.png", "images/product-2.png"],
    4: ["images/product-3.png", "images/product-3.png", "images/product-3.png", "images/product-3.png"],
    5: ["images/product-4.png", "images/product-4.png", "images/product-4.png", "images/product-4.png"],
    6: ["images/product-1.png", "images/product-1.png", "images/product-1.png", "images/product-1.png"],
  };

  const images = document.querySelectorAll('.c-products__image--size');
  images.forEach((img, index) => {
    img.src = imageSets[page][index];
  });

  document.querySelectorAll('.c-products__pagination--link').forEach(a => a.classList.remove('c-products__pagination--link--active'));
  document.querySelectorAll('.c-products__pagination--link')[page].classList.add('c-products__pagination--link--active');
}

// carousel
(function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.c-carousel__slide');
  const track = document.querySelector('.c-carousel__track');
  const totalSlides = slides.length;

  function updateSlidePosition() {
    const newTransformValue = currentIndex * -100;
    track.style.transform = `translateX(${newTransformValue}%)`;
  }

  document.querySelector('.c-carousel__button--right').addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
    }
    updateSlidePosition();
  });

  document.querySelector('.c-carousel__button--left').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
    } else {
      currentIndex = totalSlides - 1;
    }
    updateSlidePosition();
  });

})();

(function() {
  let currentSlideIndex = 0;
  const carouselList = document.querySelector('.c-carousel__list');
  const slides = document.querySelectorAll('.c-carousel__element');
  const totalSlides = slides.length;
  let slideChangeCount = 0; 

  function setSlidePosition(slide, index) {
    slide.style.left = `${index * 100}%`;
  }
  slides.forEach(setSlidePosition);

  function moveToSlide(carouselList, targetIndex) {
    carouselList.style.transform = `translateX(-${targetIndex * 100}%)`;
  }

  document.querySelector('.c-carousel__control-left').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : totalSlides - 1;
    moveToSlide(carouselList, currentSlideIndex);
    slideChangeCount = 0;
  });

  document.querySelector('.c-carousel__control-right').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    moveToSlide(carouselList, currentSlideIndex);
    slideChangeCount = 0; 
  });

})();

// accordion
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.accordion__button');

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-expanded', 'false');
      buttons[i].nextElementSibling.style.display = 'none';
      buttons[i].querySelector('.accordion__icon').textContent = '+';
    }

    if (itemToggle === 'false') {
      this.setAttribute('aria-expanded', 'true');
      this.nextElementSibling.style.display = 'block';
      this.querySelector('.accordion__icon').textContent = '-';
    }
  }

  buttons.forEach(button => button.addEventListener('click', toggleAccordion));
});

// code snippet
function copyToClipboard() {
  var code = document.getElementById('code').innerText;
  var textarea = document.createElement('textarea');
  textarea.textContent = code;
  textarea.style.position = "fixed";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    document.getElementById('copyMessage').style.display = 'block';
    setTimeout(function () {
      document.getElementById('copyMessage').style.display = 'none';
    }, 2000);
  } catch (ex) {
    console.warn("Copy to clipboard failed.", ex);
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
}
