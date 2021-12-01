const buttons = document.querySelectorAll("button");
const outputField = document.querySelector("output");
const numButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operation");
const deleteButton = document.querySelector(".delete");
const decimalPoint = document.querySelector(".decimal");
const equalsButton = document.querySelector(".equals");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const minusButton = document.querySelector(".minus");
const additionButton = document.querySelector(".add");

let calculatorObject = {
    currentValue: "",
    previousValue: null,
    operation: "",
};

// Add a class to operator key when pressed to show that it's active

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // When user clicks on operation button, store the operand
        if (e.target === deleteButton) {
            calculatorObject.operation = "delete";
        } else if (e.target === divideButton) {
            calculatorObject.operation = "divide";
            console.log(calculatorObject.operation);
        } else if (e.target === multiplyButton) {
            calculatorObject.operation = "multiply";
            console.log(calculatorObject.operation);
        } else if (e.target === minusButton) {
            calculatorObject.operation = "minus";
            console.log(calculatorObject.operation);
        } else if (e.target === additionButton) {
            calculatorObject.operation = "add";
            console.log(calculatorObject.operation);
        }
        // Then set currentValue to empty string
    });
});

// Set current number values :
numButtons.forEach((number) => {
    number.addEventListener("click", () => {
        // Each clicked button will concatenate its value to the currenValue property in object
        let output = (calculatorObject.currentValue += number.textContent);
        // Convert value to a number:
        let numberOutput = Number(output);
        // Display number output to user:
        outputField.innerHTML = numberOutput;
        console.log(numberOutput);
    });
});

equalsButton.addEventListener("click", () => {
    compute(
        calculatorObject.previousValue,
        calculatorObject.operation,
        calculatorObject.currentValue
    );
});

const compute = (previousValue, operation, currentValue) => {
    if (operation === "delete") {
        console.log("deleted", previousValue, currentValue);
    } else if (operation === "divide") {
        console.log("divided", previousValue, currentValue);
    } else if (operation === "multiply") {
        console.log("multiplied", previousValue, currentValue);
    } else if (operation === "minus") {
        console.log("taken away !", previousValue, currentValue);
    } else if (operation === "add") {
        console.log("added", previousValue, currentValue);
    }
    // display answer in output field
};

outputField.innerHTML = calculatorObject.currentValue;
