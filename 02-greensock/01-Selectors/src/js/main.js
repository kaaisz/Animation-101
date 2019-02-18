(function($) {
  console.log('Hello from tweenmax');
	// JS code goes here
	var header = $('#header');
	TweenLite.to(
		header, // animate will appear to header,
		1, // duration will 1 sec, 
		{
			// animate with opacity with y offset
			opacity: 0,
			y: 50
		}
	)
})(jQuery);