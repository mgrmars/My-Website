const menuButton = document.getElementById('menuButton');
const menuLinks = document.getElementById('navigationMenu');

menuButton.addEventListener('click', () => {
  menuLinks.classList.toggle('hidden');
});