import './style.css'

document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    const addButton = document.querySelector("button");

    function addTask() {
        if (inputBox.value === '') {
            alert("Got nothing to do?");
        } 
        else {
            let li = document.createElement("li");
            li.textContent = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            inputBox.value = '';
        }
    }

    addButton.addEventListener("click", addTask);
    inputBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter") addTask();
    });

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveTask();
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveTask();
        }
    }, false);

    function saveTask() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showTask();
});