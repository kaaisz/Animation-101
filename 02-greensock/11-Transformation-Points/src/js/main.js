(function($) {

	var box = $('.box'),
		boxSVG = $('#boxSVG'),
		boxHTML = $('#boxHTML'),
		htmlDot = $('#htmlDOT'),
		svgDot = $('#boxSVG .circ'),
		tl = new TimelineLite({paused: true});

	// Transformation Points - SVG and HTML
	tl
		// each of elements will move 100% from x dimension and y dimension
		.to(boxHTML, 0.4, {x: '100%', y: '100%', ease:Power2.easeInOut})
		.to(boxSVG, 0.4, {x: '100%', y: '100%', ease:Power2.easeInOut})
		.addPause() // to pause this element
		// animating left and top to 50%
		.to(boxHTML, 0.4, {left: '50%', top: '50%', ease:Power2.easeInOut}) 
		.to(boxSVG, 0.4, {left: '50%', top: '50%', ease:Power2.easeInOut})
		.addPause()
		// center htmlBox and move htmlDot to left top
		.to(boxHTML, 0.4, {left: '50%', top: '50%',　x: '-50%', y: '-50%', ease:Power2.easeInOut}) 
		.to(htmlDot, 0.4, {left: 0, top: 0, ease:Power2.easeInOut})
		.addPause()
		.to(boxSVG, 0.4, {left: '50%', top: '50%',　x: '-50%', y: '-50%', ease:Power2.easeInOut}) 
		.to(svgDot, 0.4, {attr: {cx: 0, cy: 0}, ease:Power2.easeInOut})
		.addPause()
		// rotate boxHTML 90deg to right
		.to(boxHTML, 0.4, {rotation: 90, transformOrigin: '100% 100%',　ease:Power2.easeInOut})		
		.addPause()
		.to(boxSVG, 0.4, {rotation: 90, transformOrigin: '100% 100%',　ease:Power2.easeInOut})		
		.addPause()
		// move boxHTML center and touch to the y axis 
		.to(boxHTML, 0.4, {xPercent: -100, rotation: 0, ease: Power2.easeInOut})
		.addPause()
		// then move boxSVG next to it
		.to(boxSVG, 0.4, {x: '0%', rotation: 0, ease: Power2.easeInOut})
		.addPause()
		// dot animate back into the original position
		.to(htmlDot, 0.4, {left: '50%', top: '50%', ease: Power2.easeInOut})
		.to(svgDot, 0.4, {attr: {cx: 100, cy: 100}, ease: Power2.easeInOut}, '-=0.4')
		.addPause()
		// whirl both of them
		.to([boxSVG, boxHTML], 0.4, {rotation: 720, transformOrigin: '50% 50%', ease: Power2.easeInOut})
		.addPause()
		// flip them, then back to the starting position
		// it'll use perspective class which is already setup in CSS
		.to(boxHTML, 0.4, {rotationX: -180, transformOrigin: '50% 50%', ease: Power2.easeInOut})
		// 100% 50% = right center
		.to(boxSVG, 0.4, {rotationY: -180, transformOrigin: '100% 50%', ease: Power2.easeInOut})
		.addPause()
		// then flip back to center position
		.to(boxHTML, 0.4, {rotationX: -360, ease: Power2.easeInOut})
		.to(boxSVG, 0.4, {rotationY: -360, ease: Power2.easeInOut})


	$('#btnNext').on('click',function(){
		tl.play();
	});

	$('#btnPrev').on('click',function(){
		tl.reverse();
	});

})(jQuery);






