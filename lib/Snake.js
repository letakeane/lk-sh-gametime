var Segment = require('./Segment');
var Food = require('./Food');

function Snake () {
  this.startX = 240;
  this.startY = 240;
  this.segments = [
    new Segment(240, 240, 'green'),
    new Segment(230, 240, 'red'),
    new Segment(220, 240, 'blue'),
    new Segment(210, 240, 'yellow'),
    new Segment(200, 240, 'green'),
    new Segment(190, 240, 'yellow'),
    new Segment(180, 240, 'blue'),
    new Segment(170, 240, 'green'),
    new Segment(160, 240, 'yellow'),
    new Segment(150, 240, 'blue')
  ];
  this.hasEaten = false;
}

Snake.prototype.draw = function(context) {
  this.segments.forEach(function(segment) {
    segment.draw(context);
  });
}

Snake.prototype.move = function (context, xOffset, yOffset) {
  this.draw(context);

  var head = this.segments[0];
  var neck = this.segments[1];
  var tempX = head.x + xOffset;
  var tempY = head.y + yOffset;

  if (neck.x != tempX || neck.y != tempY) {
    let tail = this.segments.pop();

    tail.x = head.x + xOffset;
    tail.y = head.y + yOffset;

    this.segments.unshift(tail);
  } /*else {
    this.moveRight(context);
  }*/
}

Snake.prototype.collideWalls = function() {
  var head = this.segments[0];

  if (head.x === -10) {
    alert('Game Over');
  } else if (head.x === 510) {
    alert('Game Over');
  } else if (head.y === -10) {
    alert('Game Over');
  } else if (head.y === 510) {
    alert('Game Over');
  }
}

Snake.prototype.collideSelf = function() {
  var head = this.segments[0];

  for (let i = 3; i < this.segments.length; i++) {
    var snake = this.segments[i];

    if (head.x === snake.x && head.y === snake.y) {
      alert('Game Over');
    }
  }
}

Snake.prototype.eat = function (context, foodX, foodY) {
  var head = this.segments[0];
  if (head.x === foodX && head.y === foodY) {
    this.hasEaten = true;
    var newSegment = new Segment();
    this.segments.push(newSegment);
    }
}

module.exports = Snake;
