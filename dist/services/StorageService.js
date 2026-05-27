export class StorageService {
    static STORAGE_KEY = 'tasks';
    static saveTasks(tasks) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
    }
    static getTasks() {
        const tasks = localStorage.getItem(this.STORAGE_KEY);
        return tasks ? JSON.parse(tasks) : [];
    }
}
//# sourceMappingURL=StorageService.js.map