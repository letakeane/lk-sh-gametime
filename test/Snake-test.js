var Snake = require('../lib/Snake.js');
var assert = require('chai').assert;

var isGameRunning = true;

describe ('Snake', function() {
  it('should be a function', function () {
    assert.isFunction(Snake);
  });

  it('should instantiate our Snake', function () {
    var snake = new Snake();

    assert.isObject(snake);
  });

  it('should have an x of 240', function() {
    var snake = new Snake();

    assert.equal(snake.startX, 240);
  });

  it('should have a y of 240', function() {
    var snake = new Snake();

    assert.equal(snake.startY, 240);
  });

  it.skip('should move down on down arrow keydown event', function() {
    var snake = new Snake();

    snake.move(context, 0, 10);

    assert.equal(snake.y, 250);
  });

  it.skip('should move up on up arrow keydown event', function() {
    var snake = new Snake();

    snake.move(context, 0, -10);

    assert.equal(snake.y, 230);
  });

  it.skip('should move left on left arrow keydown event', function() {
    var snake = new Snake();

    snake.move(context, -10, 0);

    assert.equal(snake.x, 230);
  });

  it.skip('should move right on right arrow keydown event', function() {
    var snake = new Snake();

    snake.move(context, 10, 0);

    assert.equal(snake.x, 250);
  });

  it.skip('should grow when eats food', function() {
    var snake = new Snake();

    snake.eat(context, 240, 240);

    assert.equal(snake.segments.length, 11);
  });

  it.skip('should collide with the walls', function() {
    var snake = new Snake();

    snake.move(context, 260, 0);
    snake.collideWalls();

    assert.equal(isGameRunning, false);
  })

  it.skip('should collide with itself', function() {
    isGameRunning = true;
    var snake = new Snake();

    snake.move(context, 10, 0);
    snake.move(context, 0, -10);
    snake.move(context, -10, 0);
    snake.move(context, 0, 10);
    snake.collideSelf();

    assert.equal(isGameRunning, false);
  })
});
