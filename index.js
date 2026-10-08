let display =document.getElementById("display");
let firstNumber = "";
let operator = "";
let secondNumber ="";

function appendNumber(number) {
    if (number === "." && display.innerText.includes(".")) {
        return;
    }

    if (display.innerText === "0") {
        display.innerText = number;
    }  else {
        display.innerText += number;
    }

}

function chooseOperator(op) {
    firstNumber = display.innerText;
    operator = op;
    display.innerText ="0"
}

function calculate() {
    secondNumber = display.innerText;
    let a = Number(firstNumber);
    let b = Number(secondNumber);
    let result;

    if (operator === "+") {
        result = a+b;
    }
    else if (operator === "-") {
        result = a-b;
    } 
    else if (operator === "*") {
        result = a*b
    }
    else if (operator === "/") {
        if (b === 0){
            result = "Error";
        } else {
            result = a/b;
        }
    }
    display.innerText = result

}

function clearDisplay() {
    display.innerText ="0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function deleteNumber() {
    if (display.innerText.length === 1) {
        display.innerText = "0";
    } else {
        display.innerText = display.innerText.slice(0,-1);
    }
}

function percent() {
    display.innerText = Number(display.innerText) / 100;
}

function togglesign() {
    display.innerText = Number(display.innerText) * -1;
}

let prevDisplay = document.getElementById("previous-op");
let currDisplay = document.getElementById("current-op");

















































