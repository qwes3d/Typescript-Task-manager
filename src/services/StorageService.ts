import type { Task } from '../models/Task.js';




export class StorageService {
  private static STORAGE_KEY = 'tasks';

  static saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
  }

  static getTasks(): Task[] {
    const tasks = localStorage.getItem(this.STORAGE_KEY);

    return tasks ? JSON.parse(tasks) : [];
  }
}