const Snake = require('./Snake');
const Food = require('./Food');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const newSnake = new Snake ();
const scoreCounter = document.querySelector('h3');
let isGameRunning = true;
let food = new Food ();
let originalTime = 0;
let duration = 0;
let framesPerSecond = 60;
let score = 0;
let direction = '';

context.fillStyle = 'rgba(255, 255, 255, 1)';
context.fillRect(0, 0, canvas.width, canvas.height);
context.font = "30px Courier New";
context.fillStyle = "#78c23b";
context.textAlign = "center";
context.fillText("Press Right Arrow to Start", canvas.width/2, canvas.height/2);

if (isGameRunning === true) {
  requestAnimationFrame(function gameLoop (currentTime) {
    if (!originalTime) {
      originalTime = currentTime;
    }

    duration = currentTime - originalTime;

    if (duration > 5000 / framesPerSecond) {
      originalTime = currentTime;

      if (direction === 'right') {
        context.clearRect(0, 0, canvas.width, canvas.height);
        newSnake.move(context, 10, 0);
        food.draw(context, food.x, food.y);

      } else if (direction === 'left') {
        context.clearRect(0, 0, canvas.width, canvas.height);
        newSnake.move(context, -10, 0);
        food.draw(context, food.x, food.y);

      } else if (direction === 'up') {
        context.clearRect(0, 0, canvas.width, canvas.height);
        newSnake.move(context, 0, -10);
        food.draw(context, food.x, food.y);

      } else if (direction === 'down') {
        context.clearRect(0, 0, canvas.width, canvas.height);
        newSnake.move(context, 0, 10);
        food.draw(context, food.x, food.y);
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
      requestAnimationFrame(gameLoop);
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
      });
    }
  });
}



document.addEventListener('keydown', function() {
  let keycode = event.which;

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
