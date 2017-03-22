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
  this.isDead = false;
}

Snake.prototype.draw = function(context) {
  this.segments.forEach(function(segment) {
    segment.draw(context);
  });
}

Snake.prototype.move = function (context, xOffset, yOffset) {
  var head = this.segments[0];
  var neck = this.segments[1];
  var newPosX = head.x + xOffset;
  var newPosY = head.y + yOffset;

  this.draw(context);

  // is neck is not in new direction
  let tail = this.segments.pop();

  if (neck.x === newPosX && neck.y === newPosY) {
    newPosX = head.x - xOffset;
    newPosY = head.y - yOffset;
  }

  tail.x = newPosX;
  tail.y = newPosY;

  this.segments.unshift(tail);
}

Snake.prototype.collideWalls = function(isGameRunning) {
  var head = this.segments[0];

  if (head.x === -10 || head.x === 510) {
     isGameRunning = false;
  } else if (head.y === -10 || head.y === 510) {
     isGameRunning = false;
  }
  return isGameRunning;
}

Snake.prototype.collideSelf = function(isGameRunning) {
  for (let i = 1; i < this.segments.length; i++) {
    var head = this.segments[0];
    var snake = this.segments[i];

    if (head.x === snake.x && head.y === snake.y) {
      isGameRunning = false;
      // console.log(isGameRunning)
    }
    return isGameRunning;
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
