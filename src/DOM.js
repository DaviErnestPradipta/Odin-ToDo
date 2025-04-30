import { addTask, saveTask } from './taskManager.js';

export function setupUI() {
    const titleBox = document.getElementById("title-box");
    const categoryBox = document.getElementById("category-box");
    const dateBox = document.getElementById("date-box");
    const priorityBox = document.getElementById("priority-box");
    const addButton = document.querySelector("button");
    const descriptionBox = document.getElementById("description-box");
    const listContainer = document.getElementById("list-container");

    // Show tasks from localStorage on page load
    showTask(listContainer);

    addButton.addEventListener("click", () => 
        addTask(titleBox, categoryBox, dateBox, priorityBox, descriptionBox, listContainer));

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");

            const description = e.target.getAttribute("data-description");
            if (description) {
                alert(`Description: ${description}`);
            }

            saveTask(listContainer);
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveTask(listContainer);
        }
    }, false);
}