$(document).on('page:change ready', function(){

	welcome_page_scroll()
	scroll_to_position()
	sd_scroll_to_top()
	sd_navigation_dot()
	savethedate_type()
	rsvp_scroll_to_top()
	
});

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


function sd_scroll_to_top(){
	$("#sd_top_button").click(function(){
		$('html, body').animate({
			scrollTop: $("#savethedatepage").offset().top
		}, 1000);
		});
}

function sd_navigation_dot(){
		/* dot nav */
	$(window).bind('scroll',function(e){
	  redrawsd_DotNav();
	});

	function redrawsd_DotNav(){
	  
	  	var topNavHeight = 50;
	  	var numDivs = $('section').length;
		
	  	$('#sd_dotNav li a').removeClass('active').parent('li').removeClass('active');  	
	  	$('section').each(function(i,item){
	      var ele = $(item), nextTop;
	      
	      console.log(ele.next().html());
	      
	      if (typeof ele.next().offset() != "undefined") {
	        nextTop = ele.next().offset().top;
	      }
	      else {
	        nextTop = $(document).height();
	      }
	      
	      if (ele.offset() !== null) {
	        thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numDivs);
	      }
	      else {
	        thisTop = 0;
	      }
	      
	      var docTop = $(document).scrollTop()+topNavHeight;
	      
	      if(docTop >= thisTop && (docTop < nextTop)){
	        $('#sd_dotNav li').eq(i).addClass('active');
	      }
		});   
	}

	/* get clicks working */
	$('#sd_dotNav li').click(function(){
	  
		var id = $(this).find('a').attr("href"),
	      posi,
	      ele,
	      padding = $('.navbar-fixed-top').height();
	  
		ele = $(id);
		posi = ($(ele).offset()||0).top - padding;
	  
		$('html, body').animate({scrollTop:posi}, 'slow');
	  
		return false;
	});

	/* end dot nav */
}
	

function savethedate_type(){
	var win = $(window),
        air = $('#typer');
		air.typer(['air!', 'water!']);
}

function rsvp_scroll_to_top(){
	$("#rsvp_top_button").click(function(){
		$('html, body').animate({
			scrollTop: $("#rsvp_top").offset().top
		}, 1000);
		});
}
