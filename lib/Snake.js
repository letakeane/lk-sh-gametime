var Segment = require('./Segment');

<<<<<<< HEAD
function Snake(options) {
  this.startX = 0;
  this.startY = 0;
=======
function Snake () {
  this.startX = 240;
  this.startY = 240;
>>>>>>> 5cf90533fe6f380554be26eb49ea52d1036c2d53
  this.segments = [
    new Segment(240, 240, 'green'),
    new Segment(230, 240, 'red'),
    new Segment(220, 240, 'blue'),
    new Segment(210, 240, 'yellow'),
    new Segment(200, 240, 'yellow'),
    new Segment(190, 240, 'yellow'),
    new Segment(180, 240, 'yellow'),
    new Segment(170, 240, 'yellow'),
    new Segment(160, 240, 'yellow'),
    new Segment(150, 240, 'yellow'),
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

module.exports = Snake;
