function differenceFrom13(number) {
    if (number > 13) {
      return (number - 13) * 2;
    } else {
      return 13 - number;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculateBtn");
    const resultElement = document.getElementById("result");
  
    calculateBtn.addEventListener("click", () => {
      const input = document.getElementById("numberInput").value;
  
      if (input === "") {
        resultElement.textContent = "Please enter a number!";
        return;
      }
  
      const number = parseFloat(input);
      const result = differenceFrom13(number);
  
      resultElement.textContent = `Result: ${result}`;
    });
  });
  