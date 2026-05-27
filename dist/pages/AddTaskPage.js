import { StorageService } from '../services/StorageService.js';
export class AddTaskPage {
    static initialize() {
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskInput = document.getElementById('taskInput');
        addTaskBtn?.addEventListener('click', () => {
            const title = taskInput.value.trim();
            if (!title) {
                alert('Enter a task');
                return;
            }
            const tasks = StorageService.getTasks();
            const newTask = {
                id: Date.now(),
                title,
                completed: false,
            };
            tasks.push(newTask);
            StorageService.saveTasks(tasks);
            alert('Task Added');
            taskInput.value = '';
        });
    }
}
//# sourceMappingURL=AddTaskPage.js.map