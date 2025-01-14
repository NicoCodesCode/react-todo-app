import { useReducer, createContext, useState } from "react";
import { tasksReducer } from "./tasksReducer";

export const TasksContext = createContext();

function getStoredTasks() {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, [], getStoredTasks);
  const [filter, setFilter] = useState("");

  return (
    <TasksContext.Provider value={{ tasks, dispatch, filter, setFilter }}>
      {children}
    </TasksContext.Provider>
  );
}
