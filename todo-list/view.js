const addInput = document.querySelector("#addForm");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");

addInput.addEventListener("submit", e => {

    e.preventDefault();

    const inputValue = document.querySelector("#addInput").value;
    console.log(inputValue);
    todoList.innerHTML += `<span><li>${inputValue}<input class="option checkbox" type="checkbox"></li><button class="option">X</button></span>`;
});



