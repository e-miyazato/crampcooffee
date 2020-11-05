$(function(){

  $('.top-wrapper img:nth-child(n+2)').hide();
      setInterval(function() {
        $(".top-wrapper img:first-child").fadeOut(2000);
        $(".top-wrapper img:nth-child(2)").fadeIn(2000);
        $(".top-wrapper img:first-child").appendTo(".top-wrapper");
      }, 5000);

      var navPos = jQuery( '.header-wrapper' ).offset().top; // グローバルメニューの位置
      var navHeight = jQuery( '.header-wrapper' ).outerHeight(); // グローバルメニューの高さ
      jQuery( window ).on( 'scroll', function() {
        if ( jQuery( this ).scrollTop() > navPos ) {
          jQuery( 'body' ).css( 'padding-top', navHeight );
          jQuery( '.header-wrapper' ).addClass( 'm_fixed' );
        } else {
          jQuery( 'body' ).css( 'padding-top', 0 );
          jQuery( '.header-wrapper' ).removeClass( 'm_fixed' );
        }
      });

  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

