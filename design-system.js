var hamburgerMenuIcon = document.getElementById('hamburger-menu-icon');
var closeIcon = document.getElementById('close-icon');
var sidebar = document.getElementById('sidebar');

// When the page loads, show the hamburger menu icon and hide the close icon
window.onload = function() {
  hamburgerMenuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
};

hamburgerMenuIcon.addEventListener('click', function() {
  sidebar.classList.toggle('is-active');
  hamburgerMenuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', function () {
  sidebar.classList.toggle('is-active');
  hamburgerMenuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
});