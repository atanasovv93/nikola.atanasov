const changeTextColor = (element, color = "black") => {
    element.style.color = color;
  };
  
  const changeTextSize = (element, textSize = 24) => {
    element.style.fontSize = `${textSize}px`;
  };
  
  document.getElementById("applyStylesButton").addEventListener("click", () => {
    const header = document.getElementById("header");
    const textSizeInput = document.getElementById("textSizeInput").value;
    const colorInput = document.getElementById("colorInput").value;
  
    changeTextSize(header, textSizeInput || undefined); 
    changeTextColor(header, colorInput || undefined);
  });
  