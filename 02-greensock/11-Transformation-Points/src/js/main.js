(function($) {

	var box = $('.box'),
		boxSVG = $('#boxSVG'),
		boxHTML = $('#boxHTML'),
		htmlDot = $('#htmlDOT'),
		svgDot = $('#boxSVG .circ'),
		tl = new TimelineLite({paused: true});

	// Transformation Points - SVG and HTML
	tl
		.to(boxHTML, 0.7, {x: '100%', y: '100%', ease:Power2.easeInOut})
		.to(boxSVG, 0.7, {x: '100%', y: '100%', ease:Power2.easeInOut});

	$('#btnNext').on('click',function(){
		tl.play();
	});

	$('#btnPrev').on('click',function(){
		tl.reverse();
	});

})(jQuery);






