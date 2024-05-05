
const addTaskBtn = document.getElementById("add-task-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");


addTaskBtn.addEventListener("click", addTask);


function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    todoInput.value = "";
}