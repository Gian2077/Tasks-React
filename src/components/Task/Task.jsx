import { use } from "react";
import "./Task.css";
import TaskContext from "../TaskProvider/TaskContext.js";
import { ButtonTaskToggleStatus } from "../ButtonTaskToggleStatus/ButtonTaskToggleStatus.jsx";
import { ButtonTaskDelete } from "../ButtonTaskDelete/ButtonTaskDelete.jsx";
export function Task({ task }) {
  const { toggleTask, deleteTask } = use(TaskContext);
  const styles = ["task"];
  if (task.completed) {
    styles.push("completed");
  }
  return (
    <>
      <li className={styles.join(" ")}>
        {task.title}
        <div className="actions">
          <ButtonTaskToggleStatus onClick={() => toggleTask(task)} />
          <ButtonTaskDelete onClick={() => deleteTask(task)} />
        </div>
      </li>
    </>
  );
}
