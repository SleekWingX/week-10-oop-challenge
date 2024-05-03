const { createSVG } = require('./svgGenerator');

describe('SVG Generator', () => {
  test('should generate complete SVG with text and shapes', () => {
    const svgOutput = createSVG('Hi', '#000', 'circle', '#FFF');
    expect(svgOutput).toContain('<?xml version="1.0" encoding="UTF-8" standalone="no"?>');
    expect(svgOutput).toContain('<text x="50%" y="50%" fill="#000" dominant-baseline="middle" text-anchor="middle">Hi</text>');
    expect(svgOutput).toContain('<circle cx="150" cy="100" r="50" fill="#FFF" />');
    expect(svgOutput).toContain('</svg>');
  });
});