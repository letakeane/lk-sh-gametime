var Segment = require('./Segment');

function Snake(options) {
  this.startX = 240;
  this.startY = 240;
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

Snake.prototype.moveRight = function(context) {
  this.draw(context);

  var head = this.segments[0];
  var tail = this.segments.pop();


  tail.x = head.x + 10;
  tail.y = head.y;

  this.segments.unshift(tail);
}

Snake.prototype.moveLeft = function(context) {
  this.draw(context);

  var head = this.segments[0];
  var tail = this.segments.pop();


  tail.x = head.x - 10;
  tail.y = head.y;

  this.segments.unshift(tail);
}

Snake.prototype.moveUp = function(context) {
  this.draw(context);

  var head = this.segments[0];
  var tail = this.segments.pop();


  tail.x = head.x;
  tail.y = head.y - 10;

  this.segments.unshift(tail);
}

Snake.prototype.moveDown = function(context) {
  this.draw(context);

  var head = this.segments[0];
  var tail = this.segments.pop();


  tail.x = head.x;
  tail.y = head.y + 10;

  this.segments.unshift(tail);
}

module.exports = Snake;
