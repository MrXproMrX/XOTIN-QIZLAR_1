$(document).ready(function(){
    $('.slaeder__top__slik').slick({
        dots: true,
        arrows:true,
        autoplaySpeed:3000,
        infinite: true,
        speed: 1500,
        autoplay:true,
        fade: true,
    });


 $('.Affiliate__slik').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  arrows: false,
  slidesToScroll: 1,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$(document).ready(function(){
  $('.header__mrx__max__burger').click(function(){
    $('.header__item__bottom').fadeTo(500, 1)
    $('.header__item__bottom').css('opacity',1).css('z-index',5555)
  })
});

$(document).ready(function(){
  $('.header__burger__none').click(function(){
    $('.header__item__bottom').fadeTo(500, 1)
    $('.header__item__bottom').css('display','none')
  })
});
});



$(document).ready(function(){
  $('.header__from__true').click(function(){
    $('.header__form').fadeTo(500, 1)
    $('.header__form').css('z-index','555').css('opacity','1').css('margin','0')
  })
});

$(document).ready(function(){
  $('.header__button__false').click(function(){
      $('.header__form').fadeTo(500, 1)
      $('.header__form').css('z-index','0').css('opacity','0').css('margin','-100%')
  })
});