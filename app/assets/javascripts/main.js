$(document).ready(function(){
  $('.slick').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 1000
        }
      }
    ]
  });

  $('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
});
