// script.js
function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeParagraphColor() {
    const paragraph = document.querySelector("p");
    const randomColor = generateRandomColor();
    paragraph.style.color = randomColor;
  }
  