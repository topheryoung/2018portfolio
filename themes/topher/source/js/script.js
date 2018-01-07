(function($){

  var isPastHero = false;

  // Menu actions
  $('.menu').click(function() {
    $(this).toggleClass('close');
    $('nav').toggleClass('show');
    if ($('nav').hasClass('show')) {
      $('.menu').removeClass('dark');
    } else {
      if (isPastHero) {
        $('.menu').addClass('dark');
      }
    }
  });

  // Elevator scroll
  $('#down-arrow').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    return false;
  });

  // Scroll icon change
  $(window).scroll(function() {
    var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    var offset = $('#hero').offset().top; // pixels to the top of div1
    var height = $('#hero').height(); // height of div1 in pixels
    // if you've scrolled further than the top of div1 plus it's height
    // change the color. either by adding a class or setting a css property
    if(scroll > offset + height - 40){
      isPastHero = true;
      $('#logo').addClass('dark');
      $('.menu').addClass('dark');
    } else {
      isPastHero = false;
      $('#logo').removeClass('dark');
      $('.menu').removeClass('dark');
    }
  });

})(jQuery);