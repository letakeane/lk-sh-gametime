var Segment = require('./Segment');

function Snake(options) {
  this.startX = 240;
  this.startY = 240;
  this.segments = [
    new Segment(240, 240),
    new Segment(230, 240),
    new Segment(220, 240),
    new Segment(210, 240)
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
  var neck = this.segments[1];
  var temp = head.x + 10

  if (neck.x != temp) {
    let tail = this.segments.pop();

    tail.x = head.x + 10;
    tail.y = head.y;

    this.segments.unshift(tail);
  } else {
    this.moveLeft(context);
  }
}

Snake.prototype.moveLeft = function(context) {
  this.draw(context);

  var head = this.segments[0];
  var neck = this.segments[1];
  var temp = head.x - 10

  if (neck.x != temp) {
    let tail = this.segments.pop();

    tail.x = head.x - 10;
    tail.y = head.y;

    this.segments.unshift(tail);
  } else {
    this.moveRight(context);
  }
}

Snake.prototype.moveUp = function(context) {
  this.draw(context);

  var head = this.segments[0];
  var neck = this.segments[1];
  var temp = head.y - 10

  if (neck.y != temp) {
    let tail = this.segments.pop();

    tail.x = head.x;
    tail.y = head.y - 10;

    this.segments.unshift(tail);
  } else {
    this.moveDown(context);
  }
}

Snake.prototype.moveDown = function(context) {
  this.draw(context);

  var head = this.segments[0];
  var neck = this.segments[1];
  var temp = head.y + 10

  if (neck.y != temp) {
    let tail = this.segments.pop();

    tail.x = head.x;
    tail.y = head.y + 10;

    this.segments.unshift(tail);
  } else {
    this.moveUp(context);
  }
}

module.exports = Snake;
