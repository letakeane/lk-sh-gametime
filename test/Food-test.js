var Food = require('../lib/Food.js')
var assert = require('chai').assert;

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
