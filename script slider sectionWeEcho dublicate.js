
$(document).ready(function() {

$('.commitment_slider').slick({
    autoplay: false,
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='images/slickleftarr.png'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='images/slickrightarr.png'></button>",
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});

  