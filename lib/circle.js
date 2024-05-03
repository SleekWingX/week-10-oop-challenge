//class to create a circle when called on
class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  module.exports = Circle;