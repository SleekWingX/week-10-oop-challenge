const Text = require('./text');

describe('Text class', () => {
  test('should render text with input text and color', () => {
    const text = new Text('Hello', '#FF0000');
    expect(text.render()).toBe('<text x="50%" y="50%" fill="#FF0000" dominant-baseline="middle" text-anchor="middle">Hello</text>');
  });
});