import { use } from "react";
import "./Task.css";
import TaskContext from "../TaskProvider/TaskContext.js";
import { ButtonToggleTask } from "../ButtonToggleTask/ButtonToggleTask.jsx";
import { ButtonEditTask } from "../ButtonEditTask/ButtonEditTask.jsx";
import { ButtonDeleteTask } from "../ButtonDeleteTask/ButtonDeleteTask";
export function Task({ task }) {
  const { openDialog, toggleTask, deleteTask } = use(TaskContext);
  const styles = ["task"];
  if (task.completed) {
    styles.push("completed");
  }
  return (
    <>
      <li className={styles.join(" ")}>
        {task.title}
        <div className="actions">
          <ButtonToggleTask onClick={() => toggleTask(task)} />
          <ButtonEditTask onClick={() => openDialog(task)} />
          <ButtonDeleteTask onClick={() => deleteTask(task)} />
        </div>
      </li>
    </>
  );
}
