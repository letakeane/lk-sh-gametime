var Segment = require('./Segment');

function Snake(options) {
  this.startX = 0;
  this.startY = 0;
  this.segments = [
    new Segment(240, 240, 'green'),
    new Segment(230, 240, 'red'),
    new Segment(220, 240, 'yellow'),
    new Segment(210, 240, 'blue')
  ];
}

Snake.prototype.draw = function(context) {
  this.segments.forEach(function(segment) {
    segment.draw(context);
  });
}

Snake.prototype.move = function(context) {
  this.draw(context);

  var head = this.segments[0];
  var tail = this.segments.pop();


  tail.x = head.x + 10;
  tail.y = head.y;

  this.segments.unshift(tail);
  // head = this.segments[0];
  // console.log(head);

}

module.exports = Snake;
