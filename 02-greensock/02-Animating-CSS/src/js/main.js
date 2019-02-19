(function($) {
    
	let img = document.querySelector('img');
	let h2 = document.querySelector('h2');

	// Simple Tween
	// TweenLite.to (
	// 	img, //target element
	// 	1, // 1 seconds
	// 	// transition
	// 	{
	// 		// width: 100 //100px
	// 		x: 200 // transition transform-x to 200px - <style="transform: matrix(1, 0, 0, 1, 200, 0);">
	// 	}
	// )

	// of course you can set transition `.from` as well.
	// TweenLite.from (
	// 	img, //target element
	// 	1, // 1 seconds
	// 	// transition
	// 	{
	// 		// width: 100 //100px
	// 		x: 200 // transition transform-x to 200px - <style="transform: matrix(1, 0, 0, 1, 200, 0);">
	// 	}
	// )

	// then, when you set transition for both from and to ...?
	// TweenLite.fromTo(
	// 	img, 
	// 	1, 
	// 	{x: -200}, // transition from
	// 	{x: 200} // transition to
	// );
	

	// furthermore in case of if you just `set`...
	// it'll just set to the position which you specified - without any transition
	// TweenLite.set(img, {x: -200});

	TweenLite.from(img, 1, {x: -200});
	TweenLite.from(
		h2, 
		1, 
		{
			autoAlpha: 0, // autoAlpha equals to opacity with hidden visibility
			delay: 1 // delay set to appear after previous element has been appeared
		}
	); 

})(jQuery);