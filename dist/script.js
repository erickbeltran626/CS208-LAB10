// This is a simple JavaScript file that adds interactivity to the HTML page

 // Runs when the page loads
document.addEventListener("DOMContentLoaded", domLoaded);

// Sets up the Add button and Enter key
function domLoaded() {
    let addButton = document.getElementById("addBtn");
    addButton.addEventListener("click", addBtnClick);

    let textbox = document.getElementById("taskInput");

    textbox.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });
}

// Gets the task from the textbox
function addBtnClick() {
    let textbox = document.getElementById("taskInput");
    let task = textbox.value;

    if (task !== "") {
        addTask(task);
    }

    textbox.value = "";
    textbox.focus();
}

// Adds a task to the list
function addTask(task) {
    let newTask = document.createElement("li");

    newTask.innerHTML = '<span class="task-text">' + task +
        '</span><button class="done-btn">&#10006;</button>';

    let taskList = document.querySelector("ol");
    taskList.appendChild(newTask);

    let buttons = document.querySelectorAll(".done-btn");
    let lastButton = buttons[buttons.length - 1];

    lastButton.addEventListener("click", removeTask);
}

// Removes a task from the list
function removeTask(event) {
    let task = event.target.parentNode;
    let taskList = task.parentNode;

    taskList.removeChild(task);
}