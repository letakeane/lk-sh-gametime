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

context.fillStyle = 'rgba(255, 255, 255, 1)';
context.fillRect(0, 0, canvas.width, canvas.height);
context.font = "30px Courier New";
context.fillStyle = "#78c23b";
context.textAlign = "center";
context.fillText("Press Right Arrow to Start", canvas.width/2, canvas.height/2);

if (isGameRunning === true) {
  requestAnimationFrame(function gameLoop (currentTime) {
    // newSnake.draw(context);
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

    if (isGameRunning) {
      requestAnimationFrame(gameLoop)
      console.log(isGameRunning)
    } else {
      context.fillStyle = 'rgba(255, 255, 255, 1)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = "60px Courier New";
      context.fillStyle = "#78c23b";
      context.textAlign = "center";
      context.fillText("GAME OVER", canvas.width/2, canvas.height/3);
      context.font = "20px Courier New";

      context.fillText("Press right arrow to try again", canvas.width/2, canvas.height/2);

      document.addEventListener('keydown', function() {
        window.location.reload();
      })
    }
  })
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
