const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

class Shapes {
  static createShape(type, color) {
    switch (type) {
      case 'circle':
        return new Circle(50, color);
      case 'triangle':
        return new Triangle(50, color);
      case 'square':
        return new Square(50, color);
      default:
        throw new Error('Unknown shape type');
    }
  }
}

module.exports = Shapes;