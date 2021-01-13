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
		
    if($('video').length){

     

      $(window).scroll(function () { 
      
        $('video').each(function(){
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
      
      });  

    } 
    
    
   });
  
})(jQuery);
