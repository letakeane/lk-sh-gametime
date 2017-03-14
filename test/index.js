var assert = require('chai').assert;
var game = require('./game.js');
var Snake = require('./Snake.js');
var Food = require('./Food.js');
var Segment = require('./Segment.js')


// repaint snake every time (push new segment into array of segments)

describe ('Canvas', function() {
  it.skip('should have a width of 500px', function() {
    assert.equal(canvas.width, 500)
  });

  it.skip('should have a height of 500px', function() {
    assert.equal(canvas.height, 500)
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

  it.skip('should move down on down arrow keydown event', function() {
    var snake = new Snake();
    assert.equal(snake.y, 396)
  });

  it.skip('should move up on up arrow keydown event', function() {
    var snake = new Snake();
    assert.equal(snake.y, 394)
  });

  it.skip('should move left on left arrow keydown event', function() {
    var snake = new Snake();
    assert.equal(snake.x, 394)
  });

  it.skip('should move right on right arrow keydown event', function() {
    var snake = new Snake();
    assert.equal(snake.x, 396)
  });


})
