const calcButtons = document.querySelector(".calc-buttons");
const numButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operation");
const deleteButton = document.querySelector(".delete");
const decimalPoint = document.querySelector(".decimal");
const equalsButton = document.querySelector(".equals");
const divideButton = document.querySelector(".divide");
const multiplicationButton = document.querySelector(".multiply");
const minusButton = document.querySelector(".minus");
const additionButton = document.querySelector(".add");
const outputField = document.querySelector("output");

let calculatorObject = {
    currentValue: "",
    previousValue: 0,
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
    });
});

// calcButtons.addEventListener("click", (e) => {
//     let selected = e.target.textContent;
//     let selectedNumber = Number(selected);
//     console.log(typeof selectedNumber);

//     if (e.target === deleteButton) {
//         console.log("You clicked the delete button");
//     } else if (e.target === equalsButton) {
//         console.log("Equals?...");
//     } else if (e.target === divideButton) {
//         console.log("We stand divided!");
//     } else if (e.target === multiplicationButton) {
//         console.log("Multiply that number yo!");
//     } else if (e.target === minusButton) {
//         console.log("Take my breath away");
//     } else if (e.target === additionButton) {
//         console.log("Me plus you");
//     } else {
//         const output = (document.querySelector("output").innerHTML += selected);
//         return output;
//     }
// });
