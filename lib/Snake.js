var Snake = [
  segmentOne,
  segmentTwo,
  segmentThree,
  segmentFour
];




function Segment(x, y, width, height, color) {
  // console.log(this)
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
}

Segment.prototype.draw = function(context) {
  // console.log(this);
  // debugger;
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height)
  return this;
}

// Segment.prototype.move = function(context) {
//
// }

module.exports = Segment;
