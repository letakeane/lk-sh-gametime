var assert = require('chai').assert;
var Snake = require('../lib/Snake.js');
var Segment = require('../lib/Segment.js')
var Food = require('../lib/Food.js')

// describe ('Canvas', function() {
//   it.skip('should have a width of 500px', function() {
//     assert.equal(canvas.width, 500)
//   });
//
//   it.skip('should have a height of 500px', function() {
//     assert.equal(canvas.height, 500)
//   });
// })

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

  it.skip('should have a color of green', function() {
    var snake = new Snake();

    assert.equal(snake.color, 'rgba(74, 142, 41, 1)')
  });

  it.skip('should move down on down arrow keydown event', function() {
    var snake = new Snake();

    assert.equal(snake.y, 241)
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
