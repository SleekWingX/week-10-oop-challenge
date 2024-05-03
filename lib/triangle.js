class Triangle {
    constructor(sideLength, color) {
      this.sideLength = sideLength;
      this.color = color;
    }
  
    render() {
      return `<polygon points="150,50 125,150 175,150" fill="${this.color}" />`;
    }
  }
  
  module.exports = Triangle;