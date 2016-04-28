(function ($) {

  // adds in a fixed position menu
  //@todo: move this to menu main
  //-50px is from the header .. yes this is terrible shold make it into one menu tringie instead
  $(window).scroll(function() {
    if( $(this).scrollTop() > $('.path-frontpage .js-hero-front').height() -  $('.path-frontpage .js-header').height() ) {
      $('.path-frontpage .js-menu-main').addClass('menu-main--locked');
    } else {
      $('.path-frontpage .js-menu-main').removeClass('menu-main--locked');
    }

    //header menu + main menu resizing
    if( $(this).scrollTop() > $(window).height()/2  ){
      $('.js-header').addClass('t-header--small');
      $('.js-menu-main').addClass('menu-main--small');
    }else{
      $('.t-header').removeClass('t-header--small');
      $('.js-menu-main').removeClass('menu-main--small');
    }

    console.log( $(this).scrollTop() );
  });

  // smooth scroll
  $(function() {

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            // calculates hero-nav height
            scrollTop: target.offset().top - $('.hero-nav--locked').height()
          }, 1000);
          return false;



        }
      }
    });
  });

})(jQuery);
