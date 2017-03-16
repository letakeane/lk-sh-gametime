var Snake = require('./Snake');
var Segment = require('./Segment');
var Food = require('./Food');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var food = new Food ();


document.addEventListener('keydown', function() {

});

requestAnimationFrame(function gameLoop() {
  context.clearRect(0,0, canvas.width, canvas.height);

  var newSnake = new Snake ({x: 50, y: 50});

  newSnake.move(context);

  requestAnimationFrame(gameLoop);
})
