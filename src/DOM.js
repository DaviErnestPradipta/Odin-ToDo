import { addTask, showTask } from './taskManager.js';

export function setupUI() {
    const titleBox = document.getElementById("title-box");
    const categoryBox = document.getElementById("category-box");
    const dateBox = document.getElementById("date-box");
    const priorityBox = document.getElementById("priority-box");
    const addButton = document.querySelector("button");
    const descriptionBox = document.getElementById("description-box");
    const listContainer = document.getElementById("list-container");

    showTask();

    addButton.addEventListener("click", () =>
        addTask(titleBox, categoryBox, dateBox, priorityBox, descriptionBox, listContainer)
    );

    listContainer.addEventListener("click", function(e) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        if (e.target.tagName === "LI") {
            const description = e.target.getAttribute("data-description");
            if (description) {
                const existing = e.target.querySelector(".description");
                if (existing) existing.remove();
                else {
                    const descDiv = document.createElement("div");
                    descDiv.className = "description";
                    descDiv.textContent = description;
                    e.target.appendChild(descDiv);
                }
            }            
        } 
        else if (e.target.tagName === "SPAN") {
            const parent = e.target.parentElement;
            const taskText = parent.firstChild.textContent.trim();
            const index = tasks.findIndex(task =>
                `${task.title} (${task.category}/${task.date}/${task.priority})` === taskText);

            if (index > -1) {
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                showTask();
            }
        }
    }, false);
}