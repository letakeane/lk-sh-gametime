var Segment = require('../lib/Segment.js')
var assert = require('chai').assert;

describe ('Segment', function () {
  it('should have a height of 10', function() {
    var segment = new Segment();

    assert.equal(segment.height, 10);
  });

  it('should have a width of 10', function() {
    var segment = new Segment();

    assert.equal(segment.width, 10);
  });

  it('should have an x coordinate of 0', function() {
    var segment = new Segment(0, 0, 'green');

    assert.equal(segment.x, 0);
  })

  it('should have a y coordinate of 0', function() {
    var segment = new Segment(0, 0, 'green');

    assert.equal(segment.y, 0);
  })

  it('should have a color', function() {
    var segment = new Segment(0, 0, 'green');

    assert.equal(segment.color, 'green');
  })
})
