class Square {
    constructor(sideLength, color) {
      this.sideLength = sideLength;
      this.color = color;
    }
  
    render() {
      return `<rect x="125" y="75" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
  }
  
  module.exports = Square;