const calcButtons = document.querySelector(".calc-buttons");
const numButtons = document.querySelectorAll(".number");
const decimalPoint = document.querySelector(".decimal");
const opButtons = document.querySelectorAll(".operation");

calcButtons.addEventListener("click", (e) => {
    const selected = e.target.textContent;

    const output = (document.querySelector("output").innerHTML += selected);

    console.log(output);
});

// Capture output
// Change output each time user clicks on a button
