const Segment = require('./Segment');

class Snake {
  constructor () {
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

  draw (context) {
    this.segments.forEach(function(segment) {
      segment.draw(context);
    });
  }

  move (context, xOffset, yOffset) {
    let head = this.segments[0];
    let neck = this.segments[1];
    let newPosX = head.x + xOffset;
    let newPosY = head.y + yOffset;

    this.draw(context);

    let tail = this.segments.pop();

    if (neck.x === newPosX && neck.y === newPosY) {
      newPosX = head.x - xOffset;
      newPosY = head.y - yOffset;
    }

    tail.x = newPosX;
    tail.y = newPosY;

    this.segments.unshift(tail);
  }

  collideWalls (isGameRunning) {
    let head = this.segments[0];

    if (head.x === -10 || head.x === 510) {
      return isGameRunning = false;
    } else if (head.y === -10 || head.y === 510) {
      return isGameRunning = false;
    }
    return isGameRunning;
  }

  collideSelf (isGameRunning) {
    for (let i = 1; i < this.segments.length; i++) {
      let head = this.segments[0];
      let snake = this.segments[i];

      if (head.x === snake.x && head.y === snake.y) {
        return isGameRunning = false;
      }
    }
    return isGameRunning;
  }

  eat (context, foodX, foodY) {
    let head = this.segments[0];

    if (head.x === foodX && head.y === foodY) {
      this.hasEaten = true;
      let newSegment = new Segment();

      this.segments.push(newSegment);
    }
  }
}

module.exports = Snake;
