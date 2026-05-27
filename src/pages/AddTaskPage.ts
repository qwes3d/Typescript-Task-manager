import type { Task } from '../models/Task.js';

import { StorageService } from '../services/StorageService.js';



export class AddTaskPage {
  static initialize(): void {
    const addTaskBtn = document.getElementById(
      'addTaskBtn'
    ) as HTMLButtonElement;

    const taskInput = document.getElementById(
      'taskInput'
    ) as HTMLInputElement;

    addTaskBtn?.addEventListener('click', () => {
      const title = taskInput.value.trim();

      if (!title) {
        alert('Enter a task');
        return;
      }

      const tasks = StorageService.getTasks();

      const newTask: Task = {
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