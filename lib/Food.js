class Food {
  constructor () {
    this.x = parseInt(Math.floor(Math.random() * 50) * 10);
    this.y = parseInt(Math.floor(Math.random() * 50) * 10);
    this.width = 10;
    this.height = 10;
    this.color = "red";
  }

  draw (context, foodX, foodY) {
    context.fillStyle = this.color;
    context.fillRect(foodX, foodY, this.width, this.height);
  }
}

module.exports = Food;
