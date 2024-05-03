const Shapes = require('./shapes');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

describe('ShapeFactory class', () => {
  test('should create a Circle object when "circle" type is passed', () => {
    const shape = Shapes.createShape('circle', '#FF0000');
    expect(shape).toBeInstanceOf(Circle);
    expect(shape.render()).toBe('<circle cx="150" cy="100" r="50" fill="#FF0000" />');
  });

  test('should create a Triangle object when "triangle" type is passed', () => {
    const shape = Shapes.createShape('triangle', '#FF0000');
    expect(shape).toBeInstanceOf(Triangle);
    expect(shape.render()).toBe('<polygon points="150,50 125,150 175,150" fill="#FF0000" />');
  });

  test('should create a Square object when "square" type is passed', () => {
    const shape = Shapes.createShape('square', '#FF0000');
    expect(shape).toBeInstanceOf(Square);
    expect(shape.render()).toBe('<rect x="125" y="75" width="50" height="50" fill="#FF0000" />');
  });

  test('should throw an error for an unknown shape type', () => {
    expect(() => {
      Shapes.createShape('hexagon', '#FF0000');
    }).toThrow('Unknown shape type');
  });
});
