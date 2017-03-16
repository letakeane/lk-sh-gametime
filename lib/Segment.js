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

Segment.prototype.move = function() {
  console.log('MOOOOVE!')
  // segments.pop();
  // var newHead = new Segment(head.x+10, head.y, 10, 10, 'rgba(0,0,0,1)');
  // segments.unshift(newHead);
  console.log(this);
  this.x +=10;
}

module.exports = Segment;
