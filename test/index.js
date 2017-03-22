var assert = require('chai').assert;
var Snake = require('../lib/Snake.js');
var Segment = require('../lib/Segment.js')
var Food = require('../lib/Food.js')
var canvas = {
  height: 500,
  width: 500
}


describe ('Canvas', function() {
  it('should have a width of 500px', function() {
    assert.equal(canvas.width, 500)
  });

  it('should have a height of 500px', function() {
    assert.equal(canvas.height, 500)
  });
})

describe ('Segment', function () {
  it('should have a height of 10', function() {
    var segment = new Segment();

    assert.equal(segment.height, 10);
  });

  it('should have a width of 10', function() {
    var segment = new Segment();

    assert.equal(segment.width, 10);
  });
})

describe ('Food', function () {
  it('should have a height', function () {
    var food = new Food();

    assert.equal(food.height, 10);
  })

  it('should have a width', function () {
    var food = new Food();

    assert.equal(food.width, 10);
  })
})

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

    snake.move();

    assert.equal(snake.y, 250);
  });

  it.skip('should move up on up arrow keydown event', function() {
    var snake = new Snake();

    snake.move();

    assert.equal(snake.y, 230);
  });

  it.skip('should move left on left arrow keydown event', function() {
    var snake = new Snake();

    snake.move();

    assert.equal(snake.x, 230);
  });

  it.skip('should move right on right arrow keydown event', function() {
    var snake = new Snake();

    snake.move();

    assert.equal(snake.x, 250);
  });

  it.skip('should grow when eats food', function() {
    var snake = new Snake();

    snake.eat();

    assert.equal(snake.segments.length, 11);
  });


})
