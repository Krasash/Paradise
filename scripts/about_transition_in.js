const transitionOutElements = document.querySelectorAll('.transition_out_effect');
const transitionInElements = document.querySelectorAll('.transition_in_effect');
const link = document.getElementById('about_link');


window.addEventListener('DOMContentLoaded', function() {
  
    transitionInElements.forEach(element => {
      element.classList.remove('fade_out');  
      element.classList.add('fade_in');
    });

});

link.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.add('hidden');
      menuHeight.classList.add('visible_line_height');
      headerBorder.classList.remove('header_open_border_radius');

    transitionOutElements.forEach(element => {
        element.classList.remove('fade_in');
        element.classList.add('fade_out');
    });

    setTimeout(function() {
        window.location.href = link.href;
    }, 300);
});


