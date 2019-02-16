$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// loop through each .project element
	$('.project').each(function() {

		console.log(this);
		// build a scene
		var ourScene = new ScrollMagic.Scene({
			// this = each project which spacified in $()
			// children[0] is the img element
			triggerElement: this.children,
			triggerHook: 0.9,
			reverse: false // disable fade-out even if scroll reverse
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695'
		}) // this requires a plugin
		.addTo(controller);
	});
});


















