import { StorageService } from '../services/StorageService.js';
export class EditTaskPage {
    static updateTask(id, title) {
        const tasks = StorageService.getTasks();
        const updatedTasks = tasks.map((task) => task.id === id
            ? { ...task, title }
            : task);
        StorageService.saveTasks(updatedTasks);
    }
}
//# sourceMappingURL=EditTaskPages.js.map