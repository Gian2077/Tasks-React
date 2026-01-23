import { useState, useEffect } from "react";
import styles from "./FormTask.module.css";
export function FormTask({ onSubmit, taskTitle, taskType }) {
  const [type, setType] = useState("");
  useEffect(() => {
    if (taskType) {
      setType(taskType);
    }
  }, [taskType]);
  return (
    <>
      <form action={onSubmit} className={styles.form}>
        <div className={styles.wrapper}>
          <div className={styles.radio}>
            <input
              type="radio"
              name="type"
              id="daily"
              value="daily"
              required
              checked={type === "daily"}
              onChange={() => setType("daily")}
            />
            <label htmlFor="daily">Daily</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="type"
              id="weekly"
              value="weekly"
              checked={type === "weekly"}
              onChange={() => setType("weekly")}
            />
            <label htmlFor="weekly">Weekly</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="type"
              id="monthly"
              value="monthly"
              checked={type === "monthly"}
              onChange={() => setType("monthly")}
            />
            <label htmlFor="monthly">Monthly</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="type"
              id="yearly"
              value="yearly"
              checked={type === "yearly"}
              onChange={() => setType("yearly")}
            />
            <label htmlFor="yearly">Yearly</label>
          </div>
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={taskTitle}
          />
        </div>
        <button className={styles.btn}>Add Task</button>
      </form>
    </>
  );
}
