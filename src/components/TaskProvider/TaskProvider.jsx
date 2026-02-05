import { use, useEffect, useState } from "react";
import TaskContext from "./TaskContext.js";
import DateContext from "../DateProvider/DateContext.js";
export function TaskProvider({ children }) {
  const { DAY, DAY_WEEK, MONTH, YEAR } = use(DateContext);
  const key = "tasks";
  const savedTasks = localStorage.getItem(key);
  const [tasks, setTasks] = useState(savedTasks ? JSON.parse(savedTasks) : []);
  const [showDialog, setShowDialog] = useState(false);
  const [targetTask, setTargetTask] = useState();
  useEffect(() => {
    setTasks((prev) => {
      return prev.map((task) => {
        if (!task.completed) return task;
        const dateObject = new Date(task.dateCompleted);
        const dayWeekCompleted = Number(dateObject.getUTCDay());
        const dayCompleted = Number(
          task.dateCompleted.split("T")[0].split("-")[2],
        );
        const monthCompleted = Number(
          task.dateCompleted.split("T")[0].split("-")[1],
        );
        const yearCompleted = Number(
          task.dateCompleted.split("T")[0].split("-")[0],
        );
        switch (task.type) {
          case "daily":
            if (MONTH !== monthCompleted || DAY > dayCompleted) {
              return {
                ...task,
                completed: false,
                dateCompleted: null,
              };
            }
            break;
          case "weekly":
            if (DAY_WEEK < dayWeekCompleted) {
              return {
                ...task,
                completed: false,
                dateCompleted: null,
              };
            }
            break;
          case "monthly":
            if (YEAR !== yearCompleted || MONTH > monthCompleted) {
              return {
                ...task,
                completed: false,
                dateCompleted: null,
              };
            }
            break;
          case "yearly":
            if (YEAR > yearCompleted) {
              return {
                ...task,
                completed: false,
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
