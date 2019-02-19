(function($) {

	// define element
	var img = $('img'),
			h2 = $('h2');
			i = 0;

	// define callback
	const onStart = () => {
		console.log('Animation Started');
	}

	const onUpdate = () => {
		// console.log('Animation is in Progress');
		h2.text(i++);
	}

	const onComplete = () => {
		console.log('Animation completed!');
	}


	// Simple Callback Functions
	TweenLite.from(
		img, 
		1, 
		{
			x: -200, 
			ease:Power1.easeInOut,
			onStart: onStart,
			onUpdate: onUpdate,
			onComplete: onComplete,
		}
	);

})(jQuery);