import { useEffect, useState } from "react";
import TaskContext from "./TaskContext.js";
export function TaskProvider({ children }) {
  const key = "tasks";
  const savedTasks = localStorage.getItem(key);
  const [tasks, setTasks] = useState(savedTasks ? JSON.parse(savedTasks) : []);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (formData) => {
    const newTask = formData.get("newTask");
    setTasks((prevState) => {
      const task = {
        id: prevState.length + 1,
        title: newTask,
        completed: false,
      };
      return [...prevState, task];
    });
  };
  const toggleTask = (target) => {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === target.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    });
  };
  const deleteTask = (target) => {
    setTasks((prevState) => {
      return prevState.filter((task) => task.id != target.id);
    });
  };
  return (
    <TaskContext value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext>
  );
}
