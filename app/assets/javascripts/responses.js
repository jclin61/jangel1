$(document).on('page:change ready', function(){

	rsvp_navigation_dot()
	close_alert()
	
});



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
	  
	  	var topNavHeight = 50;
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
	      
	      var docTop = $(document).scrollTop()+topNavHeight;
	      
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