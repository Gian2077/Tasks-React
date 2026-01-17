import { useEffect, useRef, use } from "react";
import styles from "./Dialog.module.css";
import taskContext from "../TaskProvider/TaskContext.js";
export function Dialog({ isOpen, onClose, children }) {
  const { targetTask } = use(taskContext);
  const dialogRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);
  const openDialog = () => {
    dialogRef.current.showModal();
  };
  const closeDialog = () => {
    dialogRef.current.close();
  };
  return (
    <>
      <dialog className={styles.dialog} ref={dialogRef}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            {targetTask ? "Edit Task" : "Add Task"}
          </h2>
          <button className={styles.btn} onClick={onClose}>
            <i className="bi bi-x"></i>
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </dialog>
    </>
  );
}
