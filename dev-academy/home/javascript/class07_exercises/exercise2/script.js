function weightInChickens(weight) {
    return weight / 0.5;
  }
  
  let resultDiv = document.getElementById("result");
  let input = parseInt(prompt("Please enter how much you weigh:"));
  if (!isNaN(input)) {
    resultDiv.innerHTML = `<h3> ${input}KG is ${weightInChickens(input)} <img src="../../../../../assets/img/chiken.png" style="height:2vh"></h3>`;
  } else {
    resultDiv.innerHTML = `<h3> Sorry! Wrong input! Refresh the page again! </h3>`;
  }
  