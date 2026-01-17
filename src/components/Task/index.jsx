import { use } from "react";
import "./Task.css";
import TaskContext from "../TaskProvider/TaskContext.js";
import { ButtonTaskToggleStatus } from "../ButtonTaskToggleStatus/index.jsx";
import { ButtonTaskEdit } from "../ButtonTaskEdit/index.jsx";
import { ButtonTaskDelete } from "../ButtonTaskDelete/index.jsx";
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
          <ButtonTaskToggleStatus
            onClick={() => toggleTask(task)}
            task={task}
          />
          <ButtonTaskEdit onClick={() => openDialog(task)} />
          <ButtonTaskDelete onClick={() => deleteTask(task)} />
        </div>
      </li>
    </>
  );
}
