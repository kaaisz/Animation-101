(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite();

	// Controlling Timeline Playback
	tl
		.from(h1, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.add('intro')
		.from(intro, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(img, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(h2, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(listItem, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut});

		tl.pause(); // to pause animation

		// animation will start playing when play button has been clicked
		document.querySelector('#btnPlay').addEventListener('click', function() {
			tl.play();
		});

		// animation will pause playing when pause button has been clicked
		document.querySelector('#btnPause').addEventListener('click', function() {
			tl.pause();
		});

		// animation will restart playing when resume button has been clicked
		document.querySelector('#btnResume').addEventListener('click', function() {
			tl.resume();
		});
		
		// animation will reverse playing when reverse button has been clicked
		document.querySelector('#btnReverse').addEventListener('click', function() {
			tl.reverse();
		});
		
		// animation will speed up playing when speedup button has been clicked
		document.querySelector('#btnSpeedUp').addEventListener('click', function() {
			tl.timeScale(4); // timeScale(x) - speed up x times
		});

		// animation will slow down when pause button has been clicked
		document.querySelector('#btnSlowDown').addEventListener('click', function() {
			tl.timeScale(0.5);
		});

		// animation will restart playing when seek 1 sec button has been clicked
		document.querySelector('#btnSeek').addEventListener('click', function() {
			tl.seek(1); 
			// seek will jump into absolute position in timeline 
			// 1 = 1sec from `intro`
		});
		
		// animation will restart playing when go to 50% button has been clicked
		document.querySelector('#btnProgress').addEventListener('click', function() {
			tl.progress(0.5); // 0 is for start / 1 is for end - 0.5 is for middle
		});
		// animation will restart from 0 when restart button has been clicked
		document.querySelector('#btnRestart').addEventListener('click', function() {
			tl.restart();
		});

})(jQuery);






