const Triangle = require('./triangle');

describe('Triangle class', () => {
  test('should render a triangle element with given side length and color', () => {
    const triangle = new Triangle(50, '#FF0000');
    expect(triangle.render()).toBe('<polygon points="150,50 125,150 175,150" fill="#FF0000" />');
  });
});
