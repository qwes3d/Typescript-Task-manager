// src/app.ts
import { AddTaskPage } from './pages/AddTaskPage.js';
import { ViewTasksPage } from './pages/ViewTasksPage.js';
import { HomePage } from './pages/Homepage.js';
const path = window.location.pathname;
// HOME PAGE
if (path.includes('index.html') || path.endsWith('/')) {
    HomePage.initialize();
}
// ADD TASK PAGE
if (path.includes('add-task.html')) {
    AddTaskPage.initialize();
}
// VIEW TASKS PAGE
if (path.includes('view-tasks.html')) {
    ViewTasksPage.initialize();
}
//# sourceMappingURL=app.js.map