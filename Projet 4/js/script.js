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

$(document).ready(function(){
   $('.modal').modal();
 });

//For the easter egg
 $( ".change" ).on("click", function() {
    var url = "img/sectionff.jpg";
    var url2 = "img/section1.jpg"

             if( $( "body" ).hasClass( "fffont" )) {
                 $( "body" ).removeClass( "fffont" );
                 $("#parallax1").attr('src','img/pa2.jpg');
                 $("#parallax2").attr('src','img/pa1.jpg');
                 $("#parallax3").attr('src','img/pa.jpg');
                 $(".gradient1").css("background-image", "url(" + url2 + ")");
                 $(".page-footer").css('background-color', '#424242');
                 $(".page-footer").css('background-image', 'radial-gradient(farthest-side at 10px 0,rgba(12, 14, 134, 0.3),#424242)');
             } else {
                 $( "body" ).addClass( "fffont" );
                 $("#parallax1").attr('src','img/ffxv.jpg');
                 $("#parallax2").attr('src','img/Gallery13.jpg');
                 $("#parallax3").attr('src','img/Gallery02.jpg');
                 $(".gradient1").css("background-image", "url(" + url + ")");
                 $("#idea").css("background-image", "url(" + url + ")");
                 $(".page-footer").css('background-color', '#546e7a');
                 $(".page-footer").removeProperty("background-image");
             }
         });
