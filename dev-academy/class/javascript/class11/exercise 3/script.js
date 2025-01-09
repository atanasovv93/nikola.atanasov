document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("calculateButton");
    const resultElement = document.getElementById("result");
  
    button.addEventListener("click", function () {
      const grades = [10, 6, 8, 9, 6]; 
      const requiredAverage = 8;
  
      const total = grades.reduce((sum, grade) => sum + grade, 0);
  
      const average = total / grades.length;
  
      const resultText = average >= requiredAverage
        ? "Congratulations! You have passed the semester!"
        : "Unfortunately, you did not pass the semester.";
  
      resultElement.innerText = resultText;
      alert(resultText);
    });
  });
  