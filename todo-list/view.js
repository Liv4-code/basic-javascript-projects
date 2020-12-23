const addInput = document.querySelector("#addForm");
const todoList = document.querySelector("#todoList");

// Adding Todo:

addInput.addEventListener("submit", e => {
    e.preventDefault();

    const inputValue = document.querySelector("#addInput").value.trim();

    if(inputValue !== ""){
        todoList.innerHTML += `<span class="list-item"><li>${inputValue}<input class="option checkbox" type="checkbox"></li><button class="option">X</button></span>`;
        addInput.reset();
    }
});

// Deleting Todo:

todoList.addEventListener("click", e => {
    let listItem = e.target.parentElement;
    listItem.parentNode.removeChild(listItem);
});