/*$(document).ready(function(){
  $('.main_slider').slick({
  slidesToShow: 3,
  dots:true,
  centerMode: true,
  });*/
});
(function($) {
    $(document).ready(function() {
        $('.main_slider').slick({
            dots: true,
            infinite: true,
            cssEase: 'linear',
            swipe: false,
			slidesToShow: 3,
            dots:true,
            centerMode: true
        });
    });
	
})( jQuery );