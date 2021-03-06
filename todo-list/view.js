const addInput = document.querySelector("#addForm");
const todoList = document.querySelector("#todoList");
const searchInputField = document.querySelector("#searchForm input");

// Adding Todo:

addInput.addEventListener("submit", e => {
    e.preventDefault();

    const inputValue = document.querySelector("#addInput").value.trim();

    if(inputValue !== ""){
        todoList.innerHTML += `<span><li>${inputValue}<input class="option checkbox" type="checkbox"></li><button class="option delete">X</button></span>`;
        addInput.reset();
    }
});

// Deleting Todo:

todoList.addEventListener("click", e => {
    const deleteButton = document.querySelectorAll(".delete");
    const listItem = e.target.parentElement;
    deleteButton.forEach(button => {
        if(e.target === button){
            listItem.parentNode.removeChild(listItem);
        }
    });
});

// Searching Todo's:

searchInputField.addEventListener("keyup", () => {
    // Reference to Todo list items:
    const todos = document.querySelectorAll("#todoList li");
    const searchValue = searchInputField.value.trim().toLowerCase();

    todos.forEach(todo => {
        if(todo.textContent.toLowerCase().includes(searchValue)){
            todo.classList.remove("todoListItem");
            todo.nextSibling.classList.remove("todoListItem");
        } else {
            todo.classList.add("todoListItem");
            todo.nextSibling.classList.add("todoListItem");
        }
    });
});