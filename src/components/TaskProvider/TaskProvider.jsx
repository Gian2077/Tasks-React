import { useEffect, useState } from "react";
import TaskContext from "./TaskContext.js";
export function TaskProvider({ children }) {
  const key = "tasks";
  const DAY = 24 * 60 * 60 * 1000;
  const WEEK = DAY * 7;
  const MONTH = DAY * 30;
  const YEAR = DAY * 365;
  const savedTasks = localStorage.getItem(key);
  const [tasks, setTasks] = useState(savedTasks ? JSON.parse(savedTasks) : []);
  const [showDialog, setShowDialog] = useState(false);
  const [targetTask, setTargetTask] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prev) => {
        return prev.map((task) => {
          if (!task.completed) return task;
          const completedAt = new Date(task.dateCompleted).getTime();
          const dateNow = Date.now();
          switch (task.type) {
            case "daily":
              if (dateNow - completedAt >= DAY) {
                return {
                  ...task,
                  completed: !task.completed,
                  dateCompleted: null,
                };
              }
              break;
            case "weekly":
              if (dateNow - completedAt >= WEEK) {
                return {
                  ...task,
                  completed: !task.completed,
                  dateCompleted: null,
                };
              }
              break;
            case "monthly":
              if (dateNow - completedAt >= MONTH) {
                return {
                  ...task,
                  completed: !task.completed,
                  dateCompleted: null,
                };
              }
              break;
            case "yearly":
              if (dateNow - completedAt >= YEAR) {
                return {
                  ...task,
                  completed: !task.completed,
                  dateCompleted: null,
                };
              }
              break;
            default:
              return;
          }
          return task;
        });
      });
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);
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
        dateCompleted: null,
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
            dateCompleted: !task.completed ? new Date().toISOString() : null,
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
