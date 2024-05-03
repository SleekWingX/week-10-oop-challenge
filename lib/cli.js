//calls upon the modules necessary to read and write files
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
//links to the javascript file that generates the svg file
const { createSVG } = require('./svgGenerator');

class CLI {
  constructor() {
    this.text = '';
    this.textColor = '';
    this.shape = '';
    this.shapeColor = '';
  }

  run() {
    return inquirer
    //set of queries for the user to return input
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Please enter up to three characters:',
          // checks to see if the text entered is 3 characters or less
          validate: input => input.length <= 3 && input.length > 0
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter text color (keyword or hex):',
          //enters the hex or color to make the text color
          validate: this.validateColor
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape:',
          //creates a list of options to make the shapes for the logo
          choices: ['circle', 'triangle', 'square']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter shape color (keyword or hex):',
          validate: this.validateColor
        }
      ])
      // creates an object using the data inquired above
      .then(({ text, textColor, shape, shapeColor }) => {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        const svgContent = createSVG(text, textColor, shape, shapeColor);
        
        // Debug statement to print the SVG content to the console
        console.log(svgContent);
      
        return writeFile(
          join(__dirname, '..', 'examples', 'logo.svg'),
          svgContent
        );
      })
      
      // logs to the console that the process is complete
      .then(() => console.log('Generated logo.svg'))
      // sends an error message if the process did not complete, and the error code
      .catch((err) => {
        console.error(err);
        console.log('Oops. Something went wrong.');
      });
  }
// validates if the color is an actual color input
  validateColor(color) {
    // Basic validation for color input
    const regex = /^#?[0-9A-F]{3,6}$/i;
    return regex.test(color) || ['red', 'green', 'blue', 'yellow', 'black', 'white'].includes(color.toLowerCase());
  }
}

module.exports = CLI;