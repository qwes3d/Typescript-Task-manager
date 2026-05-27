export class TaskUI {
    static renderTasks(tasks) {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        tasks.forEach((task) => {
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';
            li.innerHTML = `
        <span>${task.title}</span>

        <div>
          <button class="complete-btn" data-id="${task.id}">
            ${task.completed ? 'Undo' : 'Complete'}
          </button>

          <button class="edit-btn" data-id="${task.id}">
                Edit
          </button>

          <button class="delete-btn" data-id="${task.id}">
            Delete
          </button>
        </div>
      `;
            taskList.appendChild(li);
        });
    }
}
//# sourceMappingURL=TaskUI.js.map