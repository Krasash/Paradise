const transitionOutElements = document.querySelectorAll('.transition_out_effect');
const transitionInElements = document.querySelectorAll('.transition_in_effect');
const back = document.getElementById('back_home_link');

window.addEventListener('DOMContentLoaded', function() {
  
    transitionInElements.forEach(element => {
      element.classList.remove('fade_out');  
      element.classList.add('fade_in');
    });

});

back.addEventListener('click', function(event) {

    transitionOutElements.forEach(element => {
        element.classList.remove('fade_in');
        element.classList.add('fade_out');
    });

    setTimeout(function() {
        window.location.href = link.href;
    }, 300);
});