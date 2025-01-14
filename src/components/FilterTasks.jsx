import { useContext } from "react";

import { TasksContext } from "../TasksContext";

export default function FilterTasks() {
  const { setFilter } = useContext(TasksContext);

  return (
    <>
      <select
        name="filter"
        id="filter-dropdown"
        onChange={(e) => setFilter(e.target.value)}
        className="option-button"
      >
        <option value="">Show All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </>
  );
}
