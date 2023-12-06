// -------------------------------------------------weEcho slider------------------------------------------------------------------------ 

$(document).ready(function () {
  var $status = $('.pagingInfo');
  var $slickElement = $('.commitment_slider');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    // $status.text(i + '/' + slick.slideCount);
    $status.text('0' + i + '/' + '0' + slick.slideCount);
  });


  $slickElement.slick({
    autoplay: false,
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 2.3,
    // slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='images/slickleftarr.png'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='images/slickrightarr.png'></button>",
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});


// ----------------------------------------joyDay__slider------------------------------------------------------------------------ 
$(document).ready(function () {

  var $joyDayStatus = $('.joyDay__pagingInfo');
  var $joyDaySlickElement = $('.joyDay__slider');

  $joyDaySlickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    // $joyDayStatus.text(i + '/' + slick.slideCount);
    $joyDayStatus.text('0' + i + '/' + '0' + slick.slideCount);
  });


  $joyDaySlickElement.slick({
    autoplay: false,
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    variableWidth: true,
    dots: false,
    speed: 400,
    // slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='images/slickleftarr.png'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='images/slickrightarr.png'></button>",
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          variableWidth: false,
        }
      },
      

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});

// -------------------------------------------------celebrations slider------------------------------------------------------------------------ 

$(document).ready(function () {
  var $celebrationsPagingInfo = $('.celebrationsPagingInfo');
  var $celebrationsSlickElement = $('.celebrations_slider');

  $celebrationsSlickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    // $celebrationsPagingInfo.text(i + '/' + slick.slideCount);
    $celebrationsPagingInfo.text('0' + i + '/' + '0' + slick.slideCount);
  });


  $celebrationsSlickElement.slick({
    autoplay: false,
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 3.3,
    // slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth : true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='images/slickleftarr.png'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='images/slickrightarr.png'></button>",
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});

// -------------------------------------------------employeesDriving slider------------------------------------------------------------------------ 

$(document).ready(function () {
  var $employeesDrivingPagingInfo = $('.employeesDrivingPagingInfo');
  var $employeesDrivingSlickElement = $('.employeesDriving_slider');

  $employeesDrivingSlickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    // $employeesDrivingPagingInfo.text(i + '/' + slick.slideCount);
    $employeesDrivingPagingInfo.text('0' + i + '/' + '0' + slick.slideCount);
  });


  $employeesDrivingSlickElement.slick({
    autoplay: false,
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 2,
    // slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth : true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='images/slickleftarr.png'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='images/slickrightarr.png'></button>",
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});