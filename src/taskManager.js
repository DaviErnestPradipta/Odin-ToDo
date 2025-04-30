export function addTask(titleBox, categoryBox, dateBox, priorityBox, 
    descriptionBox, listContainer) {
    if (titleBox.value.trim() === '') {
        alert("Got nothing to do?");
    }
    else {
        const li = document.createElement("li");
        const taskContent = `${titleBox.value} (${categoryBox.value}/${dateBox.value}/${priorityBox.value})`;
        li.textContent = taskContent;
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
        titleBox.value = '';
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