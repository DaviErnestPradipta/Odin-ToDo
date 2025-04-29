import './style.css';
import { setupUI } from './DOM.js';
import { showTask } from './taskManager.js';

document.addEventListener("DOMContentLoaded", () => {
    showTask();
    setupUI();
});