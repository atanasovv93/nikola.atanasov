function absoluteValue(num) {
    return num < 0 ? -num : num; 
  }

  function findCloser() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    if (num1 < 0 || num2 < 0) {
      alert("Please enter non-negative numbers!");
      return;
    }

    const diff1 = 100 - num1 < 0 ? -(100 - num1) : 100 - num1;
    const diff2 = 100 - num2 < 0 ? -(100 - num2) : 100 - num2;

    const closer = diff1 < diff2 ? num1 : num2;
    document.getElementById("result").innerText = `${closer} is closer to 100`;
  }