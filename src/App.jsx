import { TasksProvider } from "./TasksContext";

import AddNewTask from "./components/AddNewTask";
import FilterTasks from "./components/FilterTasks";
import Tasks from "./components/Tasks";

import "./index.css";

export default function App() {
  return (
    <>
      <header>
        <h1>Todo App</h1>
      </header>
      <main>
        <TasksProvider>
          <div className="options">
            <FilterTasks />
            <AddNewTask />
          </div>
          <Tasks />
        </TasksProvider>
      </main>
    </>
  );
}
