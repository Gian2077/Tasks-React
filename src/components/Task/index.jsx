import { use, useLayoutEffect, useRef, useState } from "react";
import "./Task.css";
import TaskContext from "../TaskProvider/TaskContext.js";
import { ButtonTaskToggleStatus } from "../ButtonTaskToggleStatus/index.jsx";
import { ButtonTaskEdit } from "../ButtonTaskEdit/index.jsx";
import { ButtonTaskDelete } from "../ButtonTaskDelete/index.jsx";
export function Task({ task }) {
  const { openDialog, toggleTask, deleteTask } = use(TaskContext);
  const taskRef = useRef(null);
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const checkOverflow = (text) => {
    const overflowing = text.scrollWidth > text.clientWidth;
    setIsOverflowing(overflowing);
  };
  const calcOverflow = (text) => {
    return text.scrollWidth - text.clientWidth;
  };
  useLayoutEffect(() => {
    const task = taskRef.current;
    if (!task) return;
    const text = textRef.current;
    checkOverflow(text);
    task.style.setProperty(
      "--overflow-width",
      `-${calcOverflow(text) + 10}cqw`,
    );
    task.style.setProperty(
      "--animation-speed",
      `${calcOverflow(text) / 30 > 2 ? calcOverflow(text) / 30 : 5}s`,
    );
    window.addEventListener("resize", checkOverflow);
    return window.removeEventListener("resize", checkOverflow);
  }, [task.title]);
  const styles = ["task"];
  if (task.completed) {
    styles.push("completed");
  }
  return (
    <>
      <li className={styles.join(" ")} ref={taskRef}>
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
