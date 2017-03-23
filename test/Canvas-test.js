var assert = require('chai').assert;

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
