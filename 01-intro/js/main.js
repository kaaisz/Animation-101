$(document).ready(function(){

  // init scrollMagic to invoke scroll bar and trigger animation
  var controller = new ScrollMagic.Controller();

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    // define trigger element and some other options here
    triggerElement: '#project01'
  })
  .setClassToggle('#project01', 'fade-in') // add class to project01
  // just for debug - require external plugin
  // see this: http://scrollmagic.io/docs/debug.addIndicators.html#Scene.addIndicators
  .addIndicators({
    name: 'fade scene', // trigger name
    colorTrigger: 'black', // color for trigger
    indent: '200',
    colorStart: '#75C695' // color for starting point
  }) 
  .addTo(controller);

});


















