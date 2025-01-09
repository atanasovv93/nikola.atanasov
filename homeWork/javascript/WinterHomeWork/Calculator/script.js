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

//A+B, A×B, A-B, A÷B
let A = 0;
let operator = null;
let B = null;

function clearAll() {
    A = null;
    operator = null;
    B = null;
    errorDisplay.innerText = "";
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

    //styling button colors
    if (value == "0") {
        button.style.width = "180px";
        button.style.gridColumn = "span 2"; //take up 2 columns
    }
    else if (rightSymbols.includes(value)) {
        button.style.backgroundColor = "#FF9500";
    }
    else if (topSymbols.includes(value)) {
        button.style.backgroundColor = "#D4D4D2";
        button.style.color = "#1C1C1C";
    }

    //process button clicks
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

                    // Check if the result exceeds 1,000,000
                    if (result > 1000000) {
                        display.value = "Error: Value too large";
                    } else {
                        display.value = result;
                    }

                    clearAll();
                }
            }
            else {
                operator = value; //÷ × - +
                A = display.value;
                display.value = "";
            }
        }
        else if (topSymbols.includes(value)) { //AC +/- %
            if (value == "AC") {
                clearAll();
                display.value = "";
            }
            else if (value == "+/-") {
                if (display.value != "" && display.value != "0") {
                    if (display.value[0] == "-") { //remove -
                        display.value = display.value.slice(1);
                    } else { //add -
                        display.value = "-" + display.value;
                    }
                }
            }
            else if (value == "%") {
                display.value = Number(display.value) / 100;
            }
        }
        else { //digits or .
            if (value == ".") {
                //don't add multiple decimal places
                if (display.value != "" && !display.value.includes(value)) {
                    display.value += value;
                }
            }
            //not a dot, number instead
            else if (display.value == "0") {
                display.value = value;
            }
            else {
                display.value += value;
            }
        }

        // Adjust font size after each button click
        adjustFontSize();
    });

    //add button to calculator
    document.getElementById("buttons").appendChild(button);
}
