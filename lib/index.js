var Segment = require('./Snake.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var segmentOne = new Segment(240, 240, 10, 10, 'rgba(0,0,0,1)')
var segmentTwo = new Segment(230, 240, 10, 10, 'rgba(0,0,0,1)')
var segmentThree = new Segment(220, 240, 10, 10)
var segmentFour = new Segment(210, 240, 10, 10)
//
var segments = [
  segmentOne,
  segmentTwo,
  segmentThree,
  segmentFour
];



requestAnimationFrame(function gameLoop() {
  context.clearRect(0,0, canvas.width, canvas.height);

  segments.forEach(function(segment) {
    segment.draw(context);
  })

  requestAnimationFrame(gameLoop);
})
