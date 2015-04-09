$(document).on('page:change ready', function(){

	// rsvp_navigation_dot()
	close_alert()
	countdown_timer() //calling from countdown_custom.js
	scroll_to_RSVP()
	scroll_to_Info()
	rsvp_scroll_to_top()

});

function scroll_to_RSVP(){
	$("#rsvp_form_arrow").click(function(){
		$('html, body').animate({
			scrollTop: $("#rsvp_form").offset().top
		}, 1000);
		});
}

function rsvp_scroll_to_top(){
	$("#rsvp_top_button").click(function(){
		$('html, body').animate({
			scrollTop: $("#rsvp_top").offset().top
		}, 1000);
		});
}

function scroll_to_Info(){
	$("#rsvp_date").click(function(){
		$('html, body').animate({
			scrollTop: $("#rsvp_date").offset().top
		}, 500);
		});
	$("#rsvp_location").click(function(){
		$('html, body').animate({
			scrollTop: $("#rsvp_location").offset().top
		}, 500);
		});
	$("#rsvp_hotel").click(function(){
		$('html, body').animate({
			scrollTop: $("#rsvp_hotel").offset().top
		}, 500);
	});
	$("#rsvp_activity").click(function(){
		$('html, body').animate({
			scrollTop: $("#rsvp_activity").offset().top
		}, 500);
	});
}


function remove_mapimage(){
	$(".rsvp_mapoverlay").removeClass();
}

function close_alert(){
	$(".close").click(function(){
        $(".alert").alert('close');
    });
}

function rsvp_navigation_dot(){
		/* dot nav */
	$(window).bind('scroll',function(e){
	  redraw_rsvp_DotNav();
	});

	function redraw_rsvp_DotNav(){
	  
	  	var rsvptopNavHeight = 50;
	  	var numDivs = $('section').length;
		
	  	$('#rsvp_dotNav li a').removeClass('active').parent('li').removeClass('active');  	
	  	// only follows section and section ID
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
	      
	      var docTop = $(document).scrollTop()+rsvptopNavHeight;
	      
	      if(docTop >= thisTop && (docTop < nextTop)){
	        $('#rsvp_dotNav li').eq(i).addClass('active');
	      }
		});   
	}

	/* get clicks working */
	$('#rsvp_dotNav li').click(function(){
	  
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
