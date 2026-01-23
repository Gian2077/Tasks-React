import { useEffect, useState } from "react";
import TaskContext from "./TaskContext.js";
export function TaskProvider({ children }) {
  const key = "tasks";
  const savedTasks = localStorage.getItem(key);
  const [tasks, setTasks] = useState(savedTasks ? JSON.parse(savedTasks) : []);
  const [showDialog, setShowDialog] = useState(false);
  const [targetTask, setTargetTask] = useState();
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(tasks));
  }, [tasks]);
  const openDialog = (task) => {
    if (task) {
      setTargetTask(task);
    }
    setShowDialog(true);
  };
  const closeDialog = () => {
    setShowDialog(false);
    setTargetTask(null);
  };
  const addTask = (formData) => {
    const title = formData.get("title");
    setTasks((prevState) => {
      const task = {
        id: prevState.length + 1,
        title: title,
        type: formData.get("type"),
        completed: false,
        dateCreated: new Date().toISOString(),
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
  const editTask = (formData) => {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === targetTask.id) {
          return {
            ...task,
            title: formData.get("title"),
            type: formData.get("type"),
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
    <TaskContext
      value={{
        tasks,
        showDialog,
        openDialog,
        closeDialog,
        targetTask,
        addTask,
        toggleTask,
        editTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext>
  );
}
