import { use } from "react";
import "./Task.css";
import TaskContext from "../TaskProvider/TaskContext.js";
<<<<<<< HEAD
import { ButtonToggleTask } from "../ButtonToggleTask/ButtonToggleTask.jsx";
import { ButtonEditTask } from "../ButtonEditTask/ButtonEditTask.jsx";
import { ButtonDeleteTask } from "../ButtonDeleteTask/ButtonDeleteTask";
=======
import { ButtonTaskToggleStatus } from "../ButtonTaskToggleStatus/ButtonTaskToggleStatus.jsx";
import { ButtonTaskDelete } from "../ButtonTaskDelete/ButtonTaskDelete.jsx";
>>>>>>> 611e83358ca648d3e735875884db71d774a07e7e
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
<<<<<<< HEAD
          <ButtonToggleTask onClick={() => toggleTask(task)} />
          <ButtonEditTask onClick={() => openDialog(task)} />
          <ButtonDeleteTask onClick={() => deleteTask(task)} />
=======
          <ButtonTaskToggleStatus onClick={() => toggleTask(task)} />
          <ButtonTaskDelete onClick={() => deleteTask(task)} />
>>>>>>> 611e83358ca648d3e735875884db71d774a07e7e
        </div>
      </li>
    </>
  );
}
