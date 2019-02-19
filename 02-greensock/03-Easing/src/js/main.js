(function($) {
    
	var img = $('img'),
		h2 = $('h2');

	// Simple Tween
	TweenLite.from(
		img, 
		1, 
		{
			x: -200, 
			// power is controlling the speed of transition(0-4)
			// ease: Power0.easeNone // easeNone should be No changes of speed
			// ease: Power1.easeIn // easeIn should be starts slow - finish fast
			ease: Power4.easeOut // easeIn should be starts fast - finish slow

			// or you can use from easepack
			// ease: Back.easeOut // back once before settle in
			// ease: Bounce.easeOut // bounce in
			// ease: Circ.easeOut // moderately in
			// ease: Elastic.easeOut // like expanded animation
			// ease: Expo.easeOut // smoothly in
			// ease: Sine.easeOut // smoothly in

			// you can also see this kind of easing
			// ease: RoughEase.ease // zigzag
			// ease: SlowMo.ease // slowing down once
			// ease: SteppedEase.ease.config(10) // slowly in with temporary


			// see and compare each easing : https://greensock.com/ease-visualizer
		}
	);
	TweenLite.from(
		h2, 
		1, 
		{
			autoAlpha: 0, 
			delay: 1
		}
	);

})(jQuery);