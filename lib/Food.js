var x = Math.ceil((Math.floor(Math.random() * (23) + 1) / 10) * 10);
var y = Math.ceil((Math.floor(Math.random() * (23) + 1) / 10) * 10);

function Food () {
  this.x = parseInt(x);
  this.y = parseInt(y);
  this.width = 10;
  this.height = 10;
  this.color = 'red';/*randomColor({ luminosity: 'bright', hue: 'red' })*/;
}

Food.prototype.appear = function (context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
}


module.exports = Food;
