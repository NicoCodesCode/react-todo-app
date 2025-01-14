import { useState, useContext, useEffect } from "react";

import { TasksContext } from "../TasksContext";
import { actions } from "../tasksReducer";

import "../index.css";

export default function AddNewTask() {
  const [isHidden, setIsHidden] = useState(true);
  const [newTaskName, setNewTaskName] = useState("");
  const { tasks, dispatch } = useContext(TasksContext);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTaskName.trim()) {
      dispatch({
        type: actions.addTask,
        payload: { newTaskName: newTaskName },
      });

      setNewTaskName("");
      setIsHidden(true);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsHidden((prevIsHidden) => !prevIsHidden)}
        className="option-button"
      >
        Add New Task
      </button>
      <section
        style={{ display: isHidden ? "none" : "block" }}
        className="new-task-form"
      >
        <form onSubmit={handleSubmit}>
          <label>
            Task Name:{" "}
            <input
              type="text"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
            />
          </label>
          <button type="submit" className="option-button">
            Add
          </button>
        </form>
      </section>
    </>
  );
}
