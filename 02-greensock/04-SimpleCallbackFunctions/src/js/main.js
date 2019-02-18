(function($) {
    
	var img = $('img'),
		h2 = $('h2');

	// Simple Callback Functions
	TweenLite.from(img, 1, {x: -200, ease:Power1.easeInOut});

})(jQuery);