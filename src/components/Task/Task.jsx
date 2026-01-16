import { use } from "react";
import "./Task.css";
import TaskContext from "../TaskProvider/TaskContext.js";
import { ButtonTaskToggleStatus } from "../ButtonTaskToggleStatus";
import { ButtonTaskEdit } from "../ButtonTaskEdit";
import { ButtonTaskDelete } from "../ButtonTaskDelete";
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
