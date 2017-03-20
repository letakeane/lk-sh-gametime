var Snake = require('./Snake');
var Food = require('./Food');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var food = new Food ();
var originalTime = 0;
var duration = 0;
var framesPerSecond = 30;


var newSnake = new Snake ({x: 50, y: 50});

requestAnimationFrame(function gameLoop(currentTime) {

  if (!originalTime) {
    originalTime = currentTime;
  }

  duration = currentTime - originalTime;

  if (duration > 50000 / framesPerSecond) {
    originalTime = currentTime;
    context.clearRect(0,0, canvas.width, canvas.height);
    newSnake.draw(context);
  }

  document.addEventListener('keydown', function() {
    var keycode = event.which;
    if (keycode === 39) {
      newSnake.moveRight(context);
    } else if (keycode === 37) {
      newSnake.moveLeft(context);
    } else if (keycode === 38) {
      newSnake.moveUp(context);
    } else if (keycode === 40) {
      newSnake.moveDown(context);
    }
  });

  requestAnimationFrame(gameLoop);
})
