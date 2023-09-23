const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const get_result = document.querySelector("#get-result");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const dot = document.querySelector("#dot");

let lastResult = 0;
let result = 0;
let valueBeforeOperationSymbol = 0;
let valueAfterOperationSymbol = 0;
let operationSetted;
let dotClicked = false;

get_result.addEventListener("click", () => {
    setDisplay(result);
})

clear.addEventListener("click", () => {
    setDisplay('');
    result = '';
    operationSetted = false;
})

backspace.addEventListener("click", () => {
    let newDisplay = getDisplay().split("");
    newDisplay.pop();

    setDisplay( newDisplay.join("") );
})

dot.addEventListener("click", () => {
    dotClicked = true;
})

function setDisplay(value) {
    display.value = value;
}

function getDisplay() {
    return display.value;
}

for (let i = 0; i < number.length; i++) {

    number[i].addEventListener("click", () => {
        if (operationSetted) {
            setDisplay('');
        }

        dotClicked 
            ? setDisplay(getDisplay() + "." + number[i].value)
            : setDisplay(getDisplay() + number[i].value);

        calc(operationSetted);
        operationSetted = false;
        dotClicked = false;
    });
    
}

for (let i = 0; i < operation.length; i++) {

    operation[i].addEventListener("click", () => {
        operationSetted = operation[i].value;
        setDisplay(result);
    });
    
}

function calc(isOperationSetted) {
    if (isOperationSetted) {
        if (isOperationSetted == "+") {
            result = Number(result) + Number(getDisplay());
        }
        if (isOperationSetted == "-") {
            result = Number(result) - Number(getDisplay());
        }
        if (isOperationSetted == "/") {
            result = Number(result) / Number(getDisplay());
        }
        if (isOperationSetted == "*") {
            result = Number(result) * Number(getDisplay());
        }
        if (isOperationSetted == "^") {
            result = Math.pow(Number(result), Number(getDisplay()));
        }
    } else {
        result = getDisplay();
    }

}