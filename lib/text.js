class Text {
    constructor(text, color) {
      this.text = text;
      this.color = color;
    }
  
    render() {
      return `<text x="150" y="100" fill="${this.color}" font-size="20" dominant-baseline="middle" text-anchor="middle">${this.text}</text>`;
    }
  }
  
  module.exports = Text;