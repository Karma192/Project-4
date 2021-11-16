$(document).ready(function(){
    $('.sidenav').sidenav();
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
});

$(document).ready(function(){
  $('.parallax').parallax();
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});
