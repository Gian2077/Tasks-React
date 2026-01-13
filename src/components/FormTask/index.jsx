import styles from "./FormTask.module.css";
export function FormTask({ onSubmit, defaultValue }) {
  return (
    <>
      <form action={onSubmit} className={styles.form}>
        <label htmlFor="title">Task</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          defaultValue={defaultValue}
        />
        <button className={styles.btn}>Add Task</button>
      </form>
    </>
  );
}
