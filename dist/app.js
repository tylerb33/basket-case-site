(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

function sayHi() {
	return "Hi";
}

module.exports = {sayHi};
},{}],2:[function(require,module,exports){
"use strict";

	$(document).ready(function(){

	    $('.parallax').parallax();


	    let test = require('./creds.js');
	    console.log(test.sayHi());




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
},{"./creds.js":1}]},{},[2]);
