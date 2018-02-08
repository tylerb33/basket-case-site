
	$(document).ready(function(){
	    $('.parallax').parallax();


	    var userFeed = new Instafeed({
	        get: 'user',
	        userId: '406989814',
	        limit: 12,
	        resolution: 'standard_resolution',
	        accessToken: '406989814.1677ed0.e4c4933ed0994e8d81af9e1811d1811a',
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