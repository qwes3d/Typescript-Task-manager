import { StorageService } from '../services/StorageService.js';




export class TaskDetailsPage {
  static showTask(id: number): void {
    const tasks = StorageService.getTasks();

    const task = tasks.find((t) => t.id === id);

    console.log(task);
  }
}