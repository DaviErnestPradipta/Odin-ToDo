export function addTask(titleBox, categoryBox, dateBox, priorityBox, descriptionBox, listContainer) {
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

        saveTask(task);

        titleBox.value = '';
        categoryBox.value = '';
        descriptionBox.value = '';

        showTask(listContainer);
    }
}

export function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function showTask(listContainer) {
    listContainer.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        const taskContent = `${task.title} (${task.category}/${task.date}/${task.priority})`;
        const span = document.createElement("span");
        
        li.textContent = taskContent;
        li.setAttribute("data-description", task.description);
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
    });
}