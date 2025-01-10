const buttonValues = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];
const rightSymbols = ["÷", "×", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

const display = document.getElementById("display");
const errorDisplay = document.getElementById("error");

let A = 0;
let operator = null;
let B = null;

function clearAll() {
    A = null;
    operator = null;
    B = null;
    errorDisplay.innerText = "";
    display.style.fontSize = "40px"; // Reset font size
}

let fontSize = 40;

function adjustFontSize() {
    if (display.scrollWidth > display.clientWidth) {
        fontSize -= 2;
        display.style.fontSize = fontSize + "px";
    }
}

for (let i = 0; i < buttonValues.length; i++) {
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;

    if (value == "0") {
        button.style.width = "180px";
        button.style.gridColumn = "span 2";
    }
    else if (rightSymbols.includes(value)) {
        button.style.backgroundColor = "#FF9500";
    }
    else if (topSymbols.includes(value)) {
        button.style.backgroundColor = "#D4D4D2";
        button.style.color = "#1C1C1C";
    }

    button.addEventListener("click", function () {
        if (rightSymbols.includes(value)) {
            if (value == "=") {
                if (A != null) {
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);
                    let result;

                    if (operator == "÷") {
                        if (numB === 0) {
                            errorDisplay.innerText = "Error: Division by zero";
                            return;
                        }
                        result = numA / numB;
                    }
                    else if (operator == "×") {
                        result = numA * numB;
                    }
                    else if (operator == "-") {
                        result = numA - numB;
                    }
                    else if (operator == "+") {
                        result = numA + numB;
                    }

                    if (result > 1000000) {
                        display.value = "Error: Value too large";
                    } else {
                        display.value = result;
                    }

                    clearAll();
                }
            }
            else {
                operator = value;
                A = display.value;
                display.value = "";
            }
        }
        else if (topSymbols.includes(value)) { 
            if (value == "AC") {
                clearAll();
                display.value = "";
            }
            else if (value == "+/-") {
                if (display.value != "" && display.value != "0") {
                    if (display.value[0] == "-") { 
                        display.value = display.value.slice(1);
                    } else {
                        display.value = "-" + display.value;
                    }
                }
            }
            else if (value == "%") {
                display.value = Number(display.value) / 100;
            }
        }
        else { 
            if (value == ".") {
                if (display.value != "" && !display.value.includes(value)) {
                    display.value += value;
                }
            }
            else if (display.value == "0") {
                display.value = value;
            }
            else {
                if (display.value.length < 15) {
                    display.value += value;
                } else {
                    errorDisplay.innerText = "Error: Maximum input length exceeded";
                }
            }
        }

        adjustFontSize();
    });

    document.getElementById("buttons").appendChild(button);
}
