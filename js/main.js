$(function(){


	/*SLIDER*/
	
	$('.hero-slider').slick({
	  dots: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: true
	});


	$('.m-btn').click(function(){
		$('.menu').slideToggle();
	});

	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});

	var button = $('.btn-top');	
	  $(window).scroll (function () {
	    if ($(this).scrollTop () > 400) {
	      button.fadeIn();
	    } else {
	      button.fadeOut();
	    }
    });
	  button.on('click', function(){
			$('body, html').animate({
		scrollTop: 0
		}, 800);
			return false;
		});		 

});