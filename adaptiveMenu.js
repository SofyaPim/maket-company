$('.header__button').click(function () {


  let AttrStyle = $('.header__nav').attr('style');

  if (AttrStyle == undefined) {

    $('.header__nav').css('right', '0%');
    $('.header__nav').css('transition', '1s');
    $('.line1').css('transform', 'rotate(-45deg) translate(0px,3px)');
    $('.line2').css('display', 'none');
    $('.line3').css('transform', 'rotate(45deg) translate(0px,-7px)');

  } else {
    $('.header__nav').removeAttr('style');
    $('.line1').removeAttr('style');
    $('.line3').removeAttr('style');
    $('.line2').removeAttr('style');


  }



});