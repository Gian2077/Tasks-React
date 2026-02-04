import { use, useEffect, useRef, useState } from "react";
import "./Task.css";
import TaskContext from "../TaskProvider/TaskContext.js";
import { ButtonTaskToggleStatus } from "../ButtonTaskToggleStatus/index.jsx";
import { ButtonTaskEdit } from "../ButtonTaskEdit/index.jsx";
import { ButtonTaskDelete } from "../ButtonTaskDelete/index.jsx";
export function Task({ task }) {
  const { openDialog, toggleTask, deleteTask } = use(TaskContext);
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const checkOverflow = (text) => {
    setIsOverflowing(text.scrollWidth > text.clientWidth);
  };
  const calcOverflow = (text) => {
    return text.scrollWidth - text.clientWidth;
  };
  useEffect(() => {
    const text = textRef.current;
    if (!text) return;
    checkOverflow(text);
    window.addEventListener("resize", checkOverflow);
    return window.removeEventListener("resize", checkOverflow);
  }, [task.title]);
  const styles = ["task"];
  if (task.completed) {
    styles.push("completed");
  }
  return (
    <>
      <li className={styles.join(" ")}>
        <div className="wrapper">
          <h3
            className={`title ${isOverflowing ? "overflowing" : ""}`}
            ref={textRef}
          >
            {task.title}
          </h3>
        </div>
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
