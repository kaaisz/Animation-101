(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		buttons = $('button'),
		tl = new TimelineMax({paused: true}),
		dot = $('.dot'),
		loader = $('#loader'),
		tlLoader = new TimelineMax({repeat: 2, onComplete: loadContent}); 
		// no need to put {paused} to execute straight away
		// loadContent will execute after 2 times of repeat ends

	// TimelineLite vs TimelineMax
	tl
		.set(header, {autoAlpha: 1}) // to appear main content
		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15');

	// Loader Timeline
	tlLoader
		.staggerFromTo(dot, 0.3, 
			{y: 0, autoAlpha: 0}, // {fromVars}, 
			{y: 20, autoAlpha: 1, ease: Back.easeInOut},// {toVars}, 
			0.05 // stagger delay
		)
		.fromTo(loader, 0.3, 
			{autoAlpha: 1, scale: 1.3},// {fromVars} 
			{autoAlpha: 0, scale: 1, ease: Power0.easeNone},// {toVars}
			0.9 // absolute position
		)

	function loadContent() {
		// show the alert for finishing load content
		let tlLoaderOut = new TimelineLite({onComplete: contentIn});
		tlLoaderOut
			.set(
				dot, 
				{backgroundColor: '#2b4d66'}
			)
			.to(
				loader, // element
				0.3, // duration
				{
					autoAlpha: 1, 
					scale: 1.3, // to slightly scale it up
					ease: Power0.easeNone
				}
			)
			.staggerFromTo(dot, 0.3,
				{y: 0, autoAlpha: 0},
				{y: 20, autoAlpha: 1, ease: Back.easeInOut},
				0.05, 0 
			)
			.to(
				loader, 0.3,
				{
					y: -150, // 150px up from the current position
					autoAlpha: 0, // fade it out
					ease: Power1.easeIn　// to animate with slide-back-down
				},
				'+=0.3'
			);
	}

	function contentIn() {
		tl.play();
	}


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






