'use strict';

let img = document.querySelector('img'),
		h2 = document.querySelector('h2'),
		h1 = document.querySelector('h1'),
		intro = document.querySelector('.intro'),
		listItem = document.querySelector('ul'),
		tl = new TimelineLite();

// Adding Tweens To A Timeline
tl
	.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
	// after 1 sec from h1, animate will continue
	.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
	// below will appear after 3sec of total
	.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
	.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro')
	.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut});