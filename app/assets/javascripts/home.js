$(document).on('page:change ready', function(){

	welcome_page_scroll()
	scroll_to_position()
	function welcome_page_scroll(){
		$('section[data-type="background"]').each(function(){
			var $back_object = $(this);  //To Assign the object of section
			$(window).scroll(function(){
				var $window = $(window)
				var yPos = - ($window.scrollTop()/$back_object.data('speed'));
				
				// final background position here
				var coords = '50%' + yPos + 'px';

				// to move the background
				$back_object.css({backgroundPosition: coords});
			});
		});

	}

	function scroll_to_position(){
		$("#desktop_arrow").click(function(){
			$('html, body').animate({
				scrollTop: $("#video-sec").offset().top
			}, 2000);
			});
		
	}
});