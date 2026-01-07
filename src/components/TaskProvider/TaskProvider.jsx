import { useState } from "react";
import TaskContext from "./TaskContext.js";
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Study HTML",
    },
    {
      id: 2,
      title: "Study CSS",
    },
    {
      id: 3,
      title: "Study JavaScript",
    },
  ]);
  const addTask = (formData) => {
    const newTask = formData.get("newTask");
    setTasks((prevState) => {
      const task = {
        id: prevState.length + 1,
        title: newTask,
      };
      return [...prevState, task];
    });
  };
  return <TaskContext value={{ tasks, addTask }}>{children}</TaskContext>;
}
