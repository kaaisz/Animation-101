$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// build a scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#project01 img',
		duration: '100%', // duration will set under the trigger - 100% = 100vh
		trigerHook: 0.8
	})
	.setClassToggle('#project01', 'fade-in') // add class to project01
	.addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		colorStart: '#75C695',
		colorEnd: 'pink',
	}) // this requires a plugin
	.addTo(controller);

});


















