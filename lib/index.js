var Snake = require('./Snake');
var Food = require('./Food');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var food = new Food ();


document.addEventListener('keydown', function() {

});

var newSnake = new Snake ({x: 50, y: 50});

requestAnimationFrame(function gameLoop() {
  context.clearRect(0,0, canvas.width, canvas.height);

  newSnake.move(context);

  requestAnimationFrame(gameLoop);
})
