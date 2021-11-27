const calcButtons = document.querySelector(".calc-buttons");
const numButtons = document.querySelectorAll(".number");
const deleteButton = document.querySelector(".delete");
const decimalPoint = document.querySelector(".decimal");
const equalsButton = document.querySelector(".equals");
const divideButton = document.querySelector(".divide");
const multiplicationButton = document.querySelector(".multiply");
const minusButton = document.querySelector(".minus");
const additionButton = document.querySelector(".add");
const opButtons = document.querySelectorAll(".operation");

class Calculator {
    constructor() {
        delete(){

        }
        divide(){

        }
        multiply(){

        }
        minus(){

        }
        add(){

        }
        calculate(){
        
        }
    }
}

calcButtons.addEventListener("click", (e) => {
    if (e.target === deleteButton) {
        console.log("You clicked the delete button");
    } else if (e.target === equalsButton) {
        console.log("Equals?...");
    } else if (e.target === divideButton) {
        console.log("We stand divided!");
    } else if (e.target === multiplicationButton) {
        console.log("Multiply that number yo!");
    } else if (e.target === minusButton) {
        console.log("Take my breath away");
    } else if (e.target === additionButton) {
        console.log("Me plus you");
    } else {
        const selected = e.target.textContent;
        // change string to number
        const output = (document.querySelector("output").innerHTML += selected);
        return output;
    }
});

// create an object
// that contains methods for operations
// and appends to output
