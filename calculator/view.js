const calcButtons = document.querySelector(".calc-buttons");
const numButtons = document.querySelectorAll(".number");
const deleteButton = document.querySelector(".delete");
const decimalPoint = document.querySelector(".decimal");
const equalsButton = document.querySelector(".equals");
const opButtons = document.querySelectorAll(".operation");

calcButtons.addEventListener("click", (e) => {
    if (e.target === deleteButton) {
        console.log("You clicked the delete button");
    } else if (e.target === equalsButton) {
        console.log("Equals?...");
    } else {
        const selected = e.target.textContent;
        const output = (document.querySelector("output").innerHTML += selected);
        return output;
    }
});

// Capture output
// Change output each time user clicks on a button
