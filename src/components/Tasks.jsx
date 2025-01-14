import { useContext, useMemo } from "react";

import { TasksContext } from "../TasksContext";
import { actions } from "../tasksReducer";

import "../index.css";

export default function Tasks() {
  const { tasks, dispatch, filter } = useContext(TasksContext);

  const filteredTasks = useMemo(() => {
    tasks.filter((task) => {
      if (filter === "completed") return task.completed || [];
      if (filter === "incomplete") return !task.completed || [];
      return false;
    });
  });

  return (
    <>
      {tasks.length > 0 ? (
        <ul className="tasks-container">
          {(filter ? filteredTasks : tasks).map((task, index) => (
            <li key={index} className="task">
              <input
                type="checkbox"
                onChange={() =>
                  dispatch({
                    type: actions.checkTask,
                    payload: { index: index },
                  })
                }
                checked={task.completed}
              />
              <label>{task.name}</label>
              <button
                onClick={() =>
                  dispatch({
                    type: actions.deleteTask,
                    payload: { index: index },
                  })
                }
                className="delete option-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <section className="no-tasks-container">
          <p>You don't have any pending tasks!</p>
        </section>
      )}
    </>
  );
}
