var Snake = require('./Snake');
var Food = require('./Food');
var game = require('./game')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var food = new Food ();
var newSnake = new Snake ();
var isGameRunning = true;
var originalTime = 0;
var duration = 0;
var framesPerSecond = 60;
var direction = '';
var scoreCounter = document.querySelector('h3');
var score = 0;


if (isGameRunning === true) {
  requestAnimationFrame(function gameLoop (currentTime) {
    newSnake.draw(context);
    if (!originalTime) {
      originalTime = currentTime;
    }

    duration = currentTime - originalTime;

    if (duration > 5000 / framesPerSecond) {
      originalTime = currentTime;

      if (direction === 'right') {
        context.clearRect(0, 0, canvas.width, canvas.height);
        food.draw(context, food.x, food.y)
        newSnake.move(context, 10, 0);

      } else if (direction === 'left') {
        context.clearRect(0, 0, canvas.width, canvas.height);
        food.draw(context, food.x, food.y)
        newSnake.move(context, -10, 0);

      } else if (direction === 'up') {
        context.clearRect(0, 0, canvas.width, canvas.height);
        food.draw(context, food.x, food.y)
        newSnake.move(context, 0, -10);

      } else if (direction === 'down') {
        context.clearRect(0, 0, canvas.width, canvas.height);
        food.draw(context, food.x, food.y)
        newSnake.move(context, 0, 10);
      }
    }

    if (newSnake.hasEaten === true) {
      food = new Food();
      score++;
      scoreCounter.innerText = score;
      newSnake.hasEaten = false;
    }

    isGameRunning = newSnake.collideWalls(isGameRunning);
    isGameRunning = newSnake.collideSelf(isGameRunning);
    newSnake.eat(context, food.x, food.y);
    requestAnimationFrame(gameLoop)
    console.log(isGameRunning)
  })
} else if (isGameRunning === false) {
  alert('Game Over');
};



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
