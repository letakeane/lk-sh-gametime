var Food = require('./Food')



function Segment(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
}

Segment.prototype.draw = function(context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
}

Segment.prototype.makeNewSegment = function(context) {
  context.fillStyle = this.color;
  context.fillRect(food.x, food.y, 10, 10)
}


module.exports = Segment;
