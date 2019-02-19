'use strict';
let img = document.querySelector('img'),
		h2 = document.querySelector('h2'),
		h1 = document.querySelector('h1'),
		intro = document.querySelector('.intro'),
		listItem = document.querySelector('ul'),
		tl = new TimelineLite();

	// Animating Multiple Objects
	// fadeout orderly
	// TweenLite.to(h1, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.2});
	// TweenLite.to(intro, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.4});
	// TweenLite.to(img, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.6});
	// TweenLite.to(h2, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.8});
	// TweenLite.to(listItem, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 1});

	// fadein orderly
	// TweenLite.from(h1, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.2});
	// TweenLite.from(intro, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.4});
	// TweenLite.from(img, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.6});
	// TweenLite.from(h2, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.8});
	// TweenLite.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 1});

	// tidy up by using tl - timeline
	// this will appear animation orderly like totally same with above
	tl
		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut})
		// option `-0.15` will make this element animate 0.15sec earlier than defalut
		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, '-=0.15')
		.from(img, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, '-=0.15')
		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, '-=0.15')
		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, '-=0.15');