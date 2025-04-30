import { addTask, saveTask } from './taskManager.js';

export function setupUI() {
    const titleBox = document.getElementById("title-box");
    const categoryBox = document.getElementById("category-box");
    const dateBox = document.getElementById("date-box");
    const priorityBox = document.getElementById("priority-box");
    const addButton = document.querySelector("button");
    const descriptionBox = document.getElementById("category-box");
    const listContainer = document.getElementById("list-container");
    

    addButton.addEventListener("click", () => 
        addTask(titleBox, categoryBox, dateBox, priorityBox, 
            descriptionBox, listContainer));

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveTask(listContainer);
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveTask(listContainer);
        }
    }, false);
}