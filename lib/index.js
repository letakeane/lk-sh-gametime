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
  newSnake.draw(context);

  document.addEventListener('keydown', function(event) {
    var keycode = event.which;
    console.log(keycode)
    if (keycode === 39) {
      newSnake.moveRight(context);
    } else if (keycode === 37) {
      newSnake.moveLeft(context);
    } else if (keycode === 38) {
      newSnake.moveUp(context);
    } else if (keycode === 40) {
      newSnake.moveDown(context);
    }
  })


  requestAnimationFrame(gameLoop);
})
