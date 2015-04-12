$(document).on('page:change ready', function(){

	close_alert()
	countdown_timer() //calling from countdown_custom.js
	// scroll_to_Info()
	destroy_rsvp_mobile_js()
	rsvp_scroll_to_top()

});

function destroy_rsvp_mobile_js(){
	if(window.innerWidth <= 800 && window.innerHeight <= 667) {
     
   } 
   else {
     scroll_to_RSVP()
   }
 
}
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
			scrollTop: $("#rsvp_fullpage").offset().top
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
