let numbers = [2, 4, 5, 7, 10];

let numberList = document.getElementById("numberList");
let sumResult = document.getElementById("sumResult");
let equationResult = document.getElementById("equationResult");

numbers.forEach((number) => {
  let listItem = document.createElement("li");
  listItem.innerText = number;
  numberList.appendChild(listItem);
});

let sum = numbers.reduce((total, num) => total + num, 0);

sumResult.innerText = `The sum of all numbers is: ${sum}`;

let equation = numbers.join(" + ") + ` = ${sum}`;
equationResult.innerText = `Equation: ${equation}`;
