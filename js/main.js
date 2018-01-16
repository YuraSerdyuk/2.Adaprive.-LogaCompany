$('.sl').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,

  prevArrow: false, /*вимкнута ліва стрілка*/
  nextArrow: false, /*вимкнута права стрілка*/
  dots: false, /*вимкнута навігація знизу*/
});







$('.sl2').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
        infinite: false,
        focusOnSelect: true,
        initialSlide: 1
      }
    }
  ]
});




$('.sl3').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        infinite: false,
        focusOnSelect: true,
        initialSlide: 1
      }
    }
  ]
});



/* Активація кнопки гамбургер меню */
$('.menu-icon').click(function(){
  $('.menu').toggleClass('active');
});


