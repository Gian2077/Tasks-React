import { use } from "react";
import "./Task.css";
import TaskContext from "../TaskProvider/TaskContext.js";
import { ButtonDeleteTask } from "../ButtonDeleteTask/ButtonDeleteTask";
export function Task({ task }) {
  const { deleteTask } = use(TaskContext);
  console.log(task);
  return (
    <>
      <li className="task">
        {task.title}
        <ButtonDeleteTask onClick={() => deleteTask(task)} />
      </li>
    </>
  );
}
