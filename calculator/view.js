const calcButtons = document.querySelector(".calc-buttons");
const numButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operation");
const deleteButton = document.querySelector(".delete");
const decimalPoint = document.querySelector(".decimal");
const equalsButton = document.querySelector(".equals");
const outputField = document.querySelector("output");

// What if we store the operator and concatenate 

let calculatorObject = {
    currentValue: "",
    previousValue: null,
    operation: undefined,
};

// Listen for click event on each number button
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

opButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // When user clicks on operation button, store the operand
        // in previousValue property on calculator object
        if (e.target === deleteButton) {
            calculatorObject.currentValue = "";
        } else if (e.target === divideButton) {
            calculatorObject.previousValue = calculatorObject.currentValue;
            calculatorObject.currentValue = "";
            const answer =
                calculatorObject.previousValue / calculatorObject.currentValue;
            console.log(answer);
        } else if (e.target === multiplicationButton) {
            console.log("Multiply that number yo!");
        } else if (e.target === minusButton) {
            console.log("Take my breath away");
        } else if (e.target === additionButton) {
            console.log("Me plus you");
        }
        // Then set currentValue to empty string and clear output field
        outputField.innerHTML = calculatorObject.currentValue;

        if (e.target === divideButton) {
            console.log("you clicked the divide button");
        }
    });
});

equalsButton.addEventListener("click", () => {
    outputField.innerHTML = calculatorObject.currentValue;
});

const compute = (previousValue, operation, currentValue) => {
    if(){

    } else if(){

    } else if(){

    } else if(){

    } else if(){

    }

    // display answer in output field
};

// calcButtons.addEventListener("click", (e) => {
//     let selected = e.target.textContent;
//     let selectedNumber = Number(selected);
//     console.log(typeof selectedNumber);

//         else {
//         const output = (document.querySelector("output").innerHTML += selected);
//         return output;
//     }
// });
