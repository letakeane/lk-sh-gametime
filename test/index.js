var assert = require('chai').assert;
var Canvas = require('./game.js');
var Snake = require('./snake.js');
var Food = require('./food.js');

describe ('Canvas', function() {
  it.skip('should have a width of 800px', function() {
    assert.equal(canvas.width, 800)
  });

  it.skip('should have a height of 800px', function() {
    assert.equal(canvas.height, 800)
  });
})



describe ('Snake', function() {
  it.skip('should be a function', function () {
    assert.isFunction(Snake);
  });

  it.skip('should instantiate our good friend, Snake', function () {
    var snake = new Snake();
    assert.isObject(snake);
  });

  it.skip('should have an x of 395', function() {
    var snake = new Snake();
    assert.equal(snake.x, 395);
  });

  it.skip('should have a y of 395', function() {
    var snake = new Snake();
    assert.equal(snake.y, 395);
  });

  it.skip('should have a height of 10', function() {
    var snake = new Snake();
    assert.equal(snake.height, 10);
  });

  it.skip('should have a width of 10', function() {
    var snake = new Snake();
    assert.equal(snake.width, 10);
  });

  it.skip('should have a color of green', function() {
    var snake = new Snake();
    assert.equal(snake.color, 'rgba(74, 142, 41, 1)')
  });

  it.skip('should begin moving on keydown event', function() {

  });

})
