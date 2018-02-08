"use strict";

	$(document).ready(function(){
	    let creds = require('./creds.js');

	    $('.parallax').parallax();


	    var userFeed = new Instafeed({
	        get: 'user',
	        userId: '406989814',
	        limit: 12,
	        resolution: 'standard_resolution',
	        accessToken: creds.getAccessToken(),
	        sortBy: 'most-recent',
	        template: `<div class="col s12 m4 l3 remove-padding"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" class="insta-photo" alt="{{caption}}"/></a></div>`
	    });
	    userFeed.run();




	   	var headerHeight = $('header').outerHeight();

	    $('.slide').click(function(e) {


	    	var linkHref = $(this).attr('href');
	    	console.log("linkHref", linkHref);

	    	$('html, body').animate({
	    		scrollTop: $(linkHref).offset().top - headerHeight
	    	});

	    	e.preventDefault();
	    });
	});