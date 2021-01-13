(function($) {

  $(document).ready(function() { 
  
  
  	var elementTop, elementBottom, viewportTop, viewportBottom;

    function isScrolledIntoView(elem) {
      elementTop = $(elem).offset().top;
      elementBottom = elementTop + $(elem).outerHeight();
      viewportTop = $(window).scrollTop();
      viewportBottom = viewportTop + $(window).height();
      return (elementBottom > viewportTop && elementTop < viewportBottom);
    }
		
    if($('.test').length){

     

      $(window).scroll(function () { // video to play when is on viewport 
      
        $('.test').each(function(){
          if (isScrolledIntoView(this) == true) {

           console.log($(this).hasClass('playing'));

           if(!$(this).hasClass('playing')) {
              console.log('play video');
              $(this).addClass('playing');
              console.log(this);
              $(this)[0].play();
           }
            
          } else {

              if($(this).hasClass("playing")) {
                console.log("pause video");
              console.log(this);
              $(this)[0].pause();
              $(this).removeClass('playing');
              }
              
          }
        });
      
      });  // video to play when is on viewport

    } // end .field--name-field-video
    
    
   });
  
})(jQuery);
