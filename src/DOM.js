import {
    addTask,
    renderTasks,
    getAllTasks,
    deleteTaskByIdentifier,
    filterTasks
} from './taskManager.js';

export function setupUI() {
    const titleBox = document.getElementById("title-box");
    const categoryBox = document.getElementById("category-box");
    const dateBox = document.getElementById("date-box");
    const priorityBox = document.getElementById("priority-box");
    const descriptionBox = document.getElementById("description-box");
    const searchCategoryBox = document.getElementById("search-category-box");
    const searchDateBox = document.getElementById("search-date-box");
    const searchPriorityBox = document.getElementById("search-priority-box");

    const addButton = document.querySelector("button");
    const searchButton = document.getElementById("search-button");
    const listContainer = document.getElementById("list-container");

    renderTasks(getAllTasks());

    addButton.addEventListener("click", () => {
        addTask({
            title: titleBox.value,
            category: categoryBox.value,
            date: dateBox.value,
            priority: priorityBox.value,
            description: descriptionBox.value
        });

        // Clear form inputs
        titleBox.value = '';
        categoryBox.value = '';
        descriptionBox.value = '';

        renderTasks(getAllTasks());
    });

    listContainer.addEventListener("click", function (e) {
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
        } else if (e.target.tagName === "SPAN") {
            const parent = e.target.parentElement;
            const taskText = parent.firstChild.textContent.trim();
            deleteTaskByIdentifier(taskText);
            renderTasks(getAllTasks());
        }
    });

    searchButton.addEventListener("click", () => {
        const filtered = filterTasks({
            category: searchCategoryBox.value.trim(),
            date: searchDateBox.value,
            priority: searchPriorityBox.value
        });

        renderTasks(filtered);
    });
}