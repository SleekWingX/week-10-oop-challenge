const SVG = require('svgjs');  // Make sure this is the correct import based on your actual implementation
const Text = require('./text.js');
const Shapes = require('./shapes.js');

function createSVG(text, textColor, shapeType, shapeColor) {
  const svgHeader = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;
  const svgFooter = `</svg>`;

  const textElement = new Text(text, textColor).render();
  const shape = Shapes.createShape(shapeType, shapeColor);
  const shapeElement = shape.render();

  return `${svgHeader}\n${shapeElement}\n${textElement}\n${svgFooter}`;
  
}

module.exports = { createSVG };