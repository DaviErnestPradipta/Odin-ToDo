export function addTask(titleBox, categoryBox, dateBox, priorityBox, 
    descriptionBox, listContainer) {
    let title = titleBox.value;
    let category = categoryBox.value.trim() || 'General';

    if (title.trim() === '') alert("Got nothing to do?");
    else {
        const taskContent = `${title} (${category}/${dateBox.value}/${priorityBox.value})`;
        const li = document.createElement("li");
        const span = document.createElement("span");
        
        li.textContent = taskContent;
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);

        title = '';
        category = '';

        saveTask(listContainer);
    }
}

export function saveTask(listContainer) {
    localStorage.setItem("data", listContainer.innerHTML);
}

export function showTask() {
    const listContainer = document.getElementById("list-container");
    listContainer.innerHTML = localStorage.getItem("data") || "";
}