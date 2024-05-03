class Triangle {
    constructor(sideLength, color) {
      this.sideLength = sideLength;  // This might be used for height or as a reference for scaling
      this.color = color;
    }
  // code to ensure equal sides of the triangle provided by chat gpt
    render() {
      // Calculating the height of the equilateral triangle
      const height = Math.sqrt(3) / 2 * this.sideLength;
  
      // Calculating the vertices of the equilateral triangle
      const halfWidth = this.sideLength / 2;
      const centerX = 150;  // Central position on the x-axis
      const centerY = 100;  // Central position on the y-axis
  
      // Adjust the coordinates to center the triangle vertically
      const topVertex = `${centerX},${centerY - height / 2}`;
      const leftVertex = `${centerX - halfWidth},${centerY + height / 2}`;
      const rightVertex = `${centerX + halfWidth},${centerY + height / 2}`;
  
      return `<polygon points="${topVertex} ${leftVertex} ${rightVertex}" fill="${this.color}" />`;
    }
  }
  
  module.exports = Triangle;
  