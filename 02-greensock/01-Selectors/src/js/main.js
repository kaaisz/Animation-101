'use strict';
console.log('Hello from tweenmax');

// JS code goes here
// *egs for define html element
// var header = $('#header'),  // jQuery ID
// 		h1 = $("h1"),  //jQuery tag
// 		intro = $(".intro"),  //jQuery class
// 		firstItem = $("li:first-child"),  //jQuery 1st item
// 		secondItem = $("li:nth-child(2)"),  //jQuery 2nd item
// 		lastItem = $("li:last-child");  //jQuery last item

let header = document.querySelector('#header'),
		h1 = document.querySelector("h1"),
		intro = document.querySelector(".intro"),
		firstItem = document.querySelector("li:first-child"),
		// firstItem = document.getElementsByClassName("list")[0].firstElementChild,
		secondItem = document.querySelector("li:nth-child(2)"),
		// secondItem = document.getElementsByClassName("list")[0].children[1],
		lastItem = document.querySelector("li:last-child");
		// lastItem = document.getElementsByClassName("list")[0].lastElementChild,

TweenLite.to(
	header, // animate will appear to header,
	1, // duration will 1 sec, 
	{
		// animate with opacity with y offset
		opacity: 0,
		y: 50
	}
);