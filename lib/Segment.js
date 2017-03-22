class Segment {
  constructor (x, y, color) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.color = color /*|| randomColor({ luminosity: 'dark', hue: 'green' })*/;
  }

  draw (context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height, this.color);
  }
}


module.exports = Segment;
