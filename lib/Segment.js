var Food = require('./Food')


function Segment(x, y, color) {
  this.x = x;
  this.y = y;
  this.width = 10;
  this.height = 10;
  this.color = color /*|| randomColor({ luminosity: 'dark', hue: 'green' })*/;
}

Segment.prototype.draw = function(context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height, this.color);
  return this;
}

Segment.prototype.makeNewSegment = function(context) {
  context.fillStyle = this.color;
  context.fillRect(food.x, food.y, 10, 10)
}


module.exports = Segment;
