//= require jquery/dist/jquery.min
//= require bootstrap/dist/js/bootstrap.min
//= require slick.min

$(document).ready(function(){
  $('.slick').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    dots: true,
  });
});
