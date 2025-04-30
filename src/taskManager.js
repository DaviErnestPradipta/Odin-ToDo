export function addTask(titleBox, categoryBox, dateBox, priorityBox, 
    descriptionBox, listContainer) {
    let title = titleBox.value.trim();
    let category = categoryBox.value.trim() || 'General';
    let date = dateBox.value;
    let priority = priorityBox.value;
    let description = descriptionBox.value.trim();

    if (title === '') alert("Got nothing to do?");
    else {
        const task = {
            title: title,
            category: category,
            date: date,
            priority: priority,
            description: description
        };

        const taskContent = `${title} (${category}/${dateBox}/${priority})`;
        const li = document.createElement("li");
        const span = document.createElement("span");

        li.textContent = taskContent;
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
        saveTask(listContainer, task);

        titleBox.value = '';
        categoryBox.value = '';
        descriptionBox.value = '';
    }
}

export function saveTask(listContainer, task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task); // Add the new task
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function showTask() {
    const listContainer = document.getElementById("list-container");
    listContainer.innerHTML = localStorage.getItem("data") || "";
}