import { StorageService } from '../services/StorageService.js';
import { TaskUI } from '../ui/TaskUI.js';
export class ViewTasksPage {
    static initialize() {
        let tasks = StorageService.getTasks();
        TaskUI.renderTasks(tasks);
        document.addEventListener('click', (event) => {
            const target = event.target;
            // COMPLETE TASK
            if (target.classList.contains('complete-btn')) {
                const id = Number(target.dataset.id);
                tasks = tasks.map((task) => task.id === id
                    ? { ...task, completed: !task.completed }
                    : task);
                StorageService.saveTasks(tasks);
                TaskUI.renderTasks(tasks);
            }
            // DELETE TASK
            if (target.classList.contains('delete-btn')) {
                const id = Number(target.dataset.id);
                tasks = tasks.filter((task) => task.id !== id);
                StorageService.saveTasks(tasks);
                TaskUI.renderTasks(tasks);
            }
            // EDIT TASK
            if (target.classList.contains('edit-btn')) {
                const id = Number(target.dataset.id);
                const task = tasks.find((t) => t.id === id);
                if (task) {
                    const updatedTitle = prompt('Edit task', task.title);
                    if (updatedTitle) {
                        task.title = updatedTitle;
                        StorageService.saveTasks(tasks);
                        TaskUI.renderTasks(tasks);
                    }
                }
            }
        });
    }
}
//# sourceMappingURL=ViewTasksPage.js.map