export function addTask({ title, category, date, priority, description }) {
    if (!title.trim()) {
        alert("Got nothing to do?");
        return;
    }

    const task = {
        title: title.trim(),
        category: category.trim() || 'General',
        date,
        priority,
        description: description.trim()
    };

    saveTask(task);
}

export function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function getAllTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

export function deleteTaskByIdentifier(identifier) {
    const tasks = getAllTasks();
    const index = tasks.findIndex(task =>
        `${task.title} (${task.category}/${task.date}/${task.priority})` === identifier
    );
    if (index > -1) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

export function filterTasks({ category, date, priority }) {
    const tasks = getAllTasks();

    return tasks.filter(task => {
        const categoryMatch = category === '' || category === '?' || task.category === category;
        const dateMatch = date === '' || task.date === date;
        const priorityMatch = priority === '?' || task.priority === priority;
        return categoryMatch && dateMatch && priorityMatch;
    });
}