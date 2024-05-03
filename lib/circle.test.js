const Circle = require('./circle');

// tests to make sure that the circle fits parameters for circle class
describe('Circle class', () => {
  test('should render a circle with user input radius and color', () => {
    const circle = new Circle(50, '#FF0000');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="50" fill="#FF0000" />');
  });
});
