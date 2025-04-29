import { addTask, saveTask } from './taskManager.js';

export function setupUI() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    const addButton = document.querySelector("button");

    addButton.addEventListener("click", () => addTask(inputBox, listContainer));
    inputBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter") addTask(inputBox, listContainer);
    });

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