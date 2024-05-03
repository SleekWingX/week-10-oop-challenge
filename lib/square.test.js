const Square = require('./square');

describe('Square class', () => {
  test('should render a square element with given side length and color', () => {
    const square = new Square(50, '#FF0000');
    expect(square.render()).toBe('<rect x="125" y="75" width="50" height="50" fill="#FF0000" />');
  });
});
