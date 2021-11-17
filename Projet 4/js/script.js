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

//The Modal
var modal = document.getElementById("Modal");
var btn = document.getElementById("Button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(".dropdown-trigger").dropdown();
