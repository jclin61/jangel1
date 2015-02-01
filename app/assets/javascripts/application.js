// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
// = require jquery
// = require jquery_ujs
// = require turbolinks
// = require_tree .


// Dropotron navigation drop down
$(function() {
	
	// Note: make sure you call dropotron on the top level <ul>
	$('#main-nav > ul').dropotron({ 
		offsetY: -10 // Nudge up submenus by 10px to account for padding
	});

});

// BACKGROUND VIDEO SCRIPTS
$(function () {
    $(".player").mb_YTPlayer(); // .player - class to add for playing video ( see the div above to understand)
});

