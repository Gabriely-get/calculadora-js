const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const get_result = document.querySelector("#get-result");
const display = document.querySelector("#display");

let result;
let valueBeforeOperationSymbol = 0;
let valueAfterOperationSymbol = 0;
let operationSetted;

function setDisplay(value) {
    display.value += value;
}

function getDisplay() {
    return display.value;
}

for (let i = 0; i < number.length; i++) {

    number[i].addEventListener("click", () => {
        setDisplay(number[i].value);
    });

    result = getDisplay();
    operationSetted = false;
}
