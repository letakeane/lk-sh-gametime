var Segment = require('./Segment');

function Snake(options) {
  this.startX = 240;
  this.startY = 240;
  this.segments = [
    new Segment(240, 240, 10, 10, 'rgba(0,0,0,1)'),
    new Segment(230, 240, 10, 10, 'rgba(0,0,0,1)'),
    new Segment(220, 240, 10, 10),
    new Segment(210, 240, 10, 10)
  ];
}

Snake.prototype.move = function(context) {
  var head = this.segments[0];
  var tail = this.segments[this.segments.length - 1];
  tail.x = head.x += 10;
  tail.y = head.y;

  this.segments.forEach(function(segment) {
    segment.draw(context);
  });
}

module.exports = Snake;
