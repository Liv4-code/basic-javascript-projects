const addInput = document.querySelector("#addForm");
const todoList = document.querySelector("#todoList");
const searchInputField = document.querySelector("#searchForm input");

// Adding Todo:

addInput.addEventListener("submit", e => {
    e.preventDefault();

    const inputValue = document.querySelector("#addInput").value.trim();

    if(inputValue !== ""){
        todoList.innerHTML += `<span class="list-item"><li>${inputValue}<input class="option checkbox" type="checkbox"></li><button class="option delete">X</button></span>`;
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
    const searchInput = searchInputField.value.trim();
    const listItemValues = todoList.querySelectorAll("li");

    listItemValues.forEach(item => {
        // console.log(item.textContent);
        if(item.textContent.includes(searchInput)){
            console.log("yes");
        }
    });
    // if(searchInput){

    // }
    //Convert array into string of todo list item
    //Compare input string value to todo list item string values
    //Compare searchInput to listItemValues
    // console.log(listItemValues);
});