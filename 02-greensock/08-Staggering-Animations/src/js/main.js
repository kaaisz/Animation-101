(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		buttons = $('button'),
		tl = new TimelineLite();

	// Staggering Animations
	tl
		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		// stagger animation coming thorough by order
		// staggerFrom - from the certain x position
		// .staggerFrom(buttons, 0.2, {x: 200, ease: Power1.easeOut}, 0.1);
		// staggerTo - to the certain x position
		// .staggerTo(buttons, 0.2, {x: -20, ease: Power1.easeOut}, 0.1);
		// staggerFromTo - {from the certain position} to {to the certain position}
		// .staggerFromTo(buttons, 0.2, 
		// 	{autoAlpha: 0, x: 10}, // autoAlpha 0 - invisible
		// 	{x: -20, autoAlpha: 1, ease: Power1.easeOut}, // autoAlpha 1 - visible
		// 	0.1);	
		// you can make some cycle animation as well by adding cycle object
		.staggerFrom(buttons, 1, {cycle: {
			x: [50, -50], // stagger position for the first one and 2nd one
			scale: [2, 0.5], // add scale 2 to 0.5
		}, autoAlpha: 0, ease: Power1.easeOut}, 0.5)


	$('#btnPlay').on('click',function(){
		tl.play();
	});

	$('#btnPause').on('click',function(){
		tl.pause();
	});

	$('#btnResume').on('click',function(){
		tl.resume();
	});

	$('#btnReverse').on('click',function(){
		tl.reverse();
	});

	$('#btnSpeedUp').on('click',function(){
		tl.timeScale(8);
	});

	$('#btnSlowDown').on('click',function(){
		tl.timeScale(0.5);
	});

	$('#btnSeek').on('click',function(){
		tl.seek(1);
	});

	$('#btnProgress').on('click',function(){
		tl.progress(0.5);
	});

	$('#btnRestart').on('click',function(){
		tl.restart();
	});

})(jQuery);






