export const actions = {
  addTask: "add-task",
  deleteTask: "delete-task",
  checkTask: "check-task",
};

export function tasksReducer(tasks, action) {
  switch (action.type) {
    case actions.addTask:
      return [...tasks, { name: action.payload.newTaskName, completed: false }];
    case actions.deleteTask:
      return tasks.filter((_, i) => i !== action.payload.index);
    case actions.checkTask:
      return tasks.map((task, i) =>
        i === action.payload.index
          ? { name: task.name, completed: !task.completed }
          : task
      );
    default:
      return tasks;
  }
}
