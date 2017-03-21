var Snake = require('./Snake');
var Food = require('./Food');
var game = require('./game')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var isGameRunning = true;
var food = new Food ();
var originalTime = 0;
var duration = 0;
var framesPerSecond = 60;

var direction = '';



var newSnake = new Snake ({x: 50, y: 50});


requestAnimationFrame(function gameLoop (currentTime) {
  newSnake.draw(context);

  if (!originalTime) {
    originalTime = currentTime;
  }

  duration = currentTime - originalTime;

  if (duration > 5000 / framesPerSecond) {
    originalTime = currentTime;

    // context.clearRect(0, 0, canvas.width, canvas.height);


    if (direction === 'right') {
      context.clearRect(0,0, canvas.width, canvas.height);
      newSnake.moveRight(context);

    } else if (direction === 'left') {
      context.clearRect(0,0, canvas.width, canvas.height);
      newSnake.moveLeft(context);

    } else if (direction === 'up') {
      context.clearRect(0,0, canvas.width, canvas.height);
      newSnake.moveUp(context);

    } else if (direction === 'down') {
      context.clearRect(0,0, canvas.width, canvas.height);
      newSnake.moveDown(context);
    }
  }

  newSnake.collide(context) 
  requestAnimationFrame(gameLoop);
})




document.addEventListener('keydown', function() {
  var keycode = event.which;
  if (keycode === 39) {
    direction = 'right';

  } else if (keycode === 37) {
    direction = 'left';

  } else if (keycode === 38) {
    direction = 'up';

  } else if (keycode === 40) {
    direction = 'down';
  }
});
