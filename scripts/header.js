const menuLink = document.getElementById('three_dots_menu');
const menu = document.getElementById('menu');
const menuHeight = document.getElementById('header_top');
const headerBorder = document.getElementById('header');
let isMenuOpen = false;

menuLink.addEventListener('click', function(event) {
  menu.classList.toggle('hidden');
  menuHeight.classList.toggle('visible_line_height');
  headerBorder.classList.toggle('header_open_border_radius');
  isMenuOpen = !isMenuOpen;
  event.preventDefault();
});

document.body.addEventListener('click', function(event) {
  if (isMenuOpen && !menu.contains(event.target) && !menuLink.contains(event.target)) {
    menu.classList.add('hidden');
    menuHeight.classList.toggle('visible_line_height');
    headerBorder.classList.toggle('header_open_border_radius');
    isMenuOpen = false;
  }
});


var topLink = document.getElementById('top_link');

topLink.addEventListener('click', function(event) {
  event.preventDefault();
  var scrollOptions = {
    top: 0,
    behavior: 'smooth'
  };
  window.scrollTo(scrollOptions);
});