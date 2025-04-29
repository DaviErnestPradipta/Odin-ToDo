export function addTask(inputBox, listContainer) {
    if (inputBox.value.trim() === '') {
        alert("Got nothing to do?");
    } else {
        const li = document.createElement("li");
        li.textContent = inputBox.value;
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
        inputBox.value = '';
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